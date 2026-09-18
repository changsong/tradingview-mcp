---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_71698fe2a79311f1b874525400e6dd8f
    ReservedCode1: ttDxg1NWpwC/j2UQ2OQhsySa5Df6SPenvgRpU3dshSRpiBDamFMXbpoTb2fJanFnXCpNywJxuk8ZeIaEHJ1j3tcoZh7UXXNbJ7lNrpSn32DbVPP7VujYhLJNETFGgDrXNnYt7wjK3w/h0da71iA78AkryLCvXOb8VquQG8jNFg8t6L9aOeR2wC5VCAA=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_71698fe2a79311f1b874525400e6dd8f
    ReservedCode2: ttDxg1NWpwC/j2UQ2OQhsySa5Df6SPenvgRpU3dshSRpiBDamFMXbpoTb2fJanFnXCpNywJxuk8ZeIaEHJ1j3tcoZh7UXXNbJ7lNrpSn32DbVPP7VujYhLJNETFGgDrXNnYt7wjK3w/h0da71iA78AkryLCvXOb8VquQG8jNFg8t6L9aOeR2wC5VCAA=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-03  |  **News Window:** 2026-08-27 ~ 2026-09-03（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (30)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:VRTX** | **84** | 9.45 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/7 | Overheated Sentiment (one-sided bullish) |
| 2 | **NASDAQ:DASH** | **82** | 8.86 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/12 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:FAF** | **82** | 7.69 | 🟢 Long (Strong) | Momentum / Hold | High | 5/1 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:HOOD** | **76** | 17.64 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:FIVE** | **76** | 23.12 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 20/10 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:CF** | **75** | 5.99 | 🟢 Long (Strong) | Momentum / Hold | High | 5/3 | - |
| 7 | **NYSE:PATH** | **72** | 9.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/6 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:CRWD** | **71** | 15.54 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 19/11 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:NEM** | **69** | 4.92 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/20 | - |
| 10 | **NYSE:AR** | **67** | 3.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/3 | - |
| 11 | **NASDAQ:PANW** | **63** | 7.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/17 | - |
| 12 | **NYSE:APH** | **61** | 2.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/4 | - |
| 13 | **NYSE:WPM** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/2 | - |
| 14 | **NYSE:LTC** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 15 | **NASDAQ:RELY** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 16 | **NYSE:AJG** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 17 | **NYSE:RIO** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 18 | **NYSE:APD** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 19 | **NYSE:J** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 20 | **NASDAQ:AAPL** | **52** | 1.96 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 17/13 | Sentiment Divergence (black swan masked by noise) |
| 21 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 23 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **CBOE:CBOE** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/4 | - |
| 25 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:SQM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 29 | **NASDAQ:GEN** | **47** | -0.75 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 30 | **NYSE:FCX** | **46** | -1 | ⚪ No Trade (Neutral) | Watch | Low | 5/19 | - |

---

## 🟢 Strong Long (3)

### NYSE:FAF

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.69 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 1 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] First American Financial: Bargain Dividend Stock With AI-Fueled Upside
- 🟢 [Industry|w1.8] First American's Housing Business Faces High Mortgage-Rate Pressure
- 🟢 [Earnings|w1.63] Should Value Investors Buy First American Financial (FAF) Stock?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | First American Financial: Bargain Dividend Stock With AI-Fue |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | First American's Housing Business Faces High Mortgage-Rate P |
| 2026-09-01 | Industry | 🟢 +1 | 1.5 | Yahoo | First American Title President Sally French Tyler Named a Ho |
| 2026-08-31 | Earnings | 🟢 +1 | 1.63 | Yahoo | Should Value Investors Buy First American Financial (FAF) St |
| 2026-08-28 | Industry | ⚪  0 | 0.75 | Yahoo | Why First American Financial (FAF) is a Top Dividend Stock f |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 17.64 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Robinhood Earns Transaction Revenue Directly on Crypto. That Cuts Both
- 🟢 [Analyst Action|w2.55] HOOD Stock Rallies On Wall Street Optimism: Retail Sentiment Improves 
- 🟢 [Earnings|w2.34] What Makes Robinhood Markets (HOOD) as an Attractive Bet?

