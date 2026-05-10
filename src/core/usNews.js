/**
 * US Stock News and Community Data Fetcher
 * Fetches from Reddit, Seeking Alpha, StockTwits, and Bogleheads
 */

import { scrapeOne } from './browserScraper.js';

// Concurrency limiter for browser-based fetchers (avoids too many headless browsers at once)
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
      .finally(() => { active--; dequeue(); });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject });
    dequeue();
  });
}
const browserLimit = createLimiter(4);

// English sentiment keywords for US stocks
const SENTIMENT_KEYWORDS = {
  bullish: [
    'moon', 'rocket', 'bullish', 'buy', 'long', 'calls', 'bull', 'pump', 'rally',
    'breakout', 'surge', 'soar', 'gain', 'profit', 'uptrend', 'strong', 'beat',
    'upgrade', 'outperform', 'accumulate', 'hold', 'diamond hands', 'to the moon',
    'tendies', 'yolo', 'all in', 'double down', 'dip buying', 'btfd', 'hodl',
  ],
  bearish: [
    'crash', 'dump', 'bearish', 'sell', 'short', 'puts', 'bear', 'tank', 'plunge',
    'drop', 'fall', 'loss', 'downtrend', 'weak', 'miss', 'downgrade', 'underperform',
    'reduce', 'exit', 'paper hands', 'rug pull', 'bag holder', 'rekt', 'guh',
    'margin call', 'stop loss', 'cut losses', 'dead cat bounce',
  ],
  neutral: [
    'wait', 'watch', 'sideways', 'consolidation', 'range', 'flat', 'uncertain',
    'mixed', 'cautious', 'neutral', 'hold', 'patience', 'dyor', 'nfa',
  ],
};

// Sentiment analysis function
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

    // Count bullish keywords
    SENTIMENT_KEYWORDS.bullish.forEach(kw => {
      const regex = new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      const matches = text.match(regex);
      if (matches) bullishScore += matches.length;
    });

    // Count bearish keywords
    SENTIMENT_KEYWORDS.bearish.forEach(kw => {
      const regex = new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      const matches = text.match(regex);
      if (matches) bearishScore += matches.length;
    });

    // Determine sentiment
    if (bullishScore > bearishScore) {
      sentiment = 'bullish';
      bullishCount++;
    } else if (bearishScore > bullishScore) {
      sentiment = 'bearish';
      bearishCount++;
    } else if (bullishScore === 0 && bearishScore === 0) {
      const hasNeutral = SENTIMENT_KEYWORDS.neutral.some(kw => {
        const regex = new RegExp('\\b' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        return regex.test(text);
      });
      neutralCount++;
    } else {
      neutralCount++;
    }

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
    overall_sentiment: bullishCount > bearishCount ? 'Bullish' : (bearishCount > bullishCount ? 'Bearish' : 'Neutral'),
  };
}

// Heat metrics calculation
function calculateHeat(posts) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const totalUpvotes = posts.reduce((sum, p) => sum + (p.upvotes || p.likes || 0), 0);
  const totalComments = posts.reduce((sum, p) => sum + (p.comments || p.replies || 0), 0);
  const avgUpvotes = totalUpvotes / posts.length;
  const avgComments = totalComments / posts.length;

  // Heat score: avg upvotes + avg comments * 5
  const heatScore = Math.round((avgUpvotes + avgComments * 5) / 10);

  let heatLevel = 'Cold';
  if (heatScore > 100) heatLevel = 'Hot';
  else if (heatScore > 50) heatLevel = 'Active';
  else if (heatScore > 20) heatLevel = 'Moderate';

  return {
    total_upvotes: totalUpvotes,
    avg_upvotes: Math.round(avgUpvotes),
    total_comments: totalComments,
    avg_comments: Math.round(avgComments),
    heat_score: heatScore,
    heat_level: heatLevel,
  };
}

