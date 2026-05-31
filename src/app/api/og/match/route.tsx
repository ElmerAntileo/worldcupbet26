import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * Match Odds Card — 1080×1080 (Instagram / TikTok square)
 *
 * Query params:
 *   home   — home team name         (e.g. "Mexico")
 *   hflag  — home flag emoji        (e.g. "🇲🇽")
 *   away   — away team name         (e.g. "South Africa")
 *   aflag  — away flag emoji        (e.g. "🇿🇦")
 *   ho     — home odds              (e.g. "1.65")
 *   draw   — draw odds              (e.g. "3.70")
 *   ao     — away odds              (e.g. "5.50")
 *   date   — match date label       (e.g. "Jun 11, 2026")
 *   group  — group label            (e.g. "Group A — Opening Match")
 *   tip    — optional tip text      (e.g. "Mexico to Win @ 1.65")
 *   book   — optional bookmaker     (e.g. "Betsson")
 *
 * Usage:
 *   /api/og/match?home=Mexico&hflag=🇲🇽&away=South+Africa&aflag=🇿🇦&ho=1.65&draw=3.70&ao=5.50&date=Jun+11%2C+2026&group=Group+A&tip=Mexico+to+Win&book=Betsson
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const home  = searchParams.get('home')  || 'Team A';
  const hflag = searchParams.get('hflag') || '🏳️';
  const away  = searchParams.get('away')  || 'Team B';
  const aflag = searchParams.get('aflag') || '🏳️';
  const ho    = searchParams.get('ho')    || '—';
  const draw  = searchParams.get('draw')  || '—';
  const ao    = searchParams.get('ao')    || '—';
  const date  = searchParams.get('date')  || 'Jun 2026';
  const group = searchParams.get('group') || 'Group Stage';
  const tip   = searchParams.get('tip')   || null;
  const book  = searchParams.get('book')  || 'Betsson';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1080px',
          height: '1080px',
          background: 'linear-gradient(160deg, #040c18 0%, #071a30 50%, #050e1c 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,208,132,0.06) 0%, transparent 70%)',
          top: '-200px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,208,132,0.04) 0%, transparent 70%)',
          bottom: '-100px', right: '-100px',
          display: 'flex',
        }} />

        {/* Top brand bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '32px 48px 0',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0,208,132,0.12)',
            border: '1.5px solid rgba(0,208,132,0.35)',
            borderRadius: '40px',
            padding: '8px 20px',
          }}>
            <div style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: '#00d084',
              display: 'flex',
            }} />
            <span style={{ color: '#00d084', fontSize: '18px', fontWeight: 700, letterSpacing: '0.06em' }}>
              FIFA WORLD CUP 2026™
            </span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '18px', fontWeight: 700 }}>
            worldcupbet26.com
          </span>
        </div>

        {/* Group & date */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '36px',
          gap: '8px',
        }}>
          <span style={{
            background: 'rgba(0,208,132,0.15)',
            border: '1px solid rgba(0,208,132,0.4)',
            borderRadius: '8px',
            padding: '6px 18px',
            color: '#00d084',
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '0.06em',
          }}>
            {group.toUpperCase()}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', fontWeight: 600 }}>
            📅 {date}
          </span>
        </div>

        {/* Teams + VS */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          marginTop: '44px',
          width: '100%',
          padding: '0 40px',
        }}>
          {/* Home team */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            gap: '12px',
          }}>
            <span style={{ fontSize: '100px', lineHeight: 1 }}>{hflag}</span>
            <span style={{
              fontSize: '32px', fontWeight: 900, color: '#ffffff',
              textAlign: 'center', lineHeight: 1.2,
            }}>{home}</span>
            <div style={{
              background: 'rgba(0,208,132,0.12)',
              border: '2px solid rgba(0,208,132,0.4)',
              borderRadius: '12px',
              padding: '10px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em' }}>WIN</span>
              <span style={{ color: '#00d084', fontSize: '44px', fontWeight: 900, lineHeight: 1 }}>{ho}</span>
            </div>
          </div>

          {/* VS + Draw */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '0 24px',
            marginBottom: '20px',
          }}>
            <span style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '36px', fontWeight: 900,
              letterSpacing: '0.05em',
            }}>VS</span>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '8px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>DRAW</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '30px', fontWeight: 800 }}>{draw}</span>
            </div>
          </div>

          {/* Away team */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            gap: '12px',
          }}>
            <span style={{ fontSize: '100px', lineHeight: 1 }}>{aflag}</span>
            <span style={{
              fontSize: '32px', fontWeight: 900, color: '#ffffff',
              textAlign: 'center', lineHeight: 1.2,
            }}>{away}</span>
            <div style={{
              background: 'rgba(0,208,132,0.08)',
              border: '1.5px solid rgba(0,208,132,0.25)',
              borderRadius: '12px',
              padding: '10px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em' }}>WIN</span>
              <span style={{ color: '#00d084', fontSize: '44px', fontWeight: 900, lineHeight: 1 }}>{ao}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '880px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,208,132,0.3), transparent)',
          marginTop: '44px',
          display: 'flex',
        }} />

        {/* Expert tip (if provided) */}
        {tip ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '32px',
            background: 'rgba(0,208,132,0.10)',
            border: '1.5px solid rgba(0,208,132,0.35)',
            borderRadius: '16px',
            padding: '20px 36px',
            maxWidth: '900px',
            width: '100%',
          }}>
            <span style={{ fontSize: '28px' }}>💡</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#00d084', fontSize: '15px', fontWeight: 700, letterSpacing: '0.06em' }}>
                EXPERT TIP — {book.toUpperCase()}
              </span>
              <span style={{ color: '#ffffff', fontSize: '26px', fontWeight: 900 }}>{tip}</span>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginTop: '36px',
          }}>
            {[
              { label: 'Best Odds', val: book },
              { label: 'Tournament', val: 'Jun 11 – Jul 19' },
              { label: 'Compare at', val: 'worldcupbet26.com' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#00d084', fontSize: '22px', fontWeight: 800 }}>{s.val}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontWeight: 600 }}>{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom bar */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '64px',
          background: 'rgba(0,208,132,0.08)',
          borderTop: '1px solid rgba(0,208,132,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
        }}>
          <span style={{ color: '#00d084', fontSize: '22px', fontWeight: 900, letterSpacing: '-0.5px' }}>
            WorldCupBet26
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', fontWeight: 600 }}>
            18+ · Gamble Responsibly · T&Cs Apply
          </span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '16px', fontWeight: 700 }}>
            Compare odds → worldcupbet26.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
