# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-20  |  **News Window:** 2026-05-13 ~ 2026-05-20
**Stock Pool:** us_selected.txt (75)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:GLW** | **98** | 16.52 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/31 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:ASML** | **94** | 12.33 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/27 | Overheated Sentiment (one-sided bullish) |
| 3 | **NYSE:IRM** | **94** | 10.52 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/15 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:MRVL** | **90** | 19.33 | 🟢 Long (Strong) | Momentum / Hold | High | 10/30 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:MTZ** | **88** | 9.14 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/31 | Overheated Sentiment (one-sided bullish) |
| 6 | **NYSE:DELL** | **86** | 14.27 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 18/19 | Sentiment Strengthening UP (trend) |
| 7 | **NYSE:VRT** | **85** | 8.32 | 🟢 Long (Strong) | Momentum / Hold | High | 8/32 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:ADI** | **79** | 6.92 | 🟢 Long (Strong) | Momentum / Hold | High | 5/22 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:JCI** | **78** | 6.64 | 🟢 Long (Strong) | Momentum / Hold | High | 4/22 | - |
| 10 | **NASDAQ:GOOGL** | **78** | 8.01 | 🟢 Long (Strong) | Momentum / Hold | High | 8/16 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:COHR** | **77** | 6.39 | 🟢 Long (Strong) | Momentum / Hold | High | 7/21 | - |
| 12 | **NASDAQ:AMAT** | **76** | 6.82 | 🟢 Long (Strong) | Momentum / Hold | High | 10/25 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:PWR** | **76** | 6.19 | 🟢 Long (Strong) | Momentum / Hold | High | 8/23 | - |
| 14 | **NYSE:CF** | **76** | 6.25 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/17 | Overheated Sentiment (one-sided bullish) |
| 15 | **CBOE:CBOE** | **75** | 8.4 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 19/10 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:NVT** | **75** | 5.97 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/24 | Overheated Sentiment (one-sided bullish) |
| 17 | **NYSE:CIEN** | **74** | 5.67 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/27 | Overheated Sentiment (one-sided bullish) |
| 18 | **NYSE:JOBY** | **73** | 5.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/17 | - |
| 19 | **NYSE:ETN** | **71** | 4.99 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/29 | - |
| 20 | **NYSE:HPE** | **70** | 4.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/26 | - |
| 21 | **NASDAQ:EQIX** | **66** | 3.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/23 | - |
| 22 | **NASDAQ:LRCX** | **65** | 3.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/21 | - |
| 23 | **NASDAQ:WDC** | **65** | 3.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/22 | - |
| 24 | **NASDAQ:INTC** | **64** | 4.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/19 | Sentiment Strengthening UP (trend) |
| 25 | **NASDAQ:AMD** | **64** | 4.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/24 | - |
| 26 | **NASDAQ:BGC** | **64** | 3.43 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/16 | - |
| 27 | **NASDAQ:APLD** | **63** | 3.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/19 | - |
| 28 | **NYSE:TT** | **62** | 2.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/29 | - |
| 29 | **NASDAQ:IREN** | **60** | 7.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 25/15 | - |
| 30 | **NYSE:MS** | **60** | 2.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/21 | - |
| 31 | **NASDAQ:KLAC** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/34 | - |
| 32 | **NYSE:TRNO** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 33 | **NASDAQ:MPWR** | **59** | 2.23 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/18 | - |
| 34 | **NYSE:NOK** | **59** | 2.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/32 | - |
| 35 | **NYSE:RIO** | **59** | 2.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/10 | - |
| 36 | **NYSE:WPM** | **59** | 2.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/14 | - |
| 37 | **NYSE:LAR** | **59** | 2.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/12 | - |
| 38 | **NASDAQ:MU** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/25 | - |
| 39 | **NYSE:SM** | **57** | 1.69 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/18 | - |
| 40 | **NASDAQ:POWL** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/16 | - |
| 41 | **NASDAQ:FLEX** | **56** | 1.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/15 | - |
| 42 | **NYSE:TSM** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 43 | **NYSE:PACS** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 44 | **NASDAQ:MTSI** | **54** | 0.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/13 | - |
| 45 | **NASDAQ:INCY** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/26 | - |
| 46 | **NYSE:AIR** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/16 | - |
| 47 | **NYSE:HG** | **53** | 0.72 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 48 | **NASDAQ:SANM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/14 | - |
| 49 | **NASDAQ:CPRX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/22 | - |
| 50 | **NYSE:FN** | **52** | 0.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/23 | - |
| 51 | **NASDAQ:CORZ** | **52** | 0.53 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/23 | - |
| 52 | **NYSE:DKS** | **52** | 0.39 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/16 | - |
| 53 | **NYSE:GNRC** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/25 | - |
| 54 | **NYSE:WT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/7 | - |
| 55 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/5 | - |
| 56 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 57 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 58 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 59 | **NASDAQ:VSAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 60 | **NASDAQ:PRDO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 61 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 62 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 63 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 64 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 65 | **NASDAQ:AVGO** | **50** | 0.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/32 | - |
| 66 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 67 | **NYSE:ENS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/13 | - |
| 68 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/8 | - |
| 69 | **NASDAQ:RKLB** | **48** | -0.4 | ⚪ No Trade (Neutral) | Watch | Low | 7/29 | - |
| 70 | **NASDAQ:RMBS** | **48** | -0.52 | ⚪ No Trade (Neutral) | Watch | Low | 4/21 | - |
| 71 | **NASDAQ:LITE** | **48** | -0.46 | ⚪ No Trade (Neutral) | Watch | Low | 9/20 | - |
| 72 | **NASDAQ:GEN** | **47** | -0.76 | ⚪ No Trade (Neutral) | Watch | Low | 3/24 | - |
| 73 | **NASDAQ:CRDO** | **47** | -0.71 | ⚪ No Trade (Neutral) | Watch | Low | 4/29 | - |
| 74 | **NYSE:P** | **44** | -1.51 | ⚪ No Trade (Neutral) | Watch | Low | 4/26 | - |
| 75 | **NASDAQ:NVDA** | **43** | -2.66 | ⚪ No Trade (Neutral) | Watch | Low | 23/16 | - |

