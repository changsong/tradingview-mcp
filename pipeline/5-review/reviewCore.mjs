/**
 * Stage 5 — 回归检核 (Regression validation) core.
 *
 * Shared logic for both `review_cn.mjs` and `review_us.mjs`.
 *
 * Flow:
 *   1. Read watchlist/<market>_selected.txt
 *   2. For each symbol: chart switch → daily TF → fetch 2 daily bars → compute change%
 *   3. Sort by change%; pick top-10 gainers + top-10 losers
 *   4. Hydrate each ticker with features from PREVIOUS day's snapshot
 *      (reports/<prev-date>/<market>_{news,tech}_signals.json)
 *   5. Tally categorical features across each group
 *   6. Find features that are "common to gainers" (≥50% rate, Δ≥30pp vs losers) and vice-versa
 *   7. Map back to file:line via WEIGHT_SOURCES; produce weight-adjustment recommendations
 *   8. Write watchlist/<market>_review.{md,json} + snapshot to reports/<today>/
 *
 * No source files are auto-edited. Recommendations are output-only for human review.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import { runCli, sleep } from '../lib/runCli.mjs';
import { findPrevSnapshot } from '../lib/prevSnapshot.mjs';
import { extractNewsFeatures, extractTechFeatures, getWeightSources } from '../lib/featureExtract.mjs';
import { snapshotMarket } from '../lib/snapshot.mjs';

// Pin CWD to repo root so ./watchlist works regardless of how the script is invoked
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ───── Tunable thresholds ───────────────────────────────────────────────────
const TOP_N           = 10;     // top-N gainers + top-N losers
const GAIN_RATE_MIN   = 0.5;    // feature appears in ≥50% of gainers
const LOSS_RATE_MIN   = 0.5;
const DIFF_THRESHOLD  = 0.3;    // gain_rate - loss_rate ≥ 30pp
const SWITCH_DELAY_MS = 1700;   // wait after symbol switch for chart load
const TF_SETTLE_MS    = 600;    // wait after timeframe switch

const UP_FACTOR   = 1.25;       // recommended weight bump for gainer features
const DOWN_FACTOR = 0.75;       // recommended weight shrink for loser features

// ═══════════════════════════════════════════════════════════════════════════
//  Public entry
// ═══════════════════════════════════════════════════════════════════════════
/**
 * @param {'cn'|'us'|'hk'} market
 */
