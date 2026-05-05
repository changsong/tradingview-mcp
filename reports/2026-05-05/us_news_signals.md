# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-05  |  **News Window:** 2026-04-28 ~ 2026-05-05
**Stock Pool:** us_selected.txt (36)  |  **LLM Rerate:** disabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:MTZ** | **95** | 28.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/27 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:NVT** | **92** | 31.43 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/25 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:PWR** | **92** | 18.13 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/30 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:KALU** | **86** | 8.7 | 🟢 Long (Strong) | Momentum / Hold | High | 3/19 | - |
| 5 | **NYSE:DTM** | **82** | 13.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/27 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:FSS** | **82** | 9.11 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/30 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MPWR** | **81** | 11.29 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/25 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:WT** | **78** | 8.07 | 🟢 Long (Strong) | Momentum / Hold | High | 8/19 | - |
| 9 | **NASDAQ:NBN** | **75** | 5.98 | 🟢 Long (Strong) | Momentum / Hold | High | 4/25 | - |
| 10 | **NYSE:PFS** | **74** | 5.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/24 | - |
| 11 | **NYSE:HG** | **74** | 6.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/24 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:CPRX** | **73** | 5.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 13 | **NASDAQ:AEIS** | **69** | 13.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/27 | - |
| 14 | **NYSE:ENVA** | **68** | 4.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/20 | - |
| 15 | **NYSE:DY** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/33 | - |
| 16 | **NASDAQ:NWBI** | **66** | 3.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/22 | - |
| 17 | **NASDAQ:SANM** | **66** | 3.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/31 | - |
| 18 | **NYSE:FAF** | **65** | 3.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/28 | - |
| 19 | **NYSE:GLW** | **62** | 3.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/30 | - |
| 20 | **NYSE:AROC** | **62** | 2.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/16 | - |
| 21 | **NASDAQ:ARM** | **61** | 4.65 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/29 | - |
| 22 | **NYSE:GRMN** | **60** | 7.4 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 23/17 | Sentiment Divergence (black swan masked by noise) |
| 23 | **CBOE:CBOE** | **60** | 9.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/18 | - |
| 24 | **NASDAQ:MTSI** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/17 | - |
| 25 | **NYSE:FN** | **56** | 6.56 | ⚪ No Trade (Weak Bullish) | Watch | Low | 17/20 | - |
| 26 | **NASDAQ:ADEA** | **56** | 3.28 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/23 | - |
| 27 | **NASDAQ:BGC** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/15 | - |
| 28 | **NYSE:PRIM** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/23 | - |
| 29 | **NYSE:SM** | **51** | 0.3 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/15 | - |
| 30 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/15 | - |
| 31 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/16 | - |
| 32 | **NYSE:CRC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 33 | **NASDAQ:RMBS** | **46** | -1.08 | ⚪ No Trade (Neutral) | Watch | Low | 3/36 | - |
| 34 | **NYSE:FOR** | **46** | -2.54 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 13/27 | - |
| 35 | **NYSE:SXI** | **45** | -1.48 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 8/28 | - |
| 36 | **NASDAQ:ADUS** | **36** | -3.28 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 4/19 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:KALU

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.7 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Kaiser Aluminum: Dangerous Valuation In May 2026
- 🟢 [Earnings|w3.32] A Look At Kaiser Aluminum (KALU) Valuation After Its Strong Q1 2026 Ea
- 🟢 [Analyst Action|w1.51] JP Morgan Downgrades Kaiser Aluminum to Underweight, Raises Price Targ

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | A Look At Kaiser Aluminum (KALU) Valuation After Its Strong  |
| 2026-05-05 | Earnings | 🟢 +1 | 3.87 | Finnhub | Kaiser Aluminum: Dangerous Valuation In May 2026 |
| 2026-04-30 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | JP Morgan Downgrades Kaiser Aluminum to Underweight, Raises  |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.07 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flows Drive Re
- 🟢 [Earnings|w1.95] WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record AUM and R
- 🟢 [Earnings|w1.91] WisdomTree Inc (NYSE:WT) Beats on Earnings, Posts Record Revenue in Q1

