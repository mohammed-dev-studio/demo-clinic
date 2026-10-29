# Smile Studio Dental — Premium Tier Demo

A four-page dental clinic site demonstrating the **Premium (₹5,000)** tier.

## What this demo demonstrates (vs the Essential tier)

- Four pages: Home, Services, About, Contact, with working client-side nav
- Video hero (desktop only, poster fallback on mobile) — file at `public/videos/hero.mp4`
- 4-image auto-rotating hero slider with swipe arrows on mobile
- Service cards with photos and expandable detail
- Testimonials from Google reviews
- FAQ accordion with FAQPage schema
- Live Open/Closed badge, updates every minute
- Four-field enquiry form → WhatsApp
- Mobile menu

## To make this a client site

Everything client-specific is in `lib/config.ts`. Replace images, swap the video at `public/videos/hero.mp4`, update `metadata` in `app/layout.tsx`. Nothing else needs to change.

## Deploy

Cloudflare Pages, framework preset "Next.js (Static HTML Export)", output `out`, env var `NODE_VERSION=22`. Build: `pnpm build`.
