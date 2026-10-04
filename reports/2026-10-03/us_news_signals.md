# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-10-03  |  **News Window:** 2026-09-26 ~ 2026-10-03
**Stock Pool:** us_selected.txt (54)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:ON** | **99** | 24.52 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 11/0 | Sentiment Strengthening UP (trend) |
| 2 | **NYSE:LTC** | **87** | 8.9 | 🟢 Long (Strong) | Momentum / Hold | High | 5/0 | - |
| 3 | **NYSE:P** | **81** | 7.33 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 8/0 | Sentiment Strengthening UP (trend) |
| 4 | **NYSE:ETN** | **78** | 6.73 | ⚠️ No Trade (Overheated) | Buy Dip (wait for pullback) | Low (risk present) | 5/0 | Overheated Sentiment (one-sided bullish) |
| 5 | **NYSE:APH** | **70** | 4.83 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 4/0 | - |
| 6 | **NASDAQ:GRAL** | **68** | 4.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 7 | **NYSE:WT** | **68** | 4.27 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 2/0 | - |
| 8 | **NASDAQ:ASML** | **64** | 3.34 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 14/0 | Overheated Sentiment (one-sided bullish) |
| 9 | **NYSE:CLS** | **64** | 3.29 | ⚠️ Long (Cautious) | Buy Dip (small size) | Medium (risk present) | 6/0 | Overheated Sentiment (one-sided bullish) |
| 10 | **NASDAQ:ARM** | **63** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 11/0 | - |
| 11 | **NYSE:LLY** | **63** | 3.12 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 12 | **NASDAQ:PANW** | **62** | 2.94 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 5/0 | - |
| 13 | **NYSE:TT** | **62** | 2.9 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 14 | **NYSE:TSM** | **61** | 2.62 | 🟢 Long (Mid) | Buy Dip / Light Momentum | Medium | 3/0 | - |
| 15 | **NYSE:ELF** | **59** | 2.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 16 | **NASDAQ:CRWD** | **58** | 1.85 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 17 | **NASDAQ:ENTG** | **57** | 1.61 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 18 | **NASDAQ:INTC** | **56** | 1.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 13/0 | - |
| 19 | **NYSE:GRMN** | **56** | 1.4 | ⚪ No Trade (Weak Bullish) | Watch | Low | 4/0 | - |
| 20 | **NASDAQ:AEHR** | **55** | 1.16 | ⚪ No Trade (Weak Bullish) | Watch | Low | 3/0 | - |
| 21 | **NASDAQ:PLTR** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 22 | **NYSE:DT** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 23 | **NYSE:KEYS** | **54** | 1.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 24 | **NYSE:NGG** | **54** | 1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 25 | **NASDAQ:MU** | **53** | 0.78 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 26 | **NYSE:SPNT** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 27 | **NASDAQ:HOOD** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 28 | **NASDAQ:SANM** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 29 | **NYSE:SN** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 30 | **NYSE:HGTY** | **52** | 0.5 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 31 | **OTC:SMNEY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 32 | **NYSE:BE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 33 | **NASDAQ:LITE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 34 | **NYSE:ANET** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 35 | **NASDAQ:TEM** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 36 | **OTC:HTHIY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 37 | **NASDAQ:MSFT** | **50** | 0.1 | ⚪ No Trade (Weak Bullish) | Watch | Low | 15/0 | - |
| 38 | **NASDAQ:SNDK** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 39 | **NASDAQ:VICR** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 40 | **NYSE:JOE** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 41 | **OTC:SMERY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 42 | **NYSE:LAR** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 43 | **NYSE:ASIX** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 44 | **NYSE:SARO** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 45 | **NYSE:LYB** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 46 | **NYSE:DY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 47 | **OTC:IFNNY** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 48 | **NASDAQ:AEIS** | **50** | 0 | ⚪ No Trade (No Data) | Watch | - | 0/0 | - |
| 49 | **NYSE:NEXA** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 2/0 | - |
| 50 | **NYSE:ST** | **50** | 0 | ⚪ No Trade (Weak Bullish) | Watch | Low | 1/0 | - |
| 51 | **NASDAQ:VRTX** | **49** | -0.25 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 52 | **NYSE:VEEV** | **48** | -0.5 | ⚪ No Trade (Neutral) | Watch | Low | 4/0 | - |
| 53 | **NASDAQ:WDC** | **43** | -1.61 | ⚪ No Trade (Neutral) | Watch | Low | 3/0 | - |
| 54 | **NASDAQ:STX** | **29** | -5.04 | 🔴 No Trade / Avoid | Reversal (wait for stabilization) | Medium | 3/0 | - |

