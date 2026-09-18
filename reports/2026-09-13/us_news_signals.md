---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_fbd4720aaf6e11f188ac525400dcc5b3
    ReservedCode1: oH7huc8NGaFf7/odq6MBOSf+2wNoswFhD3T259wQ+xrTl0j9yK0VxRHh6vvCGgXW0HZTqGHPOdviuQOtXIHcP7tPYmAQ0B/BN3+7iDdB0WPZBYL+Msql41TEQY70pk9SVf6VKCi4SmVXY8U4g0xS4vA6+5HkRWcgJ46FBf8b1ghwurGoGz/MME4CZn4=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_fbd4720aaf6e11f188ac525400dcc5b3
    ReservedCode2: oH7huc8NGaFf7/odq6MBOSf+2wNoswFhD3T259wQ+xrTl0j9yK0VxRHh6vvCGgXW0HZTqGHPOdviuQOtXIHcP7tPYmAQ0B/BN3+7iDdB0WPZBYL+Msql41TEQY70pk9SVf6VKCi4SmVXY8U4g0xS4vA6+5HkRWcgJ46FBf8b1ghwurGoGz/MME4CZn4=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-13  |  **News Window:** 2026-09-06 ~ 2026-09-13（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (48)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:TSM** | **89** | 9.6 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/23 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:STX** | **82** | 9.58 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:SNDK** | **80** | 7.08 | 🟢 Long (Strong) | Momentum / Hold | High | 4/26 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:C** | **79** | 7.01 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/20 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:APH** | **79** | 6.97 | 🟢 Long (Strong) | Momentum / Hold | High | 9/6 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:NBIS** | **75** | 5.94 | 🟢 Long (Strong) | Momentum / Hold | High | 7/23 | - |
| 7 | **NASDAQ:AMD** | **75** | 13.14 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 14/16 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:HPE** | **74** | 9.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/18 | - |
| 9 | **NASDAQ:HOOD** | **71** | 15.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/8 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:BE** | **70** | 4.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 11 | **NASDAQ:AAPL** | **70** | 13.71 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 17/13 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:LITE** | **69** | 4.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 13 | **NYSE:WPM** | **68** | 4.33 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/5 | - |
| 14 | **NASDAQ:MU** | **66** | 3.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 15 | **NASDAQ:FIVE** | **63** | 3.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/2 | - |
| 16 | **NYSE:DELL** | **61** | 7.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/13 | Sentiment Strengthening UP (trend) |
| 17 | **NYSE:ASX** | **61** | 2.72 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 18 | **NYSE:NEM** | **60** | 2.43 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/7 | - |
| 19 | **NYSE:RIO** | **60** | 2.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/3 | - |
| 20 | **NYSE:SCCO** | **59** | 2.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/11 | - |
| 21 | **NYSE:NEXA** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 22 | **NYSE:LTC** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 23 | **NYSE:AR** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 24 | **NASDAQ:BGC** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 25 | **NYSE:JCI** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 26 | **NASDAQ:AEHR** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/4 | - |
| 27 | **NYSE:RRC** | **55** | 1.08 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NYSE:MS** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 29 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 31 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 32 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 33 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 35 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 36 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 38 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 39 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 41 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 42 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 46 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 47 | **NYSE:ETN** | **48** | -0.39 | ⚪ No Trade (Neutral) | Watch | Low | 7/16 | - |
| 48 | **NYSE:CF** | **43** | -1.8 | ⚪ No Trade (Neutral) | Watch | Low | 3/3 | - |

---

