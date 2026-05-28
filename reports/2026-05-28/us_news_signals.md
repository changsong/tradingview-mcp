# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-28  |  **News Window:** 2026-05-21 ~ 2026-05-28
**Stock Pool:** us_selected.txt (64)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:MRVL** | **96** | 44.02 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 19/16 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:IREN** | **94** | 40.32 | 🟢 Long (Strong) | Momentum / Hold | High | 20/14 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:AMAT** | **94** | 26.16 | 🟢 Long (Strong) | Momentum / Hold | High | 20/15 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:DELL** | **93** | 35.65 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 25/11 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:ASML** | **93** | 17.87 | 🟢 Long (Strong) | Momentum / Hold | High | 18/17 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MU** | **91** | 31.92 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 27/13 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:LRCX** | **90** | 10.23 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/22 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:WDC** | **87** | 11.38 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/23 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:RKLB** | **86** | 22.56 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 28/12 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:NOK** | **86** | 12.52 | 🟢 Long (Strong) | Momentum / Hold | High | 15/18 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:APLD** | **84** | 9.3 | 🟢 Long (Strong) | Momentum / Hold | High | 13/21 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:BA** | **84** | 25.32 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 17/16 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:ENS** | **83** | 7.8 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/30 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:MOD** | **83** | 29.67 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:AVGO** | **82** | 18.56 | 🟢 Long (Strong) | Momentum / Hold | High | 22/17 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:CIEN** | **81** | 11.38 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/23 | Overheated Sentiment (one-sided bullish) |
| 17 | **NYSE:BE** | **80** | 17.88 | 🟢 Long (Strong) | Momentum / Hold | High | 23/17 | Sentiment Strengthening UP (trend) |
| 18 | **NYSE:HPE** | **79** | 7.84 | 🟢 Long (Strong) | Momentum / Hold | High | 15/22 | Sentiment Strengthening UP (trend) |
| 19 | **NASDAQ:ADI** | **79** | 12.44 | 🟢 Long (Strong) | Momentum / Hold | High | 18/18 | Sentiment Strengthening UP (trend) |
| 20 | **NYSE:GNRC** | **78** | 6.78 | 🟢 Long (Strong) | Momentum / Hold | High | 14/25 | - |
| 21 | **NASDAQ:TTMI** | **78** | 6.82 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/22 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:P** | **77** | 19.54 | 🟢 Long (Strong) | Momentum / Hold | High | 20/20 | Bearish-to-Bullish Reversal (reversal) |
| 23 | **NYSE:TSM** | **77** | 10.61 | 🟢 Long (Strong) | Momentum / Hold | High | 18/15 | Sentiment Strengthening UP (trend) |
| 24 | **NYSE:COHR** | **74** | 6.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/26 | - |
| 25 | **NASDAQ:SANM** | **73** | 5.54 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/20 | Overheated Sentiment (one-sided bullish) |
| 26 | **NASDAQ:MTSI** | **72** | 5.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/19 | - |
| 27 | **NASDAQ:FLEX** | **71** | 4.95 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/22 | - |
| 28 | **NASDAQ:MPWR** | **70** | 4.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 29 | **NASDAQ:VIAV** | **69** | 4.67 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/11 | Overheated Sentiment (one-sided bullish) |
| 30 | **CBOE:CBOE** | **68** | 4.2 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 12/21 | Overheated Sentiment (one-sided bullish) |
| 31 | **NASDAQ:INCY** | **68** | 4.4 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/20 | Overheated Sentiment (one-sided bullish) |
| 32 | **NASDAQ:CPRX** | **67** | 3.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/19 | - |
| 33 | **NASDAQ:CORZ** | **67** | 4.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/16 | - |
| 34 | **NYSE:HG** | **66** | 3.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 35 | **NYSE:WT** | **65** | 3.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/11 | - |
| 36 | **NASDAQ:VSAT** | **64** | 4.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/9 | - |
| 37 | **NASDAQ:CRDO** | **64** | 3.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/26 | - |
| 38 | **NYSE:JHG** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/13 | - |
| 39 | **NYSE:TRNO** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/15 | - |
| 40 | **NASDAQ:PRDO** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/18 | - |
| 41 | **NYSE:SXI** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/22 | - |
| 42 | **NYSE:MS** | **62** | 2.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/22 | - |
| 43 | **NASDAQ:ERIC** | **62** | 2.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/9 | - |
| 44 | **NYSE:GLW** | **60** | 2.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/32 | - |
| 45 | **NASDAQ:RMBS** | **59** | 2.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/19 | - |
| 46 | **NYSE:RIO** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/9 | - |
| 47 | **NASDAQ:SEDG** | **57** | 1.67 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/16 | - |
| 48 | **NYSE:NVT** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/24 | - |
| 49 | **NASDAQ:TLN** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/19 | - |
| 50 | **NASDAQ:AMD** | **55** | 2.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 25/15 | - |
| 51 | **NASDAQ:NWBI** | **55** | 1.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/19 | - |
| 52 | **NYSE:SMP** | **55** | 1.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 53 | **NYSE:IRM** | **54** | 1.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/20 | - |
| 54 | **NYSE:FN** | **53** | 0.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/17 | - |
| 55 | **NYSE:SPNT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/19 | - |
| 56 | **NASDAQ:INTC** | **50** | -0.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 20/17 | - |
| 57 | **NASDAQ:KLAC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/25 | - |
| 58 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 59 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/16 | - |
| 60 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 61 | **NASDAQ:GOOGL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 62 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 63 | **NYSE:AROC** | **45** | -1.22 | ⚪ No Trade (Neutral) | Watch | Low | 2/18 | - |
| 64 | **NYSE:DKS** | **36** | -10.68 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 14/6 | - |

---

