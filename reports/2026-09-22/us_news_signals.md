---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_8bd63805b68111f19825525400cd780f
    ReservedCode1: kaC99k5rQfKOhx2UrXar8pQgZjIfPmBdG92UDCn3kvN5W3QfsBhJUoDQ6D0TPB52FNsA1tbkiVGXWvYsUGRFxX60ur3S4jxp7/oSal0REwRYXoetqDdMFWfQv+tIZ3U6gIvNc198+Cnie6FJlPWHK9uOoTGdWPez6eYdUUOrkOp+bz/YD4Pyc1ge3ic=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_8bd63805b68111f19825525400cd780f
    ReservedCode2: kaC99k5rQfKOhx2UrXar8pQgZjIfPmBdG92UDCn3kvN5W3QfsBhJUoDQ6D0TPB52FNsA1tbkiVGXWvYsUGRFxX60ur3S4jxp7/oSal0REwRYXoetqDdMFWfQv+tIZ3U6gIvNc198+Cnie6FJlPWHK9uOoTGdWPez6eYdUUOrkOp+bz/YD4Pyc1ge3ic=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-22  |  **News Window:** 2026-09-15 ~ 2026-09-22（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (44)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:MSFT** | **89** | 9.24 | 🟢 Long (Strong) | Momentum / Hold | High | 5/25 | - |
| 2 | **NASDAQ:AMD** | **86** | 25.95 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:LITE** | **79** | 7.02 | 🟢 Long (Strong) | Momentum / Hold | High | 4/26 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:P** | **78** | 6.78 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/2 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:BE** | **76** | 6.57 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:SMCI** | **76** | 9.89 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/20 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:PLTR** | **73** | 6.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 8 | **NASDAQ:AAPL** | **72** | 9.7 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 11/19 | Overheated Sentiment (one-sided bullish) |
| 9 | **NASDAQ:MU** | **71** | 5.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 10 | **NASDAQ:HOOD** | **71** | 13.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:CRWD** | **70** | 10.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/13 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:DT** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/12 | - |
| 13 | **NYSE:LLY** | **65** | 3.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 14 | **NYSE:ANET** | **64** | 3.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 15 | **NYSE:ETN** | **64** | 3.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/19 | - |
| 16 | **NASDAQ:TEM** | **63** | 5.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/13 | - |
| 17 | **NYSE:DELL** | **62** | 5.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | - |
| 18 | **NASDAQ:INCY** | **61** | 2.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/14 | - |
| 19 | **NASDAQ:PANW** | **60** | 4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/17 | - |
| 20 | **NYSE:ASX** | **59** | 2.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/5 | - |
| 21 | **NASDAQ:AMZN** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 22 | **NASDAQ:GRAL** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/7 | - |
| 23 | **NASDAQ:SNDK** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 24 | **NASDAQ:NBIS** | **57** | 1.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/22 | - |
| 25 | **NASDAQ:MRVL** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 26 | **NYSE:BAP** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 27 | **NASDAQ:VSAT** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 28 | **NYSE:HPE** | **53** | 0.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 29 | **NASDAQ:QCOM** | **52** | 0.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 30 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 33 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 34 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 36 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:TSM** | **50** | -0.08 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 6/24 | - |
| 40 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:INTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 42 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 43 | **NYSE:C** | **49** | -0.22 | ⚪ No Trade (Neutral) | Watch | Low | 6/24 | - |
| 44 | **NASDAQ:STX** | **40** | -2.33 | ⚪ No Trade (Neutral) | Watch | Low | 8/22 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.24 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Microsoft’s Higher Dividend Comes with a Modest Yield and Heavy AI Spe
- 🟢 [Earnings|w2.34] Microsoft vs Alibaba: Which Cloud AI Stock Is Better Positioned?
- 🟢 [Earnings|w2.34] Is It Too Late To Buy Microsoft Stock After Its Summer Run?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.76 | Yahoo | Microsoft’s Higher Dividend Comes with a Modest Yield and He |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Microsoft (MSFT) Laps the Stock Market: Here's Why |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | Microsoft (MSFT) Stock Looks Reasonable Despite Its 75% Five |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Microsoft vs Alibaba: Which Cloud AI Stock Is Better Positio |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Is It Too Late To Buy Microsoft Stock After Its Summer Run? |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.02 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 26 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Lumentum Shares Rise 12% in a Month: Is There More Upside Ahead?
- 🟢 [Earnings|w2.34] Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentum With a B
- 🟢 [Earnings|w2.34] Lumentum (LITE) Moves 4.2% Higher: Will This Strength Last?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Lumentum Shares Rise 12% in a Month: Is There More Upside Ah |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | ChartMill | Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentu |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Is Lumentum (LITE) Quietly Rewiring Its AI Data Center Role  |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Lumentum (LITE) Moves 4.2% Higher: Will This Strength Last? |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.57 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Why Did Bloom Energy Stock More Than Triple In A Year?
- 🟢 [Industry|w1.8] Bloom Energy (BE) Surges as AI Hyperscalers Adopt Solid Oxide Fuel Cel
- 🟢 [Industry|w1.8] BE Stock Jumps Premarket Ahead Of S&P 500 Inclusion: US Army Awards Po

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Why Bloom Energy (BE) Outpaced the Stock Market Today |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Why Did Bloom Energy Stock More Than Triple In A Year? |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | Bloom Energy (BE) Surges as AI Hyperscalers Adopt Solid Oxid |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | BE Stock Jumps Premarket Ahead Of S&P 500 Inclusion: US Army |
| 2026-09-20 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy (BE) Unveils a New Power Play for the AI Boom |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Bloom Energy Honors Louisville First Responders During ESPN  |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Are Oils-Energy Stocks Lagging  Bloom Energy (BE) This Year? |
| 2026-09-18 | Rumor | 🟢 +1 | 0.63 | Benzinga | Jim Cramer Flags 'Boatload' of Bullish Option Buying in Micr |

