# Our Home Build

One place for the family to run a house rebuild, from demolition to griha pravesh.
It works on phones and computers, in English and हिंदी.

- **Money:** every payment, advances to contractors, and how much is still owed.
- **Contractor installments:** split the agreed amount by stage and pay each one when the work is done.
- **Per sq ft contracts:** "with material" or "labour only". The total is worked out from rate × area, and Home shows the cost per sq ft so far.
- **Site diary:** who came to work each day, what got done, with photos. Daily wages are tracked only if you pay labour yourself.
- **Tasks and stages:** what needs doing next, and how far the build has got.
- **Documents:** approvals, agreements, drawings, bills and warranties, with expiry reminders.
- **Decisions:** tiles, colours and fittings, with photos, family votes and the final choice.
- **Family & access:** only people you add can open it. Each person is either "can add and edit" or "can only view".

It is a plain website (HTML, CSS and JavaScript, no build step). Data, sign-in and photos
live in a free [Supabase](https://supabase.com) project. Hosting is free on GitHub Pages,
Vercel, Netlify or Cloudflare Pages.

---

## Setup (about 15 minutes, one time, all free)

### 1. Create the free database

1. Go to [supabase.com](https://supabase.com), sign up, and click **New project**.
   Pick the region closest to you (for India: **Mumbai**). Save the database password somewhere safe.
2. When the project is ready, open **SQL Editor → New query**.
3. Open [`supabase/schema.sql`](supabase/schema.sql) from this repo and copy all of it into the editor.
4. On the **last line**, replace `YOUR-EMAIL@example.com` with the email you will sign in with.
5. Click **Run**. You should see "Success". (Running it again later is safe.)

### 2. Sign-in: nothing to set up for email links

People sign in with a **link sent to their email**, with no password. This uses Supabase's
standard email exactly as it comes, so it works on the free plan with no template changes.

The built-in sender only sends a few emails per hour. That is fine for a family, because
each phone stays signed in after the first time. To remove the limit, turn on
**Continue with Google** (see "Google sign-in" below). It is free and sends no emails at all.

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

### 5. Point sign-in links at your site

In Supabase, go to **Authentication → URL Configuration**:
- **Site URL:** your site address, for example `https://<your-username>.github.io/home-build-tracker/`
- **Redirect URLs:** add the same address.

Without this, the link in the sign-in email opens the wrong page.

### 6. Invite the family

1. Open your site, choose a language, and sign in with the email you put in `schema.sql`.
2. Go to **More → Family & access** and add each person's email:
   - **Can add and edit** for family members who will enter expenses and diary.
   - **Can only view** for anyone who should only look, such as a contractor.
3. Send them the link and tell them to sign in with that same email.

On a phone, use the browser menu → **Add to Home screen**, and it opens like an app.

---

## Google sign-in (free, recommended for parents)

It needs one tap, sends no email, and has no limit. Each person must use the Google account
whose email is on your family list.

1. Go to [console.cloud.google.com](https://console.cloud.google.com) and create a project (any name).
2. Open **Google Auth Platform** (or **APIs & Services → OAuth consent screen**):
   - **Branding:** app name `Our Home Build`, plus your email as the support and contact email.
   - **Audience:** choose **External**, then click **Publish app** so any Google account can sign in.
     Only basic sign-in details are used, so Google does not need to review it.
3. Go to **Clients → Create client → Web application**:
   - **Authorized JavaScript origins:** `https://<your-username>.github.io`
   - **Authorized redirect URIs:** the **Callback URL** shown in Supabase under
     **Authentication → Sign In / Providers → Google**. It looks like
     `https://<project-ref>.supabase.co/auth/v1/callback`.
4. Copy the **Client ID** and **Client secret** into that Supabase Google page, switch it on, and click **Save**.
5. In `config.js`, set `GOOGLE_SIGN_IN: true` and commit.

The sign-in screen then shows **Continue with Google** at the top, with email links underneath as a backup.

## Optional: more sign-in emails

To send more than a few email links per hour, connect a free email service under
**Authentication → Emails → SMTP Settings**. For example, Brevo's free plan sends 300 emails a day.

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
| `vendor/` | The Supabase browser library (v2.118.0), included so the site does not depend on a CDN |
| `.github/workflows/pages.yml` | Free deploy to GitHub Pages |
