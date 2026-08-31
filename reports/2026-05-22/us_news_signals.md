# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-22  |  **News Window:** 2026-05-15 ~ 2026-05-22
**Stock Pool:** us_selected.txt (62)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMAT** | **95** | 14.68 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/16 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:KLAC** | **95** | 14.37 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/20 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:ASML** | **95** | 10.82 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/12 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:GLW** | **92** | 11.26 | 🟢 Long (Strong) | Momentum / Hold | High | 8/21 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:ENS** | **91** | 31.32 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/17 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MU** | **88** | 10.7 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/16 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:LRCX** | **88** | 9.04 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/30 | Overheated Sentiment (one-sided bullish) |
| 8 | **NASDAQ:APLD** | **86** | 8.67 | 🟢 Long (Strong) | Momentum / Hold | High | 6/20 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:NVDA** | **84** | 24.61 | 🟢 Long (Strong) | Momentum / Hold | High | 24/16 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:NVT** | **80** | 7.27 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/16 | Overheated Sentiment (one-sided bullish) |
| 11 | **NYSE:HPE** | **73** | 5.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/18 | - |
| 12 | **NASDAQ:AMD** | **72** | 6.7 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:CIEN** | **72** | 5.36 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/29 | Overheated Sentiment (one-sided bullish) |
| 14 | **NYSE:NOK** | **70** | 4.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/21 | - |
| 15 | **NYSE:COHR** | **67** | 4.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/24 | - |
| 16 | **NASDAQ:INTC** | **66** | 4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/11 | - |
| 17 | **NASDAQ:MTSI** | **66** | 3.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/19 | - |
| 18 | **NYSE:SM** | **66** | 3.95 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/15 | - |
| 19 | **NYSE:IRM** | **66** | 3.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/13 | - |
| 20 | **NYSE:TSM** | **66** | 3.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/19 | - |
| 21 | **NASDAQ:MRVL** | **66** | 3.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 22 | **NYSE:BE** | **62** | 2.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/23 | - |
| 23 | **NYSE:FN** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/10 | - |
| 24 | **NASDAQ:AVGO** | **61** | 3.6 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/17 | Sentiment Divergence (black swan masked by noise) |
| 25 | **NYSE:DKS** | **60** | 2.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/24 | - |
| 26 | **NYSE:PACS** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/18 | - |
| 27 | **NASDAQ:INCY** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/15 | - |
| 28 | **NASDAQ:FLEX** | **57** | 1.65 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/14 | - |
| 29 | **NYSE:DELL** | **56** | 2.47 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/11 | Bullish-to-Bearish Reversal (reversal) |
| 30 | **NYSE:TRNO** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/5 | - |
| 31 | **NYSE:HG** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 32 | **CBOE:CBOE** | **55** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/24 | - |
| 33 | **NASDAQ:RMBS** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 34 | **NASDAQ:CORZ** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/14 | - |
| 35 | **NYSE:P** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/16 | - |
| 36 | **NASDAQ:MPWR** | **54** | 1.03 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/17 | - |
| 37 | **NASDAQ:GOOGL** | **54** | 1.11 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/16 | Sentiment Divergence (black swan masked by noise) |
| 38 | **NASDAQ:TLN** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/14 | - |
| 39 | **NYSE:MS** | **53** | 0.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/20 | - |
| 40 | **NASDAQ:SANM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/13 | - |
| 41 | **NASDAQ:RKLB** | **51** | 0.35 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 42 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 43 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 44 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 45 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 46 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 47 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 48 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 49 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 50 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/9 | - |
| 51 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 52 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 53 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 54 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 55 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 56 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 57 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NASDAQ:WDC** | **49** | -0.24 | ⚪ No Trade (Neutral) | Watch | Low | 8/19 | - |
| 60 | **NASDAQ:SEDG** | **47** | -0.84 | ⚪ No Trade (Neutral) | Watch | Low | 1/14 | - |
| 61 | **NASDAQ:CRDO** | **41** | -2.05 | ⚪ No Trade (Neutral) | Watch | Low | 2/20 | - |
| 62 | **NASDAQ:IREN** | **38** | -3.75 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 10/24 | - |

---

