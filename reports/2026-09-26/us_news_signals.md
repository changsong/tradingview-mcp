---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_4fd608a3b9a611f1a526525400cd780f
    ReservedCode1: FRZm1fQ6lmncK8KbWReoCjJYWno8sedqKekT2lyz+LMacUdKwzE3YGbLDxMPTXCzmT5bEl9slYia5bWa2PSt/jPX6owE8fJ/1JcHDoTGGdWsWbnt7lEk4MQRXnsf08vX/MwApBUgGNDsT7N8MXltKTxb9NkVQkt7CPSYNvkaXofglL8YZWXdQXKrYVA=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_4fd608a3b9a611f1a526525400cd780f
    ReservedCode2: FRZm1fQ6lmncK8KbWReoCjJYWno8sedqKekT2lyz+LMacUdKwzE3YGbLDxMPTXCzmT5bEl9slYia5bWa2PSt/jPX6owE8fJ/1JcHDoTGGdWsWbnt7lEk4MQRXnsf08vX/MwApBUgGNDsT7N8MXltKTxb9NkVQkt7CPSYNvkaXofglL8YZWXdQXKrYVA=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-26  |  **News Window:** 2026-09-19 ~ 2026-09-26（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (46)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:GRAL** | **86** | 8.61 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/14 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMD** | **84** | 16.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/18 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:NBIS** | **82** | 7.77 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 4 | **NYSE:P** | **81** | 20.04 | 🟢 Long (Strong) | Momentum / Hold | High | 17/13 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:ANET** | **78** | 9.04 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/15 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:ETN** | **78** | 9.87 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:LITE** | **77** | 8.95 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:SMCI** | **77** | 10.29 | 🟢 Long (Strong) | Momentum / Hold | High | 12/18 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ARM** | **77** | 16.49 | 🟢 Long (Strong) | Momentum / Hold | High | 19/11 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:DELL** | **76** | 15.37 | 🟢 Long (Strong) | Momentum / Hold | High | 16/14 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:APH** | **76** | 7.61 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/2 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:SNDK** | **74** | 5.79 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:WT** | **74** | 5.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/2 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:ASX** | **73** | 5.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 15 | **NASDAQ:AEHR** | **73** | 5.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | - |
| 16 | **NYSE:TSM** | **69** | 5.64 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | Sentiment Strengthening UP (trend) |
| 17 | **NASDAQ:TEM** | **67** | 4.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/5 | - |
| 18 | **NASDAQ:INTC** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/27 | - |
| 19 | **NASDAQ:HOOD** | **66** | 8.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | - |
| 20 | **NYSE:DT** | **64** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/7 | - |
| 21 | **NASDAQ:MRVL** | **62** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 22 | **NYSE:SPNT** | **61** | 2.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/1 | - |
| 23 | **NYSE:HPE** | **60** | 4.36 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 13/17 | Sentiment Divergence (black swan masked by noise) |
| 24 | **NASDAQ:PANW** | **59** | 4.95 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/16 | Sentiment Divergence (black swan masked by noise) |
| 25 | **NYSE:KEYS** | **59** | 2.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/8 | - |
| 26 | **NYSE:GRMN** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/3 | - |
| 27 | **NASDAQ:AAPL** | **58** | 4.89 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/15 | - |
| 28 | **NASDAQ:IREN** | **58** | 5.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 23/7 | - |
| 29 | **NYSE:JOE** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 30 | **NYSE:HGTY** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 31 | **NASDAQ:STX** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/25 | - |
| 32 | **NASDAQ:CRWD** | **54** | 2.59 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 17/13 | Bullish-to-Bearish Reversal (reversal) |
| 33 | **NYSE:DOCN** | **51** | 0.31 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/4 | - |
| 34 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/6 | - |
| 35 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:MU** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 40 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:QCOM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/24 | - |
| 42 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 43 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 44 | **NASDAQ:PLTR** | **49** | -0.39 | ⚪ No Trade (Neutral) | Watch | Low | 10/20 | - |
| 45 | **NYSE:LTC** | **48** | -0.58 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 46 | **NYSE:BE** | **36** | -3.84 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 8/22 | - |

