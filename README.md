# AmpReady Website

A production-ready, SEO-optimized website for AmpReady — the AI-qualified job engine for residential EV charger installation.

## 🚀 Live Site

**URL**: https://ampready.com (placeholder — deploy to your domain)

## 📁 Pages (20 Routes)

| Route | Description | SEO Target |
|-------|-------------|------------|
| `/` | Homepage — Hero, value prop, testimonials, FAQ | Primary landing page |
| `/homeowners` | For Homeowners — Intake process, pricing, benefits | "EV charger installation quote" |
| `/electricians` | For Electricians — Job packets, pricing, benefits | "EV charger leads for electricians" |
| `/how-it-works` | How It Works — Process for both sides | "How AmpReady works" |
| `/about` | About — Mission, story, team, vision | Brand + trust building |
| `/blog` | Blog Index — Guides, resources, SEO content | Content hub |
| `/blog/[slug]` | Blog Posts (6 sample posts) | Long-tail SEO keywords |
| `/contact` | Contact — Form, email, phone, FAQ | Support + leads |
| `/get-started` | Get Started — 3-step intake form | Primary conversion |
| `/privacy` | Privacy Policy | Legal compliance |
| `/terms` | Terms of Service | Legal compliance |
| `/sitemap.xml` | Sitemap | SEO indexing |

## 🎨 Design System (Anti-AI)

### Philosophy
This website is intentionally designed to **not look AI-generated**. Every design decision prioritizes human curation, organic imperfection, and tactile warmth over algorithmic perfection.

### Colors (Warm, Discovered)
- **Primary**: Warm amber `#D4A017` — sunlight, not corporate blue
- **Secondary**: Deep charcoal `#2D2D2D` — warm dark, not pure black
- **Accent**: Muted sage `#5F8D7E` — trust and sustainability
- **Background**: Warm cream `#F5F0E8` — paper-like, not sterile white
- **Text**: Warm dark gray `#1A1A1A` — readable without harsh contrast

### Typography (Editorial)
- **Headings**: Zodiak (serif) from Fontshare — sharp, confident, print-journalism feel
- **Body**: Sentient (sans) from Fontshare — warm and readable
- **Monospace**: JetBrains Mono — for code/data

### Texture & Effects
- **Grain overlay**: SVG `feTurbulence` at 8% opacity across all pages
- **Organic shapes**: Blob generators with irregular border-radius
- **Shadows**: Warm-tinted (`hsla(43, 40%, 40%, ...)`)
- **Borders**: Subtle, warm-tinted

### Animation (Physics-Based)
- **Library**: Motion.dev (Framer Motion v12)
- **Philosophy**: Spring physics, not tweened animations
- **Configs**: microSpring, feedbackSpring, layoutSpring, pageSpring, heroSpring, bounceSpring, floatSpring
- **Effects**: Scroll-triggered entrances, physics-based hover states, staggered reveals

### Anti-AI Checklist
- [x] No perfect symmetry — asymmetric layouts throughout
- [x] No perfect circles — organic blob shapes
- [x] No generic stock imagery — CSS-generated visuals, real testimonial names
- [x] No system fonts — Zodiak + Sentient editorial fonts
- [x] No glassmorphism — tactile grain textures
- [x] No tweened animations — spring physics only
- [x] No pure white/black — warm cream and charcoal
- [x] Slight imperfections — 0.5-1° rotations on cards
- [x] Intentional asymmetry — broken grid in hero, offset elements

## 🔍 SEO Strategy

### Keywords Targeted
- **Commercial**: "EV charger installation quote", "home EV charger installer", "Level 2 charger installation"
- **Informational**: "how much does EV charger installation cost", "do I need panel upgrade for EV charger"
- **Local**: "[city] EV charger installation" (template for future expansion)
- **B2B**: "EV charger leads for electricians", "residential electrical job packets"

