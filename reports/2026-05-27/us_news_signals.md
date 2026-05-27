# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-27  |  **News Window:** 2026-05-20 ~ 2026-05-27
**Stock Pool:** us_selected.txt (69)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMAT** | **99** | 11.87 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/29 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GNRC** | **98** | 11.87 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/21 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:MRVL** | **94** | 11.31 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/20 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:RKLB** | **92** | 12.02 | 🟢 Long (Strong) | Momentum / Hold | High | 11/29 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:NVDA** | **90** | 23.23 | 🟢 Long (Strong) | Momentum / Hold | High | 19/21 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:CIEN** | **90** | 11.53 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/27 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:ENS** | **87** | 8.83 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/30 | Overheated Sentiment (one-sided bullish) |
| 8 | **NASDAQ:IREN** | **86** | 11.03 | 🟢 Long (Strong) | Momentum / Hold | High | 11/18 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ADI** | **85** | 8.45 | 🟢 Long (Strong) | Momentum / Hold | High | 6/20 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:SM** | **84** | 8.58 | 🟢 Long (Strong) | Momentum / Hold | High | 12/11 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:APLD** | **84** | 8.12 | 🟢 Long (Strong) | Momentum / Hold | High | 11/28 | - |
| 12 | **NYSE:DELL** | **83** | 8.6 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/28 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:ASML** | **82** | 7.85 | 🟢 Long (Strong) | Momentum / Hold | High | 12/23 | - |
| 14 | **NASDAQ:MTSI** | **77** | 6.56 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/22 | Overheated Sentiment (one-sided bullish) |
| 15 | **NYSE:COHR** | **77** | 7.27 | 🟢 Long (Strong) | Momentum / Hold | High | 10/20 | - |
| 16 | **NASDAQ:WDC** | **77** | 6.43 | 🟢 Long (Strong) | Momentum / Hold | High | 4/22 | - |
| 17 | **NASDAQ:INCY** | **75** | 6.04 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/22 | Overheated Sentiment (one-sided bullish) |
| 18 | **NYSE:GLW** | **75** | 6.09 | 🟢 Long (Strong) | Momentum / Hold | High | 6/33 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:AVGO** | **75** | 8.45 | 🟢 Long (Strong) | Momentum / Hold | High | 14/16 | - |
| 20 | **NASDAQ:EQIX** | **73** | 5.53 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 6/22 | Sentiment Strengthening UP (trend) |
| 21 | **NASDAQ:LRCX** | **72** | 5.21 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/29 | Overheated Sentiment (one-sided bullish) |
| 22 | **NASDAQ:AMD** | **69** | 5.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/30 | - |
| 23 | **NASDAQ:MU** | **67** | 3.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/33 | - |
| 24 | **CBOE:CBOE** | **67** | 4.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/14 | - |
| 25 | **NASDAQ:FLEX** | **66** | 3.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/17 | - |
| 26 | **NASDAQ:MPWR** | **65** | 3.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/14 | - |
| 27 | **NYSE:BE** | **65** | 3.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/33 | - |
| 28 | **NASDAQ:TTMI** | **64** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/17 | - |
| 29 | **NYSE:P** | **63** | 3.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/27 | - |
| 30 | **NASDAQ:CRDO** | **61** | 2.64 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/25 | Overheated Sentiment (one-sided bullish) |
| 31 | **NYSE:TSM** | **60** | 2.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 32 | **NYSE:DKS** | **60** | 2.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/26 | - |
| 33 | **NYSE:NVT** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/16 | - |
| 34 | **NASDAQ:CPRX** | **57** | 1.69 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 35 | **NASDAQ:SANM** | **56** | 1.45 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/23 | - |
| 36 | **NYSE:HPE** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/32 | - |
| 37 | **NYSE:IRM** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 38 | **NASDAQ:SEDG** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 39 | **NASDAQ:TYGO** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/8 | - |
| 40 | **NYSE:TRNO** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/5 | - |
| 41 | **NYSE:HG** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 42 | **NASDAQ:RMBS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 43 | **NASDAQ:CORZ** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 44 | **NYSE:FAF** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/16 | - |
| 45 | **NASDAQ:GOOGL** | **51** | 0.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/16 | - |
| 46 | **NASDAQ:KLAC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/28 | - |
| 47 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/4 | - |
| 48 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 49 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 50 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 51 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 52 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/16 | - |
| 53 | **NYSE:NOK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 54 | **NYSE:RIO** | **50** | 0.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/14 | - |
| 55 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 56 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 57 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 58 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 59 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 60 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 61 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/15 | - |
| 62 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 63 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 65 | **NASDAQ:VIAV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 66 | **NYSE:MOD** | **46** | -1.25 | ⚪ No Trade (Neutral) | Watch | Low | 5/13 | Bullish-to-Bearish Reversal (reversal) |
| 67 | **NYSE:MS** | **44** | -1.43 | ⚪ No Trade (Neutral) | Watch | Low | 4/22 | - |
| 68 | **NYSE:FN** | **44** | -1.43 | ⚪ No Trade (Neutral) | Watch | Low | 2/12 | - |
| 69 | **NASDAQ:INTC** | **39** | -2.66 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 10/27 | - |

---

