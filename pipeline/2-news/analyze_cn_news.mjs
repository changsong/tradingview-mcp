#!/usr/bin/env node
/**
 * A股新闻情绪量化分析 → 可交易信号 (v2 — LLM 主分类)
 *
 * 流程：
 *  1. 读取 cn_selected.txt 股票列表
 *  2. 并行抓取每只股票的新闻/研报/公告（最近7天）
 *  3. 调用共享 lib/analyze.mjs：relevance → LLM 分类 → 权重 → 模式 → 信号
 *  4. 输出: Long / Short / No Trade + 触发原因（结构与旧版兼容）
 *
 * v2 变化：移除旧的内联关键字 classify/sentiment/weight；统一到 US 同款 lib。
 * LLM 失败的股票走 No Data 分支，不退回关键字。
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { searchNews, extractCode } from '../../src/core/webNews.js';
import { analyzeStockData } from './lib/analyze.mjs';
import { isLLMEnabled } from './lib/llm_common.mjs';

// 锁定 CWD 为项目根，使 ./watchlist 等相对路径稳定
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

// ─── 配置 ────────────────────────────────────────────────────────────────────
const SYMBOLS_FILE = './watchlist/cn_selected.txt';
const OUTPUT_MD    = './watchlist/cn_news_signals.md';
const OUTPUT_JSON  = './watchlist/cn_news_signals.json';
const DAYS_BACK    = 7;
const NEWS_COUNT   = 20;
const BATCH_SIZE   = 5;
const MARKET       = 'cn';

const llmFlag = !process.argv.includes('--no-llm');

const today  = new Date();
const cutoff = new Date(today);
cutoff.setDate(today.getDate() - DAYS_BACK);
const cutoffStr = cutoff.toISOString().split('T')[0];
const todayStr  = today.toISOString().split('T')[0];

// ─── 单股分析 ─────────────────────────────────────────────────────────────────
async function analyzeStock(symbol) {
  const code = extractCode(symbol);
  process.stdout.write(`  [${symbol}] 抓取中...`);

  try {
    const result = await searchNews({ symbol, source: 'news', count: NEWS_COUNT });

    // 合并新闻 + 研报
    const allNews = [
      ...result.news.map(n     => ({ ...n, category: 'news'     })),
      ...result.research.map(n => ({ ...n, category: 'research' })),
    ];

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

// ─── 报告生成 ─────────────────────────────────────────────────────────────────
function buildReport(results) {
  const lines = [];
  const h = s => lines.push(s);

  h(`# A股新闻情绪分析 · 交易信号报告 (v2 LLM)`);
  h(`**分析日期:** ${todayStr}　　**新闻窗口:** ${cutoffStr} ~ ${todayStr}（最近7天）`);
  h(`**股票池:** cn_selected.txt (${results.length}只)　　**评分:** 0-100 归一化 (中性=50)`);
  h(`**LLM 主分类:** ${llmFlag ? (isLLMEnabled() ? '已启用 (DeepSeek-reasoner)' : '⚠ 无 API Key，全部 No Data') : '已关闭，全部 No Data'}`);
  h('');

  // ── 汇总表 ──
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

  // 分组
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

  // ── 附录 ──
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
  h(`*生成时间: ${new Date().toISOString()} | 数据来源: 东方财富/新浪财经/巨潮资讯/研报${llmFlag ? ' + DeepSeek 主分类' : ''}*`);

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

// ─── 主流程 ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   A股新闻情绪量化分析 → 可交易信号  v2 (LLM 主分类)     ║');
  console.log(`║   分析窗口: ${cutoffStr} ~ ${todayStr}                    ║`);
  console.log(`║   LLM 分类: ${llmFlag ? (isLLMEnabled() ? '已启用 (DeepSeek-reasoner)' : '⚠ 无 API Key') : '已关闭'}            ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  const content = readFileSync(SYMBOLS_FILE, 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim()).filter(Boolean);
  console.log(`✅ 加载 ${symbols.length} 只股票\n`);

  const results = [];
  const batches  = Math.ceil(symbols.length / BATCH_SIZE);

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

  // 按归一化分降序
  results.sort((a, b) => b.score - a.score);

  // ── 终端摘要 ──
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

  // ── 汇总行 ──
  const longs  = results.filter(r => r.signal.includes('Long') && !r.signal.includes('谨慎'));
  const alerts = results.filter(r => (r.patterns ?? []).some(p => p.startsWith('⚠️')));
  const shorts = results.filter(r => r.signal.includes('Short') || r.signal.includes('规避'));

  console.log('\n');
  console.log(`🟢 做多候选: ${longs.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`⚠️  风险股票: ${alerts.map(r => r.name || r.symbol).join(', ') || '无'}`);
  console.log(`🔴 规避股票: ${shorts.map(r => r.name || r.symbol).join(', ') || '无'}`);

  // ── 写报告 ──
  writeFileSync(OUTPUT_MD, buildReport(results), 'utf8');
  console.log(`\n✅ 详细报告已保存: ${OUTPUT_MD}`);

  // ── 写下游契约 JSON（被 4-combined 阶段消费）──
  const json = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    source: 'src/core/webNews.js',
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
}

main().catch(err => {
  console.error('致命错误:', err);
  process.exit(1);
});