## 🟢 Strong Long (3)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 11.26 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Nvidia Warrant Deal Puts Corning At Center Of AI Data Centers
- 🟢 [M&A|w2.94] Corning Leans Into AI Infrastructure Growth As Valuation And Risks Sta
- 🟢 [Earnings|w2.73] Can Rising Demand for Fiber Optics Solutions Drive Corning's Growth?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice Me to Buy”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🔴 -1 | 0.6 | Finnhub | Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice  |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | This Is Why Corning's Stock Keeps Springing To The Upside |
| 2026-05-21 | M&A | 🟢 +1 | 4.16 | Finnhub | Nvidia Warrant Deal Puts Corning At Center Of AI Data Center |
| 2026-05-19 | Earnings | 🟢 +1 | 2.73 | Finnhub | Can Rising Demand for Fiber Optics Solutions Drive Corning's |
| 2026-05-19 | Industry | 🟢 +1 | 0.84 | Finnhub | Corning Stock Rallies to All-Time Highs as AI Optical Boom B |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Corning Incorporated (GLW) Presents at J.P. Morgan 54th Annu |
| 2026-05-19 | M&A | 🟢 +1 | 2.94 | Finnhub | Corning Leans Into AI Infrastructure Growth As Valuation And |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Stock Of The Day: Is It Time To Buy Corning? |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.67 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Applied Digital Enters Into A Long-term Lease Agreement With The Same 
- 🟢 [Industry|w2.98] Applied Digital Just Hit 1GW Of Contracted Capacity - Why It Matters
- 🟢 [Analyst Action|w1.43] Citizens Maintains Market Outperform on Applied Digital, Raises Price 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.7] Why Applied Digital Stock Is Slumping Monday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 2.98 | Finnhub | Applied Digital Just Hit 1GW Of Contracted Capacity - Why It |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Citizens Maintains Market Outperform on Applied Digital, Rai |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Needham Maintains Buy on Applied Digital, Raises Price Targe |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Why e.l.f. Beauty Shares Are Trading Higher By 10%; Here Are |
| 2026-05-20 | M&A | 🟢 +1 | 3.53 | Finnhub | Applied Digital Enters Into A Long-term Lease Agreement With |
| 2026-05-18 | Industry | 🔴 -1 | 0.7 | Finnhub | Why Applied Digital Stock Is Slumping Monday? |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 24.61 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 24 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Nvidia Just Raised Its Dividend By 2,400% -- and That Wasn't Even the 
- 🟢 [Earnings|w3.87] NVIDIA Earnings: A Quick Glance at Key Metrics
- 🟢 [Earnings|w3.87] NVIDIA confirms AI boom, but Iran fears are clouding market

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.1] NVIDIA Q1: No China In The Guide, 75% Margins, And A Tougher Bull Case
- 🔴 [Earnings|w1.1] Nvidia Q1 Earnings: Growth Slowdown, Massive Agentic AI Positioning
- 🔴 [Industry|w0.6] Stock Market Today, May 21: Markets Edge Upwards Again on Iran Peace H

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Assessing IREN (IREN) Valuation After AI Cloud Pivot And Fiv |
| 2026-05-22 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Nvidia Just Raised Its Dividend By 2,400% -- and That Wasn't |
| 2026-05-22 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Can Nvidia Extend Its AI-Driven Rally After New All-Time Hig |
| 2026-05-22 | Industry | ⚪  0 | 0.7 | Finnhub | Dow Jones Futures Rise After Dow's Closing High; Amazon, Cre |
| 2026-05-22 | Industry | 🟢 +1 | 1 | Seeking Al | Nvidia: Why New Highs Are Unavoidable |
| 2026-05-22 | Industry | 🟢 +1 | 1 | Seeking Al | Nvidia: Multi-Year AI Megatrend Confirmed |
| 2026-05-21 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is Nvidia a Buy After Its Blowout Earnings Report? History O |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy  |

---

