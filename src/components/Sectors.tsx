const sectors = [
  { num: "01", name: "Financial Services", desc: "Core banking, multi-currency payment rails (USD, ZiG, EcoCash), compliance tools, and audit-grade reporting for Zimbabwean institutions." },
  { num: "02", name: "Government & Public", desc: "Citizen-facing digital services, regulatory systems, and public-sector operational platforms for Zimbabwean ministries and parastatals." },
  { num: "03", name: "Real Estate", desc: "Property management, diaspora-to-Zim payment portals, listing platforms, and CRM systems for local agencies and developers." },
  { num: "04", name: "Retail & FMCG", desc: "POS systems, inventory management, brand portals, and field sales platforms for consumer goods operations across Zimbabwe." },
  { num: "05", name: "Energy & Utilities", desc: "Field service management, compliance certification, and operations tracking for local energy and utility providers." },
  { num: "06", name: "Health & Education", desc: "School management, patient records, and administrative tools for Zimbabwean healthcare and education institutions." },
  { num: "07", name: "Logistics & Trade", desc: "Freight management, customs documentation, and cross-border commerce platforms for Zim-based logistics operators." },
  { num: "08", name: "Startups & Scale-ups", desc: "Full-stack product development, technical co-founding, and growth infrastructure for early-stage Zimbabwean ventures." },
];

export default function Sectors() {
  return (
    <div id="sectors" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
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
          className="sectors-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {sectors.map((s, i) => (
            <div
              key={i}
              className="sector-card qcard"
              style={{ padding: 20 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--fg-subtle)",
                  marginBottom: 12,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  marginBottom: 8,
                }}
              >
                {s.name}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--fg-muted)",
                  lineHeight: 1.55,
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
