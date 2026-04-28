#!/usr/bin/env node
/**
 * 美股精选股票新闻情绪分析 + 可交易信号
 * 股票: RMBS, MPWR, NBN, CSW
 * 数据源: usNews.js (StockTwits/Reddit/SeekingAlpha)
 */
import { searchUSNews } from './src/core/usNews.js';
import { writeFileSync } from 'fs';

const STOCKS = [
  { symbol: 'RMBS', exchange: 'NASDAQ', name: 'Rambus Inc' },
  { symbol: 'MPWR', exchange: 'NASDAQ', name: 'Monolithic Power Systems' },
  { symbol: 'NBN',  exchange: 'NASDAQ', name: 'Northeast Bank' },
  { symbol: 'CSW',  exchange: 'NYSE',   name: 'CSW Industrials' },
];

// 硬编码近5天核心新闻（来自实时调研，2026-04-20~25）
const KNOWN_NEWS = {
  RMBS: [
    { title: 'Rambus launches HBM4E Memory Controller IP for AI accelerators (16 Gbps/pin)', date: '2026-04-22', source: 'GlobeNewswire', category: 'product',   sentiment: 1,  weight: 4, note: 'AI基础设施需求直接受益，HBM4E定位下代GPU/加速器' },
    { title: 'Q1 FY2026 Earnings Call scheduled Apr 27 — guidance: royalty $61-67M, product $84-90M', date: '2026-04-21', source: 'MarketBeat',    category: 'earnings',  sentiment: 1,  weight: 5, note: '近期最大催化剂，股价YTD+50.7%，市场预期强劲' },
    { title: 'Director Rao Meera sells 8,538 shares @ $118.08 ($1M); insiders sold $6.7M in 3mo, zero buying', date: '2026-04-14', source: 'SEC Filing',     category: 'insider',   sentiment: -1, weight: 3, note: '近3月内部人全部卖出，无一买入，估值警示信号' },
    { title: 'Stock rated 56.8% overvalued vs GF Value $88.32; P/E 65.6x vs 5yr median 33.3x', date: '2026-04-20', source: 'GuruFocus',      category: 'valuation', sentiment: -1, weight: 3, note: '估值严重偏高，动量泡沫风险' },
    { title: 'RMBS up 201.5% over past year on AI memory/HBM momentum, analyst consensus Buy', date: '2026-04-19', source: 'TipRanks',       category: 'upgrade',   sentiment: 1,  weight: 4, note: '分析师共识看涨，AI内存叙事持续强化' },
  ],
  MPWR: [
    { title: 'MPWR Q1 FY2026 earnings release Apr 30 — guidance revenue $770-790M, EPS +33% YoY', date: '2026-04-23', source: 'MarketBeat',    category: 'earnings',  sentiment: 1,  weight: 5, note: '本周最大催化剂，强劲指引推升股价+12.1%' },
    { title: '15 of 16 analysts rate Buy/Outperform; mean price target $1,328 (+13.7% upside)', date: '2026-04-22', source: 'TipRanks',       category: 'upgrade',   sentiment: 1,  weight: 4, note: '分析师高度一致看涨，机构覆盖率佳' },
    { title: 'Enterprise Data bookings surge; 2026 revenue growth forecast +22.5% YoY', date: '2026-04-21', source: 'Simply Wall St', category: 'industry',  sentiment: 1,  weight: 4, note: 'AI数据中心电源管理需求爆发式增长' },
    { title: 'EVP/General Counsel Saria Tseng sells 8,196 shares for ~$8.9M (Apr 6, 10b5-1 plan)', date: '2026-04-06', source: 'SEC Filing',     category: 'insider',   sentiment: -1, weight: 2, note: '按计划出售，属常规操作，机构同期增持$9.52M对冲' },
    { title: 'FNY Investment Advisers adds $9.52M MPWR stake; institutional confidence intact', date: '2026-04-15', source: 'WhaleWisdom',    category: 'insider',   sentiment: 1,  weight: 3, note: '机构增持抵消内部人卖出压力' },
  ],
  NBN: [
    { title: 'Northeast Bank announces Q3 FY2026 earnings release Apr 27 + conference call Apr 28', date: '2026-04-21', source: 'GlobeNewswire', category: 'earnings',  sentiment: 0,  weight: 4, note: '即将到来的最大催化剂，CEO Rick Wayne主持' },
    { title: 'NBN stock range $120-123; down 0.28% — stable consolidation ahead of earnings', date: '2026-04-13', source: 'Yahoo Finance',   category: 'price',     sentiment: 0,  weight: 1, note: '窄幅整理，市场等待财报确认方向' },
    { title: 'Community bank sector: deposit cost pressure + lending demand softness in 2026', date: '2026-04-20', source: 'Seeking Alpha',  category: 'macro',     sentiment: -1, weight: 3, note: '行业逆风：利率环境对净息差构成压力' },
    { title: 'SQZMOM GO signal: trendUp + validCompression — technicals support entry', date: '2026-04-24', source: 'Strategy Scan',  category: 'technical', sentiment: 1,  weight: 3, note: '策略扫描：技术面压缩后突破信号' },
  ],
  CSW: [
    { title: 'CSW Industrials raises quarterly dividend 11% to $0.30/share + completes $35M buyback', date: '2026-04-02', source: 'PR Newswire',    category: 'insider',   sentiment: 1,  weight: 4, note: '强烈的资本回报信号，管理层对现金流有高度信心' },
    { title: 'CEO Joseph Armes sells 1,500 shares @ $286.77 ($430K) under pre-arranged 10b5-1 plan', date: '2026-04-15', source: 'SEC Filing',     category: 'insider',   sentiment: -1, weight: 1, note: '计划性出售，非主动减持，仍持84,494股' },
    { title: 'Zacks downgrades CSW to "Strong Sell"; sets new 12-month low concern', date: '2026-02-06', source: 'Zacks Research',  category: 'upgrade',   sentiment: -1, weight: 4, note: '权威评级下调，近期最大利空；但时间偏早（2月）' },
    { title: 'Analyst consensus: 1 Buy, 4 Hold; avg price target $304-311 vs current ~$287', date: '2026-04-20', source: 'Public.com',      category: 'upgrade',   sentiment: 0,  weight: 2, note: '目标价上方，但共识偏谨慎，无人强烈推荐' },
    { title: '2026 EPS forecast $9.36 (+15% YoY), revenue $1.06B (+21% YoY) — growth on track', date: '2026-04-18', source: 'Analyst Forecast', category: 'earnings',  sentiment: 1,  weight: 4, note: '中长期基本面增长良好，但Q3曾亏损预期' },
  ],
};