**Bearish Factors:**
- 🔴 [Industry|w1.8] SOFI’s Decline Has Retail Looking Elsewhere — Here’s The Rival Fintech
- 🔴 [Industry|w1.5] Arbitrum Jumps 26% While Bitcoin and Ethereum Fall — Robinhood Is the 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | Robinhood Earns Transaction Revenue Directly on Crypto. That |
| 2026-09-03 | Industry | ⚪  0 | 2.13 | Yahoo | Uniswap (UNI) Price Surges 100%, and One Chain Playing ‘Robi |
| 2026-09-03 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | HOOD Stock Rallies On Wall Street Optimism: Retail Sentiment |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | What Makes Robinhood Markets (HOOD) as an Attractive Bet? |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | HOOD Stock Price Target Hiked On Football Prediction Market  |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | Nvidia Is Still Retail Investors' Most-Held Stock on Robinho |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Morgan Stanley Just Upgraded Robinhood Markets Inc. (HOOD).  |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | SeekingAlp | Want The Fastest Read On The Economy? Watch These Interim Re |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.99 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] CF Industries: Still Misunderstood, Still Undervalued
- 🟢 [Industry|w1.5] CF Shares Up 15% in 3 Months: Here's What's Driving the Upside
- 🟢 [Industry|w1.25] CF Industries (NYSE:CF) Exhibits Technical Strength and Bull Flag Brea

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | CF Industries: Still Misunderstood, Still Undervalued |
| 2026-09-01 | Industry | 🟢 +1 | 1.5 | Yahoo | CF Shares Up 15% in 3 Months: Here's What's Driving the Upsi |
| 2026-08-31 | Industry | 🟢 +1 | 1.25 | ChartMill | CF Industries (NYSE:CF) Exhibits Technical Strength and Bull |
| 2026-08-29 | Industry | 🟢 +1 | 0.9 | ChartMill | CF Industries (NYSE:CF) Shows High Growth Momentum and Break |
| 2026-08-28 | Industry | ⚪  0 | 0.75 | CNBC | Trade Tracker: Kevin Simpson buys more CF Industries |

---

## 🟢 Mid Long (6)

### NYSE:PATH

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 9.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 6 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Samsara or UiPath: Which Stock Has a Clear Path to Profits?
- 🟢 [Earnings|w2.34] UiPath Q2 Preview: Stock Up 36% in One Month, Will Earnings Keep the R
- 🟢 [Analyst Action|w1.5] UBS Maintains Neutral on UiPath, Raises Price Target to $19

**Bearish Factors:**
- 🔴 [Industry|w0.75] Analysts Have a Wall of Holds on Figma, UiPath and GitLab but Institut

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Benzinga | Ciena Could Swing By $6.22 Billion After Earnings |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Samsara or UiPath: Which Stock Has a Clear Path to Profits? |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Benzinga | UiPath Q2 Preview: Stock Up 36% in One Month, Will Earnings  |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | UiPath (PATH) Reports Q2: Everything You Need To Know Ahead  |
| 2026-09-01 | Industry | ⚪  0 | 1.5 | Yahoo | UiPath to Participate in the Citi 2026 Global TMT Conference |
| 2026-08-31 | Industry | 🟢 +1 | 1.25 | Yahoo | UiPath vs. ServiceNow: 1 Stock Is the Better Buy in the Ente |
| 2026-08-31 | Earnings | ⚪  0 | 1.63 | Yahoo | Exploring Analyst Estimates for UiPath (PATH) Q2 Earnings, B |
| 2026-08-31 | Earnings | ⚪  0 | 1.63 | SeekingAlp | UiPath: Maybe Not That Great Ahead Of Earnings |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.92 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 20 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Newmont Stock Jumps 34.5% in August, and Gold's Rally Could Take It Hi
- 🟢 [Industry|w1.8] Miners And More Lead Slew Of Stocks To Watch — With This Line In Focus
- 🟢 [Earnings|w1.17] Newmont (NYSE:NEM): A Solid Value Play Backed by Strong Fundamentals

