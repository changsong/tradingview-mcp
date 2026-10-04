---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_0cb28cc0be5c11f1887c525400de85a5
    ReservedCode1: umIKi2ElomYZZxGX/+gnaYRZCuMX2kAV1AOF47OWOVGIvIpKMEg+aNFeaMHOkJ2iluVwRF4BScesBSt9xXpsXUrJ0ULjqvDgp/zBMd5boLvLyvxl9HxiNLmjjF0xaoiWjXIMf2DlZc45P9WXpJZyVrt2ULNyG/SL9jmFB4wZIWLt1W/KI9nG/SlVeRg=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_0cb28cc0be5c11f1887c525400de85a5
    ReservedCode2: umIKi2ElomYZZxGX/+gnaYRZCuMX2kAV1AOF47OWOVGIvIpKMEg+aNFeaMHOkJ2iluVwRF4BScesBSt9xXpsXUrJ0ULjqvDgp/zBMd5boLvLyvxl9HxiNLmjjF0xaoiWjXIMf2DlZc45P9WXpJZyVrt2ULNyG/SL9jmFB4wZIWLt1W/KI9nG/SlVeRg=
---

# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-10-02  |  **News Window:** 2026-09-25 ~ 2026-10-02
**Stock Pool:** us_selected.txt (54)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:ON** | **98** | 15.55 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:LTC** | **88** | 9.13 | 🟢 Long (Strong) | Momentum / Hold | High | 4/0 | Sentiment Strengthening UP (trend) |
| 3 | **NYSE:P** | **86** | 8.71 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ETN** | **81** | 7.53 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | Sentiment Strengthening UP (trend) |
| 5 | **NASDAQ:MSFT** | **76** | 6.17 | 🟢 Long (Strong) | Momentum / Hold | High | 13/0 | Sentiment Strengthening UP (trend) |
| 6 | **NASDAQ:INTC** | **75** | 6.1 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 12/0 | Overheated Sentiment (one-sided bullish) |
| 7 | **NYSE:APH** | **67** | 4.19 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 8 | **NASDAQ:PLTR** | **65** | 3.71 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 9 | **NYSE:ELF** | **65** | 3.52 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 10 | **NASDAQ:ASML** | **65** | 3.66 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/0 | Overheated Sentiment (one-sided bullish) |
| 11 | **NYSE:CLS** | **65** | 3.64 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 12 | **NASDAQ:MU** | **62** | 2.84 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 13 | **NASDAQ:CRWD** | **61** | 2.67 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 14 | **NYSE:TT** | **61** | 2.61 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 15 | **NASDAQ:PANW** | **58** | 1.81 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NYSE:TSM** | **58** | 1.9 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 17 | **NASDAQ:ARM** | **57** | 1.6 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/0 | - |
| 18 | **NYSE:GRMN** | **57** | 1.68 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 19 | **NASDAQ:HOOD** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 20 | **NASDAQ:WDC** | **56** | 1.51 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 21 | **NASDAQ:AEHR** | **55** | 1.26 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 22 | **NYSE:KEYS** | **55** | 1.19 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 23 | **NYSE:LLY** | **55** | 1.31 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 24 | **NASDAQ:GRAL** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 25 | **NYSE:WT** | **54** | 0.84 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 26 | **NASDAQ:VICR** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 27 | **NYSE:NGG** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 28 | **NASDAQ:ENTG** | **53** | 0.7 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NASDAQ:VRTX** | **53** | 0.74 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 30 | **NYSE:SPNT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **NYSE:BE** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 32 | **NYSE:DT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 33 | **NASDAQ:SANM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 34 | **NYSE:SN** | **52** | 0.59 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 35 | **NYSE:HGTY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 36 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:LITE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 38 | **NASDAQ:TEM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 39 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 40 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 41 | **NASDAQ:STX** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 42 | **NYSE:VEEV** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 43 | **NYSE:JOE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **NYSE:SARO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NYSE:LYB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:DY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 50 | **OTC:IFNNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 51 | **NASDAQ:AEIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 52 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 53 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 54 | **NYSE:ANET** | **47** | -0.7 | ⚪ No Trade (Neutral) | Watch | Low | 2/0 | - |

---