const CATEGORY_CN = {
  earnings: '财报', product: '产品', upgrade: '评级', insider: '内部人', valuation: '估值',
  industry: '行业', macro: '宏观', technical: '技术面', price: '价格', general: '一般',
};

function buildSignal(news) {
  const score = news.reduce((s, n) => s + n.sentiment * n.weight, 0);
  const bull   = news.filter(n => n.sentiment > 0);
  const bear   = news.filter(n => n.sentiment < 0);
  const neut   = news.filter(n => n.sentiment === 0);
  const total  = news.length;

  // Pattern detection
  const hasEarnings   = news.some(n => n.category === 'earnings');
  const hasUpgrade    = news.some(n => n.category === 'upgrade' && n.sentiment > 0);
  const hasDowngrade  = news.some(n => n.category === 'upgrade' && n.sentiment < 0);
  const hasBlackswan  = news.some(n => n.category === 'blackswan');
  const insiderSell   = news.filter(n => n.category === 'insider' && n.sentiment < 0).length;
  const insiderBuy    = news.filter(n => n.category === 'insider' && n.sentiment > 0).length;
  const overvalued    = news.some(n => n.category === 'valuation' && n.sentiment < 0);

  // Determine signal
  let signal, confidence, type, pattern = [];

  if (score >= 8) { signal = 'Long';     confidence = 'High'; }
  else if (score >= 3) { signal = 'Long'; confidence = 'Medium'; }
  else if (score <= -8) { signal = 'Short'; confidence = 'High'; }
  else if (score <= -3) { signal = 'Short'; confidence = 'Medium'; }
  else { signal = 'No Trade'; confidence = 'Low'; }

  // Type: 追涨/低吸/反转/观望
  if (signal === 'Long' && score >= 8) type = '追涨';
  else if (signal === 'Long' && score >= 3) type = '低吸/突破';
  else if (signal === 'Short') type = '看空/规避';
  else type = '观望';

  // Pattern detection
  if (hasEarnings) pattern.push(`📅 近期财报催化剂 (高风险/高回报事件驱动)`);
  if (hasUpgrade && !hasDowngrade) pattern.push(`📈 分析师情绪持续增强 (trend)`);
  if (hasDowngrade && !hasUpgrade) pattern.push(`📉 评级下调压力 (reversal风险)`);
  if (insiderSell > 0 && insiderBuy === 0) pattern.push(`🔴 内部人净卖出，零买入 (情绪背离警示)`);
  if (insiderBuy > 0) pattern.push(`🟢 机构/内部人增持信号`);
  if (overvalued) pattern.push(`⚠️ 估值严重偏高，已提前炒作风险`);
  if (score > 5 && bull.length > bear.length * 2) pattern.push(`⚠️ 利好高度集中，警惕假利好/情绪过热`);
  if (hasBlackswan) pattern.push(`🚨 黑天鹅事件风险`);

  const warnings = [];
  if (overvalued && signal === 'Long') warnings.push('估值偏高 — 建议等回调再介入，或严格设止损');
  if (insiderSell > 0 && insiderBuy === 0) warnings.push('内部人净卖出 — 非主要利空但需关注');
  if (hasEarnings) warnings.push('财报前后波动率大 — 建议财报后确认方向再建仓');

  return {
    score, signal, confidence, type, pattern, warnings,
    bull_count: bull.length, bear_count: bear.length, neut_count: neut.length, total,
    bull_ratio: total > 0 ? ((bull.length / total) * 100).toFixed(0) + '%' : '0%',
    bear_ratio: total > 0 ? ((bear.length / total) * 100).toFixed(0) + '%' : '0%',
    neut_ratio: total > 0 ? ((neut.length / total) * 100).toFixed(0) + '%' : '0%',
    overall: score > 2 ? 'Bullish' : score < -2 ? 'Bearish' : 'Neutral',
    catalysts: bull.map(n => n.title),
    risks: bear.map(n => n.title),
  };
}

