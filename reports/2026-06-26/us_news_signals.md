# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-26  |  **News Window:** 2026-06-19 ~ 2026-06-26
**Stock Pool:** us_selected.txt (92)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:JBL** | **97** | 11.34 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:GLW** | **85** | 8.29 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:GE** | **83** | 10.19 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:AMD** | **78** | 6.82 | 🟢 Long (Strong) | Momentum / Hold | High | 11/0 | - |
| 5 | **NASDAQ:INTC** | **77** | 7.52 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:LLY** | **72** | 5.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 7 | **NYSE:BROS** | **72** | 5.2 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 8 | **NASDAQ:KLAC** | **71** | 4.95 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 4/0 | Likely Pre-Priced (no hard catalyst) |
| 9 | **NASDAQ:LRCX** | **70** | 4.81 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 10 | **NASDAQ:CSCO** | **69** | 4.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 11 | **NASDAQ:MU** | **68** | 4.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 12 | **NYSE:APH** | **67** | 4.17 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 13 | **NASDAQ:FLEX** | **66** | 3.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 14 | **NYSE:KEYS** | **66** | 3.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 15 | **NASDAQ:ASML** | **66** | 6.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | - |
| 16 | **NASDAQ:NBIS** | **65** | 3.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 17 | **NYSE:GEV** | **63** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 18 | **NASDAQ:VRTX** | **63** | 3.23 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 19 | **NASDAQ:MRVL** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 20 | **NASDAQ:AMKR** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 21 | **NASDAQ:MNST** | **61** | 2.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 22 | **NYSE:GNRC** | **60** | 2.45 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 23 | **NYSE:HPE** | **59** | 2.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 24 | **NASDAQ:SNDK** | **58** | 2.03 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NASDAQ:NBIX** | **57** | 1.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 26 | **NYSE:PWR** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NASDAQ:ADI** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NASDAQ:AMAT** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NASDAQ:WDC** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NYSE:TT** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 31 | **NASDAQ:CRWD** | **53** | 0.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 32 | **NASDAQ:CRDO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:CPRX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 34 | **NYSE:MTZ** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NASDAQ:MTSI** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NASDAQ:VICR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 37 | **NASDAQ:INCY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NASDAQ:KALU** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:HON** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 40 | **NASDAQ:PANW** | **51** | 0.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 41 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 42 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:DKS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 45 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:ALAB** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 54 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:SN** | **50** | 0.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 58 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NYSE:DOV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:CINF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 76 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 77 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 78 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 79 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 80 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 81 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 82 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 83 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 84 | **NYSE:DY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 85 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 86 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 87 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 88 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 89 | **NASDAQ:SBCF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 90 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 91 | **NASDAQ:STX** | **43** | -1.78 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 92 | **NYSE:DELL** | **2** | -11.47 | 🔴 Short / Avoid | Reversal (wait for bottom) | High | 5/0 | Sentiment Weakening DOWN (trend) |

---

