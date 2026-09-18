---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_4f2f42eeac4a11f188ac525400dcc5b3
    ReservedCode1: czb5k7/+WSJPuwSvfLAQ9sDIa8ZWMjhSNetPQZ0Pwmpl9um0Flhl6puNmRr/nJ1JY6tqPKUafD5TYBcah7Ozo8YYLVIQPHkYV6tJt0R10bebiLCzRgZY0peh2uYx7PX0+YBTDkF9bjbLoKAIJ3xFVyKJHrrKdVTOkzxgsy0G7T0OHgINRCYyOPvKcJg=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_4f2f42eeac4a11f188ac525400dcc5b3
    ReservedCode2: czb5k7/+WSJPuwSvfLAQ9sDIa8ZWMjhSNetPQZ0Pwmpl9um0Flhl6puNmRr/nJ1JY6tqPKUafD5TYBcah7Ozo8YYLVIQPHkYV6tJt0R10bebiLCzRgZY0peh2uYx7PX0+YBTDkF9bjbLoKAIJ3xFVyKJHrrKdVTOkzxgsy0G7T0OHgINRCYyOPvKcJg=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-09  |  **News Window:** 2026-09-02 ~ 2026-09-09（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (75)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:C** | **86** | 9.22 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/21 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:DELL** | **86** | 22.65 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 16/14 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:FIVE** | **82** | 16.95 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 23/7 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ETN** | **80** | 8.51 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 12/16 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:FCX** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 5/22 | - |
| 6 | **NASDAQ:SNDK** | **76** | 6.48 | 🟢 Long (Strong) | Momentum / Hold | High | 6/24 | - |
| 7 | **NASDAQ:MU** | **74** | 8.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:LTC** | **71** | 4.99 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/3 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:RELY** | **71** | 4.98 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/3 | Overheated Sentiment (one-sided bullish) |
| 10 | **NYSE:APH** | **70** | 4.71 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/8 | Sentiment Divergence (black swan masked by noise) |
| 11 | **NYSE:PWR** | **70** | 4.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/19 | - |
| 12 | **NASDAQ:ADI** | **70** | 4.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/4 | - |
| 13 | **NYSE:AR** | **68** | 4.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/4 | - |
| 14 | **NASDAQ:RKLB** | **67** | 5.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 15 | **NYSE:ELF** | **66** | 3.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/3 | - |
| 16 | **NASDAQ:CRWD** | **65** | 6.02 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/14 | Overheated Sentiment (one-sided bullish) |
| 17 | **NYSE:OKLO** | **65** | 4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/18 | - |
| 18 | **NASDAQ:PGY** | **63** | 3.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/3 | - |
| 19 | **NYSE:ASX** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/3 | - |
| 20 | **NASDAQ:HOOD** | **60** | 10.65 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 25/5 | - |
| 21 | **NYSE:NEM** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/13 | - |
| 22 | **NASDAQ:OLLI** | **60** | 2.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | - |
| 23 | **NYSE:RRC** | **59** | 2.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 24 | **NYSE:WPM** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/10 | - |
| 25 | **NYSE:HG** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 26 | **NYSE:TSM** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 27 | **NYSE:J** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 28 | **NASDAQ:MPWR** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/5 | - |
| 29 | **NYSE:AJG** | **57** | 1.72 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/3 | - |
| 30 | **NYSE:CRC** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/2 | - |
| 31 | **NASDAQ:VRTX** | **54** | 0.96 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/13 | - |
| 32 | **NYSE:WT** | **54** | 0.96 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/2 | - |
| 33 | **NASDAQ:ADUS** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 34 | **NYSE:MS** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 35 | **NASDAQ:VSAT** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/3 | - |
| 36 | **NASDAQ:KRYS** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 37 | **NASDAQ:AAPL** | **51** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 26/4 | - |
| 38 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 39 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 40 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 41 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/5 | - |
| 42 | **NYSE:CF** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/6 | - |
| 43 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 44 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 47 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 50 | **NASDAQ:CBRS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 51 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 52 | **NASDAQ:LIN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 53 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/13 | - |
| 54 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/3 | - |
| 55 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 57 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 58 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 59 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NASDAQ:GRAL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:LITE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NASDAQ:ASML** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NASDAQ:STX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:SON** | **47** | -0.79 | ⚪ No Trade (Neutral) | Watch | Low | 4/5 | - |
| 75 | **NASDAQ:HRMY** | **45** | -1.13 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 2/1 | - |

