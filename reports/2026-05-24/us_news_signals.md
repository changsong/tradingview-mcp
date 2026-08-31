# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-24  |  **News Window:** 2026-05-17 ~ 2026-05-24
**Stock Pool:** us_selected.txt (62)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:ENS** | **100** | 23.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/27 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:LRCX** | **98** | 15.65 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/23 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:CORZ** | **92** | 10.69 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/14 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:CIEN** | **91** | 13.45 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/25 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:APLD** | **88** | 16.64 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 21/17 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:GLW** | **88** | 9.96 | 🟢 Long (Strong) | Momentum / Hold | High | 11/28 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:KLAC** | **85** | 8.33 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/26 | Overheated Sentiment (one-sided bullish) |
| 8 | **NYSE:DELL** | **84** | 12.46 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/21 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:ASML** | **83** | 7.94 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/20 | Overheated Sentiment (one-sided bullish) |
| 10 | **NYSE:BE** | **83** | 23.55 | 🟢 Long (Strong) | Momentum / Hold | High | 29/11 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:GOOGL** | **80** | 14.3 | 🟢 Long (Strong) | Momentum / Hold | High | 22/17 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:MU** | **79** | 12.11 | 🟢 Long (Strong) | Momentum / Hold | High | 25/15 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:AMD** | **78** | 13.71 | 🟢 Long (Strong) | Momentum / Hold | High | 26/13 | Sentiment Strengthening UP (trend) |
| 14 | **NASDAQ:MTSI** | **78** | 9.38 | 🟢 Long (Strong) | Momentum / Hold | High | 13/18 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:FLEX** | **76** | 11.22 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 15/21 | Sentiment Strengthening UP (trend) |
| 16 | **NASDAQ:AMAT** | **74** | 7.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/20 | - |
| 17 | **NYSE:COHR** | **74** | 6.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/24 | - |
| 18 | **NASDAQ:NVDA** | **74** | 14.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 26/14 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:ERIC** | **73** | 5.46 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/10 | Overheated Sentiment (one-sided bullish) |
| 20 | **NASDAQ:VSAT** | **72** | 5.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/9 | - |
| 21 | **NASDAQ:AVGO** | **72** | 12.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/18 | Sentiment Strengthening UP (trend) |
| 22 | **NASDAQ:CRDO** | **71** | 8.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/20 | Sentiment Strengthening UP (trend) |
| 23 | **NASDAQ:MRVL** | **71** | 4.92 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/31 | - |
| 24 | **NYSE:NVT** | **71** | 5.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/21 | - |
| 25 | **NASDAQ:IREN** | **70** | 10.03 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 20/17 | Bearish-to-Bullish Reversal (reversal) |
| 26 | **NYSE:SM** | **67** | 5.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/11 | - |
| 27 | **NASDAQ:INCY** | **67** | 4.17 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/20 | - |
| 28 | **NASDAQ:MPWR** | **67** | 5.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/18 | - |
| 29 | **NYSE:DKS** | **67** | 4.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/18 | - |
| 30 | **NASDAQ:INTC** | **65** | 4.29 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/19 | - |
| 31 | **CBOE:CBOE** | **62** | 2.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/19 | - |
| 32 | **NYSE:TSM** | **62** | 4.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 21/12 | - |
| 33 | **NASDAQ:WDC** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/24 | - |
| 34 | **NASDAQ:CPRX** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 35 | **NYSE:PACS** | **57** | 1.68 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/18 | - |
| 36 | **NASDAQ:RKLB** | **56** | 3.67 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 25/15 | Sentiment Divergence (black swan masked by noise) |
| 37 | **NYSE:HG** | **56** | 1.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/15 | - |
| 38 | **NASDAQ:SANM** | **55** | 1.31 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/19 | - |
| 39 | **NYSE:IRM** | **55** | 1.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 40 | **NASDAQ:SEDG** | **55** | 1.18 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/17 | - |
| 41 | **NYSE:MS** | **54** | 0.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/22 | - |
| 42 | **NASDAQ:RMBS** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 43 | **NASDAQ:OSBC** | **53** | 0.72 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/15 | - |
| 44 | **NYSE:FN** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/17 | - |
| 45 | **NYSE:WT** | **53** | 0.73 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/10 | - |
| 46 | **NASDAQ:PRDO** | **52** | 0.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 47 | **NYSE:P** | **52** | 0.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/26 | - |
| 48 | **NYSE:RIO** | **52** | 0.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/8 | - |
| 49 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 50 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 51 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/22 | - |
| 52 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 53 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 54 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 55 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 56 | **NYSE:NOK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 57 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 58 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 59 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 60 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/24 | - |
| 61 | **NYSE:AROC** | **45** | -1.09 | ⚪ No Trade (Neutral) | Watch | Low | 3/17 | - |
| 62 | **NASDAQ:BGC** | **44** | -1.4 | ⚪ No Trade (Neutral) | Watch | Low | 2/17 | - |

---