---

## 🟢 Strong Long (8)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 19.33 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 30 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Why Marvell (MRVL) Is Drawing Fresh Attention for AI Data Center Netwo
- 🟢 [M&A|w3.57] AMD Marvell Stake Highlights AI Data Center Ambitions And Valuation Te
- 🟢 [Analyst Action|w3.57] Evercore ISI Group Maintains Outperform on Marvell Technology, Raises 

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.22] Marvell Price Prediction. The Stock Is Up 179% in a Year and Our Model
- 🔴 [Industry|w0.5] Marvell Technology (MRVL) Suffers a Larger Drop Than the General Marke

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Why Marvell (MRVL) Is Drawing Fresh Attention for AI Data Ce |
| 2026-05-19 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | Marvell Price Prediction. The Stock Is Up 179% in a Year and |
| 2026-05-19 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | AMD Marvell Stake Highlights AI Data Center Ambitions And Va |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Corning Stock Rallies to All-Time Highs as AI Optical Boom B |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Technology (NASDAQ:MRVL) Displays Strong Momentum wi |
| 2026-05-19 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Evercore ISI Group Maintains Outperform on Marvell Technolog |
| 2026-05-18 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Marvell Technology (MRVL) Suffers a Larger Drop Than the Gen |
| 2026-05-18 | M&A | 🟢 +1 | 3.53 | Finnhub | AMD Reveals A $6.5 Million Marvell Bet That's Already Soarin |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.32 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] How Vertiv (VRT) Is Expanding Its Role in AI Data Center Power and Coo
- 🟢 [Industry|w2.55] Forget Vistra. One Quarter of Orders at GE Vernova Exceeded All of Las
- 🟢 [Analyst Action|w1.43] Vertiv: The Infrastructure Layer Behind AI's Biggest Constraint

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 2 Industrials Stocks for Long-Term Investors and 1 Facing Ch |
| 2026-05-19 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | How Vertiv (VRT) Is Expanding Its Role in AI Data Center Pow |
| 2026-05-19 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Forget Vistra. One Quarter of Orders at GE Vernova Exceeded  |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Underweight in Vertiv Holdings Co (VRT) Hurt Fidelity Growth |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Vertiv Hosts Investor Conference |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Vertiv: The Infrastructure Layer Behind AI's Biggest Constra |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Market Brief: After SK Hynix And Micron, Where Does The AI I |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | How Investors Are Reacting To Vertiv (VRT) Hiring a New CPO  |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.92 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Analog Devices to Acquire Empower Semiconductor, Expanding its Next-Ge
- 🟢 [Earnings|w1.55] Dear Analog Devices Stock Fans, Mark Your Calendars for May 20
- 🟢 [Rumor|w0.71] Analog Devices closes in on $1.5 billion Empower Semiconductor acquisi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Analog Devices to Acquire Empower Semiconductor, Expanding i |
| 2026-05-19 | Earnings | 🟢 +1 | 1.55 | Finnhub | Dear Analog Devices Stock Fans, Mark Your Calendars for May  |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Analog Devices Inc (NASDAQ:ADI): A GARP Star with Strong Gro |
| 2026-05-19 | Rumor | 🟢 +1 | 0.71 | Finnhub | Analog Devices closes in on $1.5 billion Empower Semiconduct |
| 2026-05-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Should You Buy, Sell or Hold ADI Stock Before Q2 Earnings? |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.64 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 22 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Armada Announces Agreement with Johnson Controls for Galleon Forge One
- 🟢 [Earnings|w1.95] 5 Must-Read Analyst Questions From Johnson Controls’s Q1 Earnings Call
- 🟢 [Earnings|w1.12] Johnson Controls International's (NYSE:JCI) Soft Earnings Are Actually

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | NYSE Content Update: Armada Raises $230 Million, Boosts Valu |
| 2026-05-19 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Armada Announces Agreement with Johnson Controls for Galleon |
| 2026-05-18 | Earnings | 🟢 +1 | 1.12 | Yahoo Fina | Johnson Controls International's (NYSE:JCI) Soft Earnings Ar |
| 2026-05-16 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | 5 Must-Read Analyst Questions From Johnson Controls’s Q1 Ear |

