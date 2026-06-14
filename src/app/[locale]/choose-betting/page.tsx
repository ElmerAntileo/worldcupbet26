'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGeo } from '@/hooks/useGeo';

const BETSSON_URL = 'https://record.betsson.com/C.ashx?btag=a_45907b_3&affid=25535&siteid=45907&adid=3&pid=3';
const ONEXBET_URL = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const PINNACLE_URL = 'https://www.pinnacle.com';

// World Cup final: July 19, 2026
const FINAL_DATE = new Date('2026-07-19T20:00:00Z');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = FINAL_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

const steps = [
  { n: 1, icon: '🖱️', title: 'Click the button below', desc: 'Opens Betsson in a new tab' },
  { n: 2, icon: '📝', title: 'Fill in your details', desc: 'Name, email, date of birth — takes 60 seconds' },
  { n: 3, icon: '💳', title: 'Make your first deposit', desc: 'Minimum €10 to activate the bonus' },
  { n: 4, icon: '🎁', title: 'Bonus credited instantly', desc: '100% matched up to €100 — ready to bet' },
];

const onexbetSteps = [
  { n: 1, icon: '🖱️', title: 'Click the button below', desc: 'Opens 1xBet in a new tab' },
  { n: 2, icon: '📝', title: 'Fill in your details', desc: 'Name, email, date of birth — takes 60 seconds' },
  { n: 3, icon: '💳', title: 'Make your first deposit', desc: 'Minimum €10 to activate the bonus' },
  { n: 4, icon: '🎁', title: 'Bonus credited instantly', desc: '100% up to €100 — ready to bet' },
];

const onexbetFaqs = [
  { q: 'Do I need a promo code for 1xBet?', a: 'No promo code needed. The bonus is applied automatically when you register through our link and make your first deposit.' },
  { q: 'Which countries can use 1xBet without a VPN?', a: '1xBet is available without a VPN in most of Latin America, Africa, Asia, and Eastern Europe. A VPN may be required in the UK, Germany, France, Netherlands, Spain, Sweden, and a few other European markets.' },
  { q: "What is 1xBet's minimum deposit?", a: '€10 to activate the 100% welcome bonus. Maximum bonus is €100.' },
  { q: 'How long does 1xBet registration take?', a: 'About 60 seconds. You need your name, email, and date of birth. No document upload required to start betting.' },
  { q: 'Does 1xBet have a mobile app?', a: 'Yes, 1xBet has a fast mobile app available for iOS and Android with full live betting support.' },
];

const bookmakers = [
  {
    id: 'betsson',
    name: 'Betsson',
    flag: '🟢',
    badge: '⭐ BEST CHOICE',
    badgeColor: '#00d084',
    badgeBg: 'rgba(0,208,132,0.15)',
    color: '#00d084',
    border: 'rgba(0,208,132,0.4)',
    bg: 'rgba(0,208,132,0.06)',
    bonus: '100% up to €100',
    bonusDetail: 'First deposit bonus — wagering 5x',
    url: BETSSON_URL,
    pros: ['No VPN needed — works worldwide', 'MGA licensed & regulated', 'Fast payouts (24–48h)', 'Live streaming included', '100+ World Cup markets'],
    cta: '🎁 CLAIM 100% BONUS NOW',
    ctaBg: 'linear-gradient(135deg, #00d084, #00b870)',
    ctaColor: '#040c18',
    ctaShadow: 'rgba(0,208,132,0.5)',
    note: '✅ No VPN required — instant access',
    highlighted: true,
  },
  {
    id: 'onexbet',
    name: '1xBet',
    flag: '🔵',
    badge: '💰 BEST IN-PLAY ODDS',
    badgeColor: '#60a5fa',
    badgeBg: 'rgba(59,130,246,0.15)',
    color: '#60a5fa',
    border: 'rgba(59,130,246,0.3)',
    bg: 'rgba(59,130,246,0.05)',
    bonus: '100% up to €100',
    bonusDetail: 'First deposit bonus — 200+ markets',
    url: ONEXBET_URL,
    pros: ['200+ markets per match', 'Best in-play odds', 'Huge live betting selection', 'Fast mobile app'],
    cta: '🎯 Claim 100% Bonus + 200 Markets Per Match →',
    ctaBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    ctaColor: '#fff',
    ctaShadow: 'rgba(59,130,246,0.4)',
    note: null, // computed dynamically from geo — see ChooseBetting component
    highlighted: false,
  },
  {
    id: 'pinnacle',
    name: 'Pinnacle',
    flag: '🌍',
    badge: '🏆 HIGH LIMITS',
    badgeColor: '#fbbf24',
    badgeBg: 'rgba(251,191,36,0.15)',
    color: '#fbbf24',
    border: 'rgba(251,191,36,0.3)',
    bg: 'rgba(251,191,36,0.04)',
    bonus: 'Best odds guarantee',
    bonusDetail: 'No bonus — lowest margin instead',
    url: PINNACLE_URL,
    pros: ['Works in 180+ countries', 'Highest betting limits', 'Lowest margin in industry', 'Great for sharp bettors', 'No withdrawal limits'],
    cta: '📊 ACCESS PINNACLE',
    ctaBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    ctaColor: '#040c18',
    ctaShadow: 'rgba(251,191,36,0.4)',
    note: '✅ Global access — no VPN needed',
    highlighted: false,
  },
];

