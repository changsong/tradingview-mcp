# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-13  |  **News Window:** 2026-05-06 ~ 2026-05-13
**Stock Pool:** us_selected.txt (52)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:GLW** | **95** | 10.82 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/33 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:ETN** | **92** | 13.16 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/31 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:HPE** | **86** | 8.73 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/30 | Overheated Sentiment (one-sided bullish) |
| 4 | **NASDAQ:RKLB** | **83** | 15.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/31 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:SPNT** | **82** | 7.63 | 🟢 Long (Strong) | Momentum / Hold | High | 7/20 | - |
| 6 | **NASDAQ:MTSI** | **81** | 18.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/18 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:VRT** | **81** | 8.17 | 🟢 Long (Strong) | Momentum / Hold | High | 8/31 | - |
| 8 | **NASDAQ:AMD** | **78** | 23.12 | 🟢 Long (Strong) | Momentum / Hold | High | 19/21 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:SM** | **78** | 10.29 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/16 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:AMAT** | **77** | 12.33 | 🟢 Long (Strong) | Momentum / Hold | High | 8/27 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:MTZ** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 10/30 | - |
| 12 | **NASDAQ:LITE** | **77** | 7.24 | 🟢 Long (Strong) | Momentum / Hold | High | 8/32 | - |
| 13 | **NASDAQ:PRDO** | **72** | 5.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/12 | - |
| 14 | **NASDAQ:EQIX** | **72** | 5.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 15 | **NYSE:DELL** | **70** | 10.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/25 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:COHR** | **69** | 4.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/32 | - |
| 17 | **NASDAQ:CPRX** | **69** | 5.21 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/21 | - |
| 18 | **NYSE:P** | **69** | 7.18 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/32 | - |
| 19 | **NASDAQ:KLAC** | **68** | 4.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/33 | - |
| 20 | **NASDAQ:ASML** | **67** | 4.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/32 | - |
| 21 | **NASDAQ:ADEA** | **67** | 4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/18 | - |
| 22 | **NASDAQ:ADI** | **67** | 4.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/31 | - |
| 23 | **NYSE:CIEN** | **67** | 4.03 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/35 | - |
| 24 | **NYSE:PWR** | **67** | 4.1 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/30 | Overheated Sentiment (one-sided bullish) |
| 25 | **NASDAQ:GEN** | **66** | 5.05 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/27 | Overheated Sentiment (one-sided bullish) |
| 26 | **NYSE:TT** | **65** | 3.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/23 | - |
| 27 | **NASDAQ:MPWR** | **65** | 3.55 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 6/23 | Overheated Sentiment (one-sided bullish) |
| 28 | **NASDAQ:POWL** | **65** | 3.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/24 | - |
| 29 | **NASDAQ:IREN** | **64** | 16.73 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 28/12 | Sentiment Strengthening UP (trend) |
| 30 | **NASDAQ:NVDA** | **64** | 15.77 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 23/17 | Sentiment Strengthening UP (trend) |
| 31 | **NASDAQ:INTC** | **63** | 8.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/24 | - |
| 32 | **CBOE:CBOE** | **63** | 9.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/24 | - |
| 33 | **NYSE:CF** | **63** | 7.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/16 | Sentiment Strengthening UP (trend) |
| 34 | **NASDAQ:MU** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/38 | - |
| 35 | **NYSE:MS** | **60** | 2.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/31 | - |
| 36 | **NYSE:AIR** | **60** | 2.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/20 | - |
| 37 | **NYSE:TSM** | **60** | 2.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/33 | - |
| 38 | **NASDAQ:APLD** | **59** | 2.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/12 | - |
| 39 | **NYSE:TRNO** | **58** | 1.83 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 40 | **NASDAQ:SANM** | **56** | 1.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 41 | **NASDAQ:INCY** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/29 | - |
| 42 | **NASDAQ:CRDO** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/38 | - |
| 43 | **NYSE:LTC** | **54** | 0.94 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/20 | - |
| 44 | **NYSE:PFS** | **51** | 0.28 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 3/20 | - |
| 45 | **NASDAQ:VSAT** | **51** | 0.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 46 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 47 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 48 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/21 | - |
| 49 | **NYSE:IRM** | **50** | -0.07 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 50 | **NYSE:MOD** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 2/23 | - |
| 51 | **NYSE:JOBY** | **43** | -2.34 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 9/19 | - |
| 52 | **NYSE:JHG** | **37** | -3.04 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/17 | - |

---

