-- Home Build Tracker: database setup for Supabase.
-- Paste this whole file into Supabase > SQL Editor > New query and press Run.
-- Nothing to edit. Safe to run again; your saved entries are kept.
--
-- How access works: nobody signs in with email or a password. Each phone gets a
-- private anonymous session, and joins the project by entering a family code.
-- The first person to open the app starts the project and becomes the owner.

-- 0. Clean up the older email-based version, if it was ever run.
do $$ begin
  if exists (select 1 from information_schema.columns
             where table_schema = 'public' and table_name = 'members' and column_name = 'email') then
    drop table public.members cascade;
  end if;
end $$;
drop table if exists public.invites cascade;
drop function if exists public.claim_membership(text);
drop function if exists public.accept_invite(text, text);
drop function if exists public.create_invite(text, integer);

-- 1. Who is in the project. One row per phone/browser that joined.
create table if not exists public.members (
  user_id    uuid primary key,
  name       text not null default '',
  role       text not null check (role in ('owner', 'editor', 'viewer')),
  joined_at  timestamptz not null default now()
);

-- 2. The codes that let people join: one per role. Changing a code stops the old one.
create table if not exists public.join_codes (
  role        text primary key check (role in ('owner', 'editor', 'viewer')),
  code        text not null unique,
  uses        integer not null default 0,
  updated_at  timestamptz not null default now()
);

-- 3. Wrong-code attempts, to stop anyone guessing codes.
create table if not exists public.join_failures (
  user_id  uuid not null,
  at       timestamptz not null default now()
);
create index if not exists join_failures_user_at on public.join_failures (user_id, at);

-- 4. Everything the app stores (expenses, tasks, diary, documents...).
create table if not exists public.records (
  collection  text not null,
  id          text not null,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (collection, id)
);

alter table public.members enable row level security;
alter table public.join_codes enable row level security;
alter table public.join_failures enable row level security;
alter table public.records enable row level security;

-- ---------- functions ----------

-- The caller's role, or null when this phone has not joined.
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.members where user_id = auth.uid()
$$;

-- A fresh code like K7MP-Q4XT (no 0/O or 1/I, so it is easy to read aloud).
create or replace function public.new_join_code() returns text
language plpgsql volatile set search_path = public as $$
declare
  alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  bytes bytea := decode(replace(gen_random_uuid()::text, '-', ''), 'hex')
              || decode(replace(gen_random_uuid()::text, '-', ''), 'hex');
  s text := '';
  i int;
begin
  -- bytes 0-5 and 16-17 are fully random in a v4 uuid; 256 % 32 = 0 keeps it uniform
  foreach i in array array[0, 1, 2, 3, 4, 5, 16, 17] loop
    s := s || substr(alphabet, 1 + get_byte(bytes, i) % 32, 1);
  end loop;
  return substr(s, 1, 4) || '-' || substr(s, 5, 4);
end $$;

-- Before anyone has joined: 'new' means the project has no owner yet.
create or replace function public.project_status() returns text
language sql stable security definer set search_path = public as $$
  select case when exists (select 1 from public.members where role = 'owner') then 'ready' else 'new' end
$$;

-- First person only: start the project, become the owner, create the codes.
create or replace function public.start_project(p_name text) returns text
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if exists (select 1 from public.members where role = 'owner') then
    raise exception 'project already started';
  end if;
  insert into public.members (user_id, name, role) values (auth.uid(), left(coalesce(p_name, ''), 60), 'owner');
  insert into public.join_codes (role, code) values
    ('owner', public.new_join_code()), ('editor', public.new_join_code()), ('viewer', public.new_join_code())
  on conflict (role) do update set code = excluded.code, uses = 0, updated_at = now();
  return 'owner';
end $$;

-- Join with a code. Returns the role, or null for a wrong code.
-- Someone already in the project keeps the higher of their role and the code's role.
create or replace function public.join_project(p_code text, p_name text) returns text
language plpgsql security definer set search_path = public as $$
declare
  v_clean text := upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));
  v_code  text := substr(v_clean, 1, 4) || '-' || substr(v_clean, 5, 4);
  v_role  text;
  v_have  text;
  rank    jsonb := '{"viewer":1,"editor":2,"owner":3}';
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if (select count(*) from public.join_failures where user_id = auth.uid() and at > now() - interval '1 hour') >= 10 then
    raise exception 'too many tries';
  end if;
  select role into v_role from public.join_codes where code = v_code;
  if v_role is null then
    insert into public.join_failures (user_id) values (auth.uid());
    return null;
  end if;
  select role into v_have from public.members where user_id = auth.uid();
  if v_have is not null and (rank ->> v_have)::int >= (rank ->> v_role)::int then
    if coalesce(p_name, '') <> '' then update public.members set name = left(p_name, 60) where user_id = auth.uid(); end if;
    return v_have;
  end if;
  insert into public.members (user_id, name, role) values (auth.uid(), left(coalesce(p_name, ''), 60), v_role)
  on conflict (user_id) do update set role = excluded.role,
    name = case when excluded.name <> '' then excluded.name else public.members.name end;
  update public.join_codes set uses = uses + 1 where role = v_role;
  return v_role;
