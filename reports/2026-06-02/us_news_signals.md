# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-02  |  **News Window:** 2026-05-26 ~ 2026-06-02
**Stock Pool:** us_selected.txt (61)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:MOD** | **93** | 10.37 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/27 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:IREN** | **91** | 15.96 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 16/22 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:HPE** | **91** | 43.87 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 22/16 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:TTMI** | **91** | 9.9 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/23 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:DKS** | **88** | 13.95 | 🟢 Long (Strong) | Momentum / Hold | High | 13/27 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:AMAT** | **87** | 8.9 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/23 | Overheated Sentiment (one-sided bullish) |
| 7 | **NYSE:RIO** | **87** | 8.93 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/11 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:NBIS** | **87** | 10.18 | 🟢 Long (Strong) | Momentum / Hold | High | 13/27 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:AVGO** | **86** | 15.02 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 19/11 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:NVDA** | **85** | 19.3 | 🟢 Long (Strong) | Momentum / Hold | High | 24/14 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:HON** | **83** | 19.81 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/21 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:MRVL** | **80** | 7.99 | 🟢 Long (Strong) | Momentum / Hold | High | 10/17 | - |
| 13 | **NASDAQ:WDC** | **76** | 6.17 | 🟢 Long (Strong) | Momentum / Hold | High | 10/26 | - |
| 14 | **NYSE:CIEN** | **74** | 5.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/20 | - |
| 15 | **NASDAQ:LRCX** | **74** | 6.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/27 | - |
| 16 | **NYSE:P** | **73** | 7.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/19 | - |
| 17 | **NASDAQ:MU** | **72** | 5.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/27 | - |
| 18 | **NASDAQ:CRWV** | **68** | 4.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/29 | - |
| 19 | **NASDAQ:TLN** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/22 | Sentiment Strengthening UP (trend) |
| 20 | **NASDAQ:ASML** | **66** | 5.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/20 | - |
| 21 | **NASDAQ:ERIC** | **66** | 3.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/11 | - |
| 22 | **NASDAQ:KLAC** | **65** | 3.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/31 | - |
| 23 | **NASDAQ:FIVE** | **65** | 3.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/12 | - |
| 24 | **NASDAQ:APLD** | **61** | 2.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/19 | - |
| 25 | **NYSE:NVT** | **60** | 2.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/28 | - |
| 26 | **NYSE:COHR** | **59** | 2.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 27 | **NYSE:TSM** | **59** | 2.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/20 | - |
| 28 | **NASDAQ:FLEX** | **58** | 1.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/23 | - |
| 29 | **NYSE:GNRC** | **56** | 1.35 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/21 | - |
| 30 | **NASDAQ:AAPL** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/22 | - |
| 31 | **NYSE:DOCN** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/21 | - |
| 32 | **NYSE:C** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/29 | - |
| 33 | **NASDAQ:CORZ** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 34 | **NASDAQ:PLXS** | **53** | 0.83 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/17 | - |
| 35 | **NYSE:CLS** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 36 | **NYSE:JHG** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/14 | - |
| 37 | **NYSE:IRM** | **52** | 0.47 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/21 | - |
| 38 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 39 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/20 | - |
| 40 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/30 | - |
| 41 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 42 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 43 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/22 | - |
| 44 | **NYSE:NOK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/32 | - |
| 45 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 46 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:ENS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/12 | - |
| 48 | **NASDAQ:SEDG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 49 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 50 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 51 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/15 | - |
| 52 | **NYSE:JBL** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/26 | - |
| 53 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 54 | **NASDAQ:CRML** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/18 | - |
| 55 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 56 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 57 | **NASDAQ:CPRX** | **47** | -0.7 | ⚪ No Trade (Neutral) | Watch | Low | 1/13 | - |
| 58 | **NYSE:QBTS** | **47** | -0.71 | ⚪ No Trade (Neutral) | Watch | Low | 2/19 | - |
| 59 | **NYSE:CARR** | **47** | -0.8 | ⚪ No Trade (Neutral) | Watch | Low | 4/23 | - |
| 60 | **NASDAQ:AMD** | **44** | -2.19 | ⚪ No Trade (Neutral) | Watch | Low | 21/19 | Sustained Bearish Flow (3-day) |
| 61 | **NASDAQ:CRDO** | **43** | -1.74 | ⚪ No Trade (Neutral) | Watch | Low | 8/18 | - |

---

