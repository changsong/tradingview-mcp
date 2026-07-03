# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-29  |  **News Window:** 2026-06-22 ~ 2026-06-29
**Stock Pool:** us_selected.txt (76)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:LLY** | **100** | 13.39 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMD** | **95** | 14.37 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:NBIX** | **90** | 9.67 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:MMM** | **90** | 9.56 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:GE** | **89** | 11.26 | 🟢 Long (Strong) | Momentum / Hold | High | 15/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MU** | **79** | 6.84 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:INTC** | **76** | 6.93 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 10/0 | Likely Pre-Priced (no hard catalyst) |
| 8 | **NASDAQ:LRCX** | **75** | 6.04 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 9 | **NASDAQ:ALAB** | **69** | 4.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 10 | **NASDAQ:AMAT** | **68** | 4.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 11 | **NASDAQ:VICR** | **65** | 3.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 12 | **NYSE:GLW** | **63** | 3.06 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 13 | **NASDAQ:ASML** | **63** | 3.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | - |
| 14 | **NYSE:APH** | **62** | 2.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 15 | **NYSE:DY** | **62** | 2.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 16 | **NASDAQ:KLAC** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 17 | **NYSE:C** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 18 | **NASDAQ:INCY** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 19 | **NASDAQ:MNST** | **59** | 2.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 20 | **NASDAQ:CRWD** | **59** | 2.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 21 | **NASDAQ:VRTX** | **59** | 2.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 22 | **NYSE:HUBB** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NYSE:FAF** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NYSE:MTZ** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 25 | **NASDAQ:SNDK** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 26 | **NYSE:BROS** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NYSE:TRNO** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:CPRX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NASDAQ:PANW** | **52** | 0.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 30 | **NYSE:SN** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NASDAQ:RELY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NASDAQ:KALU** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:DKS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:DOV** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 47 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NYSE:GEV** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 52 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:CINF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 59 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NYSE:GNRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NASDAQ:SBCF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:HEI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:SON** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NYSE:DELL** | **31** | -4.62 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 7/0 | - |
| 76 | **NASDAQ:TLN** | **20** | -7.18 | 🔴 Short / Avoid | Reversal (wait for bottom) | High | 2/0 | Sentiment Weakening DOWN (trend) |

---

## 🟢 Strong Long (3)

