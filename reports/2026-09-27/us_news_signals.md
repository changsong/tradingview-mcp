# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-27  |  **News Window:** 2026-09-20 ~ 2026-09-27（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (46)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:P** | **84** | 18.35 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:GRAL** | **80** | 7.21 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/15 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:ANET** | **78** | 7.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/14 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ETN** | **78** | 8.22 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:LITE** | **77** | 7.49 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:NBIS** | **77** | 6.48 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 7 | **NASDAQ:ARM** | **77** | 14.21 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:SMCI** | **76** | 7.87 | 🟢 Long (Strong) | Momentum / Hold | High | 11/19 | - |
| 9 | **NYSE:APH** | **76** | 6.39 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/3 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:DELL** | **74** | 13.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:TSM** | **70** | 5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 12 | **NASDAQ:SNDK** | **70** | 4.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 13 | **NASDAQ:AEHR** | **70** | 4.68 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/2 | - |
| 14 | **NYSE:WT** | **70** | 4.72 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 15 | **NYSE:ASX** | **69** | 4.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 16 | **NASDAQ:TEM** | **67** | 4.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/4 | - |
| 17 | **NASDAQ:HOOD** | **66** | 7.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | - |
| 18 | **NASDAQ:AMD** | **65** | 6.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/17 | - |
| 19 | **NASDAQ:AAPL** | **64** | 8.2 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | - |
| 20 | **NASDAQ:IREN** | **62** | 6.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 21/9 | - |
| 21 | **NYSE:DT** | **61** | 2.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 22 | **NASDAQ:MRVL** | **61** | 2.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 23 | **NYSE:HPE** | **60** | 3.5 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 11/19 | Sentiment Divergence (black swan masked by noise) |
| 24 | **NASDAQ:MU** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 25 | **NYSE:SPNT** | **59** | 2.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 26 | **NYSE:GRMN** | **58** | 1.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/2 | - |
| 27 | **NASDAQ:PANW** | **57** | 2.62 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 12/18 | Sentiment Divergence (black swan masked by noise) |
| 28 | **NYSE:KEYS** | **57** | 1.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/7 | - |
| 29 | **NASDAQ:INTC** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 30 | **NYSE:JOE** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 31 | **NYSE:HGTY** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 32 | **NASDAQ:STX** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/24 | - |
| 33 | **NASDAQ:PLTR** | **53** | 0.93 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/21 | - |
| 34 | **NYSE:DOCN** | **51** | 0.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/4 | - |
| 35 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/5 | - |
| 36 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 40 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:QCOM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 42 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 43 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 44 | **NYSE:LTC** | **48** | -0.46 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 45 | **NASDAQ:CRWD** | **46** | -2.64 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 19/11 | Bullish-to-Bearish Reversal (reversal) |
| 46 | **NYSE:BE** | **37** | -3.2 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 7/23 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.48 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.8] Why Is Nebius Stock Surging on Friday?
- 🟢 [Analyst Action|w1.8] Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket
- 🟢 [Earnings|w1.63] Nebius gets BofA boost as AI infrastructure revenue outlook climbs

**Bearish Factors:**
- 🔴 [Industry|w1.5] What Does Nebius Group (NBIS) Stock Face After Michael Burry Expanded 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Why Is Nebius Stock Surging on Friday? |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket |
| 2026-09-25 | Industry | 🔴 -1 | 1.5 | Yahoo | What Does Nebius Group (NBIS) Stock Face After Michael Burry |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Could Palantir (PLTR)’s Partnership with Nebius Group (NBIS) |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | Nebius gets BofA boost as AI infrastructure revenue outlook  |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | BNP Paribas Upgrades Nebius Group to Outperform, Raises Pric |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 14.21 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] ARM vs. Intel: What Revenue Growth Trends Reveal About These Artificia
- 🟢 [Earnings|w1.95] Arm Stocks Surge as Muse Makes CPUs Matter Again
- 🟢 [Industry|w1.8] 1 Agentic AI Chip Stock to Buy and 1 to Sell