## 🟢 Strong Long (5)

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 13.95 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] JP Morgan Upgrades DICK'S Sporting Goods (DKS)
- 🟢 [Earnings|w1.91] DKS Lifts Its Comps Outlook During Q1 Earnings Call on Core Strength
- 🟢 [Analyst Action|w1.76] JP Morgan Upgrades Dick's Sporting Goods to Overweight, Raises Price T

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.5] DKS Q1 Deep Dive: Margin Pressures and Integration Shape Outlook After

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | JP Morgan Upgrades DICK'S Sporting Goods (DKS) |
| 2026-05-28 | Earnings | 🔴 -1 | 0.5 | Yahoo Fina | DKS Q1 Deep Dive: Margin Pressures and Integration Shape Out |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Yahoo Fina | DKS Stock In Focus: Wall Street Sees Promise And Risks In Di |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | JP Morgan Upgrades Dick's Sporting Goods to Overweight, Rais |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Truist Securities Maintains Buy on Dick's Sporting Goods, Ra |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Barclays Maintains Overweight on Dick's Sporting Goods, Rais |
| 2026-05-28 | Analyst Action | ⚪  0 | 1.76 | Finnhub | Wells Fargo Maintains Equal-Weight on Dick's Sporting Goods, |
| 2026-05-28 | Earnings | 🟢 +1 | 1.91 | Finnhub | DKS Lifts Its Comps Outlook During Q1 Earnings Call on Core  |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 10.18 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 27 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.1] The Smartest AI Money Is Buying Nebius
- 🟢 [Earnings|w1.91] Nebius Is Aiming For The Clouds And So Is Their Stock Price
- 🟢 [Buyback|w1.76] Why Is Nebius Stock Surging On Thursday?

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.76] Nebius' 684% Revenue Surge Hides A Risk Nobody's Talking About
- 🔴 [Industry|w0.51] ChatGPT Stock Portfolio: Trimming Nebius Group (NBIS) After a ‘Monster

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Citi Just Raised Its Price Target on Nebius to a New Street  |
| 2026-06-01 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | ChatGPT Stock Portfolio: Trimming Nebius Group (NBIS) After  |
| 2026-06-01 | Industry | 🟢 +1 | 0.85 | Seeking Al | Nebius: Ballooning Upside Potential |
| 2026-05-31 | Industry | 🟢 +1 | 1.01 | Finnhub | Nebius: Ballooning Upside Potential |
| 2026-05-29 | Buyback | 🟢 +1 | 2.1 | Finnhub | The Smartest AI Money Is Buying Nebius |
| 2026-05-28 | Industry | 🟢 +1 | 0.59 | Finnhub | Nebius: Riding Powerful Demand Volume And Pricing Tailwinds |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Finnhub | Nebius Shares Rise 4% After Key Trading Signal |
| 2026-05-28 | Earnings | 🔴 -1 | 0.76 | Finnhub | Nebius' 684% Revenue Surge Hides A Risk Nobody's Talking Abo |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 19.3 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 24 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] This News From Nvidia CEO Jensen Huang Could Shift the Stock Into Over
- 🟢 [Industry|w2.98] Nvidia sends PC makers a message they can't ignore
- 🟢 [Industry|w2.13] Wall Street Lunch: Nvidia Unveils New AI Chips, Partnerships At Comput

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Nvidia At $5 Trillion Requires A Grid That Doesn't Exist
- 🔴 [Industry|w0.5] Nvidia And The Reality Of Paying For Perfection

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | NYB.AI Launches Vecura 2.0, Bringing Agentic AI Workflows to |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Yahoo Fina | FLNC Stock Extends Rally Overnight On Nvidia Partnership: Re |
| 2026-06-02 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Microsoft And Nvidia RTX Spark Puts AI PCs In Investor Focus |
| 2026-06-02 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Nvidia Expands Into CPUs As AI Partnerships Grow And Valuati |
| 2026-06-02 | Industry | ⚪  0 | 0.7 | Finnhub | Dow, S&P 500, Nasdaq Futures Slip After Record Rally As US-I |
| 2026-06-02 | Industry | 🟢 +1 | 1.4 | Finnhub | Nvidia CEO says has capacity to supply robust CPU and GPU gr |
| 2026-06-02 | Industry | 🟢 +1 | 1.4 | Finnhub | Why Intel (INTC) Stock Is Trading Lower Today |
| 2026-06-02 | Industry | ⚪  0 | 0.7 | Finnhub | Why AMD Stock Soared 46% in May |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.99 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Is Marvell Technology Stock a Buy After Providing a Strong Outlook?
- 🟢 [Earnings|w1.36] Marvell Technology, Inc. 2027 Q1 - Results - Earnings Call Presentatio
- 🟢 [Analyst Action|w1.21] Deutsche Bank Raises its Price Target on Marvell (MRVL)

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Marvell: I Exited For +112%, But AI Euphoria May Run Further (Rating D

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | ⚪  0 | 1.19 | Finnhub | Marvell Technology Stock Hits a New All-Time High. Is It Sti |
| 2026-06-01 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Marvell: I Exited For +112%, But AI Euphoria May Run Further |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia Validated Marvell's Biggest Growth Driver |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | Interpreting Marvell (MRVL) International Revenue Trends |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Marvell Announces Availability of Industry’s First 102.4 Tbp |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Reported Earlier: Marvell Technology Launches Marvell Teraly |
| 2026-05-31 | Earnings | 🟢 +1 | 3.28 | Finnhub | Is Marvell Technology Stock a Buy After Providing a Strong O |
| 2026-05-31 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Deutsche Bank Raises its Price Target on Marvell (MRVL) |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.17 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 26 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Barclays Raises its Price Target on Western Digital (WDC)
- 🟢 [Earnings|w2.27] Can Western Digital Deliver Continued Gross Margin Improvement?
- 🟢 [Industry|w1.19] Western Digital Links Quantum Secure Drives And AI Board Expertise

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Western Digital Corporation (WDC): Leopold Aschenbrenner Is Selling Th

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Western Digital (WDC) One of the Best Future Tech Stocks  |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Western Digital Links Quantum Secure Drives And AI Board Exp |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | Micron Rises 7%, Western Digital Climbs and SanDisk Climb 4% |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | WD at Computex 2026: AI Doesn't Just Run on Compute - It Run |
| 2026-05-31 | Analyst Action | ⚪  0 | 0.52 | Yahoo Fina | Here’s What Evercore Now Says About Western Digital Corp (WD |
| 2026-05-31 | Industry | 🔴 -1 | 1.01 | Finnhub | Western Digital Corporation (WDC): Leopold Aschenbrenner Is  |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Finnhub | Sandisk Stock Has Soared Over 4,000% Over the Past Year. Wal |
| 2026-05-31 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Barclays Raises its Price Target on Western Digital (WDC) |

---

## 🟢 Mid Long (12)

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 20 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] BofA Raises its Price Target on Ciena (CIEN)
- 🟢 [Earnings|w1.55] What Should Investors Do With Ciena Stock Ahead of Q2 Earnings?
- 🟢 [Industry|w1.19] S&P 500 Quant Leaders: 5 Top Stocks Averaging 133% Forward EPS Growth

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Stock Market Week Ahead: Chipmaker Aims For 9th Straight Triple-Digit 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🟢 +1 | 0.6 | Finnhub | Jim Cramer on Ciena: “There’s More Than Enough Room for It t |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | S&P 500 Quant Leaders: 5 Top Stocks Averaging 133% Forward E |
| 2026-06-01 | Earnings | 🟢 +1 | 1.55 | Finnhub | What Should Investors Do With Ciena Stock Ahead of Q2 Earnin |
| 2026-06-01 | Earnings | ⚪  0 | 0.77 | Finnhub | Countdown to Ciena (CIEN) Q2 Earnings: A Look at Estimates B |
| 2026-06-01 | Earnings | ⚪  0 | 0.77 | Finnhub | Option Volatility And Earnings Report For June 1-5 |
| 2026-05-31 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | BofA Raises its Price Target on Ciena (CIEN) |
| 2026-05-31 | Earnings | ⚪  0 | 0.66 | Finnhub | Wall Street Week Ahead |
| 2026-05-30 | Industry | 🔴 -1 | 0.5 | Finnhub | Stock Market Week Ahead: Chipmaker Aims For 9th Straight Tri |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 6.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 27 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Wells Fargo Maintains Overweight on Lam Research, Raises Price Target 
- 🟢 [Analyst Action|w2.16] How The Lam Research (LRCX) Narrative Is Shifting With New Targets And
- 🟢 [Industry|w1.02] 3 Market-Beating Stocks on Our Watchlist

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Update
- 🔴 [Industry|w0.59] Prepare for a Volatile Ride Ahead in Lam Research Stock After 278% Gai

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 Market-Beating Stocks on Our Watchlist |
| 2026-06-01 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Is Lam Research Stock Outperforming the S&P 500? |
| 2026-06-01 | Industry | 🔴 -1 | 1.19 | Finnhub | Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Upda |
| 2026-06-01 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wells Fargo Maintains Overweight on Lam Research, Raises Pri |
| 2026-05-31 | Industry | ⚪  0 | 0.86 | Yahoo Fina | The Semiconductor Play Nobody Owns Just Lapped Wall Street’s |
| 2026-05-31 | Industry | 🟢 +1 | 1.01 | Finnhub | Top Wall Street analysts see robust growth potential in thes |
| 2026-05-30 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Lam Research CEO Sees AI Fueling $140 Billion Chip Equipment |
| 2026-05-30 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | How The Lam Research (LRCX) Narrative Is Shifting With New T |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 7.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Everpure (P) Is Down 8.8% After Raising 2027 Outlook And Showcasing Cy
- 🟢 [Earnings|w1.91] Everpure Q1 Earnings Beat on Strong AI-Led Storage Demand, Sales Jump 
- 🟢 [Analyst Action|w0.7] Lake Street Maintains Buy on Everpure, Raises Price Target to $94

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.91] Why Everpure (P) Shares Are Trading Lower Today
- 🔴 [Analyst Action|w0.7] UBS Maintains Sell on Everpure, Raises Price Target to $70

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Earnings | 🟢 +1 | 3.87 | Finnhub | Everpure (P) Is Down 8.8% After Raising 2027 Outlook And Sho |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | MarketWatc | New Iran Clashes Send Oil Prices and Bond Yields Surging |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | MarketWatc | The AI Trade Hits Overdrive, Powering Stocks to Historic Gai |
| 2026-05-30 | Earnings | ⚪  0 | 1.09 | Finnhub | Everpure, Inc. (P) Q1 2027 Earnings Call Transcript |
| 2026-05-29 | Earnings | ⚪  0 | 0.5 | Finnhub | Here's What Key Metrics Tell Us About Everpure (P) Q1 Earnin |
| 2026-05-28 | Earnings | 🔴 -1 | 1.91 | Finnhub | Why Everpure (P) Shares Are Trading Lower Today |
| 2026-05-28 | Analyst Action | 🔴 -1 | 0.7 | Finnhub | UBS Maintains Sell on Everpure, Raises Price Target to $70 |
| 2026-05-28 | Earnings | 🟢 +1 | 1.91 | Finnhub | Everpure Q1 Earnings Beat on Strong AI-Led Storage Demand, S |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 27 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.55] Will Micron (MU) Beat Estimates Again in Its Next Earnings Report?
- 🟢 [Analyst Action|w1.43] Why Micron Stock Hit a New All-Time High Today
- 🟢 [Analyst Action|w1.22] Mizuho Raises Micron (MU) Price Target to $1,150, Keeps Outperform Rat

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Micron: Forget The Memory Supercycle - Market Share Is My Biggest Conc
- 🔴 [Industry|w0.85] Micron: Bulls, Bears, And The Question Of Normalisation
- 🔴 [Industry|w0.72] Micron: Upcoming Capacity Ramps Could Change The Story

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Mizuho Raises Micron (MU) Price Target to $1,150, Keeps Outp |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron Powers AI Everywhere at COMPUTEX 2026 |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why Micron Stock Hit a New All-Time High Today |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Upda |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Meet the Latest $1 Trillion Stock |
| 2026-06-01 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Micron: Forget The Memory Supercycle - Market Share Is My Bi |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | 2 AI Memory Stocks Outperforming NVIDIA With Big Upside Ahea |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron Rises 7%, Western Digital Climbs and SanDisk Climb 4% |

