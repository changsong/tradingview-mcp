# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-16  |  **News Window:** 2026-05-09 ~ 2026-05-16
**Stock Pool:** us_selected.txt (69)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:RKLB** | **95** | 13.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/33 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMAT** | **91** | 28.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/24 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:MTSI** | **88** | 12.61 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/21 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:MRVL** | **88** | 9.05 | 🟢 Long (Strong) | Momentum / Hold | High | 4/36 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:LRCX** | **87** | 8.87 | 🟢 Long (Strong) | Momentum / Hold | High | 5/32 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:CORZ** | **85** | 12.69 | 🟢 Long (Strong) | Momentum / Hold | High | 6/20 | - |
| 7 | **NYSE:WPM** | **84** | 10.79 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/19 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:VRT** | **82** | 7.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/31 | Overheated Sentiment (one-sided bullish) |
| 9 | **NASDAQ:BGC** | **81** | 7.43 | 🟢 Long (Strong) | Momentum / Hold | High | 5/15 | - |
| 10 | **NASDAQ:KLAC** | **78** | 8.86 | 🟢 Long (Strong) | Momentum / Hold | High | 6/32 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:P** | **78** | 10.75 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/29 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:PWR** | **78** | 7.75 | 🟢 Long (Strong) | Momentum / Hold | High | 6/34 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:ADI** | **77** | 9.58 | 🟢 Long (Strong) | Momentum / Hold | High | 6/32 | - |
| 14 | **NASDAQ:CPRX** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 6/22 | - |
| 15 | **NYSE:IRM** | **76** | 6.21 | 🟢 Long (Strong) | Momentum / Hold | High | 3/23 | - |
| 16 | **NYSE:AIR** | **75** | 5.9 | 🟢 Long (Strong) | Momentum / Hold | High | 4/18 | - |
| 17 | **NYSE:MTZ** | **74** | 15.2 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 12/28 | Overheated Sentiment (one-sided bullish) |
| 18 | **NYSE:ETN** | **73** | 8.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/30 | - |
| 19 | **NASDAQ:LITE** | **73** | 9 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/32 | Likely Pre-Priced (no hard catalyst) |
| 20 | **NASDAQ:AVGO** | **73** | 5.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/36 | - |
| 21 | **NYSE:LAR** | **73** | 7.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/20 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:PACS** | **73** | 22.13 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 22/18 | Sentiment Strengthening UP (trend) |
| 23 | **NYSE:JCI** | **72** | 5.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/23 | - |
| 24 | **NYSE:HPE** | **70** | 11.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/27 | - |
| 25 | **NYSE:CF** | **70** | 12.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/22 | Sentiment Strengthening UP (trend) |
| 26 | **NASDAQ:POWL** | **70** | 5.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/20 | - |
| 27 | **NYSE:TT** | **69** | 4.64 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/34 | - |
| 28 | **NYSE:NOK** | **69** | 4.54 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 2/37 | Sentiment Divergence (black swan masked by noise) |
| 29 | **NASDAQ:INTC** | **68** | 8.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/26 | Sentiment Strengthening UP (trend) |
| 30 | **CBOE:CBOE** | **67** | 15.65 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/23 | Sentiment Strengthening UP (trend) |
| 31 | **NASDAQ:ADEA** | **66** | 3.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/18 | - |
| 32 | **NASDAQ:MPWR** | **66** | 7.29 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 9/25 | Sentiment Divergence (black swan masked by noise) |
| 33 | **NASDAQ:APLD** | **65** | 3.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/19 | - |
| 34 | **NASDAQ:RMBS** | **65** | 3.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/24 | - |
| 35 | **NYSE:DELL** | **63** | 8.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/24 | - |
| 36 | **NASDAQ:NVDA** | **62** | 9.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/23 | Sentiment Strengthening UP (trend) |
| 37 | **NYSE:SM** | **61** | 3.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/11 | - |
| 38 | **NYSE:CIEN** | **60** | 2.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/36 | - |
| 39 | **NASDAQ:CRDO** | **60** | 2.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/37 | - |
| 40 | **NYSE:SMP** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/20 | - |
| 41 | **NYSE:GLW** | **60** | 2.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/34 | - |
| 42 | **NYSE:DKS** | **60** | 2.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/25 | - |
| 43 | **NASDAQ:AMD** | **59** | 5.67 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/25 | - |
| 44 | **NYSE:COHR** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/34 | - |
| 45 | **NASDAQ:EQIX** | **59** | 2.39 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/33 | - |
| 46 | **NYSE:FN** | **59** | 2.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/23 | - |
| 47 | **NASDAQ:IREN** | **57** | 7.18 | ⚪ No Trade (Weak Bullish) | Watch | Low | 25/15 | - |
| 48 | **NYSE:SPNT** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 49 | **NYSE:TSM** | **56** | 1.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/33 | - |
| 50 | **NYSE:AROC** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 51 | **NYSE:PFS** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/23 | - |
| 52 | **NASDAQ:INCY** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/25 | - |
| 53 | **NYSE:LTC** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/23 | - |
| 54 | **NYSE:ENS** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/27 | - |
| 55 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/23 | - |
| 56 | **NASDAQ:ASML** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/34 | - |
| 57 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/24 | - |
| 58 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/34 | - |
| 59 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/15 | - |
| 60 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 61 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 62 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 63 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 64 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/12 | - |
| 65 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/24 | - |
| 66 | **NYSE:GNRC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/25 | - |
| 67 | **NASDAQ:MU** | **49** | -0.36 | ⚪ No Trade (Neutral) | Watch | Low | 2/38 | - |
| 68 | **NYSE:MOD** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 3/19 | - |
| 69 | **NYSE:JOBY** | **44** | -1.89 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/16 | - |