## 🟢 Mid Long (13)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 18 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshaping Its Gl
- 🟢 [Analyst Action|w1.43] Morgan Stanley Maintains Equal-Weight on Hewlett Packard, Raises Price
- 🟢 [Industry|w1.01] HPE Positioned Highest in Execution and Furthest in Vision in 2026 Mag

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | IBM Rallies 8% While Oracle, Cisco, HPE Drift: Is the Laggar |
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | HPE to Present Live Webcast of Investor Relations Summit at  |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Morgan Stanley Maintains Equal-Weight on Hewlett Packard, Ra |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | HPE Positioned Highest in Execution and Furthest in Vision i |
| 2026-05-20 | Industry | ⚪  0 | 1.01 | Finnhub | Super Micro Computer Is Up 7% Today: Is It Outperforming Oth |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | JPMorgan Raises Price Target on Hewlett Packard Enterprise C |
| 2026-05-19 | Industry | 🔴 -1 | 0.84 | Finnhub | Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is  |
| 2026-05-19 | M&A | 🟢 +1 | 2.94 | Finnhub | Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshap |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 21 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] What's Going On With Nokia Stock On Wednesday?
- 🟢 [Industry|w1.75] Nokia Shares Edge Higher Following Patent Victory, Management Revamp

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Policy | 🟢 +1 | 3.02 | Finnhub | What's Going On With Nokia Stock On Wednesday? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Nokia Oyj (NOK) Presents at J.P. Morgan 54th Annual Global T |
| 2026-05-18 | Industry | 🟢 +1 | 1.75 | Finnhub | Nokia Shares Edge Higher Following Patent Victory, Managemen |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Why Coherent's Rally May Continue Higher
- 🟢 [Industry|w0.84] A Deep Dive Into NVIDIA’s Latest Portfolio Moves
- 🟢 [Industry|w0.5] Coherent (COHR) Gains from AI Infrastructure Investment

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | CRDO vs. COHR: Which AI Connectivity Stock Is the Better Buy |
| 2026-05-19 | Industry | 🟢 +1 | 0.84 | Finnhub | A Deep Dive Into NVIDIA’s Latest Portfolio Moves |
| 2026-05-19 | Earnings | 🟢 +1 | 2.73 | Finnhub | Why Coherent's Rally May Continue Higher |
| 2026-05-19 | Industry | 🟢 +1 | 0.5 | Finnhub | Coherent (COHR) Gains from AI Infrastructure Investment |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 11 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.43] Trump Admin to Invest $2 Billion in Quantum Computing Firms, Take Equi
- 🟢 [Policy|w1.43] Trump Gave Intel $8.9 Billion. Now Taxpayers Are Buying IBM
- 🟢 [Industry|w1.19] Intel Has Doubled AMD’s 2026 Gains. Is It Time to Rebalance Your Chip 

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.5] Intel: Will Higher Bond Yields Burst The AI Bubble? (Rating Downgrade)
- 🔴 [Industry|w0.6] AMD Vs. Intel: The AI CPU Trade Still Favors AMD - But Hedged
- 🔴 [Rumor|w0.5] Intel: Bought The Rumor, Sell The Apple News

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | ⚪  0 | 0.7 | Finnhub | Why Salesforce Stock Slumped Today |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Why Nebius Stock Surged Today |
| 2026-05-21 | Policy | 🟢 +1 | 1.43 | Finnhub | Trump Admin to Invest $2 Billion in Quantum Computing Firms, |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Stock Notches Its 15th Record Closing High This Year |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Stock Is Heading for an All-Time High |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | AMD makes a major $10 billion push in crucial tech hub |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Marquis Who's Who : Michael E. Kounavis, PhD - Innovation in |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Intel Has Doubled AMD’s 2026 Gains. Is It Time to Rebalance  |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] MACOM Technology Solutions (MTSI) Delivered Record Revenue and Profita

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Earnings | 🟢 +1 | 3.87 | Finnhub | MACOM Technology Solutions (MTSI) Delivered Record Revenue a |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Finnhub | ACI Worldwide Stock Trails S&P 500 by 40 Points as One Fund  |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Finnhub | Perella Weinberg Stock Lags the Market. One Fund Just Bought |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Finnhub | Huron Revenue Hit a Record $444 Million. So Why Did This Fun |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.95 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 15 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] This CH Robinson Analyst Turns Bullish; Here Are Top 5 Upgrades For We
- 🟢 [Analyst Action|w1.04] Raymond James Upgrades SM Energy to Outperform From Underperform, Pric
- 🟢 [Analyst Action|w0.86] SM Energy double-upgraded at Raymond James on bullish oil outlook

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.51 | Yahoo Fina | SM Energy (SM) Is Considered a Good Investment by Brokers: I |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Raymond James Upgrades SM Energy to Outperform From Underper |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | This CH Robinson Analyst Turns Bullish; Here Are Top 5 Upgra |
| 2026-05-20 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | SM Energy double-upgraded at Raymond James on bullish oil ou |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Are High Oil Prices a Key Driver of SM's Energy Operations? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Yahoo Fina | SM Energy Company (SM) Hits Fresh High: Is There Still Room  |
| 2026-05-18 | M&A | 🟢 +1 | 0.84 | Yahoo Fina | SM Energy Gains Momentum on Civitas Merger, RBC Says |
| 2026-05-18 | Analyst Action | ⚪  0 | 0.84 | Finnhub | Wells Fargo Maintains Equal-Weight on SM Energy, Raises Pric |

---

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 13 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Record AI-Fueled Data Center Leasing Could Be A Game Changer For Iron 
- 🟢 [Earnings|w1.91] A Look At Iron Mountain (IRM) Valuation After Strong Q1 Growth And Rai

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Iron Mountain (NYSE:IRM) Shows Perfect Minervini Mix of Tech |
| 2026-05-17 | Earnings | 🟢 +1 | 1.91 | Finnhub | Record AI-Fueled Data Center Leasing Could Be A Game Changer |
| 2026-05-17 | Earnings | 🟢 +1 | 1.91 | Finnhub | A Look At Iron Mountain (IRM) Valuation After Strong Q1 Grow |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] The TSMC Paradox: Huge AI Silicon Supply Vs. Finite Infrastructure
- 🟢 [Industry|w1.19] What's Going On With Taiwan Semiconductor Stock Thursday?
- 🟢 [Industry|w1.01] TSM (NYSE:TSM): Strong Growth and Technical Breakout Setup

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | The TSMC Paradox: Huge AI Silicon Supply Vs. Finite Infrastr |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | What's Going On With Taiwan Semiconductor Stock Thursday? |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | TSM (NYSE:TSM): Strong Growth and Technical Breakout Setup |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | What's Going On With Taiwan Semiconductor Stock Wednesday? |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Quant ratings on Coatue Management's top holdings: TSM, GEV, |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Citigroup Maintains Buy on Marvell Technology, Raises Price Target to 
- 🟢 [Analyst Action|w1.21] Marvell Technology Poised for Upside to Fiscal Q1 Results, Q2 Outlook 
- 🟢 [Analyst Action|w1.21] Marvell Price Target Vaults to $195 at Wells Fargo on AWS Trainium and

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Why Marvell Technology (MRVL) Shares Are Sliding Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Technology, Inc. (MRVL) Is a Trending Stock: Facts t |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Citigroup Maintains Buy on Marvell Technology, Raises Price  |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Stock Market Today, May 20: Nvidia Climbs Ahead of Earnings  |
| 2026-05-20 | Industry | 🔴 -1 | 1.01 | Finnhub | Why Marvell Technology (MRVL) Shares Are Sliding Today |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | Can MRVL's AI Backlog Drive Revenues to Nearly $11B in FY27? |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Marvell Technology Poised for Upside to Fiscal Q1 Results, Q |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Marvell Price Target Vaults to $195 at Wells Fargo on AWS Tr |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Bloom Energy: Pause Warranted
- 🟢 [Analyst Action|w0.5] Missed Nvidia? Why Tech Analyst Beth Kindig Calls Bloom Energy Tech's 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Bloom Energy Shares Are Sliding Tuesday: What's Driving The Action?
- 🔴 [Industry|w0.7] Bloom Energy Stock Is Slumping Monday: What's Driving The Action?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Earnings | 🟢 +1 | 3.87 | Finnhub | Bloom Energy: Pause Warranted |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | MarketWatc | See How SpaceX Is About to Eclipse Every Other Blockbuster I |
| 2026-05-19 | Industry | 🔴 -1 | 0.84 | Finnhub | Bloom Energy Shares Are Sliding Tuesday: What's Driving The  |
| 2026-05-18 | Industry | 🔴 -1 | 0.7 | Finnhub | Bloom Energy Stock Is Slumping Monday: What's Driving The Ac |
| 2026-05-18 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Missed Nvidia? Why Tech Analyst Beth Kindig Calls Bloom Ener |

