# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-06-04  |  **News Window:** 2026-05-28 ~ 2026-06-04
**Stock Pool:** us_selected.txt (75)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NYSE:DY** | **96** | 11.76 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/32 | Sentiment Strengthening UP (trend) |
| 2 | **NASDAQ:FIVE** | **96** | 45.2 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 19/9 | Sentiment Strengthening UP (trend) |
| 3 | **NASDAQ:IREN** | **95** | 23.17 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 15/20 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:HPE** | **93** | 11.1 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/32 | Sentiment Strengthening UP (trend) |
| 5 | **NYSE:COHR** | **93** | 10.35 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/20 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:CRDO** | **92** | 22.68 | 🟢 Long (Strong) | Momentum / Hold | High | 18/12 | Sentiment Strengthening UP (trend) |
| 7 | **NASDAQ:ASML** | **87** | 17.41 | 🟢 Long (Strong) | Momentum / Hold | High | 21/15 | Sentiment Strengthening UP (trend) |
| 8 | **NASDAQ:LITE** | **87** | 8.8 | 🟢 Long (Strong) | Momentum / Hold | High | 7/33 | Sentiment Strengthening UP (trend) |
| 9 | **NASDAQ:MRVL** | **84** | 9.67 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 12/18 | Sentiment Strengthening UP (trend) |
| 10 | **NYSE:CIEN** | **83** | 8.01 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/22 | Sentiment Strengthening UP (trend) |
| 11 | **NYSE:MOD** | **82** | 7.68 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 6/17 | Overheated Sentiment (one-sided bullish) |
| 12 | **NYSE:DELL** | **81** | 16.66 | 🟢 Long (Strong) | Momentum / Hold | High | 23/17 | Sentiment Strengthening UP (trend) |
| 13 | **NASDAQ:TLN** | **80** | 7.29 | 🟢 Long (Strong) | Momentum / Hold | High | 3/12 | - |
| 14 | **NASDAQ:NBIS** | **79** | 9.96 | 🟢 Long (Strong) | Momentum / Hold | High | 11/29 | Sentiment Strengthening UP (trend) |
| 15 | **NYSE:JCI** | **77** | 6.49 | 🟢 Long (Strong) | Momentum / Hold | High | 9/25 | Sentiment Strengthening UP (trend) |
| 16 | **NYSE:GNRC** | **76** | 6.23 | 🟢 Long (Strong) | Momentum / Hold | High | 6/23 | - |
| 17 | **NYSE:KEYS** | **75** | 5.92 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 9/27 | Overheated Sentiment (one-sided bullish) |
| 18 | **NYSE:QBTS** | **74** | 5.72 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/28 | - |
| 19 | **NASDAQ:AMD** | **71** | 7.42 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 15/16 | - |
| 20 | **NASDAQ:AMAT** | **70** | 4.71 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 9/29 | Overheated Sentiment (one-sided bullish) |
| 21 | **NASDAQ:NBIX** | **70** | 4.7 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/27 | Overheated Sentiment (one-sided bullish) |
| 22 | **NASDAQ:LRCX** | **69** | 4.63 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/28 | - |
| 23 | **NASDAQ:TTMI** | **67** | 4.05 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/29 | - |
| 24 | **NYSE:FN** | **67** | 4.13 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/27 | - |
| 25 | **NYSE:NVT** | **66** | 3.75 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 7/30 | Overheated Sentiment (one-sided bullish) |
| 26 | **NYSE:CLS** | **65** | 3.7 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/32 | - |
| 27 | **NYSE:C** | **65** | 3.49 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/30 | - |
| 28 | **NYSE:FCX** | **65** | 3.55 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/27 | - |
| 29 | **NASDAQ:WDC** | **64** | 3.57 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 10/30 | - |
| 30 | **NASDAQ:APLD** | **63** | 3.09 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/15 | - |
| 31 | **NASDAQ:FLEX** | **63** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 8/25 | - |
| 32 | **NYSE:DOCN** | **62** | 2.86 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/21 | - |
| 33 | **NYSE:P** | **62** | 3.36 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/28 | - |
| 34 | **NASDAQ:MTSI** | **62** | 2.96 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/20 | - |
| 35 | **NASDAQ:MNST** | **62** | 2.91 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 6/28 | - |
| 36 | **NASDAQ:MU** | **61** | 3.51 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 12/20 | Bearish-to-Bullish Reversal (reversal) |
| 37 | **NYSE:JBL** | **61** | 2.54 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/26 | - |
| 38 | **NASDAQ:ADI** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 7/30 | - |
| 39 | **NYSE:GLW** | **61** | 2.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/37 | - |
| 40 | **NASDAQ:ONDS** | **61** | 2.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 1/20 | - |
| 41 | **NASDAQ:KLAC** | **60** | 2.38 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 9/30 | - |
| 42 | **NYSE:TSM** | **59** | 2.04 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/32 | - |
| 43 | **NYSE:JHG** | **57** | 1.78 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/15 | - |
| 44 | **NYSE:AIR** | **56** | 1.43 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/9 | - |
| 45 | **NASDAQ:PANW** | **56** | 2.46 | ⚪ No Trade (Weak Bullish) | Watch | Low | 11/27 | - |
| 46 | **NASDAQ:ERIC** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/17 | - |
| 47 | **NYSE:SXI** | **54** | 0.86 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 48 | **NASDAQ:PLXS** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/19 | - |
| 49 | **NASDAQ:AEHR** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/12 | - |
| 50 | **NYSE:BE** | **53** | 0.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/28 | - |
| 51 | **NYSE:ENS** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/11 | - |
| 52 | **NASDAQ:MPWR** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/26 | - |
| 53 | **NASDAQ:EQIX** | **52** | 0.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 8/31 | - |
| 54 | **NYSE:MS** | **51** | 0.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 6/28 | - |
| 55 | **NYSE:IRM** | **51** | 0.34 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/21 | - |
| 56 | **NASDAQ:SANM** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/23 | - |
| 57 | **NASDAQ:ADEA** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/20 | - |
| 58 | **NASDAQ:CPRX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/13 | - |
| 59 | **NASDAQ:CORZ** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 60 | **NYSE:NOK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/19 | - |
| 61 | **OTC:ABBNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 62 | **NASDAQ:SEDG** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/11 | - |
| 63 | **NYSE:SMP** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/19 | - |
| 64 | **NYSE:FOR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 14/26 | - |
| 65 | **NYSE:CARR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/27 | - |
| 66 | **OTC:SBGSY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/10 | - |
| 67 | **NASDAQ:NVMI** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/22 | - |
| 68 | **NYSE:IFS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/26 | - |
| 69 | **NASDAQ:RMBS** | **46** | -1.01 | ⚪ No Trade (Neutral) | Watch | Low | 4/21 | - |
| 70 | **NASDAQ:VIAV** | **46** | -1 | ⚪ No Trade (Neutral) | Watch | Low | 4/16 | - |
| 71 | **NASDAQ:AVGO** | **44** | -8.7 | ⚪ No Trade (Neutral) | Watch | Low | 24/2 | - |
| 72 | **NASDAQ:AAPL** | **43** | -1.83 | ⚪ No Trade (Neutral) | Watch | Low | 13/24 | - |
| 73 | **NYSE:DKS** | **42** | -1.81 | ⚪ No Trade (Neutral) | Watch | Low | 3/32 | - |
| 74 | **NYSE:RIO** | **40** | -2.33 | ⚪ No Trade (Neutral) | Watch | Low | 10/11 | - |
| 75 | **NASDAQ:POWL** | **33** | -4.18 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 4/19 | Sentiment Weakening DOWN (trend) |

---

## 🟢 Strong Long (8)

### NASDAQ:CRDO

