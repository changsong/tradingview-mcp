# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-04　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:CRDO** | NASDAQ:CRDO | **67.4** | 🟢A | 42.6 | 92 | GREEN Long (Strong) | Trend Continuation | 214.6 | 183.7 | 259.92 | 1.5:1 | OK |
| 2 | **NASDAQ:ASML** | NASDAQ:ASML | **64.3** | 🟢A | 40.8 | 87 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1726.36 | 1635.73 | 1859.29 | 1.5:1 | fake_break/near_resist/chop |
| 3 | **NYSE:CIEN** | NYSE:CIEN | **63.8** | 🟡C+ | 42.7 | 83 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 622.23 | 554.49 | 711.87 | 1.3:1 | near_resist/chop/bear_div |
| 4 | **NYSE:JHG** | NYSE:JHG | **63.5** | ⚪C | 59.5 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 51.91 | 51.56 | 52.01 | 0.3:1 | mom_decay/near_resist |
| 5 | **NYSE:GNRC** | NYSE:GNRC | **63.3** | 🟢A | 46.5 | 76 | GREEN Long (Strong) | Trend Continuation | 285.31 | 264.77 | 315.44 | 1.5:1 | near_resist/bear_div |
| 6 | **NASDAQ:NBIX** | NASDAQ:NBIX | **63.1** | 🟢A | 50.2 | 70 | WARN Long (Cautious) | Trend Continuation | 165.11 | 158.42 | 174.92 | 1.5:1 | mom_decay/near_resist |
| 7 | **NYSE:COHR** | NYSE:COHR | **60.8** | 🟡C+ | 47.6 | 93 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 417.43 | 374.23 | 475.04 | 1.3:1 | overheated |
| 8 | **NASDAQ:ADEA** | NASDAQ:ADEA | **59.1** | ⚪C | 56.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.05 | 29.36 | 36 | 1.5:1 | low_rr |
| 9 | **NASDAQ:MRVL** | NASDAQ:MRVL | **59.1** | 🟢A | 42.5 | 84 | WARN Long (Cautious) | Overextended Chase (High Risk) | 301.65 | 269.98 | 343.88 | 1.3:1 | overheated/mom_decay |
| 10 | **NASDAQ:EQIX** | NASDAQ:EQIX | **59** | ⚪C | 55.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 1080.23 | 1040.17 | 1128.16 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **NASDAQ:FIVE** | NASDAQ:FIVE | **59** | 🟡C+ | 42.6 | 96 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 219.55 | 206.4 | 239.38 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **NASDAQ:TLN** | NASDAQ:TLN | **56.2** | 🟢A | 40.3 | 80 | GREEN Long (Strong) | Pullback Buy (Near Support) | 373.9 | 343.91 | 415.27 | 1.4:1 | near_resist/chop |
| 13 | **NYSE:HPE** | NYSE:HPE | **56.1** | 🟡C+ | 39.8 | 93 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 55.15 | 49.86 | 62.21 | 1.3:1 | overheated/mom_decay |
| 14 | **NYSE:GLW** | NYSE:GLW | **56** | 🟢A | 44.3 | 61 | GREEN Long (Mid) | Trend Continuation | 200.76 | 182.09 | 228.14 | 1.5:1 | mom_decay/low_rr |
| 15 | **NASDAQ:ADI** | NASDAQ:ADI | **55.4** | 🟢A | 43.4 | 61 | GREEN Long (Mid) | Trend Continuation | 437.67 | 410.75 | 477.15 | 1.5:1 | mom_decay/near_resist |
| 16 | **NYSE:NOK** | NYSE:NOK | **54.9** | ⚪C | 58.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 16.73 | 15.25 | 18.7 | 1.3:1 | overheated |
| 17 | **NASDAQ:MNST** | NASDAQ:MNST | **54.9** | 🟢A | 41.8 | 62 | GREEN Long (Mid) | Trend Continuation | 89.04 | 86.5 | 92.76 | 1.5:1 | fake_break/mom_decay/near_resist |
| 18 | **NYSE:C** | NYSE:C | **54.8** | 🟢A | 48 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 127.98 | 123.69 | 136.17 | 1.9:1 | near_resist/chop/low_rr |
| 19 | **NYSE:DELL** | NYSE:DELL | **54.2** | 🟢A | 36.4 | 81 | GREEN Long (Strong) | Overextended Chase (High Risk) | 421.08 | 378.13 | 478.35 | 1.3:1 | overheated/mom_decay |
| 20 | **NYSE:TSM** | NYSE:TSM | **54.1** | ⚪C | 42.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 436.69 | 413.11 | 471.28 | 1.5:1 | near_resist |
| 21 | **NASDAQ:ERIC** | NASDAQ:ERIC | **54** | ⚪C | 53.4 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 12.96 | 12.37 | 13.95 | 1.7:1 | low_rr |
| 22 | **NASDAQ:TTMI** | NASDAQ:TTMI | **52.1** | 🟢A | 33.9 | 67 | GREEN Long (Mid) | Trend Continuation | 189.6 | 168.84 | 220.05 | 1.5:1 | mom_decay/low_rr |
| 23 | **NYSE:QBTS** | NYSE:QBTS | **51.2** | 🔵B | 27.6 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 27.55 | 23.17 | 33.97 | 1.5:1 | bear_div/low_rr |
| 24 | **NYSE:MS** | NYSE:MS | **51.1** | ⚪C | 42.9 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 210.14 | 202.89 | 220.77 | 1.5:1 | near_resist/bear_div |
| 25 | **NYSE:IFS** | NYSE:IFS | **51** | ⚪C | 51.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 48.35 | 45.85 | 52.33 | 1.6:1 | near_resist/low_rr |
| 26 | **NASDAQ:NBIS** | NASDAQ:NBIS | **50.7** | 🟢A | 31.9 | 79 | GREEN Long (Strong) | Overextended Chase (High Risk) | 251.68 | 218.46 | 295.98 | 1.3:1 | overheated |
| 27 | **NASDAQ:ONDS** | NASDAQ:ONDS | **50.4** | 🟢A | 35 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 11.61 | 9.52 | 14.68 | 1.5:1 | near_resist/low_rr |
| 28 | **NASDAQ:LITE** | NASDAQ:LITE | **50.2** | 🔵B | 17.4 | 87 | GREEN Long (Strong) | Breakout (Squeeze Release) | 940.81 | 789.42 | 1144.36 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 29 | **NYSE:SXI** | NYSE:SXI | **50.1** | ⚪C | 47.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 292.39 | 277.92 | 311.69 | 1.3:1 | near_resist/chop |
| 30 | **NYSE:AIR** | NYSE:AIR | **49.7** | ⚪C | 37.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 111.36 | 105.51 | 119.93 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **NASDAQ:MTSI** | NASDAQ:MTSI | **49.7** | 🟢A | 33.2 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 390.34 | 355.21 | 441.86 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 32 | **NASDAQ:PANW** | NASDAQ:PANW | **49.3** | ⚪C | 44.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 280.43 | 258.14 | 310.16 | 1.3:1 | overheated |
| 33 | **NYSE:JCI** | NYSE:JCI | **49.2** | 🟢A | 30.6 | 77 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 146.96 | 140.57 | 155.48 | 1.3:1 | near_resist/chop/low_rr |
| 34 | **NYSE:FN** | NYSE:FN | **49.1** | 🔵B | 28.8 | 67 | GREEN Long (Mid) | Breakout (Squeeze Release) | 727.17 | 633.65 | 851.88 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 35 | **NASDAQ:AAPL** | NASDAQ:AAPL | **47.6** | ⚪C | 42.3 | 43 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 310.26 | 301.88 | 322.55 | 1.5:1 | mom_decay/near_resist |
| 36 | **NYSE:FCX** | NYSE:FCX | **47.4** | 🔵B | 27.3 | 65 | GREEN Long (Mid) | Trend Continuation | 70.64 | 66.3 | 77.01 | 1.5:1 | fake_break/near_resist/low_rr |
| 37 | **NASDAQ:KLAC** | NASDAQ:KLAC | **46.8** | 🔵B | 29.7 | 60 | GREEN Long (Mid) | Trend Continuation | 2125.11 | 1991.23 | 2321.47 | 1.5:1 | fake_break/near_resist/chop |
| 38 | **NASDAQ:NVMI** | NASDAQ:NVMI | **46.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 531.63 | 473.75 | 608.22 | 1.3:1 | near_resist/chop/low_rr |
| 39 | **NYSE:NVT** | NYSE:NVT | **46.2** | 🔵B | 24.6 | 66 | WARN Long (Cautious) | Trend Continuation | 176.39 | 166.07 | 191.52 | 1.5:1 | fake_break/mom_decay/near_resist |
| 40 | **NYSE:CLS** | NYSE:CLS | **44.7** | 🟢A | 31.2 | 65 | GREEN Long (Mid) | Overextended Chase (High Risk) | 458.14 | 419.66 | 509.45 | 1.3:1 | overheated/fake_break/near_resist/chop |
| 41 | **NASDAQ:CORZ** | NASDAQ:CORZ | **44.5** | ⚪C | 40.8 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 28.93 | 26.59 | 32.05 | 1.3:1 | overheated |
| 42 | **NASDAQ:AEHR** | NASDAQ:AEHR | **43.7** | ⚪C | 36.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 114.59 | 97.75 | 137.05 | 1.3:1 | overheated/bear_div |
| 43 | **NYSE:JBL** | NYSE:JBL | **43.7** | 🔵B | 23.9 | 61 | GREEN Long (Mid) | Trend Continuation | 379.04 | 358 | 409.89 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 44 | **NYSE:P** | NYSE:P | **43.5** | 🟢A | 31.1 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 79.63 | 69.36 | 92.32 | 1.2:1 | mom_decay |
| 45 | **NASDAQ:AVGO** | NASDAQ:AVGO | **43.3** | ⚪C | 34.5 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 479.23 | 451.91 | 519.29 | 1.5:1 | bull_trap/near_resist/bear_div |
| 46 | **NYSE:RIO** | NYSE:RIO | **43.2** | ⚪C | 37 | 40 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 107.86 | 103.33 | 114.5 | 1.5:1 | chop/low_rr |
| 47 | **NASDAQ:VIAV** | NASDAQ:VIAV | **42.7** | ⚪C | 32.2 | 46 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 52.58 | 45.91 | 61.46 | 1.3:1 | mom_decay/near_resist/low_rr |
| 48 | **NASDAQ:LRCX** | NASDAQ:LRCX | **41.5** | 🔵B | 23.2 | 69 | GREEN Long (Mid) | Overextended Chase (High Risk) | 343.71 | 321.03 | 373.96 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 49 | **NASDAQ:AMAT** | NASDAQ:AMAT | **41.3** | 🔵B | 22.1 | 70 | WARN Long (Cautious) | Overextended Chase (High Risk) | 500.77 | 469.97 | 541.83 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/chop |
| 50 | **OTC:SBGSY** | OTC:SBGSY | **41.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 65.71 | 62.95 | 69.76 | 1.5:1 | near_resist/chop/low_rr |
| 51 | **NYSE:CARR** | NYSE:CARR | **41** | ⚪C | 35 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 66.57 | 62.71 | 72.45 | 1.5:1 | near_resist/chop/low_rr |
| 52 | **NYSE:FOR** | NYSE:FOR | **40.2** | ⚪C | 33.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 27.12 | 25.88 | 29.18 | 1.7:1 | near_resist/chop/low_rr |
| 53 | **NYSE:DKS** | NYSE:DKS | **39.7** | ⚪C | 29.8 | 42 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 224.84 | 205.61 | 249.95 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 54 | **NYSE:ENS** | NYSE:ENS | **39.7** | ⚪C | 23.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 240.14 | 223.57 | 264.44 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 55 | **NYSE:SMP** | NYSE:SMP | **39.1** | ⚪C | 31.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.28 | 35.83 | 41.89 | 1.5:1 | near_resist/low_rr |
| 56 | **NASDAQ:CPRX** | NASDAQ:CPRX | **38.7** | ⚪C | 31.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.81 | 31.15 | 31.41 | -1.8:1 | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 57 | **NYSE:DOCN** | NYSE:DOCN | **38.2** | 🔵B | 22.4 | 62 | GREEN Long (Mid) | Overextended Chase (High Risk) | 173.68 | 156.49 | 196.61 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 58 | **NASDAQ:SANM** | NASDAQ:SANM | **35.7** | ⚪C | 26.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 282.72 | 261.52 | 310.99 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 59 | **NASDAQ:FLEX** | NASDAQ:FLEX | **35.6** | 🔵B | 17.3 | 63 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 161.94 | 150.04 | 177.81 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 60 | **OTC:ABBNY** | OTC:ABBNY | **35.1** | ⚪C | 25.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 106.17 | 102.62 | 112.96 | 1.9:1 | mom_decay/near_resist/bear_div/low_rr |
| 61 | **NYSE:IRM** | NYSE:IRM | **35** | ⚪C | 24.3 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 126.03 | 121.81 | 134.09 | 1.9:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 62 | **NASDAQ:SEDG** | NASDAQ:SEDG | **34.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 74.02 | 62.25 | 89.71 | 1.3:1 | overheated/low_rr |
| 63 | **NASDAQ:RMBS** | NASDAQ:RMBS | **31.8** | ⚪C | 22.4 | 46 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 170.66 | 154.79 | 191.82 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **67.4** |
| Tech Score | 42.6 (Trend Continuation) |
| News Score | 92 → GREEN Long (Strong) |
| Current Price | 214.6 |
| **Entry** | **214.6** |
| **Stop** | **183.7** (ATR × 1.5) |
| **Target** | **259.92** |
| R/R | 1.5:1 |
| RSI | 57.7 |
| ATR% | 9.6% |
| Dist EMA20 | 5.5% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 2. NASDAQ:ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **64.3** |
| Tech Score | 40.8 (Trend Follow (HH/HL Intact)) |
| News Score | 87 → GREEN Long (Strong) |
| Current Price | 1726.36 |
| **Entry** | **1726.36** |
| **Stop** | **1635.73** (ATR × 1.5) |
| **Target** | **1859.29** |
| R/R | 1.5:1 |
| RSI | 68.1 |
| ATR% | 3.5% |
| Dist EMA20 | 9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist chop |