**Bearish Factors:**
- 🔴 [Industry|w1.5] Newmont shares fall 2.6% as gold prices retreat

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | Newmont Stock Jumps 34.5% in August, and Gold's Rally Could  |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | Miners And More Lead Slew Of Stocks To Watch — With This Lin |
| 2026-09-01 | Industry | 🔴 -1 | 1.5 | Yahoo | Newmont shares fall 2.6% as gold prices retreat |
| 2026-09-01 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here’s How Much You Would Have Made Owning Newmont Stock In  |
| 2026-08-31 | Industry | ⚪  0 | 1.25 | Yahoo | Zacks Market Edge Highlights: GLD, GDX and NEM |
| 2026-08-29 | Earnings | 🟢 +1 | 1.17 | ChartMill | Newmont (NYSE:NEM): A Solid Value Play Backed by Strong Fund |
| 2026-08-28 | Industry | ⚪  0 | 0.75 | Yahoo | Newmont Corporation (NEM) Falls More Steeply Than Broader Ma |
| 2026-08-28 | Analyst Action | 🟢 +1 | 0.9 | Yahoo | Gold Miner Newmont Eclipses Gold's Rally Thanks To A Dual Gr |

---

### NYSE:AR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 3 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Goldman Sachs Maintains Buy on Antero Resources, Raises Price Target t
- 🟢 [Analyst Action|w1.8] Raymond James Maintains Strong Buy on Antero Resources, Raises Price T

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Goldman Sachs Maintains Buy on Antero Resources, Raises Pric |
| 2026-09-01 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Raymond James Maintains Strong Buy on Antero Resources, Rais |
| 2026-08-28 | Earnings | ⚪  0 | 0.97 | Yahoo | Why Is Antero Resources (AR) Up 9.1% Since Last Earnings Rep |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 7.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 17 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Growth In Thi
- 🟢 [Earnings|w2.34] Buy Palo Alto Networks Stock? Earnings Reveal a $9.1B AI Security Boom
- 🟢 [Earnings|w2.34] Palo Alto stock tumbles 10% as analysts call selloff a buying opportun

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Stock Market Today: Dow, Small Caps Lead Rise; Palo Alto Networks Trig
- 🔴 [Earnings|w2.34] Palo Alto Networks Stock Falls After Earnings -- Analysts See More Ups
- 🔴 [Industry|w1.8] Palantir Heads for Worst Day in 7 Months. It Isn’t the Only Software S

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Industry | ⚪  0 | 2.13 | Yahoo | Company News for Sep 3, 2026 |
| 2026-09-03 | Earnings | ⚪  0 | 2.76 | Yahoo | Why Palo Alto Networks (PANW) Stock Is Nosediving |
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Gro |
| 2026-09-02 | M&A | ⚪  0 | 2.52 | Yahoo | Palo Alto Networks paid $500M for Thrive-backed Console, sou |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Buy Palo Alto Networks Stock? Earnings Reveal a $9.1B AI Sec |
| 2026-09-02 | Earnings | 🔴 -1 | 2.34 | Yahoo | Stock Market Today: Dow, Small Caps Lead Rise; Palo Alto Net |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Palo Alto stock tumbles 10% as analysts call selloff a buyin |
| 2026-09-02 | Industry | 🔴 -1 | 1.8 | Yahoo | Palantir Heads for Worst Day in 7 Months. It Isn’t the Only  |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 4 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Dear Amphenol Stock Fans, Mark Your Calendars for September 2
- 🟢 [M&A|w1.05] A Closer Look at Amphenol (APH): Pioneers in Connectors and Cables

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |
| 2026-09-01 | Industry | 🟢 +1 | 1.5 | Yahoo | Dear Amphenol Stock Fans, Mark Your Calendars for September  |
| 2026-08-28 | Earnings | ⚪  0 | 0.97 | Yahoo | Amphenol (APH) Up 1% Since Last Earnings Report: Can It Cont |
| 2026-08-28 | M&A | 🟢 +1 | 1.05 | Yahoo | A Closer Look at Amphenol (APH): Pioneers in Connectors and  |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Leadership and

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Lead |

---

## ⚠️ Overheated (3)

### NASDAQ:VRTX

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 9.45 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 7 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Vertex (VRTX) Stock Trades At A Premium On Earnings Yet Looks Fair On 
- 🟢 [Analyst Action|w2.16] Morgan Stanley Reinstates Overweight on Vertex Pharmaceuticals, Announ
- 🟢 [M&A|w2.1] Vertex Completes Acquisition of Crinetics Pharmaceuticals and Announce

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Why Is Vertex (VRTX) Up 14.4% Since Last Earnings Report? |
| 2026-09-02 | Analyst Action | ⚪  0 | 2.16 | Yahoo | How Is Vertex Pharmaceuticals' Stock Performance Compared to |
| 2026-09-02 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Morgan Stanley Reinstates Overweight on Vertex Pharmaceutica |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Vertex (VRTX) Stock Trades At A Premium On Earnings Yet Look |
| 2026-09-01 | Rumor | 🟢 +1 | 0.9 | Yahoo | Vertex Pharmaceuticals (VRTX) Could Be 3% Undervalued If Its |
| 2026-09-01 | Earnings | 🟢 +1 | 1.95 | Yahoo | Vertex Completes $10 Billion Crinetics Acquisition, Adding R |
| 2026-09-01 | M&A | 🟢 +1 | 2.1 | Yahoo | Vertex Completes Acquisition of Crinetics Pharmaceuticals an |

