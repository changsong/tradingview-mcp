#!/usr/bin/env node
/**
 * CN 合并分析：技术面 × 新闻情绪 → 最终交易排名 + 入场/止损/目标位
 * Combined = TechScore × 0.6 + NewsScore × 0.4 + (趋势类 ? +5 : 0) - (过热且非趋势类 ? 5 : 0)
 *   （NewsScore 为原始情绪分,中性≈0;趋势类 = 突破型/趋势追涨/趋势延续）
 *
 * 输入契约（pipeline 上游产物）：
 *   ./watchlist/cn_tech_signals.json   ← pipeline/3-technical/analyze_tech_cn_mtf.mjs
 *   ./watchlist/cn_news_signals.json   ← pipeline/2-news/analyze_cn_news.mjs
 *
 * 输出：
 *   ./watchlist/cn_combined_signals.md  （覆盖最新）
 *   ./reports/<YYYY-MM-DD>/cn_*.{md,json}  （日期快照，方便复盘）
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { snapshotMarket } from '../lib/snapshot.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const TECH_JSON = './watchlist/cn_tech_signals.json';
const NEWS_JSON = './watchlist/cn_news_signals.json';
const OUT_MD    = './watchlist/cn_combined_signals.md';

function loadJson(p, label) {
  if (!existsSync(p)) {
    console.error(`✗ 缺少 ${label}：${p}\n  请先运行 \`npm run ${label}:cn\``);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, 'utf8'));
}

// 信号语义识别（基于 v2 信号词典：Long/Short/No Trade/规避/过热）
function classifyNews(signal) {
  const s = String(signal ?? '');
  const overheated = /过热/.test(s);
  const noTrade    = /No Trade|无数据/.test(s);
  // Long 明确：包含 Long 关键词且非过热/非 No Trade
  const longSig    = /Long/.test(s) && !overheated && !noTrade;
  // Short 明确：包含 Short / 规避（无 Long 修饰）
  const shortSig   = (/Short/.test(s) || /规避/.test(s)) && !longSig && !overheated;
  return { overheated, long: longSig, short: shortSig };
}

// 入场/止损/目标位（沿用 archive/scripts/analyze_combined.mjs 公式）
function calcLevels(price, atrPct, tradeType) {
  if (price == null || atrPct == null) return { entry: null, stop: null, target: null, rr: null };
  const t = String(tradeType ?? '');
  let entry, stop, target, stopMul;

  if (t.includes('突破')) {
    entry  = price * 1.003;
    stopMul = 1.8;
    stop   = price * (1 - atrPct * 1.8 / 100);
    target = price * (1 + atrPct * 2.5 / 100);
  } else if (t.includes('回调低吸')) {
    entry  = price * 0.985;
    stopMul = 2.0;
    stop   = price * (1 - atrPct * 2.0 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  } else if (t.includes('趋势追涨')) {
    entry  = price;
    stopMul = 1.5;
    stop   = price * (1 - atrPct * 1.5 / 100);
    target = price * (1 + atrPct * 2.2 / 100);
  } else if (t.includes('过热追涨')) {
    entry  = price * 0.95;
    stopMul = 2.2;
    stop   = price * (1 - atrPct * 2.2 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  } else {
    entry  = price;
    stopMul = 1.5;
    stop   = price * (1 - atrPct * 1.5 / 100);
    target = price * (1 + atrPct * 2.0 / 100);
  }

  const round2 = v => +v.toFixed(2);
  entry = round2(entry); stop = round2(stop); target = round2(target);
  const rr = entry === stop ? null : +((target - entry) / (entry - stop)).toFixed(1);
  return { entry, stop, target, rr, stopMul };
}

function gradeOf(tech, cls) {
  if (cls.overheated && tech >= 38) return 'C+';      // 强技术 + 过热 → 等回调
  if (cls.long && !cls.overheated && tech >= 30) return 'A';
  if (cls.long && !cls.overheated && tech >= 15) return 'B';
  if (!cls.overheated && !cls.short && tech >= 20) return 'C';
  return 'D';
}

function gradeEmoji(g) {
  return g === 'A' ? '🟢' : g === 'B' ? '🔵' : g === 'C+' ? '🟡' : g === 'C' ? '⚪' : '⚫';
}

// ───────── 主逻辑 ─────────
async function main() {
  const tech = loadJson(TECH_JSON, 'tech');
  const news = loadJson(NEWS_JSON, 'news');

  console.log(`\n  tech: ${Object.keys(tech.stocks ?? {}).length} 只 (${tech.generated_at})`);
  console.log(`  news: ${Object.keys(news.stocks ?? {}).length} 只 (${news.generated_at})\n`);

  const rows = [];
  const TRENDY_TYPES = /突破型|趋势追涨|趋势延续/;
  for (const [sym, td] of Object.entries(tech.stocks ?? {})) {
    const nd  = news.stocks?.[sym] ?? { score: 0, signal: '无数据', name: td.name };
    const cls = classifyNews(nd.signal);
    const techScore = td.tech_score ?? 0;
    const newsScore = nd.score ?? 0;
    const isTrendy  = TRENDY_TYPES.test(td.type || '');
    const overheatPenalty = (cls.overheated && !isTrendy) ? 5 : 0;
    const trendyBonus = isTrendy ? 5 : 0;
    const combined  = +((techScore * 0.6) + (newsScore * 0.4) - overheatPenalty + trendyBonus).toFixed(1);
    const levels    = calcLevels(td.price, td.atr_pct, td.type);
    const grade     = gradeOf(techScore, cls);
    rows.push({
      sym, name: td.name || nd.name || sym,
      td, nd, cls, techScore, newsScore, combined, levels, grade,
    });
  }
  rows.sort((a, b) => b.combined - a.combined);

  const date = new Date().toISOString().slice(0, 10);
  const L = [];
  const p = s => L.push(s);

  p(`# 综合分析报告 · 最终入场排名（CN）`);
  p(`**日期:** ${date}　　**方法:** 技术面 60% × 新闻情绪 40% - 过热惩罚`);
  p(`**公式:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (趋势类 ? +5 : 0) - (过热且非趋势类 ? 5 : 0)　　（NewsScore 为原始分,中性≈0）`);
  p(`**数据源:** ${TECH_JSON} + ${NEWS_JSON}`);
  p('');
  p('---');
  p('');

  // 全表
  p('## 🏆 最终综合排名（A/B/C+/C 全部纳入）');
  p('');
  p('| 排名 | 名称 | 代码 | 综合分 | 等级 | 技术 | 新闻 | 新闻信号 | 类型 | 入场价 | 止损价 | 目标价 | 盈亏比 | 风险 |');
  p('|------|------|------|--------|------|------|------|---------|------|--------|--------|--------|--------|------|');
  let rank = 0;
  for (const r of rows) {
    if (r.grade === 'D') continue;
    rank++;
    const lv = r.levels;
    const flags = (r.td.flags ?? []).join('/') || '✅';
    p(`| ${rank} | **${r.name}** | ${r.sym} | **${r.combined}** | ${gradeEmoji(r.grade)}${r.grade} | ${r.techScore} | ${r.newsScore} | ${r.nd.signal ?? '-'} | ${r.td.type ?? '-'} | ${lv.entry ?? '待确认'} | ${lv.stop ?? '-'} | ${lv.target ?? '-'} | ${lv.rr != null ? lv.rr+':1' : '-'} | ${flags} |`);
  }
  p('');
  p('---');
  p('');

  // A 级详细
  const aGrade = rows.filter(r => r.grade === 'A');
  if (aGrade.length) {
    p('## 🟢 A 级 — 立即可介入（技术 + 新闻双确认，无过热）');
    p('');
    aGrade.forEach((r, i) => {
      const lv = r.levels;
      p(`### ${i+1}. ${r.name} (${r.sym})`);
      p('');
      p('| 维度 | 内容 |');
      p('|------|------|');
      p(`| 综合评分 | **${r.combined}** |`);
      p(`| 技术分 | ${r.techScore} (${r.td.type ?? '-'}) |`);
      p(`| 新闻分 | ${r.newsScore} → ${r.nd.signal ?? '-'} |`);
      p(`| 当前价 | ${r.td.price ?? '待获取'} |`);
      p(`| **入场价** | **${lv.entry ?? '待确认'}** |`);
      p(`| **止损价** | **${lv.stop ?? '-'}** (ATR×${lv.stopMul ?? '-'}) |`);
      p(`| **目标价** | **${lv.target ?? '-'}** |`);
      p(`| 盈亏比 | ${lv.rr != null ? lv.rr+':1' : '-'} |`);
      p(`| RSI | ${r.td.rsi ?? '-'} |`);
      p(`| ATR% | ${r.td.atr_pct ?? '-'}% |`);
      p(`| EMA20 距离 | ${r.td.ema20d_pct ?? '-'}% |`);
      p(`| 是否追涨 | ${r.td.chase ? '**YES**' : 'NO'} |`);
      p(`| 多周期对齐 | ${r.td.alignment ?? '-'} |`);
      p(`| 风险标注 | ${(r.td.flags ?? []).join(' ') || '✅无重大风险'} |`);
      p('');
    });
  }

  // C+ 级（过热等回调）
  const cPlus = rows.filter(r => r.grade === 'C+');
  if (cPlus.length) {
    p('---');
    p('');
    p('## 🟡 C+ 级 — 等回调再入（技术强但新闻过热，勿追高）');
    p('');
    p('> 以下股票技术面强势，但新闻情绪已过热。建议等待 -5%~-8% 回调后低吸，不要现价追入。');
    p('');
    p('| 股票 | 代码 | 综合分 | 技术 | 新闻 | 当前价 | 建议等待入场价 | 止损价 | 目标价 |');
    p('|------|------|--------|------|------|--------|--------------|--------|--------|');
    cPlus.forEach(r => {
      const price = r.td.price, atr = r.td.atr_pct;
      const wait  = price && atr ? +(price * 0.94).toFixed(2) : '待确认';
      const stop  = price && atr ? +(price * (1 - atr * 2.0 / 100)).toFixed(2) : '-';
      const tgt   = price && atr ? +(price * (1 + atr * 2.0 / 100)).toFixed(2) : '-';
      p(`| **${r.name}** | ${r.sym} | ${r.combined} | ${r.techScore} | ${r.newsScore}(过热) | ${price ?? '-'} | **${wait}** | ${stop} | ${tgt} |`);
    });
    p('');
  }

  p('---');
  p('');
  p('## ⚠️ 注意事项');
  p('');
  p('1. **过热股票（新闻信号=过热）禁止现价追入**，即使技术面强势，等回调后再考虑');
  p('2. **止损执行纪律**：跌破止损价日线收盘价即出，不要抱侥幸');
  p('3. **盈亏比 < 1.5:1** 的标的降低仓位或跳过');
  p('4. **A股 ±10% 涨跌停机制**：目标价若超过明日涨停板则分批止盈');
  p('5. **仓位控制**：A 级 30%，B 级 20%，C+ 级等回调后 15%，单只最大不超过总资金 30%');
  p('');
  p(`*报告生成时间: ${new Date().toLocaleString('zh-CN')}*`);

  writeFileSync(OUT_MD, L.join('\n'), 'utf8');

  // 控制台摘要
  console.log('═══════════════════════════════════════════');
  console.log('         最终综合排名 TOP 20');
  console.log('═══════════════════════════════════════════');
  console.log('排名  名称          等级  综合分  入场价   止损价   目标价  盈亏比');
  let n = 0;
  for (const r of rows) {
    if (r.grade === 'D') continue;
    if (++n > 20) break;
    const lv = r.levels;
    const e = lv.entry  != null ? String(lv.entry).padStart(8)  : '  待确认';
    const s = lv.stop   != null ? String(lv.stop).padStart(8)   : '       -';
    const t = lv.target != null ? String(lv.target).padStart(8) : '       -';
    const rr = lv.rr != null ? `${lv.rr}:1` : '-';
    const ge = gradeEmoji(r.grade) + r.grade.padEnd(2);
    console.log(`${String(n).padStart(3)}   ${(r.name||'').padEnd(12)}  ${ge}  ${String(r.combined).padStart(5)}  ${e}${s}${t}  ${rr}`);
  }
  console.log('═══════════════════════════════════════════');
  console.log(`\n✅ 报告已保存: ${OUT_MD}`);

  // 快照到 reports/<date>/
  const snap = snapshotMarket('cn');
  console.log(`📸 快照: ${snap.dir} (${snap.files.length} 个文件)\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
