# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-28　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:AMAT** | NASDAQ:AMAT | **68.3** | 🟢A | 42.9 | 94 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 448.25 | 417.99 | 492.63 | 1.5:1 | near_resist/chop |
| 2 | **NYSE:P** | NYSE:P | **67.8** | 🟢A | 53.3 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 85.74 | 77.51 | 97.81 | 1.5:1 | near_resist/low_rr |
| 3 | **NASDAQ:ADI** | NASDAQ:ADI | **65.3** | 🟢A | 47.8 | 79 | GREEN Long (Strong) | Trend Continuation | 416.88 | 391.87 | 453.57 | 1.5:1 | mom_decay/low_rr |
| 4 | **NASDAQ:AVGO** | NASDAQ:AVGO | **65** | 🟢A | 45.3 | 82 | GREEN Long (Strong) | Breakout (Squeeze Release) | 423.13 | 392.25 | 462.99 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 5 | **NASDAQ:LRCX** | NASDAQ:LRCX | **64.6** | 🟡C+ | 39.3 | 90 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 318.93 | 296.45 | 351.91 | 1.5:1 | bear_div |
| 6 | **NYSE:TRNO** | NYSE:TRNO | **64.3** | 🟢A | 56.9 | 63 | GREEN Long (Mid) | Breakout (Squeeze Release) | 66.95 | 64.83 | 69.42 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **NYSE:TSM** | NYSE:TSM | **63.9** | 🟢A | 46.9 | 77 | GREEN Long (Strong) | Breakout (Squeeze Release) | 424 | 396.1 | 459.72 | 1.3:1 | mom_decay/near_resist |
| 8 | **NASDAQ:INCY** | NASDAQ:INCY | **62** | 🟢A | 49.6 | 68 | WARN Long (Cautious) | Breakout (Squeeze Release) | 97.63 | 92.78 | 103.67 | 1.2:1 | mom_decay/near_resist/chop |
| 9 | **NYSE:SMP** | NYSE:SMP | **60.1** | ⚪C | 55.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 40.22 | 37.36 | 43.91 | 1.3:1 | near_resist/low_rr |
| 10 | **NYSE:NOK** | NYSE:NOK | **60.1** | 🟢A | 42.9 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 15.68 | 14.13 | 17.75 | 1.3:1 | overheated/bear_div |
| 11 | **NYSE:MOD** | NYSE:MOD | **59** | 🟢A | 34.6 | 83 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 279.93 | 244.66 | 331.66 | 1.5:1 | mom_decay/near_resist/low_rr |
| 12 | **NASDAQ:IREN** | NASDAQ:IREN | **57.2** | 🟢A | 32.6 | 94 | GREEN Long (Strong) | Overextended Chase (High Risk) | 67.84 | 59.19 | 79.37 | 1.3:1 | overheated/low_rr |
| 13 | **NASDAQ:MRVL** | NASDAQ:MRVL | **57** | 🟡C+ | 39.4 | 96 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 198.7 | 176.94 | 227.71 | 1.3:1 | overheated/bear_div |
| 14 | **NASDAQ:OSBC** | NASDAQ:OSBC | **56.6** | ⚪C | 52.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.29 | 20.35 | 22.45 | 1.2:1 | near_resist/chop/low_rr |
| 15 | **NASDAQ:ERIC** | NASDAQ:ERIC | **56.1** | 🟢A | 43.8 | 62 | GREEN Long (Mid) | Trend Continuation | 13.04 | 12.45 | 13.9 | 1.5:1 | OK |
| 16 | **NYSE:MS** | NYSE:MS | **55.9** | 🟢A | 43.5 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 201.61 | 194.96 | 211.37 | 1.5:1 | near_resist/bear_div |
| 17 | **CBOE:CBOE** | CBOE:CBOE | **55.4** | 🟢A | 38.6 | 68 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 347.69 | 332.04 | 370.64 | 1.5:1 | mom_decay/low_rr |
| 18 | **NASDAQ:VIAV** | NASDAQ:VIAV | **54.8** | 🟢A | 37 | 69 | WARN Long (Cautious) | Trend Continuation | 53.05 | 47.72 | 60.88 | 1.5:1 | mom_decay/low_rr |
| 19 | **NASDAQ:MU** | NASDAQ:MU | **54.8** | 🟢A | 30.6 | 91 | WARN Long (Cautious) | Overextended Chase (High Risk) | 928.41 | 826.75 | 1063.96 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 20 | **NYSE:GNRC** | NYSE:GNRC | **54.7** | 🟢A | 30.8 | 78 | GREEN Long (Strong) | Trend Continuation | 280.53 | 262.02 | 307.69 | 1.5:1 | fake_break/mom_decay/near_resist/bear_div |
| 21 | **NASDAQ:ASML** | NASDAQ:ASML | **54.2** | 🔵B | 20 | 93 | GREEN Long (Strong) | Trend Continuation | 1597.87 | 1497.2 | 1745.51 | 1.5:1 | near_resist/chop/low_rr |
| 22 | **NASDAQ:RMBS** | NASDAQ:RMBS | **52.9** | ⚪C | 40.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 148.66 | 134.17 | 169.92 | 1.5:1 | low_rr |
| 23 | **NYSE:COHR** | NYSE:COHR | **52.2** | 🔵B | 29.3 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 380.18 | 336.84 | 443.75 | 1.5:1 | mom_decay/low_rr |
| 24 | **NASDAQ:KLAC** | NASDAQ:KLAC | **50.9** | ⚪C | 43.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 1957.19 | 1825.08 | 2150.95 | 1.5:1 | chop |
| 25 | **NYSE:WT** | NYSE:WT | **50.8** | 🟢A | 41.4 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 18.59 | 17.55 | 20.19 | 1.5:1 | mom_decay/bear_div |
| 26 | **NASDAQ:INTC** | NASDAQ:INTC | **50.3** | ⚪C | 42.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 121.77 | 107.16 | 143.2 | 1.5:1 | mom_decay/low_rr |
| 27 | **NYSE:RIO** | NYSE:RIO | **50.2** | ⚪C | 36 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 106.61 | 102.13 | 113.18 | 1.5:1 | mom_decay/chop/low_rr |
| 28 | **NASDAQ:TTMI** | NASDAQ:TTMI | **49.7** | 🟡C+ | 39.1 | 78 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 190.67 | 170.94 | 216.98 | 1.3:1 | overheated/bear_div |
| 29 | **NYSE:IRM** | NYSE:IRM | **49.5** | ⚪C | 46.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 125.1 | 120.15 | 133.87 | 1.8:1 | mom_decay/low_rr |
| 30 | **NYSE:JHG** | NYSE:JHG | **48.1** | 🟢A | 38.2 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 51 | 51.57 | 51.99 | -1.7:1 | mom_decay/near_resist/low_rr |
| 31 | **NASDAQ:APLD** | NASDAQ:APLD | **47.6** | 🔵B | 23.3 | 84 | GREEN Long (Strong) | Overextended Chase (High Risk) | 48.98 | 42.15 | 58.09 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 32 | **NASDAQ:CRDO** | NASDAQ:CRDO | **47.2** | 🟢A | 36 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 221.23 | 192.69 | 259.28 | 1.3:1 | overheated |
| 33 | **NASDAQ:MPWR** | NASDAQ:MPWR | **46.9** | 🔵B | 23.1 | 70 | GREEN Long (Mid) | Trend Continuation | 1620.17 | 1498.66 | 1798.39 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 34 | **NASDAQ:TLN** | NASDAQ:TLN | **46.6** | ⚪C | 40.3 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 374.08 | 338.76 | 420.8 | 1.3:1 | near_resist/chop |
| 35 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **45.4** | ⚪C | 42.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 383 | 370.17 | 407.49 | 1.9:1 | mom_decay/bear_div |
| 36 | **NYSE:NVT** | NYSE:NVT | **45.1** | ⚪C | 29.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 167.8 | 157.73 | 182.57 | 1.5:1 | mom_decay/bear_div/low_rr |
| 37 | **NYSE:FN** | NYSE:FN | **44.3** | ⚪C | 30.2 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 688.96 | 594.17 | 815.69 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **NYSE:PACS** | NYSE:PACS | **44** | ⚪C | 31.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 39.2 | 35.5 | 44.63 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **NASDAQ:ADEA** | NASDAQ:ADEA | **43.3** | ⚪C | 30.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 28.25 | 25.45 | 32.35 | 1.5:1 | mom_decay |
| 40 | **NASDAQ:PRDO** | NASDAQ:PRDO | **42.8** | 🔵B | 21 | 63 | GREEN Long (Mid) | Breakout (Squeeze Release) | 33.64 | 31.61 | 36.22 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 41 | **NYSE:HPE** | NYSE:HPE | **42.6** | 🔵B | 18.3 | 79 | GREEN Long (Strong) | Overextended Chase (High Risk) | 37.2 | 34.74 | 40.47 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 42 | **NYSE:HG** | NYSE:HG | **42.1** | 🔵B | 26.2 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 30.15 | 28.77 | 32.45 | 1.7:1 | mom_decay/near_resist/chop |
| 43 | **OTC:ABBNY** | OTC:ABBNY | **42** | ⚪C | 28.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 106.2 | 101.74 | 112.74 | 1.5:1 | mom_decay/near_resist/low_rr |
| 44 | **NYSE:GLW** | NYSE:GLW | **40.9** | 🔵B | 19.9 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 190.89 | 170.85 | 220.29 | 1.5:1 | mom_decay/bear_div/low_rr |
| 45 | **NASDAQ:VSAT** | NASDAQ:VSAT | **40.7** | 🔵B | 25.2 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 85.57 | 77.48 | 96.35 | 1.3:1 | overheated/bull_trap/near_resist/bear_div |
| 46 | **NYSE:SXI** | NYSE:SXI | **40.4** | 🔵B | 25.3 | 63 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 275.44 | 261.39 | 294.17 | 1.3:1 | fake_break/near_resist/low_rr |
| 47 | **NASDAQ:NWBI** | NASDAQ:NWBI | **39.1** | ⚪C | 20.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 13.91 | 13.56 | 14.43 | 1.5:1 | near_resist/low_rr |
| 48 | **NYSE:SPNT** | NYSE:SPNT | **38.9** | ⚪C | 21.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 22.62 | 21.21 | 24.41 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 49 | **NASDAQ:CPRX** | NASDAQ:CPRX | **37.5** | 🔵B | 17.9 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 30.85 | 31.07 | 31.57 | -3.3:1 | bull_trap/mom_decay/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **68.3** |
| Tech Score | 42.9 (Trend Follow (HH/HL Intact)) |
| News Score | 94 → GREEN Long (Strong) |
| Current Price | 448.25 |
| **Entry** | **448.25** |
| **Stop** | **417.99** (ATR × 1.5) |
| **Target** | **492.63** |
| R/R | 1.5:1 |
| RSI | 61.3 |
| ATR% | 4.5% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 2. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **67.8** |
| Tech Score | 53.3 (Trend Follow (HH/HL Intact)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 85.74 |
| **Entry** | **85.74** |
| **Stop** | **77.51** (ATR × 1.5) |
| **Target** | **97.81** |
| R/R | 1.5:1 |
| RSI | 63.6 |
| ATR% | 6.4% |
| Dist EMA20 | 8.1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

### 3. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **65.3** |
| Tech Score | 47.8 (Trend Continuation) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 416.88 |
| **Entry** | **416.88** |
| **Stop** | **391.87** (ATR × 1.5) |
| **Target** | **453.57** |
| R/R | 1.5:1 |
| RSI | 58.1 |
| ATR% | 4% |
| Dist EMA20 | 3.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 4. NASDAQ:AVGO (NASDAQ:AVGO)

| Field | Value |
|-------|-------|
| Combined Score | **65** |
| Tech Score | 45.3 (Breakout (Squeeze Release)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 421.86 |
| **Entry** | **423.13** |
| **Stop** | **392.25** (ATR × 1.8) |
| **Target** | **462.99** |
| R/R | 1.3:1 |
| RSI | 56.4 |
| ATR% | 3.9% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 5. NYSE:TRNO (NYSE:TRNO)

| Field | Value |
|-------|-------|
| Combined Score | **64.3** |
| Tech Score | 56.9 (Breakout (Squeeze Release)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 66.75 |
| **Entry** | **66.95** |
| **Stop** | **64.83** (ATR × 1.8) |
| **Target** | **69.42** |
| R/R | 1.2:1 |
| RSI | 57.9 |
| ATR% | 1.6% |
| Dist EMA20 | 1.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 6. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **63.9** |
| Tech Score | 46.9 (Breakout (Squeeze Release)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 422.73 |
| **Entry** | **424** |
| **Stop** | **396.1** (ATR × 1.8) |
| **Target** | **459.72** |
| R/R | 1.3:1 |
| RSI | 62.8 |
| ATR% | 3.5% |
| Dist EMA20 | 5.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 7. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **62** |
| Tech Score | 49.6 (Breakout (Squeeze Release)) |
| News Score | 68 → WARN Long (Cautious) |
| Current Price | 97.34 |
| **Entry** | **97.63** |
| **Stop** | **92.78** (ATR × 1.8) |
| **Target** | **103.67** |
| R/R | 1.2:1 |
| RSI | 51.3 |
| ATR% | 2.6% |
| Dist EMA20 | 0.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist chop |

### 8. NYSE:NOK (NYSE:NOK)

| Field | Value |
|-------|-------|
| Combined Score | **60.1** |
| Tech Score | 42.9 (Overextended Chase (High Risk)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 15.68 |
| **Entry** | **15.68** |
| **Stop** | **14.13** (ATR × 1.5) |
| **Target** | **17.75** |
| R/R | 1.3:1 |
| RSI | 67.6 |
| ATR% | 6.6% |
| Dist EMA20 | 14.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated bear_div |

### 9. NYSE:MOD (NYSE:MOD)

| Field | Value |
|-------|-------|
| Combined Score | **59** |
| Tech Score | 34.6 (Trend Follow (HH/HL Intact)) |
| News Score | 83 → GREEN Long (Strong) |
| Current Price | 279.93 |
| **Entry** | **279.93** |
| **Stop** | **244.66** (ATR × 1.5) |
| **Target** | **331.66** |
| R/R | 1.5:1 |
| RSI | 56.4 |
| ATR% | 8.4% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

### 10. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 32.6 (Overextended Chase (High Risk)) |
| News Score | 94 → GREEN Long (Strong) |
| Current Price | 67.84 |
| **Entry** | **67.84** |
| **Stop** | **59.19** (ATR × 1.5) |
| **Target** | **79.37** |
| R/R | 1.3:1 |
| RSI | 66.2 |
| ATR% | 8.5% |
| Dist EMA20 | 24% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated low_rr |

### 11. NASDAQ:ERIC (NASDAQ:ERIC)

| Field | Value |
|-------|-------|
| Combined Score | **56.1** |
| Tech Score | 43.8 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 13.04 |
| **Entry** | **13.04** |
| **Stop** | **12.45** (ATR × 1.5) |
| **Target** | **13.9** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 3% |
| Dist EMA20 | 3.5% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 12. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **55.9** |
| Tech Score | 43.5 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 201.61 |
| **Entry** | **201.61** |
| **Stop** | **194.96** (ATR × 1.5) |
| **Target** | **211.37** |
| R/R | 1.5:1 |
| RSI | 67.9 |
| ATR% | 2.2% |
| Dist EMA20 | 3.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist bear_div |

### 13. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 38.6 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → WARN Long (Cautious) |
| Current Price | 347.69 |
| **Entry** | **347.69** |
| **Stop** | **332.04** (ATR × 1.5) |
| **Target** | **370.64** |
| R/R | 1.5:1 |
| RSI | 55.9 |
| ATR% | 3% |
| Dist EMA20 | 0.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 14. NASDAQ:VIAV (NASDAQ:VIAV)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 37 (Trend Continuation) |
| News Score | 69 → WARN Long (Cautious) |
| Current Price | 53.055 |
| **Entry** | **53.05** |
| **Stop** | **47.72** (ATR × 1.5) |
| **Target** | **60.88** |
| R/R | 1.5:1 |
| RSI | 59.9 |
| ATR% | 6.7% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 15. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 30.6 (Overextended Chase (High Risk)) |
| News Score | 91 → WARN Long (Cautious) |
| Current Price | 928.41 |
| **Entry** | **928.41** |
| **Stop** | **826.75** (ATR × 1.5) |
| **Target** | **1063.96** |
| R/R | 1.3:1 |
| RSI | 76.5 |
| ATR% | 7.3% |
| Dist EMA20 | 29.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated bull_trap mom_decay near_resist |

### 16. NYSE:GNRC (NYSE:GNRC)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 30.8 (Trend Continuation) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 280.53 |
| **Entry** | **280.53** |
| **Stop** | **262.02** (ATR × 1.5) |
| **Target** | **307.69** |
| R/R | 1.5:1 |
| RSI | 67.6 |
| ATR% | 4.4% |
| Dist EMA20 | 9.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break mom_decay near_resist bear_div |

### 17. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **50.8** |
| Tech Score | 41.4 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 18.87 |
| **Entry** | **18.59** |
| **Stop** | **17.55** (ATR × 2) |
| **Target** | **20.19** |
| R/R | 1.5:1 |
| RSI | 55.6 |
| ATR% | 3.5% |
| Dist EMA20 | 1.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div |

### 18. NYSE:JHG (NYSE:JHG)

| Field | Value |
|-------|-------|
| Combined Score | **48.1** |
| Tech Score | 38.2 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 51.78 |
| **Entry** | **51** |
| **Stop** | **51.57** (ATR × 2) |
| **Target** | **51.99** |
| R/R | -1.7:1 |
| RSI | 58.5 |
| ATR% | 0.2% |
| Dist EMA20 | 0.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

### 19. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **47.2** |
| Tech Score | 36 (Overextended Chase (High Risk)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 221.23 |
| **Entry** | **221.23** |
| **Stop** | **192.69** (ATR × 1.5) |
| **Target** | **259.28** |
| R/R | 1.3:1 |
| RSI | 65.2 |
| ATR% | 8.6% |
| Dist EMA20 | 17% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:LRCX** | NASDAQ:LRCX | 64.6 | 39.3 | 90(hot) | 318.93 | **299.79** | 288.95 | 348.91 |
| **NASDAQ:MRVL** | NASDAQ:MRVL | 57 | 39.4 | 96(hot) | 198.7 | **186.78** | 169.69 | 227.71 |
| **NASDAQ:TTMI** | NASDAQ:TTMI | 49.7 | 39.1 | 78(hot) | 190.67 | **179.23** | 164.36 | 216.98 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/28 23:14:22*