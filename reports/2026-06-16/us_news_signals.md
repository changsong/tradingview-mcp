# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-16  |  **News Window:** 2026-06-09 ~ 2026-06-16
**Stock Pool:** us_selected.txt (79)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DELL** | **95** | 10.88 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:HPE** | **88** | 9.04 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | - |
| 3 | **NASDAQ:AMD** | **86** | 24.1 | 🟢 Long (Strong) | Momentum / Hold | High | 17/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:C** | **85** | 8.46 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:INTC** | **83** | 7.9 | 🟢 Long (Strong) | Momentum / Hold | High | 11/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:AMAT** | **82** | 7.59 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:INCY** | **74** | 5.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:LRCX** | **73** | 5.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 9 | **NASDAQ:ARM** | **73** | 5.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:GE** | **73** | 5.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | - |
| 11 | **NASDAQ:ASML** | **70** | 5.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/0 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:DOV** | **70** | 4.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 13 | **NASDAQ:AAOI** | **70** | 4.86 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/0 | Overheated Sentiment (one-sided bullish) |
| 14 | **NYSE:JBL** | **69** | 4.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:MPWR** | **69** | 4.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/0 | - |
| 16 | **NASDAQ:LITE** | **68** | 4.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 17 | **NASDAQ:FLEX** | **67** | 4.13 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 18 | **NYSE:LLY** | **64** | 3.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 19 | **NASDAQ:EQIX** | **63** | 3.03 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 20 | **NYSE:GEV** | **59** | 2.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 21 | **NYSE:FCX** | **59** | 2.15 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/0 | - |
| 22 | **NASDAQ:PANW** | **58** | 1.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 23 | **NYSE:TSM** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 24 | **NYSE:APH** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NYSE:SN** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 26 | **NASDAQ:MU** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 27 | **NYSE:DKS** | **54** | 0.89 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 28 | **NASDAQ:NBIX** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 29 | **NASDAQ:CINF** | **53** | 0.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NASDAQ:MNST** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NASDAQ:ALAB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NYSE:NPB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NYSE:TT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 34 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:MRVL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:WDC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 43 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:DOCN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NYSE:NOK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NYSE:ENS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 73 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NASDAQ:KLAC** | **48** | -0.41 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 77 | **NYSE:JCI** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 78 | **NYSE:BAP** | **33** | -4.2 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 1/0 | Sentiment Weakening DOWN (trend) |
| 79 | **NYSE:IFS** | **33** | -4.2 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 1/0 | Sentiment Weakening DOWN (trend) |

---

