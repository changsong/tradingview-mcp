# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-24  |  **News Window:** 2026-06-17 ~ 2026-06-24
**Stock Pool:** us_selected.txt (90)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:INTC** | **84** | 11.88 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GE** | **84** | 15.09 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DELL** | **81** | 7.51 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 4 | **NASDAQ:AMKR** | **79** | 6.97 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | - |
| 5 | **NYSE:JBL** | **76** | 6.13 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:ANET** | **76** | 6.34 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 7 | **NASDAQ:KLAC** | **73** | 5.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 8 | **NYSE:APH** | **73** | 5.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ARM** | **73** | 5.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 10 | **NASDAQ:FLEX** | **71** | 5.08 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 11 | **NASDAQ:MNST** | **68** | 4.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 12 | **NYSE:MS** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:C** | **67** | 4.18 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 14 | **NYSE:GNRC** | **65** | 3.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 15 | **NYSE:KEYS** | **64** | 3.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 16 | **NYSE:GEV** | **63** | 3.23 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 17 | **NASDAQ:LRCX** | **62** | 2.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 18 | **NASDAQ:AMD** | **60** | 2.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 19 | **NASDAQ:AMAT** | **60** | 2.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 20 | **NYSE:MTZ** | **60** | 2.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 21 | **NASDAQ:CSCO** | **58** | 1.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 22 | **NYSE:HPE** | **57** | 1.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 23 | **NYSE:TT** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 24 | **NASDAQ:CRDO** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NASDAQ:CRWD** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 26 | **NASDAQ:ASML** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/0 | - |
| 27 | **NASDAQ:BGC** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NASDAQ:MRVL** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NASDAQ:PANW** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 30 | **NYSE:LLY** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 31 | **NASDAQ:SNDK** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NASDAQ:VICR** | **53** | 0.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:INCY** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 34 | **NYSE:TSM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NYSE:DKS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NASDAQ:EQIX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 37 | **NYSE:FAF** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NYSE:DY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:WDC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:ALAB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 56 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:DOV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NASDAQ:CINF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 74 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 77 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 78 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 79 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 80 | **NYSE:GLW** | **50** | 0.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 81 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 82 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 83 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 84 | **NASDAQ:MTSI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 85 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 86 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 87 | **NYSE:QBTS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 88 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 89 | **NASDAQ:STX** | **45** | -1.19 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 90 | **NASDAQ:MU** | **33** | -4.17 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 3/0 | - |

---

