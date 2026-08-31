# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-26  |  **News Window:** 2026-05-19 ~ 2026-05-26
**Stock Pool:** us_selected.txt (63)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:KLAC** | **100** | 12.24 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/27 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GLW** | **95** | 12.52 | 🟢 Long (Strong) | Momentum / Hold | High | 7/22 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:APLD** | **94** | 10.7 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/26 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ENS** | **93** | 11.45 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/30 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:MU** | **91** | 11.44 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 18/22 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:CIEN** | **91** | 9.73 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/27 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NVDA** | **85** | 25.98 | 🟢 Long (Strong) | Momentum / Hold | High | 26/14 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:AMAT** | **81** | 7.36 | 🟢 Long (Strong) | Momentum / Hold | High | 8/27 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:MRVL** | **80** | 12.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/15 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:FLEX** | **80** | 8.63 | 🟢 Long (Strong) | Momentum / Hold | High | 9/17 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:DELL** | **79** | 7.78 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/24 | Overheated Sentiment (one-sided bullish) |
| 12 | **NYSE:HPE** | **76** | 6.18 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/18 | Overheated Sentiment (one-sided bullish) |
| 13 | **CBOE:CBOE** | **76** | 6.15 | 🟢 Long (Strong) | Momentum / Hold | High | 7/14 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:DKS** | **76** | 6.25 | 🟢 Long (Strong) | Momentum / Hold | High | 10/13 | - |
| 15 | **NASDAQ:RKLB** | **75** | 6.11 | 🟢 Long (Strong) | Momentum / Hold | High | 13/27 | - |
| 16 | **NASDAQ:ASML** | **74** | 5.76 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/16 | Overheated Sentiment (one-sided bullish) |
| 17 | **NYSE:SM** | **74** | 5.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/12 | - |
| 18 | **NASDAQ:WDC** | **74** | 5.74 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/30 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:IREN** | **72** | 5.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/24 | - |
| 20 | **NASDAQ:AMD** | **71** | 5.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/28 | - |
| 21 | **NASDAQ:MPWR** | **70** | 4.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/27 | Sentiment Strengthening UP (trend) |
| 22 | **NASDAQ:LRCX** | **70** | 4.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/30 | - |
| 23 | **NASDAQ:TTMI** | **69** | 4.64 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/26 | Overheated Sentiment (one-sided bullish) |
| 24 | **NASDAQ:INCY** | **66** | 3.73 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 6/25 | Overheated Sentiment (one-sided bullish) |
| 25 | **NASDAQ:MTSI** | **64** | 3.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/13 | - |
| 26 | **NYSE:COHR** | **63** | 3.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/20 | - |
| 27 | **NYSE:NVT** | **61** | 2.69 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/15 | - |
| 28 | **NASDAQ:INTC** | **59** | 2.38 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/24 | - |
| 29 | **NYSE:P** | **59** | 2.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/19 | - |
| 30 | **NYSE:NOK** | **59** | 2.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/18 | - |
| 31 | **NYSE:FAF** | **59** | 2.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/27 | - |
| 32 | **NYSE:TSM** | **58** | 2.02 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/29 | - |
| 33 | **NASDAQ:AVGO** | **58** | 3 | ⚪ No Trade (Weak Bullish) | Watch | Low | 18/12 | - |
| 34 | **NYSE:BE** | **58** | 1.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/24 | - |
| 35 | **NYSE:MS** | **56** | 1.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/22 | - |
| 36 | **NASDAQ:CPRX** | **54** | 1.02 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 37 | **NASDAQ:SANM** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/14 | - |
| 38 | **NYSE:TRNO** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/4 | - |
| 39 | **NYSE:HG** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 40 | **NASDAQ:CRDO** | **52** | 0.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/29 | - |
| 41 | **NASDAQ:RMBS** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/9 | - |
| 42 | **NYSE:IRM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/22 | - |
| 43 | **NASDAQ:CORZ** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/11 | - |
| 44 | **NASDAQ:GOOGL** | **52** | 0.78 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 20/9 | Sentiment Divergence (black swan masked by noise) |
| 45 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 46 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 47 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 48 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 49 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 50 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 51 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 52 | **NYSE:FN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 53 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 54 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 55 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 56 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 57 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 58 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 59 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/23 | - |
| 61 | **NYSE:GNRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/30 | - |
| 62 | **NYSE:MOD** | **49** | -0.16 | ⚪ No Trade (Neutral) | Watch | Low | 5/16 | - |
| 63 | **NASDAQ:SEDG** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 1/19 | - |

---

