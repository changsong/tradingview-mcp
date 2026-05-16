# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-15　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:ADI** | NASDAQ:ADI | **69.1** | 🟡C+ | 48.9 | 87 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 418.57 | 400.99 | 444.35 | 1.5:1 | OK |
| 2 | **NASDAQ:AMAT** | NASDAQ:AMAT | **68.3** | 🟡C+ | 44.1 | 92 | WARN No Trade (Overheated) | Trend Continuation | 432.92 | 405 | 473.87 | 1.5:1 | near_resist/chop |
| 3 | **NYSE:HPE** | NYSE:HPE | **66.5** | 🟢A | 59.8 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 33.09 | 31.15 | 35.93 | 1.5:1 | OK |
| 4 | **NASDAQ:MTSI** | NASDAQ:MTSI | **61.3** | 🟢A | 46.8 | 83 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 377.28 | 347.85 | 416.52 | 1.3:1 | overheated/mom_decay/bear_div |
| 5 | **NASDAQ:BGC** | NASDAQ:BGC | **60.8** | 🟢A | 39 | 81 | GREEN Long (Strong) | Breakout (Squeeze Release) | 11.34 | 10.69 | 12.15 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 6 | **NYSE:COHR** | NYSE:COHR | **59.3** | 🟢A | 45.2 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 385.25 | 343.07 | 447.12 | 1.5:1 | OK |
| 7 | **NYSE:IRM** | NYSE:IRM | **59.2** | 🟢A | 37 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 125.17 | 118.79 | 134.53 | 1.5:1 | mom_decay/low_rr |
| 8 | **NYSE:MTZ** | NYSE:MTZ | **57.7** | 🟢A | 35.1 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 423.78 | 396.45 | 463.87 | 1.5:1 | mom_decay/low_rr |
| 9 | **NYSE:GLW** | NYSE:GLW | **56.9** | 🟢A | 39.9 | 70 | GREEN Long (Mid) | Trend Continuation | 198.69 | 176.93 | 230.6 | 1.5:1 | OK |
| 10 | **NASDAQ:NVDA** | NASDAQ:NVDA | **56.6** | 🟢A | 41.3 | 67 | GREEN Long (Mid) | Trend Continuation | 227.52 | 215.23 | 245.54 | 1.5:1 | near_resist |
| 11 | **NYSE:JCI** | NYSE:JCI | **55.8** | 🟢A | 36.7 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 143.2 | 135.32 | 153.12 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 12 | **NYSE:SMP** | NYSE:SMP | **55.7** | 🟢A | 44.5 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 37.99 | 35.43 | 41.29 | 1.3:1 | mom_decay/near_resist |
| 13 | **NASDAQ:MRVL** | NASDAQ:MRVL | **55.7** | 🟢A | 41.2 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 178.84 | 163.01 | 202.05 | 1.5:1 | mom_decay |
| 14 | **NYSE:PWR** | NYSE:PWR | **55.7** | 🟢A | 30.5 | 81 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 770.71 | 722.16 | 841.92 | 1.5:1 | fake_break/near_resist/low_rr |
| 15 | **NASDAQ:CORZ** | NASDAQ:CORZ | **55.3** | 🟢A | 34.5 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 23.81 | 21.35 | 27.42 | 1.5:1 | low_rr |
| 16 | **NYSE:JHG** | NYSE:JHG | **55.2** | ⚪C | 58.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 50.91 | 51.59 | 51.79 | -1.3:1 | mom_decay/near_resist/low_rr |
| 17 | **NYSE:CF** | NYSE:CF | **54.9** | 🟢A | 37.8 | 68 | GREEN Long (Mid) | Breakout (Squeeze Release) | 124.28 | 113.87 | 137.85 | 1.3:1 | near_resist/chop/low_rr |
| 18 | **NYSE:P** | NYSE:P | **54.6** | 🟢A | 36 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 80.51 | 73.63 | 90.61 | 1.5:1 | near_resist/low_rr |
| 19 | **NYSE:DELL** | NYSE:DELL | **54.2** | 🟢A | 33.4 | 73 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 240.83 | 219.88 | 271.56 | 1.5:1 | low_rr |
| 20 | **NASDAQ:INTC** | NASDAQ:INTC | **53.8** | 🟢A | 37.4 | 66 | GREEN Long (Mid) | Trend Continuation | 109.11 | 95.36 | 129.27 | 1.5:1 | low_rr |
| 21 | **NASDAQ:VSAT** | NASDAQ:VSAT | **53.1** | ⚪C | 46.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 71.8 | 66.42 | 79.7 | 1.5:1 | OK |
| 22 | **NASDAQ:SANM** | NASDAQ:SANM | **52.4** | ⚪C | 45.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 236.1 | 212.37 | 270.9 | 1.5:1 | mom_decay |
| 23 | **NASDAQ:IREN** | NASDAQ:IREN | **51.6** | ⚪C | 38.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 55.21 | 47.09 | 67.11 | 1.5:1 | low_rr |
| 24 | **CBOE:CBOE** | CBOE:CBOE | **50.7** | 🟢A | 31.5 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 361.08 | 343.75 | 386.5 | 1.5:1 | fake_break/bull_trap/near_resist |
| 25 | **NYSE:MS** | NYSE:MS | **50.6** | ⚪C | 42.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 194.3 | 185.7 | 204.86 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 26 | **NASDAQ:LITE** | NASDAQ:LITE | **49.4** | 🔵B | 22.7 | 77 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 958.51 | 827.67 | 1150.4 | 1.5:1 | near_resist/low_rr |
| 27 | **NYSE:LTC** | NYSE:LTC | **48.8** | ⚪C | 37.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.13 | 36.86 | 39.64 | 1.2:1 | mom_decay/near_resist/chop |
| 28 | **NYSE:PACS** | NYSE:PACS | **48.5** | 🔵B | 24.5 | 72 | WARN Long (Cautious) | Trend Continuation | 38.6 | 35.07 | 43.78 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **NYSE:RIO** | NYSE:RIO | **48.1** | ⚪C | 38.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 103.44 | 98.63 | 110.49 | 1.5:1 | OK |
| 30 | **NYSE:SM** | NYSE:SM | **47.5** | 🔵B | 28.9 | 63 | GREEN Long (Mid) | Trend Continuation | 31.86 | 29.85 | 34.8 | 1.5:1 | chop/bear_div/low_rr |
| 31 | **NASDAQ:ASML** | NASDAQ:ASML | **47.2** | 🔵B | 25.3 | 80 | GREEN Long (Strong) | Pullback Buy (Near Support) | 1495.82 | 1388 | 1649.2 | 1.4:1 | near_resist/chop/low_rr |
| 32 | **NASDAQ:GEN** | NASDAQ:GEN | **46.8** | ⚪C | 34.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 23.15 | 21.87 | 25.03 | 1.5:1 | bear_div |
| 33 | **NASDAQ:MU** | NASDAQ:MU | **45.6** | 🟢A | 32 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 740.12 | 660.19 | 846.7 | 1.3:1 | overheated/low_rr |
| 34 | **NASDAQ:KLAC** | NASDAQ:KLAC | **45.3** | ⚪C | 27.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1828.28 | 1696.64 | 2021.35 | 1.5:1 | mom_decay/chop/low_rr |
| 35 | **NYSE:FN** | NYSE:FN | **44.7** | ⚪C | 28.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 705.58 | 628.32 | 818.9 | 1.5:1 | near_resist/chop/low_rr |
| 36 | **NYSE:CIEN** | NYSE:CIEN | **43.5** | ⚪C | 28.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 569.57 | 516.6 | 647.26 | 1.5:1 | bear_div |
| 37 | **NYSE:TRNO** | NYSE:TRNO | **42.5** | ⚪C | 29.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 65.63 | 63.31 | 68.37 | 1.2:1 | mom_decay/near_resist/low_rr |
| 38 | **NASDAQ:EQIX** | NASDAQ:EQIX | **42.4** | 🟢A | 30.7 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1047.26 | 1016.43 | 1109.99 | 2:1 | mom_decay/near_resist |
| 39 | **NYSE:SPNT** | NYSE:SPNT | **42.2** | ⚪C | 32.4 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 22.57 | 21.49 | 24.33 | 1.6:1 | mom_decay/near_resist/chop |
| 40 | **NASDAQ:PRDO** | NASDAQ:PRDO | **42.1** | ⚪C | 36.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 34.45 | 32.87 | 37.07 | 1.7:1 | near_resist/chop |
| 41 | **NASDAQ:OSBC** | NASDAQ:OSBC | **41.7** | ⚪C | 36.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 20.25 | 19.45 | 21.67 | 1.8:1 | mom_decay/near_resist |
| 42 | **NASDAQ:ADEA** | NASDAQ:ADEA | **41.5** | 🔵B | 25.2 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 29.83 | 25.68 | 34.88 | 1.2:1 | mom_decay/near_resist/low_rr |
| 43 | **NYSE:ETN** | NYSE:ETN | **41.3** | 🔵B | 18.2 | 76 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 400 | 374.8 | 433.6 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 44 | **NYSE:MOD** | NYSE:MOD | **40.4** | ⚪C | 25 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 277.8 | 251.96 | 315.69 | 1.5:1 | near_resist/low_rr |
| 45 | **NYSE:TT** | NYSE:TT | **38.9** | 🔵B | 18.8 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 465.25 | 444.94 | 499.74 | 1.7:1 | mom_decay/near_resist/low_rr |
| 46 | **NASDAQ:INCY** | NASDAQ:INCY | **38.2** | ⚪C | 20 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 96.35 | 90.35 | 103.98 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 47 | **NASDAQ:AMD** | NASDAQ:AMD | **37.4** | 🔵B | 18.3 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 438.19 | 396.78 | 493.4 | 1.3:1 | overheated/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **66.5** |
| Tech Score | 59.8 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 33.09 |
| **Entry** | **33.09** |
| **Stop** | **31.15** (ATR × 1.5) |
| **Target** | **35.93** |
| R/R | 1.5:1 |
| RSI | 69.6 |
| ATR% | 3.9% |
| Dist EMA20 | 11.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 2. NASDAQ:MTSI (NASDAQ:MTSI)

