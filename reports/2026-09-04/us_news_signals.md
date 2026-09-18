# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-04  |  **News Window:** 2026-08-28 ~ 2026-09-04
**Stock Pool:** us_selected.txt (36)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:LTC** | **86** | 8.57 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 2 | **NYSE:CF** | **63** | 3.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 3 | **NASDAQ:CRWD** | **61** | 2.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 4 | **NASDAQ:VRTX** | **60** | 2.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 5 | **NYSE:J** | **56** | 1.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 6 | **NYSE:APH** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 7 | **NYSE:WPM** | **55** | 1.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 8 | **NASDAQ:ACGL** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 9 | **NASDAQ:RELY** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 10 | **NASDAQ:KRYS** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NASDAQ:DASH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 12 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 13 | **NASDAQ:HOOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 14 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NYSE:NEM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 16 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NASDAQ:PRGS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:AJG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 20 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:FAF** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 22 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NYSE:SQM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 24 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:AR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NASDAQ:ADUS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:PATH** | **48** | -0.68 | ⚪ No Trade (Neutral) | Watch | Low | 7/0 | Bullish-to-Bearish Reversal (reversal) |
| 36 | **NYSE:FCX** | **44** | -1.55 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |

---

## 🟢 Strong Long (1)

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.57 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] LTC Properties Acquires Four SHOP Communities In Minnesota For $200M
- 🟢 [M&A|w2.52] LTC Properties announces $200M SHOP acquisition
- 🟢 [Analyst Action|w2.52] Wells Fargo Maintains Equal-Weight on LTC Properties, Raises Price Tar

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | M&A | 🟢 +1 | 3.53 | Finnhub | LTC Properties Acquires Four SHOP Communities In Minnesota F |
| 2026-09-02 | M&A | 🟢 +1 | 2.52 | Seeking Al | LTC Properties announces $200M SHOP acquisition |
| 2026-09-01 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Wells Fargo Maintains Equal-Weight on LTC Properties, Raises |

---

## 🟢 Mid Long (3)

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] CF Industries: Still Misunderstood, Still Undervalued
- 🟢 [Industry|w0.84] CF Shares Up 15% in 3 Months: Here's What's Driving the Upside
- 🟢 [Industry|w0.5] CF Industries (NYSE:CF) Exhibits Technical Strength and Bull Flag Brea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | CF Industries: Still Misunderstood, Still Undervalued |
| 2026-09-01 | Industry | 🟢 +1 | 0.84 | Finnhub | CF Shares Up 15% in 3 Months: Here's What's Driving the Upsi |
| 2026-08-31 | Industry | 🟢 +1 | 0.5 | Finnhub | CF Industries (NYSE:CF) Exhibits Technical Strength and Bull |
| 2026-08-29 | Industry | 🟢 +1 | 0.5 | Finnhub | CF Industries (NYSE:CF) Shows High Growth Momentum and Break |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.55] Jim Cramer Explains Why CrowdStrike (CRWD) Upended the Tech Bear Thesi
- 🟢 [Industry|w1.19] Jim Cramer Calls CrowdStrike (CRWD) a Cybersecurity Heavy Hitter

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | 🟢 +1 | 1.55 | Finnhub | Jim Cramer Explains Why CrowdStrike (CRWD) Upended the Tech  |
| 2026-09-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Jim Cramer Calls CrowdStrike (CRWD) a Cybersecurity Heavy Hi |
| 2026-09-03 | Industry | ⚪  0 | 0.5 | Seeking Al | CrowdStrike Holdings, Inc. (CRWD) Presents at Fal.con, Las V |

---

### NASDAQ:VRTX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Why Is Vertex (VRTX) Up 14.4% Since Last Earnings Report?
- 🟢 [Analyst Action|w1.01] Vertex Pharmaceuticals (VRTX) Could Be 3% Undervalued If Its Pipeline 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | 🟢 +1 | 1.31 | Finnhub | Why Is Vertex (VRTX) Up 14.4% Since Last Earnings Report? |
| 2026-09-02 | Analyst Action | ⚪  0 | 1.21 | Finnhub | Vertex (VRTX) Stock Trades At A Premium On Earnings Yet Look |
| 2026-09-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Vertex Pharmaceuticals (VRTX) Could Be 3% Undervalued If Its |

---

## ⚪ Watch / Neutral (32)

### NYSE:J
- Score: 56/100 | raw: 1.55 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:APH
- Score: 56/100 | raw: 1.36 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WPM
- Score: 55/100 | raw: 1.21 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ACGL
- Score: 55/100 | raw: 1.19 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 53/100 | raw: 0.66 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:DASH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:HOOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NEM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PRGS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AJG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FAF
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SQM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADUS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
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

### NYSE:PATH
- Score: 48/100 | raw: -0.68 | News: 7 kept / 0 dropped | No clear directional bias — stay flat
- Patterns: Bullish-to-Bearish Reversal (reversal)

### NYSE:FCX
- Score: 44/100 | raw: -1.55 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-04T08:27:27.273Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-v4-pro*