## 🟢 Strong Long (4)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 8.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Corning (GLW) Lands Amazon Fiber Deal As AI Data Center Demand Builds
- 🟢 [M&A|w3.53] How Corning’s (GLW) Amazon Agreement Turns AI Data-Center Fiber Demand
- 🟢 [Industry|w0.6] Why Did UAL, GLW, ABSI Stocks Surge To 52-Week Highs Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | M&A | 🟢 +1 | 4.16 | Finnhub | Corning (GLW) Lands Amazon Fiber Deal As AI Data Center Dema |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did UAL, GLW, ABSI Stocks Surge To 52-Week Highs Today? |
| 2026-06-24 | M&A | 🟢 +1 | 3.53 | Finnhub | How Corning’s (GLW) Amazon Agreement Turns AI Data-Center Fi |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 10.19 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] GE Aerospace Board of Directors Authorizes Quarterly Dividend
- 🟢 [Buyback|w2.52] Can GE Continue Its Strong Capital Returns to Shareholders?
- 🟢 [Earnings|w2.27] GE Vernova Stock Raised The Bar, Now It Has To Prove It

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] The Number That Could Test GE Stock
- 🔴 [Industry|w0.5] GE Vernova (GEV) Falls More Steeply Than Broader Market: What Investor

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🔴 -1 | 1.19 | Finnhub | The Number That Could Test GE Stock |
| 2026-06-25 | Buyback | 🟢 +1 | 3.57 | Finnhub | GE Aerospace Board of Directors Authorizes Quarterly Dividen |
| 2026-06-24 | Industry | 🟢 +1 | 1.01 | Finnhub | GE Aerospace (GE) Advances While Market Declines: Some Infor |
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | If You Invested $1000 In GE Aerospace Stock 5 Years Ago, You |
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | AI Data Centers Are Driving a Power Supercycle. GE Vernova’s |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | Here is What to Know Beyond Why GE Aerospace (GE) is a Trend |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | AST SpaceMobile vs. GE Aerospace: Which Stock Is a Better Bu |
| 2026-06-23 | Industry | 🔴 -1 | 0.5 | Finnhub | GE Vernova (GEV) Falls More Steeply Than Broader Market: Wha |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.82 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Veteran Bank Revamps AMD Stock Price Target for 2027
- 🟢 [Analyst Action|w2.16] AMD, Arm set to take advantage of CPU rack demand in wake of agentic A
- 🟢 [Industry|w1.19] AMD's Supercomputing Gains Fuel AI Data Center Growth: What's Ahead?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] AMD Is Trading at 97 Times Forward Earnings While Nvidia Trades at 21 
- 🔴 [Industry|w0.6] The Real Reason Nvidia Holds an Unshakable Monopoly Over AMD Has Nothi
- 🔴 [Industry|w0.5] AMD's 324% Rally Hides A Serious Risk Nobody's Talking About

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | Battle of the Artificial Intelligence (AI) Computing Compani |
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | AI Stock Face-Off: Is Nvidia or AMD the Smarter Long-Term Bu |
| 2026-06-25 | Industry | 🔴 -1 | 0.6 | Finnhub | AMD Is Trading at 97 Times Forward Earnings While Nvidia Tra |
| 2026-06-25 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Veteran Bank Revamps AMD Stock Price Target for 2027 |
| 2026-06-25 | Industry | 🔴 -1 | 0.6 | Finnhub | The Real Reason Nvidia Holds an Unshakable Monopoly Over AMD |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Why I Continue to Prioritize AMD Stock Over Nvidia |
| 2026-06-25 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD's Supercomputing Gains Fuel AI Data Center Growth: What' |
| 2026-06-24 | Analyst Action | 🟢 +1 | 2.16 | Seeking Al | AMD, Arm set to take advantage of CPU rack demand in wake of |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 7.52 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Intel vs TSM: Which Chip Giant is the Better Investment?
- 🟢 [Analyst Action|w1.02] Intel: Why I Believe The Market Can Continue Paying A Premium
- 🟢 [Analyst Action|w0.72] Intel: The Three Things The Bulls And Bears Are Both Getting Wrong

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.5] Intel: Levitating On AI Hype

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Why Goldman won't pick Intel over its rivals just yet |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Intel vs. TSMC: Which is the Better Semiconductor Stock to B |
| 2026-06-25 | Rumor | 🟢 +1 | 0.71 | Finnhub | Intel Stock Has Surged More Than 250% This Year. Nancy Pelos |
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | Forget Intel: 1 Semiconductor Juggernaut to Buy Hand Over Fi |
| 2026-06-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Intel vs TSM: Which Chip Giant is the Better Investment? |
| 2026-06-25 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Why Goldman is cautious on outperforming Intel stock |
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | Breakout Watch: This Firm Helps Nvidia, TSM And Intel Bring  |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | SpaceX’s Move Into Neocloud Operations Is Raising Expectatio |

---

## 🟢 Mid Long (16)

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] The Bull Case For Eli Lilly (LLY) Could Change Following New Multi‑Tar
- 🟢 [Industry|w1.19] Eli Lilly and Company (LLY) – Among the 10 Reliable Dividend Stocks to

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Rumor | ⚪  0 | 0.5 | Finnhub | Eli Lilly & Co (NYSE:LLY) Screens as a Top Growth Stock with |
| 2026-06-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Eli Lilly and Company (LLY) – Among the 10 Reliable Dividend |
| 2026-06-25 | M&A | 🟢 +1 | 4.16 | Finnhub | The Bull Case For Eli Lilly (LLY) Could Change Following New |

