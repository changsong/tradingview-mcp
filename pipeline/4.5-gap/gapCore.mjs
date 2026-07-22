/**
 * Stage 4.5 — 日内缺口分析 (Intraday Gap Analysis) shared core.
 *
 * External-only model (3 dimensions):
 *
 *   1. 隔夜外盘·均值回归 (±4): US overnight → contrarian signal
 *      回测验证: CSI 300 前日涨→个股次日跌, 准确率 59.4%
 *   2. 新闻情绪 (±3): from news_signals.json score
 *   3. 板块资金流 (±2): stock's primary concept board in sector flow top/bottom 20
 *
 * Note: All 6 technical OHLCV parameters removed from scoring.
 *       回测924样本确认技术参数全部 ~50% (无预测力).
 *
 * Input:  ./watchlist/<market>_selected.txt
 * Output: ./watchlist/<market>_intraday_gap.{md,json}
 *         reports/<YYYY-MM-DD>/<market>_intraday_gap.{md,json} (snapshot)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { runCli, sleep } from '../lib/runCli.mjs';
import { snapshotMarket } from '../lib/snapshot.mjs';

const SWITCH_DELAY = 1700;
const TF_DELAY     = 600;
const BAR_COUNT    = 2;  // Only need yesterday + today for gap display

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

// ── External data fetchers ────────────────────────────────────────────────────

/** Fetch overnight US index changes from Sina. Returns { sp500_pct, nasdaq_pct, dji_pct, avg_pct, contrarian_up } */
async function fetchOvernightUS() {
  try {
    const url = 'https://hq.sinajs.cn/list=int_sp500,int_nasdaq,int_dji';
    const resp = await fetch(url, { headers: { 'User-Agent': UA, 'Referer': 'https://finance.sina.com.cn' } });
    const text = await resp.text();
    const out = {};
    for (const line of text.split('\n')) {
      const m = line.match(/int_(\w+)="[^,]*,[\d.]+,[\d.]+,([-\d.]+)"/);
      if (m) {
        const pct = parseFloat(m[2]);
        if (m[1] === 'sp500')    out.sp500_pct  = pct;
        if (m[1] === 'nasdaq')   out.nasdaq_pct = pct;
        if (m[1] === 'dji')      out.dji_pct    = pct;
      }
    }
    const vals = [out.sp500_pct, out.nasdaq_pct, out.dji_pct].filter(v => v != null);
    out.avg_pct = vals.length > 0 ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
    // Contrarian: US down → CN up (均值回归), US up → CN down
    out.contrarian_up = out.avg_pct != null ? out.avg_pct < 0 : null;
    out.data_available = vals.length > 0;
    return out;
  } catch (e) {
    return { data_available: false, error: e.message };
  }
}

/**
 * Fetch concept board fund flows from Eastmoney.
 * Makes two calls: top-20 gainers + top-20 losers.
 * Returns Sets for board-name cross-referencing with F10 data.
 */
async function fetchSectorFlow() {
  try {
    const base = 'https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=20&np=1&fltt=2&fs=m:90+t:2&fields=f2,f3,f4,f12,f14';
    const [respTop, respBot] = await Promise.all([
      fetch(base + '&po=0&fid=f3', { headers: { 'User-Agent': UA } }),
      fetch(base + '&po=1&fid=f3', { headers: { 'User-Agent': UA } }),
    ]);
    const [jsonTop, jsonBot] = await Promise.all([respTop.json(), respBot.json()]);
    if (!jsonTop?.data?.diff) return { data_available: false };

    const topAll = jsonTop.data.diff;  // desc by f3: biggest gainers first
    const botAll = jsonBot.data.diff;  // asc by f3: biggest losers first

    const top_gainers = topAll.slice(0, 5).map(d => ({
      code: d.f12, name: d.f14, change_pct: d.f3, flow: d.f2,
    }));
    const top_losers = botAll.slice(0, 5).map(d => ({
      code: d.f12, name: d.f14, change_pct: d.f3, flow: d.f2,
    }));

    // Name Sets for fast cross-referencing with F10 board names
    const top_boards = new Set(topAll.map(d => d.f14));
    const bottom_boards = new Set(botAll.map(d => d.f14));

    return { data_available: true, top_gainers, top_losers, top_boards, bottom_boards };
  } catch (e) {
    return { data_available: false, error: e.message };
  }
}

