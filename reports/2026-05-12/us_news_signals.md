# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-12  |  **News Window:** 2026-05-05 ~ 2026-05-12
**Stock Pool:** us_selected.txt (41)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:COHR** | **95** | 10.85 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/31 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMAT** | **90** | 9.63 | 🟢 Long (Strong) | Momentum / Hold | High | 5/31 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:SPNT** | **88** | 9.05 | 🟢 Long (Strong) | Momentum / Hold | High | 7/20 | - |
| 4 | **NYSE:ETN** | **87** | 12.5 | 🟢 Long (Strong) | Momentum / Hold | High | 14/24 | - |
| 5 | **NASDAQ:KLAC** | **86** | 8.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/30 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MTSI** | **86** | 25.25 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 18/17 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:MTZ** | **85** | 8.36 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/30 | Overheated Sentiment (one-sided bullish) |
| 8 | **NASDAQ:RKLB** | **77** | 10.61 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/31 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:GEN** | **73** | 9.68 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/27 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:SM** | **73** | 12.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/12 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:HPE** | **70** | 4.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/31 | - |
| 12 | **NASDAQ:AMD** | **69** | 7.18 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/26 | - |
| 13 | **NYSE:MS** | **69** | 4.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/32 | - |
| 14 | **NASDAQ:INTC** | **67** | 7.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/25 | - |
| 15 | **NASDAQ:INCY** | **66** | 3.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/27 | - |
| 16 | **NYSE:TT** | **65** | 3.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/33 | - |
| 17 | **NASDAQ:IREN** | **63** | 16.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 27/13 | Sentiment Strengthening UP (trend) |
| 18 | **CBOE:CBOE** | **62** | 4.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/25 | - |
| 19 | **NASDAQ:CPRX** | **62** | 2.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/31 | - |
| 20 | **NASDAQ:CRDO** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/37 | - |
| 21 | **NYSE:VRT** | **61** | 2.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/35 | - |
| 22 | **NYSE:DELL** | **60** | 7.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/22 | Sentiment Strengthening UP (trend) |
| 23 | **NASDAQ:ADEA** | **60** | 2.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/17 | - |
| 24 | **NASDAQ:APLD** | **60** | 2.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/23 | - |
| 25 | **NASDAQ:EQIX** | **60** | 2.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/25 | - |
| 26 | **NASDAQ:ASML** | **59** | 2.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/33 | - |
| 27 | **NYSE:TRNO** | **59** | 2.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 28 | **NASDAQ:SANM** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 29 | **NASDAQ:PRDO** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/21 | - |
| 30 | **NASDAQ:MU** | **55** | 1.12 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/39 | - |
| 31 | **NASDAQ:ADI** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/31 | - |
| 32 | **NYSE:AIR** | **55** | 1.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/17 | - |
| 33 | **NYSE:CIEN** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/33 | - |
| 34 | **NYSE:PFS** | **51** | 0.33 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 3/20 | - |
| 35 | **NASDAQ:VSAT** | **51** | 0.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/20 | - |
| 36 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 37 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/22 | - |
| 38 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 39 | **NYSE:JOBY** | **44** | -2.17 | ⚪ No Trade (Neutral) | Watch | Low | 14/22 | - |
| 40 | **NASDAQ:NVDA** | **44** | -2.61 | ⚪ No Trade (Neutral) | Watch | Low | 14/25 | - |
| 41 | **NYSE:JHG** | **35** | -3.55 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/18 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.63 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 31 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] AMAT to Post Q2 Earnings: Time to Buy, Sell or Hold the Stock?
- 🟢 [Industry|w2.52] Applied Materials TSMC Alliance Deepens AI Chip Tools And Growth Story
- 🟢 [Industry|w2.52] Applied Materials (AMAT) and TSMC Expand Partnership to Advance Next-G

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Earnings | 🟢 +1 | 3.28 | Finnhub | Applied Materials makes unexpected AI move as demand explode |
| 2026-05-11 | Industry | 🟢 +1 | 2.52 | Finnhub | Applied Materials TSMC Alliance Deepens AI Chip Tools And Gr |
| 2026-05-11 | Earnings | 🟢 +1 | 1.31 | Finnhub | AMAT to Post Q2 Earnings: Time to Buy, Sell or Hold the Stoc |
| 2026-05-11 | Industry | 🟢 +1 | 2.52 | Finnhub | Applied Materials (AMAT) and TSMC Expand Partnership to Adva |
| 2026-05-11 | Industry | ⚪  0 | 1.01 | Finnhub | Curious about Applied Materials (AMAT) Q2 Performance? Explo |

