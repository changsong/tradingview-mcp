# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-19  |  **News Window:** 2026-06-12 ~ 2026-06-19
**Stock Pool:** us_selected.txt (113)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMKR** | **98** | 11.43 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:ARM** | **94** | 11 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:ETN** | **94** | 10.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:LRCX** | **92** | 10.15 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:JBL** | **92** | 10.07 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 6 | **NASDAQ:AMD** | **91** | 16.4 | 🟢 Long (Strong) | Momentum / Hold | High | 13/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:AMAT** | **91** | 9.86 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:STX** | **91** | 9.75 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 9 | **NASDAQ:INTC** | **90** | 12.39 | 🟢 Long (Strong) | Momentum / Hold | High | 11/0 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:GE** | **89** | 11.56 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/0 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:QCOM** | **88** | 9.07 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 12 | **NYSE:COHR** | **82** | 7.68 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 13 | **NASDAQ:MRVL** | **81** | 7.47 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:VRT** | **80** | 7.31 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 15 | **NYSE:DELL** | **79** | 6.9 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/0 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:MS** | **79** | 6.97 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 17 | **NASDAQ:AEHR** | **78** | 6.76 | 🟢 Long (Strong) | Momentum / Hold | High | 6/0 | Sentiment Strengthening UP (trend) |
| 18 | **NASDAQ:ON** | **74** | 5.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:KLAC** | **73** | 5.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 20 | **NASDAQ:NVDA** | **72** | 5.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 21 | **NASDAQ:ADI** | **71** | 4.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:APH** | **70** | 4.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 23 | **NASDAQ:FLEX** | **70** | 4.91 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 24 | **NASDAQ:AVGO** | **69** | 4.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/0 | - |
| 25 | **NYSE:LLY** | **68** | 4.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 26 | **NASDAQ:CRWD** | **68** | 4.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 27 | **NYSE:KEYS** | **68** | 4.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 28 | **NASDAQ:EQIX** | **66** | 3.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 29 | **NYSE:GEV** | **65** | 3.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 30 | **NYSE:DOV** | **64** | 3.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 31 | **NASDAQ:CDNS** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 32 | **NASDAQ:CSCO** | **62** | 2.92 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 33 | **NASDAQ:HON** | **62** | 2.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 34 | **NYSE:ANET** | **62** | 2.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/0 | - |
| 35 | **NASDAQ:SNDK** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 36 | **NASDAQ:WWD** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 37 | **NYSE:DKS** | **60** | 2.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 38 | **NYSE:DOCN** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:MTSI** | **59** | 2.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 40 | **NASDAQ:WDC** | **58** | 2.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 41 | **NYSE:FCX** | **58** | 1.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 42 | **NASDAQ:MPWR** | **58** | 2.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 43 | **NASDAQ:MU** | **57** | 1.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 44 | **NASDAQ:BGC** | **57** | 1.73 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 45 | **NYSE:HPE** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/0 | - |
| 46 | **NYSE:TT** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 47 | **NASDAQ:CINF** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 48 | **NYSE:TSM** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 49 | **NYSE:FAF** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 50 | **NYSE:GLW** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 51 | **NYSE:GNRC** | **53** | 0.82 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 52 | **NASDAQ:CRDO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 53 | **NASDAQ:NVMI** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 54 | **NYSE:AIR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 55 | **NASDAQ:PANW** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 56 | **NASDAQ:ALAB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 57 | **NYSE:BAP** | **52** | 0.42 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 58 | **NASDAQ:TLN** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 59 | **NYSE:NVT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 60 | **NYSE:ENS** | **52** | 0.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 61 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 65 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NYSE:C** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 69 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:MNST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 71 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 77 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 78 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 79 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 80 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 81 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 82 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 83 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 84 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 85 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 86 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 87 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 88 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 89 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 90 | **NASDAQ:CRWV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 91 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 92 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 93 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 94 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 95 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 96 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 97 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 98 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 99 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 100 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 101 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 102 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 103 | **NYSE:AS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 104 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 105 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 106 | **NYSE:MTZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 107 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 108 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 109 | **NYSE:STM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 110 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 111 | **NASDAQ:VICR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 112 | **NYSE:IFS** | **41** | -2.1 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 113 | **NASDAQ:ASML** | **33** | -8.77 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 13/0 | Bullish-to-Bearish Reversal (reversal) |

---

