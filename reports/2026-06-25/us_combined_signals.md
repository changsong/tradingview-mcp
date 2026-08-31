# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-25　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NWBI** | NASDAQ:NWBI | **70.4** | ⚪C | 75.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 14.99 | 14.56 | 15.62 | 1.5:1 | near_resist |
| 2 | **GE** | NYSE:GE | **67.7** | 🟢A | 45.2 | 89 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 365.88 | 348.87 | 390.83 | 1.5:1 | bull_trap/near_resist |
| 3 | **AMAT** | NASDAQ:AMAT | **62.7** | 🟢A | 52.1 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 588.97 | 525.36 | 682.26 | 1.5:1 | OK |
| 4 | **IRM** | NYSE:IRM | **59.4** | ⚪C | 57.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 130.98 | 123.3 | 140.71 | 1.3:1 | near_resist/chop/low_rr |
| 5 | **MNST** | NASDAQ:MNST | **58.3** | 🟢A | 55.2 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 93.28 | 91.1 | 98.3 | 2.3:1 | bull_trap/mom_decay/near_resist |
| 6 | **AIR** | NYSE:AIR | **58.1** | ⚪C | 55.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 132.94 | 125.16 | 144.35 | 1.5:1 | near_resist |
| 7 | **NBN** | NASDAQ:NBN | **57.7** | ⚪C | 54.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.87 | 118.77 | 141.97 | 1.3:1 | near_resist/chop/low_rr |
| 8 | **JBL** | NYSE:JBL | **57.7** | 🟢A | 37.9 | 75 | GREEN Long (Strong) | Breakout (Squeeze Release) | 372.92 | 330.98 | 428.5 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 9 | **DELL** | NYSE:DELL | **57.7** | 🟢A | 34.2 | 93 | GREEN Long (Strong) | Overextended Chase (High Risk) | 434.06 | 387.83 | 495.7 | 1.3:1 | overheated/mom_decay/low_rr |
| 10 | **MTZ** | NYSE:MTZ | **57.2** | ⚪C | 47.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 393.14 | 365.42 | 433.79 | 1.5:1 | OK |
| 11 | **NPB** | NYSE:NPB | **56.3** | ⚪C | 52.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 18.56 | 17.78 | 19.7 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **FLEX** | NASDAQ:FLEX | **54.9** | 🟢A | 37.9 | 68 | GREEN Long (Mid) | Trend Continuation | 150.72 | 135.8 | 172.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 13 | **DLR** | NYSE:DLR | **54.3** | ⚪C | 57.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 193.02 | 185.2 | 203.44 | 1.3:1 | near_resist |
| 14 | **ALAB** | NASDAQ:ALAB | **54.2** | ⚪C | 44.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 399.92 | 342.33 | 484.38 | 1.5:1 | OK |
| 15 | **APH** | NYSE:APH | **53.8** | 🟢A | 35.4 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 162.78 | 152.52 | 177.82 | 1.5:1 | near_resist/low_rr |
| 16 | **TT** | NYSE:TT | **53.4** | ⚪C | 53.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 475.9 | 453.19 | 513.11 | 1.6:1 | chop |
| 17 | **LLY** | NYSE:LLY | **53.3** | 🟢A | 33.8 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1117.26 | 1061.96 | 1198.37 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 18 | **OSBC** | NASDAQ:OSBC | **52.8** | ⚪C | 46.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 22.89 | 22.03 | 24.15 | 1.5:1 | fake_break/near_resist/chop |
| 19 | **DKS** | NYSE:DKS | **52.7** | ⚪C | 46.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 236.93 | 223.78 | 256.22 | 1.5:1 | near_resist/low_rr |
| 20 | **KLAC** | NASDAQ:KLAC | **52.1** | 🔵B | 29.2 | 74 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 240.48 | 211.62 | 282.8 | 1.5:1 | bear_div/low_rr |
| 21 | **PFS** | NYSE:PFS | **51.9** | ⚪C | 53.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.02 | 22.29 | 24.45 | 2:1 | near_resist/chop/low_rr |
| 22 | **JHG** | NYSE:JHG | **51.7** | ⚪C | 52.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.12 | 51.69 | 52.11 | -1.7:1 | near_resist/bear_div/low_rr |
| 23 | **FOR** | NYSE:FOR | **51.7** | ⚪C | 44.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 30.93 | 29.4 | 33.18 | 1.5:1 | near_resist/bear_div |
| 24 | **GLW** | NYSE:GLW | **51.7** | 🔵B | 29.8 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 205.83 | 181.44 | 241.6 | 1.5:1 | near_resist/chop/low_rr |
| 25 | **KRYS** | NASDAQ:KRYS | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 347.63 | 328.34 | 375.93 | 1.5:1 | near_resist/low_rr |
| 26 | **AMKR** | NASDAQ:AMKR | **51.6** | 🔵B | 25.6 | 78 | GREEN Long (Strong) | Trend Continuation | 82.76 | 71.09 | 99.87 | 1.5:1 | low_rr |
| 27 | **CSCO** | NASDAQ:CSCO | **51.5** | 🟢A | 37.9 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 117.93 | 111.35 | 128.11 | 1.5:1 | mom_decay/near_resist/low_rr |
| 28 | **CARR** | NYSE:CARR | **51.4** | ⚪C | 44 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 74.06 | 70.39 | 79.44 | 1.5:1 | bear_div/low_rr |
| 29 | **ADAM** | NASDAQ:ADAM | **51** | ⚪C | 43.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 9.35 | 8.83 | 10 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 30 | **INCY** | NASDAQ:INCY | **51** | ⚪C | 42 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 108.46 | 101.63 | 118.48 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **CINF** | NASDAQ:CINF | **50.7** | ⚪C | 42.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 178.45 | 172.83 | 186.69 | 1.5:1 | fake_break/bull_trap/near_resist |
| 32 | **PACS** | NYSE:PACS | **50** | ⚪C | 41.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 38.85 | 36.29 | 42.61 | 1.5:1 | near_resist/chop/low_rr |
| 33 | **AGM** | NYSE:AGM | **49.5** | ⚪C | 40.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 192.66 | 183.99 | 205.38 | 1.5:1 | bear_div/low_rr |
| 34 | **NBIX** | NASDAQ:NBIX | **49.4** | ⚪C | 35.3 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 166.06 | 158.84 | 176.65 | 1.5:1 | mom_decay/near_resist/low_rr |
| 35 | **BHRB** | NASDAQ:BHRB | **49.3** | ⚪C | 40.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 67.85 | 65.51 | 71.28 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 36 | **PANW** | NASDAQ:PANW | **49.3** | ⚪C | 39.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 285.26 | 268.14 | 310.36 | 1.5:1 | mom_decay/low_rr |
| 37 | **IFS** | NYSE:IFS | **49.1** | ⚪C | 40.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 54.76 | 51.15 | 60.06 | 1.5:1 | bear_div/low_rr |
| 38 | **ORRF** | NASDAQ:ORRF | **48.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 40.67 | 38.84 | 43.35 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **VRTX** | NASDAQ:VRTX | **48.4** | 🟢A | 36.7 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 468.07 | 450.49 | 499.91 | 1.8:1 | fake_break/near_resist/chop/low_rr |
| 40 | **BAP** | NYSE:BAP | **47.5** | ⚪C | 37.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 376.49 | 349.38 | 416.25 | 1.5:1 | near_resist/low_rr |
| 41 | **MU** | NASDAQ:MU | **47.3** | 🔵B | 27.8 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1048.51 | 894.38 | 1274.57 | 1.5:1 | mom_decay/near_resist/low_rr |
| 42 | **BE** | NYSE:BE | **47.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 326.19 | 283.62 | 382.95 | 1.3:1 | overheated |
| 43 | **C** | NYSE:C | **47.2** | ⚪C | 37 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 143.59 | 137.99 | 151.8 | 1.5:1 | near_resist/low_rr |
| 44 | **TTMI** | NASDAQ:TTMI | **47.1** | ⚪C | 36.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 209.74 | 185.83 | 244.81 | 1.5:1 | OK |
| 45 | **RELY** | NASDAQ:RELY | **47.1** | ⚪C | 36.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 21.45 | 20.16 | 23.34 | 1.5:1 | fake_break/near_resist/low_rr |
| 46 | **CRWD** | NASDAQ:CRWD | **46.9** | ⚪C | 42.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 662.92 | 598.99 | 747.05 | 1.3:1 | mom_decay |
| 47 | **GEV** | NYSE:GEV | **46.9** | ⚪C | 40.2 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1041.79 | 951.89 | 1163.42 | 1.4:1 | near_resist/chop |
| 48 | **SXI** | NYSE:SXI | **46.9** | ⚪C | 36.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 318.09 | 298.53 | 346.78 | 1.5:1 | near_resist/bear_div |
| 49 | **POWL** | NASDAQ:POWL | **46.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 295.37 | 255.79 | 348.23 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 50 | **HPE** | NYSE:HPE | **45.8** | ⚪C | 32 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 48.75 | 44.29 | 55.29 | 1.5:1 | mom_decay/near_resist/low_rr |
| 51 | **BGC** | NASDAQ:BGC | **45.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.65 | 12.08 | 13.48 | 1.5:1 | bull_trap/mom_decay/near_resist |
| 52 | **LRCX** | NASDAQ:LRCX | **45.5** | ⚪C | 29.5 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 374.8 | 332.07 | 437.47 | 1.5:1 | bear_div |
| 53 | **KEYS** | NYSE:KEYS | **45.3** | ⚪C | 29.8 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 351.3 | 329.7 | 382.99 | 1.5:1 | near_resist/chop/low_rr |
| 54 | **GNRC** | NYSE:GNRC | **45.3** | 🔵B | 25.9 | 62 | GREEN Long (Mid) | Trend Continuation | 284.14 | 258.99 | 321.02 | 1.5:1 | near_resist/chop/low_rr |
| 55 | **DTM** | NYSE:DTM | **45** | ⚪C | 41.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 144.88 | 141.21 | 152.97 | 2.2:1 | near_resist/chop/low_rr |
| 56 | **AROC** | NYSE:AROC | **43.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 38.79 | 37.04 | 41.35 | 1.5:1 | near_resist/chop/low_rr |
| 57 | **STX** | NASDAQ:STX | **43.4** | ⚪C | 33.4 | 46 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 993.25 | 878.53 | 1161.51 | 1.5:1 | bear_div/low_rr |
| 58 | **POWI** | NASDAQ:POWI | **42.4** | ⚪C | 37.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 81.86 | 72.9 | 93.81 | 1.3:1 | mom_decay/chop |
| 59 | **DY** | NYSE:DY | **42.4** | ⚪C | 27.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 483.48 | 448.67 | 534.54 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 60 | **PLXS** | NASDAQ:PLXS | **42.2** | ⚪C | 28.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 286.59 | 267.25 | 314.96 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 61 | **CPRX** | NASDAQ:CPRX | **42.1** | ⚪C | 34.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 30.95 | 31.36 | 31.48 | -1.3:1 | fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 62 | **OTC:ABBNY** | OTC:ABBNY | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 104.25 | 99.07 | 112.61 | 1.6:1 | near_resist/chop |
| 63 | **EQIX** | NASDAQ:EQIX | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1078.58 | 1042.44 | 1147.56 | 1.9:1 | near_resist/chop/low_rr |
| 64 | **INTC** | NASDAQ:INTC | **42** | 🔵B | 15.7 | 69 | GREEN Long (Mid) | Trend Continuation | 131.65 | 115.65 | 155.11 | 1.5:1 | fake_break/near_resist/low_rr |
| 65 | **MTSI** | NASDAQ:MTSI | **41.9** | ⚪C | 26.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 374.2 | 330.77 | 431.84 | 1.3:1 | mom_decay/chop/low_rr |
| 66 | **MRVL** | NASDAQ:MRVL | **41.8** | 🔵B | 21.4 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 276.7 | 225.65 | 351.58 | 1.5:1 | mom_decay/bear_div |
| 67 | **NBIS** | NASDAQ:NBIS | **41.3** | ⚪C | 23.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 259.66 | 216.82 | 322.5 | 1.5:1 | bear_div/low_rr |
| 68 | **MS** | NYSE:MS | **41.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 219.86 | 210.3 | 232.61 | 1.3:1 | bear_div/low_rr |
| 69 | **FAF** | NYSE:FAF | **40.9** | ⚪C | 33.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 66.24 | 63.62 | 70.88 | 1.8:1 | near_resist/chop/low_rr |
| 70 | **DOV** | NYSE:DOV | **40.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 220.95 | 212.65 | 235.97 | 1.8:1 | near_resist/chop/low_rr |
| 71 | **WDC** | NASDAQ:WDC | **40.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 643.83 | 556.91 | 771.31 | 1.5:1 | bear_div/low_rr |
| 72 | **SNEX** | NASDAQ:SNEX | **39.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 136.13 | 126.33 | 149.2 | 1.3:1 | bear_div |
| 73 | **VICR** | NASDAQ:VICR | **39.9** | ⚪C | 22.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 322.28 | 278.29 | 386.8 | 1.5:1 | chop/bear_div/low_rr |
| 74 | **TSM** | NYSE:TSM | **39.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 440.8 | 409.72 | 482.24 | 1.3:1 | near_resist/chop/low_rr |
| 75 | **HG** | NYSE:HG | **39.5** | ⚪C | 24.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.61 | 31.39 | 34.4 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 76 | **SPNT** | NYSE:SPNT | **39.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.09 | 22.03 | 24.85 | 1.7:1 | near_resist/chop/low_rr |
| 77 | **CRDO** | NASDAQ:CRDO | **38.5** | ⚪C | 21.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 268.99 | 225.41 | 332.9 | 1.5:1 | fake_break/near_resist/low_rr |
| 78 | **TLN** | NASDAQ:TLN | **38.3** | ⚪C | 30.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 399.8 | 360.43 | 451.35 | 1.3:1 | near_resist/chop/low_rr |
| 79 | **WWD** | NASDAQ:WWD | **38.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 432.8 | 409.43 | 467.08 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 80 | **CORZ** | NASDAQ:CORZ | **37.6** | ⚪C | 21 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 27.87 | 24.44 | 32.44 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. GE (NYSE:GE)

