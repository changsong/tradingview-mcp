#!/usr/bin/env node
/**
 * Gap prediction backtest — External-3D model full validation.
 *
 *   node pipeline/4.5-gap/backtest_gap.mjs [market] [days]
 *
 * Dimensions:
 *   1. 隔夜外盘·均值回归 (±4): CSI 300 proxy — always available
 *   2. 新闻情绪 (±3):           from reports/<date>/<market>_news_signals.json
 *   3. 板块资金流 (±2):         from reports/<date>/<market>_sector_flow.json
 *                              + F10 CoreConception API for stock→board mapping
 *
 * Uses Sina finance HTTP API for historical daily K-line data.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';

const market  = process.argv[2] || 'cn';
const DAYS    = parseInt(process.argv[3] || '30', 10);
const FETCH_N = DAYS + 5;

const SELECTED_PATH = './watchlist/' + market + '_selected.txt';
const OUT_MD        = './watchlist/' + market + '_gap_backtest.md';
const OUT_JSON      = './watchlist/' + market + '_gap_backtest.json';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const REF = 'https://finance.sina.com.cn';

// ── Load symbols ──────────────────────────────────────────────────────────────
if (!existsSync(SELECTED_PATH)) { console.error('❌ ' + SELECTED_PATH + ' 不存在'); process.exit(1); }
const raw = readFileSync(SELECTED_PATH, 'utf8').trim();
const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];

// ── Fetch helpers ─────────────────────────────────────────────────────────────

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

/** Fetch a stock's concept boards via F10 API. Returns [{name, rank, is_precise}]. */
async function fetchStockBoards(sym) {
  try {
    const prefix = sym.startsWith('SSE:') ? 'SH' : 'SZ';
    const code = sym.split(':')[1];
    const url = 'https://emweb.securities.eastmoney.com/PC_HSF10/CoreConception/PageAjax?code=' + prefix + code;
    const resp = await fetch(url, { headers: { 'User-Agent': UA } });
    const json = await resp.json();
    if (!json?.ssbk) return [];
    return json.ssbk.map(b => ({
      name: b.BOARD_NAME,
      rank: b.BOARD_RANK,
      is_precise: b.IS_PRECISE === '1',
    })).sort((a, b) => a.rank - b.rank);
  } catch (e) {
    return [];
  }
}

// ── Report data loaders ───────────────────────────────────────────────────────

/** List all report dates that have news_signals.json. Returns sorted date array. */
function listReportDates() {
  const reportsDir = './reports';
  if (!existsSync(reportsDir)) return [];
  const dates = [];
  for (const entry of readdirSync(reportsDir)) {
    const p = reportsDir + '/' + entry;
    try {
      if (existsSync(p + '/' + market + '_news_signals.json')) {
        // Validate it's a YYYY-MM-DD directory
        if (/^\d{4}-\d{2}-\d{2}$/.test(entry)) dates.push(entry);
      }
    } catch (e) { /* skip */ }
  }
  return dates.sort();
}

/** Load news data for a specific date. Returns Map<symbol, score> or null. */
function loadNewsForDate(date) {
  const path = './reports/' + date + '/' + market + '_news_signals.json';
  if (!existsSync(path)) return null;
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    const map = new Map();
    for (const [sym, s] of Object.entries(data.stocks ?? {})) {
      if (s.score != null) map.set(sym, s.score);
    }
    return map.size > 0 ? map : null;
  } catch (e) {
    return null;
  }
}

/** Load sector flow data for a specific date. Returns {top_boards:Set, bottom_boards:Set} or null. */
function loadSectorForDate(date) {
  const path = './reports/' + date + '/' + market + '_sector_flow.json';
  if (!existsSync(path)) return null;
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    return {
      top_boards: new Set(data.top_boards ?? []),
      bottom_boards: new Set(data.bottom_boards ?? []),
    };
  } catch (e) {
    return null;
  }
}

/** Check if a stock's primary boards match sector flow. Returns +2/-2/0 or null if no data. */
function checkSectorMatch(stockBoards, sectorData) {
  if (!sectorData || stockBoards.length === 0) return null;
  const primaryBoards = stockBoards.filter(b => b.rank <= 3);
  for (const b of primaryBoards) {
    if (sectorData.top_boards.has(b.name)) return 2;
    if (sectorData.bottom_boards.has(b.name)) return -2;
  }
  return 0;
}

// ── Backtest core ─────────────────────────────────────────────────────────────

