/**
 * 7只GO信号股票 深度新闻情绪分析
 * 基于 webNews.js 抓取新闻/研报/快讯，输出可交易信号
 */
import { searchNews, extractCode, detectMarket } from './src/core/webNews.js';

const STOCKS = [
  'SSE:605599',
  'SSE:603486',
  'SSE:600388',
  'SZSE:300661',
];

// ─────────────────────────────────────────
// 高影响力新闻分类 & 打标签
// ─────────────────────────────────────────
const NEWS_TYPE_KEYWORDS = {
  '政策': ['政策', '监管', '央行', '证监会', '国务院', '工信部', '发改委', '政府', '政策红利', '支持', '补贴', '税收'],
  '财报': ['业绩', '净利润', '营收', '报告', '年报', '季报', '增长', '下滑', '超预期', '不及预期', '利润'],
  '并购': ['并购', '重组', '收购', '合并', '注入', '剥离', '控股', '股权', '战略合作'],
  '行业': ['行业', '赛道', '市场', '需求', '供给', '景气', '周期', '竞争', '格局'],
  '黑天鹅': ['事故', '处罚', '调查', '违规', '诉讼', '退市', '停产', '爆雷', '违约', '危机'],
  '传闻': ['消息称', '据悉', '知情人', '传言', '坊间', '据报道', '有望', '拟', '计划'],
};

const BULLISH_KEYWORDS = [
  '涨停', '利好', '增持', '买入', '强烈推荐', '推荐', '超预期', '业绩增长', '营收增长',
  '净利润增长', '突破', '新高', '订单', '中标', '合同', '签约', '战略合作', '政策支持',
  '补贴', '受益', '龙头', '稀缺', '垄断', '高增长', '爆发', '放量', '主力', '机构',
  '翻倍', '强势', '做多', '看多', '看涨', '上调', '上涨',
];

const BEARISH_KEYWORDS = [
  '跌停', '利空', '减持', '卖出', '不推荐', '低于预期', '业绩下滑', '营收下滑',
  '净利润下滑', '亏损', '破位', '新低', '取消', '违约', '诉讼', '处罚', '调查',
  '退市风险', '退出', '竞争加剧', '产能过剩', '价格战', '跌价', '减仓', '出货',
  '看空', '看跌', '下调', '下跌', '风险', '利率上升',
];

// 权重关键词（影响力1-5）
const HIGH_WEIGHT_KEYWORDS = {
  5: ['涨停', '跌停', '业绩暴增', '业绩大幅下滑', '并购重组', '重大合同', '政策红利', '黑天鹅', '爆雷'],
  4: ['净利润增长', '净利润下滑', '中标', '签约', '政策支持', '机构买入', '机构减持', '增持', '减持'],
  3: ['业绩增长', '业绩下滑', '订单', '合作', '行业利好', '行业利空', '超预期', '不及预期'],
  2: ['营收增长', '营收下滑', '推荐', '看好', '看空', '技术突破', '产品发布'],
  1: ['行业动态', '公司公告', '市场消息', '分析师点评'],
};

function classifyNewsType(title, content = '') {
  const text = title + ' ' + content;
  for (const [type, keywords] of Object.entries(NEWS_TYPE_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) return type;
  }
  return '其他';
}

function calcSentiment(title, content = '') {
  const text = title + ' ' + content;
  let bullScore = BULLISH_KEYWORDS.filter(kw => text.includes(kw)).length;
  let bearScore = BEARISH_KEYWORDS.filter(kw => text.includes(kw)).length;
  if (bullScore > bearScore) return +1;
  if (bearScore > bullScore) return -1;
  return 0;
}

function calcWeight(title, content = '') {
  const text = title + ' ' + content;
  for (const [w, keywords] of Object.entries(HIGH_WEIGHT_KEYWORDS).sort((a,b) => b[0]-a[0])) {
    if (keywords.some(kw => text.includes(kw))) return parseInt(w);
  }
  return 1;
}

