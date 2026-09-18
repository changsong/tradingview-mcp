---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_bc5ea8faab8111f1af37525400826444
    ReservedCode1: cHpzewLlBNcFozC7VtUcKR40+c8buh3RY+MvmkD3RcJhzTwbCMc1lyK+efHR7WYs4zy0IwLljgwd6BvIhqP6tRT6wGXAeRqRcRURoj1UQXU1mpqibB1eP8RiuWFDlGL5lGz6fqUG6uOeksmQdhoVQdELKkHvSh/qc5KbS0ocuS9bRkopVerZgJQLRRk=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_bc5ea8faab8111f1af37525400826444
    ReservedCode2: cHpzewLlBNcFozC7VtUcKR40+c8buh3RY+MvmkD3RcJhzTwbCMc1lyK+efHR7WYs4zy0IwLljgwd6BvIhqP6tRT6wGXAeRqRcRURoj1UQXU1mpqibB1eP8RiuWFDlGL5lGz6fqUG6uOeksmQdhoVQdELKkHvSh/qc5KbS0ocuS9bRkopVerZgJQLRRk=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-08  |  **News Window:** 2026-09-01 ~ 2026-09-08（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (62)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:FIVE** | **85** | 21.24 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 23/7 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:DELL** | **84** | 22.89 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:PWR** | **82** | 7.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/15 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:TSM** | **79** | 7.02 | 🟢 Long (Strong) | Momentum / Hold | High | 5/25 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:FCX** | **75** | 5.91 | 🟢 Long (Strong) | Momentum / Hold | High | 5/18 | - |
| 6 | **NASDAQ:RELY** | **75** | 5.92 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/7 | Overheated Sentiment (one-sided bullish) |
| 7 | **NASDAQ:ADI** | **74** | 5.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/5 | - |
| 8 | **NYSE:APH** | **73** | 5.54 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 8/9 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:SNDK** | **72** | 8.03 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:ETN** | **71** | 4.92 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/13 | Sentiment Divergence (black swan masked by noise) |
| 11 | **NASDAQ:CRWD** | **70** | 9.6 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 18/12 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:ELF** | **69** | 4.48 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/2 | - |
| 13 | **NYSE:C** | **68** | 4.21 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 9/21 | Sentiment Divergence (black swan masked by noise) |
| 14 | **NASDAQ:HOOD** | **66** | 9.4 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 22/8 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:PGY** | **66** | 3.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/2 | - |
| 16 | **NYSE:WPM** | **63** | 3.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/6 | - |
| 17 | **NYSE:AJG** | **62** | 2.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/1 | - |
| 18 | **NYSE:AR** | **62** | 2.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/5 | - |
| 19 | **NASDAQ:NVDA** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/29 | - |
| 20 | **NASDAQ:OLLI** | **62** | 5.08 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 20/10 | - |
| 21 | **NYSE:LTC** | **61** | 2.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/2 | - |
| 22 | **NASDAQ:MU** | **61** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 23 | **NASDAQ:RKLB** | **61** | 2.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 24 | **NYSE:RIO** | **60** | 2.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/1 | - |
| 25 | **NYSE:J** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/3 | - |
| 26 | **NYSE:OKLO** | **59** | 2.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/14 | - |
| 27 | **NASDAQ:MPWR** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/10 | - |
| 28 | **NASDAQ:VRTX** | **58** | 1.87 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/10 | - |
| 29 | **NASDAQ:AAPL** | **57** | 5.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 18/12 | - |
| 30 | **NYSE:NEM** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/17 | - |
| 31 | **NYSE:CRC** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/1 | - |
| 32 | **NYSE:WT** | **55** | 1.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/3 | - |
| 33 | **NASDAQ:ADUS** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 34 | **NYSE:CF** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 35 | **NASDAQ:KRYS** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/1 | - |
| 36 | **NYSE:MS** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 37 | **NASDAQ:VSAT** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 38 | **NYSE:MOD** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 39 | **NASDAQ:PRGS** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 40 | **NYSE:BAP** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 41 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 42 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 44 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 45 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 46 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 47 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NYSE:ASX** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 51 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 52 | **NASDAQ:CBRS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/16 | - |
| 53 | **NASDAQ:LIN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 54 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/15 | - |
| 55 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 56 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 58 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 59 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:SON** | **46** | -0.99 | ⚪ No Trade (Neutral) | Watch | Low | 4/5 | - |
| 62 | **NASDAQ:HRMY** | **44** | -1.35 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 2/1 | - |

