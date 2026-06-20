# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-19　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **JHG** | NYSE:JHG | **71.4** | ⚪C | 77.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 52.04 | 51.69 | 52.14 | 0.3:1 | mom_decay/near_resist/low_rr |
| 2 | **MS** | NYSE:MS | **69.7** | 🟢A | 63.5 | 79 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 223.17 | 213.46 | 236.11 | 1.3:1 | near_resist |
| 3 | **AMKR** | NASDAQ:AMKR | **69.4** | 🟢A | 50.4 | 98 | GREEN Long (Strong) | Overextended Chase (High Risk) | 90.46 | 79.47 | 105.11 | 1.3:1 | overheated |
| 4 | **GE** | NYSE:GE | **69.2** | 🟡C+ | 47.7 | 89 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 357.64 | 341.01 | 382.03 | 1.5:1 | bull_trap/near_resist |
| 5 | **SMP** | NYSE:SMP | **63.2** | ⚪C | 63.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 39.53 | 37.35 | 42.27 | 1.3:1 | mom_decay/near_resist/low_rr |
| 6 | **INTC** | NASDAQ:INTC | **62.6** | 🟢A | 44.4 | 90 | GREEN Long (Strong) | Overextended Chase (High Risk) | 133.99 | 118.31 | 154.89 | 1.3:1 | overheated/near_resist |
| 7 | **EQIX** | NASDAQ:EQIX | **61.7** | 🟢A | 50.5 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 1095.47 | 1045.01 | 1157.72 | 1.2:1 | near_resist/chop/low_rr |
| 8 | **BAP** | NYSE:BAP | **61.3** | ⚪C | 59.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 382.76 | 356.92 | 420.65 | 1.5:1 | OK |
| 9 | **QCOM** | NASDAQ:QCOM | **60.8** | 🟢A | 34.4 | 88 | GREEN Long (Strong) | Trend Continuation | 226.11 | 199.99 | 264.41 | 1.5:1 | mom_decay/low_rr |
| 10 | **DELL** | NYSE:DELL | **60.6** | 🟡C+ | 40 | 79 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 409.5 | 362.2 | 478.87 | 1.5:1 | mom_decay/low_rr |
| 11 | **ADI** | NASDAQ:ADI | **59.6** | 🟢A | 43.6 | 71 | GREEN Long (Mid) | Breakout (Squeeze Release) | 435.76 | 398.49 | 484.42 | 1.3:1 | near_resist/chop/low_rr |
| 12 | **PLXS** | NASDAQ:PLXS | **58.7** | ⚪C | 56.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 299.97 | 281.07 | 327.69 | 1.5:1 | near_resist |
| 13 | **STX** | NASDAQ:STX | **58.7** | 🟡C+ | 45.5 | 91 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 1070.23 | 967.49 | 1207.22 | 1.3:1 | overheated/bear_div |
| 14 | **AS** | NYSE:AS | **58.4** | ⚪C | 55.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 36.94 | 34.44 | 40.14 | 1.3:1 | near_resist/chop |
| 15 | **ARM** | NASDAQ:ARM | **58.3** | 🟡C+ | 42.8 | 94 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 439.46 | 373.54 | 527.35 | 1.3:1 | overheated/near_resist/bear_div |
| 16 | **COHR** | NYSE:COHR | **58.1** | 🟢A | 33.8 | 82 | GREEN Long (Strong) | Breakout (Squeeze Release) | 390.74 | 318.75 | 487.94 | 1.4:1 | mom_decay/chop/low_rr |
| 17 | **AEHR** | NASDAQ:AEHR | **57.9** | 🟢A | 36.2 | 78 | GREEN Long (Strong) | Breakout (Squeeze Release) | 115.65 | 89.15 | 151.62 | 1.4:1 | low_rr |
| 18 | **FLEX** | NASDAQ:FLEX | **57.8** | 🟢A | 41.3 | 70 | GREEN Long (Mid) | Trend Continuation | 147.61 | 132.78 | 169.37 | 1.5:1 | mom_decay/low_rr |
| 19 | **CINF** | NASDAQ:CINF | **57.3** | ⚪C | 51.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 170.2 | 165.35 | 177.31 | 1.5:1 | near_resist/low_rr |
| 20 | **CDNS** | NASDAQ:CDNS | **57.2** | 🟢A | 53.4 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 381.58 | 348.65 | 426.13 | 1.4:1 | mom_decay |
| 21 | **ON** | NASDAQ:ON | **57.2** | 🟢A | 37.7 | 74 | GREEN Long (Mid) | Trend Continuation | 121.62 | 107.94 | 141.69 | 1.5:1 | mom_decay/low_rr |
| 22 | **JBL** | NYSE:JBL | **56.5** | 🔵B | 24.5 | 92 | GREEN Long (Strong) | Breakout (Squeeze Release) | 373 | 333.73 | 424.87 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 23 | **MPWR** | NASDAQ:MPWR | **56.3** | ⚪C | 46.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 1568.39 | 1361.04 | 1845.17 | 1.3:1 | mom_decay/near_resist/chop |
| 24 | **CPRX** | NASDAQ:CPRX | **56** | ⚪C | 60 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.91 | 31.32 | 31.44 | -1.3:1 | bull_trap/mom_decay/near_resist |
| 25 | **IRM** | NYSE:IRM | **56** | ⚪C | 51.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.21 | 120.93 | 137.42 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **ENS** | NYSE:ENS | **55.9** | ⚪C | 50.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 228.63 | 209.9 | 253.02 | 1.3:1 | mom_decay/chop |
| 27 | **HON** | NASDAQ:HON | **55.8** | 🟢A | 51.6 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 225.57 | 212.98 | 245.04 | 1.5:1 | near_resist/chop |
| 28 | **TSM** | NYSE:TSM | **55.6** | ⚪C | 57.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 462.12 | 430.93 | 503.71 | 1.3:1 | near_resist |
| 29 | **MRVL** | NASDAQ:MRVL | **55.6** | 🟢A | 38.6 | 81 | GREEN Long (Strong) | Overextended Chase (High Risk) | 310.58 | 251.88 | 388.85 | 1.3:1 | overheated/low_rr |
| 30 | **DOV** | NYSE:DOV | **55.3** | 🟢A | 49.5 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 220.22 | 211.5 | 235.64 | 1.8:1 | near_resist/chop |
| 31 | **VRT** | NYSE:VRT | **54.9** | 🔵B | 29.9 | 80 | GREEN Long (Strong) | Trend Continuation | 333.05 | 303.08 | 377.01 | 1.5:1 | near_resist/chop/low_rr |
| 32 | **SXI** | NYSE:SXI | **54.5** | ⚪C | 49.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 315.17 | 296.26 | 342.9 | 1.5:1 | near_resist |
| 33 | **BGC** | NASDAQ:BGC | **54.5** | ⚪C | 44.5 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 12.05 | 11.51 | 12.85 | 1.5:1 | near_resist |
| 34 | **KRYS** | NASDAQ:KRYS | **54.1** | ⚪C | 48.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 348.06 | 328.74 | 376.39 | 1.5:1 | bull_trap/near_resist |
| 35 | **DLR** | NYSE:DLR | **53.7** | ⚪C | 56.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 188.15 | 180.81 | 197.93 | 1.3:1 | near_resist |
| 36 | **WWD** | NASDAQ:WWD | **53.2** | 🟢A | 39.7 | 61 | GREEN Long (Mid) | Trend Continuation | 430.08 | 408.15 | 462.25 | 1.5:1 | bull_trap/near_resist |
| 37 | **DKS** | NYSE:DKS | **52.9** | 🟢A | 39.9 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 233.66 | 217.03 | 255.09 | 1.3:1 | near_resist/chop/low_rr |
| 38 | **IFS** | NYSE:IFS | **52.8** | ⚪C | 52.3 | 41 | NEUTRAL No Trade (Neutral) | Trend Continuation | 57.28 | 53.76 | 62.45 | 1.5:1 | near_resist |
| 39 | **RELY** | NASDAQ:RELY | **52.7** | ⚪C | 46.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 21.1 | 19.77 | 23.05 | 1.5:1 | near_resist/low_rr |
| 40 | **TT** | NYSE:TT | **52.5** | ⚪C | 51.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 476.15 | 454.4 | 512.4 | 1.7:1 | chop |
| 41 | **C** | NYSE:C | **52.4** | ⚪C | 45.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 143.06 | 137.05 | 151.87 | 1.5:1 | bull_trap/near_resist |
| 42 | **NVMI** | NASDAQ:NVMI | **51.9** | ⚪C | 43.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 575.31 | 514.9 | 663.91 | 1.5:1 | chop/low_rr |
| 43 | **APH** | NYSE:APH | **51.6** | 🟢A | 31 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 163.96 | 154.12 | 178.39 | 1.5:1 | near_resist/bear_div/low_rr |
| 44 | **NVT** | NYSE:NVT | **51.3** | ⚪C | 42.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 177.55 | 161.41 | 198.7 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 45 | **ANET** | NYSE:ANET | **51** | 🟢A | 35.4 | 62 | GREEN Long (Mid) | Trend Continuation | 169.67 | 156.18 | 189.45 | 1.5:1 | chop/low_rr |
| 46 | **AIR** | NYSE:AIR | **50.8** | ⚪C | 41.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 134.88 | 127.39 | 145.86 | 1.5:1 | bull_trap/near_resist |
| 47 | **DTM** | NYSE:DTM | **50.6** | ⚪C | 51 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 141.15 | 137.57 | 149.03 | 2.2:1 | mom_decay/near_resist/chop/low_rr |
| 48 | **ORRF** | NASDAQ:ORRF | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.03 | 37.1 | 41.86 | 1.5:1 | near_resist/chop/low_rr |
| 49 | **NBIS** | NASDAQ:NBIS | **50.2** | ⚪C | 50.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 286.69 | 244.55 | 342.88 | 1.3:1 | overheated |
| 50 | **MNST** | NASDAQ:MNST | **50.1** | ⚪C | 50.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 89.97 | 87.87 | 94.81 | 2.3:1 | mom_decay/near_resist |
| 51 | **MOD** | NYSE:MOD | **50.1** | ⚪C | 41.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 298.26 | 261.51 | 347.18 | 1.3:1 | mom_decay/chop/low_rr |
| 52 | **NWBI** | NASDAQ:NWBI | **49.7** | ⚪C | 41.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 14.48 | 14.05 | 15.12 | 1.5:1 | near_resist/low_rr |
| 53 | **PANW** | NASDAQ:PANW | **49.7** | ⚪C | 39.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 287.78 | 267.49 | 317.54 | 1.5:1 | mom_decay/low_rr |
| 54 | **CRWD** | NASDAQ:CRWD | **49.7** | 🔵B | 29.2 | 68 | GREEN Long (Mid) | Trend Continuation | 684.86 | 626.3 | 770.74 | 1.5:1 | mom_decay/near_resist/low_rr |
| 55 | **CARR** | NYSE:CARR | **49.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 71.81 | 67.72 | 77.81 | 1.5:1 | bear_div/low_rr |
| 56 | **KEYS** | NYSE:KEYS | **49.3** | 🔵B | 28.5 | 68 | GREEN Long (Mid) | Trend Continuation | 363.67 | 342.4 | 394.87 | 1.5:1 | near_resist/chop/low_rr |
| 57 | **HPE** | NYSE:HPE | **48.7** | ⚪C | 36.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 47.41 | 41.15 | 56.59 | 1.5:1 | mom_decay |
| 58 | **FCX** | NYSE:FCX | **48.6** | ⚪C | 34 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 68.68 | 63.43 | 76.39 | 1.5:1 | near_resist/chop/low_rr |
| 59 | **NPB** | NYSE:NPB | **48.5** | ⚪C | 47.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 17.58 | 16.71 | 18.99 | 1.6:1 | near_resist/chop |
| 60 | **GEV** | NYSE:GEV | **48.2** | 🟢A | 37 | 65 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1109.73 | 1038.15 | 1205.17 | 1.3:1 | overheated/near_resist/low_rr |
| 61 | **CRDO** | NASDAQ:CRDO | **47.9** | ⚪C | 45.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 271.83 | 229.42 | 328.37 | 1.3:1 | overheated/fake_break/near_resist |
| 62 | **CSCO** | NASDAQ:CSCO | **47.4** | 🟢A | 37.7 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 117.75 | 110.69 | 128.39 | 1.5:1 | mom_decay/near_resist/low_rr |
| 63 | **KLAC** | NASDAQ:KLAC | **46.7** | 🔵B | 29.2 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 259.56 | 232.7 | 295.38 | 1.3:1 | overheated/bull_trap/near_resist/low_rr |
| 64 | **KALU** | NASDAQ:KALU | **46.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 183.3 | 166.63 | 205.14 | 1.3:1 | mom_decay/chop/bear_div/low_rr |
| 65 | **JCI** | NYSE:JCI | **46.3** | ⚪C | 35.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 144.82 | 136.78 | 156.61 | 1.5:1 | near_resist/chop/low_rr |
| 66 | **BHRB** | NASDAQ:BHRB | **46** | ⚪C | 43.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 64.53 | 62.1 | 68.92 | 1.8:1 | near_resist/chop/low_rr |
| 67 | **GNRC** | NYSE:GNRC | **45.8** | ⚪C | 32.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 279.15 | 254.86 | 314.77 | 1.5:1 | mom_decay/chop/low_rr |
| 68 | **NVDA** | NASDAQ:NVDA | **45.8** | 🔵B | 28.3 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 207.53 | 193.83 | 227.55 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 69 | **MTSI** | NASDAQ:MTSI | **45.3** | ⚪C | 27.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 391.41 | 356.18 | 443.08 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 70 | **SN** | NYSE:SN | **45.2** | ⚪C | 33.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 140.84 | 131.76 | 154.16 | 1.5:1 | fake_break/bull_trap/near_resist |
| 71 | **ADEA** | NASDAQ:ADEA | **45.1** | ⚪C | 33.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.81 | 27.56 | 38.04 | 1.5:1 | bear_div/low_rr |
| 72 | **WT** | NYSE:WT | **44.9** | ⚪C | 41.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.04 | 16.66 | 19.96 | 1.4:1 | mom_decay/near_resist/chop |
| 73 | **DOCN** | NYSE:DOCN | **44.9** | ⚪C | 27.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 173.79 | 145.51 | 211.82 | 1.3:1 | mom_decay/bear_div/low_rr |
| 74 | **APLD** | NASDAQ:APLD | **44.7** | ⚪C | 32.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 46.59 | 40.44 | 55.61 | 1.5:1 | mom_decay/near_resist/low_rr |
| 75 | **ALAB** | NASDAQ:ALAB | **44.6** | ⚪C | 39.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 417.07 | 360.77 | 492.14 | 1.3:1 | overheated/near_resist/bear_div |
| 76 | **OSBC** | NASDAQ:OSBC | **44.3** | ⚪C | 32.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 21.89 | 20.97 | 23.24 | 1.5:1 | near_resist/chop/low_rr |
| 77 | **AROC** | NYSE:AROC | **44.1** | ⚪C | 40.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.42 | 34.9 | 39.04 | 1.7:1 | near_resist/chop/low_rr |
| 78 | **FAF** | NYSE:FAF | **44.1** | ⚪C | 38.2 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 67.6 | 65.2 | 72.06 | 1.9:1 | near_resist/chop/low_rr |
| 79 | **BELFA** | NASDAQ:BELFA | **44.1** | ⚪C | 31.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 265.77 | 242.65 | 299.68 | 1.5:1 | near_resist/chop/low_rr |
| 80 | **SNEX** | NASDAQ:SNEX | **43.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 139.01 | 128.79 | 152.63 | 1.3:1 | overheated/bull_trap/near_resist |
| 81 | **POWL** | NASDAQ:POWL | **43.7** | ⚪C | 31.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 298.09 | 257.61 | 352.18 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 82 | **SCCO** | NYSE:SCCO | **43.7** | ⚪C | 31.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 192.93 | 177.88 | 215 | 1.5:1 | near_resist/chop/low_rr |
| 83 | **MTZ** | NYSE:MTZ | **43.5** | ⚪C | 39.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 373.97 | 346.25 | 413.07 | 1.4:1 | near_resist/low_rr |
| 84 | **VICR** | NASDAQ:VICR | **43.4** | ⚪C | 30.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 331.37 | 293.1 | 387.5 | 1.5:1 | chop/bear_div/low_rr |
| 85 | **AVGO** | NASDAQ:AVGO | **43.1** | 🔵B | 25.9 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 405.18 | 359.52 | 463.18 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 86 | **GLW** | NYSE:GLW | **42.9** | ⚪C | 27.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 194.92 | 172.7 | 227.51 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 87 | **OTC:SBGSY** | OTC:SBGSY | **42.8** | ⚪C | 29.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 66.93 | 63.11 | 72.53 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 88 | **OTC:ABBNY** | OTC:ABBNY | **41.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 106.69 | 101.59 | 115.03 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 89 | **WDC** | NASDAQ:WDC | **41.6** | ⚪C | 30.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 746.23 | 667.88 | 850.7 | 1.3:1 | overheated/mom_decay/bear_div |
| 90 | **BE** | NYSE:BE | **41.4** | ⚪C | 35.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 328.91 | 289.44 | 381.54 | 1.3:1 | overheated/near_resist/chop |
| 91 | **TTMI** | NASDAQ:TTMI | **41.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 216.44 | 194.36 | 245.88 | 1.3:1 | overheated/fake_break/near_resist |
| 92 | **PFS** | NYSE:PFS | **40.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.38 | 21.58 | 23.86 | 1.8:1 | near_resist/chop/low_rr |
| 93 | **HG** | NYSE:HG | **40.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.91 | 29.87 | 32.89 | 1.9:1 | near_resist/chop/low_rr |
| 94 | **FOR** | NYSE:FOR | **40.5** | ⚪C | 25.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 29.31 | 27.95 | 31.31 | 1.5:1 | near_resist/bear_div/low_rr |
| 95 | **CORZ** | NASDAQ:CORZ | **39.6** | ⚪C | 24.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 29.16 | 26.4 | 33.2 | 1.5:1 | mom_decay/bear_div/low_rr |
| 96 | **ENVA** | NYSE:ENVA | **39.4** | ⚪C | 32.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 202.55 | 192.52 | 215.92 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 97 | **PACS** | NYSE:PACS | **38.4** | ⚪C | 22.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 36.59 | 33.96 | 40.45 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 98 | **ADAM** | NASDAQ:ADAM | **36.7** | ⚪C | 27.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 8.99 | 8.64 | 9.62 | 1.8:1 | mom_decay/near_resist/bear_div/low_rr |
| 99 | **CRWV** | NASDAQ:CRWV | **36.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 116.18 | 98.84 | 137.06 | 1.2:1 | near_resist/chop/low_rr |
| 100 | **NBN** | NASDAQ:NBN | **36** | ⚪C | 26.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 293.54 | 281.92 | 314.1 | 1.8:1 | mom_decay/near_resist/low_rr |
| 101 | **TLN** | NASDAQ:TLN | **35.9** | ⚪C | 25.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 436.29 | 403.57 | 479.92 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 102 | **VSH** | NYSE:VSH | **35.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 64.9 | 54.29 | 79.05 | 1.3:1 | overheated/mom_decay/near_resist/low_rr |
| 103 | **SPNT** | NYSE:SPNT | **35.2** | ⚪C | 25.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.42 | 21.44 | 24.08 | 1.7:1 | near_resist/chop/low_rr |
| 104 | **POWI** | NASDAQ:POWI | **34.4** | ⚪C | 24 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 87.11 | 78.36 | 98.78 | 1.3:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **69.7** |
| Tech Score | 63.5 (Reversal (Bullish RSI Divergence)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 223.17 |
| **Entry** | **223.17** |
| **Stop** | **213.46** (ATR × 1.5) |
| **Target** | **236.11** |
| R/R | 1.3:1 |
| RSI | 68.7 |
| ATR% | 2.9% |
| Dist EMA20 | 5.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist |

### 2. AMKR (NASDAQ:AMKR)

| Field | Value |
|-------|-------|
| Combined Score | **69.4** |
| Tech Score | 50.4 (Overextended Chase (High Risk)) |
| News Score | 98 → GREEN Long (Strong) |
| Current Price | 90.46 |
| **Entry** | **90.46** |
| **Stop** | **79.47** (ATR × 1.5) |
| **Target** | **105.11** |
| R/R | 1.3:1 |
| RSI | 70.5 |
| ATR% | 8.1% |
| Dist EMA20 | 17.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

### 3. INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **62.6** |
| Tech Score | 44.4 (Overextended Chase (High Risk)) |
| News Score | 90 → GREEN Long (Strong) |
| Current Price | 133.99 |
| **Entry** | **133.99** |
| **Stop** | **118.31** (ATR × 1.5) |
| **Target** | **154.89** |
| R/R | 1.3:1 |
| RSI | 64.2 |
| ATR% | 7.8% |
| Dist EMA20 | 15.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist |

### 4. EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **61.7** |
| Tech Score | 50.5 (Breakout (Squeeze Release)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 1092.19 |
| **Entry** | **1095.47** |
| **Stop** | **1045.01** (ATR × 1.8) |
| **Target** | **1157.72** |
| R/R | 1.2:1 |
| RSI | 58.3 |
| ATR% | 2.4% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 5. QCOM (NASDAQ:QCOM)

| Field | Value |
|-------|-------|
| Combined Score | **60.8** |
| Tech Score | 34.4 (Trend Continuation) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 226.11 |
| **Entry** | **226.11** |
| **Stop** | **199.99** (ATR × 1.5) |
| **Target** | **264.41** |
| R/R | 1.5:1 |
| RSI | 55.3 |
| ATR% | 7.7% |
| Dist EMA20 | 4.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 6. ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **59.6** |
| Tech Score | 43.6 (Breakout (Squeeze Release)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 434.46 |
| **Entry** | **435.76** |
| **Stop** | **398.49** (ATR × 1.8) |
| **Target** | **484.42** |
| R/R | 1.3:1 |
| RSI | 58.8 |
| ATR% | 4.6% |
| Dist EMA20 | 4.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 7. COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **58.1** |
| Tech Score | 33.8 (Breakout (Squeeze Release)) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 389.57 |
| **Entry** | **390.74** |
| **Stop** | **318.75** (ATR × 1.8) |
| **Target** | **487.94** |
| R/R | 1.4:1 |
| RSI | 53.3 |
| ATR% | 10.1% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay chop low_rr |

### 8. AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **57.9** |
| Tech Score | 36.2 (Breakout (Squeeze Release)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 115.3 |
| **Entry** | **115.65** |
| **Stop** | **89.15** (ATR × 1.8) |
| **Target** | **151.62** |
| R/R | 1.4:1 |
| RSI | 58.8 |
| ATR% | 12.6% |
| Dist EMA20 | 11.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | low_rr |

### 9. FLEX (NASDAQ:FLEX)

| Field | Value |
|-------|-------|
| Combined Score | **57.8** |
| Tech Score | 41.3 (Trend Continuation) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 147.61 |
| **Entry** | **147.61** |
| **Stop** | **132.78** (ATR × 1.5) |
| **Target** | **169.37** |
| R/R | 1.5:1 |
| RSI | 56.5 |
| ATR% | 6.7% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 10. CDNS (NASDAQ:CDNS)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 53.4 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 387.39 |
| **Entry** | **381.58** |
| **Stop** | **348.65** (ATR × 2) |
| **Target** | **426.13** |
| R/R | 1.4:1 |
| RSI | 55.3 |
| ATR% | 5% |
| Dist EMA20 | 1.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 11. ON (NASDAQ:ON)

| Field | Value |
|-------|-------|
| Combined Score | **57.2** |
| Tech Score | 37.7 (Trend Continuation) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 121.62 |
| **Entry** | **121.62** |
| **Stop** | **107.94** (ATR × 1.5) |
| **Target** | **141.69** |
| R/R | 1.5:1 |
| RSI | 54.7 |
| ATR% | 7.5% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 12. HON (NASDAQ:HON)

| Field | Value |
|-------|-------|
| Combined Score | **55.8** |
| Tech Score | 51.6 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 229.01 |
| **Entry** | **225.57** |
| **Stop** | **212.98** (ATR × 2) |
| **Target** | **245.04** |
| R/R | 1.5:1 |
| RSI | 56.2 |
| ATR% | 3.5% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 13. MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 38.6 (Overextended Chase (High Risk)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 310.58 |
| **Entry** | **310.58** |
| **Stop** | **251.88** (ATR × 1.5) |
| **Target** | **388.85** |
| R/R | 1.3:1 |
| RSI | 64.6 |
| ATR% | 12.6% |
| Dist EMA20 | 19.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated low_rr |

### 14. DOV (NYSE:DOV)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 49.5 (Pullback Buy (Near Support)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 223.57 |
| **Entry** | **220.22** |
| **Stop** | **211.5** (ATR × 2) |
| **Target** | **235.64** |
| R/R | 1.8:1 |
| RSI | 59.2 |
| ATR% | 2.7% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 15. WWD (NASDAQ:WWD)

| Field | Value |
|-------|-------|
| Combined Score | **53.2** |
| Tech Score | 39.7 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 430.08 |
| **Entry** | **430.08** |
| **Stop** | **408.15** (ATR × 1.5) |
| **Target** | **462.25** |
| R/R | 1.5:1 |
| RSI | 71.7 |
| ATR% | 3.4% |
| Dist EMA20 | 11.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap near_resist |

### 16. DKS (NYSE:DKS)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 39.9 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 232.96 |
| **Entry** | **233.66** |
| **Stop** | **217.03** (ATR × 1.8) |
| **Target** | **255.09** |
| R/R | 1.3:1 |
| RSI | 59.2 |
| ATR% | 3.8% |
| Dist EMA20 | 5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 17. APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 31 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 163.96 |
| **Entry** | **163.96** |
| **Stop** | **154.12** (ATR × 1.5) |
| **Target** | **178.39** |
| R/R | 1.5:1 |
| RSI | 68.3 |
| ATR% | 4% |
| Dist EMA20 | 9.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist bear_div low_rr |

### 18. ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 35.4 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 169.67 |
| **Entry** | **169.67** |
| **Stop** | **156.18** (ATR × 1.5) |
| **Target** | **189.45** |
| R/R | 1.5:1 |
| RSI | 58.9 |
| ATR% | 5.3% |
| Dist EMA20 | 5.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop low_rr |

### 19. GEV (NYSE:GEV)

| Field | Value |
|-------|-------|
| Combined Score | **48.2** |
| Tech Score | 37 (Overextended Chase (High Risk)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 1109.73 |
| **Entry** | **1109.73** |
| **Stop** | **1038.15** (ATR × 1.5) |
| **Target** | **1205.17** |
| R/R | 1.3:1 |
| RSI | 65.5 |
| ATR% | 4.3% |
| Dist EMA20 | 12.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist low_rr |

### 20. CSCO (NASDAQ:CSCO)

| Field | Value |
|-------|-------|
| Combined Score | **47.4** |
| Tech Score | 37.7 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 119.54 |
| **Entry** | **117.75** |
| **Stop** | **110.69** (ATR × 2) |
| **Target** | **128.39** |
| R/R | 1.5:1 |
| RSI | 55.8 |
| ATR% | 3.7% |
| Dist EMA20 | 1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **GE** | NYSE:GE | 69.2 | 47.7 | 89(hot) | 357.64 | **336.18** | 335.47 | 379.81 |
| **DELL** | NYSE:DELL | 60.6 | 40 | 79(hot) | 409.5 | **384.93** | 346.44 | 472.56 |
| **STX** | NASDAQ:STX | 58.7 | 45.5 | 91(hot) | 1070.23 | **1006.02** | 933.24 | 1207.22 |
| **ARM** | NASDAQ:ARM | 58.3 | 42.8 | 94(hot) | 439.46 | **413.09** | 351.57 | 527.35 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/19 23:37:22*