---

## 🟢 Strong Long (2)

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Freeport-McMoRan shares surge as copper hits record $14,694/ton
- 🟢 [Earnings|w1.63] Copper Just Soared to an All-Time High, but This Stock Is Still a Grea
- 🟢 [Industry|w1.5] Freeport-McMoRan Has Ripped 44% in 2026. What Would It Take to Get FCX

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | Yahoo | Freeport-McMoRan shares surge as copper hits record $14,694/ |
| 2026-09-07 | Industry | 🟢 +1 | 1.5 | Yahoo | Freeport-McMoRan Has Ripped 44% in 2026. What Would It Take  |
| 2026-09-06 | Earnings | 🟢 +1 | 1.63 | Yahoo | Copper Just Soared to an All-Time High, but This Stock Is St |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.08 | Yahoo | How Is Freeport-McMoRan’s Stock Performance Compared to Othe |
| 2026-09-03 | Industry | ⚪  0 | 0.75 | Yahoo | Freeport-McMoRan (FCX) Stock Falls Amid Market Uptick: What  |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.48 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sandisk (NASDAQ:SNDK): A Value Opportunity Backed by Strong Fundamenta
- 🟢 [Earnings|w2.34] What's Going On With Sandisk Stock Tuesday?
- 🟢 [Industry|w1.8] Sandisk Is The Only Memory Bet That Makes Sense

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | ⚪  0 | 2.34 | Yahoo | Can SanDisk Stock Keep Climbing When It Cannot Make Enough T |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | SeekingAlp | Sandisk Corporation (SNDK) Presents at Citi's 2026 Global TM |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Sandisk Is The Only Memory Bet That Makes Sense |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | SeekingAlp | Sandisk: NAND Just Had A Game-Changing Week |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | ChartMill | Sandisk (NASDAQ:SNDK): A Value Opportunity Backed by Strong  |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | Benzinga | What's Going On With Sandisk Stock Tuesday? |

---

## 🟢 Mid Long (13)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 8.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] SpaceX, Nvidia Lead Schwab Buys As Software Rally Spurs Profit-Taking 
- 🟢 [Analyst Action|w2.16] Micron: Left In The Dirt As Peers Continue To Outperform It
- 🟢 [Policy|w2.16] Buy 5 High ROE Stocks as Rate Hike Fears Keep Markets at Bay

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | Yahoo | SpaceX, Nvidia Lead Schwab Buys As Software Rally Spurs Prof |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Druckenmiller Exited Micron and Bought Alphabet. The AI Risk |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Micron (MU) Falls More Steeply Than Broader Market: What Inv |
| 2026-09-08 | Analyst Action | 🟢 +1 | 2.16 | SeekingAlp | Micron: Left In The Dirt As Peers Continue To Outperform It |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | SeekingAlp | Micron's Crash May Set Up Another Leg Higher |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | SeekingAlp | SK hynix Vs. Micron: 'This Time Is Different' |
| 2026-09-08 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Micron Technology (MU) Rose on Elevated Demand for High-Band |
| 2026-09-08 | Policy | 🟢 +1 | 2.16 | Yahoo | Buy 5 High ROE Stocks as Rate Hike Fears Keep Markets at Bay |

