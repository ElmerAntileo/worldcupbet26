import { OG_IMAGE } from "@/lib/og";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

const BETSSON_URL = "/choose-betting";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";
const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

function postUrl(l: string) {
  return l === "en"
    ? `${base}/blog/world-cup-2026-predictions`
    : `${base}/${l}/blog/world-cup-2026-predictions`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "World Cup 2026 Predictions — Winner, Top Scorer & Dark Horse Picks",
    description:
      "Expert World Cup 2026 predictions: tournament winner, Golden Boot and group stage tips. Brazil, France & Argentina lead the odds — but who is the best value bet?",
    alternates: {
      canonical: postUrl("en"),
      languages: { ...Object.fromEntries(locales.map((l) => [l, postUrl(l)])), "x-default": postUrl("en") },
    },
    openGraph: {
      title: "World Cup 2026 Predictions — Winner, Top Scorer & Dark Horse Picks",
      description:
        "Expert World Cup 2026 predictions covering the outright winner, Golden Boot, dark horses and value bets. Updated for every group draw.",
      type: "article",
      url: postUrl(locale),
      publishedTime: "2026-05-28T00:00:00Z",
      modifiedTime: "2026-05-28T00:00:00Z",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "World Cup 2026 Predictions — Winner, Top Scorer & Dark Horses",
      description: "Brazil favourite at 4.00 — but who offers the best value? Expert predictions inside.",
      images: [OG_IMAGE.url],
    },
  };
}

const predictions = [
  {
    category: "🏆 Tournament Winner",
    pick: "France",
    flag: "🇫🇷",
    odds: "6.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    reasoning:
      "Brazil may be the market favourite but France are our value pick at 6.00. With Mbappé in his prime, Griezmann pulling strings and arguably the deepest squad in the tournament, Les Bleus have the balance of elite defence and firepower to go all the way. Their 2022 run to the final — where they took Argentina to penalties — shows they can navigate any draw.",
    teamSlug: "france",
  },
  {
    category: "🥈 Runner-Up",
    pick: "Brazil",
    flag: "🇧🇷",
    odds: "4.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    reasoning:
      "Brazil are overwhelming favourites for a reason — Vinícius Jr., Rodrygo and the youngster Endrick give them the most frightening front three in the tournament. Their end to the South American qualifying campaign was imperious. We expect them to make the final, where France edges them on penalties in a repeat of 1998.",
    teamSlug: "brazil",
  },
  {
    category: "👟 Golden Boot",
    pick: "Kylian Mbappé",
    flag: "🇫🇷",
    odds: "8.00",
    bookmaker: "1xBet",
    url: ONEXBET_URL,
    reasoning:
      "Mbappé is the best player in the world right now and carries France's attacking threat. In a 48-team format with more knockout games, elite strikers who survive late rounds rack up goals quickly. His 2022 World Cup tally of 8 goals (including a hat-trick in the final) shows his ceiling at this tournament.",
    teamSlug: "france",
  },
  {
    category: "🌙 Dark Horse",
    pick: "Morocco",
    flag: "🇲🇦",
    odds: "45.00",
    bookmaker: "Betsson",
    url: BETSSON_URL,
    reasoning:
      "Morocco shocked the world by reaching the 2022 semi-finals and they are not a one-tournament wonder. Hakimi and Ziyech have matured further; their defensive organisation is elite. At 45.00, a €10 bet returns €450 if they win. Best value in the entire market.",
    teamSlug: "morocco",
  },
  {
    category: "💣 First Major Upset",
    pick: "Japan beats Germany",
    flag: "🇯🇵",
    odds: "4.50",
    bookmaker: "1xBet",
    url: ONEXBET_URL,
    reasoning:
      "Japan have already done it once — they beat Germany 2-1 in Qatar 2022. Spain and Germany are in the same group (Group F) and Japan have shocked both previously. Kubo and Doan are better than ever. Back Japan to repeat the trick at 4.50 on the match result market.",
    teamSlug: "japan",
  },
];

const groupPredictions = [
  { group: "A", winner: "USA", runnerUp: "Mexico", tip: "Home advantage carries USA to top; Mexico beat Canada on goal difference" },
  { group: "B", winner: "England", runnerUp: "Croatia", tip: "Bellingham class too much — England cruise. Croatia sneak second." },
  { group: "C", winner: "France", runnerUp: "Uruguay", tip: "France dominant; Uruguay edge Morocco on the final day" },
  { group: "D", winner: "Argentina", runnerUp: "Switzerland", tip: "Argentina qualify easily; Switzerland grind out second" },
  { group: "E", winner: "Brazil", runnerUp: "Belgium", tip: "Brazil at their dominant best; De Bruyne inspires Belgium" },
  { group: "F", winner: "Spain", runnerUp: "Japan", tip: "Spain win comfortably; Japan repeat their Qatar heroics vs Germany" },
  { group: "G", winner: "Netherlands", runnerUp: "Colombia", tip: "Van Dijk leads Dutch to top; Colombia pip Senegal on goal difference" },
  { group: "H", winner: "Portugal", runnerUp: "Italy", tip: "Ronaldo farewell gives Portugal edge; Italy squeeze through" },
];

