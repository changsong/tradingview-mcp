# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-06  |  **News Window:** 2026-04-29 ~ 2026-05-06
**Stock Pool:** us_selected.txt (40)  |  **LLM Rerate:** disabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:MTZ** | **97** | 27.1 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/27 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:NVT** | **91** | 27.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/25 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:PWR** | **89** | 18.08 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/29 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:KALU** | **89** | 10.63 | 🟢 Long (Strong) | Momentum / Hold | High | 5/19 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:DTM** | **88** | 16.9 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/26 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:ADI** | **88** | 10.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/26 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:AEIS** | **85** | 36.17 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 18/21 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:MPWR** | **79** | 8.12 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/26 | Overheated Sentiment (one-sided bullish) |
| 9 | **NYSE:DY** | **78** | 6.78 | 🟢 Long (Strong) | Momentum / Hold | High | 3/31 | - |
| 10 | **NYSE:RRC** | **76** | 6.34 | 🟢 Long (Strong) | Momentum / Hold | High | 2/25 | - |
| 11 | **NYSE:GLW** | **74** | 9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/30 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:HG** | **71** | 5.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/25 | - |
| 13 | **NASDAQ:CPRX** | **70** | 4.68 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/20 | - |
| 14 | **NYSE:FN** | **70** | 14.65 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/24 | Sentiment Strengthening UP (trend) |
| 15 | **NYSE:FAF** | **70** | 4.68 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/29 | - |
| 16 | **NYSE:AROC** | **70** | 4.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/18 | - |
| 17 | **NYSE:FSS** | **69** | 4.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/36 | - |
| 18 | **NYSE:WT** | **68** | 4.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/21 | - |
| 19 | **NASDAQ:ADUS** | **65** | 5.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/21 | Sentiment Strengthening UP (trend) |
| 20 | **NYSE:GRMN** | **64** | 6.62 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/26 | Sentiment Divergence (black swan masked by noise) |
| 21 | **NASDAQ:NBN** | **63** | 3.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/22 | - |
| 22 | **NYSE:ENVA** | **62** | 2.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/23 | - |
| 23 | **NYSE:PFS** | **62** | 2.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/26 | - |
| 24 | **NYSE:CRC** | **62** | 3.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/20 | - |
| 25 | **NYSE:PRIM** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/23 | - |
| 26 | **NASDAQ:ADEA** | **59** | 5.46 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/24 | - |
| 27 | **NASDAQ:SANM** | **59** | 2.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/20 | - |
| 28 | **NYSE:SM** | **59** | 2.81 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/14 | - |
| 29 | **CBOE:CBOE** | **58** | 7.83 | ⚪ No Trade (Weak Bullish) | Watch | Low | 21/18 | - |
| 30 | **NASDAQ:MTSI** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/15 | - |
| 31 | **NASDAQ:BGC** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/16 | - |
| 32 | **NASDAQ:NWBI** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 33 | **NYSE:SPNT** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/20 | - |
| 34 | **NASDAQ:ARM** | **54** | 3.32 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/15 | - |
| 35 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/15 | - |
| 36 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/15 | - |
| 37 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/28 | - |
| 38 | **NYSE:TPC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 39 | **NYSE:FOR** | **47** | -1.97 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 15/25 | - |
| 40 | **NYSE:SXI** | **45** | -1.17 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 8/28 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:KALU

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 10.63 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 19 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] This Applied Materials Analyst Begins Coverage On A Bullish Note; Here
- 🟢 [Earnings|w3.28] Kaiser Aluminum: Dangerous Valuation In May 2026
- 🟢 [Earnings|w2.81] A Look At Kaiser Aluminum (KALU) Valuation After Its Strong Q1 2026 Ea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At Kaiser Aluminum (KALU) Valuation After Its Strong  |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | This Applied Materials Analyst Begins Coverage On A Bullish  |
| 2026-05-05 | Analyst Action | ⚪  0 | 3.02 | Finnhub | UBS Initiates Coverage On Kaiser Aluminum with Neutral Ratin |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Kaiser Aluminum: Dangerous Valuation In May 2026 |
| 2026-04-30 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | JP Morgan Downgrades Kaiser Aluminum to Underweight, Raises  |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.78 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Why Dycom Is A Strong Buy After The Breakout (Rating Upgrade)
- 🟢 [M&A|w2.1] Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% Stake And
- 🟢 [Earnings|w1.4] Will Dycom Industries (DY) Beat Estimates Again in Its Next Earnings R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Dycom Is A Strong Buy After The Breakout (Rating Upgrade |
| 2026-05-03 | M&A | 🟢 +1 | 2.1 | Yahoo Fina | Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% |
| 2026-05-01 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | Will Dycom Industries (DY) Beat Estimates Again in Its Next  |

---

### NYSE:RRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.34 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 2 / 25 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Vanguard’s New Stakes Deepen Institutional Ownership In Undervalued Ra
- 🟢 [Earnings|w2.81] Assessing Range Resources (RRC) Valuation After Strong Q1 2026 Revenue

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Assessing Range Resources (RRC) Valuation After Strong Q1 20 |
| 2026-05-05 | M&A | 🟢 +1 | 3.53 | Finnhub | Vanguard’s New Stakes Deepen Institutional Ownership In Unde |

---

## 🟢 Mid Long (13)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 30 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] NVIDIA and Corning Announce Long-Term Partnership To Strengthen U.S. M
- 🟢 [Industry|w2.52] 5 Stocks With High ROE to Buy as Markets Battle Intense Volatility
- 🟢 [Industry|w1.75] Is Corning Incorporated (GLW) A Good Stock To Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | 🟢 +1 | 2.98 | Finnhub | NVIDIA and Corning Announce Long-Term Partnership To Strengt |
| 2026-05-05 | Earnings | ⚪  0 | 3.28 | Finnhub | Did Corning’s (GLW) Meta AI Deal and Springboard Update Just |
| 2026-05-05 | Industry | 🟢 +1 | 2.52 | Finnhub | 5 Stocks With High ROE to Buy as Markets Battle Intense Vola |
| 2026-05-04 | Earnings | ⚪  0 | 2.73 | Finnhub | Jim Cramer Discusses Potential Stock Movement for Corning |
| 2026-05-04 | Industry | ⚪  0 | 2.1 | Finnhub | Is Corning (GLW) Stock Outpacing Its Computer and Technology |
| 2026-05-03 | Industry | 🟢 +1 | 1.75 | Finnhub | Is Corning Incorporated (GLW) A Good Stock To Buy Now? |
| 2026-05-03 | Industry | 🟢 +1 | 1.75 | Finnhub | Corning Meta Fiber Expansion Deepens Ties To AI Data Center  |
| 2026-05-03 | Industry | ⚪  0 | 1.75 | Finnhub | Corning Shareholders Reelect Directors, Back Say-on-Pay, Rej |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] HG Q1 Deep Dive: Underwriting Discipline and Selective Growth Shape Ea
- 🟢 [Earnings|w1.64] Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call Highlights: St
- 🟢 [Analyst Action|w1.51] Citizens Maintains Market Outperform on Hamilton Insurance Group, Rais

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | HG Q1 Deep Dive: Underwriting Discipline and Selective Growt |
| 2026-05-02 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call High |
| 2026-05-02 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Will Stronger Underwriting Margins and Lower Revenue Volumes |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Finnhub | Hamilton Insurance Group, Ltd. (HG) Q1 2026 Earnings Call Tr |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Citizens Maintains Market Outperform on Hamilton Insurance G |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Hamilton Insurance (HG) Surpasses Q1 Earnings and Revenue Es |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Hamilton Insurance Group (NYSE:HG) Reports Upbeat Q1 CY2026 |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.68 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Will Catalyst (CPRX) Beat Estimates Again in Its Next Earnings Report?
- 🟢 [Earnings|w2.34] Catalyst Pharmaceutical (CPRX) Expected to Beat Earnings Estimates: Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Will Catalyst (CPRX) Beat Estimates Again in Its Next Earnin |
| 2026-05-04 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Expected to Beat Earnings Est |