## 🟢 Strong Long (6)

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.63 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] SIRIUSPOINT LTD (NYSE:SPNT) Scores High Growth Momentum and Technical 
- 🟢 [Earnings|w1.64] SiriusPoint Ltd (SPNT) Q1 2026 Earnings Call Highlights: Strong Underw
- 🟢 [Earnings|w1.4] SiriusPoint (SPNT) Q1 Earnings Beat Estimates

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Will Stronger Underwriting And Rating Upgrades Reshape SiriusPoint's (

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Analyst Action | 🔴 -1 | 0.86 | Yahoo Fina | Will Stronger Underwriting And Rating Upgrades Reshape Siriu |
| 2026-05-11 | Earnings | 🟢 +1 | 1.09 | Finnhub | SIRIUSPOINT LTD (NYSE:SPNT) Scores High Growth Momentum and  |
| 2026-05-09 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | SiriusPoint Ltd (SPNT) Q1 2026 Earnings Call Highlights: Str |
| 2026-05-08 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | SiriusPoint (SPNT) Q1 Earnings Beat Estimates |
| 2026-05-08 | Earnings | 🟢 +1 | 1.64 | Finnhub | SiriusPoint Ltd. (SPNT) Q1 2026 Earnings Call Transcript |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | SiriusPoint Ltd (NYSE:SPNT) Beats Q1 Estimates as Underwriti |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | SiriusPoint Q1 EPS $0.82 Beats $0.71 Estimate, Sales $774.60 |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 8.17 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Vertiv Holdings Co (NYSE:VRT) Screens as a Strong GARP Candidate
- 🟢 [Analyst Action|w3.02] Evercore ISI Group Maintains Outperform on Vertiv Holdings, Raises Pri
- 🟢 [Industry|w2.52] Vertiv Names New CPO To Support AI Data Center Supply Chain

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Why Vertiv (VRT) Is Becoming More Important to AI Data Cente |
| 2026-05-12 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Vertiv Holdings Co (VRT) Among the Best Liquid Cooling Stock |
| 2026-05-12 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Vertiv Holdings (VRT) Price Target Increased by Citi to $141 |
| 2026-05-12 | Industry | 🟢 +1 | 1.01 | Finnhub | Vertiv Names New CPO To Support AI Data Center Supply Chain |
| 2026-05-12 | Industry | ⚪  0 | 1.01 | Finnhub | Vertiv to Host Investor Conference on May 19 - 20, 2026 |
| 2026-05-12 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Evercore ISI Group Maintains Outperform on Vertiv Holdings,  |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Vertiv Holdings Co (NYSE:VRT) Screens as a Strong GARP Candi |
| 2026-05-11 | Industry | ⚪  0 | 2.1 | Finnhub | Vertiv Holdings Co. (VRT) is Attracting Investor Attention:  |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 23.12 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] AMD's Next Leg Higher Has Already Started
- 🟢 [Earnings|w3.87] Power Integrations, Himax, Penguin Solutions, KLA Corporation, and AMD
- 🟢 [Analyst Action|w3.02] Was Advanced Micro Devices (AMD) One of the Top “Blue Chip” Stocks Sud

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.9] AMD Has Flipped Nvidia: Time To Sell (Rating Downgrade)
- 🔴 [Industry|w0.75] AMD Goes Vertical, And My Warning Bells Go Off

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Nvidia vs. AMD: The Better AI Chip Stock for 2026 |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | How AMD (AMD) Is Expanding Its Role in Enterprise AI Infrast |
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | Market Analysis: Advanced Micro Devices And Competitors In S |
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD Green Hills Alliance Targets Safety Certified AI Edge Gr |
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel, AMD, Qualcomm Stocks Rise as AI Chip Rally Reignites |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | AMD's Next Leg Higher Has Already Started |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | Power Integrations, Himax, Penguin Solutions, KLA Corporatio |
| 2026-05-13 | Earnings | ⚪  0 | 3.87 | Finnhub | Penguin Solutions (PENG) Stock Is Trending Overnight: Here's |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 12.33 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 27 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] How To Earn $500 A Month From Applied Materials Stock Ahead Of Q2 Earn
- 🟢 [Earnings|w3.28] Applied Materials Poised for Slight Quarterly Beat, Strong Outlook, RB
- 🟢 [Analyst Action|w3.02] Citigroup Maintains Buy on Applied Materials, Raises Price Target to $

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | How Applied Materials (AMAT) Is Deepening Its Role in AI Chi |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | How To Earn $500 A Month From Applied Materials Stock Ahead  |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | EPIC AI Chip R&D Alliance Might Change The Case For Investin |
| 2026-05-12 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | What Makes Applied Materials (AMAT) a Strong Momentum Stock: |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Applied Materials Poised for Slight Quarterly Beat, Strong O |
| 2026-05-12 | Earnings | ⚪  0 | 3.28 | Finnhub | Applied Materials to Benefit From AI, Memory Demand in Fisca |
| 2026-05-12 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup Maintains Buy on Applied Materials, Raises Price T |
| 2026-05-11 | Earnings | ⚪  0 | 2.73 | Finnhub | Applied Materials makes unexpected AI move as demand explode |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] MasTec: A Great Infrastructure Story, With An Expensive Entry Price
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Maintains Overweight on MasTec, Raises Price Target 
- 🟢 [Analyst Action|w1.51] Stifel Raises its Price Target on MasTec (MTZ) to $455

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] MasTec: High Possibility Of Margin Compression

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 1.19 | Finnhub | MasTec: A Great Infrastructure Story, With An Expensive Entr |
| 2026-05-12 | Earnings | 🔴 -1 | 1.31 | Finnhub | MasTec: High Possibility Of Margin Compression |
| 2026-05-12 | Industry | ⚪  0 | 1.01 | Finnhub | MasTec to Host Investor Day in New York City Today at 8:45 A |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Cantor Fitzgerald Maintains Overweight on MasTec, Raises Pri |
| 2026-05-09 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Stifel Raises its Price Target on MasTec (MTZ) to $455 |
| 2026-05-08 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Here's Why MasTec (MTZ) is a Strong Momentum Stock |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Finnhub | Can MasTec's Pipeline Business Return to $3.5B in Revenues b |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Finnhub | Jim Cramer on MasTec: “It’s Such a Great One for the Data Ce |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 7.24 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 32 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Lumentum Stock Rises 6% After Q3 Earnings: Should You Hold or Fold?
- 🟢 [Industry|w2.52] 3 Optical Component Giants in Focus on Massive AI Data Center Growth
- 🟢 [Industry|w2.52] Lumentum: Nvidia Doesn't Write $2 Billion Checks For Fun

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 0.43 | Yahoo Fina | Is It Too Late To Consider Lumentum Holdings (LITE) After A  |
| 2026-05-12 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Why Lumentum (LITE) is a Top Momentum Stock for the Long-Ter |
| 2026-05-12 | Industry | ⚪  0 | 0.5 | Finnhub | Which Optics Stock Has Dominated in 2026: Applied Optoelectr |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Lumentum Stock Rises 6% After Q3 Earnings: Should You Hold o |
| 2026-05-12 | Industry | 🟢 +1 | 1.01 | Finnhub | 3 Optical Component Giants in Focus on Massive AI Data Cente |
| 2026-05-12 | Industry | ⚪  0 | 2.52 | Finnhub | Lumentum: AI Photonics And Optics Are The Next Bottleneck |
| 2026-05-12 | Industry | ⚪  0 | 2.52 | Finnhub | Lumentum AI pivot triggers massive Nasdaq 100 shakeup |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum: Nvidia Doesn't Write $2 Billion Checks For Fun |

---

## 🟢 Mid Long (20)