---

## 🟢 Strong Long (5)

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.77 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Why Is Nebius Stock Surging on Friday?
- 🟢 [Analyst Action|w2.16] Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket
- 🟢 [Earnings|w1.95] Nebius gets BofA boost as AI infrastructure revenue outlook climbs

**Bearish Factors:**
- 🔴 [Industry|w1.8] What Does Nebius Group (NBIS) Stock Face After Michael Burry Expanded 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Why Is Nebius Stock Surging on Friday? |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Nebius Group (NBIS) to Hike Prices Next Week, Shares Rocket |
| 2026-09-25 | Industry | 🔴 -1 | 1.8 | Yahoo | What Does Nebius Group (NBIS) Stock Face After Michael Burry |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Could Palantir (PLTR)’s Partnership with Nebius Group (NBIS) |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | Nebius gets BofA boost as AI infrastructure revenue outlook  |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | BNP Paribas Upgrades Nebius Group to Outperform, Raises Pric |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 20.04 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Everpure Stock Just Hit a New All-Time High. What Comes Next.
- 🟢 [Earnings|w2.34] US Stock Market Today: S&P 500 Futures Slip As Hot Growth Keeps Rate F
- 🟢 [Analyst Action|w2.16] Barclays Maintains Equal-Weight on Everpure, Raises Price Target to $1

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Crude Oil Rises Over 4%; Darden Earnings Miss Views

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Everpure Stock Just Hit a New All-Time High. What Comes Next |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Barclays Maintains Equal-Weight on Everpure, Raises Price Ta |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | US Stock Market Today: S&P 500 Futures Slip As Hot Growth Ke |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | What Are Everpure Stock Bulls Not Worried About? |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Benzinga | Meta, Everpure, Akamai Technologies, Apimeds Pharmaceuticals |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | Should Investors Chase the AI-Fueled Surge in Everpure (P) S |
| 2026-09-24 | Earnings | ⚪  0 | 1.95 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | Everpure Stock Leads S&P 500 Gainers After Rosy Outlook on A |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 10.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a Reasonable 
- 🟢 [Earnings|w1.95] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment
- 🟢 [Industry|w1.8] What's Going On With Super Micro Computer Stock Friday?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | 🟢 +1 | 2.76 | ChartMill | Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a R |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Benzinga | What's Going On With Super Micro Computer Stock Friday? |
| 2026-09-25 | Earnings | 🔴 -1 | 2.34 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Benzinga | What's Going On With Super Micro Computer Stock Thursday? |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |
| 2026-09-23 | Earnings | 🟢 +1 | 1.63 | Yahoo | SMCI vs. AVT: Which AI Infrastructure Stock is a Better Buy? |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | Supermicro Now Shipping NVIDIA Vera Rubin NVL72 Racks |
| 2026-09-23 | Industry | 🟢 +1 | 1.25 | Benzinga | What's Going On With Super Micro Computer Stock Wednesday? |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 16.49 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ARM vs. Intel: What Revenue Growth Trends Reveal About These Artificia
- 🟢 [Earnings|w2.34] Arm Stocks Surge as Muse Makes CPUs Matter Again
- 🟢 [Industry|w1.8] Arm Climbs 5% as Buyers Return After Sharp Pullback; Qualcomm Nudges H

**Bearish Factors:**
- 🔴 [Industry|w1.8] Don't Buy Arm Holdings This Expensively

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | ARM vs. Intel: What Revenue Growth Trends Reveal About These |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arm Stocks Surge as Muse Makes CPUs Matter Again |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Arm Climbs 5% as Buyers Return After Sharp Pullback; Qualcom |
| 2026-09-25 | Industry | 🔴 -1 | 1.8 | SeekingAlp | Don't Buy Arm Holdings This Expensively |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Benzinga | Arm Stock Rises on Possible Continued Momentum From Meta's M |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Arm Holdings (ARM) Stock Gains On AI CPU Demand Surge |
| 2026-09-24 | Earnings | ⚪  0 | 1.95 | Yahoo | Arm Drops 3.3% as More AI Cores Test Royalty Economics |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | Critical Role of ARM Holdings (ARM) In Powering the Next Wav |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 15.37 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Earnings|w1.95] Is Dell Technologies (DELL) Stock a Buy After its $5 Billion AI-Fueled
- 🟢 [Earnings|w1.95] HPE vs. DELL: Which AI Infrastructure Stock is a Safer Bet?

