/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const affiliateLink1xBet = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const affiliateLinkPinnacle = 'https://www.pinnacle.com';

export default function Access1xBet() {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const worldCupDate = new Date('2026-06-11').getTime();
    const today = new Date().getTime();
    const days = Math.ceil((worldCupDate - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(Math.max(0, days));
  }, []);

  const handleClickAffiliate = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>

        {/* COUNTDOWN */}
        <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#ff6b6b',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          ⚽ WORLD CUP 2026 IN {daysLeft} DAYS
        </div>

        {/* MASSIVE 1xBET HEADING */}
        <h1 style={{
          fontSize: 'clamp(60px, 12vw, 120px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: '20px',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          1xBET
        </h1>

        {/* SUBHEADING */}
        <p style={{
          fontSize: 'clamp(18px, 4vw, 32px)',
          color: '#bbb',
          marginBottom: '40px',
          fontWeight: 600,
          lineHeight: 1.4,
        }}>
          Best Odds • 200+ Markets • Live Betting
        </p>

        {/* HUGE BONUS BOX */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,107,107,0.25) 0%, rgba(255,193,7,0.2) 100%)',
          border: '4px solid rgba(255,107,107,0.6)',
          borderRadius: '16px',
          padding: '40px 30px',
          marginBottom: '40px',
          boxShadow: '0 10px 40px rgba(255,107,107,0.2)',
        }}>
          <div style={{
            fontSize: '16px',
            color: '#fbbf24',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            🎁 WELCOME BONUS
          </div>

          <div style={{
            fontSize: 'clamp(36px, 8vw, 64px)',
            fontWeight: 900,
            color: '#ff8787',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            100% UP TO €100
          </div>

          <div style={{
            fontSize: '18px',
            color: '#ffb74d',
            fontWeight: 600,
          }}>
            CLAIM NOW BEFORE WORLD CUP STARTS
          </div>
        </div>

        {/* MAIN CTA BUTTON - HUGE AND UNMISSABLE */}
        <a
          href={affiliateLink1xBet}
          onClick={handleClickAffiliate}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: '#fff',
            padding: 'clamp(20px, 5vw, 32px) clamp(40px, 10vw, 80px)',
            borderRadius: '14px',
            fontWeight: 900,
            fontSize: 'clamp(20px, 5vw, 40px)',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(59,130,246,0.4)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '32px',
            border: '3px solid rgba(96,165,250,0.6)',
            width: '100%',
            maxWidth: '600px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(59,130,246,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.4)';
          }}
        >
          🎯 Claim 100% Bonus + 200 Markets Per Match →
        </a>

        {/* QUICK FACTS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {[
            { num: '200+', text: 'Markets' },
            { num: '⚡', text: 'Live Betting' },
            { num: '🏧', text: 'Fast Payouts' },
            { num: '🛡️', text: 'Licensed' },
          ].map((fact) => (
            <div key={fact.text} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '12px',
              color: '#aaa',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>{fact.num}</div>
              {fact.text}
            </div>
          ))}
        </div>

        {/* VPN SECTION - MINIMAL BUT CLEAR */}
        <div style={{
          background: 'rgba(255,193,7,0.08)',
          border: '2px solid rgba(255,193,7,0.2)',
          borderRadius: '12px',
          padding: '24px 20px',
          marginBottom: '32px',
        }}>
          <div style={{
            fontSize: '14px',
            color: '#fbbf24',
            fontWeight: 700,
            marginBottom: '12px',
          }}>
            ⚠️ RESTRICTED IN YOUR COUNTRY?
          </div>

          <p style={{
            fontSize: '13px',
            color: '#bbb',
            marginBottom: '12px',
            lineHeight: 1.6,
          }}>
            If you&apos;re in Germany, UK, France, Netherlands, Spain, Sweden, Finland, or Iceland: download Tor Browser (free), select US/Canada exit, keep it active while signing up.
          </p>

          <div style={{
            background: 'rgba(0,208,132,0.1)',
            border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '11px',
            color: '#999',
          }}>
            💡 Download Tor from torproject.org (free &amp; safe)
          </div>
        </div>

        {/* BACKUP OPTION */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <p style={{ fontSize: '13px', color: '#999', marginBottom: '12px' }}>
            Can&apos;t access 1xBet?
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
              padding: '10px 24px',
              border: '2px solid rgba(0,208,132,0.4)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,208,132,0.8)';
              e.currentTarget.style.color = '#00f084';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,208,132,0.4)';
              e.currentTarget.style.color = '#00d084';
            }}
          >
            Try Pinnacle (works everywhere)
          </a>
        </div>

      </div>
    </div>
  );
}
