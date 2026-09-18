---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_958210e5b10111f188ac525400dcc5b3
    ReservedCode1: EUSOlqDjQmUFdrS49ne73559n9nZocKfW9KF8iK7LJ/z64EBvaYz7I6t3wzcq9/tgLj1FaxUT2XPjM1a7woBk9qEhmFdHexOiv9d19e6Cx/YnuxF+0UINqCF5ID+w86vhNIQCnwnemLThrGACqoFZFPUxvw06gioUKJeohVWlyT0/yY+XZVwOeLUB2M=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_958210e5b10111f188ac525400dcc5b3
    ReservedCode2: EUSOlqDjQmUFdrS49ne73559n9nZocKfW9KF8iK7LJ/z64EBvaYz7I6t3wzcq9/tgLj1FaxUT2XPjM1a7woBk9qEhmFdHexOiv9d19e6Cx/YnuxF+0UINqCF5ID+w86vhNIQCnwnemLThrGACqoFZFPUxvw06gioUKJeohVWlyT0/yY+XZVwOeLUB2M=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-15  |  **News Window:** 2026-09-08 ~ 2026-09-15（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (41)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:HPE** | **81** | 18.06 | 🟢 Long (Strong) | Momentum / Hold | High | 13/17 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:HOOD** | **73** | 12.54 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 19/11 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DELL** | **68** | 17.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 23/7 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:BE** | **65** | 3.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 5 | **NASDAQ:PANW** | **65** | 6.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/18 | - |
| 6 | **NYSE:NEM** | **64** | 3.24 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/12 | - |
| 7 | **NASDAQ:SMCI** | **62** | 2.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 8 | **NASDAQ:PGY** | **62** | 2.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/2 | - |
| 9 | **NASDAQ:MSFT** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 10 | **NYSE:WPM** | **60** | 2.43 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/8 | - |
| 11 | **NYSE:C** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/22 | - |
| 12 | **NASDAQ:PLTR** | **59** | 2.34 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 13 | **NASDAQ:CRWD** | **59** | 5.85 | ⚪ No Trade (Weak Bullish) | Watch | Low | 17/13 | Sentiment Strengthening UP (trend) |
| 14 | **NASDAQ:AAPL** | **57** | 6.15 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 21/9 | Sentiment Divergence (black swan masked by noise) |
| 15 | **NASDAQ:FIVE** | **57** | 1.74 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/4 | - |
| 16 | **NASDAQ:AMD** | **56** | 2.55 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/19 | - |
| 17 | **NASDAQ:NBIS** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 18 | **NYSE:LTC** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 19 | **NYSE:AR** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 20 | **NASDAQ:BGC** | **54** | 1.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 21 | **NYSE:JCI** | **54** | 0.97 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 22 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 24 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 25 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 27 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 28 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/6 | - |
| 30 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 31 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 33 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 34 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:SBCF** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 37 | **NYSE:ASX** | **48** | -0.4 | ⚪ No Trade (Neutral) | Watch | Low | 4/7 | - |
| 38 | **NYSE:CF** | **45** | -1.27 | ⚪ No Trade (Neutral) | Watch | Low | 3/3 | - |
| 39 | **NASDAQ:SNDK** | **43** | -1.62 | ⚪ No Trade (Neutral) | Watch | Low | 4/26 | - |
| 40 | **NYSE:ETN** | **43** | -1.8 | ⚪ No Trade (Neutral) | Watch | Low | 4/26 | - |
| 41 | **NASDAQ:PRGS** | **39** | -2.55 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/1 | - |

---