## 🟢 Strong Long (6)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.96 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 28 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW) Has Change
- 🟢 [M&A|w2.52] Nvidia Warrant Deal Puts Corning At Center Of AI Data Centers
- 🟢 [M&A|w2.1] Nvidia Might Have Just Revealed the AI Sleeper Stock That Investors Mi

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice Me to Buy”
- 🔴 [Rumor|w0.5] This Alphabet‑Heavy Fund Has a Front‑Row Seat to the AI Boom — and the

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW)  |
| 2026-05-22 | Rumor | 🔴 -1 | 0.5 | Yahoo Fina | This Alphabet‑Heavy Fund Has a Front‑Row Seat to the AI Boom |
| 2026-05-22 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | Robust Results Boosted Corning’s (GLW) Performance in Q1 |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Nvidia's Latest AI Partner Was a Bargain Hiding in Plain Sig |
| 2026-05-21 | Analyst Action | 🔴 -1 | 0.86 | Yahoo Fina | Jim Cramer on Corning: “The Beatdown’s Not Enough to Entice  |
| 2026-05-21 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | Nvidia Warrant Deal Puts Corning At Center Of AI Data Center |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | This Is Why Corning's Stock Keeps Springing To The Upside |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 23.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 29 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Bloom Energy Nebius Deal Highlights AI Power Role And Recurring Revenu
- 🟢 [M&A|w3.53] Bloom Energy Stock Edges Higher Friday After $2.6 Billion Nebius AI De
- 🟢 [M&A|w3.02] Nebius Fuel Cell Deal With Bloom Reshapes AI Power And Investor Tradeo

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] This Star Hedge Fund Is Going All‑In on AI Plumbing Behind the Scenes 
- 🔴 [Industry|w0.59] Bloom Energy Shares Are Sliding Tuesday: What's Driving The Action?
- 🔴 [Industry|w0.5] 10 Industrials Stocks With Whale Alerts In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Bloom Energy Stock Is Up Big in 2026. Is There Still Time to |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Bloom Energy Nebius Deal Highlights AI Power Role And Recurr |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Here is Why Bloom Energy (BE) Is Among the Best Aschenbrenne |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | AMC Entertainment, Nvidia, Arm Holdings And More: 5 Stocks I |
| 2026-05-23 | Policy | ⚪  0 | 0.61 | MarketWatc | Kevin Warsh walks into a trap where the Fed can&#x2019;t cut |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | MarketWatc | SpaceX Is Aiming for Civilization on Mars. Its IPO Couldn&#x |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nvidia Says Its H100 GPU Prices Are Still Rising. That’s Goo |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | 2 Energy Stocks That Are the Smartest Long-Term Buys During  |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 14.3 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 22 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Berkshire Hathaway Energy Could Be a Quiet Star of the Greg Abel Era
- 🟢 [Policy|w3.06] Trump Backs Out Of AI Executive Order Amid Fears It Could Hurt US Tech
- 🟢 [Earnings|w1.63] Alphabet: FQ1's Record Operating Margin Marks A New Growth Curve

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] 49,000 Lake Tahoe residents fear they'll lose power as data centers st
- 🔴 [Rumor|w0.5] Alphabet: A Great Reset Is Potentially Coming
- 🔴 [Analyst Action|w0.5] Alphabet: The Buffett Effect Meets Apple-Like Overvaluation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Alphabet Bets On AI Glasses And Cheaper Gemini To Deepen Eco |
| 2026-05-24 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | 2 Stocks With Monster Potential to Hold Through the Next Dec |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Google's AI Glasses Threaten Meta's 80% Market Grip, Analyst |
| 2026-05-23 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Trump Backs Out Of AI Executive Order Amid Fears It Could Hu |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Hyperscaler Debt Flood Brings Derivatives Bonanza |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Billionaire Chase Coleman Just Increased His Stake in These  |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | This "Magnificent Seven" Stock Is the Worst Performer of 202 |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | Litecoin Has Been Around Since 2011 -- Here's Why It's Still |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 12.11 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 25 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Citi Turns Even More Bullish on Micron Technology, Inc. (MU)’s DRAM Su
- 🟢 [Industry|w1.19] Micron Technology Inc (NASDAQ:MU) Passes Navellier's Eight-Pillar Grow
- 🟢 [Industry|w1.19] Why Micron (MU) Stock Is Trading Up Today

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Short Sellers Keep Placing Their Bets Against Micron Stock. Why They T
- 🔴 [Analyst Action|w0.6] Micron: The Easy Money In This Cycle Is Behind Us
- 🔴 [Analyst Action|w0.5] Micron: Why The Crash May Be Coming

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks making big moves this week: Toll Brothers, Booz Allen |
| 2026-05-23 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Can Micron Stock Turn $1,000 Into $10,000? |
| 2026-05-23 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Can Micron Stock Keep Climbing? 2 Catalysts Wall Street Is M |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | What CEO Sanjay Mehrota Just Said Shows Why Micron Is About  |
| 2026-05-23 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Short Sellers Keep Placing Their Bets Against Micron Stock.  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Citi Turns Even More Bullish on Micron Technology, Inc. (MU) |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The 1 Tech Stock I Think Has More Upside Than Anything Else  |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | A Billionaire Investor Just Increased His Exposure to Memory |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 13.71 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 26 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] AMD just beat rival chipmakers to the punch
- 🟢 [Industry|w2.52] AMD (AMD) Announces $10B Investment in Taiwan AI Infrastructure
- 🟢 [M&A|w1.43] AMD Taiwan Bet Links 2nm Venice CPUs To Future AI Demand

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] AMD: Strong AI Sales, But the Win Is Already Priced In
- 🔴 [Industry|w1.02] Cathie Wood's ARK Sells Chip Giants, Buys The Dip In Crypto Exchange B
- 🔴 [Industry|w0.5] AMD Has An Nvidia Problem

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why This Fund Sold $11 Million of BILL Stock Despite a $1 Bi |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Qorvo, Allegro MicroSystems, and Lattice Semiconductor Stock |
| 2026-05-23 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | AMD Taiwan Bet Links 2nm Venice CPUs To Future AI Demand |
| 2026-05-23 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | AMD (AMD) Announces $10B Investment in Taiwan AI Infrastruct |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why AMD (AMD) Stock Is Up Today |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why Advanced Micro Devices (AMD) Remains One of the Most Tra |
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | AMD just beat rival chipmakers to the punch |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | What CEO Sanjay Mehrota Just Said Shows Why Micron Is About  |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 9.38 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [M&A|w3.53] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [Earnings|w2.34] MACOM Technology Solutions (MTSI) Delivered Record Revenue and Profita

**📉 Bearish Factors:**
- 🔴 [Industry|w1.5] Macom Technology Solutions Holdings Insider Sold Shares Worth $2,746,1
- 🔴 [Industry|w0.6] MACOM, Applied Materials, and Photronics Shares Are Falling, What You 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Here’s Why MACOM (MTSI) is Among the 8 High Return Semicondu |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Photronics, IPG Photonics, AMD, KLA Corporation, and MACOM S |
| 2026-05-22 | M&A | 🟢 +1 | 3.53 | Finnhub | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 High-Flying Stocks for Long-Term Investors and 1 Facing Ch |
| 2026-05-21 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MACOM Technology Solutions (MTSI) Delivered Record Revenue a |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Finnhub | Intuit, Osisko Development, Borr Drilling And Other Big Stoc |

---

