# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-08  |  **News Window:** 2026-05-01 ~ 2026-05-08
**Stock Pool:** us_selected.txt (42)  |  **LLM Rerate:** disabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:MTZ** | **100** | 21.56 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/19 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:PWR** | **95** | 16.19 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/32 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:NVT** | **92** | 19.13 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/28 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:SPNT** | **91** | 9.88 | 🟢 Long (Strong) | Momentum / Hold | High | 3/20 | - |
| 5 | **NASDAQ:AEIS** | **88** | 28.56 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/22 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:GLW** | **85** | 8.3 | 🟢 Long (Strong) | Momentum / Hold | High | 4/35 | - |
| 7 | **NYSE:TRNO** | **78** | 6.68 | 🟢 Long (Strong) | Momentum / Hold | High | 2/14 | - |
| 8 | **NASDAQ:KALU** | **77** | 6.49 | 🟢 Long (Strong) | Momentum / Hold | High | 4/19 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ARM** | **74** | 28.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/17 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:DTM** | **74** | 5.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/25 | - |
| 11 | **NASDAQ:ADUS** | **74** | 9.15 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:ADI** | **72** | 6.95 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/30 | - |
| 13 | **NYSE:HG** | **71** | 5.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/27 | - |
| 14 | **NASDAQ:MTSI** | **69** | 13.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/21 | - |
| 15 | **NYSE:CRC** | **69** | 6.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/24 | - |
| 16 | **NYSE:RRC** | **68** | 4.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/26 | - |
| 17 | **NYSE:DY** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/32 | - |
| 18 | **NASDAQ:ADEA** | **66** | 7.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/23 | Sentiment Strengthening UP (trend) |
| 19 | **NYSE:FN** | **64** | 8.69 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/24 | Sentiment Strengthening UP (trend) |
| 20 | **NYSE:FAF** | **64** | 3.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/22 | - |
| 21 | **NASDAQ:CPRX** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/30 | - |
| 22 | **NYSE:WT** | **62** | 2.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/24 | - |
| 23 | **NYSE:AROC** | **60** | 4.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/20 | - |
| 24 | **NASDAQ:BGC** | **59** | 6.56 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/14 | - |
| 25 | **NYSE:ENVA** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 26 | **NYSE:JHG** | **57** | 1.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/16 | - |
| 27 | **NYSE:GRMN** | **57** | 1.94 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/22 | Sentiment Divergence (black swan masked by noise) |
| 28 | **NYSE:SM** | **57** | 5.07 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/14 | - |
| 29 | **NASDAQ:MPWR** | **56** | 1.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/31 | - |
| 30 | **NASDAQ:SANM** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/19 | - |
| 31 | **NYSE:SXI** | **54** | 1.05 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 3/27 | Sentiment Divergence (black swan masked by noise) |
| 32 | **CBOE:CBOE** | **52** | 1.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 16/23 | - |
| 33 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/22 | - |
| 34 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/18 | - |
| 35 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/21 | - |
| 36 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/23 | - |
| 37 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/27 | - |
| 38 | **NYSE:PRIM** | **50** | 0.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/29 | - |
| 39 | **NYSE:TPC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/21 | - |
| 40 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/21 | - |
| 41 | **NYSE:FOR** | **45** | -3.29 | ⚪ No Trade (Neutral) | Watch | Low | 15/25 | - |
| 42 | **NYSE:PFS** | **38** | -2.88 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 3/20 | - |

---

