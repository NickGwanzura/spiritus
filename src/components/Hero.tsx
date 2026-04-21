import Link from "next/link";
import HeroPattern from "./HeroPattern";
import RotatingWord from "./RotatingWord";
import StartProjectButton from "./StartProjectButton";

const proofPoints = [
  { value: "06", label: "Platforms in production" },
  { value: "24/7", label: "Production monitoring" },
  { value: "< 2s", label: "First paint on 3G" },
  { value: "99.9%", label: "Uptime across deployments" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
        padding: "168px 56px 96px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <HeroPattern />

      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="anim-up d1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "5px 14px 5px 10px",
            borderRadius: "var(--r-pill)",
            border: "1px solid var(--border-strong)",
            background: "var(--bg-raised)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            marginBottom: 32,
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
          SaaS
          <span style={{ color: "var(--fg-dim)" }}>·</span>
          CRM
          <span style={{ color: "var(--fg-dim)" }}>·</span>
          GTM Strategy
        </div>

        <h1
          className="anim-up d2"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(44px, 7.2vw, 104px)",
            fontWeight: 600,
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            color: "var(--fg)",
            maxWidth: 980,
            marginBottom: 28,
          }}
        >
          Rewiring{" "}
          <span
            className="hero-shimmer"
            style={{
              background:
                "linear-gradient(120deg, var(--accent) 0%, #fb923c 25%, #fbbf24 50%, #fb923c 75%, var(--accent) 100%)",
              backgroundSize: "220% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Zimbabwe&rsquo;s
          </span>
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>
            Digital{" "}
            <RotatingWord
              words={["Landscape", "Operations", "Stack", "Economy"]}
            />
            .
          </span>
        </h1>

        <p
          className="anim-up d3"
          style={{
            fontSize: "clamp(16px, 1.6vw, 19px)",
            lineHeight: 1.55,
            color: "var(--fg-muted)",
            maxWidth: 640,
            marginBottom: 40,
          }}
        >
          SaaS platforms, AI systems, and operational infrastructure built in
          Harare for the enterprises, institutions, and founders actually
          shipping work on the ground.
        </p>

        <div
          className="anim-up d4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 64,
          }}
        >
          <StartProjectButton>Start a project</StartProjectButton>
          <Link href="/work" className="btn-ghost hero-cta-ghost">
            View our platforms
          </Link>
        </div>

        <ul
          className="hero-proof anim-up d4"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            width: "100%",
            maxWidth: 880,
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {proofPoints.map((p, i) => (
            <li
              key={p.label}
              className="stat-cell"
              style={{
                padding: "20px 18px",
                textAlign: "center",
                borderRight:
                  i < proofPoints.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
              }}
            >
              <div
                className="stat-num"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  marginBottom: 4,
                  transition: "color var(--t-fast)",
                }}
              >
                {p.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--fg-subtle)",
                }}
              >
                {p.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
