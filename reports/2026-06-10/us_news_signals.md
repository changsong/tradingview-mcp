# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-10  |  **News Window:** 2026-06-03 ~ 2026-06-10
**Stock Pool:** us_selected.txt (53)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:TRNO** | **100** | 12 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/8 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:HPE** | **85** | 13.64 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 18/22 | Overheated Sentiment (one-sided bullish) |
| 3 | **NASDAQ:TTMI** | **82** | 7.74 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/29 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:JHG** | **80** | 7.14 | 🟢 Long (Strong) | Momentum / Hold | High | 4/15 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:MS** | **78** | 10 | 🟢 Long (Strong) | Momentum / Hold | High | 10/23 | - |
| 6 | **NYSE:JCI** | **78** | 6.62 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/24 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:NBIS** | **77** | 18.2 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 23/17 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:ASML** | **75** | 8.37 | 🟢 Long (Strong) | Momentum / Hold | High | 15/22 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:KLAC** | **74** | 8.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/29 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:CARR** | **74** | 5.8 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/23 | Overheated Sentiment (one-sided bullish) |
| 11 | **NYSE:TT** | **74** | 5.86 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/26 | Overheated Sentiment (one-sided bullish) |
| 12 | **NASDAQ:LRCX** | **72** | 6.27 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/31 | Likely Pre-Priced (no hard catalyst) |
| 13 | **NASDAQ:MNST** | **72** | 5.23 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/22 | - |
| 14 | **NASDAQ:AMAT** | **71** | 4.97 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 13/25 | Overheated Sentiment (one-sided bullish) |
| 15 | **NYSE:ENVA** | **71** | 5.05 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/13 | Overheated Sentiment (one-sided bullish) |
| 16 | **NASDAQ:CRDO** | **68** | 4.43 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 17/18 | - |
| 17 | **NASDAQ:NBIX** | **68** | 4.34 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/28 | Sentiment Strengthening UP (trend) |
| 18 | **NYSE:APH** | **66** | 3.82 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/24 | - |
| 19 | **NYSE:DELL** | **65** | 4.31 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 13/26 | - |
| 20 | **NASDAQ:WDC** | **64** | 3.3 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/27 | - |
| 21 | **NYSE:JBL** | **63** | 3.21 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/24 | - |
| 22 | **NYSE:SN** | **63** | 3.22 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/21 | - |
| 23 | **NYSE:BAP** | **59** | 2.26 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 8/22 | - |
| 24 | **NYSE:DOCN** | **58** | 1.94 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/25 | - |
| 25 | **NASDAQ:CORZ** | **57** | 1.76 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/17 | - |
| 26 | **NASDAQ:INCY** | **57** | 3.56 | ⚪ No Trade (Weak Bullish) | Watch | Low | 18/21 | - |
| 27 | **NASDAQ:SNEX** | **57** | 1.71 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/13 | - |
| 28 | **NASDAQ:ARM** | **56** | 1.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/14 | - |
| 29 | **NYSE:C** | **55** | 1.37 | ⚪ No Trade (Weak Bullish) | Watch | Low | 18/18 | - |
| 30 | **NASDAQ:KRYS** | **55** | 1.28 | ⚪ No Trade (Weak Bullish) | Watch | Low | 7/25 | - |
| 31 | **NASDAQ:NVMI** | **54** | 0.92 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/19 | - |
| 32 | **NYSE:AIR** | **52** | 0.42 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/18 | - |
| 33 | **NASDAQ:NBN** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/19 | - |
| 34 | **NYSE:TSM** | **51** | 0.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 18/16 | - |
| 35 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/18 | - |
| 36 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 37 | **NASDAQ:RMBS** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 38 | **NASDAQ:FLEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 39 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/21 | - |
| 40 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 41 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/27 | - |
| 42 | **NASDAQ:PANW** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 43 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 44 | **NYSE:LLY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 45 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/20 | - |
| 46 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/26 | - |
| 47 | **NYSE:PFS** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 5/18 | - |
| 48 | **NASDAQ:MRVL** | **43** | -2.32 | ⚪ No Trade (Neutral) | Watch | Low | 20/20 | - |
| 49 | **NYSE:DKS** | **43** | -1.79 | ⚪ No Trade (Neutral) | Watch | Low | 7/21 | - |
| 50 | **NASDAQ:PLXS** | **43** | -1.8 | ⚪ No Trade (Neutral) | Watch | Low | 2/19 | - |
| 51 | **NASDAQ:ALAB** | **43** | -2.12 | ⚪ No Trade (Neutral) | Watch | Low | 14/14 | - |
| 52 | **NASDAQ:AMD** | **32** | -8.88 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 20/20 | Sustained Bearish Flow (3-day) |
| 53 | **NASDAQ:MU** | **30** | -7.02 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 21/19 | - |

---

## 🟢 Strong Long (3)

### NYSE:JHG

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.14 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Janus Henderson to Acquire Germany's Rantum Capital
- 🟢 [M&A|w3.57] Janus Henderson Expands European Private Markets Capabilities with Acq

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Janus Henderson to Acquire Germany's Rantum Capital |
| 2026-06-09 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Janus Henderson Expands European Private Markets Capabilitie |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Janus Henderson Opportunistic Alpha Managed Account Q1 2026  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Janus Henderson Investors Announces Changes to ETF Line-Up |

---

### NYSE:MS

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 10 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 10 / 23 |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] OpenAI Files for IPO After Raising $122 Billion at $852 Billion Valuat
- 🟢 [M&A|w3.57] SpaceX IPO Draws Orders for Multiple Times the Shares Available
- 🟢 [Analyst Action|w3.06] Morgan Stanley (MS) Upgraded to Buy: Here's Why

