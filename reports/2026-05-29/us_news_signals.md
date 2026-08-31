# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-29  |  **News Window:** 2026-05-22 ~ 2026-05-29
**Stock Pool:** us_selected.txt (62)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DELL** | **99** | 66.77 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 23/12 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:MRVL** | **94** | 25.75 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 17/18 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:NBIS** | **94** | 45.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 24/16 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:MOD** | **90** | 27.84 | 🟢 Long (Strong) | Momentum / Hold | High | 17/17 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:ADI** | **89** | 13.45 | 🟢 Long (Strong) | Momentum / Hold | High | 13/23 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:APLD** | **88** | 11.84 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/14 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:BA** | **88** | 14.07 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/19 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:COHR** | **86** | 13.44 | 🟢 Long (Strong) | Momentum / Hold | High | 17/23 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:CRDO** | **86** | 14.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/20 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:NOK** | **86** | 11.49 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/20 | Overheated Sentiment (one-sided bullish) |
| 11 | **NASDAQ:RKLB** | **83** | 14.65 | 🟢 Long (Strong) | Momentum / Hold | High | 23/17 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:WDC** | **83** | 10.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/20 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:AMD** | **80** | 14.67 | 🟢 Long (Strong) | Momentum / Hold | High | 26/14 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:GLW** | **79** | 6.85 | 🟢 Long (Strong) | Momentum / Hold | High | 7/33 | Sentiment Strengthening UP (trend) |
| 15 | **NYSE:BE** | **79** | 17.99 | 🟢 Long (Strong) | Momentum / Hold | High | 26/14 | Sentiment Strengthening UP (trend) |
| 16 | **NASDAQ:MU** | **77** | 16.05 | 🟢 Long (Strong) | Momentum / Hold | High | 26/13 | Sentiment Strengthening UP (trend) |
| 17 | **NASDAQ:INCY** | **75** | 5.98 | 🟢 Long (Strong) | Momentum / Hold | High | 8/23 | - |
| 18 | **NYSE:QBTS** | **75** | 11.67 | 🟢 Long (Strong) | Momentum / Hold | High | 15/23 | Sentiment Strengthening UP (trend) |
| 19 | **NYSE:TSM** | **70** | 7.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/14 | - |
| 20 | **NYSE:HPE** | **69** | 5.57 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/23 | Overheated Sentiment (one-sided bullish) |
| 21 | **NYSE:ENS** | **67** | 3.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 22 | **NASDAQ:KLAC** | **66** | 3.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/29 | - |
| 23 | **NASDAQ:LRCX** | **66** | 3.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/26 | - |
| 24 | **NASDAQ:ERIC** | **66** | 3.8 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/9 | Overheated Sentiment (one-sided bullish) |
| 25 | **NASDAQ:ASML** | **64** | 4.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/25 | Sentiment Strengthening UP (trend) |
| 26 | **NASDAQ:SANM** | **64** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/19 | - |
| 27 | **NYSE:HG** | **64** | 3.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/19 | - |
| 28 | **NYSE:RIO** | **63** | 3.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/11 | - |
| 29 | **NASDAQ:SEDG** | **61** | 2.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/18 | - |
| 30 | **NASDAQ:TTMI** | **61** | 2.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/29 | - |
| 31 | **NASDAQ:CPRX** | **60** | 2.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/21 | - |
| 32 | **NASDAQ:CORZ** | **60** | 2.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/18 | - |
| 33 | **NASDAQ:RMBS** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 34 | **NYSE:DKS** | **58** | 7.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 23/17 | Bearish-to-Bullish Reversal (reversal) |
| 35 | **NYSE:NVT** | **58** | 1.81 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/26 | - |
| 36 | **NASDAQ:MTSI** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/21 | - |
| 37 | **NYSE:SPNT** | **56** | 1.44 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 38 | **NASDAQ:PRDO** | **55** | 1.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 39 | **NYSE:IRM** | **54** | 0.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 40 | **NASDAQ:MPWR** | **54** | 1.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/22 | - |
| 41 | **NYSE:GNRC** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/32 | - |
| 42 | **NYSE:SMP** | **53** | 0.72 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 43 | **NASDAQ:IREN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 44 | **NASDAQ:AMAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/26 | - |
| 45 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/23 | - |
| 46 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/14 | - |
| 47 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/15 | - |
| 48 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 49 | **NYSE:CIEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 50 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/16 | - |
| 51 | **NASDAQ:AVGO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 52 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 53 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/18 | - |
| 54 | **NASDAQ:FLEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 55 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 56 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 57 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/23 | - |
| 58 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/27 | - |
| 59 | **NASDAQ:TLN** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 3/22 | - |
| 60 | **NASDAQ:INTC** | **41** | -3.26 | ⚪ No Trade (Neutral) | Watch | Low | 18/19 | - |
| 61 | **NASDAQ:VSAT** | **38** | -10.15 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 13/9 | - |
| 62 | **NASDAQ:GOOGL** | **33** | -5.66 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 16/22 | - |

---

## 🟢 Strong Long (10)

