"use client";
import { useState } from 'react';
import Link from 'next/link';

const groups = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const matches = [
  // GROUP A
  {
    id: 1, group: 'A', stage: 'Group Stage',
    date: 'Jun 11, 2026', time: '18:00 ET', venue: 'Estadio Azteca', city: 'Mexico City, MEX',
    home: { team: 'Mexico', flag: '\U0001f1f2\U0001f1fd', form: ['W','W','D','W','L'] },
    away: { team: 'Poland', flag: '\U0001f1f5\U0001f1f1', form: ['W','D','W','L','W'] },
    odds: { home: '2.10', draw: '3.20', away: '3.60' },
    bookmakers: [
      { name: 'Bet365', home: '2.10', draw: '3.20', away: '3.60', url: 'https://bet365.com' },
      { name: 'Betway', home: '2.05', draw: '3.25', away: '3.70', url: 'https://betway.com' },
      { name: '888Sport', home: '2.15', draw: '3.15', away: '3.55', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  {
    id: 2, group: 'A', stage: 'Group Stage',
    date: 'Jun 15, 2026', time: '15:00 ET', venue: 'Estadio Akron', city: 'Guadalajara, MEX',
    home: { team: 'Saudi Arabia', flag: '\U0001f1f8\U0001f1e6', form: ['W','L','D','W','W'] },
    away: { team: 'Poland', flag: '\U0001f1f5\U0001f1f1', form: ['W','D','W','L','W'] },
    odds: { home: '3.40', draw: '3.10', away: '2.10' },
    bookmakers: [
      { name: 'Bet365', home: '3.40', draw: '3.10', away: '2.10', url: 'https://bet365.com' },
      { name: 'Betway', home: '3.35', draw: '3.20', away: '2.05', url: 'https://betway.com' },
      { name: '888Sport', home: '3.50', draw: '3.00', away: '2.15', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  {
    id: 3, group: 'A', stage: 'Group Stage',
    date: 'Jun 19, 2026', time: '20:00 ET', venue: 'Estadio Azteca', city: 'Mexico City, MEX',
    home: { team: 'Mexico', flag: '\U0001f1f2\U0001f1fd', form: ['W','W','D','W','L'] },
    away: { team: 'Saudi Arabia', flag: '\U0001f1f8\U0001f1e6', form: ['W','L','D','W','W'] },
    odds: { home: '1.90', draw: '3.50', away: '4.20' },
    bookmakers: [
      { name: 'Bet365', home: '1.90', draw: '3.50', away: '4.20', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.85', draw: '3.60', away: '4.30', url: 'https://betway.com' },
      { name: '888Sport', home: '1.95', draw: '3.45', away: '4.10', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP B
  {
    id: 4, group: 'B', stage: 'Group Stage',
    date: 'Jun 12, 2026', time: '20:00 ET', venue: 'MetLife Stadium', city: 'New York, USA',
    home: { team: 'USA', flag: '\U0001f1fa\U0001f1f8', form: ['W','W','W','D','W'] },
    away: { team: 'Panama', flag: '\U0001f1f5\U0001f1e6', form: ['D','W','L','W','D'] },
    odds: { home: '1.55', draw: '3.90', away: '6.50' },
    bookmakers: [
      { name: 'Bet365', home: '1.55', draw: '3.90', away: '6.50', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.50', draw: '4.00', away: '6.80', url: 'https://betway.com' },
      { name: '888Sport', home: '1.57', draw: '3.80', away: '6.40', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  {
    id: 5, group: 'B', stage: 'Group Stage',
    date: 'Jun 22, 2026', time: '20:00 ET', venue: 'AT&T Stadium', city: 'Dallas, USA',
    home: { team: 'USA', flag: '\U0001f1fa\U0001f1f8', form: ['W','W','W','D','W'] },
    away: { team: 'Mexico', flag: '\U0001f1f2\U0001f1fd', form: ['W','W','D','W','L'] },
    odds: { home: '2.30', draw: '3.20', away: '3.00' },
    bookmakers: [
      { name: 'Bet365', home: '2.30', draw: '3.20', away: '3.00', url: 'https://bet365.com' },
      { name: 'Betway', home: '2.25', draw: '3.30', away: '3.10', url: 'https://betway.com' },
      { name: '888Sport', home: '2.35', draw: '3.10', away: '2.95', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP C
  {
    id: 6, group: 'C', stage: 'Group Stage',
    date: 'Jun 13, 2026', time: '15:00 ET', venue: 'SoFi Stadium', city: 'Los Angeles, USA',
    home: { team: 'Argentina', flag: '\U0001f1e6\U0001f1f7', form: ['W','W','W','W','D'] },
    away: { team: 'Ecuador', flag: '\U0001f1ea\U0001f1e8', form: ['W','D','L','W','W'] },
    odds: { home: '1.45', draw: '4.20', away: '7.50' },
    bookmakers: [
      { name: 'Bet365', home: '1.45', draw: '4.20', away: '7.50', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.43', draw: '4.30', away: '7.80', url: 'https://betway.com' },
      { name: '888Sport', home: '1.47', draw: '4.10', away: '7.40', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  {
    id: 7, group: 'C', stage: 'Group Stage',
    date: 'Jun 26, 2026', time: '21:00 ET', venue: 'Hard Rock Stadium', city: 'Miami, USA',
    home: { team: 'Brazil', flag: '\U0001f1e7\U0001f1f7', form: ['W','W','D','W','W'] },
    away: { team: 'Argentina', flag: '\U0001f1e6\U0001f1f7', form: ['W','W','W','W','D'] },
    odds: { home: '2.30', draw: '3.10', away: '3.00' },
    bookmakers: [
      { name: 'Bet365', home: '2.30', draw: '3.10', away: '3.00', url: 'https://bet365.com' },
      { name: 'Betway', home: '2.25', draw: '3.15', away: '3.05', url: 'https://betway.com' },
      { name: '888Sport', home: '2.35', draw: '3.05', away: '2.95', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP D
  {
    id: 8, group: 'D', stage: 'Group Stage',
    date: 'Jun 14, 2026', time: '18:00 CET', venue: 'BC Place', city: 'Vancouver, CAN',
    home: { team: 'Germany', flag: '\U0001f1e9\U0001f1ea', form: ['W','W','D','W','W'] },
    away: { team: 'Japan', flag: '\U0001f1ef\U0001f1f5', form: ['W','D','W','W','L'] },
    odds: { home: '1.75', draw: '3.60', away: '5.00' },
    bookmakers: [
      { name: 'Bet365', home: '1.75', draw: '3.60', away: '5.00', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.72', draw: '3.70', away: '5.10', url: 'https://betway.com' },
      { name: '888Sport', home: '1.78', draw: '3.55', away: '4.90', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  {
    id: 9, group: 'D', stage: 'Group Stage',
    date: 'Jun 24, 2026', time: '18:00 CET', venue: 'Gillette Stadium', city: 'Boston, USA',
    home: { team: 'Germany', flag: '\U0001f1e9\U0001f1ea', form: ['W','W','D','W','W'] },
    away: { team: 'France', flag: '\U0001f1eb\U0001f1f7', form: ['W','D','W','W','W'] },
    odds: { home: '2.70', draw: '3.20', away: '2.60' },
    bookmakers: [
      { name: 'Bet365', home: '2.70', draw: '3.20', away: '2.60', url: 'https://bet365.com' },
      { name: 'Betway', home: '2.65', draw: '3.25', away: '2.65', url: 'https://betway.com' },
      { name: '888Sport', home: '2.75', draw: '3.15', away: '2.55', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP E
  {
    id: 10, group: 'E', stage: 'Group Stage',
    date: 'Jun 15, 2026', time: '18:00 ET', venue: 'Lincoln Financial Field', city: 'Philadelphia, USA',
    home: { team: 'England', flag: '\U0001f3f4\U000e0067\U000e0062\U000e0065\U000e006e\U000e0067\U000e007f', form: ['W','W','W','W','D'] },
    away: { team: 'Serbia', flag: '\U0001f1f7\U0001f1f8', form: ['W','D','W','L','W'] },
    odds: { home: '1.50', draw: '3.90', away: '7.00' },
    bookmakers: [
      { name: 'Bet365', home: '1.50', draw: '3.90', away: '7.00', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.48', draw: '4.00', away: '7.20', url: 'https://betway.com' },
      { name: '888Sport', home: '1.52', draw: '3.80', away: '6.90', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP F
  {
    id: 11, group: 'F', stage: 'Group Stage',
    date: 'Jun 16, 2026', time: '18:00 ET', venue: 'Rose Bowl', city: 'Pasadena, USA',
    home: { team: 'Spain', flag: '\U0001f1ea\U0001f1f8', form: ['W','W','W','D','W'] },
    away: { team: 'Croatia', flag: '\U0001f1ed\U0001f1f7', form: ['D','W','W','W','D'] },
    odds: { home: '1.85', draw: '3.40', away: '4.60' },
    bookmakers: [
      { name: 'Bet365', home: '1.85', draw: '3.40', away: '4.60', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.82', draw: '3.50', away: '4.70', url: 'https://betway.com' },
      { name: '888Sport', home: '1.88', draw: '3.35', away: '4.50', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP G
  {
    id: 12, group: 'G', stage: 'Group Stage',
    date: 'Jun 17, 2026', time: '20:00 ET', venue: 'Arrowhead Stadium', city: 'Kansas City, USA',
    home: { team: 'Portugal', flag: '\U0001f1f5\U0001f1f9', form: ['W','W','D','W','W'] },
    away: { team: 'Morocco', flag: '\U0001f1f2\U0001f1e6', form: ['W','W','W','D','W'] },
    odds: { home: '1.95', draw: '3.40', away: '4.10' },
    bookmakers: [
      { name: 'Bet365', home: '1.95', draw: '3.40', away: '4.10', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.92', draw: '3.45', away: '4.20', url: 'https://betway.com' },
      { name: '888Sport', home: '1.98', draw: '3.35', away: '4.00', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
  },
  // GROUP H
  {
    id: 13, group: 'H', stage: 'Group Stage',
    date: 'Jun 18, 2026', time: '15:00 ET', venue: 'Empower Field', city: 'Denver, USA',
    home: { team: 'Netherlands', flag: '\U0001f1f3\U0001f1f1', form: ['W','W','D','W','W'] },
    away: { team: 'Senegal', flag: '\U0001f1f8\U0001f1f3', form: ['W','D','W','W','L'] },
    odds: { home: '1.70', draw: '3.60', away: '5.20' },
    bookmakers: [
      { name: 'Bet365', home: '1.70', draw: '3.60', away: '5.20', url: 'https://bet365.com' },
      { name: 'Betway', home: '1.68', draw: '3.70', away: '5.30', url: 'https://betway.com' },
      { name: '888Sport', home: '1.72', draw: '3.55', away: '5.10', url: 'https://888sport.com' },
    ],
    status: 'upcoming',
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

export default function MatchesPage() {
  const [activeGroup, setActiveGroup] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeGroup === 'All' ? matches : matches.filter(m => m.group === activeGroup);

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--foreground)' }}>

      {/* HEADER */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #1a2332 100%)',
        borderBottom: '1px solid var(--card-border)',
        padding: '40px 20px 32px',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: '20px', padding: '5px 14px', marginBottom: '16px',
            fontSize: '12px', color: 'var(--accent)', fontWeight: 600,
          }}>
            <span style={{ width: '7px', height: '7px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
            LIVE ODDS — Updated in real time
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, marginBottom: '10px' }}>
            World Cup 2026 Match Odds
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '580px', lineHeight: 1.6 }}>
            Compare 1X2 odds from top bookmakers for every group stage match. Click any match to see the best odds side by side.
          </p>
        </div>
      </section>

      {/* GROUP FILTER */}
      <section style={{
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--card-border)',
        padding: '0 20px',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {groups.map(g => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              style={{
                padding: '14px 18px',
                background: 'transparent',
                border: 'none',
                borderBottom: activeGroup === g ? '3px solid var(--accent)' : '3px solid transparent',
                color: activeGroup === g ? 'var(--accent)' : 'var(--muted)',
                fontWeight: activeGroup === g ? 700 : 500,
                fontSize: '13px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s',
              }}
            >
              {g === 'All' ? 'All Matches' : `Group ${g}`}
            </button>
          ))}
        </div>
      </section>

      {/* MATCHES */}
      <section style={{ padding: '24px 20px 60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>

          {filtered.map(m => (
            <div key={m.id} style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              {/* MATCH ROW */}
              <div
                onClick={() => setExpanded(expanded === m.id ? null : m.id)}
                style={{
                  padding: '16px 20px',
                  cursor: 'pointer',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                {/* HOME TEAM */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '24px' }}>{m.home.flag}</span>
                    <span style={{ fontWeight: 700, fontSize: '15px' }}>{m.home.team}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {m.home.form.map((r, i) => <FormBadge key={i} result={r} />)}
                  </div>
                </div>

                {/* CENTER — ODDS + INFO */}
                <div style={{ textAlign: 'center', minWidth: '200px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', marginBottom: '10px' }}>
                    <span style={{
                      background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
                      color: 'var(--accent)', borderRadius: '4px', padding: '2px 8px',
                      fontSize: '10px', fontWeight: 700,
                    }}>GROUP {m.group}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>{m.date}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>· {m.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                    {[
                      { label: '1', val: m.odds.home },
                      { label: 'X', val: m.odds.draw },
                      { label: '2', val: m.odds.away },
                    ].map(o => (
                      <div key={o.label} style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--muted)', fontSize: '10px', fontWeight: 600, marginBottom: '3px' }}>{o.label}</div>
                        <div style={{
                          background: '#1e2430', border: '1px solid var(--card-border)',
                          borderRadius: '6px', padding: '8px 14px',
                          fontWeight: 700, fontSize: '16px', color: 'var(--accent)',
                          minWidth: '52px',
                        }}>{o.val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '4px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--muted)', fontSize: '11px' }}>
                      {m.venue} · {m.city}
                    </span>
                  </div>
                </div>

                {/* AWAY TEAM */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '15px' }}>{m.away.team}</span>
                    <span style={{ fontSize: '24px' }}>{m.away.flag}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {m.away.form.map((r, i) => <FormBadge key={i} result={r} />)}
                  </div>
                </div>
              </div>

              {/* EXPANDED — BOOKMAKER COMPARISON */}
              {expanded === m.id && (
                <div style={{
                  borderTop: '1px solid var(--card-border)',
                  padding: '16px 20px',
                  background: '#0d1117',
                }}>
                  <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Odds Comparison
                    </span>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '11px', color: 'var(--muted)' }}>
                      <span style={{ minWidth: '80px', textAlign: 'center' }}>{m.home.team}</span>
                      <span style={{ minWidth: '60px', textAlign: 'center' }}>Draw</span>
                      <span style={{ minWidth: '80px', textAlign: 'center' }}>{m.away.team}</span>
                      <span style={{ minWidth: '90px' }}></span>
                    </div>
                  </div>
                  {m.bookmakers.map(bk => (
                    <div key={bk.name} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{ fontWeight: 700, fontSize: '13px', minWidth: '80px' }}>{bk.name}</span>
                      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <span style={{ minWidth: '80px', textAlign: 'center', fontWeight: 600, fontSize: '15px' }}>{bk.home}</span>
                        <span style={{ minWidth: '60px', textAlign: 'center', fontWeight: 600, fontSize: '15px', color: 'var(--muted)' }}>{bk.draw}</span>
                        <span style={{ minWidth: '80px', textAlign: 'center', fontWeight: 600, fontSize: '15px' }}>{bk.away}</span>
                        <a
                          href={bk.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          style={{
                            background: 'var(--accent)', color: '#000',
                            padding: '7px 16px', borderRadius: '6px',
                            fontWeight: 700, fontSize: '12px',
                            textDecoration: 'none', minWidth: '90px', textAlign: 'center',
                            display: 'inline-block',
                          }}
                          onClick={e => e.stopPropagation()}
                        >
                          Bet Now
                        </a>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: '12px', display: 'flex', gap: '24px' }}>
                    <div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '2px' }}>{m.home.team} — Best odds</div>
                      <BestOdds bookmakers={m.bookmakers} type="home" />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '2px' }}>Draw — Best odds</div>
                      <BestOdds bookmakers={m.bookmakers} type="draw" />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '2px' }}>{m.away.team} — Best odds</div>
                      <BestOdds bookmakers={m.bookmakers} type="away" />
                    </div>
                  </div>
                  <p style={{ marginTop: '12px', fontSize: '11px', color: 'var(--muted)' }}>
                    Odds are indicative and subject to change. Always verify on the bookmaker&apos;s site. 18+ only.
                  </p>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--muted)' }}>
              No matches found for this group.
            </div>
          )}
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
