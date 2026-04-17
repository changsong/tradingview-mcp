/**
 * Xueqiu (雪球) data fetcher using Playwright
 * 使用Playwright绕过WAF限制获取雪球数据
 * 支持Cookie管理以绕过滑动验证
 * 支持CDP模式连接真实浏览器
 */

import { chromium } from 'playwright';
import { existsSync } from 'fs';
import { loadCookies, saveCookies, hasCookies } from './xueqiuCookies.js';

// CDP模式开关（环境变量控制）
const USE_CDP = process.env.XUEQIU_USE_CDP === 'true';
const CDP_URL = process.env.XUEQIU_CDP_URL || 'http://localhost:9222';

// 查找系统Chrome路径
function findChromeExecutable() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
  ];

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  return null; // 使用Playwright自带的浏览器
}

// 获取雪球股票讨论
export async function fetchXueqiuPosts(code, count = 10) {
  // 运行时检查CDP模式（而不是模块加载时）
  const useCDP = process.env.XUEQIU_USE_CDP === 'true';

  // 如果启用CDP模式，使用CDP连接
  if (useCDP) {
    return fetchXueqiuPostsCDP(code, count);
  }

  // 否则使用传统模式（启动新浏览器）
  return fetchXueqiuPostsTraditional(code, count);
}

// CDP模式：连接到已启动的Chrome
async function fetchXueqiuPostsCDP(code, count) {
  // 判断股票类型并生成雪球代码
  let xqCode;
  if (/^\d+$/.test(code)) {
    // 纯数字，A股代码
    xqCode = code.startsWith('6') ? `SH${code}` : `SZ${code}`;
  } else {
    // 包含字母，美股或其他市场代码
    xqCode = code.toUpperCase();
  }
  const url = `https://xueqiu.com/S/${xqCode}`;

  try {
    console.log('🔌 使用CDP模式连接Chrome...');
    const cdpUrl = process.env.XUEQIU_CDP_URL || 'http://localhost:9222';
    const browser = await chromium.connectOverCDP(cdpUrl);

    const contexts = browser.contexts();
    if (contexts.length === 0) {
      throw new Error('未找到浏览器上下文，请确保Chrome已启动');
    }

    const context = contexts[0];
    const pages = context.pages();

    let page;
    if (pages.length > 0) {
      page = pages[0];
    } else {
      page = await context.newPage();
    }

    // 访问页面
    console.log(`📍 访问: ${url}`);
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 60000,
    }).catch(() => {});

    console.log('⏳ 等待页面加载...');
    await page.waitForTimeout(8000);

    // 改进的验证码检测
    const pageInfo = await page.evaluate(() => {
      // 检查是否有验证码弹窗或遮罩层
      const captchaModal = document.querySelector('[class*="captcha"]') ||
                          document.querySelector('[class*="verify"]') ||
                          document.querySelector('#nc_1_wrapper');

      // 检查是否有正常的股票内容
      const hasStockContent = document.querySelector('[class*="stock"]') ||
                             document.querySelector('[class*="quote"]') ||
                             window.SNB ||
                             document.querySelector('[class*="timeline"]');

      return {
        title: document.title,
        hasCaptchaElement: !!captchaModal && captchaModal.offsetParent !== null,
        hasStockContent: !!hasStockContent,
      };
    });

    console.log(`📄 页面标题: ${pageInfo.title}`);

    // 只有当明确检测到验证码元素且没有股票内容时才报错
    if (pageInfo.hasCaptchaElement && !pageInfo.hasStockContent) {
      console.log('⚠️  检测到验证码弹窗，请在Chrome中手动完成验证');
      console.log('💡 提示: 完成验证后，保持页面打开，然后重新运行');
      return [];
    }

    console.log('✅ 开始提取数据...');

    // 提取数据
    const posts = await extractPostsFromPage(page, count);

    // 注意: 不关闭browser，因为它是外部Chrome实例
    return formatPosts(posts);

  } catch (err) {
    console.error(`雪球数据获取失败 (CDP): ${err.message}`);
    return [];
  }
}

