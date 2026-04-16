"use client";

export default function Footer() {
  return (
    <footer
      className="footer-wrap"
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--rule)",
        padding: 56,
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--silver)",
          }}
        >
          SPIRITUS
          <span style={{ color: "var(--blue-bright)" }}> SYSTEMS</span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: "var(--silver)",
          }}
        >
          &copy; 2026 Spiritus Systems. All rights reserved.
        </div>
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
          }}
        >
          {["About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--silver)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-bright)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--silver)")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