### NYSE:MOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 27.84 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Major data center supplier CEO just explained growing AI problem
- 🟢 [M&A|w3.02] Modine’s $4B AI Coup Freezes Out the Competition
- 🟢 [Earnings|w2.81] Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highlights: Record

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.73] Modine Manufacturing (NYSE:MOD) Beats Q4 Estimates, Stock Dips on Caut

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Modine Manufacturing's Growth Trajectory Strengthens After D |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Major data center supplier CEO just explained growing AI pro |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | UBS Adjusts Price Target on Modine Manufacturing to $355 Fro |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Oppenheimer Adjusts PT on Modine Manufacturing to $325 From  |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highligh |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Data Center Play Modine Manufacturing Reverses After Soaring |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Modine Manufacturing Q4 Earnings Call Highlights |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Modine Q4 Earnings Beat Estimates on Data Center Demand |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 13.45 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Raymond James Raises its Price Target on Analog Devices (ADI)
- 🟢 [Earnings|w3.32] Analog Devices (ADI) Gets A Massive Target Hike After A Strong “Beat-A
- 🟢 [Earnings|w2.81] 5 Must-Read Analyst Questions From Analog Devices’s Q1 Earnings Call

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Congressman Sells Take-Two Stock Before 'GTA VI' Release Date: Here's 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Raymond James Raises its Price Target on Analog Devices (ADI |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Analog Devices' Industrial Segment Picks Up Pace: What's Ahe |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Analog Devices (ADI) Gets A Massive Target Hike After A Stro |
| 2026-05-27 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Why Analog Devices (ADI) Might be Well Poised for a Surge |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Here's How Much You'd Have If You Invested $1000 in Analog D |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Now An Opportune Moment To Examine Analog Devices, Inc. ( |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Citic Securities Adjusts Price Target on Analog Devices to $ |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | 5 Must-Read Analyst Questions From Analog Devices’s Q1 Earni |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 13.44 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Assessing Coherent (COHR) Valuation After AI Datacenter Momentum And E
- 🟢 [M&A|w2.52] Coherent NVIDIA Pact Links AI Optics Growth With Stretched Valuation M
- 🟢 [Earnings|w2.27] Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.7] Coherent: Wait For Earnings To Catch Up To Valuations

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Arnhold LLC Bets Big on Kyndryl Holdings (KD) With a Purchas |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Stocks In AI Bottleneck Soar 1,000%. Now Nvidia Is Demanding |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Coherent vs. AppLovin: Which AI Growth Stock is Better Posit |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Assessing Coherent (COHR) Valuation After AI Datacenter Mome |
| 2026-05-28 | Industry | ⚪  0 | 0.6 | Finnhub | Fabrinet: The Silent Enabler Of The AI Infrastructure Boom A |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Finnhub | No, Nvidia Is Not Cheap - Here's Why |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Finnhub | What's Going On With Nokia Stock Wednesday? |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | AXT vs. Coherent: Which Photonics Chip Supplier Is the Bette |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 14.65 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Rocket Lab Hits Key SDA Milestone, Expands Defense Footprint
- 🟢 [Earnings|w3.32] Is Rocket Lab Corporation (RKLB) Among the Best Space Stocks to Buy Ac
- 🟢 [Industry|w2.55] MU, F, RKLB Stocks Jumped To 52-Week Highs Today: Here’s Why

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Intuitive Machines Rallies 9%, Rocket Lab and Planet Labs Decline in S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Planet Labs Awarded John Deere Sustainability Award |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 9 ‘Hidden’ Space Stocks Haven’t Joined SpaceX IPO Bubble Yet |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Elon Musk Clarifies SpaceX, Anthropic AI Deal. It's Not As B |
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Intuitive Machines Rallies 9%, Rocket Lab and Planet Labs De |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AI Has Caused a Software Winter for Markets. Snowflake’s Suc |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Is Rocket Lab Corporation (RKLB) Among the Best Space Stocks |
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Tesla Stock Slips Overnight: Retail Turns Cautious On SpaceX |
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | RKLB, ASTS Are Crushing Retail Space Trade On SpaceX IPO Buz |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 14.67 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Rocket One Joins AMD AI Developer Program
- 🟢 [Industry|w2.98] RKTO Stock Extends Rally After Landing Its First AI Catalyst – Retail 
- 🟢 [Earnings|w1.55] Intel vs AMD: The Ideal Long-Term Investment

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Nvidia Vs. AMD: Nvidia Will Eat AMD's CPU Lunch

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | 2 AI Infrastructure Stocks That Could Rise 25% and 80% Despi |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Samsung Electronics ships HBM4E chip samples to global custo |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nvidia Stock Is Now a Chip Laggard |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Rocket One Joins AMD AI Developer Program |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | S&P 500 and Nasdaq 100 Post Record Highs on US-Iran Truce Re |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is AMD About to Pop Like Micron? Here’s Why You Shouldn’t Un |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | TSMC CEO Promises Staff Massive 30% Bonus Bump as Profits Su |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Tim Cook Has Never Hyped AI. Apple Stock Is at an All-Time H |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.85 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 33 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] A Look At Corning (GLW) Valuation After 80% Solar Segment Revenue Grow
- 🟢 [M&A|w1.51] How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW) Has Change
- 🟢 [Earnings|w1.33] Why Is Corning (GLW) Up 25.7% Since Last Earnings Report?