// 检测是否为高影响力新闻（去噪）
function isHighImpact(item) {
  const text = item.title + ' ' + (item.snippet || item.content || '');
  // 过滤纯广告、无意义内容
  const noise = ['广告', '推广', '扫码', '关注公众号', '点击查看', '更多信息'];
  if (noise.some(kw => text.includes(kw))) return false;
  if (item.title && item.title.length < 5) return false;
  return true;
}

// 获取最近5天内的新闻
function filterRecent5Days(items) {
  const now = new Date();
  const fiveDaysAgo = new Date(now - 5 * 24 * 60 * 60 * 1000);
  return items.filter(item => {
    if (!item.date) return true; // 无日期则保留
    const d = new Date(item.date.replace(/\//g, '-'));
    return isNaN(d.getTime()) || d >= fiveDaysAgo;
  });
}

// 构建情绪指数
function buildSentimentScore(taggedItems) {
  return taggedItems.reduce((sum, item) => sum + item.sentiment * item.weight, 0);
}

// 识别关键模式
function detectPatterns(taggedItems, sentimentScore) {
  const patterns = [];

  if (taggedItems.length < 2) return ['数据不足'];

  // 情绪持续增强 (trend): 最近条目情绪分数高于均值
  const recentItems = taggedItems.slice(0, Math.min(3, taggedItems.length));
  const recentScore = buildSentimentScore(recentItems);
  const avgScore = sentimentScore / taggedItems.length;
  if (recentScore > avgScore * 1.3 && recentScore > 0) {
    patterns.push('情绪持续增强(趋势)');
  }

  // 情绪反转 (reversal): 最新情绪与整体情绪方向相反
  const latestSentiment = taggedItems[0]?.sentiment || 0;
  const overallSentiment = sentimentScore > 0 ? 1 : sentimentScore < 0 ? -1 : 0;
  if (latestSentiment !== 0 && latestSentiment !== overallSentiment && Math.abs(sentimentScore) > 3) {
    patterns.push('情绪反转信号');
  }

  // 情绪过热检测
  const bullishCount = taggedItems.filter(i => i.sentiment === 1).length;
  const bullishRatio = bullishCount / taggedItems.length;
  if (bullishRatio > 0.8 && taggedItems.length >= 3) {
    patterns.push('情绪过热警告(看涨比例>80%)');
  }

  // 假利好检测：标题看涨但类型是"传闻"
  const rumorBullish = taggedItems.filter(i => i.type === '传闻' && i.sentiment === 1);
  if (rumorBullish.length >= 2) {
    patterns.push('疑似假利好(传闻主导)');
  }

  // 是否已提前炒作：最近有高权重看涨+价格已在高位
  const highWeightBullish = taggedItems.filter(i => i.weight >= 4 && i.sentiment === 1);
  if (highWeightBullish.length >= 2) {
    patterns.push('存在提前炒作嫌疑(高权重利好集中)');
  }

  if (patterns.length === 0) patterns.push('无明显异常模式');

  return patterns;
}

// 生成交易信号
function generateSignal(sentimentScore, patterns, taggedItems, v11Params) {
  const signal = {
    action: 'No Trade',
    reason: '',
    trade_type: '',
    confidence: '低',
    risk_warning: [],
    opportunities: [],
  };

  // 风险警告
  if (patterns.includes('疑似假利好(传闻主导)')) {
    signal.risk_warning.push('⚠️ 传闻主导，注意假利好陷阱');
  }
  if (patterns.includes('情绪过热警告(看涨比例>80%)')) {
    signal.risk_warning.push('⚠️ 情绪过热，追高风险大');
  }
  if (patterns.includes('存在提前炒作嫌疑(高权重利好集中)')) {
    signal.risk_warning.push('⚠️ 利好可能已price-in，注意逢高减仓');
  }

  // 机会点
  if (patterns.includes('情绪持续增强(趋势)')) {
    signal.opportunities.push('✅ 情绪趋势向上，可考虑跟随');
  }
  if (patterns.includes('情绪反转信号')) {
    signal.opportunities.push('🔄 情绪出现反转，关注低吸机会');
  }

  const blackSwan = taggedItems.some(i => i.type === '黑天鹅' && i.sentiment === -1 && i.weight >= 4);
  if (blackSwan) {
    signal.action = 'Short';
    signal.reason = '黑天鹅事件，高权重利空，紧急回避';
    signal.confidence = '高';
    signal.risk_warning.push('🚨 黑天鹅警报，建议立即止损/空仓');
    return signal;
  }

  // 综合判断
  if (sentimentScore >= 8) {
    if (patterns.includes('情绪过热警告(看涨比例>80%)') || patterns.includes('疑似假利好(传闻主导)')) {
      signal.action = 'No Trade';
      signal.reason = `情绪分数${sentimentScore}偏高但存在过热/假利好风险`;
      signal.trade_type = '等待回调再低吸';
      signal.confidence = '中';
    } else {
      signal.action = 'Long';
      signal.reason = `情绪分数${sentimentScore}，看涨信号强，新闻面支撑`;
      signal.trade_type = v11Params?.trendUp ? '趋势追涨' : '低吸候选';
      signal.confidence = '高';
    }
  } else if (sentimentScore >= 3) {
    signal.action = 'Long';
    signal.reason = `情绪分数${sentimentScore}，偏多格局，适合轻仓参与`;
    signal.trade_type = v11Params?.trendUp ? '追涨' : '低吸/候选关注';
    signal.confidence = '中';
  } else if (sentimentScore <= -5) {
    signal.action = 'Short';
    signal.reason = `情绪分数${sentimentScore}，利空主导，建议回避`;
    signal.confidence = '高';
  } else if (sentimentScore <= -2) {
    signal.action = 'No Trade';
    signal.reason = `情绪分数${sentimentScore}，偏空，谨慎观望`;
    signal.confidence = '中';
  } else {
    signal.action = 'No Trade';
    signal.reason = `情绪分数${sentimentScore}，新闻面中性，无明显驱动`;
    signal.confidence = '低';
  }

  return signal;
}

// ─────────────────────────────────────────
// 主分析函数
// ─────────────────────────────────────────
async function analyzeStock(symbol, v11Params = {}) {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`📌 正在分析: ${symbol}`);
  console.log(`${'═'.repeat(60)}`);

  let newsData;
  try {
    newsData = await searchNews({ symbol, count: 15 });
  } catch (err) {
    console.error(`  ❌ 获取新闻失败: ${err.message}`);
    return null;
  }

  const stockName = newsData.name || extractCode(symbol);
  console.log(`  股票名称: ${stockName}`);
  console.log(`  新闻总数: ${newsData.total_count}  (研报:${newsData.research.length} 快讯:${newsData.news.length} 论坛:${newsData.forum.length})`);

  // 合并所有来源，仅保留高影响力+最近5天
  const allItems = [
    ...newsData.research.map(i => ({ ...i, source_type: 'research' })),
    ...newsData.news.map(i => ({ ...i, source_type: 'news' })),
    ...newsData.forum.map(i => ({ ...i, source_type: 'forum' })),
  ].filter(isHighImpact);

  const recentItems = filterRecent5Days(allItems);

  if (recentItems.length === 0) {
    console.log(`  ⚠️  近5天无有效新闻`);
    return { symbol, stockName, signal: { action: 'No Trade', reason: '无新闻数据', confidence: '低' }, sentimentScore: 0, patterns: [] };
  }

  // 打标签
  const taggedItems = recentItems.slice(0, 20).map(item => {
    const type = classifyNewsType(item.title, item.snippet || item.content || '');
    const sentiment = calcSentiment(item.title, item.snippet || item.content || '');
    const weight = calcWeight(item.title, item.snippet || item.content || '');
    return { ...item, type, sentiment, weight };
  });

  // 情绪指数
  const sentimentScore = buildSentimentScore(taggedItems);

  // 情绪分布
  const bullishItems = taggedItems.filter(i => i.sentiment === 1);
  const bearishItems = taggedItems.filter(i => i.sentiment === -1);
  const neutralItems = taggedItems.filter(i => i.sentiment === 0);
  const total = taggedItems.length;

  console.log(`\n  📊 情绪分布 (近5天${total}条):`);
  console.log(`     看涨: ${bullishItems.length} (${(bullishItems.length/total*100).toFixed(0)}%)  看跌: ${bearishItems.length} (${(bearishItems.length/total*100).toFixed(0)}%)  中性: ${neutralItems.length} (${(neutralItems.length/total*100).toFixed(0)}%)`);
  console.log(`     情绪指数: ${sentimentScore > 0 ? '+' : ''}${sentimentScore}`);

  // 模式识别
  const patterns = detectPatterns(taggedItems, sentimentScore);
  console.log(`\n  🔍 识别模式: ${patterns.join(' | ')}`);

  // 输出重点新闻（按weight排序，取top5）
  const top5 = [...taggedItems].sort((a, b) => (b.weight * Math.abs(b.sentiment || 0.5)) - (a.weight * Math.abs(a.sentiment || 0.5))).slice(0, 5);

  console.log(`\n  📰 重点新闻 TOP5:`);
  top5.forEach((item, idx) => {
    const sentIcon = item.sentiment === 1 ? '🟢' : item.sentiment === -1 ? '🔴' : '⚪';
    console.log(`  ${idx + 1}. [${item.type}] [权重:${item.weight}] ${sentIcon} ${item.title?.substring(0, 60) || '(无标题)'}`);
    console.log(`     来源:${item.source || item.source_type}  日期:${item.date || '未知'}`);
    if (item.rating) console.log(`     评级: ${item.rating}`);
  });

  // 利好/利空因素
  console.log(`\n  💡 利好因素:`);
  bullishItems.slice(0, 3).forEach(i => console.log(`     ✅ [${i.type}|权重${i.weight}] ${i.title?.substring(0, 55)}`));
  if (bullishItems.length === 0) console.log(`     无`);

  console.log(`  ⚡ 利空因素:`);
  bearishItems.slice(0, 3).forEach(i => console.log(`     ❌ [${i.type}|权重${i.weight}] ${i.title?.substring(0, 55)}`));
  if (bearishItems.length === 0) console.log(`     无`);

  // 生成交易信号
  const signal = generateSignal(sentimentScore, patterns, taggedItems, v11Params);

  console.log(`\n  ━━━━━ 🚦 交易信号 ━━━━━`);
  const actionIcon = signal.action === 'Long' ? '🟢 LONG' : signal.action === 'Short' ? '🔴 SHORT' : '⚫ NO TRADE';
  console.log(`  信号:     ${actionIcon}`);
  console.log(`  置信度:   ${signal.confidence}`);
  console.log(`  触发原因: ${signal.reason}`);
  if (signal.trade_type) console.log(`  交易方式: ${signal.trade_type}`);
  if (signal.risk_warning.length > 0) console.log(`  风险提示: ${signal.risk_warning.join(' | ')}`);
  if (signal.opportunities.length > 0) console.log(`  机会点:   ${signal.opportunities.join(' | ')}`);

  // 研报评级汇总
  if (newsData.research.length > 0) {
    const ratings = newsData.research.filter(r => r.rating).map(r => `${r.source}:${r.rating}`);
    if (ratings.length > 0) {
      console.log(`\n  📋 研报评级: ${ratings.slice(0, 5).join(' | ')}`);
    }
  }

  return {
    symbol,
    stockName,
    sentimentScore,
    patterns,
    signal,
    topNews: top5,
    bullishCount: bullishItems.length,
    bearishCount: bearishItems.length,
    neutralCount: neutralItems.length,
    totalAnalyzed: total,
    researchRatings: newsData.research.filter(r => r.rating).map(r => ({ source: r.source, rating: r.rating, date: r.date })),
  };
}

// ─────────────────────────────────────────
// v11 GO信号参数（从扫描结果记录）
// ─────────────────────────────────────────
const V11_PARAMS = {
  'SSE:605599':  { trendUp: true,  validComp: true,  volMom: false, fakeBreak: false },
  'SSE:603486':  { trendUp: true,  validComp: true,  volMom: false, fakeBreak: false },
  'SSE:600388':  { trendUp: true,  validComp: true,  volMom: false, fakeBreak: false },
  'SZSE:300661': { trendUp: true,  validComp: true,  volMom: false, fakeBreak: false },
};

// ─────────────────────────────────────────
// 执行
// ─────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     7只 GO信号股票 · 深度新闻情绪分析报告              ║');
  console.log(`║     分析时间: ${new Date().toLocaleString('zh-CN')}                    ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('\n说明: 筛选近5天高影响力新闻，构建情绪指数，输出可交易信号\n');

  const results = [];

  // 串行分析（避免被限流）
  for (const symbol of STOCKS) {
    const result = await analyzeStock(symbol, V11_PARAMS[symbol] || {});
    if (result) results.push(result);
    await new Promise(r => setTimeout(r, 1500)); // 防止请求过快
  }

  // ─── 综合排名 ───
  console.log('\n\n' + '╔' + '═'.repeat(58) + '╗');
  console.log('║         综合情绪指数排行 & 信号汇总                     ║');
  console.log('╚' + '═'.repeat(58) + '╝');
  console.log('\n排名  股票         情绪分  信号        v11条件  置信度');
  console.log('─'.repeat(65));

  const sorted = [...results].sort((a, b) => b.sentimentScore - a.sentimentScore);
  sorted.forEach((r, i) => {
    const v11 = V11_PARAMS[r.symbol];
    const v11str = v11 ? `趋势:${v11.trendUp?'✓':'✗'} 压缩:${v11.validComp?'✓':'✗'} 量动:${v11.volMom?'✓':'✗'}` : '-';
    const actionIcon = r.signal.action === 'Long' ? '🟢 Long' : r.signal.action === 'Short' ? '🔴 Short' : '⚫ Hold';
    const score = r.sentimentScore >= 0 ? `+${r.sentimentScore}` : `${r.sentimentScore}`;
    console.log(`#${i+1}  ${r.symbol.padEnd(14)} ${score.padStart(4)}    ${actionIcon.padEnd(10)}  ${v11str}  ${r.signal.confidence}`);
  });

  // ─── 最终推荐 ───
  const longCandidates = sorted.filter(r => r.signal.action === 'Long' && V11_PARAMS[r.symbol]?.trendUp);
  const watchCandidates = sorted.filter(r => r.signal.action === 'Long' && !V11_PARAMS[r.symbol]?.trendUp);

  console.log('\n\n🏆 最终推荐:');
  if (longCandidates.length > 0) {
    console.log('\n  ✅ 可追涨做多 (trendUp=true + Long信号):');
    longCandidates.forEach(r => console.log(`     ${r.symbol} (${r.stockName}) 情绪:+${r.sentimentScore} | ${r.signal.reason}`));
  } else {
    console.log('\n  ⚠️  无同时满足趋势向上+正面新闻的标的');
  }

  if (watchCandidates.length > 0) {
    console.log('\n  👀 候选低吸关注 (Long信号但趋势待确认):');
    watchCandidates.forEach(r => console.log(`     ${r.symbol} (${r.stockName}) 情绪:+${r.sentimentScore} | 注:${r.signal.trade_type}`));
  }

  const noTrade = sorted.filter(r => r.signal.action === 'No Trade');
  if (noTrade.length > 0) {
    console.log('\n  🚫 观望/回避:');
    noTrade.forEach(r => console.log(`     ${r.symbol} | ${r.signal.reason}`));
  }

  // 保存 JSON
  const outputFile = `news_analysis_4stocks_${new Date().toISOString().slice(0,10)}.json`;
  const { writeFileSync } = await import('fs');
  writeFileSync(outputFile, JSON.stringify({ analysisTime: new Date().toISOString(), results: sorted }, null, 2));
  console.log(`\n\n💾 完整分析已保存: ${outputFile}`);
}

main().catch(console.error);
