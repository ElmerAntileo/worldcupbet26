import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Script from "next/script";
// Team pages use their own static PNG; fallback to shared OG
const TEAM_OG: Record<string, string> = {
  argentina: 'https://www.worldcupbet26.com/og-argentina.png',
  brazil:    'https://www.worldcupbet26.com/og-brazil.png',
  france:    'https://www.worldcupbet26.com/og-france.png',
  england:   'https://www.worldcupbet26.com/og-england.png',
  spain:     'https://www.worldcupbet26.com/og-spain.png',
  germany:   'https://www.worldcupbet26.com/og-germany.png',
  portugal:  'https://www.worldcupbet26.com/og-portugal.png',
  usa:       'https://www.worldcupbet26.com/og-usa.png',
};

const BETSSON_URL = "https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/";
const ONEXBET_URL = "https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97";
const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];

const teams: Record<string, {
  name: string; flag: string; group: string; groupTeams: string[];
  betssonOdds: string; onexbetOdds: string; bet365Odds: string; betwayOdds: string;
  groupOdds: string; description: string; keyPlayers: string[]; recentForm: string;
  titles: number; lastTitle: string;
}> = {
  argentina: {
    name: "Argentina", flag: "🇦🇷", group: "D",
    groupTeams: ["Argentina", "Chile", "Bolivia", "TBD"],
    betssonOdds: "5.00", onexbetOdds: "4.85", bet365Odds: "5.50", betwayOdds: "5.25",
    groupOdds: "1.18",
    description: "The reigning world champions. Argentina arrive at the 2026 World Cup as the team to beat, led by Lionel Messi in what will likely be his final World Cup. Back-to-back Copa América titles and the 2022 Qatar triumph make them a formidable force.",
    keyPlayers: ["Lionel Messi", "Julián Álvarez", "Rodrigo De Paul", "Emiliano Martínez"],
    recentForm: "W W W D W",
    titles: 3, lastTitle: "2022",
  },
  brazil: {
    name: "Brazil", flag: "🇧🇷", group: "E",
    groupTeams: ["Brazil", "Colombia", "Paraguay", "TBD"],
    betssonOdds: "4.00", onexbetOdds: "3.90", bet365Odds: "4.20", betwayOdds: "4.10",
    groupOdds: "1.12",
    description: "Five-time world champions and perennial favourites, Brazil arrive in 2026 hungry to end a 24-year title drought. With a new generation of stars, the Seleção have the attacking firepower to go all the way.",
    keyPlayers: ["Vinícius Jr.", "Rodrygo", "Endrick", "Alisson Becker"],
    recentForm: "W W D W W",
    titles: 5, lastTitle: "2002",
  },
  france: {
    name: "France", flag: "🇫🇷", group: "C",
    groupTeams: ["France", "Croatia", "Morocco", "TBD"],
    betssonOdds: "6.00", onexbetOdds: "5.90", bet365Odds: "6.50", betwayOdds: "6.25",
    groupOdds: "1.15",
    description: "2018 World Cup winners and 2022 runners-up, France possess arguably the deepest squad in world football. With Mbappé at his peak and a settled defensive unit, Les Bleus are among the top contenders in 2026.",
    keyPlayers: ["Kylian Mbappé", "Antoine Griezmann", "Aurélien Tchouaméni", "Mike Maignan"],
    recentForm: "W D W W W",
    titles: 2, lastTitle: "2018",
  },
  england: {
    name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "B",
    groupTeams: ["England", "Serbia", "Denmark", "TBD"],
    betssonOdds: "7.50", onexbetOdds: "7.25", bet365Odds: "8.00", betwayOdds: "7.75",
    groupOdds: "1.20",
    description: "England have emerged as genuine contenders after reaching the Euro 2024 final. With a squad full of Premier League talent and a settled tactical identity under their manager, 2026 could finally be their year.",
    keyPlayers: ["Jude Bellingham", "Harry Kane", "Phil Foden", "Bukayo Saka"],
    recentForm: "W W D W L",
    titles: 1, lastTitle: "1966",
  },
  spain: {
    name: "Spain", flag: "🇪🇸", group: "F",
    groupTeams: ["Spain", "Germany", "Japan", "TBD"],
    betssonOdds: "8.00", onexbetOdds: "7.90", bet365Odds: "8.50", betwayOdds: "8.25",
    groupOdds: "1.35",
    description: "Euro 2024 champions, Spain are playing their most exciting football in years. A young, dynamic squad built around tiki-taka principles with explosive wingers makes them a serious World Cup threat.",
    keyPlayers: ["Lamine Yamal", "Pedri", "Rodri", "Álvaro Morata"],
    recentForm: "W W W W D",
    titles: 1, lastTitle: "2010",
  },
  germany: {
    name: "Germany", flag: "🇩🇪", group: "F",
    groupTeams: ["Spain", "Germany", "Japan", "TBD"],
    betssonOdds: "10.00", onexbetOdds: "9.75", bet365Odds: "10.50", betwayOdds: "10.25",
    groupOdds: "1.65",
    description: "The host of Euro 2024 and four-time world champions, Germany are rebuilding under their new manager with a blend of experienced players and exciting youth. Playing on North American soil gives them a slight psychological edge.",
    keyPlayers: ["Florian Wirtz", "Jamal Musiala", "Leroy Sané", "Manuel Neuer"],
    recentForm: "W D W W L",
    titles: 4, lastTitle: "2014",
  },
  portugal: {
    name: "Portugal", flag: "🇵🇹", group: "H",
    groupTeams: ["Portugal", "Turkey", "Czech Republic", "TBD"],
    betssonOdds: "12.00", onexbetOdds: "11.75", bet365Odds: "13.00", betwayOdds: "12.50",
    groupOdds: "1.22",
    description: "Despite being in the twilight of the Cristiano Ronaldo era, Portugal boast remarkable depth. Bruno Fernandes, Rafael Leão and a new generation ensure Portugal will be competitive — and dangerous on their day.",
    keyPlayers: ["Cristiano Ronaldo", "Bruno Fernandes", "Rafael Leão", "Rúben Dias"],
    recentForm: "W W W D W",
    titles: 0, lastTitle: "Never",
  },
  usa: {
    name: "USA", flag: "🇺🇸", group: "A",
    groupTeams: ["USA", "Mexico", "Canada", "TBD"],
    betssonOdds: "15.00", onexbetOdds: "14.75", bet365Odds: "16.00", betwayOdds: "15.50",
    groupOdds: "1.30",
    description: "Co-hosts and massive home-crowd favourites, the USA are a young, athletic side that will benefit enormously from playing on home soil. With MLS and European-based talent, they could surprise many teams in 2026.",
    keyPlayers: ["Christian Pulisic", "Tyler Adams", "Weston McKennie", "Gio Reyna"],
    recentForm: "W D W L W",
    titles: 0, lastTitle: "Never",
  },
};