---

### NYSE:FAF

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.68 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 29 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Best Value Stocks to Buy for May 5th
- 🟢 [Industry|w2.16] FAF Trades Near 52-Week High: Time to Buy the Stock for Solid Returns?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | FAF Trades Near 52-Week High: Time to Buy the Stock for Soli |
| 2026-05-05 | Industry | 🟢 +1 | 2.52 | Finnhub | Best Value Stocks to Buy for May 5th |
| 2026-05-04 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Wall Street Analysts See a 25.8% Upside in First American Fi |

---

### NYSE:AROC

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Assessing Archrock (AROC) Valuation After Strong Recent Share Price Ga
- 🟢 [Earnings|w2.34] Will Archrock Inc. (AROC) Beat Estimates Again in Its Next Earnings Re

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Assessing Archrock (AROC) Valuation After Strong Recent Shar |
| 2026-05-06 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Archrock Inc. (AROC) Misses Q1 Earnings and Revenue Estimate |
| 2026-05-04 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Will Archrock Inc. (AROC) Beat Estimates Again in Its Next E |
| 2026-05-04 | Industry | ⚪  0 | 1.8 | Yahoo Fina | How The Archrock (AROC) Investment Story Is Shifting With Ne |

---

### NYSE:FSS

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 36 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Federal Signal Corporation Just Beat EPS By 31%: Here's What Analysts 
- 🟢 [Analyst Action|w1.51] DA Davidson Maintains Neutral on Federal Signal, Raises Price Target t
- 🟢 [Earnings|w1.36] Federal Signal Q1 Earnings Call Highlights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-01 | Policy | ⚪  0 | 1.3 | Yahoo Fina | Federal Signal (FSS) Is Up 1.55% in One Week: What You Shoul |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | DA Davidson Maintains Neutral on Federal Signal, Raises Pric |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | Federal Signal Corporation Just Beat EPS By 31%: Here's What |
| 2026-04-30 | Earnings | 🟢 +1 | 1.36 | Finnhub | Federal Signal Q1 Earnings Call Highlights |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flows Drive Re
- 🟢 [Earnings|w1.64] WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record AUM and R
- 🟢 [Earnings|w1.64] WisdomTree Inc (NYSE:WT) Beats on Earnings, Posts Record Revenue in Q1

