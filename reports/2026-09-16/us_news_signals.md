---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_9db50203b1ca11f19c7a525400de85a5
    ReservedCode1: fJXPdAW8F3mPFLrpFjPKLwj+KofOgyeZDn+rqZdclOiZ+OFwnooMeB+33xYz/atSnb6jeFN8DMlSKOyoYjOd70UM86YtXMaLcNevegs5WdwNgqGcYpYzfdE0vjv1m4Knkk+R5X37eeT5QJNWgEgooTnl019JTAJ/M1B8JJT/fO6j+in7oXYt6HrhEOQ=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_9db50203b1ca11f19c7a525400de85a5
    ReservedCode2: fJXPdAW8F3mPFLrpFjPKLwj+KofOgyeZDn+rqZdclOiZ+OFwnooMeB+33xYz/atSnb6jeFN8DMlSKOyoYjOd70UM86YtXMaLcNevegs5WdwNgqGcYpYzfdE0vjv1m4Knkk+R5X37eeT5QJNWgEgooTnl019JTAJ/M1B8JJT/fO6j+in7oXYt6HrhEOQ=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-16  |  **News Window:** 2026-09-09 ~ 2026-09-16（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (41)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:PLTR** | **89** | 12.36 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/22 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:HPE** | **82** | 12.15 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:PGY** | **80** | 7.08 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/2 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:CRWD** | **77** | 20.85 | 🟢 Long (Strong) | Momentum / Hold | High | 19/11 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:AMD** | **76** | 14.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/15 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:BE** | **73** | 5.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 7 | **NASDAQ:PANW** | **73** | 8.07 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:SM** | **69** | 4.5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/7 | - |
| 9 | **NYSE:NEM** | **67** | 4.08 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/9 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:C** | **67** | 4.47 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:WPM** | **66** | 3.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/7 | - |
| 12 | **NASDAQ:MSFT** | **66** | 3.84 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/28 | - |
| 13 | **NYSE:DELL** | **61** | 7.59 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | - |
| 14 | **NYSE:ETN** | **58** | 1.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 15 | **NASDAQ:SMCI** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/24 | - |
| 16 | **NASDAQ:NBIS** | **55** | 1.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 9/21 | - |
| 17 | **NASDAQ:HOOD** | **54** | 2.31 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 14/16 | Sentiment Divergence (black swan masked by noise) |
| 18 | **NASDAQ:BGC** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 19 | **NYSE:CF** | **53** | 0.69 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/3 | - |
| 20 | **NASDAQ:AAPL** | **52** | 1.32 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 16/14 | Bearish-to-Bullish Reversal (reversal) |
| 21 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 22 | **NYSE:LTC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/3 | - |
| 23 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 24 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/4 | - |
| 25 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 26 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 27 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (fetch failed) | Watch | - | 0/0 | - |
| 28 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 29 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 30 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 31 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 33 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 34 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NYSE:JCI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/5 | - |
| 37 | **NASDAQ:SBCF** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 38 | **NASDAQ:FIVE** | **46** | -0.97 | ⚪ No Trade (Neutral) | Watch | Low | 7/7 | - |
| 39 | **NYSE:ASX** | **42** | -1.95 | ⚪ No Trade (Neutral) | Watch | Low | 1/11 | - |
| 40 | **NASDAQ:PRGS** | **41** | -2.16 | ⚪ No Trade (Neutral) | Watch | Low | 1/3 | - |
| 41 | **NYSE:AR** | **40** | -2.34 | ⚪ No Trade (Neutral) | Watch | Low | 3/1 | - |

---

