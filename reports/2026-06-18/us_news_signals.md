# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-18  |  **News Window:** 2026-06-11 ~ 2026-06-18
**Stock Pool:** us_selected.txt (76)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:JBL** | **100** | 17.03 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMD** | **98** | 27.4 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:AMAT** | **98** | 11.89 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:HPE** | **98** | 13.63 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:ARM** | **95** | 11.43 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:ASML** | **92** | 13.55 | 🟢 Long (Strong) | Momentum / Hold | High | 15/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:INTC** | **88** | 13.53 | 🟢 Long (Strong) | Momentum / Hold | High | 10/0 | - |
| 8 | **NASDAQ:LRCX** | **84** | 8.13 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:APH** | **75** | 6.04 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 10 | **NASDAQ:WDC** | **74** | 5.87 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/0 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:AEHR** | **74** | 5.77 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 12 | **NASDAQ:AMKR** | **73** | 5.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:MS** | **72** | 5.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:VRT** | **72** | 5.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | Sentiment Strengthening UP (trend) |
| 15 | **NYSE:DELL** | **71** | 5.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/0 | - |
| 16 | **NASDAQ:MRVL** | **70** | 4.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:DOV** | **70** | 4.79 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 18 | **NASDAQ:WWD** | **66** | 3.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 19 | **NASDAQ:STX** | **66** | 3.88 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 20 | **NYSE:DOCN** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 21 | **NYSE:GE** | **63** | 3.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 22 | **NASDAQ:KLAC** | **60** | 2.45 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 23 | **NYSE:FCX** | **60** | 2.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 24 | **NYSE:PWR** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 25 | **NYSE:NVT** | **57** | 1.69 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 26 | **NASDAQ:MU** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 27 | **NASDAQ:EQIX** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 28 | **NYSE:GEV** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 29 | **NASDAQ:CINF** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 30 | **NYSE:TSM** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 31 | **NYSE:DKS** | **53** | 0.75 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 32 | **NASDAQ:NVMI** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:TLN** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 34 | **NYSE:C** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NYSE:AIR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NASDAQ:PANW** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 37 | **NASDAQ:ALAB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NYSE:BAP** | **52** | 0.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 39 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 44 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:MNST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 49 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 56 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 62 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 64 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 70 | **NASDAQ:CRWV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NASDAQ:POWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NYSE:FAF** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 75 | **NYSE:LLY** | **37** | -3.07 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/0 | - |
| 76 | **NYSE:IFS** | **37** | -3.02 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 1/0 | - |

---