**📉 Bearish Factors:**
- 🔴 [Industry|w1.5] What WisdomTree (WT)'s Q1 Loss and Tokenized Treasury Push Means For S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | WT Q1 Deep Dive: Strategic Acquisitions and Diversified Flow |
| 2026-05-02 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | WisdomTree Inc (WT) Q1 2026 Earnings Call Highlights: Record |
| 2026-05-02 | Industry | 🔴 -1 | 1.5 | Yahoo Fina | What WisdomTree (WT)'s Q1 Loss and Tokenized Treasury Push M |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | Here's What Key Metrics Tell Us About WisdomTree, Inc. (WT)  |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | WisdomTree, Inc. (WT) Q1 Earnings and Revenues Beat Estimate |
| 2026-05-01 | Earnings | ⚪  0 | 1.91 | Finnhub | WisdomTree, Inc. (WT) Q1 2026 Earnings Call Transcript |
| 2026-05-01 | Earnings | 🟢 +1 | 1.91 | Finnhub | WisdomTree Inc (NYSE:WT) Beats on Earnings, Posts Record Rev |
| 2026-04-29 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Oppenheimer Maintains Outperform on WisdomTree, Raises Price |

---

### NASDAQ:NBN

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.98 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Northeast Bank Remains Compelling As Growth Continues
- 🟢 [Earnings|w1.64] A Look At Northeast Bank (NBN) Valuation After Strong Q3 2026 Earnings
- 🟢 [Analyst Action|w1.26] Keefe, Bruyette & Woods Maintains Market Perform on Northeast Bank, Ra

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | A Look At Northeast Bank (NBN) Valuation After Strong Q3 202 |
| 2026-05-01 | Earnings | 🟢 +1 | 1.91 | Finnhub | Northeast Bank Remains Compelling As Growth Continues |
| 2026-04-29 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Northeast Bank (NBN) Q3 2026 Earnings Call Highlights: Recor |
| 2026-04-29 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Keefe, Bruyette & Woods Maintains Market Perform on Northeas |

---

## 🟢 Mid Long (13)

### NYSE:PFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Keefe, Bruyette & Woods Maintains Outperform on Provident Finl Servs, 
- 🟢 [Industry|w1.5] PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Quality Rem
- 🟢 [Earnings|w1.36] Provident Financial Services (NYSE:PFS) Beats Q1 2026 Earnings Estimat

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Stonegate Capital Partners Updates Coverage on Provident Fin |
| 2026-05-02 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | PFS Q1 Deep Dive: Loan Growth, Diversification, and Credit Q |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Keefe, Bruyette & Woods Maintains Outperform on Provident Fi |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Provident (PFS) Q1 2026 Earnings Call Transcript |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Provident Financial (PFS) Beats Q1 Earnings Estimates |
| 2026-04-30 | Earnings | ⚪  0 | 1.64 | Finnhub | Provident Financial Services, Inc. (PFS) Q1 2026 Earnings Ca |
| 2026-04-29 | Earnings | 🟢 +1 | 1.36 | Finnhub | Provident Financial Services (NYSE:PFS) Beats Q1 2026 Earnin |
| 2026-04-29 | Earnings | 🟢 +1 | 1.36 | Finnhub | Provident Finl Servs Q1 EPS $0.61 Beats $0.55 Estimate, Sale |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 6.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] HG Q1 Deep Dive: Underwriting Discipline and Selective Growth Shape Ea
- 🟢 [Earnings|w1.95] Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call Highlights: St
- 🟢 [Analyst Action|w1.76] Citizens Maintains Market Outperform on Hamilton Insurance Group, Rais

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | HG Q1 Deep Dive: Underwriting Discipline and Selective Growt |
| 2026-05-02 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Hamilton Insurance Group Ltd (HG) Q1 2026 Earnings Call High |
| 2026-05-02 | Earnings | ⚪  0 | 1.95 | Yahoo Fina | Will Stronger Underwriting Margins and Lower Revenue Volumes |
| 2026-05-01 | Earnings | ⚪  0 | 1.91 | Finnhub | Hamilton Insurance Group, Ltd. (HG) Q1 2026 Earnings Call Tr |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Citizens Maintains Market Outperform on Hamilton Insurance G |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Hamilton Insurance (HG) Surpasses Q1 Earnings and Revenue Es |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Hamilton Insurance Group (NYSE:HG) Reports Upbeat Q1 CY2026 |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Will Catalyst (CPRX) Beat Estimates Again in Its Next Earnings Report?
- 🟢 [Earnings|w2.81] Catalyst Pharmaceutical (CPRX) Expected to Beat Earnings Estimates: Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Will Catalyst (CPRX) Beat Estimates Again in Its Next Earnin |
| 2026-05-04 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Catalyst Pharmaceutical (CPRX) Expected to Beat Earnings Est |
| 2026-04-30 | Industry | ⚪  0 | 1.08 | Yahoo Fina | A Look At Catalyst Pharmaceuticals (CPRX) Valuation After Re |