## 🟢 Strong Long (3)

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.08 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 26 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Sandisk: The NAND Supercycle Makes This A Strong Buy
- 🟢 [Earnings|w1.95] Sandisk Shares Could Double (Or More) By 2030
- 🟢 [Industry|w1.5] Sandisk: NAND Party Likely To End In 2027

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Sandisk: The NAND Supercycle Makes This A Strong Buy |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Sandisk Shares Could Double (Or More) By 2030 |
| 2026-09-11 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Sandisk: NAND Party Likely To End In 2027 |
| 2026-09-11 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Sandisk: This Is Why You Should Buy It Now |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 6.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 6 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Top Stock Reports for Meta Platforms, Marvell & Amphenol
- 🟢 [Analyst Action|w1.8] Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why
- 🟢 [Earnings|w1.36] Amphenol: Priced At A Premium For A Reason

**Bearish Factors:**
- 🔴 [Analyst Action|w1.26] TD Cowen Maintains Hold on Amphenol, Lowers Price Target to $90

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | Top Stock Reports for Meta Platforms, Marvell & Amphenol |
| 2026-09-11 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | SeekingAlp | Amphenol Corporation (APH) Presents at Citi's 2026 Global TM |
| 2026-09-09 | Industry | 🟢 +1 | 1.05 | Yahoo | Amphenol Tests Key Level, Nears Pivot Amid Strong AI Datacom |
| 2026-09-09 | Analyst Action | 🔴 -1 | 1.26 | Benzinga | TD Cowen Maintains Hold on Amphenol, Lowers Price Target to  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Amphenol: Priced At A Premium For A Reason |
| 2026-09-09 | Analyst Action | ⚪  0 | 1.26 | SeekingAlp | Amphenol: Keep A Close Eye On Fed Rate Hikes Amid The Scorch |
| 2026-09-08 | Earnings | 🟢 +1 | 1.17 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.94 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Nebius And Palantir: Implications Of The New Partnership
- 🟢 [Earnings|w1.63] Nebius: Explosive Growth Meets A Stretched Valuation
- 🟢 [Analyst Action|w1.26] Truist Securities Initiates Coverage On Nebius Group with Buy Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Nebius And Palantir: Implications Of The New Partnership |
| 2026-09-11 | Industry | ⚪  0 | 1.5 | Yahoo | Nebius' Heavy CapEx Push: Can Customer Prepayments Ease the  |
| 2026-09-10 | Industry | ⚪  0 | 1.25 | Yahoo | Nebius Just Became Palantir’s Preferred AI Infrastructure Pa |
| 2026-09-10 | Industry | 🟢 +1 | 1.25 | SeekingAlp | Nebius: I'm Not Selling, But I'm Monetizing |
| 2026-09-10 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Nebius: Explosive Growth Meets A Stretched Valuation |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Truist Securities Initiates Coverage On Nebius Group with Bu |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | SeekingAlp | Nebius Group N.V. (NBIS) Presents at Citi's 2026 Global TMT  |

---

## 🟢 Mid Long (11)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 9.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 18 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Stock Market Today, Sept. 11: HPE Surges on AI Infrastructure Demand a
- 🟢 [Industry|w1.8] HPE's $7.6 Billion AI Backlog Is Waiting on Memory Supply to Catch Up
- 🟢 [Earnings|w1.63] AI Server Stocks Slide as Two-Day Run Unwinds: Hewlett Packard Enterpr

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | HPE's $7.6 Billion AI Backlog Is Waiting on Memory Supply to |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Turned Out Right For This Particular AI Stock Tha |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | Stock Market Today, Sept. 11: HPE Surges on AI Infrastructur |
| 2026-09-11 | Industry | ⚪  0 | 1.5 | Yahoo | What Did Dell Technologies Say Before Its Stock Quadrupled? |
| 2026-09-11 | Earnings | 🔴 -1 | 1.95 | Yahoo | Arista Networks Stock Rallied, But Is It Now A Bet On Its Su |
| 2026-09-11 | Industry | 🟢 +1 | 1.5 | Yahoo | Dell, HPE and HP Surge as AI Demand Fuels Hardware Boom |
| 2026-09-11 | Industry | ⚪  0 | 1.5 | Yahoo | Dell and HPE Stocks Are Surging on the AI Spending Boom |
| 2026-09-11 | Industry | 🟢 +1 | 1.5 | Yahoo | DELL, HPE Stocks Lead S&P 500 Gains: Oracle’s $95B Capex Pla |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 15.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 8 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [M&A|w2.98] Robinhood (HOOD) Expands Prediction Markets With Crypto.com Partnershi
- 🟢 [Earnings|w1.95] ServiceNow To Rally More Than 18%? Here Are 10 Top Analyst Forecasts F
- 🟢 [Industry|w1.8] Robinhood Markets Targets Global Growth With Tokenization, AI Trading 