**📉 Bearish Factors:**
- 🔴 [Policy|w1.22] Wells Fargo, JPMorgan, and Other Big Banks Face Pressure to Address AI

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Policy | 🔴 -1 | 1.22 | Yahoo Fina | Wells Fargo, JPMorgan, and Other Big Banks Face Pressure to  |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Lakefront Biotherapeutics Launches 50 Million Euros Share Re |
| 2026-06-09 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | OpenAI Files for IPO After Raising $122 Billion at $852 Bill |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Morgan Stanley Revises Apple Stock Price Target on WWDC Cata |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Morgan Stanley Lifts PT on Cloudflare (NET) |
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Morgan Stanley (MS) Upgraded to Buy: Here's Why |
| 2026-06-09 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | SpaceX IPO Draws Orders for Multiple Times the Shares Availa |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Morgan Stanley Opens AI Access To Equity Platforms To Deepen |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 8.37 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 15 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] ASML Becomes Europe’s Most Valuable Stock As Valuation And Growth Expe
- 🟢 [Buyback|w3.02] ASML reports transactions under its current share buyback program
- 🟢 [Analyst Action|w1.22] BofA Remains Bullish on ASML Holding (ASML) – Here’s Why

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] ASML: Three Risks The Market Is Completely Ignoring
- 🔴 [Industry|w0.7] Photronics, Qorvo, and Texas Instruments Shares Are Falling, What You 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | BofA Remains Bullish on ASML Holding (ASML) – Here’s Why |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing ASML Holding (NasdaqGS:ASML) Valuation After A Str |
| 2026-06-09 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | ASML Becomes Europe’s Most Valuable Stock As Valuation And G |
| 2026-06-09 | Policy | ⚪  0 | 0.61 | Yahoo Fina | Market Chatter: ASML CEO Urges EU to Focus on Building Tech  |
| 2026-06-09 | Policy | ⚪  0 | 0.61 | Yahoo Fina | ASML chief warns EU against directing chip supplies |
| 2026-06-09 | Rumor | ⚪  0 | 0.61 | Yahoo Fina | ASML Weighs Musk Terafab Talks Against Valuation And Governa |
| 2026-06-09 | Industry | ⚪  0 | 0.5 | Seeking Al | ASML breaks $700B market cap barrier: Here's the rally drive |
| 2026-06-08 | Industry | 🟢 +1 | 1.01 | Finnhub | 5 Stocks to Boost Your Portfolio on Soaring Semiconductor Sa |

---

## 🟢 Mid Long (9)

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 8.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 29 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Can KLA Outgrow Chip Equipment Market Through 2030?
- 🟢 [Earnings|w2.81] Is KLA Corporation (KLAC) A Good Stock To Buy Now?
- 🟢 [Analyst Action|w2.16] KLA Corp. in spotlight as JPMorgan sees path to EPS of $95 by 2030

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.76] KLA (KLAC) Suffers a Larger Drop Than the General Market: Key Insights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Can KLA Outgrow Chip Equipment Market Through 2030? |
| 2026-06-09 | Buyback | ⚪  0 | 3.06 | Yahoo Fina | Dear KLA Stock Fans, Mark Your Calendars for June 12 |
| 2026-06-09 | Analyst Action | ⚪  0 | 3.06 | Yahoo Fina | UBS Lifts KLA Price Target to $2,180 From $1,770, Maintains  |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Technical Assessment: Bullish in the Intermediate-Term |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Applied Materials and KLA Corporation Stocks Trade Up, What  |
| 2026-06-08 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Is KLA Corporation (KLAC) A Good Stock To Buy Now? |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Should You Buy, Sell, or Hold TER Stock After a 312% Rise in |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Top 50 High-Quality Dividend Growth Stocks For June 2026 |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.23 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 22 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Record Quarter And Bigger Buyback Could Be A Game Changer For Monster 
- 🟢 [Analyst Action|w1.04] Morgan Stanley Raises PT on Monster Beverage (MNST) Stock
- 🟢 [Industry|w1.01] MONSTER BEVERAGE CORP (NASDAQ:MNST) Hits Perfect Technical Score with 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Is It Too Late To Consider Monster Beverage (MNST) After A 41% One-Yea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Morgan Stanley Raises PT on Monster Beverage (MNST) Stock |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | CELH and Zero-Sugar Energy Trends to Watch Through 2026 |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | How The Monster Beverage (MNST) Narrative Is Evolving Withou |
| 2026-06-08 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Record Quarter And Bigger Buyback Could Be A Game Changer Fo |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Is CELH a Buy After Q1 2026 Results and Share Buybacks? |
| 2026-06-08 | Industry | 🟢 +1 | 1.01 | Finnhub | MONSTER BEVERAGE CORP (NASDAQ:MNST) Hits Perfect Technical S |
| 2026-06-07 | Industry | 🔴 -1 | 0.72 | Yahoo Fina | Is It Too Late To Consider Monster Beverage (MNST) After A 4 |
| 2026-06-05 | Industry | 🟢 +1 | 0.59 | Finnhub | Monster Beverage Corp (NASDAQ:MNST) Passes Trend Template an |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.43 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 17 / 18 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' Analyst Say
- 🟢 [Analyst Action|w0.6] Credo: The Post-Earnings Dip Is A Buying Opportunity
- 🟢 [Industry|w0.5] Credo Stock Surges 78% in 3 Months: Is It Still a Buying Opportunity?

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Credo Technology Group Holding Insider Sold Shares Worth $465,888, Acc
- 🔴 [Industry|w0.86] Credo Technology Group Holding Insider Sold Shares Worth $1,114,050, A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today: Nasdaq Ends Off Steeper Loss, Dow Rises  |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Credo Technology Group Holding Insider Sold Shares Worth $46 |
| 2026-06-08 | Industry | 🔴 -1 | 0.86 | Yahoo Fina | Credo Technology Group Holding Insider Sold Shares Worth $1, |
| 2026-06-08 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Credo Stock Surges 78% in 3 Months: Is It Still a Buying Opp |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' A |
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Finnhub | 3 Growth & Income Stocks To Buy + Steve Answers Your Questio |
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Finnhub | Credo's Next Growth Phase |
| 2026-06-06 | Industry | 🟢 +1 | 0.5 | Finnhub | Credo: Optics Ramp, Margin Upside And Bullish Charts Point T |

