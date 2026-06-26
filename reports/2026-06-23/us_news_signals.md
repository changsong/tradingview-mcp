# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-23  |  **News Window:** 2026-06-16 ~ 2026-06-23
**Stock Pool:** us_selected.txt (111)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DELL** | **100** | 12.42 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:MRVL** | **99** | 11.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:KLAC** | **96** | 10.96 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:AMAT** | **92** | 10 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:INTC** | **89** | 20.28 | 🟢 Long (Strong) | Momentum / Hold | High | 18/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:AMKR** | **87** | 8.84 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 7 | **NASDAQ:MU** | **86** | 8.64 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 8 | **NYSE:JBL** | **82** | 7.71 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:VIAV** | **82** | 7.58 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 4/0 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:WDC** | **81** | 7.44 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 11 | **NASDAQ:ON** | **81** | 7.55 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | - |
| 12 | **NASDAQ:LRCX** | **80** | 7.14 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 13 | **NYSE:LLY** | **78** | 6.72 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 14 | **NASDAQ:ARM** | **78** | 6.79 | 🟢 Long (Strong) | Momentum / Hold | High | 10/0 | - |
| 15 | **NYSE:VRT** | **78** | 6.62 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 16 | **NYSE:APH** | **77** | 6.49 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:ETN** | **74** | 5.71 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/0 | Overheated Sentiment (one-sided bullish) |
| 18 | **NASDAQ:ADI** | **74** | 5.64 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 19 | **NYSE:GE** | **72** | 5.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 20 | **NYSE:C** | **71** | 4.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 21 | **NYSE:GEV** | **70** | 4.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 22 | **NYSE:COHR** | **70** | 4.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 23 | **NASDAQ:STX** | **68** | 4.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 24 | **NYSE:KEYS** | **67** | 4.01 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 25 | **NYSE:GNRC** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | Sentiment Strengthening UP (trend) |
| 26 | **NASDAQ:AEHR** | **66** | 3.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 27 | **NASDAQ:QCOM** | **65** | 3.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 28 | **NYSE:MTZ** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 29 | **NYSE:PWR** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 30 | **NASDAQ:ASML** | **60** | 5.3 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/0 | Bearish-to-Bullish Reversal (reversal) |
| 31 | **NYSE:MS** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 32 | **NYSE:TT** | **59** | 2.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 33 | **NASDAQ:CSCO** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 34 | **NASDAQ:INCY** | **59** | 2.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 35 | **NASDAQ:FLEX** | **58** | 2.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 36 | **NYSE:ANET** | **58** | 1.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 37 | **NASDAQ:WWD** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NASDAQ:HON** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 39 | **NYSE:HPE** | **55** | 1.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 40 | **NASDAQ:BGC** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 41 | **NASDAQ:CRWD** | **55** | 1.3 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 42 | **NYSE:NVT** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 43 | **NYSE:DY** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 44 | **NASDAQ:SNDK** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 45 | **NASDAQ:ADEA** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 46 | **NASDAQ:CRDO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 47 | **NYSE:TSM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 48 | **NASDAQ:CORZ** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | Rumor-Driven (false positive risk) |
| 49 | **NYSE:DKS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 50 | **NASDAQ:NVMI** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 51 | **NYSE:BAP** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 52 | **NYSE:DOV** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 53 | **NASDAQ:TLN** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 54 | **NASDAQ:EQIX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 55 | **NASDAQ:CINF** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 56 | **NYSE:FAF** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 57 | **NASDAQ:CDNS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 58 | **NYSE:GLW** | **51** | 0.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 59 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NASDAQ:MNST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 66 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:PANW** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 68 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NASDAQ:ALAB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 77 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 78 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 79 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 80 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 81 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 82 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 83 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 84 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 85 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 86 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 87 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 88 | **NASDAQ:CRWV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 89 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 90 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 91 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 92 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 93 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 94 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 95 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 96 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 97 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 98 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 99 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 100 | **NYSE:AS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 101 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 102 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 103 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 104 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 105 | **NYSE:STM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 106 | **NASDAQ:MTSI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 107 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 108 | **NASDAQ:VICR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 109 | **NYSE:FCX** | **49** | -0.2 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 110 | **NASDAQ:AMD** | **47** | -0.61 | ⚪ No Trade (Neutral) | Watch | Low | 8/0 | - |
| 111 | **NYSE:ENS** | **46** | -1.06 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |

---

## 🟢 Strong Long (10)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Applied Materials (AMAT) and EssilorLuxottica Sign Long-Term Deal, Reu
- 🟢 [Analyst Action|w3.57] A Growing Supply Gap Has Analysts Eyeing Applied Materials (AMAT)
- 🟢 [Earnings|w2.27] Can AMAT's AGS Business Become a Long-Term Growth Driver?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | A Growing Supply Gap Has Analysts Eyeing Applied Materials ( |
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials (AMAT) and EssilorLuxottica Sign Long-Term |
| 2026-06-20 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials Is Now More Expensive Than Its Dot-Com Era |
| 2026-06-19 | Earnings | 🟢 +1 | 2.27 | Finnhub | Can AMAT's AGS Business Become a Long-Term Growth Driver? |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | TER vs. AMAT: Which AI Semiconductor Stock Is the Better Buy |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 20.28 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] A New Chip Partnership Between Apple and Intel Is a Long-Term Catalyst
- 🟢 [M&A|w4.16] Intel (INTC) Lands Google And Tesla Deals As U.S. Takes Equity Stake
- 🟢 [Earnings|w3.87] Intel vs Qualcomm: Which AI Stock Is The Better Buy

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.02] Intel: Levitating On AI Hype
- 🔴 [Industry|w0.6] As Anthropic Nears $1 Trillion Valuation, Tech Veterans Warn Against R
- 🔴 [Analyst Action|w0.5] Intel: The Re-Rating Has Gone Too Far

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🟢 +1 | 0.7 | Finnhub | Why Did INTC, KEEL, APGE Stocks Hit 52-Week Highs Today? |
| 2026-06-23 | Industry | 🟢 +1 | 0.7 | Finnhub | TPIsoftware Adopts Intel Xeon 6 Processors, Defining a New S |
| 2026-06-23 | Industry | 🟢 +1 | 0.7 | Finnhub | Why Intel (INTC) Stock Is Trading Up Today |
| 2026-06-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Intel Has a Warning for AMD Stock Investors |
| 2026-06-22 | Rumor | 🟢 +1 | 1.78 | Finnhub | Intel’s Surge on an Apple Chip Deal Means Investors Are Bett |
| 2026-06-22 | Industry | 🔴 -1 | 0.6 | Finnhub | As Anthropic Nears $1 Trillion Valuation, Tech Veterans Warn |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Nvidia Stock Is Falling on a Good Day for Intel and Other Ch |
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Intel CEO gives investors a reality check |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.64 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] MU Stock Rises as Micron Teams Up With Anthropic on AI Infrastructure
- 🟢 [Analyst Action|w3.57] Why Micron (MU) Stock Is Up Today
- 🟢 [Earnings|w0.91] Micron (MU) Q2 Earnings: What To Expect

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Earnings | 🟢 +1 | 0.91 | Finnhub | Micron (MU) Q2 Earnings: What To Expect |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Micron (MU) Stock Is Up Today |
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | MU Stock Rises as Micron Teams Up With Anthropic on AI Infra |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.71 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Jabil Shares Jumped on Earnings as AI Demand Boosts Its Business. JBL 
- 🟢 [Earnings|w1.91] JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength
- 🟢 [Analyst Action|w1.43] Baird Raises its Price Target on Jabil (JBL)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jabil Shares Jumped on Earnings as AI Demand Boosts Its Busi |
| 2026-06-22 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Baird Raises its Price Target on Jabil (JBL) |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Jabil (JBL) Stock After 7x Five-Year Return Is There Still V |
| 2026-06-18 | Earnings | 🟢 +1 | 1.91 | Finnhub | JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength |
| 2026-06-17 | Earnings | 🟢 +1 | 0.5 | Seeking Al | Jabil Inc. (JBL) Q3 2026 Earnings Call Transcript |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.44 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Why Western Digital (WDC) Dipped More Than Broader Market Today
- 🟢 [Analyst Action|w3.57] JPMorgan Lifts PT on Western Digital Corporation (WDC)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Western Digital (WDC) Stock After 200% YTD Surge Is There St |
| 2026-06-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Why Western Digital (WDC) Dipped More Than Broader Market To |
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Western Digital Corporation (WDC) is Attracting Investor Att |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | JPMorgan Lifts PT on Western Digital Corporation (WDC) |