## 🟢 Strong Long (10)

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 11.43 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value After TSMC
- 🟢 [M&A|w4.16] Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Year TSMC Ar
- 🟢 [Earnings|w2.27] Amkor Technology (AMKR) Increases Despite Market Slip: Here's What You

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value  |
| 2026-06-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Ye |
| 2026-06-17 | Industry | 🟢 +1 | 0.84 | Finnhub | Can Strong Smartphone Demand Sustain AMKR's Growth Momentum? |
| 2026-06-16 | Earnings | 🟢 +1 | 2.27 | Finnhub | Amkor Technology (AMKR) Increases Despite Market Slip: Here' |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10.07 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength
- 🟢 [Earnings|w3.28] JBL Q2 Deep Dive: AI Infrastructure and Segment Diversification Propel
- 🟢 [Earnings|w2.73] Jabil Inc (JBL) Q3 2026 Earnings Call Highlights: Strong Revenue Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | Jabil (JBL) Stock After 7x Five-Year Return Is There Still V |
| 2026-06-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength |
| 2026-06-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | JBL Q2 Deep Dive: AI Infrastructure and Segment Diversificat |
| 2026-06-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | Jabil Inc (JBL) Q3 2026 Earnings Call Highlights: Strong Rev |
| 2026-06-17 | Earnings | 🟢 +1 | 0.78 | Seeking Al | Jabil Inc. (JBL) Q3 2026 Earnings Call Transcript |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 16.4 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Is Advanced Micro Devices (AMD) One of the Top 10 Dividend Stocks to B
- 🟢 [M&A|w3.53] Is Advanced Micro Devices, Inc. (AMD) One of the Best Growth Stocks to
- 🟢 [M&A|w3.53] AMD (AMD) Buys MEXT To Tackle AI Data Center Memory Bottlenecks

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] One Warning Signal AMD Investors Can't Miss
- 🔴 [Analyst Action|w0.6] AMD Is Standing Precariously Close To The Cliff

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | AMD vs. NVDA: Which Artificial Intelligence (AI) Semiconduct |
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Chip Maker AMD Has Become a Data-Center Powerhouse. It’s All |
| 2026-06-19 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Is Advanced Micro Devices (AMD) One of the Top 10 Dividend S |
| 2026-06-18 | M&A | 🟢 +1 | 3.53 | Finnhub | Is Advanced Micro Devices, Inc. (AMD) One of the Best Growth |
| 2026-06-18 | Industry | 🔴 -1 | 1.01 | Finnhub | One Warning Signal AMD Investors Can't Miss |
| 2026-06-18 | M&A | 🟢 +1 | 3.53 | Finnhub | AMD (AMD) Buys MEXT To Tackle AI Data Center Memory Bottlene |
| 2026-06-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Bernstein sees something in AMD beyond Nvidia’s shadow |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | UP 280% YTD, Will AMD’s Rally Continue? |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 12.39 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Apple to work with Intel on US chip design and production, Trump says
- 🟢 [Industry|w2.98] Intel (INTC) Foundry Advances Intel 18A-P Process to Risk Production
- 🟢 [Rumor|w1.51] Intel shares surge after Trump touts deal with Apple

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.72] Intel: The Re-Rating Has Gone Too Far
- 🔴 [Analyst Action|w0.5] Intel: Optimism Is Getting Expensive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel (INTC) Foundry Advances Intel 18A-P Process to Risk Pr |
| 2026-06-19 | Analyst Action | ⚪  0 | 0.71 | Finnhub | Intel: Priced For Perfection Amid Game-Changing Apple Deal |
| 2026-06-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Apple to work with Intel on US chip design and production, T |
| 2026-06-19 | Rumor | 🟢 +1 | 0.71 | Finnhub | Intel Stock Soared After Trump Said Apple Will Build Chips W |
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Intel taps industry veteran Seok-Hee Lee to lead foundry pac |
| 2026-06-18 | Rumor | 🟢 +1 | 1.51 | Finnhub | Intel shares surge after Trump touts deal with Apple |
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Intel Announces Leadership Appointment at Intel Foundry to A |
| 2026-06-18 | Rumor | 🟢 +1 | 1.51 | Finnhub | Why Is Intel (INTC) Stock Rocketing Higher Today |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.07 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Qualcomm (QCOM) Is Reportedly Eyeing Tenstorrent In A $10 Billion AI C
- 🟢 [Policy|w3.02] Qualcomm (QCOM) Stock Is Up, What You Need To Know
- 🟢 [Industry|w2.52] QUALCOMM (QCOM) Is Up 11.4% After Launching Custom AI Data Center Sili

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | 2 Reasons QCOM is Risky and 1 Stock to Buy Instead |
| 2026-06-18 | Policy | 🟢 +1 | 3.02 | Finnhub | Qualcomm (QCOM) Stock Is Up, What You Need To Know |
| 2026-06-18 | Industry | 🟢 +1 | 2.52 | Finnhub | QUALCOMM (QCOM) Is Up 11.4% After Launching Custom AI Data C |
| 2026-06-18 | M&A | 🟢 +1 | 3.53 | Finnhub | Qualcomm (QCOM) Is Reportedly Eyeing Tenstorrent In A $10 Bi |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Is Coherent (COHR) One of the Best US Stocks to Buy and Hold for the N
- 🟢 [Policy|w2.52] Coherent (COHR) Is Up 7.5% After CHIPS-Backed Texas AI Photonics Expan
- 🟢 [Policy|w2.52] Coherent (COHR) Wins Up To $50 Million For Texas AI Chip Expansion

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Is Coherent Corp. (COHR) Among the Best Photonic Computing Stocks to B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Policy | 🟢 +1 | 3.57 | Finnhub | Is Coherent (COHR) One of the Best US Stocks to Buy and Hold |
| 2026-06-19 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Is Coherent Corp. (COHR) Among the Best Photonic Computing S |
| 2026-06-17 | Policy | 🟢 +1 | 2.52 | Finnhub | Coherent (COHR) Is Up 7.5% After CHIPS-Backed Texas AI Photo |
| 2026-06-17 | Policy | 🟢 +1 | 2.52 | Finnhub | Coherent (COHR) Wins Up To $50 Million For Texas AI Chip Exp |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | AAOI, LITE, COHR, MRVL Stocks Bounce Back Overnight: Why AI  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.47 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] MRVL Stock Jumps 14% Today — KeyBanc Lifts AI Networking Outlook, Rais
- 🟢 [Industry|w2.52] Why Marvell Technology (MRVL) Stock Is Up Today
- 🟢 [Analyst Action|w1.43] Marvell Technology, Inc. (MRVL) Names Adobe’s Dan Durn as Finance Chie

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Marvell Technology, Inc. (MRVL) Names Adobe’s Dan Durn as Fi |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | MRVL Stock Jumps 14% Today — KeyBanc Lifts AI Networking Out |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Marvell Technology, Inc. (MRVL) The Best Growth Stock to  |
| 2026-06-18 | Industry | 🟢 +1 | 2.52 | Finnhub | Why Marvell Technology (MRVL) Stock Is Up Today |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.31 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Vertiv Holdings Co (VRT) Is Up 11.8% After AI-Driven Guidance Hike And
- 🟢 [M&A|w2.94] Why Vertiv (VRT) Is Moving Deeper Across the Full AI Data Center Therm
- 🟢 [Industry|w0.5] AI Data Center Cooling: MOD's Pivot vs. VRT's Moat - The Better Bet?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Earnings | 🟢 +1 | 3.87 | Finnhub | Vertiv Holdings Co (VRT) Is Up 11.8% After AI-Driven Guidanc |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | Why Vertiv (VRT) Is Moving Deeper Across the Full AI Data Ce |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | AI Data Center Cooling: MOD's Pivot vs. VRT's Moat - The Bet |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Morgan Stanley (MS) Buys Into UK Rentals With £1.045b Metra Living Dea
- 🟢 [M&A|w2.94] Morgan Stanley (MS) Stock Trades Up, Here Is Why
- 🟢 [Industry|w0.5] Morgan Stanley (MS) Ascends While Market Falls: Some Facts to Note

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | Morgan Stanley (MS) Stock After 72% One-Year Jump What Do Va |
| 2026-06-18 | M&A | 🟢 +1 | 3.53 | Finnhub | Morgan Stanley (MS) Buys Into UK Rentals With £1.045b Metra  |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | Morgan Stanley (MS) Stock Trades Up, Here Is Why |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Morgan Stanley (MS) Ascends While Market Falls: Some Facts t |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.76 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Aehr Test Systems Follow-On Production Order For A Fully Automated FOX
- 🟢 [Analyst Action|w2.52] Why Is Aehr Test Systems Stock Soaring Wednesday?
- 🟢 [Analyst Action|w1.8] Aehr jumps on receiving follow-on order from 'major' silicon photonics

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Aehr Test Systems: A Brilliant Order Book Wrapped In A Brutal Multiple

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Aehr Test Systems: Crucial For Photonics But Not For Your Lo |
| 2026-06-17 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Is Aehr Test Systems Stock Soaring Wednesday? |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | Aehr Test Systems Follow-On Production Order For A Fully Aut |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.8 | Seeking Al | Aehr jumps on receiving follow-on order from 'major' silicon |
| 2026-06-16 | Industry | 🔴 -1 | 0.5 | Seeking Al | Aehr Test Systems: A Brilliant Order Book Wrapped In A Bruta |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Aehr Test Systems: A Brilliant Order Book Wrapped In A Bruta |