## 🟢 Strong Long (13)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 40.32 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 20 / 14 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] IREN Finalizes $1.6 Billion Nvidia Blackwell Hardware Deal With Dell
- 🟢 [M&A|w3.57] IREN Stock Jumps On $1.6 Bil Dell Deal To Accelerate AI Deployment
- 🟢 [M&A|w3.57] IREN Stock Jumps After Massive $1.6 Billion Dell AI Deal

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] 10 Information Technology Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN Finalizes $1.6 Billion Nvidia Blackwell Hardware Deal W |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN Stock Jumps On $1.6 Bil Dell Deal To Accelerate AI Depl |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN Stock Jumps After Massive $1.6 Billion Dell AI Deal |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech Stocks Rise Premarket Wednesday |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN Enters $1.6 Billion A.I. Deal With Dell Technologies |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN Signs $1.6 Billion Dell Deal |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | IREN signs $1.6 billion Dell Blackwell deal for Childress, t |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Data centre operator IREN signs $1.6bn Dell deal for Blackwe |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 26.16 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 20 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Applied Materials (AMAT) Is Up 11.8% After Raising Q3 Outlook And Expa
- 🟢 [Earnings|w2.73] Applied Materials, Inc. (AMAT) Sees Quarterly Revenue Exceeding Foreca
- 🟢 [Industry|w2.55] Why KLA Corporation (KLAC) Stock Is Up Today

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Intel, AMD, and Other Momentum Stocks Look Unstoppable. Look Again.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | Applied Materials, Inc. (AMAT) Partners with Broadcom on Adv |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | KLA vs. Applied Materials: Which Chip Equipment Stock Wins N |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Mizuho Adjusts Price Target on Applied Materials to $540 Fro |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why KLA Corporation (KLAC) Stock Is Up Today |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Photronics and Lam Research Shares Are Soaring, What You Nee |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Amtech, Semtech, and Applied Materials Stocks Trade Up, What |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Is Marvell Technology (MRVL) Stock Rocketing Higher Toda |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Applied Materials (AMAT) Is Up 11.8% After Raising Q3 Outloo |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 17.87 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 Stocks to
- 🟢 [Analyst Action|w2.52] Billionaire Philippe Laffont Is Betting Big on ASML Stock as UBS Decla
- 🟢 [Analyst Action|w2.1] 5 big analyst AI moves: ASML, Dell and Nokia flagged as top picks

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] IEFA’s 22% Gain Hides a Currency Bet That Could Reverse in 2026

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | ASML (ASML) Stock Slides as Market Rises: Facts to Know Befo |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why KLA Corporation (KLAC) Stock Is Up Today |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | FormFactor, Amkor, and Teradyne Shares Are Soaring, What You |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Photronics and Lam Research Shares Are Soaring, What You Nee |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Amtech, Semtech, and Applied Materials Stocks Trade Up, What |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Is Marvell Technology (MRVL) Stock Rocketing Higher Toda |
| 2026-05-26 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | IEFA’s 22% Gain Hides a Currency Bet That Could Reverse in 2 |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 12.52 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Nokia Stock Has More Than Doubled. Here’s What’s Fueling The Rally
- 🟢 [Buyback|w2.59] Nokia Corporation - Managers' transactions (Owczarek)
- 🟢 [Industry|w2.52] Nokia Stock Rallies To New 52-Week High: What's Driving The Action?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] Nokia’s 140% Rally Turns AI Comeback Into Valuation Puzzle

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Forget Cisco: Nokia Is the AI Networking Stock Nobody’s Watc |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | NOK, MU, BB Stocks Hit 52-Week Highs Today: What's Fueling T |
| 2026-05-27 | Industry | 🟢 +1 | 0.6 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-27 | Industry | ⚪  0 | 1.19 | Finnhub | What's Going On With Nokia Stock Wednesday? |
| 2026-05-26 | Buyback | 🟢 +1 | 2.59 | Yahoo Fina | Nokia Corporation - Managers' transactions (Owczarek) |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nokia Surges 140% As AI Infrastructure Demand Reshapes Inves |
| 2026-05-26 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Nokia Stock Has More Than Doubled. Here’s What’s Fueling The |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 9.3 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Applied Digital’s Hyperscaler Deal Is Just the Beginning of a Much Big
- 🟢 [Industry|w2.13] Applied Digital shares climb after $3.6B 'Delta Forge 1' AI factory pl
- 🟢 [Industry|w1.8] Applied Digital Signed a Major Lease With a Hyperscaler for Its New Po

**📉 Bearish Factors:**
- 🔴 [Industry|w0.86] 3 Reasons APLD is Risky and 1 Stock to Buy Instead
- 🔴 [Industry|w0.5] Applied Digital Shares Slump Friday Despite Landmark AI Campus Lease

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | B. Riley Adjusts Price Target on Applied Digital to $66 From |
| 2026-05-27 | Industry | ⚪  0 | 0.6 | Finnhub | BUZZ Investing: AI Fervor And Geopolitical Fatigue Fuel A Re |
| 2026-05-27 | Industry | 🟢 +1 | 2.13 | Seeking Al | Applied Digital shares climb after $3.6B 'Delta Forge 1' AI  |
| 2026-05-26 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Applied Digital’s Hyperscaler Deal Is Just the Beginning of  |
| 2026-05-26 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | 3 Reasons APLD is Risky and 1 Stock to Buy Instead |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | What's Going On With IREN Stock Tuesday? |
| 2026-05-25 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Applied Digital Signed a Major Lease With a Hyperscaler for  |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Finnhub | Consumer Tech News (May 18-22): Meta Cuts 8,000 Jobs, Nvidia |

---

