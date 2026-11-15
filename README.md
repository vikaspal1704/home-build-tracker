# Our Home Build

One place for the family to run a house rebuild, from demolition to griha pravesh.
It works on phones and computers, in English and हिंदी.

- **Money:** every payment, advances to contractors, and how much is still owed.
- **Contractor installments:** split the agreed amount by stage and pay each one when the work is done.
- **Site diary:** who came to work each day, their wages, what got done, with photos.
- **Tasks and stages:** what needs doing next, and how far the build has got.
- **Documents:** approvals, agreements, drawings, bills and warranties, with expiry reminders.
- **Decisions:** tiles, colours and fittings, with photos, family votes and the final choice.
- **Family & access:** only people you add can open it. Each person is either "can add and edit" or "can only view".

It is a plain website (HTML, CSS and JavaScript, no build step). Data, sign-in and photos
live in a free [Supabase](https://supabase.com) project. Hosting is free on GitHub Pages,
Vercel, Netlify or Cloudflare Pages.

---

## Setup (about 15 minutes, one time)

### 1. Create the free database

1. Go to [supabase.com](https://supabase.com), sign up, and click **New project**.
   Pick the region closest to you (for India: **Mumbai**). Save the database password somewhere safe.
2. When the project is ready, open **SQL Editor → New query**.
3. Open [`supabase/schema.sql`](supabase/schema.sql) from this repo and copy all of it into the editor.
4. On the **last line**, replace `YOUR-EMAIL@example.com` with the email you will sign in with.
5. Click **Run**. You should see "Success". (Running it again later is safe.)

### 2. Turn on sign-in with a 6-digit code

The app signs people in with a code sent to their email, so nobody needs a password.

1. In Supabase, go to **Authentication → Emails** (called **Email Templates** in some versions).
2. Open the **Magic Link** template and replace its body with:
   ```html
   <h2>Your sign-in code</h2>
   <p>Enter this code in the Home Build app: <strong>{{ .Token }}</strong></p>
   ```
3. Do the same for the **Confirm signup** template, because people who are signing in for the first time get this one.
4. Go to **Authentication → URL Configuration** and set **Site URL** to your website address from step 4 below.

The free plan sends only a few emails per hour, which is enough for one family. If you
hit the limit, add your own email sender under **Authentication → Emails → SMTP Settings**.
Gmail, Brevo and Resend all have free tiers.

### 3. Connect the app to the database

1. In Supabase, open **Project Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. Paste them into [`config.js`](config.js) in this repo and commit the change.

These two values are meant to be public. The database rules only let signed-in people who
are on your family list read or change anything. **Never** put the `service_role` key in this repo.

### 4. Put it online for free

**Option A: GitHub Pages** (needs the repo to be public on a free GitHub account)

1. In this repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or open **Actions → Deploy to GitHub Pages → Run workflow**).
4. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

**Option B: Vercel** (works with a private repo)

1. Sign in at [vercel.com](https://vercel.com) with GitHub and click **Add New → Project**.
2. Import this repo. Leave every setting at its default (no build command) and click **Deploy**.
3. Your site will be at `https://<project>.vercel.app`. Every push to `main` updates it.

Netlify and Cloudflare Pages work the same way as Vercel: import the repo, no build command,
publish the repo root.

### 5. Invite the family

1. Open your site, choose a language, and sign in with the email you put in `schema.sql`.
2. Go to **More → Family & access** and add each person's email:
   - **Can add and edit** for family members who will enter expenses and diary.
   - **Can only view** for anyone who should only look, such as a contractor.
3. Send them the link and tell them to sign in with that same email.

On a phone, use the browser menu → **Add to Home screen**, and it opens like an app.

---

## Optional: "Continue with Google"

1. Follow Supabase's guide to turn on **Authentication → Providers → Google**.
   You need a free Google Cloud OAuth client.
2. Add your site address to **Authentication → URL Configuration → Redirect URLs**.
3. In `config.js`, set `GOOGLE_SIGN_IN: true`.

## Good to know

- **Free plan limits:** 500 MB database and 1 GB of files, far more than one house needs.
  Supabase pauses a free project after 7 days with no use at all. Opening the app once a week
  avoids that, and a paused project can be restored from the dashboard.
- **Backups:** Supabase → **Database → Backups**, or export the `records` table as CSV from the Table Editor.
- **Photos and documents** are stored privately. Links to them expire after a few hours and only work for signed-in family members.

## Files

| File | What it is |
|---|---|
| `index.html`, `styles.css` | The page and its look |
| `app.js` | All screens, forms and both languages |
| `backend.js` | Talks to Supabase: data, live updates, sign-in, files |
| `config.js` | Your Supabase address and public key |
| `supabase/schema.sql` | Database tables and access rules, run once |
| `vendor/` | The Supabase browser library (v2.45.4), included so the site does not depend on a CDN |
| `.github/workflows/pages.yml` | Free deploy to GitHub Pages |