## 🟢 Strong Long (3)

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **88** / 100 |
| Raw Weighted Score | 9.13 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 4 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] LTC Accelerates SHOP Growth With Another $160 Million in Acquisitions
- 🟢 [M&A|w3.53] LTC Properties Announces ~$160M Of Acquisitions And Strategic Divestit
- 🟢 [Buyback|w1.21] LTC Declares Its Monthly Common Stock Cash Dividend for the Fourth Qua

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Buyback | 🟢 +1 | 1.21 | Finnhub | LTC Declares Its Monthly Common Stock Cash Dividend for the  |
| 2026-10-01 | M&A | 🟢 +1 | 3.53 | Finnhub | LTC Accelerates SHOP Growth With Another $160 Million in Acq |
| 2026-10-01 | M&A | 🟢 +1 | 3.53 | Finnhub | LTC Properties Announces ~$160M Of Acquisitions And Strategi |
| 2026-10-01 | Buyback | 🟢 +1 | 0.86 | Seeking Al | LTC Properties declares $0.19 dividend |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.53 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] What Does Eaton (ETN) Need To Prove In Its Portfolio Overhaul?
- 🟢 [M&A|w2.45] Can Eaton Corporation (ETN) Turn COL Group Into a Growth Engine?
- 🟢 [Industry|w1.01] Eaton (ETN) Outpaces Stock Market Gains: What You Should Know

**📉 Bearish Factors:**
- 🔴 [Industry|w0.59] Eaton (ETN) Registers a Bigger Fall Than the Market: Important Facts t

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | M&A | 🟢 +1 | 4.16 | Finnhub | What Does Eaton (ETN) Need To Prove In Its Portfolio Overhau |
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Eaton (ETN) Outpaces Stock Market Gains: What You Should Kno |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |
| 2026-09-29 | M&A | 🟢 +1 | 2.45 | Finnhub | Can Eaton Corporation (ETN) Turn COL Group Into a Growth Eng |
| 2026-09-28 | Industry | 🔴 -1 | 0.59 | Finnhub | Eaton (ETN) Registers a Bigger Fall Than the Market: Importa |

---

### NASDAQ:MSFT

| Metric | Detail |
|--------|--------|
| Normalized Score | **76** / 100 |
| Raw Weighted Score | 6.17 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 13 / 0 |
| Patterns | Sentiment Strengthening UP (trend) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.87] MSFT Stock Posts Best Quarter Since 1998 As Azure Growth Revives AI Op
- 🟢 [Industry|w0.72] Microsoft: A Multi-Year Compounder With Seat Growth And Azure Accelera
- 🟢 [Industry|w0.6] Artificial Intelligence in Healthcare Market Forecasts Growth from $36

**📉 Bearish Factors:**
- 🔴 [Industry|w0.72] Microsoft: Beware Of Meta's Muse Hype
- 🔴 [Industry|w0.5] Microsoft: Still Great Business, But AI Raises Serious Questions
- 🔴 [Industry|w0.5] Microsoft: Why The $3.8T Fortress Won't Deliver An AI Moonshot

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | ⚪  0 | 0.6 | Finnhub | Is Microsoft Stock Paying You Enough For The Swings? |
| 2026-10-02 | Earnings | 🟢 +1 | 3.87 | Finnhub | MSFT Stock Posts Best Quarter Since 1998 As Azure Growth Rev |
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Artificial Intelligence in Healthcare Market Forecasts Growt |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Seeking Al | Microsoft unveils new transcription, voice models |
| 2026-10-01 | Industry | 🟢 +1 | 0.72 | Seeking Al | Microsoft: A Multi-Year Compounder With Seat Growth And Azur |
| 2026-10-01 | Industry | 🔴 -1 | 0.72 | Seeking Al | Microsoft: Beware Of Meta's Muse Hype |
| 2026-09-30 | Industry | 🟢 +1 | 0.6 | Seeking Al | Microsoft: Copilot Finally Has A Plan |
| 2026-09-30 | Industry | 🟢 +1 | 0.6 | Seeking Al | Microsoft: The Xbox Segment Revamp |

---