// Fetch Reddit posts from r/wallstreetbets
async function fetchRedditWSB(symbol, count = 10) {
  // Reddit JSON API (no auth required for public posts)
  const url = `https://www.reddit.com/r/wallstreetbets/search.json?q=${symbol}&restrict_sr=1&sort=new&limit=${count}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!data.data || !data.data.children) {
      return [];
    }

    return data.data.children.map(item => ({
      title: item.data.title,
      content: item.data.selftext?.substring(0, 200) || '',
      author: item.data.author,
      date: new Date(item.data.created_utc * 1000).toISOString().split('T')[0],
      upvotes: item.data.ups,
      comments: item.data.num_comments,
      url: `https://www.reddit.com${item.data.permalink}`,
      source: 'r/wallstreetbets',
      type: 'forum',
    }));
  } catch (err) {
    console.error(`Reddit WSB fetch error: ${err.message}`);
    return [];
  }
}

// Fetch Reddit posts from r/stocks
async function fetchRedditStocks(symbol, count = 10) {
  const url = `https://www.reddit.com/r/stocks/search.json?q=${symbol}&restrict_sr=1&sort=new&limit=${count}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!data.data || !data.data.children) {
      return [];
    }

    return data.data.children.map(item => ({
      title: item.data.title,
      content: item.data.selftext?.substring(0, 200) || '',
      author: item.data.author,
      date: new Date(item.data.created_utc * 1000).toISOString().split('T')[0],
      upvotes: item.data.ups,
      comments: item.data.num_comments,
      url: `https://www.reddit.com${item.data.permalink}`,
      source: 'r/stocks',
      type: 'forum',
    }));
  } catch (err) {
    console.error(`Reddit stocks fetch error: ${err.message}`);
    return [];
  }
}

// Fetch news from Yahoo Finance (no API key required, no anti-bot)
async function fetchYahooFinanceNews(symbol, count = 10) {
  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${symbol}&newsCount=${count}&quotesCount=0`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!data.news || !Array.isArray(data.news)) {
      return [];
    }

    return data.news.slice(0, count).map(item => ({
      title: item.title,
      content: item.summary || '',
      url: item.link,
      date: item.providerPublishTime
        ? new Date(item.providerPublishTime * 1000).toISOString().split('T')[0]
        : '',
      publisher: item.publisher || 'Yahoo Finance',
      related_tickers: item.relatedTickers || [],
      source: 'Yahoo Finance',
      type: 'news',
    }));
  } catch (err) {
    console.error(`Yahoo Finance fetch error: ${err.message}`);
    return [];
  }
}

// Fetch news from Finnhub (free tier: 60 req/min, requires FINNHUB_API_KEY env var)
async function fetchFinnhubNews(symbol, count = 10) {
  // Last 7 days window
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fmt = d => d.toISOString().split('T')[0];

  const url = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fmt(weekAgo)}&to=${fmt(today)}&token=d7p9dvpr01qlb0a984ngd7p9dvpr01qlb0a984o0`;

  try {
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      return [];
    }

    return data.slice(0, count).map(item => ({
      title: item.headline,
      content: item.summary || '',
      url: item.url,
      date: item.datetime
        ? new Date(item.datetime * 1000).toISOString().split('T')[0]
        : '',
      publisher: item.source || 'Finnhub',
      category: item.category || '',
      image: item.image || '',
      source: 'Finnhub',
      type: 'news',
    }));
  } catch (err) {
    console.error(`Finnhub fetch error: ${err.message}`);
    return [];
  }
}

