# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-23  |  **News Window:** 2026-09-16 ~ 2026-09-23（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (55)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:LITE** | **82** | 7.65 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 2 | **NYSE:WPM** | **78** | 6.61 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/6 | Overheated Sentiment (one-sided bullish) |
| 3 | **NASDAQ:MU** | **75** | 6.6 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 4 | **NASDAQ:CRWD** | **74** | 14.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:P** | **74** | 5.67 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/1 | Overheated Sentiment (one-sided bullish) |
| 6 | **NASDAQ:MSFT** | **74** | 6.15 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 7 | **NYSE:BE** | **72** | 7.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/20 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:LLY** | **71** | 5.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/27 | - |
| 9 | **NASDAQ:AMD** | **70** | 10.23 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/17 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:AAPL** | **70** | 10.11 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/17 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:SMCI** | **70** | 7.17 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 11/19 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:SPNT** | **69** | 4.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/2 | - |
| 13 | **NASDAQ:IREN** | **69** | 12.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 23/7 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:GRMN** | **69** | 4.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/4 | - |
| 15 | **NYSE:ANET** | **68** | 4.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/24 | - |
| 16 | **NASDAQ:ARM** | **68** | 10.65 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 16/14 | Sentiment Divergence (black swan masked by noise) |
| 17 | **NASDAQ:PLTR** | **67** | 4.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 18 | **NASDAQ:QCOM** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 19 | **NYSE:DELL** | **66** | 9.09 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/14 | Overheated Sentiment (one-sided bullish) |
| 20 | **NASDAQ:TEM** | **66** | 6.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/10 | - |
| 21 | **NASDAQ:INTC** | **66** | 3.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 22 | **NASDAQ:GRAL** | **65** | 3.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/9 | - |
| 23 | **NASDAQ:SNDK** | **64** | 3.57 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 6/24 | Sentiment Divergence (black swan masked by noise) |
| 24 | **NYSE:DT** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/7 | - |
| 25 | **NYSE:APH** | **63** | 3.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/7 | - |
| 26 | **NYSE:ASX** | **62** | 2.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/5 | - |
| 27 | **NYSE:HPE** | **60** | 2.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 28 | **NYSE:HGTY** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 29 | **NASDAQ:INCY** | **59** | 2.15 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/19 | - |
| 30 | **NYSE:LTC** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NYSE:ETN** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/24 | - |
| 32 | **NYSE:WT** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 33 | **NYSE:NEM** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/13 | - |
| 34 | **NASDAQ:NBIS** | **57** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 35 | **NASDAQ:HOOD** | **55** | 2.49 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/16 | - |
| 36 | **NYSE:JOE** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 37 | **NASDAQ:PANW** | **53** | 1.65 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/17 | - |
| 38 | **NASDAQ:VSAT** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/4 | - |
| 39 | **NASDAQ:AEHR** | **52** | 0.45 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 40 | **NYSE:DOCN** | **52** | 0.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/6 | - |
| 41 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/3 | - |
| 43 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 48 | **NYSE:TSM** | **50** | -0.07 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 5/25 | - |
| 49 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 51 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:MRVL** | **48** | -0.54 | ⚪ No Trade (Neutral) | Watch | Low | 5/25 | - |
| 54 | **NYSE:KEYS** | **48** | -0.37 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 5/11 | - |
| 55 | **NASDAQ:STX** | **44** | -1.5 | ⚪ No Trade (Neutral) | Watch | Low | 5/25 | - |

---

## 🟢 Strong Long (2)

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.65 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Lumentum Shares Rise 12% in a Month: Is There More Upside Ahead?
- 🟢 [Earnings|w1.95] Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentum With a B
- 🟢 [Earnings|w1.95] Lumentum (LITE) Moves 4.2% Higher: Will This Strength Last?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Lumentum Jumped Nearly 10% While Corning Barely Moved. Is th |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Lumentum to Demonstrate DWDM ELSFP at ECOC 2026: What's Ahea |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Lumentum Shares Rise 12% in a Month: Is There More Upside Ah |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | ChartMill | Lumentum Holdings (NASDAQ:LITE) Combines High Growth Momentu |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Is Lumentum (LITE) Quietly Rewiring Its AI Data Center Role  |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Lumentum (LITE) Moves 4.2% Higher: Will This Strength Last? |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.6 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Micron Q4 Preview: Robust Memory Demand Supports A Bullish Outlook
- 🟢 [Industry|w2.13] This AI Memory Stock Is Up More Than 650% in 2026. Micron Investors Sh
- 🟢 [Industry|w2.13] Micron: Signs Of A Rebellion In The Memory Market

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | This AI Memory Stock Is Up More Than 650% in 2026. Micron In |
| 2026-09-23 | Earnings | ⚪  0 | 2.76 | Yahoo | Micron (MU) Stock Looks Reasonable Despite Its Very Large Ru |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | SK Hynix Is Eyeing Intel’s (INTC) Ohio Site. Why Micron (MU) |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Micron: Signs Of A Rebellion In The Memory Market |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Micron vs. SanDisk: Comparing Two Red-Hot AI Memory Stocks |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Micron Q4 Preview: Robust Memory Demand Supports A Bullish O |

