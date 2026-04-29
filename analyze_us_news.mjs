/**
 * US Stock News Sentiment Analyzer
 * Fetches news for selected US stocks and generates tradeable signals
 */
import { searchUSNews } from './src/core/usNews.js';
import { readFileSync } from 'fs';

// ─── Config ───────────────────────────────────────────────────────────────────
const DAYS_BACK = 5;
const PARALLEL_BATCH = 4; // concurrent requests per batch

// ─── News type classifier ─────────────────────────────────────────────────────
function classifyNewsType(title) {
  const t = title.toLowerCase();
  if (/earnings|revenue|profit|eps|beat|miss|guidance|quarter|fiscal|annual report/.test(t)) return '财报';
  if (/merger|acqui|deal|takeover|buyout|mna|buy out/.test(t)) return '并购';
  if (/fed|rate|policy|regulation|tariff|sanction|law|bill|congress|sec |fda |irs/.test(t)) return '政策';
  if (/sector|industry|market share|competition|macro|gdp|inflation|ppi|cpi/.test(t)) return '行业';
  if (/recall|fraud|lawsuit|scandal|hack|breach|disaster|bankruptcy|delist/.test(t)) return '黑天鹅';
  if (/rumor|report says|sources say|reportedly|unconfirmed|speculation/.test(t)) return '传闻';
  return '行业'; // default
}

// ─── Sentiment scorer (+1 / 0 / -1) ─────────────────────────────────────────
const BULLISH_PAT = /beat|upgrade|outperform|raised|strong|surge|rally|buy|bullish|record|growth|profit|revenue up|positive|above expectations|dividend|buyback|overweight/i;
const BEARISH_PAT = /miss|downgrade|underperform|cut|weak|drop|fall|bearish|loss|revenue down|below expectations|warning|risk|concern|investigation|short seller|resignation|delay|layoff/i;

function scoreSentiment(title) {
  const bullish = BULLISH_PAT.test(title);
  const bearish = BEARISH_PAT.test(title);
  if (bullish && !bearish) return 1;
  if (bearish && !bullish) return -1;
  return 0;
}

// ─── Impact weight (1-5) ─────────────────────────────────────────────────────
function scoreWeight(title, type, upvotes = 0, comments = 0) {
  let w = 2; // baseline
  if (type === '财报') w = 5;
  else if (type === '并购') w = 4;
  else if (type === '政策') w = 4;
  else if (type === '黑天鹅') w = 5;
  else if (type === '传闻') w = 1;
  // social boost
  const engagement = upvotes + comments * 3;
  if (engagement > 1000) w = Math.min(5, w + 1);
  if (engagement > 5000) w = 5;
  return w;
}

// ─── Anti-hype checks ────────────────────────────────────────────────────────
function detectHype(items) {
  const bullishItems = items.filter(i => i.sentiment === 1);
  const ratio = bullishItems.length / (items.length || 1);
  const avgWeight = items.reduce((s, i) => s + i.weight, 0) / (items.length || 1);
  return {
    overheated: ratio > 0.75 && avgWeight < 3,   // lots of bullish but low-weight sources
    preEmptive: items.some(i => /ahead of|before earnings|pre-earnings|expecting/.test(i.title)),
    fakeBullish: items.some(i => i.sentiment === 1 && i.type === '传闻'),
  };
}

// ─── Pattern recognizer ──────────────────────────────────────────────────────
function detectPattern(items) {
  if (items.length < 2) return 'insufficient_data';
  // sort by date desc (most recent first)
  const sorted = [...items].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const recent3 = sorted.slice(0, Math.min(3, sorted.length));
  const older = sorted.slice(Math.min(3, sorted.length));

  const recentScore = recent3.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const olderScore = older.length ? older.reduce((s, i) => s + i.sentiment * i.weight, 0) : recentScore;

  if (recentScore > 0 && recentScore > olderScore) return 'trend_up';
  if (recentScore < 0 && recentScore < olderScore) return 'trend_down';
  if (olderScore > 0 && recentScore < 0) return 'reversal_bearish';
  if (olderScore < 0 && recentScore > 0) return 'reversal_bullish';
  return 'neutral';
}

