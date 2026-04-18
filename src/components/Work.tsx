"use client";

const projects = [
  {
    num: "01",
    client: "Dreambox Advertising",
    title: "Billboard CRM",
    url: "https://crm.dreamboxadvertising.co.zw/",
    scope: [
      "Billboard inventory management",
      "Client & campaign tracking",
      "Booking & scheduling system",
      "Revenue reporting & analytics",
    ],
    desc: "A custom CRM for Zimbabwe's leading billboard advertising company. Manages billboard inventory across multiple locations, tracks client campaigns booking-through-completion, and reports real-time revenue and occupancy across the outdoor advertising portfolio.",
    tag: "CRM · Advertising",
  },
  {
    num: "02",
    client: "Splash Air",
    title: "HVAC Services Platform",
    url: "https://splashaircrmzw.site/",
    scope: [
      "Job scheduling & dispatch",
      "Technician management",
      "Client service history",
      "Invoicing & payment tracking",
    ],
    desc: "A full-service operations platform for an HVAC installation and maintenance company. Handles the complete service lifecycle, from client enquiry through job completion, including dispatch, scheduling, service history, and integrated invoicing.",
    tag: "Operations · HVAC",
  },
  {
    num: "03",
    client: "Affinity Logistics",
    title: "UK to Zimbabwe Shipping CRM",
    url: "https://affinitylogistics.site/",
    scope: [
      "Shipment tracking & status updates",
      "Cross-border documentation",
      "Client cargo management",
      "Route & consignment scheduling",
    ],
    desc: "A logistics CRM purpose-built for cross-border shipping operations between the UK and Zimbabwe. Tracks shipments end-to-end, manages customs documentation, and provides real-time status updates across the full UK to Zim corridor.",
    tag: "Logistics · Shipping",
  },
  {
    num: "04",
    client: "EasyRentals",
    title: "Property Management ERP",
    url: "https://easyrentalszw.online/",
    scope: [
      "Multi-property portfolio management",
      "Offline payment tracking (cash, EcoCash, bank)",
      "Multi-currency support (USD, ZiG)",
      "Landlord portal with scoped access",
    ],
    desc: "A cloud-based property management ERP for Zimbabwe's rental market. Handles shopping malls, boarding houses, residential estates, and individual homes through a unified workspace with role-based access and multi-currency payment support.",
    tag: "ERP · Real Estate",
  },
  {
    num: "05",
    client: "Cansan Solutions",
    title: "Online Shop & CRM Backend",
    url: "https://cansansolutions.shop/",
    scope: [
      "E-commerce storefront with product catalog",
      "Multi-payment support (USD, EcoCash, bank transfer)",
      "Admin CRM for orders, inventory & clients",
      "Bulk pricing & corporate orders",
    ],
    desc: "A full-stack e-commerce platform and CRM backend for a Zimbabwean technology retailer. Public storefront handles listings, buying guides, and local delivery, while the admin CRM manages inventory, orders, clients, and supplier procurement with multi-currency support.",
    tag: "E-commerce · Retail Tech",
  },
];

export default function Work() {
  return (
    <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">Selected work</div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 16,
          }}
        >
          Systems we&rsquo;ve shipped.
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
          A selection of platforms we have designed, built, and deployed for
          clients across advertising, logistics, property, and field services.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="qcard"
              style={{
                padding: "32px 28px",
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                gap: 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent)",
                  paddingTop: 4,
                }}
              >
                {project.num}
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                    }}
                  >
                    {project.client}
                  </span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--fg-dim)" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-subtle)",
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    lineHeight: 1.2,
                    marginBottom: 12,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--fg-muted)",
                    lineHeight: 1.6,
                    fontSize: 14,
                    marginBottom: 20,
                    maxWidth: 640,
                  }}
                >
                  {project.desc}
                </p>

                <div
                  className="work-scope-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px 24px",
                    marginBottom: 20,
                  }}
                >
                  {project.scope.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        fontSize: 13,
                        color: "var(--fg-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--accent)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                >
                  View live platform
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