---

## 🟢 Mid Long (20)

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] ON Semiconductor (ON) Launches GaNEXUS Gallium Nitride Power Portfolio
- 🟢 [Analyst Action|w1.76] ON Semiconductor Shares Climb After Citi Highlights Potential Upside A
- 🟢 [Analyst Action|w0.5] Texas Instruments, ON Semiconductor see bullish views at Citi

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] ON Semiconductor Corp. (ON) Falls More Steeply Than Broader Market: Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 2.98 | Finnhub | ON Semiconductor (ON) Launches GaNEXUS Gallium Nitride Power |
| 2026-06-16 | Industry | 🔴 -1 | 0.5 | Finnhub | ON Semiconductor Corp. (ON) Falls More Steeply Than Broader  |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | ON Semiconductor Shares Climb After Citi Highlights Potentia |
| 2026-06-15 | Analyst Action | ⚪  0 | 1.76 | Finnhub | Citigroup Maintains Neutral on ON Semiconductor, Raises Pric |
| 2026-06-15 | Industry | ⚪  0 | 0.5 | Finnhub | Which S&P500 stocks are moving before the opening bell on Mo |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Texas Instruments, ON Semiconductor see bullish views at Cit |
| 2026-06-14 | Industry | 🟢 +1 | 0.5 | Finnhub | ON Semiconductor: Growth Recovery Underway With Margin Expan |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | ON Semiconductor Stock: Is ON Outperforming the Technology S |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] KLA Corporation (KLAC) Price Target Raised by $500. Here is Why
- 🟢 [Analyst Action|w1.8] Citi bullish on NAND equipment demand; lifts PTs for AMAT, LRCX, KLAC
- 🟢 [Industry|w0.6] KLA Corporation (KLAC): 3 Reasons We Love This Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | KLA Corporation (KLAC): 3 Reasons We Love This Stock |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | KLA Corporation (KLAC) Price Target Raised by $500. Here is  |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.8 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Nvidia takes No. 1 spot in data center ethernet switching by revenue i
- 🟢 [Analyst Action|w1.43] Wall Street Analysts Picks Nvidia Over Micron: Here’s Why
- 🟢 [Industry|w1.19] HPE Expands AI Factory with NVIDIA (NVDA) to Support Agentic AI and Au

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Nvidia: 3 Reasons Why The Stock Will Continue To Trail The Market

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures Fall With U.S. Markets Shut; Nvidia Leads  |
| 2026-06-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Wall Street Analysts Picks Nvidia Over Micron: Here’s Why |
| 2026-06-19 | Industry | 🟢 +1 | 1.19 | Finnhub | HPE Expands AI Factory with NVIDIA (NVDA) to Support Agentic |
| 2026-06-19 | Rumor | 🟢 +1 | 0.5 | Finnhub | 13 Words From Jensen Huang That Spell Good News for Nvidia S |
| 2026-06-18 | Analyst Action | 🔴 -1 | 0.86 | Seeking Al | Nvidia: 3 Reasons Why The Stock Will Continue To Trail The M |
| 2026-06-18 | Industry | 🟢 +1 | 1.8 | Seeking Al | Nvidia takes No. 1 spot in data center ethernet switching by |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | Nvidia Won't Be This Cheap Forever |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Nvidia's Next Act Starts In H2 2026 |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Analog Devices (ADI) Stock Could Be 3.7% Undervalued After Earnings Be
- 🟢 [Industry|w0.59] Has Analog Devices (ADI) Outpaced Other Computer and Technology Stocks
- 🟢 [Industry|w0.5] ADI vs. ALAB: Which AI Semiconductor Stock is a Better Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Earnings | 🟢 +1 | 3.87 | Finnhub | Analog Devices (ADI) Stock Could Be 3.7% Undervalued After E |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | ADI vs. ALAB: Which AI Semiconductor Stock is a Better Buy? |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Analog Devices (ADI) Gained from Improved Demand and End Mar |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Leverage Shares by Themes Continues Expansion of Leveraged S |
| 2026-06-15 | Industry | 🟢 +1 | 0.59 | Finnhub | Has Analog Devices (ADI) Outpaced Other Computer and Technol |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.1] Why Amphenol (APH) Stock Is Trading Up Today
- 🟢 [Analyst Action|w2.1] Analyst Raises Amphenol (APH) Price Target Citing AI-Related Growth Op
- 🟢 [Industry|w0.5] Are Computer and Technology Stocks Lagging  Amphenol (APH) This Year?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Leverage Shares by Themes Continues Expansion of Leveraged S |
| 2026-06-16 | Policy | 🟢 +1 | 2.1 | Finnhub | Why Amphenol (APH) Stock Is Trading Up Today |
| 2026-06-16 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Analyst Raises Amphenol (APH) Price Target Citing AI-Related |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Amphenol (APH) Stock After 67% Annual Surge Are Growth Expec |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.91 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Marvell, Flex Could Be Days Away From Massive Passive-Fund Tailwind
- 🟢 [M&A|w1.47] Flex Spin Offs AI Data Center Power Unit As Growth Story Shifts
- 🟢 [Industry|w0.5] Flex Ltd (NASDAQ:FLEX) Screens as an Affordable Growth Opportunity

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | Marvell, Flex Could Be Days Away From Massive Passive-Fund T |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Flex Ltd (NASDAQ:FLEX) Screens as an Affordable Growth Oppor |
| 2026-06-13 | M&A | 🟢 +1 | 1.47 | Finnhub | Flex Spin Offs AI Data Center Power Unit As Growth Story Shi |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Citi Touts Broadcom Inc. (AVGO) as a Top Chip Stock on Soaring Data Ce
- 🟢 [Earnings|w0.97] The 'Problem' With Broadcom's Guidance
- 🟢 [Industry|w0.6] Broadcom (AVGO): Best US Stocks to Buy and Hold for the Next 5 Years

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Architect Labs raises $24 million to take on Broadcom, Marvell custom 
- 🔴 [Rumor|w0.71] JPMorgan latest Broadcom outlook sends key signal

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Broadcom (AVGO): Best US Stocks to Buy and Hold for the Next |
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Broadcom Holds the Best AI Hand This Side of Nvidia, Thanks  |
| 2026-06-19 | Rumor | 🔴 -1 | 0.71 | Finnhub | JPMorgan latest Broadcom outlook sends key signal |
| 2026-06-18 | Buyback | 🟢 +1 | 3.02 | Finnhub | Citi Touts Broadcom Inc. (AVGO) as a Top Chip Stock on Soari |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Top Research Reports for Alphabet, Broadcom & Johnson & John |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | The Real Price Tag On Broadcom Stock Is Not What It Seems |
| 2026-06-18 | Industry | 🔴 -1 | 1.01 | Finnhub | Architect Labs raises $24 million to take on Broadcom, Marve |
| 2026-06-13 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Broadcom Suffers Liquidity Rotation And Multi-Year AI Expans |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] Eli Lilly and Company (LLY) is one of the Best Growth Stocks to Buy Ac
- 🟢 [Industry|w1.01] What’s Happening at Eli Lilly and Company (LLY)’s Pipeline? Early Sign
- 🟢 [Buyback|w0.71] Eli Lilly & Co (NYSE:LLY): A Dividend Growth Gem with Strong Fundament

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Buyback | 🟢 +1 | 0.71 | Finnhub | Eli Lilly & Co (NYSE:LLY): A Dividend Growth Gem with Strong |
| 2026-06-18 | Industry | 🔴 -1 | 0.5 | Finnhub | Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should |
| 2026-06-18 | Policy | 🟢 +1 | 3.02 | Finnhub | Eli Lilly and Company (LLY) is one of the Best Growth Stocks |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Eli Lilly (LLY) Stock Could Be 24.7% Undervalued on Its Grow |
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | What’s Happening at Eli Lilly and Company (LLY)’s Pipeline?  |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] CrowdStrike Holdings (CRWD) Up More Than 17.5% in 30 Days, Is it a Sto
- 🟢 [Analyst Action|w2.1] CrowdStrike (CRWD) Wins Grant Thornton Role And Launches AI Agent Iden

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | CrowdStrike (CRWD) Wins Grant Thornton Role And Launches AI  |
| 2026-06-16 | Earnings | 🟢 +1 | 2.27 | Finnhub | CrowdStrike Holdings (CRWD) Up More Than 17.5% in 30 Days, I |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It Continue?
- 🟢 [Industry|w0.6] Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued After AI 
- 🟢 [Industry|w0.5] KEYSIGHT TECHNOLOGIES IN (NYSE:KEYS) Scores Strong in High Growth Mome

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued |
| 2026-06-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It C |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Leverage Shares by Themes Continues Expansion of Leveraged S |
| 2026-06-15 | Industry | ⚪  0 | 0.5 | Finnhub | What Makes Keysight Technologies (KEYS) a Compelling Bet in  |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | KEYSIGHT TECHNOLOGIES IN (NYSE:KEYS) Scores Strong in High G |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Solid Results Lifted Equinix (EQIX) in Q1
- 🟢 [Industry|w1.01] Equinix Is Now Becoming a Key Stop in the AI Supply Chain. How to Play
- 🟢 [Analyst Action|w0.84] Is Equinix (EQIX) Stock Outpacing Its Finance Peers This Year?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Equinix Is Now Becoming a Key Stop in the AI Supply Chain. H |
| 2026-06-16 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Is Equinix (EQIX) Stock Outpacing Its Finance Peers This Yea |
| 2026-06-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | Solid Results Lifted Equinix (EQIX) in Q1 |