| Metric | Detail |
|--------|--------|
| Normalized Score | **92** / 100 |
| Raw Weighted Score | 22.68 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 18 / 12 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] The AI Bottleneck Just Shifted Toward Credo
- 🟢 [Earnings|w3.28] Credo Just Told The Market Something Bigger Than Earnings
- 🟢 [Earnings|w3.28] Credo Says Q4 Revenue Alone Surpassed Its Entire Fiscal 2025 Sales

**📉 Bearish Factors:**
- 🔴 [Earnings|w0.66] Credo Earnings: Why This Stock Is Now My Largest Holding

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Credo Technology: Cheap On Sales, Not So Cheap On Profit |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | The AI Bottleneck Just Shifted Toward Credo |
| 2026-06-02 | Earnings | 🔴 -1 | 0.66 | Finnhub | Credo Earnings: Why This Stock Is Now My Largest Holding |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Roth Capital Maintains Buy on Credo Technology Group, Raises |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Jefferies Maintains Buy on Credo Technology Group, Raises Pr |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | TD Cowen Maintains Buy on Credo Technology Group, Raises Pri |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Susquehanna Maintains Positive on Credo Technology Group, Ra |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | JP Morgan Maintains Overweight on Credo Technology Group, Ra |

---

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 17.41 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 21 / 15 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] ASML Becomes Europe's Most Valuable Stock Ever
- 🟢 [M&A|w2.94] ASML And Tata Electronics Expand India Chip Ambitions And Investor Sto
- 🟢 [Buyback|w2.52] ASML reports transactions under its current share buyback program

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.6] ASML: The Best Semiconductor Stock? Maybe; The Best Investment? Not An
- 🔴 [Industry|w0.5] ASML's Ride Won't Last Forever

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | Marvell, AMD Rally, Lead Chip Stocks To Record High |
| 2026-06-03 | M&A | 🟢 +1 | 1.43 | Yahoo Fina | Why ASML Stock Rose 13% in May |
| 2026-06-03 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | ASML (ASML) Gains As Market Dips: What You Should Know |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Apple Stock, Google And More Lure Investors In Frothy Market |
| 2026-06-03 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | ASML Becomes Europe's Most Valuable Stock Ever |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | JP Morgan raises ASML estimates as chipmaker signals it can  |
| 2026-06-03 | Analyst Action | ⚪  0 | 0.61 | Yahoo Fina | ASML (ASML) Is Considered a Good Investment by Brokers: Is T |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | ASML Holding N.V. (ASML) Gains from AI infrastructure Build  |

---

### NASDAQ:LITE

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.8 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 7 / 33 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.2] Is It Too Late To Consider Lumentum Holdings (LITE) After The US$2b Nv
- 🟢 [Industry|w2.98] Nvidia Optics Shift Puts Lumentum At Center Of AI Data Centers
- 🟢 [Industry|w1.02] LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Using ‘Optics 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | M&A | 🟢 +1 | 4.2 | Yahoo Fina | Is It Too Late To Consider Lumentum Holdings (LITE) After Th |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Seeking Al | Lumentum Holdings Inc. (LITE) Presents at Bank of America 20 |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Lumentum Holdings’ (LITE) Upswing Dampens Wasatch Long/Short |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Usin |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Lumentum Holdings Inc. (LITE) Presents at Bank of America 20 |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Alphabet's New $80B Spending: What AI Stock To Buy |
| 2026-06-03 | Industry | 🟢 +1 | 2.98 | Finnhub | Nvidia Optics Shift Puts Lumentum At Center Of AI Data Cente |

---

### NYSE:DELL

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 16.66 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 23 / 17 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Dell Stock Just Soared 47%. 3 Reasons Investors Are Celebrating.
- 🟢 [Earnings|w3.32] DELL Jumps 37% Post Q1 Earnings: Here is Why the Stock is a Buy
- 🟢 [Earnings|w2.34] Dell Technologies Inc. (DELL) Presents at Bank of America 2026 Global 

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.08] Dell: Eye-Popping Q1 Numbers With More To Come, But Take Profits Now (
- 🔴 [Industry|w1.02] Nvidia Shakes Up PC Market With Its Surprise Entry
- 🔴 [Industry|w0.85] Apple’s MacBook Neo a silver lining, but PC market heading for 'turbul

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🔴 -1 | 1.02 | Yahoo Fina | Nvidia Shakes Up PC Market With Its Surprise Entry |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Supermicro Stock Soars 85% in a Month. It’s Time to Worry Ab |
| 2026-06-03 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | President Donald Trump owns roughly $5M in surging AI stock |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | The AI Boom is Even Bigger than We Thought |
| 2026-06-03 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | DELL Jumps 37% Post Q1 Earnings: Here is Why the Stock is a  |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.22 | Yahoo Fina | Dell Technologies (DELL) Upgraded to Strong Buy: What Does I |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Penguin Solutions Recognized as Dell Technologies Global All |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Super Micro Computer Just Unveiled the New AMD Helios Platfo |

---

### NASDAQ:TLN

| Metric | Detail |
|--------|--------|
| Normalized Score | **80** / 100 |
| Raw Weighted Score | 7.29 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 3 / 12 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.94] Talen Energy Receives Regulatory Clearances for Lawrenceburg, Waterfor
- 🟢 [M&A|w2.94] Talen Energy Obtains Regulatory Clearances For Lawrenceburg, Waterford
- 🟢 [M&A|w1.41] Talen Energy: Another Day, Another Deal, Another Repricing

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | M&A | 🟢 +1 | 1.41 | Finnhub | Talen Energy: Another Day, Another Deal, Another Repricing |
| 2026-06-01 | M&A | 🟢 +1 | 2.94 | Finnhub | Talen Energy Receives Regulatory Clearances for Lawrenceburg |
| 2026-06-01 | M&A | 🟢 +1 | 2.94 | Finnhub | Talen Energy Obtains Regulatory Clearances For Lawrenceburg, |

---

### NASDAQ:NBIS

| Metric | Detail |
|--------|--------|
| Normalized Score | **79** / 100 |
| Raw Weighted Score | 9.96 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 11 / 29 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Nebius And The Next Phase Of AI
- 🟢 [Analyst Action|w2.59] Compass Point Raises Price Target on Nebius Group (NBIS) Following Str
- 🟢 [Analyst Action|w2.16] Citi Just Raised Its Price Target on Nebius to a New Street High of $2

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] ChatGPT Stock Portfolio: Trimming Nebius Group (NBIS) After a ‘Monster

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Nebius And The Next Phase Of AI |
| 2026-06-02 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Rubin Validation Sparks 14% Rally in CRWV: What's Ahead for  |
| 2026-06-02 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Nebius Is Targeting 540% Data Center Revenue Growth by Year- |
| 2026-06-02 | Industry | ⚪  0 | 0.86 | Yahoo Fina | Bloom Energy’s AI Power Deals Test Valuation And Execution E |
| 2026-06-02 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Compass Point Raises Price Target on Nebius Group (NBIS) Fol |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Why Is Nebius Stock Surging Tuesday? |
| 2026-06-02 | Analyst Action | ⚪  0 | 3.02 | Finnhub | BNP Paribas Initiates Coverage On Nebius Group with Neutral  |
| 2026-06-01 | Analyst Action | 🟢 +1 | 2.16 | Yahoo Fina | Citi Just Raised Its Price Target on Nebius to a New Street  |

---

### NYSE:JCI