---

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.99 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 3 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] LTC (LTC) Completed a $200M Senior-Housing Acquisition. Can Higher Ope
- 🟢 [Analyst Action|w1.26] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By
- 🟢 [Earnings|w0.97] Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minnesota Acqu

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | Yahoo | LTC (LTC) Completed a $200M Senior-Housing Acquisition. Can  |
| 2026-09-05 | Analyst Action | 🟢 +1 | 1.26 | SeekingAlp | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minn |
| 2026-09-03 | Earnings | ⚪  0 | 0.97 | Yahoo | LTC Properties (LTC) Doubles Down On Senior Housing Bet |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 19 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] 5 Top-Ranked Growth Stocks to Strengthen Your Portfolio in September
- 🟢 [Earnings|w1.36] Is Rising Analyst Optimism Around PWR’s Dividend Sharpening Quanta’s G
- 🟢 [Industry|w1.05] Quanta Services (PWR) Stock Trades At A Premium To Fair Value

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Quanta Services (PWR) Rises As Market Takes a Dip: Key Facts |
| 2026-09-07 | Industry | 🟢 +1 | 1.5 | Yahoo | 5 Top-Ranked Growth Stocks to Strengthen Your Portfolio in S |
| 2026-09-05 | Industry | 🟢 +1 | 1.05 | Yahoo | Quanta Services (PWR) Stock Trades At A Premium To Fair Valu |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | Yahoo | Is Rising Analyst Optimism Around PWR’s Dividend Sharpening  |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Wall Street Analysts See Quanta Services (PWR) as a Buy: Sho |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 4 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] ADI Declines 5.6% in a Month: Time to Buy, Sell or Hold the Stock?
- 🟢 [Earnings|w1.95] Analog Devices (NASDAQ:ADI) Surfaces on Best Dividend Screen with Soli
- 🟢 [Rumor|w0.9] Buy These 5 Semiconductor Stocks as Sales Skyrocket on Solid AI Demand

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 1.95 | Yahoo | ADI Declines 5.6% in a Month: Time to Buy, Sell or Hold the  |
| 2026-09-07 | Rumor | 🟢 +1 | 0.9 | Yahoo | Buy These 5 Semiconductor Stocks as Sales Skyrocket on Solid |
| 2026-09-07 | Earnings | 🟢 +1 | 1.95 | ChartMill | Analog Devices (NASDAQ:ADI) Surfaces on Best Dividend Screen |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.08 | Yahoo | Is Analog Devices (ADI) Outperforming Other Computer and Tec |

---

### NYSE:AR

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 4 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Antero Resources (NYSE:AR): High Growth Momentum Aligns With a Breakou
- 🟢 [Earnings|w1.63] Antero Resources (AR) Stock Looks Like A Bargain On Earnings

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | ChartMill | Antero Resources (NYSE:AR): High Growth Momentum Aligns With |
| 2026-09-06 | Industry | ⚪  0 | 1.25 | SeekingAlp | Antero Resources: The El Nino May Not Dominate Year Ahead Pr |
| 2026-09-06 | Earnings | 🟢 +1 | 1.63 | Yahoo | Antero Resources (AR) Stock Looks Like A Bargain On Earnings |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 5.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Rocket Lab: Time To Pounce (Rating Upgrade)
- 🟢 [Industry|w2.13] Nasdaq, Dow, S&P 500 Futures Mixed As Oil Hits $100 Again: QCOM, ORCL,
- 🟢 [Industry|w1.5] Can Rocket Lab's SDN Contracts Boost Growth Opportunities?

