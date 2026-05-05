import Link from "next/link";
import { faqSections as sections } from "@/data/faq";

export default function FAQ() {
  const totalQuestions = sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <div
      id="faq"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Soft ambient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(600px 280px at 85% 10%, var(--accent-subtle), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-wrap"
        style={{
          position: "relative",
          padding: "120px 56px",
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 8,
          }}
        >
          <div className="section-label">FAQ</div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--fg-dim)",
              letterSpacing: "0.04em",
            }}
          >
            {totalQuestions.toString().padStart(2, "0")} questions
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 16,
          }}
        >
          Frequently asked
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>questions.</span>
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 620,
            marginBottom: 56,
          }}
        >
          What clients usually ask us before signing a contract. If your
          question is not here, send us a note. We respond within 24 hours.
        </p>

        {/* Sections */}
        <div
          className="reveal-stagger"
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {sections.map((section, sectionIndex) => (
            <section
              key={section.title}
              className="faq-section reveal-child"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg, 16px)",
                padding: "28px 28px 8px",
                overflow: "hidden",
              }}
            >
              {/* Section header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "var(--r-sm)",
                    background: "var(--accent-muted)",
                    color: "var(--accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {String(sectionIndex + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {section.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    color: "var(--fg-dim)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {section.items.length} question{section.items.length === 1 ? "" : "s"}
                </span>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <summary
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "20px 4px",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        color: "var(--fg)",
                        transition: "color 0.15s",
                      }}
                    >
                      <span style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <span
                          aria-hidden
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10.5,
                            color: "var(--fg-dim)",
                            paddingTop: 3,
                            letterSpacing: "0.04em",
                            minWidth: 28,
                          }}
                        >
                          Q{String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item.q}</span>
                      </span>
                      <span
                        className="faq-plus"
                        aria-hidden
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          border: "1px solid var(--border-strong)",
                          color: "var(--fg-muted)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "transform 0.25s var(--ease), background 0.2s, color 0.2s, border-color 0.2s",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <path d="M6 2V10M2 6H10" />
                        </svg>
                      </span>
                    </summary>
                    <div
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.7,
                        color: "var(--fg-muted)",
                        padding: "0 56px 22px 46px",
                      }}
                    >
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="qcard"
          style={{
            marginTop: 56,
            padding: 0,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "stretch",
            borderRadius: "var(--r-lg, 16px)",
            border: "1px solid var(--border)",
            background:
              "linear-gradient(120deg, var(--bg-raised) 0%, var(--accent-subtle) 120%)",
          }}
        >
          <div
            style={{
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
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
              Still have a question?
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: "var(--fg)",
                lineHeight: 1.25,
              }}
            >
              Ask us directly, not a chatbot.
            </div>
            <div style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 520 }}>
              Send a short note describing what you want to build. We reply
              within 24 hours with a first-read on scope, timeline, and the
              right engagement shape.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 32px",
              borderLeft: "1px solid var(--border)",
              background: "var(--bg-raised)",
            }}
          >
            <Link href="/contact" className="btn-amber">
              Start a conversation
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
    </div>
  );
}
