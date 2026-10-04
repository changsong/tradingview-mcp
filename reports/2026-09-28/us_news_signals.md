# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-28  |  **News Window:** 2026-09-21 ~ 2026-09-28（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (48)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:TSM** | **78** | 6.72 | 🟢 Long (Strong) | Momentum / Hold | High | 7/23 | - |
| 2 | **NASDAQ:ARM** | **77** | 11.99 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:LITE** | **76** | 6.28 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ANET** | **76** | 6.33 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/16 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:P** | **76** | 11.74 | 🟢 Long (Strong) | Momentum / Hold | High | 16/14 | - |
| 6 | **NYSE:ETN** | **75** | 6.05 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NBIS** | **73** | 5.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 8 | **NASDAQ:GRAL** | **72** | 5.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/18 | - |
| 9 | **NYSE:APH** | **72** | 5.39 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/4 | Overheated Sentiment (one-sided bullish) |
| 10 | **NASDAQ:SMCI** | **71** | 5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 11 | **NASDAQ:SANM** | **71** | 5.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/5 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:DELL** | **68** | 12.14 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 19/11 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:HPE** | **68** | 9.51 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/16 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:ASX** | **66** | 3.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 15 | **NASDAQ:HOOD** | **65** | 7.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/14 | - |
| 16 | **NASDAQ:AEHR** | **64** | 3.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 17 | **NASDAQ:AMD** | **63** | 6.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | - |
| 18 | **NASDAQ:INTC** | **63** | 3.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 19 | **NYSE:WT** | **63** | 3.13 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/4 | - |
| 20 | **NASDAQ:SNDK** | **62** | 2.99 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/27 | - |
| 21 | **NASDAQ:META** | **62** | 9.33 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 19/11 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:DT** | **60** | 2.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 23 | **NASDAQ:MRVL** | **60** | 2.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 24 | **NASDAQ:MU** | **59** | 3.18 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 25 | **NYSE:SPNT** | **58** | 1.87 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 26 | **NASDAQ:PANW** | **58** | 2.93 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/18 | - |
| 27 | **NASDAQ:TEM** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/8 | - |
| 28 | **NASDAQ:QCOM** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/24 | - |
| 29 | **NYSE:KEYS** | **56** | 1.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/7 | - |
| 30 | **NASDAQ:MSFT** | **55** | 1.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 31 | **NYSE:HGTY** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/3 | - |
| 32 | **NASDAQ:AAPL** | **54** | 3.5 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 20/10 | Sentiment Divergence (black swan masked by noise) |
| 33 | **NASDAQ:PLTR** | **54** | 1.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/22 | - |
| 34 | **NASDAQ:STX** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/25 | - |
| 35 | **NYSE:GRMN** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/4 | - |
| 36 | **NASDAQ:CRWD** | **51** | 0.56 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 20/10 | Sentiment Divergence (black swan masked by noise) |
| 37 | **NYSE:DOCN** | **51** | 0.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/5 | - |
| 38 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 42 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 44 | **NYSE:LTC** | **48** | -0.42 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 45 | **NASDAQ:VKTX** | **47** | -0.85 | ⚪ No Trade (Neutral) | Watch | Low | 12/18 | - |
| 46 | **NYSE:VEEV** | **42** | -2.16 | ⚪ No Trade (Neutral) | Watch | Low | 10/13 | - |
| 47 | **NYSE:BE** | **39** | -2.68 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 7/23 | - |
| 48 | **NASDAQ:NVDA** | **37** | -3.19 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 1/29 | - |

---

## 🟢 Strong Long (4)

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.72 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] TSMC: Set For All-Time Highs On Surging AI Chip Demand
- 🟢 [Earnings|w1.63] Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Looks Underval
- 🟢 [Industry|w1.5] Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Rebounds

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | TSMC: Set For All-Time Highs On Surging AI Chip Demand |
| 2026-09-27 | Industry | ⚪  0 | 1.8 | Yahoo | Is Taiwan Semiconductor Manufacturing (NYSE:TSM) Priced For  |
| 2026-09-26 | Industry | 🟢 +1 | 1.5 | Yahoo | Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Reboun |
| 2026-09-26 | Industry | ⚪  0 | 1.5 | SeekingAlp | TSMC: The Crown Jewel In The World Of Silicon Is Trading At  |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | 4 Top-Ranked Chip Stocks to Buy for Better Returns in Octobe |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | SeekingAlp | TSMC Offers AI Upside No Matter Who Wins The Race |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Look |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 11.99 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] ARM vs. Intel: What Revenue Growth Trends Reveal About These Artificia
- 🟢 [Earnings|w1.63] Arm Stocks Surge as Muse Makes CPUs Matter Again
- 🟢 [Industry|w1.5] 1 Agentic AI Chip Stock to Buy and 1 to Sell

