/**
 * 批量A股新闻情绪分析 → 交易信号生成
 * Usage: node analyze_cn_signals.mjs
 */
import { searchNews } from './src/core/WebNews.js';

// ── 股票列表（去重 + 补零） ──────────────────────────────────────────────────
const RAW_CODES = [
  '000957','600388','600160','300661','002245','600176','600867','301165',
  '000957','301345','300037','002956','605016','002475','000951','603203',
  '603162','002850','002850','002821','002957','000065','301529','603062',
  '600549','002371','605319','300408'
];
// 去重 + 补全6位
const CODES = [...new Set(RAW_CODES.map(c => c.padStart(6, '0')))];

// ── 新闻打标签规则 ────────────────────────────────────────────────────────────
const TYPE_RULES = [
  { type: '政策',   keywords: ['政策','监管','证监会','发改委','工信部','补贴','审批','许可','法规','指导','规划','国家队','政府'] },
  { type: '财报',   keywords: ['业绩','净利润','营收','年报','季报','预增','预减','扭亏','亏损','利润','收入','毛利'] },
  { type: '并购',   keywords: ['收购','并购','重组','合并','参股','控股','出售','剥离','定增','配股','募集'] },
  { type: '行业',   keywords: ['行业','板块','赛道','竞争','市场份额','龙头','下游','上游','供应链','产能','需求'] },
  { type: '黑天鹅', keywords: ['爆雷','造假','违规','处罚','立案','诉讼','债务','违约','闪崩','暂停','退市','ST'] },
  { type: '传闻',   keywords: ['传言','消息称','据悉','有消息','小道','可能','或将','疑似','猜测'] },
];

const BULLISH_KW = [
  '涨停','大涨','暴涨','飙升','创新高','突破','利好','买入','增持','强烈推荐',
  '超预期','高增长','扭亏','订单','中标','合同','签约','获批','获准','量产',
  '扩产','新品','新技术','股东增持','回购','分红','上调','超募','满产','放量',
];
const BEARISH_KW = [
  '跌停','大跌','暴跌','创新低','破位','利空','卖出','减持','亏损','业绩下滑',
  '不及预期','营收下降','退市','违规','处罚','立案','冻结','质押','爆雷','债务',
  '降级','下调','产能过剩','价格战','客户流失','专利纠纷','工厂火灾','停工',
];

// 影响权重规则（type + 情绪关键词密度）
function calcWeight(title, content, type) {
  const text = title + ' ' + (content || '');
  let w = 2; // 默认权重
  if (type === '财报') w = 4;
  else if (type === '政策') w = 4;
  else if (type === '黑天鹅') w = 5;
  else if (type === '并购') w = 3;
  else if (type === '行业') w = 2;
  else if (type === '传闻') w = 1;

  // 关键词密度加成
  const bullHits = BULLISH_KW.filter(kw => text.includes(kw)).length;
  const bearHits = BEARISH_KW.filter(kw => text.includes(kw)).length;
  if (bullHits + bearHits >= 3) w = Math.min(5, w + 1);
  if (bullHits + bearHits >= 5) w = Math.min(5, w + 1);
  return w;
}

function tagNews(item) {
  const text = (item.title || '') + ' ' + (item.snippet || item.content || '');

  // 类型
  let type = '行业';
  for (const rule of TYPE_RULES) {
    if (rule.keywords.some(kw => text.includes(kw))) { type = rule.type; break; }
  }

  // 情绪
  const bScore = BULLISH_KW.filter(kw => text.includes(kw)).length;
  const eScore = BEARISH_KW.filter(kw => text.includes(kw)).length;
  let sentiment = 0;
  if (bScore > eScore) sentiment = 1;
  else if (eScore > bScore) sentiment = -1;

  const weight = calcWeight(item.title, item.snippet || item.content, type);

  return { ...item, _type: type, _sentiment: sentiment, _weight: weight, _score: sentiment * weight };
}

// ── 假利好 / 情绪过热 / 提前炒作 检测 ────────────────────────────────────────
const PRE_PUMP_SIGNALS = ['连续涨停','涨停数日','提前布局','机构抢筹','热炒','炒作'];
const OVER_HEAT_SIGNALS = ['满仓','梭哈','一致看好','全市场关注','主力大幅','疯狂','沸腾'];
const FAKE_POS_SIGNALS  = ['传言','消息称','据悉','疑似','尚未确认','未经证实','只是传闻'];

function detectSpecial(items) {
  const allText = items.map(i => i.title + ' ' + (i.snippet||'')).join(' ');
  return {
    prePump:   PRE_PUMP_SIGNALS.some(k => allText.includes(k)),
    overHeat:  OVER_HEAT_SIGNALS.some(k => allText.includes(k)),
    fakePosItems: items.filter(i => {
      const t = i.title + ' ' + (i.snippet||'');
      return i._sentiment === 1 && FAKE_POS_SIGNALS.some(k => t.includes(k));
    }).length,
  };
}