---

### NASDAQ:DASH

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 8.86 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] DoorDash (DASH) Stock Looks Expensive On Fresh Advertising Measurement
- 🟢 [Industry|w1.8] Circana and DoorDash Partner to Validate Incremental Sales for CPG Bra
- 🟢 [Analyst Action|w1.8] Rosenblatt Initiates Coverage On DoorDash with Buy Rating, Announces P

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Q2 Gig Economy Earnings: DoorDash (NASDAQ:DASH) Impresses |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | DoorDash (DASH) Stock Looks Expensive On Fresh Advertising M |
| 2026-09-02 | Rumor | 🟢 +1 | 1.08 | Yahoo | DoorDash (DASH) Could Be 8% Undervalued On New Retail And Ad |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | Circana and DoorDash Partner to Validate Incremental Sales f |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | Gap, Kohl’s among retailers adding DoorDash delivery option |
| 2026-09-01 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Rosenblatt Initiates Coverage On DoorDash with Buy Rating, A |
| 2026-08-31 | Earnings | 🟢 +1 | 1.63 | Yahoo | 5 Consumer Stocks Bucked August Gloom With Double-Digit Gain |
| 2026-08-28 | Industry | 🟢 +1 | 0.75 | Yahoo | Amazon (AMZN) is About to 6X Its Drone Delivery Footprint to |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 23.12 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 20 / 10 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Five Below Shares Rise After Q2 Earnings Beat and Guidance Increase
- 🟢 [Earnings|w2.76] Premarket movers: Snowflake, Five Below surge after strong earnings
- 🟢 [Earnings|w2.34] Snowflake (SNOW) price skyrockets after posting strong quarterly resul

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | Five Below Shares Rise After Q2 Earnings Beat and Guidance I |
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | Premarket movers: Snowflake, Five Below surge after strong e |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Five Below Q2 Earnings Call Highlights |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Five Below (FIVE) Q2 Earnings: Taking a Look at Key Metrics  |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | SeekingAlp | Five Below, Inc. (FIVE) Q2 2027 Earnings Call Transcript |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Five Below (FIVE) Q2 Earnings and Revenues Top Estimates |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Snowflake (SNOW) price skyrockets after posting strong quart |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Five Below raises full-year outlook after strong second-quar |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 15.54 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Growth In Thi
- 🟢 [Earnings|w2.34] The Real Question Behind CrowdStrike Stock's Premium Price
- 🟢 [Earnings|w2.34] Palo Alto Sinks 8% Despite 34% Revenue Growth, CrowdStrike Falls 3%, F

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] CrowdStrike Unveils the Next Evolution of the Agentic SOC

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Gro |
| 2026-09-03 | Industry | ⚪  0 | 2.13 | Yahoo | CrowdStrike Is Putting GPT-5.6 Cyber Inside Falcon. Is OpenA |
| 2026-09-03 | Industry | ⚪  0 | 2.13 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | The Real Question Behind CrowdStrike Stock's Premium Price |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike Announces 2026 Customer and Partner Award Winner |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | Is CrowdStrike Holdings (CRWD) Trading At A Premium Or Price |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Brings the Falcon Platform to the Anthropic Clau |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike’s AI Security Boom May Still Have Room to Run |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.96 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Top Funds Sink Their Teeth Into Apple Stock. Sweet Breakout Ahead?
- 🟢 [Earnings|w2.34] Apple May Need a Foldable iPhone to Avoid a Revenue Slowdown Next Year
- 🟢 [Earnings|w2.34] Apple’s New CEO Has Millions Riding on the Stock Beating the Market

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Apple Faces £2 Billion UK Lawsuit Over App Tracking Transparency Rules
- 🔴 [Black Swan|w3.19] Tim Cook's Legacy at Apple Will Be Defined by This Nearly $879 Billion
- 🔴 [Black Swan|w2.7] Apple CEO John Ternus Once Spent Hours Counting 10 Extra Screw Grooves

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | Top Funds Sink Their Teeth Into Apple Stock. Sweet Breakout  |
| 2026-09-03 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Apple Faces £2 Billion UK Lawsuit Over App Tracking Transpar |
| 2026-09-03 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Tim Cook's Legacy at Apple Will Be Defined by This Nearly $8 |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | Apple's new CEO faces his first big test |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Apple May Need a Foldable iPhone to Avoid a Revenue Slowdown |
| 2026-09-02 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Apple CEO John Ternus Has a Big AI Opportunity: BofA Sees ‘D |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Apple’s New CEO Has Millions Riding on the Stock Beating the |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Tim Cook's Final Earnings Call as Apple CEO Came the Same We |

