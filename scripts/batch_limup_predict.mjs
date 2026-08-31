#!/usr/bin/env node
/**
 * Batch Limit-Up Prediction — uses EastMoney APIs for fast OHLCV fetch,
 * then runs the 7-factor scorecard on all stocks.
 *
 * Usage: node scripts/batch_limup_predict.mjs <code1,code2,...>
 *        node scripts/batch_limup_predict.mjs 000539,603011,002995,...
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';

// ── Helpers ──────────────────────────────────────────────────────────

const r1 = v => Math.round(v * 10) / 10;
const r2 = v => Math.round(v * 100) / 100;

async function fetchJson(url) {
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    signal: AbortSignal.timeout(10000),
  });
  if (!resp.ok) return null;
  return resp.json();
}

function codeToEastMoney(code) {
  // 60xxxx/68xxxx → 1.60xxxx (Shanghai)
  // 00xxxx/30xxxx/001xxx/003xxx → 0.xxxxxx (Shenzhen)
  if (code.startsWith('60') || code.startsWith('68')) return { secid: `1.${code}`, exchange: 'SH' };
  return { secid: `0.${code}`, exchange: 'SZ' };
}

function codeToTV(code) {
  if (code.startsWith('60') || code.startsWith('68')) return `SSE:${code}`;
  return `SZSE:${code}`;
}

// ── Industry Fetch ───────────────────────────────────────────────────

async function fetchIndustry(code) {
  const em = codeToEastMoney(code);
  const url = `https://emweb.securities.eastmoney.com/PC_HSF10/CompanySurvey/CompanySurveyAjax?code=${em.exchange}${code}`;
  const data = await fetchJson(url);
  if (!data?.jbzl) return { name: code, industry: null, market: null };
  return {
    name: data.jbzl.gsmc || code,
    industry: data.jbzl.sshy || null,
    market: data.jbzl.zqlb || null,
  };
}

// ── OHLCV Fetch ──────────────────────────────────────────────────────

async function fetchOhlcv(code, count = 30) {
  const em = codeToEastMoney(code);
  const url = `https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=${em.secid}&fields1=f1,f2,f3,f4,f5,f6&fields2=f51,f52,f53,f54,f55,f56,f57&klt=101&fqt=0&end=20500101&lmt=${count}`;
  const data = await fetchJson(url);
  if (!data?.data?.klines) return [];
  return data.data.klines.map(k => {
    const [date, open, close, high, low, volume] = k.split(',');
    return {
      date,
      open: parseFloat(open),
      close: parseFloat(close),
      high: parseFloat(high),
      low: parseFloat(low),
      volume: parseFloat(volume),
    };
  });
}

// ── Technical Computations ───────────────────────────────────────────

function detectLimit(bars, code) {
  if (bars.length < 2) return { chg: 0, limitPct: 10, upLimit: false, downLimit: false, upStreak: 0, dnStreak: 0, market: '未知' };

  // Determine limit %
  let limitPct = 10.0;
  let market = '主板';
  if (code.startsWith('688')) { limitPct = 20.0; market = '科创'; }
  else if (code.startsWith('30')) { limitPct = 20.0; market = '创业'; }
  else if (/^(43|83|87|82|85)/.test(code)) { limitPct = 20.0; market = '北交'; }

  const last = bars[bars.length - 1];
  const prev = bars[bars.length - 2];
  const chg = ((last.close - prev.close) / prev.close) * 100;
  const tolerance = limitPct - 0.3;

  const upLimit = chg >= tolerance;
  const downLimit = chg <= -tolerance;

  // Count streak
  let upStreak = 0, dnStreak = 0;
  if (upLimit) {
    for (let i = bars.length - 1; i >= 0; i--) {
      if (i === 0) { upStreak++; break; }
      const c = bars[i], p = bars[i - 1];
      const cChg = ((c.close - p.close) / p.close) * 100;
      if (cChg >= limitPct - 0.3) upStreak++;
      else break;
    }
  }
  if (downLimit) {
    for (let i = bars.length - 1; i >= 0; i--) {
      if (i === 0) { dnStreak++; break; }
      const c = bars[i], p = bars[i - 1];
      const cChg = ((c.close - p.close) / p.close) * 100;
      if (cChg <= -(limitPct - 0.3)) dnStreak++;
      else break;
    }
  }

  return { chg: r1(chg), limitPct, upLimit, downLimit, upStreak, dnStreak, market };
}

function computeVolRatio(bars) {
  if (bars.length < 21) return null;
  const lastVol = bars[bars.length - 1].volume;
  let sum = 0;
  for (let i = bars.length - 21; i < bars.length - 1; i++) sum += bars[i].volume;
  const avg = sum / 20;
  return avg > 0 ? r2(lastVol / avg) : 1.0;
}

function computeAtrPct(bars, n = 14) {
  if (bars.length < n + 1) return null;
  let sum = 0;
  for (let i = bars.length - n; i < bars.length; i++) {
    const h = bars[i].high, l = bars[i].low, pc = bars[i - 1].close;
    sum += Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc));
  }
  const atr = sum / n;
  const price = bars[bars.length - 1].close;
  return price > 0 ? r2((atr / price) * 100) : null;
}

// ── Scoring (inline, same logic as limup_scorecard.mjs) ──────────────

function scoreBoardPosition(upStreak) {
  if (upStreak === 1) return 25;
  if (upStreak === 2) return 22;
  if (upStreak === 3) return 18;
  if (upStreak === 4) return 12;
  if (upStreak === 5) return 10;
  return 6;
}

function scoreTurnoverHealth(volRatio) {
  if (volRatio == null) return 10;
  if (volRatio >= 1.5 && volRatio <= 4.0) return 20;
  if (volRatio >= 1.0 && volRatio < 1.5) return 16;
  if (volRatio > 4.0 && volRatio <= 6.0) return 14;
  if (volRatio >= 0.6 && volRatio < 1.0) return 12;
  if (volRatio > 6.0 && volRatio <= 10.0) return 8;
  if (volRatio < 0.6) return 6;
  return 4;
}

function scoreVolumeQuality(volRatio) {
  if (volRatio == null) return 7;
  if (volRatio >= 2.0 && volRatio <= 5.0) return 15;
  if (volRatio >= 1.2 && volRatio < 2.0) return 12;
  if (volRatio > 5.0 && volRatio <= 8.0) return 9;
  if (volRatio >= 0.8 && volRatio < 1.2) return 7;
  if (volRatio > 8.0) return 4;
  return 3;
}

function scoreTechStrength(techScore) {
  if (techScore == null) return 7;
  if (techScore >= 40) return 15;
  if (techScore >= 25) return 12;
  if (techScore >= 10) return 8;
  if (techScore >= 0) return 5;
  return 2;
}

function scoreSentiment(newsScore) {
  if (newsScore == null) return 5;
  if (newsScore >= 20) return 10;
  if (newsScore >= 8) return 7;
  if (newsScore >= 0) return 5;
  return 2;
}

function scoreVolatility(atrPct) {
  if (atrPct == null) return 5;
  if (atrPct >= 2.0 && atrPct <= 5.0) return 10;
  if (atrPct >= 1.5 && atrPct < 2.0) return 8;
  if (atrPct > 5.0 && atrPct <= 8.0) return 7;
  if (atrPct < 1.5) return 5;
  return 3;
}

function scoreSectorEffect(count, total) {
  if (total === 0) return 2;
  if (count >= 5) return 5;
  if (count >= 3) return 4;
  if (count >= 2) return 3;
  return 1;
}

function computeVerdict(sc) {
  if (sc >= 70) return { verdict: 'strong_buy', label: '🔥 强买入' };
  if (sc >= 55) return { verdict: 'buy', label: '✅ 买入' };
  if (sc >= 40) return { verdict: 'watch', label: '👀 关注' };
  return { verdict: 'skip', label: '⏸ 观望' };
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  const raw = process.argv[2];
  if (!raw) {
    console.error('Usage: node scripts/batch_limup_predict.mjs <code1,code2,...>');
    process.exit(1);
  }

  const codes = [...new Set(raw.split(/[,，\s]+/).filter(Boolean))];
  console.log(`\n📊 批量涨停预测 — ${codes.length} 只股票\n`);

  // ── Step 1: Fetch industry data ──
  console.log('⏳ 获取行业数据...');
  const industryMap = new Map();
  let done = 0;
  for (const code of codes) {
    try {
      const info = await fetchIndustry(code);
      if (info.industry) industryMap.set(code, info);
      done++;
      if (done % 20 === 0) process.stdout.write(`\r  行业: ${done}/${codes.length}`);
      await new Promise(r => setTimeout(r, 80));
    } catch { done++; }
  }
  console.log(`\r  ✅ 行业: ${industryMap.size}/${codes.length}`);

  // ── Step 2: Fetch OHLCV data ──
  console.log('⏳ 获取K线数据...');
  const ohlcvMap = new Map();
  done = 0;
  for (const code of codes) {
    try {
      const bars = await fetchOhlcv(code, 30);
      if (bars.length > 0) ohlcvMap.set(code, bars);
      done++;
      if (done % 20 === 0) process.stdout.write(`\r  K线: ${done}/${codes.length}`);
      await new Promise(r => setTimeout(r, 80));
    } catch { done++; }
  }
  console.log(`\r  ✅ K线: ${ohlcvMap.size}/${codes.length}`);

  // ── Step 3: Compute factors & detect limits ──
  console.log('⏳ 计算技术指标...');
  const stocks = [];
  for (const code of codes) {
    const bars = ohlcvMap.get(code);
    if (!bars || bars.length < 2) continue;

    const limitInfo = detectLimit(bars, code);
    const volRatio = computeVolRatio(bars);
    const atrPct = computeAtrPct(bars);
    const industry = industryMap.get(code);
    const price = bars[bars.length - 1].close;

    stocks.push({
      code,
      name: industry?.name || code,
      industry: industry?.industry || limitInfo.market,
      market: limitInfo.market,
      price,
      limitInfo,
      volRatio,
      atrPct,
    });
  }
  console.log(`  ✅ 有效数据: ${stocks.length} 只`);

  // ── Step 4: Filter to limit-up only ──
  const limitUps = stocks.filter(s => s.limitInfo.upLimit);
  console.log(`  🎯 今日涨停: ${limitUps.length} 只`);

  if (limitUps.length === 0) {
    console.log('\n今日无涨停股票。');
    // Show stocks that are close to limit
    const nearLimit = stocks.filter(s => s.limitInfo.chg >= 5).sort((a, b) => b.limitInfo.chg - a.limitInfo.chg);
    if (nearLimit.length > 0) {
      console.log('\n接近涨停 (≥5%):');
      for (const s of nearLimit.slice(0, 10)) {
        console.log(`  ${s.code} ${s.name}: ${s.limitInfo.chg}% (${s.limitInfo.upStreak}板)`);
      }
    }
    process.exit(0);
  }

  // ── Step 5: Industry stats ──
  const industryStats = {};
  for (const s of limitUps) {
    const ind = s.industry || '未知';
    industryStats[ind] = (industryStats[ind] || 0) + 1;
  }
  const totalUp = limitUps.length;

  // ── Step 6: Score all ──
  const results = [];
  for (const s of limitUps) {
    const ind = s.industry || '未知';
    const scBoard = scoreBoardPosition(s.limitInfo.upStreak);
    const scTurnover = scoreTurnoverHealth(s.volRatio);
    const scVolQual = scoreVolumeQuality(s.volRatio);
    const scTech = scoreTechStrength(null);
    const scSent = scoreSentiment(null);
    const scVol = scoreVolatility(s.atrPct);
    const scSector = scoreSectorEffect(industryStats[ind] || 1, totalUp);
    const total = scBoard + scTurnover + scVolQual + scTech + scSent + scVol + scSector;
    const { verdict, label } = computeVerdict(total);

    results.push({
      code: s.code,
      name: s.name,
      industry: ind,
      upStreak: s.limitInfo.upStreak,
      market: s.market,
      chg: s.limitInfo.chg,
      price: s.price,
      volRatio: s.volRatio,
      atrPct: s.atrPct,
      scorecard: total,
      breakdown: { board_position: scBoard, turnover_health: scTurnover, volume_quality: scVolQual, tech_strength: scTech, sentiment: scSent, volatility: scVol, sector_effect: scSector },
      verdict,
      label,
    });
  }

  results.sort((a, b) => b.scorecard - a.scorecard);

  // ── Step 7: Output ──
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('  明日涨停概率预测 (评分卡模型)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Industry summary
  console.log('📊 行业板块分布:');
  const sortedInd = Object.entries(industryStats).sort((a, b) => b[1] - a[1]);
  for (const [ind, cnt] of sortedInd) {
    const bar = '█'.repeat(Math.min(cnt, 20));
    console.log(`  ${ind.padEnd(12)} ${String(cnt).padStart(2)}只  ${bar}`);
  }

  console.log('\n🎯 涨停概率排名 (Top 30):');
  console.log('排名  代码       名称          连板  行业        评分  量比    ATR%   判定');
  console.log('────  ────────  ────────────  ────  ──────────  ────  ─────  ─────  ────────');
  for (let i = 0; i < Math.min(results.length, 30); i++) {
    const r = results[i];
    const cd = r.code.padEnd(8);
    const nm = (r.name || '').slice(0, 12).padEnd(12);
    const strk = `${r.upStreak}板`.padEnd(4);
    const ind = (r.industry || '').slice(0, 10).padEnd(10);
    const sc = String(r.scorecard).padStart(3);
    const vr = r.volRatio != null ? (r.volRatio.toFixed(1) + 'x').padStart(5) : '  N/A ';
    const atr = r.atrPct != null ? (r.atrPct.toFixed(1) + '%').padStart(5) : '  N/A ';
    console.log(`${String(i + 1).padStart(2)}.   ${cd}  ${nm}  ${strk}  ${ind}  ${sc}  ${vr}  ${atr}  ${r.label}`);
  }

  // Full list bottom
  if (results.length > 30) {
    console.log(`\n  ... 以下省略 ${results.length - 30} 只，完整列表见下方`);
  }

  // Full table
  console.log(`\n\n📋 完整排名 (${results.length} 只):\n`);
  console.log('排名  代码       名称          连板  行业        评分  板位  换手  量能  技术  情绪  波动  板块  判定');
  console.log('────  ────────  ────────────  ────  ──────────  ────  ────  ────  ────  ────  ────  ────  ────  ────────');
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const b = r.breakdown;
    const cd = r.code.padEnd(8);
    const nm = (r.name || '').slice(0, 12).padEnd(12);
    const strk = `${r.upStreak}板`.padEnd(4);
    const ind = (r.industry || '').slice(0, 10).padEnd(10);
    const sc = String(r.scorecard).padStart(3);
    console.log(`${String(i + 1).padStart(2)}.   ${cd}  ${nm}  ${strk}  ${ind}  ${sc}  ${String(b.board_position).padStart(3)}   ${String(b.turnover_health).padStart(3)}   ${String(b.volume_quality).padStart(3)}   ${String(b.tech_strength).padStart(3)}   ${String(b.sentiment).padStart(3)}   ${String(b.volatility).padStart(3)}   ${String(b.sector_effect).padStart(3)}   ${r.label}`);
  }

  // Save JSON
  const out = {
    generated_at: new Date().toISOString(),
    total_codes: codes.length,
    limit_up_count: limitUps.length,
    industry_stats: industryStats,
    results: results.map(r => ({
      code: r.code,
      name: r.name,
      industry: r.industry,
      up_streak: r.upStreak,
      market: r.market,
      chg_pct: r.chg,
      price: r.price,
      vol_ratio: r.volRatio,
      atr_pct: r.atrPct,
      scorecard: r.scorecard,
      breakdown: r.breakdown,
      verdict: r.verdict,
      verdict_label: r.label,
    })),
  };

  const outPath = `./watchlist/cn_limup_predict_${new Date().toISOString().slice(0, 10)}.json`;
  writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\n✅ JSON: ${outPath}\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