**📉 Bearish Factors:**
- 🔴 [Industry|w1.26] What WisdomTree (WT)'s Q1 Loss and Tokenized Treasury Push Means For S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flow |
| 2026-05-02 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record |
| 2026-05-02 | Industry | 🔴 -1 | 1.26 | Yahoo Fina | What WisdomTree (WT)'s Q1 Loss and Tokenized Treasury Push M |
| 2026-05-01 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Here's What Key Metrics Tell Us About WisdomTree, Inc. (WT)  |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Finnhub | WisdomTree, Inc. (WT) Q1 2026 Earnings Call Transcript |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | WisdomTree Inc (NYSE:WT) Beats on Earnings, Posts Record Rev |

---

### NASDAQ:ADUS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 5.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] A Look At Addus HomeCare (ADUS) Valuation After Q1 Earnings Beat And I
- 🟢 [Earnings|w2.81] Should Addus HomeCare’s Q1 Beat, Revenue Miss, and Indiana Deals Promp
- 🟢 [Earnings|w2.73] Addus HomeCare Q1 Adj. EPS $1.62 Beats $1.55 Estimate, Sales $363.611M

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.73] Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadows Adjusted

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At Addus HomeCare (ADUS) Valuation After Q1 Earnings  |
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Should Addus HomeCare’s Q1 Beat, Revenue Miss, and Indiana D |
| 2026-05-05 | Earnings | ⚪  0 | 3.28 | Finnhub | Addus HomeCare Corporation (ADUS) Q1 2026 Earnings Call Tran |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Addus HomeCare (ADUS) Q1 Earnings Top Estimates |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Addus HomeCare (NASDAQ:ADUS) Misses Q1 CY2026 Sales Expectat |
| 2026-05-04 | Earnings | 🔴 -1 | 2.73 | Finnhub | Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadow |
| 2026-05-04 | Earnings | 🟢 +1 | 2.73 | Finnhub | Addus HomeCare Q1 Adj. EPS $1.62 Beats $1.55 Estimate, Sales |