**Bearish Factors:**
- 🔴 [Industry|w1.8] How Far Could RKLB Stock Fall In The Next Shock?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | 🟢 +1 | 2.13 | Yahoo | Nasdaq, Dow, S&P 500 Futures Mixed As Oil Hits $100 Again: Q |
| 2026-09-09 | M&A | ⚪  0 | 2.98 | Yahoo | RKLB Stock Extends Gains Overnight: Cathie Wood’s ARK Adds T |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Rocket Lab Introduces New Solar Cell — Can RKLB Tackle Suppl |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Rocket Lab Introduces High-Efficiency Solar Cell to Reduce R |
| 2026-09-08 | Industry | 🔴 -1 | 1.8 | Yahoo | How Far Could RKLB Stock Fall In The Next Shock? |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Rocket Lab: Time To Pounce (Rating Upgrade) |
| 2026-09-07 | Industry | 🟢 +1 | 1.5 | Yahoo | Can Rocket Lab's SDN Contracts Boost Growth Opportunities? |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | ChartMill | Space Rally Is Narrower Than It Looks as One Mega-Cap Masks  |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] e.l.f. Beauty (ELF) Stock Looks Reasonable On Cash Flow Yet Stretched 
- 🟢 [Earnings|w1.36] Why Did e.l.f. Beauty (ELF) Move Today?
- 🟢 [Industry|w0.75] 4 Cosmetics Stocks Showing Strength Amid Industry Headwinds

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | ⚪  0 | 2.13 | Yahoo | Naturium Expands North American Retail Presence, Launching E |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Escape "Unglammy Valley" with e.l.f. Cosmetic’s Soft Glam Sa |
| 2026-09-06 | Earnings | 🟢 +1 | 1.63 | Yahoo | e.l.f. Beauty (ELF) Stock Looks Reasonable On Cash Flow Yet  |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | Yahoo | Why Did e.l.f. Beauty (ELF) Move Today? |
| 2026-09-05 | Industry | ⚪  0 | 1.05 | Yahoo | e.l.f. Beauty (ELF) Starts 12 Week Board Leadership Course A |
| 2026-09-04 | Earnings | ⚪  0 | 1.17 | Yahoo | e.l.f. Beauty (ELF) Up 16.4% Since Last Earnings Report: Can |
| 2026-09-03 | Industry | 🟢 +1 | 0.75 | Yahoo | 4 Cosmetics Stocks Showing Strength Amid Industry Headwinds |

---

### NYSE:OKLO

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 18 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] NuScale Stock vs. Oklo Stock: Wall Street Says Buy One and Sell the Ot
- 🟢 [Earnings|w0.97] Better Small Modular Reactor Stock to Buy After the Sell-Off: Oklo vs.
- 🟢 [Industry|w0.9] Nuclear Stock Face-Off: Is NuScale Power or Oklo the Better Buy Right 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | 🟢 +1 | 2.13 | Yahoo | NuScale Stock vs. Oklo Stock: Wall Street Says Buy One and S |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Benzinga | NuScale And Oklo Heat Up, These Leveraged Nuclear ETFs Are S |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | NuScale Power Spikes 13%, Oklo Climbs 7%: Is the Nuclear Sel |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | OKLO Stock Rises Premarket: Here's Why This Strategist Sees  |
| 2026-09-07 | Earnings | ⚪  0 | 1.95 | Yahoo | Is Oklo at $41 a Bargain or a Trap? Here's the Answer. |
| 2026-09-06 | Industry | ⚪  0 | 1.25 | Yahoo | Here's Why Oklo Stock Trades at a 900% Premium to NuScale Po |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Nuclear Stock Face-Off: Is NuScale Power or Oklo the Better  |
| 2026-09-04 | Earnings | ⚪  0 | 1.17 | SeekingAlp | Oklo Inc.: The AI Power Trade Is Getting More Tangible |

---

### NASDAQ:PGY

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 3 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Pagaya Technologies (NASDAQ:PGY) Pairs Strong Growth with a Promising 
- 🟢 [Earnings|w1.36] Pagaya Posted a Record $45 Million Profit. Is AI Lending Finally Worki

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | ChartMill | Pagaya Technologies (NASDAQ:PGY) Pairs Strong Growth with a  |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | Yahoo | Pagaya Posted a Record $45 Million Profit. Is AI Lending Fin |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend and High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | ChartMill | ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend |
| 2026-09-09 | Earnings | ⚪  0 | 2.76 | Yahoo | ASE Technology Holding Co., Ltd. Announces Monthly Net Reven |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 10.65 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 25 / 5 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] HOOD Stock Ticks Up Overnight — Why This Analyst Sees Upside Of Over 1
- 🟢 [Earnings|w2.34] Robinhood Enters IPO Underwriting: Can IB Be the Next Growth Avenue?
- 🟢 [Analyst Action|w2.16] Jefferies Maintains Buy on Robinhood Markets, Raises Price Target to $