---

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 10 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Fabrinet Rides on Automation Boom: A Case for More Upside?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | Is Genpact Stock a Buy After Hedge Fund Rice Hall James Rais |
| 2026-05-19 | Earnings | 🟢 +1 | 2.73 | Finnhub | Fabrinet Rides on Automation Boom: A Case for More Upside? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | $1000 Invested In Fabrinet 5 Years Ago Would Be Worth This M |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Fabrinet (FN) Presents at J.P. Morgan 54th Annual Global Tec |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Transcript : Fabrinet Presents at J.P. Morgan 54th Annual Gl |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Telsey Advisory Group Maintains Outperform on Dick's Sporting Goods, R
- 🟢 [Industry|w1.01] DICK'S Credit Card Relaunch Targets Deeper Loyalty And Revenue Per Cus

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.12] Earnings Preview: Dick's Sporting Goods (DKS) Q1 Earnings Expected to 
- 🔴 [Industry|w0.6] Dick's Sporting Goods (DKS) Falls More Steeply Than Broader Market: Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Stay Ahead of the Game With Dick's (DKS) Q1 Earnings: Wall S |
| 2026-05-20 | Earnings | 🔴 -1 | 1.12 | Yahoo Fina | Earnings Preview: Dick's Sporting Goods (DKS) Q1 Earnings Ex |
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Telsey Advisory Group Maintains Outperform on Dick's Sportin |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | DICK'S Credit Card Relaunch Targets Deeper Loyalty And Reven |
| 2026-05-18 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | Dick's Sporting Goods (DKS) Falls More Steeply Than Broader  |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 18 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.84] Truist Securities Maintains Buy on PACS Group, Raises Price Target to 
- 🟢 [Earnings|w0.78] PACS Group's (NYSE:PACS) Performance Is Even Better Than Its Earnings 
- 🟢 [Analyst Action|w0.72] Truist Raises Price Target on PACS Group to $52 From $50, Keeps Buy Ra

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | Truist Raises Price Target on PACS Group to $52 From $50, Ke |
| 2026-05-18 | Earnings | 🟢 +1 | 0.78 | Yahoo Fina | PACS Group's (NYSE:PACS) Performance Is Even Better Than Its |
| 2026-05-18 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Truist Securities Maintains Buy on PACS Group, Raises Price  |

---