---

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.05 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] SIRIUSPOINT LTD (NYSE:SPNT) Scores High Growth Momentum and Technical 
- 🟢 [Earnings|w1.95] SiriusPoint Ltd (SPNT) Q1 2026 Earnings Call Highlights: Strong Underw
- 🟢 [Earnings|w1.64] SiriusPoint (SPNT) Q1 Earnings Beat Estimates

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.59] Will Stronger Underwriting And Rating Upgrades Reshape SiriusPoint's (

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Analyst Action | 🔴 -1 | 1.04 | Yahoo Fina | Will Stronger Underwriting And Rating Upgrades Reshape Siriu |
| 2026-05-11 | Earnings | 🟢 +1 | 1.31 | Finnhub | SIRIUSPOINT LTD (NYSE:SPNT) Scores High Growth Momentum and  |
| 2026-05-09 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | SiriusPoint Ltd (SPNT) Q1 2026 Earnings Call Highlights: Str |
| 2026-05-08 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | SiriusPoint (SPNT) Q1 Earnings Beat Estimates |
| 2026-05-08 | Earnings | 🟢 +1 | 1.91 | Finnhub | SiriusPoint Ltd. (SPNT) Q1 2026 Earnings Call Transcript |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | SiriusPoint Ltd (NYSE:SPNT) Beats Q1 Estimates as Underwriti |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | SiriusPoint Q1 EPS $0.82 Beats $0.71 Estimate, Sales $774.60 |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 12.5 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Eaton (ETN) Is Down 7.8% After Raising 2026 Guidance Amid Margin Press
- 🟢 [Earnings|w1.64] Eaton’s Record Quarter And Deals Reshape Focus On Electrification Grow
- 🟢 [Industry|w1.47] Jim Cramer on Eaton: “Just Go Buy That One”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benef |
| 2026-05-08 | Industry | 🟢 +1 | 0.59 | Finnhub | Jim Cramer on Eaton: “Just Go Buy That One” |
| 2026-05-08 | Earnings | 🔴 -1 | 1.91 | Finnhub | Eaton (ETN) Is Down 7.8% After Raising 2026 Guidance Amid Ma |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | Eaton’s Record Quarter And Deals Reshape Focus On Electrific |
| 2026-05-06 | Earnings | 🟢 +1 | 0.54 | Finnhub | Eaton Datacenter Orders Surge, Growth Outlook Strengthens In |
| 2026-05-06 | Earnings | 🟢 +1 | 1.36 | Finnhub | Eaton: The Report Is Bullish, The Market Is Right |
| 2026-05-06 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | JP Morgan Maintains Overweight on Eaton Corp, Raises Price T |
| 2026-05-06 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Citigroup Maintains Buy on Eaton Corp, Raises Price Target t |

---