---

## 🟢 Strong Long (2)

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.02 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Taiwan Semiconductor Manufacturing Company (TSM) Raises Guidance as De
- 🟢 [Industry|w1.8] Wall Street Analysts Think TSMC (TSM) Is a Good Investment: Is It?
- 🟢 [Industry|w1.8] Taiwan Semiconductor (NYSE:TSM) Displays Strong Technical Breakout Set

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | Yahoo | Taiwan Semiconductor Manufacturing Company (TSM) Raises Guid |
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | Wall Street Analysts Think TSMC (TSM) Is a Good Investment:  |
| 2026-09-07 | Rumor | 🟢 +1 | 1.08 | Yahoo | Buy These 5 Semiconductor Stocks as Sales Skyrocket on Solid |
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | ChartMill | Taiwan Semiconductor (NYSE:TSM) Displays Strong Technical Br |
| 2026-09-04 | Industry | ⚪  0 | 1.05 | Yahoo | TSMC (TSM) Increases Despite Market Slip: Here's What You Ne |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.91 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 18 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Copper Just Soared to an All-Time High, but This Stock Is Still a Grea
- 🟢 [Industry|w1.8] Freeport-McMoRan Has Ripped 44% in 2026. What Would It Take to Get FCX
- 🟢 [Analyst Action|w1.26] How Is Freeport-McMoRan’s Stock Performance Compared to Other Copper S

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | Freeport-McMoRan Has Ripped 44% in 2026. What Would It Take  |
| 2026-09-06 | Earnings | 🟢 +1 | 1.95 | Yahoo | Copper Just Soared to an All-Time High, but This Stock Is St |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.26 | Yahoo | How Is Freeport-McMoRan’s Stock Performance Compared to Othe |
| 2026-09-03 | Industry | ⚪  0 | 0.9 | Yahoo | Freeport-McMoRan (FCX) Stock Falls Amid Market Uptick: What  |
| 2026-09-02 | Policy | 🟢 +1 | 0.9 | Yahoo | Copper Surges as Shifting Trade Policy and AI Demand Collide |

---

## 🟢 Mid Long (14)

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ADI Declines 5.6% in a Month: Time to Buy, Sell or Hold the Stock?
- 🟢 [Earnings|w2.34] Analog Devices (NASDAQ:ADI) Surfaces on Best Dividend Screen with Soli
- 🟢 [Rumor|w1.08] Buy These 5 Semiconductor Stocks as Sales Skyrocket on Solid AI Demand

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | Yahoo | ADI Declines 5.6% in a Month: Time to Buy, Sell or Hold the  |
| 2026-09-07 | Rumor | 🟢 +1 | 1.08 | Yahoo | Buy These 5 Semiconductor Stocks as Sales Skyrocket on Solid |
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | ChartMill | Analog Devices (NASDAQ:ADI) Surfaces on Best Dividend Screen |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.26 | Yahoo | Is Analog Devices (ADI) Outperforming Other Computer and Tec |
| 2026-09-02 | Industry | ⚪  0 | 0.75 | Yahoo | Analog Devices to Participate in the J.P. Morgan U.S. All St |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 8.03 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Sandisk (NASDAQ:SNDK): A Value Opportunity Backed by Strong Fundamenta
- 🟢 [Earnings|w2.76] Sandisk: Don't Overcomplicate The Simple, Free Cash Flow Is What Matte
- 🟢 [Earnings|w2.34] Sandisk: The Next 3 Weeks Decide Everything

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Jim Cramer Explains Why SanDisk (SNDK) Makes MongoDB (MDB) Look Expens

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | ChartMill | Sandisk (NASDAQ:SNDK): A Value Opportunity Backed by Strong  |
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Sandisk: Don't Overcomplicate The Simple, Free Cash Flow Is  |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Micron, SanDisk get new aggressive price targets from top an |
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | 5 Top-Ranked Growth Stocks to Strengthen Your Portfolio in S |
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk: The Next 3 Weeks Decide Everything |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | SeekingAlp | Sandisk Has Peaked |
| 2026-09-06 | Earnings | ⚪  0 | 1.95 | SeekingAlp | Sandisk: It's The Perfect Time To Load Up |
| 2026-09-05 | Earnings | 🔴 -1 | 1.63 | Yahoo | Jim Cramer Explains Why SanDisk (SNDK) Makes MongoDB (MDB) L |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.48 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] e.l.f. Beauty (ELF) Stock Looks Reasonable On Cash Flow Yet Stretched 
- 🟢 [Earnings|w1.63] Why Did e.l.f. Beauty (ELF) Move Today?
- 🟢 [Industry|w0.9] 4 Cosmetics Stocks Showing Strength Amid Industry Headwinds

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | ⚪  0 | 2.13 | Yahoo | Escape "Unglammy Valley" with e.l.f. Cosmetic’s Soft Glam Sa |
| 2026-09-06 | Earnings | 🟢 +1 | 1.95 | Yahoo | e.l.f. Beauty (ELF) Stock Looks Reasonable On Cash Flow Yet  |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | Why Did e.l.f. Beauty (ELF) Move Today? |
| 2026-09-05 | Industry | ⚪  0 | 1.25 | Yahoo | e.l.f. Beauty (ELF) Starts 12 Week Board Leadership Course A |
| 2026-09-04 | Earnings | ⚪  0 | 1.36 | Yahoo | e.l.f. Beauty (ELF) Up 16.4% Since Last Earnings Report: Can |
| 2026-09-03 | Industry | 🟢 +1 | 0.9 | Yahoo | 4 Cosmetics Stocks Showing Strength Amid Industry Headwinds |
| 2026-09-02 | Earnings | ⚪  0 | 0.97 | Yahoo | e.l.f. Beauty Brings Change the Board Game to the University |

