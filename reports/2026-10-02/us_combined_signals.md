# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-10-02　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **MSFT** | NASDAQ:MSFT | **65.9** | 🟢A | 50.8 | 76 | GREEN Long (Strong) | Breakout (Squeeze Release) | 514.34 | 490.65 | 543.57 | 1.2:1 | near_resist/low_rr |
| 2 | **ON** | NASDAQ:ON | **64** | 🟡C+ | 49.6 | 98 | WARN No Trade (Overheated) | Pullback Buy (Near Support) | 78.88 | 72.87 | 87.29 | 1.4:1 | OK |
| 3 | **ETN** | NYSE:ETN | **63.2** | 🟢A | 43 | 81 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 437.28 | 415.63 | 469.03 | 1.5:1 | near_resist/chop/low_rr |
| 4 | **ELF** | NYSE:ELF | **60.4** | 🟢A | 57.3 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 102.53 | 95.97 | 112.21 | 1.5:1 | OK |
| 5 | **OTC:HTHIY** | OTC:HTHIY | **59.8** | ⚪C | 58 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 34.91 | 32.55 | 37.94 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 6 | **LTC** | NYSE:LTC | **59.2** | 🟢A | 31.7 | 88 | GREEN Long (Strong) | Breakout (Squeeze Release) | 42.8 | 41.13 | 44.8 | 1.2:1 | mom_decay/near_resist/low_rr |
| 7 | **HGTY** | NYSE:HGTY | **57.6** | ⚪C | 53 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.5 | 12.85 | 14.3 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 8 | **ST** | NYSE:ST | **56.6** | ⚪C | 52.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 42.48 | 40.44 | 45 | 1.2:1 | near_resist/chop/low_rr |
| 9 | **CLS** | NYSE:CLS | **55.5** | 🟢A | 40.8 | 65 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 373.09 | 343.43 | 416.59 | 1.5:1 | near_resist/low_rr |
| 10 | **JOE** | NYSE:JOE | **54.8** | ⚪C | 49.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 65.36 | 62.35 | 69.07 | 1.2:1 | near_resist/chop |
| 11 | **SPNT** | NYSE:SPNT | **52.7** | ⚪C | 44.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 24.48 | 23.22 | 26.06 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 12 | **APH** | NYSE:APH | **52.2** | 🟢A | 34 | 67 | GREEN Long (Mid) | Trend Continuation | 85.67 | 81.43 | 91.89 | 1.5:1 | near_resist/chop/low_rr |
| 13 | **CRWD** | NASDAQ:CRWD | **51.8** | 🟢A | 37.4 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 266.09 | 246.53 | 294.77 | 1.5:1 | fake_break/near_resist |
| 14 | **MU** | NASDAQ:MU | **51.6** | 🟢A | 36.3 | 62 | GREEN Long (Mid) | Trend Continuation | 1097.39 | 1029.9 | 1196.37 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **PLTR** | NASDAQ:PLTR | **51.3** | 🟢A | 33.8 | 65 | GREEN Long (Mid) | Trend Continuation | 190.04 | 181.2 | 203 | 1.5:1 | near_resist/bear_div/low_rr |
| 16 | **VEEV** | NYSE:VEEV | **50.5** | ⚪C | 50.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 277.7 | 265.58 | 298.28 | 1.7:1 | OK |
| 17 | **LLY** | NYSE:LLY | **49.2** | ⚪C | 45.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1132.6 | 1085.46 | 1214.24 | 1.7:1 | near_resist/chop/low_rr |
| 18 | **OTC:IFNNY** | OTC:IFNNY | **48.8** | ⚪C | 48 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 66.42 | 62.84 | 72.02 | 1.6:1 | near_resist/chop/low_rr |
| 19 | **ASML** | NASDAQ:ASML | **48.7** | 🔵B | 29.5 | 65 | WARN Long (Cautious) | Trend Continuation | 1808.49 | 1732.53 | 1919.89 | 1.5:1 | near_resist/chop/low_rr |
| 20 | **ANET** | NYSE:ANET | **48.1** | ⚪C | 48.8 | 47 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 201.42 | 190.58 | 218.4 | 1.6:1 | near_resist/chop/low_rr |
| 21 | **AEHR** | NASDAQ:AEHR | **47.6** | ⚪C | 34.3 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 101.6 | 90.02 | 118.59 | 1.5:1 | near_resist/chop/low_rr |
| 22 | **SN** | NYSE:SN | **47.3** | ⚪C | 44.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 177.08 | 166.48 | 193.08 | 1.5:1 | near_resist/low_rr |
| 23 | **WT** | NYSE:WT | **47.3** | ⚪C | 42.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 24.03 | 22.7 | 25.81 | 1.3:1 | near_resist |
| 24 | **WDC** | NASDAQ:WDC | **46.4** | ⚪C | 31.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 462.56 | 427.17 | 514.46 | 1.5:1 | near_resist/chop/low_rr |
| 25 | **LITE** | NASDAQ:LITE | **45.5** | ⚪C | 34.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 1045.78 | 948.52 | 1188.42 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **OTC:SMNEY** | OTC:SMNEY | **45.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 27 | **GRAL** | NASDAQ:GRAL | **44.8** | ⚪C | 38.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 132.56 | 117.45 | 152.71 | 1.3:1 | overheated/mom_decay |
| 28 | **PANW** | NASDAQ:PANW | **44.5** | ⚪C | 27.2 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 396.25 | 368.31 | 437.22 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **TEM** | NASDAQ:TEM | **44** | ⚪C | 40 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 75.35 | 65.48 | 87.52 | 1.2:1 | near_resist/low_rr |
| 30 | **BE** | NYSE:BE | **43.2** | ⚪C | 29 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 278.41 | 239.61 | 330.32 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **TSM** | NYSE:TSM | **43** | ⚪C | 33 | 58 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 459.2 | 444.05 | 479.4 | 1.3:1 | fake_break/near_resist/chop/low_rr |
| 32 | **SANM** | NASDAQ:SANM | **42.3** | ⚪C | 35.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 218.63 | 199.76 | 244.16 | 1.4:1 | near_resist/chop/low_rr |
| 33 | **ASIX** | NYSE:ASIX | **41.7** | ⚪C | 36.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 15.74 | 14.86 | 17.1 | 1.5:1 | OK |
| 34 | **SNDK** | NASDAQ:SNDK | **41.7** | ⚪C | 27.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 1787.69 | 1642.89 | 2000.07 | 1.5:1 | near_resist/chop/low_rr |
| 35 | **OTC:SMERY** | OTC:SMERY | **41.6** | ⚪C | 36 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 31.93 | 29.7 | 35.14 | 1.4:1 | chop |
| 36 | **KEYS** | NYSE:KEYS | **41.3** | ⚪C | 32.1 | 55 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 373.88 | 357.06 | 396.31 | 1.3:1 | bull_trap/near_resist/low_rr |
| 37 | **DT** | NYSE:DT | **41.1** | ⚪C | 25.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 59.26 | 56.59 | 63.17 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 38 | **TT** | NYSE:TT | **40.2** | 🔵B | 26.4 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 452.06 | 435.08 | 482.8 | 1.8:1 | fake_break/near_resist/low_rr |
| 39 | **GRMN** | NYSE:GRMN | **39.9** | ⚪C | 20.2 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 282.46 | 271.44 | 298.62 | 1.5:1 | near_resist/chop/low_rr |
| 40 | **ENTG** | NASDAQ:ENTG | **39.7** | ⚪C | 22.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 158.48 | 148.73 | 172.77 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 41 | **ARM** | NASDAQ:ARM | **38.4** | ⚪C | 26 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 287.95 | 251.41 | 333.27 | 1.2:1 | near_resist/chop/low_rr |
| 42 | **VICR** | NASDAQ:VICR | **37** | ⚪C | 25.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 303.96 | 267.86 | 349.32 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/low_rr |
| 43 | **NGG** | NYSE:NGG | **35** | ⚪C | 22.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 74.2 | 72.92 | 77.74 | 2.8:1 | near_resist |
| 44 | **SARO** | NYSE:SARO | **33** | ⚪C | 21.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 21.17 | 20.12 | 22.57 | 1.3:1 | mom_decay |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MSFT (NASDAQ:MSFT)