---

### NASDAQ:NBN

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 22 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Northeast Bank Remains Compelling As Growth Continues
- 🟢 [Earnings|w1.4] A Look At Northeast Bank (NBN) Valuation After Strong Q3 2026 Earnings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-01 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | A Look At Northeast Bank (NBN) Valuation After Strong Q3 202 |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | Northeast Bank Remains Compelling As Growth Continues |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Enova International (ENVA) Is Down 5.6% After Raising 2026 Guidance On

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Enova International (ENVA) Is Down 5.6% After Raising 2026 G |
| 2026-04-30 | Earnings | ⚪  0 | 1.36 | Finnhub | Enova International: Credit Where It's Due, But Not Enough U |

---

### NYSE:PFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 26 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Keefe, Bruyette & Woods Maintains Outperform on Provident Finl Servs, 
- 🟢 [Industry|w1.26] PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Quality Rem

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Industry | ⚪  0 | 1.8 | Yahoo Fina | Stonegate Capital Partners Updates Coverage on Provident Fin |
| 2026-05-02 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Q |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Keefe, Bruyette & Woods Maintains Outperform on Provident Fi |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Provident (PFS) Q1 2026 Earnings Call Transcript |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Provident Financial (PFS) Beats Q1 Earnings Estimates |
| 2026-04-30 | Earnings | ⚪  0 | 1.36 | Finnhub | Provident Financial Services, Inc. (PFS) Q1 2026 Earnings Ca |

---

### NYSE:CRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] California Resources Q1 Adj. EPS $0.88 Beats $0.85 Estimate, Sales $11

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | California Resources Corporation (CRC) Q1 Earnings and Reven |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | California Resources (NYSE:CRC) Reports Sales Below Analyst  |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | California Resources Q1 Adj. EPS $0.88 Beats $0.85 Estimate, |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | California Resources (CRC) Q1 Earnings: What To Expect |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Is Softer Earnings Guidance Quietly Recasting CRC’s Capital  |

---

### NYSE:PRIM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 23 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] UBS Maintains Buy on Primoris Services, Raises Price Target to $212

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Primoris Services (PRIM) Q1 Earnings and Revenues Lag Estima |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Primoris (NYSE:PRIM) Misses Q1 CY2026 Sales Expectations, St |
| 2026-05-05 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Do Primoris (PRIM) Directors’ Locked-Up Stock Awards Reveal  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | UBS Maintains Buy on Primoris Services, Raises Price Target  |

---

## 🟡 Cautious Long (1)

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 14.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Fabrinet Posts Record Q3, But Don't Thank Nvidia: Analyst
- 🟢 [Analyst Action|w3.02] Needham Reiterates Buy on Fabrinet, Maintains $800 Price Target
- 🟢 [Earnings|w2.81] FN Q3 Earnings Beat Estimates, Revenues Up on Strong Telecom & HPC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | FN Q3 Earnings Beat Estimates, Revenues Up on Strong Telecom |
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Should You Buy FN Stock Post Q3 Earnings & Revenue Beat? |
| 2026-05-05 | Industry | ⚪  0 | 2.16 | Yahoo Fina | B. Riley Adjusts Price Target on Fabrinet to $635 From $452, |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Fabrinet Q3 Earnings Call Highlights |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Fabrinet Q3 2026 Earnings Call Summary |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Fabrinet Posts Record Q3, But Don't Thank Nvidia: Analyst |
| 2026-05-05 | Earnings | ⚪  0 | 3.28 | Finnhub | Fabrinet Reports Earnings Results for the Third Quarter and  |
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Needham Reiterates Buy on Fabrinet, Maintains $800 Price Tar |