### 3. NYSE:GNRC (NYSE:GNRC)

| Field | Value |
|-------|-------|
| Combined Score | **63.3** |
| Tech Score | 46.5 (Trend Continuation) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 285.31 |
| **Entry** | **285.31** |
| **Stop** | **264.77** (ATR × 1.5) |
| **Target** | **315.44** |
| R/R | 1.5:1 |
| RSI | 65.8 |
| ATR% | 4.8% |
| Dist EMA20 | 7.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist bear_div |

### 4. NASDAQ:NBIX (NASDAQ:NBIX)

| Field | Value |
|-------|-------|
| Combined Score | **63.1** |
| Tech Score | 50.2 (Trend Continuation) |
| News Score | 70 → WARN Long (Cautious) |
| Current Price | 165.11 |
| **Entry** | **165.11** |
| **Stop** | **158.42** (ATR × 1.5) |
| **Target** | **174.92** |
| R/R | 1.5:1 |
| RSI | 69.4 |
| ATR% | 2.7% |
| Dist EMA20 | 7.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 5. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **59.1** |
| Tech Score | 42.5 (Overextended Chase (High Risk)) |
| News Score | 84 → WARN Long (Cautious) |
| Current Price | 301.65 |
| **Entry** | **301.65** |
| **Stop** | **269.98** (ATR × 1.5) |
| **Target** | **343.88** |
| R/R | 1.3:1 |
| RSI | 86.9 |
| ATR% | 7% |
| Dist EMA20 | 46.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay |

### 6. NASDAQ:TLN (NASDAQ:TLN)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 40.3 (Pullback Buy (Near Support)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 379.59 |
| **Entry** | **373.9** |
| **Stop** | **343.91** (ATR × 2) |
| **Target** | **415.27** |
| R/R | 1.4:1 |
| RSI | 54.8 |
| ATR% | 4.7% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop |

### 7. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **56** |
| Tech Score | 44.3 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 200.76 |
| **Entry** | **200.76** |
| **Stop** | **182.09** (ATR × 1.5) |
| **Target** | **228.14** |
| R/R | 1.5:1 |
| RSI | 59.8 |
| ATR% | 6.2% |
| Dist EMA20 | 7.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 8. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 43.4 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 437.67 |
| **Entry** | **437.67** |
| **Stop** | **410.75** (ATR × 1.5) |
| **Target** | **477.15** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 4.1% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 9. NASDAQ:MNST (NASDAQ:MNST)

| Field | Value |
|-------|-------|
| Combined Score | **54.9** |
| Tech Score | 41.8 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 89.04 |
| **Entry** | **89.04** |
| **Stop** | **86.5** (ATR × 1.5) |
| **Target** | **92.76** |
| R/R | 1.5:1 |
| RSI | 66.2 |
| ATR% | 1.9% |
| Dist EMA20 | 3.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break mom_decay near_resist |