## 🟢 Mid Long (6)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **67** / 100 |
| Raw Weighted Score | 4.19 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Amphenol (APH) Beat Expectations, Is The Stock Still Cheap?
- 🟢 [Earnings|w0.76] APH's AI Connectivity Growth Accelerates: Can It Outpace TEL & MRVL?
- 🟢 [Industry|w0.7] Electronic Components & Manufacturing Q2 Earnings: Amphenol (NYSE:APH)

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Earnings | 🟢 +1 | 2.73 | Finnhub | Amphenol (APH) Beat Expectations, Is The Stock Still Cheap? |
| 2026-09-29 | Industry | 🟢 +1 | 0.7 | Finnhub | Electronic Components & Manufacturing Q2 Earnings: Amphenol  |
| 2026-09-28 | Earnings | 🟢 +1 | 0.76 | Finnhub | APH's AI Connectivity Growth Accelerates: Can It Outpace TEL |

---

### NASDAQ:PLTR

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.71 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Palantir Technologies Inc. (PLTR) Laps the Stock Market: Here's Why
- 🟢 [Analyst Action|w1.21] Palantir Technologies (NASDAQ:PLTR): A High-Growth Momentum Leader
- 🟢 [Industry|w1.19] PLTR Stock Rally Intact After Best Quarter In A Year — Retail Watches 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 1.19 | Finnhub | PLTR Stock Rally Intact After Best Quarter In A Year — Retai |
| 2026-10-01 | Earnings | 🟢 +1 | 1.31 | Finnhub | Palantir Technologies Inc. (PLTR) Laps the Stock Market: Her |
| 2026-10-01 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | Palantir Technologies (NASDAQ:PLTR): A High-Growth Momentum  |

---

### NYSE:ELF

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.52 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w2.52] Elf Beauty Shares Rise as Canaccord Tracker Shows 11.6% Sales Growth
- 🟢 [Industry|w0.5] e.l.f. Beauty (ELF) Following Sales Data Is It Fully Valued Now
- 🟢 [Industry|w0.5] ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Quality

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | e.l.f. Beauty (ELF) Following Sales Data Is It Fully Valued  |
| 2026-09-30 | Analyst Action | 🟢 +1 | 2.52 | Finnhub | Elf Beauty Shares Rise as Canaccord Tracker Shows 11.6% Sale |
| 2026-09-26 | Industry | 🟢 +1 | 0.5 | Finnhub | ELF Beauty (NYSE:ELF): Strong Growth Meets Technical Setup Q |

---

### NASDAQ:MU

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.84 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.34] Micron Technology, Inc. (MU) Q4 2026 Post-Earnings Analyst Call Transc
- 🟢 [Industry|w0.5] S&P 500, Nasdaq, Dow Futures Inch Higher As Investors Cheer Cooling Yi

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | S&P 500, Nasdaq, Dow Futures Inch Higher As Investors Cheer  |
| 2026-10-01 | Earnings | 🟢 +1 | 2.34 | Seeking Al | Micron Technology, Inc. (MU) Q4 2026 Post-Earnings Analyst C |

---

### NASDAQ:CRWD

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.67 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Will the Rising Adoption of AI Agents Boost CRWD's Identity Business?
- 🟢 [Industry|w1.19] Why Did CRWD, TWLO, P Stocks Hit 52-Week Highs Today?
- 🟢 [Industry|w1.01] Why Did WBD, HPE, CRWD Stocks Rise To 52-Week Highs Today?

**📉 Bearish Factors:**
- 🔴 [Industry|w0.84] CrowdStrike (CRWD) Stock May Be Overvalued On Blueprint Alliance News

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Why Did CRWD, TWLO, P Stocks Hit 52-Week Highs Today? |
| 2026-10-01 | Earnings | 🟢 +1 | 1.31 | Finnhub | Will the Rising Adoption of AI Agents Boost CRWD's Identity  |
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Why Did WBD, HPE, CRWD Stocks Rise To 52-Week Highs Today? |
| 2026-09-30 | Industry | 🔴 -1 | 0.84 | Finnhub | CrowdStrike (CRWD) Stock May Be Overvalued On Blueprint Alli |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.61 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] Trane Technologies (TT) Exceeds Market Returns: Some Facts to Consider
- 🟢 [Analyst Action|w0.6] Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight And HVAC De
- 🟢 [Industry|w0.5] Trane Technologies (TT) Could Be 13% Undervalued Following HVAC And He

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Trane Technologies (TT) Exceeds Market Returns: Some Facts t |
| 2026-09-27 | Analyst Action | 🟢 +1 | 0.6 | Finnhub | Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight A |
| 2026-09-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Trane Technologies (TT) Could Be 13% Undervalued Following H |
| 2026-09-26 | Industry | 🟢 +1 | 0.5 | Finnhub | Trane Technologies (NYSE:TT): A Quality Investing Standout |