**Bearish Factors:**
- 🔴 [Industry|w1.5] Don't Buy Arm Holdings This Expensively

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | 1 Agentic AI Chip Stock to Buy and 1 to Sell |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Arm Holdings Stock Fell 8% in a Day. Here’s What SoftBank’s  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | ARM vs. Intel: What Revenue Growth Trends Reveal About These |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Arm Stocks Surge as Muse Makes CPUs Matter Again |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Arm Climbs 5% as Buyers Return After Sharp Pullback; Qualcom |
| 2026-09-25 | Industry | 🔴 -1 | 1.5 | SeekingAlp | Don't Buy Arm Holdings This Expensively |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Benzinga | Arm Stock Rises on Possible Continued Momentum From Meta's M |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Arm Holdings (ARM) Stock Gains On AI CPU Demand Surge |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 7.87 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a Reasonable 
- 🟢 [Earnings|w1.63] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment
- 🟢 [Industry|w1.5] What's Going On With Super Micro Computer Stock Friday?

**Bearish Factors:**
- 🔴 [Earnings|w1.95] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | 🟢 +1 | 2.34 | ChartMill | Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a R |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Benzinga | What's Going On With Super Micro Computer Stock Friday? |
| 2026-09-25 | Earnings | 🔴 -1 | 1.95 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Benzinga | What's Going On With Super Micro Computer Stock Thursday? |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |
| 2026-09-23 | Earnings | 🟢 +1 | 1.36 | Yahoo | SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy? |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Yahoo | Supermicro Now Shipping NVIDIA Vera Rubin NVL72 Racks |
| 2026-09-23 | Industry | 🟢 +1 | 1.05 | Benzinga | What's Going On With Super Micro Computer Stock Wednesday? |

---

## 🟢 Mid Long (14)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 13.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Major Stock 
- 🟢 [Earnings|w1.95] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Earnings|w1.63] Is Dell Technologies (DELL) Stock a Buy After its $5 Billion AI-Fueled

