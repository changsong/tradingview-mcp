/**
 * prune_watchlist.mjs — remove stocks with Avoid/Short signals from watchlist
 *
 * Reads the just-generated *_news_signals.json, finds stocks flagged as
 * 规避 / Avoid / Short, and removes them from the corresponding *_selected.txt.
 */

import { readFileSync, writeFileSync } from 'fs';

/**
 * @param {string} symbolsFile  path to e.g. ./watchlist/cn_selected.txt
 * @param {string} signalsFile  path to e.g. ./watchlist/cn_news_signals.json
 * @param {'cn'|'us'|'hk'} market
 * @returns {{ kept: string[], removed: string[] }}
 */
export function pruneWatchlist(symbolsFile, signalsFile, market) {
  const json = JSON.parse(readFileSync(signalsFile, 'utf8'));
  const stocks = json.stocks || {};

  const isAvoid = (signal) => {
    const keyword = market === 'cn' ? '规避' : 'Avoid';
    return signal.includes(keyword) || signal.includes('Short');
  };

  const badSet = new Set(
    Object.entries(stocks)
      .filter(([, s]) => isAvoid(s.signal))
      .map(([sym]) => sym)
  );

  if (badSet.size === 0) return { kept: [], removed: [] };

  const raw = readFileSync(symbolsFile, 'utf8').trim();
  const symbols = raw ? raw.split(',').map(s => s.trim()).filter(Boolean) : [];

  const kept = symbols.filter(s => !badSet.has(s));
  const removed = symbols.filter(s => badSet.has(s));

  if (removed.length > 0) {
    writeFileSync(symbolsFile, kept.join(',') + '\n', 'utf8');
  }

  return { kept, removed };
}
