# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-19　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:CF** | NYSE:CF | **77.2** | 🟡C+ | 62.4 | 87 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 125.6 | 115.3 | 138.99 | 1.3:1 | near_resist/chop |
| 2 | **NYSE:HPE** | NYSE:HPE | **62** | ⚪C | 61.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 33 | 31.02 | 35.9 | 1.5:1 | OK |
| 3 | **NASDAQ:ERIC** | NASDAQ:ERIC | **61.1** | 🟢A | 48.8 | 67 | GREEN Long (Mid) | Trend Continuation | 12.84 | 12.34 | 13.57 | 1.5:1 | near_resist/chop |
| 4 | **NYSE:MS** | NYSE:MS | **58.2** | 🟢A | 40.7 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 193.27 | 184.71 | 203.77 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 5 | **NASDAQ:NVDA** | NASDAQ:NVDA | **56.2** | 🟢A | 39.3 | 69 | GREEN Long (Mid) | Trend Continuation | 222.32 | 209.65 | 240.91 | 1.5:1 | OK |
| 6 | **NYSE:SPNT** | NYSE:SPNT | **54** | ⚪C | 48.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 23.93 | 22.49 | 25.77 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 7 | **NYSE:TRNO** | NYSE:TRNO | **52.9** | 🟢A | 39.1 | 61 | GREEN Long (Mid) | Breakout (Squeeze Release) | 65.99 | 63.66 | 68.75 | 1.2:1 | mom_decay/near_resist/low_rr |
| 8 | **NYSE:NVT** | NYSE:NVT | **52.7** | 🔵B | 18.2 | 92 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 160.69 | 148.16 | 179.07 | 1.5:1 | mom_decay/bear_div/low_rr |
| 9 | **NASDAQ:VSAT** | NASDAQ:VSAT | **52.4** | ⚪C | 43.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 71.52 | 65.83 | 79.86 | 1.5:1 | bear_div |
| 10 | **NASDAQ:ADI** | NASDAQ:ADI | **50.6** | ⚪C | 41.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 418.58 | 400.37 | 445.29 | 1.5:1 | mom_decay/low_rr |
| 11 | **NYSE:HG** | NYSE:HG | **50.2** | 🟢A | 31.3 | 66 | GREEN Long (Mid) | Trend Continuation | 32.15 | 30.46 | 34.63 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 12 | **NASDAQ:AMAT** | NASDAQ:AMAT | **49.4** | 🔵B | 27.3 | 70 | GREEN Long (Mid) | Trend Continuation | 413.57 | 384.41 | 456.33 | 1.5:1 | near_resist/chop/low_rr |
| 13 | **NYSE:WPM** | NYSE:WPM | **49.4** | 🔵B | 23 | 89 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 129.49 | 120.56 | 141.4 | 1.3:1 | mom_decay/chop |
| 14 | **NASDAQ:OSBC** | NASDAQ:OSBC | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 20.88 | 19.81 | 22.23 | 1.3:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:AMD** | NASDAQ:AMD | **48.9** | 🔵B | 29.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 420.99 | 378.68 | 483.04 | 1.5:1 | low_rr |
| 16 | **NYSE:JCI** | NYSE:JCI | **48.9** | 🔵B | 25.1 | 72 | GREEN Long (Mid) | Breakout (Squeeze Release) | 137.72 | 129.65 | 147.95 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 17 | **NYSE:SMP** | NYSE:SMP | **48.7** | ⚪C | 34.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 37.06 | 34.36 | 40.55 | 1.3:1 | mom_decay/near_resist/low_rr |
| 18 | **NYSE:DELL** | NYSE:DELL | **48.2** | 🔵B | 25.3 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 238.03 | 217.32 | 268.4 | 1.5:1 | mom_decay/low_rr |
| 19 | **NYSE:RIO** | NYSE:RIO | **47.7** | ⚪C | 39.2 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 103.33 | 98.53 | 110.38 | 1.5:1 | mom_decay |
| 20 | **NASDAQ:MTSI** | NASDAQ:MTSI | **47.5** | ⚪C | 45.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 356.25 | 325.26 | 397.58 | 1.3:1 | OK |
| 21 | **NASDAQ:EQIX** | NASDAQ:EQIX | **46.3** | 🟢A | 32.5 | 67 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1046.68 | 1017.99 | 1107.25 | 2.1:1 | mom_decay/near_resist |
| 22 | **NYSE:VRT** | NYSE:VRT | **46.2** | 🔵B | 24.6 | 66 | GREEN Long (Mid) | Trend Continuation | 339.73 | 311.7 | 380.84 | 1.5:1 | mom_decay/bear_div |
| 23 | **NYSE:LTC** | NYSE:LTC | **46.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.55 | 37.25 | 40.06 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 24 | **NYSE:SM** | NYSE:SM | **46** | 🔵B | 20.3 | 72 | GREEN Long (Mid) | Trend Continuation | 33.17 | 31.03 | 36.31 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 25 | **NYSE:AROC** | NYSE:AROC | **45.8** | ⚪C | 34.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 38.62 | 36.42 | 41.85 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 26 | **NASDAQ:MU** | NASDAQ:MU | **45.8** | ⚪C | 32 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 681.54 | 595.67 | 807.49 | 1.5:1 | low_rr |
| 27 | **NYSE:COHR** | NYSE:COHR | **45.5** | 🔵B | 26.2 | 62 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 362.83 | 320.38 | 425.09 | 1.5:1 | near_resist/low_rr |
| 28 | **NASDAQ:SANM** | NASDAQ:SANM | **45.4** | 🔵B | 21.3 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 225.14 | 204.2 | 255.85 | 1.5:1 | mom_decay/near_resist/low_rr |
| 29 | **NYSE:MTZ** | NYSE:MTZ | **44.6** | 🔵B | 16.7 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 385.58 | 356.08 | 428.84 | 1.5:1 | mom_decay/near_resist/low_rr |
| 30 | **NASDAQ:INCY** | NASDAQ:INCY | **44.2** | ⚪C | 28 | 56 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 95.48 | 89.71 | 102.81 | 1.3:1 | mom_decay/chop/bear_div |
| 31 | **NYSE:GNRC** | NYSE:GNRC | **43.8** | 🔵B | 23.4 | 62 | GREEN Long (Mid) | Trend Continuation | 253.05 | 234.83 | 279.77 | 1.5:1 | mom_decay/bear_div |
| 32 | **NASDAQ:WDC** | NASDAQ:WDC | **43.8** | 🔵B | 15.3 | 74 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 458.68 | 406.39 | 535.37 | 1.5:1 | mom_decay/bear_div/low_rr |
| 33 | **NASDAQ:LRCX** | NASDAQ:LRCX | **43.5** | 🔵B | 16.9 | 71 | GREEN Long (Mid) | Trend Continuation | 277.96 | 256.28 | 309.76 | 1.5:1 | mom_decay/chop/bear_div |
| 34 | **NYSE:ENS** | NYSE:ENS | **43.3** | ⚪C | 29.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 224.41 | 212.29 | 242.18 | 1.5:1 | bear_div |
| 35 | **NASDAQ:AVGO** | NASDAQ:AVGO | **43** | 🔵B | 25.6 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 414.4 | 387.89 | 453.53 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 36 | **NASDAQ:INTC** | NASDAQ:INTC | **42.8** | ⚪C | 30.4 | 49 | NEUTRAL No Trade (Neutral) | Trend Continuation | 108.17 | 93.57 | 129.59 | 1.5:1 | mom_decay/low_rr |
| 37 | **NASDAQ:KLAC** | NASDAQ:KLAC | **42.8** | 🔵B | 23.3 | 72 | WARN Long (Cautious) | Pullback Buy (Near Support) | 1730.1 | 1584.32 | 1928.58 | 1.4:1 | mom_decay/near_resist/chop |
| 38 | **NYSE:TSM** | NYSE:TSM | **42.2** | ⚪C | 37 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 390.01 | 365.07 | 426.83 | 1.5:1 | mom_decay |
| 39 | **NYSE:P** | NYSE:P | **41.9** | ⚪C | 31.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 75.91 | 67.67 | 86.47 | 1.3:1 | near_resist/low_rr |
| 40 | **NYSE:CIEN** | NYSE:CIEN | **40.5** | 🔵B | 24.9 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 516.66 | 453.19 | 595.87 | 1.2:1 | mom_decay/near_resist/low_rr |
| 41 | **NASDAQ:FLEX** | NASDAQ:FLEX | **40.3** | ⚪C | 20.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 129.73 | 116.5 | 149.14 | 1.5:1 | bear_div/low_rr |
| 42 | **NASDAQ:APLD** | NASDAQ:APLD | **39.3** | 🔵B | 22.8 | 64 | GREEN Long (Mid) | Pullback Buy (Near Support) | 38.55 | 31.31 | 46.97 | 1.2:1 | near_resist/bear_div/low_rr |
| 43 | **NASDAQ:PRDO** | NASDAQ:PRDO | **37.5** | ⚪C | 25.2 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 34.15 | 32.45 | 36.89 | 1.6:1 | near_resist/chop/low_rr |
| 44 | **NYSE:TT** | NYSE:TT | **36.9** | 🔵B | 16.1 | 68 | GREEN Long (Mid) | Pullback Buy (Near Support) | 453.51 | 432.79 | 488.05 | 1.7:1 | mom_decay/near_resist/chop/low_rr |
| 45 | **NYSE:AIR** | NYSE:AIR | **33.4** | ⚪C | 22.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 102.23 | 94.66 | 112.92 | 1.4:1 | mom_decay/near_resist/chop |
| 46 | **NYSE:PFS** | NYSE:PFS | **33.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 21.4 | 20.77 | 22.69 | 2:1 | mom_decay |
| 47 | **NASDAQ:GEN** | NASDAQ:GEN | **31** | ⚪C | 20.4 | 47 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 24.34 | 22.95 | 26.19 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:ERIC (NASDAQ:ERIC)

