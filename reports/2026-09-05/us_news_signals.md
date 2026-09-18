---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_a8de753ca92511f1bf99525400e6dd8f
    ReservedCode1: Sxlpx1ZMdQQHqbToI1j8woPfEtE2krQDTYtxU7qagQL/5Qyy07uZhhcUHP9cdZC5tiNy9Z7plGpv7U+yeHQZ2+pjFGq4MEvkJgCHfSZzcOxhHMBDcirBWfpkyjO9f+s9uvkBk1csbCmn8CxW4m+Ak9uek98eASJIaMxJ6HpfBRh60eoIZwRfHAEx3tw=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_a8de753ca92511f1bf99525400e6dd8f
    ReservedCode2: Sxlpx1ZMdQQHqbToI1j8woPfEtE2krQDTYtxU7qagQL/5Qyy07uZhhcUHP9cdZC5tiNy9Z7plGpv7U+yeHQZ2+pjFGq4MEvkJgCHfSZzcOxhHMBDcirBWfpkyjO9f+s9uvkBk1csbCmn8CxW4m+Ak9uek98eASJIaMxJ6HpfBRh60eoIZwRfHAEx3tw=
---

# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-05  |  **News Window:** 2026-08-29 ~ 2026-09-05（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (36)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:RELY** | **96** | 13.76 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/4 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:FIVE** | **89** | 34.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 22/8 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:DELL** | **79** | 20.55 | 🟢 Long (Strong) | Momentum / Hold | High | 17/13 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:VRTX** | **75** | 6.59 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/9 | Overheated Sentiment (one-sided bullish) |
| 5 | **NASDAQ:CRWD** | **73** | 14.73 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/13 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:WPM** | **72** | 5.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/4 | - |
| 7 | **NYSE:AJG** | **70** | 4.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/1 | - |
| 8 | **NYSE:RIO** | **67** | 4.13 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/2 | - |
| 9 | **NASDAQ:MU** | **67** | 3.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/28 | - |
| 10 | **NYSE:FCX** | **65** | 3.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/17 | - |
| 11 | **NYSE:CF** | **65** | 3.58 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/5 | - |
| 12 | **NASDAQ:AAPL** | **63** | 7.74 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/15 | - |
| 13 | **NYSE:AR** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/4 | - |
| 14 | **NASDAQ:ADUS** | **59** | 2.13 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/3 | - |
| 15 | **NASDAQ:HOOD** | **58** | 6.63 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 21/9 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:APH** | **58** | 2.15 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 7/6 | Sentiment Divergence (black swan masked by noise) |
| 17 | **NYSE:NEM** | **56** | 1.45 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/21 | - |
| 18 | **NASDAQ:KRYS** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/1 | - |
| 19 | **NYSE:LTC** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 20 | **NASDAQ:PRGS** | **55** | 1.25 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/1 | - |
| 21 | **NASDAQ:HRMY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 22 | **NYSE:RRC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/2 | - |
| 23 | **NASDAQ:GEN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 24 | **NYSE:WT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 25 | **NYSE:HGTY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 26 | **NASDAQ:OSBC** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 27 | **NASDAQ:NWBI** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 28 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 29 | **NASDAQ:NVDA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/29 | - |
| 30 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:PGY** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/1 | - |
| 32 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NYSE:ASX** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/3 | - |
| 34 | **NYSE:C** | **48** | -0.45 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 6/24 | - |
| 35 | **NASDAQ:SNDK** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 6/24 | Bullish-to-Bearish Reversal (reversal) |
| 36 | **NYSE:HG** | **46** | -0.97 | ⚪ No Trade (Neutral) | Watch | Low | 1/1 | - |

---

## 🟢 Strong Long (1)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 20.55 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Dell: AI Server Growth Backs Value (Rating Upgrade)
- 🟢 [Earnings|w2.34] Jim Cramer Couldn’t Stop Gushing About This Computer Hardware AI Stock
- 🟢 [Earnings|w2.34] Dell Afterglow Continues. These Other Stocks Top Buy Points.

