#!/bin/bash
# WorldCupBet26 — Daily task runner
# Called 4x/day by cron: 9am, 1pm, 6pm, 9pm
set -e

PROJECT_DIR="$HOME/worldcupbet26"
LOG="$PROJECT_DIR/scripts/daily.log"
NODE="/Users/elmerantileo/node/bin/node"

echo "━━━ [$(date '+%Y-%m-%d %H:%M')] WorldCupBet26 Daily Run START ━━━" >> "$LOG"

# 1. Update StickyOddsBar with today's match
$NODE "$PROJECT_DIR/scripts/update-sticky-bar.js" >> "$LOG" 2>&1

# 2. Run health monitor
$NODE "$PROJECT_DIR/scripts/monitor.js" >> "$LOG" 2>&1

echo "━━━ [$(date '+%Y-%m-%d %H:%M')] Daily Run END ━━━" >> "$LOG"