**Bearish Factors:**
- 🔴 [Industry|w1.25] Robinhood Markets, Inc. (HOOD) Registers a Bigger Fall Than the Market

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Industry | ⚪  0 | 2.13 | Yahoo | AMC CEO Adam Aron Rips Robinhood’s Stock Token Model Again,  |
| 2026-09-13 | M&A | 🟢 +1 | 2.98 | Yahoo | Robinhood (HOOD) Expands Prediction Markets With Crypto.com  |
| 2026-09-12 | Rumor | 🟢 +1 | 1.08 | Yahoo | 3 Reasons I Think Cathie Wood Is Buying Robinhood Stock Agai |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Benzinga | Robinhood Stock on Edge as Kalshi Moves Deeper Into US Stock |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood Markets Targets Global Growth With Tokenization, A |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Said Robinhood Markets (NASDAQ:HOOD) Just Keeps O |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Breaks Down the Generational Shift Driving Robinh |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Benzinga | Benzinga Bulls and Bears: GameStop, Marvell, Robinhood |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Bloom Energy: Chances Are The Shares Are Still Trading Too Low
- 🟢 [Earnings|w1.63] Increasing Power Demand Amid AI Boom Strengthens Bloom Energy (BE)
- 🟢 [Industry|w1.25] Remain Bullish on AI Beneficiaries Like Bloom Energy

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy Hits the Road with ESPN College Football Campus |
| 2026-09-11 | Rumor | ⚪  0 | 0.9 | Yahoo | AMD, BE, CRWV In Focus: Situational Awareness Has Been Repor |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Bloom Energy: Chances Are The Shares Are Still Trading Too L |
| 2026-09-10 | Industry | 🟢 +1 | 1.25 | Yahoo | Remain Bullish on AI Beneficiaries Like Bloom Energy |
| 2026-09-10 | Industry | ⚪  0 | 1.25 | Yahoo | Newsweek Names Bloom Energy to World’s Most Trustworthy Comp |
| 2026-09-10 | Earnings | 🟢 +1 | 1.63 | Yahoo | Increasing Power Demand Amid AI Boom Strengthens Bloom Energ |
| 2026-09-09 | Policy | ⚪  0 | 1.26 | Yahoo | Stocks to Consider Before the Fed's September Decision: JPM, |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?
- 🟢 [Industry|w1.5] Lumentum: Why 2027 Will Be A Game Changer
- 🟢 [Industry|w1.05] LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAOI?

**Bearish Factors:**
- 🔴 [Industry|w1.05] Lumentum's $7.2 Billion Loss Was Not A Loss

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | AAOI's Optical Networking Demand Rise: Can It Beat LITE and  |
| 2026-09-11 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Lumentum: Why 2027 Will Be A Game Changer |
| 2026-09-10 | Earnings | ⚪  0 | 1.63 | Yahoo | Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report? |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | SeekingAlp | Lumentum Holdings Inc. (LITE) Presents at Citi's 2026 Global |
| 2026-09-09 | Industry | 🟢 +1 | 1.05 | Yahoo | LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAO |
| 2026-09-09 | Industry | 🟢 +1 | 1.05 | Yahoo | Buy 3 AI-Powered Photonics Stocks to Tap Solid Short-Term Pr |
| 2026-09-09 | Industry | 🔴 -1 | 1.05 | SeekingAlp | Lumentum's $7.2 Billion Loss Was Not A Loss |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.33 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 5 |

