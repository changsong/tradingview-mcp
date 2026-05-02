/**
 * Daily snapshot helper — copies watchlist/<market>_*.{md,json} to reports/<YYYY-MM-DD>/
 * Called from pipeline/4-combined/analyze_*_combined.mjs at the end of each run.
 *
 * Usage:
 *   import { snapshotMarket } from '../lib/snapshot.mjs';
 *   snapshotMarket('cn');     // → reports/2026-05-02/cn_*.{md,json}
 */

import { readdirSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const WATCHLIST_DIR = './watchlist';
const REPORTS_DIR   = './reports';

/**
 * @param {'cn'|'us'} market
 * @returns {{date: string, dir: string, files: string[]}}
 */
export function snapshotMarket(market) {
  const date = new Date().toISOString().slice(0, 10);
  const dir  = join(REPORTS_DIR, date);
  mkdirSync(dir, { recursive: true });

  const prefix = `${market}_`;
  const files = [];
  if (existsSync(WATCHLIST_DIR)) {
    for (const f of readdirSync(WATCHLIST_DIR)) {
      if (!f.startsWith(prefix)) continue;
      if (!/\.(md|json)$/.test(f)) continue;
      copyFileSync(join(WATCHLIST_DIR, f), join(dir, f));
      files.push(f);
    }
  }
  return { date, dir, files };
}
