import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import StartProjectButton from "@/components/StartProjectButton";
import { services, getService } from "@/data/services";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} — Spiritus Systems, Harare`;
  const description = service.summary;

  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: "article",
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `/services/${slug}`,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const section: React.CSSProperties = {
  padding: "96px 56px",
  maxWidth: 1080,
  margin: "0 auto",
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(26px, 3vw, 36px)",
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: "-0.025em",
  color: "var(--fg)",
  marginBottom: 32,
  maxWidth: 720,
};

const lead: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.65,
  color: "var(--fg-muted)",
  maxWidth: 640,
};

export default async function ServiceDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: 88 }}>
      <JsonLd
        id={`ld-breadcrumb-${slug}`}
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ])}
      />
      <JsonLd
        id={`ld-service-${slug}`}
        data={serviceJsonLd(service.title, service.summary)}
      />
      <JsonLd
        id={`ld-faq-${slug}`}
        data={faqPageJsonLd(service.faq)}
      />
      <JsonLd
        id={`ld-article-${slug}`}
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: service.title,
          description: service.summary,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/services/${slug}`,
        }}
      />

      {/* Hero */}
      <section
        className="section-responsive"
        style={{
          padding: "80px 56px 64px",
          maxWidth: 1080,
          margin: "0 auto",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--fg-dim)",
            marginBottom: 28,
          }}
        >
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          <span>/</span>
          <Link href="/services" style={{ color: "inherit" }}>Services</Link>
          <span>/</span>
          <span style={{ color: "var(--accent)" }}>{service.title}</span>
        </nav>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "6px 14px 6px 10px",
            borderRadius: "var(--r-pill)",
            border: "1px solid var(--border-strong)",
            background: "var(--bg-raised)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--fg-muted)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: "var(--r-sm)",
              background: "var(--accent-muted)",
              color: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {service.icon}
          </span>
          {service.tag}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(34px, 5vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: "var(--fg)",
            marginBottom: 24,
            maxWidth: 820,
          }}
        >
          {service.title}
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
          {service.lede}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
          <StartProjectButton>Start a {service.title.toLowerCase()} project</StartProjectButton>
          <Link href="/services" className="btn-ghost">All services</Link>
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--fg-dim)",
          }}
        >
          Typical engagement · {service.engagement}
        </div>
      </section>

      {/* Overview */}
      <section style={section}>
        <div className="section-label">How we approach it</div>
        <h2 style={h2}>The approach.</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 680 }}>
          {service.overview.map((para, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)" }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={section}>
          <div className="section-label">Outcomes</div>
          <h2 style={h2}>What you end up with.</h2>
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12,
              marginTop: 32,
            }}
          >
            {service.outcomes.map((o, i) => (
              <div key={i} className="qcard" style={{ padding: 24 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "var(--fg)",
                    marginBottom: 8,
                  }}
                >
                  {o.label}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-muted)", margin: 0 }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Stack */}
      <section style={section}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 64,
          }}
        >
          <div>
            <div className="section-label">Deliverables</div>
            <h2 style={h2}>What we ship.</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {service.deliverables.map((d, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "20px 1fr",
                    gap: 14,
                    alignItems: "start",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--fg-muted)",
                  }}
                >
                  <span
                    style={{
                      marginTop: 4,
                      display: "inline-flex",
                      width: 16,
                      height: 16,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                    }}
                  >
                    <svg viewBox="0 0 12 12" width={10} height={10} fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2.5 6.5L5 9L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-label">Stack</div>
            <h2 style={h2}>Built with.</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {service.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 12px",
                    borderRadius: "var(--r-pill)",
                    border: "1px solid var(--border-strong)",
                    background: "var(--bg-raised)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--fg-muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={section}>
          <div className="section-label">Who it's for</div>
          <h2 style={h2}>Typical clients.</h2>
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12,
            }}
          >
            {service.whoFor.map((w, i) => (
              <div
                key={i}
                className="qcard"
                style={{
                  padding: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 15,
                  color: "var(--fg)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    minWidth: 28,
                    borderRadius: "var(--r-sm)",
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={section}>
        <div className="section-label">FAQ</div>
        <h2 style={h2}>Common questions.</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 820 }}>
          {service.faq.map((item, i) => (
            <details
              key={i}
              className="faq-item qcard"
              style={{ padding: "18px 20px" }}
            >
              <summary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--fg)",
                  listStyle: "none",
                }}
              >
                {item.q}
                <svg
                  className="faq-chevron"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  style={{ color: "var(--fg-subtle)", transition: "transform var(--t-fast)" }}
                >
                  <path d="M3 5L7 9L11 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                  marginTop: 14,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={section}>
          <div className="section-label">Also explore</div>
          <h2 style={h2}>Related services.</h2>
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="service-card qcard"
                style={{ padding: 20, display: "block", color: "inherit" }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "var(--r-sm)",
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {r.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                    marginBottom: 6,
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5, margin: 0 }}>
                  {r.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 56px",
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}
        className="section-responsive"
      >
        <div style={{ maxWidth: 560 }}>
          <h2 style={{ ...h2, fontSize: "clamp(22px, 2.5vw, 32px)", marginBottom: 8 }}>
            Ready to scope a {service.title.toLowerCase()} engagement?
          </h2>
          <p style={{ ...lead, fontSize: 15 }}>
            Tell us what you&rsquo;re trying to build. You&rsquo;ll get a scoped response within 48 hours, no boilerplate.
          </p>
        </div>
        <StartProjectButton>Start a project</StartProjectButton>
      </section>
    </div>
  );
}
