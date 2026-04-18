const stats = [
  {
    val: "40+",
    label: "Platforms in production",
    context: "Across banking, logistics, property, retail, and advertising. All running live for real users.",
  },
  {
    val: "5",
    label: "Multi-currency systems",
    context: "Every Zim-facing platform handles USD, ZiG, EcoCash, bank transfer, and cross-border settlement.",
  },
  {
    val: "12+",
    label: "Industries served",
    context: "From regulated financial services to early-stage consumer products. We adapt to each operating context.",
  },
  {
    val: "4",
    label: "Payment rails integrated",
    context: "EcoCash, bank transfer, card, and USD cash. Built for how Zimbabwean organisations actually move money.",
  },
  {
    val: "100%",
    label: "Client retention",
    context: "Every client we've shipped a system to is still operating that system with us today.",
  },
  {
    val: "0",
    label: "Platforms rewritten",
    context: "Every system we've deployed is still running on its original architecture. Built to last means built to last.",
  },
];

export default function Manifesto() {
  return (
    <div
      style={{
        background: "var(--bg-raised)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="manifesto-inner"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "120px 56px",
        }}
      >
        <div className="section-label">By the numbers</div>
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
          Real systems.
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>Real production.</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 600,
            marginBottom: 56,
          }}
        >
          Every number below represents software we&rsquo;ve shipped and
          continue to maintain, for real organisations, with real users,
          across real operating conditions.
        </p>

        <div
          className="manifesto-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="qcard"
              style={{ padding: "28px 24px", background: "var(--bg)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 44,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  marginBottom: 8,
                }}
              >
                {s.label}
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "var(--fg-muted)",
                  margin: 0,
                }}
              >
                {s.context}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(18px, 2.2vw, 22px)",
            fontWeight: 500,
            letterSpacing: "-0.015em",
            color: "var(--fg)",
            lineHeight: 1.45,
            marginTop: 64,
            paddingLeft: 20,
            borderLeft: "2px solid var(--accent)",
            maxWidth: 720,
          }}
        >
          The right system, built properly, does not just solve a problem. It
          changes what is possible.
        </blockquote>
      </div>
    </div>
  );
}