**Bearish Factors:**
- 🔴 [Industry|w1.25] Don't Buy Arm Holdings This Expensively

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 1.5 | Yahoo | 1 Agentic AI Chip Stock to Buy and 1 to Sell |
| 2026-09-26 | Industry | ⚪  0 | 1.5 | Yahoo | Arm Holdings Stock Fell 8% in a Day. Here’s What SoftBank’s  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | ARM vs. Intel: What Revenue Growth Trends Reveal About These |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Arm Stocks Surge as Muse Makes CPUs Matter Again |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Arm Climbs 5% as Buyers Return After Sharp Pullback; Qualcom |
| 2026-09-25 | Industry | 🔴 -1 | 1.25 | SeekingAlp | Don't Buy Arm Holdings This Expensively |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Benzinga | Arm Stock Rises on Possible Continued Momentum From Meta's M |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Arm Holdings (ARM) Stock Gains On AI CPU Demand Surge |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 11.74 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Everpure Stock Just Hit a New All-Time High. What Comes Next.
- 🟢 [Earnings|w1.63] US Stock Market Today: S&P 500 Futures Slip As Hot Growth Keeps Rate F
- 🟢 [Analyst Action|w1.5] Barclays Maintains Equal-Weight on Everpure, Raises Price Target to $1

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Everpure (P): Every Analyst Raised Targets After Analyst Day, Free Cas

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Earnings | 🔴 -1 | 2.34 | Yahoo | Everpure (P): Every Analyst Raised Targets After Analyst Day |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.5 | Benzinga | $100 Invested In Everpure 5 Years Ago Would Be Worth This Mu |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Everpure Stock Just Hit a New All-Time High. What Comes Next |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Barclays Maintains Equal-Weight on Everpure, Raises Price Ta |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | US Stock Market Today: S&P 500 Futures Slip As Hot Growth Ke |
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | What Are Everpure Stock Bulls Not Worried About? |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Benzinga | Meta, Everpure, Akamai Technologies, Apimeds Pharmaceuticals |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | Yahoo | Should Investors Chase the AI-Fueled Surge in Everpure (P) S |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.05 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [M&A|w1.75] Eaton to Buy COL Group in $923 Million Deal to Expand European Footpri
- 🟢 [M&A|w1.75] Eaton signs agreement to acquire COL Group, expanding manufacturing ca
- 🟢 [Analyst Action|w1.5] Wells Fargo Initiates Coverage On Eaton Corp with Overweight Rating, A

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | M&A | 🟢 +1 | 1.75 | Yahoo | Eaton to Buy COL Group in $923 Million Deal to Expand Europe |
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | Eaton Adds European Power Capacity as Data Center Demand Kee |
| 2026-09-25 | M&A | 🟢 +1 | 1.75 | Yahoo | Eaton signs agreement to acquire COL Group, expanding manufa |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Wells Fargo Initiates Coverage On Eaton Corp with Overweight |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Is Eaton (ETN) Priced Beyond What Its Cash Flow Can Support? |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Could Eaton Corporation (ETN)’s $242 Million Expansion Power |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Yahoo | 4 Manufacturing Electronics Stocks to Watch on Promising Ind |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Yahoo | VWDRY or ETN: Which Is the Better Value Stock Right Now? |

---

## 🟢 Mid Long (13)

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] Why Is Nebius Stock Surging on Friday?
- 🟢 [Analyst Action|w1.5] Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket
- 🟢 [Earnings|w1.36] Nebius gets BofA boost as AI infrastructure revenue outlook climbs

