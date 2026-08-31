# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-25  |  **News Window:** 2026-06-18 ~ 2026-06-25
**Stock Pool:** us_selected.txt (84)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DELL** | **93** | 10.6 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | - |
| 2 | **NASDAQ:AMD** | **90** | 10.9 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:GE** | **89** | 13.41 | 🟢 Long (Strong) | Momentum / Hold | High | 12/0 | - |
| 4 | **NASDAQ:AMKR** | **78** | 6.68 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | - |
| 5 | **NYSE:JBL** | **75** | 6.02 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 6 | **NASDAQ:KLAC** | **74** | 5.83 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 4/0 | Likely Pre-Priced (no hard catalyst) |
| 7 | **NASDAQ:CSCO** | **72** | 5.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 8 | **NYSE:GLW** | **72** | 5.17 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:LLY** | **70** | 4.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:APH** | **69** | 4.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 11 | **NASDAQ:INTC** | **69** | 6.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/0 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:FLEX** | **68** | 4.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 13 | **NASDAQ:AMAT** | **66** | 3.84 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 14 | **NASDAQ:VRTX** | **66** | 3.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 15 | **NASDAQ:MU** | **64** | 3.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 16 | **NASDAQ:MNST** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 17 | **NYSE:GNRC** | **62** | 2.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 18 | **NASDAQ:MRVL** | **60** | 2.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 19 | **NYSE:MTZ** | **59** | 2.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 20 | **NASDAQ:NBIX** | **58** | 1.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 21 | **NASDAQ:LRCX** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 22 | **NYSE:GEV** | **57** | 1.67 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 23 | **NASDAQ:ALAB** | **56** | 1.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 24 | **NYSE:KEYS** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NASDAQ:NBIS** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 26 | **NYSE:HPE** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 27 | **NASDAQ:CPRX** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NYSE:TT** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 29 | **NASDAQ:CRWD** | **53** | 0.83 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 30 | **NASDAQ:MTSI** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 31 | **NASDAQ:VICR** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NASDAQ:CRDO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:PANW** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 34 | **NYSE:FAF** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 35 | **NASDAQ:INCY** | **52** | 0.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NYSE:DY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 37 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:DKS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:WDC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 43 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:DOV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:CINF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 72 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 77 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 78 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 79 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 80 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 81 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 82 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 83 | **NYSE:SN** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 84 | **NASDAQ:STX** | **46** | -0.98 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |

---

## 🟢 Strong Long (4)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 10.6 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why a $700 Dell Stock Price Isn’t as Crazy as It Sounds
- 🟢 [Industry|w2.98] Dell (DELL) Launches PowerEdge XE8812 To Push Deeper Into Rack Scale A
- 🟢 [Analyst Action|w2.16] Morgan Stanley upgrades CDW on server demand; targets set higher for I

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Tim Cook issues chilling warning as ‘hundred-year-flood’ strikes US te

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | ⚪  0 | 0.7 | Finnhub | Missed Out On Dell Technologies' Red-Hot Rally? Here's Anoth |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Which AI Server Stock Has Dominated in 2026: Super Micro, De |
| 2026-06-24 | Industry | 🟢 +1 | 1.19 | Finnhub | Dell Benefits From Expanding AI Portfolio: Is the Stock a Mu |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | How Is Dell Technologies’ Stock Performance Compared to Othe |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why a $700 Dell Stock Price Isn’t as Crazy as It Sounds |
| 2026-06-24 | Industry | 🟢 +1 | 2.98 | Finnhub | Dell (DELL) Launches PowerEdge XE8812 To Push Deeper Into Ra |
| 2026-06-23 | Industry | 🔴 -1 | 0.5 | Finnhub | Tim Cook issues chilling warning as ‘hundred-year-flood’ str |
| 2026-06-23 | Analyst Action | 🟢 +1 | 2.16 | Seeking Al | Morgan Stanley upgrades CDW on server demand; targets set hi |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 13.41 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] Can GE Continue Its Strong Capital Returns to Shareholders?
- 🟢 [Analyst Action|w3.02] GE HealthCare Technologies Set for Further Growth on Strong Backlog, E
- 🟢 [Analyst Action|w3.02] RBC initiates GE HealthCare as it sees AI-led innovation cycle driving

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] GE Vernova (GEV) Falls More Steeply Than Broader Market: What Investor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Earnings | 🟢 +1 | 0.77 | Finnhub | GE Aerospace (GE) Advances While Market Declines: Some Infor |
| 2026-06-24 | Industry | 🟢 +1 | 2.98 | Finnhub | AI Data Centers Are Driving a Power Supercycle. GE Vernova’s |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Here is What to Know Beyond Why GE Aerospace (GE) is a Trend |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | AST SpaceMobile vs. GE Aerospace: Which Stock Is a Better Bu |
| 2026-06-23 | Industry | 🔴 -1 | 0.5 | Finnhub | GE Vernova (GEV) Falls More Steeply Than Broader Market: Wha |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | General Electric (GE) Stock After 333% Three-Year Surge Is I |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones AI Giant Nvidia Tumbles Below Key Level; Cummins,  |
| 2026-06-23 | Buyback | 🟢 +1 | 3.02 | Finnhub | Can GE Continue Its Strong Capital Returns to Shareholders? |

