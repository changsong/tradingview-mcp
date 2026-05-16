# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-15  |  **News Window:** 2026-05-08 ~ 2026-05-15
**Stock Pool:** us_selected.txt (64)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMAT** | **92** | 21.38 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/27 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:RKLB** | **91** | 11.03 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/33 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:VRT** | **88** | 20.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/30 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:ADI** | **87** | 8.88 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/30 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:MPWR** | **87** | 11.42 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 9/24 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:WPM** | **84** | 10.79 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/23 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MTSI** | **83** | 7.91 | 🟢 Long (Strong) | Momentum / Hold | High | 6/29 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:PWR** | **81** | 7.46 | 🟢 Long (Strong) | Momentum / Hold | High | 7/33 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:BGC** | **81** | 7.43 | 🟢 Long (Strong) | Momentum / Hold | High | 4/17 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:ASML** | **80** | 8.5 | 🟢 Long (Strong) | Momentum / Hold | High | 8/31 | - |
| 11 | **NYSE:IRM** | **80** | 7.22 | 🟢 Long (Strong) | Momentum / Hold | High | 3/25 | - |
| 12 | **NYSE:MTZ** | **79** | 14.52 | 🟢 Long (Strong) | Momentum / Hold | High | 12/28 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:DKS** | **79** | 6.89 | 🟢 Long (Strong) | Momentum / Hold | High | 5/25 | - |
| 14 | **NASDAQ:CPRX** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 15 | **NASDAQ:LITE** | **77** | 8.16 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/32 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:ETN** | **76** | 8.29 | 🟢 Long (Strong) | Momentum / Hold | High | 8/30 | - |
| 17 | **NASDAQ:POWL** | **75** | 5.98 | 🟢 Long (Strong) | Momentum / Hold | High | 7/20 | - |
| 18 | **NASDAQ:CORZ** | **74** | 5.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 19 | **NYSE:DELL** | **73** | 12.24 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 12/25 | Sentiment Strengthening UP (trend) |
| 20 | **NYSE:JCI** | **72** | 5.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/25 | - |
| 21 | **NYSE:PACS** | **72** | 18.13 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 22/18 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:P** | **70** | 4.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/28 | - |
| 23 | **NYSE:GLW** | **70** | 4.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/33 | - |
| 24 | **NYSE:TT** | **69** | 4.48 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/33 | - |
| 25 | **NYSE:NOK** | **69** | 4.54 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 2/34 | Sentiment Divergence (black swan masked by noise) |
| 26 | **NYSE:COHR** | **68** | 4.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/33 | - |
| 27 | **NYSE:CF** | **68** | 12.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/20 | Sentiment Strengthening UP (trend) |
| 28 | **CBOE:CBOE** | **67** | 13.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/24 | Sentiment Strengthening UP (trend) |
| 29 | **NASDAQ:NVDA** | **67** | 7.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/25 | - |
| 30 | **NASDAQ:MU** | **66** | 3.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/34 | - |
| 31 | **NASDAQ:INTC** | **66** | 5.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/28 | - |
| 32 | **NASDAQ:AMD** | **66** | 12.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/23 | Sentiment Strengthening UP (trend) |
| 33 | **NASDAQ:ADEA** | **66** | 3.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/18 | - |
| 34 | **NASDAQ:APLD** | **65** | 3.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/17 | - |
| 35 | **NASDAQ:MRVL** | **65** | 3.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/36 | - |
| 36 | **NYSE:HPE** | **64** | 5.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/30 | - |
| 37 | **NYSE:SM** | **63** | 4.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/10 | - |
| 38 | **NASDAQ:AVGO** | **63** | 9.81 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/26 | Sentiment Strengthening UP (trend) |
| 39 | **NYSE:SMP** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/20 | - |
| 40 | **NASDAQ:EQIX** | **60** | 2.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/34 | - |
| 41 | **NASDAQ:IREN** | **59** | 9.34 | ⚪ No Trade (Weak Bullish) | Watch | Low | 26/14 | Overheated Sentiment (one-sided bullish) |
| 42 | **NASDAQ:KLAC** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/32 | Bearish-to-Bullish Reversal (reversal) |
| 43 | **NYSE:SPNT** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/22 | - |
| 44 | **NYSE:AIR** | **57** | 1.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/18 | - |
| 45 | **NYSE:FN** | **56** | 1.41 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/25 | - |
| 46 | **NYSE:JOBY** | **55** | 1.08 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 6/17 | Sentiment Divergence (black swan masked by noise) |
| 47 | **NYSE:PFS** | **55** | 1.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/23 | - |
| 48 | **NASDAQ:CRDO** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/37 | - |
| 49 | **NYSE:CIEN** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/37 | - |
| 50 | **NASDAQ:RMBS** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/23 | - |
| 51 | **NASDAQ:GEN** | **53** | 0.72 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/33 | - |
| 52 | **NASDAQ:INCY** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 53 | **NYSE:LTC** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/23 | - |
| 54 | **NYSE:MOD** | **51** | 0.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/19 | - |
| 55 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/24 | - |
| 56 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/35 | - |
| 57 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/18 | - |
| 58 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/14 | - |
| 59 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 60 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 61 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 62 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/33 | - |
| 63 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/14 | - |
| 64 | **NYSE:LAR** | **50** | 0.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/20 | - |

---