## 🟢 Strong Long (11)

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 12.02 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 29 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Rocket Lab Completes Acquisition of Motiv Space Systems
- 🟢 [M&A|w3.57] Rocket Lab Adds Mars-Proven Robotics Capabilities with Completion of M
- 🟢 [Industry|w1.02] Stock Market Today, May 26: Soaring Tech Stocks Push S&P 500 and Nasda

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.6] Rocket Lab: Don't Chase Now Even If You Missed The Blast-Off (Rating D

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Firefly’s Plan to Sell Stock Is a Painful Reminder for Inves |
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Stock Market Today, May 26: Soaring Tech Stocks Push S&P 500 |
| 2026-05-26 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Stock Market Today, May 26: Intuitive Machines Reverses Lowe |
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Space Stock Rally Continues After SpaceX Prospectus, Starshi |
| 2026-05-26 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Rocket Lab Completes Acquisition of Motiv Space Systems |
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Rocket Lab, AST, Other Space Stocks Take Off After SpaceX’s  |
| 2026-05-26 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Rocket Lab Adds Mars-Proven Robotics Capabilities with Compl |
| 2026-05-26 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Rocket Lab: This Flight Is Just Beginning |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 23.23 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] AI Buildout Fuels Record Results for These Companies
- 🟢 [Industry|w3] IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Buildout
- 🟢 [Industry|w2.98] IREN to buy Blackwell systems from Dell for about $1.6 billion

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Nvidia CEO Jensen Huang delivers sharp message to major customer

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Nvidia CEO says Taiwan is 'epicentre' of AI revolution |
| 2026-05-27 | Industry | ⚪  0 | 1.2 | Yahoo Fina | The SpaceX IPO Could Be the Biggest in History. Here's What  |
| 2026-05-27 | Industry | 🟢 +1 | 3 | Yahoo Fina | IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Bui |
| 2026-05-27 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Nvidia CEO Jensen Huang delivers sharp message to major cust |
| 2026-05-26 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell Fo |
| 2026-05-26 | Industry | 🟢 +1 | 2.98 | Finnhub | IREN to buy Blackwell systems from Dell for about $1.6 billi |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Tom Lee Says Mag-7 Bear Market Is Over, But Trouble Is Brewi |
| 2026-05-26 | Earnings | 🟢 +1 | 3.87 | Finnhub | AI Buildout Fuels Record Results for These Companies |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 11.03 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] Paul Tudor Jones Just Bought 57% More IREN Shares, Betting Big On The 
- 🟢 [M&A|w2.98] IREN signs $1.6B deal with Dell to deploy Blackwell systems; ARR seen 
- 🟢 [M&A|w1.68] IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Buildout

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Forget Nvidia: IREN CEO Says A New AI Factory Built Today May Not Go L
- 🔴 [Industry|w0.86] IREN’s CEO Just Said 11 Words that Delivered the AI Boom a Brutal Real

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | M&A | 🟢 +1 | 1.68 | Yahoo Fina | IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Bui |
| 2026-05-26 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell Fo |
| 2026-05-26 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | IREN to buy Blackwell systems from Dell for about $1.6 billi |
| 2026-05-26 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | IREN Stock Is Already Up 58% in 2026. Nvidia Could Keep Taki |
| 2026-05-26 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | Paul Tudor Jones Just Bought 57% More IREN Shares, Betting B |
| 2026-05-26 | Industry | 🟢 +1 | 0.6 | Finnhub | What's Going On With IREN Stock Tuesday? |
| 2026-05-26 | M&A | 🟢 +1 | 2.98 | Seeking Al | IREN signs $1.6B deal with Dell to deploy Blackwell systems; |
| 2026-05-25 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | IREN’s CEO Just Said 11 Words that Delivered the AI Boom a B |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.45 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Analog Devices' AI Data Center Momentum Builds: What Lies Ahead?
- 🟢 [Earnings|w3.28] Analog Devices, Inc. (ADI) Anticipates Q3 Revenue Above Estimates
- 🟢 [Industry|w0.7] Analog Devices (ADI) Stock Trades Up, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Earnings | 🟢 +1 | 3.87 | Finnhub | Analog Devices' AI Data Center Momentum Builds: What Lies Ah |
| 2026-05-26 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Is It Worth Investing in Analog Devices (ADI) Based on Wall  |
| 2026-05-26 | Industry | 🟢 +1 | 0.6 | Finnhub | AI Chip Stocks Jump as Qualcomm Explodes Higher, AMD Leads S |
| 2026-05-25 | Earnings | 🟢 +1 | 3.28 | Finnhub | Analog Devices, Inc. (ADI) Anticipates Q3 Revenue Above Esti |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Finnhub | Jim Cramer Discusses Analog Devices’ (ADI) Market |
| 2026-05-23 | Industry | 🟢 +1 | 0.7 | Finnhub | Analog Devices (ADI) Stock Trades Up, Here Is Why |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.58 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] SM Energy Declares Quarterly Cash Dividend
- 🟢 [Buyback|w2.55] SM Energy declares $0.22 dividend
- 🟢 [Earnings|w1.91] SM Energy: Debt Reduction Will Unlock Significant Shareholder Value

