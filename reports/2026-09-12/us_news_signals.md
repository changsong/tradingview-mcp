---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_e56a2503aea511f188ac525400dcc5b3
    ReservedCode1: PpKSs+HYW1nnT4fr6cNVZmRsA/xXQ1dTQrn8B7BC49Fl1K+T005mfhx53LjJZkZ4DFF1rLaPC2DPbgWM8DyWPunhCpYlZ3k1bK5h5FU5Yg2YfPpR3ZSLLN4Gw0dmWNhe/iOV57Tb7WoyAj0P5Vk49eWSwnD7Q79pp1V3KNxGM0QQZ35t+pQXock1xp4=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_e56a2503aea511f188ac525400dcc5b3
    ReservedCode2: PpKSs+HYW1nnT4fr6cNVZmRsA/xXQ1dTQrn8B7BC49Fl1K+T005mfhx53LjJZkZ4DFF1rLaPC2DPbgWM8DyWPunhCpYlZ3k1bK5h5FU5Yg2YfPpR3ZSLLN4Gw0dmWNhe/iOV57Tb7WoyAj0P5Vk49eWSwnD7Q79pp1V3KNxGM0QQZ35t+pQXock1xp4=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-12  |  **News Window:** 2026-09-05 ~ 2026-09-12（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (47)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:C** | **82** | 9.21 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/19 | Overheated Sentiment (one-sided bullish) |
| 2 | **NYSE:APH** | **80** | 8.29 | 🟢 Long (Strong) | Momentum / Hold | High | 9/7 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:TSM** | **78** | 7.86 | 🟢 Long (Strong) | Momentum / Hold | High | 7/23 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:STX** | **78** | 8.09 | 🟢 Long (Strong) | Momentum / Hold | High | 9/21 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:BE** | **77** | 7.04 | 🟢 Long (Strong) | Momentum / Hold | High | 8/22 | - |
| 6 | **NASDAQ:SNDK** | **75** | 5.94 | 🟢 Long (Strong) | Momentum / Hold | High | 3/27 | - |
| 7 | **NASDAQ:AMD** | **75** | 13.5 | 🟢 Long (Strong) | Momentum / Hold | High | 14/16 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:HPE** | **73** | 10.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/18 | - |
| 9 | **NYSE:WPM** | **72** | 5.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/4 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:LITE** | **72** | 5.39 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:NBIS** | **71** | 4.95 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | - |
| 12 | **NASDAQ:HOOD** | **69** | 12.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 19/11 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:MU** | **69** | 5.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | Sentiment Strengthening UP (trend) |
| 14 | **NYSE:DELL** | **68** | 12.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/13 | Sentiment Strengthening UP (trend) |
| 15 | **NYSE:ASX** | **64** | 3.26 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/6 | - |
| 16 | **NASDAQ:AAPL** | **64** | 8.85 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | Sentiment Strengthening UP (trend) |
| 17 | **NASDAQ:FIVE** | **63** | 4.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/6 | - |
| 18 | **NYSE:NEM** | **62** | 2.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/7 | - |
| 19 | **NYSE:AR** | **61** | 2.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 20 | **NYSE:RIO** | **61** | 3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/3 | - |
| 21 | **NYSE:SCCO** | **61** | 2.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/12 | - |
| 22 | **NASDAQ:BGC** | **58** | 1.8 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 23 | **NYSE:LTC** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/2 | - |
| 24 | **NYSE:JCI** | **57** | 1.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/2 | - |
| 25 | **NYSE:MS** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 26 | **NYSE:RRC** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 29 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 30 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/3 | - |
| 31 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 33 | **NYSE:AGM** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 34 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NYSE:SM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/4 | - |
| 36 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/1 | - |
| 37 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 39 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 40 | **AMEX:CET** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 44 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 45 | **NYSE:ETN** | **48** | -0.53 | ⚪ No Trade (Neutral) | Watch | Low | 7/16 | - |
| 46 | **NASDAQ:NVDA** | **37** | -3.19 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 4/26 | - |
| 47 | **NYSE:CF** | **32** | -4.32 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 2/3 | - |

---