---

### NYSE:GEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Why GE Vernova (GEV) Stock Is Trading Up Today
- 🟢 [Analyst Action|w0.5] Bernstein Initiates Coverage of GE Vernova (GEV) with Outperform Recom

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Why GE Vernova (GEV) Stock Is Trading Up Today |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Bernstein Initiates Coverage of GE Vernova (GEV) with Outper |

---

### NYSE:DOV

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] All You Need to Know About Dover (DOV) Rating Upgrade to Buy
- 🟢 [Earnings|w1.64] Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 12.8% Under

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | Reflecting On General Industrial Machinery Stocks’ Q1 Earnin |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | All You Need to Know About Dover (DOV) Rating Upgrade to Buy |
| 2026-06-14 | Earnings | 🟢 +1 | 1.64 | Finnhub | Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 1 |

---

### NASDAQ:CDNS

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Stifel Raises Price Target for Cadence Design (CDNS) Following Intel F
- 🟢 [Earnings|w0.76] Cadence Design Systems (CDNS) Beats Stock Market Upswing: What Investo
- 🟢 [Industry|w0.5] Cadence Design Systems (NASDAQ:CDNS): A Strong Growth Stock with a Sol

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | Here is What to Know Beyond Why Cadence Design Systems, Inc. |
| 2026-06-15 | Earnings | 🟢 +1 | 0.76 | Finnhub | Cadence Design Systems (CDNS) Beats Stock Market Upswing: Wh |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Cadence Design Systems (NASDAQ:CDNS): A Strong Growth Stock  |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Stifel Raises Price Target for Cadence Design (CDNS) Followi |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Is Cadence Design Systems, Inc. (CDNS) A Good Stock To Buy N |

