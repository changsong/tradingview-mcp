# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-10  |  **News Window:** 2026-09-03 ~ 2026-09-10
**Stock Pool:** us_selected.txt (75)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:OLLI** | **80** | 7.24 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | - |
| 2 | **NYSE:RIO** | **76** | 6.15 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 3 | **NASDAQ:LITE** | **66** | 3.87 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 4 | **NASDAQ:HOOD** | **65** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 5 | **NYSE:ELF** | **65** | 3.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 6 | **NYSE:AJG** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 7 | **NYSE:J** | **61** | 2.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 8 | **NYSE:APH** | **60** | 2.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 9 | **NASDAQ:GEN** | **59** | 2.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NASDAQ:RELY** | **57** | 1.64 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NYSE:FCX** | **56** | 1.44 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 12 | **NYSE:ASX** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NASDAQ:STX** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 14 | **NYSE:AR** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 15 | **NASDAQ:PGY** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 16 | **NYSE:TSM** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 17 | **NASDAQ:CBRS** | **54** | 0.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 18 | **NASDAQ:ADUS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 19 | **NYSE:SCCO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NYSE:WT** | **51** | 0.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 21 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:WPM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NASDAQ:CRWD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:CF** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:MU** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:FIVE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 42 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:PWR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 46 | **NASDAQ:LIN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NYSE:OKLO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:RKLB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:ETN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NASDAQ:ADI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NYSE:DTM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:MPWR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 57 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 58 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NASDAQ:GRAL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 61 | **NASDAQ:ASML** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 62 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 63 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 64 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 65 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 66 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 67 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 68 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 69 | **NYSE:HG** | **49** | -0.34 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 70 | **NYSE:CRC** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 71 | **NYSE:NEM** | **47** | -0.71 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 72 | **NYSE:MOD** | **46** | -1.01 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 73 | **NASDAQ:VRTX** | **45** | -1.31 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 74 | **NASDAQ:VSAT** | **45** | -1.21 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 75 | **NYSE:SON** | **44** | -1.51 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |

---

## 🟢 Strong Long (2)

### NASDAQ:OLLI

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.24 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Ollie’s (OLLI) Earnings Jump 43% Despite Falling Comparable Sales—Can 
- 🟢 [Earnings|w3.87] Ollie's (OLLI) Q2 2027 Earnings Call Transcript

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expensive?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 3.87 | Finnhub | Ollie’s (OLLI) Earnings Jump 43% Despite Falling Comparable  |
| 2026-09-09 | Earnings | 🟢 +1 | 3.87 | Finnhub | Ollie's (OLLI) Q2 2027 Earnings Call Transcript |
| 2026-09-04 | Industry | 🔴 -1 | 0.5 | Finnhub | Has Ollie's Bargain Outlet Holdings (OLLI) Become Too Expens |
| 2026-09-04 | Earnings | ⚪  0 | 1.64 | Finnhub | Ollie's Bargain Outlet Holdings, Inc. (OLLI) Q2 2026 Earning |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Bernstein Maintains Outperform on Rio Tinto, Raises Price Target to $8
- 🟢 [M&A|w3.53] Rio Tinto to take over Queensland’s Aurukun Bauxite Project
- 🟢 [Policy|w1.21] Ngarlawangga Aboriginal Corporation and Rio Tinto sign Interim Moderni

**📉 Bearish Factors:**
- 🔴 [Policy|w2.16] China tells steel mills to hold off buying iron ore from Rio Tinto - B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Bernstein Maintains Outperform on Rio Tinto, Raises Price Ta |
| 2026-09-08 | M&A | 🟢 +1 | 3.53 | Finnhub | Rio Tinto to take over Queensland’s Aurukun Bauxite Project |
| 2026-09-08 | Industry | ⚪  0 | 0.5 | Finnhub | Domestic Metals commences drilling at Rio Tinto joint ventur |
| 2026-09-08 | Policy | 🟢 +1 | 1.21 | Finnhub | Ngarlawangga Aboriginal Corporation and Rio Tinto sign Inter |
| 2026-09-08 | Policy | 🔴 -1 | 2.16 | Seeking Al | China tells steel mills to hold off buying iron ore from Rio |