## 🟢 Strong Long (4)

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.88 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] SiriusPoint (SPNT) Q1 Earnings Beat Estimates
- 🟢 [Earnings|w3.28] SiriusPoint Ltd (NYSE:SPNT) Beats Q1 Estimates as Underwriting Discipl
- 🟢 [Earnings|w3.28] SiriusPoint Q1 EPS $0.82 Beats $0.71 Estimate, Sales $774.600M Beat $7

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | SiriusPoint (SPNT) Q1 Earnings Beat Estimates |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | SiriusPoint Ltd (NYSE:SPNT) Beats Q1 Estimates as Underwriti |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | SiriusPoint Q1 EPS $0.82 Beats $0.71 Estimate, Sales $774.60 |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.3 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 35 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Oppenheimer Maintains Outperform on Corning, Raises Price Target to $2
- 🟢 [Earnings|w2.73] Is Corning Incorporated (GLW) One of the Best Performing Dividend Stoc
- 🟢 [Industry|w2.55] Is Corning (GLW) Getting Ahead Of Itself After A 311% One Year Surge?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Jim Cramer Makes Big Prediction About Corning (GLW) |
| 2026-05-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Is Corning (GLW) Getting Ahead Of Itself After A 311% One Ye |
| 2026-05-07 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Oppenheimer Maintains Outperform on Corning, Raises Price Ta |
| 2026-05-06 | Earnings | 🟢 +1 | 2.73 | Finnhub | Is Corning Incorporated (GLW) One of the Best Performing Div |

---

### NYSE:TRNO

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 2 / 14 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Terreno Realty Corp (NYSE:TRNO) Shows Strong Growth Fundamentals and B
- 🟢 [Earnings|w2.81] Terreno Realty (TRNO) Valuation Check After Strong Q1 Earnings And Por

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | 🟢 +1 | 3.87 | Finnhub | Terreno Realty Corp (NYSE:TRNO) Shows Strong Growth Fundamen |
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Terreno Realty (TRNO) Valuation Check After Strong Q1 Earnin |

---

### NASDAQ:KALU

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.49 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 19 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] This Applied Materials Analyst Begins Coverage On A Bullish Note; Here
- 🟢 [Earnings|w2.27] Kaiser Aluminum: Dangerous Valuation In May 2026
- 🟢 [Earnings|w1.95] A Look At Kaiser Aluminum (KALU) Valuation After Its Strong Q1 2026 Ea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | A Look At Kaiser Aluminum (KALU) Valuation After Its Strong  |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | This Applied Materials Analyst Begins Coverage On A Bullish  |
| 2026-05-05 | Analyst Action | ⚪  0 | 2.1 | Finnhub | UBS Initiates Coverage On Kaiser Aluminum with Neutral Ratin |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | Kaiser Aluminum: Dangerous Valuation In May 2026 |

---

## 🟢 Mid Long (15)

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 28.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Wall Street ends lower as chip stocks give up gains
- 🟢 [Earnings|w3.28] Arm slides as investors question near-term monetization of AI demand
- 🟢 [Earnings|w3.28] Arm (ARM) Q4 2026 Earnings Call Transcript

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.63] Arm Holdings Stock May Plunge Following Results (Technical Analysis)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analyst Report: Arm Holdings plc |
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | These Stocks Are Today’s Movers: IonQ, Arm, Datadog, Fortine |
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Stocks to Watch Recap: Whirlpool, DoorDash, Arm, Airbnb |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | Wall Street ends lower as chip stocks give up gains |
| 2026-05-07 | Earnings | ⚪  0 | 3.28 | Finnhub | Stock Market Today: Dow Falls 300 Points, Nasdaq Keeps Losse |
| 2026-05-07 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Lifts PT on Arm Holdings (ARM), Says Q4 2026 App |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | Arm slides as investors question near-term monetization of A |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | Arm (ARM) Q4 2026 Earnings Call Transcript |

---

### NYSE:DTM

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 25 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Mizuho Maintains Neutral on DT Midstream, Raises Price Target to $153
- 🟢 [Earnings|w1.91] Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecasts, And Ana
- 🟢 [Analyst Action|w1.76] Citigroup Maintains Buy on DT Midstream, Raises Price Target to $169

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Mizuho Maintains Neutral on DT Midstream, Raises Price Targe |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Citigroup Maintains Buy on DT Midstream, Raises Price Target |
| 2026-05-04 | Earnings | 🟢 +1 | 1.91 | Finnhub | Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecast |

---