## 🟢 Strong Long (5)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 27.4 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD Just Solved The Memory Problem
- 🟢 [Earnings|w3.87] AMD Is Up 149% Year to Date. Is the AI Chip Rally Getting Dangerously 
- 🟢 [Analyst Action|w3.57] Advanced Micro Devices (AMD): The Best Debt-Free American Stock to Inv

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] AMD Is Standing Precariously Close To The Cliff

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | RXT Stock Surges To 4-Year Highs — Wall Street Highlights Mu |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Advanced Micro Devices (AMD): The Best Debt-Free American St |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | INTC, ARM, AMD Stocks Gain Today — Bernstein Supercharges AI |
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD, Intel Rise as TSMC Capacity Tightens |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citi Upgrades AMD Stock to ‘Buy’ on Massive Meta GPU Sales P |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Jim Cramer Says His Favorite Is NVIDIA “But AMD Is Fantastic |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance' |
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | AMD Is Up 149% Year to Date. Is the AI Chip Rally Getting Da |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 13.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Elon Musk Just Delivered Fantastic News for ASML Stock Investors
- 🟢 [Industry|w2.98] ASML hits 52-week high as Intel 18A-P enters risk production
- 🟢 [Earnings|w1.31] Here's Why ASML (ASML) Fell More Than Broader Market

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.5] ASML: The Rally May Be Overdone

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | ASML CEO Flags Terafab Opportunity as AI Demand Stays Enormo |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Applied Materials, ASML, Lam Hit Record Highs, Lead Chip Gea |
| 2026-06-17 | Rumor | 🟢 +1 | 0.71 | Finnhub | Why Is ASML Stock Up Again Today? |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Is ASML (ASML) The Best Undervalued AI Stock? |
| 2026-06-17 | Industry | 🟢 +1 | 2.98 | Finnhub | ASML hits 52-week high as Intel 18A-P enters risk production |
| 2026-06-17 | Rumor | 🟢 +1 | 0.71 | Finnhub | ASML (NasdaqGS:ASML) Stock Is Back In Focus As Musk Eyes Its |
| 2026-06-17 | Industry | ⚪  0 | 0.5 | Seeking Al | ASML CEO says need to make sure no supply constraints for ne |
| 2026-06-16 | Earnings | 🟢 +1 | 1.31 | Finnhub | Here's Why ASML (ASML) Fell More Than Broader Market |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 13.53 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance'
- 🟢 [Industry|w2.98] Intel's 18A-P Process Moves Forward
- 🟢 [Industry|w2.98] AMD, Intel Rise as TSMC Capacity Tightens

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Intel: The Re-Rating Has Gone Too Far
- 🔴 [Analyst Action|w0.5] Intel: Optimism Is Getting Expensive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Rumor | 🟢 +1 | 0.5 | Finnhub | Why Intel Stock Is Up After the SpaceX IPO |
| 2026-06-17 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel's 18A-P Process Moves Forward |
| 2026-06-17 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Intel: The Re-Rating Has Gone Too Far |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | INTC, ARM, AMD Stocks Gain Today — Bernstein Supercharges AI |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Intel, SpaceX, Robinhood, Carvana, and More Stocks That Expl |
| 2026-06-17 | Industry | 🟢 +1 | 2.98 | Finnhub | AMD, Intel Rise as TSMC Capacity Tightens |
| 2026-06-17 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel (INTC) Moves 18A P Into Risk Production As AI Partners |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance' |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.13 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Citi lifts PTs on AMAT, LRCX, & KLAC amid booming WFE demand
- 🟢 [Analyst Action|w2.55] Citi bullish on NAND equipment demand; lifts PTs for AMAT, LRCX, KLAC
- 🟢 [Industry|w2.52] Lam Research (LRCX) Is Betting On Advanced Packaging For 50% Growth In

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Why Lam Research (LRCX) Dipped More Than Broader Market Today
- 🔴 [Industry|w0.5] Decoding LRCX Stock's Premium Valuation

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citi lifts PTs on AMAT, LRCX, & KLAC amid booming WFE demand |
| 2026-06-17 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |
| 2026-06-16 | Industry | 🔴 -1 | 0.5 | Finnhub | Decoding LRCX Stock's Premium Valuation |
| 2026-06-16 | Industry | 🔴 -1 | 1.01 | Finnhub | Why Lam Research (LRCX) Dipped More Than Broader Market Toda |
| 2026-06-16 | Industry | 🟢 +1 | 2.52 | Finnhub | Lam Research (LRCX) Is Betting On Advanced Packaging For 50% |
| 2026-06-16 | Industry | 🟢 +1 | 0.5 | Finnhub | How Much Upside Can LRCX Stock's Growth Deliver? |
| 2026-06-16 | Industry | 🟢 +1 | 0.5 | Finnhub | Lam Research (LRCX) Stands Out on Strong Demand |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.04 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] Why Amphenol (APH) Stock Is Trading Up Today
- 🟢 [Analyst Action|w3.02] Analyst Raises Amphenol (APH) Price Target Citing AI-Related Growth Op

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Leverage Shares by Themes Continues Expansion of Leveraged S |
| 2026-06-16 | Policy | 🟢 +1 | 3.02 | Finnhub | Why Amphenol (APH) Stock Is Trading Up Today |
| 2026-06-16 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Analyst Raises Amphenol (APH) Price Target Citing AI-Related |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Amphenol (APH) Stock After 67% Annual Surge Are Growth Expec |

---