---

## 🟡 Cautious Long (2)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.76] ASML (ASML) Increases Despite Market Slip: Here's What You Need to Kno
- 🟢 [Industry|w0.7] ASML Stock Surges 3.8% as AI Rebound Returns to Lithography
- 🟢 [Industry|w0.7] What's Going On With ASML Stock Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: What Revenue Trends Reveal to Investors A |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML vs. Applied Digital: Which Is the Better Semiconductor  |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2 |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials vs. ASML: Which Technology Stock Is a Bett |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: Which Tech Stock Is a Better Buy in 2026? |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Seeking Al | Airbus names ASML, Michelin CEOs to board as Obermann steps  |
| 2026-09-30 | Earnings | ⚪  0 | 0.55 | Finnhub | ASML, TSM Earnings Could Expose a New Risk for the AI Trade |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is What to Know Beyond Why ASML Holding N.V. (ASML) is  |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.84] Brokers Suggest Investing in Celestica (CLS): Read This Before Placing
- 🟢 [Industry|w0.7] Celestica (CLS) Increases Despite Market Slip: Here's What You Need to
- 🟢 [Industry|w0.6] Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica Inc. (NYSE:CLS) Combines High Growth Leadership Wi |
| 2026-09-29 | Industry | 🟢 +1 | 0.7 | Finnhub | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

## ⚠️ Overheated (3)

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **98** / 100 |
| Raw Weighted Score | 15.55 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] On Semi Is Getting Synaptics at a Knock Down Price and Both Stocks Are
- 🟢 [M&A|w4.16] ON Semiconductor Shares Rise 6.5% After Synaptics Acquisition Terms Re
- 🟢 [M&A|w3.53] ON, SYNA Climb After-Hours As The $7B Stock Deal Becomes A $5.7B Cash 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | ON Semi, Synaptics, Nike, Strategy, Moderna, and More Stocks |
| 2026-10-02 | M&A | 🟢 +1 | 4.16 | Finnhub | On Semi Is Getting Synaptics at a Knock Down Price and Both  |
| 2026-10-02 | M&A | 🟢 +1 | 4.16 | Finnhub | ON Semiconductor Shares Rise 6.5% After Synaptics Acquisitio |
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Nike, ON Semi, Moderna, and More Stocks That Explain Today’s |
| 2026-10-01 | M&A | 🟢 +1 | 3.53 | Finnhub | ON, SYNA Climb After-Hours As The $7B Stock Deal Becomes A $ |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Why the Market Dipped But ON Semiconductor Corp. (ON) Gained |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | How Synaptics Buyout Shifted ON Semiconductor Corp.’s (ON) T |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | ON Semiconductor Is No Longer Just A Cyclical Chipmaker |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **86** / 100 |
| Raw Weighted Score | 8.71 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w3.28] Everpure Stock Is September’s Surprise S&P 500 Winner, Surging More Th
- 🟢 [Earnings|w1.64] Everpure (P): Every Analyst Raised Targets After Analyst Day, Free Cas
- 🟢 [Industry|w1.01] Everpure (P), Why Is It Drawing Fresh Attention Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Why Did CRWD, TWLO, P Stocks Hit 52-Week Highs Today? |
| 2026-10-01 | Earnings | 🟢 +1 | 3.28 | Finnhub | Everpure Stock Is September’s Surprise S&P 500 Winner, Surgi |
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Everpure (P), Why Is It Drawing Fresh Attention Today? |
| 2026-09-30 | Industry | 🟢 +1 | 0.84 | Finnhub | Is Everpure (P) Quietly Turning Its Data Platform Into an AI |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Everpure (P) Stock Looks Below Fair Value Despite Its 4x Run |
| 2026-09-30 | Industry | 🟢 +1 | 0.84 | Finnhub | Everpure (P) Unveils AI Data Platform Upgrades With Faster I |
| 2026-09-28 | Analyst Action | ⚪  0 | 0.5 | Finnhub | VNT vs. P: Which Stock Should Value Investors Buy Now? |
| 2026-09-27 | Earnings | 🟢 +1 | 1.64 | Finnhub | Everpure (P): Every Analyst Raised Targets After Analyst Day |