---

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.06] Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock Here.
- 🟢 [M&A|w1.76] Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value After TSMC
- 🟢 [M&A|w1.76] Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Year TSMC Ar

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Amkor Technology (AMKR) Falls More Steeply Than Broader Market: What I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | 3 Reasons to Hold AMKR Stock in 2H26 Beyond Its 119.7% YTD G |
| 2026-06-23 | Industry | 🔴 -1 | 0.5 | Finnhub | Amkor Technology (AMKR) Falls More Steeply Than Broader Mark |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Q1 Earnings Highs And Lows: Amkor (NASDAQ:AMKR) Vs The Rest  |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology, Inc. (AMKR) Is a Trending Stock: Facts to  |
| 2026-06-20 | M&A | 🟢 +1 | 2.06 | Finnhub | Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock H |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology (NASDAQ:AMKR) Meets Minervini Trend Templat |
| 2026-06-19 | M&A | 🟢 +1 | 1.76 | Finnhub | Amkor Technology (AMKR) Stock Could Be 26% Below Fair Value  |
| 2026-06-19 | M&A | 🟢 +1 | 1.76 | Finnhub | Why Amkor Technology (AMKR) Is Up 18.8% After Securing 10-Ye |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.02 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Jabil Shares Jumped on Earnings as AI Demand Boosts Its Business. JBL 
- 🟢 [Analyst Action|w2.52] Baird Raises its Price Target on Jabil (JBL)
- 🟢 [Earnings|w0.77] Jabil Inc (NYSE:JBL) Balances Strong Earnings Growth with Reasonable V

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Earnings | 🟢 +1 | 0.77 | Finnhub | Jabil Inc (NYSE:JBL) Balances Strong Earnings Growth with Re |
| 2026-06-22 | Earnings | 🟢 +1 | 2.73 | Finnhub | Jabil Shares Jumped on Earnings as AI Demand Boosts Its Busi |
| 2026-06-22 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Baird Raises its Price Target on Jabil (JBL) |
| 2026-06-19 | Industry | ⚪  0 | 0.5 | Finnhub | Jabil (JBL) Stock After 7x Five-Year Return Is There Still V |

---

## 🟢 Mid Long (12)

