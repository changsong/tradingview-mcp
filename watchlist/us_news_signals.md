# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-17  |  **News Window:** 2026-05-10 ~ 2026-05-17
**Stock Pool:** us_selected.txt (69)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:MTZ** | **99** | 18.77 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/20 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:HPE** | **98** | 11.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/28 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DELL** | **89** | 9.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/24 | Overheated Sentiment (one-sided bullish) |
| 4 | **NASDAQ:RKLB** | **86** | 8.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/34 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:CF** | **86** | 8.6 | 🟢 Long (Strong) | Momentum / Hold | High | 14/22 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MPWR** | **85** | 8.4 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/26 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:ETN** | **82** | 7.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/20 | Overheated Sentiment (one-sided bullish) |
| 8 | **NYSE:IRM** | **82** | 7.75 | 🟢 Long (Strong) | Momentum / Hold | High | 3/24 | - |
| 9 | **NASDAQ:AMD** | **81** | 11.65 | 🟢 Long (Strong) | Momentum / Hold | High | 15/13 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:AMAT** | **81** | 8.12 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/26 | Overheated Sentiment (one-sided bullish) |
| 11 | **NYSE:VRT** | **81** | 11.21 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/20 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:PWR** | **80** | 7.15 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/34 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:COHR** | **79** | 6.92 | 🟢 Long (Strong) | Momentum / Hold | High | 4/33 | Sentiment Strengthening UP (trend) |
| 14 | **NASDAQ:LITE** | **79** | 7.79 | 🟢 Long (Strong) | Momentum / Hold | High | 7/32 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:CPRX** | **75** | 5.99 | 🟢 Long (Strong) | Momentum / Hold | High | 6/22 | - |
| 16 | **NASDAQ:CORZ** | **75** | 6.02 | 🟢 Long (Strong) | Momentum / Hold | High | 6/20 | - |
| 17 | **NASDAQ:KLAC** | **73** | 5.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/34 | Sentiment Strengthening UP (trend) |
| 18 | **NASDAQ:MTSI** | **73** | 5.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/24 | - |
| 19 | **NYSE:WPM** | **71** | 5.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/20 | - |
| 20 | **CBOE:CBOE** | **70** | 5.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/23 | - |
| 21 | **NASDAQ:NVDA** | **70** | 5.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/24 | - |
| 22 | **NYSE:JCI** | **70** | 4.69 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/24 | - |
| 23 | **NASDAQ:AVGO** | **68** | 4.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/32 | - |
| 24 | **NASDAQ:BGC** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/15 | - |
| 25 | **NYSE:SM** | **66** | 3.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/11 | - |
| 26 | **NASDAQ:EQIX** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/23 | - |
| 27 | **NASDAQ:LRCX** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/23 | - |
| 28 | **NYSE:TRNO** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/4 | - |
| 29 | **NASDAQ:APLD** | **65** | 3.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/19 | - |
| 30 | **NYSE:NOK** | **65** | 3.65 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 2/37 | Sentiment Divergence (black swan masked by noise) |
| 31 | **NYSE:RIO** | **64** | 3.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/12 | - |
| 32 | **NASDAQ:POWL** | **63** | 3.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/26 | - |
| 33 | **NASDAQ:ASML** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/34 | - |
| 34 | **NASDAQ:ADI** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/32 | - |
| 35 | **NYSE:LAR** | **60** | 2.48 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/20 | - |
| 36 | **NYSE:CIEN** | **59** | 2.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/36 | - |
| 37 | **NYSE:P** | **59** | 2.18 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/19 | - |
| 38 | **NASDAQ:MRVL** | **57** | 1.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/36 | - |
| 39 | **NASDAQ:IREN** | **56** | 1.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 17/15 | - |
| 40 | **NASDAQ:CRDO** | **56** | 1.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/25 | - |
| 41 | **NYSE:TT** | **56** | 1.44 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/34 | - |
| 42 | **NYSE:GLW** | **56** | 1.34 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/25 | - |
| 43 | **NASDAQ:INCY** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/26 | - |
| 44 | **NYSE:FN** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/23 | - |
| 45 | **NYSE:ENS** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/27 | - |
| 46 | **NYSE:DKS** | **54** | 1.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/24 | - |
| 47 | **NYSE:AROC** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 48 | **NYSE:GNRC** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/16 | - |
| 49 | **NYSE:MS** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/33 | - |
| 50 | **NYSE:SPNT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 51 | **NYSE:PFS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 52 | **NASDAQ:ADEA** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 53 | **NYSE:AIR** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/10 | - |
| 54 | **NASDAQ:RMBS** | **51** | 0.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/14 | - |
| 55 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/24 | - |
| 56 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/15 | - |
| 57 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 58 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 59 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 60 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 61 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 62 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/33 | - |
| 63 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/18 | - |
| 64 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/14 | - |
| 65 | **NASDAQ:MU** | **49** | -0.19 | ⚪ No Trade (Neutral) | Watch | Low | 3/37 | - |
| 66 | **NYSE:LTC** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 4/22 | - |
| 67 | **NYSE:JOBY** | **46** | -1.01 | ⚪ No Trade (Neutral) | Watch | Low | 2/11 | - |
| 68 | **NASDAQ:INTC** | **45** | -1.11 | ⚪ No Trade (Neutral) | Watch | Low | 11/27 | - |
| 69 | **NASDAQ:GEN** | **40** | -2.32 | ⚪ No Trade (Neutral) | Watch | Low | 2/13 | - |

