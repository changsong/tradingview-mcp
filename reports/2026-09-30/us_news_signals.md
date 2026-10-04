# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-30  |  **News Window:** 2026-09-23 ~ 2026-09-30
**Stock Pool:** us_selected.txt (56)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:CRWD** | **76** | 6.33 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 2 | **NASDAQ:ASML** | **71** | 5.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 3 | **NYSE:BE** | **69** | 4.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 4 | **NASDAQ:WDC** | **66** | 3.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 5 | **NASDAQ:MU** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 6 | **NYSE:P** | **64** | 3.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 7 | **NASDAQ:HOOD** | **62** | 2.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 8 | **NYSE:VEEV** | **62** | 2.76 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 9 | **NASDAQ:META** | **61** | 3.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 20/0 | - |
| 10 | **NYSE:CLS** | **61** | 2.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 11 | **NASDAQ:SNDK** | **60** | 2.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 12 | **NASDAQ:MSFT** | **59** | 2.12 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/0 | - |
| 13 | **NYSE:ETN** | **59** | 2.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 14 | **NASDAQ:VICR** | **59** | 2.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 15 | **NASDAQ:PANW** | **58** | 2.02 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 16 | **NYSE:ANET** | **58** | 2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 17 | **NASDAQ:INTC** | **58** | 1.87 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/0 | - |
| 18 | **NYSE:GRMN** | **58** | 1.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 19 | **NYSE:TT** | **58** | 1.93 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 20 | **NYSE:WT** | **57** | 1.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 21 | **NASDAQ:SANM** | **57** | 1.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 22 | **NASDAQ:VRTX** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 23 | **NYSE:APH** | **56** | 1.34 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NASDAQ:GRAL** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 25 | **NYSE:NGG** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 26 | **NASDAQ:STX** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NASDAQ:ENTG** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NYSE:LLY** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NYSE:SN** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 30 | **NASDAQ:ON** | **54** | 0.96 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/0 | - |
| 31 | **NYSE:DY** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 32 | **NASDAQ:LITE** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:AEHR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 34 | **NYSE:JOE** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NYSE:HGTY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **NASDAQ:ARM** | **51** | 0.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/0 | - |
| 37 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:TEM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NYSE:TSM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 42 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:ELF** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 44 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:SARO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:LYB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **OTC:IFNNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NASDAQ:AEIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 52 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 53 | **NYSE:DT** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 54 | **NYSE:KEYS** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 55 | **NASDAQ:FSLR** | **46** | -0.99 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 56 | **NASDAQ:PLTR** | **45** | -1.19 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |

---

## 🟢 Mid Long (9)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w2.52] ASML reports transactions under its current share buyback program
- 🟢 [Analyst Action|w1.21] ASML Stock Surges 3.8% as AI Rebound Returns to Lithography
- 🟢 [Earnings|w1.09] ASML (ASML) Increases Despite Market Slip: Here's What You Need to Kno