/** Load news sentiment from news_signals.json. Returns Map<symbol, {score, signal, patterns}>. */
function loadNewsSentiment(market) {
  const path = './watchlist/' + market + '_news_signals.json';
  if (!existsSync(path)) return { data_available: false };
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    const map = new Map();
    for (const [sym, s] of Object.entries(data.stocks ?? {})) {
      map.set(sym, {
        score: s.score ?? null,
        signal: s.signal ?? null,
        patterns: s.patterns ?? [],
      });
    }
    return { data_available: map.size > 0, map };
  } catch (e) {
    return { data_available: false, error: e.message };
  }
}

/** Fetch a single stock's concept board membership via Eastmoney F10 CoreConception API. */
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

/**
 * Batch pre-fetch concept boards for all symbols, cross-reference with sector flow.
 * Primary concept boards (rank ≤ 3) are checked against sector flow top/bottom Sets.
 * Returns Map<symbol, { boards, sector_score, matched_boards }>.
 */
async function buildSectorMap(symbols, sectorFlow) {
  const map = new Map();
  if (!sectorFlow.data_available) return map;

  const results = await Promise.all(symbols.map(async (sym) => {
    const boards = await fetchStockBoards(sym);
    return { sym, boards };
  }));

  for (const { sym, boards } of results) {
    if (boards.length === 0) {
      map.set(sym, { boards: [], sector_score: 0, matched_boards: [] });
      continue;
    }

    const primaryBoards = boards.filter(b => b.rank <= 3);
    const matched = [];
    let sector_score = 0;

    for (const b of primaryBoards) {
      if (sectorFlow.top_boards.has(b.name)) {
        matched.push({ board: b.name, direction: 'top', rank: b.rank });
        if (sector_score === 0) sector_score = 2;
      } else if (sectorFlow.bottom_boards.has(b.name)) {
        matched.push({ board: b.name, direction: 'bottom', rank: b.rank });
        if (sector_score === 0) sector_score = -2;
      }
    }

    map.set(sym, { boards, sector_score, matched_boards: matched });
  }

  return map;
}

/**
 * Save sector flow snapshot to reports/<date>/<market>_sector_flow.json
 * for historical backtesting. Called after each fetchSectorFlow().
 */
function saveSectorFlowSnapshot(market, sectorFlow) {
  if (!sectorFlow.data_available) return;
  const date = new Date().toISOString().slice(0, 10);
  const dir = './reports/' + date;
  mkdirSync(dir, { recursive: true });

  const payload = {
    date,
    generated_at: new Date().toISOString(),
    market,
    top_boards: [...sectorFlow.top_boards],
    bottom_boards: [...sectorFlow.bottom_boards],
    top_gainers: sectorFlow.top_gainers,
    top_losers: sectorFlow.top_losers,
  };

  writeFileSync(dir + '/' + market + '_sector_flow.json', JSON.stringify(payload, null, 2), 'utf8');
  console.log('   📸 板块资金流快照: ' + dir + '/' + market + '_sector_flow.json');
}

// ── Main ──────────────────────────────────────────────────────────────────────

/**
 * @param {'cn'|'us'|'hk'} market
 */
