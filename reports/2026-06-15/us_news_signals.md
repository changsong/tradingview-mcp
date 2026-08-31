# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-15  |  **News Window:** 2026-06-08 ~ 2026-06-15
**Stock Pool:** us_selected.txt (60)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMAT** | **91** | 9.86 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 7/0 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:ASML** | **86** | 9.21 | 🟢 Long (Strong) | Momentum / Hold | High | 12/0 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:AMD** | **85** | 14.28 | 🟢 Long (Strong) | Momentum / Hold | High | 17/0 | Sentiment Strengthening UP (trend) |
| 4 | **NASDAQ:FLEX** | **81** | 7.84 | 🟢 Long (Strong) | Momentum / Hold | High | 12/0 | - |
| 5 | **NYSE:HPE** | **76** | 6.17 | 🟢 Long (Strong) | Momentum / Hold | High | 7/0 | - |
| 6 | **NASDAQ:INTC** | **76** | 6.28 | 🟢 Long (Strong) | Momentum / Hold | High | 9/0 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MU** | **73** | 5.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 8 | **NASDAQ:ARM** | **73** | 5.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/0 | Sentiment Strengthening UP (trend) |
| 9 | **NYSE:C** | **71** | 4.98 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 10 | **NYSE:DOV** | **69** | 4.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 11 | **NYSE:DELL** | **66** | 3.91 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 12 | **NYSE:LLY** | **64** | 3.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 13 | **NASDAQ:WDC** | **61** | 2.6 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 14 | **NASDAQ:APLD** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 15 | **NYSE:APH** | **59** | 2.14 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NYSE:SN** | **59** | 2.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/0 | - |
| 17 | **NASDAQ:PANW** | **58** | 1.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 18 | **NYSE:TSM** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 19 | **NASDAQ:LRCX** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 20 | **NASDAQ:INCY** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 21 | **NYSE:MS** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 22 | **NYSE:DKS** | **54** | 0.89 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 23 | **NYSE:JBL** | **54** | 0.91 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NYSE:JCI** | **53** | 0.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NYSE:CARR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 26 | **NASDAQ:MNST** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NASDAQ:NBIX** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NASDAQ:ALAB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NYSE:NPB** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NYSE:JHG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 31 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NASDAQ:CRDO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 35 | **NASDAQ:MRVL** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:TTMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 38 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **NASDAQ:PLXS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:DOCN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:AIR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:PFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:ENVA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NASDAQ:KRYS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **NYSE:TRNO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:NBIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:BAP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 53 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 54 | **NASDAQ:NBN** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 55 | **NASDAQ:SNEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 56 | **NASDAQ:BGC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 57 | **NYSE:RIO** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 58 | **NYSE:AROC** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 59 | **NYSE:PACS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 60 | **NASDAQ:KLAC** | **48** | -0.41 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |

---