## 🟢 Mid Long (13)

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.77 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Why Is Aehr Test Systems Stock Soaring Wednesday?
- 🟢 [Earnings|w2.76] Aehr jumps on receiving follow-on order from 'major' silicon photonics

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Aehr Test Systems: A Brilliant Order Book Wrapped In A Brutal Multiple

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Why Is Aehr Test Systems Stock Soaring Wednesday? |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Aehr Test Systems Follow-On Production Order For A Fully Aut |
| 2026-06-17 | Earnings | 🟢 +1 | 2.76 | Seeking Al | Aehr jumps on receiving follow-on order from 'major' silicon |
| 2026-06-16 | Analyst Action | 🔴 -1 | 0.86 | Seeking Al | Aehr Test Systems: A Brilliant Order Book Wrapped In A Bruta |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Aehr Test Systems: A Brilliant Order Book Wrapped In A Bruta |

---

### NASDAQ:AMKR

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Amkor Technology (AMKR) Increases Despite Market Slip: Here's What You
- 🟢 [Industry|w1.19] Can Strong Smartphone Demand Sustain AMKR's Growth Momentum?
- 🟢 [Industry|w0.59] Amkor Technology (AMKR) Hits All-Time High — Here’s Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | Can Strong Smartphone Demand Sustain AMKR's Growth Momentum? |
| 2026-06-16 | Earnings | 🟢 +1 | 3.28 | Finnhub | Amkor Technology (AMKR) Increases Despite Market Slip: Here' |
| 2026-06-13 | Industry | 🟢 +1 | 0.59 | Finnhub | Amkor Technology (AMKR) Hits All-Time High — Here’s Why |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Amkor Technology (AMKR) Stock After 277% One-Year Surge Is T |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Morgan Stanley (MS) Stock Trades Up, Here Is Why
- 🟢 [Industry|w0.6] Morgan Stanley (MS) Ascends While Market Falls: Some Facts to Note
- 🟢 [Industry|w0.6] Morgan Stanley (MS) Is Chasing $10 Trillion In Wealth And A SpaceX Boo

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 4.16 | Finnhub | Morgan Stanley (MS) Stock Trades Up, Here Is Why |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Morgan Stanley (MS) Ascends While Market Falls: Some Facts t |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Morgan Stanley (MS) Is Chasing $10 Trillion In Wealth And A  |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Why Vertiv (VRT) Is Moving Deeper Across the Full AI Data Center Therm
- 🟢 [Industry|w0.6] AI Data Center Cooling: MOD's Pivot vs. VRT's Moat - The Better Bet?
- 🟢 [Industry|w0.5] VRT vs. SMCI: Which Data Center Infrastructure Stock Is a Better Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 4.16 | Finnhub | Why Vertiv (VRT) Is Moving Deeper Across the Full AI Data Ce |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | AI Data Center Cooling: MOD's Pivot vs. VRT's Moat - The Bet |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | VRT vs. SMCI: Which Data Center Infrastructure Stock Is a Be |
| 2026-06-15 | Industry | ⚪  0 | 0.5 | Finnhub | Here is What to Know Beyond Why Vertiv Holdings Co. (VRT) is |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.43] Dell Maintains Payout as AI Demand Builds
- 🟢 [Buyback|w1.43] Dell Holds Dividend Steady at 63 Cents
- 🟢 [Buyback|w1.43] DELL Edges Up Overnight: Dividend Brings Cheer, But Retail Traders Bel

**📉 Bearish Factors:**
- 🔴 [Rumor|w1.78] Dell (DELL) Faces $70 Million XTX Lawsuit Over Server Pricing

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Buyback | 🟢 +1 | 1.43 | Finnhub | Dell Maintains Payout as AI Demand Builds |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Jim Cramer Says “It’s an Easy Call to Say to Buy Dell and to |
| 2026-06-17 | M&A | ⚪  0 | 4.16 | Finnhub | Dell Technologies Converts 3.44M Silver Lake–Held Class B Sh |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Are You Looking for a Top Momentum Pick? Why Dell Technologi |
| 2026-06-17 | Buyback | 🟢 +1 | 1.43 | Finnhub | Dell Holds Dividend Steady at 63 Cents |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Zacks.com featured highlights include Sterling Infrastructur |
| 2026-06-17 | Buyback | 🟢 +1 | 1.43 | Finnhub | DELL Edges Up Overnight: Dividend Brings Cheer, But Retail T |
| 2026-06-17 | Rumor | 🔴 -1 | 1.78 | Finnhub | Dell (DELL) Faces $70 Million XTX Lawsuit Over Server Pricin |

