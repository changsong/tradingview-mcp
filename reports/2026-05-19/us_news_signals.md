# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-05-19  |  **News Window:** 2026-05-12 ~ 2026-05-19
**Stock Pool:** us_selected.txt (73)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:IRM** | **97** | 11.31 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/23 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:RKLB** | **96** | 10.92 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/13 | Overheated Sentiment (one-sided bullish) |
| 3 | **NYSE:PACS** | **95** | 10.7 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/22 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:NVT** | **92** | 19.97 | 🟢 Long (Strong) | Momentum / Hold | High | 19/21 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:ETN** | **89** | 9.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/25 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:WPM** | **89** | 10.15 | 🟢 Long (Strong) | Momentum / Hold | High | 10/17 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:ASML** | **88** | 24.63 | 🟢 Long (Strong) | Momentum / Hold | High | 18/20 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:PWR** | **87** | 9.79 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 16/24 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:CF** | **87** | 9.27 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/12 | Sentiment Strengthening UP (trend) |
| 10 | **CBOE:CBOE** | **76** | 9.63 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 20/19 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:MTZ** | **74** | 8.84 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/23 | - |
| 12 | **NASDAQ:MPWR** | **74** | 5.7 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/15 | Overheated Sentiment (one-sided bullish) |
| 13 | **NASDAQ:WDC** | **74** | 7.01 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/24 | Overheated Sentiment (one-sided bullish) |
| 14 | **NASDAQ:KLAC** | **72** | 5.19 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/29 | Overheated Sentiment (one-sided bullish) |
| 15 | **NYSE:MS** | **72** | 5.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/20 | - |
| 16 | **NYSE:SM** | **72** | 5.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/21 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:JCI** | **72** | 5.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/20 | - |
| 18 | **NYSE:JOBY** | **71** | 5.01 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/14 | - |
| 19 | **NYSE:GLW** | **71** | 4.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/23 | Sentiment Strengthening UP (trend) |
| 20 | **NASDAQ:LRCX** | **71** | 7.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/22 | Sentiment Strengthening UP (trend) |
| 21 | **NYSE:DELL** | **70** | 4.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/5 | - |
| 22 | **NASDAQ:AMAT** | **70** | 10.08 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/17 | - |
| 23 | **NASDAQ:SANM** | **69** | 4.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/19 | - |
| 24 | **NASDAQ:NVDA** | **69** | 13.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 28/11 | Sentiment Strengthening UP (trend) |
| 25 | **NASDAQ:AVGO** | **69** | 7.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/21 | - |
| 26 | **NYSE:TT** | **68** | 4.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/17 | - |
| 27 | **NASDAQ:IREN** | **67** | 13.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 25/15 | - |
| 28 | **NASDAQ:EQIX** | **67** | 4.13 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/26 | - |
| 29 | **NASDAQ:ERIC** | **67** | 4.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/12 | - |
| 30 | **NYSE:VRT** | **66** | 5.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/24 | - |
| 31 | **NASDAQ:CORZ** | **66** | 3.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/18 | - |
| 32 | **NYSE:HG** | **66** | 3.84 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/16 | - |
| 33 | **NASDAQ:AMD** | **65** | 6.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/16 | - |
| 34 | **NYSE:MOD** | **65** | 3.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/13 | - |
| 35 | **NYSE:CIEN** | **64** | 3.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/25 | - |
| 36 | **NASDAQ:APLD** | **64** | 3.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/14 | - |
| 37 | **NYSE:LAR** | **64** | 3.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/23 | - |
| 38 | **NASDAQ:MRVL** | **63** | 4.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 16/24 | - |
| 39 | **NYSE:COHR** | **62** | 3.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/24 | - |
| 40 | **NYSE:GNRC** | **62** | 2.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/22 | - |
| 41 | **NYSE:TRNO** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/4 | - |
| 42 | **NYSE:FN** | **60** | 2.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/19 | - |
| 43 | **NYSE:SMP** | **58** | 1.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 44 | **NASDAQ:POWL** | **58** | 1.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/19 | - |
| 45 | **NYSE:P** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/28 | - |
| 46 | **NASDAQ:FLEX** | **57** | 1.73 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/21 | - |
| 47 | **NASDAQ:INCY** | **56** | 1.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/25 | - |
| 48 | **NASDAQ:CRDO** | **56** | 1.46 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/23 | - |
| 49 | **NASDAQ:PRDO** | **56** | 1.37 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 50 | **NYSE:DKS** | **56** | 1.47 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/18 | - |
| 51 | **NASDAQ:MU** | **54** | 1.03 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/4 | - |
| 52 | **NASDAQ:VSAT** | **53** | 0.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/11 | - |
| 53 | **NASDAQ:CPRX** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 54 | **NASDAQ:ADI** | **52** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/24 | - |
| 55 | **NYSE:ENS** | **52** | 0.52 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/26 | - |
| 56 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 57 | **NASDAQ:MTSI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 58 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 59 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/23 | - |
| 60 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 61 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 62 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 63 | **NASDAQ:LITE** | **50** | 0.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 16/23 | - |
| 64 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 65 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 66 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/19 | - |
| 67 | **NASDAQ:INTC** | **49** | -0.4 | ⚪ No Trade (Neutral) | Watch | Low | 17/1 | - |
| 68 | **NYSE:RIO** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 9/11 | - |
| 69 | **NASDAQ:GEN** | **47** | -0.7 | ⚪ No Trade (Neutral) | Watch | Low | 3/22 | - |
| 70 | **NASDAQ:RMBS** | **43** | -1.69 | ⚪ No Trade (Neutral) | Watch | Low | 5/21 | - |
| 71 | **NYSE:JHG** | **41** | -2.25 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 1/14 | - |
| 72 | **NASDAQ:BGC** | **39** | -2.72 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 4/16 | - |
| 73 | **NYSE:NOK** | **37** | -3.34 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 8/20 | - |

---