---

## 🟢 Strong Long (7)

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.6 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid Ammonia Ou
- 🟢 [Analyst Action|w1.04] CF Industries and Norwegian Cruise Line have been highlighted as Zacks
- 🟢 [Analyst Action|w1.04] Bull of the Day: CF Industries (CF)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] CF Industries Stock: Is Wall Street Bullish or Bearish?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid  |
| 2026-05-16 | Industry | 🟢 +1 | 0.6 | Finnhub | CF Industries Holdings (NYSE:CF) Screens Strong with High Gr |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | CF Industries and Norwegian Cruise Line have been highlighte |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Bull of the Day: CF Industries (CF) |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Zacks Investment Ideas feature highlights: CF Industries and |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | Assessing CF Industries (CF) Valuation After Strong Long Ter |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | BofA Securities Raises Price Target on CF Industries Holding |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | CF Industries Holdings (NYSE:CF): A Decent Value Play with S |

---

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.75 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV
- 🟢 [Analyst Action|w2.52] Iron Mountain (IRM) Price Target Increased by 11.79% to 141.40
- 🟢 [Earnings|w1.95] ​Iron Mountain Incorporated (IRM) Posts Q1 Results, Data Center Revenu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 3.28 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Iron Mountain (IRM) Price Target Increased by 11.79% to 141. |
| 2026-05-13 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | ​Iron Mountain Incorporated (IRM) Posts Q1 Results, Data Cen |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.65 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Marvell’s AI Partnerships With AMD Google And Amazon Test Lofty Valuat
- 🟢 [M&A|w3.53] Robust Earnings Growth and Innovation Will Help the Marvell Stock Uptr
- 🟢 [Industry|w2.98] AMD Server Share Gains Test The Strength Of Its AI Growth Story

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Stock Trades 
- 🔴 [Industry|w1.01] Arm Holdings CEO Rene Haas Has a Big Warning for Intel and AMD
- 🔴 [Analyst Action|w0.6] AMD: The Ride Won't Last Forever (Rating Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Is AMD a Top Artificial Intelligence (AI) Stock to Buy? |
| 2026-05-16 | Industry | 🟢 +1 | 1.19 | Finnhub | Intel Is Supposed to Be in a New CPU Era But Its Losing Mark |
| 2026-05-16 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD Server Share Gains Test The Strength Of Its AI Growth St |
| 2026-05-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Is Advanced Micro Devices (AMD) the Best Stock To Profit fro |
| 2026-05-16 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | Notable analyst calls this week: Dell, J&amp;J and AMD stock |
| 2026-05-15 | Industry | 🔴 -1 | 1.01 | Finnhub | Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Sto |
| 2026-05-15 | M&A | 🟢 +1 | 3.53 | Finnhub | Marvell’s AI Partnerships With AMD Google And Amazon Test Lo |
| 2026-05-15 | M&A | 🟢 +1 | 3.53 | Finnhub | Robust Earnings Growth and Innovation Will Help the Marvell  |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.92 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 33 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And Expanded N
- 🟢 [Analyst Action|w2.52] Coherent (COHR) Price Target Increased by 20.86% to 380.88
- 🟢 [Industry|w0.5] What Makes Coherent (COHR) a Lucrative Investment?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And  |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | What Makes Coherent (COHR) a Lucrative Investment? |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Coherent (COHR) After Its 400% On |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Coherent (COHR) Price Target Increased by 20.86% to 380.88 |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.79 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 32 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuation Debate
- 🟢 [Analyst Action|w2.16] What Makes Lumentum (LITE) a New Strong Buy Stock
- 🟢 [Industry|w2.1] Lumentum's Components Business Accelerates: More Upside Ahead?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.01] Applied Optoelectronics Over Lumentum: One AI Networking Boom, Two Dif

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Analyst Action | ⚪  0 | 3.06 | Yahoo Fina | Barclays Adjusts Lumentum (LITE) Target After Q3 Results |
| 2026-05-15 | M&A | 🟢 +1 | 3.53 | Finnhub | Lumentum’s AI Optics Demand And NVIDIA Deal Reshape Valuatio |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | What Makes Lumentum (LITE) a New Strong Buy Stock |
| 2026-05-14 | Industry | 🟢 +1 | 2.1 | Finnhub | Lumentum's Components Business Accelerates: More Upside Ahea |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Best Momentum Stocks to Buy for May 14th |
| 2026-05-14 | Analyst Action | 🔴 -1 | 1.01 | Finnhub | Applied Optoelectronics Over Lumentum: One AI Networking Boo |
| 2026-05-13 | Industry | ⚪  0 | 0.7 | Finnhub | Here's How Much You Would Have Made Owning Lumentum Holdings |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.99 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 22 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Catalyst Pharmaceuticals: Angelini Deal Caps A Potentially Better Stor
- 🟢 [Earnings|w1.64] Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M Estimate.
- 🟢 [Earnings|w1.4] Catalyst Pharmaceutical (CPRX) Surpasses Q1 Earnings and Revenue Estim

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CPRX or UTHR: Which Is the Better Value Stock Right Now? |
| 2026-05-13 | M&A | 🟢 +1 | 2.45 | Finnhub | Catalyst Pharmaceuticals: Angelini Deal Caps A Potentially B |
| 2026-05-11 | Earnings | ⚪  0 | 0.7 | Yahoo Fina | Catalyst (CPRX) Q1 Earnings: Taking a Look at Key Metrics Ve |
| 2026-05-11 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Surpasses Q1 Earnings and Rev |
| 2026-05-11 | Earnings | 🟢 +1 | 1.64 | Finnhub | Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M E |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Funda |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.02 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 20 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Jefferies Maintains Buy on Core Scientific, Raises Price Target to $37
- 🟢 [Analyst Action|w2.1] BTIG Maintains Buy on Core Scientific, Raises Price Target to $33
- 🟢 [Industry|w1.01] Buy Core Scientific Over Applied Digital

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.55] Core Scientific: AI Beneficiary Status Is Proven, But Shares Retest Pr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | ⚪  0 | 0.5 | Seeking Al | SA analyst upgrades/downgrades: AAPL, GT, CORZ, PLUG |
| 2026-05-14 | Earnings | 🟢 +1 | 0.94 | Yahoo Fina | Core Scientific (CORZ) Recovers As Investors Digest Earnings |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Jefferies Maintains Buy on Core Scientific, Raises Price Tar |
| 2026-05-14 | Earnings | 🔴 -1 | 0.55 | Finnhub | Core Scientific: AI Beneficiary Status Is Proven, But Shares |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | BTIG Maintains Buy on Core Scientific, Raises Price Target t |

