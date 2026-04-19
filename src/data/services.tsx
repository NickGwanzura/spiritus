import type { ReactNode } from "react";

export type Service = {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  summary: string;
  lede: string;
  overview: string[];
  outcomes: { label: string; body: string }[];
  deliverables: string[];
  stack: string[];
  whoFor: string[];
  engagement: string;
  faq: { q: string; a: string }[];
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  width: 18,
  height: 18,
} as const;

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tag: "Next.js · React · SEO",
    tagline: "SEO-ready websites and web apps on Next.js.",
    summary:
      "Marketing sites, e-commerce stores, and web apps. Fast, responsive, accessible, SEO-ready, built on Next.js and deployed on edge infrastructure.",
    lede:
      "The website is often the first thing a Zimbabwean customer sees. We build sites that load fast on local networks, rank well on Google, and convert — without the bloat of page builders or template clones.",
    overview: [
      "Every site we ship is built from the ground up in Next.js and TypeScript. No drag-and-drop builders, no jQuery soup, no generic WordPress themes. The result is code you own, a site that loads in under two seconds on a Zimbabwean 3G connection, and an admin experience that actually makes sense.",
      "We cover the full arc: design, development, CMS, analytics, and deployment to Vercel or Cloudflare edge. Content editors get a clean dashboard. Developers get a codebase they can extend. You get a site that performs in Lighthouse audits and in the real world.",
      "SEO is not bolted on at the end. Structured data, sitemap generation, Open Graph, semantic HTML, Core Web Vitals, and crawl-friendly routing are defaults, not upgrades.",
    ],
    outcomes: [
      { label: "Sub-2-second load", body: "Edge-rendered, image-optimised, no render-blocking scripts. Fast on ZOL, Econet, and rural 3G alike." },
      { label: "Top local search", body: "Structured data, local SEO, and content architecture that ranks for Zimbabwe-specific queries." },
      { label: "Editor-friendly CMS", body: "Non-technical staff can update content, prices, and media without calling a developer." },
      { label: "Accessible by default", body: "WCAG AA contrast, keyboard navigation, screen-reader semantics baked in." },
    ],
    deliverables: [
      "Discovery call, content audit, and information architecture",
      "Design system and page designs in Figma",
      "Production build in Next.js with CMS of your choice",
      "SEO configuration, analytics, and cookie consent",
      "Deployment to edge hosting with SSL and custom domain",
      "Editor training, documentation, and a 30-day support window",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Sanity / Contentful / MDX", "Vercel / Cloudflare", "Plausible / GA4"],
    whoFor: [
      "SMEs needing a credible online presence",
      "E-commerce brands selling into Zimbabwe and the diaspora",
      "Corporates replacing outdated or slow WordPress sites",
      "NGOs, schools, and institutions that need accessibility and compliance",
    ],
    engagement: "4–8 weeks · fixed scope",
    faq: [
      {
        q: "Will I own the code?",
        a: "Yes. On project completion the entire codebase, design files, and infrastructure access are handed to you. No lock-in.",
      },
      {
        q: "Can I update the site myself?",
        a: "Every site ships with a headless CMS. You edit content, images, and prices in a dashboard; publishing is instant.",
      },
      {
        q: "Do you handle the domain and hosting?",
        a: "Yes. We register or transfer domains, configure DNS, set up SSL, and deploy to production. You keep administrative ownership.",
      },
      {
        q: "Is this good for e-commerce?",
        a: "Yes. We integrate Paynow, Stripe, and EcoCash, handle inventory and order flow, and can plug in Shopify or Medusa where appropriate.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="16" height="13" rx="1.5" />
        <path d="M2 7H18" strokeLinecap="round" />
        <circle cx="4.5" cy="5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "saas-platforms",
    title: "SaaS & Platform Development",
    tag: "Next.js · PostgreSQL · Cloud",
    tagline: "Full-stack software products built for scale.",
    summary:
      "Full-stack software products built for scale. We architect and ship multi-tenant platforms that handle real load and complex workflows.",
    lede:
      "A SaaS platform is a long-term commitment — auth, billing, data models, infrastructure, and ongoing feature velocity all compound over years. We build platforms that are shippable on day one and still maintainable on day one thousand.",
    overview: [
      "We start with a product architecture that accounts for multi-tenancy, row-level security, background jobs, webhooks, and observability from the first commit. These are not features you bolt on later. They are assumptions the entire codebase needs to be built around.",
      "Billing, authentication, email, queues, and feature flags are all wired up before shipping. Stripe for international customers, Paynow and EcoCash for local. You get a platform that can take a paying customer the day it goes live.",
      "Post-launch, we stay involved. Monitoring, alerting, incident response, and feature iteration are covered under a retainer. A SaaS platform that is not actively maintained is a liability.",
    ],
    outcomes: [
      { label: "Production on day one", body: "Live, paying-user-ready infrastructure at launch — not a prototype you need to re-platform in six months." },
      { label: "Built to scale", body: "Postgres with proper indexing, caching layers, background jobs, and autoscaling infrastructure." },
      { label: "Multi-tenant secure", body: "Row-level security, tenant-scoped queries, audit logs, and RBAC wired in from the start." },
      { label: "Monitored & observable", body: "Error tracking, uptime monitoring, structured logs, and performance dashboards included." },
    ],
    deliverables: [
      "Product discovery, user flows, and technical architecture doc",
      "Figma designs and a production design system",
      "Full-stack application with auth, billing, admin, and multi-tenancy",
      "Payment integration — Stripe, Paynow, EcoCash, or bank rails",
      "CI/CD pipeline, staging environment, error tracking",
      "Launch support, monitoring, and a 90-day runway for iteration",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma / Drizzle", "Stripe / Paynow / EcoCash", "AWS / Fly / Railway", "Sentry", "Cloudflare"],
    whoFor: [
      "Founders launching a new SaaS product",
      "Established businesses productising an internal tool",
      "Agencies and consultancies adding a software arm",
      "Corporates spinning out a digital product line",
    ],
    engagement: "10–20 weeks to v1 · ongoing retainer",
    faq: [
      {
        q: "Do you take equity?",
        a: "Generally no. We charge fixed-price for the build and a monthly retainer post-launch. Equity arrangements are considered case-by-case for strategic opportunities.",
      },
      {
        q: "Can I start with an MVP and scale?",
        a: "Yes. We scope MVPs deliberately — production-grade on day one, but focused on core user flows. Scale comes through iteration, not rebuild.",
      },
      {
        q: "What if I already have a product?",
        a: "We take over existing codebases, audit them, stabilise what's broken, and accelerate what's stuck. A rescue engagement is often faster than a rewrite.",
      },
      {
        q: "Which payment rails are supported?",
        a: "Stripe for card and international, Paynow for Zimbabwean ZWL and USD, EcoCash for mobile money, and direct bank integration where volume justifies it.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="2" width="16" height="16" rx="2" />
        <path d="M6 10L9 13L14 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tag: "LLMs · AI workflows",
    tagline: "Workflow automation and intelligent agents.",
    summary:
      "Workflow automation, intelligent agents, and AI-augmented operations integrated into processes that actually need them.",
    lede:
      "AI is only useful when it moves a real operational needle — fewer hours on routine work, faster turnaround on ambiguous tasks, better decisions on unstructured data. We build systems that do those things and stay out of the way.",
    overview: [
      "We do not retrofit AI into places it does not belong. Before writing any code we map the process, identify where a language model genuinely outperforms a rule, and measure the before-state. If the math does not work, we say so.",
      "Typical engagements include document understanding (invoices, KYC, contracts), customer-facing chat and support agents, internal copilots against company data, and automation pipelines that reduce manual triage. We build on Anthropic, OpenAI, and open-weight models depending on the use case.",
      "Retrieval, guardrails, evaluation, and fallback behaviour are all part of the build. Prompt quality is necessary but not sufficient — what keeps an AI system useful in production is the plumbing around it.",
    ],
    outcomes: [
      { label: "Hours back per week", body: "Automation of the routine manual work that burns staff time and causes burnout." },
      { label: "Faster turnaround", body: "Cycle times cut on tasks that were bottlenecked on human review and manual data entry." },
      { label: "Safer deployment", body: "Evaluations, guardrails, and human-in-the-loop checkpoints so AI augments rather than replaces judgment." },
      { label: "Cost-controlled", body: "Model routing, caching, and usage dashboards so your AI budget is predictable, not a surprise." },
    ],
    deliverables: [
      "Process audit and automation opportunity map",
      "Custom agent, copilot, or pipeline built for your use case",
      "Retrieval system against your documents and data where relevant",
      "Evaluation harness, usage logging, and safety guardrails",
      "Integration with existing tools — Slack, WhatsApp, email, CRM, ERP",
      "Training for staff and an iteration loop on real usage data",
    ],
    stack: ["Anthropic Claude", "OpenAI", "Embeddings + pgvector", "LangGraph / custom orchestration", "n8n / Temporal", "WhatsApp Cloud API"],
    whoFor: [
      "Operations-heavy businesses with repetitive manual processes",
      "Support teams drowning in first-line tickets",
      "Finance teams processing invoices and reconciliation manually",
      "Sales teams needing faster proposal and quote generation",
    ],
    engagement: "4–12 weeks per use case · iteration retainer",
    faq: [
      {
        q: "Will my data be used to train models?",
        a: "No. We use enterprise API tiers where data is not retained for training, and where your use case requires it, we can deploy open-weight models self-hosted.",
      },
      {
        q: "How do you handle hallucinations?",
        a: "Retrieval against authoritative sources, structured output contracts, confidence thresholds, and human-in-the-loop checkpoints on anything customer- or money-facing.",
      },
      {
        q: "Can it run offline?",
        a: "For many document-understanding and classification tasks, yes. We deploy smaller open-weight models on your infrastructure when connectivity or data residency is a constraint.",
      },
      {
        q: "What about cost?",
        a: "We cap spend with model routing — cheap models for easy cases, expensive models for hard ones — and build usage dashboards so you see cost per task in real time.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2V5M10 15V18M2 10H5M15 10H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "crm-erp",
    title: "CRM & ERP Solutions",
    tag: "Fully custom · Built per client",
    tagline: "Enterprise systems tailored to operations.",
    summary:
      "Custom-built customer and enterprise resource management systems designed around how your organisation actually operates.",
    lede:
      "Off-the-shelf CRM and ERP software makes you bend your workflow to fit the product. Every Zimbabwean business we have worked with has workflows that do not fit. We build systems that match your operation, not the other way around.",
    overview: [
      "A custom CRM or ERP is justified when your processes are specific enough that Salesforce, HubSpot, Zoho, or SAP would require so much customisation that you may as well start from the data model up. That is more companies than people realise — especially in Zimbabwe, where the operating environment drives unusual process shapes.",
      "We begin every engagement by mapping your actual workflow. Who enters what data, when, and why. Which fields are mandatory, which are optional, which are currently stored on paper or in WhatsApp. The resulting system is built around those realities, not against them.",
      "Implementations typically include migration from existing tools (Excel, Pastel, Sage, Salesforce, homegrown systems), role-based permissions, audit trails, WhatsApp and email integration, reporting dashboards, and a staff-training programme. Post-launch we stay on a retainer for ongoing feature work.",
    ],
    outcomes: [
      { label: "One source of truth", body: "No more duplicate records across Excel, WhatsApp, Pastel, and sticky notes. One system, one version of the data." },
      { label: "Operational visibility", body: "Live dashboards showing pipeline, stock, revenue, and operations in real time — for you and for the team." },
      { label: "Workflow fit", body: "Fields, forms, and processes shaped around your business, not a generic SaaS template." },
      { label: "Local integration", body: "WhatsApp Business, EcoCash, Paynow, Pastel, and bank statement import built in where relevant." },
    ],
    deliverables: [
      "Workflow audit and data model design",
      "Migration plan from existing tools and spreadsheets",
      "Custom CRM or ERP with role-based access control",
      "Dashboards, reports, and exportable data",
      "WhatsApp, email, payment, and accounting integrations",
      "Staff training, written SOPs, and rollout support",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Pastel / Sage / Zoho APIs", "WhatsApp Business Cloud API", "Role-based access control"],
    whoFor: [
      "SMEs with unusual workflows that off-the-shelf tools cannot model",
      "Regulated sectors needing audit trails and compliance",
      "Operations teams currently running on Excel, paper, or WhatsApp",
      "Growing businesses outgrowing their first CRM or ERP",
    ],
    engagement: "8–16 weeks to v1 · ongoing retainer",
    faq: [
      {
        q: "Why custom instead of Salesforce, HubSpot, or Zoho?",
        a: "For many Zimbabwean businesses, those tools require so much customisation, third-party plugins, and per-seat licensing that a custom build is cheaper over 3 years and fits the workflow far better.",
      },
      {
        q: "Can you migrate our existing data?",
        a: "Yes. We migrate from Excel, Pastel, Sage, Salesforce, HubSpot, Zoho, and homegrown databases. Migration is scoped and planned up front, never rushed at launch.",
      },
      {
        q: "What about WhatsApp?",
        a: "We integrate with the WhatsApp Business Cloud API so reps can message clients from inside the CRM, log conversations automatically, and trigger workflows from message events.",
      },
      {
        q: "How do we train our team?",
        a: "In-person or remote training sessions, written SOPs, video walkthroughs, and a dedicated support channel for the first 90 days.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="6" width="7" height="12" rx="1" />
        <rect x="11" y="2" width="7" height="16" rx="1" />
      </svg>
    ),
  },
  {
    slug: "systems-integration",
    title: "Systems Integration",
    tag: "APIs · Data pipelines",
    tagline: "APIs, pipelines, legacy system bridges.",
    summary:
      "Connecting disparate technology stacks into coherent infrastructure. APIs, data pipelines, legacy bridges, real-time sync across platforms.",
    lede:
      "Most operational pain in Zimbabwean businesses is not a missing tool — it is tools that do not talk to each other. The sales team is in HubSpot, finance is in Pastel, stock is in Excel, and the WhatsApp orders are in someone's phone. We connect those islands.",
    overview: [
      "A good integration is invisible. Data flows where it needs to, in the format the receiving system expects, at the cadence the business requires. A bad integration is a ticking time bomb of silent failures, duplicate records, and out-of-sync ledgers.",
      "We design integrations with retries, backoff, idempotency, monitoring, and alerting as first-class concerns. Every sync logs what it did and what it skipped. Every failure raises an alert. When something breaks, you know about it before your customers do.",
      "Typical bridges include accounting packages (Pastel, Sage, Xero, QuickBooks), e-commerce (Shopify, Woo, Medusa), payment rails (Paynow, EcoCash, Stripe), shipping APIs (DHL, local couriers), POS systems, WhatsApp Business, and bank statement ingestion.",
    ],
    outcomes: [
      { label: "Eliminated double entry", body: "Data flows automatically between systems that used to require manual re-keying." },
      { label: "Real-time sync", body: "Stock levels, customer records, and financials stay consistent across every system that touches them." },
      { label: "Monitored reliability", body: "Every sync is logged and alerted on. Silent failures become visible failures, which become fixed failures." },
      { label: "Auditable trails", body: "Full history of what synced, when, and what broke — critical for regulated sectors and clean audits." },
    ],
    deliverables: [
      "Systems inventory and integration map",
      "API or pipeline built to your specification",
      "Retry, backoff, and idempotency handling",
      "Monitoring dashboards and alerting",
      "Documentation of every data flow and its failure modes",
      "Runbook for operations and a 60-day support window",
    ],
    stack: ["REST / GraphQL / gRPC", "PostgreSQL + message queues", "Temporal / BullMQ", "Pastel / Sage / Xero / QuickBooks APIs", "WhatsApp Business Cloud", "Bank statement parsers"],
    whoFor: [
      "Businesses running 3+ tools that do not currently sync",
      "Finance teams doing manual reconciliation between accounting and CRM",
      "E-commerce businesses needing stock, order, and payment alignment",
      "Operations teams tired of WhatsApp-based handoffs between departments",
    ],
    engagement: "3–10 weeks per integration · retainer for ongoing",
    faq: [
      {
        q: "What if the system has no API?",
        a: "We work with databases directly, with file exports, with scheduled scrapers, or with UI automation where nothing else is available. There is almost always a way to get the data out.",
      },
      {
        q: "Can you handle Pastel and Sage?",
        a: "Yes. Both via their APIs where available, via direct DB access where negotiated, and via scheduled export parsing where not.",
      },
      {
        q: "What about legacy on-prem systems?",
        a: "We build VPN-tunnelled or polling-based bridges that respect legacy constraints without forcing a replacement.",
      },
      {
        q: "How do you handle failures?",
        a: "Every integration includes retry with exponential backoff, a dead-letter queue for anything that fails permanently, and real-time alerts so nothing goes silently wrong.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 17L7 11L11 14L15 8L18 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3V17H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "strategy-design",
    title: "Strategy & Design",
    tag: "Roadmaps · Brand · UI/UX",
    tagline: "Roadmaps, GTM, brand identity, and UI/UX.",
    summary:
      "Technology audits, transformation roadmaps, and go-to-market strategy paired with brand identity, UI, and UX.",
    lede:
      "Building the wrong thing beautifully is still failure. We spend the time up front to figure out what to build, who it is for, and how it will go to market — then we design it so it looks as credible as it is.",
    overview: [
      "Strategy engagements produce a written artefact you can act on. That might be a 12-month technology roadmap, a go-to-market plan, a buy-versus-build decision document, or a due-diligence-style audit of your existing stack. Not a 60-slide deck of hedges.",
      "Design engagements cover the range from brand identity (logo system, colour, type, voice) through product UI (design system, component library, flows) to marketing assets (pitch decks, one-pagers, launch collateral). Everything ships in Figma, ready for the engineering team to pick up.",
      "The two practices intertwine on most engagements. A roadmap without design is theory; a design without strategy is decoration. We run them as one workstream with one team.",
    ],
    outcomes: [
      { label: "Clarity on what to build", body: "A written roadmap with priorities, costs, and dependencies — something a board can review and a team can execute on." },
      { label: "Brand system", body: "Logo, colour, type, voice, and usage rules — consistent across every customer touchpoint." },
      { label: "Ship-ready designs", body: "Figma files with a design system, components, and flows — engineers can start Monday with no ambiguity." },
      { label: "Launch support", body: "GTM plan, messaging, and marketing collateral that gets the product in front of the right buyers." },
    ],
    deliverables: [
      "Discovery workshops with founders and key stakeholders",
      "Technology audit or roadmap document",
      "Brand identity — logo, palette, typography, voice",
      "Design system and component library in Figma",
      "Product flows and high-fidelity UI",
      "Marketing collateral — pitch deck, one-pager, landing page",
    ],
    stack: ["Figma", "FigJam", "Framer for marketing", "Written strategy in Notion or Google Docs", "Handoff-ready component specs"],
    whoFor: [
      "Founders deciding what to build next",
      "Teams needing a brand refresh or system",
      "Corporates running buy-vs-build decisions",
      "Startups preparing for fundraising or launch",
    ],
    engagement: "2–6 weeks · fixed scope",
    faq: [
      {
        q: "Can I just get the strategy without the build?",
        a: "Yes. Strategy and design are standalone engagements. Many clients use the output to brief other engineering teams or their own in-house staff.",
      },
      {
        q: "Do you work with existing brand systems?",
        a: "Yes. We extend, audit, or systematise existing brands. A full rebuild is only recommended when the current system is actively hurting the business.",
      },
      {
        q: "What does the GTM piece look like?",
        a: "Positioning, messaging, audience segmentation, channel plan, launch sequence, and the collateral needed to execute it. Not a generic marketing plan.",
      },
      {
        q: "Who owns the final files?",
        a: "You do. All Figma files, strategy documents, and brand assets transfer to you on completion.",
      },
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M10 2L3 7V18H8V13H12V18H17V7L10 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
