/**
 * Feature extraction + weight-source mapping for regression validation (Stage 5).
 *
 * Reads a single stock record from `<market>_news_signals.json` / `<market>_tech_signals.json`
 * and emits a flat list of categorical "feature keys" — these are what we tally across the
 * top-10 gainers vs top-10 losers groups to find common patterns.
 *
 * WEIGHT_SOURCES maps each feature key back to the file:line that owns its weight constant,
 * so the review report can tell the human reviewer exactly where to edit.
 *
 * Market-agnostic: same feature keys for CN and US; only the file paths in WEIGHT_SOURCES
 * differ per market.
 */

// ───── Tech flag tokens — must mirror the constructor sites ─────────────────
// CN: pipeline/3-technical/analyze_tech_cn_mtf.mjs:1255  → Chinese tokens
// US: pipeline/3-technical/analyze_tech_us_mtf.mjs:1177  → English tokens
const TECH_FLAG_NORMALIZE = {
  // CN
  '过热':     'overheat',
  '假突':     'fake_breakout',
  '诱多':     'bull_trap',
  '动能衰':   'momentum_decay',
  '压力':     'resistance',
  '震荡':     'chop',
  '看空背离': 'bear_div',
  'RR差':     'bad_rr',
  '反转':     'reversal',
  '涨停':     'up_limit',
  '跌停':     'down_limit',
  // US
  'overheated':   'overheat',
  'fake_break':   'fake_breakout',
  'bull_trap':    'bull_trap',
  'mom_decay':    'momentum_decay',
  'near_resist':  'resistance',
  'chop':         'chop',
  'bear_div':     'bear_div',
  'low_rr':       'bad_rr',
  'reversal':     'reversal',
};

// ───── Tech type normalize ──────────────────────────────────────────────────
function classifyTechType(typeStr = '') {
  if (/突破型|breakout/i.test(typeStr))           return 'breakout';
  if (/趋势追涨|trend.*chase/i.test(typeStr))      return 'trend_chase';
  if (/趋势延续|trend.*continue/i.test(typeStr))   return 'trend_continue';
  if (/回调低吸|pullback/i.test(typeStr))          return 'pullback';
  if (/过热追涨|overheat.*chase/i.test(typeStr))   return 'overheat_chase';
  if (/反转|reversal/i.test(typeStr))              return 'reversal';
  if (/涨停|up.?limit/i.test(typeStr))             return 'up_limit';
  if (/跌停|down.?limit/i.test(typeStr))           return 'down_limit';
  if (/震荡|chop|无优势/i.test(typeStr))           return 'chop';
  if (/下跌趋势|downtrend/i.test(typeStr))         return 'downtrend';
  return null;
}

// ───── Verdict bucket ───────────────────────────────────────────────────────
function classifyVerdict(v = '') {
  if (/强看多|strong.*long/i.test(v))   return 'strong_long';
  if (/看多|long/i.test(v))              return 'long';
  if (/观望|neutral/i.test(v))           return 'neutral';
  if (/强看空|strong.*short/i.test(v))   return 'strong_short';
  if (/看空|short/i.test(v))             return 'short';
  return null;
}

