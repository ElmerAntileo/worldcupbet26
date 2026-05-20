import Link from 'next/link';

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

const stats = [
  { value: '32+', label: 'Bookmakers Compared' },
  { value: '100%', label: 'Free to Use' },
  { value: '6', label: 'Languages Available' },
  { value: '48', label: 'Group Stage Matches' },
];

const whyUs = [
  {
    icon: '🔴',
    title: 'Live Odds Updates',
    desc: 'Odds refresh in real-time from 32+ licensed bookmakers. Never miss a value bet.',
  },
  {
    icon: '🛡️',
    title: 'Licensed Books Only',
    desc: 'We only list regulated, licensed sportsbooks. Your safety is our priority.',
  },
  {
    icon: '💰',
    title: 'Exclusive Bonuses',
    desc: 'Access welcome offers and free bets only available through our site.',
  },
  {
    icon: '📊',
    title: 'Expert Analysis',
    desc: 'Match previews, value bets and tips from experienced World Cup analysts.',
  },
];

export default function HomePage() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--foreground)' }}>

      {/* BETSSON PROMO BANNER */}
      <div style={{
        background: "linear-gradient(90deg, #1a2332 0%, #0f3d2e 100%)",
        borderBottom: "2px solid var(--accent)",
        padding: "12px 20px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "20px" }}>🏆</span>
            <div>
              <span style={{ fontWeight: 800, fontSize: "14px" }}>Betsson</span>
              <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "14px" }}> — 100% Welcome Bonus up to €100</span>
              <span style={{ color: "var(--muted)", fontSize: "12px" }}> · World Cup 2026 specials available</span>
            </div>
          </div>
          <a href="https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer nofollow"
            style={{ background: "var(--accent)", color: "#000", padding: "9px 22px", borderRadius: "6px", fontWeight: 800, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Claim Bonus →
          </a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #1a2332 50%, #0d1117 100%)',
        borderBottom: '1px solid var(--card-border)',
        padding: '60px 20px 50px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 25% 50%, #00d084 0%, transparent 50%), radial-gradient(circle at 75% 50%, #00d084 0%, transparent 50%)',
        }} />
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: '20px', padding: '6px 16px', marginBottom: '24px',
            fontSize: '13px', color: 'var(--accent)', fontWeight: 600,
          }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            LIVE — FIFA World Cup 2026 · Jun 11 – Jul 19, USA/CA/MX
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800,
            lineHeight: 1.15, marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 60%, #00d084)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Best World Cup 2026<br />Betting Odds Compared
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 2.5vw, 19px)', color: 'var(--muted)',
            maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6,
          }}>
            Compare live odds from 32+ top bookmakers. Find the best value bets, claim exclusive bonuses, and follow every match of the 2026 World Cup.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#odds" style={{
              background: 'var(--accent)', color: '#000', padding: '14px 32px',
              borderRadius: '8px', fontWeight: 700, fontSize: '15px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s',
            }}>
              View Live Odds
            </a>
            <Link href="/blog" style={{
              background: 'transparent', color: 'var(--foreground)',
              border: '1px solid var(--card-border)', padding: '14px 32px',
              borderRadius: '8px', fontWeight: 600, fontSize: '15px',
              textDecoration: 'none', display: 'inline-block',
            }}>
              Match Previews
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: 'var(--card-bg)', borderBottom: '1px solid var(--card-border)',
        padding: '20px',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px',
          textAlign: 'center',
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--accent)' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE ODDS */}
      <section id="odds" style={{ padding: '48px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Match Odds</h2>
            <Link href="/matches" style={{ color: 'var(--accent)', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>
              All Matches →
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {featuredOdds.map((m) => (
              <div key={m.match} className="card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{
                      background: 'rgba(0,208,132,0.1)', color: 'var(--accent)',
                      border: '1px solid rgba(0,208,132,0.3)', borderRadius: '4px',
                      padding: '2px 8px', fontSize: '11px', fontWeight: 600,
                    }}>{m.group}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '12px' }}>{m.date} · {m.time}</span>
                  </div>
                  <span style={{
                    background: 'rgba(0,208,132,0.1)', color: 'var(--accent)',
                    borderRadius: '4px', padding: '2px 8px', fontSize: '11px', fontWeight: 600,
                  }}>LIVE ODDS</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '4px' }}>{m.home.flag}</div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>{m.home.team}</div>
                    <div className="odds-badge" style={{ display: 'inline-block', minWidth: '60px', textAlign: 'center' }}>{m.home.odds}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '4px', fontWeight: 600 }}>DRAW</div>
                    <div style={{
                      background: '#1e2430', border: '1px solid var(--card-border)',
                      borderRadius: '6px', padding: '8px 16px', fontWeight: 700, fontSize: '16px',
                    }}>{m.draw.odds}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>VS</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '4px' }}>{m.away.flag}</div>
                    <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>{m.away.team}</div>
                    <div className="odds-badge" style={{ display: 'inline-block', minWidth: '60px', textAlign: 'center' }}>{m.away.odds}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '12px', marginTop: '16px' }}>
            Odds shown are indicative. Always verify on the bookmaker&apos;s site before placing a bet. 18+ only.
          </p>
        </div>
      </section>

      {/* TOP BOOKMAKERS */}
      <section style={{ padding: '0 20px 48px', background: 'var(--background)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title">Top Rated Bookmakers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bookmakers.map((bk, i) => (
              <div key={bk.name} className="card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '20px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    {i === 0 && (
                      <div style={{
                        background: 'linear-gradient(135deg, #ffd700, #ffb300)',
                        color: '#000', fontSize: '10px', fontWeight: 700,
                        borderRadius: '4px', padding: '2px 6px', marginBottom: '6px', textAlign: 'center',
                      }}>
                        #1 RATED
                      </div>
                    )}
                    <div style={{ fontSize: '32px' }}>{bk.logo}</div>
                    <div style={{ fontWeight: 800, fontSize: '15px', marginTop: '4px' }}>{bk.name}</div>
                    <div style={{ color: '#ffd700', fontSize: '12px' }}>
                      {'★'.repeat(Math.floor(bk.rating))} {bk.rating}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      color: 'var(--accent)', fontWeight: 700, fontSize: '15px', marginBottom: '8px',
                    }}>
                      {bk.bonus}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {bk.features.map((f) => (
                        <span key={f} style={{
                          background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)',
                          borderRadius: '4px', padding: '3px 8px', fontSize: '11px', color: 'var(--muted)',
                        }}>{f}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <a
                      href={bk.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      style={{
                        display: 'inline-block', background: 'var(--accent)', color: '#000',
                        padding: '12px 24px', borderRadius: '8px', fontWeight: 700,
                        fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap',
                      }}
                    >
                      Claim Bonus
                    </a>
                    <div style={{ color: 'var(--muted)', fontSize: '10px', marginTop: '6px' }}>
                      T&Cs apply. 18+
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{
        padding: '48px 20px',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--card-border)',
        borderBottom: '1px solid var(--card-border)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Use WorldCupBet26?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {whyUs.map((w) => (
              <div key={w.title} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{w.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>{w.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ANALYSIS */}
      <section style={{ padding: '48px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Analysis</h2>
            <Link href="/blog" style={{ color: 'var(--accent)', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>
              All Articles →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { tag: 'Preview', title: 'Group Stage Preview 2026', slug: 'group-stage-preview', desc: 'Complete breakdown of all 8 groups with predictions and value bets.' },
              { tag: 'Tips', title: 'Best Value Bets to Watch', slug: 'best-value-bets', desc: 'Our analysts have identified the top value opportunities across all groups.' },
              { tag: 'Guide', title: 'How to Bet on the World Cup', slug: 'how-to-bet-world-cup', desc: 'A beginner&apos;s guide to betting on the 2026 World Cup safely and smartly.' },
            ].map((a) => (
              <div key={a.slug} className="card" style={{ padding: '20px' }}>
                <span style={{
                  background: 'rgba(0,208,132,0.1)', color: 'var(--accent)',
                  border: '1px solid rgba(0,208,132,0.3)', borderRadius: '4px',
                  padding: '3px 8px', fontSize: '11px', fontWeight: 600,
                }}>{a.tag}</span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '12px 0 8px', lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '16px' }}>{a.desc}</p>
                <Link href={`/blog/${a.slug}`} style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMBLING BANNER */}
      <section style={{
        padding: '24px 20px',
        background: '#1a1a2e',
        borderTop: '1px solid var(--card-border)',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          <div style={{
            background: '#e53e3e', color: '#fff',
            borderRadius: '6px', padding: '6px 12px',
            fontWeight: 800, fontSize: '14px', whiteSpace: 'nowrap',
          }}>18+</div>
          <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5, flex: 1, margin: 0 }}>
            Gambling should be fun. Please bet responsibly and only with money you can afford to lose.{' '}
            <Link href="/responsible-gambling" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              Help &amp; Resources
            </Link>
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['GamCare', 'BeGambleAware', 'GamStop'].map((org) => (
              <span key={org} style={{
                border: '1px solid var(--card-border)', borderRadius: '4px',
                padding: '4px 10px', fontSize: '11px', color: 'var(--muted)',
              }}>{org}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
