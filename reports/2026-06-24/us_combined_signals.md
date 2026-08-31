# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-24　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **JHG** | NYSE:JHG | **70.5** | ⚪C | 75.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 52.07 | 51.72 | 52.17 | 0.3:1 | near_resist/low_rr |
| 2 | **GE** | NYSE:GE | **67** | 🟢A | 47.4 | 84 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 356.47 | 339.89 | 380.78 | 1.5:1 | near_resist |
| 3 | **MNST** | NASDAQ:MNST | **63.3** | 🟢A | 51.8 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 93.69 | 91.02 | 97.61 | 1.5:1 | mom_decay/near_resist/low_rr |
| 4 | **CSCO** | NASDAQ:CSCO | **62** | ⚪C | 64.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 119.33 | 112.67 | 129.63 | 1.5:1 | mom_decay |
| 5 | **AGM** | NYSE:AGM | **61.2** | ⚪C | 60.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 189.95 | 178.81 | 204.06 | 1.3:1 | bear_div/low_rr |
| 6 | **NBN** | NASDAQ:NBN | **60.8** | ⚪C | 59.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 128.37 | 117.62 | 142.39 | 1.3:1 | near_resist/chop/low_rr |
| 7 | **NWBI** | NASDAQ:NWBI | **58.5** | ⚪C | 55.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 14.86 | 14.41 | 15.51 | 1.4:1 | fake_break/near_resist/low_rr |
| 8 | **DELL** | NYSE:DELL | **58.5** | 🟢A | 35.2 | 81 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 427.78 | 380.94 | 496.48 | 1.5:1 | mom_decay/low_rr |
| 9 | **AMKR** | NASDAQ:AMKR | **58.4** | 🟢A | 36.3 | 79 | GREEN Long (Strong) | Trend Continuation | 86.72 | 75.27 | 103.51 | 1.5:1 | low_rr |
| 10 | **AMAT** | NASDAQ:AMAT | **58.2** | 🟢A | 48.6 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 585.88 | 522.6 | 678.68 | 1.5:1 | OK |
| 11 | **ARM** | NASDAQ:ARM | **57.6** | 🟢A | 39 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 366.39 | 303.19 | 459.09 | 1.5:1 | mom_decay/low_rr |
| 12 | **KLAC** | NASDAQ:KLAC | **57.1** | 🟢A | 38.1 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 244.49 | 215.15 | 287.52 | 1.5:1 | low_rr |
| 13 | **KRYS** | NASDAQ:KRYS | **57** | ⚪C | 53.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 340.21 | 320.82 | 368.65 | 1.5:1 | OK |
| 14 | **MTZ** | NYSE:MTZ | **56.7** | 🟢A | 46.2 | 60 | GREEN Long (Mid) | Trend Continuation | 390.44 | 362.33 | 431.67 | 1.5:1 | OK |
| 15 | **FLEX** | NASDAQ:FLEX | **56.5** | 🟢A | 38.5 | 71 | GREEN Long (Mid) | Trend Continuation | 151.85 | 136.82 | 173.9 | 1.5:1 | mom_decay/near_resist/low_rr |
| 16 | **GEV** | NYSE:GEV | **55.9** | 🟢A | 51.2 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1019.46 | 931.48 | 1138.48 | 1.4:1 | OK |
| 17 | **DLR** | NYSE:DLR | **55.6** | ⚪C | 59.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 195 | 187.1 | 205.53 | 1.3:1 | near_resist |
| 18 | **PANW** | NASDAQ:PANW | **55.1** | ⚪C | 48.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 290.92 | 272.15 | 318.44 | 1.5:1 | mom_decay/low_rr |
| 19 | **CINF** | NASDAQ:CINF | **55** | ⚪C | 50 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 175.81 | 170.54 | 183.55 | 1.5:1 | fake_break/bull_trap/near_resist |
| 20 | **IRM** | NYSE:IRM | **54.9** | ⚪C | 49.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 133.46 | 125.87 | 143.04 | 1.3:1 | near_resist/chop/low_rr |
| 21 | **C** | NYSE:C | **54.7** | 🟢A | 38.1 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 144.97 | 139.1 | 153.58 | 1.5:1 | bull_trap/near_resist |
| 22 | **AIR** | NYSE:AIR | **54.3** | ⚪C | 48.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 132.26 | 124.72 | 143.32 | 1.5:1 | near_resist |
| 23 | **INCY** | NASDAQ:INCY | **53.9** | ⚪C | 54.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 102.83 | 95 | 113.8 | 1.4:1 | near_resist/chop |
| 24 | **BHRB** | NASDAQ:BHRB | **53.7** | ⚪C | 56.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 65.93 | 63.58 | 70.28 | 1.9:1 | near_resist/chop/low_rr |
| 25 | **JBL** | NYSE:JBL | **53.5** | 🟢A | 30.2 | 76 | GREEN Long (Strong) | Breakout (Squeeze Release) | 374.11 | 333.38 | 428.01 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 26 | **MS** | NYSE:MS | **52.4** | 🟢A | 42.6 | 67 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 226.03 | 216.54 | 238.69 | 1.3:1 | near_resist/bear_div |
| 27 | **TTMI** | NASDAQ:TTMI | **52.3** | ⚪C | 45.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 213.17 | 189.51 | 247.87 | 1.5:1 | OK |
| 28 | **STX** | NASDAQ:STX | **51.9** | ⚪C | 48.1 | 45 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 1038.59 | 927.98 | 1200.82 | 1.5:1 | OK |
| 29 | **CRDO** | NASDAQ:CRDO | **51.7** | ⚪C | 49.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 272 | 227.94 | 330.76 | 1.3:1 | overheated |
| 30 | **ORRF** | NASDAQ:ORRF | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.75 | 37.9 | 42.46 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **NPB** | NYSE:NPB | **50.7** | ⚪C | 51.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 17.89 | 17.11 | 19.21 | 1.7:1 | near_resist/chop/low_rr |
| 32 | **BGC** | NASDAQ:BGC | **50.7** | ⚪C | 40.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 12.56 | 12.01 | 13.36 | 1.5:1 | bull_trap/mom_decay/near_resist |
| 33 | **PFS** | NYSE:PFS | **49.9** | ⚪C | 49.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.03 | 22.26 | 24.5 | 1.9:1 | near_resist/chop/low_rr |
| 34 | **APH** | NYSE:APH | **49.7** | 🔵B | 25.9 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 158.7 | 148.7 | 173.36 | 1.5:1 | near_resist/bear_div/low_rr |
| 35 | **KEYS** | NYSE:KEYS | **49.2** | 🟢A | 31 | 64 | GREEN Long (Mid) | Trend Continuation | 352.58 | 330.9 | 384.38 | 1.5:1 | near_resist/chop/low_rr |
| 36 | **WT** | NYSE:WT | **49** | ⚪C | 48.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 18.33 | 17.12 | 19.94 | 1.3:1 | near_resist/chop |
| 37 | **LRCX** | NASDAQ:LRCX | **48.8** | 🟢A | 31.7 | 62 | GREEN Long (Mid) | Trend Continuation | 371.33 | 328.44 | 434.23 | 1.5:1 | bear_div |
| 38 | **OSBC** | NASDAQ:OSBC | **48.7** | ⚪C | 39.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 22.57 | 21.66 | 23.91 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 39 | **DKS** | NYSE:DKS | **48.5** | ⚪C | 37.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 236.75 | 223.26 | 256.54 | 1.5:1 | near_resist/low_rr |
| 40 | **DTM** | NYSE:DTM | **48.4** | ⚪C | 47.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 144.79 | 141.4 | 152.58 | 2.3:1 | near_resist/chop/low_rr |
| 41 | **VICR** | NASDAQ:VICR | **48.1** | ⚪C | 36.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 336.12 | 293.26 | 398.97 | 1.5:1 | chop/low_rr |
| 42 | **INTC** | NASDAQ:INTC | **47.7** | 🔵B | 15.2 | 84 | GREEN Long (Strong) | Trend Continuation | 132.28 | 116.01 | 156.14 | 1.5:1 | fake_break/near_resist/low_rr |
| 43 | **WDC** | NASDAQ:WDC | **47.4** | ⚪C | 37.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 670.75 | 585.23 | 796.18 | 1.5:1 | bear_div |
| 44 | **IFS** | NYSE:IFS | **47.3** | ⚪C | 37.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 54.84 | 51.22 | 60.15 | 1.5:1 | bear_div/low_rr |
| 45 | **RELY** | NASDAQ:RELY | **47.3** | ⚪C | 37.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 20.4 | 19.18 | 22.2 | 1.5:1 | near_resist/low_rr |
| 46 | **GNRC** | NYSE:GNRC | **46.7** | 🟢A | 34.5 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 270.42 | 242.14 | 306.94 | 1.3:1 | near_resist/chop/low_rr |
| 47 | **DOV** | NYSE:DOV | **46.5** | ⚪C | 44.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 220.19 | 211.47 | 235.61 | 1.8:1 | near_resist/chop |
| 48 | **CRWD** | NASDAQ:CRWD | **46.5** | ⚪C | 32.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 680.92 | 624.74 | 763.31 | 1.5:1 | mom_decay/near_resist/low_rr |
| 49 | **GLW** | NYSE:GLW | **46.4** | ⚪C | 35.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 194.07 | 171.36 | 227.37 | 1.5:1 | near_resist/chop/low_rr |
| 50 | **WWD** | NASDAQ:WWD | **46.4** | ⚪C | 35.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 428.25 | 405.12 | 462.17 | 1.5:1 | bull_trap/near_resist |
| 51 | **SNDK** | NASDAQ:SNDK | **46.1** | ⚪C | 33.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1963.6 | 1677.9 | 2382.63 | 1.5:1 | bear_div |
| 52 | **ASML** | NASDAQ:ASML | **46** | ⚪C | 32.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1778.46 | 1621.07 | 2009.3 | 1.5:1 | bear_div |
| 53 | **SPNT** | NYSE:SPNT | **45.9** | ⚪C | 43.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.29 | 22.27 | 25.01 | 1.7:1 | near_resist/chop/low_rr |
| 54 | **PLXS** | NASDAQ:PLXS | **45.9** | ⚪C | 34.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 288.59 | 269.11 | 317.16 | 1.5:1 | near_resist/low_rr |
| 55 | **ANET** | NYSE:ANET | **45.9** | 🔵B | 17.5 | 76 | GREEN Long (Strong) | Trend Continuation | 162.2 | 148.33 | 182.54 | 1.5:1 | near_resist/chop/low_rr |
| 56 | **HPE** | NYSE:HPE | **45.6** | ⚪C | 29.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 48.92 | 44.37 | 55.59 | 1.5:1 | mom_decay/near_resist/low_rr |
| 57 | **TSM** | NYSE:TSM | **45.3** | ⚪C | 40.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 436.39 | 404.97 | 478.28 | 1.3:1 | near_resist/low_rr |
| 58 | **CORZ** | NASDAQ:CORZ | **45** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 29.25 | 25.91 | 33.68 | 1.3:1 | mom_decay/bear_div/low_rr |
| 59 | **ADAM** | NASDAQ:ADAM | **45** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 9.1 | 8.58 | 9.75 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 60 | **CARR** | NYSE:CARR | **44.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 70.75 | 67.14 | 76.04 | 1.5:1 | bear_div/low_rr |
| 61 | **FAF** | NYSE:FAF | **44.8** | ⚪C | 31.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 69.44 | 66.84 | 73.26 | 1.5:1 | near_resist/chop/low_rr |
| 62 | **BAP** | NYSE:BAP | **44.4** | ⚪C | 32.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 368.77 | 341.67 | 408.52 | 1.5:1 | near_resist/low_rr |
| 63 | **AROC** | NYSE:AROC | **44.4** | ⚪C | 32.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 39.06 | 37.42 | 41.47 | 1.5:1 | near_resist/chop/low_rr |
| 64 | **PACS** | NYSE:PACS | **44.2** | ⚪C | 40.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.81 | 34.01 | 40.73 | 1.4:1 | near_resist/chop/low_rr |
| 65 | **POWI** | NASDAQ:POWI | **44.1** | ⚪C | 40.2 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 80.57 | 71.51 | 92.66 | 1.3:1 | mom_decay/near_resist |
| 66 | **EQIX** | NASDAQ:EQIX | **44.1** | ⚪C | 30.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1115.93 | 1075.76 | 1174.85 | 1.5:1 | near_resist/chop/low_rr |
| 67 | **TT** | NYSE:TT | **43.9** | ⚪C | 35.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 467.22 | 443.98 | 504.7 | 1.6:1 | near_resist/chop/low_rr |
| 68 | **ALAB** | NASDAQ:ALAB | **43.5** | ⚪C | 30.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 397.02 | 339.85 | 480.87 | 1.5:1 | bear_div |
| 69 | **CPRX** | NASDAQ:CPRX | **42.9** | ⚪C | 38.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.93 | 31.34 | 31.46 | -1.3:1 | fake_break/bull_trap/mom_decay/near_resist/bear_div |
| 70 | **POWL** | NASDAQ:POWL | **42.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 292.37 | 251.62 | 346.88 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 71 | **OTC:SBGSY** | OTC:SBGSY | **42.6** | ⚪C | 37.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 62.73 | 58.72 | 68.66 | 1.5:1 | near_resist/chop/low_rr |
| 72 | **SXI** | NYSE:SXI | **42.2** | ⚪C | 28.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 316.09 | 297.12 | 343.91 | 1.5:1 | fake_break/near_resist |
| 73 | **VSH** | NYSE:VSH | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 58.96 | 48.61 | 74.14 | 1.5:1 | mom_decay/bear_div |
| 74 | **OTC:ABBNY** | OTC:ABBNY | **41.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 104.38 | 99.19 | 112.75 | 1.6:1 | near_resist/chop |
| 75 | **SN** | NYSE:SN | **40.7** | ⚪C | 26.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 134.9 | 125.39 | 148.85 | 1.5:1 | bear_div |
| 76 | **FOR** | NYSE:FOR | **40.4** | ⚪C | 25.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 29.38 | 27.97 | 31.45 | 1.5:1 | near_resist/bear_div/low_rr |
| 77 | **DY** | NYSE:DY | **40.4** | ⚪C | 24.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 464.64 | 429.79 | 515.75 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 78 | **HG** | NYSE:HG | **40.3** | ⚪C | 25.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.37 | 31.2 | 34.08 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 79 | **QBTS** | NYSE:QBTS | **40** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.65 | 19.82 | 30.24 | 1.2:1 | mom_decay/chop |
| 80 | **LLY** | NYSE:LLY | **39.3** | ⚪C | 21.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1107.08 | 1050.62 | 1189.89 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 81 | **MTSI** | NASDAQ:MTSI | **38** | ⚪C | 21.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 372.15 | 336.98 | 423.73 | 1.5:1 | mom_decay/chop/low_rr |
| 82 | **TLN** | NASDAQ:TLN | **37.8** | ⚪C | 29.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 405.74 | 368.26 | 455.58 | 1.3:1 | near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. GE (NYSE:GE)