| Field | Value |
|-------|-------|
| Combined Score | **61.3** |
| Tech Score | 46.8 (Reversal (Bullish RSI Divergence)) |
| News Score | 83 → GREEN Long (Strong) |
| Current Price | 377.28 |
| **Entry** | **377.28** |
| **Stop** | **347.85** (ATR × 1.5) |
| **Target** | **416.52** |
| R/R | 1.3:1 |
| RSI | 79.1 |
| ATR% | 5.2% |
| Dist EMA20 | 16.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay bear_div |

### 3. NASDAQ:BGC (NASDAQ:BGC)

| Field | Value |
|-------|-------|
| Combined Score | **60.8** |
| Tech Score | 39 (Breakout (Squeeze Release)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 11.305 |
| **Entry** | **11.34** |
| **Stop** | **10.69** (ATR × 1.8) |
| **Target** | **12.15** |
| R/R | 1.2:1 |
| RSI | 55.9 |
| ATR% | 3% |
| Dist EMA20 | 1.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 4. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **59.3** |
| Tech Score | 45.2 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 385.25 |
| **Entry** | **385.25** |
| **Stop** | **343.07** (ATR × 1.5) |
| **Target** | **447.12** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 7.3% |
| Dist EMA20 | 10.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 5. NYSE:IRM (NYSE:IRM)

| Field | Value |
|-------|-------|
| Combined Score | **59.2** |
| Tech Score | 37 (Trend Follow (HH/HL Intact)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 125.17 |
| **Entry** | **125.17** |
| **Stop** | **118.79** (ATR × 1.5) |
| **Target** | **134.53** |
| R/R | 1.5:1 |
| RSI | 57.5 |
| ATR% | 3.4% |
| Dist EMA20 | 1.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 6. NYSE:MTZ (NYSE:MTZ)

| Field | Value |
|-------|-------|
| Combined Score | **57.7** |
| Tech Score | 35.1 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 423.78 |
| **Entry** | **423.78** |
| **Stop** | **396.45** (ATR × 1.5) |
| **Target** | **463.87** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 4.3% |
| Dist EMA20 | 4.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 7. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **56.9** |
| Tech Score | 39.9 (Trend Continuation) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 198.69 |
| **Entry** | **198.69** |
| **Stop** | **176.93** (ATR × 1.5) |
| **Target** | **230.6** |
| R/R | 1.5:1 |
| RSI | 63.2 |
| ATR% | 7.3% |
| Dist EMA20 | 9.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 8. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **56.6** |
| Tech Score | 41.3 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 227.52 |
| **Entry** | **227.52** |
| **Stop** | **215.23** (ATR × 1.5) |
| **Target** | **245.54** |
| R/R | 1.5:1 |
| RSI | 66.9 |
| ATR% | 3.6% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist |

### 9. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **55.8** |
| Tech Score | 36.7 (Breakout (Squeeze Release)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 142.77 |
| **Entry** | **143.2** |
| **Stop** | **135.32** (ATR × 1.8) |
| **Target** | **153.12** |
| R/R | 1.3:1 |
| RSI | 53.5 |
| ATR% | 2.9% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 10. NYSE:SMP (NYSE:SMP)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 44.5 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 37.88 |
| **Entry** | **37.99** |
| **Stop** | **35.43** (ATR × 1.8) |
| **Target** | **41.29** |
| R/R | 1.3:1 |
| RSI | 48.7 |
| ATR% | 3.6% |
| Dist EMA20 | -0.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist |

### 11. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 41.2 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 178.84 |
| **Entry** | **178.84** |
| **Stop** | **163.01** (ATR × 1.5) |
| **Target** | **202.05** |
| R/R | 1.5:1 |
| RSI | 67.6 |
| ATR% | 5.9% |
| Dist EMA20 | 10.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay |

### 12. NYSE:PWR (NYSE:PWR)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 30.5 (Trend Follow (HH/HL Intact)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 770.71 |
| **Entry** | **770.71** |
| **Stop** | **722.16** (ATR × 1.5) |
| **Target** | **841.92** |
| R/R | 1.5:1 |
| RSI | 69.5 |
| ATR% | 4.2% |
| Dist EMA20 | 7.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | fake_break near_resist low_rr |

### 13. NASDAQ:CORZ (NASDAQ:CORZ)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 34.5 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 23.81 |
| **Entry** | **23.81** |
| **Stop** | **21.35** (ATR × 1.5) |
| **Target** | **27.42** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 6.9% |
| Dist EMA20 | 8.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | low_rr |

### 14. NYSE:CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **54.9** |
| Tech Score | 37.8 (Breakout (Squeeze Release)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 123.91 |
| **Entry** | **124.28** |
| **Stop** | **113.87** (ATR × 1.8) |
| **Target** | **137.85** |
| R/R | 1.3:1 |
| RSI | 51 |
| ATR% | 4.5% |
| Dist EMA20 | 0.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 15. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **54.6** |
| Tech Score | 36 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 80.51 |
| **Entry** | **80.51** |
| **Stop** | **73.63** (ATR × 1.5) |
| **Target** | **90.61** |
| R/R | 1.5:1 |
| RSI | 62.1 |
| ATR% | 5.7% |
| Dist EMA20 | 6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 16. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **54.2** |
| Tech Score | 33.4 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 240.83 |
| **Entry** | **240.83** |
| **Stop** | **219.88** (ATR × 1.5) |
| **Target** | **271.56** |
| R/R | 1.5:1 |
| RSI | 62.3 |
| ATR% | 5.8% |
| Dist EMA20 | 7.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 17. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 37.4 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 109.11 |
| **Entry** | **109.11** |
| **Stop** | **95.36** (ATR × 1.5) |
| **Target** | **129.27** |
| R/R | 1.5:1 |
| RSI | 62.6 |
| ATR% | 8.4% |
| Dist EMA20 | 8.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 18. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 31.5 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 361.08 |
| **Entry** | **361.08** |
| **Stop** | **343.75** (ATR × 1.5) |
| **Target** | **386.5** |
| R/R | 1.5:1 |
| RSI | 71.8 |
| ATR% | 3.2% |
| Dist EMA20 | 8.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break bull_trap near_resist |

### 19. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **45.6** |
| Tech Score | 32 (Overextended Chase (High Risk)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 740.12 |
| **Entry** | **740.12** |
| **Stop** | **660.19** (ATR × 1.5) |
| **Target** | **846.7** |
| R/R | 1.3:1 |
| RSI | 68.8 |
| ATR% | 7.2% |
| Dist EMA20 | 16.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | overheated low_rr |

### 20. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **42.4** |
| Tech Score | 30.7 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 1063.21 |
| **Entry** | **1047.26** |
| **Stop** | **1016.43** (ATR × 2) |
| **Target** | **1109.99** |
| R/R | 2:1 |
| RSI | 49.4 |
| ATR% | 2.2% |
| Dist EMA20 | -0.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:ADI** | NASDAQ:ADI | 69.1 | 48.9 | 87(hot) | 418.57 | **393.46** | 395.13 | 442.01 |
| **NASDAQ:AMAT** | NASDAQ:AMAT | 68.3 | 44.1 | 92(hot) | 432.92 | **406.94** | 395.69 | 470.15 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/15 22:57:21*