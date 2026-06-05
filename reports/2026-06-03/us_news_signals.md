# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-03  |  **News Window:** 2026-05-27 ~ 2026-06-03
**Stock Pool:** us_selected.txt (74)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:HPE** | **96** | 19.42 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/16 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GNRC** | **94** | 13.84 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/20 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DY** | **91** | 13.42 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 16/15 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:IREN** | **90** | 15.32 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/23 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:TLN** | **86** | 8.72 | 🟢 Long (Strong) | Momentum / Hold | High | 3/12 | - |
| 6 | **NYSE:QBTS** | **86** | 16.55 | 🟢 Long (Strong) | Momentum / Hold | High | 16/12 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MRVL** | **85** | 8.37 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/27 | Overheated Sentiment (one-sided bullish) |
| 8 | **NYSE:NVT** | **85** | 8.47 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/25 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:CRDO** | **84** | 20.9 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:ADI** | **83** | 8.01 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/28 | Overheated Sentiment (one-sided bullish) |
| 11 | **NYSE:CIEN** | **82** | 8.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/16 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:WDC** | **82** | 10.94 | 🟢 Long (Strong) | Momentum / Hold | High | 13/25 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:AMAT** | **81** | 7.83 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/24 | Sentiment Strengthening UP (trend) |
| 14 | **NASDAQ:CRWV** | **81** | 11.79 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 12/28 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:AVGO** | **80** | 15.49 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 23/15 | Sentiment Strengthening UP (trend) |
| 16 | **NASDAQ:LITE** | **80** | 7.24 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/27 | Overheated Sentiment (one-sided bullish) |
| 17 | **NYSE:RIO** | **79** | 6.84 | 🟢 Long (Strong) | Momentum / Hold | High | 8/12 | - |
| 18 | **NYSE:FCX** | **78** | 6.7 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/24 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:HON** | **76** | 7.9 | 🟢 Long (Strong) | Momentum / Hold | High | 11/22 | - |
| 20 | **NASDAQ:LRCX** | **73** | 5.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/29 | - |
| 21 | **NYSE:CLS** | **73** | 5.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/19 | - |
| 22 | **NASDAQ:NVDA** | **73** | 7.4 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 19/17 | Overheated Sentiment (one-sided bullish) |
| 23 | **NASDAQ:NBIS** | **72** | 5.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/24 | - |
| 24 | **NYSE:KEYS** | **72** | 5.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 25 | **NYSE:COHR** | **70** | 4.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/23 | - |
| 26 | **NYSE:DKS** | **70** | 4.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/30 | - |
| 27 | **NASDAQ:TTMI** | **70** | 4.82 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/14 | Overheated Sentiment (one-sided bullish) |
| 28 | **NYSE:JCI** | **67** | 4.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/23 | - |
| 29 | **NASDAQ:MTSI** | **65** | 3.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/17 | - |
| 30 | **NYSE:BE** | **64** | 3.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/22 | - |
| 31 | **NASDAQ:ASML** | **63** | 3.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/21 | - |
| 32 | **NASDAQ:CORZ** | **63** | 3.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/17 | - |
| 33 | **NYSE:GLW** | **63** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 34 | **NASDAQ:FLEX** | **61** | 2.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 35 | **NYSE:C** | **61** | 2.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/28 | - |
| 36 | **NASDAQ:MU** | **60** | 2.48 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/28 | - |
| 37 | **NYSE:NOK** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 38 | **NYSE:MOD** | **58** | 1.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/14 | - |
| 39 | **NYSE:FN** | **58** | 2.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/15 | - |
| 40 | **NASDAQ:MNST** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/18 | - |
| 41 | **NYSE:DELL** | **57** | 2.38 | ⚪ No Trade (Weak Bullish) | Watch | Low | 26/14 | - |
| 42 | **NASDAQ:SANM** | **56** | 1.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/18 | - |
| 43 | **NASDAQ:AAPL** | **56** | 1.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/21 | - |
| 44 | **NYSE:MS** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/35 | - |
| 45 | **NASDAQ:PLXS** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 46 | **NYSE:JBL** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 47 | **NASDAQ:MPWR** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/14 | - |
| 48 | **NYSE:IRM** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/13 | - |
| 49 | **NYSE:TSM** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 50 | **NYSE:CARR** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/25 | - |
| 51 | **NASDAQ:CRML** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 52 | **NYSE:P** | **53** | 0.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/25 | - |
| 53 | **NYSE:WT** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/6 | - |
| 54 | **NYSE:JHG** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/4 | - |
| 55 | **NYSE:ENS** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/12 | - |
| 56 | **NASDAQ:KLAC** | **50** | 0.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/31 | - |
| 57 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 58 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 59 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 60 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/17 | - |
| 61 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 62 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:SEDG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 64 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 65 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 66 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/15 | - |
| 67 | **NYSE:DOCN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 68 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 69 | **NASDAQ:VIAV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 70 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 71 | **NYSE:ENVA** | **49** | -0.2 | ⚪ No Trade (Neutral) | Watch | Low | 2/20 | - |
| 72 | **NASDAQ:CPRX** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 1/12 | - |
| 73 | **NASDAQ:RMBS** | **45** | -1.19 | ⚪ No Trade (Neutral) | Watch | Low | 5/11 | - |
| 74 | **NASDAQ:AMD** | **36** | -3.84 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 17/23 | - |

---

## 🟢 Strong Long (6)

### NASDAQ:TLN

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.72 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 12 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Talen Energy Receives Regulatory Clearances for Lawrenceburg, Waterfor
- 🟢 [M&A|w3.53] Talen Energy Obtains Regulatory Clearances For Lawrenceburg, Waterford
- 🟢 [M&A|w1.66] Talen Energy: Another Day, Another Deal, Another Repricing

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | M&A | 🟢 +1 | 1.66 | Finnhub | Talen Energy: Another Day, Another Deal, Another Repricing |
| 2026-06-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Talen Energy Receives Regulatory Clearances for Lawrenceburg |
| 2026-06-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Talen Energy Obtains Regulatory Clearances For Lawrenceburg, |

---

