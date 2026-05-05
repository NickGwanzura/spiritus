"use client";

import Link from "next/link";

const FONT_STACK =
  "'General Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const NAVY = "#1e3a8a";
const NAVY_TOP = "#2849a8";
const NAVY_HOVER = "#1d4ed8";
const NAVY_HOVER_TOP = "#2d50b8";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/blog" },
];

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 5.5L7 9L10.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M7 3L11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PillProps = {
  href: string;
  label: string;
  variant: "outline" | "solid";
};

function WaitlistPill({ href, label, variant }: PillProps) {
  const isSolid = variant === "solid";

  return (
    <Link
      href={href}
      className={isSolid ? "hero-pill-solid" : "hero-pill-outline"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: isSolid ? "13px 28px" : "12px 22px",
        borderRadius: 999,
        textDecoration: "none",
        fontFamily: FONT_STACK,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: "-0.005em",
        transition:
          "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
        ...(isSolid
          ? {
              background: `linear-gradient(180deg, ${NAVY_TOP} 0%, ${NAVY} 100%)`,
              color: "#ffffff",
              border: `1px solid ${NAVY}`,
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.10), 0 6px 18px rgba(30,58,138,0.22), inset 0 1px 0 rgba(255,255,255,0.18)",
            }
          : {
              background: "#ffffff",
              color: "#0a0a0b",
              border: "1px solid rgba(15,23,42,0.14)",
              boxShadow: "0 1px 2px rgba(15,23,42,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
            }),
      }}
    >
      {label}
      {isSolid && <ArrowRight />}
    </Link>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "#ffffff",
        overflow: "hidden",
        fontFamily: FONT_STACK,
        color: "#0a0a0b",
      }}
    >
      {/* Aurora gradient mesh — slowly drifts */}
      <div
        aria-hidden="true"
        className="hero-aurora"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Live dotted grid with subtle drift */}
      <div
        aria-hidden="true"
        className="hero-grid"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Blueprint crosshair pattern — wider scale, drifts opposite the dot grid */}
      <div
        aria-hidden="true"
        className="hero-pattern"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Floating soft orbs — navy bokeh that breathes the canvas */}
      <div aria-hidden="true" className="hero-orb hero-orb-1" />
      <div aria-hidden="true" className="hero-orb hero-orb-2" />
      <div aria-hidden="true" className="hero-orb hero-orb-3" />

      {/* Top beam highlight */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(900px, 90%)",
          height: 280,
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(30,58,138,0.10), rgba(255,255,255,0) 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Soft navy radial glow behind the headline */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(58% 48% at 50% 38%, rgba(30,58,138,0.10), rgba(255,255,255,0) 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Horizon line near the bottom — fades at the edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 92,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30,58,138,0.18) 35%, rgba(30,58,138,0.30) 50%, rgba(30,58,138,0.18) 65%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <header
          className="hero-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 64px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
            <Link
              href="/"
              aria-label="Spiritus Systems home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                height: 36,
              }}
            >
              <img
                src="/spiritus-logo-light.svg"
                alt="Spiritus Systems"
                width={121}
                height={36}
                style={{ height: 36, width: "auto", display: "block" }}
              />
            </Link>

            <nav
              className="hero-nav-links"
              aria-label="Primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hero-nav-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#3a3f4a",
                    fontFamily: FONT_STACK,
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    lineHeight: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    transition: "color 0.15s ease, background 0.15s ease",
                  }}
                >
                  {item.label}
                  <ChevronDown />
                </Link>
              ))}
            </nav>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <WaitlistPill
              href="/start"
              label="Start a project"
              variant="outline"
            />
          </div>
        </header>

        {/* Hero content */}
        <div
          className="hero-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 24px 140px",
            gap: 36,
          }}
        >
          {/* Badge */}
          <div
            className="anim-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 999,
              background: "rgba(30,58,138,0.06)",
              border: "1px solid rgba(30,58,138,0.18)",
              fontFamily: FONT_STACK,
              fontSize: 12.5,
              fontWeight: 500,
              lineHeight: 1.2,
              color: NAVY,
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: NAVY,
                  opacity: 0.3,
                  animation: "heroPulseRing 2s var(--ease, ease) infinite",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 2,
                  borderRadius: "50%",
                  background: NAVY,
                }}
              />
            </span>
            <span>Building SaaS, AI &amp; operational systems</span>
          </div>

          {/* Heading */}
          <h1
            className="hero-heading anim-up d1"
            style={{
              maxWidth: 1040,
              margin: 0,
              fontFamily: FONT_STACK,
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              backgroundImage:
                "linear-gradient(140deg, #0a0a0b 28%, rgba(30,58,138,0.65) 105%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Rewiring Zimbabwe&rsquo;s Digital Landscape.
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle anim-up d2"
            style={{
              maxWidth: 680,
              margin: 0,
              fontFamily: FONT_STACK,
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(10,10,11,0.72)",
            }}
          >
            SaaS platforms, AI systems, and operational infrastructure built
            in Harare for the enterprises, institutions, and founders
            actually shipping work on the ground.
          </p>

          <div
            className="hero-cta-row anim-up d3"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <WaitlistPill href="/start" label="Start a project" variant="solid" />
            <Link
              href="/work"
              className="hero-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#0a0a0b",
                fontFamily: FONT_STACK,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                padding: "13px 18px",
                borderRadius: 999,
                transition: "color 0.15s ease, background 0.15s ease",
              }}
            >
              See our work
              <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to next section"
          className="hero-scroll-cue"
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "rgba(10,10,11,0.45)",
            textDecoration: "none",
            fontFamily: FONT_STACK,
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
        >
          <span>Scroll</span>
          <span
            aria-hidden="true"
            style={{
              width: 1,
              height: 28,
              background: "linear-gradient(180deg, rgba(10,10,11,0.35), rgba(10,10,11,0))",
              animation: "heroScrollCue 1.8s var(--ease, ease-in-out) infinite",
            }}
          />
        </a>
      </div>

      <style jsx>{`
        /* --- LIVE BACKGROUND LAYERS --- */
        .hero-aurora {
          background:
            radial-gradient(45% 38% at 18% 28%, rgba(30, 58, 138, 0.18), transparent 70%),
            radial-gradient(40% 36% at 82% 22%, rgba(99, 102, 241, 0.14), transparent 70%),
            radial-gradient(55% 45% at 50% 90%, rgba(59, 130, 246, 0.10), transparent 75%),
            radial-gradient(35% 32% at 88% 78%, rgba(30, 58, 138, 0.12), transparent 75%);
          background-size: 200% 200%;
          background-position: 0% 0%;
          animation: heroAurora 22s ease-in-out infinite;
          mix-blend-mode: multiply;
          opacity: 0.85;
        }
        .hero-grid {
          background-image:
            radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          background-position: 0 0;
          mask-image: radial-gradient(72% 62% at 50% 42%, #000 30%, transparent 78%);
          -webkit-mask-image: radial-gradient(72% 62% at 50% 42%, #000 30%, transparent 78%);
          animation: heroGridDrift 60s linear infinite;
          opacity: 0.55;
        }
        .hero-pattern {
          background-image:
            linear-gradient(to right, rgba(30, 58, 138, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 58, 138, 0.07) 1px, transparent 1px),
            url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='112' viewBox='0 0 112 112'%3E%3Cg fill='none' stroke='%231e3a8a' stroke-opacity='0.22' stroke-width='1' stroke-linecap='round'%3E%3Cpath d='M56 50v12M50 56h12'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 112px 112px, 112px 112px, 112px 112px;
          background-position: 0 0, 0 0, 0 0;
          mask-image: radial-gradient(80% 70% at 50% 45%, #000 28%, transparent 82%);
          -webkit-mask-image: radial-gradient(80% 70% at 50% 45%, #000 28%, transparent 82%);
          animation: heroPatternDrift 90s linear infinite;
          opacity: 0.85;
        }
        .hero-orb {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: multiply;
          will-change: transform, opacity;
        }
        .hero-orb-1 {
          top: -8%;
          left: -6%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(30, 58, 138, 0.40), rgba(30, 58, 138, 0) 70%);
          animation: heroOrb1 26s ease-in-out infinite;
        }
        .hero-orb-2 {
          top: 12%;
          right: -10%;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.32), rgba(99, 102, 241, 0) 70%);
          animation: heroOrb2 30s ease-in-out infinite;
        }
        .hero-orb-3 {
          bottom: -12%;
          left: 35%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.22), rgba(59, 130, 246, 0) 70%);
          animation: heroOrb3 34s ease-in-out infinite;
        }
        @keyframes heroAurora {
          0%   { background-position: 0% 0%; }
          25%  { background-position: 50% 25%; }
          50%  { background-position: 100% 50%; }
          75%  { background-position: 50% 75%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes heroGridDrift {
          from { background-position: 0 0; }
          to   { background-position: 28px 28px; }
        }
        @keyframes heroPatternDrift {
          from { background-position: 0 0, 0 0, 0 0; }
          to   { background-position: -112px 0, 0 -112px, -112px -112px; }
        }
        @keyframes heroOrb1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.85; }
          33%      { transform: translate3d(60px, 40px, 0) scale(1.08); opacity: 1; }
          66%      { transform: translate3d(-30px, 70px, 0) scale(0.95); opacity: 0.78; }
        }
        @keyframes heroOrb2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.8; }
          40%      { transform: translate3d(-70px, 60px, 0) scale(1.1); opacity: 1; }
          75%      { transform: translate3d(40px, -30px, 0) scale(0.92); opacity: 0.7; }
        }
        @keyframes heroOrb3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.75; }
          50%      { transform: translate3d(-50px, -70px, 0) scale(1.05); opacity: 0.95; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-aurora,
          .hero-grid,
          .hero-pattern,
          .hero-orb {
            animation: none !important;
          }
        }

        .hero-nav-link:hover {
          color: ${NAVY} !important;
          background: rgba(30, 58, 138, 0.06);
        }
        .hero-pill-solid:hover {
          background: linear-gradient(180deg, ${NAVY_HOVER_TOP} 0%, ${NAVY_HOVER} 100%) !important;
          border-color: ${NAVY_HOVER} !important;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.1),
            0 12px 28px rgba(30, 58, 138, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;
          transform: translateY(-1px);
        }
        .hero-pill-solid:active {
          transform: translateY(0);
        }
        .hero-pill-outline:hover {
          border-color: ${NAVY} !important;
          color: ${NAVY} !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(30, 58, 138, 0.12) !important;
        }
        .hero-secondary:hover {
          background: rgba(15, 23, 42, 0.05);
        }
        .hero-scroll-cue:hover {
          color: ${NAVY} !important;
        }
        @keyframes heroPulseRing {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes heroScrollCue {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        @media (max-width: 1200px) {
          .hero-heading {
            font-size: 84px !important;
          }
        }
        @media (max-width: 900px) {
          .hero-nav {
            padding: 18px 24px !important;
          }
          .hero-nav-links {
            display: none !important;
          }
          .hero-content {
            padding: 96px 20px 120px !important;
            gap: 26px !important;
          }
          .hero-heading {
            font-size: 56px !important;
            line-height: 1.06 !important;
            letter-spacing: -0.03em !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-content {
            padding: 80px 20px 110px !important;
          }
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -0.025em !important;
          }
          .hero-scroll-cue {
            bottom: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