## 🟢 Strong Long (10)

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.91 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 29 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] MACOM Technology Solutions: Strong Growth Is Not Worth It At Any Price
- 🟢 [Earnings|w1.95] MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Growth, Guida
- 🟢 [Analyst Action|w1.51] Northland Raises its Price Target on MACOM Technology (MTSI) to $375

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | MACOM Technology Solutions: Strong Growth Is Not Worth It At |
| 2026-05-12 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Don't Overlook M/A-Com (MTSI) International Revenue Trends W |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Gro |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | Northland Raises its Price Target on MACOM Technology (MTSI) |
| 2026-05-11 | Earnings | ⚪  0 | 1.91 | Finnhub | MACOM Technology: A Showcase Of AI Momentum |
| 2026-05-09 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.46 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 33 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Quanta Services (PWR) Valuation Check After Raised 2026 Profit Outlook
- 🟢 [Earnings|w2.27] Can Quanta's Mission-Critical Strategy Outrun Economic Slowdowns?
- 🟢 [Industry|w2.16] Quanta Services (PWR) Benefits from Energy-Related Infrastructure Grow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Quanta Services (PWR) Valuation Check After Raised 2026 Prof |
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Quanta Services (PWR) Benefits from Energy-Related Infrastru |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Quanta Services (PWR) Price Target Increased by 26.45% to 78 |
| 2026-05-13 | Industry | ⚪  0 | 0.72 | Yahoo Fina | How Quanta Services (PWR) Is Riding the Utility Buildout Beh |
| 2026-05-13 | Industry | ⚪  0 | 0.72 | Yahoo Fina | 3 Reasons Investors Love Quanta (PWR) |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Can Quanta's Mission-Critical Strategy Outrun Economic Slowd |
| 2026-05-11 | Industry | ⚪  0 | 1.47 | Finnhub | Quanta (PWR) Shares Up After It Was Called A “Hidden Giant” |

---

### NASDAQ:BGC

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.43 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] How Strong Q1 Results And Energy Momentum At BGC Group (BGC) Have Chan
- 🟢 [Industry|w2.16] What Makes BGC Group (BGC) a New Buy Stock
- 🟢 [Earnings|w1.95] BGC Q1 Deep Dive: Energy, Market Share Gains Drive Strong Results, Gui

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | How Strong Q1 Results And Energy Momentum At BGC Group (BGC) |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | What Makes BGC Group (BGC) a New Buy Stock |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | BGC Q1 Deep Dive: Energy, Market Share Gains Drive Strong Re |
| 2026-05-11 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Are Investors Undervaluing BGC Group, Inc. (BGC) Right Now? |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 8.5 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] ASML Holding Trades Above 50-Day SMA: What Should Investors Know?
- 🟢 [Industry|w2.1] ASML Holding N.V. (ASML) Pushing for Europe Technology Leadership Amid

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Why Bank of America Is Betting Big on ASML Stock as Trump-Xi |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | ASML Lifts 2026 Sales Outlook As AI Demand And EU Policy Foc |
| 2026-05-14 | Earnings | ⚪  0 | 1.31 | Finnhub | Chip Stocks Broadly Rising |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | If You Invested $100 In ASML Holding Stock 15 Years Ago, You |
| 2026-05-14 | Earnings | ⚪  0 | 1.31 | Finnhub | ASML Holding (NASDAQ:ASML) Leads the Caviar Cruise Quality S |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | ASML Holding Trades Above 50-Day SMA: What Should Investors  |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | ASML Holding N.V. (ASML) Pushing for Europe Technology Leade |
| 2026-05-13 | Industry | ⚪  0 | 2.1 | Finnhub | Jim Cramer on ASML: “Let’s Just Hope for a Down Day and Get  |

---

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.22 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Iron Mountain (IRM) Price Target Increased by 11.79% to 141. |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | ​Iron Mountain Incorporated (IRM) Posts Q1 Results, Data Cen |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 14.52 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 28 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] A Look At MasTec (MTZ) Valuation After Strong Earnings Backlog And AI 
- 🟢 [Earnings|w2.73] Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Results?
- 🟢 [Analyst Action|w2.52] JP Morgan Maintains Overweight on MasTec, Raises Price Target to $491

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.27] MasTec: High Possibility Of Margin Compression

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | A Look At MasTec (MTZ) Valuation After Strong Earnings Backl |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | MasTec (MTZ) Price Target Increased by 23.80% to 465.47 |
| 2026-05-14 | Analyst Action | ⚪  0 | 1.21 | Finnhub | Guggenheim Upgrades MasTec (MTZ) |
| 2026-05-13 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Why MasTec (MTZ) Is Leveraged to the Grid Expansion Behind A |
| 2026-05-13 | Earnings | ⚪  0 | 2.73 | Finnhub | Billionaire Investor Quietly Loads Up On Construction Stocks |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Res |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | JP Morgan Maintains Overweight on MasTec, Raises Price Targe |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.89 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 25 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] BTIG Reiterates Buy on Dick's Sporting Goods, Maintains $300 Price Tar
- 🟢 [M&A|w2.06] DICK'S Sporting Goods: It's Game Time
- 🟢 [Industry|w1.26] A Look At DICK’S Sporting Goods (DKS) Valuation As Foot Locker Deal Sh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | BTIG Reiterates Buy on Dick's Sporting Goods, Maintains $300 |
| 2026-05-11 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Dick's Sporting Goods (DKS) Stock Sinks As Market Gains: Her |
| 2026-05-11 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | A Look At DICK’S Sporting Goods (DKS) Valuation As Foot Lock |
| 2026-05-11 | M&A | 🟢 +1 | 2.06 | Finnhub | DICK'S Sporting Goods: It's Game Time |
| 2026-05-09 | Industry | 🟢 +1 | 1.05 | Finnhub | Dick's Sporting Goods Inc (NYSE:DKS) Shows Strong Breakout P |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Catalyst Pharmaceuticals: Angelini Deal Caps A Potentially Better Stor
- 🟢 [Earnings|w1.91] Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M Estimate.
- 🟢 [Earnings|w1.91] Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Fundamental Rat

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | CPRX or UTHR: Which Is the Better Value Stock Right Now? |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Catalyst Pharmaceuticals: Angelini Deal Caps A Potentially B |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Catalyst (CPRX) Q1 Earnings: Taking a Look at Key Metrics Ve |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Surpasses Q1 Earnings and Rev |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M E |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Funda |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 8.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 30 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] A Look At Eaton (ETN) Valuation After Raised 2026 Guidance And AI Data
- 🟢 [Earnings|w2.27] Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benefiting from
- 🟢 [Earnings|w1.95] KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Rating

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Market Update: CVS, ETN, KMB, KO, PSX |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why Eaton (ETN) Is Expanding Switchgear Capacity for the AI  |
| 2026-05-13 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is Eaton Corporation plc (ETN) A Good Stock To Buy Now? |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrast |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Ra |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | A Look At Eaton (ETN) Valuation After Raised 2026 Guidance A |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benef |