## 🟢 Strong Long (5)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 9.21 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] ASML reports transactions under its current share buyback program
- 🟢 [M&A|w2.94] ASML’s Mistral AI Stake Adds New Angle To Hotly Valued Shares
- 🟢 [Industry|w0.7] The Competitive Threat That Never Was: ASML’s Widening Moat Boosts Sto

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] ASML: The Rally May Be Overdone
- 🔴 [Industry|w0.5] Forget ASML: As Post-June 5 Volatility Shakes High-Beta Tech, This Div

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Buyback | 🟢 +1 | 3.57 | Finnhub | ASML reports transactions under its current share buyback pr |
| 2026-06-13 | M&A | 🟢 +1 | 2.94 | Finnhub | ASML’s Mistral AI Stake Adds New Angle To Hotly Valued Share |
| 2026-06-12 | Industry | 🔴 -1 | 0.5 | Finnhub | ASML: The Rally May Be Overdone |
| 2026-06-12 | Industry | 🔴 -1 | 0.5 | Finnhub | Forget ASML: As Post-June 5 Volatility Shakes High-Beta Tech |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Here's How Much You Would Have Made Owning ASML Holding Stoc |
| 2026-06-12 | Industry | 🟢 +1 | 0.7 | Finnhub | The Competitive Threat That Never Was: ASML’s Widening Moat  |
| 2026-06-12 | Industry | ⚪  0 | 1.75 | Finnhub | ASML Restructuring Plan Balances Job Cuts With Efficiency An |
| 2026-06-11 | Rumor | 🟢 +1 | 0.5 | Finnhub | Elon Musk addresses ASML employees on Terafab chip plant |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 14.28 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 17 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Is AMD’s £2 Billion UK AI Bet Altering The Investment Case For Advance
- 🟢 [Analyst Action|w3.57] Citi Calls AMD a Rising Force in the GPU Market, Upgrades Shares to Bu
- 🟢 [M&A|w3.53] AMD Meta AI Chip Pact Puts Data Center Growth And Valuation In Focus

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.5] AMD: Party's Over -- This Chart Killed AI (Rating Downgrade)
- 🔴 [Analyst Action|w0.5] AMD Is Soaring, But Here's Why It's Time To Say Goodbye
- 🔴 [Analyst Action|w0.5] AMD: Inventory Doesn't Lie And Says Downgrade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Is AMD the Next $1 Trillion Chip Stock, or Just the Next AI  |
| 2026-06-15 | M&A | 🟢 +1 | 4.16 | Finnhub | Is AMD’s £2 Billion UK AI Bet Altering The Investment Case F |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | EigenQ announces collaboration with TD SYNNEX to Advance Pos |
| 2026-06-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Citi Calls AMD a Rising Force in the GPU Market, Upgrades Sh |
| 2026-06-14 | M&A | 🟢 +1 | 3.53 | Finnhub | AMD Meta AI Chip Pact Puts Data Center Growth And Valuation  |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Citi resets AMD stock price target on key move |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Finnhub | Is Advanced Micro Devices, Inc. (AMD) A Good Stock To Buy No |
| 2026-06-13 | Industry | ⚪  0 | 0.5 | Seeking Al | Notable analyst calls this week: Pfizer, AMD and Intel among |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.84 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 12 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Flex Spin Offs AI Data Center Power Unit As Growth Story Shifts
- 🟢 [Buyback|w1.51] Dear Flex Stock Fans, Mark Your Calendars for June 22
- 🟢 [Analyst Action|w1.26] Barclays Lifts PT on Flex Ltd. (FLEX), Cites AI and Business Segments

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Why Flex (FLEX) Is Down 13.9% After S&P 500 Inclusion And New AI Power

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Flex Ltd (NASDAQ:FLEX) Screens as an Affordable Growth Oppor |
| 2026-06-13 | M&A | 🟢 +1 | 2.94 | Finnhub | Flex Spin Offs AI Data Center Power Unit As Growth Story Shi |
| 2026-06-11 | Industry | ⚪  0 | 0.59 | Finnhub | Flex Aggressively Scaling Investments: Is Fiscal 2027 a Turn |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Finnhub | Zacks Investment Ideas feature highlights: Microchip Technol |
| 2026-06-11 | Industry | 🔴 -1 | 1.47 | Finnhub | Why Flex (FLEX) Is Down 13.9% After S&P 500 Inclusion And Ne |
| 2026-06-10 | Buyback | 🟢 +1 | 1.51 | Finnhub | Dear Flex Stock Fans, Mark Your Calendars for June 22 |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Finnhub | Flex To Enter S&P 500 Positioned As A Major AI Infrastructur |
| 2026-06-10 | Industry | 🟢 +1 | 0.5 | Seeking Al | Flex To Enter S&amp;P 500 Positioned As A Major AI Infrastru |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.17 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] HPE (HPE): Networking Growth Gives the AI Infrastructure Bull Case Mor
- 🟢 [Analyst Action|w2.52] Is Hewlett Packard Enterprise Company (HPE) One of the Best Hot Stocks
- 🟢 [Industry|w0.84] HPE Private Cloud AI Win With Sky Highlights On Premises AI Strategy

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Dell, HPE server supply upended by memory crunch

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | HPE (HPE): Networking Growth Gives the AI Infrastructure Bul |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Is Hewlett Packard Enterprise Company (HPE) One of the Best  |
| 2026-06-13 | Industry | 🟢 +1 | 0.84 | Finnhub | HPE Private Cloud AI Win With Sky Highlights On Premises AI  |
| 2026-06-11 | Industry | 🔴 -1 | 1.47 | Finnhub | Dell, HPE server supply upended by memory crunch |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Hewlett Packard Enterprise (HPE) Is Up 14.31% in One Week: W |
| 2026-06-11 | Industry | ⚪  0 | 0.5 | Finnhub | HPE or AMD: Which Is the Better Value Stock Right Now? |
| 2026-06-11 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Wall Street Analysts Believe Hewlett Packard Enterprise (HPE |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.28 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Why NVDA, MU, INTC, Other Chip Stocks Are Rising In Overnight Trading
- 🟢 [Analyst Action|w1.21] Jim Cramer Says Intel (INTC) Is An Alternative To TSMC
- 🟢 [Analyst Action|w0.72] Notable analyst calls this week: Pfizer, AMD and Intel among top picks

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.72] Intel: Optimism Is Getting Expensive

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | Here's How Much a $1000 Investment in Intel Made 10 Years Ag |
| 2026-06-15 | Industry | ⚪  0 | 0.6 | Finnhub | This Artificial Intelligence (AI) Stock Hit $1 Trillion in R |
| 2026-06-15 | Policy | 🟢 +1 | 3.57 | Finnhub | Why NVDA, MU, INTC, Other Chip Stocks Are Rising In Overnigh |
| 2026-06-14 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Jim Cramer Says Intel (INTC) Is An Alternative To TSMC |
| 2026-06-13 | Analyst Action | 🟢 +1 | 0.72 | Seeking Al | Notable analyst calls this week: Pfizer, AMD and Intel among |
| 2026-06-13 | Analyst Action | 🔴 -1 | 0.72 | Seeking Al | Intel: Optimism Is Getting Expensive |
| 2026-06-11 | Analyst Action | 🟢 +1 | 0.5 | Seeking Al | Intel's Make-Or-Break Moment Is Closer Than You Think |
| 2026-06-09 | Industry | 🟢 +1 | 0.5 | Seeking Al | Intel's AI Narrative Just Changed |

