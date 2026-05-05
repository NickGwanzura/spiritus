import Link from "next/link";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  return (
    <div
      id="services"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">Services</div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 14,
            maxWidth: 720,
          }}
        >
          Everything we build,
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>ships to production.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.02em",
            color: "var(--accent)",
            margin: "0 0 14px",
            textTransform: "uppercase",
          }}
        >
          Custom software development in Zimbabwe
        </p>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 620,
            marginBottom: 48,
          }}
        >
          Spiritus Systems is your custom software development partner in
          Zimbabwe, delivering websites, web apps, SaaS platforms, AI systems,
          CRM, ERP, and integrations under one roof. Six practice areas, one
          standard. Each engagement is scoped to fit the problem, not the
          product.
        </p>

        <ScrollReveal
          className="services-grid reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="service-card qcard reveal-child"
              style={{
                position: "relative",
                padding: 26,
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                isolation: "isolate",
              }}
            >
              <span aria-hidden className="service-card-stroke" />
              <span aria-hidden className="service-card-glow" />

              <div className="service-card-icon" style={{ marginBottom: 20 }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "var(--fg)",
                  marginBottom: 4,
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--fg-dim)",
                  marginBottom: 12,
                }}
              >
                {s.tag}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.55,
                  marginBottom: 14,
                }}
              >
                {s.summary}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {s.outcomes.slice(0, 3).map((o) => (
                  <li
                    key={o.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "14px 1fr",
                      gap: 8,
                      fontSize: 12.5,
                      color: "var(--fg-muted)",
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      style={{
                        marginTop: 4,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "var(--accent-muted)",
                        color: "var(--accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg viewBox="0 0 10 10" width={7} height={7} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 5L4 7L8 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{o.label}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                {s.stack.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      padding: "3px 8px",
                      borderRadius: "var(--r-pill)",
                      border: "1px solid var(--border)",
                      color: "var(--fg-subtle)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 14,
                  marginTop: "auto",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--fg-dim)",
                  }}
                >
                  {s.engagement?.split(/[,.;]/)[0]?.trim() || "Engagement"}
                </span>
                <span
                  className="service-card-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--accent)",
                    transition: "gap 0.2s var(--ease)",
                  }}
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