---

### NASDAQ:POWL

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.98 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Powell Industries (POWL) Valuation Check After Record AI Data Center O
- 🟢 [Earnings|w1.91] Powell Industries Q2 Review: Still A Long Growth Runway, But I'm Not A
- 🟢 [Analyst Action|w1.76] Cantor Fitzgerald Maintains Neutral on Powell Industries, Raises Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Powell Industries (POWL) Rallied on Robust Momentum in Order |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Powell Industries (POWL) Valuation Check After Record AI Dat |
| 2026-05-14 | Earnings | 🔴 -1 | 1.31 | Finnhub | Powell Industries: +164% Since December, Now A Fully-Priced  |
| 2026-05-13 | Industry | ⚪  0 | 0.72 | Yahoo Fina | How Powell Industries (POWL) Became a Direct Play on AI’s Po |
| 2026-05-12 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Powell Industries (POWL) Price Target Increased to $360 by J |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Powell Industries Q2 Review: Still A Long Growth Runway, But |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Cantor Fitzgerald Maintains Neutral on Powell Industries, Ra |

---

## 🟢 Mid Long (19)

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Core Scientific: AI Beneficiary Status Is Proven, But Shares Retest Pr
- 🟢 [Analyst Action|w2.52] BTIG Maintains Buy on Core Scientific, Raises Price Target to $33

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Core Scientific (CORZ) Recovers As Investors Digest Earnings |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Core Scientific: AI Beneficiary Status Is Proven, But Shares |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | BTIG Maintains Buy on Core Scientific, Raises Price Target t |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 25 |

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Johnson Controls completes acquisition of Alloy Enterprises |
| 2026-05-12 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Johnson Controls International (JCI) Price Target Increased  |
| 2026-05-11 | Industry | ⚪  0 | 0.25 | Yahoo Fina | A Look At Johnson Controls International (JCI) Valuation Aft |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Johnson Controls International Q2 Earnings Call Highlights |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 28 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Everpure Q1 Preview: Will Keep Riding The AI Hype, But Priced For Perf
- 🟢 [Earnings|w2.27] Everpure Q1 Earnings Preview: Further Price Increases And Hyperscale C
- 🟢 [Industry|w1.47] S&P 500 Tops 7,400 As Copper Hits Record Highs: Stock Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Why Everpure (P) Stock Is Trading Up Today |
| 2026-05-13 | Earnings | 🟢 +1 | 1.09 | Finnhub | Everpure Q1 Preview: Will Keep Riding The AI Hype, But Price |
| 2026-05-12 | Industry | ⚪  0 | 0.3 | Yahoo Fina | Everpure (P) Moves 11.8% Higher: Will This Strength Last? |
| 2026-05-12 | Industry | ⚪  0 | 0.3 | Yahoo Fina | Is Everpure (P) Quietly Reshaping Its AI Moat With Deeper Re |
| 2026-05-12 | Earnings | 🟢 +1 | 0.91 | Finnhub | Everpure Q1 Earnings Preview: Further Price Increases And Hy |
| 2026-05-11 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Is It Too Late To Consider Everpure (P) After Its 63.7% One  |
| 2026-05-11 | Industry | 🟢 +1 | 1.47 | Finnhub | S&P 500 Tops 7,400 As Copper Hits Record Highs: Stock Market |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 33 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Corning vs. Nokia: Which Connectivity Stock is the Better Buy Now?
- 🟢 [Analyst Action|w1.08] Corning Incorporated (GLW) Discusses Upgrade and Extension of Springbo
- 🟢 [Analyst Action|w0.9] Corning Incorporated (GLW) Discusses Upgrade and Extension of Springbo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Jim Cramer Shares Key Facts About Corning (GLW) |
| 2026-05-13 | Industry | ⚪  0 | 2.1 | Finnhub | Corning (GLW) Price Target Increased by 40.31% to 203.60 |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Corning vs. Nokia: Which Connectivity Stock is the Better Bu |
| 2026-05-10 | Analyst Action | 🟢 +1 | 1.08 | Seeking Al | Corning Incorporated (GLW) Discusses Upgrade and Extension o |
| 2026-05-09 | Analyst Action | 🟢 +1 | 0.9 | Seeking Al | Corning Incorporated (GLW) Discusses Upgrade and Extension o |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.48 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 33 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Trane Technologies (NYSE:TT) Passes the Caviar Cruise Quality Investin
- 🟢 [Analyst Action|w3.02] JP Morgan Maintains Neutral on Trane Technologies, Raises Price Target
- 🟢 [Analyst Action|w1.8] KeyBanc Raises PT on Trane Technologies (TT), Maintains an Overweight 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Analyst Action | ⚪  0 | 1.21 | Finnhub | JP Morgan Maintains Neutral on Trane Technologies, Raises Pr |
| 2026-05-14 | Earnings | 🟢 +1 | 1.31 | Finnhub | Trane Technologies (NYSE:TT) Passes the Caviar Cruise Qualit |
| 2026-05-13 | Industry | ⚪  0 | 0.84 | Finnhub | Trane Technologies plc (TT) Presents at Bank of America 33rd |
| 2026-05-12 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | KeyBanc Raises PT on Trane Technologies (TT), Maintains an O |
| 2026-05-10 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | What Trane Technologies (TT)'s Upgraded 2026 Earnings Outloo |
| 2026-05-09 | Industry | 🟢 +1 | 1.05 | Finnhub | Trane Technologies plc (TT) Presents at Oppenheimer 21st Ann |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 33 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Is It Too Late To Consider Coherent (COHR) After Its 400% One Year Sur
- 🟢 [Industry|w2.1] Optics Stock Rally Continues: Applied Optoelectronics Surges 8%, Lumen

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | What Makes Coherent (COHR) a Lucrative Investment? |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Is It Too Late To Consider Coherent (COHR) After Its 400% On |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | Coherent (COHR) Price Target Increased by 20.86% to 380.88 |
| 2026-05-13 | Earnings | ⚪  0 | 2.73 | Finnhub | BofA Hikes Coherent Price Target to $400 on $1.7 Trillion AI |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Optics Stock Rally Continues: Applied Optoelectronics Surges |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 12.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] CF Industries Holdings (NYSE:CF): A Decent Value Play with Strong Fund
- 🟢 [Analyst Action|w2.59] BofA Securities Raises Price Target on CF Industries Holdings to $106 
- 🟢 [Earnings|w2.27] Here's Why CF Industries (CF) is a Strong Momentum Stock

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] How The CF Industries (CF) Investment Story Is Shifting With Tight Nit

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | CF Industries and Norwegian Cruise Line have been highlighte |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Bull of the Day: CF Industries (CF) |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Zacks Investment Ideas feature highlights: CF Industries and |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Assessing CF Industries (CF) Valuation After Strong Long Ter |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | BofA Securities Raises Price Target on CF Industries Holding |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | CF Industries Holdings (NYSE:CF): A Decent Value Play with S |
| 2026-05-13 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Can CF (CF) Run Higher on Rising Earnings Estimates? |
| 2026-05-13 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | CF Industries Stock: Is Wall Street Bullish or Bearish? |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 13.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Leverage Shares by Themes Follows Cerebras Systems IPO with Introducti
- 🟢 [Industry|w2.98] Abaxx Provides Corporate Milestone Update
- 🟢 [Earnings|w2.73] Why CBOE Global (CBOE) is a Top Growth Stock for the Long-Term

