export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spiritus.co.zw";

export const SITE_NAME = "Spiritus Systems";

export const SITE_TAGLINE = "Zimbabwe's SaaS engineering company";

export const SITE_DESCRIPTION =
  "Spiritus Systems is a Harare-based web development and SaaS engineering company building websites, web apps, SaaS platforms, AI systems, CRM, ERP, and operational infrastructure for Zimbabwean enterprises, government, SMEs, and startups.";

export const ORG_EMAIL = "create@spiritus.co.zw";
export const ORG_PHONE = "+263777816368";
export const ORG_PHONE_DISPLAY = "0777 816 368";

export const KEYWORDS = [
  "web development Zimbabwe",
  "web development Harare",
  "web design Zimbabwe",
  "web design Harare",
  "website developer Zimbabwe",
  "website developer Harare",
  "Next.js developers Zimbabwe",
  "React developers Zimbabwe",
  "e-commerce development Zimbabwe",
  "software development Zimbabwe",
  "software company Harare",
  "custom software Zimbabwe",
  "SaaS Zimbabwe",
  "SaaS development Harare",
  "CRM Zimbabwe",
  "ERP Zimbabwe",
  "AI development Zimbabwe",
  "systems integration Zimbabwe",
  "fintech development Zimbabwe",
  "EcoCash integration",
  "Spiritus Systems",
];

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Spiritus",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    image: `${SITE_URL}/opengraph-image`,
    description: SITE_DESCRIPTION,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    foundingLocation: {
      "@type": "Place",
      name: "Harare, Zimbabwe",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressRegion: "Harare",
      addressCountry: "ZW",
    },
    areaServed: [
      { "@type": "Country", name: "Zimbabwe" },
      { "@type": "AdministrativeArea", name: "Southern Africa" },
    ],
    knowsAbout: [
      "Web development",
      "Web design",
      "E-commerce development",
      "SaaS development",
      "Custom CRM",
      "Custom ERP",
      "AI systems",
      "Workflow automation",
      "Systems integration",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Cloud infrastructure",
      "Search engine optimization",
      "EcoCash integration",
      "Multi-currency payments",
    ],
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: ORG_EMAIL,
        telephone: ORG_PHONE,
        areaServed: "ZW",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/opengraph-image`,
    url: SITE_URL,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressRegion: "Harare",
      addressCountry: "ZW",
    },
    areaServed: { "@type": "Country", name: "Zimbabwe" },
    serviceType: [
      "Web development",
      "SaaS development",
      "AI systems",
      "CRM development",
      "ERP development",
      "Systems integration",
      "Digital strategy",
      "Product design",
    ],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-ZW",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageJsonLd(
  qa: Array<{ q: string; a: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function blogPostingJsonLd(args: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
}): JsonLd {
  const url = `${SITE_URL}/blog/${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: args.title,
    description: args.description,
    datePublished: args.publishedAt,
    dateModified: args.updatedAt ?? args.publishedAt,
    author: {
      "@type": "Organization",
      name: args.author ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: args.image ?? `${SITE_URL}/opengraph-image`,
    inLanguage: "en-ZW",
    url,
  };
}

export function blogJsonLd(
  posts: Array<{ title: string; slug: string; description: string; publishedAt: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: `${SITE_NAME}: Insights`,
    description:
      "Practical writing on custom software development in Zimbabwe. Pricing, technology choices, local context, and engineering patterns that ship.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-ZW",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Zimbabwe" },
  };
}