### NASDAQ:ADUS

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 9.15 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Addus HomeCare Corp (NASDAQ:ADUS) Passes the Caviar Cruise Quality Scr
- 🟢 [Analyst Action|w2.52] Citizens Maintains Market Outperform on Addus HomeCare, Lowers Price T
- 🟢 [Earnings|w1.95] A Look At Addus HomeCare (ADUS) Valuation After Q1 Earnings Beat And I

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.91] Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadows Adjusted

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Is It Time To Reconsider Addus HomeCare (ADUS) After Its Rec |
| 2026-05-06 | Earnings | 🟢 +1 | 2.73 | Finnhub | Addus HomeCare Corp (NASDAQ:ADUS) Passes the Caviar Cruise Q |
| 2026-05-06 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citizens Maintains Market Outperform on Addus HomeCare, Lowe |
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | A Look At Addus HomeCare (ADUS) Valuation After Q1 Earnings  |
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Should Addus HomeCare’s Q1 Beat, Revenue Miss, and Indiana D |
| 2026-05-05 | Earnings | ⚪  0 | 2.27 | Finnhub | Addus HomeCare Corporation (ADUS) Q1 2026 Earnings Call Tran |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Addus HomeCare (ADUS) Q1 Earnings Top Estimates |
| 2026-05-04 | Earnings | 🔴 -1 | 1.91 | Finnhub | Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadow |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 6.95 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] 4 Solid Stocks to Buy as AI Powers Steady Semiconductor Sales
- 🟢 [Earnings|w2.27] Analog Devices: Strongest Growth Outlook Among DAO Peers
- 🟢 [Industry|w2.16] Here's Why Analog Devices (ADI) is a Strong Growth Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Here's Why Analog Devices (ADI) is a Strong Growth Stock |
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analog Devices, Inc. (ADI) Hit a 52 Week High, Can the Run C |
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analog Devices, Inc. (ADI) Is a Trending Stock: Facts to Kno |
| 2026-05-07 | Industry | 🟢 +1 | 2.52 | Finnhub | 4 Solid Stocks to Buy as AI Powers Steady Semiconductor Sale |
| 2026-05-06 | Earnings | ⚪  0 | 2.73 | Finnhub | Analog Devices (ADI) Is Up 5.6% After Analyst Upgrades Ahead |
| 2026-05-05 | Industry | ⚪  0 | 1.75 | Finnhub | Analog Devices (ADI) Outpaces Stock Market Gains: What You S |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | Analog Devices: Strongest Growth Outlook Among DAO Peers |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 27 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Wells Fargo Maintains Overweight on Hamilton Insurance Group, Raises P
- 🟢 [Earnings|w1.4] HG Q1 Deep Dive: Underwriting Discipline and Selective Growth Shape Ea
- 🟢 [Earnings|w1.17] Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call Highlights: St

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Wells Fargo Maintains Overweight on Hamilton Insurance Group |
| 2026-05-03 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | HG Q1 Deep Dive: Underwriting Discipline and Selective Growt |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call High |
| 2026-05-02 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Will Stronger Underwriting Margins and Lower Revenue Volumes |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 13.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] MACOM Technology Solutions Q2 Earnings Call Highlights
- 🟢 [Earnings|w3.28] MACOM Technology Solutions H (NASDAQ:MTSI) Surges on Strong Fiscal Q3 
- 🟢 [Earnings|w3.28] Macom Technology Solutions Delivers Strong Fiscal Q2 Results, Outlook

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Here's What Key Metrics Tell Us About M/A-Com (MTSI) Q2 Earn |
| 2026-05-08 | Earnings | 🟢 +1 | 3.87 | Finnhub | MACOM Technology Solutions Q2 Earnings Call Highlights |
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | MACOM (MTSI) Q2 2026 Earnings Transcript |
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | MTSI Q2 Earnings Surpass Expectations, Revenues Rise Y/Y |
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | M/A-Com (MTSI) Surpasses Q2 Earnings and Revenue Estimates |
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | MACOM (NASDAQ:MTSI) Beats Q1 Sales Targets, Stock Jumps 16.5 |
| 2026-05-07 | Earnings | ⚪  0 | 3.28 | Finnhub | MACOM Technology Solutions Holdings, Inc. (MTSI) Q2 2026 Ear |
| 2026-05-07 | Earnings | 🟢 +1 | 3.28 | Finnhub | MACOM Technology Solutions H (NASDAQ:MTSI) Surges on Strong  |

---

