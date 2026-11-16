/*
 * Backend: Supabase (free tier) behind a small document API the app uses.
 *
 *   db.collection(name).onSnapshot(fn) / .add(data) / .doc(id)
 *   db.doc("collection/id").onSnapshot(fn) / .set(data) / .update(patch) / .delete()
 *
 * Every record lives in one table, public.records (collection, id, data jsonb).
 * Who may read or write is decided in the database by row-level security,
 * using the public.members list (see supabase/schema.sql).
 *
 * No email or password: each phone gets a private anonymous Supabase session
 * and joins the project with a family code (or starts it, the very first time).
 * The browser key in config.js is public by design; it grants nothing until
 * this phone has joined with a valid code.
 */
(function () {
  const CFG = window.HOME_BUILD_CONFIG || {};
  const BUCKET = 'files';
  const SIGNED_URL_SECONDS = 60 * 60 * 6;
  const RELOAD_DEBOUNCE_MS = 150;
  const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  function atobSafe(s) { try { return atob((s || '').replace(/-/g, '+').replace(/_/g, '/')); } catch { return ''; } }

  const isSecretKey = /^sb_secret_/.test(CFG.SUPABASE_ANON_KEY || '') || /service_role/.test(atobSafe((CFG.SUPABASE_ANON_KEY || '').split('.')[1]));
  if (isSecretKey) console.error('config.js holds a SECRET key. Use the publishable (or anon) key; the secret key must never be in a website.');
  const configured = !isSecretKey && !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY && !/YOUR-/.test(CFG.SUPABASE_URL + CFG.SUPABASE_ANON_KEY));
  const sb = configured && window.supabase
    ? window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true } })
    : null;

  /* ---------- family code in the link: ?code=K7MP-Q4XT ---------- */
  const CODE_RE = /[^A-Za-z0-9]/g;
  const formatCode = raw => { const c = String(raw || '').replace(CODE_RE, '').toUpperCase().slice(0, 8); return c.length > 4 ? c.slice(0, 4) + '-' + c.slice(4) : c; };
  let codeFromLink = '';
  (function readCodeFromLink() {
    const params = new URLSearchParams(location.search);
    const raw = params.get('code');
    if (!raw) return;
    codeFromLink = formatCode(raw);
    params.delete('code');
    const rest = params.toString();
    history.replaceState(null, '', location.pathname + (rest ? '?' + rest : '') + location.hash);
  })();
  const joinLink = code => location.origin + location.pathname + '?code=' + encodeURIComponent(code);

  /* ---------- live collections ---------- */
  const listeners = new Map();   // collection -> Set<{next, err}>
  const reloadTimers = new Map();
  let channel = null;

  const snapshotOf = rows => ({ docs: rows.map(r => ({ id: r.id, exists: true, data: () => r.data || {} })) });

  async function loadCollection(collection) {
    const subs = listeners.get(collection);
    if (!subs || !subs.size) return;
    const { data, error } = await sb.from('records').select('id,data').eq('collection', collection);
    if (error) { subs.forEach(s => s.err && s.err(error)); return; }
    const snap = snapshotOf(data || []);
    subs.forEach(s => s.next(snap));
  }
  function scheduleReload(collection) {
    clearTimeout(reloadTimers.get(collection));
    reloadTimers.set(collection, setTimeout(() => loadCollection(collection), RELOAD_DEBOUNCE_MS));
  }
  function ensureChannel() {
    if (channel) return;
    channel = sb.channel('records-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'records' }, payload => {
        const collection = payload.new?.collection || payload.old?.collection;
        if (collection) scheduleReload(collection);
        else listeners.forEach((_, c) => scheduleReload(c));
      })
      .subscribe();
  }
  function listen(collection, sub) {
    if (!listeners.has(collection)) listeners.set(collection, new Set());
    listeners.get(collection).add(sub);
    ensureChannel();
    loadCollection(collection);
    return () => listeners.get(collection)?.delete(sub);
  }
  const fail = error => { if (error) throw error; };
  const newId = () => (crypto.randomUUID ? crypto.randomUUID().replace(/-/g, '').slice(0, 20) : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));

  function docRef(collection, id) {
    return {
      id,
      path: collection + '/' + id,
      onSnapshot(next, err) {
        return listen(collection, {
          next: snap => { const d = snap.docs.find(x => x.id === id); next(d || { id, exists: false, data: () => undefined }); },
          err
        });
      },
      async set(data) {
        const { error } = await sb.from('records').upsert({ collection, id, data, updated_at: new Date().toISOString() });
        fail(error); scheduleReload(collection);
      },
      async update(patch) {
        const { error } = await sb.rpc('merge_record', { p_collection: collection, p_id: id, p_patch: patch });
        fail(error); scheduleReload(collection);
      },
      async delete() {
        const { error } = await sb.from('records').delete().eq('collection', collection).eq('id', id);
        fail(error); scheduleReload(collection);
      }
    };
  }
  const db = {
    doc(path) { const [collection, id] = path.split('/'); return docRef(collection, id); },
    collection(collection) {
      return {
        onSnapshot(next, err) { return listen(collection, { next, err }); },
        doc(id) { return docRef(collection, id || newId()); },
        async add(data) { const ref = docRef(collection, newId()); await ref.set(data); return ref; }
      };
    }
  };

  /* ---------- people ---------- */
  let session = null, role = null;
  const profileCache = {};
  const user = {
    async id() { return session?.user?.id || null; },
    async can(what) { return what === 'data.write' ? (role === 'owner' || role === 'editor') : null; },
    async profiles(ids) {
      const want = [...new Set([].concat(ids))].filter(id => id && !(id in profileCache));
      if (want.length) {
        const { data } = await sb.from('members').select('user_id,name').in('user_id', want);
        (data || []).forEach(m => { profileCache[m.user_id] = { id: m.user_id, name: m.name || '' }; });
        want.forEach(id => { if (!(id in profileCache)) profileCache[id] = { id, name: '' }; });
      }
      return Object.fromEntries([].concat(ids).map(id => [id, profileCache[id] || { id, name: '' }]));
    }
  };

  /* ---------- files (private bucket, signed links) ---------- */
  const urlCache = new Map();   // path -> signed url
  const pending = new Set();
  let urlTimer = null, onUrls = null;
  function fileUrl(path) {
    if (!path) return PIXEL;
    if (urlCache.has(path)) return urlCache.get(path);
    pending.add(path);
    clearTimeout(urlTimer);
    urlTimer = setTimeout(async () => {
      const batch = [...pending]; pending.clear();
      const { data } = await sb.storage.from(BUCKET).createSignedUrls(batch, SIGNED_URL_SECONDS);
      (data || []).forEach(r => { if (r.signedUrl) urlCache.set(r.path, r.signedUrl); });
      onUrls && onUrls();
    }, 30);
    return PIXEL;
  }
  const assets = {
    async upload(file) {
      const ext = ((file.name || '').split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5) || 'bin';
      const path = `${new Date().toISOString().slice(0, 7)}/${newId()}.${ext}`;
      const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type || undefined, upsert: false });
      fail(error);
      return { id: path, contentType: file.type || '' };
    }
  };

  /* ---------- people in the project, and the join codes ---------- */
  const members = {
    async list() {
      const { data, error } = await sb.from('members').select('user_id,name,role,joined_at').order('joined_at');
      fail(error); return data || [];
    },
    async setRole(userId, newRole) { const { error } = await sb.from('members').update({ role: newRole }).eq('user_id', userId); fail(error); },
    async remove(userId) { const { error } = await sb.from('members').delete().eq('user_id', userId); fail(error); },
    async setMyName(name) { const { error } = await sb.rpc('set_my_name', { p_name: name }); fail(error); }
  };
  const codes = {
    async list() {
      const { data, error } = await sb.from('join_codes').select('role,code,uses');
      fail(error); return data || [];
    },
    async reset(forRole) { const { data, error } = await sb.rpc('reset_join_code', { p_role: forRole }); fail(error); return data; },
    link: joinLink,
    format: formatCode
  };

  /* ---------- joining ---------- */
  // An anonymous session is created only when someone actually joins or starts.
  async function ensureSession() {
    if (session) return;
    const { data, error } = await sb.auth.signInAnonymously();
    if (error) { const e = new Error(error.message); e.code = /anonymous/i.test(error.message || '') ? 'anon_disabled' : 'signin_failed'; throw e; }
    session = data.session;
  }
  let reportReady = null;
  async function finishJoin(newRole) {
    role = newRole;
    reportReady && reportReady({ state: 'ready', role, joined: true });
  }
  const access = {
    async startProject(name) {
      await ensureSession();
      const { data, error } = await sb.rpc('start_project', { p_name: name });
      if (error) { const e = new Error(error.message); e.code = /already started/i.test(error.message) ? 'already_started' : 'failed'; throw e; }
      await finishJoin(data);
    },
    async join(code, name) {
      await ensureSession();
      const { data, error } = await sb.rpc('join_project', { p_code: code, p_name: name });
      if (error) { const e = new Error(error.message); e.code = /too many/i.test(error.message) ? 'too_many' : 'failed'; throw e; }
      if (!data) { const e = new Error('wrong code'); e.code = 'wrong_code'; throw e; }
      await finishJoin(data);
    },
    // Leaves the project on this phone only. Joining again needs a code.
    async leaveThisPhone() { await sb.auth.signOut(); location.hash = ''; location.reload(); }
  };

  /*
   * start(onState) reports one of:
   *   {state:'setup'}                       config.js not filled in yet
   *   {state:'start'}                       nobody has started the project: offer "Start my project"
   *   {state:'join', code}                  project exists, this phone has not joined: ask for name + code
   *   {state:'ready', role, joined}         this phone is in the project; db/user/assets usable
   */
  async function start(onState) {
    if (!sb) { onState({ state: 'setup' }); return; }
    reportReady = onState;
    const { data } = await sb.auth.getSession();
    session = data.session;
    if (session) {
      const res = await sb.rpc('my_role');
      role = res.error ? null : res.data;
      if (role) {
        // A link with a higher code (e.g. the owner code on a new phone) still upgrades.
        if (codeFromLink) { try { const up = await sb.rpc('join_project', { p_code: codeFromLink, p_name: '' }); if (up.data) role = up.data; } catch {} }
        onState({ state: 'ready', role, joined: false }); return;
      }
    }
    const status = await sb.rpc('project_status');
    if (status.error) { onState({ state: 'error' }); return; }
    onState(status.data === 'new' && !codeFromLink ? { state: 'start' } : { state: 'join', code: codeFromLink });
  }

  window.Backend = {
    configured, start, db, user, assets, members, codes, access,
    fileUrl, onFileUrls(fn) { onUrls = fn; }
  };
})();