export async function runGap(market) {
  const tag = market.toUpperCase();
  const SELECTED_PATH = './watchlist/' + market + '_selected.txt';
  const TECH_JSON     = './watchlist/' + market + '_tech_signals.json';
  const OUT_JSON      = './watchlist/' + market + '_intraday_gap.json';
  const OUT_MD        = './watchlist/' + market + '_intraday_gap.md';

  console.log('\n' + '━'.repeat(55));
  console.log('  Stage 4.5 · 日内缺口分析 (' + tag + ') — 外部三维模型');
  console.log('━'.repeat(55) + '\n');

  // ── 0. Fetch external data in parallel ──────────────────────────────────────
  console.log('📡 获取外部数据 ...');
  const [overnight, sectorFlow, newsData] = await Promise.all([
    fetchOvernightUS(),
    fetchSectorFlow(),
    Promise.resolve(loadNewsSentiment(market)),
  ]);

  if (overnight.data_available) {
    const dir = overnight.contrarian_up ? '📈 偏多 (均值回归)' : '📉 偏空 (均值回归)';
    console.log('   ✅ 隔夜美股: SPX ' + (overnight.sp500_pct?.toFixed(2) ?? 'N/A') + '%  NDX ' + (overnight.nasdaq_pct?.toFixed(2) ?? 'N/A') + '%  DJI ' + (overnight.dji_pct?.toFixed(2) ?? 'N/A') + '%');
    console.log('      → ' + dir);
  } else {
    console.log('   ⚠ 隔夜美股: 获取失败 — ' + (overnight.error ?? 'unknown'));
  }
  if (sectorFlow.data_available) {
    console.log('   ✅ 板块资金流: ' + sectorFlow.top_gainers.length + ' 领涨 / ' + sectorFlow.top_losers.length + ' 领跌');
    saveSectorFlowSnapshot(market, sectorFlow);
  } else {
    console.log('   ⚠ 板块资金流: 获取失败');
  }
  if (newsData.data_available) {
    console.log('   ✅ 新闻情绪: ' + newsData.map.size + ' 条记录');
  } else {
    console.log('   ⚠ 新闻情绪: 数据不可用');
  }
  console.log('');

  // ── 1. Load symbols ────────────────────────────────────────────────────────
  if (!existsSync(SELECTED_PATH)) {
    throw new Error('Selected file 不存在: ' + SELECTED_PATH + ' — 请先 npm run scan:' + market);
  }
  const raw = readFileSync(SELECTED_PATH, 'utf8').trim();
  const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];
  if (symbols.length === 0) throw new Error('Watchlist 为空: ' + SELECTED_PATH);
  console.log('📋 ' + SELECTED_PATH + ': ' + symbols.length + ' 只');

  // ── 2. Load name map from tech signals ──────────────────────────────────────
  let nameMap = new Map();
  if (existsSync(TECH_JSON)) {
    const tech = JSON.parse(readFileSync(TECH_JSON, 'utf8'));
    for (const [sym, s] of Object.entries(tech.stocks ?? {})) {
      nameMap.set(sym, s.name ?? sym);
    }
    console.log('📊 已载入 ' + nameMap.size + ' 条名称映射');
  } else {
    console.warn('⚠️  未找到 tech_signals.json，名称将使用代码');
  }

  // ── 3. Build sector map (pre-fetch all stock boards + cross-reference) ──────
  console.log('🏷️  获取个股板块归属 (F10 CoreConception) ...');
  const sectorMap = await buildSectorMap(symbols, sectorFlow);
  let sectorMatched = 0;
  for (const [, v] of sectorMap) {
    if (v.matched_boards.length > 0) sectorMatched++;
  }
  console.log('   ✅ ' + sectorMatched + '/' + symbols.length + ' 只匹配到板块资金流\n');

  // ── 4. CDP health check ────────────────────────────────────────────────────
  const hc = await runCli('status');
  if (!hc?.cdp_connected) {
    throw new Error('TradingView 未连接 — 请先 scripts\\launch_tv_debug.bat 启动 (CDP 9222)');
  }

  // ── 5. Per-symbol OHLCV fetch (only 2 bars: yesterday + today) ──────────────
  const estMin = (symbols.length * (SWITCH_DELAY + TF_DELAY + 500) / 60000).toFixed(1);
  console.log('🔄 抓取日线 OHLCV x' + BAR_COUNT + ' (~' + estMin + ' min) ...\n');

  const results = [];
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    process.stdout.write('  [' + String(i + 1).padStart(3) + '/' + symbols.length + '] ' + sym.padEnd(18) + ' ');

    const sw = await runCli('symbol ' + sym);
    if (!sw?.success) {
      console.log('✗ symbol 切换失败');
      results.push({ symbol: sym, ok: false, reason: 'switch_fail' });
      continue;
    }
    if (sw.chart_ready === false) {
      console.log('⚠ 图表未就绪（超时），跳过');
      results.push({ symbol: sym, ok: false, reason: 'chart_not_ready' });
      continue;
    }
    await sleep(SWITCH_DELAY);
    await runCli('timeframe D');
    await sleep(TF_DELAY);

    const o = await runCli('ohlcv -n ' + BAR_COUNT);
    if (!o?.success || !Array.isArray(o.bars) || o.bars.length < 2) {
      console.log('✗ ohlcv 失败');
      results.push({ symbol: sym, ok: false, reason: 'ohlcv_fail' });
      continue;
    }
    const bars = o.bars;
    const today  = bars[bars.length - 1];
    const prev   = bars[bars.length - 2];
    const { open, high, low, close, volume } = today;
    if (!open || open === 0) {
      console.log('✗ open=0');
      results.push({ symbol: sym, ok: false, reason: 'bad_open' });
      continue;
    }

    // ── Basic OHLCV (display only, NOT used for scoring) ──────────────────────
    const chg_pct  = (close - open) / open;
    const gap_pct  = Math.abs(chg_pct);
    const candle   = chg_pct >= 0 ? '阳' : '阴';
    const prevClose = prev?.close ?? open;
    const real_gap  = prevClose !== 0 ? (open - prevClose) / prevClose : 0;

    const name = nameMap.get(sym) ?? sym;

    // ── Scoring: 3 external dimensions only ──────────────────────────────────

    // Dimension 1: 隔夜外盘·均值回归 (±4)
    let score = 0;
    let mkt_contrib = 0;
    if (overnight.contrarian_up === true) {
      score += 4;
      mkt_contrib = 4;   // US down → CN mean-revert up → +4
    } else if (overnight.contrarian_up === false) {
      score -= 4;
      mkt_contrib = -4;  // US up → CN mean-revert down → -4
    }

    // Dimension 2: 新闻情绪 (±3)
    const ns = newsData.map?.get(sym);
    const news_score    = ns?.score ?? null;
    const news_signal   = ns?.signal ?? null;
    const news_patterns = ns?.patterns ?? [];
    let news_contrib = 0;
    if (news_score != null) {
      if (news_score > 60)      { score += 3; news_contrib = 3; }
      else if (news_score < 60) { score -= 3; news_contrib = -3; }
    }

    // Dimension 3: 板块资金流 (±2)
    const sec = sectorMap.get(sym);
    const sector_score  = sec?.sector_score ?? 0;
    const matchedBoards = sec?.matched_boards ?? [];
    const allBoards     = sec?.boards ?? [];
    score += sector_score;

    const prediction = score > 0 ? '偏多' : score < 0 ? '偏空' : '中性';

    // ── Entry signal & priority (backtest-verified strategy) ──────────────────
    // Entry: only when US was down (contrarian_up = true)
    // Priority: news < 60 stocks first (利好出尽是利空), lower news = higher priority
    const canEnter = overnight.contrarian_up === true;
    let priority = 0;
    if (canEnter && news_score != null) {
      if (news_score < 60) {
        // Primary picks: news < 60, lower score → higher priority
        priority = 100 + (60 - news_score);  // range: 100 (news=59) ~ 159 (news=1)
      } else {
        // Secondary picks: news ≥ 60, lower score → lower priority (利好出尽)
        priority = Math.max(0, 60 - (news_score - 60));  // range: 0 (news=120) ~ 59 (news=61)
      }
    } else if (canEnter) {
      priority = 50;  // No news data, middle priority
    } else {
      priority = -1;  // Cannot enter today
    }
    const entryLabel = canEnter ? '✅ 可入场' : '⛔ 观望';

    const r = {
      symbol: sym,
      name,
      ok: true,
      price: close,
      open, high, low, volume,
      // Basic OHLCV (display only)
      chg_pct:  +chg_pct.toFixed(6),
      gap_pct:  +gap_pct.toFixed(6),
      real_gap: +real_gap.toFixed(6),
      candle,
      // External dimensions
      mkt_contrib,
      news_score,
      news_signal,
      news_patterns,
      news_contrib,
      sector_score,
      matched_boards: matchedBoards,
      all_boards: allBoards.slice(0, 5).map(b => b.name),
      // Entry & priority
      can_enter: canEnter,
      entry_label: entryLabel,
      priority,
      // Composite
      score,
      prediction,
    };
    results.push(r);

    // Log line
    const gapStr = 'gap=' + (real_gap >= 0 ? '+' : '') + (real_gap * 100).toFixed(2) + '%';
    const mktStr = 'mkt=' + (mkt_contrib >= 0 ? '+' : '') + mkt_contrib;
    const newsStr = news_score != null
      ? 'news=' + news_score + '(' + (news_contrib >= 0 ? '+' : '') + news_contrib + ')'
      : 'news=N/A';
    const secStr = matchedBoards.length > 0
      ? 'sector=' + (sector_score >= 0 ? '+' : '') + sector_score + ' [' + matchedBoards.map(b => b.board).join(',') + ']'
      : 'sector=0';
    const predStr = '→ ' + prediction + ' (' + (score > 0 ? '+' : '') + score + ') pri=' + priority;
    console.log(entryLabel + ' ' + candle + ' ' + gapStr + '  ' + mktStr + '  ' + newsStr + '  ' + secStr + '  ' + predStr + '  ' + name);
  }

  const ok = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  console.log('\n✅ 成功 ' + ok.length + ' 只, 失败 ' + failed.length + ' 只');
  if (failed.length > 0) {
    console.log('失败详情:');
    failed.forEach(f => console.log('  ✗ ' + f.symbol + ': ' + f.reason));
  }

  // ── 6. Sort: by priority descending (入场→新闻<60优先→新闻≥60次之) ────────
  ok.sort((a, b) => b.priority - a.priority);

  const today = new Date().toISOString().slice(0, 10);

  // ── 7. Write outputs ────────────────────────────────────────────────────────
  const jsonOut = {
    generated_at: new Date().toISOString(),
    market,
    source: SELECTED_PATH,
    entry_signal: {
      can_enter: overnight.contrarian_up === true,
      signal: overnight.contrarian_up === true ? '入场' : '观望',
      reason: overnight.contrarian_up === true
        ? '隔夜美股下跌 → A股均值回归反弹概率高 (回测 59.8%)'
        : '隔夜美股上涨 → A股均值回归承压 (回测个股涨概率仅 40.8%)',
      strategy: overnight.contrarian_up === true
        ? '选择新闻<60标的 (回测涨概率 65.1%), 避开新闻≥60 (利好出尽)'
        : '不入场, 等待下一个美股下跌日',
    },
    overnight_us: overnight.data_available ? {
      sp500_pct: overnight.sp500_pct,
      nasdaq_pct: overnight.nasdaq_pct,
      dji_pct: overnight.dji_pct,
      avg_pct: overnight.avg_pct,
      contrarian_signal: overnight.contrarian_up ? 'US down → CN up (均值回归)' : 'US up → CN down (均值回归)',
    } : null,
    sector_flow: sectorFlow.data_available ? { top_gainers: sectorFlow.top_gainers, top_losers: sectorFlow.top_losers } : null,
    model: 'external_3d',
    formula: 'Score = 隔夜外盘·均值回归(±4) + 新闻情绪(±3) + 板块资金流(±2)',
    strategy: {
      entry_condition: '隔夜美股下跌',
      priority_sort: '新闻<60 优先 (回测涨概率 65.1%), 新闻≥60 次之 (回测涨概率 48.8%)',
      rationale: '利好出尽是利空 — 高新闻分标的已被热钱透支，反弹力度弱',
    },
    total: symbols.length,
    success: ok.length,
    failed: failed.map(f => ({ symbol: f.symbol, reason: f.reason })),
    results: ok,
  };
  writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2), 'utf8');
  console.log('\n✅ JSON: ' + OUT_JSON);

  writeFileSync(OUT_MD, renderMd(ok, failed, tag, SELECTED_PATH, today, overnight, sectorFlow), 'utf8');
  console.log('✅ MD:   ' + OUT_MD);

  const snap = snapshotMarket(market);
  console.log('📸 快照: ' + snap.dir + ' (' + snap.files.length + ' 个文件)\n');

  return jsonOut;
}