**Bearish Factors:**
- 🔴 [Industry|w1.8] Stocks Fall, Rebound Bullishly; Snowflake, Dell, Tesla, Jobs Report In
- 🔴 [Industry|w1.8] DLLL: Sell Dell And This 2x Levered ETF

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Earnings | 🟢 +1 | 2.76 | SeekingAlp | Dell: AI Server Growth Backs Value (Rating Upgrade) |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Jim Cramer Couldn’t Stop Gushing About This Computer Hardwar |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | DELL Stock Hits 52-Week High: Does it Have More Room to Run? |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Founder-Led Companies That Are Redefining Technology and Gro |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Surges 7% as Semiconductors Lead a Flat Tape; He |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Dell Afterglow Continues. These Other Stocks Top Buy Points. |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Why Intel Stock Popped Today |
| 2026-09-04 | Industry | 🔴 -1 | 1.8 | Yahoo | Stocks Fall, Rebound Bullishly; Snowflake, Dell, Tesla, Jobs |

---

## 🟢 Mid Long (9)

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 14.73 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] CrowdStrike and Palo Alto Made the SaaSmageddon Survivor List. Can AI 
- 🟢 [Earnings|w2.34] Commvault (CVLT) Turns Cyberattacks Into Automated Recovery Through Ne
- 🟢 [Earnings|w2.34] Zscaler Falls 4% as FY2027 Growth Guidance Overshadows Earnings Beat; 

**Bearish Factors:**
- 🔴 [Industry|w1.5] Jim Cramer Calls CrowdStrike (CRWD) a Cybersecurity Heavy Hitter

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | CrowdStrike and Palo Alto Made the SaaSmageddon Survivor Lis |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Jim Cramer Is Excited About These Two Cybersecurity Stocks |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | The Gap Between CRWD Stock And Its Own Numbers |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | VAST Data and CrowdStrike Deliver First-of-Its-Kind Cybersec |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Commvault (CVLT) Turns Cyberattacks Into Automated Recovery  |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Zscaler Falls 4% as FY2027 Growth Guidance Overshadows Earni |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | AI Is Driving an Increased Need for Cybersecurity. Here's th |
| 2026-09-04 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Scotiabank Maintains Sector Outperform on CrowdStrike Holdin |

---

### NYSE:WPM

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 4 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Leadership and
- 🟢 [Industry|w1.25] Is Antamina Set to Boost Wheaton Precious Metals' Production?
- 🟢 [Industry|w1.25] Why Wheaton Precious Metals Rallied in August

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | TECK or WPM: Which Is the Better Value Stock Right Now? |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | Is Antamina Set to Boost Wheaton Precious Metals' Production |
| 2026-09-02 | Earnings | 🟢 +1 | 1.63 | ChartMill | Wheaton Precious Metals (NYSE:WPM) Displays High-Growth Lead |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | Why Wheaton Precious Metals Rallied in August |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | Wheaton Precious Metals (TSX:WPM) Stock Trades Rich On A 272 |
| 2026-09-01 | Earnings | ⚪  0 | 1.36 | Yahoo | Wheaton Precious Metals (TSX:WPM) Investor Day Puts Its Valu |
| 2026-09-01 | Industry | ⚪  0 | 1.05 | Yahoo | Wheaton Precious Metals Announces Investor Day Webcast on Se |

---

### NYSE:AJG

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 1 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] Do You Believe Arthur J. Gallagher (AJG) Could Deliver Mid-Teens EPS G
- 🟢 [Industry|w1.5] The Zacks Analyst Blog Highlights Willis Towers Watson, Arthur J. Gall
- 🟢 [Industry|w1.25] 3 Insurance Brokerage Stocks Find New Growth Drivers as Rates Fade

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-03 | Earnings | ⚪  0 | 1.95 | Yahoo | Arthur J. Gallagher & Co. to Host Regularly Scheduled Quarte |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Do You Believe Arthur J. Gallagher (AJG) Could Deliver Mid-T |
| 2026-09-03 | Industry | 🟢 +1 | 1.5 | Yahoo | The Zacks Analyst Blog Highlights Willis Towers Watson, Arth |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | 3 Insurance Brokerage Stocks Find New Growth Drivers as Rate |

---