---

## 🟢 Strong Long (1)

### NYSE:LTC

| Metric | Detail |
|--------|--------|
| Normalized Score | **87** / 100 |
| Raw Weighted Score | 8.9 |
| Trading Signal | **🟢 Long (Strong)** |
| Strategy | Multiple bullish catalysts converging — strong sentiment + fundamental support |
| Suitable For | Momentum / Hold |
| Confidence | High |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.02] RBC Capital Maintains Outperform on LTC Properties, Raises Price Targe
- 🟢 [M&A|w2.94] LTC Accelerates SHOP Growth With Another $160 Million in Acquisitions
- 🟢 [M&A|w2.94] LTC Properties Announces ~$160M Of Acquisitions And Strategic Divestit

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Analyst Action | 🟢 +1 | 3.02 | Finnhub | RBC Capital Maintains Outperform on LTC Properties, Raises P |
| 2026-10-01 | Buyback | ⚪  0 | 1.01 | Finnhub | LTC Declares Its Monthly Common Stock Cash Dividend for the  |
| 2026-10-01 | M&A | 🟢 +1 | 2.94 | Finnhub | LTC Accelerates SHOP Growth With Another $160 Million in Acq |
| 2026-10-01 | M&A | 🟢 +1 | 2.94 | Finnhub | LTC Properties Announces ~$160M Of Acquisitions And Strategi |
| 2026-10-01 | Buyback | ⚪  0 | 0.72 | Seeking Al | LTC Properties declares $0.19 dividend |

---

## 🟢 Mid Long (8)

### NYSE:APH

| Metric | Detail |
|--------|--------|
| Normalized Score | **70** / 100 |
| Raw Weighted Score | 4.83 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 4 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.27] Amphenol (APH) Beat Expectations, Is The Stock Still Cheap?
- 🟢 [Earnings|w1.31] Will Amphenol (APH) Beat Estimates Again in Its Next Earnings Report?
- 🟢 [Earnings|w0.66] APH's AI Connectivity Growth Accelerates: Can It Outpace TEL & MRVL?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Earnings | 🟢 +1 | 1.31 | Finnhub | Will Amphenol (APH) Beat Estimates Again in Its Next Earning |
| 2026-09-30 | Earnings | 🟢 +1 | 2.27 | Finnhub | Amphenol (APH) Beat Expectations, Is The Stock Still Cheap? |
| 2026-09-29 | Industry | 🟢 +1 | 0.59 | Finnhub | Electronic Components & Manufacturing Q2 Earnings: Amphenol  |
| 2026-09-28 | Earnings | 🟢 +1 | 0.66 | Finnhub | APH's AI Connectivity Growth Accelerates: Can It Outpace TEL |

---

### NASDAQ:GRAL

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Policy|w3.57] Why GRAIL (GRAL) Is Up 12.9% After Positive FDA Panel Verdict On Galle
- 🟢 [Industry|w0.7] 3 Reasons to Buy Grail (GRAL) Hand Over Fist in October

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | Policy | 🟢 +1 | 3.57 | Finnhub | Why GRAIL (GRAL) Is Up 12.9% After Positive FDA Panel Verdic |
| 2026-09-30 | Industry | 🟢 +1 | 0.7 | Finnhub | 3 Reasons to Buy Grail (GRAL) Hand Over Fist in October |

---

### NYSE:WT

| Metric | Detail |
|--------|--------|
| Normalized Score | **68** / 100 |
| Raw Weighted Score | 4.27 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 2 / 0 |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w3.57] WisdomTree (WT) Stock Is Up, What You Need To Know
- 🟢 [Analyst Action|w0.7] 3 Reasons Why Growth Investors Shouldn't Overlook WisdomTree, Inc. (WT

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | Analyst Action | 🟢 +1 | 3.57 | Finnhub | WisdomTree (WT) Stock Is Up, What You Need To Know |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | 3 Reasons Why Growth Investors Shouldn't Overlook WisdomTree |

---

### NASDAQ:ARM

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 11 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] AMD Climbs 3% as Chip Stocks Extend Their Run; Arm Jumps 8%, NVIDIA Ri
- 🟢 [Industry|w0.84] Munro Partners Sees Arm Holdings (ARM) as a Key Beneficiary of Agentic
- 🟢 [Industry|w0.59] Arm Stock Surges 5.24% as Agent Safety Needs Two Silicon Layers

