# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-21  |  **News Window:** 2026-05-14 ~ 2026-05-21
**Stock Pool:** us_selected.txt (56)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:ASML** | **98** | 15.49 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/14 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AVGO** | **98** | 17.62 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/22 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:AMAT** | **96** | 22.37 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/15 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:DELL** | **95** | 17.06 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 16/10 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:CIEN** | **95** | 11.91 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/20 | Overheated Sentiment (one-sided bullish) |
| 6 | **NYSE:GLW** | **94** | 15.31 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/19 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MRVL** | **89** | 10.83 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | - |
| 8 | **NYSE:HPE** | **86** | 11.76 | 🟢 Long (Strong) | Momentum / Hold | High | 10/17 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:GOOGL** | **82** | 8.07 | 🟢 Long (Strong) | Momentum / Hold | High | 9/16 | - |
| 10 | **NASDAQ:KLAC** | **80** | 7.14 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/21 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:NVDA** | **79** | 39.43 | 🟢 Long (Strong) | Momentum / Hold | High | 26/4 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:FLEX** | **79** | 6.85 | 🟢 Long (Strong) | Momentum / Hold | High | 5/14 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:SM** | **78** | 6.8 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/10 | Overheated Sentiment (one-sided bullish) |
| 14 | **NYSE:IRM** | **78** | 6.78 | 🟢 Long (Strong) | Momentum / Hold | High | 5/15 | - |
| 15 | **NYSE:MS** | **75** | 5.96 | 🟢 Long (Strong) | Momentum / Hold | High | 5/20 | - |
| 16 | **NYSE:COHR** | **75** | 5.97 | 🟢 Long (Strong) | Momentum / Hold | High | 6/22 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:NVT** | **75** | 5.9 | 🟢 Long (Strong) | Momentum / Hold | High | 7/18 | - |
| 18 | **NYSE:NOK** | **74** | 5.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 19 | **CBOE:CBOE** | **72** | 5.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/10 | - |
| 20 | **NASDAQ:LRCX** | **70** | 4.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/21 | - |
| 21 | **NASDAQ:AMD** | **68** | 6.58 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/14 | Sentiment Strengthening UP (trend) |
| 22 | **NASDAQ:APLD** | **64** | 3.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/14 | - |
| 23 | **NYSE:FN** | **64** | 3.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/11 | - |
| 24 | **NASDAQ:WDC** | **63** | 3.21 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/21 | - |
| 25 | **NYSE:TSM** | **59** | 2.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/19 | - |
| 26 | **NASDAQ:INTC** | **57** | 1.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/15 | - |
| 27 | **NASDAQ:MTSI** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/16 | - |
| 28 | **NYSE:TRNO** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 29 | **NASDAQ:MPWR** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/15 | - |
| 30 | **NASDAQ:RMBS** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/14 | - |
| 31 | **NASDAQ:BGC** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/9 | - |
| 32 | **NASDAQ:INCY** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/15 | - |
| 33 | **NYSE:P** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 34 | **NYSE:PACS** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 35 | **NASDAQ:CORZ** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 36 | **NASDAQ:SANM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/13 | - |
| 37 | **NYSE:DKS** | **51** | 0.23 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/15 | - |
| 38 | **NASDAQ:RKLB** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/25 | - |
| 39 | **NASDAQ:MU** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/23 | - |
| 40 | **NASDAQ:IREN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/14 | - |
| 41 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 42 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 43 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 44 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 45 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 46 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 47 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 48 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 49 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/9 | - |
| 50 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 51 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 52 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 53 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 54 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/8 | - |
| 55 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 56 | **NASDAQ:CRDO** | **40** | -2.44 | ⚪ No Trade (Neutral) | Watch | Low | 2/22 | - |

---