## 🟢 Strong Long (3)

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 19.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] nVent Electric Approves $500 Million Share Buyback; Maintains Quarterl
- 🟢 [Buyback|w2.52] NVent Electric plc Declares Quarterly Cash Dividend, Payable on August
- 🟢 [Earnings|w2.34] Did Record Q1 Results and Raised Guidance Just Shift nVent Electric's 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Insider Transaction: Martha Claire Bennett Sells $642K Worth Of nVent 
- 🔴 [Industry|w0.5] Aravind Padmanabhan Takes Money Off The Table, Sells $2.77M In nVent E

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | nVent Electric Approves $500 Million Share Buyback; Maintain |
| 2026-05-16 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Did Record Q1 Results and Raised Guidance Just Shift nVent E |
| 2026-05-16 | Buyback | 🟢 +1 | 2.16 | Yahoo Fina | nVent Announces Share Repurchase Authorization |
| 2026-05-16 | Buyback | 🟢 +1 | 2.16 | Yahoo Fina | nVent Announces Quarterly Cash Dividend |
| 2026-05-16 | Industry | 🟢 +1 | 0.84 | Finnhub | NVENT ELECTRIC PLC (NYSE:NVT) Breaks Out with Strong Momentu |
| 2026-05-16 | Buyback | 🟢 +1 | 2.52 | Finnhub | NVent Electric plc Declares Quarterly Cash Dividend, Payable |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Finnhub | Our Top 10 High Growth Dividend Stocks - May 2026 |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Liberty All-Star® Growth Fund, Inc. April 2026 Monthly Updat |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 10.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Wheaton Precious Metals Reshapes Growth Story With Antamina Deal And R
- 🟢 [Buyback|w2.59] Wheaton Precious Metals (WPM) Raises Its Dividend Again As Cash Flow S
- 🟢 [Earnings|w1.95] Wheaton Precious Metals Q1 Earnings Call Highlights

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.84] Wheaton Precious Metals (WPM) Price Target Decreased by 29.01% to 137.

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Wheaton Precious Metals Reshapes Growth Story With Antamina  |
| 2026-05-18 | Industry | ⚪  0 | 0.6 | Finnhub | Precious Metals Royalty And Streaming Companies - April 2026 |
| 2026-05-18 | Industry | 🟢 +1 | 1.19 | Finnhub | Wheaton Precious Metals Corp (NYSE: WPM) Shines as a CAN SLI |
| 2026-05-17 | Buyback | 🟢 +1 | 2.59 | Yahoo Fina | Wheaton Precious Metals (WPM) Raises Its Dividend Again As C |
| 2026-05-16 | Industry | 🟢 +1 | 0.84 | Finnhub | Wheaton Precious Metals Corp (NYSE:WPM): An Affordable Growt |
| 2026-05-15 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Wheaton Precious Metals Q1 Earnings Call Highlights |
| 2026-05-15 | Analyst Action | 🔴 -1 | 0.84 | Finnhub | Wheaton Precious Metals (WPM) Price Target Decreased by 29.0 |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | GLNCY vs. WPM: Which Stock Should Value Investors Buy Now? |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 24.63 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 20 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] ASML Partners With Tata on India's $11 Billion Chip Manufacturing Push
- 🟢 [M&A|w4.16] ASML, Tata Electronics to advance semiconductor production in India
- 🟢 [M&A|w3.57] ASML Expands Globally, Joins Tata for India Semiconductor Hub

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Leopold Aschenbrenner's 'Situational Awareness' Files 13F Quarterly In
- 🔴 [Industry|w0.7] US Equity Markets End Lower as Rising Oil, Bond Yields Stoke Inflation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Leopold Aschenbrenner's 'Situational Awareness' Files 13F Qu |
| 2026-05-18 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | ASML Expands Globally, Joins Tata for India Semiconductor Hu |
| 2026-05-18 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | ASML Tata Deal Links India Fab Plans With Richly Valued Shar |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing ASML Holding’s (ENXTAM:ASML) Valuation After Stron |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Applied Materials' Margin Reaches Historic High: Is it Susta |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks Pressured by a Rebound in Crude Prices and Bond Yield |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Advanced Energy Industries (AEIS) Stock Outpacing Its Com |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Want Overseas Exposure Without Buying The Junk? This Fund Ha |

---

## 🟢 Mid Long (29)

### NYSE:MTZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 8.84 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 23 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] Billionaire Investor Quietly Loads Up On Construction Stocks As One Ge
- 🟢 [Earnings|w2.34] MasTec Inc (MTZ): Surging Blacklog Brightens Stock Outlook
- 🟢 [Earnings|w1.64] MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up to Demand?

**📉 Bearish Factors:**
- 🔴 [Policy|w2.16] Sterling, Construction Partners, FTAI Infrastructure, MasTec, and Amer
- 🔴 [Industry|w0.6] 10 Industrials Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 3 Market-Beating Stocks with Exciting Potential |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can Quanta's Acquisition Strategy Keep Compounding Sharehold |
| 2026-05-18 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | Billionaire Investor Quietly Loads Up On Construction Stocks |
| 2026-05-18 | Industry | ⚪  0 | 1.19 | Finnhub | MasTec, Inc. (MTZ) Analyst/Investor Day Transcript |
| 2026-05-18 | Industry | 🔴 -1 | 0.6 | Finnhub | 10 Industrials Stocks Whale Activity In Today's Session |
| 2026-05-16 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | MasTec Inc (MTZ): Surging Blacklog Brightens Stock Outlook |
| 2026-05-16 | Policy | 🔴 -1 | 2.16 | Yahoo Fina | Sterling, Construction Partners, FTAI Infrastructure, MasTec |
| 2026-05-15 | Industry | ⚪  0 | 0.7 | Finnhub | Transcript : MasTec, Inc. - Analyst/Investor Day |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Did Record Q1 2026 Results and Fee Engine Just Shift Morgan Stanley's 
- 🟢 [Buyback|w1.04] Kiplinger’s May 2026 Letter Says Yields From 3% to 13% Are Available R
- 🟢 [Industry|w1.02] Amid AI Disruption and Retention Risk Concerns, Financial Benefits Dri

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Oil Rises on Doubts Over US, Iran Stance to End Conflict |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Should You Buy Goldman Sachs Stock After Its Investment Bank |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Amid AI Disruption and Retention Risk Concerns, Financial Be |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Inflation Uptick Is Starting to Send Sell Signals to Stock B |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Wall Street Races to Lift Targets on Japan’s Chip Darling Ki |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | How The Man Group (LSE:EMG) Narrative Is Shifting As Analyst |
| 2026-05-18 | M&A | 🟢 +1 | 0.71 | Yahoo Fina | British Takeovers Up 250% as Global Buyers Bypass Political  |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Yahoo Fina | How The S4 Capital (LSE:SFOR) Story Is Shifting With New Pri |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] The 5 Most Interesting Analyst Questions From SM Energy’s Q1 Earnings 
- 🟢 [Analyst Action|w1.43] Wells Fargo Maintains Equal-Weight on SM Energy, Raises Price Target t
- 🟢 [Analyst Action|w1.22] SM Energy Gains Momentum on Civitas Merger, RBC Says

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.66] SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | SM Energy Gains Momentum on Civitas Merger, RBC Says |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Wells Fargo Maintains Equal-Weight on SM Energy, Raises Pric |
| 2026-05-16 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | The 5 Most Interesting Analyst Questions From SM Energy’s Q1 |
| 2026-05-14 | Earnings | 🔴 -1 | 0.66 | Yahoo Fina | SM Energy's (NYSE:SM) Problems Go Beyond Weak Profit |
| 2026-05-13 | Earnings | ⚪  0 | 0.56 | Yahoo Fina | SM Energy Surges 67% in Six Months: Is the Stock Worth Betti |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Are Investors Undervaluing SM Energy (SM) Right Now? |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | This Top Oils and Energy Stock is a #1 (Strong Buy): Why It  |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] 5 Must-Read Analyst Questions From Johnson Controls’s Q1 Earnings Call
- 🟢 [M&A|w1.51] Johnson Controls Closes Alloy Enterprises Acquisition
- 🟢 [M&A|w1.51] Johnson Controls completes acquisition of Alloy Enterprises

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | Johnson Controls International's (NYSE:JCI) Soft Earnings Ar |
| 2026-05-16 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | 5 Must-Read Analyst Questions From Johnson Controls’s Q1 Ear |
| 2026-05-13 | M&A | 🟢 +1 | 1.51 | Yahoo Fina | Johnson Controls Closes Alloy Enterprises Acquisition |
| 2026-05-13 | M&A | 🟢 +1 | 1.51 | Yahoo Fina | Johnson Controls completes acquisition of Alloy Enterprises |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Hyperscalers' AI buildout will require massive amounts of en |

---

### NYSE:JOBY

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.01 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 14 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelms Q1 Beat
- 🟢 [Earnings|w1.64] Joby Aviation Shares Fly Higher Wednesday: What's Driving The Action?
- 🟢 [Industry|w0.6] Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Which Stock Wi