## 🟢 Mid Long (16)

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 12.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Susquehanna Maintains Neutral on SM Energy, Raises Price Target to $31
- 🟢 [Earnings|w2.81] SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Production
- 🟢 [Earnings|w1.95] Assessing SM Energy (SM) Valuation After Merger Synergies Earnings Bea

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.17] SM Energy Q1 Adjusted Earnings Fall, Revenue Rises

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Producti |
| 2026-05-11 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Susquehanna Maintains Neutral on SM Energy, Raises Price Tar |
| 2026-05-10 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is It Too Late To Consider SM Energy (SM) After Its Strong Y |
| 2026-05-09 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Assessing SM Energy (SM) Valuation After Merger Synergies Ea |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Wall Street Analysts Believe SM Energy (SM) Could Rally 28.7 |
| 2026-05-07 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | SM Energy Company Q1 2026 Earnings Call Summary |
| 2026-05-07 | Earnings | ⚪  0 | 1.64 | Finnhub | SM Energy Company (SM) Q1 2026 Earnings Call Transcript |
| 2026-05-07 | Earnings | ⚪  0 | 1.64 | Finnhub | Transcript : SM Energy Company, Q1 2026 Earnings Call, May 0 |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know
- 🟢 [Industry|w2.16] Here's Why Hewlett Packard Enterprise (HPE) is a Strong Growth Stock
- 🟢 [Earnings|w1.64] Hewlett Packard (HPE) Expands ProLiant Edge Portfolio for AI Inferenci

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 1.19 | Finnhub | Hewlett Packard Enterprise Doubles Down On AI Networking And |
| 2026-05-11 | Industry | 🟢 +1 | 0.43 | Yahoo Fina | Here's Why Hewlett Packard Enterprise (HPE) is a Strong Grow |
| 2026-05-11 | Industry | ⚪  0 | 0.86 | Yahoo Fina | HPE Introduces Industry-First 64 TB Memory Server for SAP Cl |
| 2026-05-11 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | HPE to Present Live Audio Webcast of Fiscal 2026 Second Quar |
| 2026-05-11 | Earnings | ⚪  0 | 1.31 | Finnhub | Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know |
| 2026-05-09 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Is It Too Late To Consider Hewlett Packard Enterprise (HPE)  |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | Hewlett Packard (HPE) Expands ProLiant Edge Portfolio for AI |
| 2026-05-06 | Industry | ⚪  0 | 1.05 | Finnhub | HPE Moves Self-Driving Networks From Vision to Reality With  |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 7.18 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 26 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] What AMD's Earnings Beat Could Mean for Intel
- 🟢 [Analyst Action|w2.16] AMD: ~110% Up And Nowhere Near Done (Rating Upgrade)
- 🟢 [Industry|w0.9] AMD: Here Is The Breakout Quarter

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.08] AMD Has Flipped Nvidia: Time To Sell (Rating Downgrade)
- 🔴 [Industry|w0.9] AMD Goes Vertical, And My Warning Bells Go Off

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why AMD's AI roadmap is 'very competitive' with Nvidia's |
| 2026-05-12 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | What AMD's Earnings Beat Could Mean for Intel |
| 2026-05-11 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | AMD MI450 AI Deals With Meta And OpenAI Test Rich Valuation |
| 2026-05-11 | Industry | ⚪  0 | 1.01 | Finnhub | AMD Rises on Server CPU Supercycle Call |
| 2026-05-11 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | AMD: ~110% Up And Nowhere Near Done (Rating Upgrade) |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Seeking Al | AMD, Intel, Qualcomm likely to benefit from server CPU super |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Seeking Al | AMD: $600 Target Appears Too Low |
| 2026-05-07 | Analyst Action | 🔴 -1 | 1.08 | Seeking Al | AMD Has Flipped Nvidia: Time To Sell (Rating Downgrade) |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 32 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Morgan Stanley (NYSE:MS) Scores Perfect Technical Rating as Breakout S
- 🟢 [Industry|w2.52] Will Lower Crypto Fees Help Morgan Stanley Win Retail Investors?
- 🟢 [Industry|w2.16] Morgan Stanley (MS) is a Top Dividend Stock Right Now: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 1.19 | Finnhub | Morgan Stanley (NYSE:MS) Scores Perfect Technical Rating as  |
| 2026-05-11 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Morgan Stanley (MS) is a Top Dividend Stock Right Now: Shoul |
| 2026-05-11 | Industry | 🟢 +1 | 2.52 | Finnhub | Will Lower Crypto Fees Help Morgan Stanley Win Retail Invest |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 7.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] What AMD's Earnings Beat Could Mean for Intel
- 🟢 [Earnings|w3.87] These Stocks Are Today’s Movers: Intel, Micron, GitLab, ZoomInfo, AST 
- 🟢 [Analyst Action|w3.06] Deutsche Bank Raises Intel Price Target to $100 From $63, Maintains Ho

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Tech Stocks Fall as Chip Rally Halts. Nasdaq Drops From Record High.
- 🔴 [Industry|w2.98] Intel and Other Chip Stocks Drop After Hitting Records
- 🔴 [Analyst Action|w1.26] Intel: Get Out Before The Hype Ends (Rating Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Deutsche Bank Raises Intel Price Target to $100 From $63, Ma |
| 2026-05-12 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Mizuho Adjusts Price Target on Intel to $124 From $100, Main |
| 2026-05-12 | Industry | ⚪  0 | 0.6 | Finnhub | Andy Jassy Just Said Something Big: Here's What It Means for |
| 2026-05-12 | Industry | 🔴 -1 | 1.19 | Finnhub | Intel and Other Chip Stocks Drop After Hitting Records |
| 2026-05-12 | Earnings | 🔴 -1 | 1.55 | Finnhub | Tech Stocks Fall as Chip Rally Halts. Nasdaq Drops From Reco |
| 2026-05-12 | Earnings | 🟢 +1 | 3.87 | Finnhub | What AMD's Earnings Beat Could Mean for Intel |
| 2026-05-12 | Earnings | 🟢 +1 | 3.87 | Finnhub | These Stocks Are Today’s Movers: Intel, Micron, GitLab, Zoom |
| 2026-05-12 | Industry | ⚪  0 | 2.98 | Finnhub | Zacks Investment Ideas feature highlights MP and Intel |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 27 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] Does Jakafi XR Approval And Pipeline Progress Change The Bull Case For

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Incyte Corporation (INCY) Highlights Sustained Efficacy of O |
| 2026-05-10 | Earnings | 🔴 -1 | 0.94 | Yahoo Fina | Incyte's (NASDAQ:INCY) Promising Earnings May Rest On Soft F |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Does Jakafi XR Approval And Pipeline Progress Change The Bul |
| 2026-05-07 | Industry | 🟢 +1 | 1.26 | Finnhub | Incyte Announces 24-Week Long-Term Data from Phase 3 TRuE-AD |
| 2026-05-06 | Industry | ⚪  0 | 0.36 | Yahoo Fina | Why Incyte (INCY) is a Top Value Stock for the Long-Term |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 33 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] Trane Technologies plc (TT) Presents at Oppenheimer 21st Annual Indust
- 🟢 [Earnings|w1.36] Trane Technologies: Setup Remains Attractive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-10 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | What Trane Technologies (TT)'s Upgraded 2026 Earnings Outloo |
| 2026-05-09 | Industry | 🟢 +1 | 0.7 | Finnhub | Trane Technologies plc (TT) Presents at Oppenheimer 21st Ann |
| 2026-05-07 | Industry | ⚪  0 | 0.22 | Yahoo Fina | JBTM or TT: Which Is the Better Value Stock Right Now? |
| 2026-05-06 | Earnings | 🟢 +1 | 0.54 | Finnhub | Trane Technologies: Setup Remains Attractive |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 16.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 27 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Macquarie Raises Price Target on Iren to $90 From $77, Keeps Outperfor
- 🟢 [Earnings|w3.28] Twilio To Rally Over 25%? Here Are 10 Top Analyst Forecasts For Monday
- 🟢 [Earnings|w3.28] Market-Moving News for May 11th

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Iren&#x2019;s stock pulls back as investors assess the steep price of 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Macquarie Raises Price Target on Iren to $90 From $77, Keeps |
| 2026-05-12 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Iren Prices Upsized $2.6 Billion Private Debt Offering; Shar |
| 2026-05-12 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Why IREN (IREN) Is Up 11.5% After Striking A US$3.4 Billion  |
| 2026-05-12 | Industry | ⚪  0 | 2.98 | Finnhub | IREN: On Track To 10X Its ARR By 2028 |
| 2026-05-12 | Industry | 🔴 -1 | 2.55 | MarketWatc | Iren&#x2019;s stock pulls back as investors assess the steep |
| 2026-05-11 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Stock Market Today, May 11: Iren Falls After $2 Billion Conv |
| 2026-05-11 | Industry | ⚪  0 | 2.16 | Yahoo Fina | IREN stock sinks after massive $2 billion convertible notes  |
| 2026-05-11 | Industry | ⚪  0 | 2.16 | Yahoo Fina | IREN Proposes $2.3 Billion Convertible Note Offering to Fuel |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 4.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Evaluating Cboe Global Markets (CBOE) After Q1 Earnings Beat And Busin
- 🟢 [Industry|w2.16] Is It Too Late To Consider Cboe Global Markets (CBOE) After A 59% One 
- 🟢 [Earnings|w1.36] Cboe Global Markets (CBOE) Is Up 13.2% After Record Q1 And Major Strat

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Abaxx Exchange Named Newcomer of the Year at 2026 Energy Risk Awards

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | ⚪  0 | 0.77 | Finnhub | Abaxx Announces First Quarter 2026 Earnings and Business Upd |
| 2026-05-11 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Cboe Hires Julie Bauer as Senior Vice President, Head of Gov |
| 2026-05-11 | Industry | 🟢 +1 | 0.43 | Yahoo Fina | Is It Too Late To Consider Cboe Global Markets (CBOE) After  |
| 2026-05-11 | Industry | ⚪  0 | 0.5 | Finnhub | Inside Ownership Index to Present at the LD Micro Invitation |
| 2026-05-11 | Buyback | ⚪  0 | 0.6 | Finnhub | OSB GROUP PLC - Transaction in Own Shares |
| 2026-05-10 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Evaluating Cboe Global Markets (CBOE) After Q1 Earnings Beat |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Best Low-Beta Stocks to Own Right Away: LQDA, CBOE, VLO & FA |
| 2026-05-08 | Industry | ⚪  0 | 1.47 | Finnhub | Onco-Innovations Progresses Toward IND Preparation as Nucro- |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Fundamental Rat
- 🟢 [Analyst Action|w1.51] Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal-Weight

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.76] Citigroup Downgrades Catalyst Pharmaceuticals to Neutral, Lowers Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Catalyst (CPRX) Q1 Earnings: Taking a Look at Key Metrics Ve |
| 2026-05-11 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Surpasses Q1 Earnings and Rev |
| 2026-05-11 | Earnings | 🟢 +1 | 1.31 | Finnhub | Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Funda |
| 2026-05-08 | Analyst Action | 🔴 -1 | 0.7 | Finnhub | Citigroup Downgrades Catalyst Pharmaceuticals to Neutral, Lo |
| 2026-05-07 | Analyst Action | 🔴 -1 | 0.6 | Finnhub | Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal- |
| 2026-05-07 | Industry | ⚪  0 | 1.26 | Finnhub | CPRX Stock Alert: Halper Sadeh LLC is Investigating Whether  |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 37 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.47] Credo Technology Repositions As AI Infrastructure Supplier With Rich V

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-09 | Earnings | ⚪  0 | 0.91 | Finnhub | Credo: How The 'King Of Copper' Is Becoming A Titan In Optic |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Why Credo (CRDO) Is Up 8.2% After AI Data Center Wins And Pa |
| 2026-05-06 | M&A | 🟢 +1 | 1.47 | Finnhub | Credo Technology Repositions As AI Infrastructure Supplier W |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 35 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Vertiv Holdings Co (NYSE:VRT) Screens as a Strong GARP Candidate

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Vertiv Holdings (VRT) Price Target Increased by Citi to $141 |
| 2026-05-12 | Earnings | 🟢 +1 | 1.55 | Finnhub | Vertiv Holdings Co (NYSE:VRT) Screens as a Strong GARP Candi |
| 2026-05-11 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Vertiv Holdings Co. (VRT) is Attracting Investor Attention:  |
| 2026-05-09 | Industry | ⚪  0 | 0.3 | Yahoo Fina | A Look At Vertiv Holdings Co (VRT) Valuation After Its Recen |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 7.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know
- 🟢 [Analyst Action|w3.06] Mizuho Adjusts Price Target on Dell Technologies to $300 From $260, Ma
- 🟢 [Analyst Action|w3.02] UBS Just Downgraded Dell After 157% Rally: Time to Cash In the Chips?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.02] Dell Stock Falls After Downgrade. AI Growth Is Already Priced In, Says
- 🔴 [Analyst Action|w2.59] Dell Technologies Shares Fall After UBS Downgrade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Mizuho Adjusts Price Target on Dell Technologies to $300 Fro |
| 2026-05-12 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Zacks Analyst Blog  Cisco, Arista Networks, Dell and Hew |
| 2026-05-11 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | UBS resets Dell stock price target ahead of earnings |
| 2026-05-11 | Analyst Action | 🔴 -1 | 1.04 | Yahoo Fina | Dell Technologies Shares Fall After UBS Downgrade |
| 2026-05-11 | Analyst Action | 🔴 -1 | 1.04 | Yahoo Fina | Dell gets downgraded by UBS as analysts see little room for  |
| 2026-05-11 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Dell Stock Is Up 99% This Year. Why UBS Says the AI Rally Is |
| 2026-05-11 | Analyst Action | ⚪  0 | 3.02 | Finnhub | UBS Downgrades Dell Technologies (DELL) |
| 2026-05-11 | Earnings | 🟢 +1 | 3.28 | Finnhub | Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know |