**Bearish Factors:**
- 🔴 [Industry|w1.5] Dell Top Executives Sell $32 Million in Stock as AI Rally Accelerates

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Stock Jumps 3.5% as Gemini Enters the XPS Franchise |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell Rises 7% as Morgan Stanley Lifts Odds on $756 Bull Case |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell Stock Jumps as Morgan Stanley Raises Odds of $756 Bull  |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Wall Street Bulls Look Optimistic About Dell Technologies (D |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Trade Picks Up Again as Investors Pile Back Into Stocks |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Here's How Much a $1000 Investment in Dell Technologies Made |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Benzinga | Why Is Dell Stock Surging on Friday? |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell vs. HPE: Which AI Server Stock Is the Better Buy? |

---

## 🟢 Mid Long (11)

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.79 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sandisk: $94B In Contracts Reinforces Outlook
- 🟢 [Earnings|w1.95] Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy?
- 🟢 [Industry|w1.5] Sandisk Drops 23% From 52-Week High: Buy, Sell or Hold the Stock?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk: $94B In Contracts Reinforces Outlook |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy? |
| 2026-09-24 | Earnings | ⚪  0 | 1.95 | Yahoo | Sandisk (SNDK) Stock May Still Look Reasonable After AI Slow |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Sandisk Drops 23% From 52-Week High: Buy, Sell or Hold the S |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 2 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Should You Buy WisdomTree (WT) Stock After Its Latest Crypto Move?
- 🟢 [Analyst Action|w2.16] Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises Price Targ
- 🟢 [Earnings|w1.17] WisdomTree (NYSE:WT) Passes Minervini Trend Template and High Growth M

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Should You Buy WisdomTree (WT) Stock After Its Latest Crypto |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises  |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | WisdomTree Leaders Recognized on INvolve’s 2026 ‘Heroes Role |
| 2026-09-21 | Earnings | 🟢 +1 | 1.17 | ChartMill | WisdomTree (NYSE:WT) Passes Minervini Trend Template and Hig |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ASE Technology: AI Demand Is Driving A New Growth Phase
- 🟢 [M&A|w2.1] Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technology Holdin
- 🟢 [Industry|w1.05] Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI Demand?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | ASE Technology: AI Demand Is Driving A New Growth Phase |
| 2026-09-24 | Rumor | ⚪  0 | 0.9 | Yahoo | ASE Technology Hldg (ASX) is on the Move, Here's Why the Tre |
| 2026-09-24 | M&A | 🟢 +1 | 2.1 | Benzinga | Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technol |
| 2026-09-22 | Industry | 🟢 +1 | 1.05 | Yahoo | Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI De |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 Report Is
- 🟢 [Industry|w1.5] Aehr Test Systems: Strong Growth Potential, But The Valuation Demands 
- 🟢 [Industry|w1.25] Aehr Test Systems: A Real Tension Between AI-Related Growth And Valuat

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Aehr Test Systems: Strong Growth Potential, But The Valuatio |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 |
| 2026-09-23 | Industry | 🟢 +1 | 1.25 | SeekingAlp | Aehr Test Systems: A Real Tension Between AI-Related Growth  |
| 2026-09-21 | Industry | 🟢 +1 | 0.9 | Yahoo | AEHR at 18.59X Sales: Market Loves Its AI Story, But is Love |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.64 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Looks Underval
- 🟢 [Industry|w1.8] 4 Top-Ranked Chip Stocks to Buy for Better Returns in October
- 🟢 [Analyst Action|w1.8] Taiwan Semiconductor (TSM): The Key Enabler of AI Chips and a Durable 

**Bearish Factors:**
- 🔴 [Industry|w1.8] Why Is Taiwan Semiconductor Manufacturing (TSM) Raising Wafer Prices B

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | ⚪  0 | 2.13 | SeekingAlp | TSMC: The Crown Jewel In The World Of Silicon Is Trading At  |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | 4 Top-Ranked Chip Stocks to Buy for Better Returns in Octobe |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | SeekingAlp | TSMC Offers AI Upside No Matter Who Wins The Race |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Taiwan Semiconductor: AI CapEx Keeps Climbing, And TSMC Look |
| 2026-09-25 | Industry | 🔴 -1 | 1.8 | Yahoo | Why Is Taiwan Semiconductor Manufacturing (TSM) Raising Wafe |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Is Taiwan Semiconductor (TSM) Stock a Better Bet than ASML H |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Yahoo | TSMC (TSM) Advances While Market Declines: Some Information  |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | Taiwan Semiconductor (TSM): The Key Enabler of AI Chips and  |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 5 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Buy 3 AI-Powered Medical Stocks to Strengthen Your Portfolio in Q4
- 🟢 [Earnings|w1.17] Tempus AI (TEM) Is Building a Heart Failure Agent That Never Sleeps
- 🟢 [Analyst Action|w1.08] This Digital Realty Trust Analyst Begins Coverage On A Bullish Note; H

**Bearish Factors:**
- 🔴 [Industry|w1.05] Tempus AI: High Risk, But With A Great Cause
- 🔴 [Industry|w0.75] Tempus AI (TEM), What Is Behind The Latest Buzz?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Buy 3 AI-Powered Medical Stocks to Strengthen Your Portfolio |
| 2026-09-22 | Industry | 🟢 +1 | 1.05 | Yahoo | Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data |
| 2026-09-22 | Industry | 🔴 -1 | 1.05 | SeekingAlp | Tempus AI: High Risk, But With A Great Cause |
| 2026-09-22 | Industry | 🟢 +1 | 1.05 | Yahoo | Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expans |
| 2026-09-21 | Industry | ⚪  0 | 0.9 | Yahoo | Tempus and Recursion Extend Existing Data License Agreement  |
| 2026-09-21 | Industry | ⚪  0 | 0.9 | Benzinga | Tempus AI Extends Recursion Data Deal Through 2029, Replacin |
| 2026-09-21 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | This Digital Realty Trust Analyst Begins Coverage On A Bulli |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.08 | Benzinga | Goldman Sachs Initiates Coverage On Tempus AI with Neutral R |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 27 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] What Is The Case For Waiting On Intel Stock?
- 🟢 [Industry|w1.8] Is Now the Time to Bet on Intel’s (INTC) Server CPU Comeback and AI Am

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Is Now the Time to Bet on Intel’s (INTC) Server CPU Comeback |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | What Is Intel (INTC) Doing In Edge AI And Brain Inspired Com |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | What Is The Case For Waiting On Intel Stock? |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 8.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Well
- 🟢 [Earnings|w1.95] Webull Drops 6% as Selling Outlasts Its Insider-Sale Headlines; Robinh
- 🟢 [Industry|w1.8] Robinhood and Coinbase Are Changing How Investors Buy IPO Stocks

