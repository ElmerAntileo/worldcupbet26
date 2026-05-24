"use client";
import { useState, useEffect } from "react";

const KICKOFF = new Date("2026-06-11T22:00:00Z").getTime();

export default function CountdownTimer() {
  const [t, setT] = useState({ d: 20, h: 0, m: 0, s: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = Math.max(0, KICKOFF - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const boxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "64px",
  };
  const numStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 900,
    fontFamily: "'Arial Black', Impact, sans-serif",
    color: "#FFD700",
    lineHeight: 1,
    letterSpacing: "-1px",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "3px",
    color: "rgba(255,255,255,0.5)",
    marginTop: "4px",
    fontWeight: 600,
  };
  const sepStyle: React.CSSProperties = {
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: 900,
    color: "#FFD700",
    opacity: 0.4,
    alignSelf: "flex-start",
    marginTop: "2px",
    lineHeight: 1,
  };

  if (!mounted) return null;

  return (
    <div style={{ textAlign: "center", margin: "24px 0" }}>
      <div style={{
        fontSize: "11px",
        letterSpacing: "5px",
        color: "rgba(255,255,255,0.45)",
        marginBottom: "12px",
        fontWeight: 700,
      }}>
        KICKOFF IN
      </div>
      <div style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "8px",
        background: "rgba(255,215,0,0.06)",
        border: "1px solid rgba(255,215,0,0.18)",
        borderRadius: "12px",
        padding: "16px 24px",
      }}>
        <div style={boxStyle}>
          <span style={numStyle}>{t.d}</span>
          <span style={labelStyle}>DAYS</span>
        </div>
        <span style={sepStyle}>:</span>
        <div style={boxStyle}>
          <span style={numStyle}>{pad(t.h)}</span>
          <span style={labelStyle}>HRS</span>
        </div>
        <span style={sepStyle}>:</span>
        <div style={boxStyle}>
          <span style={numStyle}>{pad(t.m)}</span>
          <span style={labelStyle}>MIN</span>
        </div>
        <span style={sepStyle}>:</span>
        <div style={boxStyle}>
          <span style={numStyle}>{pad(t.s)}</span>
          <span style={labelStyle}>SEC</span>
        </div>
      </div>
      <div style={{
        fontSize: "11px",
        letterSpacing: "3px",
        color: "rgba(255,255,255,0.3)",
        marginTop: "10px",
      }}>
        Mexico City · Jun 11, 2026 · Opening Match
      </div>
    </div>
  );
}
