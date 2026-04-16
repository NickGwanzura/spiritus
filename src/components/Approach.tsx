const steps = [
  {
    num: "01",
    title: (
      <>
        Understand <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>the real problem</em>
      </>
    ),
    desc: "Most briefs describe symptoms, not causes. We spend the first phase pulling the problem apart before writing a single line of code. You get better outcomes when you know exactly what you are solving.",
  },
  {
    num: "02",
    title: (
      <>
        Design for <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>actual use</em>
      </>
    ),
    desc: "We build for the person sitting at the keyboard at 8am on a Monday, not the person who signed the contract. Systems that fit real workflows get used. Systems that do not, get abandoned.",
  },
  {
    num: "03",
    title: (
      <>
        Ship with <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>precision</em>
      </>
    ),
    desc: "We deliver against specifications. Timeline commitments are real commitments. If something changes, we tell you early, not after the deadline passes.",
  },
  {
    num: "04",
    title: (
      <>
        Stay for the <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>long run</em>
      </>
    ),
    desc: "We do not hand over a system and disappear. The software environments our clients operate in keep changing, and we keep pace with them. Our goal is a relationship, not a transaction.",
  },
];

export default function Approach() {
  return (
    <div id="approach">
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div className="section-label">How we work</div>
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
          The{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>
            Spiritus
          </em>{" "}
          method
        </h2>

        <div style={{ marginTop: 64, display: "flex", flexDirection: "column" as const }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="approach-item"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap: 48,
                padding: "44px 0",
                borderTop: "1px solid var(--rule)",
                alignItems: "start",
                ...(i === steps.length - 1
                  ? { borderBottom: "1px solid var(--rule)" }
                  : {}),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 52,
                  fontWeight: 300,
                  color: "rgba(26,79,255,0.2)",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 26,
                  fontWeight: 300,
                  color: "var(--text-bright)",
                  lineHeight: 1.2,
                  paddingTop: 6,
                }}
              >
                {step.title}
              </div>
              <p
                className="approach-desc"
                style={{ color: "var(--text)", lineHeight: 1.8, margin: 0 }}
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