---

### NASDAQ:PGY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 2 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Pagaya Technologies (NASDAQ:PGY) Pairs Strong Growth with a Promising 
- 🟢 [Earnings|w1.63] Pagaya Posted a Record $45 Million Profit. Is AI Lending Finally Worki

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | ChartMill | Pagaya Technologies (NASDAQ:PGY) Pairs Strong Growth with a  |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | Pagaya Posted a Record $45 Million Profit. Is AI Lending Fin |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w0.97] Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Leadership and
- 🟢 [Industry|w0.75] Is Antamina Set to Boost Wheaton Precious Metals' Production?
- 🟢 [Industry|w0.75] Why Wheaton Precious Metals Rallied in August

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Industry | ⚪  0 | 1.05 | Yahoo | TECK or WPM: Which Is the Better Value Stock Right Now? |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | Is Antamina Set to Boost Wheaton Precious Metals' Production |
| 2026-09-02 | Earnings | 🟢 +1 | 0.97 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Lead |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | Why Wheaton Precious Metals Rallied in August |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | Wheaton Precious Metals (TSX:WPM) Stock Trades Rich On A 272 |

---

### NYSE:AJG

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 1 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Arthur J. Gallagher Stock: Is AJG Underperforming the Financial Servic
- 🟢 [Earnings|w1.17] Do You Believe Arthur J. Gallagher (AJG) Could Deliver Mid-Teens EPS G
- 🟢 [Industry|w0.9] The Zacks Analyst Blog Highlights Willis Towers Watson, Arthur J. Gall

**Bearish Factors:**
- 🔴 [Earnings|w2.34] AJG's Risk Management Business Outpaces Brokerage Organic Growth

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arthur J. Gallagher Stock: Is AJG Underperforming the Financ |
| 2026-09-07 | Earnings | 🔴 -1 | 2.34 | Yahoo | AJG's Risk Management Business Outpaces Brokerage Organic Gr |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Arthur J. Gallagher & Co. to Host Regularly Scheduled Quarte |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Do You Believe Arthur J. Gallagher (AJG) Could Deliver Mid-T |
| 2026-09-03 | Industry | 🟢 +1 | 0.9 | Yahoo | The Zacks Analyst Blog Highlights Willis Towers Watson, Arth |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | 3 Insurance Brokerage Stocks Find New Growth Drivers as Rate |

---

### NYSE:AR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Antero Resources (AR) Stock Looks Like A Bargain On Earnings
- 🟢 [Analyst Action|w0.9] Goldman Sachs Maintains Buy on Antero Resources, Raises Price Target t

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-06 | Industry | ⚪  0 | 1.5 | SeekingAlp | Antero Resources: The El Nino May Not Dominate Year Ahead Pr |
| 2026-09-06 | Earnings | 🟢 +1 | 1.95 | Yahoo | Antero Resources (AR) Stock Looks Like A Bargain On Earnings |
| 2026-09-02 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Goldman Sachs Maintains Buy on Antero Resources, Raises Pric |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 29 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Nvidia's Next Chapter: Why Recent News Overshadows A Strong Quarter

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Nvidia's Next Chapter: Why Recent News Overshadows A Strong  |