**📉 Bearish Factors:**
- 🔴 [M&A|w0.84] SM Energy Uinta Deal Reshapes Scale Valuation And Shareholder Dilution
- 🔴 [Industry|w0.6] SM Energy, Transocean, and Valaris Shares Are Falling, What You Need T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | SM Energy Declares Quarterly Cash Dividend |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Valero Energy a Better Pick Than SM Despite Oil Trading A |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | SM Energy Company (SM) is Attracting Investor Attention: Her |
| 2026-05-26 | Buyback | 🟢 +1 | 2.55 | Seeking Al | SM Energy declares $0.22 dividend |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Reasons We’re Fans of SM Energy (SM) |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Why SM Energy (SM) is a Top Momentum Stock for the Long-Term |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | SM Group raises renewable energy sourcing to 31% in 2025 |
| 2026-05-23 | M&A | 🔴 -1 | 0.84 | Yahoo Fina | SM Energy Uinta Deal Reshapes Scale Valuation And Shareholde |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.12 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 28 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] Applied Digital Signed a Major Lease With a Hyperscaler for Its New Po
- 🟢 [Earnings|w1.64] Applied Digital (APLD) on All-Time High as AI Lease Revenues Hit $73B
- 🟢 [Industry|w1.26] Applied Digital Just Hit 1GW Of Contracted Capacity - Why It Matters

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] 3 Reasons APLD is Risky and 1 Stock to Buy Instead

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | 3 Reasons APLD is Risky and 1 Stock to Buy Instead |
| 2026-05-25 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | Applied Digital Signed a Major Lease With a Hyperscaler for  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | Applied Digital (APLD) Price Target Raised at Needham by $3 |
| 2026-05-23 | Industry | 🟢 +1 | 0.7 | Finnhub | Applied Digital: Massive Revenue Backlog Escalation Underway |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | APLD, BE, GFS Stocks Hit 52-Week Highs: What's Driving The S |
| 2026-05-22 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Applied Digital (APLD) on All-Time High as AI Lease Revenues |
| 2026-05-21 | Industry | 🟢 +1 | 1.26 | Finnhub | Applied Digital Just Hit 1GW Of Contracted Capacity - Why It |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Lake Street Maintains Buy on Applied Digital, Raises Price T |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.85 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 23 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] ASML reports transactions under its current share buyback program
- 🟢 [Analyst Action|w1.04] Billionaire Philippe Laffont Is Betting Big on ASML Stock as UBS Decla
- 🟢 [Industry|w1.02] Mutual funds still hate battered software stocks: By the numbers

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] IEFA’s 22% Gain Hides a Currency Bet That Could Reverse in 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | IEFA’s 22% Gain Hides a Currency Bet That Could Reverse in 2 |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | IDVO’s International Dividend Strategy Carries an Unhedged C |
| 2026-05-26 | Buyback | ⚪  0 | 1.22 | Yahoo Fina | 4 Mega-Cap Stocks Positioned for a Potential Split |
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Mutual funds still hate battered software stocks: By the num |
| 2026-05-26 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | ASML reports transactions under its current share buyback pr |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At ASML Holding’s Valuation As Strong Share Price Mom |
| 2026-05-25 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Billionaire Philippe Laffont Is Betting Big on ASML Stock as |
| 2026-05-24 | Industry | 🟢 +1 | 0.84 | Finnhub | This Billionaire Dumped Cloud Stocks for These New AI Stocks |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 7.27 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Coherent NVIDIA Pact Links AI Optics Growth With Stretched Valuation M
- 🟢 [Earnings|w3.28] Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results
- 🟢 [Analyst Action|w0.84] Coherent's AI Infrastructure Positioning Has Changed The Valuation Deb

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.01] Coherent: Wait For Earnings To Catch Up To Valuations
- 🔴 [Industry|w0.59] Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastructure Play

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Ciena vs. Coherent: Which Optical Networking Stock is the Be |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Ciena: The Right Stock At The Wrong Price |
| 2026-05-26 | M&A | 🟢 +1 | 4.16 | Finnhub | Coherent NVIDIA Pact Links AI Optics Growth With Stretched V |
| 2026-05-25 | Earnings | ⚪  0 | 1.31 | Finnhub | Q1 Earnings Roundup: Coherent (NYSE:COHR) And The Rest Of Th |
| 2026-05-25 | Earnings | 🟢 +1 | 3.28 | Finnhub | Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results |
| 2026-05-24 | Analyst Action | 🔴 -1 | 1.01 | Finnhub | Coherent: Wait For Earnings To Catch Up To Valuations |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Coherent's AI Infrastructure Positioning Has Changed The Val |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | COHERENT CORP (NYSE:COHR) Dominates Minervini Screen with Pe |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.43 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why Is Western Digital (WDC) Stock Soaring Today
- 🟢 [Analyst Action|w3.57] Evercore ISI Group Maintains Outperform on Western Digital, Raises Pri

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.71] Western Digital Insiders Sold US$18m Of Shares Suggesting Hesitancy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Is Western Digital (WDC) Stock Soaring Today |
| 2026-05-26 | Rumor | 🔴 -1 | 0.71 | Finnhub | Western Digital Insiders Sold US$18m Of Shares Suggesting He |
| 2026-05-26 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Evercore ISI Group Maintains Outperform on Western Digital,  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Finnhub | Is Western Digital (WDC) the Best Performing Data Center Sto |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.09 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 33 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This Growth Sto
- 🟢 [M&A|w2.1] How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW) Has Change
- 🟢 [Earnings|w1.64] Robust Results Boosted Corning’s (GLW) Performance in Q1

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.6] Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice Me to Buy”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | GLW Rides on Solid Traction in the Solar Vertical: Will it P |
| 2026-05-23 | M&A | 🟢 +1 | 2.1 | Yahoo Fina | How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW)  |
| 2026-05-23 | M&A | 🟢 +1 | 2.45 | Finnhub | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-22 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Robust Results Boosted Corning’s (GLW) Performance in Q1 |
| 2026-05-22 | Industry | ⚪  0 | 0.59 | Finnhub | Nvidia's Latest AI Partner Was a Bargain Hiding in Plain Sig |
| 2026-05-21 | Analyst Action | 🔴 -1 | 0.6 | Finnhub | Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice  |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 8.45 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] One Expert Sees Broadcom at $630 — and the AI Infrastructure Math Back
- 🟢 [Industry|w2.98] Broadcom Accelerates the AI Era with the Industry’s First End-to-End 5
- 🟢 [Earnings|w1.55] Broadcom Inc. (AVGO) Beats Stock Market Upswing: What Investors Need t

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Cisco Soars 32% in a Month, Arista Falls 10%, Broadcom Drifts: The AI 
- 🔴 [Industry|w1.19] Broadcom's Hidden Risk:  VMware Under Pressure?
- 🔴 [Analyst Action|w0.5] Broadcom: Be Fearful When Others Are Hyped (Ratings Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.7 | Finnhub | Applied Materials (AMAT) Is Up 11.8% After Raising Q3 Outloo |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Seeking AI Exposure? Use This Zacks Tool |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Qualcomm (QCOM) Stock Is Up Today |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Allegro MicroSystems and Penguin Solutions Stocks Trade Up,  |
| 2026-05-26 | Earnings | 🟢 +1 | 1.55 | Finnhub | Broadcom Inc. (AVGO) Beats Stock Market Upswing: What Invest |
| 2026-05-26 | Industry | 🔴 -1 | 1.19 | Finnhub | Cisco Soars 32% in a Month, Arista Falls 10%, Broadcom Drift |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | This Artificial Intelligence (AI) Chip Stock Just Joined Nvi |
| 2026-05-26 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | One Expert Sees Broadcom at $630 — and the AI Infrastructure |

---

## 🟢 Mid Long (10)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] AMD Stock Soars to Record High as Next-Gen AI Chip Enters Production
- 🟢 [Industry|w2.98] OneQode to Deploy AMD Instinct GPUs and Plans for AMD Helios Rack-Scal
- 🟢 [Industry|w1.19] Small-Cap Stock Riot Platforms Is Surfing The A.I. Infrastructure Wave

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Nvidia has a $200 Billion Warning for AMD and Intel Stock Investors
- 🔴 [Industry|w1.19] Intel, AMD, and Other Momentum Stocks Look Unstoppable. Look Again.
- 🔴 [Industry|w1.19] Nvidia Vs. AMD: Nvidia Will Eat AMD's CPU Lunch

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | OneQode Deal Highlights AMD AI Expansion Beyond Hyperscaler  |
| 2026-05-26 | Industry | 🔴 -1 | 1.19 | Finnhub | Nvidia has a $200 Billion Warning for AMD and Intel Stock In |
| 2026-05-26 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD Stock Soars to Record High as Next-Gen AI Chip Enters Pr |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Small-Cap Stock Riot Platforms Is Surfing The A.I. Infrastru |
| 2026-05-26 | Industry | 🔴 -1 | 1.19 | Finnhub | Intel, AMD, and Other Momentum Stocks Look Unstoppable. Look |
| 2026-05-26 | Industry | 🟢 +1 | 2.98 | Finnhub | OneQode to Deploy AMD Instinct GPUs and Plans for AMD Helios |
| 2026-05-26 | Industry | 🔴 -1 | 1.19 | Finnhub | Nvidia Vs. AMD: Nvidia Will Eat AMD's CPU Lunch |
| 2026-05-26 | Industry | ⚪  0 | 0.85 | Seeking Al | AMD: Still Good As Number 2 |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 33 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] The Trillionaires Gain A New Member
- 🟢 [Industry|w1.19] Nasdaq, S&P 500 Log New Peaks as Micron Drives Tech Rally
- 🟢 [Industry|w0.85] Micron: Massive Upside, But A Brutal Cycle Eventually Comes

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | S&P 500, Nasdaq Close At Record Highs Amid Hopes Of Diplomat |
| 2026-05-26 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | The Trillionaires Gain A New Member |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | S&P 500 And Nasdaq Close At Record Highs, Dow Climbs Amid Ho |
| 2026-05-26 | Industry | ⚪  0 | 1.19 | Finnhub | Tracking David Tepper's Appaloosa Management Portfolio - Q1  |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Nasdaq, S&P 500 Log New Peaks as Micron Drives Tech Rally |
| 2026-05-26 | Industry | 🟢 +1 | 0.85 | Seeking Al | Micron: Massive Upside, But A Brutal Cycle Eventually Comes |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | Why The Market Is Completely Misreading Micron's Latest Run |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 14 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Are Wall Street Analysts Predicting Cboe Global Markets Stock Will Cli
- 🟢 [Industry|w1.01] 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE)
- 🟢 [Industry|w0.7] How Investors Are Reacting To Cboe Global Markets (CBOE) Expanding Dai

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.4 | Finnhub | Faircourt Asset Management Inc. Announces May Distribution |
| 2026-05-26 | Industry | ⚪  0 | 1.19 | Finnhub | Cboe Hires Boudewijn Duinstra as Executive Vice President, C |
| 2026-05-26 | Industry | ⚪  0 | 1.19 | Finnhub | OSB GROUP PLC - Transaction in Own Shares |
| 2026-05-26 | Industry | ⚪  0 | 0.85 | Seeking Al | Cboe names Boudewijn Duinstra its new chief risk officer |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE |
| 2026-05-23 | Industry | 🟢 +1 | 0.7 | Finnhub | How Investors Are Reacting To Cboe Global Markets (CBOE) Exp |
| 2026-05-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | Are Wall Street Analysts Predicting Cboe Global Markets Stoc |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | CBOE Stock Rises 58.1% in a Year: A Signal for Investors to  |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 17 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Flex Teradyne Robotics Tie Up Reframes Automation Risks And Rewards
- 🟢 [M&A|w2.06] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent
- 🟢 [M&A|w0.98] Flex Pitches AI Data Center Spin-Off as Power and Cooling Growth Accel