### NASDAQ:CSCO

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why Cisco’s (CSCO) Acacia Orders Give It a Clearer Role in the 800G AI
- 🟢 [Industry|w1.01] How Cisco’s Secure AI Factory and Quantum Networking Bets Could Reshap
- 🟢 [Analyst Action|w0.71] Cisco (CSCO) Is Considered a Good Investment by Brokers: Is That True?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Cisco Systems (CSCO) Dips More Than Broader Market: What You Should Kn

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🔴 -1 | 0.6 | Finnhub | Cisco Systems (CSCO) Dips More Than Broader Market: What You |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Cisco’s (CSCO) Acacia Orders Give It a Clearer Role in t |
| 2026-06-24 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Cisco (CSCO) Is Considered a Good Investment by Brokers: Is  |
| 2026-06-23 | Industry | 🟢 +1 | 1.01 | Finnhub | How Cisco’s Secure AI Factory and Quantum Networking Bets Co |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Cisco Systems, Inc. (CSCO) Is a Trending Stock: Facts to Kno |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | Cisco Systems Inc (NASDAQ:CSCO) Technical Breakout Setup Sho |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.17 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] How Corning’s (GLW) Amazon Agreement Turns AI Data-Center Fiber Demand
- 🟢 [Analyst Action|w1.01] Here is why Corning Incorporated (GLW) is among the Most Overvalued Qu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | M&A | 🟢 +1 | 4.16 | Finnhub | How Corning’s (GLW) Amazon Agreement Turns AI Data-Center Fi |
| 2026-06-22 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Here is why Corning Incorporated (GLW) is among the Most Ove |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Is Eli Lilly and Company (LLY) Strengthening Its Pain Management Strat
- 🟢 [Industry|w0.6] LLY or PFE: Which Drugmaker Offers the Stronger Growth Story?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | M&A | 🟢 +1 | 4.16 | Finnhub | Is Eli Lilly and Company (LLY) Strengthening Its Pain Manage |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | LLY or PFE: Which Drugmaker Offers the Stronger Growth Story |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen With Stron
- 🟢 [Industry|w0.84] Amphenol (APH) Is Becoming A Key Supplier For The AI Data Center Build
- 🟢 [Analyst Action|w0.6] Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supplier for A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | 🟢 +1 | 0.84 | Finnhub | Amphenol (APH) Is Becoming A Key Supplier For The AI Data Ce |
| 2026-06-22 | Earnings | 🟢 +1 | 2.73 | Finnhub | Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen  |
| 2026-06-19 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Why Amphenol (APH) Is Becoming a Core Picks-and-Shovels Supp |
| 2026-06-19 | Industry | 🟢 +1 | 0.5 | Finnhub | NVT vs. APH: Which Electrical Infrastructure Stock is a Bett |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 6.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Analysis-Apple-Intel chip deal makes strategic sense but production is
- 🟢 [Rumor|w1.78] Pelosi discloses bullish options bets on Intel and Uber
- 🟢 [Rumor|w1.27] Nancy Pelosi discloses new stakes in Intel, Uber

**📉 Bearish Factors:**
- 🔴 [Industry|w2.98] The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but One Tech N
- 🔴 [Analyst Action|w0.86] The Nvidia Vs. Intel Pair Trade
- 🔴 [Analyst Action|w0.72] Intel: Levitating On AI Hype

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Intel Is Up 570% in the Past Year. Time to Buy the Comeback  |
| 2026-06-24 | Rumor | 🟢 +1 | 1.78 | Finnhub | Pelosi discloses bullish options bets on Intel and Uber |
| 2026-06-24 | Industry | 🟢 +1 | 1.19 | Finnhub | Intel Gains From Rising Sovereign AI Demand: More Growth Ahe |
| 2026-06-24 | Industry | 🔴 -1 | 2.98 | Finnhub | The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but  |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Intel’s stock split history (& prospects) explained |
| 2026-06-24 | M&A | 🟢 +1 | 4.16 | Finnhub | Analysis-Apple-Intel chip deal makes strategic sense but pro |
| 2026-06-24 | Rumor | 🟢 +1 | 1.27 | Seeking Al | Nancy Pelosi discloses new stakes in Intel, Uber |
| 2026-06-23 | Analyst Action | 🔴 -1 | 0.86 | Seeking Al | The Nvidia Vs. Intel Pair Trade |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.52] Flex Ltd. (FLEX) to Join S&P 500 Index on June 22
- 🟢 [M&A|w1.76] Strength Seen in Flex (FLEX): Can Its 3.1% Jump Turn into More Strengt

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Stocks making the biggest moves midday: Micron Technology, S |
| 2026-06-22 | Buyback | 🟢 +1 | 2.52 | Finnhub | Flex Ltd. (FLEX) to Join S&P 500 Index on June 22 |
| 2026-06-19 | M&A | 🟢 +1 | 1.76 | Finnhub | Strength Seen in Flex (FLEX): Can Its 3.1% Jump Turn into Mo |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.84 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Applied Materials (AMAT) Unveils Two New Chipmaking Systems For Next G
- 🟢 [Analyst Action|w1.43] Is Applied Materials (AMAT) the Best All-Time High Stock with Legs to 
- 🟢 [Industry|w0.6] KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy Now?

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.31] Applied Materials (AMAT) Registers a Bigger Fall Than the Market: Impo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Is Applied Materials (AMAT) the Best All-Time High Stock wit |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy  |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Applied Materials (AMAT) Outperforming Other Computer and |
| 2026-06-23 | Earnings | 🔴 -1 | 1.31 | Finnhub | Applied Materials (AMAT) Registers a Bigger Fall Than the Ma |
| 2026-06-23 | Industry | 🟢 +1 | 2.52 | Finnhub | Applied Materials (AMAT) Unveils Two New Chipmaking Systems  |