## 🟢 Strong Long (6)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 8.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 7 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Top Stock Reports for Meta Platforms, Marvell & Amphenol
- 🟢 [Analyst Action|w2.16] Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why
- 🟢 [Earnings|w1.63] Amphenol: Priced At A Premium For A Reason

**Bearish Factors:**
- 🔴 [Analyst Action|w1.5] TD Cowen Maintains Hold on Amphenol, Lowers Price Target to $90

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | Top Stock Reports for Meta Platforms, Marvell & Amphenol |
| 2026-09-11 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Amphenol (APH) is an Incredible Growth Stock: 3 Reasons Why |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | SeekingAlp | Amphenol Corporation (APH) Presents at Citi's 2026 Global TM |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | Amphenol Tests Key Level, Nears Pivot Amid Strong AI Datacom |
| 2026-09-09 | Analyst Action | 🔴 -1 | 1.5 | Benzinga | TD Cowen Maintains Hold on Amphenol, Lowers Price Target to  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Amphenol: Priced At A Premium For A Reason |
| 2026-09-09 | Analyst Action | ⚪  0 | 1.5 | SeekingAlp | Amphenol: Keep A Close Eye On Fed Rate Hikes Amid The Scorch |
| 2026-09-08 | Earnings | 🟢 +1 | 1.36 | ChartMill | Amphenol (NYSE:APH): High Growth Momentum Meets Breakout Set |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 7.86 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM
- 🟢 [Earnings|w2.34] TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing Power Could
- 🟢 [Earnings|w2.34] TSM Just Posted Record Sales. Nvidia May Be Both the Winner and the On

**Bearish Factors:**
- 🔴 [Industry|w1.5] TSMC (TSM) Registers a Bigger Fall Than the Market: Important Facts to

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | Broadcom’s Custom AI Chip Boom Has a Powerful Landlord: TSM |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing P |
| 2026-09-11 | Rumor | ⚪  0 | 1.08 | Yahoo | Marvell Is Winning Custom AI Business. TSMC May Be the Safer |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | TSM Just Posted Record Sales. Nvidia May Be Both the Winner  |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | TSM’s Record Sales Say AI Chips Are Booming. The Nvidia-AMD  |
| 2026-09-11 | Earnings | ⚪  0 | 2.34 | Benzinga | AI Demand Keeps Breaking Records at Taiwan Semiconductor |
| 2026-09-10 | Industry | 🔴 -1 | 1.5 | Yahoo | TSMC (TSM) Registers a Bigger Fall Than the Market: Importan |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.09 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 21 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Seagate Technology Holdings (NASDAQ:STX): A Quality Dividend Pick for 
- 🟢 [Industry|w2.13] Seagate: The HDD Shortage Still Has Legs
- 🟢 [Earnings|w1.95] Can Seagate Sustain Its Strong Revenue Growth in Fiscal 2027?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | 🟢 +1 | 2.76 | ChartMill | Seagate Technology Holdings (NASDAQ:STX): A Quality Dividend |
| 2026-09-12 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Seagate: The HDD Shortage Still Has Legs |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | SeekingAlp | Seagate Technology Holdings plc (STX) Presents at Goldman Sa |
| 2026-09-10 | Earnings | 🟢 +1 | 1.95 | Yahoo | Can Seagate Sustain Its Strong Revenue Growth in Fiscal 2027 |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | SeekingAlp | Seagate Technology Holdings plc (STX) Presents at Citi's 202 |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | Seagate's HAMR Bet is Paying Off: Can Mozaic Sustain the Mom |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | Yahoo | Seagate Completes Redemption of Exchangeable Notes |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | Yahoo | Bull of the Day: Seagate Technology (STX) |

