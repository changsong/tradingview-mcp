/**
 * Stage 4.5 (CN only) — 热点板块资金流选股。
 *
 * 逻辑:
 *   1. 行业板块按「主力净流入 f62」降序 → 严格取第 1 名板块
 *   2. 取该板块成分股 ∩ watchlist/cn.txt
 *   3. 硬过滤 换手率 < 3%
 *   4. 按 3日主力净流入占比(%) 从高到低、换手率从低到高 排序 → 取前 10
 *   5. 对前 10 现抓新闻做完整情绪分析（含 LLM）—— **仅展示，不参与排序**
 *
 * 数据来源限流提示: 东财按来源 IP 对 /api/qt/* 做封禁（连真实浏览器也 ECONNRESET），
 * 靠 push2test.eastmoney.com 海外 CDN 兜底；镜像解析出的 IPv6 优先地址不可达，必须
 * setDefaultResultOrder('ipv4first')。单轮请求数：板块榜 1 + 成分股 1 + 资金流 2×N。
 *
 * 与 us/hk 完全解耦：runGap('cn') 提前返回到这里，不触碰 CDP / TradingView。
 *
 * Input:  ./watchlist/cn.txt
 * Output: ./watchlist/cn_intraday_gap.{md,json}
 *         reports/<YYYY-MM-DD>/cn_intraday_gap.{md,json} (snapshot)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { setDefaultResultOrder } from 'dns';
import { snapshotMarket } from '../lib/snapshot.mjs';
import { analyzeSymbols } from '../2-news/lib/analyze_symbols.mjs';
import { closeSharedBrowser } from '../../src/core/browserScraper.js';
import { isLLMEnabled, MODEL } from '../2-news/lib/llm_common.mjs';
import { createLimiter } from '../../src/core/concurrency.js';

export const TURNOVER_MAX = 3;   // 换手率硬过滤：严格小于
export const TOP_N = 10;
export const TOP_NEWS_PER_STOCK = 5;

const CN_TXT = './watchlist/cn.txt';
const OUT_JSON = './watchlist/cn_intraday_gap.json';
const OUT_MD = './watchlist/cn_intraday_gap.md';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const HEADERS = { 'User-Agent': UA, 'Referer': 'https://quote.eastmoney.com/' };

// 东财按来源 IP 对 API 路径做重置（实测 GET / 返回 404，但 /api/qt/* 一律 ECONNRESET，
// 连真实 Chrome 也一样）—— 是 IP 级封禁，换 header / 换客户端都没用，只能换出口 IP。
// push2test 走海外 CDN（8.132.95.14），不受大陆侧封禁影响，实测在 push2*/push2his* 全部
// 被重置时仍返回完整数据，故置于末位兜底。
//
// ⚠️ push2test 的 f267/f268（3日主力净额/占比）是 f62/f184 的别名，不是真的 3 日聚合，
// 因此 3 日资金流一律由 daykline + kline 逐日累加得到，不依赖任何聚合字段。
const PUSH2_HOSTS = [
  'push2.eastmoney.com',
  '1.push2.eastmoney.com',
  '7.push2.eastmoney.com',
  '17.push2.eastmoney.com',
  '82.push2.eastmoney.com',
  'push2test.eastmoney.com',
];
const PUSH2HIS_HOSTS = [
  'push2his.eastmoney.com',
  '1.push2his.eastmoney.com',
  '2.push2his.eastmoney.com',
  'push2test.eastmoney.com',
];
const sleep = ms => new Promise(r => setTimeout(r, ms));

// 单轮运行内的镜像健康度：连接级失败后冷却，避免逐股资金流的 20+ 次请求反复撞同一堵墙。
// HTTP 层错误（404/5xx）不计入 —— 那说明链路是通的，只是路径/参数不对。
const HOST_COOLDOWN_MS = 60_000;
const hostDeadUntil = new Map();
const hostUseCount = new Map();

function hostUsable(host) {
  const until = hostDeadUntil.get(host);
  return until == null || Date.now() >= until;
}