---

### NASDAQ:GOOGL

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.01 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Google DeepMind hires staff from Contextual AI in licensing deal, Bloo
- 🟢 [Analyst Action|w2.16] Alphabet: The $462B Backlog Crushed The Bear Case, But At 30x P/E I'm 
- 🟢 [Industry|w1.19] The SpaceX IPO Could Be Weeks Away. Here Are the 2 Tech Stocks That Wi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | M&A | ⚪  0 | 4.16 | Finnhub | Alphabet AI Data Center Venture Raises Questions On Valuatio |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Why Would Anyone Buy SCHB Instead of MAGS? |
| 2026-05-19 | Industry | ⚪  0 | 1.19 | Finnhub | Tracking Bill Ackman's Pershing Square 13F Portfolio - Q1 20 |
| 2026-05-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Google DeepMind hires staff from Contextual AI in licensing  |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | The SpaceX IPO Could Be Weeks Away. Here Are the 2 Tech Stoc |
| 2026-05-19 | Industry | 🟢 +1 | 0.5 | Seeking Al | Alphabet: Beta Version App Leaks Suggest An Agentic AI Tool  |
| 2026-05-18 | Analyst Action | 🟢 +1 | 2.16 | Seeking Al | Alphabet: The $462B Backlog Crushed The Bear Case, But At 30 |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Seeking Al | 6.7% AA2 Bond Yield From Alphabet, But There Is A Catch |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.39 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 21 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] BofA Raises its Price Target on Coherent (COHR)
- 🟢 [Earnings|w2.73] Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And Expanded N
- 🟢 [Earnings|w1.55] Why Coherent's Rally May Continue Higher

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] COHR Dives Into AI Market: Can Concentration Risks Affect Top Line?
- 🔴 [Industry|w0.5] Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coherent Drops 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Earnings | 🟢 +1 | 1.55 | Finnhub | Why Coherent's Rally May Continue Higher |
| 2026-05-19 | Industry | 🟢 +1 | 0.6 | Finnhub | Coherent (COHR) Gains from AI Infrastructure Investment |
| 2026-05-19 | Industry | ⚪  0 | 1.19 | Finnhub | Coherent Stock: Is Wall Street Bullish or Bearish? |
| 2026-05-18 | Industry | 🔴 -1 | 0.5 | Finnhub | Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coher |
| 2026-05-18 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | BofA Raises its Price Target on Coherent (COHR) |
| 2026-05-18 | Industry | 🔴 -1 | 1.01 | Finnhub | COHR Dives Into AI Market: Can Concentration Risks Affect To |
| 2026-05-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And  |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.82 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Argus Research Maintains Buy on Applied Materials, Raises Price Target
- 🟢 [Earnings|w3.28] Applied Materials' Margin Reaches Historic High: Is it Sustainable?
- 🟢 [Earnings|w1.33] Surging Earnings Estimates Signal Upside for Applied Materials (AMAT) 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Nasdaq 100 Drops Over 1%, Oil Tops $106 On Iran Impasse: Stock Market 
- 🔴 [Industry|w1.01] Tech Sector Flashes Most Negative Signal Since January Ahead Of Nvidia

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | AMAT Q1 Deep Dive: AI Demand Drives Growth in Semiconductor  |
| 2026-05-19 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Surging Earnings Estimates Signal Upside for Applied Materia |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Unlocking Applied Materials (AMAT) International Revenues: T |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Investors Heavily Search Applied Materials, Inc. (AMAT): Her |
| 2026-05-19 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Argus Research Maintains Buy on Applied Materials, Raises Pr |
| 2026-05-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | Applied Materials' Margin Reaches Historic High: Is it Susta |
| 2026-05-18 | Industry | 🔴 -1 | 1.01 | Finnhub | Nasdaq 100 Drops Over 1%, Oil Tops $106 On Iran Impasse: Sto |
| 2026-05-18 | Industry | 🔴 -1 | 1.01 | Finnhub | Tech Sector Flashes Most Negative Signal Since January Ahead |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.19 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] 3 Infrastructure Stocks Fueling the Data Center Building Boom
- 🟢 [Earnings|w1.91] Quanta Services (PWR) Valuation Check After Raised 2026 Profit Outlook
- 🟢 [Analyst Action|w1.51] Quanta Services (PWR) Price Target Increased by 26.45% to 783.17

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Comfort Systems vs. Quanta: Which Infrastructure Stock Wins?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Quanta Services to Participate in Several Institutional Inve |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | MYR Group: Wait For Some Retracement To Participate In This  |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Can Quanta's Acquisition Strategy Keep Compounding Sharehold |
| 2026-05-18 | Industry | 🔴 -1 | 1.01 | Finnhub | Comfort Systems vs. Quanta: Which Infrastructure Stock Wins? |
| 2026-05-18 | Earnings | 🟢 +1 | 3.28 | Finnhub | 3 Infrastructure Stocks Fueling the Data Center Building Boo |
| 2026-05-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | Quanta Services (PWR) Valuation Check After Raised 2026 Prof |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Quanta Services (PWR) Benefits from Energy-Related Infrastru |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Quanta Services (PWR) Price Target Increased by 26.45% to 78 |