**📉 Bearish Factors:**
- 🔴 [M&A|w1.76] Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And Insider Sale

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Finnhub | Here's How Much a $1000 Investment in Flex Made 10 Years Ago |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | Assessing Flex (FLEX) Valuation After A Sharp Multi Month Sh |
| 2026-05-23 | M&A | 🟢 +1 | 0.98 | Finnhub | Flex Pitches AI Data Center Spin-Off as Power and Cooling Gr |
| 2026-05-23 | M&A | 🟢 +1 | 2.45 | Finnhub | Flex Teradyne Robotics Tie Up Reframes Automation Risks And  |
| 2026-05-22 | M&A | 🟢 +1 | 2.06 | Finnhub | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Flex to Participate in Upcoming Investor Conferences |
| 2026-05-21 | M&A | 🔴 -1 | 1.76 | Finnhub | Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And In |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 14 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Vicor Stock Surges on Guidance Boost, Lifts Power Chip Stocks Like Wol
- 🟢 [Industry|w1.01] Are Wall Street Analysts Bullish on Monolithic Power Systems Stock?
- 🟢 [Analyst Action|w0.84] Needham Remains Bullish on Monolithic Power Systems (MPWR)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Vicor Stock Surges on Guidance Boost, Lifts Power Chip Stock |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Are Wall Street Analysts Bullish on Monolithic Power Systems |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Needham Remains Bullish on Monolithic Power Systems (MPWR) |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | Teradyne, Monolithic Power Systems, Vishay Intertechnology,  |
| 2026-05-22 | Earnings | ⚪  0 | 1.91 | Finnhub | Monolithic Power Systems: Strong Q1, But Little Room For Err |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Pembroke Trims Position in Workiva, According to Latest SEC  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Investment Firm Sells SaaS Stock Worth $14.2 Million, Accord |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 33 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Bloom Energy: Pause Warranted
- 🟢 [Analyst Action|w1.04] Daiwa Upgrades Bloom Energy (BE) to Outperform
- 🟢 [Industry|w0.86] BE Stock Outpaces Its Industry in the Past 6 Months: How to Play?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.2 | MarketWatc | My friend, 62, earns $20,000 a year. Should she take Social  |
| 2026-05-25 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Daiwa Upgrades Bloom Energy (BE) to Outperform |
| 2026-05-25 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | BE Stock Outpaces Its Industry in the Past 6 Months: How to  |
| 2026-05-25 | Industry | ⚪  0 | 0.86 | MarketWatc | Oil Slides as Ships Move Toward Hormuz |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | MarketWatc | SpaceX Is Aiming for Civilization on Mars. Its IPO Couldn&#x |
| 2026-05-22 | Policy | ⚪  0 | 0.6 | MarketWatc | Opinion   The SEC Gag Rule Bites the Dust |
| 2026-05-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | Bloom Energy: Pause Warranted |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] TTM Technologies (TTMI) Valuation Check After Record Q1 2026 Results A
- 🟢 [Analyst Action|w0.7] Is TTM (TTMI) a Solid Growth Stock? 3 Reasons to Think "Yes"
- 🟢 [Analyst Action|w0.7] Are You Looking for a Top Momentum Pick? Why TTM Technologies (TTMI) i

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Earnings | 🟢 +1 | 1.31 | Finnhub | TTM Technologies (TTMI) Valuation Check After Record Q1 2026 |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Is TTM (TTMI) a Solid Growth Stock? 3 Reasons to Think "Yes" |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Are You Looking for a Top Momentum Pick? Why TTM Technologie |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 27 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.33] Everpure (P) To Report Earnings Tomorrow: Here Is What To Expect
- 🟢 [Earnings|w1.31] Everpure Gears Up to Report Q1 Earnings: What's in the Offing?
- 🟢 [Industry|w0.5] Everpure Bets On Cyber Resilience And AI Data Tools To Deepen Moat

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | NetApp Stock Rallies Ahead Of Earnings As Data Storage Rival |
| 2026-05-26 | Industry | ⚪  0 | 1.02 | Yahoo Fina | YMM or P: Which Is the Better Value Stock Right Now? |
| 2026-05-26 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Everpure (P) To Report Earnings Tomorrow: Here Is What To Ex |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | SPMD: A 25% Discount To The S&P 500 That Should Be Monitored |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | MarketWatc | How a stock market &#x2018;melt-up&#x2019; could carry the S |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | MarketWatc | Why double-digit earnings growth won&#x2019;t stop the next  |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | MarketWatc | Stock Market News, May 26, 2026: Tech Rally Leads S&amp;P 50 |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | MarketWatc | The Idaho Chip Maker That Doubled to $1 Trillion in 48 Days |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] TSM Stock's Upward Momentum Validates Top Analyst's 'Most Trustworthy 
- 🟢 [Industry|w1.19] Taiwan Semiconductor's Growth Propels Taiwan Stock Market To Overtake 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 1.19 | Finnhub | Tracking David Tepper's Appaloosa Management Portfolio - Q1  |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Taiwan Semiconductor's Growth Propels Taiwan Stock Market To |
| 2026-05-25 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | TSM Stock's Upward Momentum Validates Top Analyst's 'Most Tr |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 26 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] DICK'S SPORTING GOODS INC (NYSE:DKS) Passes the Peter Lynch Test for G
- 🟢 [Analyst Action|w0.7] Dick's (DKS) Stock Is Up, What You Need To Know
- 🟢 [Industry|w0.59] DICK'S Sporting Goods Introduces Coach by DICK'S, an Agentic AI Conver

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Case-Shiller Home Prices Rise Moderately |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Pre-Markets to Open at Record Highs: Retail Earnings, Case-S |
| 2026-05-26 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Dick's (DKS) Q1 Earnings Report Preview: What To Look For |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | DICK'S SPORTING GOODS INC (NYSE:DKS) Passes the Peter Lynch  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can DICK'S (DKS) AI Coach and Foot Locker Tie-Up Really Rede |
| 2026-05-22 | Earnings | ⚪  0 | 0.5 | Yahoo Fina | Will Dick's (DKS) Beat Estimates Again in Its Next Earnings  |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | DICK'S Sporting Goods Introduces Coach by DICK'S, an Agentic |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | How To Earn $500 A Month From Dick's Sporting Stock Ahead Of |