---

## 🟢 Strong Long (10)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.05 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 36 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] TD Cowen Maintains Hold on Marvell Technology, Raises Price Target to 
- 🟢 [Industry|w2.55] Marvell Technology Has a Hidden Growth Engine That Could Cause MRVL St

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Marvell Technology Has a Hidden Growth Engine That Could Cau |
| 2026-05-15 | M&A | 🟢 +1 | 4.16 | Finnhub | Marvell’s AI Partnerships With AMD Google And Amazon Test Lo |
| 2026-05-15 | Analyst Action | ⚪  0 | 1.43 | Finnhub | TD Cowen Maintains Hold on Marvell Technology, Raises Price  |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Marvell Q1 Preview: Results Need To Marvel To Support Gains |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.87 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 32 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Lam Research Rides AI Boom With Record Results And Margin Expansion
- 🟢 [Earnings|w3.28] Why Lam Research (LRCX) Is Levered to AI-Driven Wafer Fab and Packagin
- 🟢 [Industry|w2.16] Lam Research (LRCX) is an Incredible Growth Stock: 3 Reasons Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Lam Research Rides AI Boom With Record Results And Margin Ex |
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Lam Research (LRCX) is an Incredible Growth Stock: 3 Reasons |
| 2026-05-14 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Is It Worth Investing in Lam Research (LRCX) Based on Wall S |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Lam Research (LRCX) Is Levered to AI-Driven Wafer Fab an |
| 2026-05-13 | Industry | ⚪  0 | 0.84 | Finnhub | Lam Research Corporation Announces Participation at Upcoming |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 12.69 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Buy Core Scientific Over Applied Digital
- 🟢 [Earnings|w3.28] Core Scientific: AI Beneficiary Status Is Proven, But Shares Retest Pr
- 🟢 [Analyst Action|w3.02] Jefferies Maintains Buy on Core Scientific, Raises Price Target to $37

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | ⚪  0 | 2.55 | Seeking Al | SA analyst upgrades/downgrades: AAPL, GT, CORZ, PLUG |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Core Scientific (CORZ) Recovers As Investors Digest Earnings |
| 2026-05-14 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Jefferies Maintains Buy on Core Scientific, Raises Price Tar |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Core Scientific: AI Beneficiary Status Is Proven, But Shares |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | BTIG Maintains Buy on Core Scientific, Raises Price Target t |

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
| News Kept / Dropped | 5 / 15 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] How Strong Q1 Results And Energy Momentum At BGC Group (BGC) Have Chan
- 🟢 [Industry|w2.16] What Makes BGC Group (BGC) a New Buy Stock
- 🟢 [Earnings|w1.95] BGC Q1 Deep Dive: Energy, Market Share Gains Drive Strong Results, Gui

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | How Strong Q1 Results And Energy Momentum At BGC Group (BGC) |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | BGC Group enters third amended and restated credit agreement |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | What Makes BGC Group (BGC) a New Buy Stock |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | BGC Q1 Deep Dive: Energy, Market Share Gains Drive Strong Re |
| 2026-05-11 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Are Investors Undervaluing BGC Group, Inc. (BGC) Right Now? |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.86 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 32 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race
- 🟢 [Earnings|w2.73] Assessing KLA (KLAC) Valuation After Strong Quarter Dividend Hike And 
- 🟢 [Earnings|w2.73] Why KLA (KLAC) Remains a Process-Control Play on AI Chip Complexity