---

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Wells Fargo Maintains an “Overweight” rating on ON Semiconductor Corpo
- 🟢 [Industry|w2.52] ON Semiconductor (ON) Launches GaNEXUS For AI Data Centers And Robotic
- 🟢 [Industry|w1.75] ON Semiconductor (ON) Launches GaNEXUS Gallium Nitride Power Portfolio

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] ON Semiconductor (ON) Stock Could Be 17% Overvalued After Its Recent R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Alphabet Tumbles 6%, SpaceX Sinks 10% On Bond Sale: Stock Ma |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | ON Semiconductor Corporation (ON) is Attracting Investor Att |
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Apogee Therapeutics, Definium Therapeutics, Baldwin Insuranc |
| 2026-06-21 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Maintains an “Overweight” rating on ON Semicondu |
| 2026-06-21 | Industry | 🟢 +1 | 2.52 | Finnhub | ON Semiconductor (ON) Launches GaNEXUS For AI Data Centers A |
| 2026-06-20 | Industry | 🔴 -1 | 0.84 | Finnhub | ON Semiconductor (ON) Stock Could Be 17% Overvalued After It |
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Stocks to Buy Now Before Wall Street Catches On |
| 2026-06-19 | Industry | 🟢 +1 | 1.75 | Finnhub | ON Semiconductor (ON) Launches GaNEXUS Gallium Nitride Power |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.72 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Is Eli Lilly and Company (LLY) among the Best Longevity and Anti-Aging
- 🟢 [M&A|w1.96] Eli Lilly (LLY) Taps BioArctic As Dealmaking Push Broadens Its Pipelin
- 🟢 [Industry|w0.6] Eli Lilly & Co. (NYSE:LLY): A High-Growth Champion Aligned with Navell

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | M&A | 🟢 +1 | 1.96 | Finnhub | Eli Lilly (LLY) Taps BioArctic As Dealmaking Push Broadens I |
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | Is Eli Lilly and Company (LLY) among the Best Longevity and  |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Eli Lilly & Co. (NYSE:LLY): A High-Growth Champion Aligned w |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.79 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Why Bernstein Just Raised Its Price Target on Arm Stock by Nearly 70%
- 🟢 [Analyst Action|w1.51] AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance'
- 🟢 [Industry|w1.26] Arm (ARM) Launches Neural Dawn To Show How It Wants In On Mobile AI Ga

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.76] New Street Research Downgrades ARM Holdings to Neutral

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-20 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Bernstein Just Raised Its Price Target on Arm Stock by N |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Advanced Micro Devices vs. Arm Holdings: Which AI CPU Stock  |
| 2026-06-18 | Analyst Action | 🔴 -1 | 1.76 | Finnhub | New Street Research Downgrades ARM Holdings to Neutral |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Did RXT, NBIS, ARM Stocks Surge To 52-Week Highs? |
| 2026-06-17 | Industry | 🟢 +1 | 1.26 | Finnhub | Arm (ARM) Launches Neural Dawn To Show How It Wants In On Mo |
| 2026-06-17 | Industry | 🟢 +1 | 1.26 | Finnhub | Arm (ARM) Introduces Neural Dawn to Showcase New Neural Grap |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | INTC, ARM, AMD Stocks Gain Today — Bernstein Supercharges AI |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance' |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.62 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] CoolIt Innovation Supports Vertiv’s (VRT) Long-Term Outlook, Says GLJ 
- 🟢 [M&A|w2.45] Vertiv Holdings Co (VRT) Is Up 11.8% After AI-Driven Guidance Hike And
- 🟢 [Industry|w0.6] 3 Reasons Investors Love Vertiv (VRT)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | 3 Reasons Investors Love Vertiv (VRT) |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | CoolIt Innovation Supports Vertiv’s (VRT) Long-Term Outlook, |
| 2026-06-19 | M&A | 🟢 +1 | 2.45 | Finnhub | Vertiv Holdings Co (VRT) Is Up 11.8% After AI-Driven Guidanc |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.49 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen With Stron
- 🟢 [Industry|w1.19] Amphenol (APH) Is Becoming A Key Supplier For The AI Data Center Build
- 🟢 [Analyst Action|w0.84] Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supplier for A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Amphenol (APH) Is Becoming A Key Supplier For The AI Data Ce |
| 2026-06-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen  |
| 2026-06-19 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supp |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | NVT vs. APH: Which Electrical Infrastructure Stock is a Bett |
| 2026-06-18 | Industry | 🟢 +1 | 0.59 | Finnhub | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |

---

## 🟢 Mid Long (12)

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.64 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Analog Devices (ADI) Up 13.1% Since Last Earnings Report: Can It Conti
- 🟢 [Earnings|w2.27] Analog Devices (ADI) Stock Could Be 3.7% Undervalued After Earnings Be
- 🟢 [Industry|w0.6] Analog Devices (ADI) is a Great Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Analog Devices (ADI) is a Great Momentum Stock: Should You B |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Reflecting On Analog Semiconductors Stocks’ Q1 Earnings: Ana |
| 2026-06-19 | Earnings | 🟢 +1 | 2.27 | Finnhub | Analog Devices (ADI) Up 13.1% Since Last Earnings Report: Ca |
| 2026-06-19 | Earnings | 🟢 +1 | 2.27 | Finnhub | Analog Devices (ADI) Stock Could Be 3.7% Undervalued After E |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | ADI vs. ALAB: Which AI Semiconductor Stock is a Better Buy? |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] GE Vernova Stock Raised The Bar, Now It Has To Prove It
- 🟢 [Industry|w0.59] The Overlooked Signal In GE Stock's Shipping Delays
- 🟢 [Industry|w0.5] I'm Calling It: GE Vernova (GEV) Is a Buy Before This Catalyst Drops

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.64] Can GE Aerospace Boost Margin Performance Amid Cost Pressures?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | GE Vernova Stock Raised The Bar, Now It Has To Prove It |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | I'm Calling It: GE Vernova (GEV) Is a Buy Before This Cataly |
| 2026-06-19 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Believes “GE Aerospace Is Fantastic” |
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Aerospace Trades Like an AI Company. Credit Larry Culp’s  |
| 2026-06-18 | Industry | 🟢 +1 | 0.59 | Finnhub | The Overlooked Signal In GE Stock's Shipping Delays |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Vernova Supplier Breaks Out As Data Centers Lift Construc |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Is GE Stock's Large Backlog Enough To Out-Fly a Slowdown? |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | Is GE (GE) Quietly Rewiring Its Aerospace Identity Through A |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Citigroup (C) Could Surpass Long-Term Profitability Target, According 
- 🟢 [Earnings|w0.77] Citigroup (C) Rises As Market Takes a Dip: Key Facts
- 🟢 [Industry|w0.6] Citigroup Inc. (C): One of The Elite Financial Stocks to Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Earnings | 🟢 +1 | 0.77 | Finnhub | Citigroup (C) Rises As Market Takes a Dip: Key Facts |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Citigroup Inc. (C): One of The Elite Financial Stocks to Buy |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citigroup (C) Could Surpass Long-Term Profitability Target,  |

---