## 🟢 Mid Long (17)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 7.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Why Applied Materials (AMAT) Stock Is Up Today
- 🟢 [Industry|w1.2] Meta, Broadcom And Others Launch $125 Million UCLA AI Chip Hub
- 🟢 [Industry|w1.02] Broadcom’s AI Packaging Bet Gets Bigger. Wall Street Is Betting on Mor

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.22] Morgan Stanley makes bold Lam Research stock call
- 🔴 [Analyst Action|w1.22] Is Lam Research Corporation (LRCX) One of the Best Oversold Growth Sto

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Meta, Broadcom And Others Launch $125 Million UCLA AI Chip H |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Broadcom’s AI Packaging Bet Gets Bigger. Wall Street Is Bett |
| 2026-05-23 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | Morgan Stanley makes bold Lam Research stock call |
| 2026-05-23 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Applied Materials Taps UCLA AI Chip Hub As Valuation Debate  |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Will ASML's High-NA Rollout Strengthen AI Chip Leadership? |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | How KLA's Service Business Is Becoming a Long-Term Growth An |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Finnhub | The Zacks Analyst Blog Highlights Applied Materials, Shell a |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 6.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 24 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Nvidia Just Opened A $1.9 Billion Position In A Critical AI Supplier
- 🟢 [Industry|w1.26] A Deep Dive Into NVIDIA’s Latest Portfolio Moves
- 🟢 [Industry|w1.19] Coherent's AI Infrastructure Positioning Has Changed The Valuation Deb

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.21] Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastructure Play

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 1.19 | Finnhub | Coherent's AI Infrastructure Positioning Has Changed The Val |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Stock Market Leaders Respect The 21-Day Line. You Should Too |
| 2026-05-22 | Industry | 🟢 +1 | 1.01 | Finnhub | COHERENT CORP (NYSE:COHR) Dominates Minervini Screen with Pe |
| 2026-05-22 | Analyst Action | 🔴 -1 | 1.21 | Finnhub | Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastru |
| 2026-05-21 | Policy | ⚪  0 | 0.5 | Yahoo Fina | Market Chatter: Musk, CEOs Trump's China Trip Pressed Beijin |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | As Small-Cap Outperformance Continues, These 2 ETFs Provide  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Applied Optoelectronics Up 635.5% in 6 Months: How to Play t |
| 2026-05-21 | Analyst Action | ⚪  0 | 0.86 | Yahoo Fina | CRDO vs. COHR: Which AI Connectivity Stock Is the Better Buy |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 14.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 26 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Great News for Nvidia Shareholders!
- 🟢 [Buyback|w3.6] Nvidia's Board Just Authorized an Additional $80 Billion Buyback. Here
- 🟢 [Analyst Action|w3.57] JPMorgan resets Nvidia stock price target after earnings

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.55] Here’s What Jim Cramer Had Said About NVIDIA (NVDA) Ahead Of Earnings
- 🔴 [Analyst Action|w1.43] Billionaire Philippe Laffont Trimmed 8 of His Fund's Top 10 Positions 
- 🔴 [Industry|w0.6] Nvidia Q1: No China In The Guide, 75% Margins, And A Tougher Bull Case

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | AI productivity upside could be 10x the current estimates: B |
| 2026-05-24 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Great News for Nvidia Shareholders! |
| 2026-05-24 | Policy | ⚪  0 | 0.72 | Yahoo Fina | 3 Cryptocurrencies to Watch as the Clarity Act Heads to the  |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 2 Stocks With Monster Potential to Hold Through the Next Dec |
| 2026-05-24 | Buyback | 🟢 +1 | 3.6 | Yahoo Fina | Nvidia's Board Just Authorized an Additional $80 Billion Buy |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why This Fund Sold $11 Million of BILL Stock Despite a $1 Bi |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | This Tech Stock Pays a Growing Dividend and Rides Every AI T |
| 2026-05-24 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Is It Too Late To Consider NVIDIA (NVDA) After A 7x Multi Ye |

---

### NASDAQ:VSAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 9 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] VSAT Stock Hits Seven-Year High On Securing Department of War contract
- 🟢 [Industry|w1.02] Insperity, Viasat, and Avnet Shares Are Soaring, What You Need To Know
- 🟢 [Industry|w0.86] These Space ETFs Are Retail’s ‘Standout Favorite’ Ahead Of SpaceX IPO

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] 3 Overrated  Stocks Walking a Fine Line
- 🔴 [Industry|w0.5] Applied Digital, Viasat, CECO Environmental, and HNI Shares Plummet, W

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Insperity, Viasat, and Avnet Shares Are Soaring, What You Ne |
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | VSAT Stock Hits Seven-Year High On Securing Department of Wa |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | These Space ETFs Are Retail’s ‘Standout Favorite’ Ahead Of S |
| 2026-05-22 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Viasat Sets May 28, 2026 for Fourth Quarter and Fiscal Year  |
| 2026-05-21 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | 3 Overrated  Stocks Walking a Fine Line |
| 2026-05-20 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | How Investors May Respond To Viasat (VSAT) Partnering With A |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Rising Satellite-Based Telecom Services Boost ASTS' Futu |
| 2026-05-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Space Stocks Are Back In Orbit As SpaceX IPO Hype Builds |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 12.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.2] Meta, Broadcom And Others Launch $125 Million UCLA AI Chip Hub
- 🟢 [Earnings|w3.28] Broadcom Rides on Accelerating Semiconductor Revenues: What's Ahead?
- 🟢 [Analyst Action|w3.06] Citi names Broadcom stock top semiconductor pick for 2026

