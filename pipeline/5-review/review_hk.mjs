#!/usr/bin/env node
/**
 * Stage 5 · 回归检核 (HK) — entry point.
 *
 * 与 review_cn.mjs / review_us.mjs 结构相同：读取 hk_selected.txt，抓取今日日线
 * 涨跌幅，取 top-10 涨幅 + top-10 跌幅，回查前一天 reports/<prev-date>/
 * 中的 hk_*_signals.json，统计共同特征，输出权重调整建议到
 * watchlist/hk_review.{md,json}。
 *
 * 不会修改任何评分源码 — 建议需人工评审。
 *
 *   npm run review:hk
 */

import { runReview } from './reviewCore.mjs';

runReview('hk').catch(e => {
  console.error('\n❌ review:hk 失败:', e.message);
  process.exit(1);
});