## 🟢 Strong Long (9)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 10.83 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Marvell Technology Gets Boost From New AMD Stake
- 🟢 [Analyst Action|w1.43] Marvell Technology Poised for Upside to Fiscal Q1 Results, Q2 Outlook 
- 🟢 [Analyst Action|w1.43] Marvell Price Target Vaults to $195 at Wells Fargo on AWS Trainium and

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Why Marvell Technology (MRVL) Shares Are Sliding Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Stock Market Today, May 20: Nvidia Climbs Ahead of Earnings  |
| 2026-05-20 | Industry | 🔴 -1 | 1.19 | Finnhub | Why Marvell Technology (MRVL) Shares Are Sliding Today |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Can MRVL's AI Backlog Drive Revenues to Nearly $11B in FY27? |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Marvell Technology Poised for Upside to Fiscal Q1 Results, Q |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Marvell Price Target Vaults to $195 at Wells Fargo on AWS Tr |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why Marvell Technology Stock Is Moving On Up |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Here's Why This Tech Stock Could Be the Best Buy of the Summ |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Do You Believe in the Upside Potential of Marvell Technology |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 11.76 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshaping Its Gl
- 🟢 [Analyst Action|w3.02] JPMorgan Raises Price Target on Hewlett Packard Enterprise Company (HP
- 🟢 [M&A|w1.76] Hewlett Packard Enterprise Resets China Exposure And Rethinks Global P

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | HPE Positioned Highest in Execution and Furthest in Vision i |
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Super Micro Computer Is Up 7% Today: Is It Outperforming Oth |
| 2026-05-19 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | JPMorgan Raises Price Target on Hewlett Packard Enterprise C |
| 2026-05-19 | Industry | 🔴 -1 | 1.01 | Finnhub | Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is  |
| 2026-05-19 | M&A | 🟢 +1 | 3.53 | Finnhub | Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshap |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Assessing Hewlett Packard Enterprise (HPE) Valuation After I |
| 2026-05-18 | Industry | ⚪  0 | 0.84 | Finnhub | NX Group Becomes First-time Winner of HPE's Global Logistics |
| 2026-05-15 | M&A | 🟢 +1 | 1.76 | Finnhub | Hewlett Packard Enterprise Resets China Exposure And Rethink |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 8.07 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 16 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.76] Alphabet Owns The Entire AI Stack And Is The Largest Pure Play Option 
- 🟢 [Earnings|w2.76] Alphabet: FQ1's Record Operating Margin Marks A New Growth Curve
- 🟢 [Analyst Action|w2.55] Alphabet Just Disrupted Itself, Completely (Rating Upgrade)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Leading AI chatbots produce inaccurate or biased results 90% of time o

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Nvidia Can Outgrow Hyperscaler CapEx: Jensen Huang |
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Nvidia's Data Center Revenue Soars. It's Not Just From the ' |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Tracking Al Gore's Generation Investment Management Portfoli |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | These 2 AI Giants Have Been Dormant. That’s Exactly Why They |
| 2026-05-20 | Industry | 🔴 -1 | 0.5 | Seeking Al | Leading AI chatbots produce inaccurate or biased results 90% |
| 2026-05-20 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | Alphabet Just Disrupted Itself, Completely (Rating Upgrade) |
| 2026-05-20 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Alphabet Owns The Entire AI Stack And Is The Largest Pure Pl |
| 2026-05-20 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Alphabet: FQ1's Record Operating Margin Marks A New Growth C |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 39.43 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 4 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] NVIDIA Q1 Earnings Call Highlights
- 🟢 [Earnings|w3.87] Nvidia says it will see $20 billion in CPU sales this year
- 🟢 [Earnings|w3.87] Jensen Huang Closes Out Call. 'Demand Has Gone Parabolic.'

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Nvidia posts another record quarter, reveals $43B of holdings in start
- 🔴 [Earnings|w2.76] Nvidia: The Market Is Watching The Wrong Number
- 🔴 [Earnings|w1.55] Stock market today: Dow, S&P 500, Nasdaq futures slip as Wall Street s

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia-backed AI startup wants to solve AI’s ‘hard problem’ |
| 2026-05-20 | Earnings | 🔴 -1 | 1.55 | Finnhub | Stock market today: Dow, S&P 500, Nasdaq futures slip as Wal |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | NVIDIA Q1 Earnings Call Highlights |
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Why Advanced Micro Devices Stock Was a big Winner on Wednesd |
| 2026-05-20 | Earnings | ⚪  0 | 3.87 | Finnhub | Nvidia (NVDA) Q1 2027 Earnings Transcript |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | Nvidia says it will see $20 billion in CPU sales this year |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jensen Huang Closes Out Call. 'Demand Has Gone Parabolic.' |
| 2026-05-20 | Earnings | 🔴 -1 | 3.87 | Finnhub | Nvidia posts another record quarter, reveals $43B of holding |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.85 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Flex Spin Off Of Cloud And Power Unit Reshapes AI Exposure
- 🟢 [Earnings|w2.27] 5 Revealing Analyst Questions From Flex’s Q1 Earnings Call
- 🟢 [Analyst Action|w1.43] Wall Street Analysts Believe Flex (FLEX) Could Rally 26.38%: Here's is

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Flex and Arlo Technologies Stocks Trade Down, What You Need To Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Flex Spin Off Of Cloud And Power Unit Reshapes AI Exposure |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Wall Street Analysts Believe Flex (FLEX) Could Rally 26.38%: |
| 2026-05-19 | Industry | ⚪  0 | 1.01 | Finnhub | Flex Ltd. (FLEX) Presents at J.P. Morgan 54th Annual Global  |
| 2026-05-19 | Industry | 🔴 -1 | 1.01 | Finnhub | Flex and Arlo Technologies Stocks Trade Down, What You Need  |
| 2026-05-17 | Earnings | 🟢 +1 | 2.27 | Finnhub | 5 Revealing Analyst Questions From Flex’s Q1 Earnings Call |

