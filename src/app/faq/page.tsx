import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, SITE_NAME } from "@/lib/seo";
import { faqFlat } from "@/data/faq";

const title = "FAQ — Pricing, process & technology";
const description =
  "Common questions about working with Spiritus Systems: pricing, project timelines, technology stack, EcoCash and multi-currency support, maintenance, and Zimbabwe-specific considerations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Spiritus Systems FAQ",
    "software pricing Zimbabwe",
    "custom software cost Zimbabwe",
    "software project timeline",
    "EcoCash integration FAQ",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/faq",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function FAQPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-faq"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd id="ld-faqpage" data={faqPageJsonLd(faqFlat)} />
      <FAQ />
    </div>
  );
}
