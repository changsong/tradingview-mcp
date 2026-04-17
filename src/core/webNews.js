/**
 * Web news fetcher for stocks
 * Fetches from Chinese financial websites (accessible in mainland China)
 * Uses official APIs from Eastmoney
 */

import { fetchXueqiuPosts as fetchXueqiuWithPuppeteer } from './xueqiu.js';

// 情绪关键词字典
const SENTIMENT_KEYWORDS = {
  bullish: [
    '涨停', '涨停板', '起飞', '买入', '加仓', '看好', '牛', '拉升', '突破',
    '上涨', '大涨', '暴涨', '飙升', '冲高', '强势', '利好', '看涨', '做多',
    '抄底', '建仓', '持有', '稳', '吃肉', '赚', '盈利', '翻倍', '新高',
  ],
  bearish: [
    '跌停', '跌停板', '割肉', '卖出', '减仓', '看空', '熊', '出货', '破位',
    '下跌', '大跌', '暴跌', '跳水', '砸盘', '弱势', '利空', '看跌', '做空',
    '被套', '套牢', '亏损', '止损', '逃顶', '清仓', '崩盘', '腰斩', '新低',
  ],
  neutral: [
    '观望', '等待', '回调', '震荡', '整理', '盘整', '横盘', '缩量', '放量',
    '洗盘', '换手', '分歧', '不确定', '谨慎', '保守',
  ],
};

// 情绪分析函数
function analyzeSentiment(posts) {
  if (!posts || posts.length === 0) {
    return null;
  }

  let bullishCount = 0;
  let bearishCount = 0;
  let neutralCount = 0;

  posts.forEach(post => {
    const text = (post.title + ' ' + (post.content || '')).toLowerCase();
    let sentiment = 'neutral';
    let bullishScore = 0;
    let bearishScore = 0;

    // 计算看涨关键词数量
    SENTIMENT_KEYWORDS.bullish.forEach(kw => {
      if (text.includes(kw)) bullishScore++;
    });

    // 计算看跌关键词数量
    SENTIMENT_KEYWORDS.bearish.forEach(kw => {
      if (text.includes(kw)) bearishScore++;
    });

    // 判断情绪
    if (bullishScore > bearishScore) {
      sentiment = 'bullish';
      bullishCount++;
    } else if (bearishScore > bullishScore) {
      sentiment = 'bearish';
      bearishCount++;
    } else if (bullishScore === 0 && bearishScore === 0) {
      // 检查中性关键词
      const hasNeutral = SENTIMENT_KEYWORDS.neutral.some(kw => text.includes(kw));
      if (hasNeutral) {
        neutralCount++;
      } else {
        neutralCount++;
      }
    } else {
      neutralCount++;
    }

    // 将情绪标记添加到帖子对象
    post.sentiment = sentiment;
  });

  const total = posts.length;
  return {
    bullish_count: bullishCount,
    bearish_count: bearishCount,
    neutral_count: neutralCount,
    bullish_ratio: ((bullishCount / total) * 100).toFixed(1) + '%',
    bearish_ratio: ((bearishCount / total) * 100).toFixed(1) + '%',
    neutral_ratio: ((neutralCount / total) * 100).toFixed(1) + '%',
    overall_sentiment: bullishCount > bearishCount ? '看涨' : (bearishCount > bullishCount ? '看跌' : '中性'),
  };
}

// 热度指标计算函数
function calculateHeat(posts) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
  const totalReplies = posts.reduce((sum, p) => sum + (p.replies || 0), 0);
  const avgViews = totalViews / posts.length;
  const avgReplies = totalReplies / posts.length;

  // 热度评分：平均阅读数 + 平均评论数 * 10
  const heatScore = Math.round((avgViews + avgReplies * 10) / 10);

  // 热度等级
  let heatLevel = '冷清';
  if (heatScore > 100) heatLevel = '火热';
  else if (heatScore > 50) heatLevel = '活跃';
  else if (heatScore > 20) heatLevel = '一般';

  return {
    total_views: totalViews,
    avg_views: Math.round(avgViews),
    total_replies: totalReplies,
    avg_replies: Math.round(avgReplies),
    heat_score: heatScore,
    heat_level: heatLevel,
  };
}