### NYSE:CRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 6.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] California Resources Corp (NYSE:CRC) Tops Q1 Estimates, Raises 2026 EB
- 🟢 [Earnings|w2.27] California Resources Q1 Adj. EPS $0.88 Beats $0.85 Estimate, Sales $11
- 🟢 [Industry|w1.5] CRC targets 1% 2026 entry-to-exit gross production growth and $1.45B a

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Earnings | ⚪  0 | 2.73 | Finnhub | California Resources Corporation (CRC) Q1 2026 Earnings Call |
| 2026-05-06 | Industry | 🟢 +1 | 1.5 | Seeking Al | CRC targets 1% 2026 entry-to-exit gross production growth an |
| 2026-05-05 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | California Resources Corporation (CRC) Q1 Earnings and Reven |
| 2026-05-05 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | California Resources (NYSE:CRC) Reports Sales Below Analyst  |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | California Resources Corp (NYSE:CRC) Tops Q1 Estimates, Rais |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | California Resources Q1 Adj. EPS $0.88 Beats $0.85 Estimate, |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | California Resources (CRC) Q1 Earnings: What To Expect |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Is Softer Earnings Guidance Quietly Recasting CRC’s Capital  |

---

### NYSE:RRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 26 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Vanguard’s New Stakes Deepen Institutional Ownership In Undervalued Ra
- 🟢 [Earnings|w1.95] Assessing Range Resources (RRC) Valuation After Strong Q1 2026 Revenue

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Assessing Range Resources (RRC) Valuation After Strong Q1 20 |
| 2026-05-05 | M&A | 🟢 +1 | 2.45 | Finnhub | Vanguard’s New Stakes Deepen Institutional Ownership In Unde |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 32 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Why Dycom Is A Strong Buy After The Breakout (Rating Upgrade)
- 🟢 [M&A|w1.51] Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% Stake And

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Dycom Industries (DY) Appoints Regina Salazar as Chief Infor |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | Why Dycom Is A Strong Buy After The Breakout (Rating Upgrade |
| 2026-05-03 | M&A | 🟢 +1 | 1.51 | Yahoo Fina | Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% |

---

### NASDAQ:ADEA

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO Transition 
- 🟢 [Earnings|w1.91] Adeia Inc (NASDAQ:ADEA) Falls After Q1 Beat but Full-Year Guidance Dis
- 🟢 [Earnings|w1.91] Adeia Q1 Adj. EPS $0.38 Beats $0.33 Estimate, Sales $104.772M Beat $99

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Adeia (ADEA) Is Down 13.9% After Strong Q1 Results And CEO T |
| 2026-05-05 | Earnings | ⚪  0 | 1.63 | Seeking Al | Adeia Inc. (ADEA) Q1 2026 Earnings Call Transcript |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Adeia (ADEA) Q1 2026 Earnings Transcript |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Adeia (ADEA) Surpasses Q1 Earnings and Revenue Estimates |
| 2026-05-04 | Earnings | ⚪  0 | 1.91 | Finnhub | Adeia Inc. (ADEA) Q1 2026 Earnings Call Transcript |
| 2026-05-04 | Earnings | 🟢 +1 | 1.91 | Finnhub | Adeia Inc (NASDAQ:ADEA) Falls After Q1 Beat but Full-Year Gu |
| 2026-05-04 | Earnings | ⚪  0 | 1.91 | Finnhub | Adeia : ADEA Earnings Deck Q126 - FINAL |
| 2026-05-04 | Earnings | ⚪  0 | 1.91 | Finnhub | Adeia : ADEA-Q12026-ER-FINAL |

---

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 8.69 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Barclays Maintains Overweight on Fabrinet, Raises Price Target to $702
- 🟢 [Earnings|w2.27] Fabrinet Posts Record Q3, But Don't Thank Nvidia: Analyst
- 🟢 [Analyst Action|w2.1] Needham Reiterates Buy on Fabrinet, Maintains $800 Price Target

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.1] JP Morgan Maintains Neutral on Fabrinet, Lowers Price Target to $680

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Fabrinet (NYSE:FN) Released Earnings Last Week And Analysts  |
| 2026-05-07 | Earnings | ⚪  0 | 3.28 | Finnhub | Fabrinet 2026 Q3 - Results - Earnings Call Presentation |
| 2026-05-07 | Industry | ⚪  0 | 2.52 | Finnhub | Applied Optoelectronics Crashes 14%, Coherent Slides 10%, Lu |
| 2026-05-06 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Barclays Maintains Overweight on Fabrinet, Raises Price Targ |
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | FN Q3 Earnings Beat Estimates, Revenues Up on Strong Telecom |
| 2026-05-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Should You Buy FN Stock Post Q3 Earnings & Revenue Beat? |
| 2026-05-05 | Industry | ⚪  0 | 1.5 | Yahoo Fina | B. Riley Adjusts Price Target on Fabrinet to $635 From $452, |
| 2026-05-05 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Fabrinet Q3 Earnings Call Highlights |

