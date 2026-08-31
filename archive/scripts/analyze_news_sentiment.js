#!/usr/bin/env node

import { searchNews, getMarketSentiment } from './src/core/webNews.js';
import { writeFileSync, readFileSync } from 'fs';

// ============ 情感分类词典 ============
const NEWS_TYPES = {
  policy: ['政策', '监管', '改革', '补贴', '税收', '法规'],
  earnings: ['财报', '盈利', '业绩', '增长', '同比', '环比', '扭亏', '亏损'],
  merger: ['并购', '重组', '合并', '收购', '资产注入', '整合'],
  industry: ['行业', '市场', '竞争', '产业链', '供应链', '技术'],
  blackswan: ['危机', '风险', '诉讼', '违规', '暴雷', '减持', '套现'],
  rumor: ['传闻', '据悉', '有报道', '消息面', '自媒体', '猜测'],
};

const IMPACT_KEYWORDS = {
  major: ['上游供应', '核心业务', '主要客户', '战略', '转向', '颠覆', '划时代'],
  medium: ['新产品', '新市场', '合作', '融资', '排名', '评分'],
  minor: ['评论', '看好', '理由', '观点', '机构', '分析'],
};

console.log('📰 新闻情感分析脚本已创建');