## 🟢 Strong Long (6)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 11.88 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Apple and Intel Just Signed a Historic Chip Partnership. Is the Silico
- 🟢 [Analyst Action|w3.57] Intel, Micron Among Winners as BofA Supercharges Semiconductor Outlook
- 🟢 [Analyst Action|w2.55] Intel, Arm among chip stocks to get price target hikes as AI visibilit

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Why Intel (INTC) Stock Is Nosediving
- 🔴 [Industry|w0.6] Intel (INTC) Dips More Than Broader Market: What You Should Know
- 🔴 [Industry|w0.6] AMD and Intel Drop 5%, NVIDIA Slips 3% Amid Korean-Led Chip Selloff Bu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Why Intel (INTC) Stock Is Nosediving |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Intel (INTC) Dips More Than Broader Market: What You Should  |
| 2026-06-23 | M&A | 🟢 +1 | 4.16 | Finnhub | Apple and Intel Just Signed a Historic Chip Partnership. Is  |
| 2026-06-23 | Rumor | 🟢 +1 | 0.71 | Finnhub | Huge, Unusual In-the-Money Call Option Volume in Intel Stock |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | AMD and Intel Drop 5%, NVIDIA Slips 3% Amid Korean-Led Chip  |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Intel, Micron Among Winners as BofA Supercharges Semiconduct |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Intel's Stock Is Soaring. Is It Too Late to Buy? |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | The Nvidia Vs. Intel Pair Trade |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 15.09 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Can GE Continue Its Strong Capital Returns to Shareholders?
- 🟢 [Analyst Action|w3.57] GE HealthCare Technologies Set for Further Growth on Strong Backlog, E
- 🟢 [Analyst Action|w3.57] RBC initiates GE HealthCare as it sees AI-led innovation cycle driving

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.64] Is GE Stock's Large Backlog Enough To Out-Fly a Slowdown?
- 🔴 [Industry|w0.6] GE Vernova (GEV) Falls More Steeply Than Broader Market: What Investor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | AST SpaceMobile vs. GE Aerospace: Which Stock Is a Better Bu |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | GE Vernova (GEV) Falls More Steeply Than Broader Market: Wha |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | General Electric (GE) Stock After 333% Three-Year Surge Is I |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones AI Giant Nvidia Tumbles Below Key Level; Cummins,  |
| 2026-06-23 | Buyback | 🟢 +1 | 3.57 | Finnhub | Can GE Continue Its Strong Capital Returns to Shareholders? |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | GE HealthCare Technologies Set for Further Growth on Strong  |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | RBC initiates GE HealthCare as it sees AI-led innovation cyc |
| 2026-06-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | GE Vernova Stock Raised The Bar, Now It Has To Prove It |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.51 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Morgan Stanley Maintains Equal-Weight on Dell Technologies, Raises Pri
- 🟢 [Buyback|w3.02] Dell’s AI-Focused Spending Spree and New Debt Financing Could Be A Gam
- 🟢 [Analyst Action|w1.02] Morgan Stanley upgrades CDW on server demand; targets set higher for I

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Tim Cook issues chilling warning as ‘hundred-year-flood’ strikes US te

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Tim Cook issues chilling warning as ‘hundred-year-flood’ str |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Morgan Stanley Maintains Equal-Weight on Dell Technologies,  |
| 2026-06-23 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Morgan Stanley upgrades CDW on server demand; targets set hi |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | What Dell Stock's AI Order Book Revealed Before The Surge |
| 2026-06-22 | Buyback | 🟢 +1 | 3.02 | Finnhub | Dell’s AI-Focused Spending Spree and New Debt Financing Coul |