---

### NASDAQ:CRWV

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 29 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] CoreWeave Strengthens AI Cloud Lead With Nvidia Partnership
- 🟢 [Industry|w1.02] Stock Market Today, June 1: CoreWeave Surges on Nvidia Vera Rubin NVL7
- 🟢 [Industry|w1.02] CoreWeave-Tied Data Center Seeks $850 Million Junk Bond Sale

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] CoreWeave Just Launched a Shiny New Product. Don’t Expect It to Move t
- 🔴 [Industry|w0.5] CoreWeave Stock Is On The Move: The Chart Tells An Interesting Story

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Stock Market Today, June 1: CoreWeave Surges on Nvidia Vera  |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | CoreWeave-Tied Data Center Seeks $850 Million Junk Bond Sale |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | New Era Energy & Digital Names Evan Pierce as Chief Developm |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why CoreWeave Stock Is Up on Monday |
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | CoreWeave Just Launched a Shiny New Product. Don’t Expect It |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Michael Dell Says 'We're Thrilled' – CRWV Stock Climbs After |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | CoreWeave Strengthens AI Cloud Lead With Nvidia Partnership |
| 2026-05-28 | Industry | 🟢 +1 | 0.59 | Finnhub | What's Going On With CoreWeave Stock Today? |

---

### NASDAQ:TLN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Talen Energy Receives Regulatory Clearances for Lawrenceburg, Waterfor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | M&A | 🟢 +1 | 4.16 | Finnhub | Talen Energy Receives Regulatory Clearances for Lawrenceburg |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] ASML: I Called The Supercycle - Here's What Comes Next
- 🟢 [M&A|w2.06] ​ ASML Holding N.V. (ASML) Sets Sights on India’s Foundry Opportunitie
- 🟢 [M&A|w1.43] ASML And Tata Electronics Expand India Chip Ambitions And Investor Sto

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] ASML's Ride Won't Last Forever
- 🔴 [Analyst Action|w1.21] ASML: The Best Semiconductor Stock? Maybe; The Best Investment? Not An
- 🔴 [Policy|w0.84] Analysis-Huawei bets on speed over shrinking transistors to sidestep U

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | ASML And Tata Electronics Expand India Chip Ambitions And In |
| 2026-06-01 | Buyback | ⚪  0 | 1.22 | Yahoo Fina | ASML reports transactions under its current share buyback pr |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ‘We’re in the First or Second Inning’ of AI Revolution, Says |
| 2026-06-01 | Industry | ⚪  0 | 1.19 | Finnhub | ASML: What If The Semiconductor Market Matures In 2050? |
| 2026-06-01 | Earnings | 🟢 +1 | 3.87 | Finnhub | ASML: I Called The Supercycle - Here's What Comes Next |
| 2026-06-01 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | ASML's Ride Won't Last Forever |
| 2026-05-31 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | ASML Holding N.V. (ASML): Leopold Aschenbrenner Reveals New  |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Finnhub | The Smarter Way to Invest in AI Without Taking Extreme Risk |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 11 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.22] Share buybacks in Ericsson during the period May 25 - May 29, 2026
- 🟢 [Industry|w1.08] TeraGo Deploys Ericsson Private 5G Network at McMaster Manufacturing R
- 🟢 [Industry|w1.08] Can Ericsson's 5G Innovation Network in Canada Drive Future Growth?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Buyback | 🟢 +1 | 1.22 | Yahoo Fina | Share buybacks in Ericsson during the period May 25 - May 29 |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | A Look At Ericsson (OM:ERIC B) Valuation After Strong Recent |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Comtech (CMTL) Surges 11.0%: Is This an Indication of Furthe |
| 2026-05-29 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Ericsson's Nomination Committee appointed |
| 2026-05-27 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | TeraGo Deploys Ericsson Private 5G Network at McMaster Manuf |
| 2026-05-27 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Vonage Ranked #1 for Video in the 2026 Gartner® Critical Cap |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 31 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] KLA (KLAC) Up 10.1% Since Last Earnings Report: Can It Continue?
- 🟢 [Industry|w0.72] Top 5 Stocks That Will Ride the Data Center Chip Equipment Supercycle
- 🟢 [Analyst Action|w0.72] Brokers Suggest Investing in KLA (KLAC): Read This Before Placing a Be

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.5] Assessing Whether KLA (KLAC) Looks Overvalued After Its Strong Recent 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-30 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Top 5 Stocks That Will Ride the Data Center Chip Equipment S |
| 2026-05-29 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | KLA (KLAC) Up 10.1% Since Last Earnings Report: Can It Conti |
| 2026-05-29 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Can KLA's Greenfield Fab Exposure Spark Multi-Year Revenue G |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | Brokers Suggest Investing in KLA (KLAC): Read This Before Pl |
| 2026-05-28 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | ASML vs. KLAC: Which Semiconductor Equipment Stock Is the Be |
| 2026-05-27 | Analyst Action | 🔴 -1 | 0.5 | Yahoo Fina | Assessing Whether KLA (KLAC) Looks Overvalued After Its Stro |
| 2026-05-27 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why KLA Corporation (KLAC) Stock Is Up Today |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 12 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Truist Securities Maintains Buy on Five Below, Raises Price Target to 
- 🟢 [Analyst Action|w1.43] Jim Cramer on Five Below: “I Would Buy Five Below Ahead of the Quarter
- 🟢 [Industry|w0.59] Five Below (NASDAQ:FIVE): A High-Growth Breakout Setup With Zero Debt 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Jim Cramer on Five Below: “I Would Buy Five Below Ahead of t |
| 2026-05-31 | Earnings | ⚪  0 | 1.31 | Finnhub | 3 Earnings Reports to Watch This Week |
| 2026-05-29 | Earnings | ⚪  0 | 0.91 | Finnhub | Five Below (FIVE) Q1 Earnings on the Horizon: Analysts' Insi |
| 2026-05-28 | Industry | 🟢 +1 | 0.59 | Finnhub | Five Below (NASDAQ:FIVE): A High-Growth Breakout Setup With  |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Truist Securities Maintains Buy on Five Below, Raises Price  |
| 2026-05-27 | Earnings | ⚪  0 | 0.66 | Finnhub | Five Below (FIVE) Reports Next Week: Wall Street Expects Ear |
| 2026-05-27 | Earnings | ⚪  0 | 0.66 | Finnhub | Five Below Q1 Preview: Shares A Hold, Strong Results Expecte |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 19 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] B. Riley Securities Maintains Buy on Applied Digital, Raises Price Tar
- 🟢 [Industry|w1.26] Why Applied Digital Corporation (APLD) Is Gaining Attention After $7.5
- 🟢 [Industry|w0.5] Applied Digital Corporation (APLD): Leopold Aschenbrenner Likes This A

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] 3 Cash-Burning Stocks That Concern Us

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | 3 Cash-Burning Stocks That Concern Us |
| 2026-05-31 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Applied Digital Corporation (APLD): Leopold Aschenbrenner Li |
| 2026-05-28 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Why Applied Digital Corporation (APLD) Is Gaining Attention  |
| 2026-05-28 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Applied Digital (APLD) Is Up 23.9% After 15-Year Hyperscaler |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | B. Riley Securities Maintains Buy on Applied Digital, Raises |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.7] nVent Electric plc (NYSE:NVT) Screens Strong as an Affordable Growth P
- 🟢 [Industry|w0.6] AI Buildout Trends Keep This Company's Outlook Bright
- 🟢 [Industry|w0.59] NVent Electric Poised for Multiple Years of Growth Due to Liquid Cooli

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Bull Case For nVent Electric (NVT) Could Change Followin |
| 2026-06-01 | Industry | 🟢 +1 | 0.6 | Finnhub | AI Buildout Trends Keep This Company's Outlook Bright |
| 2026-05-31 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | A Look At nVent Electric (NVT) Valuation After Positive Data |
| 2026-05-29 | Industry | 🟢 +1 | 0.7 | Finnhub | nVent Electric plc (NYSE:NVT) Screens Strong as an Affordabl |
| 2026-05-28 | Industry | 🟢 +1 | 0.59 | Finnhub | NVent Electric Poised for Multiple Years of Growth Due to Li |