### NYSE:RIO

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.13 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Rio Tinto (LSE:RIO) Stock Looks Rich On Cash Flow Yet Cheap On Earning
- 🟢 [Industry|w1.25] Rio Tinto Group (LSE:RIO) Looks Fully Valued On Its Critical Minerals 
- 🟢 [Industry|w1.25] Rome Resources, Georgina Energy, Sterling Digital, Aminex, CMRS, Quant

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Earnings | 🟢 +1 | 1.63 | Yahoo | Rio Tinto (LSE:RIO) Stock Looks Rich On Cash Flow Yet Cheap  |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | Rio Tinto Group (LSE:RIO) Looks Fully Valued On Its Critical |
| 2026-09-02 | Industry | ⚪  0 | 1.25 | Yahoo | Critical Mineral Resources CEO: Ex-Rio Tinto exec Brett Capp |
| 2026-09-02 | Industry | 🟢 +1 | 1.25 | Yahoo | Rome Resources, Georgina Energy, Sterling Digital, Aminex, C |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 3.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 28 |

**Bullish Factors:**
- 🟢 [Policy|w2.16] Micron, SanDisk Jump 4% Even as Hot Jobs Report Briefly Flips Fed Hike
- 🟢 [Industry|w1.8] Lynx Equity sees Micron and SanDisk breakout as volatility normalizes

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Policy | 🟢 +1 | 2.16 | Yahoo | Micron, SanDisk Jump 4% Even as Hot Jobs Report Briefly Flip |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Lynx Equity sees Micron and SanDisk breakout as volatility n |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 17 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.16] How Is Freeport-McMoRan’s Stock Performance Compared to Other Copper S
- 🟢 [Policy|w1.5] Copper Surges as Shifting Trade Policy and AI Demand Collide

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | How Is Freeport-McMoRan’s Stock Performance Compared to Othe |
| 2026-09-03 | Industry | ⚪  0 | 1.5 | Yahoo | Freeport-McMoRan (FCX) Stock Falls Amid Market Uptick: What  |
| 2026-09-02 | Policy | 🟢 +1 | 1.5 | Yahoo | Copper Surges as Shifting Trade Policy and AI Demand Collide |
| 2026-09-01 | Industry | ⚪  0 | 1.05 | SeekingAlp | Freeport-McMoRan: The Trailing Multiple Is Describing An Acc |

---

### NYSE:CF

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.58 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] CF Industries: Still Misunderstood, Still Undervalued
- 🟢 [Industry|w1.05] CF Shares Up 15% in 3 Months: Here's What's Driving the Upside
- 🟢 [Industry|w0.9] CF Industries (NYSE:CF) Exhibits Technical Strength and Bull Flag Brea

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | ⚪  0 | 2.34 | Yahoo | CF (CF) Up 18.1% Since Last Earnings Report: Can It Continue |
| 2026-09-02 | Earnings | 🟢 +1 | 1.63 | SeekingAlp | CF Industries: Still Misunderstood, Still Undervalued |
| 2026-09-01 | Industry | 🟢 +1 | 1.05 | Yahoo | CF Shares Up 15% in 3 Months: Here's What's Driving the Upsi |
| 2026-08-31 | Industry | 🟢 +1 | 0.9 | ChartMill | CF Industries (NYSE:CF) Exhibits Technical Strength and Bull |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 7.74 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 15 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Apple's Foldable iPhone Runs Into Early Trouble
- 🟢 [Earnings|w2.34] Nvidia and Apple Are Both Winning in 2026 And Doing It Because Of This
- 🟢 [Industry|w1.8] Dow Jones Futures: Nvidia, Micron, Sandisk Flash Buy Signals; Apple, I

**Bearish Factors:**
- 🔴 [Earnings|w2.34] Oura Revenue Surges as Smart-Ring Company Looks to Go Public. Apple Is

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Industry | ⚪  0 | 2.13 | Yahoo | Here's How Many Shares of Apple (AAPL) Stock You'd Need for  |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Dow Jones Futures: Nvidia, Micron, Sandisk Flash Buy Signals |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Why Apple (AAPL) Dipped More Than Broader Market Today |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Apple's John Ternus needs to be his own type of CEO and 'not |
| 2026-09-04 | Earnings | ⚪  0 | 2.34 | Yahoo | Top Research Reports for Apple, Broadcom & Shell |
| 2026-09-04 | Rumor | ⚪  0 | 1.08 | Yahoo | Why Apple Stock Sank on Friday |
| 2026-09-04 | Earnings | ⚪  0 | 2.34 | Yahoo | Apple Slips 1.1% as Face ID Fight Reaches a $218 Billion Eng |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Jim Cramer Says Buy the Magnificent Seven Again, Traders See |

