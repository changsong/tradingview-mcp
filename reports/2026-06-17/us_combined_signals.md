# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-17　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **HPE** | NYSE:HPE | **66.1** | 🟡C+ | 41.9 | 90 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 48.38 | 41.78 | 58.07 | 1.5:1 | mom_decay |
| 2 | **DELL** | NYSE:DELL | **63.7** | 🟢A | 33.2 | 97 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 404.08 | 348.92 | 484.98 | 1.5:1 | mom_decay/low_rr |
| 3 | **KLAC** | NASDAQ:KLAC | **62.2** | 🟢A | 49.4 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 237.33 | 213.12 | 272.83 | 1.5:1 | OK |
| 4 | **ADAM** | NASDAQ:ADAM | **62** | ⚪C | 61.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 9.36 | 9.04 | 9.83 | 1.5:1 | near_resist |
| 5 | **AMAT** | NASDAQ:AMAT | **61.2** | 🟢A | 47.4 | 82 | GREEN Long (Strong) | Overextended Chase (High Risk) | 568.23 | 515.38 | 638.69 | 1.3:1 | overheated |
| 6 | **EQIX** | NASDAQ:EQIX | **59.6** | 🟢A | 50.4 | 61 | GREEN Long (Mid) | Breakout (Squeeze Release) | 1097.96 | 1049.36 | 1157.62 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **C** | NYSE:C | **58.7** | 🟢A | 36.1 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 142.99 | 137.2 | 151.48 | 1.5:1 | bull_trap/near_resist |
| 8 | **SNEX** | NASDAQ:SNEX | **57.9** | ⚪C | 54.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 131.9 | 122.8 | 145.25 | 1.5:1 | OK |
| 9 | **NWBI** | NASDAQ:NWBI | **57.9** | ⚪C | 54.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 14.62 | 14.2 | 15.23 | 1.5:1 | near_resist |
| 10 | **GE** | NYSE:GE | **57.6** | 🟢A | 38.4 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 351.73 | 335.37 | 375.72 | 1.5:1 | fake_break/near_resist |
| 11 | **ASML** | NASDAQ:ASML | **57.6** | 🟢A | 33 | 82 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1803.89 | 1668.6 | 2002.32 | 1.5:1 | bear_div |
| 12 | **KRYS** | NASDAQ:KRYS | **56.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 323.37 | 305.91 | 348.98 | 1.5:1 | near_resist |
| 13 | **JHG** | NYSE:JHG | **56** | ⚪C | 51.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 51.98 | 51.63 | 52.08 | 0.3:1 | mom_decay/near_resist/low_rr |
| 14 | **DOV** | NYSE:DOV | **55.3** | 🟢A | 48.2 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 219.29 | 211.5 | 233.76 | 1.9:1 | near_resist/chop |
| 15 | **IRM** | NYSE:IRM | **55.2** | ⚪C | 50.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.59 | 121.52 | 137.51 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NBN** | NASDAQ:NBN | **54.5** | ⚪C | 49.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.29 | 117.55 | 142.3 | 1.3:1 | near_resist/chop/low_rr |
| 17 | **ARM** | NASDAQ:ARM | **54.5** | 🟡C+ | 41.9 | 86 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 396.34 | 332.13 | 481.95 | 1.3:1 | overheated/mom_decay/low_rr |
| 18 | **LRCX** | NASDAQ:LRCX | **54.1** | 🟢A | 39.2 | 64 | GREEN Long (Mid) | Trend Continuation | 369.34 | 333.88 | 421.34 | 1.5:1 | OK |
| 19 | **DKS** | NYSE:DKS | **54** | ⚪C | 46.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 226.57 | 208.81 | 249.61 | 1.3:1 | near_resist/chop/low_rr |
| 20 | **SXI** | NYSE:SXI | **53.7** | ⚪C | 47.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 308.77 | 292.1 | 333.22 | 1.5:1 | near_resist |
| 21 | **GEV** | NYSE:GEV | **53.6** | ⚪C | 50.7 | 58 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 982.35 | 917.51 | 1068.8 | 1.3:1 | near_resist/chop |
| 22 | **INTC** | NASDAQ:INTC | **53** | 🔵B | 20.7 | 89 | GREEN Long (Strong) | Trend Continuation | 117.05 | 101.77 | 139.45 | 1.5:1 | mom_decay/low_rr |
| 23 | **MS** | NYSE:MS | **52.4** | ⚪C | 50.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 220.83 | 211.89 | 232.75 | 1.3:1 | fake_break/near_resist |
| 24 | **MNST** | NASDAQ:MNST | **50.8** | ⚪C | 41.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 92.95 | 90.3 | 96.84 | 1.5:1 | bull_trap/near_resist |
| 25 | **DLR** | NYSE:DLR | **49.5** | ⚪C | 49.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 190.45 | 183.59 | 199.59 | 1.3:1 | near_resist/low_rr |
| 26 | **APH** | NYSE:APH | **49.2** | 🔵B | 20.4 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 158.81 | 148.57 | 173.83 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 27 | **ENVA** | NYSE:ENVA | **48.5** | ⚪C | 39.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 193.8 | 184.5 | 207.44 | 1.5:1 | bull_trap/near_resist |
| 28 | **MU** | NASDAQ:MU | **48.2** | 🔵B | 27.4 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1020.76 | 892.14 | 1209.4 | 1.5:1 | mom_decay/bear_div/low_rr |
| 29 | **DOCN** | NYSE:DOCN | **48** | 🔵B | 28.4 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 174.18 | 152.76 | 205.6 | 1.5:1 | mom_decay/low_rr |
| 30 | **HG** | NYSE:HG | **47.9** | ⚪C | 38.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.72 | 30.58 | 33.39 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **PANW** | NASDAQ:PANW | **47.7** | ⚪C | 33.2 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 279.9 | 257.65 | 312.54 | 1.5:1 | mom_decay/low_rr |
| 32 | **BGC** | NASDAQ:BGC | **47.4** | ⚪C | 37.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 11.84 | 11.32 | 12.6 | 1.5:1 | near_resist/low_rr |
| 33 | **SMP** | NYSE:SMP | **46.9** | ⚪C | 44.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.7 | 37.01 | 41.57 | 1.7:1 | mom_decay/near_resist/low_rr |
| 34 | **OTC:ABBNY** | OTC:ABBNY | **46.9** | ⚪C | 44.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 103.86 | 98.9 | 111.98 | 1.6:1 | mom_decay/near_resist/chop |
| 35 | **AIR** | NYSE:AIR | **45.8** | ⚪C | 32.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 129.96 | 122.75 | 140.54 | 1.5:1 | fake_break/near_resist |
| 36 | **ORRF** | NASDAQ:ORRF | **45.7** | ⚪C | 34.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.17 | 37.35 | 41.84 | 1.5:1 | near_resist/chop/low_rr |
| 37 | **BELFA** | NASDAQ:BELFA | **45.3** | ⚪C | 42.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 257.9 | 231.98 | 291.68 | 1.3:1 | chop |
| 38 | **NPB** | NYSE:NPB | **45.3** | ⚪C | 42.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 17.53 | 16.7 | 18.9 | 1.7:1 | near_resist/chop/low_rr |
| 39 | **PLXS** | NASDAQ:PLXS | **45.3** | ⚪C | 33.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 291.16 | 272.82 | 318.06 | 1.5:1 | near_resist/low_rr |
| 40 | **FCX** | NYSE:FCX | **44.9** | 🔵B | 25.2 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 70.15 | 64.89 | 77.87 | 1.5:1 | near_resist/chop/low_rr |
| 41 | **TT** | NYSE:TT | **44.5** | ⚪C | 40.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 468.21 | 448.72 | 501.96 | 1.7:1 | near_resist/chop/low_rr |
| 42 | **TSM** | NYSE:TSM | **44.5** | ⚪C | 29.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 425.83 | 397.09 | 467.99 | 1.5:1 | mom_decay/chop/low_rr |
| 43 | **WT** | NYSE:WT | **44.4** | ⚪C | 40.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.19 | 16.81 | 20.13 | 1.4:1 | mom_decay/near_resist/low_rr |
| 44 | **MRVL** | NASDAQ:MRVL | **44.3** | ⚪C | 34.1 | 47 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 278.67 | 225.17 | 357.14 | 1.5:1 | low_rr |
| 45 | **RELY** | NASDAQ:RELY | **44.3** | ⚪C | 32.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 20.36 | 19.11 | 22.2 | 1.5:1 | mom_decay/near_resist/low_rr |
| 46 | **RIO** | NYSE:RIO | **44.2** | ⚪C | 30.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 105.74 | 101.3 | 112.25 | 1.5:1 | mom_decay/chop/low_rr |
| 47 | **LLY** | NYSE:LLY | **44.2** | 🔵B | 17.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1122.5 | 1060.2 | 1213.87 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 48 | **BHRB** | NASDAQ:BHRB | **43.5** | ⚪C | 30.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 66.38 | 63.99 | 69.88 | 1.5:1 | near_resist/chop/low_rr |
| 49 | **SCCO** | NYSE:SCCO | **43.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 194.53 | 179.36 | 216.78 | 1.5:1 | near_resist/chop/low_rr |
| 50 | **CINF** | NASDAQ:CINF | **43.4** | ⚪C | 30.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 171.79 | 166.64 | 179.35 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 51 | **OTC:SBGSY** | OTC:SBGSY | **43.3** | ⚪C | 38.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 63.27 | 59.35 | 69.11 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 52 | **WDC** | NASDAQ:WDC | **43.3** | ⚪C | 36.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 681.08 | 613.65 | 770.98 | 1.3:1 | overheated/bear_div |
| 53 | **ADEA** | NASDAQ:ADEA | **43.2** | ⚪C | 30.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.8 | 27.79 | 37.68 | 1.5:1 | bear_div/low_rr |
| 54 | **CPRX** | NASDAQ:CPRX | **42.1** | ⚪C | 36.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.88 | 31.22 | 31.48 | -1.8:1 | bull_trap/mom_decay/near_resist/low_rr |
| 55 | **WWD** | NASDAQ:WWD | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 421.54 | 401.31 | 448.52 | 1.3:1 | overheated/bull_trap/near_resist |
| 56 | **OSBC** | NASDAQ:OSBC | **41.6** | ⚪C | 27.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 22.06 | 21.2 | 23.32 | 1.5:1 | near_resist/chop/low_rr |
| 57 | **AMD** | NASDAQ:AMD | **41.4** | 🔵B | 19.4 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 507.29 | 451.74 | 588.76 | 1.5:1 | mom_decay/near_resist/low_rr |
| 58 | **NBIS** | NASDAQ:NBIS | **40.8** | ⚪C | 34.6 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 265.1 | 224.14 | 319.71 | 1.3:1 | overheated/mom_decay/low_rr |
| 59 | **TLN** | NASDAQ:TLN | **40.8** | ⚪C | 34.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 400.41 | 365.86 | 447.16 | 1.4:1 | near_resist/chop/low_rr |
| 60 | **BE** | NYSE:BE | **40.7** | ⚪C | 26.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 280.88 | 243.38 | 335.88 | 1.5:1 | mom_decay/chop |
| 61 | **PFS** | NYSE:PFS | **40.3** | ⚪C | 33.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.8 | 22.13 | 24.17 | 2:1 | near_resist/chop/low_rr |
| 62 | **TRNO** | NYSE:TRNO | **40.3** | ⚪C | 33.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 65.29 | 63.23 | 69.33 | 2:1 | near_resist/chop/low_rr |
| 63 | **SPNT** | NYSE:SPNT | **40.2** | ⚪C | 33.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.93 | 21.93 | 24.63 | 1.7:1 | near_resist/chop/low_rr |
| 64 | **APLD** | NASDAQ:APLD | **40.1** | ⚪C | 25.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 46.27 | 39.95 | 55.53 | 1.5:1 | mom_decay/near_resist/low_rr |
| 65 | **SN** | NYSE:SN | **40.1** | ⚪C | 21.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 136.28 | 127.69 | 148.87 | 1.5:1 | fake_break/bull_trap/near_resist |
| 66 | **CRDO** | NASDAQ:CRDO | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 239.18 | 198.28 | 299.17 | 1.5:1 | near_resist/low_rr |
| 67 | **TTMI** | NASDAQ:TTMI | **37.2** | ⚪C | 20.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 199.58 | 176.53 | 233.39 | 1.5:1 | fake_break/near_resist/low_rr |
| 68 | **NVMI** | NASDAQ:NVMI | **35** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 550.69 | 491.22 | 629.99 | 1.3:1 | near_resist/chop/low_rr |
| 69 | **CRWV** | NASDAQ:CRWV | **32.9** | ⚪C | 21.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 115.27 | 97.6 | 136.46 | 1.2:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **63.7** |
| Tech Score | 33.2 (Trend Follow (HH/HL Intact)) |
| News Score | 97 → GREEN Long (Strong) |
| Current Price | 404.08 |
| **Entry** | **404.08** |
| **Stop** | **348.92** (ATR × 1.5) |
| **Target** | **484.98** |
| R/R | 1.5:1 |
| RSI | 65.1 |
| ATR% | 9.1% |
| Dist EMA20 | 11.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 2. KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **62.2** |
| Tech Score | 49.4 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 237.33 |
| **Entry** | **237.33** |
| **Stop** | **213.12** (ATR × 1.5) |
| **Target** | **272.83** |
| R/R | 1.5:1 |
| RSI | 63.7 |
| ATR% | 6.8% |
| Dist EMA20 | 10.9% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 3. AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **61.2** |
| Tech Score | 47.4 (Overextended Chase (High Risk)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 568.23 |
| **Entry** | **568.23** |
| **Stop** | **515.38** (ATR × 1.5) |
| **Target** | **638.69** |
| R/R | 1.3:1 |
| RSI | 70.3 |
| ATR% | 6.2% |
| Dist EMA20 | 14.4% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated |

### 4. EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **59.6** |
| Tech Score | 50.4 (Breakout (Squeeze Release)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 1094.68 |
| **Entry** | **1097.96** |
| **Stop** | **1049.36** (ATR × 1.8) |
| **Target** | **1157.62** |
| R/R | 1.2:1 |
| RSI | 59.6 |
| ATR% | 2.3% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 5. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **58.7** |
| Tech Score | 36.1 (Trend Follow (HH/HL Intact)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 142.99 |
| **Entry** | **142.99** |
| **Stop** | **137.2** (ATR × 1.5) |
| **Target** | **151.48** |
| R/R | 1.5:1 |
| RSI | 72.9 |
| ATR% | 2.7% |
| Dist EMA20 | 7.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist |

### 6. GE (NYSE:GE)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 38.4 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 351.73 |
| **Entry** | **351.73** |
| **Stop** | **335.37** (ATR × 1.5) |
| **Target** | **375.72** |
| R/R | 1.5:1 |
| RSI | 69.4 |
| ATR% | 3.1% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist |

### 7. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 33 (Trend Follow (HH/HL Intact)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 1803.89 |
| **Entry** | **1803.89** |
| **Stop** | **1668.6** (ATR × 1.5) |
| **Target** | **2002.32** |
| R/R | 1.5:1 |
| RSI | 59.2 |
| ATR% | 5% |
| Dist EMA20 | 5.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | bear_div |

### 8. DOV (NYSE:DOV)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 48.2 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 222.63 |
| **Entry** | **219.29** |
| **Stop** | **211.5** (ATR × 2) |
| **Target** | **233.76** |
| R/R | 1.9:1 |
| RSI | 58.9 |
| ATR% | 2.5% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop |

### 9. LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **54.1** |
| Tech Score | 39.2 (Trend Continuation) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 369.34 |
| **Entry** | **369.34** |
| **Stop** | **333.88** (ATR × 1.5) |
| **Target** | **421.34** |
| R/R | 1.5:1 |
| RSI | 64.6 |
| ATR% | 6.4% |
| Dist EMA20 | 11.4% |
| Chase OK | **YES** |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **HPE** | NYSE:HPE | 66.1 | 41.9 | 90(hot) | 48.38 | **45.48** | 39.57 | 57.19 |
| **ARM** | NASDAQ:ARM | 54.5 | 41.9 | 86(hot) | 396.34 | **372.56** | 310.73 | 481.95 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/17 11:39:40*