**Bearish Factors:**
- 🔴 [Industry|w1.25] What Does Nebius Group (NBIS) Stock Face After Michael Burry Expanded 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Why Is Nebius Stock Surging on Friday? |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket |
| 2026-09-25 | Industry | 🔴 -1 | 1.25 | Yahoo | What Does Nebius Group (NBIS) Stock Face After Michael Burry |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Could Palantir (PLTR)’s Partnership with Nebius Group (NBIS) |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | Yahoo | Nebius gets BofA boost as AI infrastructure revenue outlook  |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | BNP Paribas Upgrades Nebius Group to Outperform, Raises Pric |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 18 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] MRNA On Track To Be September's No. 2 S&P 500 Stock — But These 5 Smal
- 🟢 [Analyst Action|w1.5] Mizuho Maintains Neutral on GRAIL, Raises Price Target to $100
- 🟢 [Earnings|w1.36] GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Mizuho Maintains Neutral on GRAIL, Raises Price Target to $1 |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | MRNA On Track To Be September's No. 2 S&P 500 Stock — But Th |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | Yahoo | GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued? |
| 2026-09-22 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Baird Maintains Outperform on GRAIL, Raises Price Target to  |
| 2026-09-22 | Industry | ⚪  0 | 0.75 | Yahoo | GRAIL Stock Jumped 34% Yesterday. The FDA Just Told Its Inve |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a Reasonable 
- 🟢 [Earnings|w1.36] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment
- 🟢 [Industry|w1.25] What's Going On With Super Micro Computer Stock Friday?

**Bearish Factors:**
- 🔴 [Earnings|w1.63] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | 🟢 +1 | 1.95 | ChartMill | Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a R |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Benzinga | What's Going On With Super Micro Computer Stock Friday? |
| 2026-09-25 | Earnings | 🔴 -1 | 1.63 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Benzinga | What's Going On With Super Micro Computer Stock Thursday? |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |
| 2026-09-23 | Earnings | 🟢 +1 | 1.17 | Yahoo | SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy? |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Yahoo | Supermicro Now Shipping NVIDIA Vera Rubin NVL72 Racks |
| 2026-09-23 | Industry | 🟢 +1 | 0.9 | Benzinga | What's Going On With Super Micro Computer Stock Wednesday? |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 5 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improving Fundame
- 🟢 [Earnings|w1.63] Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and High Growth 
- 🟢 [Industry|w0.75] Sanmina (NASDAQ:SANM): Strong Growth Meets Technical Setup

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | ChartMill | Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improvi |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | ChartMill | Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and Hi |
| 2026-09-23 | Earnings | ⚪  0 | 1.17 | Yahoo | Electrical Systems Stocks Q2 Results: Benchmarking Sanmina ( |
| 2026-09-22 | Industry | 🟢 +1 | 0.75 | ChartMill | Sanmina (NASDAQ:SANM): Strong Growth Meets Technical Setup |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] ASE Technology: AI Demand Is Driving A New Growth Phase
- 🟢 [M&A|w1.47] Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technology Holdin
- 🟢 [Industry|w0.75] Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI Demand?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | ASE Technology: AI Demand Is Driving A New Growth Phase |
| 2026-09-24 | Rumor | ⚪  0 | 0.63 | Yahoo | ASE Technology Hldg (ASX) is on the Move, Here's Why the Tre |
| 2026-09-24 | M&A | 🟢 +1 | 1.47 | Benzinga | Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technol |
| 2026-09-22 | Industry | 🟢 +1 | 0.75 | Yahoo | Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI De |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 7.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 14 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] You Think HOOD Is Priced for Mania? Look at Its Multiple Again
- 🟢 [Earnings|w1.63] Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Well
- 🟢 [Earnings|w1.36] Webull Drops 6% as Selling Outlasts Its Insider-Sale Headlines; Robinh

