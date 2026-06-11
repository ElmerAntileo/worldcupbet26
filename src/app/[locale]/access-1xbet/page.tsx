/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const affiliateLink1xBet = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function Access1xBet() {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    // Calculate days until World Cup 2026 (June 11, 2026)
    const worldCupDate = new Date('2026-06-11').getTime();
    const today = new Date().getTime();
    const days = Math.ceil((worldCupDate - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(Math.max(0, days));
  }, []);

  const handle1xBet = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLink1xBet, '_blank');
  };

  const handlePinnacle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(affiliateLinkPinnacle, '_blank');
  };

  return (
    <div style={{
      background: 'linear-gradient(160deg, #040c18 0%, #071a30 45%, #050e1c 100%)',
      minHeight: '100vh',
      color: '#fff',
      padding: '40px 20px 60px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* COUNTDOWN HERO */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#00d084',
            letterSpacing: '0.08em',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}>
            ⚽ WORLD CUP 2026 COUNTDOWN
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 52px)',
            fontWeight: 900,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ff6b6b 55%, #ff8787 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {daysLeft} DAYS LEFT TO PREPARE
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#aaa',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            FIFA World Cup 2026 starts June 11 • Get your 1xBet account ready NOW
          </p>
        </div>

        {/* MAIN CTA SECTION */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.05) 100%)',
          border: '2px solid rgba(59,130,246,0.3)',
          borderRadius: '14px',
          padding: '40px 32px',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
          <div style={{
            background: 'rgba(59,130,246,0.2)',
            border: '1px solid rgba(59,130,246,0.4)',
            color: '#60a5fa',
            padding: '10px 20px',
            borderRadius: '999px',
            display: 'inline-block',
            marginBottom: '20px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            🎯 BEST ODDS & 200+ MARKETS
          </div>

          <div style={{
            fontSize: '80px',
            marginBottom: '20px',
            lineHeight: 1,
          }}>
            🎯
          </div>

          <h2 style={{
            fontSize: '48px',
            fontWeight: 900,
            marginBottom: '8px',
            color: '#60a5fa',
            letterSpacing: '-0.02em',
          }}>
            1xBet
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#aaa',
            marginBottom: '20px',
          }}>
            World Cup Betting
          </p>

          <p style={{
            fontSize: '18px',
            color: '#bbb',
            marginBottom: '12px',
            lineHeight: 1.6,
          }}>
            The #1 choice for serious bettors • Live betting • Instant payouts • 24/7 support
          </p>

          {/* BONUS BOX - HUGE & ATTRACTIVE */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(255,193,7,0.15) 100%)',
            border: '3px solid rgba(255,107,107,0.5)',
            borderRadius: '12px',
            padding: '24px 20px',
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '14px',
              color: '#ffb74d',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              💰 WELCOME BONUS 💰
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 900,
              color: '#ff8787',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}>
              100% UP TO €100
            </div>
            <div style={{
              fontSize: '15px',
              color: '#ffb74d',
              fontWeight: 600,
            }}>
              ⚡ Claim it before World Cup starts!
            </div>
          </div>

          {/* MAIN BUTTON */}
          <a
            href={affiliateLink1xBet}
            onClick={handle1xBet}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#fff',
              padding: '18px 48px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(59,130,246,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(59,130,246,0.3)';
            }}
          >
            🚀 SIGN UP AT 1xBET NOW → GET BONUS
          </a>

          <p style={{
            fontSize: '12px',
            color: '#999',
            marginTop: '12px',
          }}>
            2 minutes signup • No credit card required • Instant access
          </p>
        </div>

        {/* VPN REQUIREMENT SECTION */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(245,127,23,0.04) 100%)',
          border: '2px solid rgba(255,193,7,0.2)',
          borderRadius: '12px',
          padding: '32px 28px',
          marginBottom: '40px',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 800,
            marginBottom: '16px',
            textAlign: 'center',
            color: '#fbbf24',
          }}>
            ⚠️ Restricted in Your Country? Use VPN
          </h3>

          <p style={{
            fontSize: '14px',
            color: '#bbb',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: 1.6,
          }}>
            If you&rsquo;re in Germany, UK, France, Netherlands, Spain, Sweden, Finland, or Iceland, follow these 4 steps:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '14px',
            marginBottom: '24px',
          }}>
            {[
              { num: '1', icon: '📥', text: 'Download Tor Browser (free)' },
              { num: '2', icon: '⚙️', text: 'Select US/Canada exit' },
              { num: '3', icon: '🌐', text: 'Keep VPN active' },
              { num: '4', icon: '✅', text: 'Sign up to 1xBet' },
            ].map((step) => (
              <div key={step.num} style={{
                background: 'linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(245,127,23,0.05) 100%)',
                border: '1px solid rgba(255,193,7,0.2)',
                borderRadius: '8px',
                padding: '16px 12px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{step.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#fbbf24', marginBottom: '4px' }}>
                  STEP {step.num}
                </div>
                <div style={{ fontSize: '12px', color: '#ccc', lineHeight: 1.4 }}>
                  {step.text}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(0,208,132,0.1)',
            border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: '8px',
            padding: '12px 14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#999',
          }}>
            💡 <strong style={{ color: '#00d084' }}>Pro tip:</strong> Tor Browser is 100% free & safe. Download from torproject.org
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '32px 28px',
          marginBottom: '40px',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 800,
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            Why Choose 1xBet?
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: '🎯', title: '200+ Markets', desc: 'Every possible World Cup bet' },
              { icon: '⚡', title: 'Live Betting', desc: 'In-play odds during matches' },
              { icon: '💰', title: 'Best Odds', desc: 'Highest payouts in the industry' },
              { icon: '🏧', title: 'Fast Payouts', desc: 'Withdraw instantly' },
              { icon: '🛡️', title: 'Secure', desc: 'Licensed & regulated' },
              { icon: '💬', title: '24/7 Support', desc: 'Help anytime you need it' },
            ].map((benefit) => (
              <div key={benefit.title} style={{
                textAlign: 'center',
                padding: '16px',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{benefit.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#e0e0e0', marginBottom: '4px' }}>
                  {benefit.title}
                </div>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BACKUP OPTION */}
        <div style={{
          textAlign: 'center',
          padding: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '12px' }}>
            Can&apos;t access 1xBet? No problem.
          </p>
          <a
            href={affiliateLinkPinnacle}
            onClick={handlePinnacle}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: '#00d084',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '14px',
              padding: '10px 20px',
              border: '1px solid rgba(0,208,132,0.3)',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,208,132,0.6)';
              e.currentTarget.style.color = '#00f084';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,208,132,0.3)';
              e.currentTarget.style.color = '#00d084';
            }}
          >
            Try Pinnacle (works everywhere) →
          </a>
        </div>
      </div>
    </div>
  );
}