---

## 🟢 Mid Long (12)

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 6.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Palantir Technologies (NASDAQ:PLTR): High Growth Momentum Meets Breako
- 🟢 [Earnings|w2.34] Beat the Market Like Zacks: PBF, Palantir, Adobe in Focus
- 🟢 [Industry|w1.8] Palantir Technologies (PLTR) Unveils Alliance Push Across AI Supply Ch

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Michael Burry Doubles Down On Palantir Bear Case: ‘A Lot Of’ Money Sti

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.76 | ChartMill | Palantir Technologies (NASDAQ:PLTR): High Growth Momentum Me |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Beat the Market Like Zacks: PBF, Palantir, Adobe in Focus |
| 2026-09-21 | Earnings | 🔴 -1 | 2.34 | Yahoo | Michael Burry Doubles Down On Palantir Bear Case: ‘A Lot Of’ |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | Palantir Technologies (PLTR) Unveils Alliance Push Across AI |
| 2026-09-19 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Palantir: The Business Is Delivering, But The Price Still De |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Jim Cramer Says His Palantir Technologies Inc. (NASDAQ:PLTR) |
| 2026-09-18 | Analyst Action | ⚪  0 | 1.26 | Benzinga | $1000 Invested In Palantir Technologies 5 Years Ago Would Be |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Micron Q4 Preview: Why $2,000 Is Becoming A Plausible Bull Case
- 🟢 [Earnings|w2.34] How Much Of Micron's Revenue Has A Price Ceiling?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Micron Q4 Preview: Why $2,000 Is Becoming A Plausible Bull C |
| 2026-09-21 | Earnings | ⚪  0 | 2.34 | Yahoo | Micron (MU) Beats Stock Market Upswing: What Investors Need  |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | NVIDIA Or Micron: Which Gets Paid More Safely For The AI Sho |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | How Much Of Micron's Revenue Has A Price Ceiling? |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 13.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Robinhood CEO Says Crypto Will Beat Sports at Prediction Markets' Own 
- 🟢 [Industry|w2.13] Robinhood: The Simplicity Of This Thesis Is Precisely Why I'm Bullish
- 🟢 [Industry|w2.13] Why Robinhood Markets Crushed it on Monday

