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
            aria-label="Spiritus Systems — Home"
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