### NYSE:QBTS

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 16.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 16 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] D-Wave Seeks to Leverage IBM’s Quantum Foundry. $100 Million in Federa
- 🟢 [Policy|w3.57] D-Wave Quantum Draws US$2b Federal Backing What It Means For Investors
- 🟢 [Policy|w3.02] DoC's $2B Quantum Initiative Puts These 2 Stocks in the Spotlight

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] D-Wave Quantum Still Lags Behind The Industry Average, But Pessimism I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Policy | 🟢 +1 | 3.57 | Finnhub | D-Wave Seeks to Leverage IBM’s Quantum Foundry. $100 Million |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Rigetti Gains From Potential $100 Million U.S. Quantum R&D B |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | B. Riley Securities Maintains Buy on D-Wave Quantum, Raises  |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Roth Capital Maintains Buy on D-Wave Quantum, Raises Price T |
| 2026-06-02 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Needham Reiterates Buy on D-Wave Quantum, Maintains $40 Pric |
| 2026-06-02 | Policy | 🟢 +1 | 3.57 | Finnhub | D-Wave Quantum Draws US$2b Federal Backing What It Means For |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | D-Wave Stock Releases Gate-Model Roadmap. What That Means an |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | IBM Stock Notches Highest Close on Record. This Time It’s No |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 20.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Credo Just Told The Market Something Bigger Than Earnings
- 🟢 [Earnings|w3.87] Credo Says Q4 Revenue Alone Surpassed Its Entire Fiscal 2025 Sales
- 🟢 [Earnings|w1.55] Credo Earnings: Why This Stock Is Now My Largest Holding

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] Credo Technology Group (NASDAQ:CRDO) Q4 Results Beat Estimates but Inl

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Earnings | 🟢 +1 | 1.55 | Finnhub | Credo Earnings: Why This Stock Is Now My Largest Holding |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Roth Capital Maintains Buy on Credo Technology Group, Raises |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Jefferies Maintains Buy on Credo Technology Group, Raises Pr |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Wall Street Lunch: NVIDIA CEO Huang's $1T Marvell Call Trigg |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | TD Cowen Maintains Buy on Credo Technology Group, Raises Pri |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Susquehanna Maintains Positive on Credo Technology Group, Ra |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | JP Morgan Maintains Overweight on Credo Technology Group, Ra |
| 2026-06-02 | Earnings | 🟢 +1 | 3.87 | Finnhub | Credo Just Told The Market Something Bigger Than Earnings |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 10.94 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Citigroup Maintains Buy on Western Digital, Raises Price Target to $68
- 🟢 [Analyst Action|w3.02] Western Digital: The AI Storage Trade Still Has Room To Run
- 🟢 [Analyst Action|w2.55] Western Digital: The AI Storage Trade Still Has Room To Run

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Western Digital: Hold Rating Despite AI Storage Supercycle
- 🔴 [Industry|w0.5] Western Digital Stacks Up Poorly To Peers Like Micron, Don't Buy Here

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | 3 Storage Devices Stocks to Buy as the Industry Gains Moment |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Western Digital Corporation (WDC) Presents at Bank of Americ |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Is Sandisk Stock Outperforming the S&P 500? |
| 2026-06-02 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Western Digital: Hold Rating Despite AI Storage Supercycle |
| 2026-06-02 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citigroup Maintains Buy on Western Digital, Raises Price Tar |
| 2026-06-02 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | Western Digital: The AI Storage Trade Still Has Room To Run |
| 2026-06-01 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Western Digital: The AI Storage Trade Still Has Room To Run |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Western Digital Links Quantum Secure Drives And AI Board Exp |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.84 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 12 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] Sandvik and Rio Tinto team up for autonomous drilling
- 🟢 [Industry|w1.47] Rio Tinto Commissions $1.5B AP60 Smelter Expansion In Quebec
- 🟢 [Industry|w1.26] RIO Starts $1.5B AP60 Smelter Expansion in Quebec, Targets End-2026 Co

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Rio Tinto: Downgrading On Valuation, Not Fundamentals

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Cafe Rio hires &pizza CEO after losing its way |
| 2026-06-02 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Rio Tinto: Downgrading On Valuation, Not Fundamentals |
| 2026-06-01 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | Sandvik and Rio Tinto team up for autonomous drilling |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Rio Tinto Group (LSE:RIO) After A |
| 2026-05-29 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | RIO Starts $1.5B AP60 Smelter Expansion in Quebec, Targets E |
| 2026-05-29 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Rio Tinto Begins Commissioning $1.5 Billion AP60 Smelter Exp |
| 2026-05-29 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Rio Tinto commissions $1.5 billion AP60 smelter expansion in |
| 2026-05-29 | Industry | 🟢 +1 | 1.47 | Finnhub | Rio Tinto Commissions $1.5B AP60 Smelter Expansion In Quebec |

---

### NASDAQ:HON

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 7.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 22 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Dear Honeywell Stock Fans, Mark Your Calendars for June 3
- 🟢 [M&A|w3.53] Quantinuum IPO Demand Surges as Honeywell’s Quantum Unit Eyes $13B Val
- 🟢 [Industry|w0.84] How Honeywell’s AI-Enabled NHL Arena Partnership At Honeywell Internat

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | M&A | ⚪  0 | 0.83 | Finnhub | Dear Future Quantinuum Stock Investors, Mark Your Calendars  |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Jim Cramer: Buy ZIM Integrated Shipping Services, This IPO C |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | HONEYWELL APPOINTS JILL EVANKO TO BOARD OF DIRECTORS |
| 2026-06-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Dear Honeywell Stock Fans, Mark Your Calendars for June 3 |
| 2026-06-01 | Earnings | ⚪  0 | 0.66 | Finnhub | HONEYWELL TO HOST 2026 UPDATE CALL AND INTRODUCE OUTLOOK FOR |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | Is Honeywell International Stock Underperforming the Nasdaq? |
| 2026-06-01 | M&A | ⚪  0 | 0.71 | Finnhub | Honeywell Unveils Brands For Historic June Split |
| 2026-06-01 | M&A | ⚪  0 | 1.41 | Finnhub | HONEYWELL UNVEILS NEW BRANDS EFFECTIVE POST SPIN-OFF: HONEYW |

---

