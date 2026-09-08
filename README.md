# Tably Marketing Website

**Live at:** [https://tably.site](https://tably.site)

> ⚠️ **REPOSITORY SCOPE NOTICE**: This repository contains **exclusively** the public-facing marketing website and landing portal for Tably. The core multi-tenant SaaS application, live order processing engine, kitchen display systems (KDS), database infrastructure, and backend services reside in separate repositories. This codebase is the customer acquisition and product showcase layer only.

---

## Table of Contents

- [About Tably](#about-tably)
- [Key Capabilities](#key-capabilities)
- [Product Features](#product-features)
- [System Architecture & Scope](#system-architecture--scope)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About Tably

Tably is a **modern restaurant management SaaS platform** designed to transform traditional hospitality operations into high-efficiency, digital-first workflows. Built for restaurant owners, managers, and hospitality operators, Tably bridges the critical gap between dine-in customers, waitstaff, and kitchen management—eliminating friction, reducing order errors, and accelerating table turnover.

### The Problem We Solve

Traditional restaurant operations rely on manual order taking, paper tickets, and fragmented communication channels. This creates bottlenecks: staff spend time running back and forth, orders get lost or misunderstood, customers wait unnecessarily, and kitchen teams struggle to prioritize. For multi-location venues, operational complexity compounds exponentially.

### The Tably Solution

Tably provides an **integrated digital ecosystem** where:
- **Customers** place orders instantly via QR code without downloading an app
- **Waitstaff** gain real-time visibility into order status and customer requests
- **Kitchen teams** receive organized, prioritized orders with clear communication
- **Managers** monitor operations, track revenue, and optimize inventory across all locations—from a unified dashboard

The result: faster service, happier customers, reduced operational overhead, and measurable revenue growth.

---

## Key Capabilities

### 1. **QR Code Table-Side Ordering**
- Instant digital menu access directly from table QR codes
- **Zero friction entry**—no app downloads or registration required
- Visual, high-resolution menu with mouth-watering product photography
- Real-time item availability managed from the admin dashboard
- Direct order routing by branch and table number

### 2. **Real-Time Admin & Kitchen Dashboard**
- **Centralized Order Lifecycle Management**: View all orders from placement through completion
- **Live Status Updates**: Track order preparation time, identify bottlenecks
- **Revenue Tracking**: Real-time sales metrics, top-selling items, revenue by table
- **Inventory Management**: Toggle item availability instantly, manage stock levels across branches
- **Kitchen Display System (KDS)**: Organized ticket flow, prep time tracking, and order prioritization

### 3. **Multi-Branch & Table Layout Routing**
- **Custom Table Mapping**: Define table layouts, seating arrangements, and section management per branch
- **Intelligent Order Routing**: Automatic order dispatch to correct location and kitchen station
- **Centralized Multi-Location Control**: Manage unlimited branches from a single admin interface
- **Scalable Architecture**: Support growing restaurant chains with complex operational needs

### 4. **Frictionless Customer Experience**
- **Fast Digital Checkout**: One-click payment processing with multiple payment gateway integrations
- **Customization Engine**: Full support for modifiers, add-ons, special instructions, and dietary notes
- **Instant Digital Receipts**: Email or SMS receipt delivery, no paper waste
- **Personalization**: Track repeat customers, order history, preferences (in core SaaS)
- **Mobile-Responsive Design**: Perfect experience on all device sizes

### 5. **Compliance & Operational Excellence**
- **SEO Optimization**: Structured data, meta tags, sitemap generation for organic discoverability
- **Domain Integration**: Custom branded experience with CNAME and subdomain support
- **Accessibility**: WCAG compliance, keyboard navigation, screen reader support
- **Performance**: Optimized loading times, lazy loading, and global CDN distribution via Vercel

---

## Product Features

### Customer-Facing
- ✅ QR code-driven menu access
- ✅ High-quality product imagery and descriptions
- ✅ Real-time item availability indicators
- ✅ Advanced customization options (sizes, modifiers, special requests)
- ✅ Secure checkout with multiple payment methods
- ✅ Digital receipt delivery (email/SMS)
- ✅ Order tracking in real-time
- ✅ Multi-language support (configurable)

### Restaurant Operations
- ✅ Unified admin dashboard with real-time analytics
- ✅ Multi-branch management with branch-specific settings
- ✅ Table layout configuration and management
- ✅ Menu management with categories, pricing, and availability
- ✅ Order management and fulfillment tracking
- ✅ Kitchen display system (KDS) with ticket prioritization
- ✅ Inventory tracking and low-stock alerts
- ✅ Staff role-based access control
- ✅ Revenue reports and business intelligence

### Technical Features
- ✅ Responsive design (mobile-first)
- ✅ Progressive Web App (PWA) capabilities
- ✅ SEO-optimized landing pages
- ✅ Sitemap and structured data (schema.org)
- ✅ Custom domain support with SSL/TLS
- ✅ Fast page load times (<2s target)
- ✅ Accessible UI (WCAG 2.1 AA compliance)
- ✅ Dark mode support

---

## System Architecture & Scope

### This Repository (Marketing Website)
This codebase is the **public-facing conversion engine** and primary entry point for potential customers. It includes:

```
Tably Marketing Website Repository
├── Landing page & hero section
├── Product feature showcase
├── Pricing/plans information
├── Customer testimonials & case studies
├── FAQ & support documentation
├── Demo request & contact forms
├── SEO metadata & structured data
├── Analytics & conversion tracking
└── Responsive design optimizations
```

**Hosted on:** Vercel (CDN global distribution, automatic deployments, SSL)

### Private Core Application (Separate Repositories)
The Tably SaaS application architecture spans multiple private repositories:

```
Core Tably SaaS Infrastructure
├── Backend API Service
│   ├── Order processing engine
│   ├── Real-time WebSocket updates
│   ├── Payment gateway integrations
│   ├── Authentication & authorization
│   └── Multi-tenant data isolation
│
├── Admin Dashboard Application
│   ├── Restaurant management interface
│   ├── Kitchen Display System (KDS)
│   ├── Analytics & reporting engine
│   ├── Inventory management
│   └── Staff & role management
│
├── Customer Mobile/Web App
│   ├── QR code order placement
│   ├── Real-time order tracking
│   ├── Payment processing UI
│   └── Digital receipt system
│
├── Database & Infrastructure
│   ├── Supabase PostgreSQL instance
│   ├── Real-time subscriptions
│   ├── Vector search (menu similarity)
│   └── Backup & disaster recovery
│
└── Integrations & Services
    ├── Payment processors (Stripe, etc.)
    ├── SMS/Email service providers
    ├── Analytics platforms
    └── Third-party POS systems
```

**Key Separation Pattern:**
- **Marketing Site** (this repo): Public, stateless, high-cacheability, SEO-focused
- **SaaS Application** (private repo): Authenticated, stateful, real-time, business-critical

This separation ensures:
1. Fast, reliable marketing site independent of application uptime
2. Simplified scaling of each component
3. Clear security boundaries between public and private systems
4. Independent deployment and update cycles

---

## Tech Stack

### Frontend Framework & Language
- **React 19** – Modern UI component library with hooks and concurrent features
- **TypeScript** – Type-safe JavaScript for production reliability
- **Next.js 15** – App router, server components, and static generation for SEO

### Styling & Design
- **Tailwind CSS** – Utility-first CSS framework for rapid, responsive design
- **Lucide Icons** – Lightweight, consistent icon library
- **Framer Motion** – Smooth animations and micro-interactions
- **CSS Modules** – Scoped styling for component encapsulation

### Developer Experience
- **Vite** – Lightning-fast build tool and dev server with HMR
- **ESLint** – Code quality and consistency checking
- **Prettier** – Automatic code formatting
- **TypeScript Compiler** – Type checking and compilation

### Deployment & Hosting
- **Vercel** – Global CDN, serverless functions, automatic deployments, SSL/TLS
- **Git-based Workflow** – Push-to-deploy from GitHub

### Performance & SEO
- **Next.js Static Generation** – Pre-rendered pages for maximum performance
- **Image Optimization** – Automatic WebP conversion and responsive sizing
- **Sitemap Generation** – Automated XML sitemaps for search engines
- **Meta Tags & Structured Data** – JSON-LD schema for rich search results
- **Core Web Vitals Optimization** – LCP, FID, CLS monitoring

### Analytics & Monitoring
- **Vercel Analytics** – Real User Monitoring (RUM)
- **Web Vitals** – Performance tracking
- **Error Logging** – Production error monitoring (configurable)

---

## Getting Started

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** / **pnpm**
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Danny7d/Tably.git
   cd Tably
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env.local` and populate with your configuration:
   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   ```
   # Public variables (visible in browser)
   NEXT_PUBLIC_SITE_URL=https://tably.site
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   
   # Private variables (server-only)
   # (Configure as needed for your deployment)
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

---

## Development Workflow

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run type-check

# Linting and formatting
npm run lint
npm run format

# Run all checks (lint, format, type-check)
npm run check
```

### Directory Structure

```
src/
├── components/           # Reusable React components
│   ├── common/          # Global components (header, footer, nav)
│   ├── sections/        # Page sections (hero, features, pricing)
│   ├── ui/              # Base UI components (buttons, cards, forms)
│   └── layout/          # Layout wrapper components
│
├── pages/               # Next.js route pages
│   ├── index.tsx        # Home/landing page
│   ├── features.tsx     # Features page
│   ├── pricing.tsx      # Pricing page
│   ├── about.tsx        # About page
│   ├── demo.tsx         # Demo request page
│   ├── contact.tsx      # Contact page
│   └── [slug].tsx       # Dynamic routes
│
├── styles/              # Global styles and CSS modules
│   ├── globals.css      # Global Tailwind directives
│   └── variables.css    # CSS custom properties
│
├── lib/                 # Utility functions and helpers
│   ├── api.ts           # API client functions
│   ├── analytics.ts     # Analytics helpers
│   └── utils.ts         # General utilities
│
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared types
│
└── public/              # Static assets
    ├── images/          # Product images, screenshots
    ├── icons/           # Favicon, app icons
    └── assets/          # Other static files
```

### Code Standards

- **TypeScript strict mode** is enabled; no `any` types without justification
- **Component naming**: PascalCase for components, camelCase for utilities
- **Props interface**: Always define explicit interfaces for component props
- **CSS**: Use Tailwind utilities; create CSS modules for complex styling
- **Comments**: Document complex logic, API integrations, and non-obvious patterns

### Git Workflow

1. Create a feature branch: `git checkout -b feature/description`
2. Make your changes and commit with clear messages
3. Push to origin: `git push origin feature/description`
4. Create a Pull Request with a detailed description
5. Request review from team members
6. Merge after approval

---

## Build & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next/` directory:
- Static pages are pre-rendered
- Images are optimized (WebP, responsive sizes)
- JavaScript is minified and code-split
- CSS is purged of unused styles

### Deployment to Vercel

This repository is configured for automatic deployment via Vercel:

1. **Connect repository:** Link your GitHub repo to Vercel dashboard
2. **Auto-deployments:** Every push to `main` automatically deploys to production
3. **Preview deployments:** Every pull request gets a preview URL
4. **Environment variables:** Configure in Vercel project settings
5. **Custom domain:** Point your domain via CNAME to Vercel

**Deployment checklist:**
- [ ] All tests passing
- [ ] ESLint warnings resolved
- [ ] SEO metadata verified
- [ ] Performance budget met (<2s LCP)
- [ ] No console errors
- [ ] Analytics tracking implemented
- [ ] Environment variables configured

---

## Performance Optimization

### Current Metrics
- **Lighthouse Score:** Target 90+ (performance, accessibility, best practices, SEO)
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

### Optimization Techniques Implemented
- Image optimization with `next/image`
- Code splitting and dynamic imports
- CSS-in-JS with minimal runtime overhead
- Lazy loading for below-the-fold content
- Static generation where possible
- ISR (Incremental Static Regeneration) for dynamic content
- Minification and tree-shaking
- Responsive design to minimize bandwidth

---

## Contributing

We welcome contributions to the marketing website! Here's how to contribute:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/your-feature`
3. **Make your changes** following our code standards
4. **Test your changes:** `npm run check`
5. **Commit with clear messages:** `git commit -m "feat: add new feature"`
6. **Push and create a Pull Request**

### Contribution Guidelines
- Keep commits atomic and focused
- Write clear commit messages using conventional commits
- Include tests for new features
- Update documentation as needed
- Respect existing code style and patterns

### Reporting Issues
Found a bug or have a suggestion? Please:
1. Check if the issue already exists
2. Provide a clear, detailed description
3. Include steps to reproduce (for bugs)
4. Add relevant screenshots or error messages

---

## Frequently Asked Questions

### Q: Can I use this code as a template for my own restaurant website?
**A:** This code is specific to Tably's branding, infrastructure, and requirements. If you're interested in creating a similar platform, we recommend building from scratch or consulting the documentation for architectural patterns.

### Q: Where is the actual SaaS application code?
**A:** The core Tably SaaS application, including the admin dashboard, kitchen display system, and order processing engine, resides in private repositories. This marketing site is the public entry point only.

### Q: How do I report security issues?
**A:** Please report security vulnerabilities responsibly to our security team rather than through public issues. Contact: contact@tably.site (or your designated security contact).

### Q: Can I deploy this to my own servers?
**A:** This repository is designed specifically for deployment to Vercel. Deploying to other platforms may require significant configuration changes.

---

## License

This project is proprietary software owned by Tably. Unauthorized copying, modification, or distribution is prohibited. See the LICENSE file for detailed terms.

---

## Support & Resources

- **Website:** [https://tably.site](https://tably.site)
- **Demo:** [Request a demo](https://tably.site/demo)
- **Support:** [Contact us](https://tably.site/contact)
- **Documentation:** See `/docs` for internal developer guides

---

## Roadmap

Planned enhancements for the Tably marketing website:

- [ ] Interactive product demo (embedded)
- [ ] Video testimonials from restaurant partners
- [ ] Detailed ROI calculator
- [ ] Live chat support integration
- [ ] Expanded case studies section
- [ ] Multi-language support
- [ ] Blog and resource center

---

**Last Updated:** September 2026  
**Maintained by:** Tably Development Team