## 🟢 Strong Long (7)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 12.52 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] GLW Rides on Solid Traction in the Solar Vertical: Will it Persist?
- 🟢 [M&A|w2.94] Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This Growth Sto
- 🟢 [M&A|w2.94] How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW) Has Change

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.7] Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice Me to Buy”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | GLW Rides on Solid Traction in the Solar Vertical: Will it P |
| 2026-05-23 | M&A | 🟢 +1 | 2.94 | Finnhub | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-23 | M&A | 🟢 +1 | 2.94 | Finnhub | How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW)  |
| 2026-05-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | Robust Results Boosted Corning’s (GLW) Performance in Q1 |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Nvidia's Latest AI Partner Was a Bargain Hiding in Plain Sig |
| 2026-05-21 | Analyst Action | 🔴 -1 | 0.7 | Finnhub | Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice  |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | This Is Why Corning's Stock Keeps Springing To The Upside |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 25.98 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.9] Coherent NVIDIA Pact Links AI Optics Growth With Stretched Valuation M
- 🟢 [Earnings|w4.55] This AI Stock Has Been Called Overvalued for 3 Years. The Bears Keep L
- 🟢 [Earnings|w4.55] Nvidia: Why $265 Is In Play Fundamentally And Technically

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Michael Burry Goes After Nvidia Again — Flags ‘Temporary’ Demand, Cust
- 🔴 [Industry|w1.19] NVIDIA (NVDA): The Best High Growth Stock to Buy and Hold for the Next

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 3 Blue Chip Dividend Stocks to Buy in June as the Dow Jones  |
| 2026-05-26 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Michael Burry Goes After Nvidia Again — Flags ‘Temporary’ De |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Before the Next Nvidia-Style Run, Here Are 3 AI Stocks Worth |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 2 Building Materials Stocks That Are Quietly Becoming Some o |
| 2026-05-26 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | AIC to Showcase Next-Generation AI Infrastructure and Host S |
| 2026-05-26 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Why Fortinet (FTNT) Is Up 5.9% After Expanding NVIDIA‑Powere |
| 2026-05-26 | Industry | ⚪  0 | 0.7 | Finnhub | Broadcom: Rock-Solid Custom Silicon Partnerships Create Mass |
| 2026-05-26 | Industry | 🟢 +1 | 1.4 | Finnhub | Arm’s AGI CPUs Put AI Data Center Growth Story In Focus |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.36 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 27 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Applied Materials, Inc. (AMAT) Sees Quarterly Revenue Exceeding Foreca
- 🟢 [M&A|w2.52] Applied Materials Taps UCLA AI Chip Hub As Valuation Debate Grows
- 🟢 [Analyst Action|w1.04] Argus Research Sees Long-Term Growth Ahead for Applied Materials (AMAT

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Is Lam Research Corporation (LRCX) One of the Best Oversold Growth Sto

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Applied Materials, Inc. (AMAT) Sees Quarterly Revenue Exceed |
| 2026-05-24 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Argus Research Sees Long-Term Growth Ahead for Applied Mater |
| 2026-05-23 | Analyst Action | 🔴 -1 | 0.86 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-23 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | Applied Materials Taps UCLA AI Chip Hub As Valuation Debate  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Will ASML's High-NA Rollout Strengthen AI Chip Leadership? |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | The Zacks Analyst Blog Highlights Applied Materials, Shell a |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials (AMAT): “The Arms Dealer of the Semiconduc |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Seeking Al | Applied Materials, Inc. (AMAT) Presents at J.P. Morgan 54th  |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 8.63 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Flex Pitches AI Data Center Spin-Off as Power and Cooling Growth Accel
- 🟢 [M&A|w2.94] Flex Teradyne Robotics Tie Up Reframes Automation Risks And Rewards
- 🟢 [M&A|w2.45] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent

**📉 Bearish Factors:**
- 🔴 [M&A|w2.06] Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And Insider Sale

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | ⚪  0 | 0.6 | Finnhub | Here's How Much a $1000 Investment in Flex Made 10 Years Ago |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | Assessing Flex (FLEX) Valuation After A Sharp Multi Month Sh |
| 2026-05-23 | M&A | 🟢 +1 | 2.94 | Finnhub | Flex Pitches AI Data Center Spin-Off as Power and Cooling Gr |
| 2026-05-23 | M&A | 🟢 +1 | 2.94 | Finnhub | Flex Teradyne Robotics Tie Up Reframes Automation Risks And  |
| 2026-05-22 | M&A | 🟢 +1 | 2.45 | Finnhub | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Flex to Participate in Upcoming Investor Conferences |
| 2026-05-21 | M&A | 🔴 -1 | 2.06 | Finnhub | Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And In |
| 2026-05-20 | M&A | 🟢 +1 | 1.76 | Finnhub | Flex Spin Off Of Cloud And Power Unit Reshapes AI Exposure |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Are Wall Street Analysts Predicting Cboe Global Markets Stock Will Cli
- 🟢 [Industry|w2.1] How Investors Are Reacting To Cboe Global Markets (CBOE) Expanding Dai
- 🟢 [Industry|w1.19] 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE |
| 2026-05-23 | Industry | 🟢 +1 | 2.1 | Finnhub | How Investors Are Reacting To Cboe Global Markets (CBOE) Exp |
| 2026-05-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | Are Wall Street Analysts Predicting Cboe Global Markets Stoc |
| 2026-05-21 | Industry | 🟢 +1 | 0.59 | Finnhub | CBOE Stock Rises 58.1% in a Year: A Signal for Investors to  |
| 2026-05-21 | Industry | ⚪  0 | 0.59 | Finnhub | Light AI Announces C$5,000,000 Secured Convertible Debenture |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | DRAM Has Nearly Doubled Since Its April Launch and After Fol |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Finnhub | Glass House Brands to Host Investor Sesh V on Thursday, June |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.25 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 13 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Dick's (DKS) Stock Is Up, What You Need To Know
- 🟢 [Analyst Action|w1.51] Telsey Advisory Group Maintains Outperform on Dick's Sporting Goods, R
- 🟢 [Industry|w1.19] DICK'S SPORTING GOODS INC (NYSE:DKS) Passes the Peter Lynch Test for G

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.66] Earnings Preview: Dick's Sporting Goods (DKS) Q1 Earnings Expected to 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | DICK'S SPORTING GOODS INC (NYSE:DKS) Passes the Peter Lynch  |
| 2026-05-23 | Earnings | ⚪  0 | 1.09 | Finnhub | Can DICK'S (DKS) AI Coach and Foot Locker Tie-Up Really Rede |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | DICK'S Sporting Goods Introduces Coach by DICK'S, an Agentic |
| 2026-05-22 | Earnings | 🟢 +1 | 0.91 | Finnhub | Will Dick's (DKS) Beat Estimates Again in Its Next Earnings  |
| 2026-05-22 | Earnings | ⚪  0 | 0.91 | Finnhub | How To Earn $500 A Month From Dick's Sporting Stock Ahead Of |
| 2026-05-22 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Dick's (DKS) Stock Is Up, What You Need To Know |
| 2026-05-21 | Earnings | ⚪  0 | 0.76 | Finnhub | Stay Ahead of the Game With Dick's (DKS) Q1 Earnings: Wall S |
| 2026-05-20 | Earnings | 🔴 -1 | 0.66 | Finnhub | Earnings Preview: Dick's Sporting Goods (DKS) Q1 Earnings Ex |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.11 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 27 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.16] Rocket Lab Wins Space Force Deal As Valuation And Momentum Diverge
- 🟢 [Industry|w1.25] Rocket Lab secures $90M U.S. Space Force contract for GEO satellites
- 🟢 [Industry|w1.2] Why Did NOK, NVTS, RKLB Stocks Surge To 52-Week Highs Last Week?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.7] Rocket Lab: Don't Chase Now Even If You Missed The Blast-Off (Rating D
- 🔴 [Industry|w0.5] Why Rocket Lab (RKLB) Stock Is Falling Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Why Did NOK, NVTS, RKLB Stocks Surge To 52-Week Highs Last W |
| 2026-05-25 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The $2 Trillion Underwriting Case: Inside Chamath’s Blockbus |
| 2026-05-25 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Option Volatility And Earnings Report For May 25-29 |
| 2026-05-24 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | NASA and Rocket Lab May Figure Out In-Space Fueling Before S |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Yahoo Fina | China launches Shenzhou-23 mission with potential record one |
| 2026-05-23 | Policy | 🟢 +1 | 0.86 | Yahoo Fina | Rocket Lab and Redwire Shares Skyrocket, What You Need To Kn |
| 2026-05-23 | Policy | 🟢 +1 | 2.16 | Yahoo Fina | Rocket Lab Wins Space Force Deal As Valuation And Momentum D |
| 2026-05-23 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Why Rocket Lab (RKLB) Stock Is Falling Today |

