# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-02  |  **News Window:** 2026-06-25 ~ 2026-07-02
**Stock Pool:** us_selected.txt (35)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:GE** | **84** | 8.87 | 🟢 Long (Strong) | Momentum / Hold | High | 10/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:PACS** | **83** | 7.91 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 3 | **NYSE:APH** | **79** | 6.97 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:PWR** | **79** | 7.06 | 🟢 Long (Strong) | Momentum / Hold | High | 6/0 | - |
| 5 | **NASDAQ:ADI** | **78** | 6.69 | 🟢 Long (Strong) | Momentum / Hold | High | 9/0 | - |
| 6 | **NYSE:JCI** | **73** | 5.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 7 | **NASDAQ:INCY** | **69** | 4.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 8 | **NASDAQ:ARM** | **69** | 4.45 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/0 | - |
| 9 | **NASDAQ:CRWD** | **68** | 4.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 10 | **NASDAQ:AMD** | **67** | 5.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:ASML** | **67** | 4.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 12 | **NYSE:COHR** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 13 | **NYSE:DELL** | **62** | 2.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 14 | **NASDAQ:SANM** | **61** | 2.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 15 | **NYSE:GNRC** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NYSE:GLW** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 17 | **NASDAQ:MRVL** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 18 | **NASDAQ:KLAC** | **53** | 0.67 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 19 | **NASDAQ:MNST** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NYSE:SM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 21 | **NASDAQ:AEHR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 22 | **NYSE:TRNO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NYSE:IHE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:AIR** | **47** | -0.61 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 32 | **NASDAQ:MU** | **45** | -1.19 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 33 | **NASDAQ:AMAT** | **42** | -2.02 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 34 | **NASDAQ:INTC** | **33** | -4.52 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 8/0 | - |
| 35 | **NASDAQ:QCOM** | **30** | -4.89 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 5/0 | Sustained Bearish Flow (3-day) |

---

## 🟢 Strong Long (4)

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.87 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Dear GE Aerospace Stock Fans, Mark Your Calendars for July 16
- 🟢 [Analyst Action|w3.02] Citigroup Maintains Buy on GE Aerospace, Raises Price Target to $431
- 🟢 [Policy|w1.43] Is GE’s Tightened Governance And Dividend Policy Quietly Reframing The

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.01] The Great Disconnect: Why GE Aerospace's Defense Fundamentals Don't Ju
- 🔴 [Industry|w0.5] GE Vernova (GEV) Dips More Than Broader Market: What You Should Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Policy | 🟢 +1 | 1.43 | Finnhub | Is GE’s Tightened Governance And Dividend Policy Quietly Ref |
| 2026-07-01 | Industry | 🔴 -1 | 0.5 | Finnhub | GE Vernova (GEV) Dips More Than Broader Market: What You Sho |
| 2026-07-01 | Earnings | 🟢 +1 | 3.28 | Finnhub | Dear GE Aerospace Stock Fans, Mark Your Calendars for July 1 |
| 2026-07-01 | Earnings | 🟢 +1 | 1.31 | Finnhub | Why GE (GE) is Poised to Beat Earnings Estimates Again |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Here is What to Know Beyond Why GE Vernova Inc. (GEV) is a T |
| 2026-07-01 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup Maintains Buy on GE Aerospace, Raises Price Target |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | GE Aerospace vs. Textron: Which Aerospace & Defense Stock Ha |
| 2026-06-30 | Industry | 🟢 +1 | 0.84 | Finnhub | AI-Driven Turbine Demand Propels GE Vernova, IBD Stock of th |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.91 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Why Is PACS Group Stock Soaring Tuesday?
- 🟢 [Analyst Action|w2.52] PACS Group (PACS) Price Target Increased by 12.27% to 51.20
- 🟢 [M&A|w2.45] PACS Group to Acquires 34 Nursing Facilities; Amount Not Disclosed

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | PACS Group (PACS) Price Target Increased by 12.27% to 51.20 |
| 2026-06-30 | M&A | 🟢 +1 | 2.94 | Finnhub | Why Is PACS Group Stock Soaring Tuesday? |
| 2026-06-29 | M&A | 🟢 +1 | 2.45 | Finnhub | PACS Group to Acquires 34 Nursing Facilities; Amount Not Dis |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.06 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Is Index Reclassification And A New Grid JV Altering The Investment Ca
- 🟢 [M&A|w3.53] Quanta Services (PWR) Joins Hyosung HICO To Build High Voltage Breaker
- 🟢 [Industry|w0.5] Bull of the Day: Quanta Services (PWR)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Quanta Services (PWR) Declines More Than Market: Some Information for 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | 🔴 -1 | 0.5 | Finnhub | Quanta Services (PWR) Declines More Than Market: Some Inform |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Quanta Services (PWR) Stock Looks Stretched Following Raised |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | BCKIY or PWR: Which Is the Better Value Stock Right Now? |
| 2026-07-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Is Index Reclassification And A New Grid JV Altering The Inv |
| 2026-07-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Quanta Services (PWR) Joins Hyosung HICO To Build High Volta |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Bull of the Day: Quanta Services (PWR) |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.69 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Stifel Raises PT on Analog Devices (ADI), Keeps a Buy
- 🟢 [M&A|w1.76] Analog Devices (ADI) Buys Empower As Record Revenue Deepens Its AI Pus
- 🟢 [Earnings|w1.64] Why Analog Devices (ADI) Is Down 10.9% After Record AI Demand And Empo

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Analog Devices (ADI) Declines More Than Market: Some Information for I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | ⚪  0 | 0.6 | Finnhub | Analog Devices Inc (NASDAQ:ADI) Fits Affordable Growth Strat |
| 2026-07-01 | Industry | 🔴 -1 | 1.01 | Finnhub | Analog Devices (ADI) Declines More Than Market: Some Informa |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Analog Devices (ADI) Outperforming Other Computer and Tec |
| 2026-06-29 | Industry | 🟢 +1 | 0.7 | Finnhub | Can ADI's Strong Cash Flow and Inventory Strategy Drive Futu |
| 2026-06-29 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Stifel Raises PT on Analog Devices (ADI), Keeps a Buy |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | ​Analog Devices (ADI) Up More Than 60% Over the Past 6 Month |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Analog Devices (ADI) is One of the Best Future Stocks to Buy |
| 2026-06-27 | Earnings | 🟢 +1 | 1.64 | Finnhub | Why Analog Devices (ADI) Is Down 10.9% After Record AI Deman |