// 市场识别
export function detectMarket(symbol) {
  const s = symbol.toUpperCase();
  if (s.startsWith('SSE:') || s.startsWith('SZSE:') || /^\d{6}$/.test(s)) return 'CN';
  if (s.includes('.HK') || s.startsWith('HKEX:') || /^\d{4,5}$/.test(s)) return 'HK';
  return 'US';
}

// 提取纯股票代码
export function extractCode(symbol) {
  return symbol.replace(/^(SSE:|SZSE:|NASDAQ:|NYSE:|HKEX:)/, '').replace('.HK', '');
}

// 获取东方财富市场代码 (0=深市, 1=沪市)
function getEastmoneyMarket(symbol) {
  const s = symbol.toUpperCase();
  if (s.startsWith('SSE:') || s.startsWith('6')) return '1';
  return '0'; // 深市
}

// 获取股票基本信息
async function fetchStockInfo(code, market) {
  const secid = market + '.' + code;
  const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${secid}&fields=f57,f58`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://quote.eastmoney.com/',
      },
    });
    const data = await res.json();
    return {
      code: data.data?.f57,
      name: data.data?.f58,
    };
  } catch (err) {
    return { error: err.message };
  }
}

// 获取研报数据 (作为新闻来源)
async function fetchResearchReports(code, count = 10) {
  const url = `https://reportapi.eastmoney.com/report/list?industryCode=*&pageNo=1&pageSize=${count}&ratingChange=*&beginTime=&endTime=&fields=&qType=0&orgCode=&code=${code}&rcode=&_=${Date.now()}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://data.eastmoney.com/',
      },
    });
    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      return [];
    }

    return data.data.map(item => ({
      title: item.title,
      source: item.orgSName || '研报',
      date: item.publishDate?.split(' ')[0],
      rating: item.emRatingName,
      researcher: item.researcher,
      url: `https://data.eastmoney.com/report/zw/stock.jshtml?encodeUrl=${item.encodeUrl}`,
      type: 'research',
    }));
  } catch (err) {
    return [{ error: `研报获取失败: ${err.message}` }];
  }
}

// 获取快讯新闻 (通用财经新闻)
async function fetchKuaixunNews(keyword, count = 10) {
  // 使用东方财富快讯 API - 获取更多数据以提高匹配率
  const fetchCount = Math.max(100, count * 10); // 至少获取100条
  const url = `https://newsapi.eastmoney.com/kuaixun/v1/getlist_102_ajaxResult_${fetchCount}_1_.html`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://kuaixun.eastmoney.com/',
      },
    });
    const text = await res.text();

    // 解析 JSONP 格式
    const jsonMatch = text.match(/var ajaxResult=(\{.*\})/);
    if (!jsonMatch) return [];

    const data = JSON.parse(jsonMatch[1]);
    if (!data.LivesList) return [];

    // 过滤包含关键词的新闻（支持多个关键词）
    const keywordLower = keyword.toLowerCase();
    const filtered = data.LivesList.filter(item => {
      const title = (item.title || '').toLowerCase();
      const digest = (item.digest || '').toLowerCase();
      const content = title + ' ' + digest;
      return content.includes(keywordLower);
    });

    return filtered.slice(0, count).map(item => ({
      title: item.title,
      source: '东方财富快讯',
      date: item.showtime,
      snippet: item.digest,
      url: item.url_w,
      type: 'news',
    }));
  } catch (err) {
    return [{ error: `快讯获取失败: ${err.message}` }];
  }
}

// 获取股吧热帖 (通过解析 HTML) - 东方财富
async function fetchGubaHot(code, count = 10) {
  const url = `https://guba.eastmoney.com/list,${code}.html`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://guba.eastmoney.com/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });
    const html = await res.text();

    // 提取 article_list 变量
    const match = html.match(/var article_list=({.*?});/s);
    if (!match) {
      return [];
    }

    const data = JSON.parse(match[1]);
    if (!data.re || !Array.isArray(data.re)) {
      return [];
    }

    return data.re.slice(0, count).map(item => ({
      title: item.post_title,
      source: '东方财富股吧',
      date: item.post_publish_time,
      replies: item.post_comment_count,
      views: item.post_click_count,
      author: item.user_nickname,
      url: `https://guba.eastmoney.com/news,${code},${item.post_id}.html`,
      type: 'forum',
    }));
  } catch (err) {
    return [];
  }
}