## 🟢 Mid Long (15)

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 29 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Wells Fargo Maintains Overweight on Lam Research, Raises Price Target 
- 🟢 [Industry|w1.01] Is Lam Research Stock Outperforming the S&P 500?
- 🟢 [Analyst Action|w1.01] Top Wall Street analysts see robust growth potential in these 3 stocks

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Tracking Jeremy Grantham's GMO Capital Portfolio - Q1 2026 Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Lam Research (LRCX) Stock Is Trading Up Today |
| 2026-06-02 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Why Lam Research (LRCX) is a Top Stock for the Long-Term |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Tracking Jeremy Grantham's GMO Capital Portfolio - Q1 2026 U |
| 2026-06-02 | Industry | ⚪  0 | 1.19 | Finnhub | Lam Research Corporation (LRCX) Presents at Bank of America  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Is Lam Research Stock Outperforming the S&P 500? |
| 2026-06-01 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Maintains Overweight on Lam Research, Raises Pri |
| 2026-05-31 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Top Wall Street analysts see robust growth potential in thes |
| 2026-05-30 | Industry | 🟢 +1 | 0.7 | Finnhub | Lam Research CEO Sees AI Fueling $140 Billion Chip Equipment |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 19 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Celestica Ready To Explode Higher - 2 Reasons
- 🟢 [Analyst Action|w1.43] Celestica: The Quiet Backbone Of The AI Hardware Revolution
- 🟢 [Analyst Action|w0.6] Celestica May Be One Of The Cleanest AI Infrastructure Plays Left

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Credo Earnings: Why This Stock Is Now My Largest Holding |
| 2026-06-02 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Celestica Ready To Explode Higher - 2 Reasons |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Celestica: The Quiet Backbone Of The AI Hardware Revolution |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Celestica May Be One Of The Cleanest AI Infrastructure Plays |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 24 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.76] The Smartest AI Money Is Buying Nebius
- 🟢 [Earnings|w1.64] Nebius Is Aiming For The Clouds And So Is Their Stock Price
- 🟢 [Industry|w1.26] Why Is Nebius Stock Surging On Thursday?

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.66] Nebius' 684% Revenue Surge Hides A Risk Nobody's Talking About

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Why Is Nebius Stock Surging Tuesday? |
| 2026-06-02 | Analyst Action | ⚪  0 | 1.43 | Finnhub | BNP Paribas Initiates Coverage On Nebius Group with Neutral  |
| 2026-05-31 | Industry | 🟢 +1 | 0.84 | Finnhub | Nebius: Ballooning Upside Potential |
| 2026-05-29 | Buyback | 🟢 +1 | 1.76 | Finnhub | The Smartest AI Money Is Buying Nebius |
| 2026-05-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Nebius: Riding Powerful Demand Volume And Pricing Tailwinds |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Finnhub | Nebius Shares Rise 4% After Key Trading Signal |
| 2026-05-28 | Earnings | 🔴 -1 | 0.66 | Finnhub | Nebius' 684% Revenue Surge Hides A Risk Nobody's Talking Abo |
| 2026-05-28 | Industry | 🟢 +1 | 1.26 | Finnhub | Why Is Nebius Stock Surging On Thursday? |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Keysight Technologies Collaborates With NTT DOCOMO And NTT To Accelera
- 🟢 [Analyst Action|w1.21] Best Momentum Stocks to Buy for June 1st
- 🟢 [Industry|w0.5] KEYSIGHT TECHNOLOGIES IN (NYSE:KEYS) Flashes Perfect Technical Breakou

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Is Keysight Technologies (KEYS) Outperforming Other Computer |
| 2026-06-02 | Industry | ⚪  0 | 0.51 | MarketWatc | Most robo-advisers will never get the keys to Wall Street&#x |
| 2026-06-01 | Analyst Action | ⚪  0 | 1.21 | Finnhub | How A Quiet Analyst Tape Is Shaping The Keysight Technologie |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | Keysight Stock Rises 113.2% in the Past Year: How to Play th |
| 2026-06-01 | M&A | 🟢 +1 | 3.53 | Finnhub | Keysight Technologies Collaborates With NTT DOCOMO And NTT T |
| 2026-05-28 | Industry | 🟢 +1 | 0.5 | Finnhub | KEYSIGHT TECHNOLOGIES IN (NYSE:KEYS) Flashes Perfect Technic |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.55] Coherent: This Party Is Here To Stay
- 🟢 [Industry|w1.4] Coherent (COHR) Hits Record High on Marvell Skyrocket Ride
- 🟢 [Industry|w1.19] Why Coherent (COHR) Stock Is Up Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.4 | Finnhub | Coherent (COHR) Hits Record High on Marvell Skyrocket Ride |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Coherent (COHR) Stock Is Up Today |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Coherent Advances 16%, Lumentum Climbs 13%, Applied Optoelec |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Has Coherent (COHR) Run Too Far After Its 9x Three Year Shar |
| 2026-06-02 | Earnings | 🟢 +1 | 1.55 | Finnhub | Coherent: This Party Is Here To Stay |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Optoelectronics Is Up 439% in 2026: Is It Outperform |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 30 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] DKS Lifts Its Comps Outlook During Q1 Earnings Call on Core Strength
- 🟢 [Analyst Action|w0.7] JP Morgan Upgrades DICK'S Sporting Goods (DKS)
- 🟢 [Analyst Action|w0.6] JP Morgan Upgrades Dick's Sporting Goods to Overweight, Raises Price T

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.56] DKS Q1 Deep Dive: Margin Pressures and Integration Shape Outlook After

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | JP Morgan Upgrades DICK'S Sporting Goods (DKS) |
| 2026-05-28 | Earnings | 🔴 -1 | 0.56 | Yahoo Fina | DKS Q1 Deep Dive: Margin Pressures and Integration Shape Out |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Yahoo Fina | DKS Stock In Focus: Wall Street Sees Promise And Risks In Di |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | JP Morgan Upgrades Dick's Sporting Goods to Overweight, Rais |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Truist Securities Maintains Buy on Dick's Sporting Goods, Ra |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Barclays Maintains Overweight on Dick's Sporting Goods, Rais |
| 2026-05-28 | Analyst Action | ⚪  0 | 0.6 | Finnhub | Wells Fargo Maintains Equal-Weight on Dick's Sporting Goods, |
| 2026-05-28 | Earnings | 🟢 +1 | 1.64 | Finnhub | DKS Lifts Its Comps Outlook During Q1 Earnings Call on Core  |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 23 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Johnson Controls Seeing Stronger Long-Term Amid Turnaround, RBC Says
- 🟢 [Analyst Action|w1.43] UBS Maintains Buy on Johnson Controls Intl, Raises Price Target to $18
- 🟢 [Industry|w1.19] Sensormatic Solutions Expands Options for Sewn-in RFID Source Tagging 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Is Johnson Controls (JCI) Stock Rocketing Higher Today |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Johnson Controls Seeing Stronger Long-Term Amid Turnaround,  |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Sensormatic Solutions Expands Options for Sewn-in RFID Sourc |
| 2026-06-02 | Analyst Action | ⚪  0 | 1.43 | Finnhub | RBC Capital Reiterates Sector Perform on Johnson Controls In |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | UBS Maintains Buy on Johnson Controls Intl, Raises Price Tar |
| 2026-06-02 | Earnings | ⚪  0 | 0.77 | Finnhub | Johnson Controls International plc (JCI) Shareholder/Analyst |
| 2026-06-01 | Earnings | ⚪  0 | 0.66 | Finnhub | Johnson Controls International plc (JCI) Shareholder/Analyst |
| 2026-05-28 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | Reflecting On Commercial Building Products Stocks’ Q1 Earnin |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] MACOM Technology (MTSI) Beats Revenue Estimates on Surging Demand for 
- 🟢 [Industry|w1.2] IPG Photonics, MACOM, and Amkor Shares Skyrocket, What You Need To Kno
- 🟢 [Industry|w0.51] 3 Market-Beating Stocks to Research Further

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Macom Technology Solutions Holdings Insider Sold Shares Worth $5,789,1

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | IPG Photonics, MACOM, and Amkor Shares Skyrocket, What You N |
| 2026-06-02 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Macom Technology Solutions Holdings Insider Sold Shares Wort |
| 2026-06-02 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Market-Beating Stocks to Research Further |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Buy 3 Momentum Anomaly Stocks as Tech Rally Spurs Fresh High |
| 2026-05-31 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MACOM Technology (MTSI) Beats Revenue Estimates on Surging D |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 22 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.52] Bloom Energy Corporation (BE): Leopold Aschenbrenner Is a Huge Fan of 
- 🟢 [Industry|w0.84] AI Energy Needs Are Sending Bloom Energy Stock Soaring. Is Now the Tim
- 🟢 [Industry|w0.59] Bloom Energy vs. FuelCell Energy: Which Clean Energy Stock Leads?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.21] Bloom Energy Stock's Momentum Score Surges Amid 228% YTD Gains, But An

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.6 | MarketWatc | Singapore Dollar Consolidates; U.S. Growth Resilience Could  |
| 2026-06-02 | Policy | ⚪  0 | 0.71 | Finnhub | Trump Cuts Tariffs On Some Steel And Aluminum Products To Bo |
| 2026-06-02 | Industry | ⚪  0 | 0.51 | MarketWatc | This space stock rises as Blue Origin predicts quick recover |
| 2026-06-02 | Industry | ⚪  0 | 0.51 | MarketWatc | Why &#x2018;Nvidia Inside&#x2019; Can Work in the PC Market |
| 2026-06-01 | Analyst Action | 🔴 -1 | 1.21 | Finnhub | Bloom Energy Stock's Momentum Score Surges Amid 228% YTD Gai |
| 2026-05-31 | Buyback | 🟢 +1 | 2.52 | Finnhub | Bloom Energy Corporation (BE): Leopold Aschenbrenner Is a Hu |
| 2026-05-31 | Industry | 🟢 +1 | 0.84 | Finnhub | AI Energy Needs Are Sending Bloom Energy Stock Soaring. Is N |
| 2026-05-30 | Industry | ⚪  0 | 0.7 | Finnhub | Bloom Energy vs. Plug Power: Which Hydrogen Stock Is a Bette |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] ASML: I Called The Supercycle - Here's What Comes Next
- 🟢 [Buyback|w1.04] ASML reports transactions under its current share buyback program
- 🟢 [Industry|w1.01] ‘We’re in the First or Second Inning’ of AI Revolution, Says Top Analy

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Nikon: The ASML Angle Has Limits
- 🔴 [Industry|w1.01] ASML's Ride Won't Last Forever
- 🔴 [Analyst Action|w1.01] ASML: The Best Semiconductor Stock? Maybe; The Best Investment? Not An

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Analyst Report: ASML Holding N.V. |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Nikon: The ASML Angle Has Limits |
| 2026-06-01 | M&A | 🟢 +1 | 0.6 | Yahoo Fina | ASML And Tata Electronics Expand India Chip Ambitions And In |
| 2026-06-01 | Buyback | 🟢 +1 | 1.04 | Yahoo Fina | ASML reports transactions under its current share buyback pr |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | ‘We’re in the First or Second Inning’ of AI Revolution, Says |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML: What If The Semiconductor Market Matures In 2050? |
| 2026-06-01 | Earnings | 🟢 +1 | 3.28 | Finnhub | ASML: I Called The Supercycle - Here's What Comes Next |
| 2026-06-01 | Industry | 🔴 -1 | 1.01 | Finnhub | ASML's Ride Won't Last Forever |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 17 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] BTIG Raises Price Target on Core Scientific (CORZ) Following Power Cap
- 🟢 [Industry|w1.02] Core Scientific (CORZ): A Shovel-Ready Leader in the AI Tech Landscape

