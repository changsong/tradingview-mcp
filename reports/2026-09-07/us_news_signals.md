# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-07  |  **News Window:** 2026-08-31 ~ 2026-09-07
**Stock Pool:** us_selected.txt (40)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:LTC** | **100** | 14.69 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:APH** | **65** | 3.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 3 | **NASDAQ:SNDK** | **63** | 3.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 4 | **NASDAQ:HOOD** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 5 | **NASDAQ:RELY** | **61** | 2.68 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 6 | **NYSE:TSM** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 7 | **NASDAQ:VRTX** | **55** | 1.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 8 | **NYSE:CF** | **55** | 1.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 9 | **NASDAQ:PRGS** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NASDAQ:HRMY** | **53** | 0.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NYSE:AR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NASDAQ:ADUS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NASDAQ:KRYS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 14 | **NASDAQ:MU** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 15 | **NYSE:NEM** | **51** | 0.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 16 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NYSE:WPM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NYSE:AJG** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 21 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NASDAQ:CRWD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:HG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:PGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:FIVE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:ASX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NYSE:ELF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:MS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:RIO** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 40 | **NYSE:FCX** | **47** | -0.76 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |

---

## 🟢 Mid Long (4)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.61 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Amphenol (APH) Upgraded to Strong Buy: Here's Why
- 🟢 [Analyst Action|w1.51] Are Computer and Technology Stocks Lagging  Amphenol (APH) This Year?
- 🟢 [Industry|w0.5] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**📉 Bearish Factors:**
- 🔴 [M&A|w0.5] Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-03 | M&A | 🔴 -1 | 0.5 | Finnhub | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-02 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |

---

### NASDAQ:SNDK

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
- 🟢 [Policy|w2.52] SanDisk (SNDK) Soars on S&P 100 Inclusion; Hedge Fund Ownership More-T
- 🟢 [Industry|w0.5] Jim Cramer Explains Why SanDisk (SNDK) Makes MongoDB (MDB) Look Expens

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Explains Why SanDisk (SNDK) Makes MongoDB (MDB) L |
| 2026-09-05 | Policy | 🟢 +1 | 2.52 | Finnhub | SanDisk (SNDK) Soars on S&P 100 Inclusion; Hedge Fund Owners |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Cathie Wood’s Ark Invest Buys HOOD Stock As Robinhood Sees Its Third-B

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Cathie Wood’s Ark Invest Buys HOOD Stock As Robinhood Sees I |

---

### NASDAQ:RELY

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.68 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And Take-Rate
- 🟢 [Industry|w0.5] Remitly Global (RELY) Is a Great Choice for 'Trend' Investors, Here's 
- 🟢 [Industry|w0.5] REMITLY GLOBAL INC (NASDAQ:RELY) Passes Growth Screen With Acceleratin

**📉 Bearish Factors:**
- 🔴 [Industry|w0.59] Remitly (RELY) Stock May Be Overvalued With Little Room For Error

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 2.27 | Finnhub | Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And |
| 2026-09-03 | Industry | 🔴 -1 | 0.59 | Finnhub | Remitly (RELY) Stock May Be Overvalued With Little Room For  |
| 2026-09-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Remitly Global (RELY) Is a Great Choice for 'Trend' Investor |
| 2026-09-01 | Industry | 🟢 +1 | 0.5 | Finnhub | REMITLY GLOBAL INC (NASDAQ:RELY) Passes Growth Screen With A |

---

## ⚠️ Overheated (1)

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 14.69 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By
- 🟢 [Analyst Action|w2.16] LTC Properties Upgraded To Buy, A Monthly Income Opportunity Driven By
- 🟢 [M&A|w2.06] Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minnesota Acqu

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-06 | Analyst Action | 🟢 +1 | 2.16 | Seeking Al | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |
| 2026-09-05 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | LTC Properties Upgraded To Buy, A Monthly Income Opportunity |
| 2026-09-03 | M&A | 🟢 +1 | 2.06 | Finnhub | Is LTC Properties (LTC) Cheap As It Expands SHOP With A Minn |
| 2026-09-03 | Earnings | 🟢 +1 | 1.91 | Finnhub | LTC Properties (LTC) Doubles Down On Senior Housing Bet |
| 2026-09-02 | M&A | 🟢 +1 | 1.76 | Finnhub | LTC’s $200 Million Acquisition Accelerates SHOP Transformati |
| 2026-09-02 | M&A | 🟢 +1 | 1.76 | Finnhub | LTC Properties Acquires Four SHOP Communities In Minnesota F |
| 2026-09-02 | M&A | 🟢 +1 | 1.26 | Seeking Al | LTC Properties announces $200M SHOP acquisition |
| 2026-09-01 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Wells Fargo Maintains Equal-Weight on LTC Properties, Raises |

---

## ⚪ Watch / Neutral (35)

### NYSE:TSM
- Score: 59/100 | raw: 2.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 55/100 | raw: 1.16 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CF
- Score: 55/100 | raw: 1.1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRGS
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 53/100 | raw: 0.76 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADUS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEM
- Score: 51/100 | raw: 0.14 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WPM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:AJG
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

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

### NASDAQ:PGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:FIVE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:ASX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ELF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:RIO
- Score: 48/100 | raw: -0.5 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:FCX
- Score: 47/100 | raw: -0.76 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-07T12:30:04.453Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-v4-pro*