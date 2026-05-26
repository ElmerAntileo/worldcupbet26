import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WorldCupBet26 — Best World Cup 2026 Betting Odds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #040c18 0%, #071525 60%, #0d1f2d 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent circles */}
        <div style={{
          position: "absolute", width: "500px", height: "500px",
          borderRadius: "50%", background: "rgba(0,208,132,0.06)",
          top: "-150px", right: "-100px", display: "flex",
        }} />
        <div style={{
          position: "absolute", width: "300px", height: "300px",
          borderRadius: "50%", background: "rgba(0,208,132,0.04)",
          bottom: "-80px", left: "-60px", display: "flex",
        }} />

        {/* Top badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "rgba(0,208,132,0.15)",
          border: "1px solid rgba(0,208,132,0.4)",
          borderRadius: "40px", padding: "10px 24px",
          marginBottom: "28px",
        }}>
          <div style={{
            width: "10px", height: "10px", borderRadius: "50%",
            background: "#00d084", display: "flex",
          }} />
          <span style={{ color: "#00d084", fontSize: "20px", fontWeight: 700, letterSpacing: "0.08em" }}>
            FIFA WORLD CUP 2026™ · JUN 11 – JUL 19
          </span>
        </div>

        {/* Logo / Title */}
        <div style={{
          fontSize: "72px", fontWeight: 900, letterSpacing: "-2px",
          color: "#00d084", marginBottom: "16px", display: "flex",
        }}>
          WorldCupBet26
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: "28px", color: "rgba(255,255,255,0.75)",
          fontWeight: 500, marginBottom: "40px",
          textAlign: "center", display: "flex",
        }}>
          Compare World Cup 2026 Betting Odds — Betsson · 1xBet · Bet365
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { val: "24", label: "Group Matches" },
            { val: "4", label: "Bookmakers" },
            { val: "6", label: "Languages" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "44px", fontWeight: 900, color: "#00d084" }}>{s.val}</span>
              <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div style={{
          position: "absolute", bottom: "30px",
          fontSize: "18px", color: "rgba(255,255,255,0.35)",
          fontWeight: 600, letterSpacing: "0.04em", display: "flex",
        }}>
          worldcupbet26.com
        </div>
      </div>
    ),
    { ...size }
  );
}
