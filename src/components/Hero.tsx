import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 56px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.035,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#3d6bff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(26,79,255,0.18) 0%, transparent 70%)",
            top: "10%",
            left: -100,
            animation: "floatGrid 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(26,79,255,0.1) 0%, transparent 70%)",
            bottom: "10%",
            right: "5%",
            animation: "floatGrid 11s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(to right, transparent, rgba(26,79,255,0.15), transparent)",
            animation: "scanline 6s linear infinite",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          className="anim-up d1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--blue-bright)",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              background: "var(--blue-bright)",
              borderRadius: "50%",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Global Technology & Systems Company
        </div>

        <h1
          className="anim-up d2 hero-headline"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(58px, 8.5vw, 122px)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "var(--text-bright)",
            marginBottom: 44,
          }}
        >
          Intelligence
          <br />
          <em
            className="line2"
            style={{
              fontStyle: "italic",
              color: "var(--blue-bright)",
              display: "block",
              paddingLeft: 120,
            }}
          >
            by design.
          </em>
        </h1>

        <p
          className="anim-up d3"
          style={{
            fontSize: 17,
            fontWeight: 400,
            color: "var(--silver-light)",
            maxWidth: 500,
            lineHeight: 1.75,
            marginBottom: 52,
          }}
        >
          Spiritus Systems builds the technology infrastructure, software
          platforms, and AI frameworks that let organisations operate at a level
          they could not reach before.
        </p>

        <div
          className="anim-up d4"
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--blue)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              border: "none",
              cursor: "none",
              transition: "background 0.25s, transform 0.2s",
            }}
          >
            What we build
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "var(--silver-light)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "none",
              background: "none",
              cursor: "none",
              transition: "color 0.2s",
            }}
          >
            Our story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2L7 12M3 8L7 12L11 8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--silver)",
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background:
              "linear-gradient(to bottom, var(--blue-bright), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span>scroll</span>
      </div>
    </section>
  );
}