### NASDAQ:PRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 12 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.36] Perdoceo Education Q1 Adj. EPS $0.90 Beats $0.84 Estimate, Sales $221.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | ⚪  0 | 0.86 | Yahoo Fina | PRDO or UTI: Which Is the Better Value Stock Right Now? |
| 2026-05-07 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Perdoceo Education (PRDO) Surpasses Q1 Earnings and Revenue  |
| 2026-05-07 | Earnings | ⚪  0 | 0.54 | Finnhub | Perdoceo Education Corporation (PRDO) Q1 2026 Earnings Call  |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | Perdoceo Education Sees Q2 GAAP EPS $0.74-$0.75 vs $0.71 Est |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | Perdoceo Education Sees Q2 Adj EPS $0.79-$0.80 vs $0.76 Est |
| 2026-05-07 | Earnings | ⚪  0 | 1.36 | Finnhub | Perdoceo Education Raises FY2026 Adj EPS Guidance from $2.97 |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | Perdoceo Education Q1 Adj. EPS $0.90 Beats $0.84 Estimate, S |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Is Equinix (EQIX) a Solid Growth Stock? 3 Reasons to Think "Yes"
- 🟢 [Industry|w1.26] Is It Too Late To Consider Equinix (EQIX) After A 39.6% Year To Date R
- 🟢 [Analyst Action|w1.26] Mizuho Maintains Outperform on Equinix, Raises Price Target to $1200

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Market Digest: NVO, EQIX, PCG, WEN, DOW, CRWV |
| 2026-05-11 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is Equinix (EQIX) a Solid Growth Stock? 3 Reasons to Think " |
| 2026-05-09 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Is It Too Late To Consider Equinix (EQIX) After A 39.6% Year |
| 2026-05-07 | Industry | 🟢 +1 | 0.9 | Yahoo Fina | Equinix (EQIX) Just Flashed Golden Cross Signal: Do You Buy? |
| 2026-05-07 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Mizuho Maintains Outperform on Equinix, Raises Price Target  |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Mizuho Hikes Dell Price Target to $300 as Agentic AI Server Demand Pow
- 🟢 [Earnings|w3.28] The Zacks Analyst Blog  Cisco, Arista Networks, Dell and Hewlett
- 🟢 [Analyst Action|w3.02] Mizuho Maintains Outperform on Dell Technologies, Raises Price Target 

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] When The President Names Your Stock: Lessons From Intel And Dell

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Virtana Extends AI Factory Observability to the Dell AI Fact |
| 2026-05-13 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Dell Shares Tank After UBS Warns AI Boom May Already Be Pric |
| 2026-05-13 | Industry | 🟢 +1 | 1.19 | Finnhub | How AMD (AMD) Is Expanding Its Role in Enterprise AI Infrast |
| 2026-05-12 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Why Is Dell (DELL) Stock Soaring Today |
| 2026-05-12 | Industry | 🟢 +1 | 0.43 | Yahoo Fina | MSFT, DELL And Intel: Which Is The Better Buy |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Mizuho Hikes Dell Price Target to $300 as Agentic AI Server  |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | Is It Too Late To Consider Dell (DELL) After AI-Fueled Share |
| 2026-05-12 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Mizuho Maintains Outperform on Dell Technologies, Raises Pri |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 32 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Coherent Stock Climbs 171% in 6 Months: Should You Buy Now or Wait?
- 🟢 [Industry|w2.52] 3 Optical Component Giants in Focus on Massive AI Data Center Growth
- 🟢 [Analyst Action|w2.52] This Analyst Just Raised the Price Target on Coherent Stock by 50%. Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Here's How Much $100 Invested In Coherent 20 Years Ago Would |
| 2026-05-12 | Industry | ⚪  0 | 1.01 | Finnhub | Which Optics Stock Has Dominated in 2026: Applied Optoelectr |
| 2026-05-12 | Buyback | 🟢 +1 | 1.21 | Finnhub | Coherent Stock Climbs 171% in 6 Months: Should You Buy Now o |
| 2026-05-12 | Industry | 🟢 +1 | 1.01 | Finnhub | 3 Optical Component Giants in Focus on Massive AI Data Cente |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | This Analyst Just Raised the Price Target on Coherent Stock  |
| 2026-05-07 | Earnings | ⚪  0 | 0.97 | Seeking Al | Coherent Corp. (COHR) Q3 2026 Earnings Call Transcript |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.21 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M Estimate.
- 🟢 [Earnings|w2.73] Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Fundamental Rat
- 🟢 [Analyst Action|w1.26] Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal-Weight

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.51] Citigroup Downgrades Catalyst Pharmaceuticals to Neutral, Lowers Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Catalyst (CPRX) Q1 Earnings: Taking a Look at Key Metrics Ve |
| 2026-05-11 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Surpasses Q1 Earnings and Rev |
| 2026-05-11 | Earnings | 🟢 +1 | 2.73 | Finnhub | Catalyst Pharmaceuticals Q1 Sales $149.390M Beat $148.174M E |
| 2026-05-11 | Earnings | 🟢 +1 | 2.73 | Finnhub | Catalyst Pharmaceuticals Inc (NASDAQ:CPRX) Scores 7/10 Funda |
| 2026-05-08 | Analyst Action | 🔴 -1 | 1.51 | Finnhub | Citigroup Downgrades Catalyst Pharmaceuticals to Neutral, Lo |
| 2026-05-07 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal- |
| 2026-05-07 | Industry | ⚪  0 | 1.05 | Finnhub | CPRX Stock Alert: Halper Sadeh LLC is Investigating Whether  |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 7.18 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 32 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Everpure Q1 Earnings Preview: Further Price Increases And Hyperscale C
- 🟢 [Industry|w2.55] Alphabet is the top holding of this five-star fund that is also findin
- 🟢 [Industry|w2.1] S&P 500 Tops 7,400 As Copper Hits Record Highs: Stock Market Today

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Stock Market Today: Wholesale Prices Flash Another Sign of Inflation H

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 2.55 | MarketWatc | Alphabet is the top holding of this five-star fund that is a |
| 2026-05-13 | Industry | 🔴 -1 | 2.55 | MarketWatc | Stock Market Today: Wholesale Prices Flash Another Sign of I |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | MarketWatc | U.S. Stock Futures Advance, Global Markets Gain |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Everpure (P) Moves 11.8% Higher: Will This Strength Last? |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Is Everpure (P) Quietly Reshaping Its AI Moat With Deeper Re |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Everpure Q1 Earnings Preview: Further Price Increases And Hy |
| 2026-05-11 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is It Too Late To Consider Everpure (P) After Its 63.7% One  |
| 2026-05-11 | Industry | 🟢 +1 | 2.1 | Finnhub | S&P 500 Tops 7,400 As Copper Hits Record Highs: Stock Market |

---

