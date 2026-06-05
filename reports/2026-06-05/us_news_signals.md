# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-05  |  **News Window:** 2026-05-29 ~ 2026-06-05
**Stock Pool:** us_selected.txt (79)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:CRWD** | **93** | 15.9 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/20 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GNRC** | **85** | 8.3 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/22 | Overheated Sentiment (one-sided bullish) |
| 3 | **NASDAQ:LRCX** | **83** | 7.96 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/12 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:COHR** | **79** | 6.89 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/24 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:AIR** | **79** | 6.91 | 🟢 Long (Strong) | Momentum / Hold | High | 6/13 | - |
| 6 | **NYSE:JCI** | **78** | 10.21 | 🟢 Long (Strong) | Momentum / Hold | High | 12/5 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:PANW** | **74** | 5.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/24 | - |
| 8 | **NASDAQ:TTMI** | **68** | 4.2 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/27 | Overheated Sentiment (one-sided bullish) |
| 9 | **NYSE:FCX** | **65** | 3.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/24 | - |
| 10 | **NASDAQ:LITE** | **64** | 3.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/32 | - |
| 11 | **NASDAQ:PLXS** | **62** | 2.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/12 | - |
| 12 | **NYSE:CARR** | **62** | 2.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/28 | - |
| 13 | **NASDAQ:NBIS** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/12 | - |
| 14 | **NYSE:DY** | **59** | 2.06 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/7 | - |
| 15 | **NASDAQ:MNST** | **59** | 2.27 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/28 | - |
| 16 | **NASDAQ:IREN** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/10 | - |
| 17 | **NASDAQ:ONDS** | **57** | 1.62 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/8 | Sentiment Divergence (black swan masked by noise) |
| 18 | **NASDAQ:AAPL** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 19 | **NASDAQ:EQIX** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/16 | - |
| 20 | **NASDAQ:AEHR** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 21 | **NYSE:IONQ** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 22 | **NYSE:NOK** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/7 | - |
| 23 | **NYSE:FN** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/16 | - |
| 24 | **NYSE:SXI** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/20 | - |
| 25 | **NASDAQ:SEDG** | **51** | 0.18 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/18 | - |
| 26 | **NYSE:JBL** | **51** | 0.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/21 | - |
| 27 | **NASDAQ:MU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 28 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/12 | - |
| 30 | **NASDAQ:AMAT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:KLAC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/4 | - |
| 36 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 37 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/6 | - |
| 40 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 41 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 42 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:MRVL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:DKS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:NVT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NASDAQ:FLEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:ERIC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NYSE:ENS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 53 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/9 | - |
| 54 | **NYSE:QBTS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/9 | - |
| 55 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/3 | - |
| 56 | **NYSE:DOCN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/17 | - |
| 57 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NASDAQ:ADI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/6 | - |
| 60 | **NASDAQ:MTSI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/7 | - |
| 61 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/12 | - |
| 62 | **NYSE:GLW** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 63 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 64 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/8 | - |
| 65 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/16 | - |
| 66 | **NASDAQ:NBIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:INCY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/12 | - |
| 68 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NYSE:LLY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/4 | - |
| 73 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 74 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/18 | - |
| 75 | **NASDAQ:ASML** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 4/2 | - |
| 76 | **NASDAQ:WDC** | **48** | -0.49 | ⚪ No Trade (Neutral) | Watch | Low | 3/7 | - |
| 77 | **NYSE:CLS** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/9 | - |
| 78 | **NASDAQ:MPWR** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 5/24 | - |
| 79 | **NASDAQ:VIAV** | **45** | -1.26 | ⚪ No Trade (Neutral) | Watch | Low | 2/10 | - |

---

## 🟢 Strong Long (2)