### NYSE:MMM

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.56 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Here’s Why 3M (MMM) is Among the 12 Most Profitable S&P 500 Stocks to 
- 🟢 [M&A|w2.06] The Bull Case For 3M (MMM) Could Change Following New Airbus A220 Insu
- 🟢 [M&A|w2.06] 3M (MMM) Signs Long Term Airbus A220 Supply Deal For Aircraft Insulati

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-28 | M&A | 🟢 +1 | 3.53 | Finnhub | Here’s Why 3M (MMM) is Among the 12 Most Profitable S&P 500  |
| 2026-06-25 | M&A | 🟢 +1 | 2.06 | Finnhub | The Bull Case For 3M (MMM) Could Change Following New Airbus |
| 2026-06-25 | Industry | ⚪  0 | 0.5 | Finnhub | 3M (MMM) Stock After Recent Restructuring Efforts Is The Cur |
| 2026-06-25 | Earnings | 🟢 +1 | 1.91 | Finnhub | Strength in Safety & Industrial Unit Drives MMM: Can the Mom |
| 2026-06-25 | M&A | 🟢 +1 | 2.06 | Finnhub | 3M (MMM) Signs Long Term Airbus A220 Supply Deal For Aircraf |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 11.26 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] RBC Capital Initiates Coverage of GE HealthCare Technologies Inc. (GEH
- 🟢 [Earnings|w2.27] Here's What to Expect From GE Aerospace's Next Earnings Report
- 🟢 [Buyback|w1.76] GE Aerospace Board of Directors Authorizes Quarterly Dividend

**📉 Bearish Factors:**
- 🔴 [Industry|w0.59] The Number That Could Test GE Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-28 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | RBC Capital Initiates Coverage of GE HealthCare Technologies |
| 2026-06-26 | Industry | ⚪  0 | 0.5 | Finnhub | GE Stock: From ‘Dead File’ to Outperformer |
| 2026-06-26 | Industry | 🟢 +1 | 0.7 | Finnhub | General Electric (GE) Is Betting On A $170 Billion Services  |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Stock At 52-Week Highs: Is the Best Still Ahead? |
| 2026-06-26 | Industry | ⚪  0 | 0.5 | Finnhub | GE Aerospace Stock Looks Strong. One Number Says Be Careful. |
| 2026-06-26 | Earnings | 🟢 +1 | 2.27 | Finnhub | Here's What to Expect From GE Aerospace's Next Earnings Repo |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Is GE Aerospace (GE) Stock Outpacing Its Aerospace Peers Thi |
| 2026-06-26 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Wall Street Analysts Think GE (GE) Is a Good Investment: Is  |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.84 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Can Micron (MU) ’s Deal With Anthropic Cement Its Place in the AI Memo
- 🟢 [Earnings|w3.28] Is Micron Technology, Inc. (MU) Among the Best Semiconductor Stocks to

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | M&A | 🟢 +1 | 4.16 | Finnhub | Can Micron (MU) ’s Deal With Anthropic Cement Its Place in t |
| 2026-06-29 | Industry | 🔴 -1 | 0.6 | Finnhub | Why Retail Traders Couldn’t Take Their Eyes Off These Stocks |
| 2026-06-28 | Earnings | 🟢 +1 | 3.28 | Finnhub | Is Micron Technology, Inc. (MU) Among the Best Semiconductor |

---

## 🟢 Mid Long (10)

### NASDAQ:ALAB

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Stifel Raises PT on Astera Labs (ALAB)
- 🟢 [Industry|w0.5] Astera Labs (ALAB) Among Our Best Growth Stocks To Buy and Hold for th
- 🟢 [Industry|w0.5] ASTERA LABS INC (NASDAQ:ALAB): A High-Growth Momentum Breakout Candida

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Stifel Raises PT on Astera Labs (ALAB) |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Astera Labs (ALAB) Among Our Best Growth Stocks To Buy and H |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | ASTERA LABS INC (NASDAQ:ALAB): A High-Growth Momentum Breako |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Applied Materials (AMAT) Introduces Suite of New Chipmaking Systems
- 🟢 [Analyst Action|w1.21] BofA is Bullish on Applied Materials, Inc. (AMAT)
- 🟢 [Analyst Action|w1.21] Applied Materials (AMAT) – Among Billionaire Steven Cohen’s Top 11 Div

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.27] Can AMAT's Investment Strategy Lift Future Cash Flow Growth?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 1.19 | Finnhub | Applied Materials (AMAT) Joins Russell Top 50 After Leaving  |
| 2026-06-28 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | BofA is Bullish on Applied Materials, Inc. (AMAT) |
| 2026-06-28 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Applied Materials (AMAT) – Among Billionaire Steven Cohen’s  |
| 2026-06-27 | Industry | 🟢 +1 | 2.1 | Finnhub | Applied Materials (AMAT) Introduces Suite of New Chipmaking  |
| 2026-06-26 | Earnings | 🔴 -1 | 2.27 | Finnhub | Can AMAT's Investment Strategy Lift Future Cash Flow Growth? |
| 2026-06-26 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | AMAT Stock Gets Thumbs Up From Wall Street – Analysts Remain |

---