end $$;

-- Owner only: replace a code. The old one stops working at once.
create or replace function public.reset_join_code(p_role text) returns text
language plpgsql security definer set search_path = public as $$
declare v text;
begin
  if public.my_role() is distinct from 'owner' then raise exception 'only the owner can change codes'; end if;
  update public.join_codes set code = public.new_join_code(), uses = 0, updated_at = now()
   where role = p_role returning code into v;
  return v;
end $$;

-- Change your own display name.
create or replace function public.set_my_name(p_name text) returns void
language sql security definer set search_path = public as $$
  update public.members set name = left(coalesce(p_name, ''), 60) where user_id = auth.uid()
$$;

-- Merge a few fields into a record without overwriting the rest.
-- Runs with the caller's rights, so the policies below still apply.
create or replace function public.merge_record(p_collection text, p_id text, p_patch jsonb) returns void
language sql security invoker set search_path = public as $$
  insert into public.records (collection, id, data) values (p_collection, p_id, p_patch)
  on conflict (collection, id) do update
    set data = public.records.data || excluded.data, updated_at = now()
$$;

revoke all on function public.my_role() from public, anon;
revoke all on function public.new_join_code() from public, anon, authenticated;
revoke all on function public.project_status() from public;
revoke all on function public.start_project(text) from public, anon;
revoke all on function public.join_project(text, text) from public, anon;
revoke all on function public.reset_join_code(text) from public, anon;
revoke all on function public.set_my_name(text) from public, anon;
revoke all on function public.merge_record(text, text, jsonb) from public, anon;
grant execute on function public.my_role() to authenticated;
grant execute on function public.project_status() to anon, authenticated;
grant execute on function public.start_project(text) to authenticated;
grant execute on function public.join_project(text, text) to authenticated;
grant execute on function public.reset_join_code(text) to authenticated;
grant execute on function public.set_my_name(text) to authenticated;
grant execute on function public.merge_record(text, text, jsonb) to authenticated;

-- ---------- rules ----------
-- Members read; owner and editors write; only the owner manages people and codes.

drop policy if exists "members read records" on public.records;
drop policy if exists "editors add records" on public.records;
drop policy if exists "editors change records" on public.records;
drop policy if exists "editors delete records" on public.records;
create policy "members read records" on public.records for select to authenticated using (public.my_role() is not null);
create policy "editors add records" on public.records for insert to authenticated with check (public.my_role() in ('owner', 'editor'));
create policy "editors change records" on public.records for update to authenticated
  using (public.my_role() in ('owner', 'editor')) with check (public.my_role() in ('owner', 'editor'));
create policy "editors delete records" on public.records for delete to authenticated using (public.my_role() in ('owner', 'editor'));

drop policy if exists "members see the list" on public.members;
drop policy if exists "owner changes roles" on public.members;
drop policy if exists "owner removes people" on public.members;
create policy "members see the list" on public.members for select to authenticated using (public.my_role() is not null);
create policy "owner changes roles" on public.members for update to authenticated
  using (public.my_role() = 'owner' and role <> 'owner') with check (role in ('editor', 'viewer'));
create policy "owner removes people" on public.members for delete to authenticated
  using (public.my_role() = 'owner' and role <> 'owner');

-- Owner sees every code; family members (editors) see the family and view-only codes so they can share them.
drop policy if exists "see join codes" on public.join_codes;
create policy "see join codes" on public.join_codes for select to authenticated
  using (public.my_role() = 'owner' or (public.my_role() = 'editor' and role <> 'owner'));

-- join_failures has no policies: only the functions above touch it.

-- ---------- live updates ----------
do $$ begin
  alter publication supabase_realtime add table public.records;
exception when duplicate_object then null; end $$;

-- ---------- private storage for bills, site photos and documents ----------
insert into storage.buckets (id, name, public, file_size_limit)
values ('files', 'files', false, 20971520)
on conflict (id) do update set public = false;

drop policy if exists "members open files" on storage.objects;
drop policy if exists "editors upload files" on storage.objects;
create policy "members open files" on storage.objects for select to authenticated
  using (bucket_id = 'files' and public.my_role() is not null);
create policy "editors upload files" on storage.objects for insert to authenticated
  with check (bucket_id = 'files' and public.my_role() in ('owner', 'editor'));
