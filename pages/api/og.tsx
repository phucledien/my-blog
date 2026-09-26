import { ImageResponse } from "next/og";
import type { NextApiRequest, NextApiResponse } from "next";
import { SITE_NAME, SITE_URL } from "../../lib/site";

function param(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const title = (param(req.query.title) ?? SITE_NAME).slice(0, 120);
  const label = param(req.query.label)?.slice(0, 24);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #262626 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "#f09000",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700 }}>{SITE_NAME}</div>
          {label && (
            <div
              style={{
                marginLeft: 8,
                padding: "4px 14px",
                border: "2px solid #444",
                borderRadius: 8,
                fontSize: 24,
                color: "#ccc",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {label}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? 64 : 80,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#f09000" }}>
          {new URL(SITE_URL).host.replace(/^www\./, "")}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800");
  res.send(Buffer.from(await image.arrayBuffer()));
}