---

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.78 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 15 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Record AI-Fueled Data Center Leasing Could Be A Game Changer For Iron 
- 🟢 [Earnings|w2.27] A Look At Iron Mountain (IRM) Valuation After Strong Q1 Growth And Rai
- 🟢 [Earnings|w1.64] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 0.6 | Finnhub | Iron Mountain (NYSE:IRM) Shows Perfect Minervini Mix of Tech |
| 2026-05-18 | Industry | ⚪  0 | 0.84 | Finnhub | Data Center REITs: One Of My Highest-Conviction Calls |
| 2026-05-17 | Earnings | 🟢 +1 | 2.27 | Finnhub | Record AI-Fueled Data Center Leasing Could Be A Game Changer |
| 2026-05-17 | Earnings | 🟢 +1 | 2.27 | Finnhub | A Look At Iron Mountain (IRM) Valuation After Strong Q1 Grow |
| 2026-05-15 | Earnings | 🟢 +1 | 1.64 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.96 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Why Goldman Sachs Stock Popped on Wednesday
- 🟢 [Industry|w2.98] Morgan Stanley pushes into crypto with Solana staking ETF filing

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | SpaceX Bitcoin Stack Reaches $1.45B as Public Listing Nears |
| 2026-05-20 | Industry | 🟢 +1 | 2.98 | Finnhub | Why Goldman Sachs Stock Popped on Wednesday |
| 2026-05-20 | Industry | 🟢 +1 | 2.98 | Finnhub | Morgan Stanley pushes into crypto with Solana staking ETF fi |
| 2026-05-20 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Upcoming software earnings ’unlikely to re-rate’ SaaS stocks |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | President Trump’s Truth Social Withdraws Bitcoin ETF Applica |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Why Coherent's Rally May Continue Higher
- 🟢 [Industry|w2.52] A Deep Dive Into NVIDIA’s Latest Portfolio Moves
- 🟢 [Industry|w1.01] Coherent (COHR) Gains from AI Infrastructure Investment

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coherent Drops 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Love Stories Unwind |
| 2026-05-19 | Industry | 🟢 +1 | 2.52 | Finnhub | A Deep Dive Into NVIDIA’s Latest Portfolio Moves |
| 2026-05-19 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Coherent's Rally May Continue Higher |
| 2026-05-19 | Industry | 🟢 +1 | 1.01 | Finnhub | Coherent (COHR) Gains from AI Infrastructure Investment |
| 2026-05-19 | Industry | ⚪  0 | 1.01 | Finnhub | Coherent Stock: Is Wall Street Bullish or Bearish? |
| 2026-05-18 | Industry | 🔴 -1 | 0.84 | Finnhub | Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coher |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 18 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Did Record Q1 Results and Raised Guidance Just Shift nVent Electric's 
- 🟢 [Buyback|w1.76] nVent Announces Share Repurchase Authorization
- 🟢 [Earnings|w1.64] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 1.01 | Finnhub | nVent Electric plc (NVT) Presents at Wolfe Research 19th Ann |
| 2026-05-16 | Earnings | 🟢 +1 | 1.91 | Finnhub | Did Record Q1 Results and Raised Guidance Just Shift nVent E |
| 2026-05-16 | Industry | 🟢 +1 | 0.59 | Finnhub | NVENT ELECTRIC PLC (NYSE:NVT) Breaks Out with Strong Momentu |
| 2026-05-16 | Buyback | ⚪  0 | 1.76 | Finnhub | NVent Electric plc Declares Quarterly Cash Dividend, Payable |
| 2026-05-16 | Buyback | 🟢 +1 | 1.76 | Finnhub | nVent Announces Share Repurchase Authorization |
| 2026-05-16 | Buyback | ⚪  0 | 1.76 | Finnhub | nVent Announces Quarterly Cash Dividend |
| 2026-05-15 | Earnings | 🟢 +1 | 1.64 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |

---

## 🟢 Mid Long (6)

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] What's Going On With Nokia Stock On Wednesday?
- 🟢 [Industry|w2.1] Nokia Shares Edge Higher Following Patent Victory, Management Revamp

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Policy | 🟢 +1 | 3.57 | Finnhub | What's Going On With Nokia Stock On Wednesday? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Nokia Oyj (NOK) Presents at J.P. Morgan 54th Annual Global T |
| 2026-05-18 | Industry | 🟢 +1 | 2.1 | Finnhub | Nokia Shares Edge Higher Following Patent Victory, Managemen |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 10 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Cboe Begins Offering Daily Expirations for Dow Jones Industrial Averag
- 🟢 [Industry|w2.1] Cboe Global Markets : Begins Offering Daily Expirations for Dow Jones 
- 🟢 [Buyback|w1.08] Cboe Global Markets declares $0.72 dividend

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | DRAM Has Nearly Doubled Since Its April Launch and After Fol |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Glass House Brands to Host Investor Sesh V on Thursday, June |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Onco-Innovations Reports Continued Advancement of Key Materi |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | The Two Catalysts That Will Make or Break DRAM’s 98% Rally i |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | DRAM Surged 51% in One Month While SOXX Climbed 32%, but Onl |
| 2026-05-18 | Industry | 🟢 +1 | 2.1 | Finnhub | Cboe Begins Offering Daily Expirations for Dow Jones Industr |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Glass House Brands Announces the Filing of Prospectus Supple |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | BTQ Technologies Announces Shareholder Call and Provides Q1  |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] LRCX Ups WFE View Amid AI Demand: Can It Lift Systems Revenues?
- 🟢 [Analyst Action|w1.43] Bernstein lifts price targets on LRCX and KLAC after lifting WFE forec
- 🟢 [Industry|w1.19] LRCX Overweight: How Lam Research Is Poised to Outperform the $149B WF

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Lam Research vs. Applied Materials: Which AI Chip Stock Has the Edge?
- 🔴 [Industry|w0.6] Love Stories Unwind

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | LRCX Overweight: How Lam Research Is Poised to Outperform th |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Bernstein lifts price targets on LRCX and KLAC after lifting |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | LRCX Ups WFE View Amid AI Demand: Can It Lift Systems Revenu |
| 2026-05-20 | Industry | 🔴 -1 | 1.19 | Finnhub | Lam Research vs. Applied Materials: Which AI Chip Stock Has  |
| 2026-05-20 | Industry | 🔴 -1 | 0.6 | Finnhub | Love Stories Unwind |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Quant ratings on Coatue Management's top holdings: TSM, GEV, |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 14 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Applied Digital Enters Into A Long-term Lease Agreement With The Same 
- 🟢 [Analyst Action|w0.6] Needham Maintains Buy on Applied Digital, Raises Price Target to $51

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Why Applied Digital Stock Is Slumping Monday?
- 🔴 [Analyst Action|w0.6] Buy Core Scientific Over Applied Digital

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Digital Enters Into A Long-term Lease Agreement With |
| 2026-05-18 | Industry | 🔴 -1 | 0.84 | Finnhub | Why Applied Digital Stock Is Slumping Monday? |
| 2026-05-15 | Analyst Action | 🔴 -1 | 0.6 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Needham Maintains Buy on Applied Digital, Raises Price Targe |

