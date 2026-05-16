# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-16　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:HPE** | NYSE:HPE | **71.3** | 🟢A | 63.8 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 33.1 | 31.16 | 35.94 | 1.5:1 | OK |
| 2 | **NYSE:CF** | NYSE:CF | **69.8** | 🟢A | 61.3 | 70 | GREEN Long (Mid) | Breakout (Squeeze Release) | 125.62 | 115.1 | 139.33 | 1.3:1 | near_resist/chop |
| 3 | **NASDAQ:AMAT** | NASDAQ:AMAT | **69.2** | 🟡C+ | 46.4 | 91 | WARN No Trade (Overheated) | Trend Continuation | 436.62 | 408.46 | 477.92 | 1.5:1 | near_resist/chop |
| 4 | **NASDAQ:MRVL** | NASDAQ:MRVL | **68.8** | 🟢A | 47.7 | 88 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 176.89 | 160.97 | 200.24 | 1.5:1 | mom_decay |
| 5 | **NASDAQ:ADI** | NASDAQ:ADI | **63.3** | 🟢A | 45.9 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 417.49 | 399.96 | 443.21 | 1.5:1 | mom_decay |
| 6 | **NASDAQ:BGC** | NASDAQ:BGC | **62** | 🟢A | 41 | 81 | GREEN Long (Strong) | Breakout (Squeeze Release) | 11.22 | 10.57 | 12.06 | 1.3:1 | mom_decay/near_resist/bear_div |
| 7 | **NASDAQ:LRCX** | NASDAQ:LRCX | **61.3** | 🟢A | 35.8 | 87 | GREEN Long (Strong) | Trend Continuation | 284.72 | 263.79 | 315.41 | 1.5:1 | chop |
| 8 | **NYSE:MTZ** | NYSE:MTZ | **60.1** | 🟢A | 50.9 | 74 | WARN Long (Cautious) | Pullback Buy (Near Support) | 408.68 | 378.39 | 451.41 | 1.4:1 | mom_decay |
| 9 | **NASDAQ:NVDA** | NASDAQ:NVDA | **57.8** | 🟢A | 46.6 | 62 | GREEN Long (Mid) | Trend Continuation | 225.32 | 213.15 | 243.17 | 1.5:1 | OK |
| 10 | **NASDAQ:RKLB** | NASDAQ:RKLB | **57.8** | 🟡C+ | 41.4 | 95 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 124.77 | 110.36 | 143.98 | 1.3:1 | overheated |
| 11 | **NASDAQ:VSAT** | NASDAQ:VSAT | **57.7** | ⚪C | 54.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 69.5 | 63.97 | 77.6 | 1.5:1 | OK |
| 12 | **NYSE:IRM** | NYSE:IRM | **57.4** | 🟢A | 36.6 | 76 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 125.07 | 118.69 | 134.43 | 1.5:1 | mom_decay/low_rr |
| 13 | **NYSE:SPNT** | NYSE:SPNT | **56.4** | ⚪C | 48.3 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 23.03 | 21.68 | 24.74 | 1.3:1 | mom_decay/near_resist/chop |
| 14 | **NYSE:JHG** | NYSE:JHG | **56.1** | ⚪C | 60.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 50.94 | 51.62 | 51.82 | -1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **NYSE:JCI** | NYSE:JCI | **56** | 🟢A | 37 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 143.51 | 135.61 | 153.45 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NASDAQ:APLD** | NASDAQ:APLD | **55.4** | 🟢A | 40.6 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 42.56 | 36.94 | 50.8 | 1.5:1 | OK |
| 17 | **NASDAQ:CORZ** | NASDAQ:CORZ | **55.3** | 🔵B | 27.2 | 85 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 24.21 | 21.74 | 27.83 | 1.5:1 | fake_break/near_resist/low_rr |
| 18 | **NASDAQ:MTSI** | NASDAQ:MTSI | **54.5** | 🟡C+ | 40.5 | 88 | WARN No Trade (Overheated) | Reversal (Bullish RSI Divergence) | 375.6 | 345.74 | 415.41 | 1.3:1 | overheated/mom_decay/bear_div |
| 19 | **NASDAQ:INTC** | NASDAQ:INTC | **54.5** | 🟢A | 37.2 | 68 | GREEN Long (Mid) | Trend Continuation | 108.77 | 94.9 | 129.11 | 1.5:1 | low_rr |
| 20 | **NYSE:PWR** | NYSE:PWR | **54.4** | 🟢A | 30.4 | 78 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 769.99 | 721.48 | 841.14 | 1.5:1 | fake_break/near_resist/low_rr |
| 21 | **NYSE:P** | NYSE:P | **53.6** | 🟡C+ | 45.7 | 78 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 79.96 | 71.93 | 90.43 | 1.3:1 | OK |
| 22 | **NASDAQ:LITE** | NASDAQ:LITE | **53.4** | 🟢A | 32 | 73 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 970.7 | 839.66 | 1162.9 | 1.5:1 | low_rr |
| 23 | **NASDAQ:GEN** | NASDAQ:GEN | **52.5** | ⚪C | 45.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 23.45 | 22.15 | 25.36 | 1.5:1 | low_rr |
| 24 | **NYSE:LAR** | NYSE:LAR | **52.1** | 🔵B | 29.9 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 9.96 | 8.81 | 11.65 | 1.5:1 | mom_decay/low_rr |
| 25 | **NYSE:COHR** | NYSE:COHR | **51.5** | ⚪C | 38.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 382.45 | 340 | 444.71 | 1.5:1 | OK |
| 26 | **NYSE:DELL** | NYSE:DELL | **51.5** | 🟢A | 35.5 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 241.99 | 220.94 | 272.87 | 1.5:1 | low_rr |
| 27 | **NYSE:GLW** | NYSE:GLW | **50.7** | 🟢A | 36.2 | 60 | GREEN Long (Mid) | Trend Continuation | 191.81 | 169.66 | 224.3 | 1.5:1 | OK |
| 28 | **NYSE:GNRC** | NYSE:GNRC | **49.6** | ⚪C | 49.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 259.72 | 240.48 | 286.88 | 1.4:1 | OK |
| 29 | **NYSE:ENS** | NYSE:ENS | **49.6** | ⚪C | 39 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 236.98 | 225.6 | 253.66 | 1.5:1 | bull_trap/near_resist |
| 30 | **NASDAQ:POWL** | NASDAQ:POWL | **49.5** | 🔵B | 27.5 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 292.65 | 260.6 | 339.65 | 1.5:1 | mom_decay/bear_div/low_rr |
| 31 | **NYSE:MS** | NYSE:MS | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 193.09 | 184.54 | 203.58 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 32 | **NYSE:RIO** | NYSE:RIO | **48.6** | ⚪C | 39.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 103.69 | 98.87 | 110.76 | 1.5:1 | OK |
| 33 | **NASDAQ:KLAC** | NASDAQ:KLAC | **48.6** | 🔵B | 29 | 78 | GREEN Long (Strong) | Pullback Buy (Near Support) | 1777.26 | 1631.11 | 1977.53 | 1.4:1 | mom_decay/chop |
| 34 | **CBOE:CBOE** | CBOE:CBOE | **48.4** | 🔵B | 27.7 | 67 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 363.02 | 345.6 | 388.58 | 1.5:1 | fake_break/bull_trap/near_resist |
| 35 | **NASDAQ:SANM** | NASDAQ:SANM | **47.3** | ⚪C | 45.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 231.81 | 203.8 | 266.88 | 1.3:1 | mom_decay |
| 36 | **NASDAQ:AVGO** | NASDAQ:AVGO | **46.7** | 🔵B | 20.8 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 425.19 | 399.68 | 462.61 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 37 | **NYSE:NOK** | NYSE:NOK | **46.6** | 🔵B | 23.4 | 69 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 13.95 | 12.51 | 16.07 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 38 | **NYSE:FN** | NYSE:FN | **46.2** | ⚪C | 29.3 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 722.04 | 645.14 | 834.82 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **NYSE:AROC** | NYSE:AROC | **46** | ⚪C | 40.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 36.87 | 34.59 | 40.27 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 40 | **NYSE:TRNO** | NYSE:TRNO | **45.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 65.25 | 62.94 | 67.98 | 1.2:1 | mom_decay/near_resist |
| 41 | **NYSE:HG** | NYSE:HG | **45.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 31.84 | 28.69 | 36.46 | 1.5:1 | near_resist/bear_div/low_rr |
| 42 | **NYSE:CIEN** | NYSE:CIEN | **44.9** | 🔵B | 26.5 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 554.46 | 501.23 | 632.53 | 1.5:1 | mom_decay/bear_div |
| 43 | **NYSE:LTC** | NYSE:LTC | **44.7** | ⚪C | 30.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.02 | 36.75 | 39.52 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 44 | **NYSE:PACS** | NYSE:PACS | **44.7** | 🔵B | 25.8 | 73 | WARN Long (Cautious) | Pullback Buy (Near Support) | 36.92 | 32.68 | 42.28 | 1.3:1 | near_resist/chop/low_rr |
| 45 | **NASDAQ:ADEA** | NASDAQ:ADEA | **44.6** | 🟢A | 30.4 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 29.43 | 25.22 | 34.54 | 1.2:1 | mom_decay/near_resist |
| 46 | **NASDAQ:AMD** | NASDAQ:AMD | **44.6** | ⚪C | 26.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 424.1 | 382.75 | 484.75 | 1.5:1 | bear_div/low_rr |
| 47 | **NYSE:SMP** | NYSE:SMP | **44.3** | 🔵B | 25.5 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 37.11 | 34.47 | 40.52 | 1.3:1 | mom_decay/near_resist/low_rr |
| 48 | **NASDAQ:EQIX** | NASDAQ:EQIX | **43.5** | ⚪C | 33.1 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1043.55 | 1012.82 | 1106.06 | 2:1 | mom_decay/near_resist |
| 49 | **NYSE:MOD** | NYSE:MOD | **42.9** | ⚪C | 31.1 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 271.26 | 245.22 | 309.45 | 1.5:1 | low_rr |
| 50 | **NASDAQ:IREN** | NASDAQ:IREN | **42.4** | ⚪C | 32.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 52.15 | 41.93 | 63.95 | 1.2:1 | near_resist |
| 51 | **NASDAQ:INCY** | NASDAQ:INCY | **42** | ⚪C | 26.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 95.6 | 89.48 | 103.41 | 1.3:1 | mom_decay/chop/bear_div |
| 52 | **NASDAQ:RMBS** | NASDAQ:RMBS | **41.3** | 🔵B | 17.2 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 127.05 | 111.61 | 149.69 | 1.5:1 | mom_decay/near_resist/low_rr |
| 53 | **NASDAQ:OSBC** | NASDAQ:OSBC | **40.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 20.12 | 19.29 | 21.57 | 1.7:1 | mom_decay/near_resist/low_rr |
| 54 | **NYSE:ETN** | NYSE:ETN | **40.5** | 🔵B | 18.8 | 73 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 399.44 | 374.28 | 432.99 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 55 | **NASDAQ:MU** | NASDAQ:MU | **40.2** | ⚪C | 34.3 | 49 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 724.66 | 644.22 | 831.91 | 1.3:1 | overheated/low_rr |
| 56 | **NYSE:AIR** | NYSE:AIR | **40.1** | 🔵B | 16.8 | 75 | GREEN Long (Strong) | Pullback Buy (Near Support) | 102.98 | 95.14 | 113.96 | 1.4:1 | mom_decay/near_resist/chop |
| 57 | **NYSE:DKS** | NYSE:DKS | **36.9** | 🔵B | 21.5 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 213.23 | 201.76 | 231.2 | 1.6:1 | mom_decay/near_resist/chop |
| 58 | **NYSE:TT** | NYSE:TT | **36.7** | 🔵B | 15.2 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 459.6 | 438.6 | 494.6 | 1.7:1 | mom_decay/near_resist/low_rr |
| 59 | **NASDAQ:PRDO** | NASDAQ:PRDO | **34** | ⚪C | 23.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 33.5 | 31.83 | 36.19 | 1.6:1 | near_resist/chop/low_rr |
| 60 | **NASDAQ:ASML** | NASDAQ:ASML | **33.9** | ⚪C | 23.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1479.28 | 1369.65 | 1633.97 | 1.4:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **71.3** |
| Tech Score | 63.8 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 33.1 |
| **Entry** | **33.1** |
| **Stop** | **31.16** (ATR × 1.5) |
| **Target** | **35.94** |
| R/R | 1.5:1 |
| RSI | 69.7 |
| ATR% | 3.9% |
| Dist EMA20 | 11.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 2. NYSE:CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **69.8** |
| Tech Score | 61.3 (Breakout (Squeeze Release)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 125.24 |
| **Entry** | **125.62** |
| **Stop** | **115.1** (ATR × 1.8) |
| **Target** | **139.33** |
| R/R | 1.3:1 |
| RSI | 52.2 |
| ATR% | 4.5% |
| Dist EMA20 | 1.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 3. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **68.8** |
| Tech Score | 47.7 (Trend Follow (HH/HL Intact)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 176.89 |
| **Entry** | **176.89** |
| **Stop** | **160.97** (ATR × 1.5) |
| **Target** | **200.24** |
| R/R | 1.5:1 |
| RSI | 65.9 |
| ATR% | 6% |
| Dist EMA20 | 9.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay |

### 4. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **63.3** |
| Tech Score | 45.9 (Trend Follow (HH/HL Intact)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 417.49 |
| **Entry** | **417.49** |
| **Stop** | **399.96** (ATR × 1.5) |
| **Target** | **443.21** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 2.8% |
| Dist EMA20 | 4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 5. NASDAQ:BGC (NASDAQ:BGC)

| Field | Value |
|-------|-------|
| Combined Score | **62** |
| Tech Score | 41 (Breakout (Squeeze Release)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 11.19 |
| **Entry** | **11.22** |
| **Stop** | **10.57** (ATR × 1.8) |
| **Target** | **12.06** |
| R/R | 1.3:1 |
| RSI | 53.1 |
| ATR% | 3.1% |
| Dist EMA20 | 0.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist bear_div |

### 6. NASDAQ:LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **61.3** |
| Tech Score | 35.8 (Trend Continuation) |
| News Score | 87 → GREEN Long (Strong) |
| Current Price | 284.72 |
| **Entry** | **284.72** |
| **Stop** | **263.79** (ATR × 1.5) |
| **Target** | **315.41** |
| R/R | 1.5:1 |
| RSI | 57.1 |
| ATR% | 4.9% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop |

### 7. NYSE:MTZ (NYSE:MTZ)

| Field | Value |
|-------|-------|
| Combined Score | **60.1** |
| Tech Score | 50.9 (Pullback Buy (Near Support)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 414.9 |
| **Entry** | **408.68** |
| **Stop** | **378.39** (ATR × 2) |
| **Target** | **451.41** |
| R/R | 1.4:1 |
| RSI | 59.4 |
| ATR% | 4.4% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 8. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **57.8** |
| Tech Score | 46.6 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 225.32 |
| **Entry** | **225.32** |
| **Stop** | **213.15** (ATR × 1.5) |
| **Target** | **243.17** |
| R/R | 1.5:1 |
| RSI | 64.7 |
| ATR% | 3.6% |
| Dist EMA20 | 6.7% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 9. NYSE:IRM (NYSE:IRM)

| Field | Value |
|-------|-------|
| Combined Score | **57.4** |
| Tech Score | 36.6 (Trend Follow (HH/HL Intact)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 125.07 |
| **Entry** | **125.07** |
| **Stop** | **118.69** (ATR × 1.5) |
| **Target** | **134.43** |
| R/R | 1.5:1 |
| RSI | 57.3 |
| ATR% | 3.4% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 10. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **56** |
| Tech Score | 37 (Breakout (Squeeze Release)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 143.08 |
| **Entry** | **143.51** |
| **Stop** | **135.61** (ATR × 1.8) |
| **Target** | **153.45** |
| R/R | 1.3:1 |
| RSI | 54.2 |
| ATR% | 2.9% |
| Dist EMA20 | 0.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 11. NASDAQ:APLD (NASDAQ:APLD)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 40.6 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 42.56 |
| **Entry** | **42.56** |
| **Stop** | **36.94** (ATR × 1.5) |
| **Target** | **50.8** |
| R/R | 1.5:1 |
| RSI | 60.8 |
| ATR% | 8.8% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 12. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **54.5** |
| Tech Score | 37.2 (Trend Continuation) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 108.77 |
| **Entry** | **108.77** |
| **Stop** | **94.9** (ATR × 1.5) |
| **Target** | **129.11** |
| R/R | 1.5:1 |
| RSI | 62.3 |
| ATR% | 8.5% |
| Dist EMA20 | 8.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 13. NYSE:PWR (NYSE:PWR)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 30.4 (Trend Follow (HH/HL Intact)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 769.99 |
| **Entry** | **769.99** |
| **Stop** | **721.48** (ATR × 1.5) |
| **Target** | **841.14** |
| R/R | 1.5:1 |
| RSI | 69.3 |
| ATR% | 4.2% |
| Dist EMA20 | 7.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | fake_break near_resist low_rr |

### 14. NASDAQ:LITE (NASDAQ:LITE)

| Field | Value |
|-------|-------|
| Combined Score | **53.4** |
| Tech Score | 32 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 970.7 |
| **Entry** | **970.7** |
| **Stop** | **839.66** (ATR × 1.5) |
| **Target** | **1162.9** |
| R/R | 1.5:1 |
| RSI | 55.6 |
| ATR% | 9% |
| Dist EMA20 | 4.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 15. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 35.5 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 241.99 |
| **Entry** | **241.99** |
| **Stop** | **220.94** (ATR × 1.5) |
| **Target** | **272.87** |
| R/R | 1.5:1 |
| RSI | 63 |
| ATR% | 5.8% |
| Dist EMA20 | 7.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 16. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 36.2 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 191.81 |
| **Entry** | **191.81** |
| **Stop** | **169.66** (ATR × 1.5) |
| **Target** | **224.3** |
| R/R | 1.5:1 |
| RSI | 58.9 |
| ATR% | 7.7% |
| Dist EMA20 | 6.3% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 17. NASDAQ:ADEA (NASDAQ:ADEA)

| Field | Value |
|-------|-------|
| Combined Score | **44.6** |
| Tech Score | 30.4 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 29.88 |
| **Entry** | **29.43** |
| **Stop** | **25.22** (ATR × 2) |
| **Target** | **34.54** |
| R/R | 1.2:1 |
| RSI | 52 |
| ATR% | 7.8% |
| Dist EMA20 | -0.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AMAT** | NASDAQ:AMAT | 69.2 | 46.4 | 91(hot) | 436.62 | **410.42** | 399.07 | 474.17 |
| **NASDAQ:RKLB** | NASDAQ:RKLB | 57.8 | 41.4 | 95(hot) | 124.77 | **117.28** | 105.56 | 143.98 |
| **NASDAQ:MTSI** | NASDAQ:MTSI | 54.5 | 40.5 | 88(hot) | 375.6 | **353.06** | 335.79 | 415.41 |
| **NYSE:P** | NYSE:P | 53.6 | 45.7 | 78(hot) | 81.18 | **76.31** | 71.93 | 90.43 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/16 15:48:00*