# A Share SQZMOM PRO v6 (Daily) - Comprehensive Backtest Guide

## Overview

This backtest framework is designed to evaluate the **A Share SQZMOM PRO v6 (Daily)** strategy on 10 carefully selected Chinese stocks. The strategy uses squeeze momentum indicators combined with trend analysis on the daily timeframe.

## Target Stocks

The following 10 stocks will be tested:

1. **SSE:603203** - Shanghai Exchange stock
2. **SSE:603040** - Shanghai Exchange stock
3. **SSE:603638** - Shanghai Exchange stock
4. **SZSE:002983** - Shenzhen Exchange stock
5. **SZSE:000988** - Shenzhen Exchange stock
6. **SZSE:000951** - Shenzhen Exchange stock
7. **SSE:603300** - Shanghai Exchange stock
8. **SSE:600547** - Shanghai Exchange stock
9. **SSE:603766** - Shanghai Exchange stock
10. **SSE:603529** - Shanghai Exchange stock

## Strategy: A Share SQZMOM PRO v6

### Strategy Description
- **Name**: A Share SQZMOM PRO v6 (Daily)
- **Type**: Squeeze Momentum Strategy
- **Timeframe**: Daily (D)
- **Initial Capital**: ¥100,000
- **Commission**: 0.03% per trade
- **Pyramiding**: Disabled
- **Process Orders on Close**: Disabled

### Key Parameters
- **Bollinger Bands (BB)**
  - Length: 20
  - Multiplier: 2.0

- **Keltner Channels (KC)**
  - Length: 20
  - Multiplier: 1.5

- **Trend Analysis**
  - Fast EMA: 60 periods
  - Slow EMA: 200 periods

- **Risk Management**
  - Risk Per Trade: 1.0%
  - Minimum Score: 65
  - ATR Length: 14
  - ATR Multiplier: 2.5
  - ATR Slippage: 0.1

- **Squeeze Parameters**
  - Cooldown Bars After Exit: 3
  - Min Squeeze Bars: 3
  - Max Squeeze Bars: 10

### Strategy Logic (SQZMOM - Squeeze Momentum)
1. **Squeeze Detection**: Identifies when Bollinger Bands move inside Keltner Channels (low volatility)
2. **Momentum Trigger**: Waits for momentum breakout after squeeze compression
3. **Trend Confirmation**: Uses dual EMA (60/200) to confirm trend direction
4. **Score System**: Calculates entry score based on multiple indicators (minimum 65 required)
5. **Risk Management**: Positions sized based on ATR volatility and 1% risk rule
6. **Exit Strategy**: Takes profits at defined levels or exits on trend reversal

## Backtest Execution Plan

### Phase 1: Data Preparation
- Load each stock one by one
- Set timeframe to Daily (D)
- Ensure sufficient historical data (2-3 years recommended)

### Phase 2: Metric Collection

#### Key Performance Indicators
- **Win Rate (%)**: Percentage of winning trades
- **Total Return (%)**: Overall return on initial capital
- **Profit Factor**: Gross Profit / Gross Loss ratio
- **Max Drawdown (%)**: Maximum peak-to-trough decline
- **Total Trades**: Number of completed trades
- **Avg Winning Trade**: Average profit per winning trade
- **Avg Losing Trade**: Average loss per losing trade
- **Recovery Factor**: Net Profit / Max Drawdown (measures drawdown recovery efficiency)
- **Sharpe Ratio**: Risk-adjusted return metric
- **Sortino Ratio**: Downside risk-adjusted return metric

#### Trade Log Details
- Entry Time and Price
- Exit Time and Price
- Profit/Loss Amount
- Profit/Loss Percentage
- Trade Duration
- Entry Signals Used
- Exit Reason

### Phase 3: Results Analysis

#### Winning/Losing Stocks
- Identify top 5 performing stocks (highest profit)
- Identify bottom 5 underperforming stocks (lowest profit)
- Categorize as Profitable (>0) or Unprofitable (≤0)

#### Aggregate Statistics
- Total trades across all stocks
- Combined profit/loss
- Average metrics across all stocks
- Profitability rate (% of stocks with positive returns)

#### Problem Trades Identification
- Largest losing trades per stock
- Trades with highest risk/reward ratios
- Consecutive losing streaks
- Max drawdown occurrences and durations