**📉 Bearish Factors:**
- 🔴 [Buyback|w0.86] Core Scientific, Inc. (CORZ): Leopold Aschenbrenner Trims Holding

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Core Scientific (CORZ): A Shovel-Ready Leader in the AI Tech |
| 2026-06-02 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | BTIG Raises Price Target on Core Scientific (CORZ) Following |
| 2026-05-31 | Buyback | 🔴 -1 | 0.86 | Yahoo Fina | Core Scientific, Inc. (CORZ): Leopold Aschenbrenner Trims Ho |
| 2026-05-30 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Is Core Scientific (CORZ) Using Veteran Data Center Talent T |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Why Corning (GLW) Stock Is Trading Up Today
- 🟢 [Industry|w0.84] Corning Incorporated (GLW): Leopold Aschenbrenner Discloses New Holdin
- 🟢 [Industry|w0.59] Nvidia Bets Big on Photonics as AI Infrastructure Needs Grow

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Corning (GLW) Stock Is Trading Up Today |
| 2026-06-02 | Industry | ⚪  0 | 1.19 | Finnhub | Is Amphenol Stock Outperforming the Nasdaq? |
| 2026-05-31 | Industry | 🟢 +1 | 0.84 | Finnhub | Corning Incorporated (GLW): Leopold Aschenbrenner Discloses  |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Finnhub | Is It Too Late To Consider Corning (GLW) After Its 269% One  |
| 2026-05-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Discusses the Tremendous Growth of Corning |
| 2026-05-29 | Industry | ⚪  0 | 0.59 | Finnhub | NETGEAR (NTGR) Up 1.7% Since Last Earnings Report: Can It Co |
| 2026-05-29 | Industry | 🟢 +1 | 0.59 | Finnhub | Nvidia Bets Big on Photonics as AI Infrastructure Needs Grow |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] Flex Upgrades AI Portfolio: Can it Capitalize on the Data Center Boom?
- 🟢 [Analyst Action|w0.52] Is Flex Ltd. (FLEX) a Breakout Stock After BofA Raises Target on Busin
- 🟢 [Industry|w0.5] Flex Showcases Scalable Power Solutions for Next-Generation AI Infrast

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Is Flex (FLEX) Stock Rocketing Higher Today |
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Flex Upgrades AI Portfolio: Can it Capitalize on the Data Ce |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Flex Showcases Scalable Power Solutions for Next-Generation  |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex (FLEX) Stock Jumps 4.1%: Will It Continue to Soar? |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | Jim Cramer on Flex Ltd.: “I Say Buy” |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Is Flex Ltd. (FLEX) a Breakout Stock After BofA Raises Targe |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Is Citigroup Stock Outperforming the Dow?
- 🟢 [Industry|w0.51] Citigroup (C) Outperforms Broader Market: What You Need to Know
- 🟢 [Industry|w0.51] Jim Cramer Believes Citigroup (C) Is Fantastic

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Citigroup (C) Outperforms Broader Market: What You Need to K |
| 2026-06-02 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Jim Cramer Believes Citigroup (C) Is Fantastic |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | Citi Just Raised Its Price Target on Nebius to a New Street  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Is Citigroup Stock Outperforming the Dow? |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | Citigroup Forecasts Tokenized Securities Market Will Hit $5. |
| 2026-05-31 | Industry | 🟢 +1 | 0.5 | Finnhub | A Look At Citigroup (C) Valuation As Shares Deliver Strong R |
| 2026-05-31 | Industry | ⚪  0 | 0.84 | Finnhub | Here’s What Citi Thinks About Grupo Aeroportuario del Centro |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.48 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 28 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Is Micron Technology (MU) One of the Top Undervalued Blue Chip Stocks 
- 🟢 [Industry|w1.19] Micron Stock Could Still Have Nearly 70% Upside Potential Left in Its 
- 🟢 [Industry|w1.19] 3 Reasons MU Has Explosive Upside Potential

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Micron: Forget The Memory Supercycle - Market Share Is My Biggest Conc
- 🔴 [Industry|w0.85] Micron: The Cheap Valuation Is The Whole Trap
- 🔴 [Industry|w0.85] Micron: Not A Stock For Ordinary Investors To Chase Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Micron (MU) Rises Higher Than Market: Key Facts |
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | The Hidden Beneficiary of Nvidia’s AI Dominance |
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Micron & 2 Profitable Stocks to Buy in June for Explosive Up |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron Stock Could Still Have Nearly 70% Upside Potential Le |
| 2026-06-02 | Industry | 🔴 -1 | 0.6 | Finnhub | Micron Just Ripped 93% in a Month. Is It Time to Cash Out? |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | 3 Reasons MU Has Explosive Upside Potential |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Micron Just Surpassed $1.16 Trillion Valuation How Long Befo |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Is Micron Technology (MU) One of the Top Undervalued Blue Ch |