| Metric | Detail |
|--------|--------|
| Normalized Score | **77** / 100 |
| Raw Weighted Score | 6.49 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 9 / 25 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Buyback|w3.57] Johnson Controls Announces Quarterly Dividend
- 🟢 [Analyst Action|w1.21] Johnson Controls Seeing Stronger Long-Term Amid Turnaround, RBC Says
- 🟢 [Analyst Action|w1.21] UBS Maintains Buy on Johnson Controls Intl, Raises Price Target to $18

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | Johnson Controls appoints Irene Esteves to board of director |
| 2026-06-03 | Buyback | 🟢 +1 | 3.57 | Finnhub | Johnson Controls Announces Quarterly Dividend |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Why Is Johnson Controls (JCI) Stock Rocketing Higher Today |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Johnson Controls Seeing Stronger Long-Term Amid Turnaround,  |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Sensormatic Solutions Expands Options for Sewn-in RFID Sourc |
| 2026-06-02 | Analyst Action | ⚪  0 | 1.21 | Finnhub | RBC Capital Reiterates Sector Perform on Johnson Controls In |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | UBS Maintains Buy on Johnson Controls Intl, Raises Price Tar |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Johnson Controls International plc (JCI) Shareholder/Analyst |

---

### NYSE:GNRC

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.23 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 6 / 23 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Generac (GNRC) Stock Trades Up, Here Is Why
- 🟢 [Industry|w2.52] Generac Signs Global Supply Agreement with Leading Hyperscale Data Cen
- 🟢 [Industry|w1.19] Generac's 3.25MW Generator Named Gold Winner in 2026 Consulting-Specif

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Generac's 3.25MW Generator Named Gold Winner in 2026 Consult |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Is It Too Late To Consider Generac Holdings (GNRC) After A 1 |
| 2026-06-02 | Industry | 🟢 +1 | 2.52 | Finnhub | Generac (GNRC) Stock Trades Up, Here Is Why |
| 2026-06-02 | Industry | 🟢 +1 | 2.52 | Finnhub | Generac Signs Global Supply Agreement with Leading Hyperscal |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Finnhub | What to Know About This $18 Million Bet on a Rental Business |
| 2026-05-29 | Earnings | ⚪  0 | 0.66 | Finnhub | Why Is Generac Holdings (GNRC) Up 7.8% Since Last Earnings R |

---

## 🟢 Mid Long (21)

### NYSE:QBTS

| Metric | Detail |
|--------|--------|
| Normalized Score | **74** / 100 |
| Raw Weighted Score | 5.72 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 28 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.02] D-Wave Quantum Draws US$2b Federal Backing What It Means For Investors
- 🟢 [Analyst Action|w1.21] B. Riley Securities Maintains Buy on D-Wave Quantum, Raises Price Targ
- 🟢 [Analyst Action|w1.21] Roth Capital Maintains Buy on D-Wave Quantum, Raises Price Target to $

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.84] D-Wave Quantum Still Lags Behind The Industry Average, But Pessimism I
- 🔴 [Industry|w0.59] The Quantum Computing Boom Is Back. IBM Proves It Is the Smartest Stoc

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | B. Riley Securities Maintains Buy on D-Wave Quantum, Raises  |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Roth Capital Maintains Buy on D-Wave Quantum, Raises Price T |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Needham Reiterates Buy on D-Wave Quantum, Maintains $40 Pric |
| 2026-06-02 | Policy | 🟢 +1 | 3.02 | Finnhub | D-Wave Quantum Draws US$2b Federal Backing What It Means For |
| 2026-06-01 | Industry | ⚪  0 | 0.84 | Finnhub | D-Wave Charts a New Course to Fault-Tolerant Quantum Computi |
| 2026-06-01 | Industry | ⚪  0 | 0.84 | Finnhub | Uncle Sam Is Buying Into Quantum Computing Stocks. Should Yo |
| 2026-05-31 | Analyst Action | 🔴 -1 | 0.84 | Finnhub | D-Wave Quantum Still Lags Behind The Industry Average, But P |
| 2026-05-30 | Industry | 🔴 -1 | 0.59 | Finnhub | The Quantum Computing Boom Is Back. IBM Proves It Is the Sma |

---

### NASDAQ:AMD

| Metric | Detail |
|--------|--------|
| Normalized Score | **71** / 100 |
| Raw Weighted Score | 7.42 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 15 / 16 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] AMD Rises as Agentic AI Lifts Chip Demand
- 🟢 [Industry|w2.98] Super Micro Computer Just Unveiled the New AMD Helios Platform. What T
- 🟢 [Industry|w1.19] Why Advanced Micro Devices Could Be the Next $1 Trillion Stock

**📉 Bearish Factors:**
- 🔴 [Industry|w1.4] Nvidia Wants to Reinvent the PC. Here's What That Means for Intel, AMD
- 🔴 [Industry|w1.19] Cathie Wood Adds More Nvidia and Cuts AMD Holdings in ARK Funds. This 
- 🔴 [Analyst Action|w0.5] AMD: Ring, Ring - The Top Is Calling (Downgrade)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | 🔴 -1 | 1.4 | Finnhub | Nvidia Wants to Reinvent the PC. Here's What That Means for  |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Broadcom Beats Second-Quarter Views as AI Revenue More Than  |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | AMD Rises as Agentic AI Lifts Chip Demand |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Intel Surges 192.5% Year to Date: Should You Bet on the Stoc |
| 2026-06-03 | Industry | 🔴 -1 | 1.19 | Finnhub | Cathie Wood Adds More Nvidia and Cuts AMD Holdings in ARK Fu |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Broadcom Q2: The Market Has Lost Its Mind |
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | AMD Trades Close to 52-Week High: Buy, Sell or Hold the Stoc |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Marvell, AMD Rally, Lead Chip Stocks To Record High |

---

### NASDAQ:LRCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **69** / 100 |
| Raw Weighted Score | 4.63 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 28 |

**📈 Bullish Factors:**
- 🟢 [Buyback|w1.43] Will Strong Cash Flows Support Lam Research's Buyback Strategy Ahead?
- 🟢 [Analyst Action|w1.01] Wells Fargo Maintains Overweight on Lam Research, Raises Price Target 
- 🟢 [Industry|w0.84] Is Lam Research Stock Outperforming the S&P 500?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Update

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Buyback | 🟢 +1 | 1.43 | Finnhub | Will Strong Cash Flows Support Lam Research's Buyback Strate |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Top Wide-Moat Stocks to Buy for Steady Long-Term Returns |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Lam Research (LRCX) Stock Is Trading Up Today |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Why Lam Research (LRCX) is a Top Stock for the Long-Term |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Lam Research Corporation (LRCX) Presents at Bank of America  |
| 2026-06-01 | Industry | 🔴 -1 | 0.84 | Finnhub | Tracking Bridgewater Associates 13F Portfolio - Q1 2026 Upda |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Is Lam Research Stock Outperforming the S&P 500? |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Wells Fargo Maintains Overweight on Lam Research, Raises Pri |

---

### NASDAQ:TTMI

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.05 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 29 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] TTM Technologies: AI Data Centers, Defense Electronics And Space Tailw
- 🟢 [Analyst Action|w1.01] Best Momentum Stocks to Buy for June 1st
- 🟢 [Analyst Action|w1.01] New Strong Buy Stocks for June 1st

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | TTM Technologies, Inc. Announces New $1.0 Billion Cash Flow  |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | TTM Technologies, Inc. (TTMI) Analyst/Investor Day - Slidesh |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | TTM Technologies: AI Data Centers, Defense Electronics And S |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | TTM Technologies (NASDAQ:TTMI): A High-Growth Momentum Stand |
| 2026-06-02 | Earnings | ⚪  0 | 1.31 | Finnhub | TTM Technologies: Negative On Valuation, Positive On Fundame |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | New Strong Buy Stocks for June 1st |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | TTMI Stock Shows How Swing Trading Rules Lead To Success |

---

### NYSE:FN

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.13 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 27 |