// Fetch news from MarketWatch top-stories RSS, filter by symbol/company mentions
async function fetchMarketWatchRSS(symbol, name, count = 10) {
  const feeds = [
    'https://feeds.content.dowjones.io/public/rss/mw_topstories',
    'https://feeds.content.dowjones.io/public/rss/mw_marketpulse',
    'https://feeds.content.dowjones.io/public/rss/RSSMarketsMain',
  ];

  const tickerRe = new RegExp(`\\b${symbol}\\b`, 'i');
  const nameRe = name ? new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') : null;

  try {
    const xmls = await Promise.all(
      feeds.map(url =>
        fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/rss+xml,application/xml' } })
          .then(r => (r.status === 200 ? r.text() : ''))
          .catch(() => '')
      )
    );

    const items = [];
    for (const xml of xmls) {
      if (!xml) continue;
      const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);
      for (const m of itemMatches) {
        const block = m[1];
        const title = (block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) || [])[1]?.trim();
        const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1]?.trim();
        const desc = (block.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) || [])[1]?.trim() || '';
        const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1]?.trim();

        if (!title || !link) continue;

        const haystack = `${title} ${desc}`;
        const matchTicker = tickerRe.test(haystack);
        const matchName = nameRe ? nameRe.test(haystack) : false;
        if (!matchTicker && !matchName) continue;

        items.push({
          title,
          content: desc.replace(/<[^>]+>/g, '').substring(0, 300),
          url: link,
          date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : '',
          publisher: 'MarketWatch',
          source: 'MarketWatch',
          type: 'news',
        });
      }
    }

    const seen = new Set();
    return items.filter(it => {
      const k = it.url.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    }).slice(0, count);
  } catch (err) {
    console.error(`MarketWatch RSS fetch error: ${err.message}`);
    return [];
  }
}

// Fetch news from NewsAPI.org (free dev tier: 100 req/day, requires NEWSAPI_KEY env var)
async function fetchNewsAPI(symbol, name, count = 10) {
  const apiKey = process.env.NEWSAPI_KEY;
  if (!apiKey) {
    return [];
  }

  const query = name ? `(${symbol} OR "${name}")` : symbol;
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=${count}`;

  try {
    const res = await fetch(url, {
      headers: { 'X-Api-Key': apiKey, 'Accept': 'application/json' },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!data.articles || !Array.isArray(data.articles)) {
      return [];
    }

    return data.articles.slice(0, count).map(item => ({
      title: item.title,
      content: item.description || '',
      url: item.url,
      date: item.publishedAt ? item.publishedAt.split('T')[0] : '',
      publisher: item.source?.name || 'NewsAPI',
      author: item.author || '',
      image: item.urlToImage || '',
      source: 'NewsAPI',
      type: 'news',
    }));
  } catch (err) {
    console.error(`NewsAPI fetch error: ${err.message}`);
    return [];
  }
}

// Fetch Yahoo Finance Conversations. Yahoo's Spot.IM endpoint requires a browser
// session crumb and blocks direct API calls. Returns empty unless YAHOO_CONVERSATIONS_PROXY
// (a Playwright-rendering microservice) is configured. Reddit covers community sentiment otherwise.
async function fetchYahooConversations(symbol, count = 10) {
  const proxyUrl = process.env.YAHOO_CONVERSATIONS_PROXY;
  if (!proxyUrl) {
    return [];
  }

  try {
    const res = await fetch(`${proxyUrl}?symbol=${encodeURIComponent(symbol)}&count=${count}`, {
      headers: { 'Accept': 'application/json' },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data?.messages)) {
      return [];
    }

    return data.messages.slice(0, count).map(item => ({
      title: (item.text || '').substring(0, 100) + ((item.text?.length || 0) > 100 ? '...' : ''),
      content: item.text || '',
      author: item.author || 'Anonymous',
      date: item.created_at ? item.created_at.split('T')[0] : '',
      likes: item.likes || 0,
      url: item.url || `https://finance.yahoo.com/quote/${symbol}/community`,
      sentiment: item.sentiment || 'neutral',
      source: 'Yahoo Conversations',
      type: 'social',
    }));
  } catch (err) {
    console.error(`Yahoo Conversations fetch error: ${err.message}`);
    return [];
  }
}