**Bearish Factors:**
- 🔴 [Industry|w2.13] Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 Invested at

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | ⚪  0 | 2.76 | Yahoo | Standard Chartered Believes Arbitrum Is “Hugely Undervalued” |
| 2026-09-26 | Industry | 🔴 -1 | 2.13 | Yahoo | Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 I |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Prediction Markets Just Got Another Legal Setback. Robinhood |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood and Coinbase Are Changing How Investors Buy IPO St |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | HOOD at the 5-Year Mark: Diversification to Fuel the Next Gr |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | DraftKings Dips as Adjusted Data Narrows Kalshi’s 76% Predic |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Robinhood's Fastest-Growing Business Isn't Trading Stocks |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Wel |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 7 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.8] Oppenheimer Maintains Outperform on Dynatrace, Raises Price Target to 
- 🟢 [Industry|w1.5] Dynatrace AI Positioning, Sales Execution Seen Supporting Growth, Oppe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Dynatrace (DT) Stock Slides as Market Rises: Facts to Know B |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Dynatrace AI Positioning, Sales Execution Seen Supporting Gr |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Oppenheimer Maintains Outperform on Dynatrace, Raises Price  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Marvell Technology, Inc. Declares Quarterly Dividend Payment
- 🟢 [Industry|w1.8] How Much Track Is Left For MRVL Stock?
- 🟢 [Industry|w1.5] Data Centers Will Continue to Drive Robust Growth for Marvell Stock

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Better Risk-R

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | How Much Track Is Left For MRVL Stock? |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Marvell Technology, Inc. Declares Quarterly Dividend Payment |
| 2026-09-25 | Rumor | ⚪  0 | 1.08 | Yahoo | Marvell (MRVL) Stock May Be Fully Priced Following Fresh AI  |
| 2026-09-25 | Earnings | 🔴 -1 | 2.34 | Yahoo | Broadcom vs. Marvell: Which Custom AI Chip Stock Has the Bet |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Yahoo | Options Say Marvell Stock Could Halve Or Nearly Double In A  |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Data Centers Will Continue to Drive Robust Growth for Marvel |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Benzinga | What's Going On With Marvell Technology Stock Thursday? |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | Marvell Stock Ran, But Did It Tell You When? |

