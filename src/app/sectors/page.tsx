import type { Metadata } from "next";
import Sectors from "@/components/Sectors";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_NAME } from "@/lib/seo";

const title = "Sectors we serve in Zimbabwe";
const description =
  "Industries we serve in Zimbabwe: financial services, government, real estate, retail, energy, health, logistics, advertising, and startups.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fintech software Zimbabwe",
    "government software Zimbabwe",
    "real estate ERP Zimbabwe",
    "retail software Zimbabwe",
    "logistics software Zimbabwe",
    "health software Zimbabwe",
  ],
  alternates: { canonical: "/sectors" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/sectors",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function SectorsPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-sectors"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
        ])}
      />
      <Sectors />
    </div>
  );
}