---

## 🟢 Mid Long (8)

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 12 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] SM Energy: Debt Reduction Will Unlock Significant Shareholder Value
- 🟢 [Analyst Action|w1.51] Raymond James Upgrades SM Energy (SM)
- 🟢 [Industry|w1.02] SM Group raises renewable energy sourcing to 31% in 2025

**📉 Bearish Factors:**
- 🔴 [M&A|w1.01] SM Energy Uinta Deal Reshapes Scale Valuation And Shareholder Dilution
- 🔴 [Industry|w0.5] SM Energy, Transocean, and Valaris Shares Are Falling, What You Need T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Reasons We’re Fans of SM Energy (SM) |
| 2026-05-25 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Why SM Energy (SM) is a Top Momentum Stock for the Long-Term |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | SM Group raises renewable energy sourcing to 31% in 2025 |
| 2026-05-23 | M&A | 🔴 -1 | 1.01 | Yahoo Fina | SM Energy Uinta Deal Reshapes Scale Valuation And Shareholde |
| 2026-05-23 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | SM Energy, Transocean, and Valaris Shares Are Falling, What  |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Seeking Al | SM Energy: Debt Reduction Will Unlock Significant Shareholde |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Higher Synergies & Oil Prices Enhance SM Energy's Prospects |
| 2026-05-22 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | SM Energy: Debt Reduction Will Unlock Significant Shareholde |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 24 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.52] IREN (IREN) Expands Brand Push with Awaken Acquisition
- 🟢 [M&A|w2.1] IREN’s $3.4 Billion NVIDIA Deal Points To Something Big Around The Cor
- 🟢 [Industry|w1.05] Nebius, CoreWeave, Iren surge as Nvidia discloses H100 rental prices c

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Forget Nvidia: IREN CEO Says A New AI Factory Built Today May Not Go L
- 🔴 [Industry|w0.51] IREN’s CEO Just Said 11 Words that Delivered the AI Boom a Brutal Real

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | IREN’s CEO Just Said 11 Words that Delivered the AI Boom a B |
| 2026-05-25 | Industry | ⚪  0 | 0.51 | Yahoo Fina | IREN vs. CIFR: Which AI Data Center Stock Has an Edge Right  |
| 2026-05-25 | Industry | 🔴 -1 | 1.19 | Finnhub | Forget Nvidia: IREN CEO Says A New AI Factory Built Today Ma |
| 2026-05-24 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | IREN Joins Russell 3000 As AI And Crypto Pivot Gains Attenti |
| 2026-05-23 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | IREN (IREN) Expands Brand Push with Awaken Acquisition |
| 2026-05-22 | M&A | 🟢 +1 | 2.1 | Yahoo Fina | IREN’s $3.4 Billion NVIDIA Deal Points To Something Big Arou |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing IREN (IREN) Valuation After AI Cloud Pivot And Fiv |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Finnhub | IREN: The Pricing Power Breadcrumbs Are Starting To Add Up |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] The 'Next Nvidia' Trade? Why Investors Are Suddenly Watching Advanced 
- 🟢 [Industry|w1.02] Advanced Micro Devices, Inc. (AMD) Plans to Invest more than $10B in T
- 🟢 [Industry|w1.02] A $10 Billion Reason to Buy AMD Stock Now

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] AMD Has An Nvidia Problem

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Advanced Micro Devices, Inc. (AMD) Plans to Invest more than |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | A $10 Billion Reason to Buy AMD Stock Now |
| 2026-05-25 | Rumor | ⚪  0 | 0.5 | Yahoo Fina | Anthropic To Become More Valuable Than Today's AMD, Sk Hynix |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | The 'Next Nvidia' Trade? Why Investors Are Suddenly Watching |
| 2026-05-24 | Industry | ⚪  0 | 1.01 | Finnhub | The Best Stocks to Buy Right Now: Nvidia vs. AMD vs. Broadco |
| 2026-05-24 | Industry | ⚪  0 | 1.01 | Finnhub | Intel Just Launched Its SuperClaw AI Tool. INTC Stock Is Fin |
| 2026-05-24 | Industry | ⚪  0 | 1.01 | Finnhub | Why This Fund Sold $11 Million of BILL Stock Despite a $1 Bi |
| 2026-05-23 | Industry | 🟢 +1 | 0.84 | Finnhub | AMD Taiwan Bet Links 2nm Venice CPUs To Future AI Demand |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 27 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Are Wall Street Analysts Bullish on Monolithic Power Systems Stock?
- 🟢 [Analyst Action|w0.86] Needham Remains Bullish on Monolithic Power Systems (MPWR)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Are Wall Street Analysts Bullish on Monolithic Power Systems |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Needham Remains Bullish on Monolithic Power Systems (MPWR) |
| 2026-05-22 | Earnings | ⚪  0 | 2.27 | Finnhub | Monolithic Power Systems: Strong Q1, But Little Room For Err |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Pembroke Trims Position in Workiva, According to Latest SEC  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Investment Firm Sells SaaS Stock Worth $14.2 Million, Accord |
| 2026-05-20 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | Here’s What Analysts Are Saying About Monolithic Power Syste |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 30 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Is Wall Street Bullish or Bearish on Lam Research Stock?
- 🟢 [Buyback|w1.76] Lam Research Corporation Declares Quarterly Dividend
- 🟢 [Industry|w0.7] Lam Research Salzburg Lab Targets AI Packaging And Richly Valued Share

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Does Lam Research (LRCX) Have the Right Playbook for AI-Era  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Is Lam Research (LRCX) Up 16.9% Since Last Earnings Repo |
| 2026-05-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | Is Wall Street Bullish or Bearish on Lam Research Stock? |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Lam Research Salzburg Lab Targets AI Packaging And Richly Va |
| 2026-05-22 | Rumor | ⚪  0 | 0.5 | Finnhub | Market Chatter: Lam Research Plans AI-Driven Tool Upgrades,  |
| 2026-05-21 | Buyback | 🟢 +1 | 1.76 | Finnhub | Lam Research Corporation Declares Quarterly Dividend |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 13 |