---

### NYSE:BROS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.2 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] DA Davidson Maintains Buy on Dutch Bros, Raises Price Target to $90
- 🟢 [Analyst Action|w2.1] Piper Sandler Maintains Neutral on Dutch Bros, Raises Price Target to 
- 🟢 [Industry|w0.5] Best Stock to Buy and Hold Forever: Dutch Bros vs. Wingstop

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | Industry | ⚪  0 | 0.5 | Finnhub | Dutch Bros (BROS) Sees a More Significant Dip Than Broader M |
| 2026-06-22 | Industry | ⚪  0 | 0.5 | Finnhub | Starbucks or Dutch Bros: Which Coffee Stock Deserves Your Mo |
| 2026-06-22 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | DA Davidson Maintains Buy on Dutch Bros, Raises Price Target |
| 2026-06-22 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Piper Sandler Maintains Neutral on Dutch Bros, Raises Price  |
| 2026-06-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Best Stock to Buy and Hold Forever: Dutch Bros vs. Wingstop |
| 2026-06-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Dutch Bros Doubled Over the Last 3 Years. Can It Triple by 2 |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.81 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Wells Fargo Raises its Price Target on Lam Research (LRCX)
- 🟢 [Industry|w1.19] Lam Research (LRCX) Opens Boise Office To Get Closer To Micron’s Memor
- 🟢 [Industry|w0.6] Top After-Hours Gainers Today Beyond Micron: QCOM, AMAT, LRCX Surge

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🟢 +1 | 1.19 | Finnhub | Lam Research (LRCX) Opens Boise Office To Get Closer To Micr |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Top After-Hours Gainers Today Beyond Micron: QCOM, AMAT, LRC |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Raises its Price Target on Lam Research (LRCX) |

---

### NASDAQ:CSCO

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Why Cisco’s (CSCO) Acacia Orders Give It a Clearer Role in the 800G AI
- 🟢 [Analyst Action|w1.43] Cisco (CSCO) Stock Sees Modest Fair Value Lift After AI Networking Tar
- 🟢 [Analyst Action|w0.6] Cisco (CSCO) Is Considered a Good Investment by Brokers: Is That True?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Cisco Systems (CSCO) Dips More Than Broader Market: What You Should Kn

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Cisco (CSCO) Stock Sees Modest Fair Value Lift After AI Netw |
| 2026-06-24 | Industry | 🔴 -1 | 0.5 | Finnhub | Cisco Systems (CSCO) Dips More Than Broader Market: What You |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Why Cisco’s (CSCO) Acacia Orders Give It a Clearer Role in t |
| 2026-06-24 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Cisco (CSCO) Is Considered a Good Investment by Brokers: Is  |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Why Is Micron (MU) Stock Soaring Today
- 🟢 [Analyst Action|w0.51] SA analyst upgrades/downgrades: MU, HD, BABA, TTWO

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Why Is Micron (MU) Stock Soaring Today |
| 2026-06-25 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | SA analyst upgrades/downgrades: MU, HD, BABA, TTWO |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.17 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen With Stron
- 🟢 [Industry|w0.7] Amphenol (APH) Is Becoming A Key Supplier For The AI Data Center Build
- 🟢 [Industry|w0.6] Is Amphenol (APH) a Solid Growth Stock? 3 Reasons to Think "Yes"

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Amphenol (APH) a Solid Growth Stock? 3 Reasons to Think " |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | Amphenol (APH) Is Up 6.61% in One Week: What You Should Know |
| 2026-06-22 | Industry | 🟢 +1 | 0.7 | Finnhub | Amphenol (APH) Is Becoming A Key Supplier For The AI Data Ce |
| 2026-06-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | Amphenol Corp. (NYSE:APH) Shines in Navellier Growth Screen  |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Flex Ltd. (FLEX) to Join S&P 500 Index on June 22
- 🟢 [Analyst Action|w1.43] Are Computer and Technology Stocks Lagging  Flex (FLEX) This Year?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | FLEX vs. PLXS: Which Electronics Manufacturing Stock is the  |
| 2026-06-25 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Are Computer and Technology Stocks Lagging  Flex (FLEX) This |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Stocks making the biggest moves midday: Micron Technology, S |
| 2026-06-22 | M&A | 🟢 +1 | 2.45 | Finnhub | Flex Ltd. (FLEX) to Join S&P 500 Index on June 22 |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Keysight Technologies (KEYS) Rallied on Earnings Beat and Improved Out

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | Keysight Technologies (KEYS) Benefits from Multiple Tailwind |
| 2026-06-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Keysight Technologies (KEYS) Rallied on Earnings Beat and Im |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 6.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Micron Earnings Could Decide Whether ASML's AI Boom Has Years Left To 
- 🟢 [Analyst Action|w3.02] ASML Holding (ASML): The Best All-Time High Stock with Legs to Rally F
- 🟢 [Policy|w3.02] Reported Earlier: 'Netherlands Lobbies US to Drop Chip Curbs Targeting