export default function ChooseBetting() {
  const countdown = useCountdown();
  const [active, setActive] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { is1xBetRestricted, loading: geoLoading } = useGeo();

  // Geo-aware strings for 1xBet — shown once ipapi.co resolves the visitor's country.
  // While loading we default to no warning (optimistic) to avoid false positives.
  const onexbetGeoPro = is1xBetRestricted
    ? '⚠️ VPN may be needed in your region'
    : '✅ Available in your region — no VPN needed';
  const onexbetGeoNote = is1xBetRestricted
    ? '⚠️ VPN may be required in your region'
    : '✅ Available in your region — no VPN needed';

  return (
    <div style={{
      background: 'linear-gradient(160deg, #040c18 0%, #071a30 50%, #040c18 100%)',
      minHeight: '100vh',
      color: '#fff',
      padding: '0 0 60px',
    }}>

      {/* URGENT TOP BAR */}
      <div style={{
        background: 'linear-gradient(90deg, #00d084, #00b870)',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 800,
        color: '#040c18',
        letterSpacing: '0.05em',
      }}>
        ⚽ WORLD CUP 2026 IS LIVE — CLAIM YOUR WELCOME BONUS BEFORE IT ENDS
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 0' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 800,
            color: '#ff6b6b',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            🎯 EXCLUSIVE WELCOME BONUSES — NEW CUSTOMERS ONLY
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 7vw, 58px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #fff 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Claim Your Betting Bonus<br />Before the World Cup Ends
          </h1>
          <p style={{ fontSize: '17px', color: '#aaa', maxWidth: '560px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Register today and get <strong style={{ color: '#fff' }}>100% matched up to €100</strong> on your first deposit.
            Takes 60 seconds. No promo code needed.
          </p>

          {/* COUNTDOWN */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '14px',
            padding: '20px 28px',
            display: 'inline-flex',
            gap: '28px',
            marginBottom: '8px',
          }}>
            {[
              { v: countdown.days, l: 'Days' },
              { v: countdown.hours, l: 'Hours' },
              { v: countdown.minutes, l: 'Min' },
              { v: countdown.seconds, l: 'Sec' },
            ].map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: '#00d084', lineHeight: 1, minWidth: '48px' }}>
                  {String(v).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '11px', color: '#888', fontWeight: 600, letterSpacing: '0.08em', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '6px' }}>until World Cup Final — Jul 19</div>
        </div>

        {/* BOOKMAKER CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
          {bookmakers.map((bk) => (
            <div key={bk.id}
              style={{
                background: bk.highlighted
                  ? 'linear-gradient(135deg, rgba(0,208,132,0.10) 0%, rgba(0,180,110,0.04) 100%)'
                  : bk.bg,
                border: `2px solid ${bk.highlighted ? bk.border : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px',
                padding: '28px 28px',
                position: 'relative',
                transition: 'border-color 0.2s',
                boxShadow: bk.highlighted ? '0 4px 40px rgba(0,208,132,0.12)' : 'none',
              }}
            >
              {/* Highlight ring on hover */}
              {bk.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
                  borderRadius: '18px',
                  border: '2px solid rgba(0,208,132,0.6)',
                  pointerEvents: 'none',
                }} />
              )}

              {/* Top row: Logo/badge + pros side by side */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>

                {/* Left: Logo + badge */}
                <div style={{ minWidth: '160px', flex: '0 0 auto', textAlign: 'center' }}>
                  {bk.highlighted && (
                    <div style={{
                      background: 'linear-gradient(135deg, #00d084, #00b870)',
                      color: '#040c18',
                      fontSize: '11px',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      display: 'inline-block',
                      marginBottom: '10px',
                    }}>
                      #1 RECOMMENDED
                    </div>
                  )}
                  <div style={{
                    background: bk.badgeBg,
                    border: `1px solid ${bk.border}`,
                    borderRadius: '10px',
                    padding: '16px',
                    marginBottom: '10px',
                  }}>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: bk.color }}>{bk.name}</div>
                    <div style={{ fontSize: '11px', color: bk.color, fontWeight: 700, letterSpacing: '0.05em', marginTop: '4px' }}>{bk.badge}</div>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '13px',
                  }}>
                    <div style={{ color: bk.color, fontWeight: 900, fontSize: '18px' }}>{bk.bonus}</div>
                    <div style={{ color: '#888', fontSize: '11px', marginTop: '3px' }}>{bk.bonusDetail}</div>
                  </div>
                </div>

                {/* Right: Pros + steps */}
                <div style={{ flex: '1 1 200px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', fontSize: '13px', lineHeight: 1.7 }}>
                    {/* For 1xBet append the geo-aware availability bullet; hide it while geo is loading */}
                    {[...bk.pros, ...(bk.id === 'onexbet' && !geoLoading ? [onexbetGeoPro] : [])].map((p, i) => (
                      <li key={i} style={{ color: p.includes('⚠️') ? '#ff8c00' : p.includes('✅') ? '#00d084' : '#ccc' }}>
                        <span style={{ marginRight: '8px', color: p.includes('⚠️') ? '#ff8c00' : p.includes('✅') ? '#00d084' : bk.color }}>
                          {p.includes('⚠️') ? '⚠️' : p.includes('✅') ? '✅' : '✓'}
                        </span>
                        {p.replace('⚠️ ', '').replace('✅ ', '')}
                      </li>
                    ))}
                  </ul>

                  {bk.id === 'betsson' && (
                    <div style={{
                      background: 'rgba(0,208,132,0.08)',
                      border: '1px solid rgba(0,208,132,0.2)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#00d084', marginBottom: '10px', letterSpacing: '0.05em' }}>
                        HOW TO CLAIM YOUR BONUS — 4 STEPS
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                        {steps.map((s) => (
                          <div key={s.n} style={{
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            fontSize: '12px',
                          }}>
                            <span style={{ fontSize: '16px' }}>{s.icon}</span>
                            <span style={{ color: '#00d084', fontWeight: 700, marginLeft: '6px' }}>Step {s.n}</span>
                            <div style={{ color: '#ddd', marginTop: '4px', fontWeight: 600 }}>{s.title}</div>
                            <div style={{ color: '#888', marginTop: '2px' }}>{s.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {bk.id === 'onexbet' && (
                    <>
                      {/* Pre-sell paragraph */}
                      <p style={{ fontSize: '13px', color: '#bbb', lineHeight: 1.65, marginBottom: '14px' }}>
                        1xBet is our recommended choice for in-play World Cup betting. With 200+ markets per match and the best live odds in our daily comparison, it&apos;s the sharper pick if you&apos;re betting during the match. The 100% welcome bonus up to €100 makes it worth registering even if you plan to use both bookmakers.
                      </p>

                      {/* 4-step claim guide */}
                      <div style={{
                        background: 'rgba(59,130,246,0.08)',
                        border: '1px solid rgba(59,130,246,0.2)',
                        borderRadius: '10px',
                        padding: '14px 16px',
                        marginBottom: '14px',
                      }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', marginBottom: '10px', letterSpacing: '0.05em' }}>
                          HOW TO CLAIM YOUR BONUS — 4 STEPS
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                          {onexbetSteps.map((s) => (
                            <div key={s.n} style={{
                              background: 'rgba(0,0,0,0.2)',
                              borderRadius: '8px',
                              padding: '10px 12px',
                              fontSize: '12px',
                            }}>
                              <span style={{ fontSize: '16px' }}>{s.icon}</span>
                              <span style={{ color: '#60a5fa', fontWeight: 700, marginLeft: '6px' }}>Step {s.n}</span>
                              <div style={{ color: '#ddd', marginTop: '4px', fontWeight: 600 }}>{s.title}</div>
                              <div style={{ color: '#888', marginTop: '2px' }}>{s.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* FAQ accordion */}
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', marginBottom: '10px', letterSpacing: '0.05em' }}>
                          FREQUENTLY ASKED QUESTIONS
                        </div>
                        {onexbetFaqs.map((faq, i) => (
                          <div key={i} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '6px', overflow: 'hidden' }}>
                            <button
                              onClick={() => setOpenFaq(openFaq === i ? null : i)}
                              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#ddd', padding: '10px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                              {faq.q}
                              <span style={{ color: '#60a5fa', marginLeft: '8px', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                            </button>
                            {openFaq === i && (
                              <div style={{ padding: '0 12px 10px', fontSize: '12px', color: '#888', lineHeight: 1.6 }}>
                                {faq.a}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom: CTA — always anchored to this card, full width */}
              <div style={{
                borderTop: `1px solid ${bk.highlighted ? 'rgba(0,208,132,0.2)' : 'rgba(255,255,255,0.07)'}`,
                paddingTop: '18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: '8px',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: bk.color, textAlign: 'center', marginBottom: '4px' }}>
                  Register with {bk.name}
                </div>
                {bk.id === 'onexbet' && (
                  <p style={{ fontSize: '13px', color: '#bbb', lineHeight: 1.65, textAlign: 'center', margin: '0 0 14px' }}>
                    1xBet is our pick for in-play World Cup betting — 200+ markets per match means you can find value even during the game. If 1xBet is available in your country, their odds consistently beat the competition on live markets. The 100% bonus up to €100 is credited instantly after your first deposit.
                  </p>
                )}
                <a
                  href={bk.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  onMouseEnter={() => setActive(bk.id)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    display: 'block',
                    background: bk.ctaBg,
                    color: bk.ctaColor,
                    padding: '18px 24px',
                    borderRadius: '12px',
                    fontWeight: 900,
                    fontSize: '16px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: active === bk.id
                      ? `0 12px 36px ${bk.ctaShadow}`
                      : `0 6px 20px ${bk.ctaShadow.replace('0.4', '0.25')}`,
                    transform: active === bk.id ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {bk.cta}
                </a>
                {/* 1xBet note is geo-aware; all other bookmakers use the static note */}
                {!geoLoading && (
                  <div style={{
                    fontSize: '12px',
                    color: bk.id === 'onexbet'
                      ? (is1xBetRestricted ? '#ff8c00' : '#00d084')
                      : '#888',
                    textAlign: 'center',
                  }}>
                    {bk.id === 'onexbet' ? onexbetGeoNote : bk.note}
                  </div>
                )}
                <div style={{ fontSize: '11px', color: '#555', textAlign: 'center' }}>18+ | T&Cs apply | Gamble responsibly</div>
                {/* 1xBet bonus review link */}
                {bk.id === 'onexbet' && (
                  <div style={{ textAlign: 'center', marginTop: '4px' }}>
                    <Link href="/1xbet-bonus" style={{ fontSize: '12px', color: '#60a5fa', textDecoration: 'underline' }}>
                      Full bonus review &amp; FAQ →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGES */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {[
            '🔒 Fully Licensed & Regulated',
            '⚡ Instant Deposits',
            '🎯 Verified Affiliate Links',
            '✅ No Hidden Fees',
            '🌍 Available Worldwide',
          ].map((b) => (
            <div key={b} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '12px',
              color: '#aaa',
              fontWeight: 600,
            }}>
              {b}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '28px 24px',
        }}>
          <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>
            Frequently Asked Questions
          </h3>
          {[
            { q: 'Do I need a promo code?', a: 'No promo code needed. The bonus is applied automatically when you register through our link and make your first deposit.' },
            { q: 'What is the minimum deposit?', a: 'Betsson requires a minimum deposit of €10 to activate the 100% welcome bonus. The maximum bonus is €100.' },
            { q: 'How long does registration take?', a: 'About 60 seconds. You need your name, email, date of birth, and a password. No document upload required to start.' },
            { q: 'What are the wagering requirements?', a: 'Betsson has a 5x wagering requirement on the bonus amount. This is one of the lowest in the industry.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{q}</div>
              <div style={{ fontSize: '13px', color: '#999', lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '12px', color: '#444', lineHeight: 1.8 }}>
          WorldCupBet26.com is an affiliate website. We may earn a commission when you register through our links at no extra cost to you.
          All bookmakers listed are licensed and regulated. 18+ only. Please gamble responsibly.
          <br />
          <a href="/responsible-gambling" style={{ color: '#666', textDecoration: 'underline' }}>Responsible Gambling</a>
        </div>
      </div>
    </div>
  );
}