**Bearish Factors:**
- 🔴 [Industry|w1.5] Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 Invested at

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Morgan Stanley says Robinhood quietly built something bigger |
| 2026-09-28 | Earnings | ⚪  0 | 2.76 | Yahoo | Robinhood (HOOD) Pushes Beyond Trading. Can Wealth Managemen |
| 2026-09-27 | Earnings | 🟢 +1 | 2.34 | Yahoo | You Think HOOD Is Priced for Mania? Look at Its Multiple Aga |
| 2026-09-26 | Earnings | ⚪  0 | 1.95 | Yahoo | Standard Chartered Believes Arbitrum Is “Hugely Undervalued” |
| 2026-09-26 | Industry | 🔴 -1 | 1.5 | Yahoo | Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 I |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Prediction Markets Just Got Another Legal Setback. Robinhood |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Robinhood and Coinbase Are Changing How Investors Buy IPO St |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | HOOD at the 5-Year Mark: Diversification to Fuel the Next Gr |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 Report Is
- 🟢 [Industry|w1.05] Aehr Test Systems: Strong Growth Potential, But The Valuation Demands 
- 🟢 [Industry|w0.9] Aehr Test Systems: A Real Tension Between AI-Related Growth And Valuat

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Aehr Test Systems to Participate in 18th Annual CEO Investor |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | SeekingAlp | Aehr Test Systems: Strong Growth Potential, But The Valuatio |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 |
| 2026-09-23 | Industry | 🟢 +1 | 0.9 | SeekingAlp | Aehr Test Systems: A Real Tension Between AI-Related Growth  |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 6.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last Week?
- 🟢 [Industry|w1.8] AMD’s $1 Trillion Valuation Raises the Bar for its AI Ambitions
- 🟢 [Industry|w1.8] AMD Just Hit $1 Trillion After A Blistering 194% Surge YTD — Beth Kind

**Bearish Factors:**
- 🔴 [Industry|w2.13] AMD Stock And 2 US AI Infrastructure Plays Investors Are Watching

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Rumor | ⚪  0 | 1.27 | Yahoo | This Could Be Nvidia’s Biggest Challenger in the AI Chip Mar |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | INTC, AMD, AVGO: Chip Stocks Lead Slide As Tech Gets Hammere |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last We |
| 2026-09-28 | Industry | 🔴 -1 | 2.13 | Yahoo | AMD Stock And 2 US AI Infrastructure Plays Investors Are Wat |
| 2026-09-27 | Industry | 🟢 +1 | 1.8 | Yahoo | AMD’s $1 Trillion Valuation Raises the Bar for its AI Ambiti |
| 2026-09-27 | Earnings | ⚪  0 | 2.34 | Yahoo | Intel CEO Lip-Bu Tan Has Incredible News for AMD Stock Inves |
| 2026-09-27 | Industry | 🟢 +1 | 1.8 | Yahoo | AMD Just Hit $1 Trillion After A Blistering 194% Surge YTD — |
| 2026-09-27 | Industry | ⚪  0 | 1.8 | Yahoo | What Is Advanced Micro Devices (AMD) Proving In Edge AI And  |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Why is Intel Corporation (INTC) up over 33%? Is the Rally Sustainable?
- 🟢 [Industry|w1.25] Is Now the Time to Bet on Intel’s (INTC) Server CPU Comeback and AI Am

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | INTC, AMD, AVGO: Chip Stocks Lead Slide As Tech Gets Hammere |
| 2026-09-27 | Industry | 🟢 +1 | 1.8 | Yahoo | Why is Intel Corporation (INTC) up over 33%? Is the Rally Su |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Is Now the Time to Bet on Intel’s (INTC) Server CPU Comeback |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | What Is Intel (INTC) Doing In Edge AI And Brain Inspired Com |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.13 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 4 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Should You Buy WisdomTree (WT) Stock After Its Latest Crypto Move?
- 🟢 [Analyst Action|w1.5] Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises Price Targ

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Should You Buy WisdomTree (WT) Stock After Its Latest Crypto |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises  |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Yahoo | WisdomTree Leaders Recognized on INvolve’s 2026 ‘Heroes Role |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.99 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 27 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Sandisk: $94B In Contracts Reinforces Outlook
- 🟢 [Earnings|w1.36] Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Industry | ⚪  0 | 1.8 | Yahoo | Will SanDisk (SNDK) Ride the Next Wave of AI-Driven NAND Dem |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Sandisk: $94B In Contracts Reinforces Outlook |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | Yahoo | Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy? |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Oppenheimer Maintains Outperform on Dynatrace, Raises Price Target to 
- 🟢 [Industry|w1.05] Dynatrace AI Positioning, Sales Execution Seen Supporting Growth, Oppe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Dynatrace (DT) Stock Slides as Market Rises: Facts to Know B |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Dynatrace AI Positioning, Sales Execution Seen Supporting Gr |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Oppenheimer Maintains Outperform on Dynatrace, Raises Price  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Marvell Technology, Inc. Declares Quarterly Dividend Payment
- 🟢 [Industry|w1.25] How Much Track Is Left For MRVL Stock?
- 🟢 [Industry|w1.05] Data Centers Will Continue to Drive Robust Growth for Marvell Stock

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Better Risk-R

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | ⚪  0 | 1.95 | SeekingAlp | Marvell: Not The Best Bang For Your Buck |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | How Much Track Is Left For MRVL Stock? |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Marvell Technology, Inc. Declares Quarterly Dividend Payment |
| 2026-09-25 | Rumor | ⚪  0 | 0.75 | Yahoo | Marvell (MRVL) Stock May Be Fully Priced Following Fresh AI  |
| 2026-09-25 | Earnings | 🔴 -1 | 1.63 | Yahoo | Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Bet |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Yahoo | Options Say Marvell Stock Could Halve Or Nearly Double In A  |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Data Centers Will Continue to Drive Robust Growth for Marvel |

