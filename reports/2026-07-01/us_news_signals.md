# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-01  |  **News Window:** 2026-06-24 ~ 2026-07-01
**Stock Pool:** us_selected.txt (33)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:ASML** | **88** | 9.06 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | - |
| 2 | **NASDAQ:ADI** | **86** | 8.64 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Overheated Sentiment (one-sided bullish) |
| 3 | **NASDAQ:ARM** | **79** | 6.96 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:INTC** | **75** | 6 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/0 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:CRWD** | **72** | 5.2 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 6 | **NYSE:PWR** | **70** | 4.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:INCY** | **69** | 4.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 8 | **NYSE:GLW** | **69** | 4.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 9 | **NYSE:GE** | **64** | 3.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 10 | **NASDAQ:SANM** | **63** | 3.23 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 11 | **NASDAQ:QCOM** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 12 | **NYSE:GNRC** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 13 | **NYSE:COHR** | **59** | 2.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 14 | **NASDAQ:MNST** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 15 | **NYSE:NVT** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 16 | **NYSE:SM** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 17 | **NASDAQ:KLAC** | **53** | 0.82 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 18 | **NYSE:TRNO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 19 | **NASDAQ:AEHR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:IHE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NASDAQ:MU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NYSE:AIR** | **49** | -0.21 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 31 | **NASDAQ:MRVL** | **47** | -0.71 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 32 | **NYSE:DELL** | **45** | -1.56 | ⚪ No Trade (Neutral) | Watch | Low | 11/0 | - |
| 33 | **NASDAQ:AMAT** | **35** | -3.57 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 3/0 | - |

---

## 🟢 Strong Long (2)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.06 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] ASML Holdings (ASML) Is One Of The Top Surging AI Stocks, Here’s What 
- 🟢 [Analyst Action|w3.02] Applied Materials (AMAT) Remains Favored as ASML Emerges as Top Catch-
- 🟢 [Industry|w2.52] ASML, Chip-Tool Stocks Soar as Samsung, SK Plan Investments

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | ⚪  0 | 0.6 | Finnhub | ASML (ENXTAM:ASML) Stock Looks Strong On Returns But Rich On |
| 2026-06-30 | Industry | 🟢 +1 | 2.52 | Finnhub | ASML, Chip-Tool Stocks Soar as Samsung, SK Plan Investments |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. LRCX: Which Semiconductor Chipmaker Stock Has More  |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. Applied Materials: Why One Is the Smarter Buy Right |
| 2026-06-30 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | ASML Holdings (ASML) Is One Of The Top Surging AI Stocks, He |
| 2026-06-30 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Applied Materials (AMAT) Remains Favored as ASML Emerges as  |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | If You Invested $100 In ASML Holding Stock 15 Years Ago, You |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.96 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Arm Holdings Expands Its AI Data Center Push With AGI CPU
- 🟢 [Industry|w2.1] Arm Holdings (ARM) Expands Its Agentic-AI CPU Ecosystem With Oracle Cl
- 🟢 [Analyst Action|w1.76] TD Cowen Raises its Price Target on Arm Holdings (ARM)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Tech stocks drag down Nasdaq for the week; Strategy and Arm Holdings a

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | Nvidia Isn't The Expensive AI Stock Anymore—AMD, Palantir An |
| 2026-06-29 | Industry | 🟢 +1 | 2.1 | Finnhub | Arm Holdings Expands Its AI Data Center Push With AGI CPU |
| 2026-06-29 | Industry | 🟢 +1 | 2.1 | Finnhub | Arm Holdings (ARM) Expands Its Agentic-AI CPU Ecosystem With |
| 2026-06-28 | Rumor | 🟢 +1 | 0.5 | Finnhub | Arm Holdings (ARM) Is A Part Of A Second “1776,” Says Newsle |
| 2026-06-27 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | TD Cowen Raises its Price Target on Arm Holdings (ARM) |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm (ARM) Wants To Be The Next Full Stack AI Infrastructure  |
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Seeking Al | Tech stocks drag down Nasdaq for the week; Strategy and Arm  |
| 2026-06-25 | Rumor | 🟢 +1 | 0.5 | Finnhub | Is Arm Holdings a Buy Near $347? The Case for Double-Digit U |

---

