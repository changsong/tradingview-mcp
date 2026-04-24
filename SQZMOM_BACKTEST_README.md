# A Share SQZMOM PRO v6 (Daily) Strategy - Comprehensive Backtest Framework

## 📋 Overview

This is a complete backtest framework for the **A Share SQZMOM PRO v6 (Daily)** strategy on 10 selected Chinese A-shares. The framework consists of:

1. **Backtest Execution Script** - Runs the strategy on each stock and collects metrics
2. **Results Analysis Tool** - Analyzes results and generates insights
3. **Setup Validator** - Checks your environment before running backtest
4. **Comprehensive Documentation** - Guides for setup, execution, and analysis

## 📚 Documentation Files

### Quick Reference
- **BACKTEST_EXECUTION.md** - Step-by-step guide to run and analyze backtest
- **BACKTEST_GUIDE.md** - Detailed strategy overview and metric explanations
- **This README** - Overview and quick start

### Script Files
- **a_share_sqzmom_pro_v6_backtest.js** - Main backtest executor
- **analyze_backtest_results.js** - Results analyzer with insights
- **validate_backtest_setup.js** - Environment health checker

## 🚀 Quick Start

### 1. Validate Setup (2 minutes)

```bash
# In project root directory
node validate_backtest_setup.js
```

### 2. Run Backtest (25-35 minutes)

```bash
# Ensure MCP server is running first
npm start

# In another terminal
node a_share_sqzmom_pro_v6_backtest.js
```

### 3. Analyze Results (5 minutes)

```bash
node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_2026-04-22T*.json
```

## 📊 Target Stocks

The backtest will test the strategy on these 10 Chinese stocks:

```
Shanghai Exchange (SSE):
- SSE:603203
- SSE:603040
- SSE:603638
- SSE:603300
- SSE:600547
- SSE:603766
- SSE:603529

Shenzhen Exchange (SZSE):
- SZSE:002983
- SZSE:000988
- SZSE:000951
```

## 🎯 Strategy Overview

### A Share SQZMOM PRO v6 (Daily)

**Strategy Type**: Squeeze Momentum Breakout
**Timeframe**: Daily (D)
**Capital**: ¥100,000
**Commission**: 0.03%

**Key Components**:
- Bollinger Bands (20, 2.0) + Keltner Channels (20, 1.5) for squeeze detection
- 60/200 EMA for trend confirmation
- Momentum breakout after squeeze compression
- Score-based entry filtering (minimum 65)
- ATR-based risk management (1% risk per trade)
- Position sizing based on volatility

## 📈 Key Metrics Collected

### Performance Metrics
- **Win Rate (%)** - Percentage of winning trades
- **Total Return (%)** - Overall ROI on initial capital
- **Profit Factor** - Gross Profit / Gross Loss ratio
- **Max Drawdown (%)** - Worst peak-to-trough decline
- **Total Trades** - Number of trades executed
- **Avg Winning Trade** - Average profit per win
- **Avg Losing Trade** - Average loss per loss

### Risk Metrics
- **Recovery Factor** - Net Profit / Max Drawdown
- **Sharpe Ratio** - Risk-adjusted return
- **Sortino Ratio** - Downside risk-adjusted return
- **Consecutive Wins/Losses** - Streak statistics

### Trade Details
- Entry/Exit times and prices
- Profit/Loss per trade
- Trade duration
- Entry signals used

## 📋 Files Generated

### During Backtest
- Real-time console output showing progress
- One JSON file with all results: `a_share_sqzmom_pro_v6_backtest_[timestamp].json`

### After Analysis
- **_ANALYSIS.json** - Summary statistics and insights
- **_DETAILED.csv** - Excel-friendly format for spreadsheet analysis

## 🔍 Analysis Workflow

### 1. Quick View (Console)
```bash
node analyze_backtest_results.js backtest_file.json
```

Provides:
- Executive summary
- Overall performance metrics
- Best and worst performers
- Key insights and observations
- Risk analysis
- Recommendations

### 2. Detailed Review
Open the `_DETAILED.csv` file in Excel/Google Sheets:
- Compare all stocks side-by-side
- Create pivot tables
- Generate charts

### 3. JSON Data
For custom analysis, use the JSON files:
- `backtest_file.json` - Complete raw data
- `backtest_file_ANALYSIS.json` - Structured analysis

## ✅ Success Criteria

### Excellent Results (Ready for Paper Trading)
- ✅ Profitability Rate: > 80% (8+ stocks profitable)
- ✅ Average Win Rate: > 55%
- ✅ Average Profit Factor: > 1.8
- ✅ Average Drawdown: < 15%

### Good Results (Needs Paper Trading Validation)
- ✅ Profitability Rate: > 60% (6+ stocks profitable)
- ✅ Average Win Rate: > 50%
- ✅ Average Profit Factor: > 1.5
- ✅ Average Drawdown: < 25%

### Acceptable Results (Needs Optimization)
- ⚠️ Profitability Rate: 40-60%
- ⚠️ Average Win Rate: 45-50%
- ⚠️ Average Profit Factor: 1.2-1.5
- ⚠️ Average Drawdown: 25-35%

### Poor Results (Significant Work Needed)
- ❌ Profitability Rate: < 40%
- ❌ Average Win Rate: < 45%
- ❌ Average Profit Factor: < 1.2
- ❌ Average Drawdown: > 35%

## 🛠️ Prerequisites