**📉 Bearish Factors:**
- 🔴 [Industry|w2.1] Kurv Launches LQID: Seeking to Put Your Cash to Work

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Leverage Shares by Themes Follows Cerebras Systems IPO with  |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Abaxx Provides Corporate Milestone Update |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Base Carbon Reports First-Quarter 2026 Operating and Financi |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | PowerBank Announces Third Quarter Results |
| 2026-05-15 | Industry | ⚪  0 | 2.13 | Seeking Al | Cboe Global Markets declares $0.72 dividend |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Cboe Global Markets Declares Second-Quarter 2026 Dividend |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Cboe Global Markets Announces 2026 Annual Meeting Results |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Abaxx Exchange Single-Day Trading Volume Surpasses 50,000 Co |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 7.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Is The Power Grid Now Nvidia's Biggest Growth Constraint?
- 🟢 [Industry|w2.98] Nvidia Is Still a Top Buy in the Stock Market. Here's Why.
- 🟢 [Earnings|w2.34] Nvidia: A Strong Setup Ahead Of Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Stock Market Today: Dow Falls As Oil Prices, Yields Jump; Nv |
| 2026-05-15 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Intel Slumps 7%, AMD and NVIDIA Slide 4% in Chipmaker Sellof |
| 2026-05-15 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Exchange Traded Concepts Announces Launch of xETFs NVDA Dail |
| 2026-05-15 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia Will Be a $10 Trillion Company By This Date |
| 2026-05-15 | Earnings | 🟢 +1 | 1.55 | Finnhub | Is The Power Grid Now Nvidia's Biggest Growth Constraint? |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Nvidia Is Still a Top Buy in the Stock Market. Here's Why. |
| 2026-05-15 | Earnings | ⚪  0 | 2.76 | Seeking Al | Nvidia Earnings Could Reset The Entire AI Trade |
| 2026-05-15 | Earnings | ⚪  0 | 2.76 | Seeking Al | Nvidia: I'm Loading Up Before Q1 Earnings |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 34 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] A Look At Micron Technology (MU) Valuation As AI Memory Demand Drives 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Samsung strike looms: Why analysts say to “watch MU” as memo |
| 2026-05-15 | Industry | ⚪  0 | 1.19 | Finnhub | Zacks Investment Ideas feature highlights: Micron, Sandisk a |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At Micron Technology (MU) Valuation As AI Memory Dema |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | Micron (MU) Stock Sinks As Market Gains: Here's Why |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Prediction: Micron Will Trade at This Price At The End of Th |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | Jim Cramer Reveals Why Micron (MU) Is Better Than The Firm T |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Is It Too Late to Buy Micron Technology Stock After Its 12-Month Gain 
- 🟢 [Industry|w2.98] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Down 24% and
- 🟢 [Industry|w1.5] Intel: Trade The Apple Rally, Don't Marry It

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Intel Stock Is Falling as Analyst Issues Chip-Stock Bubble Warning

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Intel Slumps 7%, AMD and NVIDIA Slide 4% in Chipmaker Sellof |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Forget Intel. Its Own Executives Are Cashing Out and This Is |
| 2026-05-15 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Intel Stock Is Falling as Analyst Issues Chip-Stock Bubble W |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Is It Too Late to Buy Micron Technology Stock After Its 12-M |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Do |
| 2026-05-13 | Industry | 🟢 +1 | 1.5 | Seeking Al | Intel: Trade The Apple Rally, Don't Marry It |
| 2026-05-12 | Industry | ⚪  0 | 1.25 | Seeking Al | Intel: The Path To AI Sovereignty |
| 2026-05-12 | Industry | ⚪  0 | 1.25 | Seeking Al | Intel Corporation: A Good Story At The Wrong Price - A DCF N |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 12.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] AMD: The Market Mispriced What Lisa Su Just Said
- 🟢 [Analyst Action|w3.57] Advanced Micro Devices (AMD) Price Target Raised by $110 Following Str
- 🟢 [Earnings|w3.28] 5 Revealing Analyst Questions From AMD’s Q1 Earnings Call

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] Intel Stock Is Falling as Analyst Issues Chip-Stock Bubble Warning

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Intel Slumps 7%, AMD and NVIDIA Slide 4% in Chipmaker Sellof |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | A Look At Advanced Micro Devices (AMD) Valuation After Power |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Better Super Semiconductor Stock: Advanced Micro Devices (AM |
| 2026-05-15 | Industry | 🔴 -1 | 2.98 | Finnhub | Intel Stock Is Falling as Analyst Issues Chip-Stock Bubble W |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | AMD: The Market Mispriced What Lisa Su Just Said |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Advanced Micro Devices (AMD) Price Target Raised by $110 Fol |
| 2026-05-14 | Rumor | 🟢 +1 | 1.51 | Finnhub | AMD Samsung 2nm Talks Highlight Supply Chain Flexibility And |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | 5 Revealing Analyst Questions From AMD’s Q1 Earnings Call |

---

### NASDAQ:ADEA

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: Here's is

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | We Think Adeia's (NASDAQ:ADEA) Robust Earnings Are Conservat |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | What Adeia's Renewed Google Agreement Means For The Stock |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is ADEIA INC (ADEA) Stock Outpacing Its Business Services Pe |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 17 |

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Should You Hold APLD at 16.9x P/S? 3 Reasons Despite the Pre |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Applied Digital (APLD) Stock Continues To Rise As Company Ge |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Applied Digital (APLD) Is Up 25.1% After $7.5 Billion AI Dea |
| 2026-05-12 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Can Investment in ChronoScale Unlock Additional Value for AP |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 36 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] What Is Going On With Marvell Tech Stock On Thursday?
- 🟢 [Industry|w2.98] The Zacks Analyst Blog Highlights Home Depot, TJX Companies, Marvell T
- 🟢 [Industry|w2.52] Top Research Reports for Home Depot, TJX & Marvell Technology

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.19 | Finnhub | The Zacks Analyst Blog Highlights Home Depot, TJX Companies, |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | BofA and Goldman Sachs reset Marvell stock price targets |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Top Research Reports for Home Depot, TJX & Marvell Technolog |
| 2026-05-14 | Earnings | 🟢 +1 | 1.31 | Finnhub | What Is Going On With Marvell Tech Stock On Thursday? |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 5.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] TD SYNNEX Selected as a HPE Global Distribution Partner
- 🟢 [Industry|w2.52] Hewlett Packard Enterprise Stock Surges. How Cisco Is Giving Its AI Co
- 🟢 [Industry|w2.52] Why Is HPE Stock Surging On Thursday?

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] HPE Unifies Global Distribution With Ingram Micro and TD SYNNEX

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | M&A | ⚪  0 | 3.57 | Yahoo Fina | Cohesity Expands Strategic Alliance with HPE to Deliver Indu |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Hewlett Packard Enterprise (HPE) Unveils Fourth Generation H |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Ingram Micro Named Global Distributor for HPE, Earns Strateg |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | TD SYNNEX Selected as a HPE Global Distribution Partner |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Hewlett Packard Enterprise Stock Surges. How Cisco Is Giving |
| 2026-05-14 | Industry | 🔴 -1 | 2.52 | Finnhub | HPE Unifies Global Distribution With Ingram Micro and TD SYN |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Why Is HPE Stock Surging On Thursday? |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 4.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 10 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Truist Securities Maintains Buy on SM Energy, Raises Price Target to $
- 🟢 [Analyst Action|w1.76] Susquehanna Maintains Neutral on SM Energy, Raises Price Target to $31
- 🟢 [Earnings|w1.64] SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Production

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.81] SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🔴 -1 | 2.81 | Yahoo Fina | SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | SM Energy Surges 67% in Six Months: Is the Stock Worth Betti |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Are Investors Undervaluing SM Energy (SM) Right Now? |
| 2026-05-12 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Earnings Estimates Rising for SM Energy (SM): Will It Gain? |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Are Oils-Energy Stocks Lagging  SM Energy (SM) This Year? |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | SM Energy Company (SM) Is a Trending Stock: Facts to Know Be |
| 2026-05-12 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Truist Securities Maintains Buy on SM Energy, Raises Price T |
| 2026-05-11 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Producti |