## 🟢 Strong Long (2)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 12.15 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Hewlett Packard Enterprise (NYSE:HPE) Passes Minervini Trend Template 
- 🟢 [Earnings|w2.34] Edge Computing Market by Offering, Application, Deployment Mode, Organ
- 🟢 [Industry|w2.13] Hewlett Packard Enterprise: Buy The AI Infrastructure Breakout, But Re

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI Downgrade

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Hewlett Packard Enterprise: Buy The AI Infrastructure Breako |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Slowdown Fears Rise: Buy NVIDIA, HPE That Connect AI and  |
| 2026-09-15 | Analyst Action | 🔴 -1 | 2.16 | Yahoo | Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | ChartMill | Hewlett Packard Enterprise (NYSE:HPE) Passes Minervini Trend |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Edge Computing Market by Offering, Application, Deployment M |
| 2026-09-15 | Earnings | ⚪  0 | 2.34 | Yahoo | HPE combats memory constraints with supplier help, better fo |
| 2026-09-14 | Earnings | 🟢 +1 | 1.95 | Yahoo | Why Hewlett Packard Enterprise (HPE) Shares Are Trading Lowe |
| 2026-09-14 | Analyst Action | 🟢 +1 | 1.8 | Yahoo | HPE Stock Drops 11% To Worst Day In Over A Year After Everco |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 20.85 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Nvidia CEO Jensen Huang Just Dropped Huge News for This Cybersecurity 
- 🟢 [Earnings|w2.34] Is CrowdStrike Stock Betting That Its Record Quarter Is The New Normal
- 🟢 [Earnings|w2.34] CrowdStrike: AI Threat Is Making Cybersecurity Great Again

**Bearish Factors:**
- 🔴 [Industry|w1.8] Stock Market Today: S&P 500, Dow and Nasdaq Futures Fall as Brent Hove

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Why Did DELL, CRWD, CVX Stocks Jump To 52-Week Highs Today? |
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | Yahoo | CRWD, PANW Stocks Extend AI-Fueled Rally As Cybersecurity Be |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Why CrowdStrike (CRWD) Stock Is Up Today |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike CEO Warns AI Cyber Threat Is Already Here |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | CrowdStrike Advances 3% as the AI Security Bid Outruns a Fal |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | CrowdStrike, Other Cybersecurity Stocks Surge as AI Debate T |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Nvidia CEO Jensen Huang Just Dropped Huge News for This Cybe |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Is Boosting Cybersecurity. CrowdStrike and 4 More Stocks  |

---

## 🟢 Mid Long (8)

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Bloom Energy: Valuation Attractive, Buy This Dip
- 🟢 [Industry|w1.8] Bloom Energy (BE) Stock Looks Cheap As Its 17x Three Year Run Continue
- 🟢 [Analyst Action|w1.8] Mizuho Maintains Outperform on Bloom Energy, Raises Price Target to $3

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Bloom Energy (BE) Stock Looks Cheap As Its 17x Three Year Ru |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | BE Stock Falls Most In Nearly A Month: Why This Analyst Sees |
| 2026-09-14 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Bloom Energy: Valuation Attractive, Buy This Dip |
| 2026-09-14 | Industry | ⚪  0 | 1.5 | Yahoo | Bloom Energy (BE) Declines More Than Market: Some Informatio |
| 2026-09-14 | Earnings | ⚪  0 | 1.95 | SeekingAlp | What The Bloom Energy Bulls Are Missing |
| 2026-09-14 | Analyst Action | 🟢 +1 | 1.8 | Benzinga | Mizuho Maintains Outperform on Bloom Energy, Raises Price Ta |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 8.07 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Palo Alto Networks (PANW) Is Up 12.2% After New AI Guidance And Capita
- 🟢 [Industry|w2.13] CRWD, PANW Stocks Extend AI-Fueled Rally As Cybersecurity Bets Outpace
- 🟢 [Industry|w1.8] AI Is Boosting Cybersecurity. CrowdStrike and 4 More Stocks to Buy.

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | Yahoo | CRWD, PANW Stocks Extend AI-Fueled Rally As Cybersecurity Be |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Palo Alto Networks (PANW) Is Up 12.2% After New AI Guidance  |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Is Boosting Cybersecurity. CrowdStrike and 4 More Stocks  |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Zacks Investment Ideas feature highlights: Palo Alto Network |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Company News for Sep 15, 2026 |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks (PANW) Backs New Security Testing Model A |
| 2026-09-15 | Earnings | ⚪  0 | 2.34 | Yahoo | Major Cyber Security Vendors Back SE Labs' New Model for Ind |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Benzinga | Jim Cramer: Buy This Energy Stock, It Is ‘Terrific’ |

---

