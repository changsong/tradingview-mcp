# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-26　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:OSBC** | NASDAQ:OSBC | **70.5** | ⚪C | 75.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 21.14 | 20.21 | 22.29 | 1.2:1 | near_resist/low_rr |
| 2 | **NASDAQ:MU** | NASDAQ:MU | **64.1** | 🟢A | 37.8 | 91 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 751 | 660.88 | 883.18 | 1.5:1 | mom_decay/low_rr |
| 3 | **NYSE:GLW** | NYSE:GLW | **63.9** | 🟢A | 34.9 | 95 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 194.05 | 171.35 | 227.35 | 1.5:1 | mom_decay/bear_div/low_rr |
| 4 | **NYSE:TRNO** | NYSE:TRNO | **61.8** | ⚪C | 59.3 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.25 | 63.91 | 69.02 | 1.2:1 | mom_decay/near_resist/low_rr |
| 5 | **NYSE:SM** | NYSE:SM | **59.4** | 🟢A | 41.3 | 74 | GREEN Long (Mid) | Trend Continuation | 33.77 | 31.44 | 37.19 | 1.5:1 | chop |
| 6 | **NASDAQ:AMAT** | NASDAQ:AMAT | **58.5** | 🟢A | 35.1 | 81 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 432.16 | 402.34 | 475.89 | 1.5:1 | mom_decay/near_resist/chop |
| 7 | **NASDAQ:ASML** | NASDAQ:ASML | **56.4** | 🟢A | 36.3 | 74 | WARN Long (Cautious) | Trend Continuation | 1632.9 | 1525.13 | 1790.96 | 1.5:1 | fake_break/near_resist/chop |
| 8 | **NYSE:MS** | NYSE:MS | **56.3** | ⚪C | 48.2 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 201.03 | 194.4 | 210.76 | 1.5:1 | near_resist/bear_div |
| 9 | **NYSE:P** | NYSE:P | **55.9** | ⚪C | 53.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 85.89 | 76.56 | 97.84 | 1.3:1 | overheated/mom_decay/near_resist |
| 10 | **NASDAQ:FLEX** | NASDAQ:FLEX | **54.5** | 🔵B | 29.2 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 132.47 | 117.77 | 154.04 | 1.5:1 | mom_decay/bear_div/low_rr |
| 11 | **NYSE:JHG** | NYSE:JHG | **54.4** | ⚪C | 57.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 51.03 | 51.6 | 52.02 | -1.7:1 | mom_decay/near_resist/low_rr |
| 12 | **NYSE:TSM** | NYSE:TSM | **54.4** | ⚪C | 43.6 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 405.73 | 376.85 | 442.95 | 1.3:1 | mom_decay/near_resist/low_rr |
| 13 | **CBOE:CBOE** | CBOE:CBOE | **53.3** | 🔵B | 29.9 | 76 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 357.35 | 341.27 | 380.94 | 1.5:1 | mom_decay/near_resist/low_rr |
| 14 | **NASDAQ:NVDA** | NASDAQ:NVDA | **52.4** | 🔵B | 22.3 | 85 | GREEN Long (Strong) | Trend Continuation | 215.33 | 203.06 | 233.33 | 1.5:1 | mom_decay/near_resist/low_rr |
| 15 | **NYSE:IRM** | NYSE:IRM | **51.4** | ⚪C | 51 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 124.56 | 119.38 | 133.54 | 1.7:1 | mom_decay |
| 16 | **NYSE:RIO** | NYSE:RIO | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 104.23 | 99.38 | 111.34 | 1.5:1 | mom_decay/chop |
| 17 | **NASDAQ:INCY** | NASDAQ:INCY | **49.9** | 🟢A | 30.9 | 66 | WARN Long (Cautious) | Breakout (Squeeze Release) | 97.45 | 92.44 | 103.72 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 18 | **NASDAQ:WDC** | NASDAQ:WDC | **49.9** | 🔵B | 25.5 | 74 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 484.28 | 438.52 | 551.4 | 1.5:1 | mom_decay/bear_div/low_rr |
| 19 | **NASDAQ:RKLB** | NASDAQ:RKLB | **49.6** | 🟢A | 32.6 | 75 | GREEN Long (Strong) | Overextended Chase (High Risk) | 135.76 | 117.23 | 160.47 | 1.3:1 | overheated/near_resist/low_rr |
| 20 | **NASDAQ:IREN** | NASDAQ:IREN | **49.6** | 🔵B | 26.4 | 72 | GREEN Long (Mid) | Trend Continuation | 56.83 | 48.05 | 69.71 | 1.5:1 | mom_decay/near_resist/low_rr |
| 21 | **NYSE:COHR** | NYSE:COHR | **49.3** | 🟢A | 31.9 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 377.57 | 334.53 | 440.7 | 1.5:1 | mom_decay/low_rr |
| 22 | **NASDAQ:CORZ** | NASDAQ:CORZ | **46.4** | ⚪C | 34.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 25.26 | 22.68 | 29.04 | 1.5:1 | fake_break/near_resist/bear_div |
| 23 | **NASDAQ:RMBS** | NASDAQ:RMBS | **46.4** | ⚪C | 34.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 142.98 | 129.47 | 162.8 | 1.5:1 | low_rr |
| 24 | **NASDAQ:INTC** | NASDAQ:INTC | **46.2** | ⚪C | 37.6 | 59 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 119.84 | 104.56 | 140.21 | 1.3:1 | overheated/mom_decay/low_rr |
| 25 | **NYSE:SPNT** | NYSE:SPNT | **46.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 23.39 | 22.02 | 25.13 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **NASDAQ:VSAT** | NASDAQ:VSAT | **46** | ⚪C | 35 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 74.56 | 67.85 | 84.4 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 27 | **NYSE:NVT** | NYSE:NVT | **46** | 🔵B | 27.7 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 164.66 | 154.04 | 180.24 | 1.5:1 | mom_decay/bear_div/low_rr |
| 28 | **NASDAQ:LRCX** | NASDAQ:LRCX | **46** | 🔵B | 21.6 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 305.35 | 282.45 | 338.94 | 1.5:1 | fake_break/near_resist/chop/bear_div |
| 29 | **NASDAQ:MPWR** | NASDAQ:MPWR | **45.6** | 🔵B | 29.4 | 70 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1565.96 | 1440.37 | 1739.25 | 1.4:1 | mom_decay/near_resist/bear_div/low_rr |
| 30 | **NASDAQ:ERIC** | NASDAQ:ERIC | **44.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.5 | 12.95 | 14.3 | 1.5:1 | bull_trap/near_resist |
| 31 | **NASDAQ:TLN** | NASDAQ:TLN | **44.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 366.86 | 332.23 | 412.67 | 1.3:1 | mom_decay/near_resist/chop |
| 32 | **NYSE:WT** | NYSE:WT | **44.2** | ⚪C | 40.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 18.79 | 17.63 | 20.53 | 1.5:1 | mom_decay/bear_div |
| 33 | **NASDAQ:AVGO** | NASDAQ:AVGO | **43.9** | ⚪C | 26.2 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 415.38 | 384.32 | 455.55 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 34 | **NYSE:PACS** | NYSE:PACS | **43.4** | ⚪C | 39 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.18 | 32.77 | 42.73 | 1.3:1 | chop |
| 35 | **NYSE:GNRC** | NYSE:GNRC | **43.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 270.14 | 252.31 | 296.29 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 36 | **NASDAQ:BGC** | NASDAQ:BGC | **43.2** | ⚪C | 30.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 11.22 | 10.59 | 12.03 | 1.3:1 | mom_decay/near_resist/chop/bear_div |
| 37 | **OTC:ABBNY** | OTC:ABBNY | **43** | ⚪C | 30 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 106.4 | 101.77 | 113.19 | 1.5:1 | mom_decay/near_resist/low_rr |
| 38 | **NYSE:DKS** | NYSE:DKS | **43** | 🔵B | 21 | 76 | GREEN Long (Strong) | Pullback Buy (Near Support) | 227.77 | 214.13 | 248.35 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 39 | **NASDAQ:NWBI** | NASDAQ:NWBI | **42.5** | ⚪C | 29.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 13.97 | 13.61 | 14.49 | 1.4:1 | mom_decay/near_resist/low_rr |
| 40 | **NYSE:FAF** | NYSE:FAF | **41.2** | ⚪C | 29.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 67.18 | 64.65 | 71.75 | 1.8:1 | mom_decay/near_resist/chop/low_rr |
| 41 | **NASDAQ:CRDO** | NASDAQ:CRDO | **41.1** | ⚪C | 33.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 218.41 | 190.56 | 255.54 | 1.3:1 | overheated/mom_decay/near_resist |
| 42 | **NYSE:NOK** | NYSE:NOK | **40.4** | ⚪C | 28 | 59 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 15.47 | 14.01 | 17.42 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/bear_div |
| 43 | **NYSE:FN** | NYSE:FN | **40.3** | ⚪C | 25.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 705.97 | 607.57 | 837.59 | 1.3:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 44 | **NYSE:MOD** | NYSE:MOD | **39.3** | ⚪C | 24.5 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 260.52 | 233.56 | 300.07 | 1.5:1 | mom_decay/low_rr |
| 45 | **NASDAQ:PRDO** | NASDAQ:PRDO | **35.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 33.47 | 31.74 | 36.22 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 46 | **NASDAQ:MTSI** | NASDAQ:MTSI | **35.3** | 🔵B | 16.1 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 385.98 | 351.82 | 431.53 | 1.3:1 | overheated/fake_break/bull_trap/near_resist/low_rr |
| 47 | **NYSE:HG** | NYSE:HG | **34.1** | ⚪C | 21.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 31.08 | 29.72 | 33.38 | 1.7:1 | near_resist/chop/low_rr |
| 48 | **NASDAQ:SEDG** | NASDAQ:SEDG | **33.4** | ⚪C | 23.7 | 48 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 61.95 | 52.94 | 73.97 | 1.3:1 | overheated/fake_break/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **64.1** |
| Tech Score | 37.8 (Trend Follow (HH/HL Intact)) |
| News Score | 91 → WARN Long (Cautious) |
| Current Price | 751 |
| **Entry** | **751** |
| **Stop** | **660.88** (ATR × 1.5) |
| **Target** | **883.18** |
| R/R | 1.5:1 |
| RSI | 65.1 |
| ATR% | 8% |
| Dist EMA20 | 11.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 2. NYSE:GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **63.9** |
| Tech Score | 34.9 (Trend Follow (HH/HL Intact)) |
| News Score | 95 → GREEN Long (Strong) |
| Current Price | 194.05 |
| **Entry** | **194.05** |
| **Stop** | **171.35** (ATR × 1.5) |
| **Target** | **227.35** |
| R/R | 1.5:1 |
| RSI | 58.7 |
| ATR% | 7.8% |
| Dist EMA20 | 6.5% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay bear_div low_rr |