## 🟡 Cautious Long (3)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 10.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Mizuho just rerated these 3 AI winners
- 🟢 [Industry|w1.19] Zacks.com featured highlights include NVIDIA and Micron Technology
- 🟢 [Industry|w1.19] NVIDIA Q1 Earnings Beat on Blackwell Ramp-Up, Data Center Strength

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Micron: The Easy Money In This Cycle Is Behind Us
- 🔴 [Analyst Action|w0.6] Micron: Why The Crash May Be Coming

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | SanDisk Soars 9%, Western Digital Rallies 5%, Micron Rises 3 |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Zacks.com featured highlights include NVIDIA and Micron Tech |
| 2026-05-21 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Mizuho just rerated these 3 AI winners |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | NVIDIA Q1 Earnings Beat on Blackwell Ramp-Up, Data Center St |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | MU vs. AMD: Which AI Semiconductor Stock Is the Better Buy? |
| 2026-05-21 | Rumor | 🟢 +1 | 0.5 | Finnhub | Micron Technologies Will Be a $1 Trillion Company By This Da |
| 2026-05-21 | Industry | 🟢 +1 | 0.85 | Seeking Al | Micron's Management Has Just Shared 3 Game-Changing Insights |
| 2026-05-21 | Industry | 🟢 +1 | 0.85 | Seeking Al | Micron's AI Memory Dominance Is Just Beginning |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 6.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Will AMD Stock Reach $600 This Year? The Answer May Not Surprise You
- 🟢 [Industry|w1.19] Amkor working with AMD on advanced packaging after acquiring more land
- 🟢 [Industry|w1.19] AMD makes a major $10 billion push in crucial tech hub

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] MU vs. AMD: Which AI Semiconductor Stock Is the Better Buy?
- 🔴 [Industry|w0.72] AMD Has An Nvidia Problem
- 🔴 [Industry|w0.6] AMD: Priced Like A Leader, Operating In Nvidia's Shadow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia: Why New Highs Are Unavoidable |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Amkor working with AMD on advanced packaging after acquiring |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD makes a major $10 billion push in crucial tech hub |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Intel Has Doubled AMD’s 2026 Gains. Is It Time to Rebalance  |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD's $10 Billion Taiwan Push Puts AI Chip Race In Focus |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Will AMD Stock Reach $600 This Year? The Answer May Not Surp |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD Commits $10 billion to Taiwan AI Expansion Strategy |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Oracle Moves Deeper Into AI Plumbing With Expanded Beam Stan |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.66] Ciena Taps Cirion NaaS To Extend Role In Cloud And AI
- 🟢 [Industry|w1.01] Can Proliferating WaveLogic 6 Adoption Fuel Ciena's Top Line?
- 🟢 [Industry|w1.01] Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Investor Focus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | 4 Cloud Computing Stocks Benefiting From AI-Driven Demand |
| 2026-05-21 | M&A | 🟢 +1 | 1.66 | Finnhub | Ciena Taps Cirion NaaS To Extend Role In Cloud And AI |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Hedge Fund Bienville Capital Exited Its Position in Monday.c |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | 4 Top-Ranked Liquid Stocks to Add to Portfolio for Solid Ret |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | Can Proliferating WaveLogic 6 Adoption Fuel Ciena's Top Line |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Invest |
| 2026-05-19 | Industry | 🟢 +1 | 0.84 | Finnhub | Matrix NAP Info Boosts Terabit-Era Submarine Connectivity wi |
| 2026-05-18 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Citigroup Maintains Buy on Ciena, Raises Price Target to $65 |

---

## ⚠️ Overheated (6)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 14.68 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] What's Going On With Broadcom Stock Thursday?
- 🟢 [M&A|w3.53] Applied Materials Broadcom Alliance Highlights Growing AI Packaging Am
- 🟢 [Earnings|w3.28] Behind the Numbers: Why Applied Materials’ Historic Q2 Results Justify

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Top Analyst Reports for Applied Materials, Shell & KLA |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Are Computer and Technology Stocks Lagging  Applied Material |
| 2026-05-21 | M&A | 🟢 +1 | 4.16 | Finnhub | What's Going On With Broadcom Stock Thursday? |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | LRCX Overweight: How Lam Research Is Poised to Outperform th |
| 2026-05-20 | Earnings | 🟢 +1 | 1.31 | Finnhub | Applied Materials Gains From Rising Operating Leverage: What |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Best Momentum Stocks to Buy for May 20th |
| 2026-05-20 | Earnings | 🟢 +1 | 3.28 | Finnhub | Behind the Numbers: Why Applied Materials’ Historic Q2 Resul |
| 2026-05-20 | M&A | 🟢 +1 | 3.53 | Finnhub | Applied Materials Broadcom Alliance Highlights Growing AI Pa |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 14.37 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Will ASML, Lilly, or TransDigm Be the Next Big Stock Split?
- 🟢 [Analyst Action|w3.57] Why is KLA Corporation (KLAC) One of Louis Navellier’s Top Long-Term S
- 🟢 [Analyst Action|w3.02] Bernstein lifts price targets on LRCX and KLAC after lifting WFE forec

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Top Analyst Reports for Applied Materials, Shell & KLA |
| 2026-05-21 | Buyback | 🟢 +1 | 3.57 | Finnhub | Will ASML, Lilly, or TransDigm Be the Next Big Stock Split? |
| 2026-05-21 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why is KLA Corporation (KLAC) One of Louis Navellier’s Top L |
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Bernstein lifts price targets on LRCX and KLAC after lifting |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Are Computer and Technology Stocks Lagging  KLA (KLAC) This  |
| 2026-05-20 | Buyback | 🟢 +1 | 3.02 | Finnhub | Will Goldman Sachs, Markel, or SanDisk Be the Next Big Stock |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | KLAC Stock Skyrockets 59% in 6 Months: Is More Upside Ahead? |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Seeking Al | KLA Corporation (KLAC) Presents at J.P. Morgan 54th Annual G |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 10.82 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] How The ASML Holding (ENXTAM:ASML) Narrative Is Shifting With New Targ
- 🟢 [Analyst Action|w1.43] This is Why ASML Holding NV (ASML) is One of the Top Tech Stocks in Bi
- 🟢 [Earnings|w1.31] ASML Holding N.V. (ASML) Rallied Following Solid Results

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | ASML (ASML) Surpasses Market Returns: Some Facts Worth Knowi |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | How The ASML Holding (ENXTAM:ASML) Narrative Is Shifting Wit |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | ASML (ASML): AI Stock With The Widest Moat? |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | ASML (ASML) Just Flashed Golden Cross Signal: Do You Buy? |
| 2026-05-21 | Buyback | ⚪  0 | 0.71 | Finnhub | Will ASML, Lilly, or TransDigm Be the Next Big Stock Split? |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | This is Why ASML Holding NV (ASML) is One of the Top Tech St |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Why ASML Holding Stock Just Popped |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | LRCX Ups WFE View Amid AI Demand: Can It Lift Systems Revenu |