**📉 Bearish Factors:**
- 🔴 [Industry|w2.1] Sell in May? This 10-Year Semiconductor Stock Patterns Says No.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Is KLA Becoming the Biggest Beneficiary of AI Semiconductor  |
| 2026-05-13 | Analyst Action | ⚪  0 | 2.52 | Finnhub | Here's How Much You Would Have Made Owning KLA Stock In The  |
| 2026-05-13 | Industry | 🔴 -1 | 2.1 | Finnhub | Sell in May? This 10-Year Semiconductor Stock Patterns Says  |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Assessing KLA (KLAC) Valuation After Strong Quarter Dividend |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Why KLA (KLAC) Remains a Process-Control Play on AI Chip Com |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 7.75 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 34 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Quanta Services (PWR) Valuation Check After Raised 2026 Profit Outlook
- 🟢 [Earnings|w2.27] Can Quanta's Mission-Critical Strategy Outrun Economic Slowdowns?
- 🟢 [Industry|w2.16] Quanta Services (PWR) Benefits from Energy-Related Infrastructure Grow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Quanta Services (PWR) Valuation Check After Raised 2026 Prof |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Quanta Services (PWR) Benefits from Energy-Related Infrastru |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | Quanta Services (PWR) Price Target Increased by 26.45% to 78 |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | How Quanta Services (PWR) Is Riding the Utility Buildout Beh |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | 3 Reasons Investors Love Quanta (PWR) |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Can Quanta's Mission-Critical Strategy Outrun Economic Slowd |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 9.58 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 32 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Analog Devices Climbs 57% YTD: Time to Buy, Sell or Hold the Stock?
- 🟢 [Industry|w2.98] 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone
- 🟢 [Earnings|w2.73] Assessing Analog Devices (ADI) Valuation After Strong Recent Share Pri

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Ahead of Analog Devices (ADI) Q2 Earnings: Get Ready With Wa |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | 2 Reasons to Like ADI (and 1 Not So Much) |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Analog Devices Climbs 57% YTD: Time to Buy, Sell or Hold the |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analog Devices (ADI): The Best Electric Vehicle Supply Chain |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Assessing Analog Devices (ADI) Valuation After Strong Recent |

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
| News Kept / Dropped | 6 / 22 |

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

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.21 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | Iron Mountain (IRM) Price Target Increased by 11.79% to 141. |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | ​Iron Mountain Incorporated (IRM) Posts Q1 Results, Data Cen |

---

### NYSE:AIR

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Here's Why AAR (AIR) is a Strong Growth Stock
- 🟢 [Earnings|w2.27] AAR Corp (NYSE:AIR) Meets All Minervini Trend Template Conditions for 
- 🟢 [Industry|w1.08] A Look At AAR (AIR) Valuation After Recent Share Price Pullback And St

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Here's Why AAR (AIR) is a Strong Growth Stock |
| 2026-05-12 | Industry | ⚪  0 | 1.75 | Finnhub | AAR Corp. (AIR) Analyst/Investor Day - Slideshow |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | AAR Corp (NYSE:AIR) Meets All Minervini Trend Template Condi |
| 2026-05-10 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | A Look At AAR (AIR) Valuation After Recent Share Price Pullb |

---

## 🟢 Mid Long (20)

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 8.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 30 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] A Look At Eaton (ETN) Valuation After Raised 2026 Guidance And AI Data
- 🟢 [Earnings|w2.27] Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benefiting from
- 🟢 [Earnings|w1.95] KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Rating

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | M&A | ⚪  0 | 4.16 | Finnhub | Eaton Refocuses On Electrical And Aerospace As AI Power Bet  |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why Eaton (ETN) Is Expanding Switchgear Capacity for the AI  |
| 2026-05-13 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is Eaton Corporation plc (ETN) A Good Stock To Buy Now? |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrast |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Ra |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | A Look At Eaton (ETN) Valuation After Raised 2026 Guidance A |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benef |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 36 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Stock Trades 
- 🟢 [Industry|w2.55] AI Data Center Play And Chipmaker Broadcom Stock Named Top Pick By Ana

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | AI Data Center Play And Chipmaker Broadcom Stock Named Top P |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Broadcom vs Microsoft. Both Are Winning the AI Race. Only On |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Sto |
| 2026-05-15 | M&A | ⚪  0 | 2.98 | Seeking Al | Stanley Druckenmiller's Duquesne initiates stake in AVGO, du |

---