---

## 🟢 Mid Long (13)

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelms Q1 Beat
- 🟢 [Analyst Action|w1.43] Joby Aviation: On Track For 2026 Commercial Launch And Attractively Va
- 🟢 [Analyst Action|w1.2] Joby Aviation: On Track For 2026 Commercial Launch And Attractively Va

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Analyst Action | 🟢 +1 | 1.2 | Seeking Al | Joby Aviation: On Track For 2026 Commercial Launch And Attra |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Archer Aviation vs. Joby Aviation: Comparing Early Revenue G |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Joby Aviation: On Track For 2026 Commercial Launch And Attra |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Joby Aviation a Buy, Sell, or Hold in 2026? |
| 2026-05-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Cathie Wood Sells $28 Million Worth Of AMD And TSMC Shares,  |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Whic |
| 2026-05-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelm |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.99 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 29 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.06] Eaton Refocuses On Electrical And Aerospace As AI Power Bet Grows
- 🟢 [Earnings|w1.91] Is Wall Street Bullish or Bearish on Eaton Stock?
- 🟢 [Industry|w1.02] Why Eaton (ETN) Is Benefiting From AI’s Grid-to-Chip Power Demands

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Eaton (ETN) Is Benefiting From AI’s Grid-to-Chip Power D |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Market Brief: After SK Hynix And Micron, Where Does The AI I |
| 2026-05-15 | M&A | 🟢 +1 | 2.06 | Finnhub | Eaton Refocuses On Electrical And Aerospace As AI Power Bet  |
| 2026-05-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | Is Wall Street Bullish or Bearish on Eaton Stock? |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 26 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshaping Its Gl
- 🟢 [Analyst Action|w1.22] JPMorgan Raises Price Target on Hewlett Packard Enterprise Company (HP
- 🟢 [M&A|w0.82] Cohesity Expands Strategic Alliance with HPE to Deliver Industry-Leadi

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | From teen hacker to Iron Dome researcher, this founder raise |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | JPMorgan Raises Price Target on Hewlett Packard Enterprise C |
| 2026-05-19 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Hewlett Packard Enterprise (HPE) Stock Trades Down, Here Is  |
| 2026-05-19 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Hewlett Packard Enterprise (HPE) Is Up 6.9% After Reshap |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell Price Prediction: Where Will The Tech Stock Be In 2030? |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can SMCI Navigate CapEx & Inventory Headwinds Amid Rapid Sca |
| 2026-05-19 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing Hewlett Packard Enterprise (HPE) Valuation After I |
| 2026-05-18 | Industry | 🟢 +1 | 0.5 | Finnhub | NX Group Becomes First-time Winner of HPE's Global Logistics |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] How The Investment Narrative For Equinix (EQIX) Is Shifting After New 
- 🟢 [Analyst Action|w1.43] What Makes Equinix (EQIX) a New Buy Stock
- 🟢 [Industry|w0.59] Equinix Expands Fabric Geo Zones for Sovereign Data Control

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | What Makes Equinix (EQIX) a New Buy Stock |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | "We are already losing ground" – data centers call for space |
| 2026-05-15 | Industry | 🟢 +1 | 0.59 | Finnhub | Equinix Expands Fabric Geo Zones for Sovereign Data Control |
| 2026-05-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | How The Investment Narrative For Equinix (EQIX) Is Shifting  |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Blackstone Has a New Data Center REIT. Its BXDC IPO Might Be |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 21 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] B. Riley Raises its Price Target on Lam Research (LRCX)
- 🟢 [Analyst Action|w1.21] This Lam Research Analyst Turns Bullish; Here Are Top 5 Upgrades For M
- 🟢 [Analyst Action|w1.21] Morgan Stanley Upgrades Lam Research to Overweight, Raises Price Targe

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials' Margin Reaches Historic High: Is it Susta |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | B. Riley Raises its Price Target on Lam Research (LRCX) |
| 2026-05-18 | Policy | ⚪  0 | 1.21 | Finnhub | Potential Beijing Thaw Puts Lam Research Export And Supply R |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | This Lam Research Analyst Turns Bullish; Here Are Top 5 Upgr |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Morgan Stanley Upgrades Lam Research to Overweight, Raises P |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Quant ratings on Coatue Management's top holdings: TSM, GEV, |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Why The Western Digital (WDC) Story Is Shifting On New Earnings And AI
- 🟢 [Industry|w1.19] Can Post-Quantum Cryptography Give WDC an Edge in AI Data Security?
- 🟢 [Industry|w1.19] Western Digital Corporation (WDC) Included in 2026 S&P Dow Jones Best-

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 1.19 | Finnhub | Micron Is Up 6% Today: Is It Outperforming Other Memory Stoc |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | Can Post-Quantum Cryptography Give WDC an Edge in AI Data Se |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | Western Digital Corporation (WDC) Included in 2026 S&P Dow J |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Why The Western Digital (WDC) Story Is Shifting On New Earni |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Western Digital Corporation (WDC) Presents at J.P. Morgan 54 |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 4.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 19 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] I've Changed My Mind on Intel Stock. Here's What the AI Supercycle Bea
- 🟢 [Analyst Action|w1.43] Intel Snaps Its 5-Day Losing Streak
- 🟢 [Analyst Action|w1.43] 5-star analyst drops eye-popping Intel stock price target

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Intel: Will Higher Bond Yields Burst The AI Bubble? (Rating Downgrade)
- 🔴 [Industry|w0.85] AMD Vs. Intel: The AI CPU Trade Still Favors AMD - But Hedged
- 🔴 [Rumor|w0.5] Intel: Bought The Rumor, Sell The Apple News

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why Intel Stock Climbed Today |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Up 23%, Should You Buy Broadcom Stock? |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Upstart Just Applied for a National Bank Charter After a Tou |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | AI Is Supplying Blowout Earnings Again |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | Galaxy Book6 Enterprise Edition Extends Connected Galaxy Exp |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | I've Changed My Mind on Intel Stock. Here's What the AI Supe |
| 2026-05-19 | Policy | ⚪  0 | 0.71 | Finnhub | The Market's Huge Warning Sign |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Intel Snaps Its 5-Day Losing Streak |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 4.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Forget Nvidia - AMD's Moment Is Finally Here
- 🟢 [Analyst Action|w1.43] Intel Snaps Its 5-Day Losing Streak
- 🟢 [Analyst Action|w1.43] Intel Stock Is Finally Snapping Its Losing Streak

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] AMD: Priced Like A Leader, Operating In Nvidia's Shadow
- 🔴 [Analyst Action|w1.43] Be Cautious With AMD at $420 and Consider Your Options
- 🔴 [Industry|w1.02] AMD, Broadcom and Qualcomm Lead Chip Stock Sell-Off Ahead of Nvidia Ea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | How AMD (AMD) Is Bringing AI Acceleration Into Existing Data |
| 2026-05-19 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | AMD, Broadcom and Qualcomm Lead Chip Stock Sell-Off Ahead of |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Intel Snaps Its 5-Day Losing Streak |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Why The Next Major Market Move Will Be Down |
| 2026-05-19 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | AMD: Priced Like A Leader, Operating In Nvidia's Shadow |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Intel Stock Is Finally Snapping Its Losing Streak |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Meet the Super Semiconductor ETF With 40% of Its Portfolio P |
| 2026-05-19 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Be Cautious With AMD at $420 and Consider Your Options |

