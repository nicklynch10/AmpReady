# AmpReady Architecture

> **System architecture for the AmpReady platform.**
>
> Current status: Website layer complete. Backend layer planned.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Website    │  │   Intake     │  │  Contractor  │         │
│  │  (Next.js)   │  │    Form      │  │   Portal     │         │
│  │              │  │  (Next.js)   │  │  (Next.js)   │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
│         │                 │                 │                 │
│         └─────────────────┼─────────────────┘                 │
│                           │                                    │
│                    ┌──────┴──────┐                             │
│                    │  Vercel CDN │                             │
│                    └──────┬──────┘                             │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS
┌───────────────────────────┬─────────────────────────────────────┐
│                         API LAYER                                │
├───────────────────────────┼─────────────────────────────────────┤
│  ┌──────────────────────┐ │ ┌──────────────────────────────┐  │
│  │     FastAPI          │ │ │      AI/LLM Services         │  │
│  │  ┌────────────────┐  │ │ │  ┌────────────────────────┐  │  │
│  │  │  Auth Router   │  │ │ │  │  Job Packet Generator │  │  │
│  │  │  - OAuth2/JWT  │  │ │ │  │  - OpenAI/Anthropic    │  │  │
│  │  │  - Session mgmt  │  │ │ │  │  - Prompt engineering   │  │  │
│  │  └────────────────┘  │ │ │  └────────────────────────┘  │  │
│  │  ┌────────────────┐  │ │ │  ┌────────────────────────┐  │  │
│  │  │  Leads Router  │  │ │ │  │  Lead Qualification    │  │  │
│  │  │  - CRUD ops    │  │ │ │  │  - Scoring model       │  │  │
│  │  │  - Filtering   │  │ │ │  │  - Risk assessment     │  │  │
│  │  └────────────────┘  │ │ │  └────────────────────────┘  │  │
│  │  ┌────────────────┐  │ │ └──────────────────────────────┘  │
│  │  │  Contractors   │  │ │                                   │
│  │  │  Router        │  │ │                                   │
│  │  │  - Profiles    │  │ │                                   │
│  │  │  - Verification│  │ │                                   │
│  │  └────────────────┘  │ │                                   │
│  │  ┌────────────────┐  │ │                                   │
│  │  │  Payments      │  │ │                                   │
│  │  │  Router        │  │ │                                   │
│  │  │  - Stripe      │  │ │                                   │
│  │  │  - Invoicing   │  │ │                                   │
│  │  └────────────────┘  │ │                                   │
│  └──────────────────────┘ │                                   │
│           │               │                                   │
│    ┌──────┴──────┐        │                                   │
│    │   Railway   │        │                                   │
│    │   / Render  │        │                                   │
│    └──────┬──────┘        │                                   │
└───────────┼───────────────┼───────────────────────────────────┘
            │               │