**Bearish Factors:**
- 🔴 [Industry|w2.13] HOOD Stock Dips Overnight: CEO Vlad Tenev Sells Shares Worth $31M

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Robinhood: The Simplicity Of This Thesis Is Precisely Why I' |
| 2026-09-22 | Industry | 🔴 -1 | 2.13 | Yahoo | HOOD Stock Dips Overnight: CEO Vlad Tenev Sells Shares Worth |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Robinhood Markets Crushed it on Monday |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Robinhood CEO Says Crypto Will Beat Sports at Prediction Mar |
| 2026-09-21 | Policy | ⚪  0 | 2.16 | Yahoo | Robinhood’s Vlad Tenev: Trump Accounts Could Become “The Big |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood Markets, Inc. (HOOD) Recently Broke Out Above the  |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Prediction: Robinhood Will Launch Tokenized Stock Trading in |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Benzinga | Top 6 Crypto Stocks Climbing with Bitcoin Right Now |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] How to Play CrowdStrike Stock at All-Time Highs
- 🟢 [Earnings|w2.34] Can Falcon Flex Momentum Keep Driving CrowdStrike's ARR Growth?
- 🟢 [Analyst Action|w2.16] CrowdStrike Stock Jumped 15% Last Week. Here’s What Happened.

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Cybersecurity Stocks Extend Gains on AI Safety Warnings: CrowdStrike a
- 🔴 [Industry|w2.13] Strategy, CrowdStrike, MongoDB, ServiceNow, and Okta Shares Are Soarin

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🔴 -1 | 2.13 | Yahoo | Strategy, CrowdStrike, MongoDB, ServiceNow, and Okta Shares  |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | How to Play CrowdStrike Stock at All-Time Highs |
| 2026-09-21 | Earnings | 🔴 -1 | 2.34 | Yahoo | Cybersecurity Stocks Extend Gains on AI Safety Warnings: Cro |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Can Falcon Flex Momentum Keep Driving CrowdStrike's ARR Grow |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | CrowdStrike Stock Jumped 15% Last Week. Here’s What Happened |
| 2026-09-20 | Industry | 🟢 +1 | 1.5 | Yahoo | The AI Slowdown Trade Has Some Winners: CrowdStrike and Palo |
| 2026-09-20 | Industry | ⚪  0 | 1.5 | Yahoo | Why CrowdStrike, Palo Alto Networks, SentinelOne, and Other  |
| 2026-09-20 | Earnings | 🟢 +1 | 1.95 | Yahoo | These 3 Stocks Sit at the Center of NVIDIA’s Cybersecurity P |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 12 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For Friday
- 🟢 [Analyst Action|w1.26] Needham Upgrades Dynatrace to Buy, Announces $68 Price Target
- 🟢 [Industry|w1.05] Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Compounding

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 1.05 | ChartMill | Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Com |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Needham Upgrades Dynatrace to Buy, Announces $68 Price Targe |
| 2026-09-17 | Industry | ⚪  0 | 0.9 | Yahoo | Dynatrace (DT) Exceeds Market Returns: Some Facts to Conside |
| 2026-09-17 | Industry | ⚪  0 | 0.9 | Yahoo | FJTSY or DT: Which Is the Better Value Stock Right Now? |
| 2026-09-17 | Industry | ⚪  0 | 0.9 | Yahoo | Dynatrace (DT) Targets Large European Enterprises With New O |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Guggenheim Boosts Eli Lilly Price Target Amid Strong Weight Loss Drug 
- 🟢 [Rumor|w1.08] Eli Lilly (LLY) Could Be 22% Undervalued On New Breast Cancer Approval

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Twist Bioscience (TWST) Expands AI Drug Discovery Exposure W |
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Guggenheim Boosts Eli Lilly Price Target Amid Strong Weight  |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Eli Lilly (LLY) Increases Yet Falls Behind Market: What Inve |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Lilly breaks ground in Houston, one of ten U.S. manufacturin |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | LLY Stock Gains As CEO Says Foundayo Wins One-Third of New G |
| 2026-09-21 | Rumor | 🟢 +1 | 1.08 | Yahoo | Eli Lilly (LLY) Could Be 22% Undervalued On New Breast Cance |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Industry|w1.05] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set
- 🟢 [Earnings|w0.97] Bull of the Day: Arista Networks, Inc. (ANET)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Arista Networks (ANET) Surpasses Market Returns: Some Facts  |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | How Much Does Arista Networks Stock Move When The Market Mov |
| 2026-09-18 | Earnings | 🟢 +1 | 1.36 | Yahoo | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 1.05 | ChartMill | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |
| 2026-09-16 | Earnings | 🟢 +1 | 0.97 | Yahoo | Bull of the Day: Arista Networks, Inc. (ANET) |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 19 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Eaton (ETN) Surges 3.7%: Is This an Indication of Further Gains?
- 🟢 [Earnings|w0.97] Should You Get Paid While Eaton Finishes Its Factories?
- 🟢 [Industry|w0.9] Eaton Sees Best Years Ahead as Data Center Demand Powers Growth