---

### NASDAQ:BGC

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.43 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 16 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.47] BGC Group enters third amended and restated credit agreement on May 15
- 🟢 [Analyst Action|w1.3] What Makes BGC Group (BGC) a New Buy Stock
- 🟢 [Earnings|w0.66] How Strong Q1 Results And Energy Momentum At BGC Group (BGC) Have Chan

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | 5 Insightful Analyst Questions From BGC’s Q1 Earnings Call |
| 2026-05-15 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | How Strong Q1 Results And Energy Momentum At BGC Group (BGC) |
| 2026-05-15 | Industry | 🟢 +1 | 1.47 | Finnhub | BGC Group enters third amended and restated credit agreement |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.3 | Yahoo Fina | What Makes BGC Group (BGC) a New Buy Stock |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] A Look At Applied Digital (APLD) Valuation After $300 Million Goldman 
- 🟢 [Analyst Action|w1.76] Needham Maintains Buy on Applied Digital, Raises Price Target to $51
- 🟢 [Industry|w1.08] Applied Digital (APLD) Stock Continues To Rise As Company Gets Loan Fo

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Why Applied Digital Stock Is Slumping Monday?
- 🔴 [Industry|w0.59] Buy Core Scientific Over Applied Digital

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🔴 -1 | 1.01 | Finnhub | Why Applied Digital Stock Is Slumping Monday? |
| 2026-05-17 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | A Look At Applied Digital (APLD) Valuation After $300 Millio |
| 2026-05-15 | Industry | 🔴 -1 | 0.59 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Needham Maintains Buy on Applied Digital, Raises Price Targe |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Should You Hold APLD at 16.9x P/S? 3 Reasons Despite the Pre |
| 2026-05-14 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Applied Digital (APLD) Stock Continues To Rise As Company Ge |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 29 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] JP Morgan Maintains Neutral on Trane Technologies, Raises Price Target
- 🟢 [Industry|w0.84] Jim Cramer on Trane Technologies: “The Whole Business Is Thriving”
- 🟢 [Industry|w0.5] Trane Technologies (NYSE:TT) Passes the Caviar Cruise Quality Investin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Industry | 🟢 +1 | 0.84 | Finnhub | Jim Cramer on Trane Technologies: “The Whole Business Is Thr |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | JP Morgan Maintains Neutral on Trane Technologies, Raises Pr |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Finnhub | Trane Technologies (NYSE:TT) Passes the Caviar Cruise Qualit |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Rebuilding the Future With the New Circularity Blueprint |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 7.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 25 / 15 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] IREN Acquires Awaken to Support Global Brand Growth
- 🟢 [Industry|w1.47] Bitcoin Miner IREN Closes $3 Billion Convertible Notes Offering to Fue
- 🟢 [Industry|w1.47] IREN Raises $3 Billion To Fund A.I. Cloud Expansion

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] NVIDIA-linked stock sinks after $3 billion capital raise
- 🔴 [Industry|w1.47] Iren Stock Sinks 8% After Massive $3 Billion Convertible Note Deal
- 🔴 [Analyst Action|w1.21] IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Results (Downgr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | M&A | ⚪  0 | 3.57 | Yahoo Fina | IREN Buys Awaken As AI Cloud Pivot Puts Brand In Focus |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | This Small Crypto Miner Pivoting to AI Infrastructure Is Up  |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why IREN Could Outperform Nebius Now |
| 2026-05-19 | Industry | 🔴 -1 | 1.19 | Finnhub | IREN Limited's AI Dream Meets Financial Reality |
| 2026-05-19 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | Why IREN Limited Could Outperform Nebius Now |
| 2026-05-18 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Leopold Aschenbrenner’s Situational Awareness Reveals Latest |
| 2026-05-18 | Earnings | ⚪  0 | 1.12 | Yahoo Fina | Iren's Earnings Highlight Long-Term Growth Potential While D |
| 2026-05-18 | M&A | ⚪  0 | 3.02 | Yahoo Fina | Iren Buys External Marketing Partner Awaken |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 21 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.43] Wall Street Regulator To Issue Tokenized Stock Framework
- 🟢 [Industry|w1.01] Amid AI Disruption and Retention Risk Concerns, Financial Benefits Dri

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Policy | 🟢 +1 | 1.43 | Finnhub | Wall Street Regulator To Issue Tokenized Stock Framework |
| 2026-05-19 | Earnings | ⚪  0 | 1.55 | Finnhub | Automatic Data Processing Stock Outlook: Is Wall Street Bull |
| 2026-05-18 | Industry | ⚪  0 | 1.01 | Finnhub | Should You Buy Goldman Sachs Stock After Its Investment Bank |
| 2026-05-18 | Industry | 🟢 +1 | 1.01 | Finnhub | Amid AI Disruption and Retention Risk Concerns, Financial Be |