---

### NASDAQ:ADEA

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 17 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: Here's is
- 🟢 [Earnings|w1.64] Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO Transition 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: |
| 2026-05-11 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Is ADEIA INC (ADEA) Stock Outpacing Its Business Services Pe |
| 2026-05-08 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO T |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 23 |

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | ⚪  0 | 0.33 | Yahoo Fina | Why Is Applied Digital Corporation (APLD) Up 62.4% Since Las |
| 2026-05-06 | Industry | 🟢 +1 | 0.9 | Yahoo Fina | Applied Digital (APLD) Completes Cloud, Data Center Separati |
| 2026-05-06 | M&A | 🟢 +1 | 1.47 | Finnhub | Applied Digital Stock Hits 52-Week High - Here's Why |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 25 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Is Equinix (EQIX) a Solid Growth Stock? 3 Reasons to Think "Yes"
- 🟢 [Analyst Action|w1.51] Mizuho Maintains Outperform on Equinix, Raises Price Target to $1200
- 🟢 [Industry|w1.5] Is It Too Late To Consider Equinix (EQIX) After A 39.6% Year To Date R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Is Equinix (EQIX) a Solid Growth Stock? 3 Reasons to Think " |
| 2026-05-09 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Is It Too Late To Consider Equinix (EQIX) After A 39.6% Year |
| 2026-05-07 | Industry | 🟢 +1 | 0.43 | Yahoo Fina | Equinix (EQIX) Just Flashed Golden Cross Signal: Do You Buy? |
| 2026-05-07 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Mizuho Maintains Outperform on Equinix, Raises Price Target  |

