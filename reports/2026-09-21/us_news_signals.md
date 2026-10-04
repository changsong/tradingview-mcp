# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-09-21  |  **News Window:** 2026-09-14 ~ 2026-09-21
**Stock Pool:** us_selected.txt (39)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:TEM** | **78** | 6.72 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:INCY** | **67** | 4.02 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 3 | **NYSE:ANET** | **64** | 3.37 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 4 | **NASDAQ:SMCI** | **64** | 3.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 5 | **NASDAQ:PANW** | **63** | 3.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 6 | **NYSE:TSM** | **60** | 2.32 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 7 | **NASDAQ:CRWD** | **59** | 2.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 8 | **NASDAQ:MU** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 9 | **NASDAQ:NBIS** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 10 | **NYSE:DT** | **58** | 1.85 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 11 | **NYSE:HPE** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 12 | **NASDAQ:LITE** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 13 | **NYSE:ASX** | **55** | 1.09 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 14 | **NASDAQ:BGC** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 15 | **NASDAQ:PLTR** | **53** | 0.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NYSE:DELL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NASDAQ:AMD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NASDAQ:AAPL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:GRAL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:INTC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:HOOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:MRVL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:QCOM** | **49** | -0.24 | ⚪ No Trade (Neutral) | Watch | Low | 5/0 | - |
| 37 | **NASDAQ:VSAT** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 38 | **NYSE:P** | **47** | -0.76 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 39 | **NASDAQ:SNDK** | **47** | -0.7 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |

---

## 🟢 Strong Long (1)

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.72 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Tempus AI (TEM), What Is Behind The Latest Buzz?
- 🟢 [Industry|w2.1] Tempus AI (TEM) Is Up 31.9% After Launching 100,000‑Genome AI Research
- 🟢 [Industry|w2.1] Tempus AI (TEM) Unveils Whole Genome Platform With Plans For 1 Million

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 2.52 | Finnhub | Tempus AI (TEM), What Is Behind The Latest Buzz? |
| 2026-09-19 | Industry | 🟢 +1 | 2.1 | Finnhub | Tempus AI (TEM) Is Up 31.9% After Launching 100,000‑Genome A |
| 2026-09-19 | Industry | 🟢 +1 | 2.1 | Finnhub | Tempus AI (TEM) Unveils Whole Genome Platform With Plans For |
| 2026-09-18 | Analyst Action | ⚪  0 | 0.5 | Finnhub | Strength Seen in Tempus (TEM): Can Its 14.9% Jump Turn into  |
| 2026-09-15 | Industry | ⚪  0 | 0.5 | Finnhub | Tempus AI, Inc. (TEM) Presents at Morgan Stanley 24th Annual |

---

## 🟢 Mid Long (5)

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.02 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w1.76] MIRM, INCY Stocks In Focus — Will A September 26 FDA Ruling Reward Thi
- 🟢 [Policy|w1.76] Is Incyte (INCY) Undervalued After Ontario Backed MINJUVI Access?
- 🟢 [Industry|w0.5] Incyte (NASDAQ:INCY) Combines Minervini Trend Template Strength With H

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Policy | ⚪  0 | 0.71 | Finnhub | FDA Decision Watch: MRK, MIRM, INCY, GRAL Face Key Regulator |
| 2026-09-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Incyte (NASDAQ:INCY) Combines Minervini Trend Template Stren |
| 2026-09-17 | Policy | 🟢 +1 | 1.76 | Finnhub | MIRM, INCY Stocks In Focus — Will A September 26 FDA Ruling  |
| 2026-09-17 | Policy | 🟢 +1 | 1.76 | Finnhub | Is Incyte (INCY) Undervalued After Ontario Backed MINJUVI Ac |
| 2026-09-16 | Industry | ⚪  0 | 0.5 | Finnhub | Incyte Corporation (INCY) Presents at Morgan Stanley 24th An |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.37 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Analyst Action|w0.6] Bull of the Day: Arista Networks, Inc. (ANET)
- 🟢 [Industry|w0.5] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Earnings | 🟢 +1 | 2.27 | Finnhub | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 0.5 | Finnhub | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |
| 2026-09-16 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Bull of the Day: Arista Networks, Inc. (ANET) |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server Portfolio
- 🟢 [Industry|w1.19] Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth With a High-
- 🟢 [Industry|w0.7] The SMCI Number I’m Watching Could Decide Where the Stock Goes Next

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-21 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Buy Top-Ranked DELL, SMCI & HPE to Form a Powerful AI-Server |
| 2026-09-21 | Industry | 🟢 +1 | 1.19 | Finnhub | Super Micro Computer (NASDAQ:SMCI) Combines Strong Growth Wi |
| 2026-09-18 | Industry | ⚪  0 | 0.7 | Finnhub | Did SMCI Stock Just Rise For The Wrong Reason? |
| 2026-09-18 | Industry | 🟢 +1 | 0.7 | Finnhub | The SMCI Number I’m Watching Could Decide Where the Stock Go |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Palo Alto Networks (PANW) Stock Gets Fair Value Boost After Analyst Ta
- 🟢 [Industry|w0.7] ZS, CRWD, PANW Stock In Focus — Cybersecurity Firms Lead Weekly Nasdaq

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Palo Alto Networks (PANW) Stock Gets Fair Value Boost After  |
| 2026-09-18 | Industry | 🟢 +1 | 0.7 | Finnhub | ZS, CRWD, PANW Stock In Focus — Cybersecurity Firms Lead Wee |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.32 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] Why Is Taiwan Semiconductor Manufacturing (TSM) Ramping 2nm Production
- 🟢 [Earnings|w0.91] TSMC (TSM) Beats Stock Market Upswing: What Investors Need to Know
- 🟢 [Analyst Action|w0.5] Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets a Breakout

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.84] Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overvalued As 2n

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets  |
| 2026-09-18 | Earnings | 🟢 +1 | 0.91 | Finnhub | TSMC (TSM) Beats Stock Market Upswing: What Investors Need t |
| 2026-09-18 | Industry | 🟢 +1 | 1.75 | Finnhub | Why Is Taiwan Semiconductor Manufacturing (TSM) Ramping 2nm  |
| 2026-09-18 | Analyst Action | 🔴 -1 | 0.84 | Finnhub | Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overva |

---

## ⚪ Watch / Neutral (33)

### NASDAQ:CRWD
- Score: 59/100 | raw: 2.04 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 59/100 | raw: 2.1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 59/100 | raw: 2.26 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DT
- Score: 58/100 | raw: 1.85 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HPE
- Score: 56/100 | raw: 1.51 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LITE
- Score: 55/100 | raw: 1.19 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASX
- Score: 55/100 | raw: 1.09 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLTR
- Score: 53/100 | raw: 0.6 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DELL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AMD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AAPL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:GRAL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:INTC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:HOOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MRVL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:QCOM
- Score: 49/100 | raw: -0.24 | News: 5 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:VSAT
- Score: 48/100 | raw: -0.5 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:P
- Score: 47/100 | raw: -0.76 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:SNDK
- Score: 47/100 | raw: -0.7 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-21T12:49:22.155Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*