### NYSE:AIR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.91 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 13 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] AAR (AIR) Upgraded to Buy: Here's What You Should Know
- 🟢 [Industry|w2.55] What AAR (AIR)'s Expanded A320 Slat Repair Partnership Means For Share
- 🟢 [Industry|w1.26] AAR Corp (AIR) To Offer Additional A320 Slat Repair To its Component M

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Reasons AIR Has Explosive Upside Potential |
| 2026-06-04 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | What AAR (AIR)'s Expanded A320 Slat Repair Partnership Means |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | A Look At AAR (AIR) Valuation After New A320 Slat Repair Off |
| 2026-06-03 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | AAR (AIR) Upgraded to Buy: Here's What You Should Know |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Seeking Al | AAR Corp. (AIR) Presents at 46th Annual William Blair Growth |
| 2026-05-31 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | AAR Corp (AIR) To Offer Additional A320 Slat Repair To its C |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 10.21 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 5 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Johnson Controls International plc (JCI): 7 Best Electrical Contractin
- 🟢 [Analyst Action|w2.52] Why Is Johnson Controls (JCI) Stock Rocketing Higher Today
- 🟢 [Analyst Action|w2.52] UBS Maintains Buy on Johnson Controls Intl, Raises Price Target to $18

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | 2 Reasons to Like JCI and 1 to Stay Skeptical |
| 2026-06-04 | M&A | 🟢 +1 | 4.16 | Finnhub | Johnson Controls International plc (JCI): 7 Best Electrical  |
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | Is It Too Late To Consider Johnson Controls International (J |
| 2026-06-03 | Industry | ⚪  0 | 1.01 | Finnhub | Johnson Controls appoints Irene Esteves to board of director |
| 2026-06-03 | Buyback | ⚪  0 | 3.02 | Finnhub | Johnson Controls Announces Quarterly Dividend |
| 2026-06-02 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Is Johnson Controls (JCI) Stock Rocketing Higher Today |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Johnson Controls Seeing Stronger Long-Term Amid Turnaround,  |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Sensormatic Solutions Expands Options for Sewn-in RFID Sourc |

---

## 🟢 Mid Long (6)

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Palo Alto Networks (PANW) Is Up 12.9% After AI-Fueled Revenue Jump But
- 🟢 [Analyst Action|w3.02] PANW Price Targets Raised By Citi, Goldman Sachs On AI-Driven Security

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] CrowdStrike Sinks 9% as Earnings Beat Falls Short of Lofty Expectation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Earnings | 🟢 +1 | 3.87 | Finnhub | Palo Alto Networks (PANW) Is Up 12.9% After AI-Fueled Revenu |
| 2026-06-04 | Industry | 🔴 -1 | 1.19 | Finnhub | CrowdStrike Sinks 9% as Earnings Beat Falls Short of Lofty E |
| 2026-06-04 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Palo Alto Networks: Strong AI Security Story, But The Stock  |
| 2026-06-03 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | PANW Price Targets Raised By Citi, Goldman Sachs On AI-Drive |
| 2026-06-03 | Earnings | ⚪  0 | 0.5 | Seeking Al | Palo Alto Networks, Inc. (PANW) Q3 2026 Earnings Call Transc |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Freeport-McMoRan (FCX) Earns Another Higher Target As Copper Optimism 
- 🟢 [Industry|w0.84] Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Center Boom
- 🟢 [Industry|w0.72] Rare Earth Stocks, Copper Plays Surging; FCX, MP Near Buy Points

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Freeport-McMoRan (FCX) Earns Another Higher Target As Copper |
| 2026-06-04 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can FCX Protect Margins Amid Higher Copper Production Costs  |
| 2026-06-03 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Is It Too Late To Consider Freeport-McMoRan (FCX) After Its  |
| 2026-06-02 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Rare Earth Stocks, Copper Plays Surging; FCX, MP Near Buy Po |
| 2026-06-02 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Here's Why Freeport-McMoRan (FCX) is a Strong Growth Stock |
| 2026-06-02 | Industry | 🟢 +1 | 0.84 | Finnhub | Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Ce |
| 2026-06-01 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Freeport-McMoRan (FCX) Rises Higher Than Market: Key Facts |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 32 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Is It Too Late To Consider Lumentum Holdings (LITE) After The US$2b Nv
- 🟢 [Industry|w1.01] Nvidia Optics Shift Puts Lumentum At Center Of AI Data Centers

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.33] Why Is Lumentum (LITE) Down 0.7% Since Last Earnings Report?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Buyback | ⚪  0 | 3.06 | Yahoo Fina | Lumentum Holdings (LITE) Announces $650.4 Million Private Sh |
| 2026-06-04 | Earnings | 🔴 -1 | 1.33 | Yahoo Fina | Why Is Lumentum (LITE) Down 0.7% Since Last Earnings Report? |
| 2026-06-04 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Is It Too Late To Consider Lumentum Holdings (LITE) After Th |
| 2026-06-04 | Industry | ⚪  0 | 0.85 | Seeking Al | Lumentum Holdings Inc. (LITE) Presents at Bank of America 20 |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Lumentum Holdings’ (LITE) Upswing Dampens Wasatch Long/Short |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | What's Happening With Coherent Stock? |
| 2026-06-03 | Industry | ⚪  0 | 1.01 | Finnhub | Lumentum Holdings Inc. (LITE) Presents at Bank of America 20 |
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | Nvidia Optics Shift Puts Lumentum At Center Of AI Data Cente |

