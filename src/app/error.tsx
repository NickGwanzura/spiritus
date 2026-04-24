"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to any error reporting service
    console.error("Root error:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 12,
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            marginBottom: 28,
          }}
        >
          We encountered an unexpected issue. Try refreshing the page, or contact
          us if the problem persists.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={reset}
            className="btn-amber"
            style={{ padding: "11px 20px" }}
          >
            Try again
          </button>
          <a
            href="mailto:create@spiritus.co.zw"
            className="btn-ghost"
            style={{ padding: "10px 20px" }}
          >
            Contact support
          </a>
        </div>
        {error.digest && (
          <p
            style={{
              marginTop: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--fg-dim)",
            }}
          >
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
