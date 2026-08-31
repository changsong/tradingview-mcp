# A Share SQZMOM PRO v6 (Daily) - Complete Backtest Execution Guide

## Quick Start

This guide walks you through executing a comprehensive backtest of the A Share SQZMOM PRO v6 (Daily) strategy on 10 selected Chinese stocks.

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] TradingView Desktop application installed
- [ ] A TradingView Pro account (for strategy testing)
- [ ] Chrome DevTools Protocol (CDP) enabled on port 9222
- [ ] Node.js 18+ installed
- [ ] The tradingview-mcp project set up
- [ ] The strategy script loaded in TradingView

## Setup Steps

### 1. Enable CDP in TradingView

**On Windows:**
1. Locate TradingView Desktop
2. Add launch flag: `--remote-debugging-port=9222`
3. Or use: `tradingview.exe --remote-debugging-port=9222`

**Verify CDP is running:**
```bash
curl http://localhost:9222/json/version
```

### 2. Start the MCP Server

In the tradingview-mcp project root directory:

```bash
npm start
```

You should see output like:
```
⚠  tradingview-mcp  |  Unofficial tool. Not affiliated with TradingView Inc. or Anthropic.
   Ensure your usage complies with TradingView's Terms of Use.
```

### 3. Verify Connection

Open another terminal and test:

```bash
node src/cli/index.js health
```

Should return:
```json
{
  "success": true,
  "message": "Connected to TradingView"
}
```

## Backtest Execution

### Full Backtest Workflow

1. **Load the strategy in TradingView**
   - Open TradingView Desktop
   - Open a chart (any symbol)
   - Load the strategy: "A Share SQZMOM PRO v6 (Daily)"
   - Ensure it's visible and calculating

2. **Run the backtest script**

```bash
cd /d/trade_workspace/tradingview-mcp
node a_share_sqzmom_pro_v6_backtest.js
```

The script will:
- Test 10 stocks sequentially
- Collect metrics for each stock
- Generate a JSON report with all results
- Provide real-time progress updates

**Estimated runtime**: 25-35 minutes

### What You'll See

```
================================================================================
A Share SQZMOM PRO v6 (Daily) - Comprehensive Backtest
Testing 10 stocks with 2-3 years of historical data
================================================================================

✅ TradingView connection OK

================================================================================
Testing: SSE:603203 (Timeframe: D)
================================================================================
Setting symbol: SSE:603203...
Setting timeframe: D...
Collecting backtest metrics...
  ✅ Trades: 45 (Win: 28, Loss: 17)
  ✅ Win Rate: 62.22%
  ✅ Total Return: 18.50%
  ✅ Net Profit: 18500.00
  ✅ Profit Factor: 2.15
  ✅ Max Drawdown: 12.50%
[1/10] ✅ SSE:603203 completed

...
```

## Understanding Output

### Real-time Progress
- Each stock shows: symbol, number of trades, win rate, total return, profit, profit factor, max drawdown
- Watch for ✅ (success) or ❌ (failure) indicators

### Summary at Completion
```
Tests Executed: 10/10
Profitable Symbols: 8 / 10
Total Trades Across All: 425
Total Profit Across All: ¥125,500.00
Average Win Rate: 57.50%
Average Return: 12.35%
Average Profit Factor: 1.85
Average Max Drawdown: 15.20%

🏆 Best Performers:
1. SSE:603203: ¥25,000 profit, 62.22% win rate
2. SZSE:000988: ¥18,750 profit, 58.33% win rate
...

💔 Worst Performers:
1. SSE:600547: ¥-5,000 profit, 45.00% win rate
2. SSE:603300: ¥-2,500 profit, 48.75% win rate
...
```

## Generated Files

After completion, you'll have:

### 1. Main Report
**File**: `a_share_sqzmom_pro_v6_backtest_[timestamp].json`

Contains:
- Test metadata and summary
- Aggregate metrics across all stocks
- Top 5 best performers
- Top 5 worst performers
- Detailed results for each stock
- Raw metric tables

### 2. Detailed Trade Logs
Within the JSON report, each stock includes:
- Entry/exit times and prices
- Profit/loss per trade
- Trade duration
- Signal information

## Analyzing Results

### Method 1: JSON Analysis (Recommended)

Use the provided analysis script:

```bash
node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_[timestamp].json
```

This generates:
- Executive summary
- Overall performance metrics
- Best and worst performers
- Key insights and observations
- Risk analysis
- Recommendations
- CSV export for spreadsheet analysis

### Method 2: Manual JSON Review

Open the JSON file in your text editor or use jq:

```bash
# View summary
jq '.summary' a_share_sqzmom_pro_v6_backtest_*.json

# View best performers
jq '.best_performers' a_share_sqzmom_pro_v6_backtest_*.json

# View all detailed results
jq '.detailed_results' a_share_sqzmom_pro_v6_backtest_*.json
```

### Method 3: CSV Export

The analysis script also exports a CSV file:

```bash
# Open in Excel or Google Sheets
open a_share_sqzmom_pro_v6_backtest_*_DETAILED.csv
```

Columns:
- Symbol
- Trades
- Win Rate %
- Return %
- Net Profit
- Gross Profit
- Gross Loss
- Profit Factor
- Avg Win/Loss
- Max Win/Loss
- Max Drawdown %

## Key Metrics Explained

### Win Rate (%)
- **Definition**: Percentage of trades that were profitable
- **Formula**: (Winning Trades / Total Trades) × 100
- **Good Range**: > 50% is acceptable, > 55% is good

### Profit Factor
- **Definition**: Ratio of gross profit to gross loss
- **Formula**: Gross Profit / Gross Loss
- **Good Range**: > 1.5 is acceptable, > 2.0 is excellent

