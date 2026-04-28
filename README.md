## AntiGravityJobs.com (Website)

Premium marketing website for **AntiGravity Jobs** with two journeys:

- **Job seekers**: `/jobseeker` (app-first install CTA)
- **Recruiters**: `/recruiter`

Includes `/privacy` and a tabbed home page (`/`) that routes users into the right journey.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3050
```

Open `http://127.0.0.1:3050`.

## Pages

- `/` – Home (job seeker / recruiter tabs + “How it works” graphic)
- `/jobseeker`
- `/recruiter`
- `/privacy`

## Configuration

- Update app store URLs in:
  - `src/components/home-tabs.tsx`
  - `src/app/jobseeker/page.tsx`

## App screenshot placeholders (homepage)

The homepage renders animated phone frames using files in:

- `public/app/placeholder-jobswipe-splash.png`
- `public/app/placeholder-preferences.png`
- `public/app/placeholder-resume-upload.png`

Replace those files (same filenames) whenever you have updated marketing screenshots.

## Deploy

Works well on Vercel, Netlify, or any Node host that supports Next.js.