## 🟢 Strong Long (1)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 18.06 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Edge Computing Market by Offering, Application, Deployment Mode, Organ
- 🟢 [Earnings|w2.34] Why Hewlett Packard Enterprise (HPE) Shares Are Trading Lower Today
- 🟢 [Earnings|w2.34] Is HPE Stock Now A Bet On Memory Prices?

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Hewlett Packard Enterprise Sinks 9% on Downgrade After Triple-Digit Ru
- 🔴 [Analyst Action|w2.16] This Charter Communications Analyst Turns Bearish; Here Are Top 5 Down

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Earnings | 🟢 +1 | 2.76 | Yahoo | Edge Computing Market by Offering, Application, Deployment M |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | Why Hewlett Packard Enterprise (HPE) Shares Are Trading Lowe |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | HPE Stock Drops 11% To Worst Day In Over A Year After Everco |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | Is HPE Stock Now A Bet On Memory Prices? |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | Was The HPE Stock Surge Visible In Its Orders? |
| 2026-09-14 | Analyst Action | 🔴 -1 | 2.16 | Yahoo | Hewlett Packard Enterprise Sinks 9% on Downgrade After Tripl |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Evercore cuts HPE rating amid ’tougher setup’ |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Oracle’s $664 billion backlog sends a signal to Dell, HPE |

---

## 🟢 Mid Long (8)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 17.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 23 / 7 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Edge Computing Market by Offering, Application, Deployment Mode, Organ
- 🟢 [Earnings|w2.34] Dell Stock Is Up 331% Over the Past Year and Still Could Run Higher
- 🟢 [Earnings|w2.34] Should You Buy Dell Technologies Stock For All That AI Revenue?

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Hewlett Packard Enterprise Sinks 9% on Downgrade After Triple-Digit Ru
- 🔴 [Industry|w1.8] Dell Stock Tumbles 5% as Fresh AI Warning Sparks Tech Selloff

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Super Micro Computer (SMCI) Flags IT Control Weakness As Gov |
| 2026-09-15 | Earnings | 🟢 +1 | 2.76 | Yahoo | Edge Computing Market by Offering, Application, Deployment M |
| 2026-09-15 | Industry | 🟢 +1 | 2.13 | Yahoo | Dell Seeks $4 Billion as AI Boom Fuels Growth and Debt Manag |
| 2026-09-14 | Industry | 🔴 -1 | 1.8 | Yahoo | Dell Stock Tumbles 5% as Fresh AI Warning Sparks Tech Sellof |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell Stock Is Up 331% Over the Past Year and Still Could Run |
| 2026-09-14 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Drops Over 7% as AI Servers Pass Half of Infrastructure |
| 2026-09-14 | M&A | ⚪  0 | 2.52 | Yahoo | Baldwin Agrees to Go Private in $7.7 Billion Deal Involving  |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Michael Dell is now the fifth richest person in the world—hi |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Bloom Energy: Valuation Attractive, Buy This Dip
- 🟢 [Earnings|w1.36] Bloom Energy: Chances Are The Shares Are Still Trading Too Low

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | BE Stock Falls Most In Nearly A Month: Why This Analyst Sees |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Bloom Energy: Valuation Attractive, Buy This Dip |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy (BE) Declines More Than Market: Some Informatio |
| 2026-09-14 | Earnings | ⚪  0 | 2.34 | SeekingAlp | What The Bloom Energy Bulls Are Missing |
| 2026-09-11 | Industry | ⚪  0 | 1.05 | Yahoo | Bloom Energy Hits the Road with ESPN College Football Campus |
| 2026-09-11 | Rumor | ⚪  0 | 0.63 | Yahoo | AMD, BE, CRWV In Focus: Situational Awareness Has Been Repor |
| 2026-09-11 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Bloom Energy: Chances Are The Shares Are Still Trading Too L |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 6.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 18 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Why Palo Alto Networks Stock Popped Today
- 🟢 [Industry|w1.8] Why CrowdStrike and Palo Alto Are Leading the Software Stock Rally
- 🟢 [Industry|w1.8] PANW vs. FTNT: Which Cybersecurity Stock Should You Buy Right Now?