**Bearish Factors:**
- 🔴 [Industry|w1.25] Dell Top Executives Sell $32 Million in Stock as AI Rally Accelerates

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Dell Stock Jumps 3.5% as Gemini Enters the XPS Franchise |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Dell Rises 7% as Morgan Stanley Lifts Odds on $756 Bull Case |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Dell Stock Jumps as Morgan Stanley Raises Odds of $756 Bull  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Benzinga | EXCLUSIVE: Robotics Has A Dell-HP Problem—and This AI Compan |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Wall Street Bulls Look Optimistic About Dell Technologies (D |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | AI Trade Picks Up Again as Investors Pile Back Into Stocks |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here’s How Much You Would Have Made Owning Dell Technologies |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Looks Underval
- 🟢 [Industry|w1.8] Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Rebounds
- 🟢 [Industry|w1.5] 4 Top-Ranked Chip Stocks to Buy for Better Returns in October

**Bearish Factors:**
- 🔴 [Industry|w1.5] Why Is Taiwan Semiconductor Manufacturing (TSM) Raising Wafer Prices B

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Reboun |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | SeekingAlp | TSMC: The Crown Jewel In The World Of Silicon Is Trading At  |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | 4 Top-Ranked Chip Stocks to Buy for Better Returns in Octobe |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | SeekingAlp | TSMC Offers AI Upside No Matter Who Wins The Race |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Look |
| 2026-09-25 | Industry | 🔴 -1 | 1.5 | Yahoo | Why Is Taiwan Semiconductor Manufacturing (TSM) Raising Wafe |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Is Taiwan Semiconductor (TSM) Stock a Better Bet than ASML H |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Yahoo | TSMC (TSM) Advances While Market Declines: Some Information  |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Sandisk: $94B In Contracts Reinforces Outlook
- 🟢 [Earnings|w1.63] Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy?
- 🟢 [Industry|w1.25] Sandisk Drops 23% From 52-Week High: Buy, Sell or Hold the Stock?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Industry | ⚪  0 | 2.13 | Yahoo | Will SanDisk (SNDK) Ride the Next Wave of AI-Driven NAND Dem |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Sandisk: $94B In Contracts Reinforces Outlook |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy? |
| 2026-09-24 | Earnings | ⚪  0 | 1.63 | Yahoo | Sandisk (SNDK) Stock May Still Look Reasonable After AI Slow |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Sandisk Drops 23% From 52-Week High: Buy, Sell or Hold the S |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.68 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 Report Is
- 🟢 [Industry|w1.25] Aehr Test Systems: Strong Growth Potential, But The Valuation Demands 
- 🟢 [Industry|w1.05] Aehr Test Systems: A Real Tension Between AI-Related Growth And Valuat

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | SeekingAlp | Aehr Test Systems: Strong Growth Potential, But The Valuatio |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 |
| 2026-09-23 | Industry | 🟢 +1 | 1.05 | SeekingAlp | Aehr Test Systems: A Real Tension Between AI-Related Growth  |
| 2026-09-21 | Industry | 🟢 +1 | 0.75 | Yahoo | AEHR at 18.59X Sales: Market Loves Its AI Story, But is Love |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.72 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Should You Buy WisdomTree (WT) Stock After Its Latest Crypto Move?
- 🟢 [Analyst Action|w1.8] Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises Price Targ
- 🟢 [Earnings|w0.97] WisdomTree (NYSE:WT) Passes Minervini Trend Template and High Growth M

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Should You Buy WisdomTree (WT) Stock After Its Latest Crypto |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises  |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Yahoo | WisdomTree Leaders Recognized on INvolve’s 2026 ‘Heroes Role |
| 2026-09-21 | Earnings | 🟢 +1 | 0.97 | ChartMill | WisdomTree (NYSE:WT) Passes Minervini Trend Template and Hig |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] ASE Technology: AI Demand Is Driving A New Growth Phase
- 🟢 [M&A|w1.75] Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technology Holdin
- 🟢 [Industry|w0.9] Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI Demand?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | ASE Technology: AI Demand Is Driving A New Growth Phase |
| 2026-09-24 | Rumor | ⚪  0 | 0.75 | Yahoo | ASE Technology Hldg (ASX) is on the Move, Here's Why the Tre |
| 2026-09-24 | M&A | 🟢 +1 | 1.75 | Benzinga | Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technol |
| 2026-09-22 | Industry | 🟢 +1 | 0.9 | Yahoo | Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI De |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 4 |

**Bullish Factors:**
- 🟢 [Industry|w1.25] Buy 3 AI-Powered Medical Stocks to Strengthen Your Portfolio in Q4
- 🟢 [Earnings|w0.97] Tempus AI (TEM) Is Building a Heart Failure Agent That Never Sleeps
- 🟢 [Industry|w0.9] Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data Business 

**Bearish Factors:**
- 🔴 [Industry|w0.9] Tempus AI: High Risk, But With A Great Cause

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Buy 3 AI-Powered Medical Stocks to Strengthen Your Portfolio |
| 2026-09-22 | Industry | 🟢 +1 | 0.9 | Yahoo | Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data |
| 2026-09-22 | Industry | 🔴 -1 | 0.9 | SeekingAlp | Tempus AI: High Risk, But With A Great Cause |
| 2026-09-22 | Industry | 🟢 +1 | 0.9 | Yahoo | Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expans |
| 2026-09-21 | Industry | ⚪  0 | 0.75 | Yahoo | Tempus and Recursion Extend Existing Data License Agreement  |
| 2026-09-21 | Industry | ⚪  0 | 0.75 | Benzinga | Tempus AI Extends Recursion Data Deal Through 2029, Replacin |
| 2026-09-21 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | This Digital Realty Trust Analyst Begins Coverage On A Bulli |
| 2026-09-21 | Analyst Action | ⚪  0 | 0.9 | Benzinga | Goldman Sachs Initiates Coverage On Tempus AI with Neutral R |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 7.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Well
- 🟢 [Earnings|w1.63] Webull Drops 6% as Selling Outlasts Its Insider-Sale Headlines; Robinh
- 🟢 [Industry|w1.5] Robinhood and Coinbase Are Changing How Investors Buy IPO Stocks

