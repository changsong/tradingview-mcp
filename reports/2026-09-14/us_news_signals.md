---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_2635a9d1b03811f1ac01525400e6dd8f
    ReservedCode1: OVpa9hJx2ri6WXsYJhbqPnJ1vgb00NKeVN/7rMiejvqYcc3oFjsbhxLfC6I3qBA7n71+UxgW8BuXORvMKNciewUoyk2tl+XOCtsvIhl7MZUJCK5B2w6rh2EAvAj3kd4lGKwM0Yyb4lEbM226ai0jme35vgQ/NJw78Kb9WyIgVr/KKMAPvyUl/3zTJc8=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_2635a9d1b03811f1ac01525400e6dd8f
    ReservedCode2: OVpa9hJx2ri6WXsYJhbqPnJ1vgb00NKeVN/7rMiejvqYcc3oFjsbhxLfC6I3qBA7n71+UxgW8BuXORvMKNciewUoyk2tl+XOCtsvIhl7MZUJCK5B2w6rh2EAvAj3kd4lGKwM0Yyb4lEbM226ai0jme35vgQ/NJw78Kb9WyIgVr/KKMAPvyUl/3zTJc8=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-14  |  **News Window:** 2026-09-07 ~ 2026-09-14（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (40)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:TSM** | **83** | 8.02 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/24 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:APH** | **83** | 7.97 | 🟢 Long (Strong) | Momentum / Hold | High | 10/7 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:HPE** | **82** | 18 | 🟢 Long (Strong) | Momentum / Hold | High | 15/15 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:C** | **73** | 5.5 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 8/22 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:SMCI** | **73** | 5.41 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 6 | **NASDAQ:HOOD** | **71** | 13.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/8 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NBIS** | **71** | 4.99 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 8 | **NYSE:DELL** | **68** | 13.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 21/9 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:BE** | **67** | 4.04 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 10 | **NASDAQ:LITE** | **66** | 3.78 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | - |
| 11 | **NYSE:WPM** | **65** | 3.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/6 | - |
| 12 | **NASDAQ:FIVE** | **62** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/2 | - |
| 13 | **NYSE:ASX** | **60** | 2.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 14 | **NASDAQ:AMD** | **60** | 5.11 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/17 | - |
| 15 | **NYSE:NEM** | **59** | 2.05 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/8 | - |
| 16 | **NYSE:WT** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/2 | - |
| 17 | **NASDAQ:SNDK** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/28 | - |
| 18 | **NYSE:LTC** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 19 | **NYSE:AR** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 20 | **NASDAQ:BGC** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 21 | **NYSE:JCI** | **55** | 1.17 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 22 | **NASDAQ:AEHR** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 23 | **NASDAQ:MU** | **53** | 0.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 24 | **NASDAQ:AAPL** | **51** | 0.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 16/14 | - |
| 25 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 26 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 27 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 28 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 30 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 31 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/6 | - |
| 33 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 34 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 36 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 37 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **NYSE:ETN** | **49** | -0.35 | ⚪ No Trade (Neutral) | Watch | Low | 6/17 | - |
| 40 | **NYSE:CF** | **44** | -1.5 | ⚪ No Trade (Neutral) | Watch | Low | 3/3 | - |

---

## 🟢 Strong Long (2)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 7.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 7 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] The Zacks Analyst Blog Highlights Meta, Marvell, Amphenol, SandRidge a
- 🟢 [Earnings|w1.63] Top Stock Reports for Meta Platforms, Marvell & Amphenol
- 🟢 [Analyst Action|w1.5] Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why