---

## 🟢 Mid Long (18)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 34 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] KLA Stock Split And Dividend Increase Highlight Confidence And Valuati
- 🟢 [Analyst Action|w1.21] KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race
- 🟢 [Industry|w0.84] Is KLA Becoming the Biggest Beneficiary of AI Semiconductor Spending?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Buyback | 🟢 +1 | 3.57 | Finnhub | KLA Stock Split And Dividend Increase Highlight Confidence A |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race |
| 2026-05-14 | Industry | 🟢 +1 | 0.84 | Finnhub | Is KLA Becoming the Biggest Beneficiary of AI Semiconductor  |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Here's How Much You Would Have Made Owning KLA Stock In The  |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Why MACOM (MTSI) Is Up 11.3% After Strong Q2 Results And Higher Q3 Rev
- 🟢 [Earnings|w1.64] MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Growth, Guida
- 🟢 [Analyst Action|w1.3] Northland Raises its Price Target on MACOM Technology (MTSI) to $375

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] MACOM Technology Solutions: Strong Growth Is Not Worth It At Any Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | M/A-Com (MTSI) is a Great Momentum Stock: Should You Buy? |
| 2026-05-15 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Why MACOM (MTSI) Is Up 11.3% After Strong Q2 Results And Hig |
| 2026-05-14 | Industry | 🔴 -1 | 0.84 | Finnhub | MACOM Technology Solutions: Strong Growth Is Not Worth It At |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Don't Overlook M/A-Com (MTSI) International Revenue Trends W |
| 2026-05-12 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Gro |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.3 | Yahoo Fina | Northland Raises its Price Target on MACOM Technology (MTSI) |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Finnhub | MACOM Technology: A Showcase Of AI Momentum |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Scotiabank Maintains Sector Outperform on Wheaton Precious Metals, Rai
- 🟢 [Earnings|w2.27] Wheaton Precious Metals: Record Financial Performance Supports Buy The
- 🟢 [Earnings|w1.64] WPM Q1 Earnings Top Estimates on Higher Prices, Shares Gain 7%

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.02] Wheaton Precious Metals (WPM) Price Target Decreased by 29.01% to 137.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | 🟢 +1 | 1.19 | Finnhub | Wheaton Precious Metals Corp (NYSE:WPM): An Affordable Growt |
| 2026-05-15 | Analyst Action | 🔴 -1 | 3.02 | Finnhub | Wheaton Precious Metals (WPM) Price Target Decreased by 29.0 |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | GLNCY vs. WPM: Which Stock Should Value Investors Buy Now? |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Scotiabank Maintains Sector Outperform on Wheaton Precious M |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Wheaton Precious Metals (WPM): Best Canadian Gold Stocks to  |
| 2026-05-13 | Earnings | 🟢 +1 | 2.27 | Finnhub | Wheaton Precious Metals: Record Financial Performance Suppor |
| 2026-05-12 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | WPM Q1 Earnings Top Estimates on Higher Prices, Shares Gain  |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 23 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.16] Cboe Global Markets declares $0.72 dividend
- 🟢 [Buyback|w2.16] Cboe Global Markets Declares Second-Quarter 2026 Dividend
- 🟢 [Analyst Action|w1.04] CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | CBOE Global (CBOE) is a Top-Ranked Momentum Stock: Should Yo |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Light AI reports Financial Results for Three Months ended Ma |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Onco-Innovations Strengthens Quality Testing for Lead PNKP I |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Abaxx Technologies Inc. to Begin Trading on Toronto Stock Ex |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Leverage Shares by Themes Follows Cerebras Systems IPO with  |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Abaxx Provides Corporate Milestone Update |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Base Carbon Reports First-Quarter 2026 Operating and Financi |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | PowerBank Announces Third Quarter Results |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 5.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.44] Analyst Predicts Nvidia Stock Should Be 42% Higher
- 🟢 [Analyst Action|w1.22] 5-star analyst resets Nvidia stock price target ahead of earnings
- 🟢 [Industry|w1.2] Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And Expanded N

