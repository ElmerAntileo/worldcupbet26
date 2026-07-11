"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const groups = ['All', 'QF', 'SF', 'Final'];

const BETSSON_URL = 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/';
const ONEXBET_URL = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const BETWAY_URL  = '/api/redirect/betway';

const matches = [
  {
    id: 1, group: 'QF', stage: 'Quarter-Final 1',
    date: 'Jul 9, 2026', time: '16:00 ET', venue: 'Gillette Stadium', city: 'Boston, USA',
    home: { team: 'France', flag: '🇫🇷', form: ['W','W','W','W','W'] },
    away: { team: 'Morocco', flag: '🇲🇦', form: ['W','W','W','W','L'] },
    odds: { home: '—', draw: '—', away: '—' },
    result: { home: 2, away: 0 },
    scorers: 'Mbappé 34\' · Griezmann 67\'',
    bookmakers: [
      { name: 'Betsson ★', home: '—', draw: '—', away: '—', url: BETSSON_URL },
      { name: '1xBet ★',  home: '—', draw: '—', away: '—', url: ONEXBET_URL },
    ],
    status: 'result',
    blogSlug: 'france-2-0-morocco-world-cup-2026-result',
  },
  {
    id: 2, group: 'QF', stage: 'Quarter-Final 2',
    date: 'Jul 10, 2026', time: '15:00 ET', venue: 'SoFi Stadium', city: 'Los Angeles, USA',
    home: { team: 'Spain', flag: '🇪🇸', form: ['W','W','W','W','W'] },
    away: { team: 'Belgium', flag: '🇧🇪', form: ['W','W','W','W','L'] },
    odds: { home: '—', draw: '—', away: '—' },
    result: { home: 2, away: 1 },
    scorers: 'Yamal 28\' · De Ketelaere 55\' · Morata 71\'',
    bookmakers: [
      { name: 'Betsson ★', home: '—', draw: '—', away: '—', url: BETSSON_URL },
      { name: '1xBet ★',  home: '—', draw: '—', away: '—', url: ONEXBET_URL },
    ],
    status: 'result',
    blogSlug: 'spain-2-1-belgium-world-cup-2026-result',
  },
  {
    id: 3, group: 'QF', stage: 'Quarter-Final 3',
    date: 'Jul 11, 2026', time: '17:00 ET', venue: 'Hard Rock Stadium', city: 'Miami, USA',
    home: { team: 'Norway', flag: '🇳🇴', form: ['W','W','W','W','W'] },
    away: { team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', form: ['W','W','W','W','W'] },
    odds: { home: '3.60', draw: '3.30', away: '2.00' },
    result: null,
    scorers: null,
    bookmakers: [
      { name: 'Betsson ★', home: '3.60', draw: '3.30', away: '2.00', url: BETSSON_URL },
      { name: '1xBet ★',  home: '3.50', draw: '3.25', away: '2.05', url: ONEXBET_URL },
      { name: 'Betway',   home: '3.70', draw: '3.35', away: '1.95', url: BETWAY_URL },
    ],
    status: 'tonight',
    blogSlug: 'norway-vs-england-world-cup-2026',
  },
  {
    id: 4, group: 'QF', stage: 'Quarter-Final 4',
    date: 'Jul 11/12, 2026', time: '21:00 ET', venue: 'Arrowhead Stadium', city: 'Kansas City, USA',
    home: { team: 'Argentina', flag: '🇦🇷', form: ['W','W','W','W','W'] },
    away: { team: 'Switzerland', flag: '🇨🇭', form: ['W','W','W','W','W'] },
    odds: { home: '1.80', draw: '3.60', away: '4.20' },
    result: null,
    scorers: null,
    bookmakers: [
      { name: 'Betsson ★', home: '1.80', draw: '3.60', away: '4.20', url: BETSSON_URL },
      { name: '1xBet ★',  home: '1.85', draw: '3.50', away: '4.10', url: ONEXBET_URL },
      { name: 'Betway',   home: '1.78', draw: '3.65', away: '4.25', url: BETWAY_URL },
    ],
    status: 'upcoming',
    blogSlug: 'messi-last-world-cup-argentina-2026',
  },
  {
    id: 5, group: 'SF', stage: 'Semi-Final 1',
    date: 'Jul 14, 2026', time: '15:00 ET', venue: 'AT&T Stadium', city: 'Dallas, USA',
    home: { team: 'France', flag: '🇫🇷', form: ['W','W','W','W','W'] },
    away: { team: 'Spain', flag: '🇪🇸', form: ['W','W','W','W','W'] },
    odds: { home: '1.80', draw: '3.60', away: '2.10' },
    result: null,
    scorers: null,
    bookmakers: [
      { name: 'Betsson ★', home: '1.80', draw: '3.60', away: '2.10', url: BETSSON_URL },
      { name: '1xBet ★',  home: '1.82', draw: '3.55', away: '2.08', url: ONEXBET_URL },
      { name: 'Betway',   home: '1.78', draw: '3.65', away: '2.12', url: BETWAY_URL },
    ],
    status: 'upcoming',
    blogSlug: null,
  },
  {
    id: 6, group: 'SF', stage: 'Semi-Final 2',
    date: 'Jul 15, 2026', time: '15:00 ET', venue: 'Mercedes-Benz Stadium', city: 'Atlanta, USA',
    home: { team: 'Norway / England', flag: '⚔️', form: [] },
    away: { team: 'Argentina / Switzerland', flag: '⚔️', form: [] },
    odds: { home: 'TBC', draw: 'TBC', away: 'TBC' },
    result: null,
    scorers: null,
    bookmakers: [],
    status: 'tbc',
    blogSlug: null,
  },
  {
    id: 7, group: 'Final', stage: 'World Cup Final',
    date: 'Jul 19, 2026', time: '15:00 ET', venue: 'MetLife Stadium', city: 'East Rutherford, USA',
    home: { team: 'SF1 Winner', flag: '🏆', form: [] },
    away: { team: 'SF2 Winner', flag: '🏆', form: [] },
    odds: { home: 'TBC', draw: 'TBC', away: 'TBC' },
    result: null,
    scorers: null,
    bookmakers: [],
    status: 'tbc',
    blogSlug: null,
  },
];

function FormBadge({ result }: { result: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    W: { bg: '#00d084', color: '#000' },
    D: { bg: '#f59e0b', color: '#000' },
    L: { bg: '#ef4444', color: '#fff' },
  };
  const style = colors[result] || { bg: '#333', color: '#fff' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: '20px', height: '20px', borderRadius: '4px',
      fontSize: '10px', fontWeight: 700,
      background: style.bg, color: style.color,
    }}>{result}</span>
  );
}

