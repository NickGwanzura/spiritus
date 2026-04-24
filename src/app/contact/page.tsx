import type { Metadata } from "next";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  ORG_EMAIL,
  ORG_PHONE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const title = "Contact: Start a project with Spiritus Systems";
const description =
  "Start a software project with Spiritus Systems. Based in Harare CBD, Zimbabwe. Email create@spiritus.co.zw or call 0777 816 368.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact Spiritus Systems",
    "software developer Harare",
    "hire software company Zimbabwe",
    "custom software quote Zimbabwe",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/contact",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactPage() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: title,
    description,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      email: ORG_EMAIL,
      telephone: ORG_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Harare",
        addressCountry: "ZW",
      },
    },
  };
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-contact"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd id="ld-contactpage" data={contactPage} />
      <Contact />
    </div>
  );
}