---

### NASDAQ:PLXS

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 12 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Needham Maintains Buy on Plexus, Raises Price Target to $310
- 🟢 [Industry|w0.7] Plexus Issues Fiscal 2025 Sustainability Report and Announces Transiti

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | Assessing Plexus (PLXS) Valuation After A Strong Multi‑Month |
| 2026-06-01 | Industry | 🟢 +1 | 0.7 | Finnhub | Plexus Issues Fiscal 2025 Sustainability Report and Announce |
| 2026-06-01 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Needham Maintains Buy on Plexus, Raises Price Target to $310 |

---

### NYSE:CARR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 28 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.43] Carrier Board of Directors Declares Quarterly Cash Dividend
- 🟢 [Industry|w1.4] Carrier Digital Leadership Award Adds Weight To Smarter Building Thesi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-05 | Industry | 🟢 +1 | 1.4 | Finnhub | Carrier Digital Leadership Award Adds Weight To Smarter Buil |
| 2026-06-04 | Buyback | 🟢 +1 | 1.43 | Finnhub | Carrier Board of Directors Declares Quarterly Cash Dividend |
| 2026-06-01 | Earnings | ⚪  0 | 0.5 | Yahoo Fina | Q1 Earnings Highlights: Carrier Global (NYSE:CARR) Vs The Re |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 12 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Nebius And The Next Phase Of AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Seeking Al | Nebius Group N.V. (NBIS) Presents at Bank of America 2026 Gl |
| 2026-06-03 | Earnings | 🟢 +1 | 2.34 | Seeking Al | Nebius And The Next Phase Of AI |

---

## 🟡 Cautious Long (1)

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] TTM Technologies, Inc. Announces New $1.0 Billion Cash Flow Revolver a
- 🟢 [Industry|w1.01] TTM Technologies: AI Data Centers, Defense Electronics And Space Tailw
- 🟢 [Analyst Action|w0.84] Best Momentum Stocks to Buy for June 1st

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | TTM Technologies, Inc. Announces New $1.0 Billion Cash Flow  |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Finnhub | TTM Technologies, Inc. (TTMI) Analyst/Investor Day - Slidesh |
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | TTM Technologies: AI Data Centers, Defense Electronics And S |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | TTM Technologies (NASDAQ:TTMI): A High-Growth Momentum Stand |
| 2026-06-02 | Industry | ⚪  0 | 0.84 | Finnhub | TTM Technologies: Negative On Valuation, Positive On Fundame |
| 2026-06-01 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | New Strong Buy Stocks for June 1st |

---