// ── Markdown rendering ───────────────────────────────────────────────────────
function renderMd(ok, failed, tag, sourcePath, today, overnight, sectorFlow) {
  const L = [];
  const p = s => L.push(s);
  const fmt  = (v, d) => v != null ? v.toFixed(d) : '-';
  const pct  = v => v != null ? (v * 100).toFixed(2) + '%' : '-';
  const signed = v => v != null ? ((v >= 0 ? '+' : '') + v.toFixed(2) + '%') : 'N/A';

  const yang = ok.filter(r => r.candle === '阳').length;
  const yin  = ok.filter(r => r.candle === '阴').length;
  const canEnter = overnight?.contrarian_up === true;
  const entryBanner = canEnter
    ? '## 🟢 入场信号: **可以入场** — 隔夜美股下跌，A股大概率均值回归反弹'
    : '## 🔴 入场信号: **不宜入场** — 隔夜美股上涨，A股大概率均值回归承压';

  p('# 日内缺口分析 · ' + tag + ' — ' + today);
  p('');
  p(entryBanner);
  p('');
  p('**数据源:** `' + sourcePath + '`');
  p('**成功:** ' + ok.length + ' / **失败:** ' + failed.length);
  p('**阳线:** ' + yang + ' 只 / **阴线:** ' + yin + ' 只');
  p('');

  // ── External context: overnight US ─────────────────────────────────────────
  if (overnight?.data_available) {
    p('### 隔夜外盘');
    p('| 指数 | 涨跌幅 | 信号 |');
    p('|------|--------|------|');
    p('| S&P 500 | ' + signed(overnight.sp500_pct) + ' | |');
    p('| NASDAQ  | ' + signed(overnight.nasdaq_pct) + ' | |');
    p('| DJI     | ' + signed(overnight.dji_pct) + ' | |');
    const dir = overnight.contrarian_up
      ? '📈 均值回归偏多 (美股跌 → CN涨)'
      : '📉 均值回归偏空 (美股涨 → CN跌)';
    p('| **综合** | **' + signed(overnight.avg_pct) + '** | **' + dir + '** |');
    p('');
  }

  // ── External context: sector flow ──────────────────────────────────────────
  if (sectorFlow?.data_available) {
    p('### 板块资金流 — Top 5 领涨');
    p('| 板块 | 涨跌幅 | 资金流(万) |');
    p('|------|--------|-----------|');
    for (const s of sectorFlow.top_gainers) {
      const flowStr = (s.flow / 10000).toFixed(0) + '万';
      p('| ' + s.name + ' | ' + (s.change_pct >= 0 ? '+' : '') + s.change_pct.toFixed(2) + '% | ' + flowStr + ' |');
    }
    p('');
    p('### 板块资金流 — Top 5 领跌');
    p('| 板块 | 涨跌幅 | 资金流(万) |');
    p('|------|--------|-----------|');
    for (const s of sectorFlow.top_losers) {
      const flowStr = (s.flow / 10000).toFixed(0) + '万';
      p('| ' + s.name + ' | ' + (s.change_pct >= 0 ? '+' : '') + s.change_pct.toFixed(2) + '% | ' + flowStr + ' |');
    }
    p('');
  }

  // ── Strategy summary ────────────────────────────────────────────────────────
  if (canEnter) {
    const picks = ok.filter(r => r.news_score != null && r.news_score < 60);
    const secondary = ok.filter(r => r.news_score != null && r.news_score >= 60);
    p('### 操作策略');
    p('');
    p('| 优先级 | 条件 | 数量 | 回测涨概率 |');
    p('|--------|------|------|-----------|');
    p('| 🥇 **优先** | 新闻<60 (无利好透支) | ' + picks.length + ' 只 | ~65% |');
    p('| 🥈 次选 | 新闻≥60 (利好出尽风险) | ' + secondary.length + ' 只 | ~49% |');
    p('| ⛔ 观望 | 外盘涨(今日不宜入场) | — | ~41% |');
    p('');
  }

  // ── Main table ──────────────────────────────────────────────────────────────
  p('| # | 优先级 | 名称 | 代码 | 收盘 | gap% | 新闻 | 外盘 | 板块 | 所属板块 | 评分 | 预测 |');
  p('|---|--------|------|------|------|------|------|------|------|----------|------|------|');

  // Render OK results
  ok.forEach((r, i) => {
    const candleIcon = r.candle === '阳' ? '🟥' : '🟩';
    const gapStr = (r.real_gap >= 0 ? '+' : '') + pct(r.real_gap);
    const mktStr  = r.mkt_contrib !== 0 ? ((r.mkt_contrib >= 0 ? '+' : '') + r.mkt_contrib) : '0';
    const newsStr = r.news_score != null ? r.news_score + '(' + (r.news_contrib >= 0 ? '+' : '') + r.news_contrib + ')' : '-';
    const secStr  = r.sector_score !== 0 ? ((r.sector_score >= 0 ? '+' : '') + r.sector_score) : '0';
    const boardsStr = r.all_boards?.slice(0, 3).join(', ') || '-';
    const scoreStr  = (r.score > 0 ? '+' : '') + r.score;
    const predIcon  = r.prediction === '偏多' ? '📈' : r.prediction === '偏空' ? '📉' : '➖';
    // Priority icon
    let priIcon = '';
    if (r.news_score != null && r.news_score < 60 && canEnter) priIcon = '🥇';
    else if (canEnter) priIcon = '🥈';
    else priIcon = '⛔';

    const idx = i + 1;
    p('| ' + idx + ' | ' + priIcon + ' | **' + r.name + '** | ' + r.symbol + ' | ' + fmt(r.price, 2) + ' | ' + gapStr + ' | ' + newsStr + ' | ' + mktStr + ' | ' + secStr + ' | ' + boardsStr + ' | ' + scoreStr + ' | ' + predIcon + r.prediction + ' |');
  });

  // Render failed
  failed.forEach((f, i) => {
    const idx = ok.length + i + 1;
    p('| ' + idx + ' | — | — | ' + f.symbol + ' | — | — | — | — | — | — | — | — |');
  });
  p('');

  p('> **排序规则:** 入场优先级降序 (新闻<60 优先 → 新闻≥60 次之 → 无新闻数据)');
  p('> **策略:** 隔夜美股跌 → 入场 → 选新闻<60标的 (利好出尽是利空，回测涨概率 65.1%)');
  p('');

  p('### 评分公式');
  p('');
  p('```');
  p('入场判断: 隔夜美股涨跌 → 跌则入场, 涨则观望');
  p('');
  p('个股优先级排序 (仅入场时):');
  p('  🥇 优先: 新闻<60 (回测涨概率 ~65%) — 无利好透支，充分享受均值回归反弹');
  p('  🥈 次选: 新闻≥60 (回测涨概率 ~49%) — 利好出尽风险，反弹力度弱');
  p('');
  p('参考评分: Score = 外盘(±4) + 新闻(±3) + 板块(±2)');
  p('  NewsScore > 60 → +3   < 60 → -3');
  p('```');
  p('');
  p('> **回测验证 (924样本):** 外盘跌+新闻<60 涨概率 **65.1%** (纯外盘跌 59.8%, +5.3pp)。');
  p('> 外盘跌+新闻Top10%(高分) 仅 46.7% — 利好出尽是利空。');
  p('');
  p('---');
  p('_生成时间: ' + new Date().toLocaleString('zh-CN') + '_');
  p('');

  return L.join('\n');
}