---

### NASDAQ:OLLI

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 5.08 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 20 / 10 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Ollie's Bargain Outlet Delivers Q2 Earnings Beat Amid Tough Macro Envi
- 🟢 [Earnings|w1.17] OLLI Q2 Earnings Beat Estimates on Tariff Refunds, Sales Miss
- 🟢 [Earnings|w1.17] Ollie's (OLLI) Stock Is Up, What You Need To Know

**Bearish Factors:**
- 🔴 [Earnings|w1.36] Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expensive?
- 🔴 [Earnings|w1.17] OLLI Q2 Deep Dive: Higher Margins and Store Expansion Offset Same-Stor
- 🔴 [Analyst Action|w1.08] Goldman Sachs Maintains Buy on Ollie's Bargain Outlet, Lowers Price Ta

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🔴 -1 | 1.36 | Yahoo | Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expens |
| 2026-09-04 | Earnings | ⚪  0 | 1.36 | SeekingAlp | Ollie's Bargain Outlet Holdings, Inc. (OLLI) Q2 2026 Earning |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Ollie's Bargain Outlet Q2 Results Establish 'Fundamental Bot |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Ollie's Bargain Outlet Delivers Q2 Earnings Beat Amid Tough  |
| 2026-09-03 | Analyst Action | 🔴 -1 | 1.08 | Benzinga | Goldman Sachs Maintains Buy on Ollie's Bargain Outlet, Lower |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | OLLI Q2 Earnings Beat Estimates on Tariff Refunds, Sales Mis |
| 2026-09-03 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Piper Sandler Reiterates Overweight on Ollie's Bargain Outle |
| 2026-09-03 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Truist Securities Maintains Buy on Ollie's Bargain Outlet, R |

---

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 2 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By
- 🟢 [Earnings|w1.17] Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minnesota Acqu

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Analyst Action | 🟢 +1 | 1.5 | SeekingAlp | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minn |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | LTC Properties (LTC) Doubles Down On Senior Housing Bet |
| 2026-09-02 | M&A | ⚪  0 | 1.05 | Yahoo | LTC’s $200 Million Acquisition Accelerates SHOP Transformati |
| 2026-09-02 | M&A | ⚪  0 | 1.05 | Benzinga | LTC Properties Acquires Four SHOP Communities In Minnesota F |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Micron Technology (NASDAQ:MU): A GARP Play for Growth at a Reasonable 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | ChartMill | Micron Technology (NASDAQ:MU): A GARP Play for Growth at a R |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Micron, SanDisk get new aggressive price targets from top an |
| 2026-09-07 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here’s How Much You Would Have Made Owning Micron Technology |
| 2026-09-07 | Earnings | ⚪  0 | 2.34 | Yahoo | Micron Has Skyrocketed 256% in 2026. What Would It Take to G |
| 2026-09-07 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Do You Think Micron Technology’s (MU) Return Drivers May Fal |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Micron Technology, Inc. (MU) Is a Trending Stock: Facts to K |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Can Rocket Lab's SDN Contracts Boost Growth Opportunities?
- 🟢 [Analyst Action|w1.26] SPCX Stock Blasts Past ASTS, RKLB, LUNR, PL — Here’s Everything Shakin
- 🟢 [Industry|w1.05] Space Rally Is Narrower Than It Looks as One Mega-Cap Masks Sector Slu

**Bearish Factors:**
- 🔴 [Earnings|w1.36] Rocket Lab (RKLB) Is Getting Fresh Attention, What Is The Market Weigh
- 🔴 [Industry|w1.05] Nasdaq Futures Edge Higher As Jobs Report Takes Center Stage: TSLA, LU

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | Can Rocket Lab's SDN Contracts Boost Growth Opportunities? |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | ChartMill | Space Rally Is Narrower Than It Looks as One Mega-Cap Masks  |
| 2026-09-04 | Industry | 🔴 -1 | 1.05 | Yahoo | Nasdaq Futures Edge Higher As Jobs Report Takes Center Stage |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.26 | Yahoo | SPCX Stock Blasts Past ASTS, RKLB, LUNR, PL — Here’s Everyth |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | SeekingAlp | Rocket Lab: Quality Is No Secret, And This Is Why I'm Cautio |
| 2026-09-04 | Earnings | ⚪  0 | 1.36 | Yahoo | RKLB And FLY Investors, Take Note: Planet Labs Flags SpaceX  |
| 2026-09-04 | Earnings | 🔴 -1 | 1.36 | Yahoo | Rocket Lab (RKLB) Is Getting Fresh Attention, What Is The Ma |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 1 |