---

## 🟡 Cautious Long (1)

### NASDAQ:GEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 9.68 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] RBC Capital Maintains Sector Perform on Gen Digital, Raises Price Targ
- 🟢 [Analyst Action|w1.76] Barclays Maintains Equal-Weight on Gen Digital, Raises Price Target to
- 🟢 [Analyst Action|w1.76] Evercore ISI Group Maintains Outperform on Gen Digital, Raises Price T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Gen Digital Inc. Q4 2026 Earnings Call Summary |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Gen Digital Q4 Earnings Call Highlights |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | RBC Capital Maintains Sector Perform on Gen Digital, Raises  |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Equal-Weight on Gen Digital, Raises Price |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Evercore ISI Group Maintains Outperform on Gen Digital, Rais |
| 2026-05-08 | Earnings | ⚪  0 | 1.91 | Finnhub | Gen Digital Inc. 2026 Q4 - Results - Earnings Call Presentat |
| 2026-05-08 | Earnings | 🟢 +1 | 1.36 | Seeking Al | Gen outlines FY27 8%-10% revenue growth and $2.85-$2.95 EPS, |
| 2026-05-08 | Earnings | ⚪  0 | 1.36 | Seeking Al | Gen Digital Inc. (GEN) Q4 2026 Earnings Call Transcript |