---

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock Here.
- 🟢 [M&A|w2.06] Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value After TSMC
- 🟢 [M&A|w2.06] Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Year TSMC Ar

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Amkor Technology (AMKR) Falls More Steeply Than Broader Market: What I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Amkor Technology (AMKR) Falls More Steeply Than Broader Mark |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Q1 Earnings Highs And Lows: Amkor (NASDAQ:AMKR) Vs The Rest  |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology, Inc. (AMKR) Is a Trending Stock: Facts to  |
| 2026-06-20 | M&A | 🟢 +1 | 2.45 | Finnhub | Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock H |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology (NASDAQ:AMKR) Meets Minervini Trend Templat |
| 2026-06-19 | M&A | 🟢 +1 | 2.06 | Finnhub | Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value  |
| 2026-06-19 | M&A | 🟢 +1 | 2.06 | Finnhub | Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Ye |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.13 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Jabil Shares Jumped on Earnings as AI Demand Boosts Its Business. JBL 
- 🟢 [Earnings|w1.64] JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength
- 🟢 [Analyst Action|w1.21] Baird Raises its Price Target on Jabil (JBL)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | Jabil Shares Jumped on Earnings as AI Demand Boosts Its Busi |
| 2026-06-22 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Baird Raises its Price Target on Jabil (JBL) |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Jabil (JBL) Stock After 7x Five-Year Return Is There Still V |
| 2026-06-18 | Earnings | 🟢 +1 | 1.64 | Finnhub | JBL Q3 Earnings Beat Estimates on AI Infrastructure Strength |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.34 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] Arista Networks (ANET) Unveils 1.6 Terabit Platforms As 800 Gig Adopti
- 🟢 [Analyst Action|w1.51] Wolfe Research Reaffirms Bullish View on Arista Networks (ANET) With $
- 🟢 [Analyst Action|w1.43] Wall Street Analysts Think Arista Networks (ANET) Is a Good Investment

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Arista Networks (ANET) Registers a Bigger Fall Than the Market: Import

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 3.5 | Finnhub | Arista Networks (ANET) Unveils 1.6 Terabit Platforms As 800  |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Arista Networks (ANET) Registers a Bigger Fall Than the Mark |
| 2026-06-23 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Wall Street Analysts Think Arista Networks (ANET) Is a Good  |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Arista Networks Inc (NYSE:ANET) Hits All CAN SLIM Criteria f |
| 2026-06-18 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Wolfe Research Reaffirms Bullish View on Arista Networks (AN |

---

## 🟢 Mid Long (14)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] KLAC Could Be One of the Quiet Winners of the AI Buildout
- 🟢 [Analyst Action|w3.02] Is KLA Corporation (KLAC) One of the Best AI Memory Stocks to Buy in 2

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Why KLA (KLAC) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Why KLA (KLAC) Dipped More Than Broader Market Today |
| 2026-06-22 | Industry | ⚪  0 | 0.5 | Finnhub | ONTO vs. KLAC: Which Semiconductor Equipment Stock is the Be |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | KLAC Could Be One of the Quiet Winners of the AI Buildout |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Is KLA Corporation (KLAC) One of the Best AI Memory Stocks t |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen With Stron
- 🟢 [Industry|w1.01] Amphenol (APH) Is Becoming A Key Supplier For The AI Data Center Build
- 🟢 [Analyst Action|w0.7] Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supplier for A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 1.01 | Finnhub | Amphenol (APH) Is Becoming A Key Supplier For The AI Data Ce |
| 2026-06-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen  |
| 2026-06-19 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supp |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | NVT vs. APH: Which Electrical Infrastructure Stock is a Bett |
| 2026-06-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] B of A Securities Maintains Neutral on ARM Holdings, Raises Price Targ
- 🟢 [Analyst Action|w2.55] Intel, Arm among chip stocks to get price target hikes as AI visibilit
- 🟢 [Analyst Action|w2.1] Why Bernstein Just Raised Its Price Target on Arm Stock by Nearly 70%

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.51] New Street Research Downgrades ARM Holdings to Neutral
- 🔴 [Industry|w0.6] Arm Stock Is Up 235% in 2026: Is Today’s 10% Drawdown a Take-Profits S
- 🔴 [Industry|w0.6] Why Is Arm Holdings Stock Falling Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Arm Stock Is Up 235% in 2026: Is Today’s 10% Drawdown a Take |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | ARM vs. APP: Which AI-Exposed Tech Stock to Consider Right N |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Why Is Arm Holdings Stock Falling Tuesday? |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | B of A Securities Maintains Neutral on ARM Holdings, Raises  |
| 2026-06-23 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | Intel, Arm among chip stocks to get price target hikes as AI |
| 2026-06-20 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Why Bernstein Just Raised Its Price Target on Arm Stock by N |
| 2026-06-18 | Industry | ⚪  0 | 0.5 | Finnhub | Advanced Micro Devices vs. Arm Holdings: Which AI CPU Stock  |
| 2026-06-18 | Analyst Action | 🔴 -1 | 1.51 | Finnhub | New Street Research Downgrades ARM Holdings to Neutral |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.08 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Flex Ltd. (FLEX) to Join S&P 500 Index on June 22
- 🟢 [M&A|w2.06] Strength Seen in Flex (FLEX): Can Its 3.1% Jump Turn into More Strengt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Stocks making the biggest moves midday: Micron Technology, S |
| 2026-06-22 | Buyback | 🟢 +1 | 3.02 | Finnhub | Flex Ltd. (FLEX) to Join S&P 500 Index on June 22 |
| 2026-06-19 | M&A | 🟢 +1 | 2.06 | Finnhub | Strength Seen in Flex (FLEX): Can Its 3.1% Jump Turn into Mo |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S. Prices
- 🟢 [Earnings|w0.66] Q1 Earnings Highs And Lows: Monster (NASDAQ:MNST) Vs The Rest Of The B
- 🟢 [Industry|w0.6] 3 Reasons MNST Has Explosive Upside Potential

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Monster Beverage (MNST) Stock After 47% Yearly Gain Is The P |
| 2026-06-23 | Industry | 🟢 +1 | 2.98 | Finnhub | Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S.  |
| 2026-06-23 | Industry | 🟢 +1 | 0.6 | Finnhub | 3 Reasons MNST Has Explosive Upside Potential |
| 2026-06-18 | Earnings | 🟢 +1 | 0.66 | Finnhub | Q1 Earnings Highs And Lows: Monster (NASDAQ:MNST) Vs The Res |