### NYSE:GEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] GE Vernova (GEV) Launches Microsoft Data Center Power Venture With Jou
- 🟢 [Industry|w0.6] GE Vernova (GEV) – Among the 13 Best Electrical Infrastructure Stocks 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | GE Vernova (GEV) – Among the 13 Best Electrical Infrastructu |
| 2026-06-22 | Earnings | ⚪  0 | 0.77 | Finnhub | Unpacking Q1 Earnings: GE Vernova (NYSE:GEV) In The Context  |
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | GE Vernova (GEV) Launches Microsoft Data Center Power Ventur |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.1] Is Coherent (COHR) One of the Best US Stocks to Buy and Hold for the N
- 🟢 [Policy|w1.51] Coherent (COHR) Is Up 7.5% After CHIPS-Backed Texas AI Photonics Expan
- 🟢 [Policy|w1.51] Coherent (COHR) Wins Up To $50 Million For Texas AI Chip Expansion

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.84] Is Coherent Corp. (COHR) Among the Best Photonic Computing Stocks to B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Policy | 🟢 +1 | 2.1 | Finnhub | Is Coherent (COHR) One of the Best US Stocks to Buy and Hold |
| 2026-06-19 | Analyst Action | 🔴 -1 | 0.84 | Finnhub | Is Coherent Corp. (COHR) Among the Best Photonic Computing S |
| 2026-06-17 | Policy | 🟢 +1 | 1.51 | Finnhub | Coherent (COHR) Is Up 7.5% After CHIPS-Backed Texas AI Photo |
| 2026-06-17 | Policy | 🟢 +1 | 1.51 | Finnhub | Coherent (COHR) Wins Up To $50 Million For Texas AI Chip Exp |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | AAOI, LITE, COHR, MRVL Stocks Bounce Back Overnight: Why AI  |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Mizuho Lifts PT on Seagate Technology Holdings (STX)
- 🟢 [Industry|w0.7] Seagate Technology Holdings (NASDAQ:STX) Passes Minervini Trend Templa

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Mizuho Lifts PT on Seagate Technology Holdings (STX) |
| 2026-06-20 | Industry | ⚪  0 | 0.5 | Finnhub | Seagate (STX) Stock After 7x Rally Is The AI Storage Story P |
| 2026-06-19 | Industry | 🟢 +1 | 0.7 | Finnhub | Seagate Technology Holdings (NASDAQ:STX) Passes Minervini Tr |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.01 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued After AI 
- 🟢 [Earnings|w1.91] Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It Continue?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Inspection Instruments Stocks Q1 Highlights: Keysight (NYSE: |
| 2026-06-19 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued |
| 2026-06-18 | Earnings | 🟢 +1 | 1.91 | Finnhub | Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It C |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Generac Holdings (GNRC) Announces Acquisition of New Facility in Illin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | Generac Holdings (GNRC) Announces Acquisition of New Facilit |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Aehr Test Systems Follow-On Production Order For A Fully Automated FOX
- 🟢 [Analyst Action|w1.51] Why Is Aehr Test Systems Stock Soaring Wednesday?
- 🟢 [Industry|w0.5] Aehr jumps on receiving follow-on order from 'major' silicon photonics

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Aehr Test Systems: Crucial For Photonics But Not For Your Lo |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Why Is Aehr Test Systems Stock Soaring Wednesday? |
| 2026-06-17 | M&A | 🟢 +1 | 1.76 | Finnhub | Aehr Test Systems Follow-On Production Order For A Fully Aut |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Seeking Al | Aehr jumps on receiving follow-on order from 'major' silicon |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] QCOM Is Reportedly In Advanced Talks For $4B Acquisition Of AI Startup

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Qualcomm (QCOM) Suffers a Larger Drop Than the General Market: Key Ins

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.7 | Finnhub | Qualcomm (QCOM) Stock After 48% Year Gain Is The Price Getti |
| 2026-06-22 | M&A | 🟢 +1 | 4.16 | Finnhub | QCOM Is Reportedly In Advanced Talks For $4B Acquisition Of  |
| 2026-06-22 | Industry | 🔴 -1 | 0.6 | Finnhub | Qualcomm (QCOM) Suffers a Larger Drop Than the General Marke |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Q1 Earnings Highs And Lows: MasTec (NYSE:MTZ) Vs The Rest Of The Engin
- 🟢 [Analyst Action|w0.71] MasTec Inc (NYSE:MTZ) Shows Strong Growth Momentum with Accelerating E

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | MasTec Inc (NYSE:MTZ) Shows Strong Growth Momentum with Acce |
| 2026-06-19 | Earnings | 🟢 +1 | 2.27 | Finnhub | Q1 Earnings Highs And Lows: MasTec (NYSE:MTZ) Vs The Rest Of |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Quanta Services (PWR) Reports Record Backlog And Lifts Full Year Outlo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-20 | Earnings | 🟢 +1 | 2.73 | Finnhub | Quanta Services (PWR) Reports Record Backlog And Lifts Full  |