---

### NYSE:SMP

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] SMP Q1 Earnings Beat Estimates on Broad-Based Sales Growth

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | SMP Q1 Earnings Beat Estimates on Broad-Based Sales Growth |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Only Three Days Left To Cash In On Standard Motor Products'  |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 34 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Equinix (EQIX) Valuation Check After Strong Q1 Results And New Kuala L
- 🟢 [Industry|w2.1] Mizuho Raises PT on Equinix, Inc. (EQIX)

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] Equinix Puts Enterprises in Control of Data Sovereignty Across Hybrid 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | How The Investment Narrative For Equinix (EQIX) Is Shifting  |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Equinix (EQIX) Valuation Check After Strong Q1 Results And N |
| 2026-05-14 | Industry | 🔴 -1 | 2.52 | Finnhub | Equinix Puts Enterprises in Control of Data Sovereignty Acro |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Mizuho Raises PT on Equinix, Inc. (EQIX) |

---

## 🟡 Cautious Long (4)

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 8.16 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuation Debate
- 🟢 [Industry|w2.52] Lumentum's Components Business Accelerates: More Upside Ahead?
- 🟢 [Industry|w2.52] Best Momentum Stocks to Buy for May 14th

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] Applied Optoelectronics Over Lumentum: One AI Networking Boom, Two Dif

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuatio |
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | What Makes Lumentum (LITE) a New Strong Buy Stock |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum's Components Business Accelerates: More Upside Ahea |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Best Momentum Stocks to Buy for May 14th |
| 2026-05-14 | Earnings | 🔴 -1 | 1.31 | Finnhub | Applied Optoelectronics Over Lumentum: One AI Networking Boo |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Lumentum Holdings Inc. (LITE) Hit a 52 Week High, Can the Ru |
| 2026-05-13 | Analyst Action | ⚪  0 | 2.52 | Finnhub | Here's How Much You Would Have Made Owning Lumentum Holdings |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Optics Stock Rally Continues: Applied Optoelectronics Surges |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 12.24 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] JPMorgan Adjusts Price Target on Dell Technologies to $280 From $205, 
- 🟢 [Earnings|w2.76] Dell, Hewlett Packard Enterprise see bullish views at J.P. Morgan ahea
- 🟢 [Industry|w2.16] Even if Dell Laptops Disappeared, I’d Still Buy the Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | JPMorgan Adjusts Price Target on Dell Technologies to $280 F |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Kioxia and Dell Technologies First to Deliver High-Density S |
| 2026-05-15 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Dell, Hewlett Packard Enterprise see bullish views at J.P. M |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Even if Dell Laptops Disappeared, I’d Still Buy the Stock |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Dell Technologies to Hold Conference Call May 28 to Discuss  |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Citigroup Adjusts Price Target on Dell Technologies to $290  |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | If You Invested $1000 In Dell Technologies Stock 5 Years Ago |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Dell Technologies (DELL) Laps the Stock Market: Here's Why |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 18.13 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 22 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike and Buyback
- 🟢 [Analyst Action|w2.52] Oppenheimer Maintains Outperform on PACS Group, Raises Price Target to
- 🟢 [Earnings|w2.34] Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat And New U

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | UBS Lifts PACS Group Price Target to $50 From $44, Maintains |
| 2026-05-14 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | PACS Group Q1 Earnings Call Highlights |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike a |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Oppenheimer Adjusts Price Target on PACS Group to $48 From $ |
| 2026-05-13 | Earnings | 🟢 +1 | 0.94 | Yahoo Fina | Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why PACS Group Stock Surged Today |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | PACS Group: Strong Comeback That's Backed By Improving Funda |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Oppenheimer Maintains Outperform on PACS Group, Raises Price |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 2 / 34 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 2026 Outlook

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.78] Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Black Swan | 🟢 +1 | 3.78 | Finnhub | Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win |
| 2026-05-11 | Earnings | 🟢 +1 | 0.76 | Finnhub | Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 20 |

