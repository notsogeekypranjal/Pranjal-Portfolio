# Pranjal Mishra — Portfolio

Next.js 15 (App Router) portfolio with liquid-glass UI, aurora background, scroll-driven motion (Framer Motion), 3D hero (React Three Fiber), and tilt cards.

## Setup

```bash
cd pranjal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All copy, links, skills, projects, and experience live in `src/data/site.ts`. Add more `codingProfiles` entries for LeetCode, Kaggle, etc.

Resume file: place `PranjalMishraResume.pdf` in `public/`. The site links to it from the footer download block (`#resume`).

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` — production URL (metadata and sitemap).
- `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO` — optional; when set, the contact form sends email via Resend instead of opening a mailto link.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — optional Plausible analytics.

## Deploy (Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) with the default Next.js preset.
3. Add environment variables in the Vercel project settings.
4. Deploy. Assign your custom domain and update `NEXT_PUBLIC_SITE_URL` to match.

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber, react-parallax-tilt, next-themes, Lucide (plus inline brand icons), Radix Slot.
