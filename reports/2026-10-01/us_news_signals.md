---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_206829f2bd9411f1887c525400de85a5
    ReservedCode1: ZrHHA+STKHeSSgI8aGEl7k2N2/LE/2CqSvd6ZuRcGLcMAAyxgCgXzwOMllcR+IyQRenvX8c34ApGEGZ6O7uWEQ6q0TQikWNqCCyHM1Q9dUyDhL1Vt3kP3afmKvbtBuNoe8cPJwnVuGz035F8hErWOJzg7R33Qyy4PPaVfcOVCmodL8/1by1NrX1YRQg=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_206829f2bd9411f1887c525400de85a5
    ReservedCode2: ZrHHA+STKHeSSgI8aGEl7k2N2/LE/2CqSvd6ZuRcGLcMAAyxgCgXzwOMllcR+IyQRenvX8c34ApGEGZ6O7uWEQ6q0TQikWNqCCyHM1Q9dUyDhL1Vt3kP3afmKvbtBuNoe8cPJwnVuGz035F8hErWOJzg7R33Qyy4PPaVfcOVCmodL8/1by1NrX1YRQg=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-10-01  |  **News Window:** 2026-09-24 ~ 2026-10-01（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (55)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:BE** | **93** | 10.32 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/24 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:PLTR** | **91** | 10.44 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/24 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:LITE** | **90** | 9.66 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/23 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:APH** | **83** | 10.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/3 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:ETN** | **79** | 6.85 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | - |
| 6 | **NASDAQ:GRAL** | **78** | 6.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/8 | Overheated Sentiment (one-sided bullish) |
| 7 | **NYSE:CLS** | **77** | 6.55 | 🟢 Long (Strong) | Momentum / Hold | High | 6/11 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:ARM** | **76** | 11.28 | 🟢 Long (Strong) | Momentum / Hold | High | 15/15 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:PANW** | **72** | 9.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/19 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:ANET** | **71** | 6.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/16 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:STX** | **70** | 4.68 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 12 | **NASDAQ:INTC** | **69** | 4.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/27 | - |
| 13 | **NYSE:TT** | **69** | 5.57 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/10 | Overheated Sentiment (one-sided bullish) |
| 14 | **NYSE:DY** | **68** | 4.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/4 | - |
| 15 | **NASDAQ:AEHR** | **67** | 3.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 16 | **NASDAQ:SNDK** | **66** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:GRMN** | **66** | 3.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/3 | - |
| 18 | **NYSE:WT** | **65** | 3.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/2 | - |
| 19 | **NASDAQ:CRWD** | **64** | 7.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | - |
| 20 | **NASDAQ:ON** | **63** | 3.34 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/5 | Sentiment Divergence (black swan masked by noise) |
| 21 | **NASDAQ:VICR** | **62** | 2.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/8 | - |
| 22 | **NYSE:KEYS** | **61** | 2.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/9 | - |
| 23 | **NASDAQ:SANM** | **61** | 2.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/6 | - |
| 24 | **NYSE:SPNT** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 25 | **NASDAQ:WDC** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 26 | **NYSE:ST** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 27 | **NASDAQ:MU** | **57** | 2.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 28 | **NASDAQ:ASML** | **57** | 3.29 | ⚪ No Trade (Weak Bullish) | Watch | Low | 16/14 | - |
| 29 | **NYSE:TSM** | **56** | 1.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/22 | - |
| 30 | **NASDAQ:VRTX** | **56** | 1.35 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/12 | - |
| 31 | **NYSE:SN** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/2 | - |
| 32 | **NYSE:P** | **53** | 1.56 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/15 | - |
| 33 | **NYSE:ELF** | **52** | 0.45 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/5 | - |
| 34 | **NASDAQ:FSLR** | **51** | 0.33 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/22 | - |
| 35 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:DT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/8 | - |
| 38 | **NASDAQ:TEM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/6 | - |
| 39 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:ENTG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 41 | **NYSE:JOE** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 42 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 44 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 45 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:SARO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:NGG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 48 | **OTC:IFNNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:AEIS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 50 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 51 | **NASDAQ:MSFT** | **46** | -1.08 | ⚪ No Trade (Neutral) | Watch | Low | 4/26 | - |
| 52 | **NASDAQ:HOOD** | **46** | -3.03 | ⚪ No Trade (Neutral) | Watch | Low | 22/8 | - |
| 53 | **NYSE:VEEV** | **45** | -1.26 | ⚪ No Trade (Neutral) | Watch | Low | 9/8 | - |
| 54 | **NYSE:LLY** | **43** | -3.15 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/20 | - |
| 55 | **NYSE:LYB** | **37** | -3.06 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/8 | - |