---

## 🟡 Cautious Long (3)

### NASDAQ:VIAV

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.58 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] Viavi Solutions (VIAV) Earns New Milestone, Climbs 12%
- 🟢 [Industry|w2.98] Why Is Viavi Solutions (VIAV) Stock Soaring Today
- 🟢 [Analyst Action|w0.6] Wall Street Analysts Predict a 29% Upside in Viavi Solutions (VIAV): H

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🟢 +1 | 3.5 | Finnhub | Viavi Solutions (VIAV) Earns New Milestone, Climbs 12% |
| 2026-06-22 | Industry | 🟢 +1 | 2.98 | Finnhub | Why Is Viavi Solutions (VIAV) Stock Soaring Today |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Wall Street Analysts Predict a 29% Upside in Viavi Solutions |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | VIAVI SOLUTIONS INC (NASDAQ:VIAV) Poised for Breakout with S |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aerospace Cool
- 🟢 [M&A|w1.76] How Eaton (ETN) Is Using Boyd Thermal to Tie Power Management to Data 
- 🟢 [Industry|w0.5] Eaton (ETN) Stock Could Be 6.6% Undervalued as Data Center Demand Lift

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Stock Could Be 6.6% Undervalued as Data Center D |
| 2026-06-19 | M&A | 🟢 +1 | 2.45 | Finnhub | Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aero |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Outpaces Stock Market Gains: What You Should Kno |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-06-17 | M&A | 🟢 +1 | 1.76 | Finnhub | How Eaton (ETN) Is Using Boyd Thermal to Tie Power Managemen |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Surged on Accelerated Demand for Data Centre Pow |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 5.3 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 0 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Here is What Analysts Are Saying About ASML Holding (ASML)
- 🟢 [Buyback|w3.57] ASML reports transactions under its current share buyback program
- 🟢 [Analyst Action|w3.57] B of A Securities Maintains Buy on ASML Holding, Raises Price Target t

**📉 Bearish Factors:**
- 🔴 [Policy|w2.1] ASML Faces Fresh China Export Scrutiny
- 🔴 [Policy|w2.1] ASML Drops 2.7% as US Raises New China EUV Concerns
- 🔴 [Policy|w2.1] ASML Draws Fresh China Scrutiny

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Why I'm Not Selling ASML After a 230% Gain |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Here is What Analysts Are Saying About ASML Holding (ASML) |
| 2026-06-22 | Buyback | 🟢 +1 | 3.57 | Finnhub | ASML reports transactions under its current share buyback pr |
| 2026-06-22 | Policy | ⚪  0 | 1.43 | Finnhub | ASML asserts compliance with China export controls on EUV ma |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | B of A Securities Maintains Buy on ASML Holding, Raises Pric |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wells Fargo Maintains Overweight on ASML Holding, Raises Pri |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | Positive Q2 results expected from ASML and other chip equipm |
| 2026-06-19 | Policy | 🔴 -1 | 2.1 | Finnhub | ASML Faces Fresh China Export Scrutiny |

---

