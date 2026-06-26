# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-23　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **JHG** | NYSE:JHG | **74.1** | ⚪C | 81.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 52.08 | 51.73 | 52.18 | 0.3:1 | mom_decay/near_resist/low_rr |
| 2 | **DELL** | NYSE:DELL | **68.8** | 🟡C+ | 39.6 | 100 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 418.71 | 372.86 | 485.95 | 1.5:1 | mom_decay/low_rr |
| 3 | **AS** | NYSE:AS | **65.7** | ⚪C | 67.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 36.22 | 33.71 | 39.45 | 1.3:1 | near_resist/chop |
| 4 | **GE** | NYSE:GE | **62.5** | 🟢A | 47.8 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 355.12 | 339.14 | 378.56 | 1.5:1 | near_resist |
| 5 | **ADI** | NASDAQ:ADI | **62.4** | 🟢A | 46.3 | 74 | GREEN Long (Mid) | Breakout (Squeeze Release) | 446.82 | 410.2 | 494.48 | 1.3:1 | fake_break/near_resist/chop |
| 6 | **STX** | NASDAQ:STX | **61.3** | 🟢A | 56.8 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1094.04 | 990.65 | 1231.89 | 1.3:1 | overheated/mom_decay |
| 7 | **DKS** | NYSE:DKS | **60.2** | ⚪C | 57.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 239.29 | 222.68 | 260.64 | 1.3:1 | near_resist |
| 8 | **NBN** | NASDAQ:NBN | **58.6** | ⚪C | 56 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.39 | 117.41 | 142.73 | 1.3:1 | near_resist/chop/low_rr |
| 9 | **C** | NYSE:C | **58.4** | 🟢A | 41.6 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 145.67 | 139.77 | 154.32 | 1.5:1 | bull_trap/near_resist |
| 10 | **VIAV** | NASDAQ:VIAV | **58.2** | 🟢A | 34 | 82 | WARN Long (Cautious) | Breakout (Squeeze Release) | 53.1 | 44.27 | 64.98 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **WDC** | NASDAQ:WDC | **57.9** | 🟢A | 42.5 | 81 | GREEN Long (Strong) | Overextended Chase (High Risk) | 732.62 | 652.4 | 839.58 | 1.3:1 | overheated |
| 12 | **KRYS** | NASDAQ:KRYS | **57.8** | ⚪C | 54.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 343.43 | 323.85 | 372.14 | 1.5:1 | near_resist |
| 13 | **WWD** | NASDAQ:WWD | **57.4** | ⚪C | 49.4 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 426.82 | 405.05 | 458.75 | 1.5:1 | OK |
| 14 | **CDNS** | NASDAQ:CDNS | **56.3** | ⚪C | 59.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 383.2 | 354.03 | 424.05 | 1.4:1 | mom_decay |
| 15 | **JCI** | NYSE:JCI | **56.2** | ⚪C | 52 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 148.21 | 140.21 | 159.95 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **HPE** | NYSE:HPE | **56.2** | ⚪C | 48.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 48.4 | 42.37 | 57.24 | 1.5:1 | mom_decay |
| 17 | **NVT** | NYSE:NVT | **56** | ⚪C | 49 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 184.34 | 171.62 | 203 | 1.5:1 | near_resist/chop |
| 18 | **MTZ** | NYSE:MTZ | **55.9** | 🟢A | 51.9 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 400.23 | 371.38 | 441.26 | 1.4:1 | OK |
| 19 | **ETN** | NYSE:ETN | **55.7** | 🟢A | 35.2 | 74 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 435.78 | 410.29 | 473.17 | 1.5:1 | fake_break/near_resist/chop |
| 20 | **CINF** | NASDAQ:CINF | **55.4** | ⚪C | 49.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 172.46 | 167.29 | 180.05 | 1.5:1 | near_resist/low_rr |
| 21 | **BAP** | NYSE:BAP | **55.1** | ⚪C | 48.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 380.57 | 354.31 | 419.08 | 1.5:1 | OK |
| 22 | **CSCO** | NASDAQ:CSCO | **54.7** | ⚪C | 43.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 121.53 | 114.97 | 131.16 | 1.5:1 | mom_decay |
| 23 | **NVMI** | NASDAQ:NVMI | **54.4** | ⚪C | 47.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 583.1 | 523.62 | 670.33 | 1.5:1 | chop/low_rr |
| 24 | **GNRC** | NYSE:GNRC | **54.4** | 🟢A | 37.6 | 67 | GREEN Long (Mid) | Trend Continuation | 295.54 | 271.16 | 331.3 | 1.5:1 | near_resist/chop |
| 25 | **PANW** | NASDAQ:PANW | **54** | ⚪C | 48.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 286.4 | 267.5 | 314.12 | 1.5:1 | mom_decay/low_rr |
| 26 | **NWBI** | NASDAQ:NWBI | **53.9** | ⚪C | 48.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 14.59 | 14.15 | 15.23 | 1.5:1 | near_resist/low_rr |
| 27 | **CPRX** | NASDAQ:CPRX | **53.8** | ⚪C | 56.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.91 | 31.32 | 31.44 | -1.3:1 | bull_trap/mom_decay/near_resist/bear_div |
| 28 | **MNST** | NASDAQ:MNST | **53.6** | ⚪C | 47.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 93.02 | 90.37 | 96.91 | 1.5:1 | mom_decay/near_resist/low_rr |
| 29 | **FLEX** | NASDAQ:FLEX | **53.3** | ⚪C | 41.8 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 155.81 | 140.62 | 178.09 | 1.5:1 | mom_decay/low_rr |
| 30 | **AIR** | NYSE:AIR | **53.2** | ⚪C | 47 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 134.28 | 126.83 | 145.21 | 1.5:1 | bull_trap/near_resist |
| 31 | **IRM** | NYSE:IRM | **52.6** | ⚪C | 46 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 132.26 | 124.98 | 141.42 | 1.3:1 | near_resist/chop/low_rr |
| 32 | **BGC** | NASDAQ:BGC | **52.6** | ⚪C | 42.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 12.08 | 11.54 | 12.88 | 1.5:1 | bull_trap/near_resist |
| 33 | **JBL** | NYSE:JBL | **52.4** | 🔵B | 24.3 | 82 | GREEN Long (Strong) | Breakout (Squeeze Release) | 378.37 | 338.54 | 431 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 34 | **DTM** | NYSE:DTM | **52.2** | ⚪C | 53.7 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 145.04 | 140.91 | 150.55 | 1.3:1 | near_resist/chop |
| 35 | **PLXS** | NASDAQ:PLXS | **52.1** | ⚪C | 45.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 303.82 | 285.14 | 331.22 | 1.5:1 | fake_break/near_resist |
| 36 | **GEV** | NYSE:GEV | **52.1** | 🟢A | 40.2 | 70 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1127.59 | 1056.55 | 1222.31 | 1.3:1 | overheated/low_rr |
| 37 | **MU** | NASDAQ:MU | **51.9** | 🔵B | 29.2 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 1211.38 | 1073.28 | 1395.51 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 38 | **KEYS** | NYSE:KEYS | **51.7** | 🟢A | 33.1 | 67 | GREEN Long (Mid) | Trend Continuation | 373.34 | 352.06 | 404.55 | 1.5:1 | fake_break/near_resist/chop |
| 39 | **INTC** | NASDAQ:INTC | **51.7** | 🔵B | 26.9 | 89 | GREEN Long (Strong) | Overextended Chase (High Risk) | 140.94 | 125.51 | 161.52 | 1.3:1 | overheated/fake_break/near_resist |
| 40 | **NBIS** | NASDAQ:NBIS | **51.4** | ⚪C | 52.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 283.61 | 244.05 | 336.36 | 1.3:1 | overheated |
| 41 | **AEHR** | NASDAQ:AEHR | **51.3** | 🟢A | 33.1 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 113.67 | 87.01 | 149.88 | 1.4:1 | chop/low_rr |
| 42 | **TSM** | NYSE:TSM | **50.4** | ⚪C | 49.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 467.67 | 438.21 | 506.95 | 1.3:1 | fake_break/near_resist |
| 43 | **COHR** | NYSE:COHR | **50.2** | 🔵B | 28.6 | 70 | GREEN Long (Mid) | Breakout (Squeeze Release) | 426.76 | 349.66 | 530.79 | 1.3:1 | near_resist/chop/low_rr |
| 44 | **AMAT** | NASDAQ:AMAT | **50.1** | 🔵B | 22.2 | 92 | GREEN Long (Strong) | Overextended Chase (High Risk) | 640.18 | 580.64 | 719.56 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 45 | **OTC:SBGSY** | OTC:SBGSY | **50** | ⚪C | 41.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 66.81 | 63.2 | 72.1 | 1.5:1 | near_resist/chop/low_rr |
| 46 | **RELY** | NASDAQ:RELY | **49.7** | ⚪C | 41.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 20.66 | 19.39 | 22.52 | 1.5:1 | near_resist/low_rr |
| 47 | **APH** | NYSE:APH | **49.7** | 🔵B | 23.1 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 165.96 | 156 | 180.56 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 48 | **DOV** | NYSE:DOV | **49.1** | ⚪C | 38.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 229.4 | 220.45 | 242.52 | 1.5:1 | near_resist/chop/low_rr |
| 49 | **VRT** | NYSE:VRT | **49.1** | 🔵B | 29.9 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 357.96 | 326.82 | 399.48 | 1.3:1 | overheated/chop/low_rr |
| 50 | **CARR** | NYSE:CARR | **48.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 71.85 | 67.86 | 77.7 | 1.5:1 | bear_div/low_rr |
| 51 | **OSBC** | NASDAQ:OSBC | **48.8** | ⚪C | 39.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 22.08 | 21.19 | 23.39 | 1.5:1 | near_resist/chop/low_rr |
| 52 | **POWL** | NASDAQ:POWL | **48.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 308.72 | 268.46 | 362.43 | 1.3:1 | near_resist/chop/bear_div/low_rr |
| 53 | **MOD** | NYSE:MOD | **48.3** | ⚪C | 38.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 296.47 | 261 | 343.61 | 1.3:1 | chop/low_rr |
| 54 | **ASML** | NASDAQ:ASML | **48.3** | 🟢A | 32.2 | 60 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 1929.25 | 1781.66 | 2145.71 | 1.5:1 | fake_break/near_resist/bear_div |
| 55 | **MS** | NYSE:MS | **48.1** | ⚪C | 40.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 227.09 | 217.55 | 239.81 | 1.3:1 | bull_trap/near_resist/bear_div |
| 56 | **ENS** | NYSE:ENS | **48** | ⚪C | 41 | 46 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 233.64 | 214.91 | 257.98 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 57 | **QCOM** | NASDAQ:QCOM | **47.6** | 🔵B | 27.7 | 65 | GREEN Long (Mid) | Trend Continuation | 221.9 | 196.6 | 259 | 1.5:1 | mom_decay/low_rr |
| 58 | **DY** | NYSE:DY | **47.2** | ⚪C | 34.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 468.01 | 432.91 | 519.49 | 1.5:1 | mom_decay/chop/low_rr |
| 59 | **KALU** | NASDAQ:KALU | **47** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 185.59 | 169.38 | 206.77 | 1.3:1 | mom_decay/chop/bear_div/low_rr |
| 60 | **HON** | NASDAQ:HON | **46.7** | ⚪C | 39.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 224.69 | 212.14 | 244.08 | 1.5:1 | near_resist/chop/low_rr |
| 61 | **ARM** | NASDAQ:ARM | **46.1** | 🔵B | 24.9 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 407.72 | 344.73 | 491.71 | 1.3:1 | overheated/bear_div/low_rr |
| 62 | **ORRF** | NASDAQ:ORRF | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.09 | 37.1 | 42.01 | 1.5:1 | near_resist/chop/low_rr |
| 63 | **EQIX** | NASDAQ:EQIX | **45.7** | ⚪C | 33.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1115.94 | 1075.77 | 1174.86 | 1.5:1 | near_resist/chop/low_rr |
| 64 | **LLY** | NYSE:LLY | **45.4** | 🔵B | 15.4 | 78 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1102.08 | 1047.53 | 1182.09 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 65 | **DLR** | NYSE:DLR | **45.1** | ⚪C | 41.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 195.54 | 187.91 | 205.71 | 1.3:1 | fake_break/near_resist |
| 66 | **PWR** | NYSE:PWR | **45.1** | 🔵B | 26.1 | 61 | GREEN Long (Mid) | Trend Continuation | 740.14 | 694.62 | 806.9 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 67 | **SN** | NYSE:SN | **45** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 138.56 | 129.21 | 152.28 | 1.5:1 | fake_break/near_resist |
| 68 | **BHRB** | NASDAQ:BHRB | **44.9** | ⚪C | 41.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 64.5 | 62.21 | 68.75 | 1.9:1 | near_resist/chop/low_rr |
| 69 | **VICR** | NASDAQ:VICR | **44.5** | ⚪C | 40.9 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 365.53 | 325.5 | 418.9 | 1.3:1 | overheated/near_resist/chop |
| 70 | **IFS** | NYSE:IFS | **42.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 56.4 | 52.93 | 61.49 | 1.5:1 | near_resist/bear_div |
| 71 | **ADEA** | NASDAQ:ADEA | **42.9** | ⚪C | 28.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 31.81 | 27.9 | 37.55 | 1.5:1 | bear_div/low_rr |
| 72 | **INCY** | NASDAQ:INCY | **42.7** | ⚪C | 31.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 102.11 | 94.12 | 113.2 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 73 | **FCX** | NYSE:FCX | **42.5** | ⚪C | 29.9 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 69.21 | 64.12 | 76.67 | 1.5:1 | near_resist/chop/low_rr |
| 74 | **CRWD** | NASDAQ:CRWD | **42.5** | ⚪C | 25.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 675.44 | 618.7 | 758.65 | 1.5:1 | mom_decay/near_resist/low_rr |
| 75 | **FAF** | NYSE:FAF | **41.8** | ⚪C | 35 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 67.26 | 64.87 | 71.69 | 1.9:1 | near_resist/chop/low_rr |
| 76 | **NPB** | NYSE:NPB | **41.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 17.62 | 16.78 | 19 | 1.6:1 | near_resist/chop/low_rr |
| 77 | **OTC:ABBNY** | OTC:ABBNY | **41.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 109.6 | 104.5 | 117.07 | 1.5:1 | near_resist/chop/low_rr |
| 78 | **PFS** | NYSE:PFS | **41.3** | ⚪C | 35.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.66 | 21.91 | 24.11 | 1.9:1 | near_resist/chop/low_rr |
| 79 | **APLD** | NASDAQ:APLD | **41.1** | ⚪C | 26.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 45.2 | 39.23 | 53.95 | 1.5:1 | mom_decay/near_resist/low_rr |
| 80 | **SXI** | NYSE:SXI | **41.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 320.61 | 301.85 | 348.12 | 1.5:1 | fake_break/near_resist |
| 81 | **MTSI** | NASDAQ:MTSI | **40.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 396.26 | 361.19 | 447.69 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 82 | **TT** | NYSE:TT | **40.4** | ⚪C | 28 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 484.22 | 462.09 | 521.09 | 1.7:1 | fake_break/near_resist/chop/low_rr |
| 83 | **PACS** | NYSE:PACS | **40.2** | ⚪C | 33.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.2 | 34.3 | 41.24 | 1.4:1 | near_resist/chop/low_rr |
| 84 | **WT** | NYSE:WT | **40** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.38 | 17.06 | 20.26 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 85 | **TTMI** | NASDAQ:TTMI | **39.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 221.47 | 199.21 | 251.15 | 1.3:1 | overheated/fake_break/near_resist |
| 86 | **SCCO** | NYSE:SCCO | **39.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 187.06 | 170.54 | 209.28 | 1.3:1 | near_resist/chop/low_rr |
| 87 | **CORZ** | NASDAQ:CORZ | **39.7** | ⚪C | 23.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 29.08 | 26.38 | 33.05 | 1.5:1 | mom_decay/bear_div/low_rr |
| 88 | **HG** | NYSE:HG | **39.5** | ⚪C | 24.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.65 | 30.51 | 33.32 | 1.5:1 | near_resist/chop/low_rr |
| 89 | **AROC** | NYSE:AROC | **37.1** | ⚪C | 20.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 38.08 | 36.54 | 40.34 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 90 | **SPNT** | NYSE:SPNT | **36.7** | ⚪C | 27.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.45 | 21.47 | 24.11 | 1.7:1 | near_resist/chop/low_rr |
| 91 | **SNEX** | NASDAQ:SNEX | **36.3** | ⚪C | 27.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 138.79 | 128.8 | 152.11 | 1.3:1 | fake_break/bull_trap/near_resist |
| 92 | **CRWV** | NASDAQ:CRWV | **35.8** | ⚪C | 26.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 109.62 | 93.04 | 129.54 | 1.2:1 | near_resist/chop |
| 93 | **CRDO** | NASDAQ:CRDO | **34.8** | ⚪C | 23.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 302.52 | 258.5 | 361.21 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 94 | **POWI** | NASDAQ:POWI | **33.6** | ⚪C | 22.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 87.35 | 78.57 | 99.05 | 1.3:1 | fake_break/near_resist/low_rr |
| 95 | **BE** | NYSE:BE | **33.2** | ⚪C | 22 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 345.85 | 305.9 | 399.11 | 1.3:1 | overheated/fake_break/near_resist |
| 96 | **GLW** | NYSE:GLW | **33.2** | ⚪C | 21.4 | 51 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 209.83 | 186.85 | 240.47 | 1.3:1 | overheated/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. GE (NYSE:GE)