**📈 Bullish Factors:**
- 🟢 [M&A|w2.1] Fabrinet (FN) Bets on Co-Packaged Optics With a Strategic Investment i
- 🟢 [Industry|w1.19] Fabrinet (NYSE:FN) Scores High Growth Momentum Rating and Strong Techn
- 🟢 [Industry|w0.84] Fabrinet (NYSE:FN) Screens as a Strong Growth Stock with a Favorable T

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Fabrinet (FN) Up 6.2% Since Last Earnings Report: Can It Con |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Fabrinet (NYSE:FN) Scores High Growth Momentum Rating and St |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Fabrinet (NYSE:FN) Screens as a Strong Growth Stock with a F |
| 2026-05-31 | M&A | 🟢 +1 | 2.1 | Yahoo Fina | Fabrinet (FN) Bets on Co-Packaged Optics With a Strategic In |
| 2026-05-30 | Industry | ⚪  0 | 0.5 | Finnhub | Wealth Manager Sells $7 Million of Establishment Labs After  |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.7 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 32 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] Celestica: The Quiet Backbone Of The AI Hardware Revolution
- 🟢 [Industry|w1.19] Alphabet's New $80B Spending: What AI Stock To Buy

**📉 Bearish Factors:**
- 🔴 [Industry|w0.51] Celestica (CLS) Suffers a Larger Drop Than the General Market: Key Ins

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🔴 -1 | 0.51 | Yahoo Fina | Celestica (CLS) Suffers a Larger Drop Than the General Marke |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Alphabet's New $80B Spending: What AI Stock To Buy |
| 2026-06-02 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | Celestica: The Quiet Backbone Of The AI Hardware Revolution |

---

### NYSE:C

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.49 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 30 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Jim Cramer Believes Citigroup (C) Is Fantastic
- 🟢 [Industry|w1.19] Citigroup’s Tokenization Push And Valuation Gap Draw Investor Attentio
- 🟢 [Earnings|w1.09] Is Citigroup Stock Outperforming the Dow?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Citigroup’s Tokenization Push And Valuation Gap Draw Investo |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Citigroup (C) Outperforms Broader Market: What You Need to K |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Jim Cramer Believes Citigroup (C) Is Fantastic |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Finnhub | Citi Just Raised Its Price Target on Nebius to a New Street  |
| 2026-06-01 | Earnings | 🟢 +1 | 1.09 | Finnhub | Is Citigroup Stock Outperforming the Dow? |

---

### NYSE:FCX

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.55 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 27 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Copper Tops $14,000 With Banks Calling for Even More Upside
- 🟢 [Industry|w0.5] Here's Why Freeport-McMoRan (FCX) is a Strong Growth Stock
- 🟢 [Industry|w0.5] Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Center Boom

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is It Too Late To Consider Freeport-McMoRan (FCX) After Its  |
| 2026-06-03 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Copper Tops $14,000 With Banks Calling for Even More Upside |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Rare Earth Stocks, Copper Plays Surging; FCX, MP Near Buy Po |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Here's Why Freeport-McMoRan (FCX) is a Strong Growth Stock |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Watch These 5 Non-Tech Stocks Thriving in 2026 on AI Data Ce |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Freeport-McMoRan (FCX) Rises Higher Than Market: Key Facts |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Freeport-McMoRan Inc. (FCX) Among the Best Performing Sil |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Reassessing Freeport McMoRan (FCX) Valuation After A Strong  |

---

### NASDAQ:WDC

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.57 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 10 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.55] Why Western Digital (WDC) Is Up 12.0% After Unveiling New AI‑Focused S
- 🟢 [Analyst Action|w1.44] Western Digital (WDC) Hits All-Time High as Citi Hikes PT by 37%
- 🟢 [Industry|w1.19] Western Digital: Strong Margins, AI Story Intact

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w1.43] Western Digital: Not Worth 20x P/E Adjusting For The Sandisk Stake
- 🔴 [Industry|w1.19] Up 1,000% in the Past Year, It’s Too Late to Buy Western Digital Stock

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Analyst Action | 🟢 +1 | 1.44 | Yahoo Fina | Western Digital (WDC) Hits All-Time High as Citi Hikes PT by |
| 2026-06-03 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | Why Western Digital (WDC) Is Up 12.0% After Unveiling New AI |
| 2026-06-03 | Industry | ⚪  0 | 1.02 | Yahoo Fina | How The Western Digital (WDC) Investment Story Is Shifting W |
| 2026-06-03 | Industry | 🔴 -1 | 1.19 | Finnhub | Up 1,000% in the Past Year, It’s Too Late to Buy Western Dig |
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | Western Digital Corporation (WDC) Presents at 2026 Evercore  |
| 2026-06-03 | Analyst Action | 🔴 -1 | 1.43 | Finnhub | Western Digital: Not Worth 20x P/E Adjusting For The Sandisk |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Western Digital: Strong Margins, AI Story Intact |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | 3 Storage Devices Stocks to Buy as the Industry Gains Moment |

---

### NASDAQ:APLD

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.09 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 15 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.59] Compass Point Raises Price Target on Applied Digital (APLD) Following 
- 🟢 [Industry|w0.5] Applied Digital Corporation (APLD): Leopold Aschenbrenner Likes This A

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Applied Digital (APLD) Valuation Check After Strong Recent S |
| 2026-06-02 | Analyst Action | 🟢 +1 | 2.59 | Yahoo Fina | Compass Point Raises Price Target on Applied Digital (APLD)  |
| 2026-05-31 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Applied Digital Corporation (APLD): Leopold Aschenbrenner Li |

---

### NASDAQ:FLEX

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 8 / 25 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.02] Flex Ties AI Power And Robotics Moves To Long Term Growth Story
- 🟢 [Industry|w0.86] Flex Upgrades AI Portfolio: Can it Capitalize on the Data Center Boom?
- 🟢 [Industry|w0.72] Flex Showcases Scalable Power Solutions for Next-Generation AI Infrast

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Stocks making big moves yesterday: Shopify, Hewlett Packard  |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Flex Ties AI Power And Robotics Moves To Long Term Growth St |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Flex Ltd. (FLEX) Presents at Bank of America 2026 Global Tec |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Is Flex (FLEX) Stock Rocketing Higher Today |
| 2026-06-02 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Flex Upgrades AI Portfolio: Can it Capitalize on the Data Ce |
| 2026-06-01 | Industry | 🟢 +1 | 0.72 | Yahoo Fina | Flex Showcases Scalable Power Solutions for Next-Generation  |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Flex (FLEX) Stock Jumps 4.1%: Will It Continue to Soar? |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.52 | Yahoo Fina | Jim Cramer on Flex Ltd.: “I Say Buy” |

---

### NYSE:DOCN

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.86 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 21 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.43] Keybanc Initiates Coverage of DigitalOcean Holdings (DOCN) with Overwe
- 🟢 [Analyst Action|w1.43] Keybanc Initiates Coverage On DigitalOcean Holdings with Overweight Ra

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Keybanc Initiates Coverage of DigitalOcean Holdings (DOCN) w |
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | DigitalOcean Holdings, Inc. (DOCN) Presents at Bank of Ameri |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Keybanc Initiates Coverage On DigitalOcean Holdings with Ove |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Finnhub | DigitalOcean to Participate in Bank of America Global Techno |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 3.36 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 28 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Everpure (P) Is Down 8.8% After Raising 2027 Outlook And Showcasing Cy
- 🟢 [Industry|w1.02] Is Everpure (P) a Solid Growth Stock? 3 Reasons to Think "Yes"

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 0.6 | MarketWatc | How single-stock turbulence presents &#x2018;asymmetric&#x20 |
| 2026-06-04 | Industry | ⚪  0 | 0.5 | Seeking Al | Everpure, Inc. (P) Presents at Bank of America 2026 Global T |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is It Too Late To Reassess Everpure (P) After Its Strong Sha |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Is Everpure (P) a Solid Growth Stock? 3 Reasons to Think "Ye |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Everpure, Inc. (P) Presents at Bank of America 2026 Global T |
| 2026-06-03 | M&A | ⚪  0 | 4.16 | Finnhub | Everpure FlashArray Support Deal With Park Place Raises New  |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | MarketWatc | U.S. Stocks Fall Amid Mideast Clashes |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Why Are Everpure (P) Shares Soaring Today |