**📉 Bearish Factors:**
- 🔴 [Policy|w3.02] ASML Faces New China Risk as 19% Sales Market Comes Under Pressure
- 🔴 [Industry|w1.01] ASML: Peak Euphoria Risk Has Risen Sharply
- 🔴 [Industry|w0.5] Why ASML (ASML) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | ASML Holding (ASML): The Best All-Time High Stock with Legs  |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | ASML Holding N.V. (ASML) Is One Of Billionaire David Tepper’ |
| 2026-06-24 | Policy | 🔴 -1 | 3.02 | Finnhub | ASML Faces New China Risk as 19% Sales Market Comes Under Pr |
| 2026-06-24 | Industry | 🔴 -1 | 1.01 | Finnhub | ASML: Peak Euphoria Risk Has Risen Sharply |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | ASML’s Chip Dominance Runs Into New Silicon Boundaries |
| 2026-06-24 | Policy | 🟢 +1 | 3.02 | Finnhub | Reported Earlier: 'Netherlands Lobbies US to Drop Chip Curbs |
| 2026-06-24 | Earnings | 🟢 +1 | 3.28 | Finnhub | Micron Earnings Could Decide Whether ASML's AI Boom Has Year |
| 2026-06-24 | Policy | ⚪  0 | 3.02 | Finnhub | ASML (ENXTAM:ASML) Faces New AI Supply Chain Rules As Dutch  |

---

### NASDAQ:NBIS

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
- 🟢 [Industry|w2.52] How Nebius AI Cloud 3.6 “Aether” And Echo Launch At Nebius Group (NBIS
- 🟢 [Industry|w0.6] NBIS, CRWV, APLD, IREN: Why Are Neocloud Stocks Jumping Premarket?
- 🟢 [Rumor|w0.5] Does Nebius Group (NBIS) Have More Upside?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | NBIS, CRWV, APLD, IREN: Why Are Neocloud Stocks Jumping Prem |
| 2026-06-24 | Industry | 🟢 +1 | 2.52 | Finnhub | How Nebius AI Cloud 3.6 “Aether” And Echo Launch At Nebius G |
| 2026-06-23 | Rumor | 🟢 +1 | 0.5 | Finnhub | Does Nebius Group (NBIS) Have More Upside? |

---

### NYSE:GEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] GE Vernova (GEV) Introduces GridOS for Transmission
- 🟢 [Industry|w0.6] GEV vs. PEG: Which Grid Modernization Leader Is the Smarter Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | GEV vs. PEG: Which Grid Modernization Leader Is the Smarter  |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | GE Vernova (GEV) Stock After 103% One-Year Rally Is There Up |
| 2026-06-24 | Industry | 🟢 +1 | 2.52 | Finnhub | GE Vernova (GEV) Introduces GridOS for Transmission |

---

### NASDAQ:VRTX

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.23 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Positive Pediatric CASGEVY Data Might Change The Case For Investing In
- 🟢 [Industry|w0.5] Why the Market Dipped But Vertex Pharmaceuticals (VRTX) Gained Today
- 🟢 [Industry|w0.5] Vertex Pharmaceuticals (NASDAQ:VRTX): A GARP Growth Stock with Reasona

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] 2 Reasons to Like VRTX (and 1 Not So Much)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | Why the Market Dipped But Vertex Pharmaceuticals (VRTX) Gain |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Vertex Pharmaceuticals (VRTX) Stock After Strong Multi‑Year  |
| 2026-06-23 | Earnings | 🟢 +1 | 2.73 | Finnhub | Positive Pediatric CASGEVY Data Might Change The Case For In |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | Vertex Pharmaceuticals (NASDAQ:VRTX): A GARP Growth Stock wi |
| 2026-06-22 | Industry | 🔴 -1 | 0.5 | Finnhub | 2 Reasons to Like VRTX (and 1 Not So Much) |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] BofA Raises Marvell Technology (MRVL) Price Target to $365 from $240
- 🟢 [Industry|w0.6] MRVL Stock Jumps Overnight: MU, QCOM Boost Outweigh CFO’s Share Sale

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Why Marvell Technology (MRVL) Shares Are Trading Lower Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | BofA Raises Marvell Technology (MRVL) Price Target to $365 f |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | MRVL Stock Jumps Overnight: MU, QCOM Boost Outweigh CFO’s Sh |
| 2026-06-25 | Industry | 🔴 -1 | 1.19 | Finnhub | Why Marvell Technology (MRVL) Shares Are Trading Lower Today |