**Bearish Factors:**
- 🔴 [Analyst Action|w1.08] TD Cowen Maintains Hold on Amphenol, Lowers Price Target to $90

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | Yahoo | The Zacks Analyst Blog Highlights Meta, Marvell, Amphenol, S |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | Top Stock Reports for Meta Platforms, Marvell & Amphenol |
| 2026-09-11 | Analyst Action | 🟢 +1 | 1.5 | Yahoo | Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why |
| 2026-09-09 | Industry | ⚪  0 | 0.9 | SeekingAlp | Amphenol Corporation (APH) Presents at Citi's 2026 Global TM |
| 2026-09-09 | Industry | 🟢 +1 | 0.9 | Yahoo | Amphenol Tests Key Level, Nears Pivot Amid Strong AI Datacom |
| 2026-09-09 | Analyst Action | 🔴 -1 | 1.08 | Benzinga | TD Cowen Maintains Hold on Amphenol, Lowers Price Target to  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Amphenol: Priced At A Premium For A Reason |
| 2026-09-09 | Analyst Action | ⚪  0 | 1.08 | SeekingAlp | Amphenol: Keep A Close Eye On Fed Rate Hikes Amid The Scorch |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 18 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Hewlett Packard Enterprise (HPE) Surges 19% in a Week — What to Watch 
- 🟢 [Earnings|w2.76] Hewlett Packard Enterprise: At 16x FCF Stock Looks Ready To Inflect Hi
- 🟢 [Earnings|w2.76] Hewlett Packard Enterprise Sees AI, Networking Demand Outrun Supply as

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Analyst Action | ⚪  0 | 2.55 | Yahoo | HPE Stock Is Downgraded After Rising 159% This Year. Why? |
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | ChartMill | Friday's Oil-Relief Rally Meets a Weekend of Saudi Pipeline  |
| 2026-09-14 | Earnings | 🟢 +1 | 2.76 | Yahoo | Hewlett Packard Enterprise (HPE) Surges 19% in a Week — What |
| 2026-09-14 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Hewlett Packard Enterprise: At 16x FCF Stock Looks Ready To  |
| 2026-09-14 | Earnings | 🟢 +1 | 2.76 | Yahoo | Hewlett Packard Enterprise Sees AI, Networking Demand Outrun |
| 2026-09-13 | Earnings | 🟢 +1 | 2.34 | Yahoo | Hewlett Packard Enterprise Raises 2027 Outlook as AI Network |
| 2026-09-12 | Industry | 🟢 +1 | 1.5 | Yahoo | HPE's $7.6 Billion AI Backlog Is Waiting on Memory Supply to |
| 2026-09-12 | Earnings | ⚪  0 | 1.95 | Yahoo | Jim Cramer Turned Out Right For This Particular AI Stock Tha |

---

## 🟢 Mid Long (10)

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.41 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI Server Dem
- 🟢 [Earnings|w1.36] Super Micro Computer Sees $60B AI Order Book Powering Fiscal 2027 Outl
- 🟢 [Industry|w1.05] Dear Super Micro Stock Fans, Here's What August's Rally Means for SMCI

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | 🟢 +1 | 1.95 | Yahoo | Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI  |
| 2026-09-11 | Industry | ⚪  0 | 1.25 | Yahoo | SMCI or NTAP: Which Is the Better Value Stock Right Now? |
| 2026-09-11 | Industry | ⚪  0 | 1.25 | Benzinga | What Is Going On With SMCI Stock on Friday? |
| 2026-09-10 | Earnings | 🟢 +1 | 1.36 | Yahoo | Super Micro Computer Sees $60B AI Order Book Powering Fiscal |
| 2026-09-10 | Industry | ⚪  0 | 1.05 | SeekingAlp | Super Micro Computer, Inc. (SMCI) Presents at Goldman Sachs  |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | Dear Super Micro Stock Fans, Here's What August's Rally Mean |
| 2026-09-10 | Earnings | ⚪  0 | 1.36 | Yahoo | Super Micro (SMCI) Up 3.5% Since Last Earnings Report: Can I |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | 2 Reasons to Buy Super Micro Stock — And 1 Reason to Be Caut |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 13.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 8 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [M&A|w2.52] Robinhood (HOOD) Expands Prediction Markets With Crypto.com Partnershi
- 🟢 [Industry|w2.13] Robinhood's New Blockchain Is Now Making More Money Than Ethereum. Doe
- 🟢 [Earnings|w1.63] ServiceNow To Rally More Than 18%? Here Are 10 Top Analyst Forecasts F