---

## ⚠️ Overheated (7)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **97** / 100 |
| Raw Weighted Score | 27.1 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Mizuho Maintains Outperform on MasTec, Raises Price Target to $498
- 🟢 [Analyst Action|w2.52] TD Cowen Maintains Buy on MasTec, Raises Price Target to $445
- 🟢 [Analyst Action|w2.52] Goldman Sachs Maintains Buy on MasTec, Raises Price Target to $487

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Mizuho Maintains Outperform on MasTec, Raises Price Target t |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | TD Cowen Maintains Buy on MasTec, Raises Price Target to $44 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Goldman Sachs Maintains Buy on MasTec, Raises Price Target t |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citigroup Maintains Buy on MasTec, Raises Price Target to $4 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Truist Securities Maintains Buy on MasTec, Raises Price Targ |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Keybanc Maintains Overweight on MasTec, Raises Price Target  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Baird Maintains Outperform on MasTec, Raises Price Target to |
| 2026-05-03 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | MasTec (MTZ) Is Up 11.0% After Record Q1 Results And Raised  |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 27.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y
- 🟢 [Industry|w2.52] Best Momentum Stock to Buy for May 5th
- 🟢 [Analyst Action|w2.52] UBS Maintains Buy on nVent Electric, Raises Price Target to $200

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | ⚪  0 | 2.52 | Finnhub | nVent to Participate in Upcoming Investor Conference |
| 2026-05-05 | Industry | 🟢 +1 | 2.52 | Finnhub | Best Momentum Stock to Buy for May 5th |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Compared to Estimates, nVent (NVT) Q1 Earnings: A Look at Ke |
| 2026-05-04 | Earnings | 🟢 +1 | 2.73 | Finnhub | nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | UBS Maintains Buy on nVent Electric, Raises Price Target to  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Goldman Sachs Maintains Buy on nVent Electric, Raises Price  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Evercore ISI Group Maintains Outperform on nVent Electric, R |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | RBC Capital Maintains Outperform on nVent Electric, Raises P |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 18.08 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 29 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Can Quanta's Record $48.5B Backlog Support Another Growth Leg in 2026?
- 🟢 [Analyst Action|w2.52] UBS Maintains Buy on Quanta Services, Raises Price Target to $900
- 🟢 [Analyst Action|w2.52] TD Cowen Maintains Buy on Quanta Services, Raises Price Target to $775

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Why Quanta Services (PWR) is a Top Stock for the Long-Term |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Can Quanta's Record $48.5B Backlog Support Another Growth Le |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | UBS Maintains Buy on Quanta Services, Raises Price Target to |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | TD Cowen Maintains Buy on Quanta Services, Raises Price Targ |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Goldman Sachs Maintains Buy on Quanta Services, Raises Price |
| 2026-05-03 | Industry | ⚪  0 | 1.75 | Finnhub | Jim Cramer on Quanta Services: “It’s Been Worth Owning” |
| 2026-05-02 | Earnings | 🟢 +1 | 1.91 | Finnhub | PWR Q1 Deep Dive: Strong Data Center and Utility Demand Driv |
| 2026-05-02 | Earnings | 🟢 +1 | 1.91 | Finnhub | Quanta Services Q1 Earnings Call Highlights |

---

