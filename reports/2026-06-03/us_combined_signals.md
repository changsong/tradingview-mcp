# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-03　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:GNRC** | NYSE:GNRC | **71.1** | 🟡C+ | 47.5 | 94 | WARN No Trade (Overheated) | Trend Continuation | 284.58 | 264.09 | 314.63 | 1.5:1 | near_resist/bear_div |
| 2 | **NYSE:DY** | NYSE:DY | **66.1** | 🟡C+ | 41.1 | 91 | WARN No Trade (Overheated) | Trend Continuation | 485.97 | 440.05 | 553.33 | 1.5:1 | low_rr |
| 3 | **NYSE:HPE** | NYSE:HPE | **62.1** | 🟡C+ | 47.8 | 96 | WARN No Trade (Overheated) | Overextended Chase (High Risk) | 56.15 | 51.01 | 63 | 1.3:1 | overheated/mom_decay |
| 4 | **NASDAQ:CRDO** | NASDAQ:CRDO | **61.1** | 🟢A | 45.8 | 84 | GREEN Long (Strong) | Overextended Chase (High Risk) | 229 | 199.8 | 267.93 | 1.3:1 | overheated |
| 5 | **NASDAQ:NVDA** | NASDAQ:NVDA | **60.2** | 🟢A | 43.4 | 73 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 222.82 | 210.45 | 240.96 | 1.5:1 | mom_decay/low_rr |
| 6 | **NYSE:WT** | NYSE:WT | **59.9** | ⚪C | 56.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 19.01 | 17.62 | 20.8 | 1.3:1 | mom_decay |
| 7 | **NYSE:FCX** | NYSE:FCX | **59.4** | 🟡C+ | 38.6 | 78 | WARN No Trade (Overheated) | Trend Continuation | 71.72 | 67.31 | 78.19 | 1.5:1 | near_resist/chop |
| 8 | **NASDAQ:HON** | NASDAQ:HON | **57.8** | 🟢A | 45.7 | 76 | GREEN Long (Strong) | Pullback Buy (Near Support) | 231.7 | 224.41 | 246.05 | 2:1 | near_resist/low_rr |
| 9 | **NYSE:JHG** | NYSE:JHG | **57.3** | ⚪C | 52.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 51.91 | 51.56 | 52.01 | 0.3:1 | mom_decay/near_resist/low_rr |
| 10 | **NASDAQ:ERIC** | NASDAQ:ERIC | **56.7** | ⚪C | 52.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 13.74 | 13.16 | 14.59 | 1.5:1 | fake_break/near_resist |
| 11 | **NASDAQ:OSBC** | NASDAQ:OSBC | **56.1** | ⚪C | 51.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.42 | 20.51 | 22.53 | 1.2:1 | near_resist/chop/bear_div/low_rr |
| 12 | **NYSE:GLW** | NYSE:GLW | **55.4** | 🟢A | 42 | 63 | GREEN Long (Mid) | Trend Continuation | 200.4 | 181.46 | 228.18 | 1.5:1 | mom_decay/low_rr |
| 13 | **NASDAQ:CRWV** | NASDAQ:CRWV | **55.4** | 🟢A | 30 | 81 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 119.27 | 107.1 | 137.11 | 1.5:1 | near_resist/chop/low_rr |
| 14 | **NASDAQ:CORZ** | NASDAQ:CORZ | **55.3** | 🟢A | 50.2 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 29.05 | 26.65 | 32.25 | 1.3:1 | overheated |
| 15 | **NASDAQ:MTSI** | NASDAQ:MTSI | **54.6** | 🟢A | 39.3 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 382.35 | 346.79 | 434.5 | 1.5:1 | mom_decay/bear_div/low_rr |
| 16 | **NYSE:MOD** | NYSE:MOD | **53.3** | ⚪C | 41.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 307.81 | 262.15 | 369.04 | 1.3:1 | overheated/bear_div/low_rr |
| 17 | **NASDAQ:TTMI** | NASDAQ:TTMI | **53.1** | 🟢A | 33.5 | 70 | WARN Long (Cautious) | Trend Continuation | 179.62 | 159.41 | 209.26 | 1.5:1 | mom_decay/near_resist/low_rr |
| 18 | **NASDAQ:IREN** | NASDAQ:IREN | **53** | 🔵B | 28.4 | 90 | WARN Long (Cautious) | Overextended Chase (High Risk) | 66.6 | 58.91 | 76.86 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 19 | **NYSE:NOK** | NYSE:NOK | **52.4** | ⚪C | 48 | 59 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 16.85 | 15.31 | 18.91 | 1.3:1 | overheated/fake_break/near_resist |
| 20 | **NYSE:TSM** | NYSE:TSM | **52.3** | ⚪C | 42.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 446.69 | 423.91 | 480.1 | 1.5:1 | fake_break/near_resist |
| 21 | **NYSE:SXI** | NYSE:SXI | **52.2** | ⚪C | 53.7 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 288.66 | 274.37 | 307.71 | 1.3:1 | near_resist/chop |
| 22 | **NASDAQ:ASML** | NASDAQ:ASML | **52.2** | 🟢A | 36.7 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1705.37 | 1610.72 | 1844.19 | 1.5:1 | fake_break/near_resist/chop |
| 23 | **NYSE:QBTS** | NYSE:QBTS | **50.5** | 🔵B | 26.9 | 86 | GREEN Long (Strong) | Overextended Chase (High Risk) | 29.91 | 25.65 | 35.59 | 1.3:1 | overheated/bear_div/low_rr |
| 24 | **NASDAQ:LRCX** | NASDAQ:LRCX | **50.4** | 🔵B | 27 | 73 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 334.41 | 311.84 | 367.52 | 1.5:1 | fake_break/bull_trap/near_resist |
| 25 | **NYSE:COHR** | NYSE:COHR | **50.1** | 🟢A | 36.8 | 70 | GREEN Long (Mid) | Overextended Chase (High Risk) | 426.89 | 382.71 | 485.8 | 1.3:1 | overheated/near_resist/chop |
| 26 | **NYSE:CLS** | NYSE:CLS | **49.9** | 🟢A | 34.5 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 472.4 | 434.84 | 522.47 | 1.3:1 | overheated/bull_trap/near_resist/chop |
| 27 | **NASDAQ:AAPL** | NASDAQ:AAPL | **49.2** | ⚪C | 36.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 315.2 | 306.69 | 327.68 | 1.5:1 | fake_break/bull_trap/near_resist |
| 28 | **NASDAQ:TLN** | NASDAQ:TLN | **49.1** | 🔵B | 24.5 | 86 | GREEN Long (Strong) | Pullback Buy (Near Support) | 379.73 | 344.65 | 426.37 | 1.3:1 | near_resist/chop/low_rr |
| 29 | **NYSE:RIO** | NYSE:RIO | **48.5** | 🔵B | 19.9 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 111.67 | 107.15 | 118.3 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 30 | **NASDAQ:RMBS** | NASDAQ:RMBS | **47.6** | ⚪C | 49.4 | 45 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 166.78 | 151.27 | 187.46 | 1.3:1 | overheated/near_resist |
| 31 | **NYSE:C** | NYSE:C | **47.3** | 🟢A | 38.2 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 129.29 | 125.22 | 137.3 | 2:1 | near_resist/chop/low_rr |
| 32 | **NYSE:FN** | NYSE:FN | **47.3** | ⚪C | 31.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 703.21 | 606.46 | 832.57 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 33 | **NYSE:DKS** | NYSE:DKS | **47.1** | 🔵B | 23.5 | 70 | GREEN Long (Mid) | Breakout (Squeeze Release) | 215.38 | 196.57 | 239.97 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 34 | **NASDAQ:NBIS** | NASDAQ:NBIS | **44.6** | 🔵B | 26.3 | 72 | GREEN Long (Mid) | Overextended Chase (High Risk) | 260.58 | 225.4 | 307.48 | 1.3:1 | overheated |
| 35 | **NYSE:MS** | NYSE:MS | **44.3** | ⚪C | 37.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 214.98 | 207.89 | 224.44 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/bear_div |
| 36 | **NASDAQ:CRML** | NASDAQ:CRML | **44.2** | ⚪C | 30 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 12.01 | 10.53 | 14.18 | 1.5:1 | low_rr |
| 37 | **NYSE:KEYS** | NYSE:KEYS | **44.1** | 🔵B | 17.1 | 72 | GREEN Long (Mid) | Trend Continuation | 346.57 | 325.26 | 377.83 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **NYSE:DELL** | NYSE:DELL | **43.7** | ⚪C | 34.9 | 57 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 435.31 | 394.17 | 490.16 | 1.3:1 | overheated/mom_decay |
| 39 | **NYSE:IRM** | NYSE:IRM | **42.6** | ⚪C | 26.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 128.46 | 123.84 | 135.24 | 1.5:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 40 | **NASDAQ:NVMI** | NASDAQ:NVMI | **42.3** | ⚪C | 28.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 524.7 | 466.63 | 601.6 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 41 | **OTC:SBGSY** | OTC:SBGSY | **42.3** | ⚪C | 28.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 66.81 | 64.1 | 70.78 | 1.5:1 | near_resist/chop/low_rr |
| 42 | **NYSE:JCI** | NYSE:JCI | **42.3** | 🔵B | 25.8 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 139.86 | 133.75 | 150.23 | 1.7:1 | mom_decay/near_resist/chop/low_rr |
| 43 | **NYSE:BE** | NYSE:BE | **41.8** | 🔵B | 18.6 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 303.76 | 257.06 | 366.45 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 44 | **NASDAQ:ADEA** | NASDAQ:ADEA | **41.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.2 | 27.23 | 34.09 | 1.3:1 | mom_decay/near_resist/low_rr |
| 45 | **OTC:ABBNY** | OTC:ABBNY | **40.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 107.32 | 103.72 | 114.18 | 1.9:1 | mom_decay/near_resist/bear_div |
| 46 | **NASDAQ:VIAV** | NASDAQ:VIAV | **40.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 52.88 | 47.25 | 61.14 | 1.5:1 | mom_decay/near_resist/low_rr |
| 47 | **NYSE:FOR** | NYSE:FOR | **40.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 27.21 | 25.96 | 29.28 | 1.7:1 | near_resist/chop/low_rr |
| 48 | **NYSE:SMP** | NYSE:SMP | **40.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.33 | 35.8 | 42.02 | 1.5:1 | near_resist/low_rr |
| 49 | **NASDAQ:MNST** | NASDAQ:MNST | **40.1** | ⚪C | 28.2 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 86.92 | 84.89 | 91.59 | 2.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 50 | **NASDAQ:APLD** | NASDAQ:APLD | **40.1** | ⚪C | 25.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 47.86 | 41.4 | 57.34 | 1.5:1 | bear_div/low_rr |
| 51 | **NYSE:CARR** | NYSE:CARR | **39.7** | ⚪C | 30.8 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 65.42 | 61.77 | 71.07 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 52 | **NYSE:JBL** | NYSE:JBL | **39.7** | ⚪C | 21.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 373.16 | 352.45 | 403.54 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 53 | **NYSE:P** | NYSE:P | **38.8** | ⚪C | 29.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 81.74 | 71.53 | 94.43 | 1.2:1 | mom_decay/bear_div |
| 54 | **NASDAQ:KLAC** | NASDAQ:KLAC | **38.6** | ⚪C | 22.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 2045.2 | 1919.42 | 2229.68 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 55 | **NYSE:ENS** | NYSE:ENS | **38.2** | ⚪C | 20.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 237.51 | 220.77 | 262.07 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 56 | **NASDAQ:NWBI** | NASDAQ:NWBI | **35.4** | ⚪C | 25.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 13.95 | 13.68 | 14.64 | 2.6:1 | fake_break/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **61.1** |
| Tech Score | 45.8 (Overextended Chase (High Risk)) |
| News Score | 84 → GREEN Long (Strong) |
| Current Price | 229 |
| **Entry** | **229** |
| **Stop** | **199.8** (ATR × 1.5) |
| **Target** | **267.93** |
| R/R | 1.3:1 |
| RSI | 64.7 |
| ATR% | 8.5% |
| Dist EMA20 | 13.3% |
| Chase OK | **YES** |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated |

### 2. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 43.4 (Trend Follow (HH/HL Intact)) |
| News Score | 73 → WARN Long (Cautious) |
| Current Price | 222.82 |
| **Entry** | **222.82** |
| **Stop** | **210.45** (ATR × 1.5) |
| **Target** | **240.96** |
| R/R | 1.5:1 |
| RSI | 58.8 |
| ATR% | 3.7% |
| Dist EMA20 | 3.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 3. NASDAQ:HON (NASDAQ:HON)

| Field | Value |
|-------|-------|
| Combined Score | **57.8** |
| Tech Score | 45.7 (Pullback Buy (Near Support)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 235.23 |
| **Entry** | **231.7** |
| **Stop** | **224.41** (ATR × 2) |
| **Target** | **246.05** |
| R/R | 2:1 |
| RSI | 65.5 |
| ATR% | 2.3% |
| Dist EMA20 | 4.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 4. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 42 (Trend Continuation) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 200.4 |
| **Entry** | **200.4** |
| **Stop** | **181.46** (ATR × 1.5) |
| **Target** | **228.18** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 6.3% |
| Dist EMA20 | 8.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 5. NASDAQ:CRWV (NASDAQ:CRWV)

| Field | Value |
|-------|-------|
| Combined Score | **55.4** |
| Tech Score | 30 (Trend Follow (HH/HL Intact)) |
| News Score | 81 → WARN Long (Cautious) |
| Current Price | 119.27 |
| **Entry** | **119.27** |
| **Stop** | **107.1** (ATR × 1.5) |
| **Target** | **137.11** |
| R/R | 1.5:1 |
| RSI | 57 |
| ATR% | 6.8% |
| Dist EMA20 | 7.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 6. NASDAQ:CORZ (NASDAQ:CORZ)

| Field | Value |
|-------|-------|
| Combined Score | **55.3** |
| Tech Score | 50.2 (Overextended Chase (High Risk)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 29.05 |
| **Entry** | **29.05** |
| **Stop** | **26.65** (ATR × 1.5) |
| **Target** | **32.25** |
| R/R | 1.3:1 |
| RSI | 73.6 |
| ATR% | 5.5% |
| Dist EMA20 | 16.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | overheated |

### 7. NASDAQ:MTSI (NASDAQ:MTSI)

| Field | Value |
|-------|-------|
| Combined Score | **54.6** |
| Tech Score | 39.3 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 382.35 |
| **Entry** | **382.35** |
| **Stop** | **346.79** (ATR × 1.5) |
| **Target** | **434.5** |
| R/R | 1.5:1 |
| RSI | 60.5 |
| ATR% | 6.2% |
| Dist EMA20 | 6.1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay bear_div low_rr |

### 8. NASDAQ:TTMI (NASDAQ:TTMI)

| Field | Value |
|-------|-------|
| Combined Score | **53.1** |
| Tech Score | 33.5 (Trend Continuation) |
| News Score | 70 → WARN Long (Cautious) |
| Current Price | 179.62 |
| **Entry** | **179.62** |
| **Stop** | **159.41** (ATR × 1.5) |
| **Target** | **209.26** |
| R/R | 1.5:1 |
| RSI | 60 |
| ATR% | 7.5% |
| Dist EMA20 | 5.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 9. NASDAQ:ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **52.2** |
| Tech Score | 36.7 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1705.37 |
| **Entry** | **1705.37** |
| **Stop** | **1610.72** (ATR × 1.5) |
| **Target** | **1844.19** |
| R/R | 1.5:1 |
| RSI | 66.7 |
| ATR% | 3.7% |
| Dist EMA20 | 8.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 10. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **50.1** |
| Tech Score | 36.8 (Overextended Chase (High Risk)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 426.89 |
| **Entry** | **426.89** |
| **Stop** | **382.71** (ATR × 1.5) |
| **Target** | **485.8** |
| R/R | 1.3:1 |
| RSI | 68.5 |
| ATR% | 6.9% |
| Dist EMA20 | 16.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist chop |

### 11. NYSE:CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **49.9** |
| Tech Score | 34.5 (Overextended Chase (High Risk)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 472.4 |
| **Entry** | **472.4** |
| **Stop** | **434.84** (ATR × 1.5) |
| **Target** | **522.47** |
| R/R | 1.3:1 |
| RSI | 71.7 |
| ATR% | 5.3% |
| Dist EMA20 | 23.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated bull_trap near_resist chop |

### 12. NYSE:C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **47.3** |
| Tech Score | 38.2 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 131.26 |
| **Entry** | **129.29** |
| **Stop** | **125.22** (ATR × 2) |
| **Target** | **137.3** |
| R/R | 2:1 |
| RSI | 63.2 |
| ATR% | 2.3% |
| Dist EMA20 | 4.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:GNRC** | NYSE:GNRC | 71.1 | 47.5 | 94(hot) | 284.58 | **267.51** | 257.26 | 311.9 |
| **NYSE:DY** | NYSE:DY | 66.1 | 41.1 | 91(hot) | 485.97 | **456.81** | 424.74 | 547.2 |
| **NYSE:HPE** | NYSE:HPE | 62.1 | 47.8 | 96(hot) | 56.15 | **52.78** | 49.3 | 63 |
| **NYSE:FCX** | NYSE:FCX | 59.4 | 38.6 | 78(hot) | 71.72 | **67.42** | 65.84 | 77.6 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/3 22:39:35*