function BestOdds({ bookmakers, type }: { bookmakers: typeof matches[0]['bookmakers']; type: 'home' | 'draw' | 'away' }) {
  const values = bookmakers.map(b => parseFloat(b[type]));
  const best = Math.max(...values);
  return (
    <span style={{ color: '#00d084', fontSize: '11px', fontWeight: 600 }}>
      Best: {best.toFixed(2)}
    </span>
  );
}

function getBestByType(bookmakers: typeof matches[0]['bookmakers'], type: 'home' | 'draw' | 'away'): number {
  const values = bookmakers.map(b => parseFloat(b[type])).filter(v => !isNaN(v));
  return Math.max(...values);
}

function OddsCell({ value, isBest }: { value: string; isBest: boolean }) {
  const parsed = parseFloat(value);
  const hasValue = !isNaN(parsed) && value !== '';
  return (
    <div style={{ minWidth: '80px', textAlign: 'center', position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
      <span style={{ fontWeight: 600, fontSize: '15px', color: isBest && hasValue ? '#00d084' : 'var(--foreground)' }}>
        {hasValue ? value : '—'}
      </span>
      {isBest && hasValue && (
        <span style={{
          background: 'rgba(0,208,132,0.15)',
          border: '1px solid rgba(0,208,132,0.4)',
          color: '#00d084',
          fontSize: '9px',
          fontWeight: 800,
          borderRadius: '3px',
          padding: '1px 5px',
          letterSpacing: '0.03em',
          lineHeight: 1.4,
        }}>
          BEST
        </span>
      )}
    </div>
  );
}

export default function MatchesPage() {
  const locale = useLocale();
  const isDE = locale === 'de';
  const [activeGroup, setActiveGroup] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const knockoutMatches = matches.filter(m => ['QF', 'SF', 'Final'].includes(m.group));
  const filtered = activeGroup === 'All'
    ? knockoutMatches
    : knockoutMatches.filter(m => m.group === activeGroup);

  function getBookmakers(bks: typeof matches[0]['bookmakers']) {
    if (!isDE) return bks;
    return [...bks].sort((a, b) => {
      if (a.name.startsWith('1xBet')) return -1;
      if (b.name.startsWith('1xBet')) return 1;
      return 0;
    });
  }

  const statusBadge = (status: string) => {
    if (status === 'result')  return { label: '✅ RESULT',  bg: 'rgba(0,208,132,0.12)',  color: '#00d084',  border: 'rgba(0,208,132,0.3)' };
    if (status === 'tonight') return { label: '🔴 TONIGHT', bg: 'rgba(255,68,68,0.12)',   color: '#ff4444',  border: 'rgba(255,68,68,0.3)' };
    if (status === 'tbc')     return { label: '⏳ TBC',     bg: 'rgba(255,255,255,0.06)', color: 'var(--muted)', border: 'rgba(255,255,255,0.1)' };
    return                           { label: '🗓 UPCOMING', bg: 'rgba(0,208,132,0.08)',  color: 'var(--accent)', border: 'rgba(0,208,132,0.2)' };
  };

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--foreground)' }}>

      {/* HEADER */}
      <section style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2332 100%)', borderBottom: '1px solid var(--card-border)', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)', borderRadius: '20px', padding: '5px 14px', marginBottom: '16px', fontSize: '12px', color: 'var(--accent)', fontWeight: 600 }}>
            <span style={{ width: '7px', height: '7px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
            LIVE — Quarter-Finals · Jul 11–12, 2026
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, marginBottom: '10px' }}>World Cup 2026 Knockout Stage Odds</h1>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '580px', lineHeight: 1.6 }}>
            QF results, tonight&apos;s match odds and upcoming semi-final prices from Betsson, 1xBet and Betway. Click any match to compare.
          </p>
        </div>
      </section>

      {/* STAGE FILTER */}
      <section style={{ background: 'var(--card-bg)', borderBottom: '1px solid var(--card-border)', padding: '0 20px', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {groups.map(g => (
            <button key={g} onClick={() => setActiveGroup(g)} style={{ padding: '14px 18px', background: 'transparent', border: 'none', borderBottom: activeGroup === g ? '3px solid var(--accent)' : '3px solid transparent', color: activeGroup === g ? 'var(--accent)' : 'var(--muted)', fontWeight: activeGroup === g ? 700 : 500, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s' }}>
              {g === 'All' ? 'All Matches' : g === 'QF' ? 'Quarter-Finals' : g === 'SF' ? 'Semi-Finals' : 'Final'}
            </button>
          ))}
        </div>
      </section>

      {/* MATCHES */}
      <section style={{ padding: '24px 20px 60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map(m => {
            const badge = statusBadge(m.status);
            return (
              <div key={m.id} style={{ background: 'var(--card-bg)', border: m.status === 'tonight' ? '1px solid rgba(255,68,68,0.35)' : '1px solid var(--card-border)', borderRadius: '12px', overflow: 'hidden' }}>
                {/* MATCH ROW */}
                <div onClick={() => m.bookmakers.length > 0 ? setExpanded(expanded === m.id ? null : m.id) : undefined}
                  style={{ padding: '18px 22px', cursor: m.bookmakers.length > 0 ? 'pointer' : 'default', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'center' }}>

                  {/* HOME */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '28px' }}>{m.home.flag}</span>
                    <span style={{ fontWeight: 800, fontSize: '16px' }}>{m.home.team}</span>
                  </div>

                  {/* CENTER */}
                  <div style={{ textAlign: 'center', minWidth: '180px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span style={{ background: badge.bg, border: `1px solid ${badge.border}`, color: badge.color, borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 700 }}>{badge.label}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '11px' }}>{m.stage}</span>
                    </div>
                    {m.result ? (
                      <div>
                        <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--accent)', letterSpacing: '-1px', lineHeight: 1 }}>{m.result.home}–{m.result.away}</div>
                        {m.scorers && <div style={{ color: 'var(--muted)', fontSize: '10px', marginTop: '6px', lineHeight: 1.5 }}>{m.scorers}</div>}
                      </div>
                    ) : m.status === 'tbc' ? (
                      <div style={{ color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>TBC — draw pending</div>
                    ) : (
                      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                        {[{ label: '1', val: m.odds.home }, { label: 'X', val: m.odds.draw }, { label: '2', val: m.odds.away }].map(o => (
                          <div key={o.label} style={{ textAlign: 'center' }}>
                            <div style={{ color: 'var(--muted)', fontSize: '10px', fontWeight: 600, marginBottom: '3px' }}>{o.label}</div>
                            <div style={{ background: '#1e2430', border: '1px solid var(--card-border)', borderRadius: '6px', padding: '8px 12px', fontWeight: 700, fontSize: '15px', color: 'var(--accent)', minWidth: '48px' }}>{o.val}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={{ color: 'var(--muted)', fontSize: '10px', marginTop: '8px' }}>{m.date} · {m.time} · {m.city}</div>
                  </div>

                  {/* AWAY */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}>
                    <span style={{ fontWeight: 800, fontSize: '16px' }}>{m.away.team}</span>
                    <span style={{ fontSize: '28px' }}>{m.away.flag}</span>
                  </div>
                </div>

                {/* LINKS ROW */}
                <div style={{ padding: '0 22px 14px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {m.status === 'result' && m.blogSlug && (
                    <Link href={`/blog/${m.blogSlug}`} style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>→ Match Report</Link>
                  )}
                  {(m.status === 'tonight' || m.status === 'upcoming') && m.blogSlug && (
                    <Link href={`/blog/${m.blogSlug}`} style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>→ Preview & Tips</Link>
                  )}
                  {m.bookmakers.length > 0 && m.status !== 'result' && (
                    <>
                      {m.bookmakers.slice(0,2).map(bk => (
                        <a key={bk.name} href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ background: 'var(--accent)', color: '#040c18', padding: '5px 14px', borderRadius: '6px', fontWeight: 800, fontSize: '11px', textDecoration: 'none' }}>
                          Bet at {bk.name.replace(' ★', '')} →
                        </a>
                      ))}
                    </>
                  )}
                </div>

                {/* EXPANDED — BOOKMAKER COMPARISON */}
                {expanded === m.id && m.bookmakers.length > 0 && (
                  <div style={{ borderTop: '1px solid var(--card-border)', padding: '16px 22px', background: '#0d1117' }}>
                    <div style={{ marginBottom: '10px', fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Odds Comparison</div>
                    {(() => {
                      const bks = getBookmakers(m.bookmakers);
                      const bestHome = getBestByType(bks, 'home');
                      const bestDraw = getBestByType(bks, 'draw');
                      const bestAway = getBestByType(bks, 'away');
                      return bks.map(bk => (
                        <div key={bk.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <span style={{ fontWeight: 700, fontSize: '13px', minWidth: '90px' }}>{bk.name}</span>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <OddsCell value={bk.home} isBest={parseFloat(bk.home) === bestHome} />
                            <OddsCell value={bk.draw} isBest={parseFloat(bk.draw) === bestDraw} />
                            <OddsCell value={bk.away} isBest={parseFloat(bk.away) === bestAway} />
                            <a href={bk.url} target="_blank" rel="noopener noreferrer nofollow sponsored" data-affiliate={bk.name.replace(' ★', '')} style={{ background: 'var(--accent)', color: '#000', padding: '7px 14px', borderRadius: '6px', fontWeight: 700, fontSize: '12px', textDecoration: 'none', minWidth: '80px', textAlign: 'center', display: 'inline-block' }} onClick={e => e.stopPropagation()}>Bet Now</a>
                          </div>
                        </div>
                      ));
                    })()}
                    <p style={{ marginTop: '10px', fontSize: '11px', color: 'var(--muted)' }}>Odds indicative only. Always verify on bookmaker site. 18+ only.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{
        padding: '20px', background: '#1a1a2e',
        borderTop: '1px solid var(--card-border)',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ background: '#e53e3e', color: '#fff', borderRadius: '4px', padding: '4px 10px', fontWeight: 800, fontSize: '13px' }}>18+</div>
          <p style={{ color: 'var(--muted)', fontSize: '12px', margin: 0 }}>
            All odds shown are for informational purposes only. Please gamble responsibly.{' '}
            <Link href="/responsible-gambling" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              Get help &amp; resources
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