| Field | Value |
|-------|-------|
| Combined Score | **65.9** |
| Tech Score | 50.8 (Breakout (Squeeze Release)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 512.8 |
| **Entry** | **514.34** |
| **Stop** | **490.65** (ATR × 1.8) |
| **Target** | **543.57** |
| R/R | 1.2:1 |
| RSI | 60.2 |
| ATR% | 2.4% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 2. ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **63.2** |
| Tech Score | 43 (Trend Follow (HH/HL Intact)) |
| News Score | 81 → GREEN Long (Strong) |
| Current Price | 437.28 |
| **Entry** | **437.28** |
| **Stop** | **415.63** (ATR × 1.5) |
| **Target** | **469.03** |
| R/R | 1.5:1 |
| RSI | 57 |
| ATR% | 3.3% |
| Dist EMA20 | 2.7% |
| Chase OK | NO |
| MTF Alignment | 2/2 (100%) |
| Risk Flags | near_resist chop low_rr |

### 3. ELF (NYSE:ELF)

| Field | Value |
|-------|-------|
| Combined Score | **60.4** |
| Tech Score | 57.3 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 104.09 |
| **Entry** | **102.53** |
| **Stop** | **95.97** (ATR × 2) |
| **Target** | **112.21** |
| R/R | 1.5:1 |
| RSI | 59.7 |
| ATR% | 3.9% |
| Dist EMA20 | 4% |
| Chase OK | **YES** |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | None |

### 4. LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **59.2** |
| Tech Score | 31.7 (Breakout (Squeeze Release)) |
| News Score | 88 → GREEN Long (Strong) |
| Current Price | 42.67 |
| **Entry** | **42.8** |
| **Stop** | **41.13** (ATR × 1.8) |
| **Target** | **44.8** |
| R/R | 1.2:1 |
| RSI | 54.4 |
| ATR% | 2% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 0/3 (0%) |
| Risk Flags | mom_decay near_resist low_rr |

### 5. CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **55.5** |
| Tech Score | 40.8 (Trend Follow (HH/HL Intact)) |
| News Score | 65 → WARN Long (Cautious) |
| Current Price | 373.09 |
| **Entry** | **373.09** |
| **Stop** | **343.43** (ATR × 1.5) |
| **Target** | **416.59** |
| R/R | 1.5:1 |
| RSI | 61.8 |
| ATR% | 5.3% |
| Dist EMA20 | 7.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 6. APH (NYSE:APH)

| Field | Value |
|-------|-------|
| Combined Score | **52.2** |
| Tech Score | 34 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 85.67 |
| **Entry** | **85.67** |
| **Stop** | **81.43** (ATR × 1.5) |
| **Target** | **91.89** |
| R/R | 1.5:1 |
| RSI | 61.4 |
| ATR% | 3.3% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 7. CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **51.8** |
| Tech Score | 37.4 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 266.09 |
| **Entry** | **266.09** |
| **Stop** | **246.53** (ATR × 1.5) |
| **Target** | **294.77** |
| R/R | 1.5:1 |
| RSI | 67.2 |
| ATR% | 4.9% |
| Dist EMA20 | 9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | fake_break near_resist |

### 8. MU (NASDAQ:MU)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 36.3 (Trend Continuation) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 1097.39 |
| **Entry** | **1097.39** |
| **Stop** | **1029.9** (ATR × 1.5) |
| **Target** | **1196.37** |
| R/R | 1.5:1 |
| RSI | 63.5 |
| ATR% | 4.1% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop low_rr |

### 9. PLTR (NASDAQ:PLTR)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 33.8 (Trend Continuation) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 190.04 |
| **Entry** | **190.04** |
| **Stop** | **181.2** (ATR × 1.5) |
| **Target** | **203** |
| R/R | 1.5:1 |
| RSI | 63.1 |
| ATR% | 3.1% |
| Dist EMA20 | 4.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist bear_div low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **ON** | NASDAQ:ON | 64 | 49.6 | 98(hot) | 80.08 | **75.28** | 72.87 | 87.29 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/10/2 21:00:06*