### NYSE:LAR

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 7.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Scotiabank Maintains Sector Outperform on Lithium Argentina, Raises Pr
- 🟢 [Industry|w2.52] Lithium Argentina Gets Large Investment Incentive Regime Approval To E
- 🟢 [Earnings|w1.95] Lithium Argentina AG (LAR) Q1 2026 Earnings Call Highlights: Record Pr

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.27] Lithium Argentina Q1 EPS $0.05 Misses $0.07 Estimate

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Scotiabank Maintains Sector Outperform on Lithium Argentina, |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Lithium Argentina Gets Large Investment Incentive Regime App |
| 2026-05-14 | Industry | ⚪  0 | 1.8 | Seeking Al | Stocks to watch on Thursday after hours: FIG, XBP, LAR |
| 2026-05-13 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Assessing Lithium Argentina (TSX:LAR) Valuation After Strong |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Lithium Argentina AG (LAR) Q1 2026 Earnings Call Highlights: |
| 2026-05-12 | Earnings | ⚪  0 | 2.27 | Finnhub | Lithium Argentina AG (LAR:CA) Q1 2026 Earnings Call Transcri |
| 2026-05-12 | Earnings | 🔴 -1 | 2.27 | Finnhub | Lithium Argentina Q1 EPS $0.05 Misses $0.07 Estimate |

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
| News Kept / Dropped | 4 / 23 |

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Johnson Controls completes acquisition of Alloy Enterprises |
| 2026-05-12 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Johnson Controls International (JCI) Price Target Increased  |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At Johnson Controls International (JCI) Valuation Aft |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Johnson Controls International Q2 Earnings Call Highlights |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 11.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 27 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] JPMorgan Just Hiked Hewlett Packard Enterprise Price Target to $37: Me
- 🟢 [Analyst Action|w3.02] Citigroup Maintains Buy on Hewlett Packard, Raises Price Target to $39
- 🟢 [Industry|w2.52] TD SYNNEX Selected as a HPE Global Distribution Partner

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] HPE Unifies Global Distribution With Ingram Micro and TD SYNNEX

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | M&A | ⚪  0 | 3.57 | Yahoo Fina | Cohesity Expands Strategic Alliance with HPE to Deliver Indu |
| 2026-05-15 | M&A | ⚪  0 | 4.16 | Finnhub | Hewlett Packard Enterprise Resets China Exposure And Rethink |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | JPMorgan Just Hiked Hewlett Packard Enterprise Price Target  |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Hewlett Packard Enterprise (HPE) Unveils Fourth Generation H |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Ingram Micro Named Global Distributor for HPE, Earns Strateg |
| 2026-05-14 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup Maintains Buy on Hewlett Packard, Raises Price Tar |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | TD SYNNEX Selected as a HPE Global Distribution Partner |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Hewlett Packard Enterprise Stock Surges. How Cisco Is Giving |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 12.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 22 |
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

### NASDAQ:POWL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 5.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Powell Industries (POWL) Valuation Check After Record AI Data Center O
- 🟢 [Earnings|w1.91] Powell Industries Q2 Review: Still A Long Growth Runway, But I'm Not A
- 🟢 [Analyst Action|w1.76] Cantor Fitzgerald Maintains Neutral on Powell Industries, Raises Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Powell Industries (POWL) Rallied on Robust Momentum in Order |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Powell Industries (POWL) Valuation Check After Record AI Dat |
| 2026-05-14 | Earnings | ⚪  0 | 3.28 | Finnhub | Powell Industries: +164% Since December, Now A Fully-Priced  |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | How Powell Industries (POWL) Became a Direct Play on AI’s Po |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Powell Industries (POWL) Price Target Increased to $360 by J |
| 2026-05-11 | Earnings | 🟢 +1 | 1.91 | Finnhub | Powell Industries Q2 Review: Still A Long Growth Runway, But |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Cantor Fitzgerald Maintains Neutral on Powell Industries, Ra |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.64 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 34 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Trane Technologies (NYSE:TT) Passes the Caviar Cruise Quality Investin
- 🟢 [Analyst Action|w3.02] JP Morgan Maintains Neutral on Trane Technologies, Raises Price Target
- 🟢 [Analyst Action|w1.8] KeyBanc Raises PT on Trane Technologies (TT), Maintains an Overweight 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | JP Morgan Maintains Neutral on Trane Technologies, Raises Pr |
| 2026-05-14 | Earnings | 🟢 +1 | 1.31 | Finnhub | Trane Technologies (NYSE:TT) Passes the Caviar Cruise Qualit |
| 2026-05-13 | Industry | ⚪  0 | 0.84 | Finnhub | Trane Technologies plc (TT) Presents at Bank of America 33rd |
| 2026-05-12 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | KeyBanc Raises PT on Trane Technologies (TT), Maintains an O |
| 2026-05-10 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | What Trane Technologies (TT)'s Upgraded 2026 Earnings Outloo |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 8.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 26 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Institutional investors flocked to establish new stakes in semiconduct
- 🟢 [Industry|w2.55] Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Stock Trades 
- 🟢 [Industry|w1.5] Intel: Trade The Apple Rally, Don't Marry It

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | These Stocks Are Today’s Movers: Intel, Boeing, Cerebras, Mi |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Analyst Report: Intel Corporation |
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Sto |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Institutional investors flocked to establish new stakes in s |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Tiger Global Management says it initiated new positions in I |
| 2026-05-15 | Industry | ⚪  0 | 2.13 | Seeking Al | Cisco leads Nasdaq gainers this week, while Intel lags |
| 2026-05-15 | Industry | ⚪  0 | 2.13 | Seeking Al | Intel: Winning Washington Isn't Enough At $545 Billion |
| 2026-05-13 | Industry | 🟢 +1 | 1.5 | Seeking Al | Intel: Trade The Apple Rally, Don't Marry It |

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
| Raw Weighted Score | 3.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Buy Core Scientific Over Applied Digital
- 🟢 [Analyst Action|w3.57] Needham Maintains Buy on Applied Digital, Raises Price Target to $51

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🔴 -1 | 1.55 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Needham Maintains Buy on Applied Digital, Raises Price Targe |
| 2026-05-14 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Should You Hold APLD at 16.9x P/S? 3 Reasons Despite the Pre |
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Applied Digital (APLD) Stock Continues To Rise As Company Ge |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Applied Digital (APLD) Is Up 25.1% After $7.5 Billion AI Dea |
| 2026-05-12 | Industry | ⚪  0 | 0.3 | Yahoo Fina | Can Investment in ChronoScale Unlock Additional Value for AP |