### NYSE:MOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 29.67 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Why Is Modine Stock Shining Today?
- 🟢 [Earnings|w3.32] Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highlights: Record
- 🟢 [Earnings|w3.32] Modine Manufacturing Q4 Earnings Call Highlights

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] Data Center Play Modine Manufacturing Reverses After Soaring On Earnin
- 🔴 [Earnings|w1.31] Modine Manufacturing (NYSE:MOD) Beats Q4 Estimates, Stock Dips on Caut

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Modine Manufacturing Co (MOD) Q4 2026 Earnings Call Highligh |
| 2026-05-27 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Data Center Play Modine Manufacturing Reverses After Soaring |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Modine Manufacturing Q4 Earnings Call Highlights |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Modine Q4 Earnings Beat Estimates on Data Center Demand |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | MOD Stock Extends Record Rally After Blowout Earnings, $4B A |
| 2026-05-27 | Earnings | ⚪  0 | 1.55 | Finnhub | Modine Manufacturing Company (MOD) Q4 2026 Earnings Call Tra |
| 2026-05-27 | Earnings | ⚪  0 | 1.55 | Finnhub | Modine Manufacturing Company 2026 Q4 - Results - Earnings Ca |
| 2026-05-27 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Modine forecasts $650M-$680M fiscal 2027 adjusted EBITDA as  |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 18.56 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 22 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] What's Going On With Broadcom Stock Wednesday?
- 🟢 [M&A|w3.57] FuriosaAI Partners with Broadcom to Build Next-generation Inference Pl
- 🟢 [M&A|w3.57] Applied Materials, Inc. (AMAT) Partners with Broadcom on Advanced Chip

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.5] Broadcom: Be Fearful When Others Are Hyped (Ratings Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | FuriosaAI Partners with Broadcom to Build Next-generation In |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Applied Materials, Inc. (AMAT) Partners with Broadcom on Adv |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | SK Hynix and Micron lead AI boom, join trillion-dollar club |
| 2026-05-27 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Hundreds of ETFs Hit 52-Week Highs This Week. Here Are 3 Wor |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | AMD's Data Center Growth Rides on EPYC Demand: More Upside A |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | AMD Stock At $500: AI Upside, With One Big Caveat |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | $1.29B bitcoin dark pool trade: What to know |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 17.88 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Bloom Energy Stock Extends Rally Following Nebius AI Deal
- 🟢 [Earnings|w3.32] Plug Power Is Up 6% but FuelCell Energy and Bloom Energy Are in the Re
- 🟢 [Analyst Action|w3.06] Are Oils-Energy Stocks Lagging  Bloom Energy (BE) This Year?

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Bloom Energy: The Hype Has Gone Too Far
- 🔴 [Industry|w0.5] 10 Industrials Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Is Bloom Energy the Smartest Investment You Can Make Today? |
| 2026-05-28 | Industry | ⚪  0 | 1.2 | MarketWatc | My friend, 62, earns $20,000 a year. Should she take Social  |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Plug Power Is Up 6% but FuelCell Energy and Bloom Energy Are |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 1 Brilliant Energy Stock to Buy Now and Hold for the Long Te |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Are Oils-Energy Stocks Lagging  Bloom Energy (BE) This Year? |
| 2026-05-27 | Industry | ⚪  0 | 1.19 | Finnhub | Something Rare Is Powering The Russell 2000's Record Run, An |
| 2026-05-27 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Bloom Energy: The Hype Has Gone Too Far |
| 2026-05-27 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Bloom Energy: The Business Can Survive The Cycle, The Valuat |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.84 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] HPE Gears Up to Report Q2 Earnings: What's in Store for the Stock?
- 🟢 [Earnings|w3.32] Countdown to Hewlett Packard Enterprise (HPE) Q2 Earnings: A Look at E
- 🟢 [Analyst Action|w0.7] Why Hewlett Packard Enterprise (HPE) Stock Is Trading Up Today

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Cisco Rises 33% in a Month: Here's Why You Should Buy the Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 1 S&P 500 Stock Worth Investigating and 2 That Underwhelm |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | HPE Gears Up to Report Q2 Earnings: What's in Store for the  |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Countdown to Hewlett Packard Enterprise (HPE) Q2 Earnings: A |
| 2026-05-27 | Industry | ⚪  0 | 0.6 | Finnhub | Dell: The AI Infrastructure Compounder The Market Still Misr |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Xerox and Super Micro Shares Are Soaring, What You Need To K |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Dell and Diebold Nixdorf Stocks Trade Up, What You Need To K |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | VRT Benefits From Strong International Expansion: More Upsid |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | DELL Gears Up to Report Q1 Earnings: Should You Buy the Stoc |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 12.44 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 18 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] 5 Must-Read Analyst Questions From Analog Devices’s Q1 Earnings Call
- 🟢 [Analyst Action|w3.06] Citic Securities Adjusts Price Target on Analog Devices to $450 From $
- 🟢 [Earnings|w2.73] Analog Devices, Inc. (ADI) Anticipates Q3 Revenue Above Estimates

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] A Congress Member Sold Up To $60K In Analog Devices Stock: Here's What
- 🔴 [Industry|w0.5] Congressman Sells Take-Two Stock Before 'GTA VI' Release Date: Here's 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why Analog Devices (ADI) Might be Well Poised for a Surge |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Here's How Much You'd Have If You Invested $1000 in Analog D |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Is Now An Opportune Moment To Examine Analog Devices, Inc. ( |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Citic Securities Adjusts Price Target on Analog Devices to $ |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | 5 Must-Read Analyst Questions From Analog Devices’s Q1 Earni |
| 2026-05-27 | Industry | ⚪  0 | 0.6 | Finnhub | Micron's Massive Gains: Why The Upside Isn't Over Yet |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Analog Devices' AI Data Center Momentum Builds: What Lies Ah |
| 2026-05-26 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | BofA flags 3 chip stocks tied to AI power, 800V and analog d |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.78 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 25 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.4] Can Generac (GNRC) Turn Data Center Backup Demand Into a Durable Comme
- 🟢 [Analyst Action|w1.04] Jefferies Just Upgraded Generac Stock. Here’s Why.
- 🟢 [Industry|w0.72] Generac Holdings (GNRC) Crossed Above the 20-Day Moving Average: What 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Tracking John Rogers' Ariel Investments Portfolio - Q1 2026 Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-26 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Jefferies Just Upgraded Generac Stock. Here’s Why. |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Are Industrial Products Stocks Lagging  Constellium (CSTM) T |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | The Zacks Rank Explained: How to Find Strong Buy Industrial  |
| 2026-05-25 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Generac Holdings (GNRC) Crossed Above the 20-Day Moving Aver |
| 2026-05-25 | Industry | 🔴 -1 | 0.84 | Finnhub | Tracking John Rogers' Ariel Investments Portfolio - Q1 2026  |
| 2026-05-24 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | The Industrial Stock Nobody Is Talking About -- but Should B |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Generac (GNRC) Stock Trades Up, Here Is Why |
| 2026-05-22 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | Can Generac (GNRC) Turn Data Center Backup Demand Into a Dur |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 19.54 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 20 / 20 |
| Patterns | Bearish-to-Bullish Reversal (reversal) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Everpure Inc-A (NYSE:P) Surges Past Q1 Estimates, But Stock Drops 5.2%
- 🟢 [Earnings|w3.32] Everpure Q1 Earnings Call Highlights
- 🟢 [Earnings|w3.32] Everpure (P) Tops Q1 Earnings and Revenue Estimates

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Everpure Q1 EPS $0.07 Misses $0.08 Estimate, Sales $1.053B Beat $1.004
- 🔴 [Analyst Action|w1.04] YMM or P: Which Is the Better Value Stock Right Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Everpure Q1 Earnings Call Highlights |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Everpure (P) Tops Q1 Earnings and Revenue Estimates |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Everpure Results Beat Expecations But Stock Slides Late |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Everpure’s (NYSE:P) Q1 CY2026: Beats On Revenue But Stock Dr |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Everpure Announces First Quarter Fiscal 2027 Financial Resul |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Salesforce Earnings Can Put AI Fears to Bed, Give Stock a Li |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | NetApp Stock Rallies Ahead Of Earnings As Data Storage Rival |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | P: Raising target price to $103.00 |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 10.61 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] TSMC Tells Staff Profit-Sharing Payouts Could Rise Over 30%
- 🟢 [Policy|w3.02] Taiwan Semiconductor's Growth Propels Taiwan Stock Market To Overtake 
- 🟢 [Analyst Action|w1.22] Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 Stocks to

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Tracking Ruane, Cunniff & Goldfarb's Portfolio - Q1 2026 Update
- 🔴 [Industry|w0.84] Huawei Says It Has A Chipmaking Breakthrough. Did US Sanctions Backfir

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | FuriosaAI Partners with Broadcom to Build Next-generation In |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can Nvidia’s $150 Billion Bet on Taiwan Succeed Despite Risi |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech Stocks Fall Late Afternoon |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | TSMC Tells Staff Profit-Sharing Payouts Could Rise Over 30% |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Nvidia, TSMC and SK Hynix Gear Up for Major AI Expansion Tal |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Huawei's New AI Chip Strategy Sends SMIC Shares Up Nearly 6% |
| 2026-05-27 | Industry | 🔴 -1 | 1.19 | Finnhub | Tracking Ruane, Cunniff & Goldfarb's Portfolio - Q1 2026 Upd |

---

## 🟢 Mid Long (17)

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 6.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 26 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] Coherent NVIDIA Pact Links AI Optics Growth With Stretched Valuation M
- 🟢 [Earnings|w2.34] Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results
- 🟢 [Analyst Action|w1.22] COHR: Raising target price to $462.00

