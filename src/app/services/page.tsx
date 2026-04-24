import type { Metadata } from "next";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd, SITE_NAME } from "@/lib/seo";

const title = "Services: Web Development, SaaS, AI, CRM, ERP & Integration";
const description =
  "Web development, SaaS platforms, AI systems, CRM/ERP, systems integration, digital strategy, and product design, built in Harare for Zimbabwean enterprises, government, SMEs, and startups.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "web development Zimbabwe",
    "web design Harare",
    "Next.js developers Zimbabwe",
    "website developer Zimbabwe",
    "SaaS development Zimbabwe",
    "AI development Zimbabwe",
    "CRM development Zimbabwe",
    "ERP development Zimbabwe",
    "systems integration Harare",
    "software services Zimbabwe",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/services",
  },
  twitter: { card: "summary_large_image", title, description },
};

const serviceList = [
  { name: "Web Development", desc: "Marketing sites, e-commerce stores, and web apps. Fast, responsive, accessible, SEO-ready websites built on Next.js for Zimbabwean organisations." },
  { name: "SaaS & Platforms", desc: "Full-stack software products built for scale, deployed for Zimbabwean organisations." },
  { name: "AI & Automation", desc: "Workflow automation and intelligent agents for operational efficiency." },
  { name: "CRM & ERP", desc: "Enterprise CRM and ERP systems tailored to Zimbabwean operations." },
  { name: "Systems Integration", desc: "APIs, data pipelines, and bridges to legacy systems." },
  { name: "Strategy & Design", desc: "Technology audits, transformation roadmaps, go-to-market strategy, brand identity, UI, and UX, bundled into one engagement." },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-services"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      {serviceList.map((s, i) => (
        <JsonLd
          key={s.name}
          id={`ld-service-${i}`}
          data={serviceJsonLd(s.name, s.desc)}
        />
      ))}
      <Services />
      <Approach />
    </div>
  );
}
