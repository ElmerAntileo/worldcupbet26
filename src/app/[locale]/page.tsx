import WorldCupBg from '@/components/WorldCupBg';
import CountdownTimer from '@/components/CountdownTimer';
import Link from 'next/link';
import Script from 'next/script';
import { getLocale } from 'next-intl/server';

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
    name: 'Bet365',
    logo: '⚽',
    rating: 4.9,
    bonus: 'Up to $500 Welcome Bonus',
    features: ['Live Streaming', 'Cash Out', 'In-Play Betting'],
    url: 'https://bet365.com',
    country: ['US', 'UK', 'CA', 'AU'],
  },
  {
    name: '1xBet',
    logo: '🏆',
    rating: 4.7,
    bonus: '100% on first deposit up to €100',
    features: ['130+ Sports', 'Live Streaming', 'Early Cashout'],
    url: 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97',
    country: ['UK', 'DE', 'BR', 'MX', 'NG'],
  },
  {
    name: 'Betway',
    logo: '🏆',
    rating: 4.7,
    bonus: '100% up to €100',
    features: ['World Cup Specials', 'Early Payout', 'Acca Insurance'],
    url: 'https://betway.com',
    country: ['UK', 'DE', 'CA', 'ZA'],
  },
  {
    name: '888Sport',
    logo: '🎯',
    rating: 4.6,
    bonus: 'Bet $10 Get $30',
    features: ['Price Boost', 'Live Stats', 'Edit Bet'],
    url: 'https://888sport.com',
    country: ['US', 'UK', 'ES', 'IT'],
  },
];

const featuredOdds = [
  {
    match: 'USA vs Mexico',
    date: 'Jun 22, 2026',
    time: '20:00 ET',
    home: { team: 'USA', odds: '2.10', flag: '🇺🇸' },
    draw: { odds: '3.40' },
    away: { team: 'Mexico', odds: '3.20', flag: '🇲🇽' },
    group: 'Group B',
  },
  {
    match: 'Brazil vs Argentina',
    date: 'Jun 26, 2026',
    time: '21:00 ET',
    home: { team: 'Brazil', odds: '2.30', flag: '🇧🇷' },
    draw: { odds: '3.10' },
    away: { team: 'Argentina', odds: '3.00', flag: '🇦🇷' },
    group: 'Group F',
  },
  {
    match: 'Germany vs France',
    date: 'Jun 24, 2026',
    time: '18:00 CET',
    home: { team: 'Germany', odds: '2.70', flag: '🇩🇪' },
    draw: { odds: '3.20' },
    away: { team: 'France', odds: '2.60', flag: '🇫🇷' },
    group: 'Group D',
  },
];


export default async function HomePage() {
  const locale = await getLocale();
  const isDE = locale === 'de';

  // For German visitors: 1xBet available in DE; Betsson is geo-blocked — rank accordingly
  const displayBookmakers = isDE
    ? [...bookmakers].sort((a) => (a.name === '1xBet' ? -1 : 0))
    : bookmakers;

  const rankBorder = ['3px solid #FFB800', '3px solid #c0c0c0', '3px solid #cd7f32', '1px solid rgba(255,255,255,0.07)'];

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', color: 'var(--foreground)' }}>
      <Script id="homepage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── BETSSON PROMO BANNER ── */}
      <div style={{
        background: 'linear-gradient(90deg, #071525 0%, #0a1e12 50%, #071525 100%)',
        borderBottom: '1px solid rgba(0,208,132,0.2)',
        padding: '10px 20px',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>🏆</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--foreground)' }}>Betsson</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '13px' }}>— 100% Bonus up to €100</span>
              <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· World Cup 2026 specials</span>
              {isDE && (
                <span style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171', borderRadius: '4px', padding: '1px 7px', fontSize: '10px', fontWeight: 600 }}>
                  ⚠️ Möglicherweise in DE nicht verfügbar
                </span>
              )}
            </div>
          </div>
          <a href="https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow"
            style={{ background: 'linear-gradient(135deg,#00d084,#00b870)', color: '#040c18', padding: '8px 20px', borderRadius: '7px', fontWeight: 800, fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 3px 10px rgba(0,208,132,0.3)' }}>
            Claim Bonus →
          </a>
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
            <a href="#odds" className="btn-primary" style={{ padding: '15px 36px', fontSize: '15px', borderRadius: '9px' }}>
              ⚡ View Live Odds
            </a>
            <Link href="/matches" className="btn-outline" style={{ padding: '15px 36px', fontSize: '15px', borderRadius: '9px' }}>
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
            <Link href="/matches" style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
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
                    <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow"
                      style={{
                        display: 'inline-block',
                        background: i === 0 ? 'linear-gradient(135deg,#FFD756,#FFB800)' : 'linear-gradient(135deg,#00d084,#00b870)',
                        color: '#040c18',
                        padding: '11px 22px', borderRadius: '8px', fontWeight: 800,
                        fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap',
                        boxShadow: i === 0 ? '0 4px 14px rgba(255,184,0,0.3)' : '0 4px 14px rgba(0,208,132,0.25)',
                      }}>
                      Claim Bonus
                    </a>
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

      {/* ── RESPONSIBLE GAMBLING ── */}
      <section style={{
        padding: '22px 20px',
        background: 'linear-gradient(90deg, #07101e, #0a1628, #07101e)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
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
