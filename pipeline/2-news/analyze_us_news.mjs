#!/usr/bin/env node
/**
 * US Stock News Sentiment → Tradeable Signals (v2)
 *
 * v2 changes:
 *  - Shared lib (pipeline/2-news/lib/) — same algorithms as CN
 *  - Cross-stock + noise pre-filter (DISREGARD / press release wraps)
 *  - title + content scoring + negation window
 *  - Three-stage weight: sourceAuthority × typeMul × recencyDecay
 *  - 0-100 normalized score (neutral=50)
 *  - LLM rerate enabled by default (--no-llm to disable)
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { performance } from 'node:perf_hooks';
import { searchUSNews } from '../../src/core/usNews.js';
import { analyzeStockData } from './lib/analyze.mjs';
import { filterRelevantCandidates } from './lib/relevance.mjs';
import { isLLMEnabled, MODEL } from './lib/llm_common.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ─── Config ──────────────────────────────────────────────────────────────────
const SYMBOLS_FILE = './watchlist/us_selected.txt';
const OUTPUT_MD    = './watchlist/us_news_signals.md';
const OUTPUT_JSON  = './watchlist/us_news_signals.json';
const DAYS_BACK    = 7;
const NEWS_COUNT   = 20;
const BATCH_SIZE   = 4;
const NEWS_ENRICH_TOP_N = parseInt(process.env.NEWS_US_ENRICH_TOP_N) || NEWS_COUNT;
const FORUM_ENRICH_TOP_N = parseInt(process.env.NEWS_US_FORUM_ENRICH_TOP_N) || Math.ceil(NEWS_COUNT / 3);
const MARKET       = 'us';

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];

const llmFlag = !process.argv.includes('--no-llm');

const msSince = start => Math.round(performance.now() - start);

function isInWindow(dateStr) {
  if (!dateStr) return false;
  const d = new Date(String(dateStr).slice(0, 10));
  return !Number.isNaN(d.getTime()) && d >= cutoff && d <= today;
}

function filterCandidatesForEnrichment(items, ctx) {
  const recent = (items || []).filter(item => isInWindow(item.date));
  const outOfWindow = (items || []).length - recent.length;
  const filtered = filterRelevantCandidates(recent, ctx.symbol, ctx.name, { market: MARKET });
  return {
    ...filtered,
    dropped: filtered.dropped + outOfWindow,
    reasons: {
      ...filtered.reasons,
      ...(outOfWindow ? { out_of_window: outOfWindow } : {}),
    },
  };
}

function sumPerformance(results, reportWriteMs = 0) {
  const totals = {
    list_fetch_ms: 0,
    enrichment_ms: 0,
    relevance_ms: 0,
    llm_ms: 0,
    report_write_ms: reportWriteMs,
  };
  for (const r of results) {
    const p = r.performance || {};
    totals.list_fetch_ms += p.list_fetch_ms || 0;
    totals.enrichment_ms += p.enrichment_ms || 0;
    totals.relevance_ms += p.relevance_ms || 0;
    totals.llm_ms += p.llm_ms || 0;
  }
  const divisor = Math.max(1, results.length);
  return {
    totals_ms: totals,
    avg_ms: Object.fromEntries(Object.entries(totals).map(([k, v]) => [k, Math.round(v / divisor)])),
  };
}

function logPerformanceSummary(perf) {
  const t = perf.totals_ms;
  const a = perf.avg_ms;
  console.log('\nPerformance summary (ms):');
  console.log(`  list_fetch   total=${t.list_fetch_ms} avg=${a.list_fetch_ms}`);
  console.log(`  enrichment   total=${t.enrichment_ms} avg=${a.enrichment_ms}`);
  console.log(`  relevance    total=${t.relevance_ms} avg=${a.relevance_ms}`);
  console.log(`  llm          total=${t.llm_ms} avg=${a.llm_ms}`);
  console.log(`  report_write total=${t.report_write_ms}`);
}

// ─── Lightweight ticker → company name map for cross-stock dedup ─────────────
// 不必完整；缺失时仅用 ticker 自身做主体校验。常用名可在此扩充。
const TICKER_NAMES = {
  AAPL: 'Apple', MSFT: 'Microsoft', GOOG: 'Alphabet', GOOGL: 'Alphabet',
  AMZN: 'Amazon', META: 'Meta', NVDA: 'Nvidia', TSLA: 'Tesla',
  NFLX: 'Netflix', AMD: 'AMD', INTC: 'Intel', AVGO: 'Broadcom',
  GRMN: 'Garmin', AAOI: 'Applied Optoelectronics', FN: 'Fabrinet',
};

function aliasesFor(symbol, ticker) {
  const aliases = [ticker];
  if (TICKER_NAMES[ticker]) aliases.push(TICKER_NAMES[ticker]);
  return aliases;
}

// ─── Per-stock pipeline ──────────────────────────────────────────────────────
async function analyzeStock(symbol) {
  const ticker = symbol.replace(/^(NASDAQ:|NYSE:|BATS:|CBOE:|AMEX:)/, '');
  process.stdout.write(`  [${symbol}] fetching...`);

  try {
    const aliases = aliasesFor(symbol, ticker);
    const result = await searchUSNews({
      symbol: ticker,
      name: aliases,
      source: 'news',
      count: NEWS_COUNT,
      enrich: 'candidate',
      candidateFilterFn: filterCandidatesForEnrichment,
      enrichTopN: NEWS_ENRICH_TOP_N,
      forumEnrichTopN: FORUM_ENRICH_TOP_N,
    });
    const allNews = result.news || [];

    const r = await analyzeStockData(allNews, {
      symbol,
      name:   aliases,
      today, cutoff,
      market: MARKET,
      // --no-llm: 显式注入 null 分类器 → 上层走 No Data 分支（不退回关键字）
      classifierFn: llmFlag ? undefined : async () => null,
    });

    process.stdout.write(` -> ${r.news_count} kept / ${r.news_dropped} filtered, score=${r.score}\n`);

    return {
      symbol,
      name: ticker,
      ...r,
      sources_status: result.sources_status,
      performance: {
        ...(result.performance || {}),
        ...(r.performance || {}),
      },
    };
  } catch (err) {
    process.stdout.write(` ERR ${err.message}\n`);
    return {
      symbol, name: ticker,
      score: 50, score_raw: 0,
      signal: 'NEUTRAL No Trade (Fetch Failed)', strategy: err.message,
      suitableFor: '-', confidence: '-',
      patterns: [], tagged: [],
      positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: 0,
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
    };
  }
}

// ─── Report ──────────────────────────────────────────────────────────────────
function formatDetail(r) {
  const lines = [];
  const h = s => lines.push(s);
  const sigIcon =
    r.signal.startsWith('GREEN') ? '🟢' :
    r.signal.startsWith('RED')   ? '🔴' :
    r.signal.startsWith('WARN')  ? '⚠️' : '⚪';
  const sigText = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');

  h(`### ${r.symbol}`);
  h('');
  h('| Metric | Detail |');
  h('|--------|--------|');
  h(`| Normalized Score | **${r.score}** / 100 |`);
  h(`| Raw Weighted Score | ${r.score_raw} |`);
  h(`| Trading Signal | **${sigIcon} ${sigText}** |`);
  h(`| Strategy | ${r.strategy} |`);
  h(`| Suitable For | ${r.suitableFor} |`);
  h(`| Confidence | ${r.confidence} |`);
  h(`| News Kept / Dropped | ${r.news_count} / ${r.news_dropped} |`);
  if ((r.patterns ?? []).length) h(`| Patterns | ${r.patterns.join(' / ')} |`);
  h('');
  if (r.positive_factors?.length) {
    h('**📈 Bullish Factors:**');
    r.positive_factors.forEach(f => h(`- 🟢 ${f}`));
    h('');
  }
  if (r.negative_factors?.length) {
    h('**📉 Bearish Factors:**');
    r.negative_factors.forEach(f => h(`- 🔴 ${f}`));
    h('');
  }
  if (r.tagged?.length) {
    h('**📰 Key News (tagged):**');
    h('');
    h('| Date | Type | Sent | finalW | Source | Headline |');
    h('|------|------|------|--------|--------|----------|');
    r.tagged.slice(0, 8).forEach(item => {
      const emo = item.sentiment > 0 ? '🟢 +1' : item.sentiment < 0 ? '🔴 -1' : '⚪  0';
      const title = (item.title || '').slice(0, 60).replace(/\|/g, ' ');
      h(`| ${(item.date || '-').slice(0,10)} | ${item.type} | ${emo} | ${item.finalWeight} | ${(item.source || '-').slice(0,10)} | ${title} |`);
    });
    h('');
  }
  h('---');
  h('');
  return lines.join('\n');
}

function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);

  h('# US Stock News Sentiment Analysis - Tradeable Signals (v2)');
  h(`**Analysis Date:** ${todayStr}  |  **News Window:** ${cutoffStr} ~ ${todayStr}`);
  h(`**Stock Pool:** us_selected.txt (${results.length})  |  **LLM Rerate:** ${llmFlag ? 'enabled' : 'disabled'}`);
  h(`**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)`);
  h('');

  h('## Summary Overview (sorted by Normalized Score)');
  h('');
  h('| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |');
  h('|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|');
  results.forEach((r, idx) => {
    const sigIcon =
      r.signal.startsWith('GREEN') ? '🟢' :
      r.signal.startsWith('RED')   ? '🔴' :
      r.signal.startsWith('WARN')  ? '⚠️' : '⚪';
    const sigShort = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');
    const pat = (r.patterns ?? []).map(p => p.replace(/^WARNING:\s*/, '')).slice(0, 1).join('') || '-';
    h(`| ${idx+1} | **${r.symbol}** | **${r.score}** | ${r.score_raw} | ${sigIcon} ${sigShort} | ${r.suitableFor || '-'} | ${r.confidence || '-'} | ${r.news_count}/${r.news_dropped} | ${pat} |`);
  });
  h('');
  h('---');
  h('');

  const longStrong   = results.filter(r => r.signal.includes('Long (Strong)'));
  const longMid      = results.filter(r => r.signal.includes('Long (Mid)'));
  const longCautious = results.filter(r => r.signal.includes('Long (Cautious)'));
  const overheated   = results.filter(r => r.signal.includes('Overheated'));
  const risks        = results.filter(r =>
    (r.patterns ?? []).some(p => p.startsWith('WARNING')) && !r.signal.includes('Overheated')
  );
  const shorts  = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));
  const neutral = results.filter(r => r.signal.startsWith('NEUTRAL'));

  if (longStrong.length)   { h(`## 🟢 Strong Long (${longStrong.length})`);   h(''); longStrong.forEach(r => h(formatDetail(r))); }
  if (longMid.length)      { h(`## 🟢 Mid Long (${longMid.length})`);         h(''); longMid.forEach(r => h(formatDetail(r))); }
  if (longCautious.length) { h(`## 🟡 Cautious Long (${longCautious.length})`); h(''); longCautious.forEach(r => h(formatDetail(r))); }
  if (overheated.length)   { h(`## ⚠️ Overheated (${overheated.length})`);    h(''); overheated.forEach(r => h(formatDetail(r))); }
  if (risks.length)        { h(`## ⚠️ Risk Pattern (${risks.length})`);       h(''); risks.forEach(r => h(formatDetail(r))); }
  if (shorts.length)       { h(`## 🔴 Avoid / Short (${shorts.length})`);     h(''); shorts.forEach(r => h(formatDetail(r))); }
  if (neutral.length) {
    h(`## ⚪ Watch / Neutral (${neutral.length})`);
    h('');
    neutral.forEach(r => {
      const sigText = r.signal.replace(/^NEUTRAL\s+/, '');
      h(`### ${r.symbol}`);
      h(`- Score: ${r.score}/100 | raw: ${r.score_raw} | News: ${r.news_count} kept / ${r.news_dropped} dropped | ${r.strategy}`);
      if ((r.patterns ?? []).length) h(`- Patterns: ${r.patterns.join(' | ')}`);
      h('');
    });
  }

  h('---');
  h('');
  h('## False Signal Detection Checklist');
  h('');
  h('| Risk Type | Detection Criteria | Response |');
  h('|-----------|-------------------|----------|');
  h('| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |');
  h('| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |');
  h('| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |');
  h('| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |');
  h('');
  h('---');
  h(`*Generated: ${new Date().toISOString()} | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha${llmFlag ? ` + ${MODEL}` : ''}*`);

  return lines.join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('');
  console.log('================================================================');
  console.log('  US Stock News Sentiment Analysis -> Tradeable Signals (v2)');
  console.log(`  Window: ${cutoffStr} ~ ${todayStr}`);
  console.log(`  LLM Rerate: ${llmFlag ? (isLLMEnabled() ? `enabled (${MODEL})` : 'requested but no DEEPSEEK_API_KEY') : 'disabled'}`);
  console.log('================================================================');
  console.log('');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`Loaded ${symbols.length} stocks from us_selected.txt\n`);

  const results = [];
  const batches = Math.ceil(symbols.length / BATCH_SIZE);

  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    console.log(`\nBatch ${Math.floor(i / BATCH_SIZE) + 1}/${batches}: [${batch.join(', ')}]`);
    const settled = await Promise.allSettled(batch.map(s => analyzeStock(s)));
    settled.forEach(r => {
      if (r.status === 'fulfilled') results.push(r.value);
      else console.warn('  Error:', r.reason && r.reason.message);
    });
    if (i + BATCH_SIZE < symbols.length) await new Promise(r => setTimeout(r, 1000));
  }

  results.sort((a, b) => b.score - a.score);

  console.log('\n');
  console.log('='.repeat(72));
  console.log('Trading Signal Summary (normalized 0-100)');
  console.log('='.repeat(72));
  results.forEach((r, i) => {
    const sc  = String(r.score).padStart(3);
    const sym = r.symbol.padEnd(18);
    const sigIcon =
      r.signal.startsWith('GREEN') ? '[LONG]' :
      r.signal.startsWith('RED')   ? '[AVOID]' :
      r.signal.startsWith('WARN')  ? '[WARN]' : '[WATCH]';
    const pat = (r.patterns ?? []).filter(p => p.startsWith('WARNING')).map(p => p.slice(9, 30)).join('|');
    console.log(`${String(i+1).padStart(2)}. ${sym} Score:${sc}/100  ${sigIcon}  ${pat}`);
  });

  const longs  = results.filter(r => r.signal.startsWith('GREEN'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('WARNING')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));

  console.log('\n');
  console.log('Long Candidates : ' + (longs.map(r => r.symbol).join(', ') || 'None'));
  console.log('Risk Alerts     : ' + (alerts.map(r => r.symbol).join(', ') || 'None'));
  console.log('Avoid / Short   : ' + (shorts.map(r => r.symbol).join(', ') || 'None'));

  const reportWriteStart = performance.now();
  writeFileSync(OUTPUT_MD, buildReport(results), 'utf8');
  console.log(`\nReport saved: ${OUTPUT_MD}`);

  const json = {
    generated_at: new Date().toISOString(),
    market: 'us',
    source: 'src/core/usNews.js',
    score_scale: '0-100 normalized (neutral=50)',
    window: { from: cutoffStr, to: todayStr, days: DAYS_BACK },
    llm_used: llmFlag,
    performance: sumPerformance(results, 0),
    stocks: Object.fromEntries(results.map(r => [r.symbol, {
      name: r.name,
      score: r.score,
      score_raw: r.score_raw,
      score_components: r.score_components,
      signal: r.signal,
      strategy: r.strategy,
      suitable_for: r.suitableFor,
      confidence: r.confidence,
      patterns: r.patterns ?? [],
      positive_factors: r.positive_factors ?? [],
      negative_factors: r.negative_factors ?? [],
      news_count: r.news_count,
      news_dropped: r.news_dropped,
      performance: r.performance || {},
      top_news: (r.tagged ?? []).slice(0, 5).map(t => ({
        date: t.date || null,
        title: (t.title || '').slice(0, 100),
        content: t.content || '',
        type: t.type,
        sentiment: t.sentiment,
        weight: t.weight,
        final_weight: t.finalWeight,
        source_authority: t.sourceAuthority,
        recency_factor: t.recencyFactor,
        source: t.source || null,
        ...(t.llm_reviewed ? {
          llm_reviewed: true,
          llm_confidence: t.llm_confidence,
          llm_is_real_catalyst: t.llm_is_real_catalyst,
          llm_reasoning: t.llm_reasoning,
        } : {}),
      })),
    }])),
  };
  writeFileSync(OUTPUT_JSON, JSON.stringify(json, null, 2), 'utf8');
  const reportWriteMs = msSince(reportWriteStart);
  json.performance = sumPerformance(results, reportWriteMs);
  writeFileSync(OUTPUT_JSON, JSON.stringify(json, null, 2), 'utf8');
  logPerformanceSummary(json.performance);
  console.log(`JSON contract saved: ${OUTPUT_JSON}\n`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