**📉 Bearish Factors:**
- 🔴 [Industry|w0.7] Coherent: Wait For Earnings To Catch Up To Valuations
- 🔴 [Analyst Action|w0.6] Lumentum Vs. Coherent: Why LITE Is The Superior AI Infrastructure Play

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | COHR: Raising target price to $462.00 |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | AXT vs. Coherent: Which Photonics Chip Supplier Is the Bette |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Ciena vs. Coherent: Which Optical Networking Stock is the Be |
| 2026-05-26 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | Coherent NVIDIA Pact Links AI Optics Growth With Stretched V |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | Ciena: The Right Stock At The Wrong Price |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Q1 Earnings Roundup: Coherent (NYSE:COHR) And The Rest Of Th |
| 2026-05-25 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Coherent Corp. (COHR) Reports Q3 Fiscal 2026 Results |
| 2026-05-24 | Industry | 🔴 -1 | 0.7 | Finnhub | Coherent: Wait For Earnings To Catch Up To Valuations |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 19 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [M&A|w1.76] MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE plc
- 🟢 [Analyst Action|w1.22] MTSI: Raising target price to $466.00

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | MTSI: Raising target price to $466.00 |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | SPMD: A 25% Discount To The S&P 500 That Should Be Monitored |
| 2026-05-23 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At MACOM Technology Solutions Holdings (MTSI) Valuati |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Here’s Why MACOM (MTSI) is Among the 8 High Return Semicondu |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Photronics, IPG Photonics, AMD, KLA Corporation, and MACOM S |
| 2026-05-22 | M&A | 🟢 +1 | 1.76 | Finnhub | MACOM (MTSI) to Enter Long-Term Supply Agreements with IQE p |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 22 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Flex (FLEX) Expands Partnership with Teradyne Robotics for Intelligent
- 🟢 [M&A|w1.76] Flex Pitches AI Data Center Spin-Off as Power and Cooling Growth Accel
- 🟢 [Analyst Action|w1.43] Cramer On DoorDash: 'They Just Want Semis' — Uber, Reddit, Zscaler Cau

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Flex Insider Sold Shares Worth $2,378,775, According to a Recent SEC F

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Flex Insider Sold Shares Worth $2,378,775, According to a Re |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Cramer On DoorDash: 'They Just Want Semis' — Uber, Reddit, Z |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Here's How Much a $1000 Investment in Flex Made 10 Years Ago |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | High Growth Tech Stocks To Watch In The US This May 2026 |
| 2026-05-24 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Flex (FLEX) Valuation After A Sharp Multi Month Sh |
| 2026-05-23 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Flex (FLEX) Expands Partnership with Teradyne Robotics for I |
| 2026-05-23 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Flex Pitches AI Data Center Spin-Off as Power and Cooling Gr |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex Teradyne Robotics Tie Up Reframes Automation Risks And  |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Monolithic Power Systems: Strong Q1, But Little Room For Error
- 🟢 [Analyst Action|w1.22] MPWR: Raising target price to $1,947.00
- 🟢 [Industry|w0.86] Vicor Stock Surges on Guidance Boost, Lifts Power Chip Stocks Like Wol

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Monolithic Power Systems Insider Sold Shares Worth $7,932,150, Accordi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Monolithic Power Systems Insider Sold Shares Worth $7,932,15 |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | If You Invested $1000 in Monolithic Power a Decade Ago, This |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | MPWR: Raising target price to $1,947.00 |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Vicor Stock Surges on Guidance Boost, Lifts Power Chip Stock |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Are Wall Street Analysts Bullish on Monolithic Power Systems |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Needham Remains Bullish on Monolithic Power Systems (MPWR) |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 1 of Wall Street’s Favorite Stock with Exciting Potential an |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Teradyne, Monolithic Power Systems, Vishay Intertechnology,  |

---

### NASDAQ:CPRX

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 19 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] CPRX: What does Argus have to say about CPRX?
- 🟢 [Industry|w1.02] Why Catalyst Pharmaceutical (CPRX) is a Top Momentum Stock for the Lon
- 🟢 [Industry|w1.01] Catalyst Pharmaceuticals (NASDAQ:CPRX) Shows Strong Growth and a Bulli

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Catalyst Pharmaceutical (CPRX) is a Top Momentum Stock f |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | CPRX: What does Argus have to say about CPRX? |
| 2026-05-26 | Industry | 🟢 +1 | 1.01 | Finnhub | Catalyst Pharmaceuticals (NASDAQ:CPRX) Shows Strong Growth a |
| 2026-05-25 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Why Catalyst Pharmaceutical (CPRX) is a Top Value Stock for  |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 16 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.51] Core Scientific (CORZ) Announces Strategy to Expand Muskogee Campus to
- 🟢 [Analyst Action|w1.22] B. Riley Adjusts Price Target on Core Scientific to $33 From $30, Main
- 🟢 [Industry|w0.86] Core Scientific appoints former Equinix CEO Steve Smith to board as AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | B. Riley Adjusts Price Target on Core Scientific to $33 From |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Core Scientific appoints former Equinix CEO Steve Smith to b |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Jefferies Sees Core Scientific (CORZ) Well Positioned for AI |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Finnhub | AI Race Is An Ultra Marathon, Not A Sprint |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Weekly Wrap: Bitcoin Treads Water As Stocks Rally |
| 2026-05-22 | M&A | 🟢 +1 | 1.51 | Yahoo Fina | Core Scientific (CORZ) Announces Strategy to Expand Muskogee |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Q1 Reinsurance Earnings: Hamilton Insurance Group (NYSE:HG) Impresses
- 🟢 [Industry|w0.5] A Look At Hamilton Insurance Group (HG) Valuation After Mixed Short Te

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Q1 Reinsurance Earnings: Hamilton Insurance Group (NYSE:HG)  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Should You Continue to Hold AON Stock at 16.3X P/E Valuation |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | A Look At Hamilton Insurance Group (HG) Valuation After Mixe |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 11 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] WT: What does Argus have to say about WT?
- 🟢 [Industry|w0.5] WisdomTree and Clinch Resources Interviews to Air on the RedChip Small

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | WT: What does Argus have to say about WT? |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | ValuEngine Weekly Market Summary And Commentary |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | EXCLUSIVE: The Next Bond Market Risk Isn't Inflation — It's  |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Spotting Winners: WisdomTree (NYSE:WT) And Custody Bank Stoc |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Growth Stocks to Stash and 1 We Avoid |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | WisdomTree and Clinch Resources Interviews to Air on the Red |

---

### NASDAQ:VSAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 4.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 9 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Viasat (VSAT) Stock Is Up Today
- 🟢 [Industry|w2.16] VSAT Stock Rips 10% Today After Hitting Key Milestone – Viasat Expects
- 🟢 [Industry|w2.16] Viasat Reaches 1,000 Aircraft for SB-S Service