**Bullish Factors:**
- 🟢 [Earnings|w0.97] Rio Tinto (LSE:RIO) Stock Looks Rich On Cash Flow Yet Cheap On Earning
- 🟢 [Industry|w0.75] Rio Tinto Group (LSE:RIO) Looks Fully Valued On Its Critical Minerals 
- 🟢 [Industry|w0.75] Rome Resources, Georgina Energy, Sterling Digital, Aminex, CMRS, Quant

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | ⚪  0 | 2.13 | Yahoo | Ngarlawangga Aboriginal Corporation and Rio Tinto sign Inter |
| 2026-09-02 | Earnings | 🟢 +1 | 0.97 | Yahoo | Rio Tinto (LSE:RIO) Stock Looks Rich On Cash Flow Yet Cheap  |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | Rio Tinto Group (LSE:RIO) Looks Fully Valued On Its Critical |
| 2026-09-02 | Industry | ⚪  0 | 0.75 | Yahoo | Critical Mineral Resources CEO: Ex-Rio Tinto exec Brett Capp |
| 2026-09-02 | Industry | 🟢 +1 | 0.75 | Yahoo | Rome Resources, Georgina Energy, Sterling Digital, Aminex, C |

---

### NYSE:J

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Jacobs (J) Backlog Hits $28.9B As Guidance Rises Again

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jacobs (J) Backlog Hits $28.9B As Guidance Rises Again |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Why Is Jacobs Solutions (J) Up 1.7% Since Last Earnings Repo |

---

## 🟡 Cautious Long (2)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 9.6 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Up 90% in 2026, This Cybersecurity Growth Stock Under $300 Is the Best
- 🟢 [Analyst Action|w1.5] CrowdStrike (CRWD) Stock Faces High Expectations After Strong Gains, D
- 🟢 [Earnings|w1.36] CrowdStrike and Palo Alto Made the SaaSmageddon Survivor List. Can AI 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-09-06 | Earnings | ⚪  0 | 1.95 | Yahoo | CrowdStrike (CRWD)’s CEO Warns AI Is Exposing Gaps in Legacy |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | Up 90% in 2026, This Cybersecurity Growth Stock Under $300 I |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | CrowdStrike (CRWD) Unveiled A Broad AI Security Platform Pus |
| 2026-09-05 | Rumor | ⚪  0 | 0.75 | Yahoo | AI’s Next Winners? Investor Bets on Snowflake, CrowdStrike a |
| 2026-09-05 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | CrowdStrike (CRWD) Stock Faces High Expectations After Stron |
| 2026-09-04 | Earnings | 🟢 +1 | 1.36 | Yahoo | CrowdStrike and Palo Alto Made the SaaSmageddon Survivor Lis |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 9.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 22 / 8 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] ‘That Caught Our Attention’: Wall Street’s Just Turned the Most Bullis
- 🟢 [Industry|w1.5] Should You Forget Robinhood and Buy Webull Instead?
- 🟢 [Industry|w1.5] This Little-Known Altcoin Powering Robinhood's New Blockchain Just Soa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | ‘That Caught Our Attention’: Wall Street’s Just Turned the M |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood Markets, Inc. (HOOD) Is Up 17.12% in One Week: Wha |
| 2026-09-07 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here's How Much $1000 Invested In Robinhood Markets 5 Years  |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | Robinhood’s CEO Says States Are Fighting Prediction Markets  |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | Robinhood Chain Now Earns 240x The Fees Of Arbitrum Itself - |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | Should You Forget Robinhood and Buy Webull Instead? |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | This Little-Known Altcoin Powering Robinhood's New Blockchai |
| 2026-09-05 | Industry | ⚪  0 | 1.25 | Yahoo | Man turns Robinhood-AMC feud into $2 million gain in 12 hour |

---