**📉 Bearish Factors:**
- 🔴 [Industry|w0.51] Stock Market Today, May 18: Archer Aviation Extends Losses As Investor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Joby Aviation a Buy, Sell, or Hold in 2026? |
| 2026-05-18 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | Stock Market Today, May 18: Archer Aviation Extends Losses A |
| 2026-05-18 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Beaten-Down Stocks That Could Take Off if Interest Rates C |
| 2026-05-15 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Archer vs. Joby: The eVTOL Race Just Got Real -- Here's Whic |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | This $11 Stock Could Be Your Ticket to Millionaire Status |
| 2026-05-15 | Earnings | 🟢 +1 | 2.27 | Finnhub | Joby Aviation Shares Fall As Growth-Stock Sell-Off Overwhelm |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Hamilton AI Launches Three New Products in Record Time |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why criticism of ARKK's Cathie Wood might be a bit 'harsh' |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] AI Supercharged This Flatlining U.S. Manufacturing Stock. Now It's Jus
- 🟢 [Analyst Action|w1.43] Mizuho Raises its Price Target on Corning (GLW)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Mizuho Raises its Price Target on Corning (GLW) |
| 2026-05-17 | M&A | 🟢 +1 | 3.53 | Finnhub | AI Supercharged This Flatlining U.S. Manufacturing Stock. No |
| 2026-05-15 | Policy | ⚪  0 | 0.84 | Finnhub | The Bond Market Just Fired A Warning Shot At The AI Rally —  |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Jim Cramer Shares Key Facts About Corning (GLW) |
| 2026-05-14 | Industry | ⚪  0 | 0.59 | Finnhub | Ciena Up 90% in 3 Months: Should Investors Still Buy the Sto |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 7.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.43] Dan Loeb Dumps Microsoft, Slashes Nvidia And Rail Stocks In Sweeping Q
- 🟢 [Analyst Action|w1.43] This Lam Research Analyst Turns Bullish; Here Are Top 5 Upgrades For M
- 🟢 [Analyst Action|w1.22] Semicap stocks: Morgan Stanley raises WFE outlook and shifts ratings

**📉 Bearish Factors:**
- 🔴 [Policy|w2.52] MACOM, Marvell Technology, Applied Materials, KLA Corporation, and Lam

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Stocks Settle Mixed as Iran War Remains Unresolved |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Semicap stocks: Morgan Stanley raises WFE outlook and shifts |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Applied Materials' Margin Reaches Historic High: Is it Susta |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | B. Riley Raises its Price Target on Lam Research (LRCX) |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Zscaler upgraded, CoreWeave downgraded: Wall Street's top an |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Here Are Monday’s Top Wall Street Analyst Research Calls: Ap |
| 2026-05-18 | Policy | 🟢 +1 | 1.22 | Yahoo Fina | Potential Beijing Thaw Puts Lam Research Export And Supply R |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Morgan Stanley Upgrades Lam Research to Overweight From Equa |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 5 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Market Chatter: Dell Added 1,000 AI Factory Customers Last Quarter
- 🟢 [Industry|w0.85] Dell expands AI Factory with Nvidia to provide scale-ready AI agents f
- 🟢 [Industry|w0.85] Dell Brings Hybrid AI Vision To Life

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | NVIDIA Extends On Premises AI Reach As Valuation Stays Above |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | See How Trump’s Accounts Were Busy Trading Big Tech Stocks |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Spill: Apple (AAPL) Just Crushed It. Now What? |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dell, Nvidia CEOs discuss shift to personal AI computing at  |
| 2026-05-18 | Policy | ⚪  0 | 0.61 | Yahoo Fina | Nvidia CEO says he believes China market will open over time |
| 2026-05-18 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Market Chatter: Dell Added 1,000 AI Factory Customers Last Q |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell Technologies Closes the Gap Between AI Ambition and AI  |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dell Technologies Delivers Production-Ready Agentic AI from  |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 10.08 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Applied Materials fails to escape profit-taking despite solid earnings
- 🟢 [Earnings|w3.32] Applied Materials' Margin Reaches Historic High: Is it Sustainable?
- 🟢 [Earnings|w3.28] Applied Materials, Inc. Just Beat Analyst Forecasts, And Analysts Have

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] This Applied Materials Analyst Is No Longer Bullish; Here Are Top 5 Do
- 🔴 [Analyst Action|w1.22] Applied Materials Shares Fall After Downgrade From Morgan Stanley
- 🔴 [Analyst Action|w1.22] Semicap stocks: Morgan Stanley raises WFE outlook and shifts ratings

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | Applied Materials Shares Fall After Downgrade From Morgan St |
| 2026-05-18 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | Semicap stocks: Morgan Stanley raises WFE outlook and shifts |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | ASML Expands Globally, Joins Tata for India Semiconductor Hu |
| 2026-05-18 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Applied Materials' Margin Reaches Historic High: Is it Susta |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Zscaler upgraded, CoreWeave downgraded: Wall Street's top an |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Citic Securities Adjusts Price Target on Applied Materials t |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Dow Jones and Nasdaq climb as oil eases on reports of Iran s |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here Are Monday’s Top Wall Street Analyst Research Calls: Ap |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] SANMINA CORP (NASDAQ:SANM) Checks All the Growth Investor Boxes
- 🟢 [Analyst Action|w0.6] 3 AI-Powered EMS Stocks to Buy for 2026 Despite Year-to-Date Rally

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can Missile Defense Demand Drive TTMI's Aerospace & Defense  |
| 2026-05-18 | Earnings | 🟢 +1 | 3.87 | Finnhub | SANMINA CORP (NASDAQ:SANM) Checks All the Growth Investor Bo |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Should You Hold TTMI at 41.1X P/E? 3 Reasons Despite the Pre |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | 3 AI-Powered EMS Stocks to Buy for 2026 Despite Year-to-Date |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Marvell Stock Climbs After AMD Reveals Surprise Stake |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | AMD Reveals A $6.5 Million Marvell Bet That's Already Soarin |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 13.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 28 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.2] Up More Than 400% in 1 Year, Is This Nvidia-Backed, Red-Hot AI Stock a
- 🟢 [Policy|w3.57] Why Nvidia (NVDA) Stock Is Trading Up Today
- 🟢 [Industry|w3] NVIDIA Extends On Premises AI Reach As Valuation Stays Above Fair Valu

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] OpenAI whistleblower ditches Nvidia, AMD for crypto miners
- 🔴 [Industry|w1.19] Billionaire Stanley Druckenmiller Still Isn't Buying Nvidia. But He Ju
- 🔴 [Earnings|w1.1] Nvidia Q1 Preview: Data Center Backlash

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | TBUX vs. TLT: Which Bond Fund Is the Better Buy? |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why Dominion Energy Stock Jumped Today |
| 2026-05-19 | Industry | ⚪  0 | 1.2 | Yahoo Fina | Semiconductor Exposure in S&P 500 Hits 18%. That’s More Than |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Best Crypto ETFs to Buy in 2026 |
| 2026-05-19 | M&A | 🟢 +1 | 4.2 | Yahoo Fina | Up More Than 400% in 1 Year, Is This Nvidia-Backed, Red-Hot  |
| 2026-05-19 | Rumor | ⚪  0 | 0.72 | Yahoo Fina | Trump's Trading Disclosure Shows Activity In Nvidia, AMD, Mi |
| 2026-05-19 | Industry | 🟢 +1 | 3 | Yahoo Fina | NVIDIA Extends On Premises AI Reach As Valuation Stays Above |
| 2026-05-19 | Rumor | ⚪  0 | 0.72 | Yahoo Fina | See How Trump’s Accounts Were Busy Trading Big Tech Stocks |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 7.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 21 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Is Broadcom (AVGO) the Fastest Growing S&P 500 Stock to Buy Now?
- 🟢 [Analyst Action|w1.44] UBS drops aggressive Broadcom stock price forecast
- 🟢 [Analyst Action|w1.22] TD Cowen Raises PT on Broadcom (AVGO), Keeps a Buy

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Situational Awareness LP discloses $5.5 billion portfolio with large s
- 🔴 [Industry|w1.19] The AI Inference Supercycle Is Here. These 2 Stocks Will Be the Bigges
- 🔴 [Industry|w1.02] Leopold Aschenbrenner's 'Situational Awareness' Files 13F Quarterly In

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | UBS drops aggressive Broadcom stock price forecast |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Broadcom Inc. (AVGO) Declines More Than Market: Some Informa |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks Settle Mixed as Iran War Remains Unresolved |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Top Analyst Reports for Broadcom, Berkshire Hathaway & Exxon |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | TD Cowen Raises PT on Broadcom (AVGO), Keeps a Buy |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why Broadcom (AVGO) Stock Is Up Today |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Leopold Aschenbrenner's 'Situational Awareness' Files 13F Qu |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nvidia Q1 earnings: The 3 things this analyst will be watchi |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Jim Cramer on Trane Technologies: “The Whole Business Is Thriving”
- 🟢 [Analyst Action|w1.51] JPMorgan Adjusts Price Target on Trane Technologies to $476 From $460,

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | 3 Market-Beating Stocks with Exciting Potential |
| 2026-05-17 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Jim Cramer on Trane Technologies: “The Whole Business Is Thr |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | JPMorgan Adjusts Price Target on Trane Technologies to $476  |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Seeking Al | Trane Technologies plc (TT) Presents at Bank of America 33rd |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 13.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 25 / 15 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] IREN To Acquire Awaken, A Firm That Specializes In Content Strategy An
- 🟢 [M&A|w4.16] IREN Acquires Awaken to Support Global Brand Growth
- 🟢 [M&A|w3.57] Iren Buys External Marketing Partner Awaken

