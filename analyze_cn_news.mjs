/**
 * A-Share News Sentiment Analyzer
 * 抓取 A 股推荐股票的研报/快讯/股吧新闻，生成可交易情绪信号
 * 数据源: src/core/webNews.js (东方财富 / 股吧 / 研报)
 *
 * 用法:
 *   node analyze_cn_news.mjs                            ← 读 watchlist/cn_selected.txt
 *   node analyze_cn_news.mjs --symbols=SSE:603638,SSE:605599
 *   node analyze_cn_news.mjs --file=watchlist/cn_selected.txt
 *   node analyze_cn_news.mjs --scan-output=stock_scan_detailed_xxx.json
 */

import { searchNews } from './src/core/webNews.js';
import { readFileSync, existsSync } from 'fs';

// ─── Config ────────────────────────────────────────────────────────────────────
const DAYS_BACK = 5;
const PARALLEL_BATCH = 3;   // 3 并发，避免触发限流
const MIN_SCORE_LONG  = 4;  // 做多最低情绪分
const MIN_SCORE_SHORT = -3; // 做空最高情绪分

// ─── A股新闻类型分类 ────────────────────────────────────────────────────────────
function classifyType(title = '') {
  const t = title;
  if (/政策|监管|央行|证监|银监|保监|发改委|工信部|纾困|补贴|扶持|减税|限产|产能|双碳|新规|条例|法规/.test(t)) return '政策';
  if (/净利|营收|收入|利润|业绩|年报|季报|预增|预减|扭亏|亏损|增长|下滑|归母|每股收益/.test(t)) return '财报';
  if (/收购|并购|重组|合并|参股|控股|战略合作|股权转让|定增|配股|入股/.test(t)) return '并购';
  if (/质押|诉讼|处罚|违规|造假|立案|问询|退市|强制平仓|司法冻结|失信|爆雷/.test(t)) return '黑天鹅';
  if (/据悉|据报|消息人士|传言|不确定|市场消息|有消息称|据知情/.test(t)) return '传闻';
  return '行业';
}

// ─── 情绪打分 +1 / 0 / -1 ──────────────────────────────────────────────────────
const BULL_RE = /买入|增持|强推|推荐|上调|目标价|超预期|高增长|净利.*增|归母.*增|营收.*增|业绩.*增|同比增长|同比大增|大幅增长|扭亏为盈|亮眼|创新高|突破|大单|中标|订单|涨停|利好|看涨|做多|拉升|爆量|强势|稳健增长|翻倍|新高|扩产|独家|垄断|供不应求|高速增长|超高增长|爆发/;
const BEAR_RE = /卖出|减持|下调|亏损|不及预期|低于预期|预减|亏损扩大|净利下滑|营收下降|业绩下滑|跌停|利空|看跌|做空|破位|破净|踩雷|爆雷|诉讼|处罚|违规|质押|解禁|减仓|清仓|风险|危机/;

function scoreSentiment(title = '') {
  const bull = BULL_RE.test(title);
  const bear = BEAR_RE.test(title);
  if (bull && !bear) return 1;
  if (bear && !bull) return -1;
  return 0;
}

// ─── 研报评级 → 情绪 ────────────────────────────────────────────────────────────
function ratingToSentiment(rating = '') {
  if (/买入|强推|强烈推荐|推荐/.test(rating)) return 1;
  if (/增持|跑赢/.test(rating))               return 1;
  if (/中性|持有|观望|跑输/.test(rating))      return 0;
  if (/减持|卖出|回避/.test(rating))           return -1;
  return 0;
}

// ─── 影响权重 1~5 ─────────────────────────────────────────────────────────────
function scoreWeight(title = '', type, rating = '', views = 0, replies = 0) {
  let w = 2;
  if (type === '财报')  w = 5;
  if (type === '黑天鹅') w = 5;
  if (type === '政策')  w = 4;
  if (type === '并购')  w = 4;
  if (type === '传闻')  w = 1;

  // 研报评级加成
  if (rating && /买入|强推/.test(rating)) w = Math.min(5, w + 1);

  // 社区热度加成
  const heat = views / 1000 + replies * 2;
  if (heat > 500) w = Math.min(5, w + 1);
  if (heat > 2000) w = 5;

  return w;
}