┌───────────┼───────────────┼───────────────────────────────────┐
│           │  DATA LAYER    │                                   │
├───────────┼───────────────┼───────────────────────────────────┤
│  ┌────────┴────────┐      │      ┌──────────────────────┐     │
│  │   PostgreSQL    │      │      │   S3-Compatible      │     │
│  │  ┌───────────┐  │      │      │   Object Storage     │     │
│  │  │  Leads    │  │      │      │  ┌────────────────┐  │     │
│  │  │  Table    │  │      │      │  │  Panel Photos  │  │     │
│  │  └───────────┘  │      │      │  │  - Original    │  │     │
│  │  ┌───────────┐  │      │      │  │  - Thumbnails  │  │     │
│  │  │Contractors│  │      │      │  └────────────────┘  │     │
│  │  │  Table    │  │      │      │  ┌────────────────┐  │     │
│  │  └───────────┘  │      │      │  │  Job Packets   │  │     │
│  │  ┌───────────┐  │      │      │  │  - PDF exports │  │     │
│  │  │  Users    │  │      │      │  └────────────────┘  │     │
│  │  │  Table    │  │      │      └──────────────────────┘     │
│  │  └───────────┘  │      │                                     │
│  │  ┌───────────┐  │      │                                     │
│  │  │  Payments │  │      │                                     │
│  │  │  Table    │  │      │                                     │
│  │  └───────────┘  │      │                                     │
│  │  ┌───────────┐  │      │                                     │
│  │  │  Markets  │  │      │                                     │
│  │  │  Table    │  │      │                                     │
│  │  └───────────┘  │      │                                     │
│  └─────────────────┘      │                                     │
│                           │                                     │
│    ┌──────────────┐       │                                     │
│    │  Railway DB  │       │                                     │
│    │  / Supabase  │       │                                     │
│    └──────────────┘       │                                     │
└───────────────────────────┴─────────────────────────────────────┘
```

---

## Current State: Website Layer (Complete)

### What Exists Now

**Frontend (Next.js 15)**
- 20 pages with full content
- Anti-AI design system (grain, organic shapes, spring physics)
- SEO-optimized with schema.org structured data
- 6 blog posts with long-tail keyword targeting
- 3-step intake form (frontend only, mock submission)
- Contact form (frontend only, mock submission)

**Static Assets**
- robots.txt
- sitemap.xml (programmatic)
- Favicon

**Missing (Pre-Deployment)**
- OG image (1200x630px)
- Logo PNG (for schema.org)
- Google Search Console verification code
- Google Analytics 4 setup

---

## Planned: Backend Layer

### API (FastAPI)

#### Authentication
- OAuth2 with JWT tokens
- Session management
- Role-based access (homeowner, contractor, admin)

#### Lead Management
- `POST /api/leads` — Create new lead from intake form
- `GET /api/leads` — List leads (filtered by contractor, status, area)
- `GET /api/leads/{id}` — Get single lead with full details
- `PATCH /api/leads/{id}` — Update lead status
- `DELETE /api/leads/{id}` — Soft delete lead

#### Contractor Management
- `POST /api/contractors` — Register new contractor
- `GET /api/contractors` — List contractors (filtered by area, specialty)
- `GET /api/contractors/{id}` — Get contractor profile
- `PATCH /api/contractors/{id}` — Update profile
- `POST /api/contractors/{id}/verify` — Verify credentials

#### Job Packets
- `POST /api/job-packets` — Generate job packet from lead data
- `GET /api/job-packets/{id}` — Get job packet (PDF or JSON)
- `POST /api/job-packets/{id}/pdf` — Generate PDF export

#### Payments
- `POST /api/payments/intent` — Create payment intent (Stripe)
- `POST /api/payments/confirm` — Confirm payment
- `GET /api/payments/history` — Payment history

#### AI Services
- `POST /api/ai/summarize` — Summarize lead into job packet
- `POST /api/ai/qualify` — Qualify lead (simple/standard/complex)
- `POST /api/ai/extract` — Extract info from panel photos (OCR)

### Database Schema (PostgreSQL)

```sql
-- Leads table
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    homeowner_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    address TEXT,
    zip_code TEXT,
    service_area TEXT,
    charger_type TEXT,
    vehicle_model TEXT,
    install_location TEXT,
    panel_location TEXT,
    wire_run_estimate TEXT,
    timing TEXT,
    notes TEXT,
    panel_photos TEXT[], -- S3 URLs
    parking_photos TEXT[], -- S3 URLs
    status TEXT DEFAULT 'new', -- new, reviewing, quoted, accepted, completed, cancelled
    complexity TEXT, -- simple, standard, complex, upgrade_needed
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Contractors table
CREATE TABLE contractors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    license_number TEXT,
    insurance_verified BOOLEAN DEFAULT FALSE,
    service_areas TEXT[], -- ZIP codes or cities
    specialties TEXT[], -- ev_charger, panel_upgrade, etc.
    credentials JSONB, -- licenses, certifications
    status TEXT DEFAULT 'pending', -- pending, active, suspended
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Job Packets table
CREATE TABLE job_packets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES leads(id),
    contractor_id UUID REFERENCES contractors(id),
    packet_data JSONB NOT NULL, -- structured packet content
    pdf_url TEXT, -- S3 URL to generated PDF
    status TEXT DEFAULT 'draft', -- draft, sent, viewed, quoted
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contractor_id UUID REFERENCES contractors(id),
    lead_id UUID REFERENCES leads(id),
    amount DECIMAL(10,2) NOT NULL,
    stripe_payment_intent_id TEXT,
    status TEXT DEFAULT 'pending', -- pending, completed, failed, refunded
    created_at TIMESTAMP DEFAULT NOW()
);