---

## 🟢 Mid Long (9)

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Johnson Controls (JCI) Stock Gets Fair Value Boost As Analysts Weigh D
- 🟢 [Industry|w2.98] How Johnson Controls’ Addition to Major Russell Growth Indices May Inf
- 🟢 [Industry|w0.5] Johnson Controls International (NYSE:JCI) Shows Strong Breakout Setup 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Johnson Controls (JCI) Stock Looks Fully Priced On Its 136% Run

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | 🟢 +1 | 2.98 | Finnhub | How Johnson Controls’ Addition to Major Russell Growth Indic |
| 2026-07-01 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Johnson Controls (JCI) Stock Gets Fair Value Boost As Analys |
| 2026-07-01 | Industry | 🔴 -1 | 1.01 | Finnhub | Johnson Controls (JCI) Stock Looks Fully Priced On Its 136%  |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Johnson Controls International (NYSE:JCI) Shows Strong Break |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.1] INCY Stock Hits 52-Week High on Regulatory Updates for Opzelura
- 🟢 [Industry|w1.26] Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data Builds Acr
- 🟢 [Analyst Action|w1.21] Incyte (INCY): Truist Raises the Price Target to $105 as a Government 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Incyte (INCY): Truist Raises the Price Target to $105 as a G |
| 2026-06-29 | Policy | 🟢 +1 | 2.1 | Finnhub | INCY Stock Hits 52-Week High on Regulatory Updates for Opzel |
| 2026-06-29 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Surges 5.8%: Is This an Indication of Further  |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Stock After 66% One-Year Rally Is The Market T |
| 2026-06-27 | Industry | 🟢 +1 | 1.26 | Finnhub | Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data  |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.45 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Arm (ARM) Expands Its AGI CPU Ecosystem With Oracle Cloud Infrastructu
- 🟢 [M&A|w2.45] Arm Holdings (ARM) Expands Its Agentic-AI CPU Ecosystem With Oracle Cl
- 🟢 [Industry|w0.5] Arm Holdings Expands Its AI Data Center Push With AGI CPU

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Arm (ARM) Stock Looks Expensive Despite Fresh Agentic AI Demand News
- 🔴 [Industry|w0.84] Nvidia Isn't The Expensive AI Stock Anymore—AMD, Palantir And ARM Are
- 🔴 [Industry|w0.5] Tech stocks drag down Nasdaq for the week; Strategy and Arm Holdings a

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Arm (ARM) Stock Looks Expensive Despite Fresh Agentic AI Dem |
| 2026-07-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Arm (ARM) Expands Its AGI CPU Ecosystem With Oracle Cloud In |
| 2026-06-30 | Industry | 🔴 -1 | 0.84 | Finnhub | Nvidia Isn't The Expensive AI Stock Anymore—AMD, Palantir An |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Holdings Expands Its AI Data Center Push With AGI CPU |
| 2026-06-29 | M&A | 🟢 +1 | 2.45 | Finnhub | Arm Holdings (ARM) Expands Its Agentic-AI CPU Ecosystem With |
| 2026-06-28 | Rumor | 🟢 +1 | 0.5 | Finnhub | Arm Holdings (ARM) Is A Part Of A Second “1776,” Says Newsle |
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Seeking Al | Tech stocks drag down Nasdaq for the week; Strategy and Arm  |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.1] Why Is CrowdStrike (CRWD) Stock Soaring Today
- 🟢 [Industry|w1.75] CrowdStrike (CRWD) Launches Unified AI Security Platform And Expands A
- 🟢 [Analyst Action|w0.5] Brokers Suggest Investing in CrowdStrike (CRWD): Read This Before Plac

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | CrowdStrike (CRWD) Is a Trending Stock: Facts to Know Before |
| 2026-06-29 | Policy | 🟢 +1 | 2.1 | Finnhub | Why Is CrowdStrike (CRWD) Stock Soaring Today |
| 2026-06-29 | Industry | 🟢 +1 | 1.75 | Finnhub | CrowdStrike (CRWD) Launches Unified AI Security Platform And |
| 2026-06-29 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 5.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] 5-star analyst resets AMD stock price target, but it's not about GPUs
- 🟢 [Industry|w2.98] AMD (AMD) Unveils Versal Premium Gen 2 For AI And Aerospace Markets
- 🟢 [Buyback|w1.43] AMD Stock Is Having Its Best Year In A Decade — And CEO Lisa Su Gets $

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] Meta AI Cloud Push Sends Nvidia, AMD, Intel, Micron Stocks Sinking
- 🔴 [Industry|w1.01] Advanced Micro Devices (AMD) Dips More Than Broader Market: What You S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | ⚪  0 | 0.6 | Finnhub | Advanced Micro Devices (NASDAQ:AMD) Meets Minervini's High G |
| 2026-07-02 | Buyback | 🟢 +1 | 1.43 | Finnhub | AMD Stock Is Having Its Best Year In A Decade — And CEO Lisa |
| 2026-07-02 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD (AMD) Unveils Versal Premium Gen 2 For AI And Aerospace  |
| 2026-07-02 | Analyst Action | ⚪  0 | 1.02 | Seeking Al | AMD: EPYC, Not Instinct, Is Leading AI Growth - Hold |
| 2026-07-01 | Analyst Action | ⚪  0 | 0.6 | Finnhub | Top Analyst Reports for AMD, Lam Research & Cisco |
| 2026-07-01 | Industry | 🔴 -1 | 1.01 | Finnhub | Advanced Micro Devices (AMD) Dips More Than Broader Market:  |
| 2026-07-01 | Analyst Action | ⚪  0 | 1.21 | Finnhub | AMD: EPYC, Not Instinct, Is Leading AI Growth - Hold |
| 2026-07-01 | Industry | 🔴 -1 | 2.52 | Finnhub | Meta AI Cloud Push Sends Nvidia, AMD, Intel, Micron Stocks S |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] ASML Holding (NasdaqGS:ASML) Raises Revenue Guidance As AI Chip Spendi
- 🟢 [Industry|w0.84] ASML, Chip-Tool Stocks Soar as Samsung, SK Plan Investments

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Earnings | 🟢 +1 | 3.28 | Finnhub | ASML Holding (NasdaqGS:ASML) Raises Revenue Guidance As AI C |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Is Most-Watched Stock ASML Holding N.V. (ASML) Worth Betting |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML (ENXTAM:ASML) Stock Looks Strong On Returns But Rich On |
| 2026-06-30 | Industry | 🟢 +1 | 0.84 | Finnhub | ASML, Chip-Tool Stocks Soar as Samsung, SK Plan Investments |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. LRCX: Which Semiconductor Chipmaker Stock Has More  |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. Applied Materials: Why One Is the Smarter Buy Right |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Coherent (COHR): Top 10 Stock To Buy That Was Added to the S&P 500 Rec
- 🟢 [Industry|w0.5] COHERENT CORP (NYSE:COHR) Passes Both Minervini Trend Template and Hig

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | 🟢 +1 | 2.52 | Finnhub | Coherent (COHR): Top 10 Stock To Buy That Was Added to the S |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | COHERENT CORP (NYSE:COHR) Passes Both Minervini Trend Templa |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Dell Is Still Cheap
- 🟢 [Earnings|w2.34] Dell Is Still Cheap
- 🟢 [Analyst Action|w0.6] Wall Street Bulls Look Optimistic About Dell Technologies (DELL): Shou

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.73] Dell’s AI boom is real, but so is the profit margin hit nobody is pric
- 🔴 [Industry|w1.01] Dell: I Was Right About Dell, But Wrong About Why - But Easy Money Is 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Dell Nearing 52-Week High: Buy, Sell or Hold? |
| 2026-07-01 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Wall Street Bulls Look Optimistic About Dell Technologies (D |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | The Zacks Analyst Blog Highlights Microsoft, Exxon Mobil, De |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Here's How Much $100 Invested In Dell Technologies 5 Years A |
| 2026-07-01 | Industry | 🔴 -1 | 1.01 | Finnhub | Dell: I Was Right About Dell, But Wrong About Why - But Easy |
| 2026-07-01 | Policy | ⚪  0 | 0.6 | Finnhub | Micron Joins Dell, SoFi and JPMorgan in Backing Trump Accoun |
| 2026-07-01 | Earnings | 🟢 +1 | 2.34 | Seeking Al | Dell Is Still Cheap |
| 2026-06-30 | Earnings | 🟢 +1 | 2.73 | Finnhub | Dell Is Still Cheap |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Why Is Sanmina (SANM) Stock Soaring Today
- 🟢 [Analyst Action|w0.6] SANMINA CORP (NASDAQ:SANM) Passes Louis Navellier’s Eight-Point Growth

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | SANMINA CORP (NASDAQ:SANM) Passes Louis Navellier’s Eight-Po |
| 2026-06-30 | Industry | 🟢 +1 | 2.1 | Finnhub | Why Is Sanmina (SANM) Stock Soaring Today |

---

## ⚠️ Overheated (1)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.97 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Build Its Rea
- 🟢 [Analyst Action|w1.43] Barclays Raises Price Target on Amphenol Corporation (APH)
- 🟢 [Analyst Action|w1.01] Amphenol (APH) Stock Trades Up, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Barclays Raises Price Target on Amphenol Corporation (APH) |
| 2026-07-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Bui |
| 2026-06-30 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Amphenol (APH) Stock Trades Up, Here Is Why |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol Corp (NYSE:APH) Screens as a High Growth Momentum L |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Should You Buy Amphenol Corporation (APH)’s Shares? |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **30** / 100 |
| Raw Weighted Score | -4.89 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Sustained Bearish Flow (3-day) |

**📈 Bullish Factors:**
- 🟢 [Rumor|w0.6] SpaceX teases AI device post-IPO; QCOM gains, Apple unfazed

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] QUALCOMM (QCOM) Stock Just Lost Its Place In Several Russell Indices
- 🔴 [Rumor|w1.51] QCOM Stock Slips Toward Fourth Straight Loss After Elon Musk Dismisses
- 🔴 [Industry|w0.5] S&P 500, Nasdaq End Lower As Investors Continue Rotation Out Of Tech A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | 🔴 -1 | 2.98 | Finnhub | QUALCOMM (QCOM) Stock Just Lost Its Place In Several Russell |
| 2026-07-01 | Industry | 🔴 -1 | 0.5 | Finnhub | S&P 500, Nasdaq End Lower As Investors Continue Rotation Out |
| 2026-07-01 | Rumor | 🔴 -1 | 1.51 | Finnhub | QCOM Stock Slips Toward Fourth Straight Loss After Elon Musk |
| 2026-07-01 | Rumor | 🟢 +1 | 0.6 | Finnhub | SpaceX teases AI device post-IPO; QCOM gains, Apple unfazed |
| 2026-06-30 | Industry | 🔴 -1 | 0.5 | Finnhub | Qualcomm (QCOM) Stock Sinks As Market Gains: Here's Why |

