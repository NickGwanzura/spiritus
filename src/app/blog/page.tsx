import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { blogJsonLd, breadcrumbJsonLd, SITE_NAME } from "@/lib/seo";
import { getPostsSorted } from "@/data/posts";

const title = "Insights: Custom software development in Zimbabwe";
const description =
  "Practical writing on custom software development in Zimbabwe. Pricing, CRM and ERP choices, AI use cases, offline-first engineering, and the local context that shapes what we build.";

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

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const metaRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.03em",
  color: "var(--fg-subtle)",
};

const dotSep = (
  <span
    aria-hidden
    style={{
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "var(--fg-dim)",
    }}
  />
);

const tagChip = (label: string) => (
  <span
    key={label}
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--fg-muted)",
      padding: "4px 10px",
      borderRadius: "var(--r-pill)",
      border: "1px solid var(--border)",
      background: "var(--bg-raised)",
    }}
  >
    {label}
  </span>
);

export default function BlogIndexPage() {
  const posts = getPostsSorted();
  const [featured, ...rest] = posts;
  const totalReading = posts.reduce((n, p) => n + p.readingMinutes, 0);
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).slice(0, 10);

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

      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px 320px at 80% 0%, var(--accent-subtle), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="section-responsive"
          style={{
            position: "relative",
            padding: "96px 56px 72px",
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              ...monoLabel,
              marginBottom: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 28,
                height: 1,
                background: "var(--accent)",
              }}
            />
            Insights
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              color: "var(--fg)",
              marginBottom: 20,
              maxWidth: 820,
            }}
          >
            Custom software development
            <br />
            <span style={{ color: "var(--fg-subtle)" }}>in Zimbabwe.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--fg-muted)",
              maxWidth: 680,
              marginBottom: 32,
            }}
          >
            Pricing, technology choices, local context, and engineering patterns
            from real engagements with Zimbabwean enterprises, government, SMEs,
            and startups.
          </p>

          {/* Stat strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              flexWrap: "wrap",
              padding: "18px 22px",
              borderRadius: "var(--r-lg, 16px)",
              border: "1px solid var(--border)",
              background: "var(--bg-raised)",
              maxWidth: 680,
            }}
          >
            {[
              { value: posts.length.toString().padStart(2, "0"), label: "Articles" },
              { value: `${totalReading} min`, label: "Total reading" },
              { value: allTags.length.toString().padStart(2, "0"), label: "Topics" },
              { value: "Weekly", label: "Cadence" },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--fg)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--fg-subtle)",
                      marginTop: 3,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      width: 1,
                      alignSelf: "stretch",
                      background: "var(--border)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Topics */}
          {allTags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 32,
              }}
            >
              {allTags.map(tagChip)}
            </div>
          )}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section
          className="section-responsive"
          style={{
            padding: "72px 56px 0",
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                padding: "4px 10px",
                borderRadius: "var(--r-pill)",
                background: "var(--accent-muted)",
              }}
            >
              ★ Featured
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--fg-dim)",
                letterSpacing: "0.04em",
              }}
            >
              Latest from the team
            </span>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="insight-featured qcard"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 0,
              textDecoration: "none",
              color: "inherit",
              borderRadius: "var(--r-lg, 16px)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--bg-raised)",
            }}
          >
            <div
              style={{
                padding: "36px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <div style={metaRow}>
                <time dateTime={featured.publishedAt}>
                  {formatDate(featured.publishedAt)}
                </time>
                {dotSep}
                <span>{featured.readingMinutes} min read</span>
                {dotSep}
                <span style={{ color: "var(--accent)" }}>
                  {featured.tags[0]}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(26px, 3.2vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: "var(--fg)",
                  margin: 0,
                }}
              >
                {featured.title}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                  margin: 0,
                }}
              >
                {featured.description}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 8,
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
            </div>
            <div
              aria-hidden
              className="insight-featured-art"
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, var(--accent-muted) 0%, var(--accent-subtle) 100%)",
                borderLeft: "1px solid var(--border)",
                minHeight: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                  opacity: 0.35,
                  maskImage:
                    "radial-gradient(circle at center, black 40%, transparent 75%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  textAlign: "center",
                }}
              >
                {featured.tags.slice(0, 3).join("  ·  ")}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid of rest */}
      {rest.length > 0 && (
        <section
          className="section-responsive"
          style={{
            padding: "56px 56px 120px",
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              All articles
            </h3>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.04em",
                color: "var(--fg-dim)",
              }}
            >
              {rest.length} more
            </span>
          </div>

          <div
            className="insights-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="insight-card qcard"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: 24,
                  borderRadius: "var(--r-lg, 16px)",
                  border: "1px solid var(--border)",
                  background: "var(--bg-raised)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 220,
                }}
              >
                <div style={metaRow}>
                  <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time>
                  {dotSep}
                  <span>{p.readingMinutes} min</span>
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.25,
                    color: "var(--fg)",
                    margin: 0,
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--fg-muted)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    paddingTop: 12,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "var(--fg-subtle)",
                          padding: "3px 8px",
                          borderRadius: "var(--r-pill)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    Read
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 6H9M6 3L9 6L6 9"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="qcard"
            style={{
              marginTop: 56,
              padding: "32px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              borderRadius: "var(--r-lg, 16px)",
              border: "1px solid var(--border)",
              background: "var(--bg-raised)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "var(--fg)",
                  marginBottom: 4,
                }}
              >
                Have a problem you want written about?
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 540 }}>
                We write the posts our clients ask about most. If there is a
                decision you are stuck on, send it in and it may be the next
                piece we publish.
              </div>
            </div>
            <Link href="/contact" className="btn-amber">
              Send a topic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M7 3L11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
