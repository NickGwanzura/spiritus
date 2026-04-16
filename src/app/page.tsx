import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Brief teasers linking to full pages */}
      <div style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">About</div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--text-bright)",
            marginBottom: 24,
          }}
        >
          Built to think.{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>Built to last.</em>
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "var(--silver-light)",
            maxWidth: 600,
            marginBottom: 40,
          }}
        >
          Spiritus Systems is a global technology company that designs, builds, and deploys
          intelligent systems for enterprises, governments, SMEs, and startups.
        </p>
        <Link
          href="/about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--blue-bright)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Learn more about us
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>

      {/* Services teaser */}
      <div
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="section-wrap" style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label">Services</div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4.5vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--text-bright)",
              marginBottom: 24,
            }}
          >
            What we <em style={{ fontStyle: "italic", color: "var(--blue-bright)" }}>build</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.85,
              color: "var(--silver-light)",
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            From SaaS platforms and AI systems to enterprise integration and digital strategy — we
            build technology that solves the problem in front of you.
          </p>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--blue-bright)",
              textDecoration: "none",
            }}
          >
            Explore our services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Manifesto strip */}
      <div
        style={{
          background: "var(--blue-dim)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            right: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-serif)",
            fontSize: 240,
            fontWeight: 300,
            fontStyle: "italic",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          SPIRITUS
        </span>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "100px 56px",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.4,
              maxWidth: 740,
              margin: "0 auto",
            }}
          >
            &ldquo;The right system, built properly, does not just solve a problem. It changes what
            is possible.&rdquo;
          </div>
        </div>
      </div>
    </>
  );
}