| Field | Value |
|-------|-------|
| Combined Score | **67.7** |
| Tech Score | 45.2 (Trend Follow (HH/HL Intact)) |
| News Score | 89 → GREEN Long (Strong) |
| Current Price | 365.88 |
| **Entry** | **365.88** |
| **Stop** | **348.87** (ATR × 1.5) |
| **Target** | **390.83** |
| R/R | 1.5:1 |
| RSI | 73.3 |
| ATR% | 3.1% |
| Dist EMA20 | 8.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist |

### 2. AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **62.7** |
| Tech Score | 52.1 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 588.97 |
| **Entry** | **588.97** |
| **Stop** | **525.36** (ATR × 1.5) |
| **Target** | **682.26** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 7.2% |
| Dist EMA20 | 9.3% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 3. MNST (NASDAQ:MNST)

| Field | Value |
|-------|-------|
| Combined Score | **58.3** |
| Tech Score | 55.2 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 94.7 |
| **Entry** | **93.28** |
| **Stop** | **91.1** (ATR × 2) |
| **Target** | **98.3** |
| R/R | 2.3:1 |
| RSI | 71.2 |
| ATR% | 1.9% |
| Dist EMA20 | 4.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap mom_decay near_resist |

### 4. JBL (NYSE:JBL)

