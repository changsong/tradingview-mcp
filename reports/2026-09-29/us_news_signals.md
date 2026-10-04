# US Stock News Sentiment Analysis - Tradeable Signals (local component chain fallback)
**Analysis Date:** 2026-09-29  |  **News Window:** 2026-09-22 ~ 2026-09-29（Finnhub company-news，覆盖最近约 5-7 个交易日）
**Stock Pool:** us_selected.txt (53)  |  **Classifier:** 本地字典组件（LLM 402 不可用，浏览器 enrich 不可用，走本地兜底）
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:GRAL** | **84** | 8.11 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/11 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:ASX** | **80** | 7.18 | 🟢 Long (Strong) | Momentum / Hold | High | 5/4 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:ETN** | **79** | 10.6 | 🟢 Long (Strong) | Momentum / Hold | High | 12/17 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:APH** | **79** | 8.88 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/5 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:ASML** | **78** | 8.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 10/15 | Sentiment Strengthening UP (trend) |
| 6 | **NYSE:P** | **76** | 9.68 | 🟢 Long (Strong) | Momentum / Hold | High | 14/16 | - |
| 7 | **NYSE:HPE** | **74** | 8.2 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 10/20 | Sentiment Strengthening UP (trend) |
| 8 | **NYSE:BE** | **72** | 8.21 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/20 | - |
| 9 | **NASDAQ:AAPL** | **72** | 8.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 10 | **NASDAQ:AEHR** | **72** | 5.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/2 | - |
| 11 | **NASDAQ:STX** | **70** | 4.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/24 | Sentiment Strengthening UP (trend) |
| 12 | **NASDAQ:LITE** | **69** | 4.66 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/21 | - |
| 13 | **NYSE:ANET** | **69** | 4.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/16 | - |
| 14 | **NASDAQ:SMCI** | **69** | 4.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/22 | - |
| 15 | **NASDAQ:META** | **68** | 13.74 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 18/12 | Sentiment Strengthening UP (trend) |
| 16 | **NASDAQ:PLTR** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/26 | - |
| 17 | **NASDAQ:HOOD** | **67** | 8.93 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 18/12 | - |
| 18 | **NASDAQ:SNDK** | **67** | 4.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 19 | **NYSE:SCCO** | **67** | 4.16 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/3 | - |
| 20 | **NASDAQ:MU** | **66** | 4.89 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/23 | Sentiment Strengthening UP (trend) |
| 21 | **NASDAQ:ARM** | **66** | 6.14 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | - |
| 22 | **NASDAQ:SANM** | **65** | 3.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/5 | - |
| 23 | **NASDAQ:PANW** | **64** | 6.45 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/16 | - |
| 24 | **NYSE:TSM** | **63** | 3.2 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/25 | - |
| 25 | **NYSE:GRMN** | **62** | 2.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/5 | - |
| 26 | **NYSE:SN** | **62** | 2.8 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/2 | - |
| 27 | **NYSE:DELL** | **61** | 8.02 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 18/12 | Sentiment Divergence (black swan masked by noise) |
| 28 | **NASDAQ:NVDA** | **61** | 2.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/28 | - |
| 29 | **NYSE:WT** | **61** | 2.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/3 | - |
| 30 | **NYSE:DT** | **58** | 1.98 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/6 | - |
| 31 | **NASDAQ:AMD** | **56** | 5.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 20/10 | Sentiment Strengthening UP (trend) |
| 32 | **NASDAQ:VICR** | **56** | 1.36 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/22 | - |
| 33 | **NASDAQ:NBIS** | **55** | 1.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/23 | - |
| 34 | **NYSE:KEYS** | **55** | 1.2 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/9 | - |
| 35 | **NASDAQ:TEM** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/6 | - |
| 36 | **NASDAQ:QCOM** | **54** | 0.96 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/24 | - |
| 37 | **NASDAQ:ENTG** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/5 | - |
| 38 | **NYSE:JOE** | **54** | 0.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:INTC** | **53** | 0.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/27 | - |
| 40 | **NASDAQ:MSFT** | **53** | 0.63 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/25 | - |
| 41 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:SPNT** | **50** | 0 | ⚪ No Trade (No relevant news) | Watch | - | 0/3 | - |
| 43 | **OTC:SMTGY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 45 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:DOCN** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/5 | - |
| 47 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 48 | **NASDAQ:CRWD** | **47** | -2.58 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 21/9 | - |
| 49 | **NYSE:LTC** | **46** | -0.97 | ⚪ No Trade (Neutral) | Watch | Low | 2/1 | - |
| 50 | **NASDAQ:MRVL** | **43** | -2.34 | ⚪ No Trade (Neutral) | Watch | Low | 7/23 | - |
| 51 | **NYSE:VEEV** | **43** | -1.8 | ⚪ No Trade (Neutral) | Watch | Low | 10/10 | - |
| 52 | **NYSE:ELF** | **42** | -1.88 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 4/2 | - |
| 53 | **NYSE:LLY** | **36** | -7.25 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 11/19 | - |

---

## 🟢 Strong Long (3)

### NYSE:ASX

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.18 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 4 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Is ASE Technology (ASX) Becoming a Bigger AI Semiconductor Play?
- 🟢 [Industry|w1.8] What Makes ASE Technology Hldg (ASX) a Strong Momentum Stock: Buy Now?
- 🟢 [Earnings|w1.36] ASE Technology: AI Demand Is Driving A New Growth Phase

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Is ASE Technology (ASX) Becoming a Bigger AI Semiconductor P |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | What Makes ASE Technology Hldg (ASX) a Strong Momentum Stock |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | SeekingAlp | ASE Technology: AI Demand Is Driving A New Growth Phase |
| 2026-09-24 | Rumor | ⚪  0 | 0.54 | Yahoo | ASE Technology Hldg (ASX) is on the Move, Here's Why the Tre |
| 2026-09-24 | M&A | 🟢 +1 | 1.26 | Benzinga | Hung Pen Chang Takes A Bullish Stance, Acquiring ASE Technol |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 10.6 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [M&A|w2.98] Can Eaton Corporation (ETN) Turn COL Group Into a Growth Engine?
- 🟢 [M&A|w2.52] Can Eaton's Strategic Acquisitions Boost Further Long-Term Growth?
- 🟢 [Industry|w1.8] Vertiv (VRT) vs. Eaton (ETN): Which AI Power Stock Is the Better Buy?

