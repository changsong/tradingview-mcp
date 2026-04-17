/**
 * US Stock News and Community Data Fetcher
 * Fetches from Reddit, Seeking Alpha, StockTwits, and Bogleheads
 */

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

// Fetch StockTwits messages
async function fetchStockTwits(symbol, count = 10) {
  // StockTwits public API
  const url = `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json?limit=${count}`;

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
    if (!data.messages) {
      return [];
    }

    return data.messages.map(item => ({
      title: item.body.substring(0, 100) + (item.body.length > 100 ? '...' : ''),
      content: item.body,
      author: item.user?.username || 'Anonymous',
      date: new Date(item.created_at).toISOString().split('T')[0],
      likes: item.likes?.total || 0,
      url: `https://stocktwits.com/${item.user?.username}/message/${item.id}`,
      sentiment: item.entities?.sentiment?.basic || 'neutral',
      source: 'StockTwits',
      type: 'social',
    }));
  } catch (err) {
    console.error(`StockTwits fetch error: ${err.message}`);
    return [];
  }
}

// Fetch Seeking Alpha news (via web scraping)
async function fetchSeekingAlpha(symbol, count = 10) {
  const url = `https://seekingalpha.com/symbol/${symbol}/news`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const html = await res.text();

    // Extract article data from JSON-LD or data attributes
    const articles = [];
    const articleMatches = html.matchAll(/<article[^>]*data-test-id="post-list-item"[^>]*>(.*?)<\/article>/gs);

    for (const match of articleMatches) {
      if (articles.length >= count) break;

      const articleHtml = match[1];

      // Extract title
      const titleMatch = articleHtml.match(/<a[^>]*data-test-id="post-list-item-title"[^>]*>([^<]+)<\/a>/);
      const title = titleMatch ? titleMatch[1].trim() : '';

      // Extract URL
      const urlMatch = articleHtml.match(/<a[^>]*data-test-id="post-list-item-title"[^>]*href="([^"]+)"/);
      const articleUrl = urlMatch ? `https://seekingalpha.com${urlMatch[1]}` : '';

      // Extract date
      const dateMatch = articleHtml.match(/data-test-id="post-list-date"[^>]*>([^<]+)</);
      const date = dateMatch ? dateMatch[1].trim() : '';

      if (title && articleUrl) {
        articles.push({
          title: title,
          url: articleUrl,
          date: date,
          source: 'Seeking Alpha',
          type: 'news',
        });
      }
    }

    return articles;
  } catch (err) {
    console.error(`Seeking Alpha fetch error: ${err.message}`);
    return [];
  }
}

// Fetch Bogleheads forum discussions
async function fetchBogleheads(symbol, count = 10) {
  // Bogleheads forum search
  const searchTerm = encodeURIComponent(symbol);
  const url = `https://www.bogleheads.org/forum/search.php?keywords=${searchTerm}&terms=all&author=&fid%5B%5D=1&sc=1&sf=titleonly&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&submit=Search`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const html = await res.text();
    const posts = [];

    // Extract topic rows
    const topicMatches = html.matchAll(/<div class="topic-title"[^>]*>.*?<a href="([^"]+)"[^>]*>([^<]+)<\/a>.*?<\/div>/gs);

    for (const match of topicMatches) {
      if (posts.length >= count) break;

      const url = match[1];
      const title = match[2].trim();

      posts.push({
        title: title,
        url: url.startsWith('http') ? url : `https://www.bogleheads.org/forum/${url}`,
        source: 'Bogleheads',
        type: 'forum',
      });
    }

    return posts;
  } catch (err) {
    console.error(`Bogleheads fetch error: ${err.message}`);
    return [];
  }
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
    search_time: new Date().toISOString(),
  };

  const promises = [];

  // Fetch news from Seeking Alpha
  if (source === 'all' || source === 'news') {
    promises.push(
      fetchSeekingAlpha(cleanSymbol, count)
        .then(articles => { result.news = articles; })
    );
  }

  // Fetch social media from StockTwits
  if (source === 'all' || source === 'social') {
    promises.push(
      fetchStockTwits(cleanSymbol, count)
        .then(messages => { result.social = messages; })
    );
  }

  // Fetch forum discussions from Reddit and Bogleheads
  if (source === 'all' || source === 'forum') {
    const forumCount = Math.ceil(count / 3);
    promises.push(
      Promise.all([
        fetchRedditWSB(cleanSymbol, forumCount),
        fetchRedditStocks(cleanSymbol, forumCount),
        fetchBogleheads(cleanSymbol, forumCount),
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

  // Sentiment analysis on social + forum posts
  const allPosts = [...result.social, ...result.forum];
  if (allPosts.length > 0) {
    result.sentiment_analysis = analyzeSentiment(allPosts);
    result.heat_metrics = calculateHeat(allPosts);
  }

  // Generate analysis hint
  let analysisHint = `Based on ${result.total_count} items from Reddit, StockTwits, Seeking Alpha, and Bogleheads:\n`;
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