**Bearish Factors:**
- 🔴 [Industry|w1.8] Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 Invested at

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | ⚪  0 | 2.34 | Yahoo | Standard Chartered Believes Arbitrum Is “Hugely Undervalued” |
| 2026-09-26 | Industry | 🔴 -1 | 1.8 | Yahoo | Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 I |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Prediction Markets Just Got Another Legal Setback. Robinhood |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Robinhood and Coinbase Are Changing How Investors Buy IPO St |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | HOOD at the 5-Year Mark: Diversification to Fuel the Next Gr |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | DraftKings Dips as Adjusted Data Narrows Kalshi’s 76% Predic |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Robinhood's Fastest-Growing Business Isn't Trading Stocks |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Wel |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 6.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 17 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] 1 Agentic AI Chip Stock to Buy and 1 to Sell
- 🟢 [Analyst Action|w1.8] 5-Star Analyst Drops Stunning New Price Target on AMD Stock
- 🟢 [Analyst Action|w1.8] BofA raises AMD target to $720, sees server CPU TAM tripling to $211B 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Industry | ⚪  0 | 2.13 | Yahoo | What Is Advanced Micro Devices (AMD) Proving In Edge AI And  |
| 2026-09-27 | Rumor | ⚪  0 | 1.27 | Yahoo | Prediction: Here's What a $5,000 Investment in AMD Could Be  |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | SeekingAlp | AMD: First AI Target Hit, Likely $1,000 Up Next |
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | 1 Agentic AI Chip Stock to Buy and 1 to Sell |
| 2026-09-26 | M&A | ⚪  0 | 2.52 | Yahoo | If You Invest $500 a Month in AMD Starting Now, This is What |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Bank of America Sees AMD at $720 on CPU Demand. Anthropic’s  |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Bank of America Just Upped Its Price Target on AMD Stock |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Is AMD Stock Priced Right Against Its Chip Peers? |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 8.2 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |

**Bullish Factors:**
- 🟢 [M&A|w2.98] Foldables, AI Servers and India Expansion: What Lies Ahead for Apple (
- 🟢 [Earnings|w2.76] Gene Munster Says Personalized AI Could Be Apple, Meta’s Next Big Prof
- 🟢 [Analyst Action|w2.16] Apple (AAPL) Plans a Health App Overhaul. Can Better Insights Boost De

**Bearish Factors:**
- 🔴 [Industry|w1.5] Apple (AAPL) Reaches $250 Million Siri Settlement Over Recent iPhone C

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Earnings | 🟢 +1 | 2.76 | Yahoo | Gene Munster Says Personalized AI Could Be Apple, Meta’s Nex |
| 2026-09-27 | M&A | 🟢 +1 | 2.98 | Yahoo | Foldables, AI Servers and India Expansion: What Lies Ahead f |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Apple Eyes the Rapidly Growing Fitness Tracker Segment. What |
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple Stock Is Up 34% Over the Past Year: Can the iPhone 18  |
| 2026-09-26 | Policy | ⚪  0 | 2.16 | CNBC | Apple faces $5.7 billion patent infringement verdict over iP |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | How Investors May Respond To Apple (AAPL) Launching Its Firs |
| 2026-09-26 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Apple (AAPL) Plans a Health App Overhaul. Can Better Insight |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Apple (AAPL) Took a Different Pricing Approach with its New  |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 6.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 21 / 9 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] JPMorgan Predicts IREN Will Generate $24 Billion in Annual Revenue by 
- 🟢 [Earnings|w1.63] Applied Digital vs. IREN: Which Technology Stock Is a Better Buy in 20
- 🟢 [Industry|w1.5] Is It Too Late to Buy IREN Stock After Its Monster Run?

