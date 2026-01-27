# Prysm - Premium E-Commerce Website

A luxury e-commerce platform for Prysm, a premium natural energy booster and sleep aid drink company. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Premium Design**: Luxurious, minimalist design with smooth animations
- **Product Catalog**: Showcase for Prysm energy drinks and NightNite sleep aid
- **Subscription System**: Subscription-first model with flexible cadences (30/60/90 days)
- **Server-Authoritative Pricing**: Secure pricing engine with discount logic
- **Security First**: Input validation, rate limiting, ORM-only database access
- **Stripe Integration**: Payment processing and subscription management
- **Responsive Design**: Mobile-first approach with smooth animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Clerk
- **Payments**: Stripe
- **Validation**: Zod
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (free tier works)
- Clerk account (for authentication)
- Stripe account (for payments)
- (Optional) Shippo or EasyPost account (for shipping)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Prysm
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the SQL from `supabase/schema.sql`
   - Copy your project URL and anon key from Settings > API

4. Set up Clerk:
   - Create a new application at [clerk.com](https://clerk.com)
   - Configure authentication methods (email, social, etc.)
   - Copy your publishable key and secret key

5. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your:
- Supabase URL and keys (anon key and service role key)
- Clerk publishable and secret keys
- Stripe API keys
- Shipping API keys (if using)
- Cloudflare Turnstile keys (if using)

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Prysm/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── shop/              # Shop pages
│   ├── about/             # About page
│   ├── account/           # Account portal
│   └── legal/             # Legal pages
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page components
│   ├── shop/             # Shop components
│   └── cart/             # Cart components
├── lib/                   # Utilities and helpers
│   ├── supabase.ts      # Supabase client
│   ├── pricing.ts        # Pricing engine
│   ├── rate-limit.ts     # Rate limiting
│   ├── validations.ts    # Zod schemas
│   └── constants.ts      # App constants
├── supabase/             # Database schema
│   └── schema.sql       # SQL schema for Supabase
├── types/                # TypeScript types
│   └── supabase.ts      # Supabase type definitions
└── public/              # Static assets
```

## Security Features

- **Input Validation**: All user inputs validated with Zod schemas
- **Rate Limiting**: Applied to login, checkout, and subscription endpoints
- **Row Level Security**: Supabase RLS policies protect user data
- **Authentication**: Clerk handles secure authentication
- **Server-Authoritative Pricing**: Pricing calculated server-side only
- **Security Headers**: Configured in `next.config.js`
- **Error Handling**: User-friendly error messages without exposing internals

## Design System

### Colors

- **Primary Background**: `#0A0A0A`
- **Secondary Background**: `#F5F5F7`
- **Primary Text**: `#EDEDED`
- **Secondary Text**: `#B5B5B5`
- **Accent Gold**: `#C9A24D`

### Product Colors

- **Prysm Intima**: Electric Amber (`#FFB84D`)
- **Prysm ThinQ**: Deep Sapphire (`#1E3A8A`)
- **Prysm Best of You**: Soft Rose Gold (`#E8B4A0`)
- **NightNite**: Midnight Blue/Indigo (`#4C1D95`)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Letter Spacing**: Increased for luxury feel

## Pricing Logic

The pricing engine follows this order of operations:

1. Base product price
2. Bundle override (if applicable)
3. Subscription discount (10%)
4. Cadence modifier (30/60/90 days)
5. First-month promo (25% for first-time subscribers)
6. Rounding rules
7. Tax (via Stripe Tax)
8. Shipping (via Shippo/EasyPost)

## Subscription Management

- **Cadences**: 30, 60, or 90 days
- **Default**: 30 days, subscription mode
- **Actions**: Pause, skip, cancel, change frequency
- **Lifecycle**: Managed through Stripe subscriptions

## Development

### Database Management

- Use Supabase Dashboard for database management
- Run SQL migrations in Supabase SQL Editor
- Use Supabase Studio for viewing data (similar to Prisma Studio)

### Building for Production

```bash
npm run build
npm start
```

## Environment Variables

See `.env.example` for all required environment variables.

## Client Dependencies (To Be Confirmed)

As per the PRD, the following need client confirmation:

- Refund policy
- Cancellation cutoff windows
- Pause/skip rules
- Inventory reservation window
- Final pricing
- Cadence discount percentages
- Bundle discount
- Legal claims wording
- Shipping restrictions
- Currency handling

## License

Proprietary - All rights reserved