**📉 Bearish Factors:**
- 🔴 [Policy|w3.06] Presidential Trading Puts Broadcom Valuation And Policy Risks In Focus
- 🔴 [Industry|w1.02] Nvidia’s Hidden $60 Billion Business Is About to Overtake Broadcom
- 🔴 [Analyst Action|w0.86] Broadcom: Be Fearful When Others Are Hyped (Ratings Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Why This Fund Sold $11 Million of BILL Stock Despite a $1 Bi |
| 2026-05-24 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | This Tech Stock Pays a Growing Dividend and Rides Every AI T |
| 2026-05-24 | M&A | 🟢 +1 | 4.2 | Yahoo Fina | Meta, Broadcom And Others Launch $125 Million UCLA AI Chip H |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Qorvo, Allegro MicroSystems, and Lattice Semiconductor Stock |
| 2026-05-23 | Policy | 🔴 -1 | 3.06 | Yahoo Fina | Presidential Trading Puts Broadcom Valuation And Policy Risk |
| 2026-05-23 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Citi names Broadcom stock top semiconductor pick for 2026 |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Billionaire Chase Coleman Just Increased His Stake in These  |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | This Artificial Intelligence (AI) Stock Will Beat Nvidia, AM |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 8.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation Expectati
- 🟢 [M&A|w2.52] AI Factory Partnership With Rebellions Sends Credo's Shares Up 8%
- 🟢 [Analyst Action|w2.16] Credo Technology and Birkenstock have been highlighted as Zacks Bull a

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w2.1] Credo: This Untimely Reversal Is A Big Warning (Rating Downgrade)
- 🔴 [Analyst Action|w1.51] Credo Technology: A Way Too Expensive Three-Customer Concentrated Busi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Zacks Investment Ideas feature highlights: Nvidia, Innodata, |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Has Nvidia Become Too Big? 3 Alternative AI Stocks |
| 2026-05-21 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Credo Technology and Birkenstock have been highlighted as Za |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CRDO vs. COHR: Which AI Connectivity Stock Is the Better Buy |
| 2026-05-21 | Earnings | ⚪  0 | 2.34 | Yahoo Fina | Credo Stock Dip Opens The Door for Bullish Investors |
| 2026-05-21 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | AI Factory Partnership With Rebellions Sends Credo's Shares  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.92 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 31 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] Marvell shares jump on Stifel price target hike on AI demand outlook
- 🟢 [Analyst Action|w1.21] What Is Going On With Marvell Stock On Friday?
- 🟢 [Earnings|w1.12] See How Big Money, AI Push Marvell Higher

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Does Marvell (MRVL) Keeping a Combined Chairman-CEO Role Cla |
| 2026-05-23 | Earnings | ⚪  0 | 0.77 | Finnhub | Top 4 S&P 500 Stocks To Watch Next Week: CRM, MRVL, COST, DE |
| 2026-05-22 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Marvell shares jump on Stifel price target hike on AI demand |
| 2026-05-22 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | Stock Market Week Ahead: Marvell, Dell And The Fed's Inflati |
| 2026-05-22 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | See How Big Money, AI Push Marvell Higher |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Stocks Climb on US-Iran Peace Hopes and Strength in Chipmake |
| 2026-05-22 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | MRVL to Post Q1 Earnings: Time to Buy, Sell or Hold the Stoc |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | What Is Going On With Marvell Stock On Friday? |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 21 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.59] nVent Electric (NVT) Authorizes New $500M Share Repurchase Program
- 🟢 [Buyback|w1.3] nVent Electric Approves $500 Million Share Buyback; Maintains Quarterl
- 🟢 [Buyback|w0.7] Aravind Padmanabhan At nVent Electric Capitalizes: Options Exercised, 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can RFIL's Thermal Cooling Business Become Its Next Growth E |
| 2026-05-22 | Buyback | 🟢 +1 | 2.59 | Yahoo Fina | nVent Electric (NVT) Authorizes New $500M Share Repurchase P |
| 2026-05-21 | Industry | ⚪  0 | 0.72 | Yahoo Fina | nVent to Participate in Upcoming Investor Conference |
| 2026-05-21 | Industry | 🟢 +1 | 0.5 | Finnhub | nVent Electric Plc (NYSE:NVT) Shines in Caviar Cruise Qualit |
| 2026-05-19 | Industry | ⚪  0 | 0.5 | Finnhub | nVent Electric plc (NVT) Presents at Wolfe Research 19th Ann |
| 2026-05-19 | Buyback | 🟢 +1 | 0.7 | Finnhub | Aravind Padmanabhan At nVent Electric Capitalizes: Options E |
| 2026-05-18 | Buyback | 🟢 +1 | 1.3 | Yahoo Fina | nVent Electric Approves $500 Million Share Buyback; Maintain |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.03 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 20 / 17 |
| Patterns | Bearish-to-Bullish Reversal (reversal) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] This AI Stock Just Secured a Deal That Could Change Its Trajectory For
- 🟢 [Industry|w2.55] Ethereum-Focused SBET And BMNR Join Russell 3000 Index, Following MSTR
- 🟢 [Earnings|w1.95] Can IREN's Rising AI Cloud Revenues Offset Bitcoin Mining Weakness?

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.91] IREN Limited's AI Dream Meets Financial Reality
- 🔴 [Earnings|w1.64] IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Results (Downgr
- 🔴 [Earnings|w0.5] IREN Limited: Nvidia's Vote Of Confidence And The Demanding Q3 Results

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Ethereum-Focused SBET And BMNR Join Russell 3000 Index, Foll |
| 2026-05-23 | M&A | ⚪  0 | 3.57 | Yahoo Fina | IREN (IREN) Expands Brand Push with Awaken Acquisition |
| 2026-05-22 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | This AI Stock Just Secured a Deal That Could Change Its Traj |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | IREN’s $3.4 Billion NVIDIA Deal Points To Something Big Arou |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Assessing IREN (IREN) Valuation After AI Cloud Pivot And Fiv |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Finnhub | IREN: The Pricing Power Breadcrumbs Are Starting To Add Up |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Nvidia GPU Price Surge Sparks AI Stock Rally: Nebius, CoreWe |
| 2026-05-21 | Industry | 🟢 +1 | 0.6 | Seeking Al | Nebius, CoreWeave, Iren surge as Nvidia discloses H100 renta |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 5.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 11 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] SM Energy: Debt Reduction Will Unlock Significant Shareholder Value
- 🟢 [Analyst Action|w1.51] Wells Fargo Maintains Equal-Weight on SM Energy, Raises Price Target t
- 🟢 [Industry|w0.86] Higher Synergies & Oil Prices Enhance SM Energy's Prospects

**📉 Bearish Factors:**
- 🔴 [M&A|w3.57] SM Energy Uinta Deal Reshapes Scale Valuation And Shareholder Dilution
- 🔴 [Industry|w1.02] SM Energy, Transocean, and Valaris Shares Are Falling, What You Need T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | M&A | 🔴 -1 | 3.57 | Yahoo Fina | SM Energy Uinta Deal Reshapes Scale Valuation And Shareholde |
| 2026-05-23 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | SM Energy, Transocean, and Valaris Shares Are Falling, What  |
| 2026-05-23 | Industry | 🟢 +1 | 0.85 | Seeking Al | SM Energy: Debt Reduction Will Unlock Significant Shareholde |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Momentum  Stocks for Long-Term Investors and 1 That Underw |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Higher Synergies & Oil Prices Enhance SM Energy's Prospects |
| 2026-05-22 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | SM Energy: Debt Reduction Will Unlock Significant Shareholde |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 1 Russell 2000 Stock Worth Your Attention and 2 We Brush Off |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | SM Energy (SM) Is Considered a Good Investment by Brokers: I |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.17 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growth Momentum
- 🟢 [Industry|w0.6] Incyte, Genesis Molecular AI Expand Artificial Intelligence Drug Disco
- 🟢 [Industry|w0.6] Incyte and Genesis Expand Molecular AI Collaboration to Accelerate Dru

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Incyte Insider Sold Shares Worth $1,423,950, According to a Recent SEC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 1.19 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Analyst Action | ⚪  0 | 1.04 | Yahoo Fina | Bernstein Initiates Incyte at Market Perform With $99 Price  |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |
| 2026-05-21 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | Incyte Insider Sold Shares Worth $1,423,950, According to a  |
| 2026-05-20 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Incyte, Genesis Molecular AI Expand Artificial Intelligence  |
| 2026-05-20 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Incyte and Genesis Expand Molecular AI Collaboration to Acce |
| 2026-05-19 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Incyte Collaborates With Edison Scientific to Use AI in Drug |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 5.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 18 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Monolithic Power Systems: Strong Q1, But Little Room For Error
- 🟢 [Analyst Action|w3.06] Needham Remains Bullish on Monolithic Power Systems (MPWR)
- 🟢 [Analyst Action|w1.8] Here’s What Analysts Are Saying About Monolithic Power Systems (MPWR)