---

## 🟡 Cautious Long (1)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 15.96 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] IREN Closes $3.65B Investment-Grade GPU Financing Facility To Support 
- 🟢 [Industry|w2.55] IREN closes $3.65 billion GPU financing to back Microsoft AI cloud con
- 🟢 [Industry|w2.13] IREN closes $3.65B GPU financing facility

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] IREN’s Massive GPU Bet And Digital Twin Raise Execution Questions For 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells |
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | IREN’s Massive GPU Bet And Digital Twin Raise Execution Ques |
| 2026-06-01 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN closes $3.65 billion GPU financing to back Microsoft AI |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Iren, BE Networks Collaborate to Validate AI Infrastructure  |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | IREN and BE Networks Accelerate Deployment of Large-Scale AI |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | CleanSpark: Up Over 100%, But The Fundamentals Keep Getting  |
| 2026-06-01 | Industry | 🟢 +1 | 2.98 | Finnhub | IREN Closes $3.65B Investment-Grade GPU Financing Facility T |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | BE Networks and IREN Simulate 50,000 Using NVIDIA GPU AI Sys |

---

## ⚠️ Overheated (7)

### NYSE:MOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 10.37 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 27 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Does MOD's Q4 Strength and $4B AI Data Center Deal Make It a Buy?
- 🟢 [Earnings|w2.81] Why The Modine (MOD) Investment Story Is Shifting With Data Center Dea
- 🟢 [Earnings|w1.4] Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highlights: Record

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Does MOD's Q4 Strength and $4B AI Data Center Deal Make It a |
| 2026-05-31 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Why The Modine (MOD) Investment Story Is Shifting With Data  |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | DA Davidson Maintains Buy on Modine Manufacturing, Raises Pr |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | UBS Maintains Buy on Modine Manufacturing, Raises Price Targ |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Oppenheimer Maintains Outperform on Modine Manufacturing, Ra |
| 2026-05-27 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highligh |
| 2026-05-27 | Earnings | ⚪  0 | 1.64 | Finnhub | Modine Manufacturing Company (MOD) Q4 2026 Earnings Call Tra |
| 2026-05-27 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Keybanc Maintains Overweight on Modine Manufacturing, Raises |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 43.87 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 22 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] HPE&#x2019;s stock soars toward record gain as earnings show a network
- 🟢 [Earnings|w3.87] Hewlett Packard Enterprise Q2 Earnings Call Highlights
- 🟢 [Earnings|w3.87] Hewlett Packard Enterprise stock soars 36% as AI server demand drives 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Why Is Hewlett Packard Enterprise (HPE) Stock Rocketing High |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Yahoo Fina | How The Evolving Story For Hewlett Packard Enterprise (HPE)  |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Dow, S&P 500, Nasdaq Futures Slip After Record Rally As US-I |
| 2026-06-02 | Earnings | 🟢 +1 | 3.9 | MarketWatc | HPE&#x2019;s stock soars toward record gain as earnings show |
| 2026-06-02 | Earnings | 🟢 +1 | 3.25 | Seeking Al | HPE outlines fiscal 2027 framework with at least $4.5B free  |
| 2026-06-02 | Earnings | ⚪  0 | 1.3 | Seeking Al | Hewlett Packard Enterprise Company (HPE) Q2 2026 Earnings Ca |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: HP Inc. |
| 2026-06-01 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | HPE Q2 2026 Earnings Call Transcript |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.9 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Stifel Maintains Buy on TTM Technologies, Raises Price Target to $205
- 🟢 [Analyst Action|w1.76] Truist Securities Maintains Buy on TTM Technologies, Raises Price Targ
- 🟢 [Analyst Action|w1.76] B. Riley Securities Maintains Buy on TTM Technologies, Raises Price Ta

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | New Strong Buy Stocks for June 1st |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | TTMI Stock Shows How Swing Trading Rules Lead To Success |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | TTM (TTMI) Up 18.7% Since Last Earnings Report: Can It Conti |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Stifel Maintains Buy on TTM Technologies, Raises Price Targe |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Truist Securities Maintains Buy on TTM Technologies, Raises  |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | B. Riley Securities Maintains Buy on TTM Technologies, Raise |
| 2026-05-28 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Needham Maintains Buy on TTM Technologies, Raises Price Targ |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.9 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Assessing Applied Materials (AMAT) Valuation After Earnings Beat And N
- 🟢 [Industry|w1.19] Jim Cramer Says He’s Betting “Applied Materials Will Just Keep Winning
- 🟢 [Industry|w1.19] Applied Materials And Its Real Value

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is It Worth Investing in Applied Materials (AMAT) Based on W |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Applied Materials, Inc. (AMAT) Is a Trending Stock: Facts to |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Jim Cramer Says He’s Betting “Applied Materials Will Just Ke |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | Is Lam Research Stock Outperforming the S&P 500? |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Applied Materials And Its Real Value |
| 2026-05-31 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Applied Materials (AMAT) – Among the 10 Best Long-Term Divid |
| 2026-05-30 | Industry | 🟢 +1 | 0.84 | Finnhub | These Artificial Intelligence (AI) Stocks Have Crushed Nvidi |
| 2026-05-30 | Industry | 🟢 +1 | 0.84 | Finnhub | Top 5 Stocks That Will Ride the Data Center Chip Equipment S |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.93 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] Rio Tinto Commissions $1.5B AP60 Smelter Expansion In Quebec
- 🟢 [Industry|w1.5] RIO Starts $1.5B AP60 Smelter Expansion in Quebec, Targets End-2026 Co
- 🟢 [Industry|w1.5] Rio Tinto Begins Commissioning $1.5 Billion AP60 Smelter Expansion in 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | Sandvik and Rio Tinto team up for autonomous drilling |
| 2026-05-31 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Is It Too Late To Consider Rio Tinto Group (LSE:RIO) After A |
| 2026-05-29 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | RIO Starts $1.5B AP60 Smelter Expansion in Quebec, Targets E |
| 2026-05-29 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Rio Tinto Begins Commissioning $1.5 Billion AP60 Smelter Exp |
| 2026-05-29 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Rio Tinto commissions $1.5 billion AP60 smelter expansion in |
| 2026-05-29 | Industry | 🟢 +1 | 1.75 | Finnhub | Rio Tinto Commissions $1.5B AP60 Smelter Expansion In Quebec |
| 2026-05-29 | Industry | 🟢 +1 | 1.25 | Seeking Al | Rio Tinto commissions $1.5B Quebec aluminum smelter expansio |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | Here’s What Deutsche Bank Has to Say About Rio Tinto Group ( |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 15.02 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3.5] Why Broadcom (AVGO) Is Up 11.1% After New AI Data Center And Edge Netw
- 🟢 [Earnings|w1.55] Prediction: Broadcom's June 3 Earnings Report Will Matter More Than An
- 🟢 [Analyst Action|w1.43] Susquehanna and UBS Raise Broadcom (AVGO) Price Target Ahead of Result

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 0.7 | Finnhub | Dow Jones Futures Slide: Broadcom, Micron, Nvidia, Sandisk,  |
| 2026-06-02 | Industry | ⚪  0 | 0.7 | Finnhub | TSMC executive drops blunt message on AI chip’s next frontie |
| 2026-06-02 | Industry | 🟢 +1 | 1.4 | Finnhub | These Linked Stocks Are 2 of the Best Ways to Play the Ongoi |
| 2026-06-02 | Industry | 🟢 +1 | 3.5 | Finnhub | Why Broadcom (AVGO) Is Up 11.1% After New AI Data Center And |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Susquehanna and UBS Raise Broadcom (AVGO) Price Target Ahead |
| 2026-06-01 | Industry | 🟢 +1 | 0.6 | Finnhub | Dow Jones Futures: Broadcom, Micron, Nvidia, Sandisk, Tesla  |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Upda |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | Broadcom Connects the AI Edge with Comprehensive Multi-Gig B |