**Bearish Factors:**
- 🔴 [Industry|w0.9] Could Eaton Stock Lose A Third Or Gain Half In A Year?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Eaton (ETN) Surges 3.7%: Is This an Indication of Further Ga |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Eaton (ETN) Launches Workbench 360 As Investors Ask If The V |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Eaton Corporation, PLC (ETN) Is a Trending Stock: Facts to K |
| 2026-09-17 | Industry | 🔴 -1 | 0.9 | Yahoo | Could Eaton Stock Lose A Third Or Gain Half In A Year? |
| 2026-09-17 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton Sees Best Years Ahead as Data Center Demand Powers Gro |
| 2026-09-16 | Industry | ⚪  0 | 0.75 | Yahoo | Eaton (ETN) Advances While Market Declines: Some Information |
| 2026-09-16 | Industry | ⚪  0 | 0.75 | SeekingAlp | Eaton Corporation plc (ETN) Presents at Morgan Stanley's 14t |
| 2026-09-16 | Earnings | 🟢 +1 | 0.97 | Yahoo | Should You Get Paid While Eaton Finishes Its Factories? |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 5.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 13 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Tempus AI (TEM) Is Building a Heart Failure Agent That Never Sleeps
- 🟢 [Analyst Action|w2.16] This Digital Realty Trust Analyst Begins Coverage On A Bullish Note; H
- 🟢 [Industry|w2.13] Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expansion

