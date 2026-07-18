#!/usr/bin/env node
/**
 * WorldCupBet26 — Auto-Surveillance Monitor
 * Checks: site uptime, affiliate links, 1xPartners stats, traffic
 * Alerts via Telegram when issues detected
 * Run: node scripts/monitor.js
 * Cron: every 2 hours → 0 slash2 * * * node /path/to/scripts/monitor.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// ── CONFIG ────────────────────────────────────────────────────────────────────
const CONFIG = {
  site: 'https://www.worldcupbet26.com',
  affiliateLinks: [
    { name: '1xBet',   url: 'https://reffpa.com/L?tag=d_5617152m_97c_&site=5617152&ad=97' },
    { name: 'Betsson', url: 'https://record.betsson.com/_2mAn34GNrh0d2bMnnkYwymNd7ZgqdRLk/1/' },
  ],
  // 1xPartners API (fill in after getting API key from 1xPartners dashboard → API section)
  oneXPartners: {
    apiKey: process.env.ONEX_API_KEY || '',
    affiliateId: '4396658',
    apiBase: 'https://1xpartners.com/api/',
  },
  // Telegram bot for alerts (fill in or set env vars)
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || '',
  },
  // Alert thresholds
  thresholds: {
    zeroDaysBeforeAlert: 2,      // alert if 0 direct links for 2+ days
    minDailyClicksExpected: 50,  // alert if clicks drop below this during active periods
  },
  stateFile: path.join(__dirname, '.monitor-state.json'),
  logFile: path.join(__dirname, 'monitor.log'),
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(CONFIG.logFile, line + '\n');
}

function loadState() {
  try { return JSON.parse(fs.readFileSync(CONFIG.stateFile, 'utf8')); }
  catch { return { zeroDaysCount: 0, lastAlertDate: null, history: [] }; }
}

function saveState(state) {
  fs.writeFileSync(CONFIG.stateFile, JSON.stringify(state, null, 2));
}

function httpCheck(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { timeout: 10000 }, (res) => {
      resolve({ ok: res.statusCode < 400, status: res.statusCode, redirectUrl: res.headers.location || '' });
    });
    req.on('error', (e) => resolve({ ok: false, status: 0, error: e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0, error: 'timeout' }); });
  });
}

async function sendTelegram(message) {
  if (!CONFIG.telegram.botToken || !CONFIG.telegram.chatId) {
    log('⚠️  Telegram not configured — skipping alert');
    return;
  }
  const body = JSON.stringify({ chat_id: CONFIG.telegram.chatId, text: message, parse_mode: 'Markdown' });
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${CONFIG.telegram.botToken}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, (res) => { resolve(res.statusCode); });
    req.on('error', (e) => { log(`Telegram error: ${e.message}`); resolve(0); });
    req.write(body);
    req.end();
  });
}

// ── 1xPARTNERS API ────────────────────────────────────────────────────────────
async function fetch1xPartnersStats() {
  if (!CONFIG.oneXPartners.apiKey) {
    log('⚠️  1xPartners API key not set — skipping stats pull');
    return null;
  }
  // API docs: https://1xpartners.com/api/documentation (requires partner login to view)
  // Endpoint returns daily stats: clicks, registrations, deposits, commission
  return new Promise((resolve) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const body = JSON.stringify({
      apiKey: CONFIG.oneXPartners.apiKey,
      dateFrom: yesterday,
      dateTo: today,
      currency: 'USD',
    });
    const req = https.request({
      hostname: '1xpartners.com',
      path: '/api/getStatistics',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve(null); }
      });
    });
    req.on('error', (e) => { log(`1xPartners API error: ${e.message}`); resolve(null); });
    req.write(body);
    req.end();
  });
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function runMonitor() {
  log('━━━ WorldCupBet26 Monitor START ━━━');
  const state = loadState();
  const alerts = [];
  const report = [];

  // 1. Site uptime
  const siteCheck = await httpCheck(CONFIG.site);
  if (siteCheck.ok) {
    log(`✅ Site UP — ${CONFIG.site} → ${siteCheck.status}`);
    report.push(`✅ Site: UP (${siteCheck.status})`);
  } else {
    log(`❌ Site DOWN — ${CONFIG.site} → ${siteCheck.status || siteCheck.error}`);
    report.push(`❌ Site: DOWN`);
    alerts.push(`🚨 *SITE DOWN*\n${CONFIG.site} returned ${siteCheck.status || siteCheck.error}`);
  }

  // 2. Affiliate links
  for (const link of CONFIG.affiliateLinks) {
    const check = await httpCheck(link.url);
    if (check.ok || [301,302,303].includes(check.status)) {
      log(`✅ ${link.name} link OK → ${check.status}`);
      report.push(`✅ ${link.name}: redirect OK (${check.status})`);
    } else {
      log(`❌ ${link.name} link BROKEN → ${check.status || check.error}`);
      report.push(`❌ ${link.name}: BROKEN`);
      alerts.push(`🔗 *${link.name} affiliate link BROKEN*\nStatus: ${check.status || check.error}\nURL: ${link.url}`);
    }
  }

  // 3. 1xPartners stats
  const stats = await fetch1xPartnersStats();
  if (stats) {
    const directLinks = stats.directLinks || 0;
    const registrations = stats.registrations || 0;
    const commission = stats.commissionAmount || 0;
    log(`📊 Stats — DirectLinks: ${directLinks}, Registrations: ${registrations}, Commission: $${commission}`);
    report.push(`📊 Stats: ${directLinks} clicks | ${registrations} registrations | $${commission} commission`);

    // Track zero-click days
    if (directLinks === 0) {
      state.zeroDaysCount = (state.zeroDaysCount || 0) + 1;
      if (state.zeroDaysCount >= CONFIG.thresholds.zeroDaysBeforeAlert) {
        alerts.push(`📉 *ZERO TRAFFIC ALERT*\n${state.zeroDaysCount} consecutive days with 0 Direct Links on 1xBet.\nAction needed: check traffic sources, post on social media.`);
      }
    } else {
      state.zeroDaysCount = 0;
    }

    // Store in history
    state.history = state.history || [];
    state.history.push({ date: new Date().toISOString().split('T')[0], directLinks, registrations, commission });
    if (state.history.length > 90) state.history = state.history.slice(-90); // keep 90 days
  }

  // 4. Send alerts
  if (alerts.length > 0) {
    const alertMsg = `🌍 *WorldCupBet26 Alert*\n${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}\n\n${alerts.join('\n\n')}`;
    log(`🔔 Sending ${alerts.length} alert(s) via Telegram`);
    await sendTelegram(alertMsg);
  } else {
    log('✅ All checks passed — no alerts');
  }

  // 5. Save state
  state.lastRun = new Date().toISOString();
  saveState(state);

  // 6. Print summary
  log('━━━ SUMMARY ━━━');
  report.forEach(r => log(r));
  log('━━━ Monitor END ━━━\n');

  return { alerts, report, stats };
}

runMonitor().catch(e => log(`FATAL: ${e.message}`));