**📈 Bullish Factors:**
- 🟢 [M&A|w0.98] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [Analyst Action|w0.84] Here’s Why MACOM (MTSI) is Among the 8 High Return Semiconductor Stock
- 🟢 [Analyst Action|w0.84] Barclays Maintains Overweight on MACOM Technology Solns, Raises Price 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 0.84 | Finnhub | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-22 | M&A | 🟢 +1 | 0.98 | Finnhub | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Here’s Why MACOM (MTSI) is Among the 8 High Return Semicondu |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Barclays Maintains Overweight on MACOM Technology Solns, Rai |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Photronics, IPG Photonics, AMD, KLA Corporation, and MACOM S |
| 2026-05-21 | Earnings | 🟢 +1 | 0.76 | Finnhub | MACOM Technology Solutions (MTSI) Delivered Record Revenue a |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results
- 🟢 [Analyst Action|w1.01] Coherent's AI Infrastructure Positioning Has Changed The Valuation Deb
- 🟢 [Analyst Action|w0.84] COHERENT CORP (NYSE:COHR) Dominates Minervini Screen with Perfect Tech

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.21] Coherent: Wait For Earnings To Catch Up To Valuations
- 🔴 [Industry|w0.7] Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastructure Play

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | M&A | ⚪  0 | 4.9 | Finnhub | Coherent NVIDIA Pact Links AI Optics Growth With Stretched V |
| 2026-05-25 | Industry | ⚪  0 | 0.6 | Finnhub | Q1 Earnings Roundup: Coherent (NYSE:COHR) And The Rest Of Th |
| 2026-05-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results |
| 2026-05-24 | Analyst Action | 🔴 -1 | 1.21 | Finnhub | Coherent: Wait For Earnings To Catch Up To Valuations |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | Clearfield: A Small Fiber Company With A Data Center Opportu |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Coherent's AI Infrastructure Positioning Has Changed The Val |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | COHERENT CORP (NYSE:COHR) Dominates Minervini Screen with Pe |
| 2026-05-22 | Industry | 🔴 -1 | 0.7 | Finnhub | Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastru |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.69 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 15 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.1] nVent Electric (NVT) Authorizes New $500M Share Repurchase Program
- 🟢 [Industry|w0.59] nVent Electric Plc (NYSE:NVT) Shines in Caviar Cruise Quality Screen W

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Can RFIL's Thermal Cooling Business Become Its Next Growth E |
| 2026-05-22 | Buyback | 🟢 +1 | 2.1 | Finnhub | nVent Electric (NVT) Authorizes New $500M Share Repurchase P |
| 2026-05-21 | Industry | ⚪  0 | 0.59 | Finnhub | nVent to Participate in Upcoming Investor Conference |
| 2026-05-21 | Industry | 🟢 +1 | 0.59 | Finnhub | nVent Electric Plc (NYSE:NVT) Shines in Caviar Cruise Qualit |