### NYSE:SM

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 7 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Zebra Technologies To Rally Around 24%? Here Are 10 Top Analyst Foreca
- 🟢 [Analyst Action|w2.16] Keybanc Maintains Overweight on SM Energy, Raises Price Target to $46

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Why SM Energy (SM) Stock Is Trading Up Today |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | SM Energy, Crescent Energy, Solaris Energy Infrastructure, T |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Benzinga | Zebra Technologies To Rally Around 24%? Here Are 10 Top Anal |
| 2026-09-15 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Keybanc Maintains Overweight on SM Energy, Raises Price Targ |
| 2026-09-14 | Industry | ⚪  0 | 1.5 | Yahoo | SM Energy (SM) Ascends While Market Falls: Some Facts to Not |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.08 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 9 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Newmont Corp (NYSE:NEM): A Growth-at-a-Reasonable-Price Case Study
- 🟢 [Earnings|w1.95] Should You Buy Newmont Stock After a 60% Rally in a Year?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | ChartMill | Newmont Corp (NYSE:NEM): A Growth-at-a-Reasonable-Price Case |
| 2026-09-14 | Industry | ⚪  0 | 1.5 | Yahoo | Here is What to Know Beyond Why Newmont Corporation (NEM) is |
| 2026-09-14 | Earnings | 🟢 +1 | 1.95 | Yahoo | Should You Buy Newmont Stock After a 60% Rally in a Year? |
| 2026-09-11 | Analyst Action | ⚪  0 | 1.08 | Benzinga | Here’s How Much You Would Have Made Owning Newmont Stock In  |
| 2026-09-11 | Industry | ⚪  0 | 0.9 | Yahoo | Company News for Sep 11, 2026 |
| 2026-09-10 | Industry | ⚪  0 | 0.75 | Yahoo | Newmont Corporation (NEM) Dips More Than Broader Market: Wha |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.47 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Citigroup Lifts 2026 ROTCE Outlook Above 11%: What's Driving the Gain?
- 🟢 [Industry|w2.13] Citigroup (C) Expands Trade And Wealth Leadership Across Key Growth Ma
- 🟢 [Industry|w1.5] Should You Buy Citigroup Stock as It Jumps 29.3% in 6 Months?

**Bearish Factors:**
- 🔴 [Industry|w1.5] Citigroup (C) Suffers a Larger Drop Than the General Market: Key Insig

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | Yahoo | Citigroup (C) Expands Trade And Wealth Leadership Across Key |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Citigroup Lifts 2026 ROTCE Outlook Above 11%: What's Driving |
| 2026-09-15 | Buyback | ⚪  0 | 2.16 | Yahoo | Citi’s 11%+ RoTCE Target Signals Stronger Capital Efficiency |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Crosspoint Capital Partners Adds Former Citi Chief Cloud Off |
| 2026-09-14 | Earnings | ⚪  0 | 1.95 | Yahoo | Citigroup Sees ROTCE Beating Guidance as Markets, Cards and  |
| 2026-09-14 | Industry | 🔴 -1 | 1.5 | Yahoo | Citigroup (C) Suffers a Larger Drop Than the General Market: |
| 2026-09-14 | Industry | 🟢 +1 | 1.5 | Yahoo | Should You Buy Citigroup Stock as It Jumps 29.3% in 6 Months |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 7 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Wheaton Precious Metals: Quality Company At An Expensive Price
- 🟢 [Policy|w1.08] Gold Miner's Luster Lures Funds; Stock Trades Around Buy Point
- 🟢 [Earnings|w0.97] WPM Posts Record Revenues in H126: Is More Upside Ahead?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Wheaton Precious Metals: Quality Company At An Expensive Pri |
| 2026-09-11 | Policy | 🟢 +1 | 1.08 | Yahoo | Gold Miner's Luster Lures Funds; Stock Trades Around Buy Poi |
| 2026-09-10 | Earnings | 🟢 +1 | 0.97 | Yahoo | WPM Posts Record Revenues in H126: Is More Upside Ahead? |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.84 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 28 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Satya Nadella's Microsoft Disclosed Azure Topped $100 Billion in Annua
- 🟢 [Rumor|w1.08] Palantir and Nvidia Are Restricting Anthropic’s AI. Microsoft Could Wi

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Earnings | 🟢 +1 | 2.76 | Yahoo | Satya Nadella's Microsoft Disclosed Azure Topped $100 Billio |
| 2026-09-15 | Rumor | 🟢 +1 | 1.08 | Yahoo | Palantir and Nvidia Are Restricting Anthropic’s AI. Microsof |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 7.59 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Dell Technologies (DELL) Rallies on Bullish RBC Outlook: Is the Stock 
- 🟢 [Earnings|w2.34] Edge Computing Market by Offering, Application, Deployment Mode, Organ
- 🟢 [Industry|w1.8] Would You Still Want Dell If The AI Orders Slowed?

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI Downgrade
- 🔴 [Industry|w2.13] DELL Stock Rises Premarket Despite Silver Lake’s $42.5M Proposed Stock

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🔴 -1 | 2.13 | Yahoo | DELL Stock Rises Premarket Despite Silver Lake’s $42.5M Prop |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Why Did DELL, CRWD, CVX Stocks Jump To 52-Week Highs Today? |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | What Could Dell Technologies (DELL) Europa AI Push Mean For  |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell Technologies (DELL) Rallies on Bullish RBC Outlook: Is  |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Fintel | Dell Technologies Consensus Price Target Increased by 13.95% |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Dell Jumps 5.8% as Europe's AI Chip Challenger Enters Its Se |
| 2026-09-15 | Analyst Action | 🔴 -1 | 2.16 | Yahoo | Hewlett Packard Enterprise Rises 4% a Day After Evercore ISI |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Would You Still Want Dell If The AI Orders Slowed? |

