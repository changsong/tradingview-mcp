# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-26　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NWBI** | NASDAQ:NWBI | **68** | ⚪C | 71.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.09 | 14.66 | 15.72 | 1.5:1 | near_resist |
| 2 | **GE** | NYSE:GE | **67.1** | 🟢A | 48.1 | 83 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 371.36 | 354.65 | 395.87 | 1.5:1 | bull_trap/mom_decay/near_resist |
| 3 | **PWR** | NYSE:PWR | **60.6** | ⚪C | 54.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 720.75 | 661.68 | 797.63 | 1.3:1 | near_resist/chop/low_rr |
| 4 | **INTC** | NASDAQ:INTC | **60.2** | 🟢A | 40.6 | 77 | GREEN Long (Strong) | Trend Continuation | 132.87 | 115.73 | 158.01 | 1.5:1 | low_rr |
| 5 | **OSBC** | NASDAQ:OSBC | **59.6** | ⚪C | 57.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 23.02 | 22.19 | 24.24 | 1.5:1 | near_resist/chop |
| 6 | **CINF** | NASDAQ:CINF | **57.8** | ⚪C | 54.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 177.73 | 172.13 | 185.94 | 1.5:1 | bull_trap/near_resist |
| 7 | **CRWD** | NASDAQ:CRWD | **57.3** | ⚪C | 60.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 668.47 | 612.14 | 745.16 | 1.4:1 | mom_decay/near_resist/low_rr |
| 8 | **NBN** | NASDAQ:NBN | **57.2** | ⚪C | 53.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 130.25 | 122.24 | 142 | 1.5:1 | chop/low_rr |
| 9 | **MU** | NASDAQ:MU | **57.2** | 🟢A | 50 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1213.56 | 1047.91 | 1434.43 | 1.3:1 | overheated/near_resist |
| 10 | **MTZ** | NYSE:MTZ | **56** | ⚪C | 58.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 397.52 | 367.25 | 439.89 | 1.4:1 | OK |
| 11 | **LLY** | NYSE:LLY | **55.6** | 🟢A | 36.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1127.69 | 1075.25 | 1204.6 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 12 | **POWL** | NASDAQ:POWL | **55.2** | ⚪C | 50.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 310.13 | 270.24 | 363.31 | 1.3:1 | near_resist/chop/low_rr |
| 13 | **DKS** | NYSE:DKS | **55.1** | ⚪C | 50.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 237.29 | 224.48 | 256.08 | 1.5:1 | near_resist/low_rr |
| 14 | **DLR** | NYSE:DLR | **54.9** | ⚪C | 58.2 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 192.44 | 184.65 | 202.83 | 1.3:1 | near_resist |
| 15 | **NPB** | NYSE:NPB | **54.4** | ⚪C | 49 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 18.61 | 17.8 | 19.8 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **MNST** | NASDAQ:MNST | **54.4** | 🟢A | 41.7 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 95.83 | 93.1 | 99.84 | 1.5:1 | fake_break/bull_trap/near_resist |
| 17 | **BGC** | NASDAQ:BGC | **54.3** | ⚪C | 48.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.11 | 11.51 | 12.99 | 1.5:1 | OK |
| 18 | **APH** | NYSE:APH | **54.2** | 🟢A | 37.4 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 165.15 | 154.75 | 180.41 | 1.5:1 | near_resist/low_rr |
| 19 | **KALU** | NASDAQ:KALU | **53.8** | ⚪C | 46.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 182.28 | 166.03 | 203.54 | 1.3:1 | mom_decay/chop/low_rr |
| 20 | **KEYS** | NYSE:KEYS | **53.8** | 🟢A | 37.3 | 66 | GREEN Long (Mid) | Trend Continuation | 360.06 | 337.92 | 392.54 | 1.5:1 | near_resist/chop/low_rr |
| 21 | **GLW** | NYSE:GLW | **53.5** | 🟢A | 32.5 | 85 | GREEN Long (Strong) | Overextended Chase (High Risk) | 228.01 | 203.04 | 261.3 | 1.3:1 | overheated/near_resist/chop |
| 22 | **IRM** | NYSE:IRM | **53.1** | ⚪C | 46.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 131.45 | 123.75 | 141.22 | 1.3:1 | near_resist/chop/low_rr |
| 23 | **GNRC** | NYSE:GNRC | **52.5** | 🟢A | 39.1 | 60 | GREEN Long (Mid) | Trend Continuation | 295.16 | 269.92 | 332.17 | 1.5:1 | near_resist/chop |
| 24 | **BAP** | NYSE:BAP | **52.4** | ⚪C | 45.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 380.41 | 352.45 | 421.42 | 1.5:1 | low_rr |
| 25 | **IFS** | NYSE:IFS | **52.1** | ⚪C | 45.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 55.78 | 52.18 | 61.06 | 1.5:1 | bear_div/low_rr |
| 26 | **AGM** | NYSE:AGM | **51.3** | ⚪C | 43.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 193.28 | 185.16 | 205.19 | 1.5:1 | bear_div/low_rr |
| 27 | **PFS** | NYSE:PFS | **51.2** | ⚪C | 43.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 23.62 | 22.88 | 24.71 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 28 | **PACS** | NYSE:PACS | **50.7** | ⚪C | 42.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 40.68 | 38.06 | 44.53 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **MTSI** | NASDAQ:MTSI | **50.7** | ⚪C | 41.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 391.36 | 346.64 | 450.67 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 30 | **ORRF** | NASDAQ:ORRF | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 40.73 | 39.02 | 43.24 | 1.5:1 | fake_break/near_resist/chop |
| 31 | **INCY** | NASDAQ:INCY | **50.4** | ⚪C | 41 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 107.53 | 100.59 | 117.7 | 1.5:1 | near_resist/chop/low_rr |
| 32 | **TT** | NYSE:TT | **50.4** | ⚪C | 40.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 503.46 | 479.29 | 538.9 | 1.5:1 | near_resist/chop/low_rr |
| 33 | **CSCO** | NASDAQ:CSCO | **50.4** | 🟢A | 38 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 117.19 | 110.88 | 127.06 | 1.6:1 | mom_decay/near_resist/low_rr |
| 34 | **GEV** | NYSE:GEV | **49.9** | 🟢A | 41.1 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1069.19 | 979.09 | 1191.85 | 1.4:1 | near_resist/chop/low_rr |
| 35 | **ADI** | NASDAQ:ADI | **49.9** | ⚪C | 38.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 419.18 | 381.07 | 469.13 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 36 | **AMKR** | NASDAQ:AMKR | **49.9** | 🟢A | 33.5 | 62 | GREEN Long (Mid) | Trend Continuation | 85.62 | 73.8 | 102.95 | 1.5:1 | low_rr |
| 37 | **TTMI** | NASDAQ:TTMI | **49.2** | ⚪C | 40.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 210.57 | 186.88 | 245.31 | 1.5:1 | low_rr |
| 38 | **ALAB** | NASDAQ:ALAB | **48.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 398 | 338.9 | 484.68 | 1.5:1 | mom_decay/low_rr |
| 39 | **HG** | NYSE:HG | **48.7** | ⚪C | 47.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 31.74 | 30.61 | 33.83 | 1.8:1 | near_resist/chop/low_rr |
| 40 | **HPE** | NYSE:HPE | **48.6** | ⚪C | 33.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 46.72 | 42.3 | 53.2 | 1.5:1 | mom_decay |
| 41 | **PANW** | NASDAQ:PANW | **48.4** | ⚪C | 38.3 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 293.09 | 275.94 | 318.24 | 1.5:1 | mom_decay/near_resist/low_rr |
| 42 | **WDC** | NASDAQ:WDC | **48.2** | ⚪C | 36.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 675.39 | 582.19 | 812.09 | 1.5:1 | bear_div/low_rr |
| 43 | **DOV** | NYSE:DOV | **48** | ⚪C | 38.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 230.73 | 221.39 | 244.44 | 1.5:1 | near_resist/low_rr |
| 44 | **NBIX** | NASDAQ:NBIX | **47.8** | ⚪C | 33.4 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 164.18 | 157.04 | 174.65 | 1.5:1 | mom_decay/near_resist/low_rr |
| 45 | **ASML** | NASDAQ:ASML | **47.8** | 🔵B | 27.4 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1841.18 | 1683.76 | 2072.06 | 1.5:1 | mom_decay/bear_div/low_rr |
| 46 | **JHG** | NYSE:JHG | **47.4** | ⚪C | 45.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.14 | 51.71 | 52.13 | -1.7:1 | near_resist/bear_div/low_rr |
| 47 | **AMAT** | NASDAQ:AMAT | **47.3** | ⚪C | 43.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 668 | 598.86 | 760.18 | 1.3:1 | overheated/bull_trap/near_resist |
| 48 | **AMD** | NASDAQ:AMD | **47.2** | 🔵B | 18.4 | 78 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 532.57 | 475.05 | 616.93 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 49 | **KLAC** | NASDAQ:KLAC | **47.1** | 🔵B | 22.9 | 71 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 258.8 | 228.91 | 302.64 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 50 | **BHRB** | NASDAQ:BHRB | **47** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 69.68 | 67.28 | 73.21 | 1.5:1 | bull_trap/near_resist/chop/low_rr |
| 51 | **VRTX** | NASDAQ:VRTX | **47** | 🟢A | 36.4 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 472.98 | 457.13 | 503.23 | 1.9:1 | fake_break/near_resist/chop/low_rr |
| 52 | **SBCF** | NASDAQ:SBCF | **46.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 31.97 | 30.64 | 34.28 | 1.7:1 | near_resist/chop/low_rr |
| 53 | **BROS** | NYSE:BROS | **46.3** | 🔵B | 29.2 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 65.6 | 59.94 | 73.26 | 1.4:1 | near_resist/low_rr |
| 54 | **HON** | NASDAQ:HON | **46.2** | ⚪C | 42.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 227.77 | 216.9 | 245.58 | 1.6:1 | near_resist/chop |
| 55 | **C** | NYSE:C | **45.8** | ⚪C | 34.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 144.98 | 139.54 | 152.95 | 1.5:1 | bull_trap/near_resist/low_rr |
| 56 | **ADAM** | NASDAQ:ADAM | **45.8** | ⚪C | 34.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 9.36 | 8.86 | 9.98 | 1.2:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 57 | **DTM** | NYSE:DTM | **45.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 149.75 | 145.03 | 156.67 | 1.5:1 | near_resist/chop/low_rr |
| 58 | **OTC:ABBNY** | OTC:ABBNY | **45.1** | ⚪C | 41.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 105.24 | 100 | 113.68 | 1.6:1 | near_resist/chop/low_rr |
| 59 | **KRYS** | NASDAQ:KRYS | **45** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 359.93 | 340.49 | 388.44 | 1.5:1 | fake_break/bull_trap/near_resist |
| 60 | **DY** | NYSE:DY | **45** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 493.61 | 458.81 | 544.65 | 1.5:1 | mom_decay/chop/low_rr |
| 61 | **LRCX** | NASDAQ:LRCX | **45** | 🔵B | 28.4 | 70 | GREEN Long (Mid) | Overextended Chase (High Risk) | 401.82 | 357.22 | 461.29 | 1.3:1 | overheated/near_resist/bear_div/low_rr |
| 62 | **RELY** | NASDAQ:RELY | **44.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 21.41 | 19.96 | 23.52 | 1.5:1 | fake_break/near_resist/low_rr |
| 63 | **PLXS** | NASDAQ:PLXS | **44.1** | ⚪C | 31.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 296.79 | 277.65 | 324.87 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 64 | **BELFA** | NASDAQ:BELFA | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 267.86 | 242.55 | 304.99 | 1.5:1 | near_resist/chop/low_rr |
| 65 | **MOD** | NYSE:MOD | **43.7** | ⚪C | 31.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 284.52 | 249.46 | 331.18 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 66 | **BE** | NYSE:BE | **43.7** | ⚪C | 31.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 309.18 | 263.73 | 375.84 | 1.5:1 | near_resist/low_rr |
| 67 | **AROC** | NYSE:AROC | **43.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 41.4 | 39.41 | 44.31 | 1.5:1 | bull_trap/near_resist |
| 68 | **AIR** | NYSE:AIR | **43.4** | ⚪C | 30.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 138.51 | 130.41 | 150.39 | 1.5:1 | fake_break/bull_trap/near_resist |
| 69 | **MRVL** | NASDAQ:MRVL | **43.3** | 🔵B | 22.5 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 281.26 | 231.9 | 353.66 | 1.5:1 | mom_decay/bear_div/low_rr |
| 70 | **STX** | NASDAQ:STX | **42.8** | ⚪C | 34.4 | 43 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 1025.36 | 903.85 | 1203.57 | 1.5:1 | bear_div/low_rr |
| 71 | **SN** | NYSE:SN | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 142.85 | 132.99 | 157.31 | 1.5:1 | fake_break/near_resist/bear_div |
| 72 | **POWI** | NASDAQ:POWI | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 84.81 | 75.9 | 97.87 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 73 | **CPRX** | NASDAQ:CPRX | **42.6** | ⚪C | 36.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 30.95 | 31.36 | 31.48 | -1.3:1 | fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 74 | **CARR** | NYSE:CARR | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 74.86 | 70.83 | 81.17 | 1.6:1 | fake_break/near_resist/bear_div/low_rr |
| 75 | **TSM** | NYSE:TSM | **41.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 434.99 | 403.67 | 476.75 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 76 | **FSS** | NYSE:FSS | **40.9** | ⚪C | 34.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 125.07 | 119.35 | 134.59 | 1.7:1 | bull_trap/near_resist/chop/low_rr |
| 77 | **SPNT** | NYSE:SPNT | **40.3** | ⚪C | 33.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.71 | 21.63 | 24.49 | 1.6:1 | near_resist/chop/low_rr |
| 78 | **CRDO** | NASDAQ:CRDO | **40** | ⚪C | 23.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 268.03 | 224.21 | 332.3 | 1.5:1 | fake_break/near_resist/low_rr |
| 79 | **SXI** | NYSE:SXI | **39.2** | ⚪C | 23.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 338.14 | 317.34 | 368.64 | 1.5:1 | bull_trap/near_resist/bear_div |
| 80 | **FOR** | NYSE:FOR | **38.5** | ⚪C | 22.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.25 | 29.8 | 33.38 | 1.5:1 | fake_break/bull_trap/near_resist/bear_div |
| 81 | **MS** | NYSE:MS | **38.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 221.04 | 211.76 | 233.42 | 1.3:1 | mom_decay/bear_div/low_rr |
| 82 | **SNDK** | NASDAQ:SNDK | **38.4** | ⚪C | 25.3 | 58 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 2335 | 2012.77 | 2764.64 | 1.3:1 | overheated/near_resist/bear_div/low_rr |
| 83 | **VICR** | NASDAQ:VICR | **38.4** | ⚪C | 21 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 331.59 | 288.32 | 395.06 | 1.5:1 | chop/bear_div/low_rr |
| 84 | **EQIX** | NASDAQ:EQIX | **38.2** | ⚪C | 30.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1071.3 | 1035.4 | 1139.82 | 1.9:1 | near_resist/chop/low_rr |
| 85 | **TLN** | NASDAQ:TLN | **37.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 410.55 | 370.12 | 463.48 | 1.3:1 | near_resist/chop/low_rr |
| 86 | **SNEX** | NASDAQ:SNEX | **32.8** | ⚪C | 21.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 137.28 | 127.81 | 149.91 | 1.3:1 | bull_trap/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. GE (NYSE:GE)