---

### NASDAQ:HON

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 19.81 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Honeywell Unveils Brands For Historic June Split
- 🟢 [M&A|w4.16] HONEYWELL UNVEILS NEW BRANDS EFFECTIVE POST SPIN-OFF: HONEYWELL TECHNO
- 🟢 [M&A|w4.16] Honeywell Splits Into Two Public Companies, Aerospace Spinoff Set for 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | ⚪  0 | 1.19 | Finnhub | HONEYWELL APPOINTS JILL EVANKO TO BOARD OF DIRECTORS |
| 2026-06-01 | M&A | ⚪  0 | 1.66 | Finnhub | Dear Honeywell Stock Fans, Mark Your Calendars for June 3 |
| 2026-06-01 | Industry | ⚪  0 | 1.19 | Finnhub | A PRIME Ranking Of Space Stocks To Consider Before The Space |
| 2026-06-01 | Earnings | ⚪  0 | 3.87 | Finnhub | HONEYWELL TO HOST 2026 UPDATE CALL AND INTRODUCE OUTLOOK FOR |
| 2026-06-01 | Industry | ⚪  0 | 1.19 | Finnhub | Is Honeywell International Stock Underperforming the Nasdaq? |
| 2026-06-01 | M&A | 🟢 +1 | 4.16 | Finnhub | Honeywell Unveils Brands For Historic June Split |
| 2026-06-01 | M&A | 🟢 +1 | 4.16 | Finnhub | HONEYWELL UNVEILS NEW BRANDS EFFECTIVE POST SPIN-OFF: HONEYW |
| 2026-06-01 | M&A | 🟢 +1 | 4.16 | Finnhub | Honeywell Splits Into Two Public Companies, Aerospace Spinof |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 15.96 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 16 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] IREN Closes $3.65B Investment-Grade GPU Financing Facility To Support 
- 🟢 [Industry|w2.55] IREN closes $3.65 billion GPU financing to back Microsoft AI cloud con
- 🟢 [Industry|w2.13] IREN closes $3.65B GPU financing facility

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] IREN’s Massive GPU Bet And Digital Twin Raise Execution Questions For 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells |
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | IREN’s Massive GPU Bet And Digital Twin Raise Execution Ques |
| 2026-06-01 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN closes $3.65 billion GPU financing to back Microsoft AI |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Iren, BE Networks Collaborate to Validate AI Infrastructure  |
| 2026-06-01 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | IREN and BE Networks Accelerate Deployment of Large-Scale AI |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Finnhub | CleanSpark: Up Over 100%, But The Fundamentals Keep Getting  |
| 2026-06-01 | Industry | 🟢 +1 | 2.98 | Finnhub | IREN Closes $3.65B Investment-Grade GPU Financing Facility T |
| 2026-06-01 | Industry | 🟢 +1 | 1.19 | Finnhub | BE Networks and IREN Simulate 50,000 Using NVIDIA GPU AI Sys |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **44** / 100 |
| Raw Weighted Score | -2.19 |
| Trading Signal | **⚪ No Trade (Neutral)** |
| Strategy | No clear directional bias — stay flat |
| Suitable For | Watch |
| Confidence | Low |
| News Kept / Dropped | 21 / 19 |
| Patterns | WARNING: Sustained Bearish Flow (3-day) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.56] Why AMD Stock Soared 46% in May
- 🟢 [M&A|w1.43] DriveNets secures $410 million in latest funding round, AMD joins as i
- 🟢 [Analyst Action|w1.43] AMD Target Raised as AI CPU Demand Builds

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Nvidia CEO says has capacity to supply robust CPU and GPU growth
- 🔴 [Industry|w1.2] Why Intel (INTC) Stock Is Trading Lower Today
- 🔴 [Industry|w1.19] Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Nvidia CEO says has capacity to supply robust CPU and GPU gr |
| 2026-06-02 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Why Intel (INTC) Stock Is Trading Lower Today |
| 2026-06-02 | Earnings | 🟢 +1 | 1.56 | Yahoo Fina | Why AMD Stock Soared 46% in May |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Yahoo Fina | TSMC executive drops blunt message on AI chip’s next frontie |
| 2026-06-01 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AI Trade Gets a Fresh Boost—Heard on the Street Recap |
| 2026-06-01 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | DriveNets secures $410 million in latest funding round, AMD  |
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Nvidia Brings AI Processing To The Desktop With New PC Chip |
| 2026-06-01 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Why Arm Stock Hit A Record High on Nvidia’s Chip Announcemen |

