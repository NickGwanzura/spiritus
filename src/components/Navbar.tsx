"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/sectors", label: "Sectors" },
  { href: "/blog", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  // Scroll-aware hide/show + elevation, throttled with rAF
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastScrollY.current;
        setScrolled(y > 8);
        if (y > 200 && dy > 6) {
          setHidden(true);
        } else if (dy < -4 || y <= 200) {
          setHidden(false);
        }
        lastScrollY.current = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open + close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Home page renders its own integrated nav inside the fullscreen hero
  if (pathname === "/") return null;

  return (
    <>
      {/* Slim top bar, hidden below 600px via CSS */}
      <div
        className="top-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 501,
          background: "var(--bg-sunken)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          padding: "7px 24px",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          color: "var(--fg-subtle)",
        }}
      >
        <a href="mailto:create@spiritus.co.zw" className="top-bar-link" style={linkStyle}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
            <path d="M2 4L8 9L14 4" />
          </svg>
          create@spiritus.co.zw
        </a>
        <span style={{ width: 1, height: 10, background: "var(--border)" }} />
        <a href="tel:+263777816368" className="top-bar-link" style={linkStyle}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 2H6L7.5 5.5L5.5 6.5C6.5 8.5 7.5 9.5 9.5 10.5L10.5 8.5L14 10V13C14 13.5 13.5 14 13 14C7 14 2 9 2 3C2 2.5 2.5 2 3 2Z" />
          </svg>
          0777 816 368
        </a>
        <span style={{ width: 1, height: 10, background: "var(--border)" }} />
        <span style={linkStyle}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" />
            <circle cx="8" cy="6" r="1.5" />
          </svg>
          Harare CBD, Zimbabwe
        </span>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className={`${hidden ? "nav-hidden" : "nav-visible"}${scrolled ? " nav-scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 32,
          left: 0,
          right: 0,
          zIndex: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 32px",
          background: "var(--nav-bg)",
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
          borderBottom: "1px solid var(--border)",
          transform: hidden ? "translateY(-120%)" : "translateY(0)",
          transition: "transform 0.35s var(--ease), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <Link
          href="/"
          aria-label="Spiritus Systems Home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            height: 38,
          }}
        >
          <img
            src="/spiritus-logo-light.svg"
            alt="Spiritus Systems"
            width={127}
            height={38}
            style={{ height: 38, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop links */}
        <ul
          className="nav-links-list"
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: active ? "var(--accent)" : "var(--fg-subtle)",
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: "var(--r-sm)",
                    background: active ? "var(--accent-subtle)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li style={{ marginLeft: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <Link
              href="/contact"
              className="nav-cta-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "var(--accent)",
                color: "var(--cta-text)",
                padding: "9px 14px",
                borderRadius: "var(--r)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                boxShadow: "var(--shadow-btn)",
              }}
            >
              Contact
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6H9M6 3L9 6L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="mobile-menu-btn" style={{ display: "none", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-sm)",
              cursor: "pointer",
              width: 34,
              height: 34,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--fg)",
              transition: "transform var(--t-fast), border-color var(--t-fast)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M5 5L15 15M5 15L15 5" strokeLinecap="round" />
              ) : (
                <path d="M3 6H17M3 14H17" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer with backdrop tap-to-close */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            top: navRef.current ? navRef.current.getBoundingClientRect().bottom + window.scrollY : 86,
            zIndex: 499,
            background: "var(--drawer-bg)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px 24px 40px",
              gap: 4,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {/* Contact info surfaced at top of drawer */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "12px 12px 16px",
                borderBottom: "1px solid var(--border)",
                marginBottom: 8,
              }}
            >
              <a
                href="mailto:create@spiritus.co.zw"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  color: "var(--fg-muted)",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
                  <path d="M2 4L8 9L14 4" />
                </svg>
                create@spiritus.co.zw
              </a>
              <a
                href="tel:+2630777816368"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 0",
                  color: "var(--fg-muted)",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 2H6L7.5 5.5L5.5 6.5C6.5 8.5 7.5 9.5 9.5 10.5L10.5 8.5L14 10V13C14 13.5 13.5 14 13 14C7 14 2 9 2 3C2 2.5 2.5 2 3 2Z" />
                </svg>
                0777 816 368
              </a>
            </div>

            {[{ href: "/", label: "Home" }, ...links].map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: active ? "var(--accent)" : "var(--fg)",
                    background: active ? "var(--accent-subtle)" : "transparent",
                    textDecoration: "none",
                    padding: "14px 12px",
                    borderRadius: "var(--r-sm)",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "var(--accent)",
                color: "var(--cta-text)",
                padding: "14px 20px",
                borderRadius: "var(--r)",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                textAlign: "center",
                marginTop: 20,
                boxShadow: "var(--shadow-btn)",
              }}
            >
              Contact us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.15s",
};