---

### NASDAQ:RMBS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 24 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] 8 Out of 9 Analysts Say Buy Rambus. We Say Hold. Here Is the Case for 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Should Rambus’ New PCIe 7.0 Switch IP Shift the Core Narrati |
| 2026-05-14 | Industry | ⚪  0 | 1.01 | Finnhub | Rambus to Present at Upcoming Investor Conferences |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | 8 Out of 9 Analysts Say Buy Rambus. We Say Hold. Here Is the |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 8.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] JPMorgan Adjusts Price Target on Dell Technologies to $280 From $205, 
- 🟢 [Analyst Action|w3.02] Citigroup Maintains Buy on Dell Technologies, Raises Price Target to $
- 🟢 [Industry|w2.52] Even if Dell Laptops Disappeared, I’d Still Buy the Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | ⚪  0 | 3 | Yahoo Fina | Virtana Deal Highlights Dell AI Factory Adoption And Investo |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | JPMorgan Hikes Dell Price Target to $280: Memory Concerns Fa |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | This Will Be Dell’s Stock Price in 2027 |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Here is What to Know Beyond Why Dell Technologies Inc. (DELL |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | JPMorgan Adjusts Price Target on Dell Technologies to $280 F |
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Kioxia and Dell Technologies First to Deliver High-Density S |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Trump went big on tech stocks in first quarter of 2026, new  |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Even if Dell Laptops Disappeared, I’d Still Buy the Stock |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 9.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w4.55] A Look At Nova (NVMI) Valuation After Record Q1 2026 Beat And Upgraded
- 🟢 [Industry|w2.98] Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Stock Trades 
- 🟢 [Earnings|w2.34] Nvidia: A Strong Setup Ahead Of Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Earnings | ⚪  0 | 3.9 | Yahoo Fina | Dow Jones Futures: S&P 500, Nasdaq Hold Near Highs; Nvidia,  |
| 2026-05-16 | Earnings | 🟢 +1 | 4.55 | Finnhub | A Look At Nova (NVMI) Valuation After Record Q1 2026 Beat An |
| 2026-05-15 | M&A | ⚪  0 | 4.16 | Finnhub | Eaton Refocuses On Electrical And Aerospace As AI Power Bet  |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Big earnings on deck: What to watch next week |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Sto |
| 2026-05-15 | Rumor | ⚪  0 | 1.78 | Finnhub | Nvidia Stock Investors Just Got Fantastic News from Wall Str |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Nvidia Sells the Shovels, Alphabet Digs the Mine: Two Paths  |
| 2026-05-15 | M&A | ⚪  0 | 2.98 | Seeking Al | Soros Fund takes new stake in Talkspace, ups Nvidia and Warn |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 11 |

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

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 36 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] TD Cowen Maintains Buy on Ciena, Raises Price Target to $675
- 🟢 [Industry|w2.52] Ciena Up 90% in 3 Months: Should Investors Still Buy the Stock?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | TD Cowen Maintains Buy on Ciena, Raises Price Target to $675 |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Ciena Up 90% in 3 Months: Should Investors Still Buy the Sto |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 37 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Credo's Next Growth Phase Looks Much Bigger
- 🟢 [Earnings|w2.73] Credo: The Market Is Missing What Meta And CoreWeave Just Confirmed

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🟢 +1 | 1.31 | Finnhub | Credo's Next Growth Phase Looks Much Bigger |
| 2026-05-13 | Earnings | 🟢 +1 | 1.09 | Finnhub | Credo: The Market Is Missing What Meta And CoreWeave Just Co |

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

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 34 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Corning vs. Nokia: Which Connectivity Stock is the Better Buy Now?
- 🟢 [Analyst Action|w1.08] Corning Incorporated (GLW) Discusses Upgrade and Extension of Springbo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Jim Cramer Shares Key Facts About Corning (GLW) |
| 2026-05-13 | Industry | 🟢 +1 | 0.84 | Finnhub | Corning (GLW) Price Target Increased by 40.31% to 203.60 |
| 2026-05-13 | Earnings | 🟢 +1 | 1.09 | Finnhub | Corning vs. Nokia: Which Connectivity Stock is the Better Bu |
| 2026-05-10 | Analyst Action | 🟢 +1 | 0.43 | Seeking Al | Corning Incorporated (GLW) Discusses Upgrade and Extension o |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 25 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] BTIG Reiterates Buy on Dick's Sporting Goods, Maintains $300 Price Tar
- 🟢 [M&A|w2.06] DICK'S Sporting Goods: It's Game Time
- 🟢 [Industry|w1.26] A Look At DICK’S Sporting Goods (DKS) Valuation As Foot Locker Deal Sh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | BTIG Reiterates Buy on Dick's Sporting Goods, Maintains $300 |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Dick's Sporting Goods (DKS) Stock Sinks As Market Gains: Her |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | A Look At DICK’S Sporting Goods (DKS) Valuation As Foot Lock |
| 2026-05-11 | M&A | 🟢 +1 | 0.82 | Finnhub | DICK'S Sporting Goods: It's Game Time |

