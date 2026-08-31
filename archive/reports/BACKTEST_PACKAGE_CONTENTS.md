# A Share SQZMOM PRO v6 Backtest Framework - Complete Package

## 📦 Package Contents

This comprehensive backtest framework includes everything needed to execute, analyze, and understand the A Share SQZMOM PRO v6 (Daily) strategy performance on 10 Chinese stocks.

---

## 📂 Core Execution Scripts

### 1. `a_share_sqzmom_pro_v6_backtest.js` (MAIN)
**Purpose**: Execute the comprehensive backtest
**Runtime**: 25-35 minutes for 10 stocks

**What it does**:
- Loads each of 10 target stocks sequentially
- Sets timeframe to Daily (D)
- Collects comprehensive performance metrics
- Extracts trade logs and signals
- Generates detailed JSON report
- Provides real-time progress updates

**Usage**:
```bash
node a_share_sqzmom_pro_v6_backtest.js
```

**Output**:
```
a_share_sqzmom_pro_v6_backtest_2026-04-22T12-34-56-789Z.json
```

---

### 2. `analyze_backtest_results.js` (ANALYSIS)
**Purpose**: Analyze and interpret backtest results
**Runtime**: < 1 minute

**What it does**:
- Parses JSON backtest report
- Calculates aggregate statistics
- Identifies best and worst performers
- Generates insights and observations
- Analyzes risk metrics
- Creates recommendations
- Exports CSV and JSON analysis files

**Usage**:
```bash
node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_*.json
```

**Output**:
- Console report with insights
- `a_share_sqzmom_pro_v6_backtest_*_ANALYSIS.json` - Structured analysis
- `a_share_sqzmom_pro_v6_backtest_*_DETAILED.csv` - Spreadsheet-ready data

---

### 3. `validate_backtest_setup.js` (SETUP CHECKER)
**Purpose**: Validate environment before running backtest
**Runtime**: 30-60 seconds

**What it checks**:
- MCP server connectivity
- TradingView connection via CDP
- Symbol and timeframe setting capability
- Data reading functionality
- Strategy table availability
- Label reading
- Script file presence
- Node.js version compatibility

**Usage**:
```bash
node validate_backtest_setup.js
```

**Output**:
- Pass/Fail for each check
- System information
- Configuration guide if setup issues found

---

## 📖 Documentation Files

### 1. `SQZMOM_BACKTEST_README.md` (START HERE)
**Purpose**: Quick reference and overview
**Audience**: All users

**Contains**:
- Quick start guide
- Target stocks list
- Key metrics overview
- Files generated
- Success criteria
- Prerequisites
- Configuration guide
- Troubleshooting
- FAQ

**Read when**: First time using the framework

---

### 2. `BACKTEST_EXECUTION.md` (DETAILED GUIDE)
**Purpose**: Step-by-step execution instructions
**Audience**: Users running the backtest

**Contains**:
- Detailed prerequisites checklist
- Setup steps (CDP, MCP server)
- Verification procedures
- Full backtest workflow
- Real-time output examples
- Results analysis methods
- CSV export guide
- Metrics explanation
- Stock evaluation criteria
- Performance levels
- Next steps based on results
- Advanced usage tips
- Troubleshooting guide

**Read when**: Before running backtest or if issues occur

---

### 3. `BACKTEST_GUIDE.md` (STRATEGY DETAILS)
**Purpose**: Comprehensive strategy and backtest information
**Audience**: Strategy researchers, traders

**Contains**:
- Strategy overview and description
- Complete parameter list
- Strategy logic explanation
- Backtest execution plan
- Metric collection details
- Results analysis approach
- Problem trade identification
- Report generation info
- Execution steps
- Output files description
- Metrics explanations
- Optimization opportunities
- Important notes
- Troubleshooting guide

**Read when**: Understanding strategy details or optimizing parameters

---

## 🎯 Target Stocks

The framework tests these 10 Chinese A-shares:

**Shanghai Exchange (SSE) - 7 stocks**:
- SSE:603203
- SSE:603040
- SSE:603638
- SSE:603300
- SSE:600547
- SSE:603766
- SSE:603529

**Shenzhen Exchange (SZSE) - 3 stocks**:
- SZSE:002983
- SZSE:000988
- SZSE:000951

---

## 📊 Metrics Collected