---

## ⚪ Watch / Neutral (36)

### NYSE:COHR
- Score: 59/100 | raw: 2.17 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 59/100 | raw: 2.2 | News: 4 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 58/100 | raw: 1.86 | News: 6 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 56/100 | raw: 1.35 | News: 4 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 56/100 | raw: 1.5 | News: 14 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 55/100 | raw: 1.26 | News: 3 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:C
- Score: 55/100 | raw: 1.1 | News: 6 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 53/100 | raw: 0.6 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLXS
- Score: 53/100 | raw: 0.83 | News: 4 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CLS
- Score: 53/100 | raw: 0.7 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 52/100 | raw: 0.5 | News: 2 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 52/100 | raw: 0.47 | News: 4 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 3 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 6 kept / 30 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 4 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 50/100 | raw: 0 | News: 2 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENS
- Score: 50/100 | raw: 0 | News: 3 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 50/100 | raw: 0 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 15 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JBL
- Score: 50/100 | raw: 0 | News: 3 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:CRML
- Score: 50/100 | raw: 0 | News: 0 kept / 18 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 47/100 | raw: -0.7 | News: 1 kept / 13 dropped | No clear directional bias — stay flat

### NYSE:QBTS
- Score: 47/100 | raw: -0.71 | News: 2 kept / 19 dropped | No clear directional bias — stay flat

### NYSE:CARR
- Score: 47/100 | raw: -0.8 | News: 4 kept / 23 dropped | No clear directional bias — stay flat

### NASDAQ:AMD
- Score: 44/100 | raw: -2.19 | News: 21 kept / 19 dropped | No clear directional bias — stay flat
- Patterns: WARNING: Sustained Bearish Flow (3-day)

### NASDAQ:CRDO
- Score: 43/100 | raw: -1.74 | News: 8 kept / 18 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-02T03:09:27.373Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*