---

## 🔴 Avoid / Short (2)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -4.52 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Stocks making big moves yesterday: Cogent, Vishay Intertechnology, Aer
- 🟢 [Analyst Action|w1.02] Tesla hiring Intel vet to help with Terafab seen as 'positive catalyst

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.02] Intel Drops 7%, AMD Slides 5%, Taiwan Semiconductor Falls 6% as BoA Fl
- 🔴 [Industry|w2.52] Meta AI Cloud Push Sends Nvidia, AMD, Intel, Micron Stocks Sinking
- 🔴 [Industry|w2.52] MU, INTC, AMD, NVDA And Other Chip Stocks Slide — BofA’s Bubble Risk I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Tesla hiring Intel vet to help with Terafab seen as 'positiv |
| 2026-07-01 | Industry | 🔴 -1 | 2.52 | Finnhub | Meta AI Cloud Push Sends Nvidia, AMD, Intel, Micron Stocks S |
| 2026-07-01 | Industry | 🟢 +1 | 2.52 | Finnhub | Stocks making big moves yesterday: Cogent, Vishay Intertechn |
| 2026-07-01 | Analyst Action | 🔴 -1 | 3.02 | Finnhub | Intel Drops 7%, AMD Slides 5%, Taiwan Semiconductor Falls 6% |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Intel (INTC) Stock Looks Undervalued Despite Its 5.1x One Ye |
| 2026-07-01 | Industry | ⚪  0 | 0.5 | Finnhub | Intel Just Hit a 52-Week High: Buy, Sell or Hold At $140? |
| 2026-07-01 | Industry | 🔴 -1 | 2.52 | Finnhub | MU, INTC, AMD, NVDA And Other Chip Stocks Slide — BofA’s Bub |
| 2026-06-30 | Industry | ⚪  0 | 0.6 | Seeking Al | Intel: Good News Priced In, Extreme Valuation Clouds Investi |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **30** / 100 |
| Raw Weighted Score | -4.89 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Sustained Bearish Flow (3-day) |