// ─── 过去 N 天过滤 ─────────────────────────────────────────────────────────────
function isRecent(dateStr) {
  if (!dateStr) return true;
  try {
    const d = new Date(dateStr.replace(/(\d{4}-\d{2}-\d{2}).*/, '$1'));
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - DAYS_BACK);
    return d >= cutoff;
  } catch { return true; }
}

// ─── 炒作检测 ─────────────────────────────────────────────────────────────────
const HOT_THEME_RE = /AI|人工智能|大模型|算力|ChatGPT|芯片|新能源|锂电|储能|光伏|元宇宙|数字经济|低空经济|机器人|量子/i;

function detectHype(items, research) {
  const bullItems = items.filter(i => i.sentiment === 1);
  const rumourItems = items.filter(i => i.type === '传闻');
  const ratio = bullItems.length / (items.length || 1);
  const avgW = items.reduce((s, i) => s + i.weight, 0) / (items.length || 1);

  // 情绪过热: 大量看多但权重低 (散户噪音)
  const overheated = ratio > 0.72 && avgW < 2.5 && items.length >= 5;

  // 提前炒作: 题材热词但无财报/政策支撑
  const hasHotTheme = items.some(i => HOT_THEME_RE.test(i.title));
  const hasFundamental = items.some(i => ['财报', '政策', '并购'].includes(i.type));
  const preEmptive = hasHotTheme && !hasFundamental && items.length >= 3;

  // 假利好: 正面新闻来自传闻
  const fakeBullish = bullItems.some(i => i.type === '传闻') && rumourItems.length > bullItems.length * 0.5;

  // 研报集中轰炸 (3 天内 ≥3 篇，可能是市值管理)
  const recentReports = research.filter(r => isRecent(r.date));
  const reportBomb = recentReports.length >= 3;

  return { overheated, preEmptive, fakeBullish, reportBomb };
}

// ─── 情绪模式识别 ─────────────────────────────────────────────────────────────
function detectPattern(items) {
  if (items.length < 2) return 'insufficient_data';
  const sorted = [...items].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const recent = sorted.slice(0, Math.min(3, sorted.length));
  const older  = sorted.slice(Math.min(3, sorted.length));

  const rScore = recent.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const oScore = older.length ? older.reduce((s, i) => s + i.sentiment * i.weight, 0) : rScore;

  if (rScore > 0 && rScore >= oScore)  return 'trend_up';      // 情绪持续增强
  if (rScore < 0 && rScore <= oScore)  return 'trend_down';    // 情绪持续走弱
  if (oScore > 2 && rScore < 0)        return 'reversal_bear'; // 情绪反转(由多转空)
  if (oScore < -2 && rScore > 0)       return 'reversal_bull'; // 情绪反转(由空转多)
  return 'neutral';
}