---

### NYSE:FAF

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 22 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] Best Value Stocks to Buy for May 5th
- 🟢 [Industry|w1.5] FAF Trades Near 52-Week High: Time to Buy the Stock for Solid Returns?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Rumor | ⚪  0 | 1.08 | Yahoo Fina | First American Financial (FAF) Could Be a Great Choice |
| 2026-05-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | FAF Trades Near 52-Week High: Time to Buy the Stock for Soli |
| 2026-05-05 | Industry | 🟢 +1 | 1.75 | Finnhub | Best Value Stocks to Buy for May 5th |
| 2026-05-04 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Wall Street Analysts See a 25.8% Upside in First American Fi |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 30 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal-Weight

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Seeking Clues to Catalyst (CPRX) Q1 Earnings? A Peek Into Wa |
| 2026-05-07 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Stephens & Co. Downgrades Catalyst Pharmaceuticals to Equal- |
| 2026-05-07 | Industry | ⚪  0 | 2.52 | Finnhub | CPRX Stock Alert: Halper Sadeh LLC is Investigating Whether  |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flows Drive Re
- 🟢 [Earnings|w1.17] WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record AUM and R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flow |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record |

---

### NYSE:AROC

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 4.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 20 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Wells Fargo Maintains Overweight on Archrock, Raises Price Target to $
- 🟢 [Industry|w1.8] Assessing Archrock (AROC) Valuation After Strong Recent Share Price Ga
- 🟢 [Earnings|w1.64] Will Archrock Inc. (AROC) Beat Estimates Again in Its Next Earnings Re

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.27] Archrock Q1 Adj. EPS $0.42 Misses $0.46 Estimate, Sales $373.767M Miss

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Be Sure To Check Out Archrock, Inc. (NYSE:AROC) Before It Go |
| 2026-05-07 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Archrock AROC Q1 2026 Earnings Transcript |
| 2026-05-07 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Maintains Overweight on Archrock, Raises Price T |
| 2026-05-06 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Assessing Archrock (AROC) Valuation After Strong Recent Shar |
| 2026-05-06 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Archrock Inc. (AROC) Misses Q1 Earnings and Revenue Estimate |
| 2026-05-06 | Earnings | ⚪  0 | 2.73 | Finnhub | Archrock, Inc. (AROC) Q1 2026 Earnings Call Transcript |
| 2026-05-05 | Earnings | ⚪  0 | 2.27 | Finnhub | Archrock (NYSE:AROC) Slides After Missing Q1 Estimates |
| 2026-05-05 | Earnings | 🔴 -1 | 2.27 | Finnhub | Archrock Q1 Adj. EPS $0.42 Misses $0.46 Estimate, Sales $373 |

---