**📉 Bearish Factors:**
- 🔴 [Industry|w1.8] Corning Insider Sold Shares Worth $5,263,637, According to a Recent SE

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | A Look At Corning (GLW) Valuation After 80% Solar Segment Re |
| 2026-05-28 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Why Is Corning (GLW) Up 25.7% Since Last Earnings Report? |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Beyond AI: Corning's Three Forgotten Powerhouses |
| 2026-05-26 | Industry | 🔴 -1 | 1.8 | Yahoo Fina | Corning Insider Sold Shares Worth $5,263,637, According to a |
| 2026-05-25 | Earnings | 🟢 +1 | 0.78 | Yahoo Fina | GLW Rides on Solid Traction in the Solar Vertical: Will it P |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-23 | M&A | 🟢 +1 | 1.51 | Yahoo Fina | How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW)  |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 17.99 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Jim Cramer Discusses Nebius’ (NBIS) Latest Deal
- 🟢 [M&A|w3.57] Jim Cramer Discusses Bloom Energy’s (BE) Latest Deal
- 🟢 [Analyst Action|w3.06] Here’s Why Bloom Energy (BE) Is Among the Best Future Stocks to Buy Ri

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] 10 Industrials Stocks With Whale Alerts In Today's Session
- 🔴 [Industry|w0.7] 10 Industrials Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Is It Too Late To Consider Bloom Energy (BE) After Its Recen |
| 2026-05-29 | Industry | ⚪  0 | 0.6 | MarketWatc | &#x2018;I&#x2019;m unsure of the best approach&#x2019;: My f |
| 2026-05-29 | Industry | ⚪  0 | 0.6 | MarketWatc | My golf buddy dropped me when I didn&#x2019;t make him my fi |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 2 Brilliant Growth Stocks to Buy Now and Hold for the Long T |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Breakaway Gap: How To Buy Strength While Managing Your R |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Jim Cramer Discusses Nebius’ (NBIS) Latest Deal |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Jim Cramer Discusses Bloom Energy’s (BE) Latest Deal |
| 2026-05-28 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Here’s Why Bloom Energy (BE) Is Among the Best Future Stocks |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 16.05 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.6] 2 AI Infrastructure Stocks That Could Rise 25% and 80% Despite Overdon
- 🟢 [Analyst Action|w3.06] Micron Gets Higher Target From DA Davidson
- 🟢 [Earnings|w2.34] Micron's AI Bottleneck Trade Just Started

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Samsung Electronics ships faster HBM4E chip samples to customers; shar
- 🔴 [Industry|w1.19] Memory chip stocks just starting to show 'climactic top' moves
- 🔴 [Industry|w1.02] Peter Schiff: The $1 Trillion AI CapEx Bubble Is Hiding a Massive Capi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Veteran analyst has blunt message on Sandisk stock after mas |
| 2026-05-29 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Samsung Electronics ships faster HBM4E chip samples to custo |
| 2026-05-29 | Analyst Action | 🟢 +1 | 3.6 | Yahoo Fina | 2 AI Infrastructure Stocks That Could Rise 25% and 80% Despi |
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Peter Schiff: The $1 Trillion AI CapEx Bubble Is Hiding a Ma |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Anthropic Just Delivered Spectacular News For Amazon and Alp |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Micron Surges 850% As It Crosses $1 Trillion Valuation |
| 2026-05-28 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Micron Gets Higher Target From DA Davidson |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | MUU Becomes the Fourth Single-Stock ETF to Cross $5 Billion |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.98 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Why Is Incyte (INCY) Down 1.8% Since Last Earnings Report?
- 🟢 [Industry|w1.5] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Industry|w1.02] 3 Profitable Stocks for Long-Term Investors

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] PharmaEssentia Appoints Eric Vogel as U.S. Head of Commercialization A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Analyst Action | ⚪  0 | 1.22 | Yahoo Fina | JPMorgan says large-cap biotech is back as profits and pipel |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why Is Incyte (INCY) Down 1.8% Since Last Earnings Report? |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 Profitable Stocks for Long-Term Investors |
| 2026-05-27 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | PharmaEssentia Appoints Eric Vogel as U.S. Head of Commercia |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Momentum Stock |
| 2026-05-26 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Incyte to Present at the Goldman Sachs 47th Annual Global He |
| 2026-05-25 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |

---

### NYSE:QBTS

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 11.67 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Quantum Computing Stocks Rise As U.S. Stakes $2B On Sector Build-Out
- 🟢 [Earnings|w3.32] Here's How IonQ's Expanding Commercial Traction Is Driving Its 2026 Ou
- 🟢 [Policy|w3.06] Rational exuberance: Inside Washington’s $2 billion quantum gamble

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Quantum Computing Stocks IonQ, Rigetti Computing, and D-Wave Quantum A
- 🔴 [Industry|w1.01] Why Is D-Wave Quantum Stock Falling Wednesday?
- 🔴 [Industry|w0.5] Quantum Computing Stocks Short Interest Jumps Amid Valuation Concerns

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, May 28: Rigetti Computing Extends Gains  |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | IBM Has a $10 Billion Plan to Build the Ultimate Quantum Com |
| 2026-05-28 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Rational exuberance: Inside Washington’s $2 billion quantum  |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Rigetti Computing's 108-Qubit Push Keeps Quantum Advantage H |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Here's How IonQ's Expanding Commercial Traction Is Driving I |
| 2026-05-28 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Quantum Computing Stocks IonQ, Rigetti Computing, and D-Wave |
| 2026-05-28 | Policy | 🟢 +1 | 3.57 | Finnhub | Quantum Computing Stocks Rise As U.S. Stakes $2B On Sector B |
| 2026-05-27 | Policy | 🟢 +1 | 2.59 | Yahoo Fina | Quantum Computing: The Next AI Boom? |

---