---

## 🟡 Cautious Long (4)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 15.32 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Blockspace: Anthropic's IPO, IREN’s $3.65B GPU Financing, Strategy Sel
- 🟢 [Industry|w2.52] IREN Closes $3.65B Investment-Grade GPU Financing Facility To Support 
- 🟢 [Industry|w2.16] Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells BTC, DMG’

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] IREN’s Massive GPU Bet And Digital Twin Raise Execution Questions For 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can Blackwell Deployment Help IREN Limited Hit $4.4B ARR Tar |
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Blockspace: Anthropic's IPO, IREN’s $3.65B GPU Financing, St |
| 2026-06-01 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells |
| 2026-06-01 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | IREN’s Massive GPU Bet And Digital Twin Raise Execution Ques |
| 2026-06-01 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | IREN closes $3.65 billion GPU financing to back Microsoft AI |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Iren, BE Networks Collaborate to Validate AI Infrastructure  |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | IREN and BE Networks Accelerate Deployment of Large-Scale AI |
| 2026-06-01 | Industry | 🟢 +1 | 2.52 | Finnhub | IREN Closes $3.65B Investment-Grade GPU Financing Facility T |

---

### NASDAQ:CRWV

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.79 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why CoreWeave (CRWV) Is Up 18.3% After First NVIDIA Vera Rubin NVL72 C
- 🟢 [Industry|w2.55] Rubin Validation Sparks 14% Rally in CRWV: What's Ahead for the Stock?
- 🟢 [Industry|w2.52] CoreWeave Strengthens AI Cloud Lead With Nvidia Partnership

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] CoreWeave Just Launched a Shiny New Product. Don’t Expect It to Move t
- 🔴 [Industry|w1.19] Buy, Hold, or Sell: Is CoreWeave a Multibagger in the Making, or an AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why CoreWeave (CRWV) Is Up 18.3% After First NVIDIA Vera Rub |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | CoreWeave Shares Advance Following BNP Paribas Upgrade and O |
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Rubin Validation Sparks 14% Rally in CRWV: What's Ahead for  |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Buy, Hold, or Sell: Is CoreWeave a Multibagger in the Making |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Assessing CoreWeave (CRWV) Valuation As Vera Rubin AI Milest |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | BNP Paribas Initiates Coverage On CoreWeave with Outperform  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Stock Market Today, June 1: CoreWeave Surges on Nvidia Vera  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Why CoreWeave Stock Is Up on Monday |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 7.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 19 / 17 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Wall Street Lunch: Nvidia Unveils New AI Chips, Partnerships At Comput
- 🟢 [Industry|w1.4] Lightmatter Joins NVIDIA NVLink Fusion and Powers Next-Generation AI I
- 🟢 [Industry|w1.4] Ayar Labs Joins NVIDIA NVLink™ Fusion Ecosystem to Bring Co-Packaged O

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.2 | Yahoo Fina | AI Computing Chip Showdown: Is Nvidia Still King or Is Broad |
| 2026-06-03 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Nvidia Has Become An 'Infrastructure Company': Jensen Huang  |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Netris Expands NVIDIA DSX Air and Network Automation Integra |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Why Marvell Stock Rocketed to a New All-Time High Today |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Broadcom Stock Just Hit a Record High. You Can Thank Nvidia, |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | IPG Photonics, MACOM, and Amkor Shares Skyrocket, What You N |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Marvell’s (MRVL) ‘Trillion-Dollar’ Potential Propels Firm to |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Himax, FormFactor, and Vishay Intertechnology Shares Skyrock |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.82 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Best Momentum Stocks to Buy for June 1st
- 🟢 [Analyst Action|w1.21] New Strong Buy Stocks for June 1st
- 🟢 [Analyst Action|w0.6] Stifel Maintains Buy on TTM Technologies, Raises Price Target to $205

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Earnings | ⚪  0 | 1.55 | Finnhub | TTM Technologies: Negative On Valuation, Positive On Fundame |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | New Strong Buy Stocks for June 1st |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Finnhub | TTMI Stock Shows How Swing Trading Rules Lead To Success |
| 2026-05-29 | Earnings | ⚪  0 | 0.5 | Finnhub | TTM (TTMI) Up 18.7% Since Last Earnings Report: Can It Conti |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Stifel Maintains Buy on TTM Technologies, Raises Price Targe |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Truist Securities Maintains Buy on TTM Technologies, Raises  |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | B. Riley Securities Maintains Buy on TTM Technologies, Raise |

---