// Fetch Seeking Alpha news via RSS — Playwright bypasses Cloudflare WAF
async function fetchSeekingAlpha(symbol, count = 10) {
  const url = `https://seekingalpha.com/api/sa/combined/${symbol}.xml`;
  return browserLimit(() => scrapeOne(url, async (page) => {
    // page.content() returns the XML (browser may wrap in <html><body><pre>; <item> tags still present)
    const xml = await page.content();
    if (!xml.includes('<item>')) return [];

    const items = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);
    for (const m of itemMatches) {
      if (items.length >= count) break;
      const block = m[1];

      const title = (block.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) || [])[1]?.trim();
      const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1]?.trim();
      const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1]?.trim();
      const author = (block.match(/<sa:author_name>([\s\S]*?)<\/sa:author_name>/) || [])[1]?.trim() || '';
      const desc = (block.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) || [])[1]?.trim() || '';

      if (!title || !link) continue;

      const itemType = link.includes('/article/') ? 'analysis'
                     : link.includes('MarketCurrent') || link.includes('/news') ? 'news'
                     : 'news';

      items.push({
        title,
        content: desc.replace(/<[^>]+>/g, '').substring(0, 300),
        url: link,
        date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : '',
        author,
        publisher: 'Seeking Alpha',
        source: 'Seeking Alpha',
        type: itemType,
      });
    }
    return items;
  }, { locale: 'en-US' }));
}

// Fetch StockTwits messages — token fast-path, then Playwright page scrape for Cloudflare bypass
async function fetchStockTwits(symbol, count = 10) {
  const token = process.env.STOCKTWITS_TOKEN;

  // Fast path: authenticated API endpoint works reliably when token is set
  if (token) {
    try {
      const url = `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json?limit=${count}&access_token=${token}`;
      const res = await fetch(url, {
        headers: {
          'Authorization': `OAuth ${token}`,
          'Accept': 'application/json',
        },
      });
      if (res.status === 200) {
        const ctype = res.headers.get('content-type') || '';
        if (ctype.includes('json')) {
          const data = await res.json();
          if (data?.messages) {
            return data.messages.slice(0, count).map(item => ({
              title: (item.body || '').substring(0, 100) + ((item.body?.length || 0) > 100 ? '...' : ''),
              content: item.body || '',
              author: item.user?.username || 'Anonymous',
              date: item.created_at ? new Date(item.created_at).toISOString().split('T')[0] : '',
              likes: item.likes?.total || 0,
              url: `https://stocktwits.com/${item.user?.username}/message/${item.id}`,
              sentiment: item.entities?.sentiment?.basic?.toLowerCase() || 'neutral',
              source: 'StockTwits',
              type: 'social',
            }));
          }
        }
      }
    } catch (_) { /* fall through to browser */ }
  }

  // Browser path: navigate to the symbol page (bypasses Cloudflare challenge)
  return browserLimit(() => scrapeOne(
    `https://stocktwits.com/symbol/${symbol}`,
    async (page) => {
      await page.waitForSelector('[data-testid="message-item"], .st_2bT4b', { timeout: 15000 }).catch(() => {});
      return page.evaluate((maxCount, sym) => {
        const items = document.querySelectorAll('[data-testid="message-item"]');
        const results = [];
        for (const item of items) {
          if (results.length >= maxCount) break;
          const bodyEl = item.querySelector('[data-testid="message-body"], p');
          const body = bodyEl?.textContent?.trim() || '';
          if (!body) continue;
          const authorEl = item.querySelector('[data-testid="username"], a[href^="/"]');
          const author = authorEl?.textContent?.trim() || 'Anonymous';
          const timeEl = item.querySelector('time');
          const dateStr = timeEl?.getAttribute('datetime') || '';
          results.push({
            title: body.substring(0, 100) + (body.length > 100 ? '...' : ''),
            content: body,
            author,
            date: dateStr ? new Date(dateStr).toISOString().split('T')[0] : '',
            likes: 0,
            url: `https://stocktwits.com/symbol/${sym}`,
            sentiment: 'neutral',
            source: 'StockTwits',
            type: 'social',
          });
        }
        return results;
      }, count, symbol);
    },
    { locale: 'en-US', waitUntil: 'networkidle' },
  ));
}

