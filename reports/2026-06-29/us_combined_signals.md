# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-29　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **MMM** | NYSE:MMM | **67.6** | 🟢A | 52.7 | 90 | GREEN Long (Strong) | Pullback Buy (Near Support) | 161.96 | 155.22 | 173.64 | 1.7:1 | near_resist |
| 2 | **MU** | NASDAQ:MU | **65.2** | 🟢A | 47.6 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1132.33 | 970.97 | 1368.99 | 1.5:1 | OK |
| 3 | **NBIX** | NASDAQ:NBIX | **65.2** | 🟡C+ | 40.4 | 90 | WARN No Trade (Overheated) | Trend Continuation | 170.5 | 163.34 | 181 | 1.5:1 | fake_break/near_resist |
| 4 | **CRWD** | NASDAQ:CRWD | **63.3** | ⚪C | 57.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 713.01 | 667.02 | 780.46 | 1.5:1 | mom_decay/low_rr |
| 5 | **RELY** | NASDAQ:RELY | **61.6** | ⚪C | 59.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 22.53 | 21.25 | 24.41 | 1.5:1 | OK |
| 6 | **OSBC** | NASDAQ:OSBC | **60.7** | ⚪C | 59.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 23.16 | 22.33 | 24.38 | 1.5:1 | near_resist |
| 7 | **MNST** | NASDAQ:MNST | **60.5** | ⚪C | 53.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 96.38 | 93.63 | 100.41 | 1.5:1 | bull_trap/near_resist |
| 8 | **DKS** | NYSE:DKS | **58.7** | ⚪C | 56.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 239.17 | 225.9 | 258.64 | 1.5:1 | near_resist/low_rr |
| 9 | **NWBI** | NASDAQ:NWBI | **58.2** | ⚪C | 55.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.05 | 14.62 | 15.68 | 1.5:1 | near_resist |
| 10 | **AMAT** | NASDAQ:AMAT | **58.2** | 🟢A | 51.6 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 626.84 | 558.2 | 718.36 | 1.3:1 | overheated |
| 11 | **NPB** | NYSE:NPB | **57.9** | ⚪C | 54.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 18.91 | 18.12 | 20.07 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **GE** | NYSE:GE | **57.8** | 🔵B | 28.7 | 89 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 368.27 | 352.8 | 390.96 | 1.5:1 | bull_trap/near_resist |
| 13 | **NBN** | NASDAQ:NBN | **56.1** | ⚪C | 51.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 132.78 | 124.41 | 145.05 | 1.5:1 | near_resist/chop/low_rr |
| 14 | **ASML** | NASDAQ:ASML | **54.8** | 🟢A | 41 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1818.69 | 1679.56 | 2022.75 | 1.5:1 | mom_decay |
| 15 | **ORRF** | NASDAQ:ORRF | **53.7** | ⚪C | 47.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 41.23 | 39.44 | 43.86 | 1.5:1 | bull_trap/near_resist/chop |
| 16 | **C** | NYSE:C | **53.6** | 🟢A | 40.3 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 141.76 | 136.23 | 149.87 | 1.5:1 | low_rr |
| 17 | **CARR** | NYSE:CARR | **52.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 73.59 | 69.84 | 79.09 | 1.5:1 | low_rr |
| 18 | **DY** | NYSE:DY | **52.2** | 🟢A | 37.3 | 62 | GREEN Long (Mid) | Breakout (Squeeze Release) | 497.44 | 455.78 | 551.74 | 1.3:1 | chop/low_rr |
| 19 | **INCY** | NASDAQ:INCY | **50.8** | 🟢A | 35.6 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 113.84 | 107.01 | 123.86 | 1.5:1 | fake_break/near_resist/chop |
| 20 | **INTC** | NASDAQ:INTC | **50.8** | 🔵B | 25.7 | 76 | WARN Long (Cautious) | Trend Continuation | 128.32 | 111.96 | 152.32 | 1.5:1 | near_resist/low_rr |
| 21 | **BAP** | NYSE:BAP | **49.8** | ⚪C | 41.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 384.1 | 356.44 | 424.66 | 1.5:1 | near_resist/low_rr |
| 22 | **APH** | NYSE:APH | **49.7** | 🟢A | 33.2 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 163.72 | 153.65 | 178.49 | 1.5:1 | near_resist/low_rr |
| 23 | **SON** | NYSE:SON | **49.6** | ⚪C | 49.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 53.18 | 50.75 | 57.23 | 1.7:1 | near_resist |
| 24 | **HUBB** | NYSE:HUBB | **49.4** | ⚪C | 44.3 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 514.09 | 483.3 | 560.54 | 1.5:1 | near_resist |
| 25 | **TT** | NYSE:TT | **49.3** | ⚪C | 48.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 475.13 | 446.67 | 518.07 | 1.5:1 | chop |
| 26 | **VRTX** | NASDAQ:VRTX | **49.3** | ⚪C | 34.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 490.81 | 471.67 | 518.88 | 1.5:1 | bull_trap/near_resist/low_rr |
| 27 | **CPRX** | NASDAQ:CPRX | **48.7** | ⚪C | 46.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 31.03 | 31.44 | 31.56 | -1.3:1 | bull_trap/mom_decay/near_resist/bear_div |
| 28 | **ALAB** | NASDAQ:ALAB | **48.7** | 🔵B | 26.9 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 391.74 | 334.15 | 476.2 | 1.5:1 | mom_decay/low_rr |
| 29 | **KALU** | NASDAQ:KALU | **48.6** | ⚪C | 38 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 188.07 | 171.98 | 209.07 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 30 | **IFS** | NYSE:IFS | **48.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 55.79 | 52.28 | 60.94 | 1.5:1 | bear_div/low_rr |
| 31 | **JHG** | NYSE:JHG | **48.1** | ⚪C | 46.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.18 | 51.75 | 52.16 | -1.7:1 | fake_break/near_resist/low_rr |
| 32 | **KRYS** | NASDAQ:KRYS | **47.6** | ⚪C | 46 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 372.25 | 352.15 | 399.05 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 33 | **DLR** | NYSE:DLR | **47.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 192.43 | 185.5 | 201.67 | 1.3:1 | near_resist/chop |
| 34 | **KLAC** | NASDAQ:KLAC | **47.2** | 🔵B | 29.7 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 248.64 | 219.18 | 291.85 | 1.5:1 | bear_div/low_rr |
| 35 | **IRM** | NYSE:IRM | **46.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 131.89 | 126.55 | 139.72 | 1.5:1 | near_resist/chop/low_rr |
| 36 | **HG** | NYSE:HG | **46.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 33.53 | 32.32 | 35.3 | 1.5:1 | fake_break/near_resist/low_rr |
| 37 | **FSS** | NYSE:FSS | **45.6** | ⚪C | 42.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 123.52 | 117.63 | 133.17 | 1.6:1 | near_resist/low_rr |
| 38 | **SN** | NYSE:SN | **45.5** | ⚪C | 32.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 145.1 | 135.31 | 159.46 | 1.5:1 | fake_break/near_resist/bear_div |
| 39 | **AIR** | NYSE:AIR | **44.8** | ⚪C | 41.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 143.14 | 134.77 | 154.3 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 40 | **MTZ** | NYSE:MTZ | **44.8** | ⚪C | 30.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 399.65 | 372.07 | 440.09 | 1.5:1 | low_rr |
| 41 | **FOR** | NYSE:FOR | **43.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.94 | 30.45 | 34.12 | 1.5:1 | bull_trap/near_resist/bear_div |
| 42 | **AGM** | NYSE:AGM | **43.5** | ⚪C | 30.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 193.24 | 185.41 | 204.72 | 1.5:1 | bear_div/low_rr |
| 43 | **SXI** | NYSE:SXI | **43.4** | ⚪C | 30.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 340.5 | 319.05 | 371.96 | 1.5:1 | bull_trap/near_resist/bear_div |
| 44 | **SNEX** | NASDAQ:SNEX | **43.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 135.42 | 125.67 | 148.42 | 1.3:1 | bear_div/low_rr |
| 45 | **WWD** | NASDAQ:WWD | **43.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 420.76 | 394.71 | 459.63 | 1.5:1 | bear_div |
| 46 | **HEI** | NYSE:HEI | **42.9** | ⚪C | 29.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 349.67 | 329.79 | 374.77 | 1.3:1 | fake_break/mom_decay/near_resist/low_rr |
| 47 | **PANW** | NASDAQ:PANW | **41.9** | ⚪C | 26.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 304.2 | 286.86 | 329.63 | 1.5:1 | fake_break/bull_trap/mom_decay/near_resist |
| 48 | **GEV** | NYSE:GEV | **41.7** | ⚪C | 36.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1034.25 | 942.9 | 1157.1 | 1.3:1 | near_resist/chop |
| 49 | **PLXS** | NASDAQ:PLXS | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 287.44 | 268.04 | 313.31 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 50 | **DTM** | NYSE:DTM | **40.6** | ⚪C | 26 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 151.27 | 146.73 | 157.93 | 1.5:1 | fake_break/near_resist/low_rr |
| 51 | **GNRC** | NYSE:GNRC | **40** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 272.83 | 244.85 | 309.12 | 1.3:1 | chop |
| 52 | **SNDK** | NASDAQ:SNDK | **39.9** | ⚪C | 22.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 2029.39 | 1709.76 | 2498.18 | 1.5:1 | mom_decay/bear_div |
| 53 | **PFS** | NYSE:PFS | **39.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 23.61 | 22.9 | 24.65 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 54 | **BROS** | NYSE:BROS | **39.7** | ⚪C | 21.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 71.15 | 65.92 | 78.82 | 1.5:1 | fake_break/near_resist/low_rr |
| 55 | **EQIX** | NASDAQ:EQIX | **39** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1081.21 | 1047.19 | 1148.17 | 2:1 | near_resist/chop/low_rr |
| 56 | **ENVA** | NYSE:ENVA | **39** | ⚪C | 31.6 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 231.04 | 219.6 | 246.29 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 57 | **CINF** | NASDAQ:CINF | **39** | ⚪C | 23.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 182.49 | 176.74 | 190.92 | 1.5:1 | fake_break/bull_trap/near_resist |
| 58 | **DOV** | NYSE:DOV | **38.7** | ⚪C | 31.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 222.57 | 213.31 | 238.61 | 1.7:1 | near_resist/low_rr |
| 59 | **PACS** | NYSE:PACS | **37.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 42.03 | 39.63 | 45.54 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 60 | **SBCF** | NASDAQ:SBCF | **37.3** | ⚪C | 28.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 32.85 | 31.42 | 35.28 | 1.7:1 | fake_break/near_resist/chop/low_rr |
| 61 | **BHRB** | NASDAQ:BHRB | **37.2** | ⚪C | 20.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 71.26 | 68.91 | 74.71 | 1.5:1 | fake_break/bull_trap/near_resist/chop |
| 62 | **SPNT** | NYSE:SPNT | **36.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.44 | 22.42 | 25.18 | 1.7:1 | fake_break/near_resist/chop/low_rr |
| 63 | **TSM** | NYSE:TSM | **35.3** | ⚪C | 25.5 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 432.35 | 402.52 | 472.13 | 1.3:1 | mom_decay/chop/low_rr |
| 64 | **GLW** | NYSE:GLW | **34.9** | 🔵B | 16.2 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 222.41 | 198.72 | 253.99 | 1.3:1 | overheated/fake_break/near_resist/chop |
| 65 | **TRNO** | NYSE:TRNO | **33.9** | ⚪C | 21.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 64.32 | 62.03 | 68.56 | 1.9:1 | mom_decay/near_resist/chop/low_rr |
| 66 | **BELFA** | NASDAQ:BELFA | **33.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 255.9 | 228.1 | 291.5 | 1.3:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MMM (NYSE:MMM)