| Field | Value |
|-------|-------|
| Combined Score | **67** |
| Tech Score | 47.4 (Trend Follow (HH/HL Intact)) |
| News Score | 84 → GREEN Long (Strong) |
| Current Price | 356.47 |
| **Entry** | **356.47** |
| **Stop** | **339.89** (ATR × 1.5) |
| **Target** | **380.78** |
| R/R | 1.5:1 |
| RSI | 69.8 |
| ATR% | 3.1% |
| Dist EMA20 | 6.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist |

### 2. MNST (NASDAQ:MNST)

| Field | Value |
|-------|-------|
| Combined Score | **63.3** |
| Tech Score | 51.8 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 93.69 |
| **Entry** | **93.69** |
| **Stop** | **91.02** (ATR × 1.5) |
| **Target** | **97.61** |
| R/R | 1.5:1 |
| RSI | 68.8 |
| ATR% | 1.9% |
| Dist EMA20 | 3.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 3. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **58.5** |
| Tech Score | 35.2 (Trend Follow (HH/HL Intact)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 427.78 |
| **Entry** | **427.78** |
| **Stop** | **380.94** (ATR × 1.5) |
| **Target** | **496.48** |
| R/R | 1.5:1 |
| RSI | 67.6 |
| ATR% | 7.3% |
| Dist EMA20 | 12% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 4. AMKR (NASDAQ:AMKR)

| Field | Value |
|-------|-------|
| Combined Score | **58.4** |
| Tech Score | 36.3 (Trend Continuation) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 86.72 |
| **Entry** | **86.72** |
| **Stop** | **75.27** (ATR × 1.5) |
| **Target** | **103.51** |
| R/R | 1.5:1 |
| RSI | 61.5 |
| ATR% | 8.8% |
| Dist EMA20 | 9.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 5. AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 48.6 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 585.88 |
| **Entry** | **585.88** |
| **Stop** | **522.6** (ATR × 1.5) |
| **Target** | **678.68** |
| R/R | 1.5:1 |
| RSI | 63.4 |
| ATR% | 7.2% |
| Dist EMA20 | 9.7% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 6. ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 39 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 366.39 |
| **Entry** | **366.39** |
| **Stop** | **303.19** (ATR × 1.5) |
| **Target** | **459.09** |
| R/R | 1.5:1 |
| RSI | 54 |
| ATR% | 11.5% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 7. KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **57.1** |
| Tech Score | 38.1 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 244.49 |
| **Entry** | **244.49** |
| **Stop** | **215.15** (ATR × 1.5) |
| **Target** | **287.52** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 8% |
| Dist EMA20 | 7.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | low_rr |

### 8. MTZ (NYSE:MTZ)

| Field | Value |
|-------|-------|
| Combined Score | **56.7** |
| Tech Score | 46.2 (Trend Continuation) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 390.44 |
| **Entry** | **390.44** |
| **Stop** | **362.33** (ATR × 1.5) |
| **Target** | **431.67** |
| R/R | 1.5:1 |
| RSI | 55.2 |
| ATR% | 4.8% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | None |

### 9. FLEX (NASDAQ:FLEX)

| Field | Value |
|-------|-------|
| Combined Score | **56.5** |
| Tech Score | 38.5 (Trend Continuation) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 151.85 |
| **Entry** | **151.85** |
| **Stop** | **136.82** (ATR × 1.5) |
| **Target** | **173.9** |
| R/R | 1.5:1 |
| RSI | 58.2 |
| ATR% | 6.6% |
| Dist EMA20 | 4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 10. GEV (NYSE:GEV)

| Field | Value |
|-------|-------|
| Combined Score | **55.9** |
| Tech Score | 51.2 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1034.98 |
| **Entry** | **1019.46** |
| **Stop** | **931.48** (ATR × 2) |
| **Target** | **1138.48** |
| R/R | 1.4:1 |
| RSI | 53.6 |
| ATR% | 5% |
| Dist EMA20 | 2.9% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 11. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 38.1 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 144.97 |
| **Entry** | **144.97** |
| **Stop** | **139.1** (ATR × 1.5) |
| **Target** | **153.58** |
| R/R | 1.5:1 |
| RSI | 72.3 |
| ATR% | 2.7% |
| Dist EMA20 | 5.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap near_resist |

### 12. JBL (NYSE:JBL)

| Field | Value |
|-------|-------|
| Combined Score | **53.5** |
| Tech Score | 30.2 (Breakout (Squeeze Release)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 372.99 |
| **Entry** | **374.11** |
| **Stop** | **333.38** (ATR × 1.8) |
| **Target** | **428.01** |
| R/R | 1.3:1 |
| RSI | 54.5 |
| ATR% | 5.9% |
| Dist EMA20 | 1.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop bear_div low_rr |

### 13. MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **52.4** |
| Tech Score | 42.6 (Reversal (Bullish RSI Divergence)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 226.03 |
| **Entry** | **226.03** |
| **Stop** | **216.54** (ATR × 1.5) |
| **Target** | **238.69** |
| R/R | 1.3:1 |
| RSI | 69.7 |
| ATR% | 2.8% |
| Dist EMA20 | 5.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist bear_div |

### 14. KEYS (NYSE:KEYS)

| Field | Value |
|-------|-------|
| Combined Score | **49.2** |
| Tech Score | 31 (Trend Continuation) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 352.58 |
| **Entry** | **352.58** |
| **Stop** | **330.9** (ATR × 1.5) |
| **Target** | **384.38** |
| R/R | 1.5:1 |
| RSI | 52.8 |
| ATR% | 4.1% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 15. LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **48.8** |
| Tech Score | 31.7 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 371.33 |
| **Entry** | **371.33** |
| **Stop** | **328.44** (ATR × 1.5) |
| **Target** | **434.23** |
| R/R | 1.5:1 |
| RSI | 58.7 |
| ATR% | 7.7% |
| Dist EMA20 | 6.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | bear_div |

### 16. GNRC (NYSE:GNRC)

| Field | Value |
|-------|-------|
| Combined Score | **46.7** |
| Tech Score | 34.5 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 274.54 |
| **Entry** | **270.42** |
| **Stop** | **242.14** (ATR × 2) |
| **Target** | **306.94** |
| R/R | 1.3:1 |
| RSI | 53.6 |
| ATR% | 5.9% |
| Dist EMA20 | 2.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/24 11:16:40*