**📉 Bearish Factors:**
- 🔴 [Policy|w1.76] KLA Corporation, Monolithic Power Systems, onsemi, Semtech, and Lattic
- 🔴 [Industry|w1.5] Monolithic Power Systems Insider Sold Shares Worth $18,736,850, Accord

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Needham Remains Bullish on Monolithic Power Systems (MPWR) |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 1 of Wall Street’s Favorite Stock with Exciting Potential an |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Daily – Vickers Top Buyers & Sellers for 05/22/2026 |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Teradyne, Monolithic Power Systems, Vishay Intertechnology,  |
| 2026-05-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | Monolithic Power Systems: Strong Q1, But Little Room For Err |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Pembroke Trims Position in Workiva, According to Latest SEC  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Investment Firm Sells SaaS Stock Worth $14.2 Million, Accord |
| 2026-05-21 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Amtech and Monolithic Power Systems Stocks Trade Down, What  |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 18 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] DICK'S Credit Card Relaunch Targets Deeper Loyalty And Revenue Per Cus
- 🟢 [Earnings|w1.12] Will Dick's (DKS) Beat Estimates Again in Its Next Earnings Report?
- 🟢 [Analyst Action|w1.04] Dick’s Sporting Goods placed on JPM Positive Catalyst Watch ahead of e

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.91] Earnings Preview: Dick's Sporting Goods (DKS) Q1 Earnings Expected to 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | How To Earn $500 A Month From Dick's Sporting Stock Ahead Of |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can DICK'S (DKS) AI Coach and Foot Locker Tie-Up Really Rede |
| 2026-05-22 | Analyst Action | ⚪  0 | 0.52 | Yahoo Fina | Analyst Report: DICK'S Sporting Goods, Inc. |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Stock Market To Close For Memorial Day. Here Are Wall Street |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | DICK'S Sporting Goods Introduces Coach by DICK'S, an Agentic |
| 2026-05-22 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | Will Dick's (DKS) Beat Estimates Again in Its Next Earnings  |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Dick’s Sporting Goods placed on JPM Positive Catalyst Watch  |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Why Broadcom (AVGO) Remains One of Goldman’s Strongest AI In |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 4.29 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Intel (INTC) Introduces Core Ultra Series 3 Processors for Edge AI Rob
- 🟢 [Analyst Action|w1.22] Jim Cramer Shares Key Insight For Intel’s (INTC) Future
- 🟢 [Industry|w1.19] Intel CEO reveals rare ‘speed-of-light’ turnaround plan

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Intel Has Soared 225% in 2026. Here's Where the AI Stock Could Be By t
- 🔴 [Industry|w0.5] AMD Vs. Intel: The AI CPU Trade Still Favors AMD - But Hedged
- 🔴 [Analyst Action|w0.5] Intel: Will Higher Bond Yields Burst The AI Bubble? (Rating Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 3 Cryptocurrencies to Watch as the Clarity Act Heads to the  |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 2 Stocks With Monster Potential to Hold Through the Next Dec |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | This Tech Stock Pays a Growing Dividend and Rides Every AI T |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Qorvo, Allegro MicroSystems, and Lattice Semiconductor Stock |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | If I Could Only Hold 1 Vanguard ETF Forever, Here's What I'd |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Jim Cramer Shares Key Insight For Intel’s (INTC) Future |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 1 Spectacular Growth Stock to Buy Before It Soars by as Much |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] Cboe Begins Offering Daily Expirations for Dow Jones Industrial Averag
- 🟢 [Industry|w1.26] Cboe Global Markets : Begins Offering Daily Expirations for Dow Jones 
- 🟢 [Industry|w1.02] How Investors Are Reacting To Cboe Global Markets (CBOE) Expanding Dai

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Cboe Global Markets Insider Sold Shares Worth $437,944, According to a

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | How Investors Are Reacting To Cboe Global Markets (CBOE) Exp |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Are Wall Street Analysts Predicting Cboe Global Markets Stoc |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Bekaert - Update on the Share Buyback Program and Liquidity  |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CBOE Stock Rises 58.1% in a Year: A Signal for Investors to  |
| 2026-05-21 | Industry | ⚪  0 | 0.72 | Yahoo Fina | Light AI Announces C$5,000,000 Secured Convertible Debenture |
| 2026-05-20 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | Cboe Global Markets Insider Sold Shares Worth $437,944, Acco |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Bank of America discloses exposure to Bitcoin, XRP, Ether, S |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Glass House Brands to Host Investor Sesh V on Thursday, June |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 4.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 21 / 12 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] AMD Taiwan Bet Links 2nm Venice CPUs To Future AI Demand
- 🟢 [Industry|w2.1] What's Going On With Taiwan Semiconductor Stock Thursday?
- 🟢 [Industry|w1.02] Why AMD (AMD) Stock Is Up Today