---

### NASDAQ:MRVL

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
- 🟢 [M&A|w4.16] Marvell Technology (NasdaqGS:MRVL) Gets Nvidia Backing And A $2 Billio
- 🟢 [Industry|w0.6] AAOI, LITE, COHR, MRVL Stocks Bounce Back Overnight: Why AI Photonics 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 4.16 | Finnhub | Marvell Technology (NasdaqGS:MRVL) Gets Nvidia Backing And A |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | AAOI, LITE, COHR, MRVL Stocks Bounce Back Overnight: Why AI  |

---

### NYSE:DOV

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.79 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] All You Need to Know About Dover (DOV) Rating Upgrade to Buy
- 🟢 [Earnings|w2.27] Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 12.8% Under

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Reflecting On General Industrial Machinery Stocks’ Q1 Earnin |
| 2026-06-15 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | All You Need to Know About Dover (DOV) Rating Upgrade to Buy |
| 2026-06-14 | Earnings | 🟢 +1 | 2.27 | Finnhub | Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 1 |

---

### NASDAQ:WWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.87 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Woodward (WWD) Surges 4.7%: Is This an Indication of Further Gains?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Woodward (WWD) Surges 4.7%: Is This an Indication of Further |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.88 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Seagate Technology Stock: Is STX Outperforming the Technology Sector?
- 🟢 [Policy|w0.6] Seagate (STX) Stock Rallies As US Iran Ceasefire Lifts Memory Sector M

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Policy | 🟢 +1 | 0.6 | Finnhub | Seagate (STX) Stock Rallies As US Iran Ceasefire Lifts Memor |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Seagate (STX) Is Up 9.86% in One Week: What You Should Know |
| 2026-06-16 | Earnings | 🟢 +1 | 3.28 | Finnhub | Seagate Technology Stock: Is STX Outperforming the Technolog |

---

### NYSE:DOCN

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Short Sellers May Be Regretting Shorting DigitalOcean Holdings (DOCN) 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Short Sellers May Be Regretting Shorting DigitalOcean Holdin |

---

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Dow Jones Stocks: Honeywell Aerospace Looms As GE Stock Breaks Out
- 🟢 [Earnings|w2.73] GE Aerospace (GE) Laps the Stock Market: Here's Why
- 🟢 [Analyst Action|w1.43] GE Aerospace: LEAP, GEnx, And GE9X Support Further Upside

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.87] Can GE Aerospace Boost Margin Performance Amid Cost Pressures?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Is GE (GE) Quietly Rewiring Its Aerospace Identity Through A |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | General Electric (GE) Stock Looks 2% Above Its Fair Value Na |
| 2026-06-17 | Earnings | 🔴 -1 | 3.87 | Finnhub | Can GE Aerospace Boost Margin Performance Amid Cost Pressure |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | GE Vernova Inc. (GEV) is Attracting Investor Attention: Here |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | GE Stock Charts Golden Cross As Strong Aviation Demand, Defe |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | The Zacks Analyst Blog Highlights Applied Materials, GE, Ast |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | GE Aerospace: LEAP, GEnx, And GE9X Support Further Upside |
| 2026-06-16 | Industry | ⚪  0 | 0.5 | Finnhub | Top Stock Reports for Applied Materials, GE & AstraZeneca |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.45 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Citi lifts PTs on AMAT, LRCX, & KLAC amid booming WFE demand
- 🟢 [Analyst Action|w1.02] Citi bullish on NAND equipment demand; lifts PTs for AMAT, LRCX, KLAC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Citi lifts PTs on AMAT, LRCX, & KLAC amid booming WFE demand |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.51] Is Copper Leverage And Policy Support Altering The Investment Case For
- 🟢 [Industry|w0.5] Freeport-McMoRan (FCX) Beats Stock Market Upswing: What Investors Need
- 🟢 [Analyst Action|w0.5] Is It Worth Investing in Freeport-McMoRan (FCX) Based on Wall Street's

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Freeport-McMoRan (FCX) Beats Stock Market Upswing: What Inve |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Is It Worth Investing in Freeport-McMoRan (FCX) Based on Wal |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Freeport-McMoRan Inc. (FCX) Is a Trending Stock: Facts to Kn |
| 2026-06-12 | Policy | 🟢 +1 | 1.51 | Finnhub | Is Copper Leverage And Policy Support Altering The Investmen |