// ─── 交易信号生成 ─────────────────────────────────────────────────────────────
function generateSignal(symbol, score, items, research, pattern, hype, sqzmom) {
  const total = items.length || 1;
  const bullC = items.filter(i => i.sentiment === 1).length;
  const bearC = items.filter(i => i.sentiment === -1).length;
  const bullR = bullC / total;

  let action   = 'No Trade';
  let tradeType = '-';
  let chaseOK  = 'NO';
  let reason   = '';
  const risks  = [];
  const opps   = [];

  // ── 主信号决策 ─────────────────────────────────────────────
  if (hype.overheated || hype.fakeBullish) {
    action = 'No Trade';
    reason = hype.overheated
      ? `情绪过热 (看多占${(bullR*100).toFixed(0)}% 但均权重低)，散户噪音为主`
      : '假利好：正面消息来源为未确认传闻';
    risks.push(hype.overheated ? '⚠ 情绪过热，追高风险极高' : '⚠ 假利好，需等待官方确认');

  } else if (score >= 8 && pattern === 'trend_up' && !hype.preEmptive) {
    action = 'Long'; tradeType = '突破型'; chaseOK = 'YES';
    reason = `情绪指数 +${score}，近期持续增强，基本面/政策驱动`;
    opps.push('新闻动能强劲，可随突破入场');

  } else if (score >= MIN_SCORE_LONG && !hype.preEmptive) {
    action = 'Long'; tradeType = bullR > 0.55 ? '追涨' : '低吸';
    chaseOK = bullR > 0.55 ? 'YES' : 'NO';
    reason = `情绪指数 +${score}，轻度正向${bullR > 0.55 ? '，多方共识较强' : '，建议等回调低吸'}`;
    opps.push(bullR > 0.55 ? `看多占比 ${(bullR*100).toFixed(0)}%，市场共识可依赖` : '低吸机会，等情绪退潮再建仓');

  } else if (score <= MIN_SCORE_SHORT || pattern === 'reversal_bear') {
    action = 'Short'; tradeType = '反转';
    reason = `情绪指数 ${score}，${pattern === 'reversal_bear' ? '情绪由多转空' : '持续负面催化'}，建议回避`;
    risks.push('负面催化持续压制，下行风险大');

  } else if (pattern === 'reversal_bull') {
    action = 'Long'; tradeType = '反转低吸'; chaseOK = 'NO';
    reason = `情绪由空转多 (指数 +${score})，潜在反转，轻仓低吸`;
    opps.push('情绪反转信号，有反弹机会');

  } else {
    action = 'No Trade';
    reason = `情绪指数 ${score >= 0 ? '+' : ''}${score}，信号不明确，观望`;
  }

  // SQZMOM 共振加成
  if (sqzmom === 'GO' && action === 'Long') {
    reason += '；SQZMOM 确认 GO，策略共振增强';
    chaseOK = 'YES';
    if (tradeType !== '突破型') tradeType = '突破型';
  }

  // 炒作风险标注
  if (hype.preEmptive) risks.push('⚠ 疑似提前炒作：题材热词驱动，缺乏实质催化');
  if (hype.reportBomb) risks.push('⚠ 研报集中发布 (≥3篇/3天)，警惕市值管理');
  if (hype.fakeBullish) risks.push('⚠ 假利好：来源为传闻，未获官方确认');
  if (hype.overheated)  risks.push('⚠ 情绪过热：散户氛围主导，实质利好不足');

  // 机会点补充
  const goodReports = research.filter(r => ratingToSentiment(r.rating) === 1);
  if (goodReports.length >= 2) opps.push(`多家机构研报买入评级 (${goodReports.length} 篇)`);
  if (pattern === 'reversal_bull') opps.push('情绪由空转多，反转机会存在');

  return { action, tradeType, chaseOK, reason, risks, opps };
}