---

### NYSE:MS

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
- 🟢 [M&A|w4.16] Morgan Stanley (MS) Launches 0.14% Ethereum And Solana ETFs With 95% S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | M&A | 🟢 +1 | 4.16 | Finnhub | Morgan Stanley (MS) Launches 0.14% Ethereum And Solana ETFs  |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.18 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Citigroup (C) Could Surpass Long-Term Profitability Target, According 
- 🟢 [Earnings|w0.66] Citigroup (C) Rises As Market Takes a Dip: Key Facts
- 🟢 [Industry|w0.5] Citigroup Inc. (C): One of The Elite Financial Stocks to Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Earnings | 🟢 +1 | 0.66 | Finnhub | Citigroup (C) Rises As Market Takes a Dip: Key Facts |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Citigroup Inc. (C): One of The Elite Financial Stocks to Buy |
| 2026-06-22 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup (C) Could Surpass Long-Term Profitability Target,  |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Generac Holdings (GNRC) Announces Acquisition of New Facility in Illin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | M&A | 🟢 +1 | 3.53 | Finnhub | Generac Holdings (GNRC) Announces Acquisition of New Facilit |

---

### NYSE:KEYS

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
- 🟢 [Analyst Action|w1.76] Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued After AI 
- 🟢 [Earnings|w1.64] Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It Continue?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Inspection Instruments Stocks Q1 Highlights: Keysight (NYSE: |
| 2026-06-19 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Keysight Technologies (KEYS) Stock Could Be 5.1% Undervalued |
| 2026-06-18 | Earnings | 🟢 +1 | 1.64 | Finnhub | Keysight (KEYS) Up 2.5% Since Last Earnings Report: Can It C |

---

### NYSE:GEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.23 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Unpacking Q1 Earnings: GE Vernova (NYSE:GEV) In The Context Of Other E
- 🟢 [Analyst Action|w0.71] Is GE Vernova Inc. (GEV) Outperforming Other Oils-Energy Stocks This Y
- 🟢 [Analyst Action|w0.71] Is It Worth Investing in GE Vernova (GEV) Based on Wall Street's Bulli

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] GE Vernova (GEV) Falls More Steeply Than Broader Market: What Investor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | GE Vernova (GEV) Falls More Steeply Than Broader Market: Wha |
| 2026-06-23 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Is GE Vernova Inc. (GEV) Outperforming Other Oils-Energy Sto |
| 2026-06-23 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Is It Worth Investing in GE Vernova (GEV) Based on Wall Stre |
| 2026-06-23 | Industry | 🟢 +1 | 0.6 | Finnhub | Best Nuclear and AI Energy Stocks to Buy Now and Hold : GEV, |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Vernova (GEV) – Among the 13 Best Electrical Infrastructu |
| 2026-06-22 | Earnings | 🟢 +1 | 1.31 | Finnhub | Unpacking Q1 Earnings: GE Vernova (NYSE:GEV) In The Context  |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Lam Research Stock Just Got a New Street-High Price Target. NAND Equip

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Lam Research (LRCX) Registers a Bigger Fall Than the Market: Important

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Lam Research (LRCX) Registers a Bigger Fall Than the Market: |
| 2026-06-23 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Lam Research Stock Just Got a New Street-High Price Target.  |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] How AMD’s MEXT Deal Expands Its Memory Strategy Beyond GPUs and Data-C
- 🟢 [Analyst Action|w1.43] Over 40 Analysts Rate AMD a Buy, Here’s Why We Agree
- 🟢 [Industry|w0.5] Why AMD's AI Position Is Expanding

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Why AMD (AMD) Stock Is Trading Lower Today
- 🔴 [Industry|w1.19] AMD and Intel Drop 5%, NVIDIA Slips 3% Amid Korean-Led Chip Selloff Bu
- 🔴 [Industry|w1.19] MU, INTC, AMD And Other AI Stocks Get Crushed — But Dan Ives Downplays

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 1.19 | Finnhub | Why AMD (AMD) Stock Is Trading Lower Today |
| 2026-06-23 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Over 40 Analysts Rate AMD a Buy, Here’s Why We Agree |
| 2026-06-23 | Industry | 🔴 -1 | 1.19 | Finnhub | AMD and Intel Drop 5%, NVIDIA Slips 3% Amid Korean-Led Chip  |
| 2026-06-23 | Analyst Action | ⚪  0 | 0.71 | Finnhub | AMD (AMD) Stock Sees Modest Fair Value Lift As AI Target Rev |
| 2026-06-23 | M&A | 🟢 +1 | 4.16 | Finnhub | How AMD’s MEXT Deal Expands Its Memory Strategy Beyond GPUs  |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Is The AI-Fueled Growth Story For AMD Stock Worth The Elevat |
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | AMDY: Take Profits Once We See AMD Momentum Shift |
| 2026-06-23 | Industry | 🔴 -1 | 1.19 | Finnhub | MU, INTC, AMD And Other AI Stocks Get Crushed — But Dan Ives |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Applied Materials (AMAT) Unveils Two New Chipmaking Systems For Next G

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Applied Materials (AMAT) Registers a Bigger Fall Than the Market: Impo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Applied Materials (AMAT) Registers a Bigger Fall Than the Ma |
| 2026-06-23 | Industry | 🟢 +1 | 2.98 | Finnhub | Applied Materials (AMAT) Unveils Two New Chipmaking Systems  |
| 2026-06-23 | Industry | ⚪  0 | 0.6 | Finnhub | Is Most-Watched Stock Applied Materials, Inc. (AMAT) Worth B |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Q1 Earnings Highs And Lows: MasTec (NYSE:MTZ) Vs The Rest Of The Engin
- 🟢 [Analyst Action|w0.6] MasTec Inc (NYSE:MTZ) Shows Strong Growth Momentum with Accelerating E

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | MasTec Inc (NYSE:MTZ) Shows Strong Growth Momentum with Acce |
| 2026-06-19 | Earnings | 🟢 +1 | 1.91 | Finnhub | Q1 Earnings Highs And Lows: MasTec (NYSE:MTZ) Vs The Rest Of |