**📉 Bearish Factors:**
- 🔴 [Industry|w2.16] SpaceX’s Starlink nabs American Airlines contract, another win for its
- 🔴 [Industry|w2.16] American Airlines to install Starlink Wi-Fi on 500+ planes
- 🔴 [Policy|w1.04] Exclusive-Starlink and Amazon may be able to buy into EU mobile satell

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Viasat (VSAT) Stock Is Up Today |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Up 840% in the Past Year, the Signal for Viasat Stock Is Get |
| 2026-05-27 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Viasat (VSAT) Q1 Earnings: What To Expect |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | VSAT: Raising target price to $85.00 |
| 2026-05-26 | Industry | 🔴 -1 | 2.16 | Yahoo Fina | SpaceX’s Starlink nabs American Airlines contract, another w |
| 2026-05-26 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | VSAT Stock Rips 10% Today After Hitting Key Milestone – Vias |
| 2026-05-26 | Industry | 🔴 -1 | 2.16 | Yahoo Fina | American Airlines to install Starlink Wi-Fi on 500+ planes |
| 2026-05-26 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Viasat Reaches 1,000 Aircraft for SB-S Service |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 26 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation Expectati
- 🟢 [Industry|w1.02] Watch as Credo Flies on Institutional Inflows
- 🟢 [Industry|w0.5] Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy Areas

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Marvell Technology (MRVL) Q1 Earnings Meet Estimates |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Watch as Credo Flies on Institutional Inflows |
| 2026-05-27 | Industry | ⚪  0 | 0.6 | Finnhub | Something Rare Is Powering The Russell 2000's Record Run, An |
| 2026-05-23 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Credo ZeroFlap Deal With Rebellions Tests Lofty AI Valuation |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Zacks Investment Ideas feature highlights: Nvidia, Innodata, |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Dow Jones Futures Rise; Amazon, Credo Lead AI Stocks In Buy  |

---

### NYSE:JHG

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 13 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] JHG: What does Argus have to say about JHG?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | JHG: What does Argus have to say about JHG? |

---

### NYSE:TRNO

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 15 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] TRNO: Raising target price to $73.00

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | TRNO: Raising target price to $73.00 |

---

### NASDAQ:PRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 18 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] PRDO: What does Argus have to say about PRDO?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | PRDO: What does Argus have to say about PRDO? |

---

### NYSE:SXI

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] SXI: Raising target price to $299.00

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | SXI: Raising target price to $299.00 |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] A Look At Morgan Stanley (MS) Valuation As Analyst Upgrades And Earnin
- 🟢 [Analyst Action|w1.08] Morgan Stanley Upgraded To Buy As Q1 Results Drive Bullish Momentum Ag

**📉 Bearish Factors:**
- 🔴 [Policy|w1.21] Warren Scrutiny Of German Unit Exemption Tests Morgan Stanley Valuatio

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Investors Say It’s Time for Pemex to Tap Global Debt Markets |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Ted Pick to Speak at the Annual Morgan Stanley U.S. Financia |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Goldman Raises S&P 500 Target, Sees 17% Upside This Year |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | AppLovin Stock Is Having a Bad Year. Why It’s Today’s Top Pe |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Is Wall Street underestimating MSFT AI revenue potential? Mo |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Top Wall Street Names See NVIDIA Stock at $330, But Buyers J |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | A Look At Morgan Stanley (MS) Valuation As Analyst Upgrades  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Goldman Strategists Lift S&P 500 Target to 8,000 on Earnings |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 9 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] Can Ericsson's 5G Innovation Network in Canada Drive Future Growth?
- 🟢 [Industry|w1.02] Vonage Ranked #1 for Video in the 2026 Gartner® Critical Capabilities 
- 🟢 [Industry|w0.86] Ericsson and Government of Canada to build First-of-Its-Kind 5G Innova

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | TeraGo Deploys Ericsson Private 5G Network at McMaster Manuf |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | TERAGO and Ericsson Launch Enterprise Private 5G Network at  |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Can Ericsson's 5G Innovation Network in Canada Drive Future  |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Ericsson and EDC expand support on Canadian SME defence and  |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Vonage Ranked #1 for Video in the 2026 Gartner® Critical Cap |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nokia Stock Has More Than Doubled. Here’s What’s Fueling The |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Ericsson and Government of Canada to build First-of-Its-Kind |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Ericsson to Move Stockholm HQ to Hagastaden |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 32 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW) Has Change
- 🟢 [Industry|w1.19] Beyond AI: Corning's Three Forgotten Powerhouses
- 🟢 [Earnings|w0.94] GLW Rides on Solid Traction in the Solar Vertical: Will it Persist?

**📉 Bearish Factors:**
- 🔴 [Buyback|w2.59] Corning Insider Sold Shares Worth $5,263,637, According to a Recent SE
- 🔴 [Industry|w0.5] This Alphabet‑Heavy Fund Has a Front‑Row Seat to the AI Boom — and the

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 1.19 | Finnhub | Beyond AI: Corning's Three Forgotten Powerhouses |
| 2026-05-26 | Buyback | 🔴 -1 | 2.59 | Yahoo Fina | Corning Insider Sold Shares Worth $5,263,637, According to a |
| 2026-05-25 | Earnings | 🟢 +1 | 0.94 | Yahoo Fina | GLW Rides on Solid Traction in the Solar Vertical: Will it P |
| 2026-05-23 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Wall Street Was Sleeping on the "Bits-to-Atoms" Trade. This  |
| 2026-05-23 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | How Nvidia’s US$3.2 Billion AI Optics Pact At Corning (GLW)  |
| 2026-05-22 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | This Alphabet‑Heavy Fund Has a Front‑Row Seat to the AI Boom |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Robust Results Boosted Corning’s (GLW) Performance in Q1 |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Nvidia's Latest AI Partner Was a Bargain Hiding in Plain Sig |

---

## 🟡 Cautious Long (5)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 31.92 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 27 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.6] Analyst who predicted Micron rally has new message
- 🟢 [Analyst Action|w3.57] Nvidia and Micron emerge as biggest winners in Goldman's AI earnings f
- 🟢 [Analyst Action|w3.57] Micron Stock Jumps on Wave of Analysts Upgrade

**📉 Bearish Factors:**
- 🔴 [Industry|w0.85] Micron's Massive Squeeze May Be Near Its End

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | If You'd Invested $100 in Micron Technology Stock 1 Year Ago |
| 2026-05-28 | Analyst Action | 🟢 +1 | 3.6 | Yahoo Fina | Analyst who predicted Micron rally has new message |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Micron (MU) Stock Is Up, What You Need To Know |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, May 27: Micron Extends Rally on AI Chip  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Wednesday Recap: Marvell Technology, PDD, Zs |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | The ‘Insatiable’ Logic Behind Micron’s ‘Extreme’ Gains |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | SK Hynix and Micron lead AI boom, join trillion-dollar club |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report?
- 🟢 [Industry|w0.72] Advanced Micro Devices, Inc. (AMD) Plans to Invest more than $10B in T
- 🟢 [Industry|w0.5] 3 Market-Beating Stocks to Consider Right Now

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report? |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Market-Beating Stocks to Consider Right Now |
| 2026-05-25 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Advanced Micro Devices, Inc. (AMD) Plans to Invest more than |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Sanmina (SANM) is a Strong Growth Stock |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Sanmina Corp (SANM) Fits the Affordable Growth Strategy with |