---

## ⚠️ Overheated (5)

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 10.85 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 31 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Coherent Stock Falls 2.7% Since In-Line Q3 Earnings & Revenue Beat
- 🟢 [Earnings|w3.28] Stifel is Bullish on Coherent Corp. (COHR)
- 🟢 [Earnings|w3.28] Artisan Mid Cap Fund Trimmed Coherent (COHR) Despite Strong Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | This Analyst Just Raised the Price Target on Coherent Stock  |
| 2026-05-11 | Earnings | 🟢 +1 | 3.28 | Finnhub | Coherent Stock Falls 2.7% Since In-Line Q3 Earnings & Revenu |
| 2026-05-11 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Optoelectronics Rips 24%, Lumentum Jumps 17%, Cohere |
| 2026-05-11 | Earnings | 🟢 +1 | 1.31 | Finnhub | Stifel is Bullish on Coherent Corp. (COHR) |
| 2026-05-11 | Earnings | 🟢 +1 | 1.31 | Finnhub | Artisan Mid Cap Fund Trimmed Coherent (COHR) Despite Strong  |
| 2026-05-10 | Earnings | 🟢 +1 | 2.73 | Finnhub | Assessing Coherent (COHR) Valuation After Record Q3 Results  |
| 2026-05-07 | Earnings | ⚪  0 | 1.17 | Seeking Al | Coherent Corp. (COHR) Q3 2026 Earnings Call Transcript |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] KLA Corporation Announces Ten-to-One Stock Split and Quarterly Cash Di
- 🟢 [Earnings|w1.64] KLA Corp (NASDAQ:KLAC) Combines Strong Fundamentals With Flawless Tech
- 🟢 [Buyback|w1.51] KLA Announces 10-For-1 Forward Stock Split, Effective June 12

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Wall Street Bulls Look Optimistic About KLA (KLAC): Should Y |
| 2026-05-08 | Buyback | ⚪  0 | 1.51 | Yahoo Fina | How Investors Are Reacting To KLA (KLAC) Stock Split, Divide |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | KLA Corporation Announces Ten-to-One Stock Split and Quarter |
| 2026-05-07 | Buyback | 🟢 +1 | 1.51 | Finnhub | KLA Announces 10-For-1 Forward Stock Split, Effective June 1 |
| 2026-05-07 | Industry | ⚪  0 | 1.26 | Finnhub | Option Spread Trade on Leading AI Stock Offers 32% Return Po |
| 2026-05-07 | Industry | 🟢 +1 | 1.26 | Finnhub | 4 High Quality Stocks with Growing Dividends |
| 2026-05-07 | Industry | 🟢 +1 | 1.26 | Finnhub | KLA (KLAC) Just Flashed Golden Cross Signal: Do You Buy? |
| 2026-05-07 | Earnings | 🟢 +1 | 1.64 | Finnhub | KLA Corp (NASDAQ:KLAC) Combines Strong Fundamentals With Fla |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 25.25 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 18 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Growth, Guida
- 🟢 [Analyst Action|w2.59] Northland Raises its Price Target on MACOM Technology (MTSI) to $375
- 🟢 [Earnings|w1.95] A Look At MACOM Technology Solutions Holdings (MTSI) Valuation After S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Gro |
| 2026-05-11 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Northland Raises its Price Target on MACOM Technology (MTSI) |
| 2026-05-11 | Earnings | ⚪  0 | 3.28 | Finnhub | MACOM Technology: A Showcase Of AI Momentum |
| 2026-05-09 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Here's What Key Metrics Tell Us About M/A-Com (MTSI) Q2 Earn |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | JP Morgan Maintains Neutral on MACOM Technology Solns, Raise |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Truist Securities Maintains Buy on MACOM Technology Solns, R |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Overweight on MACOM Technology Solns, Rai |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.36 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Cantor Fitzgerald Maintains Overweight on MasTec, Raises Price Target 
- 🟢 [Analyst Action|w1.8] Stifel Raises its Price Target on MasTec (MTZ) to $455
- 🟢 [Industry|w1.47] Jim Cramer on MasTec: “It’s Such a Great One for the Data Center”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | ⚪  0 | 1.19 | Finnhub | MasTec to Host Investor Day in New York City Today at 8:45 A |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Cantor Fitzgerald Maintains Overweight on MasTec, Raises Pri |
| 2026-05-09 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | Stifel Raises its Price Target on MasTec (MTZ) to $455 |
| 2026-05-08 | Industry | 🟢 +1 | 0.25 | Yahoo Fina | Here's Why MasTec (MTZ) is a Strong Momentum Stock |
| 2026-05-08 | Earnings | 🟢 +1 | 1.91 | Finnhub | Can MasTec's Pipeline Business Return to $3.5B in Revenues b |
| 2026-05-08 | Industry | 🟢 +1 | 1.47 | Finnhub | Jim Cramer on MasTec: “It’s Such a Great One for the Data Ce |
| 2026-05-07 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | Clear Street Raises MasTec (MTZ) Price Target, Keeps Buy Rat |
| 2026-05-07 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | MasTec (MTZ) Reports Record Q1 2026 Revenue of $3.8B Driven  |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 10.61 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 31 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Needham Maintains Buy on Rocket Lab, Raises Price Target to $120
- 🟢 [Industry|w2.16] Is It Too Late To Consider Rocket Lab (RKLB) After Its 396% One Year S
- 🟢 [Earnings|w1.91] Rocket Lab: Best Space Play For 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Is It Too Late To Consider Rocket Lab (RKLB) After Its 396%  |
| 2026-05-11 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Rocket Lab Corporation (NASDAQ:RKLB) Released Earnings Last  |
| 2026-05-11 | Industry | ⚪  0 | 2.52 | Finnhub | Stock Of The Day: Did Rocket Lab Break Out Again? |
| 2026-05-11 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Needham Maintains Buy on Rocket Lab, Raises Price Target to  |
| 2026-05-09 | Earnings | ⚪  0 | 2.27 | Finnhub | Rocket Lab Corporation (RKLB) Q1 2026 Earnings Call Transcri |
| 2026-05-09 | Industry | ⚪  0 | 1.75 | Finnhub | Rocket Lab, Super Micro Computer, eBay And More: 5 Stocks In |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | TD Cowen Maintains Buy on Rocket Lab, Raises Price Target to |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Citizens Maintains Market Outperform on Rocket Lab, Raises P |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:GEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 9.68 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] RBC Capital Maintains Sector Perform on Gen Digital, Raises Price Targ
- 🟢 [Analyst Action|w1.76] Barclays Maintains Equal-Weight on Gen Digital, Raises Price Target to
- 🟢 [Analyst Action|w1.76] Evercore ISI Group Maintains Outperform on Gen Digital, Raises Price T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Gen Digital Inc. Q4 2026 Earnings Call Summary |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Gen Digital Q4 Earnings Call Highlights |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | RBC Capital Maintains Sector Perform on Gen Digital, Raises  |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Equal-Weight on Gen Digital, Raises Price |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Evercore ISI Group Maintains Outperform on Gen Digital, Rais |
| 2026-05-08 | Earnings | ⚪  0 | 1.91 | Finnhub | Gen Digital Inc. 2026 Q4 - Results - Earnings Call Presentat |
| 2026-05-08 | Earnings | 🟢 +1 | 1.36 | Seeking Al | Gen outlines FY27 8%-10% revenue growth and $2.85-$2.95 EPS, |
| 2026-05-08 | Earnings | ⚪  0 | 1.36 | Seeking Al | Gen Digital Inc. (GEN) Q4 2026 Earnings Call Transcript |