---

## 🟡 Cautious Long (4)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.6 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Buildout
- 🟢 [Industry|w2.55] IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell For $1.6B To
- 🟢 [Industry|w2.55] IREN to buy Blackwell systems from Dell for about $1.6 billion

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 3.5 | Finnhub | IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Bui |
| 2026-05-26 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell Fo |
| 2026-05-26 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN to buy Blackwell systems from Dell for about $1.6 billi |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch: Zscaler, Ferrari, Dell, DuPont |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell and Diebold Nixdorf Stocks Trade Up, What You Need To K |
| 2026-05-26 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Dell and HP Stocks Jumped Ahead Of Their Earnings Reports Th |
| 2026-05-26 | Earnings | ⚪  0 | 1.55 | Finnhub | DELL Gears Up to Report Q1 Earnings: Should You Buy the Stoc |
| 2026-05-25 | Earnings | ⚪  0 | 0.5 | Seeking Al | Earnings week ahead: ZS, CRM, SNOW, DELL, ZS, XPEV, LI, and  |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.53 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Deutsche Bank Raises its Price Target on Equinix (EQIX)
- 🟢 [Industry|w1.01] Did Equinix’s (EQIX) Expanded Data-Sovereign Fabric Geo Zones Just Ref
- 🟢 [Industry|w0.5] Equinix Stock Outlook: Is Wall Street Bullish or Bearish?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Deutsche Bank Raises its Price Target on Equinix (EQIX) |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Equinix Stock Outlook: Is Wall Street Bullish or Bearish? |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Did Equinix’s (EQIX) Expanded Data-Sovereign Fabric Geo Zone |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer on Equinix: “It’s a Great Way to Play the Data Ce |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | MEDIA ALERT: Equinix to Speak at Upcoming Investor Conferenc |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Equinix Expands Fabric Geo Zones To Deepen AI And Compliance |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.21 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Is Wall Street Bullish or Bearish on Lam Research Stock?
- 🟢 [Industry|w1.19] Lam Research Corp (NASDAQ:LRCX) Meets Minervini Trend Template and Hig
- 🟢 [Industry|w1.02] Lam Research Corporation (LRCX) Rallied on AI-Driven Strong Demand

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Lam Research Corporation (LRCX) Rallied on AI-Driven Strong  |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Lam Research Corp (NASDAQ:LRCX) Meets Minervini Trend Templa |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Does Lam Research (LRCX) Have the Right Playbook for AI-Era  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | Is Wall Street Bullish or Bearish on Lam Research Stock? |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Why Is Lam Research (LRCX) Up 16.9% Since Last Earnings Repo |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | Lam Research Salzburg Lab Targets AI Packaging And Richly Va |
| 2026-05-22 | Rumor | 🟢 +1 | 0.5 | Finnhub | Market Chatter: Lam Research Plans AI-Driven Tool Upgrades,  |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.6] Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation Expectati
- 🟢 [Analyst Action|w0.52] Credo Technology and Birkenstock have been highlighted as Zacks Bull a
- 🟢 [Analyst Action|w0.52] Bull of the Day: Credo Technology Group (CRDO)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Zacks Investment Ideas feature highlights: Nvidia, Innodata, |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy  |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Has Nvidia Become Too Big? 3 Alternative AI Stocks |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Credo Technology and Birkenstock have been highlighted as Za |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CRDO vs. COHR: Which AI Connectivity Stock Is the Better Buy |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Bull of the Day: Credo Technology Group (CRDO) |