// ───── News signal bucket ───────────────────────────────────────────────────
function classifyNewsSignal(sig = '') {
  if (/Long.*强|Strong Long/i.test(sig))               return 'long_strong';
  if (/⚠️ No Trade.*过热|Overheated/i.test(sig))         return 'overheated';
  if (/No Trade|无数据|No data/i.test(sig))             return 'no_trade';
  if (/Short|规避|Avoid/i.test(sig))                   return 'short_avoid';
  if (/Long.*中|Long \(Medium/i.test(sig))             return 'long_medium';
  if (/Long.*谨慎|Long \(Caution/i.test(sig))          return 'long_caution';
  if (/⚪.*No Trade|微多|Weak/i.test(sig))              return 'weak_long';
  return null;
}

// ───── News pattern fingerprint ─────────────────────────────────────────────
const NEWS_PATTERN_KEYS = [
  ['情绪持续增强',       'trend_up'],
  ['情绪持续走弱',       'trend_down'],
  ['情绪由空转多',       'reversal_up'],
  ['情绪由多转空',       'reversal_down'],
  ['情绪过热',           'overheat_warn'],
  ['传闻主导',           'rumor_dominant'],
  ['疑似提前炒作',       'early_hype'],
  ['情绪背离',           'divergence_blackswan'],
];

// ═══════════════════════════════════════════════════════════════════════════
//  News features
// ═══════════════════════════════════════════════════════════════════════════
/**
 * @param {object} rec  a single value from news_signals.stocks
 * @returns {Array<{ key: string, value: any }>}
 */
export function extractNewsFeatures(rec) {
  if (!rec || typeof rec !== 'object') return [];
  const out = [];

  // Signal bucket
  const sigBucket = classifyNewsSignal(rec.signal ?? '');
  if (sigBucket) out.push({ key: `news.signal.${sigBucket}`, value: rec.signal });

  // Pattern flags
  const patterns = Array.isArray(rec.patterns) ? rec.patterns : [];
  for (const p of patterns) {
    for (const [needle, key] of NEWS_PATTERN_KEYS) {
      if (p.includes(needle)) { out.push({ key: `news.pattern.${key}`, value: p }); break; }
    }
  }

  // Score bucket
  const sc = typeof rec.score === 'number' ? rec.score : null;
  if (sc != null) {
    let bucket;
    if (sc >= 20)       bucket = 'high';
    else if (sc >= 8)   bucket = 'positive';
    else if (sc >= -3)  bucket = 'neutral';
    else                bucket = 'negative';
    out.push({ key: `news.score.${bucket}`, value: sc });
  }

  // Top news types — record presence (any of the top 5)
  const topNews = Array.isArray(rec.top_news) ? rec.top_news.slice(0, 5) : [];
  const typesSeen = new Set();
  for (const t of topNews) {
    if (typeof t?.type === 'string') typesSeen.add(t.type);
  }
  for (const tp of typesSeen) {
    out.push({ key: `news.top_news_type.${tp}`, value: true });
  }

  return out;
}

// ═══════════════════════════════════════════════════════════════════════════
//  Tech features
// ═══════════════════════════════════════════════════════════════════════════

function bucketRsi(rsi) {
  if (rsi == null) return null;
  if (rsi < 35)            return 'oversold';
  if (rsi >= 50 && rsi <= 72) return 'healthy';
  if (rsi > 75)            return 'overheat';
  return null;
}

function bucketAdx(adx) {
  if (adx == null) return null;
  if (adx < 20)            return 'chop';
  if (adx >= 20 && adx <= 30) return 'trending';
  if (adx > 30)            return 'strong';
  return null;
}

function bucketTechScore(s) {
  if (s == null) return null;
  if (s >= 35) return 'high';
  if (s >= 15) return 'mid';
  return 'low';
}

function extractTfFeatures(tfKey, tf) {
  if (!tf || typeof tf !== 'object') return [];
  const out = [];
  const prefix = `tech.${tfKey}`;

  const rsiB = bucketRsi(tf.rsi);
  if (rsiB) out.push({ key: `${prefix}.rsi.${rsiB}`, value: tf.rsi });

  const adxB = bucketAdx(tf.adx);
  if (adxB) out.push({ key: `${prefix}.adx.${adxB}`, value: tf.adx });

  if (tf.bull_ema === true) out.push({ key: `${prefix}.bull_ema`, value: true });
  if (tf.above_ema200 === true) out.push({ key: `${prefix}.above_ema200`, value: true });

  if (typeof tf.macd_hist === 'number' && tf.macd_hist > 0 && tf.macd_above_zero === true)
    out.push({ key: `${prefix}.macd.bullish`, value: tf.macd_hist });
  if (tf.macd_turning === true)
    out.push({ key: `${prefix}.macd.turning`, value: true });

  if (tf.sqz === true) {
    out.push({ key: `${prefix}.sqz.active`, value: true });
    if (typeof tf.sqz_streak === 'number' && tf.sqz_streak >= 5)
      out.push({ key: `${prefix}.sqz.long_streak`, value: tf.sqz_streak });
  }

  if (typeof tf.vol_ratio === 'number' && tf.vol_ratio >= 1.5)
    out.push({ key: `${prefix}.vol.expanding`, value: tf.vol_ratio });

  if (tf.obv_dir === 'up') out.push({ key: `${prefix}.obv.up`, value: true });
  if (tf.obv_dir === 'down') out.push({ key: `${prefix}.obv.down`, value: true });

  if (tf.divergence?.bull === true) out.push({ key: `${prefix}.divergence.bull`, value: true });
  if (tf.divergence?.bear === true) out.push({ key: `${prefix}.divergence.bear`, value: true });

  if (typeof tf.dist20_pct === 'number') {
    if (tf.dist20_pct > 12)              out.push({ key: `${prefix}.dist20.overheat`, value: tf.dist20_pct });
    else if (Math.abs(tf.dist20_pct) < 3) out.push({ key: `${prefix}.dist20.near`, value: tf.dist20_pct });
  }

  if (tf.near_support === true) out.push({ key: `${prefix}.near_support`, value: true });

  return out;
}

/**
 * @param {object} rec a single value from tech_signals.stocks
 * @returns {Array<{ key: string, value: any }>}
 */
export function extractTechFeatures(rec) {
  if (!rec || typeof rec !== 'object') return [];
  const out = [];

  const typeKey = classifyTechType(rec.type ?? '');
  if (typeKey) out.push({ key: `tech.type.${typeKey}`, value: rec.type });

  const verdictKey = classifyVerdict(rec.verdict ?? '');
  if (verdictKey) out.push({ key: `tech.verdict.${verdictKey}`, value: rec.verdict });

  const flags = Array.isArray(rec.flags) ? rec.flags : [];
  for (const f of flags) {
    const norm = TECH_FLAG_NORMALIZE[f] ?? f;
    out.push({ key: `tech.flag.${norm}`, value: f });
  }

  const scoreBucket = bucketTechScore(rec.tech_score);
  if (scoreBucket) out.push({ key: `tech.score.${scoreBucket}`, value: rec.tech_score });

  if (typeof rec.alignment === 'string' && /^4\/4/.test(rec.alignment))
    out.push({ key: 'tech.alignment.full', value: rec.alignment });

  if (typeof rec.rs === 'number') {
    if (rec.rs > 10)      out.push({ key: 'tech.rs.strong', value: rec.rs });
    else if (rec.rs < -5) out.push({ key: 'tech.rs.weak', value: rec.rs });
  }

  if (rec.limit_info?.upStreak >= 1)
    out.push({ key: 'tech.limit.up_streak', value: rec.limit_info.upStreak });

  // Per-timeframe
  if (rec.tf && typeof rec.tf === 'object') {
    for (const tfKey of ['1W', '1D', '4H', '1H']) {
      out.push(...extractTfFeatures(tfKey, rec.tf[tfKey]));
    }
  }

  return out;
}

// ═══════════════════════════════════════════════════════════════════════════
//  Weight source mapping (per market)
// ═══════════════════════════════════════════════════════════════════════════
// `current` is the current numeric weight constant in the source script.
// `source_path` points to the exact file:line so a human can find & edit it.
// If a feature is "non-numeric" (a pattern that triggers signal upgrade, not a +N score),
// we set current=null and recommended_weight stays null (the rationale + source_path is
// still useful for human review).

const TECH_FEATURES_COMMON = {
  // Trend / EMA structure
  'tech.1D.bull_ema':       { label: 'EMA多头排列 (1D)',  current: 12 },
  'tech.1W.bull_ema':       { label: 'EMA多头排列 (1W)',  current: 9 },
  'tech.1D.above_ema200':   { label: '站上EMA200 (1D)',   current: 8 },
  'tech.1W.above_ema200':   { label: '站上EMA200 (1W)',   current: 8 },
  'tech.1D.dist20.near':    { label: 'EMA20附近低吸 (1D)', current: 5 },
  'tech.1H.dist20.near':    { label: 'EMA20附近 (1H,贴近)', current: 5 },
  'tech.1D.dist20.overheat':{ label: 'EMA20偏离>12% 过热惩罚 (1D)', current: -10 },
  // ADX
  'tech.1D.adx.strong':     { label: 'ADX>30 强趋势 (1D)', current: 6 },
  'tech.1W.adx.strong':     { label: 'ADX>30 强趋势 (1W)', current: 6 },
  'tech.4H.adx.strong':     { label: 'ADX>30 强趋势 (4H)', current: 6 },
  'tech.1H.adx.trending':   { label: 'ADX>25 趋势中 (1H)', current: 6 },
  'tech.1D.adx.chop':       { label: 'ADX<20 震荡折半 (1D)', current: 0 /* multiplier 0.5 */ },
  // RSI
  'tech.1D.rsi.healthy':    { label: 'RSI 50-72健康 (1D)', current: 10 },
  'tech.1D.rsi.oversold':   { label: 'RSI<35超卖反弹 (1D)', current: 6 },
  'tech.1D.rsi.overheat':   { label: 'RSI>80超买 (1D)',    current: -12 },
  'tech.1W.rsi.overheat':   { label: 'RSI>80超买 (1W)',    current: -12 },
  // MACD
  'tech.1D.macd.turning':   { label: 'MACD金叉/柱转正 (1D)', current: 12 },
  'tech.1D.macd.bullish':   { label: 'MACD柱正在零上 (1D)',  current: 10 },
  'tech.1W.macd.bullish':   { label: 'MACD柱正在零上 (1W)',  current: 10 },
  // Divergence
  'tech.1D.divergence.bull':{ label: 'RSI看多背离 (1D)',   current: 10 },
  'tech.1D.divergence.bear':{ label: 'RSI看空背离 (1D)',   current: -10 },
  // Squeeze
  'tech.1D.sqz.active':     { label: 'Squeeze压缩 爆发前 (1D)', current: 18 },
  'tech.1D.sqz.long_streak':{ label: 'Squeeze≥5根 充分蓄能 (1D)', current: 6 },
  'tech.1W.sqz.active':     { label: 'Squeeze压缩 爆发前 (1W)', current: 18 },
  // Volume
  'tech.1D.vol.expanding':  { label: '量能持续扩张 (1D)',   current: 8 },
  'tech.1D.obv.up':         { label: 'OBV上行 资金流入 (1D)', current: 4 },
  'tech.1W.obv.up':         { label: 'OBV上行 资金流入 (1W)', current: 4 },
  'tech.1D.obv.down':       { label: 'OBV下行 资金流出 (1D)', current: 0 },
  // Structure
  'tech.1D.near_support':   { label: '支撑位附近 (1D)',    current: 6 },
  // Risk flags (negative)
  'tech.flag.overheat':       { label: '过热惩罚组合',     current: -10 },
  'tech.flag.bull_trap':      { label: '诱多 (高位+压力)', current: -12 },
  'tech.flag.fake_breakout':  { label: '假突 (高位+低量)', current: -10 },
  'tech.flag.bear_div':       { label: '看空背离',         current: -6 },
  'tech.flag.bad_rr':         { label: 'R/R<1.5',          current: -3 },
  'tech.flag.chop':           { label: '震荡市',           current: -4 },
  'tech.flag.momentum_decay': { label: '动能衰减',         current: null },
  'tech.flag.resistance':     { label: '近压力位/年内高',  current: null },
  // Reward flags (positive)
  'tech.flag.reversal':       { label: '反转加分 (在 genSignal)', current: 8 },
  'tech.flag.up_limit':       { label: '涨停板加分',       current: 15 },
  'tech.flag.down_limit':     { label: '跌停板扣分',       current: -25 },
  // Type bias
  'tech.type.breakout':       { label: '突破型 (Squeeze释放)', current: null },
  'tech.type.trend_chase':    { label: '趋势追涨 (HH/HL)',  current: null },
  'tech.type.trend_continue': { label: '趋势延续',          current: null },
  'tech.type.pullback':       { label: '回调低吸 (支撑)',   current: null },
  'tech.type.overheat_chase': { label: '过热追涨 (高风险)', current: null },
  'tech.type.reversal':       { label: '反转',              current: null },
  // RS
  'tech.rs.strong':           { label: 'RS 跑赢大盘',       current: 5 },
  'tech.rs.weak':             { label: 'RS 跑输大盘',       current: -4 },
  // Score buckets (descriptive)
  'tech.score.mid':           { label: '技术分15-35中等区间', current: null },
};

const NEWS_FEATURES_COMMON = {
  // CN news (analyze_cn_news.mjs:76-88 calcWeight)
  'news.top_news_type.财报':   { label: '财报 +1',   current: 1 },
  'news.top_news_type.政策':   { label: '政策 +1',   current: 1 },
  'news.top_news_type.并购':   { label: '并购 +2',   current: 2 },
  'news.top_news_type.黑天鹅': { label: '黑天鹅 +2', current: 2 },
  'news.top_news_type.传闻':   { label: '传闻 -1',   current: -1 },
  'news.top_news_type.行业':   { label: '行业 (默认权重)', current: null },
  // Patterns (signal upgrades, non-numeric)
  'news.pattern.trend_up':              { label: '情绪持续增强 (trend)',  current: null },
  'news.pattern.trend_down':            { label: '情绪持续走弱 (trend)',  current: null },
  'news.pattern.reversal_up':           { label: '情绪由空转多',         current: null },
  'news.pattern.reversal_down':         { label: '情绪由多转空',         current: null },
  'news.pattern.overheat_warn':         { label: '⚠️情绪过热',           current: null },
  'news.pattern.rumor_dominant':        { label: '⚠️传闻主导',           current: null },
  'news.pattern.early_hype':            { label: '⚠️疑似提前炒作',       current: null },
  'news.pattern.divergence_blackswan':  { label: '⚠️情绪背离 (黑天鹅)',  current: null },
  // Signal buckets (downstream effect)
  'news.signal.long_strong':   { label: 'Signal=Long(强)',     current: null },
  'news.signal.long_medium':   { label: 'Signal=Long(中)',     current: null },
  'news.signal.long_caution':  { label: 'Signal=Long(谨慎)',   current: null },
  'news.signal.overheated':    { label: 'Signal=⚠️过热观望',    current: null },
  'news.signal.weak_long':     { label: 'Signal=微多',          current: null },
  'news.signal.no_trade':      { label: 'Signal=No Trade',     current: null },
  'news.signal.short_avoid':   { label: 'Signal=规避/Short',   current: null },
  // Score buckets
  'news.score.high':           { label: 'Score ≥20',            current: null },
  'news.score.positive':       { label: 'Score 8-20',           current: null },
  'news.score.neutral':        { label: 'Score -3 to 8',        current: null },
  'news.score.negative':       { label: 'Score < -3',           current: null },
};

const CN_TECH_PATHS = {
  'tech.1D.bull_ema':         'pipeline/3-technical/analyze_tech_cn_mtf.mjs:504',
  'tech.1W.bull_ema':         'pipeline/3-technical/analyze_tech_cn_mtf.mjs:504',
  'tech.1D.above_ema200':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:505',
  'tech.1W.above_ema200':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:505',
  'tech.1D.dist20.near':      'pipeline/3-technical/analyze_tech_cn_mtf.mjs:510',
  'tech.1H.dist20.near':      'pipeline/3-technical/analyze_tech_cn_mtf.mjs:510',
  'tech.1D.dist20.overheat':  'pipeline/3-technical/analyze_tech_cn_mtf.mjs:511',
  'tech.1D.adx.strong':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:515',
  'tech.1W.adx.strong':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:515',
  'tech.4H.adx.strong':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:515',
  'tech.1H.adx.trending':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:515',
  'tech.1D.adx.chop':         'pipeline/3-technical/analyze_tech_cn_mtf.mjs:501',
  'tech.1D.rsi.healthy':      'pipeline/3-technical/analyze_tech_cn_mtf.mjs:522',
  'tech.1D.rsi.oversold':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:523',
  'tech.1D.rsi.overheat':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:524',
  'tech.1W.rsi.overheat':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:524',
  'tech.1D.macd.turning':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:525',
  'tech.1D.macd.bullish':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:526',
  'tech.1W.macd.bullish':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:526',
  'tech.1D.divergence.bull':  'pipeline/3-technical/analyze_tech_cn_mtf.mjs:531',
  'tech.1D.divergence.bear':  'pipeline/3-technical/analyze_tech_cn_mtf.mjs:532',
  'tech.1D.sqz.active':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:541',
  'tech.1D.sqz.long_streak':  'pipeline/3-technical/analyze_tech_cn_mtf.mjs:543',
  'tech.1W.sqz.active':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:541',
  'tech.1D.vol.expanding':    'pipeline/3-technical/analyze_tech_cn_mtf.mjs:552',
  'tech.1D.obv.up':           'pipeline/3-technical/analyze_tech_cn_mtf.mjs:555',
  'tech.1W.obv.up':           'pipeline/3-technical/analyze_tech_cn_mtf.mjs:555',
  'tech.1D.near_support':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:562',
  'tech.flag.overheat':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:511',
  'tech.flag.bull_trap':      'pipeline/3-technical/analyze_tech_cn_mtf.mjs:704',
  'tech.flag.fake_breakout':  'pipeline/3-technical/analyze_tech_cn_mtf.mjs:705',
  'tech.flag.bear_div':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:707',
  'tech.flag.bad_rr':         'pipeline/3-technical/analyze_tech_cn_mtf.mjs:708',
  'tech.flag.chop':           'pipeline/3-technical/analyze_tech_cn_mtf.mjs:709',
  'tech.flag.reversal':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:706',
  'tech.flag.up_limit':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:711',
  'tech.flag.down_limit':     'pipeline/3-technical/analyze_tech_cn_mtf.mjs:714',
  'tech.type.breakout':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:693',
  'tech.type.trend_chase':    'pipeline/3-technical/analyze_tech_cn_mtf.mjs:696',
  'tech.type.trend_continue': 'pipeline/3-technical/analyze_tech_cn_mtf.mjs:699',
  'tech.type.pullback':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:695',
  'tech.type.overheat_chase': 'pipeline/3-technical/analyze_tech_cn_mtf.mjs:697',
  'tech.type.reversal':       'pipeline/3-technical/analyze_tech_cn_mtf.mjs:690',
  'tech.rs.strong':           'pipeline/3-technical/analyze_tech_cn_mtf.mjs:579',
  'tech.rs.weak':             'pipeline/3-technical/analyze_tech_cn_mtf.mjs:583',
  'tech.score.mid':            'pipeline/3-technical/analyze_tech_cn_mtf.mjs (scoreTF 总分区间)',
};

// HK tech — same conceptual scoring rules as CN, line offsets specific to the HK script
const HK_TECH_PATHS = {
  'tech.1D.bull_ema':         'pipeline/3-technical/analyze_tech_hk_mtf.mjs:444',
  'tech.1W.bull_ema':         'pipeline/3-technical/analyze_tech_hk_mtf.mjs:444',
  'tech.1D.above_ema200':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:445',
  'tech.1W.above_ema200':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:445',
  'tech.1D.dist20.near':      'pipeline/3-technical/analyze_tech_hk_mtf.mjs:450',
  'tech.1H.dist20.near':      'pipeline/3-technical/analyze_tech_hk_mtf.mjs:450',
  'tech.1D.dist20.overheat':  'pipeline/3-technical/analyze_tech_hk_mtf.mjs:451',
  'tech.1D.adx.strong':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:454',
  'tech.1W.adx.strong':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:454',
  'tech.4H.adx.strong':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:454',
  'tech.1H.adx.trending':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:454',
  'tech.1D.adx.chop':         'pipeline/3-technical/analyze_tech_hk_mtf.mjs:441',
  'tech.1D.rsi.healthy':      'pipeline/3-technical/analyze_tech_hk_mtf.mjs:460',
  'tech.1D.rsi.oversold':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:461',
  'tech.1D.rsi.overheat':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:462',
  'tech.1W.rsi.overheat':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:462',
  'tech.1D.macd.turning':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:463',
  'tech.1D.macd.bullish':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:464',
  'tech.1W.macd.bullish':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:464',
  'tech.1D.divergence.bull':  'pipeline/3-technical/analyze_tech_hk_mtf.mjs:468',
  'tech.1D.divergence.bear':  'pipeline/3-technical/analyze_tech_hk_mtf.mjs:469',
  'tech.1D.sqz.active':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:476',
  'tech.1D.sqz.long_streak':  'pipeline/3-technical/analyze_tech_hk_mtf.mjs:478',
  'tech.1W.sqz.active':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:476',
  'tech.1D.vol.expanding':    'pipeline/3-technical/analyze_tech_hk_mtf.mjs:485',
  'tech.1D.obv.up':           'pipeline/3-technical/analyze_tech_hk_mtf.mjs:488',
  'tech.1W.obv.up':           'pipeline/3-technical/analyze_tech_hk_mtf.mjs:488',
  'tech.1D.near_support':     'pipeline/3-technical/analyze_tech_hk_mtf.mjs:493',
  'tech.flag.overheat':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:451',
  'tech.flag.bull_trap':      'pipeline/3-technical/analyze_tech_hk_mtf.mjs:620',
  'tech.flag.fake_breakout':  'pipeline/3-technical/analyze_tech_hk_mtf.mjs:621',
  'tech.flag.bear_div':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:623',
  'tech.flag.bad_rr':         'pipeline/3-technical/analyze_tech_hk_mtf.mjs:624',
  'tech.flag.chop':           'pipeline/3-technical/analyze_tech_hk_mtf.mjs:625',
  'tech.flag.reversal':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:622',
  'tech.type.breakout':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:610',
  'tech.type.trend_chase':    'pipeline/3-technical/analyze_tech_hk_mtf.mjs:613',
  'tech.type.trend_continue': 'pipeline/3-technical/analyze_tech_hk_mtf.mjs:616',
  'tech.type.pullback':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:612',
  'tech.type.overheat_chase': 'pipeline/3-technical/analyze_tech_hk_mtf.mjs:614',
  'tech.type.reversal':       'pipeline/3-technical/analyze_tech_hk_mtf.mjs:607',
  'tech.rs.strong':           'pipeline/3-technical/analyze_tech_hk_mtf.mjs:509',
  'tech.rs.weak':             'pipeline/3-technical/analyze_tech_hk_mtf.mjs:512',
  'tech.score.mid':            'pipeline/3-technical/analyze_tech_hk_mtf.mjs (scoreTF 总分区间)',
};

// HK news — shares the CN news pipeline (webNews.js + 2-news/lib), so the source
// paths are identical to CN. Listed separately so getWeightSources('hk') resolves.
const HK_NEWS_PATHS = {
  'news.top_news_type.财报':   'pipeline/2-news/analyze_hk_news.mjs (via lib/dictionaries.mjs TYPE_WEIGHT)',
  'news.top_news_type.政策':   'pipeline/2-news/analyze_hk_news.mjs (via lib/dictionaries.mjs TYPE_WEIGHT)',
  'news.top_news_type.并购':   'pipeline/2-news/analyze_hk_news.mjs (via lib/dictionaries.mjs TYPE_WEIGHT)',
  'news.top_news_type.黑天鹅': 'pipeline/2-news/analyze_hk_news.mjs (via lib/dictionaries.mjs TYPE_WEIGHT)',
  'news.top_news_type.传闻':   'pipeline/2-news/analyze_hk_news.mjs (via lib/dictionaries.mjs TYPE_WEIGHT)',
  'news.pattern.trend_up':              'pipeline/2-news/lib/patterns.mjs (情绪持续增强)',
  'news.pattern.trend_down':            'pipeline/2-news/lib/patterns.mjs (情绪持续走弱)',
  'news.pattern.reversal_up':           'pipeline/2-news/lib/patterns.mjs (情绪由空转多)',
  'news.pattern.reversal_down':         'pipeline/2-news/lib/patterns.mjs (情绪由多转空)',
  'news.pattern.overheat_warn':         'pipeline/2-news/lib/patterns.mjs (⚠️情绪过热)',
  'news.pattern.rumor_dominant':        'pipeline/2-news/lib/patterns.mjs (⚠️传闻主导)',
  'news.pattern.early_hype':            'pipeline/2-news/lib/patterns.mjs (⚠️提前炒作)',
  'news.pattern.divergence_blackswan':  'pipeline/2-news/lib/patterns.mjs (⚠️情绪背离)',
  'news.signal.long_strong':            'pipeline/2-news/lib/signal.mjs (强看多)',
  'news.signal.overheated':             'pipeline/2-news/lib/signal.mjs (过热)',
};

// US tech offsets — different line numbers, same conceptual scoring rules
const US_TECH_PATHS = {
  'tech.1D.bull_ema':         'pipeline/3-technical/analyze_tech_us_mtf.mjs:478',
  'tech.1W.bull_ema':         'pipeline/3-technical/analyze_tech_us_mtf.mjs:478',
  'tech.1D.above_ema200':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:479',
  'tech.1W.above_ema200':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:479',
  'tech.1D.dist20.near':      'pipeline/3-technical/analyze_tech_us_mtf.mjs:484',
  'tech.1D.adx.strong':       'pipeline/3-technical/analyze_tech_us_mtf.mjs:489',
  'tech.1W.adx.strong':       'pipeline/3-technical/analyze_tech_us_mtf.mjs:489',
  'tech.4H.adx.strong':       'pipeline/3-technical/analyze_tech_us_mtf.mjs:489',
  'tech.1H.adx.trending':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:489',
  'tech.1D.rsi.healthy':      'pipeline/3-technical/analyze_tech_us_mtf.mjs:496',
  'tech.1D.rsi.oversold':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:497',
  'tech.1D.rsi.overheat':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:498',
  'tech.1W.rsi.overheat':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:498',
  'tech.1D.macd.turning':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:499',
  'tech.1D.macd.bullish':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:500',
  'tech.1W.macd.bullish':     'pipeline/3-technical/analyze_tech_us_mtf.mjs:500',
  'tech.1D.divergence.bull':  'pipeline/3-technical/analyze_tech_us_mtf.mjs:505',
  'tech.1D.sqz.active':       'pipeline/3-technical/analyze_tech_us_mtf.mjs:515',
  'tech.1D.sqz.long_streak':  'pipeline/3-technical/analyze_tech_us_mtf.mjs:517',
  'tech.1W.sqz.active':       'pipeline/3-technical/analyze_tech_us_mtf.mjs:515',
  'tech.1D.vol.expanding':    'pipeline/3-technical/analyze_tech_us_mtf.mjs:526',
  'tech.1D.obv.up':           'pipeline/3-technical/analyze_tech_us_mtf.mjs:529',
  'tech.1W.obv.up':           'pipeline/3-technical/analyze_tech_us_mtf.mjs:529',
  'tech.flag.overheat':       'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal)',
  'tech.flag.bull_trap':      'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.flag.fake_breakout':  'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.flag.bear_div':       'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.flag.bad_rr':         'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.flag.chop':           'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.flag.reversal':       'pipeline/3-technical/analyze_tech_us_mtf.mjs (genSignal adjScore)',
  'tech.score.mid':            'pipeline/3-technical/analyze_tech_us_mtf.mjs (scoreTF 总分区间)',
};

const CN_NEWS_PATHS = {
  'news.top_news_type.财报':   'pipeline/2-news/analyze_cn_news.mjs:83',
  'news.top_news_type.政策':   'pipeline/2-news/analyze_cn_news.mjs:84',
  'news.top_news_type.并购':   'pipeline/2-news/analyze_cn_news.mjs:85',
  'news.top_news_type.黑天鹅': 'pipeline/2-news/analyze_cn_news.mjs:86',
  'news.top_news_type.传闻':   'pipeline/2-news/analyze_cn_news.mjs:87',
  'news.pattern.trend_up':            'pipeline/2-news/analyze_cn_news.mjs:116',
  'news.pattern.trend_down':          'pipeline/2-news/analyze_cn_news.mjs:117',
  'news.pattern.reversal_up':         'pipeline/2-news/analyze_cn_news.mjs:120',
  'news.pattern.reversal_down':       'pipeline/2-news/analyze_cn_news.mjs:121',
  'news.pattern.overheat_warn':       'pipeline/2-news/analyze_cn_news.mjs:126',
  'news.pattern.rumor_dominant':      'pipeline/2-news/analyze_cn_news.mjs:131',
  'news.pattern.early_hype':          'pipeline/2-news/analyze_cn_news.mjs:139',
  'news.pattern.divergence_blackswan':'pipeline/2-news/analyze_cn_news.mjs:145',
  'news.signal.long_strong':   'pipeline/2-news/analyze_cn_news.mjs:175',
  'news.signal.overheated':    'pipeline/2-news/analyze_cn_news.mjs:169',
};

// US news uses a shared lib with 3-stage weights (sourceAuthority × typeMul × recency)
const US_NEWS_PATHS = {
  'news.top_news_type.Earnings':       'pipeline/2-news/lib/dictionaries.mjs (TYPE_MULTIPLIER)',
  'news.top_news_type.M&A':            'pipeline/2-news/lib/dictionaries.mjs (TYPE_MULTIPLIER)',
  'news.top_news_type.Policy':         'pipeline/2-news/lib/dictionaries.mjs (TYPE_MULTIPLIER)',
  'news.top_news_type.Analyst Action': 'pipeline/2-news/lib/dictionaries.mjs (TYPE_MULTIPLIER)',
  'news.top_news_type.Rumor':          'pipeline/2-news/lib/dictionaries.mjs (TYPE_MULTIPLIER)',
};

/**
 * Build a market-specific WEIGHT_SOURCES map.
 * @param {'cn'|'us'|'hk'} market
 * @returns {Record<string, { layer: 'tech'|'news', source_path: string, source_label: string, current: number|null }>}
 */
export function getWeightSources(market) {
  const techPaths = market === 'us' ? US_TECH_PATHS
                  : market === 'hk' ? HK_TECH_PATHS
                  : CN_TECH_PATHS;
  const newsPaths = market === 'us' ? US_NEWS_PATHS
                  : market === 'hk' ? HK_NEWS_PATHS
                  : CN_NEWS_PATHS;
  const out = {};
  for (const [k, meta] of Object.entries(TECH_FEATURES_COMMON)) {
    if (!techPaths[k]) continue;
    out[k] = { layer: 'tech', source_path: techPaths[k], source_label: meta.label, current: meta.current };
  }
  for (const [k, meta] of Object.entries(NEWS_FEATURES_COMMON)) {
    if (!newsPaths[k]) continue;
    out[k] = { layer: 'news', source_path: newsPaths[k], source_label: meta.label, current: meta.current };
  }
  return out;
}