---

### NASDAQ:CSCO

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.92 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Why Cisco Systems (CSCO) Outpaced the Stock Market Today
- 🟢 [Analyst Action|w1.01] Is Cisco Systems (CSCO) Stock Outpacing Its Computer and Technology Pe
- 🟢 [Industry|w0.6] Cisco (CSCO) Pushes Further Into Quantum Security And Enterprise AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Cisco (CSCO) Pushes Further Into Quantum Security And Enterp |
| 2026-06-18 | Earnings | 🟢 +1 | 1.31 | Finnhub | Why Cisco Systems (CSCO) Outpaced the Stock Market Today |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Is Cisco Systems (CSCO) Stock Outpacing Its Computer and Tec |

---

### NASDAQ:HON

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] HON Stock In Focus as Honeywell's Aerospace Spinoff Receives Final App

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.6 | Finnhub | Honeywell (HON) Stock Could Be 28.5% Undervalued on Its Auto |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Honeywell (HON) Stock Weighs 2024 Rally Against DCF And P/E  |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | HON Stock In Focus as Honeywell's Aerospace Spinoff Receives |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Wolfe Research Reaffirms Bullish View on Arista Networks (ANET) With $
- 🟢 [Analyst Action|w0.84] BofA Securities Raises Price Target for Arista Networks (ANET)
- 🟢 [Analyst Action|w0.84] Morgan Stanley Raises Price Target on Arista Networks (ANET). Here is 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Arista Networks (ANET) Declines More Than Market: Some Information for

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Wolfe Research Reaffirms Bullish View on Arista Networks (AN |
| 2026-06-17 | Industry | 🔴 -1 | 0.5 | Finnhub | Arista Networks (ANET) Declines More Than Market: Some Infor |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | Arista Networks (ANET) Stock After 87% Annual Gain Is It Tim |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Investors Heavily Search Arista Networks, Inc. (ANET): Here  |
| 2026-06-16 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | BofA Securities Raises Price Target for Arista Networks (ANE |
| 2026-06-16 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Morgan Stanley Raises Price Target on Arista Networks (ANET) |
| 2026-06-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Arista Networks (ANET): 1.6T Launch Shows How AI Fabrics Are |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Sandisk (SNDK) Stock Jumps 11% After Apple Flags Unavoidable Memory Pr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 2.98 | Finnhub | Sandisk (SNDK) Stock Jumps 11% After Apple Flags Unavoidable |

---

### NASDAQ:WWD

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
- 🟢 [Earnings|w2.73] Woodward (WWD) Surges 4.7%: Is This an Indication of Further Gains?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | Woodward (WWD) Surges 4.7%: Is This an Indication of Further |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] JPMorgan Raises Dick’s Sporting Goods (DKS) Target, Citing Momentum af
- 🟢 [Analyst Action|w0.7] DICK'S SPORTING GOODS INC (NYSE:DKS): A Peter Lynch GARP Play With Str
- 🟢 [Earnings|w0.66] Dick's (DKS): Buy, Sell, or Hold Post Q1 Earnings?

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.66] Some Investors May Be Willing To Look Past DICK'S Sporting Goods' (NYS

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Earnings | 🟢 +1 | 0.66 | Finnhub | Dick's (DKS): Buy, Sell, or Hold Post Q1 Earnings? |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | DICK'S SPORTING GOODS INC (NYSE:DKS): A Peter Lynch GARP Pla |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | JPMorgan Raises Dick’s Sporting Goods (DKS) Target, Citing M |
| 2026-06-14 | Earnings | 🔴 -1 | 0.66 | Finnhub | Some Investors May Be Willing To Look Past DICK'S Sporting G |

---

## ⚠️ Overheated (7)

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 11 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance'
- 🟢 [Earnings|w2.27] Arm Holdings' Licensing Momentum Continues to Power Revenue Growth
- 🟢 [Industry|w2.1] Arm (ARM) Launches Neural Dawn To Show How It Wants In On Mobile AI Ga

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Advanced Micro Devices vs. Arm Holdings: Which AI CPU Stock  |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Did RXT, NBIS, ARM Stocks Surge To 52-Week Highs? |
| 2026-06-17 | Industry | 🟢 +1 | 2.1 | Finnhub | Arm (ARM) Launches Neural Dawn To Show How It Wants In On Mo |
| 2026-06-17 | Industry | 🟢 +1 | 2.1 | Finnhub | Arm (ARM) Introduces Neural Dawn to Showcase New Neural Grap |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | INTC, ARM, AMD Stocks Gain Today — Bernstein Supercharges AI |
| 2026-06-17 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance' |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | Arm Holdings plc (ARM) Rallied Over Multiple Tailwinds |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | The Zacks Analyst Blog Highlights Advanced Micro Devices, In |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 10.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aerospace Cool
- 🟢 [M&A|w2.94] How Eaton (ETN) Is Using Boyd Thermal to Tie Power Management to Data 
- 🟢 [M&A|w2.45] Eaton-Dana Deal Accelerates ETN's Portfolio Transformation?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Eaton (ETN) Buys Boyd Thermal To Deepen Data Center And Aero |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Outpaces Stock Market Gains: What You Should Kno |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | How Eaton (ETN) Is Using Boyd Thermal to Tie Power Managemen |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-06-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Surged on Accelerated Demand for Data Centre Pow |
| 2026-06-16 | M&A | 🟢 +1 | 2.45 | Finnhub | Eaton-Dana Deal Accelerates ETN's Portfolio Transformation? |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10.15 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Lam Research Corporation (LRCX)’s WFE Opportunity May Be Bigger Than E
- 🟢 [Analyst Action|w3.02] Lam Research (LRCX) Receives a Price Target Boost at Barclays. Here is
- 🟢 [Analyst Action|w1.8] Citi bullish on NAND equipment demand; lifts PTs for AMAT, LRCX, KLAC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Lam Research (LRCX) Moves 4.0% Higher: Will This Strength La |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Are You Looking for a Top Momentum Pick? Why Lam Research (L |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | TXN vs. LRCX: Which Semiconductor Stock Is the Better Buy Ri |
| 2026-06-18 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Renaissance Investment Management Expects Positive Upward Re |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Lam Research Corporation (LRCX)’s WFE Opportunity May Be Big |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Lam Research (LRCX) Receives a Price Target Boost at Barclay |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.8 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.86 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Applied Materials (AMAT) Launches SENZ With Qualcomm And EssilorLuxott
- 🟢 [Industry|w2.52] Why Applied Materials, Inc. (AMAT)’s New Launch Matters More Than It L
- 🟢 [Analyst Action|w2.52] Applied Materials (AMAT) Shares Skyrocket, What You Need To Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | TER vs. AMAT: Which AI Semiconductor Stock Is the Better Buy |
| 2026-06-18 | Industry | 🟢 +1 | 2.52 | Finnhub | Applied Materials (AMAT) Launches SENZ With Qualcomm And Ess |
| 2026-06-18 | Industry | 🟢 +1 | 2.52 | Finnhub | Why Applied Materials, Inc. (AMAT)’s New Launch Matters More |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Applied Materials (AMAT) One of the Most Profitable Ameri |
| 2026-06-17 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Applied Materials (AMAT) Shares Skyrocket, What You Need To  |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.8 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.75 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Why JPMorgan Remains Bullish on Seagate Technology Holdings plc (STX)
- 🟢 [Analyst Action|w3.02] Seagate Technology Holdings (STX) Price Target Raised by $268 at Morga
- 🟢 [Policy|w2.1] Seagate (STX) Stock Rallies As US Iran Ceasefire Lifts Memory Sector M

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Seagate Technology Holdings (NASDAQ:STX) Passes Minervini Tr |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Why JPMorgan Remains Bullish on Seagate Technology Holdings  |
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | MU, WDC, SNDK, STX Stocks Rally Overnight After Apple Flags  |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Seagate Technology Holdings (STX) Price Target Raised by $26 |
| 2026-06-16 | Policy | 🟢 +1 | 2.1 | Finnhub | Seagate (STX) Stock Rallies As US Iran Ceasefire Lifts Memor |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 11.56 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] The Overlooked Signal In GE Stock's Shipping Delays
- 🟢 [M&A|w2.94] Is GE (GE) Quietly Rewiring Its Aerospace Identity Through Advanced Po
- 🟢 [Earnings|w2.73] Can GE Aerospace Boost Margin Performance Amid Cost Pressures?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | GE Aerospace Trades Like an AI Company. Credit Larry Culp’s  |
| 2026-06-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | The Overlooked Signal In GE Stock's Shipping Delays |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Vernova Supplier Breaks Out As Data Centers Lift Construc |
| 2026-06-18 | Earnings | ⚪  0 | 1.31 | Finnhub | Is GE Stock's Large Backlog Enough To Out-Fly a Slowdown? |
| 2026-06-17 | M&A | 🟢 +1 | 2.94 | Finnhub | Is GE (GE) Quietly Rewiring Its Aerospace Identity Through A |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | General Electric (GE) Stock Looks 2% Above Its Fair Value Na |
| 2026-06-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | Can GE Aerospace Boost Margin Performance Amid Cost Pressure |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Finnhub | GE Vernova Inc. (GEV) is Attracting Investor Attention: Here |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.9 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Zacks Investment Ideas feature highlights: Dell and Cisco
- 🟢 [Industry|w1.01] Dell (DELL) Powers Cambridge AI Supercomputers For Climate, Healthcare
- 🟢 [Buyback|w1.01] Dell Maintains Payout as AI Demand Builds

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Dell Was a Leader in PCs. Now It Is a Giant in AI Infrastruc |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Super Micro Is Up 10% Today: Is It Outperforming Other AI Se |
| 2026-06-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Dell (DELL) Powers Cambridge AI Supercomputers For Climate,  |
| 2026-06-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | Zacks Investment Ideas feature highlights: Dell and Cisco |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | What's Going On With Dell Technologies Stock Thursday? |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Dividend Roundup: Mastercard, Dell, FedEx, and more |
| 2026-06-17 | Buyback | 🟢 +1 | 1.01 | Finnhub | Dell Maintains Payout as AI Demand Builds |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Says “It’s an Easy Call to Say to Buy Dell and to |

---

## 🔴 Avoid / Short (1)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -8.77 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 13 / 0 |
| Patterns | Bullish-to-Bearish Reversal (reversal) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Here’s Why ASML Holding N.V. (ASML) Is Among the Stocks with Best Earn
- 🟢 [Industry|w2.1] ASML hits 52-week high as Intel 18A-P enters risk production
- 🟢 [Industry|w0.84] ASML CEO Flags Terafab Opportunity as AI Demand Stays Enormous

**📉 Bearish Factors:**
- 🔴 [Policy|w3.57] ASML (ENXTAM:ASML) Faces U.S. Scrutiny Over Alleged China EUV Shipment
- 🔴 [Policy|w3.57] The US says ASML’s top chip tool may be in China. ASML says it isn’t
- 🔴 [Policy|w3.57] US Tells ASML It’s Concerned China May Have Top Chip Tool

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Policy | 🔴 -1 | 3.57 | Finnhub | ASML (ENXTAM:ASML) Faces U.S. Scrutiny Over Alleged China EU |
| 2026-06-19 | Policy | 🔴 -1 | 3.57 | Finnhub | The US says ASML’s top chip tool may be in China. ASML says  |
| 2026-06-19 | Policy | 🔴 -1 | 3.57 | Finnhub | US Tells ASML It’s Concerned China May Have Top Chip Tool |
| 2026-06-19 | Policy | 🔴 -1 | 3.57 | Finnhub | US tells ASML it is concerned China may have top chip tool,  |
| 2026-06-19 | Policy | 🔴 -1 | 2.55 | Seeking Al | US raises concerns with ASML over potential EUV machine dive |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML Holding N.V. (ASML) is Attracting Investor Attention: H |
| 2026-06-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Here’s Why ASML Holding N.V. (ASML) Is Among the Stocks with |
| 2026-06-17 | Industry | 🟢 +1 | 0.84 | Finnhub | ASML CEO Flags Terafab Opportunity as AI Demand Stays Enormo |

---

## ⚪ Watch / Neutral (75)

### NYSE:DOCN
- Score: 59/100 | raw: 2.1 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 59/100 | raw: 2.19 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WDC
- Score: 58/100 | raw: 2.01 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FCX
- Score: 58/100 | raw: 1.92 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 58/100 | raw: 2.01 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 57/100 | raw: 1.66 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 57/100 | raw: 1.73 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 55/100 | raw: 1.19 | News: 6 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CINF
- Score: 54/100 | raw: 1.01 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GLW
- Score: 53/100 | raw: 0.6 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 53/100 | raw: 0.82 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVMI
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 52/100 | raw: 0.42 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 52/100 | raw: 0.55 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:C
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MNST
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
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

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MTZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:STM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:VICR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 41/100 | raw: -2.1 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-19T14:02:36.090Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*