// 获取同花顺财经社区大盘观点（用于大盘情绪分析，非个股）
async function fetchThsMarketSentiment(count = 10) {
  // 同花顺财经社区 - 用于分析大盘整体情绪
  const url = 'https://t.10jqka.com.cn/';

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://www.10jqka.com.cn/',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const html = await res.text();

    // 提取市场观点（包含"今天"、"明天"、"大盘"、"市场"的内容）
    const posts = [];
    const viewMatches = html.matchAll(/<div[^>]*class="[^"]*(?:content|text|view|opinion)[^"]*"[^>]*>([^<]{20,300})<\/div>/gi);

    for (const match of viewMatches) {
      if (posts.length >= count) break;

      const content = match[1].trim();

      // 筛选包含关键词的观点
      if (
        content.length > 20 &&
        content.length < 300 &&
        (content.includes('今天') ||
          content.includes('明天') ||
          content.includes('大盘') ||
          content.includes('市场'))
      ) {
        posts.push({
          title: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
          content: content,
          source: '同花顺财经社区',
          date: new Date().toISOString().split('T')[0],
          type: 'market_view',
        });
      }
    }

    return posts;
  } catch (err) {
    return [];
  }
}

// 获取新浪财经股吧
async function fetchSinaGuba(code, count = 10) {
  // 新浪股吧需要转换代码格式
  const sinaCode = code.startsWith('6') ? `sh${code}` : `sz${code}`;
  const url = `https://guba.sina.com.cn/bar.php?name=${sinaCode}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Referer': 'https://finance.sina.com.cn/',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    // 新浪股吧使用GB2312编码，需要转换
    const buffer = await res.arrayBuffer();
    const decoder = new TextDecoder('gb2312');
    const html = decoder.decode(buffer);

    // 提取帖子列表 - 新浪的表格结构
    const posts = [];
    const trMatches = html.matchAll(/<tr[^>]*>.*?<td>.*?<a href="([^"]*)"[^>]*>([^<]+)<\/a>.*?<td>([^<]*)<\/td>.*?<\/tr>/gs);

    for (const match of trMatches) {
      if (posts.length >= count) break;

      const title = match[2].trim();
      const url = match[1];
      const date = match[3].trim();

      // 过滤掉无效的标题
      if (title && title.length > 5 && !title.includes('class=')) {
        posts.push({
          title: title,
          source: '新浪股吧',
          date: date,
          url: url.startsWith('http') ? url : `https://guba.sina.com.cn${url}`,
          type: 'forum',
        });
      }
    }

    return posts;
  } catch (err) {
    return [];
  }
}

// 获取雪球讨论
// 使用Puppeteer绕过WAF限制
async function fetchXueqiuPosts(code, count = 10) {
  try {
    // 使用Puppeteer版本
    return await fetchXueqiuWithPuppeteer(code, count);
  } catch (err) {
    console.error(`雪球数据获取失败: ${err.message}`);
    return [];
  }
}