---

### NASDAQ:MTSI

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.96 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 20 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.95] MACOM Technology (MTSI) Beats Revenue Estimates on Surging Demand for 
- 🟢 [Industry|w0.51] 3 Reasons Investors Watch MACOM (MTSI)
- 🟢 [Industry|w0.5] Buy 3 Momentum Anomaly Stocks as Tech Rally Spurs Fresh Highs

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | 3 Reasons Investors Watch MACOM (MTSI) |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Buy 3 Momentum Anomaly Stocks as Tech Rally Spurs Fresh High |
| 2026-05-31 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | MACOM Technology (MTSI) Beats Revenue Estimates on Surging D |

---

### NASDAQ:MNST

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.91 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 6 / 28 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Morgan Stanley resets Monster stock price target after earnings
- 🟢 [Industry|w1.19] Monster Beverage's International Boom: Why Overseas Sales Hit 45%
- 🟢 [Analyst Action|w1.01] Morgan Stanley Maintains Overweight on Monster Beverage, Raises Price 

**📉 Bearish Factors:**
- 🔴 [Rumor|w0.5] Monster Beverage Insiders Sell US$4.9m Of Stock, Possibly Signalling C

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Monster Beverage's International Boom: Why Overseas Sales Hi |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Morgan Stanley resets Monster stock price target after earni |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Yahoo Fina | FMX or MNST: Which Is the Better Value Stock Right Now? |
| 2026-06-01 | Industry | ⚪  0 | 0.84 | Finnhub | Hedge Fund Broadwood Capital Added Over 1 Million Shares of  |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Morgan Stanley Maintains Overweight on Monster Beverage, Rai |
| 2026-05-31 | Rumor | 🔴 -1 | 0.5 | Finnhub | Monster Beverage Insiders Sell US$4.9m Of Stock, Possibly Si |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 3.51 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 12 / 20 |
| Patterns | Bearish-to-Bullish Reversal (reversal) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] Memory chips are all the rage in markets, with Micron and SK Hynix bec
- 🟢 [Industry|w1.19] Micron vs. Marvell: Only One AI Semiconductor Stock Is a Buy This June
- 🟢 [Analyst Action|w1.02] Micron: Stop Playing Musical Chairs And Take A Seat

**📉 Bearish Factors:**
- 🔴 [Analyst Action|w0.86] I'm Selling Micron At $1,000 (Like I Said) (Rating Downgrade)
- 🔴 [Analyst Action|w0.86] Micron: Not A Stock For Ordinary Investors To Chase Today
- 🔴 [Industry|w0.72] Micron: The Cheap Valuation Is The Whole Trap

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | Micron Just Reached a $1 Trillion Market Cap. Is It Too Late |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Micron vs. Marvell: Only One AI Semiconductor Stock Is a Buy |
| 2026-06-03 | Earnings | ⚪  0 | 1.55 | Finnhub | Should You Buy Micron Stock Before June 24? History Has a Cl |
| 2026-06-03 | Earnings | 🟢 +1 | 0.77 | Finnhub | Prediction: This Artificial Intelligence (AI) Chip Stock Wil |
| 2026-06-03 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | Memory chips are all the rage in markets, with Micron and SK |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Not Nvidia. Not Micron. This Underrated Artificial Intellige |
| 2026-06-03 | Industry | 🔴 -1 | 0.6 | Finnhub | Micron Technology: How High Can The Stock Realistically Soar |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.02 | Seeking Al | Micron: Stop Playing Musical Chairs And Take A Seat |

---

### NYSE:JBL

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.54 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 26 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.33] Jabil (JBL) Advances While Market Declines: Some Information for Inves
- 🟢 [Analyst Action|w1.21] JABIL INC (NYSE:JBL): A GARP Stock Combining Strong Growth and Reasona

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Earnings | 🟢 +1 | 1.33 | Yahoo Fina | Jabil (JBL) Advances While Market Declines: Some Information |
| 2026-06-03 | Earnings | ⚪  0 | 1.55 | Finnhub | Jabil’s Third Quarter of Fiscal Year 2026 Earnings Announcem |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Sanmina Surges 201% in the Past Year: Reason to Bet on the S |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | JABIL INC (NYSE:JBL): A GARP Stock Combining Strong Growth a |
| 2026-05-31 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Assessing Whether Jabil (JBL) Is Overvalued After Its Strong |

---

### NASDAQ:ADI

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 7 / 30 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Analog Devices Inc (NASDAQ:ADI) Shows Strong Growth and Technical Brea
- 🟢 [Earnings|w0.91] Assessing Analog Devices (ADI) Valuation After Strong AI Data Center A
- 🟢 [Analyst Action|w0.6] Raymond James Raises its Price Target on Analog Devices (ADI)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Texas Instruments Stock's Rally Is Asking One Big Question |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Analog Devices, Inc. (ADI) Presents at Bank of America 2026  |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Analog Devices Inc (NASDAQ:ADI) Shows Strong Growth and Tech |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | Is Analog Devices Stock Outperforming the S&P 500? |
| 2026-05-31 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | Want to Buy Analog Devices Inc (ADI) Stock? Listen to Argus  |
| 2026-05-31 | Earnings | 🟢 +1 | 0.91 | Finnhub | Assessing Analog Devices (ADI) Valuation After Strong AI Dat |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Raymond James Raises its Price Target on Analog Devices (ADI |

---

### NYSE:GLW

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 37 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] How Corning Turned Glass Into Gold
- 🟢 [Industry|w1.02] LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Using ‘Optics 
- 🟢 [Industry|w0.5] Why Corning (GLW) Stock Is Trading Up Today

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Usin |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | How Corning Turned Glass Into Gold |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | Why Corning (GLW) Stock Is Trading Up Today |

---

### NASDAQ:ONDS

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 1 / 20 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] Ondas Unit Wins US Navy Maritime Surveillance Contract

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | 🟢 +1 | 2.52 | Finnhub | Ondas Unit Wins US Navy Maritime Surveillance Contract |

---

### NASDAQ:KLAC

| Metric | Detail |
|--------|--------|
| Normalized Score | **60** / 100 |
| Raw Weighted Score | 2.38 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 9 / 30 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.32] Can Rising Process Control Intensity Drive KLA's Next Growth Phase?
- 🟢 [Industry|w1.01] Is KLA Corporation Stock Outperforming the Nasdaq?
- 🟢 [Industry|w0.5] Can KLA's Greenfield Fab Exposure Spark Multi-Year Revenue Growth?

**📉 Bearish Factors:**
- 🔴 [Industry|w1.01] Fasten Your Seatbelt
- 🔴 [Industry|w0.84] KLA Corporation: Another Victim Of Semiconductor Euphoria
- 🔴 [Analyst Action|w0.6] Brokers Suggest Investing in KLA (KLAC): Read This Before Placing a Be

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Will Strong Cash Flows Support Lam Research's Buyback Strate |
| 2026-06-03 | Earnings | 🟢 +1 | 3.32 | Yahoo Fina | Can Rising Process Control Intensity Drive KLA's Next Growth |
| 2026-06-03 | Industry | ⚪  0 | 1.19 | Finnhub | KLA Corporation (KLAC) Presents at Bank of America 2026 Glob |
| 2026-06-02 | Industry | 🔴 -1 | 1.01 | Finnhub | Fasten Your Seatbelt |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Is KLA Corporation Stock Outperforming the Nasdaq? |
| 2026-06-01 | Industry | 🔴 -1 | 0.84 | Finnhub | KLA Corporation: Another Victim Of Semiconductor Euphoria |
| 2026-05-29 | Earnings | ⚪  0 | 0.5 | Yahoo Fina | KLA (KLAC) Up 10.1% Since Last Earnings Report: Can It Conti |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Can KLA's Greenfield Fab Exposure Spark Multi-Year Revenue G |

