import type { Metadata } from "next";
import About from "@/components/About";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_NAME } from "@/lib/seo";

const title = "About Spiritus Systems";
const description =
  "Spiritus Systems is a Zimbabwean technology company building SaaS platforms, AI systems, and operational infrastructure for organisations across Zimbabwe. Based in Harare.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about Spiritus Systems",
    "software company Zimbabwe",
    "tech company Harare",
    "Zimbabwean software engineers",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/about",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-about"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <About />
    </div>
  );
}