### NASDAQ:VICR

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Why Vicor Corporation (VICR) Is Becoming a Higher-Stakes Bet on AI Pow
- 🟢 [Industry|w0.6] Vicor Corp (NASDAQ:VICR): A High-Growth Momentum Play Confirmed by the
- 🟢 [Industry|w0.5] What Makes Vicor (VICR) a Strong Momentum Stock: Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 0.6 | Finnhub | Vicor Corp (NASDAQ:VICR): A High-Growth Momentum Play Confir |
| 2026-06-27 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Why Vicor Corporation (VICR) Is Becoming a Higher-Stakes Bet |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | What Makes Vicor (VICR) a Strong Momentum Stock: Buy Now? |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.06 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.06] Corning (GLW) Lands Amazon Fiber Deal As AI Data Center Demand Builds
- 🟢 [Analyst Action|w0.5] Corning (GLW) Soars 10.8%: Is Further Upside Left in the Stock?
- 🟢 [Industry|w0.5] Why Did UAL, GLW, ABSI Stocks Surge To 52-Week Highs Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-26 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Corning (GLW) Soars 10.8%: Is Further Upside Left in the Sto |
| 2026-06-25 | M&A | 🟢 +1 | 2.06 | Finnhub | Corning (GLW) Lands Amazon Fiber Deal As AI Data Center Dema |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Did UAL, GLW, ABSI Stocks Surge To 52-Week Highs Today? |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Wells Fargo Lifts PT on ASML Holding (ASML) – Here’s Why
- 🟢 [Earnings|w2.27] ASML (ASML) Declines More Than Market: Some Information for Investors
- 🟢 [Analyst Action|w1.51] ASML Holding (ASML): The Best All-Time High Stock with Legs to Rally F

**📉 Bearish Factors:**
- 🔴 [Policy|w3.02] ASML Holding N.V. (ASML) Denies Selling EUV Chipmaking Tool to China F
- 🔴 [Policy|w1.51] ASML Faces New China Risk as 19% Sales Market Comes Under Pressure
- 🔴 [Industry|w0.5] ASML: Peak Euphoria Risk Has Risen Sharply

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-28 | Policy | 🔴 -1 | 3.02 | Finnhub | ASML Holding N.V. (ASML) Denies Selling EUV Chipmaking Tool  |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML (ENXTAM:ASML) Stock Is Getting A New Label In The AI Ch |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML Holding (ASML) Is The “New OPEC” Of Chips, Says Newslet |
| 2026-06-27 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Wells Fargo Lifts PT on ASML Holding (ASML) – Here’s Why |
| 2026-06-26 | Earnings | 🟢 +1 | 2.27 | Finnhub | ASML (ASML) Declines More Than Market: Some Information for  |
| 2026-06-26 | Industry | 🟢 +1 | 0.7 | Finnhub | Here's How Artificial Intelligence Powers ASML's Growth Stor |
| 2026-06-24 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | ASML Holding (ASML): The Best All-Time High Stock with Legs  |
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML Holding N.V. (ASML) Is One Of Billionaire David Tepper’ |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Should You Buy Amphenol Corporation (APH)’s Shares?
- 🟢 [Industry|w0.6] Amphenol Corp (NYSE:APH) Screens as a High Growth Momentum Leader With
- 🟢 [Industry|w0.5] Is Amphenol (APH) a Solid Growth Stock? 3 Reasons to Think "Yes"

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | 🟢 +1 | 0.6 | Finnhub | Amphenol Corp (NYSE:APH) Screens as a High Growth Momentum L |
| 2026-06-28 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Should You Buy Amphenol Corporation (APH)’s Shares? |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Amphenol (APH) a Solid Growth Stock? 3 Reasons to Think " |
| 2026-06-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol (APH) Is Up 6.61% in One Week: What You Should Know |

