# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-17  |  **News Window:** 2026-06-10 ~ 2026-06-17
**Stock Pool:** us_selected.txt (79)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DELL** | **97** | 24.36 | 🟢 Long (Strong) | Momentum / Hold | High | 11/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:HPE** | **90** | 9.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/0 | Overheated Sentiment (one-sided bullish) |
| 3 | **NASDAQ:INTC** | **89** | 9.44 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:ARM** | **86** | 8.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:JBL** | **83** | 7.82 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 6 | **NASDAQ:AMAT** | **82** | 7.74 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:ASML** | **82** | 10.06 | 🟢 Long (Strong) | Momentum / Hold | High | 13/0 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:C** | **80** | 7.15 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 9 | **NYSE:APH** | **80** | 7.14 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 10 | **NYSE:GE** | **74** | 5.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:LLY** | **72** | 5.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 12 | **NASDAQ:KLAC** | **69** | 4.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:MU** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 14 | **NYSE:DOV** | **66** | 3.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 15 | **NYSE:DOCN** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 16 | **NASDAQ:LRCX** | **64** | 3.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 17 | **NASDAQ:AMD** | **62** | 7.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/0 | - |
| 18 | **NYSE:FCX** | **62** | 2.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 19 | **NASDAQ:EQIX** | **61** | 2.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 20 | **NYSE:GEV** | **58** | 1.93 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 21 | **NASDAQ:PANW** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 22 | **NYSE:SN** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 23 | **NYSE:MS** | **55** | 1.3 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NYSE:TSM** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NYSE:DKS** | **53** | 0.79 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 26 | **NASDAQ:WDC** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NYSE:AIR** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:MNST** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NASDAQ:ALAB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NYSE:RIO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:FLEX** | **50** | -0.07 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 37 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NYSE:NPB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NASDAQ:TLN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 58 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NASDAQ:BHRB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 63 | **NASDAQ:CINF** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 64 | **NASDAQ:KALU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NASDAQ:WWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 69 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 70 | **NYSE:DLR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 71 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 72 | **NASDAQ:CRWV** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 73 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 74 | **NASDAQ:RELY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 75 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 76 | **NYSE:JCI** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 77 | **NASDAQ:MRVL** | **47** | -0.71 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 78 | **NYSE:BAP** | **35** | -3.57 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 1/0 | - |
| 79 | **NYSE:IFS** | **35** | -3.57 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 1/0 | - |

---