---

## 🟡 Cautious Long (1)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.39 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 4 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Bernstein Initiates Coverage of Amphenol at Outperform
- 🟢 [Industry|w1.25] Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside Potential
- 🟢 [Analyst Action|w1.08] Bernstein Initiates Coverage On Amphenol with Outperform Rating, Annou

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | Amphenol Setting Earnings Records, Shares Near All-Time High |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Yahoo | Soaring Defense Spending Means Great News for These 2 Stocks |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.26 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |
| 2026-09-23 | Industry | 🟢 +1 | 0.9 | Yahoo | 2 Stocks That Skirt High Copper Prices for AI Data Centers |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Benzinga | EXCLUSIVE: Beyond Nvidia: Why Jensen Investment's Allen Bond |
| 2026-09-23 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Bernstein Initiates Coverage On Amphenol with Outperform Rat |
| 2026-09-22 | Industry | ⚪  0 | 0.75 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |

---

## ⚠️ Overheated (2)

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.28 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w1.75] LAZR: The Right Supply Chain, The Wrong Top Two
- 🟢 [Earnings|w1.36] Applied Optoelectronics Rides on AI Boom: Can It Beat LITE and FN?
- 🟢 [Industry|w1.25] LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Thinks There

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | SeekingAlp | Lumentum's $40 EPS Bet Changes Everything |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Th |
| 2026-09-25 | M&A | 🟢 +1 | 1.75 | SeekingAlp | LAZR: The Right Supply Chain, The Wrong Top Two |
| 2026-09-24 | Earnings | 🟢 +1 | 1.36 | Yahoo | Applied Optoelectronics Rides on AI Boom: Can It Beat LITE a |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Yahoo | Lumentum Shares Are Up After an AI Optical Tech Partnership  |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Benzinga | Lumentum Shares Up Over 2% After Key Trading Signal |
| 2026-09-23 | Earnings | 🟢 +1 | 1.17 | Yahoo | FN Rides on Surging Data Center Demand: Can It Outpace AAOI  |
| 2026-09-23 | Analyst Action | ⚪  0 | 1.08 | Benzinga | Here’s How Much You Would Have Made Owning Lumentum Holdings |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.33 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 16 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Arista Networks (ANET) Draws Fresh AI Attention, Is The Stock Still Ch
- 🟢 [Earnings|w1.63] Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnings Multipl
- 🟢 [Industry|w1.05] Is Arista Networks Stock Too Dependent On Demand Holding Up?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Arista Networks (ANET) Draws Fresh AI Attention, Is The Stoc |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Are Computer and Technology Stocks Lagging  Arista Networks  |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Arista Networks, Inc. (ANET) Is a Trending Stock: Facts to K |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnin |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | Is Arista Networks Stock Too Dependent On Demand Holding Up? |
| 2026-09-24 | Industry | 🟢 +1 | 1.05 | Yahoo | 5 Stocks With High ROE to Consider Amid Market Volatility |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Yahoo | Madison Mid Cap Fund: Realizing Gains in High-Speed Switch L |
| 2026-09-22 | Earnings | 🟢 +1 | 0.97 | Yahoo | Has Arista Networks Stock Quietly Become A Different Bet? |

