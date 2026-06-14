# AmpReady

> **AI-qualified job engine for residential EV charger installation.**
>
> AmpReady turns messy homeowner project details into contractor-ready job packets — helping homeowners get faster, cleaner quotes and electricians get better project information.

---

## 🏗️ Architecture Overview

```
AmpReady/
├── apps/
│   ├── web/                    # Next.js 15 marketing website
│   │   ├── src/app/            # Pages (homepage, homeowners, electricians, etc.)
│   │   ├── src/components/     # Reusable UI components
│   │   ├── src/lib/            # Utilities, animations, hooks
│   │   └── public/             # Static assets
│   └── api/                    # FastAPI backend (future)
│       ├── src/
│       │   ├── routes/         # API endpoints
│       │   ├── models/         # Pydantic + SQLAlchemy models
│       │   ├── services/       # Business logic
│       │   └── db/             # Database migrations
│       └── tests/
├── docs/                       # Project documentation
│   ├── architecture.md         # System architecture
│   ├── design-system.md        # Visual design system
│   ├── seo-strategy.md         # SEO and content strategy
│   ├── api-spec.md             # API specification (future)
│   └── deployment.md           # Deployment guide
├── packages/
│   └── shared/                 # Shared types, utilities (future)
└── README.md                   # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (for web)
- Python 3.11+ (for backend, future)
- PostgreSQL 15+ (for database, future)

### Web (Next.js)

```bash
cd apps/web
npm install
npm run dev
# Open http://localhost:3000
```

### Backend (FastAPI — Future)

```bash
cd apps/api
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn src.main:app --reload
# Open http://localhost:8000/docs
```

---

## 📦 Monorepo Structure

| Directory | Purpose | Status |
|-----------|---------|--------|
| `apps/web/` | Next.js 15 marketing website | ✅ Production-ready |
| `apps/api/` | FastAPI backend | 🔮 Planned |
| `docs/` | Architecture, design, deployment docs | ✅ In progress |
| `packages/shared/` | Shared types and utilities | 🔮 Planned |

---

## 🎯 Product Vision

### Current: Website (Marketing Layer)
- SEO-optimized landing pages for homeowners and electricians
- 3-step intake form for homeowners
- Blog with EV charger guides
- Contact form and lead capture

### Next: Application Layer (Backend + Dynamic Features)
1. **Intake API** — Process form submissions, store project data
2. **Job Packet Generator** — AI-powered summarization of intake data
3. **Contractor Portal** — Dashboard for electricians to review packets
4. **Lead Routing** — Match homeowners with qualified local electricians
5. **Payment System** — Per-lead billing for electricians
6. **Admin Panel** — Lead management, contractor verification, analytics

---

## 🛠️ Tech Stack

### Frontend (Web)
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15 | React framework, App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Utility-first CSS |
| shadcn/ui | latest | UI component primitives |
| Motion.dev | v12 | Physics-based animations |
| Lucide React | latest | Icons |

### Backend (API — Planned)
| Technology | Version | Purpose |
|------------|---------|---------|
| FastAPI | latest | Python web framework |
| Pydantic | v2 | Data validation |
| SQLAlchemy | 2.0 | ORM |
| asyncpg | latest | Async PostgreSQL driver |
| Alembic | latest | Database migrations |
| OpenAI/Anthropic | API | AI summarization |
| WeasyPrint | latest | PDF generation |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| Vercel | Frontend hosting |
| Railway / Render | Backend hosting |
| PostgreSQL | Primary database |
| S3-compatible | Photo storage |
| Resend / Postmark | Email delivery |

---

## 🎨 Design Philosophy

**Anti-AI Design**: The website is intentionally crafted to feel human, not algorithmic.

- Warm, discovered color palette (not algorithmic blue/purple)
- Editorial typography (Zodiak + Sentient from Fontshare)
- Grain texture overlay via SVG `feTurbulence`
- Physics-based spring animations (not tweened)
- Intentional asymmetry and organic blob shapes
- Real-world language, not marketing speak

See [`docs/design-system.md`](docs/design-system.md) for the full specification.

---

## 🔍 SEO Strategy

- 50+ targeted keywords across commercial, informational, local, and B2B intent
- 6 blog posts with long-tail keyword targeting
- Schema.org structured data on every page
- Sitemap.xml and robots.txt
- Local SEO template for 50+ metro areas (future)

See [`docs/seo-strategy.md`](docs/seo-strategy.md) for the full strategy.

---

## 📋 Development Workflow

### Branch Strategy
- `main` — Production-ready code
- `develop` — Integration branch
- `feature/*` — Feature branches
- `hotfix/*` — Emergency fixes

### Commit Convention
```
type(scope): subject

body (optional)

footer (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Review
- All PRs require review before merge
- CI must pass (build, lint, type-check)
- No direct pushes to `main`

---

## 🚀 Deployment

### Web (Vercel)
```bash
cd apps/web
vercel --prod
```

### API (Railway / Render)
```bash
cd apps/api
railway up
```

See [`docs/deployment.md`](docs/deployment.md) for detailed instructions.

---

## 📄 License

Proprietary — AmpReady, Inc.

---

Built with care to feel human, not algorithmic.