---

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 11 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Fabrinet Rides on Automation Boom: A Case for More Upside?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Is Genpact Stock a Buy After Hedge Fund Rice Hall James Rais |
| 2026-05-19 | Earnings | 🟢 +1 | 3.28 | Finnhub | Fabrinet Rides on Automation Boom: A Case for More Upside? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | $1000 Invested In Fabrinet 5 Years Ago Would Be Worth This M |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Fabrinet (FN) Presents at J.P. Morgan 54th Annual Global Tec |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Transcript : Fabrinet Presents at J.P. Morgan 54th Annual Gl |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.21 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 21 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] WD Customer Survey Highlights Growing Focus on Scale, Economics, and R
- 🟢 [Industry|w1.01] Can Post-Quantum Cryptography Give WDC an Edge in AI Data Security?
- 🟢 [Industry|w1.01] Western Digital Corporation (WDC) Included in 2026 S&P Dow Jones Best-

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Western Digital (WDC) Valuation Check After Strong 1-Year Re |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | WD Customer Survey Highlights Growing Focus on Scale, Econom |
| 2026-05-19 | Industry | ⚪  0 | 1.01 | Finnhub | Micron Is Up 6% Today: Is It Outperforming Other Memory Stoc |
| 2026-05-19 | Industry | 🟢 +1 | 1.01 | Finnhub | Can Post-Quantum Cryptography Give WDC an Edge in AI Data Se |
| 2026-05-19 | Industry | 🟢 +1 | 1.01 | Finnhub | Western Digital Corporation (WDC) Included in 2026 S&P Dow J |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Western Digital Corporation (WDC) Presents at J.P. Morgan 54 |

---