### NASDAQ:KLAC

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
- 🟢 [Earnings|w1.64] How Investors Are Reacting To KLA (KLAC) Stock Split, Dividend Hike an
- 🟢 [Earnings|w1.36] KLA Corporation Announces Ten-to-One Stock Split and Quarterly Cash Di
- 🟢 [Industry|w1.26] Wall Street Bulls Look Optimistic About KLA (KLAC): Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Why KLA (KLAC) Remains a Process-Control Play on AI Chip Com |
| 2026-05-12 | Earnings | ⚪  0 | 3.28 | Finnhub | Forget the Split: KLA’s 17th Straight Dividend Raise Is the  |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Finnhub | Wall Street Bulls Look Optimistic About KLA (KLAC): Should Y |
| 2026-05-08 | Earnings | 🟢 +1 | 1.64 | Finnhub | How Investors Are Reacting To KLA (KLAC) Stock Split, Divide |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | KLA Corporation Announces Ten-to-One Stock Split and Quarter |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 32 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Truly Unique AI Powerhouse Etches Buy Zone. Now Comes This Test.
- 🟢 [Industry|w1.75] Assessing ASML Holding (NasdaqGS:ASML) Valuation After Strong Multi Ye

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] Nvidia Defies the Decline in Chip Stocks

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Why ASML (ASML) Remains a Key Bottleneck Play in the AI Chip |
| 2026-05-13 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Apple Intel Foundry Talks Put ASML At Center Of Chip Shift |
| 2026-05-13 | Industry | 🟢 +1 | 1.19 | Finnhub | Truly Unique AI Powerhouse Etches Buy Zone. Now Comes This T |
| 2026-05-12 | Industry | 🔴 -1 | 1.01 | Finnhub | Nvidia Defies the Decline in Chip Stocks |
| 2026-05-11 | Buyback | 🟢 +1 | 2.16 | Yahoo Fina | ASML reports transactions under its current share buyback pr |
| 2026-05-11 | Earnings | ⚪  0 | 2.73 | Finnhub | Cramer Says Don't Chase ASML After $75 Jump—Wait For A Dip T |
| 2026-05-10 | Industry | 🟢 +1 | 1.75 | Finnhub | Assessing ASML Holding (NasdaqGS:ASML) Valuation After Stron |

---

### NASDAQ:ADEA

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: Here's is
- 🟢 [Earnings|w1.4] Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO Transition 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | What Adeia's Renewed Google Agreement Means For The Stock |
| 2026-05-11 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Wall Street Analysts Believe Adeia (ADEA) Could Rally 25.3%: |
| 2026-05-11 | Industry | ⚪  0 | 0.36 | Yahoo Fina | Is ADEIA INC (ADEA) Stock Outpacing Its Business Services Pe |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO T |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 31 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Oppenheimer Maintains Outperform on Analog Devices, Raises Price Targe
- 🟢 [Industry|w1.05] 4 Solid Stocks to Buy as AI Powers Steady Semiconductor Sales

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Oppenheimer Maintains Outperform on Analog Devices, Raises P |
| 2026-05-11 | Analyst Action | ⚪  0 | 2.16 | Yahoo Fina | Analog Devices (ADI) Outperforms Broader Market: What You Ne |
| 2026-05-10 | Rumor | ⚪  0 | 1.05 | Finnhub | Analog Devices Insiders Sold US$16m Of Shares Suggesting Hes |
| 2026-05-07 | Industry | ⚪  0 | 1.05 | Finnhub | Analog Devices, Inc. (ADI) Hit a 52 Week High, Can the Run C |
| 2026-05-07 | Industry | ⚪  0 | 1.05 | Finnhub | Analog Devices, Inc. (ADI) Is a Trending Stock: Facts to Kno |
| 2026-05-07 | Industry | 🟢 +1 | 1.05 | Finnhub | 4 Solid Stocks to Buy as AI Powers Steady Semiconductor Sale |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.03 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 35 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Assessing Ciena (CIEN) Valuation After Analyst Upgrades And AI Infrast
- 🟢 [Industry|w1.26] Is It Too Late To Consider Ciena (CIEN) After A 119% Year To Date Surg
- 🟢 [Industry|w1.26] The Zacks Analyst Blog Highlights Micron Technology, Ciena, Seagate Te

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-09 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Is It Too Late To Consider Ciena (CIEN) After A 119% Year To |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Finnhub | Did Fresh Analyst Coverage and AI Optics Buzz Just Shift Cie |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Assessing Ciena (CIEN) Valuation After Analyst Upgrades And  |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Finnhub | The Zacks Analyst Blog Highlights Micron Technology, Ciena,  |

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
| News Kept / Dropped | 4 / 23 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] KeyBanc Raises PT on Trane Technologies (TT), Maintains an Overweight 
- 🟢 [Industry|w1.47] Trane Technologies plc (TT) Presents at Oppenheimer 21st Annual Indust

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | KeyBanc Raises PT on Trane Technologies (TT), Maintains an O |
| 2026-05-10 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | What Trane Technologies (TT)'s Upgraded 2026 Earnings Outloo |
| 2026-05-09 | Industry | 🟢 +1 | 0.59 | Finnhub | Trane Technologies plc (TT) Presents at Oppenheimer 21st Ann |
| 2026-05-07 | Industry | ⚪  0 | 0.36 | Yahoo Fina | JBTM or TT: Which Is the Better Value Stock Right Now? |

---

