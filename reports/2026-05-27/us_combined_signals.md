# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-27　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:TRNO** | NYSE:TRNO | **69.9** | ⚪C | 72.9 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.89 | 64.65 | 69.52 | 1.2:1 | near_resist/low_rr |
| 2 | **NASDAQ:AMAT** | NASDAQ:AMAT | **67.9** | 🟡C+ | 38.8 | 99 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 454.89 | 424.87 | 498.92 | 1.5:1 | fake_break/near_resist/chop |
| 3 | **NYSE:ENS** | NYSE:ENS | **65.4** | 🟡C+ | 42.7 | 87 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 243.34 | 226.91 | 267.43 | 1.5:1 | mom_decay/near_resist/bear_div |
| 4 | **NASDAQ:EQIX** | NASDAQ:EQIX | **62.8** | 🟢A | 47.7 | 73 | WARN Long (Cautious) | Breakout (Squeeze Release) | 1080.86 | 1042.71 | 1126.12 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 5 | **NASDAQ:ADI** | NASDAQ:ADI | **61.4** | 🟢A | 37.4 | 85 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 419.94 | 396.63 | 454.12 | 1.5:1 | mom_decay/near_resist/low_rr |
| 6 | **NASDAQ:OSBC** | NASDAQ:OSBC | **59** | ⚪C | 56.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.55 | 20.6 | 22.73 | 1.2:1 | near_resist/chop/low_rr |
| 7 | **NASDAQ:AVGO** | NASDAQ:AVGO | **59** | 🟢A | 40 | 75 | GREEN Long (Strong) | Breakout (Squeeze Release) | 423.28 | 391.63 | 464.21 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 8 | **NYSE:LTC** | NYSE:LTC | **57.9** | ⚪C | 54.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 38.88 | 37.57 | 40.41 | 1.2:1 | near_resist/chop/low_rr |
| 9 | **NYSE:COHR** | NYSE:COHR | **57.9** | 🟢A | 36.9 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 381.35 | 338.45 | 444.27 | 1.5:1 | mom_decay/low_rr |
| 10 | **NYSE:SM** | NYSE:SM | **57.7** | 🟢A | 31.8 | 84 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 31.79 | 29.36 | 35.36 | 1.5:1 | chop/low_rr |
| 11 | **NASDAQ:APLD** | NASDAQ:APLD | **56.2** | 🔵B | 29.4 | 84 | GREEN Long (Strong) | Trend Continuation | 45.14 | 38.44 | 54.97 | 1.5:1 | bear_div/low_rr |
| 12 | **NASDAQ:ASML** | NASDAQ:ASML | **55.9** | 🟢A | 30.2 | 82 | GREEN Long (Strong) | Trend Continuation | 1632.03 | 1526.76 | 1786.42 | 1.5:1 | fake_break/near_resist/chop |
| 13 | **NYSE:GLW** | NYSE:GLW | **55.4** | 🟢A | 34 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 196.17 | 173.81 | 228.97 | 1.5:1 | mom_decay/bear_div/low_rr |
| 14 | **CBOE:CBOE** | CBOE:CBOE | **55.2** | 🟢A | 39 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 354.49 | 338.54 | 377.89 | 1.5:1 | mom_decay/low_rr |
| 15 | **NASDAQ:IREN** | NASDAQ:IREN | **54.3** | 🟢A | 33.2 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 59.78 | 51.26 | 71.14 | 1.3:1 | overheated/mom_decay |
| 16 | **NYSE:P** | NYSE:P | **53.6** | 🟢A | 47.4 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 87.02 | 77.57 | 99.13 | 1.3:1 | overheated/near_resist/low_rr |
| 17 | **NASDAQ:RKLB** | NASDAQ:RKLB | **53.5** | 🔵B | 27.8 | 92 | GREEN Long (Strong) | Overextended Chase (High Risk) | 143.2 | 124.08 | 168.69 | 1.3:1 | overheated/bull_trap/near_resist |
| 18 | **NYSE:IRM** | NYSE:IRM | **53.3** | ⚪C | 43.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 128.4 | 123.2 | 136.03 | 1.5:1 | mom_decay/low_rr |
| 19 | **NASDAQ:CRDO** | NASDAQ:CRDO | **52.1** | 🟢A | 46.1 | 61 | WARN Long (Cautious) | Overextended Chase (High Risk) | 221.64 | 193.38 | 259.32 | 1.3:1 | overheated |
| 20 | **NYSE:TSM** | NYSE:TSM | **51.7** | 🟢A | 37.9 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 413.56 | 384.86 | 450.46 | 1.3:1 | mom_decay/near_resist/low_rr |
| 21 | **NASDAQ:NVDA** | NASDAQ:NVDA | **51.2** | 🔵B | 17 | 90 | GREEN Long (Strong) | Trend Continuation | 214.86 | 202.29 | 233.29 | 1.5:1 | mom_decay/near_resist/low_rr |
| 22 | **NYSE:MS** | NYSE:MS | **51** | ⚪C | 47.3 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 201.76 | 195.1 | 211.53 | 1.5:1 | near_resist/bear_div |
| 23 | **NASDAQ:SEDG** | NASDAQ:SEDG | **50.9** | ⚪C | 48.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 70.75 | 60.56 | 84.33 | 1.3:1 | overheated |
| 24 | **NYSE:RIO** | NYSE:RIO | **50.9** | ⚪C | 43.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 106.94 | 102.13 | 114 | 1.5:1 | mom_decay/chop/low_rr |
| 25 | **NYSE:JHG** | NYSE:JHG | **48.6** | ⚪C | 47.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.06 | 51.63 | 52.05 | -1.7:1 | fake_break/mom_decay/near_resist/low_rr |
| 26 | **NYSE:MOD** | NYSE:MOD | **48.5** | ⚪C | 50.2 | 46 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 295.88 | 263.92 | 338.49 | 1.3:1 | overheated/mom_decay |
| 27 | **NASDAQ:TLN** | NASDAQ:TLN | **47.9** | ⚪C | 46.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 383.17 | 346.21 | 431.79 | 1.3:1 | near_resist/chop/low_rr |
| 28 | **NYSE:SXI** | NYSE:SXI | **47.8** | ⚪C | 46.4 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 269.5 | 255.35 | 288.37 | 1.3:1 | near_resist/low_rr |
| 29 | **NYSE:DKS** | NYSE:DKS | **47.3** | 🟢A | 38.8 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 229.63 | 215.88 | 250.38 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **NASDAQ:VSAT** | NASDAQ:VSAT | **47.2** | ⚪C | 45.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 81.4 | 73.95 | 91.33 | 1.3:1 | overheated/near_resist/bear_div |
| 31 | **OTC:ABBNY** | OTC:ABBNY | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 108.57 | 104.17 | 115.02 | 1.5:1 | fake_break/mom_decay/near_resist |
| 32 | **NASDAQ:VIAV** | NASDAQ:VIAV | **45.7** | ⚪C | 34.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 53.79 | 48.3 | 61.84 | 1.5:1 | mom_decay/near_resist/low_rr |
| 33 | **NYSE:PACS** | NYSE:PACS | **45.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 38.87 | 35.02 | 44.51 | 1.5:1 | near_resist/chop/low_rr |
| 34 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **45.4** | ⚪C | 41.7 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 383.05 | 369.44 | 408.32 | 1.9:1 | mom_decay/bear_div |
| 35 | **NASDAQ:KLAC** | NASDAQ:KLAC | **45.2** | ⚪C | 33.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 2011.39 | 1881.66 | 2201.67 | 1.5:1 | fake_break/near_resist/chop |
| 36 | **NYSE:DELL** | NYSE:DELL | **45** | 🔵B | 19.7 | 83 | WARN Long (Cautious) | Overextended Chase (High Risk) | 305.08 | 277.62 | 341.69 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |
| 37 | **NASDAQ:MU** | NASDAQ:MU | **44.8** | 🟢A | 30 | 67 | GREEN Long (Mid) | Overextended Chase (High Risk) | 895.88 | 796.44 | 1028.47 | 1.3:1 | overheated/bull_trap/near_resist |
| 38 | **NASDAQ:PRDO** | NASDAQ:PRDO | **43.7** | ⚪C | 31.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 33.99 | 31.94 | 36.6 | 1.3:1 | mom_decay/near_resist/chop |
| 39 | **NYSE:SPNT** | NYSE:SPNT | **43.1** | ⚪C | 30.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 23.19 | 21.83 | 24.91 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 40 | **NASDAQ:ADEA** | NASDAQ:ADEA | **42.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 28.25 | 25.37 | 32.48 | 1.5:1 | mom_decay |
| 41 | **NYSE:NVT** | NYSE:NVT | **42.8** | ⚪C | 23.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 169.29 | 158.88 | 184.56 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 42 | **NYSE:WT** | NYSE:WT | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.95 | 17.85 | 20.63 | 1.5:1 | mom_decay/near_resist/bear_div |
| 43 | **OTC:SMERY** | OTC:SMERY | **41.4** | ⚪C | 27.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 210.53 | 198.53 | 228.13 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 44 | **NASDAQ:NWBI** | NASDAQ:NWBI | **41** | ⚪C | 35 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 14.1 | 13.74 | 14.58 | 1.3:1 | near_resist/low_rr |
| 45 | **NASDAQ:ERIC** | NASDAQ:ERIC | **41** | ⚪C | 26.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.72 | 13.21 | 14.47 | 1.5:1 | bull_trap/near_resist |
| 46 | **NYSE:FAF** | NYSE:FAF | **39.4** | ⚪C | 31 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 67.13 | 64.61 | 71.69 | 1.8:1 | mom_decay/near_resist/chop/low_rr |
| 47 | **NASDAQ:AMD** | NASDAQ:AMD | **38.9** | 🔵B | 18.8 | 69 | GREEN Long (Mid) | Overextended Chase (High Risk) | 503.89 | 454.76 | 569.4 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 48 | **NYSE:HG** | NYSE:HG | **38.2** | ⚪C | 20 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 31.65 | 30.32 | 33.6 | 1.5:1 | near_resist/chop/low_rr |
| 49 | **NYSE:NOK** | NYSE:NOK | **37** | ⚪C | 28.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 16.46 | 14.95 | 18.47 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 50 | **NASDAQ:CORZ** | NASDAQ:CORZ | **34.6** | ⚪C | 23 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 26.37 | 23.76 | 29.85 | 1.3:1 | overheated/bull_trap/near_resist/bear_div |
| 51 | **NYSE:HPE** | NYSE:HPE | **34.2** | ⚪C | 20.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 38.06 | 35.66 | 41.26 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |
| 52 | **NYSE:AROC** | NYSE:AROC | **32.4** | ⚪C | 20.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.88 | 34.52 | 40.36 | 1.5:1 | mom_decay/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **62.8** |
| Tech Score | 47.7 (Breakout (Squeeze Release)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 1077.63 |
| **Entry** | **1080.86** |
| **Stop** | **1042.71** (ATR × 1.8) |
| **Target** | **1126.12** |
| R/R | 1.2:1 |
| RSI | 54.8 |
| ATR% | 1.8% |
| Dist EMA20 | 0.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 2. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **61.4** |
| Tech Score | 37.4 (Trend Follow (HH/HL Intact)) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 419.94 |
| **Entry** | **419.94** |
| **Stop** | **396.63** (ATR × 1.5) |
| **Target** | **454.12** |
| R/R | 1.5:1 |
| RSI | 59.6 |
| ATR% | 3.7% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 3. NASDAQ:AVGO (NASDAQ:AVGO)

| Field | Value |
|-------|-------|
| Combined Score | **59** |
| Tech Score | 40 (Breakout (Squeeze Release)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 422.01 |
| **Entry** | **423.28** |
| **Stop** | **391.63** (ATR × 1.8) |
| **Target** | **464.21** |
| R/R | 1.3:1 |
| RSI | 56.4 |
| ATR% | 4% |
| Dist EMA20 | 1.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 4. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **57.9** |
| Tech Score | 36.9 (Trend Follow (HH/HL Intact)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 381.35 |
| **Entry** | **381.35** |
| **Stop** | **338.45** (ATR × 1.5) |
| **Target** | **444.27** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 7.5% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 5. NYSE:SM (NYSE:SM)

| Field | Value |
|-------|-------|
| Combined Score | **57.7** |
| Tech Score | 31.8 (Trend Follow (HH/HL Intact)) |
| News Score | 84 → GREEN Long (Strong) |
| Current Price | 31.79 |
| **Entry** | **31.79** |
| **Stop** | **29.36** (ATR × 1.5) |
| **Target** | **35.36** |
| R/R | 1.5:1 |
| RSI | 52.7 |
| ATR% | 5.1% |
| Dist EMA20 | 0.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | chop low_rr |

### 6. NASDAQ:ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **55.9** |
| Tech Score | 30.2 (Trend Continuation) |
| News Score | 82 → GREEN Long (Strong) |
| Current Price | 1632.03 |
| **Entry** | **1632.03** |
| **Stop** | **1526.76** (ATR × 1.5) |
| **Target** | **1786.42** |
| R/R | 1.5:1 |
| RSI | 62 |
| ATR% | 4.3% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 7. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 34 (Trend Follow (HH/HL Intact)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 196.17 |
| **Entry** | **196.17** |
| **Stop** | **173.81** (ATR × 1.5) |
| **Target** | **228.97** |
| R/R | 1.5:1 |
| RSI | 59.6 |
| ATR% | 7.6% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay bear_div low_rr |

### 8. CBOE:CBOE (CBOE:CBOE)

| Field | Value |
|-------|-------|
| Combined Score | **55.2** |
| Tech Score | 39 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 354.49 |
| **Entry** | **354.49** |
| **Stop** | **338.54** (ATR × 1.5) |
| **Target** | **377.89** |
| R/R | 1.5:1 |
| RSI | 61.2 |
| ATR% | 3% |
| Dist EMA20 | 2.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 9. NASDAQ:IREN (NASDAQ:IREN)

| Field | Value |
|-------|-------|
| Combined Score | **54.3** |
| Tech Score | 33.2 (Overextended Chase (High Risk)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 59.78 |
| **Entry** | **59.78** |
| **Stop** | **51.26** (ATR × 1.5) |
| **Target** | **71.14** |
| R/R | 1.3:1 |
| RSI | 59.5 |
| ATR% | 9.5% |
| Dist EMA20 | 12.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay |

### 10. NYSE:P (NYSE:P)

| Field | Value |
|-------|-------|
| Combined Score | **53.6** |
| Tech Score | 47.4 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 88.35 |
| **Entry** | **87.02** |
| **Stop** | **77.57** (ATR × 2) |
| **Target** | **99.13** |
| R/R | 1.3:1 |
| RSI | 69.1 |
| ATR% | 6.1% |
| Dist EMA20 | 12.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated near_resist low_rr |

### 11. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 46.1 (Overextended Chase (High Risk)) |
| News Score | 61 → WARN Long (Cautious) |
| Current Price | 221.64 |
| **Entry** | **221.64** |
| **Stop** | **193.38** (ATR × 1.5) |
| **Target** | **259.32** |
| R/R | 1.3:1 |
| RSI | 65.4 |
| ATR% | 8.5% |
| Dist EMA20 | 19.3% |
| Chase OK | **YES** |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

### 12. NYSE:TSM (NYSE:TSM)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 37.9 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 412.32 |
| **Entry** | **413.56** |
| **Stop** | **384.86** (ATR × 1.8) |
| **Target** | **450.46** |
| R/R | 1.3:1 |
| RSI | 58.8 |
| ATR% | 3.7% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist low_rr |

### 13. NYSE:DKS (NYSE:DKS)

| Field | Value |
|-------|-------|
| Combined Score | **47.3** |
| Tech Score | 38.8 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 233.13 |
| **Entry** | **229.63** |
| **Stop** | **215.88** (ATR × 2) |
| **Target** | **250.38** |
| R/R | 1.5:1 |
| RSI | 61.7 |
| ATR% | 3.7% |
| Dist EMA20 | 5.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 14. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **44.8** |
| Tech Score | 30 (Overextended Chase (High Risk)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 895.88 |
| **Entry** | **895.88** |
| **Stop** | **796.44** (ATR × 1.5) |
| **Target** | **1028.47** |
| R/R | 1.3:1 |
| RSI | 74.9 |
| ATR% | 7.4% |
| Dist EMA20 | 29.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated bull_trap near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:AMAT** | NASDAQ:AMAT | 67.9 | 38.8 | 99(hot) | 454.89 | **427.6** | 414.86 | 494.92 |
| **NYSE:ENS** | NYSE:ENS | 65.4 | 42.7 | 87(hot) | 243.34 | **228.74** | 221.44 | 265.24 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/27 23:08:46*