---

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Dycom Industries (DY) Down 7.8% Since Last Earnings Report: Can It Reb
- 🟢 [Industry|w0.5] Dycom Industries Inc (NYSE:DY) Offers a Compelling Affordable Growth P

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Dycom Industries Inc (NYSE:DY) Offers a Compelling Affordabl |
| 2026-06-26 | Earnings | 🟢 +1 | 2.27 | Finnhub | Dycom Industries (DY) Down 7.8% Since Last Earnings Report:  |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.51] How Investors Are Reacting To KLA (KLAC) Ten-for-One Split And AI-Focu
- 🟢 [Analyst Action|w1.51] Wells Fargo Raises its Price Target on KLA Corporation (KLAC)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Here's Why KLA (KLAC) Fell More Than Broader Market

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Finnhub | Here's Why KLA (KLAC) Fell More Than Broader Market |
| 2026-06-24 | Buyback | 🟢 +1 | 1.51 | Finnhub | How Investors Are Reacting To KLA (KLAC) Ten-for-One Split A |
| 2026-06-24 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Wells Fargo Raises its Price Target on KLA Corporation (KLAC |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.52] Citigroup (C) Lifts Dividend And Unveils $30 Billion Share Buyback Pla
- 🟢 [Industry|w0.5] Here is Why Citigroup (C) is One of the Most Profitable Value Stocks t

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Citigroup (C) Registers a Bigger Fall Than the Market: Important Facts

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is Why Citigroup (C) is One of the Most Profitable Valu |
| 2026-06-27 | Buyback | 🟢 +1 | 2.52 | Finnhub | Citigroup (C) Lifts Dividend And Unveils $30 Billion Share B |
| 2026-06-26 | Industry | 🔴 -1 | 0.5 | Finnhub | Citigroup (C) Registers a Bigger Fall Than the Market: Impor |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data Builds Acr

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-27 | Rumor | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Stock After 66% One-Year Rally Is The Market T |
| 2026-06-27 | Policy | 🟢 +1 | 2.52 | Finnhub | Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data  |

---

## 🟡 Cautious Long (1)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.93 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Wall Street Firm Says Intel (INTC) Has a Cost Edge Over TSMC in the Ad
- 🟢 [Analyst Action|w3.57] Here’s What Bank of America Securities Thinks About Intel (INTC)
- 🟢 [Industry|w0.5] Intel CEO's Other AI Bet Just Jumped To A $10 Billion Valuation