---

## ⚠️ Overheated (3)

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 12.36 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Palantir Technologies (NASDAQ:PLTR): Strong Growth Paired With a Promi
- 🟢 [Earnings|w2.76] Palantir: Why U.S. Commercial Growth Justifies The Challenging Valuati
- 🟢 [Analyst Action|w2.16] UBS Maintains Buy on Palantir Technologies, Raises Price Target to $25

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Earnings | 🟢 +1 | 2.76 | ChartMill | Palantir Technologies (NASDAQ:PLTR): Strong Growth Paired Wi |
| 2026-09-16 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Palantir: Why U.S. Commercial Growth Justifies The Challengi |
| 2026-09-15 | Rumor | 🟢 +1 | 1.08 | Yahoo | Palantir and Nvidia Are Restricting Anthropic’s AI. Microsof |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Can Palantir Technologies (PLTR) Justify Its Price On Cash F |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Palantir Looks Cheap Among AI Software Stocks, UBS Says — Wh |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Palantir wins higher UBS target as customer demand outpaces  |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Palantir Sees Strong AI Demand, Wider Enterprise Use Cases,  |
| 2026-09-15 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | UBS Maintains Buy on Palantir Technologies, Raises Price Tar |

---

### NASDAQ:PGY

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.08 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 2 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] PGY vs. ENVA: Which Technology-Driven Lending Stock Is the Better Buy?
- 🟢 [Earnings|w2.34] Pagaya's AI Lending Flywheel Gains Speed: What's Next for PGY?
- 🟢 [Industry|w0.9] Pagaya Technologies Ltd -A (NASDAQ:PGY): Affordable Growth at a Reason

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Pagaya Technologies Ltd. (PGY) Falls More Steeply Than Broad |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | PGY vs. ENVA: Which Technology-Driven Lending Stock Is the B |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Pagaya's AI Lending Flywheel Gains Speed: What's Next for PG |
| 2026-09-11 | Industry | 🟢 +1 | 0.9 | ChartMill | Pagaya Technologies Ltd -A (NASDAQ:PGY): Affordable Growth a |
| 2026-09-10 | Industry | 🟢 +1 | 0.75 | Yahoo | Best Value Stocks to Buy for September 10th |
| 2026-09-10 | Industry | 🟢 +1 | 0.75 | Yahoo | New Strong Buy Stocks for September 10th |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 14.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Nvidia Will Still Beat AMD Through 2028. Here's the Data Behind My Con
- 🟢 [Earnings|w2.34] AMD's Recent Surge Still Matters: Putting These ETFs in Focus
- 🟢 [Earnings|w2.34] AMD (AMD) Could Compound EPS at 65% Through 2030, Piper Says

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | 🟢 +1 | 2.13 | Yahoo | Is AMD Stock Already Priced For A 2027 Doubling It Has Yet T |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Why the Market Dipped But Advanced Micro Devices (AMD) Gaine |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Tech Titan Apple, Nvidia Chipmaker TSMC, AMD, Bloo |
| 2026-09-15 | Rumor | ⚪  0 | 1.08 | Yahoo | Bank of America says investors get AMD stock wrong |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | AMD Rebounds 3% as Its 58% AI Engine Faces a Pause |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Nvidia Will Still Beat AMD Through 2028. Here's the Data Beh |
| 2026-09-15 | Rumor | ⚪  0 | 1.08 | Yahoo | Prediction: AMD Could Be Closing the Gap in the AI Chip Race |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | The Fund’s Largest Relative Detractor: Unowned Advanced Micr |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 2.31 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Robinhood vs. Schwab: Which Brokerage Stock is the Better Bet?
- 🟢 [Analyst Action|w2.16] Arbitrum to Hit $10 by 2030, Outperform ETH and BTC, Standard Chartere
- 🟢 [Analyst Action|w2.16] Robinhood: I'm Expecting Substantial Annualized Returns (Rating Upgrad

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Robinhood Staffers Charged With Crypto-Related Trading Fraud
- 🔴 [Industry|w1.8] Why Did Robinhood Markets Stock Drop Today?
- 🔴 [Industry|w1.8] Robinhood and Webull Fall 4% as Imminent Clarity Act Decision Stokes C

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | HOOD Stock Extends Slide Overnight: Ex-Employees Face Crypto |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Contemptible, Outrageous, Vile”: Robinhood and AMC Clash Ove |
| 2026-09-15 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Robinhood Staffers Charged With Crypto-Related Trading Fraud |
| 2026-09-15 | Industry | 🔴 -1 | 1.8 | Yahoo | Why Did Robinhood Markets Stock Drop Today? |
| 2026-09-15 | Industry | 🔴 -1 | 1.8 | Yahoo | Robinhood and Webull Fall 4% as Imminent Clarity Act Decisio |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Nvidia, Coinbase, Robinhood, Coherent, and More Stocks That  |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Robinhood vs. Schwab: Which Brokerage Stock is the Better Be |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood To Offer Share Redemptions And Voting Rights On To |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.32 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Alphabet Vs. Apple: Heavy Regulatory Pressure Threatens Cash Flows Mor
- 🟢 [Industry|w1.8] Dow Jones Tech Titan Apple, Nvidia Chipmaker TSMC, AMD, Bloom Energy I
- 🟢 [Industry|w1.8] Apple Stock: New CEO, Foldable iPhone-Time to Buy the Dip?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple Stock Slips After India Escalates iPhone Repair Investigation
- 🔴 [Earnings|w2.34] I’ve Started Accumulating Qualcomm and It Isn’t Because of Amazon and 
- 🔴 [Industry|w1.8] Apple Stock Drops On 'Lukewarm' iPhone 18 Pro Demand

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Earnings | 🟢 +1 | 2.76 | Yahoo | Alphabet Vs. Apple: Heavy Regulatory Pressure Threatens Cash |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Tim Cook's Most Defining Move at Apple Has Nothing to Do Wit |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Zacks Investment Ideas feature highlights: Apple, Taiwan and |
| 2026-09-16 | Earnings | ⚪  0 | 2.76 | Yahoo | Citi Survey Points to Shorter Smartphone Replacement Cycles  |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Opinion: iPhone 18 Pro Demand Is Already a Problem for Apple |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Rogers Communications (TSX:RCI.B) Moved, So What Is Drawing  |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Tech Titan Apple, Nvidia Chipmaker TSMC, AMD, Bloo |
| 2026-09-15 | Rumor | ⚪  0 | 1.08 | Yahoo | Jim Cramer Believes Apple (AAPL) Could See “Off The Charts”  |

