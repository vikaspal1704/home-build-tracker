/*
 * Connect the app to your free Supabase project.
 * Supabase > Project Settings > API: copy "Project URL" and the "anon public" key.
 * Both are safe to publish: the database rules in supabase/schema.sql decide who
 * can see anything, and only signed-in people on your family list get in.
 * Never put the "service_role" key here.
 */
window.HOME_BUILD_CONFIG = {
  SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR-ANON-PUBLIC-KEY',
  // Set to true after turning on Google in Supabase > Authentication > Providers.
  GOOGLE_SIGN_IN: false
};