**📉 Bearish Factors:**
- 🔴 [Policy|w3.57] Trump Clears Nvidia H200 Sales To Alibaba, Tencent And 8 Others, But B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Analyst Predicts Nvidia Stock Should Be 42% Higher |
| 2026-05-17 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And  |
| 2026-05-16 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | 5-star analyst resets Nvidia stock price target ahead of ear |
| 2026-05-16 | Policy | 🔴 -1 | 3.57 | Finnhub | Trump Clears Nvidia H200 Sales To Alibaba, Tencent And 8 Oth |
| 2026-05-16 | Earnings | ⚪  0 | 1.55 | Finnhub | Nvidia Reports Earnings on May 20. Here's the One Number Tha |
| 2026-05-16 | Industry | 🟢 +1 | 1.19 | Finnhub | The Staggering Number Jensen Huang Just Revealed Changes Eve |
| 2026-05-15 | Industry | 🟢 +1 | 0.72 | Seeking Al | Soros Fund takes new stake in Talkspace, ups Nvidia and Warn |
| 2026-05-15 | Industry | 🟢 +1 | 0.72 | Seeking Al | Nvidia: China Could Bring Up To $26 Billion In Revenue |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.69 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 24 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Johnson Controls completes acquisition of Alloy Enterprises
- 🟢 [Earnings|w1.64] Johnson Controls International Q2 Earnings Call Highlights
- 🟢 [Analyst Action|w0.6] Johnson Controls International (JCI) Price Target Increased to $170 fr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | M&A | 🟢 +1 | 2.45 | Finnhub | Johnson Controls completes acquisition of Alloy Enterprises |
| 2026-05-12 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Johnson Controls International (JCI) Price Target Increased  |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At Johnson Controls International (JCI) Valuation Aft |
| 2026-05-11 | Earnings | 🟢 +1 | 1.64 | Finnhub | Johnson Controls International Q2 Earnings Call Highlights |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 32 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.16] Stanley Druckenmiller's Duquesne initiates stake in AVGO, dumps GOOGL 
- 🟢 [Analyst Action|w1.21] AI Data Center Play And Chipmaker Broadcom Stock Named Top Pick By Ana
- 🟢 [Industry|w1.02] What Broadcom (AVGO)'s AI-Native VMware Cloud Foundation 9.1 Launch Me

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Stock Trades 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | 5-star analysts reset Broadcom stock price target |
| 2026-05-16 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | What Broadcom (AVGO)'s AI-Native VMware Cloud Foundation 9.1 |
| 2026-05-16 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Broadcom Leads Five IBD 50 Stocks Near Buy Points; Most Are  |
| 2026-05-16 | Industry | ⚪  0 | 1.19 | Finnhub | 5-star analyst resets Nvidia stock price target ahead of ear |
| 2026-05-15 | Industry | 🔴 -1 | 1.01 | Finnhub | Jim Cramer Says Buy Nvidia for Valuation, Not China Bet. Sto |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | AI Data Center Play And Chipmaker Broadcom Stock Named Top P |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Broadcom vs Microsoft. Both Are Winning the AI Race. Only On |
| 2026-05-15 | Buyback | 🟢 +1 | 2.16 | Seeking Al | Stanley Druckenmiller's Duquesne initiates stake in AVGO, du |

---

### NASDAQ:BGC

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 15 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] BGC Group enters third amended and restated credit agreement on May 15
- 🟢 [Earnings|w1.12] How Strong Q1 Results And Energy Momentum At BGC Group (BGC) Have Chan
- 🟢 [Analyst Action|w0.5] What Makes BGC Group (BGC) a New Buy Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | How Strong Q1 Results And Energy Momentum At BGC Group (BGC) |
| 2026-05-15 | Industry | 🟢 +1 | 2.52 | Finnhub | BGC Group enters third amended and restated credit agreement |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | What Makes BGC Group (BGC) a New Buy Stock |
| 2026-05-12 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | BGC Q1 Deep Dive: Energy, Market Share Gains Drive Strong Re |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Are Investors Undervaluing BGC Group, Inc. (BGC) Right Now? |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 11 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Truist Securities Maintains Buy on SM Energy, Raises Price Target to $
- 🟢 [Earnings|w1.64] Earnings Estimates Rising for SM Energy (SM): Will It Gain?
- 🟢 [Earnings|w1.4] SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Production

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.94] SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | The 5 Most Interesting Analyst Questions From SM Energy’s Q1 |
| 2026-05-14 | Earnings | 🔴 -1 | 0.94 | Yahoo Fina | SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit |
| 2026-05-13 | Industry | ⚪  0 | 0.6 | Yahoo Fina | SM Energy Surges 67% in Six Months: Is the Stock Worth Betti |
| 2026-05-13 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Are Investors Undervaluing SM Energy (SM) Right Now? |
| 2026-05-12 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Earnings Estimates Rising for SM Energy (SM): Will It Gain? |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Are Oils-Energy Stocks Lagging  SM Energy (SM) This Year? |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Yahoo Fina | SM Energy Company (SM) Is a Trending Stock: Facts to Know Be |
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Truist Securities Maintains Buy on SM Energy, Raises Price T |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.09] Equinix (EQIX) Valuation Check After Strong Q1 Results And New Kuala L
- 🟢 [Industry|w1.01] Equinix Expands Fabric Geo Zones for Sovereign Data Control
- 🟢 [Industry|w0.84] Equinix Puts Enterprises in Control of Data Sovereignty Across Hybrid 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | Equinix Expands Fabric Geo Zones for Sovereign Data Control |
| 2026-05-15 | Analyst Action | ⚪  0 | 1.21 | Finnhub | How The Investment Narrative For Equinix (EQIX) Is Shifting  |
| 2026-05-14 | Earnings | 🟢 +1 | 1.09 | Finnhub | Equinix (EQIX) Valuation Check After Strong Q1 Results And N |
| 2026-05-14 | Industry | 🟢 +1 | 0.84 | Finnhub | Equinix Puts Enterprises in Control of Data Sovereignty Acro |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Mizuho Raises PT on Equinix, Inc. (EQIX) |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Lam Research Rides AI Boom With Record Results And Margin Expansion
- 🟢 [Industry|w0.5] Lam Research (LRCX) is an Incredible Growth Stock: 3 Reasons Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Earnings | ⚪  0 | 1.55 | Finnhub | Lam Research (LRCX): Buy, Sell, or Hold Post Q1 Earnings? |
| 2026-05-15 | Earnings | 🟢 +1 | 3.28 | Finnhub | Lam Research Rides AI Boom With Record Results And Margin Ex |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Lam Research (LRCX) is an Incredible Growth Stock: 3 Reasons |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.5 | Finnhub | Is It Worth Investing in Lam Research (LRCX) Based on Wall S |