**📉 Bearish Factors:**
- 🔴 [Policy|w1.01] ASML Has a China Warning for Trump: Too Much Pressure Could Create a C
- 🔴 [Earnings|w0.77] ASML, TSM Earnings Could Expose a New Risk for the AI Trade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🔴 -1 | 0.77 | Finnhub | ASML, TSM Earnings Could Expose a New Risk for the AI Trade |
| 2026-09-30 | Industry | 🟢 +1 | 0.6 | Finnhub | ASML Holding N.V. vs. Marvell Technology: Which Technology S |
| 2026-09-30 | Buyback | ⚪  0 | 1.43 | Finnhub | Does ASML (ENXTAM:ASML) Share Buybacks Mask Rising Geopoliti |
| 2026-09-30 | Earnings | ⚪  0 | 0.55 | Seeking Al | ASML, TSM earnings could test market expectations, Sara Awad |
| 2026-09-29 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | ASML Stock Surges 3.8% as AI Rebound Returns to Lithography |
| 2026-09-29 | Industry | 🟢 +1 | 0.5 | Finnhub | KLAC's Backlog Surges on AI Demand: Can It Outpace AMAT & AS |
| 2026-09-28 | Earnings | 🟢 +1 | 1.09 | Finnhub | ASML (ASML) Increases Despite Market Slip: Here's What You N |
| 2026-09-28 | Buyback | 🟢 +1 | 2.52 | Finnhub | ASML reports transactions under its current share buyback pr |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] BE Stock Recovers After Monday Slide On Analyst Support: Peers FCEL, P
- 🟢 [Industry|w1.19] Bloom Energy (NYSE:BE) Stock Screens Well on High Growth and Improving
- 🟢 [Industry|w1.19] Bloom Energy (BE) Stock Still Looks Undervalued After a 24x Run

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Bloom Energy (NYSE:BE) Stock Screens Well on High Growth and |
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Bloom Energy (BE) Stock Still Looks Undervalued After a 24x  |
| 2026-09-29 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | BE Stock Recovers After Monday Slide On Analyst Support: Pee |
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Bloom Energy Is Up More Than 200% So Far This Year. What Com |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] S&P Outlook Shift And AI Storage Push Could Be A Game Changer For West
- 🟢 [Earnings|w1.09] Spotting Winners: Western Digital (NASDAQ:WDC) And Semiconductors Stoc
- 🟢 [Industry|w0.5] Can AI Storage Become the Next Big Catalyst for Newegg Commerce (NEGG)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Can AI Storage Become the Next Big Catalyst for Newegg Comme |
| 2026-09-28 | Earnings | 🟢 +1 | 1.09 | Finnhub | Spotting Winners: Western Digital (NASDAQ:WDC) And Semicondu |
| 2026-09-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Western Digital (NASDAQ:WDC): Strong Growth With a High-Qual |
| 2026-09-26 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | S&P Outlook Shift And AI Storage Push Could Be A Game Change |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.55] MU Stock Rises Ahead Of Crucial Q4 Earnings Report: Investors, Analyst
- 🟢 [Industry|w1.01] Micron Technology (MU) Could Be 47% Undervalued On Its Enterprise Memo
- 🟢 [Industry|w1.01] S&P 500, Dow Extend Losses From Elevated Yield Pressure — SPCX, TGT, A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 1.55 | Finnhub | MU Stock Rises Ahead Of Crucial Q4 Earnings Report: Investor |
| 2026-09-30 | Industry | ⚪  0 | 1.19 | Finnhub | Why Are Nasdaq Futures Rising Premarket? MU, TSLA, CAPR, VND |
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Micron Technology (MU) Could Be 47% Undervalued On Its Enter |
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | S&P 500, Dow Extend Losses From Elevated Yield Pressure — SP |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Everpure (P): Every Analyst Raised Targets After Analyst Day, Free Cas
- 🟢 [Industry|w1.19] Everpure (P) Unveils AI Data Platform Upgrades With Faster Inference A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Everpure (P) Unveils AI Data Platform Upgrades With Faster I |
| 2026-09-28 | Industry | ⚪  0 | 0.5 | Finnhub | VNT vs. P: Which Stock Should Value Investors Buy Now? |
| 2026-09-27 | Earnings | 🟢 +1 | 2.27 | Finnhub | Everpure (P): Every Analyst Raised Targets After Analyst Day |
| 2026-09-25 | Industry | ⚪  0 | 0.5 | Finnhub | US Stock Market Today: S&P 500 Futures Slip As Hot Growth Ke |
| 2026-09-24 | Industry | ⚪  0 | 0.5 | Seeking Al | Everpure, Inc. (P) Shareholder/Analyst Call Transcript |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] HOOD Stock Rises Overnight: Robinhood Unveils Weekend Trading, AI Agen

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | ⚪  0 | 1.19 | Finnhub | Can Robinhood’s (HOOD) Financial Super-App Ambitions Create  |
| 2026-09-30 | Industry | 🟢 +1 | 2.98 | Finnhub | HOOD Stock Rises Overnight: Robinhood Unveils Weekend Tradin |