---

## 🟢 Strong Long (3)

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.85 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [M&A|w2.1] Can Eaton Corporation (ETN) Turn COL Group Into a Growth Engine?
- 🟢 [M&A|w1.75] Can Eaton's Strategic Acquisitions Boost Further Long-Term Growth?
- 🟢 [Industry|w1.25] Vertiv (VRT) vs. Eaton (ETN): Which AI Power Stock Is the Better Buy?

**Bearish Factors:**
- 🔴 [Industry|w1.25] Eaton (ETN) Registers a Bigger Fall Than the Market: Important Facts t

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | M&A | 🟢 +1 | 2.1 | Yahoo | Can Eaton Corporation (ETN) Turn COL Group Into a Growth Eng |
| 2026-09-28 | Industry | 🔴 -1 | 1.25 | Yahoo | Eaton (ETN) Registers a Bigger Fall Than the Market: Importa |
| 2026-09-28 | Industry | 🟢 +1 | 1.25 | Yahoo | Vertiv (VRT) vs. Eaton (ETN): Which AI Power Stock Is the Be |
| 2026-09-28 | M&A | 🟢 +1 | 1.75 | Yahoo | Can Eaton's Strategic Acquisitions Boost Further Long-Term G |
| 2026-09-25 | M&A | 🟢 +1 | 1.05 | Yahoo | Eaton to Buy COL Group in $923 Million Deal to Expand Europe |
| 2026-09-25 | Earnings | ⚪  0 | 0.97 | Yahoo | Eaton Adds European Power Capacity as Data Center Demand Kee |
| 2026-09-25 | M&A | 🟢 +1 | 1.05 | Yahoo | Eaton signs agreement to acquire COL Group, expanding manufa |
| 2026-09-25 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Wells Fargo Initiates Coverage On Eaton Corp with Overweight |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Celestica Inc. (NYSE:CLS) Combines High Growth Leadership With Strong 
- 🟢 [Analyst Action|w2.16] Bernstein Initiates Coverage On Celestica with Outperform Rating, Anno
- 🟢 [Earnings|w1.63] Celestica (NYSE:CLS) and the Affordable Growth Case Behind Its Strong 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Earnings | 🟢 +1 | 2.76 | ChartMill | Celestica Inc. (NYSE:CLS) Combines High Growth Leadership Wi |
| 2026-09-30 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Initiates Coverage On Celestica with Outperform Ra |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Earnings | 🟢 +1 | 1.63 | ChartMill | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 11.28 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Arm Is Betting on a World Where Everything Needs a Chip
- 🟢 [Earnings|w2.34] ARM vs. APP: Which AI-Exposed Tech Stock to Consider Right Now?
- 🟢 [Industry|w1.8] Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better Buy in 20

**Bearish Factors:**
- 🔴 [Industry|w1.25] Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Marvell Slide

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Arm Is Betting on a World Where Everything Needs a Chip |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | ARM vs. APP: Which AI-Exposed Tech Stock to Consider Right N |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Arm Stock Surges 5.24% as Agent Safety Needs Two Silicon Lay |
| 2026-09-29 | Industry | 🟢 +1 | 1.5 | Yahoo | NVIDIA Just Turned AI Safety Into a Spending Story and These |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Arm Jumps 5% as Chip Selloff Unwinds; Marvell Climbs 4%, Qua |
| 2026-09-29 | Industry | 🟢 +1 | 1.5 | Benzinga | What Is Going on With Arm Holdings Stock on Tuesday? |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Arm (ARM) Stock Looks Overvalued After Its 442% Three Year R |

---

## 🟢 Mid Long (15)

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 9.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 19 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Industrial Control System Security Market Forecasts Growth from $17.91
- 🟢 [Earnings|w2.34] BlackBerry Advances 5% on Continued QNX Momentum; Palo Alto Networks G
- 🟢 [Earnings|w2.34] Palo Alto CEO Said The Quiet Part About AI Aloud And I Buy Reality

