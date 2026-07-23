---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_764e1b9b85da11f1b66e525400e6dd8f
    ReservedCode1: cE3IynYdIyxfvFfinreSBETkAaMT0whxELn9MHEXwiUO7af9xxjBoxwAsXLZiPVxkbuT9OMZmXQQlZ/YPsXvHI8pRgkhpPBSLcRzlXk/61oNlcaQmC6M0KIElrTpkJJYOBD44BygZhzhaeSvRaTr6vs4P20xAMVievaTp6vg9u14AEvurzbsIs0qJ5U=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_764e1b9b85da11f1b66e525400e6dd8f
    ReservedCode2: cE3IynYdIyxfvFfinreSBETkAaMT0whxELn9MHEXwiUO7af9xxjBoxwAsXLZiPVxkbuT9OMZmXQQlZ/YPsXvHI8pRgkhpPBSLcRzlXk/61oNlcaQmC6M0KIElrTpkJJYOBD44BygZhzhaeSvRaTr6vs4P20xAMVievaTp6vg9u14AEvurzbsIs0qJ5U=
---

# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-22  |  **News Window:** 2026-07-15 ~ 2026-07-22
**Stock Pool:** us_selected.txt (44)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:IREN** | **98** | 15.51 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:AMD** | **92** | 28.28 | 🟢 Long (Strong) | Momentum / Hold | High | 18/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DELL** | **91** | 9.78 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:WDC** | **90** | 9.51 | 🟢 Long (Strong) | Momentum / Hold | High | 3/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:AVGO** | **83** | 7.91 | 🟢 Long (Strong) | Momentum / Hold | High | 6/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:VICR** | **81** | 12.53 | 🟢 Long (Strong) | Momentum / Hold | High | 12/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NBIS** | **79** | 7.06 | 🟢 Long (Strong) | Momentum / Hold | High | 2/0 | - |
| 8 | **NYSE:ETN** | **76** | 6.26 | 🟢 Long (Strong) | Momentum / Hold | High | 9/0 | - |
| 9 | **NASDAQ:SMCI** | **72** | 5.18 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 10 | **NASDAQ:NVDA** | **70** | 4.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | - |
| 11 | **NASDAQ:MSFT** | **69** | 4.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | - |
| 12 | **NYSE:VRT** | **65** | 3.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 13 | **NASDAQ:LITE** | **63** | 3.18 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 14 | **NASDAQ:MPWR** | **60** | 2.46 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 15 | **NYSE:CIEN** | **58** | 2.03 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NASDAQ:AMKR** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 17 | **NASDAQ:TTMI** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 18 | **NASDAQ:VNET** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 19 | **NYSE:JCI** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 20 | **NYSE:LYB** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 21 | **NASDAQ:STX** | **53** | 0.66 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 22 | **NASDAQ:COHR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NASDAQ:MRVL** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NYSE:CLS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 25 | **NASDAQ:APLD** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 26 | **NASDAQ:CBRS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 27 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:DGXX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:ELTK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:EQIX** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 31 | **NASDAQ:JEWL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:POWI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:CE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NYSE:FN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:HUN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NYSE:MOD** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:VSH** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:WLK** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:CRWV** | **45** | -1.31 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 42 | **NASDAQ:MU** | **45** | -1.19 | ⚪ No Trade (Neutral) | Watch | Low | 1/0 | - |
| 43 | **NASDAQ:ON** | **45** | -1.3 | ⚪ No Trade (Neutral) | Watch | Low | 7/0 | - |
| 44 | **NYSE:GLW** | **38** | -2.86 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/0 | - |

---