**Bearish Factors:**
- 🔴 [Analyst Action|w1.8] SemiAnalysis upgrades Nebius, downgrades IREN in latest neocloud ranki
- 🔴 [Industry|w1.5] Neocloud Stocks Fall as Selling Extends After a Week of Research Notes
- 🔴 [Earnings|w1.17] IREN Broadens Its AI Customer Base: Can Diversification Pay Off?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | 🟢 +1 | 2.34 | Yahoo | JPMorgan Predicts IREN Will Generate $24 Billion in Annual R |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Is It Too Late to Buy IREN Stock After Its Monster Run? |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.8 | Yahoo | Is IREN (IREN) Cheap As Sector Selling And Mixed Views Test  |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | The IREN Story Is Changing Fast. We See 82% Upside Potential |
| 2026-09-25 | Industry | 🔴 -1 | 1.5 | Yahoo | Neocloud Stocks Fall as Selling Extends After a Week of Rese |
| 2026-09-25 | Analyst Action | 🔴 -1 | 1.8 | Yahoo | SemiAnalysis upgrades Nebius, downgrades IREN in latest neoc |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | Applied Digital vs. IREN: Which Technology Stock Is a Better |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | Nebius Surges 6%, CoreWeave Treads Water as JPMorgan Upgrade |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] Oppenheimer Maintains Outperform on Dynatrace, Raises Price Target to 
- 🟢 [Industry|w1.25] Dynatrace AI Positioning, Sales Execution Seen Supporting Growth, Oppe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Dynatrace (DT) Stock Slides as Market Rises: Facts to Know B |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Dynatrace AI Positioning, Sales Execution Seen Supporting Gr |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Oppenheimer Maintains Outperform on Dynatrace, Raises Price  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Marvell Technology, Inc. Declares Quarterly Dividend Payment
- 🟢 [Industry|w1.5] How Much Track Is Left For MRVL Stock?
- 🟢 [Industry|w1.25] Data Centers Will Continue to Drive Robust Growth for Marvell Stock

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Better Risk-R

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Marvell: Not The Best Bang For Your Buck |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | How Much Track Is Left For MRVL Stock? |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Marvell Technology, Inc. Declares Quarterly Dividend Payment |
| 2026-09-25 | Rumor | ⚪  0 | 0.9 | Yahoo | Marvell (MRVL) Stock May Be Fully Priced Following Fresh AI  |
| 2026-09-25 | Earnings | 🔴 -1 | 1.95 | Yahoo | Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Bet |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Yahoo | Options Say Marvell Stock Could Halve Or Nearly Double In A  |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Data Centers Will Continue to Drive Robust Growth for Marvel |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Benzinga | What's Going On With Marvell Technology Stock Thursday? |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Micron (MU) Trades at Just 6.5x Forward Earnings. RBC Says SCAs Could 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-27 | Earnings | ⚪  0 | 2.76 | Yahoo | What Lies Ahead for Micron (MU) in the Upcoming Fourth Quart |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | How Big Is Micron Technology (MU) $100 Billion Syracuse Fact |
| 2026-09-26 | Earnings | 🟢 +1 | 2.34 | Yahoo | Micron (MU) Trades at Just 6.5x Forward Earnings. RBC Says S |
| 2026-09-26 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Micron, Nike To Headline Earnings Next Week; GDP Numbers Awa |

---

