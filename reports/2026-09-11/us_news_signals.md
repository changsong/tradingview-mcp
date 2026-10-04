# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-11  |  **News Window:** 2026-09-04 ~ 2026-09-11
**Stock Pool:** us_selected.txt (52)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:LTC** | **72** | 5.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 2 | **NASDAQ:MU** | **69** | 4.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 3 | **NASDAQ:LITE** | **67** | 4.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 4 | **NYSE:WPM** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 5 | **NASDAQ:NBIS** | **65** | 3.53 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 6 | **NYSE:C** | **58** | 2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 7 | **NASDAQ:GEN** | **56** | 1.54 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 8 | **NYSE:APH** | **55** | 1.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 9 | **NASDAQ:PGY** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NYSE:AR** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 11 | **NASDAQ:BGC** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NYSE:ASX** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NYSE:TSM** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 14 | **NASDAQ:STX** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 15 | **NASDAQ:ADUS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 16 | **NYSE:WT** | **51** | 0.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 17 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NASDAQ:HOOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:CF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 26 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:GRAL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:HPE** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 32 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:FIVE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:ASML** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 47 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 49 | **NYSE:SCCO** | **45** | -1.31 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 50 | **NYSE:NEM** | **42** | -2.01 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 51 | **NYSE:ETN** | **42** | -1.85 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 52 | **NYSE:FCX** | **39** | -2.64 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 4/0 | - |

---

## 🟢 Mid Long (5)

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] LTC (LTC) Completed a $200M Senior-Housing Acquisition. Can Higher Ope
- 🟢 [Analyst Action|w1.26] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By
- 🟢 [Analyst Action|w1.08] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | M&A | 🟢 +1 | 2.94 | Finnhub | LTC (LTC) Completed a $200M Senior-Housing Acquisition. Can  |
| 2026-09-06 | Analyst Action | 🟢 +1 | 1.08 | Seeking Al | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |
| 2026-09-05 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Semiconductors Stocks Q2 Highlights: Micron (NASDAQ:MU)
- 🟢 [Industry|w1.19] Micron Technology (NASDAQ:MU): Strong Growth Meets a High-Quality Tech

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Policy | ⚪  0 | 0.71 | Finnhub | Nasdaq, Dow, S&P 500 Futures Rise After 4-Day Market Slide A |
| 2026-09-11 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron Technology (NASDAQ:MU): Strong Growth Meets a High-Qu |
| 2026-09-10 | Earnings | 🟢 +1 | 3.28 | Finnhub | Semiconductors Stocks Q2 Highlights: Micron (NASDAQ:MU) |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report?
- 🟢 [Industry|w0.84] LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAOI?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | Earnings | 🟢 +1 | 3.28 | Finnhub | Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report? |
| 2026-09-09 | Industry | ⚪  0 | 0.84 | Finnhub | Lumentum Holdings Inc. (LITE) Presents at Citi's 2026 Global |
| 2026-09-09 | Industry | 🟢 +1 | 0.84 | Finnhub | LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAO |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] WPM Posts Record Revenues in H126: Is More Upside Ahead?
- 🟢 [Industry|w0.5] Wheaton Precious Metals (NYSE:WPM) Combines High Growth Momentum with 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | Earnings | 🟢 +1 | 3.28 | Finnhub | WPM Posts Record Revenues in H126: Is More Upside Ahead? |
| 2026-09-08 | Industry | 🟢 +1 | 0.5 | Finnhub | Wheaton Precious Metals (NYSE:WPM) Combines High Growth Mome |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.53 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Nebius Just Became Palantir’s Preferred AI Infrastructure Partner. Wha

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | M&A | 🟢 +1 | 3.53 | Finnhub | Nebius Just Became Palantir’s Preferred AI Infrastructure Pa |
| 2026-09-09 | Industry | ⚪  0 | 0.5 | Finnhub | Nebius Group N.V. (NBIS) Presents at Citi's 2026 Global TMT  |

---

## 🔴 Avoid / Short (1)

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **39** / 100 |
| Raw Weighted Score | -2.64 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] FCX's Shares Up 20% in 6 Months: What Should Investors Do Now?
- 🟢 [Industry|w0.5] Freeport-McMoRan Inc. (FCX) Is a Trending Stock: Facts to Know Before 

**📉 Bearish Factors:**
- 🔴 [Policy|w3.02] Copper, FCX Stock Plunge On Tariff Report, Surging Yields; Silver, Gol
- 🔴 [Earnings|w1.31] Why Freeport-McMoRan (FCX) Dipped More Than Broader Market Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | 🟢 +1 | 1.19 | Finnhub | FCX's Shares Up 20% in 6 Months: What Should Investors Do No |
| 2026-09-10 | Earnings | 🔴 -1 | 1.31 | Finnhub | Why Freeport-McMoRan (FCX) Dipped More Than Broader Market T |
| 2026-09-10 | Policy | 🔴 -1 | 3.02 | Finnhub | Copper, FCX Stock Plunge On Tariff Report, Surging Yields; S |
| 2026-09-09 | Industry | 🟢 +1 | 0.5 | Finnhub | Freeport-McMoRan Inc. (FCX) Is a Trending Stock: Facts to Kn |

---

## ⚪ Watch / Neutral (46)

### NYSE:C
- Score: 58/100 | raw: 2 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 56/100 | raw: 1.54 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:APH
- Score: 55/100 | raw: 1.2 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PGY
- Score: 55/100 | raw: 1.21 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASX
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 54/100 | raw: 0.84 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 54/100 | raw: 1.01 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADUS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 51/100 | raw: 0.16 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:HOOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:GRAL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HPE
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:FIVE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ASML
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SCCO
- Score: 45/100 | raw: -1.31 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:NEM
- Score: 42/100 | raw: -2.01 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:ETN
- Score: 42/100 | raw: -1.85 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-11T12:54:02.836Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*