**Bearish Factors:**
- 🔴 [Industry|w1.8] Eaton (ETN) Registers a Bigger Fall Than the Market: Important Facts t

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | M&A | 🟢 +1 | 2.98 | Yahoo | Can Eaton Corporation (ETN) Turn COL Group Into a Growth Eng |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Eaton (ETN) Registers a Bigger Fall Than the Market: Importa |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Vertiv (VRT) vs. Eaton (ETN): Which AI Power Stock Is the Be |
| 2026-09-28 | M&A | 🟢 +1 | 2.52 | Yahoo | Can Eaton's Strategic Acquisitions Boost Further Long-Term G |
| 2026-09-25 | M&A | 🟢 +1 | 1.47 | Yahoo | Eaton to Buy COL Group in $923 Million Deal to Expand Europe |
| 2026-09-25 | Earnings | ⚪  0 | 1.36 | Yahoo | Eaton Adds European Power Capacity as Data Center Demand Kee |
| 2026-09-25 | M&A | 🟢 +1 | 1.47 | Yahoo | Eaton signs agreement to acquire COL Group, expanding manufa |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Wells Fargo Initiates Coverage On Eaton Corp with Overweight |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 9.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] VNT vs. P: Which Stock Should Value Investors Buy Now?
- 🟢 [Earnings|w1.36] Everpure Stock Just Hit a New All-Time High. What Comes Next.
- 🟢 [Earnings|w1.36] US Stock Market Today: S&P 500 Futures Slip As Hot Growth Keeps Rate F

**Bearish Factors:**
- 🔴 [Earnings|w1.95] Everpure (P): Every Analyst Raised Targets After Analyst Day, Free Cas

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | VNT vs. P: Which Stock Should Value Investors Buy Now? |
| 2026-09-27 | Earnings | 🔴 -1 | 1.95 | Yahoo | Everpure (P): Every Analyst Raised Targets After Analyst Day |
| 2026-09-25 | Analyst Action | ⚪  0 | 1.26 | Benzinga | $100 Invested In Everpure 5 Years Ago Would Be Worth This Mu |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | Everpure Stock Just Hit a New All-Time High. What Comes Next |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Barclays Maintains Equal-Weight on Everpure, Raises Price Ta |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | US Stock Market Today: S&P 500 Futures Slip As Hot Growth Ke |
| 2026-09-25 | Earnings | ⚪  0 | 1.36 | Yahoo | What Are Everpure Stock Bulls Not Worried About? |
| 2026-09-24 | Industry | ⚪  0 | 0.9 | Benzinga | Meta, Everpure, Akamai Technologies, Apimeds Pharmaceuticals |

---

## 🟢 Mid Long (20)

### NYSE:BE

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 8.21 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 20 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Zacks Investment Ideas feature highlights: Nvidia, Bloom Energy and Am
- 🟢 [Analyst Action|w2.55] BE Stock Slumps Most In Over A Month: This Analyst Says New Fremont Fa
- 🟢 [Industry|w2.13] Bloom Energy: The Power Bottleneck Was Just The Beginning

**Bearish Factors:**
- 🔴 [Earnings|w1.36] Is Bloom Energy Stock's Drop A Chance To Buy?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Zacks Investment Ideas feature highlights: Nvidia, Bloom Ene |
| 2026-09-29 | Industry | 🟢 +1 | 2.13 | SeekingAlp | Bloom Energy: The Power Bottleneck Was Just The Beginning |
| 2026-09-29 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | BE Stock Slumps Most In Over A Month: This Analyst Says New  |
| 2026-09-29 | Industry | 🟢 +1 | 2.13 | Yahoo | Why Bloom Energy (BE) Shares Are Sliding Today |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Bloom Energy (BE) Sees a More Significant Dip Than Broader M |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Can the AI Power Boom Justify Bloom Energy’s (BE) $85 Billio |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | How to Play Bloom Energy Stock Amid Oracle Data Center Force |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Bloom Energy (BE) Is Up 8.7% After Oracle Reaffirms 2.4 GW A |

---

### NASDAQ:AAPL

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 8.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Client Computing Global Market Report 2026: Capitalize on AI, Hybrid a
- 🟢 [Buyback|w2.16] Nvidia Is Following Apple’s Playbook. A Record Buyback Proves It.
- 🟢 [Analyst Action|w2.16] Opinion: Apple’s “Gangster Move” to Boost iPhone Sales Has a Hidden Be

**Bearish Factors:**
- 🔴 [Industry|w2.13] Jim Cramer Got His Wish With This Mega AI Stock’s Latest Announcement

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Client Computing Global Market Report 2026: Capitalize on AI |
| 2026-09-29 | Earnings | ⚪  0 | 2.76 | Yahoo | What Does Apple (AAPL) Appeal Mean After A $5.7 Billion Pate |
| 2026-09-29 | Industry | 🔴 -1 | 2.13 | Yahoo | Jim Cramer Got His Wish With This Mega AI Stock’s Latest Ann |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | A US Jury Orders Apple (AAPL) to Pay a Record $5.7 Billion i |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Apple Stock Edges Higher Although Two Legal Bills Stack Up |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | What You Actually Pay To Join The AAPL Run |
| 2026-09-28 | Buyback | 🟢 +1 | 2.16 | Yahoo | Nvidia Is Following Apple’s Playbook. A Record Buyback Prove |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Nvidia, Apple Partner TSMC Reveals These Clues On How To Rea |

---