---

### NASDAQ:VIAV

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 11 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] VIAVI SOLUTIONS INC (NASDAQ:VIAV) Screens as a High-Growth Momentum St
- 🟢 [Industry|w1.08] VIAVI Solutions (VIAV) Launches CyberFlood CF1000 400G Security Test P
- 🟢 [Industry|w1.02] Hedge Fund Whale Rock Snaps Up 3 Little-Known AI Stocks in $910M Move

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Hedge Fund Whale Rock Snaps Up 3 Little-Known AI Stocks in $ |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dow Jones Futures Rise After S&P 500, Nasdaq Hit Highs; 5 AI |
| 2026-05-27 | Industry | 🟢 +1 | 1.19 | Finnhub | VIAVI SOLUTIONS INC (NASDAQ:VIAV) Screens as a High-Growth M |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Wall Street Analysts See a 30.54% Upside in Viavi Solutions  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Dow Jones Futures Rise, Oil Prices Fall: Trump Says No 'Rush |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Viavi Solutions (VIAV) Valuation After Strong Shar |
| 2026-05-22 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | VIAVI Solutions (VIAV) Launches CyberFlood CF1000 400G Secur |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 21 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] How Investors Are Reacting To Cboe Global Markets (CBOE) Expanding Dai
- 🟢 [Industry|w0.86] Cboe Hires Boudewijn Duinstra as Executive Vice President, Chief Risk 
- 🟢 [Analyst Action|w0.86] 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | FBTC Holds $12 Billion in Bitcoin But Spot ETF Holders Pay O |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Tema Durable Quality ETF (TOLL) Adds Kalshi, Becoming First  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Faircourt Asset Management Inc. Announces May Distribution |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Cboe Hires Boudewijn Duinstra as Executive Vice President, C |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Don't Bet on a Nike Stock Rebound Just Yet |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | ICE Stock Declines 13% in a Year: What Should Investors Do N |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | OSB GROUP PLC - Transaction in Own Shares |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Seeking Al | Cboe names Boudewijn Duinstra its new chief risk officer |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Industry|w1.08] How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Has Changed 
- 🟢 [Analyst Action|w0.52] Here's Why Incyte (INCY) is a Strong Momentum Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | PharmaEssentia Appoints Eric Vogel as U.S. Head of Commercia |
| 2026-05-26 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Momentum Stock |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Incyte to Present at the Goldman Sachs 47th Annual Global He |
| 2026-05-25 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Analyst Action | ⚪  0 | 1.3 | Yahoo Fina | Bernstein Initiates Incyte at Market Perform With $99 Price  |
| 2026-05-22 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |

---

## ⚠️ Overheated (8)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 44.02 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 19 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Chipmaker Marvell Posts In-Line Q1, Guides Above Views On AI Strength
- 🟢 [Earnings|w3.87] Marvell Technology beats estimates on AI demand strength
- 🟢 [Earnings|w3.87] Marvell Technology (NASDAQ:MRVL) Surges on Upbeat AI-Driven Q2 Guidanc

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Dow Jones Futures Rise As Snowflake Surges Late On Earnings; |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Stock market today: Dow, S&P 500, Nasdaq futures edge up as  |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell (MRVL) Q1 2027 Earnings Transcript |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell Technology Is Powering the AI Revolution—and Its Ear |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell Technology Q1 Earnings Call Highlights |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | MRVL Stock Rises After-Hours On Q1 Earnings Beat And Strong  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks making big moves yesterday: Allient, AutoZone, Redwir |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell Technology (MRVL) Q1 Earnings Meet Estimates |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 35.65 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 25 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Dell Wins $9.7 Billion Pentagon Contract, Fueling Stock Rally
- 🟢 [Policy|w3.57] 'Dell Wins $9.7B Defense Deal To Streamline Software Buys'- Bloomberg
- 🟢 [Policy|w3.06] Why Dell Stock Is Rising After-Hours Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Why Dell Stock Is Rising After-Hours Today? |
| 2026-05-27 | Earnings | ⚪  0 | 1.33 | Yahoo Fina | Costco earnings, April inflation data, Fedspeak: What to Wat |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | HP Earnings Were Good, but Not Good Enough for the Stock |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Dell Technologies Gets $9.7 Billion Pentagon Contract |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Dell Technologies Unit Wins $9.69 Billion US Navy Contract |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | HP (HPQ) Q2 Earnings and Revenues Surpass Estimates |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Finalizes $1.6 Billion Nvidia Blackwell Hardware Deal W |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Stock Jumps On $1.6 Bil Dell Deal To Accelerate AI Depl |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 10.23 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Does Lam Research (LRCX) Have the Right Playbook for AI-Era Tools and 
- 🟢 [Analyst Action|w1.22] Mizuho Securities Adjusts PT on Lam Research to $380 From $330, Mainta
- 🟢 [Industry|w1.02] Investors Love Lam Research Stock - Shorting OTM Puts in Huge, Unusual

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Hundreds of ETFs Hit 52-Week Highs This Week. Here Are 3 Wor |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Investors Love Lam Research Stock - Shorting OTM Puts in Hug |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Is Amkor Technology (AMKR) Up 2.9% Since Last Earnings R |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 2 Top AI Stocks I’d Buy Now and Hold for the Next Decade |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Mizuho Securities Adjusts PT on Lam Research to $380 From $3 |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why KLA Corporation (KLAC) Stock Is Up Today |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Photronics and Lam Research Shares Are Soaring, What You Nee |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Is Marvell Technology (MRVL) Stock Rocketing Higher Toda |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 11.38 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Forget Micron for a Second: This Storage Maker Just Crossed a Profitab
- 🟢 [Analyst Action|w3.02] Why Is Western Digital (WDC) Stock Soaring Today
- 🟢 [Analyst Action|w1.22] Hard Disk Drives Are Critical for AI but Western Digital Stock Is Stil

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Forget Micron for a Second: This Storage Maker Just Crossed  |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Sandisk Stock’s 4,000% Rise Is Happening Too Fast to Keep Up |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Hard Disk Drives Are Critical for AI but Western Digital Sto |
| 2026-05-27 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | Sandisk raised as Barclays says memory/storage ‘the most att |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | WDC vs. QMCO: Which Data Infrastructure Stock to Bet On? |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 2 Cash-Producing Stocks to Target This Week and 1 We Find Ri |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | S&P 500, Nasdaq Rally, Middle East Peace Optimism Drive US E |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | With Analysts Calling for Western Digital to Double Earnings |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 22.56 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 28 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Rocket Lab Hits Key SDA Milestone, Expands Defense Footprint
- 🟢 [M&A|w3.57] Rocket Lab Deepens Defense Role With SDA Win And Robotics Acquisition
- 🟢 [Industry|w2.55] Rocket Lab Advances Missile Defense Constellation Program With SDA Sys

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Space Stock Short Squeeze: The Final Act of the SpaceX IPO H |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Firefly Lands NASA Moon Mission. A Share Sale Weighs on the  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | US space stocks rise on SpaceX IPO hype |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 2 Space Stocks That Are Quietly Becoming Some of the Market' |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AST SpaceMobile Surges 8%; Virgin Galactic, Rocket Lab Ride  |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Rocket Lab Advances Missile Defense Constellation Program Wi |
| 2026-05-27 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Rocket Lab Deepens Defense Role With SDA Win And Robotics Ac |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The SpaceX Halo Effect: What’s Next For Sky-High Redwire Sto |