**Bearish Factors:**
- 🔴 [Industry|w1.05] Robinhood Markets, Inc. (HOOD) Registers a Bigger Fall Than the Market

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | Yahoo | Robinhood's New Blockchain Is Now Making More Money Than Eth |
| 2026-09-14 | Industry | ⚪  0 | 2.13 | Yahoo | Robinhood CEO Claps Back At AMC Chief As Stock Tokenization  |
| 2026-09-13 | Industry | ⚪  0 | 1.8 | Yahoo | AMC CEO Adam Aron Rips Robinhood’s Stock Token Model Again,  |
| 2026-09-13 | M&A | 🟢 +1 | 2.52 | Yahoo | Robinhood (HOOD) Expands Prediction Markets With Crypto.com  |
| 2026-09-12 | Rumor | 🟢 +1 | 0.9 | Yahoo | 3 Reasons I Think Cathie Wood Is Buying Robinhood Stock Agai |
| 2026-09-12 | Industry | ⚪  0 | 1.5 | Benzinga | Robinhood Stock on Edge as Kalshi Moves Deeper Into US Stock |
| 2026-09-12 | Industry | 🟢 +1 | 1.5 | Yahoo | Robinhood Markets Targets Global Growth With Tokenization, A |
| 2026-09-12 | Earnings | ⚪  0 | 1.95 | Yahoo | Jim Cramer Said Robinhood Markets (NASDAQ:HOOD) Just Keeps O |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.99 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Nebius And Palantir: Implications Of The New Partnership
- 🟢 [Earnings|w1.36] Nebius: Explosive Growth Meets A Stretched Valuation
- 🟢 [Analyst Action|w1.08] Truist Securities Initiates Coverage On Nebius Group with Buy Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Nebius And Palantir: Implications Of The New Partnership |
| 2026-09-11 | Industry | ⚪  0 | 1.25 | Yahoo | Nebius' Heavy CapEx Push: Can Customer Prepayments Ease the  |
| 2026-09-10 | Industry | ⚪  0 | 1.05 | Yahoo | Nebius Just Became Palantir’s Preferred AI Infrastructure Pa |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | SeekingAlp | Nebius: I'm Not Selling, But I'm Monetizing |
| 2026-09-10 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | Nebius: Explosive Growth Meets A Stretched Valuation |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.08 | Benzinga | Truist Securities Initiates Coverage On Nebius Group with Bu |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 13.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 21 / 9 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Dell Shares Reach Record High After RBC Starts Coverage With Outperfor
- 🟢 [Industry|w2.13] Friday's Oil-Relief Rally Meets a Weekend of Saudi Pipeline Fires, AI 
- 🟢 [Industry|w2.13] Why Did HPQ, DELL, VLO Stocks Surge To 52-Week Highs Last Week?