### NASDAQ:AEHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Aehr Test Systems (AEHR) Earnings Expected to Grow: Should You Buy?
- 🟢 [Earnings|w1.17] Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 Report Is
- 🟢 [Industry|w0.9] Aehr Test Systems: Strong Growth Potential, But The Valuation Demands 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Aehr Test Systems (AEHR) Earnings Expected to Grow: Should Y |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Aehr Test Systems to Participate in 18th Annual CEO Investor |
| 2026-09-24 | Industry | 🟢 +1 | 0.9 | SeekingAlp | Aehr Test Systems: Strong Growth Potential, But The Valuatio |
| 2026-09-24 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Aehr Test Systems: Momentum Will Push It Up Once Again If Q1 |
| 2026-09-23 | Industry | 🟢 +1 | 0.75 | SeekingAlp | Aehr Test Systems: A Real Tension Between AI-Related Growth  |

---

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 24 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Seagate: The Areal Density Breakthrough
- 🟢 [Industry|w1.8] Seagate Technology Holdings (STX) Rides AI Storage Demand, Is It Still
- 🟢 [Industry|w0.75] 4 Stocks to Buy From a Prospering Technology Solutions Industry

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | The Zacks Analyst Blog Highlights Seagate, Western Digital,  |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Seagate: The Areal Density Breakthrough |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Seagate Technology Holdings (STX) Rides AI Storage Demand, I |
| 2026-09-23 | Industry | 🟢 +1 | 0.75 | Yahoo | 4 Stocks to Buy From a Prospering Technology Solutions Indus |
| 2026-09-23 | Buyback | ⚪  0 | 0.9 | Yahoo | Seagate Retired Its 2028 Notes. Buybacks Are Next |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | Why Seagate (STX) Is Up 19.2% After Agentic AI Hype Lifts St |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.66 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 21 |

**Bullish Factors:**
- 🟢 [M&A|w1.47] LAZR: The Right Supply Chain, The Wrong Top Two
- 🟢 [Earnings|w1.17] Applied Optoelectronics Rides on AI Boom: Can It Beat LITE and FN?
- 🟢 [Industry|w1.05] LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Thinks There

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | ⚪  0 | 1.36 | SeekingAlp | Lumentum's $40 EPS Bet Changes Everything |
| 2026-09-25 | Industry | 🟢 +1 | 1.05 | Yahoo | LITE Stock Has Run 450% In 12 Months: Ritholtz Wealth CEO Th |
| 2026-09-25 | M&A | 🟢 +1 | 1.47 | SeekingAlp | LAZR: The Right Supply Chain, The Wrong Top Two |
| 2026-09-24 | Earnings | 🟢 +1 | 1.17 | Yahoo | Applied Optoelectronics Rides on AI Boom: Can It Beat LITE a |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | Lumentum Shares Are Up After an AI Optical Tech Partnership  |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Benzinga | Lumentum Shares Up Over 2% After Key Trading Signal |
| 2026-09-23 | Earnings | 🟢 +1 | 0.97 | Yahoo | FN Rides on Surging Data Center Demand: Can It Outpace AAOI  |
| 2026-09-23 | Analyst Action | ⚪  0 | 0.9 | Benzinga | Here’s How Much You Would Have Made Owning Lumentum Holdings |

---

### NYSE:ANET

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 16 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Arista Networks (ANET) Draws Fresh AI Attention, Is The Stock Still Ch
- 🟢 [Earnings|w1.36] Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnings Multipl
- 🟢 [Industry|w0.9] Is Arista Networks Stock Too Dependent On Demand Holding Up?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Is AI Turning Networking Into Arista Network’s (ANET) Next B |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Arista’s CFO Says the AI Cycle Is 2.5 to 3 Years In. Here’s  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | Arista Networks (ANET) Draws Fresh AI Attention, Is The Stoc |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Are Computer and Technology Stocks Lagging  Arista Networks  |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Arista Networks, Inc. (ANET) Is a Trending Stock: Facts to K |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | Arista vs. Cisco: Is Faster AI Growth Worth Twice the Earnin |
| 2026-09-24 | Industry | 🟢 +1 | 0.9 | Yahoo | Is Arista Networks Stock Too Dependent On Demand Holding Up? |
| 2026-09-24 | Industry | 🟢 +1 | 0.9 | Yahoo | 5 Stocks With High ROE to Consider Amid Market Volatility |

---

### NASDAQ:SMCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 22 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Rating Upgrade: Super Micro Computer Presents A Rare Value Opportunity
- 🟢 [Earnings|w1.63] Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a Reasonable 
- 🟢 [Earnings|w1.17] Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership With Moment

**Bearish Factors:**
- 🔴 [Earnings|w1.36] HPE vs. Super Micro: Which AI Server Stock Offers the Better Risk-Rewa

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Super Micro Computer (SMCI) Falls More Steeply Than Broader  |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | SeekingAlp | Rating Upgrade: Super Micro Computer Presents A Rare Value O |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Wall Street Sees Super Micro’s Revenue Jumping 72% This Fisc |
| 2026-09-26 | Earnings | 🟢 +1 | 1.63 | ChartMill | Super Micro Computer (NASDAQ:SMCI): Affordable Growth at a R |
| 2026-09-25 | Industry | 🟢 +1 | 1.05 | Benzinga | What's Going On With Super Micro Computer Stock Friday? |
| 2026-09-25 | Earnings | 🔴 -1 | 1.36 | Yahoo | HPE vs. Super Micro: Which AI Server Stock Offers the Better |
| 2026-09-24 | Industry | ⚪  0 | 0.9 | Benzinga | What's Going On With Super Micro Computer Stock Thursday? |
| 2026-09-24 | Earnings | 🟢 +1 | 1.17 | ChartMill | Super Micro Computer (NASDAQ:SMCI): High-Growth Leadership W |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 26 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Bull of the Day: Palantir Technologies (PLTR)
- 🟢 [Industry|w1.8] Palantir and Tyson Foods have been highlighted as Zacks Bull and Bear 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Michael Burry Swaps MU, NBIS, NVDA, PLTR Shorts For Puts — S |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Palantir and Tyson Foods have been highlighted as Zacks Bull |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Benzinga | Palantir Stock Moves Lower: What's Happening Today? |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Bull of the Day: Palantir Technologies (PLTR) |

