PRYSM DIGITAL EXPERIENCE
========================

**Product Requirements Document (PRD)**_Version: Execution-Safe Final_

1) Strategic Positioning & Brand Pillars
----------------------------------------

### Brand Attributes

*   Premium
    
*   Minimalist
    
*   Trust-driven (ingestible product)
    
*   Performance + wellness lifestyle
    
*   Subtle motion, not flashy
    
*   Science-forward, not clinical
    

### Primary Pillars

**1\. Made in USA**

*   Display: “Formulated in Los Angeles, CA”
    
*   Display: “Manufactured in the USA”
    
*   Treated as a quality signal, not patriotic branding
    
*   Trust seal placement:
    
    *   Footer
        
    *   Product pages
        
    *   Checkout
        

**2\. The System**

*   Energy + Focus + Mood + Sleep as one protocol
    
*   Bundles positioned as a lifestyle system
    

**3\. Subscription First**

*   Default CTA nudges toward subscription
    
*   One-time purchase exists but de-emphasized
    

2) Visual Design System (Consistency Rules)
-------------------------------------------

### 2.1 Color System

**Base Palette**

*   Primary Background: #0A0A0A
    
*   Secondary Background: #F5F5F7
    
*   Primary Text: #EDEDED
    
*   Secondary Text: #B5B5B5
    
*   Accent UI: #C9A24D (Gold) or #D4D4D4 (Silver)
    

**Product Accent Colors**

*   Prysm Intima → Electric Amber
    
*   Prysm ThinQ → Deep Sapphire
    
*   Prysm Best of You → Soft Rose Gold
    
*   NightNite → Midnight Blue → Indigo Gradient
    

**Rules**

*   Product colors used only as accents
    
*   Never full-page backgrounds
    
*   Gold/silver accents reserved for trust and CTAs
    

### 2.2 Typography

**Font Pairing**

*   Headings: Premium serif or grotesk
    
*   Body: Clean sans
    

**Rules**

*   Max 2 font families
    
*   No novelty fonts
    
*   Consistent heading scale
    
*   Increased letter spacing for luxury
    
*   Sentence case, not ALL CAPS
    

### 2.3 Motion & 3D Rules

**Intent**

*   “Alive,” not game-y
    
*   Physics-based easing
    
*   Subtle depth and elevation
    

**Allowed Effects**

*   Parallax bottle rotation
    
*   Subtle mesh gradients
    
*   Hover elevation
    
*   Fade + slide-up reveals
    
*   3D bottle renders
    

**Hard Constraints**

*   Respect prefers-reduced-motion
    
*   Lazy-load 3D assets
    
*   Static fallbacks
    
*   No blocking JS
    
*   Mobile performance first
    

3) Product Scope (MVP)
----------------------

**Core Pages**

*   Home
    
*   Shop All
    
*   Product Detail Pages
    
*   About / Science
    
*   Account Portal
    
*   Cart Drawer
    
*   Checkout
    
*   Legal (Privacy, Terms)
    

4) Pricing, Promotions & Discounts
----------------------------------

### 4.1 Known Logic

*   Subscription discount: 10%
    
*   First-time subscriber promo: 25% (Month 1 only)
    
*   Cadence discounts:
    
    *   30 days → Highest
        
    *   60 days → Lower
        
    *   90 days → Standard
        

### 4.2 Bundle Logic

**Trigger**

*   1 Bundle Quantity Item Includes 1 case package of each:
    
    *   Prysm Intima
        
    *   Prysm ThinQ
        
    *   Prysm Best of You
        
    *   NightNite
        
    
*   Apply bundle price override
    
*   Show as single cart line item
    

### 4.3 Discount Resolution Engine (Server-Authoritative)

**Order of Operations**

1.  Base product price
    
2.  Bundle override
    
3.  Subscription discount
    
4.  Cadence modifier
    
5.  First-month promo
    
6.  Rounding rules
    
7.  Tax
    
8.  Shipping
    

**Rules**