---

## 🟢 Mid Long (18)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 14.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Is CrowdStrike Stock A Buy Today As AI Threats Lift Demand?
- 🟢 [Earnings|w2.34] CrowdStrike vs. Palantir Technologies: Which Technology Stock Is a Bet
- 🟢 [Earnings|w2.34] Cybersecurity Rally’s Narrow Leadership Leaves Profitable Value Names 

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Cybersecurity Stocks Extend Gains on AI Safety Warnings: CrowdStrike a
- 🔴 [Industry|w1.8] Strategy, CrowdStrike, MongoDB, ServiceNow, and Okta Shares Are Soarin

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Stock Rallies as AI Security Fears Create a Majo |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Slips as Palo Alto Automates Vulnerability Hunti |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Is CrowdStrike Stock A Buy Today As AI Threats Lift Demand? |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | CrowdStrike vs. Palantir Technologies: Which Technology Stoc |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Investors Heavily Search CrowdStrike (CRWD): Here is What Yo |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | ChartMill | Cybersecurity Rally’s Narrow Leadership Leaves Profitable Va |
| 2026-09-22 | Rumor | ⚪  0 | 1.08 | Yahoo | These are the cybersecurity stocks built for the AI era |
| 2026-09-22 | Industry | 🔴 -1 | 1.8 | Yahoo | Strategy, CrowdStrike, MongoDB, ServiceNow, and Okta Shares  |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 6.15 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] MSFT Ticks Up Overnight: Analyst Upgrades To ‘Buy’ And Sees 15% Upside
- 🟢 [Industry|w1.8] $223 Billion Back To Shareholders: Inside The MSFT Machine
- 🟢 [Industry|w1.8] Nasdaq Jumps To Close At Record As Chipmakers Climb, Oil Prices Cool —

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Market Chatter: Microsoft Plans Larger Copilot Discounts for |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | “The New Clippy”: Benioff Uses Salesforce’s Biggest Product  |
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | MSFT Ticks Up Overnight: Analyst Upgrades To ‘Buy’ And Sees  |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | $223 Billion Back To Shareholders: Inside The MSFT Machine |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Nasdaq Jumps To Close At Record As Chipmakers Climb, Oil Pri |
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Yahoo | What Is Microsoft (MSFT) Facing As Its AI Partner Seeks A $1 |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 7.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] BE vs. BLDP: Which Clean Energy Stock Has Stronger Growth Potential?
- 🟢 [Earnings|w1.95] Why Did Bloom Energy Stock More Than Triple In A Year?
- 🟢 [Industry|w1.5] Bloom Energy (BE) Surges as AI Hyperscalers Adopt Solid Oxide Fuel Cel

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | ⚪  0 | 2.76 | Yahoo | Top 3 Grid Stocks To Watch In September 2026 |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy (BE) Back In Focus Following Index Reshuffle As |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | BE vs. BLDP: Which Clean Energy Stock Has Stronger Growth Po |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Why Bloom Energy (BE) Outpaced the Stock Market Today |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Why Did Bloom Energy Stock More Than Triple In A Year? |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | Bloom Energy (BE) Surges as AI Hyperscalers Adopt Solid Oxid |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | BE Stock Jumps Premarket Ahead Of S&P 500 Inclusion: US Army |
| 2026-09-20 | Industry | ⚪  0 | 1.25 | Yahoo | Bloom Energy (BE) Unveils a New Power Play for the AI Boom |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 27 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] VKTX Stock On Track To Beat LLY, NVO This Month After Obesity Drug Dat
- 🟢 [Earnings|w2.34] Could You Have Seen Merck Stock's Pipeline Run Coming?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | 🟢 +1 | 2.76 | Yahoo | VKTX Stock On Track To Beat LLY, NVO This Month After Obesit |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Should Eli Lilly (LLY) Investors Watch Its $6.5 Billion Hous |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Could You Have Seen Merck Stock's Pipeline Run Coming? |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.11 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Why Is NVIDIA Getting Cheaper While Apple Hits New All-Time Highs
- 🟢 [Earnings|w2.34] Apple Just Misses $5 Trillion Market Cap. The Milestone Is Likely Comi
- 🟢 [Industry|w2.13] Why Did AAPL, OKTA, AMD Stocks Jump To 52-Week Highs Today?