**Bullish Factors:**
- 🟢 [Policy|w1.8] Gold Miner's Luster Lures Funds; Stock Trades Around Buy Point
- 🟢 [Earnings|w1.63] WPM Posts Record Revenues in H126: Is More Upside Ahead?
- 🟢 [Industry|w0.9] Wheaton Precious Metals (NYSE:WPM) Combines High Growth Momentum with 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Policy | 🟢 +1 | 1.8 | Yahoo | Gold Miner's Luster Lures Funds; Stock Trades Around Buy Poi |
| 2026-09-10 | Earnings | 🟢 +1 | 1.63 | Yahoo | WPM Posts Record Revenues in H126: Is More Upside Ahead? |
| 2026-09-08 | Industry | ⚪  0 | 0.9 | Yahoo | Safety Stocks Are Not What They Used to Be: 4 Names Built fo |
| 2026-09-08 | Industry | 🟢 +1 | 0.9 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Combines High Growth Mome |
| 2026-09-07 | Analyst Action | ⚪  0 | 0.9 | Benzinga | Here's How Much $1000 Invested In Wheaton Precious Metals 10 |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Micron (MU)’s Taiwan Workers Want a Bigger Slice of its Record AI Prof
- 🟢 [Earnings|w1.95] An Intel-Backed Startup Says It Can Beat HBM. Is Micron’s AI Memory Bo

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Earnings | ⚪  0 | 2.76 | Yahoo | DeepSeek Cut Its KV-Cache HBM Need 75% and SSD Need 87.5%. M |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | Micron (MU)’s Taiwan Workers Want a Bigger Slice of its Reco |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | An Intel-Backed Startup Says It Can Beat HBM. Is Micron’s AI |
| 2026-09-11 | M&A | ⚪  0 | 2.1 | Yahoo | Goldman Sachs and Billionaires Like These 2 AI Stocks |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Five Below (FIVE) Q2 2027 Earnings Call Transcript
- 🟢 [Earnings|w1.36] Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy”
- 🟢 [Earnings|w1.36] Five Below's Strong Traffic & Transactions Drive Growth Momentum

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Five Below COO Trades $2.61M In Company Stock
- 🔴 [Industry|w1.25] Director Of Five Below Makes $1.07M Sale

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Thinks This Retailer Is “Extraordinary” With An “ |
| 2026-09-10 | Industry | 🟢 +1 | 1.25 | Yahoo | Five Below Faces Its Toughest Test Ahead After 5 Consecutive |
| 2026-09-10 | Earnings | 🔴 -1 | 1.63 | Benzinga | Five Below COO Trades $2.61M In Company Stock |
| 2026-09-10 | Industry | 🔴 -1 | 1.25 | Benzinga | Director Of Five Below Makes $1.07M Sale |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | Yahoo | Five Below (FIVE) Q2 2027 Earnings Call Transcript |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | Yahoo | Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy” |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | SeekingAlp | Five Below, Inc. (FIVE) Presents at Barclays 19th Annual Glo |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | Yahoo | Five Below's Strong Traffic & Transactions Drive Growth Mome |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI Server Dem
- 🟢 [Earnings|w1.95] Dell Technologies (DELL) Raises its AI Server Forecast for the Second 
- 🟢 [Industry|w1.8] Dell Technologies: AI Orders Surge as Storage Growth Builds and Supply

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?
- 🔴 [Policy|w1.8] S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye F

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Earnings | ⚪  0 | 2.76 | Yahoo | Nscale’s Funding Talks Put Dell and Nokia’s AI Supply Relati |
| 2026-09-13 | Industry | ⚪  0 | 2.13 | SeekingAlp | Dell: Powerhouse AI Stock |
| 2026-09-13 | Earnings | ⚪  0 | 2.76 | Yahoo | Dell Booked More AI Server Orders in 3 Months Than It Record |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Dell Technologies Sees AI Boom Building as $95B Server Backl |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell Technologies: AI Orders Surge as Storage Growth Builds  |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Compares Dell (DELL) to Dallas Cowboys Star CeeDe |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Jim Cramer Turned Out Right For This Particular AI Stock Tha |
| 2026-09-12 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI  |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.72 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] ASE Technology Surges 16% in 3 Months: Time to Hold or Fold the Stock?
- 🟢 [Earnings|w1.36] ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend and High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | Yahoo | ASE Technology Surges 16% in 3 Months: Time to Hold or Fold  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | ChartMill | ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend |
| 2026-09-09 | Earnings | ⚪  0 | 1.36 | Yahoo | ASE Technology Holding Co., Ltd. Announces Monthly Net Reven |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.43 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 7 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Bernstein Maintains Outperform on Newmont, Lowers Price Target to $144
- 🟢 [Earnings|w1.17] Bond Yields Are Pressuring Gold, But Miners May Tell a Different Story

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Analyst Action | ⚪  0 | 1.8 | Benzinga | Here’s How Much You Would Have Made Owning Newmont Stock In  |
| 2026-09-11 | Industry | ⚪  0 | 1.5 | Yahoo | Company News for Sep 11, 2026 |
| 2026-09-10 | Industry | ⚪  0 | 1.25 | Yahoo | Newmont Corporation (NEM) Dips More Than Broader Market: Wha |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Bernstein Maintains Outperform on Newmont, Lowers Price Targ |
| 2026-09-08 | Analyst Action | ⚪  0 | 1.08 | Yahoo | Is Newmont Stock Outperforming the Nasdaq? |
| 2026-09-08 | Earnings | ⚪  0 | 1.17 | Yahoo | Can NEM Maintain Earnings Momentum Amid Production Challenge |
| 2026-09-08 | Earnings | 🟢 +1 | 1.17 | Yahoo | Bond Yields Are Pressuring Gold, But Miners May Tell a Diffe |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 3 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.26] Bernstein Maintains Outperform on Rio Tinto, Raises Price Target to $8
- 🟢 [Industry|w1.25] Nyangumarta Warrarn Aboriginal Corporation and Rio Tinto sign mileston

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | M&A | ⚪  0 | 2.1 | Yahoo | Aurukun Deal Gives Rio Tinto (RIO) More Bauxite Upside, But  |
| 2026-09-10 | Industry | 🟢 +1 | 1.25 | Yahoo | Nyangumarta Warrarn Aboriginal Corporation and Rio Tinto sig |
| 2026-09-09 | Earnings | ⚪  0 | 1.36 | Yahoo | Domestic Metals launches 9,000-metre drill program at Rio Ti |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | Yahoo | Graphene Manufacturing Group's fast-charging battery cells s |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | Yahoo | GMG Announces Long Life Battery Cycling Data |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Bernstein Maintains Outperform on Rio Tinto, Raises Price Ta |
| 2026-09-08 | Industry | ⚪  0 | 0.9 | Yahoo | Rio Tinto to take over Queensland’s Aurukun Bauxite Project |
| 2026-09-08 | M&A | ⚪  0 | 1.26 | Yahoo | Domestic Metals commences drilling at Rio Tinto joint ventur |