---

## ⚠️ Overheated (5)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 21.38 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Applied Materials Slips Despite Record Quarter and Strong Outlook (AMA
- 🟢 [Earnings|w3.87] AI Demand Pushes Applied Materials To Highest Margins In 25 Years
- 🟢 [Earnings|w3.87] Applied Materials Inc (AMAT) Q2 2026 Earnings Call Highlights: Record 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.19 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Applied Materials to Outperform Wafer Fab Equipment Market A |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Applied Materials Slips Despite Record Quarter and Strong Ou |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | AI Demand Pushes Applied Materials To Highest Margins In 25  |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Applied Materials Inc (AMAT) Q2 2026 Earnings Call Highlight |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Assessing Applied Materials (AMAT) Valuation After Record Re |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Applied Materials, Inc. (AMAT) Q2 2026 Earnings Call Transcr |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Applied Materials Q2 Earnings Call Highlights |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 11.03 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 33 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Rocket Lab: The Stock Is More Expensive Now, But I've Still Decided To
- 🟢 [Analyst Action|w2.52] Why Is Rocket Lab Stock Surging On Wednesday?
- 🟢 [Earnings|w2.27] Why Is Rocket Lab Stock Falling On Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Is Rocket Lab Stock Surging On Wednesday? |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Rocket Lab: The Stock Is More Expensive Now, But I've Still  |
| 2026-05-12 | Industry | 🟢 +1 | 1.75 | Finnhub | Rocket Lab's Rally Changes Everything For Investors |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Why Is Rocket Lab Stock Falling On Tuesday? |
| 2026-05-11 | Industry | ⚪  0 | 1.47 | Finnhub | Stock Of The Day: Did Rocket Lab Break Out Again? |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Needham Maintains Buy on Rocket Lab, Raises Price Target to  |
| 2026-05-09 | Earnings | ⚪  0 | 0.97 | Seeking Al | Rocket Lab Corporation (RKLB) Q1 2026 Earnings Call Transcri |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 20.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Vertiv News Ties AI Cooling Deals To Premium Valuation Debate
- 🟢 [Earnings|w3.28] Vertiv Holdings Co-A (NYSE:VRT) Checks Every Box in the CAN SLIM Playb
- 🟢 [Earnings|w3.28] Why Vertiv (VRT) Stock Is Trading Up Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Is It Too Late To Consider Vertiv Holdings Co (VRT) After It |
| 2026-05-15 | M&A | ⚪  0 | 4.16 | Finnhub | Vertiv Holdings Recommends Shareholders Reject the Mini-Tend |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Vertiv (VRT) Names Frieda He as Chief Procurement Officer |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Jim Cramer on Vertiv: “You Buy Half and Then You Wait for a  |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Vertiv Holdings Co-A (NYSE:VRT) Checks Every Box in the CAN  |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Vertiv Holdings (VRT) Is The Most Popular GPU-As-A-Service S |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Vertiv (VRT) Stock Is Trading Up Today |
| 2026-05-14 | M&A | 🟢 +1 | 3.53 | Finnhub | Vertiv News Ties AI Cooling Deals To Premium Valuation Debat |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.88 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone
- 🟢 [Earnings|w2.73] Assessing Analog Devices (ADI) Valuation After Strong Recent Share Pri
- 🟢 [Analyst Action|w2.52] Wells Fargo Maintains Overweight on Analog Devices, Raises Price Targe

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 2 Reasons to Like ADI (and 1 Not So Much) |
| 2026-05-15 | Industry | 🟢 +1 | 1.19 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-14 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Analog Devices (ADI): The Best Electric Vehicle Supply Chain |
| 2026-05-13 | Earnings | 🟢 +1 | 0.55 | Finnhub | Assessing Analog Devices (ADI) Valuation After Strong Recent |
| 2026-05-13 | Industry | ⚪  0 | 0.42 | Finnhub | Are Computer and Technology Stocks Lagging  Analog Devices ( |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Analog Devices: Multiple Catalysts Driven By Multiple Megatr |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Wells Fargo Maintains Overweight on Analog Devices, Raises P |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Cantor Fitzgerald Maintains Overweight on Analog Devices, Ra |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 10.79 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Scotiabank Maintains Sector Outperform on Wheaton Precious Metals, Rai
- 🟢 [Earnings|w2.73] Wheaton Precious Metals: Record Financial Performance Supports Buy The
- 🟢 [Industry|w2.16] GLNCY vs. WPM: Which Stock Should Value Investors Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Wheaton Precious Metals (WPM) Price Target Decreased by 29.0 |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | GLNCY vs. WPM: Which Stock Should Value Investors Buy Now? |
| 2026-05-14 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Scotiabank Maintains Sector Outperform on Wheaton Precious M |
| 2026-05-13 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Wheaton Precious Metals (WPM): Best Canadian Gold Stocks to  |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Wheaton Precious Metals: Record Financial Performance Suppor |
| 2026-05-12 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | WPM Q1 Earnings Top Estimates on Higher Prices, Shares Gain  |
| 2026-05-10 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Is It Too Late To Consider Wheaton Precious Metals (TSX:WPM) |

---

## ⚠️ Risk Pattern (8)

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 11.42 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Monolithic Power's Improved Automotive Solutions Drive Growth?
- 🟢 [Industry|w2.98] Monolithic Power Systems Weighs EV And AI Growth Against Rich Valuatio
- 🟢 [Earnings|w2.73] Intel vs. Monolithic: Which Semiconductor Stock is the Better Buy?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Black Swan | 🔴 -1 | 1.78 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | 🟢 +1 | 1.19 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | ⚪  0 | 0.36 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |
| 2026-05-10 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | A Look At Monolithic Power Systems (MPWR) Valuation After A  |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 8.16 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuation Debate
- 🟢 [Industry|w2.52] Lumentum's Components Business Accelerates: More Upside Ahead?
- 🟢 [Industry|w2.52] Best Momentum Stocks to Buy for May 14th

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] Applied Optoelectronics Over Lumentum: One AI Networking Boom, Two Dif

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuatio |
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | What Makes Lumentum (LITE) a New Strong Buy Stock |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum's Components Business Accelerates: More Upside Ahea |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Best Momentum Stocks to Buy for May 14th |
| 2026-05-14 | Earnings | 🔴 -1 | 1.31 | Finnhub | Applied Optoelectronics Over Lumentum: One AI Networking Boo |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Lumentum Holdings Inc. (LITE) Hit a 52 Week High, Can the Ru |
| 2026-05-13 | Analyst Action | ⚪  0 | 2.52 | Finnhub | Here's How Much You Would Have Made Owning Lumentum Holdings |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Optics Stock Rally Continues: Applied Optoelectronics Surges |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 12.24 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] JPMorgan Adjusts Price Target on Dell Technologies to $280 From $205, 
- 🟢 [Earnings|w2.76] Dell, Hewlett Packard Enterprise see bullish views at J.P. Morgan ahea
- 🟢 [Industry|w2.16] Even if Dell Laptops Disappeared, I’d Still Buy the Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | JPMorgan Adjusts Price Target on Dell Technologies to $280 F |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Kioxia and Dell Technologies First to Deliver High-Density S |
| 2026-05-15 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Dell, Hewlett Packard Enterprise see bullish views at J.P. M |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Even if Dell Laptops Disappeared, I’d Still Buy the Stock |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Dell Technologies to Hold Conference Call May 28 to Discuss  |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Citigroup Adjusts Price Target on Dell Technologies to $290  |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | If You Invested $1000 In Dell Technologies Stock 5 Years Ago |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Dell Technologies (DELL) Laps the Stock Market: Here's Why |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 18.13 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 22 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike and Buyback
- 🟢 [Analyst Action|w2.52] Oppenheimer Maintains Outperform on PACS Group, Raises Price Target to
- 🟢 [Earnings|w2.34] Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat And New U

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | UBS Lifts PACS Group Price Target to $50 From $44, Maintains |
| 2026-05-14 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | PACS Group Q1 Earnings Call Highlights |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike a |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Oppenheimer Adjusts Price Target on PACS Group to $48 From $ |
| 2026-05-13 | Earnings | 🟢 +1 | 0.94 | Yahoo Fina | Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why PACS Group Stock Surged Today |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | PACS Group: Strong Comeback That's Backed By Improving Funda |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Oppenheimer Maintains Outperform on PACS Group, Raises Price |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 2 / 34 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 2026 Outlook

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.78] Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Black Swan | 🟢 +1 | 3.78 | Finnhub | Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win |
| 2026-05-11 | Earnings | 🟢 +1 | 0.76 | Finnhub | Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 20 |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 9.81 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Broadcom Inc (NASDAQ:AVGO) Screens as a Top Growth Stock with a Bullis
- 🟢 [Industry|w2.98] 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone
- 🟢 [Industry|w2.55] TD Cowen Adjusts Price Target on Broadcom to $500 From $405, Maintains

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.78] Jim Cramer Makes Big Claim About Broadcom (AVGO) CEO
- 🔴 [Industry|w2.98] Dow Jones Futures Fall, Yields Top 4.5% After Nvidia Runs, Cerebras IP

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Is AVGO Stock Expensive At $440? |
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | TD Cowen Adjusts Price Target on Broadcom to $500 From $405, |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Better Super Semiconductor Stock: Advanced Micro Devices (AM |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Inside Nvidia's $4B Optical Strategy--And Why CPO Changes Ev |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Broadcom Inc (NASDAQ:AVGO) Screens as a Top Growth Stock wit |
| 2026-05-15 | Industry | 🔴 -1 | 2.98 | Finnhub | Dow Jones Futures Fall, Yields Top 4.5% After Nvidia Runs, C |
| 2026-05-15 | Industry | 🟢 +1 | 2.13 | Seeking Al | SA analyst: Marvell and Broadcom poised to win as hyperscale |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **59** / 100 |
| Raw Weighted Score | 9.34 |
| Trading Signal | **⚪ No Trade (Weak Bullish)** |
| Strategy | Mildly positive, insufficient signal — watch for stronger catalyst |
| Suitable For | Watch |
| Confidence | Low |
| News Kept / Dropped | 26 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] IREN: Power & Partnerships Fuel AI Growth
- 🟢 [Earnings|w1.91] Twilio To Rally Over 25%? Here Are 10 Top Analyst Forecasts For Monday
- 🟢 [Analyst Action|w1.76] Macquarie Maintains Outperform on IREN, Raises Price Target to $90

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | IREN Raises $3 Billion To Fund A.I. Cloud Expansion |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | IREN closes $3 billion convertible notes offering |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Zacks Investment Ideas feature highlights: IREN and NVIDIA |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | IREN’s US$2.6b Raise Refocuses Story On AI Infrastructure Ex |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Iren Closes Offering of Senior Notes due 2033 |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Are Iren's $5.5 Billion Deals With Nvidia Game Changers? |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | IREN Closes $3.0 Billion Convertible Notes Offering |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | IREN: Power & Partnerships Fuel AI Growth |