## 🟢 Mid Long (12)

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 7.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 14 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Taiwan Semiconductor's Growth Propels Taiwan Stock Market To Overtake 
- 🟢 [Earnings|w1.33] TSMC CEO Promises Staff Massive 30% Bonus Bump as Profits Surge. This 
- 🟢 [Analyst Action|w1.22] Is This Why Taiwan Semiconductor Manufacturing Company Limited (TSM) i

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Tracking George Soros's 13F Portfolio - Q1 2026 Update
- 🔴 [Analyst Action|w1.21] Tracking Ruane, Cunniff & Goldfarb's Portfolio - Q1 2026 Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Samsung, SK Rally Sparks Forced Selling as Funds Hit Limits |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Is This Why Taiwan Semiconductor Manufacturing Company Limit |
| 2026-05-28 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | TSMC CEO Promises Staff Massive 30% Bonus Bump as Profits Su |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Energy use forcing rethink of AI chip design, TSMC says |
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Beyond Micron. Why TSMC Might Be the Bigger Value Play in Se |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Intel vs AMD: The Ideal Long-Term Investment |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | ETFs Primed for Gains on NVIDIA's $150B AI Spending Vow in T |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Taiwan Semiconductor Stock Nearing 52-Week High: Buy, Sell o |

---

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] 5 Insightful Analyst Questions From EnerSys’s Q1 Earnings Call
- 🟢 [Earnings|w0.66] EnerSys (ENS) Valuation Check After Record Earnings Beat And Strong Da
- 🟢 [Analyst Action|w0.5] Here's Why EnerSys (ENS) is a Strong Momentum Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | EnerSys Announces Segment Realignment |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Powell Faces Margin Risks From Higher Costs: What's the Road |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | 5 Insightful Analyst Questions From EnerSys’s Q1 Earnings Ca |
| 2026-05-26 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why EnerSys (ENS) is a Strong Momentum Stock |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Powell's Growth Investments Create Long-Term Value for I |
| 2026-05-24 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | EnerSys (ENS) Valuation Check After Record Earnings Beat And |
| 2026-05-24 | Industry | ⚪  0 | 1.26 | Yahoo Fina | EnerSys Edge Battery Launch Meets Strong Share Momentum And  |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 29 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] KLA Flags Stronger Chip Equipment Demand, Rare 2027 Visibility at JPMo
- 🟢 [Earnings|w1.64] The Bull Case For KLA (KLAC) Could Change Following Earnings Beat And 
- 🟢 [Industry|w0.86] Why KLA Corporation (KLAC) Stock Is Up Today

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Assessing Whether KLA (KLAC) Looks Overvalued After Its Strong Recent 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | ASML vs. KLAC: Which Semiconductor Equipment Stock Is the Be |
| 2026-05-28 | Industry | ⚪  0 | 0.6 | Finnhub | Semis Race Past Analysts |
| 2026-05-27 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Assessing Whether KLA (KLAC) Looks Overvalued After Its Stro |
| 2026-05-27 | Industry | ⚪  0 | 0.86 | Yahoo Fina | KLA vs. Applied Materials: Which Chip Equipment Stock Wins N |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Why KLA Corporation (KLAC) Stock Is Up Today |
| 2026-05-26 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | KLA Flags Stronger Chip Equipment Demand, Rare 2027 Visibili |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | The AI Bubble That Isn't: Why Nvidia, Micron Still Look Chea |
| 2026-05-25 | Buyback | ⚪  0 | 0.5 | Yahoo Fina | Will AutoZone, Grainger, or United Rentals Be the Next Big S |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 26 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.33] Assessing Lam Research (LRCX) Valuation After AI Capex Surge And Stron
- 🟢 [Analyst Action|w1.21] Mizuho Maintains Outperform on Lam Research, Raises Price Target to $3
- 🟢 [Analyst Action|w1.04] Mizuho Securities Adjusts PT on Lam Research to $380 From $330, Mainta

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Prepare for a Volatile Ride Ahead in Lam Research Stock After 278% Gai

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Prepare for a Volatile Ride Ahead in Lam Research Stock Afte |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Winmill Loads Up Qualys, Inc. Stock With 88,000 Shares in A  |
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Is the AI Trade Entering Its Second Wave? This ETF Could Be  |
| 2026-05-28 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Assessing Lam Research (LRCX) Valuation After AI Capex Surge |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Hundreds of ETFs Hit 52-Week Highs This Week. Here Are 3 Wor |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Investors Love Lam Research Stock - Shorting OTM Puts in Hug |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Is Amkor Technology (AMKR) Up 2.9% Since Last Earnings R |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Top AI Stocks I’d Buy Now and Hold for the Next Decade |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 4.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] ​ ASML Holding N.V. (ASML) Sets Sights on India’s Foundry Opportunitie
- 🟢 [Analyst Action|w3.06] ASML Holding N.V. (ASML) Stock Gains Attention After UBS Lifts Price T
- 🟢 [Earnings|w1.12] ASML (ASML) Stock Slides as Market Rises: Facts to Know Before You Tra

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] "Nikon CEO Says Co To Take On ASML With Low-Priced Chipmaking Equipmen
- 🔴 [Analyst Action|w1.43] ASML: Why Europe's AI Giant Is Not The Best Chip Buy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Analysis-Huawei bets on speed over shrinking transistors to  |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | ​ ASML Holding N.V. (ASML) Sets Sights on India’s Foundry Op |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | ASML vs. KLAC: Which Semiconductor Equipment Stock Is the Be |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.61 | Yahoo Fina | Are You Looking for a Top Momentum Pick? Why ASML (ASML) is  |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | French AI firm Mistral announces deals with BMW, Airbus |
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Is the AI Trade Entering Its Second Wave? This ETF Could Be  |
| 2026-05-28 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | ASML Holding N.V. (ASML) Stock Gains Attention After UBS Lif |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Soitec Shares Jump After Company Restores Free Cash Flow |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report?
- 🟢 [Industry|w0.51] 2 Growth Stocks with All-Star Potential and 1 We Avoid
- 🟢 [Industry|w0.5] 3 Market-Beating Stocks to Consider Right Now

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Sanmina Insider Sold Shares Worth $1,271,950, According to a Recent SE

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 2 Growth Stocks with All-Star Potential and 1 We Avoid |
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Sanmina Insider Sold Shares Worth $1,271,950, According to a |
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report? |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Market-Beating Stocks to Consider Right Now |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Advanced Micro Devices, Inc. (AMD) Plans to Invest more than |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Sanmina (SANM) is a Strong Growth Stock |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Q1 Reinsurance Earnings: Hamilton Insurance Group (NYSE:HG) Impresses
- 🟢 [Industry|w0.5] A Look At Hamilton Insurance Group (HG) Valuation After Mixed Short Te

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Q1 Reinsurance Earnings: Hamilton Insurance Group (NYSE:HG)  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Should You Continue to Hold AON Stock at 16.3X P/E Valuation |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | A Look At Hamilton Insurance Group (HG) Valuation After Mixe |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 11 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] Here’s What Deutsche Bank Has to Say About Rio Tinto Group (RIO)
- 🟢 [Rumor|w0.5] Rio Tinto Marks Iron Ore Milestone While Weighing Bigger Los Azules Ro

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Solis Minerals set for high-impact lithium drilling - ICYMI |
| 2026-05-27 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Here’s What Deutsche Bank Has to Say About Rio Tinto Group ( |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Rising Costs & Expenses Pressure USAR: What's the Road Ahead |
| 2026-05-27 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Albemarle vs. Rio Tinto: Which Lithium Stock Holds More Prom |
| 2026-05-26 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Endeavour, Rio Tinto and Glencore lead rebounding miners as  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Solis Minerals locks in June drilling start at Brazil lithiu |
| 2026-05-23 | Rumor | 🟢 +1 | 0.5 | Yahoo Fina | Rio Tinto Marks Iron Ore Milestone While Weighing Bigger Los |

---

### NASDAQ:SEDG

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] Solar Stocks To Watch As AI Drives Energy Demand
- 🟢 [Industry|w0.84] SolarEdge Technologies (NASDAQ:SEDG) Marries Technical Strength with H
- 🟢 [Industry|w0.72] Add Solar to Your Subscription Bill? These Companies Are Banking On It

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Solar Stocks To Watch As AI Drives Energy Demand |
| 2026-05-28 | Industry | ⚪  0 | 1.19 | Finnhub | SolarEdge Technologies, Inc. (SEDG) Presents at TD Cowen's 5 |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Add Solar to Your Subscription Bill? These Companies Are Ban |
| 2026-05-26 | Industry | 🟢 +1 | 0.84 | Finnhub | SolarEdge Technologies (NASDAQ:SEDG) Marries Technical Stren |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 29 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Truist Adjusts Price Target on TTM Technologies to $215 From $180, Mai
- 🟢 [Earnings|w0.78] TTM Technologies (TTMI) Valuation Check After Record Q1 2026 Results A
- 🟢 [Earnings|w0.56] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Truist Adjusts Price Target on TTM Technologies to $215 From |
| 2026-05-25 | Earnings | 🟢 +1 | 0.78 | Yahoo Fina | TTM Technologies (TTMI) Valuation Check After Record Q1 2026 |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Yahoo Fina | TTM Technologies, IonQ, and Everpure Shares Are Soaring, Wha |
| 2026-05-23 | Earnings | 🟢 +1 | 0.56 | Yahoo Fina | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 21 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.86] Why Catalyst Pharmaceutical (CPRX) is a Top Momentum Stock for the Lon
- 🟢 [Industry|w0.84] Catalyst Pharmaceuticals (NASDAQ:CPRX) Shows Strong Growth and a Bulli
- 🟢 [Industry|w0.6] Why Catalyst Pharmaceutical (CPRX) is a Top Value Stock for the Long-T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Why Catalyst Pharmaceutical (CPRX) is a Top Momentum Stock f |
| 2026-05-26 | Industry | 🟢 +1 | 0.84 | Finnhub | Catalyst Pharmaceuticals (NASDAQ:CPRX) Shows Strong Growth a |
| 2026-05-25 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Why Catalyst Pharmaceutical (CPRX) is a Top Value Stock for  |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 18 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.04] B. Riley Adjusts Price Target on Core Scientific to $33 From $30, Main
- 🟢 [Industry|w0.72] Core Scientific appoints former Equinix CEO Steve Smith to board as AI
- 🟢 [Analyst Action|w0.52] Jefferies Sees Core Scientific (CORZ) Well Positioned for AI Infrastru

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | B. Riley Adjusts Price Target on Core Scientific to $33 From |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Core Scientific appoints former Equinix CEO Steve Smith to b |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Jefferies Sees Core Scientific (CORZ) Well Positioned for AI |