## ⚠️ Overheated (4)

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 21.24 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 23 / 7 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Five Below (NASDAQ:FIVE) Delivers High Growth and Improving Fundamenta
- 🟢 [Earnings|w1.63] Five Below (NASDAQ:FIVE): High Growth Momentum With a Breakout Setup
- 🟢 [Earnings|w1.63] What Just Happened With Five Below (FIVE)?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | ChartMill | Five Below (NASDAQ:FIVE) Delivers High Growth and Improving  |
| 2026-09-05 | Industry | ⚪  0 | 1.25 | Yahoo | Five Below wins over shoppers with major strategy shift |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | ChartMill | Five Below (NASDAQ:FIVE): High Growth Momentum With a Breako |
| 2026-09-05 | Earnings | ⚪  0 | 1.63 | Yahoo | Stronger Q2 Results, Raised Outlook And Buybacks Might Chang |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | What Just Happened With Five Below (FIVE)? |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.26 | Yahoo | Why Five Below (FIVE) Stock Is Trading Up Today |
| 2026-09-04 | Buyback | 🟢 +1 | 1.26 | Yahoo | Five Below (FIVE) Reported Sales Growth and Authorized a $60 |
| 2026-09-04 | Earnings | ⚪  0 | 1.36 | Yahoo | Retail Earnings Just Exposed a Bigger Divide in the U.S. Con |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 22.89 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Dell & 2 Momentum Stocks to Buy Now for Explosive Upside
- 🟢 [Earnings|w2.34] Dell and HPE Posted Record Revenue. Here’s Why the Market Rewarded 1 a
- 🟢 [Earnings|w2.34] Dell and HPE Just Posted Record AI Numbers. Why Did Their Stocks Split

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Why Lenovo Is A Better Buy Than Dell And HP Inc. |
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did DELL, VOD, ZETA Stocks Surge To 52-Week Highs Last W |
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | Yahoo | Dell Stock Jumped 15% Last Week. Here's Why This Top AI Stoc |
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | Yahoo | Why SNDK, DELL, PANW Stocks Are Rallying Overnight Ahead Of  |
| 2026-09-07 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell & 2 Momentum Stocks to Buy Now for Explosive Upside |
| 2026-09-07 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Explains Why “Buyers Flocked in” for Dell (DELL) |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | DELL Expands Consumer PC Reach: Can It Challenge HPQ & AAPL? |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Dell Technologies (DELL) Is Up 14.88% in One Week: What You  |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] 5 Top-Ranked Growth Stocks to Strengthen Your Portfolio in September
- 🟢 [Earnings|w1.63] Is Rising Analyst Optimism Around PWR’s Dividend Sharpening Quanta’s G
- 🟢 [Industry|w1.25] Quanta Services (PWR) Stock Trades At A Premium To Fair Value

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | 5 Top-Ranked Growth Stocks to Strengthen Your Portfolio in S |
| 2026-09-05 | Industry | 🟢 +1 | 1.25 | Yahoo | Quanta Services (PWR) Stock Trades At A Premium To Fair Valu |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | Is Rising Analyst Optimism Around PWR’s Dividend Sharpening  |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Wall Street Analysts See Quanta Services (PWR) as a Buy: Sho |
| 2026-09-02 | Earnings | 🟢 +1 | 0.97 | Yahoo | Quanta Services Announces Quarterly Cash Dividend |
| 2026-09-02 | Earnings | 🟢 +1 | 0.97 | Yahoo | Quanta's Net Income Nearly Doubles: Can Profit Growth Stay H |

---

### NASDAQ:RELY

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.92 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 7 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And Take-Rate
- 🟢 [Earnings|w1.17] Remitly (RELY) Stock May Be Overvalued With Little Room For Error
- 🟢 [Earnings|w1.17] Remitly Global (RELY) Is a Great Choice for 'Trend' Investors, Here's 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 1.36 | Yahoo | Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | New Strong Buy Stocks for September 4th |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Remitly (RELY) Stock May Be Overvalued With Little Room For  |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Remitly Global (RELY) Is a Great Choice for 'Trend' Investor |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Why Remitly Global Stock Popped 17.4% Last Month |

---