---

## ⚠️ Overheated (7)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 11.87 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 29 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Applied Materials (AMAT) Is Up 11.8% After Raising Q3 Outlook And Expa
- 🟢 [Earnings|w2.81] Applied Materials, Inc. (AMAT) Sees Quarterly Revenue Exceeding Foreca
- 🟢 [M&A|w1.66] Applied Materials Partners with SCREEN To Bring Advanced Wafer Cleanin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Applied Materials (AMAT) Is Up 11.8% After Raising Q3 Outloo |
| 2026-05-26 | M&A | 🟢 +1 | 1.66 | Finnhub | Applied Materials Partners with SCREEN To Bring Advanced Waf |
| 2026-05-26 | M&A | 🟢 +1 | 1.66 | Finnhub | Applied Materials Collaborates With SCREEN Semiconductor Sol |
| 2026-05-25 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Applied Materials, Inc. (AMAT) Sees Quarterly Revenue Exceed |
| 2026-05-24 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Argus Research Sees Long-Term Growth Ahead for Applied Mater |
| 2026-05-23 | M&A | 🟢 +1 | 0.98 | Finnhub | Applied Materials Taps UCLA AI Chip Hub As Valuation Debate  |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 11.87 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] The Industrial Stock Nobody Is Talking About -- but Should Be
- 🟢 [Analyst Action|w2.1] Generac (GNRC) Stock Trades Up, Here Is Why
- 🟢 [Earnings|w1.91] Can Generac (GNRC) Turn Data Center Backup Demand Into a Durable Comme

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Finnhub | Are Industrial Products Stocks Lagging  Constellium (CSTM) T |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Generac Holdings (GNRC) Crossed Above the 20-Day Moving Aver |
| 2026-05-24 | Earnings | 🟢 +1 | 2.73 | Finnhub | The Industrial Stock Nobody Is Talking About -- but Should B |
| 2026-05-23 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Generac (GNRC) Stock Trades Up, Here Is Why |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Jefferies Upgrades Generac Holdings (GNRC) |
| 2026-05-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | Can Generac (GNRC) Turn Data Center Backup Demand Into a Dur |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Analyst Upgrades AI Data Center Play On Potential Deals. Sto |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Stephens & Co. Reiterates Overweight on Generac Holdings, Ma |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 11.31 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why You Should Buy Marvell Technology Stock Before May 27
- 🟢 [Analyst Action|w3.57] Why Is MRVL Stock Rising Today?
- 🟢 [Earnings|w1.55] Will Marvell Technology Stock Keep Soaring as Q1 Results Approach?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Earnings | ⚪  0 | 1.55 | Finnhub | Salesforce, HP earnings to give insight into AI demand, PC m |
| 2026-05-26 | Earnings | 🟢 +1 | 1.55 | Finnhub | Will Marvell Technology Stock Keep Soaring as Q1 Results App |
| 2026-05-26 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why You Should Buy Marvell Technology Stock Before May 27 |
| 2026-05-26 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | This Dividend-Paying Chip Stock Just Doubled and Analysts Sa |
| 2026-05-26 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Is MRVL Stock Rising Today? |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Marvell Technology Stock Just Popped |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 11.53 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Ciena vs. Coherent: Which Optical Networking Stock is the Better Bet?
- 🟢 [Industry|w2.52] Biznet Enhances Digital Infrastructure and Connectivity with Ciena
- 🟢 [M&A|w1.76] Ciena Taps Cirion NaaS To Extend Role In Cloud And AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Earnings | 🟢 +1 | 3.87 | Finnhub | Ciena vs. Coherent: Which Optical Networking Stock is the Be |
| 2026-05-26 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | B of A Securities Maintains Buy on Ciena, Raises Price Targe |
| 2026-05-26 | Industry | ⚪  0 | 1.19 | Finnhub | Ciena: The Right Stock At The Wrong Price |
| 2026-05-25 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Here’s Why Ciena (CIEN) is Among the 10 Best Performing Data |
| 2026-05-25 | Industry | 🟢 +1 | 2.52 | Finnhub | Biznet Enhances Digital Infrastructure and Connectivity with |
| 2026-05-24 | Rumor | ⚪  0 | 0.5 | Yahoo Fina | Can Ciena’s (CIEN) AI-Centric NaaS Deals Quietly Redefine It |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Ciena (CIEN) Valuation Check After New AI And Cloud Networki |
| 2026-05-23 | Industry | ⚪  0 | 0.7 | Finnhub | This AI Infrastructure Stock Is Up 570% in 1 Year. Is It Tim |

