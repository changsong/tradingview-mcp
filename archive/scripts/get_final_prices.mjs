#!/usr/bin/env node
/**
 * 获取最终交易价格和建议
 * 综合新闻、技术面、基本面
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const symbols = [
  'SZSE:000657',  // 中钨高新
  'SZSE:300037',  // 新宙邦
  'SZSE:300750',  // 宁德时代
  'SZSE:002245',  // 蔚蓝锂芯
  'SZSE:300408',  // 三环集团
  'SZSE:002475',  // 立讯精密
  'SZSE:300661',  // 圣邦股份
  'SSE:601126',   // 四方股份
  'SSE:605198',   // 安德利
];

const CLI_PATH = 'src/cli/index.js';

function getQuote(symbol) {
  try {
    const result = execSync(`node ${CLI_PATH} quote_get --symbol=${symbol}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'ignore'],
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`获取 ${symbol} 失败:`, error.message);
    return null;
  }
}

function getOHLCV(symbol) {
  try {
    const result = execSync(`node ${CLI_PATH} data_get_ohlcv --symbol=${symbol} --count=50 --summary=true`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'ignore'],
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

function getValues(symbol) {
  try {
    const result = execSync(`node ${CLI_PATH} data_get_study_values --symbol=${symbol}`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'ignore'],
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

async function main() {
  console.log('正在获取最新价格和技术指标...\n');

  const prices = [];

  for (const symbol of symbols) {
    process.stdout.write(`${symbol}... `);

    const quote = getQuote(symbol);
    const ohlcv = getOHLCV(symbol);
    const values = getValues(symbol);

    if (quote && quote.success && quote.data) {
      const q = quote.data;
      prices.push({
        symbol,
        name: q.name || symbol,
        price: q.price || q.close,
        open: q.open,
        high: q.high,
        low: q.low,
        close: q.close,
        volume: q.volume,
        change: q.change,
        changePercent: q.changePercent,
        ohlcv: ohlcv?.data?.bars ? {
          count: ohlcv.data.bars.length,
          highest_high: Math.max(...ohlcv.data.bars.map(b => b.high)),
          lowest_low: Math.min(...ohlcv.data.bars.map(b => b.low)),
          avg_volume: Math.round(ohlcv.data.bars.reduce((s, b) => s + b.volume, 0) / ohlcv.data.bars.length),
        } : null,
        indicators: values?.data?.values ?
          values.data.values.reduce((acc, v) => {
            acc[v.name] = v.value;
            return acc;
          }, {}) : null,
      });
      console.log('✓');
    } else {
      console.log('✗ (获取失败)');
    }
  }

  // 保存价格数据
  writeFileSync('prices_and_indicators_2026-04-22.json', JSON.stringify(prices, null, 2));
  console.log('\n✅ 保存: prices_and_indicators_2026-04-22.json');

  return prices;
}

main().catch(console.error);