**Bearish Factors:**
- 🔴 [Industry|w1.8] Apple’s New CEO Is Already Being Pressured to Drop the Chinese Chip De

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | 🟢 +1 | 2.76 | Yahoo | Why Is NVIDIA Getting Cheaper While Apple Hits New All-Time  |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AAPL, OKTA, AMD Stocks Jump To 52-Week Highs Today? |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Nasdaq Jumps To Close At Record As Chipmakers Climb, Oil Pri |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Apple Just Misses $5 Trillion Market Cap. The Milestone Is L |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | AI can transform shopping, but human touch wins in-store: Ro |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 12 S&P 500 Stocks Join Trillion-Dollar Club — What Could Go  |
| 2026-09-22 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Meta AI agent triggers heavy selloff in banks, insurers, and |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Apple Takes Aim at Nvidia’s AI Economics: New Macs Have ‘No  |

---

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] SiriusPoint to Deliver Further Book Value Growth, Buybacks, RBC Capita
- 🟢 [Analyst Action|w2.16] RBC Capital Initiates Coverage On SiriusPoint with Outperform Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | SiriusPoint to Deliver Further Book Value Growth, Buybacks,  |
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | RBC Capital Initiates Coverage On SiriusPoint with Outperfor |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 12.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 23 / 7 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Iren (IREN) Stock Looks Stretched With AI Hopes Already Priced In
- 🟢 [Earnings|w2.34] IREN’s Energy Pipeline Optionality is Very Appealing So Should You Buy
- 🟢 [Industry|w1.5] Iris Energy Is Sitting on $7.6 Billion in Cash and Building One of the

**Bearish Factors:**
- 🔴 [Earnings|w2.34] IREN Broadens Its AI Customer Base: Can Diversification Pay Off?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Iren (IREN) Stock Looks Stretched With AI Hopes Already Pric |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | IREN’s Energy Pipeline Optionality is Very Appealing So Shou |
| 2026-09-22 | Earnings | 🔴 -1 | 2.34 | Yahoo | IREN Broadens Its AI Customer Base: Can Diversification Pay  |
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Benzinga | Transcript: IREN Q4 2026 Earnings Conference Call |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | Iris Energy Is Sitting on $7.6 Billion in Cash and Building  |
| 2026-09-21 | Earnings | ⚪  0 | 1.95 | Yahoo | CRWV vs. IREN: Which Neocloud Stock Offers the Stronger Upsi |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | IREN Expands Its 5GW+ Pipeline: Can Execution Match Ambition |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Rothschild & Co Initiates Coverage On IREN with Neutral Rati |

---

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 4 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Garmin (GRMN) Shares Moved, What Is Drawing Fresh Attention?
- 🟢 [Industry|w1.5] Best Health & Fitness Stocks to Buy as Wellness Demand Grows
- 🟢 [Industry|w1.05] Garmin’s (GRMN) New Autopilot Signals Where Growth Is Headed

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Earnings | ⚪  0 | 2.76 | Yahoo | Garmin Ltd. schedules third quarter 2026 earnings call |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Garmin (GRMN) Shares Moved, What Is Drawing Fresh Attention? |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Garmin rolls out new feature updates for select smartwatches |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Bring digital flagging to the race vehicle with Garmin Catal |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Yahoo | Garmin (GRMN) Outperforms Broader Market: What You Need to K |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | Best Health & Fitness Stocks to Buy as Wellness Demand Grows |
| 2026-09-19 | Industry | 🟢 +1 | 1.05 | Yahoo | Garmin’s (GRMN) New Autopilot Signals Where Growth Is Headed |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Has Arista Networks Stock Quietly Become A Different Bet?
- 🟢 [Earnings|w1.17] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Industry|w0.9] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Has Arista Networks Stock Quietly Become A Different Bet? |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Arista Networks (ANET) Surpasses Market Returns: Some Facts  |
| 2026-09-18 | Industry | ⚪  0 | 0.9 | Yahoo | How Much Does Arista Networks Stock Move When The Market Mov |
| 2026-09-18 | Earnings | 🟢 +1 | 1.17 | Yahoo | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 0.9 | ChartMill | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Palantir Technologies (NASDAQ:PLTR): High Growth Momentum Meets Breako
- 🟢 [Industry|w2.13] Palantir Reveals Its AI Sovereignty Strategy And Wall Street Is Starti

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Surf Air Mobility Signs OperatorOS Contract with SkyDance Ai |
| 2026-09-23 | Earnings | ⚪  0 | 2.76 | Yahoo | Surf Air Mobility Appoints Barrett Brown as President of Sur |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | Palantir Reveals Its AI Sovereignty Strategy And Wall Street |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | SeekingAlp | Palantir: The $10 Billion Inflection Is Bigger Than It Looks |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Investors Heavily Search Palantir Technologies Inc. (PLTR):  |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | ChartMill | Palantir Technologies (NASDAQ:PLTR): High Growth Momentum Me |

---