| Field | Value |
|-------|-------|
| Combined Score | **62.5** |
| Tech Score | 47.8 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 355.12 |
| **Entry** | **355.12** |
| **Stop** | **339.14** (ATR × 1.5) |
| **Target** | **378.56** |
| R/R | 1.5:1 |
| RSI | 69.2 |
| ATR% | 3% |
| Dist EMA20 | 7.1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist |

### 2. ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **62.4** |
| Tech Score | 46.3 (Breakout (Squeeze Release)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 445.48 |
| **Entry** | **446.82** |
| **Stop** | **410.2** (ATR × 1.8) |
| **Target** | **494.48** |
| R/R | 1.3:1 |
| RSI | 62 |
| ATR% | 4.4% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 3. STX (NASDAQ:STX)

| Field | Value |
|-------|-------|
| Combined Score | **61.3** |
| Tech Score | 56.8 (Overextended Chase (High Risk)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 1094.04 |
| **Entry** | **1094.04** |
| **Stop** | **990.65** (ATR × 1.5) |
| **Target** | **1231.89** |
| R/R | 1.3:1 |
| RSI | 75.5 |
| ATR% | 6.3% |
| Dist EMA20 | 17.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay |

### 4. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **58.4** |
| Tech Score | 41.6 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 145.67 |
| **Entry** | **145.67** |
| **Stop** | **139.77** (ATR × 1.5) |
| **Target** | **154.32** |
| R/R | 1.5:1 |
| RSI | 74.5 |
| ATR% | 2.7% |
| Dist EMA20 | 7.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist |

### 5. VIAV (NASDAQ:VIAV)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 34 (Breakout (Squeeze Release)) |
| News Score | 82 → WARN Long (Cautious) |
| Current Price | 52.94 |
| **Entry** | **53.1** |
| **Stop** | **44.27** (ATR × 1.8) |
| **Target** | **64.98** |
| R/R | 1.3:1 |
| RSI | 55.4 |
| ATR% | 9.1% |
| Dist EMA20 | 5.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 6. WDC (NASDAQ:WDC)

| Field | Value |
|-------|-------|
| Combined Score | **57.9** |
| Tech Score | 42.5 (Overextended Chase (High Risk)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 732.62 |
| **Entry** | **732.62** |
| **Stop** | **652.4** (ATR × 1.5) |
| **Target** | **839.58** |
| R/R | 1.3:1 |
| RSI | 75 |
| ATR% | 7.3% |
| Dist EMA20 | 23.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated |

### 7. MTZ (NYSE:MTZ)

| Field | Value |
|-------|-------|
| Combined Score | **55.9** |
| Tech Score | 51.9 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 406.32 |
| **Entry** | **400.23** |
| **Stop** | **371.38** (ATR × 2) |
| **Target** | **441.26** |
| R/R | 1.4:1 |
| RSI | 62.5 |
| ATR% | 4.3% |
| Dist EMA20 | 8.2% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | None |

### 8. ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **55.7** |
| Tech Score | 35.2 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 435.78 |
| **Entry** | **435.78** |
| **Stop** | **410.29** (ATR × 1.5) |
| **Target** | **473.17** |
| R/R | 1.5:1 |
| RSI | 63 |
| ATR% | 3.9% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 9. GNRC (NYSE:GNRC)

| Field | Value |
|-------|-------|
| Combined Score | **54.4** |
| Tech Score | 37.6 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 295.54 |
| **Entry** | **295.54** |
| **Stop** | **271.16** (ATR × 1.5) |
| **Target** | **331.3** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 5.5% |
| Dist EMA20 | 10.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 10. GEV (NYSE:GEV)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 40.2 (Overextended Chase (High Risk)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 1127.59 |
| **Entry** | **1127.59** |
| **Stop** | **1056.55** (ATR × 1.5) |
| **Target** | **1222.31** |
| R/R | 1.3:1 |
| RSI | 67.1 |
| ATR% | 4.2% |
| Dist EMA20 | 12.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated low_rr |

### 11. KEYS (NYSE:KEYS)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 33.1 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 373.34 |
| **Entry** | **373.34** |
| **Stop** | **352.06** (ATR × 1.5) |
| **Target** | **404.55** |
| R/R | 1.5:1 |
| RSI | 64.3 |
| ATR% | 3.8% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 12. AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 33.1 (Breakout (Squeeze Release)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 113.33 |
| **Entry** | **113.67** |
| **Stop** | **87.01** (ATR × 1.8) |
| **Target** | **149.88** |
| R/R | 1.4:1 |
| RSI | 57.5 |
| ATR% | 12.9% |
| Dist EMA20 | 8.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop low_rr |

### 13. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **48.3** |
| Tech Score | 32.2 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → WARN Long (Cautious) |
| Current Price | 1929.25 |
| **Entry** | **1929.25** |
| **Stop** | **1781.66** (ATR × 1.5) |
| **Target** | **2145.71** |
| R/R | 1.5:1 |
| RSI | 65.7 |
| ATR% | 5.1% |
| Dist EMA20 | 9.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist bear_div |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **DELL** | NYSE:DELL | 68.8 | 39.6 | 100(hot) | 418.71 | **393.59** | 357.58 | 479.84 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/23 13:21:52*