### NYSE:DTM

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 16.9 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Mizuho Maintains Neutral on DT Midstream, Raises Price Target to $153
- 🟢 [Earnings|w2.73] Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecasts, And Ana
- 🟢 [Analyst Action|w2.52] Citigroup Maintains Buy on DT Midstream, Raises Price Target to $169

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Mizuho Maintains Neutral on DT Midstream, Raises Price Targe |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citigroup Maintains Buy on DT Midstream, Raises Price Target |
| 2026-05-04 | Earnings | 🟢 +1 | 2.73 | Finnhub | Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecast |
| 2026-05-01 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | A Look At DT Midstream (DTM) Valuation After Strong Q1 Resul |
| 2026-05-01 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | DT Midstream (DTM) Q1 2026 Earnings Transcript |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | DT Midstream Q1 Earnings Call Highlights |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Barclays Maintains Equal-Weight on DT Midstream, Raises Pric |
| 2026-04-30 | Earnings | ⚪  0 | 1.36 | Finnhub | DT Midstream, Inc. (DTM) Q1 2026 Earnings Call Transcript |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 10.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 26 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Analog Devices: Strongest Growth Outlook Among DAO Peers
- 🟢 [Industry|w1.8] Here's Why Analog Devices (ADI) is a Strong Momentum Stock
- 🟢 [Industry|w1.5] Is It Too Late To Consider Analog Devices (ADI) After 103% One Year Sh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analog Devices (ADI) Outpaces Stock Market Gains: What You S |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Analog Devices: Strongest Growth Outlook Among DAO Peers |
| 2026-05-04 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Here's Why Analog Devices (ADI) is a Strong Momentum Stock |
| 2026-05-03 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Is It Too Late To Consider Analog Devices (ADI) After 103% O |
| 2026-05-02 | Industry | 🟢 +1 | 1.47 | Finnhub | Is Analog Devices, Inc. (ADI) A Good Stock To Buy Now? |
| 2026-05-01 | Industry | ⚪  0 | 1.26 | Finnhub | Analog Devices (ADI) Is Up 7.57% in One Week: What You Shoul |
| 2026-05-01 | Industry | 🟢 +1 | 1.26 | Finnhub | Is Analog Devices (ADI) a Buy as Wall Street Analysts Look O |
| 2026-04-30 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Is Analog Devices (ADI) a Solid Growth Stock? 3 Reasons to T |

---

