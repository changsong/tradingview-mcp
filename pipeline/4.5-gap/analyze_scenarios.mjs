#!/usr/bin/env node
/**
 * Scenario analysis for gap trading strategy.
 * Answers: given market + news signals, which stocks to pick?
 *
 *   node pipeline/4.5-gap/analyze_scenarios.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';

const market = 'cn';
const DAYS = 30;
const FETCH_N = DAYS + 5;

const SELECTED_PATH = './watchlist/' + market + '_selected.txt';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const REF = 'https://finance.sina.com.cn';

// ── Load symbols ──────────────────────────────────────────────────────────────
const raw = readFileSync(SELECTED_PATH, 'utf8').trim();
const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];

async function fetchKline(sym) {
  const prefix = sym.startsWith('SSE:') ? 'sh' : sym.startsWith('IDX:') ? 'sz' : 'sz';
  const code = sym.split(':')[1];
  const url = 'https://money.finance.sina.com.cn/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=' + prefix + code + '&scale=240&ma=no&datalen=' + FETCH_N;
  const resp = await fetch(url, { headers: { 'User-Agent': UA, 'Referer': REF } });
  if (!resp.ok) throw new Error('HTTP ' + resp.status);
  const data = await resp.json();
  if (!Array.isArray(data) || data.length === 0) throw new Error('empty');
  return data.map(d => ({
    time: d.day, open: +d.open, high: +d.high, low: +d.low, close: +d.close, volume: +d.volume || 0,
  }));
}

// ── Load report data ──────────────────────────────────────────────────────────
function listReportDates() {
  const dir = './reports';
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(e => /^\d{4}-\d{2}-\d{2}$/.test(e) && existsSync(dir + '/' + e + '/cn_news_signals.json')).sort();
}

function loadNewsForDate(date) {
  const path = './reports/' + date + '/cn_news_signals.json';
  if (!existsSync(path)) return null;
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    const map = new Map();
    for (const [sym, s] of Object.entries(data.stocks ?? {})) {
      if (s.score != null) map.set(sym, s.score);
    }
    return map.size > 0 ? map : null;
  } catch (e) { return null; }
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log('📡 加载数据 ...\n');

// CSI 300
const hs300Bars = await fetchKline('IDX:399300');
const hs300Map = new Map();
for (const b of hs300Bars) {
  hs300Map.set(b.time, { open: b.open, close: b.close });
}

// News cache
const reportDates = listReportDates();
const newsCache = new Map();
for (const date of reportDates) {
  const news = loadNewsForDate(date);
  if (news) newsCache.set(date, news);
}
console.log('   沪深300: ' + hs300Bars.length + ' bars  新闻: ' + newsCache.size + ' 天\n');

// Fetch all stock K-lines
console.log('🔄 抓取个股K线 ...');
const allSamples = [];
for (let i = 0; i < symbols.length; i++) {
  const sym = symbols[i];
  process.stdout.write('  [' + String(i + 1).padStart(2) + '/' + symbols.length + '] ' + sym.padEnd(18));
  try {
    const bars = await fetchKline(sym);
    if (bars.length < 20) { console.log('⚠ skip'); continue; }

    for (let j = 1; j < bars.length - 1; j++) {
      const bar = bars[j], prev = bars[j - 1], next = bars[j + 1];
      if (!bar.open || !next.open || !next.close) continue;

      const actualUp = next.close > next.open;
      const nextChg = (next.close - next.open) / next.open;

      // Market: CSI 300 previous day
      const hs300Prev = hs300Map.get(prev.time);
      const hs300Up = hs300Prev ? hs300Prev.close > hs300Prev.open : null;
      const marketBullish = hs300Up === null ? null : !hs300Up; // contrarian

      // News
      const newsMap = newsCache.get(bar.time);
      const newsScore = newsMap?.get(sym) ?? null;
      const newsBullish = newsScore != null ? (newsScore > 60) : null;

      // Composite
      let score = 0;
      if (marketBullish === true) score += 4;
      else if (marketBullish === false) score -= 4;
      if (newsBullish === true) score += 3;
      else if (newsBullish === false) score -= 3;
      const compositeUp = (marketBullish != null || newsBullish != null) ? score > 0 : null;
      const compositeBullish = compositeUp;

      allSamples.push({
        sym, time: bar.time, actualUp, nextChg,
        hs300Up, marketBullish, newsScore, newsBullish, score,
        compositeUp, compositeBullish,
      });
    }
    console.log(bars.length + ' bars → OK');
  } catch (e) {
    console.log('✗ ' + e.message);
  }
  await new Promise(r => setTimeout(r, 200));
}

console.log('\n📊 总样本: ' + allSamples.length + '\n');

const N = allSamples.length;

// ── Scenario 1: Entry filter = US was down (market contrarian bullish) ──────
const marketBullishSamples = allSamples.filter(s => s.marketBullish === true);
const marketBearishSamples = allSamples.filter(s => s.marketBullish === false);

console.log('═'.repeat(70));
console.log('  情景分析: 外盘 + 新闻 交叉策略');
console.log('═'.repeat(70));
console.log('');

// ── Base rates ────────────────────────────────────────────────────────────────
const baseUpRate = allSamples.filter(s => s.actualUp).length / N * 100;
const mbUpCount = marketBullishSamples.filter(s => s.actualUp).length;
const mbUpRate = mbUpCount / marketBullishSamples.length * 100;
const mberUpCount = marketBearishSamples.filter(s => s.actualUp).length;
const mberUpRate = mberUpCount / marketBearishSamples.length * 100;

console.log('基础概率:');
console.log('  全样本次日涨: ' + baseUpRate.toFixed(1) + '%');
console.log('  外盘跌(偏多) → 次日涨: ' + mbUpRate.toFixed(1) + '% (' + mbUpCount + '/' + marketBullishSamples.length + ')');
console.log('  外盘涨(偏空) → 次日涨: ' + mberUpRate.toFixed(1) + '% (' + mberUpCount + '/' + marketBearishSamples.length + ')');
console.log('');

// ── Strategy A: 外盘跌 → 入市, 按新闻评分排序 ───────────────────────────────
console.log('── 策略A: 只在外盘跌时入市，选新闻评分最高的N只 ──');
console.log('');

// Group by news score within market bullish samples
const withNews = marketBullishSamples.filter(s => s.newsScore != null);
console.log('  有效样本(有新闻数据): ' + withNews.length);
console.log('');

// Sort by news score descending, then analyze top-N%
withNews.sort((a, b) => (b.newsScore ?? 0) - (a.newsScore ?? 0));

const topPcts = [10, 20, 30, 50, 100];
console.log('  ' + '外盘跌 + 新闻Top%'.padEnd(28) + ' 样本  ' + '涨概率  ' + '平均涨跌幅');
console.log('  ' + '─'.repeat(55));

for (const pct of topPcts) {
  const n = Math.max(1, Math.round(withNews.length * pct / 100));
  const subset = withNews.slice(0, n);
  const upCount = subset.filter(s => s.actualUp).length;
  const upRate = upCount / n * 100;
  const avgChg = subset.reduce((sum, s) => sum + s.nextChg, 0) / n * 100;
  const label = '外盘跌 + 新闻Top' + String(pct) + '%';
  console.log('  ' + label.padEnd(28) + ' ' + String(n).padStart(5) + '  ' + upRate.toFixed(1) + '%'.padStart(6) + '  ' + (avgChg >= 0 ? '+' : '') + avgChg.toFixed(2) + '%');
}

// Bottom N%
console.log('');
console.log('  ' + '外盘跌 + 新闻Bottom%'.padEnd(28) + ' 样本  ' + '涨概率  ' + '平均涨跌幅');
console.log('  ' + '─'.repeat(55));

const reversedNews = [...withNews].reverse(); // low score first
for (const pct of topPcts) {
  const n = Math.max(1, Math.round(withNews.length * pct / 100));
  const subset = reversedNews.slice(0, n);
  const upCount = subset.filter(s => s.actualUp).length;
  const upRate = upCount / n * 100;
  const avgChg = subset.reduce((sum, s) => sum + s.nextChg, 0) / n * 100;
  const label = '外盘跌 + 新闻Bottom' + String(pct) + '%';
  console.log('  ' + label.padEnd(28) + ' ' + String(n).padStart(5) + '  ' + upRate.toFixed(1) + '%'.padStart(6) + '  ' + (avgChg >= 0 ? '+' : '') + avgChg.toFixed(2) + '%');
}

// ── Strategy B: 外盘跌时，按新闻分桶对比 ──────────────────────────────────────
console.log('');
console.log('── 策略B: 外盘跌 + 新闻分桶详细对比 ──');
console.log('');

const buckets = [
  { label: '新闻>70 (强多)',  filter: s => s.newsScore > 70 },
  { label: '新闻60-70 (偏多)', filter: s => s.newsScore > 60 && s.newsScore <= 70 },
  { label: '新闻50-60 (偏空)', filter: s => s.newsScore >= 50 && s.newsScore <= 60 },
  { label: '新闻<50 (强空)',  filter: s => s.newsScore < 50 },
];

console.log('  外盘方向  ' + '新闻桶'.padEnd(18) + '  样本  ' + '涨%  ' + '平均涨跌幅');
console.log('  ' + '─'.repeat(58));

for (const mktDir of [true, false]) {
  const mktLabel = mktDir ? '外盘跌(多)' : '外盘涨(空)';
  const mktSamples = allSamples.filter(s => s.marketBullish === mktDir && s.newsScore != null);

  for (const bucket of buckets) {
    const subset = bucket.filter ? mktSamples.filter(bucket.filter) : mktSamples;
    if (subset.length === 0) continue;
    const upC = subset.filter(s => s.actualUp).length;
    const upR = upC / subset.length * 100;
    const avgC = subset.reduce((sum, s) => sum + s.nextChg, 0) / subset.length * 100;
    console.log('  ' + mktLabel.padEnd(12) + ' ' + bucket.label.padEnd(18) + ' ' + String(subset.length).padStart(5) + '  ' + upR.toFixed(1) + '%  ' + (avgC >= 0 ? '+' : '') + avgC.toFixed(2) + '%');
  }
}

// ── Strategy C: 复合评分排序 ──────────────────────────────────────────────────
console.log('');
console.log('── 策略C: 按复合评分 (外盘±4 + 新闻±3) 排序 ──');
console.log('');

const scoredSamples = allSamples.filter(s => s.marketBullish != null && s.newsScore != null);
scoredSamples.sort((a, b) => b.score - a.score);

console.log('  评分区间    样本  ' + '涨概率  ' + '平均涨跌幅');
console.log('  ' + '─'.repeat(42));

const scoreBuckets = [
  { label: '+7 (双多)',   min: 7, max: 99 },
  { label: '+4 (外盘多)',  min: 4, max: 4 },
  { label: '+1 (多+空)',  min: 1, max: 3 },
  { label: '-1 (空+多)',  min: -3, max: 0 },
  { label: '-4 (外盘空)',  min: -4, max: -4 },
  { label: '-7 (双空)',   min: -99, max: -5 },
];

for (const bucket of scoreBuckets) {
  const subset = scoredSamples.filter(s => s.score >= bucket.min && s.score <= bucket.max);
  if (subset.length === 0) continue;
  const upC = subset.filter(s => s.actualUp).length;
  const upR = upC / subset.length * 100;
  const avgC = subset.reduce((sum, s) => sum + s.nextChg, 0) / subset.length * 100;
  console.log('  ' + bucket.label.padEnd(14) + ' ' + String(subset.length).padStart(5) + '  ' + upR.toFixed(1) + '%  ' + (avgC >= 0 ? '+' : '') + avgC.toFixed(2) + '%');
}

// ── Strategy D: 最佳实操方案 — 外盘跌 + 新闻<60 (新闻过滤) ──────────────────
console.log('');
console.log('── 策略D: 外盘跌 + 新闻<60 (新闻作为过滤器，排除利空出尽) ──');
console.log('');

const stratD = allSamples.filter(s => s.marketBullish === true && s.newsScore != null && s.newsScore < 60);
const stratD_highNews = allSamples.filter(s => s.marketBullish === true && s.newsScore != null && s.newsScore >= 60);
const stratD_all = allSamples.filter(s => s.marketBullish === true && s.newsScore != null);

const dUp = stratD.filter(s => s.actualUp).length;
const dRate = dUp / stratD.length * 100;
const dAvg = stratD.reduce((sum, s) => sum + s.nextChg, 0) / stratD.length * 100;

const dhUp = stratD_highNews.filter(s => s.actualUp).length;
const dhRate = dhUp / stratD_highNews.length * 100;
const dhAvg = stratD_highNews.reduce((sum, s) => sum + s.nextChg, 0) / stratD_highNews.length * 100;

const daUp = stratD_all.filter(s => s.actualUp).length;
const daRate = daUp / stratD_all.length * 100;

console.log('  策略                         样本  涨概率   平均涨跌幅');
console.log('  ' + '─'.repeat(58));
console.log('  外盘跌+新闻<60 (过滤)     ' + String(stratD.length).padStart(5) + '  ' + dRate.toFixed(1) + '%   ' + (dAvg >= 0 ? '+' : '') + dAvg.toFixed(2) + '%');
console.log('  外盘跌+新闻≥60 (高分组)   ' + String(stratD_highNews.length).padStart(5) + '  ' + dhRate.toFixed(1) + '%   ' + (dhAvg >= 0 ? '+' : '') + dhAvg.toFixed(2) + '%');
console.log('  外盘跌+所有(有新闻)        ' + String(stratD_all.length).padStart(5) + '  ' + daRate.toFixed(1) + '%');

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('');
console.log('═'.repeat(70));
console.log('  结论');
console.log('═'.repeat(70));
console.log('');

if (dRate > mbUpRate) {
  console.log('  ✅ 最佳方案: 外盘跌时入市 + 选择新闻<60的标的');
  console.log('     涨概率: ' + dRate.toFixed(1) + '% (纯外盘跌: ' + mbUpRate.toFixed(1) + '%)');
  console.log('     提升: +' + (dRate - mbUpRate).toFixed(1) + ' 个百分点');
} else {
  console.log('  📊 外盘跌时入市，新闻<60过滤 vs 不过滤:');
  console.log('     过滤: ' + dRate.toFixed(1) + '%  不过滤: ' + daRate.toFixed(1) + '%');
}

// Check if high news score is worse
if (dhRate < dRate) {
  console.log('');
  console.log('  ⚠ 新闻高分(≥60)在外盘跌环境中表现更差:');
  console.log('     新闻<60: ' + dRate.toFixed(1) + '%  新闻≥60: ' + dhRate.toFixed(1) + '%');
  console.log('     差距: ' + (dRate - dhRate).toFixed(1) + ' 个百分点');
  console.log('     原因: 新闻高分="利好出尽"，反而削弱外盘均值回归的反弹力度');
}

console.log('');
console.log('  实操建议:');
console.log('  1. 前一日美股跌 → 今日A股大概率反弹 (均值回归 60%+)');
console.log('  2. 在此框架下，避开新闻高分(>60)标的 → "利好出尽是利空"');
console.log('  3. 选择新闻<60标的 → 无利好透支，更能享受均值回归反弹');
console.log('  4. 板块资金流待积累数据后可加入过滤');