## 🟢 Strong Long (6)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **97** / 100 |
| Raw Weighted Score | 24.36 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Dell Wins $1.44B Microsoft License Deal
- 🟢 [M&A|w4.16] DELL Stock Is Down 12% From All-Time High With Bearish Retail Sentimen
- 🟢 [Earnings|w3.87] Dell's Momentum Score Jumps As AI Server Revenue Surges Over 750% Amid

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.71] British billionaire trader sues Dell in £50m data centre row

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | The Dell Story Is No Longer Just About PCs. Here’s Why the S |
| 2026-06-16 | Rumor | 🔴 -1 | 0.71 | Finnhub | British billionaire trader sues Dell in £50m data centre row |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Connection Recognized as Dell’s 2026 North America Channel S |
| 2026-06-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Dell Stock Looks Cheap Here With Higher Analyst Forecasts -  |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | Dell Wins $1.44B Microsoft License Deal |
| 2026-06-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | AI and Non-AI Servers Demand Leads to a Bullish View Around  |
| 2026-06-16 | Earnings | 🟢 +1 | 3.87 | Finnhub | Dell's Momentum Score Jumps As AI Server Revenue Surges Over |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | DELL Stock Is Down 12% From All-Time High With Bearish Retai |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.44 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Intel's new manufacturing tech enters initial production
- 🟢 [Industry|w2.98] Intel begins production of anticipated 18A-P chips, as AI continues to
- 🟢 [Industry|w2.98] Intel Foundry Details Process Milestones and Future Innovation at VLSI

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.6] Intel: Optimism Is Getting Expensive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | Industry | ⚪  0 | 0.7 | Finnhub | S&P 500, Nasdaq, Dow Futures Edge Higher Ahead Of Fed Rate D |
| 2026-06-16 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel's new manufacturing tech enters initial production |
| 2026-06-16 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel begins production of anticipated 18A-P chips, as AI co |
| 2026-06-16 | Industry | 🟢 +1 | 2.98 | Finnhub | Intel Foundry Details Process Milestones and Future Innovati |
| 2026-06-13 | Analyst Action | 🟢 +1 | 0.6 | Seeking Al | Notable analyst calls this week: Pfizer, AMD and Intel among |
| 2026-06-13 | Analyst Action | 🔴 -1 | 0.6 | Seeking Al | Intel: Optimism Is Getting Expensive |
| 2026-06-11 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Intel's Make-Or-Break Moment Is Closer Than You Think |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.74 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Applied Materials (AMAT) Teams Up With EssilorLuxottica To Build AR Sm
- 🟢 [Industry|w2.98] Why Applied Materials Inc (AMAT) Is Making Big Moves in Singapore
- 🟢 [Industry|w0.6] Why Did AMD, WULF, AMAT Stocks Jump To 52-Week Highs?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | Applied Materials (AMAT) Teams Up With EssilorLuxottica To B |
| 2026-06-16 | Industry | 🟢 +1 | 2.98 | Finnhub | Why Applied Materials Inc (AMAT) Is Making Big Moves in Sing |
| 2026-06-16 | Earnings | ⚪  0 | 0.77 | Finnhub | Strong Results Lifted Applied Materials (AMAT) in Q1 |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did AMD, WULF, AMAT Stocks Jump To 52-Week Highs? |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 10.06 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Elon Musk Just Delivered Fantastic News for ASML Stock Investors
- 🟢 [Buyback|w3.02] ASML reports transactions under its current share buyback program
- 🟢 [M&A|w2.45] ASML’s Mistral AI Stake Adds New Angle To Hotly Valued Shares

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Here's Why ASML (ASML) Fell More Than Broader Market
- 🔴 [Industry|w0.5] Forget ASML Holding: 1 Unstoppable AI Cash-Flow Machine to Buy Hand Ov
- 🔴 [Rumor|w0.5] ASML: The Rally May Be Overdone

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🔴 -1 | 0.6 | Finnhub | Here's Why ASML (ASML) Fell More Than Broader Market |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | Elon Musk Just Delivered Fantastic News for ASML Stock Inves |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | ASML Surges 36% in 3 Months: Should Investors Buy the Stock? |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | ASML Holding N.V. (ASML) Rallied on Market Dominance |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | ASML Could Soar Higher in 12 Months and Here’s Why We’d Buy  |
| 2026-06-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ASML: Expensive, Rare, But Still Worth Buying |
| 2026-06-15 | Industry | ⚪  0 | 0.5 | Finnhub | Elon Musk Needs ASML for Terafab. You Don’t Need ASML Stock  |
| 2026-06-15 | Industry | 🔴 -1 | 0.5 | Finnhub | Forget ASML Holding: 1 Unstoppable AI Cash-Flow Machine to B |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] C Sheds Polish Arm, Marks Final Exit From Nore-Core Consumer Business
- 🟢 [Analyst Action|w3.02] Citigroup (C) Stock Valuation After CFO Growth Outlook And Blockchain 
- 🟢 [Industry|w0.6] Citigroup (C) Ascends While Market Falls: Some Facts to Note

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Citigroup (C) Ascends While Market Falls: Some Facts to Note |
| 2026-06-15 | M&A | 🟢 +1 | 3.53 | Finnhub | C Sheds Polish Arm, Marks Final Exit From Nore-Core Consumer |
| 2026-06-15 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Citigroup (C) Stock Valuation After CFO Growth Outlook And B |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Why Amphenol (APH) Stock Is Trading Up Today
- 🟢 [Analyst Action|w3.57] Analyst Raises Amphenol (APH) Price Target Citing AI-Related Growth Op

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Leverage Shares by Themes Continues Expansion of Leveraged S |
| 2026-06-16 | Policy | 🟢 +1 | 3.57 | Finnhub | Why Amphenol (APH) Stock Is Trading Up Today |
| 2026-06-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Analyst Raises Amphenol (APH) Price Target Citing AI-Related |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Amphenol (APH) Stock After 67% Annual Surge Are Growth Expec |

---

## 🟢 Mid Long (10)

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] GE Vernova GridOS Launch Spurs Questions On Growth And Valuation
- 🟢 [Industry|w1.75] Wolfspeed Targets High Voltage Growth With Gen 5 SiC And GE Alliance
- 🟢 [Earnings|w1.31] GE Aerospace (GE) Laps the Stock Market: Here's Why