---

### NASDAQ:HOOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 8.93 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 18 / 12 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] HOOD Stock Dips Overnight: BTIG Says Robinhood's Month-To-Date Septemb
- 🟢 [Earnings|w1.95] You Think HOOD Is Priced for Mania? Look at Its Multiple Again
- 🟢 [Earnings|w1.36] Jim Cramer Believes Robinhood (HOOD) Is Doing Incredibly Well

**Bearish Factors:**
- 🔴 [Industry|w1.25] Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 Invested at

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | HOOD Stock Dips Overnight: BTIG Says Robinhood's Month-To-Da |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | SeekingAlp | Robinhood: The Market Is Pricing In A Lot, But Not Really Ev |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | SoFi Falls 3% as Rising Yields Pressure Fintech; Affirm Drop |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Morgan Stanley says Robinhood quietly built something bigger |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Robinhood (HOOD) Pushes Beyond Trading. Can Wealth Managemen |
| 2026-09-27 | Earnings | 🟢 +1 | 1.95 | Yahoo | You Think HOOD Is Priced for Mania? Look at Its Multiple Aga |
| 2026-09-26 | Earnings | ⚪  0 | 1.63 | Yahoo | Standard Chartered Believes Arbitrum Is “Hugely Undervalued” |
| 2026-09-26 | Industry | 🔴 -1 | 1.25 | Yahoo | Robinhood Stock Once Fell 82% Below Its IPO Price. $10,000 I |

---

### NASDAQ:SNDK

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] PENG vs. SNDK: Which AI Data Center Infrastructure Provider Is Better?
- 🟢 [Industry|w1.8] What's Going On With Sandisk Stock Monday?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | The Zacks Analyst Blog Highlights Seagate, Western Digital,  |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | PENG vs. SNDK: Which AI Data Center Infrastructure Provider  |
| 2026-09-28 | Rumor | ⚪  0 | 1.08 | Yahoo | Retail Investors Think These 2 Stocks Could Be The Next NVID |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Benzinga | What's Going On With Sandisk Stock Monday? |
| 2026-09-27 | Industry | ⚪  0 | 1.5 | Yahoo | Will SanDisk (SNDK) Ride the Next Wave of AI-Driven NAND Dem |

---

### NYSE:SCCO

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.16 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] Southern Copper Corp (NYSE:SCCO) Dividend Quality and Income Appeal
- 🟢 [Earnings|w1.63] Southern Copper (SCCO) Stock Could Be Overvalued On Current Earnings S
- 🟢 [Industry|w0.9] FCX vs. SCCO: Which Copper Mining Giant Should You Bet on?

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Earnings | 🟢 +1 | 1.63 | ChartMill | Southern Copper Corp (NYSE:SCCO) Dividend Quality and Income |
| 2026-09-26 | Earnings | 🟢 +1 | 1.63 | Yahoo | Southern Copper (SCCO) Stock Could Be Overvalued On Current  |
| 2026-09-26 | Earnings | ⚪  0 | 1.63 | Yahoo | How Upgraded Earnings Estimates Will Impact Southern Copper’ |
| 2026-09-24 | Industry | ⚪  0 | 0.9 | Yahoo | Southern Copper Corporation (SCCO) is Attracting Investor At |
| 2026-09-24 | Industry | 🟢 +1 | 0.9 | Yahoo | FCX vs. SCCO: Which Copper Mining Giant Should You Bet on? |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 4.89 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 23 |
| Patterns | Sentiment Strengthening UP (trend) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Micron Technology (NASDAQ:MU): A Growth-at-a-Reasonable-Price Memory P
- 🟢 [Industry|w2.13] Nasdaq Futures Tread Water After Monday Rout: MU, NVTS, NVO, KOD, SMMT

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Rumor | ⚪  0 | 1.27 | Yahoo | Micron may be sitting on a 'substantial' surprise |
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | ChartMill | Micron Technology (NASDAQ:MU): A Growth-at-a-Reasonable-Pric |
| 2026-09-29 | Industry | 🟢 +1 | 2.13 | Yahoo | Nasdaq Futures Tread Water After Monday Rout: MU, NVTS, NVO, |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | The Zacks Analyst Blog Highlights Seagate, Western Digital,  |
| 2026-09-29 | Earnings | ⚪  0 | 2.76 | Yahoo | What To Expect From Micron’s (MU) Q3 Earnings |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Michael Burry Swaps MU, NBIS, NVDA, PLTR Shorts For Puts — S |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Micron (MU) Highlights Tech Earnings to Watch This Week |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 6.14 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Industry|w1.8] Arm vs. Marvell Technology: Which AI Chip Stock Is a Better Buy in 202
- 🟢 [Earnings|w1.36] ARM vs. Intel: What Revenue Growth Trends Reveal About These Artificia
- 🟢 [Earnings|w1.36] Arm Stocks Surge as Muse Makes CPUs Matter Again

**Bearish Factors:**
- 🔴 [Industry|w1.8] Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Marvell Slide
- 🔴 [Industry|w1.05] Don't Buy Arm Holdings This Expensively

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Rumor | 🟢 +1 | 1.27 | Yahoo | Arm Holdings (ARM) Could Be 34% Undervalued On Its AI Growth |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | Is Arm (ARM) Quietly Becoming the Linchpin of Nvidia’s AI Se |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Arm vs. Marvell Technology: Which AI Chip Stock Is a Better  |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Arm Stock Sinks 7.6% as Agent Security Expands Its Compute R |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Mar |
| 2026-09-26 | Industry | 🟢 +1 | 1.25 | Yahoo | 1 Agentic AI Chip Stock to Buy and 1 to Sell |
| 2026-09-26 | Industry | ⚪  0 | 1.25 | Yahoo | Arm Holdings Stock Fell 8% in a Day. Here’s What SoftBank’s  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | ARM vs. Intel: What Revenue Growth Trends Reveal About These |

