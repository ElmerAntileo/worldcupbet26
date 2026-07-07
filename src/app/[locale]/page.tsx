import WorldCupBg from '@/components/WorldCupBg';
import CountdownTimer from '@/components/CountdownTimer';
import Link from 'next/link';
import Script from 'next/script';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { BLOCKED_COUNTRIES_BETSSON, BETWAY_PRIORITY_COUNTRIES } from '@/lib/geoConstants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "World Cup 2026 Betting Sites — Best Odds, Bonuses & Tips ⚽",
  description:
    "FIFA World Cup 2026 is LIVE. Compare odds from 30+ bookmakers, claim 100% bonuses up to €100 & get expert predictions for all 48 matches. Spain 5.75 · France 6.00 · England 7.50. Updated daily.",
  alternates: {
    canonical: "https://www.worldcupbet26.com/",
    languages: {
      en: "https://www.worldcupbet26.com/",
      es: "https://www.worldcupbet26.com/es/",
      pt: "https://www.worldcupbet26.com/pt/",
      de: "https://www.worldcupbet26.com/de/",
      fr: "https://www.worldcupbet26.com/fr/",
      it: "https://www.worldcupbet26.com/it/",
      "x-default": "https://www.worldcupbet26.com/",
    },
  },
  openGraph: {
    title: "World Cup 2026 Betting Sites — Best Odds, Bonuses & Tips ⚽",
    description: "FIFA World Cup 2026 is LIVE. Compare odds from 30+ bookmakers, claim bonuses up to €100 & get expert tips for all 48 matches.",
    url: "https://www.worldcupbet26.com/",
    siteName: "WorldCupBet26",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.worldcupbet26.com/og-social.jpg", width: 1200, height: 630, alt: "World Cup 2026 Betting Odds Comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup 2026 Betting Sites — Best Odds, Bonuses & Tips ⚽",
    description: "FIFA World Cup 2026 is LIVE. Compare odds from 30+ bookmakers, claim bonuses up to €100 & expert tips for all 48 matches.",
    images: ["https://www.worldcupbet26.com/og-social.jpg"],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.worldcupbet26.com/#website',
      url: 'https://www.worldcupbet26.com',
      name: 'WorldCupBet26',
      description:
        'Compare live World Cup 2026 betting odds from 30+ top bookmakers. Best bonuses, match previews and expert tips for FIFA World Cup USA, Canada, Mexico 2026.',
      inLanguage: ['en', 'es', 'pt', 'fr', 'de', 'it'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.worldcupbet26.com/matches',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.worldcupbet26.com/#organization',
      name: 'WorldCupBet26',
      url: 'https://www.worldcupbet26.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.worldcupbet26.com/favicon.ico',
      },
      description:
        'Independent World Cup 2026 betting odds comparison site. We list only licensed, regulated sportsbooks and earn a commission on qualifying sign-ups.',
      sameAs: [],
    },
  ],
};

const bookmakers = [
  {
    name: 'Betsson',
    logo: '🏆',
    rating: 4.8,
    bonus: '100% Welcome Bonus up to €100',
    features: ['World Cup Specials', 'Live Streaming', 'Cash Out'],
    url: 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/',
    country: ['EU', 'NO', 'SE', 'FI', 'CA'],
  },
  {
    name: '1xBet',
    logo: '🎯',
    rating: 4.7,
    bonus: '100% on first deposit up to €100',
    features: ['130+ Sports', 'Live Streaming', 'Early Cashout'],
    url: 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
    country: ['UK', 'DE', 'BR', 'MX', 'NG'],
  },
  {
    name: 'Bet365',
    logo: '⚽',
    rating: 4.9,
    bonus: 'Up to $500 Welcome Bonus',
    features: ['Live Streaming', 'Cash Out', 'In-Play Betting'],
    url: 'https://bet365.com',
    country: ['US', 'UK', 'CA', 'AU'],
  },
  {
    name: 'Betway',
    logo: '⚡',
    rating: 4.6,
    bonus: '100% up to €100',
    features: ['World Cup Specials', 'Early Payout', 'Acca Insurance'],
    url: '/api/redirect/betway',
    country: ['UK', 'DE', 'CA', 'ZA'],
  },
];