---

### NASDAQ:AEIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 13.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 27 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Advanced Energy Declares Quarterly Cash Dividend
- 🟢 [Earnings|w3.28] Advanced Energy Industries Q1 Earnings Call Highlights
- 🟢 [Earnings|w3.28] Advanced Energy Industries Tops Views, But Stock Tumbles Late

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Advanced Energy (AEIS) Q1 2026 Earnings Transcript |
| 2026-05-05 | Earnings | 🟢 +1 | 3.87 | Finnhub | Advanced Energy Declares Quarterly Cash Dividend |
| 2026-05-05 | Earnings | ⚪  0 | 2.76 | Seeking Al | Advanced Energy Industries, Inc. (AEIS) Q1 2026 Earnings Cal |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Advanced Energy (AEIS) Q1 Earnings: Taking a Look at Key Met |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Advanced Energy Industries (AEIS) Q1 Earnings and Revenues S |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Advanced Energy’s (NASDAQ:AEIS) Q1 CY2026: Beats On Revenue  |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Advanced Energy (AEIS) Q2 2025 Earnings Transcript |
| 2026-05-04 | Earnings | ⚪  0 | 3.28 | Finnhub | Advanced Energy Industries, Inc. (AEIS) Q1 2026 Earnings Cal |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Enova International (ENVA) Is Down 5.6% After Raising 2026 Guidance On
- 🟢 [Industry|w0.9] Why Enova International (ENVA) is a Top Growth Stock for the Long-Term

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Enova International (ENVA) Is Down 5.6% After Raising 2026 G |
| 2026-04-30 | Earnings | ⚪  0 | 1.64 | Finnhub | Enova International: Credit Where It's Due, But Not Enough U |
| 2026-04-29 | Industry | ⚪  0 | 0.9 | Yahoo Fina | Are You Looking for a Top Momentum Pick? Why Enova Internati |
| 2026-04-29 | Industry | 🟢 +1 | 0.9 | Yahoo Fina | Why Enova International (ENVA) is a Top Growth Stock for the |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 33 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.52] Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% Stake And
- 🟢 [Earnings|w1.64] Will Dycom Industries (DY) Beat Estimates Again in Its Next Earnings R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | Dycom Industries (DY) Is Up 5.6% After Vanguard Discloses 5% |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Will Dycom Industries (DY) Beat Estimates Again in Its Next  |

---

### NASDAQ:NWBI

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.3] Northwest Bancshares (NWBI) Upgraded to Buy: Here's What You Should Kn
- 🟢 [Analyst Action|w1.26] Keefe, Bruyette & Woods Maintains Market Perform on Northwest Bancshar
- 🟢 [Earnings|w1.17] Northwest Bancshares Inc (NWBI) Q1 2026 Earnings Call Highlights: Reco

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | Industry | ⚪  0 | 1.8 | Yahoo Fina | A Look At Northwest Bancshares (NWBI) Valuation As Shares Sh |
| 2026-04-30 | Analyst Action | 🟢 +1 | 1.3 | Yahoo Fina | Northwest Bancshares (NWBI) Upgraded to Buy: Here's What You |
| 2026-04-29 | Earnings | 🟢 +1 | 1.17 | Yahoo Fina | Northwest Bancshares Inc (NWBI) Q1 2026 Earnings Call Highli |
| 2026-04-29 | Industry | ⚪  0 | 0.9 | Yahoo Fina | NWBI Q1 Deep Dive: C&I Lending Momentum Drives Commercial Ex |
| 2026-04-29 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Keefe, Bruyette & Woods Maintains Market Perform on Northwes |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.36] Sanmina: Solid Q2 Beat, Stock Remains A Bargain At Just 19x FY26 P/E
- 🟢 [Industry|w1.26] What Makes Sanmina (SANM) a New Strong Buy Stock
- 🟢 [Industry|w1.26] Here's Why Sanmina (SANM) is a Strong Growth Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-01 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | What Makes Sanmina (SANM) a New Strong Buy Stock |
| 2026-05-01 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Here's Why Sanmina (SANM) is a Strong Growth Stock |
| 2026-04-29 | Earnings | 🟢 +1 | 1.36 | Finnhub | Sanmina: Solid Q2 Beat, Stock Remains A Bargain At Just 19x  |