---

### NASDAQ:SANM

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improving Fundame
- 🟢 [Earnings|w1.36] Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and High Growth 

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | ChartMill | Sanmina (NASDAQ:SANM) Stands Out for High Growth and Improvi |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | ChartMill | Sanmina (NASDAQ:SANM) Passes Minervini Trend Template and Hi |
| 2026-09-23 | Earnings | ⚪  0 | 0.97 | Yahoo | Electrical Systems Stocks Q2 Results: Benchmarking Sanmina ( |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 6.45 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 16 |

**Bullish Factors:**
- 🟢 [Analyst Action|w2.55] Palo Alto Networks (PANW) Stock Trades Up, Here Is Why
- 🟢 [Earnings|w2.34] Virtualization Security Market Report 2026: Capitalize on 21.3% CAGR a
- 🟢 [Analyst Action|w2.16] BTIG Maintains Buy on Palo Alto Networks, Raises Price Target to $425

**Bearish Factors:**
- 🔴 [Industry|w1.8] Analysts Raise Palo Alto Networks Stock Price Targets - What's the Bes
- 🔴 [Industry|w1.8] Palo Alto Networks (PANW) Lets Customers Pay Later. Is Credit Risk Ris

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | PANW, CRWD, ZS Lead Nasdaq-100 Gains As Nvidia's AI Agent Sa |
| 2026-09-29 | Analyst Action | 🟢 +1 | 2.55 | Yahoo | Palo Alto Networks (PANW) Stock Trades Up, Here Is Why |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Palo Alto Networks (PANW) Brings Industrial Edge Connectivit |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Analysts Raise Palo Alto Networks Stock Price Targets - What |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Virtualization Security Market Report 2026: Capitalize on 21 |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Palo Alto Networks (PANW) Lets Customers Pay Later. Is Credi |
| 2026-09-28 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | BTIG Maintains Buy on Palo Alto Networks, Raises Price Targe |
| 2026-09-27 | Industry | ⚪  0 | 1.5 | Yahoo | The AI Security Opportunity Emerging for Palo Alto Networks |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.2 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 25 |

**Bullish Factors:**
- 🟢 [Earnings|w1.95] TSMC: Set For All-Time Highs On Surging AI Chip Demand
- 🟢 [Industry|w1.25] Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Rebounds

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | The Zacks Analyst Blog Highlights Analog Devices, Semtech, T |
| 2026-09-27 | Earnings | 🟢 +1 | 1.95 | SeekingAlp | TSMC: Set For All-Time Highs On Surging AI Chip Demand |
| 2026-09-27 | Industry | ⚪  0 | 1.5 | Yahoo | Is Taiwan Semiconductor Manufacturing (NYSE:TSM) Priced For  |
| 2026-09-26 | Industry | 🟢 +1 | 1.25 | Yahoo | Bloom Energy, TSM Lead 5 Stocks Near Buy Points As AI Reboun |
| 2026-09-26 | Industry | ⚪  0 | 1.25 | SeekingAlp | TSMC: The Crown Jewel In The World Of Silicon Is Trading At  |

---

### NYSE:GRMN

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 5 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Bull of the Day: Garmin Ltd. (GRMN)

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Bull of the Day: Garmin Ltd. (GRMN) |
| 2026-09-24 | Earnings | ⚪  0 | 1.17 | Yahoo | Here is Why Garmin (GRMN) is a Good Investment at Today’s Pr |
| 2026-09-23 | Earnings | ⚪  0 | 0.97 | Yahoo | Garmin Ltd. schedules third quarter 2026 earnings call |

---

### NYSE:SN

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.8 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 2 |

**Bullish Factors:**
- 🟢 [Earnings|w1.63] SharkNinja (SN) Stock May Be 25% Undervalued After Racing Partnership
- 🟢 [Earnings|w1.17] Shark Ninja Is An Excellent Long-Term Investment

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | SharkNinja, Inc. (SN) Rises As Market Takes a Dip: Key Facts |
| 2026-09-26 | Rumor | ⚪  0 | 0.75 | Yahoo | SharkNinja (SN) Could Be 61% Overvalued As Momentum Meets A  |
| 2026-09-26 | Earnings | 🟢 +1 | 1.63 | Yahoo | SharkNinja (SN) Stock May Be 25% Undervalued After Racing Pa |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Shark Beauty Launches Limited Edition Celestial Skies Collec |
| 2026-09-24 | Earnings | 🟢 +1 | 1.17 | SeekingAlp | Shark Ninja Is An Excellent Long-Term Investment |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | MULTIMEDIA UPDATE:  Smith+Nephew launches the new EVOS™ PELV |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | Smith+Nephew launches the new EVOS™ PELVIC Plating System at |

---

### NASDAQ:NVDA

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 28 |

**Bullish Factors:**
- 🟢 [Buyback|w2.55] Nvidia's $150B buyback could fuel next stock rally

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Rumor | ⚪  0 | 1.27 | Yahoo | NVDA, AMD Reportedly Push Trump To Ease China Restrictions I |
| 2026-09-29 | Buyback | 🟢 +1 | 2.55 | Yahoo | Nvidia's $150B buyback could fuel next stock rally |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 3 |

**Bullish Factors:**
- 🟢 [Earnings|w1.36] Should You Buy WisdomTree (WT) Stock After Its Latest Crypto Move?
- 🟢 [Analyst Action|w1.26] Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises Price Targ

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | Should You Buy WisdomTree (WT) Stock After Its Latest Crypto |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Morgan Stanley Maintains Equal-Weight on WisdomTree, Raises  |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | WisdomTree Leaders Recognized on INvolve’s 2026 ‘Heroes Role |

---

## 🟡 Cautious Long (1)

### NASDAQ:META

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 13.74 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Meta Platforms (NASDAQ:META) Fits a Growth-at-a-Reasonable-Price Scree
- 🟢 [Policy|w2.55] Nvidia Writes a Record $150 Billion Check While Meta Rattles Enterpris
- 🟢 [Earnings|w2.34] Why Meta (META) Stock Is Trading Lower Today

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | 🟢 +1 | 2.13 | Yahoo | Should You Buy Meta Platforms Stock Now or Wait for a Dip? |
| 2026-09-29 | Earnings | ⚪  0 | 2.76 | Yahoo | Meta is looking beyond consumers to turn its massive AI inve |
| 2026-09-29 | Rumor | ⚪  0 | 1.27 | Yahoo | Meta Stock Is at a Crossroads. Why Today Is a Big Day. |
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | ChartMill | Meta Platforms (NASDAQ:META) Fits a Growth-at-a-Reasonable-P |
| 2026-09-29 | Policy | 🟢 +1 | 2.55 | ChartMill | Nvidia Writes a Record $150 Billion Check While Meta Rattles |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | Jefferies Says Meta Platform's Muse Is Not a Threat to Life  |
| 2026-09-29 | Buyback | ⚪  0 | 2.55 | Yahoo | Stock-Split Watch: Is Meta Platforms Next? |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | MongoDB (MDB): CEO Exit Puts Strategy Under Scrutiny Ahead o |

---

## ⚠️ Overheated (3)

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 8.11 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 11 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Policy|w2.16] GRAIL: AdCom's Vote Of Confidence Is Significant
- 🟢 [Analyst Action|w2.16] Canaccord Genuity Maintains Buy on GRAIL, Raises Price Target to $150
- 🟢 [Earnings|w1.36] MRNA On Track To Be September's No. 2 S&P 500 Stock — But These 5 Smal

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Policy | 🟢 +1 | 2.16 | SeekingAlp | GRAIL: AdCom's Vote Of Confidence Is Significant |
| 2026-09-28 | Analyst Action | 🟢 +1 | 2.16 | Benzinga | Canaccord Genuity Maintains Buy on GRAIL, Raises Price Targe |
| 2026-09-25 | Analyst Action | 🟢 +1 | 1.26 | Benzinga | Mizuho Maintains Neutral on GRAIL, Raises Price Target to $1 |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | MRNA On Track To Be September's No. 2 S&P 500 Stock — But Th |
| 2026-09-24 | Earnings | 🟢 +1 | 1.17 | Yahoo | GRAIL (GRAL) Wins FDA Panel Backing, Is It Now Overvalued? |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 8.88 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 5 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Zacks Investment Ideas feature highlights: Nvidia, Bloom Energy and Am
- 🟢 [Earnings|w2.34] APH's AI Connectivity Growth Accelerates: Can It Outpace TEL & MRVL?
- 🟢 [Analyst Action|w1.08] Bernstein Initiates Coverage of Amphenol at Outperform

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Zacks Investment Ideas feature highlights: Nvidia, Bloom Ene |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | Weight of Evidence Points Higher for US Stocks, Led by AI |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | APH's AI Connectivity Growth Accelerates: Can It Outpace TEL |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | If You Invested $1000 in Amphenol a Decade Ago, This is How  |
| 2026-09-25 | Earnings | ⚪  0 | 1.36 | Yahoo | Amphenol Setting Earnings Records, Shares Near All-Time High |
| 2026-09-25 | Industry | 🟢 +1 | 1.05 | Yahoo | Buy 3 AI-Led Stocks Amid Solid Estimate Revisions and Upside |
| 2026-09-24 | Industry | ⚪  0 | 0.9 | Yahoo | Soaring Defense Spending Means Great News for These 2 Stocks |
| 2026-09-24 | Analyst Action | 🟢 +1 | 1.08 | Fintel | Bernstein Initiates Coverage of Amphenol at Outperform |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 8.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 10 / 15 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] Semiconductor Front End Equipment Market Size, Share, and Forecast, 20
- 🟢 [Industry|w1.8] Chip Equipment Stocks Rally as Quality Growers Lead the Snapback
- 🟢 [Earnings|w1.36] ASML vs. Applied Materials: Which AI Chip-Equipment Stock Is the Bette

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | ASML (ASML) Increases Despite Market Slip: Here's What You N |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | ChartMill | Chip Equipment Stocks Rally as Quality Growers Lead the Snap |
| 2026-09-28 | Buyback | ⚪  0 | 2.16 | Yahoo | ASML reports transactions under its current share buyback pr |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Semiconductor Front End Equipment Market Size, Share, and Fo |
| 2026-09-26 | Earnings | ⚪  0 | 1.63 | Yahoo | ASML (ENXTAM:ASML) Stock Could Be Undervalued Following Fres |
| 2026-09-26 | Industry | 🟢 +1 | 1.25 | Yahoo | ASML vs. Qualcomm: Which AI Semiconductor Stock Is a Better  |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | ASML vs. Applied Materials: Which AI Chip-Equipment Stock Is |
| 2026-09-24 | Industry | 🟢 +1 | 0.9 | Yahoo | Is Taiwan Semiconductor (TSM) Stock a Better Bet than ASML H |

