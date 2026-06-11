/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const affiliateLink1xBet = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const bypassLink1xBet = `/api/geo-bypass/${encodeURIComponent(affiliateLink1xBet)}`;
const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function ChooseBetting() {
  const [country, setCountry] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/detect-country')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setLoading(false);
      })
      .catch(() => {
        setCountry('UNKNOWN');
        setLoading(false);
      });
  }, []);

  const handleGeoBypass = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(bypassLink1xBet, '_blank');
  };

  const handlePinnacle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLinkPinnacle, '_blank');
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #040c18 0%, #071a30 45%, #050e1c 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ fontSize: '18px', color: '#888' }}>Detecting your location...</p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(160deg, #040c18 0%, #071a30 45%, #050e1c 100%)',
      minHeight: '100vh',
      color: '#fff',
      padding: '40px 20px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* URGENT HERO SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '16px',
            fontWeight: 800,
            color: '#ff8787',
            letterSpacing: '0.1em',
            marginBottom: '12px',
            textTransform: 'uppercase',
            animation: 'pulse 2s infinite',
          }}>
            ⚡ WORLD CUP STARTS TODAY - CLAIM YOUR BONUS NOW
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 900,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #60a5fa 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Choose Your Sportsbook
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#fbbf24',
            maxWidth: '600px',
            margin: '0 auto 8px',
            lineHeight: 1.5,
            fontWeight: 600,
          }}>
            🎯 Located in: <strong>{country}</strong>
          </p>

          <p style={{
            fontSize: '14px',
            color: '#aaa',
            maxWidth: '600px',
            margin: '0 auto 20px',
            lineHeight: 1.6,
          }}>
            Pick your option and start betting NOW - offers available for TODAY only
          </p>
        </div>

        {/* OPTIONS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '60px' }}>

          {/* OPTION 1: PINNACLE */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,208,132,0.08) 0%, rgba(0,176,112,0.04) 100%)',
            border: '1px solid rgba(0,208,132,0.2)',
            borderRadius: '12px',
            padding: '32px 24px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0,208,132,0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,208,132,0.12) 0%, rgba(0,176,112,0.08) 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0,208,132,0.2)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,208,132,0.08) 0%, rgba(0,176,112,0.04) 100%)';
          }}>
            <div style={{
              background: 'rgba(0,208,132,0.15)',
              border: '1px solid rgba(0,208,132,0.3)',
              color: '#00d084',
              padding: '8px 16px',
              borderRadius: '999px',
              display: 'inline-block',
              marginBottom: '16px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              ✅ Instant Access
            </div>

            <h2 style={{
              fontSize: '32px',
              fontWeight: 900,
              marginBottom: '12px',
              color: '#00d084',
            }}>
              🌍 Pinnacle
            </h2>

            <p style={{
              fontSize: '14px',
              color: '#aaa',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              Works in 180+ countries<br />No VPN/Proxy needed<br />Instant access
            </p>

            <ul style={{
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#bbb',
              listStyle: 'none',
              padding: 0,
            }}>
              {[
                'Available worldwide (no geo-restrictions)',
                'Great World Cup odds',
                'Fast payouts',
                'Works on any device immediately',
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#00d084', marginRight: '8px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={affiliateLinkPinnacle}
              onClick={handlePinnacle}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #00d084, #00b870)',
                color: '#040c18',
                padding: 'clamp(16px, 4vw, 24px) clamp(28px, 8vw, 56px)',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: 'clamp(16px, 4vw, 22px)',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,208,132,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '3px solid rgba(0,255,136,0.5)',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,208,132,0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,208,132,0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.5)';
              }}
            >
              ✅ INSTANT ACCESS - SIGN UP NOW
            </a>

            <p style={{
              fontSize: '12px',
              color: '#00d084',
              fontWeight: 600,
              marginTop: '16px',
            }}>
              ✨ EASIEST OPTION - NO SETUP NEEDED
            </p>
          </div>

          {/* OPTION 2: 1xBET */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.04) 100%)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '12px',
            padding: '32px 24px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.08) 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.04) 100%)';
          }}>
            <div style={{
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              color: '#60a5fa',
              padding: '8px 16px',
              borderRadius: '999px',
              display: 'inline-block',
              marginBottom: '16px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              💰 Better Odds (VPN Required*)
            </div>

            <h2 style={{
              fontSize: '32px',
              fontWeight: 900,
              marginBottom: '12px',
              color: '#60a5fa',
            }}>
              1xBet*
            </h2>

            <p style={{
              fontSize: '14px',
              color: '#aaa',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              200+ markets & best odds<br />Higher limits<br />Live betting
            </p>

            <ul style={{
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#bbb',
              listStyle: 'none',
              padding: 0,
            }}>
              {[
                '200+ World Cup markets',
                'Live in-play betting',
                'Best odds on the market',
                'Highest payout limits',
                '⚠️ Requires VPN for your region*',
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <span style={{ color: item.includes('⚠️') ? '#ff6b6b' : '#60a5fa', marginRight: '8px' }}>
                    {item.includes('⚠️') ? '⚠️' : '✓'}
                  </span>
                  {item.replace('⚠️ ', '')}
                </li>
              ))}
            </ul>

            <a
              href={bypassLink1xBet}
              onClick={handleGeoBypass}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #ff8787, #ff6b6b)',
                color: '#fff',
                padding: 'clamp(16px, 4vw, 24px) clamp(28px, 8vw, 56px)',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: 'clamp(16px, 4vw, 22px)',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(255,107,107,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '3px solid rgba(255,136,136,0.6)',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,107,0.6)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255,155,155,0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,107,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,136,136,0.6)';
              }}
            >
              🚀 GET 100% BONUS - START NOW
            </a>

            <p style={{
              fontSize: '13px',
              color: '#fbbf24',
              fontWeight: 700,
              marginTop: '16px',
              animation: 'pulse 2s infinite',
            }}>
              ⏰ BONUS EXPIRES AFTER WORLD CUP - ACT NOW
            </p>
          </div>
        </div>

        {/* VPN INSTRUCTIONS */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(37,99,235,0.03) 100%)',
          border: '2px solid rgba(59,130,246,0.25)',
          borderRadius: '12px',
          padding: '40px 28px',
          marginBottom: '40px',
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 800,
            marginBottom: '16px',
            textAlign: 'center',
            color: '#60a5fa',
            letterSpacing: '-0.01em',
          }}>
            🔓 Need VPN? Here&apos;s How to Access 1xBet
          </h3>

          <p style={{
            fontSize: '14px',
            color: '#bbb',
            textAlign: 'center',
            marginBottom: '32px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}>
            1xBet requires a VPN from: Germany, UK, France, Netherlands, Spain, Sweden, Finland, Iceland & other restricted regions
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '14px',
            marginBottom: '28px',
          }}>
            {[
              { step: 1, icon: '📥', title: 'Get VPN', desc: 'Download Tor Browser (free & safe)' },
              { step: 2, icon: '⚙️', title: 'Connect', desc: 'Choose Canada, US or allowed country' },
              { step: 3, icon: '🌐', title: 'Open 1xBet', desc: 'Keep VPN active while betting' },
              { step: 4, icon: '✅', title: 'Sign Up', desc: 'Create account & start betting' },
            ].map((item) => (
              <div key={item.step} style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.04) 100%)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: '9px',
                padding: '18px 14px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.08) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(37,99,235,0.04) 100%)';
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px', lineHeight: 1 }}>{item.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#60a5fa', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Step {item.step}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#e0e0e0', marginBottom: '6px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '11px', color: '#999', lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(0,208,132,0.08)',
            border: '1px solid rgba(0,208,132,0.2)',
            borderRadius: '8px',
            padding: '14px 16px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#aaa',
          }}>
            💡 <strong style={{ color: '#00d084' }}>Recommended:</strong> Tor Browser is free, safe &amp; easy. Download from <a href="https://torproject.org" target="_blank" rel="noopener noreferrer" style={{ color: '#00d084', textDecoration: 'none', fontWeight: 700 }}>torproject.org</a>
          </div>
        </div>

        {/* COMPARISON */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '32px 24px',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 800,
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            Quick Comparison
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#00d084', marginBottom: '12px' }}>
                ✅ Pinnacle
              </h4>
              <ul style={{
                fontSize: '13px',
                color: '#aaa',
                listStyle: 'none',
                padding: 0,
                lineHeight: 1.8,
              }}>
                {[
                  'Works immediately - no VPN needed',
                  'Available in 180+ countries',
                  'Great World Cup odds',
                  'Perfect for most users',
                ].map((item, i) => (
                  <li key={i}>
                    <span style={{ color: '#00d084', marginRight: '8px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#60a5fa', marginBottom: '12px' }}>
                🎯 1xBet
              </h4>
              <ul style={{
                fontSize: '13px',
                color: '#aaa',
                listStyle: 'none',
                padding: 0,
                lineHeight: 1.8,
              }}>
                {[
                  'Requires VPN for restricted regions',
                  'More betting markets (200+)',
                  'Better odds on some matches',
                  'Higher betting limits',
                ].map((item, i) => (
                  <li key={i}>
                    <span style={{ color: item.includes('Requires') ? '#ff6b6b' : '#60a5fa', marginRight: '8px' }}>
                      {item.includes('Requires') ? '⚠️' : '✓'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '12px',
          color: '#666',
        }}>
          * VPN required for: Germany, UK, France, Netherlands, Spain, Sweden, Finland, Iceland, and other restricted regions.
        </div>
      </div>
    </div>
  );
}