---

## 🟡 Cautious Long (1)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 13.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Jim Cramer Flips the Script: Why Older Investors Should Ditch Growth S
- 🟢 [Earnings|w2.34] Apple’s Foldable iPhone Could Trigger a Massive 'Upgrade Cycle,' Says 
- 🟢 [Industry|w2.13] Investing $20,000 in Apple Stock 10 Years Ago Paid Off More Than Inves

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Industry | 🟢 +1 | 2.13 | Yahoo | Investing $20,000 in Apple Stock 10 Years Ago Paid Off More  |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Benzinga | Consumer Tech (Sep 7-11): Apple Launches First Foldable iPho |
| 2026-09-12 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jim Cramer Flips the Script: Why Older Investors Should Ditc |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple, Taiwan Semi Lead Five Stocks Near Buy Points |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Apple and Taiwan Semiconductor Manufacturing Just Announced  |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Qualcomm Lost Apple’s Modem Business. Amazon Just Offered a  |
| 2026-09-12 | Policy | ⚪  0 | 2.16 | Yahoo | Dow Jones Futures: Fed Rate Hike Seen As Oil, Yields Pressur |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Benzinga | Bitcoin's iPhone Ratio Crashed 99.99% Since 2011: Here's How |

---

## ⚠️ Overheated (4)

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 9.6 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM
- 🟢 [Earnings|w1.95] TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing Power Could
- 🟢 [Earnings|w1.95] TSM Just Posted Record Sales. Nvidia May Be Both the Winner and the On

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple, Taiwan Semi Lead Five Stocks Near Buy Points |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing P |
| 2026-09-11 | Rumor | ⚪  0 | 0.9 | Yahoo | Marvell Is Winning Custom AI Business. TSMC May Be the Safer |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | TSM Just Posted Record Sales. Nvidia May Be Both the Winner  |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | TSM’s Record Sales Say AI Chips Are Booming. The Nvidia-AMD  |
| 2026-09-11 | Earnings | ⚪  0 | 1.95 | Benzinga | AI Demand Keeps Breaking Records at Taiwan Semiconductor |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 9.58 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Seagate Technology Sees AI Storage Demand Fueling HAMR Growth and Marg
- 🟢 [Earnings|w2.34] Seagate Technology Holdings (NASDAQ:STX): A Quality Dividend Pick for 
- 🟢 [Industry|w1.8] Seagate: The HDD Shortage Still Has Legs

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Earnings | 🟢 +1 | 2.76 | Yahoo | Seagate Technology Sees AI Storage Demand Fueling HAMR Growt |
| 2026-09-12 | Earnings | 🟢 +1 | 2.34 | ChartMill | Seagate Technology Holdings (NASDAQ:STX): A Quality Dividend |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Seagate: The HDD Shortage Still Has Legs |
| 2026-09-10 | Industry | ⚪  0 | 1.25 | SeekingAlp | Seagate Technology Holdings plc (STX) Presents at Goldman Sa |
| 2026-09-10 | Earnings | 🟢 +1 | 1.63 | Yahoo | Can Seagate Sustain Its Strong Revenue Growth in Fiscal 2027 |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | SeekingAlp | Seagate Technology Holdings plc (STX) Presents at Citi's 202 |
| 2026-09-09 | Industry | 🟢 +1 | 1.05 | Yahoo | Seagate's HAMR Bet is Paying Off: Can Mozaic Sustain the Mom |
| 2026-09-09 | Industry | ⚪  0 | 1.05 | Yahoo | Seagate Completes Redemption of Exchangeable Notes |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 7.01 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 20 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] 3 Reasons to Avoid C and 1 Stock to Buy Instead
- 🟢 [Earnings|w1.36] Citigroup's Restructuring Is Working, And Valuation Has Not Caught Up
- 🟢 [Industry|w1.25] 4 Thriving Investment Bank Behemoths to Buy With Attractive Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | 3 Reasons to Avoid C and 1 Stock to Buy Instead |
| 2026-09-10 | Industry | ⚪  0 | 1.25 | Yahoo | Citigroup (C) Completed a Weekend Tokenized-Dollar Transfer. |
| 2026-09-10 | Rumor | ⚪  0 | 0.75 | Yahoo | C Pushes Tokenized Deposits Deeper Into Asia With Japan Expa |
| 2026-09-10 | Policy | ⚪  0 | 1.5 | Yahoo | Citigroup (C) Gains on Turnaround Momentum |
| 2026-09-10 | Industry | 🟢 +1 | 1.25 | Yahoo | 4 Thriving Investment Bank Behemoths to Buy With Attractive  |
| 2026-09-09 | Industry | 🟢 +1 | 1.05 | Yahoo | Is It Worth Investing in Citigroup (C) Based on Wall Street' |
| 2026-09-09 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Citigroup's Restructuring Is Working, And Valuation Has Not  |
| 2026-09-08 | Industry | 🟢 +1 | 0.9 | Yahoo | Citi turns more bullish on trucking stocks |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 13.14 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Wall Street Analyst Sees Between 19% to 37% Upside in These 5 AI Chip 
- 🟢 [Earnings|w2.34] Why AMD Stock Forecast Has Room to Run
- 🟢 [Earnings|w1.95] TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing Power Could

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Wall Street Analyst Sees Between 19% to 37% Upside in These  |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Advanced Micro Devices, Inc. (AMD)’s Halo Station Could Stre |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | Nvidia vs. AMD: Elon Musk Picked a Side on the SpaceX Earnin |
| 2026-09-12 | Earnings | 🟢 +1 | 2.34 | Yahoo | Why AMD Stock Forecast Has Room to Run |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Yahoo | AMD Just Raised the Top of the Company's 2030 Market to $3 T |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | AMD’s CFO, Jean Hu, Just Announced Fantastic News for Invest |
| 2026-09-11 | Earnings | 🟢 +1 | 1.95 | Yahoo | TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing P |
| 2026-09-11 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | Marvell CEO reveals decade-long gem behind its explosive 239 |

