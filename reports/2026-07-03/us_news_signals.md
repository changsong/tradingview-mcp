# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-03  |  **News Window:** 2026-06-26 ~ 2026-07-03
**Stock Pool:** us_selected.txt (24)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:APH** | **92** | 10.07 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:PACS** | **78** | 6.61 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 3 | **NASDAQ:AAPL** | **74** | 5.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/0 | - |
| 4 | **NASDAQ:NBIX** | **72** | 5.25 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/0 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:INCY** | **66** | 3.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 6 | **NYSE:DUK** | **60** | 2.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 7 | **NASDAQ:ALAB** | **56** | 1.47 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 8 | **NASDAQ:MNST** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 9 | **NYSE:TRNO** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 10 | **NASDAQ:HRMY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 11 | **NYSE:NPB** | **52** | 0.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 12 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 13 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 14 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NYSE:IHE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 16 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NYSE:FSS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NYSE:SN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NASDAQ:CRWD** | **49** | -0.24 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 22 | **NASDAQ:AMAT** | **49** | -0.34 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |
| 23 | **NYSE:GE** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 24 | **NYSE:AIR** | **48** | -0.46 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |

---

## 🟢 Strong Long (1)

### NYSE:PACS

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.61 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Why Is PACS Group Stock Soaring Tuesday?
- 🟢 [Analyst Action|w2.1] PACS Group (PACS) Price Target Increased by 12.27% to 51.20
- 🟢 [M&A|w2.06] PACS Group to Acquires 34 Nursing Facilities; Amount Not Disclosed

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | PACS Group (PACS) Price Target Increased by 12.27% to 51.20 |
| 2026-06-30 | M&A | 🟢 +1 | 2.45 | Finnhub | Why Is PACS Group Stock Soaring Tuesday? |
| 2026-06-29 | M&A | 🟢 +1 | 2.06 | Finnhub | PACS Group to Acquires 34 Nursing Facilities; Amount Not Dis |

---

## 🟢 Mid Long (3)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 0 |

**📈 Bullish Factors:**
- 🟢 [Rumor|w1.78] Why Apple Stock Rallied Today
- 🟢 [Rumor|w1.51] Why Apple (AAPL) Stock Is Trading Up Today
- 🟢 [Analyst Action|w0.86] Apple Is Best Positioned To Face Memory Shock: Reiterate Buy

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.5] Apple Just Made a Controversial Move. Is the Stock One to Avoid or Is 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Dow Jones Futures Fall Techs Rise After Tesla, Sandisk, AI S |
| 2026-07-03 | Rumor | 🔴 -1 | 0.5 | Finnhub | Apple Just Made a Controversial Move. Is the Stock One to Av |
| 2026-07-03 | Analyst Action | ⚪  0 | 1.43 | Finnhub | Jim Cramer on Apple: “We Need to See the Quarter and Hear Wh |
| 2026-07-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Dow Jones Futures Rise After Tesla, Sandisk, AI Stocks Dive; |
| 2026-07-03 | Rumor | 🟢 +1 | 1.78 | Finnhub | Why Apple Stock Rallied Today |
| 2026-07-02 | Rumor | 🟢 +1 | 1.51 | Finnhub | Why Apple (AAPL) Stock Is Trading Up Today |
| 2026-07-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Dow Jones Futures: Dow Hits High But AI Tumbles; Apple, Robi |
| 2026-07-02 | Rumor | 🟢 +1 | 0.5 | Seeking Al | Apple may unveil new iPad Pro, redesigned MacBook Pro in 202 |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.76] INCY Stock Hits 52-Week High on Regulatory Updates for Opzelura
- 🟢 [Industry|w1.05] Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data Builds Acr
- 🟢 [Analyst Action|w1.01] Incyte (INCY): Truist Raises the Price Target to $105 as a Government 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Incyte (INCY): Truist Raises the Price Target to $105 as a G |
| 2026-06-29 | Policy | 🟢 +1 | 1.76 | Finnhub | INCY Stock Hits 52-Week High on Regulatory Updates for Opzel |
| 2026-06-29 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Surges 5.8%: Is This an Indication of Further  |
| 2026-06-27 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte (INCY) Stock After 66% One-Year Rally Is The Market T |
| 2026-06-27 | Industry | 🟢 +1 | 1.05 | Finnhub | Incyte (INCY) Wins EU Backing For Opzelura As Pipeline Data  |