### Phase 4: Report Generation

The backtest generates a comprehensive JSON report including:
- Test metadata and timestamp
- Summary statistics
- Aggregate metrics across all stocks
- Top 5 best performers
- Top 5 worst performers
- Detailed results for each stock including:
  - Performance metrics
  - Trade logs
  - Raw indicator values

## Running the Backtest

### Prerequisites
1. TradingView Desktop application installed
2. CDP (Chrome DevTools Protocol) enabled on port 9222
3. MCP server running: `npm start`
4. Trading strategy loaded in TradingView

### Execution Steps

1. **Start the MCP server** (in project root):
```bash
npm start
```

2. **Run the backtest**:
```bash
node a_share_sqzmom_pro_v6_backtest.js
```

### What Happens During Execution

For each of the 10 stocks:
1. Sets the symbol in TradingView chart
2. Waits 8 seconds for data to load
3. Sets timeframe to Daily (D)
4. Waits 8 seconds for indicators to calculate
5. Extracts backtest results from strategy performance table
6. Collects trade entry/exit information
7. Records all metrics and trade details
8. Waits 2 seconds before next stock

**Total estimated runtime**: 25-35 minutes for all 10 stocks

## Output Files

The script generates:
- **JSON Report**: `a_share_sqzmom_pro_v6_backtest_[timestamp].json`
  - Contains all metrics, trade logs, and analysis
  - Suitable for further analysis and visualization

## Key Metrics Explained

### Win Rate (%)
- Percentage of trades that were profitable
- Formula: (Winning Trades / Total Trades) × 100
- Better performance typically >50%

### Profit Factor
- Ratio of gross profit to gross loss
- Formula: Gross Profit / Gross Loss
- Values > 1.5 are generally considered good
- Values > 2.0 are excellent

### Max Drawdown (%)
- Largest peak-to-trough decline experienced
- Shows the worst-case scenario during the backtest period
- Lower values are better for risk management

### Recovery Factor
- Measures how quickly strategy recovers from max drawdown
- Formula: Net Profit / Max Drawdown
- Higher values indicate better recovery capacity

### Sharpe Ratio
- Risk-adjusted return metric
- Accounts for return volatility
- Higher is better (typically >1.0 is good)

### Sortino Ratio
- Similar to Sharpe but only penalizes downside volatility
- Better indicator than Sharpe for strategies with non-normal distributions
- Higher is better

## Optimization Opportunities

After reviewing the backtest results, consider:
1. Adjusting squeeze duration parameters (Min/Max SQZ Bars)
2. Fine-tuning entry score threshold
3. Optimizing ATR multiplier for position sizing
4. Testing different cooldown periods
5. Adjusting EMA periods for trend confirmation

## Next Steps

1. Review the JSON report with all detailed metrics
2. Identify stocks with >50% win rate and positive profit factor
3. Analyze problem trades (largest losses)
4. Consider parameter optimization based on results
5. Validate findings with additional historical data if needed

## Important Notes

- **Commission Impact**: Backtest uses 0.03% commission per trade (typical for Chinese stocks)
- **Slippage**: ATR-based slippage (0.1×ATR) is included
- **Process Orders on Close**: Disabled to test real-world conditions
- **Historical Data**: Ensure sufficient bars for indicator calculation (recommend 500+ bars minimum)
- **Market Hours**: Chinese stock market trading hours (9:30-11:30, 13:00-15:00 China Time)

## Troubleshooting

### Connection Issues
- Ensure TradingView Desktop is running
- Verify CDP is enabled on port 9222
- Check MCP server is running: `npm start`

### No Strategy Results
- Confirm strategy is loaded and visible in TradingView
- Check that indicators are calculating properly
- Verify sufficient historical data is available
- May need longer wait time between commands (adjust sleep values)

### Incomplete Data
- Some stocks may have insufficient trading history
- Some metrics may not be available for all strategies
- Check TradingView logs for any errors

## Files Generated

```
a_share_sqzmom_pro_v6_backtest_2026-04-22T12-34-56-789Z.json
```

This JSON file contains:
- Test metadata (strategy name, date, timeframe)
- Summary statistics
- Aggregate metrics
- Best/worst performers
- Detailed results per stock
- Trade logs
- Raw metrics for custom analysis