**📉 Bearish Factors:**
- 🔴 [Industry|w0.5] Arm Holdings falls 9% amid profit-taking after recent surge

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 1.01 | Finnhub | AMD Climbs 3% as Chip Stocks Extend Their Run; Arm Jumps 8%, |
| 2026-10-01 | Industry | ⚪  0 | 0.84 | Finnhub | Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2 |
| 2026-10-01 | Industry | ⚪  0 | 0.84 | Finnhub | Arm vs. Credo Technology Group: Which Tech Stock Is a Better |
| 2026-10-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Munro Partners Sees Arm Holdings (ARM) as a Key Beneficiary  |
| 2026-09-30 | Industry | ⚪  0 | 0.7 | Finnhub | Advanced Micro Devices vs. Arm: Which Tech Stock Is a Better |
| 2026-09-30 | Analyst Action | ⚪  0 | 0.84 | Finnhub | Arm Is Betting on a World Where Everything Needs a Chip |
| 2026-09-30 | Industry | ⚪  0 | 0.7 | Finnhub | ARM vs. APP: Which AI-Exposed Tech Stock to Consider Right N |
| 2026-09-29 | Industry | 🟢 +1 | 0.59 | Finnhub | Arm Stock Surges 5.24% as Agent Safety Needs Two Silicon Lay |

---

### NYSE:LLY

| Metric | Detail |
|--------|--------|
| Normalized Score | **63** / 100 |
| Raw Weighted Score | 3.12 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w2.52] LLY Highlights New Efficacy Data From Foundayo and EloraTZP Studies
- 🟢 [Industry|w0.6] Eli Lilly (NYSE:LLY) Combines Strong Growth With a High-Quality Techni

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | Industry | 🟢 +1 | 0.6 | Finnhub | Eli Lilly (NYSE:LLY) Combines Strong Growth With a High-Qual |
| 2026-10-02 | Industry | 🟢 +1 | 2.52 | Finnhub | LLY Highlights New Efficacy Data From Foundayo and EloraTZP  |
| 2026-09-30 | Industry | ⚪  0 | 0.5 | Seeking Al | Eli Lilly and Company (LLY) Presents at 2026 EASD Annual Mee |

---

### NASDAQ:PANW

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.94 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 5 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.09] Why Is Palo Alto (PANW) Up 21% Since Last Earnings Report?
- 🟢 [Industry|w1.01] Palo Alto Networks (PANW) Rises Higher Than Market: Key Facts
- 🟢 [Industry|w0.84] PANW Stock Rises 21% in a Month: Should You Hold or Book Profits?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | Industry | ⚪  0 | 1.19 | Finnhub | Palo Alto Networks (PANW) Is a Good Business. But Can Its Gr |
| 2026-10-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Palo Alto Networks (PANW) Rises Higher Than Market: Key Fact |
| 2026-10-02 | Industry | ⚪  0 | 1.01 | Finnhub | Is Trending Stock Palo Alto Networks, Inc. (PANW) a Buy Now? |
| 2026-10-01 | Earnings | 🟢 +1 | 1.09 | Finnhub | Why Is Palo Alto (PANW) Up 21% Since Last Earnings Report? |
| 2026-10-01 | Industry | 🟢 +1 | 0.84 | Finnhub | PANW Stock Rises 21% in a Month: Should You Hold or Book Pro |

---

### NYSE:TT

| Metric | Detail |
|--------|--------|
| Normalized Score | **62** / 100 |
| Raw Weighted Score | 2.9 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Earnings|w1.31] Will Trane Technologies (TT) Beat Estimates Again in Its Next Earnings
- 🟢 [Earnings|w1.09] Trane Technologies (TT) Exceeds Market Returns: Some Facts to Consider
- 🟢 [Analyst Action|w0.5] Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight And HVAC De

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Earnings | 🟢 +1 | 1.31 | Finnhub | Will Trane Technologies (TT) Beat Estimates Again in Its Nex |
| 2026-10-01 | Earnings | 🟢 +1 | 1.09 | Finnhub | Trane Technologies (TT) Exceeds Market Returns: Some Facts t |
| 2026-09-27 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Trane Technologies (TT) Is Up 5.9% After Analyst Spotlight A |

---

### NYSE:TSM