## ⚠️ Overheated (4)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 15.9 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] CrowdStrike Holdings, Inc. 2027 Q1 - Results - Earnings Call Presentat
- 🟢 [Earnings|w3.87] CrowdStrike (CRWD) Is Up 7.2% After Profit Beat, Guidance Hike And AI 
- 🟢 [Earnings|w3.87] CRWD Q1 Deep Dive: AI Security Demand Drives Guidance Raise, Market Re

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Earnings | 🟢 +1 | 3.87 | Finnhub | CrowdStrike Holdings, Inc. 2027 Q1 - Results - Earnings Call |
| 2026-06-04 | Earnings | 🟢 +1 | 3.87 | Finnhub | CrowdStrike (CRWD) Is Up 7.2% After Profit Beat, Guidance Hi |
| 2026-06-04 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Jim Cramer Defends CrowdStrike. Says the Company Just Posted |
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | CrowdStrike Ramps Up AI Security Push As Valuation Stretches |
| 2026-06-04 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | CrowdStrike remains cybersecurity's gold standard after Q1 B |
| 2026-06-04 | Analyst Action | ⚪  0 | 1.43 | Finnhub | CrowdStrike Capitalizes on Accelerating AI Demand, But Durab |
| 2026-06-04 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | CrowdStrike Delivers Strong Q1 on AI Momentum, RBC Says |
| 2026-06-04 | Earnings | 🟢 +1 | 3.87 | Finnhub | CRWD Q1 Deep Dive: AI Security Demand Drives Guidance Raise, |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.3 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Generac (GNRC) Stock Trades Up, Here Is Why
- 🟢 [Industry|w2.1] Generac Joins Data Center Fracas; Soars On Generator Deal With AI Hype
- 🟢 [Industry|w2.1] Generac Signs Global Supply Agreement with Leading Hyperscale Data Cen

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Generac's 3.25MW Generator Named Gold Winner in 2026 Consult |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Finnhub | Is It Too Late To Consider Generac Holdings (GNRC) After A 1 |
| 2026-06-02 | Industry | 🟢 +1 | 2.1 | Finnhub | Generac (GNRC) Stock Trades Up, Here Is Why |
| 2026-06-02 | Industry | 🟢 +1 | 2.1 | Finnhub | Generac Joins Data Center Fracas; Soars On Generator Deal Wi |
| 2026-06-02 | Industry | 🟢 +1 | 2.1 | Finnhub | Generac Signs Global Supply Agreement with Leading Hyperscal |
| 2026-06-02 | Industry | 🟢 +1 | 1.5 | Seeking Al | Generac signs global supply deal with hyperscale data center |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.96 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Mizuho Raises its Price Target on Lam Research (LRCX)
- 🟢 [Industry|w2.1] Why Lam Research (LRCX) Stock Is Trading Up Today
- 🟢 [Industry|w1.19] What Do Analysts Say About Lam Research (LRCX)’s Earnings Outlook?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | Lam Research (LRCX) Stock Slides as Market Rises: Facts to K |
| 2026-06-04 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Mizuho Raises its Price Target on Lam Research (LRCX) |
| 2026-06-04 | Industry | 🟢 +1 | 1.19 | Finnhub | What Do Analysts Say About Lam Research (LRCX)’s Earnings Ou |
| 2026-06-04 | Industry | ⚪  0 | 0.6 | Finnhub | Lam Research Corp (LRCX): Increasing Dependence on Essential |
| 2026-06-03 | Buyback | 🟢 +1 | 0.6 | Finnhub | Will Strong Cash Flows Support Lam Research's Buyback Strate |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Top Wide-Moat Stocks to Buy for Steady Long-Term Returns |
| 2026-06-02 | Industry | 🟢 +1 | 2.1 | Finnhub | Why Lam Research (LRCX) Stock Is Trading Up Today |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Lam Research Corporation (LRCX) Presents at Bank of America  |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.89 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Why Coherent (COHR) Is Up 11.9% After Nvidia’s AI Optics Deal And Equi
- 🟢 [Industry|w1.01] What's Happening With Coherent Stock?
- 🟢 [Industry|w1.01] LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Using ‘Optics 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | What's Happening With Coherent Stock? |
| 2026-06-03 | M&A | 🟢 +1 | 3.53 | Finnhub | Why Coherent (COHR) Is Up 11.9% After Nvidia’s AI Optics Dea |
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Usin |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Coherent (COHR) Hits Record High on Marvell Skyrocket Ride |
| 2026-06-02 | Industry | 🟢 +1 | 0.84 | Finnhub | Why Coherent (COHR) Stock Is Up Today |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] TTM Technologies, Inc. Announces New $1.0 Billion Cash Flow Revolver a
- 🟢 [Industry|w1.01] TTM Technologies: AI Data Centers, Defense Electronics And Space Tailw
- 🟢 [Analyst Action|w0.84] Best Momentum Stocks to Buy for June 1st

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | TTM Technologies, Inc. Announces New $1.0 Billion Cash Flow  |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Finnhub | TTM Technologies, Inc. (TTMI) Analyst/Investor Day - Slidesh |
| 2026-06-03 | Industry | 🟢 +1 | 1.01 | Finnhub | TTM Technologies: AI Data Centers, Defense Electronics And S |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | TTM Technologies (NASDAQ:TTMI): A High-Growth Momentum Stand |
| 2026-06-02 | Industry | ⚪  0 | 0.84 | Finnhub | TTM Technologies: Negative On Valuation, Positive On Fundame |
| 2026-06-01 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | New Strong Buy Stocks for June 1st |

---