---

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock Here.
- 🟢 [Industry|w0.5] 3 Reasons to Hold AMKR Stock in 2H26 Beyond Its 119.7% YTD Growth
- 🟢 [Industry|w0.5] Amkor Technology, Inc. (AMKR) Is a Trending Stock: Facts to Know Befor

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Amkor Technology (AMKR) Falls More Steeply Than Broader Market: What I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Reasons to Hold AMKR Stock in 2H26 Beyond Its 119.7% YTD G |
| 2026-06-23 | Industry | 🔴 -1 | 0.5 | Finnhub | Amkor Technology (AMKR) Falls More Steeply Than Broader Mark |
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Q1 Earnings Highs And Lows: Amkor (NASDAQ:AMKR) Vs The Rest  |
| 2026-06-22 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology, Inc. (AMKR) Is a Trending Stock: Facts to  |
| 2026-06-20 | M&A | 🟢 +1 | 1.76 | Finnhub | Amkor Soared on a Taiwan Semi Deal. How to Play AMKR Stock H |
| 2026-06-20 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology (NASDAQ:AMKR) Meets Minervini Trend Templat |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.1] Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S. Prices
- 🟢 [Industry|w0.5] 3 Reasons MNST Has Explosive Upside Potential

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-23 | Industry | ⚪  0 | 0.5 | Finnhub | Monster Beverage (MNST) Stock After 47% Yearly Gain Is The P |
| 2026-06-23 | Industry | 🟢 +1 | 2.1 | Finnhub | Monster Beverage (MNST) Gets A Lift As Red Bull Raises U.S.  |
| 2026-06-23 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Reasons MNST Has Explosive Upside Potential |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.45 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Generac Holdings (GNRC) Announces Acquisition of New Facility in Illin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-22 | M&A | 🟢 +1 | 2.45 | Finnhub | Generac Holdings (GNRC) Announces Acquisition of New Facilit |

---

