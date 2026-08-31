# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-09　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:INCY** | NASDAQ:INCY | **69.5** | 🟢A | 54.5 | 92 | GREEN Long (Strong) | Pullback Buy (Near Support) | 99.13 | 94.4 | 106.88 | 1.6:1 | near_resist/chop |
| 2 | **NYSE:LLY** | NYSE:LLY | **65.1** | 🟡C+ | 40.8 | 89 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 1149.15 | 1090.54 | 1235.11 | 1.5:1 | bull_trap/near_resist |
| 3 | **NYSE:JHG** | NYSE:JHG | **64.2** | ⚪C | 64 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 51.98 | 51.63 | 52.08 | 0.3:1 | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:AAOI** | NASDAQ:AAOI | **61.9** | 🟢A | 52.2 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 197.23 | 154.52 | 255.14 | 1.4:1 | mom_decay/low_rr |
| 5 | **NYSE:SMP** | NYSE:SMP | **57.6** | ⚪C | 62.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.87 | 36.54 | 42.38 | 1.5:1 | near_resist/low_rr |
| 6 | **NASDAQ:MRVL** | NASDAQ:MRVL | **57.6** | 🟢A | 40.7 | 83 | WARN Long (Cautious) | Overextended Chase (High Risk) | 288.85 | 246.82 | 344.89 | 1.3:1 | overheated/low_rr |
| 7 | **NASDAQ:ADEA** | NASDAQ:ADEA | **56.6** | ⚪C | 52.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 31.55 | 28.38 | 36.2 | 1.5:1 | low_rr |
| 8 | **NYSE:MS** | NYSE:MS | **55.6** | ⚪C | 45.7 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 212.24 | 203.96 | 224.38 | 1.5:1 | near_resist |
| 9 | **NASDAQ:CRDO** | NASDAQ:CRDO | **55.6** | 🟢A | 34.3 | 75 | GREEN Long (Strong) | Trend Continuation | 222.27 | 187.93 | 272.64 | 1.5:1 | mom_decay/low_rr |
| 10 | **NASDAQ:KLAC** | NASDAQ:KLAC | **53.7** | 🟢A | 33.1 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 2108.06 | 1946.79 | 2344.58 | 1.5:1 | fake_break/near_resist/chop |
| 11 | **NASDAQ:CRWD** | NASDAQ:CRWD | **52.9** | 🟢A | 31.5 | 85 | GREEN Long (Strong) | Pullback Buy (Near Support) | 648.91 | 581.05 | 736.53 | 1.3:1 | mom_decay/bear_div |
| 12 | **NASDAQ:AMAT** | NASDAQ:AMAT | **52.6** | 🟢A | 38.6 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 492.17 | 455.26 | 546.31 | 1.5:1 | near_resist/chop |
| 13 | **NASDAQ:MU** | NASDAQ:MU | **52.4** | 🔵B | 24.4 | 82 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 949.28 | 838.21 | 1112.18 | 1.5:1 | mom_decay/bear_div/low_rr |
| 14 | **NYSE:DOCN** | NYSE:DOCN | **52.1** | 🟢A | 33.9 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 169.32 | 150.02 | 197.63 | 1.5:1 | mom_decay |
| 15 | **NYSE:CARR** | NYSE:CARR | **51** | 🟢A | 37.7 | 71 | GREEN Long (Mid) | Pullback Buy (Near Support) | 66.34 | 62.5 | 72.2 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **NASDAQ:RMBS** | NASDAQ:RMBS | **50.2** | ⚪C | 39.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 152.03 | 132.87 | 180.13 | 1.5:1 | low_rr |
| 17 | **NASDAQ:PANW** | NASDAQ:PANW | **50.2** | 🟢A | 34.6 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 266.33 | 245.16 | 297.38 | 1.5:1 | mom_decay/low_rr |
| 18 | **NYSE:C** | NYSE:C | **50.1** | ⚪C | 41.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 133.28 | 128.08 | 140.9 | 1.5:1 | near_resist/low_rr |
| 19 | **NYSE:JCI** | NYSE:JCI | **49.6** | 🟢A | 35.3 | 71 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 144.05 | 137.57 | 152.69 | 1.3:1 | near_resist/chop/low_rr |
| 20 | **NASDAQ:INTC** | NASDAQ:INTC | **49** | 🔵B | 24 | 74 | GREEN Long (Mid) | Trend Continuation | 110.27 | 96.87 | 129.92 | 1.5:1 | mom_decay |
| 21 | **NASDAQ:POWL** | NASDAQ:POWL | **48.7** | ⚪C | 34.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 293.6 | 268.5 | 330.42 | 1.5:1 | mom_decay/near_resist/low_rr |
| 22 | **NASDAQ:NVMI** | NASDAQ:NVMI | **48.5** | ⚪C | 37.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 509.48 | 454.01 | 582.88 | 1.3:1 | mom_decay/chop/low_rr |
| 23 | **NYSE:IONQ** | NYSE:IONQ | **48.5** | 🔵B | 22.5 | 75 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 62.8 | 53.47 | 76.48 | 1.5:1 | mom_decay/low_rr |
| 24 | **OTC:HTHIY** | OTC:HTHIY | **48.1** | ⚪C | 46.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 31.68 | 30.23 | 34.09 | 1.7:1 | near_resist/chop |
| 25 | **NASDAQ:CPRX** | NASDAQ:CPRX | **47.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.81 | 31.15 | 31.41 | -1.8:1 | bull_trap/mom_decay/near_resist/low_rr |
| 26 | **NASDAQ:AMD** | NASDAQ:AMD | **47.2** | 🟢A | 30.3 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 490.33 | 442.52 | 560.45 | 1.5:1 | mom_decay/low_rr |
| 27 | **NASDAQ:ORRF** | NASDAQ:ORRF | **46.7** | ⚪C | 44.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.27 | 35.72 | 39.96 | 1.7:1 | near_resist/chop/low_rr |
| 28 | **NASDAQ:WDC** | NASDAQ:WDC | **45.9** | 🔵B | 20.8 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 526.93 | 480.3 | 595.33 | 1.5:1 | mom_decay/bear_div/low_rr |
| 29 | **NASDAQ:NBIX** | NASDAQ:NBIX | **45.8** | 🔵B | 20 | 72 | GREEN Long (Mid) | Trend Continuation | 163.12 | 156.27 | 173.17 | 1.5:1 | mom_decay/near_resist/bear_div |
| 30 | **NYSE:COHR** | NYSE:COHR | **44.9** | 🔵B | 22.5 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 403.14 | 343.33 | 483.32 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 31 | **NASDAQ:LRCX** | NASDAQ:LRCX | **44.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 324.45 | 298.66 | 362.28 | 1.5:1 | mom_decay/near_resist/low_rr |
| 32 | **NYSE:ENVA** | NYSE:ENVA | **44.8** | 🔵B | 26.3 | 60 | GREEN Long (Mid) | Trend Continuation | 171.54 | 163.56 | 183.24 | 1.5:1 | near_resist/chop/low_rr |
| 33 | **NASDAQ:PLXS** | NASDAQ:PLXS | **44.5** | ⚪C | 35.1 | 46 | NEUTRAL No Trade (Neutral) | Trend Continuation | 282.29 | 265.78 | 306.51 | 1.5:1 | near_resist/low_rr |
| 34 | **NASDAQ:IREN** | NASDAQ:IREN | **44** | 🔵B | 21.3 | 78 | GREEN Long (Strong) | Pullback Buy (Near Support) | 58.3 | 47.83 | 70.55 | 1.2:1 | mom_decay |
| 35 | **NYSE:AIR** | NYSE:AIR | **43.2** | ⚪C | 36.6 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 113 | 106.46 | 122.98 | 1.5:1 | near_resist/chop/low_rr |
| 36 | **NYSE:FOR** | NYSE:FOR | **41** | ⚪C | 26.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 28.2 | 27.02 | 29.94 | 1.5:1 | near_resist/chop/low_rr |
| 37 | **NYSE:JBL** | NYSE:JBL | **40.9** | 🔵B | 22.8 | 68 | GREEN Long (Mid) | Pullback Buy (Near Support) | 358.49 | 334.11 | 393.79 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 38 | **NYSE:SXI** | NYSE:SXI | **38.3** | ⚪C | 30.5 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 293.91 | 279.36 | 313.31 | 1.3:1 | fake_break/near_resist/chop |
| 39 | **NYSE:QBTS** | NYSE:QBTS | **38.1** | 🔵B | 15.1 | 60 | GREEN Long (Mid) | Trend Continuation | 25.83 | 21.1 | 32.76 | 1.5:1 | mom_decay/bear_div |
| 40 | **NASDAQ:KRYS** | NASDAQ:KRYS | **37.6** | ⚪C | 20.4 | 51 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 301.76 | 285.92 | 325 | 1.5:1 | mom_decay/chop/low_rr |
| 41 | **NYSE:PFS** | NYSE:PFS | **37.2** | ⚪C | 30 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 22.32 | 21.66 | 23.66 | 2:1 | near_resist/chop/low_rr |
| 42 | **NASDAQ:SANM** | NASDAQ:SANM | **36.8** | ⚪C | 24.4 | 43 | NEUTRAL No Trade (Neutral) | Trend Continuation | 251.95 | 228.9 | 285.76 | 1.5:1 | mom_decay/near_resist/low_rr |
| 43 | **NASDAQ:FLEX** | NASDAQ:FLEX | **32** | ⚪C | 20 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 150.83 | 138.16 | 167.72 | 1.3:1 | mom_decay/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **69.5** |
| Tech Score | 54.5 (Pullback Buy (Near Support)) |
| News Score | 92 → GREEN Long (Strong) |
| Current Price | 100.64 |
| **Entry** | **99.13** |
| **Stop** | **94.4** (ATR × 2) |
| **Target** | **106.88** |
| R/R | 1.6:1 |
| RSI | 57.5 |
| ATR% | 3.1% |
| Dist EMA20 | 2.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop |

### 2. NASDAQ:AAOI (NASDAQ:AAOI)

| Field | Value |
|-------|-------|
| Combined Score | **61.9** |
| Tech Score | 52.2 (Breakout (Squeeze Release)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 196.64 |
| **Entry** | **197.23** |
| **Stop** | **154.52** (ATR × 1.8) |
| **Target** | **255.14** |
| R/R | 1.4:1 |
| RSI | 55.5 |
| ATR% | 11.9% |
| Dist EMA20 | 8.9% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

### 3. NASDAQ:MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **57.6** |
| Tech Score | 40.7 (Overextended Chase (High Risk)) |
| News Score | 83 → WARN Long (Cautious) |
| Current Price | 288.85 |
| **Entry** | **288.85** |
| **Stop** | **246.82** (ATR × 1.5) |
| **Target** | **344.89** |
| R/R | 1.3:1 |
| RSI | 69.2 |
| ATR% | 9.7% |
| Dist EMA20 | 27.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | overheated low_rr |

### 4. NASDAQ:CRDO (NASDAQ:CRDO)

| Field | Value |
|-------|-------|
| Combined Score | **55.6** |
| Tech Score | 34.3 (Trend Continuation) |
| News Score | 75 → GREEN Long (Strong) |
| Current Price | 222.27 |
| **Entry** | **222.27** |
| **Stop** | **187.93** (ATR × 1.5) |
| **Target** | **272.64** |
| R/R | 1.5:1 |
| RSI | 59.1 |
| ATR% | 10.3% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 5. NASDAQ:KLAC (NASDAQ:KLAC)

| Field | Value |
|-------|-------|
| Combined Score | **53.7** |
| Tech Score | 33.1 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 2108.06 |
| **Entry** | **2108.06** |
| **Stop** | **1946.79** (ATR × 1.5) |
| **Target** | **2344.58** |
| R/R | 1.5:1 |
| RSI | 61.5 |
| ATR% | 5.1% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist chop |

### 6. NASDAQ:CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 31.5 (Pullback Buy (Near Support)) |
| News Score | 85 → GREEN Long (Strong) |
| Current Price | 658.79 |
| **Entry** | **648.91** |
| **Stop** | **581.05** (ATR × 2) |
| **Target** | **736.53** |
| R/R | 1.3:1 |
| RSI | 56 |
| ATR% | 5.9% |
| Dist EMA20 | 1.1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div |

### 7. NASDAQ:AMAT (NASDAQ:AMAT)

| Field | Value |
|-------|-------|
| Combined Score | **52.6** |
| Tech Score | 38.6 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 492.17 |
| **Entry** | **492.17** |
| **Stop** | **455.26** (ATR × 1.5) |
| **Target** | **546.31** |
| R/R | 1.5:1 |
| RSI | 62.7 |
| ATR% | 5% |
| Dist EMA20 | 8.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 8. NYSE:DOCN (NYSE:DOCN)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 33.9 (Trend Follow (HH/HL Intact)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 169.32 |
| **Entry** | **169.32** |
| **Stop** | **150.02** (ATR × 1.5) |
| **Target** | **197.63** |
| R/R | 1.5:1 |
| RSI | 63 |
| ATR% | 7.6% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 9. NYSE:CARR (NYSE:CARR)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 37.7 (Pullback Buy (Near Support)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 67.35 |
| **Entry** | **66.34** |
| **Stop** | **62.5** (ATR × 2) |
| **Target** | **72.2** |
| R/R | 1.5:1 |
| RSI | 58.4 |
| ATR% | 3.6% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 10. NASDAQ:PANW (NASDAQ:PANW)

| Field | Value |
|-------|-------|
| Combined Score | **50.2** |
| Tech Score | 34.6 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 266.33 |
| **Entry** | **266.33** |
| **Stop** | **245.16** (ATR × 1.5) |
| **Target** | **297.38** |
| R/R | 1.5:1 |
| RSI | 60.9 |
| ATR% | 5.3% |
| Dist EMA20 | 4.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 11. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **49.6** |
| Tech Score | 35.3 (Reversal (Bullish RSI Divergence)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 144.05 |
| **Entry** | **144.05** |
| **Stop** | **137.57** (ATR × 1.5) |
| **Target** | **152.69** |
| R/R | 1.3:1 |
| RSI | 55.6 |
| ATR% | 3% |
| Dist EMA20 | 2.2% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist chop low_rr |

### 12. NASDAQ:AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **47.2** |
| Tech Score | 30.3 (Trend Follow (HH/HL Intact)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 490.33 |
| **Entry** | **490.33** |
| **Stop** | **442.52** (ATR × 1.5) |
| **Target** | **560.45** |
| R/R | 1.5:1 |
| RSI | 58.8 |
| ATR% | 6.5% |
| Dist EMA20 | 4.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:LLY** | NYSE:LLY | 65.1 | 40.8 | 89(hot) | 1149.15 | **1080.2** | 1071.01 | 1227.29 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/9 22:35:29*