---

### NYSE:TRNO

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 4 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Terreno Realty Corporation: This Coastal Industrial REIT Is A Buy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Terreno Realty Corporation: This Coastal Industrial REIT Is  |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Applied Digital (APLD) Stock Continues To Rise As Company Gets Loan Fo
- 🟢 [M&A|w1.76] Applied Digital (APLD) Is Up 25.1% After $7.5 Billion AI Deal And New 
- 🟢 [Analyst Action|w1.21] Needham Maintains Buy on Applied Digital, Raises Price Target to $51

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.21] Buy Core Scientific Over Applied Digital

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🔴 -1 | 1.21 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Needham Maintains Buy on Applied Digital, Raises Price Targe |
| 2026-05-14 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Should You Hold APLD at 16.9x P/S? 3 Reasons Despite the Pre |
| 2026-05-14 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Applied Digital (APLD) Stock Continues To Rise As Company Ge |
| 2026-05-12 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Applied Digital (APLD) Is Up 25.1% After $7.5 Billion AI Dea |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Investment in ChronoScale Unlock Additional Value for AP |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 12 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.9] Yindjibarndi Energy reaches financial close on Jinbi Solar project, si
- 🟢 [Industry|w0.86] Itafos, Rio Tinto Amend Sulfuric Acid Contract
- 🟢 [Industry|w0.86] Rio Tinto, Itafos Amend Sulfuric Acid Supply Contract Through 2029

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 0.86 | Yahoo Fina | A Look At Rio Tinto Group’s Valuation After Recent Share Pri |
| 2026-05-15 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Itafos, Rio Tinto Amend Sulfuric Acid Contract |
| 2026-05-15 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Rio Tinto, Itafos Amend Sulfuric Acid Supply Contract Throug |
| 2026-05-14 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Itafos and Rio Tinto Amend Sulfuric Acid Contract to Further |
| 2026-05-14 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Rio Tinto appoints new Chief Legal Officer |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Finnhub | Rio Tinto Group (RIO) Presents at Bank of America Global Met |
| 2026-05-11 | Industry | 🟢 +1 | 0.9 | Seeking Al | Yindjibarndi Energy reaches financial close on Jinbi Solar p |

---

### NASDAQ:POWL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 26 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Powell Industries (POWL) Price Target Increased to $360 by JPMorgan
- 🟢 [Industry|w0.59] Is Powell Industries' Diversification Efforts Gaining Traction?
- 🟢 [Industry|w0.5] Powell Industries (POWL) Rallied on Robust Momentum in Orders and Back

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | ⚪  0 | 1.01 | Finnhub | Powell Rises 52.3% in Three Months: Should You Buy the Stock |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Powell Industries (POWL) Rallied on Robust Momentum in Order |
| 2026-05-14 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Powell Industries (POWL) Valuation Check After Record AI Dat |
| 2026-05-14 | Industry | ⚪  0 | 0.84 | Finnhub | Powell Industries: +164% Since December, Now A Fully-Priced  |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | How Powell Industries (POWL) Became a Direct Play on AI’s Po |
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | Powell Industries (POWL) Price Target Increased to $360 by J |
| 2026-05-12 | Industry | 🟢 +1 | 0.59 | Finnhub | Is Powell Industries' Diversification Efforts Gaining Tracti |
| 2026-05-11 | Earnings | ⚪  0 | 1.64 | Finnhub | Powell Industries Q2 Review: Still A Long Growth Runway, But |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 34 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.98] ASML in pact with India’s Tata for $11B semiconductor manufacturing si
- 🟢 [Industry|w2.52] Appaloosa Management Decreases Stake In Whirlpool Corp By 50% To 1,950

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] Appaloosa Management Sold Entire Stake In American Airlines Group; ASM

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Apple Intel Foundry Link Puts ASML Growth And Valuation In F |
| 2026-05-16 | M&A | 🟢 +1 | 2.98 | Seeking Al | ASML in pact with India’s Tata for $11B semiconductor manufa |
| 2026-05-15 | Industry | 🔴 -1 | 2.52 | Finnhub | Appaloosa Management Sold Entire Stake In American Airlines  |
| 2026-05-15 | Industry | 🟢 +1 | 2.52 | Finnhub | Appaloosa Management Decreases Stake In Whirlpool Corp By 50 |
| 2026-05-14 | Industry | ⚪  0 | 0.84 | Finnhub | Chip Stocks Broadly Rising |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 32 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Analog Devices Climbs 57% YTD: Time to Buy, Sell or Hold the Stock?
- 🟢 [Industry|w1.01] 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone
- 🟢 [Industry|w0.5] Analog Devices (ADI): The Best Electric Vehicle Supply Chain Stock to 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Ahead of Analog Devices (ADI) Q2 Earnings: Get Ready With Wa |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Reasons to Like ADI (and 1 Not So Much) |
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | Analog Devices Climbs 57% YTD: Time to Buy, Sell or Hold the |
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | 4 Tech Stocks to Buy as S&P 500 Closes Above 7,500 Milestone |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Analog Devices (ADI): The Best Electric Vehicle Supply Chain |
| 2026-05-13 | Industry | ⚪  0 | 0.7 | Finnhub | Assessing Analog Devices (ADI) Valuation After Strong Recent |