## 🟢 Mid Long (7)

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Quanta Services (PWR) Joins Hyosung HICO To Build High Voltage Breaker
- 🟢 [Analyst Action|w0.71] Bull of the Day: Quanta Services (PWR)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | M&A | 🟢 +1 | 4.16 | Finnhub | Quanta Services (PWR) Joins Hyosung HICO To Build High Volta |
| 2026-07-01 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Bull of the Day: Quanta Services (PWR) |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] INCY Stock Hits 52-Week High on Regulatory Updates for Opzelura
- 🟢 [Industry|w1.47] Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data Builds Acr
- 🟢 [Industry|w0.5] Incyte (INCY) Surges 5.8%: Is This an Indication of Further Gains?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Policy | 🟢 +1 | 2.52 | Finnhub | INCY Stock Hits 52-Week High on Regulatory Updates for Opzel |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Incyte (INCY) Surges 5.8%: Is This an Indication of Further  |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Stock After 66% One-Year Rally Is The Market T |
| 2026-06-27 | Industry | 🟢 +1 | 1.47 | Finnhub | Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data  |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Corning (GLW) Sets Date for New Dividend; Shares Up 15.6%
- 🟢 [Industry|w1.01] Corning (GLW) Joins Russell Growth Indexes As Investor Base Could Shif
- 🟢 [Industry|w0.5] Corning Inc. (NYSE:GLW) Screens as a High-Growth Momentum Leader with 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | 🟢 +1 | 1.01 | Finnhub | Corning (GLW) Joins Russell Growth Indexes As Investor Base  |
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Corning Inc. (NYSE:GLW) Screens as a High-Growth Momentum Le |
| 2026-06-30 | Buyback | 🟢 +1 | 3.02 | Finnhub | Corning (GLW) Sets Date for New Dividend; Shares Up 15.6% |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] RBC Capital Initiates Coverage of GE HealthCare Technologies Inc. (GEH
- 🟢 [Industry|w0.5] AI-Driven Turbine Demand Propels GE Vernova, IBD Stock of the Day, Tow
- 🟢 [Industry|w0.5] GE Passes CAN SLIM Screen with Near-Perfect Technicals and Strong Fund

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.21] The Great Disconnect: Why GE Aerospace's Defense Fundamentals Don't Ju

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | GE Aerospace vs. Textron: Which Aerospace & Defense Stock Ha |
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | AI-Driven Turbine Demand Propels GE Vernova, IBD Stock of th |
| 2026-06-30 | Analyst Action | 🔴 -1 | 1.21 | Finnhub | The Great Disconnect: Why GE Aerospace's Defense Fundamental |
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Passes CAN SLIM Screen with Near-Perfect Technicals and S |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is why GE Aerospace (GE) Is Among the Best Stocks in Ch |
| 2026-06-28 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | RBC Capital Initiates Coverage of GE HealthCare Technologies |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Stock: From ‘Dead File’ to Outperformer |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | General Electric (GE) Is Betting On A $170 Billion Services  |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.23 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Why Is Sanmina (SANM) Stock Soaring Today
- 🟢 [Analyst Action|w0.71] SANMINA CORP (NASDAQ:SANM) Passes Louis Navellier’s Eight-Point Growth

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | SANMINA CORP (NASDAQ:SANM) Passes Louis Navellier’s Eight-Po |
| 2026-06-30 | Industry | 🟢 +1 | 2.52 | Finnhub | Why Is Sanmina (SANM) Stock Soaring Today |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Morgan Stanley Upgrades Qualcomm (QCOM) but Remains Cautious on AI Roa

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Qualcomm (QCOM) Stock Sinks As Market Gains: Here's Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | 🔴 -1 | 0.5 | Finnhub | Qualcomm (QCOM) Stock Sinks As Market Gains: Here's Why |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | Here is What to Know Beyond Why QUALCOMM Incorporated (QCOM) |
| 2026-06-30 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Morgan Stanley Upgrades Qualcomm (QCOM) but Remains Cautious |
| 2026-06-25 | Industry | ⚪  0 | 0.5 | Seeking Al | QUALCOMM Incorporated (QCOM) Analyst/Investor Day Transcript |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] UBS Sees More Upside in Generac (GNRC); Here’s What’s Driving Its Conf

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | UBS Sees More Upside in Generac (GNRC); Here’s What’s Drivin |
| 2026-06-29 | Industry | ⚪  0 | 0.5 | Finnhub | Is Generac Holdings Inc. (GNRC) A Good Stock To Buy Now? |

---