---

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 31.32 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS and Strateg
- 🟢 [Earnings|w3.87] EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y
- 🟢 [Earnings|w3.87] Enersys Q4 Earnings Call Highlights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Earnings | 🟢 +1 | 3.87 | Finnhub | EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS a |
| 2026-05-21 | Earnings | 🟢 +1 | 3.87 | Finnhub | EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | ENS vs. ETN: Which Stock Is the Better Value Option? |
| 2026-05-21 | Earnings | 🟢 +1 | 3.87 | Finnhub | Enersys Q4 Earnings Call Highlights |
| 2026-05-21 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | BTIG Maintains Buy on EnerSys, Raises Price Target to $250 |
| 2026-05-20 | Earnings | 🟢 +1 | 3.28 | Finnhub | EnerSys (ENS) Q4 Earnings and Revenues Top Estimates |
| 2026-05-20 | Earnings | 🟢 +1 | 3.28 | Finnhub | EnerSys’s (NYSE:ENS) Q1 CY2026 Sales Top Estimates |
| 2026-05-20 | Earnings | 🟢 +1 | 3.28 | Finnhub | EnerSys (NYSE:ENS) Fiscal Q4 Results Top Estimates; Shares J |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.04 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] LRCX Ups WFE View Amid AI Demand: Can It Lift Systems Revenues?
- 🟢 [Analyst Action|w3.02] Bernstein lifts price targets on LRCX and KLAC after lifting WFE forec
- 🟢 [Industry|w1.19] LAM RESEARCH CORP (NASDAQ:LRCX) Fits the GARP Mold with Strong Growth 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Lam Research (LRCX) Just Overtook the 20-Day Moving Average |
| 2026-05-21 | Buyback | ⚪  0 | 1.43 | Finnhub | Lam Research Corporation Declares Quarterly Dividend |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | LAM RESEARCH CORP (NASDAQ:LRCX) Fits the GARP Mold with Stro |
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | LRCX Overweight: How Lam Research Is Poised to Outperform th |
| 2026-05-20 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Bernstein lifts price targets on LRCX and KLAC after lifting |
| 2026-05-20 | Earnings | 🟢 +1 | 3.28 | Finnhub | LRCX Ups WFE View Amid AI Demand: Can It Lift Systems Revenu |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Quant ratings on Coatue Management's top holdings: TSM, GEV, |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.27 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 16 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Did Record Q1 Results and Raised Guidance Just Shift nVent Electric's 
- 🟢 [Buyback|w1.51] NVent Electric plc Declares Quarterly Cash Dividend, Payable on August
- 🟢 [Buyback|w1.51] nVent Announces Share Repurchase Authorization

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | nVent to Participate in Upcoming Investor Conference |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | nVent Electric Plc (NYSE:NVT) Shines in Caviar Cruise Qualit |
| 2026-05-19 | Industry | ⚪  0 | 0.84 | Finnhub | nVent Electric plc (NVT) Presents at Wolfe Research 19th Ann |
| 2026-05-16 | Earnings | 🟢 +1 | 1.64 | Finnhub | Did Record Q1 Results and Raised Guidance Just Shift nVent E |
| 2026-05-16 | Industry | 🟢 +1 | 0.5 | Finnhub | NVENT ELECTRIC PLC (NYSE:NVT) Breaks Out with Strong Momentu |
| 2026-05-16 | Buyback | 🟢 +1 | 1.51 | Finnhub | NVent Electric plc Declares Quarterly Cash Dividend, Payable |
| 2026-05-16 | Buyback | 🟢 +1 | 1.51 | Finnhub | nVent Announces Share Repurchase Authorization |
| 2026-05-16 | Buyback | 🟢 +1 | 1.51 | Finnhub | nVent Announces Quarterly Cash Dividend |

---

