import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/sectors", label: "Sectors" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="footer-wrap"
      style={{
        background: "var(--bg-sunken)",
        borderTop: "1px solid var(--border)",
        padding: "56px 56px 32px",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 40,
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
              marginBottom: 16,
              height: 26,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--fg)",
              textTransform: "uppercase",
            }}
          >
            SPIRITUS
          </Link>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--fg-subtle)",
              maxWidth: 260,
            }}
          >
            Zimbabwe&rsquo;s SaaS engineering company. We design, build, and
            deploy intelligent systems for enterprises, government, SMEs, and
            startups across Zimbabwe.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <a
              href="https://wa.me/263777816368"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social"
              style={{
                width: 32,
                height: 32,
                borderRadius: "var(--r-sm)",
                border: "1px solid var(--border)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-muted)",
                transition: "color 0.15s, border-color 0.15s, background 0.15s, transform 0.15s",
              }}
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
              style={{
                width: 32,
                height: 32,
                borderRadius: "var(--r-sm)",
                border: "1px solid var(--border)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-muted)",
                transition: "color 0.15s, border-color 0.15s, background 0.15s, transform 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
                <path d="M2 4L8 9L14 4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
              marginBottom: 16,
            }}
          >
            Navigation
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="footer-link"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--fg-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
              marginBottom: 16,
            }}
          >
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="mailto:create@spiritus.co.zw"
              className="footer-link"
              style={{ fontSize: 13, color: "var(--fg-muted)", textDecoration: "none" }}
            >
              create@spiritus.co.zw
            </a>
            <a
              href="tel:+2630777816368"
              className="footer-link"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", textDecoration: "none" }}
            >
              0777 816 368
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
              marginBottom: 16,
            }}
          >
            Location
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--fg-muted)",
              lineHeight: 1.6,
            }}
          >
            Harare CBD
            <br />
            Zimbabwe
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              color: "var(--fg-subtle)",
              marginTop: 10,
            }}
          >
            Zimbabwe-only
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          borderTop: "1px solid var(--border)",
          marginTop: 48,
          paddingTop: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "var(--fg-subtle)",
          }}
        >
          &copy; 2026 Spiritus Systems
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "var(--fg-dim)",
          }}
        >
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