---

## 🟡 Cautious Long (3)

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 11.84 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Applied Digital Corporation (APLD) Is Gaining Attention After $7.5
- 🟢 [Industry|w2.55] Applied Digital (APLD) Is Up 23.9% After 15-Year Hyperscaler Lease Lif
- 🟢 [Industry|w2.1] Why Is Applied Digital Stock Moving Higher Tuesday?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] 3 Reasons APLD is Risky and 1 Stock to Buy Instead

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Applied Digital Corporation (APLD) Is Gaining Attention  |
| 2026-05-28 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Applied Digital (APLD) Is Up 23.9% After 15-Year Hyperscaler |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | B. Riley Adjusts Price Target on Applied Digital to $66 From |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Finnhub | No, Nvidia Is Not Cheap - Here's Why |
| 2026-05-26 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Applied Digital’s Hyperscaler Deal Is Just the Beginning of  |
| 2026-05-26 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | 3 Reasons APLD is Risky and 1 Stock to Buy Instead |
| 2026-05-26 | Industry | 🟢 +1 | 2.1 | Finnhub | Why Is Applied Digital Stock Moving Higher Tuesday? |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | What's Going On With IREN Stock Tuesday? |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.57 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Why Hewlett Packard Enterprise (HPE) Stock Is Trading Up Today
- 🟢 [M&A|w1.43] HPE and Rowan University Expand Partnership to Accelerate Research and
- 🟢 [Industry|w1.19] Hewlett Packard Enterprise Stock Jumps After Dell's Massive Q1 Beat On

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | HPE and Rowan University Expand Partnership to Accelerate Re |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: HP Inc. |
| 2026-05-28 | Industry | 🟢 +1 | 1.19 | Finnhub | Hewlett Packard Enterprise Stock Jumps After Dell's Massive  |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 1 S&P 500 Stock Worth Investigating and 2 That Underwhelm |
| 2026-05-27 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | HPE Gears Up to Report Q2 Earnings: What's in Store for the  |
| 2026-05-27 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Countdown to Hewlett Packard Enterprise (HPE) Q2 Earnings: A |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Xerox and Super Micro Shares Are Soaring, What You Need To K |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Dell and Diebold Nixdorf Stocks Trade Up, What You Need To K |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.8 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 9 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.86] TeraGo Deploys Ericsson Private 5G Network at McMaster Manufacturing R
- 🟢 [Industry|w0.86] Can Ericsson's 5G Innovation Network in Canada Drive Future Growth?
- 🟢 [Industry|w0.86] Ericsson and EDC expand support on Canadian SME defence and dual-use t

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Had You Invested $1,000 in Nokia 5 Years Ago, Here’s What Yo |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | TeraGo Deploys Ericsson Private 5G Network at McMaster Manuf |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Ericsson and EDC expand support on Canadian SME defence and  |
| 2026-05-27 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Vonage Ranked #1 for Video in the 2026 Gartner® Critical Cap |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nokia Stock Has More Than Doubled. Here’s What’s Fueling The |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Ericsson and Government of Canada to build First-of-Its-Kind |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Ericsson to Move Stockholm HQ to Hagastaden |