---

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 7.04 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Bloom Energy: Chances Are The Shares Are Still Trading Too Low
- 🟢 [Earnings|w1.95] Increasing Power Demand Amid AI Boom Strengthens Bloom Energy (BE)
- 🟢 [Industry|w1.5] Remain Bullish on AI Beneficiaries Like Bloom Energy

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy Hits the Road with ESPN College Football Campus |
| 2026-09-11 | Rumor | ⚪  0 | 1.08 | Yahoo | AMD, BE, CRWV In Focus: Situational Awareness Has Been Repor |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Bloom Energy: Chances Are The Shares Are Still Trading Too L |
| 2026-09-10 | Industry | 🟢 +1 | 1.5 | Yahoo | Remain Bullish on AI Beneficiaries Like Bloom Energy |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Newsweek Names Bloom Energy to World’s Most Trustworthy Comp |
| 2026-09-10 | Earnings | 🟢 +1 | 1.95 | Yahoo | Increasing Power Demand Amid AI Boom Strengthens Bloom Energ |
| 2026-09-09 | Policy | ⚪  0 | 1.5 | Yahoo | Stocks to Consider Before the Fed's September Decision: JPM, |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | ETFs in Spotlight as Bloom Energy is Set to Join the S&P 500 |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.94 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 27 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sandisk Shares Could Double (Or More) By 2030
- 🟢 [Industry|w1.8] Sandisk: NAND Party Likely To End In 2027
- 🟢 [Industry|w1.8] Sandisk: This Is Why You Should Buy It Now

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Sandisk Shares Could Double (Or More) By 2030 |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Sandisk: NAND Party Likely To End In 2027 |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Sandisk: This Is Why You Should Buy It Now |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 13.5 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing Power Could
- 🟢 [Earnings|w2.34] TSM’s Record Sales Say AI Chips Are Booming. The Nvidia-AMD Fight Is N
- 🟢 [Analyst Action|w2.16] Marvell CEO reveals decade-long gem behind its explosive 239% surge

**Bearish Factors:**
- 🔴 [Earnings|w2.34] AMD: Bull Case Intact, But The Easy Upside Is Gone (Rating Downgrade)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | AMD’s CFO, Jean Hu, Just Announced Fantastic News for Invest |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | TSM’s Record Month Confirms AMD’s AI Ramp, but Its Pricing P |
| 2026-09-11 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Marvell CEO reveals decade-long gem behind its explosive 239 |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | AMD Expands Into Rack-Scale AI as Agentic Workloads Boost CP |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | The Better Nvidia Killer: Broadcom or AMD? |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | SeekingAlp | Advanced Micro Devices, Inc. (AMD) Presents at Goldman Sachs |
| 2026-09-11 | Rumor | ⚪  0 | 1.08 | Yahoo | AMD, BE, CRWV In Focus: Situational Awareness Has Been Repor |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | Advanced Micro Devices vs. Qualcomm: Which Technology Stock  |

---

## 🟢 Mid Long (14)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 10.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 18 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Stock Market Today, Sept. 11: HPE Surges on AI Infrastructure Demand a
- 🟢 [Earnings|w1.95] AI Server Stocks Slide as Two-Day Run Unwinds: Hewlett Packard Enterpr
- 🟢 [Earnings|w1.95] HPE Surges 26% in 3 Months: Is it the Right Time to Buy the Stock?

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | ⚪  0 | 2.76 | Yahoo | Jim Cramer Turned Out Right For This Particular AI Stock Tha |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | Stock Market Today, Sept. 11: HPE Surges on AI Infrastructur |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | What Did Dell Technologies Say Before Its Stock Quadrupled? |
| 2026-09-11 | Earnings | 🔴 -1 | 2.34 | Yahoo | Arista Networks Stock Rallied, But Is It Now A Bet On Its Su |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | Dell, HPE and HP Surge as AI Demand Fuels Hardware Boom |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | Dell and HPE Stocks Are Surging on the AI Spending Boom |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL, HPE Stocks Lead S&P 500 Gains: Oracle’s $95B Capex Pla |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | Can HPE Sustain Its AI Infrastructure Momentum Amid the Cape |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 4 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Policy|w2.16] Gold Miner's Luster Lures Funds; Stock Trades Around Buy Point
- 🟢 [Earnings|w1.95] WPM Posts Record Revenues in H126: Is More Upside Ahead?
- 🟢 [Industry|w1.05] Wheaton Precious Metals (NYSE:WPM) Combines High Growth Momentum with 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Policy | 🟢 +1 | 2.16 | Yahoo | Gold Miner's Luster Lures Funds; Stock Trades Around Buy Poi |
| 2026-09-10 | Earnings | 🟢 +1 | 1.95 | Yahoo | WPM Posts Record Revenues in H126: Is More Upside Ahead? |
| 2026-09-08 | Industry | ⚪  0 | 1.05 | Yahoo | Safety Stocks Are Not What They Used to Be: 4 Names Built fo |
| 2026-09-08 | Industry | 🟢 +1 | 1.05 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Combines High Growth Mome |
| 2026-09-07 | Analyst Action | ⚪  0 | 1.08 | Benzinga | Here's How Much $1000 Invested In Wheaton Precious Metals 10 |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.39 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?
- 🟢 [Industry|w1.8] Lumentum: Why 2027 Will Be A Game Changer
- 🟢 [Industry|w1.25] LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAOI?

