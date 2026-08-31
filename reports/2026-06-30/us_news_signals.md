# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-30  |  **News Window:** 2026-06-23 ~ 2026-06-30
**Stock Pool:** us_selected.txt (33)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:CRWD** | **94** | 10.62 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:ADI** | **91** | 9.92 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:GE** | **89** | 9.24 | 🟢 Long (Strong) | Momentum / Hold | High | 13/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:ARM** | **77** | 6.38 | 🟢 Long (Strong) | Momentum / Hold | High | 9/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:INCY** | **72** | 5.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 6 | **NYSE:GLW** | **69** | 4.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 7 | **NASDAQ:QCOM** | **68** | 4.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 8 | **NASDAQ:MU** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 9 | **NASDAQ:KLAC** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 10 | **NYSE:GNRC** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 11 | **NYSE:COHR** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 12 | **NASDAQ:ASML** | **57** | 1.79 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/0 | - |
| 13 | **NYSE:NVT** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 14 | **NASDAQ:MNST** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 15 | **NYSE:SM** | **52** | 0.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 16 | **NYSE:JCI** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 17 | **NASDAQ:KALU** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 18 | **NYSE:TRNO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 19 | **NASDAQ:AEHR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NASDAQ:MRVL** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 21 | **NASDAQ:AMAT** | **51** | 0.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 22 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:IHE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:PWR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:AIR** | **49** | -0.18 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 32 | **NASDAQ:INTC** | **46** | -1.26 | ⚪ No Trade (Neutral) | Watch | Low | 10/0 | - |
| 33 | **NYSE:DELL** | **26** | -6.65 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 7/0 | - |

---

## 🟢 Strong Long (2)

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.24 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] RBC Capital Initiates Coverage of GE HealthCare Technologies Inc. (GEH
- 🟢 [Earnings|w1.91] Here's What to Expect From GE Aerospace's Next Earnings Report
- 🟢 [Buyback|w1.51] GE Aerospace Board of Directors Authorizes Quarterly Dividend

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] The Number That Could Test GE Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | GE Passes CAN SLIM Screen with Near-Perfect Technicals and S |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is why GE Aerospace (GE) Is Among the Best Stocks in Ch |
| 2026-06-28 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | RBC Capital Initiates Coverage of GE HealthCare Technologies |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Stock: From ‘Dead File’ to Outperformer |
| 2026-06-26 | Industry | 🟢 +1 | 0.59 | Finnhub | General Electric (GE) Is Betting On A $170 Billion Services  |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Stock At 52-Week Highs: Is the Best Still Ahead? |
| 2026-06-26 | Industry | ⚪  0 | 0.5 | Finnhub | GE Aerospace Stock Looks Strong. One Number Says Be Careful. |
| 2026-06-26 | Earnings | 🟢 +1 | 1.91 | Finnhub | Here's What to Expect From GE Aerospace's Next Earnings Repo |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.38 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] TD Cowen Raises its Price Target on Arm Holdings (ARM)
- 🟢 [Analyst Action|w1.26] Bernstein Raises its Price Target on Arm Holdings (ARM)
- 🟢 [Industry|w1.01] Arm Holdings Expands Its AI Data Center Push With AGI CPU

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Tech stocks drag down Nasdaq for the week; Strategy and Arm Holdings a

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Arm Holdings Expands Its AI Data Center Push With AGI CPU |
| 2026-06-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Arm Holdings (ARM) Expands Its Agentic-AI CPU Ecosystem With |
| 2026-06-28 | Rumor | 🟢 +1 | 0.5 | Finnhub | Arm Holdings (ARM) Is A Part Of A Second “1776,” Says Newsle |
| 2026-06-27 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | TD Cowen Raises its Price Target on Arm Holdings (ARM) |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm (ARM) Wants To Be The Next Full Stack AI Infrastructure  |
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Seeking Al | Tech stocks drag down Nasdaq for the week; Strategy and Arm  |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Arm Holdings a Buy Near $347? The Case for Double-Digit U |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | Arm Holdings vs Advanced Micro Devices: One Winner of The AI |

---

## 🟢 Mid Long (6)

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] INCY Stock Hits 52-Week High on Regulatory Updates for Opzelura
- 🟢 [Industry|w1.75] Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data Builds Acr
- 🟢 [Industry|w0.5] Incyte (INCY) Surges 5.8%: Is This an Indication of Further Gains?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Policy | 🟢 +1 | 3.02 | Finnhub | INCY Stock Hits 52-Week High on Regulatory Updates for Opzel |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Incyte (INCY) Surges 5.8%: Is This an Indication of Further  |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Stock After 66% One-Year Rally Is The Market T |
| 2026-06-27 | Industry | 🟢 +1 | 1.75 | Finnhub | Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data  |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Corning (GLW) Sets Date for New Dividend; Shares Up 15.6%
- 🟢 [Industry|w0.6] Corning Inc. (NYSE:GLW) Screens as a High-Growth Momentum Leader with 
- 🟢 [Industry|w0.5] Corning (GLW) Soars 10.8%: Is Further Upside Left in the Stock?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | 🟢 +1 | 0.6 | Finnhub | Corning Inc. (NYSE:GLW) Screens as a High-Growth Momentum Le |
| 2026-06-30 | Buyback | 🟢 +1 | 3.57 | Finnhub | Corning (GLW) Sets Date for New Dividend; Shares Up 15.6% |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Corning (GLW) Soars 10.8%: Is Further Upside Left in the Sto |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Is QUALCOMM Incorporated (QCOM) Set to Acquire a Startup?
- 🟢 [Analyst Action|w1.43] Morgan Stanley Upgrades Qualcomm (QCOM) but Remains Cautious on AI Roa

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Morgan Stanley Upgrades Qualcomm (QCOM) but Remains Cautious |
| 2026-06-28 | M&A | 🟢 +1 | 2.94 | Finnhub | Is QUALCOMM Incorporated (QCOM) Set to Acquire a Startup? |
| 2026-06-25 | Industry | ⚪  0 | 0.5 | Seeking Al | QUALCOMM Incorporated (QCOM) Analyst/Investor Day Transcript |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Micron Technology (MU) Gets Major Price Target Raise as Strategic Cont

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Micron Technology (MU) Gets Major Price Target Raise as Stra |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Can KLA Corporation (KLAC) Capture Its Share of a $250 Billion Global 
- 🟢 [Industry|w0.5] Can KLAC Keep Outgrowing the Wafer Equipment Market Through 2027?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Here's Why KLA (KLAC) Fell More Than Broader Market

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Can KLAC Keep Outgrowing the Wafer Equipment Market Through  |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Can KLA Corporation (KLAC) Capture Its Share of a $250 Billi |
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Finnhub | Here's Why KLA (KLAC) Fell More Than Broader Market |

