const values = [
  {
    idx: "01",
    title: "Precision first",
    desc: "We do not guess. We measure, model, and verify before we ship. Good intentions do not compensate for sloppy execution.",
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
    <div id="about">
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div className="section-label">About</div>
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
          Built to think.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>
            Built to last.
          </em>
        </h2>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "start",
            marginTop: 60,
          }}
        >
          <div>
            {[
              "Spiritus Systems is a global technology company that designs, builds, and deploys intelligent systems for enterprises, governments, SMEs, and startups. We work across software, AI, engineering integration, and business strategy.",
              "We started with a simple conviction: technology should actually solve the problem in front of you, not the problem someone else had three years ago. That belief shapes every system we build and every client relationship we commit to.",
              "Our teams operate across multiple time zones with one common standard: precision. Every line of code, every system architecture, every strategic recommendation we put forward has been stress-tested against real operating conditions.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "var(--silver-light)",
                  marginBottom: 14,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: 20,
                  padding: "28px 0",
                  borderTop: "1px solid var(--rule)",
                  alignItems: "start",
                  ...(i === values.length - 1
                    ? { borderBottom: "1px solid var(--rule)" }
                    : {}),
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--blue-bright)",
                    paddingTop: 2,
                  }}
                >
                  {v.idx}
                </div>
                <div>
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
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text)", lineHeight: 1.8 }}>
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
