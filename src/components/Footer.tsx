import Link from "next/link";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/sectors", label: "Sectors" },
  { href: "/blog", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/saas-platforms", label: "SaaS & Platforms" },
  { href: "/services/ai-automation", label: "AI & Automation" },
  { href: "/services/crm-erp", label: "CRM & ERP" },
  { href: "/services/systems-integration", label: "Systems Integration" },
  { href: "/services/strategy-design", label: "Strategy & Design" },
];

const columnLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 10.5,
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--fg-subtle)",
  marginBottom: 18,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  color: "var(--fg-muted)",
  textDecoration: "none",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer
      className="footer-wrap"
      style={{
        background: "var(--bg-sunken)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 300px at 90% 0%, var(--accent-subtle), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top CTA strip */}
      <div
        className="footer-cta"
        style={{
          position: "relative",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "56px 56px 40px",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1.2fr auto",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 10,
            }}
          >
            Based in Harare, shipping everywhere
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
            Custom software for Zimbabwean operations that cannot afford to pause.
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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
          <Link href="/work" className="btn-ghost">
            See our work
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div
        className="footer-inner"
        style={{
          position: "relative",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "56px 56px 32px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1.2fr 1.2fr",
          gap: 48,
        }}
      >
        {/* Brand column */}
        <div>
          <Link
            href="/"
            aria-label="Spiritus Systems Home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              marginBottom: 20,
              color: "var(--fg)",
            }}
          >
            <img
              src="/spiritus-logo-light.svg"
              alt="Spiritus Systems"
              width={161}
              height={48}
              style={{ height: 48, width: "auto", display: "block" }}
            />
          </Link>
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: "var(--fg-subtle)",
              maxWidth: 320,
              margin: 0,
            }}
          >
            Zimbabwe&rsquo;s custom software engineering company. We design,
            build, and deploy intelligent systems for enterprises, government,
            SMEs, and startups across the country.
          </p>

          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 20,
              padding: "6px 12px",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-pill)",
              background: "var(--bg-raised)",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 3px color-mix(in srgb, #22c55e 22%, transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.02em",
                color: "var(--fg-muted)",
              }}
            >
              Accepting new engagements
            </span>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <a
              href="https://wa.me/263777816368"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social"
              style={socialBtn}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 6L0 24l6.2-1.6c1.8.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 22c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.95 9.95 0 0 1 2 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.5 10-10 10z" />
                <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.2-.2-.3-.2-.5-.3z" />
              </svg>
            </a>
            <a
              href="mailto:create@spiritus.co.zw"
              aria-label="Email"
              className="footer-social"
              style={socialBtn}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
                <path d="M2 4L8 9L14 4" />
              </svg>
            </a>
            <a
              href="tel:+263777816368"
              aria-label="Phone"
              className="footer-social"
              style={socialBtn}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 2H6L7.5 5.5L5.5 6.5C6.5 8.5 7.5 9.5 9.5 10.5L10.5 8.5L14 10V13C14 13.5 13.5 14 13 14C7 14 2 9 2 3C2 2.5 2.5 2 3 2Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={columnLabel}>Navigate</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link" style={linkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div style={columnLabel}>Services</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link" style={linkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={columnLabel}>Get in touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.04em",
                  color: "var(--fg-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Email
              </div>
              <a href="mailto:create@spiritus.co.zw" className="footer-link" style={linkStyle}>
                create@spiritus.co.zw
              </a>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.04em",
                  color: "var(--fg-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Phone / WhatsApp
              </div>
              <a href="tel:+263777816368" className="footer-link" style={linkStyle}>
                +263 777 816 368
              </a>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.04em",
                  color: "var(--fg-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Studio
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                Harare CBD
                <br />
                Zimbabwe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          position: "relative",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "20px 56px 28px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "var(--fg-subtle)",
            flexWrap: "wrap",
          }}
        >
          <span>&copy; {new Date().getFullYear()} Spiritus Systems</span>
          <span style={{ color: "var(--fg-dim)" }}>·</span>
          <span>All rights reserved</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "var(--fg-dim)",
          }}
        >
          <span>Built with Next.js in Harare</span>
          <span style={{ color: "var(--fg-dim)" }}>·</span>
          <span>v2026.04</span>
        </div>
      </div>
    </footer>
  );
}

const socialBtn: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: "var(--r-sm)",
  border: "1px solid var(--border)",
  background: "var(--bg-raised)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--fg-muted)",
  transition:
    "color 0.15s, border-color 0.15s, background 0.15s, transform 0.15s",
  textDecoration: "none",
};
