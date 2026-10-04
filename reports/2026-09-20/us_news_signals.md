# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-20  |  **News Window:** 2026-09-13 ~ 2026-09-20（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (39)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:ANET** | **83** | 8.32 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:P** | **81** | 7.38 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/2 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DT** | **80** | 7.26 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/10 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:PANW** | **78** | 9.41 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/19 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:HOOD** | **78** | 12 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/18 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:SMCI** | **73** | 5.4 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 7 | **NASDAQ:AMD** | **71** | 13.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/11 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:CRWD** | **71** | 12.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:MU** | **70** | 4.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 10 | **NASDAQ:INTC** | **70** | 4.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 11 | **NASDAQ:INCY** | **69** | 4.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/13 | - |
| 12 | **NASDAQ:AAPL** | **68** | 11.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/11 | Sentiment Strengthening UP (trend) |
| 13 | **NYSE:DELL** | **67** | 6.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/18 | - |
| 14 | **NASDAQ:TEM** | **64** | 3.45 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/12 | - |
| 15 | **NASDAQ:MRVL** | **63** | 3.79 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 16 | **NASDAQ:NBIS** | **61** | 2.75 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 17 | **NASDAQ:VSAT** | **59** | 2.22 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/6 | - |
| 18 | **NYSE:ASX** | **58** | 2.02 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/6 | - |
| 19 | **NASDAQ:QCOM** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 20 | **NASDAQ:SNDK** | **58** | 1.95 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 21 | **NASDAQ:LITE** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 22 | **NYSE:BAP** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 23 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 25 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 26 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 27 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 28 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 29 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:PLTR** | **50** | 0.09 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 6/24 | - |
| 33 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:GRAL** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/2 | - |
| 35 | **NASDAQ:MSFT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 36 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/30 | - |
| 37 | **NYSE:BE** | **49** | -0.15 | ⚪ No Trade (Neutral) | Watch | Low | 12/18 | - |
| 38 | **NYSE:HPE** | **45** | -1.09 | ⚪ No Trade (Neutral) | Watch | Low | 6/24 | - |
| 39 | **NYSE:TSM** | **43** | -1.8 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 4/26 | - |

---

## 🟢 Mid Long (11)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.4 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Did SMCI Stock Just Rise For The Wrong Reason?
- 🟢 [Earnings|w1.95] The SMCI Number I’m Watching Could Decide Where the Stock Goes Next
- 🟢 [Industry|w1.5] Super Micro Computer And SMCX: Impressive AI Growth, Yet Far From A Sm

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | Did SMCI Stock Just Rise For The Wrong Reason? |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Super Micro Computer And SMCX: Impressive AI Growth, Yet Far |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | The SMCI Number I’m Watching Could Decide Where the Stock Go |
| 2026-09-17 | Earnings | ⚪  0 | 1.63 | Yahoo | Vertiv's Product Revenue Accelerates: Can It Outpace APH & S |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 13.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Top Research Reports for AMD, Linde & Amgen
- 🟢 [Earnings|w1.95] Micron Just Built One Memory Stick That Replaces Four. Is MU Stock a B
- 🟢 [Earnings|w1.95] XLK, Oracle and AMD Forecast: Tech Stocks Eye Breakouts

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Why Does NVDA Stock Carry The Lowest Clean Multiple In Its Peer Group?
- 🔴 [Analyst Action|w1.8] AMD: Gambling With Limited Upside (Downgrade)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer sends a blunt message to AMD stock investors |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | Cathie Wood Sold Palantir and AMD, Then Poured $3.35 Million |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Can The Market Rally Take Flight? Robinho |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Will The Market Rally Take Flight? Robinh |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Nasdaq, S&P 500 Hold; Robinhood, Sandisk, |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | AMD (AMD) Stock Looks Cheap After Its Huge 3 Year Run |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Stock Market Today: Nasdaq, S&P Reverse Slightly Higher; San |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Dow Jones Futures: Market Still Choppy; Robinhood, Sandisk,  |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 12.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] CRWD Stock Keeps Climbing. Should You Climb On?
- 🟢 [Earnings|w1.95] Why Did CRWD, OKTA, IOVA Shares Climb To 52-Week Highs Today?
- 🟢 [Industry|w1.8] CrowdStrike CEO sends strong six-word message on AI cyber safety

