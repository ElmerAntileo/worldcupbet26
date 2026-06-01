import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Script from "next/script";

const base = "https://www.worldcupbet26.com";
const locales = ["en", "es", "pt", "de", "fr", "it"];
function pageUrl(l: string) {
  return l === "en" ? `${base}/world-cup-2026-matches` : `${base}/${l}/world-cup-2026-matches`;
}

export const metadata: Metadata = {
  title: "World Cup 2026 Match Odds & Previews — All Key Fixtures",
  description:
    "World Cup 2026 match betting odds and expert previews for the biggest fixtures. Mexico vs South Africa, USA vs Paraguay, Brazil vs Morocco, France vs Senegal and more — compare odds from top bookmakers.",
  alternates: {
    canonical: pageUrl("en"),
    languages: { ...Object.fromEntries(locales.map((l) => [l, pageUrl(l)])), "x-default": pageUrl("en") },
  },
  openGraph: {
    title: "World Cup 2026 Match Odds & Previews — All Key Fixtures",
    description: "World Cup 2026 match betting odds and expert previews. Mexico vs South Africa, USA vs Paraguay, Brazil vs Morocco, France vs Senegal and more — compare odds from top bookmakers.",
    url: pageUrl("en"),
    siteName: "WorldCupBet26",
    type: "website",
    images: [{ url: "https://www.worldcupbet26.com/og-matches.jpg", width: 1200, height: 630, alt: "World Cup 2026 Match Previews & Odds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Match Odds & Previews",
    description: "Expert previews and live odds for all key World Cup 2026 fixtures. Mexico vs South Africa, USA vs Paraguay, Brazil vs Morocco & more.",
    images: ["https://www.worldcupbet26.com/og-matches.jpg"],
  },
};

const featuredMatches = [
  { slug: "mexico-vs-south-africa",        home: "Mexico",      homeFlag: "🇲🇽", away: "South Africa",        awayFlag: "🇿🇦", date: "Jun 11", group: "A", homeOdds: "1.65", awayOdds: "5.50", hot: true,  label: "Opening Match 🏆" },
  { slug: "usa-vs-paraguay",               home: "USA",         homeFlag: "🇺🇸", away: "Paraguay",            awayFlag: "🇵🇾", date: "Jun 12", group: "D", homeOdds: "1.75", awayOdds: "4.80", hot: true,  label: "USA Home Opener" },
  { slug: "brazil-vs-morocco",             home: "Brazil",      homeFlag: "🇧🇷", away: "Morocco",             awayFlag: "🇲🇦", date: "Jun 14", group: "C", homeOdds: "1.62", awayOdds: "6.00", hot: true,  label: "2022 QF Rematch" },
  { slug: "france-vs-senegal",             home: "France",      homeFlag: "🇫🇷", away: "Senegal",             awayFlag: "🇸🇳", date: "Jun 15", group: "I", homeOdds: "1.70", awayOdds: "5.50", hot: false, label: "Group I Opener" },
  { slug: "argentina-vs-austria",          home: "Argentina",   homeFlag: "🇦🇷", away: "Austria",             awayFlag: "🇦🇹", date: "Jun 13", group: "J", homeOdds: "1.50", awayOdds: "6.50", hot: false, label: "Argentina Opener" },
  { slug: "spain-vs-uruguay",              home: "Spain",       homeFlag: "🇪🇸", away: "Uruguay",             awayFlag: "🇺🇾", date: "Jun 16", group: "H", homeOdds: "1.88", awayOdds: "4.40", hot: false, label: "Group H Opener" },
  { slug: "england-vs-croatia",            home: "England",     homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", away: "Croatia",             awayFlag: "🇭🇷", date: "Jun 16", group: "L", homeOdds: "1.55", awayOdds: "6.50", hot: false, label: "Euro Rivals" },
  { slug: "germany-vs-ecuador",            home: "Germany",     homeFlag: "🇩🇪", away: "Ecuador",             awayFlag: "🇪🇨", date: "Jun 15", group: "E", homeOdds: "1.50", awayOdds: "7.50", hot: false, label: "Germany Opener" },
  { slug: "portugal-vs-colombia",          home: "Portugal",    homeFlag: "🇵🇹", away: "Colombia",            awayFlag: "🇨🇴", date: "Jun 17", group: "K", homeOdds: "1.85", awayOdds: "4.50", hot: false, label: "Group K Opener" },
  { slug: "netherlands-vs-japan",          home: "Netherlands", homeFlag: "🇳🇱", away: "Japan",               awayFlag: "🇯🇵", date: "Jun 14", group: "F", homeOdds: "1.75", awayOdds: "5.00", hot: false, label: "Group F Opener" },
  { slug: "canada-vs-bosnia-herzegovina", home: "Canada",      homeFlag: "🇨🇦", away: "Bosnia & Herzeg.",    awayFlag: "🇧🇦", date: "Jun 12", group: "B", homeOdds: "1.80", awayOdds: "4.80", hot: false, label: "Canada Home Opener" },
  { slug: "belgium-vs-egypt",              home: "Belgium",     homeFlag: "🇧🇪", away: "Egypt",               awayFlag: "🇪🇬", date: "Jun 17", group: "G", homeOdds: "1.78", awayOdds: "5.00", hot: false, label: "Group G Opener" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "World Cup 2026 Match Previews", item: `${base}/world-cup-2026-matches` },
  ],
};

export default function MatchesHubPage() {
  return (
    <>
      <Script id="matches-breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 className="section-title" style={{ fontSize: "clamp(24px,4vw,40px)" }}>
            World Cup 2026 Match Odds & Previews
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, maxWidth: "680px", marginTop: "0.75rem" }}>
            Expert betting previews and live odds for all the biggest 2026 FIFA World Cup matches. Compare odds across Betsson, 1xBet, Bet365 and Betway — updated daily.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
            {[{ v: "12", l: "Match Previews" }, { v: "4", l: "Bookmakers" }, { v: "Jun 11", l: "Tournament Start" }, { v: "Jul 19", l: "Final" }].map(s => (
              <div key={s.l} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.2)", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                <div style={{ fontWeight: 900, color: "var(--accent)", fontSize: "20px" }}>{s.v}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Match cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "14px" }}>
          {featuredMatches.map((m) => (
            <Link key={m.slug} href={`/world-cup-2026-matches/${m.slug}`} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "1.25rem", cursor: "pointer", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.3)", color: "var(--accent)", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>
                    Group {m.group}
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "11px" }}>{m.label}</span>
                  {m.hot && <span style={{ background: "rgba(255,68,68,0.12)", border: "1px solid rgba(255,68,68,0.3)", color: "var(--hot)", fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px" }}>🔥 KEY MATCH</span>}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "32px" }}>{m.homeFlag}</div>
                    <div style={{ fontWeight: 700, fontSize: "13px", marginTop: "4px" }}>{m.home}</div>
                    <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "22px", marginTop: "4px" }}>{m.homeOdds}</div>
                  </div>
                  <div style={{ textAlign: "center", padding: "0 8px" }}>
                    <div style={{ color: "var(--muted)", fontSize: "10px", fontWeight: 700 }}>📅 {m.date}</div>
                    <div style={{ color: "var(--muted)", fontSize: "18px", fontWeight: 900, margin: "4px 0" }}>VS</div>
                  </div>
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "32px" }}>{m.awayFlag}</div>
                    <div style={{ fontWeight: 700, fontSize: "13px", marginTop: "4px" }}>{m.away}</div>
                    <div style={{ color: "var(--accent)", fontWeight: 900, fontSize: "22px", marginTop: "4px" }}>{m.awayOdds}</div>
                  </div>
                </div>
                <div style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 600, textAlign: "right" }}>
                  Preview & Tip →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Internal links */}
        <div style={{ marginTop: "3rem", display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { href: "/world-cup-2026-odds", label: "🏆 Winner Odds" },
            { href: "/world-cup-2026-groups", label: "📋 Group Stage" },
            { href: "/blog/world-cup-2026-schedule", label: "📅 Full Schedule" },
            { href: "/blog/world-cup-2026-betting-tips", label: "💡 Betting Tips" },
            { href: "/world-cup-2026-bracket", label: "🔱 Knockout Bracket" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(0,208,132,0.08)", border: "1px solid rgba(0,208,132,0.25)", color: "var(--accent)", padding: "8px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1.5rem" }}>Odds sourced from Betsson. Updated daily. 18+ | Gamble responsibly.</p>
      </div>
    </>
  );
}
