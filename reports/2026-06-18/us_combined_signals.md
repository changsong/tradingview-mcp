# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-18　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **AMAT** | NASDAQ:AMAT | **62.2** | 🟡C+ | 46.6 | 98 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 592.92 | 536.89 | 667.63 | 1.3:1 | overheated |
| 2 | **ASML** | NASDAQ:ASML | **62.1** | 🟢A | 33.9 | 92 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1867.83 | 1724.94 | 2077.4 | 1.5:1 | near_resist/bear_div |
| 3 | **MS** | NYSE:MS | **61.8** | 🟢A | 55 | 72 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 224.96 | 215.85 | 237.11 | 1.3:1 | bull_trap/near_resist |
| 4 | **EQIX** | NASDAQ:EQIX | **59.9** | ⚪C | 54.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 1091.79 | 1043.46 | 1151.11 | 1.2:1 | near_resist/chop/low_rr |
| 5 | **KLAC** | NASDAQ:KLAC | **58.2** | 🟢A | 48.7 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 238.73 | 214.02 | 274.97 | 1.5:1 | OK |
| 6 | **LRCX** | NASDAQ:LRCX | **57.6** | 🟢A | 31.6 | 84 | GREEN Long (Strong) | Trend Continuation | 374.18 | 337.14 | 428.51 | 1.5:1 | bear_div |
| 7 | **CINF** | NASDAQ:CINF | **57.4** | ⚪C | 50 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 171.47 | 166.58 | 178.64 | 1.5:1 | near_resist/low_rr |
| 8 | **AEHR** | NASDAQ:AEHR | **57.4** | 🟢A | 38 | 74 | GREEN Long (Mid) | Breakout (Squeeze Release) | 112.96 | 86.27 | 149.22 | 1.4:1 | low_rr |
| 9 | **DKS** | NYSE:DKS | **57.1** | ⚪C | 51.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 225.5 | 208.64 | 247.31 | 1.3:1 | near_resist/chop |
| 10 | **INTC** | NASDAQ:INTC | **56.4** | 🔵B | 27 | 88 | GREEN Long (Strong) | Trend Continuation | 121.1 | 105.66 | 143.75 | 1.5:1 | mom_decay/low_rr |
| 11 | **DOV** | NYSE:DOV | **56.2** | 🟢A | 47 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 217.48 | 209.31 | 232.27 | 1.8:1 | chop |
| 12 | **SNEX** | NASDAQ:SNEX | **55.8** | ⚪C | 51.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 132.66 | 122.91 | 146.96 | 1.5:1 | OK |
| 13 | **NWBI** | NASDAQ:NWBI | **55.6** | ⚪C | 59.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 14.13 | 13.78 | 14.92 | 2.3:1 | OK |
| 14 | **PLXS** | NASDAQ:PLXS | **55.6** | ⚪C | 51 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 294.03 | 275.51 | 321.2 | 1.5:1 | near_resist |
| 15 | **SXI** | NYSE:SXI | **54.9** | ⚪C | 49.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 295.78 | 278.48 | 321.16 | 1.5:1 | OK |
| 16 | **AMKR** | NASDAQ:AMKR | **54.7** | 🟢A | 42.5 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 86.43 | 75.54 | 100.95 | 1.3:1 | overheated/chop |
| 17 | **C** | NYSE:C | **53.9** | ⚪C | 46.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 143.78 | 137.96 | 152.32 | 1.5:1 | bull_trap/near_resist |
| 18 | **AIR** | NYSE:AIR | **52.9** | ⚪C | 45.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 132.14 | 124.81 | 142.9 | 1.5:1 | near_resist |
| 19 | **CPRX** | NASDAQ:CPRX | **52.8** | ⚪C | 54.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.93 | 31.27 | 31.53 | -1.8:1 | bull_trap/mom_decay/near_resist |
| 20 | **OTC:SBGSY** | OTC:SBGSY | **52.6** | ⚪C | 54.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 64.43 | 60.76 | 69.33 | 1.3:1 | near_resist/chop/low_rr |
| 21 | **BAP** | NYSE:BAP | **51.6** | ⚪C | 43 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 386.94 | 361.98 | 423.54 | 1.5:1 | fake_break/near_resist |
| 22 | **KRYS** | NASDAQ:KRYS | **51.3** | ⚪C | 43.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 341.66 | 322.7 | 369.47 | 1.5:1 | bull_trap/near_resist |
| 23 | **MNST** | NASDAQ:MNST | **51** | ⚪C | 43.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 91.66 | 88.91 | 95.69 | 1.5:1 | mom_decay/near_resist |
| 24 | **NBN** | NASDAQ:NBN | **50.9** | ⚪C | 43.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 125.03 | 113.89 | 139.62 | 1.3:1 | near_resist/chop/low_rr |
| 25 | **GEV** | NYSE:GEV | **50.7** | ⚪C | 47.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1033.13 | 956.56 | 1141.16 | 1.4:1 | near_resist/chop |
| 26 | **ORRF** | NASDAQ:ORRF | **50.4** | ⚪C | 50.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.9 | 35.94 | 41.02 | 1.6:1 | near_resist/chop/low_rr |
| 27 | **VRT** | NYSE:VRT | **50.3** | 🟢A | 35.9 | 72 | GREEN Long (Mid) | Pullback Buy (Near Support) | 312.82 | 278.84 | 356.32 | 1.3:1 | mom_decay/chop |
| 28 | **NBIS** | NASDAQ:NBIS | **50.2** | ⚪C | 50.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 280.91 | 238.77 | 337.09 | 1.3:1 | overheated |
| 29 | **FCX** | NYSE:FCX | **50.2** | 🟢A | 35.4 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 69.06 | 63.88 | 76.66 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **OTC:ABBNY** | OTC:ABBNY | **50.1** | ⚪C | 50.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 104.06 | 99.09 | 112.19 | 1.6:1 | mom_decay/near_resist/chop |
| 31 | **BGC** | NASDAQ:BGC | **50.1** | ⚪C | 41.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.07 | 11.56 | 12.81 | 1.5:1 | bull_trap/near_resist |
| 32 | **NPB** | NYSE:NPB | **49.8** | ⚪C | 49.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 17.69 | 16.85 | 19.07 | 1.6:1 | near_resist/chop/low_rr |
| 33 | **NVT** | NYSE:NVT | **49.8** | ⚪C | 36.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 171.45 | 155.56 | 192.31 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 34 | **OSBC** | NASDAQ:OSBC | **49.7** | ⚪C | 41.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 21.66 | 20.75 | 22.99 | 1.5:1 | near_resist/chop/low_rr |
| 35 | **WDC** | NASDAQ:WDC | **48.3** | 🟢A | 31.2 | 74 | WARN Long (Cautious) | Overextended Chase (High Risk) | 712.13 | 640.56 | 807.56 | 1.3:1 | overheated/mom_decay/bear_div |
| 36 | **DELL** | NYSE:DELL | **48.1** | 🟢A | 32.9 | 71 | GREEN Long (Mid) | Overextended Chase (High Risk) | 419.32 | 362.71 | 494.8 | 1.3:1 | overheated/mom_decay/low_rr |
| 37 | **DOCN** | NYSE:DOCN | **47.7** | 🔵B | 29.1 | 63 | GREEN Long (Mid) | Breakout (Squeeze Release) | 178.34 | 150.93 | 215.15 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 38 | **APH** | NYSE:APH | **47.7** | 🔵B | 21.1 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 161.11 | 151.2 | 175.64 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 39 | **GE** | NYSE:GE | **47.6** | 🔵B | 29 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 357.03 | 340.43 | 381.38 | 1.5:1 | fake_break/bull_trap/near_resist |
| 40 | **RELY** | NASDAQ:RELY | **46.9** | ⚪C | 44.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 20.43 | 19.14 | 22.15 | 1.3:1 | near_resist/low_rr |
| 41 | **ENVA** | NYSE:ENVA | **46.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 197.3 | 187.53 | 211.62 | 1.5:1 | bull_trap/mom_decay/near_resist |
| 42 | **MU** | NASDAQ:MU | **46.4** | ⚪C | 31.6 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1043.19 | 910.18 | 1238.27 | 1.5:1 | mom_decay/bear_div/low_rr |
| 43 | **CRDO** | NASDAQ:CRDO | **46.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 249.33 | 207.82 | 310.22 | 1.5:1 | low_rr |
| 44 | **ADAM** | NASDAQ:ADAM | **45.1** | ⚪C | 41.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 8.89 | 8.56 | 9.5 | 1.8:1 | mom_decay/near_resist/low_rr |
| 45 | **PANW** | NASDAQ:PANW | **44.9** | ⚪C | 31.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 282.13 | 260.55 | 313.78 | 1.5:1 | mom_decay/low_rr |
| 46 | **PWR** | NYSE:PWR | **44.7** | ⚪C | 35.1 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 704.13 | 656.23 | 773.47 | 1.4:1 | mom_decay/chop/low_rr |
| 47 | **TSM** | NYSE:TSM | **44.7** | ⚪C | 30.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 432.15 | 402.98 | 474.93 | 1.5:1 | mom_decay/chop/low_rr |
| 48 | **SN** | NYSE:SN | **43.1** | ⚪C | 30.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 133.56 | 124.95 | 146.19 | 1.5:1 | near_resist/low_rr |
| 49 | **HG** | NYSE:HG | **42.8** | ⚪C | 29.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.9 | 30.8 | 33.51 | 1.5:1 | near_resist/chop/low_rr |
| 50 | **APLD** | NASDAQ:APLD | **42.8** | ⚪C | 29.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 45.57 | 39.28 | 54.79 | 1.5:1 | mom_decay/near_resist/low_rr |
| 51 | **MRVL** | NASDAQ:MRVL | **42.2** | 🔵B | 23.7 | 70 | GREEN Long (Mid) | Overextended Chase (High Risk) | 289.54 | 234.38 | 363.08 | 1.3:1 | overheated/mom_decay/low_rr |
| 52 | **TTMI** | NASDAQ:TTMI | **41.1** | ⚪C | 26.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 202.7 | 179.9 | 236.15 | 1.5:1 | fake_break/near_resist |
| 53 | **SCCO** | NYSE:SCCO | **40.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 188.8 | 171.36 | 212 | 1.3:1 | near_resist/chop/low_rr |
| 54 | **SPNT** | NYSE:SPNT | **40.1** | ⚪C | 33.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.69 | 21.7 | 24.38 | 1.7:1 | near_resist/chop/low_rr |
| 55 | **CRWV** | NASDAQ:CRWV | **39.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 113.48 | 95.85 | 134.57 | 1.2:1 | near_resist/chop |
| 56 | **STX** | NASDAQ:STX | **39.8** | 🔵B | 22.3 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 1066.07 | 968.52 | 1196.13 | 1.3:1 | overheated/bull_trap/near_resist/bear_div |
| 57 | **BELFA** | NASDAQ:BELFA | **39.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 265.66 | 242.95 | 298.97 | 1.5:1 | near_resist/chop/low_rr |
| 58 | **ADEA** | NASDAQ:ADEA | **39** | ⚪C | 23.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.38 | 27.33 | 37.32 | 1.5:1 | bear_div/low_rr |
| 59 | **BE** | NYSE:BE | **38.7** | ⚪C | 22.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 284.99 | 247.8 | 339.54 | 1.5:1 | mom_decay/chop/low_rr |
| 60 | **WWD** | NASDAQ:WWD | **38.5** | 🔵B | 20.2 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 434.83 | 413.96 | 462.66 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 61 | **TLN** | NASDAQ:TLN | **37.6** | ⚪C | 27.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 403.66 | 369.65 | 449.97 | 1.4:1 | near_resist/chop/low_rr |
| 62 | **TT** | NYSE:TT | **37.3** | ⚪C | 28.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 465.42 | 445.1 | 499.92 | 1.7:1 | near_resist/chop/low_rr |
| 63 | **NVMI** | NASDAQ:NVMI | **36.4** | ⚪C | 25.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 554.42 | 494.54 | 634.26 | 1.3:1 | near_resist/chop/low_rr |
| 64 | **JCI** | NYSE:JCI | **36.3** | ⚪C | 27.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 141.47 | 133.28 | 153.96 | 1.5:1 | near_resist/chop/low_rr |
| 65 | **ALAB** | NASDAQ:ALAB | **36** | ⚪C | 25.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 374.68 | 321.29 | 445.87 | 1.3:1 | overheated/mom_decay/bear_div |
| 66 | **BHRB** | NASDAQ:BHRB | **35.7** | ⚪C | 26.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 64.09 | 61.69 | 68.45 | 1.8:1 | near_resist/chop/low_rr |
| 67 | **FAF** | NYSE:FAF | **35.5** | ⚪C | 27.2 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 66.76 | 64.39 | 71.17 | 1.9:1 | near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **62.1** |
| Tech Score | 33.9 (Trend Follow (HH/HL Intact)) |
| News Score | 92 → GREEN Long (Strong) |
| Current Price | 1867.83 |
| **Entry** | **1867.83** |
| **Stop** | **1724.94** (ATR × 1.5) |
| **Target** | **2077.4** |
| R/R | 1.5:1 |
| RSI | 62.7 |
| ATR% | 5.1% |
| Dist EMA20 | 8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist bear_div |