export function generateStaticParams() {
  return Object.keys(teams).map((team) => ({ team }));
}

function pageUrl(teamSlug: string, locale: string) {
  const path = `/world-cup-2026-odds/${teamSlug}`;
  return locale === "en" ? `${base}${path}` : `${base}/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string; locale: string }>;
}): Promise<Metadata> {
  const { team: teamSlug, locale } = await params;
  const team = teams[teamSlug];
  if (!team) return {};

  const ogImg = TEAM_OG[teamSlug] ?? 'https://www.worldcupbet26.com/og.png';

  return {
    title: `${team.name} World Cup 2026 Odds — Best Betting Prices`,
    description: `Compare ${team.name} World Cup 2026 betting odds from Betsson, 1xBet, Bet365 & Betway. Current price: ${team.betssonOdds} to win the tournament. Best odds highlighted.`,
    keywords: [
      `${team.name} World Cup 2026 odds`,
      `${team.name} World Cup odds`,
      `${team.name} 2026 FIFA odds`,
      `${team.name} World Cup betting`,
      `${team.name} World Cup 2026`,
    ],
    alternates: {
      canonical: pageUrl(teamSlug, "en"),
      languages: Object.fromEntries(locales.map((l) => [l, pageUrl(teamSlug, l)])),
    },
    openGraph: {
      title: `${team.name} World Cup 2026 Odds — Compare Best Prices`,
      description: `Current ${team.name} odds to win World Cup 2026: ${team.betssonOdds}. Compare all bookmakers side-by-side.`,
      type: "website",
      url: pageUrl(teamSlug, locale),
      images: [{ url: ogImg, width: 1200, height: 630, alt: `${team.name} World Cup 2026 Odds — WorldCupBet26` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${team.name} World Cup 2026 Odds`,
      description: `Compare ${team.name} odds from Betsson, 1xBet, Bet365 & Betway. Best price: ${team.betssonOdds}.`,
      images: [ogImg],
    },
  };
}