---

## 🟡 Cautious Long (5)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 15.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 28 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] A Look At MasTec (MTZ) Valuation After Strong Earnings Backlog And AI 
- 🟢 [Earnings|w2.73] Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Results?
- 🟢 [Analyst Action|w2.52] JP Morgan Maintains Overweight on MasTec, Raises Price Target to $491

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day - Slideshow |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At MasTec (MTZ) Valuation After Strong Earnings Backl |
| 2026-05-14 | Earnings | ⚪  0 | 3.28 | Finnhub | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | MasTec (MTZ) Price Target Increased by 23.80% to 465.47 |
| 2026-05-14 | Analyst Action | ⚪  0 | 3.02 | Finnhub | Guggenheim Upgrades MasTec (MTZ) |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why MasTec (MTZ) Is Leveraged to the Grid Expansion Behind A |
| 2026-05-13 | Earnings | ⚪  0 | 2.73 | Finnhub | Billionaire Investor Quietly Loads Up On Construction Stocks |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Res |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 9 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

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
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | What Makes Lumentum (LITE) a New Strong Buy Stock |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum's Components Business Accelerates: More Upside Ahea |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Best Momentum Stocks to Buy for May 14th |
| 2026-05-14 | Earnings | 🔴 -1 | 3.28 | Finnhub | Applied Optoelectronics Over Lumentum: One AI Networking Boo |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Lumentum Holdings Inc. (LITE) Hit a 52 Week High, Can the Ru |
| 2026-05-13 | Analyst Action | ⚪  0 | 2.52 | Finnhub | Here's How Much You Would Have Made Owning Lumentum Holdings |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Optics Stock Rally Continues: Applied Optoelectronics Surges |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 22.13 |
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
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | UBS Lifts PACS Group Price Target to $50 From $44, Maintains |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | PACS Group Q1 Earnings Call Highlights |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike a |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Oppenheimer Adjusts Price Target on PACS Group to $48 From $ |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat |
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
| News Kept / Dropped | 2 / 37 |
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

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 15.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Leverage Shares by Themes Follows Cerebras Systems IPO with Introducti
- 🟢 [Industry|w2.98] Abaxx Provides Corporate Milestone Update
- 🟢 [Industry|w2.55] CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should Yo |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Light AI reports Financial Results for Three Months ended Ma |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Onco-Innovations Strengthens Quality Testing for Lead PNKP I |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Abaxx Technologies Inc. to Begin Trading on Toronto Stock Ex |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Leverage Shares by Themes Follows Cerebras Systems IPO with  |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Abaxx Provides Corporate Milestone Update |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Base Carbon Reports First-Quarter 2026 Operating and Financi |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | PowerBank Announces Third Quarter Results |

---