**Bearish Factors:**
- 🔴 [Earnings|w1.63] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?
- 🔴 [Policy|w1.5] S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye F

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | ChartMill | Friday's Oil-Relief Rally Meets a Weekend of Saudi Pipeline  |
| 2026-09-14 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Dell Shares Reach Record High After RBC Starts Coverage With |
| 2026-09-14 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Believes This AI Stock Is The Way To Go Over DRAM |
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Did HPQ, DELL, VLO Stocks Surge To 52-Week Highs Last We |
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Dell Stock Climbed to a New All-Time High This Week |
| 2026-09-13 | Earnings | ⚪  0 | 2.34 | Yahoo | Nvidia Gets the AI Hype. Dell Gets the Billionaire Fortune |
| 2026-09-13 | Earnings | ⚪  0 | 2.34 | Yahoo | Nscale’s Funding Talks Put Dell and Nokia’s AI Supply Relati |
| 2026-09-13 | Industry | ⚪  0 | 1.8 | SeekingAlp | Dell: Powerhouse AI Stock |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.04 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Bloom Energy: Chances Are The Shares Are Still Trading Too Low
- 🟢 [Earnings|w1.36] Increasing Power Demand Amid AI Boom Strengthens Bloom Energy (BE)
- 🟢 [Industry|w1.05] Remain Bullish on AI Beneficiaries Like Bloom Energy

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | ⚪  0 | 1.25 | Yahoo | Bloom Energy Hits the Road with ESPN College Football Campus |
| 2026-09-11 | Rumor | ⚪  0 | 0.75 | Yahoo | AMD, BE, CRWV In Focus: Situational Awareness Has Been Repor |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Bloom Energy: Chances Are The Shares Are Still Trading Too L |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | Remain Bullish on AI Beneficiaries Like Bloom Energy |
| 2026-09-10 | Industry | ⚪  0 | 1.05 | Yahoo | Newsweek Names Bloom Energy to World’s Most Trustworthy Comp |
| 2026-09-10 | Earnings | 🟢 +1 | 1.36 | Yahoo | Increasing Power Demand Amid AI Boom Strengthens Bloom Energ |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.78 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?
- 🟢 [Industry|w1.25] Lumentum: Why 2027 Will Be A Game Changer
- 🟢 [Industry|w0.9] LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAOI?

**Bearish Factors:**
- 🔴 [Industry|w0.9] Lumentum's $7.2 Billion Loss Was Not A Loss

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | AAOI's Optical Networking Demand Rise: Can It Beat LITE and  |
| 2026-09-11 | Industry | 🟢 +1 | 1.25 | SeekingAlp | Lumentum: Why 2027 Will Be A Game Changer |
| 2026-09-10 | Earnings | ⚪  0 | 1.36 | Yahoo | Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report? |
| 2026-09-09 | Industry | ⚪  0 | 0.9 | SeekingAlp | Lumentum Holdings Inc. (LITE) Presents at Citi's 2026 Global |
| 2026-09-09 | Industry | 🟢 +1 | 0.9 | Yahoo | LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAO |
| 2026-09-09 | Industry | 🟢 +1 | 0.9 | Yahoo | Buy 3 AI-Powered Photonics Stocks to Tap Solid Short-Term Pr |
| 2026-09-09 | Industry | 🔴 -1 | 0.9 | SeekingAlp | Lumentum's $7.2 Billion Loss Was Not A Loss |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.61 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 6 |

**Bullish Factors:**
- 🟢 [Policy|w1.5] Gold Miner's Luster Lures Funds; Stock Trades Around Buy Point
- 🟢 [Earnings|w1.36] WPM Posts Record Revenues in H126: Is More Upside Ahead?
- 🟢 [Industry|w0.75] Wheaton Precious Metals (NYSE:WPM) Combines High Growth Momentum with 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Policy | 🟢 +1 | 1.5 | Yahoo | Gold Miner's Luster Lures Funds; Stock Trades Around Buy Poi |
| 2026-09-10 | Earnings | 🟢 +1 | 1.36 | Yahoo | WPM Posts Record Revenues in H126: Is More Upside Ahead? |
| 2026-09-08 | Industry | ⚪  0 | 0.75 | Yahoo | Safety Stocks Are Not What They Used to Be: 4 Names Built fo |
| 2026-09-08 | Industry | 🟢 +1 | 0.75 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Combines High Growth Mome |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] Five Below (FIVE) Q2 2027 Earnings Call Transcript
- 🟢 [Earnings|w1.17] Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy”
- 🟢 [Earnings|w1.17] Five Below's Strong Traffic & Transactions Drive Growth Momentum