---

### NYSE:GNRC

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
- 🟢 [Analyst Action|w3.02] UBS Sees More Upside in Generac (GNRC); Here’s What’s Driving Its Conf

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | UBS Sees More Upside in Generac (GNRC); Here’s What’s Drivin |
| 2026-06-29 | Industry | ⚪  0 | 0.5 | Finnhub | Is Generac Holdings Inc. (GNRC) A Good Stock To Buy Now? |

---

## ⚠️ Overheated (2)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 10.62 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] Why Is CrowdStrike (CRWD) Stock Soaring Today
- 🟢 [Industry|w2.52] CrowdStrike (CRWD) Launches Unified AI Security Platform And Expands A
- 🟢 [Industry|w2.52] CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI Security C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Policy | 🟢 +1 | 3.02 | Finnhub | Why Is CrowdStrike (CRWD) Stock Soaring Today |
| 2026-06-29 | Industry | 🟢 +1 | 2.52 | Finnhub | CrowdStrike (CRWD) Launches Unified AI Security Platform And |
| 2026-06-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-06-29 | Industry | 🟢 +1 | 2.52 | Finnhub | CrowdStrike (CRWD) Extends Falcon AIDR to Create Unified AI  |
| 2026-06-27 | Industry | 🟢 +1 | 0.7 | Finnhub | Is CrowdStrike (CRWD) One of the Best Trending AI Stocks to  |
| 2026-06-24 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | CrowdStrike (CRWD) Stock Gets Fair Value Bump After Strong Q |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.92 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Stifel Raises PT on Analog Devices (ADI), Keeps a Buy
- 🟢 [M&A|w2.45] Why Analog Devices (ADI) Is Down 10.9% After Record AI Demand And Empo
- 🟢 [M&A|w2.45] Analog Devices (ADI) Buys Empower As Record Revenue Deepens Its AI Pus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Can ADI's Strong Cash Flow and Inventory Strategy Drive Futu |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Stifel Raises PT on Analog Devices (ADI), Keeps a Buy |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | ​Analog Devices (ADI) Up More Than 60% Over the Past 6 Month |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Analog Devices (ADI) is One of the Best Future Stocks to Buy |
| 2026-06-27 | M&A | 🟢 +1 | 2.45 | Finnhub | Why Analog Devices (ADI) Is Down 10.9% After Record AI Deman |
| 2026-06-27 | M&A | 🟢 +1 | 2.45 | Finnhub | Analog Devices (ADI) Buys Empower As Record Revenue Deepens  |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Analog Devices (ADI) Ascends While Market Falls: Some Facts  |

---

## 🔴 Avoid / Short (1)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **26** / 100 |
| Raw Weighted Score | -6.65 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Super Micro’s Problems Are a ‘Slam Dunk’ for Dell Stock

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] Dell Technologies (DELL) Faces Valuation and Competition Concerns Afte
- 🔴 [Analyst Action|w2.52] After a Nearly 200% Run Since February, GF Securities Downgraded Dell 
- 🔴 [Industry|w1.75] Dell Technologies (DELL) Ends Distribution Relationship with Arrow ECS

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | Dell Technologies (DELL) Faces Valuation and Competition Con |
| 2026-06-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Super Micro’s Problems Are a ‘Slam Dunk’ for Dell Stock |
| 2026-06-29 | Industry | ⚪  0 | 0.5 | Finnhub | Take the Zacks Approach to Beat the Market: Dell, Caterpilla |
| 2026-06-28 | Analyst Action | 🔴 -1 | 2.52 | Finnhub | After a Nearly 200% Run Since February, GF Securities Downgr |
| 2026-06-28 | M&A | ⚪  0 | 2.94 | Finnhub | Dell (DELL) Wins Shareholder Backing To Move Its Legal Home  |
| 2026-06-28 | M&A | ⚪  0 | 1.18 | Finnhub | Michael Dell Says Texas Is 'Home' And Where Dell Has Always  |
| 2026-06-27 | Industry | 🔴 -1 | 1.75 | Finnhub | Dell Technologies (DELL) Ends Distribution Relationship with |

---

## ⚪ Watch / Neutral (22)

### NYSE:COHR
- Score: 59/100 | raw: 2.26 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ASML
- Score: 57/100 | raw: 1.79 | News: 11 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 56/100 | raw: 1.5 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 52/100 | raw: 0.51 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMAT
- Score: 51/100 | raw: 0.22 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:PWR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 49/100 | raw: -0.18 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:INTC
- Score: 46/100 | raw: -1.26 | News: 10 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-30T13:40:33.745Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*