# medstudy

Minimalist, static medical learning platform built with Next.js App Router.

## Routes

- `/` — platform landing page
- `/fanlar/` — subject catalog
- `/fanlar/[slug]/` — subject and course list
- `/kurslar/` — course catalog
- `/kurslar/[slug]/` — serial course player

## Run locally

```bash
npm install
npm run dev
```

The project is configured for static export with `output: "export"`. A production export is generated in `out/` with:

```bash
npm run build
```

Course content and YouTube video IDs live in `lib/catalog.ts`.