**📉 Bearish Factors:**
- 🔴 [Policy|w1.51] Old Dominion Freight Line, GE Vernova, and Caterpillar Stocks Trade Do

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Top Stock Reports for Applied Materials, GE & AstraZeneca |
| 2026-06-15 | Earnings | 🟢 +1 | 1.31 | Finnhub | GE Aerospace (GE) Laps the Stock Market: Here's Why |
| 2026-06-15 | Industry | 🟢 +1 | 2.52 | Finnhub | GE Vernova GridOS Launch Spurs Questions On Growth And Valua |
| 2026-06-15 | Industry | ⚪  0 | 0.5 | Finnhub | Dow Jones Stocks: Honeywell Aerospace Looms As GE Stock Brea |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | GE Aerospace Rises 12.2% in Six Months: How Should You Play  |
| 2026-06-13 | Industry | 🟢 +1 | 1.75 | Finnhub | Wolfspeed Targets High Voltage Growth With Gen 5 SiC And GE  |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | SpaceX has a 'historical analogy' in GE, market historian ex |
| 2026-06-11 | Industry | 🟢 +1 | 1.26 | Finnhub | General Electric Links AI Leadership And Space Vehicle Work  |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Eli Lilly (LLY) Buys 4E Therapeutics As Jaypirca Hits Key Leukemia Mil
- 🟢 [Industry|w0.6] Can Retatrutide Extend Eli Lilly and Co (LLY)’s Lead in Weight Loss Ma
- 🟢 [Industry|w0.6] Eli Lilly & Co. (NYSE:LLY): High Growth Momentum Meets Strong Technica

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Can Retatrutide Extend Eli Lilly and Co (LLY)’s Lead in Weig |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | Eli Lilly (LLY) Buys 4E Therapeutics As Jaypirca Hits Key Le |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Eli Lilly & Co. (NYSE:LLY): High Growth Momentum Meets Stron |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Barlcays Lifts KLA (KLAC) Price Target by $500. Here is Why
- 🟢 [Industry|w0.6] KLAC (NASDAQ:KLAC) Is a Rare Value Find With Perfect Valuation and Str
- 🟢 [Industry|w0.5] KLA Corp (NASDAQ:KLAC): A Prime Candidate for the Affordable Growth Sc

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | KLAC (NASDAQ:KLAC) Is a Rare Value Find With Perfect Valuati |
| 2026-06-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Barlcays Lifts KLA (KLAC) Price Target by $500. Here is Why |
| 2026-06-14 | Buyback | ⚪  0 | 1.01 | Finnhub | KLA (KLAC) Stock After Split And Strong AI Outlook Is The Va |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | KLA Corp (NASDAQ:KLAC): A Prime Candidate for the Affordable |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Micron Technology (MU) Wins HBM4 Supplier Role For Nvidia Vera Rubin A
- 🟢 [Industry|w0.6] Micron Technology Inc (MU) Gets Nvidia Nod For AI Memory Supply

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Micron (MU) Falls More Steeply Than Broader Market: What Investors Nee

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🔴 -1 | 0.6 | Finnhub | Micron (MU) Falls More Steeply Than Broader Market: What Inv |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | Micron Technology (MU) Wins HBM4 Supplier Role For Nvidia Ve |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Micron Technology Inc (MU) Gets Nvidia Nod For AI Memory Sup |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Micron Technology (MU) Skyrocketed on Explosive Demand For H |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Seeking Al | Big movers after hours on Thursday: MSCI, MU, AMD |

---

### NYSE:DOV

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 12.8% Under
- 🟢 [Analyst Action|w1.21] All You Need to Know About Dover (DOV) Rating Upgrade to Buy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | All You Need to Know About Dover (DOV) Rating Upgrade to Buy |
| 2026-06-14 | Earnings | 🟢 +1 | 2.73 | Finnhub | Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 1 |

---