### 2. MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **61.8** |
| Tech Score | 55 (Reversal (Bullish RSI Divergence)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 224.96 |
| **Entry** | **224.96** |
| **Stop** | **215.85** (ATR × 1.5) |
| **Target** | **237.11** |
| R/R | 1.3:1 |
| RSI | 71.7 |
| ATR% | 2.7% |
| Dist EMA20 | 7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap near_resist |

### 3. KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 48.7 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 238.73 |
| **Entry** | **238.73** |
| **Stop** | **214.02** (ATR × 1.5) |
| **Target** | **274.97** |
| R/R | 1.5:1 |
| RSI | 64.1 |
| ATR% | 6.9% |
| Dist EMA20 | 10.3% |
| Chase OK | **YES** |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 4. LRCX (NASDAQ:LRCX)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 31.6 (Trend Continuation) |
| News Score | 84 → GREEN Long (Strong) |
| Current Price | 374.18 |
| **Entry** | **374.18** |
| **Stop** | **337.14** (ATR × 1.5) |
| **Target** | **428.51** |
| R/R | 1.5:1 |
| RSI | 65.6 |
| ATR% | 6.6% |
| Dist EMA20 | 11.5% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | bear_div |

### 5. AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **57.4** |
| Tech Score | 38 (Breakout (Squeeze Release)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 112.62 |
| **Entry** | **112.96** |
| **Stop** | **86.27** (ATR × 1.8) |
| **Target** | **149.22** |
| R/R | 1.4:1 |
| RSI | 57.6 |
| ATR% | 13% |
| Dist EMA20 | 10.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | low_rr |

### 6. DOV (NYSE:DOV)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 47 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 220.79 |
| **Entry** | **217.48** |
| **Stop** | **209.31** (ATR × 2) |
| **Target** | **232.27** |
| R/R | 1.8:1 |
| RSI | 56.1 |
| ATR% | 2.6% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop |

### 7. AMKR (NASDAQ:AMKR)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 42.5 (Overextended Chase (High Risk)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 86.43 |
| **Entry** | **86.43** |
| **Stop** | **75.54** (ATR × 1.5) |
| **Target** | **100.95** |
| R/R | 1.3:1 |
| RSI | 67.2 |
| ATR% | 8.4% |
| Dist EMA20 | 14.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated chop |

### 8. VRT (NYSE:VRT)

| Field | Value |
|-------|-------|
| Combined Score | **50.3** |
| Tech Score | 35.9 (Pullback Buy (Near Support)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 317.58 |
| **Entry** | **312.82** |
| **Stop** | **278.84** (ATR × 2) |
| **Target** | **356.32** |
| R/R | 1.3:1 |
| RSI | 51.4 |
| ATR% | 6.1% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay chop |

### 9. FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **50.2** |
| Tech Score | 35.4 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 69.06 |
| **Entry** | **69.06** |
| **Stop** | **63.88** (ATR × 1.5) |
| **Target** | **76.66** |
| R/R | 1.5:1 |
| RSI | 57.2 |
| ATR% | 5% |
| Dist EMA20 | 4.1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 10. WDC (NASDAQ:WDC)

| Field | Value |
|-------|-------|
| Combined Score | **48.3** |
| Tech Score | 31.2 (Overextended Chase (High Risk)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 712.13 |
| **Entry** | **712.13** |
| **Stop** | **640.56** (ATR × 1.5) |
| **Target** | **807.56** |
| R/R | 1.3:1 |
| RSI | 75.7 |
| ATR% | 6.7% |
| Dist EMA20 | 27.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay bear_div |

### 11. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **48.1** |
| Tech Score | 32.9 (Overextended Chase (High Risk)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 419.32 |
| **Entry** | **419.32** |
| **Stop** | **362.71** (ATR × 1.5) |
| **Target** | **494.8** |
| R/R | 1.3:1 |
| RSI | 67.6 |
| ATR% | 9% |
| Dist EMA20 | 13.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated mom_decay low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **AMAT** | NASDAQ:AMAT | 62.2 | 46.6 | 98(hot) | 592.92 | **557.34** | 518.21 | 667.63 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/18 09:36:52*