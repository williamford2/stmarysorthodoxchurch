# St. Mary's Orthodox Christian Church — Website

## Stack
- Next.js 14 App Router · TypeScript · Tailwind v4 · shadcn/ui · Vercel
- Tailwind v4: uses `@import "tailwindcss"` in globals.css — no tailwind.config.js

## Church Brand Colors
Custom CSS vars in globals.css, used as Tailwind utilities:
- `church-burgundy` / `church-burgundy-dark` / `church-burgundy-light`
- `church-gold` / `church-gold-light` / `church-gold-muted`
- `church-cream` / `church-cream-dark` / `church-charcoal`
- `font-heading` = Playfair Display

## Data Files (source of truth)
- `src/data/church.ts` — all church metadata
- `src/data/services.ts` — service schedule
- `src/data/nav.ts` — navigation (mainNav, aboutNav, faithNav, parishLifeNav)
- `src/data/clergy.ts` — clergy bios
- `src/data/sermons.ts` — YouTube sermon list
- `src/data/bulletins.ts` — bulletin PDF list
- `src/data/events.ts` — upcoming events
- `src/data/links.ts` — Orthodox external links

## Key Conventions
- Page metadata: use `buildMetadata()` from `@/lib/metadata`
- MDX content: use `getMdxContent()` from `@/lib/mdx`, files in `src/content/`
- Section pages (/about, /our-faith, /parish-life) use SectionSidebar via their layout.tsx
- YouTube embeds: always use facade pattern from `@/components/shared/YouTubeEmbed`