| Metric | Detail |
|--------|--------|
| Normalized Score | **61** / 100 |
| Raw Weighted Score | 2.62 |
| Trading Signal | **🟢 Long (Mid)** |
| Strategy | Positive sentiment flow — suitable for dip-buy or light momentum entry |
| Suitable For | Buy Dip / Light Momentum |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📈 Bullish Factors:**
- 🟢 [Industry|w1.01] TSMC (TSM) Exceeds Market Returns: Some Facts to Consider
- 🟢 [Industry|w1.01] Taiwan Semiconductor (NYSE:TSM) Shows High Growth and Improving Fundam
- 🟢 [Rumor|w0.6] Taiwan Semiconductor Manufacturing (TSM), Why Is Fresh Attention Build

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 1.01 | Finnhub | TSMC (TSM) Exceeds Market Returns: Some Facts to Consider |
| 2026-10-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Taiwan Semiconductor (NYSE:TSM) Shows High Growth and Improv |
| 2026-10-02 | Rumor | 🟢 +1 | 0.6 | Finnhub | Taiwan Semiconductor Manufacturing (TSM), Why Is Fresh Atten |

---

## 🟡 Cautious Long (2)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.34 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.66] ASML (ASML) Increases Despite Market Slip: Here's What You Need to Kno
- 🟢 [Industry|w0.59] ASML Stock Surges 3.8% as AI Rebound Returns to Lithography
- 🟢 [Industry|w0.59] What's Going On With ASML Stock Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: What Revenue Trends Reveal to Investors A |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML vs. Applied Digital: Which Is the Better Semiconductor  |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2 |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials vs. ASML: Which Technology Stock Is a Bett |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: Which Tech Stock Is a Better Buy in 2026? |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Seeking Al | Airbus names ASML, Michelin CEOs to board as Obermann steps  |
| 2026-09-30 | Earnings | ⚪  0 | 0.5 | Finnhub | ASML, TSM Earnings Could Expose a New Risk for the AI Trade |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is What to Know Beyond Why ASML Holding N.V. (ASML) is  |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.29 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.7] Brokers Suggest Investing in Celestica (CLS): Read This Before Placing
- 🟢 [Industry|w0.59] Celestica (CLS) Increases Despite Market Slip: Here's What You Need to
- 🟢 [Industry|w0.5] Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica Inc. (NYSE:CLS) Combines High Growth Leadership Wi |
| 2026-09-29 | Industry | 🟢 +1 | 0.59 | Finnhub | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

## ⚠️ Overheated (3)

### NASDAQ:ON

| Metric | Detail |
|--------|--------|
| Normalized Score | **99** / 100 |
| Raw Weighted Score | 24.52 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 11 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w4.16] Synaptics (SYNA) Soars 14% as ON Semi Sweetens Deal With All-Cash Offe
- 🟢 [M&A|w3.53] Why Are onsemi (ON) Shares Soaring Today
- 🟢 [M&A|w3.53] Onsemi, Synaptics Stocks Rally on Revised Merger Agreement

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | M&A | 🟢 +1 | 4.16 | Finnhub | Synaptics (SYNA) Soars 14% as ON Semi Sweetens Deal With All |
| 2026-10-02 | M&A | 🟢 +1 | 3.53 | Finnhub | Why Are onsemi (ON) Shares Soaring Today |
| 2026-10-02 | M&A | 🟢 +1 | 3.53 | Finnhub | Onsemi, Synaptics Stocks Rally on Revised Merger Agreement |
| 2026-10-02 | Analyst Action | 🟢 +1 | 1.21 | Finnhub | ON Semiconductor's revised Synaptics deal improves earnings  |
| 2026-10-02 | Industry | ⚪  0 | 0.5 | Finnhub | Curious about which S&P500 stocks are generating unusual vol |
| 2026-10-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Nvidia, Tesla, Rivian, On Semi, Seagate, HPE, Nike, and More |
| 2026-10-02 | M&A | 🟢 +1 | 3.53 | Finnhub | ON Semiconductor, Synaptics stocks jump on revised merger de |
| 2026-10-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Nvidia, Tesla, Seagate, ON Semi, Strategy, HPE, and More Sto |

---

### NYSE:P

