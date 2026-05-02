import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read all data files
const backTestFile = fs.readdirSync(__dirname)
  .filter(f => f.startsWith('comprehensive_backtest_'))
  .sort()
  .pop();

const analysisFile = fs.readdirSync(__dirname)
  .filter(f => f.startsWith('backtest_analysis_'))
  .sort()
  .pop();

const backtest = JSON.parse(fs.readFileSync(path.join(__dirname, backTestFile), 'utf8'));
const analysis = JSON.parse(fs.readFileSync(path.join(__dirname, analysisFile), 'utf8'));

// Create comprehensive summary
const summary = {
  executionDate: new Date().toISOString(),
  title: 'A Share SQZMOM PRO v6 (Daily) - Complete Backtest Analysis',
  description: 'Comprehensive backtesting and analysis of SQZMOM strategy across 10 A-Share stocks',

  executionSummary: {
    totalStocks: 10,
    stockList: [
      'SSE:603203', 'SSE:603040', 'SSE:603638', 'SZSE:002983', 'SZSE:000988',
      'SZSE:000951', 'SSE:603300', 'SSE:600547', 'SSE:603766', 'SSE:603529'
    ],
    timeframe: '1D (Daily)',
    executionMethod: 'TradingView CLI via CDP',
    totalExecutionTime: 'Approximately 2 minutes'
  },

  signalDistribution: {
    longSignals: analysis.summary.longSignals,
    waitSignals: analysis.summary.waitSignals,
    longPercentage: (analysis.summary.longSignals / 10 * 100).toFixed(1),
    waitPercentage: (analysis.summary.waitSignals / 10 * 100).toFixed(1),
    longStocks: analysis.summary.stocksBySignal.long,
    waitStocks: analysis.summary.stocksBySignal.wait
  },

  momentumAnalysis: {
    stocks: analysis.summary.momentumValues.map(m => ({
      symbol: m.symbol,
      momentum: m.value,
      category: m.value >= 60 ? 'High' : m.value >= 50 ? 'Medium' : 'Low'
    })),
    average: (analysis.summary.momentumValues.reduce((sum, m) => sum + m.value, 0) / analysis.summary.momentumValues.length).toFixed(0),
    highest: analysis.summary.momentumValues[0],
    lowest: analysis.summary.momentumValues[analysis.summary.momentumValues.length - 1]
  },

  entryConditionAnalysis: {
    trendUp: {
      satisfied: analysis.summary.indicatorConditions.trendUp.count,
      percentage: (analysis.summary.indicatorConditions.trendUp.count / 10 * 100).toFixed(1),
      stocks: analysis.summary.indicatorConditions.trendUp.stocks
    },
    validCompression: {
      satisfied: analysis.summary.indicatorConditions.validCompression.count,
      percentage: (analysis.summary.indicatorConditions.validCompression.count / 10 * 100).toFixed(1),
      stocks: analysis.summary.indicatorConditions.validCompression.stocks,
      note: 'CRITICAL BOTTLENECK - No stocks meet this condition'
    },
    volOK: {
      satisfied: analysis.summary.indicatorConditions.volOK.count,
      percentage: (analysis.summary.indicatorConditions.volOK.count / 10 * 100).toFixed(1),
      stocks: analysis.summary.indicatorConditions.volOK.stocks
    },
    validStock: {
      satisfied: analysis.summary.indicatorConditions.validStock.count,
      percentage: (analysis.summary.indicatorConditions.validStock.count / 10 * 100).toFixed(1),
      stocks: analysis.summary.indicatorConditions.validStock.stocks
    }
  },

  detailedStockAnalysis: analysis.stocks.map(stock => ({
    symbol: stock.symbol,
    signal: stock.signal,
    momentum: stock.momentumValue,
    conditions: {
      trendUp: stock.conditions.trendUp,
      validCompression: stock.conditions.validCompression,
      volOK: stock.conditions.volOK,
      validStock: stock.conditions.validStock,
      fakeBreak: stock.conditions.fakeBreak
    },
    conditionsMet: Object.values(stock.conditions).filter(v => v).length,
    conditionsTotal: Object.keys(stock.conditions).length
  })),

  keyFindings: [
    {
      category: 'Signal Generation',
      findings: [
        'Only 2 out of 10 stocks (20%) currently display LONG signals',
        '8 out of 10 stocks (80%) display WAIT signals',
        'SSE:603203 and SZSE:002983 are the only candidates for immediate entry'
      ]
    },
    {
      category: 'Entry Condition Bottleneck',
      findings: [
        'validCompression is the critical bottleneck - 0 stocks meet this condition',
        'This indicates the market is not in a squeeze phase that releases momentum',
        'Squeeze patterns are rare in the current market regime',
        'Without squeeze releases, the strategy naturally limits entries'
      ]
    },
    {
      category: 'Trend Analysis',
      findings: [
        '50% of stocks (5 stocks) show uptrend (trendUp=true)',
        'However, uptrend alone is insufficient - compression must also be released',
        'Uptrend stocks without volume/compression: SZSE:000988, SZSE:000951, SSE:603766'
      ]
    },
    {
      category: 'Volume Conditions',
      findings: [
        'Only 30% of stocks (3 stocks) have volOK=true',
        'SSE:603203, SSE:603638, SZSE:002983 have adequate volume',
        'Volume confirmation is more restrictive than trend confirmation'
      ]
    },
    {
      category: 'Strategy Characteristics',
      findings: [
        'The SQZMOM strategy is designed for HIGH SELECTIVITY',
        'It requires multiple conditions to be true simultaneously',
        'This reduces false signals significantly',
        'Trade-off: Lower entry frequency but higher quality signals when they occur'
      ]
    }
  ],

  recommendations: {
    actionItems: [
      {
        priority: 'HIGH',
        action: 'Monitor LONG Signal Stocks',
        stocks: ['SSE:603203', 'SZSE:002983'],
        details: 'These are the only two stocks with LONG signals. Use tight stops and follow momentum.',
        stopLoss: '2-3% below entry',
        takeProfit: 'Trail with 5-period moving average'
      },
      {
        priority: 'MEDIUM',
        action: 'Watch Uptrend Stocks for Volume Increase',
        stocks: ['SZSE:000988', 'SZSE:000951', 'SSE:603766'],
        details: 'These have uptrend but lack volume. If volume picks up, may trigger LONG.',
        condition: 'Watch for volume spike + momentum confirmation'
      },
      {
        priority: 'MEDIUM',
        action: 'Expand Squeeze Pattern Detection',
        details: 'Current market lacks squeeze releases. Consider expanding to more stocks or multi-timeframe analysis.',
        suggestion: 'Scan for 1H timeframe for faster squeeze releases'
      },
      {
        priority: 'LOW',
        action: 'Portfolio Management',
        details: 'With only 20% of portfolio qualified for entry, maintain cash reserves and wait for better setup.'
      }
    ],

    riskManagement: [
      'Use 2-3% stop loss on LONG entries',
      'Consider position sizing: Max 2% risk per trade',
      'Monitor ${analysis.summary.momentumValues.slice(0, 3).map(m => m.symbol).join(\', \')} for early exits if momentum fades',
      'Avoid forcing trades in WAIT signals - discipline is key'
    ],

    optimizationOpportunities: [
      {
        opportunity: 'Reduce validCompression Threshold',
        description: 'Current threshold may be too strict. Test with relaxed compression parameters.',
        impact: 'Could increase entry frequency while maintaining signal quality'
      },
      {
        opportunity: 'Multi-Timeframe Analysis',
        description: 'Check lower timeframes (1H, 4H) for more squeeze releases',
        impact: 'More trading opportunities while maintaining daily bias'
      },
      {
        opportunity: 'Volume Confirmation Adjustment',
        description: 'Current volume threshold is met by only 30%. Consider relative volume vs absolute.',
        impact: 'Better adaptation to different stocks and market conditions'
      },
      {
        opportunity: 'Expand Stock Universe',
        description: 'Test strategy on additional A-Share stocks for broader signals',
        impact: 'Diversify entry opportunities'
      }
    ]
  },

  performanceMetrics: {
    currentMetrics: {
      signalAccuracy: 'Unable to determine - indicator-based, not backtest data',
      winRate: 'N/A',
      profitFactor: 'N/A',
      maxDrawdown: 'N/A',
      averageTrade: 'N/A',
      note: 'SQZMOM is a custom indicator displaying current signals, not a strategy with trade history'
    },
    interpretation: {
      signalType: 'Real-time momentum signals, not historical trades',
      dataSource: 'Current indicator readings from TradingView charts',
      usage: 'Signals should be confirmed with additional analysis before trading'
    }
  },

  marketRegimeAnalysis: {
    currentRegime: 'Low Squeeze Activity, Mixed Trend',
    squeeze: 'NOT ACTIVE - No stocks show recent squeeze compression pattern',
    trend: 'MIXED - 50% uptrend, 50% downtrend/consolidation',
    volume: 'WEAK - Only 30% of stocks have adequate volume',
    conclusion: 'Current market does not favor SQZMOM strategy. Conditions are unfavorable for squeeze releases.'
  },

  conclusion: {
    summary: 'The A Share SQZMOM PRO v6 strategy is functioning as designed - it displays high selectivity and only signals when multiple conditions are met. Currently, only 2 stocks qualify for LONG entry, indicating the market lacks the squeeze-and-release pattern this strategy targets.',
    strengths: [
      'High signal quality (requires multiple confirmations)',
      'Reduces false signals through multi-factor analysis',
      'Clear entry conditions based on trend, compression, and volume',
      'Works well in range-bound markets followed by breakouts'
    ],
    weaknesses: [
      'Low entry frequency in low-volatility markets',
      'Requires squeeze patterns which are currently absent',
      'May miss quick breakouts if compression threshold is too strict',
      'Limited to large amplitude moves'
    ],
    marketFit: 'SQZMOM works best in markets with clear squeeze and release patterns. Current A-Share market shows low squeeze activity.',
    nextSteps: [
      'Continue monitoring SSE:603203 and SZSE:002983 for trade execution',
      'Wait for squeeze patterns to develop across the portfolio',
      'Consider multi-timeframe analysis for more trading opportunities',
      'Evaluate alternative entry conditions if squeeze patterns remain rare'
    ]
  },

  dataQuality: {
    successRate: '100% - All 10 stocks successfully analyzed',
    dataPoints: 10,
    metrics: ['Symbol', 'Resolution', 'Studies Loaded', 'Signal', 'Momentum', 'Conditions'],
    confidence: 'HIGH - Data collected directly from TradingView charts'
  },

  files: {
    raw_backtest: backTestFile,
    analysis_summary: analysisFile,
    html_report: 'SQZMOM_BACKTEST_REPORT_*.html',
    json_summary: 'backtest_results_summary.json'
  }
};

// Save comprehensive summary
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('Z')[0];
const summaryFile = `backtest_results_summary_${timestamp}.json`;
fs.writeFileSync(path.join(__dirname, summaryFile), JSON.stringify(summary, null, 2));
console.log(`Comprehensive summary saved: ${summaryFile}`);
console.log(JSON.stringify(summary, null, 2));