---

## 🔴 Avoid / Short (1)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -4.17 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] Why Micron (MU) Shares Are Getting Obliterated Today
- 🔴 [Industry|w1.19] S&P 500, Nasdaq, Dow Drop As Broader Tech And AI Selloff Continues — S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | ⚪  0 | 0.7 | Finnhub | Dow, S&P 500, Nasdaq Futures Rise After Chip Stock Selloff:  |
| 2026-06-23 | Industry | 🔴 -1 | 2.98 | Finnhub | Why Micron (MU) Shares Are Getting Obliterated Today |
| 2026-06-23 | Industry | 🔴 -1 | 1.19 | Finnhub | S&P 500, Nasdaq, Dow Drop As Broader Tech And AI Selloff Con |

---

## ⚪ Watch / Neutral (69)

### NASDAQ:CSCO
- Score: 58/100 | raw: 1.9 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 57/100 | raw: 1.7 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 57/100 | raw: 1.64 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 55/100 | raw: 1.09 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ASML
- Score: 54/100 | raw: 0.97 | News: 8 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 53/100 | raw: 0.6 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LLY
- Score: 53/100 | raw: 0.6 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 53/100 | raw: 0.71 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 53/100 | raw: 0.66 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WDC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ALAB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DOV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CINF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WWD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RELY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:GLW
- Score: 50/100 | raw: 0.09 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CARR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MTSI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:QBTS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:STX
- Score: 45/100 | raw: -1.19 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-24T02:28:10.609Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*