### 10. NYSE:C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 48 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 129.93 |
| **Entry** | **127.98** |
| **Stop** | **123.69** (ATR × 2) |
| **Target** | **136.17** |
| R/R | 1.9:1 |
| RSI | 59.5 |
| ATR% | 2.4% |
| Dist EMA20 | 2.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 11. NYSE:DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **54.2** |
| Tech Score | 36.4 (Overextended Chase (High Risk)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 421.08 |
| **Entry** | **421.08** |
| **Stop** | **378.13** (ATR × 1.5) |
| **Target** | **478.35** |
| R/R | 1.3:1 |
| RSI | 76.3 |
| ATR% | 6.8% |
| Dist EMA20 | 33.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated mom_decay |

### 12. NASDAQ:TTMI (NASDAQ:TTMI)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 33.9 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 189.6 |
| **Entry** | **189.6** |
| **Stop** | **168.84** (ATR × 1.5) |
| **Target** | **220.05** |
| R/R | 1.5:1 |
| RSI | 64.5 |
| ATR% | 7.3% |
| Dist EMA20 | 10.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 13. NASDAQ:NBIS (NASDAQ:NBIS)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 31.9 (Overextended Chase (High Risk)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 251.68 |
| **Entry** | **251.68** |
| **Stop** | **218.46** (ATR × 1.5) |
| **Target** | **295.98** |
| R/R | 1.3:1 |
| RSI | 67.7 |
| ATR% | 8.8% |
| Dist EMA20 | 17.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated |

### 14. NASDAQ:ONDS (NASDAQ:ONDS)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 35 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 11.61 |
| **Entry** | **11.61** |
| **Stop** | **9.52** (ATR × 1.5) |
| **Target** | **14.68** |
| R/R | 1.5:1 |
| RSI | 55 |
| ATR% | 12% |
| Dist EMA20 | 5.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 15. NASDAQ:MTSI (NASDAQ:MTSI)

| Field | Value |
|-------|-------|
| Combined Score | **49.7** |
| Tech Score | 33.2 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 390.34 |
| **Entry** | **390.34** |
| **Stop** | **355.21** (ATR × 1.5) |
| **Target** | **441.86** |
| R/R | 1.5:1 |
| RSI | 62.4 |
| ATR% | 6% |
| Dist EMA20 | 7.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 16. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **49.2** |
| Tech Score | 30.6 (Reversal (Bullish RSI Divergence)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 146.96 |
| **Entry** | **146.96** |
| **Stop** | **140.57** (ATR × 1.5) |
| **Target** | **155.48** |
| R/R | 1.3:1 |
| RSI | 61.1 |
| ATR% | 2.9% |
| Dist EMA20 | 5.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 17. NYSE:CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **44.7** |
| Tech Score | 31.2 (Overextended Chase (High Risk)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 458.14 |
| **Entry** | **458.14** |
| **Stop** | **419.66** (ATR × 1.5) |
| **Target** | **509.45** |
| R/R | 1.3:1 |
| RSI | 67.3 |
| ATR% | 5.6% |
| Dist EMA20 | 17.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated fake_break near_resist chop |

### 18. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **43.5** |
| Tech Score | 31.1 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 80.84 |
| **Entry** | **79.63** |
| **Stop** | **69.36** (ATR × 2) |
| **Target** | **92.32** |
| R/R | 1.2:1 |
| RSI | 52.9 |
| ATR% | 7.1% |
| Dist EMA20 | 1.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:CIEN** | NYSE:CIEN | 63.8 | 42.7 | 83(hot) | 620.37 | **583.15** | 547.17 | 693.57 |
| **NYSE:COHR** | NYSE:COHR | 60.8 | 47.6 | 93(hot) | 417.43 | **392.38** | 359.82 | 475.04 |
| **NASDAQ:FIVE** | NASDAQ:FIVE | 59 | 42.6 | 96(hot) | 222.89 | **209.52** | 206.4 | 239.38 |
| **NYSE:HPE** | NYSE:HPE | 56.1 | 39.8 | 93(hot) | 55.15 | **51.84** | 48.09 | 62.21 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/5 06:41:21*