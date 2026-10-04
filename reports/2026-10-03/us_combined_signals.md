# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-10-03　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LTC** | NYSE:LTC | **67.9** | 🟢A | 46.8 | 87 | GREEN Long (Strong) | Breakout (Squeeze Release) | 43.13 | 41.45 | 45.15 | 1.2:1 | mom_decay/near_resist/low_rr |
| 2 | **ST** | NYSE:ST | **64.5** | ⚪C | 65.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 43.64 | 41.71 | 46.01 | 1.2:1 | near_resist/chop |
| 3 | **CLS** | NYSE:CLS | **61.8** | 🟢A | 52 | 64 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 387.32 | 359.43 | 428.22 | 1.5:1 | low_rr |
| 4 | **ETN** | NYSE:ETN | **61.2** | 🟡C+ | 41.6 | 78 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 436.11 | 416.49 | 464.89 | 1.5:1 | near_resist/chop/low_rr |
| 5 | **HGTY** | NYSE:HGTY | **59.9** | ⚪C | 56.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.65 | 13 | 14.46 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 6 | **WT** | NYSE:WT | **59.1** | 🟢A | 53.1 | 68 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 24.38 | 23.03 | 26.18 | 1.3:1 | near_resist/low_rr |
| 7 | **ELF** | NYSE:ELF | **57.6** | ⚪C | 56.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 103.11 | 96.72 | 112.64 | 1.5:1 | OK |
| 8 | **OTC:HTHIY** | OTC:HTHIY | **56.1** | ⚪C | 51.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 35.7 | 33.28 | 38.79 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 9 | **JOE** | NYSE:JOE | **52.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 65.58 | 62.67 | 69.14 | 1.2:1 | near_resist/chop/low_rr |
| 10 | **SN** | NYSE:SN | **51.9** | ⚪C | 51.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 179.83 | 170.52 | 194.62 | 1.6:1 | OK |
| 11 | **BE** | NYSE:BE | **51.4** | ⚪C | 44 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 290.02 | 251.68 | 341.2 | 1.3:1 | chop/low_rr |
| 12 | **ARM** | NASDAQ:ARM | **51.4** | 🟢A | 43.7 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 302.88 | 266.9 | 348.08 | 1.3:1 | chop |
| 13 | **LLY** | NYSE:LLY | **50.8** | 🟢A | 42.7 | 63 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1125.71 | 1081.14 | 1204.56 | 1.8:1 | near_resist/chop |
| 14 | **PANW** | NASDAQ:PANW | **50.4** | 🟢A | 34.3 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 403.24 | 378.44 | 439.61 | 1.5:1 | fake_break/near_resist/chop |
| 15 | **CRWD** | NASDAQ:CRWD | **49.2** | ⚪C | 35 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 270.04 | 253.43 | 294.4 | 1.5:1 | fake_break/near_resist |
| 16 | **ANET** | NYSE:ANET | **48.3** | ⚪C | 38.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 207.35 | 197.71 | 221.49 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **AEIS** | NASDAQ:AEIS | **47.8** | ⚪C | 46.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 299.72 | 280.55 | 328.01 | 1.5:1 | chop |
| 18 | **ASIX** | NYSE:ASIX | **46.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 15.98 | 15.08 | 17.36 | 1.5:1 | OK |
| 19 | **KEYS** | NYSE:KEYS | **46.5** | ⚪C | 41.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 384.64 | 369.06 | 405.41 | 1.3:1 | bull_trap/near_resist |
| 20 | **TT** | NYSE:TT | **46.3** | 🟢A | 35.8 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 456.95 | 441.64 | 486.18 | 1.9:1 | fake_break/near_resist/chop |
| 21 | **MSFT** | NASDAQ:MSFT | **45.5** | ⚪C | 42.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 509.77 | 493.72 | 541.34 | 2:1 | near_resist/low_rr |
| 22 | **INTC** | NASDAQ:INTC | **45.4** | ⚪C | 30 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 119.33 | 109.49 | 133.77 | 1.5:1 | low_rr |
| 23 | **GRAL** | NASDAQ:GRAL | **44.4** | 🔵B | 28.7 | 68 | GREEN Long (Mid) | Overextended Chase (High Risk) | 143.26 | 127.36 | 164.46 | 1.3:1 | overheated/mom_decay |
| 24 | **SPNT** | NYSE:SPNT | **44.3** | ⚪C | 39.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 24.05 | 23.1 | 25.74 | 1.8:1 | mom_decay/near_resist/chop/low_rr |
| 25 | **ASML** | NASDAQ:ASML | **43.9** | 🔵B | 22.2 | 64 | WARN Long (Cautious) | Trend Continuation | 1867.31 | 1797.29 | 1970.01 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 26 | **ENTG** | NASDAQ:ENTG | **43.6** | ⚪C | 34.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 166.47 | 156.98 | 179.12 | 1.3:1 | overheated/chop/low_rr |
| 27 | **MU** | NASDAQ:MU | **43.4** | ⚪C | 28.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 1074.89 | 1012.01 | 1167.12 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **VEEV** | NYSE:VEEV | **42.8** | ⚪C | 31 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 273.33 | 260.62 | 291.97 | 1.5:1 | mom_decay |
| 29 | **AEHR** | NASDAQ:AEHR | **42.4** | ⚪C | 25.6 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 107.21 | 96.11 | 123.48 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 30 | **APH** | NYSE:APH | **42.2** | 🔵B | 15.3 | 70 | GREEN Long (Mid) | Trend Continuation | 86.96 | 83.05 | 92.7 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 31 | **OTC:SMERY** | OTC:SMERY | **41.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 32.23 | 30.24 | 35.21 | 1.5:1 | near_resist/chop |
| 32 | **OTC:IFNNY** | OTC:IFNNY | **41** | ⚪C | 26.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 73.07 | 69.67 | 78.05 | 1.5:1 | near_resist/chop/low_rr |
| 33 | **TEM** | NASDAQ:TEM | **40.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 75.48 | 65.75 | 87.51 | 1.2:1 | mom_decay/near_resist/low_rr |
| 34 | **NEXA** | NYSE:NEXA | **40.9** | ⚪C | 34.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 12.24 | 11.41 | 13.34 | 1.3:1 | mom_decay |
| 35 | **PLTR** | NASDAQ:PLTR | **40.7** | ⚪C | 31.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 185.92 | 177.42 | 200.08 | 1.7:1 | near_resist/bear_div/low_rr |
| 36 | **OTC:SMNEY** | OTC:SMNEY | **40.4** | ⚪C | 25.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 37 | **GRMN** | NYSE:GRMN | **39.3** | ⚪C | 28.1 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 276.94 | 266.54 | 295.78 | 1.8:1 | near_resist/chop/low_rr |
| 38 | **DT** | NYSE:DT | **38.7** | ⚪C | 20.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 59.32 | 56.74 | 63.1 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 39 | **DY** | NYSE:DY | **38.1** | ⚪C | 30.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 269.64 | 253.49 | 294.01 | 1.5:1 | OK |
| 40 | **SANM** | NASDAQ:SANM | **37.8** | ⚪C | 28.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 225.6 | 208.43 | 249.65 | 1.4:1 | fake_break/near_resist/chop/low_rr |
| 41 | **HOOD** | NASDAQ:HOOD | **37.5** | ⚪C | 27.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 111.05 | 99.89 | 125.59 | 1.3:1 | mom_decay/chop |
| 42 | **TSM** | NYSE:TSM | **36.5** | 🔵B | 20.1 | 61 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 472.78 | 457.89 | 492.64 | 1.3:1 | fake_break/bull_trap/near_resist/chop/low_rr |
| 43 | **SNDK** | NASDAQ:SNDK | **36.2** | ⚪C | 27 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1694.19 | 1534.23 | 1905.75 | 1.3:1 | mom_decay/chop/low_rr |
| 44 | **NGG** | NYSE:NGG | **34.3** | ⚪C | 21.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 74.98 | 73.68 | 78.56 | 2.8:1 | near_resist |
| 45 | **SARO** | NYSE:SARO | **33.9** | ⚪C | 23.1 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 21.05 | 20.01 | 22.44 | 1.3:1 | mom_decay |
| 46 | **VRTX** | NASDAQ:VRTX | **32.6** | ⚪C | 21.7 | 49 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 497.16 | 481.51 | 527.95 | 2:1 | mom_decay/near_resist/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **67.9** |
| Tech Score | 46.8 (Breakout (Squeeze Release)) |
| News Score | 87 → GREEN Long (Strong) |
| Current Price | 43 |
| **Entry** | **43.13** |
| **Stop** | **41.45** (ATR × 1.8) |
| **Target** | **45.15** |
| R/R | 1.2:1 |
| RSI | 57.2 |
| ATR% | 2% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay near_resist low_rr |

