# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-13　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:HPE** | NYSE:HPE | **69.8** | 🟡C+ | 50.6 | 86 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 30.21 | 28.67 | 32.47 | 1.5:1 | OK |
| 2 | **NYSE:P** | NYSE:P | **66.2** | 🟢A | 64.3 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 82.05 | 74.64 | 91.96 | 1.3:1 | OK |
| 3 | **NASDAQ:AMAT** | NASDAQ:AMAT | **65.5** | 🟢A | 49.5 | 77 | GREEN Long (Strong) | Trend Continuation | 431.2 | 402.74 | 472.94 | 1.5:1 | chop |
| 4 | **NYSE:GLW** | NYSE:GLW | **61.2** | 🟡C+ | 47 | 95 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 197.77 | 176.71 | 225.85 | 1.3:1 | overheated |
| 5 | **NYSE:DELL** | NYSE:DELL | **58.7** | 🟢A | 42.9 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 238.94 | 219.59 | 267.33 | 1.5:1 | OK |
| 6 | **NASDAQ:AMD** | NASDAQ:AMD | **57.6** | 🟢A | 44 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 448.29 | 405.93 | 504.77 | 1.3:1 | overheated/mom_decay |
| 7 | **NYSE:SPNT** | NYSE:SPNT | **57.1** | 🟢A | 32.1 | 82 | GREEN Long (Strong) | Breakout (Squeeze Release) | 22.82 | 21.52 | 24.46 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 8 | **NASDAQ:MU** | NASDAQ:MU | **56.8** | 🟢A | 53.3 | 62 | GREEN Long (Mid) | Overextended Chase (High Risk) | 766.58 | 692.99 | 864.7 | 1.3:1 | overheated/mom_decay |
| 9 | **NASDAQ:ADEA** | NASDAQ:ADEA | **56.5** | 🟢A | 41.1 | 67 | GREEN Long (Mid) | Trend Continuation | 32.73 | 29.53 | 37.4 | 1.5:1 | mom_decay/low_rr |
| 10 | **NASDAQ:GEN** | NASDAQ:GEN | **56.2** | 🟢A | 49.7 | 66 | WARN Long (Cautious) | Pullback Buy (Near Support) | 21.71 | 20.28 | 23.8 | 1.5:1 | near_resist |
| 11 | **NYSE:MS** | NYSE:MS | **54.4** | 🟢A | 42.3 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 192.46 | 184.28 | 202.43 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 12 | **NYSE:PWR** | NYSE:PWR | **53.6** | 🟢A | 36.4 | 67 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 755.25 | 708.8 | 823.37 | 1.5:1 | low_rr |
| 13 | **NYSE:MTZ** | NYSE:MTZ | **53.1** | 🔵B | 28.9 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 421.78 | 395.84 | 459.82 | 1.5:1 | mom_decay/bear_div/low_rr |
| 14 | **NASDAQ:EQIX** | NASDAQ:EQIX | **51.5** | 🟢A | 37.8 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1057.67 | 1026.53 | 1121.03 | 2:1 | mom_decay/near_resist |
| 15 | **NASDAQ:LITE** | NASDAQ:LITE | **51.4** | 🔵B | 26 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1016.5 | 885.37 | 1208.82 | 1.5:1 | fake_break/near_resist/low_rr |
| 16 | **NYSE:TRNO** | NYSE:TRNO | **51.2** | ⚪C | 38.4 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 65.83 | 63.5 | 68.58 | 1.2:1 | mom_decay/near_resist/low_rr |
| 17 | **NYSE:VRT** | NYSE:VRT | **49.6** | 🔵B | 20.4 | 81 | GREEN Long (Strong) | Trend Continuation | 371.75 | 345.54 | 410.19 | 1.5:1 | fake_break/bull_trap/near_resist |
| 18 | **NYSE:CF** | NYSE:CF | **49.4** | 🟢A | 40.4 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 125.23 | 115.95 | 138.33 | 1.4:1 | near_resist/chop/low_rr |
| 19 | **NASDAQ:POWL** | NASDAQ:POWL | **49.3** | 🟢A | 30.5 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 298 | 267.16 | 343.24 | 1.5:1 | bear_div |
| 20 | **NASDAQ:ADI** | NASDAQ:ADI | **49.3** | 🔵B | 29.1 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 431.33 | 414.51 | 456 | 1.5:1 | fake_break/bull_trap/near_resist |
| 21 | **NASDAQ:IREN** | NASDAQ:IREN | **48.7** | 🟢A | 30.1 | 64 | WARN Long (Cautious) | Trend Continuation | 56.56 | 48.67 | 68.13 | 1.5:1 | near_resist/low_rr |
| 22 | **CBOE:CBOE** | CBOE:CBOE | **48.6** | 🟢A | 30.7 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 354.75 | 339.32 | 377.38 | 1.5:1 | fake_break/bull_trap/near_resist |
| 23 | **NASDAQ:INCY** | NASDAQ:INCY | **48.5** | ⚪C | 35.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 98.6 | 92.65 | 106.17 | 1.3:1 | near_resist/chop/bear_div |
| 24 | **NYSE:CIEN** | NYSE:CIEN | **48.4** | 🔵B | 27.7 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 582 | 531.37 | 656.26 | 1.5:1 | fake_break/near_resist/bear_div |
| 25 | **NASDAQ:PRDO** | NASDAQ:PRDO | **47.9** | 🟢A | 31.9 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 34.54 | 32.83 | 37.31 | 1.6:1 | near_resist/chop |
| 26 | **NASDAQ:VSAT** | NASDAQ:VSAT | **47.2** | ⚪C | 36.4 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 71.5 | 66.35 | 79.05 | 1.5:1 | fake_break/near_resist |
| 27 | **NASDAQ:INTC** | NASDAQ:INTC | **47** | 🟢A | 36.3 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 120.61 | 106.86 | 138.94 | 1.3:1 | overheated/mom_decay |
| 28 | **NYSE:COHR** | NYSE:COHR | **46.2** | 🟢A | 31 | 69 | GREEN Long (Mid) | Overextended Chase (High Risk) | 396.05 | 355.65 | 449.91 | 1.3:1 | overheated/fake_break/near_resist |
| 29 | **NASDAQ:KLAC** | NASDAQ:KLAC | **46.2** | 🔵B | 23.3 | 68 | GREEN Long (Mid) | Trend Continuation | 1811.35 | 1680.93 | 2002.63 | 1.5:1 | mom_decay/chop/low_rr |
| 30 | **NASDAQ:SANM** | NASDAQ:SANM | **46.1** | ⚪C | 39.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 235.84 | 212.14 | 267.44 | 1.3:1 | overheated |
| 31 | **NYSE:SMP** | NYSE:SMP | **44.3** | ⚪C | 32.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.66 | 36.04 | 42.01 | 1.3:1 | near_resist/low_rr |
| 32 | **NYSE:LTC** | NYSE:LTC | **43.4** | ⚪C | 36.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 38.19 | 37.45 | 40.09 | 2.6:1 | near_resist/chop/low_rr |
| 33 | **NASDAQ:RMBS** | NASDAQ:RMBS | **43.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 130.35 | 112.37 | 156.74 | 1.5:1 | mom_decay/low_rr |
| 34 | **NASDAQ:ASML** | NASDAQ:ASML | **43** | 🔵B | 18.7 | 67 | GREEN Long (Mid) | Trend Continuation | 1520.94 | 1429.68 | 1654.78 | 1.5:1 | near_resist/chop/low_rr |
| 35 | **NYSE:MOD** | NYSE:MOD | **42.7** | ⚪C | 30.8 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 276 | 253.23 | 309.4 | 1.5:1 | low_rr |
| 36 | **NASDAQ:APLD** | NASDAQ:APLD | **42.5** | ⚪C | 31.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 43.62 | 38.32 | 50.69 | 1.3:1 | overheated/bear_div |
| 37 | **NYSE:IRM** | NYSE:IRM | **42.5** | ⚪C | 29.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 124.7 | 118.53 | 133.76 | 1.5:1 | mom_decay/low_rr |
| 38 | **NASDAQ:CRDO** | NASDAQ:CRDO | **41.3** | ⚪C | 23.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 191.97 | 168.36 | 226.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 39 | **NASDAQ:NVDA** | NASDAQ:NVDA | **41.2** | 🔵B | 17.7 | 64 | WARN Long (Cautious) | Trend Continuation | 226.72 | 214.82 | 244.18 | 1.5:1 | fake_break/bull_trap/near_resist |
| 40 | **NYSE:TSM** | NYSE:TSM | **40.3** | 🔵B | 18.8 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 393.36 | 370.94 | 426.24 | 1.5:1 | mom_decay/bear_div/low_rr |
| 41 | **NYSE:TT** | NYSE:TT | **36.4** | 🔵B | 17.3 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 461.43 | 443.16 | 493.76 | 1.8:1 | mom_decay/near_resist/low_rr |
| 42 | **NASDAQ:OSBC** | NASDAQ:OSBC | **34.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 20.6 | 19.78 | 22.04 | 1.8:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **66.2** |
| Tech Score | 64.3 (Pullback Buy (Near Support)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 83.3 |
| **Entry** | **82.05** |
| **Stop** | **74.64** (ATR × 2) |
| **Target** | **91.96** |
| R/R | 1.3:1 |
| RSI | 70.8 |
| ATR% | 5.2% |
| Dist EMA20 | 11.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | None |

### 2. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **65.5** |
| Tech Score | 49.5 (Trend Continuation) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 431.2 |
| **Entry** | **431.2** |
| **Stop** | **402.74** (ATR × 1.5) |
| **Target** | **472.94** |
| R/R | 1.5:1 |
| RSI | 61.1 |
| ATR% | 4.4% |
| Dist EMA20 | 6.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop |

### 3. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **58.7** |
| Tech Score | 42.9 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 238.94 |
| **Entry** | **238.94** |
| **Stop** | **219.59** (ATR × 1.5) |
| **Target** | **267.33** |
| R/R | 1.5:1 |
| RSI | 63.8 |
| ATR% | 5.4% |
| Dist EMA20 | 9.8% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 4. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 44 (Overextended Chase (High Risk)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 448.29 |
| **Entry** | **448.29** |
| **Stop** | **405.93** (ATR × 1.5) |
| **Target** | **504.77** |
| R/R | 1.3:1 |
| RSI | 77.2 |
| ATR% | 6.3% |
| Dist EMA20 | 25.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay |

### 5. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **57.1** |
| Tech Score | 32.1 (Breakout (Squeeze Release)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 22.75 |
| **Entry** | **22.82** |
| **Stop** | **21.52** (ATR × 1.8) |
| **Target** | **24.46** |
| R/R | 1.3:1 |
| RSI | 47.5 |
| ATR% | 3% |
| Dist EMA20 | -1.3% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 6. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **56.8** |
| Tech Score | 53.3 (Overextended Chase (High Risk)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 766.58 |
| **Entry** | **766.58** |
| **Stop** | **692.99** (ATR × 1.5) |
| **Target** | **864.7** |
| R/R | 1.3:1 |
| RSI | 79.4 |
| ATR% | 6.4% |
| Dist EMA20 | 30.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay |

### 7. NASDAQ:ADEA (NASDAQ:ADEA)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 41.1 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 32.725 |
| **Entry** | **32.73** |
| **Stop** | **29.53** (ATR × 1.5) |
| **Target** | **37.4** |
| R/R | 1.5:1 |
| RSI | 61.6 |
| ATR% | 6.5% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 8. NASDAQ:GEN (NASDAQ:GEN)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 49.7 (Pullback Buy (Near Support)) |
| News Score | 66 → WARN Long (Cautious) |
| Current Price | 22.04 |
| **Entry** | **21.71** |
| **Stop** | **20.28** (ATR × 2) |
| **Target** | **23.8** |
| R/R | 1.5:1 |
| RSI | 65.9 |
| ATR% | 4% |
| Dist EMA20 | 8.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist |

### 9. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 42.3 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 191.88 |
| **Entry** | **192.46** |
| **Stop** | **184.28** (ATR × 1.8) |
| **Target** | **202.43** |
| R/R | 1.2:1 |
| RSI | 60.6 |
| ATR% | 2.2% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 10. NYSE:PWR (NYSE:PWR)

| Field | Value |
|-------|-------|
| Combined Score | **53.6** |
| Tech Score | 36.4 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → WARN Long (Cautious) |
| Current Price | 755.25 |
| **Entry** | **755.25** |
| **Stop** | **708.8** (ATR × 1.5) |
| **Target** | **823.37** |
| R/R | 1.5:1 |
| RSI | 67.6 |
| ATR% | 4.1% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 11. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 37.8 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 1073.78 |
| **Entry** | **1057.67** |
| **Stop** | **1026.53** (ATR × 2) |
| **Target** | **1121.03** |
| R/R | 2:1 |
| RSI | 54.2 |
| ATR% | 2.2% |
| Dist EMA20 | 0.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist |

### 12. NYSE:CF (NYSE:CF)

| Field | Value |
|-------|-------|
| Combined Score | **49.4** |
| Tech Score | 40.4 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 127.14 |
| **Entry** | **125.23** |
| **Stop** | **115.95** (ATR × 2) |
| **Target** | **138.33** |
| R/R | 1.4:1 |
| RSI | 54 |
| ATR% | 4.4% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 13. NASDAQ:POWL (NASDAQ:POWL)

| Field | Value |
|-------|-------|
| Combined Score | **49.3** |
| Tech Score | 30.5 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 298 |
| **Entry** | **298** |
| **Stop** | **267.16** (ATR × 1.5) |
| **Target** | **343.24** |
| R/R | 1.5:1 |
| RSI | 63.8 |
| ATR% | 6.9% |
| Dist EMA20 | 8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | bear_div |

### 14. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **48.7** |
| Tech Score | 30.1 (Trend Continuation) |
| News Score | 64 → WARN Long (Cautious) |
| Current Price | 56.56 |
| **Entry** | **56.56** |
| **Stop** | **48.67** (ATR × 1.5) |
| **Target** | **68.13** |
| R/R | 1.5:1 |
| RSI | 59.5 |
| ATR% | 9.3% |
| Dist EMA20 | 11.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

### 15. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **48.6** |
| Tech Score | 30.7 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 354.75 |
| **Entry** | **354.75** |
| **Stop** | **339.32** (ATR × 1.5) |
| **Target** | **377.38** |
| R/R | 1.5:1 |
| RSI | 73.9 |
| ATR% | 2.9% |
| Dist EMA20 | 8.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break bull_trap near_resist |

### 16. NASDAQ:PRDO (NASDAQ:PRDO)

| Field | Value |
|-------|-------|
| Combined Score | **47.9** |
| Tech Score | 31.9 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 35.07 |
| **Entry** | **34.54** |
| **Stop** | **32.83** (ATR × 2) |
| **Target** | **37.31** |
| R/R | 1.6:1 |
| RSI | 51.2 |
| ATR% | 3.2% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop |

### 17. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **47** |
| Tech Score | 36.3 (Overextended Chase (High Risk)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 120.61 |
| **Entry** | **120.61** |
| **Stop** | **106.86** (ATR × 1.5) |
| **Target** | **138.94** |
| R/R | 1.3:1 |
| RSI | 75.1 |
| ATR% | 7.6% |
| Dist EMA20 | 26.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated mom_decay |

### 18. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **46.2** |
| Tech Score | 31 (Overextended Chase (High Risk)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 396.05 |
| **Entry** | **396.05** |
| **Stop** | **355.65** (ATR × 1.5) |
| **Target** | **449.91** |
| R/R | 1.3:1 |
| RSI | 70 |
| ATR% | 6.8% |
| Dist EMA20 | 17.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated fake_break near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:HPE** | NYSE:HPE | 69.8 | 50.6 | 86(hot) | 30.21 | **28.4** | 28.16 | 32.26 |
| **NYSE:GLW** | NYSE:GLW | 61.2 | 47 | 95(hot) | 197.77 | **185.9** | 169.69 | 225.85 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/13 21:50:42*