## ⚠️ Risk Pattern (5)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 10.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Mizuho just rerated these 3 AI winners
- 🟢 [Industry|w1.19] Zacks.com featured highlights include NVIDIA and Micron Technology
- 🟢 [Industry|w1.19] NVIDIA Q1 Earnings Beat on Blackwell Ramp-Up, Data Center Strength

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Micron: The Easy Money In This Cycle Is Behind Us
- 🔴 [Analyst Action|w0.6] Micron: Why The Crash May Be Coming

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | SanDisk Soars 9%, Western Digital Rallies 5%, Micron Rises 3 |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Zacks.com featured highlights include NVIDIA and Micron Tech |
| 2026-05-21 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Mizuho just rerated these 3 AI winners |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | NVIDIA Q1 Earnings Beat on Blackwell Ramp-Up, Data Center St |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | MU vs. AMD: Which AI Semiconductor Stock Is the Better Buy? |
| 2026-05-21 | Rumor | 🟢 +1 | 0.5 | Finnhub | Micron Technologies Will Be a $1 Trillion Company By This Da |
| 2026-05-21 | Industry | 🟢 +1 | 0.85 | Seeking Al | Micron's Management Has Just Shared 3 Game-Changing Insights |
| 2026-05-21 | Industry | 🟢 +1 | 0.85 | Seeking Al | Micron's AI Memory Dominance Is Just Beginning |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 6.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Will AMD Stock Reach $600 This Year? The Answer May Not Surprise You
- 🟢 [Industry|w1.19] Amkor working with AMD on advanced packaging after acquiring more land
- 🟢 [Industry|w1.19] AMD makes a major $10 billion push in crucial tech hub

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] MU vs. AMD: Which AI Semiconductor Stock Is the Better Buy?
- 🔴 [Industry|w0.72] AMD Has An Nvidia Problem
- 🔴 [Industry|w0.6] AMD: Priced Like A Leader, Operating In Nvidia's Shadow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia: Why New Highs Are Unavoidable |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Amkor working with AMD on advanced packaging after acquiring |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD makes a major $10 billion push in crucial tech hub |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Intel Has Doubled AMD’s 2026 Gains. Is It Time to Rebalance  |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD's $10 Billion Taiwan Push Puts AI Chip Race In Focus |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Will AMD Stock Reach $600 This Year? The Answer May Not Surp |
| 2026-05-21 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD Commits $10 billion to Taiwan AI Expansion Strategy |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Oracle Moves Deeper Into AI Plumbing With Expanded Beam Stan |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.66] Ciena Taps Cirion NaaS To Extend Role In Cloud And AI
- 🟢 [Industry|w1.01] Can Proliferating WaveLogic 6 Adoption Fuel Ciena's Top Line?
- 🟢 [Industry|w1.01] Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Investor Focus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | 4 Cloud Computing Stocks Benefiting From AI-Driven Demand |
| 2026-05-21 | M&A | 🟢 +1 | 1.66 | Finnhub | Ciena Taps Cirion NaaS To Extend Role In Cloud And AI |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Hedge Fund Bienville Capital Exited Its Position in Monday.c |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | 4 Top-Ranked Liquid Stocks to Add to Portfolio for Solid Ret |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | Can Proliferating WaveLogic 6 Adoption Fuel Ciena's Top Line |
| 2026-05-20 | Industry | 🟢 +1 | 1.01 | Finnhub | Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Invest |
| 2026-05-19 | Industry | 🟢 +1 | 0.84 | Finnhub | Matrix NAP Info Boosts Terabit-Era Submarine Connectivity wi |
| 2026-05-18 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Citigroup Maintains Buy on Ciena, Raises Price Target to $65 |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3.6 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] What's Going On With Broadcom Stock Thursday?
- 🟢 [Industry|w1.19] Billionaire families bet on semiconductor and energy stocks in first q
- 🟢 [M&A|w1.01] Broadcom joins Applied Materials’ EPIC platform as innovation partner

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Broadcom Inc. (AVGO) Challenges EU Regulators While Barclays Sees AI U
- 🔴 [Industry|w0.5] Broadcom Is Far Too Overcrowded

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Broadcom Inc. (AVGO) a Solid Growth Stock? 3 Reasons to T |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | The AI ETF Analysts Are Watching Closely Into June |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Broadcom (AVGO) The Best AI Chip Stock to Buy? |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Here's An Advanced Technique For Using Options With Broadcom |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Cerebras Just Got Fast-Tracked Into the S&P 500. Here’s What |
| 2026-05-21 | M&A | 🟢 +1 | 4.16 | Finnhub | What's Going On With Broadcom Stock Thursday? |
| 2026-05-21 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Broadcom Inc. (AVGO) Challenges EU Regulators While Barclays |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Broadcom Inc. (NASDAQ:AVGO) Passes the Caviar Cruise Quality |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 1.11 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Alphabet: FQ1's Record Operating Margin Marks A New Growth Curve
- 🟢 [Analyst Action|w1.43] Alphabet's new AI ad formats seen boosting conversions and spending
- 🟢 [Analyst Action|w0.86] Alphabet Just Disrupted Itself, Completely (Rating Upgrade)

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Waymo suspends freeway rides, pauses Atlanta operations amid safety fi
- 🔴 [Analyst Action|w1.02] Alphabet: The Buffett Effect Meets Apple-Like Overvaluation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Waymo suspends freeway rides, pauses Atlanta operations amid |
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | Why Applied Digital Stock Soared Today |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Alphabet's new AI ad formats seen boosting conversions and s |
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | Meta settles first US case over school costs tied to youth m |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Alphabet (GOOGL): Moving Beyond Search in the AI Revolution |
| 2026-05-21 | Analyst Action | 🔴 -1 | 1.02 | Seeking Al | Alphabet: The Buffett Effect Meets Apple-Like Overvaluation |
| 2026-05-20 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | Alphabet Just Disrupted Itself, Completely (Rating Upgrade) |
| 2026-05-20 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | Alphabet Owns The Entire AI Stack And Is The Largest Pure Pl |

---