export async function runReview(market) {
  const tag = market.toUpperCase();
  const selectedPath = `./watchlist/${market}_selected.txt`;
  const outJson      = `./watchlist/${market}_review.json`;
  const outMd        = `./watchlist/${market}_review.md`;

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Stage 5 · 回归检核 (${tag})`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  // ── 1. Load selected universe ────────────────────────────────────────────
  if (!existsSync(selectedPath)) {
    throw new Error(`Selected file 不存在: ${selectedPath} — 请先 npm run scan:${market}`);
  }
  const raw = readFileSync(selectedPath, 'utf8').trim();
  const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];
  console.log(`📋 ${selectedPath}: ${symbols.length} 只`);

  // ── 2. Resolve previous snapshot ─────────────────────────────────────────
  const todayISO = new Date().toISOString().slice(0, 10);
  const { dir: prevDir, date: prevDate } = findPrevSnapshot(market, todayISO);
  console.log(`📂 对照快照: ${prevDir} (${prevDate})\n`);

  const prevNews = JSON.parse(readFileSync(join(prevDir, `${market}_news_signals.json`), 'utf8'));
  const prevTech = JSON.parse(readFileSync(join(prevDir, `${market}_tech_signals.json`), 'utf8'));

  // ── 3. Health check on TradingView ───────────────────────────────────────
  const hc = await runCli('status');
  if (!hc?.cdp_connected) {
    throw new Error(`TradingView 未连接 — 请先 scripts\\launch_tv_debug.bat 启动 (CDP 9222)`);
  }

  // ── 4. Per-symbol daily change % fetch ───────────────────────────────────
  console.log(`🔄 抓取今日日线涨跌幅 (~${(symbols.length * (SWITCH_DELAY_MS + TF_SETTLE_MS + 500) / 60000).toFixed(1)} min) ...`);
  const changes = [];
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    process.stdout.write(`  [${String(i + 1).padStart(3)}/${symbols.length}] ${sym.padEnd(18)} `);

    const sw = await runCli(`symbol ${sym}`);
    if (!sw?.success) {
      console.log('✗ symbol 切换失败');
      changes.push({ sym, ok: false, reason: 'switch_fail' });
      continue;
    }
    await sleep(SWITCH_DELAY_MS);

    // Force daily TF — tech stage may have left chart on 4H/1H
    await runCli('timeframe D');
    await sleep(TF_SETTLE_MS);

    const o = await runCli('ohlcv -n 2');
    if (!o?.success || !Array.isArray(o.bars) || o.bars.length < 2) {
      console.log('✗ ohlcv 失败');
      changes.push({ sym, ok: false, reason: 'ohlcv_fail' });
      continue;
    }
    const [prev, last] = o.bars.slice(-2);
    if (!prev?.close || !last?.close) {
      console.log('✗ ohlcv 数据缺失');
      changes.push({ sym, ok: false, reason: 'no_close' });
      continue;
    }
    const pct = (last.close - prev.close) / prev.close * 100;
    const techRec = prevTech.stocks?.[sym];
    const newsRec = prevNews.stocks?.[sym];
    const name = techRec?.name || newsRec?.name || sym;
    changes.push({
      sym, name, ok: true,
      prev_close: prev.close,
      close: last.close,
      change_pct: +pct.toFixed(2),
    });
    const dot = pct >= 0 ? '+' : '';
    console.log(`${dot}${pct.toFixed(2)}%`.padStart(8) + `  ${name}`);
  }

  // ── 5. Sort & pick top N ─────────────────────────────────────────────────
  const ok = changes.filter(c => c.ok);
  const failed = changes.filter(c => !c.ok);
  console.log(`\n✅ 成功 ${ok.length} 只, 失败 ${failed.length} 只`);
  if (ok.length < TOP_N * 2) {
    console.log(`⚠️  有效样本不足 ${TOP_N * 2} 只, top-N 会有重叠或不足`);
  }
  const sorted  = [...ok].sort((a, b) => b.change_pct - a.change_pct);
  const gainers = sorted.slice(0, TOP_N);
  const losers  = sorted.slice(-TOP_N).reverse();

  console.log(`\n🚀 涨幅 top-${TOP_N}:`);
  gainers.forEach((g, i) => console.log(`   ${i + 1}. ${g.sym.padEnd(18)} ${('+' + g.change_pct.toFixed(2) + '%').padStart(8)}  ${g.name}`));
  console.log(`\n📉 跌幅 top-${TOP_N}:`);
  losers.forEach((l, i) => console.log(`   ${i + 1}. ${l.sym.padEnd(18)} ${(l.change_pct.toFixed(2) + '%').padStart(8)}  ${l.name}`));

  // ── 6. Hydrate with prev-day features ────────────────────────────────────
  const hydrate = (c) => {
    const t = prevTech.stocks?.[c.sym];
    const n = prevNews.stocks?.[c.sym];
    const techFeats = t ? extractTechFeatures(t) : [];
    const newsFeats = n ? extractNewsFeatures(n) : [];
    return {
      ...c,
      in_prev_tech: !!t,
      in_prev_news: !!n,
      tech_score: t?.tech_score ?? null,
      news_score: n?.score ?? null,
      tech_type:  t?.type ?? null,
      tech_flags: t?.flags ?? [],
      news_signal: n?.signal ?? null,
      features: [...techFeats, ...newsFeats],
    };
  };
  const gH = gainers.map(hydrate);
  const lH = losers.map(hydrate);

  // ── 7. Tally feature counts ──────────────────────────────────────────────
  const tally = (group) => {
    const m = new Map();
    for (const s of group) for (const f of s.features) m.set(f.key, (m.get(f.key) ?? 0) + 1);
    return m;
  };
  const gT = tally(gH);
  const lT = tally(lH);
  const allKeys = new Set([...gT.keys(), ...lT.keys()]);
  const feature_stats = [...allKeys].map(k => {
    const gC = gT.get(k) ?? 0, lC = lT.get(k) ?? 0;
    return {
      key: k,
      gain_count: gC, loss_count: lC,
      gain_rate: +(gC / TOP_N).toFixed(2),
      loss_rate: +(lC / TOP_N).toFixed(2),
      diff: +((gC - lC) / TOP_N).toFixed(2),
    };
  }).sort((a, b) => b.diff - a.diff);

  const common_gainer_features = feature_stats
    .filter(s => s.gain_rate >= GAIN_RATE_MIN && s.diff >= DIFF_THRESHOLD)
    .sort((a, b) => b.diff - a.diff);
  const common_loser_features = feature_stats
    .filter(s => s.loss_rate >= LOSS_RATE_MIN && s.diff <= -DIFF_THRESHOLD)
    .sort((a, b) => a.diff - b.diff);

  // ── 8. Recommend weight adjustments ──────────────────────────────────────
  const WS = getWeightSources(market);
  const uncategorized = new Set();
  const recommend = (stat, direction) => {
    const src = WS[stat.key];
    if (!src) {
      uncategorized.add(stat.key);
      return {
        feature: stat.key, direction, status: 'uncategorized',
        rationale: `gainers ${stat.gain_count}/${TOP_N} vs losers ${stat.loss_count}/${TOP_N} (Δ=${Math.round(stat.diff * 100)}pp)`,
      };
    }
    const factor = direction === 'up' ? UP_FACTOR : DOWN_FACTOR;
    const recVal = typeof src.current === 'number'
      ? Math.round(src.current * factor)
      : null;
    return {
      feature: stat.key,
      direction,
      layer: src.layer,
      source_path: src.source_path,
      source_label: src.source_label,
      current_weight: src.current,
      recommended_weight: recVal,
      rationale: `gainers ${stat.gain_count}/${TOP_N} vs losers ${stat.loss_count}/${TOP_N} (Δ=${Math.round(stat.diff * 100)}pp)`,
    };
  };
  const weight_recommendations = [
    ...common_gainer_features.map(s => recommend(s, 'up')),
    ...common_loser_features.map(s => recommend(s, 'down')),
  ];

  // ── 9. Emit outputs ──────────────────────────────────────────────────────
  const out = {
    generated_at: new Date().toISOString(),
    market,
    target_date: todayISO,
    prev_snapshot_date: prevDate,
    prev_snapshot_dir: prevDir.replace(/\\/g, '/'),
    universe_size: symbols.length,
    fetched_ok: ok.length,
    fetched_fail: failed.map(f => ({ sym: f.sym, reason: f.reason })),
    thresholds: {
      top_n: TOP_N,
      gain_rate_min: GAIN_RATE_MIN,
      loss_rate_min: LOSS_RATE_MIN,
      diff_threshold: DIFF_THRESHOLD,
      up_factor: UP_FACTOR,
      down_factor: DOWN_FACTOR,
    },
    gainers: gH,
    losers:  lH,
    feature_stats,
    common_gainer_features,
    common_loser_features,
    weight_recommendations,
    uncategorized_features: [...uncategorized],
  };

  writeFileSync(outJson, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\n✅ JSON: ${outJson}`);

  writeFileSync(outMd, renderMd(out, market), 'utf8');
  console.log(`✅ MD:   ${outMd}`);

  const snap = snapshotMarket(market);
  console.log(`📸 快照: ${snap.dir} (${snap.files.length} 个文件)\n`);

  return out;
}

