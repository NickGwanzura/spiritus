import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "SaaS & Platforms",
    desc: "Full-stack software products built for scale.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <rect x="2" y="2" width="16" height="16" rx="2" />
        <path d="M6 10L9 13L14 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    desc: "Workflow automation and intelligent agents.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2V5M10 15V18M2 10H5M15 10H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "CRM & ERP",
    desc: "Enterprise systems tailored to operations.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <rect x="2" y="6" width="7" height="12" rx="1" />
        <rect x="11" y="2" width="7" height="16" rx="1" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    desc: "APIs, pipelines, legacy system bridges.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <path d="M3 17L7 11L11 14L15 8L18 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3V17H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    desc: "Roadmaps, audits, and GTM strategy.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <path d="M10 2L3 7V18H8V13H12V18H17V7L10 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Product Design",
    desc: "Brand identity, UI/UX, and experience design.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <circle cx="10" cy="7" r="3.5" />
        <path d="M3 18C3 14.7 6.1 12 10 12C13.9 12 17 14.7 17 18" strokeLinecap="round" />
      </svg>
    ),
  },
];

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
          <Link href="/about" style={arrowLinkStyle}>
            Learn more about us
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
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
            From SaaS platforms and AI systems to enterprise integration. Each
            one built for the conditions Zimbabwean organisations actually
            operate in.
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
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card qcard"
                style={{ padding: 20, background: "var(--bg)" }}
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
                  {s.desc}
                </p>
              </div>
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

      {/* Work teaser */}
      <section
        className="section-responsive"
        style={{ ...sectionStyle, borderBottom: "1px solid var(--border)" }}
      >
        <ScrollReveal>
          <div className="section-label">Selected work</div>
          <h2 style={h2Style}>Systems we&rsquo;ve shipped.</h2>
          <p style={leadStyle}>
            Billboard CRMs, property ERPs, logistics platforms, HVAC operations
            software. Real systems running live for real Zimbabwean businesses.
          </p>
          <Link href="/work" style={arrowLinkStyle}>
            See our work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* CTA strip */}
      <section
        style={{
          background: "var(--bg-raised)",
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