---

### NYSE:AR

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 4 |

**Bullish Factors:**
- 🟢 [Analyst Action|w1.5] Goldman Sachs Maintains Buy on Antero Resources, Raises Price Target t
- 🟢 [Analyst Action|w1.26] Raymond James Maintains Strong Buy on Antero Resources, Raises Price T

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-02 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Goldman Sachs Maintains Buy on Antero Resources, Raises Pric |
| 2026-09-01 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Raymond James Maintains Strong Buy on Antero Resources, Rais |

---

## ⚠️ Overheated (3)

### NASDAQ:RELY

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 13.76 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 4 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And Take-Rate
- 🟢 [Earnings|w1.95] Remitly (RELY) Stock May Be Overvalued With Little Room For Error
- 🟢 [Earnings|w1.95] Remitly Global (RELY) Is a Great Choice for 'Trend' Investors, Here's 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Remitly’s (RELY) Record Growth Meets One-Time Tax Boosts And |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | New Strong Buy Stocks for September 4th |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Remitly (RELY) Stock May Be Overvalued With Little Room For  |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Remitly Global (RELY) Is a Great Choice for 'Trend' Investor |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Why Remitly Global Stock Popped 17.4% Last Month |
| 2026-09-01 | Industry | 🟢 +1 | 1.05 | Yahoo | Best Momentum Stocks to Buy for September 1st |
| 2026-09-01 | Industry | ⚪  0 | 1.05 | Yahoo | Is Ralliant Corporation (RAL) Stock Outpacing Its Business S |
| 2026-09-01 | Earnings | 🟢 +1 | 1.36 | Yahoo | 5 Relative Price Strength Stocks With Momentum on Their Side |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 34.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 22 / 8 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Five Below (NASDAQ:FIVE): High Growth Momentum With a Breakout Setup
- 🟢 [Earnings|w2.76] What Just Happened With Five Below (FIVE)?
- 🟢 [Earnings|w2.34] Jim Cramer says Five Below stock is a buy after earnings beat

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Earnings | 🟢 +1 | 2.76 | ChartMill | Five Below (NASDAQ:FIVE): High Growth Momentum With a Breako |
| 2026-09-05 | Earnings | ⚪  0 | 2.76 | Yahoo | Stronger Q2 Results, Raised Outlook And Buybacks Might Chang |
| 2026-09-05 | Earnings | 🟢 +1 | 2.76 | Yahoo | What Just Happened With Five Below (FIVE)? |
| 2026-09-04 | Analyst Action | 🟢 +1 | 2.16 | Yahoo | Why Five Below (FIVE) Stock Is Trading Up Today |
| 2026-09-04 | Buyback | 🟢 +1 | 2.16 | Yahoo | Five Below (FIVE) Reported Sales Growth and Authorized a $60 |
| 2026-09-04 | Earnings | ⚪  0 | 2.34 | Yahoo | Wall Street Analysts See a 25.77% Upside in Five Below (FIVE |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Are Retail-Wholesale Stocks Lagging  PC Connection (CNXN) Th |
| 2026-09-04 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Goldman Sachs Maintains Buy on Five Below, Raises Price Targ |

---

### NASDAQ:VRTX

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.59 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 9 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Vertex (VRTX) Stock Trades At A Premium On Earnings Yet Looks Fair On 
- 🟢 [Analyst Action|w1.5] Morgan Stanley Reinstates Overweight on Vertex Pharmaceuticals, Announ
- 🟢 [M&A|w1.47] Vertex Completes Acquisition of Crinetics Pharmaceuticals and Announce

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Analyst Action | ⚪  0 | 2.16 | Benzinga | Here's How Much $100 Invested In Vertex Pharmaceuticals 20 Y |
| 2026-09-03 | Industry | ⚪  0 | 1.5 | Yahoo | Vortex Energy Announces Plans for Ground Gravity Survey at t |
| 2026-09-02 | Earnings | ⚪  0 | 1.63 | Yahoo | Why Is Vertex (VRTX) Up 14.4% Since Last Earnings Report? |
| 2026-09-02 | Analyst Action | ⚪  0 | 1.5 | Yahoo | How Is Vertex Pharmaceuticals' Stock Performance Compared to |
| 2026-09-02 | Analyst Action | 🟢 +1 | 1.5 | Benzinga | Morgan Stanley Reinstates Overweight on Vertex Pharmaceutica |
| 2026-09-02 | Earnings | 🟢 +1 | 1.63 | Yahoo | Vertex (VRTX) Stock Trades At A Premium On Earnings Yet Look |
| 2026-09-01 | Rumor | 🟢 +1 | 0.63 | Yahoo | Vertex Pharmaceuticals (VRTX) Could Be 3% Undervalued If Its |
| 2026-09-01 | Earnings | 🟢 +1 | 1.36 | Yahoo | Vertex Completes $10 Billion Crinetics Acquisition, Adding R |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **58** / 100 |
| Raw Weighted Score | 6.63 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 21 / 9 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Robinhood Chain Brings Arbitrum Token Back from the Dead. ARB is Up 90
- 🟢 [Industry|w1.8] AMC CEO Blasts Robinhood Stock Tokens as AMC Shares Rally
- 🟢 [Industry|w1.8] 'Detestable, inexcusable, vile': AMC CEO slams Robinhood for tokenized

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Lululemon Falls on China Business; Tesla Cybercab Service | Stock Move
- 🔴 [Industry|w1.8] Why AMC Stock Is Jumping After a Big CEO Bust Up With Robinhood

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Industry | ⚪  0 | 2.13 | Yahoo | Watch Out, Solana and Ethereum. Robinhood's Blockchain Is Ea |
| 2026-09-05 | Industry | 🟢 +1 | 2.13 | Yahoo | Robinhood Chain Brings Arbitrum Token Back from the Dead. AR |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Cramer Says a Wave of 21 Year Olds on Robinhood Is the Only  |
| 2026-09-04 | Policy | ⚪  0 | 2.16 | Yahoo | Robinhood and AMC Clash Over Tokenized Stock Listing |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | AMC CEO Blasts Robinhood Stock Tokens as AMC Shares Rally |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | 'Send Your Lawyers': Robinhood Isn't Backing Down From AMC O |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Why Robinhood Stock Is Falling Today |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood sends harsh response to AMC CEO's legal threat |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **58** / 100 |
| Raw Weighted Score | 2.15 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 6 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Amphenol (APH) Upgraded to Strong Buy: Here's Why
- 🟢 [Earnings|w1.95] Is Amphenol Stock Outperforming the Dow?
- 🟢 [Industry|w1.05] Dear Amphenol Stock Fans, Mark Your Calendars for September 2

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Black Swan | 🔴 -1 | 3.19 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 1.5 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Is Amphenol Stock Outperforming the Dow? |
| 2026-09-02 | Industry | ⚪  0 | 1.25 | Yahoo | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |
| 2026-09-01 | Industry | 🟢 +1 | 1.05 | Yahoo | Dear Amphenol Stock Fans, Mark Your Calendars for September  |

---

## 🔴 Avoid / Short (3)

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **58** / 100 |
| Raw Weighted Score | 6.63 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 21 / 9 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Industry|w2.13] Robinhood Chain Brings Arbitrum Token Back from the Dead. ARB is Up 90
- 🟢 [Industry|w1.8] AMC CEO Blasts Robinhood Stock Tokens as AMC Shares Rally
- 🟢 [Industry|w1.8] 'Detestable, inexcusable, vile': AMC CEO slams Robinhood for tokenized

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Lululemon Falls on China Business; Tesla Cybercab Service | Stock Move
- 🔴 [Industry|w1.8] Why AMC Stock Is Jumping After a Big CEO Bust Up With Robinhood

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Industry | ⚪  0 | 2.13 | Yahoo | Watch Out, Solana and Ethereum. Robinhood's Blockchain Is Ea |
| 2026-09-05 | Industry | 🟢 +1 | 2.13 | Yahoo | Robinhood Chain Brings Arbitrum Token Back from the Dead. AR |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Cramer Says a Wave of 21 Year Olds on Robinhood Is the Only  |
| 2026-09-04 | Policy | ⚪  0 | 2.16 | Yahoo | Robinhood and AMC Clash Over Tokenized Stock Listing |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | AMC CEO Blasts Robinhood Stock Tokens as AMC Shares Rally |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | 'Send Your Lawyers': Robinhood Isn't Backing Down From AMC O |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Why Robinhood Stock Is Falling Today |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Robinhood sends harsh response to AMC CEO's legal threat |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **58** / 100 |
| Raw Weighted Score | 2.15 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 7 / 6 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Amphenol (APH) Upgraded to Strong Buy: Here's Why
- 🟢 [Earnings|w1.95] Is Amphenol Stock Outperforming the Dow?
- 🟢 [Industry|w1.05] Dear Amphenol Stock Fans, Mark Your Calendars for September 2