/** 本轮实际由哪些域名供数、哪些处于冷却 —— 用于审计是否已切换到兜底域名。 */
export function getHostStats() {
  return {
    used: Object.fromEntries(hostUseCount),
    cooling_down: [...hostDeadUntil.entries()]
      .filter(([, until]) => Date.now() < until)
      .map(([host]) => host),
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** SSE:600519 → 1.600519 ; SZSE:300750 → 0.300750 */
function toEmSecid(symbol) {
  const m = /^(SSE|SZSE):(\d+)$/i.exec(symbol);
  if (!m) return null;
  return (m[1].toUpperCase() === 'SSE' ? '1.' : '0.') + m[2];
}

/** 1 → SSE:600519 ; 0 → SZSE:300750 */
function fromEmMarket(market, code) {
  return String(market) === '1' ? `SSE:${code}` : `SZSE:${code}`;
}

function num(v) {
  if (v == null || v === '-' || v === '') return null;
  const n = typeof v === 'number' ? v : parseFloat(v);
  return Number.isFinite(n) ? n : null;
}

async function fetchJson(hosts, path, { retries = 1, timeout = 10000 } = {}) {
  let lastErr = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const live = hosts.filter(hostUsable);
    // 全部处于冷却时仍试一轮（只试最后一跳兜底域名），避免长轮次后彻底放弃
    const candidates = live.length ? live : hosts.slice(-1);
    let sawHttpResponse = false;

    for (const host of candidates) {
      try {
        const resp = await fetch('https://' + host + path, {
          headers: HEADERS,
          signal: AbortSignal.timeout(timeout),
        });
        // 拿到了 HTTP 响应说明链路是通的（哪怕状态码不是 200）
        sawHttpResponse = true;
        if (!resp.ok) { lastErr = new Error('HTTP ' + resp.status + ' @' + host); continue; }
        hostUseCount.set(host, (hostUseCount.get(host) ?? 0) + 1);
        return await resp.json();
      } catch (e) {
        // 连接层被重置/超时 → 该域名本轮冷却，后续请求直接跳过
        hostDeadUntil.set(host, Date.now() + HOST_COOLDOWN_MS);
        lastErr = e;
      }
    }

    // 所有镜像都在连接层被拒 → IP 级封禁，重试只会加重限流
    if (!sawHttpResponse) break;
    if (attempt < retries) await sleep(700);
  }
  throw lastErr ?? new Error('fetch failed');
}

// ── EastMoney fetchers ────────────────────────────────────────────────────────

/**
 * 行业板块按主力净流入降序。
 * f12=板块代码 f14=板块名 f3=涨跌幅% f62=主力净流入(元) f184=主力净流入占比%
 */
export async function fetchIndustryBoardsByFlow({ pz = 50, retries = 1 } = {}) {
  const path = '/api/qt/clist/get?pn=1&pz=' + pz + '&np=1&fltt=2'
    + '&fs=m:90+t:2&fields=f12,f14,f3,f62,f184&fid=f62&po=1';
  const json = await fetchJson(PUSH2_HOSTS, path, { retries });
  const diff = json?.data?.diff;
  if (!Array.isArray(diff) || diff.length === 0) return [];
  return diff.map(d => ({
    code: d.f12,
    name: d.f14,
    change_pct: num(d.f3),
    net_inflow: num(d.f62),
    net_inflow_ratio: num(d.f184),
  }));
}

/**
 * 板块成分股（分页）。f13=市场(1沪 0深) f8=换手率% f2=现价 f3=涨幅% f62/f184=今日主力净额/占比
 * 返回 { total, items: [{ symbol, name, turnover, price, change_pct, today_inflow, today_pct }] }
 *
 * pz=1000 实测可一次取回 512 只成分股（东财对 pz 的上限宽松），把 6 次分页压到 1 次，
 * 是控制总请求数（进而降低被限流概率）的关键。
 */
export async function fetchBoardConstituents(boardCode, { pageSize = 1000, maxPages = 5, retries = 1 } = {}) {
  const items = [];
  let total = null;

  for (let pn = 1; pn <= maxPages; pn++) {
    const path = '/api/qt/clist/get?pn=' + pn + '&pz=' + pageSize + '&np=1&fltt=2'
      + '&fs=b:' + encodeURIComponent(boardCode)
      + '&fields=f12,f13,f14,f8,f2,f3,f62,f184&fid=f62&po=1';
    const json = await fetchJson(PUSH2_HOSTS, path, { retries });
    const diff = json?.data?.diff;
    if (total == null) total = num(json?.data?.total) ?? 0;
    if (!Array.isArray(diff) || diff.length === 0) break;

    for (const d of diff) {
      items.push({
        symbol: fromEmMarket(d.f13, d.f12),
        name: d.f14,
        turnover: num(d.f8),
        price: num(d.f2),
        change_pct: num(d.f3),
        today_inflow: num(d.f62),
        today_pct: num(d.f184),
      });
    }
    if (items.length >= total) break;
  }

  return { total: total ?? items.length, items };
}

// daykline 行: idx0=日期 idx1=主力净流入(元) idx6=主力净占比%
// kline    行: idx0=日期 idx6=成交额(元)
const FFLOW_FIELDS2 = 'f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65';
const KLINE_FIELDS2 = 'f51,f52,f53,f54,f55,f56,f57';

/**
 * 单只 3 日主力资金流：逐日累加，不依赖任何「聚合字段」。
 *
 *   inflow_3d_pct = Σ(3日主力净流入) / Σ(3日成交额) × 100
 *
 * 之所以不用 ulist 的 f267/f268（3日主力净额/占比）：push2test 兜底域名把这两个字段
 * 直接别名成 f62/f184（实测 10/10 只完全相等），会静默给出「当日」而非「3日」的值。
 * 逐日累加在所有域名上都成立，且窗口可审计（inflow_days）。
 */
export async function fetchInflow3d(symbol, { days = 3, retries = 1 } = {}) {
  const secid = toEmSecid(symbol);
  if (!secid) return { symbol, reason: 'bad_symbol' };

  const lmt = days + 1;   // 多取一天做日期对齐冗余
  let flowJson, klineJson;
  try {
    [flowJson, klineJson] = await Promise.all([
      fetchJson(PUSH2HIS_HOSTS, '/api/qt/stock/fflow/daykline/get?secid=' + secid
        + '&fields1=f1,f2,f3,f7&fields2=' + FFLOW_FIELDS2 + '&klt=101&lmt=' + lmt, { retries }),
      fetchJson(PUSH2HIS_HOSTS, '/api/qt/stock/kline/get?secid=' + secid
        + '&fields1=f1,f2,f3,f4,f5,f6&fields2=' + KLINE_FIELDS2
        + '&klt=101&fqt=1&end=20500101&lmt=' + lmt, { retries }),
    ]);
  } catch (e) {
    return { symbol, reason: 'fetch_error: ' + e.message };
  }

  const flowRows = (flowJson?.data?.klines ?? []).map(s => String(s).split(','));
  const klineRows = (klineJson?.data?.klines ?? []).map(s => String(s).split(','));
  if (!flowRows.length) return { symbol, reason: 'no_fflow_klines' };
  if (!klineRows.length) return { symbol, reason: 'no_kline_klines' };

  const amountByDate = new Map(klineRows.map(r => [r[0], num(r[6])]));
  // 只在两侧都有效的同一交易日上配对，避免分子分母错配（停牌/缺失日整日剔除）
  const tail = flowRows.slice(-days).filter(r => amountByDate.get(r[0]) != null);
  if (!tail.length) return { symbol, reason: 'no_aligned_days' };

  const inflow_3d = Math.round(tail.reduce((a, r) => a + (num(r[1]) ?? 0), 0));
  const amount_3d = Math.round(tail.reduce((a, r) => a + amountByDate.get(r[0]), 0));

  return {
    symbol,
    inflow_3d,
    amount_3d,
    inflow_3d_pct: amount_3d > 0 ? (inflow_3d / amount_3d) * 100 : null,
    inflow_days: tail.map(r => r[0]),
    daily_inflow: tail.map(r => num(r[1])),
  };
}

/**
 * 批量抓取（受控并发，整体不 reject：单只失败只降级为 null 并记入 failed）。
 * 每只需 2 次请求（daykline + kline），并发 4 → 同时在途 8 次，实测兜底域名可承受。
 */
export async function fetchInflow3dBatch(symbols, { concurrency = 4, days = 3, retries = 1 } = {}) {
  const map = new Map();
  const limiter = createLimiter(concurrency);
  await Promise.all(symbols.map(s => limiter(async () => {
    map.set(s, await fetchInflow3d(s, { days, retries }));
  })));
  return map;
}

// ── Sorting ───────────────────────────────────────────────────────────────────

/**
 * 排序键（新闻不参与）:
 *   1. 板块代码（当前恒为同一个，保留键位以备多板块扩展）
 *   2. 3日流入% 高 → 低（null 排最后）
 *   3. 换手率 低 → 高（null 排最后）
 *   4. 代码，稳定兜底
 */
export function compareCnCandidates(a, b) {
  if (a.board_code !== b.board_code) return a.board_code < b.board_code ? -1 : 1;

  const ia = a.inflow_3d_pct, ib = b.inflow_3d_pct;
  if (ia == null && ib != null) return 1;
  if (ia != null && ib == null) return -1;
  if (ia !== ib) return ib - ia;

  const ta = a.turnover, tb = b.turnover;
  if (ta == null && tb != null) return 1;
  if (ta != null && tb == null) return -1;
  if (ta !== tb) return ta - tb;

  return a.symbol < b.symbol ? -1 : a.symbol > b.symbol ? 1 : 0;
}

// ── Main ──────────────────────────────────────────────────────────────────────

export async function runCnGap() {
  // 东财镜像解析出的 IPv6 优先地址在本机不可达（连接被重置），强制走 IPv4。
  setDefaultResultOrder('ipv4first');

  const skipNews = process.argv.includes('--no-news') || process.env.GAP_CN_SKIP_NEWS === '1';

  console.log('\n' + '━'.repeat(55));
  console.log('  Stage 4.5 · 热点板块资金流选股 (CN)');
  console.log('━'.repeat(55) + '\n');

  // ── 1. 股票池：cn.txt ───────────────────────────────────────────────────────
  if (!existsSync(CN_TXT)) throw new Error('Watchlist 不存在: ' + CN_TXT);
  const raw = readFileSync(CN_TXT, 'utf8');
  const cnSet = new Set(
    raw.split(/[,\s]+/).map(s => s.trim()).filter(s => /^(SSE|SZSE):\d+$/.test(s))
  );
  if (cnSet.size === 0) throw new Error('Watchlist 为空: ' + CN_TXT);
  console.log('📋 ' + CN_TXT + ': ' + cnSet.size + ' 只（已剔除 ETF/非 A 股代码）');

  // ── 2. 热点板块：严格第 1 ──────────────────────────────────────────────────
  let boards;
  try {
    boards = await fetchIndustryBoardsByFlow();
  } catch (e) {
    throw new Error('热门行业板块获取失败 (EastMoney): ' + e.message);
  }
  if (boards.length === 0) throw new Error('热门行业板块获取失败 (EastMoney): 返回为空');
  const hot = boards[0];
  console.log('🔥 热点板块 #1: ' + hot.name + ' (' + hot.code + ')  涨跌 '
    + (hot.change_pct >= 0 ? '+' : '') + hot.change_pct + '%  主力净流入 '
    + fmtMoney(hot.net_inflow) + '  占比 ' + (hot.net_inflow_ratio ?? '-') + '%');

  // ── 3. 板块成分股 ∩ cn.txt ────────────────────────────────────────────────
  let constituents;
  try {
    constituents = await fetchBoardConstituents(hot.code);
  } catch (e) {
    throw new Error('板块成分股获取失败 (EastMoney): ' + e.message);
  }
  console.log('🏷️  板块成分股: ' + constituents.items.length + '/' + constituents.total + ' 只');

  const inCnTxt = constituents.items.filter(c => cnSet.has(c.symbol));
  const turnoverMissing = inCnTxt.filter(c => c.turnover == null).length;
  const afterTurnover = inCnTxt.filter(c => c.turnover != null && c.turnover < TURNOVER_MAX);
  console.log('🎯 交集 cn.txt: ' + inCnTxt.length + ' 只'
    + ' → 换手率 < ' + TURNOVER_MAX + '%: ' + afterTurnover.length + ' 只');

  const stats = {
    cn_txt_total: cnSet.size,
    board_members_total: constituents.total,
    in_cn_txt: inCnTxt.length,
    turnover_missing: turnoverMissing,
    after_turnover: afterTurnover.length,
    flow_ok: 0,
    flow_failed: 0,
    flow_degraded: false,
    news_ok: 0,
  };

  // ── 4. 3日资金流 ──────────────────────────────────────────────────────────
  const failed = [];
  let candidates = [];

  if (afterTurnover.length > 0) {
    console.log('\n💰 抓取 3 日主力净流入（逐股 daykline+kline，' + afterTurnover.length + ' 只）...');
    const flowMap = await fetchInflow3dBatch(afterTurnover.map(c => c.symbol));

    candidates = afterTurnover.map(c => {
      const f = flowMap.get(c.symbol);
      const ok = f && f.reason == null && f.inflow_3d_pct != null;
      if (ok) stats.flow_ok++; else { stats.flow_failed++; failed.push({ symbol: c.symbol, reason: f?.reason ?? 'no_3d_pct' }); }
      return {
        symbol: c.symbol,
        name: c.name,
        board_code: hot.code,
        board_name: hot.name,
        turnover: c.turnover,
        price: c.price,
        change_pct: c.change_pct,
        inflow_3d: ok ? f.inflow_3d : null,
        amount_3d: ok ? f.amount_3d : null,
        inflow_3d_pct: ok ? f.inflow_3d_pct : null,
        inflow_days: ok ? (f.inflow_days ?? []) : [],
        daily_inflow: ok ? (f.daily_inflow ?? []) : [],
        today_inflow: c.today_inflow ?? null,
        today_inflow_pct: c.today_pct ?? null,
        news_score: null,
        news_signal: null,
        news_patterns: [],
        news_top_news: [],
      };
    });

    candidates.sort(compareCnCandidates);
    if (candidates.length > TOP_N) candidates = candidates.slice(0, TOP_N);
    candidates.forEach((c, i) => { c.rank = i + 1; });
    console.log('✅ 排序完成 → 取前 ' + candidates.length + ' 名 (上限 ' + TOP_N + ')');

    // 资金流全部拿不到时，排序会退化成「仅换手率升序」—— 必须显式标注，不能让报告假装有效
    if (stats.flow_ok === 0) {
      stats.flow_degraded = true;
      console.error('\n⚠️  3日资金流 ' + stats.flow_failed + '/' + afterTurnover.length
        + ' 全部获取失败 → 排序已退化为「仅换手率升序」，本报告参考价值有限。');
      console.error('   数据源域名状态: ' + JSON.stringify(getHostStats()));
    }
  } else {
    console.log('\n⚠️  无候选股票（板块与 cn.txt 无交集，或换手率全部 ≥ ' + TURNOVER_MAX + '%）');
  }

  // ── 5. 新闻情绪（仅展示，不参与排序） ──────────────────────────────────────
  if (candidates.length > 0 && !skipNews) {
    const llm = isLLMEnabled();
    console.log('\n📰 新闻情绪分析 (' + candidates.length + ' 只, LLM '
      + (llm ? '已启用 (' + MODEL + ')' : '⚠ 无 API Key → No Data') + ') ...');
    try {
      const news = await analyzeSymbols(candidates.map(c => c.symbol), {
        market: 'cn',
        concurrency: 5,
        llm,
      });
      const bySymbol = new Map(news.map(n => [n.symbol, n]));
      for (const c of candidates) {
        const n = bySymbol.get(c.symbol);
        if (!n) continue;
        c.news_score = n.score ?? null;
        c.news_signal = n.signal ?? null;
        c.news_patterns = n.patterns ?? [];
        c.news_top_news = (n.tagged ?? []).slice(0, TOP_NEWS_PER_STOCK).map(t => ({
          date: t.date || null,
          title: (t.title || '').slice(0, 100),
          type: t.type,
          sentiment: t.sentiment,
          weight: t.weight,
          final_weight: t.finalWeight,
          source: t.source || null,
        }));
        if (c.news_score != null) stats.news_ok++;
      }
    } finally {
      await closeSharedBrowser();
    }
  } else if (candidates.length > 0 && skipNews) {
    console.log('\n⏭️  已跳过新闻分析 (--no-news)');
  }

  // ── 6. 输出 ───────────────────────────────────────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const jsonOut = {
    generated_at: new Date().toISOString(),
    market: 'cn',
    source: CN_TXT,
    model: 'hot_board_capital_flow',
    hot_board: {
      code: hot.code,
      name: hot.name,
      change_pct: hot.change_pct,
      net_inflow: hot.net_inflow,
      net_inflow_ratio: hot.net_inflow_ratio,
      rank_by_f62: 1,
    },
    filters: {
      turnover_max: TURNOVER_MAX,
      universe: 'hot_board ∩ cn.txt',
      top_n: TOP_N,
      news_in_sort: false,
    },
    formula: 'inflow_3d_pct = Σ(3日主力净流入) / Σ(3日成交额) × 100',
    inflow_source: 'eastmoney fflow/daykline (f52 主力净流入) + kline (f57 成交额)，逐日累加',
    sort_keys: ['inflow_3d_pct desc', 'turnover asc'],
    news: { enabled: !skipNews, llm_used: !skipNews && isLLMEnabled(), display_only: true },
    degraded: stats.flow_degraded,
    degraded_reason: stats.flow_degraded
      ? '3日资金流全部获取失败，排序退化为仅按换手率升序'
      : null,
    stats: { ...stats, data_hosts: getHostStats() },
    total: afterTurnover.length,
    success: candidates.length,
    failed,
    results: candidates,
  };
  writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2), 'utf8');
  console.log('\n✅ JSON: ' + OUT_JSON);

  writeFileSync(OUT_MD, renderMd(jsonOut, today, skipNews), 'utf8');
  console.log('✅ MD:   ' + OUT_MD);

  const snap = snapshotMarket('cn');
  console.log('📸 快照: ' + snap.dir + ' (' + snap.files.length + ' 个文件)\n');

  return jsonOut;
}

