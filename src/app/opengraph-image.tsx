import { siteConfig } from "@/data/site";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  const meta = `${siteConfig.title} · ${siteConfig.location}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, #030306 0%, #1a1030 45%, #0c1220 100%)",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "#a78bfa",
          }}
        >
          {siteConfig.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 20,
            color: "#a1a1aa",
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          {meta}
        </div>
      </div>
    ),
    { ...size },
  );
}