**📉 Bearish Factors:**
- 🔴 [Industry|w1.5] NVIDIA-linked stock sinks after $3 billion capital raise
- 🔴 [Industry|w1.5] Iren Stock Sinks 8% After Massive $3 Billion Convertible Note Deal
- 🔴 [Analyst Action|w1.43] IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Results (Downgr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Earnings | ⚪  0 | 3.32 | Yahoo Fina | Iren's Earnings Highlight Long-Term Growth Potential While D |
| 2026-05-18 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Iren Buys External Marketing Partner Awaken |
| 2026-05-18 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | IREN: Nvidia's Vote Of Confidence And The Demanding Q3 Resul |
| 2026-05-18 | M&A | 🟢 +1 | 4.16 | Finnhub | IREN To Acquire Awaken, A Firm That Specializes In Content S |
| 2026-05-18 | M&A | 🟢 +1 | 4.16 | Finnhub | IREN Acquires Awaken to Support Global Brand Growth |
| 2026-05-18 | Analyst Action | 🔴 -1 | 1.02 | Seeking Al | IREN Limited: Nvidia's Vote Of Confidence And The Demanding  |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Yahoo Fina | BIT Capital Dumps 1.24 Million Lemonade (LMND) Shares Worth  |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Finnhub | Oklo, Rocket Companies, And Carvana Are Among Top 10 Large-C |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.13 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 26 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] How The Investment Narrative For Equinix (EQIX) Is Shifting After New 
- 🟢 [Industry|w1.5] Equinix Expands Fabric Geo Zones for Sovereign Data Control
- 🟢 [Analyst Action|w1.04] What a top-tier data center market looks like, according to Bernstein

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Market Chatter: Equinix Cape Town Data Center Plan Faces Opposition Ov

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Sector Update: Tech Stocks Fall Late Afternoon |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Market Chatter: Equinix Cape Town Data Center Plan Faces Opp |
| 2026-05-18 | Industry | ⚪  0 | 1.19 | Finnhub | Coatue Cuts Tesla Position By 96%, Trims Nvidia While Buying |
| 2026-05-18 | Industry | ⚪  0 | 1.19 | Finnhub | "We are already losing ground" – data centers call for space |
| 2026-05-17 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | What a top-tier data center market looks like, according to  |
| 2026-05-15 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Equinix Expands Fabric Geo Zones for Sovereign Data Control |
| 2026-05-15 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | How The Investment Narrative For Equinix (EQIX) Is Shifting  |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Stock Market Today, May 14: Fermi Surges After "Fermi 2.0" P |

---

### NASDAQ:ERIC

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 12 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.06] Share buybacks in Ericsson during the period May 11 - May 15, 2026
- 🟢 [Industry|w0.5] Westcan ACS Joins Ericsson's Channel Partner Program To Deliver Ericss
- 🟢 [Industry|w0.5] Hiya Powers France's First Network-Level Branded Calling Deployment wi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Buyback | 🟢 +1 | 3.06 | Yahoo Fina | Share buybacks in Ericsson during the period May 11 - May 15 |
| 2026-05-15 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Is It Too Late To Consider Ericsson (OM:ERIC B) After Its 46 |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Westcan ACS Joins Ericsson's Channel Partner Program To Deli |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Hiya Powers France's First Network-Level Branded Calling Dep |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Nokia (NOK) Reset: Is the Infrastructure Giant Still Underva |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Ericsson to utilize mandate to transfer shares |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 5.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Forget Hyperscalers, These Stocks Are The New AI Plays
- 🟢 [Analyst Action|w2.52] Morgan Stanley Raises Vertiv (VRT) Target by $65
- 🟢 [Analyst Action|w2.52] Loop Capital Initiates Coverage of Vertiv Holdings (VRT) with Buy Reco

**📉 Bearish Factors:**
- 🔴 [M&A|w2.52] Vertiv Urges Rejection Of Mini Tender As Valuation Looks Stretched
- 🔴 [Industry|w0.6] Dow Jones Futures: Trump Iran Delay Saves Dow, But Sandisk, Bloom Ener
- 🔴 [Industry|w0.6] Dow Jones Futures: Trump Iran Delay Saves Dow, But Sandisk, Bloom Ener

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | Dow Jones Futures: Trump Iran Delay Saves Dow, But Sandisk,  |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | CIO touts 'AIR 7' as AI-heavy alternative to 'Magnificent 7' |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | How Investors Are Reacting To Vertiv (VRT) Hiring a New CPO  |
| 2026-05-18 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Forget Hyperscalers, These Stocks Are The New AI Plays |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AI Data Center Boom: 3 Behind the Scenes Names Protecting He |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | OCP (Open Compute Project) Rack Market Forecast Report 2025- |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Jacobs appoints Cheryl Lim as chief human resources officer |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 2 Cash-Producing Stocks on Our Buy List and 1 We Question |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 18 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Core Scientific (CORZ) Recovers As Investors Digest Earnings Report
- 🟢 [Analyst Action|w1.22] Core Scientific Is Firing on All Cylinders as Analysts Approve Its Exp
- 🟢 [Analyst Action|w0.84] Buy Core Scientific Over Applied Digital

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] 10 Information Technology Stocks Whale Activity In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Core Scientific Is Firing on All Cylinders as Analysts Appro |
| 2026-05-15 | Industry | 🔴 -1 | 0.5 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Buy Core Scientific Over Applied Digital |
| 2026-05-15 | Analyst Action | ⚪  0 | 0.5 | Seeking Al | SA analyst upgrades/downgrades: AAPL, GT, CORZ, PLUG |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Bitcoin Miners That Got Into AI Have Soaring Stocks. These E |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Core Scientific (CORZ) Recovers As Investors Digest Earnings |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.7 | Finnhub | Core Scientific: AI Beneficiary Status Is Proven, But Shares |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Fundamentals Over Everything |