| Field | Value |
|-------|-------|
| Combined Score | **61.1** |
| Tech Score | 48.8 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 12.84 |
| **Entry** | **12.84** |
| **Stop** | **12.34** (ATR × 1.5) |
| **Target** | **13.57** |
| R/R | 1.5:1 |
| RSI | 65.5 |
| ATR% | 2.6% |
| Dist EMA20 | 6.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 2. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 40.7 (Breakout (Squeeze Release)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 192.69 |
| **Entry** | **193.27** |
| **Stop** | **184.71** (ATR × 1.8) |
| **Target** | **203.77** |
| R/R | 1.2:1 |
| RSI | 59.8 |
| ATR% | 2.3% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 3. NASDAQ:NVDA (NASDAQ:NVDA)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 39.3 (Trend Continuation) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 222.32 |
| **Entry** | **222.32** |
| **Stop** | **209.65** (ATR × 1.5) |
| **Target** | **240.91** |
| R/R | 1.5:1 |
| RSI | 61.7 |
| ATR% | 3.8% |
| Dist EMA20 | 4.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 4. NYSE:TRNO (NYSE:TRNO)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 39.1 (Breakout (Squeeze Release)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 65.79 |
| **Entry** | **65.99** |
| **Stop** | **63.66** (ATR × 1.8) |
| **Target** | **68.75** |
| R/R | 1.2:1 |
| RSI | 53.3 |
| ATR% | 1.8% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist low_rr |

### 5. NYSE:HG (NYSE:HG)

| Field | Value |
|-------|-------|
| Combined Score | **50.2** |
| Tech Score | 31.3 (Trend Continuation) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 32.15 |
| **Entry** | **32.15** |
| **Stop** | **30.46** (ATR × 1.5) |
| **Target** | **34.63** |
| R/R | 1.5:1 |
| RSI | 58.6 |
| ATR% | 3.5% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 6. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **46.3** |
| Tech Score | 32.5 (Pullback Buy (Near Support)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 1062.62 |
| **Entry** | **1046.68** |
| **Stop** | **1017.99** (ATR × 2) |
| **Target** | **1107.25** |
| R/R | 2.1:1 |
| RSI | 49.3 |
| ATR% | 2.1% |
| Dist EMA20 | -0.8% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:CF** | NYSE:CF | 77.2 | 62.4 | 87(hot) | 125.22 | **117.71** | 114.2 | 136.24 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/19 17:03:22*