### Technical SEO
- Meta tags on every page (title, description, keywords)
- Open Graph and Twitter Cards
- Canonical URLs
- Schema.org structured data:
  - `LocalBusiness` + `WebSite` (homepage)
  - `Service` (homeowners, electricians)
  - `HowTo` (how-it-works)
  - `FAQPage` (FAQ sections)
  - `Article` (blog posts)
  - `Organization` (about)
  - `ContactPage` (contact)
- Sitemap.xml with all routes
- robots.txt

### Content (6 Blog Posts)
1. "How Much Does EV Charger Installation Cost in 2026?"
2. "Do You Need a Panel Upgrade for Your EV Charger?"
3. "Level 1 vs Level 2 vs Level 3 Charging"
4. "How to Prepare for Your EV Charger Installation"
5. "EV Charger Installation Leads: A Guide for Electricians"
6. "Understanding EV Charger Permits and Inspections"

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **TypeScript**: 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animation**: Motion.dev (Framer Motion v12)
- **Icons**: Lucide React
- **Fonts**: Fontshare CDN (Zodiak, Sentient) + Google Fonts (JetBrains Mono)
- **SEO**: next-seo, next-sitemap

## 📂 Project Structure

```
ampready-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout (nav, footer, grain, SEO)
│   │   ├── globals.css         # Design system (colors, fonts, grain, shadows)
│   │   ├── sitemap.ts          # Programmatic sitemap
│   │   ├── homeowners/         # For Homeowners page
│   │   ├── electricians/       # For Electricians page
│   │   ├── how-it-works/       # How It Works page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── blog/               # Blog index + posts
│   │   ├── get-started/        # Intake form
│   │   ├── privacy/            # Privacy Policy
│   │   └── terms/              # Terms of Service
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── SectionHeader.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── CTASection.tsx
│   │   ├── BlobShape.tsx
│   │   ├── TimelineStep.tsx
│   │   └── JobPacketPreview.tsx
│   ├── lib/                    # Utilities
│   │   ├── animations.ts       # Motion.dev spring configs
│   │   ├── hooks.ts            # Custom React hooks
│   │   └── utils.ts            # cn() helper
│   └── types/                  # TypeScript types
├── public/                     # Static assets
│   └── robots.txt
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🚀 Deployment

### Static Export (Recommended)

The site is configured for static export, which works great with:
- **Vercel** (zero-config, automatic)
- **Netlify** (drag-and-drop or Git integration)
- **Cloudflare Pages** (Git integration)
- **AWS S3 + CloudFront** (manual or CI/CD)
- **GitHub Pages** (for testing)

```bash
# Build for static export
npm run build

# The output is in the `out/` directory
# Deploy the `out/` directory to your hosting provider
```

### Environment Variables

```bash
# For static export
STATIC_EXPORT=true

# For dynamic rendering (if you add API routes later)
# Leave STATIC_EXPORT unset or set to false
```

### Post-Deployment Checklist

- [ ] Replace `your-google-verification-code` in `layout.tsx` with actual Google Search Console code
- [ ] Add `/og-image.jpg` to the `public/` folder (1200x630px, optimized)
- [ ] Add `/logo.png` to the `public/` folder (for schema.org)
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Configure custom domain in hosting provider
- [ ] Test all internal links
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test form submissions (connect to backend API)
- [ ] Verify schema.org structured data with Google's Rich Results Test
- [ ] Run Lighthouse audit (target: 90+ on all metrics)

## 📝 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linting
npm run lint
```

## 🎯 Next Steps (App Development)

This website is the **marketing layer** for AmpReady. The **application layer** (backend + dynamic features) will include:

1. **Intake API** — Process form submissions, store project data
2. **Job Packet Generator** — AI-powered summarization of intake data
3. **Contractor Portal** — Dashboard for electricians to review packets
4. **Lead Routing** — Match homeowners with qualified local electricians
5. **Payment System** — Per-lead billing for electricians
6. **Admin Panel** — Lead management, contractor verification, analytics

## 📄 License

Proprietary — AmpReady, Inc.

---

Built with care to feel human, not algorithmic.