---

## 🟡 Cautious Long (5)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 11.44 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Is Micron Technology Stock Destined to Join the Trillion-Dollar Club T
- 🟢 [Industry|w1.19] Missed Out on the Initial AI Rally? These 3 AI Stocks Are Just Getting
- 🟢 [Industry|w1.19] IREN’s CEO Just Said 11 Words that Delivered the AI Boom a Brutal Real

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Micron: The Easy Money In This Cycle Is Behind Us

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Why Are MU, SNDK Stocks Surging In Overnight Trading? |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Here’s Why Micron (MU) is Among the 15 High Growth Stocks to |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is Micron (MU) a Solid Growth Stock? 3 Reasons to Think "Yes |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Micron (MU) is a Great Momentum Stock: Should You Buy? |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Micron (MU) is a Top Stock for the Long-Term |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Is Micron Technology Stock Destined to Join the Trillion-Dol |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Missed Out on the Initial AI Rally? These 3 AI Stocks Are Ju |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | IREN’s CEO Just Said 11 Words that Delivered the AI Boom a B |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.76 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 16 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Billionaire Philippe Laffont Is Betting Big on ASML Stock as UBS Decla
- 🟢 [M&A|w1.18] Why ASML Holding N.V. (ASML) is One of the Best Oversold Growth Stocks
- 🟢 [Industry|w1.01] This Billionaire Dumped Cloud Stocks for These New AI Stocks. Should I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | ⚪  0 | 0.6 | Finnhub | A Look At ASML Holding’s Valuation As Strong Share Price Mom |
| 2026-05-25 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Billionaire Philippe Laffont Is Betting Big on ASML Stock as |
| 2026-05-24 | Industry | 🟢 +1 | 1.01 | Finnhub | This Billionaire Dumped Cloud Stocks for These New AI Stocks |
| 2026-05-24 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | 5 big analyst AI moves: ASML, Dell and Nokia flagged as top  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones Futures: Market Bets On Iran Deal; Tesla, These Fi |
| 2026-05-23 | M&A | 🟢 +1 | 1.18 | Finnhub | Why ASML Holding N.V. (ASML) is One of the Best Oversold Gro |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones Futures: Stock Market Rebounds To Highs; Tesla, Th |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Why UBS Says ASML Is the Best Bet Among European Chip Stocks |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.74 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Is Western Digital (WDC) the Best Performing Data Center Stocks So Far
- 🟢 [Industry|w0.7] Western Digital PQC Hard Drives Put Long Term Data Security In Focus
- 🟢 [Analyst Action|w0.61] Western Digital (WDC) Is Up 0.47% in One Week: What You Should Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Is Western Digital (WDC) the Best Performing Data Center Sto |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.61 | Yahoo Fina | Western Digital (WDC) Is Up 0.47% in One Week: What You Shou |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.61 | Yahoo Fina | Brokers Suggest Investing in Western Digital (WDC): Read Thi |
| 2026-05-25 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here's How Much a $1000 Investment in Western Digital Made 1 |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Western Digital PQC Hard Drives Put Long Term Data Security  |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | SanDisk Soars 9%, Western Digital Rallies 5%, Micron Rises 3 |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Sandisk Stock Is Up 535% in 2026. That Didn’t Stop Billionai |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] TTM Technologies (TTMI) Valuation Check After Record Q1 2026 Results A
- 🟢 [Industry|w0.72] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026
- 🟢 [Industry|w0.7] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | TTM Technologies (TTMI) Valuation Check After Record Q1 2026 |
| 2026-05-23 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-22 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Is TTM (TTMI) a Solid Growth Stock? 3 Reasons to Think "Yes" |
| 2026-05-22 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Are You Looking for a Top Momentum Pick? Why TTM Technologie |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why TTM Technologies (TTMI) is a Strong Growth Stock |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | TTM TECHNOLOGIES (NASDAQ:TTMI) Screens as a High-Growth Mome |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.73 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Industry|w0.84] INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growth Momentum
- 🟢 [Analyst Action|w0.7] HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 Price Tar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Industry | 🟢 +1 | 0.84 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |
| 2026-05-22 | Analyst Action | ⚪  0 | 0.84 | Finnhub | Bernstein Initiates Coverage On Incyte with Market Perform R |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 |

---

