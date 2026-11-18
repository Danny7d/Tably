# Tably marketing site

The public website for [Tably](https://tably.site), a restaurant management platform I am building for restaurants in Addis Ababa.

**Live:** https://tably.site

> **Scope.** This repository is only the marketing site: landing pages, pricing, a contact form and a small admin inbox. The product itself (multi-tenant ordering, kitchen display, dashboards) lives in separate private repositories and is not in this repo.

## What is in here

| Route | What it is |
| --- | --- |
| `/` | Landing page: hero, features, how it works, pricing preview, FAQ |
| `/features`, `/pricing`, `/about`, `/docs` | Product, pricing (in ETB), about and docs pages |
| `/demo`, `/contact` | Demo and contact pages |
| `/qr-ordering-addis` | SEO landing page for QR ordering in Addis Ababa |
| `/privacy`, `/terms` | Legal pages |
| `/admin` | Password-protected inbox for contact form messages |

Also included: `sitemap.ts` and `robots.ts`, JSON-LD structured data (`app/components/JsonLd.tsx`), a shared metadata helper (`app/lib/metadata.ts`), and Vercel Analytics.

## Engineering notes

**Admin auth without a database.** `middleware.ts` guards `/admin/*`. The session cookie is a token of the form `expiry.signature`, signed with HMAC-SHA256 and a default lifetime of 8 hours. The signing secret is the server-only `ADMIN_PASSWORD`. It uses the Web Crypto API, so it runs in the middleware runtime with no extra dependencies (`app/lib/admin-session.ts`).

**Contact form.** `POST /api/contact` validates name, email and message, saves the message to `data/contacts.json` on a best-effort basis, and emails it to `contact@tably.site` through Resend. Because serverless file systems are not durable, the email is the reliable delivery path and the JSON file is only a convenience.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Framer Motion, Recharts, lucide-react
- Resend (contact email)
- Vercel (hosting and analytics)

## Run it locally

Requires Node.js 20.9 or newer (a Next.js 16 requirement).

```bash
git clone https://github.com/Danny7d/Tably.git
cd Tably
npm install
npm run dev
```

The site runs on http://localhost:3000. Other scripts: `npm run build` and `npm start`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `ADMIN_PASSWORD` | Password for `/admin`, also used to sign the admin session cookie |
| `RESEND_API_KEY` | Resend key for contact form emails. If it is missing, the form still saves the message but skips the email |

## Known limitations

- No automated tests yet.
- No CI configured yet.
- `data/contacts.json` is not durable on serverless hosts, as described above.

## About the product

The product behind this site is a multi-tenant restaurant platform:

- QR table ordering that runs in the browser, with no app to install
- Kitchen display, waiter dashboard and owner dashboard
- AI-assisted review insights and operational health analytics
- Multi-tenant architecture: restaurants are detected from the hostname, `restaurant_id` is the tenant key enforced with PostgreSQL row-level security on Supabase, menus are per branch, and white-label theming is stored as JSONB
- Built with Next.js, TypeScript, Tailwind CSS, Supabase and Vercel

That code is private. Happy to walk through the architecture on request.

## Author

Daniel Tadesse, building in Addis Ababa. [Portfolio](https://danny.tably.site) · [GitHub](https://github.com/Danny7d) · contact@tably.site

© Daniel Tadesse. All rights reserved.