// 主函数：获取新闻
export async function searchNews({ symbol, name, source = 'all', count = 10 }) {
  const marketType = detectMarket(symbol);
  const marketName = marketType === 'CN' ? 'A股' : marketType === 'HK' ? '港股' : '美股';
  const code = extractCode(symbol);
  const emMarket = getEastmoneyMarket(symbol);

  const result = {
    success: true,
    symbol,
    name: name || null,
    market: marketName,
    news: [],
    research: [],
    forum: [],
    search_time: new Date().toISOString(),
  };

  // 如果没有提供名称，尝试获取
  if (!name && marketType === 'CN') {
    const info = await fetchStockInfo(code, emMarket);
    if (info.name) {
      result.name = info.name;
    }
  }

  const keyword = result.name || code;
  const promises = [];

  // 获取研报
  if (source === 'all' || source === 'news') {
    promises.push(
      fetchResearchReports(code, Math.ceil(count / 2))
        .then(reports => { result.research = reports; })
    );

    // 获取快讯新闻
    promises.push(
      fetchKuaixunNews(keyword, count)
        .then(news => { result.news = news; })
    );
  }

  // 获取股吧 - 支持A股和美股
  if (source === 'all' || source === 'forum') {
    if (marketType === 'CN') {
      // A股：从多个来源获取
      const forumCount = Math.ceil(count / 3); // 每个来源获取 1/3
      promises.push(
        Promise.all([
          fetchGubaHot(code, forumCount),
          fetchSinaGuba(code, forumCount),
          fetchXueqiuPosts(code, forumCount), // 启用雪球（支持CDP模式）
        ]).then(results => {
          // 合并所有股吧数据
          result.forum = [...results[0], ...results[1], ...results[2]];
        })
      );
    } else {
      // 美股/港股：仅使用雪球
      promises.push(
        fetchXueqiuPosts(code, count).then(posts => {
          result.forum = posts;
        })
      );
    }
  }

  // 并行获取所有数据
  await Promise.all(promises);

  // 过滤错误项
  result.news = result.news.filter(item => !item.error);
  result.research = result.research.filter(item => !item.error);
  result.forum = result.forum.filter(item => !item.error);

  result.total_count = result.news.length + result.research.length + result.forum.length;

  // 情绪分析
  if (result.forum.length > 0) {
    result.sentiment_analysis = analyzeSentiment(result.forum);
    result.heat_metrics = calculateHeat(result.forum);
  }

  // 生成分析提示
  const hasResearch = result.research.length > 0;
  const hasNews = result.news.length > 0;
  const hasForum = result.forum.length > 0;

  let analysisHint = `请基于以上 ${result.total_count} 条信息分析：\n`;
  analysisHint += '1) 市场情绪倾向（看涨/看跌/中性比例）\n';
  analysisHint += '2) 对股价的潜在影响预测（利好/利空因素）\n';
  analysisHint += '3) 关键风险和机会点\n';

  if (hasResearch) {
    const ratings = result.research.map(r => r.rating).filter(Boolean);
    if (ratings.length > 0) {
      analysisHint += `\n研报评级参考: ${ratings.join(', ')}`;
    }
  }

  result.analysis_hint = analysisHint;

  return result;
}

// 获取大盘情绪分析（用于判断第二天是否参与交易）
export async function getMarketSentiment() {
  const result = {
    success: true,
    date: new Date().toISOString().split('T')[0],
    market_views: [],
    sentiment_analysis: null,
    recommendation: null,
  };

  // 获取同花顺大盘观点
  const thsViews = await fetchThsMarketSentiment(10);
  result.market_views = thsViews;

  // 情绪分析
  if (thsViews.length > 0) {
    const allContent = thsViews.map(v => v.content).join(' ');

    // 看涨关键词
    const bullishKeywords = ['看多', '看涨', '上涨', '反弹', '突破', '利好', '机会', '乐观', '买入', '做多'];
    // 看跌关键词
    const bearishKeywords = ['看空', '看跌', '下跌', '回调', '破位', '利空', '风险', '谨慎', '卖出', '做空'];

    let bullishCount = 0;
    let bearishCount = 0;

    bullishKeywords.forEach(kw => {
      bullishCount += (allContent.match(new RegExp(kw, 'g')) || []).length;
    });

    bearishKeywords.forEach(kw => {
      bearishCount += (allContent.match(new RegExp(kw, 'g')) || []).length;
    });

    const total = bullishCount + bearishCount;
    const bullishRatio = total > 0 ? ((bullishCount / total) * 100).toFixed(1) : '0.0';
    const bearishRatio = total > 0 ? ((bearishCount / total) * 100).toFixed(1) : '0.0';

    result.sentiment_analysis = {
      bullish_count: bullishCount,
      bearish_count: bearishCount,
      bullish_ratio: bullishRatio + '%',
      bearish_ratio: bearishRatio + '%',
      overall_sentiment: bullishCount > bearishCount ? '偏多' : bearishCount > bullishCount ? '偏空' : '中性',
    };

    // 生成操作建议
    const ratio = bullishCount / (bearishCount || 1);
    if (ratio > 1.5) {
      result.recommendation = {
        action: '可以参与',
        confidence: '较高',
        reason: '市场情绪偏多，看涨观点占优',
      };
    } else if (ratio < 0.67) {
      result.recommendation = {
        action: '谨慎或卖出',
        confidence: '较高',
        reason: '市场情绪偏空，看跌观点占优',
      };
    } else {
      result.recommendation = {
        action: '观望',
        confidence: '中等',
        reason: '市场情绪分歧，多空力量均衡',
      };
    }
  }

  return result;
}