**Bearish Factors:**
- 🔴 [Black Swan|w3.19] Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Strong Techni

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-05 | Black Swan | 🔴 -1 | 3.19 | ChartMill | Amphenol (NYSE:APH) Flags High-Quality Breakout Setup on Str |
| 2026-09-04 | Earnings | 🟢 +1 | 2.34 | Yahoo | Amphenol (APH) Upgraded to Strong Buy: Here's Why |
| 2026-09-04 | Industry | ⚪  0 | 1.8 | Yahoo | Apple’s New Foldable iPhone Could Cost $2,000, Citi Says: TS |
| 2026-09-03 | Industry | ⚪  0 | 1.5 | Yahoo | Can VRT's UIG Deal Deepen Its AI Power Edge Over APH & SMCI? |
| 2026-09-03 | Earnings | 🟢 +1 | 1.95 | Yahoo | Is Amphenol Stock Outperforming the Dow? |
| 2026-09-02 | Industry | ⚪  0 | 1.25 | Yahoo | Are Computer and Technology Stocks Lagging  Amphenol (APH) T |
| 2026-09-01 | Industry | 🟢 +1 | 1.05 | Yahoo | Dear Amphenol Stock Fans, Mark Your Calendars for September  |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **48** / 100 |
| Raw Weighted Score | -0.45 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 6 / 24 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Market Chatter: Citigroup May Open Brokerage Unit in China

