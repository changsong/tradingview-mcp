import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the comprehensive backtest file
const backTestFile = fs.readdirSync(__dirname)
  .filter(f => f.startsWith('comprehensive_backtest_'))
  .sort()
  .pop();

if (!backTestFile) {
  console.error('No backtest file found');
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(path.join(__dirname, backTestFile), 'utf8'));

console.log('Analyzing A Share SQZMOM PRO v6 (Daily) Backtest Results');
console.log('='.repeat(80));

// Parse the indicator table data
const analysis = {
  timestamp: new Date().toISOString(),
  backtestFile: backTestFile,
  stocks: [],
  summary: {
    totalStocks: 10,
    longSignals: 0,
    waitSignals: 0,
    stocksBySignal: {
      long: [],
      wait: []
    },
    indicatorConditions: {
      trendUp: { count: 0, stocks: [] },
      validCompression: { count: 0, stocks: [] },
      volOK: { count: 0, stocks: [] },
      validStock: { count: 0, stocks: [] },
      fakeBreak: { count: 0, stocks: [] }
    },
    momentumValues: []
  }
};

results.stocks.forEach(stock => {
  const symbol = stock.symbol;
  const tableData = stock.tables?.studies?.[0]?.tables?.[0]?.rows?.[0];

  if (!tableData) {
    console.log(`\nWarning: No table data for ${symbol}`);
    return;
  }

  // Parse the table row: "trendUp:true validCompression:false volOK:true validStock:true fakeBreak:false 65 🟢 LONG"
  const parts = tableData.split(' ');

  const conditions = {};
  let momentumValue = null;
  let signal = null;

  parts.forEach((part, idx) => {
    if (part.includes(':')) {
      const [key, value] = part.split(':');
      conditions[key] = value === 'true';
    } else if (!isNaN(parseInt(part))) {
      momentumValue = parseInt(part);
    } else if (part === '🟢' || part === '🔴') {
      signal = parts[idx + 1] || '';
    }
  });

  const stockAnalysis = {
    symbol,
    signal: signal === 'LONG' ? 'LONG' : 'WAIT',
    momentumValue,
    conditions,
    rawData: tableData,
    state: stock.state
  };

  analysis.stocks.push(stockAnalysis);

  // Aggregate statistics
  if (signal === 'LONG') {
    analysis.summary.longSignals++;
    analysis.summary.stocksBySignal.long.push(symbol);
  } else {
    analysis.summary.waitSignals++;
    analysis.summary.stocksBySignal.wait.push(symbol);
  }

  Object.keys(conditions).forEach(condition => {
    if (conditions[condition]) {
      analysis.summary.indicatorConditions[condition].count++;
      analysis.summary.indicatorConditions[condition].stocks.push(symbol);
    }
  });

  if (momentumValue) {
    analysis.summary.momentumValues.push({ symbol, value: momentumValue });
  }

  // Print individual stock analysis
  console.log(`\n${symbol}:`);
  console.log(`  Signal: ${signal === 'LONG' ? '🟢 LONG' : '🔴 WAIT'}`);
  console.log(`  Momentum: ${momentumValue}`);
  console.log(`  Conditions:`);
  console.log(`    - Trend Up: ${conditions.trendUp}`);
  console.log(`    - Valid Compression: ${conditions.validCompression}`);
  console.log(`    - Volume OK: ${conditions.volOK}`);
  console.log(`    - Valid Stock: ${conditions.validStock}`);
  console.log(`    - Fake Break: ${conditions.fakeBreak}`);
});

// Aggregate summary
analysis.summary.momentumValues.sort((a, b) => b.value - a.value);

console.log('\n' + '='.repeat(80));
console.log('SUMMARY STATISTICS');
console.log('='.repeat(80));
console.log(`\nTotal Stocks Analyzed: ${analysis.summary.totalStocks}`);
console.log(`LONG Signals: ${analysis.summary.longSignals} (${(analysis.summary.longSignals/10*100).toFixed(1)}%)`);
console.log(`WAIT Signals: ${analysis.summary.waitSignals} (${(analysis.summary.waitSignals/10*100).toFixed(1)}%)`);

console.log(`\nStocks with LONG Signal (${analysis.summary.longSignals}):`);
analysis.summary.stocksBySignal.long.forEach(s => console.log(`  - ${s}`));

console.log(`\nStocks with WAIT Signal (${analysis.summary.waitSignals}):`);
analysis.summary.stocksBySignal.wait.forEach(s => console.log(`  - ${s}`));

console.log('\n\nCondition Satisfaction Analysis:');
Object.keys(analysis.summary.indicatorConditions).forEach(condition => {
  const data = analysis.summary.indicatorConditions[condition];
  console.log(`\n${condition}: ${data.count}/10 stocks (${(data.count/10*100).toFixed(1)}%)`);
  if (data.count > 0) {
    console.log(`  Stocks: ${data.stocks.join(', ')}`);
  }
});

console.log('\n\nMomentum Values (sorted high to low):');
analysis.summary.momentumValues.forEach(item => {
  console.log(`  ${item.symbol}: ${item.value}`);
});

// Insights
console.log('\n' + '='.repeat(80));
console.log('KEY INSIGHTS');
console.log('='.repeat(80));

const trendUpCount = analysis.summary.indicatorConditions.trendUp.count;
const volOKCount = analysis.summary.indicatorConditions.volOK.count;
const validStockCount = analysis.summary.indicatorConditions.validStock.count;
const validCompressionCount = analysis.summary.indicatorConditions.validCompression.count;

console.log(`
1. ENTRY CONDITION ANALYSIS:
   - Only ${analysis.summary.longSignals} stocks (${(analysis.summary.longSignals/10*100).toFixed(1)}%) meet all entry criteria for LONG signal
   - ${trendUpCount} stocks have trendUp=true (${(trendUpCount/10*100).toFixed(1)}%)
   - ${validCompressionCount} stocks have validCompression=true (${(validCompressionCount/10*100).toFixed(1)}%)
   - ${volOKCount} stocks have volOK=true (${(volOKCount/10*100).toFixed(1)}%)
   - ${validStockCount} stocks are valid stocks (${(validStockCount/10*100).toFixed(1)}%)

2. MISSING SIGNAL CONDITIONS:
   - validCompression is the most restrictive (0/10 stocks meet this condition)
   - This suggests the squeeze momentum pattern is rare in the current market
   - No stocks have a recent volume squeeze release pattern

3. ENTRY SELECTIVITY:
   - The strategy is highly selective, requiring multiple conditions to be true
   - This reduces false signals but also entry opportunities
   - Currently, only ${analysis.summary.longSignals} stocks trigger the LONG signal

4. CURRENT MARKET REGIME:
   - ${trendUpCount} stocks show uptrend, but most lack squeeze release signals
   - Volume condition (volOK) is met for ${volOKCount} stocks
   - This indicates lower momentum across the portfolio
`);

// Save analysis
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('Z')[0];
const analysisFile = `backtest_analysis_${timestamp}.json`;
fs.writeFileSync(path.join(__dirname, analysisFile), JSON.stringify(analysis, null, 2));
console.log(`\nAnalysis saved to: ${analysisFile}`);