### NASDAQ:QCOM

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Qualcomm: The AI Story Is Far More Limited Than Bulls Want To Believe 
- 🟢 [Industry|w1.8] QCOM Stock in Focus Today: What Investors Need to Know About GOOGL Par

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | QCOM Stock On Track For Best Month Since May: Analysts See A |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Qualcomm Launches Two New Smartphone Chips As AI Push Intens |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Qualcomm CFO on agentic AI and the race to the edge |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Qualcomm: The AI Story Is Far More Limited Than Bulls Want T |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Benzinga | QCOM Stock in Focus Today: What Investors Need to Know About |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 6.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 10 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Tempus AI (TEM) Is Building a Heart Failure Agent That Never Sleeps
- 🟢 [Industry|w1.8] Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data Business 
- 🟢 [Industry|w1.8] Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expansion

**Bearish Factors:**
- 🔴 [Industry|w1.8] Tempus AI: High Risk, But With A Great Cause
- 🔴 [Industry|w1.25] Tempus AI (TEM), What Is Behind The Latest Buzz?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Tempus AI (TEM) Has a $75 Goldman Sachs Target, But Its Data |
| 2026-09-22 | Industry | 🔴 -1 | 1.8 | SeekingAlp | Tempus AI: High Risk, But With A Great Cause |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Tempus AI Sees Pricing, Data Growth Fueling Long-Term Expans |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Tempus and Recursion Extend Existing Data License Agreement  |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Benzinga | Tempus AI Extends Recursion Data Deal Through 2029, Replacin |
| 2026-09-21 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | This Digital Realty Trust Analyst Begins Coverage On A Bulli |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Goldman Sachs Initiates Coverage On Tempus AI with Neutral R |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Tempus AI (TEM) Is Building a Heart Failure Agent That Never |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Intel: The Party Is Only Getting Started
- 🟢 [Industry|w1.8] Intel: The Smart Money Is Piling In

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Intel: The Party Is Only Getting Started |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | SK Hynix Is Eyeing Intel’s (INTC) Ohio Site. Why Micron (MU) |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Intel (INTC) Could Get a Fresh Valuation for Altera. AMD (AM |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Intel (INTC) Stock Moves 1.71%: What You Should Know |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Can Intel's Core Ultra Expansion With Googlebook Benefit the |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Intel: The Smart Money Is Piling In |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 9 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Baird Maintains Outperform on GRAIL, Raises Price Target to $118
- 🟢 [Industry|w1.5] GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Lift Galleri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Baird Maintains Outperform on GRAIL, Raises Price Target to  |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | GRAIL Stock Jumped 34% Yesterday. The FDA Just Told Its Inve |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | GRAL Stock Clocks Best Day In Over 1.5 Years — FDA Papers Li |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Benzinga | 12 Health Care Stocks Moving In Monday's Intraday Session |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |
| 2026-09-18 | Earnings | ⚪  0 | 1.17 | Benzinga | GRAIL Q2 2026 Earnings Call: Complete Transcript |
| 2026-09-17 | Analyst Action | ⚪  0 | 0.9 | Benzinga | RBC Capital Initiates Coverage On GRAIL with Sector Perform  |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 7 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.08] This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For Friday
- 🟢 [Analyst Action|w1.08] Needham Upgrades Dynatrace to Buy, Announces $68 Price Target
- 🟢 [Industry|w0.9] Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Compounding

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 0.9 | ChartMill | Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Com |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Needham Upgrades Dynatrace to Buy, Announces $68 Price Targe |
| 2026-09-17 | Industry | ⚪  0 | 0.75 | Yahoo | Dynatrace (DT) Exceeds Market Returns: Some Facts to Conside |
| 2026-09-17 | Industry | ⚪  0 | 0.75 | Yahoo | FJTSY or DT: Which Is the Better Value Stock Right Now? |
| 2026-09-17 | Industry | ⚪  0 | 0.75 | Yahoo | Dynatrace (DT) Targets Large European Enterprises With New O |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 7 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Wall Street Analysts Believe Amphenol (APH) Could Rally 27.8%: Here's 
- 🟢 [Earnings|w0.97] NVT vs. APH: Which Electrical Infrastructure Stock is a Better Buy?
- 🟢 [Industry|w0.9] Best Momentum Stocks to Buy for September 18th

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 3 Stocks Put Traders Are Targeting Today: EXE, APH, WMB |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | If You Invested $1000 In Amphenol Stock 20 Years Ago, You Wo |
| 2026-09-18 | Industry | ⚪  0 | 0.9 | Yahoo | APH's AI Datacom Strength Grows: Can It Challenge TEL & MRVL |
| 2026-09-18 | Industry | 🟢 +1 | 0.9 | Yahoo | Best Momentum Stocks to Buy for September 18th |
| 2026-09-18 | Earnings | 🟢 +1 | 1.17 | Yahoo | Wall Street Analysts Believe Amphenol (APH) Could Rally 27.8 |
| 2026-09-17 | Earnings | ⚪  0 | 0.97 | Yahoo | Vertiv's Product Revenue Accelerates: Can It Outpace APH & S |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | NVT vs. APH: Which Electrical Infrastructure Stock is a Bett |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 5 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI Demand?
- 🟢 [Earnings|w0.97] ASX Up 230.9% in the Past Year: Should You Capitalize on the Euphoria?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | Is ASE Technology's $10.5B CapEx Plan Key to Capturing AI De |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | ASX Up 230.9% in the Past Year: Should You Capitalize on the |
| 2026-09-17 | Industry | ⚪  0 | 0.75 | Yahoo | Are Computer and Technology Stocks Lagging  Hewlett Packard  |
| 2026-09-17 | Earnings | ⚪  0 | 0.97 | Benzinga | ASE Technology Holding Co Reports Q2 2026 Results: Full Earn |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio
- 🟢 [Industry|w1.8] HPE's Networking Orders Signal Continued Growth: What's Ahead?