**Bearish Factors:**
- 🔴 [Industry|w1.8] How To Take Advantage Of This Rising Stock With Reduced Risk

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | ⚪  0 | 2.13 | SeekingAlp | Interactive Brokers Offers What Robinhood And Schwab Simply  |
| 2026-09-09 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | HOOD Stock Ticks Up Overnight — Why This Analyst Sees Upside |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Bernstein has a new message for Robinhood investors |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Goldman, Jefferies Reset Robinhood Stock Price Targets |
| 2026-09-08 | Policy | ⚪  0 | 2.16 | Yahoo | Why AMC CEO Adam Aron Dislikes Robinhood’s New Tokenized Ass |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Different Use Cases For Different Tokenization: Krupetsky |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | AMC, Robinhood CEOs Feud Over Tokenization |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood Teams Up With Crypto.com and OG.com to Expand Pred |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 13 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Bond Yields Are Pressuring Gold, But Miners May Tell a Different Story
- 🟢 [Industry|w0.9] Is Newmont (NEM) a Buy as Wall Street Analysts Look Optimistic?

**Bearish Factors:**
- 🔴 [Industry|w0.9] Newmont Corporation (NEM) Registers a Bigger Fall Than the Market: Imp

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Is Newmont Stock Outperforming the Nasdaq? |
| 2026-09-08 | Earnings | ⚪  0 | 2.34 | Yahoo | Can NEM Maintain Earnings Momentum Amid Production Challenge |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | Yahoo | Bond Yields Are Pressuring Gold, But Miners May Tell a Diffe |
| 2026-09-04 | Industry | 🔴 -1 | 0.9 | Yahoo | Newmont Corporation (NEM) Registers a Bigger Fall Than the M |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Is Newmont (NEM) a Buy as Wall Street Analysts Look Optimist |

---

### NASDAQ:OLLI

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Earnings|w0.97] Ollie's Bargain Outlet Delivers Q2 Earnings Beat Amid Tough Macro Envi
- 🟢 [Earnings|w0.97] OLLI Q2 Earnings Beat Estimates on Tariff Refunds, Sales Miss
- 🟢 [Earnings|w0.97] Ollie's (OLLI) Stock Is Up, What You Need To Know

**Bearish Factors:**
- 🔴 [Earnings|w1.17] Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expensive?
- 🔴 [Earnings|w0.97] OLLI Q2 Deep Dive: Higher Margins and Store Expansion Offset Same-Stor
- 🔴 [Analyst Action|w0.9] Goldman Sachs Maintains Buy on Ollie's Bargain Outlet, Lowers Price Ta

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🔴 -1 | 1.17 | Yahoo | Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expens |
| 2026-09-04 | Earnings | ⚪  0 | 1.17 | SeekingAlp | Ollie's Bargain Outlet Holdings, Inc. (OLLI) Q2 2026 Earning |
| 2026-09-03 | Earnings | ⚪  0 | 0.97 | Yahoo | Ollie's Bargain Outlet Q2 Results Establish 'Fundamental Bot |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Ollie's Bargain Outlet Delivers Q2 Earnings Beat Amid Tough  |
| 2026-09-03 | Analyst Action | 🔴 -1 | 0.9 | Benzinga | Goldman Sachs Maintains Buy on Ollie's Bargain Outlet, Lower |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | OLLI Q2 Earnings Beat Estimates on Tariff Refunds, Sales Mis |
| 2026-09-03 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Piper Sandler Reiterates Overweight on Ollie's Bargain Outle |
| 2026-09-03 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Truist Securities Maintains Buy on Ollie's Bargain Outlet, R |

---

## 🟡 Cautious Long (2)