// ── Formatting ────────────────────────────────────────────────────────────────

function fmtMoney(v) {
  if (v == null) return '-';
  const abs = Math.abs(v);
  if (abs >= 1e8) return (v / 1e8).toFixed(2) + '亿';
  if (abs >= 1e4) return (v / 1e4).toFixed(2) + '万';
  return v.toFixed(0);
}

function renderMd(out, today, skipNews) {
  const L = [];
  const p = s => L.push(s);
  const hb = out.hot_board;
  const s = out.stats;

  p('# 热点板块资金流选股 · CN — ' + today);
  p('');
  if (out.degraded) {
    p('> 🔴 **数据降级警告** — ' + out.degraded_reason + '。');
    p('> 下表的名次**不代表资金强度**，请勿据此判断。失败明细见文末。');
    p('');
  }
  p('**模型:** `' + out.model + '`（纯资金面，已脱离 TradingView / 隔夜外盘）');
  p('**股票池:** `' + out.source + '`（' + s.cn_txt_total + ' 只 A 股）');
  p('');
  p('### 🔥 热点板块 #1（行业板块 · 按主力净流入降序）');
  p('');
  p('| 板块 | 代码 | 涨跌幅 | 主力净流入 | 净流入占比 |');
  p('|------|------|--------|-----------|-----------|');
  p('| **' + hb.name + '** | ' + hb.code + ' | '
    + (hb.change_pct >= 0 ? '+' : '') + hb.change_pct + '% | '
    + fmtMoney(hb.net_inflow) + ' | ' + (hb.net_inflow_ratio ?? '-') + '% |');
  p('');

  p('### 📊 筛选漏斗');
  p('');
  p('| 步骤 | 数量 |');
  p('|------|------|');
  p('| 板块成分股 | ' + s.board_members_total + ' |');
  p('| ∩ cn.txt | ' + s.in_cn_txt + ' |');
  p('| 换手率 < ' + TURNOVER_MAX + '% | ' + s.after_turnover + ' |');
  p('| 3日资金流获取成功 | ' + s.flow_ok + ' |');
  p('| **最终入选** | **' + out.success + '** |');
  p('');

  if (out.results.length === 0) {
    p('> ⚠️ **无入选股票** — 热点板块 #1 与 `cn.txt` 无交集，或交集个股换手率全部 ≥ '
      + TURNOVER_MAX + '%。');
    p('');
  } else {
    p('### 🎯 入选股票（按 3日流入% 降序 → 换手率升序）');
    p('');
    p('| # | 代码 | 名称 | 换手率 | 3日净流入 | 3日成交额 | 3日流入% | 新闻情绪 |');
    p('|---|------|------|--------|-----------|-----------|----------|----------|');
    for (const r of out.results) {
      const pctStr = r.inflow_3d_pct != null
        ? (r.inflow_3d_pct >= 0 ? '+' : '') + r.inflow_3d_pct.toFixed(2) + '%'
        : '-';
      const newsStr = skipNews ? '（未分析）'
        : r.news_score != null ? (r.news_signal || String(r.news_score)) : '-';
      p('| ' + r.rank + ' | ' + r.symbol + ' | **' + r.name + '** | '
        + (r.turnover != null ? r.turnover.toFixed(2) + '%' : '-') + ' | '
        + fmtMoney(r.inflow_3d) + ' | ' + fmtMoney(r.amount_3d) + ' | '
        + pctStr + ' | ' + newsStr + ' |');
    }
    p('');
    const win = out.results.find(r => r.inflow_days.length)?.inflow_days;
    if (win) p('> **3日窗口(实际交易日):** ' + win.join(' → '));
    p('> **排序规则:** 3日流入% 降序 → 换手率 升序（**新闻不参与排序，仅供展示**）');
    p('> **计算公式:** ' + out.formula);
    p('');

    if (!skipNews && out.results.some(r => r.news_top_news.length > 0)) {
      p('### 📰 新闻情绪明细（仅展示，不参与排序）');
      p('');
      for (const r of out.results) {
        if (r.news_top_news.length === 0) continue;
        p('**' + r.name + ' (' + r.symbol + ')** — 情绪分 ' + (r.news_score ?? '-')
          + ' | ' + (r.news_signal ?? '-'));
        if (r.news_patterns.length) p('- 模式: ' + r.news_patterns.join(' | '));
        for (const n of r.news_top_news) {
          const emo = n.sentiment > 0 ? '🟢' : n.sentiment < 0 ? '🔴' : '⚪';
          p('- ' + emo + ' `' + (n.date || '-').slice(0, 10) + '` [' + n.type + '] ' + n.title);
        }
        p('');
      }
    }
  }

  if (out.failed.length) {
    p('### ⚠️ 数据获取失败 (' + out.failed.length + ' 只)');
    p('');
    p('| 代码 | 原因 |');
    p('|------|------|');
    for (const f of out.failed) p('| ' + f.symbol + ' | ' + f.reason + ' |');
    p('');
  }

  p('---');
  p('_生成时间: ' + new Date().toLocaleString('zh-CN') + ' | 数据来源: 东方财富_');
  p('');
  return L.join('\n');
}