## ⚠️ Overheated (11)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 19.42 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w4.55] Hewlett Packard Soars to All-Time High on Q2 Blowout, Dividends
- 🟢 [Earnings|w3.87] Why Hewlett Packard Enterprise (HPE) Stock Is Up Today
- 🟢 [Earnings|w2.76] Hewlett Packard Enterprise: The AI Infrastructure Trade Is Finally Sho

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 0.7 | Finnhub | IPG Photonics, MACOM, and Amkor Shares Skyrocket, What You N |
| 2026-06-03 | Earnings | 🟢 +1 | 4.55 | Finnhub | Hewlett Packard Soars to All-Time High on Q2 Blowout, Divide |
| 2026-06-03 | Industry | 🟢 +1 | 0.7 | Finnhub | Himax, FormFactor, and Vishay Intertechnology Shares Skyrock |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.68 | Finnhub | Loop Capital Upgrades Hewlett Packard Enterprise (HPE) |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Semtech (SMTC) Stock Is Trading Up Today |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Skyworks Solutions and Teradyne Stocks Trade Up, What You Ne |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Materials and Photronics Stocks Trade Up, What You N |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Amtech, onsemi, and Nova Shares Are Soaring, What You Need T |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 13.84 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Generac (GNRC) Stock Trades Up, Here Is Why
- 🟢 [M&A|w4.16] Generac Lands Global Backup Power Deal With Major Data Center Operator
- 🟢 [M&A|w4.16] Generac Signs Global Supply Agreement with Leading Hyperscale Data Cen

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.4 | Finnhub | Is It Too Late To Consider Generac Holdings (GNRC) After A 1 |
| 2026-06-02 | M&A | 🟢 +1 | 4.16 | Finnhub | Generac (GNRC) Stock Trades Up, Here Is Why |
| 2026-06-02 | M&A | 🟢 +1 | 4.16 | Finnhub | Generac Lands Global Backup Power Deal With Major Data Cente |
| 2026-06-02 | M&A | 🟢 +1 | 4.16 | Finnhub | Generac Signs Global Supply Agreement with Leading Hyperscal |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Finnhub | What to Know About This $18 Million Bet on a Rental Business |
| 2026-05-29 | Earnings | 🟢 +1 | 0.76 | Finnhub | Why Is Generac Holdings (GNRC) Up 7.8% Since Last Earnings R |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | A Look At Generac Holdings (GNRC) Valuation After Data Cente |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 13.42 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 16 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Dycom Industries, Inc. Just Beat Earnings Expectations: Here's What An
- 🟢 [Earnings|w1.91] Dycom Industries Stock Just Skyrocketed. It's the Latest Winner from D
- 🟢 [Earnings|w1.64] Dycom Industries Q1 Review: The Party Is Far From Over

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Data center CEO is hoping for a skilled-trades revival in hi |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | EMCOR Rises 36% in 6 Months: Should Investors Buy the Stock  |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Generac Joins Data Center Fracas; Soars On Generator Deal Wi |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Keybanc Maintains Overweight on Dycom Industries, Raises Pri |
| 2026-05-31 | Earnings | 🟢 +1 | 2.73 | Finnhub | Dycom Industries, Inc. Just Beat Earnings Expectations: Here |
| 2026-05-29 | Earnings | 🟢 +1 | 1.91 | Finnhub | Dycom Industries Stock Just Skyrocketed. It's the Latest Win |
| 2026-05-29 | Earnings | ⚪  0 | 0.76 | Finnhub | Dycom (DY) Q1 2027 Earnings Call Transcript |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Cantor Fitzgerald Maintains Overweight on Dycom Industries,  |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.37 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.4] Why Marvell Stock Rocketed to a New All-Time High Today
- 🟢 [Industry|w1.19] Stock Market Today, June 2: Marvell Technology Surges After Nvidia CEO
- 🟢 [Industry|w1.19] Nvidia Backs Marvell’s AI Data Center Push As Valuation Runs Hot

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Yahoo Fina | S&P 500, Nasdaq, Dow Futures Ease After Another Record Close |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Marvell’s (MRVL) ‘Trillion-Dollar’ Potential Propels Firm to |
| 2026-06-03 | Industry | 🟢 +1 | 1.4 | Finnhub | Why Marvell Stock Rocketed to a New All-Time High Today |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Broadcom Stock Just Hit a Record High. You Can Thank Nvidia, |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Seeking Al | Marvell Technology, Inc. (MRVL) Presents at 2026 Evercore Gl |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Stock Market Today, June 2: Marvell Technology Surges After  |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia Backs Marvell’s AI Data Center Push As Valuation Runs |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | S&P 500, Nasdaq, Dow Rise To Record Highs As Strong Tech Gai |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.47 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] AI Buildout Trends Keep This Company's Outlook Bright
- 🟢 [Buyback|w2.59] The Bull Case For nVent Electric (NVT) Could Change Following Its Data
- 🟢 [Industry|w1.02] Nvidia Is Giving These 6 Stocks a Boost. Not One Is a Chip Maker.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Nvidia Is Giving These 6 Stocks a Boost. Not One Is a Chip M |
| 2026-06-01 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | AI Buildout Trends Keep This Company's Outlook Bright |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | AI Data Center Supplier Fluence Soars On Nvidia Partnership |
| 2026-06-01 | Buyback | 🟢 +1 | 2.59 | Yahoo Fina | The Bull Case For nVent Electric (NVT) Could Change Followin |
| 2026-05-31 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | A Look At nVent Electric (NVT) Valuation After Positive Data |
| 2026-05-29 | Industry | 🟢 +1 | 0.59 | Finnhub | nVent Electric plc (NYSE:NVT) Screens Strong as an Affordabl |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | NVent Electric Poised for Multiple Years of Growth Due to Li |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.01 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 28 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Want to Buy Analog Devices Inc (ADI) Stock? Listen to Argus First
- 🟢 [Earnings|w1.64] Analog Devices' Industrial Segment Picks Up Pace: What's Ahead?
- 🟢 [Analyst Action|w1.51] Raymond James Raises its Price Target on Analog Devices (ADI)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Analog Devices, Inc. (ADI) Presents at Bank of America 2026  |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Analog Devices Inc (NASDAQ:ADI) Shows Strong Growth and Tech |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Is Analog Devices Stock Outperforming the S&P 500? |
| 2026-05-31 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Want to Buy Analog Devices Inc (ADI) Stock? Listen to Argus  |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Analog Devices (ADI) Valuation After Strong AI Dat |
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | Raymond James Raises its Price Target on Analog Devices (ADI |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Finnhub | Robots, Drones, and Physical AI: How to Invest in LiDAR’s Se |
| 2026-05-28 | Earnings | 🟢 +1 | 1.64 | Finnhub | Analog Devices' Industrial Segment Picks Up Pace: What's Ahe |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 8.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.55] Can Solid Networking Platform Revenue Growth Drive CIEN's Q2 Earnings?
- 🟢 [Analyst Action|w1.43] B. Riley Securities Maintains Neutral on Ciena, Raises Price Target to
- 🟢 [Industry|w1.4] Ciena Taps Cloud And Subsea Demand In Cirion And Biznet Wins

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.4 | Finnhub | Ciena Taps Cloud And Subsea Demand In Cirion And Biznet Wins |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | B. Riley Securities Maintains Neutral on Ciena, Raises Price |
| 2026-06-02 | Earnings | 🟢 +1 | 1.55 | Finnhub | Can Solid Networking Platform Revenue Growth Drive CIEN's Q2 |
| 2026-06-02 | Industry | 🟢 +1 | 0.6 | Finnhub | CIENA CORP (NYSE:CIEN): A High-Growth Stock with a Bull Flag |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | PLAB Q2 Earnings Miss on Delayed Semiconductor Design Releas |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Jim Cramer on Ciena: “There’s More Than Enough Room for It t |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | VIAV Stock Rises 430.7% in a Year: How to Play the Stock |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | Guidewire to Report Q3 Earnings: Here's What Investors Shoul |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.83 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Applied Materials: The AI Stock That Wins No Matter Which Chip Wins
- 🟢 [Industry|w1.19] AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score as Earnings
- 🟢 [Industry|w1.02] Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim Cramer

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Applied Materials, Inc. (AMAT) Presents at Bank of America 2 |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Applied Materials: The AI Stock That Wins No Matter Which Ch |
| 2026-06-02 | Industry | ⚪  0 | 1.19 | Finnhub | Is KLA Corporation Stock Outperforming the Nasdaq? |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score a |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Jim Cramer Says He’s Betting “Applied Materials Will Just Ke |
| 2026-06-01 | Industry | ⚪  0 | 1.01 | Finnhub | Is It Worth Investing in Applied Materials (AMAT) Based on W |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials, Inc. (AMAT) Is a Trending Stock: Facts to |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 15.49 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 23 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Samsung Electronics Deepens AI And Connectivity Role With New Partners
- 🟢 [Industry|w2.55] Broadcom Backing Lowers Debt Costs on $36 Billion Anthropic Deal
- 🟢 [Earnings|w1.55] Why Is Broadcom (AVGO) Stock Rocketing Higher Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Yahoo Fina | S&P 500, Nasdaq, Dow Futures Ease After Another Record Close |
| 2026-06-03 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | AI Computing Chip Showdown: Is Nvidia Still King or Is Broad |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Broadcom Stock Just Hit a Record High. You Can Thank Nvidia, |
| 2026-06-02 | Rumor | 🟢 +1 | 0.61 | Yahoo Fina | Market Chatter: Broadcom Support Helps Keep Borrowing Costs  |
| 2026-06-02 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Susquehanna resets Broadcom stock target ahead of earnings |
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Broadcom Backing Lowers Debt Costs on $36 Billion Anthropic  |
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Broadcom, Marvell, HPE, Alphabet, and More Stocks That Expla |
| 2026-06-02 | Industry | 🟢 +1 | 2.98 | Finnhub | Samsung Electronics Deepens AI And Connectivity Role With Ne |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.24 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Lumentum's AI Laser Chip Momentum Builds: More Upside Ahead?
- 🟢 [Industry|w1.19] Coherent Advances 16%, Lumentum Climbs 13%, Applied Optoelectronics Ad
- 🟢 [Industry|w1.01] Applied Optoelectronics Is Up 439% in 2026: Is It Outperforming Other 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Coherent Advances 16%, Lumentum Climbs 13%, Applied Optoelec |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | Credo Just Told The Market Something Bigger Than Earnings |
| 2026-06-02 | Industry | ⚪  0 | 1.19 | Finnhub | Assessing Lumentum Holdings (LITE) Valuation After A Recent  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Optoelectronics Is Up 439% in 2026: Is It Outperform |
| 2026-06-01 | Industry | 🟢 +1 | 2.52 | Finnhub | Lumentum's AI Laser Chip Momentum Builds: More Upside Ahead? |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Lumentum Shares Rise Over 7% After Key Trading Signal |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | S&P 500 Quant Leaders: 5 Top Stocks Averaging 133% Forward E |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Buy 3 Momentum Anomaly Stocks as Tech Rally Spurs Fresh High |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.7 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Why Wall Street Sees Freeport-McMoRan (FCX) Benefiting From The Electr
- 🟢 [Industry|w1.19] Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Center Boom
- 🟢 [Industry|w1.02] Rare Earth Stocks, Copper Plays Surging; FCX, MP Near Buy Points

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Rare Earth Stocks, Copper Plays Surging; FCX, MP Near Buy Po |
| 2026-06-02 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Here's Why Freeport-McMoRan (FCX) is a Strong Growth Stock |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Ce |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Freeport-McMoRan (FCX) Rises Higher Than Market: Key Facts |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Freeport-McMoRan Inc. (FCX) Among the Best Performing Sil |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Reassessing Freeport McMoRan (FCX) Valuation After A Strong  |
| 2026-05-28 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is Freeport-McMoRan (FCX) a Buy as Wall Street Analysts Look |
| 2026-05-28 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Freeport-McMoRan Inc. (FCX) is Attracting Investor Attention |

