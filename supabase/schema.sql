-- Home Build Tracker: database setup for Supabase.
-- Paste this whole file into Supabase > SQL Editor > New query, change the
-- email on the LAST line to your own, and press Run. Safe to run again.

-- 1. Who may use the app. Only emails on this list can see or change anything.
create table if not exists public.members (
  email     text primary key check (email = lower(email)),
  role      text not null default 'editor' check (role in ('owner', 'editor', 'viewer')),
  name      text not null default '',
  user_id   uuid unique,
  added_at  timestamptz not null default now()
);

-- 2. Everything the app stores (expenses, tasks, diary, documents...).
create table if not exists public.records (
  collection  text not null,
  id          text not null,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (collection, id)
);

alter table public.members enable row level security;
alter table public.records enable row level security;

-- The signed-in person's role, or null when their email is not on the list.
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.members where email = lower(auth.jwt() ->> 'email')
$$;

-- Called by the app after sign-in: links the person's account to their row.
create or replace function public.claim_membership(display_name text) returns text
language plpgsql security definer set search_path = public as $$
declare r text;
begin
  update public.members
     set user_id = auth.uid(),
         name = case when name = '' then coalesce(display_name, '') else name end
   where email = lower(auth.jwt() ->> 'email')
  returning role into r;
  return r;
end $$;

-- Merge a few fields into a record without overwriting the rest.
-- Runs with the caller's rights, so the policies below still apply.
create or replace function public.merge_record(p_collection text, p_id text, p_patch jsonb) returns void
language sql security invoker set search_path = public as $$
  insert into public.records (collection, id, data) values (p_collection, p_id, p_patch)
  on conflict (collection, id) do update
    set data = public.records.data || excluded.data, updated_at = now()
$$;

revoke all on function public.my_role() from public, anon;
revoke all on function public.claim_membership(text) from public, anon;
revoke all on function public.merge_record(text, text, jsonb) from public, anon;
grant execute on function public.my_role() to authenticated;
grant execute on function public.claim_membership(text) to authenticated;
grant execute on function public.merge_record(text, text, jsonb) to authenticated;

-- 3. Rules. Members read; owner and editors write; only the owner manages the list.
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
drop policy if exists "owner adds people" on public.members;
drop policy if exists "owner changes roles" on public.members;
drop policy if exists "owner removes people" on public.members;
create policy "members see the list" on public.members for select to authenticated using (public.my_role() is not null);
create policy "owner adds people" on public.members for insert to authenticated with check (public.my_role() = 'owner');
create policy "owner changes roles" on public.members for update to authenticated
  using (public.my_role() = 'owner') with check (public.my_role() = 'owner');
create policy "owner removes people" on public.members for delete to authenticated
  using (public.my_role() = 'owner' and role <> 'owner');

-- 4. Live updates: everyone sees new entries without refreshing.
do $$ begin
  alter publication supabase_realtime add table public.records;
exception when duplicate_object then null; end $$;

-- 5. Private storage for bills, site photos and documents.
insert into storage.buckets (id, name, public, file_size_limit)
values ('files', 'files', false, 20971520)
on conflict (id) do update set public = false;

drop policy if exists "members open files" on storage.objects;
drop policy if exists "editors upload files" on storage.objects;
create policy "members open files" on storage.objects for select to authenticated
  using (bucket_id = 'files' and public.my_role() is not null);
create policy "editors upload files" on storage.objects for insert to authenticated
  with check (bucket_id = 'files' and public.my_role() in ('owner', 'editor'));

-- 6. Make yourself the owner. CHANGE THIS EMAIL to the one you will sign in with.
insert into public.members (email, role) values (lower('YOUR-EMAIL@example.com'), 'owner')
on conflict (email) do update set role = 'owner';