**Bearish Factors:**
- 🔴 [Industry|w2.13] Tempus AI: High Risk, But With A Great Cause
- 🔴 [Industry|w1.5] Tempus AI (TEM), What Is Behind The Latest Buzz?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🔴 -1 | 2.13 | SeekingAlp | Tempus AI: High Risk, But With A Great Cause |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expans |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Tempus and Recursion Extend Existing Data License Agreement  |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Benzinga | Tempus AI Extends Recursion Data Deal Through 2029, Replacin |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | This Digital Realty Trust Analyst Begins Coverage On A Bulli |
| 2026-09-21 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Goldman Sachs Initiates Coverage On Tempus AI with Neutral R |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Tempus AI (TEM) Is Building a Heart Failure Agent That Never |
| 2026-09-20 | Industry | 🔴 -1 | 1.5 | Yahoo | Tempus AI (TEM), What Is Behind The Latest Buzz? |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 5.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio
- 🟢 [Industry|w1.8] DELL Rides on Growing AI Clientele: Can the Stock Outpace SMCI & CSCO?
- 🟢 [Industry|w1.8] Dell Best Positioned to Benefit From On-Premises AI Growth, Morgan Sta

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Is Dell (DELL) Using the XPS Googlebook to Deepen Its AI Eco |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Dell Joined the S&P 100 This Week. Its Largest Outside Holde |
| 2026-09-21 | Earnings | ⚪  0 | 2.34 | Yahoo | Spotting Winners: Dell (NYSE:DELL) And Hardware & Infrastruc |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Dell and AppLovin Look Vulnerable. How to Play the Charts. |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell Best Positioned to Benefit From On-Premises AI Growth,  |
| 2026-09-21 | Earnings | ⚪  0 | 2.34 | Yahoo | Super Micro Rises 6% as AI Server Bid Concentrates in One Na |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Why Micron and Dell stocks may have more juice than Nvidia |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 14 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Incyte Maps Post-JAKAFI Growth With Pipeline Push and $4B Sales Target
- 🟢 [Industry|w1.05] Incyte (NASDAQ:INCY) Combines Minervini Trend Template Strength With H

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |
| 2026-09-20 | Industry | ⚪  0 | 1.5 | Yahoo | Specialised Therapeutics Expands Partnership with Incyte to  |
| 2026-09-20 | Industry | 🟢 +1 | 1.5 | Yahoo | Incyte Maps Post-JAKAFI Growth With Pipeline Push and $4B Sa |
| 2026-09-18 | Industry | 🟢 +1 | 1.05 | ChartMill | Incyte (NASDAQ:INCY) Combines Minervini Trend Template Stren |
| 2026-09-17 | Industry | ⚪  0 | 0.9 | Yahoo | MIRM, INCY Stocks In Focus — Will A September 26 FDA Ruling  |
| 2026-09-17 | Industry | ⚪  0 | 0.9 | Yahoo | Is Incyte (INCY) Undervalued After Ontario Backed MINJUVI Ac |
| 2026-09-16 | Industry | ⚪  0 | 0.75 | SeekingAlp | Incyte Corporation (INCY) Presents at Morgan Stanley 24th An |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 17 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Palo Alto Networks' 100% Rally Hits a Valuation Roadblock
- 🟢 [Analyst Action|w2.16] Morgan Stanley Raises Palo Alto Networks Price Target to $410 on AI Se
- 🟢 [Earnings|w1.63] These 3 Agentic AI Stocks Have More Than Hype Behind Their Growth Stor

**Bearish Factors:**
- 🔴 [Earnings|w2.34] 3 Reasons to Sell PANW and 1 Stock to Buy Instead
- 🔴 [Analyst Action|w2.16] Palo Alto Networks Stock Jumped 10% Last Week. One Analyst Isn’t Buyin

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Rumor | ⚪  0 | 1.27 | Yahoo | These are the cybersecurity stocks built for the AI era |
| 2026-09-21 | Earnings | 🔴 -1 | 2.34 | Yahoo | 3 Reasons to Sell PANW and 1 Stock to Buy Instead |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks, Inc. (PANW) is Attracting Investor Atten |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Palo Alto Networks' 100% Rally Hits a Valuation Roadblock |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Morgan Stanley Raises Palo Alto Networks Price Target to $41 |
| 2026-09-21 | Analyst Action | 🔴 -1 | 2.16 | Yahoo | Palo Alto Networks Stock Jumped 10% Last Week. One Analyst I |
| 2026-09-20 | Industry | ⚪  0 | 1.5 | Yahoo | Why CrowdStrike, Palo Alto Networks, SentinelOne, and Other  |
| 2026-09-19 | Earnings | 🟢 +1 | 1.63 | Yahoo | These 3 Agentic AI Stocks Have More Than Hype Behind Their G |

---