// ─── 单股分析 ─────────────────────────────────────────────────────────────────
async function analyzeSymbol(rawSymbol, sqzmom = 'WAIT') {
  let data;
  try {
    data = await searchNews({ symbol: rawSymbol, count: 15 });
  } catch (e) {
    return { symbol: rawSymbol, error: e.message };
  }
  if (!data.success) return { symbol: rawSymbol, error: 'fetch failed' };

  // ── 合并所有来源并打标签 ───────────────────────────────────
  const allRaw = [
    ...data.news.map(n => ({ ...n, _src: 'news' })),
    ...data.forum.map(n => ({ ...n, _src: 'forum' })),
  ];

  const labeled = allRaw
    .filter(item => isRecent(item.date))
    .map(item => {
      const type      = classifyType(item.title || '');
      const sentiment = scoreSentiment(item.title || '');
      const weight    = scoreWeight(item.title || '', type, '', item.views || 0, item.replies || 0);
      return {
        date:      item.date || '',
        title:     (item.title || '').substring(0, 100),
        source:    item.source || '?',
        type,
        sentiment,
        weight,
        url:       item.url || '',
      };
    })
    // 去噪: 权重1且情绪0的纯噪声丢弃
    .filter(i => !(i.weight <= 1 && i.sentiment === 0))
    .slice(0, 20);

  // ── 研报单独处理 (结构不同，有 rating 字段) ────────────────
  const researchLabeled = (data.research || [])
    .filter(r => isRecent(r.date))
    .map(r => {
      const sentiment = ratingToSentiment(r.rating || '');
      const weight    = scoreWeight(r.title || '', '财报', r.rating || '');
      return {
        date:       r.date || '',
        title:      (r.title || '').substring(0, 100),
        source:     r.source || '研报机构',
        type:       '财报',
        rating:     r.rating || '',
        sentiment,
        weight,
        url:        r.url || '',
      };
    });

  // 合并研报到 labeled（研报权重高，优先展示）
  const allLabeled = [...researchLabeled, ...labeled].slice(0, 25);

  // ── 计算情绪指数 ─────────────────────────────────────────
  const score   = allLabeled.reduce((s, i) => s + i.sentiment * i.weight, 0);
  const pattern = detectPattern(allLabeled);
  const hype    = detectHype(labeled, researchLabeled);
  const signal  = generateSignal(rawSymbol, score, allLabeled, researchLabeled, pattern, hype, sqzmom);

  const total   = allLabeled.length || 1;
  const bullC   = allLabeled.filter(i => i.sentiment === 1).length;
  const bearC   = allLabeled.filter(i => i.sentiment === -1).length;
  const neutC   = allLabeled.filter(i => i.sentiment === 0).length;

  // 原始情绪分析 (webNews 内部)
  const rawSentiment = data.sentiment_analysis || null;

  return {
    symbol:          rawSymbol,
    name:            data.name || '',
    sqzmom,
    news_count:      allLabeled.length,
    research_count:  researchLabeled.length,
    sentiment_score: score,
    bull_ratio:      `${((bullC / total) * 100).toFixed(0)}%`,
    bear_ratio:      `${((bearC / total) * 100).toFixed(0)}%`,
    neut_ratio:      `${((neutC / total) * 100).toFixed(0)}%`,
    raw_forum_sentiment: rawSentiment,
    pattern,
    hype,
    signal,
    top_news: allLabeled.slice(0, 10),
  };
}

// ─── 批量运行 ─────────────────────────────────────────────────────────────────
async function runBatch(stocks) {
  const results = [];
  for (let i = 0; i < stocks.length; i += PARALLEL_BATCH) {
    const batch = stocks.slice(i, i + PARALLEL_BATCH);
    const batchResults = await Promise.all(
      batch.map(({ symbol, sqzmom }) => analyzeSymbol(symbol, sqzmom))
    );
    results.push(...batchResults);
    process.stdout.write(`  已处理 ${Math.min(i + PARALLEL_BATCH, stocks.length)}/${stocks.length}\r`);
    await new Promise(r => setTimeout(r, 1200)); // 限流保护
  }
  return results;
}

