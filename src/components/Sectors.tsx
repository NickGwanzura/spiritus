"use client";

const sectors = [
  { num: "01", name: "Financial", em: "Services", desc: "Core banking systems, payment infrastructure, compliance tools, and audit-grade reporting platforms." },
  { num: "02", name: "Government", em: "& Public", desc: "Citizen-facing digital services, regulatory compliance systems, and operational platforms for public institutions." },
  { num: "03", name: "Real", em: "Estate", desc: "Property management, diaspora payment portals, listing platforms, and CRM systems for agencies and developers." },
  { num: "04", name: "Retail", em: "& FMCG", desc: "POS systems, inventory management, brand management portals, and field sales platforms for consumer goods operations." },
  { num: "05", name: "Energy", em: "& Utilities", desc: "Field service management, compliance certification, and operations tracking for energy and utility providers." },
  { num: "06", name: "Health", em: "& Education", desc: "School management systems, patient record platforms, and administrative tools for healthcare and education providers." },
  { num: "07", name: "Logistics", em: "& Trade", desc: "Freight management, customs documentation, supply chain visibility, and cross-border commerce platforms." },
  { num: "08", name: "Startups", em: "& Scale-ups", desc: "Full stack product development, technical co-founding, MVP builds, and growth infrastructure for early-stage ventures." },
];

export default function Sectors() {
  return (
    <div
      id="sectors"
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
        <div className="section-label">Sectors</div>
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
          Who we{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>
            serve
          </em>
        </h2>

        <div
          className="sectors-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            marginTop: 64,
          }}
        >
          {sectors.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                padding: "36px 32px",
                border: "1px solid var(--rule)",
                transition: "border-color 0.25s, background 0.25s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,79,255,0.3)";
                e.currentTarget.style.background = "var(--surface2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "var(--surface)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--silver)",
                  letterSpacing: "0.15em",
                  marginBottom: 20,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 22,
                  fontWeight: 300,
                  color: "var(--text-bright)",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}
              >
                {s.name} <em style={{ fontStyle: "italic" }}>{s.em}</em>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--silver)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
