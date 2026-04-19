import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 25%, #1a1a1d 0%, #0a0a0b 70%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 116,
            height: 116,
            background: "#f97316",
            borderRadius: 28,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            boxShadow:
              "0 12px 36px rgba(249,115,22,0.35), inset 0 2px 0 rgba(255,255,255,0.18)",
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