---

### NYSE:FAF

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 28 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.36] Pick These 5 Bargain Stocks With Exciting EV-to-EBITDA Ratios
- 🟢 [Earnings|w1.36] A Look At First American Financial’s (FAF) Valuation After Strong Quar
- 🟢 [Industry|w0.9] First American Financial (FAF) is a Top-Ranked Value Stock: Should You

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Wall Street Analysts See a 25.8% Upside in First American Fi |
| 2026-04-29 | Industry | 🟢 +1 | 0.9 | Yahoo Fina | First American Financial (FAF) is a Top-Ranked Value Stock:  |
| 2026-04-29 | Industry | ⚪  0 | 1.05 | Finnhub | First American Title Introduces AgentNet® Assist: Title Inte |
| 2026-04-29 | Earnings | 🟢 +1 | 1.36 | Finnhub | Pick These 5 Bargain Stocks With Exciting EV-to-EBITDA Ratio |
| 2026-04-29 | Earnings | 🟢 +1 | 1.36 | Finnhub | A Look At First American Financial’s (FAF) Valuation After S |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Corning Meta Fiber Expansion Deepens Ties To AI Data Center Growth
- 🟢 [Industry|w1.8] Is Corning Incorporated (GLW) A Good Stock To Buy Now?
- 🟢 [Industry|w1.47] Buy 2 Communication Component Stocks to Tap Recent Rally

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.64] Jim Cramer Says “Corning Flew Too Close and Had Its Icarus Moment”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Is Corning (GLW) Stock Outpacing Its Computer and Technology |
| 2026-05-04 | Earnings | ⚪  0 | 3.28 | Finnhub | Jim Cramer Discusses Potential Stock Movement for Corning |
| 2026-05-03 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is Corning Incorporated (GLW) A Good Stock To Buy Now? |
| 2026-05-03 | Industry | 🟢 +1 | 2.1 | Finnhub | Corning Meta Fiber Expansion Deepens Ties To AI Data Center  |
| 2026-05-03 | Industry | ⚪  0 | 2.1 | Finnhub | Corning Shareholders Reelect Directors, Back Say-on-Pay, Rej |
| 2026-05-02 | Industry | ⚪  0 | 1.5 | Yahoo Fina | Jim Cramer’s a Believer in Corning (GLW) & Data Centers |
| 2026-05-01 | Industry | 🟢 +1 | 1.47 | Finnhub | Buy 2 Communication Component Stocks to Tap Recent Rally |
| 2026-04-30 | Earnings | 🔴 -1 | 1.64 | Finnhub | Jim Cramer Says “Corning Flew Too Close and Had Its Icarus M |

---