export default async function WorldCupPredictionsPost() {
  return (
    <article style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0d1117 0%, #1a2332 100%)",
        borderBottom: "1px solid var(--card-border)",
        padding: "48px 20px 40px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" }}>Predictions</span>
            <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>🔥 14 days to kick-off</span>
            <span style={{ color: "var(--muted)", fontSize: "12px" }}>Updated 28 May 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            World Cup 2026 Predictions:<br />
            <span style={{ color: "var(--accent)" }}>Winner, Top Scorer & Best Value Bets</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.7, maxWidth: "720px", marginBottom: "28px" }}>
            With 14 days until the opening match, we give our expert predictions for the 2026 FIFA World Cup —
            tournament winner, Golden Boot, group stage results and the dark horse picks that offer genuine value
            at current odds. Every prediction is backed by a betting angle across Betsson, 1xBet, Bet365 and Betway.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
              style={{ background: "var(--accent)", color: "#000", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
              data-affiliate="Betsson">
              🏆 Bet at Betsson — €100 Bonus
            </a>
            <Link href="/world-cup-2026-odds"
              style={{ background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "12px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              All Team Odds →
            </Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* KEY PREDICTIONS */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Our 5 Key World Cup 2026 Predictions</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px" }}>
          These are the five betting positions we are most confident about heading into the tournament.
          Odds shown are the best currently available — click to claim the price before they shorten.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
          {predictions.map((p) => (
            <div key={p.category} style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "24px",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "220px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                    {p.category}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{p.flag}</span>
                    <span style={{ fontSize: "22px", fontWeight: 800 }}>{p.pick}</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                    {p.reasoning}
                  </p>
                  <div style={{ marginTop: "16px", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                    <Link href={`/world-cup-2026-odds/${p.teamSlug}`}
                      style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      View {p.pick} full odds →
                    </Link>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "4px" }}>Best odds</div>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{p.odds}</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>{p.bookmaker}</div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                    style={{ display: "inline-block", background: "var(--accent)", color: "#000", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}
                    data-affiliate={p.bookmaker}>
                    Bet Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GROUP STAGE PREDICTIONS */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Group Stage Predictions — All 8 Groups</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
          Who qualifies from each group? Our predicted group winners and runners-up, plus the key betting angle for each section.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px", marginBottom: "48px" }}>
          {groupPredictions.map((g) => (
            <div key={g.group} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", color: "var(--accent)" }}>
                  {g.group}
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" }}>Group {g.group}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#ffd700", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 800, color: "#000", flexShrink: 0 }}>1</span>
                  <span style={{ fontWeight: 700, fontSize: "14px" }}>{g.winner}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid var(--card-border)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 800, color: "var(--muted)", flexShrink: 0 }}>2</span>
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}>{g.runnerUp}</span>
                </div>
              </div>
              <div style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.5, borderTop: "1px solid var(--card-border)", paddingTop: "10px", marginTop: "8px" }}>
                💡 {g.tip}
              </div>
            </div>
          ))}
        </div>

        {/* KNOCKOUT BRACKET PREDICTION */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Predicted Knockout Bracket</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
          Based on our group predictions above, here is how we see the knockout rounds playing out through to the final on <strong style={{ color: "var(--foreground)" }}>July 19, 2026 at MetLife Stadium, New Jersey</strong>.
        </p>

        {[
          {
            round: "Quarter-Finals",
            matches: [
              { h: "France", a: "Colombia", result: "France 2–0" },
              { h: "England", a: "Morocco", result: "Morocco 1–0 (upset)" },
              { h: "Brazil", a: "Netherlands", result: "Brazil 3–1" },
              { h: "Argentina", a: "USA", result: "Argentina 2–1" },
            ],
          },
          {
            round: "Semi-Finals",
            matches: [
              { h: "France", a: "Morocco", result: "France 2–1 (extra time)" },
              { h: "Brazil", a: "Argentina", result: "Brazil 1–0" },
            ],
          },
          {
            round: "🏆 Final",
            matches: [
              { h: "France", a: "Brazil", result: "France 3–2 (pen)" },
            ],
          },
        ].map((stage) => (
          <div key={stage.round} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--accent)", marginBottom: "12px" }}>{stage.round}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {stage.matches.map((m) => (
                <div key={m.h + m.a} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto", gap: "8px", alignItems: "center", background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "12px 16px" }}>
                  <span style={{ fontWeight: 700, fontSize: "14px" }}>{m.h}</span>
                  <span style={{ color: "var(--muted)", fontSize: "12px", fontWeight: 600 }}>vs</span>
                  <span style={{ fontWeight: 700, fontSize: "14px" }}>{m.a}</span>
                  <span style={{ color: "var(--accent)", fontSize: "12px", fontWeight: 700, textAlign: "right" }}>{m.result}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* BEST VALUE BETS */}
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px", marginTop: "48px" }}>Best Value Bets to Place Right Now</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
          These are the specific bets we recommend placing before the odds shorten. All are available now at the prices shown.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {[
            { bet: "France to win World Cup 2026", odds: "6.00", bm: "Betsson", stake: "€20", returns: "€120", url: BETSSON_URL, label: "Betsson" },
            { bet: "Morocco to reach Semi-Finals", odds: "12.00", bm: "1xBet", stake: "€10", returns: "€120", url: ONEXBET_URL, label: "1xBet" },
            { bet: "Mbappé — Top Tournament Scorer", odds: "8.00", bm: "1xBet", stake: "€15", returns: "€120", url: ONEXBET_URL, label: "1xBet" },
            { bet: "Japan to qualify from Group F", odds: "3.50", bm: "Betsson", stake: "€25", returns: "€87.50", url: BETSSON_URL, label: "Betsson" },
            { bet: "Over 2.5 goals — USA vs Mexico", odds: "2.10", bm: "Betsson", stake: "€30", returns: "€63", url: BETSSON_URL, label: "Betsson" },
          ].map((b) => (
            <div key={b.bet} style={{ display: "flex", alignItems: "center", gap: "16px", background: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "8px", padding: "16px 20px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>{b.bet}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)" }}>Stake {b.stake} → returns {b.returns}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{b.odds}</div>
                <div style={{ fontSize: "10px", color: "var(--muted)" }}>{b.bm}</div>
              </div>
              <a href={b.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                style={{ background: "var(--accent)", color: "#000", padding: "10px 18px", borderRadius: "8px", fontWeight: 700, fontSize: "12px", textDecoration: "none", whiteSpace: "nowrap" }}
                data-affiliate={b.label}>
                Bet at {b.label}
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: "linear-gradient(135deg, #1a2f1a, #0d1f2d)",
          border: "1px solid rgba(0,208,132,0.3)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          marginBottom: "40px",
        }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>14 DAYS TO KICK-OFF</div>
          <h2 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, marginBottom: "12px" }}>
            Lock in these odds before they shorten
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "24px", maxWidth: "480px", margin: "0 auto 24px", fontSize: "14px", lineHeight: 1.6 }}>
            France at 6.00, Morocco at 45.00 — these prices will drop significantly once the tournament starts.
            Claim your welcome bonus now and get your bets on early.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
              style={{ background: "var(--accent)", color: "#000", padding: "14px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", textDecoration: "none" }}
              data-affiliate="Betsson">
              🏆 Bet at Betsson
            </a>
            <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
              style={{ background: "transparent", color: "var(--foreground)", border: "1px solid var(--card-border)", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              data-affiliate="1xBet">
              Claim 1xBet Bonus
            </a>
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "14px" }}>18+ | Gamble Responsibly | T&Cs Apply</p>
        </div>

        {/* TEAM LINKS */}
        <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>Dive Deeper — Full Team Odds</h2>
        <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
          Each team page breaks down all four bookmakers side-by-side with odds history, group fixtures and player analysis.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
          {[
            { slug: "france",    name: "France 🇫🇷" },
            { slug: "brazil",    name: "Brazil 🇧🇷" },
            { slug: "argentina", name: "Argentina 🇦🇷" },
            { slug: "england",   name: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
            { slug: "morocco",   name: "Morocco 🇲🇦" },
            { slug: "japan",     name: "Japan 🇯🇵" },
            { slug: "usa",       name: "USA 🇺🇸" },
            { slug: "germany",   name: "Germany 🇩🇪" },
          ].map((t) => (
            <Link key={t.slug} href={`/world-cup-2026-odds/${t.slug}`}
              style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {t.name}
            </Link>
          ))}
          <Link href="/world-cup-2026-odds"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
            All 22 teams →
          </Link>
        </div>

        {/* DISCLAIMER */}
        <p style={{ color: "var(--muted)", fontSize: "11px", lineHeight: 1.6 }}>
          Predictions are editorial opinion only and do not constitute financial advice. Odds are subject to change — always verify on the bookmaker&apos;s site before placing. 18+ only. Gamble responsibly. WorldCupBet26 contains affiliate links and earns a commission on qualifying sign-ups.
        </p>
      </div>
    </article>
  );
}
