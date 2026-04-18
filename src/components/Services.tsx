const services = [
  {
    title: "SaaS & Platform Development",
    desc: "Full-stack software products built for scale. We design, architect, and ship web platforms that handle real-world load, complex workflows, and multi-tenant environments.",
    tag: "Next.js · PostgreSQL · Cloud",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <rect x="2" y="2" width="16" height="16" rx="2" />
        <path d="M6 10L9 13L14 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    desc: "Workflow automation, intelligent agents, and AI-augmented operations. We integrate language models and ML pipelines into processes that actually need them.",
    tag: "LLMs · AI workflows",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2V5M10 15V18M2 10H5M15 10H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "CRM & ERP Solutions",
    desc: "Custom-built customer and enterprise resource management systems, architected from the ground up for how your organisation actually operates. Not bent to fit an off-the-shelf product.",
    tag: "Fully custom · Built per client",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <rect x="2" y="6" width="7" height="12" rx="1" />
        <rect x="11" y="2" width="7" height="16" rx="1" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    desc: "Connecting disparate technology stacks into coherent, reliable infrastructure. APIs, data pipelines, legacy bridges, and real-time sync across platforms.",
    tag: "APIs · Data pipelines",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <path d="M3 17L7 11L11 14L15 8L18 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3V17H18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    desc: "Technology audits, transformation roadmaps, and go-to-market strategy. We advise on where to invest and, just as importantly, where not to.",
    tag: "Roadmaps · GTM",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <path d="M10 2L3 7V18H8V13H12V18H17V7L10 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Product Design",
    desc: "Brand identity, UI/UX, and product experience for technology companies that want to look as good as they perform.",
    tag: "Brand · UI/UX",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={18} height={18}>
        <circle cx="10" cy="7" r="3.5" />
        <path d="M3 18C3 14.7 6.1 12 10 12C13.9 12 17 14.7 17 18" strokeLinecap="round" />
      </svg>
    ),
  },
];

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
            marginBottom: 16,
            maxWidth: 720,
          }}
        >
          Everything we build,
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>ships to production.</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          Six practice areas, one standard. Each engagement is scoped to fit
          the problem, not the product.
        </p>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card qcard"
              style={{ padding: 24 }}
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
                {s.desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--fg-subtle)",
                  paddingTop: 16,
                  borderTop: "1px solid var(--border)",
                }}
              >
                {s.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