---

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.34 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 28 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.16] Neurocrine Biosciences Late-Stage Study Shows Promising Results for Ta
- 🟢 [Industry|w2.16] Neurocrine Biosciences Presents New Clinically Meaningful Response Dat
- 🟢 [Analyst Action|w0.52] RBC Capital Raises its Price Target on Neurocrine Biosciences (NBIX)

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Neurocrine Biosciences Insider Sold Shares Worth $5,770,235, According

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Neurocrine Biosciences, Inc. (NBIX) Presents at Goldman Sach |
| 2026-06-08 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Neurocrine Biosciences Late-Stage Study Shows Promising Resu |
| 2026-06-08 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Neurocrine Biosciences Presents New Clinically Meaningful Re |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | NEUROCRINE BIOSCIENCES INC (NASDAQ:NBIX) Nears Technical Bre |
| 2026-06-05 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Neurocrine Biosciences Insider Sold Shares Worth $5,770,235, |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Neurocrine Biosciences (NBIX) Valuation After Rece |
| 2026-06-04 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | RBC Capital Raises its Price Target on Neurocrine Bioscience |

---

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.82 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 24 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Amphenol Deepens AI Data Center Role With CommScope CCS Acquisition
- 🟢 [Analyst Action|w1.04] Barclays Adjusts Price Target on Amphenol to $198 From $180, Maintains
- 🟢 [Industry|w1.02] 3 Reasons We Love Amphenol (APH)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 Reasons We Love Amphenol (APH) |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Can Corning's Multibillion-Dollar AI Deal With Amazon Lift I |
| 2026-06-09 | Industry | ⚪  0 | 1.19 | Finnhub | Will Oracle's AI Infrastructure Momentum Drive Results in Q4 |
| 2026-06-08 | Industry | ⚪  0 | 0.86 | Yahoo Fina | VIAV vs. GLW: Which Optical Networking Stock is the Better B |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Barclays Adjusts Price Target on Amphenol to $198 From $180, |
| 2026-06-08 | Industry | ⚪  0 | 1.01 | Finnhub | Top 50 High-Quality Dividend Growth Stocks For June 2026 |
| 2026-06-06 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Assessing Amphenol (APH) Valuation After Recent Share Price  |
| 2026-06-06 | Industry | ⚪  0 | 0.7 | Finnhub | 5 Relatively Secure And Cheap Dividend Stocks, Yields Up To  |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 4.31 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 13 / 26 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.43] AMD’s UK AI Supercomputers Put Sovereign And Research Role In Focus
- 🟢 [Analyst Action|w1.43] Dell, HPE seen well positioned for AI and enterprise demand despite st
- 🟢 [Analyst Action|w1.21] Dell Technologies (DELL) Price Target Increased by 149.33% to 487.69

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Super Micro Plunges 11%, Dell Sinks 9% as High-Beta AI Hardware Stocks
- 🔴 [Industry|w0.6] Tech stocks tumble again
- 🔴 [Industry|w0.51] Nasdaq Composite Falls to 5-Week Low Amid Tech Pullback

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | Nasdaq Composite Falls to 5-Week Low Amid Tech Pullback |
| 2026-06-09 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | AMD’s UK AI Supercomputers Put Sovereign And Research Role I |
| 2026-06-09 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | Equities Markets Fall Intraday Amid Tech Sell-Off |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is NVIDIA (NVDA) One of the Best NASDAQ Stocks to Buy and Ho |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Super Micro Plunges 11%, Dell Sinks 9% as High-Beta AI Hardw |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here's Why You Should Retain Accenture Stock in Your Portfol |
| 2026-06-09 | Industry | 🔴 -1 | 0.6 | Finnhub | Tech stocks tumble again |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Dell, HPE seen well positioned for AI and enterprise demand  |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.3 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 27 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Citi Remains Bullish on Western Digital Corporation (WDC) – Here’s Why
- 🟢 [Analyst Action|w1.21] Seagate, Western Digital Stocks Climb As Analysts Hike Price Targets
- 🟢 [Analyst Action|w1.04] AI Demand Lifts Memory and Storage Stocks

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Skyworks Solutions, Western Digital, and Teradyne Shares Are Falling, 
- 🔴 [Industry|w1.02] Micron Sinks 6%, Western Digital Falls 5% but SanDisk Holds Steady

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Skyworks Solutions, Western Digital, and Teradyne Shares Are |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Micron Stock And The Two-Year Sellout |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Micron Sinks 6%, Western Digital Falls 5% but SanDisk Holds  |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Citi Remains Bullish on Western Digital Corporation (WDC) –  |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Tell-Tale Rally in Micron's Stock |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Western Digital Corporation (WDC) Is a Trending Stock: Facts |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | AI Demand Lifts Memory and Storage Stocks |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Seagate, Western Digital Stocks Climb As Analysts Hike Price |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.21 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 24 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] UBS Maintains Neutral on Jabil, Raises Price Target to $380
- 🟢 [Analyst Action|w1.22] UBS Raises Jabil Price Target to $380 From $273, Maintains Neutral Rat
- 🟢 [Earnings|w0.56] Electronic Components & Manufacturing Stocks Q1 Highlights: Jabil (NYS

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] 2 Reasons JBL is Risky and 1 Stock to Buy Instead

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | UBS Raises Jabil Price Target to $380 From $273, Maintains N |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | UBS Maintains Neutral on Jabil, Raises Price Target to $380 |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Can Sanmina's Advanced Healthcare Solutions Boost Its Shares |
| 2026-06-05 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | Jabil’s Quarterly Beat And Insider Selling Might Change The  |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | AI Play Jabil Forms Fresh Base Amid Bounce Off 10-Week Line |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | ServiceTitan Inc. (TTAN) Q1 Earnings and Revenues Surpass Es |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Celestica Rides on Organic Growth: Reason to Buy the Stock N |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Keysight vs. Sanmina: Which Electronics Stock Is a Better Bu |