### Max Drawdown (%)
- **Definition**: Largest peak-to-trough decline
- **Impact**: Shows worst-case scenario and risk exposure
- **Good Range**: < 25% is acceptable, < 15% is excellent

### Total Return (%)
- **Definition**: Overall return on the initial capital
- **Formula**: (Net Profit / Initial Capital) × 100
- **Good Range**: > 10% annually is acceptable

### Net Profit
- **Definition**: Gross Profit - Gross Loss - Commissions
- **Currency**: Yuan (¥)
- **Impact**: Bottom line profitability

## Stock-by-Stock Analysis

For each stock, examine:

1. **Profitability**: Is Net Profit positive?
2. **Win Rate**: Is it > 50%?
3. **Profit Factor**: Is it > 1.5?
4. **Drawdown**: Is it reasonable (< 30%)?
5. **Trade Count**: Are there enough trades (> 20)?

### Red Flags

Watch for:
- ❌ Win Rate < 40%
- ❌ Profit Factor < 1.2
- ❌ Max Drawdown > 40%
- ❌ Negative net profit
- ❌ Very few trades (< 5)

### Green Flags

Look for:
- ✅ Win Rate > 55%
- ✅ Profit Factor > 1.8
- ✅ Max Drawdown < 15%
- ✅ Positive net profit
- ✅ Consistent trades (> 30)

## Performance Evaluation

### Overall Strategy Assessment

**Excellent** (Implement with confidence):
- Profitability Rate: > 80%
- Average Win Rate: > 55%
- Average Profit Factor: > 1.8
- Average Drawdown: < 15%

**Good** (Suitable for paper trading):
- Profitability Rate: > 60%
- Average Win Rate: > 50%
- Average Profit Factor: > 1.5
- Average Drawdown: < 25%

**Marginal** (Needs optimization):
- Profitability Rate: 40-60%
- Average Win Rate: 45-50%
- Average Profit Factor: 1.2-1.5
- Average Drawdown: 25-35%

**Poor** (Requires redesign):
- Profitability Rate: < 40%
- Average Win Rate: < 45%
- Average Profit Factor: < 1.2
- Average Drawdown: > 35%

## Next Steps Based on Results

### If Results Are Strong (Profitability > 80%)
1. ✅ Test on additional stocks
2. ✅ Run paper trading (demo account)
3. ✅ Monitor for 2-4 weeks
4. ✅ Consider live trading with reduced size

### If Results Are Moderate (Profitability 50-80%)
1. 🔍 Analyze worst-performing stocks for patterns
2. 🔧 Consider parameter optimization
3. 🧪 Test different entry/exit criteria
4. 📊 Increase sample size with additional stocks

### If Results Are Weak (Profitability < 50%)
1. ⚠️ Review strategy logic
2. 🔧 Significant parameter optimization needed
3. 🧪 Test different market conditions
4. 💭 Consider strategy redesign

## Troubleshooting

### Issue: "Connection failed"
**Solution**:
```bash
# Verify CDP is running
curl http://localhost:9222/json/version

# Restart TradingView with CDP flag
# On Windows: tradingview.exe --remote-debugging-port=9222
```

### Issue: "No strategy results"
**Solution**:
1. Ensure strategy is loaded and visible in TradingView
2. Verify indicators are calculating (check chart)
3. Wait longer between symbol changes (increase sleep values)
4. Check TradingView logs for errors

### Issue: "Incomplete metrics"
**Solution**:
1. Some metrics may not be available for all stocks
2. Check if sufficient historical data is available
3. Manually verify results in TradingView UI
4. Increase wait time in script

### Issue: Script hangs
**Solution**:
1. Check TradingView is not frozen
2. Restart MCP server: `npm start`
3. Verify CDP port 9222 is accessible
4. Reduce number of stocks temporarily to test

## Advanced Usage

### Test Subset of Stocks

Edit `a_share_sqzmom_pro_v6_backtest.js` and modify:

```javascript
// Line ~30
const TARGET_STOCKS = [
  'SSE:603203',  // Test only first stock
  // Remove other stocks for quick test
];
```

### Adjust Wait Times

For slower machines, increase delays:

```javascript
// Line ~220
await sleep(15000);  // Increase from 8000 to 15000
await sleep(12000);  // Increase from 8000 to 12000
```

### Custom Metrics Extraction

Modify `getStrategyMetrics()` function to extract additional fields from the tables.

## Performance Optimization

### For Faster Results
1. Test 3-5 stocks instead of 10
2. Reduce wait times (25-30 seconds between symbol changes)
3. Use 1-year historical period instead of 2-3 years
4. Run on faster machine with SSD

### For More Accurate Results
1. Increase wait times (35-40 seconds)
2. Test full 3-year historical period
3. Include all 10 stocks
4. Verify metrics manually in TradingView

## Expected Results Range

Based on typical SQZMOM strategies:

| Metric | Weak | Acceptable | Good | Excellent |
|--------|------|-----------|------|-----------|
| Win Rate | <40% | 40-50% | 50-60% | >60% |
| Profit Factor | <1.2 | 1.2-1.5 | 1.5-2.0 | >2.0 |
| Max Drawdown | >40% | 25-40% | 15-25% | <15% |
| Profitability Rate | <40% | 40-60% | 60-80% | >80% |

## Final Notes

- **Always paper trade first** before any real money
- **Monitor performance weekly** for consistency
- **Keep detailed trade logs** for analysis
- **Adjust parameters gradually**, not drastically
- **Test on new stocks** before trading

For questions or issues, refer to BACKTEST_GUIDE.md