### NASDAQ:POWL

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Powell Industries Q2 Review: Still A Long Growth Runway, But I'm Not A
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Maintains Neutral on Powell Industries, Raises Price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Powell Industries (POWL) Price Target Increased to $360 by J |
| 2026-05-11 | Earnings | 🟢 +1 | 2.73 | Finnhub | Powell Industries Q2 Review: Still A Long Growth Runway, But |
| 2026-05-11 | Analyst Action | ⚪  0 | 1.01 | Finnhub | Cantor Fitzgerald Maintains Neutral on Powell Industries, Ra |
| 2026-05-08 | Industry | ⚪  0 | 0.22 | Yahoo Fina | Powell Industries, Inc. (POWL) Is a Trending Stock: Facts to |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 8.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Is SoundHound AI Stock a Buy on the Dip as Revenue Continues to Soar?
- 🟢 [Earnings|w3.87] Intel Slips Despite $80 Billion CPU Market Forecast, Apple Manufacturi
- 🟢 [Industry|w2.98] Intel, AMD, Qualcomm Stocks Rise as AI Chip Rally Reignites

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Intel Has Tripled in 2026. The Sell in May Case for the Year’s Biggest
- 🔴 [Analyst Action|w1.08] Intel: Get Out Before The Hype Ends (Rating Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Intel Stock Surges As Jensen Huang Joins Trump's China Trip  |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Stock Market Today: Dow Falls Amid Hot Inflation, Trump-Xi S |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Dow Jones Futures: Nvidia's Huang Joins Trump's China Trip;  |
| 2026-05-13 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Intel Has Tripled in 2026. The Sell in May Case for the Year |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | Is SoundHound AI Stock a Buy on the Dip as Revenue Continues |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Zacks Value Trader Highlights: Intel, Micron and Caterpillar |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | Intel Slips Despite $80 Billion CPU Market Forecast, Apple M |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Fourier Highlights System Level Integration Shift at 2026 Ad |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 9.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 24 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Leverage Shares by Themes Targets Market Movers Across Tech and Indust
- 🟢 [Industry|w2.52] AI super rally has retail investors acting the most aggressive since t
- 🟢 [Earnings|w2.27] Evaluating Cboe Global Markets (CBOE) After Q1 Earnings Beat And Busin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | How Recent Analyst Revisions Are Reshaping The Narrative For |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Abaxx Appoints Jeff Currie as Executive Co-Chairman of Abaxx |
| 2026-05-13 | Policy | ⚪  0 | 3.57 | Finnhub | Verano Submits DEA Registration Applications for State-Licen |
| 2026-05-12 | Industry | ⚪  0 | 2.52 | Finnhub | Onco-Innovations Announces Initiation of Research Collaborat |
| 2026-05-12 | Industry | ⚪  0 | 2.52 | Finnhub | DRAM ETF Drops 5% as Memory Trade Cools After Parabolic Run |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | Leverage Shares by Themes Targets Market Movers Across Tech  |
| 2026-05-12 | Earnings | ⚪  0 | 3.28 | Finnhub | Abaxx Announces First Quarter 2026 Earnings and Business Upd |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | AI super rally has retail investors acting the most aggressi |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 7.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Scotiabank Maintains Sector Perform on CF Industries Holdings, Raises 
- 🟢 [Industry|w2.16] Here's Why CF Industries (CF) is a Strong Momentum Stock
- 🟢 [Industry|w1.8] CF Industries Positioned for Strong Cash Generation in 2026, RBC Says

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.26] CF Industries: The Iran Premium Is A Double-Edged Sword (Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Transcript : CF Industries Holdings, Inc. Presents at 21st A |
| 2026-05-12 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Here's Why CF Industries (CF) is a Strong Momentum Stock |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Analyst Report: CF Industries Holdings, Inc. |
| 2026-05-11 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | CF Industries Positioned for Strong Cash Generation in 2026, |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Scotiabank Adjusts CF Industries Price Target to $120 From $ |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Yahoo Fina | How The CF Industries (CF) Investment Story Is Shifting With |
| 2026-05-11 | Industry | ⚪  0 | 1.8 | Yahoo Fina | CF Industries Repositions For Nitrogen Supply Shocks And Low |
| 2026-05-11 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Scotiabank Maintains Sector Perform on CF Industries Holding |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 38 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Why Micron Technology (MU) Matters Beyond Memory in the AI Infrastruct
- 🟢 [Industry|w2.98] In-Depth Analysis: Micron Technology Versus Competitors In Semiconduct

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | Why Micron Technology (MU) Matters Beyond Memory in the AI I |
| 2026-05-13 | Industry | ⚪  0 | 1.19 | Finnhub | In-Depth Analysis: Micron Technology Versus Competitors In S |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 31 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Morgan Stanley (NYSE:MS) Scores Perfect Technical Rating as Breakout S
- 🟢 [Industry|w2.1] Morgan Stanley (MS) is a Top Dividend Stock Right Now: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Citi Raises Morgan Stanley (MS) Price Target Following Cover |
| 2026-05-12 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Investors Heavily Search Morgan Stanley (MS): Here is What Y |
| 2026-05-12 | Industry | 🟢 +1 | 1.01 | Finnhub | Morgan Stanley (NYSE:MS) Scores Perfect Technical Rating as  |
| 2026-05-11 | Industry | 🟢 +1 | 0.42 | Finnhub | Morgan Stanley (MS) is a Top Dividend Stock Right Now: Shoul |

---

### NYSE:AIR

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] AAR Corp (NYSE:AIR) Meets All Minervini Trend Template Conditions for 
- 🟢 [Industry|w1.5] A Look At AAR (AIR) Valuation After Recent Share Price Pullback And St
- 🟢 [Industry|w1.26] Is It Too Late To Consider AAR (AIR) After Its Strong Multi Year Share

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | ⚪  0 | 1.01 | Finnhub | AAR Corp. (AIR) Analyst/Investor Day - Slideshow |
| 2026-05-12 | Earnings | 🟢 +1 | 1.31 | Finnhub | AAR Corp (NYSE:AIR) Meets All Minervini Trend Template Condi |
| 2026-05-10 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | A Look At AAR (AIR) Valuation After Recent Share Price Pullb |
| 2026-05-09 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is It Too Late To Consider AAR (AIR) After Its Strong Multi  |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 33 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] TSM (NYSE:TSM) Shows Strong High Growth Momentum with Perfect Technica

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why TSMC’s (TSM) Advanced Nodes Keep It Central to the AI Ch |
| 2026-05-12 | Earnings | 🟢 +1 | 1.31 | Finnhub | TSM (NYSE:TSM) Shows Strong High Growth Momentum with Perfec |

---