---

### NYSE:SN

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.22 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 21 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] SharkNinja, Inc. (SN) Up 9.2% Since Last Earnings Report: Can It Conti
- 🟢 [Analyst Action|w1.22] Brokers Suggest Investing in SharkNinja, Inc. (SN): Read This Before P
- 🟢 [Industry|w0.86] SharkNinja Introduces the Shark® CarpetForce™ Collection, Reinventing 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Sharkninja Insider Sold Shares Worth $269,720, According to a Recent S

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Brokers Suggest Investing in SharkNinja, Inc. (SN): Read Thi |
| 2026-06-09 | Industry | ⚪  0 | 1.19 | Finnhub | Nasdaq 100 Tumbles Over 3%, Marvell Crashes 12%: Stock Marke |
| 2026-06-08 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | SharkNinja Introduces the Shark® CarpetForce™ Collection, Re |
| 2026-06-05 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Sharkninja Insider Sold Shares Worth $269,720, According to  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is SharkNinja (SN) Still Attractively Priced After 41.5% One |
| 2026-06-05 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | SharkNinja, Inc. (SN) Up 9.2% Since Last Earnings Report: Ca |

---

## 🟡 Cautious Long (7)

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.62 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Morgan Stanley Adjusts PT on Johnson Controls International to $175 Fr
- 🟢 [Analyst Action|w3.06] Wolfe Research Highlights Progress in Johnson Controls’ (JCI) Lean Tra
- 🟢 [Industry|w0.5] Johnson Controls International plc (JCI): 7 Best Electrical Contractin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Morgan Stanley Adjusts PT on Johnson Controls International  |
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Wolfe Research Highlights Progress in Johnson Controls’ (JCI |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Modine's $4 Billion AI Cooling Deal Could Be a Turning P |
| 2026-06-06 | Industry | ⚪  0 | 0.5 | Finnhub | Johnson Controls International (NYSE:JCI) Technical Breakout |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Finnhub | Dividend Champion, Contender, And Challenger Highlights: Wee |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Reasons to Like JCI and 1 to Stay Skeptical |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Johnson Controls International plc (JCI): 7 Best Electrical  |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 18.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3] Nebius And NVIDIA Lab Links AI Cloud Growth To Robotics Demand
- 🟢 [Industry|w2.55] Nebius Shares Jump After NVIDIA-Backed AI Lab Launch
- 🟢 [Industry|w2.55] NBIS Commits 1.7B Euros to Strengthen the UK's AI Infrastructure Ambit

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Why Is Nebius Stock Falling On Friday?
- 🔴 [Analyst Action|w1.43] Nebius: Please Don't Push It Off The Cliff (Rating Downgrade)
- 🔴 [Analyst Action|w1.43] Nebius Falls: Hyperscalers Are Hyperscaling

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | 🟢 +1 | 3 | Yahoo Fina | Nebius And NVIDIA Lab Links AI Cloud Growth To Robotics Dema |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Shares Jump After NVIDIA-Backed AI Lab Launch |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | CoreWeave Stock Tumbles 34% in a Year: What Should Investors |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | NBIS Commits 1.7B Euros to Strengthen the UK's AI Infrastruc |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Expands UK AI Push With Nvidia |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | NBIS Stock Has Fallen Over 16% In A Week – But A New Nvidia- |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Unveils Robotics Accelerator Powered by NVIDIA AI Tec |

---

### NYSE:CARR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.8 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Maintained Di
- 🟢 [Buyback|w1.3] Carrier Board of Directors Declares Quarterly Cash Dividend
- 🟢 [Industry|w1.19] Carrier Global Corporation (CARR) Presents at 16th Annual Wells Fargo 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Carrier Global vs. Owens Corning: Which Industrials Stock Is |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Comfort Systems' Electrical Surge: Can 88% Rise Redefine Seg |
| 2026-06-09 | Industry | 🟢 +1 | 1.19 | Finnhub | Carrier Global Corporation (CARR) Presents at 16th Annual We |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-05 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Mai |
| 2026-06-05 | Industry | 🟢 +1 | 0.59 | Finnhub | Carrier Digital Leadership Award Adds Weight To Smarter Buil |
| 2026-06-04 | Buyback | 🟢 +1 | 1.3 | Yahoo Fina | Carrier Board of Directors Declares Quarterly Cash Dividend |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Carrier Global Stock Underperforming the Dow? |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.86 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.51] Trane Technologies Declares Quarterly Dividend
- 🟢 [Industry|w1.01] Trane Technologies Highlights Progress in 2025 Sustainability Report
- 🟢 [Industry|w0.86] Trane Technologies Scales Sustainability Through Climate Innovation, C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Reasons Why You Should Hold ABM Stock in Your Portfolio |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Modine's $4 Billion AI Cooling Deal Could Be a Turning P |
| 2026-06-08 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Trane Technologies Scales Sustainability Through Climate Inn |
| 2026-06-08 | Industry | 🟢 +1 | 1.01 | Finnhub | Trane Technologies Highlights Progress in 2025 Sustainabilit |
| 2026-06-07 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | A Look At Trane Technologies (TT) Valuation After Recent Sha |
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Trane Technologies (TT) Launches Montréal AI Lab for Autonom |
| 2026-06-05 | Earnings | ⚪  0 | 0.5 | Yahoo Fina | Trane Technologies (TT) Stock Moves -1.49%: What You Should  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Reasons Why You Should Retain Gartner Stock in Your Portfoli |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 6.27 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 31 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Why Lam Research (LRCX) Stock Is Trading Up Today
- 🟢 [Analyst Action|w3.06] UBS Lifts Lam Research Price Target to $375 From $310, Maintains Buy R
- 🟢 [Industry|w2.16] Lam Research (LRCX) Raises WFE Forecast at BofA Global Technology Conf

**📉 Bearish Factors:**
- 🔴 [Policy|w2.52] How New U.S. China Chip Export Curbs Will Impact Lam Research (LRCX) I
- 🔴 [Industry|w1.01] Lam Research: AI Tailwinds Are Real, But The Stock Still Looks Overval

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Why Lam Research (LRCX) Stock Is Trading Up Today |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Lam Research (LRCX): A Strategic Investment in the Transform |
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | UBS Lifts Lam Research Price Target to $375 From $310, Maint |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Semtech, Lam Research, and Photronics Shares Are Soaring, Wh |
| 2026-06-08 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Lam Research (LRCX) Raises WFE Forecast at BofA Global Techn |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Should You Buy, Sell or Hold AMAT Stock After a 167% Rise in |
| 2026-06-08 | Industry | 🔴 -1 | 1.01 | Finnhub | Lam Research: AI Tailwinds Are Real, But The Stock Still Loo |
| 2026-06-07 | Policy | 🔴 -1 | 2.52 | Finnhub | How New U.S. China Chip Export Curbs Will Impact Lam Researc |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.97 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] 4 Solid Stocks to Buy as S&P 500 Hits Fresh All-Time Closing High
- 🟢 [Analyst Action|w1.21] 3 chip stocks to buy after recent SOX pullback: Citi
- 🟢 [Industry|w1.02] Applied Materials, Inc. (AMAT) Eyes Growing Southeast Asia Workforce b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Tuesday: Marvell, Intel, GSK, Vail Resorts |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Applied Materials, Inc. (AMAT) Eyes Growing Southeast Asia W |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here's How Much a $1000 Investment in Applied Materials Made |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | 4 Solid Stocks to Buy as S&P 500 Hits Fresh All-Time Closing |
| 2026-06-09 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Technical Assessment: Bullish in the Intermediate-Term |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Bull of the Day: Ultra Clean Holdings (UCTT) |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Ultra Clean and Thor Industries have been highlighted as Zac |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Applied Materials and KLA Corporation Stocks Trade Up, What  |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.05 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 13 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Enova International: Structurally Undervalued
- 🟢 [Analyst Action|w1.2] Enova International: Structurally Undervalued
- 🟢 [Industry|w0.72] Enova International (ENVA) Valuation Check After Strong Multi‑Year Sha

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Analyst Action | 🟢 +1 | 1.2 | Seeking Al | Enova International: Structurally Undervalued |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Pagaya Advances POS Strategy With Upgrade Flex Pay Deal |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Enova International: Structurally Undervalued |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Regional Management Seems Skilled At Navigating The K-Shaped |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 3 Small-Cap Stocks That Concern Us |
| 2026-06-07 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Enova International (ENVA) Valuation Check After Strong Mult |
| 2026-06-05 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Here's Why Enova International (ENVA) is a Strong Growth Sto |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Enova Stock Outlook: What's Driving Growth and Key Risks Ahe |

---

## ⚠️ Overheated (3)

### NYSE:TRNO

| Metric | Detail |
|--------|--------|
| Normalized Score | **100** / 100 |
| Raw Weighted Score | 12 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 8 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.02] Terreno Realty Expands Bay Area Portfolio With $25.9M Acquisition
- 🟢 [M&A|w2.06] Terreno Realty Acquires Industrial Property In San Francisco For ~$25.
- 🟢 [M&A|w1.76] Terreno Realty Acquires San Francisco Industrial Property for $25.9 Mi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Terreno Realty Pre-Leases New Jersey Land Parcel, Sees Stron |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Terreno Realty Corporation Announces Lease in Kent, WA |
| 2026-06-08 | M&A | 🟢 +1 | 3.02 | Yahoo Fina | Terreno Realty Expands Bay Area Portfolio With $25.9M Acquis |
| 2026-06-08 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Terreno Realty Corporation Announces Lease in Elizabeth, NJ |
| 2026-06-08 | Industry | 🟢 +1 | 0.5 | Finnhub | Terreno Realty Corp (NYSE:TRNO): Strong Growth Meets Technic |
| 2026-06-05 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Terreno Realty Acquires San Francisco Industrial Property fo |
| 2026-06-05 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Terreno Realty Corporation Acquires Property in San Francisc |
| 2026-06-05 | M&A | 🟢 +1 | 2.06 | Finnhub | Terreno Realty Acquires Industrial Property In San Francisco |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 13.64 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] 5 Revealing Analyst Questions From Hewlett Packard Enterprise’s Q1 Ear
- 🟢 [Analyst Action|w3.02] Barclays Raises Hewlett Packard Enterprise (HPE) Price Target on Susta
- 🟢 [Earnings|w1.36] Wall Street Roundup: AI Trade Passes The Baton

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | ⚪  0 | 0.6 | Yahoo Fina | The Warning Sign Inside Arista Networks Stock's Great News |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Barclays Raises Hewlett Packard Enterprise (HPE) Price Targe |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here’s What Analysts Are Saying About Lumentum Holdings (LIT |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Dell, HPE seen well positioned for AI and enterprise demand  |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Deliverance AI emerges from stealth with £6m ARR to build th |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Hewlett Packard Enterprise Reshapes Global Channels To Suppo |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | ValuEngine Weekly Market Summary And Commentary |
| 2026-06-09 | Industry | ⚪  0 | 0.5 | Seeking Al | AI servers likely to hit $1.24T by 2030, traditional to surp |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.74 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 29 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Electronic Components & Manufacturing Stocks Q1 Earnings: TTM Technolo
- 🟢 [Industry|w1.26] How Investors May Respond To TTM Technologies (TTMI) Expanding And Ref
- 🟢 [Analyst Action|w1.04] 3 Reasons Why Growth Investors Shouldn't Overlook TTM (TTMI)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Electronic Components & Manufacturing Stocks Q1 Earnings: TT |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | 3 Reasons Why Growth Investors Shouldn't Overlook TTM (TTMI) |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.04 | Yahoo Fina | Does TTM (TTMI) Have the Potential to Rally 26.6% as Wall St |
| 2026-06-05 | Industry | 🟢 +1 | 1.26 | Yahoo Fina | How Investors May Respond To TTM Technologies (TTMI) Expandi |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | TTM Technologies Stock Is Up 450% in a Year and Could Still  |
| 2026-06-05 | Industry | ⚪  0 | 0.59 | Finnhub | $1000 Invested In TTM Technologies 20 Years Ago Would Be Wor |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Finnhub | Boost Your Portfolio Returns With These 4 Top-Performing Liq |
| 2026-06-05 | Industry | 🟢 +1 | 0.59 | Finnhub | TTM Technologies: Strong Demand Suggests The Transformation  |

---

## ⚠️ Risk Pattern (8)

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.62 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Morgan Stanley Adjusts PT on Johnson Controls International to $175 Fr
- 🟢 [Analyst Action|w3.06] Wolfe Research Highlights Progress in Johnson Controls’ (JCI) Lean Tra
- 🟢 [Industry|w0.5] Johnson Controls International plc (JCI): 7 Best Electrical Contractin

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Morgan Stanley Adjusts PT on Johnson Controls International  |
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Wolfe Research Highlights Progress in Johnson Controls’ (JCI |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Modine's $4 Billion AI Cooling Deal Could Be a Turning P |
| 2026-06-06 | Industry | ⚪  0 | 0.5 | Finnhub | Johnson Controls International (NYSE:JCI) Technical Breakout |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Finnhub | Dividend Champion, Contender, And Challenger Highlights: Wee |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 2 Reasons to Like JCI and 1 to Stay Skeptical |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Johnson Controls International plc (JCI): 7 Best Electrical  |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 18.2 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3] Nebius And NVIDIA Lab Links AI Cloud Growth To Robotics Demand
- 🟢 [Industry|w2.55] Nebius Shares Jump After NVIDIA-Backed AI Lab Launch
- 🟢 [Industry|w2.55] NBIS Commits 1.7B Euros to Strengthen the UK's AI Infrastructure Ambit

**📉 Bearish Factors:**
- 🔴 [Industry|w1.47] Why Is Nebius Stock Falling On Friday?
- 🔴 [Analyst Action|w1.43] Nebius: Please Don't Push It Off The Cliff (Rating Downgrade)
- 🔴 [Analyst Action|w1.43] Nebius Falls: Hyperscalers Are Hyperscaling

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | 🟢 +1 | 3 | Yahoo Fina | Nebius And NVIDIA Lab Links AI Cloud Growth To Robotics Dema |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Shares Jump After NVIDIA-Backed AI Lab Launch |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | CoreWeave Stock Tumbles 34% in a Year: What Should Investors |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | NBIS Commits 1.7B Euros to Strengthen the UK's AI Infrastruc |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Expands UK AI Push With Nvidia |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | NBIS Stock Has Fallen Over 16% In A Week – But A New Nvidia- |
| 2026-06-09 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Nebius Unveils Robotics Accelerator Powered by NVIDIA AI Tec |

---

### NYSE:CARR

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.8 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 23 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.64] Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Maintained Di
- 🟢 [Buyback|w1.3] Carrier Board of Directors Declares Quarterly Cash Dividend
- 🟢 [Industry|w1.19] Carrier Global Corporation (CARR) Presents at 16th Annual Wells Fargo 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Carrier Global vs. Owens Corning: Which Industrials Stock Is |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Comfort Systems' Electrical Surge: Can 88% Rise Redefine Seg |
| 2026-06-09 | Industry | 🟢 +1 | 1.19 | Finnhub | Carrier Global Corporation (CARR) Presents at 16th Annual We |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-05 | Earnings | 🟢 +1 | 1.64 | Yahoo Fina | Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Mai |
| 2026-06-05 | Industry | 🟢 +1 | 0.59 | Finnhub | Carrier Digital Leadership Award Adds Weight To Smarter Buil |
| 2026-06-04 | Buyback | 🟢 +1 | 1.3 | Yahoo Fina | Carrier Board of Directors Declares Quarterly Cash Dividend |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Carrier Global Stock Underperforming the Dow? |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.86 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 26 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.51] Trane Technologies Declares Quarterly Dividend
- 🟢 [Industry|w1.01] Trane Technologies Highlights Progress in 2025 Sustainability Report
- 🟢 [Industry|w0.86] Trane Technologies Scales Sustainability Through Climate Innovation, C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Reasons Why You Should Hold ABM Stock in Your Portfolio |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Modine's $4 Billion AI Cooling Deal Could Be a Turning P |
| 2026-06-08 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Trane Technologies Scales Sustainability Through Climate Inn |
| 2026-06-08 | Industry | 🟢 +1 | 1.01 | Finnhub | Trane Technologies Highlights Progress in 2025 Sustainabilit |
| 2026-06-07 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | A Look At Trane Technologies (TT) Valuation After Recent Sha |
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Trane Technologies (TT) Launches Montréal AI Lab for Autonom |
| 2026-06-05 | Earnings | ⚪  0 | 0.5 | Yahoo Fina | Trane Technologies (TT) Stock Moves -1.49%: What You Should  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Reasons Why You Should Retain Gartner Stock in Your Portfoli |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 6.27 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 31 |
| Patterns | WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.06] Why Lam Research (LRCX) Stock Is Trading Up Today
- 🟢 [Analyst Action|w3.06] UBS Lifts Lam Research Price Target to $375 From $310, Maintains Buy R
- 🟢 [Industry|w2.16] Lam Research (LRCX) Raises WFE Forecast at BofA Global Technology Conf

**📉 Bearish Factors:**
- 🔴 [Policy|w2.52] How New U.S. China Chip Export Curbs Will Impact Lam Research (LRCX) I
- 🔴 [Industry|w1.01] Lam Research: AI Tailwinds Are Real, But The Stock Still Looks Overval

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | Why Lam Research (LRCX) Stock Is Trading Up Today |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Lam Research (LRCX): A Strategic Investment in the Transform |
| 2026-06-09 | Analyst Action | 🟢 +1 | 3.06 | Yahoo Fina | UBS Lifts Lam Research Price Target to $375 From $310, Maint |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Semtech, Lam Research, and Photronics Shares Are Soaring, Wh |
| 2026-06-08 | Industry | 🟢 +1 | 2.16 | Yahoo Fina | Lam Research (LRCX) Raises WFE Forecast at BofA Global Techn |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Finnhub | Should You Buy, Sell or Hold AMAT Stock After a 167% Rise in |
| 2026-06-08 | Industry | 🔴 -1 | 1.01 | Finnhub | Lam Research: AI Tailwinds Are Real, But The Stock Still Loo |
| 2026-06-07 | Policy | 🔴 -1 | 2.52 | Finnhub | How New U.S. China Chip Export Curbs Will Impact Lam Researc |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.97 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 13 / 25 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] 4 Solid Stocks to Buy as S&P 500 Hits Fresh All-Time Closing High
- 🟢 [Analyst Action|w1.21] 3 chip stocks to buy after recent SOX pullback: Citi
- 🟢 [Industry|w1.02] Applied Materials, Inc. (AMAT) Eyes Growing Southeast Asia Workforce b

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Tuesday: Marvell, Intel, GSK, Vail Resorts |
| 2026-06-09 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Applied Materials, Inc. (AMAT) Eyes Growing Southeast Asia W |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Here's How Much a $1000 Investment in Applied Materials Made |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | 4 Solid Stocks to Buy as S&P 500 Hits Fresh All-Time Closing |
| 2026-06-09 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Technical Assessment: Bullish in the Intermediate-Term |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Bull of the Day: Ultra Clean Holdings (UCTT) |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Ultra Clean and Thor Industries have been highlighted as Zac |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Applied Materials and KLA Corporation Stocks Trade Up, What  |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5.05 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 13 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Enova International: Structurally Undervalued
- 🟢 [Analyst Action|w1.2] Enova International: Structurally Undervalued
- 🟢 [Industry|w0.72] Enova International (ENVA) Valuation Check After Strong Multi‑Year Sha

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Analyst Action | 🟢 +1 | 1.2 | Seeking Al | Enova International: Structurally Undervalued |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Pagaya Advances POS Strategy With Upgrade Flex Pay Deal |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Enova International: Structurally Undervalued |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Finnhub | Regional Management Seems Skilled At Navigating The K-Shaped |
| 2026-06-08 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 3 Small-Cap Stocks That Concern Us |
| 2026-06-07 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Enova International (ENVA) Valuation Check After Strong Mult |
| 2026-06-05 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | Here's Why Enova International (ENVA) is a Strong Growth Sto |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Enova Stock Outlook: What's Driving Growth and Key Risks Ahe |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **32** / 100 |
| Raw Weighted Score | -8.88 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 20 / 20 |
| Patterns | WARNING: Sustained Bearish Flow (3-day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD’s UK AI Supercomputers Put Sovereign And Research Role In Focus
- 🟢 [Analyst Action|w1.02] The Compute Inversion And Why AMD Will Lead Agentic AI

**📉 Bearish Factors:**
- 🔴 [Policy|w1.43] China Weighs $295 Billion AI Data Center Buildout Over Five Years
- 🔴 [Analyst Action|w1.43] AMD Is Soaring, But Here's Why It's Time To Say Goodbye
- 🔴 [Analyst Action|w1.43] AMD: Inventory Doesn't Lie And Says Downgrade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | ⚪  0 | 0.6 | Yahoo Fina | SMH ETF Investors: Watch Hyperscaler Capex Guidance at July  |
| 2026-06-10 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Worried About Which AI Stock to Buy? This Low-Cost ETF Lets  |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Chip Stocks Tumble in Roller-Coaster Market |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Penguin Solutions, AMD, and Impinj Stocks Trade Down, What Y |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | What Could Go Wrong For Broadcom Stock? |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | AI Stocks Lead Tech Sector Slide. 'Summer Swoon Has Arrived. |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nvidia Finally Lands Apple as an AI Customer. Why the Stock  |
| 2026-06-09 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD’s UK AI Supercomputers Put Sovereign And Research Role I |

---

## 🔴 Avoid / Short (3)

### NYSE:BAP

| Metric | Detail |
|--------|--------|
| Normalized Score | **59** / 100 |
| Raw Weighted Score | 2.26 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 8 / 22 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Credicorp (BAP) Price Target Increased by 11.76% to 370.37

**📉 Bearish Factors:**
- 🔴 [Black Swan|w0.76] Credicorp Insider Sold Shares Worth $1,116,500, According to a Recent 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Black Swan | 🔴 -1 | 0.76 | Yahoo Fina | Credicorp Insider Sold Shares Worth $1,116,500, According to |
| 2026-06-09 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Top Dividend Stocks To Consider In June 2026 |
| 2026-06-08 | Industry | ⚪  0 | 0.86 | Yahoo Fina | June 2026's Top Dividend Stocks For Your Portfolio |
| 2026-06-08 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Dividend Stocks To Consider In June 2026 |
| 2026-06-08 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Credicorp (BAP) Price Target Increased by 11.76% to 370.37 |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | June 2026's Best Dividend Stocks For Reliable Income |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 3 Dividend Stocks Yielding Up To 4.9% |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | June 2026's Top Dividend Stocks For Reliable Income |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **32** / 100 |
| Raw Weighted Score | -8.88 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 20 / 20 |
| Patterns | WARNING: Sustained Bearish Flow (3-day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] AMD’s UK AI Supercomputers Put Sovereign And Research Role In Focus
- 🟢 [Analyst Action|w1.02] The Compute Inversion And Why AMD Will Lead Agentic AI

**📉 Bearish Factors:**
- 🔴 [Policy|w1.43] China Weighs $295 Billion AI Data Center Buildout Over Five Years
- 🔴 [Analyst Action|w1.43] AMD Is Soaring, But Here's Why It's Time To Say Goodbye
- 🔴 [Analyst Action|w1.43] AMD: Inventory Doesn't Lie And Says Downgrade

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | ⚪  0 | 0.6 | Yahoo Fina | SMH ETF Investors: Watch Hyperscaler Capex Guidance at July  |
| 2026-06-10 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Worried About Which AI Stock to Buy? This Low-Cost ETF Lets  |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Chip Stocks Tumble in Roller-Coaster Market |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Penguin Solutions, AMD, and Impinj Stocks Trade Down, What Y |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | What Could Go Wrong For Broadcom Stock? |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | AI Stocks Lead Tech Sector Slide. 'Summer Swoon Has Arrived. |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nvidia Finally Lands Apple as an AI Customer. Why the Stock  |
| 2026-06-09 | M&A | 🟢 +1 | 4.16 | Finnhub | AMD’s UK AI Supercomputers Put Sovereign And Research Role I |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **30** / 100 |
| Raw Weighted Score | -7.02 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 21 / 19 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.22] Micron stock gets a shocking Wall Street price target
- 🟢 [Analyst Action|w0.5] Micron: The Market Is Right (Rating Upgrade)
- 🟢 [Industry|w0.5] Micron: Rising Memory Demand And Tight Supply Create A Powerful Setup

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.22] MU Stock Slides 2% After-Hours As Goldman Sachs Doubles Price Target B
- 🔴 [Industry|w1.19] Micron Stock And The Two-Year Sellout
- 🔴 [Industry|w1.19] Up 174% Year-to-Date: 1 Major Reason to Hold Off on Micron Technology 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-10 | Industry | ⚪  0 | 0.6 | Yahoo Fina | SMH ETF Investors: Watch Hyperscaler Capex Guidance at July  |
| 2026-06-09 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | MU Stock Slides 2% After-Hours As Goldman Sachs Doubles Pric |
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Micron stock gets a shocking Wall Street price target |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Micron (MU) Registers a Bigger Fall Than the Market: Importa |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Chip Stocks Tumble in Roller-Coaster Market |
| 2026-06-09 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Allegro MicroSystems, Micron, and onsemi Stocks Trade Down,  |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | There's more 'adoption of options' among retail traders: Sch |
| 2026-06-09 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Micron Selloff Was a ‘Buying Opportunity’—But the Stock Cont |

---

## ⚪ Watch / Neutral (28)

### NYSE:DOCN
- Score: 58/100 | raw: 1.94 | News: 6 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CORZ
- Score: 57/100 | raw: 1.76 | News: 4 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INCY
- Score: 57/100 | raw: 3.56 | News: 18 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNEX
- Score: 57/100 | raw: 1.71 | News: 5 kept / 13 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ARM
- Score: 56/100 | raw: 1.4 | News: 11 kept / 14 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:C
- Score: 55/100 | raw: 1.37 | News: 18 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 55/100 | raw: 1.28 | News: 7 kept / 25 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVMI
- Score: 54/100 | raw: 0.92 | News: 5 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 52/100 | raw: 0.42 | News: 5 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NBN
- Score: 52/100 | raw: 0.5 | News: 2 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 51/100 | raw: 0.4 | News: 18 kept / 16 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 1 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 50/100 | raw: 0 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 3 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 13 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:LLY
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 1 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 26 dropped | No relevant news in window

### NYSE:PFS
- Score: 48/100 | raw: -0.5 | News: 5 kept / 18 dropped | No clear directional bias — stay flat

### NASDAQ:MRVL
- Score: 43/100 | raw: -2.32 | News: 20 kept / 20 dropped | No clear directional bias — stay flat

### NYSE:DKS
- Score: 43/100 | raw: -1.79 | News: 7 kept / 21 dropped | No clear directional bias — stay flat

### NASDAQ:PLXS
- Score: 43/100 | raw: -1.8 | News: 2 kept / 19 dropped | No clear directional bias — stay flat

### NASDAQ:ALAB
- Score: 43/100 | raw: -2.12 | News: 14 kept / 14 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-10T05:25:52.320Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*