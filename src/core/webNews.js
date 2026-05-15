/**
 * Web news fetcher for stocks
 * Fetches from Chinese financial websites (accessible in mainland China)
 * Uses official APIs from Eastmoney
 */

import { fetchXueqiuPosts as fetchXueqiuWithPuppeteer } from './xueqiu.js';
import { scrapeOne, fetchArticleContent } from './browserScraper.js';

// UA 池：轮换降低被 Eastmoney/Sina 限流概率
const UA_POOL = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
];
let _uaCursor = 0;
function pickUA() {
  const ua = UA_POOL[_uaCursor % UA_POOL.length];
  _uaCursor++;
  return ua;
}

const DEFAULT_TIMEOUT_MS = 10000;

// 带超时 + UA 轮换的 fetch。任何源卡住都不会拖垮整个 Promise.all。
async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = { 'User-Agent': pickUA(), ...(options.headers || {}) };
    return await fetch(url, { ...options, headers, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// 简易并发限制器（限制同时进行的 fetch 数，避免触发限流）
function createLimiter(maxConcurrent) {
  let active = 0;
  const queue = [];
  const dequeue = () => {
    if (active >= maxConcurrent || queue.length === 0) return;
    const { fn, resolve, reject } = queue.shift();
    active++;
    Promise.resolve()
      .then(fn)
      .then(resolve, reject)
      .finally(() => {
        active--;
        dequeue();
      });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject });
    dequeue();
  });
}

// 全局并发限制：同时最多 6 个 fetch 在飞，平衡速度和限流风险
const limit = createLimiter(6);

// 简易 LRU：缓存 fetchStockInfo 结果（同一 symbol 重复查询时直接命中）
class LRUCache {
  constructor(max = 200) {
    this.max = max;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return undefined;
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }
  set(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.max) this.map.delete(this.map.keys().next().value);
  }
}
const _stockInfoCache = new LRUCache(500);

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
    } else {
      // 平局或0分：检查中性词，否则也算中性
      const hasNeutral = SENTIMENT_KEYWORDS.neutral.some(kw => text.includes(kw));
      sentiment = hasNeutral ? 'neutral' : 'neutral';
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

// 获取股票基本信息（带 LRU 缓存）
async function fetchStockInfo(code, market) {
  const cacheKey = `${market}.${code}`;
  const cached = _stockInfoCache.get(cacheKey);
  if (cached) return cached;

  const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${cacheKey}&fields=f57,f58`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://quote.eastmoney.com/' },
    });
    const data = await res.json();
    const info = {
      code: data.data?.f57,
      name: data.data?.f58,
    };
    if (info.name) _stockInfoCache.set(cacheKey, info);
    return info;
  } catch (err) {
    return { error: err.message };
  }
}

// 获取研报数据 (作为新闻来源)
async function fetchResearchReports(code, count = 10) {
  const url = `https://reportapi.eastmoney.com/report/list?industryCode=*&pageNo=1&pageSize=${count}&ratingChange=*&beginTime=&endTime=&fields=&qType=0&orgCode=&code=${code}&rcode=&_=${Date.now()}`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://data.eastmoney.com/' },
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
// keywords: 单个字符串或字符串数组（任一命中即保留）
async function fetchKuaixunNews(keywords, count = 10) {
  // 使用东方财富快讯 API - 获取更多数据以提高匹配率
  const fetchCount = Math.max(100, count * 10); // 至少获取100条
  const url = `https://newsapi.eastmoney.com/kuaixun/v1/getlist_102_ajaxResult_${fetchCount}_1_.html`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://kuaixun.eastmoney.com/' },
    });
    const text = await res.text();

    // 解析 JSONP 格式
    const jsonMatch = text.match(/var ajaxResult=(\{.*\})/);
    if (!jsonMatch) return [];

    const data = JSON.parse(jsonMatch[1]);
    if (!data.LivesList) return [];

    // 关键词数组化，过滤掉空值；中文比较直接用包含关系，不需要 toLowerCase
    const kwList = (Array.isArray(keywords) ? keywords : [keywords])
      .filter(k => k && String(k).length >= 2)
      .map(k => String(k));

    if (kwList.length === 0) return [];

    const filtered = data.LivesList.filter(item => {
      const haystack = (item.title || '') + ' ' + (item.digest || '');
      return kwList.some(kw => haystack.includes(kw));
    });

    return filtered.slice(0, count).map(item => ({
      title: item.title,
      source: '东方财富快讯',
      date: item.showtime,
      content: item.digest,
      url: item.url_w,
      type: 'news',
    }));
  } catch (err) {
    return [{ error: `快讯获取失败: ${err.message}` }];
  }
}