---

## ⚠️ Overheated (7)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 66.77 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 23 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Dow Jones Futures: Stock Market Hits Highs On U.S.-Iran Deal; Dell Sur
- 🟢 [Earnings|w3.9] Dell Stock Soars on Data-Center Revenue and Pentagon Deal
- 🟢 [Earnings|w3.9] Dell Shares Soar 40% After Outlook Tops Estimates on AI Boom

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Earnings | 🟢 +1 | 1.56 | Yahoo Fina | Dell shares rocket on bullish forecast for AI demand |
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Dow Jones Futures: Stock Market Hits Highs On U.S.-Iran Deal |
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Dell Stock Soars on Data-Center Revenue and Pentagon Deal |
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Dell Shares Soar 40% After Outlook Tops Estimates on AI Boom |
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | MarketWatc | Dell stock soars toward another record high as the AI boom d |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | DELL Stock Rallies After-Hours As AI Server Revenues Surge O |
| 2026-05-28 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Dell (DELL) Q1 2027 Earnings Call Transcript |
| 2026-05-28 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Dell Stock Jumps on Multibillion-Dollar Pentagon Software De |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 25.75 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 17 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Marvell Technology Q1 Earnings Match Estimates, Revenues Rise Y/Y
- 🟢 [Earnings|w3.87] Marvell Delivers Huge Revenue Forecast Boost -- Why the Stock Is Falli
- 🟢 [Earnings|w3.87] Marvell Raises FY27 Outlook but Shares Fall

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Barclays resets Marvell stock price target after earnings |
| 2026-05-28 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell Lifts FY2027 Outlook As Revenue Growth Nears 40% |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | RBC Just Upped Its Price Target on Marvell Technology Stock. |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Jim Cramer Won’t Touch POET. The Reddit Crowd Thinks He’s Wr |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The AI Trade Is Getting Overcrowded. Here’s Why You Should O |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: Marvell Technology Inc |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Market Update: MRVL, HOG, HPQ |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Top Midday Stories: US Reportedly Reaches Deal With Iran, Ne |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 45.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 24 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Nebius Jumps After Hedge Fund Reveals Stake
- 🟢 [M&A|w3.57] Situational Awareness Stake Puts Spotlight On Nebius AI Infrastructure
- 🟢 [M&A|w3.57] Nebius Stock Jumps as Billion-Dollar Hedge Fund Takes Big Stake

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Nebius Jumps After Hedge Fund Reveals Stake |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Situational Awareness Stake Puts Spotlight On Nebius AI Infr |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Nebius Stock Jumps as Billion-Dollar Hedge Fund Takes Big St |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Everything to Know About the Big Investor Who Took a Massive |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Why Did Nebius Stock Rocket Higher Today? |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nebius to present at BofA Global Technology conference |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Leopold Aschenbrenner's Situational Awareness Fund Just Boug |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Sector Update: Tech Stocks Rise Late Afternoon |

---