---

## 🟡 Cautious Long (1)

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.87 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why Is Western Digital (WDC) Stock Rocketing Higher Today
- 🟢 [Industry|w0.6] Western Digital (WDC) is a Great Momentum Stock: Should You Buy?
- 🟢 [Industry|w0.6] Western Digital (WDC) Moves 4.2% Higher: Will This Strength Last?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Is Western Digital (WDC) Stock Rocketing Higher Today |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Western Digital (WDC) is a Great Momentum Stock: Should You  |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Western Digital (WDC) Moves 4.2% Higher: Will This Strength  |
| 2026-06-17 | Rumor | 🟢 +1 | 0.5 | Finnhub | WDC Stock To $1,000? Retail Traders Pile Into Memory Underdo |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did MU, WDC, LION Stocks Surge To 52-Week Highs Today? |

---

## ⚠️ Overheated (4)

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 17.03 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Jabil Inc (JBL) Q3 2026 Earnings Call Highlights: Strong Revenue Growt
- 🟢 [Earnings|w3.87] Jabil (JBL) Surges After Delivering AI-Fueled Earnings Beat
- 🟢 [Earnings|w3.87] Jabil (JBL) Q3 Earnings and Revenues Top Estimates

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jabil Inc (JBL) Q3 2026 Earnings Call Highlights: Strong Rev |
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jabil (JBL) Surges After Delivering AI-Fueled Earnings Beat |
| 2026-06-17 | Earnings | 🟢 +1 | 1.55 | Finnhub | Jabil Inc. (JBL) Q3 2026 Earnings Call Transcript |
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jabil (JBL) Q3 Earnings and Revenues Top Estimates |
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Jabil Inc. (NYSE:JBL) Beats Q3 Estimates, Lifts Full-Year Ou |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 11.89 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Can AMAT's Semiconductor Systems Segment Sustain Momentum in 2026?
- 🟢 [Analyst Action|w3.57] Applied Materials (AMAT) Shares Skyrocket, What You Need To Know
- 🟢 [Analyst Action|w2.55] Citi bullish on NAND equipment demand; lifts PTs for AMAT, LRCX, KLAC

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Applied Materials (AMAT) Shares Skyrocket, What You Need To  |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Applied Materials (AMAT) Climbed Amid Broad-Based Growth Dri |
| 2026-06-17 | Earnings | 🟢 +1 | 3.87 | Finnhub | Can AMAT's Semiconductor Systems Segment Sustain Momentum in |
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | Is Applied Materials (AMAT) a Buy as Wall Street Analysts Lo |
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | MU, AMAT Stocks Rise Premarket: Analysts Justify Bull Case F |
| 2026-06-17 | Analyst Action | 🟢 +1 | 2.55 | Seeking Al | Citi bullish on NAND equipment demand; lifts PTs for AMAT, L |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 13.63 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] HPE (HPE) Stock Sees Fair Value Lift After Q2 Spurs Analyst Target Inc
- 🟢 [Industry|w2.98] Vultr Selects HPE and NVIDIA for Next-Generation AI Infrastructure for
- 🟢 [M&A|w1.66] Citrix and HPE to Deepen Strategic Collaboration on Private Cloud and 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 1.66 | Finnhub | Citrix and HPE to Deepen Strategic Collaboration on Private  |
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | HPE Delivers Unified Agentic IT Operations With GreenLake an |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Hewlett Packard Enterprise (HPE) Stock Could Be 24.6% Underv |
| 2026-06-17 | Industry | 🟢 +1 | 2.98 | Finnhub | Vultr Selects HPE and NVIDIA for Next-Generation AI Infrastr |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Names Benchmark as Its Manufacturing Partner of the Year |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Hewlett Packard Enterprise Company (HPE) Presents at 2026 HP |
| 2026-06-17 | Industry | 🟢 +1 | 1.19 | Finnhub | HPE (NYSE:HPE) Unveils AI Networking Security And Quantum Pu |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | HPE (HPE) Stock Sees Fair Value Lift After Q2 Spurs Analyst  |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 11.43 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance'
- 🟢 [Earnings|w3.28] Arm Holdings' Licensing Momentum Continues to Power Revenue Growth
- 🟢 [Analyst Action|w1.76] Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs 11%

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 0.71 | Finnhub | INTC, ARM, AMD Stocks Gain Today — Bernstein Supercharges AI |
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | AMD, Arm, Intel Get Price-Target Hikes On 'CPU Renaissance' |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | Arm Holdings plc (ARM) Rallied Over Multiple Tailwinds |
| 2026-06-17 | Industry | ⚪  0 | 0.6 | Finnhub | The Zacks Analyst Blog Highlights Advanced Micro Devices, In |
| 2026-06-17 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Arm, AMD and Intel see bullish views at Bernstein as agentic |
| 2026-06-16 | Earnings | 🟢 +1 | 3.28 | Finnhub | Arm Holdings' Licensing Momentum Continues to Power Revenue  |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Holdings: The AI CPU Compounder Is Becoming Indispensabl |
| 2026-06-13 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.87 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why Is Western Digital (WDC) Stock Rocketing Higher Today
- 🟢 [Industry|w0.6] Western Digital (WDC) is a Great Momentum Stock: Should You Buy?
- 🟢 [Industry|w0.6] Western Digital (WDC) Moves 4.2% Higher: Will This Strength Last?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why Is Western Digital (WDC) Stock Rocketing Higher Today |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Western Digital (WDC) is a Great Momentum Stock: Should You  |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Western Digital (WDC) Moves 4.2% Higher: Will This Strength  |
| 2026-06-17 | Rumor | 🟢 +1 | 0.5 | Finnhub | WDC Stock To $1,000? Retail Traders Pile Into Memory Underdo |
| 2026-06-17 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did MU, WDC, LION Stocks Surge To 52-Week Highs Today? |