## ⚠️ Overheated (7)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 12.24 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] The Bull Case For KLA (KLAC) Could Change Following Earnings Beat And 
- 🟢 [Earnings|w2.27] How KLA's Service Business Is Becoming a Long-Term Growth Anchor
- 🟢 [Analyst Action|w1.76] Why is KLA Corporation (KLAC) One of Louis Navellier’s Top Long-Term S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Will AutoZone, Grainger, or United Rentals Be the Next Big S |
| 2026-05-24 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | The Bull Case For KLA (KLAC) Could Change Following Earnings |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Will ASML's High-NA Rollout Strengthen AI Chip Leadership? |
| 2026-05-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | How KLA's Service Business Is Becoming a Long-Term Growth An |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | The Zacks Analyst Blog Highlights Applied Materials, Shell a |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Will GE Vernova, MercadoLibre, or NVR Be the Next Big Stock  |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Are Wall Street Analysts Bullish on KLA Corporation Stock? |
| 2026-05-21 | Industry | 🟢 +1 | 0.59 | Finnhub | Top Analyst Reports for Applied Materials, Shell & KLA |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 10.7 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Applied Digital Signed a Major Lease With a Hyperscaler for Its New Po
- 🟢 [M&A|w1.76] Applied Digital Enters Into A Long-term Lease Agreement With The Same 
- 🟢 [Industry|w1.5] Applied Digital (APLD) on All-Time High as AI Lease Revenues Hit $73B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Applied Digital Signed a Major Lease With a Hyperscaler for  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Applied Digital (APLD) Price Target Raised at Needham by $3 |
| 2026-05-23 | Industry | 🟢 +1 | 0.84 | Finnhub | Applied Digital: Massive Revenue Backlog Escalation Underway |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Finnhub | AI Race Is An Ultra Marathon, Not A Sprint |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | APLD, BE, GFS Stocks Hit 52-Week Highs: What's Driving The S |
| 2026-05-22 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Applied Digital (APLD) on All-Time High as AI Lease Revenues |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Meta, Broadcom Join $125 Million UCLA Semiconductor Research |
| 2026-05-21 | Industry | 🟢 +1 | 0.59 | Finnhub | Applied Digital Just Hit 1GW Of Contracted Capacity - Why It |

---

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 11.45 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] EnerSys (ENS) Valuation Check After Record Earnings Beat And Strong Da
- 🟢 [Earnings|w1.91] EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y
- 🟢 [Earnings|w1.91] Enersys Q4 Earnings Call Highlights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | EnerSys (ENS) Valuation Check After Record Earnings Beat And |
| 2026-05-24 | Industry | ⚪  0 | 1.01 | Finnhub | EnerSys Edge Battery Launch Meets Strong Share Momentum And  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Enersys (ENS) Soars to 52-Week High, Time to Cash Out? |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Oppenheimer Maintains Outperform on EnerSys, Raises Price Ta |
| 2026-05-21 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS a |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | ENS vs. ETN: Which Stock Is the Better Value Option? |
| 2026-05-21 | Earnings | 🟢 +1 | 1.91 | Finnhub | EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y |
| 2026-05-21 | Earnings | 🟢 +1 | 1.91 | Finnhub | Enersys Q4 Earnings Call Highlights |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.73 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Biznet Enhances Digital Infrastructure and Connectivity with Ciena
- 🟢 [Industry|w1.47] Ciena Taps Cirion NaaS To Extend Role In Cloud And AI
- 🟢 [Industry|w1.02] Here’s Why Ciena (CIEN) is Among the 10 Best Performing Data Center St

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Here’s Why Ciena (CIEN) is Among the 10 Best Performing Data |
| 2026-05-25 | Industry | 🟢 +1 | 2.98 | Finnhub | Biznet Enhances Digital Infrastructure and Connectivity with |
| 2026-05-24 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Can Ciena’s (CIEN) AI-Centric NaaS Deals Quietly Redefine It |
| 2026-05-23 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Ciena (CIEN) Valuation Check After New AI And Cloud Networki |
| 2026-05-23 | Industry | 🟢 +1 | 0.84 | Finnhub | This AI Infrastructure Stock Is Up 570% in 1 Year. Is It Tim |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | How is Ciena Advancing AI and Cloud Network Infrastructure? |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | 4 Cloud Computing Stocks Benefiting From AI-Driven Demand |
| 2026-05-21 | Industry | 🟢 +1 | 1.47 | Finnhub | Ciena Taps Cirion NaaS To Extend Role In Cloud And AI |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 12.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Stifel Raises its Price Target on Marvell Technology (MRVL)
- 🟢 [Analyst Action|w3.57] Oppenheimer Raises its Price Target on Marvell (MRVL)
- 🟢 [Analyst Action|w3.57] Citi Lifts Price Target on Marvell Technology, Inc. (MRVL)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Earnings | ⚪  0 | 1.82 | Finnhub | Dow Jones Futures Rise But Pare Gains On Mixed Iran News; Ma |
| 2026-05-26 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | 5-star analysts reset Marvell stock price target ahead of ea |
| 2026-05-25 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Stifel Raises its Price Target on Marvell Technology (MRVL) |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | The 'Next Nvidia' Trade? Why Investors Are Suddenly Watching |
| 2026-05-25 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Oppenheimer Raises its Price Target on Marvell (MRVL) |
| 2026-05-25 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citi Lifts Price Target on Marvell Technology, Inc. (MRVL) |
| 2026-05-25 | Earnings | ⚪  0 | 1.55 | Finnhub | Option Volatility And Earnings Report For May 25-29 |
| 2026-05-24 | Earnings | ⚪  0 | 1.31 | Finnhub | Home Sales, Inflation, Costco, HP, Salesforce, and More to W |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.78 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 24 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Palantir and Dell Build an AI OS for the Paranoid
- 🟢 [Analyst Action|w1.21] 5 big analyst AI moves: ASML, Dell and Nokia flagged as top picks
- 🟢 [Industry|w1.02] Dell Technologies (DELL) Unveils New AI-Ready Data Center Infrastructu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Dow Jones Futures Rise But Pare Gains On Mixed Iran News; Ma |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Dell Technologies (DELL) Unveils New AI-Ready Data Center In |
| 2026-05-25 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Dell Reports Earnings Thursday. Here's How Much Traders Expe |
| 2026-05-25 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dell Stock Has Soared Over 130% This Year: Is the AI Trade S |
| 2026-05-25 | Industry | ⚪  0 | 1.19 | Finnhub | Option Volatility And Earnings Report For May 25-29 |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Seeking Al | Earnings week ahead: ZS, CRM, SNOW, DELL, ZS, XPEV, LI, and  |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | GDP, Earnings and Other Key Things to Watch this Week |
| 2026-05-24 | Industry | 🟢 +1 | 1.01 | Finnhub | Is Dell (DELL) Quietly Recasting Its AI Moat With PowerStore |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.18 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 18 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Why Hewlett Packard Enterprise (HPE) Stock Is Trading Up Today
- 🟢 [Analyst Action|w1.76] Morgan Stanley Maintains Equal-Weight on Hewlett Packard, Raises Price
- 🟢 [Industry|w0.7] Dell Surges 15% Leading AI Server Rally; HPE Pops 9%, Super Micro Rise

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | Is It Too Late To Consider Hewlett Packard Enterprise (HPE)  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Hewlett Packard Enterprise (HPE) Stock Is Trading Up Tod |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Dell Surges 15% Leading AI Server Rally; HPE Pops 9%, Super  |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Hewlett Packard Enterprise Gartner Win Reinforces AI Network |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | IBM Rallies 8% While Oracle, Cisco, HPE Drift: Is the Laggar |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | HPE to Present Live Webcast of Investor Relations Summit at  |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Morgan Stanley Maintains Equal-Weight on Hewlett Packard, Ra |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | HPE Positioned Highest in Execution and Furthest in Vision i |