| Metric | Detail |
|--------|--------|
| Normalized Score | **81** / 100 |
| Raw Weighted Score | 7.33 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 8 / 0 |
| Patterns | Sentiment Strengthening UP (trend) / WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w2.73] Everpure Stock Is September’s Surprise S&P 500 Winner, Surging More Th
- 🟢 [Earnings|w1.36] Everpure (P): Every Analyst Raised Targets After Analyst Day, Free Cas
- 🟢 [Industry|w0.84] Everpure (P), Why Is It Drawing Fresh Attention Today?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Why Did CRWD, TWLO, P Stocks Hit 52-Week Highs Today? |
| 2026-10-01 | Earnings | 🟢 +1 | 2.73 | Finnhub | Everpure Stock Is September’s Surprise S&P 500 Winner, Surgi |
| 2026-10-01 | Industry | 🟢 +1 | 0.84 | Finnhub | Everpure (P), Why Is It Drawing Fresh Attention Today? |
| 2026-09-30 | Industry | 🟢 +1 | 0.7 | Finnhub | Is Everpure (P) Quietly Turning Its Data Platform Into an AI |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Everpure (P) Stock Looks Below Fair Value Despite Its 4x Run |
| 2026-09-30 | Industry | 🟢 +1 | 0.7 | Finnhub | Everpure (P) Unveils AI Data Platform Upgrades With Faster I |
| 2026-09-28 | Analyst Action | ⚪  0 | 0.5 | Finnhub | VNT vs. P: Which Stock Should Value Investors Buy Now? |
| 2026-09-27 | Earnings | 🟢 +1 | 1.36 | Finnhub | Everpure (P): Every Analyst Raised Targets After Analyst Day |

---

### NYSE:ETN

| Metric | Detail |
|--------|--------|
| Normalized Score | **78** / 100 |
| Raw Weighted Score | 6.73 |
| Trading Signal | **⚠️ No Trade (Overheated)** |
| Strategy | Score very high but overheated — wait for pullback to buy dip |
| Suitable For | Buy Dip (wait for pullback) |
| Confidence | Low (risk present) |
| News Kept / Dropped | 5 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [M&A|w3.53] What Does Eaton (ETN) Need To Prove In Its Portfolio Overhaul?
- 🟢 [Industry|w1.19] Eaton (ETN) Expands Austria Plant As Electrification Demand Keeps Its 
- 🟢 [Industry|w1.01] Did Eaton’s Schrems Industry 4.0 Expansion Just Redefine Its European 

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-03 | Industry | 🟢 +1 | 1.19 | Finnhub | Eaton (ETN) Expands Austria Plant As Electrification Demand  |
| 2026-10-02 | Industry | 🟢 +1 | 1.01 | Finnhub | Did Eaton’s Schrems Industry 4.0 Expansion Just Redefine Its |
| 2026-10-02 | M&A | 🟢 +1 | 3.53 | Finnhub | What Does Eaton (ETN) Need To Prove In Its Portfolio Overhau |
| 2026-10-01 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Eaton (ETN) Outpaces Stock Market Gains: What You Should Kno |
| 2026-10-01 | Analyst Action | 🟢 +1 | 0.5 | Finnhub | Eaton Corporation, PLC (ETN) is Attracting Investor Attentio |

---

## ⚠️ Risk Pattern (2)

### NASDAQ:ASML

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.34 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 14 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Earnings|w0.66] ASML (ASML) Increases Despite Market Slip: Here's What You Need to Kno
- 🟢 [Industry|w0.59] ASML Stock Surges 3.8% as AI Rebound Returns to Lithography
- 🟢 [Industry|w0.59] What's Going On With ASML Stock Tuesday?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: What Revenue Trends Reveal to Investors A |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | ASML vs. Applied Digital: Which Is the Better Semiconductor  |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2 |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | Applied Materials vs. ASML: Which Technology Stock Is a Bett |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Finnhub | ASML vs. SK Hynix: Which Tech Stock Is a Better Buy in 2026? |
| 2026-10-01 | Industry | ⚪  0 | 0.5 | Seeking Al | Airbus names ASML, Michelin CEOs to board as Obermann steps  |
| 2026-09-30 | Earnings | ⚪  0 | 0.5 | Finnhub | ASML, TSM Earnings Could Expose a New Risk for the AI Trade |
| 2026-09-30 | Industry | 🟢 +1 | 0.5 | Finnhub | Here is What to Know Beyond Why ASML Holding N.V. (ASML) is  |

---

### NYSE:CLS