## 🟡 Cautious Long (1)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 9.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Is Apple Stock's Shrinking Share Count Worth Paying Up For Near The Hi
- 🟢 [Analyst Action|w2.16] Meta stock jumps as Wells Fargo raises price target
- 🟢 [Industry|w2.13] How Tim Cook Set Up Apple Stock's Next Growth Era, Explains Jim Cramer

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Steve Jobs made Apple iconic. Tim Cook made it a $5 trillion |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple’s first 50 years: Charts show how the iPhone maker bec |
| 2026-09-22 | Rumor | 🟢 +1 | 1.27 | Yahoo | TSLA, SPCX, AAPL Could Be Next To ‘Rip’ After Meta’s Muse Ra |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple Launches New Products in Time for New CEO |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | How Tim Cook Set Up Apple Stock's Next Growth Era, Explains  |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple (AAPL) Eyes India Payments With Apple Pay Debut Next M |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Google, Apple's new job postings go viral |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Meta stock jumps as Wells Fargo raises price target |

---

## ⚠️ Overheated (2)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 25.95 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] AMD, Intel, Salesforce, GameStop, and More Stocks That Explain Today’s
- 🟢 [Analyst Action|w2.55] Astera Labs Stock Jumped 12% Yesterday. The Street Sees 14% More Upsid
- 🟢 [Industry|w2.13] Nasdaq, S&P 500 Futures Pause After Record AI-Driven Rally: AMD, META,

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | ⚪  0 | 2.76 | Yahoo | AMD Just Joined the $1 Trillion Club. Here's Why Investors A |
| 2026-09-22 | Earnings | 🟢 +1 | 2.76 | Yahoo | AMD, Intel, Salesforce, GameStop, and More Stocks That Expla |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Why AMD's new $1 trillion valuation makes perfect sense |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | Nasdaq, S&P 500 Futures Pause After Record AI-Driven Rally:  |
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Astera Labs Stock Jumped 12% Yesterday. The Street Sees 14%  |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | AMD joins trillion-dollar chipmaker club as AI demand surges |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AMD, WBD, MRNA Stocks Surge To 52-Week Highs Today? |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | Dow Futures Slip While S&P 500, Nasdaq Futures Climb After A |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.78 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 2 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Everpure (P) Dropped From Key Small Cap Indices As Fund Exposure Shift
- 🟢 [Earnings|w1.17] Everpure Stock Gains 34% in 6 Months: Here's What You Should Know
- 🟢 [Analyst Action|w1.08] Why Everpure (P) Stock Is Up Today

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 1.5 | Yahoo | Everpure (P) Dropped From Key Small Cap Indices As Fund Expo |
| 2026-09-18 | Industry | 🟢 +1 | 1.05 | SeekingAlp | Investing In Everpure: Growth Potential You Can't Ignore |
| 2026-09-17 | Industry | 🟢 +1 | 0.9 | Yahoo | Everpure to Host 2026 Financial Analyst Meeting |
| 2026-09-17 | Analyst Action | 🟢 +1 | 1.08 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-17 | Earnings | ⚪  0 | 1.17 | Yahoo | 3 Reasons P Has Explosive Upside Potential |
| 2026-09-17 | Earnings | 🟢 +1 | 1.17 | Yahoo | Everpure Stock Gains 34% in 6 Months: Here's What You Should |
| 2026-09-17 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Needham Reiterates Buy on Everpure, Maintains $140 Price Tar |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 9.89 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Super Micro Computer (SMCI) Is Up 12.1% After Record AI Backlog Sparks
- 🟢 [Earnings|w2.34] Can SMCI's Record Backlog Sustain Revenue Momentum in FY27?
- 🟢 [Earnings|w2.34] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Computer, Inc. (SMCI) Is a Trending Stock: Facts |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Benzinga | Super Micro Says AI Opportunity Could Reach $4 Trillion: ‘Th |
| 2026-09-21 | Black Swan | 🔴 -1 | 2.7 | ChartMill | Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth Wi |
| 2026-09-18 | Earnings | 🟢 +1 | 1.36 | Yahoo | Did SMCI Stock Just Rise For The Wrong Reason? |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 9.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Is Apple Stock's Shrinking Share Count Worth Paying Up For Near The Hi
- 🟢 [Analyst Action|w2.16] Meta stock jumps as Wells Fargo raises price target
- 🟢 [Industry|w2.13] How Tim Cook Set Up Apple Stock's Next Growth Era, Explains Jim Cramer

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Steve Jobs made Apple iconic. Tim Cook made it a $5 trillion |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple’s first 50 years: Charts show how the iPhone maker bec |
| 2026-09-22 | Rumor | 🟢 +1 | 1.27 | Yahoo | TSLA, SPCX, AAPL Could Be Next To ‘Rip’ After Meta’s Muse Ra |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple Launches New Products in Time for New CEO |
| 2026-09-22 | Industry | 🟢 +1 | 2.13 | Yahoo | How Tim Cook Set Up Apple Stock's Next Growth Era, Explains  |
| 2026-09-22 | Industry | ⚪  0 | 2.13 | Yahoo | Apple (AAPL) Eyes India Payments With Apple Pay Debut Next M |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Google, Apple's new job postings go viral |
| 2026-09-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Meta stock jumps as Wells Fargo raises price target |