**📈 Bullish Factors:**
- 🟢 [Rumor|w0.6] SpaceX teases AI device post-IPO; QCOM gains, Apple unfazed

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] QUALCOMM (QCOM) Stock Just Lost Its Place In Several Russell Indices
- 🔴 [Rumor|w1.51] QCOM Stock Slips Toward Fourth Straight Loss After Elon Musk Dismisses
- 🔴 [Industry|w0.5] S&P 500, Nasdaq End Lower As Investors Continue Rotation Out Of Tech A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | 🔴 -1 | 2.98 | Finnhub | QUALCOMM (QCOM) Stock Just Lost Its Place In Several Russell |
| 2026-07-01 | Industry | 🔴 -1 | 0.5 | Finnhub | S&P 500, Nasdaq End Lower As Investors Continue Rotation Out |
| 2026-07-01 | Rumor | 🔴 -1 | 1.51 | Finnhub | QCOM Stock Slips Toward Fourth Straight Loss After Elon Musk |
| 2026-07-01 | Rumor | 🟢 +1 | 0.6 | Finnhub | SpaceX teases AI device post-IPO; QCOM gains, Apple unfazed |
| 2026-06-30 | Industry | 🔴 -1 | 0.5 | Finnhub | Qualcomm (QCOM) Stock Sinks As Market Gains: Here's Why |

---

## ⚪ Watch / Neutral (19)

### NYSE:GNRC
- Score: 59/100 | raw: 2.1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GLW
- Score: 59/100 | raw: 2.1 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 55/100 | raw: 1.19 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KLAC
- Score: 53/100 | raw: 0.67 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 53/100 | raw: 0.7 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IHE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 47/100 | raw: -0.61 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:MU
- Score: 45/100 | raw: -1.19 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:AMAT
- Score: 42/100 | raw: -2.02 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-02T13:20:46.264Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*