---

## 🟢 Mid Long (8)

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Why NVDA, MU, INTC, Other Chip Stocks Are Rising In Overnight Trading
- 🟢 [Earnings|w1.55] MU Stock Leads Memory Chip Rally Amid Iran Relief – DRAM Surges 6% As 
- 🟢 [Industry|w0.5] Big movers after hours on Thursday: MSCI, MU, AMD

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Earnings | 🟢 +1 | 1.55 | Finnhub | MU Stock Leads Memory Chip Rally Amid Iran Relief – DRAM Sur |
| 2026-06-15 | Policy | 🟢 +1 | 3.57 | Finnhub | Why NVDA, MU, INTC, Other Chip Stocks Are Rising In Overnigh |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Seeking Al | Big movers after hours on Thursday: MSCI, MU, AMD |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **73** / 100 |
| Raw Weighted Score | 5.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs 11%
- 🟢 [Analyst Action|w1.76] Why Arm Holdings Stock Rallied on Thursday
- 🟢 [Policy|w1.26] AMD, Micron, Arm lead chips higher as Trump signals Iran breakthrough

**📉 Bearish Factors:**
- 🔴 [Policy|w2.1] FTC Probe Puts Arm Licensing Model And AGI CPU Plans In Focus

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Industry | 🟢 +1 | 0.5 | Seeking Al | Arm Holdings: The AI CPU Compounder Is Becoming Indispensabl |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Arm Holdings (ARM) Gets BofA Backing, 37% PT Upgrade, Climbs |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Intel, AMD, Arm, and Other Artificial Intelligence (AI)  |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm Rockets 11%, Qualcomm Rises 5%: Who’s Winning the Chip-A |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Is Arm Holdings plc (ARM) A Good Stock To Buy Now? |
| 2026-06-12 | Industry | ⚪  0 | 0.5 | Finnhub | Buy, Hold, or Sell: Arm Holdings Shed 25% to Clear the Air a |
| 2026-06-12 | Policy | 🔴 -1 | 2.1 | Finnhub | FTC Probe Puts Arm Licensing Model And AGI CPU Plans In Focu |
| 2026-06-11 | Industry | 🟢 +1 | 0.5 | Finnhub | Arm (ARM), NVIDIA (NVDA) Executive Highlight Shift Toward Ag |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.98 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] Citigroup (C) Is Up 5.6% After Launching Blockchain Platform For Token
- 🟢 [Analyst Action|w1.43] Citigroup (C) Stock Valuation After CFO Growth Outlook And Blockchain 
- 🟢 [Industry|w0.6] Why Did ROKU, SNDK, C Stocks Hit 52-Week Highs Last Week?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Citigroup (C) Stock Valuation After CFO Growth Outlook And B |
| 2026-06-15 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did ROKU, SNDK, C Stocks Hit 52-Week Highs Last Week? |
| 2026-06-12 | M&A | 🟢 +1 | 2.45 | Finnhub | Citigroup (C) Is Up 5.6% After Launching Blockchain Platform |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Citigroup (C) is a Great Momentum Stock: Should You Buy? |
| 2026-06-10 | Analyst Action | ⚪  0 | 0.5 | Seeking Al | Citigroup Inc. (C) Presents at Morgan Stanley US Financials  |

---

### NYSE:DOV

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 12.8% Under
- 🟢 [Analyst Action|w1.26] Morgan Stanley Sees More Upside in Dover (DOV) Shares

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-14 | Earnings | 🟢 +1 | 3.28 | Finnhub | Dover (DOV) Stock After CoLOS V7 Launch And Q1 Beat Is The 1 |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Morgan Stanley Sees More Upside in Dover (DOV) Shares |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.91 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.06] IREN Limited (IREN) Signs $1.6B Agreement With Dell (DELL) for Blackwe
- 🟢 [Industry|w1.01] A $1.24 Trillion Reason to Buy Dell Stock Now
- 🟢 [Analyst Action|w0.84] Is Dell Technologies (DELL) Outperforming Other Computer and Technolog

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-14 | Industry | 🟢 +1 | 1.01 | Finnhub | A $1.24 Trillion Reason to Buy Dell Stock Now |
| 2026-06-12 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Is Dell Technologies (DELL) Outperforming Other Computer and |
| 2026-06-11 | M&A | 🟢 +1 | 2.06 | Finnhub | IREN Limited (IREN) Signs $1.6B Agreement With Dell (DELL) f |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should Know
- 🟢 [Industry|w0.5] Is Eli Lilly (LLY) One Of The Most Profitable Blue Chip Stocks To Buy 
- 🟢 [Industry|w0.5] Jim Cramer Wasn’t Selling Eli Lilly (LLY)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Eli Lilly (LLY) One Of The Most Profitable Blue Chip Stoc |
| 2026-06-13 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer Wasn’t Selling Eli Lilly (LLY) |
| 2026-06-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Eli Lilly (LLY) Stock Sinks As Market Gains: What You Should |
| 2026-06-09 | Industry | ⚪  0 | 0.5 | Seeking Al | Eli Lilly and Company (LLY) Presents at Goldman Sachs 47th A |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.6 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.1] Western Digital (WDC) Stock Trades Up, Here Is Why
- 🟢 [Industry|w0.5] WDC Powers AI Infrastructure Play With Storage Innovation at Computex

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-12 | Analyst Action | 🟢 +1 | 2.1 | Finnhub | Western Digital (WDC) Stock Trades Up, Here Is Why |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | WDC Powers AI Infrastructure Play With Storage Innovation at |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.26] B. Riley pins APLD stock price at $66 after new lease signing
- 🟢 [Analyst Action|w1.26] Applied Digital’s AI Buildout Pace Has Needham ‘Pleasantly Surprised’ 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | B. Riley pins APLD stock price at $66 after new lease signin |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.26 | Finnhub | Applied Digital’s AI Buildout Pace Has Needham ‘Pleasantly S |

---

## ⚠️ Overheated (1)

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **91** / 100 |
| Raw Weighted Score | 9.86 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 7 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Applied Materials (AMAT) Gets Higher Price Targets from Barclays and C
- 🟢 [Analyst Action|w2.52] Cantor Fitzgerald Raises its Price Target on Applied Materials (AMAT)
- 🟢 [Earnings|w2.27] Is Applied Materials (AMAT) A Good Stock to Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-15 | Rumor | ⚪  0 | 0.5 | Finnhub | Jim Cramer Says “I’ll Go for AMAT” |
| 2026-06-15 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Applied Materials (AMAT) Gets Higher Price Targets from Barc |
| 2026-06-13 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Cantor Fitzgerald Raises its Price Target on Applied Materia |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials (AMAT) Stock Valuation Check After Powerfu |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials (AMAT) is a Great Momentum Stock: Should Y |
| 2026-06-12 | Earnings | 🟢 +1 | 2.27 | Finnhub | Is Applied Materials (AMAT) A Good Stock to Buy Now? |
| 2026-06-12 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Materials, Inc. (AMAT) is Attracting Investor Attent |

---

## ⚪ Watch / Neutral (46)

### NYSE:APH
- Score: 59/100 | raw: 2.14 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 59/100 | raw: 2.26 | News: 5 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 58/100 | raw: 1.91 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 57/100 | raw: 1.6 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:LRCX
- Score: 56/100 | raw: 1.51 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 56/100 | raw: 1.51 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 54/100 | raw: 1.01 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DKS
- Score: 54/100 | raw: 0.89 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JBL
- Score: 54/100 | raw: 0.91 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JCI
- Score: 53/100 | raw: 0.76 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CARR
- Score: 52/100 | raw: 0.5 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MNST
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBIX
- Score: 52/100 | raw: 0.5 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ALAB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NPB
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CRDO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MRVL
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TTMI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:PLXS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DOCN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:AIR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ENVA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KRYS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:TRNO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BAP
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:NBN
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNEX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:BGC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:RIO
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AROC
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:PACS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:KLAC
- Score: 48/100 | raw: -0.41 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-15T14:18:52.469Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*