## ⚠️ Overheated (4)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 21.56 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Clear Street Raises MasTec (MTZ) Price Target, Keeps Buy Rating
- 🟢 [Earnings|w2.81] MasTec (MTZ) Reports Record Q1 2026 Revenue of $3.8B Driven by 34% Gro
- 🟢 [Analyst Action|w2.1] Mizuho Maintains Outperform on MasTec, Raises Price Target to $498

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Clear Street Raises MasTec (MTZ) Price Target, Keeps Buy Rat |
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | MasTec (MTZ) Reports Record Q1 2026 Revenue of $3.8B Driven  |
| 2026-05-05 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Mizuho Maintains Outperform on MasTec, Raises Price Target t |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | TD Cowen Maintains Buy on MasTec, Raises Price Target to $44 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Goldman Sachs Maintains Buy on MasTec, Raises Price Target t |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Citigroup Maintains Buy on MasTec, Raises Price Target to $4 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Truist Securities Maintains Buy on MasTec, Raises Price Targ |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Keybanc Maintains Overweight on MasTec, Raises Price Target  |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 16.19 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Quanta Services (PWR) Reports Record Q1 2026 Revenue of $7.87B
- 🟢 [Earnings|w2.73] 3 Companies Reporting Record Results This Earnings Season
- 🟢 [Industry|w2.52] Quanta Stock Climbs 36% in a Month: Should You Buy Now or Wait?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Quanta Services (PWR) Reports Record Q1 2026 Revenue of $7.8 |
| 2026-05-07 | Industry | 🟢 +1 | 2.52 | Finnhub | Quanta Stock Climbs 36% in a Month: Should You Buy Now or Wa |
| 2026-05-06 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Market Update: AMD, BMY, EQR, F, OGE, PWR, PYPL, ANET, STRL |
| 2026-05-06 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Quanta Services (PWR) Is Up 22.3% After Raising 2026 Outlook |
| 2026-05-06 | Earnings | 🟢 +1 | 2.73 | Finnhub | 3 Companies Reporting Record Results This Earnings Season |
| 2026-05-05 | Earnings | 🟢 +1 | 2.27 | Finnhub | Can Quanta's Record $48.5B Backlog Support Another Growth Le |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | UBS Maintains Buy on Quanta Services, Raises Price Target to |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | TD Cowen Maintains Buy on Quanta Services, Raises Price Targ |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 19.13 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] nVent (NVT): The Best European Stock That Beat Earnings Estimates to B
- 🟢 [Analyst Action|w2.1] Citigroup Maintains Buy on nVent Electric, Raises Price Target to $187
- 🟢 [Earnings|w1.91] nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | nVent (NVT): The Best European Stock That Beat Earnings Esti |
| 2026-05-05 | Industry | ⚪  0 | 1.75 | Finnhub | nVent to Participate in Upcoming Investor Conference |
| 2026-05-05 | Industry | 🟢 +1 | 1.75 | Finnhub | Best Momentum Stock to Buy for May 5th |
| 2026-05-05 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Citigroup Maintains Buy on nVent Electric, Raises Price Targ |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Compared to Estimates, nVent (NVT) Q1 Earnings: A Look at Ke |
| 2026-05-04 | Earnings | 🟢 +1 | 1.91 | Finnhub | nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | UBS Maintains Buy on nVent Electric, Raises Price Target to  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Goldman Sachs Maintains Buy on nVent Electric, Raises Price  |

---

### NASDAQ:AEIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 28.56 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Assessing Advanced Energy Industries (AEIS) Valuation After Strong Q1 
- 🟢 [Earnings|w2.73] Advanced Energy: Data Center Revenue Doubles
- 🟢 [Analyst Action|w2.52] Citigroup Maintains Buy on Advanced Energy Indus, Raises Price Target 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | ⚪  0 | 2.98 | Finnhub | Advanced Energy to Participate at Upcoming Investor Conferen |
| 2026-05-07 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Advanced Energy Industries (AEIS) is a Top-Ranked Growth Sto |
| 2026-05-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Assessing Advanced Energy Industries (AEIS) Valuation After  |
| 2026-05-06 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Here's Why Advanced Energy Industries (AEIS) is a Strong Mom |
| 2026-05-06 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citigroup Maintains Buy on Advanced Energy Indus, Raises Pri |
| 2026-05-06 | Earnings | 🟢 +1 | 2.73 | Finnhub | Advanced Energy: Data Center Revenue Doubles |
| 2026-05-06 | Industry | ⚪  0 | 2.1 | Finnhub | Advanced Expectations The Biggest Challenge For Advanced Ene |
| 2026-05-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Advanced Energy Industries (AEIS) is a Great Momentum Stock: |

---

