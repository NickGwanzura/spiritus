"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 56px",
        background: "rgba(5,7,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          textDecoration: "none",
        }}
      >
        <div style={{ width: 32, height: 32 }}>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
          >
            <rect x="1" y="1" width="30" height="30" stroke="#1a4fff" strokeWidth="1" />
            <line x1="1" y1="16" x2="31" y2="16" stroke="#1a4fff" strokeWidth="0.5" opacity="0.4" />
            <circle cx="16" cy="16" r="5" stroke="#3d6bff" strokeWidth="1" />
            <circle cx="16" cy="16" r="1.5" fill="#3d6bff" />
            <line x1="16" y1="1" x2="16" y2="11" stroke="#3d6bff" strokeWidth="1" />
            <line x1="16" y1="21" x2="16" y2="31" stroke="#3d6bff" strokeWidth="1" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-bright)",
          }}
        >
          SPIRITUS<span style={{ color: "var(--blue-bright)" }}> SYSTEMS</span>
        </span>
      </Link>
      <ul
        className="nav-links-list"
        style={{
          display: "flex",
          gap: 40,
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: pathname === item.href ? "var(--text-bright)" : "var(--silver)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-bright)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  pathname === item.href ? "var(--text-bright)" : "var(--silver)")
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            style={{
              background: pathname === "/contact" ? "var(--blue-bright)" : "var(--blue)",
              color: "#fff",
              padding: "10px 22px",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-bright)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                pathname === "/contact" ? "var(--blue-bright)" : "var(--blue)")
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