---

### NASDAQ:INTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **75** / 100 |
| Raw Weighted Score | 6.1 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 12 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.19] Intel Sold Stock at $95. It Now Trades at $120. Who Won?
- 🟢 [Industry|w1.19] One Reason Intel Stock Looks Better Than Its Price
- 🟢 [Industry|w1.01] Intel (INTC) Rides AI Optimism But Is It Already Fully Valued

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 1.19 | Finnhub | Intel Sold Stock at $95. It Now Trades at $120. Who Won? |
| 2026-10-02 | Industry | 🟢 +1 | 1.19 | Finnhub | One Reason Intel Stock Looks Better Than Its Price |
| 2026-10-02 | Industry | ⚪  0 | 0.6 | Finnhub | Ex-Intel CEO urges New Mexico to embrace tech revolution ami |
| 2026-10-02 | Policy | ⚪  0 | 0.71 | Finnhub | Trump Reportedly Says Government 'Might' Take a Stake in Ope |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Intel vs. Taiwan Semiconductor Manufacturing: Which Technolo |
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Intel (INTC) Rides AI Optimism But Is It Already Fully Value |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Not Intel. Not Nvidia. These 2 Chip Stocks Maintain an Unbre |
| 2026-10-01 | Industry | 🟢 +1 | 1.01 | Finnhub | Intel Surges 222% in a Year: Should Investors Join the Bandw |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.66 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.76] ASML (ASML) Increases Despite Market Slip: Here's What You Need to Kno
- 🟢 [Industry|w0.7] ASML Stock Surges 3.8% as AI Rebound Returns to Lithography
- 🟢 [Industry|w0.7] What's Going On With ASML Stock Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: What Revenue Trends Reveal to Investors A |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML vs. Applied Digital: Which Is the Better Semiconductor  |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2 |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials vs. ASML: Which Technology Stock Is a Bett |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: Which Tech Stock Is a Better Buy in 2026? |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Seeking Al | Airbus names ASML, Michelin CEOs to board as Obermann steps  |
| 2026-09-30 | Earnings | ⚪  0 | 0.55 | Finnhub | ASML, TSM Earnings Could Expose a New Risk for the AI Trade |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is What to Know Beyond Why ASML Holding N.V. (ASML) is  |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **65** / 100 |
| Raw Weighted Score | 3.64 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.84] Brokers Suggest Investing in Celestica (CLS): Read This Before Placing
- 🟢 [Industry|w0.7] Celestica (CLS) Increases Despite Market Slip: Here's What You Need to
- 🟢 [Industry|w0.6] Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.6 | Finnhub | Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica Inc. (NYSE:CLS) Combines High Growth Leadership Wi |
| 2026-09-29 | Industry | 🟢 +1 | 0.7 | Finnhub | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.84 | Finnhub | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

## ⚪ Watch / Neutral (40)

### NASDAQ:PANW
- Score: 58/100 | raw: 1.81 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:TSM
- Score: 58/100 | raw: 1.9 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ARM
- Score: 57/100 | raw: 1.6 | News: 12 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 57/100 | raw: 1.68 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HOOD
- Score: 56/100 | raw: 1.51 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:WDC
- Score: 56/100 | raw: 1.51 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 55/100 | raw: 1.26 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 55/100 | raw: 1.19 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:LLY
- Score: 55/100 | raw: 1.31 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:GRAL
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:WT
- Score: 54/100 | raw: 0.84 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 54/100 | raw: 1.01 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NGG
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ENTG
- Score: 53/100 | raw: 0.7 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VRTX
- Score: 53/100 | raw: 0.74 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:BE
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 52/100 | raw: 0.59 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:LITE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:TEM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:STX
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:VEEV
- Score: 50/100 | raw: 0 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:JOE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:SMERY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LAR
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ASIX
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:SARO
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:LYB
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:DY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:IFNNY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:AEIS
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:NEXA
- Score: 50/100 | raw: 0 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ST
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:ANET
- Score: 47/100 | raw: -0.7 | News: 2 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-10-02T12:21:45.317Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*
*（内容由AI生成，仅供参考）*