// Fetch Bogleheads forum discussions — Playwright renders phpBB search results reliably
async function fetchBogleheads(symbol, count = 10) {
  const searchTerm = encodeURIComponent(symbol);
  const url = `https://www.bogleheads.org/forum/search.php?keywords=${searchTerm}&terms=all&author=&fid%5B%5D=1&sc=1&sf=titleonly&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&submit=Search`;
  return browserLimit(() => scrapeOne(url, async (page) => {
    return page.evaluate((maxCount) => {
      const posts = [];
      const topicDivs = document.querySelectorAll('div.topic-title');
      for (const div of topicDivs) {
        if (posts.length >= maxCount) break;
        const link = div.querySelector('a');
        if (!link) continue;
        const title = link.textContent.trim();
        const href = link.getAttribute('href') || '';
        posts.push({
          title,
          url: href.startsWith('http') ? href : `https://www.bogleheads.org/forum/${href}`,
          source: 'Bogleheads',
          type: 'forum',
        });
      }
      return posts;
    }, count);
  }, { locale: 'en-US' }));
}

// Main function: search US stock news and community data
export async function searchUSNews({ symbol, name, source = 'all', count = 10 }) {
  // Clean symbol (remove exchange prefix if present)
  const cleanSymbol = symbol.replace(/^(NASDAQ:|NYSE:)/, '').toUpperCase();

  const result = {
    success: true,
    symbol: cleanSymbol,
    name: name || null,
    market: 'US',
    news: [],
    social: [],
    forum: [],
    sources_status: {},
    search_time: new Date().toISOString(),
  };

  const trackSource = (srcName, fn) =>
    fn().then(items => {
      const arr = Array.isArray(items) ? items : [];
      const errored = arr.find(it => it && it.error);
      result.sources_status[srcName] = {
        ok: !errored,
        count: arr.filter(it => !it.error).length,
        error: errored?.error || null,
      };
      return arr;
    }).catch(err => {
      result.sources_status[srcName] = { ok: false, count: 0, error: err.message };
      return [];
    });

  const promises = [];

  // Fetch news from Yahoo Finance + Finnhub + MarketWatch RSS + NewsAPI + Seeking Alpha (parallel, deduplicated by URL)
  if (source === 'all' || source === 'news') {
    promises.push(
      Promise.all([
        trackSource('Yahoo Finance', () => fetchYahooFinanceNews(cleanSymbol, count)),
        trackSource('Finnhub',       () => fetchFinnhubNews(cleanSymbol, count)),
        trackSource('MarketWatch',   () => fetchMarketWatchRSS(cleanSymbol, name, count)),
        trackSource('NewsAPI',       () => fetchNewsAPI(cleanSymbol, name, count)),
        trackSource('Seeking Alpha', () => fetchSeekingAlpha(cleanSymbol, count)),
      ]).then(([yahoo, finnhub, mw, newsapi, sa]) => {
        const seen = new Set();
        const merged = [];
        for (const item of [...yahoo, ...finnhub, ...mw, ...newsapi, ...sa]) {
          const key = (item.url || item.title).toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            merged.push(item);
          }
        }
        // Sort newest first
        merged.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        result.news = merged.slice(0, count * 2); // allow more since we have 5 sources
      })
    );
  }

  // Social: Yahoo Conversations + StockTwits (both degrade gracefully without auth)
  if (source === 'all' || source === 'social') {
    promises.push(
      Promise.all([
        trackSource('Yahoo Conversations', () => fetchYahooConversations(cleanSymbol, count)),
        trackSource('StockTwits',          () => fetchStockTwits(cleanSymbol, count)),
      ]).then(([yahooConv, stockTwits]) => {
        result.social = [...yahooConv, ...stockTwits];
      })
    );
  }

  // Fetch forum discussions from Reddit and Bogleheads (covers community sentiment)
  if (source === 'all' || source === 'social' || source === 'forum') {
    const forumCount = Math.ceil(count / 3);
    promises.push(
      Promise.all([
        trackSource('r/wallstreetbets', () => fetchRedditWSB(cleanSymbol, forumCount)),
        trackSource('r/stocks',         () => fetchRedditStocks(cleanSymbol, forumCount)),
        trackSource('Bogleheads',       () => fetchBogleheads(cleanSymbol, forumCount)),
      ]).then(results => {
        result.forum = [...results[0], ...results[1], ...results[2]];
      })
    );
  }

  // Fetch all data in parallel
  await Promise.all(promises);

  // Filter out errors
  result.news = result.news.filter(item => !item.error);
  result.social = result.social.filter(item => !item.error);
  result.forum = result.forum.filter(item => !item.error);

  result.total_count = result.news.length + result.social.length + result.forum.length;

  // 每个来源抓取条数统计（基于最终去重后的数组）
  const sourceStats = {};
  for (const item of [...result.news, ...result.social, ...result.forum]) {
    const src = item.source || 'Unknown';
    sourceStats[src] = (sourceStats[src] || 0) + 1;
  }
  result.source_stats = sourceStats;

  // Sentiment analysis on social + forum posts
  const allPosts = [...result.social, ...result.forum];
  if (allPosts.length > 0) {
    result.sentiment_analysis = analyzeSentiment(allPosts);
    result.heat_metrics = calculateHeat(allPosts);
  }

  // Generate analysis hint
  let analysisHint = `Based on ${result.total_count} items from Yahoo Finance, Finnhub, MarketWatch, NewsAPI, Seeking Alpha, Yahoo Conversations, StockTwits, Reddit, and Bogleheads:\n`;
  analysisHint += '1) Market sentiment (bullish/bearish/neutral ratio)\n';
  analysisHint += '2) Potential price impact (catalysts and risks)\n';
  analysisHint += '3) Key opportunities and concerns\n';

  result.analysis_hint = analysisHint;

  return result;
}

