type IconKey =
  | "finance"
  | "government"
  | "realestate"
  | "retail"
  | "energy"
  | "health"
  | "logistics"
  | "startups";

const sectors: {
  num: string;
  name: string;
  desc: string;
  icon: IconKey;
}[] = [
  {
    num: "01",
    name: "Financial Services",
    desc: "Core banking, multi-currency payment rails (USD, ZiG, EcoCash), compliance tools, and audit-grade reporting for Zimbabwean institutions.",
    icon: "finance",
  },
  {
    num: "02",
    name: "Government & Public",
    desc: "Citizen-facing digital services, regulatory systems, and public-sector operational platforms for Zimbabwean ministries and parastatals.",
    icon: "government",
  },
  {
    num: "03",
    name: "Real Estate",
    desc: "Property management, diaspora-to-Zim payment portals, listing platforms, and CRM systems for local agencies and developers.",
    icon: "realestate",
  },
  {
    num: "04",
    name: "Retail & FMCG",
    desc: "POS systems, inventory management, brand portals, and field sales platforms for consumer goods operations across Zimbabwe.",
    icon: "retail",
  },
  {
    num: "05",
    name: "Energy & Utilities",
    desc: "Field service management, compliance certification, and operations tracking for local energy and utility providers.",
    icon: "energy",
  },
  {
    num: "06",
    name: "Health & Education",
    desc: "School management, patient records, and administrative tools for Zimbabwean healthcare and education institutions.",
    icon: "health",
  },
  {
    num: "07",
    name: "Logistics & Trade",
    desc: "Freight management, customs documentation, and cross-border commerce platforms for Zim-based logistics operators.",
    icon: "logistics",
  },
  {
    num: "08",
    name: "Startups & Scale-ups",
    desc: "Full-stack product development, technical co-founding, and growth infrastructure for early-stage Zimbabwean ventures.",
    icon: "startups",
  },
];

function SectorIcon({ name }: { name: IconKey }) {
  const stroke = "currentColor";
  const sw = 1.5;
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "finance":
      return (
        <svg {...common}>
          <path d="M3 8L10 4L17 8" />
          <path d="M5 8V15M9 8V15M11 8V15M15 8V15" />
          <path d="M3 16H17" />
        </svg>
      );
    case "government":
      return (
        <svg {...common}>
          <path d="M3 17H17" />
          <path d="M5 17V8M9 17V8M11 17V8M15 17V8" />
          <path d="M3 8H17" />
          <path d="M10 4V7" />
          <path d="M10 4L13 5L10 6" />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path d="M3 9L10 3L17 9V16C17 16.5 16.5 17 16 17H4C3.5 17 3 16.5 3 16V9Z" />
          <path d="M8 17V12H12V17" />
        </svg>
      );
    case "retail":
      return (
        <svg {...common}>
          <path d="M5 6H15L16 17H4L5 6Z" />
          <path d="M7 6V5C7 3.5 8 2.5 10 2.5C12 2.5 13 3.5 13 5V6" />
        </svg>
      );
    case "energy":
      return (
        <svg {...common}>
          <path d="M11 2L4 11H9L8 18L16 9H11L11 2Z" />
        </svg>
      );
    case "health":
      return (
        <svg {...common}>
          <path d="M3 10H6L8 5L12 15L14 10H17" />
        </svg>
      );
    case "logistics":
      return (
        <svg {...common}>
          <path d="M2 6H12V14H2V6Z" />
          <path d="M12 9H16L18 11V14H12" />
          <circle cx="6" cy="15.5" r="1.5" />
          <circle cx="14.5" cy="15.5" r="1.5" />
        </svg>
      );
    case "startups":
      return (
        <svg {...common}>
          <path d="M10 2C13 5 14 8 14 11L10 14L6 11C6 8 7 5 10 2Z" />
          <circle cx="10" cy="8" r="1.5" />
          <path d="M6 14L4 18M14 14L16 18M10 14V18" />
        </svg>
      );
  }
}

export default function Sectors() {
  return (
    <div
      id="sectors"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">Sectors</div>
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
          Industries we serve in Zimbabwe.
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
          From regulated enterprise environments to early-stage ventures, we
          adapt to the operating conditions of the Zimbabwean market, not the
          other way around.
        </p>

        <div
          className="sectors-grid reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {sectors.map((s, i) => (
            <div key={i} className="sector-card qcard reveal-child">
              <span aria-hidden className="sector-stroke" />
              <div className="sector-card-inner">
                <div className="sector-card-top">
                  <span className="sector-icon">
                    <SectorIcon name={s.icon} />
                  </span>
                  <span className="sector-num">{s.num}</span>
                </div>
                <div className="sector-name">{s.name}</div>
                <p className="sector-desc">{s.desc}</p>
                <span aria-hidden className="sector-arrow">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7H11M7 3L11 7L7 11" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