---

## ⚠️ Risk Pattern (3)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 8.2 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] IT Asset Disposition Global Market Report 2026: Capitalize on 11% CAGR
- 🟢 [Earnings|w2.34] Load Balancer Global Market Report 2026: Capitalize on 18% CAGR as Clo
- 🟢 [Industry|w1.8] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | IT Asset Disposition Global Market Report 2026: Capitalize o |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Load Balancer Global Market Report 2026: Capitalize on 18% C |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last We |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |

---

### NASDAQ:META

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 13.74 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Meta Platforms (NASDAQ:META) Fits a Growth-at-a-Reasonable-Price Scree
- 🟢 [Policy|w2.55] Nvidia Writes a Record $150 Billion Check While Meta Rattles Enterpris
- 🟢 [Earnings|w2.34] Why Meta (META) Stock Is Trading Lower Today

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Industry | 🟢 +1 | 2.13 | Yahoo | Should You Buy Meta Platforms Stock Now or Wait for a Dip? |
| 2026-09-29 | Earnings | ⚪  0 | 2.76 | Yahoo | Meta is looking beyond consumers to turn its massive AI inve |
| 2026-09-29 | Rumor | ⚪  0 | 1.27 | Yahoo | Meta Stock Is at a Crossroads. Why Today Is a Big Day. |
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | ChartMill | Meta Platforms (NASDAQ:META) Fits a Growth-at-a-Reasonable-P |
| 2026-09-29 | Policy | 🟢 +1 | 2.55 | ChartMill | Nvidia Writes a Record $150 Billion Check While Meta Rattles |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | Jefferies Says Meta Platform's Muse Is Not a Threat to Life  |
| 2026-09-29 | Buyback | ⚪  0 | 2.55 | Yahoo | Stock-Split Watch: Is Meta Platforms Next? |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | MongoDB (MDB): CEO Exit Puts Strategy Under Scrutiny Ahead o |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 8.02 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Client Computing Global Market Report 2026: Capitalize on AI, Hybrid a
- 🟢 [Earnings|w2.34] ORCL vs. DELL: Which AI Infrastructure Stock Has Better Upside Now?
- 🟢 [Earnings|w2.34] Computers Global Market Report 2026: Capitalize on the $161.29 Billion

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Dell Stock Looks Less Expensive Once You Count The AI Backlog
- 🔴 [Black Swan|w2.7] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Black Swan|w2.7] High Availability Cluster Solution Global Market Report 2026: Capitali

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Client Computing Global Market Report 2026: Capitalize on AI |
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Dell Stock Looks Less Expensive Once You Count The AI Backlo |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Stock Drops Nearly 2.9% as OpenShell Reaches the Entire |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Super Micro and Dell Drop 5% as AI Server Rally Reverses; He |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Is Dell Technologies Stock Outperforming the Dow? |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Investment Accelerates: Top Stocks to Buy Right Now |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | ORCL vs. DELL: Which AI Infrastructure Stock Has Better Upsi |
| 2026-09-28 | Rumor | 🟢 +1 | 1.08 | Yahoo | Dell's AI Server Backlog Has Ballooned to $95 Billion. Here' |