## 🟢 Strong Long (4)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.04 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] HPE (HPE): Networking Growth Gives the AI Infrastructure Bull Case Mor
- 🟢 [Analyst Action|w2.52] Is Hewlett Packard Enterprise Company (HPE) One of the Best Hot Stocks
- 🟢 [Industry|w1.19] HPE Fuels Partner Growth With New Incentives, Partner-led Offers, and 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.59] Dell, HPE server supply upended by memory crunch

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Advances Quantum Computing at Scale With Expanded Indust |
| 2026-06-15 | Industry | 🟢 +1 | 1.19 | Finnhub | HPE Fuels Partner Growth With New Incentives, Partner-led Of |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Partnering With Eight Firms Over Quantum Computing Syste |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Hewlett Packard Enterprise Stock: Is HPE Outperforming the T |
| 2026-06-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | HPE (HPE): Networking Growth Gives the AI Infrastructure Bul |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Is Hewlett Packard Enterprise Company (HPE) One of the Best  |
| 2026-06-13 | Industry | 🟢 +1 | 0.84 | Finnhub | HPE Private Cloud AI Win With Sky Highlights On Premises AI  |
| 2026-06-11 | Industry | 🔴 -1 | 0.59 | Finnhub | Dell, HPE server supply upended by memory crunch |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 24.1 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD’s MEXT Deal And Ryzen AI Halo Sharpen AI Valuation Debate
- 🟢 [M&A|w4.16] AMD Acquires MEXT to Tackle Data Center Memory Constraints
- 🟢 [M&A|w4.16] AMD Is Buying a Fix for Soaring Memory Costs. The Stock Is Surging.

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] Cathie Wood Buys $444 Million in SpaceX, Dumps Tesla and AMD
- 🔴 [Industry|w0.5] AMD: Party's Over -- This Chart Killed AI (Rating Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD’s MEXT Deal And Ryzen AI Halo Sharpen AI Valuation Debat |
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD Acquires MEXT to Tackle Data Center Memory Constraints |
| 2026-06-15 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD vs Intel: Both Are Positioned for AI Data Center Growth  |
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD Is Buying a Fix for Soaring Memory Costs. The Stock Is S |
| 2026-06-15 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | Cathie Wood Buys $444 Million in SpaceX, Dumps Tesla and AMD |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | AMD: Agentic AI Makes EPYC The Winner Of The AI Infrastructu |
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD Wants Flash To Behave Like DRAM — And Just Bought The Te |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Better Artificial Intelligence (AI) Inference Stock: AMD vs. |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.46 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] C Sheds Polish Arm, Marks Final Exit From Nore-Core Consumer Business
- 🟢 [Earnings|w2.27] Citigroup (C) Is Up 5.6% After Launching Blockchain Platform For Token
- 🟢 [Analyst Action|w1.43] Citigroup (C) Stock Valuation After CFO Growth Outlook And Blockchain 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | C Sheds Polish Arm, Marks Final Exit From Nore-Core Consumer |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Citigroup (C) Stock Valuation After CFO Growth Outlook And B |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did ROKU, SNDK, C Stocks Hit 52-Week Highs Last Week? |
| 2026-06-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Citigroup (C) Is Up 5.6% After Launching Blockchain Platform |
| 2026-06-10 | Analyst Action | ⚪  0 | 0.5 | Seeking Al | Citigroup Inc. (C) Presents at Morgan Stanley US Financials  |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.9] Google Just Went All in on Its Deal With Intel
- 🟢 [Analyst Action|w0.71] This analyst sees Intel reaching a $5 trillion valuation
- 🟢 [Analyst Action|w0.71] Intel Draws Cramer Support

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.72] Intel: Optimism Is Getting Expensive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.7 | Finnhub | Intel gets a $170 billion AI reason to matter again |
| 2026-06-16 | M&A | 🟢 +1 | 4.9 | Finnhub | Google Just Went All in on Its Deal With Intel |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Intel (INTC) Beats Stock Market Upswing: What Investors Need |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | This Artificial Intelligence (AI) Infrastructure Stock Has B |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | This analyst sees Intel reaching a $5 trillion valuation |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | AMD vs Intel: Both Are Positioned for AI Data Center Growth  |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Intel Draws Cramer Support |
| 2026-06-15 | Rumor | ⚪  0 | 0.5 | Finnhub | Why Experts Think Intel Should Raise Capital Right Now, and  |

---

## 🟢 Mid Long (12)

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] MIRM, INCY Report Positive Rare Disease Data as FDA Begins NDA Review
- 🟢 [Analyst Action|w1.51] Why Incyte (INCY) Stock Is Up Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | MIRM, INCY Report Positive Rare Disease Data as FDA Begins N |
| 2026-06-10 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Why Incyte (INCY) Stock Is Up Today |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Lam Research (LRCX) Stock Fair Value Edges Higher After Analyst Target
- 🟢 [Analyst Action|w1.43] Brokers Suggest Investing in Lam Research (LRCX): Read This Before Pla
- 🟢 [Earnings|w0.91] Q1 Earnings Outperformers: Lam Research (NASDAQ:LRCX) And The Rest Of 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Is Lam Research (LRCX) a Solid Growth Stock? 3 Reasons to Th |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Buy, Hold, or Sell: Lam Research Rocketed 21% Off Its June L |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Brokers Suggest Investing in Lam Research (LRCX): Read This  |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Lam Research (LRCX) Stock Fair Value Edges Higher After Anal |
| 2026-06-12 | Earnings | 🟢 +1 | 0.91 | Finnhub | Q1 Earnings Outperformers: Lam Research (NASDAQ:LRCX) And Th |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs 11%
- 🟢 [Analyst Action|w1.76] Why Arm Holdings Stock Rallied on Thursday
- 🟢 [Policy|w1.26] AMD, Micron, Arm lead chips higher as Trump signals Iran breakthrough

**📉 Bearish Factors:**
- 🔴 [Policy|w2.1] FTC Probe Puts Arm Licensing Model And AGI CPU Plans In Focus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Arm Holdings: The AI CPU Compounder Is Becoming Indispensabl |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Intel, AMD, Arm, and Other Artificial Intelligence (AI)  |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Rockets 11%, Qualcomm Rises 5%: Who’s Winning the Chip-A |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Is Arm Holdings plc (ARM) A Good Stock To Buy Now? |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Buy, Hold, or Sell: Arm Holdings Shed 25% to Clear the Air a |
| 2026-06-12 | Policy | 🔴 -1 | 2.1 | Finnhub | FTC Probe Puts Arm Licensing Model And AGI CPU Plans In Focu |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm (ARM), NVIDIA (NVDA) Executive Highlight Shift Toward Ag |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.61 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Wolfspeed Targets High Voltage Growth With Gen 5 SiC And GE Alliance
- 🟢 [Earnings|w1.55] GE Aerospace (GE) Laps the Stock Market: Here's Why
- 🟢 [Industry|w1.19] GE Aerospace Rises 12.2% in Six Months: How Should You Play the Stock?