## ⚠️ Overheated (6)

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 18.35 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Everpure Stock Just Hit a New All-Time High. What Comes Next.
- 🟢 [Earnings|w1.95] US Stock Market Today: S&P 500 Futures Slip As Hot Growth Keeps Rate F
- 🟢 [Analyst Action|w1.8] Barclays Maintains Equal-Weight on Everpure, Raises Price Target to $1

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | ⚪  0 | 1.8 | Benzinga | $100 Invested In Everpure 5 Years Ago Would Be Worth This Mu |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Everpure Stock Just Hit a New All-Time High. What Comes Next |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Barclays Maintains Equal-Weight on Everpure, Raises Price Ta |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | US Stock Market Today: S&P 500 Futures Slip As Hot Growth Ke |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | What Are Everpure Stock Bulls Not Worried About? |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Benzinga | Meta, Everpure, Akamai Technologies, Apimeds Pharmaceuticals |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | Should Investors Chase the AI-Fueled Surge in Everpure (P) S |
| 2026-09-24 | Earnings | ⚪  0 | 1.63 | Yahoo | Why Everpure (P) Stock Is Up Today |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.21 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] MRNA On Track To Be September's No. 2 S&P 500 Stock — But These 5 Smal
- 🟢 [Analyst Action|w1.8] Mizuho Maintains Neutral on GRAIL, Raises Price Target to $100
- 🟢 [Earnings|w1.63] GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Mizuho Maintains Neutral on GRAIL, Raises Price Target to $1 |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | MRNA On Track To Be September's No. 2 S&P 500 Stock — But Th |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued? |
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Baird Maintains Outperform on GRAIL, Raises Price Target to  |
| 2026-09-22 | Industry | ⚪  0 | 0.9 | Yahoo | GRAIL Stock Jumped 34% Yesterday. The FDA Just Told Its Inve |
| 2026-09-21 | Industry | 🟢 +1 | 0.75 | Yahoo | GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Li |
| 2026-09-21 | Industry | ⚪  0 | 0.75 | Benzinga | 12 Health Care Stocks Moving In Monday's Intraday Session |
| 2026-09-21 | Industry | ⚪  0 | 0.75 | Yahoo | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 7.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Arista Networks (ANET) Draws Fresh AI Attention, Is The Stock Still Ch
- 🟢 [Earnings|w1.95] Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnings Multipl
- 🟢 [Industry|w1.25] Is Arista Networks Stock Too Dependent On Demand Holding Up?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Arista Networks (ANET) Draws Fresh AI Attention, Is The Stoc |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Are Computer and Technology Stocks Lagging  Arista Networks  |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Arista Networks, Inc. (ANET) Is a Trending Stock: Facts to K |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnin |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Is Arista Networks Stock Too Dependent On Demand Holding Up? |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | 5 Stocks With High ROE to Consider Amid Market Volatility |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Yahoo | Madison Mid Cap Fund: Realizing Gains in High-Speed Switch L |
| 2026-09-22 | Earnings | 🟢 +1 | 1.17 | Yahoo | Has Arista Networks Stock Quietly Become A Different Bet? |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.22 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.1] Eaton to Buy COL Group in $923 Million Deal to Expand European Footpri
- 🟢 [M&A|w2.1] Eaton signs agreement to acquire COL Group, expanding manufacturing ca
- 🟢 [Analyst Action|w1.8] Wells Fargo Initiates Coverage On Eaton Corp with Overweight Rating, A

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | M&A | 🟢 +1 | 2.1 | Yahoo | Eaton to Buy COL Group in $923 Million Deal to Expand Europe |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Eaton Adds European Power Capacity as Data Center Demand Kee |
| 2026-09-25 | M&A | 🟢 +1 | 2.1 | Yahoo | Eaton signs agreement to acquire COL Group, expanding manufa |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Wells Fargo Initiates Coverage On Eaton Corp with Overweight |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Is Eaton (ETN) Priced Beyond What Its Cash Flow Can Support? |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Could Eaton Corporation (ETN)’s $242 Million Expansion Power |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Yahoo | 4 Manufacturing Electronics Stocks to Watch on Promising Ind |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Yahoo | VWDRY or ETN: Which Is the Better Value Stock Right Now? |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 7.49 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.1] LAZR: The Right Supply Chain, The Wrong Top Two
- 🟢 [Earnings|w1.63] Applied Optoelectronics Rides on AI Boom: Can It Beat LITE and FN?
- 🟢 [Industry|w1.5] LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Thinks There

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | SeekingAlp | Lumentum's $40 EPS Bet Changes Everything |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Th |
| 2026-09-25 | M&A | 🟢 +1 | 2.1 | SeekingAlp | LAZR: The Right Supply Chain, The Wrong Top Two |
| 2026-09-24 | Earnings | 🟢 +1 | 1.63 | Yahoo | Applied Optoelectronics Rides on AI Boom: Can It Beat LITE a |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Yahoo | Lumentum Shares Are Up After an AI Optical Tech Partnership  |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Benzinga | Lumentum Shares Up Over 2% After Key Trading Signal |
| 2026-09-23 | Earnings | 🟢 +1 | 1.36 | Yahoo | FN Rides on Surging Data Center Demand: Can It Outpace AAOI  |
| 2026-09-23 | Analyst Action | ⚪  0 | 1.26 | Benzinga | Here’s How Much You Would Have Made Owning Lumentum Holdings |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.39 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 3 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside Potential
- 🟢 [Analyst Action|w1.5] Bernstein Initiates Coverage of Amphenol at Outperform
- 🟢 [Analyst Action|w1.26] Bernstein Initiates Coverage On Amphenol with Outperform Rating, Annou

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Amphenol Setting Earnings Records, Shares Near All-Time High |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |
| 2026-09-24 | Industry | ⚪  0 | 1.25 | Yahoo | Soaring Defense Spending Means Great News for These 2 Stocks |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.5 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |
| 2026-09-23 | Industry | 🟢 +1 | 1.05 | Yahoo | 2 Stocks That Skirt High Copper Prices for AI Data Centers |
| 2026-09-23 | Industry | ⚪  0 | 1.05 | Benzinga | EXCLUSIVE: Beyond Nvidia: Why Jensen Investment's Allen Bond |
| 2026-09-23 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Bernstein Initiates Coverage On Amphenol with Outperform Rat |
| 2026-09-22 | Industry | ⚪  0 | 0.9 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |

---

## ⚠️ Risk Pattern (3)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Major Stock 
- 🟢 [Earnings|w1.95] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Policy|w1.8] Hewlett Packard and Tecnoglass have been highlighted as Zacks Bull and

**Bearish Factors:**
- 🔴 [Earnings|w1.95] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w1.88] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Bull of the Day: Hewlett Packard Enterprise (HPE) |
| 2026-09-25 | Policy | 🟢 +1 | 1.8 | Yahoo | Hewlett Packard and Tecnoglass have been highlighted as Zack |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Dell vs. HPE: Which AI Server Stock Is the Better Buy? |
| 2026-09-25 | Earnings | 🔴 -1 | 1.95 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Black Swan | 🔴 -1 | 1.88 | Yahoo | Micron, SuperMicro, HPE Face ITC Investigation Over Netlist  |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 2.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 12 / 18 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w1.75] Palo Alto Networks, IBD Stock Of The Day, Is In Buy Area. Acquisitions
- 🟢 [Industry|w1.5] Palo Alto Networks (PANW): Can Platformization Keep Driving Growth?
- 🟢 [Industry|w1.25] Semtech (SMTC) Jumped, But What Is Driving Attention Now?

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Palo Alto Is Knocking on $400 as Wall Street Rushes Into Cyber. Buy, H

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | AI Slowdown Push 'Unrealistic,' Says Palo Alto Networks CEO, |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Qualys, Okta, Palo Alto Networks, Rapid7, and SentinelOne Sh |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks CEO drops blunt take on AI slowdown calls |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Palo Alto Networks (PANW): Can Platformization Keep Driving  |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Palo Alto Networks (PANW) Stock Slides as Market Rises: Fact |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Palo Alto Networks Is Turning OpenAI and Anthropic Into a Ne |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | CrowdStrike vs. Palo Alto: Which AI Cybersecurity Stock Bett |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Semtech (SMTC) Jumped, But What Is Driving Attention Now? |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **46** / 100 |
| Raw Weighted Score | -2.64 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Bullish-to-Bearish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.63] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F
- 🟢 [Earnings|w1.63] CrowdStrike vs. Figma: Which Technology Stock Is a Better Buy in 2026?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w2.25] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w2.25] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.8 | Benzinga | If You Invested $100 In CrowdStrike Holdings Stock 5 Years A |

---

## 🔴 Avoid / Short (4)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Major Stock 
- 🟢 [Earnings|w1.95] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Policy|w1.8] Hewlett Packard and Tecnoglass have been highlighted as Zacks Bull and