---

### NASDAQ:META

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 20 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] META Eyes Best Month Since 2013 On Muse AI Strength
- 🟢 [Industry|w1.19] Meta Platforms Is Up Nearly 25% in September. Does It Have Room to Ris
- 🟢 [Policy|w0.71] Google, Anthropic, Meta, Nvidia, OpenAI, xAI Executives Sign White Hou

**📉 Bearish Factors:**
- 🔴 [Policy|w1.43] Meta cut its tax bill billions by labeling AI data centers experimenta
- 🔴 [Industry|w0.72] Meta Platforms: Why Missing The Rally May Be The Better Trade
- 🔴 [Analyst Action|w0.71] Meta Is Priced For Success, Oracle For Failure: Take The Other Side Of

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Policy | 🔴 -1 | 1.43 | Finnhub | Meta cut its tax bill billions by labeling AI data centers e |
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Meta Platforms Is Up Nearly 25% in September. Does It Have R |
| 2026-09-30 | Analyst Action | ⚪  0 | 0.71 | Finnhub | Truist Assesses Potential Impact of Meta Muse AI Agent on On |
| 2026-09-30 | Policy | 🟢 +1 | 0.71 | Finnhub | Google, Anthropic, Meta, Nvidia, OpenAI, xAI Executives Sign |
| 2026-09-30 | Rumor | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Says Meta Must Be Seen as an ‘Enterprise Company’ |
| 2026-09-30 | Industry | 🟢 +1 | 0.6 | Finnhub | HighLevel connects to Muse, a new AI product from Meta, brin |
| 2026-09-30 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | META Eyes Best Month Since 2013 On Muse AI Strength |
| 2026-09-30 | Industry | ⚪  0 | 0.6 | Finnhub | Booking Holdings: Meta's Muse Doesn't Break The ~9% Sharehol |

---

### NYSE:CLS

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
- 🟢 [Industry|w1.01] Celestica (CLS) Increases Despite Market Slip: Here's What You Need to
- 🟢 [Analyst Action|w0.6] Brokers Suggest Investing in Celestica (CLS): Read This Before Placing
- 🟢 [Industry|w0.5] Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Before Bettin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] What Does Sandisk (SNDK) AI Data Center Momentum Mean For Its Stock?
- 🟢 [Industry|w1.19] Sandisk (SNDK) Could Be 19% Undervalued After Its Memory Forum Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | Sandisk (SNDK) Could Be 19% Undervalued After Its Memory For |
| 2026-09-29 | Earnings | 🟢 +1 | 1.31 | Finnhub | What Does Sandisk (SNDK) AI Data Center Momentum Mean For It |

---

## 🟡 Cautious Long (1)

### NYSE:VEEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.66] Veeva (VEEV) Down 2.6% Since Last Earnings Report: Can It Rebound?
- 🟢 [Analyst Action|w0.6] Brokers Suggest Investing in Veeva (VEEV): Read This Before Placing a 
- 🟢 [Industry|w0.5] Veeva Systems (VEEV) Outperforms Broader Market: What You Need to Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Brokers Suggest Investing in Veeva (VEEV): Read This Before  |
| 2026-09-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Veeva Systems (VEEV) Outperforms Broader Market: What You Ne |
| 2026-09-25 | Earnings | 🟢 +1 | 0.66 | Finnhub | Veeva (VEEV) Down 2.6% Since Last Earnings Report: Can It Re |
| 2026-09-25 | Industry | 🟢 +1 | 0.5 | Finnhub | How Investors Are Reacting To Veeva Systems (VEEV) Expanding |
| 2026-09-24 | Industry | 🟢 +1 | 0.5 | Finnhub | Veeva Systems (VEEV) Could Be 29% Undervalued Following Its  |