**📉 Bearish Factors:**
- 🔴 [Policy|w1.22] Nikki Haley Says If China Controls Taiwan, The Communist Party Gains L
- 🔴 [Industry|w1.02] Cathie Wood's ARK Sells Chip Giants, Buys The Dip In Crypto Exchange B
- 🔴 [Industry|w1.01] Asia's AI Trade Is Expanding Beyond Taiwan Semiconductor: Analyst

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why This Fund Sold $11 Million of BILL Stock Despite a $1 Bi |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Planet Fitness Grew Revenue 22%, So Why Did One Investor Tri |
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | AMD Taiwan Bet Links 2nm Venice CPUs To Future AI Demand |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why AMD (AMD) Stock Is Up Today |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Billionaire Philippe Laffont Trimmed 8 of His Fund's Top 10  |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Billionaire Chase Coleman Just Increased His Stake in These  |
| 2026-05-23 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Cathie Wood's ARK Sells Chip Giants, Buys The Dip In Crypto  |
| 2026-05-23 | Policy | 🔴 -1 | 1.22 | Yahoo Fina | Nikki Haley Says If China Controls Taiwan, The Communist Par |

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
| News Kept / Dropped | 13 / 24 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Seagate Stock, Western Digital Bounce Back After Nvidia Results
- 🟢 [Industry|w1.02] Western Digital, Himax, and Teradyne Shares Are Soaring, What You Need
- 🟢 [Industry|w0.86] Western Digital PQC Hard Drives Put Long Term Data Security In Focus

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Seagate and Western Digital Stocks Trade Down, What You Need To Know
- 🔴 [Industry|w0.72] Seagate stock price falls after CEO's rattling warning
- 🔴 [Industry|w0.5] Jim Cramer on Western Digital: “That Seems Too Rich to Me”

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Western Digital, Himax, and Teradyne Shares Are Soaring, Wha |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Up 550% YTD, SanDisk Stock at $1,540: Buy, Sell or Hold? |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Seagate Sustain Its Gross Margin Expansion Momentum? |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Western Digital PQC Hard Drives Put Long Term Data Security  |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | DRAM, MU, SNDK: US Memory Stocks Pare Gains After Boost From |
| 2026-05-21 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | Seagate stock price falls after CEO's rattling warning |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | SanDisk Soars 9%, Western Digital Rallies 5%, Micron Rises 3 |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Sandisk Stock Is Up 535% in 2026. That Didn’t Stop Billionai |

---

## 🟡 Cautious Long (2)

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 16.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 21 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Applied Digital (APLD) on All-Time High as AI Lease Revenues Hit $73B
- 🟢 [Industry|w1.8] Why Applied Digital Stock Soared Today
- 🟢 [Industry|w1.8] Applied Digital stock climbs after signing multibillion-dollar AI infr

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Applied Digital Shares Slump Friday Despite Landmark AI Campus Lease
- 🔴 [Industry|w0.5] Why Applied Digital Stock Is Slumping Monday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Applied Digital (APLD) Price Target Raised at Needham by $3 |
| 2026-05-23 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Digital: Massive Revenue Backlog Escalation Underway |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | APLD, BE, GFS Stocks Hit 52-Week Highs: What's Driving The S |
| 2026-05-22 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Applied Digital (APLD) on All-Time High as AI Lease Revenues |
| 2026-05-22 | Industry | 🔴 -1 | 1.01 | Finnhub | Applied Digital Shares Slump Friday Despite Landmark AI Camp |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Meta, Broadcom Join $125 Million UCLA Semiconductor Research |
| 2026-05-21 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Why Applied Digital Stock Soared Today |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Nvidia GPU Price Surge Sparks AI Stock Rally: Nebius, CoreWe |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.46 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 10 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.3] Share buybacks in Ericsson during the period May 11 - May 15, 2026
- 🟢 [M&A|w0.84] Ericsson’s AI Partnerships Extend Connectivity Reach Beyond Core Telec
- 🟢 [Industry|w0.72] [Latest] Global Private 5G Network Market to Reach USD 312.2 Billion b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Assessing SAP (XTRA:SAP) Valuation After New AI Platform And |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | [Latest] Global Private 5G Network Market to Reach USD 312.2 |
| 2026-05-20 | M&A | 🟢 +1 | 0.84 | Yahoo Fina | Ericsson’s AI Partnerships Extend Connectivity Reach Beyond  |
| 2026-05-19 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Outside China, 5G Drives Core Network Revenue Even Higher, A |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Sureshot.io Selects Vonage to Power Next-Generation Customer |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Ericsson, Net Feasa Team Up on Maritime Connectivity System |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Ericsson and Net Feasa to deliver maritime connectivity comp |
| 2026-05-18 | Buyback | 🟢 +1 | 1.3 | Yahoo Fina | Share buybacks in Ericsson during the period May 11 - May 15 |

---

