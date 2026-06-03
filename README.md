# WEME — Hero Landing

Pixel-faithful recreation of the WEME hero in **Next.js (App Router) + Tailwind CSS + Framer Motion**.

## Run

```bash
npm install
npm run dev
# http://localhost:3000
```

## The two animations (from the brief)

1. **Staggered entrance** — on load each card fades + rises into place one
   after another (`delay = 0.15 + index * 0.14s`). See `UnoCard.tsx`.
2. **Hover lift + shadow on the cards behind** — hovering a card raises its
   `z-index`, slides it up (`y: -34`), scales it slightly, and swaps a small
   resting shadow for a large soft one that falls onto the cards stacked
   behind it. Also in `UnoCard.tsx`.

## Structure

```
app/
  layout.tsx        Google fonts (Inter, Inter Tight, Francois One) + CSS vars
  globals.css       Cal Sans @font-face, dot-grid texture, metallic gradient
  page.tsx          Section composition (copy -> fan -> partners)
components/
  Navbar.tsx        Logo + CTA (MENU on mobile)
  HeroCopy.tsx      Headline (with lime highlight) + subtitle
  CardFan.tsx       Desktop fan / mobile single card + cloud sticker
  UnoCard.tsx       Reusable card: animated shell + "0" / "+4" faces
  PillButton.tsx    Reusable glossy pink pill
  LogoMark.tsx      Lightning-bolt SVG
  CloudSticker.tsx  Smiling cloud SVG
  PartnerLogos.tsx  GitHub / Vercel / LinkedIn / Cal.com
lib/
  cards.ts          Fan layout data (Figma px coords -> fluid %)
```

## Fonts

`Inter`, `Inter Tight`, `Francois One` load through `next/font/google`.
`Cal Sans` (the headline) isn't on Google Fonts, so `globals.css` pulls it from
a CDN via `@font-face`. For zero external requests, download
`CalSans-SemiBold.woff2` into `/public/fonts` and point the `src` there.

## Responsiveness

- The card fan is positioned in **percentages of an aspect-ratio stage**, so the
  whole composition scales fluidly without breakpoints.
- Card artwork (the numerals / +4 cluster) is sized in **container-query units
  (`cqw`)**, so it tracks the card size exactly.
- Below `md` the fan collapses to the single `+4` card, matching the mobile spec.