---

## 🟢 Mid Long (6)

### NASDAQ:LITE

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
- 🟢 [Earnings|w3.87] LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAOI?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Industry | ⚪  0 | 1.19 | Finnhub | Lumentum Holdings Inc. (LITE) Presents at Citi's 2026 Global |
| 2026-09-09 | Earnings | 🟢 +1 | 3.87 | Finnhub | LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAO |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Robinhood (HOOD) Chain’s Early Revenue Is Explosive. But Can It Last?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Robinhood (HOOD) Chain’s Early Revenue Is Explosive. But Can |
| 2026-09-09 | Industry | ⚪  0 | 0.6 | Finnhub | Robinhood Markets, Inc. (HOOD) Presents at Goldman Sachs Com |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Why Did e.l.f. Beauty (ELF) Move Today?
- 🟢 [Earnings|w1.64] e.l.f. Beauty (ELF) Up 16.4% Since Last Earnings Report: Can It Contin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-06 | Industry | ⚪  0 | 0.5 | Finnhub | e.l.f. Beauty (ELF) Stock Looks Reasonable On Cash Flow Yet  |
| 2026-09-05 | Earnings | 🟢 +1 | 1.91 | Finnhub | Why Did e.l.f. Beauty (ELF) Move Today? |
| 2026-09-05 | Industry | ⚪  0 | 0.5 | Finnhub | e.l.f. Beauty (ELF) Starts 12 Week Board Leadership Course A |
| 2026-09-04 | Earnings | 🟢 +1 | 1.64 | Finnhub | e.l.f. Beauty (ELF) Up 16.4% Since Last Earnings Report: Can |

---

### NYSE:AJG

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] AJG's Risk Management Business Outpaces Brokerage Organic Growth

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Industry | ⚪  0 | 0.84 | Finnhub | Arthur J. Gallagher Stock: Is AJG Underperforming the Financ |
| 2026-09-07 | Earnings | 🟢 +1 | 2.73 | Finnhub | AJG's Risk Management Business Outpaces Brokerage Organic Gr |

---

### NYSE:J

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Jacobs (J) Backlog Hits $28.9B As Guidance Rises Again

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-07 | Earnings | 🟢 +1 | 2.73 | Finnhub | Jacobs (J) Backlog Hits $28.9B As Guidance Rises Again |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Amphenol (APH) Upgraded to Strong Buy: Here's Why
- 🟢 [Industry|w0.5] Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Setup
- 🟢 [Industry|w0.5] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | Industry | ⚪  0 | 0.5 | Seeking Al | Amphenol Corporation (APH) Presents at Citi's 2026 Global TM |
| 2026-09-09 | Industry | ⚪  0 | 0.6 | Finnhub | Amphenol Corporation (APH) Presents at Citi's 2026 Global TM |
| 2026-09-08 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |
| 2026-09-05 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Amphenol (APH) Upgraded to Strong Buy: Here's Why |

---

## ⚪ Watch / Neutral (67)

### NASDAQ:GEN
- Score: 59/100 | raw: 2.22 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 57/100 | raw: 1.64 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:FCX
- Score: 56/100 | raw: 1.44 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASX
- Score: 56/100 | raw: 1.43 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 56/100 | raw: 1.43 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PGY
- Score: 55/100 | raw: 1.21 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 55/100 | raw: 1.19 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CBRS
- Score: 54/100 | raw: 0.86 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADUS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SCCO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 51/100 | raw: 0.21 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WPM
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRGS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWD
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:CF
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:C
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:MU
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:FIVE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PWR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LIN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:OKLO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:RKLB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:ETN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ADI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:DTM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MPWR
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:GRAL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ASML
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HG
- Score: 49/100 | raw: -0.34 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:CRC
- Score: 48/100 | raw: -0.6 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:NEM
- Score: 47/100 | raw: -0.71 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:MOD
- Score: 46/100 | raw: -1.01 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:VRTX
- Score: 45/100 | raw: -1.31 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:VSAT
- Score: 45/100 | raw: -1.21 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:SON
- Score: 44/100 | raw: -1.51 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-10T02:17:27.781Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-v4-pro*