**Bearish Factors:**
- 🔴 [Industry|w1.8] Palo Alto Networks: The Valuation Has Lost Touch With Reality
- 🔴 [Industry|w1.8] All In On Cybersecurity: The Choice Between Palo Alto Networks or Crow

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | 🟢 +1 | 2.13 | Yahoo | These Telltale Clues Shine A Spotlight On Palo Alto Networks |
| 2026-10-01 | Earnings | 🟢 +1 | 2.76 | Yahoo | Industrial Control System Security Market Forecasts Growth f |
| 2026-10-01 | Industry | ⚪  0 | 2.13 | Yahoo | Is AI-Driven Edge Security Integration With Nvidia’s Stack A |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | BlackBerry Advances 5% on Continued QNX Momentum; Palo Alto  |
| 2026-09-30 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | PANW Hits Record High As AI Safety Debate Continues To Boost |
| 2026-09-30 | Industry | 🔴 -1 | 1.8 | SeekingAlp | Palo Alto Networks: The Valuation Has Lost Touch With Realit |
| 2026-09-30 | Industry | 🔴 -1 | 1.8 | Yahoo | All In On Cybersecurity: The Choice Between Palo Alto Networ |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Threat Intelligence Market Projected to Reach $26.68 Billion |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 6.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] How To Create Income From Arista Networks Stock
- 🟢 [Analyst Action|w2.16] Bernstein Initiates Coverage On Arista Networks with Outperform Rating
- 🟢 [Earnings|w1.95] Is Arista Networks Stock As Expensive As It Looks?

**Bearish Factors:**
- 🔴 [Industry|w1.5] Arista Networks (ANET) Registers a Bigger Fall Than the Market: Import

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Rumor | ⚪  0 | 1.27 | Yahoo | Arista Networks (ANET) Stock May Be Near Fair Value Today |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | How To Create Income From Arista Networks Stock |
| 2026-09-30 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Initiates Coverage On Arista Networks with Outperf |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | Is Arista Networks Stock As Expensive As It Looks? |
| 2026-09-29 | Industry | 🔴 -1 | 1.5 | Yahoo | Arista Networks (ANET) Registers a Bigger Fall Than the Mark |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | SeekingAlp | Arista: The Layer Beneath The Chips |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Is AI Turning Networking Into Arista Network’s (ANET) Next B |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Arista’s CFO Says the AI Cycle Is 2.5 to 3 Years In. Here’s  |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.68 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Sandisk Bets on AI and Enterprise SSDs: Can It Outpace MU & STX?
- 🟢 [Earnings|w1.63] Seagate: The Areal Density Breakthrough
- 🟢 [Industry|w1.25] Seagate Technology Holdings (STX) Rides AI Storage Demand, Is It Still

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Sandisk Bets on AI and Enterprise SSDs: Can It Outpace MU &  |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Seagate vs. NetApp: Which AI Data Storage Stock is the Smart |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | The Zacks Analyst Blog Highlights Seagate, Western Digital,  |
| 2026-09-28 | Analyst Action | ⚪  0 | 1.5 | Benzinga | $100 Invested In Seagate Technology Hldgs 5 Years Ago Would  |
| 2026-09-28 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Seagate: The Areal Density Breakthrough |
| 2026-09-28 | Industry | 🟢 +1 | 1.25 | Yahoo | Seagate Technology Holdings (STX) Rides AI Storage Demand, I |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Benzinga | Seagate Shares Rise Over 6% After Key Trading Signal |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 27 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] TSMC Vs. Intel: Goliath Is Defeating David
- 🟢 [Industry|w1.8] Why Gabelli Waited Before Investing in Intel Corporation (INTC)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | TSMC Vs. Intel: Goliath Is Defeating David |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Why Gabelli Waited Before Investing in Intel Corporation (IN |
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Intel's Recovery Has Moved From Survival To Factory Economic |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 4 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Can Dycom Turn a $20B Fiber Opportunity Into Its Next Growth Wave?
- 🟢 [Earnings|w1.36] Dycom Industries: The Market Is Irrational Here, I'm Starting A Positi
- 🟢 [Industry|w0.9] Dycom Eyes 10%-12% Growth as Data Center, Fiber Demand Accelerates

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | 🟢 +1 | 1.5 | Yahoo | Can Dycom Turn a $20B Fiber Opportunity Into Its Next Growth |
| 2026-09-27 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Dycom Industries: The Market Is Irrational Here, I'm Startin |
| 2026-09-26 | Industry | 🟢 +1 | 0.9 | Yahoo | Dycom Eyes 10%-12% Growth as Data Center, Fiber Demand Accel |
| 2026-09-25 | Rumor | 🟢 +1 | 0.5 | Yahoo | Dycom Industries (DY) Could Be 48% Undervalued Following Its |
| 2026-09-25 | Earnings | ⚪  0 | 0.97 | Yahoo | Dycom Industries (DY) Down 11.7% Since Last Earnings Report: |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] AEHR vs. CAMT: Which Semiconductor Equipment Stock Is the Better Bet?
- 🟢 [Earnings|w1.63] Aehr Test Systems (AEHR) Earnings Expected to Grow: Should You Buy?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | AEHR vs. CAMT: Which Semiconductor Equipment Stock Is the Be |
| 2026-09-28 | Earnings | 🟢 +1 | 1.63 | Yahoo | Aehr Test Systems (AEHR) Earnings Expected to Grow: Should Y |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Aehr Test Systems to Participate in 18th Annual CEO Investor |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Micron is crushing it, but so is SanDisk. So why are they still undere
- 🟢 [Earnings|w2.34] Sandisk: No Fab Control, No HBF Exclusivity - Where The Money Really C
- 🟢 [Industry|w1.8] Sandisk Bets on AI and Enterprise SSDs: Can It Outpace MU & STX?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Sandisk (SNDK) Could Be 19% Undervalued After Its Memory Forum Update

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Sandisk Bets on AI and Enterprise SSDs: Can It Outpace MU &  |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | Jensen Huang's biggest Q3 moves, Rubrik CEO talks tech & cyb |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Micron is crushing it, but so is SanDisk. So why are they st |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk: No Fab Control, No HBF Exclusivity - Where The Mone |
| 2026-09-30 | Earnings | 🔴 -1 | 2.34 | Yahoo | Sandisk (SNDK) Could Be 19% Undervalued After Its Memory For |
| 2026-09-29 | Earnings | ⚪  0 | 1.95 | Yahoo | Sandisk to Report First Quarter Fiscal Year 2027 Results on  |