// ─── Trading signal generator ─────────────────────────────────────────────────
function generateSignal(symbol, sentimentScore, items, pattern, hype, sqzmomSignal) {
  const totalItems = items.length;
  const bullCount = items.filter(i => i.sentiment === 1).length;
  const bearCount = items.filter(i => i.sentiment === -1).length;
  const bullRatio = bullCount / (totalItems || 1);
  const bearRatio = bearCount / (totalItems || 1);

  let action = 'No Trade';
  let type = '-';
  let chaseOK = 'NO';
  let reason = '';
  const risks = [];
  const opps = [];

  // Base decision
  if (sentimentScore >= 6 && pattern === 'trend_up' && !hype.overheated) {
    action = 'Long';
    type = bullRatio > 0.6 ? '突破型' : '回调低吸';
    chaseOK = bullRatio > 0.6 ? 'YES' : 'NO';
    reason = `情绪指数 +${sentimentScore}，近期持续向好，信号真实性高`;
    opps.push('新闻动能强劲，建仓机会');
  } else if (sentimentScore >= 3 && !hype.overheated && pattern !== 'trend_down') {
    action = 'Long';
    type = '回调低吸';
    chaseOK = 'NO';
    reason = `情绪指数 +${sentimentScore}，轻度正向，等回调再入`;
    opps.push('情绪偏多但动能有限，低吸更优');
  } else if (sentimentScore <= -4 || pattern === 'reversal_bearish') {
    action = 'Short';
    type = '反转';
    chaseOK = 'NO';
    reason = `情绪指数 ${sentimentScore}，新闻负向或情绪反转，建议做空或回避`;
    risks.push('负面催化持续可能压制股价');
  } else if (hype.overheated || hype.fakeBullish) {
    action = 'No Trade';
    reason = '情绪过热或存在假利好，高风险';
    risks.push(hype.overheated ? '情绪过热：散户噪音为主，无实质催化' : '假利好：来源为传闻/未确认');
    chaseOK = 'NO';
  } else {
    action = 'No Trade';
    reason = `情绪指数 ${sentimentScore}，信号不明确`;
  }

  // SQZMOM signal booster
  if (sqzmomSignal === 'GO' && action === 'Long') {
    reason += '；SQZMOM 确认 GO 信号，策略共振';
    chaseOK = 'YES';
    type = '突破型';
  }

  // Hype warnings
  if (hype.preEmptive) risks.push('⚠ 存在提前炒作迹象（盈利预期/传言）');
  if (hype.overheated) risks.push('⚠ 情绪过热，追高风险大');
  if (hype.fakeBullish) risks.push('⚠ 正面新闻含传闻成分，需验证');

  if (pattern === 'reversal_bullish') opps.push('情绪由空转多，反转机会');
  if (bullRatio > 0.6) opps.push(`看多占比 ${(bullRatio * 100).toFixed(0)}%，市场共识较强`);

  return { action, type, chaseOK, reason, risks, opps };
}