---

## 🔴 Avoid / Short (5)

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 8.2 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 10 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.34] IT Asset Disposition Global Market Report 2026: Capitalize on 11% CAGR
- 🟢 [Earnings|w2.34] Load Balancer Global Market Report 2026: Capitalize on 18% CAGR as Clo
- 🟢 [Industry|w1.8] Cluster Computing Global Market Report 2026: Capitalize on the surge t

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Hyper Converged Infrastructure Market Report 2026: Capitaliz |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | IT Asset Disposition Global Market Report 2026: Capitalize o |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Load Balancer Global Market Report 2026: Capitalize on 18% C |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Cluster Computing Global Market Report 2026: Capitalize on t |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Why Did AMD, HPE, MRNA Stocks Surge To 52-Week Highs Last We |
| 2026-09-25 | Earnings | 🟢 +1 | 1.36 | Yahoo | NVIDIA’s Next AI Chip Ramp Could Open the Door to Another Ma |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Should HPE’s Expanded Networking and Quantum Partnerships Re |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | Hewlett Packard Enterprise Company (HPE) Soars to 52-Week Hi |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 8.02 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | WARNING: Sentiment Divergence (black swan masked by noise) |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] Client Computing Global Market Report 2026: Capitalize on AI, Hybrid a
- 🟢 [Earnings|w2.34] ORCL vs. DELL: Which AI Infrastructure Stock Has Better Upside Now?
- 🟢 [Earnings|w2.34] Computers Global Market Report 2026: Capitalize on the $161.29 Billion

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] Dell Stock Looks Less Expensive Once You Count The AI Backlog
- 🔴 [Black Swan|w2.7] Hyper Converged Infrastructure Market Report 2026: Capitalize on the $
- 🔴 [Black Swan|w2.7] High Availability Cluster Solution Global Market Report 2026: Capitali

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | Client Computing Global Market Report 2026: Capitalize on AI |
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | Dell Stock Looks Less Expensive Once You Count The AI Backlo |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Dell Stock Drops Nearly 2.9% as OpenShell Reaches the Entire |
| 2026-09-28 | Industry | 🔴 -1 | 1.8 | Yahoo | Super Micro and Dell Drop 5% as AI Server Rally Reverses; He |
| 2026-09-28 | Earnings | ⚪  0 | 2.34 | Yahoo | Is Dell Technologies Stock Outperforming the Dow? |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | AI Investment Accelerates: Top Stocks to Buy Right Now |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | ORCL vs. DELL: Which AI Infrastructure Stock Has Better Upsi |
| 2026-09-28 | Rumor | 🟢 +1 | 1.08 | Yahoo | Dell's AI Server Backlog Has Ballooned to $95 Billion. Here' |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **47** / 100 |
| Raw Weighted Score | -2.58 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 21 / 9 |

**Bullish Factors:**
- 🟢 [Earnings|w2.76] CrowdStrike vs. Figma: Comparing Revenue Trends Between Two High-Growt
- 🟢 [Earnings|w2.34] Virtualization Security Market Report 2026: Capitalize on 21.3% CAGR a
- 🟢 [Analyst Action|w2.16] Is CrowdStrike Stock Outperforming the S&P 500?

