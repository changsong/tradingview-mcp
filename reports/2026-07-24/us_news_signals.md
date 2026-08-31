---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_498afb6b869211f1b66e525400e6dd8f
    ReservedCode1: 9fo8R/FHDH4YYRmWXtzrJaSsVJUMFRvu5tpDMzw2zWdY1Kd4bn0nCf94Wp9OAR/SA7/DmTJl7Z3ofEZmN4xEY5u0iQbgYge5dMFQhq6Vey5WCxmJs9UrbwA55dA65bUDXKRAdzFp7BiMt5l2iCMQS2w7x1tR2D04I+luvN5+UeJmlrzRooQatjg3+yY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_498afb6b869211f1b66e525400e6dd8f
    ReservedCode2: 9fo8R/FHDH4YYRmWXtzrJaSsVJUMFRvu5tpDMzw2zWdY1Kd4bn0nCf94Wp9OAR/SA7/DmTJl7Z3ofEZmN4xEY5u0iQbgYge5dMFQhq6Vey5WCxmJs9UrbwA55dA65bUDXKRAdzFp7BiMt5l2iCMQS2w7x1tR2D04I+luvN5+UeJmlrzRooQatjg3+yY=
---

# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-23  |  **News Window:** 2026-07-16 ~ 2026-07-23
**Stock Pool:** us_selected.txt (44)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMD** | **94** | 29.94 | 🟢 Long (Strong) | Momentum / Hold | High | 19/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:VICR** | **85** | 12.47 | 🟢 Long (Strong) | Momentum / Hold | High | 8/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:WDC** | **84** | 8.07 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | - |
| 4 | **NASDAQ:TTMI** | **73** | 5.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/0 | - |
| 5 | **NASDAQ:IREN** | **69** | 4.55 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 6 | **NASDAQ:CRWV** | **64** | 3.28 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/0 | - |
| 7 | **NASDAQ:MSFT** | **63** | 3.17 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/0 | - |
| 8 | **NASDAQ:AVGO** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 9 | **NASDAQ:NVDA** | **59** | 2.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/0 | - |
| 10 | **NASDAQ:MU** | **57** | 1.77 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 11 | **NYSE:JCI** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 12 | **NYSE:CLS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 13 | **NYSE:DELL** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 14 | **NASDAQ:AMKR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 15 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 16 | **NASDAQ:CBRS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 17 | **NASDAQ:COHR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 18 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 19 | **NASDAQ:DGXX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 20 | **NASDAQ:ELTK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 21 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NASDAQ:JEWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 23 | **NASDAQ:LITE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NASDAQ:MPWR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NASDAQ:MRVL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NASDAQ:ON** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:SMCI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:STX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:VNET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:CE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:CIEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NYSE:ETN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:FN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:GLW** | **50** | -0.11 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 39 | **NYSE:HUN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:LYB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:VRT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 29.94 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Anthropic selects AMD Helios for 2GW GPU AI infrastructure
- 🟢 [M&A|w3.53] AMD (AMD) Lands $5 Billion Anthropic Partnership For AI Chips
- 🟢 [M&A|w3.53] AMD inks blockbuster multi-billion-dollar Anthropic AI deal

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Nasdaq, S&P 500 Futures Fall As Tesla, Alphabet Earnings Revive AI Spe
- 🔴 [Industry|w0.5] AMD: Get Out While You Still Can
- 🔴 [Industry|w0.5] AMD: The Bull Case Requires Nvidia To Fail

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Industry | 🟢 +1 | 1.19 | Finnhub | AMD expected to launch next generation of AI infrastructure  |
| 2026-07-23 | M&A | 🟢 +1 | 4.16 | Finnhub | Anthropic selects AMD Helios for 2GW GPU AI infrastructure |
| 2026-07-23 | Industry | 🔴 -1 | 0.6 | Finnhub | Nasdaq, S&P 500 Futures Fall As Tesla, Alphabet Earnings Rev |
| 2026-07-23 | Earnings | ⚪  0 | 0.77 | Finnhub | Is an AMD Stock Split Likely After Aug. 4? |
| 2026-07-23 | Industry | 🟢 +1 | 2.98 | Finnhub | Exclusive-Intel, AMD sign long-term server CPU deals with Ch |
| 2026-07-23 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | AMD: The Full-Stack AI Opportunity |
| 2026-07-23 | Industry | 🟢 +1 | 2.13 | Seeking Al | Intel, AMD ink long-term CPU deals with Chinese clients amid |
| 2026-07-22 | M&A | 🟢 +1 | 3.53 | Finnhub | AMD (AMD) Lands $5 Billion Anthropic Partnership For AI Chip |