| Field | Value |
|-------|-------|
| Combined Score | **57.7** |
| Tech Score | 37.9 (Breakout (Squeeze Release)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 371.8 |
| **Entry** | **372.92** |
| **Stop** | **330.98** (ATR × 1.8) |
| **Target** | **428.5** |
| R/R | 1.3:1 |
| RSI | 53.8 |
| ATR% | 6.1% |
| Dist EMA20 | 0.8% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 5. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **57.7** |
| Tech Score | 34.2 (Overextended Chase (High Risk)) |
| News Score | 93 → GREEN Long (Strong) |
| Current Price | 434.06 |
| **Entry** | **434.06** |
| **Stop** | **387.83** (ATR × 1.5) |
| **Target** | **495.7** |
| R/R | 1.3:1 |
| RSI | 68.6 |
| ATR% | 7.1% |
| Dist EMA20 | 12.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

### 6. FLEX (NASDAQ:FLEX)

| Field | Value |
|-------|-------|
| Combined Score | **54.9** |
| Tech Score | 37.9 (Trend Continuation) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 150.72 |
| **Entry** | **150.72** |
| **Stop** | **135.8** (ATR × 1.5) |
| **Target** | **172.6** |
| R/R | 1.5:1 |
| RSI | 57.1 |
| ATR% | 6.6% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 7. APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 35.4 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 162.78 |
| **Entry** | **162.78** |
| **Stop** | **152.52** (ATR × 1.5) |
| **Target** | **177.82** |
| R/R | 1.5:1 |
| RSI | 63 |
| ATR% | 4.2% |
| Dist EMA20 | 6.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 8. LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **53.3** |
| Tech Score | 33.8 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 1117.26 |
| **Entry** | **1117.26** |
| **Stop** | **1061.96** (ATR × 1.5) |
| **Target** | **1198.37** |
| R/R | 1.5:1 |
| RSI | 58 |
| ATR% | 3.3% |
| Dist EMA20 | 1.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 9. CSCO (NASDAQ:CSCO)

| Field | Value |
|-------|-------|
| Combined Score | **51.5** |
| Tech Score | 37.9 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 119.73 |
| **Entry** | **117.93** |
| **Stop** | **111.35** (ATR × 2) |
| **Target** | **128.11** |
| R/R | 1.5:1 |
| RSI | 55.1 |
| ATR% | 3.5% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

### 10. VRTX (NASDAQ:VRTX)

| Field | Value |
|-------|-------|
| Combined Score | **48.4** |
| Tech Score | 36.7 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 475.2 |
| **Entry** | **468.07** |
| **Stop** | **450.49** (ATR × 2) |
| **Target** | **499.91** |
| R/R | 1.8:1 |
| RSI | 67.3 |
| ATR% | 2.6% |
| Dist EMA20 | 5.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/25 12:06:40*