### NYSE:DOCN

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Short Sellers May Be Regretting Shorting DigitalOcean Holdings (DOCN) 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Short Sellers May Be Regretting Shorting DigitalOcean Holdin |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Brokers Suggest Investing in Lam Research (LRCX): Read This Before Pla
- 🟢 [Industry|w1.19] Lam Research (LRCX) Is Betting On Advanced Packaging For 50% Growth In
- 🟢 [Industry|w0.6] How Much Upside Can LRCX Stock's Growth Deliver?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Why Lam Research (LRCX) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Decoding LRCX Stock's Premium Valuation |
| 2026-06-16 | Industry | 🔴 -1 | 0.6 | Finnhub | Why Lam Research (LRCX) Dipped More Than Broader Market Toda |
| 2026-06-16 | Industry | 🟢 +1 | 1.19 | Finnhub | Lam Research (LRCX) Is Betting On Advanced Packaging For 50% |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | How Much Upside Can LRCX Stock's Growth Deliver? |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Lam Research (LRCX) Stands Out on Strong Demand |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Lam Research (LRCX) a Solid Growth Stock? 3 Reasons to Th |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Buy, Hold, or Sell: Lam Research Rocketed 21% Off Its June L |
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Brokers Suggest Investing in Lam Research (LRCX): Read This  |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 7.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.9] AMD (AMD) Signs Rackspace Deal To Build 30 MW Enterprise AI Cloud
- 🟢 [M&A|w4.16] AMD and Rackspace Sign 30 MW AI Compute Deal for Regulated Enterprises
- 🟢 [M&A|w4.16] New AI Memory Deal Sends AMD Shares Higher

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] Why Cathie Wood Is Selling AMD Stock
- 🔴 [Analyst Action|w3.57] Cathie Wood's ARKK Cuts BMNR Stake On Bitmine's Holdings Pop, Joins Tr
- 🔴 [Earnings|w1.55] Advanced Micro Devices (AMD) Dips More Than Broader Market: What You S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-17 | M&A | 🟢 +1 | 4.9 | Finnhub | AMD (AMD) Signs Rackspace Deal To Build 30 MW Enterprise AI  |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | AMD deal sparks Rackspace stock surge as company cuts jobs |
| 2026-06-16 | Earnings | 🔴 -1 | 1.55 | Finnhub | Advanced Micro Devices (AMD) Dips More Than Broader Market:  |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD and Rackspace Sign 30 MW AI Compute Deal for Regulated E |
| 2026-06-16 | Industry | ⚪  0 | 0.6 | Finnhub | Advanced Micro Devices Inc (AMD) and Imperial College Team U |
| 2026-06-16 | M&A | 🟢 +1 | 4.16 | Finnhub | New AI Memory Deal Sends AMD Shares Higher |
| 2026-06-16 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | Why Cathie Wood Is Selling AMD Stock |
| 2026-06-16 | Industry | 🔴 -1 | 0.6 | Finnhub | Intel Tumbles 7% Despite BoA Double Upgrade, AMD Slides 6% a |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.76] Is Copper Leverage And Policy Support Altering The Investment Case For
- 🟢 [Analyst Action|w0.6] Is It Worth Investing in Freeport-McMoRan (FCX) Based on Wall Street's
- 🟢 [Industry|w0.5] Freeport-McMoRan (FCX) Beats Stock Market Upswing: What Investors Need

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Freeport-McMoRan (FCX) Beats Stock Market Upswing: What Inve |
| 2026-06-15 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Is It Worth Investing in Freeport-McMoRan (FCX) Based on Wal |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Freeport-McMoRan Inc. (FCX) Is a Trending Stock: Facts to Kn |
| 2026-06-12 | Policy | 🟢 +1 | 1.76 | Finnhub | Is Copper Leverage And Policy Support Altering The Investmen |

---

### NASDAQ:EQIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.61 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Equinix Inc (EQIX) Added to Citi’s Focus List. Here’s What That Means
- 🟢 [Industry|w0.6] Is Equinix (EQIX) Stock Outpacing Its Finance Peers This Year?
- 🟢 [Industry|w0.5] Solid Results Lifted Equinix (EQIX) in Q1

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Is Equinix (EQIX) Stock Outpacing Its Finance Peers This Yea |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Solid Results Lifted Equinix (EQIX) in Q1 |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Equinix (EQIX) Outperforms Broader Market: What You Need to  |
| 2026-06-11 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Equinix Inc (EQIX) Added to Citi’s Focus List. Here’s What T |

---