---

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Garmin and M/I Homes have been highlighted as Zacks Bull and Bear of t
- 🟢 [Earnings|w1.95] Bull of the Day: Garmin Ltd. (GRMN)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Here's Why Garmin (GRMN) Fell More Than Broader Market |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | Garmin and M/I Homes have been highlighted as Zacks Bull and |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | Bull of the Day: Garmin Ltd. (GRMN) |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 2 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.8] 3 Reasons Why Growth Investors Shouldn't Overlook WisdomTree, Inc. (WT
- 🟢 [Earnings|w0.97] Should You Buy WisdomTree (WT) Stock After Its Latest Crypto Move?
- 🟢 [Analyst Action|w0.9] Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises Price Targ

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | 3 Reasons Why Growth Investors Shouldn't Overlook WisdomTree |
| 2026-09-25 | Earnings | 🟢 +1 | 0.97 | Yahoo | Should You Buy WisdomTree (WT) Stock After Its Latest Crypto |
| 2026-09-25 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises  |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 7.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] BlackBerry Advances 5% on Continued QNX Momentum; Palo Alto Networks G
- 🟢 [Earnings|w1.95] CrowdStrike vs. UiPath: What Revenue Patterns Tell Investors About The
- 🟢 [Industry|w1.8] Threat Intelligence Market Projected to Reach $26.68 Billion by 2031

**Bearish Factors:**
- 🔴 [Industry|w1.8] All In On Cybersecurity: The Choice Between Palo Alto Networks or Crow

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 2.13 | Yahoo | Why Did WBD, HPE, CRWD Stocks Rise To 52-Week Highs Today? |
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | Yahoo | CrowdStrike (CRWD) Stock May Be Overvalued On Blueprint Alli |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | BlackBerry Advances 5% on Continued QNX Momentum; Palo Alto  |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | Is CrowdStrike Stock Paying You Enough For The Swings? |
| 2026-09-30 | Industry | 🔴 -1 | 1.8 | Yahoo | All In On Cybersecurity: The Choice Between Palo Alto Networ |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | CoreWeave Partner Network Accelerates the Path to AI Innovat |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Threat Intelligence Market Projected to Reach $26.68 Billion |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Holdings (CRWD) Falcon Is Now Available In An AI |

---