---

## 🔴 Avoid / Short (2)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **54** / 100 |
| Raw Weighted Score | 2.31 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Robinhood vs. Schwab: Which Brokerage Stock is the Better Bet?
- 🟢 [Analyst Action|w2.16] Arbitrum to Hit $10 by 2030, Outperform ETH and BTC, Standard Chartere
- 🟢 [Analyst Action|w2.16] Robinhood: I'm Expecting Substantial Annualized Returns (Rating Upgrad

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Robinhood Staffers Charged With Crypto-Related Trading Fraud
- 🔴 [Industry|w1.8] Why Did Robinhood Markets Stock Drop Today?
- 🔴 [Industry|w1.8] Robinhood and Webull Fall 4% as Imminent Clarity Act Decision Stokes C

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | HOOD Stock Extends Slide Overnight: Ex-Employees Face Crypto |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Contemptible, Outrageous, Vile”: Robinhood and AMC Clash Ove |
| 2026-09-15 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Robinhood Staffers Charged With Crypto-Related Trading Fraud |
| 2026-09-15 | Industry | 🔴 -1 | 1.8 | Yahoo | Why Did Robinhood Markets Stock Drop Today? |
| 2026-09-15 | Industry | 🔴 -1 | 1.8 | Yahoo | Robinhood and Webull Fall 4% as Imminent Clarity Act Decisio |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Nvidia, Coinbase, Robinhood, Coherent, and More Stocks That  |
| 2026-09-15 | Earnings | 🟢 +1 | 2.34 | Yahoo | Robinhood vs. Schwab: Which Brokerage Stock is the Better Be |
| 2026-09-15 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood To Offer Share Redemptions And Voting Rights On To |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **52** / 100 |
| Raw Weighted Score | 1.32 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 16 / 14 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Alphabet Vs. Apple: Heavy Regulatory Pressure Threatens Cash Flows Mor
- 🟢 [Industry|w1.8] Dow Jones Tech Titan Apple, Nvidia Chipmaker TSMC, AMD, Bloom Energy I
- 🟢 [Industry|w1.8] Apple Stock: New CEO, Foldable iPhone-Time to Buy the Dip?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Apple Stock Slips After India Escalates iPhone Repair Investigation
- 🔴 [Earnings|w2.34] I’ve Started Accumulating Qualcomm and It Isn’t Because of Amazon and 
- 🔴 [Industry|w1.8] Apple Stock Drops On 'Lukewarm' iPhone 18 Pro Demand

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-16 | Earnings | 🟢 +1 | 2.76 | Yahoo | Alphabet Vs. Apple: Heavy Regulatory Pressure Threatens Cash |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Tim Cook's Most Defining Move at Apple Has Nothing to Do Wit |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Zacks Investment Ideas feature highlights: Apple, Taiwan and |
| 2026-09-16 | Earnings | ⚪  0 | 2.76 | Yahoo | Citi Survey Points to Shorter Smartphone Replacement Cycles  |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Opinion: iPhone 18 Pro Demand Is Already a Problem for Apple |
| 2026-09-16 | Industry | ⚪  0 | 2.13 | Yahoo | Rogers Communications (TSX:RCI.B) Moved, So What Is Drawing  |
| 2026-09-15 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Tech Titan Apple, Nvidia Chipmaker TSMC, AMD, Bloo |
| 2026-09-15 | Rumor | ⚪  0 | 1.08 | Yahoo | Jim Cramer Believes Apple (AAPL) Could See “Off The Charts”  |