**Bearish Factors:**
- 🔴 [Earnings|w1.95] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w1.88] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Bull of the Day: Hewlett Packard Enterprise (HPE) |
| 2026-09-25 | Policy | 🟢 +1 | 1.8 | Yahoo | Hewlett Packard and Tecnoglass have been highlighted as Zack |
| 2026-09-25 | Earnings | 🟢 +1 | 1.95 | Yahoo | Dell vs. HPE: Which AI Server Stock Is the Better Buy? |
| 2026-09-25 | Earnings | 🔴 -1 | 1.95 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Black Swan | 🔴 -1 | 1.88 | Yahoo | Micron, SuperMicro, HPE Face ITC Investigation Over Netlist  |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 2.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 12 / 18 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w1.75] Palo Alto Networks, IBD Stock Of The Day, Is In Buy Area. Acquisitions
- 🟢 [Industry|w1.5] Palo Alto Networks (PANW): Can Platformization Keep Driving Growth?
- 🟢 [Industry|w1.25] Semtech (SMTC) Jumped, But What Is Driving Attention Now?

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Palo Alto Is Knocking on $400 as Wall Street Rushes Into Cyber. Buy, H

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | AI Slowdown Push 'Unrealistic,' Says Palo Alto Networks CEO, |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Qualys, Okta, Palo Alto Networks, Rapid7, and SentinelOne Sh |
| 2026-09-26 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks CEO drops blunt take on AI slowdown calls |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Palo Alto Networks (PANW): Can Platformization Keep Driving  |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Palo Alto Networks (PANW) Stock Slides as Market Rises: Fact |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | Palo Alto Networks Is Turning OpenAI and Anthropic Into a Ne |
| 2026-09-25 | Earnings | ⚪  0 | 1.95 | Yahoo | CrowdStrike vs. Palo Alto: Which AI Cybersecurity Stock Bett |
| 2026-09-24 | Industry | 🟢 +1 | 1.25 | Yahoo | Semtech (SMTC) Jumped, But What Is Driving Attention Now? |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **46** / 100 |
| Raw Weighted Score | -2.64 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Bullish-to-Bearish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.63] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F
- 🟢 [Earnings|w1.63] CrowdStrike vs. Figma: Which Technology Stock Is a Better Buy in 2026?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w2.25] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w2.25] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 1.8 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.5 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.25 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.8 | Benzinga | If You Invested $100 In CrowdStrike Holdings Stock 5 Years A |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.2 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Is Bloom Energy Stock's Drop A Chance To Buy?
- 🔴 [Industry|w1.25] Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next for BE St

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy (BE) Is Up 8.7% After Oracle Reaffirms 2.4 GW A |
| 2026-09-25 | Earnings | 🔴 -1 | 1.95 | Yahoo | Is Bloom Energy Stock's Drop A Chance To Buy? |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy Stock Is Today’s Top S&P 500 Performer. It Has  |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | Powering Community Resilience, Bloom Energy Supports First R |
| 2026-09-25 | Industry | ⚪  0 | 1.5 | Yahoo | BE Stock Eyes Best Month Since April: Oracle Reaffirms 2.4 G |
| 2026-09-24 | Industry | 🔴 -1 | 1.25 | Yahoo | Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next |
| 2026-09-24 | Rumor | ⚪  0 | 0.75 | Yahoo | This $267 Stock Could Be Your Ticket to Millionaire Status |

---

## ⚪ Watch / Neutral (19)

### NYSE:SPNT
- Score: 59/100 | raw: 2.25 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 58/100 | raw: 1.92 | News: 7 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 57/100 | raw: 1.7 | News: 5 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 56/100 | raw: 1.5 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 55/100 | raw: 1.25 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 54/100 | raw: 1.05 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 54/100 | raw: 1.05 | News: 3 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLTR
- Score: 53/100 | raw: 0.93 | News: 9 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 51/100 | raw: 0.27 | News: 5 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 5 dropped | No relevant news in window

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

### NASDAQ:QCOM
- Score: 50/100 | raw: 0 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### NYSE:LTC
- Score: 48/100 | raw: -0.46 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-27T12:32:15.230Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*