---

## 🟡 Cautious Long (4)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 9.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Why 102.4 Tbps AI-Optimized Switch Silicon Is Such a Huge Deal for Mar
- 🟢 [Analyst Action|w1.43] Why Marvell Technology Bumped Higher Again on Wednesday
- 🟢 [Industry|w1.19] Will Marvell Technology (MRVL) Really Become the Next Trillion-Dollar 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Micron vs. Marvell: Only One AI Semiconductor Stock Is a Buy This June

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 1 | Seeking Al | Marvell Technology, Inc. (MRVL) Presents at Bank of America  |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why Marvell Technology Bumped Higher Again on Wednesday |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Will Marvell Technology (MRVL) Really Become the Next Trilli |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Marvell Stock Closes at a Record High. The Next Big Catalyst |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Technology, Inc. (MRVL) Presents at Bank of America  |
| 2026-06-03 | Industry | 🟢 +1 | 2.98 | Finnhub | Why 102.4 Tbps AI-Optimized Switch Silicon Is Such a Huge De |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Jensen Huang Just Called This the Next Trillion-Dollar AI Ch |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia CEO Jensen Huang Says Marvell Could Be the Next $1 Tr |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Applied Materials: The AI Stock That Wins No Matter Which Chip Wins
- 🟢 [Industry|w1.01] AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score as Earnings
- 🟢 [Industry|w1.01] Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim Cramer

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Applied Materials, Inc. (AMAT) Presents at Bank of America 2 |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Materials: The AI Stock That Wins No Matter Which Ch |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Is KLA Corporation Stock Outperforming the Nasdaq? |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score a |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Jim Cramer Says He’s Betting “Applied Materials Will Just Ke |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Is It Worth Investing in Applied Materials (AMAT) Based on W |
| 2026-06-01 | Industry | ⚪  0 | 0.84 | Finnhub | Applied Materials, Inc. (AMAT) Is a Trending Stock: Facts to |

---

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Goldman Sachs Reinstates Buy on Neurocrine Biosciences, Announces $213
- 🟢 [Industry|w1.19] Neurocrine Biosciences to Present New Two‑Year CRENESSITY® (crinecerfo
- 🟢 [Industry|w0.6] Neurocrine Biosciences Inc (NASDAQ:NBIX): A Peter Lynch GARP Opportuni

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Neurocrine Biosciences to Present New Two‑Year CRENESSITY® ( |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX): A Peter Lynch GARP |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Neurocrine Biosciences, Inc. (NBIX) Presents at 46th Annual  |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Goldman Sachs Reinstates Buy on Neurocrine Biosciences, Anno |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Neurocrine Biosciences Should See More Upside on Crenessity  |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | RBC Capital Maintains Outperform on Neurocrine Biosciences,  |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX) Shows Strong Fundam |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.75 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Can AI Data Center Demand Accelerate nVent Electric's Revenue Growth?
- 🟢 [Industry|w0.84] AI Buildout Trends Keep This Company's Outlook Bright
- 🟢 [Analyst Action|w0.72] A Look At nVent Electric (NVT) Valuation After Positive Data Center Co

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | NVT Surges 53% in 3 Months: Should You Buy, Sell or Hold the |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Can AI Data Center Demand Accelerate nVent Electric's Revenu |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | nVent Electric plc (NVT) Presents at 46th Annual William Bla |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | The Bull Case For nVent Electric (NVT) Could Change Followin |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | AI Buildout Trends Keep This Company's Outlook Bright |
| 2026-05-31 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | A Look At nVent Electric (NVT) Valuation After Positive Data |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Finnhub | nVent Electric plc (NYSE:NVT) Screens Strong as an Affordabl |

---

## ⚠️ Overheated (8)

### NYSE:DY

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 11.76 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Dycom Targets AI Data Centers And Training To Tackle Labor Constraints
- 🟢 [Analyst Action|w2.52] Keybanc Maintains Overweight on Dycom Industries, Raises Price Target 
- 🟢 [Earnings|w1.64] Dycom Industries Stock Just Skyrocketed. It's the Latest Winner from D

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Is It Too Late To Consider Dycom Industries (DY) After A 105 |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Wall Street Analysts Predict a 29.84% Upside in Dycom Indust |
| 2026-06-03 | M&A | 🟢 +1 | 4.16 | Finnhub | Dycom Targets AI Data Centers And Training To Tackle Labor C |
| 2026-06-01 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Keybanc Maintains Overweight on Dycom Industries, Raises Pri |
| 2026-05-31 | Earnings | 🟢 +1 | 0.91 | Finnhub | Dycom Industries, Inc. Just Beat Earnings Expectations: Here |
| 2026-05-29 | Earnings | 🟢 +1 | 1.64 | Finnhub | Dycom Industries Stock Just Skyrocketed. It's the Latest Win |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Finnhub | Dycom (DY) Q1 2027 Earnings Call Transcript |
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | Cantor Fitzgerald Maintains Overweight on Dycom Industries,  |

---

### NASDAQ:FIVE

| Metric | Detail |
|--------|--------|
| Normalized Score | **96** / 100 |
| Raw Weighted Score | 45.2 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 19 / 9 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Five Below, Inc. (FIVE) Q1 2027 Earnings Call Transcript
- 🟢 [Earnings|w3.87] Five Below Q1 Earnings Call Highlights
- 🟢 [Earnings|w3.87] Five Below (FIVE) Q1 Earnings and Revenues Surpass Estimates

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Earnings | 🟢 +1 | 3.25 | Seeking Al | Five Below expects $5.4B-$5.48B sales and $8.85 adjusted EPS |
| 2026-06-04 | Earnings | 🟢 +1 | 3.25 | Seeking Al | Five Below, Inc. (FIVE) Q1 2027 Earnings Call Transcript |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Five Below, Inc. (FIVE) Q1 2027 Earnings Call Transcript |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Five Below Q1 Earnings Call Highlights |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Five Below (FIVE) Q1 Earnings and Revenues Surpass Estimates |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Five Below (NASDAQ:FIVE) Reports Strong Q1 CY2026 But Stock  |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Five Below, Inc. Announces First Quarter Fiscal 2026 Financi |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Equities Fall Intraday, Oil Jumps Amid Renewed Middle East T |

---

### NASDAQ:IREN

| Metric | Detail |
|--------|--------|
| Normalized Score | **95** / 100 |
| Raw Weighted Score | 23.17 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 15 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] IREN Stock Rises After Securing Transmission Connection For Planned 80
- 🟢 [Industry|w2.98] IREN Signs Transmission Connection Agreement For Its Planned 800MW Dat
- 🟢 [Industry|w2.55] IREN Announces Australia Data Center Plans, Analyst Shifts Bitcoin Min

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 1.2 | Yahoo Fina | IREN’s 800MW Australia Campus Deepens AI Infrastructure And  |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Dow Logs Worst Day Since March, S&P 500 And Nasdaq Snap Win  |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | IREN’s 800MW in Australia, Zcash bug, and Google upscales to |
| 2026-06-03 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Announces Australia Data Center Plans, Analyst Shifts B |
| 2026-06-03 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | GameStop earnings show record profit, IREN inks data center  |
| 2026-06-03 | Industry | 🟢 +1 | 2.55 | Yahoo Fina | IREN Secures Grid Connection for 800MW Australian Data Cente |
| 2026-06-03 | Industry | 🟢 +1 | 0.51 | Yahoo Fina | A $1.6 Billion Reason to Buy IREN Stock Now |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | IREN Stock Hits Highest Levels In Nearly 7 Months – What’s G |

---