## ⚠️ Overheated (5)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 12.42 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Dell’s AI-Focused Spending Spree and New Debt Financing Could Be A Gam
- 🟢 [Industry|w2.98] Dell Stock Is Rising After Launching PowerEdge XE8812 Server
- 🟢 [Industry|w2.98] Super Micro Jumps 11%, Dell Rises 5% as New NVIDIA Vera Rubin Systems 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | What Dell Stock's AI Order Book Revealed Before The Surge |
| 2026-06-22 | Buyback | 🟢 +1 | 3.57 | Finnhub | Dell’s AI-Focused Spending Spree and New Debt Financing Coul |
| 2026-06-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Dell, Super Micro Bet Big on Nvidia's Next AI Platform |
| 2026-06-22 | Industry | 🟢 +1 | 2.98 | Finnhub | Dell Stock Is Rising After Launching PowerEdge XE8812 Server |
| 2026-06-22 | Industry | 🟢 +1 | 2.98 | Finnhub | Super Micro Jumps 11%, Dell Rises 5% as New NVIDIA Vera Rubi |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Dell Technologies (DELL) Has Gained More Than 30% Over the P |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia in focus as Dell, Super Micro unveil new servers with |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 11.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] The Next Phase of AI Infrastructure Could Be Good News for Marvell (MR
- 🟢 [Analyst Action|w3.57] Here’s What the Street is Saying About Marvell Technology (MRVL)
- 🟢 [Industry|w3.5] Marvell’s S&P 500 Debut And New AI Switch Might Change The Case For In

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🟢 +1 | 3.5 | Finnhub | Marvell’s S&P 500 Debut And New AI Switch Might Change The C |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | The Next Phase of AI Infrastructure Could Be Good News for M |
| 2026-06-22 | Rumor | 🟢 +1 | 0.5 | Finnhub | Marvell Technology Stock Has Skyrocketed, But Could MRVL Be  |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Here’s What the Street is Saying About Marvell Technology (M |
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Marvell Technology Inc (NASDAQ:MRVL) Combines High Growth Mo |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 10.96 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] KLAC Could Be One of the Quiet Winners of the AI Buildout
- 🟢 [Analyst Action|w3.57] Is KLA Corporation (KLAC) One of the Best AI Memory Stocks to Buy in 2
- 🟢 [Earnings|w2.27] KLA Corporation (KLAC): 3 Reasons We Love This Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | ONTO vs. KLAC: Which Semiconductor Equipment Stock is the Be |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | KLAC Could Be One of the Quiet Winners of the AI Buildout |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Is KLA Corporation (KLAC) One of the Best AI Memory Stocks t |
| 2026-06-19 | Rumor | 🟢 +1 | 1.05 | Finnhub | KLA (KLAC) Gets A Fresh Look After Dan Loeb Takes A New Stak |
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | KLA (KLAC) Moves 8.7% Higher: Will This Strength Last? |
| 2026-06-19 | Earnings | 🟢 +1 | 2.27 | Finnhub | KLA Corporation (KLAC): 3 Reasons We Love This Stock |

---

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.84 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock Here.
- 🟢 [M&A|w2.45] Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value After TSMC
- 🟢 [M&A|w2.45] Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Year TSMC Ar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | ⚪  0 | 0.6 | Finnhub | Amkor Technology, Inc. (AMKR) Is a Trending Stock: Facts to  |
| 2026-06-20 | M&A | 🟢 +1 | 2.94 | Finnhub | Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock H |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology (NASDAQ:AMKR) Meets Minervini Trend Templat |
| 2026-06-19 | M&A | 🟢 +1 | 2.45 | Finnhub | Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value  |
| 2026-06-19 | M&A | 🟢 +1 | 2.45 | Finnhub | Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Ye |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Can Strong Smartphone Demand Sustain AMKR's Growth Momentum? |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Lam Research (LRCX) Is Up 6.1% After AI-Fueled Beat And Raised Chip-Eq
- 🟢 [Analyst Action|w1.43] Why Analysts See More Upside for Lam Research (LRCX)
- 🟢 [Analyst Action|w1.43] Cantor Fitzgerald Lifts PT on Lam Research Corporation (LRCX)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why Analysts See More Upside for Lam Research (LRCX) |
| 2026-06-22 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Cantor Fitzgerald Lifts PT on Lam Research Corporation (LRCX |
| 2026-06-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | Lam Research (LRCX) Is Up 6.1% After AI-Fueled Beat And Rais |
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | Lam Research (LRCX) Moves 4.0% Higher: Will This Strength La |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Are You Looking for a Top Momentum Pick? Why Lam Research (L |

---

## ⚠️ Risk Pattern (4)

### NASDAQ:VIAV

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.58 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] Viavi Solutions (VIAV) Earns New Milestone, Climbs 12%
- 🟢 [Industry|w2.98] Why Is Viavi Solutions (VIAV) Stock Soaring Today
- 🟢 [Analyst Action|w0.6] Wall Street Analysts Predict a 29% Upside in Viavi Solutions (VIAV): H

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🟢 +1 | 3.5 | Finnhub | Viavi Solutions (VIAV) Earns New Milestone, Climbs 12% |
| 2026-06-22 | Industry | 🟢 +1 | 2.98 | Finnhub | Why Is Viavi Solutions (VIAV) Stock Soaring Today |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Wall Street Analysts Predict a 29% Upside in Viavi Solutions |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | VIAVI SOLUTIONS INC (NASDAQ:VIAV) Poised for Breakout with S |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aerospace Cool
- 🟢 [M&A|w1.76] How Eaton (ETN) Is Using Boyd Thermal to Tie Power Management to Data 
- 🟢 [Industry|w0.5] Eaton (ETN) Stock Could Be 6.6% Undervalued as Data Center Demand Lift

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Stock Could Be 6.6% Undervalued as Data Center D |
| 2026-06-19 | M&A | 🟢 +1 | 2.45 | Finnhub | Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aero |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Outpaces Stock Market Gains: What You Should Kno |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-06-17 | M&A | 🟢 +1 | 1.76 | Finnhub | How Eaton (ETN) Is Using Boyd Thermal to Tie Power Managemen |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Surged on Accelerated Demand for Data Centre Pow |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 5.3 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 0 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Here is What Analysts Are Saying About ASML Holding (ASML)
- 🟢 [Buyback|w3.57] ASML reports transactions under its current share buyback program
- 🟢 [Analyst Action|w3.57] B of A Securities Maintains Buy on ASML Holding, Raises Price Target t

**📉 Bearish Factors:**
- 🔴 [Policy|w2.1] ASML Faces Fresh China Export Scrutiny
- 🔴 [Policy|w2.1] ASML Drops 2.7% as US Raises New China EUV Concerns
- 🔴 [Policy|w2.1] ASML Draws Fresh China Scrutiny

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Why I'm Not Selling ASML After a 230% Gain |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Here is What Analysts Are Saying About ASML Holding (ASML) |
| 2026-06-22 | Buyback | 🟢 +1 | 3.57 | Finnhub | ASML reports transactions under its current share buyback pr |
| 2026-06-22 | Policy | ⚪  0 | 1.43 | Finnhub | ASML asserts compliance with China export controls on EUV ma |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | B of A Securities Maintains Buy on ASML Holding, Raises Pric |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wells Fargo Maintains Overweight on ASML Holding, Raises Pri |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | Positive Q2 results expected from ASML and other chip equipm |
| 2026-06-19 | Policy | 🔴 -1 | 2.1 | Finnhub | ASML Faces Fresh China Export Scrutiny |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 0.5 |
| Trading Signal | **⚪ No Trade (Weak Bullish)** |
| Strategy | Mildly positive, insufficient signal — watch for stronger catalyst |
| Suitable For | Watch |
| Confidence | Low |
| News Kept / Dropped | 1 / 0 |
| Patterns | WARNING: Rumor-Driven (false positive risk) |

**📈 Bullish Factors:**
- 🟢 [Rumor|w0.5] Core Scientific Shows Huge, Unusual Put Option Activity - Is CORZ Unde

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Rumor | 🟢 +1 | 0.5 | Finnhub | Core Scientific Shows Huge, Unusual Put Option Activity - Is |

---

## ⚪ Watch / Neutral (81)

### NYSE:MS
- Score: 59/100 | raw: 2.06 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 59/100 | raw: 2.27 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CSCO
- Score: 59/100 | raw: 2.06 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 59/100 | raw: 2.11 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 58/100 | raw: 2.01 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ANET
- Score: 58/100 | raw: 1.86 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WWD
- Score: 57/100 | raw: 1.64 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HON
- Score: 57/100 | raw: 1.76 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 55/100 | raw: 1.2 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 55/100 | raw: 1.09 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 55/100 | raw: 1.3 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 54/100 | raw: 1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DY
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: WARNING: Rumor-Driven (false positive risk)

### NYSE:DKS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVMI
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOV
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CINF
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CDNS
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GLW
- Score: 51/100 | raw: 0.2 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MNST
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PANW
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ALAB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RELY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DLR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CARR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:STM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MTSI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:VICR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FCX
- Score: 49/100 | raw: -0.2 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:AMD
- Score: 47/100 | raw: -0.61 | News: 8 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:ENS
- Score: 46/100 | raw: -1.06 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-23T04:34:48.163Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*