# Phase — Cycle-Synced Lifting (landing page)

Marketing site for **Phase**, the strength tracker that programs around your
menstrual cycle. Built with **Next.js 16** (App Router) + **Tailwind v4**.
Domain: **https://cyclesyncedlifting.com**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## What's inside

- `app/page.tsx` — the landing page (hero, features, Apple Watch, video, screenshot gallery, privacy, FAQ, CTA).
- `app/privacy/page.tsx`, `app/terms/page.tsx` — legal pages (App Store requires a live privacy URL).
- `app/layout.tsx` — fonts (Archivo Black / Space Mono / Inter), SEO metadata, Organization + WebSite JSON-LD.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — generated `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`.
- `public/llms.txt` — structured summary for LLM crawlers (llmstxt.org).
- `public/og.png` — Open Graph / social preview image (1200×630).
- `public/shots/` — real app screenshots. `public/preview.mp4` — the app preview video.
- MobileApplication + FAQPage JSON-LD rendered in `app/page.tsx` for rich results.

## SEO checklist (done)

- ✅ Per-page `<title>` / meta description, canonical URLs, keywords
- ✅ Open Graph + Twitter cards with a branded OG image
- ✅ `robots.txt` + `sitemap.xml` (auto-generated, absolute URLs)
- ✅ `llms.txt` for AI crawlers
- ✅ JSON-LD: Organization, WebSite, MobileApplication, FAQPage
- ✅ Semantic headings, descriptive image `alt`, fast static render

## Deploy to Vercel

1. Push this repo to GitHub (already set up — see the repo's remote).
2. In Vercel: **New Project → Import** this repo. Framework auto-detects as
   Next.js; no env vars needed. Deploy.
3. **Domain:** Project → Settings → Domains → add `cyclesyncedlifting.com` (and
   `www`). Point DNS at Vercel:
   - Apex `cyclesyncedlifting.com` → A record `76.76.21.21` (or Vercel's shown value), **or** use Vercel nameservers.
   - `www` → CNAME `cname.vercel-dns.com`.
   Vercel provisions HTTPS automatically.

## Before launch — TODOs

- [ ] Replace `APP_STORE_URL` in `app/page.tsx` with the real App Store link once the app is live (search `id0000000000`).
- [ ] Confirm the contact email (`hello@cyclesyncedlifting.com`) has a mailbox, or swap it.
- [ ] Set real "Effective" dates on `/privacy` and `/terms` if needed.
- [ ] After deploy, submit the sitemap in Google Search Console and request indexing.