### NYSE:AROC

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 16 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Will Archrock Inc. (AROC) Beat Estimates Again in Its Next Earnings Re

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Will Archrock Inc. (AROC) Beat Estimates Again in Its Next E |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | How The Archrock (AROC) Investment Story Is Shifting With Ne |
| 2026-04-30 | Analyst Action | ⚪  0 | 1.3 | Yahoo Fina | Archrock Inc. (AROC) Outperforms Broader Market: What You Ne |
| 2026-04-29 | Industry | ⚪  0 | 0.9 | Yahoo Fina | EPD vs AROC: Which Midstream Player Is the Better Investment |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 4.65 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 29 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] UBS Adjusts Price Target on ARM to $245 From $175, Maintains Buy Ratin
- 🟢 [Industry|w2.1] Is Arm Holdings plc (ARM) A Good Stock To Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | UBS Adjusts Price Target on ARM to $245 From $175, Maintains |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Jim Cramer Calls Arm Holdings a “Real Good One” |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Will Top-Line Improvement Aid Arm Holdings' Q4 Earnings? |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | How The AI CPU Debate Is Rewriting The Story For Arm Holding |
| 2026-05-04 | M&A | ⚪  0 | 3.02 | Yahoo Fina | Taiwan Semi Just Dumped Its Stake in ARM Stock. Why Investor |
| 2026-05-04 | Earnings | ⚪  0 | 3.28 | Finnhub | Option Volatility And Earnings Report For May 4 - 8 |
| 2026-05-03 | Industry | 🟢 +1 | 2.1 | Finnhub | Is Arm Holdings plc (ARM) A Good Stock To Buy Now? |
| 2026-05-03 | Industry | ⚪  0 | 2.1 | Finnhub | Jim Cramer Notes Arm Holdings Stock Is “Going Parabolic” |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 9.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 18 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] These Analysts Increase Their Forecasts On Cboe Global Markets Followi
- 🟢 [Analyst Action|w3.02] Barclays Maintains Overweight on Cboe Global Markets, Raises Price Tar
- 🟢 [Analyst Action|w3.02] Keefe, Bruyette & Woods Maintains Market Perform on Cboe Global Market

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] AMZW’s Weekly Payouts Drop 79% as Volatility Collapses; Can Investors 
- 🔴 [Earnings|w2.73] Do New Inverse Lumentum ETFs Quietly Reframe the AI Optics Story for L
- 🔴 [Industry|w2.52] Market Greed Is Back: Oil and the Hormuz Strait Didn’t Get the Memo.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Jefferies Adjusts Price Target on Cboe Global Markets to $35 |
| 2026-05-05 | Industry | 🔴 -1 | 2.98 | Finnhub | AMZW’s Weekly Payouts Drop 79% as Volatility Collapses; Can  |
| 2026-05-05 | Buyback | ⚪  0 | 3.57 | Finnhub | OSB GROUP PLC - Transaction in Own Shares |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Analyst Report: Cboe Global Markets, Inc. |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | TD Cowen Adjusts Cboe Global Markets PT to $365 From $293, M |
| 2026-05-04 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Piper Sandler Adjusts Cboe Global Markets PT to $355 From $3 |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | Goldman Sachs Adjusts Cboe Global Markets Price Target to $2 |
| 2026-05-04 | Industry | ⚪  0 | 2.16 | Yahoo Fina | UBS Adjusts Price Target on Cboe Global Markets to $335 From |

---

## ⚠️ Overheated (6)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 28.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] TD Cowen Maintains Buy on MasTec, Raises Price Target to $445
- 🟢 [Analyst Action|w3.02] Goldman Sachs Maintains Buy on MasTec, Raises Price Target to $487
- 🟢 [Analyst Action|w3.02] Citigroup Maintains Buy on MasTec, Raises Price Target to $483

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | TD Cowen Maintains Buy on MasTec, Raises Price Target to $44 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Goldman Sachs Maintains Buy on MasTec, Raises Price Target t |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup Maintains Buy on MasTec, Raises Price Target to $4 |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Truist Securities Maintains Buy on MasTec, Raises Price Targ |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Keybanc Maintains Overweight on MasTec, Raises Price Target  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Baird Maintains Outperform on MasTec, Raises Price Target to |
| 2026-05-03 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MasTec (MTZ) Is Up 11.0% After Record Q1 Results And Raised  |
| 2026-05-03 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MTZ Q1 Deep Dive: Infrastructure Demand and Backlog Growth D |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 31.43 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y
- 🟢 [Analyst Action|w3.02] UBS Maintains Buy on nVent Electric, Raises Price Target to $200
- 🟢 [Analyst Action|w3.02] Goldman Sachs Maintains Buy on nVent Electric, Raises Price Target to 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Compared to Estimates, nVent (NVT) Q1 Earnings: A Look at Ke |
| 2026-05-04 | Earnings | 🟢 +1 | 3.28 | Finnhub | nVent Electric Q1 Earnings Beat Estimates, Revenues Rise Y/Y |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | UBS Maintains Buy on nVent Electric, Raises Price Target to  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Goldman Sachs Maintains Buy on nVent Electric, Raises Price  |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Evercore ISI Group Maintains Outperform on nVent Electric, R |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | RBC Capital Maintains Outperform on nVent Electric, Raises P |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Barclays Maintains Overweight on nVent Electric, Raises Pric |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Keybanc Maintains Overweight on nVent Electric, Raises Price |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 18.13 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] TD Cowen Maintains Buy on Quanta Services, Raises Price Target to $775
- 🟢 [Analyst Action|w3.02] Goldman Sachs Maintains Buy on Quanta Services, Raises Price Target to
- 🟢 [Earnings|w2.27] PWR Q1 Deep Dive: Strong Data Center and Utility Demand Drive Robust G

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | TD Cowen Maintains Buy on Quanta Services, Raises Price Targ |
| 2026-05-04 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Goldman Sachs Maintains Buy on Quanta Services, Raises Price |
| 2026-05-03 | Industry | ⚪  0 | 2.1 | Finnhub | Jim Cramer on Quanta Services: “It’s Been Worth Owning” |
| 2026-05-02 | Earnings | 🟢 +1 | 2.27 | Finnhub | PWR Q1 Deep Dive: Strong Data Center and Utility Demand Driv |
| 2026-05-02 | Earnings | 🟢 +1 | 2.27 | Finnhub | Quanta Services Q1 Earnings Call Highlights |
| 2026-05-02 | Earnings | 🟢 +1 | 2.27 | Finnhub | Why Quanta (PWR) Stock Is Up Today |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Citigroup Maintains Buy on Quanta Services, Raises Price Tar |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | JP Morgan Maintains Overweight on Quanta Services, Raises Pr |