---

## 🟡 Cautious Long (1)

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Citigroup Maintains Buy on Ciena, Raises Price Target to $658
- 🟢 [Industry|w1.2] Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Investor Focus
- 🟢 [Analyst Action|w1.04] Citigroup Adjusts Price Target on Ciena to $658 From $345, Maintains B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Invest |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Matrix NAP Info Boosts Terabit-Era Submarine Connectivity wi |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Healthy Revenue Growth Boost Workday's Q1 Earnings? |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Take-Two Before Q4 Earnings: What's in the Cards for the Sto |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Citigroup Adjusts Price Target on Ciena to $658 From $345, M |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Citigroup Maintains Buy on Ciena, Raises Price Target to $65 |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | TD Cowen Maintains Buy on Ciena, Raises Price Target to $675 |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Why One Investor May Be Losing Confidence in GitLab |

---

## ⚠️ Overheated (8)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 16.52 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 31 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Corning Leans Into AI Infrastructure Growth As Valuation And Risks Sta
- 🟢 [Earnings|w3.87] Can Rising Demand for Fiber Optics Solutions Drive Corning's Growth?
- 🟢 [Earnings|w3.87] Corning Incorporated (GLW) Presents at J.P. Morgan 54th Annual Global 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Earnings | 🟢 +1 | 3.87 | Finnhub | Can Rising Demand for Fiber Optics Solutions Drive Corning's |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | Corning Stock Rallies to All-Time Highs as AI Optical Boom B |
| 2026-05-19 | Earnings | 🟢 +1 | 3.87 | Finnhub | Corning Incorporated (GLW) Presents at J.P. Morgan 54th Annu |
| 2026-05-19 | M&A | 🟢 +1 | 4.16 | Finnhub | Corning Leans Into AI Infrastructure Growth As Valuation And |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Stock Of The Day: Is It Time To Buy Corning? |
| 2026-05-18 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Mizuho Raises its Price Target on Corning (GLW) |
| 2026-05-17 | Industry | 🟢 +1 | 0.84 | Finnhub | AI Supercharged This Flatlining U.S. Manufacturing Stock. No |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 12.33 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] ASML Expands Globally, Joins Tata for India Semiconductor Hub
- 🟢 [M&A|w3.53] ASML Tata Deal Links India Fab Plans With Richly Valued Shares
- 🟢 [Industry|w1.19] Billionaire Philippe Laffont's Coatue drops massive $655M bet in criti

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | ⚪  0 | 0.6 | Yahoo Fina | ASML High NA EUV Milestone Puts Valuation And Growth In Focu |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | ASML Expects First High-NA Chip Products Within Months |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | ASML High-NA Machines Near First Chip Output |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | What Makes ASML Holding N.V (ASML) an Investment Opportunity |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | Billionaire Philippe Laffont's Coatue drops massive $655M be |
| 2026-05-19 | Industry | 🟢 +1 | 1.19 | Finnhub | ASML says first chips from new High-NA machines to arrive in |
| 2026-05-19 | Industry | 🟢 +1 | 0.85 | Seeking Al | ASML's new High-NA machine-created chips to arrive in few mo |
| 2026-05-18 | M&A | 🟢 +1 | 3.53 | Finnhub | ASML Expands Globally, Joins Tata for India Semiconductor Hu |

