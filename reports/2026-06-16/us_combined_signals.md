# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-16　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **C** | NYSE:C | **65.2** | 🟢A | 43.6 | 85 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 141.21 | 135.28 | 149.91 | 1.5:1 | bull_trap/near_resist |
| 2 | **EQIX** | NASDAQ:EQIX | **63.8** | 🟢A | 56 | 63 | GREEN Long (Mid) | Breakout (Squeeze Release) | 1067.57 | 1022.23 | 1122.92 | 1.2:1 | mom_decay/near_resist/chop |
| 3 | **ASML** | NASDAQ:ASML | **62.4** | 🟢A | 49 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1892.66 | 1762.07 | 2084.2 | 1.5:1 | near_resist/bear_div |
| 4 | **HPE** | NYSE:HPE | **60.8** | 🟢A | 34.3 | 88 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 49.02 | 42.55 | 58.51 | 1.5:1 | mom_decay/low_rr |
| 5 | **IRM** | NYSE:IRM | **59.1** | ⚪C | 56.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 126.66 | 119.92 | 135.12 | 1.3:1 | mom_decay/near_resist/chop |
| 6 | **DOV** | NYSE:DOV | **58.5** | 🟢A | 50.9 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 217.36 | 209.64 | 231.7 | 1.9:1 | chop |
| 7 | **TRNO** | NYSE:TRNO | **55.2** | ⚪C | 50.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 66.91 | 61.31 | 74.21 | 1.3:1 | near_resist/chop/low_rr |
| 8 | **JBL** | NYSE:JBL | **54.7** | 🟢A | 36.8 | 69 | GREEN Long (Mid) | Trend Continuation | 385.63 | 359.6 | 423.81 | 1.5:1 | near_resist/chop |
| 9 | **TT** | NYSE:TT | **54.5** | ⚪C | 47.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 473.96 | 448.72 | 505.62 | 1.3:1 | near_resist/chop/low_rr |
| 10 | **KRYS** | NASDAQ:KRYS | **53.2** | ⚪C | 47 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 324.75 | 307.7 | 349.76 | 1.5:1 | near_resist |
| 11 | **FLEX** | NASDAQ:FLEX | **53.2** | 🟢A | 35.7 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 149.22 | 134.67 | 170.56 | 1.5:1 | mom_decay |
| 12 | **PANW** | NASDAQ:PANW | **53.1** | ⚪C | 41.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 284.54 | 261.92 | 317.72 | 1.5:1 | mom_decay/low_rr |
| 13 | **PLXS** | NASDAQ:PLXS | **52.5** | ⚪C | 45.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 295.02 | 276.43 | 322.28 | 1.5:1 | near_resist |
| 14 | **CPRX** | NASDAQ:CPRX | **52.4** | ⚪C | 54 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.9 | 31.24 | 31.5 | -1.8:1 | bull_trap/mom_decay/near_resist |
| 15 | **INCY** | NASDAQ:INCY | **52.4** | 🟢A | 38 | 74 | GREEN Long (Mid) | Pullback Buy (Near Support) | 100.45 | 93.62 | 110.34 | 1.4:1 | near_resist/chop/low_rr |
| 16 | **NPB** | NYSE:NPB | **52.1** | ⚪C | 52.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 17.57 | 16.77 | 18.91 | 1.7:1 | near_resist/chop |
| 17 | **WWD** | NASDAQ:WWD | **51.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 402.5 | 383.78 | 429.95 | 1.5:1 | near_resist/low_rr |
| 18 | **DKS** | NYSE:DKS | **51.1** | ⚪C | 40.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 220.7 | 202.22 | 244.79 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **CINF** | NASDAQ:CINF | **50.7** | ⚪C | 40.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 169.34 | 164.01 | 177.16 | 1.5:1 | near_resist/chop/low_rr |
| 20 | **ADAM** | NASDAQ:ADAM | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 9.28 | 8.95 | 9.77 | 1.5:1 | mom_decay/near_resist/low_rr |
| 21 | **CRDO** | NASDAQ:CRDO | **50.2** | ⚪C | 50.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 259.41 | 218.94 | 313.37 | 1.3:1 | overheated |
| 22 | **GEV** | NYSE:GEV | **49.7** | ⚪C | 43.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 964.38 | 889 | 1069.14 | 1.4:1 | mom_decay/near_resist |
| 23 | **SXI** | NYSE:SXI | **49.7** | ⚪C | 41.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 309.28 | 293.04 | 333.09 | 1.5:1 | bull_trap/near_resist |
| 24 | **KLAC** | NASDAQ:KLAC | **49.6** | ⚪C | 50.7 | 48 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 256.42 | 233.34 | 287.19 | 1.3:1 | overheated/mom_decay |
| 25 | **AAOI** | NASDAQ:AAOI | **49.2** | 🔵B | 27 | 70 | WARN Long (Cautious) | Breakout (Squeeze Release) | 192.12 | 144.66 | 256.68 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **AIR** | NYSE:AIR | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 131.18 | 124.1 | 141.57 | 1.5:1 | near_resist/chop |
| 27 | **FCX** | NYSE:FCX | **48.5** | ⚪C | 33.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 70.13 | 64.98 | 77.69 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **AMD** | NASDAQ:AMD | **48.5** | 🔵B | 23.5 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 547.26 | 493.9 | 618.4 | 1.3:1 | overheated/fake_break/mom_decay/near_resist |
| 29 | **NBN** | NASDAQ:NBN | **48.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 126.52 | 115.7 | 140.65 | 1.3:1 | near_resist/chop/low_rr |
| 30 | **SMP** | NYSE:SMP | **48.1** | ⚪C | 46.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.43 | 36.21 | 41.83 | 1.5:1 | mom_decay/near_resist |
| 31 | **SPNT** | NYSE:SPNT | **47.4** | ⚪C | 45.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.82 | 21.78 | 24.56 | 1.7:1 | near_resist/chop |
| 32 | **WT** | NYSE:WT | **47.1** | ⚪C | 45.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.05 | 16.63 | 20.01 | 1.4:1 | mom_decay/near_resist |
| 33 | **ORRF** | NASDAQ:ORRF | **46.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.09 | 37.27 | 41.76 | 1.5:1 | near_resist/chop/low_rr |
| 34 | **ENVA** | NYSE:ENVA | **46.5** | ⚪C | 35.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 189.16 | 180.08 | 202.48 | 1.5:1 | bull_trap/near_resist |
| 35 | **ENS** | NYSE:ENS | **46.4** | ⚪C | 35.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 232.11 | 213.09 | 256.88 | 1.3:1 | mom_decay/near_resist/low_rr |
| 36 | **ADEA** | NASDAQ:ADEA | **45.8** | ⚪C | 34.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.34 | 28.31 | 38.25 | 1.5:1 | near_resist/bear_div/low_rr |
| 37 | **LITE** | NASDAQ:LITE | **45.5** | 🔵B | 22.1 | 68 | GREEN Long (Mid) | Breakout (Squeeze Release) | 960.11 | 797 | 1179.8 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **BHRB** | NASDAQ:BHRB | **45.2** | ⚪C | 33.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 66.18 | 63.9 | 69.53 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **LRCX** | NASDAQ:LRCX | **44.6** | 🔵B | 25.7 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 388.92 | 353.92 | 435.59 | 1.3:1 | overheated/bull_trap/near_resist |
| 40 | **AROC** | NYSE:AROC | **43.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.75 | 34.19 | 38.39 | 1.7:1 | near_resist/chop |
| 41 | **SNEX** | NASDAQ:SNEX | **43.6** | ⚪C | 39.4 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 135.73 | 126.98 | 147.4 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 42 | **APH** | NYSE:APH | **42.8** | ⚪C | 25 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 158.59 | 148.36 | 173.59 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 43 | **MS** | NYSE:MS | **42.7** | ⚪C | 37.8 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 217.98 | 208.82 | 230.19 | 1.3:1 | fake_break/mom_decay/near_resist/low_rr |
| 44 | **OTC:ABBNY** | OTC:ABBNY | **42.6** | ⚪C | 37.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 102.34 | 97.25 | 110.55 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 45 | **NVMI** | NASDAQ:NVMI | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 605.65 | 547.51 | 683.17 | 1.3:1 | overheated/near_resist/chop |
| 46 | **ARM** | NASDAQ:ARM | **41.9** | 🔵B | 21.1 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 412.55 | 349.43 | 496.71 | 1.3:1 | overheated/fake_break/mom_decay/near_resist/low_rr |
| 47 | **MRVL** | NASDAQ:MRVL | **41.7** | ⚪C | 36.2 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 308.88 | 256.99 | 378.07 | 1.3:1 | overheated/low_rr |
| 48 | **JCI** | NYSE:JCI | **41.7** | ⚪C | 29.2 | 48 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 146.06 | 138.61 | 156.99 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 49 | **BGC** | NASDAQ:BGC | **41.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 11.8 | 11.3 | 12.53 | 1.5:1 | near_resist/bear_div/low_rr |
| 50 | **SN** | NYSE:SN | **41.4** | ⚪C | 22.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 133.09 | 124.51 | 145.68 | 1.5:1 | fake_break/near_resist/low_rr |
| 51 | **MNST** | NASDAQ:MNST | **41.2** | ⚪C | 25.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 93.23 | 90.43 | 97.33 | 1.5:1 | fake_break/bull_trap/near_resist |
| 52 | **RIO** | NYSE:RIO | **40.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 105.89 | 101.44 | 112.41 | 1.5:1 | mom_decay/chop/low_rr |
| 53 | **LLY** | NYSE:LLY | **40.8** | 🔵B | 17 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1129.35 | 1068.37 | 1218.79 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 54 | **FOR** | NYSE:FOR | **39.6** | ⚪C | 24.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 28.5 | 27.17 | 30.44 | 1.5:1 | near_resist/low_rr |
| 55 | **BELFA** | NASDAQ:BELFA | **39.4** | ⚪C | 24 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 267.51 | 245.04 | 300.47 | 1.5:1 | near_resist/chop/low_rr |
| 56 | **KALU** | NASDAQ:KALU | **38.9** | ⚪C | 23.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 183.1 | 169.92 | 202.44 | 1.5:1 | mom_decay/chop/bear_div/low_rr |
| 57 | **NBIS** | NASDAQ:NBIS | **38.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 260.07 | 220.28 | 313.12 | 1.3:1 | overheated/mom_decay/low_rr |
| 58 | **OSBC** | NASDAQ:OSBC | **38.5** | ⚪C | 22.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 22.01 | 21.18 | 23.22 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 59 | **APLD** | NASDAQ:APLD | **38.1** | ⚪C | 21.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 46.47 | 39.92 | 56.08 | 1.5:1 | fake_break/mom_decay/near_resist/low_rr |
| 60 | **PFS** | NYSE:PFS | **37.6** | ⚪C | 29.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 22.74 | 22.07 | 24.11 | 2:1 | near_resist/chop/low_rr |
| 61 | **TLN** | NASDAQ:TLN | **37.2** | ⚪C | 28.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 380.42 | 349.91 | 422.51 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 62 | **TTMI** | NASDAQ:TTMI | **37** | ⚪C | 28.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 206.66 | 182.48 | 238.9 | 1.3:1 | overheated/fake_break/near_resist |
| 63 | **ALAB** | NASDAQ:ALAB | **36.2** | ⚪C | 25.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 389.2 | 337.83 | 457.7 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 64 | **PACS** | NYSE:PACS | **36.1** | ⚪C | 26.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.71 | 32.84 | 39.66 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 65 | **NBIX** | NASDAQ:NBIX | **35** | ⚪C | 22.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 157.12 | 149.3 | 169.72 | 1.6:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **65.2** |
| Tech Score | 43.6 (Trend Follow (HH/HL Intact)) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 141.21 |
| **Entry** | **141.21** |
| **Stop** | **135.28** (ATR × 1.5) |
| **Target** | **149.91** |
| R/R | 1.5:1 |
| RSI | 71 |
| ATR% | 2.8% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | bull_trap near_resist |

