import type { Metadata } from "next";
import Work from "@/components/Work";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const title = "Our Work — Live platforms shipped in Zimbabwe";
const description =
  "Platforms we have designed, built, and deployed for Zimbabwean clients across advertising, logistics, property, retail, e-commerce, and field services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Zimbabwe software case studies",
    "CRM Zimbabwe",
    "ERP Zimbabwe",
    "billboard CRM",
    "HVAC software Zimbabwe",
    "logistics software Zimbabwe",
    "property management ERP Zimbabwe",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/work",
  },
  twitter: { card: "summary_large_image", title, description },
};

const portfolio = [
  { name: "Dreambox Advertising — Billboard CRM", url: "https://crm.dreamboxadvertising.co.zw/" },
  { name: "Splash Air — HVAC Services Platform", url: "https://splashaircrmzw.site/" },
  { name: "Affinity Logistics — UK to Zimbabwe Shipping CRM", url: "https://affinitylogistics.site/" },
  { name: "EasyRentals — Property Management ERP", url: "https://easyrentalszw.online/" },
  { name: "Cansan Solutions — Online Shop & CRM Backend", url: "https://cansansolutions.shop/" },
];

export default function WorkPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Spiritus Systems — Selected work",
    itemListElement: portfolio.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.url,
    })),
  };
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${SITE_URL}/work`,
    name: title,
    description,
  };
  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id="ld-breadcrumb-work"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <JsonLd id="ld-work-collection" data={collection} />
      <JsonLd id="ld-work-itemlist" data={itemList} />
      <Work />
    </div>
  );
}