### NASDAQ:RELY

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.98 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 3 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And Take-Rate
- 🟢 [Earnings|w0.97] Remitly (RELY) Stock May Be Overvalued With Little Room For Error
- 🟢 [Earnings|w0.97] Remitly Global (RELY) Is a Great Choice for 'Trend' Investors, Here's 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 1.17 | Yahoo | Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | New Strong Buy Stocks for September 4th |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Remitly (RELY) Stock May Be Overvalued With Little Room For  |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Remitly Global (RELY) Is a Great Choice for 'Trend' Investor |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Why Remitly Global Stock Popped 17.4% Last Month |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 6.02 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] CrowdStrike (CRWD) Stock Faces High Expectations After Strong Gains, D
- 🟢 [Industry|w1.25] Up 90% in 2026, This Cybersecurity Growth Stock Under $300 Is the Best
- 🟢 [Earnings|w1.17] CrowdStrike and Palo Alto Made the SaaSmageddon Survivor List. Can AI 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike vs. OKTA: What Revenue Trends Between These Cybe |
| 2026-09-08 | Analyst Action | ⚪  0 | 2.16 | Benzinga | If You Invested $100 In CrowdStrike Holdings Stock 5 Years A |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | Yahoo | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-09-06 | Earnings | ⚪  0 | 1.63 | Yahoo | CrowdStrike (CRWD)’s CEO Warns AI Is Exposing Gaps in Legacy |
| 2026-09-06 | Industry | 🟢 +1 | 1.25 | Yahoo | Up 90% in 2026, This Cybersecurity Growth Stock Under $300 I |
| 2026-09-06 | Industry | ⚪  0 | 1.25 | Yahoo | CrowdStrike (CRWD) Unveiled A Broad AI Security Platform Pus |
| 2026-09-05 | Rumor | ⚪  0 | 0.63 | Yahoo | AI’s Next Winners? Investor Bets on Snowflake, CrowdStrike a |

---

## ⚠️ Overheated (3)

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 9.22 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Citigroup's Restructuring Is Working, And Valuation Has Not Caught Up
- 🟢 [Industry|w1.8] Citi turns more bullish on trucking stocks
- 🟢 [Industry|w1.5] C Nears China Brokerage License: Can Onshore Expansion Boost Growth?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Citigroup's Restructuring Is Working, And Valuation Has Not  |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | Yahoo | Citi turns more bullish on trucking stocks |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | Yahoo | DBS, Citi Complete First Weekend Cross-Border Payment |
| 2026-09-07 | Rumor | 🟢 +1 | 0.9 | Yahoo | Citigroup (C) Moves Deeper Into China’s Capital Markets as C |
| 2026-09-07 | Industry | 🟢 +1 | 1.5 | Yahoo | C Nears China Brokerage License: Can Onshore Expansion Boost |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | Yahoo | Citigroup (C) Stock May Be 31% Undervalued After Record Reve |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.08 | Yahoo | Is Citigroup (C) Outperforming Other Finance Stocks This Yea |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Market Chatter: Citigroup May Open Brokerage Unit in China |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 22.65 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Trump’s 5 words helped drive a massive 350% rally so what’s next?
- 🟢 [Earnings|w2.34] Dell (DELL) Q2 2027 Earnings Call Transcript
- 🟢 [Earnings|w2.34] Snowflake Expands in Cloud Analytics: Can It Challenge DELL & ORCL?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | 🟢 +1 | 2.13 | Yahoo | Latest Dell Technologies Research Reveals that AI Ambition O |
| 2026-09-09 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did DELL, ROIV, SHEL Stocks Surge To 52-Week Highs Today |
| 2026-09-09 | Earnings | 🟢 +1 | 2.76 | Yahoo | Trump’s 5 words helped drive a massive 350% rally so what’s  |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell vs. HPE: Which Top AI Server Stock Is the Better Buy? |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell (DELL) Q2 2027 Earnings Call Transcript |
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Is Dell Making Money Where You Think It Is? |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | Yahoo | Snowflake Expands in Cloud Analytics: Can It Challenge DELL  |
| 2026-09-08 | Analyst Action | ⚪  0 | 2.16 | Benzinga | If You Invested $100 In Dell Technologies Stock 5 Years Ago, |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 16.95 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 23 / 7 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Five Below (NASDAQ:FIVE) Delivers High Growth and Improving Fundamenta
- 🟢 [Earnings|w1.36] Five Below (NASDAQ:FIVE): High Growth Momentum With a Breakout Setup
- 🟢 [Earnings|w1.36] What Just Happened With Five Below (FIVE)?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Industry | ⚪  0 | 1.8 | Yahoo | Five Below (FIVE) Is Up 4.26% in One Week: What You Should K |
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | ChartMill | Five Below (NASDAQ:FIVE) Delivers High Growth and Improving  |
| 2026-09-05 | Industry | ⚪  0 | 1.05 | Yahoo | Five Below wins over shoppers with major strategy shift |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | ChartMill | Five Below (NASDAQ:FIVE): High Growth Momentum With a Breako |
| 2026-09-05 | Earnings | ⚪  0 | 1.36 | Yahoo | Stronger Q2 Results, Raised Outlook And Buybacks Might Chang |
| 2026-09-05 | Earnings | 🟢 +1 | 1.36 | Yahoo | What Just Happened With Five Below (FIVE)? |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.08 | Yahoo | Why Five Below (FIVE) Stock Is Trading Up Today |
| 2026-09-04 | Buyback | 🟢 +1 | 1.08 | Yahoo | Five Below (FIVE) Reported Sales Growth and Authorized a $60 |