---

## ⚠️ Risk Pattern (6)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 11.44 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Is Micron Technology Stock Destined to Join the Trillion-Dollar Club T
- 🟢 [Industry|w1.19] Missed Out on the Initial AI Rally? These 3 AI Stocks Are Just Getting
- 🟢 [Industry|w1.19] IREN’s CEO Just Said 11 Words that Delivered the AI Boom a Brutal Real

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Micron: The Easy Money In This Cycle Is Behind Us

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Why Are MU, SNDK Stocks Surging In Overnight Trading? |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Here’s Why Micron (MU) is Among the 15 High Growth Stocks to |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is Micron (MU) a Solid Growth Stock? 3 Reasons to Think "Yes |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Micron (MU) is a Great Momentum Stock: Should You Buy? |
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Micron (MU) is a Top Stock for the Long-Term |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Is Micron Technology Stock Destined to Join the Trillion-Dol |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Missed Out on the Initial AI Rally? These 3 AI Stocks Are Ju |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | IREN’s CEO Just Said 11 Words that Delivered the AI Boom a B |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.76 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 16 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Billionaire Philippe Laffont Is Betting Big on ASML Stock as UBS Decla
- 🟢 [M&A|w1.18] Why ASML Holding N.V. (ASML) is One of the Best Oversold Growth Stocks
- 🟢 [Industry|w1.01] This Billionaire Dumped Cloud Stocks for These New AI Stocks. Should I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | ⚪  0 | 0.6 | Finnhub | A Look At ASML Holding’s Valuation As Strong Share Price Mom |
| 2026-05-25 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Billionaire Philippe Laffont Is Betting Big on ASML Stock as |
| 2026-05-24 | Industry | 🟢 +1 | 1.01 | Finnhub | This Billionaire Dumped Cloud Stocks for These New AI Stocks |
| 2026-05-24 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | 5 big analyst AI moves: ASML, Dell and Nokia flagged as top  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones Futures: Market Bets On Iran Deal; Tesla, These Fi |
| 2026-05-23 | M&A | 🟢 +1 | 1.18 | Finnhub | Why ASML Holding N.V. (ASML) is One of the Best Oversold Gro |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones Futures: Stock Market Rebounds To Highs; Tesla, Th |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Why UBS Says ASML Is the Best Bet Among European Chip Stocks |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.74 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Is Western Digital (WDC) the Best Performing Data Center Stocks So Far
- 🟢 [Industry|w0.7] Western Digital PQC Hard Drives Put Long Term Data Security In Focus
- 🟢 [Analyst Action|w0.61] Western Digital (WDC) Is Up 0.47% in One Week: What You Should Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Is Western Digital (WDC) the Best Performing Data Center Sto |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.61 | Yahoo Fina | Western Digital (WDC) Is Up 0.47% in One Week: What You Shou |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.61 | Yahoo Fina | Brokers Suggest Investing in Western Digital (WDC): Read Thi |
| 2026-05-25 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here's How Much a $1000 Investment in Western Digital Made 1 |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Western Digital PQC Hard Drives Put Long Term Data Security  |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | SanDisk Soars 9%, Western Digital Rallies 5%, Micron Rises 3 |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Sandisk Stock Is Up 535% in 2026. That Didn’t Stop Billionai |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] TTM Technologies (TTMI) Valuation Check After Record Q1 2026 Results A
- 🟢 [Industry|w0.72] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026
- 🟢 [Industry|w0.7] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | TTM Technologies (TTMI) Valuation Check After Record Q1 2026 |
| 2026-05-23 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-22 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Is TTM (TTMI) a Solid Growth Stock? 3 Reasons to Think "Yes" |
| 2026-05-22 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Are You Looking for a Top Momentum Pick? Why TTM Technologie |
| 2026-05-22 | Industry | 🟢 +1 | 0.7 | Finnhub | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why TTM Technologies (TTMI) is a Strong Growth Stock |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | TTM TECHNOLOGIES (NASDAQ:TTMI) Screens as a High-Growth Mome |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.73 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Industry|w0.84] INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growth Momentum
- 🟢 [Analyst Action|w0.7] HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 Price Tar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Industry | 🟢 +1 | 0.84 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |
| 2026-05-22 | Analyst Action | ⚪  0 | 0.84 | Finnhub | Bernstein Initiates Coverage On Incyte with Market Perform R |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 0.78 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 9 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Google rolls out AI-powered ad formats at Marketing Live
- 🟢 [Industry|w1.19] SMCI vs. GOOGL: Which Stock is a Safer Bet in the AI Ecosystem?
- 🟢 [Industry|w1.19] Baron Opportunity Fund Q1 2026 Portfolio Activity

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] EU plans to fine Google high triple-digit million euro sum, Handelsbla
- 🔴 [Industry|w1.19] Billionaire Stanley Druckenmiller Just Dumped Alphabet (Google) and Pi
- 🔴 [Industry|w1.19] AI Bubble Fears Grow as Big Tech Allegedly Pays Itself in Cloud Loop

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🔴 -1 | 1.19 | Finnhub | Billionaire Stanley Druckenmiller Just Dumped Alphabet (Goog |
| 2026-05-25 | Black Swan | 🔴 -1 | 4.46 | Finnhub | EU plans to fine Google high triple-digit million euro sum,  |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Google rolls out AI-powered ad formats at Marketing Live |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | SMCI vs. GOOGL: Which Stock is a Safer Bet in the AI Ecosyst |
| 2026-05-25 | Industry | ⚪  0 | 1.19 | Finnhub | Billionaire Bill Ackman Sold This Stock While Warren Buffett |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Baron Opportunity Fund Q1 2026 Portfolio Activity |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Berkshire Hathaway Just Loaded Up on This Genius Artificial  |
| 2026-05-25 | Industry | 🔴 -1 | 1.19 | Finnhub | AI Bubble Fears Grow as Big Tech Allegedly Pays Itself in Cl |

---

## 🔴 Avoid / Short (1)

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 0.78 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 9 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Google rolls out AI-powered ad formats at Marketing Live
- 🟢 [Industry|w1.19] SMCI vs. GOOGL: Which Stock is a Safer Bet in the AI Ecosystem?
- 🟢 [Industry|w1.19] Baron Opportunity Fund Q1 2026 Portfolio Activity

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] EU plans to fine Google high triple-digit million euro sum, Handelsbla
- 🔴 [Industry|w1.19] Billionaire Stanley Druckenmiller Just Dumped Alphabet (Google) and Pi
- 🔴 [Industry|w1.19] AI Bubble Fears Grow as Big Tech Allegedly Pays Itself in Cloud Loop

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🔴 -1 | 1.19 | Finnhub | Billionaire Stanley Druckenmiller Just Dumped Alphabet (Goog |
| 2026-05-25 | Black Swan | 🔴 -1 | 4.46 | Finnhub | EU plans to fine Google high triple-digit million euro sum,  |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Google rolls out AI-powered ad formats at Marketing Live |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | SMCI vs. GOOGL: Which Stock is a Safer Bet in the AI Ecosyst |
| 2026-05-25 | Industry | ⚪  0 | 1.19 | Finnhub | Billionaire Bill Ackman Sold This Stock While Warren Buffett |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Baron Opportunity Fund Q1 2026 Portfolio Activity |
| 2026-05-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Berkshire Hathaway Just Loaded Up on This Genius Artificial  |
| 2026-05-25 | Industry | 🔴 -1 | 1.19 | Finnhub | AI Bubble Fears Grow as Big Tech Allegedly Pays Itself in Cl |

---

## ⚪ Watch / Neutral (35)

### NASDAQ:INTC
- Score: 59/100 | raw: 2.38 | News: 13 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 59/100 | raw: 2.14 | News: 8 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 59/100 | raw: 2.21 | News: 2 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 59/100 | raw: 2.21 | News: 4 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 58/100 | raw: 2.02 | News: 4 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AVGO
- Score: 58/100 | raw: 3 | News: 18 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BE
- Score: 58/100 | raw: 1.91 | News: 5 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 56/100 | raw: 1.55 | News: 4 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 54/100 | raw: 1.02 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 53/100 | raw: 0.7 | News: 1 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 53/100 | raw: 0.7 | News: 2 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 53/100 | raw: 0.7 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 52/100 | raw: 0.52 | News: 4 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 52/100 | raw: 0.59 | News: 1 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 52/100 | raw: 0.59 | News: 2 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

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

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 3 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:MOD
- Score: 49/100 | raw: -0.16 | News: 5 kept / 16 dropped | No clear directional bias — stay flat

### NASDAQ:SEDG
- Score: 48/100 | raw: -0.6 | News: 1 kept / 19 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-26T08:00:42.883Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*