**Bearish Factors:**
- 🔴 [Industry|w1.25] Lumentum's $7.2 Billion Loss Was Not A Loss

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | AAOI's Optical Networking Demand Rise: Can It Beat LITE and  |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | SeekingAlp | Lumentum: Why 2027 Will Be A Game Changer |
| 2026-09-10 | Earnings | ⚪  0 | 1.95 | Yahoo | Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report? |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | SeekingAlp | Lumentum Holdings Inc. (LITE) Presents at Citi's 2026 Global |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | LITE's Laser Growth Accelerates: Can It Challenge AVGO & AAO |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | Buy 3 AI-Powered Photonics Stocks to Tap Solid Short-Term Pr |
| 2026-09-09 | Industry | 🔴 -1 | 1.25 | SeekingAlp | Lumentum's $7.2 Billion Loss Was Not A Loss |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.95 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Nebius: Explosive Growth Meets A Stretched Valuation
- 🟢 [Industry|w1.5] Nebius: I'm Not Selling, But I'm Monetizing
- 🟢 [Analyst Action|w1.5] Truist Securities Initiates Coverage On Nebius Group with Buy Rating, 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | Nebius' Heavy CapEx Push: Can Customer Prepayments Ease the  |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Nebius Just Became Palantir’s Preferred AI Infrastructure Pa |
| 2026-09-10 | Industry | 🟢 +1 | 1.5 | SeekingAlp | Nebius: I'm Not Selling, But I'm Monetizing |
| 2026-09-10 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | Nebius: Explosive Growth Meets A Stretched Valuation |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Truist Securities Initiates Coverage On Nebius Group with Bu |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | SeekingAlp | Nebius Group N.V. (NBIS) Presents at Citi's 2026 Global TMT  |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 12.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 19 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] ServiceNow To Rally More Than 18%? Here Are 10 Top Analyst Forecasts F
- 🟢 [Analyst Action|w2.16] Citizens Maintains Market Outperform on Robinhood Markets, Raises Pric
- 🟢 [Earnings|w1.95] Robinhood Stock Falling on August Figures: Here’s the Reason Why

**Bearish Factors:**
- 🔴 [Industry|w1.5] Robinhood Markets, Inc. (HOOD) Registers a Bigger Fall Than the Market

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | ⚪  0 | 2.76 | Yahoo | Jim Cramer Said Robinhood Markets (NASDAQ:HOOD) Just Keeps O |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Breaks Down the Generational Shift Driving Robinh |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | Buy Robinhood Markets Stock, Analyst Says. Plus, Intuit and  |
| 2026-09-11 | Rumor | 🟢 +1 | 1.08 | Yahoo | Robinhood Stock Pullback May Be Misleading |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | AMC Gains 5% on Tokenization Truce Signal, Robinhood Barely  |
| 2026-09-11 | Policy | ⚪  0 | 2.16 | Yahoo | HOOD Stock Tokens Draw Fresh Scrutiny: Could Regulation Slow |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Benzinga | ServiceNow To Rally More Than 18%? Here Are 10 Top Analyst F |
| 2026-09-11 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Citizens Maintains Market Outperform on Robinhood Markets, R |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 5.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Micron (MU)’s Taiwan Workers Want a Bigger Slice of its Record AI Prof
- 🟢 [Earnings|w2.34] An Intel-Backed Startup Says It Can Beat HBM. Is Micron’s AI Memory Bo
- 🟢 [Earnings|w2.34] Why Micron Needs To Be In An AI Portfolio

