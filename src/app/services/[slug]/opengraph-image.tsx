import { ImageResponse } from "next/og";
import { getService, services } from "@/data/services";
import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = `${SITE_NAME}: Services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
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
            SPIRITUS · SERVICES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 88,
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                maxWidth: 980,
              }}
            >
              Spiritus Systems
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
            <span>spiritus.co.zw</span>
            <div style={{ color: "#f5b041" }}>spiritus.co.zw</div>
          </div>
        </div>
      ),
      { ...size }
    );
  }

  const titleLength = service.title.length;
  const fontSize =
    titleLength >= 80 ? 56 : titleLength >= 40 ? 72 : 88;

  // Subtitle: tag uppercase, then tagline truncated to 80 chars
  const tagLabel = service.tag.toUpperCase();
  const tagline =
    service.tagline.length > 80
      ? service.tagline.slice(0, 77) + "..."
      : service.tagline;

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
        {/* Top label */}
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
          SPIRITUS · SERVICES
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {service.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#bdbdbd",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            {tagLabel}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#8c8c8c",
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8c8c8c",
          }}
        >
          <span>Spiritus Systems</span>
          <div style={{ color: "#f5b041" }}>spiritus.co.zw</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