## ⚠️ Overheated (7)

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 23.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Transcript: EnerSys Q4 2026 Earnings Conference Call
- 🟢 [Earnings|w2.34] EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS and Strateg
- 🟢 [Earnings|w2.34] EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Enersys (ENS) Soars to 52-Week High, Time to Cash Out? |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Oppenheimer Adjusts EnerSys Price Target to $250 From $210,  |
| 2026-05-21 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | EnerSys (ENS) Q4 2026 Earnings Call Highlights: Record EPS a |
| 2026-05-21 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | EnerSys' Q4 Earnings & Sales Beat Estimates, Increase Y/Y |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | ENS vs. ETN: Which Stock Is the Better Value Option? |
| 2026-05-21 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Enersys Q4 Earnings Call Highlights |
| 2026-05-21 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | CORRECTING and REPLACING EnerSys Reports Fourth Quarter and  |
| 2026-05-21 | Industry | 🟢 +1 | 0.84 | Finnhub | Buy These 3 Dividend Growth Stocks As Treasury Yields Ease |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 15.65 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Does Lam Research (LRCX) Have the Right Playbook for AI-Era Tools and 
- 🟢 [Earnings|w2.81] Why Is Lam Research (LRCX) Up 16.9% Since Last Earnings Report?
- 🟢 [Analyst Action|w1.22] Morgan Stanley makes bold Lam Research stock call

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Does Lam Research (LRCX) Have the Right Playbook for AI-Era  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Morgan Stanley makes bold Lam Research stock call |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Is Lam Research Corporation (LRCX) One of the Best Oversold  |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Impinj, Lam Research, and FormFactor Shares Are Soaring, Wha |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is Wall Street Bullish or Bearish on Lam Research Stock? |
| 2026-05-22 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Why Is Lam Research (LRCX) Up 16.9% Since Last Earnings Repo |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Lam Research Salzburg Lab Targets AI Packaging And Richly Va |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Earnings Growth & Price Strength Make Lam Research (LRCX) a  |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10.69 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 14 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] Core Scientific (CORZ) Announces Strategy to Expand Muskogee Campus to
- 🟢 [Earnings|w2.73] Why Core Scientific Stock Is Surging On Thursday?
- 🟢 [Industry|w1.8] Core Scientific Refocuses On AI Data Centers With US$3.3b Backing

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Jefferies Sees Core Scientific (CORZ) Well Positioned for AI |
| 2026-05-22 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Weekly Wrap: Bitcoin Treads Water As Stocks Rally |
| 2026-05-22 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | Core Scientific (CORZ) Announces Strategy to Expand Muskogee |
| 2026-05-21 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Core Scientific Refocuses On AI Data Centers With US$3.3b Ba |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Bitcoin Miner Stocks Rise After Nvidia’s Blockbuster Earning |
| 2026-05-21 | Earnings | 🟢 +1 | 2.73 | Finnhub | Why Core Scientific Stock Is Surging On Thursday? |
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | CleanSpark (CLSK) Climbs 9.3% as Analyst ‘Highly Optimistic’ |
| 2026-05-20 | Industry | ⚪  0 | 0.7 | Finnhub | CleanSpark Stock Pulls In Bigger Bet From Situational Awaren |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 13.45 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] Evercore ISI Adjusts Price Target on Ciena to $550 From $330, Maintain
- 🟢 [Industry|w2.16] CORRECTING and REPLACING Cirion Launches Initial Phase of On-Demand Na
- 🟢 [Industry|w1.8] Ciena Taps Cirion NaaS To Extend Role In Cloud And AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Ciena (CIEN) Valuation Check After New AI And Cloud Networki |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | This AI Infrastructure Stock Is Up 570% in 1 Year. Is It Tim |
| 2026-05-22 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | CORRECTING and REPLACING Cirion Launches Initial Phase of On |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | How is Ciena Advancing AI and Cloud Network Infrastructure? |
| 2026-05-22 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Evercore ISI Adjusts Price Target on Ciena to $550 From $330 |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | 4 Cloud Computing Stocks Benefiting From AI-Driven Demand |
| 2026-05-21 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Ciena Taps Cirion NaaS To Extend Role In Cloud And AI |
| 2026-05-20 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Hedge Fund Bienville Capital Exited Its Position in Monday.c |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.33 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Why is KLA Corporation (KLAC) One of Louis Navellier’s Top Long-Term S
- 🟢 [Buyback|w1.04] Will GE Vernova, MercadoLibre, or NVR Be the Next Big Stock Split?
- 🟢 [Buyback|w1.01] Will ASML, Lilly, or TransDigm Be the Next Big Stock Split?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Will ASML's High-NA Rollout Strengthen AI Chip Leadership? |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | How KLA's Service Business Is Becoming a Long-Term Growth An |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | The Zacks Analyst Blog Highlights Applied Materials, Shell a |
| 2026-05-22 | Buyback | 🟢 +1 | 1.04 | Yahoo Fina | Will GE Vernova, MercadoLibre, or NVR Be the Next Big Stock  |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Are Wall Street Analysts Bullish on KLA Corporation Stock? |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Photronics, IPG Photonics, AMD, KLA Corporation, and MACOM S |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Top Analyst Reports for Applied Materials, Shell & KLA |
| 2026-05-21 | Buyback | 🟢 +1 | 1.01 | Finnhub | Will ASML, Lilly, or TransDigm Be the Next Big Stock Split? |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 12.46 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] AXT Inc. (AXTI) on All-Time High Ahead of Earnings Outcome on Thursday
- 🟢 [Analyst Action|w3.02] DELL Stock Just Hit a New 52-Week High as Analysts Up Price Targets
- 🟢 [Industry|w2.52] Dell's AI Data Center Expansion Gains Pace: What Lies Ahead?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why Are HP (HPQ) Shares Soaring Today |
| 2026-05-23 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | AXT Inc. (AXTI) on All-Time High Ahead of Earnings Outcome o |
| 2026-05-23 | Analyst Action | ⚪  0 | 1.22 | Yahoo Fina | Assessing Dell Technologies (DELL) Valuation After AI Infras |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | Top 4 S&P 500 Stocks To Watch Next Week: CRM, MRVL, COST, DE |
| 2026-05-23 | Earnings | ⚪  0 | 0.77 | Finnhub | Salesforce, Dell Headline Earnings Week Amid Light Economic  |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Stock Market Today, May 22: S&P 500 Posts Eighth Straight We |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | These Stocks Are Today’s Movers: Dell, Apple, IBM, Estée Lau |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | US Equity Indexes Rise, Crude Oil Off Session Highs as Iran  |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.94 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Where to invest when markets are at all-time highs, according to UBS
- 🟢 [Earnings|w1.09] ASML (ASML) Surpasses Market Returns: Some Facts Worth Knowing
- 🟢 [Analyst Action|w1.04] Why UBS Says ASML Is the Best Bet Among European Chip Stocks

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Dow Jones Futures: Trump Says Iran Deal Near With Hormuz 'Op |
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Where to invest when markets are at all-time highs, accordin |
| 2026-05-23 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why ASML Holding N.V. (ASML) is One of the Best Oversold Gro |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures: Trump Says Iran Deal Announcement 'Shortl |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures: Market Bets On Iran Deal; Tesla, These Fi |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | SMH vs SOXX: Which Semiconductor ETF Should You Buy in 2026? |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | EUV ETF: The Chip-Making Technology Fueling AI |
| 2026-05-22 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Why UBS Says ASML Is the Best Bet Among European Chip Stocks |

---