**Bearish Factors:**
- 🔴 [Industry|w1.5] ‘The Genie’s Out of the Bottle’ on AI Risks, Creating a Buying Opportu

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike CEO sends strong six-word message on AI cyber sa |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike (CRWD) Lands Forrester Leadership Nod As AI Secu |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike, HubSpot, Intuit, Cloudflare, and Okta Shares Pl |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Jim Cramer Shared What CrowdStrike Holdings, Inc. (NASDAQ:CR |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | CRWD Stock Keeps Climbing. Should You Climb On? |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | ZS, CRWD, PANW Stock In Focus — Cybersecurity Firms Lead Wee |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Benzinga | Cybersecurity Rally Hits a Valuation Reality Check. These ET |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | CrowdStrike Gets Higher Targets From BofA, Stephens — Guardi |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Micron Just Built One Memory Stick That Replaces Four. Is MU Stock a B
- 🟢 [Earnings|w1.95] Can Micron (MU) Keep the Earnings Surprise Streak Alive?
- 🟢 [Industry|w1.8] Micron (MU) Unveils Breakthrough Memory Product. It Says Much About th

**Bearish Factors:**
- 🔴 [Earnings|w2.34] What Does Micron Technology (MU) Warning Of Shortages Through 2027 Mea

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Micron (MU) Unveils Breakthrough Memory Product. It Says Muc |
| 2026-09-19 | Earnings | 🔴 -1 | 2.34 | Yahoo | What Does Micron Technology (MU) Warning Of Shortages Throug |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Jim Cramer Calls Intel (INTC) the Best Stock in Show and Mic |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | Micron Just Built One Memory Stick That Replaces Four. Is MU |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can Micron (MU) Keep the Earnings Surprise Streak Alive? |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Intel Corporation (INTC)’s Terafab Partnership Could Give Its AI Found
- 🟢 [Industry|w1.5] Intel vs. SK Hynix: Which Chip Stock Is Worth Chasing After This Week'
- 🟢 [Industry|w1.5] Jim Cramer Calls Intel (INTC) the Best Stock in Show and Micron (MU) N

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Benzinga | Intel, Apple, Nvidia and More: 5 Stocks Investors Couldn't S |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Intel Corporation (INTC)’s Terafab Partnership Could Give It |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | NVIDIA Vs Intel Corporation (NASDAQ:INTC): Here’s The One Ji |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Intel vs. SK Hynix: Which Chip Stock Is Worth Chasing After  |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Jim Cramer Calls Intel (INTC) the Best Stock in Show and Mic |

---

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 13 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Incyte Maps Post-JAKAFI Growth With Pipeline Push and $4B Sales Target
- 🟢 [Industry|w1.5] Incyte (NASDAQ:INCY) Combines Minervini Trend Template Strength With H
- 🟢 [Earnings|w0.97] INCY Stock Gains 23% Year to Date: Buy, Sell or Hold?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 2.13 | Yahoo | Incyte Maps Post-JAKAFI Growth With Pipeline Push and $4B Sa |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | ChartMill | Incyte (NASDAQ:INCY) Combines Minervini Trend Template Stren |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | MIRM, INCY Stocks In Focus — Will A September 26 FDA Ruling  |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | Is Incyte (INCY) Undervalued After Ontario Backed MINJUVI Ac |
| 2026-09-16 | Industry | ⚪  0 | 1.05 | SeekingAlp | Incyte Corporation (INCY) Presents at Morgan Stanley 24th An |
| 2026-09-15 | Earnings | ⚪  0 | 1.17 | SeekingAlp | Incyte: Priced For Success, With No Margin Of Safety |
| 2026-09-14 | Earnings | 🟢 +1 | 0.97 | Yahoo | INCY Stock Gains 23% Year to Date: Buy, Sell or Hold? |
| 2026-09-14 | Earnings | ⚪  0 | 0.97 | Yahoo | Incyte (INCY): 3 Reasons We Love This Stock |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 11.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [M&A|w2.1] Apple Raised Stakes with its $2000-Priced Foldable. But Can it Be the 
- 🟢 [Industry|w1.8] Apple gets bullish Wall Street call as iPhone demand jumps
- 🟢 [Industry|w1.8] John Ternus's First iPhone Launch Prompted a Bank of America Price Tar

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Apple will essentially sell 'every single' iPhone Duo it makes: CFRA

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | ⚪  0 | 2.13 | Yahoo | Greg Abel Recently Plowed $4.2 Billion Into Warren Buffett's |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | Bank of America does the math on Apple's $1,200 iPhone offer |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple gets bullish Wall Street call as iPhone demand jumps |
| 2026-09-19 | Policy | ⚪  0 | 2.16 | Yahoo | Coinbase Files With CFTC To List US Single-Stock Perpetual F |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | John Ternus's First iPhone Launch Prompted a Bank of America |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | History Says You Should Know These 3 Things Before Buying Ap |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Benzinga | Intel, Apple, Nvidia and More: 5 Stocks Investors Couldn't S |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Here’s A Stock That Jim Cramer Like Before But Now He Just D |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 6.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 18 |

**Bullish Factors:**
- 🟢 [Buyback|w1.8] Dell Technologies (DELL) Buyback Puts Valuation Back In Focus
- 🟢 [Earnings|w1.63] Is Cisco Stock Priced For Orders That Are Not Yet Revenue?
- 🟢 [Earnings|w1.63] Dell’s AI Backlog Surge Positions Stock for $600+ as Server Revenue Do

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Jim Stock Used This Stock As An Indicator Of Investor Sentim |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | The Options Market Says Dell Stock Can Halve Or Double |
| 2026-09-18 | Earnings | ⚪  0 | 1.95 | Yahoo | Snowflake's Product Revenue Accelerates: Can It Outpace DELL |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Dell Technologies Inc. (DELL) Is a Trending Stock: Facts to  |
| 2026-09-18 | Buyback | 🟢 +1 | 1.8 | Yahoo | Dell Technologies (DELL) Buyback Puts Valuation Back In Focu |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Jim Cramer Says Hewlett Packard Enterprise (HPE) Has the “Ho |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Dell InnovateFest 2026 Champions Inclusive and Independent L |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Michael Dell's $6.25 Billion Bet on Compounding Wins Over Wa |

---

### NASDAQ:TEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.45 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 12 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Strength Seen in Tempus (TEM): Can Its 14.9% Jump Turn into More Stren
- 🟢 [Industry|w1.5] Why Is Tempus AI Stock Falling Friday?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Benzinga | Why Is Tempus AI Stock Falling Friday? |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | Strength Seen in Tempus (TEM): Can Its 14.9% Jump Turn into  |
| 2026-09-15 | Industry | ⚪  0 | 0.9 | SeekingAlp | Tempus AI, Inc. (TEM) Presents at Morgan Stanley 24th Annual |

---

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.79 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [Industry|w2.13] How Expanded GlobalFoundries SiGe Capacity for AI Optics Will Impact M
- 🟢 [Industry|w1.5] Can GFS' Marvell Deal for SiGe Capacity Expansion Accelerate Growth?
- 🟢 [Industry|w1.25] GlobalFoundries and Marvell expand SiGe deal for AI data centers

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Inside the 200-Basis-Point Margin Gap Marvell Isn’t Talking About on E

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-20 | Industry | 🟢 +1 | 2.13 | Yahoo | How Expanded GlobalFoundries SiGe Capacity for AI Optics Wil |
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Yahoo | Marvell (MRVL) and GlobalFoundries (GFS) Rise on Expanded De |
| 2026-09-19 | Earnings | 🔴 -1 | 2.34 | Yahoo | Inside the 200-Basis-Point Margin Gap Marvell Isn’t Talking  |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | APH's AI Datacom Strength Grows: Can It Challenge TEL & MRVL |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Can GFS' Marvell Deal for SiGe Capacity Expansion Accelerate |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Marvell Technology (MRVL) Deepens Its AI Infrastructure Foot |
| 2026-09-17 | Industry | 🟢 +1 | 1.25 | Yahoo | GlobalFoundries and Marvell expand SiGe deal for AI data cen |
| 2026-09-17 | Industry | 🟢 +1 | 1.25 | Yahoo | Can MRVL's Data Center Business Sustain Its Growth in 2027? |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.75 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Nebius Sees A Game-Changer With The Price Increases
- 🟢 [Industry|w1.25] Nebius Group (NBIS) Raises AI Cloud Prices As Compute Demand Tests Cus

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Industry | ⚪  0 | 1.8 | Benzinga | Intel, Apple, Nvidia and More: 5 Stocks Investors Couldn't S |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Nebius Sees A Game-Changer With The Price Increases |
| 2026-09-17 | Industry | 🟢 +1 | 1.25 | Yahoo | Nebius Group (NBIS) Raises AI Cloud Prices As Compute Demand |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | NBIS Stock Jumps on Nebius Price Hike Rumors |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | Nebius announces higher rates for Nvidia GPUs and AMD CPUs |
| 2026-09-17 | Rumor | ⚪  0 | 0.75 | SeekingAlp | Nebius: You Don't Raise Prices Into A Slowdown |
| 2026-09-17 | Earnings | ⚪  0 | 1.63 | Yahoo | What's Happening With NBIS Stock? |

---

## ⚠️ Overheated (5)

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.32 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Arista Networks (ANET) Raises Full Year Outlook As AI Data Center Dema
- 🟢 [Industry|w1.5] Arista Networks (NYSE:ANET): High Growth Momentum Meets a Breakout Set
- 🟢 [Earnings|w1.36] Bull of the Day: Arista Networks, Inc. (ANET)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | How Much Does Arista Networks Stock Move When The Market Mov |
| 2026-09-18 | Earnings | 🟢 +1 | 1.95 | Yahoo | Arista Networks (ANET) Raises Full Year Outlook As AI Data C |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | ChartMill | Arista Networks (NYSE:ANET): High Growth Momentum Meets a Br |
| 2026-09-16 | Earnings | 🟢 +1 | 1.36 | Yahoo | Bull of the Day: Arista Networks, Inc. (ANET) |
| 2026-09-15 | Earnings | ⚪  0 | 1.17 | Yahoo | Can Arista's Third Guidance Raise Still Make You Money? |
| 2026-09-15 | Industry | ⚪  0 | 0.9 | Yahoo | Why the Market Dipped But Arista Networks (ANET) Gained Toda |
| 2026-09-15 | Earnings | 🟢 +1 | 1.17 | Yahoo | Was Arista Networks Stock's Surge Visible Before It Happened |
| 2026-09-15 | Industry | ⚪  0 | 0.9 | Yahoo | Jim Cramer on Arista (ANET) CEO: “She Is Money and the Compa |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.38 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 2 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Everpure Stock Gains 34% in 6 Months: Here's What You Should Know
- 🟢 [Industry|w1.5] Investing In Everpure: Growth Potential You Can't Ignore
- 🟢 [Analyst Action|w1.5] Why Everpure (P) Stock Is Up Today

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Investing In Everpure: Growth Potential You Can't Ignore |
| 2026-09-17 | Industry | 🟢 +1 | 1.25 | Yahoo | Everpure to Host 2026 Financial Analyst Meeting |
| 2026-09-17 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | Why Everpure (P) Stock Is Up Today |
| 2026-09-17 | Earnings | ⚪  0 | 1.63 | Yahoo | 3 Reasons P Has Explosive Upside Potential |
| 2026-09-17 | Earnings | 🟢 +1 | 1.63 | Yahoo | Everpure Stock Gains 34% in 6 Months: Here's What You Should |
| 2026-09-17 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Needham Reiterates Buy on Everpure, Maintains $140 Price Tar |

---

### NYSE:DT

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.26 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 10 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.8] This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For Friday
- 🟢 [Analyst Action|w1.8] Needham Upgrades Dynatrace to Buy, Announces $68 Price Target
- 🟢 [Industry|w1.5] Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Compounding

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | ChartMill | Dynatrace (NYSE:DT): A Quality Stock Built for Long-Term Com |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | This Etsy Analyst Turns Bullish; Here Are Top 5 Upgrades For |
| 2026-09-18 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Needham Upgrades Dynatrace to Buy, Announces $68 Price Targe |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | Dynatrace (DT) Exceeds Market Returns: Some Facts to Conside |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | FJTSY or DT: Which Is the Better Value Stock Right Now? |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | Dynatrace (DT) Targets Large European Enterprises With New O |
| 2026-09-15 | Industry | ⚪  0 | 0.9 | Yahoo | Why Dynatrace (DT) Stock Is Trading Up Today |
| 2026-09-15 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | BMO Capital Maintains Outperform on Dynatrace, Raises Price  |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 9.41 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Palo Alto Networks (PANW) Stock Gets Fair Value Boost After Analyst Ta
- 🟢 [Industry|w1.5] Cybersecurity Rally Hits a Valuation Reality Check. These ETFs Face th
- 🟢 [Industry|w1.5] Crowdstrike, Palo Alto Networks, and cybersecurity stocks post strong 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Palo Alto Networks (PANW) Stock Gets Fair Value Boost After  |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Asana, Five9, Palo Alto Networks, Rapid7, and Sprout Social  |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | ZS, CRWD, PANW Stock In Focus — Cybersecurity Firms Lead Wee |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Benzinga | Cybersecurity Rally Hits a Valuation Reality Check. These ET |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Why Palo Alto Networks Stock Dropped Today |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | Crowdstrike, Palo Alto Networks, and cybersecurity stocks po |
| 2026-09-18 | Industry | 🟢 +1 | 1.5 | Yahoo | CrowdStrike and Palo Alto Networks Are Soaring, but Is the R |
| 2026-09-17 | Industry | ⚪  0 | 1.25 | Yahoo | Jim Cramer Prefers Palo Alto (PANW) Over SentinelOne (S) |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 12 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Dow Jones Futures: Can The Market Rally Take Flight? Robinhood, Sandis
- 🟢 [Industry|w1.8] Dow Jones Futures: Will The Market Rally Take Flight? Robinhood, Sandi
- 🟢 [Industry|w1.8] Robinhood Soars, SpaceX Orbits Entry: Five Stocks Near Buy Points

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Can The Market Rally Take Flight? Robinho |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Will The Market Rally Take Flight? Robinh |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood Soars, SpaceX Orbits Entry: Five Stocks Near Buy P |
| 2026-09-19 | Policy | ⚪  0 | 2.16 | Yahoo | Not Just Banks: 3 Trading Stocks to Watch After the Fed Rate |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Prediction: Robinhood Will Pass $500 Billion in Customer Ass |
| 2026-09-19 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Nasdaq, S&P 500 Hold; Robinhood, Sandisk, |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Robinhood and Coinbase Shares Skyrocket, What You Need To Kn |
| 2026-09-18 | M&A | ⚪  0 | 2.1 | Yahoo | Robinhood CFO Shiv Verma Sells 11,472 Shares for $1.3 Millio |