---

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **55** / 100 |
| Raw Weighted Score | 1.08 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Joby Aviation Shares Fly Higher Wednesday: What's Driving The Action?
- 🟢 [Industry|w1.5] 3 Reasons to Buy Joby Aviation Over Archer Aviation

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.25] ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At Risk

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Whic |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Joby Aviation Shares Fly Higher Wednesday: What's Driving Th |
| 2026-05-12 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | 3 Reasons to Buy Joby Aviation Over Archer Aviation |
| 2026-05-12 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At  |
| 2026-05-12 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Archer, Joby expect to begin commercial air taxi flights in  |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Joby Aviation Q1 Earnings Call Highlights |

---

## 🔴 Avoid / Short (3)

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 11.42 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Monolithic Power's Improved Automotive Solutions Drive Growth?
- 🟢 [Industry|w2.98] Monolithic Power Systems Weighs EV And AI Growth Against Rich Valuatio
- 🟢 [Earnings|w2.73] Intel vs. Monolithic: Which Semiconductor Stock is the Better Buy?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Black Swan | 🔴 -1 | 1.78 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | 🟢 +1 | 1.19 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | ⚪  0 | 0.36 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |
| 2026-05-10 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | A Look At Monolithic Power Systems (MPWR) Valuation After A  |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 9.81 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Broadcom Inc (NASDAQ:AVGO) Screens as a Top Growth Stock with a Bullis
- 🟢 [Industry|w2.98] 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone
- 🟢 [Industry|w2.55] TD Cowen Adjusts Price Target on Broadcom to $500 From $405, Maintains

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.78] Jim Cramer Makes Big Claim About Broadcom (AVGO) CEO
- 🔴 [Industry|w2.98] Dow Jones Futures Fall, Yields Top 4.5% After Nvidia Runs, Cerebras IP

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Is AVGO Stock Expensive At $440? |
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | TD Cowen Adjusts Price Target on Broadcom to $500 From $405, |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Better Super Semiconductor Stock: Advanced Micro Devices (AM |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Inside Nvidia's $4B Optical Strategy--And Why CPO Changes Ev |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Broadcom Inc (NASDAQ:AVGO) Screens as a Top Growth Stock wit |
| 2026-05-15 | Industry | 🔴 -1 | 2.98 | Finnhub | Dow Jones Futures Fall, Yields Top 4.5% After Nvidia Runs, C |
| 2026-05-15 | Industry | 🟢 +1 | 2.13 | Seeking Al | SA analyst: Marvell and Broadcom poised to win as hyperscale |

---

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **55** / 100 |
| Raw Weighted Score | 1.08 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Joby Aviation Shares Fly Higher Wednesday: What's Driving The Action?
- 🟢 [Industry|w1.5] 3 Reasons to Buy Joby Aviation Over Archer Aviation

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.25] ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At Risk

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Whic |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Joby Aviation Shares Fly Higher Wednesday: What's Driving Th |
| 2026-05-12 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | 3 Reasons to Buy Joby Aviation Over Archer Aviation |
| 2026-05-12 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At  |
| 2026-05-12 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Archer, Joby expect to begin commercial air taxi flights in  |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Joby Aviation Q1 Earnings Call Highlights |

---

## ⚪ Watch / Neutral (23)

### NASDAQ:IREN
- Score: 59/100 | raw: 9.34 | News: 26 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: WARNING: Overheated Sentiment (one-sided bullish)

### NASDAQ:KLAC
- Score: 59/100 | raw: 2.26 | News: 6 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Bearish-to-Bullish Reversal (reversal)

### NYSE:SPNT
- Score: 57/100 | raw: 1.63 | News: 3 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 57/100 | raw: 1.7 | News: 4 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 56/100 | raw: 1.41 | News: 4 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 55/100 | raw: 1.16 | News: 3 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 55/100 | raw: 1.21 | News: 3 kept / 37 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CIEN
- Score: 54/100 | raw: 1.01 | News: 1 kept / 37 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 54/100 | raw: 1.01 | News: 3 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 53/100 | raw: 0.72 | News: 1 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 53/100 | raw: 0.7 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 53/100 | raw: 0.7 | News: 6 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 51/100 | raw: 0.26 | News: 3 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 0 kept / 24 dropped | No relevant news in window

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 35 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 18 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 14 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 1 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 8 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 50/100 | raw: 0.04 | News: 5 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-15T14:14:46.760Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*