/**
 * 合并分析：技术面 × 新闻情绪 → 最终交易排名 + 入场/止损/目标位
 * Combined Score = TechScore×0.6 + NewsScore×2×0.4 - (过热?10:0)
 * 离线模式：使用技术分析时已抓取的价格数据
 */

// ── 已分析数据（来自 cn_tech_signals.md + cn_news_signals.md）──
const TECH_DATA = {
  'SSE:603162':  { tech:50.2, type:'突破型',   chase:false, price:14.87,  atr:4.2, ema20d:3.7,  rsi:57.9, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:002956': { tech:49.6, type:'过热追涨',  chase:false, price:33.15,  atr:4.1, ema20d:15,   rsi:76.5, support:null,    resist:null,    flags:['过热','动能衰'] },
  'SSE:603062':  { tech:47.8, type:'回调低吸',  chase:false, price:53.75,  atr:3.9, ema20d:4.5,  rsi:59.3, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:301608': { tech:45.2, type:'回调低吸',  chase:false, price:93.3,   atr:2.9, ema20d:5.4,  rsi:63.3, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:300037': { tech:42.9, type:'过热追涨',  chase:true,  price:69.1,   atr:4.7, ema20d:8.5,  rsi:65,   support:60.19,   resist:null,    flags:['压力'] },
  'SSE:603019':  { tech:42.3, type:'回调低吸',  chase:false, price:92.96,  atr:3.5, ema20d:4.3,  rsi:60.6, support:92.34,   resist:93,      flags:['压力'] },
  'SZSE:002371': { tech:41.7, type:'过热追涨',  chase:true,  price:536.99, atr:4.2, ema20d:10.9, rsi:68.5, support:482.5,   resist:null,    flags:['压力'] },
  'SZSE:002484': { tech:40.5, type:'过热追涨',  chase:true,  price:38.35,  atr:5.4, ema20d:12,   rsi:70.8, support:33.98,   resist:null,    flags:['压力'] },
  'SZSE:000776': { tech:39.6, type:'回调低吸',  chase:false, price:21.23,  atr:2.9, ema20d:6.3,  rsi:66.9, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:000338': { tech:38.7, type:'过热追涨',  chase:false, price:31.2,   atr:4.7, ema20d:11.8, rsi:72.7, support:26.15,   resist:null,    flags:[] },
  'SSE:603638':  { tech:38.2, type:'趋势追涨',  chase:false, price:23.24,  atr:3.2, ema20d:7.1,  rsi:68.4, support:21.33,   resist:23.69,   flags:['压力'] },
  'SSE:000977':  { tech:37.7, type:'回调低吸',  chase:false, price:2279.35,atr:1.8, ema20d:1.9,  rsi:57.5, support:2192.33, resist:2290.34, flags:['压力'] },
  'SZSE:300577': { tech:35.4, type:'回调低吸',  chase:false, price:21.2,   atr:2.8, ema20d:9.8,  rsi:71.4, support:20.91,   resist:21.29,   flags:['压力'] },
  'SSE:603606':  { tech:35.4, type:'回调低吸',  chase:false, price:62.13,  atr:3.7, ema20d:0.1,  rsi:50.9, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:301291': { tech:35.1, type:'-',         chase:false, price:58.94,  atr:5.8, ema20d:5.4,  rsi:58,   support:null,    resist:null,    flags:['压力'] },
  'SZSE:301345': { tech:34.8, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SSE:603025':  { tech:34.0, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SZSE:300870': { tech:32.6, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力'] },
  'SZSE:300866': { tech:32.4, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力'] },
  'SSE:600236':  { tech:32.2, type:'-',         chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','动能衰'] },
  'SZSE:301529': { tech:32.2, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力'] },
  'SZSE:002811': { tech:31.1, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力'] },
  'SZSE:002851': { tech:30.4, type:'回调低吸',  chase:true,  price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SZSE:300750': { tech:30.2, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['动能衰'] },
  'SZSE:002380': { tech:29.9, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:002588': { tech:29.6, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:000657': { tech:28.5, type:'-',         chase:true,  price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SZSE:002487': { tech:25.9, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['动能衰'] },
  'SZSE:002281': { tech:25.1, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力','动能衰'] },
  'SSE:601126':  { tech:23.9, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力'] },
  'SSE:600531':  { tech:21.8, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SZSE:300661': { tech:21.3, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力'] },
  'SSE:601138':  { tech:21.0, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力'] },
  'SSE:603083':  { tech:20.6, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热','压力','假突'] },
  'SZSE:002475': { tech:20.3, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
  'SZSE:300857': { tech:16.7, type:'过热追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['过热'] },
  'SZSE:000682': { tech:16.3, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
  'SSE:600019':  { tech:16.2, type:'回调低吸',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力'] },
  'SZSE:300357': { tech:15.0, type:'突破型',    chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突','动能衰'] },
  'SSE:603659':  { tech:14.6, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
  'SSE:605599':  { tech:12.8, type:'趋势追涨',  chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','动能衰'] },
  'SZSE:300458': { tech:8.2,  type:'趋势追涨',  chase:true,  price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:[] },
  'SZSE:003006': { tech:7.8,  type:'-',         chase:false, price:null,   atr:null,ema20d:null,  rsi:null, support:null,    resist:null,    flags:['压力','假突'] },
};

const NEWS_DATA = {
  'SZSE:301529': { score:31, signal:'过热', pattern:'trend' },
  'SZSE:002371': { score:30, signal:'过热', pattern:'trend' },
  'SZSE:000776': { score:30, signal:'过热', pattern:'trend' },
  'SZSE:300037': { score:28, signal:'过热', pattern:'trend' },
  'SZSE:002484': { score:26, signal:'过热', pattern:'trend' },
  'SZSE:300661': { score:21, signal:'过热', pattern:'trend' },
  'SZSE:002956': { score:21, signal:'过热', pattern:'trend' },
  'SSE:603659':  { score:20, signal:'Long强', pattern:'trend' },
  'SSE:600236':  { score:19, signal:'过热', pattern:'trend' },
  'SSE:601138':  { score:19, signal:'过热', pattern:'trend' },
  'SSE:605599':  { score:19, signal:'Long强', pattern:'none' },
  'SZSE:002487': { score:19, signal:'过热', pattern:'trend' },
  'SZSE:301345': { score:19, signal:'过热', pattern:'trend' },
  'SSE:603083':  { score:18, signal:'过热', pattern:'trend' },
  'SZSE:000657': { score:18, signal:'过热', pattern:'trend' },
  'SZSE:002281': { score:18, signal:'过热', pattern:'trend' },
  'SZSE:300357': { score:18, signal:'过热', pattern:'trend' },
  'SZSE:300577': { score:18, signal:'过热', pattern:'trend' },
  'SSE:601126':  { score:18, signal:'过热', pattern:'trend' },
  'SZSE:002851': { score:18, signal:'过热', pattern:'trend' },
  'SZSE:000682': { score:17, signal:'过热', pattern:'trend' },
  'SSE:000977':  { score:16, signal:'Long强', pattern:'trend' },
  'SZSE:300870': { score:15, signal:'过热', pattern:'trend' },
  'SZSE:300866': { score:14, signal:'过热', pattern:'trend' },
  'SSE:600531':  { score:13, signal:'Long强', pattern:'none' },
  'SZSE:002811': { score:12, signal:'Long强', pattern:'trend' },
  'SZSE:300857': { score:12, signal:'过热', pattern:'trend' },
  'SSE:603062':  { score:11, signal:'过热', pattern:'trend' },
  'SZSE:300750': { score:11, signal:'过热', pattern:'trend' },
  'SZSE:000338': { score:11, signal:'过热', pattern:'trend' },
  'SSE:603638':  { score:10, signal:'Long强', pattern:'trend' },
  'SZSE:002475': { score:10, signal:'Long强', pattern:'trend' },
  'SSE:603606':  { score:10, signal:'过热', pattern:'trend' },
  'SSE:600019':  { score:9,  signal:'Long强', pattern:'reversal' },
  'SZSE:301291': { score:9,  signal:'过热', pattern:'trend' },
  'SZSE:301608': { score:8,  signal:'Long强', pattern:'trend' },
  'SZSE:300458': { score:6,  signal:'Long中', pattern:'none' },
  'SZSE:003006': { score:5,  signal:'Long中', pattern:'none' },
  'SZSE:002588': { score:4,  signal:'Long中', pattern:'none' },
  'SSE:603019':  { score:3,  signal:'Short', pattern:'reversal' },
  'SSE:603025':  { score:1,  signal:'微多', pattern:'reversal' },
  'SSE:603162':  { score:0,  signal:'中性', pattern:'none' },
  'SZSE:002380': { score:0,  signal:'中性', pattern:'none' },
};

const NAMES = {
  'SSE:603162':  '海通发展',  'SZSE:002956': '西麦食品',  'SSE:603062':  '麦加芯彩',
  'SZSE:301608': '301608',   'SZSE:300037': '新宙邦',    'SSE:603019':  '中科曙光',
  'SZSE:002371': '北方华创',  'SZSE:002484': '江海股份',  'SZSE:000776': '广发证券',
  'SZSE:000338': '潍柴动力',  'SSE:603638':  '艾迪精密',  'SSE:000977':  '浪潮信息',
  'SZSE:300577': '开润股份',  'SSE:603606':  '东方电缆',  'SZSE:301291': '301291',
  'SZSE:301345': '涛涛车业',  'SSE:603025':  '大豪科技',  'SZSE:300870': '欧陆通',
  'SZSE:300866': '安克创新',  'SSE:600236':  '桂冠电力',  'SZSE:301529': '福赛科技',
  'SZSE:002811': '郑中设计',  'SZSE:002851': '麦格米特',  'SZSE:300750': '宁德时代',
  'SZSE:002380': '科远智慧',  'SZSE:002588': '史丹利',   'SZSE:000657': '中钨高新',
  'SZSE:002487': '大金重工',  'SZSE:002281': '光迅科技',  'SSE:601126':  '四方股份',
  'SSE:600531':  '豫光金铅',  'SZSE:300661': '圣邦股份',  'SSE:601138':  '工业富联',
  'SSE:603083':  '剑桥科技',  'SZSE:002475': '立讯精密',  'SZSE:300857': '协创数据',
  'SZSE:000682': '东方电子',  'SSE:600019':  '宝钢股份',  'SZSE:300357': '我武生物',
  'SSE:603659':  '璞泰来',   'SSE:605599':  '菜百股份',  'SZSE:300458': '全志科技',
  'SZSE:003006': '百亚股份',
};

// 离线模式：直接使用技术分析时抓取的价格

// ── 计算入场/止损/目标 ──
function calcLevels(price, atrPct, tradeType, ema20dist) {
  if (!price || !atrPct) return { entry: null, stop: null, target: null };
  const atr = price * atrPct / 100;
  let entry, stop, target;

  if (tradeType === '突破型') {
    entry  = +(price * 1.003).toFixed(2);   // 突破确认+0.3%
    stop   = +(price * (1 - atrPct * 1.8 / 100)).toFixed(2);
    target = +(price * (1 + atrPct * 2.5 / 100)).toFixed(2);
  } else if (tradeType.includes('回调低吸')) {
    entry  = +(price * 0.985).toFixed(2);   // 等待-1.5%回调
    stop   = +(price * (1 - atrPct * 2.0 / 100)).toFixed(2);
    target = +(price * (1 + atrPct * 2.0 / 100)).toFixed(2);
  } else if (tradeType.includes('趋势追涨')) {
    entry  = +price.toFixed(2);             // 当前即入
    stop   = +(price * (1 - atrPct * 1.5 / 100)).toFixed(2);
    target = +(price * (1 + atrPct * 2.2 / 100)).toFixed(2);
  } else if (tradeType.includes('过热追涨')) {
    entry  = +(price * 0.95).toFixed(2);   // 过热：等-5%回调再入
    stop   = +(price * (1 - atrPct * 2.2 / 100)).toFixed(2);
    target = +(price * (1 + atrPct * 2.0 / 100)).toFixed(2);
  } else {
    entry  = +price.toFixed(2);
    stop   = +(price * (1 - atrPct * 1.5 / 100)).toFixed(2);
    target = +(price * (1 + atrPct * 2.0 / 100)).toFixed(2);
  }

  const rr = +((target - entry) / (entry - stop)).toFixed(1);
  return { entry, stop, target, rr };
}

// ── 主逻辑 ──
async function main() {
  console.log('离线模式：使用技术分析时已抓取的价格数据...\n');

  // 计算综合评分
  const results = Object.entries(TECH_DATA).map(([sym, td]) => {
    const nd = NEWS_DATA[sym] || { score: 0, signal: '无数据', pattern: 'none' };
    const isOverheat = nd.signal === '过热';
    const isShort    = nd.signal === 'Short' || nd.signal === '微多' || nd.signal === '中性';
    const combined   = +(td.tech * 0.6 + nd.score * 2 * 0.4 - (isOverheat ? 10 : 0)).toFixed(1);
    const levels     = calcLevels(td.price, td.atr, td.type, td.ema20d);

    // 入场评级
    let grade = 'D';
    if (!isOverheat && !isShort && nd.signal.startsWith('Long') && td.tech >= 30) grade = 'A';
    else if (!isOverheat && !isShort && nd.signal.startsWith('Long') && td.tech >= 15) grade = 'B';
    else if (isOverheat && td.tech >= 38) grade = 'C+'; // 高技术分但过热→等回调
    else if (!isOverheat && td.tech >= 20) grade = 'C';

    return { sym, name: NAMES[sym]||sym, td, nd, combined, levels, grade, isOverheat, isShort };
  }).sort((a, b) => b.combined - a.combined);

  // 生成报告
  const date = '2026-04-30';
  const lines = [];

  lines.push(`# 综合分析报告 · 最终入场排名`);
  lines.push(`**日期:** ${date}　　**方法:** 技术面(60%) × 新闻情绪(40%) - 过热惩罚`);
  lines.push(`**公式:** Combined = TechScore×0.6 + NewsScore×2×0.4 - (过热?10:0)`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // A/B 级 - 立即可入场
  const aGrade = results.filter(r => r.grade === 'A');
  const bGrade = results.filter(r => r.grade === 'B');
  const cPlus  = results.filter(r => r.grade === 'C+');
  const cGrade = results.filter(r => r.grade === 'C');

  lines.push('## 🏆 最终综合排名（所有股票）');
  lines.push('');
  lines.push('| 排名 | 名称 | 代码 | 综合分 | 等级 | 技术 | 新闻 | 新闻信号 | 类型 | 入场价 | 止损价 | 目标价 | 盈亏比 | 风险 |');
  lines.push('|------|------|------|--------|------|------|------|---------|------|--------|--------|--------|--------|------|');

  results.forEach((r, i) => {
    if (r.grade === 'D') return;
    const { entry, stop, target, rr } = r.levels;
    const entryStr  = entry  ? entry.toFixed(2)  : '待确认';
    const stopStr   = stop   ? stop.toFixed(2)   : '-';
    const targetStr = target ? target.toFixed(2) : '-';
    const rrStr     = rr     ? `${rr}:1`          : '-';
    const flagStr   = r.td.flags.join('/') || '✅';
    const gradeEmoji = r.grade==='A'?'🟢':r.grade==='B'?'🔵':r.grade==='C+'?'🟡':'⚪';
    lines.push(`| ${i+1} | **${r.name}** | ${r.sym} | **${r.combined}** | ${gradeEmoji}${r.grade} | ${r.td.tech} | ${r.nd.score} | ${r.nd.signal} | ${r.td.type} | ${entryStr} | ${stopStr} | ${targetStr} | ${rrStr} | ${flagStr} |`);
  });

  lines.push('');
  lines.push('---');
  lines.push('');

  // A级详细
  if (aGrade.length > 0) {
    lines.push('## 🟢 A级 — 立即可介入（技术+新闻双确认，无过热）');
    lines.push('');
    aGrade.forEach((r, i) => {
      const { entry, stop, target, rr } = r.levels;
      const entryStr  = entry  ? entry.toFixed(2)  : '待确认';
      const stopStr   = stop   ? stop.toFixed(2)   : '-';
      const targetStr = target ? target.toFixed(2) : '-';
      const rrStr     = rr     ? `${rr}:1`          : '-';

      lines.push(`### ${i+1}. ${r.name} (${r.sym})`);
      lines.push('');
      lines.push(`| 维度 | 内容 |`);
      lines.push(`|------|------|`);
      lines.push(`| 综合评分 | **${r.combined}** |`);
      lines.push(`| 技术分 | ${r.td.tech} (${r.td.type}) |`);
      lines.push(`| 新闻分 | ${r.nd.score} → ${r.nd.signal} |`);
      lines.push(`| 新闻模式 | ${r.nd.pattern==='trend'?'情绪持续增强↑':r.nd.pattern==='reversal'?'⚡情绪反转(reversal)':'—'} |`);
      lines.push(`| 当前价 | ${r.td.price ? r.td.price.toFixed(2) : '待获取'} |`);
      lines.push(`| **入场价** | **${entryStr}** |`);
      lines.push(`| **止损价** | **${stopStr}** (ATR×${r.td.type.includes('回调')?2.0:1.5}) |`);
      lines.push(`| **目标价** | **${targetStr}** |`);
      lines.push(`| 盈亏比 | ${rrStr} |`);
      lines.push(`| RSI | ${r.td.rsi || '-'} |`);
      lines.push(`| ATR% | ${r.td.atr || '-'}% |`);
      lines.push(`| 是否追涨 | ${r.td.chase ? '**YES**' : 'NO'} |`);
      lines.push(`| 风险标注 | ${r.td.flags.join(' ') || '✅无重大风险'} |`);
      lines.push('');
    });
  }

  // C+级 - 过热等回调
  if (cPlus.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push('## 🟡 C+级 — 等回调再入（技术强但新闻过热，勿追高）');
    lines.push('');
    lines.push('> 以下股票技术面极强，但新闻情绪已过热。建议等待 -5%~8% 回调后低吸，不要现价追入。');
    lines.push('');
    lines.push('| 股票 | 代码 | 综合分 | 技术 | 新闻 | 当前价 | 建议等待入场价 | 止损价 | 目标价 |');
    lines.push('|------|------|--------|------|------|--------|--------------|--------|--------|');

    cPlus.forEach(r => {
      const p    = r.td.price;
      const atr  = r.td.atr;
      const waitEntry = p && atr ? (p * 0.94).toFixed(2) : '待确认';
      const stop      = p && atr ? (p * (1 - atr * 2.0 / 100)).toFixed(2) : '-';
      const target    = p && atr ? (p * (1 + atr * 2.0 / 100)).toFixed(2) : '-';
      lines.push(`| **${r.name}** | ${r.sym} | ${r.combined} | ${r.td.tech} | ${r.nd.score}(过热) | ${p?p.toFixed(2):'-'} | **${waitEntry}** | ${stop} | ${target} |`);
    });
    lines.push('');
  }

  // 反转信号特别提示
  const reversals = results.filter(r => r.nd.pattern === 'reversal' && r.grade !== 'D');
  if (reversals.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push('## ⚡ 反转信号 — 情绪由空转多（reversal）特别关注');
    lines.push('');
    reversals.forEach(r => {
      lines.push(`- **${r.name}** (${r.sym})：新闻情绪由空转多，技术分${r.td.tech}，新闻分${r.nd.score}`);
      if (r.levels.entry) {
        lines.push(`  - 建议入场: ${r.levels.entry.toFixed(2)} | 止损: ${r.levels.stop.toFixed(2)} | 目标: ${r.levels.target.toFixed(2)}`);
      }
    });
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## ⚠️ 注意事项');
  lines.push('');
  lines.push('1. **过热股票（新闻信号=过热）禁止现价追入**，即使技术面强势，等回调后再考虑');
  lines.push('2. **止损执行纪律**：跌破止损价日线收盘价即出，不要抱侥幸');
  lines.push('3. **盈亏比 < 1.5:1** 的标的降低仓位或跳过');
  lines.push('4. **A股5%涨跌停机制**：目标价若超过明日涨停板则分批止盈');
  lines.push('5. **仓位控制**：A级30%，B级20%，C+级等回调后15%，单只最大不超过总资金30%');
  lines.push('');
  lines.push(`*报告生成时间: ${new Date().toLocaleString('zh-CN')}*`);

  const outputPath = './watchlist/cn_combined_signals.md';
  const fs = await import('fs');
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');

  // 控制台摘要
  console.log('\n═══════════════════════════════════════════');
  console.log('         最终综合排名 TOP 20');
  console.log('═══════════════════════════════════════════');
  console.log('排名  名称          等级  综合分  入场价   止损价   目标价  盈亏比');

  let rank = 0;
  for (const r of results) {
    if (r.grade === 'D') continue;
    rank++;
    if (rank > 20) break;
    const { entry, stop, target, rr } = r.levels;
    const e = entry  ? entry.toFixed(2).padStart(8) : '  待确认';
    const s = stop   ? stop.toFixed(2).padStart(8)  : '       -';
    const t = target ? target.toFixed(2).padStart(8) : '       -';
    const rrStr = rr ? `${rr}:1` : '-';
    const grade = r.grade === 'A' ? '🟢A' : r.grade === 'B' ? '🔵B' : r.grade === 'C+' ? '🟡C+': '⚪C';
    console.log(`${String(rank).padStart(3)}   ${(r.name||'').padEnd(12)}  ${grade}  ${String(r.combined).padStart(5)}  ${e}${s}${t}  ${rrStr}`);
  }

  console.log('═══════════════════════════════════════════');
  console.log(`\n完整报告已保存: ${outputPath}\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