### NYSE:BA

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 14.07 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.06] Boeing CEO signals massive new FAA move for 737 jets
- 🟢 [Policy|w3.06] Boeing Shares Rise As FAA Clears Path Toward 47 Max Jets Monthly
- 🟢 [Industry|w2.98] The Boeing Company (BA) Secures 200-Aircraft Agreement With China

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Boeing’s SkyGrid Moves Into U Space And Advanced Air Mobilit |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Think Together Awarded $125,000 Grant from Boeing to Expand  |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 9 ‘Hidden’ Space Stocks Haven’t Joined SpaceX IPO Bubble Yet |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | China Doesn’t Matter for Boeing. This Does. |
| 2026-05-28 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing CEO signals massive new FAA move for 737 jets |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Lockheed Martin vs. Boeing: Which Industrials Stock Is a Bet |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Analysts Name Best Picks In Industrials. One Is Topping A Bu |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stifel Canada on Opportunities For CAE Under New Defence Ind |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 14.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Credo Technology Completes DustPhotonics Acquisition
- 🟢 [M&A|w3.57] Credo Completes Acquisition of DustPhotonics
- 🟢 [M&A|w3.57] Credo Technology (CRDO) Enters a Partnership to Build Enterprise AI Fa

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Credo Technology Completes DustPhotonics Acquisition |
| 2026-05-28 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Credo Technology Before Q4 Earnings: Should Investors Buy th |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Credo Completes Acquisition of DustPhotonics |
| 2026-05-28 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Credo Technology (CRDO) Enters a Partnership to Build Enterp |
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Sono-Tek Corporation (SOTK) Q4 Earnings and Revenues Beat Es |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Credo Remains A Buy Ahead Of Earnings (Earnings Preview) |
| 2026-05-27 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Marvell Technology (MRVL) Q1 Earnings Meet Estimates |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Watch as Credo Flies on Institutional Inflows |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 11.49 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Nokia Stock Rallies To New 52-Week High: What's Driving The Action?
- 🟢 [Earnings|w2.34] Nokia Stock Has More Than Doubled. Here’s What’s Fueling The Rally
- 🟢 [Buyback|w2.16] Nokia Corporation - Managers' transactions (Owczarek)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing Nokia (HLSE:NOKIA) Valuation As AI Networking Push |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Had You Invested $1,000 in Nokia 5 Years Ago, Here’s What Yo |
| 2026-05-28 | Industry | ⚪  0 | 1.19 | Finnhub | Nokia Stock Pauses As Investors Digest Massive Multi-Month R |
| 2026-05-27 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Forget Cisco: Nokia Is the AI Networking Stock Nobody’s Watc |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | NOK, MU, BB Stocks Hit 52-Week Highs Today: What's Fueling T |
| 2026-05-27 | Industry | 🟢 +1 | 1.01 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-27 | Industry | ⚪  0 | 1.01 | Finnhub | What's Going On With Nokia Stock Wednesday? |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 10.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] Forget Micron for a Second: This Storage Maker Just Crossed a Profitab
- 🟢 [Analyst Action|w3.02] With Analysts Calling for Western Digital to Double Earnings, the WDC 
- 🟢 [Analyst Action|w1.21] 2 Cash-Producing Stocks to Target This Week and 1 We Find Risky

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Veteran analyst has blunt message on Sandisk stock after mas |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sandisk Rockets 4000% on AI Memory Boom: Buy, Hold, or Take  |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Super Micro Computer Spikes 9%, SanDisk Climbs 4% as the AI  |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | WD Appoints Manuvir Das to Board of Directors |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sandisk Has Climbed From $36 to $1,590 in a Year. What the A |
| 2026-05-28 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | Forget Micron for a Second: This Storage Maker Just Crossed  |
| 2026-05-28 | Industry | ⚪  0 | 0.6 | Finnhub | 90 Top Ten-Year Dog Collection Yields 22 Ideal Buys From 41  |
| 2026-05-28 | Industry | 🟢 +1 | 0.85 | Seeking Al | Western Digital adds former Nvidia exec to board of director |

---

## ⚠️ Risk Pattern (3)

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 11.84 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Applied Digital Corporation (APLD) Is Gaining Attention After $7.5
- 🟢 [Industry|w2.55] Applied Digital (APLD) Is Up 23.9% After 15-Year Hyperscaler Lease Lif
- 🟢 [Industry|w2.1] Why Is Applied Digital Stock Moving Higher Tuesday?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] 3 Reasons APLD is Risky and 1 Stock to Buy Instead

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Applied Digital Corporation (APLD) Is Gaining Attention  |
| 2026-05-28 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Applied Digital (APLD) Is Up 23.9% After 15-Year Hyperscaler |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | B. Riley Adjusts Price Target on Applied Digital to $66 From |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Finnhub | No, Nvidia Is Not Cheap - Here's Why |
| 2026-05-26 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Applied Digital’s Hyperscaler Deal Is Just the Beginning of  |
| 2026-05-26 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | 3 Reasons APLD is Risky and 1 Stock to Buy Instead |
| 2026-05-26 | Industry | 🟢 +1 | 2.1 | Finnhub | Why Is Applied Digital Stock Moving Higher Tuesday? |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | What's Going On With IREN Stock Tuesday? |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.57 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Why Hewlett Packard Enterprise (HPE) Stock Is Trading Up Today
- 🟢 [M&A|w1.43] HPE and Rowan University Expand Partnership to Accelerate Research and
- 🟢 [Industry|w1.19] Hewlett Packard Enterprise Stock Jumps After Dell's Massive Q1 Beat On

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | HPE and Rowan University Expand Partnership to Accelerate Re |
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: HP Inc. |
| 2026-05-28 | Industry | 🟢 +1 | 1.19 | Finnhub | Hewlett Packard Enterprise Stock Jumps After Dell's Massive  |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 1 S&P 500 Stock Worth Investigating and 2 That Underwhelm |
| 2026-05-27 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | HPE Gears Up to Report Q2 Earnings: What's in Store for the  |
| 2026-05-27 | Earnings | ⚪  0 | 2.81 | Yahoo Fina | Countdown to Hewlett Packard Enterprise (HPE) Q2 Earnings: A |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Xerox and Super Micro Shares Are Soaring, What You Need To K |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Dell and Diebold Nixdorf Stocks Trade Up, What You Need To K |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.8 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 9 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.86] TeraGo Deploys Ericsson Private 5G Network at McMaster Manufacturing R
- 🟢 [Industry|w0.86] Can Ericsson's 5G Innovation Network in Canada Drive Future Growth?
- 🟢 [Industry|w0.86] Ericsson and EDC expand support on Canadian SME defence and dual-use t

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Had You Invested $1,000 in Nokia 5 Years Ago, Here’s What Yo |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | TeraGo Deploys Ericsson Private 5G Network at McMaster Manuf |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Ericsson and EDC expand support on Canadian SME defence and  |
| 2026-05-27 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Vonage Ranked #1 for Video in the 2026 Gartner® Critical Cap |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nokia Stock Has More Than Doubled. Here’s What’s Fueling The |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Ericsson and Government of Canada to build First-of-Its-Kind |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Ericsson to Move Stockholm HQ to Hagastaden |