### Performance Metrics
- Total Trades
- Winning Trades / Losing Trades
- Win Rate (%)
- Total Return (%)
- Net Profit (¥)
- Gross Profit (¥)
- Gross Loss (¥)
- Profit Factor
- Average Winning Trade (¥)
- Average Losing Trade (¥)
- Largest Winning Trade (¥)
- Largest Losing Trade (¥)

### Risk Metrics
- Max Drawdown (%)
- Max Drawdown Duration
- Recovery Factor
- Sharpe Ratio
- Sortino Ratio
- Consecutive Wins
- Consecutive Losses

### Trade Details
- Entry time and price
- Exit time and price
- Profit/Loss per trade
- Trade duration
- Entry signals used
- Exit reason

---

## 📋 Generated Report Structure

### Main Backtest Report
```json
{
  "test_metadata": {
    "strategy_name": "A Share SQZMOM PRO v6 (Daily)",
    "test_date": "2026-04-22T12:34:56.789Z",
    "total_stocks_tested": 10
  },
  "summary": {
    "total_tests": 10,
    "successful_tests": 10,
    "profitable_symbols": 8
  },
  "aggregate_metrics": {
    "total_trades_across_all": 425,
    "total_profit_across_all": "¥125,500.00",
    "average_win_rate": "57.50%",
    "average_profit_factor": "1.85"
  },
  "best_performers": [...],
  "worst_performers": [...],
  "detailed_results": [
    {
      "symbol": "SSE:603203",
      "performance": {...},
      "trades": {...},
      "raw_metrics": {...}
    }
  ]
}
```

### Analysis Report
```json
{
  "summary_stats": {
    "allTrades": 425,
    "profitableStocks": 8,
    "avgWinRate": 57.50,
    "maxProfit": 25000,
    "minProfit": -5000
  },
  "insights": [...],
  "recommendations": [...],
  "high_risk_stocks": [...],
  "profitable_stocks": [...]
}
```

### Detailed CSV
```csv
Symbol,Trades,Win Rate %,Return %,Net Profit,...
SSE:603203,48,62.22,18.50,18500.00,...
SZSE:000988,45,58.33,15.75,15750.00,...
...
```

---

## 🚀 Quick Execution Flow

### 1. Preparation (5 minutes)
```bash
# Enable CDP in TradingView
tradingview.exe --remote-debugging-port=9222

# Verify CDP
curl http://localhost:9222/json/version

# Start MCP server
npm start
```

### 2. Validation (1 minute)
```bash
# In new terminal
node validate_backtest_setup.js
```
**Expected**: All checks pass ✅

### 3. Backtest (25-35 minutes)
```bash
# Run backtest
node a_share_sqzmom_pro_v6_backtest.js
```
**Output**: `a_share_sqzmom_pro_v6_backtest_[timestamp].json`

### 4. Analysis (5 minutes)
```bash
# Analyze results
node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_*.json
```
**Outputs**:
- Console report
- `_ANALYSIS.json`
- `_DETAILED.csv`

---

## ✅ Success Criteria

### Excellent (Ready for Paper Trading)
- ✅ Profitability Rate: > 80%
- ✅ Average Win Rate: > 55%
- ✅ Average Profit Factor: > 1.8
- ✅ Average Drawdown: < 15%

### Good (Needs Validation)
- ✅ Profitability Rate: > 60%
- ✅ Average Win Rate: > 50%
- ✅ Average Profit Factor: > 1.5
- ✅ Average Drawdown: < 25%

### Acceptable (Needs Optimization)
- ⚠️ Profitability Rate: 40-60%
- ⚠️ Average Win Rate: 45-50%
- ⚠️ Average Profit Factor: 1.2-1.5
- ⚠️ Average Drawdown: 25-35%

### Poor (Major Work Needed)
- ❌ Profitability Rate: < 40%
- ❌ Average Win Rate: < 45%
- ❌ Average Profit Factor: < 1.2
- ❌ Average Drawdown: > 35%

---

## 📚 Which File to Read?

### I want to...
- **Get started quickly** → SQZMOM_BACKTEST_README.md
- **Run the backtest** → BACKTEST_EXECUTION.md
- **Understand the strategy** → BACKTEST_GUIDE.md
- **Analyze results** → Run analyze_backtest_results.js
- **Verify setup** → Run validate_backtest_setup.js

---

## 🛠️ System Requirements

**Hardware**:
- CPU: Dual-core or better
- RAM: 4GB minimum, 8GB recommended
- Storage: 1GB free (for data and reports)
- Internet: Required for TradingView connection