// ─── Process one symbol ───────────────────────────────────────────────────────
async function analyzeSymbol(rawSymbol, sqzmomSignal = 'WAIT') {
  const symbol = rawSymbol.replace(/^(NASDAQ:|NYSE:|CBOE:)/, '');
  let data;
  try {
    data = await searchUSNews({ symbol, count: 15 });
  } catch (e) {
    return { symbol: rawSymbol, error: e.message };
  }

  if (!data.success) return { symbol: rawSymbol, error: 'fetch failed' };

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - DAYS_BACK);

  // Merge and label all items
  const allRaw = [
    ...data.news,
    ...data.social,
    ...data.forum,
  ];

  const labeled = allRaw
    .filter(item => {
      if (!item.date) return true;
      return new Date(item.date) >= cutoff;
    })
    .map(item => {
      const type = classifyNewsType(item.title || '');
      const sentiment = scoreSentiment(item.title || '');
      const weight = scoreWeight(item.title || '', type, item.upvotes || item.likes || 0, item.comments || item.replies || 0);
      return {
        date: item.date || 'unknown',
        title: (item.title || '').substring(0, 120),
        source: item.source || '?',
        type,
        sentiment,
        weight,
        url: item.url || '',
      };
    })
    // remove pure noise (weight=1 AND sentiment=0)
    .filter(i => !(i.weight <= 1 && i.sentiment === 0))
    .slice(0, 20); // cap

  const sentimentScore = labeled.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const pattern = detectPattern(labeled);
  const hype = detectHype(labeled);
  const signal = generateSignal(rawSymbol, sentimentScore, labeled, pattern, hype, sqzmomSignal);

  // Ratio breakdown
  const total = labeled.length || 1;
  const bullCount = labeled.filter(i => i.sentiment === 1).length;
  const bearCount = labeled.filter(i => i.sentiment === -1).length;
  const neutCount = labeled.filter(i => i.sentiment === 0).length;

  return {
    symbol: rawSymbol,
    sqzmom: sqzmomSignal,
    news_count: labeled.length,
    sentiment_score: sentimentScore,
    bull_ratio: `${((bullCount / total) * 100).toFixed(0)}%`,
    bear_ratio: `${((bearCount / total) * 100).toFixed(0)}%`,
    neut_ratio: `${((neutCount / total) * 100).toFixed(0)}%`,
    pattern,
    hype,
    signal,
    top_news: labeled.slice(0, 8),
  };
}

// ─── Batch runner ─────────────────────────────────────────────────────────────
async function runBatch(stocks) {
  const results = [];
  for (let i = 0; i < stocks.length; i += PARALLEL_BATCH) {
    const batch = stocks.slice(i, i + PARALLEL_BATCH);
    const batchResults = await Promise.all(
      batch.map(({ symbol, sqzmom }) => analyzeSymbol(symbol, sqzmom))
    );
    results.push(...batchResults);
    process.stdout.write(`  processed ${Math.min(i + PARALLEL_BATCH, stocks.length)}/${stocks.length}\r`);
    await new Promise(r => setTimeout(r, 800));
  }
  return results;
}

