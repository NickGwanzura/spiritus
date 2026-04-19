import Link from "next/link";
import { faqSections as sections } from "@/data/faq";

export default function FAQ() {
  return (
    <div id="faq" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 900, margin: "0 auto" }}
      >
        <div className="section-label">FAQ</div>
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
          Frequently asked
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>questions.</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 560,
            marginBottom: 56,
          }}
        >
          What clients usually ask us before signing a contract. If your
          question is not here, send us a note. We respond within 24 hours.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {sections.map((section) => (
            <div key={section.title}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                {section.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{
                      borderTop: "1px solid var(--border)",
                      ...(i === section.items.length - 1
                        ? { borderBottom: "1px solid var(--border)" }
                        : {}),
                    }}
                  >
                    <summary
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "18px 4px",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        color: "var(--fg)",
                        transition: "color 0.15s",
                      }}
                    >
                      {item.q}
                      <svg
                        className="faq-chevron"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{
                          flexShrink: 0,
                          color: "var(--fg-subtle)",
                          transition: "transform 0.2s ease, color 0.15s",
                        }}
                      >
                        <path
                          d="M3 5L7 9L11 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <div
                      style={{
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "var(--fg-muted)",
                        padding: "0 48px 20px 4px",
                      }}
                    >
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="qcard"
          style={{
            marginTop: 64,
            padding: "32px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--fg)",
                marginBottom: 4,
              }}
            >
              Still have a question?
            </div>
            <div style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              Send us a note. We respond within 24 hours.
            </div>
          </div>
          <Link href="/contact" className="btn-amber">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