---

## ⚠️ Overheated (1)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.33 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Policy|w2.52] CrowdStrike (CRWD) is Clearing Hurdles. Can its Financial Momentum Do 
- 🟢 [Industry|w1.19] CrowdStrike Holdings (CRWD) Falcon Is Now Available In An AI Marketpla
- 🟢 [Industry|w1.01] PANW, CRWD, ZS Lead Nasdaq-100 Gains As Nvidia's AI Agent Safety Push,

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 1.19 | Finnhub | CrowdStrike Holdings (CRWD) Falcon Is Now Available In An AI |
| 2026-09-30 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did IOVA, ABCL, CRWD Stocks Surge To 52-Week Highs Today |
| 2026-09-29 | Industry | ⚪  0 | 0.5 | Finnhub | NewsOut Expands Market Coverage to SpaceX (NASDAQ:SPCX), NVI |
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | PANW, CRWD, ZS Lead Nasdaq-100 Gains As Nvidia's AI Agent Sa |
| 2026-09-29 | Industry | 🟢 +1 | 1.01 | Finnhub | Did New Falcon Partner Integrations in Cloud and AI Security |
| 2026-09-28 | Policy | 🟢 +1 | 2.52 | Finnhub | CrowdStrike (CRWD) is Clearing Hurdles. Can its Financial Mo |

---

## ⚠️ Risk Pattern (1)

### NYSE:VEEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.66] Veeva (VEEV) Down 2.6% Since Last Earnings Report: Can It Rebound?
- 🟢 [Analyst Action|w0.6] Brokers Suggest Investing in Veeva (VEEV): Read This Before Placing a 
- 🟢 [Industry|w0.5] Veeva Systems (VEEV) Outperforms Broader Market: What You Need to Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Brokers Suggest Investing in Veeva (VEEV): Read This Before  |
| 2026-09-25 | Industry | 🟢 +1 | 0.5 | Finnhub | Veeva Systems (VEEV) Outperforms Broader Market: What You Ne |
| 2026-09-25 | Earnings | 🟢 +1 | 0.66 | Finnhub | Veeva (VEEV) Down 2.6% Since Last Earnings Report: Can It Re |
| 2026-09-25 | Industry | 🟢 +1 | 0.5 | Finnhub | How Investors Are Reacting To Veeva Systems (VEEV) Expanding |
| 2026-09-24 | Industry | 🟢 +1 | 0.5 | Finnhub | Veeva Systems (VEEV) Could Be 29% Undervalued Following Its  |

---

## ⚪ Watch / Neutral (45)

### NASDAQ:MSFT
- Score: 59/100 | raw: 2.12 | News: 15 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ETN
- Score: 59/100 | raw: 2.19 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 59/100 | raw: 2.14 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 58/100 | raw: 2.02 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ANET
- Score: 58/100 | raw: 2 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 58/100 | raw: 1.87 | News: 11 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 58/100 | raw: 1.91 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 58/100 | raw: 1.93 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 57/100 | raw: 1.71 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 57/100 | raw: 1.61 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 57/100 | raw: 1.6 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:APH
- Score: 56/100 | raw: 1.34 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GRAL
- Score: 55/100 | raw: 1.26 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NGG
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ENTG
- Score: 54/100 | raw: 0.84 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LLY
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 54/100 | raw: 0.84 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ON
- Score: 54/100 | raw: 0.96 | News: 7 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DY
- Score: 53/100 | raw: 0.66 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LITE
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 52/100 | raw: 0.5 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ARM
- Score: 51/100 | raw: 0.25 | News: 10 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TEM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TSM
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ELF
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SARO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LYB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:IFNNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AEIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DT
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:KEYS
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:FSLR
- Score: 46/100 | raw: -0.99 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:PLTR
- Score: 45/100 | raw: -1.19 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-30T12:50:00.140Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*