## 🟡 Cautious Long (5)

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.1 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Quanta's Mission-Critical Strategy Outrun Economic Slowdowns?
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Maintains Overweight on Quanta Services, Raises Pric
- 🟢 [Industry|w1.5] Is It Too Late To Consider Quanta Services (PWR) After Its Strong Shar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | 🟢 +1 | 0.66 | Finnhub | Can Quanta's Mission-Critical Strategy Outrun Economic Slowd |
| 2026-05-11 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Quanta (PWR) Shares Up After It Was Called A “Hidden Giant” |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Cantor Fitzgerald Maintains Overweight on Quanta Services, R |
| 2026-05-10 | Industry | 🟢 +1 | 0.3 | Yahoo Fina | Is It Too Late To Consider Quanta Services (PWR) After Its S |
| 2026-05-09 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Quanta (PWR): The Best Construction Stock for Data Center In |
| 2026-05-08 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Looking for a Growth Stock? 3 Reasons Why Quanta Services (P |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Finnhub | Are You Looking for a Top Momentum Pick? Why Quanta Services |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Finnhub | Is Quanta Services (PWR) Stock Outpacing Its Construction Pe |

---

### NASDAQ:GEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.05 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] RBC Capital Maintains Sector Perform on Gen Digital, Raises Price Targ
- 🟢 [Analyst Action|w1.51] Barclays Maintains Equal-Weight on Gen Digital, Raises Price Target to
- 🟢 [Analyst Action|w1.51] Evercore ISI Group Maintains Outperform on Gen Digital, Raises Price T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Gen Digital Bets On AI Browser Security To Support Norton Ec |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Gen Digital Inc. Q4 2026 Earnings Call Summary |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Gen Digital Q4 Earnings Call Highlights |
| 2026-05-08 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | RBC Capital Maintains Sector Perform on Gen Digital, Raises  |
| 2026-05-08 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Barclays Maintains Equal-Weight on Gen Digital, Raises Price |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Evercore ISI Group Maintains Outperform on Gen Digital, Rais |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Finnhub | Gen Digital Inc. 2026 Q4 - Results - Earnings Call Presentat |
| 2026-05-08 | Earnings | 🟢 +1 | 1.17 | Seeking Al | Gen outlines FY27 8%-10% revenue growth and $2.85-$2.95 EPS, |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.55 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Monolithic Power (MPWR) is a Great Momentum Stock: Should You Buy?
- 🟢 [Analyst Action|w1.51] Raymond James Raises its Price Target on Monolithic Power (MPWR)
- 🟢 [Industry|w1.5] A Look At Monolithic Power Systems (MPWR) Valuation After A Strong Mul

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-12 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |
| 2026-05-10 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | A Look At Monolithic Power Systems (MPWR) Valuation After A  |
| 2026-05-09 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Raymond James Raises its Price Target on Monolithic Power (M |
| 2026-05-07 | Earnings | 🟢 +1 | 0.47 | Yahoo Fina | Surging Earnings Estimates Signal Upside for Monolithic (MPW |
| 2026-05-07 | Industry | ⚪  0 | 1.05 | Finnhub | Monolithic Stock Rises 158.2% in the Past Year: How to Play  |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 16.73 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 28 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Macquarie Raises Price Target on Iren to $90 From $77, Keeps Outperfor
- 🟢 [Earnings|w2.73] Twilio To Rally Over 25%? Here Are 10 Top Analyst Forecasts For Monday
- 🟢 [Earnings|w2.73] Market-Moving News for May 11th

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Evaluating IREN Against Peers In Software Industry |
| 2026-05-13 | Earnings | ⚪  0 | 3.87 | Finnhub | IREN: Microsoft And Nvidia Aren't Enough To Outrun The Dilut |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Can NVIDIA Partnership Help IREN Reach $3.7B AI Cloud ARR Ta |
| 2026-05-12 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Blockspace: IREN’s $2.3B Note Offering, STRC Comes to DeFi,  |
| 2026-05-12 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Macquarie Raises Price Target on Iren to $90 From $77, Keeps |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Iren Prices Upsized $2.6 Billion Private Debt Offering; Shar |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Why IREN (IREN) Is Up 11.5% After Striking A US$3.4 Billion  |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | What's Going On With IREN Stock Tuesday? |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 15.77 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] It’s a Growth Stock World—and Nothing Is Going to Change That
- 🟢 [Industry|w2.98] AI chip stocks surge again as Nvidia’s Huang joins Trump on visit to C
- 🟢 [Industry|w2.98] Wolfspeed Stock Jumps 23% as Power Chip Rally Rolls On

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Stock Market Today: Dow Jones Futures Fall, Nasdaq Gains As Trump Take
- 🔴 [Earnings|w1.95] Nvidia Stock: Reasons For Short-Term Caution Into Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Veteran Analyst Firm Resets Nvidia Stock Price Target Ahead  |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | US Equity Futures Mixed Pre-Bell as Nvidia Stock Rises Ahead |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Stock Market Today: Dow Falls Amid Hot Inflation, Trump-Xi S |
| 2026-05-13 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Stock Market Today: Dow Jones Futures Fall, Nasdaq Gains As  |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | This $13 Nvidia-Backed Artificial Intelligence (AI) Stock Ju |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Nvidia vs. AMD: The Better AI Chip Stock for 2026 |
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | AI chip stocks surge again as Nvidia’s Huang joins Trump on  |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Nvidia stock rises as Jensen Huang joins Trump China trip |

---

## ⚠️ Overheated (6)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 10.82 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 33 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Mizuho Maintains Outperform on Corning, Raises Price Target to $220
- 🟢 [Industry|w2.52] Corning Surges 137.4% Year to Date: How to Play the Stock
- 🟢 [Industry|w2.52] 3 Optical Component Giants in Focus on Massive AI Data Center Growth

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | Corning Surges 137.4% Year to Date: How to Play the Stock |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | 3 Optical Component Giants in Focus on Massive AI Data Cente |
| 2026-05-12 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Mizuho Maintains Outperform on Corning, Raises Price Target  |
| 2026-05-10 | Analyst Action | 🟢 +1 | 1.5 | Seeking Al | Corning Incorporated (GLW) Discusses Upgrade and Extension o |
| 2026-05-09 | Analyst Action | 🟢 +1 | 1.26 | Seeking Al | Corning Incorporated (GLW) Discusses Upgrade and Extension o |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 13.16 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 31 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benefiting from
- 🟢 [Earnings|w2.81] KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Rating
- 🟢 [Earnings|w2.81] A Look At Eaton (ETN) Valuation After Raised 2026 Guidance And AI Data

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrast |
| 2026-05-12 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | KeyBanc Raises PT on Eaton Corporation (ETN), Keeps a Buy Ra |
| 2026-05-12 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At Eaton (ETN) Valuation After Raised 2026 Guidance A |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Is Eaton Corp. (ETN) One of the Best Industrial Stocks Benef |
| 2026-05-08 | Industry | 🟢 +1 | 1.26 | Finnhub | Jim Cramer on Eaton: “Just Go Buy That One” |
| 2026-05-08 | Earnings | 🟢 +1 | 1.64 | Finnhub | Eaton (ETN) Is Down 7.8% After Raising 2026 Guidance Amid Ma |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | Eaton’s Record Quarter And Deals Reshape Focus On Electrific |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.73 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know
- 🟢 [Industry|w1.8] Here's Why Hewlett Packard Enterprise (HPE) is a Strong Growth Stock
- 🟢 [Industry|w1.47] Is It Too Late To Consider Hewlett Packard Enterprise (HPE) After Its 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | HPE Delivers Unified Private Clouds and Data Platforms to Ac |
| 2026-05-12 | Industry | 🟢 +1 | 1.01 | Finnhub | Hewlett Packard Enterprise Doubles Down On AI Networking And |
| 2026-05-11 | Industry | 🟢 +1 | 0.36 | Yahoo Fina | Here's Why Hewlett Packard Enterprise (HPE) is a Strong Grow |
| 2026-05-11 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | HPE Introduces Industry-First 64 TB Memory Server for SAP Cl |
| 2026-05-11 | Earnings | ⚪  0 | 0.94 | Yahoo Fina | HPE to Present Live Audio Webcast of Fiscal 2026 Second Quar |
| 2026-05-11 | Earnings | 🟢 +1 | 2.73 | Finnhub | Buy Cisco Stock Ahead of Q3 Earnings? Here's What to Know |
| 2026-05-09 | Industry | 🟢 +1 | 1.47 | Finnhub | Is It Too Late To Consider Hewlett Packard Enterprise (HPE)  |
| 2026-05-07 | Earnings | 🟢 +1 | 1.36 | Finnhub | Hewlett Packard (HPE) Expands ProLiant Edge Portfolio for AI |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 15.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 31 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Rocket Lab: The Stock Is More Expensive Now, But I've Still Decided To
- 🟢 [Earnings|w3.32] RKLB Q1 Deep Dive: Space Systems Expansion, Neutron Progress, and Reco
- 🟢 [Earnings|w3.28] Why Is Rocket Lab Stock Falling On Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Rocket Lab (RKLB) Stock Trades Up, Here Is Why |
| 2026-05-13 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | RKLB Q1 Deep Dive: Space Systems Expansion, Neutron Progress |
| 2026-05-13 | Earnings | 🟢 +1 | 3.87 | Finnhub | Rocket Lab: The Stock Is More Expensive Now, But I've Still  |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | Rocket Lab's Rally Changes Everything For Investors |
| 2026-05-12 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Is Rocket Lab Stock Falling On Tuesday? |
| 2026-05-11 | Industry | ⚪  0 | 2.1 | Finnhub | Stock Of The Day: Did Rocket Lab Break Out Again? |
| 2026-05-11 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Needham Maintains Buy on Rocket Lab, Raises Price Target to  |
| 2026-05-09 | Earnings | ⚪  0 | 1.91 | Finnhub | Rocket Lab Corporation (RKLB) Q1 2026 Earnings Call Transcri |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 18.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Growth, Guida
- 🟢 [Analyst Action|w2.16] Northland Raises its Price Target on MACOM Technology (MTSI) to $375
- 🟢 [Earnings|w1.64] A Look At MACOM Technology Solutions Holdings (MTSI) Valuation After S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Don't Overlook M/A-Com (MTSI) International Revenue Trends W |
| 2026-05-12 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | MTSI Q2 Deep Dive: Data Center and Defense Demand Propel Gro |
| 2026-05-11 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Northland Raises its Price Target on MACOM Technology (MTSI) |
| 2026-05-11 | Earnings | ⚪  0 | 2.73 | Finnhub | MACOM Technology: A Showcase Of AI Momentum |
| 2026-05-09 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Here's What Key Metrics Tell Us About M/A-Com (MTSI) Q2 Earn |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | JP Morgan Maintains Neutral on MACOM Technology Solns, Raise |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Truist Securities Maintains Buy on MACOM Technology Solns, R |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 10.29 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Truist Securities Maintains Buy on SM Energy, Raises Price Target to $
- 🟢 [Analyst Action|w2.52] Susquehanna Maintains Neutral on SM Energy, Raises Price Target to $31
- 🟢 [Earnings|w2.34] SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Production

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Earnings Estimates Rising for SM Energy (SM): Will It Gain? |
| 2026-05-12 | Industry | ⚪  0 | 0.43 | Yahoo Fina | Are Oils-Energy Stocks Lagging  SM Energy (SM) This Year? |
| 2026-05-12 | Industry | ⚪  0 | 0.43 | Yahoo Fina | SM Energy Company (SM) Is a Trending Stock: Facts to Know Be |
| 2026-05-12 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Truist Securities Maintains Buy on SM Energy, Raises Price T |
| 2026-05-11 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | SM Energy Q1 Earnings Beat on Higher Oil-Equivalent Producti |
| 2026-05-11 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Susquehanna Maintains Neutral on SM Energy, Raises Price Tar |
| 2026-05-10 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Is It Too Late To Consider SM Energy (SM) After Its Strong Y |
| 2026-05-09 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Assessing SM Energy (SM) Valuation After Merger Synergies Ea |

---

## ⚠️ Risk Pattern (5)

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.1 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Quanta's Mission-Critical Strategy Outrun Economic Slowdowns?
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Maintains Overweight on Quanta Services, Raises Pric
- 🟢 [Industry|w1.5] Is It Too Late To Consider Quanta Services (PWR) After Its Strong Shar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Earnings | 🟢 +1 | 0.66 | Finnhub | Can Quanta's Mission-Critical Strategy Outrun Economic Slowd |
| 2026-05-11 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Quanta (PWR) Shares Up After It Was Called A “Hidden Giant” |
| 2026-05-11 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Cantor Fitzgerald Maintains Overweight on Quanta Services, R |
| 2026-05-10 | Industry | 🟢 +1 | 0.3 | Yahoo Fina | Is It Too Late To Consider Quanta Services (PWR) After Its S |
| 2026-05-09 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Quanta (PWR): The Best Construction Stock for Data Center In |
| 2026-05-08 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Looking for a Growth Stock? 3 Reasons Why Quanta Services (P |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Finnhub | Are You Looking for a Top Momentum Pick? Why Quanta Services |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Finnhub | Is Quanta Services (PWR) Stock Outpacing Its Construction Pe |

---

### NASDAQ:GEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.05 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] RBC Capital Maintains Sector Perform on Gen Digital, Raises Price Targ
- 🟢 [Analyst Action|w1.51] Barclays Maintains Equal-Weight on Gen Digital, Raises Price Target to
- 🟢 [Analyst Action|w1.51] Evercore ISI Group Maintains Outperform on Gen Digital, Raises Price T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Gen Digital Bets On AI Browser Security To Support Norton Ec |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Gen Digital Inc. Q4 2026 Earnings Call Summary |
| 2026-05-08 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Gen Digital Q4 Earnings Call Highlights |
| 2026-05-08 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | RBC Capital Maintains Sector Perform on Gen Digital, Raises  |
| 2026-05-08 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Barclays Maintains Equal-Weight on Gen Digital, Raises Price |
| 2026-05-08 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Evercore ISI Group Maintains Outperform on Gen Digital, Rais |
| 2026-05-08 | Earnings | ⚪  0 | 1.64 | Finnhub | Gen Digital Inc. 2026 Q4 - Results - Earnings Call Presentat |
| 2026-05-08 | Earnings | 🟢 +1 | 1.17 | Seeking Al | Gen outlines FY27 8%-10% revenue growth and $2.85-$2.95 EPS, |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.55 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Monolithic Power (MPWR) is a Great Momentum Stock: Should You Buy?
- 🟢 [Analyst Action|w1.51] Raymond James Raises its Price Target on Monolithic Power (MPWR)
- 🟢 [Industry|w1.5] A Look At Monolithic Power Systems (MPWR) Valuation After A Strong Mul

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |
| 2026-05-12 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Monolithic Power (MPWR) is a Great Momentum Stock: Should Yo |
| 2026-05-10 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | A Look At Monolithic Power Systems (MPWR) Valuation After A  |
| 2026-05-09 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Raymond James Raises its Price Target on Monolithic Power (M |
| 2026-05-07 | Earnings | 🟢 +1 | 0.47 | Yahoo Fina | Surging Earnings Estimates Signal Upside for Monolithic (MPW |
| 2026-05-07 | Industry | ⚪  0 | 1.05 | Finnhub | Monolithic Stock Rises 158.2% in the Past Year: How to Play  |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 16.73 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 28 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Macquarie Raises Price Target on Iren to $90 From $77, Keeps Outperfor
- 🟢 [Earnings|w2.73] Twilio To Rally Over 25%? Here Are 10 Top Analyst Forecasts For Monday
- 🟢 [Earnings|w2.73] Market-Moving News for May 11th

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Evaluating IREN Against Peers In Software Industry |
| 2026-05-13 | Earnings | ⚪  0 | 3.87 | Finnhub | IREN: Microsoft And Nvidia Aren't Enough To Outrun The Dilut |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Can NVIDIA Partnership Help IREN Reach $3.7B AI Cloud ARR Ta |
| 2026-05-12 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Blockspace: IREN’s $2.3B Note Offering, STRC Comes to DeFi,  |
| 2026-05-12 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Macquarie Raises Price Target on Iren to $90 From $77, Keeps |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Iren Prices Upsized $2.6 Billion Private Debt Offering; Shar |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Why IREN (IREN) Is Up 11.5% After Striking A US$3.4 Billion  |
| 2026-05-12 | Industry | 🟢 +1 | 2.52 | Finnhub | What's Going On With IREN Stock Tuesday? |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 15.77 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] It’s a Growth Stock World—and Nothing Is Going to Change That
- 🟢 [Industry|w2.98] AI chip stocks surge again as Nvidia’s Huang joins Trump on visit to C
- 🟢 [Industry|w2.98] Wolfspeed Stock Jumps 23% as Power Chip Rally Rolls On

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Stock Market Today: Dow Jones Futures Fall, Nasdaq Gains As Trump Take
- 🔴 [Earnings|w1.95] Nvidia Stock: Reasons For Short-Term Caution Into Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-13 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Veteran Analyst Firm Resets Nvidia Stock Price Target Ahead  |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | US Equity Futures Mixed Pre-Bell as Nvidia Stock Rises Ahead |
| 2026-05-13 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Stock Market Today: Dow Falls Amid Hot Inflation, Trump-Xi S |
| 2026-05-13 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Stock Market Today: Dow Jones Futures Fall, Nasdaq Gains As  |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | This $13 Nvidia-Backed Artificial Intelligence (AI) Stock Ju |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Nvidia vs. AMD: The Better AI Chip Stock for 2026 |
| 2026-05-13 | Industry | 🟢 +1 | 2.98 | Finnhub | AI chip stocks surge again as Nvidia’s Huang joins Trump on  |
| 2026-05-13 | Industry | ⚪  0 | 2.98 | Finnhub | Nvidia stock rises as Jensen Huang joins Trump China trip |

---

## 🔴 Avoid / Short (3)

### NYSE:PFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **51** / 100 |
| Raw Weighted Score | 0.28 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Provident Financial Services Remains Compelling As Its Quality Shines 

**📉 Bearish Factors:**
- 🔴 [Black Swan|w1.57] Provident Financial Services (NYSE:PFS) Shows Strong Technical Breakou

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-11 | Industry | ⚪  0 | 0.72 | Yahoo Fina | There's A Lot To Like About Provident Financial Services' (N |
| 2026-05-10 | Earnings | 🟢 +1 | 0.91 | Finnhub | Provident Financial Services Remains Compelling As Its Quali |
| 2026-05-07 | Black Swan | 🔴 -1 | 0.63 | Finnhub | Provident Financial Services (NYSE:PFS) Shows Strong Technic |

---

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **43** / 100 |
| Raw Weighted Score | -2.34 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] 3 Reasons to Buy Joby Aviation Over Archer Aviation

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.24] ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At Risk
- 🔴 [Analyst Action|w1.26] Canaccord Genuity Maintains Hold on Joby Aviation, Lowers Price Target

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-12 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | 3 Reasons to Buy Joby Aviation Over Archer Aviation |
| 2026-05-12 | Black Swan | 🔴 -1 | 3.24 | Yahoo Fina | ITC Probe Puts Joby Delta Partnership And US eVTOL Plans At  |
| 2026-05-12 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Archer, Joby expect to begin commercial air taxi flights in  |
| 2026-05-11 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Joby Aviation Q1 Earnings Call Highlights |
| 2026-05-10 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Here's Why Joby Aviation Shares Lifted Off This Week |
| 2026-05-08 | Industry | ⚪  0 | 1.08 | Yahoo Fina | Why Joby Aviation Stock Soared 11.3% Last Month and Is Rocke |
| 2026-05-08 | Industry | ⚪  0 | 1.08 | Yahoo Fina | Joby Aviation Took Flight in New York City. Here's What's Ne |
| 2026-05-08 | Industry | ⚪  0 | 1.26 | Finnhub | Uber Technologies' Q1 2026 13F Shows Holdings Of 535,902,982 |

---

### NYSE:JHG

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.04 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 17 |

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.4] Janus Henderson Group plc (JHG) Q1 Earnings and Revenues Miss Estimate

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | 🔴 -1 | 1.4 | Yahoo Fina | Janus Henderson Group plc (JHG) Q1 Earnings and Revenues Mis |
| 2026-05-08 | Earnings | 🔴 -1 | 1.64 | Finnhub | Janus Henderson Group plc Reports First Quarter 2026 Results |

---

## ⚪ Watch / Neutral (12)

### NASDAQ:APLD
- Score: 59/100 | raw: 2.16 | News: 3 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 58/100 | raw: 1.83 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 56/100 | raw: 1.4 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 55/100 | raw: 1.08 | News: 4 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 55/100 | raw: 1.08 | News: 2 kept / 38 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 54/100 | raw: 0.94 | News: 11 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 51/100 | raw: 0.22 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 0 kept / 21 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: -0.07 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 48/100 | raw: -0.5 | News: 2 kept / 23 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-13T13:12:58.568Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*