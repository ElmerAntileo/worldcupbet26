import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const teams: Record<string, {
  name: string; flag: string; odds: string;
  bg1: string; bg2: string; accent: string; textColor: string;
}> = {
  argentina: { name: 'Argentina', flag: '🇦🇷', odds: '5.00', bg1: '#4a90d9', bg2: '#1a5fa8', accent: '#ffffff', textColor: '#ffffff' },
  brazil:    { name: 'Brazil',    flag: '🇧🇷', odds: '4.00', bg1: '#009c3b', bg2: '#005a22', accent: '#FFDF00', textColor: '#ffffff' },
  france:    { name: 'France',    flag: '🇫🇷', odds: '6.00', bg1: '#002395', bg2: '#001270', accent: '#ED2939', textColor: '#ffffff' },
  england:   { name: 'England',   flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: '7.50', bg1: '#CC0000', bg2: '#880000', accent: '#ffffff', textColor: '#ffffff' },
  spain:     { name: 'Spain',     flag: '🇪🇸', odds: '8.00', bg1: '#AA151B', bg2: '#7a0f13', accent: '#F1BF00', textColor: '#ffffff' },
  germany:   { name: 'Germany',   flag: '🇩🇪', odds: '10.00', bg1: '#222222', bg2: '#111111', accent: '#FFCE00', textColor: '#ffffff' },
  portugal:  { name: 'Portugal',  flag: '🇵🇹', odds: '12.00', bg1: '#006600', bg2: '#004400', accent: '#FF0000', textColor: '#ffffff' },
  usa:       { name: 'USA',       flag: '🇺🇸', odds: '15.00', bg1: '#3C3B6E', bg2: '#1e1d47', accent: '#B22234', textColor: '#ffffff' },
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ team: string }> }
) {
  const { team: teamSlug } = await params;
  const team = teams[teamSlug];

  if (!team) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div style={{
        width: '1200px', height: '630px',
        background: `linear-gradient(135deg, ${team.bg1} 0%, ${team.bg2} 100%)`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', top: '-200px', right: '-150px', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', bottom: '-100px', left: '-100px', display: 'flex',
        }} />

        {/* Accent bar top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
          background: team.accent, display: 'flex',
        }} />

        {/* Flag */}
        <div style={{ fontSize: '96px', marginBottom: '20px', display: 'flex' }}>
          {team.flag}
        </div>

        {/* Team name */}
        <div style={{
          fontSize: '72px', fontWeight: 900, color: team.textColor,
          marginBottom: '8px', display: 'flex', letterSpacing: '-2px',
        }}>
          {team.name}
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '26px', color: 'rgba(255,255,255,0.80)',
          fontWeight: 600, marginBottom: '36px', display: 'flex',
        }}>
          World Cup 2026 Betting Odds
        </div>

        {/* Odds badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '32px',
          background: 'rgba(0,0,0,0.3)', borderRadius: '16px',
          padding: '20px 48px', marginBottom: '32px', border: `2px solid ${team.accent}`,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.08em' }}>BEST ODDS TO WIN</span>
            <span style={{ fontSize: '64px', fontWeight: 900, color: team.accent, lineHeight: 1.1 }}>{team.odds}</span>
          </div>
          <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.2)', display: 'flex' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {['Betsson', '1xBet', 'Bet365', 'Betway'].map(b => (
              <div key={b} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, display: 'flex' }}>
                ✓ {b}
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div style={{
          fontSize: '20px', color: 'rgba(255,255,255,0.5)',
          fontWeight: 700, letterSpacing: '0.05em', display: 'flex',
        }}>
          worldcupbet26.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