## 🟡 Cautious Long (1)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] How Investors Are Reacting To KLA (KLAC) Ten-for-One Split And AI-Focu
- 🟢 [Analyst Action|w3.02] Wells Fargo Raises its Price Target on KLA Corporation (KLAC)

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.09] Why KLA (KLAC) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Buyback | 🟢 +1 | 3.02 | Finnhub | How Investors Are Reacting To KLA (KLAC) Ten-for-One Split A |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Raises its Price Target on KLA Corporation (KLAC |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy  |
| 2026-06-23 | Earnings | 🔴 -1 | 1.09 | Finnhub | Why KLA (KLAC) Dipped More Than Broader Market Today |

---

## ⚠️ Overheated (1)

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **97** / 100 |
| Raw Weighted Score | 11.34 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Is JBL Stock Still Worth Buying After Its Powerful AI Driven Rally?
- 🟢 [Earnings|w2.27] Jabil Shares Jumped on Earnings as AI Demand Boosts Its Business. JBL 
- 🟢 [Analyst Action|w2.1] Baird Raises its Price Target on Jabil (JBL)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Earnings | 🟢 +1 | 3.87 | Finnhub | Is JBL Stock Still Worth Buying After Its Powerful AI Driven |
| 2026-06-25 | Industry | 🟢 +1 | 0.6 | Finnhub | JBL Growth Drivers Reveal Why AI Demand Is Reshaping the Bus |
| 2026-06-25 | Industry | 🟢 +1 | 1.19 | Finnhub | How JBL Is Riding the AI Infrastructure Manufacturing Boom |
| 2026-06-24 | Earnings | 🟢 +1 | 1.31 | Finnhub | Jabil Inc (NYSE:JBL) Balances Strong Earnings Growth with Re |
| 2026-06-22 | Earnings | 🟢 +1 | 2.27 | Finnhub | Jabil Shares Jumped on Earnings as AI Demand Boosts Its Busi |
| 2026-06-22 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Baird Raises its Price Target on Jabil (JBL) |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 4 / 0 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.02] How Investors Are Reacting To KLA (KLAC) Ten-for-One Split And AI-Focu
- 🟢 [Analyst Action|w3.02] Wells Fargo Raises its Price Target on KLA Corporation (KLAC)

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.09] Why KLA (KLAC) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-24 | Buyback | 🟢 +1 | 3.02 | Finnhub | How Investors Are Reacting To KLA (KLAC) Ten-for-One Split A |
| 2026-06-24 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Wells Fargo Raises its Price Target on KLA Corporation (KLAC |
| 2026-06-24 | Industry | ⚪  0 | 0.5 | Finnhub | KLAC vs. AMAT: Which Chip Equipment Stock Is the Better Buy  |
| 2026-06-23 | Earnings | 🔴 -1 | 1.09 | Finnhub | Why KLA (KLAC) Dipped More Than Broader Market Today |

---

## 🔴 Avoid / Short (1)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **2** / 100 |
| Raw Weighted Score | -11.47 |
| Trading Signal | **🔴 Short / Avoid** |
| Strategy | Sustained bearish flow, multiple headwinds — exit or consider short |
| Suitable For | Reversal (wait for bottom) |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Weakening DOWN (trend) |

**📉 Bearish Factors:**
- 🔴 [M&A|w4.16] Market Chatter: Dell Technologies Ends Arrow Distribution Partnership 
- 🔴 [Analyst Action|w3.57] Why Is Dell Technologies Stock Falling Thursday?
- 🔴 [Analyst Action|w2.55] Dell downgraded at GF Securities after 200% jump in share price

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-25 | Industry | 🔴 -1 | 1.19 | Finnhub | Dell Drops 6%, Western Digital Rises 5% as the Memory Boom S |
| 2026-06-25 | M&A | 🔴 -1 | 4.16 | Finnhub | Market Chatter: Dell Technologies Ends Arrow Distribution Pa |
| 2026-06-25 | Industry | ⚪  0 | 0.6 | Finnhub | SNDK vs. DELL: Which AI Infrastructure Stock is the Better B |
| 2026-06-25 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | Why Is Dell Technologies Stock Falling Thursday? |
| 2026-06-25 | Analyst Action | 🔴 -1 | 2.55 | Seeking Al | Dell downgraded at GF Securities after 200% jump in share pr |

---

## ⚪ Watch / Neutral (69)

### NYSE:HPE
- Score: 59/100 | raw: 2.11 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 58/100 | raw: 2.03 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIX
- Score: 57/100 | raw: 1.7 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PWR
- Score: 57/100 | raw: 1.64 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADI
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMAT
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WDC
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 53/100 | raw: 0.6 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 53/100 | raw: 0.71 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRDO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MTZ
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MTSI
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HON
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 51/100 | raw: 0.16 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DKS
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

### NASDAQ:ALAB
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DY
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

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:STX
- Score: 43/100 | raw: -1.78 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-26T02:11:06.597Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*