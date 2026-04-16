"use client";

export default function Contact() {
  const inputStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--rule)",
    color: "var(--text-bright)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    padding: "14px 18px",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };

  return (
    <div id="contact">
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div className="section-label">Contact</div>
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
          Start a{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>
            conversation
          </em>
        </h2>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "start",
            marginTop: 64,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <p
              style={{
                fontSize: 17,
                color: "var(--silver-light)",
                lineHeight: 1.85,
              }}
            >
              We take on a limited number of new engagements each quarter. If
              you have a real problem that needs a precise solution, we want to
              hear about it.
            </p>
            {[
              { tag: "Email", val: "hello@spiritussystems.com" },
              { tag: "Headquarters", val: "Harare, Zimbabwe" },
              { tag: "Operations", val: "Global" },
              { tag: "Response time", val: "Within 24 hours" },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--silver)",
                    marginBottom: 6,
                  }}
                >
                  {item.tag}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 300,
                    color: "var(--text-bright)",
                  }}
                >
                  {item.val}
                </div>
              </div>
            ))}
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Full name", type: "text", placeholder: "Your name" },
              {
                label: "Organisation",
                type: "text",
                placeholder: "Company or institution",
              },
              {
                label: "Email",
                type: "email",
                placeholder: "you@company.com",
              },
            ].map((field, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--silver)",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(26,79,255,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)")
                  }
                />
              </div>
            ))}
            <div
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <label
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--silver)",
                }}
              >
                What are you building?
              </label>
              <textarea
                placeholder="Tell us what you are working on and what you need."
                style={{ ...inputStyle, height: 120, resize: "none" }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(26,79,255,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.07)")
                }
              />
            </div>
            <button
              type="submit"
              style={{
                background: "var(--blue)",
                color: "#fff",
                border: "none",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 36px",
                cursor: "none",
                alignSelf: "flex-start",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--blue-bright)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--blue)")
              }
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