## ⚠️ Risk Pattern (2)

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 1.94 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 22 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Is It Too Late To Consider Garmin (GRMN) After Its Strong Three Year S
- 🟢 [Industry|w1.8] Garmin receives Best Supplier of the Year Award for 11th straight year
- 🟢 [Industry|w1.26] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.59] Morgan Stanley Lowers its Price Target on Garmin (GRMN) to $249
- 🔴 [Black Swan|w2.25] Garmin redefines luxury home audio with revolutionary new Primacy® sys

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Is It Too Late To Consider Garmin (GRMN) After Its Strong Th |
| 2026-05-07 | Analyst Action | 🔴 -1 | 2.59 | Yahoo Fina | Morgan Stanley Lowers its Price Target on Garmin (GRMN) to $ |
| 2026-05-06 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Garmin receives Best Supplier of the Year Award for 11th str |
| 2026-05-05 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |

---

### NYSE:SXI

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 1.05 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 3 / 27 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.5] SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth Markets Dri
- 🟢 [Earnings|w1.17] Standex International Corp (SXI) Q3 2026 Earnings Call Highlights: Str

**📉 Bearish Factors:**
- 🔴 [Black Swan|w1.62] Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redefine Its Lo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth M |
| 2026-05-03 | Black Swan | 🔴 -1 | 1.62 | Yahoo Fina | Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redef |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Standex International Corp (SXI) Q3 2026 Earnings Call Highl |

---

## 🔴 Avoid / Short (3)

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 1.94 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 22 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Is It Too Late To Consider Garmin (GRMN) After Its Strong Three Year S
- 🟢 [Industry|w1.8] Garmin receives Best Supplier of the Year Award for 11th straight year
- 🟢 [Industry|w1.26] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.59] Morgan Stanley Lowers its Price Target on Garmin (GRMN) to $249
- 🔴 [Black Swan|w2.25] Garmin redefines luxury home audio with revolutionary new Primacy® sys

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Is It Too Late To Consider Garmin (GRMN) After Its Strong Th |
| 2026-05-07 | Analyst Action | 🔴 -1 | 2.59 | Yahoo Fina | Morgan Stanley Lowers its Price Target on Garmin (GRMN) to $ |
| 2026-05-06 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Garmin receives Best Supplier of the Year Award for 11th str |
| 2026-05-05 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |

---

### NYSE:SXI

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 1.05 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 3 / 27 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.5] SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth Markets Dri
- 🟢 [Earnings|w1.17] Standex International Corp (SXI) Q3 2026 Earnings Call Highlights: Str

**📉 Bearish Factors:**
- 🔴 [Black Swan|w1.62] Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redefine Its Lo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth M |
| 2026-05-03 | Black Swan | 🔴 -1 | 1.62 | Yahoo Fina | Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redef |
| 2026-05-02 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Standex International Corp (SXI) Q3 2026 Earnings Call Highl |

---

### NYSE:PFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **38** / 100 |
| Raw Weighted Score | -2.88 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.9] PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Quality Rem

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.78] Provident Financial Services (NYSE:PFS) Shows Strong Technical Breakou

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-07 | Black Swan | 🔴 -1 | 3.78 | Finnhub | Provident Financial Services (NYSE:PFS) Shows Strong Technic |
| 2026-05-04 | Industry | ⚪  0 | 1.26 | Yahoo Fina | Stonegate Capital Partners Updates Coverage on Provident Fin |
| 2026-05-02 | Industry | 🟢 +1 | 0.9 | Yahoo Fina | PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Q |

---

## ⚪ Watch / Neutral (16)

### NASDAQ:BGC
- Score: 59/100 | raw: 6.56 | News: 13 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENVA
- Score: 58/100 | raw: 1.95 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 57/100 | raw: 1.75 | News: 1 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 57/100 | raw: 5.07 | News: 15 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 56/100 | raw: 1.4 | News: 5 kept / 31 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 56/100 | raw: 1.5 | News: 5 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### CBOE:CBOE
- Score: 52/100 | raw: 1.55 | News: 16 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 1 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 2 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 0 kept / 21 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 23 dropped | No relevant news in window

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 27 dropped | No relevant news in window

### NYSE:PRIM
- Score: 50/100 | raw: 0.1 | News: 11 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TPC
- Score: 50/100 | raw: 0 | News: 7 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 21 dropped | No relevant news in window

### NYSE:FOR
- Score: 45/100 | raw: -3.29 | News: 15 kept / 25 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-08T13:08:37.802Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha*