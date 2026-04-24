import Link from "next/link";
import { services } from "@/data/services";

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

        <div
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
              style={{ padding: 24, color: "inherit", display: "block" }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--r-sm)",
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  marginBottom: 8,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.55,
                  marginBottom: 16,
                }}
              >
                {s.summary}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 16,
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--fg-subtle)",
                  }}
                >
                  {s.tag}
                </span>
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
                  Learn more
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