**Bearish Factors:**
- 🔴 [Earnings|w1.36] Five Below COO Trades $2.61M In Company Stock
- 🔴 [Industry|w1.05] Director Of Five Below Makes $1.07M Sale

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-13 | Industry | ⚪  0 | 1.8 | Yahoo | Insiders Trim Positions in Five Below Stock After 39% Run-Up |
| 2026-09-12 | Earnings | ⚪  0 | 1.95 | Yahoo | Jim Cramer Thinks This Retailer Is “Extraordinary” With An “ |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | Five Below Faces Its Toughest Test Ahead After 5 Consecutive |
| 2026-09-10 | Earnings | 🔴 -1 | 1.36 | Benzinga | Five Below COO Trades $2.61M In Company Stock |
| 2026-09-10 | Industry | 🔴 -1 | 1.05 | Benzinga | Director Of Five Below Makes $1.07M Sale |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | Yahoo | Five Below (FIVE) Q2 2027 Earnings Call Transcript |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | Yahoo | Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy” |
| 2026-09-09 | Industry | ⚪  0 | 0.9 | SeekingAlp | Five Below, Inc. (FIVE) Presents at Barclays 19th Annual Glo |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w1.17] ASE Technology Surges 16% in 3 Months: Time to Hold or Fold the Stock?
- 🟢 [Earnings|w1.17] ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend and High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | Yahoo | ASE Technology Surges 16% in 3 Months: Time to Hold or Fold  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | ChartMill | ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend |
| 2026-09-09 | Earnings | ⚪  0 | 1.17 | Yahoo | ASE Technology Holding Co., Ltd. Announces Monthly Net Reven |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 5.11 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 17 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] Wall Street Analyst Sees Between 19% to 37% Upside in These 5 AI Chip 
- 🟢 [Industry|w2.13] Intel, AMD, Marvell, Oracle, CrowdStrike, and More Stocks That Explain
- 🟢 [Earnings|w1.95] Why AMD Stock Forecast Has Room to Run

**Bearish Factors:**
- 🔴 [Industry|w2.13] Social Buzz: Wallstreetbets Stocks Fall Pre-Bell Monday; Nebius Group,
- 🔴 [Industry|w2.13] Why Are Nasdaq Futures Tumbling Premarket? MU, AMD, NVDA, ORCL, RUM, T

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-14 | Industry | 🟢 +1 | 2.13 | Yahoo | Intel, AMD, Marvell, Oracle, CrowdStrike, and More Stocks Th |
| 2026-09-14 | Industry | 🔴 -1 | 2.13 | Yahoo | Social Buzz: Wallstreetbets Stocks Fall Pre-Bell Monday; Neb |
| 2026-09-14 | Industry | 🔴 -1 | 2.13 | Yahoo | Why Are Nasdaq Futures Tumbling Premarket? MU, AMD, NVDA, OR |
| 2026-09-14 | Industry | ⚪  0 | 2.13 | Yahoo | MU, SNDK, INTC, AMD: Chip Stocks Slide After Anthropic Calls |
| 2026-09-13 | Industry | ⚪  0 | 1.8 | Yahoo | AMD and Intel’s Shared AI Instructions Reach GCC. Can Softwa |
| 2026-09-13 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Wall Street Analyst Sees Between 19% to 37% Upside in These  |
| 2026-09-12 | Earnings | ⚪  0 | 1.95 | Yahoo | Advanced Micro Devices, Inc. (AMD)’s Halo Station Could Stre |
| 2026-09-12 | Earnings | ⚪  0 | 1.95 | Yahoo | Nvidia vs. AMD: Elon Musk Picked a Side on the SpaceX Earnin |

---