**Bearish Factors:**
- 🔴 [Industry|w1.8] CrowdStrike and Palo Alto Rallied While AI Stocks Sank. Wall Street Is

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Palo Alto Networks (PANW) Backs New Security Testing Model A |
| 2026-09-15 | Earnings | ⚪  0 | 2.76 | Yahoo | Major Cyber Security Vendors Back SE Labs' New Model for Ind |
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Atlassian, Palo Alto Networks, SentinelOne, monday.com, and  |
| 2026-09-14 | Earnings | ⚪  0 | 2.34 | Yahoo | Cybersecurity Stocks Q2 In Review: Palo Alto Networks (NASDA |
| 2026-09-14 | Industry | 🔴 -1 | 1.8 | Yahoo | CrowdStrike and Palo Alto Rallied While AI Stocks Sank. Wall |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Why Palo Alto Networks Stock Popped Today |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Cybersecurity Stocks Jump As Anthropic CEO’s AI Slowdown Cal |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Why CrowdStrike and Palo Alto Are Leading the Software Stock |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.24 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 12 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Should You Buy Newmont Stock After a 60% Rally in a Year?
- 🟢 [Analyst Action|w0.9] Bernstein Maintains Outperform on Newmont, Lowers Price Target to $144

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Here is What to Know Beyond Why Newmont Corporation (NEM) is |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | Should You Buy Newmont Stock After a 60% Rally in a Year? |
| 2026-09-11 | Analyst Action | ⚪  0 | 1.26 | Benzinga | Here’s How Much You Would Have Made Owning Newmont Stock In  |
| 2026-09-11 | Industry | ⚪  0 | 1.05 | Yahoo | Company News for Sep 11, 2026 |
| 2026-09-10 | Industry | ⚪  0 | 0.9 | Yahoo | Newmont Corporation (NEM) Dips More Than Broader Market: Wha |
| 2026-09-09 | Analyst Action | 🟢 +1 | 0.9 | Benzinga | Bernstein Maintains Outperform on Newmont, Lowers Price Targ |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Can SMCI Expand Its Market Opportunity With DCBBS and DLC?
- 🟢 [Earnings|w1.63] Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI Server Dem
- 🟢 [Earnings|w1.17] Super Micro Computer Sees $60B AI Order Book Powering Fiscal 2027 Outl

**Bearish Factors:**
- 🔴 [Industry|w1.8] Why Is Super Micro Computer Stock Falling Monday?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Super Micro Computer (SMCI) Flags IT Control Weakness As Gov |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Can SMCI Expand Its Market Opportunity With DCBBS and DLC? |
| 2026-09-14 | Industry | 🔴 -1 | 1.8 | Benzinga | Why Is Super Micro Computer Stock Falling Monday? |
| 2026-09-12 | Earnings | 🟢 +1 | 1.63 | Yahoo | Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI  |
| 2026-09-11 | Industry | ⚪  0 | 1.05 | Yahoo | SMCI or NTAP: Which Is the Better Value Stock Right Now? |
| 2026-09-11 | Industry | ⚪  0 | 1.05 | Benzinga | What Is Going On With SMCI Stock on Friday? |
| 2026-09-10 | Earnings | 🟢 +1 | 1.17 | Yahoo | Super Micro Computer Sees $60B AI Order Book Powering Fiscal |
| 2026-09-10 | Industry | ⚪  0 | 0.9 | SeekingAlp | Super Micro Computer, Inc. (SMCI) Presents at Goldman Sachs  |

---

### NASDAQ:PGY

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 2 |

**Bullish Factors:**
- 🟢 [Industry|w1.05] Pagaya Technologies Ltd -A (NASDAQ:PGY): Affordable Growth at a Reason
- 🟢 [Industry|w0.9] Best Value Stocks to Buy for September 10th
- 🟢 [Industry|w0.9] New Strong Buy Stocks for September 10th

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | 🟢 +1 | 1.05 | ChartMill | Pagaya Technologies Ltd -A (NASDAQ:PGY): Affordable Growth a |
| 2026-09-10 | Industry | 🟢 +1 | 0.9 | Yahoo | Best Value Stocks to Buy for September 10th |
| 2026-09-10 | Industry | 🟢 +1 | 0.9 | Yahoo | New Strong Buy Stocks for September 10th |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks
- 🟢 [Industry|w1.8] Amazon and Microsoft Can Buy GPUs. But U.S. Construction Is Short 439,

**Bearish Factors:**
- 🔴 [Industry|w1.8] S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressu

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Microsoft: Cheap After A 27% Rally As The AI Bear Case Crack |
| 2026-09-14 | Industry | 🔴 -1 | 1.8 | Yahoo | S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yi |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Why the Market Dipped But Microsoft (MSFT) Gained Today |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Amazon and Microsoft Can Buy GPUs. But U.S. Construction Is  |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | MSFT Stock Gains 2% — Microsoft Unveils ‘Humanist AI’ Code O |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.43 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 8 |

**Bullish Factors:**
- 🟢 [Policy|w1.26] Gold Miner's Luster Lures Funds; Stock Trades Around Buy Point
- 🟢 [Earnings|w1.17] WPM Posts Record Revenues in H126: Is More Upside Ahead?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Policy | 🟢 +1 | 1.26 | Yahoo | Gold Miner's Luster Lures Funds; Stock Trades Around Buy Poi |
| 2026-09-10 | Earnings | 🟢 +1 | 1.17 | Yahoo | WPM Posts Record Revenues in H126: Is More Upside Ahead? |

---

## 🟡 Cautious Long (1)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 12.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] HOOD's August Metrics Strong Amid Mixed Trading Trends: What's Ahead?
- 🟢 [M&A|w2.1] Robinhood (HOOD) Expands Prediction Markets With Crypto.com Partnershi
- 🟢 [Industry|w1.8] Robinhood's New Blockchain Is Now Making More Money Than Ethereum. Doe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Robinhood CEO Promises Voting Rights, Share Redemptions For  |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | HOOD's August Metrics Strong Amid Mixed Trading Trends: What |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood's New Blockchain Is Now Making More Money Than Eth |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood CEO Claps Back At AMC Chief As Stock Tokenization  |
| 2026-09-13 | Industry | ⚪  0 | 1.5 | Yahoo | AMC CEO Adam Aron Rips Robinhood’s Stock Token Model Again,  |
| 2026-09-13 | M&A | 🟢 +1 | 2.1 | Yahoo | Robinhood (HOOD) Expands Prediction Markets With Crypto.com  |
| 2026-09-12 | Rumor | 🟢 +1 | 0.75 | Yahoo | 3 Reasons I Think Cathie Wood Is Buying Robinhood Stock Agai |
| 2026-09-12 | Industry | ⚪  0 | 1.25 | Benzinga | Robinhood Stock on Edge as Kalshi Moves Deeper Into US Stock |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 12.54 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] HOOD's August Metrics Strong Amid Mixed Trading Trends: What's Ahead?
- 🟢 [M&A|w2.1] Robinhood (HOOD) Expands Prediction Markets With Crypto.com Partnershi
- 🟢 [Industry|w1.8] Robinhood's New Blockchain Is Now Making More Money Than Ethereum. Doe

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Robinhood CEO Promises Voting Rights, Share Redemptions For  |
| 2026-09-14 | Earnings | 🟢 +1 | 2.34 | Yahoo | HOOD's August Metrics Strong Amid Mixed Trading Trends: What |
| 2026-09-14 | Industry | 🟢 +1 | 1.8 | Yahoo | Robinhood's New Blockchain Is Now Making More Money Than Eth |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood CEO Claps Back At AMC Chief As Stock Tokenization  |
| 2026-09-13 | Industry | ⚪  0 | 1.5 | Yahoo | AMC CEO Adam Aron Rips Robinhood’s Stock Token Model Again,  |
| 2026-09-13 | M&A | 🟢 +1 | 2.1 | Yahoo | Robinhood (HOOD) Expands Prediction Markets With Crypto.com  |
| 2026-09-12 | Rumor | 🟢 +1 | 0.75 | Yahoo | 3 Reasons I Think Cathie Wood Is Buying Robinhood Stock Agai |
| 2026-09-12 | Industry | ⚪  0 | 1.25 | Benzinga | Robinhood Stock on Edge as Kalshi Moves Deeper Into US Stock |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 6.15 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 21 / 9 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated 
- 🟢 [Earnings|w2.34] Apple vs. Microsoft: This Is the Magnificent Seven Stock I’d Buy Today
- 🟢 [Analyst Action|w2.16] Apple's Siri Upgrade Does Not Require Every User to Buy Another iPhone

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] X Corp and SpaceXAI drop antitrust lawsuit against Apple
- 🔴 [Black Swan|w2.7] Musk’s xAI Resolves Claims Against Apple Over AI Competition

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Earnings | 🟢 +1 | 2.76 | Yahoo | Apple’s Outstanding Comedy Widow’s Bay triumphs as the most  |
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbin |
| 2026-09-15 | Industry | 🟢 +1 | 2.13 | Yahoo | Amazon Could Buy Up to $60 Billion From Qualcomm Just as App |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | OpenAI Left Exposed After Apple's Surprise Legal Break |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Apple's Siri Upgrade Does Not Require Every User to Buy Anot |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Jamf Announces Same-Day Support For macOS Golden Gate 27, iO |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Apple Duo Foldable iPhone a ‘Must Have Product,’ Gary Black  |
| 2026-09-14 | Black Swan | 🔴 -1 | 2.7 | Yahoo | X Corp and SpaceXAI drop antitrust lawsuit against Apple |