// 传统模式：启动新浏览器实例
async function fetchXueqiuPostsTraditional(code, count) {
  // 判断股票类型并生成雪球代码
  let xqCode;
  if (/^\d+$/.test(code)) {
    // 纯数字，A股代码
    xqCode = code.startsWith('6') ? `SH${code}` : `SZ${code}`;
  } else {
    // 包含字母，美股或其他市场代码
    xqCode = code.toUpperCase();
  }
  const url = `https://xueqiu.com/S/${xqCode}`;

  let browser = null;

  try {
    const chromePath = findChromeExecutable();
    const launchOptions = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    };

    if (chromePath) {
      launchOptions.executablePath = chromePath;
      launchOptions.channel = undefined;
    }

    browser = await chromium.launch(launchOptions);

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1920, height: 1080 },
      locale: 'zh-CN',
      timezoneId: 'Asia/Shanghai',
      extraHTTPHeaders: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0',
      },
    });

    // 加载保存的Cookie
    if (hasCookies()) {
      const cookies = loadCookies();
      if (cookies && Array.isArray(cookies)) {
        await context.addCookies(cookies);
        console.log('✅ Loaded saved cookies for Xueqiu');
      }
    }

    const page = await context.newPage();

    // 先访问首页建立会话
    console.log('🌐 正在访问雪球首页...');
    await page.goto('https://xueqiu.com', {
      waitUntil: 'networkidle',
      timeout: 30000,
    }).catch(err => {
      console.log('⚠️  首页加载超时，继续...');
    });

    await page.waitForTimeout(2000);

    // 访问股票页面
    console.log(`🌐 正在访问股票页面: ${xqCode}...`);
    const response = await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 60000,
    }).catch(err => {
      console.log('⚠️  页面加载超时，尝试继续...');
      return null;
    });

    // 等待内容加载
    await page.waitForTimeout(5000);

    // 提取数据
    const posts = await extractPostsFromPage(page, count);

    await browser.close();

    return formatPosts(posts);

  } catch (err) {
    console.error(`雪球数据获取失败: ${err.message}`);

    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        // 忽略关闭错误
      }
    }

    return [];
  }
}

// 从页面提取帖子数据
async function extractPostsFromPage(page, count) {
  return await page.evaluate((maxCount) => {
    const results = [];

    // 方法1: 从window.SNB提取
    if (window.SNB && window.SNB.statuses && Array.isArray(window.SNB.statuses)) {
      const statuses = window.SNB.statuses;
      for (let i = 0; i < Math.min(statuses.length, maxCount); i++) {
        const item = statuses[i];
        results.push({
          title: item.title || item.text?.substring(0, 100) || '',
          content: item.text || '',
          author: item.user?.screen_name || '',
          date: item.created_at ? new Date(item.created_at).toISOString().split('T')[0] : '',
          replies: item.reply_count || 0,
          views: item.view_count || 0,
          url: item.target ? `https://xueqiu.com${item.target}` : '',
        });
      }
      return results;
    }

    // 方法2: 从DOM提取
    const timelineItems = document.querySelectorAll('[class*="timeline"], [class*="status"]');

    for (const item of timelineItems) {
      if (results.length >= maxCount) break;

      try {
        const contentEl = item.querySelector('[class*="content"], [class*="text"]');
        const content = contentEl ? contentEl.textContent.trim() : '';

        if (!content || content.length < 10) continue;

        const authorEl = item.querySelector('[class*="user"], [class*="author"]');
        const author = authorEl ? authorEl.textContent.trim() : '';

        const timeEl = item.querySelector('[class*="time"], [class*="date"]');
        const time = timeEl ? timeEl.textContent.trim() : '';

        const replyEl = item.querySelector('[class*="reply"], [class*="comment"]');
        const replyText = replyEl ? replyEl.textContent.trim() : '0';
        const replies = parseInt(replyText.match(/\d+/)?.[0] || '0');

        const linkEl = item.querySelector('a[href*="/status/"]');
        const link = linkEl ? linkEl.getAttribute('href') : '';

        results.push({
          title: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
          content: content,
          author: author,
          date: time,
          replies: replies,
          views: 0,
          url: link ? (link.startsWith('http') ? link : `https://xueqiu.com${link}`) : '',
        });
      } catch (e) {
        continue;
      }
    }

    return results;
  }, count);
}

// 格式化帖子数据
function formatPosts(posts) {
  return posts.map(post => ({
    title: post.title,
    content: post.content,
    source: '雪球',
    date: post.date || new Date().toISOString().split('T')[0],
    replies: post.replies || 0,
    views: post.views || 0,
    author: post.author,
    url: post.url,
    type: 'forum',
  }));
}

// 导出关闭函数（兼容性）
export async function closeBrowser() {
  // Playwright自动管理浏览器生命周期
}