## ⚠️ Overheated (3)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Bull of the Day: Hewlett Packard (HPE)
- 🟢 [Industry|w0.6] HPE Flexes Juniper Muscles In AI Networking At Discover Event
- 🟢 [Industry|w0.6] HPE Expands Self-Driving Networks Across Edge, Campus, Data Center, an

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Flexes Juniper Muscles In AI Networking At Discover Even |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Expands Self-Driving Networks Across Edge, Campus, Data  |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Brings Agentic AI Into Production With NVIDIA, Deliverin |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | TD SYNNEX Expands HPE Unleash AI Solutions to Accelerate Par |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | 11:11 Systems Named 2026 HPE Service Provider Partner of the |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | HPE Rolls Out New Agentic AI Innovations, Deploys Secure AI  |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | CloudCasa Expands HPE Partnership with Disaster Recovery for |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | TD SYNNEX Recognized with Multiple 2026 HPE Partner of the Y |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Arm Holdings' Licensing Momentum Continues to Power Revenue Growth
- 🟢 [Analyst Action|w2.1] Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs 11%
- 🟢 [Policy|w1.08] AMD, Micron, Arm lead chips higher as Trump signals Iran breakthrough

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Earnings | 🟢 +1 | 3.87 | Finnhub | Arm Holdings' Licensing Momentum Continues to Power Revenue  |
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Holdings: The AI CPU Compounder Is Becoming Indispensabl |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Intel, AMD, Arm, and Other Artificial Intelligence (AI)  |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Rockets 11%, Qualcomm Rises 5%: Who’s Winning the Chip-A |
| 2026-06-12 | Rumor | ⚪  0 | 0.5 | Finnhub | Is Arm Holdings plc (ARM) A Good Stock To Buy Now? |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Buy, Hold, or Sell: Arm Holdings Shed 25% to Clear the Air a |
| 2026-06-11 | Policy | 🟢 +1 | 1.08 | Seeking Al | AMD, Micron, Arm lead chips higher as Trump signals Iran bre |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.82 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Jabil (JBL) Stock Valuation After New Adani AI Data Center Alliance In
- 🟢 [Earnings|w1.55] Is Jabil (JBL) a 'Buy' Ahead of Its Upcoming Earnings Announcement?
- 🟢 [Earnings|w0.77] Will Jabil (JBL) Beat Estimates Again in Its Next Earnings Report?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Earnings | 🟢 +1 | 0.77 | Finnhub | Will Jabil (JBL) Beat Estimates Again in Its Next Earnings R |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Are You Looking for a Top Momentum Pick? Why Jabil (JBL) is  |
| 2026-06-16 | Earnings | 🟢 +1 | 1.55 | Finnhub | Is Jabil (JBL) a 'Buy' Ahead of Its Upcoming Earnings Announ |
| 2026-06-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Jabil, Inc. (JBL) Hit a 52 Week High, Can the Run Continue? |
| 2026-06-16 | Earnings | 🟢 +1 | 0.77 | Finnhub | Jabil (JBL) Reports Q2: Everything You Need To Know Ahead Of |
| 2026-06-15 | M&A | 🟢 +1 | 3.53 | Finnhub | Jabil (JBL) Stock Valuation After New Adani AI Data Center A |

---

## 🔴 Avoid / Short (2)

### NYSE:BAP

| Metric | Detail |
|--------|--------|
| Normalized Score | **35** / 100 |
| Raw Weighted Score | -3.57 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] JP Morgan Downgrades Credicorp (BAP)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | JP Morgan Downgrades Credicorp (BAP) |

---

### NYSE:IFS

| Metric | Detail |
|--------|--------|
| Normalized Score | **35** / 100 |
| Raw Weighted Score | -3.57 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w3.57] JP Morgan Downgrades Intercorp Financial Services (IFS)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-16 | Analyst Action | 🔴 -1 | 3.57 | Finnhub | JP Morgan Downgrades Intercorp Financial Services (IFS) |

---

## ⚪ Watch / Neutral (58)

### NYSE:GEV
- Score: 58/100 | raw: 1.93 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 57/100 | raw: 1.64 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 56/100 | raw: 1.51 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 55/100 | raw: 1.3 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 53/100 | raw: 0.79 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WDC
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:FLEX
- Score: 50/100 | raw: -0.07 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NPB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TLN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BHRB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CINF
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KALU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:WWD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DLR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWV
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RELY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:JCI
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:MRVL
- Score: 47/100 | raw: -0.71 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-17T02:52:47.798Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*