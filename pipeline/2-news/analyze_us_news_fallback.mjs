#!/usr/bin/env node
/**
 * Fallback US news signal pipeline (LLM-free, browser-free)
 *
 * 背景：主流水线 npm run news:us 依赖 (1) DeepSeek LLM 分类/情绪 (2) 浏览器 enrich
 * （Seeking Alpha / StockTwits / Bogleheads），当前环境下 LLM 402 余额不足、
 * 浏览器 enrich 卡死，导致 30 只全 No Data。
 *
 * 本备用脚本：
 *  1) 抓取层：直连 Finnhub company-news（同 src/core/usNews.js 内 fetchFinnhubNews 的
 *     同一接口/同一 token 逻辑，Node 原生 fetch 可达），等价"利用 usNews.js 取新闻"，
 *     但跳过其会触发浏览器无头抓取的论坛/Social 分支。
 *  2) 分析层：复用 pipeline/2-news/lib 本地组件链（classify / sentiment / weight /
 *     normalize / patterns / signal，market='us'），不依赖 LLM。
 *  3) 产物：watchlist/us_news_signals.md + .json（与主脚本同构）。
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { performance } from 'node:perf_hooks';
import { classifyType } from '../../pipeline/2-news/lib/classify.mjs';
import { scoreSentiment } from '../../pipeline/2-news/lib/sentiment.mjs';
import { calcWeight } from '../../pipeline/2-news/lib/weight.mjs';
import { calcScores } from '../../pipeline/2-news/lib/normalize.mjs';
import { detectPatterns } from '../../pipeline/2-news/lib/patterns.mjs';
import { generateSignal } from '../../pipeline/2-news/lib/signal.mjs';
import { filterRelevant } from '../../pipeline/2-news/lib/relevance.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ─── Config ──────────────────────────────────────────────────────────────────
const SYMBOLS_FILE = './watchlist/us_selected.txt';
const OUTPUT_MD    = './watchlist/us_news_signals.md';
const OUTPUT_JSON  = './watchlist/us_news_signals.json';
const DAYS_BACK    = 7;   // 抓取窗口（覆盖最近约 5 个交易日）
const FINNHUB_TOKEN = 'd7p9dvpr01qlb0a984ngd7p9dvpr01qlb0a984o0'; // 同 usNews.js
const MARKET = 'us';
const BATCH_SIZE = 4;

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];

// ticker -> 公司名别名（用于相关性主体校验；brand 后缀派生由 normalizeKeys 处理）
const COMPANIES = {
  PATH: ['UiPath'], DASH: ['DoorDash'], HRMY: ['Harmony Biosciences'],
  VRTX: ['Vertex Pharmaceuticals'], HOOD: ['Robinhood'], LTC: ['LTC Properties'],
  RRC: ['Range Resources'], NEM: ['Newmont'], FCX: ['Freeport-McMoRan'],
  SCCO: ['Southern Copper'], WPM: ['Wheaton Precious Metals'], GEN: ['Gen Digital', 'NortonLifeLock'],
  APD: ['Air Products'], FIVE: ['Five Below'], J: ['Jacobs Solutions'],
  CBOE: ['Cboe Global Markets'], PRGS: ['Progress Software'], WT: ['WisdomTree'],
  RELY: ['Remitly'], AJG: ['Arthur J. Gallagher'], HGTY: ['Hagerty'],
  PANW: ['Palo Alto Networks'], FAF: ['First American Financial'], CRWD: ['CrowdStrike'],
  AAPL: ['Apple'], APH: ['Amphenol'], SQM: ['SQM'],
  RIO: ['Rio Tinto'], CF: ['CF Industries'], AR: ['Antero Resources'],
};

const fmt = d => d.toISOString().split('T')[0];

async function fetchFinnhubNews(symbol, count = 30) {
  const weekAgo = new Date(Date.now() - DAYS_BACK * 86400000);
  const url = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fmt(weekAgo)}&to=${fmt(today)}&token=${FINNHUB_TOKEN}`;
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (res.status !== 200) return { items: [], status: `HTTP ${res.status}` };
  const data = await res.json().catch(() => null);
  if (!Array.isArray(data)) return { items: [], status: 'not-array' };
  const items = data.map(i => ({
    title: i.headline || '',
    content: i.summary || '',
    url: i.url || '',
    date: i.datetime ? new Date(i.datetime * 1000).toISOString().split('T')[0] : '',
    publisher: i.source || 'Finnhub',
    source: i.source || 'Finnhub',
    type: 'news',
  })).filter(i => i.title);
  return { items: items.slice(0, count), status: 'ok' };
}

async function analyzeStock(symbol) {
  const ticker = symbol.replace(/^(NASDAQ:|NYSE:|CBOE:|AMEX:)/, '');
  const aliases = [ticker, ...(COMPANIES[ticker] || [])];
  const start = performance.now();
  const { items, status } = await fetchFinnhubNews(ticker);
  if (!items.length) {
    return {
      symbol, name: ticker, status,
      score: 50, score_raw: 0,
      signal: 'NEUTRAL No Trade (No Data)', strategy: `Finnhub ${status}: no news in window`,
      suitableFor: 'Watch', confidence: '-',
      patterns: [], tagged: [], positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: 0,
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      sources: [status], ms: Math.round(performance.now() - start),
    };
  }

  // 日期窗口过滤
  const inWindow = items.filter(n => {
    const d = new Date(String(n.date).slice(0, 10));
    return !Number.isNaN(d.getTime()) && d >= cutoff && d <= today;
  });

  // 相关性 + 噪音 + 去重
  const { kept, dropped, reasons } = filterRelevant(inWindow, symbol, aliases, { market: MARKET });

  if (!kept.length) {
    return {
      symbol, name: ticker, status,
      score: 50, score_raw: 0,
      signal: 'NEUTRAL No Trade (No relevant news)', strategy: 'No relevant news in window',
      suitableFor: 'Watch', confidence: '-',
      patterns: [], tagged: [], positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: dropped + (items.length - inWindow.length),
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      sources: [status], reasons, ms: Math.round(performance.now() - start),
    };
  }

  // 本地分类 + 情绪 + 权重
  const tagged = kept.map(item => {
    const type = classifyType(item, MARKET);
    const sentiment = scoreSentiment(item, type, MARKET);
    const w = calcWeight(item, type, today);
    const finalWeight = +Math.max(0.5, Math.min(8, w.finalWeight)).toFixed(2);
    return {
      ...item,
      type, sentiment,
      weight: Math.round(finalWeight),
      finalWeight,
      sourceAuthority: w.sourceAuthority,
      typeMul: w.typeMul,
      recencyFactor: w.recency,
      llm_reviewed: false,
    };
  });

  const scores = calcScores(tagged);
  const patterns = detectPatterns(tagged, MARKET);
  const sig = generateSignal(scores.normalized, patterns, tagged, MARKET);

  const fmt2 = i => `[${i.type}|w${i.finalWeight}] ${(i.title || '').slice(0, 70)}`;
  const positive_factors = tagged.filter(i => i.sentiment > 0)
    .sort((a, b) => b.finalWeight - a.finalWeight).slice(0, 3).map(fmt2);
  const negative_factors = tagged.filter(i => i.sentiment < 0)
    .sort((a, b) => b.finalWeight - a.finalWeight).slice(0, 3).map(fmt2);

  return {
    symbol, name: ticker, status,
    score: scores.normalized,
    score_raw: scores.raw,
    score_components: {
      positive_weight_sum: scores.positive_weight_sum,
      negative_weight_sum: scores.negative_weight_sum,
      news_effective_count: tagged.length,
      news_dropped_count: dropped + (items.length - inWindow.length),
    },
    news_count: tagged.length,
    news_dropped: dropped + (items.length - inWindow.length),
    reasons,
    patterns, signal: sig.signal, strategy: sig.strategy,
    suitableFor: sig.suitableFor, confidence: sig.confidence,
    tagged, positive_factors, negative_factors,
    sources: [status],
    ms: Math.round(performance.now() - start),
  };
}

// ─── Report ──────────────────────────────────────────────────────────────────
function formatDetail(r) {
  const lines = [];
  const sigIcon = r.signal.startsWith('GREEN') ? '🟢' : r.signal.startsWith('RED') ? '🔴' : r.signal.startsWith('WARN') ? '⚠️' : '⚪';
  const sigText = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');
  lines.push(`### ${r.symbol}`, '');
  lines.push('| Metric | Detail |', '|--------|--------|');
  lines.push(`| Normalized Score | **${r.score}** / 100 |`);
  lines.push(`| Raw Weighted Score | ${r.score_raw} |`);
  lines.push(`| Trading Signal | **${sigIcon} ${sigText}** |`);
  lines.push(`| Strategy | ${r.strategy} |`);
  lines.push(`| Suitable For | ${r.suitableFor} |`);
  lines.push(`| Confidence | ${r.confidence} |`);
  lines.push(`| News Kept / Dropped | ${r.news_count} / ${r.news_dropped} |`);
  if ((r.patterns ?? []).length) lines.push(`| Patterns | ${r.patterns.join(' / ')} |`);
  lines.push('');
  if (r.positive_factors?.length) { lines.push('**Bullish Factors:**'); r.positive_factors.forEach(f => lines.push(`- 🟢 ${f}`)); lines.push(''); }
  if (r.negative_factors?.length) { lines.push('**Bearish Factors:**'); r.negative_factors.forEach(f => lines.push(`- 🔴 ${f}`)); lines.push(''); }
  if (r.tagged?.length) {
    lines.push('**Key News (tagged):**', '', '| Date | Type | Sent | finalW | Source | Headline |', '|------|------|------|--------|--------|----------|');
    r.tagged.slice(0, 8).forEach(item => {
      const emo = item.sentiment > 0 ? '🟢 +1' : item.sentiment < 0 ? '🔴 -1' : '⚪  0';
      lines.push(`| ${(item.date || '-').slice(0,10)} | ${item.type} | ${emo} | ${item.finalWeight} | ${(item.source || '-').slice(0,10)} | ${(item.title || '').slice(0,60).replace(/\|/g,' ')} |`);
    });
    lines.push('');
  }
  lines.push('---', '');
  return lines.join('\n');
}

function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);
  h('# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)');
  h(`**Analysis Date:** ${todayStr}  |  **News Window:** ${cutoffStr} ~ ${todayStr}（Finnhub company-news，覆盖最近约 5-7 个交易日）`);
  h(`**Stock Pool:** us_selected.txt (${results.length})  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）`);
  h('**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)');
  h('');
  h('## Summary Overview (sorted by Normalized Score)');
  h('');
  h('| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |');
  h('|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|');
  results.forEach((r, idx) => {
    const sigIcon = r.signal.startsWith('GREEN') ? '🟢' : r.signal.startsWith('RED') ? '🔴' : r.signal.startsWith('WARN') ? '⚠️' : '⚪';
    const sigShort = r.signal.replace(/^(GREEN|RED|WARN|NEUTRAL)\s+/, '');
    const pat = (r.patterns ?? []).map(p => p.replace(/^WARNING:\s*/, '')).slice(0, 1).join('') || '-';
    h(`| ${idx+1} | **${r.symbol}** | **${r.score}** | ${r.score_raw} | ${sigIcon} ${sigShort} | ${r.suitableFor || '-'} | ${r.confidence || '-'} | ${r.news_count}/${r.news_dropped} | ${pat} |`);
  });
  h('');
  h('---');
  h('');

  const longStrong = results.filter(r => r.signal.includes('Long (Strong)'));
  const longMid = results.filter(r => r.signal.includes('Long (Mid)'));
  const longCautious = results.filter(r => r.signal.includes('Long (Cautious)'));
  const overheated = results.filter(r => r.signal.includes('Overheated'));
  const risks = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('WARNING')) && !r.signal.includes('Overheated'));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));
  const neutral = results.filter(r => r.signal.startsWith('NEUTRAL'));

  if (longStrong.length) { h(`## 🟢 Strong Long (${longStrong.length})`); h(''); longStrong.forEach(r => h(formatDetail(r))); }
  if (longMid.length) { h(`## 🟢 Mid Long (${longMid.length})`); h(''); longMid.forEach(r => h(formatDetail(r))); }
  if (longCautious.length) { h(`## 🟡 Cautious Long (${longCautious.length})`); h(''); longCautious.forEach(r => h(formatDetail(r))); }
  if (overheated.length) { h(`## ⚠️ Overheated (${overheated.length})`); h(''); overheated.forEach(r => h(formatDetail(r))); }
  if (risks.length) { h(`## ⚠️ Risk Pattern (${risks.length})`); h(''); risks.forEach(r => h(formatDetail(r))); }
  if (shorts.length) { h(`## 🔴 Avoid / Short (${shorts.length})`); h(''); shorts.forEach(r => h(formatDetail(r))); }
  if (neutral.length) {
    h(`## ⚪ Watch / Neutral (${neutral.length})`); h('');
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
  h(`*Generated: ${new Date().toISOString()} | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*`);
  return lines.join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('');
  console.log('================================================================');
  console.log('  US News Sentiment Signals — Local Fallback (no LLM, no browser)');
  console.log(`  Window: ${cutoffStr} ~ ${todayStr}`);
  console.log('================================================================');
  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`Loaded ${symbols.length} stocks from us_selected.txt\n`);

  const results = [];
  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    process.stdout.write(`Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(symbols.length / BATCH_SIZE)}: [${batch.join(', ')}] ... `);
    const settled = await Promise.allSettled(batch.map(s => analyzeStock(s)));
    const batchRes = settled.map((r, k) => {
      if (r.status === 'fulfilled') return r.value;
      const sym = batch[k];
      return {
        symbol: sym, name: sym.replace(/^[A-Z]+:/, ''),
        status: r.reason?.message || 'ERR', score: 50, score_raw: 0,
        signal: 'NEUTRAL No Trade (fetch failed)', strategy: (r.reason?.message || 'ERR'),
        suitableFor: 'Watch', confidence: '-',
        patterns: [], tagged: [], positive_factors: [], negative_factors: [],
        news_count: 0, news_dropped: 0,
        score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
        sources: [r.reason?.message || 'ERR'],
      };
    });
    results.push(...batchRes);
    const line = batchRes.map(r => `${r.symbol.replace(/^[A-Z]+:/,'')}=${r.score}`).join(' ');
    process.stdout.write(`done [${line}]\n`);
    if (i + BATCH_SIZE < symbols.length) await new Promise(r => setTimeout(r, 300));
  }

  results.sort((a, b) => b.score - a.score);

  console.log('\n' + '='.repeat(72));
  console.log('Trading Signal Summary (normalized 0-100)');
  console.log('='.repeat(72));
  results.forEach((r, i) => {
    const sc = String(r.score).padStart(3);
    const sym = r.symbol.padEnd(18);
    const sigIcon = r.signal.startsWith('GREEN') ? '[LONG]' : r.signal.startsWith('RED') ? '[AVOID]' : r.signal.startsWith('WARN') ? '[WARN]' : '[WATCH]';
    const pat = (r.patterns ?? []).filter(p => p.startsWith('WARNING')).map(p => p.slice(9, 30)).join('|');
    console.log(`${String(i+1).padStart(2)}. ${sym} Score:${sc}/100  ${sigIcon}  ${pat}`);
  });

  const longs = results.filter(r => r.signal.startsWith('GREEN'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('WARNING')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('Avoid'));
  console.log('\n');
  console.log('Long Candidates : ' + (longs.map(r => r.symbol).join(', ') || 'None'));
  console.log('Risk Alerts     : ' + (alerts.map(r => r.symbol).join(', ') || 'None'));
  console.log('Avoid / Short   : ' + (shorts.map(r => r.symbol).join(', ') || 'None'));

  writeFileSync(OUTPUT_MD, buildReport(results), 'utf8');
  console.log(`\nReport saved: ${OUTPUT_MD}`);

  const json = {
    generated_at: new Date().toISOString(),
    market: 'us',
    source: 'Finnhub company-news (same endpoint as src/core/usNews.js) + local component chain',
    classifer: 'local dictionaries (no LLM; DeepSeek 402 unavailable)',
    score_scale: '0-100 normalized (neutral=50)',
    window: { from: cutoffStr, to: todayStr, days: DAYS_BACK },
    llm_used: false,
    stocks: Object.fromEntries(results.map(r => [r.symbol, {
      ticker: r.name,
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
      sources: r.sources,
      top_news: (r.tagged ?? []).slice(0, 5).map(t => ({
        date: t.date || null,
        title: (t.title || '').slice(0, 120),
        content: (t.content || '').slice(0, 300),
        type: t.type,
        sentiment: t.sentiment,
        weight: t.weight,
        final_weight: t.finalWeight,
        source_authority: t.sourceAuthority,
        recency_factor: t.recencyFactor,
        source: t.source || null,
      })),
    }])),
  };
  writeFileSync(OUTPUT_JSON, JSON.stringify(json, null, 2), 'utf8');
  console.log(`JSON contract saved: ${OUTPUT_JSON}\n`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