## 🔴 Avoid / Short (3)

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3.6 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] What's Going On With Broadcom Stock Thursday?
- 🟢 [Industry|w1.19] Billionaire families bet on semiconductor and energy stocks in first q
- 🟢 [M&A|w1.01] Broadcom joins Applied Materials’ EPIC platform as innovation partner

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Broadcom Inc. (AVGO) Challenges EU Regulators While Barclays Sees AI U
- 🔴 [Industry|w0.5] Broadcom Is Far Too Overcrowded

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Broadcom Inc. (AVGO) a Solid Growth Stock? 3 Reasons to T |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | The AI ETF Analysts Are Watching Closely Into June |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Broadcom (AVGO) The Best AI Chip Stock to Buy? |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Here's An Advanced Technique For Using Options With Broadcom |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Cerebras Just Got Fast-Tracked Into the S&P 500. Here’s What |
| 2026-05-21 | M&A | 🟢 +1 | 4.16 | Finnhub | What's Going On With Broadcom Stock Thursday? |
| 2026-05-21 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Broadcom Inc. (AVGO) Challenges EU Regulators While Barclays |
| 2026-05-21 | Industry | ⚪  0 | 0.6 | Finnhub | Broadcom Inc. (NASDAQ:AVGO) Passes the Caviar Cruise Quality |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 1.11 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Alphabet: FQ1's Record Operating Margin Marks A New Growth Curve
- 🟢 [Analyst Action|w1.43] Alphabet's new AI ad formats seen boosting conversions and spending
- 🟢 [Analyst Action|w0.86] Alphabet Just Disrupted Itself, Completely (Rating Upgrade)

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Waymo suspends freeway rides, pauses Atlanta operations amid safety fi
- 🔴 [Analyst Action|w1.02] Alphabet: The Buffett Effect Meets Apple-Like Overvaluation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Waymo suspends freeway rides, pauses Atlanta operations amid |
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | Why Applied Digital Stock Soared Today |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Alphabet's new AI ad formats seen boosting conversions and s |
| 2026-05-21 | Industry | ⚪  0 | 1.19 | Finnhub | Meta settles first US case over school costs tied to youth m |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Finnhub | Alphabet (GOOGL): Moving Beyond Search in the AI Revolution |
| 2026-05-21 | Analyst Action | 🔴 -1 | 1.02 | Seeking Al | Alphabet: The Buffett Effect Meets Apple-Like Overvaluation |
| 2026-05-20 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | Alphabet Just Disrupted Itself, Completely (Rating Upgrade) |
| 2026-05-20 | Analyst Action | 🟢 +1 | 0.86 | Seeking Al | Alphabet Owns The Entire AI Stack And Is The Largest Pure Pl |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **38** / 100 |
| Raw Weighted Score | -3.75 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 10 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.01] Why IREN Could Outperform Nebius Now
- 🟢 [Industry|w0.85] Nebius, CoreWeave, Iren surge as Nvidia discloses H100 rental prices c
- 🟢 [Analyst Action|w0.72] Why IREN Limited Could Outperform Nebius Now

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.73] IREN Limited's AI Dream Meets Financial Reality
- 🔴 [Analyst Action|w2.1] IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Results (Downgr
- 🔴 [Analyst Action|w1.5] IREN Limited: Nvidia's Vote Of Confidence And The Demanding Q3 Results

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-21 | Industry | 🟢 +1 | 0.85 | Seeking Al | Nebius, CoreWeave, Iren surge as Nvidia discloses H100 renta |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Why IREN Could Outperform Nebius Now |
| 2026-05-19 | Earnings | 🔴 -1 | 2.73 | Finnhub | IREN Limited's AI Dream Meets Financial Reality |
| 2026-05-19 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | Why IREN Limited Could Outperform Nebius Now |
| 2026-05-18 | Analyst Action | 🔴 -1 | 2.1 | Finnhub | IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Resul |
| 2026-05-18 | M&A | ⚪  0 | 2.45 | Finnhub | IREN To Acquire Awaken, A Firm That Specializes In Content S |
| 2026-05-18 | M&A | ⚪  0 | 2.45 | Finnhub | IREN Acquires Awaken to Support Global Brand Growth |
| 2026-05-18 | Analyst Action | 🔴 -1 | 1.5 | Seeking Al | IREN Limited: Nvidia's Vote Of Confidence And The Demanding  |

---

## ⚪ Watch / Neutral (34)

### NASDAQ:INCY
- Score: 59/100 | raw: 2.13 | News: 3 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 57/100 | raw: 1.65 | News: 6 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DELL
- Score: 56/100 | raw: 2.47 | News: 15 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Bullish-to-Bearish Reversal (reversal)

### NYSE:TRNO
- Score: 56/100 | raw: 1.51 | News: 1 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 56/100 | raw: 1.43 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### CBOE:CBOE
- Score: 55/100 | raw: 1.6 | News: 15 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 55/100 | raw: 1.19 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 55/100 | raw: 1.19 | News: 1 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 54/100 | raw: 0.84 | News: 5 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 54/100 | raw: 1.03 | News: 6 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 54/100 | raw: 1.01 | News: 4 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 53/100 | raw: 0.71 | News: 5 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RKLB
- Score: 51/100 | raw: 0.35 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 0 kept / 8 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WDC
- Score: 49/100 | raw: -0.24 | News: 8 kept / 19 dropped | No clear directional bias — stay flat

### NASDAQ:SEDG
- Score: 47/100 | raw: -0.84 | News: 1 kept / 14 dropped | No clear directional bias — stay flat

### NASDAQ:CRDO
- Score: 41/100 | raw: -2.05 | News: 2 kept / 20 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-22T03:53:53.572Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*