## 🟢 Strong Long (6)

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 28.28 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD challenges Nvidia with massive Anthropic deal, though shares dip p
- 🟢 [M&A|w4.16] AMD and Anthropic sign chip deal worth up to $5 billion
- 🟢 [M&A|w4.16] AMD and Anthropic Announce Strategic Partnership to Deploy Up to 2 Gig

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] INTC, AMD, MU, NVDA: Chip Stocks Tumble Again, Stalling A Nascent Rebo
- 🔴 [Industry|w0.5] AMD: Get Out While You Still Can
- 🔴 [Analyst Action|w0.5] AMD: The Bull Case Requires Nvidia To Fail

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD challenges Nvidia with massive Anthropic deal, though sh |
| 2026-07-22 | Industry | 🟢 +1 | 0.6 | Finnhub | A $10,000 Investment in AMD When Lisa Su Became CEO Is Worth |
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD and Anthropic sign chip deal worth up to $5 billion |
| 2026-07-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Vultr and AMD Support the University of Cambridge's TESSERA  |
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD and Anthropic Announce Strategic Partnership to Deploy U |
| 2026-07-22 | Industry | ⚪  0 | 0.6 | Finnhub | NVIDIA vs. AMD: Which AI Chip Stock Is the Better Buy Now? |
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD to invest up to $5 billion in Anthropic; AI startup to b |
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD and Anthropic Sign Major Chips-and-Investment Deal |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **90** / 100 |
| Raw Weighted Score | 9.51 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Western Digital (WDC) Reenters Merger Focus, Where Does Fair Value Sit
- 🟢 [M&A|w4.16] Western Digital (WDC) Revives Kioxia Merger Talks Over Flash Memory As
- 🟢 [Industry|w1.19] MU, SNDK, WDC Socks Rise Sharply For Second Day: Retail Feels Memory P

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | Western Digital (WDC) Reenters Merger Focus, Where Does Fair |
| 2026-07-22 | M&A | 🟢 +1 | 4.16 | Finnhub | Western Digital (WDC) Revives Kioxia Merger Talks Over Flash |
| 2026-07-22 | Industry | 🟢 +1 | 1.19 | Finnhub | MU, SNDK, WDC Socks Rise Sharply For Second Day: Retail Feel |

---

### NASDAQ:AVGO

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.91 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Broadcom stands to gain from new cloud deal
- 🟢 [Earnings|w3.28] VCF is Becoming Broadcom's Growth Engine: More Upside Ahead?
- 🟢 [Industry|w0.6] Broadcom: Why We Keep Loading Up At ATHs

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Broadcom: Why We Keep Loading Up At ATHs |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Finnhub | This Is My Favorite Artificial Intelligence Stock to Buy Rig |
| 2026-07-21 | M&A | 🟢 +1 | 3.53 | Finnhub | Broadcom stands to gain from new cloud deal |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | VCF is Becoming Broadcom's Growth Engine: More Upside Ahead? |
| 2026-07-18 | Industry | ⚪  0 | 0.5 | Seeking Al | Insider trades: Morgan Stanley, Goldman Sachs, Broadcom amon |
| 2026-07-16 | Industry | 🟢 +1 | 0.5 | Seeking Al | Broadcom's AI Moat Keeps Expanding |

---

