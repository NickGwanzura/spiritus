import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    idx: "01",
    title: "Precision first",
    desc: "We measure, model, and verify before we ship. Good intentions do not compensate for sloppy execution, and nothing we hand over is ever a draft.",
  },
  {
    idx: "02",
    title: "Systems thinking",
    desc: "Every component we build is aware of what surrounds it. We design for integration, not isolation, so your operation keeps compounding as it grows.",
  },
  {
    idx: "03",
    title: "Honest counsel",
    desc: "We tell clients what they need to hear. The technology that wins your brief is rarely the most expensive option, and we will say so out loud.",
  },
  {
    idx: "04",
    title: "Long view",
    desc: "We build things that scale. Short-term patches and technical debt cost more over time than getting it right the first time, every time.",
  },
];

const localPrinciples = [
  {
    label: "Offline-first by default",
    body: "Load-shedding and patchy connectivity are assumptions, not edge cases. Every platform keeps working when the lights or the network drop.",
  },
  {
    label: "Multi-currency native",
    body: "USD, ZiG, cash, EcoCash, and bank transfer are all first-class. We never bolt local payment reality on at the end of a project.",
  },
  {
    label: "Operator-led design",
    body: "We build for the person sitting at the keyboard on a Monday morning, not the person who signed the procurement document.",
  },
  {
    label: "Own your code, own your data",
    body: "Every engagement hands over full source, infrastructure access, and documentation. No lock-in, no black boxes, no hostage situations.",
  },
];

const credentials = [
  "Based in Harare CBD",
  "Delivering across Zimbabwe",
  "Diaspora-ready engagements",
  "Public, private, and NGO sectors",
];

export default function About() {
  return (
    <div id="about">
      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px 320px at 80% 0%, var(--accent-subtle), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="section-responsive"
          style={{
            position: "relative",
            padding: "96px 56px 72px",
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          <ScrollReveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              <span
                aria-hidden
                style={{ width: 28, height: 1, background: "var(--accent)" }}
              />
              About Spiritus Systems
            </div>
            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                color: "var(--fg)",
                marginBottom: 20,
                maxWidth: 860,
              }}
            >
              Built to think.
              <br />
              <span style={{ color: "var(--fg-subtle)" }}>
                Built to last.
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--fg-muted)",
                maxWidth: 720,
                marginBottom: 32,
              }}
            >
              Spiritus Systems is a Zimbabwean technology company that designs,
              builds, and deploys intelligent systems for enterprises,
              government institutions, SMEs, and startups across the country.
              We work across software, AI, engineering integration, and
              business strategy.
            </p>

            {/* Credentials row */}
            <div
              className="about-creds"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                maxWidth: 820,
              }}
            >
              {credentials.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    color: "var(--fg-muted)",
                    padding: "6px 12px",
                    borderRadius: "var(--r-pill)",
                    border: "1px solid var(--border)",
                    background: "var(--bg-raised)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="section-wrap about-story"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "96px 56px",
            display: "grid",
            gridTemplateColumns: "minmax(200px, 320px) 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <ScrollReveal>
            <div className="section-label" style={{ marginBottom: 20 }}>
              Our story
            </div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(24px, 2.8vw, 34px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Why we exist.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                  margin: 0,
                }}
              >
                We started with a simple conviction: technology should actually
                solve the problem in front of you, not the problem someone else
                had three years ago in a different market. That belief shapes
                every system we build and every client relationship we commit
                to.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                  margin: 0,
                }}
              >
                Our Harare team operates to a single standard: precision. Every
                line of code, every system architecture, and every strategic
                recommendation is stress-tested against real Zimbabwean
                operating conditions, from load-shedding and offline-first
                requirements to multi-currency flows and local payment rails.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "var(--fg-muted)",
                  margin: 0,
                }}
              >
                We are still a small team, and that is by choice. Every
                engagement gets senior attention from the first call through to
                handover and beyond. We would rather do fewer things at the
                right depth than many things at the average.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: "var(--bg-raised)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="section-wrap"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "96px 56px",
          }}
        >
          <ScrollReveal>
            <div className="section-label">Values</div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(28px, 3.4vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--fg)",
                margin: "14px 0 12px",
              }}
            >
              Four non-negotiables.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--fg-muted)",
                maxWidth: 620,
                marginBottom: 48,
              }}
            >
              Every engagement we run, every platform we ship, and every
              recommendation we make is measured against the same four
              standards.
            </p>
          </ScrollReveal>

          <div
            className="about-values-grid reveal-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {values.map((v) => (
              <div
                key={v.idx}
                className="about-value-card reveal-child qcard"
                style={{
                  padding: "28px 26px",
                  borderRadius: "var(--r-lg, 16px)",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "var(--r-sm)",
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {v.idx}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                      color: "var(--fg)",
                      margin: 0,
                    }}
                  >
                    {v.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "var(--fg-muted)",
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 260px at 15% 100%, var(--accent-subtle), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="section-wrap about-local"
          style={{
            position: "relative",
            maxWidth: 1080,
            margin: "0 auto",
            padding: "96px 56px",
            display: "grid",
            gridTemplateColumns: "minmax(220px, 380px) 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <ScrollReveal>
            <div className="section-label" style={{ marginBottom: 16 }}>
              Local context
            </div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "var(--fg)",
                margin: "0 0 14px",
              }}
            >
              Built for the operating
              <br />
              <span style={{ color: "var(--fg-subtle)" }}>conditions here.</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--fg-muted)",
                margin: 0,
              }}
            >
              Zimbabwean conditions shape every engineering decision we make.
              These are the defaults, not the special cases.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
              className="about-local-grid"
            >
              {localPrinciples.map((p) => (
                <div
                  key={p.label}
                  style={{
                    padding: "22px 22px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--r-sm)",
                    background: "var(--bg-raised)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "var(--accent-muted)",
                        color: "var(--accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M2.5 6.5L5 9L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--fg)",
                        margin: 0,
                      }}
                    >
                      {p.label}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "var(--fg-muted)",
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "var(--bg)" }}
      >
        <div
          className="section-wrap"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "72px 56px 96px",
          }}
        >
          <div
            className="qcard"
            style={{
              padding: 0,
              overflow: "hidden",
              borderRadius: "var(--r-lg, 16px)",
              border: "1px solid var(--border)",
              background:
                "linear-gradient(120deg, var(--bg-raised) 0%, var(--accent-subtle) 120%)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Work with us
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  lineHeight: 1.2,
                  maxWidth: 620,
                }}
              >
                Have a problem worth solving properly?
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--fg-muted)",
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                Send a short brief on what you want built, who it is for, and
                what it needs to integrate with. We reply within 24 hours with
                a first-read on scope and engagement shape.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 36px",
                borderLeft: "1px solid var(--border)",
                background: "var(--bg-raised)",
              }}
            >
              <Link href="/contact" className="btn-amber">
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7H11M7 3L11 7L7 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