---

### NYSE:ENS

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.8 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 30 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] 5 Insightful Analyst Questions From EnerSys’s Q1 Earnings Call
- 🟢 [Earnings|w1.64] EnerSys 2026 Q4 - Results - Earnings Call Presentation
- 🟢 [Analyst Action|w1.22] ENS: Raising target price to $271.00

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Powell Faces Margin Risks From Higher Costs: What's the Road |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | 5 Insightful Analyst Questions From EnerSys’s Q1 Earnings Ca |
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | ENS: Raising target price to $271.00 |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why EnerSys (ENS) is a Strong Momentum Stock |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Powell's Growth Investments Create Long-Term Value for I |
| 2026-05-24 | Industry | ⚪  0 | 0.6 | Yahoo Fina | EnerSys (ENS) Valuation Check After Record Earnings Beat And |
| 2026-05-24 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | EnerSys Edge Battery Launch Meets Strong Share Momentum And  |
| 2026-05-22 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Enersys (ENS) Soars to 52-Week High, Time to Cash Out? |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 11.38 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Ciena: The Right Stock At The Wrong Price
- 🟢 [Analyst Action|w2.59] BofA raises Cisco, Ciena targets as AI optics boom accelerates
- 🟢 [Analyst Action|w2.59] BofA Adjusts Price Target on Ciena to $660 From $550

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | American Superconductor (AMSC) Surpasses Q4 Earnings and Rev |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Why Arista Networks May Be More Than Just Another AI Trade |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | APPS Q4 Earnings Beat Estimates, Revenues Up Y/Y, Shares Ris |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | BOX Q1 Earnings Surpass Estimates, Revenues Up Y/Y, Shares F |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Ooma (OOMA) Q1 Earnings and Revenues Surpass Estimates |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Ciena vs. Coherent: Which Optical Networking Stock is the Be |
| 2026-05-26 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | BofA raises Cisco, Ciena targets as AI optics boom accelerat |
| 2026-05-26 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | BofA Adjusts Price Target on Ciena to $660 From $550 |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.82 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026
- 🟢 [Industry|w1.26] TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy in 2026
- 🟢 [Analyst Action|w1.22] TTMI: Raising target price to $207.00

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | TTMI: Raising target price to $207.00 |
| 2026-05-25 | Earnings | 🟢 +1 | 0.94 | Yahoo Fina | TTM Technologies (TTMI) Valuation Check After Record Q1 2026 |
| 2026-05-24 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | TTM Technologies, IonQ, and Everpure Shares Are Soaring, Wha |
| 2026-05-23 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Is TTM (TTMI) a Solid Growth Stock? 3 Reasons to Think "Yes" |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Are You Looking for a Top Momentum Pick? Why TTM Technologie |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | High Growth Tech Stocks To Watch In The US May 2026 |
| 2026-05-22 | Industry | 🟢 +1 | 1.26 | Finnhub | TTM Technologies (TTMI): 12 Best Multibagger Stocks to Buy i |

---

## ⚠️ Risk Pattern (6)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 31.92 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 27 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.6] Analyst who predicted Micron rally has new message
- 🟢 [Analyst Action|w3.57] Nvidia and Micron emerge as biggest winners in Goldman's AI earnings f
- 🟢 [Analyst Action|w3.57] Micron Stock Jumps on Wave of Analysts Upgrade

**📉 Bearish Factors:**
- 🔴 [Industry|w0.85] Micron's Massive Squeeze May Be Near Its End

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-28 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | If You'd Invested $100 in Micron Technology Stock 1 Year Ago |
| 2026-05-28 | Analyst Action | 🟢 +1 | 3.6 | Yahoo Fina | Analyst who predicted Micron rally has new message |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Micron (MU) Stock Is Up, What You Need To Know |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, May 27: Micron Extends Rally on AI Chip  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Wednesday Recap: Marvell Technology, PDD, Zs |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Goldman Says Nvidia and Micron Are the Biggest AI Winners: 5 |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | The ‘Insatiable’ Logic Behind Micron’s ‘Extreme’ Gains |
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | SK Hynix and Micron lead AI boom, join trillion-dollar club |

---

### NYSE:BA

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 25.32 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Boeing 737 Max production rate 47 per month Ortberg 2026
- 🟢 [Policy|w3.06] Boeing Hits a Key Milestone. The Stock Is Up.
- 🟢 [Policy|w3.06] FAA expects Boeing MAX 7 to be certified this summer, sees more produc

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.82] Is Boeing Running Into More Quality-Control Issues? Investigative Erro
- 🔴 [Industry|w1.19] 10 Industrials Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Dell Stock Is Rising After-Hours Today? |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Boeing Wins $854.7 Million Navy Contract Modification for P- |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dow Closes At Record Highs On Iran Truce Optimism, While Nas |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing Hits a Key Milestone. The Stock Is Up. |
| 2026-05-27 | Black Swan | 🔴 -1 | 3.82 | Yahoo Fina | Is Boeing Running Into More Quality-Control Issues? Investig |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | FAA expects Boeing MAX 7 to be certified this summer, sees m |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing increasing 737 production after consulting FAA |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing Raises 737 Max Production to 47 Jets Per Month |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report?
- 🟢 [Industry|w0.72] Advanced Micro Devices, Inc. (AMD) Plans to Invest more than $10B in T
- 🟢 [Industry|w0.5] 3 Market-Beating Stocks to Consider Right Now

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why Is Sanmina (SANM) Up 20.7% Since Last Earnings Report? |
| 2026-05-26 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 3 Market-Beating Stocks to Consider Right Now |
| 2026-05-25 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Advanced Micro Devices, Inc. (AMD) Plans to Invest more than |
| 2026-05-25 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Sanmina (SANM) is a Strong Growth Stock |
| 2026-05-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Sanmina Corp (SANM) Fits the Affordable Growth Strategy with |

---