// 获取股吧热帖 — Playwright renders JS so window.article_list is always available
async function fetchGubaHot(code, count = 10) {
  const url = `https://guba.eastmoney.com/list,${code}.html`;
  try {
    return await scrapeOne(url, async (page) => {
      const data = await page.evaluate(() => {
        try { return window.article_list; } catch { return null; }
      });
      if (!data?.re || !Array.isArray(data.re)) return [];
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
    }, { locale: 'zh-CN' });
  } catch (err) {
    return [];
  }
}

// 获取同花顺财经社区大盘观点 — Playwright bypasses WAF + renders dynamic content
async function fetchThsMarketSentiment(count = 10) {
  return scrapeOne('https://t.10jqka.com.cn/', async (page) => {
    await page.waitForTimeout(2000);
    return page.evaluate((maxCount) => {
      const posts = [];
      const divs = document.querySelectorAll(
        '[class*="content"],[class*="text"],[class*="view"],[class*="opinion"]'
      );
      for (const el of divs) {
        if (posts.length >= maxCount) break;
        const content = el.textContent?.trim() || '';
        if (
          content.length > 20 && content.length < 300 &&
          (content.includes('今天') || content.includes('明天') ||
           content.includes('大盘') || content.includes('市场'))
        ) {
          posts.push({
            title: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
            content,
            source: '同花顺财经社区',
            date: new Date().toISOString().split('T')[0],
            type: 'market_view',
          });
        }
      }
      return posts;
    }, count);
  }, { locale: 'zh-CN', waitUntil: 'networkidle' });
}

// 获取新浪财经股吧 — Playwright handles GB2312 charset automatically
async function fetchSinaGuba(code, count = 10) {
  const sinaCode = code.startsWith('6') ? `sh${code}` : `sz${code}`;
  const url = `https://guba.sina.com.cn/bar.php?name=${sinaCode}`;
  return scrapeOne(url, async (page) => {
    const html = await page.content();   // UTF-8; browser auto-decodes GB2312
    const posts = [];
    const trMatches = html.matchAll(
      /<tr[^>]*>.*?<td>.*?<a href="([^"]*)"[^>]*>([^<]+)<\/a>.*?<td>([^<]*)<\/td>.*?<\/tr>/gs
    );
    for (const match of trMatches) {
      if (posts.length >= count) break;
      const title = match[2].trim();
      const postUrl = match[1];
      const date = match[3].trim();
      if (title && title.length > 5 && !title.includes('class=')) {
        posts.push({
          title,
          source: '新浪股吧',
          date,
          url: postUrl.startsWith('http') ? postUrl : `https://guba.sina.com.cn${postUrl}`,
          type: 'forum',
        });
      }
    }
    return posts;
  }, { locale: 'zh-CN' });
}

// 获取东方财富个股资讯（按股票代码精准过滤，比 fetchKuaixunNews 命中率高）
async function fetchEastmoneyStockNews(code, market, count = 10) {
  // mTypeAndCode: 0.{code} = 深市, 1.{code} = 沪市
  const mtc = `${market}.${code}`;
  const url = `https://np-listapi.eastmoney.com/comm/web/getListInfo?client=web&biz=web_news_zx&mTypeAndCode=${mtc}&type=1&pageSize=${count}&pageIndex=1`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://quote.eastmoney.com/' },
    });
    const data = await res.json();

    if (!data?.data?.list || !Array.isArray(data.data.list)) return [];

    return data.data.list.slice(0, count).map(item => ({
      title: item.Art_Title,
      source: '东方财富资讯',
      date: item.Art_ShowTime,
      url: item.Art_Url || item.Art_OriginUrl,
      origin: item.Np_dst || '',
      type: 'news',
    }));
  } catch (err) {
    return [{ error: `东财个股资讯获取失败: ${err.message}` }];
  }
}

