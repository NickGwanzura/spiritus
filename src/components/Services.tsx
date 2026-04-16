"use client";

const services = [
  {
    title: "SaaS & Platform Development",
    desc: "Full-stack software products built for scale. We design, architect, and ship web-based platforms that handle real-world load, complex workflows, and multi-tenant environments.",
    tag: "Next.js / PostgreSQL / Cloud",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <rect x="2" y="2" width="16" height="16" rx="1" />
        <path d="M6 10L9 13L14 7" />
      </svg>
    ),
  },
  {
    title: "AI & Automation Systems",
    desc: "Workflow automation, intelligent agents, and AI-augmented operations. We integrate large language models and machine learning pipelines into processes that actually need them.",
    tag: "LLM integration / AI workflows",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2V5M10 15V18M2 10H5M15 10H18" />
        <path d="M4.93 4.93L7.05 7.05M12.95 12.95L15.07 15.07M15.07 4.93L12.95 7.05M7.05 12.95L4.93 15.07" />
      </svg>
    ),
  },
  {
    title: "CRM & ERP Solutions",
    desc: "Enterprise resource and customer management systems tailored to how your organisation actually operates, not how a generic vendor assumes you do.",
    tag: "Odoo / Custom builds",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <rect x="2" y="6" width="7" height="12" />
        <rect x="11" y="2" width="7" height="16" />
        <path d="M2 10H9" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    desc: "Connecting disparate technology stacks into coherent, reliable infrastructure. APIs, data pipelines, legacy system bridges, and real-time sync across platforms.",
    tag: "API design / Data pipelines",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <path d="M3 17L7 11L11 14L15 8L18 11" />
        <path d="M3 3V17H18" />
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    desc: "Technology audits, digital transformation roadmaps, and go-to-market strategy for technology products. We advise on where to invest and, just as importantly, where not to.",
    tag: "Roadmaps / GTM strategy",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <path d="M10 2L3 7V18H8V13H12V18H17V7L10 2Z" />
      </svg>
    ),
  },
  {
    title: "Branding & Product Design",
    desc: "Brand identity, UI/UX design, and product experience work for technology companies that want to look as good as they perform.",
    tag: "Brand systems / UI/UX",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <circle cx="10" cy="7" r="4" />
        <path d="M3 18C3 14.686 6.134 12 10 12C13.866 12 17 14.686 17 18" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div
      id="services"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div className="section-label">Services</div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "var(--text-bright)",
            marginBottom: 24,
          }}
        >
          What we <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>build</em>
        </h2>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            marginTop: 64,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  tag,
  icon,
}: {
  title: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--deep)",
        padding: "44px 40px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
        borderTop: "2px solid transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--surface2)";
        e.currentTarget.style.borderTopColor = "var(--blue)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--deep)";
        e.currentTarget.style.borderTopColor = "transparent";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          border: "1px solid rgba(26,79,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          color: "var(--blue-bright)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-bright)",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p style={{ color: "var(--text)", lineHeight: 1.8, marginBottom: 14 }}>
        {desc}
      </p>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--blue-bright)",
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {tag}
        <span
          style={{
            display: "block",
            flex: 1,
            height: 1,
            background: "var(--rule)",
          }}
        />
      </div>
    </div>
  );
}