**Bearish Factors:**
- 🔴 [Earnings|w1.36] Hewlett Packard Enterprise (HPE) Wins Top Zacks Rank, Is It Still Unde

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | HPE's Networking Orders Signal Continued Growth: What's Ahea |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | QuEra Computing Collaborates with HPE to Bring Fault-Toleran |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $100 Invested In Hewlett Packard 5 Years Ago |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-19 | Earnings | 🔴 -1 | 1.36 | Yahoo | Hewlett Packard Enterprise (HPE) Wins Top Zacks Rank, Is It  |
| 2026-09-18 | Industry | ⚪  0 | 0.9 | Yahoo | Can Hewlett Packard Enterprise Stock Keep Running On Orders  |
| 2026-09-18 | Industry | ⚪  0 | 0.9 | Yahoo | Jim Cramer Says Hewlett Packard Enterprise (HPE) Has the “Ho |

---

## 🟡 Cautious Long (3)

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 1 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.25] Everpure (P) Dropped From Key Small Cap Indices As Fund Exposure Shift
- 🟢 [Earnings|w0.97] Everpure Stock Gains 34% in 6 Months: Here's What You Should Know
- 🟢 [Industry|w0.9] Investing In Everpure: Growth Potential You Can't Ignore

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 1.25 | Yahoo | Everpure (P) Dropped From Key Small Cap Indices As Fund Expo |
| 2026-09-18 | Industry | 🟢 +1 | 0.9 | SeekingAlp | Investing In Everpure: Growth Potential You Can't Ignore |
| 2026-09-17 | Industry | 🟢 +1 | 0.75 | Yahoo | Everpure to Host 2026 Financial Analyst Meeting |
| 2026-09-17 | Analyst Action | 🟢 +1 | 0.9 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-17 | Earnings | ⚪  0 | 0.97 | Yahoo | 3 Reasons P Has Explosive Upside Potential |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | Everpure Stock Gains 34% in 6 Months: Here's What You Should |
| 2026-09-17 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Needham Reiterates Buy on Everpure, Maintains $140 Price Tar |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.23 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Elon Musk Is Going All In on Nvidia, but Are These Two Chip Stocks Bet
- 🟢 [Analyst Action|w2.16] AMD Stock Has Blown Past Nvidia This Year. Is It Still the Better Buy?
- 🟢 [Industry|w2.13] AMD just hit a milestone that reshuffles the AI chip race

