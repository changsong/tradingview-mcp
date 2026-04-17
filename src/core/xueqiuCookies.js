/**
 * Xueqiu (雪球) Cookie Manager
 * 管理雪球Cookie，支持手动添加和自动保存
 */

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const COOKIE_FILE = join(__dirname, '../../xueqiu_cookies.json');

/**
 * 保存Cookie到文件
 */
export function saveCookies(cookies) {
  try {
    writeFileSync(COOKIE_FILE, JSON.stringify(cookies, null, 2), 'utf-8');
    console.log(`✅ Cookies saved to ${COOKIE_FILE}`);
    return true;
  } catch (err) {
    console.error(`❌ Failed to save cookies: ${err.message}`);
    return false;
  }
}

/**
 * 从文件加载Cookie
 */
export function loadCookies() {
  try {
    if (!existsSync(COOKIE_FILE)) {
      return null;
    }
    const data = readFileSync(COOKIE_FILE, 'utf-8');
    const cookies = JSON.parse(data);

    // 修正sameSite值以兼容Playwright
    const fixedCookies = cookies.map(c => {
      let sameSite = c.sameSite || 'Lax';
      if (sameSite === 'unspecified' || sameSite === 'no_restriction') {
        sameSite = 'Lax';
      }
      return { ...c, sameSite };
    });

    console.log(`✅ Cookies loaded from ${COOKIE_FILE}`);
    return fixedCookies;
  } catch (err) {
    console.error(`❌ Failed to load cookies: ${err.message}`);
    return null;
  }
}

/**
 * 检查Cookie是否存在
 */
export function hasCookies() {
  return existsSync(COOKIE_FILE);
}

/**
 * 删除Cookie文件
 */
export function deleteCookies() {
  try {
    if (existsSync(COOKIE_FILE)) {
      unlinkSync(COOKIE_FILE);
      console.log(`✅ Cookies deleted`);
      return true;
    }
    return false;
  } catch (err) {
    console.error(`❌ Failed to delete cookies: ${err.message}`);
    return false;
  }
}

/**
 * 从浏览器导出的Cookie字符串解析为Playwright格式
 * 支持两种格式：
 * 1. Netscape格式（EditThisCookie导出）
 * 2. JSON格式（手动复制）
 */
export function parseCookieString(cookieString) {
  try {
    // 尝试JSON格式
    const cookies = JSON.parse(cookieString);
    if (Array.isArray(cookies)) {
      return cookies.map(c => {
        // 修正sameSite值：Playwright只接受 Strict, Lax, None
        let sameSite = c.sameSite || 'Lax';
        if (sameSite === 'unspecified' || sameSite === 'no_restriction') {
          sameSite = 'Lax';
        }

        return {
          name: c.name,
          value: c.value,
          domain: c.domain || '.xueqiu.com',
          path: c.path || '/',
          expires: c.expires || c.expirationDate || -1,
          httpOnly: c.httpOnly || false,
          secure: c.secure || false,
          sameSite: sameSite,
        };
      });
    }
  } catch (e) {
    // 不是JSON格式，尝试其他格式
  }

  // 尝试 key=value; key2=value2 格式
  const cookies = [];
  const pairs = cookieString.split(';').map(s => s.trim());

  for (const pair of pairs) {
    const [name, ...valueParts] = pair.split('=');
    if (name && valueParts.length > 0) {
      cookies.push({
        name: name.trim(),
        value: valueParts.join('=').trim(),
        domain: '.xueqiu.com',
        path: '/',
        expires: -1,
        httpOnly: false,
        secure: true,
        sameSite: 'Lax',
      });
    }
  }

  return cookies.length > 0 ? cookies : null;
}

/**
 * 验证Cookie是否有效（检查必需的字段）
 */
export function validateCookies(cookies) {
  if (!Array.isArray(cookies) || cookies.length === 0) {
    return false;
  }

  // 雪球需要的关键Cookie
  const requiredCookies = ['xq_a_token', 'xq_r_token'];
  const cookieNames = cookies.map(c => c.name);

  for (const required of requiredCookies) {
    if (!cookieNames.includes(required)) {
      console.warn(`⚠️  Missing required cookie: ${required}`);
      return false;
    }
  }

  return true;
}

/**
 * 从Cookie字符串创建并保存
 */
export function setCookiesFromString(cookieString) {
  const cookies = parseCookieString(cookieString);

  if (!cookies) {
    console.error('❌ Failed to parse cookie string');
    return false;
  }

  if (!validateCookies(cookies)) {
    console.error('❌ Invalid cookies (missing required fields)');
    return false;
  }

  return saveCookies(cookies);
}

/**
 * 获取Cookie信息（用于调试）
 */
export function getCookieInfo() {
  if (!hasCookies()) {
    return {
      exists: false,
      message: 'No cookies found',
    };
  }

  const cookies = loadCookies();
  if (!cookies) {
    return {
      exists: true,
      valid: false,
      message: 'Failed to load cookies',
    };
  }

  const valid = validateCookies(cookies);
  const cookieNames = cookies.map(c => c.name);

  return {
    exists: true,
    valid: valid,
    count: cookies.length,
    names: cookieNames,
    message: valid ? 'Cookies are valid' : 'Cookies are invalid (missing required fields)',
  };
}