**📉 Bearish Factors:**
- 🔴 [Policy|w1.76] Old Dominion Freight Line, GE Vernova, and Caterpillar Stocks Trade Do

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Earnings | 🟢 +1 | 1.55 | Finnhub | GE Aerospace (GE) Laps the Stock Market: Here's Why |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | GE Vernova GridOS Launch Spurs Questions On Growth And Valua |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Stocks: Honeywell Aerospace Looms As GE Stock Brea |
| 2026-06-15 | Industry | 🟢 +1 | 1.19 | Finnhub | GE Aerospace Rises 12.2% in Six Months: How Should You Play  |
| 2026-06-13 | M&A | 🟢 +1 | 2.94 | Finnhub | Wolfspeed Targets High Voltage Growth With Gen 5 SiC And GE  |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | SpaceX has a 'historical analogy' in GE, market historian ex |
| 2026-06-11 | Industry | 🟢 +1 | 0.59 | Finnhub | General Electric Links AI Leadership And Space Vehicle Work  |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Finnhub | SpaceX IPO Valuation Is Worth More Than Boeing, RTX, GE Aero |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 5.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] ASML reports transactions under its current share buyback program
- 🟢 [M&A|w2.94] ASML’s Mistral AI Stake Adds New Angle To Hotly Valued Shares
- 🟢 [Industry|w0.7] The Competitive Threat That Never Was: ASML’s Widening Moat Boosts Sto

**📉 Bearish Factors:**
- 🔴 [Industry|w1.75] ASML Restructuring Plan Balances Job Cuts With Efficiency And Rich Val
- 🔴 [Industry|w0.7] ASML: The Rally May Be Overdone
- 🔴 [Industry|w0.6] Forget ASML Holding: 1 Unstoppable AI Cash-Flow Machine to Buy Hand Ov

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Elon Musk Needs ASML for Terafab. You Don’t Need ASML Stock  |
| 2026-06-15 | Industry | 🔴 -1 | 0.6 | Finnhub | Forget ASML Holding: 1 Unstoppable AI Cash-Flow Machine to B |
| 2026-06-15 | Buyback | 🟢 +1 | 3.57 | Finnhub | ASML reports transactions under its current share buyback pr |
| 2026-06-13 | M&A | 🟢 +1 | 2.94 | Finnhub | ASML’s Mistral AI Stake Adds New Angle To Hotly Valued Share |
| 2026-06-12 | Industry | 🔴 -1 | 0.7 | Finnhub | ASML: The Rally May Be Overdone |
| 2026-06-12 | Industry | 🔴 -1 | 0.5 | Finnhub | Forget ASML: As Post-June 5 Volatility Shakes High-Beta Tech |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Here's How Much You Would Have Made Owning ASML Holding Stoc |
| 2026-06-12 | Industry | 🟢 +1 | 0.7 | Finnhub | The Competitive Threat That Never Was: ASML’s Widening Moat  |

---