## 🟡 Cautious Long (1)

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.5 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] 3 Reasons to Avoid C and 1 Stock to Buy Instead
- 🟢 [Earnings|w1.17] Citigroup's Restructuring Is Working, And Valuation Has Not Caught Up
- 🟢 [Industry|w1.05] 4 Thriving Investment Bank Behemoths to Buy With Attractive Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | 3 Reasons to Avoid C and 1 Stock to Buy Instead |
| 2026-09-10 | Industry | ⚪  0 | 1.05 | Yahoo | Citigroup (C) Completed a Weekend Tokenized-Dollar Transfer. |
| 2026-09-10 | Rumor | ⚪  0 | 0.63 | Yahoo | C Pushes Tokenized Deposits Deeper Into Asia With Japan Expa |
| 2026-09-10 | Policy | ⚪  0 | 1.26 | Yahoo | Citigroup (C) Gains on Turnaround Momentum |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | 4 Thriving Investment Bank Behemoths to Buy With Attractive  |
| 2026-09-09 | Industry | 🟢 +1 | 0.9 | Yahoo | Is It Worth Investing in Citigroup (C) Based on Wall Street' |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Citigroup's Restructuring Is Working, And Valuation Has Not  |
| 2026-09-08 | Industry | 🟢 +1 | 0.75 | Yahoo | Citi turns more bullish on trucking stocks |

---

## ⚠️ Overheated (1)

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.02 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM
- 🟢 [Earnings|w1.63] TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing Power Could
- 🟢 [Earnings|w1.63] TSM Just Posted Record Sales. Nvidia May Be Both the Winner and the On

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 1.5 | Yahoo | Apple, Taiwan Semi Lead Five Stocks Near Buy Points |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing P |
| 2026-09-11 | Rumor | ⚪  0 | 0.75 | Yahoo | Marvell Is Winning Custom AI Business. TSMC May Be the Safer |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | TSM Just Posted Record Sales. Nvidia May Be Both the Winner  |
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | TSM’s Record Sales Say AI Chips Are Booming. The Nvidia-AMD  |

---

## ⚠️ Risk Pattern (1)

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.5 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 8 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] 3 Reasons to Avoid C and 1 Stock to Buy Instead
- 🟢 [Earnings|w1.17] Citigroup's Restructuring Is Working, And Valuation Has Not Caught Up
- 🟢 [Industry|w1.05] 4 Thriving Investment Bank Behemoths to Buy With Attractive Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 1.63 | Yahoo | 3 Reasons to Avoid C and 1 Stock to Buy Instead |
| 2026-09-10 | Industry | ⚪  0 | 1.05 | Yahoo | Citigroup (C) Completed a Weekend Tokenized-Dollar Transfer. |
| 2026-09-10 | Rumor | ⚪  0 | 0.63 | Yahoo | C Pushes Tokenized Deposits Deeper Into Asia With Japan Expa |
| 2026-09-10 | Policy | ⚪  0 | 1.26 | Yahoo | Citigroup (C) Gains on Turnaround Momentum |
| 2026-09-10 | Industry | 🟢 +1 | 1.05 | Yahoo | 4 Thriving Investment Bank Behemoths to Buy With Attractive  |
| 2026-09-09 | Industry | 🟢 +1 | 0.9 | Yahoo | Is It Worth Investing in Citigroup (C) Based on Wall Street' |
| 2026-09-09 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Citigroup's Restructuring Is Working, And Valuation Has Not  |
| 2026-09-08 | Industry | 🟢 +1 | 0.75 | Yahoo | Citi turns more bullish on trucking stocks |

---

## ⚪ Watch / Neutral (26)

### NYSE:NEM
- Score: 59/100 | raw: 2.05 | News: 7 kept / 8 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 59/100 | raw: 2.13 | News: 4 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 58/100 | raw: 1.8 | News: 2 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 55/100 | raw: 1.17 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AR
- Score: 55/100 | raw: 1.17 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 55/100 | raw: 1.25 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 55/100 | raw: 1.17 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 55/100 | raw: 1.26 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 53/100 | raw: 0.63 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AAPL
- Score: 51/100 | raw: 0.36 | News: 16 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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
- Score: 50/100 | raw: 0 | News: 1 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:ETN
- Score: 49/100 | raw: -0.35 | News: 6 kept / 17 dropped | No clear directional bias — stay flat

### NYSE:CF
- Score: 44/100 | raw: -1.5 | News: 3 kept / 3 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-14T12:30:32.293Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