## ⚠️ Overheated (6)

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 13.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 33 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Rocket Lab: The Stock Is More Expensive Now, But I've Still Decided To
- 🟢 [Industry|w2.52] Rocket Lab Stock Is Climbing Today: What's Happening?
- 🟢 [Analyst Action|w2.52] Why Is Rocket Lab Stock Surging On Wednesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Rocket Lab Stock Is Climbing Today: What's Happening? |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Is Rocket Lab Stock Surging On Wednesday? |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Rocket Lab: The Stock Is More Expensive Now, But I've Still  |
| 2026-05-12 | Industry | 🟢 +1 | 1.75 | Finnhub | Rocket Lab's Rally Changes Everything For Investors |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Why Is Rocket Lab Stock Falling On Tuesday? |
| 2026-05-11 | Industry | ⚪  0 | 1.47 | Finnhub | Stock Of The Day: Did Rocket Lab Break Out Again? |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Needham Maintains Buy on Rocket Lab, Raises Price Target to  |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 28.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Applied Materials Q2 Earnings Beat Estimates, Revenues Increase Y/Y
- 🟢 [Earnings|w3.87] Eight Firms Just Piled Into Applied Materials: Wall Street Hikes Price
- 🟢 [Analyst Action|w3.57] Applied Materials Seen Outperforming Wafer Fab Equipment Industry, Mor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Applied Materials AMAT Q2 2026 Earnings Transcript |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Applied Materials Q2 Earnings Beat Estimates, Revenues Incre |
| 2026-05-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Eight Firms Just Piled Into Applied Materials: Wall Street H |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Applied Materials Visibility Extends Into 2027 Amid Strong D |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Applied Materials Seen Outperforming Wafer Fab Equipment Ind |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citigroup Maintains Buy on Applied Materials, Raises Price T |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | B of A Securities Maintains Buy on Applied Materials, Raises |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Deutsche Bank Maintains Buy on Applied Materials, Raises Pri |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 12.61 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Why MACOM (MTSI) Is Up 11.3% After Strong Q2 Results And Higher Q3 Rev
- 🟢 [Earnings|w3.28] MACOM Technology Solutions: Strong Growth Is Not Worth It At Any Price
- 🟢 [Industry|w2.55] M/A-Com (MTSI) is a Great Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | M/A-Com (MTSI) is a Great Momentum Stock: Should You Buy? |
| 2026-05-15 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why MACOM (MTSI) Is Up 11.3% After Strong Q2 Results And Hig |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | MACOM Technology Solutions: Strong Growth Is Not Worth It At |
| 2026-05-12 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Don't Overlook M/A-Com (MTSI) International Revenue Trends W |
| 2026-05-12 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Gro |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | Northland Raises its Price Target on MACOM Technology (MTSI) |
| 2026-05-11 | Earnings | ⚪  0 | 1.91 | Finnhub | MACOM Technology: A Showcase Of AI Momentum |

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
| News Kept / Dropped | 7 / 19 |
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

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 31 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w4.2] Loop Capital Initiates Coverage of Vertiv Holdings (VRT) with Buy Reco
- 🟢 [Analyst Action|w3.57] Barclays Maintains Overweight on Vertiv Holdings, Raises Price Target 
- 🟢 [Analyst Action|w3.57] RBC Capital Maintains Outperform on Vertiv Holdings, Raises Price Targ

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Analyst Action | 🟢 +1 | 1.68 | Finnhub | Loop Capital Initiates Coverage of Vertiv Holdings (VRT) wit |
| 2026-05-15 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | VRT vs. APH: Which AI Infrastructure Stock Is the Smarter Bu |
| 2026-05-15 | M&A | ⚪  0 | 1.66 | Finnhub | Vertiv Holdings Recommends Shareholders Reject the Mini-Tend |
| 2026-05-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Is It Too Late To Consider Vertiv Holdings Co (VRT) After It |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Barclays Maintains Overweight on Vertiv Holdings, Raises Pri |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | RBC Capital Maintains Outperform on Vertiv Holdings, Raises  |
| 2026-05-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Vertiv (VRT) Names Frieda He as Chief Procurement Officer |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer on Vertiv: “You Buy Half and Then You Wait for a  |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 10.75 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 29 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Citigroup Downgrades Everpure to Neutral, Announces $90 Price Target
- 🟢 [Earnings|w2.73] Everpure Q1 Preview: Will Keep Riding The AI Hype, But Priced For Perf
- 🟢 [Earnings|w2.27] Everpure Q1 Earnings Preview: Further Price Increases And Hyperscale C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | ⚪  0 | 3 | MarketWatc | Head of Harvard&#x2019;s Endowment Tells Board He Plans to R |
| 2026-05-14 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Why Everpure (P) Stock Is Trading Up Today |
| 2026-05-14 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup Downgrades Everpure to Neutral, Announces $90 Pric |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Everpure Q1 Preview: Will Keep Riding The AI Hype, But Price |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Everpure (P) Moves 11.8% Higher: Will This Strength Last? |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Is Everpure (P) Quietly Reshaping Its AI Moat With Deeper Re |
| 2026-05-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Everpure Q1 Earnings Preview: Further Price Increases And Hy |
| 2026-05-11 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Is It Too Late To Consider Everpure (P) After Its 63.7% One  |

---