---

## ⚠️ Risk Pattern (6)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.39 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 4 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Bernstein Initiates Coverage of Amphenol at Outperform
- 🟢 [Industry|w1.25] Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside Potential
- 🟢 [Analyst Action|w1.08] Bernstein Initiates Coverage On Amphenol with Outperform Rating, Annou

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | Amphenol Setting Earnings Records, Shares Near All-Time High |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |
| 2026-09-24 | Industry | ⚪  0 | 1.05 | Yahoo | Soaring Defense Spending Means Great News for These 2 Stocks |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.26 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |
| 2026-09-23 | Industry | 🟢 +1 | 0.9 | Yahoo | 2 Stocks That Skirt High Copper Prices for AI Data Centers |
| 2026-09-23 | Industry | ⚪  0 | 0.9 | Benzinga | EXCLUSIVE: Beyond Nvidia: Why Jensen Investment's Allen Bond |
| 2026-09-23 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Bernstein Initiates Coverage On Amphenol with Outperform Rat |
| 2026-09-22 | Industry | ⚪  0 | 0.75 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 12.14 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Computers Global Market Report 2026: Capitalize on the $161.29 Billion
- 🟢 [Earnings|w2.76] Virtual Desktop Enhancer Global Market Report 2026: Capitalize on 14.9
- 🟢 [Industry|w2.13] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Black Swan|w3.19] High Availability Cluster Solution Global Market Report 2026: Capitali

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Computers Global Market Report 2026: Capitalize on the $161. |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | High Availability Cluster Solution Global Market Report 2026 |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Virtual Desktop Enhancer Global Market Report 2026: Capitali |
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | Dell Stock Jumps 3.5% as Gemini Enters the XPS Franchise |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Dell Rises 7% as Morgan Stanley Lifts Odds on $756 Bull Case |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Dell Stock Jumps as Morgan Stanley Raises Odds of $756 Bull  |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 9.51 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] IT Asset Disposition Global Market Report 2026: Capitalize on 11% CAGR
- 🟢 [Earnings|w2.76] Load Balancer Global Market Report 2026: Capitalize on 18% CAGR as Clo
- 🟢 [Industry|w2.13] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Earnings|w1.63] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w1.57] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | IT Asset Disposition Global Market Report 2026: Capitalize o |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Load Balancer Global Market Report 2026: Capitalize on 18% C |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last We |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |

---

### NASDAQ:META

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 9.33 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] META, GOOGL, NVDA, BB, SPCX: Why Retail Traders Couldn’t Take Their Ey
- 🟢 [Industry|w2.13] Meta Stock Drops Again. What Happened to Its Muse Boost?
- 🟢 [Industry|w2.13] Meta's Muse AI Rally Is About To Disappoint You

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Meta Platforms (META) Found Liable For Nearly 44 Million New Mexico Vi

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Apollo's Sløk: Is an 'agentic bank run' coming? |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Meta Stock Drops Again. What Happened to Its Muse Boost? |
| 2026-09-28 | Earnings | ⚪  0 | 2.76 | Yahoo | How advertisers are adjusting to Meta’s ad creative diversif |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Meta's Muse AI Rally Is About To Disappoint You |
| 2026-09-28 | Earnings | ⚪  0 | 2.76 | Yahoo | Mark Zuckerberg's Muse Remains Locked Out As Amazon Says Met |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Elon Musk Amplifies Privacy Concerns Over Meta’s Muse After  |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Does Meta (META)’s Advertising Scale Make Brief Outages Fina |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | META, GOOGL, NVDA, BB, SPCX: Why Retail Traders Couldn’t Tak |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 10 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Computers Global Market Report 2026: Capitalize on the $161.29 Billion
- 🟢 [M&A|w2.52] Foldables, AI Servers and India Expansion: What Lies Ahead for Apple (
- 🟢 [Earnings|w2.34] Apple and Nvidia Are the Two Largest Companies in the World. Which is 

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Apple and Amazon Face UK Consumer Lawsuit Over Marketplace Sales
- 🔴 [Black Swan|w2.7] Apple Faces a Deeper iPhone Probe in India. Could its Software Warrant
- 🔴 [Black Swan|w2.7] Musk’s X Corp and SpaceXAI Drop Apple From AI Antitrust Fight. Is One 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Apple and Amazon Face UK Consumer Lawsuit Over Marketplace S |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Aave Just Turned Tokenized Apple, Nvidia and Tesla Stocks In |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Computers Global Market Report 2026: Capitalize on the $161. |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | ChartMill | Copilot Reboot Sends Microsoft Soaring, but Trump's No to Ir |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Zacks Investment Ideas feature highlights: Alphabet, Apple a |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Jim Cramer Names His ‘Sacred Stocks' and Why He Won't Sell T |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Apple (AAPL)’s Premium iPhone Strategy Faces a Test Beyond E |
| 2026-09-27 | Earnings | ⚪  0 | 2.34 | Yahoo | Apple (AAPL) Opens the Ternus Era with a Foldable iPhone. Ca |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **51** / 100 |
| Raw Weighted Score | 0.56 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 10 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Virtualization Security Market Report 2026: Capitalize on 21.3% CAGR a
- 🟢 [Industry|w1.5] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.36] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w1.88] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w1.88] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Virtualization Security Market Report 2026: Capitalize on 21 |
| 2026-09-26 | Industry | 🟢 +1 | 1.5 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 2.25 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |

---

## 🔴 Avoid / Short (7)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 12.14 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Computers Global Market Report 2026: Capitalize on the $161.29 Billion
- 🟢 [Earnings|w2.76] Virtual Desktop Enhancer Global Market Report 2026: Capitalize on 14.9
- 🟢 [Industry|w2.13] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Black Swan|w3.19] High Availability Cluster Solution Global Market Report 2026: Capitali

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Computers Global Market Report 2026: Capitalize on the $161. |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | High Availability Cluster Solution Global Market Report 2026 |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Virtual Desktop Enhancer Global Market Report 2026: Capitali |
| 2026-09-25 | Earnings | ⚪  0 | 1.63 | Yahoo | Dell Stock Jumps 3.5% as Gemini Enters the XPS Franchise |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Dell Rises 7% as Morgan Stanley Lifts Odds on $756 Bull Case |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Dell Stock Jumps as Morgan Stanley Raises Odds of $756 Bull  |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 9.51 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] IT Asset Disposition Global Market Report 2026: Capitalize on 11% CAGR
- 🟢 [Earnings|w2.76] Load Balancer Global Market Report 2026: Capitalize on 18% CAGR as Clo
- 🟢 [Industry|w2.13] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Earnings|w1.63] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w1.57] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | IT Asset Disposition Global Market Report 2026: Capitalize o |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Load Balancer Global Market Report 2026: Capitalize on 18% C |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last We |
| 2026-09-25 | Earnings | 🟢 +1 | 1.63 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |

---

