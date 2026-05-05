/**
 * dictionaries.mjs — 中央词典（CN + US 双市场）
 *
 * 所有 regex/词典统一管理，便于回归对照与扩展。
 * 设计原则：
 *  - title 与 content（summary/snippet/digest）共用同一套 regex，靠词频决定情绪
 *  - 类型识别正则按优先级排列；顺序匹配，先命中先走
 *  - 否定词独立维护，由 sentiment.mjs 在命中位点回看 8 字窗口判否
 */

// ─── CN 词典 ─────────────────────────────────────────────────────────────────
export const CN = {
  // 类型识别（按优先级，先命中先走）
  TYPES: [
    { type: '黑天鹅',     re: /诉讼|事故|处罚|违规|召回|质量问题|警示|强制退市|造假|欺诈|起诉|索赔|重大损失|重大违约|监管处罚|被立案|被调查|内幕交易/ },
    { type: '财报',       re: /业绩|营收|利润|净利|财报|年报|季报|预告|预增|预减|扭亏|亏损|归母|每股收益|同比|环比|营业收入|营业总收入/ },
    { type: '分析师动作', re: /上调.{0,8}评级|下调.{0,8}评级|首次覆盖|目标价上调|目标价下调|强烈推荐|维持.{0,8}买入|维持.{0,8}增持|维持.{0,8}卖出|调研报告|深度报告/ },
    { type: '并购',       re: /收购|并购|合并|重组|控股|参股|战略合作|资产注入|剥离|出售|定增|增发|股权转让|要约收购|换股/ },
    { type: '政策',       re: /政策|监管|规定|法规|央行|财政部|证监会|发改委|工信部|补贴|扶持|批复|审批|许可|资质|国家队|专项|招标/ },
    { type: '回购',       re: /回购|增持公告|高管增持|大股东增持|股票激励|股权激励/ },
    { type: '传闻',       re: /据悉|消息称|知情人士|有消息|据报道|疑似|传出|或将|预计获批|拟/ },
    { type: '行业',       re: /行业|板块|赛道|竞争|格局|产业链|供应链|新能源|半导体|AI|人工智能|芯片|光伏|储能|机器人|医疗|生物|风电|核电|氢能/ },
  ],

  // 主流情绪词
  BULLISH: /利好|涨停|新高|突破|买入|增持|超预期|大幅增长|同比增长|环比增|扭亏|获批|中标|签约|战略合作|补贴|政策支持|底部|企稳|反弹|强势|看多|积极|正面|大单|订单|放量上涨/,
  BEARISH: /利空|跌停|新低|破位|卖出|减持|不及预期|大幅下降|同比下滑|净亏损|警示|处罚|违规|召回|下调|终止|失败|拖累|压力|风险|负面|恶化|商誉减值|业绩暴雷|放量下跌/,

  // 分析师动作（专业语义）
  ANALYST_BULL: /上调.{0,10}评级|目标价上调|强烈推荐|首次覆盖.{0,8}买入|维持.{0,8}买入|维持.{0,8}增持|跑赢市场/,
  ANALYST_BEAR: /下调.{0,10}评级|目标价下调|首次覆盖.{0,8}卖出|维持.{0,8}卖出|维持.{0,8}减持|跑输市场/,

  // 财报具体动词（强信号）
  EARNINGS_BEAT: /大幅超出|超预期|预增|业绩大涨|净利同比.{0,4}增长|营收同比.{0,4}增长.{0,4}\d{2,}%|扭亏为盈/,
  EARNINGS_MISS: /大幅低于|不及预期|预减|业绩暴雷|净利同比.{0,4}下滑|净利同比.{0,4}下降|营收同比.{0,4}下滑|由盈转亏/,

  // 黑天鹅强信号（强制 -1）
  BLACK_SWAN: /被立案|被调查|强制退市|造假|欺诈|内幕交易|重大违约|连续跌停|商誉减值/,

  // 研报评级
  RATING_BULL: /买入|强烈推荐|强推/,
  RATING_BULL_MILD: /增持|推荐|看好|跑赢市场/,
  RATING_NEUTRAL: /中性|持有|观望|同步表现/,
  RATING_BEAR: /卖出|减持|回避|落后市场|跑输市场/,

  // 否定词（句首回看 8 字窗口反转情绪）
  NEGATIONS: /[不未没否非]|无法|未能|不会|否认|未有|尚未|没有/,

  // 噪音黑名单：这些标题被丢弃（不计分）
  NOISE: [
    /\d{1,2}月\d{1,2}日(快速上涨|快速回调|涨停|跌停|大涨|大跌|尾盘)/,  // 「4月29日快速上涨」
    /融资净(买入|卖出)/,                                             // 融资数据复述
    /^.{0,8}重要公告集锦/,                                          // 集合页
    /^.{0,8}(早报|盘前|盘后|收评|午评|晚报)$/,                      // 通用 wrap
    /龙虎榜|大宗交易|盘口异动/,                                      // 盘口数据
    /涨停板复盘|跌停板复盘/,                                         // 盘口复盘
    /开盘价|收盘价/,                                                 // 价格复述
  ],
};

