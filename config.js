/*
 * Connect the app to your free Supabase project.
 * Supabase > Project Settings > API Keys: copy the Project URL and the PUBLISHABLE key
 * (sb_publishable_...). The older "anon public" key also works.
 * Both are safe to publish: the database rules in supabase/schema.sql decide who
 * can see anything, and only phones that joined with a family code get in.
 * Never put a SECRET key (sb_secret_... or service_role) here: it skips every rule.
 */
window.HOME_BUILD_CONFIG = {
  SUPABASE_URL: 'https://bpcbnjaojglbkprplbvs.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_SGippEuc2y2uNxXSV7oJiA_UzbTGFQS'
};