### NASDAQ:VIAV

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 11 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] VIAVI SOLUTIONS INC (NASDAQ:VIAV) Screens as a High-Growth Momentum St
- 🟢 [Industry|w1.08] VIAVI Solutions (VIAV) Launches CyberFlood CF1000 400G Security Test P
- 🟢 [Industry|w1.02] Hedge Fund Whale Rock Snaps Up 3 Little-Known AI Stocks in $910M Move

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Hedge Fund Whale Rock Snaps Up 3 Little-Known AI Stocks in $ |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dow Jones Futures Rise After S&P 500, Nasdaq Hit Highs; 5 AI |
| 2026-05-27 | Industry | 🟢 +1 | 1.19 | Finnhub | VIAVI SOLUTIONS INC (NASDAQ:VIAV) Screens as a High-Growth M |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-25 | Analyst Action | 🟢 +1 | 0.86 | Yahoo Fina | Wall Street Analysts See a 30.54% Upside in Viavi Solutions  |
| 2026-05-25 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Dow Jones Futures Rise, Oil Prices Fall: Trump Says No 'Rush |
| 2026-05-23 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Viavi Solutions (VIAV) Valuation After Strong Shar |
| 2026-05-22 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | VIAVI Solutions (VIAV) Launches CyberFlood CF1000 400G Secur |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 21 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.26] How Investors Are Reacting To Cboe Global Markets (CBOE) Expanding Dai
- 🟢 [Industry|w0.86] Cboe Hires Boudewijn Duinstra as Executive Vice President, Chief Risk 
- 🟢 [Analyst Action|w0.86] 3 Reasons Why Growth Investors Shouldn't Overlook CBOE (CBOE)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | FBTC Holds $12 Billion in Bitcoin But Spot ETF Holders Pay O |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Tema Durable Quality ETF (TOLL) Adds Kalshi, Becoming First  |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Faircourt Asset Management Inc. Announces May Distribution |
| 2026-05-26 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Cboe Hires Boudewijn Duinstra as Executive Vice President, C |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Don't Bet on a Nike Stock Rebound Just Yet |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | ICE Stock Declines 13% in a Year: What Should Investors Do N |
| 2026-05-26 | Industry | ⚪  0 | 0.5 | Yahoo Fina | OSB GROUP PLC - Transaction in Own Shares |
| 2026-05-26 | Industry | 🟢 +1 | 0.72 | Seeking Al | Cboe names Boudewijn Duinstra its new chief risk officer |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.4 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as Pipeline U
- 🟢 [Industry|w1.08] How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Has Changed 
- 🟢 [Analyst Action|w0.52] Here's Why Incyte (INCY) is a Strong Momentum Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | PharmaEssentia Appoints Eric Vogel as U.S. Head of Commercia |
| 2026-05-26 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Momentum Stock |
| 2026-05-26 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Incyte to Present at the Goldman Sachs 47th Annual Global He |
| 2026-05-25 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Incyte Sets Mid-Year Phase 3 Trial for CALR Antibody 989 as  |
| 2026-05-23 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | INCYTE CORP (NASDAQ:INCY) Shows Rare Alignment of High Growt |
| 2026-05-22 | Analyst Action | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Incyte (INCY) is a Strong Value Stock |
| 2026-05-22 | Analyst Action | ⚪  0 | 1.3 | Yahoo Fina | Bernstein Initiates Incyte at Market Perform With $99 Price  |
| 2026-05-22 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | How Incyte’s AI-Powered R&D Partnerships At Incyte (INCY) Ha |

---

## 🔴 Avoid / Short (2)

### NYSE:BA

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 25.32 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 17 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Boeing 737 Max production rate 47 per month Ortberg 2026
- 🟢 [Policy|w3.06] Boeing Hits a Key Milestone. The Stock Is Up.
- 🟢 [Policy|w3.06] FAA expects Boeing MAX 7 to be certified this summer, sees more produc

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.82] Is Boeing Running Into More Quality-Control Issues? Investigative Erro
- 🔴 [Industry|w1.19] 10 Industrials Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Dell Stock Is Rising After-Hours Today? |
| 2026-05-27 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Boeing Wins $854.7 Million Navy Contract Modification for P- |
| 2026-05-27 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dow Closes At Record Highs On Iran Truce Optimism, While Nas |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing Hits a Key Milestone. The Stock Is Up. |
| 2026-05-27 | Black Swan | 🔴 -1 | 3.82 | Yahoo Fina | Is Boeing Running Into More Quality-Control Issues? Investig |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | FAA expects Boeing MAX 7 to be certified this summer, sees m |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing increasing 737 production after consulting FAA |
| 2026-05-27 | Policy | 🟢 +1 | 3.06 | Yahoo Fina | Boeing Raises 737 Max Production to 47 Jets Per Month |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **36** / 100 |
| Raw Weighted Score | -10.68 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 14 / 6 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Dick’s  Sales Rise as Foot Locker Returns to Growth
- 🟢 [Earnings|w3.32] Dick's Sporting Goods Inc (DKS) Q1 2026 Earnings Call Highlights: Stro
- 🟢 [Analyst Action|w3.06] Truist Lifts Price Target on Dick's Sporting Goods to $270 From $252, 

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] Stock Market Today, May 27: Micron Extends Rally on AI Chip Momentum, 
- 🔴 [Earnings|w3.32] Dick’s Sporting Shares Slip After Lower Outlook
- 🔴 [Earnings|w3.32] Dick’s Sporting Goods Sales Jump. Why the Stock Is Sliding After Earni

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-27 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Stock Market Today, May 27: Micron Extends Rally on AI Chip  |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Dick’s  Sales Rise as Foot Locker Returns to Growth |
| 2026-05-27 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Forget the K-Shaped Recovery. Ed Yardeni Says It’s Now a ‘G’ |
| 2026-05-27 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Dick's Sporting Goods Inc (DKS) Q1 2026 Earnings Call Highli |
| 2026-05-27 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | DICK'S (DKS) Q1 2026 Earnings Transcript |
| 2026-05-27 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Truist Lifts Price Target on Dick's Sporting Goods to $270 F |
| 2026-05-27 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Dick’s Sporting Shares Slip After Lower Outlook |
| 2026-05-27 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Dick’s Sporting Goods Sales Jump. Why the Stock Is Sliding A |

---

## ⚪ Watch / Neutral (19)

### NASDAQ:RMBS
- Score: 59/100 | raw: 2.08 | News: 4 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 59/100 | raw: 2.06 | News: 9 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 57/100 | raw: 1.67 | News: 4 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 56/100 | raw: 1.51 | News: 5 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 56/100 | raw: 1.36 | News: 4 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMD
- Score: 55/100 | raw: 2.01 | News: 25 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 55/100 | raw: 1.22 | News: 3 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 55/100 | raw: 1.22 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 54/100 | raw: 1.04 | News: 3 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 53/100 | raw: 0.61 | News: 7 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 52/100 | raw: 0.5 | News: 3 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 50/100 | raw: -0.04 | News: 20 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KLAC
- Score: 50/100 | raw: 0 | News: 0 kept / 25 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 2 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GOOGL
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | LLM unavailable or call failed (no keyword fallback)

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NYSE:AROC
- Score: 45/100 | raw: -1.22 | News: 2 kept / 18 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-28T02:35:16.203Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*