// ─── 报告渲染 ─────────────────────────────────────────────────────────────────
function printReport(results) {
  const LINE  = '═'.repeat(82);
  const DLINE = '─'.repeat(82);
  const now   = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

  console.log(`\n${LINE}`);
  console.log('  📰  A股新闻情绪分析报告  ——  最近 5 天重要新闻');
  console.log(`  生成时间: ${now}`);
  console.log(`${LINE}\n`);

  // 按信号排序: Long → No Trade → Short，同组内按情绪分降序
  const ORDER = { Long: 0, 'No Trade': 1, Short: 2 };
  const sorted = [...results].sort((a, b) => {
    const oa = ORDER[a.signal?.action] ?? 1;
    const ob = ORDER[b.signal?.action] ?? 1;
    if (oa !== ob) return oa - ob;
    return (b.sentiment_score || 0) - (a.sentiment_score || 0);
  });

  // ── 汇总速览表 ──────────────────────────────────────────────
  console.log('【一览表】\n');
  console.log('  代码              名称        信号        情绪分  模式           SQZMOM  看多%  看空%');
  console.log(`  ${DLINE.substring(0, 80)}`);
  sorted.forEach(r => {
    if (r.error) {
      console.log(`  ${r.symbol.padEnd(18)} ❌ 获取失败: ${r.error}`);
      return;
    }
    const s    = r.signal;
    const icon = s.action === 'Long' ? '🟢 Long    '
               : s.action === 'Short' ? '🔴 Short   ' : '⚪ No Trade';
    const sc   = String(r.sentiment_score >= 0 ? `+${r.sentiment_score}` : r.sentiment_score).padStart(5);
    const nm   = (r.name || '').padEnd(10).substring(0, 10);
    const pat  = (r.pattern || '').padEnd(14);
    const sq   = (r.sqzmom || '').padEnd(6);
    console.log(`  ${r.symbol.padEnd(18)} ${nm}  ${icon}  ${sc}  ${pat} ${sq}  ${r.bull_ratio.padStart(5)}  ${r.bear_ratio.padStart(5)}`);
  });

  console.log(`\n${LINE}\n`);

  // ── 逐股详细报告 ────────────────────────────────────────────
  sorted.forEach((r, idx) => {
    if (r.error) return;
    const s = r.signal;
    const actionIcon = s.action === 'Long' ? '🟢' : s.action === 'Short' ? '🔴' : '⚪';
    const nameStr = r.name ? ` [${r.name}]` : '';

    console.log(`${actionIcon} [${idx + 1}] ${r.symbol}${nameStr}  (SQZMOM: ${r.sqzmom})`);
    console.log(`   交易信号 : ${s.action.padEnd(8)}  类型: ${s.tradeType}   是否适合追涨: ${s.chaseOK}`);
    console.log(`   情绪指数 : ${r.sentiment_score >= 0 ? '+' : ''}${r.sentiment_score}   模式: ${r.pattern}`);
    console.log(`   情绪分布 : 看多 ${r.bull_ratio}  看空 ${r.bear_ratio}  中性 ${r.neut_ratio}   新闻条数: ${r.news_count} (研报: ${r.research_count})`);

    // 股吧原始情绪 (webNews 内建)
    if (r.raw_forum_sentiment) {
      const fs = r.raw_forum_sentiment;
      console.log(`   股吧情绪 : ${fs.overall_sentiment}  看多 ${fs.bullish_ratio}  看空 ${fs.bearish_ratio}  中性 ${fs.neutral_ratio}`);
    }

    console.log(`   触发原因 : ${s.reason}`);

    if (s.opps.length) {
      console.log(`   ✅ 机会点:`);
      s.opps.forEach(o => console.log(`      • ${o}`));
    }
    if (s.risks.length) {
      console.log(`   ⚠  风险点:`);
      s.risks.forEach(ri => console.log(`      • ${ri}`));
    }

    // 炒作检测面板
    const h = r.hype;
    if (h.overheated || h.preEmptive || h.fakeBullish || h.reportBomb) {
      console.log(`   🚨 炒作检测:`);
      if (h.overheated)  console.log(`      • 情绪过热 ─ 散户噪音为主，权重低`);
      if (h.preEmptive)  console.log(`      • 提前炒作 ─ 题材热词驱动，缺乏实质基本面支撑`);
      if (h.fakeBullish) console.log(`      • 假利好风险 ─ 正面消息来源含未确认传闻`);
      if (h.reportBomb)  console.log(`      • 研报集中轰炸 ─ 3天内≥3篇，警惕市值管理配合出货`);
    }

    // 关键新闻列表
    if (r.top_news.length > 0) {
      console.log(`   📋 关键新闻 (近 ${DAYS_BACK} 天，按影响力筛选):`);
      r.top_news.forEach(n => {
        const icon = n.sentiment === 1 ? '📈' : n.sentiment === -1 ? '📉' : '➡';
        const ratingStr = n.rating ? ` 评级:${n.rating}` : '';
        console.log(`      ${icon} [${n.type}|${n.sentiment >= 0 ? '+' : ''}${n.sentiment}|权重:${n.weight}${ratingStr}] ${n.title}`);
        if (n.date) console.log(`         来源: ${n.source}  日期: ${n.date}`);
      });
    } else {
      console.log(`   📋 近 ${DAYS_BACK} 天无高影响力新闻（市场关注度低）`);
    }

    console.log('');
  });

  // ── 可操作信号汇总 ────────────────────────────────────────
  const longs  = sorted.filter(r => r.signal?.action === 'Long');
  const shorts = sorted.filter(r => r.signal?.action === 'Short');
  const noTrades = sorted.filter(r => r.signal?.action === 'No Trade');

  console.log(LINE);
  console.log('  🎯  可操作信号汇总');
  console.log(DLINE);

  if (longs.length) {
    console.log(`\n  做多候选 (${longs.length} 只):`);
    longs.forEach(r => {
      const sc = r.sentiment_score >= 0 ? `+${r.sentiment_score}` : `${r.sentiment_score}`;
      const nm = r.name ? `[${r.name}]` : '';
      console.log(`    ${r.symbol.padEnd(14)} ${nm.padEnd(8)} 情绪分:${String(sc).padStart(4)}  类型:${r.signal.tradeType.padEnd(6)}  追涨:${r.signal.chaseOK}  SQZMOM:${r.sqzmom}`);
    });
  }
  if (shorts.length) {
    console.log(`\n  做空/回避 (${shorts.length} 只):`);
    shorts.forEach(r => {
      console.log(`    ${r.symbol.padEnd(14)} [${r.name || ''}]  情绪分:${r.sentiment_score}  ${r.signal.reason.substring(0, 60)}`);
    });
  }

  console.log(`\n  观望: ${noTrades.length} 只`);

  // 今日操作建议
  const goLongs = longs.filter(r => r.sqzmom === 'GO' && r.signal.chaseOK === 'YES');
  if (goLongs.length) {
    console.log(`\n  ⭐ 今日优先关注 (SQZMOM GO + 新闻信号共振):`);
    goLongs.forEach(r => {
      console.log(`    ${r.symbol} [${r.name || ''}]  情绪+${r.sentiment_score}  ${r.signal.reason}`);
    });
  }
  console.log(`\n${LINE}\n`);
}