-- Users table (for auth)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    hashed_password TEXT,
    role TEXT DEFAULT 'homeowner', -- homeowner, contractor, admin
    contractor_id UUID REFERENCES contractors(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Markets table (for local SEO and routing)
CREATE TABLE markets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_codes TEXT[],
    tier INTEGER DEFAULT 3, -- 1=top, 2=growth, 3=emerging
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### AI/LLM Integration

**Job Packet Generator**
- Input: Lead data (photos, answers, notes)
- Output: Structured job packet summary
- Model: GPT-4o or Claude 3.5 Sonnet
- Prompt: Engineering-focused, structured output

**Lead Qualification**
- Input: Lead data
- Output: Complexity score (simple/standard/complex/upgrade_needed)
- Model: GPT-4o-mini or Claude 3 Haiku
- Used for: Contractor prioritization, pricing guidance

**Photo Analysis (Future)**
- Input: Panel photo
- Output: Extracted text (brand, model, amp rating), breaker count
- Model: GPT-4o Vision
- Used for: Pre-populating panel details

### Email/SMS Notifications

**Events:**
- New lead submitted → Homeowner confirmation email
- Job packet ready → Contractor notification email
- Contractor quotes → Homeowner notification email
- Payment received → Contractor confirmation
- Follow-up sequences → Automated drip campaigns

**Tools:**
- Resend (primary) or Postmark (backup)
- Twilio (SMS for urgent notifications)

### PDF Generation

**Job Packet PDF**
- Tool: WeasyPrint or Playwright
- Template: HTML/CSS with brand styling
- Content: All lead details, photos, complexity assessment
- Delivery: Download link or email attachment

---

## Integration Points

### External Services

| Service | Purpose | Status |
|---------|---------|--------|
| Stripe | Payments | Planned |
| Resend | Email delivery | Planned |
| Twilio | SMS notifications | Planned |
| OpenAI | AI summarization | Planned |
| Anthropic | AI summarization (backup) | Planned |
| S3-compatible | Photo storage | Planned |
| Google Maps | Address validation | Future |
| Yelp | Contractor verification | Future |

### Internal APIs

| API | Consumer | Purpose |
|-----|----------|---------|
| Web → API | Next.js frontend | Form submission, data fetching |
| API → AI | FastAPI backend | Job packet generation |
| API → DB | FastAPI backend | Data persistence |
| API → S3 | FastAPI backend | Photo upload/download |
| API → Email | FastAPI backend | Notifications |
| API → Stripe | FastAPI backend | Payments |

---

## Deployment Architecture

### Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Production | ampready.com | Live site |
| Staging | staging.ampready.com | Pre-release testing |
| Development | localhost | Local development |

### Infrastructure

```
┌─────────────────────────────────────────┐
│              Vercel Edge                 │
│  ┌─────────────┐    ┌─────────────┐     │
│  │   Website   │    │   Intake    │     │
│  │   (Next.js) │    │   (Next.js) │     │
│  └─────────────┘    └─────────────┘     │
└─────────────────────────────────────────┘
                   │
                   ▼ HTTPS
┌─────────────────────────────────────────┐
│              Railway / Render            │
│  ┌─────────────────────────────────┐     │
│  │         FastAPI API             │     │
│  │  ┌─────────┐    ┌─────────┐    │     │
│  │  │  Auth   │    │  Leads  │    │     │
│  │  │  Router │    │  Router │    │     │
│  │  └─────────┘    └─────────┘    │     │
│  │  ┌─────────┐    ┌─────────┐    │     │
│  │  │Contractors│   │ Payments│    │     │
│  │  │  Router │    │  Router │    │     │
│  │  └─────────┘    └─────────┘    │     │
│  └─────────────────────────────────┘     │
└─────────────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│PostgreSQL│ │  S3      │ │  AI      │
│  (DB)    │ │ (Photos) │ │ (OpenAI) │
└──────────┘ └──────────┘ └──────────┘
```

### CI/CD Pipeline

```
Developer pushes to feature branch
           │
           ▼
    GitHub Actions
    ┌──────────────┐
    │ 1. Lint      │
    │ 2. Type-check│
    │ 3. Test      │
    │ 4. Build     │
    └──────────────┘
           │
           ▼ (on PR to main)
    Code Review
           │
           ▼ (after merge)
    ┌──────────────┐
    │ Deploy to    │
    │ Staging      │
    └──────────────┘
           │
           ▼ (manual approval)
    ┌──────────────┐
    │ Deploy to    │
    │ Production   │
    └──────────────┘
```

---

## Security Considerations

### Authentication
- JWT tokens with expiration
- Refresh token rotation
- HTTPS only (HSTS headers)
- CORS configured for production domains

### Data Protection
- PII encryption at rest (PostgreSQL)
- Photo encryption in S3
- GDPR compliance (right to deletion)
- SOC 2 Type II (future goal)

### API Security
- Rate limiting (per IP, per user)
- Input validation (Pydantic)
- SQL injection prevention (SQLAlchemy ORM)
- XSS prevention (output encoding)

### Contractor Verification
- License number validation (state databases)
- Insurance certificate verification
- Background checks (future)
- Review system (future)

---

## Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse |
| FID (First Input Delay) | < 100ms | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| TTFB (Time to First Byte) | < 600ms | WebPageTest |
| API Response Time (p95) | < 200ms | Datadog/New Relic |
| Database Query Time (p95) | < 50ms | PostgreSQL logs |

---

## Monitoring & Observability

### Logging
- Structured JSON logs
- Correlation IDs across services
- Error tracking with Sentry

### Metrics
- Application metrics (Datadog / Prometheus)
- Business metrics (conversion rates, lead quality)
- Infrastructure metrics (CPU, memory, DB connections)

### Alerting
- PagerDuty for critical issues
- Slack for warnings
- Email for daily summaries

---

## Scaling Strategy

### Phase 1: Launch (0-100 leads/month)
- Single API instance
- Shared PostgreSQL
- Basic caching

### Phase 2: Growth (100-1,000 leads/month)
- Horizontal API scaling
- Read replicas for DB
- Redis for caching
- CDN for static assets

### Phase 3: Scale (1,000+ leads/month)
- Microservices split
- Dedicated AI processing queue
- Multi-region deployment
- Advanced analytics

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-06-14 | Website layer complete |
| 0.2.0 | TBD | Backend API (FastAPI) |
| 0.3.0 | TBD | Contractor portal |
| 0.4.0 | TBD | Payment system |
| 1.0.0 | TBD | Full platform launch |

---

*This architecture document is a living specification. Update it as the system evolves.*