### NASDAQ:VICR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 8 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Vicor (VICR) is a Great Momentum Stock: Should You Buy?
- 🟢 [Earnings|w0.97] Vicor (VICR) Stock Is Rallying on Royalties. History Says Be Careful

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | Yahoo | Vicor raises third-quarter revenue guidance; stock rips high |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Vicor (VICR) is a Great Momentum Stock: Should You Buy? |
| 2026-09-25 | Earnings | 🟢 +1 | 0.97 | Yahoo | Vicor (VICR) Stock Is Rallying on Royalties. History Says Be |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 9 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Can Keysight's Advanced Testing Generator Boost Its Growth Prospects?
- 🟢 [Industry|w0.75] Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside Potential

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Can Keysight's Advanced Testing Generator Boost Its Growth P |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Keysight Introduces Dual Channel Analog Signal Generator for |
| 2026-09-25 | Industry | ⚪  0 | 0.75 | Yahoo | Keysight (KEYS) Stock Looks Fully Priced On Future Cash Flow |
| 2026-09-25 | Industry | 🟢 +1 | 0.75 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improving Fundame
- 🟢 [Earnings|w0.97] Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and High Growth 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 1.63 | ChartMill | Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improvi |
| 2026-09-25 | Earnings | 🟢 +1 | 0.97 | ChartMill | Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and Hi |

---

### NYSE:SPNT

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Are Investors Undervaluing SiriusPoint (SPNT) Right Now?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Are Investors Undervaluing SiriusPoint (SPNT) Right Now? |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Western Digital (NASDAQ:WDC): Strong Growth With a High-Quality Techni
- 🟢 [Earnings|w1.17] S&P Outlook Shift And AI Storage Push Could Be A Game Changer For West

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | ⚪  0 | 1.8 | SeekingAlp | Western Digital Corporation (WDC) Discusses How WD Red Pro H |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | SMCI vs. WDC: Which Stock Is the Better Value Option? |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | The Zacks Analyst Blog Highlights Seagate, Western Digital,  |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Can AI Storage Become the Next Big Catalyst for Newegg Comme |
| 2026-09-28 | Earnings | ⚪  0 | 1.63 | Yahoo | Spotting Winners: Western Digital (NASDAQ:WDC) And Semicondu |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | ChartMill | Western Digital (NASDAQ:WDC): Strong Growth With a High-Qual |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | Yahoo | S&P Outlook Shift And AI Storage Push Could Be A Game Change |

---

## 🟡 Cautious Long (1)

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.57 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 10 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight And HVAC De
- 🟢 [Earnings|w1.17] Trane Technologies (TT) Could Be 13% Undervalued Following HVAC And He
- 🟢 [Earnings|w1.17] Trane Technologies (NYSE:TT): A Quality Investing Standout

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 2.13 | Yahoo | Trane Technologies Introduces Residential Cold Climate Heat  |
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | Yahoo | Trane Technologies Demonstrates Industry-First 800-Volt Dire |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Trane Technologies Launches LiquidStack CDU 2.X for Faster,  |
| 2026-09-29 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $1000 Invested In Trane Technologies 20 Year |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Trane Technologies Expands System Architecture with Two New  |
| 2026-09-27 | Earnings | 🟢 +1 | 1.36 | Yahoo | Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight A |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | Yahoo | Trane Technologies (TT) Could Be 13% Undervalued Following H |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | ChartMill | Trane Technologies (NYSE:TT): A Quality Investing Standout |

---

