export type FAQItem = { q: string; a: string };
export type FAQSection = { title: string; items: FAQItem[] };

export const faqSections: FAQSection[] = [
  {
    title: "Pricing & engagement",
    items: [
      {
        q: "How much does a custom platform cost?",
        a: "Every engagement is scoped individually. The final figure depends on complexity, integrations, timeline, and ongoing support needs. You get a fixed, itemised quote before any work starts, and we will walk you through exactly how it was costed so there are no surprises.",
      },
      {
        q: "Do you work on fixed-price or retainer?",
        a: "Both. Most new builds are fixed-price against a detailed scope document. Once a platform is live, it typically moves to a monthly retainer covering maintenance, small feature additions, and support.",
      },
      {
        q: "What payment methods do you accept?",
        a: "USD bank transfer, local Zimbabwean bank transfer, EcoCash for smaller retainers, and cross-border bank wire for diaspora-owned clients. We issue formal invoices for every engagement.",
      },
      {
        q: "Do you work with startups or only established companies?",
        a: "Both. We have worked with solo founders on their first MVP and with established corporates on mission-critical platforms. The engineering standard is the same either way. What differs is scope and timeline.",
      },
    ],
  },
  {
    title: "Process & delivery",
    items: [
      {
        q: "How long does a typical project take?",
        a: "Small custom tools: 4 to 6 weeks. Mid-size platforms like CRMs or ERPs: 8 to 16 weeks. Full enterprise platforms: 4 to 9 months. We ship in 2-week sprints with working software you can test at the end of each one.",
      },
      {
        q: "What does working with Spiritus actually look like?",
        a: "Kickoff, discovery, scoping, sprint delivery, handover, ongoing support. You get a single point of contact, weekly status updates, and access to the development environment throughout. No black-box delivery.",
      },
      {
        q: "Do you handle maintenance after launch?",
        a: "Yes. Every platform we ship can transition to a monthly support retainer that covers uptime, bug fixes, small feature additions, infrastructure management, and security patching.",
      },
    ],
  },
  {
    title: "Technical & local context",
    items: [
      {
        q: "What technologies do you work with?",
        a: "Primarily Next.js and TypeScript on the frontend, Node.js or Python on the backend, PostgreSQL for data, and AWS or DigitalOcean for infrastructure. We pick the tool that fits the problem, not the one that was trendy last quarter.",
      },
      {
        q: "Can you integrate with systems we already run?",
        a: "Yes. We build APIs and data pipelines that connect to existing ERPs, accounting packages, POS systems, legacy databases, and third-party services. If it has an API or a database, we can work with it.",
      },
      {
        q: "How do you handle load-shedding, connectivity, and local payment rails?",
        a: "Every platform is built offline-first where relevant. Data syncs back when connectivity returns. We integrate with EcoCash, bank transfer, card, and USD cash as standard, and we support local hosting when data residency is a requirement.",
      },
      {
        q: "Do you only work with Zimbabwean companies?",
        a: "Our focus is Zimbabwe. We work with Zimbabwean organisations and with diaspora-owned businesses whose operations include a Zim footprint. That focus is the reason our systems actually fit. We understand the operating environment.",
      },
    ],
  },
];

export const faqFlat = faqSections.flatMap((s) => s.items);
