# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-08-29  |  **News Window:** 2026-08-22 ~ 2026-08-29
**Stock Pool:** us_selected.txt (37)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DT** | **76** | 6.17 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 2 | **NYSE:TOST** | **66** | 3.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 3 | **NYSE:WT** | **65** | 3.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 4 | **NYSE:VEEV** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 5 | **NYSE:ASX** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 6 | **NYSE:LTC** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 7 | **NYSE:NEM** | **58** | 1.89 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 8 | **NASDAQ:FIVE** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 9 | **NYSE:BLK** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NASDAQ:DASH** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NYSE:RRC** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NASDAQ:RELY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 14 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NYSE:PATH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 16 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NASDAQ:VRTX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NASDAQ:HOOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:FCX** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:WPM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:APD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:J** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NASDAQ:PANW** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:FAF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:CRWD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NASDAQ:AMZN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:WTM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:GEN** | **48** | -0.39 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 37 | **CBOE:CBOE** | **45** | -1.2 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |

---

## 🟢 Strong Long (1)

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.17 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Dynatrace (DT) Price Target Increased by 21.86% to 59.36
- 🟢 [Analyst Action|w2.1] Morgan Stanley Upgrades Dynatrace (DT)
- 🟢 [Industry|w0.5] Dynatrace (NYSE:DT): Strong Growth Meets a Bull Flag Technical Setup

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-29 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Dynatrace (DT) Price Target Increased by 21.86% to 59.36 |
| 2026-08-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Dynatrace (NYSE:DT): Strong Growth Meets a Bull Flag Technic |
| 2026-08-26 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Morgan Stanley Upgrades Dynatrace (DT) |

---

## 🟢 Mid Long (4)

### NYSE:TOST

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Toast (TOST) Price Target Increased by 11.93% to 39.13
- 🟢 [Industry|w0.84] Toast (NYSE:TOST): Strong Growth Backed by a High-Quality Technical Se

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Toast (TOST) Price Target Increased by 11.93% to 39.13 |
| 2026-08-27 | Industry | 🟢 +1 | 0.84 | Finnhub | Toast (NYSE:TOST): Strong Growth Backed by a High-Quality Te |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] WisdomTree (WT) Price Target Increased by 12.40% to 23.65
- 🟢 [Industry|w0.5] WisdomTree (NYSE:WT) Shows High Growth Momentum and Breakout Setup

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | WisdomTree (WT) Price Target Increased by 12.40% to 23.65 |
| 2026-08-24 | Industry | 🟢 +1 | 0.5 | Finnhub | WisdomTree (NYSE:WT) Shows High Growth Momentum and Breakout |

---

### NYSE:VEEV

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Veeva Systems (VEEV) Price Target Increased by 17.82% to 295.67

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Veeva Systems (VEEV) Price Target Increased by 17.82% to 295 |
| 2026-08-27 | Earnings | ⚪  0 | 0.5 | Seeking Al | Veeva Systems Inc. (VEEV) Q2 2027 Earnings Call Transcript |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] ASE Technology Holding Co.,  - Depositary Receipt (ASX) Price Target I

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | ASE Technology Holding Co.,  - Depositary Receipt (ASX) Pric |
| 2026-08-24 | Industry | ⚪  0 | 0.5 | Finnhub | Will Strong ATM Momentum Continue to Fuel ASX's Margin Growt |

---

## ⚪ Watch / Neutral (32)

### NYSE:LTC
- Score: 58/100 | raw: 1.8 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEM
- Score: 58/100 | raw: 1.89 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FIVE
- Score: 57/100 | raw: 1.6 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BLK
- Score: 55/100 | raw: 1.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:DASH
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RRC
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADAM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PATH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:VRTX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:HOOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FCX
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SCCO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WPM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:APD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:J
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PANW
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FAF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:PRGS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:CRWD
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMZN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:WTM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:GEN
- Score: 48/100 | raw: -0.39 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### CBOE:CBOE
- Score: 45/100 | raw: -1.2 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-08-29T12:29:40.803Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-v4-pro*