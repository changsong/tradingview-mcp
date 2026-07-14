/**
 * Stage 4.5 — 日内缺口分析 (Intraday Gap Analysis) shared core.
 *
 * Ranks stocks in watchlist/<market>_selected.txt by:
 *   1. |close - open| / open  ASC  — tightest intraday gap first
 *   2. close / low            DESC — strongest close vs low as tiebreaker
 *
 * Input:  ./watchlist/<market>_selected.txt
 * Output: ./watchlist/<market>_intraday_gap.{md,json}
 *         reports/<YYYY-MM-DD>/<market>_intraday_gap.{md,json} (snapshot)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { runCli, sleep } from '../lib/runCli.mjs';
import { snapshotMarket } from '../lib/snapshot.mjs';

const SWITCH_DELAY = 1700;
const TF_DELAY     = 600;

/**
 * @param {'cn'|'us'|'hk'} market
 */
export async function runGap(market) {
  const tag = market.toUpperCase();
  const SELECTED_PATH = `./watchlist/${market}_selected.txt`;
  const TECH_JSON     = `./watchlist/${market}_tech_signals.json`;
  const OUT_JSON      = `./watchlist/${market}_intraday_gap.json`;
  const OUT_MD        = `./watchlist/${market}_intraday_gap.md`;

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Stage 4.5 · 日内缺口分析 (${tag})`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  // ── 1. Load symbols ────────────────────────────────────────────────────────
  if (!existsSync(SELECTED_PATH)) {
    throw new Error(`Selected file 不存在: ${SELECTED_PATH} — 请先 npm run scan:${market}`);
  }
  const raw = readFileSync(SELECTED_PATH, 'utf8').trim();
  const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];
  if (symbols.length === 0) throw new Error(`Watchlist 为空: ${SELECTED_PATH}`);
  console.log(`📋 ${SELECTED_PATH}: ${symbols.length} 只`);

  // ── 2. Load name/ATR map from tech signals (non-fatal) ─────────────────────
  let nameMap = new Map();
  if (existsSync(TECH_JSON)) {
    const tech = JSON.parse(readFileSync(TECH_JSON, 'utf8'));
    for (const [sym, s] of Object.entries(tech.stocks ?? {})) {
      nameMap.set(sym, { name: s.name ?? sym, atr_pct: s.atr_pct ?? null });
    }
    console.log(`📊 已载入 ${nameMap.size} 条名称/ATR 映射\n`);
  } else {
    console.warn('⚠️  未找到 tech_signals.json，名称/ATR 将不可用');
  }

  // ── 3. CDP health check ────────────────────────────────────────────────────
  const hc = await runCli('status');
  if (!hc?.cdp_connected) {
    throw new Error('TradingView 未连接 — 请先 scripts\\launch_tv_debug.bat 启动 (CDP 9222)');
  }

  // ── 4. Per-symbol OHLCV fetch ─────────────────────────────────────────────
  const estMin = (symbols.length * (SWITCH_DELAY + TF_DELAY + 500) / 60000).toFixed(1);
  console.log(`🔄 抓取日线 OHLCV (~${estMin} min) ...\n`);

  const results = [];
  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    process.stdout.write(`  [${String(i + 1).padStart(3)}/${symbols.length}] ${sym.padEnd(18)} `);

    // switch → sleep → daily TF → sleep → fetch
    const sw = await runCli(`symbol ${sym}`);
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

    const o = await runCli('ohlcv -n 1');
    if (!o?.success || !Array.isArray(o.bars) || o.bars.length === 0) {
      console.log('✗ ohlcv 失败');
      results.push({ symbol: sym, ok: false, reason: 'ohlcv_fail' });
      continue;
    }
    const bar = o.bars[0];
    const { open, high, low, close } = bar;
    if (!open || open === 0) {
      console.log('✗ open=0');
      results.push({ symbol: sym, ok: false, reason: 'bad_open' });
      continue;
    }
    if (!low || low === 0) {
      console.log('✗ low=0');
      results.push({ symbol: sym, ok: false, reason: 'bad_low' });
      continue;
    }

    const gap_pct = Math.abs(close - open) / open;
    const close_vs_low = close / low;
    const meta = nameMap.get(sym) ?? {};

    const r = {
      symbol: sym,
      name: meta.name ?? sym,
      ok: true,
      price: close,
      open,
      high,
      low,
      gap_pct: +gap_pct.toFixed(6),
      close_vs_low: +close_vs_low.toFixed(6),
      atr_pct: meta.atr_pct ?? null,
    };
    results.push(r);
    console.log(`gap=${(r.gap_pct * 100).toFixed(2)}%  c/l=${r.close_vs_low.toFixed(4)}  ${r.name}`);
  }

  const ok = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  console.log(`\n✅ 成功 ${ok.length} 只, 失败 ${failed.length} 只`);
  if (failed.length > 0) {
    console.log('失败详情:');
    failed.forEach(f => console.log(`  ✗ ${f.symbol}: ${f.reason}`));
  }

  // ── 5. Sort: gap_pct ASC, then close_vs_low DESC ───────────────────────────
  ok.sort((a, b) => {
    const d = a.gap_pct - b.gap_pct;
    if (Math.abs(d) > 1e-9) return d;
    return b.close_vs_low - a.close_vs_low;
  });

  const today = new Date().toISOString().slice(0, 10);

  // ── 6. Write outputs ──────────────────────────────────────────────────────
  const jsonOut = {
    generated_at: new Date().toISOString(),
    market,
    source: SELECTED_PATH,
    total: symbols.length,
    success: ok.length,
    failed: failed.map(f => ({ symbol: f.symbol, reason: f.reason })),
    results: ok,
  };
  writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2), 'utf8');
  console.log(`\n✅ JSON: ${OUT_JSON}`);

  writeFileSync(OUT_MD, renderMd([...ok, ...failed], tag, SELECTED_PATH, today), 'utf8');
  console.log(`✅ MD:   ${OUT_MD}`);

  const snap = snapshotMarket(market);
  console.log(`📸 快照: ${snap.dir} (${snap.files.length} 个文件)\n`);

  return jsonOut;
}

// ── Markdown rendering ───────────────────────────────────────────────────────
function renderMd(results, tag, sourcePath, today) {
  const L = [];
  const p = s => L.push(s);
  const fmt = (v, d) => v != null ? v.toFixed(d) : '-';
  const pct = v => v != null ? (v * 100).toFixed(2) + '%' : '-';

  p(`# 日内缺口分析 · ${tag} — ${today}`);
  p('');
  p(`**数据源:** \`${sourcePath}\``);
  p(`**成功:** ${results.filter(r => r.ok).length} / **失败:** ${results.filter(r => !r.ok).length}`);
  p('');
  p('| # | 名称 | 代码 | 收盘 | 开盘 | 最高 | 最低 | gap% | close/low | ATR% |');
  p('|---|------|------|------|------|------|------|------|-----------|------|');

  results.forEach((r, i) => {
    if (!r.ok) {
      p(`| ${i + 1} | — | ${r.symbol} | — | — | — | — | ${r.reason} | — | — |`);
    } else {
      p(`| ${i + 1} | **${r.name}** | ${r.symbol} | ${fmt(r.price, 2)} | ${fmt(r.open, 2)} | ${fmt(r.high, 2)} | ${fmt(r.low, 2)} | ${pct(r.gap_pct)} | ${fmt(r.close_vs_low, 4)} | ${pct(r.atr_pct ? r.atr_pct / 100 : null)} |`);
    }
  });
  p('');
  p('---');
  p(`_生成时间: ${new Date().toLocaleString('zh-CN')}_`);
  p('');

  return L.join('\n');
}