// 获取东方财富个股公告（公司官方披露，权威性最高）
async function fetchEastmoneyAnnouncements(code, count = 10) {
  const url = `https://np-anotice-stock.eastmoney.com/api/security/ann?sr=-1&page_size=${count}&page_index=1&ann_type=A&client_source=web&stock_list=${code}`;

  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'Referer': 'https://data.eastmoney.com/notices/' },
    });
    const data = await res.json();

    if (!data?.data?.list || !Array.isArray(data.data.list)) return [];

    return data.data.list.slice(0, count).map(item => ({
      title: item.title,
      source: '东方财富公告',
      date: (item.notice_date || '').split(' ')[0],
      column: item.columns?.[0]?.column_name || '',
      url: `https://data.eastmoney.com/notices/detail/${code}/${item.art_code}.html`,
      type: 'announcement',
    }));
  } catch (err) {
    return [{ error: `东财公告获取失败: ${err.message}` }];
  }
}

// 获取新浪财经个股新闻 — Playwright handles GB2312 charset automatically
async function fetchSinaStockNews(code, count = 10) {
  const sinaCode = code.startsWith('6') ? `sh${code}` : `sz${code}`;
  const url = `https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllNewsStock.php?symbol=${sinaCode}&Page=1`;
  return scrapeOne(url, async (page) => {
    const html = await page.content();   // UTF-8; browser auto-decodes GB2312
    const items = [];
    const linkRe = /<a\s+target=['"]_blank['"]\s+href=['"]([^'"]+)['"]>([^<]{8,80})<\/a>(?:\s|&nbsp;){0,5}\(?(\d{4}-\d{2}-\d{2})/g;
    let m;
    while ((m = linkRe.exec(html)) !== null) {
      if (items.length >= count) break;
      const [, link, title, date] = m;
      const cleanTitle = title.trim();
      if (cleanTitle.length < 5) continue;
      items.push({ title: cleanTitle, source: '新浪财经', date, url: link, type: 'news' });
    }
    // Fallback: links without dates (handles Sina layout changes)
    if (items.length === 0) {
      const fallbackRe = /<a\s+target=['"]_blank['"]\s+href=['"](https?:\/\/[^'"]+sina[^'"]+)['"]>([^<]{10,80})<\/a>/g;
      while ((m = fallbackRe.exec(html)) !== null) {
        if (items.length >= count) break;
        items.push({ title: m[2].trim(), source: '新浪财经', date: '', url: m[1], type: 'news' });
      }
    }
    return items;
  }, { locale: 'zh-CN' });
}

// 获取巨潮资讯公告（深交所/上交所官方披露平台，权威性最高）
// orgId 规则：6开头(沪市) → gssh0+code，其他(深市) → gssz0+code
async function fetchCninfoAnnouncements(code, count = 10) {
  const isSH = code.startsWith('6');
  const orgId = (isSH ? 'gssh0' : 'gssz0') + code;
  const column = isSH ? 'sse' : 'szse';
  const url = 'http://www.cninfo.com.cn/new/hisAnnouncement/query';

  const body = new URLSearchParams({
    stock: `${code},${orgId}`,
    tabName: 'fulltext',
    pageSize: String(count),
    pageNum: '1',
    column,
  });

  try {
    const res = await fetchWithTimeout(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': `http://www.cninfo.com.cn/new/disclosure/stock?stockCode=${code}&orgId=${orgId}`,
      },
      body: body.toString(),
    });

    const data = await res.json();
    if (!data?.announcements || !Array.isArray(data.announcements)) return [];

    return data.announcements.slice(0, count).map(item => ({
      title: item.announcementTitle,
      source: '巨潮资讯',
      date: item.announcementTime
        ? new Date(item.announcementTime).toISOString().split('T')[0]
        : '',
      url: item.adjunctUrl
        ? `http://static.cninfo.com.cn/${item.adjunctUrl}`
        : `http://www.cninfo.com.cn/new/disclosure/detail?stockCode=${code}&announcementId=${item.announcementId}&orgId=${orgId}`,
      file_type: item.adjunctType || 'PDF',
      file_size_kb: item.adjunctSize || 0,
      type: 'announcement',
    }));
  } catch (err) {
    return [{ error: `巨潮公告获取失败: ${err.message}` }];
  }
}

// 获取雪球讨论
// 使用Puppeteer绕过WAF限制；用 Promise.race 强制 30 秒硬超时，避免无限挂起
async function fetchXueqiuPosts(code, count = 10) {
  const timeoutMs = 30000;
  try {
    return await Promise.race([
      fetchXueqiuWithPuppeteer(code, count),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Xueqiu Puppeteer timeout after ${timeoutMs}ms`)), timeoutMs)
      ),
    ]);
  } catch (err) {
    console.error(`雪球数据获取失败: ${err.message}`);
    return [];
  }
}

// Separate browser concurrency limit for article enrichment (heavier than plain HTTP)
const articleLimit = createLimiter(3);

// Enrich news/forum items with full article content via secondary browser fetch.
// Skips PDF/announcement types and items that already have substantial content.
async function enrichWithContent(items, locale = 'zh-CN') {
  const SKIP_TYPES = new Set(['announcement']);
  await Promise.all(
    items
      .filter(item => item.url && !SKIP_TYPES.has(item.type) && (!item.content || item.content.length < 200))
      .map(item =>
        articleLimit(() =>
          fetchArticleContent(item.url, locale).then(text => {
            if (text) item.content = text;
          }).catch(() => {})
        )
      )
  );
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
  // 多关键词命中：公司名 + 6位代码 都匹配，提升快讯命中率
  const kuaixunKeywords = [result.name, code].filter(Boolean);
  const promises = [];

  // 每源状态追踪：调用者可以看到哪些源失败/超时
  result.sources_status = {};
  const trackSource = (name, fn) =>
    fn().then(items => {
      const arr = Array.isArray(items) ? items : [];
      const errored = arr.find(it => it && it.error);
      result.sources_status[name] = {
        ok: !errored,
        count: arr.filter(it => !it.error).length,
        error: errored?.error || null,
      };
      return arr;
    }).catch(err => {
      result.sources_status[name] = { ok: false, count: 0, error: err.message };
      return [];
    });

  // 获取研报 + 新闻：多源并行（research + 快讯 + 东财个股资讯 + 东财公告 + 新浪个股新闻）
  if (source === 'all' || source === 'news') {
    promises.push(
      trackSource('研报', () => fetchResearchReports(code, Math.ceil(count / 2)))
        .then(items => { result.research = items; })
    );

    // 6路新闻并行抓取，按URL去重，按日期降序
    promises.push(
      Promise.all([
        trackSource('东财快讯', () => limit(() => fetchKuaixunNews(kuaixunKeywords, count))),
        trackSource('东财个股资讯', () => limit(() => fetchEastmoneyStockNews(code, emMarket, count))),
        trackSource('东财公告', () => limit(() => fetchEastmoneyAnnouncements(code, Math.ceil(count / 2)))),
        trackSource('新浪个股新闻', () => limit(() => fetchSinaStockNews(code, count))),
        trackSource('巨潮公告', () => limit(() => fetchCninfoAnnouncements(code, Math.ceil(count / 2)))),
      ]).then(([kuaixun, emStockNews, emAnn, sinaNews, cninfo]) => {
        const seen = new Set();
        const merged = [];
        for (const item of [...emStockNews, ...sinaNews, ...kuaixun, ...emAnn, ...cninfo]) {
          if (item.error) continue;
          const key = (item.url || item.title).toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            merged.push(item);
          }
        }
        merged.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        result.news = merged.slice(0, count * 2);
      })
    );
  }

  // 获取股吧 - 支持A股和美股
  if (source === 'all' || source === 'forum') {
    if (marketType === 'CN') {
      const forumCount = Math.ceil(count / 3);
      promises.push(
        Promise.all([
          trackSource('东财股吧', () => limit(() => fetchGubaHot(code, forumCount))),
          trackSource('新浪股吧', () => limit(() => fetchSinaGuba(code, forumCount))),
          trackSource('雪球', () => fetchXueqiuPosts(code, forumCount)), // 雪球用 Puppeteer，不走 limit
        ]).then(results => {
          result.forum = [...results[0], ...results[1], ...results[2]];
        })
      );
    } else {
      promises.push(
        trackSource('雪球', () => fetchXueqiuPosts(code, count))
          .then(posts => { result.forum = posts; })
      );
    }
  }

  // 并行获取所有数据
  await Promise.all(promises);

  // 过滤错误项
  result.news = result.news.filter(item => !item.error);
  result.research = result.research.filter(item => !item.error);
  result.forum = result.forum.filter(item => !item.error);

  // 二次抓取：为 news 和 forum 补全正文内容
  await Promise.all([
    enrichWithContent(result.news, 'zh-CN'),
    enrichWithContent(result.forum, 'zh-CN'),
  ]);

  result.total_count = result.news.length + result.research.length + result.forum.length;

  // 每个来源抓取条数统计
  const sourceStats = {};
  for (const item of [...result.news, ...result.research, ...result.forum]) {
    const src = item.source || '未知';
    sourceStats[src] = (sourceStats[src] || 0) + 1;
  }
  result.source_stats = sourceStats;

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

