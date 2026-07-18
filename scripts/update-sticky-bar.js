#!/usr/bin/env node
/**
 * WorldCupBet26 — Auto-update StickyOddsBar with today's match
 * Reads World Cup schedule, finds today's featured match, patches StickyOddsBar.tsx
 * Run: node scripts/update-sticky-bar.js
 * Cron: daily at 08:00 → 0 8 * * * node /path/to/scripts/update-sticky-bar.js
 */

const fs = require('fs');
const path = require('path');

const STICKY_BAR_PATH = path.join(__dirname, '../src/components/StickyOddsBar.tsx');

// World Cup 2026 match schedule (Group stage — add more as tournament progresses)
// Times in ET. Add odds as they become available (or pull from API).
const SCHEDULE = [
  // Group stage examples — extend this list with real schedule
  { date: '2026-06-11', home: 'Mexico',   homeFlag: '🇲🇽', away: 'South Africa', awayFlag: '🇿🇦', group: 'A', time: 'Jun 11',  home1: '1.65', draw: '3.70', away1: '5.50' },
  { date: '2026-06-18', home: 'Mexico',   homeFlag: '🇲🇽', away: 'South Korea',  awayFlag: '🇰🇷', group: 'A', time: 'Jun 18',  home1: '1.95', draw: '3.30', away1: '3.80' },
  { date: '2026-06-18', home: 'Canada',   homeFlag: '🇨🇦', away: 'Qatar',        awayFlag: '🇶🇦', group: 'B', time: 'Jun 18',  home1: '1.29', draw: '5.50', away1: '9.00' },
  { date: '2026-06-18', home: 'Czechia',  homeFlag: '🇨🇿', away: 'South Africa', awayFlag: '🇿🇦', group: 'A', time: 'Jun 18',  home1: '1.80', draw: '3.40', away1: '4.80' },
  { date: '2026-06-18', home: 'Switzerland', homeFlag: '🇨🇭', away: 'Bosnia-Hz', awayFlag: '🇧🇦', group: 'H', time: 'Jun 18',  home1: '1.56', draw: '4.00', away1: '6.00' },
  // Add more matches here as the tournament progresses
];

function getTodayMatch() {
  const today = new Date().toISOString().split('T')[0];
  // Find first match today, or most recent past match if no match today
  const todayMatches = SCHEDULE.filter(m => m.date === today);
  if (todayMatches.length > 0) return todayMatches[0];

  // Fall back to most recent past match
  const past = SCHEDULE.filter(m => m.date <= today).sort((a, b) => b.date.localeCompare(a.date));
  return past[0] || SCHEDULE[0];
}

function updateStickyBar(match) {
  let content = fs.readFileSync(STICKY_BAR_PATH, 'utf8');

  // Update match label — find the line with "vs" inside the match label span
  const matchLabelRegex = /(<span[^>]*muted-light[^>]*>[\s\S]*?)(\S+ vs \S+.*?)(<\/span>)/;
  if (matchLabelRegex.test(content)) {
    content = content.replace(matchLabelRegex,
      `<span style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted-light)", whiteSpace: "nowrap" }}>\n            ${match.homeFlag} ${match.home} vs ${match.away} ${match.awayFlag}\n          </span>`
    );
  }

  // Update date label
  content = content.replace(/·\s*Jun\s+\d+/, `· ${match.time}`);

  // Update odds
  content = content.replace(/home: "\d+\.\d+"/, `home: "${match.home1}"`);
  content = content.replace(/draw: "\d+\.\d+"/, `draw: "${match.draw}"`);
  content = content.replace(/away: "\d+\.\d+"/, `away: "${match.away1}"`);

  fs.writeFileSync(STICKY_BAR_PATH, content);
  console.log(`✅ StickyOddsBar updated → ${match.homeFlag} ${match.home} vs ${match.away} ${match.awayFlag} (${match.time})`);
}

const match = getTodayMatch();
console.log(`📅 Today's featured match: ${match.home} vs ${match.away} on ${match.date}`);
updateStickyBar(match);