---

### NASDAQ:VRTX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Positive Pediatric CASGEVY Data Might Change The Case For Investing In
- 🟢 [Industry|w0.6] Why the Market Dipped But Vertex Pharmaceuticals (VRTX) Gained Today
- 🟢 [Industry|w0.5] Vertex Pharmaceuticals (NASDAQ:VRTX): A GARP Growth Stock with Reasona

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] 2 Reasons to Like VRTX (and 1 Not So Much)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | Why the Market Dipped But Vertex Pharmaceuticals (VRTX) Gain |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Vertex Pharmaceuticals (VRTX) Stock After Strong Multi‑Year  |
| 2026-06-23 | Earnings | 🟢 +1 | 3.28 | Finnhub | Positive Pediatric CASGEVY Data Might Change The Case For In |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | Vertex Pharmaceuticals (NASDAQ:VRTX): A GARP Growth Stock wi |
| 2026-06-22 | Industry | 🔴 -1 | 0.5 | Finnhub | 2 Reasons to Like VRTX (and 1 Not So Much) |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.25] Micron Technology, Inc. (MU) Q3 2026 Earnings Call Transcript

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Earnings | 🟢 +1 | 3.25 | Seeking Al | Micron Technology, Inc. (MU) Q3 2026 Earnings Call Transcrip |
| 2026-06-24 | Industry | ⚪  0 | 0.6 | Finnhub | S&P 500, Nasdaq Close Lower On Tech Weakness But Recover Aft |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S. Prices
- 🟢 [Industry|w0.5] 3 Reasons MNST Has Explosive Upside Potential

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Monster Beverage (MNST) Stock After 47% Yearly Gain Is The P |
| 2026-06-23 | Industry | 🟢 +1 | 2.52 | Finnhub | Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S.  |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Reasons MNST Has Explosive Upside Potential |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Generac Holdings (GNRC) Announces Acquisition of New Facility in Illin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | M&A | 🟢 +1 | 2.94 | Finnhub | Generac Holdings (GNRC) Announces Acquisition of New Facilit |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] How Marvell Technology’s (MRVL) AI Optics Commentary Sharpens Its Data

**📉 Bearish Factors:**
- 🔴 [Industry|w1.4] Why Marvell Technology (MRVL) Shares Are Trading Lower Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🔴 -1 | 1.4 | Finnhub | Why Marvell Technology (MRVL) Shares Are Trading Lower Today |
| 2026-06-24 | Earnings | 🟢 +1 | 3.87 | Finnhub | How Marvell Technology’s (MRVL) AI Optics Commentary Sharpen |

---