---

## 🔴 Avoid / Short (2)

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **57** / 100 |
| Raw Weighted Score | 6.15 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 21 / 9 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated 
- 🟢 [Earnings|w2.34] Apple vs. Microsoft: This Is the Magnificent Seven Stock I’d Buy Today
- 🟢 [Analyst Action|w2.16] Apple's Siri Upgrade Does Not Require Every User to Buy Another iPhone

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] X Corp and SpaceXAI drop antitrust lawsuit against Apple
- 🔴 [Black Swan|w2.7] Musk’s xAI Resolves Claims Against Apple Over AI Competition

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Earnings | 🟢 +1 | 2.76 | Yahoo | Apple’s Outstanding Comedy Widow’s Bay triumphs as the most  |
| 2026-09-15 | Industry | ⚪  0 | 2.13 | Yahoo | Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbin |
| 2026-09-15 | Industry | 🟢 +1 | 2.13 | Yahoo | Amazon Could Buy Up to $60 Billion From Qualcomm Just as App |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | OpenAI Left Exposed After Apple's Surprise Legal Break |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Apple's Siri Upgrade Does Not Require Every User to Buy Anot |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Jamf Announces Same-Day Support For macOS Golden Gate 27, iO |
| 2026-09-14 | Industry | ⚪  0 | 1.8 | Yahoo | Apple Duo Foldable iPhone a ‘Must Have Product,’ Gary Black  |
| 2026-09-14 | Black Swan | 🔴 -1 | 2.7 | Yahoo | X Corp and SpaceXAI drop antitrust lawsuit against Apple |