### NASDAQ:VICR

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 12.53 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Vicor (VICR) Q2 2026 Earnings Call Transcript
- 🟢 [Earnings|w3.28] Vicor Corporation (NASDAQ:VICR) Earnings Beat Points to a High Quality
- 🟢 [Earnings|w3.28] Vicor (VICR) Surpasses Q2 Earnings and Revenue Estimates

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.28] Vicor beats second-quarter expectations as backlog more than doubles d

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Vicor (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🟢 +1 | 1.31 | Finnhub | Vicor Corp (VICR) Q2 2026 Earnings Call Highlights: Strong R |
| 2026-07-21 | Earnings | 🟢 +1 | 1.31 | Finnhub | Vicor Corporation (VICR) Q2 2026 Earnings Call Transcript |
| 2026-07-21 | Earnings | 🔴 -1 | 3.28 | Finnhub | Vicor beats second-quarter expectations as backlog more than |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | Vicor Corporation (NASDAQ:VICR) Earnings Beat Points to a Hi |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | Vicor (VICR) Surpasses Q2 Earnings and Revenue Estimates |
| 2026-07-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Increased Investor Confidence Boosted Vicor Corporation (VIC |
| 2026-07-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Vicor (VICR) Following AI Growth And JPMorgan Interest Looks |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.06 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] Nebius (NBIS) Soars on Nvidia 9.3% Stake; Hedge Fund Bets More Than Do
- 🟢 [M&A|w3.53] NBIS Stock Alert: What to Know as Nvidia Reveals 9.3% Stake in Nebius

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-21 | M&A | 🟢 +1 | 3.53 | Finnhub | Nebius (NBIS) Soars on Nvidia 9.3% Stake; Hedge Fund Bets Mo |
| 2026-07-21 | M&A | 🟢 +1 | 3.53 | Finnhub | NBIS Stock Alert: What to Know as Nvidia Reveals 9.3% Stake  |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.26 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Eaton (ETN) Upgraded to Buy: What Does It Mean for the Stock?
- 🟢 [Analyst Action|w1.21] Can Eaton (ETN) Justify Its Valuation On Data Center Orders And Analys
- 🟢 [Industry|w1.01] How Investors May Respond To Eaton (ETN) Expanding Its “Home as a Grid

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Eaton (ETN) Declines More Than Market: Some Information for Investors

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-21 | Industry | 🟢 +1 | 1.01 | Finnhub | How Investors May Respond To Eaton (ETN) Expanding Its “Home |
| 2026-07-21 | Industry | 🟢 +1 | 1.01 | Finnhub | Eaton (ETN) Opens U.K. Aerospace Additive Manufacturing Cent |
| 2026-07-21 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Can Eaton (ETN) Justify Its Valuation On Data Center Orders  |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Finnhub | Eaton (ETN) Stock Looks Expensive On Cash Flow But Cheap On  |
| 2026-07-20 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Eaton (ETN) Upgraded to Buy: What Does It Mean for the Stock |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | VWDRY vs. ETN: Which Stock Should Value Investors Buy Now? |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | Is Eaton (ETN) Stock Outpacing Its Industrial Products Peers |
| 2026-07-20 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Wall Street Bulls Look Optimistic About Eaton (ETN): Should  |

---

## 🟢 Mid Long (6)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.18 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Supermicro shares jump as margin outlook and record backlog impress in
- 🟢 [Rumor|w0.71] SMCI Stock Jumps Premarket: Record Backlog Sparks Short Squeeze Chatte
- 🟢 [Industry|w0.6] Stock Market Today: Dow Wavers As Oil Jumps; SMCI Surges With Alphabet

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Stock Market Today: Dow Wavers As Oil Jumps; SMCI Surges Wit |
| 2026-07-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Supermicro shares jump as margin outlook and record backlog  |
| 2026-07-22 | Rumor | 🟢 +1 | 0.71 | Finnhub | SMCI Stock Jumps Premarket: Record Backlog Sparks Short Sque |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] QumulusAI Signs $18 Million, Two-Year Take-or-Pay NVIDIA Blackwell B30
- 🟢 [Analyst Action|w1.02] Super Micro's strong gross margins highlight prelim results, positives
- 🟢 [Industry|w0.5] Nvidia: The Dividend Growth Stock Masquerading As A Growth Company

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] AMD challenges Nvidia with massive Anthropic deal, though shares dip p
- 🔴 [Industry|w0.5] Nvidia: Jensen Huang's $0 Billion Strategy
- 🔴 [Industry|w0.5] Nvidia: AI Infrastructure Hitting Physical And Financial Limits

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🔴 -1 | 1.19 | Finnhub | AMD challenges Nvidia with massive Anthropic deal, though sh |
| 2026-07-22 | Buyback | 🟢 +1 | 3.57 | Finnhub | QumulusAI Signs $18 Million, Two-Year Take-or-Pay NVIDIA Bla |
| 2026-07-22 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Super Micro's strong gross margins highlight prelim results, |
| 2026-07-22 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia: The Dividend Growth Stock Masquerading As A Growth C |
| 2026-07-21 | Industry | 🔴 -1 | 0.5 | Seeking Al | Nvidia: Jensen Huang's $0 Billion Strategy |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia: The Vera Edge And The Poison Pill Of Circular Financ |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia's Second Act Is Physical AI |
| 2026-07-20 | Industry | 🟢 +1 | 0.5 | Seeking Al | Nvidia's Next Growth Engine: A CPU Built For AI Agents |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.43] Manulife Expands Partnership with Microsoft to Accelerate Enterprise A
- 🟢 [Industry|w1.19] Microsoft, Mistral expand partnership for enterprise AI deployment
- 🟢 [Analyst Action|w0.51] AMD's deal with Microsoft is a precursor to 'sharp' ramp in AI deploym

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] AI Is Eating Big Tech’s Free Cash Flow: Why Microsoft and Oracle Face 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🔴 -1 | 1.19 | Finnhub | AI Is Eating Big Tech’s Free Cash Flow: Why Microsoft and Or |
| 2026-07-22 | Buyback | 🟢 +1 | 1.43 | Finnhub | Manulife Expands Partnership with Microsoft to Accelerate En |
| 2026-07-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Microsoft, Mistral expand partnership for enterprise AI depl |
| 2026-07-22 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | AMD's deal with Microsoft is a precursor to 'sharp' ramp in  |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Seeking Al | Microsoft's AI Transformation Is Misunderstood |
| 2026-07-21 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Buying AI's Upside And Shorting Its Implosion Risk: Long Mic |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Seeking Al | Microsoft: Three Questions In Upcoming Earnings |
| 2026-07-20 | Industry | 🟢 +1 | 0.5 | Seeking Al | Microsoft's Earnings Should Change The Narrative And Send Sh |