---

## ⚠️ Risk Pattern (1)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 13.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Jim Cramer Flips the Script: Why Older Investors Should Ditch Growth S
- 🟢 [Earnings|w2.34] Apple’s Foldable iPhone Could Trigger a Massive 'Upgrade Cycle,' Says 
- 🟢 [Industry|w2.13] Investing $20,000 in Apple Stock 10 Years Ago Paid Off More Than Inves

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Industry | 🟢 +1 | 2.13 | Yahoo | Investing $20,000 in Apple Stock 10 Years Ago Paid Off More  |
| 2026-09-12 | Earnings | ⚪  0 | 2.34 | Benzinga | Consumer Tech (Sep 7-11): Apple Launches First Foldable iPho |
| 2026-09-12 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jim Cramer Flips the Script: Why Older Investors Should Ditc |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple, Taiwan Semi Lead Five Stocks Near Buy Points |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Apple and Taiwan Semiconductor Manufacturing Just Announced  |
| 2026-09-12 | Industry | ⚪  0 | 1.8 | Yahoo | Qualcomm Lost Apple’s Modem Business. Amazon Just Offered a  |
| 2026-09-12 | Policy | ⚪  0 | 2.16 | Yahoo | Dow Jones Futures: Fed Rate Hike Seen As Oil, Yields Pressur |
| 2026-09-12 | Industry | 🟢 +1 | 1.8 | Benzinga | Bitcoin's iPhone Ratio Crashed 99.99% Since 2011: Here's How |

---

## ⚪ Watch / Neutral (29)

### NYSE:SCCO
- Score: 59/100 | raw: 2.25 | News: 4 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEXA
- Score: 58/100 | raw: 1.8 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 56/100 | raw: 1.36 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 56/100 | raw: 1.36 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 56/100 | raw: 1.5 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 56/100 | raw: 1.36 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 56/100 | raw: 1.5 | News: 4 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RRC
- Score: 55/100 | raw: 1.08 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 55/100 | raw: 1.25 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SM
- Score: 50/100 | raw: 0 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### AMEX:CET
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ETN
- Score: 48/100 | raw: -0.39 | News: 7 kept / 16 dropped | No clear directional bias — stay flat

### NYSE:CF
- Score: 43/100 | raw: -1.8 | News: 3 kept / 3 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-13T12:30:42.752Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
