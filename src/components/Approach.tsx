const steps = [
  {
    num: "01",
    title: "Understand the real problem",
    desc: "Most briefs describe symptoms, not causes. We spend the first phase pulling the problem apart before writing a single line of code. You get better outcomes when you know exactly what you are solving.",
  },
  {
    num: "02",
    title: "Design for actual use",
    desc: "We build for the person sitting at the keyboard at 8am on a Monday, not the person who signed the contract. Systems that fit real workflows get used. Systems that do not, get abandoned.",
  },
  {
    num: "03",
    title: "Ship with precision",
    desc: "We deliver against specifications. Timeline commitments are real commitments. If something changes, we tell you early, not after the deadline passes.",
  },
  {
    num: "04",
    title: "Stay for the long run",
    desc: "We do not hand over a system and disappear. The environments our clients operate in keep changing, and we keep pace with them. Our goal is a relationship, not a transaction.",
  },
];

export default function Approach() {
  return (
    <div id="approach" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">How we work</div>
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
          The Spiritus method.
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
          Four phases. One standard. Applied to every engagement, regardless
          of scope, industry, or team size.
        </p>

        <div className="reveal-stagger" style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="approach-item reveal-child"
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 1.5fr",
                gap: 32,
                padding: "28px 0",
                borderTop: "1px solid var(--border)",
                alignItems: "start",
                ...(i === steps.length - 1
                  ? { borderBottom: "1px solid var(--border)" }
                  : {}),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--accent)",
                  paddingTop: 4,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  lineHeight: 1.3,
                  paddingTop: 2,
                }}
              >
                {step.title}
              </div>
              <p
                className="approach-desc"
                style={{ color: "var(--fg-muted)", lineHeight: 1.6, fontSize: 14, margin: 0 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