**📉 Bearish Factors:**
- 🔴 [Policy|w1.21] Thomas Massie Says Republicans Decry Communist 'Involvement' In Democr
- 🔴 [Industry|w0.5] The Nvidia Vs. Intel Pair Trade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | ⚪  0 | 0.6 | Finnhub | HP, Intel, and Xerox Are All Chasing the Same Comeback. Hist |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wall Street Firm Says Intel (INTC) Has a Cost Edge Over TSMC |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Here’s What Bank of America Securities Thinks About Intel (I |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Intel CEO's Other AI Bet Just Jumped To A $10 Billion Valuat |
| 2026-06-28 | Industry | ⚪  0 | 1.01 | Finnhub | Intel Corporation (INTC)’s Stock Has Surged but Needs an Eng |
| 2026-06-28 | Policy | 🔴 -1 | 1.21 | Finnhub | Thomas Massie Says Republicans Decry Communist 'Involvement' |
| 2026-06-25 | Analyst Action | ⚪  0 | 1.26 | Seeking Al | Intel in focus as Goldman Sachs starts with Neutral rating |
| 2026-06-25 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Intel: Why I Believe The Market Can Continue Paying A Premiu |

---

## ⚠️ Overheated (4)

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 13.39 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Eli Lilly (LLY) and BioArctic AB Enter into Research and Collaboration
- 🟢 [Earnings|w2.73] Eli Lilly (LLY) Announces Positive Phase 3 Results for Jaypirca Combin
- 🟢 [Policy|w2.52] Eli Lilly (LLY) Wins EMA Backing For Jaypirca In Chronic Lymphocytic L

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Eli Lilly and Company (LLY) Up More Than 6% Over the Past Mo |
| 2026-06-28 | Industry | 🟢 +1 | 1.01 | Finnhub | Is Eli Lilly and Company (LLY) Among the Best AI-Powered Hea |
| 2026-06-27 | M&A | 🟢 +1 | 2.94 | Finnhub | Eli Lilly (LLY) and BioArctic AB Enter into Research and Col |
| 2026-06-27 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Here’s What the Street Thinks About Eli Lilly and Company (L |
| 2026-06-27 | Policy | 🟢 +1 | 2.52 | Finnhub | Eli Lilly (LLY) Wins EMA Backing For Jaypirca In Chronic Lym |
| 2026-06-27 | Earnings | 🟢 +1 | 2.73 | Finnhub | Eli Lilly (LLY) Announces Positive Phase 3 Results for Jaypi |
| 2026-06-26 | Industry | 🟢 +1 | 1.75 | Finnhub | Why Is Eli Lilly (LLY) Stock Soaring Today |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 14.37 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD (AMD) Commits £2 Billion to the UK and Helps Build Two AI Supercom
- 🟢 [Analyst Action|w3.57] UBS Raises PT on Advanced Micro Devices (AMD)
- 🟢 [M&A|w3.53] AMD Just Acquired MEXT to Crack the Memory Optimization Problem. Shoul

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD (AMD) Commits £2 Billion to the UK and Helps Build Two A |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | UBS Raises PT on Advanced Micro Devices (AMD) |
| 2026-06-28 | M&A | 🟢 +1 | 3.53 | Finnhub | AMD Just Acquired MEXT to Crack the Memory Optimization Prob |
| 2026-06-28 | Industry | ⚪  0 | 0.5 | Finnhub | Is SpaceX Really Worth More Than Micron and AMD Combined? He |
| 2026-06-28 | Rumor | 🟢 +1 | 0.5 | Finnhub | Advanced Micro Devices (AMD) Is A Stock That Could Skyrocket |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | Does AMD pay dividends? How the chipmaker spends its money |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | AMUU: Bull 2x Of AMD In The Phase Of Most Extreme Momentum |
| 2026-06-27 | Buyback | 🟢 +1 | 1.01 | Finnhub | AMD’s stock buybacks explained: History, balance & outlook |

---

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.67 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Neurocrine Biosciences (NBIX) Is Up 6.5% After CRENESSITY Shows Broad 
- 🟢 [Industry|w2.52] Neurocrine Biosciences (NBIX): High Growth NASDAQ Stocks to Buy Now
- 🟢 [Industry|w2.1] Neurocrine Biosciences (NBIX): High Growth Stocks to Buy Right Now

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Bull of the Day: Neurocrine Biosciences (NBIX) |
| 2026-06-28 | Industry | 🟢 +1 | 2.52 | Finnhub | Neurocrine Biosciences (NBIX) Is Up 6.5% After CRENESSITY Sh |
| 2026-06-28 | Industry | 🟢 +1 | 2.52 | Finnhub | Neurocrine Biosciences (NBIX): High Growth NASDAQ Stocks to  |
| 2026-06-27 | Industry | 🟢 +1 | 2.1 | Finnhub | Neurocrine Biosciences (NBIX): High Growth Stocks to Buy Rig |
| 2026-06-24 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Is Neurocrine (NBIX) a Solid Growth Stock? 3 Reasons to Thin |
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NASDAQ:NBIX) Fits the Profile of a C |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.04 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.47] Lam Research (LRCX) Opens Boise Office To Get Closer To Micron’s Memor
- 🟢 [Analyst Action|w1.43] Lam Research (LRCX): Citi Raises Target by $135 on a Multi-Year Chip M
- 🟢 [Analyst Action|w1.43] BofA Raises PT on Lam Research (LRCX), Keeps a Buy Rating

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Lam Research (LRCX): Citi Raises Target by $135 on a Multi-Y |
| 2026-06-29 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | BofA Raises PT on Lam Research (LRCX), Keeps a Buy Rating |
| 2026-06-28 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Barclays Maintained an “Overweight” rating on Lam Research C |
| 2026-06-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Lam Research Corp (NASDAQ:LRCX) Earns Caviar Cruise Screen S |
| 2026-06-25 | Industry | 🟢 +1 | 1.47 | Finnhub | Lam Research (LRCX) Opens Boise Office To Get Closer To Micr |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.93 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Wall Street Firm Says Intel (INTC) Has a Cost Edge Over TSMC in the Ad
- 🟢 [Analyst Action|w3.57] Here’s What Bank of America Securities Thinks About Intel (INTC)
- 🟢 [Industry|w0.5] Intel CEO's Other AI Bet Just Jumped To A $10 Billion Valuation