---

### NASDAQ:VICR

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 12.47 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Vicor (VICR) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w2.73] Vicor Corp (VICR) Q2 2026 Earnings Call Highlights: Strong Revenue Gro
- 🟢 [Earnings|w2.73] Vicor Corporation (VICR) Q2 2026 Earnings Call Transcript

**📉 Bearish Factors:**
- 🔴 [Earnings|w2.73] Vicor beats second-quarter expectations as backlog more than doubles d

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | Vicor (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🟢 +1 | 2.73 | Finnhub | Vicor Corp (VICR) Q2 2026 Earnings Call Highlights: Strong R |
| 2026-07-21 | Earnings | 🟢 +1 | 2.73 | Finnhub | Vicor Corporation (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🔴 -1 | 2.73 | Finnhub | Vicor beats second-quarter expectations as backlog more than |
| 2026-07-21 | Earnings | 🟢 +1 | 2.73 | Finnhub | Vicor Corporation (NASDAQ:VICR) Earnings Beat Points to a Hi |
| 2026-07-21 | Earnings | 🟢 +1 | 2.73 | Finnhub | Vicor (VICR) Surpasses Q2 Earnings and Revenue Estimates |
| 2026-07-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Increased Investor Confidence Boosted Vicor Corporation (VIC |
| 2026-07-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Vicor (VICR) Following AI Growth And JPMorgan Interest Looks |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.07 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Western Digital (WDC) Reenters Merger Focus, Where Does Fair Value Sit
- 🟢 [M&A|w3.53] Western Digital (WDC) Revives Kioxia Merger Talks Over Flash Memory As
- 🟢 [Industry|w1.01] MU, SNDK, WDC Socks Rise Sharply For Second Day: Retail Feels Memory P

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | M&A | 🟢 +1 | 3.53 | Finnhub | Western Digital (WDC) Reenters Merger Focus, Where Does Fair |
| 2026-07-22 | M&A | 🟢 +1 | 3.53 | Finnhub | Western Digital (WDC) Revives Kioxia Merger Talks Over Flash |
| 2026-07-22 | Industry | 🟢 +1 | 1.01 | Finnhub | MU, SNDK, WDC Socks Rise Sharply For Second Day: Retail Feel |

---

## 🟢 Mid Long (4)

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] TTM Technologies (TTMI) to Report Q2 Results: Wall Street Expects Earn
- 🟢 [Analyst Action|w1.43] TTM Technologies (TTMI) Stock May Be 21% Undervalued As AI Demand Buil
- 🟢 [Industry|w0.84] Why Is TTM Technologies (TTMI) Stock Soaring Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Industry | ⚪  0 | 0.6 | Finnhub | TTM Technologies (TTMI) Following Farnborough Buzz Is The AI |
| 2026-07-23 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | TTM Technologies (TTMI) Stock May Be 21% Undervalued As AI D |
| 2026-07-22 | Industry | ⚪  0 | 0.5 | Finnhub | How Investors May Respond To TTM Technologies (TTMI) Showcas |
| 2026-07-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | TTM Technologies (TTMI) to Report Q2 Results: Wall Street Ex |
| 2026-07-21 | Industry | 🟢 +1 | 0.84 | Finnhub | Why Is TTM Technologies (TTMI) Stock Soaring Today |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | TTMI vs. UCTT: Which AI Hardware Supplier is a Smarter Inves |

---

### NASDAQ:CRWV

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.28 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] CoreWeave (CRWV) Is Chasing 108% Q2 Revenue Growth With A Big Power Ra

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Earnings | 🟢 +1 | 3.28 | Finnhub | CoreWeave (CRWV) Is Chasing 108% Q2 Revenue Growth With A Bi |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.17 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.02] Microsoft: A Better Entry Point Before Earnings
- 🟢 [Analyst Action|w0.72] Buying AI's Upside And Shorting Its Implosion Risk: Long Microsoft, Sh
- 🟢 [Earnings|w0.65] Microsoft's Earnings Should Change The Narrative And Send Shares Back 

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] Microsoft: How To Deal With 2.5 Years Of Dead Money

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Microsoft: A Better Entry Point Before Earnings |
| 2026-07-22 | Analyst Action | 🔴 -1 | 0.86 | Seeking Al | Microsoft: How To Deal With 2.5 Years Of Dead Money |
| 2026-07-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | AMD's deal with Microsoft is a precursor to 'sharp' ramp in  |
| 2026-07-21 | Industry | 🟢 +1 | 0.6 | Seeking Al | Microsoft's AI Transformation Is Misunderstood |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | Buying AI's Upside And Shorting Its Implosion Risk: Long Mic |
| 2026-07-20 | Earnings | ⚪  0 | 0.65 | Seeking Al | Microsoft: Three Questions In Upcoming Earnings |
| 2026-07-20 | Earnings | 🟢 +1 | 0.65 | Seeking Al | Microsoft's Earnings Should Change The Narrative And Send Sh |
| 2026-07-19 | Earnings | 🟢 +1 | 0.54 | Seeking Al | Microsoft Earnings: The One Key Commentary I Am Looking For |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.52] Broadcom: Why We Keep Loading Up At ATHs
- 🟢 [Industry|w0.5] Broadcom: The Dip Won't Last Long, Great Opportunity To Own The AI Lea

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Broadcom Might Be Flying Too Close To The Sun

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Industry | 🟢 +1 | 0.5 | Seeking Al | Broadcom: The Dip Won't Last Long, Great Opportunity To Own  |
| 2026-07-23 | Industry | 🔴 -1 | 0.5 | Seeking Al | Broadcom Might Be Flying Too Close To The Sun |
| 2026-07-22 | M&A | 🟢 +1 | 2.52 | Seeking Al | Broadcom: Why We Keep Loading Up At ATHs |