**Bearish Factors:**
- 🔴 [Earnings|w2.34] AMD: Likely Dead Money From Here (Rating Downgrade)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Elon Musk Is Going All In on Nvidia, but Are These Two Chip  |
| 2026-09-23 | Rumor | ⚪  0 | 1.27 | Yahoo | Pat Gelsinger Just Backed a $100 Million Challenge to Nvidia |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Intel (INTC) Could Get a Fresh Valuation for Altera. AMD (AM |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | AMD just hit a milestone that reshuffles the AI chip race |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AAPL, OKTA, AMD Stocks Jump To 52-Week Highs Today? |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Advanced Micro Devices (AMD) Stock Moves 1.34%: What You Sho |
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | AMD Stock Has Blown Past Nvidia This Year. Is It Still the B |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 3 Trending AI Stocks to Watch: ARM, AMD, and CRWV |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 9.09 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Can Dell's Margins Catch Up With Its Stock?
- 🟢 [Earnings|w1.95] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio
- 🟢 [Analyst Action|w1.8] Morgan Stanley Maintains Equal-Weight on Dell Technologies, Raises Pri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Falls 2.5% as $1,199 Googlebook Tests PC Margin |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Can Dell's Margins Catch Up With Its Stock? |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  BE Semiconductor |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Is Dell (DELL) Using the XPS Googlebook to Deepen Its AI Eco |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Dell Joined the S&P 100 This Week. Its Largest Outside Holde |
| 2026-09-21 | Earnings | ⚪  0 | 1.95 | Yahoo | Spotting Winners: Dell (NYSE:DELL) And Hardware & Infrastruc |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Dell and AppLovin Look Vulnerable. How to Play the Charts. |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |

---

## ⚠️ Overheated (1)

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.61 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 6 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Wheaton Precious Metals (NYSE:WPM) Aligns With Minervini Trend Templat
- 🟢 [Earnings|w1.63] Gold Has Gone Sideways, But These 3 Stocks Haven’t
- 🟢 [Earnings|w1.17] Wheaton Precious Metals: The Premium May Have Outrun The Fundamentals

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Aligns With Minervini Tre |
| 2026-09-20 | Earnings | 🟢 +1 | 1.63 | Yahoo | Gold Has Gone Sideways, But These 3 Stocks Haven’t |
| 2026-09-19 | Earnings | ⚪  0 | 1.36 | Yahoo | Wheaton’s (WPM) Profits Nearly Doubled While Its Cash Pile S |
| 2026-09-18 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Wheaton Precious Metals: The Premium May Have Outrun The Fun |
| 2026-09-17 | Rumor | 🟢 +1 | 0.5 | Yahoo | Wheaton Precious Metals (TSX:WPM) Stock May Be Overvalued As |
| 2026-09-17 | Industry | ⚪  0 | 0.75 | SeekingAlp | Wheaton Precious Metals Corp. (WPM:CA) Analyst/Investor Day  |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | Wheaton Precious Metals Targets 50% Production Growth by 203 |

---

## ⚠️ Risk Pattern (6)

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 1 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.25] Everpure (P) Dropped From Key Small Cap Indices As Fund Exposure Shift
- 🟢 [Earnings|w0.97] Everpure Stock Gains 34% in 6 Months: Here's What You Should Know
- 🟢 [Industry|w0.9] Investing In Everpure: Growth Potential You Can't Ignore

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 1.25 | Yahoo | Everpure (P) Dropped From Key Small Cap Indices As Fund Expo |
| 2026-09-18 | Industry | 🟢 +1 | 0.9 | SeekingAlp | Investing In Everpure: Growth Potential You Can't Ignore |
| 2026-09-17 | Industry | 🟢 +1 | 0.75 | Yahoo | Everpure to Host 2026 Financial Analyst Meeting |
| 2026-09-17 | Analyst Action | 🟢 +1 | 0.9 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-17 | Earnings | ⚪  0 | 0.97 | Yahoo | 3 Reasons P Has Explosive Upside Potential |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | Everpure Stock Gains 34% in 6 Months: Here's What You Should |
| 2026-09-17 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Needham Reiterates Buy on Everpure, Maintains $140 Price Tar |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.23 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Elon Musk Is Going All In on Nvidia, but Are These Two Chip Stocks Bet
- 🟢 [Analyst Action|w2.16] AMD Stock Has Blown Past Nvidia This Year. Is It Still the Better Buy?
- 🟢 [Industry|w2.13] AMD just hit a milestone that reshuffles the AI chip race