---

## 🔴 Avoid / Short (2)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 9.89 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Super Micro Computer (SMCI) Is Up 12.1% After Record AI Backlog Sparks
- 🟢 [Earnings|w2.34] Can SMCI's Record Backlog Sustain Revenue Momentum in FY27?
- 🟢 [Earnings|w2.34] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Computer, Inc. (SMCI) Is a Trending Stock: Facts |
| 2026-09-21 | Earnings | 🟢 +1 | 2.34 | Yahoo | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-21 | Industry | ⚪  0 | 1.8 | Benzinga | Super Micro Says AI Opportunity Could Reach $4 Trillion: ‘Th |
| 2026-09-21 | Black Swan | 🔴 -1 | 2.7 | ChartMill | Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth Wi |
| 2026-09-18 | Earnings | 🟢 +1 | 1.36 | Yahoo | Did SMCI Stock Just Rise For The Wrong Reason? |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **50** / 100 |
| Raw Weighted Score | -0.08 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] What's Going On With Taiwan Semiconductor Stock Monday?

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets a Breakout

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here's How Much $100 Invested In Taiwan Semiconductor 20 Yea |
| 2026-09-21 | Industry | 🟢 +1 | 1.8 | Benzinga | What's Going On With Taiwan Semiconductor Stock Monday? |
| 2026-09-20 | Industry | ⚪  0 | 1.5 | Yahoo | ASML (ASML) and Chip Giants like TSMC Plot a Bigger Canvas f |
| 2026-09-19 | Black Swan | 🔴 -1 | 1.88 | ChartMill | Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets  |
| 2026-09-18 | Earnings | ⚪  0 | 1.36 | Yahoo | TSMC (TSM) Beats Stock Market Upswing: What Investors Need t |
| 2026-09-18 | Industry | ⚪  0 | 1.05 | Yahoo | Why Is Taiwan Semiconductor Manufacturing (TSM) Ramping 2nm  |

---

## ⚪ Watch / Neutral (24)

### NYSE:ASX
- Score: 59/100 | raw: 2.14 | News: 4 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMZN
- Score: 59/100 | raw: 2.13 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GRAL
- Score: 58/100 | raw: 1.8 | News: 5 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 58/100 | raw: 1.8 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 57/100 | raw: 1.92 | News: 8 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 56/100 | raw: 1.5 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 54/100 | raw: 0.9 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 54/100 | raw: 0.9 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 53/100 | raw: 0.71 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:QCOM
- Score: 52/100 | raw: 0.54 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:INTC
- Score: 50/100 | raw: 0 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:C
- Score: 49/100 | raw: -0.22 | News: 6 kept / 24 dropped | No clear directional bias — stay flat

### NASDAQ:STX
- Score: 40/100 | raw: -2.33 | News: 8 kept / 22 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-22T12:30:38.258Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