export default async function TeamOddsPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team: teamSlug } = await params;
  const team = teams[teamSlug];
  if (!team) return notFound();

  const ogImg = TEAM_OG[teamSlug] ?? 'https://www.worldcupbet26.com/og.png';

  const bookmakers = [
    { name: "Betsson", odds: team.betssonOdds, url: BETSSON_URL, affiliate: true, badge: "⭐ Best odds" },
    { name: "1xBet", odds: team.onexbetOdds, url: ONEXBET_URL, affiliate: true, badge: "⭐ Top bonus" },
    { name: "Bet365", odds: team.bet365Odds, url: "https://bet365.com", affiliate: false, badge: "" },
    { name: "Betway", odds: team.betwayOdds, url: "https://betway.com", affiliate: false, badge: "" },
  ];

  const bestOdds = Math.max(...bookmakers.map((b) => parseFloat(b.odds)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "FIFA World Cup 2026",
    description: `Betting odds for ${team.name} at the 2026 FIFA World Cup. Compare prices from Betsson, 1xBet, Bet365 and Betway. Best current odds: ${team.betssonOdds}.`,
    startDate: "2026-06-11",
    endDate: "2026-07-19",
    location: {
      "@type": "Place",
      name: "USA, Canada, Mexico",
      address: { "@type": "PostalAddress", addressCountry: "US" },
    },
    competitor: {
      "@type": "SportsTeam",
      name: team.name,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    organizer: { "@type": "Organization", name: "FIFA", url: "https://www.fifa.com" },
    image: ogImg,
    offers: {
      "@type": "Offer",
      url: BETSSON_URL,
      price: team.betssonOdds,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };

  return (
    <>
      <Script
        id="team-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg,#040c18,#071525)", padding: "48px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>{team.flag}</div>
            <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "var(--accent)", marginBottom: 12 }}>
              {team.name} World Cup 2026 Odds
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, maxWidth: 600, margin: "0 auto 24px" }}>
              Compare the best {team.name} betting odds from top bookmakers. Tournament winner, group stage & match odds — updated daily.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                🏆 {team.titles > 0 ? `${team.titles}× World Champion` : "First title hunt"}
              </span>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                📅 Group {team.group}
              </span>
              <span style={{ background: "rgba(0,208,132,0.15)", border: "1px solid rgba(0,208,132,0.4)", borderRadius: 20, padding: "6px 16px", color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>
                🎯 Best odds: {team.betssonOdds}
              </span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>

          {/* Odds comparison table */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: "var(--accent)" }}>
              {team.name} to Win World Cup 2026 — Odds Comparison
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {bookmakers.map((bk) => {
                const isBest = parseFloat(bk.odds) === bestOdds;
                return (
                  <div key={bk.name} style={{
                    background: bk.affiliate ? "rgba(0,208,132,0.05)" : "var(--card)",
                    border: isBest ? "2px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 140 }}>
                      <span style={{ fontWeight: 800, fontSize: 18 }}>{bk.name}</span>
                      {bk.badge && (
                        <span style={{ background: "var(--accent)", color: "#000", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                          {bk.badge}
                        </span>
                      )}
                      {isBest && (
                        <span style={{ background: "#FFD700", color: "#000", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                          BEST
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 32, fontWeight: 900, color: isBest ? "var(--accent)" : "var(--text)" }}>
                      {bk.odds}
                    </div>
                    <a
                      href={bk.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      data-affiliate={bk.affiliate ? bk.name : undefined}
                      style={{
                        background: bk.affiliate ? "var(--accent)" : "rgba(255,255,255,0.1)",
                        color: bk.affiliate ? "#000" : "var(--text)",
                        padding: "10px 24px",
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: 14,
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      {bk.affiliate ? `Bet at ${bk.name} →` : "View odds"}
                    </a>
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
              Odds updated daily. 18+ | Gamble responsibly.
            </p>
          </section>

          {/* Team overview */}
          <section style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
              {team.flag} {team.name} — 2026 World Cup Preview
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 20 }}>{team.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Key Players</div>
                {team.keyPlayers.map((p) => (
                  <div key={p} style={{ color: "var(--text)", fontSize: 14, marginBottom: 4 }}>• {p}</div>
                ))}
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Recent Form</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {team.recentForm.split(" ").map((r, i) => (
                    <span key={i} style={{
                      width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: 13,
                      background: r === "W" ? "rgba(0,208,132,0.2)" : r === "D" ? "rgba(255,200,0,0.2)" : "rgba(255,60,60,0.2)",
                      color: r === "W" ? "var(--accent)" : r === "D" ? "#FFC800" : "#FF3C3C",
                    }}>{r}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Group Stage odds</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)" }}>{team.groupOdds} <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>to top Group {team.group}</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: "linear-gradient(135deg,rgba(0,208,132,0.1),rgba(0,208,132,0.05))", border: "1px solid rgba(0,208,132,0.3)", borderRadius: 16, padding: "32px", textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Ready to back {team.name}?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              Get the best odds at Betsson or 1xBet — both offer welcome bonuses for new customers.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BETSSON_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
                data-affiliate="Betsson"
                style={{ background: "var(--accent)", color: "#000", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
                Bet at Betsson — {team.betssonOdds} →
              </a>
              <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored"
                data-affiliate="1xBet"
                style={{ background: "rgba(0,208,132,0.15)", color: "var(--accent)", border: "2px solid var(--accent)", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
                Bet at 1xBet — {team.onexbetOdds} →
              </a>
            </div>
          </section>

          {/* Internal links */}
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>More World Cup 2026 Betting</h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/matches" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                ⚽ All Match Odds
              </Link>
              <Link href="/world-cup-2026-groups" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                📊 Group Stage
              </Link>
              <Link href="/blog/top-favorites-to-win" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 18px", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
                🏆 Top Favourites
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
