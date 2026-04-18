import Link from "next/link";
import HeroPattern from "./HeroPattern";
import LiveOpsPanel from "./LiveOpsPanel";
import StartProjectButton from "./StartProjectButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
        padding: "184px 56px 96px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <HeroPattern />

      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "clamp(32px, 5vw, 72px)",
          alignItems: "start",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div className="hero-copy" style={{ maxWidth: 560 }}>
          <div
            className="anim-up d1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px 5px 10px",
              borderRadius: "var(--r-pill)",
              border: "1px solid var(--border-strong)",
              background: "var(--bg-raised)",
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--fg-muted)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-subtle)",
              }}
            />
            SaaS Solutions
            <span style={{ color: "var(--fg-dim)" }}>·</span>
            GTM Strategy
            <span style={{ color: "var(--fg-dim)" }}>·</span>
            Systems Integration
          </div>

          <h1
            className="anim-up d2"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(38px, 6.5vw, 84px)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
              marginBottom: 24,
            }}
          >
            Intelligence
            <br />
            <span style={{ color: "var(--fg-subtle)" }}>by design.</span>
          </h1>

          <p
            className="anim-up d3"
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--fg-muted)",
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            We build SaaS platforms, AI systems, and operational infrastructure
            for Zimbabwean organisations. Engineered in Harare, priced for the
            local market, and running reliably in production from day one.
          </p>

          <div
            className="anim-up d4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <StartProjectButton>Start a project</StartProjectButton>
            <Link href="/work" className="btn-ghost hero-cta-ghost">
              View our platforms
            </Link>
          </div>
        </div>

        <div
          className="hero-visual anim-up d3"
          style={{ width: "100%", maxWidth: 480, justifySelf: "end" }}
        >
          <LiveOpsPanel />
        </div>
      </div>

    </section>
  );
}