**Bearish Factors:**
- 🔴 [Industry|w1.8] Micron offers Taiwan workers up to 68-month bonuses as strike threat l

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | Micron (MU)’s Taiwan Workers Want a Bigger Slice of its Reco |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | An Intel-Backed Startup Says It Can Beat HBM. Is Micron’s AI |
| 2026-09-11 | M&A | ⚪  0 | 2.52 | Yahoo | Goldman Sachs and Billionaires Like These 2 AI Stocks |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Why Micron Needs To Be In An AI Portfolio |
| 2026-09-11 | Earnings | ⚪  0 | 2.34 | Yahoo | Micron Bets on Long-Term SCA Deals: Can It Lower Earnings Cy |
| 2026-09-11 | Industry | 🔴 -1 | 1.8 | Yahoo | Micron offers Taiwan workers up to 68-month bonuses as strik |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 12.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI Server Dem
- 🟢 [Earnings|w2.34] Dell Technologies (DELL) Raises its AI Server Forecast for the Second 
- 🟢 [Earnings|w2.34] Hewlett Packard Enterprise and Dell Surge 11% as Oracle’s Capex Guidan

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?
- 🔴 [Policy|w2.16] S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye F

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Compares Dell (DELL) to Dallas Cowboys Star CeeDe |
| 2026-09-12 | Earnings | ⚪  0 | 2.76 | Yahoo | Jim Cramer Turned Out Right For This Particular AI Stock Tha |
| 2026-09-12 | Earnings | 🟢 +1 | 2.76 | Yahoo | Jim Cramer Favors Dell (DELL) Over Super Micro (SMCI) as AI  |
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell Technologies (DELL) Raises its AI Server Forecast for t |
| 2026-09-11 | Policy | 🔴 -1 | 2.16 | Yahoo | S&P 500, Dow Break Past Four-Day Loss To End Higher As Inves |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL Stock Just Hit a New All-Time High. Here's Why. |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | What Did Dell Technologies Say Before Its Stock Quadrupled? |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | RBC Drops Jaw Dropping Price Target on Dell Stock |

---

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.26 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] ASE Technology Surges 16% in 3 Months: Time to Hold or Fold the Stock?
- 🟢 [Earnings|w1.63] ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend and High-

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | Yahoo | ASE Technology Surges 16% in 3 Months: Time to Hold or Fold  |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | ChartMill | ASE Technology Holding (NYSE:ASX) Clears the Minervini Trend |
| 2026-09-09 | Earnings | ⚪  0 | 1.63 | Yahoo | ASE Technology Holding Co., Ltd. Announces Monthly Net Reven |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 8.85 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Apple’s Foldable iPhone Could Trigger a Massive 'Upgrade Cycle,' Says 
- 🟢 [Analyst Action|w2.16] Apple’s New Foldable Phone Poised for Strong Sales
- 🟢 [Industry|w2.13] CP Group leader tells of modernizing Boca’s Innovation Campus: ‘It bec

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Industry | 🟢 +1 | 2.13 | Yahoo | CP Group leader tells of modernizing Boca’s Innovation Campu |
| 2026-09-12 | Buyback | ⚪  0 | 2.55 | Yahoo | Prediction: Nvidia Will Overtake Apple in Stock Buybacks and |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Apple's AI vision is tailored for the moment of AI panic |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Apple Health Chief Knows the Health App Needs Work |
| 2026-09-12 | Earnings | 🟢 +1 | 2.76 | Yahoo | Apple’s Foldable iPhone Could Trigger a Massive 'Upgrade Cyc |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Cook Hands Ternus Apple (AAPL) that Still has to Prove itsel |
| 2026-09-11 | Industry | 🟢 +1 | 1.8 | Yahoo | Apple, Microsoft, and Nvidia Top the List of Largest Compani |
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | Xiaomi and Huawei Launch Foldable Smartphones Ahead of Apple |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 4.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 6 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Five Below (FIVE) Q2 2027 Earnings Call Transcript
- 🟢 [Earnings|w1.63] Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy”
- 🟢 [Earnings|w1.63] Five Below's Strong Traffic & Transactions Drive Growth Momentum

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Five Below COO Trades $2.61M In Company Stock
- 🔴 [Industry|w1.5] Director Of Five Below Makes $1.07M Sale

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Earnings | ⚪  0 | 2.76 | Yahoo | Jim Cramer Thinks This Retailer Is “Extraordinary” With An “ |
| 2026-09-10 | Industry | 🟢 +1 | 1.5 | Yahoo | Five Below Faces Its Toughest Test Ahead After 5 Consecutive |
| 2026-09-10 | Earnings | 🔴 -1 | 1.95 | Benzinga | Five Below COO Trades $2.61M In Company Stock |
| 2026-09-10 | Industry | 🔴 -1 | 1.5 | Benzinga | Director Of Five Below Makes $1.07M Sale |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | Yahoo | Five Below (FIVE) Q2 2027 Earnings Call Transcript |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | Yahoo | Jim Cramer Says Five Below (FIVE) is a “Buy, Buy, Buy” |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | SeekingAlp | Five Below, Inc. (FIVE) Presents at Barclays 19th Annual Glo |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | Yahoo | Five Below's Strong Traffic & Transactions Drive Growth Mome |

