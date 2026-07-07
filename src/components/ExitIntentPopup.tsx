'use client';

import { useEffect, useState } from 'react';
import { useGeo } from '@/hooks/useGeo';
import { BLOCKED_COUNTRIES_BETSSON, BETWAY_PRIORITY_COUNTRIES } from '@/lib/geoConstants';

const BETSSON_ROW = 'https://record.betsson.com/_2mAn34GNrh2wcAgXsjz1uGNd7ZgqdRLk/1/';
const BETSSON_DE  = 'https://www.betsson.com/de/sport?affcode=AE3051334481&utm_medium=Affiliate&utm_source=10700602';
const ONEXBET_URL = 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97';
const BETWAY_URL  = '/api/redirect/betway';
const STORAGE_KEY = 'exit_popup_dismissed';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const { countryCode } = useGeo();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.location.pathname.includes('choose-betting')) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
    };

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

    if (isMobile) {
      // Mobile: trigger after 30s — no mouseleave on touch devices
      const mobileTimer = setTimeout(trigger, 30000);
      return () => clearTimeout(mobileTimer);
    }

    // Desktop: trigger on mouse leaving viewport from top after 5s on page
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) trigger();
    };

    // Also trigger on scroll-retreat (user scrolled down then back up fast = about to leave)
    let maxScroll = 0;
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur > maxScroll) maxScroll = cur;
      if (maxScroll > 400 && cur < maxScroll - 200) trigger();
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', onMouseLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  const betssonBlocked = countryCode !== null && (BLOCKED_COUNTRIES_BETSSON as readonly string[]).includes(countryCode);
  const betwayPriority = countryCode !== null && (BETWAY_PRIORITY_COUNTRIES as readonly string[]).includes(countryCode);
  const betssonUrl = countryCode === 'DE' ? BETSSON_DE : BETSSON_ROW;

  // For Betway priority countries (UK, ES, CA, MX, DE) promote Betway
  if (betwayPriority) {
    return (
      <div onClick={dismiss} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',backdropFilter:'blur(4px)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background:'linear-gradient(160deg,#071a30 0%,#040c18 100%)',border:'2px solid rgba(0,166,81,0.5)',borderRadius:'20px',padding:'40px 36px',maxWidth:'480px',width:'100%',textAlign:'center',boxShadow:'0 20px 80px rgba(0,166,81,0.2)',position:'relative' }}>
          <button onClick={dismiss} style={{ position:'absolute',top:'14px',right:'18px',background:'none',border:'none',color:'#666',fontSize:'22px',cursor:'pointer',lineHeight:1 }}>×</button>
          <div style={{ fontSize:'48px',marginBottom:'12px' }}>⚡</div>
          <div style={{ fontSize:'12px',fontWeight:800,color:'#00a651',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'10px' }}>
            Best odds for your region
          </div>
          <h2 style={{ fontSize:'clamp(22px,5vw,32px)',fontWeight:900,color:'#fff',marginBottom:'10px',lineHeight:1.2 }}>
            Bet on the World Cup<br />
            <span style={{ color:'#00a651' }}>with Betway</span>
          </h2>
          <p style={{ fontSize:'14px',color:'#aaa',marginBottom:'24px',lineHeight:1.6 }}>
            Licensed in your region · 100% Sports Welcome Bonus.<br />
            <strong style={{ color:'#fff' }}>Register in 60 seconds.</strong>
          </p>
          <a href={BETWAY_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" onClick={dismiss} style={{ display:'block',background:'linear-gradient(135deg,#00a651,#007a3c)',color:'#fff',padding:'18px 24px',borderRadius:'12px',fontWeight:900,fontSize:'17px',textDecoration:'none',boxShadow:'0 8px 30px rgba(0,166,81,0.4)',marginBottom:'14px' }}>
            ⚡ BET WITH BETWAY NOW
          </a>
          <button onClick={dismiss} style={{ background:'none',border:'none',color:'#555',fontSize:'12px',cursor:'pointer',textDecoration:'underline' }}>No thanks</button>
          <div style={{ fontSize:'11px',color:'#444',marginTop:'14px' }}>18+ | T&Cs apply | Gamble responsibly</div>
        </div>
      </div>
    );
  }

  // For countries where Betsson is blocked, promote 1xBet instead
  if (betssonBlocked) {
    return (
      <div onClick={dismiss} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',backdropFilter:'blur(4px)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background:'linear-gradient(160deg,#071a30 0%,#040c18 100%)',border:'2px solid rgba(0,208,132,0.5)',borderRadius:'20px',padding:'40px 36px',maxWidth:'480px',width:'100%',textAlign:'center',boxShadow:'0 20px 80px rgba(0,208,132,0.2)',position:'relative' }}>
          <button onClick={dismiss} style={{ position:'absolute',top:'14px',right:'18px',background:'none',border:'none',color:'#666',fontSize:'22px',cursor:'pointer',lineHeight:1 }}>×</button>
          <div style={{ fontSize:'48px',marginBottom:'12px' }}>🎯</div>
          <div style={{ fontSize:'12px',fontWeight:800,color:'#ff6b6b',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'10px' }}>
            Best odds for your region
          </div>
          <h2 style={{ fontSize:'clamp(22px,5vw,32px)',fontWeight:900,color:'#fff',marginBottom:'10px',lineHeight:1.2 }}>
            Bet on the World Cup<br />
            <span style={{ color:'#00d084' }}>with 1xBet</span>
          </h2>
          <p style={{ fontSize:'14px',color:'#aaa',marginBottom:'24px',lineHeight:1.6 }}>
            150+ countries · 50+ sports · World Cup live odds.<br />
            <strong style={{ color:'#fff' }}>Register in 60 seconds.</strong>
          </p>
          <a href={ONEXBET_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" onClick={dismiss} style={{ display:'block',background:'linear-gradient(135deg,#00d084,#00b870)',color:'#040c18',padding:'18px 24px',borderRadius:'12px',fontWeight:900,fontSize:'17px',textDecoration:'none',boxShadow:'0 8px 30px rgba(0,208,132,0.4)',marginBottom:'14px' }}>
            🎯 BET WITH 1XBET NOW
          </a>
          <button onClick={dismiss} style={{ background:'none',border:'none',color:'#555',fontSize:'12px',cursor:'pointer',textDecoration:'underline' }}>No thanks</button>
          <div style={{ fontSize:'11px',color:'#444',marginTop:'14px' }}>18+ | T&Cs apply | Gamble responsibly</div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={dismiss} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',backdropFilter:'blur(4px)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',padding:'20px' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background:'linear-gradient(160deg,#071a30 0%,#040c18 100%)',border:'2px solid rgba(0,208,132,0.5)',borderRadius:'20px',padding:'40px 36px',maxWidth:'480px',width:'100%',textAlign:'center',boxShadow:'0 20px 80px rgba(0,208,132,0.2)',position:'relative' }}>
        <button onClick={dismiss} style={{ position:'absolute',top:'14px',right:'18px',background:'none',border:'none',color:'#666',fontSize:'22px',cursor:'pointer',lineHeight:1 }}>×</button>
        <div style={{ fontSize:'48px',marginBottom:'12px' }}>🎁</div>
        <div style={{ fontSize:'12px',fontWeight:800,color:'#ff6b6b',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'10px' }}>
          Wait — Don&apos;t miss your bonus!
        </div>
        <h2 style={{ fontSize:'clamp(22px,5vw,32px)',fontWeight:900,color:'#fff',marginBottom:'10px',lineHeight:1.2 }}>
          Get 100% Matched<br />
          <span style={{ color:'#00d084' }}>Up to €100 Free</span>
        </h2>
        <p style={{ fontSize:'14px',color:'#aaa',marginBottom:'24px',lineHeight:1.6 }}>
          Register with Betsson now and your first deposit is matched 100%.
          <br />
          <strong style={{ color:'#fff' }}>Takes 60 seconds. No promo code needed.</strong>
        </p>
        <div style={{ display:'flex',justifyContent:'center',gap:'8px',marginBottom:'24px',flexWrap:'wrap' }}>
          {['1. Sign up','2. Deposit €10+','3. Get up to €100'].map((s) => (
            <div key={s} style={{ background:'rgba(0,208,132,0.1)',border:'1px solid rgba(0,208,132,0.25)',borderRadius:'999px',padding:'6px 14px',fontSize:'12px',fontWeight:700,color:'#00d084' }}>{s}</div>
          ))}
        </div>
        <a href={betssonUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" onClick={dismiss} style={{ display:'block',background:'linear-gradient(135deg,#00d084,#00b870)',color:'#040c18',padding:'18px 24px',borderRadius:'12px',fontWeight:900,fontSize:'17px',textDecoration:'none',boxShadow:'0 8px 30px rgba(0,208,132,0.4)',marginBottom:'14px' }}>
          🎁 CLAIM MY BONUS NOW
        </a>
        <button onClick={dismiss} style={{ background:'none',border:'none',color:'#555',fontSize:'12px',cursor:'pointer',textDecoration:'underline' }}>No thanks, I don&apos;t want a bonus</button>
        <div style={{ fontSize:'11px',color:'#444',marginTop:'14px' }}>18+ | T&Cs apply | Gamble responsibly</div>
      </div>
    </div>
  );
}