---

### NYSE:VRT

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Vertiv (VRT) Is Buying Strategic Thermal Labs For AI Cooling Growth
- 🟢 [M&A|w1.18] VRT Stock Is Rising Today – What’s The Deal With Strategic Thermal Lab

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Vertiv Holdings Co. (VRT) is Attracting Investor Attention: Here is Wh

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-20 | M&A | 🟢 +1 | 2.94 | Finnhub | Vertiv (VRT) Is Buying Strategic Thermal Labs For AI Cooling |
| 2026-07-20 | M&A | 🟢 +1 | 1.18 | Finnhub | VRT Stock Is Rising Today – What’s The Deal With Strategic T |
| 2026-07-20 | Industry | 🔴 -1 | 0.5 | Finnhub | Vertiv Holdings Co. (VRT) is Attracting Investor Attention:  |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.18 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] LITE Stock Jumps Over 9% As Lumentum Extends Its Stellar 2026 Run — Wh
- 🟢 [Earnings|w0.66] Why Lumentum (LITE) is Poised to Beat Earnings Estimates Again

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-21 | Earnings | 🟢 +1 | 0.66 | Finnhub | Why Lumentum (LITE) is Poised to Beat Earnings Estimates Aga |
| 2026-07-20 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | LITE Stock Jumps Over 9% As Lumentum Extends Its Stellar 202 |

---

### NASDAQ:MPWR

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.46 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.36] Will Monolithic (MPWR) Beat Estimates Again in Its Next Earnings Repor
- 🟢 [Industry|w0.6] Monolithic Power Systems Inc (NASDAQ:MPWR) Shows High Growth Momentum 
- 🟢 [Industry|w0.5] Monolithic Power Systems (MPWR) Stock Gets An AI Boost From IBM Spendi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🟢 +1 | 0.6 | Finnhub | Monolithic Power Systems Inc (NASDAQ:MPWR) Shows High Growth |
| 2026-07-21 | Industry | ⚪  0 | 0.5 | Finnhub | Monolithic Power Systems (MPWR) vs. TXN and ADI: Are Investo |
| 2026-07-17 | Industry | 🟢 +1 | 0.5 | Finnhub | Monolithic Power Systems (MPWR) Stock Gets An AI Boost From  |
| 2026-07-16 | Earnings | 🟢 +1 | 1.36 | Finnhub | Will Monolithic (MPWR) Beat Estimates Again in Its Next Earn |

---