// ── 模式识别 ──────────────────────────────────────────────────────────────────
function detectPattern(taggedItems) {
  if (taggedItems.length < 2) return 'insufficient_data';
  // 按日期排序（近→远）
  const sorted = [...taggedItems].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const half = Math.ceil(sorted.length / 2);
  const recent  = sorted.slice(0, half).reduce((s,i)=>s+i._score,0);
  const older   = sorted.slice(half).reduce((s,i)=>s+i._score,0);

  if (Math.abs(recent - older) < 2) return 'neutral';
  if (recent > older && recent > 0) return 'trend_bullish';
  if (recent < older && recent < 0) return 'trend_bearish';
  if (recent > 0 && older < 0) return 'reversal_bullish';
  if (recent < 0 && older > 0) return 'reversal_bearish';
  return 'neutral';
}

// ── 生成交易信号 ───────────────────────────────────────────────────────────────
function generateSignal(name, code, tagged, total_score, pattern, special) {
  let signal = 'No Trade';
  let reason = '';
  let mode = '';

  // 过热 / 假利好 → 降级
  if (special.overHeat) {
    signal = 'Short'; reason = '情绪过热，高位风险'; mode = '等候回调后低吸';
  } else if (special.prePump && total_score > 5) {
    signal = 'No Trade'; reason = '疑似提前炒作，追涨风险高'; mode = '等消息落地再决策';
  } else if (special.fakePosItems >= 2) {
    signal = 'No Trade'; reason = `存在${special.fakePosItems}条疑似假利好（传言/未证实）`; mode = '等待官方确认';
  } else if (pattern === 'trend_bullish' && total_score >= 6) {
    signal = 'Long'; reason = '情绪持续增强，多条实质利好'; mode = '适合追涨（强势品种）';
  } else if (pattern === 'reversal_bullish' && total_score >= 3) {
    signal = 'Long'; reason = '情绪反转向好，近期出现正面催化剂'; mode = '适合低吸/反转';
  } else if (pattern === 'trend_bearish' || total_score <= -4) {
    signal = 'Short'; reason = '情绪持续恶化，利空密集'; mode = '回避或做空';
  } else if (pattern === 'reversal_bearish' && total_score <= -2) {
    signal = 'Short'; reason = '情绪反转向坏，需止损'; mode = '离场观望';
  } else if (total_score >= 4) {
    signal = 'Long'; reason = '整体情绪偏正面'; mode = '低吸为主';
  } else if (total_score <= -3) {
    signal = 'Short'; reason = '整体情绪偏负面'; mode = '观望/回避';
  } else {
    signal = 'No Trade'; reason = '情绪中性，信号不明确'; mode = '等待明确方向';
  }

  return { signal, reason, mode };
}

// ── 主流程 ────────────────────────────────────────────────────────────────────
const CONCURRENCY = 5;
const FIVE_DAYS_AGO = new Date(Date.now() - 5*24*3600*1000).toISOString().split('T')[0];

async function analyzeStock(code) {
  let result;
  try {
    result = await searchNews({ symbol: code, source: 'all', count: 15 });
  } catch (e) {
    return { code, error: e.message };
  }

  const name  = result.name || code;
  const items = [...(result.news||[]), ...(result.research||[])];

  // 过滤最近5天
  const recent = items.filter(i => !i.date || i.date >= FIVE_DAYS_AGO);
  const tagged  = (recent.length >= 3 ? recent : items).map(tagNews);

  // 情绪评分
  const total_score = tagged.reduce((s, i) => s + i._score, 0);
  const bullish = tagged.filter(i=>i._sentiment===1).length;
  const bearish = tagged.filter(i=>i._sentiment===-1).length;
  const neutral = tagged.length - bullish - bearish;

  const pattern = detectPattern(tagged);
  const special = detectSpecial(tagged);
  const { signal, reason, mode } = generateSignal(name, code, tagged, total_score, pattern, special);

  // 前5条最重要新闻（按影响分排序）
  const top5 = [...tagged].sort((a,b)=>Math.abs(b._score)-Math.abs(a._score)).slice(0,5);

  return {
    code, name,
    items_total: items.length,
    items_recent: recent.length,
    sentiment: {
      bullish, bearish, neutral,
      bullish_pct: tagged.length ? `${((bullish/tagged.length)*100).toFixed(0)}%` : 'N/A',
      bearish_pct: tagged.length ? `${((bearish/tagged.length)*100).toFixed(0)}%` : 'N/A',
      total_score,
    },
    pattern,
    special,
    signal: { action: signal, reason, mode },
    top5: top5.map(i=>({
      date: i.date,
      title: (i.title||'').slice(0,60),
      type: i._type,
      sentiment: i._sentiment===1?'+1':i._sentiment===-1?'-1':'0',
      weight: i._weight,
      score: i._score,
      source: i.source,
    })),
    sources_status: result.sources_status,
  };
}