### NYSE:HPE

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 11.1 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 32 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] Hewlett Packard Enterprise Sharpening AI And Networking Story After Bl
- 🟢 [Earnings|w3.87] HPE Q2 Earnings Call Highlights Faster AI, Networking Push
- 🟢 [Analyst Action|w1.43] Goldman Sachs Maintains Buy on Hewlett Packard, Raises Price Target to

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Hewlett Packard Enterprise Company (HPE) Presents at Bank of |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | Hewlett Packard Enterprise Sharpening AI And Networking Stor |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Goldman Sachs Maintains Buy on Hewlett Packard, Raises Price |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Argus Research Maintains Buy on Hewlett Packard, Raises Pric |
| 2026-06-03 | Earnings | 🟢 +1 | 3.87 | Finnhub | HPE Q2 Earnings Call Highlights Faster AI, Networking Push |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Had You Invested $1,000 in HPE a Decade Ago, Here’s What You |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Seeking Al | Hewlett Packard Enterprise Company (HPE) Presents at 2026 Ev |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Seeking Al | What To Do After Dell's Breakout Boosted Hewlett-Packard Ent |

---

### NYSE:COHR

| Metric | Detail |
|--------|--------|
| Normalized Score | **93** / 100 |
| Raw Weighted Score | 10.35 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 20 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Why Coherent (COHR) Is Up 11.9% After Nvidia’s AI Optics Deal And Equi
- 🟢 [Industry|w1.19] When Nvidia's CEO Speaks, This Stock Listens
- 🟢 [Industry|w1.19] What's Happening With Coherent Stock?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | When Nvidia's CEO Speaks, This Stock Listens |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | What's Happening With Coherent Stock? |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Alphabet's New $80B Spending: What AI Stock To Buy |
| 2026-06-03 | M&A | 🟢 +1 | 4.16 | Finnhub | Why Coherent (COHR) Is Up 11.9% After Nvidia’s AI Optics Dea |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | LITE, COHR, GLW Stocks Surge After Nvidia CEO Calls For Usin |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Coherent (COHR) Hits Record High on Marvell Skyrocket Ride |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Why Coherent (COHR) Stock Is Up Today |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Finnhub | The Speed of Light: 5 Stocks Powering AI’s Optical Future |

---

### NYSE:CIEN

| Metric | Detail |
|--------|--------|
| Normalized Score | **83** / 100 |
| Raw Weighted Score | 8.01 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 22 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] B. Riley Securities Maintains Neutral on Ciena, Raises Price Target to
- 🟢 [Industry|w2.98] Ciena Taps Cloud And Subsea Demand In Cirion And Biznet Wins
- 🟢 [Industry|w1.01] Can Solid Networking Platform Revenue Growth Drive CIEN's Q2 Earnings?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 2.98 | Finnhub | Ciena Taps Cloud And Subsea Demand In Cirion And Biznet Wins |
| 2026-06-02 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | B. Riley Securities Maintains Neutral on Ciena, Raises Price |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Can Solid Networking Platform Revenue Growth Drive CIEN's Q2 |
| 2026-06-02 | Industry | 🟢 +1 | 0.5 | Finnhub | CIENA CORP (NYSE:CIEN): A High-Growth Stock with a Bull Flag |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Jim Cramer on Ciena: “There’s More Than Enough Room for It t |

---

### NYSE:MOD

| Metric | Detail |
|--------|--------|
| Normalized Score | **82** / 100 |
| Raw Weighted Score | 7.68 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 6 / 17 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Does MOD's Q4 Strength and $4B AI Data Center Deal Make It a Buy?
- 🟢 [Earnings|w1.95] Why The Modine (MOD) Investment Story Is Shifting With Data Center Dea
- 🟢 [Analyst Action|w1.51] DA Davidson Maintains Buy on Modine Manufacturing, Raises Price Target

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Modine (MOD) is a Top-Ranked Growth Stock: Should You Buy? |
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | Investors Heavily Search Modine Manufacturing Company (MOD): |
| 2026-06-02 | Industry | 🟢 +1 | 0.86 | Yahoo Fina | Here's Why Modine (MOD) is a Strong Momentum Stock |
| 2026-06-01 | Earnings | 🟢 +1 | 2.34 | Yahoo Fina | Does MOD's Q4 Strength and $4B AI Data Center Deal Make It a |
| 2026-05-31 | Earnings | 🟢 +1 | 1.95 | Yahoo Fina | Why The Modine (MOD) Investment Story Is Shifting With Data  |
| 2026-05-29 | Analyst Action | 🟢 +1 | 1.51 | Finnhub | DA Davidson Maintains Buy on Modine Manufacturing, Raises Pr |

---

### NYSE:KEYS

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 5.92 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 9 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Keysight Expands Photonic Design Suite With GlobalFoundries Silicon Ph
- 🟢 [M&A|w1.18] Keysight Technologies Collaborates With NTT DOCOMO And NTT To Accelera
- 🟢 [Industry|w1.02] Can Keysight's New RF Wireless Testing Solutions Drive Future Growth?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Can Keysight's New RF Wireless Testing Solutions Drive Futur |
| 2026-06-03 | Industry | 🟢 +1 | 1.02 | Yahoo Fina | Keysight Expands Photonics Design Ecosystem with GlobalFound |
| 2026-06-03 | Industry | ⚪  0 | 1.02 | Yahoo Fina | SNPS Rises 8.2% YTD: Should Investors Hold or Fold the Stock |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Keysight Expands Photonic Design Suite With GlobalFoundries  |
| 2026-06-02 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Keysight Technologies (KEYS) Outperforming Other Computer |
| 2026-06-01 | Analyst Action | ⚪  0 | 0.5 | Yahoo Fina | How A Quiet Analyst Tape Is Shaping The Keysight Technologie |
| 2026-06-01 | Analyst Action | 🟢 +1 | 1.01 | Finnhub | Best Momentum Stocks to Buy for June 1st |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Keysight Stock Rises 113.2% in the Past Year: How to Play th |

---

## ⚠️ Risk Pattern (4)

### NASDAQ:MRVL

| Metric | Detail |
|--------|--------|
| Normalized Score | **84** / 100 |
| Raw Weighted Score | 9.67 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 12 / 18 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Likely Pre-Priced (no hard catalyst) |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.98] Why 102.4 Tbps AI-Optimized Switch Silicon Is Such a Huge Deal for Mar
- 🟢 [Analyst Action|w1.43] Why Marvell Technology Bumped Higher Again on Wednesday
- 🟢 [Industry|w1.19] Will Marvell Technology (MRVL) Really Become the Next Trillion-Dollar 

**📉 Bearish Factors:**
- 🔴 [Industry|w1.19] Micron vs. Marvell: Only One AI Semiconductor Stock Is a Buy This June

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-04 | Industry | ⚪  0 | 1 | Seeking Al | Marvell Technology, Inc. (MRVL) Presents at Bank of America  |
| 2026-06-03 | Analyst Action | 🟢 +1 | 1.43 | Finnhub | Why Marvell Technology Bumped Higher Again on Wednesday |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Will Marvell Technology (MRVL) Really Become the Next Trilli |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Marvell Stock Closes at a Record High. The Next Big Catalyst |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | Marvell Technology, Inc. (MRVL) Presents at Bank of America  |
| 2026-06-03 | Industry | 🟢 +1 | 2.98 | Finnhub | Why 102.4 Tbps AI-Optimized Switch Silicon Is Such a Huge De |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Jensen Huang Just Called This the Next Trillion-Dollar AI Ch |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Nvidia CEO Jensen Huang Says Marvell Could Be the Next $1 Tr |

---