**Bearish Factors:**
- 🔴 [Earnings|w2.34] AMD: Likely Dead Money From Here (Rating Downgrade)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Elon Musk Is Going All In on Nvidia, but Are These Two Chip  |
| 2026-09-23 | Rumor | ⚪  0 | 1.27 | Yahoo | Pat Gelsinger Just Backed a $100 Million Challenge to Nvidia |
| 2026-09-23 | Industry | ⚪  0 | 2.13 | Yahoo | Intel (INTC) Could Get a Fresh Valuation for Altera. AMD (AM |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | AMD just hit a milestone that reshuffles the AI chip race |
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did AAPL, OKTA, AMD Stocks Jump To 52-Week Highs Today? |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Advanced Micro Devices (AMD) Stock Moves 1.34%: What You Sho |
| 2026-09-22 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | AMD Stock Has Blown Past Nvidia This Year. Is It Still the B |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 3 Trending AI Stocks to Watch: ARM, AMD, and CRWV |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 7.17 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Super Micro Computer (SMCI) Is Up 12.1% After Record AI Backlog Sparks
- 🟢 [Earnings|w1.95] Can SMCI's Record Backlog Sustain Revenue Momentum in FY27?
- 🟢 [Earnings|w1.95] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Computer (SMCI) Stock Moves 1.07%: What You Shou |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Super Micro Computer, Inc. (SMCI) Is a Trending Stock: Facts |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $100 Invested In Super Micro Computer 5 Year |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Benzinga | Super Micro Says AI Opportunity Could Reach $4 Trillion: ‘Th |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 10.65 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Arm Just Got a Major Vote of Confidence From Its CEO
- 🟢 [Earnings|w2.34] Arm Holdings Rallies, But Don't Fall For The Hype
- 🟢 [Earnings|w1.95] Arm Holdings (ARM) Soars 17% on Ambitious $2B Revenue Goal; Hedge Fund

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Arm Stock: Too Good to Sell, Too Expensive to Buy
- 🔴 [Earnings|w2.34] ARM Stock Jumped 17% Yesterday After Its CEO Said Demand Is Off the Ch
- 🔴 [Black Swan|w2.25] Arm’s Shift From Royalties to Silicon Manufacturing Could Reshape Chip

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 3 Trending AI Stocks to Watch: ARM, AMD, and CRWV |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Arm Gains 1.5% as Agentic AI Multiplies CPU Cores |
| 2026-09-22 | Earnings | 🔴 -1 | 2.34 | Yahoo | Arm Stock: Too Good to Sell, Too Expensive to Buy |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | SeekingAlp | Arm Holdings: The Narrative Can't Justify The Current Share  |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arm Just Got a Major Vote of Confidence From Its CEO |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Arm Holdings Rallies, But Don't Fall For The Hype |
| 2026-09-22 | Earnings | 🔴 -1 | 2.34 | Yahoo | ARM Stock Jumped 17% Yesterday After Its CEO Said Demand Is  |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | ARM, Intel, AMD Surge As Meta’s Muse AI Fuels Fresh Chip Dem |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 9.09 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Can Dell's Margins Catch Up With Its Stock?
- 🟢 [Earnings|w1.95] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio
- 🟢 [Analyst Action|w1.8] Morgan Stanley Maintains Equal-Weight on Dell Technologies, Raises Pri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Falls 2.5% as $1,199 Googlebook Tests PC Margin |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Can Dell's Margins Catch Up With Its Stock? |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  BE Semiconductor |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Is Dell (DELL) Using the XPS Googlebook to Deepen Its AI Eco |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Dell Joined the S&P 100 This Week. Its Largest Outside Holde |
| 2026-09-21 | Earnings | ⚪  0 | 1.95 | Yahoo | Spotting Winners: Dell (NYSE:DELL) And Hardware & Infrastruc |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Dell and AppLovin Look Vulnerable. How to Play the Charts. |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sandisk: You Can Pace The Frontier, Not Its Memory Needs
- 🟢 [Industry|w2.13] This AI Memory Stock Is Up More Than 650% in 2026. Micron Investors Sh
- 🟢 [Industry|w1.8] SanDisk Just Scored a New 'Buy' Rating. Here's Why.

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] What Are You Really Paying For SanDisk's AI Flash Boom?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | This AI Memory Stock Is Up More Than 650% in 2026. Micron In |
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Yahoo | Sandisk (SNDK) Has Signed Away Two Thirds of Next Year’s Out |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Micron vs. SanDisk: Comparing Two Red-Hot AI Memory Stocks |
| 2026-09-22 | Black Swan | 🔴 -1 | 2.7 | Yahoo | What Are You Really Paying For SanDisk's AI Flash Boom? |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | SanDisk Just Scored a New 'Buy' Rating. Here's Why. |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk: You Can Pace The Frontier, Not Its Memory Needs |

---

## 🔴 Avoid / Short (5)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 7.17 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Super Micro Computer (SMCI) Is Up 12.1% After Record AI Backlog Sparks
- 🟢 [Earnings|w1.95] Can SMCI's Record Backlog Sustain Revenue Momentum in FY27?
- 🟢 [Earnings|w1.95] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Computer (SMCI) Stock Moves 1.07%: What You Shou |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Super Micro Computer (SMCI) Is Up 12.1% After Record AI Back |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can SMCI's Record Backlog Sustain Revenue Momentum in FY27? |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Yahoo | DELL Rides on Growing AI Clientele: Can the Stock Outpace SM |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Yahoo | Super Micro Computer, Inc. (SMCI) Is a Trending Stock: Facts |
| 2026-09-21 | Earnings | 🟢 +1 | 1.95 | Yahoo | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $100 Invested In Super Micro Computer 5 Year |
| 2026-09-21 | Industry | ⚪  0 | 1.5 | Benzinga | Super Micro Says AI Opportunity Could Reach $4 Trillion: ‘Th |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 10.65 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Arm Just Got a Major Vote of Confidence From Its CEO
- 🟢 [Earnings|w2.34] Arm Holdings Rallies, But Don't Fall For The Hype
- 🟢 [Earnings|w1.95] Arm Holdings (ARM) Soars 17% on Ambitious $2B Revenue Goal; Hedge Fund

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Arm Stock: Too Good to Sell, Too Expensive to Buy
- 🔴 [Earnings|w2.34] ARM Stock Jumped 17% Yesterday After Its CEO Said Demand Is Off the Ch
- 🔴 [Black Swan|w2.25] Arm’s Shift From Royalties to Silicon Manufacturing Could Reshape Chip

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | 3 Trending AI Stocks to Watch: ARM, AMD, and CRWV |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Arm Gains 1.5% as Agentic AI Multiplies CPU Cores |
| 2026-09-22 | Earnings | 🔴 -1 | 2.34 | Yahoo | Arm Stock: Too Good to Sell, Too Expensive to Buy |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | SeekingAlp | Arm Holdings: The Narrative Can't Justify The Current Share  |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arm Just Got a Major Vote of Confidence From Its CEO |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Arm Holdings Rallies, But Don't Fall For The Hype |
| 2026-09-22 | Earnings | 🔴 -1 | 2.34 | Yahoo | ARM Stock Jumped 17% Yesterday After Its CEO Said Demand Is  |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | ARM, Intel, AMD Surge As Meta’s Muse AI Fuels Fresh Chip Dem |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sandisk: You Can Pace The Frontier, Not Its Memory Needs
- 🟢 [Industry|w2.13] This AI Memory Stock Is Up More Than 650% in 2026. Micron Investors Sh
- 🟢 [Industry|w1.8] SanDisk Just Scored a New 'Buy' Rating. Here's Why.

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] What Are You Really Paying For SanDisk's AI Flash Boom?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-23 | Industry | 🟢 +1 | 2.13 | Yahoo | This AI Memory Stock Is Up More Than 650% in 2026. Micron In |
| 2026-09-22 | Earnings | ⚪  0 | 2.34 | Yahoo | Sandisk (SNDK) Has Signed Away Two Thirds of Next Year’s Out |
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Micron vs. SanDisk: Comparing Two Red-Hot AI Memory Stocks |
| 2026-09-22 | Black Swan | 🔴 -1 | 2.7 | Yahoo | What Are You Really Paying For SanDisk's AI Flash Boom? |
| 2026-09-22 | Industry | 🟢 +1 | 1.8 | Yahoo | SanDisk Just Scored a New 'Buy' Rating. Here's Why. |
| 2026-09-22 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk: You Can Pace The Frontier, Not Its Memory Needs |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **50** / 100 |
| Raw Weighted Score | -0.07 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] What's Going On With Taiwan Semiconductor Stock Monday?