**📉 Bearish Factors:**
- 🔴 [Policy|w1.21] Thomas Massie Says Republicans Decry Communist 'Involvement' In Democr
- 🔴 [Industry|w0.5] The Nvidia Vs. Intel Pair Trade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | Industry | ⚪  0 | 0.6 | Finnhub | HP, Intel, and Xerox Are All Chasing the Same Comeback. Hist |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Wall Street Firm Says Intel (INTC) Has a Cost Edge Over TSMC |
| 2026-06-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Here’s What Bank of America Securities Thinks About Intel (I |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Intel CEO's Other AI Bet Just Jumped To A $10 Billion Valuat |
| 2026-06-28 | Industry | ⚪  0 | 1.01 | Finnhub | Intel Corporation (INTC)’s Stock Has Surged but Needs an Eng |
| 2026-06-28 | Policy | 🔴 -1 | 1.21 | Finnhub | Thomas Massie Says Republicans Decry Communist 'Involvement' |
| 2026-06-25 | Analyst Action | ⚪  0 | 1.26 | Seeking Al | Intel in focus as Goldman Sachs starts with Neutral rating |
| 2026-06-25 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Intel: Why I Believe The Market Can Continue Paying A Premiu |

---

## 🔴 Avoid / Short (2)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **31** / 100 |
| Raw Weighted Score | -4.62 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.5] DELL TECHNOLOGIES -C (NYSE:DELL) Passes Minervini Trend Template and H

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.02] After a Nearly 200% Run Since February, GF Securities Downgraded Dell 
- 🔴 [Industry|w2.1] Dell Technologies (DELL) Ends Distribution Relationship with Arrow ECS

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-28 | Analyst Action | 🔴 -1 | 3.02 | Finnhub | After a Nearly 200% Run Since February, GF Securities Downgr |
| 2026-06-28 | Policy | ⚪  0 | 0.6 | Finnhub | Dell (DELL) Wins Shareholder Backing To Move Its Legal Home  |
| 2026-06-28 | Policy | ⚪  0 | 0.6 | Finnhub | Michael Dell Says Texas Is 'Home' And Where Dell Has Always  |
| 2026-06-27 | Industry | 🔴 -1 | 2.1 | Finnhub | Dell Technologies (DELL) Ends Distribution Relationship with |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | DELL TECHNOLOGIES -C (NYSE:DELL) Passes Minervini Trend Temp |
| 2026-06-26 | Policy | ⚪  0 | 0.5 | Finnhub | Dell shareholders approve legal move from Delaware to Texas |
| 2026-06-26 | Industry | ⚪  0 | 0.5 | Finnhub | Dell Technologies Inc. (DELL) is Attracting Investor Attenti |

---

### NASDAQ:TLN

| Metric | Detail |
|--------|--------|
| Normalized Score | **20** / 100 |
| Raw Weighted Score | -7.18 |
| Trading Signal | **🔴 Short / Avoid** |
| Strategy | Sustained bearish flow, multiple headwinds — exit or consider short |
| Suitable For | Reversal (wait for bottom) |
| Confidence | High |
| News Kept / Dropped | 2 / 0 |
| Patterns | Sentiment Weakening DOWN (trend) |

**📉 Bearish Factors:**
- 🔴 [M&A|w4.16] Talen Energy (TLN) Is Down 7.4% After Russell Index Additions And $984
- 🔴 [Analyst Action|w3.02] Talen Energy (TLN) Downgraded at Jefferies. Here is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-29 | M&A | 🔴 -1 | 4.16 | Finnhub | Talen Energy (TLN) Is Down 7.4% After Russell Index Addition |
| 2026-06-28 | Analyst Action | 🔴 -1 | 3.02 | Finnhub | Talen Energy (TLN) Downgraded at Jefferies. Here is Why |

---

## ⚪ Watch / Neutral (56)

### NASDAQ:MNST
- Score: 59/100 | raw: 2.21 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 59/100 | raw: 2.11 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 59/100 | raw: 2.05 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HUBB
- Score: 57/100 | raw: 1.76 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FAF
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MTZ
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BROS
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 52/100 | raw: 0.54 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DKS
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
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
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:EQIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:GEV
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:HG
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

### NYSE:GNRC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SBCF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HEI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SON
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-29T13:07:42.005Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*