# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-10-01　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:CLS** | NYSE:CLS | **60.6** | 🟢A | 49.7 | 77 | GREEN Long (Strong) | Pullback Buy (Near Support) | 356.01 | 320.95 | 401.91 | 1.3:1 | near_resist/low_rr |
| 2 | **NYSE:WT** | NYSE:WT | **57.4** | 🟢A | 52.3 | 65 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 24.29 | 22.98 | 26.04 | 1.3:1 | near_resist/low_rr |
| 3 | **NASDAQ:ARM** | NASDAQ:ARM | **56.8** | 🟢A | 35.7 | 76 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 289.66 | 258.38 | 335.54 | 1.5:1 | near_resist/low_rr |
| 4 | **NYSE:ST** | NYSE:ST | **55.5** | ⚪C | 45.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 41.68 | 39.61 | 44.26 | 1.2:1 | near_resist/chop |
| 5 | **NYSE:ETN** | NYSE:ETN | **54.8** | 🟢A | 30.3 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 429.71 | 407.79 | 461.85 | 1.5:1 | near_resist/chop/low_rr |
| 6 | **NASDAQ:CRWD** | NASDAQ:CRWD | **54.5** | 🟢A | 39.8 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 264.75 | 245.29 | 293.29 | 1.5:1 | fake_break/near_resist |
| 7 | **NASDAQ:INTC** | NASDAQ:INTC | **53.5** | 🟢A | 34.8 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 120.23 | 110.13 | 135.04 | 1.5:1 | low_rr |
| 8 | **NYSE:ANET** | NYSE:ANET | **53.4** | 🟢A | 41.7 | 71 | GREEN Long (Mid) | Pullback Buy (Near Support) | 200.54 | 188.93 | 218.25 | 1.5:1 | near_resist/chop/low_rr |
| 9 | **NYSE:GRMN** | NYSE:GRMN | **52.6** | 🟢A | 35.4 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 286.84 | 275.65 | 303.25 | 1.5:1 | near_resist/chop/low_rr |
| 10 | **NYSE:JOE** | NYSE:JOE | **51.9** | ⚪C | 44.8 | 50 | NEUTRAL No Trade (No relevant news) | Breakout (Squeeze Release) | 65.98 | 62.94 | 69.73 | 1.2:1 | near_resist/chop |
| 11 | **NASDAQ:AEHR** | NASDAQ:AEHR | **51.7** | 🟢A | 33.1 | 67 | GREEN Long (Mid) | Trend Continuation | 99.62 | 87.67 | 117.15 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **NYSE:DT** | NYSE:DT | **51.2** | ⚪C | 43.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 57.74 | 55.14 | 61.55 | 1.5:1 | near_resist/low_rr |
| 13 | **NYSE:SPNT** | NYSE:SPNT | **51.1** | 🟢A | 36.8 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 24.32 | 23.03 | 25.95 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **NASDAQ:MSFT** | NASDAQ:MSFT | **50.9** | ⚪C | 45.8 | 46 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 514.44 | 491.67 | 542.39 | 1.2:1 | mom_decay/near_resist/low_rr |
| 15 | **NYSE:LTC** | NYSE:LTC | **50.9** | ⚪C | 43.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 43 | 41.33 | 45.01 | 1.2:1 | mom_decay/near_resist/low_rr |
| 16 | **NYSE:TT** | NYSE:TT | **50.7** | 🟢A | 38.5 | 69 | WARN Long (Cautious) | Pullback Buy (Near Support) | 445.2 | 429.38 | 474.58 | 1.9:1 | near_resist/low_rr |
| 17 | **NASDAQ:TEM** | NASDAQ:TEM | **49.6** | ⚪C | 41 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 81.9 | 74.16 | 93.25 | 1.5:1 | OK |
| 18 | **NYSE:HGTY** | NYSE:HGTY | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.5 | 12.81 | 14.37 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **NASDAQ:ASML** | NASDAQ:ASML | **48.4** | ⚪C | 34.3 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1811.67 | 1735.58 | 1923.27 | 1.5:1 | near_resist/chop/low_rr |
| 20 | **NASDAQ:PANW** | NASDAQ:PANW | **47.8** | 🔵B | 23.4 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 397.31 | 368.7 | 439.27 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 21 | **NYSE:TSM** | NYSE:TSM | **47.2** | ⚪C | 41.3 | 56 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 456.19 | 441.14 | 476.26 | 1.3:1 | chop/low_rr |
| 22 | **NYSE:DY** | NYSE:DY | **47** | 🔵B | 24.6 | 68 | GREEN Long (Mid) | Trend Continuation | 269.08 | 252.13 | 293.94 | 1.5:1 | OK |
| 23 | **NYSE:SN** | NYSE:SN | **46.5** | ⚪C | 40.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 177.42 | 166.43 | 193.81 | 1.5:1 | near_resist/low_rr |
| 24 | **NASDAQ:SANM** | NASDAQ:SANM | **46.5** | 🟢A | 36.9 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 211.69 | 192.13 | 237.69 | 1.3:1 | near_resist/chop |
| 25 | **NASDAQ:MU** | NASDAQ:MU | **46.3** | ⚪C | 30.9 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1065.11 | 1002.8 | 1156.5 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **NASDAQ:STX** | NASDAQ:STX | **45.2** | 🔵B | 20.3 | 70 | GREEN Long (Mid) | Trend Continuation | 922.34 | 853.16 | 1023.8 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 27 | **NYSE:VEEV** | NYSE:VEEV | **44.9** | ⚪C | 44.9 | 45 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 281.17 | 269.46 | 301.44 | 1.7:1 | fake_break/near_resist |
| 28 | **NASDAQ:WDC** | NASDAQ:WDC | **44.1** | 🔵B | 25.2 | 60 | GREEN Long (Mid) | Trend Continuation | 454.46 | 418.33 | 507.45 | 1.5:1 | chop/low_rr |
| 29 | **OTC:IFNNY** | OTC:IFNNY | **43.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 66.32 | 62.35 | 72.31 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **NASDAQ:SNDK** | NASDAQ:SNDK | **42.3** | 🔵B | 18.2 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1739.89 | 1593.74 | 1954.24 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **NASDAQ:VRTX** | NASDAQ:VRTX | **42.2** | ⚪C | 33 | 56 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 522.81 | 506.34 | 544.77 | 1.3:1 | near_resist/chop/low_rr |
| 32 | **NYSE:KEYS** | NYSE:KEYS | **41.9** | 🔵B | 29.2 | 61 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 364.04 | 347.11 | 386.61 | 1.3:1 | fake_break/near_resist/low_rr |
| 33 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 34 | **NASDAQ:AEIS** | NASDAQ:AEIS | **39.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 277.59 | 255.89 | 307.75 | 1.4:1 | near_resist/chop |
| 35 | **NYSE:NEXA** | NYSE:NEXA | **39.7** | ⚪C | 32.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 12.19 | 11.33 | 13.34 | 1.3:1 | mom_decay |
| 36 | **OTC:SMERY** | OTC:SMERY | **39.6** | ⚪C | 32.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 31.96 | 29.72 | 35.18 | 1.4:1 | chop |
| 37 | **OTC:HTHIY** | OTC:HTHIY | **39.4** | ⚪C | 32.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.15 | 32.24 | 37.1 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **NYSE:ASIX** | NYSE:ASIX | **37.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 15.92 | 15.08 | 17.03 | 1.3:1 | OK |
| 39 | **NASDAQ:HOOD** | NASDAQ:HOOD | **37.2** | ⚪C | 31.3 | 46 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 110.81 | 99.9 | 125.1 | 1.3:1 | mom_decay/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NYSE:CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **60.6** |
| Tech Score | 49.7 (Pullback Buy (Near Support)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 361.43 |
| **Entry** | **356.01** |
| **Stop** | **320.95** (ATR × 2) |
| **Target** | **401.91** |
| R/R | 1.3:1 |
| RSI | 58.4 |
| ATR% | 5.6% |
| Dist EMA20 | 5.3% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 2. NYSE:WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **57.4** |
| Tech Score | 52.3 (Reversal (Bullish RSI Divergence)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 24.29 |
| **Entry** | **24.29** |
| **Stop** | **22.98** (ATR × 1.5) |
| **Target** | **26.04** |
| R/R | 1.3:1 |
| RSI | 58.5 |
| ATR% | 3.6% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 3. NASDAQ:ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **56.8** |
| Tech Score | 35.7 (Trend Follow (HH/HL Intact)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 289.66 |
| **Entry** | **289.66** |
| **Stop** | **258.38** (ATR × 1.5) |
| **Target** | **335.54** |
| R/R | 1.5:1 |
| RSI | 53.5 |
| ATR% | 7.2% |
| Dist EMA20 | 2.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 4. NYSE:ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 30.3 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 429.71 |
| **Entry** | **429.71** |
| **Stop** | **407.79** (ATR × 1.5) |
| **Target** | **461.85** |
| R/R | 1.5:1 |
| RSI | 53.6 |
| ATR% | 3.4% |
| Dist EMA20 | 1.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 5. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **54.5** |
| Tech Score | 39.8 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 264.75 |
| **Entry** | **264.75** |
| **Stop** | **245.29** (ATR × 1.5) |
| **Target** | **293.29** |
| R/R | 1.5:1 |
| RSI | 66.7 |
| ATR% | 4.9% |
| Dist EMA20 | 9.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist |

### 6. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **53.5** |
| Tech Score | 34.8 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 120.23 |
| **Entry** | **120.23** |
| **Stop** | **110.13** (ATR × 1.5) |
| **Target** | **135.04** |
| R/R | 1.5:1 |
| RSI | 61.8 |
| ATR% | 5.6% |
| Dist EMA20 | 8.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | low_rr |

### 7. NYSE:ANET (NYSE:ANET)

| Field | Value |
|-------|-------|
| Combined Score | **53.4** |
| Tech Score | 41.7 (Pullback Buy (Near Support)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 203.59 |
| **Entry** | **200.54** |
| **Stop** | **188.93** (ATR × 2) |
| **Target** | **218.25** |
| R/R | 1.5:1 |
| RSI | 56.5 |
| ATR% | 3.6% |
| Dist EMA20 | 1.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 8. NYSE:GRMN (NYSE:GRMN)

| Field | Value |
|-------|-------|
| Combined Score | **52.6** |
| Tech Score | 35.4 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 286.84 |
| **Entry** | **286.84** |
| **Stop** | **275.65** (ATR × 1.5) |
| **Target** | **303.25** |
| R/R | 1.5:1 |
| RSI | 52.8 |
| ATR% | 2.6% |
| Dist EMA20 | 0.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

### 9. NASDAQ:AEHR (NASDAQ:AEHR)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 33.1 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 99.62 |
| **Entry** | **99.62** |
| **Stop** | **87.67** (ATR × 1.5) |
| **Target** | **117.15** |
| R/R | 1.5:1 |
| RSI | 53.9 |
| ATR% | 8% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 10. NYSE:SPNT (NYSE:SPNT)

| Field | Value |
|-------|-------|
| Combined Score | **51.1** |
| Tech Score | 36.8 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 24.25 |
| **Entry** | **24.32** |
| **Stop** | **23.03** (ATR × 1.8) |
| **Target** | **25.95** |
| R/R | 1.3:1 |
| RSI | 44.9 |
| ATR% | 2.8% |
| Dist EMA20 | -1.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 11. NYSE:TT (NYSE:TT)

| Field | Value |
|-------|-------|
| Combined Score | **50.7** |
| Tech Score | 38.5 (Pullback Buy (Near Support)) |
| News Score | 69 → WARN Long (Cautious) |
| Current Price | 451.98 |
| **Entry** | **445.2** |
| **Stop** | **429.38** (ATR × 2) |
| **Target** | **474.58** |
| R/R | 1.9:1 |
| RSI | 55.1 |
| ATR% | 2.5% |
| Dist EMA20 | 1.8% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist low_rr |

### 12. NASDAQ:SANM (NASDAQ:SANM)

| Field | Value |
|-------|-------|
| Combined Score | **46.5** |
| Tech Score | 36.9 (Pullback Buy (Near Support)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 214.91 |
| **Entry** | **211.69** |
| **Stop** | **192.13** (ATR × 2) |
| **Target** | **237.69** |
| R/R | 1.3:1 |
| RSI | 54.6 |
| ATR% | 5.3% |
| Dist EMA20 | 2.3% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/10/1 21:00:07*