---

## ⚪ Watch / Neutral (26)

### NYSE:ETN
- Score: 58/100 | raw: 1.86 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SMCI
- Score: 56/100 | raw: 1.36 | News: 6 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 55/100 | raw: 1.59 | News: 9 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:BGC
- Score: 54/100 | raw: 0.9 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CF
- Score: 53/100 | raw: 0.69 | News: 4 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 50/100 | raw: 0 | News: 0 kept / 3 dropped | No relevant news in window

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 1 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | fetch failed

### NYSE:AGM
- Score: 50/100 | raw: 0 | News: 1 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

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

### NYSE:JCI
- Score: 50/100 | raw: 0 | News: 0 kept / 5 dropped | No relevant news in window

### NASDAQ:SBCF
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:FIVE
- Score: 46/100 | raw: -0.97 | News: 7 kept / 7 dropped | No clear directional bias — stay flat

### NYSE:ASX
- Score: 42/100 | raw: -1.95 | News: 1 kept / 11 dropped | No clear directional bias — stay flat

### NASDAQ:PRGS
- Score: 41/100 | raw: -2.16 | News: 1 kept / 3 dropped | No clear directional bias — stay flat

### NYSE:AR
- Score: 40/100 | raw: -2.34 | News: 3 kept / 1 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-16T12:31:34.498Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