| Field | Value |
|-------|-------|
| Combined Score | **67.1** |
| Tech Score | 48.1 (Trend Follow (HH/HL Intact)) |
| News Score | 83 → GREEN Long (Strong) |
| Current Price | 371.36 |
| **Entry** | **371.36** |
| **Stop** | **354.65** (ATR × 1.5) |
| **Target** | **395.87** |
| R/R | 1.5:1 |
| RSI | 75.1 |
| ATR% | 3% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap mom_decay near_resist |

### 2. INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 40.6 (Trend Continuation) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 132.87 |
| **Entry** | **132.87** |
| **Stop** | **115.73** (ATR × 1.5) |
| **Target** | **158.01** |
| R/R | 1.5:1 |
| RSI | 60.5 |
| ATR% | 8.6% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | low_rr |

### 3. MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 50 (Overextended Chase (High Risk)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 1213.56 |
| **Entry** | **1213.56** |
| **Stop** | **1047.91** (ATR × 1.5) |
| **Target** | **1434.43** |
| R/R | 1.3:1 |
| RSI | 64.5 |
| ATR% | 9.1% |
| Dist EMA20 | 20% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist |

### 4. LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 36.4 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 1127.69 |
| **Entry** | **1127.69** |
| **Stop** | **1075.25** (ATR × 1.5) |
| **Target** | **1204.6** |
| R/R | 1.5:1 |
| RSI | 60.3 |
| ATR% | 3.1% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 5. MNST (NASDAQ:MNST)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 41.7 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 95.83 |
| **Entry** | **95.83** |
| **Stop** | **93.1** (ATR × 1.5) |
| **Target** | **99.84** |
| R/R | 1.5:1 |
| RSI | 73.6 |
| ATR% | 1.9% |
| Dist EMA20 | 5.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break bull_trap near_resist |