### 3. NYSE:SM (NYSE:SM)

| Field | Value |
|-------|-------|
| Combined Score | **59.4** |
| Tech Score | 41.3 (Trend Continuation) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 33.77 |
| **Entry** | **33.77** |
| **Stop** | **31.44** (ATR × 1.5) |
| **Target** | **37.19** |
| R/R | 1.5:1 |
| RSI | 62.7 |
| ATR% | 4.6% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 4. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **58.5** |
| Tech Score | 35.1 (Trend Follow (HH/HL Intact)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 432.16 |
| **Entry** | **432.16** |
| **Stop** | **402.34** (ATR × 1.5) |
| **Target** | **475.89** |
| R/R | 1.5:1 |
| RSI | 57.9 |
| ATR% | 4.6% |
| Dist EMA20 | 3.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist chop |

### 5. NASDAQ:ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **56.4** |
| Tech Score | 36.3 (Trend Continuation) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 1632.9 |
| **Entry** | **1632.9** |
| **Stop** | **1525.13** (ATR × 1.5) |
| **Target** | **1790.96** |
| R/R | 1.5:1 |
| RSI | 62.1 |
| ATR% | 4.4% |
| Dist EMA20 | 7.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist chop |

### 6. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **49.9** |
| Tech Score | 30.9 (Breakout (Squeeze Release)) |
| News Score | 66 → WARN Long (Cautious) |
| Current Price | 97.16 |
| **Entry** | **97.45** |
| **Stop** | **92.44** (ATR × 1.8) |
| **Target** | **103.72** |
| R/R | 1.3:1 |
| RSI | 50.7 |
| ATR% | 2.7% |
| Dist EMA20 | 0.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop bear_div low_rr |

### 7. NASDAQ:RKLB (NASDAQ:RKLB)

| Field | Value |
|-------|-------|
| Combined Score | **49.6** |
| Tech Score | 32.6 (Overextended Chase (High Risk)) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 135.76 |
| **Entry** | **135.76** |
| **Stop** | **117.23** (ATR × 1.5) |
| **Target** | **160.47** |
| R/R | 1.3:1 |
| RSI | 68.7 |
| ATR% | 9.1% |
| Dist EMA20 | 22.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated near_resist low_rr |

### 8. NYSE:COHR (NYSE:COHR)

| Field | Value |
|-------|-------|
| Combined Score | **49.3** |
| Tech Score | 31.9 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 377.57 |
| **Entry** | **377.57** |
| **Stop** | **334.53** (ATR × 1.5) |
| **Target** | **440.7** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 7.6% |
| Dist EMA20 | 6.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/26 16:37:35*