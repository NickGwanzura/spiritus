export default function Manifesto() {
  return (
    <div
      style={{
        background: "var(--blue-dim)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background text */}
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
        className="manifesto-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 56px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="section-label"
          style={{
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <style>{`.manifesto-label::before { background: rgba(255,255,255,0.5) !important; }`}</style>
          Our position
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: 24,
            maxWidth: 700,
          }}
        >
          Technology that
          <br />
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>
            earns its place
          </em>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 600,
            fontSize: 17,
            lineHeight: 1.85,
            marginBottom: 14,
          }}
        >
          There is no shortage of technology companies. There is a shortage of
          companies that understand the environments their clients operate in and
          build accordingly. Spiritus Systems exists to close that gap.
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 600,
            fontSize: 17,
            lineHeight: 1.85,
            marginBottom: 14,
          }}
        >
          We work globally because the problems we solve do not stop at borders.
          We stay precise because imprecision compounds. We stay honest because
          our clients have too much riding on these systems to hear anything
          less.
        </p>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(22px, 3vw, 34px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
            maxWidth: 740,
            marginTop: 48,
            borderLeft: "2px solid rgba(255,255,255,0.3)",
            paddingLeft: 32,
          }}
        >
          &ldquo;The right system, built properly, does not just solve a
          problem. It changes what is possible.&rdquo;
        </div>
      </div>
    </div>
  );
}