---

### NYSE:HG

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.84 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 16 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.8] New Strong Buy Stocks for May 15th
- 🟢 [Analyst Action|w1.8] Best Value Stocks to Buy for May 15th
- 🟢 [Industry|w1.26] AM Best Upgrades Credit Ratings of Hamilton Select Insurance Inc.; Aff

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] 2 Growth Stocks with Explosive Upside and 1 That Underwhelm

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Chris Stella Appointed Chief Claims Officer of Hamilton Sele |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | 2 Growth Stocks with Explosive Upside and 1 That Underwhelm |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Yahoo Fina | What Hamilton Insurance Group (HG)'s Board Refresh with Pete |
| 2026-05-15 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Implied Volatility Surging for Hamilton Insurance Stock Opti |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.8 | Yahoo Fina | New Strong Buy Stocks for May 15th |
| 2026-05-15 | Analyst Action | 🟢 +1 | 1.8 | Yahoo Fina | Best Value Stocks to Buy for May 15th |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Here's Why You Should Keep Holding Aflac in Your Portfolio |
| 2026-05-13 | Industry | 🟢 +1 | 1.26 | Finnhub | AM Best Upgrades Credit Ratings of Hamilton Select Insurance |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 6.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 16 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] AMD Just Delivered Fantastic News to Marvell Stock Investors
- 🟢 [Analyst Action|w2.55] Intel, AMD see price target hikes at Citi as firm raises CPU estimates
- 🟢 [Analyst Action|w1.44] Citi revamps AMD stock price target ahead of key announcement

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Micron Stock's Worst 2-Day Drop In A Year: Is The Chip Bubble Bursting
- 🔴 [Industry|w1.19] Situational Awareness LP discloses $5.5 billion portfolio with large s
- 🔴 [Industry|w1.02] OpenAI whistleblower ditches Nvidia, AMD for crypto miners

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-19 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Citi revamps AMD stock price target ahead of key announcemen |
| 2026-05-19 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Trump's Trading Disclosure Shows Activity In Nvidia, AMD, Mi |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | OpenAI whistleblower ditches Nvidia, AMD for crypto miners |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Intel Is Stuck in a Losing Streak After Fifth Straight Daily |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, May 18: Intel Slips After AI Bubble Risk |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Buy the Dip in Nvidia Stock off of Record Highs as Q1 Earnin |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Evercore ISI Maintains Outperform Rating on Advanced Micro D |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Prediction: AMD Stock Is Going to Triple in 5 Years, Thanks  |

---

### NYSE:MOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 13 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Is It Worth Investing in Modine (MOD) Based on Wall Street's Bullish V
- 🟢 [Industry|w1.02] AI Data Center Boom: 3 Behind the Scenes Names Protecting Headline Chi
- 🟢 [Earnings|w0.66] 2 Rockstar AI Stocks with Red Hot Earnings Charts

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Modine (MOD) Dips More Than Broader Market: What You Should  |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AI Data Center Boom: 3 Behind the Scenes Names Protecting He |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Is It Worth Investing in Modine (MOD) Based on Wall Street's |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Xos, Inc. (XOS) Reports Q1 Loss, Beats Revenue Estimates |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | How Modine Manufacturing (MOD) Data Center Ambitions Are Ref |
| 2026-05-14 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | 2 Rockstar AI Stocks with Red Hot Earnings Charts |
| 2026-05-14 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | Here is What to Know Beyond Why Modine Manufacturing Company |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Jim Cramer Just Identified an AI Infrastructure Supplier Yet |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 25 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Citigroup Adjusts Price Target on Ciena to $658 From $345, Maintains B
- 🟢 [Industry|w0.86] Quantum Computing’s Massive Q1 Revenue Shift And Quantum Networking Pr
- 🟢 [Analyst Action|w0.72] TD Cowen Adjusts Price Target on Ciena to $675 From $425, Maintains Bu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can Healthy Revenue Growth Boost Workday's Q1 Earnings? |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Take-Two Before Q4 Earnings: What's in the Cards for the Sto |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Citigroup Adjusts Price Target on Ciena to $658 From $345, M |
| 2026-05-17 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Quantum Computing’s Massive Q1 Revenue Shift And Quantum Net |
| 2026-05-15 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Optical stocks are booming. Here’s how to invest in one of t |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Stock Market Winners Tend To Have The 'New' In Spades. Here' |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | TD Cowen Adjusts Price Target on Ciena to $675 From $425, Ma |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why One Investor May Be Losing Confidence in GitLab |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 14 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] A Look At Applied Digital (APLD) Valuation After $300 Million Goldman 
- 🟢 [Industry|w1.26] Applied Digital (APLD) Stock Continues To Rise As Company Gets Loan Fo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | A Look At Applied Digital (APLD) Valuation After $300 Millio |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 1 of Wall Street’s Favorite Stock on Our Watchlist and 2 We  |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Should You Hold APLD at 16.9x P/S? 3 Reasons Despite the Pre |
| 2026-05-14 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | Applied Digital (APLD) Stock Continues To Rise As Company Ge |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | IREN Trades at Premium Valuation: Buy, Sell or Hold the Stoc |

---

### NYSE:LAR

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 23 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.76] Lithium Argentina Gets Large Investment Incentive Regime Approval To E
- 🟢 [Policy|w1.51] Lithium Argentina Receives RIGI Approval for Cauchari-Olaroz Stage 2 E

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-14 | Policy | 🟢 +1 | 1.51 | Yahoo Fina | Lithium Argentina Receives RIGI Approval for Cauchari-Olaroz |
| 2026-05-14 | Policy | 🟢 +1 | 1.76 | Finnhub | Lithium Argentina Gets Large Investment Incentive Regime App |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Seeking Al | Stocks to watch on Thursday after hours: FIG, XBP, LAR |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Lithium Argentina (TSX:LAR) Valuation After Strong |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 4.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 16 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Marvell Leans Into Optical Networking As AI Growth And Valuation Quest
- 🟢 [M&A|w2.45] Marvell’s AI Partnerships With AMD Google And Amazon Test Lofty Valuat
- 🟢 [Analyst Action|w1.04] Jim Cramer on Marvell: “It Can Go Higher”

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] 10 Information Technology Stocks With Whale Alerts In Today's Session
- 🔴 [Industry|w1.02] Marvell Technology (MRVL) Suffers a Larger Drop Than the General Marke
- 🔴 [Industry|w1.02] Marvell Technology Insider Sold Shares Worth $700,960, According to a 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Marvell Technology (MRVL) Suffers a Larger Drop Than the Gen |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | POET Technologies Secures US$400M Strategic Investment |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AMD Reveals A $6.5 Million Marvell Bet That's Already Soarin |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Marvell Technology Insider Sold Shares Worth $700,960, Accor |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AMD Just Delivered Fantastic News to Marvell Stock Investors |
| 2026-05-18 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Marvell Leans Into Optical Networking As AI Growth And Valua |
| 2026-05-18 | Industry | ⚪  0 | 0.6 | Finnhub | Micron Stock's Worst 2-Day Drop In A Year: Is The Chip Bubbl |
| 2026-05-18 | Industry | 🔴 -1 | 1.19 | Finnhub | 10 Information Technology Stocks With Whale Alerts In Today' |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] BofA Raises its Price Target on Coherent (COHR)
- 🟢 [Earnings|w3.28] Why Coherent (COHR) Is Up 14.1% After Strong Q3 Results And Expanded N
- 🟢 [Analyst Action|w1.22] Rothschild & Co Redburn Adjusts Price Target on Coherent to $461.96 Fr