// ─── US 词典 ─────────────────────────────────────────────────────────────────
export const US = {
  TYPES: [
    { type: 'Black Swan',     re: /fraud|lawsuit|probe|recall|fine|penalty|SEC.{0,10}(charge|investigate)|DOJ|subpoena|bankruptcy|default|scandal|restatement|investigation|violation|delisting/i },
    { type: 'Earnings',       re: /earnings|revenue|profit|EPS|guidance|beat|miss|quarterly|annual report|outlook|forecast|margin|net income|operating loss|results/i },
    { type: 'Analyst Action', re: /upgrade|downgrade|raise.{0,15}target|lower.{0,15}target|cut.{0,15}target|initiate.{0,10}coverage|reiterate.{0,10}(buy|sell|hold)|outperform|underperform|overweight|underweight/i },
    { type: 'M&A',            re: /acqui|merger|buyout|takeover|divest|spin.?off|joint venture|strategic alliance|tender offer|stake/i },
    { type: 'Policy',         re: /Fed|Federal Reserve|rate.{0,10}(hike|cut|decision)|tariff|regulation|legislation|congress|FDA.{0,15}(approval|approve|reject)|FTC|antitrust|sanctions|subsidy|trade.{0,10}war/i },
    { type: 'Buyback',        re: /buyback|repurchase.{0,8}program|insider buy|stock split|dividend.{0,8}(hike|raise|increase)/i },
    { type: 'Rumor',          re: /reportedly|sources say|could be|may be|rumored|speculation|unconfirmed|people familiar/i },
    { type: 'Industry',       re: /sector|industry|market share|competitor|supply chain|AI|semiconductor|chip|cloud|EV|biotech|healthcare|energy|fintech/i },
  ],

  BULLISH: /\b(beat|outperform|upgrade|strong|surge|rally|buy|bullish|positive|record|growth|profit|win|approval|approved|raise.{0,10}guidance|exceed|expand|breakout|award|milestone|boost|record high|new high|all-time high|hike dividend|raise dividend)\b/i,
  BEARISH: /\b(miss|underperform|downgrade|weak|drop|plunge|fall|bearish|negative|loss|decline|cut.{0,10}guidance|disappoint|probe|lawsuit|fraud|fine|penalty|layoff|restructure|warning|risk|concern|headwind|sell|short)\b/i,

  ANALYST_BULL: /\b(upgrade|raise.{0,15}target|raises.{0,15}target|raised.{0,15}target|initiate.{0,15}buy|outperform|overweight|reiterate.{0,8}buy|top.?pick)\b/i,
  ANALYST_BEAR: /\b(downgrade|cut.{0,15}target|lower.{0,15}target|underperform|underweight|reiterate.{0,8}sell|sell.?rating)\b/i,

  EARNINGS_BEAT: /\b(beat.{0,15}(estimate|expectation|consensus)|exceed.{0,15}(estimate|expectation)|raised? guidance|topped|smashed|crushed|blowout|record (revenue|earnings))\b/i,
  EARNINGS_MISS: /\b(miss.{0,15}(estimate|expectation|consensus)|below.{0,15}(estimate|expectation)|cut.{0,10}guidance|lowered guidance|disappointing|dismal|weakest)\b/i,

  BLACK_SWAN: /\b(SEC.{0,15}(charge|sue|investigate)|DOJ.{0,15}(charge|sue)|class action|delisting|bankruptcy|chapter 11|restatement|going concern|fraud charge|criminal investigation)\b/i,

  // 否定词窗口（向前回看 8 个英文单词）
  NEGATIONS: /\b(not|no|never|fail|fails|failed|cannot|won't|isn't|aren't|doesn't|don't|denied|reject|reversed)\b/i,

  NOISE: [
    /^\/?DISREGARD RELEASE/i,                                            // 撤稿声明
    /^\(updates?\)/i,                                                     // 元数据 wrap
    /^update[d]?:/i,
    /^press release:/i,
    /^correction:/i,
    /^repeat:/i,
    /\bweekly market wrap\b/i,                                            // 通用
  ],
};

// ─── 来源权威度（finalWeight 第一段）─────────────────────────────────────────
// 数值越大越权威。与 type/recency 相乘得到 finalWeight。
export const SOURCE_AUTHORITY = {
  // CN
  '巨潮资讯':       5.0,   // 官方公告平台
  '东方财富公告':   4.5,
  '研报':           4.0,   // 研报特殊：还会引入 rating
  '东方财富快讯':   3.0,
  '东方财富资讯':   3.0,
  '新浪财经':       3.0,
  '东方财富股吧':   1.2,
  '新浪股吧':       1.2,
  '雪球':           1.5,
  '同花顺财经社区': 1.3,

  // US
  'Finnhub':              3.5,
  'Yahoo Finance':        3.0,
  'MarketWatch':          3.0,
  'NewsAPI':              2.5,
  'Seeking Alpha':        2.5,
  'Yahoo Conversations':  1.2,
  'StockTwits':           1.2,
  'r/wallstreetbets':     1.0,
  'r/stocks':             1.2,
  'Bogleheads':           1.5,
};

export const DEFAULT_AUTHORITY = 2.0;

// 类型乘数（finalWeight 第二段）
export const TYPE_MULTIPLIER = {
  '黑天鹅': 1.5, 'Black Swan':    1.5,
  '财报':   1.3, 'Earnings':      1.3,
  '政策':   1.2, 'Policy':        1.2,
  '并购':   1.4, 'M&A':           1.4,
  '回购':   1.2, 'Buyback':       1.2,
  '分析师动作': 1.2, 'Analyst Action': 1.2,
  '行业':   1.0, 'Industry':      1.0,
  '传闻':   0.6, 'Rumor':         0.6,
};

export const DEFAULT_TYPE_MULTIPLIER = 1.0;
