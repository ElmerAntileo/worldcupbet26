'use client';

import { useEffect, useState } from 'react';

const BETSSON_URL = 'https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/';
const STORAGE_KEY = 'exit_popup_dismissed';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    // Don't show on the choose-betting page
    if (window.location.pathname.includes('choose-betting')) return;

    let triggered = false;
    const onMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      // Only fire when cursor leaves through the top of the viewport
      if (e.clientY <= 5) {
        triggered = true;
        setVisible(true);
      }
    };

    // Delay attaching listener slightly so it doesn't fire on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', onMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(160deg, #071a30 0%, #040c18 100%)',
          border: '2px solid rgba(0,208,132,0.5)',
          borderRadius: '20px',
          padding: '40px 36px',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 80px rgba(0,208,132,0.2)',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          style={{
            position: 'absolute',
            top: '14px',
            right: '18px',
            background: 'none',
            border: 'none',
            color: '#666',
            fontSize: '22px',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Emoji + eyecatcher */}
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎁</div>

        <div style={{
          fontSize: '12px',
          fontWeight: 800,
          color: '#ff6b6b',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          Wait — Don&apos;t miss your bonus!
        </div>

        <h2 style={{
          fontSize: 'clamp(22px, 5vw, 32px)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '10px',
          lineHeight: 1.2,
        }}>
          Get 100% Matched<br />
          <span style={{ color: '#00d084' }}>Up to €100 Free</span>
        </h2>

        <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '24px', lineHeight: 1.6 }}>
          Register with Betsson now and your first deposit is matched 100%.
          <br />
          <strong style={{ color: '#fff' }}>Takes 60 seconds. No promo code needed.</strong>
        </p>

        {/* Steps condensed */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}>
          {['1. Sign up', '2. Deposit €10+', '3. Get up to €100'].map((s) => (
            <div key={s} style={{
              background: 'rgba(0,208,132,0.1)',
              border: '1px solid rgba(0,208,132,0.25)',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#00d084',
            }}>
              {s}
            </div>
          ))}
        </div>

        <a
          href={BETSSON_URL}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          onClick={dismiss}
          style={{
            display: 'block',
            background: 'linear-gradient(135deg, #00d084, #00b870)',
            color: '#040c18',
            padding: '18px 24px',
            borderRadius: '12px',
            fontWeight: 900,
            fontSize: '17px',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(0,208,132,0.4)',
            marginBottom: '14px',
          }}
        >
          🎁 CLAIM MY BONUS NOW
        </a>

        <button
          onClick={dismiss}
          style={{
            background: 'none',
            border: 'none',
            color: '#555',
            fontSize: '12px',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          No thanks, I don&apos;t want a bonus
        </button>

        <div style={{ fontSize: '11px', color: '#444', marginTop: '14px' }}>
          18+ | T&Cs apply | Gamble responsibly
        </div>
      </div>
    </div>
  );
}