## 🟡 Cautious Long (2)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 10.9 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] AMD Gets a Big Agentic AI Boost
- 🟢 [Analyst Action|w3.57] AMD and Arm Emerge as Key Winners in the Next AI Wave
- 🟢 [Analyst Action|w2.55] AMD, Arm set to take advantage of CPU rack demand in wake of agentic A

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but One Tech N
- 🔴 [Industry|w0.5] AMD's 324% Rally Hides A Serious Risk Nobody's Talking About

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | 5-star analyst sets jaw-dropping AMD stock price target |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | AI Chip Stocks Stage Rebound: Nvidia, AMD Lead Recovery Ahea |
| 2026-06-24 | Industry | ⚪  0 | 0.6 | Finnhub | Advanced Micro Devices (AMD) Stock After 133% YTD Surge Is T |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD Gets a Big Agentic AI Boost |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD and Arm Emerge as Key Winners in the Next AI Wave |
| 2026-06-24 | Industry | 🔴 -1 | 0.6 | Finnhub | The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but  |
| 2026-06-24 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | AMD, Arm set to take advantage of CPU rack demand in wake of |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Seeking Al | Why AMD's AI Position Is Expanding |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.83 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] How Investors Are Reacting To KLA (KLAC) Ten-for-One Split And AI-Focu
- 🟢 [Analyst Action|w3.57] Wells Fargo Raises its Price Target on KLA Corporation (KLAC)

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.31] Why KLA (KLAC) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Buyback | 🟢 +1 | 3.57 | Finnhub | How Investors Are Reacting To KLA (KLAC) Ten-for-One Split A |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wells Fargo Raises its Price Target on KLA Corporation (KLAC |
| 2026-06-24 | Industry | ⚪  0 | 0.6 | Finnhub | KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy  |
| 2026-06-23 | Earnings | 🔴 -1 | 1.31 | Finnhub | Why KLA (KLAC) Dipped More Than Broader Market Today |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 10.9 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] AMD Gets a Big Agentic AI Boost
- 🟢 [Analyst Action|w3.57] AMD and Arm Emerge as Key Winners in the Next AI Wave
- 🟢 [Analyst Action|w2.55] AMD, Arm set to take advantage of CPU rack demand in wake of agentic A

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but One Tech N
- 🔴 [Industry|w0.5] AMD's 324% Rally Hides A Serious Risk Nobody's Talking About

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | 5-star analyst sets jaw-dropping AMD stock price target |
| 2026-06-24 | Industry | 🟢 +1 | 0.6 | Finnhub | AI Chip Stocks Stage Rebound: Nvidia, AMD Lead Recovery Ahea |
| 2026-06-24 | Industry | ⚪  0 | 0.6 | Finnhub | Advanced Micro Devices (AMD) Stock After 133% YTD Surge Is T |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD Gets a Big Agentic AI Boost |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD and Arm Emerge as Key Winners in the Next AI Wave |
| 2026-06-24 | Industry | 🔴 -1 | 0.6 | Finnhub | The NASDAQ Dropped 3% as Micron, Intel, and AMD Tumble, but  |
| 2026-06-24 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | AMD, Arm set to take advantage of CPU rack demand in wake of |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Seeking Al | Why AMD's AI Position Is Expanding |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.83 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] How Investors Are Reacting To KLA (KLAC) Ten-for-One Split And AI-Focu
- 🟢 [Analyst Action|w3.57] Wells Fargo Raises its Price Target on KLA Corporation (KLAC)

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.31] Why KLA (KLAC) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Buyback | 🟢 +1 | 3.57 | Finnhub | How Investors Are Reacting To KLA (KLAC) Ten-for-One Split A |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wells Fargo Raises its Price Target on KLA Corporation (KLAC |
| 2026-06-24 | Industry | ⚪  0 | 0.6 | Finnhub | KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy  |
| 2026-06-23 | Earnings | 🔴 -1 | 1.31 | Finnhub | Why KLA (KLAC) Dipped More Than Broader Market Today |

---

## ⚪ Watch / Neutral (66)

### NYSE:MTZ
- Score: 59/100 | raw: 2.14 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIX
- Score: 58/100 | raw: 1.92 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LRCX
- Score: 57/100 | raw: 1.63 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GEV
- Score: 57/100 | raw: 1.67 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 56/100 | raw: 1.54 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 56/100 | raw: 1.51 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 54/100 | raw: 1 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 53/100 | raw: 0.7 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 53/100 | raw: 0.83 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 53/100 | raw: 0.6 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 52/100 | raw: 0.5 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 52/100 | raw: 0.55 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DKS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WDC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:C
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DOV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:EQIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CINF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WWD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RELY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DLR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CARR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:STX
- Score: 46/100 | raw: -0.98 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-25T03:20:12.904Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*