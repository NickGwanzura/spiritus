import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

const sectionStyle: React.CSSProperties = {
  padding: "120px 56px",
  maxWidth: 1080,
  margin: "0 auto",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(32px, 4vw, 48px)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  color: "var(--fg)",
  marginBottom: 16,
  maxWidth: 720,
};

const leadStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: "var(--fg-muted)",
  maxWidth: 560,
  marginBottom: 32,
};

const arrowLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  fontWeight: 500,
  color: "var(--accent)",
  textDecoration: "none",
};

const aboutPillars = [
  "Production-grade on day one",
  "Engineered in Harare",
  "Priced for the local market",
  "Code you own, end to end",
];

const trustedClients = [
  "Dreambox",
  "Blackivymedia",
  "Splash Air",
  "Affinity Logistics",
  "EasyRentals",
  "Cansan Solutions",
];

const outcomes = [
  {
    label: "Live on day one",
    body: "Every platform ships paying-user-ready — monitoring, backups, SSL, and auth wired in before launch, not after.",
  },
  {
    label: "One source of truth",
    body: "No duplicate records across Excel, WhatsApp, and sticky notes. One system, one version of the data, one ledger.",
  },
  {
    label: "Built for local conditions",
    body: "Fast on Zimbabwean 3G. Integrated with Paynow, EcoCash, Pastel. Works when the power and the dollar fluctuate.",
  },
  {
    label: "No lock-in",
    body: "You get the code, the designs, and the infrastructure credentials. Walk away any time and the system keeps running.",
  },
];

const workHighlights = [
  { metric: "6", label: "Platforms live in production" },
  { metric: "UK→Zim", label: "Cross-border logistics corridor" },
  { metric: "USD · ZiG", label: "Multi-currency property ERP" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About teaser */}
      <section
        className="section-responsive"
        style={{ ...sectionStyle, borderBottom: "1px solid var(--border)" }}
      >
        <ScrollReveal>
          <div className="section-label">About</div>
          <h2 style={h2Style}>
            Built to think.
            <br />
            <span style={{ color: "var(--fg-subtle)" }}>Built to last.</span>
          </h2>
          <p style={leadStyle}>
            Spiritus Systems is a Zimbabwean technology company that designs,
            builds, and deploys intelligent systems for enterprises, government
            institutions, SMEs, and startups across Zimbabwe.
          </p>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
            }}
          >
            {aboutPillars.map((item) => (
              <li
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 14px",
                  borderRadius: "var(--r-pill)",
                  border: "1px solid var(--border-strong)",
                  background: "var(--bg-raised)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--fg-muted)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/about" style={arrowLinkStyle}>
            Learn more about us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* Trusted by strip */}
      <section
        aria-label="Clients"
        style={{
          background: "var(--bg-sunken)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="section-wrap"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "44px 56px",
            display: "flex",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
              flexShrink: 0,
            }}
          >
            Shipping for teams at
          </span>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--fg-muted)",
              lineHeight: 1.8,
            }}
          >
            {trustedClients.map((c, i) => (
              <span key={c}>
                {c}
                {i < trustedClients.length - 1 && (
                  <span aria-hidden style={{ color: "var(--fg-dim)", margin: "0 14px" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser with cards */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="section-wrap" style={sectionStyle}>
          <ScrollReveal>
          <div className="section-label">What we build</div>
          <h2 style={h2Style}>Six practice areas.</h2>
          <p style={leadStyle}>
            From web development and SaaS platforms to AI systems and
            enterprise integration. Each one built for the conditions
            Zimbabwean organisations actually operate in.
          </p>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 32,
              marginBottom: 32,
            }}
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-card qcard"
                style={{ padding: 20, background: "var(--bg)", color: "inherit", display: "block" }}
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
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                    marginBottom: 4,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--fg-muted)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>

          <Link href="/services" style={arrowLinkStyle}>
            Explore all services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Outcomes — why teams choose Spiritus */}
      <section
        className="section-responsive"
        style={{ ...sectionStyle, borderBottom: "1px solid var(--border)" }}
      >
        <ScrollReveal>
          <div className="section-label">Why teams choose us</div>
          <h2 style={h2Style}>Systems measured by what they change.</h2>
          <p style={leadStyle}>
            Every engagement is judged on the operational difference it makes —
            revenue visible, staff hours back, the month-end close that happens
            without a WhatsApp thread.
          </p>

          <div
            className="outcomes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0,
              marginTop: 8,
              borderTop: "1px solid var(--border)",
            }}
          >
            {outcomes.map((o, i) => (
              <div
                key={o.label}
                style={{
                  padding: "28px 28px 28px 0",
                  borderBottom: "1px solid var(--border)",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : undefined,
                  paddingLeft: i % 2 === 1 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--fg)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {o.label}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--fg-muted)",
                    margin: 0,
                  }}
                >
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Work teaser with stat highlights */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="section-wrap" style={sectionStyle}>
          <ScrollReveal>
            <div className="section-label">Selected work</div>
            <h2 style={h2Style}>Systems we&rsquo;ve shipped.</h2>
            <p style={leadStyle}>
              Billboard CRMs, property ERPs, logistics platforms, HVAC operations
              software. Real systems running live for real Zimbabwean businesses.
            </p>

            <div
              className="work-highlights"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginTop: 32,
                marginBottom: 32,
              }}
            >
              {workHighlights.map((h) => (
                <div
                  key={h.label}
                  className="qcard"
                  style={{ padding: 22, background: "var(--bg)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(22px, 2.4vw, 28px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "var(--fg)",
                      lineHeight: 1.1,
                      marginBottom: 8,
                    }}
                  >
                    {h.metric}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--fg-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/work" style={arrowLinkStyle}>
              See our work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          background: "var(--bg-sunken)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="section-wrap"
          style={{
            ...sectionStyle,
            padding: "80px 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <ScrollReveal>
            <h2
              style={{
                ...h2Style,
                fontSize: "clamp(28px, 3vw, 36px)",
                marginBottom: 8,
              }}
            >
              Have a problem worth solving?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--fg-muted)",
                margin: 0,
              }}
            >
              We take on a limited number of new engagements each quarter.
            </p>
          </ScrollReveal>
          <Link href="/contact" className="btn-amber">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