---

## ⚠️ Risk Pattern (4)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 15.32 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Blockspace: Anthropic's IPO, IREN’s $3.65B GPU Financing, Strategy Sel
- 🟢 [Industry|w2.52] IREN Closes $3.65B Investment-Grade GPU Financing Facility To Support 
- 🟢 [Industry|w2.16] Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells BTC, DMG’

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] IREN’s Massive GPU Bet And Digital Twin Raise Execution Questions For 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can Blackwell Deployment Help IREN Limited Hit $4.4B ARR Tar |
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Blockspace: Anthropic's IPO, IREN’s $3.65B GPU Financing, St |
| 2026-06-01 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Anthropic’s IPO, IREN’s $3.65B GPU Financing, Strategy Sells |
| 2026-06-01 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | IREN’s Massive GPU Bet And Digital Twin Raise Execution Ques |
| 2026-06-01 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | IREN closes $3.65 billion GPU financing to back Microsoft AI |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Iren, BE Networks Collaborate to Validate AI Infrastructure  |
| 2026-06-01 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | IREN and BE Networks Accelerate Deployment of Large-Scale AI |
| 2026-06-01 | Industry | 🟢 +1 | 2.52 | Finnhub | IREN Closes $3.65B Investment-Grade GPU Financing Facility T |

---