## ⚠️ Overheated (5)

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 10.32 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Should Bloom Energy Stock Investors Worry About Its Record Quarter?
- 🟢 [Earnings|w2.34] Bloom Energy (NYSE:BE) Stock Screens Well on High Growth and Improving
- 🟢 [Earnings|w2.34] Bloom Energy: Why I'm Letting My Winner Ride

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Should Bloom Energy Stock Investors Worry About Its Record Q |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | ChartMill | Bloom Energy (NYSE:BE) Stock Screens Well on High Growth and |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Bloom Energy: Why I'm Letting My Winner Ride |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Bloom Energy (BE) Stock Still Looks Undervalued After a 24x  |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | BE Stock Recovers After Monday Slide On Analyst Support: Pee |
| 2026-09-29 | Industry | 🟢 +1 | 1.5 | Yahoo | Bloom Energy Is Up More Than 200% So Far This Year. What Com |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 10.44 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Palantir Remains Our Top Tech Pick Of The 2020s
- 🟢 [Industry|w2.13] Palantir Technologies (NASDAQ:PLTR): A High-Growth Momentum Leader
- 🟢 [Earnings|w1.95] PLTR vs. COHR: Which AI-Driven Tech Stock is a Better Buy?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | 🟢 +1 | 2.13 | ChartMill | Palantir Technologies (NASDAQ:PLTR): A High-Growth Momentum  |
| 2026-10-01 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Palantir Remains Our Top Tech Pick Of The 2020s |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Was There Any Sign Palantir Stock Would Run? |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Palantir: A Completely Different AI Story |
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | Yahoo | Palantir (PLTR) Stock Looks Fully Valued Following Fresh AI  |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | PLTR vs. COHR: Which AI-Driven Tech Stock is a Better Buy? |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.66 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Bernstein Initiates Coverage On Lumentum Holdings with Outperform Rati
- 🟢 [Earnings|w1.95] LITE vs. NVTS: Which AI Data Center Stock Is the Better Buy?
- 🟢 [Industry|w1.8] Lumentum's Best Opportunity Is Becoming The Laser Inside The AI Networ

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Lumentum's Best Opportunity Is Becoming The Laser Inside The |
| 2026-09-30 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Bernstein Initiates Coverage On Lumentum Holdings with Outpe |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | LITE vs. NVTS: Which AI Data Center Stock Is the Better Buy? |
| 2026-09-29 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Lumentum Stock: I Bought It At $800; 2027 Could Change The S |
| 2026-09-28 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Citigroup Maintains Buy on Lumentum Holdings, Raises Price T |
| 2026-09-25 | Earnings | ⚪  0 | 0.97 | SeekingAlp | Lumentum's $40 EPS Bet Changes Everything |
| 2026-09-25 | Industry | 🟢 +1 | 0.75 | Yahoo | LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Th |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 10.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 3 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Amphenol (APH) Beat Expectations, Is The Stock Still Cheap?
- 🟢 [Earnings|w1.95] What Does Amphenol Offer That Coherent Does Not?
- 🟢 [Earnings|w1.95] Amphenol, Stock Of The Day, Offers Entry Amid Booming AI Growth

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Amphenol (APH) Beat Expectations, Is The Stock Still Cheap? |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | What Does Amphenol Offer That Coherent Does Not? |
| 2026-09-29 | Earnings | ⚪  0 | 1.95 | Yahoo | Electronic Components & Manufacturing Q2 Earnings: Amphenol  |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | Amphenol, Stock Of The Day, Offers Entry Amid Booming AI Gro |
| 2026-09-29 | Earnings | 🟢 +1 | 1.95 | Yahoo | Zacks Investment Ideas feature highlights: Nvidia, Bloom Ene |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Weight of Evidence Points Higher for US Stocks, Led by AI |
| 2026-09-28 | Earnings | 🟢 +1 | 1.63 | Yahoo | APH's AI Connectivity Growth Accelerates: Can It Outpace TEL |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | If You Invested $1000 in Amphenol a Decade Ago, This is How  |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 8 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] 3 Reasons to Buy Grail (GRAL) Hand Over Fist in October
- 🟢 [Policy|w1.5] GRAIL: AdCom's Vote Of Confidence Is Significant
- 🟢 [Analyst Action|w1.5] Canaccord Genuity Maintains Buy on GRAIL, Raises Price Target to $150

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | 3 Reasons to Buy Grail (GRAL) Hand Over Fist in October |
| 2026-09-28 | Policy | 🟢 +1 | 1.5 | SeekingAlp | GRAIL: AdCom's Vote Of Confidence Is Significant |
| 2026-09-28 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Canaccord Genuity Maintains Buy on GRAIL, Raises Price Targe |
| 2026-09-25 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Mizuho Maintains Neutral on GRAIL, Raises Price Target to $1 |
| 2026-09-25 | Earnings | 🟢 +1 | 0.97 | Yahoo | MRNA On Track To Be September's No. 2 S&P 500 Stock — But Th |

---

## ⚠️ Risk Pattern (2)

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.57 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 10 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight And HVAC De
- 🟢 [Earnings|w1.17] Trane Technologies (TT) Could Be 13% Undervalued Following HVAC And He
- 🟢 [Earnings|w1.17] Trane Technologies (NYSE:TT): A Quality Investing Standout

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 2.13 | Yahoo | Trane Technologies Introduces Residential Cold Climate Heat  |
| 2026-09-30 | Earnings | ⚪  0 | 2.34 | Yahoo | Trane Technologies Demonstrates Industry-First 800-Volt Dire |
| 2026-09-29 | Industry | ⚪  0 | 1.5 | Yahoo | Trane Technologies Launches LiquidStack CDU 2.X for Faster,  |
| 2026-09-29 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here's How Much $1000 Invested In Trane Technologies 20 Year |
| 2026-09-28 | Industry | ⚪  0 | 1.25 | Yahoo | Trane Technologies Expands System Architecture with Two New  |
| 2026-09-27 | Earnings | 🟢 +1 | 1.36 | Yahoo | Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight A |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | Yahoo | Trane Technologies (TT) Could Be 13% Undervalued Following H |
| 2026-09-26 | Earnings | 🟢 +1 | 1.17 | ChartMill | Trane Technologies (NYSE:TT): A Quality Investing Standout |