---

### NYSE:DUK

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.51] Morgan Stanley Lifts Price Target on Duke Energy (DUK). Here is Why
- 🟢 [Industry|w0.5] Duke Energy (DUK) Launches AI Bill Insights For Carolinas Customers
- 🟢 [Industry|w0.5] CEG or DUK: Which Stock Deserves to Be in Your Portfolio Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Duke Energy (DUK) Launches AI Bill Insights For Carolinas Cu |
| 2026-06-30 | Industry | 🟢 +1 | 0.5 | Finnhub | CEG or DUK: Which Stock Deserves to Be in Your Portfolio Now |
| 2026-06-28 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Morgan Stanley Lifts Price Target on Duke Energy (DUK). Here |

---

## 🟡 Cautious Long (1)

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.25 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Bull of the Day: Neurocrine Biosciences (NBIX)
- 🟢 [Industry|w0.84] Neurocrine (NBIX) Reports Clinically Meaningful Benefits in 94% of Pat
- 🟢 [Industry|w0.5] Neurocrine Biosciences (NBIX) Is Up 6.46% in One Week: What You Should

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Neurocrine (NBIX) Reports Clinically Meaningful Benefits in  |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX) Is Up 6.46% in One Week: What  |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX) Shows Strong Growth |
| 2026-06-29 | Earnings | 🟢 +1 | 1.91 | Finnhub | Bull of the Day: Neurocrine Biosciences (NBIX) |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX) Is Up 6.5% After CRENESSITY Sh |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX): High Growth NASDAQ Stocks to  |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX): High Growth Stocks to Buy Rig |

---

## ⚠️ Overheated (1)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 10.07 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Barclays Raises Price Target on Amphenol Corporation (APH)
- 🟢 [M&A|w2.94] Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Build Its Rea
- 🟢 [Analyst Action|w2.1] Amphenol (APH) Stock Trades Up, Here Is Why

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-02 | Industry | 🟢 +1 | 1.01 | Finnhub | APH's Communications Solutions Powers AI-Led Growth: What's  |
| 2026-07-02 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Barclays Raises Price Target on Amphenol Corporation (APH) |
| 2026-07-01 | M&A | 🟢 +1 | 2.94 | Finnhub | Amphenol (APH) Buys CommScope CCS As AI Data Center Wins Bui |
| 2026-06-30 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Amphenol (APH) Stock Trades Up, Here Is Why |
| 2026-06-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Amphenol Corp (NYSE:APH) Screens as a High Growth Momentum L |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Should You Buy Amphenol Corporation (APH)’s Shares? |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.25 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.91] Bull of the Day: Neurocrine Biosciences (NBIX)
- 🟢 [Industry|w0.84] Neurocrine (NBIX) Reports Clinically Meaningful Benefits in 94% of Pat
- 🟢 [Industry|w0.5] Neurocrine Biosciences (NBIX) Is Up 6.46% in One Week: What You Should

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Neurocrine (NBIX) Reports Clinically Meaningful Benefits in  |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX) Is Up 6.46% in One Week: What  |
| 2026-07-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX) Shows Strong Growth |
| 2026-06-29 | Earnings | 🟢 +1 | 1.91 | Finnhub | Bull of the Day: Neurocrine Biosciences (NBIX) |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX) Is Up 6.5% After CRENESSITY Sh |
| 2026-06-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX): High Growth NASDAQ Stocks to  |
| 2026-06-27 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences (NBIX): High Growth Stocks to Buy Rig |

---

## ⚪ Watch / Neutral (18)

### NASDAQ:ALAB
- Score: 56/100 | raw: 1.47 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 53/100 | raw: 0.6 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TRNO
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NPB
- Score: 52/100 | raw: 0.55 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IHE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FSS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWD
- Score: 49/100 | raw: -0.24 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:AMAT
- Score: 49/100 | raw: -0.34 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:GE
- Score: 48/100 | raw: -0.6 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:AIR
- Score: 48/100 | raw: -0.46 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-03T12:29:45.363Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*