| Field | Value |
|-------|-------|
| Combined Score | **67.6** |
| Tech Score | 52.7 (Pullback Buy (Near Support)) |
| News Score | 90 → GREEN Long (Strong) |
| Current Price | 164.43 |
| **Entry** | **161.96** |
| **Stop** | **155.22** (ATR × 2) |
| **Target** | **173.64** |
| R/R | 1.7:1 |
| RSI | 63.4 |
| ATR% | 2.8% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist |

### 2. MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **65.2** |
| Tech Score | 47.6 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 1132.33 |
| **Entry** | **1132.33** |
| **Stop** | **970.97** (ATR × 1.5) |
| **Target** | **1368.99** |
| R/R | 1.5:1 |
| RSI | 59 |
| ATR% | 9.5% |
| Dist EMA20 | 10.7% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 3. AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 51.6 (Overextended Chase (High Risk)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 626.84 |
| **Entry** | **626.84** |
| **Stop** | **558.2** (ATR × 1.5) |
| **Target** | **718.36** |
| R/R | 1.3:1 |
| RSI | 63.9 |
| ATR% | 7.3% |
| Dist EMA20 | 12.2% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated |

### 4. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 41 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1818.69 |
| **Entry** | **1818.69** |
| **Stop** | **1679.56** (ATR × 1.5) |
| **Target** | **2022.75** |
| R/R | 1.5:1 |
| RSI | 55.1 |
| ATR% | 5.1% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay |

### 5. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **53.6** |
| Tech Score | 40.3 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 141.76 |
| **Entry** | **141.76** |
| **Stop** | **136.23** (ATR × 1.5) |
| **Target** | **149.87** |
| R/R | 1.5:1 |
| RSI | 61.1 |
| ATR% | 2.6% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 6. DY (NYSE:DY)

| Field | Value |
|-------|-------|
| Combined Score | **52.2** |
| Tech Score | 37.3 (Breakout (Squeeze Release)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 495.95 |
| **Entry** | **497.44** |
| **Stop** | **455.78** (ATR × 1.8) |
| **Target** | **551.74** |
| R/R | 1.3:1 |
| RSI | 61.3 |
| ATR% | 4.5% |
| Dist EMA20 | 5.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 7. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **50.8** |
| Tech Score | 35.6 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 113.84 |
| **Entry** | **113.84** |
| **Stop** | **107.01** (ATR × 1.5) |
| **Target** | **123.86** |
| R/R | 1.5:1 |
| RSI | 68.8 |
| ATR% | 4% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 8. APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **49.7** |
| Tech Score | 33.2 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 163.72 |
| **Entry** | **163.72** |
| **Stop** | **153.65** (ATR × 1.5) |
| **Target** | **178.49** |
| R/R | 1.5:1 |
| RSI | 62.8 |
| ATR% | 4.1% |
| Dist EMA20 | 5.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NBIX** | NASDAQ:NBIX | 65.2 | 40.4 | 90(hot) | 170.5 | **160.27** | 160.95 | 180.05 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/29 21:38:34*