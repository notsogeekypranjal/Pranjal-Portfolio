# Pranjal Mishra — Portfolio

Next.js 16 (App Router) portfolio with liquid-glass UI, aurora background, scroll-driven motion (Framer Motion), 3D hero (React Three Fiber), and tilt cards.

## Setup

```bash
cd pranjal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Node:** use **v20.9+** (see `engines` in `package.json`). Matches Vercel’s default Node 20+ builds.

## Customize content

All copy, links, skills, projects, and experience live in `src/data/site.ts`. Add more `codingProfiles` entries for LeetCode, Kaggle, etc.

Resume file: place `PranjalMishraResume.pdf` in `public/`. The site links to it from the footer download block (`#resume`).

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` — production URL (metadata and sitemap).
- `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO` — optional; when set, the contact form sends email via Resend instead of opening a mailto link.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — optional Plausible analytics.

## Deploy (Vercel)

1. Push **only this folder** as the repo root (or use a monorepo with Root Directory set to `pranjal-portfolio` in Vercel).
2. Import the project in [Vercel](https://vercel.com) — framework **Next.js** is auto-detected.
3. **Project → Settings → General → Node.js Version:** 20.x or 22.x.
4. Add environment variables from `.env.example` in **Settings → Environment Variables**.
5. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

**If the build warns about multiple lockfiles:** avoid a `package-lock.json` in a parent directory above this project on your machine, or rely on `turbopack.root` in `next.config.ts` (already set to this project).

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber, react-parallax-tilt, next-themes, Lucide (plus inline brand icons), Radix Slot.