*   First-month promo once per Stripe Customer ID
    
*   No client-side pricing authority
    
*   Bundle overrides per-SKU discounts
    
*   Backend recalculates before Stripe charge
    

5) Subscription Lifecycle Rules
-------------------------------

**Supported Cadences**

*   30 / 60 / 90 days
    

**Defaults**

*   Default cadence: 30 days
    
*   Default mode: Subscription
    

**Lifecycle**

*   Frequency change cutoff: TBD
    
*   Pause: pushes next billing date
    
*   Skip: skips next cycle only
    
*   Cancellation: end of paid period
    
*   Refund policy: TBD
    
*   Inventory reservation window: TBD
    
*   Payment retries: Stripe default
    
*   Notifications: pre-billing reminder
    

6) Shipping & Tax
-----------------

### 6.1 Shipping

*   International supported
    
*   No flat rate
    
*   Real-time rates via Shippo or EasyPost
    

**UX Labels**

*   USPS First Class → Prysm Standard
    
*   DHL Express → Prysm Priority Global
    

### 6.2 Tax

*   Stripe Tax
    
*   California nexus
    
*   Destination-based tax
    
*   VAT/GST handled automatically
    

7) Database Schema (Minimum)
----------------------------

**products**

*   id
    
*   sku
    
*   name
    
*   price
    
*   tax\_code
    
*   inventory\_count
    
*   type
    

**subscriptions**

*   user\_id
    
*   stripe\_sub\_id
    
*   frequency\_days
    
*   next\_billing\_date
    
*   is\_first\_order
    

**orders**

*   user\_id
    
*   stripe\_payment\_id
    
*   total\_amount
    
*   discount\_amount
    
*   tax\_amount
    
*   shipping\_amount
    
*   order\_type
    
*   status
    

8) Security & Anti-Fraud
------------------------

### 8.1 Promo Abuse

*   Stripe Customer ID
    
*   Unique email
    
*   Stripe payment method fingerprint
    
*   No IP/device fingerprinting
    
*   Log suspicious usage
    

### 8.2 Card Testing

*   Stripe Radar
    
*   Cloudflare Turnstile
    

### 8.3 Inventory Locking

*   Reserve stock for renewals
    
*   Release on:
    
    *   Payment failure
        
    *   Cancellation
        
    *   Skip
        
*   Block new orders if inventory < reserved
    

9) Engineering Principles (Non-Negotiable)
------------------------------------------

### 9.1 Packages

*   Only actively maintained
    
*   Security-audited
    
*   CI fails on high-severity vulns
    

### 9.2 Input Validation

*   Schema-based validation
    
*   Reject invalid payloads
    
*   ORM only
    
*   No raw SQL
    

### 9.3 Rate Limiting

*   Login: 5/min
    
*   Checkout: 10/hr
    
*   Subscription: 5/hr
    

### 9.4 Error Handling

*   No stack traces to users
    
*   Logged + tracked
    
*   Friendly UX fallbacks
    

10) AI Build Rules
------------------

### 10.1 No Assumptions

AI must not invent:

*   Refund rules
    
*   Cutoff windows
    
*   Pricing
    
*   Legal claims
    
*   Tax exemptions
    
*   Shipping restrictions
    

### 10.2 Security Rules

*   No unvetted packages
    
*   No raw SQL
    
*   No client pricing authority
    
*   No unsafe eval
    
*   No secrets in frontend
    

### 10.3 Business Logic Rules

*   Server-authoritative pricing
    
*   Discount engine order enforced
    
*   Bundle logic deterministic
    
*   Inventory blocks checkout
    
*   First-month promo once per Stripe ID
    

11) Open Client Dependencies
----------------------------

Must confirm before final implementation:

*   Refund policy
    
*   Cancellation cutoff
    
*   Pause/skip rules
    
*   Inventory reservation window
    
*   Final pricing
    
*   Cadence discount percentages
    
*   Bundle discount
    
*   Legal claims wording
    
*   Shipping restrictions
    
*   Currency handling