---

## 🔴 Avoid / Short (2)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 15.54 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Growth In Thi
- 🟢 [Earnings|w2.34] The Real Question Behind CrowdStrike Stock's Premium Price
- 🟢 [Earnings|w2.34] Palo Alto Sinks 8% Despite 34% Revenue Growth, CrowdStrike Falls 3%, F

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] CrowdStrike Unveils the Next Evolution of the Agentic SOC

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | CrowdStrike And Palo Alto Networks Aside, AI Boom Powers Gro |
| 2026-09-03 | Industry | ⚪  0 | 2.13 | Yahoo | CrowdStrike Is Putting GPT-5.6 Cyber Inside Falcon. Is OpenA |
| 2026-09-03 | Industry | ⚪  0 | 2.13 | SeekingAlp | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | The Real Question Behind CrowdStrike Stock's Premium Price |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike Announces 2026 Customer and Partner Award Winner |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | Is CrowdStrike Holdings (CRWD) Trading At A Premium Or Price |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Brings the Falcon Platform to the Anthropic Clau |
| 2026-09-02 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike’s AI Security Boom May Still Have Room to Run |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.96 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Top Funds Sink Their Teeth Into Apple Stock. Sweet Breakout Ahead?
- 🟢 [Earnings|w2.34] Apple May Need a Foldable iPhone to Avoid a Revenue Slowdown Next Year
- 🟢 [Earnings|w2.34] Apple’s New CEO Has Millions Riding on the Stock Beating the Market

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Apple Faces £2 Billion UK Lawsuit Over App Tracking Transparency Rules
- 🔴 [Black Swan|w3.19] Tim Cook's Legacy at Apple Will Be Defined by This Nearly $879 Billion
- 🔴 [Black Swan|w2.7] Apple CEO John Ternus Once Spent Hours Counting 10 Extra Screw Grooves

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 2.76 | Yahoo | Top Funds Sink Their Teeth Into Apple Stock. Sweet Breakout  |
| 2026-09-03 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Apple Faces £2 Billion UK Lawsuit Over App Tracking Transpar |
| 2026-09-03 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Tim Cook's Legacy at Apple Will Be Defined by This Nearly $8 |
| 2026-09-02 | Industry | ⚪  0 | 1.8 | Yahoo | Apple's new CEO faces his first big test |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Apple May Need a Foldable iPhone to Avoid a Revenue Slowdown |
| 2026-09-02 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Apple CEO John Ternus Has a Big AI Opportunity: BofA Sees ‘D |
| 2026-09-02 | Earnings | 🟢 +1 | 2.34 | Yahoo | Apple’s New CEO Has Millions Riding on the Stock Beating the |
| 2026-09-02 | Earnings | ⚪  0 | 2.34 | Yahoo | Tim Cook's Final Earnings Call as Apple CEO Came the Same We |

---

## ⚪ Watch / Neutral (16)

### NYSE:LTC
- Score: 58/100 | raw: 1.8 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 58/100 | raw: 1.95 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AJG
- Score: 58/100 | raw: 1.8 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 58/100 | raw: 1.8 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:APD
- Score: 57/100 | raw: 1.63 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:J
- Score: 57/100 | raw: 1.63 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### CBOE:CBOE
- Score: 50/100 | raw: 0 | News: 0 kept / 4 dropped | No relevant news in window

### NASDAQ:PRGS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SQM
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 47/100 | raw: -0.75 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:FCX
- Score: 46/100 | raw: -1 | News: 5 kept / 19 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-03T12:31:28.411Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