---

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.83 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] EnerSys (ENS) Valuation Check After Record Earnings Beat And Strong Da
- 🟢 [Earnings|w1.64] EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y
- 🟢 [Earnings|w1.64] Enersys Q4 Earnings Call Highlights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Here's Why EnerSys (ENS) is a Strong Momentum Stock |
| 2026-05-24 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | EnerSys (ENS) Valuation Check After Record Earnings Beat And |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | EnerSys Edge Battery Launch Meets Strong Share Momentum And  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Enersys (ENS) Soars to 52-Week High, Time to Cash Out? |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Oppenheimer Maintains Outperform on EnerSys, Raises Price Ta |
| 2026-05-21 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS a |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | ENS vs. ETN: Which Stock Is the Better Value Option? |
| 2026-05-21 | Earnings | 🟢 +1 | 1.64 | Finnhub | EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.56 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.06] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [Analyst Action|w1.76] Barclays Maintains Overweight on MACOM Technology Solns, Raises Price 
- 🟢 [Earnings|w1.4] MACOM Technology Solutions (MTSI) Delivered Record Revenue and Profita

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | M&A | 🟢 +1 | 0.84 | Yahoo Fina | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here’s Why MACOM (MTSI) is Among the 8 High Return Semicondu |
| 2026-05-22 | M&A | 🟢 +1 | 2.06 | Finnhub | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Overweight on MACOM Technology Solns, Rai |
| 2026-05-21 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | MACOM Technology Solutions (MTSI) Delivered Record Revenue a |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.04 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Analyst Action|w1.51] HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 Price Tar
- 🟢 [Industry|w0.51] Here's Why Incyte (INCY) is a Strong Momentum Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Momentum Stock |
| 2026-05-25 | Industry | 🟢 +1 | 2.52 | Finnhub | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |
| 2026-05-22 | Analyst Action | ⚪  0 | 1.76 | Finnhub | Bernstein Initiates Coverage On Incyte with Market Perform R |
| 2026-05-21 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | HC Wainwright & Co. Reiterates Buy on Incyte, Maintains $135 |

---