### NASDAQ:AMAT

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.71 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 9 / 29 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Applied Materials: The AI Stock That Wins No Matter Which Chip Wins
- 🟢 [Industry|w1.01] AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score as Earnings
- 🟢 [Industry|w1.01] Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim Cramer

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Applied Materials, Inc. (AMAT) Presents at Bank of America 2 |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Materials: The AI Stock That Wins No Matter Which Ch |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Is KLA Corporation Stock Outperforming the Nasdaq? |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | AMAT (NASDAQ:AMAT) Breaks Out With Perfect Technical Score a |
| 2026-06-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Applied Materials (AMAT) Can’t Keep Up With Demand, Says Jim |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Jim Cramer Says He’s Betting “Applied Materials Will Just Ke |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Is It Worth Investing in Applied Materials (AMAT) Based on W |
| 2026-06-01 | Industry | ⚪  0 | 0.84 | Finnhub | Applied Materials, Inc. (AMAT) Is a Trending Stock: Facts to |

---

### NASDAQ:NBIX

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.7 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 27 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w1.21] Goldman Sachs Reinstates Buy on Neurocrine Biosciences, Announces $213
- 🟢 [Industry|w1.19] Neurocrine Biosciences to Present New Two‑Year CRENESSITY® (crinecerfo
- 🟢 [Industry|w0.6] Neurocrine Biosciences Inc (NASDAQ:NBIX): A Peter Lynch GARP Opportuni

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Neurocrine Biosciences to Present New Two‑Year CRENESSITY® ( |
| 2026-06-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX): A Peter Lynch GARP |
| 2026-06-02 | Industry | ⚪  0 | 1.01 | Finnhub | Neurocrine Biosciences, Inc. (NBIX) Presents at 46th Annual  |
| 2026-06-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Goldman Sachs Reinstates Buy on Neurocrine Biosciences, Anno |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Neurocrine Biosciences Should See More Upside on Crenessity  |
| 2026-05-29 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | RBC Capital Maintains Outperform on Neurocrine Biosciences,  |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Finnhub | Neurocrine Biosciences Inc (NASDAQ:NBIX) Shows Strong Fundam |

---

### NYSE:NVT

| Metric | Detail |
|--------|--------|
| Normalized Score | **66** / 100 |
| Raw Weighted Score | 3.75 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 7 / 30 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Can AI Data Center Demand Accelerate nVent Electric's Revenue Growth?
- 🟢 [Industry|w0.84] AI Buildout Trends Keep This Company's Outlook Bright
- 🟢 [Analyst Action|w0.72] A Look At nVent Electric (NVT) Valuation After Positive Data Center Co

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Industry | ⚪  0 | 0.51 | Yahoo Fina | NVT Surges 53% in 3 Months: Should You Buy, Sell or Hold the |
| 2026-06-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Can AI Data Center Demand Accelerate nVent Electric's Revenu |
| 2026-06-03 | Industry | ⚪  0 | 0.6 | Finnhub | nVent Electric plc (NVT) Presents at 46th Annual William Bla |
| 2026-06-01 | Industry | 🟢 +1 | 0.5 | Yahoo Fina | The Bull Case For nVent Electric (NVT) Could Change Followin |
| 2026-06-01 | Industry | 🟢 +1 | 0.84 | Finnhub | AI Buildout Trends Keep This Company's Outlook Bright |
| 2026-05-31 | Analyst Action | 🟢 +1 | 0.72 | Yahoo Fina | A Look At nVent Electric (NVT) Valuation After Positive Data |
| 2026-05-29 | Industry | 🟢 +1 | 0.5 | Finnhub | nVent Electric plc (NYSE:NVT) Screens Strong as an Affordabl |

---

## 🔴 Avoid / Short (1)

### NASDAQ:POWL

| Metric | Detail |
|--------|--------|
| Normalized Score | **33** / 100 |
| Raw Weighted Score | -4.18 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 4 / 19 |
| Patterns | Sentiment Weakening DOWN (trend) |

**📉 Bearish Factors:**
- 🔴 [Earnings|w3.32] Why Is Powell Industries (POWL) Up 1.5% Since Last Earnings Report?
- 🔴 [Analyst Action|w0.86] VWDRY vs. POWL: Which Stock Should Value Investors Buy Now?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-06-03 | Earnings | 🔴 -1 | 3.32 | Yahoo Fina | Why Is Powell Industries (POWL) Up 1.5% Since Last Earnings  |
| 2026-06-01 | Analyst Action | 🔴 -1 | 0.86 | Yahoo Fina | VWDRY vs. POWL: Which Stock Should Value Investors Buy Now? |
| 2026-06-01 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Is Most-Watched Stock Powell Industries, Inc. (POWL) Worth B |
| 2026-05-29 | Industry | ⚪  0 | 0.5 | Yahoo Fina | Powell vs. EnerSys: Which Industrial Stock has Better Prospe |

---

## ⚪ Watch / Neutral (33)

### NYSE:TSM
- Score: 59/100 | raw: 2.04 | News: 2 kept / 32 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JHG
- Score: 57/100 | raw: 1.78 | News: 4 kept / 15 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:AIR
- Score: 56/100 | raw: 1.43 | News: 2 kept / 9 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PANW
- Score: 56/100 | raw: 2.46 | News: 11 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ERIC
- Score: 55/100 | raw: 1.19 | News: 3 kept / 17 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SXI
- Score: 54/100 | raw: 0.86 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLXS
- Score: 54/100 | raw: 1.01 | News: 2 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 54/100 | raw: 1.01 | News: 1 kept / 12 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BE
- Score: 53/100 | raw: 0.61 | News: 12 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ENS
- Score: 52/100 | raw: 0.5 | News: 1 kept / 11 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MPWR
- Score: 52/100 | raw: 0.5 | News: 4 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:EQIX
- Score: 52/100 | raw: 0.51 | News: 8 kept / 31 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:MS
- Score: 51/100 | raw: 0.26 | News: 6 kept / 28 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IRM
- Score: 51/100 | raw: 0.34 | News: 2 kept / 21 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 50/100 | raw: 0 | News: 2 kept / 23 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ADEA
- Score: 50/100 | raw: 0 | News: 0 kept / 20 dropped | No relevant news in window

### NASDAQ:CPRX
- Score: 50/100 | raw: 0 | News: 0 kept / 13 dropped | No relevant news in window

### NASDAQ:CORZ
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NYSE:NOK
- Score: 50/100 | raw: 0 | News: 1 kept / 19 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:ABBNY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:SEDG
- Score: 50/100 | raw: 0 | News: 0 kept / 11 dropped | No relevant news in window

### NYSE:SMP
- Score: 50/100 | raw: 0 | News: 0 kept / 19 dropped | No relevant news in window

### NYSE:FOR
- Score: 50/100 | raw: 0 | News: 14 kept / 26 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:CARR
- Score: 50/100 | raw: 0 | News: 2 kept / 27 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SBGSY
- Score: 50/100 | raw: 0 | News: 0 kept / 10 dropped | No relevant news in window

### NASDAQ:NVMI
- Score: 50/100 | raw: 0 | News: 2 kept / 22 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:IFS
- Score: 50/100 | raw: 0 | News: 0 kept / 26 dropped | No relevant news in window

### NASDAQ:RMBS
- Score: 46/100 | raw: -1.01 | News: 4 kept / 21 dropped | No clear directional bias — stay flat

### NASDAQ:VIAV
- Score: 46/100 | raw: -1 | News: 4 kept / 16 dropped | No clear directional bias — stay flat

### NASDAQ:AVGO
- Score: 44/100 | raw: -8.7 | News: 24 kept / 2 dropped | No clear directional bias — stay flat

### NASDAQ:AAPL
- Score: 43/100 | raw: -1.83 | News: 13 kept / 24 dropped | No clear directional bias — stay flat

### NYSE:DKS
- Score: 42/100 | raw: -1.81 | News: 3 kept / 32 dropped | No clear directional bias — stay flat

### NYSE:RIO
- Score: 40/100 | raw: -2.33 | News: 10 kept / 11 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-06-04T03:36:07.488Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + DeepSeek*