**Bearish Factors:**
- 🔴 [Black Swan|w2.7] CrowdStrike vs. Okta: Which Cybersecurity Stock Is a Better Buy in 202
- 🔴 [Black Swan|w2.7] CrowdStrike (CRWD) is Clearing Hurdles. Can its Financial Momentum Do 
- 🔴 [Black Swan|w2.7] IPQS Expands Integration Ecosystem for Fraud Prevention and Digital Ri

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🟢 +1 | 2.76 | Yahoo | CrowdStrike vs. Figma: Comparing Revenue Trends Between Two  |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | PANW, CRWD, ZS Lead Nasdaq-100 Gains As Nvidia's AI Agent Sa |
| 2026-09-29 | Industry | ⚪  0 | 2.13 | Yahoo | Did New Falcon Partner Integrations in Cloud and AI Security |
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CrowdStrike vs. Okta: Which Cybersecurity Stock Is a Better  |
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | Yahoo | CrowdStrike (CRWD) is Clearing Hurdles. Can its Financial Mo |
| 2026-09-28 | Industry | ⚪  0 | 1.8 | Yahoo | What Could Derail CrowdStrike Stock? |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | CSCO's Security Growth Accelerates: Can It Outpace DDOG & CR |
| 2026-09-28 | Industry | 🟢 +1 | 1.8 | Yahoo | Will Rising AI Vulnerabilities Boost CrowdStrike's Exposure  |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **42** / 100 |
| Raw Weighted Score | -1.88 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 4 / 2 |

**Bearish Factors:**
- 🔴 [Black Swan|w1.88] ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Quality

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-26 | Black Swan | 🔴 -1 | 1.88 | ChartMill | ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Q |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | e.l.f. Beauty (ELF) Is a Trending Stock: Facts to Know Befor |
| 2026-09-25 | Industry | ⚪  0 | 1.05 | Yahoo | e.l.f. Cosmetics Drops Second Original Album, "Mirror Mix,"  |
| 2026-09-23 | Industry | ⚪  0 | 0.75 | Yahoo | Why e.l.f. Beauty (ELF) Dipped More Than Broader Market Toda |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **36** / 100 |
| Raw Weighted Score | -7.25 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 11 / 19 |

**Bullish Factors:**
- 🟢 [M&A|w2.98] What Could Eli Lilly (LLY) New Cancer Win And Deal Shift Mean?
- 🟢 [Policy|w2.55] Once-Weekly Onswik Approval And Alopecia Win Could Be A Game Changer F
- 🟢 [Earnings|w2.34] Novo Nordisk Just Beat Lilly in a Trial. Is the Comeback Finally Takin

**Bearish Factors:**
- 🔴 [Earnings|w2.76] Lilly's Zepbound (tirzepatide 10 mg and 15 mg) was associated with mor
- 🔴 [Earnings|w2.76] LLY Vs NVO: Foundayo Beats Novo’s Oral Semaglutide On Weight Loss, Blo
- 🔴 [Earnings|w2.76] Lilly's Foundayo (orforglipron) 17.2 mg showed greater weight loss and

**Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-29 | Earnings | 🔴 -1 | 2.76 | Yahoo | Lilly's Zepbound (tirzepatide 10 mg and 15 mg) was associate |
| 2026-09-29 | Earnings | 🔴 -1 | 2.76 | Yahoo | LLY Vs NVO: Foundayo Beats Novo’s Oral Semaglutide On Weight |
| 2026-09-29 | M&A | 🟢 +1 | 2.98 | Yahoo | What Could Eli Lilly (LLY) New Cancer Win And Deal Shift Mea |
| 2026-09-29 | Earnings | 🔴 -1 | 2.76 | Yahoo | Lilly's Foundayo (orforglipron) 17.2 mg showed greater weigh |
| 2026-09-29 | Policy | 🟢 +1 | 2.55 | Yahoo | Once-Weekly Onswik Approval And Alopecia Win Could Be A Game |
| 2026-09-28 | Earnings | 🟢 +1 | 2.34 | Yahoo | Novo Nordisk Just Beat Lilly in a Trial. Is the Comeback Fin |
| 2026-09-28 | Earnings | 🔴 -1 | 2.34 | Yahoo | LLY's Olumiant Gets FDA Nod for Expanded Use in Pediatric Ha |
| 2026-09-28 | Black Swan | 🔴 -1 | 2.7 | ChartMill | Eli Lilly (NYSE:LLY) Offers a Breakout Setup Backed by High  |

---

## ⚪ Watch / Neutral (21)

### NYSE:DT
- Score: 58/100 | raw: 1.98 | News: 3 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AMD
- Score: 56/100 | raw: 5.61 | News: 20 kept / 10 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Sentiment Strengthening UP (trend)

### NASDAQ:VICR
- Score: 56/100 | raw: 1.36 | News: 3 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIS
- Score: 55/100 | raw: 1.2 | News: 7 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 55/100 | raw: 1.2 | News: 5 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TEM
- Score: 54/100 | raw: 0.9 | News: 3 kept / 6 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:QCOM
- Score: 54/100 | raw: 0.96 | News: 6 kept / 24 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ENTG
- Score: 54/100 | raw: 0.9 | News: 2 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 54/100 | raw: 0.9 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 53/100 | raw: 0.63 | News: 3 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MSFT
- Score: 53/100 | raw: 0.63 | News: 5 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:SPNT
- Score: 50/100 | raw: 0 | News: 0 kept / 3 dropped | No relevant news in window

### OTC:SMTGY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | Finnhub ok: no news in window

### NYSE:DOCN
- Score: 50/100 | raw: 0 | News: 1 kept / 5 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LTC
- Score: 46/100 | raw: -0.97 | News: 2 kept / 1 dropped | No clear directional bias — stay flat

### NASDAQ:MRVL
- Score: 43/100 | raw: -2.34 | News: 7 kept / 23 dropped | No clear directional bias — stay flat

### NYSE:VEEV
- Score: 43/100 | raw: -1.8 | News: 10 kept / 10 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-09-29T12:30:49.201Z | Source: Finnhub company-news (same endpoint as src/core/usNews.js) | Classifier: local dictionaries (no LLM)*