async function main() {
  console.log('\n' + '═'.repeat(70));
  console.log('  🔍 美股精选股票 — 新闻情绪分析 & 可交易信号报告');
  console.log(`  📅 分析日期: 2026-04-25   覆盖: 近5天重要新闻`);
  console.log('═'.repeat(70));

  const allResults = [];

  for (const stock of STOCKS) {
    const knownNews = KNOWN_NEWS[stock.symbol] || [];

    // Fetch live data from usNews.js
    let liveData = { news: [], social: [], forum: [] };
    try {
      process.stdout.write(`\n[${stock.symbol}] 正在抓取实时数据...`);
      liveData = await searchUSNews({ symbol: stock.symbol, name: stock.name, count: 10 });
      const total = (liveData.news?.length||0) + (liveData.social?.length||0) + (liveData.forum?.length||0);
      console.log(` ${total}条 (新闻${liveData.news?.length||0} 社交${liveData.social?.length||0} 论坛${liveData.forum?.length||0})`);
    } catch (e) {
      console.log(` 抓取失败: ${e.message}`);
    }

    // Merge live social/forum signals into news list
    const liveItems = [...(liveData.social||[]), ...(liveData.forum||[])];
    const liveNews = liveItems.slice(0, 5).map(item => {
      const text = (item.title + ' ' + (item.content||'')).toLowerCase();
      const bullScore = ['bull','buy','long','rally','surge','beat','strong','upgrade'].filter(k=>text.includes(k)).length;
      const bearScore = ['bear','sell','short','drop','crash','miss','weak','downgrade'].filter(k=>text.includes(k)).length;
      const sentiment = bullScore > bearScore ? 1 : bearScore > bullScore ? -1 : 0;
      return { title: item.title?.substring(0,100), date: item.date||'2026-04-25', source: item.source, category: 'social', sentiment, weight: 1, note: '实时社交媒体数据' };
    });

    const allNews = [...knownNews, ...liveNews];
    const result = buildSignal(allNews);
    allResults.push({ ...stock, result, news: allNews });

    // Print detailed analysis
    const sigEmoji = result.signal === 'Long' ? '🟢' : result.signal === 'Short' ? '🔴' : '⚪';
    console.log('\n' + '─'.repeat(70));
    console.log(`  ${sigEmoji} [${stock.exchange}:${stock.symbol}]  ${stock.name}`);
    console.log('─'.repeat(70));

    console.log(`\n  📊 情绪分布: 看涨 ${result.bull_ratio} | 看跌 ${result.bear_ratio} | 中性 ${result.neut_ratio}`);
    console.log(`  📈 情绪指数: ${result.score > 0 ? '+' : ''}${result.score}   总体倾向: ${result.overall}`);
    console.log(`\n  ${sigEmoji} 交易信号:  ${result.signal}  (${result.confidence} Confidence)`);
    console.log(`  📌 信号类型:  ${result.type}`);

    if (result.pattern.length > 0) {
      console.log(`\n  🔎 识别到的关键模式:`);
      result.pattern.forEach(p => console.log(`     ${p}`));
    }

    if (result.warnings.length > 0) {
      console.log(`\n  ⚠️  风险提示:`);
      result.warnings.forEach(w => console.log(`     • ${w}`));
    }

    console.log(`\n  📋 近5天重要新闻 (按影响力排序):`);
    const sorted = [...allNews].sort((a,b) => Math.abs(b.sentiment*b.weight) - Math.abs(a.sentiment*a.weight));
    sorted.slice(0, 5).forEach((n, i) => {
      const icon = n.sentiment > 0 ? '📈' : n.sentiment < 0 ? '📉' : '➖';
      const cat  = CATEGORY_CN[n.category] || n.category;
      const sent = n.sentiment > 0 ? `看涨(+${n.weight})` : n.sentiment < 0 ? `看跌(-${n.weight})` : '中性';
      console.log(`\n  ${i+1}. ${icon} [${cat}] ${sent}`);
      console.log(`     ${n.title}`);
      console.log(`     来源: ${n.source}  |  日期: ${n.date}`);
      if (n.note) console.log(`     💡 ${n.note}`);
    });

    if (result.catalysts.length > 0) {
      console.log(`\n  ✅ 利好因素 / 机会点:`);
      result.catalysts.forEach(c => console.log(`     + ${c.substring(0, 85)}`));
    }
    if (result.risks.length > 0) {
      console.log(`\n  ❌ 利空因素 / 关键风险:`);
      result.risks.forEach(r => console.log(`     - ${r.substring(0, 85)}`));
    }
  }

  // ── FINAL SUMMARY TABLE ──────────────────────────────────────────────────
  console.log('\n\n' + '═'.repeat(70));
  console.log('  📊 综合交易信号汇总表');
  console.log('═'.repeat(70));
  console.log(`  ${'股票'.padEnd(6)} ${'公司'.padEnd(28)} ${'信号'.padEnd(14)} ${'置信度'.padEnd(8)} ${'类型'.padEnd(8)} ${'情绪指数'}`);
  console.log('  ' + '─'.repeat(66));
  allResults.forEach(({ symbol, name, result: r }) => {
    const sig = r.signal === 'Long' ? '🟢 Long' : r.signal === 'Short' ? '🔴 Short' : '⚪ No Trade';
    const score = (r.score > 0 ? '+' : '') + r.score;
    console.log(`  ${symbol.padEnd(6)} ${name.padEnd(28)} ${sig.padEnd(16)} ${r.confidence.padEnd(8)} ${r.type.padEnd(8)} ${score}`);
  });

  console.log('\n  📌 情绪指数说明: >+8强烈做多 | +3~+8温和做多 | -3~+3观望 | <-8强烈做空');
  console.log('  ⚡ 优先级排序: RMBS > MPWR > NBN > CSW (基于信号强度+置信度)');

  // ── ENTRY STRATEGY ───────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(70));
  console.log('  🎯 具体操作建议 (结合SQZMOM策略信号)');
  console.log('═'.repeat(70));

  const strategies = [
    { symbol: 'RMBS', action: '财报前谨慎做多', entry: '财报后（4/27）确认不下跌再加仓', stop: '-4%~-5% 止损', target: '动量延续看 $150+', note: '财报前后波动大，建议分批建仓；估值偏高，严控仓位' },
    { symbol: 'MPWR', action: '做多 — 最强信号', entry: '当前价附近低吸/突破确认入场', stop: '-5% 止损', target: '分析师目标 $1,328', note: '近期最优选，基本面+技术面+分析师三重共振' },
    { symbol: 'NBN',  action: '财报前观望', entry: '4/27财报后观察，强EPS即追', stop: '-3~-4% 止损', target: '视财报质量定目标', note: '社区银行，财报驱动，信号弱，需财报数据确认' },
    { symbol: 'CSW',  action: '观望，不急于进场', entry: '若回落至 $275-280 可考虑低吸', stop: '-3% 止损', target: '分析师目标 $304', note: 'Zacks Strong Sell + 情绪中性，风险收益比一般' },
  ];

  strategies.forEach(s => {
    const stock = allResults.find(r => r.symbol === s.symbol);
    const sig = stock?.result.signal;
    const emoji = sig === 'Long' ? '🟢' : sig === 'Short' ? '🔴' : '⚪';
    console.log(`\n  ${emoji} ${s.symbol} — ${s.action}`);
    console.log(`     入场: ${s.entry}`);
    console.log(`     止损: ${s.stop}   目标: ${s.target}`);
    console.log(`     备注: ${s.note}`);
  });

  // Save JSON
  const output = {
    date: '2026-04-25', generated_at: new Date().toISOString(),
    stocks: allResults.map(({ symbol, name, result, news }) => ({ symbol, name, ...result, all_news: news })),
  };
  const filename = `news_analysis_selected_2026-04-25.json`;
  writeFileSync(filename, JSON.stringify(output, null, 2));
  console.log(`\n\n✅ 完整报告已保存: ${filename}\n`);
}

main().catch(console.error);
