#!/usr/bin/env node
/**
 * HK 合并分析：技术面 × 新闻情绪 → 最终交易排名 + 入场/止损/目标位
 * Combined = TechScore × 0.6 + NewsScore × 0.4
 *          + (趋势类 ? +5 : 0) - (过热梯级惩罚)
 *          + (全周期ADX>30 ? +8 : 0) + (全周期RSI 60-75 ? +5 : 0)
 *
 * 与 CN 同样的合并公式（已经过回溯优化），适用于港股（同样为亚洲市场结构）。
 *
 * 输入契约：
 *   ./watchlist/hk_tech_signals.json   ← pipeline/3-technical/analyze_tech_hk_mtf.mjs
 *   ./watchlist/hk_news_signals.json   ← pipeline/2-news/analyze_hk_news.mjs
 *
 * 输出：
 *   ./watchlist/hk_combined_signals.md  （覆盖最新）
 *   ./reports/<YYYY-MM-DD>/hk_*.{md,json}  （日期快照）
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { snapshotMarket } from '../lib/snapshot.mjs';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

const TECH_JSON = './watchlist/hk_tech_signals.json';
const NEWS_JSON = './watchlist/hk_news_signals.json';
const OUT_MD    = './watchlist/hk_combined_signals.md';

function loadJson(p, label) {
  if (!existsSync(p)) {
    console.error(`✗ 缺少 ${label}：${p}\n  请先运行 \`npm run ${label}:hk\``);
    process.exit(1);
  }
  return JSON.parse(readFileSync(p, 'utf8'));
}

function classifyNews(signal) {
  const s = String(signal ?? '');
  const overheated = /过热/.test(s);
  const noTrade    = /No Trade|无数据/.test(s);
  const longSig    = /Long/.test(s) && !overheated && !noTrade;
  const shortSig   = (/Short/.test(s) || /规避/.test(s)) && !longSig && !overheated;
  return { overheated, long: longSig, short: shortSig };
}

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

const ALL_TFS = ['1W', '1D', '4H', '1H'];
function allTfAdxAbove30(td) {
  const tfs = td?.tf;
  if (!tfs) return false;
  return ALL_TFS.every(k => tfs[k]?.adx != null && tfs[k].adx > 30);
}
function allTfRsiInRange(td, lo, hi) {
  const tfs = td?.tf;
  if (!tfs) return false;
  return ALL_TFS.every(k => tfs[k]?.rsi != null && tfs[k].rsi >= lo && tfs[k].rsi <= hi);
}
function calcOverheatPenalty(cls, isTrendy, td) {
  if (!cls.overheated) return 0;
  if (isTrendy) return 0;
  if (allTfAdxAbove30(td)) return 2;
  return 5;
}

function gradeOf(tech, cls) {
  if (cls.overheated && tech >= 38) return 'C+';
  if (cls.long && !cls.overheated && tech >= 30) return 'A';
  if (cls.long && !cls.overheated && tech >= 15) return 'B';
  if (!cls.overheated && !cls.short && tech >= 20) return 'C';
  return 'D';
}

function gradeEmoji(g) {
  return g === 'A' ? '🟢' : g === 'B' ? '🔵' : g === 'C+' ? '🟡' : g === 'C' ? '⚪' : '⚫';
}

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
    const overheatPenalty = calcOverheatPenalty(cls, isTrendy, td);
    const trendyBonus = isTrendy ? 5 : 0;
    const adxAllBonus = allTfAdxAbove30(td) ? 8 : 0;
    const rsiAllBonus = allTfRsiInRange(td, 60, 75) ? 5 : 0;
    const combined  = +((techScore * 0.6) + (newsScore * 0.4) + trendyBonus + adxAllBonus + rsiAllBonus - overheatPenalty).toFixed(1);
    const levels    = calcLevels(td.price, td.atr_pct, td.type);
    const grade     = gradeOf(techScore, cls);
    rows.push({
      sym, name: nd.name || td.name || sym,
      td, nd, cls, techScore, newsScore, combined, levels, grade,
    });
  }
  rows.sort((a, b) => b.combined - a.combined);

  const date = new Date().toISOString().slice(0, 10);
  const L = [];
  const p = s => L.push(s);

  p(`# 综合分析报告 · 最终入场排名（HK）`);
  p(`**日期:** ${date}　　**方法:** 技术面 60% × 新闻情绪 40% - 过热梯级惩罚<br/>**增强:** 全周期ADX一致性+8 + 全周期RSI持续性+5`);
  p(`**公式:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (趋势类 ? +5 : 0) + (全周期ADX>30 ? +8 : 0) + (全周期RSI 60-75 ? +5 : 0) - 过热梯级惩罚（有ADX支撑:-2,无:-5,趋势类免罚）`);
  p(`**数据源:** ${TECH_JSON} + ${NEWS_JSON}`);
  p('');
  p('---');
  p('');

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
      p(`| 当前价 | ${r.td.price ?? '待获取'} HKD |`);
      p(`| **入场价** | **${lv.entry ?? '待确认'}** |`);
      p(`| **止损价** | **${lv.stop ?? '-'}** (ATR×${lv.stopMul ?? '-'}) |`);
      p(`| **目标价** | **${lv.target ?? '-'}** |`);
      p(`| 盈亏比 | ${lv.rr != null ? lv.rr+':1' : '-'} |`);
      p(`| RSI | ${r.td.rsi ?? '-'} |`);
      p(`| ATR% | ${r.td.atr_pct ?? '-'}% |`);
      p(`| EMA20 距离 | ${r.td.ema20d_pct ?? '-'}% |`);
      p(`| 是否追涨 | ${r.td.chase ? '**YES**' : 'NO'} |`);
      p(`| 多周期对齐 | ${r.td.alignment ?? '-'} |`);
      p(`| RS vs HSI | ${r.td.rs != null ? (r.td.rs >= 0 ? '+' : '') + r.td.rs + '%' : '-'} |`);
      p(`| 风险标注 | ${(r.td.flags ?? []).join(' ') || '✅无重大风险'} |`);
      p('');
    });
  }

  const cPlus = rows.filter(r => r.grade === 'C+');
  if (cPlus.length) {
    p('---');
    p('');
    p('## 🟡 C+ 级 — 等回调再入（技术强但新闻过热，勿追高）');
    p('');
    p('> 港股流动性较 A 股薄，新闻过热往往伴随快速回吐，建议等 -5%~-8% 回调后低吸。');
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
  p('## ⚠️ 港股特别注意事项');
  p('');
  p('1. **过热股票（新闻信号=过热）禁止现价追入**，等回调后再考虑');
  p('2. **止损执行纪律**：跌破止损价日线收盘价即出');
  p('3. **盈亏比 < 1.5:1** 的标的降低仓位或跳过');
  p('4. **T+0 机制**：港股可当日回转；intraday 急拉急回时优先看 4H/1H 信号');
  p('5. **无涨跌停硬限制**：除新股首日外港股无每日涨跌停板，需更严的 ATR 止损纪律');
  p('6. **货币风险**：以 HKD 计价；HKD 与 USD 联系汇率，但需注意港元利率/资金面变化');
  p('7. **A+H 双重上市**：同时参考 cn_combined_signals.md，A/H 走势差可作为情绪指标');
  p('8. **仓位控制**：A 级 25%（比 A 股略保守，流动性折扣），B 级 18%，C+ 级等回调后 12%');
  p('');
  p(`*报告生成时间: ${new Date().toLocaleString('zh-CN')}*`);

  writeFileSync(OUT_MD, L.join('\n'), 'utf8');

  console.log('═══════════════════════════════════════════');
  console.log('         最终综合排名 TOP 20 (HK)');
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

  const snap = snapshotMarket('hk');
  console.log(`📸 快照: ${snap.dir} (${snap.files.length} 个文件)\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