## ⚠️ Risk Pattern (5)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.54 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 9 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Setup
- 🟢 [Industry|w2.13] Amphenol Corp.: The World Electrifies And Content Opportunity Continue
- 🟢 [Earnings|w1.36] Amphenol (APH) Upgraded to Strong Buy: Here's Why

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Amphenol Corp.: The World Electrifies And Content Opportunit |
| 2026-09-05 | Black Swan | 🔴 -1 | 1.88 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 1.36 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 1.05 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 0.9 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Is Amphenol Stock Outperforming the Dow? |
| 2026-09-02 | Industry | ⚪  0 | 0.75 | Yahoo | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.92 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 13 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Eaton: Strong Secular Growth, But Valuation Limits Upside
- 🟢 [Industry|w1.05] Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant
- 🟢 [Industry|w1.05] Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A $242 Mill

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Eaton Stock Looks Expensive Until You Price The Factory Ramp

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.26 | Benzinga | $100 Invested In Eaton Corp 5 Years Ago Would Be Worth This  |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton (ETN) Stock Gets Fair Value Bump As Analysts Back AI D |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton (ETN) Commits $242 Million To New Arkansas Plant And 1 |
| 2026-09-04 | Industry | ⚪  0 | 1.05 | SeekingAlp | Eaton: Portfolio Transformation Is Working, But The Stock Is |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Eaton Stock Looks Expensive Until You Price The Factory Ramp |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 9.6 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Up 90% in 2026, This Cybersecurity Growth Stock Under $300 Is the Best
- 🟢 [Analyst Action|w1.5] CrowdStrike (CRWD) Stock Faces High Expectations After Strong Gains, D
- 🟢 [Earnings|w1.36] CrowdStrike and Palo Alto Made the SaaSmageddon Survivor List. Can AI 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-09-06 | Earnings | ⚪  0 | 1.95 | Yahoo | CrowdStrike (CRWD)’s CEO Warns AI Is Exposing Gaps in Legacy |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | Up 90% in 2026, This Cybersecurity Growth Stock Under $300 I |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | CrowdStrike (CRWD) Unveiled A Broad AI Security Platform Pus |
| 2026-09-05 | Rumor | ⚪  0 | 0.75 | Yahoo | AI’s Next Winners? Investor Bets on Snowflake, CrowdStrike a |
| 2026-09-05 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | CrowdStrike (CRWD) Stock Faces High Expectations After Stron |
| 2026-09-04 | Earnings | 🟢 +1 | 1.36 | Yahoo | CrowdStrike and Palo Alto Made the SaaSmageddon Survivor Lis |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.21 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] C Nears China Brokerage License: Can Onshore Expansion Boost Growth?
- 🟢 [Earnings|w1.63] Citigroup (C) Stock May Be 31% Undervalued After Record Revenue Quarte
- 🟢 [Rumor|w1.08] Citigroup (C) Moves Deeper Into China’s Capital Markets as Competition

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Will Citi’s Blockchain Push and New Notes Issuance Change Citigroup’s 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | DBS, Citi Complete First Weekend Cross-Border Payment |
| 2026-09-07 | Rumor | 🟢 +1 | 1.08 | Yahoo | Citigroup (C) Moves Deeper Into China’s Capital Markets as C |
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | C Nears China Brokerage License: Can Onshore Expansion Boost |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | Citigroup (C) Stock May Be 31% Undervalued After Record Reve |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.26 | Yahoo | Is Citigroup (C) Outperforming Other Finance Stocks This Yea |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Market Chatter: Citigroup May Open Brokerage Unit in China |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Can Citigroup Sustain Its Aggressive Capital Return Strategy |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Will Citi’s Blockchain Push and New Notes Issuance Change Ci |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 9.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 22 / 8 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] ‘That Caught Our Attention’: Wall Street’s Just Turned the Most Bullis
- 🟢 [Industry|w1.5] Should You Forget Robinhood and Buy Webull Instead?
- 🟢 [Industry|w1.5] This Little-Known Altcoin Powering Robinhood's New Blockchain Just Soa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | ‘That Caught Our Attention’: Wall Street’s Just Turned the M |
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood Markets, Inc. (HOOD) Is Up 17.12% in One Week: Wha |
| 2026-09-07 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here's How Much $1000 Invested In Robinhood Markets 5 Years  |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | Robinhood’s CEO Says States Are Fighting Prediction Markets  |
| 2026-09-06 | Industry | ⚪  0 | 1.5 | Yahoo | Robinhood Chain Now Earns 240x The Fees Of Arbitrum Itself - |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | Should You Forget Robinhood and Buy Webull Instead? |
| 2026-09-06 | Industry | 🟢 +1 | 1.5 | Yahoo | This Little-Known Altcoin Powering Robinhood's New Blockchai |
| 2026-09-05 | Industry | ⚪  0 | 1.25 | Yahoo | Man turns Robinhood-AMC feud into $2 million gain in 12 hour |

---

