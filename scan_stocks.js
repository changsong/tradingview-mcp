#!/usr/bin/env node
import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';

const CLI_PATH = 'src/cli/index.js';

function runCommand(cmd) {
  try {
    const result = execSync(`node ${CLI_PATH} ${cmd}`, {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return JSON.parse(result);
  } catch (error) {
    console.error(`Error running command: ${cmd}`, error.message);
    return null;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 技术分析评分 (0-100)
 * 基于指标值、趋势、支撑阻力等
 */
function analyzeTA(symbol, ohlcv, values) {
  let score = 50; // 基础分
  const reasons = [];

  if (!ohlcv || !ohlcv.success || !values || !values.success) {
    return { score: 0, reasons: ['无法获取技术数据'] };
  }

  // 1. 价格趋势分析 (最近5根K线)
  if (ohlcv.bars && ohlcv.bars.length >= 5) {
    const recent = ohlcv.bars.slice(-5);
    const closes = recent.map(b => b.close);
    const isUptrend = closes[closes.length - 1] > closes[0];

    if (isUptrend) {
      score += 15;
      reasons.push('✓ 近期上升趋势 (+15)');
    } else {
      score -= 10;
      reasons.push('✗ 近期下跌趋势 (-10)');
    }

    // 高位 vs 低位
    const high = Math.max(...closes);
    const low = Math.min(...closes);
    const range = high - low;
    const volatility = (range / low) * 100;

    if (volatility > 3) {
      score -= 5;
      reasons.push(`⚠ 波动率过高 ${volatility.toFixed(2)}% (-5)`);
    } else if (volatility > 1) {
      score += 5;
      reasons.push(`✓ 波动率适中 ${volatility.toFixed(2)}% (+5)`);
    }
  }

  // 2. RSI 分析 (如果有)
  if (values.values) {
    const rsi = values.values.find(v => v.name === 'Relative Strength Index');
    if (rsi && rsi.value !== undefined) {
      const rsiVal = parseFloat(rsi.value);
      if (rsiVal < 30) {
        score += 20;
        reasons.push(`✓ RSI ${rsiVal.toFixed(2)} 超卖区域 (+20)`);
      } else if (rsiVal > 70) {
        score -= 15;
        reasons.push(`✗ RSI ${rsiVal.toFixed(2)} 超买区域 (-15)`);
      } else if (rsiVal > 40 && rsiVal < 60) {
        score += 5;
        reasons.push(`✓ RSI ${rsiVal.toFixed(2)} 中性偏健康 (+5)`);
      }
    }
  }

  // 3. MACD 分析 (如果有)
  if (values.values) {
    const macd = values.values.find(v => v.name.includes('MACD'));
    if (macd && macd.value !== undefined) {
      const macdVal = parseFloat(macd.value);
      if (macdVal > 0) {
        score += 10;
        reasons.push(`✓ MACD 正值 (${macdVal.toFixed(4)}) (+10)`);
      } else {
        score -= 8;
        reasons.push(`✗ MACD 负值 (${macdVal.toFixed(4)}) (-8)`);
      }
    }
  }

  // 确保分数在 0-100 范围内
  score = Math.max(0, Math.min(100, score));

  return { score, reasons };
}

/**
 * 基本面分析评分 (0-100)
 * 基于股票信息、成交量等
 */
function analyzeFundamentals(symbol, info, quote) {
  let score = 50;
  const reasons = [];

  if ((!info || !info.success) && (!quote || !quote.success)) {
    return { score: 30, reasons: ['基本面数据不可获取'] };
  }

  // 1. 市场类型 (A股、美股倾向)
  if (symbol.includes('SSE') || symbol.includes('SZSE')) {
    score += 5;
    reasons.push('✓ A股上市公司 (+5)');
  }

  // 2. 流动性评估 (成交量) - 从 quote 获取
  if (quote && quote.success && quote.volume !== undefined) {
    const vol = parseFloat(quote.volume);
    if (vol > 1000000) {
      score += 15;
      reasons.push(`✓ 流动性充足 (${(vol / 1000000).toFixed(2)}M) (+15)`);
    } else if (vol > 100000) {
      score += 8;
      reasons.push(`✓ 流动性良好 (${(vol / 1000000).toFixed(2)}M) (+8)`);
    } else if (vol > 0) {
      score -= 10;
      reasons.push(`✗ 流动性不足 (-10)`);
    }
  } else {
    reasons.push('⚠ 无法获取成交量数据');
  }

  // 3. 股票类型评估 (从 info 获取)
  if (info && info.success && info.type) {
    if (info.type === 'stock') {
      score += 5;
      reasons.push(`✓ 股票类型 (+5)`);
    }
  }

  score = Math.max(0, Math.min(100, score));
  return { score, reasons };
}

/**
 * 新闻/市场情绪分析 (0-100)
 * 基于最近价格走势
 */
function analyzeMarketSentiment(symbol, ohlcv) {
  let score = 50;
  const reasons = [];

  if (!ohlcv || !ohlcv.success) {
    return { score: 50, reasons: ['市场数据不完整'] };
  }

  // 基于近期收盘价格趋势
  if (ohlcv.bars && ohlcv.bars.length >= 20) {
    const bars20 = ohlcv.bars.slice(-20);
    const avg20 = bars20.reduce((sum, b) => sum + b.close, 0) / 20;
    const current = bars20[bars20.length - 1].close;

    if (current > avg20) {
      const outperformance = ((current - avg20) / avg20) * 100;
      score += Math.min(20, outperformance * 2);
      reasons.push(`✓ 20日线上方 ${outperformance.toFixed(2)}% (+${Math.min(20, outperformance * 2).toFixed(0)})`);
    } else {
      const underperformance = ((avg20 - current) / avg20) * 100;
      score -= Math.min(15, underperformance * 2);
      reasons.push(`✗ 20日线下方 ${underperformance.toFixed(2)}% (-${Math.min(15, underperformance * 2).toFixed(0)})`);
    }
  }

  score = Math.max(0, Math.min(100, score));
  return { score, reasons };
}

/**
 * 综合评分
 */
function calculateOverallScore(taScore, fundamentalScore, sentimentScore) {
  // 加权: 技术40%, 基本面35%, 情绪25%
  const overall = (taScore * 0.4 + fundamentalScore * 0.35 + sentimentScore * 0.25);
  return Math.round(overall);
}

async function scanStocks() {
  console.log('📊 开始扫描 A股可交易股票列表...\n');

  // Check if a custom symbols file was provided
  let symbols = [];
  const customSymbolsArg = process.argv.find(arg => arg.startsWith('--symbols='));

  if (customSymbolsArg) {
    // Load symbols from file (supports .json and .txt)
    const rawValue = customSymbolsArg.slice('--symbols='.length);
    const filePath = rawValue.startsWith('filepath=') ? rawValue.slice('filepath='.length) : rawValue;
    try {
      const content = readFileSync(filePath, 'utf8').trim();

      if (filePath.endsWith('.txt')) {
        // TXT format: comma-separated symbols (e.g., "SSE:603203,SSE:603040,...")
        symbols = content.split(',').map(s => ({ symbol: s.trim() })).filter(s => s.symbol);
      } else {
        // JSON format: array or object with symbols property
        const data = JSON.parse(content);
        const rawSymbols = Array.isArray(data) ? data : data.symbols || [];
        // Normalize: support both string array and object array
        symbols = rawSymbols.map(s => typeof s === 'string' ? { symbol: s } : s);
      }

      console.log(`✅ 从文件加载 ${symbols.length} 个股票: ${filePath}\n`);
    } catch (e) {
      console.error(`❌ 无法读取文件: ${filePath}\n${e.message}`);
      return;
    }
  } else {
    // Get symbols from watchlist
    const watchlist = runCommand('watchlist get');
    if (!watchlist || !watchlist.success) {
      console.error('❌ 无法获取观察列表');
      return;
    }

    symbols = watchlist.symbols;
    console.log(`✅ 从观察列表获取 ${symbols.length} 个股票\n`);
  }

  const results = [];

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i].symbol;
    console.log(`[${i + 1}/${symbols.length}] 正在分析 ${symbol}...`);

    // 切换到该股票
    const switchResult = runCommand(`symbol ${symbol}`);
    if (!switchResult || !switchResult.success) {
      console.log(`  ⚠️  切换失败，跳过`);
      continue;
    }

    // 等待图表加载
    await sleep(2000);

    // 获取表格数据
    const tableData = runCommand('data tables');

    if (tableData && tableData.success && tableData.studies.length > 0) {
      const study = tableData.studies.find(s => s.name.includes('SQZMOM'));
      if (study && study.tables && study.tables[0] && study.tables[0].rows[0]) {
        const rawData = study.tables[0].rows[0];

        // 解析参数
        const baseParams = {
          symbol: symbol,
          trendUp: rawData.includes('trendUp:true'),
          validCompression: rawData.includes('validCompression:true'),
          volOK: rawData.includes('volOK:true'),
          validStock: rawData.includes('validStock:true'),
          fakeBreak: rawData.includes('fakeBreak:true'),
          signal: rawData.includes('WAIT') ? 'WAIT' :
                  rawData.includes('🟢') ? 'GO' :
                  rawData.includes('🔴') ? 'STOP' : 'UNKNOWN',
          rawData: rawData
        };

        results.push(baseParams);
        console.log(`  ✓ trendUp:${baseParams.trendUp} validComp:${baseParams.validCompression} volOK:${baseParams.volOK} validStock:${baseParams.validStock} fakeBreak:${baseParams.fakeBreak} → ${baseParams.signal}`);
      } else {
        console.log(`  ⚠️  未找到 SQZMOM 指标数据`);
      }
    } else {
      console.log(`  ⚠️  无表格数据`);
    }

    // 短暂延迟避免过快切换
    await sleep(500);
  }

  // 筛选符合条件的股票
  // 必须满足以下所有条件:
  // 1. trendUp = true (上升趋势)
  // 2. fakeBreak = false (非假突破)
  // 3. validCompression = true (有效压缩)
  // 4. rawData 包含 "GO" 或 signal = "GO"
  const qualified = results.filter(r => {
    return r.trendUp &&
           !r.fakeBreak &&
           r.validCompression &&
           (r.signal === 'GO' || r.rawData.includes('GO'));
  });

  console.log(`\n✅ 扫描完成！共分析 ${results.length}/${symbols.length} 个股票`);
  console.log(`🎯 符合初步条件的股票 (${qualified.length}):\n`);

  // ===== 对符合条件的股票进行深度分析 =====
  const detailedAnalysis = [];

  for (let i = 0; i < qualified.length; i++) {
    const stock = qualified[i];
    console.log(`[深度分析 ${i + 1}/${qualified.length}] ${stock.symbol}...`);

    // 切换到该股票
    runCommand(`symbol ${stock.symbol}`);
    await sleep(1500);

    // 获取技术指标数据
    const ohlcv = runCommand('ohlcv -n 100 -s');
    const values = runCommand('values');
    const info = runCommand(`info`);
    const quote = runCommand(`quote ${stock.symbol}`);

    // 执行分析
    const ta = analyzeTA(stock.symbol, ohlcv, values);
    const fundamentals = analyzeFundamentals(stock.symbol, info, quote);
    const sentiment = analyzeMarketSentiment(stock.symbol, ohlcv);
    const overallScore = calculateOverallScore(ta.score, fundamentals.score, sentiment.score);

    detailedAnalysis.push({
      symbol: stock.symbol,
      signal: stock.signal,
      overallScore,
      scores: {
        technicalAnalysis: ta.score,
        fundamentals: fundamentals.score,
        marketSentiment: sentiment.score
      },
      reasons: {
        technicalAnalysis: ta.reasons,
        fundamentals: fundamentals.reasons,
        marketSentiment: sentiment.reasons
      },
      originalParams: stock
    });

    console.log(`  总体评分: ${overallScore}/100`);
    await sleep(500);
  }

  // 按总体评分从高到低排序
  detailedAnalysis.sort((a, b) => b.overallScore - a.overallScore);

  // 保存详细结果
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = `stock_scan_detailed_${timestamp}.json`;
  writeFileSync(outputFile, JSON.stringify(detailedAnalysis, null, 2));

  // 输出排序结果
  console.log('\n' + '='.repeat(80));
  console.log('📊 符合条件的股票评分排行榜 (按总体评分从高到低)');
  console.log('='.repeat(80) + '\n');

  detailedAnalysis.forEach((stock, index) => {
    console.log(`${index + 1}. ${stock.symbol.padEnd(15)} 📈 总体评分: ${String(stock.overallScore).padStart(3)}/100`);
    console.log(`   ├─ 技术面: ${String(stock.scores.technicalAnalysis).padStart(3)}/100`);
    console.log(`   ├─ 基本面: ${String(stock.scores.fundamentals).padStart(3)}/100`);
    console.log(`   └─ 市场情绪: ${String(stock.scores.marketSentiment).padStart(3)}/100\n`);

    console.log(`   信号: ${stock.signal}\n`);

    console.log(`   技术分析原因:`);
    stock.reasons.technicalAnalysis.forEach(reason => {
      console.log(`     ${reason}`);
    });

    console.log(`   基本面原因:`);
    stock.reasons.fundamentals.forEach(reason => {
      console.log(`     ${reason}`);
    });

    console.log(`   市场情绪原因:`);
    stock.reasons.marketSentiment.forEach(reason => {
      console.log(`     ${reason}`);
    });

    console.log();
  });

  console.log('='.repeat(80));
  console.log(`\n✅ 详细分析结果已保存到: ${outputFile}`);

  // ===== 保存选中的股票到 watchlist 文件 =====
  const outputArg = process.argv.find(arg => arg.startsWith('--output='));
  if (outputArg) {
    const outputPath = outputArg.split('=')[1];

    // 提取股票符号并去重
    const selectedSymbols = [...new Set(detailedAnalysis.map(s => s.symbol))];

    // 保存为逗号分隔格式（与 us.txt 格式一致）
    const content = selectedSymbols.join(',');
    writeFileSync(outputPath, content, 'utf8');

    console.log(`\n✅ 已保存 ${selectedSymbols.length} 个选中股票到: ${outputPath}`);
    console.log(`   格式: 逗号分隔，已排重\n`);
  }

  return {
    summary: {
      totalScanned: results.length,
      qualified: qualified.length,
      analyzed: detailedAnalysis.length
    },
    results: detailedAnalysis
  };
}

scanStocks().catch(console.error);
