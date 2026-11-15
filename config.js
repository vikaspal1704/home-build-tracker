/*
 * Connect the app to your free Supabase project.
 * Supabase > Project Settings > API Keys: copy the Project URL and the PUBLISHABLE key
 * (sb_publishable_...). The older "anon public" key also works.
 * Both are safe to publish: the database rules in supabase/schema.sql decide who
 * can see anything, and only signed-in people on your family list get in.
 * Never put a SECRET key (sb_secret_... or service_role) here: it skips every rule.
 */
window.HOME_BUILD_CONFIG = {
  SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_SGippEuc2y2uNxXSV7oJiA_UzbTGFQS',
  // Set to true after turning on Google in Supabase > Authentication > Providers.
  GOOGLE_SIGN_IN: false
};