// ─── Renderer ─────────────────────────────────────────────────────────────────
function printReport(results) {
  const line = '═'.repeat(80);
  const thinLine = '─'.repeat(80);

  console.log(`\n${line}`);
  console.log('  📰 US Stock News Sentiment Report  —  最近 5 天重要新闻分析');
  console.log(`  生成时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log(`${line}\n`);

  // Sort: Long first, then No Trade, Short last; within group by score desc
  const sorted = [...results].sort((a, b) => {
    const order = { Long: 0, 'No Trade': 1, Short: 2 };
    const oa = order[a.signal?.action] ?? 1;
    const ob = order[b.signal?.action] ?? 1;
    if (oa !== ob) return oa - ob;
    return (b.sentiment_score || 0) - (a.sentiment_score || 0);
  });

  // Summary table
  console.log('【汇总速览】\n');
  console.log('  股票          信号       情绪分  模式           SQZMOM  看多%  看空%');
  console.log(`  ${thinLine.substring(0, 70)}`);
  sorted.forEach(r => {
    if (r.error) {
      console.log(`  ${r.symbol.padEnd(14)} ❌ 获取失败: ${r.error}`);
      return;
    }
    const s = r.signal;
    const emoji = s.action === 'Long' ? '🟢 Long    ' : s.action === 'Short' ? '🔴 Short   ' : '⚪ No Trade';
    const score = String(r.sentiment_score >= 0 ? `+${r.sentiment_score}` : r.sentiment_score).padStart(4);
    const pat = (r.pattern || '').padEnd(14);
    const sq = (r.sqzmom || '').padEnd(6);
    console.log(`  ${r.symbol.padEnd(14)} ${emoji}  ${score}  ${pat} ${sq}  ${r.bull_ratio.padStart(5)}  ${r.bear_ratio.padStart(5)}`);
  });

  console.log(`\n${line}\n`);

  // Detailed per-stock
  sorted.forEach((r, idx) => {
    if (r.error) return;
    const s = r.signal;
    const actionIcon = s.action === 'Long' ? '🟢' : s.action === 'Short' ? '🔴' : '⚪';

    console.log(`${actionIcon} [${idx + 1}] ${r.symbol}  (SQZMOM: ${r.sqzmom})`);
    console.log(`   交易信号: ${s.action}   类型: ${s.type}   是否适合追涨: ${s.chaseOK}`);
    console.log(`   情绪指数: ${r.sentiment_score >= 0 ? '+' : ''}${r.sentiment_score}  模式: ${r.pattern}`);
    console.log(`   情绪分布: 看多 ${r.bull_ratio}  看空 ${r.bear_ratio}  中性 ${r.neut_ratio}   新闻条数: ${r.news_count}`);
    console.log(`   触发原因: ${s.reason}`);

    if (s.opps.length) {
      console.log(`   ✅ 机会点:`);
      s.opps.forEach(o => console.log(`      • ${o}`));
    }
    if (s.risks.length) {
      console.log(`   ⚠  风险点:`);
      s.risks.forEach(ri => console.log(`      • ${ri}`));
    }

    // Hype detection
    const h = r.hype;
    if (h.overheated || h.preEmptive || h.fakeBullish) {
      console.log(`   🚨 炒作检测:`);
      if (h.overheated)  console.log(`      • 情绪过热 (大量低权重看多，无实质催化)`);
      if (h.preEmptive)  console.log(`      • 疑似提前炒作 (盈利预期/传言驱动)`);
      if (h.fakeBullish) console.log(`      • 假利好风险 (来源为传闻，未确认)`);
    }

    if (r.top_news.length > 0) {
      console.log(`   📋 关键新闻 (近5天，按影响力筛选):`);
      r.top_news.forEach(n => {
        const sentIcon = n.sentiment === 1 ? '📈' : n.sentiment === -1 ? '📉' : '➡';
        console.log(`      ${sentIcon} [${n.type}|情绪:${n.sentiment >= 0 ? '+' : ''}${n.sentiment}|权重:${n.weight}] ${n.title}`);
        if (n.date !== 'unknown') console.log(`         来源: ${n.source}  日期: ${n.date}`);
      });
    } else {
      console.log(`   📋 近5天无高影响力新闻（市场关注度低）`);
    }

    console.log('');
  });

  // Final actionable list
  const longs = sorted.filter(r => r.signal?.action === 'Long');
  const shorts = sorted.filter(r => r.signal?.action === 'Short');

  console.log(`${line}`);
  console.log('  🎯 可操作信号汇总');
  console.log(`${thinLine}`);
  if (longs.length) {
    console.log(`\n  做多候选 (${longs.length} 只):`);
    longs.forEach(r => {
      console.log(`    ${r.symbol.padEnd(16)} 情绪分:${String(r.sentiment_score >= 0 ? '+' + r.sentiment_score : r.sentiment_score).padStart(4)}  类型:${r.signal.type}  追涨:${r.signal.chaseOK}`);
    });
  }
  if (shorts.length) {
    console.log(`\n  做空候选 (${shorts.length} 只):`);
    shorts.forEach(r => {
      console.log(`    ${r.symbol.padEnd(16)} 情绪分:${String(r.sentiment_score).padStart(4)}  原因:${r.signal.reason.substring(0, 50)}`);
    });
  }

  const noTradeCount = sorted.filter(r => r.signal?.action === 'No Trade').length;
  console.log(`\n  观望: ${noTradeCount} 只\n`);
  console.log(line);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  // Load selected stocks from us_selected.txt
  const content = readFileSync('./watchlist/us_selected.txt', 'utf8').trim();
  const rawSymbols = content.split(',').map(s => s.trim()).filter(Boolean);

  // GO signals from the scan (from last scan_stocks output)
  const goSignals = new Set(['NYSE:JHG', 'NASDAQ:ADUS']);

  const stocks = rawSymbols.map(symbol => ({
    symbol,
    sqzmom: goSignals.has(symbol) ? 'GO' : 'WAIT',
  }));

  console.log(`\n🔍 开始获取 ${stocks.length} 只美股新闻数据 (最近 ${DAYS_BACK} 天)...\n`);

  const results = await runBatch(stocks);
  console.log('\n');

  printReport(results);
}

main().catch(console.error);
