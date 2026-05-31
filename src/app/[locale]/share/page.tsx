"use client";

import { useState } from "react";

const base = "https://www.worldcupbet26.com";

const MATCHES = [
  { slug: "mexico-vs-south-africa",      home: "Mexico",      hflag: "🇲🇽", away: "South Africa",     aflag: "🇿🇦", ho: "1.65", draw: "3.70", ao: "5.50", date: "Jun 11, 2026", group: "Group A — Opening Match", tip: "Mexico to Win @ 1.65" },
  { slug: "canada-vs-bosnia-herzegovina",home: "Canada",      hflag: "🇨🇦", away: "Bosnia & Herzeg.", aflag: "🇧🇦", ho: "1.80", draw: "3.55", ao: "4.80", date: "Jun 12, 2026", group: "Group B",                   tip: "Canada to Win @ 1.80" },
  { slug: "usa-vs-paraguay",             home: "USA",         hflag: "🇺🇸", away: "Paraguay",         aflag: "🇵🇾", ho: "1.75", draw: "3.60", ao: "4.80", date: "Jun 12, 2026", group: "Group D",                   tip: "USA to Win @ 1.75" },
  { slug: "argentina-vs-austria",        home: "Argentina",   hflag: "🇦🇷", away: "Austria",          aflag: "🇦🇹", ho: "1.50", draw: "4.10", ao: "6.50", date: "Jun 13, 2026", group: "Group J",                   tip: "Argentina -1.5 AH @ 2.15" },
  { slug: "netherlands-vs-japan",        home: "Netherlands", hflag: "🇳🇱", away: "Japan",            aflag: "🇯🇵", ho: "1.75", draw: "3.65", ao: "5.00", date: "Jun 14, 2026", group: "Group F",                   tip: "Netherlands Win + BTTS @ 2.70" },
  { slug: "brazil-vs-morocco",           home: "Brazil",      hflag: "🇧🇷", away: "Morocco",          aflag: "🇲🇦", ho: "1.62", draw: "3.90", ao: "6.00", date: "Jun 14, 2026", group: "Group C — 2022 QF Rematch", tip: "Under 2.5 Goals @ 1.75" },
  { slug: "germany-vs-ecuador",          home: "Germany",     hflag: "🇩🇪", away: "Ecuador",          aflag: "🇪🇨", ho: "1.50", draw: "4.20", ao: "7.50", date: "Jun 15, 2026", group: "Group E",                   tip: "Germany to Win @ 1.50" },
  { slug: "france-vs-senegal",           home: "France",      hflag: "🇫🇷", away: "Senegal",          aflag: "🇸🇳", ho: "1.70", draw: "3.75", ao: "5.50", date: "Jun 15, 2026", group: "Group I",                   tip: "France to Win @ 1.70" },
  { slug: "spain-vs-uruguay",            home: "Spain",       hflag: "🇪🇸", away: "Uruguay",          aflag: "🇺🇾", ho: "1.88", draw: "3.50", ao: "4.40", date: "Jun 16, 2026", group: "Group H",                   tip: "Spain Win + U2.5 @ 2.80" },
  { slug: "england-vs-croatia",          home: "England",     hflag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", away: "Croatia",          aflag: "🇭🇷", ho: "1.55", draw: "4.00", ao: "6.50", date: "Jun 16, 2026", group: "Group L — Euro Rivals",    tip: "England to Win @ 1.55" },
  { slug: "portugal-vs-colombia",        home: "Portugal",    hflag: "🇵🇹", away: "Colombia",         aflag: "🇨🇴", ho: "1.85", draw: "3.50", ao: "4.50", date: "Jun 17, 2026", group: "Group K",                   tip: "Portugal to Win @ 1.85" },
  { slug: "belgium-vs-egypt",            home: "Belgium",     hflag: "🇧🇪", away: "Egypt",            aflag: "🇪🇬", ho: "1.78", draw: "3.60", ao: "5.00", date: "Jun 17, 2026", group: "Group G",                   tip: "Belgium to Win @ 1.78" },
];

function buildCardUrl(m: typeof MATCHES[0]) {
  const p = new URLSearchParams({
    home: m.home, hflag: m.hflag,
    away: m.away, aflag: m.aflag,
    ho: m.ho, draw: m.draw, ao: m.ao,
    date: m.date, group: m.group,
    tip: m.tip, book: "Betsson",
  });
  return `${base}/api/og/match?${p.toString()}`;
}

export default function SocialSharePage() {
  const [selected, setSelected] = useState(MATCHES[0]);
  const [copied, setCopied] = useState(false);

  const cardUrl = buildCardUrl(selected);

  function copyUrl() {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const caption = `⚽ ${selected.home} vs ${selected.away} — ${selected.date}
🏆 ${selected.group}
📊 Odds: ${selected.home} ${selected.ho} | Draw ${selected.draw} | ${selected.away} ${selected.ao}
💡 Tip: ${selected.tip}
🔥 Compare all odds → worldcupbet26.com
#WorldCup2026 #FIFA2026 #WC2026 #${selected.home.replace(/\s/g, "")} #Betting`;

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.25rem", color: "var(--foreground)" }}>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", borderRadius: "20px", padding: "5px 14px", marginBottom: "12px", fontSize: "12px", color: "var(--accent)", fontWeight: 600 }}>
          📱 SOCIAL CONTENT TOOLS
        </div>
        <h1 className="section-title">Match Odds Cards — TikTok & Instagram</h1>
        <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6, maxWidth: "640px", marginTop: "0.5rem" }}>
          Generate shareable 1080×1080 match odds cards for TikTok, Instagram Reels and Stories.
          Select a match, preview the card, copy the image URL or download directly.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>

        {/* Match selector */}
        <div>
          <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px", letterSpacing: "0.06em" }}>SELECT MATCH</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "560px", overflowY: "auto", paddingRight: "4px" }}>
            {MATCHES.map((m) => (
              <button
                key={m.slug}
                onClick={() => setSelected(m)}
                style={{
                  background: selected.slug === m.slug ? "rgba(0,208,132,0.12)" : "var(--card-bg)",
                  border: selected.slug === m.slug ? "2px solid rgba(0,208,132,0.5)" : "1px solid var(--card-border)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{m.hflag}</span>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "var(--foreground)" }}>{m.home}</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontWeight: 700 }}>vs</span>
                  <span style={{ fontSize: "20px" }}>{m.aflag}</span>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "var(--foreground)" }}>{m.away}</span>
                </div>
                <div style={{ marginTop: "4px", display: "flex", gap: "12px", fontSize: "11px", color: "var(--muted)" }}>
                  <span>📅 {m.date}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{m.group}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Card preview + actions */}
        <div>
          <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px", letterSpacing: "0.06em" }}>PREVIEW CARD</h2>

          {/* Image preview */}
          <div style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            marginBottom: "16px",
            aspectRatio: "1",
            background: "#040c18",
            position: "relative",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cardUrl}
              alt={`${selected.home} vs ${selected.away} odds card`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            <a
              href={cardUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={`wc2026-${selected.slug}.png`}
              style={{
                background: "var(--accent)", color: "#040c18",
                padding: "14px 20px", borderRadius: "8px",
                fontWeight: 800, fontSize: "14px", textDecoration: "none",
                display: "flex", alignItems: "center", gap: "8px",
                justifyContent: "center",
              }}
            >
              ⬇️ Download Card (1080×1080)
            </a>

            <button
              onClick={copyUrl}
              style={{
                background: "transparent",
                border: "2px solid var(--accent)",
                color: "var(--accent)",
                padding: "12px 20px", borderRadius: "8px",
                fontWeight: 700, fontSize: "13px",
                cursor: "pointer", width: "100%",
                display: "flex", alignItems: "center", gap: "8px",
                justifyContent: "center",
              }}
            >
              {copied ? "✓ Copied!" : "📋 Copy Image URL"}
            </button>
          </div>

          {/* Caption template */}
          <div style={{ marginTop: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              📝 CAPTION TEMPLATE (copy & paste)
            </div>
            <div style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "12px",
              color: "var(--muted)",
              lineHeight: 1.8,
              fontFamily: "monospace",
              whiteSpace: "pre-line",
              userSelect: "all",
            }}>
              {caption}
            </div>
          </div>

          {/* Posting tips */}
          <div style={{ marginTop: "16px", background: "rgba(0,208,132,0.05)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "10px", padding: "14px 16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>📱 POSTING GUIDE</div>
            <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.8 }}>
              <li><strong style={{ color: "var(--foreground)" }}>TikTok:</strong> Post 2-3h before kickoff. Use trending sound. Text-overlay the odds.</li>
              <li><strong style={{ color: "var(--foreground)" }}>Instagram Reel:</strong> 7-15 sec clip with card as thumbnail. Add link in bio.</li>
              <li><strong style={{ color: "var(--foreground)" }}>Best time:</strong> Post 6-8h before match for maximum reach.</li>
              <li><strong style={{ color: "var(--foreground)" }}>Hashtags:</strong> #WorldCup2026 #WC2026 #FIFA2026 + team names.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content calendar */}
      <div style={{ marginTop: "48px" }}>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>10-Day Content Calendar — Jun 11–20</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
          {[
            { date: "Jun 11", content: "Opening Match card: Mexico vs South Africa — post 3h before 15:00 ET kickoff", priority: "🔥 HIGH" },
            { date: "Jun 12", content: "Double header: Canada vs Bosnia (15:00 ET) + USA vs Paraguay (21:00 ET)", priority: "🔥 HIGH" },
            { date: "Jun 13", content: "Argentina vs Austria opener — 'Can anyone stop the champions?' angle", priority: "⚡ MED" },
            { date: "Jun 14", content: "Brazil vs Morocco — '2022 QF rematch' hook. Under 2.5 tip card.", priority: "🔥 HIGH" },
            { date: "Jun 15", content: "Germany vs Ecuador + France vs Senegal double. Big match energy.", priority: "🔥 HIGH" },
            { date: "Jun 16", content: "Spain vs Uruguay (favourites card) + England vs Croatia (revenge angle)", priority: "🔥 HIGH" },
            { date: "Jun 17", content: "Portugal vs Colombia + Belgium vs Egypt. Golden generation angle.", priority: "⚡ MED" },
            { date: "Jun 18", content: "Day 8 recap post — tournament standings, early shocks, best bets", priority: "📊 INFO" },
            { date: "Jun 19", content: "Second matchday openers — Group A second games (Mexico vs South Korea etc.)", priority: "⚡ MED" },
            { date: "Jun 20", content: "Outright winner odds update — who moved? Best value after week 1?", priority: "📊 INFO" },
          ].map((day) => (
            <div key={day.date} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontWeight: 800, color: "var(--accent)", fontSize: "14px" }}>{day.date}</span>
                <span style={{ fontSize: "12px", fontWeight: 700 }}>{day.priority}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>{day.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