function backtestSymbol(sym, bars, hs300Map, newsCache, sectorCache, stockBoards) {
  const samples = [];

  for (let j = 1; j < bars.length - 1; j++) {
    const bar = bars[j], prev = bars[j - 1], next = bars[j + 1];
    const { open, close } = bar;
    if (!open || !next.open || !next.close) continue;

    const chgPct = (close - open) / open;
    const candle = chgPct >= 0 ? '阳' : '阴';
    const isYang = candle === '阳';

    // Actual next-day direction
    const nextChg = (next.close - next.open) / next.open;
    const actualUp = nextChg >= 0;

    // ── Dimension 1: Market contrarian (always available if CSI 300 exists) ──
    const prevDayDate = prev.time;
    const hs300Prev = hs300Map.get(prevDayDate);
    let hs300Up = null;
    if (hs300Prev != null) hs300Up = hs300Prev.close > hs300Prev.open;
    const marketPred = hs300Up === null ? null : !hs300Up; // contrarian

    // ── Dimension 2: News sentiment (from reports/<today.time>/) ────────────
    const todayDate = bar.time;
    const newsMap = newsCache.get(todayDate);
    const newsScore = newsMap?.get(sym) ?? null;
    let newsPred = null;
    if (newsScore != null) {
      if (newsScore > 60) newsPred = true;
      else if (newsScore < 60) newsPred = false;
    }

    // ── Dimension 3: Sector flow (from reports/<today.time>/) ────────────────
    const sectorData = sectorCache.get(todayDate);
    const sectorContrib = checkSectorMatch(stockBoards, sectorData);
    let sectorPred = null;
    if (sectorContrib != null) {
      sectorPred = sectorContrib > 0 ? true : sectorContrib < 0 ? false : null;
    }

    // ── Composite score (full 3D model) ─────────────────────────────────────
    let score = 0;
    let dimsAvailable = 0;

    if (marketPred != null) {
      score += marketPred ? 4 : -4;
      dimsAvailable++;
    }
    if (newsPred != null) {
      score += newsPred ? 3 : -3;
      dimsAvailable++;
    }
    if (sectorPred != null) {
      score += sectorPred ? 2 : -2;
      dimsAvailable++;
    }
    const compositePred = dimsAvailable >= 1 ? score > 0 : null; // need at least 1 dim

    // ── Market-only composite (for comparison: what if we only had market?) ──
    const marketOnlyPred = marketPred;

    // ── Market+news composite (what if we added news to market?) ─────────────
    let marketNewsPred = null;
    if (marketPred != null && newsPred != null) {
      const mnScore = (marketPred ? 4 : -4) + (newsPred ? 3 : -3);
      marketNewsPred = mnScore > 0;
    }

    samples.push({
      time: bar.time, sym, candle, isYang, nextChg,
      hs300Up, actualUp,
      marketPred,
      newsScore, newsPred,
      sectorContrib, sectorPred,
      score, compositePred, dimsAvailable,
      marketOnlyPred, marketNewsPred,
    });
  }
  return samples;
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log('📋 ' + symbols.length + ' 只标的, 每只 ~' + DAYS + ' 天\n');

// Fetch CSI 300 + stock boards in parallel with report data loading
console.log('📡 抓取沪深300指数 ...');
const hs300Bars = await fetchKline('IDX:399300');
const hs300Map = new Map();
for (const b of hs300Bars) {
  hs300Map.set(b.time, { open: b.open, close: b.close, chg: (b.close - b.open) / b.open });
}
console.log('   ✅ 沪深300: ' + hs300Bars.length + ' bars\n');

// Pre-load all report data (news + sector flow)
console.log('📚 加载历史报告数据 ...');
const reportDates = listReportDates();
const newsCache = new Map();
const sectorCache = new Map();
let newsDates = 0, sectorDates = 0;
for (const date of reportDates) {
  const news = loadNewsForDate(date);
  if (news) { newsCache.set(date, news); newsDates++; }
  const sector = loadSectorForDate(date);
  if (sector) { sectorCache.set(date, sector); sectorDates++; }
}
console.log('   ✅ 新闻情绪: ' + newsDates + ' 天');
console.log('   ✅ 板块资金流: ' + sectorDates + ' 天\n');

// Pre-fetch F10 boards for all stocks
console.log('🏷️  获取个股板块归属 (F10) ...');
const stockBoardMap = new Map();
const boardResults = await Promise.all(symbols.map(async (sym) => {
  const boards = await fetchStockBoards(sym);
  return { sym, boards };
}));
for (const { sym, boards } of boardResults) {
  stockBoardMap.set(sym, boards);
}
let boardCount = 0;
for (const [, boards] of stockBoardMap) { if (boards.length > 0) boardCount++; }
console.log('   ✅ ' + boardCount + '/' + symbols.length + ' 只有板块数据\n');

// Fetch all stock K-lines
console.log('🔄 抓取个股K线 (Sina API) ...');
const allSamples = [];
let fetchOk = 0, fetchFail = 0;

for (let i = 0; i < symbols.length; i++) {
  const sym = symbols[i];
  process.stdout.write('  [' + String(i + 1).padStart(2) + '/' + symbols.length + '] ' + sym.padEnd(18) + ' ');
  try {
    const bars = await fetchKline(sym);
    if (bars.length < 20) { console.log('⚠ ' + bars.length + ' bars, skip'); fetchFail++; continue; }
    const stockBoards = stockBoardMap.get(sym) ?? [];
    const samples = backtestSymbol(sym, bars, hs300Map, newsCache, sectorCache, stockBoards);
    allSamples.push(...samples);
    fetchOk++;
    console.log(bars.length + ' bars → ' + samples.length + ' samples');
  } catch (e) {
    console.log('✗ ' + e.message);
    fetchFail++;
  }
  await new Promise(r => setTimeout(r, 200));
}

console.log('\n✅ 抓取: ' + fetchOk + ' OK / ' + fetchFail + ' fail  总样本: ' + allSamples.length + '\n');

const N = allSamples.length;

// ── Dimension availability ────────────────────────────────────────────────────
const marketSamples    = allSamples.filter(s => s.marketPred != null);
const newsSamples      = allSamples.filter(s => s.newsPred != null);
const sectorSamples    = allSamples.filter(s => s.sectorPred != null);
const compositeSamples = allSamples.filter(s => s.compositePred != null);
const marketNewsSamples = allSamples.filter(s => s.marketNewsPred != null);

// ── Accuracy per dimension ────────────────────────────────────────────────────
function accuracy(samples, predKey) {
  const valid = samples.filter(s => s[predKey] != null);
  if (valid.length === 0) return { correct: 0, total: 0, pct: null };
  const correct = valid.filter(s => s[predKey] === s.actualUp).length;
  return { correct, total: valid.length, pct: correct / valid.length * 100 };
}

const acc = {
  market:       accuracy(allSamples, 'marketPred'),
  news:         accuracy(allSamples, 'newsPred'),
  sector:       accuracy(allSamples, 'sectorPred'),
  marketNews:   accuracy(allSamples, 'marketNewsPred'),
  composite:    accuracy(allSamples, 'compositePred'),
  marketOnly:   accuracy(allSamples, 'marketOnlyPred'),
  candle:       { correct: allSamples.filter(s => s.isYang === s.actualUp).length, total: N, pct: allSamples.filter(s => s.isYang === s.actualUp).length / N * 100 },
  alwaysUp:     { correct: allSamples.filter(s => s.actualUp).length, total: N, pct: allSamples.filter(s => s.actualUp).length / N * 100 },
};

// ── Per-symbol ────────────────────────────────────────────────────────────────
const symStats = new Map();
for (const s of compositeSamples) {
  if (!symStats.has(s.sym)) symStats.set(s.sym, { n: 0, c: 0 });
  const ss = symStats.get(s.sym);
  ss.n++;
  if (s.compositePred === s.actualUp) ss.c++;
}
const symList = [...symStats.entries()]
  .map(([sym, ss]) => ({ sym, n: ss.n, pct: (ss.c / ss.n * 100) }))
  .sort((a, b) => b.pct - a.pct);

// ── CSI 300 correlation ──────────────────────────────────────────────────────
const hs300UpSamples = marketSamples.filter(s => s.hs300Up === true);
const hs300DownSamples = marketSamples.filter(s => s.hs300Up === false);
const baseRate = marketSamples.filter(s => s.actualUp).length / marketSamples.length * 100;
const upThenUp = hs300UpSamples.filter(s => s.actualUp).length;
const upThenUpPct = hs300UpSamples.length > 0 ? upThenUp / hs300UpSamples.length * 100 : 0;
const downThenUp = hs300DownSamples.filter(s => s.actualUp).length;
const downThenUpPct = hs300DownSamples.length > 0 ? downThenUp / hs300DownSamples.length * 100 : 0;

// ── Console report ────────────────────────────────────────────────────────────
const bar = '═'.repeat(70);

console.log(bar);
console.log('  回测报告 · ' + market.toUpperCase() + ' · 近' + DAYS + '天 · ' + symbols.length + '只标的');
console.log('  总样本: ' + N);
console.log('  数据覆盖: 市场=' + marketSamples.length + '  新闻=' + newsSamples.length + '  板块=' + sectorSamples.length + '  复合=' + compositeSamples.length);
console.log(bar + '\n');

console.log('  模型: Score = 外盘(±4) + 新闻(±3) + 板块(±2)');
console.log('');

function fmtAcc(a, label) {
  if (a.pct == null) return '│ ' + label.padEnd(36) + ' │ ' + '—'.padStart(7) + ' │ ' + '—'.padStart(8) + ' │ ' + '—'.padStart(7) + ' │ (无数据)';
  const sig = a.pct >= 55 ? ' ⚡' : a.pct <= 45 ? ' ↴' : '';
  return '│ ' + label.padEnd(36) + ' │ ' + String(a.correct).padStart(7) + ' │ ' + String(a.total).padStart(8) + ' │ ' + (a.pct.toFixed(1) + '%').padStart(7) + ' │' + sig;
}

console.log('┌──────────────────────────────────────┬─────────┬──────────┬─────────┐');
console.log('│ 预测维度                              │ 正确数   │ 总样本    │ 准确率   │');
console.log('├──────────────────────────────────────┼─────────┼──────────┼─────────┤');
console.log(fmtAcc(acc.market, '1. 隔夜外盘·均值回归 (CSI 300)'));
console.log(fmtAcc(acc.news, '2. 新闻情绪 (score>60偏多/<60偏空)'));
console.log(fmtAcc(acc.sector, '3. 板块资金流 (主概念在Top20/Btm20)'));
console.log('├──────────────────────────────────────┼─────────┼──────────┼─────────┤');
console.log(fmtAcc(acc.marketNews, '★ 外盘+新闻 复合'));
console.log(fmtAcc(acc.composite, '★★ 三维全复合 (外盘+新闻+板块)'));
console.log('├──────────────────────────────────────┼─────────┼──────────┼─────────┤');
console.log(fmtAcc(acc.candle, '基准: 阴阳线延续'));
console.log(fmtAcc(acc.alwaysUp, '基准: 永远预测上涨'));
console.log('└──────────────────────────────────────┴─────────┴──────────┴─────────┘');

// ── CSI 300 correlation ──────────────────────────────────────────────────────
console.log('\n── 沪深300联动分析 ──');
console.log('  个股次日涨 基准率: ' + baseRate.toFixed(1) + '%');
console.log('  沪深300前日涨 → 个股次日涨: ' + upThenUp + '/' + hs300UpSamples.length + ' = ' + upThenUpPct.toFixed(1) + '%');
console.log('  沪深300前日跌 → 个股次日涨: ' + downThenUp + '/' + hs300DownSamples.length + ' = ' + downThenUpPct.toFixed(1) + '%');
if (upThenUpPct < baseRate && downThenUpPct > baseRate) {
  console.log('  ✅ 均值回归效应确认');
}

// ── Per-symbol (composite) ───────────────────────────────────────────────────
console.log('\n── 按标的 (三维复合准确率) ──\n');
for (const s of symList) {
  const visBar = '█'.repeat(Math.round(s.pct / 5));
  console.log('  ' + s.sym.padEnd(18) + ' ' + String(s.n).padStart(3) + ' samples  ' + s.pct.toFixed(1).padStart(5) + '%  ' + visBar);
}

// ── Data coverage ─────────────────────────────────────────────────────────────
console.log('\n── 数据覆盖 ──');
console.log('  新闻情绪覆盖: ' + newsSamples.length + '/' + N + ' 样本 (' + (newsSamples.length / N * 100).toFixed(1) + '%) — ' + newsDates + ' 个报告日期');
console.log('  板块资金流覆盖: ' + sectorSamples.length + '/' + N + ' 样本 (' + (sectorSamples.length / N * 100).toFixed(1) + '%) — ' + sectorDates + ' 个报告日期');
console.log('  外盘均值回归覆盖: ' + marketSamples.length + '/' + N + ' 样本 (100%)');

console.log('\n✅ 回测完成\n');

// ── Write files ───────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);

writeFileSync(OUT_JSON, JSON.stringify({
  generated_at: new Date().toISOString(),
  market, days: DAYS, symbols: symbols.length, total_samples: N,
  model: 'external_3d',
  formula: 'Score = 外盘(±4) + 新闻(±3) + 板块(±2)',
  data_coverage: {
    market_samples: marketSamples.length,
    news_samples: newsSamples.length,
    news_report_dates: newsDates,
    sector_samples: sectorSamples.length,
    sector_report_dates: sectorDates,
    composite_samples: compositeSamples.length,
  },
  accuracy: Object.fromEntries(Object.entries(acc).map(([k, v]) => [k, {
    label: { market: '隔夜外盘·均值回归', news: '新闻情绪', sector: '板块资金流', marketNews: '外盘+新闻复合', composite: '三维全复合', marketOnly: '仅外盘', candle: '阴阳线延续', alwaysUp: '永远看涨' }[k] ?? k,
    correct: v.correct, total: v.total, pct: v.pct != null ? +v.pct.toFixed(1) : null,
  }])),
  csi300_correlation: {
    base_rate_pct: +baseRate.toFixed(1),
    hs300_up_then_stock_up: { count: upThenUp, total: hs300UpSamples.length, pct: +upThenUpPct.toFixed(1) },
    hs300_down_then_stock_up: { count: downThenUp, total: hs300DownSamples.length, pct: +downThenUpPct.toFixed(1) },
    mean_reversion_confirmed: upThenUpPct < baseRate && downThenUpPct > baseRate,
  },
  per_symbol: symList.map(s => ({ symbol: s.sym, samples: s.n, composite_accuracy: +s.pct.toFixed(1) })),
}, null, 2), 'utf8');
console.log('📄 JSON: ' + OUT_JSON);

// Markdown
const md = [];
const P = s => md.push(s);
P('# Gap 三维回测报告 · ' + market.toUpperCase() + ' — ' + today);
P('');
P('**模型:** Score = 隔夜外盘·均值回归(±4) + 新闻情绪(±3) + 板块资金流(±2)');
P('');
P('**标的:** ' + symbols.length + ' 只  **样本:** ' + N + ' 个日级信号  **周期:** 近' + DAYS + '天');
P('');

P('## 数据覆盖');
P('');
P('| 维度 | 样本 | 覆盖率 | 报告日期数 |');
P('|------|------|--------|-----------|');
P('| 外盘均值回归 | ' + marketSamples.length + ' | 100% | — (CSI 300 实时) |');
P('| 新闻情绪 | ' + newsSamples.length + ' | ' + (newsSamples.length / N * 100).toFixed(1) + '% | ' + newsDates + ' |');
P('| 板块资金流 | ' + sectorSamples.length + ' | ' + (sectorSamples.length / N * 100).toFixed(1) + '% | ' + sectorDates + ' |');
P('');

P('## 各维度准确率');
P('');
function fmtMdAcc(a, label) {
  if (a.pct == null) return '| ' + label + ' | — | — | — |';
  return '| ' + label + ' | ' + a.correct + ' | ' + a.total + ' | **' + a.pct.toFixed(1) + '%** |';
}
P('| 维度 | 正确 | 总样本 | 准确率 |');
P('|------|------|--------|--------|');
P(fmtMdAcc(acc.market, '隔夜外盘·均值回归'));
P(fmtMdAcc(acc.news, '新闻情绪'));
P(fmtMdAcc(acc.sector, '板块资金流'));
P(fmtMdAcc(acc.marketNews, '外盘+新闻 复合'));
P(fmtMdAcc(acc.composite, '三维全复合'));
P(fmtMdAcc(acc.candle, '基准: 阴阳线延续'));
P(fmtMdAcc(acc.alwaysUp, '基准: 永远预测上涨'));
P('');

P('## 沪深300联动分析');
P('');
P('| 条件 | 个股次日涨 | 总样本 | 概率 |');
P('|------|-----------|--------|------|');
P('| 基准 (无条件) | ' + marketSamples.filter(s => s.actualUp).length + ' | ' + marketSamples.length + ' | ' + baseRate.toFixed(1) + '% |');
P('| 沪深300前日涨 | ' + upThenUp + ' | ' + hs300UpSamples.length + ' | ' + upThenUpPct.toFixed(1) + '% |');
P('| 沪深300前日跌 | ' + downThenUp + ' | ' + hs300DownSamples.length + ' | ' + downThenUpPct.toFixed(1) + '% |');
P('');
if (upThenUpPct < baseRate && downThenUpPct > baseRate) {
  P('✅ **均值回归效应确认:** 沪深300涨→个股涨概率' + upThenUpPct.toFixed(1) + '% < 基准' + baseRate.toFixed(1) + '%, 沪深300跌→个股涨概率' + downThenUpPct.toFixed(1) + '% > 基准' + baseRate.toFixed(1) + '%。');
}

P('');
P('## 按标的 (三维复合准确率)');
P('');
P('| Symbol | 样本 | 准确率 |');
P('|--------|------|--------|');
for (const s of symList) P('| ' + s.sym + ' | ' + s.n + ' | ' + s.pct.toFixed(1) + '% |');
P('');
P('---');
P('_回测时间: ' + new Date().toLocaleString('zh-CN') + '_');

writeFileSync(OUT_MD, md.join('\n'), 'utf8');
console.log('📄 MD:   ' + OUT_MD);
