# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-08-30  |  **News Window:** 2026-08-23 ~ 2026-08-30
**Stock Pool:** us_selected.txt (37)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DT** | **72** | 5.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 2 | **NASDAQ:FIVE** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 3 | **NYSE:TOST** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 4 | **NYSE:WT** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 5 | **NYSE:VEEV** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 6 | **NYSE:NEM** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 7 | **NYSE:LTC** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 8 | **NYSE:BLK** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 9 | **NASDAQ:DASH** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 10 | **NYSE:RRC** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NASDAQ:RELY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 13 | **NASDAQ:ADAM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 14 | **NYSE:PATH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 16 | **NASDAQ:VRTX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NASDAQ:HOOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NYSE:FCX** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 19 | **NYSE:SCCO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NYSE:WPM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:APD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:J** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NASDAQ:PANW** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:FAF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:CRWD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NASDAQ:AMZN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:WTM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:ASX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:GEN** | **49** | -0.23 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 37 | **CBOE:CBOE** | **45** | -1.1 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |

---

## 🟢 Mid Long (5)

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Dynatrace (DT) Price Target Increased by 21.86% to 59.36
- 🟢 [Analyst Action|w1.76] Morgan Stanley Upgrades Dynatrace (DT)
- 🟢 [Industry|w0.59] Dynatrace (NYSE:DT): Strong Growth Meets a Bull Flag Technical Setup

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-29 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Dynatrace (DT) Price Target Increased by 21.86% to 59.36 |
| 2026-08-26 | Industry | 🟢 +1 | 0.59 | Finnhub | Dynatrace (NYSE:DT): Strong Growth Meets a Bull Flag Technic |
| 2026-08-26 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Morgan Stanley Upgrades Dynatrace (DT) |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Telsey Advisory Group Maintains Outperform on Five Below, Raises Price
- 🟢 [Analyst Action|w1.76] Mizuho Maintains Outperform on Five Below, Raises Price Target to $278
- 🟢 [Analyst Action|w1.51] Truist Securities Maintains Buy on Five Below, Raises Price Target to 

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.51] Loop Capital Downgrades Five Below to Hold, Announces $250 Price Targe
- 🔴 [Analyst Action|w0.5] Five Below's stretched valuation prompts downgrade at Loop

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Telsey Advisory Group Maintains Outperform on Five Below, Ra |
| 2026-08-26 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Mizuho Maintains Outperform on Five Below, Raises Price Targ |
| 2026-08-25 | Analyst Action | 🔴 -1 | 1.51 | Finnhub | Loop Capital Downgrades Five Below to Hold, Announces $250 P |
| 2026-08-25 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Truist Securities Maintains Buy on Five Below, Raises Price  |
| 2026-08-25 | Analyst Action | 🔴 -1 | 0.5 | Seeking Al | Five Below's stretched valuation prompts downgrade at Loop |

---

### NYSE:TOST

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
- 🟢 [Analyst Action|w2.52] Toast (TOST) Price Target Increased by 11.93% to 39.13
- 🟢 [Industry|w0.5] Toast (NYSE:TOST): Strong Growth Backed by a High-Quality Technical Se

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Toast (TOST) Price Target Increased by 11.93% to 39.13 |
| 2026-08-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Toast (NYSE:TOST): Strong Growth Backed by a High-Quality Te |

---

### NYSE:WT

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
- 🟢 [Analyst Action|w2.52] WisdomTree (WT) Price Target Increased by 12.40% to 23.65
- 🟢 [Industry|w0.5] WisdomTree (NYSE:WT) Shows High Growth Momentum and Breakout Setup

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | WisdomTree (WT) Price Target Increased by 12.40% to 23.65 |
| 2026-08-24 | Industry | 🟢 +1 | 0.5 | Finnhub | WisdomTree (NYSE:WT) Shows High Growth Momentum and Breakout |

---

### NYSE:VEEV

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
- 🟢 [Analyst Action|w2.52] Veeva Systems (VEEV) Price Target Increased by 17.82% to 295.67

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-08-28 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Veeva Systems (VEEV) Price Target Increased by 17.82% to 295 |
| 2026-08-27 | Earnings | ⚪  0 | 0.5 | Seeking Al | Veeva Systems Inc. (VEEV) Q2 2027 Earnings Call Transcript |

---

## ⚪ Watch / Neutral (32)

### NYSE:NEM
- Score: 57/100 | raw: 1.6 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 56/100 | raw: 1.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BLK
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:ASX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:GEN
- Score: 49/100 | raw: -0.23 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### CBOE:CBOE
- Score: 45/100 | raw: -1.1 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-08-30T12:29:16.079Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*