---

### NYSE:DTM

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 13.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecasts, And Ana
- 🟢 [Earnings|w1.91] DT Midstream Q1 Earnings Call Highlights
- 🟢 [Analyst Action|w1.76] Barclays Maintains Equal-Weight on DT Midstream, Raises Price Target t

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | 🟢 +1 | 3.28 | Finnhub | Earnings Beat: DT Midstream, Inc. Just Beat Analyst Forecast |
| 2026-05-01 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | A Look At DT Midstream (DTM) Valuation After Strong Q1 Resul |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | DT Midstream (DTM) Q1 2026 Earnings Transcript |
| 2026-05-01 | Earnings | 🟢 +1 | 1.91 | Finnhub | DT Midstream Q1 Earnings Call Highlights |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Equal-Weight on DT Midstream, Raises Pric |
| 2026-04-30 | Earnings | ⚪  0 | 1.64 | Finnhub | DT Midstream, Inc. (DTM) Q1 2026 Earnings Call Transcript |
| 2026-04-30 | Earnings | 🟢 +1 | 1.64 | Finnhub | DT Midstream Inc (NYSE:DTM) Q1 Earnings Beat Analysts' Estim |
| 2026-04-30 | Earnings | 🟢 +1 | 1.64 | Finnhub | DT Midstream Reports Strong First Quarter 2026 Results |

---