### 2. CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **61.8** |
| Tech Score | 52 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → WARN Long (Cautious) |
| Current Price | 387.32 |
| **Entry** | **387.32** |
| **Stop** | **359.43** (ATR × 1.5) |
| **Target** | **428.22** |
| R/R | 1.5:1 |
| RSI | 65.5 |
| ATR% | 4.8% |
| Dist EMA20 | 10.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | low_rr |

### 3. WT (NYSE:WT)

| Field | Value |
|-------|-------|
| Combined Score | **59.1** |
| Tech Score | 53.1 (Reversal (Bullish RSI Divergence)) |
| News Score | 68 → GREEN Long (Mid) |
| Current Price | 24.38 |
| **Entry** | **24.38** |
| **Stop** | **23.03** (ATR × 1.5) |
| **Target** | **26.18** |
| R/R | 1.3:1 |
| RSI | 58.6 |
| ATR% | 3.7% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 4. ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **51.4** |
| Tech Score | 43.7 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 307.49 |
| **Entry** | **302.88** |
| **Stop** | **266.9** (ATR × 2) |
| **Target** | **348.08** |
| R/R | 1.3:1 |
| RSI | 58.5 |
| ATR% | 6.6% |
| Dist EMA20 | 7.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

### 5. LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **50.8** |
| Tech Score | 42.7 (Pullback Buy (Near Support)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 1142.85 |
| **Entry** | **1125.71** |
| **Stop** | **1081.14** (ATR × 2) |
| **Target** | **1204.56** |
| R/R | 1.8:1 |
| RSI | 43 |
| ATR% | 2.7% |
| Dist EMA20 | -1.7% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | near_resist chop |

### 6. PANW (NASDAQ:PANW)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 34.3 (Trend Follow (HH/HL Intact)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 403.24 |
| **Entry** | **403.24** |
| **Stop** | **378.44** (ATR × 1.5) |
| **Target** | **439.61** |
| R/R | 1.5:1 |
| RSI | 62.6 |
| ATR% | 4.1% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 7. TT (NYSE:TT)

| Field | Value |
|-------|-------|
| Combined Score | **46.3** |
| Tech Score | 35.8 (Pullback Buy (Near Support)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 463.91 |
| **Entry** | **456.95** |
| **Stop** | **441.64** (ATR × 2) |
| **Target** | **486.18** |
| R/R | 1.9:1 |
| RSI | 62.6 |
| ATR% | 2.4% |
| Dist EMA20 | 3.7% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | fake_break near_resist chop |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **ETN** | NYSE:ETN | 61.2 | 41.6 | 78(hot) | 436.11 | **409.94** | 409.94 | 462.28 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/10/3 21:00:06*