---

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 1 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] SiriusPoint to Deliver Further Book Value Growth, Buybacks, RBC Capita
- 🟢 [Analyst Action|w1.26] RBC Capital Initiates Coverage On SiriusPoint with Outperform Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 1.36 | Yahoo | SiriusPoint to Deliver Further Book Value Growth, Buybacks,  |
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | RBC Capital Initiates Coverage On SiriusPoint with Outperfor |

---

## ⚠️ Overheated (6)

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.61 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] MRNA On Track To Be September's No. 2 S&P 500 Stock — But These 5 Smal
- 🟢 [Analyst Action|w2.16] Mizuho Maintains Neutral on GRAIL, Raises Price Target to $100
- 🟢 [Earnings|w1.95] GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Mizuho Maintains Neutral on GRAIL, Raises Price Target to $1 |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | MRNA On Track To Be September's No. 2 S&P 500 Stock — But Th |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued? |
| 2026-09-22 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Baird Maintains Outperform on GRAIL, Raises Price Target to  |
| 2026-09-22 | Industry | ⚪  0 | 1.05 | Yahoo | GRAIL Stock Jumped 34% Yesterday. The FDA Just Told Its Inve |
| 2026-09-21 | Industry | 🟢 +1 | 0.9 | Yahoo | GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Li |
| 2026-09-21 | Industry | ⚪  0 | 0.9 | Benzinga | 12 Health Care Stocks Moving In Monday's Intraday Session |
| 2026-09-21 | Industry | ⚪  0 | 0.9 | Yahoo | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 16.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] AMD, NVIDIA and Intel Forecast: Chip Stocks Push Higher
- 🟢 [Earnings|w2.34] AMD Shares Are About to Become Even More Valuable And That Keeps Me Bu
- 🟢 [Earnings|w2.34] Advanced Micro Devices vs. Taiwan Semiconductor Manufacturing: Which T

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Bank of America Just Upped Its Price Target on AMD Stock |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Is AMD Stock Priced Right Against Its Chip Peers? |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | What Musk’s Tesla and SpaceX Stocks Are Doing After That Whi |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | 5-Star Analyst Drops Stunning New Price Target on AMD Stock |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | AMD Stocks Move Higher as $1 Trillion Demands Full Systems |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | BofA raises AMD target to $720, sees server CPU TAM tripling |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | AMD, NVIDIA and Intel Forecast: Chip Stocks Push Higher |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | AMD Shares Are About to Become Even More Valuable And That K |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 9.04 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Arista Networks (ANET) Draws Fresh AI Attention, Is The Stock Still Ch
- 🟢 [Earnings|w2.34] Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnings Multipl
- 🟢 [Industry|w1.5] Is Arista Networks Stock Too Dependent On Demand Holding Up?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arista Networks (ANET) Draws Fresh AI Attention, Is The Stoc |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  Arista Networks  |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Arista Networks, Inc. (ANET) Is a Trending Stock: Facts to K |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnin |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Is Arista Networks Stock Too Dependent On Demand Holding Up? |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | 5 Stocks With High ROE to Consider Amid Market Volatility |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | Madison Mid Cap Fund: Realizing Gains in High-Speed Switch L |
| 2026-09-22 | Earnings | 🟢 +1 | 1.36 | Yahoo | Has Arista Networks Stock Quietly Become A Different Bet? |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 9.87 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.52] Eaton to Buy COL Group in $923 Million Deal to Expand European Footpri
- 🟢 [M&A|w2.52] Eaton signs agreement to acquire COL Group, expanding manufacturing ca
- 🟢 [Analyst Action|w2.16] Wells Fargo Initiates Coverage On Eaton Corp with Overweight Rating, A

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | M&A | 🟢 +1 | 2.52 | Yahoo | Eaton to Buy COL Group in $923 Million Deal to Expand Europe |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Eaton Adds European Power Capacity as Data Center Demand Kee |
| 2026-09-25 | M&A | 🟢 +1 | 2.52 | Yahoo | Eaton signs agreement to acquire COL Group, expanding manufa |
| 2026-09-25 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Wells Fargo Initiates Coverage On Eaton Corp with Overweight |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Is Eaton (ETN) Priced Beyond What Its Cash Flow Can Support? |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Could Eaton Corporation (ETN)’s $242 Million Expansion Power |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Yahoo | 4 Manufacturing Electronics Stocks to Watch on Promising Ind |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | VWDRY or ETN: Which Is the Better Value Stock Right Now? |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 8.95 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [M&A|w2.52] LAZR: The Right Supply Chain, The Wrong Top Two
- 🟢 [Earnings|w1.95] Applied Optoelectronics Rides on AI Boom: Can It Beat LITE and FN?
- 🟢 [Industry|w1.8] LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Thinks There

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Lumentum's $40 EPS Bet Changes Everything |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Th |
| 2026-09-25 | M&A | 🟢 +1 | 2.52 | SeekingAlp | LAZR: The Right Supply Chain, The Wrong Top Two |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | Applied Optoelectronics Rides on AI Boom: Can It Beat LITE a |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Yahoo | Lumentum Shares Are Up After an AI Optical Tech Partnership  |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Benzinga | Lumentum Shares Up Over 2% After Key Trading Signal |
| 2026-09-23 | Earnings | 🟢 +1 | 1.63 | Yahoo | FN Rides on Surging Data Center Demand: Can It Outpace AAOI  |
| 2026-09-23 | Analyst Action | ⚪  0 | 1.5 | Benzinga | Here’s How Much You Would Have Made Owning Lumentum Holdings |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 7.61 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 2 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside Potential
- 🟢 [Analyst Action|w1.8] Bernstein Initiates Coverage of Amphenol at Outperform
- 🟢 [Analyst Action|w1.5] Bernstein Initiates Coverage On Amphenol with Outperform Rating, Annou

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Amphenol Setting Earnings Records, Shares Near All-Time High |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |
| 2026-09-24 | Industry | ⚪  0 | 1.5 | Yahoo | Soaring Defense Spending Means Great News for These 2 Stocks |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.8 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |
| 2026-09-23 | Industry | 🟢 +1 | 1.25 | Yahoo | 2 Stocks That Skirt High Copper Prices for AI Data Centers |
| 2026-09-23 | Industry | ⚪  0 | 1.25 | Benzinga | EXCLUSIVE: Beyond Nvidia: Why Jensen Investment's Allen Bond |
| 2026-09-23 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Bernstein Initiates Coverage On Amphenol with Outperform Rat |
| 2026-09-22 | Industry | ⚪  0 | 1.05 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |

---

## ⚠️ Risk Pattern (3)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 4.36 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Policy|w2.16] Hewlett Packard and Tecnoglass have been highlighted as Zacks Bull and
- 🟢 [Earnings|w1.95] HPE vs. DELL: Which AI Infrastructure Stock is a Safer Bet?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w2.25] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Bull of the Day: Hewlett Packard Enterprise (HPE) |
| 2026-09-25 | Policy | 🟢 +1 | 2.16 | Yahoo | Hewlett Packard and Tecnoglass have been highlighted as Zack |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell vs. HPE: Which AI Server Stock Is the Better Buy? |
| 2026-09-25 | Earnings | 🔴 -1 | 2.34 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Black Swan | 🔴 -1 | 2.25 | Yahoo | Micron, SuperMicro, HPE Face ITC Investigation Over Netlist  |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | HPE vs. DELL: Which AI Infrastructure Stock is a Safer Bet? |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **59** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w2.1] Palo Alto Networks, IBD Stock Of The Day, Is In Buy Area. Acquisitions
- 🟢 [Industry|w1.8] Palo Alto Networks (PANW): Can Platformization Keep Driving Growth?
- 🟢 [Analyst Action|w1.8] Palo Alto Networks (PANW) is Strengthening from Enterprise Security Co

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Palo Alto Is Knocking on $400 as Wall Street Rushes Into Cyber. Buy, H

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | ⚪  0 | 2.13 | Yahoo | Qualys, Okta, Palo Alto Networks, Rapid7, and SentinelOne Sh |
| 2026-09-26 | Industry | ⚪  0 | 2.13 | Yahoo | Palo Alto Networks CEO drops blunt take on AI slowdown calls |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Palo Alto Networks (PANW): Can Platformization Keep Driving  |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks (PANW) Stock Slides as Market Rises: Fact |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Palo Alto Networks Is Turning OpenAI and Anthropic Into a Ne |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Benzinga | AI Slowdown Push 'Unrealistic,' Says Palo Alto Networks CEO, |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike vs. Palo Alto: Which AI Cybersecurity Stock Bett |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Semtech (SMTC) Jumped, But What Is Driving Attention Now? |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 2.59 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Bullish-to-Bearish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.95] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F
- 🟢 [Earnings|w1.95] CrowdStrike vs. Figma: Which Technology Stock Is a Better Buy in 2026?

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w2.7] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w2.7] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 2.13 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike (CRWD) Up 13.9% Since Last Earnings Report: Can  |

