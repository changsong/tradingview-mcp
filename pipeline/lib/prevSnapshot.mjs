/**
 * Resolve "most recent reports/<date>/ that is earlier than today" for a given market.
 *
 * Throws a loud error if no usable snapshot is found — Stage 5 cannot run without
 * yesterday's news + tech signals to use as the reference for today's actual moves.
 */

import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const REPORTS_DIR = './reports';
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * @param {'cn'|'us'} market
 * @param {string} todayISO  e.g. "2026-05-13" — must be strict ISO date
 * @returns {{ dir: string, date: string }}
 */
export function findPrevSnapshot(market, todayISO) {
  if (!DATE_RE.test(todayISO)) {
    throw new Error(`findPrevSnapshot: bad todayISO "${todayISO}", expected YYYY-MM-DD`);
  }
  if (!existsSync(REPORTS_DIR)) {
    throw new Error(`findPrevSnapshot: ${REPORTS_DIR} 目录不存在`);
  }

  const dirs = readdirSync(REPORTS_DIR)
    .filter(n => DATE_RE.test(n) && n < todayISO)
    .sort((a, b) => b.localeCompare(a));

  for (const d of dirs) {
    const full = join(REPORTS_DIR, d);
    if (
      existsSync(join(full, `${market}_news_signals.json`)) &&
      existsSync(join(full, `${market}_tech_signals.json`))
    ) {
      return { dir: full, date: d };
    }
  }

  throw new Error(
    `findPrevSnapshot: 未找到包含 ${market}_news_signals.json + ${market}_tech_signals.json ` +
    `且早于 ${todayISO} 的 reports/<date>/ — 请先运行 \`npm run combined:${market}\` 生成快照。`
  );
}