### NASDAQ:CRWV

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.79 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 28 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why CoreWeave (CRWV) Is Up 18.3% After First NVIDIA Vera Rubin NVL72 C
- 🟢 [Industry|w2.55] Rubin Validation Sparks 14% Rally in CRWV: What's Ahead for the Stock?
- 🟢 [Industry|w2.52] CoreWeave Strengthens AI Cloud Lead With Nvidia Partnership

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] CoreWeave Just Launched a Shiny New Product. Don’t Expect It to Move t
- 🔴 [Industry|w1.19] Buy, Hold, or Sell: Is CoreWeave a Multibagger in the Making, or an AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why CoreWeave (CRWV) Is Up 18.3% After First NVIDIA Vera Rub |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | CoreWeave Shares Advance Following BNP Paribas Upgrade and O |
| 2026-06-02 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Rubin Validation Sparks 14% Rally in CRWV: What's Ahead for  |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Buy, Hold, or Sell: Is CoreWeave a Multibagger in the Making |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Assessing CoreWeave (CRWV) Valuation As Vera Rubin AI Milest |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | BNP Paribas Initiates Coverage On CoreWeave with Outperform  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Stock Market Today, June 1: CoreWeave Surges on Nvidia Vera  |
| 2026-06-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Why CoreWeave Stock Is Up on Monday |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 7.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 19 / 17 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Wall Street Lunch: Nvidia Unveils New AI Chips, Partnerships At Comput
- 🟢 [Industry|w1.4] Lightmatter Joins NVIDIA NVLink Fusion and Powers Next-Generation AI I
- 🟢 [Industry|w1.4] Ayar Labs Joins NVIDIA NVLink™ Fusion Ecosystem to Bring Co-Packaged O

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.2 | Yahoo Fina | AI Computing Chip Showdown: Is Nvidia Still King or Is Broad |
| 2026-06-03 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Nvidia Has Become An 'Infrastructure Company': Jensen Huang  |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Netris Expands NVIDIA DSX Air and Network Automation Integra |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Why Marvell Stock Rocketed to a New All-Time High Today |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Broadcom Stock Just Hit a Record High. You Can Thank Nvidia, |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | IPG Photonics, MACOM, and Amkor Shares Skyrocket, What You N |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Marvell’s (MRVL) ‘Trillion-Dollar’ Potential Propels Firm to |
| 2026-06-03 | Industry | ⚪  0 | 0.7 | Finnhub | Himax, FormFactor, and Vishay Intertechnology Shares Skyrock |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.82 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 14 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Best Momentum Stocks to Buy for June 1st
- 🟢 [Analyst Action|w1.21] New Strong Buy Stocks for June 1st
- 🟢 [Analyst Action|w0.6] Stifel Maintains Buy on TTM Technologies, Raises Price Target to $205

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Earnings | ⚪  0 | 1.55 | Finnhub | TTM Technologies: Negative On Valuation, Positive On Fundame |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | New Strong Buy Stocks for June 1st |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Finnhub | TTMI Stock Shows How Swing Trading Rules Lead To Success |
| 2026-05-29 | Earnings | ⚪  0 | 0.5 | Finnhub | TTM (TTMI) Up 18.7% Since Last Earnings Report: Can It Conti |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Stifel Maintains Buy on TTM Technologies, Raises Price Targe |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Truist Securities Maintains Buy on TTM Technologies, Raises  |
| 2026-05-28 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | B. Riley Securities Maintains Buy on TTM Technologies, Raise |

---

## 🔴 Avoid / Short (1)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **36** / 100 |
| Raw Weighted Score | -3.84 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 17 / 23 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Advanced Micro Devices Sees Agentic AI Doubling CPU Opportunity as MI4
- 🟢 [Industry|w0.6] AMD vs. Nvidia Stock: One Metric Tells Me Which Is Clearly the Better 
- 🟢 [Analyst Action|w0.5] AMD: Winning The AI Race Without Beating Nvidia (Upgrade)

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] 3 Overvalued AI Stocks I Would Stay Far Away From
- 🔴 [Industry|w1.19] Nvidia Launches AI Chip for Laptops. Count NVDA Stock Out at Your Own 
- 🔴 [Industry|w1.19] NVDA Stock Alert: What to Know as Nvidia Debuts New Chips for PCs

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Intel Sets Sights on Nvidia and AMD With Upcoming AI Data Ce |
| 2026-06-02 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Meet the Low-Cost Vanguard ETF With 30% Invested in Nvidia,  |
| 2026-06-02 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Barclays resets AMD stock price target |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | 3 Overvalued AI Stocks I Would Stay Far Away From |
| 2026-06-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Advanced Micro Devices Sees Agentic AI Doubling CPU Opportun |
| 2026-06-02 | Industry | 🔴 -1 | 1.19 | Finnhub | Nvidia Launches AI Chip for Laptops. Count NVDA Stock Out at |
| 2026-06-02 | Industry | ⚪  0 | 1.19 | Finnhub | Semiconductor Stocks Soared in May. Can the Rally Keep Runni |
| 2026-06-02 | Industry | ⚪  0 | 0.6 | Finnhub | HP’s New AI PCs With Nvidia Put Future Growth And Risks In F |

---

## ⚪ Watch / Neutral (37)

### NYSE:NOK
- Score: 59/100 | raw: 2.06 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MOD
- Score: 58/100 | raw: 1.9 | News: 3 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 58/100 | raw: 2.01 | News: 5 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 58/100 | raw: 1.8 | News: 7 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DELL
- Score: 57/100 | raw: 2.38 | News: 26 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 56/100 | raw: 1.52 | News: 5 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 56/100 | raw: 1.71 | News: 15 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 55/100 | raw: 1.19 | News: 1 kept / 35 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLXS
- Score: 55/100 | raw: 1.21 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JBL
- Score: 55/100 | raw: 1.19 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 55/100 | raw: 1.09 | News: 6 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 54/100 | raw: 1.01 | News: 1 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 54/100 | raw: 0.84 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CARR
- Score: 53/100 | raw: 0.6 | News: 2 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRML
- Score: 53/100 | raw: 0.6 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 53/100 | raw: 0.64 | News: 15 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 53/100 | raw: 0.7 | News: 1 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 52/100 | raw: 0.5 | News: 3 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 52/100 | raw: 0.59 | News: 2 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KLAC
- Score: 50/100 | raw: 0.08 | News: 6 kept / 31 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 1 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SEDG
- Score: 50/100 | raw: 0 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 15 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 50/100 | raw: 0 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:VIAV
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NYSE:ENVA
- Score: 49/100 | raw: -0.2 | News: 2 kept / 20 dropped | No clear directional bias — stay flat

### NASDAQ:CPRX
- Score: 48/100 | raw: -0.6 | News: 1 kept / 12 dropped | No clear directional bias — stay flat

### NASDAQ:RMBS
- Score: 45/100 | raw: -1.19 | News: 5 kept / 11 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-03T02:39:58.112Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*