---

## ⚠️ Risk Pattern (4)

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 8.51 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 12 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] UBS Upgrades Eaton Corp to Buy, Raises Price Target to $515
- 🟢 [Analyst Action|w2.16] Eaton Shares Rise After UBS Upgrade to Buy
- 🟢 [Earnings|w0.97] Eaton: Strong Secular Growth, But Valuation Limits Upside

**Bearish Factors:**
- 🔴 [Black Swan|w1.13] Eaton Stock Looks Expensive Until You Price The Factory Ramp

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | UBS Upgrades Eaton Corp to Buy, Raises Price Target to $515 |
| 2026-09-08 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Eaton Shares Rise After UBS Upgrade to Buy |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | Yahoo | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.08 | Benzinga | $100 Invested In Eaton Corp 5 Years Ago Would Be Worth This  |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton (ETN) Stock Gets Fair Value Bump As Analysts Back AI D |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton (ETN) Commits $242 Million To New Arkansas Plant And 1 |

---

### NASDAQ:RELY

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.98 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 3 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And Take-Rate
- 🟢 [Earnings|w0.97] Remitly (RELY) Stock May Be Overvalued With Little Room For Error
- 🟢 [Earnings|w0.97] Remitly Global (RELY) Is a Great Choice for 'Trend' Investors, Here's 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 1.17 | Yahoo | Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | New Strong Buy Stocks for September 4th |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Remitly (RELY) Stock May Be Overvalued With Little Room For  |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Remitly Global (RELY) Is a Great Choice for 'Trend' Investor |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Why Remitly Global Stock Popped 17.4% Last Month |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 8 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Setup
- 🟢 [Industry|w1.8] Amphenol Corp.: The World Electrifies And Content Opportunity Continue
- 🟢 [Earnings|w1.17] Amphenol (APH) Upgraded to Strong Buy: Here's Why

**Bearish Factors:**
- 🔴 [Black Swan|w1.57] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Amphenol Corp.: The World Electrifies And Content Opportunit |
| 2026-09-05 | Black Swan | 🔴 -1 | 1.57 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 1.17 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 0.9 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 0.75 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Is Amphenol Stock Outperforming the Dow? |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 6.02 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] CrowdStrike (CRWD) Stock Faces High Expectations After Strong Gains, D
- 🟢 [Industry|w1.25] Up 90% in 2026, This Cybersecurity Growth Stock Under $300 Is the Best
- 🟢 [Earnings|w1.17] CrowdStrike and Palo Alto Made the SaaSmageddon Survivor List. Can AI 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike vs. OKTA: What Revenue Trends Between These Cybe |
| 2026-09-08 | Analyst Action | ⚪  0 | 2.16 | Benzinga | If You Invested $100 In CrowdStrike Holdings Stock 5 Years A |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | Yahoo | Brokers Suggest Investing in CrowdStrike (CRWD): Read This B |
| 2026-09-06 | Earnings | ⚪  0 | 1.63 | Yahoo | CrowdStrike (CRWD)’s CEO Warns AI Is Exposing Gaps in Legacy |
| 2026-09-06 | Industry | 🟢 +1 | 1.25 | Yahoo | Up 90% in 2026, This Cybersecurity Growth Stock Under $300 I |
| 2026-09-06 | Industry | ⚪  0 | 1.25 | Yahoo | CrowdStrike (CRWD) Unveiled A Broad AI Security Platform Pus |
| 2026-09-05 | Rumor | ⚪  0 | 0.63 | Yahoo | AI’s Next Winners? Investor Bets on Snowflake, CrowdStrike a |