### NYSE:FSS

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 9.11 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Federal Signal Corporation Just Beat EPS By 31%: Here's What Analysts 
- 🟢 [Analyst Action|w1.76] DA Davidson Maintains Neutral on Federal Signal, Raises Price Target t
- 🟢 [Earnings|w1.64] Federal Signal Q1 Earnings Call Highlights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-01 | Policy | ⚪  0 | 1.51 | Yahoo Fina | Federal Signal (FSS) Is Up 1.55% in One Week: What You Shoul |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | DA Davidson Maintains Neutral on Federal Signal, Raises Pric |
| 2026-05-01 | Earnings | 🟢 +1 | 1.91 | Finnhub | Federal Signal Corporation Just Beat EPS By 31%: Here's What |
| 2026-04-30 | Earnings | 🟢 +1 | 1.64 | Finnhub | Federal Signal Q1 Earnings Call Highlights |
| 2026-04-29 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Federal Signal (FSS) Q1 2026 Earnings Transcript |
| 2026-04-29 | Earnings | ⚪  0 | 1.17 | Yahoo Fina | Federal Signal (FSS) Q1 Earnings and Revenues Surpass Estima |
| 2026-04-29 | Policy | 🟢 +1 | 1.08 | Yahoo Fina | Federal Signal (NYSE:FSS) Reports Strong Q1 CY2026, Stock So |
| 2026-04-29 | Earnings | ⚪  0 | 1.36 | Finnhub | Federal Signal Corporation (FSS) Q1 2026 Earnings Call Trans |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.29 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] MPWR Q1 Deep Dive: Strong Segment Growth, Cautious Margin Outlook Amid
- 🟢 [Earnings|w1.91] Monolithic Power's Q1 Earnings Beat Estimates on Solid Revenue Growth
- 🟢 [Analyst Action|w1.76] TD Cowen Maintains Buy on Monolithic Power Systems, Raises Price Targe

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-03 | Industry | ⚪  0 | 1.8 | Yahoo Fina | How The Story Is Shifting For Monolithic Power Systems (MPWR |
| 2026-05-03 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Analysts Are Upgrading Monolithic Power Systems, Inc. (NASDA |
| 2026-05-03 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MPWR Q1 Deep Dive: Strong Segment Growth, Cautious Margin Ou |
| 2026-05-01 | Earnings | ⚪  0 | 1.64 | Yahoo Fina | MPWR Q1 2026 Earnings Call Transcript |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | TD Cowen Maintains Buy on Monolithic Power Systems, Raises P |
| 2026-05-01 | Earnings | 🟢 +1 | 1.91 | Finnhub | Monolithic Power's Q1 Earnings Beat Estimates on Solid Reven |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Wells Fargo Maintains Overweight on Monolithic Power Systems |
| 2026-05-01 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Keybanc Maintains Overweight on Monolithic Power Systems, Ra |

---

## ⚠️ Risk Pattern (1)

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 7.4 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?
- 🟢 [Earnings|w1.95] Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analysts Are For
- 🟢 [Earnings|w1.64] Garmin Ltd (GRMN) Q1 2026 Earnings Call Highlights: Record Revenue and

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.82] Garmin redefines luxury home audio with revolutionary new Primacy® sys
- 🔴 [Analyst Action|w1.51] Barclays Maintains Equal-Weight on Garmin, Lowers Price Target to $238

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Black Swan | 🔴 -1 | 3.82 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Barclays Adjusts Garmin's Price Target to $238 From $240, Ke |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Garmin Beats Q1 Expectations as Fitness Segment Surges, Morg |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Saudi Arabia $10.19 Bn Wearable Medical Devices Market Trend |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Morgan Stanley Trims Price Target on Garmin to $249 From $25 |

---

## 🔴 Avoid / Short (4)

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 7.4 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy?
- 🟢 [Earnings|w1.95] Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analysts Are For
- 🟢 [Earnings|w1.64] Garmin Ltd (GRMN) Q1 2026 Earnings Call Highlights: Record Revenue and

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.82] Garmin redefines luxury home audio with revolutionary new Primacy® sys
- 🔴 [Analyst Action|w1.51] Barclays Maintains Equal-Weight on Garmin, Lowers Price Target to $238

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Black Swan | 🔴 -1 | 3.82 | Yahoo Fina | Garmin redefines luxury home audio with revolutionary new Pr |
| 2026-05-04 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Garmin (GRMN) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Don't Overlook Garmin (GRMN) International Revenue Trends Wh |
| 2026-05-02 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Garmin Ltd. Just Recorded A 14% EPS Beat: Here's What Analys |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Barclays Adjusts Garmin's Price Target to $238 From $240, Ke |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Garmin Beats Q1 Expectations as Fitness Segment Surges, Morg |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Saudi Arabia $10.19 Bn Wearable Medical Devices Market Trend |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Morgan Stanley Trims Price Target on Garmin to $249 From $25 |

---

### NYSE:FOR

