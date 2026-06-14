# AmpReady Deployment Guide

> **How to deploy the AmpReady website and backend.**

---

## Prerequisites

- Node.js 20+ (for web)
- Python 3.11+ (for backend, future)
- Git
- A GitHub account
- A hosting provider account (Vercel, Railway, or Render)

---

## Web Deployment (Next.js)

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js apps with zero-config deployment.

#### Step 1: Connect GitHub Repo

1. Go to [vercel.com](https://vercel.com)
2. Sign up / log in
3. Click "Add New Project"
4. Import from GitHub: `nicklynch10/AmpReady`
5. Select the `apps/web` directory (or root if not using monorepo yet)

#### Step 2: Configure Build Settings

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `out` (if using static export) or `.next` |
| Install Command | `npm install` |

#### Step 3: Environment Variables

Add these in Vercel dashboard → Project Settings → Environment Variables:

```
STATIC_EXPORT=true
NEXT_PUBLIC_API_URL=https://api.ampready.com
```

#### Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Every push to `main` will trigger a new deployment

#### Step 5: Custom Domain

1. Go to Project Settings → Domains
2. Add `ampready.com`
3. Follow DNS instructions (add CNAME or A record)
4. Vercel handles SSL automatically

---

### Option 2: Netlify

#### Step 1: Connect GitHub Repo

1. Go to [netlify.com](https://netlify.com)
2. Sign up / log in
3. Click "Add new site" → "Import an existing project"
4. Select GitHub → `nicklynch10/AmpReady`

#### Step 2: Configure Build Settings

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Publish Directory | `out` |

#### Step 3: Deploy

Netlify will build and deploy on every push to `main`.

---

### Option 3: Cloudflare Pages

#### Step 1: Connect GitHub Repo

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to Pages → Create a project
3. Connect to GitHub → `nicklynch10/AmpReady`

#### Step 2: Configure Build Settings

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Build Output Directory | `out` |

#### Step 3: Deploy

Cloudflare Pages will build and deploy on every push.

---

## Backend Deployment (FastAPI — Future)

### Option 1: Railway (Recommended)

Railway is the easiest for Python apps with PostgreSQL.

#### Step 1: Create Project

1. Go to [railway.app](https://railway.app)
2. Sign up / log in
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose `nicklynch10/AmpReady`

#### Step 2: Configure Service

| Setting | Value |
|---------|-------|
| Root Directory | `apps/api` |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn src.main:app --host 0.0.0.0 --port $PORT` |

#### Step 3: Add PostgreSQL

1. Click "New" → Database → Add PostgreSQL
2. Railway will auto-connect via environment variables

#### Step 4: Environment Variables

```
DATABASE_URL=${{Postgres.DATABASE_URL}}
SECRET_KEY=your-secret-key-here
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET_KEY=your-stripe-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
RESEND_API_KEY=your-resend-key
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
S3_BUCKET_NAME=ampready-photos
```

#### Step 5: Deploy

Railway will auto-deploy on every push to `main`.

---

### Option 2: Render

#### Step 1: Create Web Service

1. Go to [render.com](https://render.com)
2. Sign up / log in
3. Click "New" → "Web Service"
4. Connect GitHub repo → `nicklynch10/AmpReady`

#### Step 2: Configure Service

| Setting | Value |
|---------|-------|
| Name | ampready-api |
| Root Directory | `apps/api` |
| Environment | Python 3 |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn src.main:app --host 0.0.0.0 --port $PORT` |

#### Step 3: Add PostgreSQL

1. Click "New" → "PostgreSQL"
2. Name it `ampready-db`
3. Copy the internal database URL

#### Step 4: Environment Variables

Add the same variables as Railway (above).

#### Step 5: Deploy

Render will auto-deploy on every push.

---

## Database Setup

### PostgreSQL Schema

```bash
# After deploying PostgreSQL, run migrations
cd apps/api
alembic upgrade head
```

### Initial Data

```bash
# Seed markets data
python scripts/seed_markets.py

# Seed admin user
python scripts/seed_admin.py
```

---

## Post-Deployment Checklist

### Website

- [ ] Replace `your-google-verification-code` in `apps/web/src/app/layout.tsx`
- [ ] Add `/og-image.jpg` to `apps/web/public/` (1200x630px)
- [ ] Add `/logo.png` to `apps/web/public/` (for schema.org)
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Configure custom domain
- [ ] Test all internal links
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test form submissions (connect to backend API)
- [ ] Verify schema.org with Google's Rich Results Test
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Set up uptime monitoring (UptimeRobot or Pingdom)

### Backend

- [ ] Configure CORS for production domain
- [ ] Set up SSL/TLS certificates
- [ ] Configure rate limiting
- [ ] Set up error tracking (Sentry)
- [ ] Set up logging (Datadog or CloudWatch)
- [ ] Configure backup strategy for PostgreSQL
- [ ] Set up S3 bucket for photos
- [ ] Configure Stripe webhooks
- [ ] Test email delivery (Resend)
- [ ] Load test API endpoints

### Security

- [ ] Enable HSTS headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Set up DDoS protection (Cloudflare)
- [ ] Enable 2FA for all admin accounts
- [ ] Rotate API keys and secrets
- [ ] Set up security scanning (Snyk or Dependabot)

---

## Environment Variables Reference

### Web (Next.js)

| Variable | Required | Description |
|----------|----------|-------------|
| `STATIC_EXPORT` | No | Set to `true` for static export |
| `NEXT_PUBLIC_API_URL` | Yes | Backend API URL |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Future | Stripe public key |

### Backend (FastAPI)

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SECRET_KEY` | Yes | JWT signing secret |
| `OPENAI_API_KEY` | Yes | OpenAI API key |
| `ANTHROPIC_API_KEY` | No | Anthropic API key (backup) |
| `STRIPE_SECRET_KEY` | Future | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Future | Stripe webhook secret |
| `RESEND_API_KEY` | Future | Resend email API key |
| `AWS_ACCESS_KEY_ID` | Future | AWS/S3 access key |
| `AWS_SECRET_ACCESS_KEY` | Future | AWS/S3 secret key |
| `S3_BUCKET_NAME` | Future | S3 bucket for photos |
| `S3_REGION` | Future | S3 region |

---

## Rollback Strategy

### Website

Vercel/Netlify maintain previous deployments:

1. Go to dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Backend

Railway/Render maintain previous builds:

1. Go to dashboard → Deployments
2. Find previous working deployment
3. Click "Rollback"

### Database

Always run migrations in a transaction:

```bash
alembic upgrade head
# If something goes wrong:
alembic downgrade -1
```

---

## Monitoring

### Uptime

- **UptimeRobot** (free tier): Monitor every 5 minutes
- **Pingdom** (paid): More detailed monitoring

### Performance

- **Google Analytics 4**: User behavior, conversions
- **Lighthouse CI**: Automated performance audits
- **WebPageTest**: Detailed performance analysis

### Errors

- **Sentry**: Application error tracking
- **LogRocket** (optional): Session replay

### Business Metrics

- Lead submission rate
- Contractor signup rate
- Quote conversion rate
- Revenue per lead

---

## Cost Estimates

### Phase 1: Launch (Monthly)

| Service | Cost |
|---------|------|
| Vercel Pro | $20 |
| Railway / Render | $25 |
| PostgreSQL (Railway) | $15 |
| S3 (photos) | $5 |
| Resend (emails) | $0-20 |
| Stripe (payments) | 2.9% + $0.30 per transaction |
| Domain | $12/year |
| **Total** | **~$65-85/month** |

### Phase 2: Growth (Monthly)

| Service | Cost |
|---------|------|
| Vercel Pro | $20 |
| Railway / Render (2x) | $50 |
| PostgreSQL (dedicated) | $50 |
| S3 (photos) | $20 |
| Resend (emails) | $50 |
| Sentry | $26 |
| Datadog | $15 |
| **Total** | **~$230/month** |

---

## Troubleshooting

### Build Failures

**Issue**: `npm run build` fails on Vercel

**Solution**:
1. Check build logs for specific errors
2. Ensure `next.config.ts` is correct
3. Verify all dependencies are in `package.json`
4. Try clearing build cache and redeploying

### API Errors

**Issue**: 500 errors from backend

**Solution**:
1. Check Railway/Render logs
2. Verify environment variables are set
3. Check database connection
4. Ensure migrations have run

### Database Issues

**Issue**: Connection refused

**Solution**:
1. Verify `DATABASE_URL` is correct
2. Check if PostgreSQL is running
3. Ensure firewall rules allow connections

---

## Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Render**: [render.com/docs](https://render.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **FastAPI**: [fastapi.tiangolo.com](https://fastapi.tiangolo.com)

---

*Last updated: 2026-06-14*
