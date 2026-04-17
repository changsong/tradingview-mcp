/**
 * Core news access logic.
 * Extracts news from TradingView's details panel.
 */
import { evaluate, evaluateAsync } from '../connection.js';

/**
 * Get news for the current symbol from the details panel.
 * @param {Object} options
 * @param {string} [options.symbol] - Symbol to get news for (optional, uses current chart symbol if not provided)
 * @returns {Promise<Object>} News data
 */
export async function getNews({ symbol } = {}) {
  // If symbol provided, switch to it first
  if (symbol) {
    await evaluateAsync(`
      (function() {
        return new Promise(function(resolve) {
          try {
            var chart = window.TradingViewApi._activeChartWidgetWV.value();
            chart._chartWidget.model().mainSeries().setSymbol(${JSON.stringify(symbol)});
            setTimeout(function() { resolve({ success: true }); }, 2000);
          } catch(e) {
            resolve({ error: e.message });
          }
        });
      })()
    `);
    await new Promise(r => setTimeout(r, 1000));
  }

  // Ensure details panel is open
  await evaluate(`
    (function() {
      var baseBtn = document.querySelector('[data-name="base"]');
      if (baseBtn) {
        var rightPanel = document.querySelector('[class*="layout__area--right"]');
        if (!rightPanel || rightPanel.offsetWidth < 100) {
          baseBtn.click();
        }
      }
    })()
  `);
  await new Promise(r => setTimeout(r, 1500));

  // Extract news from details panel
  const result = await evaluate(`
    (function() {
      // Get current symbol info
      var symbolInfo = null;
      try {
        var chart = window.TradingViewApi._activeChartWidgetWV.value();
        var series = chart._chartWidget.model().mainSeries();
        symbolInfo = {
          symbol: series.symbol(),
          name: series.symbolInfo() ? series.symbolInfo().description : null,
          exchange: series.symbolInfo() ? series.symbolInfo().exchange : null
        };
      } catch(e) {
        symbolInfo = { error: e.message };
      }

      // Find details panel
      var detailWidget = document.querySelector('[class*="widgetbar-widget-detail"]');
      if (!detailWidget) {
        return {
          success: false,
          error: 'Details panel not found. Make sure the right sidebar is open.',
          symbol: symbolInfo
        };
      }

      var body = detailWidget.querySelector('.widgetbar-widgetbody');
      if (!body) {
        return {
          success: false,
          error: 'Details panel body not found',
          symbol: symbolInfo
        };
      }

      var text = body.textContent || body.innerText || '';
      var news = [];

      // Non-news keywords to filter out
      var nonNewsKeywords = [
        '最后付款', '最后除息', '付款日期', '除息日',
        '更多信息', '损益表', '年度', '季度', '收入', '净收入', '净利润',
        '财务数据', '表现', '季节性', '技术指标', '分析师', '评级',
        '价格目标', '查看预测', '债券', '波动率', '概览', '网站', '员工',
        'Last payment', 'Ex-dividend', 'More info', 'Income statement',
        'Revenue', 'Net income', 'Financial data', 'Performance', 'Seasonality',
        'Technical', 'Analyst', 'Rating', 'Price target', 'Forecast', 'Bond',
        'Volatility', 'Overview', 'Website', 'Employees'
      ];

      function isValidNews(title) {
        if (!title || title.length < 10) return false;
        for (var i = 0; i < nonNewsKeywords.length; i++) {
          if (title.indexOf(nonNewsKeywords[i]) !== -1) return false;
        }
        // Filter out titles that are mostly numbers or special characters
        var alphaCount = (title.match(/[a-zA-Z\\u4e00-\\u9fa5]/g) || []).length;
        if (alphaCount < title.length * 0.3) return false;
        return true;
      }

      // Method 1: Find news headline directly after market status (most reliable)
      // Pattern: "休市" or "Closed" followed by timestamp, then news headline before "关键统计"
      // Look for the news between market status and "关键统计" (Key stats)
      var headlineMatch = text.match(/(?:休市|盘前|盘后|Closed|Pre-market|After-hours)[^关键统计Key stats]*?(?:最后更新于[^关键统计]*?|Last updated[^关键统计]*?)?([A-Z][^关键统计Key stats]{10,250}?)(?=关键统计|Key stats)/);
      if (headlineMatch && headlineMatch[1]) {
        var headline = headlineMatch[1].trim();
        // Remove any leading date
        headline = headline.replace(/^\\d{4}年\\d{1,2}月\\d{1,2}日/, '').trim();
        if (isValidNews(headline)) {
          // Try to extract date from earlier in the text
          var dateInText = text.match(/(\\d{4}年\\d{1,2}月\\d{1,2}日)/);
          news.push({
            date: dateInText ? dateInText[1] : null,
            title: headline,
            type: 'headline'
          });
        }
      }

      // Method 2: Find news block elements with specific class
      var newsBlocks = body.querySelectorAll('[class*="block-"]');
      for (var i = 0; i < newsBlocks.length; i++) {
        var blockText = newsBlocks[i].textContent.trim();
        // Check if it contains a date and looks like news
        var dateMatch = blockText.match(/(\\d{4}年\\d{1,2}月\\d{1,2}日|\\w{3,9} \\d{1,2}, \\d{4})/);
        if (dateMatch) {
          var title = blockText.replace(dateMatch[0], '').trim();
          if (isValidNews(title)) {
            // Check if not already added
            var isDuplicate = news.some(function(n) { return n.title === title; });
            if (!isDuplicate) {
              news.push({
                date: dateMatch[1],
                title: title.substring(0, 200),
                type: 'block'
              });
            }
          }
        }
      }

      // Method 3: Find English news headlines (capital letter start, reasonable length)
      var englishMatch = text.match(/(?:Closed|Pre-market|After-hours)[^A-Z]*?([A-Z][a-z][^关键统计Key stats\\d]{20,200}?)(?=关键统计|Key stats|\\d)/);
      if (englishMatch && englishMatch[1]) {
        var engTitle = englishMatch[1].trim();
        if (isValidNews(engTitle)) {
          var isDup = news.some(function(n) { return n.title.indexOf(engTitle.substring(0, 30)) !== -1; });
          if (!isDup) {
            news.push({
              title: engTitle,
              type: 'headline'
            });
          }
        }
      }

      // Method 4: Find news links
      var links = body.querySelectorAll('a[href*="news"], a[href*="article"], a[href*="story"]');
      for (var j = 0; j < links.length; j++) {
        var linkText = links[j].textContent.trim();
        if (isValidNews(linkText)) {
          var isLinkDup = news.some(function(n) { return n.title === linkText; });
          if (!isLinkDup) {
            news.push({
              title: linkText.substring(0, 200),
              url: links[j].href,
              type: 'link'
            });
          }
        }
      }

      return {
        success: true,
        symbol: symbolInfo,
        news_count: news.length,
        news: news,
        raw_text_preview: text.substring(0, 300)
      };
    })()
  `);

  return result;
}

/**
 * Get news URLs configuration from TradingView.
 * @returns {Promise<Object>} News service URLs
 */
export async function getNewsConfig() {
  const config = await evaluate(`
    (function() {
      return {
        NEWS_SERVICE_URL: window.NEWS_SERVICE_URL || null,
        NEWS_MEDIATOR_URL: window.NEWS_MEDIATOR_URL || null,
        NEWS_STREAMING_URL: window.NEWS_STREAMING_URL || null,
        ECONOMIC_CALENDAR_URL: window.ECONOMIC_CALENDAR_URL || null,
        EARNINGS_CALENDAR_URL: window.EARNINGS_CALENDAR_URL || null
      };
    })()
  `);

  return {
    success: true,
    ...config
  };
}
