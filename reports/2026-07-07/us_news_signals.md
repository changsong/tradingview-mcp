# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-06  |  **News Window:** 2026-06-29 ~ 2026-07-06
**Stock Pool:** us_selected.txt (24)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:GE** | **81** | 7.68 | 🟢 Long (Strong) | Momentum / Hold | High | 14/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AAPL** | **79** | 6.94 | 🟢 Long (Strong) | Momentum / Hold | High | 11/0 | - |
| 3 | **NASDAQ:AMAT** | **76** | 6.18 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 4 | **NYSE:APH** | **65** | 3.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 5 | **NYSE:PACS** | **58** | 1.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 6 | **NASDAQ:NBIX** | **58** | 2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 7 | **NASDAQ:ALAB** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 8 | **NASDAQ:INCY** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 9 | **NYSE:DUK** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NYSE:NPB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 11 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NASDAQ:MNST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 14 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NYSE:IHE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 16 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NASDAQ:CRWD** | **49** | -0.17 | ⚪ No Trade (Neutral) | Watch | Low | 7/0 | - |
| 24 | **NYSE:AIR** | **45** | -1.26 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |

---

## 🟢 Strong Long (2)

### NYSE:GE

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.76] Why GE Aerospace Stock Can Keep Flying
- 🟢 [Analyst Action|w1.76] Jefferies Maintains Buy on GE Aerospace, Raises Price Target to $455
- 🟢 [Earnings|w1.64] Dear GE Aerospace Stock Fans, Mark Your Calendars for July 16

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] GE Vernova (GEV) Dips More Than Broader Market: What You Should Know
- 🔴 [Analyst Action|w0.5] The Great Disconnect: Why GE Aerospace's Defense Fundamentals Don't Ju

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-04 | Industry | ⚪  0 | 0.5 | Finnhub | GE Aerospace or Lockheed Martin: Which Aerospace and Defense |
| 2026-07-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Can GE Aerospace Sustain Growth as Commercial Aerospace Dema |
| 2026-07-02 | Earnings | 🟢 +1 | 0.76 | Finnhub | Will GE Vernova (GEV) Beat Estimates Again in Its Next Earni |
| 2026-07-02 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Why GE Aerospace Stock Can Keep Flying |
| 2026-07-02 | Analyst Action | 🟢 +1 | 1.76 | Finnhub | Jefferies Maintains Buy on GE Aerospace, Raises Price Target |
| 2026-07-02 | Policy | ⚪  0 | 1.76 | Finnhub | Is GE’s Tightened Governance And Dividend Policy Quietly Ref |
| 2026-07-01 | Industry | 🔴 -1 | 0.5 | Finnhub | GE Vernova (GEV) Dips More Than Broader Market: What You Sho |
| 2026-07-01 | Earnings | 🟢 +1 | 1.64 | Finnhub | Dear GE Aerospace Stock Fans, Mark Your Calendars for July 1 |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.94 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Apple Could Have Purchased Any of 487 S&P 500 Companies -- but CEO Tim
- 🟢 [M&A|w2.98] Broadcom gains after landing five-year deal with Apple to provide cust
- 🟢 [Industry|w0.6] Has Greg Abel Found Berkshire Hathaway's Next Apple? He's Put $23 Bill

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.71] AAPL Stock Dips Premarket: Analyst Warns Foldable iPhone Supply Issues

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-06 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures: Nasdaq Set To Reclaim Key Level; Apple, S |
| 2026-07-06 | Industry | 🟢 +1 | 0.6 | Finnhub | Has Greg Abel Found Berkshire Hathaway's Next Apple? He's Pu |
| 2026-07-06 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures Rise, Nasdaq Set To Reclaim Key Level; App |
| 2026-07-06 | Buyback | 🟢 +1 | 3.57 | Finnhub | Apple Could Have Purchased Any of 487 S&P 500 Companies -- b |
| 2026-07-06 | Rumor | 🔴 -1 | 0.71 | Finnhub | AAPL Stock Dips Premarket: Analyst Warns Foldable iPhone Sup |
| 2026-07-06 | Industry | ⚪  0 | 0.6 | Finnhub | Apple Supplier Luxshare Said to Plan Pricing HK Listing at T |
| 2026-07-06 | Industry | ⚪  0 | 0.6 | Finnhub | NVDA, AAPL Stocks In Focus: Foxconn Beats Q2 Revenue Estimat |
| 2026-07-06 | M&A | 🟢 +1 | 2.98 | Seeking Al | Broadcom gains after landing five-year deal with Apple to pr |

---

## 🟢 Mid Long (1)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Build Its Rea
- 🟢 [Analyst Action|w0.7] Barclays Raises Price Target on Amphenol Corporation (APH)
- 🟢 [Industry|w0.59] APH's Communications Solutions Powers AI-Led Growth: What's Ahead?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-03 | Industry | ⚪  0 | 0.5 | Finnhub | Is Amphenol Corporation (APH) A Good Stock To Buy Now? |
| 2026-07-02 | Industry | 🟢 +1 | 0.59 | Finnhub | APH's Communications Solutions Powers AI-Led Growth: What's  |
| 2026-07-02 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Barclays Raises Price Target on Amphenol Corporation (APH) |
| 2026-07-01 | M&A | 🟢 +1 | 1.76 | Finnhub | Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Bui |
| 2026-06-30 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Amphenol (APH) Stock Trades Up, Here Is Why |

---

## ⚠️ Overheated (1)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.18 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] B. Riley Raises PT on Applied Materials (AMAT) Stock
- 🟢 [Industry|w1.75] Applied Materials (AMAT) Expands AI Chip Tools With New DRAM And 3D Pa
- 🟢 [Earnings|w0.91] Q1 Earnings Outperformers: Applied Materials (NASDAQ:AMAT) And The Res

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-04 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | B. Riley Raises PT on Applied Materials (AMAT) Stock |
| 2026-07-03 | Earnings | 🟢 +1 | 0.91 | Finnhub | Q1 Earnings Outperformers: Applied Materials (NASDAQ:AMAT) A |
| 2026-07-03 | Industry | ⚪  0 | 0.5 | Finnhub | Are We Paying Too Much for Applied Materials (AMAT)? |
| 2026-07-03 | Industry | 🟢 +1 | 1.75 | Finnhub | Applied Materials (AMAT) Expands AI Chip Tools With New DRAM |
| 2026-07-03 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Is It Worth Investing in Applied Materials (AMAT) Based on W |
| 2026-07-02 | Industry | 🟢 +1 | 0.5 | Seeking Al | Applied Materials, Inc. (AMAT) Discusses DRAM and Advanced P |

---

## ⚪ Watch / Neutral (20)

### NYSE:PACS
- Score: 58/100 | raw: 1.97 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIX
- Score: 58/100 | raw: 2 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 56/100 | raw: 1.43 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DUK
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NPB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IHE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWD
- Score: 49/100 | raw: -0.17 | News: 7 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:AIR
- Score: 45/100 | raw: -1.26 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-06T13:25:25.629Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*