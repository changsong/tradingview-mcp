/**
 * Shared CLI/CDP runner — uses direct CDP WebSocket calls via core modules.
 * Replaces execSync-based approach that couldn't persist CDP state across calls.
 *
 * Usage:
 *   import { runCli, sleep } from '../lib/runCli.mjs';
 *   const hc = await runCli('status');
 *   const sw = await runCli('symbol SSE:600519');
 */

import { connect } from '../../src/connection.js';
import * as coreChart from '../../src/core/chart.js';
import * as coreData from '../../src/core/data.js';

let _connected = false;
let _currentSymbol = null;

async function ensureConnected() {
  if (!_connected) {
    await connect();
    _connected = true;
  }
}

/**
 * Execute a CLI command via direct CDP (no execSync).
 * Supports: status, symbol, timeframe, ohlcv, data tables, quote, values
 * Returns the same { success: true, ... } shape as the CLI.
 */
export async function runCli(cmd) {
  try {
    await ensureConnected();
    const parts = cmd.trim().split(/\s+/);
    const action = parts[0];

    switch (action) {
      case 'status':
        return { success: true, cdp_connected: true };

      case 'symbol': {
        const sym = parts.slice(1).join(' ');
        const result = await coreChart.setSymbol({ symbol: sym });
        if (result?.success) _currentSymbol = sym;
        return result;
      }

      case 'timeframe':
        return await coreChart.setTimeframe({ timeframe: parts[1] });

      case 'ohlcv': {
        const nIdx = parts.indexOf('-n');
        const count = nIdx >= 0 ? parseInt(parts[nIdx + 1], 10) : 100;
        return await coreData.getOhlcv({ count, expectedSymbol: _currentSymbol });
      }

      case 'data': {
        if (parts[1] === 'tables') {
          const fIdx = parts.indexOf('--study_filter');
          const filter = fIdx >= 0 ? parts[fIdx + 1] : '';
          return await coreData.getPineTables({ study_filter: filter });
        }
        return null;
      }

      case 'values':
        return await coreData.getStudyValues();

      case 'quote':
        return await coreData.getQuote({ symbol: parts[1] || _currentSymbol || '' });

      default:
        console.warn(`[runCli] 不支持的命令: ${cmd}`);
        return null;
    }
  } catch {
    return null;
  }
}

export function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