// 并发控制
async function runAll(codes, concurrency) {
  const results = [];
  for (let i = 0; i < codes.length; i += concurrency) {
    const batch = codes.slice(i, i+concurrency);
    const batchResults = await Promise.all(batch.map(analyzeStock));
    results.push(...batchResults);
    if (i + concurrency < codes.length) {
      process.stderr.write(`  已完成 ${Math.min(i+concurrency,codes.length)}/${codes.length}...\n`);
    }
  }
  return results;
}

// ── 格式化输出 ────────────────────────────────────────────────────────────────
function formatReport(results) {
  const lines = [];
  const now = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  lines.push(`# A股新闻情绪分析报告`);
  lines.push(`生成时间: ${now}　近5日截止: ${FIVE_DAYS_AGO}`);
  lines.push(`分析股票: ${results.length} 只\n`);

  // 汇总信号
  const longs  = results.filter(r=>r.signal?.action==='Long');
  const shorts = results.filter(r=>r.signal?.action==='Short');
  const noTrade= results.filter(r=>r.signal?.action==='No Trade');

  lines.push('## 汇总信号');
  lines.push(`| 操作 | 数量 | 股票 |`);
  lines.push(`|------|------|------|`);
  lines.push(`| 🟢 Long  | ${longs.length}  | ${longs.map(r=>`${r.code}${r.name?'('+r.name+')':''}`).join(', ')||'无'} |`);
  lines.push(`| 🔴 Short | ${shorts.length} | ${shorts.map(r=>`${r.code}${r.name?'('+r.name+')':''}`).join(', ')||'无'} |`);
  lines.push(`| ⚪ No Trade | ${noTrade.length} | 其余 |`);
  lines.push('');

  // 按信号分组输出
  const groups = [
    { label: '🟢 Long 信号（可关注做多）', items: longs },
    { label: '🔴 Short 信号（回避/做空）', items: shorts },
    { label: '⚪ No Trade（观望）', items: noTrade },
  ];

  for (const grp of groups) {
    if (grp.items.length === 0) continue;
    lines.push(`## ${grp.label}\n`);

    for (const r of grp.items) {
      if (r.error) { lines.push(`### ${r.code} ⚠️ 获取失败: ${r.error}\n`); continue; }

      const flagPrePump  = r.special.prePump  ? ' ⚡提前炒作' : '';
      const flagOverHeat = r.special.overHeat ? ' 🔥情绪过热' : '';
      const flagFakePo   = r.special.fakePosItems>0 ? ` ⚠️假利好×${r.special.fakePosItems}` : '';

      lines.push(`### ${r.code} ${r.name||''} ${flagPrePump}${flagOverHeat}${flagFakePo}`);
      lines.push(`- **信号**: ${r.signal.action} | **原因**: ${r.signal.reason}`);
      lines.push(`- **操作方式**: ${r.signal.mode}`);
      lines.push(`- **情绪分布**: 看涨${r.sentiment.bullish_pct} / 看跌${r.sentiment.bearish_pct} / 中性 | 总分: ${r.sentiment.total_score}`);
      lines.push(`- **新闻模式**: ${r.pattern} | 数据量: 近5日${r.items_recent}条 / 全部${r.items_total}条`);

      if (r.top5 && r.top5.length > 0) {
        lines.push(`- **重要新闻TOP${r.top5.length}**:`);
        for (const n of r.top5) {
          const sent = n.sentiment==='+1'?'📈':n.sentiment==='-1'?'📉':'➖';
          lines.push(`  - \`[${n.type}]\` ${sent}(${n.sentiment}×${n.weight}=${n.score}) ${n.date||''} ${n.title} _[${n.source}]_`);
        }
      }
      lines.push('');
    }
  }

  return lines.join('\n');
}

// ── 运行 ──────────────────────────────────────────────────────────────────────
console.error(`开始分析 ${CODES.length} 只股票...`);
const results = await runAll(CODES, CONCURRENCY);
const report = formatReport(results);

// 写入 watchlist
import { writeFileSync } from 'fs';
const outPath = './watchlist/cn_combined_signals.md';
writeFileSync(outPath, report, 'utf-8');

console.error(`\n分析完成！报告已写入 ${outPath}`);
console.log(report);