### NASDAQ:META

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 9.33 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] META, GOOGL, NVDA, BB, SPCX: Why Retail Traders Couldn’t Take Their Ey
- 🟢 [Industry|w2.13] Meta Stock Drops Again. What Happened to Its Muse Boost?
- 🟢 [Industry|w2.13] Meta's Muse AI Rally Is About To Disappoint You

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Meta Platforms (META) Found Liable For Nearly 44 Million New Mexico Vi

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Apollo's Sløk: Is an 'agentic bank run' coming? |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Meta Stock Drops Again. What Happened to Its Muse Boost? |
| 2026-09-28 | Earnings | ⚪  0 | 2.76 | Yahoo | How advertisers are adjusting to Meta’s ad creative diversif |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Meta's Muse AI Rally Is About To Disappoint You |
| 2026-09-28 | Earnings | ⚪  0 | 2.76 | Yahoo | Mark Zuckerberg's Muse Remains Locked Out As Amazon Says Met |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Elon Musk Amplifies Privacy Concerns Over Meta’s Muse After  |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Does Meta (META)’s Advertising Scale Make Brief Outages Fina |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | META, GOOGL, NVDA, BB, SPCX: Why Retail Traders Couldn’t Tak |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 10 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Computers Global Market Report 2026: Capitalize on the $161.29 Billion
- 🟢 [M&A|w2.52] Foldables, AI Servers and India Expansion: What Lies Ahead for Apple (
- 🟢 [Earnings|w2.34] Apple and Nvidia Are the Two Largest Companies in the World. Which is 

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Apple and Amazon Face UK Consumer Lawsuit Over Marketplace Sales
- 🔴 [Black Swan|w2.7] Apple Faces a Deeper iPhone Probe in India. Could its Software Warrant
- 🔴 [Black Swan|w2.7] Musk’s X Corp and SpaceXAI Drop Apple From AI Antitrust Fight. Is One 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Apple and Amazon Face UK Consumer Lawsuit Over Marketplace S |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Aave Just Turned Tokenized Apple, Nvidia and Tesla Stocks In |
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Computers Global Market Report 2026: Capitalize on the $161. |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | ChartMill | Copilot Reboot Sends Microsoft Soaring, but Trump's No to Ir |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Zacks Investment Ideas feature highlights: Alphabet, Apple a |
| 2026-09-28 | Industry | 🟢 +1 | 2.13 | Yahoo | Jim Cramer Names His ‘Sacred Stocks' and Why He Won't Sell T |
| 2026-09-28 | Industry | ⚪  0 | 2.13 | Yahoo | Apple (AAPL)’s Premium iPhone Strategy Faces a Test Beyond E |
| 2026-09-27 | Earnings | ⚪  0 | 2.34 | Yahoo | Apple (AAPL) Opens the Ternus Era with a Foldable iPhone. Ca |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **51** / 100 |
| Raw Weighted Score | 0.56 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 20 / 10 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Virtualization Security Market Report 2026: Capitalize on 21.3% CAGR a
- 🟢 [Industry|w1.5] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.36] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w1.88] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w1.88] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 2.76 | Yahoo | Virtualization Security Market Report 2026: Capitalize on 21 |
| 2026-09-26 | Industry | 🟢 +1 | 1.5 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 2.25 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.25 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 1.88 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **39** / 100 |
| Raw Weighted Score | -2.68 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Is Bloom Energy Stock's Drop A Chance To Buy?
- 🔴 [Industry|w1.05] Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next for BE St

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Bloom Energy (BE) Is Up 8.7% After Oracle Reaffirms 2.4 GW A |
| 2026-09-25 | Earnings | 🔴 -1 | 1.63 | Yahoo | Is Bloom Energy Stock's Drop A Chance To Buy? |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Bloom Energy Stock Is Today’s Top S&P 500 Performer. It Has  |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | Powering Community Resilience, Bloom Energy Supports First R |
| 2026-09-25 | Industry | ⚪  0 | 1.25 | Yahoo | BE Stock Eyes Best Month Since April: Oracle Reaffirms 2.4 G |
| 2026-09-24 | Industry | 🔴 -1 | 1.05 | Yahoo | Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next |
| 2026-09-24 | Rumor | ⚪  0 | 0.63 | Yahoo | This $267 Stock Could Be Your Ticket to Millionaire Status |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.19 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 1 / 29 |

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] NVIDIA (NASDAQ:NVDA) Combines High Growth Momentum With a Breakout Set

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 3.19 | ChartMill | NVIDIA (NASDAQ:NVDA) Combines High Growth Momentum With a Br |

---

## ⚪ Watch / Neutral (21)

### NASDAQ:MU
- Score: 59/100 | raw: 3.18 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 58/100 | raw: 1.87 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 58/100 | raw: 2.93 | News: 12 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TEM
- Score: 58/100 | raw: 1.8 | News: 4 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:QCOM
- Score: 58/100 | raw: 1.8 | News: 6 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 56/100 | raw: 1.4 | News: 5 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 55/100 | raw: 1.27 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 54/100 | raw: 0.9 | News: 3 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLTR
- Score: 54/100 | raw: 1.13 | News: 8 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 54/100 | raw: 0.9 | News: 3 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 54/100 | raw: 0.97 | News: 5 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 51/100 | raw: 0.22 | News: 4 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 48/100 | raw: -0.42 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:VKTX
- Score: 47/100 | raw: -0.85 | News: 12 kept / 18 dropped | No clear directional bias — stay flat

### NYSE:VEEV
- Score: 42/100 | raw: -2.16 | News: 10 kept / 13 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-28T12:30:52.613Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*