### NYSE:DOV

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 12.8% Under
- 🟢 [Analyst Action|w1.43] All You Need to Know About Dover (DOV) Rating Upgrade to Buy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | All You Need to Know About Dover (DOV) Rating Upgrade to Buy |
| 2026-06-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 1 |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Jabil (JBL) Stock Valuation After New Adani AI Data Center Alliance In
- 🟢 [Earnings|w0.5] Jabil (JBL) Beats Stock Market Upswing: What Investors Need to Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | Jabil (JBL) Stock Valuation After New Adani AI Data Center A |
| 2026-06-12 | Earnings | 🟢 +1 | 0.5 | Finnhub | Jabil (JBL) Beats Stock Market Upswing: What Investors Need  |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Wall Street's Insights Into Key Metrics Ahead of Jabil (JBL) |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Does Monolithic Power Systems' (MPWR) Higher Dividend Reveal Its True 
- 🟢 [Industry|w0.6] Monolithic Power Systems Inc (NASDAQ:MPWR): A GARP Play with Strong Gr
- 🟢 [Industry|w0.5] Monolithic Power Systems Inc. (NASDAQ:MPWR): A Peter Lynch GARP Stock 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Monolithic Power (MPWR) Is Up 6.50% in One Week: What You Sh |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Monolithic Power Systems Inc (NASDAQ:MPWR): A GARP Play with |
| 2026-06-14 | Buyback | 🟢 +1 | 3.02 | Finnhub | Does Monolithic Power Systems' (MPWR) Higher Dividend Reveal |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR): A Peter Lynch G |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Finnhub | Is Monolithic Power Systems, Inc. (MPWR) A Good Stock To Buy |
| 2026-06-11 | Analyst Action | ⚪  0 | 0.7 | Finnhub | Monolithic Power Systems, Inc. (MPWR) Shareholder/Analyst Ca |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Monolithic Power Systems Stock: Is MPWR Outperforming the Te |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Lumentum (LITE): JPMorgan Pushback Helps Keep the AI Optical Networkin
- 🟢 [Industry|w0.6] LITE vs. AVGO: Which AI Infrastructure Stock Is the Better Pick Now?
- 🟢 [Industry|w0.6] Lumentum Holdings (NASDAQ:LITE) Screens as High-Growth Momentum Stock 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | LITE vs. AVGO: Which AI Infrastructure Stock Is the Better P |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Lumentum Holdings (NASDAQ:LITE) Screens as High-Growth Momen |
| 2026-06-14 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Lumentum (LITE): JPMorgan Pushback Helps Keep the AI Optical |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Is Now The Time To Look At Buying Lumentum Holdings Inc. (NA |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.13 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Flex Spin Offs AI Data Center Power Unit As Growth Story Shifts
- 🟢 [Industry|w1.26] Flex To Enter S&P 500 Positioned As A Major AI Infrastructure Player
- 🟢 [Industry|w0.9] Flex To Enter S&amp;P 500 Positioned As A Major AI Infrastructure Play

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Why Flex (FLEX) Is Down 13.9% After S&P 500 Inclusion And New AI Power

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Flex Ltd (NASDAQ:FLEX) Screens as an Affordable Growth Oppor |
| 2026-06-13 | M&A | 🟢 +1 | 2.94 | Finnhub | Flex Spin Offs AI Data Center Power Unit As Growth Story Shi |
| 2026-06-11 | Industry | ⚪  0 | 0.59 | Finnhub | Flex Aggressively Scaling Investments: Is Fiscal 2027 a Turn |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Finnhub | Zacks Investment Ideas feature highlights: Microchip Technol |
| 2026-06-11 | Industry | 🔴 -1 | 1.47 | Finnhub | Why Flex (FLEX) Is Down 13.9% After S&P 500 Inclusion And Ne |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Dear Flex Stock Fans, Mark Your Calendars for June 22 |
| 2026-06-10 | Industry | 🟢 +1 | 1.26 | Finnhub | Flex To Enter S&P 500 Positioned As A Major AI Infrastructur |
| 2026-06-10 | Industry | 🟢 +1 | 0.9 | Seeking Al | Flex To Enter S&amp;P 500 Positioned As A Major AI Infrastru |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should Know
- 🟢 [Industry|w0.5] Is Eli Lilly (LLY) One Of The Most Profitable Blue Chip Stocks To Buy 
- 🟢 [Industry|w0.5] Jim Cramer Wasn’t Selling Eli Lilly (LLY)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Eli Lilly (LLY) One Of The Most Profitable Blue Chip Stoc |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Wasn’t Selling Eli Lilly (LLY) |
| 2026-06-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.03 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Equinix Inc (EQIX) Added to Citi’s Focus List. Here’s What That Means
- 🟢 [Earnings|w0.77] Solid Results Lifted Equinix (EQIX) in Q1
- 🟢 [Industry|w0.5] Equinix (EQIX) Outperforms Broader Market: What You Need to Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Earnings | 🟢 +1 | 0.77 | Finnhub | Solid Results Lifted Equinix (EQIX) in Q1 |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Equinix (EQIX) Outperforms Broader Market: What You Need to  |
| 2026-06-11 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Equinix Inc (EQIX) Added to Citi’s Focus List. Here’s What T |

---

## 🟡 Cautious Long (1)

### NASDAQ:AAOI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.86 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Applied Optoelectronics To Supply Spectrum With Its QuantumLink Remote
- 🟢 [Industry|w0.6] Applied Optoelectronics Shares Are Climbing Monday: What's Driving The
- 🟢 [Industry|w0.5] Applied Optoelectronics: An Optical Supercycle Is Here

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Optoelectronics Shares Are Climbing Monday: What's D |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Optoelectronics: The Laser Bottleneck Winner |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Here's How Much $1000 Invested In Applied Optoelectronics 10 |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Seeking Al | Applied Optoelectronics: An Optical Supercycle Is Here |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Optoelectronics: An Optical Supercycle Is Here |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Caseys General Stores Upbeat Q4 Earnings, Joins Applied Opto |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Optoelectronics Shares Are Climbing Wednesday: What' |
| 2026-06-10 | M&A | 🟢 +1 | 1.76 | Finnhub | Applied Optoelectronics To Supply Spectrum With Its QuantumL |

---

## ⚠️ Overheated (2)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 10.88 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Dell Stock And The Best Kind Of Problem
- 🟢 [M&A|w2.98] Dell Technologies unit secures $1.44B Microsoft licensing renewal deal
- 🟢 [Industry|w1.01] Michael Dell's Net Worth Jumps $72 Billion on Dell Rally, and Analysts

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Policy | 🟢 +1 | 0.71 | Finnhub | Dell (DELL) Stock Is Up, What You Need To Know |
| 2026-06-15 | Earnings | 🟢 +1 | 3.87 | Finnhub | Dell Stock And The Best Kind Of Problem |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Wall Street Analysts Think Dell Technologies (DELL) Is a Goo |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Dell Technologies Inc. (DELL) Is a Trending Stock: Facts to  |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Here's How Much You Would Have Made Owning Dell Technologies |
| 2026-06-15 | M&A | 🟢 +1 | 2.98 | Seeking Al | Dell Technologies unit secures $1.44B Microsoft licensing re |
| 2026-06-14 | Industry | 🟢 +1 | 1.01 | Finnhub | Michael Dell's Net Worth Jumps $72 Billion on Dell Rally, an |
| 2026-06-14 | Industry | 🟢 +1 | 0.5 | Finnhub | A $1.24 Trillion Reason to Buy Dell Stock Now |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.59 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Applied Materials (AMAT) Gets Higher Price Targets from Barclays and C
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Raises its Price Target on Applied Materials (AMAT)
- 🟢 [Rumor|w0.5] Jim Cramer Says “I’ll Go for AMAT”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Rumor | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Says “I’ll Go for AMAT” |
| 2026-06-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Applied Materials (AMAT) Gets Higher Price Targets from Barc |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Cantor Fitzgerald Raises its Price Target on Applied Materia |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials (AMAT) Stock Valuation Check After Powerfu |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials (AMAT) is a Great Momentum Stock: Should Y |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:AAOI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.86 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Applied Optoelectronics To Supply Spectrum With Its QuantumLink Remote
- 🟢 [Industry|w0.6] Applied Optoelectronics Shares Are Climbing Monday: What's Driving The
- 🟢 [Industry|w0.5] Applied Optoelectronics: An Optical Supercycle Is Here

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Optoelectronics Shares Are Climbing Monday: What's D |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Optoelectronics: The Laser Bottleneck Winner |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Here's How Much $1000 Invested In Applied Optoelectronics 10 |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Seeking Al | Applied Optoelectronics: An Optical Supercycle Is Here |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Optoelectronics: An Optical Supercycle Is Here |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Caseys General Stores Upbeat Q4 Earnings, Joins Applied Opto |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Optoelectronics Shares Are Climbing Wednesday: What' |
| 2026-06-10 | M&A | 🟢 +1 | 1.76 | Finnhub | Applied Optoelectronics To Supply Spectrum With Its QuantumL |

---

## 🔴 Avoid / Short (2)

### NYSE:BAP

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -4.2 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |
| Patterns | Sentiment Weakening DOWN (trend) |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w4.2] JP Morgan Downgrades Credicorp (BAP)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🔴 -1 | 4.2 | Finnhub | JP Morgan Downgrades Credicorp (BAP) |

---

### NYSE:IFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -4.2 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |
| Patterns | Sentiment Weakening DOWN (trend) |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w4.2] JP Morgan Downgrades Intercorp Financial Services (IFS)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🔴 -1 | 4.2 | Finnhub | JP Morgan Downgrades Intercorp Financial Services (IFS) |

---

## ⚪ Watch / Neutral (58)

### NYSE:GEV
- Score: 59/100 | raw: 2.2 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FCX
- Score: 59/100 | raw: 2.15 | News: 6 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 58/100 | raw: 1.91 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 57/100 | raw: 1.6 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:APH
- Score: 57/100 | raw: 1.64 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 57/100 | raw: 1.76 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 56/100 | raw: 1.43 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 54/100 | raw: 0.89 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIX
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CINF
- Score: 53/100 | raw: 0.71 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NPB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MRVL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WDC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DOCN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NOK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENS
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WWD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KLAC
- Score: 48/100 | raw: -0.41 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:JCI
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-16T03:53:22.006Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*