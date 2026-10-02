#!/usr/bin/env node
/**
 * Fallback CN news signal pipeline (LLM-free, browser-enrich-free)
 *
 * 背景：主流水线 npm run news:cn 依赖 DeepSeek LLM 分类/情绪，当前环境
 * .env 无 DEEPSEEK_API_KEY（LLM 不可用），导致 24 只股票全部 No Data。
 *
 * 本备用脚本：
 *  1) 抓取层：复用 src/core/webNews.js 的 searchNews（东财研报/快讯/个股资讯/公告 +
 *     新浪个股新闻 + 巨潮公告，多源合并去重），source='news' 不抓论坛，
 *     enrichTopN=0 关闭浏览器正文二次抓取，避免无头浏览器卡死。
 *  2) 分析层：复用 pipeline/2-news/lib 本地组件链（classify / sentiment / weight /
 *     normalize / patterns / signal，market='cn'），不依赖 LLM。
 *  3) 产物：watchlist/cn_news_signals.md + .json（与主脚本同构，供下游消费）。
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { performance } from 'node:perf_hooks';
import { searchNews, extractCode } from '../../src/core/webNews.js';
import { closeSharedBrowser } from '../../src/core/browserScraper.js';
import { classifyType } from './lib/classify.mjs';
import { scoreSentiment } from './lib/sentiment.mjs';
import { calcWeight } from './lib/weight.mjs';
import { calcScores } from './lib/normalize.mjs';
import { detectPatterns } from './lib/patterns.mjs';
import { generateSignal } from './lib/signal.mjs';
import { filterRelevant } from './lib/relevance.mjs';
import { createLimiter } from '../../src/core/concurrency.js';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ─── Config ──────────────────────────────────────────────────────────────────
const SYMBOLS_FILE = './watchlist/cn_selected.txt';
const OUTPUT_MD    = './watchlist/cn_news_signals.md';
const OUTPUT_JSON  = './watchlist/cn_news_signals.json';
const DAYS_BACK    = 7;   // 抓取窗口（覆盖最近约 5 个交易日）
const NEWS_COUNT   = 20;
const MARKET       = 'cn';
const STOCK_CONCURRENCY = parseInt(process.env.NEWS_CN_CONCURRENCY) || 8;

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];
const msSince = s => Math.round(performance.now() - s);

function keepAll(items) { return { kept: items, dropped: 0, reasons: {} }; }

function isInWindow(dateStr) {
  if (!dateStr) return false;
  const d = new Date(String(dateStr).slice(0, 10));
  return !Number.isNaN(d.getTime()) && d >= cutoff && d <= today;
}

async function fetchCnNews(symbol, name) {
  const code = extractCode(symbol);
  const result = await searchNews({
    symbol,
    name,
    source: 'news',
    count: NEWS_COUNT,
    enrich: 'candidate',
    candidateFilterFn: keepAll,      // 前置去噪交给下游 filterRelevant 统一做
    enrichTopN: 0,                   // 关闭浏览器正文 enrich（LLM 兜底场景不依赖正文）
    researchEnrichTopN: 0,
  });
  if (!result?.success) return { items: [], status: 'searchNews-failed', name: result?.name || name };
  const items = [
    ...(result.news || []).map(n  => ({ ...n, category: 'news' })),
    ...(result.research || []).map(n => ({ ...n, category: 'research' })),
  ];
  return { items, status: Object.values(result.sources_status || {}).map(s => `${s.count}`).join('/'), name: result.name || name };
}

async function analyzeStock(symbol) {
  const code = extractCode(symbol);
  const start = performance.now();
  const { items, status, name } = await fetchCnNews(symbol);

  if (!items.length) {
    return {
      symbol, name: name || code, status,
      score: 50, score_raw: 0,
      signal: '⚪ No Trade (无数据)', strategy: '窗口内无有效新闻（多源抓取为空）',
      suitableFor: '观望', confidence: '-',
      patterns: [], tagged: [], positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: 0,
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      ms: Math.round(performance.now() - start),
    };
  }

  const inWindow = items.filter(n => isInWindow(n.date));
  const aliases = [code, symbol, name].filter(Boolean);
  const { kept, dropped, reasons } = filterRelevant(inWindow, symbol, aliases, { market: MARKET });

  if (!kept.length) {
    return {
      symbol, name: name || code, status,
      score: 50, score_raw: 0,
      signal: '⚪ No Trade (无数据)', strategy: '窗口内无相关有效新闻',
      suitableFor: '观望', confidence: '-',
      patterns: [], tagged: [], positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: dropped + (items.length - inWindow.length),
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
      reasons, ms: Math.round(performance.now() - start),
    };
  }

  // 本地分类 + 情绪 + 权重（不依赖 LLM）
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
    symbol, name: name || code, status,
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
    ms: Math.round(performance.now() - start),
  };
}

// ─── Report（与主脚本 v2 报告同构）────────────────────────────────────────────
function formatDetail(r) {
  const lines = [];
  const h = s => lines.push(s);
  h(`### ${r.name} (${r.symbol})`);
  h('');
  h('| 指标 | 详情 |');
  h('|------|------|');
  h(`| 归一化分 | **${r.score}** / 100 |`);
  h(`| 原始加权分 | ${r.score_raw ?? '-'} |`);
  h(`| 交易信号 | **${r.signal}** |`);
  h(`| 操作策略 | ${r.strategy} |`);
  h(`| 适合方式 | ${r.suitableFor} |`);
  h(`| 置信度 | ${r.confidence} |`);
  h(`| 有效/过滤 | ${r.news_count} / ${r.news_dropped} |`);
  if ((r.patterns ?? []).length) h(`| 识别模式 | ${r.patterns.join(' \\| ')} |`);
  h('');
  if (r.positive_factors?.length) { h('**📈 利好因素:**'); r.positive_factors.forEach(f => h(`- 🟢 ${f}`)); h(''); }
  if (r.negative_factors?.length) { h('**📉 利空因素:**'); r.negative_factors.forEach(f => h(`- 🔴 ${f}`)); h(''); }
  if (r.tagged?.length) {
    h('**📰 关键新闻明细（本地词典标注）:**');
    h('');
    h('| 日期 | 类型 | 情绪 | 权重 | 来源 | 标题 |');
    h('|------|------|------|------|------|------|');
    r.tagged.slice(0, 8).forEach(item => {
      const emo = item.sentiment > 0 ? '🟢+1' : item.sentiment < 0 ? '🔴-1' : '⚪ 0';
      const title = (item.title || '').slice(0, 45).replace(/\|/g, '｜');
      h(`| ${(item.date || '-').slice(0,10)} | ${item.type} | ${emo} | ${item.finalWeight} | ${(item.source || '-').slice(0,8)} | ${title} |`);
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
  h('# A股新闻情绪分析 · 交易信号报告 (v2 本地兜底)');
  h(`**分析日期:** ${todayStr}　　**新闻窗口:** ${cutoffStr} ~ ${todayStr}（最近7天）`);
  h(`**股票池:** cn_selected.txt (${results.length}只)　　**评分:** 0-100 归一化 (中性=50)`);
  h('**LLM 主分类:** 未启用 (无 API Key) — 走本地组件链(classify/sentiment/weight/patterns/signal)');
  h('');
  h('## 📊 汇总总览（按归一化分降序）');
  h('');
  h('| # | 股票 | 代码 | 归一化分 | 信号 | 适合策略 | 置信度 | 有效/过滤 | 关键模式 |');
  h('|---|------|------|---------|------|----------|--------|-----------|---------|');
  results.forEach((r, idx) => {
    const pat = (r.patterns ?? []).map(p => p.replace(/⚠️/g, '⚠')).slice(0, 1).join('') || '-';
    h(`| ${idx+1} | ${r.name || '-'} | ${r.symbol} | **${r.score}** | ${r.signal} | ${r.suitableFor || '-'} | ${r.confidence || '-'} | ${r.news_count}/${r.news_dropped} | ${pat} |`);
  });
  h('');
  h('---');
  h('');

  const longStrong   = results.filter(r => r.signal.includes('Long (强)'));
  const longMid      = results.filter(r => r.signal.includes('Long (中)'));
  const longCautious = results.filter(r => r.signal.includes('Long (谨慎)'));
  const overheated   = results.filter(r => r.signal.includes('情绪过热'));
  const risks        = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('⚠️')) && !r.signal.includes('情绪过热'));
  const shorts       = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));
  const neutral      = results.filter(r => r.signal.startsWith('⚪'));

  if (longStrong.length)   { h(`## 🟢 强多信号 (${longStrong.length}只) — 推荐优先关注`);   h(''); longStrong.forEach(r => h(formatDetail(r))); }
  if (longMid.length)      { h(`## 🟢 中多信号 (${longMid.length}只) — 可轻仓参与`);       h(''); longMid.forEach(r => h(formatDetail(r))); }
  if (longCautious.length) { h(`## 🟡 谨慎多信号 (${longCautious.length}只) — 小仓+严控止损`); h(''); longCautious.forEach(r => h(formatDetail(r))); }
  if (overheated.length)   { h(`## ⚠️ 情绪过热警告 (${overheated.length}只) — 不追高，等回调`); h(''); overheated.forEach(r => h(formatDetail(r))); }
  if (risks.length)        { h(`## ⚠️ 存在风险模式 (${risks.length}只) — 需鉴别真假信号`);   h(''); risks.forEach(r => h(formatDetail(r))); }
  if (shorts.length)       { h(`## 🔴 规避/做空信号 (${shorts.length}只)`);                  h(''); shorts.forEach(r => h(formatDetail(r))); }
  if (neutral.length) {
    h(`## ⚪ 观望信号 (${neutral.length}只)`);
    h('');
    neutral.forEach(r => {
      h(`### ${r.name} (${r.symbol})`);
      h(`- 归一化分: ${r.score} | 有效/过滤: ${r.news_count}/${r.news_dropped} | ${r.strategy}`);
      if ((r.patterns ?? []).length) h(`- 模式: ${r.patterns.join(' | ')}`);
      h('');
    });
  }

  h('---');
  h('');
  h('## 📌 假信号识别备忘');
  h('');
  h('| 风险类型 | 判断依据 | 应对策略 |');
  h('|----------|----------|----------|');
  h('| 提前炒作 | 无硬催化(财报/政策/并购)，归一化分虚高 | 等实质性公告落地再入场 |');
  h('| 情绪过热 | 所有新闻全为正面，无一条负面 | 等回调确认支撑再考虑 |');
  h('| 假利好   | 传闻主导(>50%)，无官方公告确认 | 等公告确认前不进场 |');
  h('| 情绪背离 | 有黑天鹅但市场仍乐观 | 先规避，等事件明朗 |');
  h('');
  h('---');
  h(`*生成时间: ${new Date().toISOString()} | 数据来源: 东方财富/新浪财经/巨潮资讯/研报 (src/core/webNews.js) + 本地组件链 (无 LLM)*`);
  return lines.join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('');
  console.log('================================================================');
  console.log('  A股新闻情绪信号 — 本地兜底流水线 (无 LLM, 无浏览器 enrich)');
  console.log(`  窗口: ${cutoffStr} ~ ${todayStr}  并发: ${STOCK_CONCURRENCY}`);
  console.log('================================================================');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`加载 ${symbols.length} 只股票\n`);

  const results = [];
  const limiter = createLimiter(STOCK_CONCURRENCY);
  let completed = 0;
  const settled = await Promise.allSettled(
    symbols.map(s => limiter(async () => {
      const r = await analyzeStock(s);
      completed++;
      process.stdout.write(`  [${completed}/${symbols.length}] ${s} score=${r.score} kept=${r.news_count} ms=${r.ms}\n`);
      return r;
    }))
  );
  settled.forEach(r => {
    if (r.status === 'fulfilled') results.push(r.value);
    else console.warn('  ⚠ 异常:', r.reason?.message);
  });

  results.sort((a, b) => b.score - a.score);

  // 终端摘要
  console.log('\n' + '='.repeat(72));
  console.log('📊 交易信号汇总 (归一化 0-100)');
  console.log('='.repeat(72));
  results.forEach((r, i) => {
    const sc  = String(r.score).padStart(3);
    const nm  = (r.name || r.symbol).padEnd(10).slice(0, 10);
    const sym = r.symbol.padEnd(15);
    const pat = (r.patterns ?? []).filter(p => p.startsWith('⚠️')).map(p => p.slice(3, 15)).join('|');
    console.log(`${String(i+1).padStart(2)}. ${nm} ${sym} 分:${sc}/100  ${r.signal}  ${pat}`);
  });

  const longs  = results.filter(r => r.signal.includes('Long') && !r.signal.includes('谨慎'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('⚠️')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));
  console.log('\n');
  console.log(`🟢 做多候选: ${longs.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`⚠️  风险股票: ${alerts.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`🔴 规避股票: ${shorts.map(r => r.name || r.symbol).join(', ') || '无'}`);

  writeFileSync(OUTPUT_MD, buildReport(results), 'utf8');
  console.log(`\n✅ 详细报告已保存: ${OUTPUT_MD}`);

  const json = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    source: 'src/core/webNews.js (东方财富/新浪/巨潮) + lib 本地组件链',
    classifier: 'local dictionaries (no LLM; DEEPSEEK_API_KEY absent)',
    score_scale: '0-100 normalized (neutral=50)',
    window: { from: cutoffStr, to: todayStr, days: DAYS_BACK },
    llm_used: false,
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
  console.log(`✅ 下游契约 JSON 已保存: ${OUTPUT_JSON}\n`);
}

main()
  .catch(err => {
    console.error('致命错误:', err);
    process.exitCode = 1;
  })
  .finally(async () => {
    // 不关闭共享 Chromium 的话事件循环不会排空，进程永不返回。
    await closeSharedBrowser();
    process.exit(process.exitCode ?? 0);
  });
