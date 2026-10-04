# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-29　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:WT** | NYSE:WT | **60.6** | 🟢A | 60.4 | 61 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 24.06 | 22.69 | 25.89 | 1.3:1 | mom_decay |
| 2 | **NYSE:ASX** | NYSE:ASX | **59.1** | 🟢A | 36.9 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 43.79 | 41.16 | 47.64 | 1.5:1 | near_resist/low_rr |
| 3 | **NASDAQ:AAPL** | NASDAQ:AAPL | **58** | 🟢A | 40.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 338.4 | 328.25 | 353.29 | 1.5:1 | near_resist/low_rr |
| 4 | **NYSE:DT** | NYSE:DT | **56.6** | ⚪C | 47.4 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 57.84 | 55.15 | 61.78 | 1.5:1 | near_resist |
| 5 | **NASDAQ:AMD** | NASDAQ:AMD | **56.3** | ⚪C | 48.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 607.87 | 568.66 | 665.37 | 1.5:1 | OK |
| 6 | **NYSE:ETN** | NYSE:ETN | **56.2** | 🟢A | 32.7 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 431.41 | 409.41 | 463.68 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **NYSE:BE** | NYSE:BE | **54** | 🟢A | 33.6 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 262.87 | 234.48 | 304.51 | 1.5:1 | mom_decay/chop |
| 8 | **NYSE:TSM** | NYSE:TSM | **53.2** | 🟢A | 46.7 | 63 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 452.88 | 437.93 | 472.81 | 1.3:1 | chop/low_rr |
| 9 | **NASDAQ:MSFT** | NASDAQ:MSFT | **53** | ⚪C | 44.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 510.75 | 489.05 | 537.23 | 1.2:1 | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:NVDA** | NASDAQ:NVDA | **53** | 🟢A | 39.4 | 61 | GREEN Long (Mid) | Trend Continuation | 228.86 | 220.96 | 240.44 | 1.5:1 | near_resist/chop/low_rr |
| 11 | **NYSE:GRMN** | NYSE:GRMN | **51.5** | 🟢A | 36.2 | 62 | GREEN Long (Mid) | Trend Continuation | 294.05 | 283.91 | 308.93 | 1.5:1 | chop/low_rr |
| 12 | **NYSE:ANET** | NYSE:ANET | **51.3** | 🟢A | 31.2 | 69 | GREEN Long (Mid) | Trend Continuation | 204.92 | 193.85 | 221.15 | 1.5:1 | near_resist/chop/low_rr |
| 13 | **NYSE:SN** | NYSE:SN | **50.7** | 🟢A | 43.1 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 179.26 | 167.43 | 196.55 | 1.5:1 | near_resist/low_rr |
| 14 | **NASDAQ:MU** | NASDAQ:MU | **50.2** | 🟢A | 31.3 | 66 | GREEN Long (Mid) | Trend Continuation | 1053.98 | 986 | 1153.69 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **NYSE:JOE** | NYSE:JOE | **50** | ⚪C | 39 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.19 | 63.02 | 70.11 | 1.2:1 | near_resist/chop/low_rr |
| 16 | **NYSE:LTC** | NYSE:LTC | **49.9** | ⚪C | 44.1 | 46 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 43.09 | 41.67 | 45.18 | 1.5:1 | mom_decay/near_resist/low_rr |
| 17 | **NASDAQ:META** | NASDAQ:META | **49.1** | 🟢A | 36.5 | 68 | WARN Long (Cautious) | Pullback Buy (Near Support) | 704.89 | 652.65 | 778.59 | 1.4:1 | near_resist/low_rr |
| 18 | **NASDAQ:ARM** | NASDAQ:ARM | **48.9** | 🔵B | 29.1 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 283.33 | 252.73 | 328.21 | 1.5:1 | near_resist/low_rr |
| 19 | **NYSE:IFS** | NYSE:IFS | **48.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 55.69 | 53.42 | 58.43 | 1.2:1 | near_resist/chop/low_rr |
| 20 | **NASDAQ:AEHR** | NASDAQ:AEHR | **48.1** | 🔵B | 23.8 | 72 | GREEN Long (Mid) | Trend Continuation | 98.49 | 86.08 | 116.69 | 1.5:1 | near_resist/chop/low_rr |
| 21 | **NYSE:SCCO** | NYSE:SCCO | **47.6** | 🔵B | 26.3 | 67 | GREEN Long (Mid) | Trend Continuation | 202.63 | 191.38 | 219.12 | 1.5:1 | near_resist/chop/low_rr |
| 22 | **NASDAQ:TEM** | NASDAQ:TEM | **47.2** | ⚪C | 42.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 83.8 | 75.38 | 94.78 | 1.3:1 | overheated |
| 23 | **NYSE:VEEV** | NYSE:VEEV | **45** | ⚪C | 46.3 | 43 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 275.76 | 265.4 | 294.52 | 1.8:1 | mom_decay |
| 24 | **NYSE:KEYS** | NYSE:KEYS | **43.8** | ⚪C | 28 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 359.74 | 343.01 | 384.27 | 1.5:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:NBIS** | NASDAQ:NBIS | **43.7** | ⚪C | 27.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 231.88 | 209.27 | 265.04 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:SNDK** | NASDAQ:SNDK | **43.7** | 🔵B | 19.8 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1712.89 | 1558.73 | 1938.99 | 1.5:1 | chop/low_rr |
| 27 | **NASDAQ:SANM** | NASDAQ:SANM | **43.6** | 🔵B | 29.3 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 216.76 | 198.05 | 242.07 | 1.4:1 | near_resist/chop/low_rr |
| 28 | **NASDAQ:LITE** | NASDAQ:LITE | **42.7** | 🔵B | 16.9 | 69 | GREEN Long (Mid) | Breakout (Squeeze Release) | 924.08 | 816.84 | 1066.43 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 29 | **NASDAQ:STX** | NASDAQ:STX | **42.6** | 🔵B | 16 | 70 | GREEN Long (Mid) | Trend Continuation | 921.51 | 852.4 | 1022.88 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 30 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 31 | **NASDAQ:PLTR** | NASDAQ:PLTR | **41.9** | 🔵B | 16.8 | 67 | GREEN Long (Mid) | Trend Continuation | 187.48 | 178.76 | 200.27 | 1.5:1 | near_resist/bear_div/low_rr |
| 32 | **NYSE:BAP** | NYSE:BAP | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 380.16 | 367.42 | 404.48 | 1.9:1 | near_resist/chop/low_rr |
| 33 | **NASDAQ:ENTG** | NASDAQ:ENTG | **41.8** | ⚪C | 25.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 150.63 | 141.14 | 164.55 | 1.5:1 | near_resist/chop/low_rr |
| 34 | **NASDAQ:QCOM** | NASDAQ:QCOM | **41.7** | ⚪C | 25.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 187.48 | 172.01 | 210.17 | 1.5:1 | bear_div/low_rr |
| 35 | **NYSE:P** | NYSE:P | **40.6** | 🔵B | 17 | 76 | GREEN Long (Strong) | Overextended Chase (High Risk) | 129.4 | 118.72 | 143.63 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 36 | **NASDAQ:INTC** | NASDAQ:INTC | **40.2** | ⚪C | 23.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 116.03 | 105.76 | 131.09 | 1.5:1 | low_rr |
| 37 | **NASDAQ:PANW** | NASDAQ:PANW | **40.1** | 🔵B | 15.9 | 64 | GREEN Long (Mid) | Trend Continuation | 392.09 | 364.45 | 432.63 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 38 | **NASDAQ:HOOD** | NASDAQ:HOOD | **37.2** | 🔵B | 17.3 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 114.71 | 104.58 | 128.34 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 39 | **NYSE:SPNT** | NYSE:SPNT | **36.8** | ⚪C | 28 | 50 | NEUTRAL No Trade (No relevant news) | Pullback Buy (Near Support) | 24.46 | 23.49 | 26.17 | 1.8:1 | near_resist/chop/low_rr |
| 40 | **OTC:HTHIY** | OTC:HTHIY | **35** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.43 | 32.71 | 37.19 | 1.6:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **60.6** |
| Tech Score | 60.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 24.06 |
| **Entry** | **24.06** |
| **Stop** | **22.69** (ATR × 1.5) |
| **Target** | **25.89** |
| R/R | 1.3:1 |
| RSI | 56.6 |
| ATR% | 3.8% |
| Dist EMA20 | 2.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay |

### 2. NYSE:ASX (NYSE:ASX)

| Field | Value |
|-------|-------|
| Combined Score | **59.1** |
| Tech Score | 36.9 (Trend Follow (HH/HL Intact)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 43.79 |
| **Entry** | **43.79** |
| **Stop** | **41.16** (ATR × 1.5) |
| **Target** | **47.64** |
| R/R | 1.5:1 |
| RSI | 61.9 |
| ATR% | 4% |
| Dist EMA20 | 6.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

### 3. NASDAQ:AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **58** |
| Tech Score | 40.4 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 338.4 |
| **Entry** | **338.4** |
| **Stop** | **328.25** (ATR × 1.5) |
| **Target** | **353.29** |
| R/R | 1.5:1 |
| RSI | 61.8 |
| ATR% | 2% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

### 4. NYSE:ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 32.7 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 431.41 |
| **Entry** | **431.41** |
| **Stop** | **409.41** (ATR × 1.5) |
| **Target** | **463.68** |
| R/R | 1.5:1 |
| RSI | 54.7 |
| ATR% | 3.4% |
| Dist EMA20 | 2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 5. NYSE:BE (NYSE:BE)

| Field | Value |
|-------|-------|
| Combined Score | **54** |
| Tech Score | 33.6 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 262.87 |
| **Entry** | **262.87** |
| **Stop** | **234.48** (ATR × 1.5) |
| **Target** | **304.51** |
| R/R | 1.5:1 |
| RSI | 52.7 |
| ATR% | 7.2% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay chop |

### 6. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **53.2** |
| Tech Score | 46.7 (Reversal (Bullish RSI Divergence)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 452.88 |
| **Entry** | **452.88** |
| **Stop** | **437.93** (ATR × 1.5) |
| **Target** | **472.81** |
| R/R | 1.3:1 |
| RSI | 63.2 |
| ATR% | 2.2% |
| Dist EMA20 | 4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 7. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **53** |
| Tech Score | 39.4 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 228.86 |
| **Entry** | **228.86** |
| **Stop** | **220.96** (ATR × 1.5) |
| **Target** | **240.44** |
| R/R | 1.5:1 |
| RSI | 58.6 |
| ATR% | 2.3% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 8. NYSE:GRMN (NYSE:GRMN)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 36.2 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 294.05 |
| **Entry** | **294.05** |
| **Stop** | **283.91** (ATR × 1.5) |
| **Target** | **308.93** |
| R/R | 1.5:1 |
| RSI | 62.5 |
| ATR% | 2.3% |
| Dist EMA20 | 3.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 9. NYSE:ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 31.2 (Trend Continuation) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 204.92 |
| **Entry** | **204.92** |
| **Stop** | **193.85** (ATR × 1.5) |
| **Target** | **221.15** |
| R/R | 1.5:1 |
| RSI | 58.3 |
| ATR% | 3.6% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 10. NYSE:SN (NYSE:SN)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 43.1 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 181.99 |
| **Entry** | **179.26** |
| **Stop** | **167.43** (ATR × 2) |
| **Target** | **196.55** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 4% |
| Dist EMA20 | 5.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 11. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **50.2** |
| Tech Score | 31.3 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 1053.98 |
| **Entry** | **1053.98** |
| **Stop** | **986** (ATR × 1.5) |
| **Target** | **1153.69** |
| R/R | 1.5:1 |
| RSI | 58.4 |
| ATR% | 4.3% |
| Dist EMA20 | 4.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 12. NASDAQ:META (NASDAQ:META)

| Field | Value |
|-------|-------|
| Combined Score | **49.1** |
| Tech Score | 36.5 (Pullback Buy (Near Support)) |
| News Score | 68 → WARN Long (Cautious) |
| Current Price | 715.62 |
| **Entry** | **704.89** |
| **Stop** | **652.65** (ATR × 2) |
| **Target** | **778.59** |
| R/R | 1.4:1 |
| RSI | 60.9 |
| ATR% | 4.4% |
| Dist EMA20 | 5% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/29 21:00:06*