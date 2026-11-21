import { ImageResponse } from "next/og";

export const alt = "Recaho — AI-powered restaurant operating platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14161a",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "radial-gradient(circle, rgba(194,30,28,0.55), rgba(20,22,26,0))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c21e1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>Recaho</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ color: "#f8dcdb", fontSize: 22, letterSpacing: 2, textTransform: "uppercase" }}>
            Restaurant operating platform
          </div>
          <div style={{ color: "#ffffff", fontSize: 62, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>
            Run your restaurant smarter with Recaho
          </div>
          <div style={{ color: "rgba(255,255,255,0.62)", fontSize: 26, lineHeight: 1.4 }}>
            Billing · Inventory · Kitchen · CRM · Accounting · AI insight
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, color: "rgba(255,255,255,0.55)", fontSize: 20 }}>
          <span>15,000+ restaurants</span>
          <span>18+ countries</span>
          <span>50+ integrations</span>
        </div>
      </div>
    ),
    size,
  );
}
