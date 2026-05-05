import type { Metadata } from "next";
import StartProjectFlow from "@/components/StartProjectFlow";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, SITE_NAME } from "@/lib/seo";

const title = "Start a project";
const description =
  "Tell us about your project in 3 short steps. We respond within 24 hours with a first-read on scope, timeline, and the right engagement shape.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/start" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/start",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: false, follow: true },
};

export default function StartProjectPage() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      <JsonLd
        id="ld-breadcrumb-start"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Start a project", path: "/start" },
        ])}
      />
      <div
        className="section-wrap"
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            background: "var(--bg-raised)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
            padding: "40px 40px 32px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <StartProjectFlow />
        </div>
      </div>
    </div>
  );
}