**📉 Bearish Factors:**
- 🔴 [Industry|w2.55] Lumentum, Coherent Drop After Prominent AI Investor Sells Stakes
- 🔴 [Industry|w1.02] COHR Dives Into AI Market: Can Concentration Risks Affect Top Line?
- 🔴 [Industry|w0.51] Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coherent Drops 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | These Stocks Are Today’s Movers: Dominion Energy, ServiceNow |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | POET Technologies Secures US$400M Strategic Investment |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | How Nvidia Stock Can Hit $300 After Earnings |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Top Analyst Reports for Broadcom, Berkshire Hathaway & Exxon |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AXTI Surges More Than 650% YTD: What's Driving the Strong Up |
| 2026-05-18 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | Applied Optoelectronics Slumps 10%, Lumentum Dives 9%, Coher |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Rothschild & Co Redburn Adjusts Price Target on Coherent to  |
| 2026-05-18 | Industry | 🔴 -1 | 2.55 | Yahoo Fina | Lumentum, Coherent Drop After Prominent AI Investor Sells St |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 22 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Generac and Meritage Homes have been highlighted as Zacks Bull and Bea
- 🟢 [Earnings|w1.64] Bull of the Day: Generac Holdings Inc. (GNRC)
- 🟢 [Industry|w0.7] 10 Industrials Stocks Whale Activity In Today's Session

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] 3 Mid-Cap Stocks We Find Risky

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Bear of the Day: Standex International (SXI) |
| 2026-05-18 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | 3 Mid-Cap Stocks We Find Risky |
| 2026-05-15 | Industry | 🟢 +1 | 0.7 | Finnhub | 10 Industrials Stocks Whale Activity In Today's Session |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Generac and Meritage Homes have been highlighted as Zacks Bu |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Bull of the Day: Generac Holdings Inc. (GNRC) |

---

### NYSE:TRNO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 4 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Terreno Realty Corporation: This Coastal Industrial REIT Is A Buy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-16 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Terreno Realty Corporation: This Coastal Industrial REIT Is  |

---

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 19 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.4] FN vs. AAOI: Which Stock Is Worth Buying Post Latest Earnings Results?
- 🟢 [Analyst Action|w0.6] These 7 Stocks Are Analyst Favorites For Magnificent Earnings Growth; 
- 🟢 [Industry|w0.5] Innoviz Technologies Ltd. Q1 2026 Earnings Call Summary

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Forgent Rides AI Infrastructure Boom With Healthy Demand Tre |
| 2026-05-18 | Industry | ⚪  0 | 1.19 | Finnhub | Fabrinet (FN) Presents at J.P. Morgan 54th Annual Global Tec |
| 2026-05-18 | Industry | ⚪  0 | 1.19 | Finnhub | Transcript : Fabrinet Presents at J.P. Morgan 54th Annual Gl |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Exploring US High Growth Tech Stocks This May 2026 |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Innoviz Technologies Ltd. Q1 2026 Earnings Call Summary |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | These 7 Stocks Are Analyst Favorites For Magnificent Earning |
| 2026-05-13 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | FN vs. AAOI: Which Stock Is Worth Buying Post Latest Earning |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Yahoo Fina | High Growth Tech Stocks In The US For May 2026 |

---

## 🟡 Cautious Long (3)

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 15 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Watch How Institutions Push Monolithic Power Systems Higher
- 🟢 [Earnings|w1.64] Monolithic Power Systems (MPWR) Surged on Robust Quarterly Results
- 🟢 [Industry|w0.7] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 2.27 | Finnhub | Watch How Institutions Push Monolithic Power Systems Higher |
| 2026-05-15 | Industry | 🟢 +1 | 0.7 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | ⚪  0 | 0.7 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Industry | 🟢 +1 | 0.59 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Amtech, Skyworks Solutions, and Monolithic Power Systems Sto |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-13 | Earnings | 🟢 +1 | 1.64 | Finnhub | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 7.01 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Is Strong Q3 AI Storage Demand And A Higher Dividend Altering The Inve
- 🟢 [Analyst Action|w1.22] Why The Western Digital (WDC) Story Is Shifting On New Earnings And AI
- 🟢 [Industry|w1.02] Why Did Micron Stock Drop Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Analyst Report: Seagate Technology Holdings plc |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Analyst Report: Western Digital Corporation |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | The Spill: Apple (AAPL) Just Crushed It. Now What? |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why The Western Digital (WDC) Story Is Shifting On New Earni |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dear Sandisk Stock Fans, Mark Your Calendars for May 20 |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Did Micron Stock Drop Today? |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Did Sandisk Stock Drop Today? |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | WD Advances Next-Generation Trusted Infrastructure with Indu |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.19 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.16] KLA Stock Split And Dividend Increase Highlight Confidence And Valuati
- 🟢 [Buyback|w1.43] Dan Loeb Dumps Microsoft, Slashes Nvidia And Rail Stocks In Sweeping Q
- 🟢 [Industry|w0.6] Forget Micron. Every Dollar of AI Memory Spending Has to Pass Through 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | ASML Expands Globally, Joins Tata for India Semiconductor Hu |
| 2026-05-18 | Buyback | 🟢 +1 | 1.43 | Finnhub | Dan Loeb Dumps Microsoft, Slashes Nvidia And Rail Stocks In  |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Yahoo Fina | MACOM, Marvell Technology, Applied Materials, KLA Corporatio |
| 2026-05-16 | Buyback | 🟢 +1 | 2.16 | Yahoo Fina | KLA Stock Split And Dividend Increase Highlight Confidence A |
| 2026-05-15 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Forget Micron. Every Dollar of AI Memory Spending Has to Pas |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CIBC Capital Markets CDRs Closes the Market |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is KLA Becoming the Biggest Beneficiary of AI Semiconductor  |

---

## ⚠️ Overheated (7)

### NYSE:IRM

| Metric | Detail |
|--------|--------|
| Normalized Score | **97** / 100 |
| Raw Weighted Score | 11.31 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Record AI-Fueled Data Center Leasing Could Be A Game Changer For Iron 
- 🟢 [Earnings|w2.81] A Look At Iron Mountain (IRM) Valuation After Strong Q1 Growth And Rai
- 🟢 [Earnings|w1.95] Zacks Investment Ideas feature highlights: Iron Mountain, Cisco and nV

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-17 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Record AI-Fueled Data Center Leasing Could Be A Game Changer |
| 2026-05-17 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | A Look At Iron Mountain (IRM) Valuation After Strong Q1 Grow |
| 2026-05-15 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Zacks Investment Ideas feature highlights: Iron Mountain, Ci |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Data Center Trends Lead to Record Results for These 3 Compan |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Blackstone Has a New Data Center REIT. Its BXDC IPO Might Be |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Iron Mountain (IRM) Price Target Increased by 11.79% to 141. |
| 2026-05-13 | Earnings | 🟢 +1 | 1.4 | Yahoo Fina | ​Iron Mountain Incorporated (IRM) Posts Q1 Results, Data Cen |