---

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 10.52 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Record AI-Fueled Data Center Leasing Could Be A Game Changer For Iron 
- 🟢 [Earnings|w2.73] A Look At Iron Mountain (IRM) Valuation After Strong Q1 Growth And Rai
- 🟢 [Earnings|w1.91] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | Record AI-Fueled Data Center Leasing Could Be A Game Changer |
| 2026-05-17 | Earnings | 🟢 +1 | 2.73 | Finnhub | A Look At Iron Mountain (IRM) Valuation After Strong Q1 Grow |
| 2026-05-15 | Earnings | 🟢 +1 | 1.91 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Finnhub | Data Center Trends Lead to Record Results for These 3 Compan |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Iron Mountain (IRM) Price Target Increased by 11.79% to 141. |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Blackstone Has a New Data Center REIT. Its BXDC IPO Might Be |

---

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.14 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 31 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] MasTec (MTZ) Is Down 8.5% After Record Backlog Spurs Higher 2026 Outlo
- 🟢 [Earnings|w1.64] MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up to Demand?
- 🟢 [Analyst Action|w1.51] MasTec (MTZ) Price Target Increased by 23.80% to 465.47

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | MasTec (MTZ) Is Down 8.5% After Record Backlog Spurs Higher  |
| 2026-05-18 | Industry | ⚪  0 | 1.01 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day Transcript |
| 2026-05-16 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | MasTec Inc (MTZ): Surging Blacklog Brightens Stock Outlook |
| 2026-05-15 | Industry | ⚪  0 | 0.59 | Finnhub | Transcript : MasTec, Inc. - Analyst/Investor Day |
| 2026-05-15 | Industry | ⚪  0 | 0.59 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day - Slideshow |
| 2026-05-14 | Earnings | 🟢 +1 | 0.56 | Yahoo Fina | A Look At MasTec (MTZ) Valuation After Strong Earnings Backl |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Finnhub | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | MasTec (MTZ) Price Target Increased by 23.80% to 465.47 |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 14.27 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 18 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Dell (DELL) Is Gaining From Enterprise Demand for AI Compute Infra
- 🟢 [M&A|w1.66] NVIDIA Extends On Premises AI Reach As Valuation Stays Above Fair Valu
- 🟢 [Analyst Action|w1.43] Dell Price Prediction: Where Will The Tech Stock Be In 2030?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: Dell Technologies Inc. |
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Dell Stock Nabs Price-Target Hikes On AI Strategy |
| 2026-05-19 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Dell (DELL) Is Gaining From Enterprise Demand for AI Com |
| 2026-05-19 | Industry | ⚪  0 | 1.02 | Yahoo Fina | How AMD (AMD) Is Bringing AI Acceleration Into Existing Data |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Teradata Delivers Autonomous Knowledge and Data Sovereignty  |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | DriveNets High-Performance AI Networking Available on the De |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Dell Introduces PowerStore Elite, Expands PowerEdge Portfoli |
| 2026-05-19 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell Technologies Reimagines the Modern Data Center for the  |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.25 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 17 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid Ammonia Ou
- 🟢 [Analyst Action|w0.7] CF Industries and Norwegian Cruise Line have been highlighted as Zacks
- 🟢 [Industry|w0.6] CF Industries (CF) is a Great Momentum Stock: Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | 🟢 +1 | 0.6 | Finnhub | CF Industries (CF) is a Great Momentum Stock: Should You Buy |
| 2026-05-18 | Industry | 🟢 +1 | 0.5 | Finnhub | CF Industries Holdings Inc (NYSE:CF) Shows Strong Technical  |
| 2026-05-16 | Earnings | 🟢 +1 | 2.27 | Finnhub | CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid  |
| 2026-05-16 | Industry | 🟢 +1 | 0.5 | Finnhub | CF Industries Holdings (NYSE:CF) Screens Strong with High Gr |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | CF Industries and Norwegian Cruise Line have been highlighte |
| 2026-05-15 | Industry | 🟢 +1 | 0.59 | Finnhub | Bull of the Day: CF Industries (CF) |
| 2026-05-15 | Industry | 🟢 +1 | 0.59 | Finnhub | Zacks Investment Ideas feature highlights: CF Industries and |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.5 | Finnhub | Assessing CF Industries (CF) Valuation After Strong Long Ter |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 8.4 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 19 / 10 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Cboe Begins Offering Daily Expirations for Dow Jones Industrial Averag
- 🟢 [Industry|w2.52] Cboe Global Markets : Begins Offering Daily Expirations for Dow Jones 
- 🟢 [Buyback|w1.51] Cboe Global Markets Declares Second-Quarter 2026 Dividend

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | Onco-Innovations Reports Continued Advancement of Key Materi |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | The Two Catalysts That Will Make or Break DRAM’s 98% Rally i |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | DRAM Surged 51% in One Month While SOXX Climbed 32%, but Onl |
| 2026-05-18 | Industry | 🟢 +1 | 2.52 | Finnhub | Cboe Begins Offering Daily Expirations for Dow Jones Industr |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Glass House Brands Announces the Filing of Prospectus Supple |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | BTQ Technologies Announces Shareholder Call and Provides Q1  |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Finnhub | Abaxx to Launch Silver Singapore Futures on May 22, 2026 |
| 2026-05-18 | Industry | 🟢 +1 | 2.52 | Finnhub | Cboe Global Markets : Begins Offering Daily Expirations for  |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.97 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 24 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Did Record Q1 Results and Raised Guidance Just Shift nVent Electric's 
- 🟢 [Buyback|w2.1] nVent Announces Share Repurchase Authorization
- 🟢 [Analyst Action|w0.6] nVent Electric (NVT) Price Target Increased by 24.26% to 176.64

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Finnhub | nVent Electric plc (NVT) Presents at Wolfe Research 19th Ann |
| 2026-05-16 | Earnings | 🟢 +1 | 2.27 | Finnhub | Did Record Q1 Results and Raised Guidance Just Shift nVent E |
| 2026-05-16 | Industry | 🟢 +1 | 0.5 | Finnhub | NVENT ELECTRIC PLC (NYSE:NVT) Breaks Out with Strong Momentu |
| 2026-05-16 | Buyback | ⚪  0 | 2.1 | Finnhub | NVent Electric plc Declares Quarterly Cash Dividend, Payable |
| 2026-05-16 | Buyback | 🟢 +1 | 2.1 | Finnhub | nVent Announces Share Repurchase Authorization |
| 2026-05-16 | Buyback | ⚪  0 | 2.1 | Finnhub | nVent Announces Quarterly Cash Dividend |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | nVent Electric (NVT) Price Target Increased by 24.26% to 176 |