## 🟡 Cautious Long (2)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Bernstein lifts price targets on LRCX and KLAC after lifting WFE forec
- 🟢 [Buyback|w3.57] Will Goldman Sachs, Markel, or SanDisk Be the Next Big Stock Split?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Bernstein lifts price targets on LRCX and KLAC after lifting |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Are Computer and Technology Stocks Lagging  KLA (KLAC) This  |
| 2026-05-20 | Buyback | 🟢 +1 | 3.57 | Finnhub | Will Goldman Sachs, Markel, or SanDisk Be the Next Big Stock |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Entegris: Stronger Performance Does Not Justify The Multiple |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | KLAC Stock Skyrockets 59% in 6 Months: Is More Upside Ahead? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | KLA Corporation (KLAC) Presents at J.P. Morgan 54th Annual G |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | From High-Yield to High-Growth: 3 Stocks Boosting Dividends |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 6.58 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] AMD MI350P PCIe GPUs Extend AI Reach Into Enterprise Data Centers
- 🟢 [Industry|w1.19] Why Advanced Micro Devices Stock Was a big Winner on Wednesday
- 🟢 [Industry|w1.19] Chip Stocks Rise as Samsung Strike Risk Threatens Supply

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Cathie Wood dumps more semiconductor stocks in blindsiding move
- 🔴 [Industry|w0.85] AMD Has An Nvidia Problem
- 🔴 [Industry|w0.72] AMD: Priced Like A Leader, Operating In Nvidia's Shadow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Advanced Micro Devices Stock Was a big Winner on Wednesd |
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Stock Market Today, May 20: Nasdaq Gains 1.5% as Risk Appeti |
| 2026-05-20 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD MI350P PCIe GPUs Extend AI Reach Into Enterprise Data Ce |
| 2026-05-20 | Industry | 🔴 -1 | 1.19 | Finnhub | Cathie Wood dumps more semiconductor stocks in blindsiding m |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia: The Market Is Wrong About Q1 |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Chip Stocks Rise as Samsung Strike Risk Threatens Supply |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia, Micron and AMD Leads Chip Rally Samsung Strike Threa |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD Stock Has Doubled This Year. Is It Still a Buy? |

---