---

### NASDAQ:PRGS

| Metric | Detail |
|--------|--------|
| Normalized Score | **39** / 100 |
| Raw Weighted Score | -2.55 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 1 |

**Bearish Factors:**
- 🔴 [Analyst Action|w2.55] Progress Software: Domo Is A Shaky Business To Acquire (Rating Downgra

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Analyst Action | 🔴 -1 | 2.55 | SeekingAlp | Progress Software: Domo Is A Shaky Business To Acquire (Rati |
| 2026-09-09 | Industry | ⚪  0 | 0.75 | Yahoo | Progress Data Platform Summit 2026 Brings Together Data and  |

---

## ⚪ Watch / Neutral (29)

### NYSE:C
- Score: 59/100 | raw: 2.26 | News: 8 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLTR
- Score: 59/100 | raw: 2.34 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 59/100 | raw: 5.85 | News: 17 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Sentiment Strengthening UP (trend)

### NASDAQ:FIVE
- Score: 57/100 | raw: 1.74 | News: 9 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMD
- Score: 56/100 | raw: 2.55 | News: 11 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 55/100 | raw: 1.25 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 54/100 | raw: 0.97 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 54/100 | raw: 0.97 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 1.05 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 54/100 | raw: 0.97 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

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
- Score: 50/100 | raw: 0 | News: 2 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NASDAQ:SBCF
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NYSE:ASX
- Score: 48/100 | raw: -0.4 | News: 4 kept / 7 dropped | No clear directional bias — stay flat

### NYSE:CF
- Score: 45/100 | raw: -1.27 | News: 3 kept / 3 dropped | No clear directional bias — stay flat

### NASDAQ:SNDK
- Score: 43/100 | raw: -1.62 | News: 4 kept / 26 dropped | No clear directional bias — stay flat

### NYSE:ETN
- Score: 43/100 | raw: -1.8 | News: 4 kept / 26 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-15T12:32:30.120Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
