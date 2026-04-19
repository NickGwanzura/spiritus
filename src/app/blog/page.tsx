import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { blogJsonLd, breadcrumbJsonLd, SITE_NAME } from "@/lib/seo";
import { getPostsSorted } from "@/data/posts";

const title = "Insights — Custom software development in Zimbabwe";
const description =
  "Practical writing on custom software development in Zimbabwe — pricing, CRM and ERP choices, AI use cases, offline-first engineering, and the local context that shapes what we build.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Spiritus Systems blog",
    "custom software Zimbabwe",
    "software development blog Zimbabwe",
    "CRM Zimbabwe blog",
    "Next.js Zimbabwe",
    "tech blog Harare",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/blog",
  },
  twitter: { card: "summary_large_image", title, description },
};

const sectionStyle: React.CSSProperties = {
  padding: "120px 56px",
  maxWidth: 880,
  margin: "0 auto",
};

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

export default function BlogIndexPage() {
  const posts = getPostsSorted();

  return (
    <div style={{ paddingTop: 88, background: "var(--bg)" }}>
      <JsonLd
        id="ld-breadcrumb-blog"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ])}
      />
      <JsonLd id="ld-blog" data={blogJsonLd(posts)} />

      <section style={sectionStyle}>
        <div style={{ ...monoLabel, marginBottom: 16 }}>Insights</div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--fg)",
            marginBottom: 16,
            maxWidth: 760,
          }}
        >
          Custom software development
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>in Zimbabwe.</span>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            maxWidth: 640,
            marginBottom: 56,
          }}
        >
          Pricing, technology choices, local context, and engineering
          patterns from real engagements with Zimbabwean enterprises,
          government, SMEs, and startups.
        </p>

        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((p) => (
            <li
              key={p.slug}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "32px 0",
              }}
            >
              <Link
                href={`/blog/${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    marginBottom: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.03em",
                    color: "var(--fg-subtle)",
                  }}
                >
                  <time dateTime={p.publishedAt}>
                    {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span
                    style={{
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      background: "var(--fg-dim)",
                    }}
                  />
                  <span>{p.readingMinutes} min read</span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "var(--fg)",
                    margin: "0 0 12px",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--fg-muted)",
                    margin: "0 0 14px",
                    maxWidth: 720,
                  }}
                >
                  {p.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 6H9M6 3L9 6L6 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