| Metric | Detail |
|--------|--------|
| Normalized Score | **64** / 100 |
| Raw Weighted Score | 3.29 |
| Trading Signal | **⚠️ Long (Cautious)** |
| Strategy | Bullish lean but risk flags present — small position, tight stop |
| Suitable For | Buy Dip (small size) |
| Confidence | Medium (risk present) |
| News Kept / Dropped | 6 / 0 |
| Patterns | WARNING: Overheated Sentiment (one-sided bullish) |

**📈 Bullish Factors:**
- 🟢 [Analyst Action|w0.7] Brokers Suggest Investing in Celestica (CLS): Read This Before Placing
- 🟢 [Industry|w0.59] Celestica (CLS) Increases Despite Market Slip: Here's What You Need to
- 🟢 [Industry|w0.5] Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (CLS) Is Setting Up for a Big 2027. Should You Buy |
| 2026-10-01 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica Inc. (NYSE:CLS) Combines High Growth Leadership Wi |
| 2026-09-29 | Industry | 🟢 +1 | 0.59 | Finnhub | Celestica (CLS) Increases Despite Market Slip: Here's What Y |
| 2026-09-29 | Analyst Action | 🟢 +1 | 0.7 | Finnhub | Brokers Suggest Investing in Celestica (CLS): Read This Befo |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica, Inc. (CLS) Is a Trending Stock: Facts to Know Bef |
| 2026-09-28 | Industry | 🟢 +1 | 0.5 | Finnhub | Celestica (NYSE:CLS) and the Affordable Growth Case Behind I |

---

## 🔴 Avoid / Short (1)

### NASDAQ:STX

| Metric | Detail |
|--------|--------|
| Normalized Score | **29** / 100 |
| Raw Weighted Score | -5.04 |
| Trading Signal | **🔴 No Trade / Avoid** |
| Strategy | Bearish lean — reduce exposure, wait for stabilization |
| Suitable For | Reversal (wait for stabilization) |
| Confidence | Medium |
| News Kept / Dropped | 3 / 0 |

**📉 Bearish Factors:**
- 🔴 [Industry|w2.52] STX, WDC Stocks Sink On Toshiba’s Reported Plan To Double AI Hard-Disk
- 🔴 [Industry|w2.52] WDC, STX Stocks Slide Up To 10% — What’s The Toshiba Connection?

**📰 Key News (tagged):**

| Date | Type | Sent | finalW | Source | Headline |
|------|------|------|--------|--------|----------|
| 2026-10-02 | Industry | 🔴 -1 | 2.52 | Finnhub | STX, WDC Stocks Sink On Toshiba’s Reported Plan To Double AI |
| 2026-10-02 | Industry | ⚪  0 | 0.5 | Finnhub | Seagate (STX) Is Selling Into a Shortage. What Happens When  |
| 2026-10-02 | Industry | 🔴 -1 | 2.52 | Finnhub | WDC, STX Stocks Slide Up To 10% — What’s The Toshiba Connect |

---

## ⚪ Watch / Neutral (39)

### NYSE:ELF
- Score: 59/100 | raw: 2.1 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:CRWD
- Score: 58/100 | raw: 1.85 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:ENTG
- Score: 57/100 | raw: 1.61 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:INTC
- Score: 56/100 | raw: 1.5 | News: 13 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:GRMN
- Score: 56/100 | raw: 1.4 | News: 4 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:AEHR
- Score: 55/100 | raw: 1.16 | News: 3 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:PLTR
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:DT
- Score: 54/100 | raw: 1.01 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:KEYS
- Score: 54/100 | raw: 1.01 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:NGG
- Score: 54/100 | raw: 1 | News: 2 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:MU
- Score: 53/100 | raw: 0.78 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SPNT
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:HOOD
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SANM
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:SN
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NYSE:HGTY
- Score: 52/100 | raw: 0.5 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### OTC:SMNEY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:BE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:LITE
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NYSE:ANET
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:TEM
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### OTC:HTHIY
- Score: 50/100 | raw: 0 | News: 0 kept / 0 dropped | No relevant news in window

### NASDAQ:MSFT
- Score: 50/100 | raw: 0.1 | News: 15 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:SNDK
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

### NASDAQ:VICR
- Score: 50/100 | raw: 0 | News: 1 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst

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

### NASDAQ:VRTX
- Score: 49/100 | raw: -0.25 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

### NYSE:VEEV
- Score: 48/100 | raw: -0.5 | News: 4 kept / 0 dropped | No clear directional bias — stay flat

### NASDAQ:WDC
- Score: 43/100 | raw: -1.61 | News: 3 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-10-03T12:29:51.156Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-flash*