## ⚠️ Risk Pattern (4)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.6 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Buildout
- 🟢 [Industry|w2.55] IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell For $1.6B To
- 🟢 [Industry|w2.55] IREN to buy Blackwell systems from Dell for about $1.6 billion

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 3.5 | Finnhub | IREN’s US$1.6b Blackwell Bet Tests Power Advantage In AI Bui |
| 2026-05-26 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Stock Gains: Buys NVDA's Blackwell Systems From Dell Fo |
| 2026-05-26 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN to buy Blackwell systems from Dell for about $1.6 billi |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch: Zscaler, Ferrari, Dell, DuPont |
| 2026-05-26 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell and Diebold Nixdorf Stocks Trade Up, What You Need To K |
| 2026-05-26 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Dell and HP Stocks Jumped Ahead Of Their Earnings Reports Th |
| 2026-05-26 | Earnings | ⚪  0 | 1.55 | Finnhub | DELL Gears Up to Report Q1 Earnings: Should You Buy the Stoc |
| 2026-05-25 | Earnings | ⚪  0 | 0.5 | Seeking Al | Earnings week ahead: ZS, CRM, SNOW, DELL, ZS, XPEV, LI, and  |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.53 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Deutsche Bank Raises its Price Target on Equinix (EQIX)
- 🟢 [Industry|w1.01] Did Equinix’s (EQIX) Expanded Data-Sovereign Fabric Geo Zones Just Ref
- 🟢 [Industry|w0.5] Equinix Stock Outlook: Is Wall Street Bullish or Bearish?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-25 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Deutsche Bank Raises its Price Target on Equinix (EQIX) |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Equinix Stock Outlook: Is Wall Street Bullish or Bearish? |
| 2026-05-25 | Industry | 🟢 +1 | 1.01 | Finnhub | Did Equinix’s (EQIX) Expanded Data-Sovereign Fabric Geo Zone |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer on Equinix: “It’s a Great Way to Play the Data Ce |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | MEDIA ALERT: Equinix to Speak at Upcoming Investor Conferenc |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Equinix Expands Fabric Geo Zones To Deepen AI And Compliance |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.21 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Is Wall Street Bullish or Bearish on Lam Research Stock?
- 🟢 [Industry|w1.19] Lam Research Corp (NASDAQ:LRCX) Meets Minervini Trend Template and Hig
- 🟢 [Industry|w1.02] Lam Research Corporation (LRCX) Rallied on AI-Driven Strong Demand

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Lam Research Corporation (LRCX) Rallied on AI-Driven Strong  |
| 2026-05-26 | Industry | 🟢 +1 | 1.19 | Finnhub | Lam Research Corp (NASDAQ:LRCX) Meets Minervini Trend Templa |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Does Lam Research (LRCX) Have the Right Playbook for AI-Era  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-22 | Earnings | 🟢 +1 | 1.91 | Finnhub | Is Wall Street Bullish or Bearish on Lam Research Stock? |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | Why Is Lam Research (LRCX) Up 16.9% Since Last Earnings Repo |
| 2026-05-22 | Industry | 🟢 +1 | 0.59 | Finnhub | Lam Research Salzburg Lab Targets AI Packaging And Richly Va |
| 2026-05-22 | Rumor | 🟢 +1 | 0.5 | Finnhub | Market Chatter: Lam Research Plans AI-Driven Tool Upgrades,  |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.6] Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation Expectati
- 🟢 [Analyst Action|w0.52] Credo Technology and Birkenstock have been highlighted as Zacks Bull a
- 🟢 [Analyst Action|w0.52] Bull of the Day: Credo Technology Group (CRDO)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Zacks Investment Ideas feature highlights: Nvidia, Innodata, |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy  |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Has Nvidia Become Too Big? 3 Alternative AI Stocks |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Credo Technology and Birkenstock have been highlighted as Za |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CRDO vs. COHR: Which AI Connectivity Stock Is the Better Buy |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Bull of the Day: Credo Technology Group (CRDO) |

---

## 🔴 Avoid / Short (1)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **39** / 100 |
| Raw Weighted Score | -2.66 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 10 / 27 |

**📈 Bullish Factors:**
- 🟢 [Rumor|w0.71] Intel's $43 Billion Government Windfall Gains Momentum With Apple Deal
- 🟢 [Industry|w0.5] Nvidia's Vera CPUs, Intel's Wildcat Lake to be the focus at COMPUTEX: 

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Nvidia has a $200 Billion Warning for AMD and Intel Stock Investors

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | 60 Thoughts as I Turn 60 |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Here's Who Shouldn't Invest in SpaceX |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Cathie Wood Goes Bargain Hunting: 2 Stocks She Just Bought |
| 2026-05-26 | Earnings | ⚪  0 | 1.55 | Finnhub | Dell and HP Stocks Jumped Ahead Of Their Earnings Reports Th |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia Gets All the Credit, but These 4 Stocks Are Quietly C |
| 2026-05-26 | Earnings | 🔴 -1 | 3.87 | Finnhub | Nvidia has a $200 Billion Warning for AMD and Intel Stock In |
| 2026-05-26 | Rumor | 🟢 +1 | 0.71 | Finnhub | Intel's $43 Billion Government Windfall Gains Momentum With  |
| 2026-05-26 | Industry | ⚪  0 | 0.6 | Finnhub | This Artificial Intelligence (AI) Chip Stock Just Joined Nvi |

---

## ⚪ Watch / Neutral (36)

### NYSE:NVT
- Score: 59/100 | raw: 2.26 | News: 3 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 57/100 | raw: 1.69 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 56/100 | raw: 1.45 | News: 2 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 55/100 | raw: 1.09 | News: 5 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 55/100 | raw: 1.19 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 55/100 | raw: 1.19 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TYGO
- Score: 55/100 | raw: 1.19 | News: 1 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 53/100 | raw: 0.6 | News: 1 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 53/100 | raw: 0.6 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 52/100 | raw: 0.5 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 52/100 | raw: 0.5 | News: 2 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GOOGL
- Score: 51/100 | raw: 0.19 | News: 13 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KLAC
- Score: 50/100 | raw: 0 | News: 0 kept / 28 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 4 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 2 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 50/100 | raw: 0 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 50/100 | raw: 0.11 | News: 4 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 0 kept / 8 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 8 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 15 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:VIAV
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NYSE:MOD
- Score: 46/100 | raw: -1.25 | News: 5 kept / 13 dropped | No clear directional bias — stay flat
- Patterns: Bullish-to-Bearish Reversal (reversal)

### NYSE:MS
- Score: 44/100 | raw: -1.43 | News: 4 kept / 22 dropped | No clear directional bias — stay flat

### NYSE:FN
- Score: 44/100 | raw: -1.43 | News: 2 kept / 12 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-27T03:13:23.296Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*