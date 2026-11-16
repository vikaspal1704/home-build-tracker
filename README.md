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
- **Join with a code:** no email and no password. Send the family code on WhatsApp; people type their name and they're in.

It is a plain website (HTML, CSS and JavaScript, no build step). Data and photos live in a free
[Supabase](https://supabase.com) project. Hosting is free on GitHub Pages, Vercel, Netlify or Cloudflare Pages.

---

## Setup (about 10 minutes, one time, all free)

### 1. Create the free database

1. Go to [supabase.com](https://supabase.com), sign up, and click **New project**.
   Pick the region closest to you (for India: **Mumbai**).
2. When it is ready, open **SQL Editor → New query**.
3. Copy all of [`supabase/schema.sql`](supabase/schema.sql) into the editor and click **Run**.
   There is nothing to edit. Running it again later is safe and keeps your entries.

### 2. Turn on joining without email

1. In Supabase, go to **Authentication → Sign In / Providers**.
2. Switch on **Allow anonymous sign-ins** and click **Save**.

This gives each phone a private, nameless session. It cannot see anything until it joins
with one of your codes. It sends no emails and is free.

### 3. Connect the app to the database

1. In Supabase, open **Project Settings → API Keys**.
2. Copy the **Project URL** and the **publishable** key (`sb_publishable_...`).
3. Paste them into [`config.js`](config.js) and commit.

Both values are meant to be public. **Never** put a secret key (`sb_secret_...` or `service_role`)
in this repo. The app refuses to start if you do.

### 4. Put it online for free

**GitHub Pages** (needs the repo to be public on a free GitHub account):

1. In this repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**. After this, every push to `main` redeploys.
4. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

**Vercel / Netlify / Cloudflare Pages** (these work with a private repo): import the repo, use
no build command, and publish the repo root.

### 5. Start the project and invite the family

1. Open your site **before you share it with anyone**. Choose a language, type your name, and tap
   **Start my project**. The first person to do this becomes the owner.
2. You land on **Family & access** with three codes:
   - **Family code:** can add and edit. Send it to the family with the **WhatsApp** button.
   - **View-only code:** can see everything but change nothing. For example, for a contractor.
   - **Owner code:** keep it private. It gets you owner access back on a new phone.
3. Family members open the link, type their name, and tap **Join**. The code is already filled in.

If a code reaches the wrong person, tap **Change code**: the old one stops working at once.
You can also change anyone's role or remove them from the list.

On a phone, use the browser menu → **Add to Home screen**, and it opens like an app.

---

## Good to know

- **Each phone stays in** after joining. If someone clears their browser data or switches phones,
  they just open the link again. **Leave on this phone** (under More) signs that phone out.
- **Guessing is blocked:** codes have about a trillion possibilities, and each phone gets 10 wrong
  tries an hour.
- **Free plan limits:** 500 MB database and 1 GB of files, far more than one house needs.
  Supabase pauses a free project after 7 days with no use at all. Opening the app once a week
  avoids that, and a paused project can be restored from the dashboard.
- **Backups:** Supabase → **Database → Backups**, or export the `records` table as CSV from the Table Editor.
- **Photos and documents** are stored privately. Links to them expire after a few hours and only
  work for people in the project.

## Files

| File | What it is |
|---|---|
| `index.html`, `styles.css` | The page and its look |
| `app.js` | All screens, forms and both languages |
| `backend.js` | Talks to Supabase: data, live updates, joining with a code, files |
| `config.js` | Your Supabase address and publishable key |
| `supabase/schema.sql` | Database tables and access rules, run once |
| `vendor/` | The Supabase browser library (v2.118.0), included so the site does not depend on a CDN |
| `.github/workflows/pages.yml` | Free deploy to GitHub Pages |
