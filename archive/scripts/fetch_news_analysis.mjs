#!/usr/bin/env node
/**
 * 抓取 cn_selected.txt 中推荐股票的新闻并进行情绪分析
 */
import { searchNews } from './src/core/webNews.js';

const STOCKS = [
  { symbol: 'SSE:605599' },
  { symbol: 'SSE:603486' },
  { symbol: 'SSE:600388' },
  { symbol: 'SZSE:300661' },
  { symbol: 'SSE:600160' },
  { symbol: 'SZSE:002811' },
];

// 过滤最近5天
function isWithin5Days(dateStr) {
  if (!dateStr) return true;
  try {
    const d = new Date(dateStr.replace(/\s/, 'T'));
    const now = new Date();
    const diffMs = now - d;
    return diffMs >= 0 && diffMs <= 5 * 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

// 增强情绪标注（返回 +1/0/-1 和权重 1-5）
function tagNewsItem(item) {
  const text = ((item.title || '') + ' ' + (item.snippet || item.content || '')).toLowerCase();

  // 情绪词典
  const strongBullish = ['涨停', '超预期', '创新高', '大幅增长', '超大利好', '重组', '并购', '战略合作', '核心技术突破', '独家'];
  const bullish = ['利好', '上涨', '增长', '盈利', '买入', '看好', '突破', '业绩', '研究报告', '评级上调', '增持'];
  const strongBearish = ['跌停', '业绩大幅下滑', '亏损', '重大违规', '被查', '退市', '暴雷', '黑天鹅', '大规模裁员'];
  const bearish = ['利空', '下跌', '减持', '降级', '风险', '亏损', '套牢', '看空', '问题', '质疑'];
  const riskWords = ['传闻', '未经证实', '据悉', '消息人士', '疑似'];

  let sentiment = 0;
  let weight = 1;
  let type = '新闻';
  let flags = [];

  // 判断类型
  if (item.type === 'research') type = '研报';
  else if (item.type === 'forum') type = '股吧';
  else if (text.includes('政策') || text.includes('监管') || text.includes('央行') || text.includes('国务院')) type = '政策';
  else if (text.includes('并购') || text.includes('重组') || text.includes('收购')) type = '并购';
  else if (text.includes('财报') || text.includes('业绩') || text.includes('年报') || text.includes('季报')) type = '财报';
  else if (text.includes('行业') || text.includes('板块') || text.includes('赛道')) type = '行业';

  // 情绪判断
  const hasStrongBull = strongBullish.some(w => text.includes(w));
  const hasBull = bullish.some(w => text.includes(w));
  const hasStrongBear = strongBearish.some(w => text.includes(w));
  const hasBear = bearish.some(w => text.includes(w));
  const hasRisk = riskWords.some(w => text.includes(w));

  if (hasStrongBull) { sentiment = 1; weight = 4; }
  else if (hasBull && !hasBear) { sentiment = 1; weight = 2; }
  else if (hasStrongBear) { sentiment = -1; weight = 5; }
  else if (hasBear && !hasBull) { sentiment = -1; weight = 2; }
  else if (hasBull && hasBear) { sentiment = 0; weight = 2; }

  // 研报加权
  if (item.type === 'research') {
    weight = Math.min(5, weight + 2);
    if (item.rating === '买入' || item.rating === '强烈推荐') { sentiment = 1; weight = 5; }
    else if (item.rating === '增持' || item.rating === '推荐') { sentiment = 1; weight = 4; }
    else if (item.rating === '中性' || item.rating === '持有') { sentiment = 0; weight = 3; }
    else if (item.rating === '减持' || item.rating === '卖出') { sentiment = -1; weight = 4; }
  }

  // 风险标注
  if (hasRisk) flags.push('⚠️传闻');
  if (text.includes('大幅上涨') || text.includes('暴涨') || text.includes('连续涨停')) flags.push('🔥情绪过热');
  if (text.includes('机构调研') || text.includes('主力') || text.includes('游资')) flags.push('📌资金关注');

  return { ...item, type, sentiment, weight, flags };
}

// 计算情绪指数
function calcSentimentScore(items) {
  return items.reduce((sum, item) => sum + (item.sentiment * item.weight), 0);
}

// 识别模式
function detectPattern(items) {
  if (items.length === 0) return '数据不足';

  const scores = items.map(i => i.sentiment * i.weight);
  const recentScore = scores.slice(0, Math.min(3, scores.length)).reduce((a,b) => a+b, 0);
  const olderScore = scores.slice(Math.min(3, scores.length)).reduce((a,b) => a+b, 0);
  const totalScore = scores.reduce((a,b) => a+b, 0);

  const heatCount = items.filter(i => i.flags && i.flags.includes('🔥情绪过热')).length;
  const rumorCount = items.filter(i => i.flags && i.flags.includes('⚠️传闻')).length;

  if (heatCount >= 2) return '⚠️ 情绪过热（可能已提前炒作）';
  if (rumorCount >= 2) return '⚠️ 传闻驱动（谨防假利好）';
  if (recentScore > 3 && totalScore > 5) return '📈 情绪持续增强(TREND)';
  if (recentScore > 2 && olderScore < -1) return '🔄 情绪反转(REVERSAL-看涨)';
  if (recentScore < -2 && olderScore > 1) return '🔄 情绪反转(REVERSAL-看跌)';
  if (totalScore > 3) return '📈 整体偏多';
  if (totalScore < -3) return '📉 整体偏空';
  return '➖ 情绪中性';
}

// 生成交易信号
function generateSignal(score, pattern, items, stockData) {
  const { trendUp, validComp, signal: v11Signal } = stockData;
  const hasResearchBull = items.filter(i => i.type === '研报' && i.sentiment > 0).length;
  const hasStrongBear = items.some(i => i.sentiment === -1 && i.weight >= 4);
  const isOverheat = pattern.includes('情绪过热');
  const isFakeNews = pattern.includes('传闻驱动') || pattern.includes('假利好');

  let action = 'No Trade';
  let reason = '';
  let strategy = '';
  let confidence = '低';

  if (hasStrongBear) {
    action = 'Short / 规避';
    reason = '存在重大利空因素（研报降级/重大风险）';
    strategy = '不参与';
    confidence = '高';
  } else if (isOverheat) {
    action = 'No Trade';
    reason = '情绪已过热，可能已提前炒作，追高风险大';
    strategy = '等待回调再看';
    confidence = '中';
  } else if (isFakeNews) {
    action = 'No Trade';
    reason = '传闻驱动，消息真实性存疑，谨防假利好';
    strategy = '等待证实后再入场';
    confidence = '中';
  } else if (score >= 6 && hasResearchBull >= 1) {
    action = 'Long（积极）';
    reason = `情绪评分${score}，有${hasResearchBull}篇看多研报，基本面+情绪双重支撑`;
    strategy = v11Signal === 'GO' ? '追涨 / 当日突破买入' : '低吸（等待压缩释放）';
    confidence = '高';
  } else if (score >= 3) {
    action = 'Long（观察）';
    reason = `情绪评分${score}，新闻偏多但信号待验证`;
    strategy = validComp ? '低吸（压缩中，等待放量）' : '追涨（趋势确认后入场）';
    confidence = '中';
  } else if (score <= -3) {
    action = 'No Trade / Short 警惕';
    reason = `情绪评分${score}，整体偏空，近期利空较多`;
    strategy = '观望，等待情绪好转';
    confidence = '中';
  } else {
    action = 'No Trade（观望）';
    reason = `情绪评分${score}，多空中性，无明确方向`;
    strategy = '等待催化剂';
    confidence = '低';
  }

  return { action, reason, strategy, confidence };
}

async function main() {
  console.log('📰 开始抓取股票新闻进行情绪分析...\n');
  console.log(`📅 分析日期: ${new Date().toLocaleDateString('zh-CN')}`);
  console.log('='.repeat(80));

  // 并行抓取所有股票
  const results = await Promise.all(
    STOCKS.map(stock =>
      searchNews({ symbol: stock.symbol, count: 15, source: 'all' })
        .then(r => ({ ...r, stockInfo: stock }))
        .catch(e => ({ success: false, symbol: stock.symbol, error: e.message }))
    )
  );

  // 分析每只股票
  for (const result of results) {
    if (!result.success) {
      console.log(`\n❌ ${result.symbol}: 获取失败 - ${result.error}`);
      continue;
    }

    const name = result.name || result.symbol;
    const code = result.symbol.replace(/^(SSE:|SZSE:)/, '');

    // 合并所有新闻来源
    const allItems = [
      ...(result.research || []),
      ...(result.news || []),
      ...(result.forum || []),
    ];

    // 过滤最近5天
    const recentItems = allItems.filter(i => isWithin5Days(i.date));

    // 打标签
    const taggedItems = recentItems.map(tagNewsItem);

    // 计算指标
    const sentimentScore = calcSentimentScore(taggedItems);
    const pattern = detectPattern(taggedItems);

    // 情绪分布
    const bullish = taggedItems.filter(i => i.sentiment > 0).length;
    const bearish = taggedItems.filter(i => i.sentiment < 0).length;
    const neutral = taggedItems.filter(i => i.sentiment === 0).length;
    const total = taggedItems.length;

    // v11 指标状态
    const stockData = {
      trendUp: false,
      validComp: result.symbol === 'SSE:600160' || result.symbol === 'SZSE:002811',
      signal: result.symbol === 'SSE:600160' || result.symbol === 'SZSE:002811' ? 'GO' : 'WAIT',
    };

    // 生成信号
    const signal = generateSignal(sentimentScore, pattern, taggedItems, stockData);

    console.log(`\n${'═'.repeat(80)}`);
    console.log(`📊 ${name} (${result.symbol})`);
    console.log(`${'─'.repeat(80)}`);
    console.log(`📰 新闻来源: 研报${result.research?.length || 0}篇 | 快讯${result.news?.length || 0}条 | 股吧${result.forum?.length || 0}条`);
    console.log(`📆 最近5天有效新闻: ${total}条`);
    console.log(`\n【情绪分布】 看涨${bullish}条(${total > 0 ? ((bullish/total)*100).toFixed(0) : 0}%) | 看跌${bearish}条(${total > 0 ? ((bearish/total)*100).toFixed(0) : 0}%) | 中性${neutral}条(${total > 0 ? ((neutral/total)*100).toFixed(0) : 0}%)`);
    console.log(`【情绪得分】 Σ(情绪×权重) = ${sentimentScore > 0 ? '+' : ''}${sentimentScore}`);
    console.log(`【市场模式】 ${pattern}`);

    if (taggedItems.length > 0) {
      console.log(`\n【关键新闻 Top5】`);
      const topNews = taggedItems
        .sort((a, b) => (Math.abs(b.sentiment * b.weight) - Math.abs(a.sentiment * a.weight)))
        .slice(0, 5);

      topNews.forEach((item, idx) => {
        const icon = item.sentiment > 0 ? '🟢' : item.sentiment < 0 ? '🔴' : '⚪';
        const flagStr = item.flags && item.flags.length > 0 ? ` ${item.flags.join(' ')}` : '';
        const title = (item.title || '').substring(0, 60);
        const dateStr = item.date ? ` [${item.date.substring(0, 10)}]` : '';
        console.log(`  ${idx+1}. ${icon}[${item.type}|${item.sentiment > 0 ? '+1' : item.sentiment}|权重${item.weight}]${dateStr}${flagStr}`);
        console.log(`     ${title}`);
        if (item.rating) console.log(`     评级: ${item.rating} | 机构: ${item.source}`);
      });
    }

    // 关键利好利空
    const bullFactors = taggedItems.filter(i => i.sentiment > 0).map(i => i.title?.substring(0, 40)).filter(Boolean).slice(0, 3);
    const bearFactors = taggedItems.filter(i => i.sentiment < 0).map(i => i.title?.substring(0, 40)).filter(Boolean).slice(0, 3);

    if (bullFactors.length > 0) {
      console.log(`\n  ✅ 利好因素: ${bullFactors.join(' | ')}`);
    }
    if (bearFactors.length > 0) {
      console.log(`  ❌ 利空因素: ${bearFactors.join(' | ')}`);
    }

    console.log(`\n${'─'.repeat(80)}`);
    console.log(`🎯 交易信号: ${signal.action}`);
    console.log(`   触发原因: ${signal.reason}`);
    console.log(`   操作策略: ${signal.strategy}`);
    console.log(`   信号可信度: ${signal.confidence}`);

    // 特别提示
    const v11GoStocks = ['SSE:600160', 'SZSE:002811'];
    if (v11GoStocks.includes(result.symbol)) {
      console.log(`   ⭐ v11指标: 🟢 LONG (validComp=true, !fakeBreak, volMom=true, 压缩待释放)`);
    }
  }

  console.log(`\n${'═'.repeat(80)}`);
  console.log('📋 分析完成');
}

main().catch(console.error);