// ─── 加载股票列表 ─────────────────────────────────────────────────────────────
function loadStocks() {
  const args = process.argv.slice(2);

  // --symbols=SSE:603638,SSE:605599
  const symbolsArg = args.find(a => a.startsWith('--symbols='));
  if (symbolsArg) {
    const raw = symbolsArg.slice('--symbols='.length);
    return raw.split(',').map(s => ({ symbol: s.trim(), sqzmom: 'WAIT' })).filter(s => s.symbol);
  }

  // --scan-output=stock_scan_detailed_xxx.json  (加载扫描 JSON，取 GO 信号)
  const scanArg = args.find(a => a.startsWith('--scan-output='));
  if (scanArg) {
    const path = scanArg.slice('--scan-output='.length);
    const data = JSON.parse(readFileSync(path, 'utf8'));
    return data.map(s => ({ symbol: s.symbol, sqzmom: s.signal || 'WAIT' }));
  }

  // --file=watchlist/cn_selected.txt
  const fileArg  = args.find(a => a.startsWith('--file='));
  const filePath = fileArg ? fileArg.slice('--file='.length) : 'watchlist/cn_selected.txt';

  if (!existsSync(filePath)) {
    console.error(`❌ 找不到股票文件: ${filePath}`);
    console.error('   用法: node analyze_cn_news.mjs --symbols=SSE:603638,SZSE:300750');
    process.exit(1);
  }

  const content = readFileSync(filePath, 'utf8').trim();
  if (!content) {
    console.error(`❌ ${filePath} 为空，请先运行 scan_stocks.js 生成推荐股票列表`);
    process.exit(1);
  }

  return content.split(',').map(s => ({ symbol: s.trim(), sqzmom: 'WAIT' })).filter(s => s.symbol);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const stocks = loadStocks();
  console.log(`\n🔍 开始分析 ${stocks.length} 只 A 股新闻情绪 (最近 ${DAYS_BACK} 天)...\n`);

  const results = await runBatch(stocks);
  console.log('\n');

  printReport(results);
}

main().catch(console.error);
