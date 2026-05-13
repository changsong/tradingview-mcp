/**
 * Shared CLI runner — extracted from pipeline/1-scan/scan_stocks.js
 *
 * Invokes `node src/cli/index.js <cmd>` and parses the JSON stdout.
 * Returns the parsed object (typically `{ success: true, ... }`) or `null` on failure.
 *
 * Usage:
 *   import { runCli, sleep } from '../lib/runCli.mjs';
 *   runCli('symbol SSE:600519');
 *   await sleep(1800);
 *   const o = runCli('ohlcv -n 2');
 */

import { execSync } from 'child_process';

const CLI = 'node src/cli/index.js';

export function runCli(cmd) {
  try {
    const out = execSync(`${CLI} ${cmd}`, {
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return JSON.parse(out);
  } catch {
    return null;
  }
}

export function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