---

### NYSE:LAR

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.48 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Lithium Argentina Gets Large Investment Incentive Regime Approval To E
- 🟢 [Analyst Action|w1.21] Scotiabank Maintains Sector Outperform on Lithium Argentina, Raises Pr
- 🟢 [Earnings|w0.66] Lithium Argentina AG (LAR) Q1 2026 Earnings Call Highlights: Record Pr

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.91] Lithium Argentina Q1 EPS $0.05 Misses $0.07 Estimate

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Scotiabank Maintains Sector Outperform on Lithium Argentina, |
| 2026-05-14 | Policy | 🟢 +1 | 2.52 | Finnhub | Lithium Argentina Gets Large Investment Incentive Regime App |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Seeking Al | Stocks to watch on Thursday after hours: FIG, XBP, LAR |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Lithium Argentina (TSX:LAR) Valuation After Strong |
| 2026-05-12 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | Lithium Argentina AG (LAR) Q1 2026 Earnings Call Highlights: |
| 2026-05-12 | Earnings | ⚪  0 | 0.5 | Finnhub | Lithium Argentina AG (LAR:CA) Q1 2026 Earnings Call Transcri |
| 2026-05-12 | Earnings | 🔴 -1 | 1.91 | Finnhub | Lithium Argentina Q1 EPS $0.05 Misses $0.07 Estimate |

---

## 🟡 Cautious Long (2)

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.21 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Morgan Stanley Raises Vertiv (VRT) Target by $65
- 🟢 [Analyst Action|w3.57] Loop Capital Initiates Coverage of Vertiv Holdings (VRT) with Buy Reco
- 🟢 [Analyst Action|w3.02] B of A Securities Maintains Buy on Vertiv Holdings, Raises Price Targe

**📉 Bearish Factors:**
- 🔴 [M&A|w1.66] Vertiv Urges Rejection Of Mini Tender As Valuation Looks Stretched
- 🔴 [M&A|w1.41] Vertiv Holdings Recommends Shareholders Reject the Mini-Tender Offer b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | M&A | 🔴 -1 | 1.66 | Finnhub | Vertiv Urges Rejection Of Mini Tender As Valuation Looks Str |
| 2026-05-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Vertiv Holdings Co (NYSE:VRT): A Perfect Fit for the Little  |
| 2026-05-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Morgan Stanley Raises Vertiv (VRT) Target by $65 |
| 2026-05-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Loop Capital Initiates Coverage of Vertiv Holdings (VRT) wit |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | VRT vs. APH: Which AI Infrastructure Stock Is the Smarter Bu |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | B of A Securities Maintains Buy on Vertiv Holdings, Raises P |
| 2026-05-15 | M&A | 🔴 -1 | 1.41 | Finnhub | Vertiv Holdings Recommends Shareholders Reject the Mini-Tend |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Is It Too Late To Consider Vertiv Holdings Co (VRT) After It |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 2 / 37 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Black Swan|w3.15] Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win
- 🟢 [Industry|w0.5] Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 2026 Outlook

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Black Swan | 🟢 +1 | 3.15 | Finnhub | Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 20 |

---