---

## 🟡 Cautious Long (1)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.55 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.1] IREN Wasn't Waiting For Another Whale
- 🟢 [Industry|w0.72] IREN's $4 Billion ARR Changes Everything
- 🟢 [Analyst Action|w0.72] The Bears Are Wrong About IREN, Again

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | IREN: From A Bitcoin Miner To An AI Infrastructure Play |
| 2026-07-22 | Industry | 🟢 +1 | 0.72 | Seeking Al | IREN's $4 Billion ARR Changes Everything |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | IREN extends contract-inspired rally with another 3% gain |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | The Bears Are Wrong About IREN, Again |
| 2026-07-21 | M&A | 🟢 +1 | 2.1 | Seeking Al | IREN Wasn't Waiting For Another Whale |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.55 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.1] IREN Wasn't Waiting For Another Whale
- 🟢 [Industry|w0.72] IREN's $4 Billion ARR Changes Everything
- 🟢 [Analyst Action|w0.72] The Bears Are Wrong About IREN, Again

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-23 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | IREN: From A Bitcoin Miner To An AI Infrastructure Play |
| 2026-07-22 | Industry | 🟢 +1 | 0.72 | Seeking Al | IREN's $4 Billion ARR Changes Everything |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | IREN extends contract-inspired rally with another 3% gain |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | The Bears Are Wrong About IREN, Again |
| 2026-07-21 | M&A | 🟢 +1 | 2.1 | Seeking Al | IREN Wasn't Waiting For Another Whale |

---

## ⚪ Watch / Neutral (36)

### NASDAQ:NVDA
- Score: 59/100 | raw: 2.08 | News: 6 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 57/100 | raw: 1.77 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 54/100 | raw: 1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CLS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DELL
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMKR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CBRS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:COHR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:DGXX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ELTK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:EQIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:JEWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:LITE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MPWR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:MRVL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ON
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SMCI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:STX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:VNET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CIEN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ETN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:GLW
- Score: 50/100 | raw: -0.11 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HUN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LYB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:VRT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-23T12:25:31.087Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*
*（内容由AI生成，仅供参考）*