## ⚠️ Overheated (2)

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 15.51 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] The Bears Are Wrong About IREN, Again
- 🟢 [Earnings|w3.28] What’s Going on With Iren Stock on Tuesday?
- 🟢 [Earnings|w3.28] IREN Wasn't Waiting For Another Whale

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Neoclouds Nebius, IREN Tap Massive Hyperscaler AI Capex — Co |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | The Bears Are Wrong About IREN, Again |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Stock Market Today: Dow, S&P 500, Nasdaq 100 Futures Rise as |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | What’s Going on With Iren Stock on Tuesday? |
| 2026-07-21 | Earnings | 🟢 +1 | 3.28 | Finnhub | IREN Wasn't Waiting For Another Whale |
| 2026-07-21 | Earnings | 🟢 +1 | 0.94 | Seeking Al | IREN extends contract-inspired rally with another 3% gain |
| 2026-07-20 | Industry | ⚪  0 | 0.5 | Finnhub | AMC, IREN Ltd., Archer Aviation, Nebius Group and Alibaba: W |
| 2026-07-20 | Earnings | 🟢 +1 | 2.73 | Finnhub | IREN Stock Rally Sparks 40% Surge in Leveraged ETFs After $2 |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.78 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Can Dell (DELL) Sustain Its AI Server Momentum Without Reshaping Its R
- 🟢 [Industry|w1.19] Super Micro Soars On Booming Margins, Orders; Dell, HP Enterprise Also
- 🟢 [Industry|w1.19] Super Micro Jumps 13% on Record $60B Order Backlog; Dell, HPE Rally on

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Super Micro Soars On Booming Margins, Orders; Dell, HP Enter |
| 2026-07-22 | Industry | 🟢 +1 | 1.19 | Finnhub | Super Micro Jumps 13% on Record $60B Order Backlog; Dell, HP |
| 2026-07-22 | Earnings | 🟢 +1 | 3.87 | Finnhub | Can Dell (DELL) Sustain Its AI Server Momentum Without Resha |
| 2026-07-22 | Analyst Action | 🟢 +1 | 0.51 | Seeking Al | Super Micro's strong gross margins highlight prelim results, |
| 2026-07-21 | Industry | 🟢 +1 | 1.01 | Finnhub | DELL, HPE Stock Gain After-Hours As SMCI's Strong Margin Out |
| 2026-07-21 | Industry | 🟢 +1 | 1.01 | Finnhub | Super Micro Soars Late On Booming Margins, Orders; Dell, HP  |
| 2026-07-21 | Rumor | 🟢 +1 | 0.5 | Finnhub | QUICK SPARK: Jim Cramer Flags Dell as the Next Winner After  |
| 2026-07-21 | Industry | 🟢 +1 | 0.5 | Finnhub | Super Micro Jumps 6%, Dell Climbs 7%, HPE Rises 5% as AI Har |

---

## 🔴 Avoid / Short (1)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **38** / 100 |
| Raw Weighted Score | -2.86 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.55] Could Corning (GLW) Be 17% Overvalued Following Mixed Views Ahead Of E
- 🔴 [Earnings|w1.31] Corning (GLW) Earnings Expected to Grow: What to Know Ahead of Next We

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-07-22 | Earnings | 🔴 -1 | 1.55 | Finnhub | Could Corning (GLW) Be 17% Overvalued Following Mixed Views  |
| 2026-07-21 | Earnings | 🔴 -1 | 1.31 | Finnhub | Corning (GLW) Earnings Expected to Grow: What to Know Ahead  |

---

## ⚪ Watch / Neutral (29)

### NYSE:CIEN
- Score: 58/100 | raw: 2.03 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMKR
- Score: 54/100 | raw: 1.05 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TTMI
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VNET
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 54/100 | raw: 1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LYB
- Score: 54/100 | raw: 1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 53/100 | raw: 0.66 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:COHR
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MRVL
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CLS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:APLD
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CBRS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:DGXX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ELTK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:EQIX
- Score: 50/100 | raw: 0 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:JEWL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:POWI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:CE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:HUN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:MOD
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:VSH
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:WLK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRWV
- Score: 45/100 | raw: -1.31 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:MU
- Score: 45/100 | raw: -1.19 | News: 1 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:ON
- Score: 45/100 | raw: -1.3 | News: 7 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-22T14:29:29.970Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*
*（内容由AI生成，仅供参考）*
