"use client";

import { useState } from "react";

const fields = [
  { id: "fullname", label: "Full name", type: "text", placeholder: "Your name", required: true },
  { id: "organisation", label: "Organisation", type: "text", placeholder: "Company or institution", required: false },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputStyle: React.CSSProperties = {
    background: "var(--bg-raised)",
    border: "1px solid var(--border-strong)",
    borderRadius: "var(--r)",
    color: "var(--fg)",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    padding: "11px 14px",
    transition: "border-color 0.15s, box-shadow 0.15s",
    width: "100%",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("fullname")?.toString().trim()) newErrors.fullname = "Name is required";
    const email = data.get("email")?.toString().trim() || "";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!data.get("message")?.toString().trim()) newErrors.message = "Please describe your project";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div id="contact">
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1080, margin: "0 auto" }}
      >
        <div className="section-label">Contact</div>
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
          Start a conversation.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 520,
            marginBottom: 64,
          }}
        >
          We take on a limited number of new engagements each quarter. Tell us
          what you are working on.
        </p>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { tag: "Email", val: "create@spiritus.co.zw", href: "mailto:create@spiritus.co.zw" },
              { tag: "Phone", val: "0777 816 368", href: "tel:+2630777816368" },
              { tag: "Headquarters", val: "Harare CBD, Zimbabwe" },
              { tag: "Response time", val: "Within 24 hours" },
            ].map((item, i) => (
              <div key={i} style={{ paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--fg-subtle)",
                    marginBottom: 6,
                  }}
                >
                  {item.tag}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--fg)",
                  }}
                >
                  {item.href ? (
                    <a href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                      {item.val}
                    </a>
                  ) : (
                    item.val
                  )}
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div
              className="qcard"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 32px",
                textAlign: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--cta-text)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--fg)",
                }}
              >
                Message sent
              </h3>
              <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.5 }}>
                We&rsquo;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
              onSubmit={handleSubmit}
              noValidate
            >
              {fields.map((field) => (
                <div
                  key={field.id}
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <label
                    htmlFor={field.id}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--fg)",
                    }}
                  >
                    {field.label}
                    {field.required && <span style={{ color: "var(--accent)" }}> *</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    style={{
                      ...inputStyle,
                      borderColor: errors[field.id] ? "var(--danger)" : undefined,
                    }}
                  />
                  {errors[field.id] && (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--danger)" }}>
                      {errors[field.id]}
                    </span>
                  )}
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--fg)",
                  }}
                >
                  What are you building? <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us what you are working on and what you need."
                  style={{
                    ...inputStyle,
                    minHeight: 120,
                    resize: "vertical",
                    borderColor: errors.message ? "var(--danger)" : undefined,
                  }}
                />
                {errors.message && (
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--danger)" }}>
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="btn-amber form-submit-btn"
                style={{ alignSelf: "flex-start", marginTop: 8 }}
              >
                Send message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
