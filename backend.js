/*
 * Backend: Supabase (free tier) behind a small document API the app uses.
 *
 *   db.collection(name).onSnapshot(fn) / .add(data) / .doc(id)
 *   db.doc("collection/id").onSnapshot(fn) / .set(data) / .update(patch) / .delete()
 *
 * Every record lives in one table, public.records (collection, id, data jsonb).
 * Who may read or write is decided in the database by row-level security,
 * using the public.members list (see supabase/schema.sql). The browser key in
 * config.js is public by design; it grants nothing without a signed-in member.
 */
(function () {
  const CFG = window.HOME_BUILD_CONFIG || {};
  const BUCKET = 'files';
  function atobSafe(s) { try { return atob((s || '').replace(/-/g, '+').replace(/_/g, '/')); } catch { return ''; } }
  const SIGNED_URL_SECONDS = 60 * 60 * 6;
  const RELOAD_DEBOUNCE_MS = 150;
  const PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

  const isSecretKey = /^sb_secret_/.test(CFG.SUPABASE_ANON_KEY || '') || /service_role/.test(atobSafe((CFG.SUPABASE_ANON_KEY || '').split('.')[1]));
  if (isSecretKey) console.error('config.js holds a SECRET key. Use the publishable (or anon) key; the secret key must never be in a website.');
  const configured = !isSecretKey && !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY && !/YOUR-/.test(CFG.SUPABASE_URL + CFG.SUPABASE_ANON_KEY));
  const sb = configured && window.supabase
    ? window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true } })
    : null;

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
        const { data } = await sb.from('members').select('user_id,name,email').in('user_id', want);
        (data || []).forEach(m => { profileCache[m.user_id] = { id: m.user_id, name: m.name || (m.email || '').split('@')[0] }; });
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

  /* ---------- family & access list ---------- */
  const members = {
    async list() {
      const { data, error } = await sb.from('members').select('email,name,role,user_id').order('added_at');
      fail(error); return data || [];
    },
    async add(email, name, newRole) {
      const { error } = await sb.from('members').insert({ email: email.trim().toLowerCase(), name: name.trim(), role: newRole });
      fail(error);
    },
    async setRole(email, newRole) { const { error } = await sb.from('members').update({ role: newRole }).eq('email', email); fail(error); },
    async remove(email) { const { error } = await sb.from('members').delete().eq('email', email); fail(error); }
  };

  /* ---------- sign in ---------- */
  const auth = {
    // Supabase's standard (free) email contains a sign-in link back to this page.
    async sendLink(email) {
      const { error } = await sb.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: { shouldCreateUser: true, emailRedirectTo: location.origin + location.pathname }
      });
      fail(error);
    },
    async google() {
      const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
      fail(error);
    },
    async signOut() { await sb.auth.signOut(); location.hash = ''; location.reload(); }
  };

  /*
   * start(onState) reports one of:
   *   {state:'setup'}                      config.js not filled in yet
   *   {state:'signin'}                     nobody signed in on this device
   *   {state:'noaccess', email}            signed in, but not on the family list
   *   {state:'ready', email, role}         signed in member; db/user/assets usable
   */
  // A sign-in link that expired or was already used comes back as #error=...
  const linkError = /(^|[#&])error(_code)?=/.test(location.hash);
  if (linkError) history.replaceState(null, '', location.pathname + location.search);

  async function start(onState) {
    if (!sb) { onState({ state: 'setup' }); return; }
    let reported = null;
    const resolve = async s => {
      session = s;
      if (!s) { role = null; if (reported !== 'signin') { reported = 'signin'; onState({ state: 'signin', linkError }); } return; }
      const email = s.user.email || '';
      const displayName = s.user.user_metadata?.full_name || s.user.user_metadata?.name || '';
      const { data, error } = await sb.rpc('claim_membership', { display_name: displayName });
      role = error ? null : data;
      const next = role ? 'ready' : 'noaccess';
      if (reported === next) return;
      reported = next;
      onState({ state: next, email, role });
    };
    const { data } = await sb.auth.getSession();
    await resolve(data.session);
    sb.auth.onAuthStateChange((_event, s) => { if ((s?.user?.id || null) !== (session?.user?.id || null)) resolve(s); else session = s; });
  }

  window.Backend = {
    configured, start, db, user, assets, members, auth,
    fileUrl, onFileUrls(fn) { onUrls = fn; },
    googleEnabled: !!CFG.GOOGLE_SIGN_IN
  };
})();