---

## 🔴 Avoid / Short (2)

### NYSE:PFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **51** / 100 |
| Raw Weighted Score | 0.33 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Provident Financial Services Remains Compelling As Its Quality Shines 

**📉 Bearish Factors:**
- 🔴 [Black Swan|w1.89] Provident Financial Services (NYSE:PFS) Shows Strong Technical Breakou

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | ⚪  0 | 0.86 | Yahoo Fina | There's A Lot To Like About Provident Financial Services' (N |
| 2026-05-10 | Earnings | 🟢 +1 | 1.09 | Finnhub | Provident Financial Services Remains Compelling As Its Quali |
| 2026-05-07 | Black Swan | 🔴 -1 | 0.76 | Finnhub | Provident Financial Services (NYSE:PFS) Shows Strong Technic |

---

### NYSE:JHG

| Metric | Detail |
|--------|--------|
| Normalized Score | **35** / 100 |
| Raw Weighted Score | -3.55 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 18 |

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.64] Janus Henderson Group plc (JHG) Q1 Earnings and Revenues Miss Estimate

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | 🔴 -1 | 1.64 | Yahoo Fina | Janus Henderson Group plc (JHG) Q1 Earnings and Revenues Mis |
| 2026-05-08 | Earnings | 🔴 -1 | 1.91 | Finnhub | Janus Henderson Group plc Reports First Quarter 2026 Results |

---

## ⚪ Watch / Neutral (14)

### NASDAQ:ASML
- Score: 59/100 | raw: 2.2 | News: 7 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 59/100 | raw: 2.16 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 57/100 | raw: 1.64 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRDO
- Score: 57/100 | raw: 1.64 | News: 7 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 55/100 | raw: 1.12 | News: 1 kept / 39 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADI
- Score: 55/100 | raw: 1.26 | News: 6 kept / 31 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 55/100 | raw: 1.16 | News: 4 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CIEN
- Score: 52/100 | raw: 0.59 | News: 6 kept / 33 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 51/100 | raw: 0.25 | News: 1 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 1 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NYSE:JOBY
- Score: 44/100 | raw: -2.17 | News: 14 kept / 22 dropped | No clear directional bias — stay flat

### NASDAQ:NVDA
- Score: 44/100 | raw: -2.61 | News: 14 kept / 25 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-12T12:29:08.711Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*