## ⚠️ Overheated (7)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 15.49 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] ASML And Tata Chip Fab Deal Tests Valuation And Growth Expectations
- 🟢 [Analyst Action|w1.43] Why ASML Holding Stock Just Popped
- 🟢 [Analyst Action|w1.43] ASML Named Top Pick as UBS Lifts Price Target

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why ASML Holding Stock Just Popped |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ASML Named Top Pick as UBS Lifts Price Target |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ASML Offers Attractive Risk/Reward in European Semiconductor |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | ASML Holding N.V. (ASML) Rallied Following Solid Results |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Exclusive-ASML CEO sees tight supply in booming chip market  |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | ASML Holding N.V. (ASML) is Attracting Investor Attention: H |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ASML gains after UBS calls it Europe’s top semiconductor pic |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | 'ASML CEO Says Next Gen 'High Na' Tech Likely To See First P |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 17.62 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Applied Materials Broadcom Alliance Highlights Growing AI Packaging Am
- 🟢 [M&A|w4.16] Applied Materials Announces Broadcom as EPIC Innovation Partner
- 🟢 [M&A|w2.98] Broadcom joins Applied Materials’ EPIC platform as innovation partner

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Brokers Suggest Investing in Broadcom Inc. (AVGO): Read This |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Is It Too Late To Consider Broadcom (AVGO) After Its Strong  |
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials Broadcom Alliance Highlights Growing AI Pa |
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials Announces Broadcom as EPIC Innovation Part |
| 2026-05-20 | Industry | 🟢 +1 | 0.6 | Finnhub | Prediction: These 4 Stocks Will Hit a $3 Trillion Valuation  |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Is Broadcom (AVGO) One of the Best Long Term US Stocks to Bu |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Broadcom: You Didn't Miss The Boat |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Broadcom: AI Visibility Has Compounded; The Multiple Has Not |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 22.37 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Applied Materials Broadcom Alliance Highlights Growing AI Packaging Am
- 🟢 [M&A|w4.16] Applied Materials Announces Broadcom as EPIC Innovation Partner
- 🟢 [Earnings|w3.87] Behind the Numbers: Why Applied Materials’ Historic Q2 Results Justify

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | LRCX Overweight: How Lam Research Is Poised to Outperform th |
| 2026-05-20 | Earnings | 🟢 +1 | 1.55 | Finnhub | Applied Materials Gains From Rising Operating Leverage: What |
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Best Momentum Stocks to Buy for May 20th |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | Behind the Numbers: Why Applied Materials’ Historic Q2 Resul |
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials Broadcom Alliance Highlights Growing AI Pa |
| 2026-05-20 | Earnings | 🟢 +1 | 3.87 | Finnhub | Applied Materials Highlights AI-Driven Chip Demand, 30% Syst |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Lam Research vs. Applied Materials: Which AI Chip Stock Has  |
| 2026-05-20 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials Announces Broadcom as EPIC Innovation Part |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 17.06 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 16 / 10 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Dell Stock Nabs Price-Target Hikes On AI Strategy
- 🟢 [Industry|w2.52] Why Dell (DELL) Is Gaining From Enterprise Demand for AI Compute Infra
- 🟢 [Earnings|w1.55] Will Dell Technologies (DELL) Beat Estimates Again in Its Next Earning

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Ross Gerber Says 'Pay Attention' To Nvidia And Micron As Jen |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD MI350P PCIe GPUs Extend AI Reach Into Enterprise Data Ce |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Dell Technologies set to deliver beat and raise for Q1, says |
| 2026-05-20 | Earnings | 🟢 +1 | 1.55 | Finnhub | Will Dell Technologies (DELL) Beat Estimates Again in Its Ne |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Super Micro Computer Is Up 7% Today: Is It Outperforming Oth |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | NVIDIA Vera CPU Shipments Test Investor Expectations On Agen |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Dell Technologies seen as 'well positioned' for next phase o |
| 2026-05-19 | Industry | 🟢 +1 | 2.52 | Finnhub | Why Dell (DELL) Is Gaining From Enterprise Demand for AI Com |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 11.91 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Investor Focus
- 🟢 [Industry|w2.52] Matrix NAP Info Boosts Terabit-Era Submarine Connectivity with Ciena W
- 🟢 [Analyst Action|w2.52] Citigroup Maintains Buy on Ciena, Raises Price Target to $658

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Hedge Fund Bienville Capital Exited Its Position in Monday.c |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | 4 Top-Ranked Liquid Stocks to Add to Portfolio for Solid Ret |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Can Proliferating WaveLogic 6 Adoption Fuel Ciena's Top Line |
| 2026-05-20 | Industry | 🟢 +1 | 2.98 | Finnhub | Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Invest |
| 2026-05-19 | Industry | 🟢 +1 | 2.52 | Finnhub | Matrix NAP Info Boosts Terabit-Era Submarine Connectivity wi |
| 2026-05-18 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citigroup Maintains Buy on Ciena, Raises Price Target to $65 |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | TD Cowen Maintains Buy on Ciena, Raises Price Target to $675 |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 15.31 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Corning Stock Rallies to All-Time Highs as AI Optical Boom Builds
- 🟢 [M&A|w3.53] Corning Leans Into AI Infrastructure Growth As Valuation And Risks Sta
- 🟢 [Earnings|w3.28] Can Rising Demand for Fiber Optics Solutions Drive Corning's Growth?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Love Stories Unwind |
| 2026-05-19 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Rising Demand for Fiber Optics Solutions Drive Corning's |
| 2026-05-19 | M&A | 🟢 +1 | 3.53 | Finnhub | Corning Stock Rallies to All-Time Highs as AI Optical Boom B |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Corning Incorporated (GLW) Presents at J.P. Morgan 54th Annu |
| 2026-05-19 | M&A | 🟢 +1 | 3.53 | Finnhub | Corning Leans Into AI Infrastructure Growth As Valuation And |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Stock Of The Day: Is It Time To Buy Corning? |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Leopold Aschenbrenner's 'Situational Awareness' Files 13F Qu |
| 2026-05-18 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Mizuho Raises its Price Target on Corning (GLW) |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.8 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 10 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] The 5 Most Interesting Analyst Questions From SM Energy’s Q1 Earnings 
- 🟢 [Analyst Action|w1.43] Raymond James Upgrades SM Energy (SM)
- 🟢 [Analyst Action|w1.43] This CH Robinson Analyst Turns Bullish; Here Are Top 5 Upgrades For We

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Raymond James Upgrades SM Energy (SM) |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | This CH Robinson Analyst Turns Bullish; Here Are Top 5 Upgra |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | SM Energy double-upgraded at Raymond James on bullish oil ou |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Wells Fargo Maintains Equal-Weight on SM Energy, Raises Pric |
| 2026-05-16 | Earnings | 🟢 +1 | 1.91 | Finnhub | The 5 Most Interesting Analyst Questions From SM Energy’s Q1 |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Bernstein lifts price targets on LRCX and KLAC after lifting WFE forec
- 🟢 [Buyback|w3.57] Will Goldman Sachs, Markel, or SanDisk Be the Next Big Stock Split?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Bernstein lifts price targets on LRCX and KLAC after lifting |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Are Computer and Technology Stocks Lagging  KLA (KLAC) This  |
| 2026-05-20 | Buyback | 🟢 +1 | 3.57 | Finnhub | Will Goldman Sachs, Markel, or SanDisk Be the Next Big Stock |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Entegris: Stronger Performance Does Not Justify The Multiple |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | KLAC Stock Skyrockets 59% in 6 Months: Is More Upside Ahead? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | KLA Corporation (KLAC) Presents at J.P. Morgan 54th Annual G |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | From High-Yield to High-Growth: 3 Stocks Boosting Dividends |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 6.58 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] AMD MI350P PCIe GPUs Extend AI Reach Into Enterprise Data Centers
- 🟢 [Industry|w1.19] Why Advanced Micro Devices Stock Was a big Winner on Wednesday
- 🟢 [Industry|w1.19] Chip Stocks Rise as Samsung Strike Risk Threatens Supply

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Cathie Wood dumps more semiconductor stocks in blindsiding move
- 🔴 [Industry|w0.85] AMD Has An Nvidia Problem
- 🔴 [Industry|w0.72] AMD: Priced Like A Leader, Operating In Nvidia's Shadow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Advanced Micro Devices Stock Was a big Winner on Wednesd |
| 2026-05-20 | Industry | ⚪  0 | 1.19 | Finnhub | Stock Market Today, May 20: Nasdaq Gains 1.5% as Risk Appeti |
| 2026-05-20 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD MI350P PCIe GPUs Extend AI Reach Into Enterprise Data Ce |
| 2026-05-20 | Industry | 🔴 -1 | 1.19 | Finnhub | Cathie Wood dumps more semiconductor stocks in blindsiding m |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia: The Market Is Wrong About Q1 |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Chip Stocks Rise as Samsung Strike Risk Threatens Supply |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia, Micron and AMD Leads Chip Rally Samsung Strike Threa |
| 2026-05-20 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD Stock Has Doubled This Year. Is It Still a Buy? |

---

## ⚪ Watch / Neutral (32)

### NYSE:TSM
- Score: 59/100 | raw: 2.2 | News: 4 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 57/100 | raw: 1.71 | News: 12 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 57/100 | raw: 1.64 | News: 5 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 57/100 | raw: 1.76 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 56/100 | raw: 1.43 | News: 5 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 55/100 | raw: 1.26 | News: 1 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 55/100 | raw: 1.26 | News: 1 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 54/100 | raw: 0.84 | News: 2 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 54/100 | raw: 1.01 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 54/100 | raw: 1.01 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 53/100 | raw: 0.6 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 51/100 | raw: 0.23 | News: 4 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RKLB
- Score: 50/100 | raw: 0 | News: 1 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 50/100 | raw: 0 | News: 5 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 50/100 | raw: 0 | News: 0 kept / 14 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 0 kept / 8 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 1 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 40/100 | raw: -2.44 | News: 2 kept / 22 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-21T01:59:09.733Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*