**Software**:
- Windows 10+ / macOS 10.15+ / Linux (tested on Windows)
- Node.js 18.0 or higher
- TradingView Desktop (latest version)
- Chrome/Chromium-based browser (for CDP)

**Network**:
- Port 9222 available (CDP)
- Network access to TradingView servers

---

## 🔧 Customization

### Test Fewer Stocks
Edit `a_share_sqzmom_pro_v6_backtest.js` line ~30:
```javascript
const TARGET_STOCKS = [
  'SSE:603203',  // Keep only desired stocks
  'SZSE:000988'
];
```

### Adjust Wait Times
For slower systems, increase timeouts:
```javascript
await sleep(35000);  // Increase from 25000
```

### Change Lookback Period
Modify TradingView settings:
- Use chart scroll/zoom features
- Adjust dates via `chart_scroll_to_date`

### Extract Additional Metrics
Edit `getStrategyMetrics()` function in backtest script to capture additional fields from strategy tables.

---

## 📞 Support & Troubleshooting

### Common Issues

**"Connection failed"**
- Verify CDP: `curl http://localhost:9222/json/version`
- Restart TradingView with flag
- Check firewall allows port 9222

**"No strategy results"**
- Ensure strategy is loaded in TradingView
- Check indicators are calculating on chart
- Verify sufficient historical data
- Increase wait times in script

**"Script hangs"**
- Check TradingView is responsive
- Restart MCP server: `npm start`
- Test with single stock first
- Verify CDP port access

### Debug Steps
1. Run: `node validate_backtest_setup.js`
2. Review BACKTEST_EXECUTION.md troubleshooting
3. Check TradingView application logs
4. Test with single stock to isolate issue

---

## 📊 Example Results Interpretation

### Strong Performer
```
Symbol: SSE:603203
Total Return: 18.50%
Net Profit: ¥18,500
Profit Factor: 2.15
Win Rate: 62.22%
Max Drawdown: 12.3%
```
**Verdict**: ✅ Ready for paper trading

### Weak Performer
```
Symbol: SSE:600547
Total Return: -5.2%
Net Profit: ¥-5,200
Profit Factor: 0.85
Win Rate: 43.75%
Max Drawdown: 28.5%
```
**Verdict**: ❌ Avoid or optimize

---

## 🔄 Next Steps After Backtest

**If Results > 80% Profitable**:
1. Document top performers
2. Start paper trading on best stocks
3. Monitor for 2-4 weeks
4. Consider live trading with 1% position size

**If Results 50-80% Profitable**:
1. Analyze underperformers
2. Optimize parameters
3. Test on additional stocks
4. Validate with different market conditions

**If Results < 50% Profitable**:
1. Review strategy logic
2. Major parameter optimization needed
3. Test alternative approaches
4. Study failed trades in detail

---

## 📝 File Manifest

### Executable Scripts (3 files)
- `a_share_sqzmom_pro_v6_backtest.js` - Main backtest
- `analyze_backtest_results.js` - Results analysis
- `validate_backtest_setup.js` - Setup validation

### Documentation (4 files)
- `SQZMOM_BACKTEST_README.md` - Quick reference
- `BACKTEST_EXECUTION.md` - Detailed guide
- `BACKTEST_GUIDE.md` - Strategy details
- `BACKTEST_PACKAGE_CONTENTS.md` - This file

### Strategy Source (1 file)
- `A_Share_SQZMOM_PRO_v6_Daily_source.pine` - Strategy code

---

## ✨ Key Features

✅ Fully automated testing
✅ Real-time progress tracking
✅ Comprehensive metrics collection
✅ Trade-by-trade logging
✅ Automated analysis with insights
✅ CSV export for spreadsheet analysis
✅ Performance recommendations
✅ Risk analysis tools
✅ Setup validation
✅ Detailed documentation
✅ Troubleshooting guides
✅ Customizable parameters

---

## 📜 License & Disclaimer

- Framework provided as-is for educational purposes
- Not affiliated with TradingView Inc.
- Past performance ≠ future results
- Always paper trade before live trading
- Risk management is your responsibility
- Use at your own risk

---

**Ready to start your backtest?**

```bash
1. node validate_backtest_setup.js
2. npm start (in separate terminal)
3. node a_share_sqzmom_pro_v6_backtest.js
4. node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_*.json
```

For detailed guidance, read: **BACKTEST_EXECUTION.md**

---

Generated: 2026-04-22
Framework Version: 1.0