---

### NASDAQ:RKLB

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 10.92 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 13 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] 5 Must-Read Analyst Questions From Rocket Lab’s Q1 Earnings Call
- 🟢 [M&A|w2.52] Rocket Lab Buys Motiv As Robotics Shift Meets Stretched Valuation Risk
- 🟢 [Industry|w1.02] SpaceX Launch, Prospectus Anticipation Send Space Stocks Higher

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | SpaceX Launch, Prospectus Anticipation Send Space Stocks Hig |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | SpaceX filing boosts space stocks, BofA resumes ServiceNow c |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Why Rocket Lab Stock Popped Then Dropped |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | You’re Going to Regret Not Buying This ETF Before SpaceX’s I |
| 2026-05-18 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Social Buzz: Wallstreetbets Stocks Mostly Higher Premarket M |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Rocket Lab vs. SpaceX: Which Stock is the Better Aerospace B |
| 2026-05-17 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | 5 Must-Read Analyst Questions From Rocket Lab’s Q1 Earnings  |
| 2026-05-16 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | Rocket Lab Buys Motiv As Robotics Shift Meets Stretched Valu |

---

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 10.7 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] PACS Group Q1 Earnings Call Highlights
- 🟢 [Earnings|w1.64] PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike and Buyback
- 🟢 [Analyst Action|w1.43] Truist Securities Maintains Buy on PACS Group, Raises Price Target to 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Truist Raises Price Target on PACS Group to $52 From $50, Ke |
| 2026-05-18 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | PACS Group's (NYSE:PACS) Performance Is Even Better Than Its |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Truist Securities Maintains Buy on PACS Group, Raises Price  |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | UBS Lifts PACS Group Price Target to $50 From $44, Maintains |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | PACS Group Q1 Earnings Call Highlights |
| 2026-05-14 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | PACS Group (PACS) Is Up 22.1% After Q1 Beat, Guidance Hike a |
| 2026-05-13 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Oppenheimer Adjusts Price Target on PACS Group to $48 From $ |
| 2026-05-13 | Earnings | 🟢 +1 | 0.56 | Yahoo Fina | Assessing PACS Group (PACS) Valuation After Q1 Earnings Beat |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 25 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.1] Eaton Refocuses On Electrical And Aerospace As AI Power Bet Grows
- 🟢 [Earnings|w1.64] Why Eaton (ETN) Is Benefiting From AI’s Rising Power Infrastructure Ne
- 🟢 [Analyst Action|w1.51] Argus Adjusts Price Target on Eaton to $475 From $425, Maintains Buy R

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Forget Hyperscalers, These Stocks Are The New AI Plays |
| 2026-05-15 | M&A | 🟢 +1 | 2.1 | Yahoo Fina | Eaton Refocuses On Electrical And Aerospace As AI Power Bet  |
| 2026-05-15 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Powell Rises 52.3% in Three Months: Should You Buy the Stock |
| 2026-05-15 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Is Wall Street Bullish or Bearish on Eaton Stock? |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.6 | Yahoo Fina | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-05-14 | Analyst Action | 🟢 +1 | 1.51 | Yahoo Fina | Argus Adjusts Price Target on Eaton to $475 From $425, Maint |
| 2026-05-14 | Industry | 🟢 +1 | 0.59 | Finnhub | Here's How Much You Would Have Made Owning Eaton Corp Stock  |
| 2026-05-13 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Why Eaton (ETN) Is Expanding Switchgear Capacity for the AI  |

---

### NYSE:PWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 9.79 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 16 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] Quanta Services (PWR) Valuation Check After Raised 2026 Profit Outlook
- 🟢 [Analyst Action|w1.76] Quanta Services (PWR) Price Target Increased by 26.45% to 783.17
- 🟢 [Earnings|w1.64] How Quanta Services (PWR) Is Riding the Utility Buildout Behind AI Inf

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Analyst Report: Quanta Services, Inc. |
| 2026-05-18 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Can Quanta's Acquisition Strategy Keep Compounding Sharehold |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | EMCOR's Data Center Revenues Jump Nearly 50%: Is AI Fueling  |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Comfort Systems vs. Quanta: Which Infrastructure Stock Wins? |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Quanta Services (PWR) is a Top Stock for the Long-Term |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Liberty All-Star® Growth Fund, Inc. April 2026 Monthly Updat |
| 2026-05-15 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Quanta Services (PWR) Valuation Check After Raised 2026 Prof |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | MasTec Lifts 2026 EBITDA to $1.5B: Is Execution Catching Up  |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 9.27 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid Ammonia Ou
- 🟢 [Earnings|w1.64] CF Industries Stock: Is Wall Street Bullish or Bearish?
- 🟢 [Industry|w1.19] CF Industries Holdings Inc (NYSE:CF) Shows Strong Technical Breakout S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🟢 +1 | 1.19 | Finnhub | CF Industries Holdings Inc (NYSE:CF) Shows Strong Technical  |
| 2026-05-16 | Earnings | 🟢 +1 | 2.73 | Finnhub | CF Industries (CF) Is Up 8.9% After Strong Q1 Earnings Amid  |
| 2026-05-16 | Industry | 🟢 +1 | 0.84 | Finnhub | CF Industries Holdings (NYSE:CF) Screens Strong with High Gr |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | CF Industries and Norwegian Cruise Line have been highlighte |
| 2026-05-15 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Bull of the Day: CF Industries (CF) |
| 2026-05-15 | Industry | ⚪  0 | 0.5 | Finnhub | Zacks Investment Ideas feature highlights: CF Industries and |
| 2026-05-14 | Analyst Action | ⚪  0 | 0.7 | Finnhub | Assessing CF Industries (CF) Valuation After Strong Long Ter |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Volatility to Turn Higher as Inflation Resurfaces: Stocks to |

---

### CBOE:CBOE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 9.63 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 20 / 19 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Cboe Global Markets : Begins Offering Daily Expirations for Dow Jones 
- 🟢 [Industry|w2.55] Cboe Begins Offering Daily Expirations for Dow Jones Industrial Averag
- 🟢 [Buyback|w1.76] Cboe Global Markets Declares Second-Quarter 2026 Dividend

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Signal: Outperforming Travel Stock Hasn't Hit Its Top |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | DRAM Surged 51% in One Month While SOXX Climbed 32%, but Onl |
| 2026-05-18 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Cboe Begins Offering Daily Expirations for Dow Jones Industr |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | BTQ Technologies Announces Shareholder Call and Provides Q1  |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Glass House Brands Announces the Filing of Prospectus Supple |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Abaxx to Launch Silver Singapore Futures on May 22, 2026 |
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Transaction in Own Shares |
| 2026-05-18 | Industry | 🟢 +1 | 2.98 | Finnhub | Cboe Global Markets : Begins Offering Daily Expirations for  |

---

