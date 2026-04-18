const values = [
  {
    idx: "01",
    title: "Precision first",
    desc: "We measure, model, and verify before we ship. Good intentions do not compensate for sloppy execution.",
  },
  {
    idx: "02",
    title: "Systems thinking",
    desc: "Every component we build is aware of what surrounds it. We design for integration, not isolation.",
  },
  {
    idx: "03",
    title: "Honest counsel",
    desc: "We tell clients what they need to hear. The technology that wins your brief is not always the most expensive one.",
  },
  {
    idx: "04",
    title: "Long view",
    desc: "We build things that scale. Short-term patches and technical debt cost more over time than getting it right the first time.",
  },
];

export default function About() {
  return (
    <div id="about" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">About</div>
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
          Built to think.
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>Built to last.</span>
        </h2>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            marginTop: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "Spiritus Systems is a Zimbabwean technology company that designs, builds, and deploys intelligent systems for enterprises, government institutions, SMEs, and startups across Zimbabwe. We work across software, AI, engineering integration, and business strategy.",
              "We started with a simple conviction: technology should actually solve the problem in front of you, not the problem someone else had three years ago in a different market. That belief shapes every system we build and every client relationship we commit to.",
              "Our Harare team operates to a single standard: precision. Every line of code, every system architecture, every strategic recommendation has been stress-tested against real Zimbabwean operating conditions: load-shedding, offline-first requirements, multi-currency flows, and local payment rails.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: 16,
                  padding: "20px 0",
                  borderTop: "1px solid var(--border)",
                  alignItems: "start",
                  ...(i === values.length - 1
                    ? { borderBottom: "1px solid var(--border)" }
                    : {}),
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    paddingTop: 3,
                  }}
                >
                  {v.idx}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--fg)",
                      marginBottom: 6,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--fg-muted)", lineHeight: 1.6, fontSize: 14 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