**Bearish Factors:**
- 🔴 [Black Swan|w2.25] Will Citi’s Blockchain Push and New Notes Issuance Change Citigroup’s 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-04 | Analyst Action | ⚪  0 | 2.16 | Yahoo | Is Citigroup (C) Outperforming Other Finance Stocks This Yea |
| 2026-09-04 | Industry | 🟢 +1 | 1.8 | Yahoo | Market Chatter: Citigroup May Open Brokerage Unit in China |
| 2026-09-03 | Earnings | ⚪  0 | 1.95 | Yahoo | Can Citigroup Sustain Its Aggressive Capital Return Strategy |
| 2026-09-03 | Black Swan | 🔴 -1 | 2.25 | Yahoo | Will Citi’s Blockchain Push and New Notes Issuance Change Ci |
| 2026-09-02 | Industry | ⚪  0 | 1.25 | Yahoo | Citigroup (C) Outpaces Stock Market Gains: What You Should K |
| 2026-09-02 | Analyst Action | ⚪  0 | 1.5 | Yahoo | Citigroup Stock: Is C Outperforming the Financial Sector? |

---

## ⚪ Watch / Neutral (20)

### NASDAQ:ADUS
- Score: 59/100 | raw: 2.13 | News: 1 kept / 3 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NEM
- Score: 56/100 | raw: 1.45 | News: 7 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 56/100 | raw: 1.5 | News: 3 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 55/100 | raw: 1.26 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PRGS
- Score: 55/100 | raw: 1.25 | News: 2 kept / 1 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HRMY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:RRC
- Score: 50/100 | raw: 0 | News: 0 kept / 2 dropped | No relevant news in window

### NASDAQ:GEN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:WT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:HGTY
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:OSBC
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:NWBI
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:NVDA
- Score: 50/100 | raw: 0 | News: 1 kept / 29 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NASDAQ:PGY
- Score: 50/100 | raw: 0 | News: 0 kept / 1 dropped | No relevant news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:ASX
- Score: 50/100 | raw: 0 | News: 0 kept / 3 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 48/100 | raw: -0.6 | News: 6 kept / 24 dropped | No clear directional bias — stay flat
- Patterns: Bullish-to-Bearish Reversal (reversal)

### NYSE:HG
- Score: 46/100 | raw: -0.97 | News: 1 kept / 1 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-05T12:30:40.376Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*
*（内容由AI生成，仅供参考）*