## ⚠️ Overheated (8)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 18.77 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] A Look At MasTec (MTZ) Valuation After Strong Earnings Backlog And AI 
- 🟢 [Earnings|w2.73] MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up to Demand?
- 🟢 [Analyst Action|w2.52] MasTec (MTZ) Price Target Increased by 23.80% to 465.47

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | 🟢 +1 | 1.19 | Finnhub | MasTec Inc (MTZ): Surging Blacklog Brightens Stock Outlook |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day - Slideshow |
| 2026-05-14 | Earnings | 🟢 +1 | 2.73 | Finnhub | A Look At MasTec (MTZ) Valuation After Strong Earnings Backl |
| 2026-05-14 | Earnings | 🟢 +1 | 2.73 | Finnhub | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | MasTec (MTZ) Price Target Increased by 23.80% to 465.47 |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Guggenheim Upgrades MasTec (MTZ) |
| 2026-05-13 | Buyback | 🟢 +1 | 2.1 | Finnhub | Billionaire Investor Quietly Loads Up On Construction Stocks |
| 2026-05-13 | Industry | 🟢 +1 | 0.7 | Finnhub | Why MasTec (MTZ) Is Leveraged to the Grid Expansion Behind A |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 11.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Hewlett Packard Enterprise Resets China Exposure And Rethinks Global P
- 🟢 [M&A|w1.21] Cohesity Expands Strategic Alliance with HPE to Deliver Industry-Leadi
- 🟢 [Analyst Action|w1.21] JPMorgan Just Hiked Hewlett Packard Enterprise Price Target to $37: Me

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | M&A | 🟢 +1 | 1.21 | Yahoo Fina | Cohesity Expands Strategic Alliance with HPE to Deliver Indu |
| 2026-05-15 | M&A | 🟢 +1 | 3.53 | Finnhub | Hewlett Packard Enterprise Resets China Exposure And Rethink |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | JPMorgan Just Hiked Hewlett Packard Enterprise Price Target  |
| 2026-05-14 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Hewlett Packard Enterprise (HPE) Unveils Fourth Generation H |
| 2026-05-14 | M&A | 🟢 +1 | 1.01 | Yahoo Fina | Ingram Micro Named Global Distributor for HPE, Earns Strateg |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Citigroup Maintains Buy on Hewlett Packard, Raises Price Tar |
| 2026-05-14 | M&A | 🟢 +1 | 1.18 | Finnhub | TD SYNNEX Selected as a HPE Global Distribution Partner |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Hewlett Packard Enterprise Stock Surges. How Cisco Is Giving |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Kioxia and Dell Technologies First to Deliver High-Density Server with
- 🟢 [Analyst Action|w1.04] JPMorgan Hikes Dell Price Target to $280: Memory Concerns Fade as AI S
- 🟢 [Analyst Action|w1.04] JPMorgan Adjusts Price Target on Dell Technologies to $280 From $205, 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Dell Stock Just Had Its Best Week Since 2024. The Odds of An |
| 2026-05-16 | M&A | 🟢 +1 | 0.71 | Yahoo Fina | Virtana Deal Highlights Dell AI Factory Adoption And Investo |
| 2026-05-16 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Notable analyst calls this week: Dell, J&amp;J and AMD stock |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | JPMorgan Hikes Dell Price Target to $280: Memory Concerns Fa |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | This Will Be Dell’s Stock Price in 2027 |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Here is What to Know Beyond Why Dell Technologies Inc. (DELL |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | JPMorgan Adjusts Price Target on Dell Technologies to $280 F |
| 2026-05-15 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Kioxia and Dell Technologies First to Deliver High-Density S |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 34 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Rocket Lab Stock Is Climbing Today: What's Happening?
- 🟢 [Analyst Action|w2.1] Why Is Rocket Lab Stock Surging On Wednesday?
- 🟢 [Earnings|w1.91] Why Is Rocket Lab Stock Falling On Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Earnings | 🟢 +1 | 2.73 | Finnhub | Rocket Lab Stock Is Climbing Today: What's Happening? |
| 2026-05-13 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Why Is Rocket Lab Stock Surging On Wednesday? |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Rocket Lab: The Stock Is More Expensive Now, But I've Still  |
| 2026-05-12 | Industry | 🟢 +1 | 0.59 | Finnhub | Rocket Lab's Rally Changes Everything For Investors |
| 2026-05-12 | Earnings | 🟢 +1 | 1.91 | Finnhub | Why Is Rocket Lab Stock Falling On Tuesday? |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Stock Of The Day: Did Rocket Lab Break Out Again? |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.4 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Can Monolithic Power's Improved Automotive Solutions Drive Growth?
- 🟢 [Earnings|w1.95] Monolithic Power Systems (MPWR) Surged on Robust Quarterly Results
- 🟢 [Industry|w1.01] Watch How Institutions Push Monolithic Power Systems Higher

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | Watch How Institutions Push Monolithic Power Systems Higher |
| 2026-05-15 | Industry | 🟢 +1 | 1.01 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | ⚪  0 | 1.01 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Earnings | 🟢 +1 | 2.73 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-13 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-13 | Industry | 🟢 +1 | 0.7 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-12 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] A Look At Eaton (ETN) Valuation After Raised 2026 Guidance And AI Data
- 🟢 [Industry|w1.75] Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrastructure Ne
- 🟢 [M&A|w1.41] Eaton Refocuses On Electrical And Aerospace As AI Power Bet Grows

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | M&A | 🟢 +1 | 1.41 | Finnhub | Eaton Refocuses On Electrical And Aerospace As AI Power Bet  |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-05-13 | Industry | 🟢 +1 | 0.7 | Finnhub | Why Eaton (ETN) Is Expanding Switchgear Capacity for the AI  |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Eaton Corporation plc (ETN) A Good Stock To Buy Now? |
| 2026-05-13 | Industry | 🟢 +1 | 1.75 | Finnhub | Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrast |
| 2026-05-12 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Ra |
| 2026-05-12 | Earnings | 🟢 +1 | 1.91 | Finnhub | A Look At Eaton (ETN) Valuation After Raised 2026 Guidance A |
| 2026-05-12 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benef |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 8.12 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Applied Materials Q2 Earnings Beat Estimates, Revenues Increase Y/Y
- 🟢 [Analyst Action|w1.21] UBS Maintains Buy on Applied Materials, Raises Price Target to $515
- 🟢 [Analyst Action|w1.21] Eight Firms Just Piled Into Applied Materials: Wall Street Hikes Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Applied Materials Earnings: What To Look For From AMAT |
| 2026-05-16 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Applied Materials: AI Chip Equipment Boom Looks Priced For P |
| 2026-05-15 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Applied Materials AMAT Q2 2026 Earnings Transcript |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | UBS Maintains Buy on Applied Materials, Raises Price Target  |
| 2026-05-15 | Earnings | 🟢 +1 | 3.28 | Finnhub | Applied Materials Q2 Earnings Beat Estimates, Revenues Incre |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Eight Firms Just Piled Into Applied Materials: Wall Street H |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Applied Materials Visibility Extends Into 2027 Amid Strong D |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Applied Materials Seen Outperforming Wafer Fab Equipment Ind |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.15 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 34 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Quanta Services (PWR) Valuation Check After Raised 2026 Profit Outlook
- 🟢 [Analyst Action|w2.52] Quanta Services (PWR) Price Target Increased by 26.45% to 783.17
- 🟢 [Industry|w0.72] Quanta Services (PWR) Benefits from Energy-Related Infrastructure Grow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Quanta Services (PWR) Valuation Check After Raised 2026 Prof |
| 2026-05-14 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Quanta Services (PWR) Benefits from Energy-Related Infrastru |
| 2026-05-14 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Quanta Services (PWR) Price Target Increased by 26.45% to 78 |
| 2026-05-13 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | How Quanta Services (PWR) Is Riding the Utility Buildout Beh |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Reasons Investors Love Quanta (PWR) |
| 2026-05-12 | Industry | ⚪  0 | 0.59 | Finnhub | Can Quanta's Mission-Critical Strategy Outrun Economic Slowd |