---

## 🔴 Avoid / Short (2)

### NASDAQ:VSAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **38** / 100 |
| Raw Weighted Score | -10.15 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 13 / 9 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Viasat Q4 Earnings Call Highlights
- 🟢 [Earnings|w3.87] Viasat Q4 Adj. EPS $(0.02) Beats $(0.36) Estimate, Sales $1.171B Miss 
- 🟢 [Industry|w2.55] Stocks making big moves yesterday: HighPeak Energy, Zscaler, Halliburt

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Viasat, Inc. 2026 Q4 - Results - Earnings Call Presentation
- 🔴 [Earnings|w3.32] ViaSat (VSAT) Reports Q4 Earnings: What Key Metrics Have to Say
- 🔴 [Earnings|w3.32] ViaSat (VSAT) Reports Q4 Loss, Lags Revenue Estimates

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Earnings | ⚪  0 | 3.9 | Yahoo Fina | Viasat (VSAT) Q4 2026 Earnings Transcript |
| 2026-05-29 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Viasat Q4 Earnings Call Highlights |
| 2026-05-28 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Stocks making big moves yesterday: HighPeak Energy, Zscaler, |
| 2026-05-28 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | ViaSat (VSAT) Reports Q4 Earnings: What Key Metrics Have to  |
| 2026-05-28 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | ViaSat (VSAT) Reports Q4 Loss, Lags Revenue Estimates |
| 2026-05-28 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | ViaSat: Fiscal Q4 Earnings Snapshot |
| 2026-05-28 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Viasat Earnings Weren’t Enough For Its Scorching Hot Stock |
| 2026-05-28 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | ViaSat Fiscal Q4 Adjusted Loss Flat, Revenue Rises |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -5.66 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.44] Alphabet (GOOGL): The Best Strong Buy Stock to Buy and Hold for the Ne
- 🟢 [Industry|w1.02] Anthropic Just Delivered Spectacular News For Amazon and Alphabet
- 🟢 [Industry|w0.72] Wall Street Lunch: First Step To AI Getting An Oscar

**📉 Bearish Factors:**
- 🔴 [Black Swan|w1.78] Google Engineer Charged After Alleged $1.2 Million Polymarket Bets
- 🔴 [Black Swan|w1.78] Alphabet Insider Case Puts Google Data Controls Under Investor Scrutin
- 🔴 [Industry|w1.19] Famed Investor Stanley Druckenmiller Sold Every Share of Alphabet. He 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Alphabet (GOOGL): The Best Strong Buy Stock to Buy and Hold  |
| 2026-05-29 | Industry | ⚪  0 | 1.4 | Finnhub | Dell shares rocket on bullish forecast for AI demand |
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Peter Schiff: The $1 Trillion AI CapEx Bubble Is Hiding a Ma |
| 2026-05-28 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Anthropic Just Delivered Spectacular News For Amazon and Alp |
| 2026-05-28 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | 'It's Time To Fire Google,' Urges Alphabet's Search Engine R |
| 2026-05-28 | Industry | 🔴 -1 | 1.19 | Finnhub | Famed Investor Stanley Druckenmiller Sold Every Share of Alp |
| 2026-05-28 | Industry | 🔴 -1 | 1.19 | Finnhub | Tracking George Soros's 13F Portfolio - Q1 2026 Update |
| 2026-05-28 | Black Swan | 🔴 -1 | 1.78 | Finnhub | Google Engineer Charged After Alleged $1.2 Million Polymarke |

---

## ⚪ Watch / Neutral (28)

### NASDAQ:RMBS
- Score: 58/100 | raw: 1.8 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 58/100 | raw: 7.27 | News: 23 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Bearish-to-Bullish Reversal (reversal)

### NYSE:NVT
- Score: 58/100 | raw: 1.81 | News: 2 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 56/100 | raw: 1.51 | News: 3 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 56/100 | raw: 1.44 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRDO
- Score: 55/100 | raw: 1.22 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 54/100 | raw: 0.86 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 54/100 | raw: 1.11 | News: 9 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 53/100 | raw: 0.66 | News: 7 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 53/100 | raw: 0.72 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:AMAT
- Score: 50/100 | raw: 0 | News: 0 kept / 26 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 23 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 14 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 15 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:CIEN
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 1 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AVGO
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 2 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 23 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 13 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 48/100 | raw: -0.6 | News: 3 kept / 22 dropped | No clear directional bias — stay flat

### NASDAQ:INTC
- Score: 41/100 | raw: -3.26 | News: 18 kept / 19 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-29T04:33:01.044Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*