## ⚠️ Risk Pattern (4)

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 16.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 21 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Applied Digital (APLD) on All-Time High as AI Lease Revenues Hit $73B
- 🟢 [Industry|w1.8] Why Applied Digital Stock Soared Today
- 🟢 [Industry|w1.8] Applied Digital stock climbs after signing multibillion-dollar AI infr

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Applied Digital Shares Slump Friday Despite Landmark AI Campus Lease
- 🔴 [Industry|w0.5] Why Applied Digital Stock Is Slumping Monday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Applied Digital (APLD) Price Target Raised at Needham by $3 |
| 2026-05-23 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Digital: Massive Revenue Backlog Escalation Underway |
| 2026-05-22 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | APLD, BE, GFS Stocks Hit 52-Week Highs: What's Driving The S |
| 2026-05-22 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Applied Digital (APLD) on All-Time High as AI Lease Revenues |
| 2026-05-22 | Industry | 🔴 -1 | 1.01 | Finnhub | Applied Digital Shares Slump Friday Despite Landmark AI Camp |
| 2026-05-21 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Meta, Broadcom Join $125 Million UCLA Semiconductor Research |
| 2026-05-21 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Why Applied Digital Stock Soared Today |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Nvidia GPU Price Surge Sparks AI Stock Rally: Nebius, CoreWe |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 11.22 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 15 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent
- 🟢 [M&A|w3.57] Flex Pitches AI Data Center Spin-Off as Power and Cooling Growth Accel
- 🟢 [M&A|w3.53] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.7] Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And Insider Sale
- 🔴 [Industry|w0.59] Flex and Arlo Technologies Stocks Trade Down, What You Need To Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Assessing Flex (FLEX) Valuation After A Sharp Multi Month Sh |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Flex Pitches AI Data Center Spin-Off as Power and Cooling Gr |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Flex Teradyne Robotics Tie Up Reframes Automation Risks And  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex to Participate in Upcoming Investor Conferences |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | 1 of Wall Street’s Favorite Stock with Exciting Potential an |
| 2026-05-22 | M&A | 🟢 +1 | 3.53 | Finnhub | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | 1 Surging  Stock with Competitive Advantages and 2 We Find R |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.46 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 10 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.3] Share buybacks in Ericsson during the period May 11 - May 15, 2026
- 🟢 [M&A|w0.84] Ericsson’s AI Partnerships Extend Connectivity Reach Beyond Core Telec
- 🟢 [Industry|w0.72] [Latest] Global Private 5G Network Market to Reach USD 312.2 Billion b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Assessing SAP (XTRA:SAP) Valuation After New AI Platform And |
| 2026-05-21 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | [Latest] Global Private 5G Network Market to Reach USD 312.2 |
| 2026-05-20 | M&A | 🟢 +1 | 0.84 | Yahoo Fina | Ericsson’s AI Partnerships Extend Connectivity Reach Beyond  |
| 2026-05-19 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Outside China, 5G Drives Core Network Revenue Even Higher, A |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Sureshot.io Selects Vonage to Power Next-Generation Customer |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Ericsson, Net Feasa Team Up on Maritime Connectivity System |
| 2026-05-19 | M&A | 🟢 +1 | 0.7 | Yahoo Fina | Ericsson and Net Feasa to deliver maritime connectivity comp |
| 2026-05-18 | Buyback | 🟢 +1 | 1.3 | Yahoo Fina | Share buybacks in Ericsson during the period May 11 - May 15 |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **56** / 100 |
| Raw Weighted Score | 3.67 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 25 / 15 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Rocket Lab Wins Space Force Deal As Valuation And Momentum Diverge
- 🟢 [Industry|w2.52] Rocket Lab Lands $90 Million US Space Force Deal
- 🟢 [Industry|w2.16] Rocket Lab Stock Rebounds From SpaceX IPO Anxiety

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.63] Rocket Lab Stock Falls After The Close: What's Happening?
- 🔴 [Industry|w2.55] Why Rocket Lab (RKLB) Stock Is Falling Today
- 🔴 [Industry|w2.1] Why Is Rocket Lab Stock Under Pressure?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | China launches Shenzhou-23 mission with potential record one |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Rocket Lab and Redwire Shares Skyrocket, What You Need To Kn |
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Rocket Lab Wins Space Force Deal As Valuation And Momentum D |
| 2026-05-23 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Why Rocket Lab (RKLB) Stock Is Falling Today |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | SpaceX's $2 Trillion Valuation May Be More About Starlink Th |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | AMC Entertainment, Nvidia, Arm Holdings And More: 5 Stocks I |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | These Space ETFs Are Retail’s ‘Standout Favorite’ Ahead Of S |
| 2026-05-22 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Rocket Lab Stock Rebounds From SpaceX IPO Anxiety |

---

## 🔴 Avoid / Short (2)

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 11.22 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 15 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent
- 🟢 [M&A|w3.57] Flex Pitches AI Data Center Spin-Off as Power and Cooling Growth Accel
- 🟢 [M&A|w3.53] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.7] Why Flex (FLEX) Is Down 8.5% After Cloud Spinoff Plan And Insider Sale
- 🔴 [Industry|w0.59] Flex and Arlo Technologies Stocks Trade Down, What You Need To Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Assessing Flex (FLEX) Valuation After A Sharp Multi Month Sh |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-23 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Flex Pitches AI Data Center Spin-Off as Power and Cooling Gr |
| 2026-05-23 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Flex Teradyne Robotics Tie Up Reframes Automation Risks And  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex to Participate in Upcoming Investor Conferences |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | 1 of Wall Street’s Favorite Stock with Exciting Potential an |
| 2026-05-22 | M&A | 🟢 +1 | 3.53 | Finnhub | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-21 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | 1 Surging  Stock with Competitive Advantages and 2 We Find R |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **56** / 100 |
| Raw Weighted Score | 3.67 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 25 / 15 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Rocket Lab Wins Space Force Deal As Valuation And Momentum Diverge
- 🟢 [Industry|w2.52] Rocket Lab Lands $90 Million US Space Force Deal
- 🟢 [Industry|w2.16] Rocket Lab Stock Rebounds From SpaceX IPO Anxiety

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.63] Rocket Lab Stock Falls After The Close: What's Happening?
- 🔴 [Industry|w2.55] Why Rocket Lab (RKLB) Stock Is Falling Today
- 🔴 [Industry|w2.1] Why Is Rocket Lab Stock Under Pressure?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | China launches Shenzhou-23 mission with potential record one |
| 2026-05-23 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Rocket Lab and Redwire Shares Skyrocket, What You Need To Kn |
| 2026-05-23 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Rocket Lab Wins Space Force Deal As Valuation And Momentum D |
| 2026-05-23 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Why Rocket Lab (RKLB) Stock Is Falling Today |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | SpaceX's $2 Trillion Valuation May Be More About Starlink Th |
| 2026-05-23 | Industry | ⚪  0 | 0.6 | Finnhub | AMC Entertainment, Nvidia, Arm Holdings And More: 5 Stocks I |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | These Space ETFs Are Retail’s ‘Standout Favorite’ Ahead Of S |
| 2026-05-22 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Rocket Lab Stock Rebounds From SpaceX IPO Anxiety |

---

## ⚪ Watch / Neutral (28)

### NASDAQ:CPRX
- Score: 59/100 | raw: 2.1 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 57/100 | raw: 1.68 | News: 3 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 56/100 | raw: 1.52 | News: 8 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 55/100 | raw: 1.31 | News: 7 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 55/100 | raw: 1.2 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 55/100 | raw: 1.18 | News: 6 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 54/100 | raw: 0.86 | News: 14 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 54/100 | raw: 0.84 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 53/100 | raw: 0.72 | News: 3 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 53/100 | raw: 0.66 | News: 9 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 53/100 | raw: 0.73 | News: 7 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRDO
- Score: 52/100 | raw: 0.52 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 52/100 | raw: 0.36 | News: 7 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 52/100 | raw: 0.54 | News: 10 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 3 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 45/100 | raw: -1.09 | News: 3 kept / 17 dropped | No clear directional bias — stay flat

### NASDAQ:BGC
- Score: 44/100 | raw: -1.4 | News: 2 kept / 17 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-24T07:50:13.892Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*