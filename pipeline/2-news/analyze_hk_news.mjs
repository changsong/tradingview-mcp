#!/usr/bin/env node
/**
 * 港股新闻情绪量化分析 → 可交易信号 (v2 — LLM 主分类)
 *
 * 与 analyze_cn_news.mjs 结构相同：
 *   1. 读取 hk_selected.txt 股票列表
 *   2. 并行抓取每只股票的新闻/研报/股吧（最近 7 天）
 *   3. 调用共享 lib/analyze.mjs：relevance → LLM 分类 → 权重 → 模式 → 信号
 *   4. 输出: Long / Short / No Trade + 触发原因
 *
 * 备注：
 *   - 使用 src/core/hkNews.js（东财港股专属 endpoint `116.<5位>` + 关键词搜索 + 港股股吧）
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { searchHKNews, extractHKCode } from '../../src/core/hkNews.js';
import { analyzeStockData } from './lib/analyze.mjs';
import { isLLMEnabled, MODEL } from './lib/llm_common.mjs';
import { pruneWatchlist } from './lib/prune_watchlist.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const SYMBOLS_FILE = './watchlist/hk_selected.txt';
const OUTPUT_MD    = './watchlist/hk_news_signals.md';
const OUTPUT_JSON  = './watchlist/hk_news_signals.json';
const DAYS_BACK    = 7;
const NEWS_COUNT   = 20;
const BATCH_SIZE   = 5;
const MARKET       = 'hk';

const llmFlag = !process.argv.includes('--no-llm');

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];

async function analyzeStock(symbol) {
  const code = extractHKCode(symbol);
  process.stdout.write(`  [${symbol}] 抓取中...`);

  try {
    const result = await searchHKNews({ symbol, source: 'news', count: NEWS_COUNT });

    // hkNews 目前只返回 news（无 research/forum），保持下游契约一致
    const allNews = (result.news || []).map(n => ({ ...n, category: 'news' }));

    const r = await analyzeStockData(allNews, {
      symbol,
      name:   result.name || code,
      today, cutoff,
      market: MARKET,
      classifierFn: llmFlag ? undefined : async () => null,
    });

    process.stdout.write(` → ${r.news_count}条有效 / ${r.news_dropped}过滤, score=${r.score}\n`);

    return {
      symbol,
      name: result.name || code,
      ...r,
      sources_status: result.sources_status,
    };
  } catch (err) {
    process.stdout.write(` ❌ 错误: ${err.message}\n`);
    return {
      symbol, name: code,
      score: 50, score_raw: 0,
      signal: '⚪ No Trade (抓取失败)', strategy: err.message,
      suitableFor: '-', confidence: '-',
      patterns: [], tagged: [],
      positive_factors: [], negative_factors: [],
      news_count: 0, news_dropped: 0,
      score_components: { positive_weight_sum: 0, negative_weight_sum: 0 },
    };
  }
}

function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);

  h(`# 港股新闻情绪分析 · 交易信号报告 (v2 LLM)`);
  h(`**分析日期:** ${todayStr}　　**新闻窗口:** ${cutoffStr} ~ ${todayStr}（最近7天）`);
  h(`**股票池:** hk_selected.txt (${results.length}只)　　**评分:** 0-100 归一化 (中性=50)`);
  h(`**LLM 主分类:** ${llmFlag ? (isLLMEnabled() ? `已启用 (${MODEL})` : '⚠ 无 API Key，全部 No Data') : '已关闭，全部 No Data'}`);
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
  const risks        = results.filter(r =>
    (r.patterns ?? []).some(p => p.startsWith('⚠️')) &&
    !r.signal.includes('情绪过热')
  );
  const shorts       = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));
  const neutral      = results.filter(r => r.signal.startsWith('⚪'));

  if (longStrong.length)   { h(`## 🟢 强多信号 (${longStrong.length}只)`);             h(''); longStrong.forEach(r => h(formatDetail(r))); }
  if (longMid.length)      { h(`## 🟢 中多信号 (${longMid.length}只)`);                h(''); longMid.forEach(r => h(formatDetail(r))); }
  if (longCautious.length) { h(`## 🟡 谨慎多信号 (${longCautious.length}只)`);          h(''); longCautious.forEach(r => h(formatDetail(r))); }
  if (overheated.length)   { h(`## ⚠️ 情绪过热警告 (${overheated.length}只)`);          h(''); overheated.forEach(r => h(formatDetail(r))); }
  if (risks.length)        { h(`## ⚠️ 存在风险模式 (${risks.length}只)`);                h(''); risks.forEach(r => h(formatDetail(r))); }
  if (shorts.length)       { h(`## 🔴 规避/做空信号 (${shorts.length}只)`);              h(''); shorts.forEach(r => h(formatDetail(r))); }
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
  h('## 📌 港股特别提示');
  h('');
  h('| 项目 | 说明 |');
  h('|------|------|');
  h('| 交易机制 | T+0 当日可回转，无涨跌停（个股除新股首日外无硬性上下限） |');
  h('| 计价单位 | HKD 港币 |');
  h('| 数据稀疏 | 部分中小盘港股新闻覆盖较弱，得分以雪球/官方公告为主 |');
  h('| 双重上市 | A+H 股请同时参考 A 股侧信号（cn_news_signals.md） |');
  h('');
  h('---');
  h(`*生成时间: ${new Date().toISOString()} | 数据来源: 东方财富港股资讯 (secid=116.*)${llmFlag ? ' + DeepSeek 主分类' : ''}*`);

  return lines.join('\n');
}

function formatDetail(r) {
  const lines = [];
  const h = s => lines.push(s);

  h(`### ${r.name} (${r.symbol})`);
  h('');
  h(`| 指标 | 详情 |`);
  h(`|------|------|`);
  h(`| 归一化分 | **${r.score}** / 100 |`);
  h(`| 原始加权分 | ${r.score_raw ?? '-'} |`);
  h(`| 交易信号 | **${r.signal}** |`);
  h(`| 操作策略 | ${r.strategy} |`);
  h(`| 适合方式 | ${r.suitableFor} |`);
  h(`| 置信度 | ${r.confidence} |`);
  h(`| 有效/过滤 | ${r.news_count} / ${r.news_dropped} |`);

  if ((r.patterns ?? []).length) {
    h(`| 识别模式 | ${r.patterns.join(' \\| ')} |`);
  }

  h('');

  if (r.positive_factors?.length) {
    h('**📈 利好因素:**');
    r.positive_factors.forEach(f => h(`- 🟢 ${f}`));
    h('');
  }
  if (r.negative_factors?.length) {
    h('**📉 利空因素:**');
    r.negative_factors.forEach(f => h(`- 🔴 ${f}`));
    h('');
  }

  if (r.tagged?.length) {
    h('**📰 关键新闻明细 (LLM 标注):**');
    h('');
    h('| 日期 | 类型 | 情绪 | 权重 | 催化 | 置信 | 标题 |');
    h('|------|------|------|------|------|------|------|');
    r.tagged.slice(0, 8).forEach(item => {
      const emo = item.sentiment > 0 ? '🟢+1' : item.sentiment < 0 ? '🔴-1' : '⚪ 0';
      const cat = item.llm_is_real_catalyst === true ? '✅' : item.llm_is_real_catalyst === false ? '❌' : '-';
      const conf = item.llm_confidence != null ? Number(item.llm_confidence).toFixed(2) : '-';
      const title = (item.title || '').slice(0, 45).replace(/\|/g, '｜');
      h(`| ${(item.date || '-').slice(0,10)} | ${item.type} | ${emo} | ${item.finalWeight} | ${cat} | ${conf} | ${title} |`);
    });
    h('');
  }

  h('---');
  h('');
  return lines.join('\n');
}

async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   港股新闻情绪量化分析 → 可交易信号  v2 (LLM 主分类)      ║');
  console.log(`║   分析窗口: ${cutoffStr} ~ ${todayStr}                    ║`);
  console.log(`║   LLM 分类: ${llmFlag ? (isLLMEnabled() ? `已启用 (${MODEL})` : '⚠ 无 API Key') : '已关闭'}            ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`✅ 加载 ${symbols.length} 只股票\n`);

  const results = [];
  const batches = Math.ceil(symbols.length / BATCH_SIZE);

  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    console.log(`\n┌── 批次 ${Math.floor(i / BATCH_SIZE) + 1}/${batches} [${batch.length}只] ─────────────────────────`);

    const settled = await Promise.allSettled(batch.map(s => analyzeStock(s)));
    settled.forEach(r => {
      if (r.status === 'fulfilled') results.push(r.value);
      else console.warn('  ⚠ 异常:', r.reason?.message);
    });

    console.log('└──────────────────────────────────────────────────────────');

    if (i + BATCH_SIZE < symbols.length) await new Promise(r => setTimeout(r, 800));
  }

  results.sort((a, b) => b.score - a.score);

  console.log('\n');
  console.log('═'.repeat(70));
  console.log('📊 交易信号汇总 (按归一化分降序)');
  console.log('═'.repeat(70));
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
    market: 'hk',
    source: 'src/core/hkNews.js',
    score_scale: '0-100 normalized (neutral=50)',
    window: { from: cutoffStr, to: todayStr, days: DAYS_BACK },
    llm_used: llmFlag,
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
  console.log(`✅ 下游契约 JSON 已保存: ${OUTPUT_JSON}\n`);

  const { removed } = pruneWatchlist(SYMBOLS_FILE, OUTPUT_JSON, MARKET);
  if (removed.length > 0) {
    console.log(`🧹 已从 watchlist 移除规避/做空股票: ${removed.join(', ')}`);
  }
}

main().catch(err => {
  console.error('致命错误:', err);
  process.exit(1);
});