---

## 🔴 Avoid / Short (3)

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 8.51 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 12 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] UBS Upgrades Eaton Corp to Buy, Raises Price Target to $515
- 🟢 [Analyst Action|w2.16] Eaton Shares Rise After UBS Upgrade to Buy
- 🟢 [Earnings|w0.97] Eaton: Strong Secular Growth, But Valuation Limits Upside

**Bearish Factors:**
- 🔴 [Black Swan|w1.13] Eaton Stock Looks Expensive Until You Price The Factory Ramp

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | UBS Upgrades Eaton Corp to Buy, Raises Price Target to $515 |
| 2026-09-08 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Eaton Shares Rise After UBS Upgrade to Buy |
| 2026-09-07 | Industry | ⚪  0 | 1.5 | Yahoo | VWDRY vs. ETN: Which Stock Is the Better Value Option? |
| 2026-09-04 | Analyst Action | ⚪  0 | 1.08 | Benzinga | $100 Invested In Eaton Corp 5 Years Ago Would Be Worth This  |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton to Boost U.S. Power Capacity With $242M Arkansas Plant |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Is Eaton (ETN) Cheap As It Doubles Fibrebond Capacity With A |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton (ETN) Stock Gets Fair Value Bump As Analysts Back AI D |
| 2026-09-04 | Industry | 🟢 +1 | 0.9 | Yahoo | Eaton (ETN) Commits $242 Million To New Arkansas Plant And 1 |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 8 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Setup
- 🟢 [Industry|w1.8] Amphenol Corp.: The World Electrifies And Content Opportunity Continue
- 🟢 [Earnings|w1.17] Amphenol (APH) Upgraded to Strong Buy: Here's Why

**Bearish Factors:**
- 🔴 [Black Swan|w1.57] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-08 | Earnings | 🟢 +1 | 2.34 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |
| 2026-09-08 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Amphenol Corp.: The World Electrifies And Content Opportunit |
| 2026-09-05 | Black Swan | 🔴 -1 | 1.57 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 1.17 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 0.9 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 0.75 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 0.97 | Yahoo | Is Amphenol Stock Outperforming the Dow? |

---

### NASDAQ:HRMY

| Metric | Detail |
|--------|--------|
| Normalized Score | **45** / 100 |
| Raw Weighted Score | -1.13 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 2 / 1 |

**Bearish Factors:**
- 🔴 [Black Swan|w1.13] Harmony Biosciences Announces Poster Presentations at the 16th Europea

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | ⚪  0 | 0.97 | Yahoo | Why Is Harmony Biosciences (HRMY) Up 12.1% Since Last Earnin |
| 2026-09-03 | Black Swan | 🔴 -1 | 1.13 | Yahoo | Harmony Biosciences Announces Poster Presentations at the 16 |

---

## ⚪ Watch / Neutral (52)

### NYSE:RRC
- Score: 59/100 | raw: 2.16 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WPM
- Score: 58/100 | raw: 1.8 | News: 3 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 58/100 | raw: 1.8 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 58/100 | raw: 1.8 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:J
- Score: 58/100 | raw: 1.95 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 58/100 | raw: 1.8 | News: 3 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AJG
- Score: 57/100 | raw: 1.72 | News: 5 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CRC
- Score: 55/100 | raw: 1.17 | News: 4 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 54/100 | raw: 0.96 | News: 6 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 54/100 | raw: 0.96 | News: 5 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADUS
- Score: 54/100 | raw: 1.05 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 54/100 | raw: 0.9 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 54/100 | raw: 0.9 | News: 4 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 53/100 | raw: 0.75 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 51/100 | raw: 1.26 | News: 26 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRGS
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 3 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CF
- Score: 50/100 | raw: 0 | News: 1 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CBRS
- Score: 50/100 | raw: 0 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LIN
- Score: 50/100 | raw: 0 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 2 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 3 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:GRAL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:LITE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:ASML
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NASDAQ:STX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub HTTP 429: no news in window

### NYSE:SON
- Score: 47/100 | raw: -0.79 | News: 4 kept / 5 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-09T12:30:36.262Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