// Get overall US market sentiment
export async function getUSMarketSentiment() {
  const result = {
    success: true,
    date: new Date().toISOString().split('T')[0],
    market_views: [],
    sentiment_analysis: null,
    recommendation: null,
  };

  // Fetch from r/wallstreetbets hot posts (general market sentiment)
  try {
    const res = await fetch('https://www.reddit.com/r/wallstreetbets/hot.json?limit=20', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      if (data.data && data.data.children) {
        result.market_views = data.data.children.map(item => ({
          title: item.data.title,
          content: item.data.selftext?.substring(0, 300) || '',
          upvotes: item.data.ups,
          comments: item.data.num_comments,
          url: `https://www.reddit.com${item.data.permalink}`,
          source: 'r/wallstreetbets',
        }));

        // Analyze sentiment
        const sentiment = analyzeSentiment(result.market_views);
        if (sentiment) {
          result.sentiment_analysis = sentiment;

          // Generate recommendation
          const bullishRatio = parseFloat(sentiment.bullish_ratio);
          const bearishRatio = parseFloat(sentiment.bearish_ratio);

          if (bullishRatio > bearishRatio * 1.5) {
            result.recommendation = {
              action: 'Consider Long Positions',
              confidence: 'Moderate',
              reason: 'Market sentiment is bullish, positive views dominate',
            };
          } else if (bearishRatio > bullishRatio * 1.5) {
            result.recommendation = {
              action: 'Cautious or Short',
              confidence: 'Moderate',
              reason: 'Market sentiment is bearish, negative views dominate',
            };
          } else {
            result.recommendation = {
              action: 'Wait and Watch',
              confidence: 'Low',
              reason: 'Market sentiment is mixed, bulls and bears balanced',
            };
          }
        }
      }
    }
  } catch (err) {
    console.error(`US market sentiment fetch error: ${err.message}`);
  }

  return result;
}
