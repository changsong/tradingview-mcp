# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-16  |  **News Window:** 2026-07-09 ~ 2026-07-16
**Stock Pool:** us_selected.txt (12)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:ASML** | **99** | 28.57 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:MS** | **80** | 7.15 | 🟢 Long (Strong) | Momentum / Hold | High | 2/0 | - |
| 3 | **NASDAQ:AMD** | **80** | 7.29 | 🟢 Long (Strong) | Momentum / Hold | High | 6/0 | - |
| 4 | **NASDAQ:CRWD** | **72** | 5.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 5 | **NYSE:GE** | **58** | 8.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 16/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:MNST** | **57** | 1.65 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 7 | **NASDAQ:RELY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 8 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 9 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 10 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 11 | **NYSE:TT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NYSE:IRM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |

---

## 🟢 Strong Long (2)

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Morgan Stanley (MS) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w3.28] Morgan Stanley (MS) Q2 2026 Earnings Call Highlights: Record Revenues 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-16 | Earnings | 🟢 +1 | 3.87 | Finnhub | Morgan Stanley (MS) Q2 2026 Earnings Call Transcript |
| 2026-07-15 | Earnings | 🟢 +1 | 3.28 | Finnhub | Morgan Stanley (MS) Q2 2026 Earnings Call Highlights: Record |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Why AMD Stock Is Falling Premarket Today Despite Fresh Price Target Hi
- 🟢 [Analyst Action|w3.02] AMD’s hidden AI weapon may finally be exposed
- 🟢 [Industry|w0.6] Newegg Launches North America Exclusive AMD Ryzen™ 7 7700X3D Processor

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] AMD: Now Is Really Not The Time To Be Greedy

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-16 | Industry | 🟢 +1 | 0.6 | Finnhub | Newegg Launches North America Exclusive AMD Ryzen™ 7 7700X3D |
| 2026-07-16 | Industry | 🟢 +1 | 0.6 | Finnhub | AMD Appoints Alan Smith as Newest Corporate Fellow |
| 2026-07-16 | Industry | ⚪  0 | 0.6 | Finnhub | Nvidia vs. AMD vs. Cerebras: Which Is the Best AI Inference  |
| 2026-07-16 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Why AMD Stock Is Falling Premarket Today Despite Fresh Price |
| 2026-07-15 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | AMD’s hidden AI weapon may finally be exposed |
| 2026-07-13 | Industry | 🔴 -1 | 0.5 | Seeking Al | AMD: Now Is Really Not The Time To Be Greedy |

---

## 🟢 Mid Long (1)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] Why Inflation Data Just Lit A Fire Under CRWD Stock
- 🟢 [Earnings|w1.31] CrowdStrike Holdings (CRWD) Stock Drops Despite Market Gains: Importan
- 🟢 [Industry|w1.01] CRWD, PANW, NET, ZS: One Cybersecurity Stock Won Over Retail Investors

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-16 | Industry | ⚪  0 | 0.6 | Finnhub | Why Did AAPL, CRWD, XYZ Stocks Hit 52-Week Highs Today? |
| 2026-07-15 | Earnings | 🟢 +1 | 1.31 | Finnhub | CrowdStrike Holdings (CRWD) Stock Drops Despite Market Gains |
| 2026-07-15 | Industry | ⚪  0 | 0.5 | Finnhub | Unpacking Q1 Earnings: CrowdStrike (NASDAQ:CRWD) In The Cont |
| 2026-07-15 | Policy | 🟢 +1 | 3.02 | Finnhub | Why Inflation Data Just Lit A Fire Under CRWD Stock |
| 2026-07-15 | Industry | 🟢 +1 | 1.01 | Finnhub | CRWD, PANW, NET, ZS: One Cybersecurity Stock Won Over Retail |

---

## ⚠️ Overheated (1)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 28.57 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] ASML Stock Eyes Second Weekly Gains: Retail Bulls Call Chipmaker The '
- 🟢 [Earnings|w3.87] ASML (ASML) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w3.28] ASML Holding NV (ASML) Q2 2026 Earnings Call Highlights: Surpassing Gu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Bernstein sets Street-high ASML target as capacity, pricing  |
| 2026-07-16 | Rumor | 🟢 +1 | 0.71 | Finnhub | ASML Mulls Price Hike for Chipmaking Tools, Information Says |
| 2026-07-16 | Earnings | 🟢 +1 | 3.87 | Finnhub | ASML Stock Eyes Second Weekly Gains: Retail Bulls Call Chipm |
| 2026-07-16 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | ASML: Q2 Pulled The Earnings Story Forward |
| 2026-07-16 | Earnings | 🟢 +1 | 3.87 | Finnhub | ASML (ASML) Q2 2026 Earnings Call Transcript |
| 2026-07-16 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | ASML increasing 2027 guidance beneficial for leading-edge lo |
| 2026-07-15 | Industry | ⚪  0 | 0.5 | Finnhub | S&P 500, Dow Edge Higher As Bank Earnings Offset Middle East |
| 2026-07-15 | Earnings | 🟢 +1 | 3.28 | Finnhub | ASML Holding NV (ASML) Q2 2026 Earnings Call Highlights: Sur |

---

## ⚪ Watch / Neutral (8)

### NYSE:GE
- Score: 58/100 | raw: 8.09 | News: 16 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Sentiment Strengthening UP (trend)

### NASDAQ:MNST
- Score: 57/100 | raw: 1.65 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RELY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TT
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-16T14:47:29.534Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*