### NASDAQ:AEIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 36.17 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 18 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Advanced Energy: Data Center Revenue Doubles
- 🟢 [Earnings|w3.28] Advanced Energy Q1 Earnings Beat Estimates, Revenues Increase Y/Y
- 🟢 [Earnings|w3.28] Advanced Energy Declares Quarterly Cash Dividend

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Earnings | 🟢 +1 | 3.87 | Finnhub | Advanced Energy: Data Center Revenue Doubles |
| 2026-05-06 | Industry | ⚪  0 | 2.98 | Finnhub | Advanced Expectations The Biggest Challenge For Advanced Ene |
| 2026-05-05 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Advanced Energy Industries (AEIS) is a Great Momentum Stock: |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Advanced Energy (AEIS) Q1 2026 Earnings Transcript |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Advanced Energy Q1 Earnings Beat Estimates, Revenues Increas |
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | TD Cowen Maintains Hold on Advanced Energy Indus, Raises Pri |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Advanced Energy Declares Quarterly Cash Dividend |
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Maintains Equal-Weight on Advanced Energy Indus, |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 8.12 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] MPWR Q1 Deep Dive: Strong Segment Growth, Cautious Margin Outlook Amid
- 🟢 [Earnings|w1.64] Monolithic Power's Q1 Earnings Beat Estimates on Solid Revenue Growth
- 🟢 [Analyst Action|w1.51] TD Cowen Maintains Buy on Monolithic Power Systems, Raises Price Targe

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | Industry | ⚪  0 | 1.5 | Yahoo Fina | How The Story Is Shifting For Monolithic Power Systems (MPWR |
| 2026-05-03 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Analysts Are Upgrading Monolithic Power Systems, Inc. (NASDA |
| 2026-05-03 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | MPWR Q1 Deep Dive: Strong Segment Growth, Cautious Margin Ou |
| 2026-05-01 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | MPWR Q1 2026 Earnings Call Transcript |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | TD Cowen Maintains Buy on Monolithic Power Systems, Raises P |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | Monolithic Power's Q1 Earnings Beat Estimates on Solid Reven |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Wells Fargo Maintains Overweight on Monolithic Power Systems |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Keybanc Maintains Overweight on Monolithic Power Systems, Ra |

---

## ⚠️ Risk Pattern (2)

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 14.65 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Fabrinet Posts Record Q3, But Don't Thank Nvidia: Analyst
- 🟢 [Analyst Action|w3.02] Needham Reiterates Buy on Fabrinet, Maintains $800 Price Target
- 🟢 [Earnings|w2.81] FN Q3 Earnings Beat Estimates, Revenues Up on Strong Telecom & HPC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | FN Q3 Earnings Beat Estimates, Revenues Up on Strong Telecom |
| 2026-05-05 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Should You Buy FN Stock Post Q3 Earnings & Revenue Beat? |
| 2026-05-05 | Industry | ⚪  0 | 2.16 | Yahoo Fina | B. Riley Adjusts Price Target on Fabrinet to $635 From $452, |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Fabrinet Q3 Earnings Call Highlights |
| 2026-05-05 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Fabrinet Q3 2026 Earnings Call Summary |
| 2026-05-05 | Earnings | 🟢 +1 | 3.28 | Finnhub | Fabrinet Posts Record Q3, But Don't Thank Nvidia: Analyst |
| 2026-05-05 | Earnings | ⚪  0 | 3.28 | Finnhub | Fabrinet Reports Earnings Results for the Third Quarter and  |
| 2026-05-05 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Needham Reiterates Buy on Fabrinet, Maintains $800 Price Tar |

---

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 6.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 26 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Garmin receives Best Supplier of the Year Award for 11th straight year
- 🟢 [Industry|w1.8] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?
- 🟢 [Earnings|w1.64] Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analysts Are For

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.24] Garmin redefines luxury home audio with revolutionary new Primacy® sys
- 🔴 [Analyst Action|w1.26] Barclays Maintains Equal-Weight on Garmin, Lowers Price Target to $238

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Garmin receives Best Supplier of the Year Award for 11th str |
| 2026-05-06 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Analyst Report: Garmin Ltd. |
| 2026-05-05 | Black Swan | 🔴 -1 | 3.24 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Barclays Adjusts Garmin's Price Target to $238 From $240, Ke |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Garmin Beats Q1 Expectations as Fitness Segment Surges, Morg |

---

## 🔴 Avoid / Short (3)

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 6.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 26 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Garmin receives Best Supplier of the Year Award for 11th straight year
- 🟢 [Industry|w1.8] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?
- 🟢 [Earnings|w1.64] Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analysts Are For

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.24] Garmin redefines luxury home audio with revolutionary new Primacy® sys
- 🔴 [Analyst Action|w1.26] Barclays Maintains Equal-Weight on Garmin, Lowers Price Target to $238

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Garmin receives Best Supplier of the Year Award for 11th str |
| 2026-05-06 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Analyst Report: Garmin Ltd. |
| 2026-05-05 | Black Swan | 🔴 -1 | 3.24 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Barclays Adjusts Garmin's Price Target to $238 From $240, Ke |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Garmin Beats Q1 Expectations as Fitness Segment Surges, Morg |

---

### NYSE:FOR