---

## 🔴 Avoid / Short (4)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 4.36 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Dell vs. HPE: Which AI Server Stock Is the Better Buy?
- 🟢 [Policy|w2.16] Hewlett Packard and Tecnoglass have been highlighted as Zacks Bull and
- 🟢 [Earnings|w1.95] HPE vs. DELL: Which AI Infrastructure Stock is a Safer Bet?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa
- 🔴 [Black Swan|w2.25] Micron, SuperMicro, HPE Face ITC Investigation Over Netlist Patent Inf

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Bull of the Day: Hewlett Packard Enterprise (HPE) |
| 2026-09-25 | Policy | 🟢 +1 | 2.16 | Yahoo | Hewlett Packard and Tecnoglass have been highlighted as Zack |
| 2026-09-25 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell vs. HPE: Which AI Server Stock Is the Better Buy? |
| 2026-09-25 | Earnings | 🔴 -1 | 2.34 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Black Swan | 🔴 -1 | 2.25 | Yahoo | Micron, SuperMicro, HPE Face ITC Investigation Over Netlist  |
| 2026-09-24 | Earnings | 🟢 +1 | 1.95 | Yahoo | HPE vs. DELL: Which AI Infrastructure Stock is a Safer Bet? |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **59** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w2.1] Palo Alto Networks, IBD Stock Of The Day, Is In Buy Area. Acquisitions
- 🟢 [Industry|w1.8] Palo Alto Networks (PANW): Can Platformization Keep Driving Growth?
- 🟢 [Analyst Action|w1.8] Palo Alto Networks (PANW) is Strengthening from Enterprise Security Co

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Palo Alto Is Knocking on $400 as Wall Street Rushes Into Cyber. Buy, H

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | ⚪  0 | 2.13 | Yahoo | Qualys, Okta, Palo Alto Networks, Rapid7, and SentinelOne Sh |
| 2026-09-26 | Industry | ⚪  0 | 2.13 | Yahoo | Palo Alto Networks CEO drops blunt take on AI slowdown calls |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Palo Alto Networks (PANW): Can Platformization Keep Driving  |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks (PANW) Stock Slides as Market Rises: Fact |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | Palo Alto Networks Is Turning OpenAI and Anthropic Into a Ne |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Benzinga | AI Slowdown Push 'Unrealistic,' Says Palo Alto Networks CEO, |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike vs. Palo Alto: Which AI Cybersecurity Stock Bett |
| 2026-09-24 | Industry | 🟢 +1 | 1.5 | Yahoo | Semtech (SMTC) Jumped, But What Is Driving Attention Now? |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 2.59 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Bullish-to-Bearish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up 875% and 
- 🟢 [Earnings|w1.95] CrowdStrike Stock Is Up 154% in Six Months. Here’s Where It Could Go F
- 🟢 [Earnings|w1.95] CrowdStrike vs. Figma: Which Technology Stock Is a Better Buy in 2026?

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Why Did CrowdStrike Holdings (CRWD) Move Today?
- 🔴 [Black Swan|w2.7] CRWD Stock Slips: US Department Of Justice Reportedly Closes Investiga
- 🔴 [Black Swan|w2.7] CrowdStrike probe closed by US prosecutors without charges

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Industry | 🟢 +1 | 2.13 | Yahoo | Jim Cramer Says Buy 2 Artificial Intelligence (AI) Stocks Up |
| 2026-09-26 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Why Did CrowdStrike Holdings (CRWD) Move Today? |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | S&P 500, Dow, Nasdaq End Week Higher On Chipmaker Strength,  |
| 2026-09-25 | Industry | 🟢 +1 | 1.8 | Yahoo | Here’s How CrowdStrike (CRWD) is Betting on AI Agent Securit |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CRWD Stock Slips: US Department Of Justice Reportedly Closes |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CrowdStrike probe closed by US prosecutors without charges |
| 2026-09-25 | Black Swan | 🔴 -1 | 2.7 | Yahoo | US Justice Department Closes Investigation of CrowdStrike De |
| 2026-09-25 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike (CRWD) Up 13.9% Since Last Earnings Report: Can  |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **36** / 100 |
| Raw Weighted Score | -3.84 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Is Bloom Energy Stock's Drop A Chance To Buy?
- 🔴 [Industry|w1.5] Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next for BE St

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy (BE) Is Up 8.7% After Oracle Reaffirms 2.4 GW A |
| 2026-09-25 | Earnings | 🔴 -1 | 2.34 | Yahoo | Is Bloom Energy Stock's Drop A Chance To Buy? |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy Stock Is Today’s Top S&P 500 Performer. It Has  |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | Powering Community Resilience, Bloom Energy Supports First R |
| 2026-09-25 | Industry | ⚪  0 | 1.8 | Yahoo | BE Stock Eyes Best Month Since April: Oracle Reaffirms 2.4 G |
| 2026-09-24 | Industry | 🔴 -1 | 1.5 | Yahoo | Oracle Just Dealt Bloom Energy a Major Blow. What Comes Next |
| 2026-09-24 | Rumor | ⚪  0 | 0.9 | Yahoo | This $267 Stock Could Be Your Ticket to Millionaire Status |
| 2026-09-24 | Earnings | ⚪  0 | 1.95 | Yahoo | Bloom Energy Corporation (BE): A Critical Player in AI Build |

---

## ⚪ Watch / Neutral (20)

### NYSE:KEYS
- Score: 59/100 | raw: 2.05 | News: 5 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 59/100 | raw: 2.26 | News: 7 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 58/100 | raw: 4.89 | News: 15 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 58/100 | raw: 5.2 | News: 23 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 56/100 | raw: 1.5 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 55/100 | raw: 1.25 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 55/100 | raw: 1.25 | News: 3 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 51/100 | raw: 0.31 | News: 5 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 50/100 | raw: 0 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:QCOM
- Score: 50/100 | raw: 0 | News: 6 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### NASDAQ:PLTR
- Score: 49/100 | raw: -0.39 | News: 10 kept / 20 dropped | No clear directional bias — stay flat

### NYSE:LTC
- Score: 48/100 | raw: -0.58 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-26T12:30:50.788Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