---

## 🔴 Avoid / Short (2)

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **50** / 100 |
| Raw Weighted Score | 0.09 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Palantir: The Business Is Delivering, But The Price Still Demands Too 

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] PLTR's 110% Commercial Revenue Surge Defines Its Q2 Growth

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Palantir: The Business Is Delivering, But The Price Still De |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Jim Cramer Says His Palantir Technologies Inc. (NASDAQ:PLTR) |
| 2026-09-18 | Analyst Action | ⚪  0 | 1.8 | Benzinga | $1000 Invested In Palantir Technologies 5 Years Ago Would Be |
| 2026-09-18 | Earnings | ⚪  0 | 1.95 | Yahoo | Is Palantir's Lead Over Its Peers Already Priced In? |
| 2026-09-18 | Black Swan | 🔴 -1 | 2.25 | Yahoo | PLTR's 110% Commercial Revenue Surge Defines Its Q2 Growth |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Palantir Technologies (PLTR) AI Deal Rush Meets A Fair Value |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **43** / 100 |
| Raw Weighted Score | -1.8 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Rumor|w0.9] Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overvalued As 2n

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets a Breakout

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-19 | Black Swan | 🔴 -1 | 2.7 | ChartMill | Taiwan Semiconductor (NYSE:TSM): High Growth Momentum Meets  |
| 2026-09-18 | Earnings | ⚪  0 | 1.95 | Yahoo | TSMC (TSM) Beats Stock Market Upswing: What Investors Need t |
| 2026-09-18 | Industry | ⚪  0 | 1.5 | Yahoo | Why Is Taiwan Semiconductor Manufacturing (TSM) Ramping 2nm  |
| 2026-09-18 | Rumor | 🟢 +1 | 0.9 | Yahoo | Taiwan Semiconductor Manufacturing (TSM) Could Be 14% Overva |

---

## ⚪ Watch / Neutral (21)

### NASDAQ:VSAT
- Score: 59/100 | raw: 2.22 | News: 6 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ASX
- Score: 58/100 | raw: 2.02 | News: 5 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:QCOM
- Score: 58/100 | raw: 1.95 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 58/100 | raw: 1.95 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LITE
- Score: 55/100 | raw: 1.26 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BAP
- Score: 55/100 | raw: 1.26 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:GRAL
- Score: 50/100 | raw: 0 | News: 3 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 50/100 | raw: 0 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 0 kept / 30 dropped | No relevant news in window

### NYSE:BE
- Score: 49/100 | raw: -0.15 | News: 12 kept / 18 dropped | No clear directional bias — stay flat

### NYSE:HPE
- Score: 45/100 | raw: -1.09 | News: 6 kept / 24 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-20T12:31:22.432Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*