| Metric | Detail |
|--------|--------|
| Normalized Score | **46** / 100 |
| Raw Weighted Score | -2.54 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 13 / 27 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] This gold-timing indicator just hit a bottom &#x2014; and history says
- 🟢 [Industry|w2.55] Crypto Exchange Bullish Strikes $4.2 Billion Deal for Transfer Agent i

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.82] Morgan Stanley&#x2019;s Investment Banking Program in Budapest Hit by 
- 🔴 [Black Swan|w3.82] A Hidden Liability for U.S. Cities: Looming Infrastructure Repair Cost

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 2.55 | MarketWatc | This gold-timing indicator just hit a bottom &#x2014; and hi |
| 2026-05-05 | Industry | ⚪  0 | 2.55 | MarketWatc | Stock Market Today: Oil Prices Slip, But Remain High as U.S. |
| 2026-05-05 | Industry | 🟢 +1 | 2.55 | MarketWatc | Crypto Exchange Bullish Strikes $4.2 Billion Deal for Transf |
| 2026-05-05 | Policy | ⚪  0 | 3.06 | MarketWatc | I Asked ChatGPT to Manage a Stock Portfolio. Here&#x2019;s H |
| 2026-05-05 | Black Swan | 🔴 -1 | 3.82 | MarketWatc | Morgan Stanley&#x2019;s Investment Banking Program in Budape |
| 2026-05-05 | M&A | ⚪  0 | 3.57 | MarketWatc | EQT Raises Takeover Bid For Intertek Again |
| 2026-05-05 | Black Swan | 🔴 -1 | 3.82 | MarketWatc | A Hidden Liability for U.S. Cities: Looming Infrastructure R |
| 2026-05-05 | Industry | ⚪  0 | 2.55 | MarketWatc | Oil Futures Ease As Market Awaits Hormuz Developments |

---

### NYSE:SXI

| Metric | Detail |
|--------|--------|
| Normalized Score | **45** / 100 |
| Raw Weighted Score | -1.48 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth Markets Dri
- 🟢 [Earnings|w1.95] Standex International Corp (SXI) Q3 2026 Earnings Call Highlights: Str

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.7] Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redefine Its Lo
- 🔴 [Earnings|w1.64] Standex International Corp (NYSE:SXI) Q3 Earnings Miss Estimates, Stoc
- 🔴 [Earnings|w1.64] Standex International Q3 Adj. EPS $2.21 Misses $2.25 Estimate, Sales $

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-05 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | SXI Q1 Deep Dive: Portfolio Simplification and Fast-Growth M |
| 2026-05-03 | Black Swan | 🔴 -1 | 2.7 | Yahoo Fina | Does Standex (SXI)ʼs Dividend Hike and Portfolio Shift Redef |
| 2026-05-02 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Standex International Corp (SXI) Q3 2026 Earnings Call Highl |
| 2026-05-01 | Earnings | ⚪  0 | 1.91 | Finnhub | Standex International Corporation (SXI) Q3 2026 Earnings Cal |
| 2026-04-30 | Earnings | ⚪  0 | 1.4 | Yahoo Fina | Standex International (SXI) Misses Q3 Earnings and Revenue E |
| 2026-04-30 | Industry | ⚪  0 | 1.08 | Yahoo Fina | Standex (NYSE:SXI) Posts Q1 CY2026 Sales In Line With Estima |
| 2026-04-30 | Earnings | 🔴 -1 | 1.64 | Finnhub | Standex International Corp (NYSE:SXI) Q3 Earnings Miss Estim |
| 2026-04-30 | Earnings | 🔴 -1 | 1.64 | Finnhub | Standex International Q3 Adj. EPS $2.21 Misses $2.25 Estimat |

---

### NASDAQ:ADUS

| Metric | Detail |
|--------|--------|
| Normalized Score | **36** / 100 |
| Raw Weighted Score | -3.28 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 4 / 19 |

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadows Adjusted

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Addus HomeCare (ADUS) Q1 Earnings Top Estimates |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Addus HomeCare (NASDAQ:ADUS) Misses Q1 CY2026 Sales Expectat |
| 2026-05-04 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Addus HomeCare (ADUS) Reports Q1: Everything You Need To Kno |
| 2026-05-04 | Earnings | 🔴 -1 | 3.28 | Finnhub | Addus HomeCare (NASDAQ:ADUS) Q1 2026 Revenue Miss Overshadow |

---

## ⚪ Watch / Neutral (10)

### NASDAQ:MTSI
- Score: 57/100 | raw: 1.64 | News: 1 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 56/100 | raw: 6.56 | News: 17 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 56/100 | raw: 3.28 | News: 9 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 55/100 | raw: 1.26 | News: 3 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PRIM
- Score: 55/100 | raw: 1.08 | News: 3 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 51/100 | raw: 0.3 | News: 9 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 5 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CRC
- Score: 50/100 | raw: 0 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 46/100 | raw: -1.08 | News: 3 kept / 36 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-05T13:26:35.154Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha*