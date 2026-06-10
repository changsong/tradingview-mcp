# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-09  |  **News Window:** 2026-06-02 ~ 2026-06-09
**Stock Pool:** us_selected.txt (54)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:GLW** | **96** | 42.85 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 16/24 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:TTMI** | **94** | 11.82 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 13/24 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:INCY** | **92** | 26.43 | 🟢 Long (Strong) | Momentum / Hold | High | 16/20 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:HPE** | **89** | 17.32 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 18/22 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:LLY** | **89** | 27.66 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 20/13 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:CRWD** | **85** | 19.8 | 🟢 Long (Strong) | Momentum / Hold | High | 21/16 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:MRVL** | **83** | 15.51 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 18/22 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:MU** | **82** | 15.45 | 🟢 Long (Strong) | Momentum / Hold | High | 23/17 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:IREN** | **78** | 13.74 | 🟢 Long (Strong) | Momentum / Hold | High | 24/11 | Sentiment Strengthening UP (trend) |
| 10 | **NASDAQ:MNST** | **76** | 6.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/21 | Sentiment Strengthening UP (trend) |
| 11 | **NASDAQ:CRDO** | **75** | 9.58 | 🟢 Long (Strong) | Momentum / Hold | High | 18/22 | Sentiment Strengthening UP (trend) |
| 12 | **NYSE:IONQ** | **75** | 5.97 | 🟢 Long (Strong) | Momentum / Hold | High | 13/17 | - |
| 13 | **NASDAQ:INTC** | **74** | 10.76 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/14 | - |
| 14 | **NASDAQ:KLAC** | **72** | 5.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/30 | Sentiment Strengthening UP (trend) |
| 15 | **NASDAQ:NBIX** | **72** | 5.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/29 | - |
| 16 | **NASDAQ:WDC** | **71** | 6.1 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/23 | - |
| 17 | **NYSE:CARR** | **71** | 4.97 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/24 | - |
| 18 | **NYSE:JCI** | **71** | 5 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/28 | - |
| 19 | **NYSE:JBL** | **68** | 4.25 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/26 | - |
| 20 | **NYSE:DELL** | **67** | 11.31 | 🔴 No Trade / Short | Reversal (wait for bottom confirmation) | High | 22/18 | Bearish-to-Bullish Reversal (reversal) |
| 21 | **NASDAQ:CORZ** | **67** | 4.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/13 | Sentiment Strengthening UP (trend) |
| 22 | **NYSE:DOCN** | **67** | 4.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/24 | - |
| 23 | **NYSE:COHR** | **66** | 3.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 14/25 | - |
| 24 | **NASDAQ:AAOI** | **64** | 3.44 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/23 | - |
| 25 | **NASDAQ:AMAT** | **61** | 2.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/28 | - |
| 26 | **NASDAQ:PANW** | **61** | 4.65 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/23 | - |
| 27 | **NASDAQ:AMD** | **60** | 4.56 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 22/18 | - |
| 28 | **NYSE:QBTS** | **60** | 2.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/19 | - |
| 29 | **NYSE:ENVA** | **60** | 2.35 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/14 | - |
| 30 | **NYSE:MS** | **58** | 2.03 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/22 | - |
| 31 | **NASDAQ:POWL** | **58** | 1.99 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/20 | - |
| 32 | **NASDAQ:RMBS** | **54** | 0.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/21 | - |
| 33 | **NYSE:AIR** | **53** | 0.78 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/15 | - |
| 34 | **NYSE:JHG** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/15 | - |
| 35 | **NASDAQ:NVMI** | **52** | 0.48 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/18 | - |
| 36 | **NASDAQ:SEDG** | **51** | 0.32 | ⚪ No Trade (Weak Bullish) | Watch | Low | 5/15 | - |
| 37 | **NASDAQ:KRYS** | **51** | 0.21 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/23 | - |
| 38 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 39 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 40 | **NASDAQ:LRCX** | **50** | -0.02 | ⚪ No Trade (Weak Bullish) | Watch | Low | 10/30 | - |
| 41 | **NASDAQ:FLEX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/17 | - |
| 42 | **NYSE:SXI** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/22 | - |
| 43 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 44 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/26 | - |
| 45 | **NYSE:C** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/23 | - |
| 46 | **NASDAQ:ORRF** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 47 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 48 | **NASDAQ:BELFA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/18 | - |
| 49 | **NYSE:PFS** | **48** | -0.6 | ⚪ No Trade (Neutral) | Watch | Low | 5/18 | - |
| 50 | **NASDAQ:PLXS** | **46** | -1 | ⚪ No Trade (Neutral) | Watch | Low | 2/20 | - |
| 51 | **NASDAQ:SANM** | **43** | -1.58 | ⚪ No Trade (Neutral) | Watch | Low | 7/18 | - |
| 52 | **NASDAQ:ASML** | **38** | -3.29 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 18/19 | - |
| 53 | **NYSE:DKS** | **30** | -4.72 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 3/22 | - |
| 54 | **NYSE:TSM** | **27** | -8.5 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 17/17 | - |

---

## 🟢 Strong Long (6)

### NASDAQ:INCY

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 26.43 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 16 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Incyte Corporation (INCY) Vega Therapeutics, Inc. - M&A Call - Slidesh
- 🟢 [M&A|w4.16] Incyte Corporation (INCY) M&A Call Transcript
- 🟢 [M&A|w4.16] Incyte Strikes Agreement To Acquire Vega Therapeutics For $1.25B

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Incyte Insider Sold Shares Worth $263,900, According to a Recent SEC F

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Incyte Insider Sold Shares Worth $263,900, According to a Re |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Sector Update: Healthcare Stocks Decline Late Afternoon |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Oppenheimer Adjusts Price Target on Incyte to $107 From $90, |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Incyte To Acquire Vega Therapeutics For Up To $2 Billion |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Incyte to Acquire Star Therapeutics unit Vega; Shares Up Pre |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Incyte to Buy Vega Therapeutics For Up to $2 Billion |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nan Fung Group Sells $4.3 Million in Oculis Shares As Lead D |
| 2026-06-08 | M&A | 🟢 +1 | 4.16 | Finnhub | Incyte Corporation (INCY) Vega Therapeutics, Inc. - M&A Call |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **85** / 100 |
| Raw Weighted Score | 19.8 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 21 / 16 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Cognizant Technology Solutions (CTSH) Announces Expanded Strategic All
- 🟢 [Earnings|w3.32] CrowdStrike Beat Earnings, Raised Guidance, and Announced a 4-for-1 St
- 🟢 [Analyst Action|w3.06] CrowdStrike (CRWD) Gains Analyst Confidence on AI Demand and Platform 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] CrowdStrike: Unattractive Risk Matrix

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | CrowdStrike Beat Earnings, Raised Guidance, and Announced a  |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Cybersecurity Goes Vertical: CIBR Just Crushed the S&P 500 b |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Cognizant Technology Solutions (CTSH) Announces Expanded Str |
| 2026-06-08 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Nasdaq 100 Stocks Worth Investigating |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Cramer drops rare message on 2 surging AI stocks and SpaceX |
| 2026-06-08 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Why CrowdStrike’s Valuation Hasn’t Stopped Investors From Bu |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Jim Cramer Considers CrowdStrike Stock Decline a “Buying Opp |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Jim Cramer on Broadcom: “The Disappointing Earnings May Not  |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 15.45 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.9] Q1 Earnings Roundup: Micron (NASDAQ:MU) And The Rest Of The Semiconduc
- 🟢 [Earnings|w3.87] After Surging 918%, Is Micron Stock Still a Buy? Here's What History S
- 🟢 [Earnings|w2.76] Micron: Buckle Up For What Is About To Happen

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Why history is sounding a siren on the tech stock rout
- 🔴 [Industry|w0.5] Micron: Beware Of The $1 Trillion Bubble
- 🔴 [Industry|w0.5] Micron Is Now An Expensive Call Option On The AI Bubble

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why SOXX’s Next 12 Months Hinge on Five Tech Giants’ Capex D |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Dow Jones Futures: Trump, Iran Comments Spark Tech Rebound;  |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Semiconductor Stocks Just Had Their Worst Day in Years. Is t |
| 2026-06-09 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | Roundhill CEO spots major shift for Micron stock |
| 2026-06-09 | Industry | 🟢 +1 | 1.2 | Yahoo Fina | DRAM ETF Firm’s CEO Highlights AI Demand Altering Memory Sto |
| 2026-06-09 | Earnings | 🟢 +1 | 3.9 | Yahoo Fina | Q1 Earnings Roundup: Micron (NASDAQ:MU) And The Rest Of The  |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, June 8: Marvell, Intel, and Micron Lead  |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | Dow Jones Futures: Trump, Iran Comments Spark Tech Rebound;  |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 13.74 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 24 / 11 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Why Dell Technologies (DELL) Is Down 14.0% After AI Server Surge And N
- 🟢 [M&A|w2.52] IREN's 800MW Bet Flips the AI Power Switch
- 🟢 [Earnings|w1.95] Why IREN Limited Rallied Almost 40% in May

**📉 Bearish Factors:**
- 🔴 [Industry|w0.59] Why Is IREN Stock Falling On Thursday?
- 🔴 [Industry|w0.5] 10 Information Technology Stocks With Whale Alerts In Today's Session
- 🔴 [Industry|w0.5] IREN Stock Rises 60% in 3 Months: Time to Hold or Book Profits?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing IREN (NasdaqGS:IREN) Valuation After Recent Share  |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Why Dell Technologies (DELL) Is Down 14.0% After AI Server S |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Strategy, Coinbase, Circle and Robinhood Lead Crypto Stocks  |
| 2026-06-08 | Industry | ⚪  0 | 1.19 | Finnhub | Mega IPOs Pose Leveraged Downside Risk For The Nasdaq 100 |
| 2026-06-08 | Industry | ⚪  0 | 0.85 | Seeking Al | Crypto stocks in focus as Bitcoin steadies after deep sellof |
| 2026-06-07 | Industry | ⚪  0 | 0.5 | Yahoo Fina | 3 Stocks Under $20 to Buy Before a Broader Market Rally |
| 2026-06-07 | Industry | ⚪  0 | 0.86 | Yahoo Fina | How to Get Crypto Exposure Without Owning Crypto Directly |
| 2026-06-06 | M&A | 🟢 +1 | 2.52 | Yahoo Fina | IREN's 800MW Bet Flips the AI Power Switch |

---

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 9.58 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' Analyst Say
- 🟢 [Analyst Action|w2.52] You're Not Buying The $600M Optical Number - You're Buying Credo's Gui
- 🟢 [Earnings|w1.4] Credo Delivers Blowout Earnings --  The Stock Is Rising on AI Expectat

**📉 Bearish Factors:**
- 🔴 [Earnings|w1.64] Wall Street delivers a surprising verdict on Credo stock
- 🔴 [Buyback|w1.22] Credo Technology Group Holding Insider Sold Shares Worth $1,114,050, A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Buyback | 🔴 -1 | 1.22 | Yahoo Fina | Credo Technology Group Holding Insider Sold Shares Worth $1, |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Credo Stock Surges 78% in 3 Months: Is It Still a Buying Opp |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | Buy The Dip? Not So Fast. 6 Stocks Investors Ignored In Last |
| 2026-06-08 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' A |
| 2026-06-07 | Industry | 🟢 +1 | 1.01 | Finnhub | Credo's Next Growth Phase |
| 2026-06-06 | Industry | 🟢 +1 | 0.84 | Finnhub | Credo: Optics Ramp, Margin Upside And Bullish Charts Point T |
| 2026-06-06 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | You're Not Buying The $600M Optical Number - You're Buying C |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Applied Optoelectronics (AAOI) Soars 10% as Exec Highlights  |

---

### NYSE:IONQ

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.97 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 17 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] IonQ (IONQ) Short Float Near 20%, Is it An AI Bubble Stock to Short No
- 🟢 [Analyst Action|w1.22] Brokers Suggest Investing in IonQ (IONQ): Read This Before Placing a B
- 🟢 [Industry|w0.6] Forget This Cash-Burning Quantum Speculation and Buy the Stock With a 

**📉 Bearish Factors:**
- 🔴 [Industry|w0.7] IonQ Stock Drops 8% Friday: What's Driving The Move?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Unstoppable Quantum Computing Stocks to Buy Now |
| 2026-06-08 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Is IonQ, Inc. (IONQ) A Good Stock To Buy Now? |
| 2026-06-08 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Why Did IonQ Stock Bounce Back Today? |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | IonQ (IONQ) Short Float Near 20%, Is it An AI Bubble Stock t |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Here's How QUBT's Operational Progress Is Driving Long-Term  |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Brokers Suggest Investing in IonQ (IONQ): Read This Before P |
| 2026-06-06 | Industry | ⚪  0 | 0.5 | Yahoo Fina | IonQ (IONQ) Valuation Check After Sharp Pullback And Popular |
| 2026-06-06 | Industry | ⚪  0 | 0.72 | Yahoo Fina | The Next Quantum Computing IPO CEO Just Told CNBC ‘It Is Not |

---

## 🟢 Mid Long (16)

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 10.76 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 14 |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Cadence Announces Collaboration with Intel Foundry to Accelerate Intel
- 🟢 [Policy|w3.06] 3 Stocks to Watch as Trump Floats Giving Americans a Stake in AI
- 🟢 [Industry|w2.55] S&P 500 and Nasdaq Gain As Chipmaker Stocks Revive, While Israel-Iran 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Semiconductor Stocks Just Had Their Worst Day in Years. Is the AI Chip
- 🔴 [Industry|w1.2] Nvidia Is Doubling Down on the CPU Market. That's Bad News for AMD and

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why Marvell Stock Popped Today |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why SOXX’s Next 12 Months Hinge on Five Tech Giants’ Capex D |
| 2026-06-09 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Semiconductor Stocks Just Had Their Worst Day in Years. Is t |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why Eli Lilly Stock Climbed to a New All-Time High Today |
| 2026-06-09 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Nvidia Is Doubling Down on the CPU Market. That's Bad News f |
| 2026-06-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | S&P 500 and Nasdaq Gain As Chipmaker Stocks Revive, While Is |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Motorcar Parts of America Surged Nearly 35% Higher Today |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Prediction: The Trump Bull Market Will Soon End -- But These |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 30 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Is KLA Corporation (KLAC) A Good Stock To Buy Now?
- 🟢 [Buyback|w1.8] KLA Split And Dividend Hike Contrast With Rich Valuation And AI Hopes
- 🟢 [Analyst Action|w1.43] Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' Analyst Say

**📉 Bearish Factors:**
- 🔴 [Industry|w0.6] Entegris and KLA Corporation Stocks Trade Down, What You Need To Know
- 🔴 [Industry|w0.6] KLA (KLAC) Suffers a Larger Drop Than the General Market: Key Insights

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Should You Buy, Sell, or Hold TER Stock After a 312% Rise in |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Is KLA Corporation (KLAC) A Good Stock To Buy Now? |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Should You Buy, Sell or Hold AMAT Stock After a 167% Rise in |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Nvidia And Other 6 Chip Stocks Set For A 'Secular Upside,' A |
| 2026-06-05 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | Entegris and KLA Corporation Stocks Trade Down, What You Nee |
| 2026-06-05 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | KLA (KLAC) Suffers a Larger Drop Than the General Market: Ke |
| 2026-06-05 | Buyback | 🟢 +1 | 1.8 | Yahoo Fina | KLA Split And Dividend Hike Contrast With Rich Valuation And |
| 2026-06-05 | Industry | ⚪  0 | 0.7 | Finnhub | Zacks Industry Outlook Highlights Kla,Teradyne and Flex |

---

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **72** / 100 |
| Raw Weighted Score | 5.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 29 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Neurocrine Biosciences Presents New Clinically Meaningful Response Dat
- 🟢 [Industry|w1.08] Neurocrine Biosciences to Present New Two‑Year CRENESSITY® (crinecerfo
- 🟢 [Industry|w1.02] Neurocrine Biosciences Late-Stage Study Shows Promising Results for Ta

**📉 Bearish Factors:**
- 🔴 [Industry|w1.5] Neurocrine Biosciences Insider Sold Shares Worth $5,770,235, According

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Neurocrine Biosciences Late-Stage Study Shows Promising Resu |
| 2026-06-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Neurocrine Biosciences Presents New Clinically Meaningful Re |
| 2026-06-08 | Industry | 🟢 +1 | 0.6 | Finnhub | NEUROCRINE BIOSCIENCES INC (NASDAQ:NBIX) Nears Technical Bre |
| 2026-06-05 | Industry | 🔴 -1 | 1.5 | Yahoo Fina | Neurocrine Biosciences Insider Sold Shares Worth $5,770,235, |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Assessing Neurocrine Biosciences (NBIX) Valuation After Rece |
| 2026-06-04 | Analyst Action | 🟢 +1 | 0.6 | Yahoo Fina | RBC Capital Raises its Price Target on Neurocrine Bioscience |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Dow Jones Futures Rise, But Broadcom, CrowdStrike, Ciena Hit |
| 2026-06-03 | Industry | 🟢 +1 | 1.08 | Yahoo Fina | Neurocrine Biosciences to Present New Two‑Year CRENESSITY® ( |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 6.1 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 23 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Wells Fargo Raises Western Digital (WDC) Price Target by $75
- 🟢 [Analyst Action|w1.22] AI Demand Lifts Memory and Storage Stocks
- 🟢 [Analyst Action|w1.22] Seagate, Western Digital Stocks Climb As Analysts Hike Price Targets

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Semtech, Impinj, and Western Digital Stocks Trade Down, What You Need 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Western Digital, Microchip Technology, and Seagate Shares Ar |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | AI Demand Lifts Memory and Storage Stocks |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Up 981%, Is Western Digital Stock Still a Buy? |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Seagate, Western Digital Stocks Climb As Analysts Hike Price |
| 2026-06-08 | Industry | ⚪  0 | 2.55 | Yahoo Fina | Western Digital Says 21.3 Million Shares to Be Exchanged Wit |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | SNDK's New Business Model Boosts Profitability: Time to Buy  |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 1 Cash-Heavy Stock on Our Watchlist and 2 We Find Risky |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | BofA Securities Adjusts Western Digital Price Target to $610 |

---

### NYSE:CARR

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 4.97 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Maintained Di
- 🟢 [Buyback|w1.51] Carrier Board of Directors Declares Quarterly Cash Dividend
- 🟢 [Policy|w1.51] When Trump Cuts Tariffs on Farm and Construction Equipment, These 5 St

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Carrier Global (CARR) Is Up 7.4% After Earnings Beat And Mai |
| 2026-06-05 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Carrier Digital Leadership Award Adds Weight To Smarter Buil |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Finnhub | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-04 | Buyback | 🟢 +1 | 1.51 | Yahoo Fina | Carrier Board of Directors Declares Quarterly Cash Dividend |
| 2026-06-04 | Policy | 🟢 +1 | 1.51 | Yahoo Fina | When Trump Cuts Tariffs on Farm and Construction Equipment,  |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Carrier Global Stock Underperforming the Dow? |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Trane Technologies Stock Underperforming the Nasdaq? |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 5 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 28 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Johnson Controls International plc (JCI): 7 Best Electrical Contractin
- 🟢 [Analyst Action|w1.44] Wolfe Research Highlights Progress in Johnson Controls’ (JCI) Lean Tra
- 🟢 [Buyback|w1.3] Johnson Controls Announces Quarterly Dividend

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Wolfe Research Highlights Progress in Johnson Controls’ (JCI |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Modine's $4 Billion AI Cooling Deal Could Be a Turning P |
| 2026-06-06 | Industry | ⚪  0 | 0.5 | Finnhub | Johnson Controls International (NYSE:JCI) Technical Breakout |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls Stock: Is JCI Outperforming the Industrial  |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | 2 Reasons to Like JCI and 1 to Stay Skeptical |
| 2026-06-04 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Johnson Controls International plc (JCI): 7 Best Electrical  |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Johnson Controls International (J |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Johnson Controls appoints Irene Esteves to board of director |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.25 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 26 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] Jabil’s Quarterly Beat And Insider Selling Might Change The Case For I
- 🟢 [Earnings|w1.64] Electronic Components & Manufacturing Stocks Q1 Highlights: Jabil (NYS
- 🟢 [Earnings|w0.66] Jabil (JBL) Advances While Market Declines: Some Information for Inves

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.5] 2 Reasons JBL is Risky and 1 Stock to Buy Instead

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Can Sanmina's Advanced Healthcare Solutions Boost Its Shares |
| 2026-06-05 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Jabil’s Quarterly Beat And Insider Selling Might Change The  |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | AI Play Jabil Forms Fresh Base Amid Bounce Off 10-Week Line |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | ServiceTitan Inc. (TTAN) Q1 Earnings and Revenues Surpass Es |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Celestica Rides on Organic Growth: Reason to Buy the Stock N |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Keysight vs. Sanmina: Which Electronics Stock Is a Better Bu |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex Fuels Growth via SpinCo Separation & Electrical Power A |
| 2026-06-04 | Rumor | 🔴 -1 | 0.5 | Yahoo Fina | 2 Reasons JBL is Risky and 1 Stock to Buy Instead |

---

### NASDAQ:CORZ

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 13 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] Is Core Scientific, Inc. (CORZ) A Good Stock To Buy Now?
- 🟢 [Analyst Action|w1.22] B. Riley Raises PT on Core Scientific (CORZ), Here’s What You Need to 
- 🟢 [Analyst Action|w0.52] Wall Street Rewards Bitcoin Miners' AI Pivot: Bernstein And Morgan Sta

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Core Scientific Insider Sold Shares Worth $283,619, According to a Rec

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | B. Riley Raises PT on Core Scientific (CORZ), Here’s What Yo |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Assessing Core Scientific (CORZ) Valuation After Recent Shar |
| 2026-06-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | Is Core Scientific, Inc. (CORZ) A Good Stock To Buy Now? |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Yahoo Fina | IREN Announces Australia Data Center Plans, Analyst Shifts B |
| 2026-06-03 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Core Scientific Insider Sold Shares Worth $283,619, Accordin |
| 2026-06-03 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Wall Street Rewards Bitcoin Miners' AI Pivot: Bernstein And  |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Finnhub | 10 Information Technology Stocks Whale Activity In Today's S |

---

### NYSE:DOCN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 24 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.81] DigitalOcean AI-Native Cloud Launch Reshapes Growth Outlook And Invest
- 🟢 [Analyst Action|w1.51] Keybanc Initiates Coverage of DigitalOcean Holdings (DOCN) with Overwe
- 🟢 [Earnings|w0.66] Why Is DigitalOcean (DOCN) Up 7.9% Since Last Earnings Report?

**📉 Bearish Factors:**
- 🔴 [Policy|w0.86] MongoDB, Rapid7, and DigitalOcean Shares Are Falling, What You Need To
- 🔴 [Industry|w0.5] Assessing Whether DigitalOcean (DOCN) Looks Overvalued After Its Stron

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Is DigitalOcean Holdings, Inc. (DOCN) A Good Stock To Buy No |
| 2026-06-07 | Industry | 🔴 -1 | 0.5 | Yahoo Fina | Assessing Whether DigitalOcean (DOCN) Looks Overvalued After |
| 2026-06-07 | Earnings | 🟢 +1 | 2.81 | Yahoo Fina | DigitalOcean AI-Native Cloud Launch Reshapes Growth Outlook  |
| 2026-06-06 | Policy | 🔴 -1 | 0.86 | Yahoo Fina | MongoDB, Rapid7, and DigitalOcean Shares Are Falling, What Y |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Is Fastly (FSLY) Up 2.1% Since Last Earnings Report? |
| 2026-06-04 | Earnings | 🟢 +1 | 0.66 | Yahoo Fina | Why Is DigitalOcean (DOCN) Up 7.9% Since Last Earnings Repor |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Keybanc Initiates Coverage of DigitalOcean Holdings (DOCN) w |
| 2026-06-03 | Industry | ⚪  0 | 0.5 | Finnhub | DigitalOcean Holdings, Inc. (DOCN) Presents at Bank of Ameri |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 14 / 25 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.8] Is NVIDIA (NVDA) One of the Best Big Company Stocks to Buy Right Now?
- 🟢 [Industry|w1.02] Nvidia Gets The Headlines. But This Optical Networking Stock Was The B
- 🟢 [Industry|w1.02] 3 S&P 500 Stocks with Solid Fundamentals

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Coherent, IBM, and DXC Shares Are Falling, What You Need To Know

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Nvidia Gets The Headlines. But This Optical Networking Stock |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Corning Stock Rises. Glassmaker Scores Multibillion-Dollar D |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Applied Optoelectronics Sank 13% |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Surging AI Demand Driving Lumentum's Stronger Q4 Guidance |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 3 S&P 500 Stocks with Solid Fundamentals |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | Corning Stock Rises. Glass Maker Scores Multibillion-Dollar  |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | What's Going On With Nokia Stock Monday? |
| 2026-06-06 | Industry | 🟢 +1 | 1.8 | Yahoo Fina | Is NVIDIA (NVDA) One of the Best Big Company Stocks to Buy R |

---

### NASDAQ:AAOI

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.44 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 23 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.5] Applied Optoelectronics (AAOI) Soars 10% as Exec Highlights Growing Op
- 🟢 [Industry|w1.19] Buy The Dip? Not So Fast. 6 Stocks Investors Ignored In Last Week's Ch
- 🟢 [Industry|w1.19] Applied Optoelectronics Stock Is Surging Monday: What's Driving The Ac

**📉 Bearish Factors:**
- 🔴 [Industry|w1.02] Applied Optoelectronics Insider Sold Shares Worth $2,050,700, Accordin
- 🔴 [Industry|w1.02] Why Applied Optoelectronics Sank 13%

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Applied Optoelectronics Insider Sold Shares Worth $2,050,700 |
| 2026-06-08 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Why Applied Optoelectronics Sank 13% |
| 2026-06-08 | Industry | 🟢 +1 | 1.19 | Finnhub | Buy The Dip? Not So Fast. 6 Stocks Investors Ignored In Last |
| 2026-06-08 | Industry | 🟢 +1 | 1.19 | Finnhub | Applied Optoelectronics Stock Is Surging Monday: What's Driv |
| 2026-06-05 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Applied Optoelectronics Rides on AI Boom: More Upside Ahead? |
| 2026-06-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | Applied Optoelectronics (AAOI) Soars 10% as Exec Highlights  |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | These ETFs Owned Russell 2000's Biggest Winners Before They  |
| 2026-06-03 | Industry | 🟢 +1 | 0.5 | Finnhub | Applied Optoelectronics: The 800G And 1.6T Ramp Can Keep Dri |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 28 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.75] Applied Materials Deepens AI Chip Packaging Push As Valuation Stretche
- 🟢 [Analyst Action|w1.22] 3 chip stocks to buy after recent SOX pullback: Citi
- 🟢 [Industry|w0.5] Is Applied Materials, Inc. (AMAT) A Good Stock To Buy Now?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Applied Materials, Lam Research, and Nova Stocks Trade Down, What You 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why SOXX’s Next 12 Months Hinge on Five Tech Giants’ Capex D |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | PhysicsX Raises $300 Million At $2.4 Billion Valuation |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | 3 chip stocks to buy after recent SOX pullback: Citi |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Should You Buy, Sell or Hold AMAT Stock After a 167% Rise in |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Are Computer and Technology Stocks Lagging  Applied Material |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | 1 Cash-Producing Stock to Keep an Eye On and 2 We Brush Off |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Nvidia, Applied Materials Among Participants in PhysicsX's $ |
| 2026-06-07 | Industry | 🟢 +1 | 0.5 | Finnhub | Is Applied Materials, Inc. (AMAT) A Good Stock To Buy Now? |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 4.65 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 23 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Palo Alto Networks Delivers Strong FCF Margins - Is PANW Worth $350?
- 🟢 [Earnings|w3.28] Consumer Tech News (June 1-3): AI Demand Surge Prompts Big Earnings Be
- 🟢 [Earnings|w2.27] Is Palo Alto Stock a Buy After Issuing Robust Outlook?

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] PANW Stock Declines 9% Post Q3 Results: Should You Buy, Sell or Hold?
- 🔴 [Analyst Action|w1.22] 2 High-Flying Stocks on Our Buy List and 1 We Find Risky
- 🔴 [Industry|w1.01] Palo Alto Networks’ Mythos AI Push Meets Rich Valuation And Hot Moment

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Cybersecurity Goes Vertical: CIBR Just Crushed the S&P 500 b |
| 2026-06-08 | Analyst Action | 🔴 -1 | 1.22 | Yahoo Fina | 2 High-Flying Stocks on Our Buy List and 1 We Find Risky |
| 2026-06-08 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | PANW Stock Declines 9% Post Q3 Results: Should You Buy, Sell |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | How Is Fortinet's Stock Performance Compared to Other Cybers |
| 2026-06-08 | Earnings | ⚪  0 | 0.66 | Yahoo Fina | Here is What to Know Beyond Why Palo Alto Networks, Inc. (PA |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Palo Alto Networks Delivers Strong FCF Margins - Is PANW Wor |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Why Palo Alto Networks Stock Skyrocketed 57.1% Last Month Bu |
| 2026-06-07 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Netskope, Inc. (NTSK) A Good Stock To Buy Now? |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 4.56 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 22 / 18 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Prediction: AMD Stock Will Trade at This Price in 2027
- 🟢 [Analyst Action|w1.44] Mizuho Raises AMD Target, Citing Continued AI Infrastructure Growth
- 🟢 [Industry|w1.19] Why Advanced Micro Devices Stock Bounced Back Today

**📉 Bearish Factors:**
- 🔴 [Industry|w1.2] Nvidia Is Doubling Down on the CPU Market. That's Bad News for AMD and
- 🔴 [Analyst Action|w1.02] Advanced Micro Devices: Multiple Expansion Means We're A Strong Sell
- 🔴 [Analyst Action|w1.02] Nvidia maintains edge over AMD as agentic demand drives computing need

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Mizuho Raises AMD Target, Citing Continued AI Infrastructure |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Why SOXX’s Next 12 Months Hinge on Five Tech Giants’ Capex D |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Saia and Gibraltar Shares Are Soaring, What You Need To Know |
| 2026-06-09 | Industry | 🔴 -1 | 1.2 | Yahoo Fina | Nvidia Is Doubling Down on the CPU Market. That's Bad News f |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Shoals, Rocket Lab, and Blink Charging Shares Are Soaring, W |
| 2026-06-09 | M&A | ⚪  0 | 1.68 | Yahoo Fina | JPMorgan Chase Tests Tokenized Deposits And Quantum AI For F |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Should You Buy AI Chip Stocks on the Dip? Words from Nvidia' |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why Dell Technologies (DELL) Is Down 14.0% After AI Server S |

---

### NYSE:QBTS

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 19 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.45] D-Wave CEO Says Quantum Computing Is Moving Into Daily Business Operat
- 🟢 [Industry|w0.6] D-Wave Quantum Roadmap And Federal Backing Reframe Fault Tolerance Tim
- 🟢 [Industry|w0.6] D-Wave Unveils Fault-Tolerant Quantum Computing Plan: What's Ahead?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.7] D-Wave Quantum Stock Is Sliding Friday: What's Driving The Action?
- 🔴 [Industry|w0.6] Why D-Wave Quantum Stock Just Crashed
- 🔴 [Industry|w0.5] Rigetti, D-Wave, IonQ Stocks Sink as Quantinuum's $1.5 Billion IPO Nea

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-06 | Industry | ⚪  0 | 0.5 | Yahoo Fina | The Next Quantum Computing IPO CEO Just Told CNBC ‘It Is Not |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Quantinuum Stock Falls After Uninspiring Quantum IPO Debut.  |
| 2026-06-05 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | D-Wave Quantum Roadmap And Federal Backing Reframe Fault Tol |
| 2026-06-05 | Industry | 🔴 -1 | 0.6 | Yahoo Fina | Why D-Wave Quantum Stock Just Crashed |
| 2026-06-05 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | D-Wave Unveils Fault-Tolerant Quantum Computing Plan: What's |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Here's How Financial Strength Remains a Key Advantage for QU |
| 2026-06-05 | Industry | 🔴 -1 | 0.7 | Finnhub | D-Wave Quantum Stock Is Sliding Friday: What's Driving The A |
| 2026-06-05 | M&A | 🟢 +1 | 2.45 | Finnhub | D-Wave CEO Says Quantum Computing Is Moving Into Daily Busin |

---

### NYSE:ENVA

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.35 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 14 |

**📈 Bullish Factors:**
- 🟢 [M&A|w1.76] Enova's Bank Deal Trend: How It Could Shift Its Funding Model?
- 🟢 [Industry|w0.6] Here's Why Enova International (ENVA) is a Strong Growth Stock
- 🟢 [Industry|w0.5] Enova's Small Business Lending Surge: What's Driving the Growth?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.51] 3 Small-Cap Stocks That Concern Us

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | 3 Small-Cap Stocks That Concern Us |
| 2026-06-07 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Enova International (ENVA) Valuation Check After Strong Mult |
| 2026-06-05 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | Here's Why Enova International (ENVA) is a Strong Growth Sto |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Enova Stock Outlook: What's Driving Growth and Key Risks Ahe |
| 2026-06-04 | M&A | 🟢 +1 | 1.76 | Yahoo Fina | Enova's Bank Deal Trend: How It Could Shift Its Funding Mode |
| 2026-06-04 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Enova's Small Business Lending Surge: What's Driving the Gro |

---

## 🟡 Cautious Long (1)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 15.51 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3] Why Marvell Stock Popped Today
- 🟢 [Industry|w2.98] MRVL Stock Alert: Marvell Technologies to Join S&P 500
- 🟢 [Industry|w2.98] Why Marvell Technology Stock Popped Today

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Why history is sounding a siren on the tech stock rout

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🟢 +1 | 3 | Yahoo Fina | Why Marvell Stock Popped Today |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Semiconductor Stocks Just Had Their Worst Day in Years. Is t |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | S&P 500, Nasdaq end up as chipmakers rebound |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Advanced Energy (AEIS) Shares Skyrocket, What You Need To Kn |
| 2026-06-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Marvell Technology (MRVL) Stock Is Up Today |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | After Skyrocketing 340% in Just 12 Months, Is Marvell Techno |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, June 8: Marvell, Intel, and Micron Lead  |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Recap: Marvell Technology, Apple, Broadcom,  |

---

## ⚠️ Overheated (5)

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 42.85 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 16 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / Catalyst Burst (multiple strong items same day) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.2] Forget the Big Chipmakers for a Minute: This Overlooked AI Stock Is Up
- 🟢 [M&A|w4.16] Amazon, Corning Agree to Multibillion-Dollar Fiber Supply Pact for US 
- 🟢 [M&A|w4.16] Amazon–Corning AI deal, Marvell stock surges on S&P 500 inclusion

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | M&A | 🟢 +1 | 4.2 | Yahoo Fina | Forget the Big Chipmakers for a Minute: This Overlooked AI S |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Corning (GLW) Shares Skyrocket, What You Need To Know |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Corning Lands Multibillion-Dollar Amazon Deal as Data Center |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech Stocks Gain Late Afternoon |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Corning Jumps 9.5% As Amazon Signs Multibillion-Dollar Fiber |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Corning Stock Rises. Glassmaker Scores Multibillion-Dollar D |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Sector Update: Tech |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Corning’s Amazon Data Center Deal Deepens AI Ties Despite Va |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **94** / 100 |
| Raw Weighted Score | 11.82 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 13 / 24 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Electronic Components & Manufacturing Stocks Q1 Earnings: TTM Technolo
- 🟢 [Industry|w1.5] How Investors May Respond To TTM Technologies (TTMI) Expanding And Ref
- 🟢 [Analyst Action|w1.22] 3 Reasons Why Growth Investors Shouldn't Overlook TTM (TTMI)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Electronic Components & Manufacturing Stocks Q1 Earnings: TT |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | 3 Reasons Why Growth Investors Shouldn't Overlook TTM (TTMI) |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Does TTM (TTMI) Have the Potential to Rally 26.6% as Wall St |
| 2026-06-05 | Industry | 🟢 +1 | 1.5 | Yahoo Fina | How Investors May Respond To TTM Technologies (TTMI) Expandi |
| 2026-06-05 | Industry | 🟢 +1 | 0.6 | Yahoo Fina | TTM Technologies Stock Is Up 450% in a Year and Could Still  |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Boost Your Portfolio Returns With These 4 Top-Performing Liq |
| 2026-06-05 | Industry | ⚪  0 | 0.5 | Finnhub | $1000 Invested In TTM Technologies 20 Years Ago Would Be Wor |
| 2026-06-05 | Industry | 🟢 +1 | 0.7 | Finnhub | TTM Technologies: Strong Demand Suggests The Transformation  |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 17.32 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] 5 Revealing Analyst Questions From Hewlett Packard Enterprise’s Q1 Ear
- 🟢 [Earnings|w2.73] What's the Better Stock Right Now: Hewlett Packard Enterprise or Dell?
- 🟢 [Earnings|w2.27] AI Server Earnings: Wall Street Sees One Clear Standout

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Dell Soars 54%, HP Enterprise Rockets 59% in a Month as AI-S |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | DELL's Strong Partner Network Drives ISG Growth: What's Ahea |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Understanding Hewlett Packard Enterprise (HPE) Reliance on I |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Barclays Raises Hewlett Packard Enterprise (HPE) Price Targe |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Hewlett Packard Enterprise (HPE) Transitions to Unified Glob |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | 5 Revealing Analyst Questions From Hewlett Packard Enterpris |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | 5 Stock Picks Last Week From Wall Street's Most Accurate Ana |
| 2026-06-07 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | AI stock mania is taking over the markets in 2026 |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **89** / 100 |
| Raw Weighted Score | 27.66 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 20 / 13 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.57] Lilly Just Announced 3 Infectious Disease Acquisitions in 1 Day. Is Th
- 🟢 [Industry|w3] Why Eli Lilly (LLY) Stock Is Up Today
- 🟢 [Industry|w3] Why Did AAPL, OSCR, LLY Stocks Hit 52-Week Highs Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🟢 +1 | 3 | Yahoo Fina | Why Eli Lilly (LLY) Stock Is Up Today |
| 2026-06-09 | Industry | 🟢 +1 | 3 | Yahoo Fina | Why Did AAPL, OSCR, LLY Stocks Hit 52-Week Highs Today? |
| 2026-06-09 | Industry | 🟢 +1 | 3 | Yahoo Fina | Why Eli Lilly Stock Climbed to a New All-Time High Today |
| 2026-06-08 | M&A | 🟢 +1 | 3.57 | Yahoo Fina | Lilly Just Announced 3 Infectious Disease Acquisitions in 1  |
| 2026-06-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | LLY Stock Climbs As Oral GLP-1 Pill Beats Novo Nordisk, Astr |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Micron, Intel, Tesla, Apple, Lilly, and More Stocks That Exp |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | Big Pharma Stock Eli Lilly Concocts New Buy Zone |
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Why Eli Lilly, In A Buy Zone, Is Still The 'Clear Winner' Of |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 21 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Record Quarter And Bigger Buyback Could Be A Game Changer For Monster 
- 🟢 [Analyst Action|w1.22] Morgan Stanley Raises PT on Monster Beverage (MNST) Stock
- 🟢 [Industry|w0.6] MONSTER BEVERAGE CORP (NASDAQ:MNST) Hits Perfect Technical Score with 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Morgan Stanley Raises PT on Monster Beverage (MNST) Stock |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | CELH and Zero-Sugar Energy Trends to Watch Through 2026 |
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | How The Monster Beverage (MNST) Narrative Is Evolving Withou |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Record Quarter And Bigger Buyback Could Be A Game Changer Fo |
| 2026-06-08 | Industry | ⚪  0 | 0.6 | Finnhub | Is CELH a Buy After Q1 2026 Results and Share Buybacks? |
| 2026-06-08 | Industry | 🟢 +1 | 0.6 | Finnhub | MONSTER BEVERAGE CORP (NASDAQ:MNST) Hits Perfect Technical S |
| 2026-06-07 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is It Too Late To Consider Monster Beverage (MNST) After A 4 |
| 2026-06-05 | Industry | 🟢 +1 | 0.5 | Finnhub | Monster Beverage Corp (NASDAQ:MNST) Passes Trend Template an |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 15.51 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 18 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w3] Why Marvell Stock Popped Today
- 🟢 [Industry|w2.98] MRVL Stock Alert: Marvell Technologies to Join S&P 500
- 🟢 [Industry|w2.98] Why Marvell Technology Stock Popped Today

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Why history is sounding a siren on the tech stock rout

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Industry | 🟢 +1 | 3 | Yahoo Fina | Why Marvell Stock Popped Today |
| 2026-06-09 | Industry | ⚪  0 | 0.6 | Yahoo Fina | Semiconductor Stocks Just Had Their Worst Day in Years. Is t |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | S&P 500, Nasdaq end up as chipmakers rebound |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Advanced Energy (AEIS) Shares Skyrocket, What You Need To Kn |
| 2026-06-08 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Marvell Technology (MRVL) Stock Is Up Today |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | After Skyrocketing 340% in Just 12 Months, Is Marvell Techno |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stock Market Today, June 8: Marvell, Intel, and Micron Lead  |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks to Watch Recap: Marvell Technology, Apple, Broadcom,  |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 11.31 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 22 / 18 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Dell Technologies (DELL) Price Target Increased by 149.33% to 487.69
- 🟢 [Earnings|w3.32] Why Dell Technologies (DELL) Is Down 14.0% After AI Server Surge And N
- 🟢 [Earnings|w3.32] Dell Soars 54%, HP Enterprise Rockets 59% in a Month as AI-Server Dema

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Political Scrutiny Adds New Risk Layer To Dell Technologies Valuation 
- 🔴 [Black Swan|w3.15] Elizabeth Warren Singles Out Micron, Dell And Eli Lilly As Just 3 Of T
- 🔴 [Industry|w1.02] Analysis-Nvidia's AI PC push banks on unproven demand beyond niche use

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Real Risk Inside Apple Stock |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why Dell Technologies (DELL) Is Down 14.0% After AI Server S |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Dell Soars 54%, HP Enterprise Rockets 59% in a Month as AI-S |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | DELL's Strong Partner Network Drives ISG Growth: What's Ahea |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AMD Expands UK AI Investment |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Super Micro Computer Stock Outperforming the S&P 500? |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AMD commits £2 billion to UK AI supercomputers and research |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AHEAD Named Dell Technologies North America Channel Partner  |

---

## 🔴 Avoid / Short (4)

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 11.31 |
| Trading Signal | **🔴 No Trade / Short** |
| Strategy | Black swan risk — avoid until event clarity |
| Suitable For | Reversal (wait for bottom confirmation) |
| Confidence | High |
| News Kept / Dropped | 22 / 18 |
| Patterns | Bearish-to-Bullish Reversal (reversal) / WARNING: Sentiment Divergence (black swan masked by noise) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Dell Technologies (DELL) Price Target Increased by 149.33% to 487.69
- 🟢 [Earnings|w3.32] Why Dell Technologies (DELL) Is Down 14.0% After AI Server Surge And N
- 🟢 [Earnings|w3.32] Dell Soars 54%, HP Enterprise Rockets 59% in a Month as AI-Server Dema

**📉 Bearish Factors:**
- 🔴 [Black Swan|w4.46] Political Scrutiny Adds New Risk Layer To Dell Technologies Valuation 
- 🔴 [Black Swan|w3.15] Elizabeth Warren Singles Out Micron, Dell And Eli Lilly As Just 3 Of T
- 🔴 [Industry|w1.02] Analysis-Nvidia's AI PC push banks on unproven demand beyond niche use

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | The Real Risk Inside Apple Stock |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Why Dell Technologies (DELL) Is Down 14.0% After AI Server S |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Dell Soars 54%, HP Enterprise Rockets 59% in a Month as AI-S |
| 2026-06-08 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | DELL's Strong Partner Network Drives ISG Growth: What's Ahea |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AMD Expands UK AI Investment |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is Super Micro Computer Stock Outperforming the S&P 500? |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | AMD commits £2 billion to UK AI supercomputers and research |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | AHEAD Named Dell Technologies North America Channel Partner  |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **38** / 100 |
| Raw Weighted Score | -3.29 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 18 / 19 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] 5 Stocks to Boost Your Portfolio on Soaring Semiconductor Sales
- 🟢 [Industry|w1.02] ASML Holding N.V. (ASML) Is A Top AI Stock In Billionaire Ken Fisher’s
- 🟢 [Industry|w0.86] Elon Musk In Direct Talks With ASML For $119B TeraFab Chip Plant: CEO 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] ASML: Three Risks The Market Is Completely Ignoring
- 🔴 [Industry|w1.02] Wall Street Bank Warns SpaceX IPO Could Trigger Large Sell-Off in Popu
- 🔴 [Industry|w0.84] Photronics, Qorvo, and Texas Instruments Shares Are Falling, What You 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Rumor | ⚪  0 | 0.72 | Yahoo Fina | ASML Weighs Musk Terafab Talks Against Valuation And Governa |
| 2026-06-08 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Wall Street Bank Warns SpaceX IPO Could Trigger Large Sell-O |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | 5 Stocks to Boost Your Portfolio on Soaring Semiconductor Sa |
| 2026-06-08 | Buyback | ⚪  0 | 1.22 | Yahoo Fina | ASML reports transactions under its current share buyback pr |
| 2026-06-08 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | ASML Holding N.V. (ASML) Is A Top AI Stock In Billionaire Ke |
| 2026-06-08 | Industry | 🔴 -1 | 1.19 | Finnhub | ASML: Three Risks The Market Is Completely Ignoring |
| 2026-06-07 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Elon Musk In Direct Talks With ASML For $119B TeraFab Chip P |
| 2026-06-07 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Is ASML Holding N.V. (ASML) A Good Stock To Buy Now? |

---

### NYSE:DKS

| Metric | Detail |
|--------|--------|
| Normalized Score | **30** / 100 |
| Raw Weighted Score | -4.72 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 3 / 22 |

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] How Investors May Respond To DICK'S Sporting Goods (DKS) Strong Q1, Lo
- 🔴 [Earnings|w1.4] 5 Must-Read Analyst Questions From Dick's’s Q1 Earnings Call

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-08 | Industry | ⚪  0 | 1.02 | Yahoo Fina | A Look At DICK'S Sporting Goods (DKS) Valuation As Short Ter |
| 2026-06-08 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | How Investors May Respond To DICK'S Sporting Goods (DKS) Str |
| 2026-06-03 | Earnings | 🔴 -1 | 1.4 | Yahoo Fina | 5 Must-Read Analyst Questions From Dick's’s Q1 Earnings Call |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **27** / 100 |
| Raw Weighted Score | -8.5 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 17 / 17 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Apple's AI Ambition Has A Picks-and-Shovels Trade —  Here's Who Could 
- 🟢 [Buyback|w0.88] Recent Filing Shows That Rep. Cleo Fields Bought Over $1K Worth of App
- 🟢 [Industry|w0.7] Why Micron Is Still 'Pretty Cheap' Despite Its AI-Driven Run: Legato C

**📉 Bearish Factors:**
- 🔴 [Policy|w3.6] US lawmakers urge tighter rules on contract chipmakers supplying Chine
- 🔴 [M&A|w3.57] Alphabet Intel Chip Pact Reshapes AI Supply Chain And Investor Outlook
- 🔴 [Earnings|w2.27] What's Going On With Taiwan Semiconductor Stock Friday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-09 | Policy | 🔴 -1 | 3.6 | Yahoo Fina | US lawmakers urge tighter rules on contract chipmakers suppl |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Why TSMC (TSM) Outpaced the Stock Market Today |
| 2026-06-08 | M&A | 🔴 -1 | 3.57 | Yahoo Fina | Alphabet Intel Chip Pact Reshapes AI Supply Chain And Invest |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Tech-Heavy Nasdaq Snaps 3-Day Losing Streak |
| 2026-06-08 | Industry | ⚪  0 | 0.51 | Yahoo Fina | US Equity Markets Mixed After Trump Manages to Keep Ceasefir |
| 2026-06-08 | Rumor | 🔴 -1 | 0.61 | Yahoo Fina | Intel Stock Jumps As Google Reportedly Signs On As Foundry C |
| 2026-06-08 | Rumor | 🔴 -1 | 0.61 | Yahoo Fina | Google Orders 3 Million TPUs From Intel |
| 2026-06-08 | Rumor | 🔴 -1 | 0.61 | Yahoo Fina | Intel Jumps After Reports of Breakthrough Foundry Deals with |

---

## ⚪ Watch / Neutral (22)

### NYSE:MS
- Score: 58/100 | raw: 2.03 | News: 10 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:POWL
- Score: 58/100 | raw: 1.99 | News: 3 kept / 20 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:RMBS
- Score: 54/100 | raw: 0.86 | News: 1 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 53/100 | raw: 0.78 | News: 8 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 52/100 | raw: 0.5 | News: 4 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:NVMI
- Score: 52/100 | raw: 0.48 | News: 6 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SEDG
- Score: 51/100 | raw: 0.32 | News: 5 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:KRYS
- Score: 51/100 | raw: 0.21 | News: 10 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | No relevant news in window

### NASDAQ:LRCX
- Score: 50/100 | raw: -0.02 | News: 10 kept / 30 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:FLEX
- Score: 50/100 | raw: 0 | News: 0 kept / 17 dropped | LLM unavailable or call failed (no keyword fallback)

### NYSE:SXI
- Score: 50/100 | raw: 0 | News: 0 kept / 22 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 14 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:C
- Score: 50/100 | raw: 0 | News: 0 kept / 23 dropped | LLM unavailable or call failed (no keyword fallback)

### NASDAQ:ORRF
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:BELFA
- Score: 50/100 | raw: 0 | News: 3 kept / 18 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:PFS
- Score: 48/100 | raw: -0.6 | News: 5 kept / 18 dropped | No clear directional bias — stay flat

### NASDAQ:PLXS
- Score: 46/100 | raw: -1 | News: 2 kept / 20 dropped | No clear directional bias — stay flat

### NASDAQ:SANM
- Score: 43/100 | raw: -1.58 | News: 7 kept / 18 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-09T04:01:48.260Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*