---

## 🔴 Avoid / Short (2)

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.07 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w0.5] Can Retatrutide Extend Eli Lilly and Co (LLY)’s Lead in Weight Loss Ma

**📉 Bearish Factors:**
- 🔴 [Policy|w3.57] Eli Lilly (LLY) Halves $2.7 Billion Germany Investment Over Europe Dru

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Policy | 🔴 -1 | 3.57 | Finnhub | Eli Lilly (LLY) Halves $2.7 Billion Germany Investment Over  |
| 2026-06-16 | Industry | 🟢 +1 | 0.5 | Finnhub | Can Retatrutide Extend Eli Lilly and Co (LLY)’s Lead in Weig |

---

### NYSE:IFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.02 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.02] JP Morgan Downgrades Intercorp Financial Services (IFS)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🔴 -1 | 3.02 | Finnhub | JP Morgan Downgrades Intercorp Financial Services (IFS) |

---

## ⚪ Watch / Neutral (51)

### NYSE:PWR
- Score: 59/100 | raw: 2.1 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NVT
- Score: 57/100 | raw: 1.69 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 56/100 | raw: 1.43 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 56/100 | raw: 1.5 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GEV
- Score: 56/100 | raw: 1.43 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CINF
- Score: 56/100 | raw: 1.43 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 53/100 | raw: 0.75 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVMI
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TLN
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:C
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 52/100 | raw: 0.55 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MNST
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RELY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FAF
- Score: 48/100 | raw: -0.5 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-18T00:43:13.704Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*