import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 20% 20%, #1a1a1a 0%, #050505 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#a3a3a3",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#f5b041",
              boxShadow: "0 0 0 6px rgba(245,176,65,0.18)",
            }}
          />
          {SITE_NAME}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              maxWidth: 980,
            }}
          >
            Intelligence by design.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#bdbdbd",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            SaaS platforms, AI systems, and operational infrastructure
            engineered in Harare for Zimbabwean organisations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8c8c8c",
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            <span>SaaS</span>
            <span>·</span>
            <span>AI</span>
            <span>·</span>
            <span>CRM</span>
            <span>·</span>
            <span>ERP</span>
            <span>·</span>
            <span>Integration</span>
          </div>
          <div style={{ color: "#f5b041" }}>spiritus.co.zw</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
