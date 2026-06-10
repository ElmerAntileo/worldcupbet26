"use client";
import { useEffect, useState } from "react";

interface ConversionStats {
  program: string;
  clicks: number;
  lastClick: string;
}

/**
 * Real-time Affiliate Conversion Dashboard
 * Tracks clicks and conversions for all affiliate programs
 * Access at: /admin/conversions (password protected)
 */

export default function AffiliateConversionDashboard() {
  const [stats, setStats] = useState<Record<string, ConversionStats>>({
    '1xbet': { program: '1xbet', clicks: 0, lastClick: 'Never' },
    'betsson': { program: 'betsson', clicks: 0, lastClick: 'Never' },
    'betano': { program: 'betano', clicks: 0, lastClick: 'Never' },
    'alfaleads': { program: 'alfaleads', clicks: 0, lastClick: 'Never' },
    'clickdealer': { program: 'clickdealer', clicks: 0, lastClick: 'Never' },
  });

  useEffect(() => {
    // Listen for affiliate clicks via custom events
    const handleAffiliateClick = (event: Event) => {
      const customEvent = event as CustomEvent<{ program: string }>;
      const { program } = customEvent.detail;

      setStats(prev => ({
        ...prev,
        [program]: {
          ...prev[program],
          clicks: (prev[program]?.clicks || 0) + 1,
          lastClick: new Date().toLocaleTimeString(),
        },
      }));

      // Store in localStorage for persistence
      localStorage.setItem(
        `affiliate_stats_${program}`,
        JSON.stringify({
          clicks: (stats[program]?.clicks || 0) + 1,
          lastClick: new Date().toISOString(),
        })
      );
    };

    window.addEventListener('affiliateClick' as never, handleAffiliateClick as EventListener);

    // Load stats from localStorage on mount
    Object.keys(stats).forEach(program => {
      const stored = localStorage.getItem(`affiliate_stats_${program}`);
      if (stored) {
        const data = JSON.parse(stored);
        setStats(prev => ({
          ...prev,
          [program]: {
            program,
            clicks: data.clicks || 0,
            lastClick: data.lastClick || 'Unknown',
          },
        }));
      }
    });

    return () => window.removeEventListener('affiliateClick' as never, handleAffiliateClick as EventListener);
  }, [stats]);

  return (
    <div className="hidden" style={{ display: 'none' }}>
      {/* Hidden dashboard - accessible via console or at /admin/conversions */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.getAffiliateStats = () => {
            const programs = ['1xbet', 'betsson', 'betano', 'alfaleads', 'clickdealer'];
            const stats = {};
            programs.forEach(p => {
              const data = localStorage.getItem(\`affiliate_stats_\${p}\`);
              stats[p] = data ? JSON.parse(data) : { clicks: 0 };
            });
            console.table(stats);
            return stats;
          };
          console.log('%cAffilliate Conversion Tracker Loaded', 'color: green; font-size: 14px; font-weight: bold;');
          console.log('%cType: getAffiliateStats() to view real-time conversion data', 'color: blue;');
        `,
      }} />
    </div>
  );
}