## 🟡 Cautious Long (1)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Why Is CrowdStrike (CRWD) Stock Soaring Today
- 🟢 [Industry|w0.84] CrowdStrike (CRWD) Launches Unified AI Security Platform And Expands A
- 🟢 [Industry|w0.84] CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI Security C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Policy | 🟢 +1 | 2.52 | Finnhub | Why Is CrowdStrike (CRWD) Stock Soaring Today |
| 2026-06-29 | Industry | 🟢 +1 | 0.84 | Finnhub | CrowdStrike (CRWD) Launches Unified AI Security Platform And |
| 2026-06-29 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-06-29 | Industry | 🟢 +1 | 0.84 | Finnhub | CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI  |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Is CrowdStrike (CRWD) One of the Best Trending AI Stocks to  |

---

## ⚠️ Overheated (2)

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.64 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Stifel Raises PT on Analog Devices (ADI), Keeps a Buy
- 🟢 [M&A|w2.06] Why Analog Devices (ADI) Is Down 10.9% After Record AI Demand And Empo
- 🟢 [M&A|w2.06] Analog Devices (ADI) Buys Empower As Record Revenue Deepens Its AI Pus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Can ADI's Strong Cash Flow and Inventory Strategy Drive Futu |
| 2026-06-29 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Stifel Raises PT on Analog Devices (ADI), Keeps a Buy |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | ​Analog Devices (ADI) Up More Than 60% Over the Past 6 Month |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Analog Devices (ADI) is One of the Best Future Stocks to Buy |
| 2026-06-27 | M&A | 🟢 +1 | 2.06 | Finnhub | Why Analog Devices (ADI) Is Down 10.9% After Record AI Deman |
| 2026-06-27 | M&A | 🟢 +1 | 2.06 | Finnhub | Analog Devices (ADI) Buys Empower As Record Revenue Deepens  |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Analog Devices (ADI) Ascends While Market Falls: Some Facts  |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Micron, Intel, AMD stock surge Q2 2026 AI chip rally
- 🟢 [Industry|w1.19] Why Did INTC, AMD, BB Stocks Surge To 52-Week Highs?
- 🟢 [Industry|w1.01] Why Intel (INTC) Stock Is Up Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | ⚪  0 | 0.6 | Finnhub | If You Invested $1000 in Intel a Decade Ago, This is How Muc |
| 2026-07-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron, Intel, AMD stock surge Q2 2026 AI chip rally |
| 2026-07-01 | Industry | 🟢 +1 | 0.6 | Finnhub | Alpha & Omega Semiconductor (AOSL) Launches Multiphase Contr |
| 2026-07-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Did INTC, AMD, BB Stocks Surge To 52-Week Highs? |
| 2026-07-01 | Industry | ⚪  0 | 0.6 | Finnhub | Tesla Ropes In Intel Veteran To Lead Elon Musk’s Ambitious T |
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Intel (INTC) And ASUS Unveil AI Classroom Devices For K 12 S |
| 2026-06-30 | Industry | 🟢 +1 | 1.01 | Finnhub | Why Intel (INTC) Stock Is Up Today |
| 2026-06-30 | Industry | 🟢 +1 | 1.01 | Finnhub | Micron, Intel and AMD add $2 trillion in value in Q2 rally |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Why Is CrowdStrike (CRWD) Stock Soaring Today
- 🟢 [Industry|w0.84] CrowdStrike (CRWD) Launches Unified AI Security Platform And Expands A
- 🟢 [Industry|w0.84] CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI Security C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Policy | 🟢 +1 | 2.52 | Finnhub | Why Is CrowdStrike (CRWD) Stock Soaring Today |
| 2026-06-29 | Industry | 🟢 +1 | 0.84 | Finnhub | CrowdStrike (CRWD) Launches Unified AI Security Platform And |
| 2026-06-29 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-06-29 | Industry | 🟢 +1 | 0.84 | Finnhub | CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI  |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Is CrowdStrike (CRWD) One of the Best Trending AI Stocks to  |

---

## 🔴 Avoid / Short (1)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **35** / 100 |
| Raw Weighted Score | -3.57 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] Michael Burry Is Short NVDA, AMAT, SOXX — Sees Big Korea Chip Spending

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | ⚪  0 | 0.6 | Finnhub | Is Applied Materials (AMAT) Expensive After Raising Its Grow |
| 2026-07-01 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | Michael Burry Is Short NVDA, AMAT, SOXX — Sees Big Korea Chi |
| 2026-06-30 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials (AMAT) Hits New All-Time Highs: Still Time |

---

## ⚪ Watch / Neutral (20)

### NYSE:COHR
- Score: 59/100 | raw: 2.19 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KLAC
- Score: 53/100 | raw: 0.82 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IHE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 49/100 | raw: -0.21 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:MRVL
- Score: 47/100 | raw: -0.71 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:DELL
- Score: 45/100 | raw: -1.56 | News: 11 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-01T14:25:45.815Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*