// ═══════════════════════════════════════════════════════════════════════════
//  Markdown rendering
// ═══════════════════════════════════════════════════════════════════════════
function renderMd(out, market) {
  const tag = market.toUpperCase();
  const L = [];
  const p = s => L.push(s);
  const fmtPct = v => (v >= 0 ? '+' : '') + v.toFixed(2) + '%';

  p(`# 回归检核报告 · ${tag} — ${out.target_date}`);
  p('');
  p(`**对照快照:** \`${out.prev_snapshot_dir}\` (${out.prev_snapshot_date})`);
  p(`**池子:** ${out.universe_size} 只 (成功 ${out.fetched_ok} / 失败 ${out.fetched_fail.length})`);
  p(`**阈值:** top-N=${out.thresholds.top_n}, 出现率≥${out.thresholds.gain_rate_min * 100}%, Δ≥${out.thresholds.diff_threshold * 100}pp`);
  p('');
  p('---');
  p('');

  // Gainers table
  p(`## 🚀 涨幅前 ${out.thresholds.top_n}`);
  p('');
  p('| # | 名称 | 代码 | 涨幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |');
  p('|---|------|------|------|--------|--------|---------|-----------|');
  out.gainers.forEach((g, i) => {
    p(`| ${i + 1} | **${g.name}** | ${g.sym} | **${fmtPct(g.change_pct)}** | ${g.tech_score ?? '-'} | ${g.news_score ?? '-'} | ${g.tech_type ?? '-'} | ${(g.tech_flags ?? []).join('/') || '-'} |`);
  });
  p('');

  // Losers table
  p(`## 📉 跌幅前 ${out.thresholds.top_n}`);
  p('');
  p('| # | 名称 | 代码 | 跌幅 | 昨Tech | 昨News | 昨日类型 | 昨日Flags |');
  p('|---|------|------|------|--------|--------|---------|-----------|');
  out.losers.forEach((l, i) => {
    p(`| ${i + 1} | **${l.name}** | ${l.sym} | **${fmtPct(l.change_pct)}** | ${l.tech_score ?? '-'} | ${l.news_score ?? '-'} | ${l.tech_type ?? '-'} | ${(l.tech_flags ?? []).join('/') || '-'} |`);
  });
  p('');
  p('---');
  p('');

  // Common gainer features
  p(`## ✅ 涨幅共同特征 (出现率 ≥${out.thresholds.gain_rate_min * 100}% 且 Δ ≥${out.thresholds.diff_threshold * 100}pp)`);
  p('');
  if (out.common_gainer_features.length === 0) {
    p('> 无显著共同特征 — 当日涨幅由特异性事件驱动,无法归纳统一权重调整。');
  } else {
    p('| 特征 | 涨幅出现 | 跌幅出现 | Δ |');
    p('|------|---------|---------|---|');
    out.common_gainer_features.forEach(s => {
      p(`| \`${s.key}\` | ${s.gain_count}/${out.thresholds.top_n} | ${s.loss_count}/${out.thresholds.top_n} | +${Math.round(s.diff * 100)}pp |`);
    });
  }
  p('');

  // Common loser features
  p(`## ❌ 跌幅共同特征 (出现率 ≥${out.thresholds.loss_rate_min * 100}% 且 Δ ≤-${out.thresholds.diff_threshold * 100}pp)`);
  p('');
  if (out.common_loser_features.length === 0) {
    p('> 无显著共同特征。');
  } else {
    p('| 特征 | 涨幅出现 | 跌幅出现 | Δ |');
    p('|------|---------|---------|---|');
    out.common_loser_features.forEach(s => {
      p(`| \`${s.key}\` | ${s.gain_count}/${out.thresholds.top_n} | ${s.loss_count}/${out.thresholds.top_n} | ${Math.round(s.diff * 100)}pp |`);
    });
  }
  p('');
  p('---');
  p('');

  // Weight recommendations
  p(`## 🔧 权重调整建议 (人工评审,脚本不会自动改源码)`);
  p('');
  const recsMapped = out.weight_recommendations.filter(r => r.status !== 'uncategorized');
  const recsUnmapped = out.weight_recommendations.filter(r => r.status === 'uncategorized');
  if (recsMapped.length === 0) {
    p('> 当日无可映射的权重建议。');
  } else {
    recsMapped.forEach(r => {
      const arrow = r.direction === 'up' ? '↑' : '↓';
      const curW = r.current_weight ?? '(非数值)';
      const newW = r.recommended_weight ?? '(人工评估)';
      p(`- ${arrow} **\`${r.feature}\`** — ${r.source_label}`);
      p(`  - ${r.rationale}`);
      p(`  - 当前 ${curW} → **建议 ${newW}** — \`${r.source_path}\``);
    });
  }
  p('');
  if (recsUnmapped.length > 0) {
    p(`### 未分类特征 (待补 WEIGHT_SOURCES 映射 → \`pipeline/lib/featureExtract.mjs\`)`);
    p('');
    recsUnmapped.forEach(r => {
      const arrow = r.direction === 'up' ? '↑' : '↓';
      p(`- ${arrow} \`${r.feature}\` — ${r.rationale}`);
    });
    p('');
  }

  // Footer
  p('---');
  p('');
  p(`> ⚠️ 本脚本仅产出建议,**不修改任何评分源码**。请人工评审后手改对应 \`file:line\`。`);
  p('');
  p(`_报告生成: ${new Date().toLocaleString('zh-CN')}_`);
  p('');

  return L.join('\n');
}