| Metric | Detail |
|--------|--------|
| Normalized Score | **47** / 100 |
| Raw Weighted Score | -1.97 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 15 / 25 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] &#x2018;I am her scapegoat&#x2019;: My mother-in-law squandered all he
- 🟢 [Industry|w2.55] Nvidia to Invest $500 Million in Corning, Expand Fiber Optic Manufactu
- 🟢 [Industry|w2.55] Asian Stocks Advance Amid Hopes for U.S.-Iran Peace Deal

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] The Wegovy pill saw the fastest take-up in weight-loss drug history. N
- 🔴 [Black Swan|w3.24] Morgan Stanley&#x2019;s Investment Banking Program in Budapest Hit by 
- 🔴 [Policy|w3.06] Treasury Yields Fall on Signs of De-Escalation in Middle East

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-06 | Industry | 🔴 -1 | 2.55 | MarketWatc | The &#x2018;sugar high&#x2019; is over: Why the first sell s |
| 2026-05-06 | Earnings | 🔴 -1 | 3.32 | MarketWatc | The Wegovy pill saw the fastest take-up in weight-loss drug  |
| 2026-05-06 | Industry | ⚪  0 | 2.55 | MarketWatc | You&#x2019;re thinking too small in a world of &#x2018;infin |
| 2026-05-06 | Industry | ⚪  0 | 2.55 | MarketWatc | I lost my job and can&#x2019;t afford to go on a $2,000 trip |
| 2026-05-06 | Industry | 🟢 +1 | 2.55 | MarketWatc | &#x2018;I am her scapegoat&#x2019;: My mother-in-law squande |
| 2026-05-06 | Policy | 🔴 -1 | 3.06 | MarketWatc | Treasury Yields Fall on Signs of De-Escalation in Middle Eas |
| 2026-05-06 | Industry | 🟢 +1 | 2.55 | MarketWatc | Nvidia to Invest $500 Million in Corning, Expand Fiber Optic |
| 2026-05-06 | Industry | ⚪  0 | 2.55 | MarketWatc | Iran War Headlines Are Key For Yen After Suspected Intervent |

---

### NYSE:SXI

| Metric | Detail |
|--------|--------|
| Normalized Score | **45** / 100 |
| Raw Weighted Score | -1.17 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth Markets Dri
- 🟢 [Earnings|w1.64] Standex International Corp (SXI) Q3 2026 Earnings Call Highlights: Str

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.25] Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redefine Its Lo
- 🔴 [Earnings|w1.36] Standex International Corp (NYSE:SXI) Q3 Earnings Miss Estimates, Stoc
- 🔴 [Earnings|w1.36] Standex International Q3 Adj. EPS $2.21 Misses $2.25 Estimate, Sales $

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth M |
| 2026-05-03 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redef |
| 2026-05-02 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Standex International Corp (SXI) Q3 2026 Earnings Call Highl |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Finnhub | Standex International Corporation (SXI) Q3 2026 Earnings Cal |
| 2026-04-30 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Standex International (SXI) Misses Q3 Earnings and Revenue E |
| 2026-04-30 | Industry | ⚪  0 | 0.9 | Yahoo Fina | Standex (NYSE:SXI) Posts Q1 CY2026 Sales In Line With Estima |
| 2026-04-30 | Earnings | 🔴 -1 | 1.36 | Finnhub | Standex International Corp (NYSE:SXI) Q3 Earnings Miss Estim |
| 2026-04-30 | Earnings | 🔴 -1 | 1.36 | Finnhub | Standex International Q3 Adj. EPS $2.21 Misses $2.25 Estimat |

---

## ⚪ Watch / Neutral (13)

### NASDAQ:ADEA
- Score: 59/100 | raw: 5.46 | News: 12 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 59/100 | raw: 2.16 | News: 4 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 59/100 | raw: 2.81 | News: 9 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### CBOE:CBOE
- Score: 58/100 | raw: 7.83 | News: 21 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 56/100 | raw: 1.36 | News: 2 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 55/100 | raw: 1.08 | News: 2 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 55/100 | raw: 1.08 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 55/100 | raw: 1.17 | News: 1 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ARM
- Score: 54/100 | raw: 3.32 | News: 13 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 5 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 0 kept / 28 dropped | No relevant news in window

### NYSE:TPC
- Score: 50/100 | raw: 0 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-06T13:55:34.974Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha*