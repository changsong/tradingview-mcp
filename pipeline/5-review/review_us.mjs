#!/usr/bin/env node
/**
 * Stage 5 · 回归检核 (US) — entry point.
 *
 * Same flow as review_cn.mjs but operates on us_selected.txt and us_*_signals.json.
 *
 *   npm run review:us
 */

import { runReview } from './reviewCore.mjs';

runReview('us').catch(e => {
  console.error('\n❌ review:us failed:', e.message);
  process.exit(1);
});