**Bearish Factors:**
- 🔴 [Black Swan|w1.57] Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets a Breakout

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-22 | Industry | ⚪  0 | 1.8 | Yahoo | Here is What to Know Beyond Why Taiwan Semiconductor Manufac |
| 2026-09-21 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $100 Invested In Taiwan Semiconductor 20 Yea |
| 2026-09-21 | Industry | 🟢 +1 | 1.5 | Benzinga | What's Going On With Taiwan Semiconductor Stock Monday? |
| 2026-09-20 | Industry | ⚪  0 | 1.25 | Yahoo | ASML (ASML) and Chip Giants like TSMC Plot a Bigger Canvas f |
| 2026-09-19 | Black Swan | 🔴 -1 | 1.57 | ChartMill | Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets  |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **48** / 100 |
| Raw Weighted Score | -0.37 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 5 / 11 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Keysight Technologies (NYSE:KEYS) Meets Minervini Trend Template with 
- 🟢 [Earnings|w0.97] Does Keysight (KEYS) Have the Potential to Rally 29.93% as Wall Street

**Bearish Factors:**
- 🔴 [Black Swan|w1.57] Keysight Technologies Sees AI Data-Center Boom, Targets 6G and Defense
- 🔴 [Black Swan|w1.13] The Bull Case For Keysight Technologies (KEYS) Could Change Following 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Black Swan | 🔴 -1 | 1.57 | Yahoo | Keysight Technologies Sees AI Data-Center Boom, Targets 6G a |
| 2026-09-19 | Earnings | 🟢 +1 | 1.36 | ChartMill | Keysight Technologies (NYSE:KEYS) Meets Minervini Trend Temp |
| 2026-09-17 | Black Swan | 🔴 -1 | 1.13 | Yahoo | The Bull Case For Keysight Technologies (KEYS) Could Change  |
| 2026-09-17 | Earnings | ⚪  0 | 0.97 | Yahoo | Keysight (KEYS) Up 0.8% Since Last Earnings Report: Can It C |
| 2026-09-17 | Earnings | 🟢 +1 | 0.97 | Yahoo | Does Keysight (KEYS) Have the Potential to Rally 29.93% as W |

---

## ⚪ Watch / Neutral (26)

### NYSE:HGTY
- Score: 59/100 | raw: 2.13 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 59/100 | raw: 2.15 | News: 8 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 58/100 | raw: 1.8 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ETN
- Score: 58/100 | raw: 1.95 | News: 6 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 58/100 | raw: 1.95 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEM
- Score: 58/100 | raw: 1.8 | News: 8 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 57/100 | raw: 1.8 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HOOD
- Score: 55/100 | raw: 2.49 | News: 14 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 54/100 | raw: 1.05 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 53/100 | raw: 1.65 | News: 13 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 53/100 | raw: 0.75 | News: 2 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 52/100 | raw: 0.45 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 52/100 | raw: 0.54 | News: 5 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 1 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:MRVL
- Score: 48/100 | raw: -0.54 | News: 5 kept / 25 dropped | No clear directional bias — stay flat

### NASDAQ:STX
- Score: 44/100 | raw: -1.5 | News: 5 kept / 25 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-23T12:30:43.245Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*