### 2. EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **63.8** |
| Tech Score | 56 (Breakout (Squeeze Release)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1064.38 |
| **Entry** | **1067.57** |
| **Stop** | **1022.23** (ATR × 1.8) |
| **Target** | **1122.92** |
| R/R | 1.2:1 |
| RSI | 50.2 |
| ATR% | 2.2% |
| Dist EMA20 | 0% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop |

### 3. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **62.4** |
| Tech Score | 49 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 1892.66 |
| **Entry** | **1892.66** |
| **Stop** | **1762.07** (ATR × 1.5) |
| **Target** | **2084.2** |
| R/R | 1.5:1 |
| RSI | 67.2 |
| ATR% | 4.6% |
| Dist EMA20 | 11% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist bear_div |

### 4. HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **60.8** |
| Tech Score | 34.3 (Trend Follow (HH/HL Intact)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 49.02 |
| **Entry** | **49.02** |
| **Stop** | **42.55** (ATR × 1.5) |
| **Target** | **58.51** |
| R/R | 1.5:1 |
| RSI | 64.7 |
| ATR% | 8.8% |
| Dist EMA20 | 10.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 5. DOV (NYSE:DOV)

| Field | Value |
|-------|-------|
| Combined Score | **58.5** |
| Tech Score | 50.9 (Pullback Buy (Near Support)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 220.67 |
| **Entry** | **217.36** |
| **Stop** | **209.64** (ATR × 2) |
| **Target** | **231.7** |
| R/R | 1.9:1 |
| RSI | 56.7 |
| ATR% | 2.5% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 6. JBL (NYSE:JBL)

| Field | Value |
|-------|-------|
| Combined Score | **54.7** |
| Tech Score | 36.8 (Trend Continuation) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 385.63 |
| **Entry** | **385.63** |
| **Stop** | **359.6** (ATR × 1.5) |
| **Target** | **423.81** |
| R/R | 1.5:1 |
| RSI | 61.3 |
| ATR% | 4.5% |
| Dist EMA20 | 5.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop |

### 7. FLEX (NASDAQ:FLEX)

| Field | Value |
|-------|-------|
| Combined Score | **53.2** |
| Tech Score | 35.7 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 149.22 |
| **Entry** | **149.22** |
| **Stop** | **134.67** (ATR × 1.5) |
| **Target** | **170.56** |
| R/R | 1.5:1 |
| RSI | 58.8 |
| ATR% | 6.5% |
| Dist EMA20 | 3.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay |

### 8. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **52.4** |
| Tech Score | 38 (Pullback Buy (Near Support)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 101.98 |
| **Entry** | **100.45** |
| **Stop** | **93.62** (ATR × 2) |
| **Target** | **110.34** |
| R/R | 1.4:1 |
| RSI | 53.8 |
| ATR% | 4.1% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/16 12:24:12*