### NASDAQ:ONDS

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 1.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 8 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Ondas (ONDS) Secures More Than $30M in New Orders During May
- 🟢 [Industry|w1.8] ONDS Stock In The Spotlight After New Navy Contract – Everything To Kn
- 🟢 [Industry|w0.51] ONDS' Growing Active Opportunity Pipeline: Multi-Year Growth Secured?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.24] Why Is ONDS Stock Falling Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 1.02 | Yahoo Fina | A Look At Ondas (ONDS) Valuation After A Sharp One Day Share |
| 2026-06-04 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Ondas (ONDS) Secures More Than $30M in New Orders During May |
| 2026-06-04 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | ONDS' Growing Active Opportunity Pipeline: Multi-Year Growth |
| 2026-06-04 | Buyback | ⚪  0 | 0.61 | Yahoo Fina | Daily – Vickers Top Buyers & Sellers for 06/04/2026 |
| 2026-06-03 | Black Swan | 🔴 -1 | 3.24 | Yahoo Fina | Why Is ONDS Stock Falling Today? |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Ondas (ONDS) After Its Recent 8x  |
| 2026-06-02 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | ONDS Stock In The Spotlight After New Navy Contract – Everyt |

---

## 🔴 Avoid / Short (1)

### NASDAQ:ONDS

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 1.62 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 8 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Ondas (ONDS) Secures More Than $30M in New Orders During May
- 🟢 [Industry|w1.8] ONDS Stock In The Spotlight After New Navy Contract – Everything To Kn
- 🟢 [Industry|w0.51] ONDS' Growing Active Opportunity Pipeline: Multi-Year Growth Secured?

**📉 Bearish Factors:**
- 🔴 [Black Swan|w3.24] Why Is ONDS Stock Falling Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 1.02 | Yahoo Fina | A Look At Ondas (ONDS) Valuation After A Sharp One Day Share |
| 2026-06-04 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Ondas (ONDS) Secures More Than $30M in New Orders During May |
| 2026-06-04 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | ONDS' Growing Active Opportunity Pipeline: Multi-Year Growth |
| 2026-06-04 | Buyback | ⚪  0 | 0.61 | Yahoo Fina | Daily – Vickers Top Buyers & Sellers for 06/04/2026 |
| 2026-06-03 | Black Swan | 🔴 -1 | 3.24 | Yahoo Fina | Why Is ONDS Stock Falling Today? |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Ondas (ONDS) After Its Recent 8x  |
| 2026-06-02 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | ONDS Stock In The Spotlight After New Navy Contract – Everyt |

---

## ⚪ Watch / Neutral (65)

### NYSE:DY
- Score: 59/100 | raw: 2.06 | News: 3 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 59/100 | raw: 2.27 | News: 6 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:IREN
- Score: 58/100 | raw: 1.8 | News: 1 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 56/100 | raw: 1.36 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 55/100 | raw: 1.21 | News: 4 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 54/100 | raw: 0.84 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IONQ
- Score: 54/100 | raw: 0.84 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NOK
- Score: 53/100 | raw: 0.7 | News: 2 kept / 7 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FN
- Score: 53/100 | raw: 0.7 | News: 3 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 52/100 | raw: 0.5 | News: 2 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 51/100 | raw: 0.18 | News: 2 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JBL
- Score: 51/100 | raw: 0.25 | News: 6 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 8 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMAT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KLAC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 4 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 6 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MRVL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DKS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NVT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:FLEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ERIC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 9 dropped | No relevant news in window

### NYSE:QBTS
- Score: 50/100 | raw: 0 | News: 1 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 10 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DOCN
- Score: 50/100 | raw: 0 | News: 2 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:C
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADI
- Score: 50/100 | raw: 0 | News: 1 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 50/100 | raw: 0 | News: 0 kept / 7 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 2 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GLW
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:POWL
- Score: 50/100 | raw: 0 | News: 3 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 16 dropped | No relevant news in window

### NASDAQ:NBIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:INCY
- Score: 50/100 | raw: 0 | News: 0 kept / 12 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LLY
- Score: 50/100 | raw: 0 | News: 0 kept / 4 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 18 dropped | No relevant news in window

### NASDAQ:ASML
- Score: 48/100 | raw: -0.5 | News: 4 kept / 2 dropped | No clear directional bias — stay flat

### NASDAQ:WDC
- Score: 48/100 | raw: -0.49 | News: 3 kept / 7 dropped | No clear directional bias — stay flat

### NYSE:CLS
- Score: 48/100 | raw: -0.5 | News: 1 kept / 9 dropped | No clear directional bias — stay flat

### NASDAQ:MPWR
- Score: 48/100 | raw: -0.5 | News: 5 kept / 24 dropped | No clear directional bias — stay flat

### NASDAQ:VIAV
- Score: 45/100 | raw: -1.26 | News: 2 kept / 10 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-05T03:49:30.335Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*