## ⚠️ Risk Pattern (6)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 15.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 28 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] A Look At MasTec (MTZ) Valuation After Strong Earnings Backlog And AI 
- 🟢 [Earnings|w2.73] Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Results?
- 🟢 [Analyst Action|w2.52] JP Morgan Maintains Overweight on MasTec, Raises Price Target to $491

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day - Slideshow |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At MasTec (MTZ) Valuation After Strong Earnings Backl |
| 2026-05-14 | Earnings | ⚪  0 | 3.28 | Finnhub | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |
| 2026-05-14 | Industry | ⚪  0 | 2.52 | Finnhub | MasTec (MTZ) Price Target Increased by 23.80% to 465.47 |
| 2026-05-14 | Analyst Action | ⚪  0 | 3.02 | Finnhub | Guggenheim Upgrades MasTec (MTZ) |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Why MasTec (MTZ) Is Leveraged to the Grid Expansion Behind A |
| 2026-05-13 | Earnings | ⚪  0 | 2.73 | Finnhub | Billionaire Investor Quietly Loads Up On Construction Stocks |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Should You Buy, Hold or Sell MasTec Stock After Solid Q1 Res |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 9 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

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
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | What Makes Lumentum (LITE) a New Strong Buy Stock |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum's Components Business Accelerates: More Upside Ahea |
| 2026-05-14 | Industry | 🟢 +1 | 2.52 | Finnhub | Best Momentum Stocks to Buy for May 14th |
| 2026-05-14 | Earnings | 🔴 -1 | 3.28 | Finnhub | Applied Optoelectronics Over Lumentum: One AI Networking Boo |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Lumentum Holdings Inc. (LITE) Hit a 52 Week High, Can the Ru |
| 2026-05-13 | Analyst Action | ⚪  0 | 2.52 | Finnhub | Here's How Much You Would Have Made Owning Lumentum Holdings |
| 2026-05-13 | Industry | 🟢 +1 | 2.1 | Finnhub | Optics Stock Rally Continues: Applied Optoelectronics Surges |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 22.13 |
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
| 2026-05-14 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | UBS Lifts PACS Group Price Target to $50 From $44, Maintains |
| 2026-05-14 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | PACS Group Q1 Earnings Call Highlights |
| 2026-05-14 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike a |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Oppenheimer Adjusts Price Target on PACS Group to $48 From $ |
| 2026-05-13 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat |
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
| News Kept / Dropped | 2 / 37 |
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

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 15.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Leverage Shares by Themes Follows Cerebras Systems IPO with Introducti
- 🟢 [Industry|w2.98] Abaxx Provides Corporate Milestone Update
- 🟢 [Industry|w2.55] CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should Yo |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Light AI reports Financial Results for Three Months ended Ma |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Onco-Innovations Strengthens Quality Testing for Lead PNKP I |
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Abaxx Technologies Inc. to Begin Trading on Toronto Stock Ex |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Leverage Shares by Themes Follows Cerebras Systems IPO with  |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Abaxx Provides Corporate Milestone Update |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | Base Carbon Reports First-Quarter 2026 Operating and Financi |
| 2026-05-15 | Earnings | ⚪  0 | 3.87 | Finnhub | PowerBank Announces Third Quarter Results |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 7.29 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 25 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Monolithic Power's Improved Automotive Solutions Drive Growth?
- 🟢 [Industry|w2.98] Monolithic Power Systems Weighs EV And AI Growth Against Rich Valuatio
- 🟢 [Earnings|w2.73] Intel vs. Monolithic: Which Semiconductor Stock is the Better Buy?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Watch How Institutions Push Monolithic Power Systems Higher |
| 2026-05-15 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-13 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |

---

## 🔴 Avoid / Short (2)

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 7.29 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 25 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Monolithic Power's Improved Automotive Solutions Drive Growth?
- 🟢 [Industry|w2.98] Monolithic Power Systems Weighs EV And AI Growth Against Rich Valuatio
- 🟢 [Earnings|w2.73] Intel vs. Monolithic: Which Semiconductor Stock is the Better Buy?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.98 | Finnhub | Watch How Institutions Push Monolithic Power Systems Higher |
| 2026-05-15 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | 🟢 +1 | 2.98 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-13 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | ⚪  0 | 1.8 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |

---

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **44** / 100 |
| Raw Weighted Score | -1.89 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 16 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Joby Aviation Shares Fly Higher Wednesday: What's Driving The Action?
- 🟢 [Industry|w1.5] 3 Reasons to Buy Joby Aviation Over Archer Aviation

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelms Q1 Beat
- 🔴 [Black Swan|w2.25] ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At Risk

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Whic |
| 2026-05-15 | Earnings | 🔴 -1 | 3.87 | Finnhub | Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelm |
| 2026-05-13 | Earnings | 🟢 +1 | 2.73 | Finnhub | Joby Aviation Shares Fly Higher Wednesday: What's Driving Th |
| 2026-05-12 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | 3 Reasons to Buy Joby Aviation Over Archer Aviation |
| 2026-05-12 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At  |
| 2026-05-12 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Archer, Joby expect to begin commercial air taxi flights in  |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Joby Aviation Q1 Earnings Call Highlights |

---

## ⚪ Watch / Neutral (26)

### NASDAQ:AMD
- Score: 59/100 | raw: 5.67 | News: 13 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:COHR
- Score: 59/100 | raw: 2.1 | News: 4 kept / 34 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 59/100 | raw: 2.39 | News: 5 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 59/100 | raw: 2.27 | News: 4 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 57/100 | raw: 7.18 | News: 25 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 56/100 | raw: 1.36 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 56/100 | raw: 1.55 | News: 1 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 54/100 | raw: 1.01 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 53/100 | raw: 0.66 | News: 3 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 53/100 | raw: 0.7 | News: 3 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 53/100 | raw: 0.7 | News: 4 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 53/100 | raw: 0.7 | News: 2 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 1 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ASML
- Score: 50/100 | raw: 0 | News: 5 kept / 34 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 0 kept / 24 dropped | No relevant news in window

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 1 kept / 34 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 15 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 8 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 24 dropped | No relevant news in window

### NYSE:GNRC
- Score: 50/100 | raw: 0 | News: 2 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 49/100 | raw: -0.36 | News: 2 kept / 38 dropped | No clear directional bias — stay flat

### NYSE:MOD
- Score: 48/100 | raw: -0.6 | News: 3 kept / 19 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-16T04:37:05.474Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*