---

## ⚠️ Risk Pattern (1)

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Citigroup Maintains Buy on Ciena, Raises Price Target to $658
- 🟢 [Industry|w1.2] Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Investor Focus
- 🟢 [Analyst Action|w1.04] Citigroup Adjusts Price Target on Ciena to $658 From $345, Maintains B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-20 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Ciena Subsea Breakthrough Puts WaveLogic 6 Rollout In Invest |
| 2026-05-19 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Matrix NAP Info Boosts Terabit-Era Submarine Connectivity wi |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Healthy Revenue Growth Boost Workday's Q1 Earnings? |
| 2026-05-18 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Take-Two Before Q4 Earnings: What's in the Cards for the Sto |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Citigroup Adjusts Price Target on Ciena to $658 From $345, M |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Citigroup Maintains Buy on Ciena, Raises Price Target to $65 |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | TD Cowen Maintains Buy on Ciena, Raises Price Target to $675 |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Why One Investor May Be Losing Confidence in GitLab |

---

## ⚪ Watch / Neutral (45)

### NASDAQ:KLAC
- Score: 59/100 | raw: 2.1 | News: 4 kept / 34 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 59/100 | raw: 2.1 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 59/100 | raw: 2.23 | News: 5 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 59/100 | raw: 2.27 | News: 3 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 59/100 | raw: 2.04 | News: 7 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WPM
- Score: 59/100 | raw: 2.11 | News: 4 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 59/100 | raw: 2.21 | News: 3 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 57/100 | raw: 1.63 | News: 12 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SM
- Score: 57/100 | raw: 1.69 | News: 6 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:POWL
- Score: 57/100 | raw: 1.76 | News: 4 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 56/100 | raw: 1.54 | News: 3 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 55/100 | raw: 1.19 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 55/100 | raw: 1.21 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 54/100 | raw: 0.91 | News: 7 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 54/100 | raw: 1.01 | News: 2 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 54/100 | raw: 1 | News: 3 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 53/100 | raw: 0.72 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 52/100 | raw: 0.5 | News: 1 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 52/100 | raw: 0.51 | News: 5 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 52/100 | raw: 0.53 | News: 5 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 52/100 | raw: 0.39 | News: 2 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GNRC
- Score: 52/100 | raw: 0.5 | News: 3 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NASDAQ:VSAT
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:PRDO
- Score: 50/100 | raw: 0 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AVGO
- Score: 50/100 | raw: 0.08 | News: 8 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NYSE:ENS
- Score: 50/100 | raw: 0 | News: 1 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 0 kept / 8 dropped | No relevant news in window

### NASDAQ:RKLB
- Score: 48/100 | raw: -0.4 | News: 7 kept / 29 dropped | No clear directional bias — stay flat

### NASDAQ:RMBS
- Score: 48/100 | raw: -0.52 | News: 4 kept / 21 dropped | No clear directional bias — stay flat

### NASDAQ:LITE
- Score: 48/100 | raw: -0.46 | News: 9 kept / 20 dropped | No clear directional bias — stay flat

### NASDAQ:GEN
- Score: 47/100 | raw: -0.76 | News: 3 kept / 24 dropped | No clear directional bias — stay flat

### NASDAQ:CRDO
- Score: 47/100 | raw: -0.71 | News: 4 kept / 29 dropped | No clear directional bias — stay flat

### NYSE:P
- Score: 44/100 | raw: -1.51 | News: 4 kept / 26 dropped | No clear directional bias — stay flat

### NASDAQ:NVDA
- Score: 43/100 | raw: -2.66 | News: 23 kept / 16 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-20T02:32:02.779Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*