## ⚠️ Risk Pattern (3)

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 15 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Watch How Institutions Push Monolithic Power Systems Higher
- 🟢 [Earnings|w1.64] Monolithic Power Systems (MPWR) Surged on Robust Quarterly Results
- 🟢 [Industry|w0.7] Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as Strong Growt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Earnings | 🟢 +1 | 2.27 | Finnhub | Watch How Institutions Push Monolithic Power Systems Higher |
| 2026-05-15 | Industry | 🟢 +1 | 0.7 | Finnhub | Monolithic Power Systems Inc. (NASDAQ:MPWR) Breaks Out as St |
| 2026-05-15 | Industry | ⚪  0 | 0.7 | Finnhub | Monolithic Power Systems Weighs EV And AI Growth Against Ric |
| 2026-05-14 | Industry | 🟢 +1 | 0.59 | Finnhub | Can Monolithic Power's Improved Automotive Solutions Drive G |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Finnhub | Amtech, Skyworks Solutions, and Monolithic Power Systems Sto |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Intel vs. Monolithic: Which Semiconductor Stock is the Bette |
| 2026-05-13 | Earnings | 🟢 +1 | 1.64 | Finnhub | Monolithic Power Systems (MPWR) Surged on Robust Quarterly R |
| 2026-05-13 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Reasons Investors Love Monolithic Power Systems (MPWR) |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 7.01 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Is Strong Q3 AI Storage Demand And A Higher Dividend Altering The Inve
- 🟢 [Analyst Action|w1.22] Why The Western Digital (WDC) Story Is Shifting On New Earnings And AI
- 🟢 [Industry|w1.02] Why Did Micron Stock Drop Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Analyst Report: Seagate Technology Holdings plc |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Analyst Report: Western Digital Corporation |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | The Spill: Apple (AAPL) Just Crushed It. Now What? |
| 2026-05-18 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why The Western Digital (WDC) Story Is Shifting On New Earni |
| 2026-05-18 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Dear Sandisk Stock Fans, Mark Your Calendars for May 20 |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Did Micron Stock Drop Today? |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Did Sandisk Stock Drop Today? |
| 2026-05-18 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | WD Advances Next-Generation Trusted Infrastructure with Indu |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.19 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.16] KLA Stock Split And Dividend Increase Highlight Confidence And Valuati
- 🟢 [Buyback|w1.43] Dan Loeb Dumps Microsoft, Slashes Nvidia And Rail Stocks In Sweeping Q
- 🟢 [Industry|w0.6] Forget Micron. Every Dollar of AI Memory Spending Has to Pass Through 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | ⚪  0 | 0.51 | Yahoo Fina | ASML Expands Globally, Joins Tata for India Semiconductor Hu |
| 2026-05-18 | Buyback | 🟢 +1 | 1.43 | Finnhub | Dan Loeb Dumps Microsoft, Slashes Nvidia And Rail Stocks In  |
| 2026-05-16 | Industry | ⚪  0 | 0.5 | Yahoo Fina | MACOM, Marvell Technology, Applied Materials, KLA Corporatio |
| 2026-05-16 | Buyback | 🟢 +1 | 2.16 | Yahoo Fina | KLA Stock Split And Dividend Increase Highlight Confidence A |
| 2026-05-15 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Forget Micron. Every Dollar of AI Memory Spending Has to Pas |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | KLA Corporation: Quietly Dominating The 2nm Hyperscaler Race |
| 2026-05-14 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CIBC Capital Markets CDRs Closes the Market |
| 2026-05-14 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is KLA Becoming the Biggest Beneficiary of AI Semiconductor  |

---

## 🔴 Avoid / Short (3)

### NYSE:JHG

| Metric | Detail |
|--------|--------|
| Normalized Score | **41** / 100 |
| Raw Weighted Score | -2.25 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 1 / 14 |

**📉 Bearish Factors:**
- 🔴 [Black Swan|w2.25] Janus Henderson Group Insider Sold Shares Worth $320,612,990, Accordin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-15 | Black Swan | 🔴 -1 | 2.25 | Yahoo Fina | Janus Henderson Group Insider Sold Shares Worth $320,612,990 |

---

### NASDAQ:BGC

| Metric | Detail |
|--------|--------|
| Normalized Score | **39** / 100 |
| Raw Weighted Score | -2.72 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 4 / 16 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.6] What Makes BGC Group (BGC) a New Buy Stock

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] 5 Insightful Analyst Questions From BGC’s Q1 Earnings Call

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | 5 Insightful Analyst Questions From BGC’s Q1 Earnings Call |
| 2026-05-15 | Earnings | ⚪  0 | 0.78 | Yahoo Fina | How Strong Q1 Results And Energy Momentum At BGC Group (BGC) |
| 2026-05-15 | Industry | ⚪  0 | 1.75 | Finnhub | BGC Group enters third amended and restated credit agreement |
| 2026-05-14 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | What Makes BGC Group (BGC) a New Buy Stock |

---

### NYSE:NOK

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.34 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 20 |

**📈 Bullish Factors:**
- 🟢 [Black Swan|w2.21] Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win
- 🟢 [Earnings|w1.64] What's Going On With Nokia Shares On Wednesday?
- 🟢 [Industry|w0.5] 10 Information Technology Stocks Whale Activity In Today's Session

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Nokia Shares Edge Higher Following Patent Victory, Management Revamp
- 🔴 [Black Swan|w2.63] What's Going On With Nokia Stock On Friday?
- 🔴 [Industry|w0.6] 10 Information Technology Stocks With Whale Alerts In Today's Session

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-05-18 | Industry | 🔴 -1 | 0.6 | Finnhub | 10 Information Technology Stocks With Whale Alerts In Today' |
| 2026-05-18 | Black Swan | 🔴 -1 | 4.46 | Finnhub | Nokia Shares Edge Higher Following Patent Victory, Managemen |
| 2026-05-17 | Industry | ⚪  0 | 0.5 | Finnhub | Consumer Tech News (May 11-15): Trump–Xi Talk Fails to Deliv |
| 2026-05-15 | Industry | 🟢 +1 | 0.5 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |
| 2026-05-15 | Black Swan | 🔴 -1 | 2.63 | Finnhub | What's Going On With Nokia Stock On Friday? |
| 2026-05-14 | Black Swan | 🟢 +1 | 2.21 | Finnhub | Nokia Blocks Acer, Asus Patent Lawsuits In Huge UK Legal Win |
| 2026-05-13 | Industry | ⚪  0 | 0.5 | Finnhub | Cisco, Nokia, Ford, Quantum Cyber And Nebius Group: Why Thes |
| 2026-05-13 | Earnings | 🟢 +1 | 1.64 | Finnhub | What's Going On With Nokia Shares On Wednesday? |

---

## ⚪ Watch / Neutral (28)

### NYSE:SMP
- Score: 58/100 | raw: 1.9 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:POWL
- Score: 58/100 | raw: 1.97 | News: 5 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:P
- Score: 57/100 | raw: 1.76 | News: 7 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 57/100 | raw: 1.73 | News: 6 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 56/100 | raw: 1.52 | News: 2 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 56/100 | raw: 1.46 | News: 12 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRDO
- Score: 56/100 | raw: 1.37 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 56/100 | raw: 1.47 | News: 10 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 54/100 | raw: 1.03 | News: 15 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VSAT
- Score: 53/100 | raw: 0.76 | News: 9 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 53/100 | raw: 0.6 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADI
- Score: 52/100 | raw: 0.6 | News: 14 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 52/100 | raw: 0.52 | News: 3 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:MTSI
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 1 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LITE
- Score: 50/100 | raw: 0.08 | News: 16 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 2 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 49/100 | raw: -0.4 | News: 17 kept / 1 dropped | No clear directional bias — stay flat

### NYSE:RIO
- Score: 48/100 | raw: -0.5 | News: 9 kept / 11 dropped | No clear directional bias — stay flat

### NASDAQ:GEN
- Score: 47/100 | raw: -0.7 | News: 3 kept / 22 dropped | No clear directional bias — stay flat

### NASDAQ:RMBS
- Score: 43/100 | raw: -1.69 | News: 5 kept / 21 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-05-19T03:16:25.727Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*