---

### NYSE:NEM

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 7 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] Bernstein Maintains Outperform on Newmont, Lowers Price Target to $144
- 🟢 [Earnings|w1.36] Bond Yields Are Pressuring Gold, But Miners May Tell a Different Story

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Industry | ⚪  0 | 1.8 | Yahoo | Company News for Sep 11, 2026 |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Newmont Corporation (NEM) Dips More Than Broader Market: Wha |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Bernstein Maintains Outperform on Newmont, Lowers Price Targ |
| 2026-09-08 | Analyst Action | ⚪  0 | 1.26 | Yahoo | Is Newmont Stock Outperforming the Nasdaq? |
| 2026-09-08 | Earnings | ⚪  0 | 1.36 | Yahoo | Can NEM Maintain Earnings Momentum Amid Production Challenge |
| 2026-09-08 | Earnings | 🟢 +1 | 1.36 | Yahoo | Bond Yields Are Pressuring Gold, But Miners May Tell a Diffe |

---

### NYSE:AR

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Antero Resources (NYSE:AR): High Growth Momentum Aligns With a Breakou
- 🟢 [Earnings|w0.97] Antero Resources (AR) Stock Looks Like A Bargain On Earnings

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Benzinga | Stifel Reinstates Hold on Antero Resources, Announces $42 Pr |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | ChartMill | Antero Resources (NYSE:AR): High Growth Momentum Aligns With |
| 2026-09-06 | Industry | ⚪  0 | 0.75 | SeekingAlp | Antero Resources: The El Nino May Not Dominate Year Ahead Pr |
| 2026-09-06 | Earnings | 🟢 +1 | 0.97 | Yahoo | Antero Resources (AR) Stock Looks Like A Bargain On Earnings |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 3 |

**Bullish Factors:**
- 🟢 [Industry|w1.5] Nyangumarta Warrarn Aboriginal Corporation and Rio Tinto sign mileston
- 🟢 [Analyst Action|w1.5] Bernstein Maintains Outperform on Rio Tinto, Raises Price Target to $8

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | M&A | ⚪  0 | 2.52 | Yahoo | Aurukun Deal Gives Rio Tinto (RIO) More Bauxite Upside, But  |
| 2026-09-10 | Industry | 🟢 +1 | 1.5 | Yahoo | Nyangumarta Warrarn Aboriginal Corporation and Rio Tinto sig |
| 2026-09-09 | Earnings | ⚪  0 | 1.63 | Yahoo | Domestic Metals launches 9,000-metre drill program at Rio Ti |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | Yahoo | Graphene Manufacturing Group's fast-charging battery cells s |
| 2026-09-09 | Industry | ⚪  0 | 1.25 | Yahoo | GMG Announces Long Life Battery Cycling Data |
| 2026-09-09 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Bernstein Maintains Outperform on Rio Tinto, Raises Price Ta |
| 2026-09-08 | Industry | ⚪  0 | 1.05 | Yahoo | Rio Tinto to take over Queensland’s Aurukun Bauxite Project |
| 2026-09-08 | M&A | ⚪  0 | 1.47 | Yahoo | Domestic Metals commences drilling at Rio Tinto joint ventur |

---

### NYSE:SCCO

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 12 |

