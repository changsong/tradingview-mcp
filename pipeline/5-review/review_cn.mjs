#!/usr/bin/env node
/**
 * Stage 5 · 回归检核 (CN) — entry point.
 *
 * Reads watchlist/cn_selected.txt, fetches today's daily change% for each,
 * picks top-10 gainers + top-10 losers, looks each up in the previous-day
 * snapshot (reports/<prev-date>/cn_*_signals.json), tallies common features,
 * and writes weight-adjustment recommendations to watchlist/cn_review.{md,json}.
 *
 * No source files are modified. Recommendations require human review.
 *
 *   npm run review:cn
 */

import { runReview } from './reviewCore.mjs';

runReview('cn').catch(e => {
  console.error('\n❌ review:cn 失败:', e.message);
  process.exit(1);
});