---

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.34 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 5 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w2.52] How Synaptics Buyout Shifted ON Semiconductor Corp.’s (ON) Trajectory?
- 🟢 [Industry|w1.8] ON Semiconductor Is No Longer Just A Cyclical Chipmaker
- 🟢 [Industry|w0.9] ON Semiconductor (ON) Stock Stays Near Fair Value Despite Its 69% Run

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] ON Semiconductor Stock Looks Expensive Until You Price Its Fuller Fact

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | Why the Market Dipped But ON Semiconductor Corp. (ON) Gained |
| 2026-09-30 | M&A | 🟢 +1 | 2.52 | Yahoo | How Synaptics Buyout Shifted ON Semiconductor Corp.’s (ON) T |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | SeekingAlp | ON Semiconductor Is No Longer Just A Cyclical Chipmaker |
| 2026-09-28 | Black Swan | 🔴 -1 | 1.88 | Yahoo | ON Semiconductor Stock Looks Expensive Until You Price Its F |
| 2026-09-27 | Rumor | ⚪  0 | 0.63 | Yahoo | Prediction: ON Semiconductor Could Be a Sleeper AI Infrastru |
| 2026-09-26 | Industry | 🟢 +1 | 0.9 | Yahoo | ON Semiconductor (ON) Stock Stays Near Fair Value Despite It |
| 2026-09-25 | Rumor | ⚪  0 | 0.5 | Yahoo | ON Semiconductor (ON) Could Be 28% Below Fair Value As Produ |
| 2026-09-25 | Industry | ⚪  0 | 0.75 | ChartMill | Top S&P500 movers in Friday's session |

---

## 🔴 Avoid / Short (4)

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.34 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 5 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [M&A|w2.52] How Synaptics Buyout Shifted ON Semiconductor Corp.’s (ON) Trajectory?
- 🟢 [Industry|w1.8] ON Semiconductor Is No Longer Just A Cyclical Chipmaker
- 🟢 [Industry|w0.9] ON Semiconductor (ON) Stock Stays Near Fair Value Despite Its 69% Run

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] ON Semiconductor Stock Looks Expensive Until You Price Its Fuller Fact

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | Why the Market Dipped But ON Semiconductor Corp. (ON) Gained |
| 2026-09-30 | M&A | 🟢 +1 | 2.52 | Yahoo | How Synaptics Buyout Shifted ON Semiconductor Corp.’s (ON) T |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | SeekingAlp | ON Semiconductor Is No Longer Just A Cyclical Chipmaker |
| 2026-09-28 | Black Swan | 🔴 -1 | 1.88 | Yahoo | ON Semiconductor Stock Looks Expensive Until You Price Its F |
| 2026-09-27 | Rumor | ⚪  0 | 0.63 | Yahoo | Prediction: ON Semiconductor Could Be a Sleeper AI Infrastru |
| 2026-09-26 | Industry | 🟢 +1 | 0.9 | Yahoo | ON Semiconductor (ON) Stock Stays Near Fair Value Despite It |
| 2026-09-25 | Rumor | ⚪  0 | 0.5 | Yahoo | ON Semiconductor (ON) Could Be 28% Below Fair Value As Produ |
| 2026-09-25 | Industry | ⚪  0 | 0.75 | ChartMill | Top S&P500 movers in Friday's session |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 0.45 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 5 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Elf Beauty Shares Rise as Canaccord Tracker Shows 11.6% Sales Growth