---

## ⚠️ Risk Pattern (2)

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.21 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Morgan Stanley Raises Vertiv (VRT) Target by $65
- 🟢 [Analyst Action|w3.57] Loop Capital Initiates Coverage of Vertiv Holdings (VRT) with Buy Reco
- 🟢 [Analyst Action|w3.02] B of A Securities Maintains Buy on Vertiv Holdings, Raises Price Targe

**📉 Bearish Factors:**
- 🔴 [M&A|w1.66] Vertiv Urges Rejection Of Mini Tender As Valuation Looks Stretched
- 🔴 [M&A|w1.41] Vertiv Holdings Recommends Shareholders Reject the Mini-Tender Offer b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | M&A | 🔴 -1 | 1.66 | Finnhub | Vertiv Urges Rejection Of Mini Tender As Valuation Looks Str |
| 2026-05-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Vertiv Holdings Co (NYSE:VRT): A Perfect Fit for the Little  |
| 2026-05-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Morgan Stanley Raises Vertiv (VRT) Target by $65 |
| 2026-05-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Loop Capital Initiates Coverage of Vertiv Holdings (VRT) wit |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | VRT vs. APH: Which AI Infrastructure Stock Is the Smarter Bu |
| 2026-05-15 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | B of A Securities Maintains Buy on Vertiv Holdings, Raises P |
| 2026-05-15 | M&A | 🔴 -1 | 1.41 | Finnhub | Vertiv Holdings Recommends Shareholders Reject the Mini-Tend |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Is It Too Late To Consider Vertiv Holdings Co (VRT) After It |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 2 / 37 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Black Swan|w3.15] Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win
- 🟢 [Industry|w0.5] Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 2026 Outlook

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Black Swan | 🟢 +1 | 3.15 | Finnhub | Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win |
| 2026-05-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Nokia A Buy? Analyzing The Lockheed Martin Deal And Q4 20 |

---

## ⚪ Watch / Neutral (34)

### NYSE:CIEN
- Score: 59/100 | raw: 2.05 | News: 2 kept / 36 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 59/100 | raw: 2.18 | News: 9 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 57/100 | raw: 1.71 | News: 4 kept / 36 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 56/100 | raw: 1.9 | News: 17 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 56/100 | raw: 1.54 | News: 2 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 56/100 | raw: 1.44 | News: 4 kept / 34 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GLW
- Score: 56/100 | raw: 1.34 | News: 3 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 55/100 | raw: 1.08 | News: 2 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 55/100 | raw: 1.26 | News: 4 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 55/100 | raw: 1.09 | News: 2 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 54/100 | raw: 1.04 | News: 4 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 54/100 | raw: 0.84 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 54/100 | raw: 0.84 | News: 1 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 53/100 | raw: 0.66 | News: 2 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 52/100 | raw: 0.5 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 52/100 | raw: 0.59 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 52/100 | raw: 0.59 | News: 2 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 51/100 | raw: 0.17 | News: 3 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 0 kept / 24 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 15 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 1 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 18 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 14 dropped | No relevant news in window

### NASDAQ:MU
- Score: 49/100 | raw: -0.19 | News: 3 kept / 37 dropped | No clear directional bias — stay flat

### NYSE:LTC
- Score: 48/100 | raw: -0.6 | News: 4 kept / 22 dropped | No clear directional bias — stay flat

### NYSE:JOBY
- Score: 46/100 | raw: -1.01 | News: 2 kept / 11 dropped | No clear directional bias — stay flat

### NASDAQ:INTC
- Score: 45/100 | raw: -1.11 | News: 11 kept / 27 dropped | No clear directional bias — stay flat

### NASDAQ:GEN
- Score: 40/100 | raw: -2.32 | News: 2 kept / 13 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-17T01:43:28.902Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*