### 6. APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **54.2** |
| Tech Score | 37.4 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 165.15 |
| **Entry** | **165.15** |
| **Stop** | **154.75** (ATR × 1.5) |
| **Target** | **180.41** |
| R/R | 1.5:1 |
| RSI | 64.7 |
| ATR% | 4.2% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 7. KEYS (NYSE:KEYS)

| Field | Value |
|-------|-------|
| Combined Score | **53.8** |
| Tech Score | 37.3 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 360.06 |
| **Entry** | **360.06** |
| **Stop** | **337.92** (ATR × 1.5) |
| **Target** | **392.54** |
| R/R | 1.5:1 |
| RSI | 56 |
| ATR% | 4.1% |
| Dist EMA20 | 2.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 8. GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **53.5** |
| Tech Score | 32.5 (Overextended Chase (High Risk)) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 228.01 |
| **Entry** | **228.01** |
| **Stop** | **203.04** (ATR × 1.5) |
| **Target** | **261.3** |
| R/R | 1.3:1 |
| RSI | 64.3 |
| ATR% | 7.3% |
| Dist EMA20 | 18.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop |

### 9. GNRC (NYSE:GNRC)

| Field | Value |
|-------|-------|
| Combined Score | **52.5** |
| Tech Score | 39.1 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 295.16 |
| **Entry** | **295.16** |
| **Stop** | **269.92** (ATR × 1.5) |
| **Target** | **332.17** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 5.7% |
| Dist EMA20 | 8.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 10. CSCO (NASDAQ:CSCO)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 38 (Pullback Buy (Near Support)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 118.97 |
| **Entry** | **117.19** |
| **Stop** | **110.88** (ATR × 2) |
| **Target** | **127.06** |
| R/R | 1.6:1 |
| RSI | 53.6 |
| ATR% | 3.4% |
| Dist EMA20 | 0% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist low_rr |

### 11. GEV (NYSE:GEV)

| Field | Value |
|-------|-------|
| Combined Score | **49.9** |
| Tech Score | 41.1 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1085.47 |
| **Entry** | **1069.19** |
| **Stop** | **979.09** (ATR × 2) |
| **Target** | **1191.85** |
| R/R | 1.4:1 |
| RSI | 58.7 |
| ATR% | 4.9% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 12. AMKR (NASDAQ:AMKR)

| Field | Value |
|-------|-------|
| Combined Score | **49.9** |
| Tech Score | 33.5 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 85.62 |
| **Entry** | **85.62** |
| **Stop** | **73.8** (ATR × 1.5) |
| **Target** | **102.95** |
| R/R | 1.5:1 |
| RSI | 58.9 |
| ATR% | 9.2% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | low_rr |

### 13. VRTX (NASDAQ:VRTX)

| Field | Value |
|-------|-------|
| Combined Score | **47** |
| Tech Score | 36.4 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 480.18 |
| **Entry** | **472.98** |
| **Stop** | **457.13** (ATR × 2) |
| **Target** | **503.23** |
| R/R | 1.9:1 |
| RSI | 69.2 |
| ATR% | 2.4% |
| Dist EMA20 | 5.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/26 10:40:32*