const featuredOdds = [
  {
    match: 'Canada vs Morocco',
    date: 'Jul 4, 2026',
    time: '13:00 ET',
    home: { team: 'Canada', odds: '2.80', flag: '🇨🇦' },
    draw: { odds: '3.10' },
    away: { team: 'Morocco', odds: '2.60', flag: '🇲🇦' },
    group: 'Round of 16 — TODAY',
  },
  {
    match: 'Paraguay vs France',
    date: 'Jul 4, 2026',
    time: '17:00 ET',
    home: { team: 'Paraguay', odds: '6.00', flag: '🇵🇾' },
    draw: { odds: '4.20' },
    away: { team: 'France', odds: '1.55', flag: '🇫🇷' },
    group: 'Round of 16 — TONIGHT',
  },
  {
    match: 'Brazil vs Norway',
    date: 'Jul 5, 2026',
    time: '16:00 ET',
    home: { team: 'Brazil', odds: '1.70', flag: '🇧🇷' },
    draw: { odds: '3.50' },
    away: { team: 'Norway', odds: '4.80', flag: '🇳🇴' },
    group: 'Round of 16 — TOMORROW',
  },
];

const homeFaqs = [
  {
    q: "Who is the favourite to win the 2026 World Cup?",
    a: "Spain are the current market favourite at 5.75 with Betsson, boosted by back-to-back Euro 2024 and Nations League titles. France (6.00) are second, followed by England (7.50), Brazil (9.50) and Argentina (10.00). Spain's draw into Group H is the softest among the heavyweights, which may see their odds shorten further before June 11.",
  },
  {
    q: "When does the 2026 FIFA World Cup start?",
    a: "The 2026 FIFA World Cup runs from June 11 to July 19, 2026. The opening match kicks off on June 11, and the Final is scheduled for July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey, USA.",
  },
  {
    q: "Where is the 2026 World Cup being held?",
    a: "The 2026 FIFA World Cup is co-hosted by the USA, Canada and Mexico across 16 stadiums. The USA hosts in New York/NJ (MetLife), Los Angeles (SoFi), Dallas (AT&T Stadium), Miami, Chicago, Philadelphia, San Francisco, Seattle, Kansas City, Houston and Boston. Canada hosts at BMO Field (Toronto) and BC Place (Vancouver). Mexico hosts at Estadio Azteca (Mexico City), Estadio Akron (Guadalajara) and Estadio BBVA (Monterrey).",
  },
  {
    q: "How many teams are in the 2026 World Cup?",
    a: "The 2026 FIFA World Cup features 48 teams — expanded from 32 at previous tournaments. Teams play in 12 groups of four, with the top two from each group plus the eight best third-placed teams (32 total) advancing to a new Round of 32 knockout stage.",
  },
  {
    q: "Which bookmaker has the best World Cup 2026 odds?",
    a: "Betsson and 1xBet consistently offer the highest World Cup 2026 winner odds in our daily comparison. Betsson prices Spain at 5.75, France at 6.00 and England at 7.50. Always compare across multiple bookmakers — even a 0.25 price difference on a £50 bet adds meaningful value over a tournament.",
  },
  {
    q: "What types of bets can I place on the World Cup?",
    a: "Major World Cup betting markets include: Tournament Winner (outright), Group Winner, Golden Boot (top scorer), Match Result (1X2), Both Teams to Score (BTTS), Over/Under Goals, Asian Handicap, Correct Score, First Goal Scorer and live in-play betting. The tournament winner and Golden Boot are the most popular long-term markets throughout the competition.",
  },
  {
    q: "What is the best value bet for World Cup 2026?",
    a: "Our analysts rate France (6.00) as the best value tournament winner — Mbappé at peak, the deepest squad in the tournament and the experience of two consecutive Finals. For dark horse value, Germany (10.00) and Morocco (45.00) stand out. Morocco reached the 2022 semi-finals as huge outsiders and have retained much of that squad.",
  },
  {
    q: "Can I get a welcome bonus for World Cup betting?",
    a: "Yes — most licensed bookmakers offer welcome bonuses for new customers. Betsson offers 100% up to €100, 1xBet offers 100% up to €100, and Bet365 offers up to $500 for qualifying US customers. Always read the wagering requirements before claiming any bonus. WorldCupBet26 only lists regulated, licensed sportsbooks.",
  },
  {
    q: "Does extra time count for World Cup match result bets?",
    a: "For standard Match Result (1X2) bets, most bookmakers settle on 90 minutes plus stoppage time — extra time and penalties do not count. For 'To Qualify' or 'To Win the Tournament' markets, extra time and penalties do count toward the result. Always verify the specific rules of the bookmaker and market before placing your bet.",
  },
  {
    q: "Is betting on the World Cup legal?",
    a: "Legal status varies by country. Online sports betting is legal in the UK, most of Europe, Australia and many US states including New York, New Jersey, Colorado and Illinois. WorldCupBet26 only lists bookmakers licensed by recognised regulators such as the MGA, UKGC and Gibraltar Regulatory Authority. Always check local laws before placing a bet.",
  },
  {
    q: "What are the best betting sites for World Cup 2026?",
    a: "The best World Cup 2026 betting sites based on odds, bonuses and reliability are: (1) Betsson — best overall odds, 100% bonus up to €100, MGA licensed; (2) 1xBet — widest market range, 200+ betting markets per match, 100% bonus up to €100; (3) Pinnacle — best for high-volume bettors, highest limits, lowest margins; (4) Bet365 — best for live streaming and in-play betting. WorldCupBet26 compares all four daily.",
  },
  {
    q: "Who will win the World Cup 2026?",
    a: "According to current betting odds, Spain are favourites to win the 2026 FIFA World Cup at 5.75 (implied probability ~17%). France are second at 6.00, England third at 7.50, Brazil fourth at 9.50 and Argentina fifth at 10.00. Spain are boosted by back-to-back Euro 2024 and Nations League 2025 titles. France are considered best value by our analysts at 6.00 given Mbappé's form and squad depth.",
  },
  {
    q: "What is the World Cup 2026 schedule?",
    a: "The FIFA World Cup 2026 runs from June 11 to July 19, 2026. The tournament features 48 teams across 12 groups, with 104 matches total — the most in World Cup history. The opening match is Mexico vs South Africa on June 11 at Estadio Azteca, Mexico City. The Round of 32 runs June 27 – July 3, Round of 16 July 4–7, Quarter-finals July 9–10, Semi-finals July 14–15, and the Final on July 19 at MetLife Stadium, New Jersey.",
  },
  {
    q: "What bonus can I get for betting on World Cup 2026?",
    a: "Top World Cup 2026 betting bonuses available right now: Betsson offers 100% matched deposit bonus up to €100 for new customers. 1xBet offers 100% up to €100 with a wide range of qualifying markets. Bet365 offers up to $500 for US customers. All bonuses have wagering requirements — typically 5x–10x rollover. WorldCupBet26 lists only verified, licensed sportsbooks with current bonus terms.",
  },
  {
    q: "How many matches are in the World Cup 2026?",
    a: "The 2026 FIFA World Cup features 104 matches in total — significantly more than the 64 matches at previous 32-team tournaments. The expanded format includes 48 teams playing in 12 groups of four in the group stage (72 matches), followed by a new Round of 32 (32 teams), Round of 16 (16 teams), Quarter-finals (8 teams), Semi-finals (4 teams), Third-place play-off, and the Final.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function HomePage() {
  const locale = await getLocale();
  const isDE = locale === 'de';
  const cookieStore = await cookies();
  const geo = cookieStore.get('geo')?.value?.toUpperCase() ?? '';
  const betssonBlocked = (BLOCKED_COUNTRIES_BETSSON as readonly string[]).includes(geo);
  const betwayPriority = (BETWAY_PRIORITY_COUNTRIES as readonly string[]).includes(geo);

  // For German visitors: 1xBet available in DE; Betsson is geo-blocked — rank accordingly
  const displayBookmakers = isDE
    ? [...bookmakers].sort((a) => (a.name === '1xBet' ? -1 : 0))
    : bookmakers;

  const rankBorder = ['3px solid #FFB800', '3px solid #c0c0c0', '3px solid #cd7f32', '1px solid rgba(255,255,255,0.07)'];

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', color: 'var(--foreground)' }}>
      <Script id="homepage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── GEO-AWARE PROMO BANNER ── */}
      <div style={{
        background: 'linear-gradient(90deg, #071525 0%, #0a1e12 50%, #071525 100%)',
        borderBottom: '1px solid rgba(0,208,132,0.2)',
        padding: '10px 20px',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          {betwayPriority ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>⚡</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--foreground)' }}>Betway</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '13px' }}>— 100% Sports Welcome Bonus</span>
                  <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· World Cup Quarter-Finals · Licensed in your region</span>
                </div>
              </div>
              <a href="/api/redirect/betway" target="_blank" rel="noopener noreferrer nofollow sponsored"
                style={{ background: 'linear-gradient(135deg,#00a651,#007a3c)', color: 'white', padding: '8px 20px', borderRadius: '7px', fontWeight: 800, fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 3px 10px rgba(0,166,81,0.35)' }} data-affiliate="Betway">
                Claim Bonus →
              </a>
            </>
          ) : betssonBlocked ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>🎯</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--foreground)' }}>1xBet</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '13px' }}>— 100% Bonus up to €100</span>
                  <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· Round of 16 NOW LIVE · 200+ markets per match</span>
                </div>
              </div>
              <a href="https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97" target="_blank" rel="noopener noreferrer nofollow sponsored"
                style={{ background: 'linear-gradient(135deg,#00d084,#00b870)', color: '#040c18', padding: '8px 20px', borderRadius: '7px', fontWeight: 800, fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 3px 10px rgba(0,208,132,0.35)' }} data-affiliate="1xBet">
                Claim Bonus →
              </a>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>🏆</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--foreground)' }}>Betsson</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '13px' }}>— 100% Bonus up to €100</span>
                  <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· Round of 16 NOW LIVE · Final Jul 19</span>
                </div>
              </div>
              <a href={isDE ? 'https://www.betsson.com/de/sport?affcode=AE3051334481&utm_medium=Affiliate&utm_source=10700602' : 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/'} target="_blank" rel="noopener noreferrer nofollow sponsored"
                style={{ background: 'linear-gradient(135deg,#ef4444,#dc2626)', color: 'white', padding: '8px 20px', borderRadius: '7px', fontWeight: 800, fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 3px 10px rgba(239,68,68,0.3)' }} data-affiliate="Betsson">
                Claim Bonus →
              </a>
            </>
          )}
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 20px 60px',
        textAlign: 'center',
        background: 'linear-gradient(160deg, #040c18 0%, #071a30 45%, #050e1c 100%)',
      }}>
        <WorldCupBg />
        {/* Pitch glow accents */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,208,132,0.07) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,208,132,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
          {/* Live pill */}
          <div className="live-pill" style={{ marginBottom: '28px' }}>
            <span className="live-dot" />
            LIVE — FIFA World Cup 2026™ · Jun 11 – Jul 19
          </div>

          {/* Host nations */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { flag: '🇺🇸', name: 'USA', color: '#B22234' },
              { flag: '🇨🇦', name: 'Canada', color: '#FF0000' },
              { flag: '🇲🇽', name: 'Mexico', color: '#006847' },
            ].map((h) => (
              <div key={h.name} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '999px', padding: '5px 14px',
                fontSize: '12px', fontWeight: 700, color: 'var(--muted-light)',
              }}>
                <span style={{ fontSize: '16px' }}>{h.flag}</span> {h.name}
              </div>
            ))}
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 7vw, 78px)',
            fontWeight: 900,
            lineHeight: 1.08,
            marginBottom: '22px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 55%, #00d084 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Best World Cup 2026<br />Betting Odds Compared
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2.2vw, 18px)',
            color: 'var(--muted-light)',
            maxWidth: '580px',
            margin: '0 auto 36px',
            lineHeight: 1.65,
          }}>
            Compare live odds from 32+ licensed bookmakers. Find the best value bets, claim exclusive bonuses, and follow every match.
          </p>

          <CountdownTimer />

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: 'white', padding: '15px 36px', fontSize: '15px', borderRadius: '9px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>
              🎁 Claim €100 Bonus
            </a>
            <Link href="/world-cup-2026-matches" className="btn-outline" style={{ padding: '15px 36px', fontSize: '15px', borderRadius: '9px' }}>
              All Matches →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{
        background: 'linear-gradient(90deg, #071525, #071e30, #071525)',
        borderTop: '1px solid rgba(0,208,132,0.12)',
        borderBottom: '1px solid rgba(0,208,132,0.12)',
        padding: '0 20px',
      }}>
        <div style={{
          maxWidth: '960px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          textAlign: 'center',
        }}>
          {[
            { value: '32+', label: 'Bookmakers', icon: '📊' },
            { value: '100%', label: 'Free to Use', icon: '✅' },
            { value: '6', label: 'Languages', icon: '🌍' },
            { value: '48', label: 'Group Matches', icon: '⚽' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '22px 12px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{ fontSize: '13px', marginBottom: '4px' }}>{s.icon}</div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED MATCH ODDS ── */}
      <section id="odds" style={{ padding: '56px 20px 48px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Match Odds</h2>
            <Link href="/world-cup-2026-matches" style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              All 24 Matches →
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {featuredOdds.map((m) => (
              <div key={m.match} className="card" style={{ padding: '22px 28px', borderRadius: '14px' }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className="tag">{m.group}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '12px' }}>{m.date} · {m.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.25)', borderRadius: '4px', padding: '2px 8px' }}>
                    <span style={{ width: '6px', height: '6px', background: 'var(--hot)', borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--hot)', letterSpacing: '0.05em' }}>LIVE ODDS</span>
                  </div>
                </div>
                {/* Odds grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '16px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', marginBottom: '6px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{m.home.flag}</div>
                    <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '10px', letterSpacing: '-0.01em' }}>{m.home.team}</div>
                    <div className="odds-badge" style={{ display: 'inline-block', minWidth: '68px', textAlign: 'center', fontSize: '1.1rem' }}>{m.home.odds}</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '0 8px' }}>
                    <div style={{ color: 'var(--muted)', fontSize: '10px', marginBottom: '6px', fontWeight: 700, letterSpacing: '0.08em' }}>DRAW</div>
                    <div style={{
                      background: 'linear-gradient(135deg, #0a1e36, #0d2544)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px', padding: '10px 20px',
                      fontWeight: 800, fontSize: '18px', color: 'var(--muted-light)',
                    }}>{m.draw.odds}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '10px', marginTop: '6px', fontWeight: 700, letterSpacing: '0.12em' }}>VS</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', marginBottom: '6px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{m.away.flag}</div>
                    <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '10px', letterSpacing: '-0.01em' }}>{m.away.team}</div>
                    <div className="odds-badge" style={{ display: 'inline-block', minWidth: '68px', textAlign: 'center', fontSize: '1.1rem' }}>{m.away.odds}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '11px', marginTop: '14px' }}>
            Odds are indicative. Always verify on the bookmaker&apos;s site before placing a bet. 18+ only.
          </p>
        </div>
      </section>

      {/* ── TOP BOOKMAKERS ── */}
      <section style={{ padding: '0 20px 56px', background: 'linear-gradient(180deg, var(--bg-base), var(--bg-surface))' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 className="section-title">Top Rated Bookmakers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {displayBookmakers.map((bk, i) => (
              <div key={bk.name} className="card" style={{
                padding: '20px 24px',
                borderLeft: rankBorder[i] ?? rankBorder[3],
                borderRadius: '12px',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '20px', alignItems: 'center' }}>
                  {/* Logo / rating col */}
                  <div style={{ textAlign: 'center', minWidth: '80px' }}>
                    {i === 0 && (
                      <div style={{
                        background: 'linear-gradient(135deg, #FFD756, #FFB800)',
                        color: '#040c18', fontSize: '9px', fontWeight: 800,
                        borderRadius: '4px', padding: '2px 6px', marginBottom: '6px',
                        letterSpacing: '0.06em', display: 'inline-block',
                      }}>
                        🥇 #1 RATED
                      </div>
                    )}
                    {i === 1 && (
                      <div style={{ fontSize: '9px', fontWeight: 800, color: '#c0c0c0', marginBottom: '6px', letterSpacing: '0.06em' }}>🥈 #2 RATED</div>
                    )}
                    {i === 2 && (
                      <div style={{ fontSize: '9px', fontWeight: 800, color: '#cd7f32', marginBottom: '6px', letterSpacing: '0.06em' }}>🥉 #3 RATED</div>
                    )}
                    <div style={{ fontSize: '28px', lineHeight: 1 }}>{bk.logo}</div>
                    <div style={{ fontWeight: 800, fontSize: '14px', marginTop: '5px', color: 'var(--foreground)' }}>{bk.name}</div>
                    <div style={{ color: 'var(--gold)', fontSize: '11px', marginTop: '2px' }}>
                      {'★'.repeat(Math.floor(bk.rating))}
                      <span style={{ color: 'var(--muted)', marginLeft: '3px' }}>{bk.rating}</span>
                    </div>
                  </div>
                  {/* Info col */}
                  <div>
                    <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '14px', marginBottom: '8px' }}>
                      🎁 {bk.bonus}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {bk.features.map((f) => (
                        <span key={f} style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border)',
                          borderRadius: '5px', padding: '3px 9px',
                          fontSize: '11px', color: 'var(--muted-light)',
                          fontWeight: 500,
                        }}>{f}</span>
                      ))}
                    </div>
                  </div>
                  {/* CTA col */}
                  <div style={{ textAlign: 'right' }}>
                    {/* 1xBet routes to /1xbet-bonus pre-sell page; others go directly to affiliate */}
                    {bk.name === '1xBet' ? (
                      <>
                        <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6, textAlign: 'right', marginBottom: '10px' }}>
                          New to 1xBet? Over 200 markets per World Cup match, the best live odds we&apos;ve tracked this tournament, and a 100% welcome bonus up to €100 for new customers. Takes 60 seconds to register.
                        </p>
                        <Link href="/1xbet-bonus"
                          style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                            color: 'white',
                            padding: '11px 22px', borderRadius: '8px', fontWeight: 800,
                            fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap',
                            boxShadow: '0 4px 14px rgba(59,130,246,0.35)',
                          }}>
                          Get 100% Bonus — Best In-Play Odds →
                        </Link>
                      </>
                    ) : (
                      <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                        data-affiliate={bk.name}
                        style={{
                          display: 'inline-block',
                          background: 'linear-gradient(135deg,#ef4444,#dc2626)',
                          color: 'white',
                          padding: '11px 22px', borderRadius: '8px', fontWeight: 800,
                          fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap',
                          boxShadow: '0 4px 14px rgba(239,68,68,0.3)',
                        }}>
                        Claim Bonus
                      </a>
                    )}
                    <div style={{ color: 'var(--muted)', fontSize: '10px', marginTop: '6px' }}>T&Cs apply · 18+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{
        padding: '56px 20px',
        background: 'linear-gradient(180deg, var(--bg-surface), var(--bg-elevated))',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', paddingLeft: 0 }}>
            <span style={{ borderLeft: 'none' }}>Why Use WorldCupBet26?</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', marginTop: '32px' }}>
            {[
              { icon: '⚡', title: 'Real-Time Odds', desc: 'Odds refresh live from 32+ licensed bookmakers. Never miss a value bet before kick-off.', accent: 'var(--accent)' },
              { icon: '🛡️', title: 'Licensed Books Only', desc: 'We list only regulated, licensed sportsbooks. Your safety and security is our priority.', accent: 'var(--accent)' },
              { icon: '💰', title: 'Exclusive Bonuses', desc: 'Access welcome offers and free bets only available through WorldCupBet26.', accent: 'var(--gold)' },
              { icon: '📊', title: 'Expert Analysis', desc: 'Match previews, value bets and tips from experienced World Cup betting analysts.', accent: 'var(--gold)' },
            ].map((w) => (
              <div key={w.title} className="card" style={{ padding: '28px 22px', textAlign: 'center', borderRadius: '14px' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: 'rgba(0,208,132,0.08)', border: '1px solid rgba(0,208,132,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', margin: '0 auto 16px',
                }}>
                  {w.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '8px', color: 'var(--foreground)' }}>{w.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST ANALYSIS ── */}
      <section style={{ padding: '56px 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Analysis</h2>
            <Link href="/blog" style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 700 }}>
              All Articles →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              { tag: 'Odds Guide', title: 'Best World Cup 2026 Betting Odds', slug: 'best-world-cup-2026-betting-odds', desc: 'Compare odds across 30+ bookmakers and find maximum value on every group stage match.', hot: true },
              { tag: 'Preview', title: 'Group Stage Preview 2026', slug: 'group-stage-preview', desc: 'Complete breakdown of all 8 groups with predictions and value bets.' },
              { tag: 'Guide', title: 'How to Bet on the World Cup', slug: 'how-to-bet-world-cup', desc: "A beginner's guide to betting on the 2026 World Cup safely and smartly." },
            ].map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '22px', borderRadius: '14px', height: '100%', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span className="tag">{a.tag}</span>
                    {'hot' in a && a.hot && (
                      <span style={{ background: 'rgba(255,68,68,0.12)', border: '1px solid rgba(255,68,68,0.3)', color: 'var(--hot)', borderRadius: '4px', padding: '1px 6px', fontSize: '10px', fontWeight: 700 }}>🔥 NEW</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, margin: '0 0 8px', lineHeight: 1.3, color: 'var(--foreground)' }}>{a.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>{a.desc}</p>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '13px' }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section style={{
        padding: '48px 20px',
        background: 'linear-gradient(135deg, #071525 0%, #0a1e12 50%, #071525 100%)',
        borderTop: '1px solid rgba(0,208,132,0.15)',
        borderBottom: '1px solid rgba(0,208,132,0.15)',
      }}>
        <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚽</div>
          <h2 style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 900,
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #ffffff, #00d084)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Get Daily Betting Tips — Free
          </h2>
          <p style={{ color: 'var(--muted-light)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
            Best bets, odds alerts & expert picks for every World Cup match. Drop your email — no spam, unsubscribe any time.
          </p>
          <form
            action="https://formspree.io/f/xeedwgoz"
            method="POST"
            style={{ display: 'flex', gap: '10px', maxWidth: '460px', margin: '0 auto', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '13px 18px',
                borderRadius: '9px',
                border: '1px solid rgba(0,208,132,0.3)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--foreground)',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg,#00d084,#00b870)',
                color: '#040c18',
                padding: '13px 28px',
                borderRadius: '9px',
                border: 'none',
                fontWeight: 800,
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(0,208,132,0.3)',
              }}
            >
              Get Tips 🎯
            </button>
          </form>
          <p style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '12px' }}>
            18+ · Free service · No payment required
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: '56px 20px 48px',
        background: 'linear-gradient(180deg, var(--bg-elevated), var(--bg-surface))',
        borderTop: '1px solid var(--border)',
      }}>
        <Script id="homepage-faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 className="section-title">World Cup 2026 Betting — Frequently Asked Questions</h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '8px 0 24px' }}>
            Everything you need to know about betting on the 2026 FIFA World Cup.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {homeFaqs.map((faq, i) => (
              <details key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                <summary style={{ padding: '15px 20px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', color: 'var(--foreground)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, fontWeight: 800, fontSize: '18px', lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: '0 20px 16px', color: 'var(--muted)', fontSize: '13px', lineHeight: 1.75, borderTop: '1px solid var(--border)' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSIBLE GAMBLING ── */}
      <section style={{
        padding: '22px 20px',
        background: 'linear-gradient(90deg, #07101e, #0a1628, #07101e)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Quick nav to key pages */}
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {[
            { href: '/world-cup-2026-matches', label: '⚽ Match Previews' },
            { href: '/world-cup-2026-bracket', label: '🔱 Bracket & Odds' },
            { href: '/world-cup-2026-groups', label: '📋 Group Stage' },
            { href: '/blog/world-cup-2026-accumulator-tips', label: '🎯 Accumulator Tips' },
            { href: '/blog/world-cup-2026-group-of-death', label: '💀 Group of Death' },
            { href: '/betsson-review', label: '⭐ Betsson Review' },
            { href: '/betway-review', label: '⭐ Betway Review' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ background: 'rgba(0,208,132,0.08)', border: '1px solid rgba(0,208,132,0.2)', color: 'var(--accent)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--hot)', color: '#fff', borderRadius: '6px', padding: '5px 11px', fontWeight: 900, fontSize: '13px', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
            18+
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '12px', lineHeight: 1.5, flex: 1, margin: 0 }}>
            Gambling should be fun. Please bet responsibly and only with money you can afford to lose.{' '}
            <Link href="/responsible-gambling" style={{ color: 'var(--accent)', fontWeight: 600 }}>Help &amp; Resources</Link>
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['GamCare', 'BeGambleAware', 'GamStop'].map((org) => (
              <span key={org} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '3px 9px', fontSize: '10px', color: 'var(--muted)', fontWeight: 600 }}>{org}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