## 🔴 Avoid / Short (4)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.54 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 9 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Setup
- 🟢 [Industry|w2.13] Amphenol Corp.: The World Electrifies And Content Opportunity Continue
- 🟢 [Earnings|w1.36] Amphenol (APH) Upgraded to Strong Buy: Here's Why

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.76 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |
| 2026-09-08 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Amphenol Corp.: The World Electrifies And Content Opportunit |
| 2026-09-05 | Black Swan | 🔴 -1 | 1.88 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 1.36 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 1.05 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 0.9 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 1.17 | Yahoo | Is Amphenol Stock Outperforming the Dow? |
| 2026-09-02 | Industry | ⚪  0 | 0.75 | Yahoo | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.92 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 13 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Eaton: Strong Secular Growth, But Valuation Limits Upside
- 🟢 [Industry|w1.05] Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant
- 🟢 [Industry|w1.05] Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A $242 Mill

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Eaton Stock Looks Expensive Until You Price The Factory Ramp

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.26 | Benzinga | $100 Invested In Eaton Corp 5 Years Ago Would Be Worth This  |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton (ETN) Stock Gets Fair Value Bump As Analysts Back AI D |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Eaton (ETN) Commits $242 Million To New Arkansas Plant And 1 |
| 2026-09-04 | Industry | ⚪  0 | 1.05 | SeekingAlp | Eaton: Portfolio Transformation Is Working, But The Stock Is |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Eaton Stock Looks Expensive Until You Price The Factory Ramp |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.21 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] C Nears China Brokerage License: Can Onshore Expansion Boost Growth?
- 🟢 [Earnings|w1.63] Citigroup (C) Stock May Be 31% Undervalued After Record Revenue Quarte
- 🟢 [Rumor|w1.08] Citigroup (C) Moves Deeper Into China’s Capital Markets as Competition

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Will Citi’s Blockchain Push and New Notes Issuance Change Citigroup’s 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 1.8 | Yahoo | DBS, Citi Complete First Weekend Cross-Border Payment |
| 2026-09-07 | Rumor | 🟢 +1 | 1.08 | Yahoo | Citigroup (C) Moves Deeper Into China’s Capital Markets as C |
| 2026-09-07 | Industry | 🟢 +1 | 1.8 | Yahoo | C Nears China Brokerage License: Can Onshore Expansion Boost |
| 2026-09-05 | Earnings | 🟢 +1 | 1.63 | Yahoo | Citigroup (C) Stock May Be 31% Undervalued After Record Reve |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.26 | Yahoo | Is Citigroup (C) Outperforming Other Finance Stocks This Yea |
| 2026-09-04 | Industry | 🟢 +1 | 1.05 | Yahoo | Market Chatter: Citigroup May Open Brokerage Unit in China |
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Can Citigroup Sustain Its Aggressive Capital Return Strategy |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Will Citi’s Blockchain Push and New Notes Issuance Change Ci |

---

### NASDAQ:HRMY

| Metric | Detail |
|--------|--------|
| Normalized Score | **44** / 100 |
| Raw Weighted Score | -1.35 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 2 / 1 |

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] Harmony Biosciences Announces Poster Presentations at the 16th Europea

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | ⚪  0 | 1.17 | Yahoo | Why Is Harmony Biosciences (HRMY) Up 12.1% Since Last Earnin |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.35 | Yahoo | Harmony Biosciences Announces Poster Presentations at the 16 |

---

## ⚪ Watch / Neutral (36)

### NYSE:OKLO
- Score: 59/100 | raw: 2.22 | News: 6 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 59/100 | raw: 2.13 | News: 3 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 58/100 | raw: 1.87 | News: 6 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 57/100 | raw: 5.1 | News: 18 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEM
- Score: 56/100 | raw: 1.5 | News: 4 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CRC
- Score: 56/100 | raw: 1.36 | News: 6 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 55/100 | raw: 1.11 | News: 5 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADUS
- Score: 55/100 | raw: 1.25 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CF
- Score: 54/100 | raw: 0.97 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 54/100 | raw: 0.9 | News: 3 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 54/100 | raw: 1.05 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 54/100 | raw: 1.05 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 54/100 | raw: 0.9 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRGS
- Score: 53/100 | raw: 0.75 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 53/100 | raw: 0.75 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:ASX
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CBRS
- Score: 50/100 | raw: 0 | News: 1 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LIN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 1 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:SON
- Score: 46/100 | raw: -0.99 | News: 4 kept / 5 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-08T12:34:34.128Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