- TradingView Desktop (Latest version)
- Node.js 18+ installed
- CDP (Chrome DevTools Protocol) enabled on port 9222
- MCP server running (`npm start`)
- Strategy "A Share SQZMOM PRO v6 (Daily)" loaded in TradingView

## ⚙️ Configuration

### Enable CDP on Windows

**Option 1: Batch File**
```batch
@echo off
start "" "C:\Program Files\TradingView\tradingview.exe" --remote-debugging-port=9222
```

**Option 2: Registry/Shortcut**
- Right-click TradingView shortcut
- Properties → Target
- Add at end: `--remote-debugging-port=9222`

**Verify CDP is working:**
```bash
curl http://localhost:9222/json/version
```

### Start MCP Server
```bash
npm start
```

Should show:
```
⚠  tradingview-mcp  |  Unofficial tool. Not affiliated with TradingView Inc. or Anthropic.
```

## 🚨 Troubleshooting

### "Connection failed"
```bash
# Verify CDP is running
curl http://localhost:9222/json/version

# If not, restart TradingView with CDP flag
# Windows: tradingview.exe --remote-debugging-port=9222
```

### "No strategy results"
1. Ensure strategy is loaded in TradingView chart
2. Check that indicators are calculating (visible on chart)
3. Verify sufficient historical data available
4. Increase wait times in script (change `await sleep(25000)` to `await sleep(35000)`)

### "Script hangs"
1. Check TradingView is not frozen or in background
2. Verify port 9222 is not blocked by firewall
3. Restart: `npm start` in separate terminal
4. Test single stock first to debug

## 📊 Performance Analysis Examples

### Strong Performer Example
```
Symbol: SSE:603203
Trades: 48
Win Rate: 62.5%
Total Return: 18.5%
Net Profit: ¥18,500
Profit Factor: 2.15
Max Drawdown: 12.3%
```
**Assessment**: Excellent - Ready for paper trading

### Weak Performer Example
```
Symbol: SSE:600547
Trades: 32
Win Rate: 43.75%
Total Return: -5.2%
Net Profit: ¥-5,200
Profit Factor: 0.85
Max Drawdown: 28.5%
```
**Assessment**: Poor - May need strategy adjustment for this stock

## 🔄 Next Steps After Backtest

### If Results are Strong (>80% profitable stocks)
1. ✅ Export best performers list
2. ✅ Start paper trading on top 5 stocks
3. ✅ Monitor for 2-4 weeks
4. ✅ Document live performance vs backtest
5. ✅ Consider live trading with reduced size

### If Results are Moderate (50-80% profitable)
1. 🔍 Analyze worst performers for patterns
2. 🔧 Consider parameter optimization
3. 🧪 Test different market conditions
4. 📚 Study high-loss trades for common factors
5. 📊 Increase sample size with more stocks

### If Results are Weak (<50% profitable)
1. ⚠️ Review strategy logic
2. 🔧 Major parameter optimization needed
3. 🧪 Test with different settings
4. 💭 Consider alternative strategies
5. 📖 Study failed trades in detail

## 📞 Common Questions

**Q: How long does backtest take?**
A: 25-35 minutes for all 10 stocks (2-3.5 minutes per stock)

**Q: Can I test fewer stocks?**
A: Yes, edit `a_share_sqzmom_pro_v6_backtest.js` line 30

**Q: What if no data loads?**
A: Check that symbols are valid on TradingView for your account type

**Q: Can I change the timeframe?**
A: Yes, but this strategy is optimized for daily charts

**Q: How often should I rerun the backtest?**
A: After any strategy parameter changes, or quarterly for market condition validation

## 📚 Additional Resources

- **BACKTEST_GUIDE.md** - Detailed strategy description
- **BACKTEST_EXECUTION.md** - Step-by-step execution guide
- **A_Share_SQZMOM_PRO_v6_Daily_source.pine** - Strategy source code

## ⚠️ Disclaimer

- This backtest framework is for educational and research purposes
- Past performance does not guarantee future results
- Always paper trade before live trading
- Risk management is critical - never risk more than 1% per trade
- Ensure compliance with local trading regulations
- Not affiliated with TradingView Inc.

## 📝 Version History

- **v1.0** (2026-04-22) - Initial release
  - Comprehensive backtest framework
  - Results analysis tools
  - Setup validation
  - Full documentation

## 🎯 Key Features

✅ Automated testing of 10 stocks
✅ Real-time progress tracking
✅ Comprehensive metric collection
✅ Trade-by-trade logging
✅ Automated analysis and insights
✅ CSV export for spreadsheet analysis
✅ Performance recommendations
✅ Risk analysis tools
✅ Setup validation
✅ Detailed documentation

## 📧 Support

For issues or questions:
1. Check BACKTEST_EXECUTION.md troubleshooting section
2. Verify setup with: `node validate_backtest_setup.js`
3. Review BACKTEST_GUIDE.md for metric definitions
4. Check strategy source: A_Share_SQZMOM_PRO_v6_Daily_source.pine

---

**Ready to start?**

```bash
# Step 1: Validate setup
node validate_backtest_setup.js

# Step 2: Run backtest
npm start  # In one terminal
node a_share_sqzmom_pro_v6_backtest.js  # In another

# Step 3: Analyze results
node analyze_backtest_results.js a_share_sqzmom_pro_v6_backtest_*.json
```

Good luck with your backtest! 🚀
