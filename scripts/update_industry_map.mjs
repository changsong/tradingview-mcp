#!/usr/bin/env node
/**
 * Update watchlist/cn_industry.json from EastMoney F10 API.
 *
 * Reads cn_selected.txt, fetches industry classification for each stock,
 * and writes the mapping to cn_industry.json.
 *
 * Usage: node scripts/update_industry_map.mjs
 *        npm run industry:update
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '..'));

const SEL_TXT = './watchlist/cn_selected.txt';
const OUT_JSON = './watchlist/cn_industry.json';

// EastMoney F10 Company Survey API
const F10_URL = 'https://emweb.securities.eastmoney.com/PC_HSF10/CompanySurvey/CompanySurveyAjax?code=';

function symToApiCode(sym) {
  // SSE:600519 → SH600519, SZSE:300750 → SZ300750
  if (sym.startsWith('SSE:')) return 'SH' + sym.slice(4);
  if (sym.startsWith('SZSE:')) return 'SZ' + sym.slice(5);
  // Fallback for other prefixes
  if (sym.includes(':')) return sym.replace(':', '');
  return sym;
}

async function fetchIndustry(code) {
  const url = F10_URL + code;
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    signal: AbortSignal.timeout(10000),
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  if (!data?.jbzl) return null;
  return {
    name: data.jbzl.gsmc || null,
    industry: data.jbzl.sshy || null,
    market: data.jbzl.zqlb || null,
  };
}

async function main() {
  if (!existsSync(SEL_TXT)) {
    console.error(`✗ 缺少候选列表: ${SEL_TXT}`);
    process.exit(1);
  }

  const raw = readFileSync(SEL_TXT, 'utf8').trim();
  const symbols = [...new Set(raw.split(/[,\s]+/).filter(Boolean))];
  console.log(`股票总数: ${symbols.length}`);

  // Load existing map for incremental update
  let existing = {};
  if (existsSync(OUT_JSON)) {
    existing = JSON.parse(readFileSync(OUT_JSON, 'utf8')).stocks || {};
  }

  const stocks = {};
  let fetched = 0;
  let failed = 0;
  const industryCount = {};

  for (let i = 0; i < symbols.length; i++) {
    const sym = symbols[i];
    // Skip if already in cache (use existing data)
    if (existing[sym]?.industry) {
      stocks[sym] = existing[sym];
      const ind = existing[sym].industry;
      industryCount[ind] = (industryCount[ind] || 0) + 1;
      continue;
    }

    const apiCode = symToApiCode(sym);
    try {
      const info = await fetchIndustry(apiCode);
      if (info?.industry) {
        stocks[sym] = { name: info.name, industry: info.industry, market: info.market };
        industryCount[info.industry] = (industryCount[info.industry] || 0) + 1;
        fetched++;
        if (fetched % 10 === 0) {
          process.stdout.write(`\r  已获取: ${fetched}...`);
        }
      } else {
        failed++;
        console.log(`\n  ⚠ ${sym} (${apiCode}): 无行业数据`);
        // Cache null industry to avoid re-fetching
        stocks[sym] = { name: null, industry: null, market: null };
      }
    } catch (e) {
      failed++;
      console.log(`\n  ✗ ${sym} (${apiCode}): ${e.message}`);
      stocks[sym] = { name: null, industry: null, market: null };
    }

    // Rate limit: 200ms between requests
    await new Promise(r => setTimeout(r, 200));
  }

  const out = {
    updated_at: new Date().toISOString(),
    source: F10_URL + '{code}',
    stock_count: symbols.length,
    fetched,
    failed,
    stocks,
  };

  writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\r✅ 行业映射已更新: ${OUT_JSON}`);
  console.log(`   已获取: ${fetched}  |  失败: ${failed}  |  缓存命中: ${symbols.length - fetched - failed}`);

  // Print industry distribution summary
  console.log('\n行业分布:');
  const sorted = Object.entries(industryCount).sort((a, b) => b[1] - a[1]);
  for (const [ind, n] of sorted.slice(0, 20)) {
    console.log(`  ${ind}: ${n} 只`);
  }
  if (sorted.length > 20) console.log(`  ... 共 ${sorted.length} 个行业`);
}

main().catch(e => { console.error(e); process.exit(1); });
