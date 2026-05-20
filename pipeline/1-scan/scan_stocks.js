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
 * Parse SQZMOM table statusText into structured fields.
 *
 * New format (param1 + param2 + score + signal):
 *   "trendUp:true validComp:true atrPct:3.5% volOK:true rsiOK:true notHighVol:true 85 🟢 LONG"
 *   "trendUp:false validComp:false atrPct:2.1% volOK:false rsiOK:false notHighVol:true 45 🔴 WAIT"
 *
 * Also backward-compatible with old format fields (volMom, validStock, fakeBreak).
 */
function parseRawData(rawData) {
  const result = {
    trendUp: false,
    validCompression: false,
    atrPct: null,
    volOK: false,
    rsiOK: false,
    notHighVol: false,
    volMom: false,
    validStock: false,
    fakeBreak: false,
    score: null,
    signal: 'UNKNOWN',
  };

  // Parse bool key:value pairs (handles both old and new field names)
  const boolRe = /(trendUp|validComp(?:ression)?|volOK|rsiOK|notHighVol|volMom|validStock|fakeBreak):(true|false)/g;
  let m;
  while ((m = boolRe.exec(rawData)) !== null) {
    const v = m[2] === 'true';
    switch (m[1]) {
      case 'trendUp':          result.trendUp = v;          break;
      case 'validComp':
      case 'validCompression': result.validCompression = v; break;
      case 'volOK':            result.volOK = v;            break;
      case 'rsiOK':            result.rsiOK = v;            break;
      case 'notHighVol':       result.notHighVol = v;       break;
      case 'volMom':           result.volMom = v;           break;
      case 'validStock':       result.validStock = v;       break;
      case 'fakeBreak':        result.fakeBreak = v;        break;
    }
  }

  // Parse atrPct float: "atrPct:X.X%"
  const atrM = rawData.match(/atrPct:([\d.]+)%/);
  if (atrM) result.atrPct = parseFloat(atrM[1]);

  // Parse score + signal: trailing number before emoji
  //   "... 85 🟢 LONG"  →  score=85,  signal=LONG
  //   "... 72.5 🔴 WAIT" → score=72.5, signal=WAIT
  const sigM = rawData.match(/(\d+\.?\d*)\s*(?:🟢|🔴)\s*(LONG|WAIT)/u);
  if (sigM) {
    result.score  = parseFloat(sigM[1]);
    result.signal = sigM[2];
  }

  return result;
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
        const parsed = parseRawData(rawData);
        const baseParams = {
          symbol,
          ...parsed,
          rawData,
        };

        results.push(baseParams);
        const atrStr = baseParams.atrPct != null ? ` atrPct:${baseParams.atrPct.toFixed(1)}%` : '';
        const scoreStr = baseParams.score != null ? ` score:${baseParams.score}` : '';
        console.log(`  ✓ trendUp:${baseParams.trendUp} validComp:${baseParams.validCompression}${atrStr} volOK:${baseParams.volOK} rsiOK:${baseParams.rsiOK} notHighVol:${baseParams.notHighVol}${scoreStr} → ${baseParams.signal}`);
      } else {
        console.log(`  ⚠️  未找到 SQZMOM 指标数据`);
      }
    } else {
      console.log(`  ⚠️  无表格数据`);
    }

    // 短暂延迟避免过快切换
    await sleep(500);
  }

  // 筛选符合条件的股票（基于 SQZMOM v2 statusText 字段）
  // 主通道（6条件AND）：
  //   1. trendUp = true (上升趋势)
  //   2. validCompression = true (有效压缩)
  //   3. volOK = true (成交量确认)
  //   4. rsiOK = true (RSI健康)
  //   5. notHighVol = true (非高波动)
  //   6. signal = 'LONG' (做多信号)
  //
  // 趋势延伸二级通道（回溯优化 2026-05-11）：
  //   validCompression 可能为 false（已突破压缩阶段），
  //   但 trendUp + volOK + rsiOK + notHighVol 全满足 → 可能是趋势加速中的股票
  const qualified = results.filter(r => {
    // 主通道：全条件满足
    if (r.trendUp && r.validCompression && r.volOK && r.rsiOK && r.notHighVol && r.signal === 'LONG') return true;
    // 二级通道：趋势延伸 — validCompression=false（已突破），但其他4个条件全满足
    if (r.trendUp && !r.validCompression && r.volOK && r.rsiOK && r.notHighVol) return true;
    return false;
  });

  // 收集 trendUp 为 false 的股票（趋势反转，需从已选列表中剔除）
  const trendDown = new Set(
    results.filter(r => r.trendUp === false).map(r => r.symbol)
  );

  console.log(`\n✅ 扫描完成！共分析 ${results.length}/${symbols.length} 个股票`);
  console.log(`🎯 符合初步条件的股票 (${qualified.length}，含二级趋势延伸通道):\n`);

  qualified.forEach((stock, i) => {
    console.log(`  ${i + 1}. ${stock.symbol} → ${stock.signal}`);
  });

  if (trendDown.size > 0) {
    console.log(`\n🔻 trendUp=false 已剔除 (${trendDown.size}):`);
    trendDown.forEach(s => console.log(`  - ${s}`));
  }

  // ===== 保存选中的股票到 watchlist 文件 =====
  const outputArg = process.argv.find(arg => arg.startsWith('--output='));
  if (outputArg) {
    const outputPath = outputArg.split('=')[1];

    let existingSymbols = [];
    try {
      const existing = readFileSync(outputPath, 'utf8').trim();
      if (existing) existingSymbols = existing.split(',').map(s => s.trim()).filter(Boolean);
    } catch (e) { /* file doesn't exist yet */ }

    // 从已有列表中剔除 trendUp=false 的股票
    const removedCount = existingSymbols.length;
    existingSymbols = existingSymbols.filter(s => !trendDown.has(s));
    const nRemoved = removedCount - existingSymbols.length;

    const newSymbols = qualified.map(s => s.symbol);
    const mergedSymbols = [...new Set([...existingSymbols, ...newSymbols])];

    writeFileSync(outputPath, mergedSymbols.join(','), 'utf8');

    console.log(`\n✅ 已保存到: ${outputPath}`);
    if (nRemoved > 0) console.log(`   剔除趋势反转: ${nRemoved}`);
    console.log(`   本次新增: ${newSymbols.length}, 已有: ${existingSymbols.length}, 排重后总计: ${mergedSymbols.length}\n`);
  }

  return {
    summary: {
      totalScanned: results.length,
      qualified: qualified.length,
    },
    results: qualified.map(s => ({ symbol: s.symbol, signal: s.signal })),
  };
}

scanStocks().catch(console.error);
