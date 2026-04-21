#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(, {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class TechnicalAnalyzer {
  static calculateRSI(closes, period = 14) {
    if (closes.length < period + 1) return null;
    let gains = 0, losses = 0;
    for (let i = closes.length - period; i < closes.length; i++) {
      const diff = closes[i] - closes[i - 1];
      if (diff > 0) gains += diff;
      else losses += Math.abs(diff);
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgGain / (avgLoss || 1);
    const rsi = 100 - (100 / (1 + rs));
    return Math.round(rsi * 100) / 100;
  }

  static calculateSMA(values, period) {
    if (values.length < period) return null;
    return values.slice(-period).reduce((a, b) => a + b) / period;
  }

  static analyzeTrend(closes) {
    const sma20 = this.calculateSMA(closes, 20);
    const sma50 = this.calculateSMA(closes, 50);
    const current = closes[closes.length - 1];
    let status = '平稳';
    
    if (current > (sma20 || 0) && (sma20 || 0) > (sma50 || 0)) status = '上升';
    else if (current < (sma20 || 0) && (sma20 || 0) < (sma50 || 0)) status = '下降';
    
    return { status, sma20, sma50, current };
  }
}

async function analyzeStock(symbol) {
  const timeframes = ['1', '4', 'D', 'W'];
  const results = { symbol, tfs: {} };
  
  for (const tf of timeframes) {
    runCommand();
    const ohlcv = runCommand('ohlcv -n 100');
    
    if (!ohlcv || !ohlcv.bars) continue;
    
    const bars = ohlcv.bars;
    const closes = bars.map(b => b.close);
    const rsi = TechnicalAnalyzer.calculateRSI(closes);
    const trend = TechnicalAnalyzer.analyzeTrend(closes);
    
    results.tfs[tf] = {
      price: closes[closes.length - 1],
      rsi,
      trend: trend.status
    };
    
    await sleep(300);
  }
  
  return results;
}

async function main() {
  const content = readFileSync('./watchlist/cn_selected.txt', 'utf8').trim();
  const symbols = content.split(',').map(s => s.trim());
  const allResults = [];
  
  for (const symbol of symbols) {
    runCommand();
    const result = await analyzeStock(symbol);
    allResults.push(result);
    await sleep(1000);
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  writeFileSync(, JSON.stringify(allResults, null, 2));
  console.log('✅ 技术分析完成');
}

main().catch(console.error);
