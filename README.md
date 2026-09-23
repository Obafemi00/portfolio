# HerbCodes Technology

Website and project portfolio for HerbCodes Technology, a web design, development, and management studio.

Built on Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

Prerequisites: Node.js 20 or later, pnpm (recommended) or npm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser. The site should render with the header, hero, services grid, featured work, testimonials marquee, CTA band, and footer.

## Project structure

```
herbcodes/
├── app/                    Next.js App Router pages
│   ├── layout.tsx          Root layout (fonts, header, footer)
│   ├── page.tsx            Home page
│   ├── work/               Portfolio page
│   ├── process/            Process page
│   └── about/              About page
├── components/
│   ├── layout/             Header, Footer, CtaBand
│   ├── home/               Hero, ServicesGrid, FeaturedWork, TestimonialsMarquee
│   └── ui/                 Button, Eyebrow primitives
├── data/
│   ├── projects.ts         Nine real projects with URLs
│   ├── services.ts         Eleven services
│   └── testimonials.ts     Testimonials (placeholder pending real quotes)
├── lib/
│   ├── motion.ts           Shared Framer Motion variants and easings
│   └── utils.ts            cn() helper for merging Tailwind classes
├── public/                 Static assets (add logos, favicons, project images here)
└── tailwind.config.ts      Brand tokens: colors, fonts, spacing
```

## Brand tokens

Defined in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `herb-cyan` | `#05ABC4` | Primary accent, CTAs |
| `herb-mint` | `#04D3BC` | Hover states |
| `herb-purple` | `#681FAB` | Rare marketing accent |
| `herb-ink` | `#0A0F14` | Body text, dark surfaces |
| `herb-slate` | `#5A6570` | Secondary text |
| `herb-fog` | `#F4F6F8` | Alt section backgrounds |

Fonts loaded via `next/font/google` in `app/layout.tsx`:
- Hammersmith One (headings)
- Bebas Neue (eyebrow labels)
- Inter (body)

## Assets to add before launch

Drop these files into `public/`:

**Logo**
- `logo-primary.svg` (bug icon + wordmark + TECHNOLOGY tag)
- `logo-icon.svg` (bug only)

**Favicons** (generate via realfavicongenerator.net)
- `favicon.ico`
- `favicon.svg`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `icon-192.png`
- `icon-512.png`

**Open Graph**
- `og-image.png` (1200x630, logo + tagline on white)

**Project covers and galleries** in `public/projects/`
- Cover images: 1600x1000 PNG
- Naming: `{slug}-cover.png`, `{slug}-gallery-01.png`, etc.
- See `data/projects.ts` for exact file paths expected

**Portrait**
- `femi-portrait.jpg` (800x800, replaces the "F" placeholder on About page)

## Testimonials

`data/testimonials.ts` ships with one placeholder entry for the Bakonery Bits + Bobs co-founder. Replace the `quote`, `author`, and set `approved: true` when the real quote is confirmed. Add more testimonial entries as they come in.

## What's built vs. what needs Claude Code

**Working out of the box:**
- Home page (Hero, Services, Featured Work, Testimonials, CTA, Footer)
- Work page (portfolio grid linking to live projects)
- About page (bio, values, capabilities)
- Process page (six phases in an editorial layout)
- Sticky header with scroll behavior and mobile menu
- Full metadata setup for SEO and Open Graph
- Reduced-motion respected via CSS media query

**Next steps with Claude Code:**
- Case study modals with Framer Motion `layoutId` expansion
- Scroll-driven pinning on the Process page (GSAP + ScrollTrigger)
- Custom cursor and magnetic buttons (behind a feature flag)
- Real project cover images once captured
- Real testimonials once collected
- Smooth scroll with Lenis (optional)

## Deploy

Push to a GitHub repo, then import to Vercel. Custom domain configuration handled in Vercel settings.

```bash
git init
git add .
git commit -m "Initial HerbCodes scaffold"
git remote add origin https://github.com/Obafemi00/herbcodes.git
git push -u origin main
```

## Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Start dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Run production build locally |
| `pnpm lint` | Lint with Next.js ESLint config |
| `pnpm type-check` | TypeScript check without emit |

## License

Proprietary. All rights reserved. © HerbCodes Technology.
# portfolio