**Bearish Factors:**
- 🔴 [Black Swan|w1.35] ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Quality

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | e.l.f. Beauty (ELF) Following Sales Data Is It Fully Valued  |
| 2026-09-30 | Industry | 🟢 +1 | 1.8 | Yahoo | Elf Beauty Shares Rise as Canaccord Tracker Shows 11.6% Sale |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | rhode Launches at Sephora in Europe, Marking Its First Retai |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | Yahoo | e.l.f. Cosmetics Conjures Up "The e.l.f.ing Magical Sisters" |
| 2026-09-26 | Black Swan | 🔴 -1 | 1.35 | ChartMill | ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Q |
| 2026-09-25 | Industry | ⚪  0 | 0.75 | Yahoo | e.l.f. Beauty (ELF) Is a Trending Stock: Facts to Know Befor |
| 2026-09-25 | Industry | ⚪  0 | 0.75 | Yahoo | e.l.f. Cosmetics Drops Second Original Album, "Mirror Mix,"  |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **43** / 100 |
| Raw Weighted Score | -3.15 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Lilly's oral GLP-1, Foundayo (orforglipron), was associated with signi
- 🟢 [M&A|w2.52] Eli Lilly (LLY) Stock Stays Undervalued As Its 437% Run Raises Stakes
- 🟢 [Earnings|w2.34] Lilly's oral GLP-1, Foundayo (orforglipron), demonstrated cardiovascul

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Lilly's EloraTZP (combination of eloralintide and tirzepatide) deliver
- 🔴 [Earnings|w2.34] Eli Lilly stock rises on striking 23% weight loss in drug combo trial
- 🔴 [Industry|w2.13] Eli Lilly Weight-Loss Drug Foundayo Meets Primary Endpoint in Phase 3 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Earnings | 🟢 +1 | 2.76 | Yahoo | Lilly's oral GLP-1, Foundayo (orforglipron), was associated  |
| 2026-10-01 | Industry | 🔴 -1 | 2.13 | Yahoo | Eli Lilly Weight-Loss Drug Foundayo Meets Primary Endpoint i |
| 2026-09-30 | Earnings | 🟢 +1 | 2.34 | Yahoo | Lilly's oral GLP-1, Foundayo (orforglipron), demonstrated ca |
| 2026-09-30 | Industry | 🔴 -1 | 1.8 | Yahoo | Eli Lilly (LLY) Suffers a Larger Drop Than the General Marke |
| 2026-09-30 | M&A | 🟢 +1 | 2.52 | Yahoo | Eli Lilly (LLY) Stock Stays Undervalued As Its 437% Run Rais |
| 2026-09-30 | Industry | 🔴 -1 | 1.8 | Yahoo | NVO's Ozempic Outshines LLY's Mounjaro in Lowering Cardiovas |
| 2026-09-30 | Industry | ⚪  0 | 1.8 | SeekingAlp | Eli Lilly and Company (LLY) Presents at 2026 EASD Annual Mee |
| 2026-09-30 | Earnings | 🔴 -1 | 2.34 | Yahoo | Eli Lilly stock rises on striking 23% weight loss in drug co |

---

### NYSE:LYB

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.06 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 8 |

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Citigroup Downgrades LyondellBasell Industries to Neutral, Lowers Pric
- 🔴 [Analyst Action|w0.9] UBS Maintains Neutral on LyondellBasell Industries, Lowers Price Targe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Analyst Action | 🔴 -1 | 2.16 | Benzinga | Citigroup Downgrades LyondellBasell Industries to Neutral, L |
| 2026-09-25 | Analyst Action | 🔴 -1 | 0.9 | Benzinga | UBS Maintains Neutral on LyondellBasell Industries, Lowers P |

---

## ⚪ Watch / Neutral (27)

### NYSE:ST
- Score: 58/100 | raw: 1.95 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 57/100 | raw: 2.76 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ASML
- Score: 57/100 | raw: 3.29 | News: 16 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 56/100 | raw: 1.92 | News: 8 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 56/100 | raw: 1.35 | News: 6 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 55/100 | raw: 1.17 | News: 5 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 53/100 | raw: 1.56 | News: 15 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FSLR
- Score: 51/100 | raw: 0.33 | News: 7 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:DT
- Score: 50/100 | raw: 0 | News: 1 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TEM
- Score: 50/100 | raw: 0 | News: 3 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:ENTG
- Score: 50/100 | raw: 0 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SARO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:NGG
- Score: 50/100 | raw: 0 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:IFNNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:AEIS
- Score: 50/100 | raw: 0 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 46/100 | raw: -1.08 | News: 4 kept / 26 dropped | No clear directional bias — stay flat

### NASDAQ:HOOD
- Score: 46/100 | raw: -3.03 | News: 22 kept / 8 dropped | No clear directional bias — stay flat

### NYSE:VEEV
- Score: 45/100 | raw: -1.26 | News: 9 kept / 8 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-10-01T12:30:47.542Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