**Bullish Factors:**
- 🟢 [Policy|w1.8] Copper Stocks Tumble as Tariff Doubt Reverses Record Rally: Freeport-M
- 🟢 [Industry|w0.9] Can Southern Copper Sustain Its Strong Operating Cash Flow Growth?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Southern Copper (SCCO) Sees a More Significant Dip Than Broa |
| 2026-09-10 | Policy | 🟢 +1 | 1.8 | Yahoo | Copper Stocks Tumble as Tariff Doubt Reverses Record Rally:  |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Southern Copper Corporation (SCCO) Is a Trending Stock: Fact |
| 2026-09-07 | Industry | 🟢 +1 | 0.9 | Yahoo | Can Southern Copper Sustain Its Strong Operating Cash Flow G |

---

## ⚠️ Overheated (1)

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 9.21 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 19 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] 3 Reasons to Avoid C and 1 Stock to Buy Instead
- 🟢 [Earnings|w1.63] Citigroup's Restructuring Is Working, And Valuation Has Not Caught Up
- 🟢 [Industry|w1.5] 4 Thriving Investment Bank Behemoths to Buy With Attractive Valuation

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Earnings | 🟢 +1 | 2.34 | Yahoo | 3 Reasons to Avoid C and 1 Stock to Buy Instead |
| 2026-09-10 | Industry | ⚪  0 | 1.5 | Yahoo | Citigroup (C) Completed a Weekend Tokenized-Dollar Transfer. |
| 2026-09-10 | Rumor | ⚪  0 | 0.9 | Yahoo | C Pushes Tokenized Deposits Deeper Into Asia With Japan Expa |
| 2026-09-10 | Policy | ⚪  0 | 1.8 | Yahoo | Citigroup (C) Gains on Turnaround Momentum |
| 2026-09-10 | Industry | 🟢 +1 | 1.5 | Yahoo | 4 Thriving Investment Bank Behemoths to Buy With Attractive  |
| 2026-09-09 | Industry | 🟢 +1 | 1.25 | Yahoo | Is It Worth Investing in Citigroup (C) Based on Wall Street' |
| 2026-09-09 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | Citigroup's Restructuring Is Working, And Valuation Has Not  |
| 2026-09-08 | Industry | 🟢 +1 | 1.05 | Yahoo | Citi turns more bullish on trucking stocks |

---

## 🔴 Avoid / Short (2)

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **37** / 100 |
| Raw Weighted Score | -3.19 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 4 / 26 |

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Oracle Just Added $30 Billion in AI Contracts. Nvidia Investors Should

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-12 | Black Swan | 🔴 -1 | 3.19 | Yahoo | Oracle Just Added $30 Billion in AI Contracts. Nvidia Invest |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Discussed The Contradictions Surrounding NVIDIA C |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Jim Cramer Names NVIDIA the Main Portfolio “Running Back” |
| 2026-09-12 | Industry | ⚪  0 | 2.13 | Yahoo | Palantir and Nvidia Are Building a Sovereign AI Stack. Who C |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **32** / 100 |
| Raw Weighted Score | -4.32 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 2 / 3 |

**Bearish Factors:**
- 🔴 [Analyst Action|w2.16] Keybanc Initiates Coverage of CF Industries Holdings at Underweight
- 🔴 [Analyst Action|w2.16] Keybanc Initiates Coverage On CF Industries Holdings with Underweight 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-11 | Analyst Action | 🔴 -1 | 2.16 | Fintel | Keybanc Initiates Coverage of CF Industries Holdings at Unde |
| 2026-09-11 | Analyst Action | 🔴 -1 | 2.16 | Benzinga | Keybanc Initiates Coverage On CF Industries Holdings with Un |

---

## ⚪ Watch / Neutral (24)

### NASDAQ:BGC
- Score: 58/100 | raw: 1.8 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 57/100 | raw: 1.63 | News: 1 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 57/100 | raw: 1.63 | News: 2 kept / 2 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 56/100 | raw: 1.5 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:RRC
- Score: 55/100 | raw: 1.26 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 2 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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
- Score: 50/100 | raw: 0 | News: 2 kept / 4 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ETN
- Score: 48/100 | raw: -0.53 | News: 7 kept / 16 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-12T12:31:06.258Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
