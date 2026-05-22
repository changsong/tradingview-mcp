# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-20　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:ADI** | NASDAQ:ADI | **64.3** | 🟢A | 46.1 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 414.31 | 395.67 | 441.65 | 1.5:1 | mom_decay/low_rr |
| 2 | **NYSE:CF** | NYSE:CF | **64.2** | 🟡C+ | 48 | 76 | WARN No Trade (Overheated) | Breakout (Squeeze Release) | 128.24 | 117.96 | 141.6 | 1.3:1 | near_resist/chop/low_rr |
| 3 | **NYSE:HPE** | NYSE:HPE | **61.8** | 🟢A | 48 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 32.62 | 30.61 | 35.56 | 1.5:1 | low_rr |
| 4 | **NYSE:LTC** | NYSE:LTC | **56.5** | ⚪C | 52.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 38.73 | 37.43 | 40.25 | 1.2:1 | mom_decay/near_resist/chop |
| 5 | **NYSE:JHG** | NYSE:JHG | **56.1** | ⚪C | 60.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 51.02 | 51.59 | 52.01 | -1.7:1 | mom_decay/near_resist/low_rr |
| 6 | **NASDAQ:MRVL** | NASDAQ:MRVL | **55.8** | 🔵B | 24.6 | 90 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 176.27 | 158.29 | 202.64 | 1.5:1 | mom_decay/bear_div/low_rr |
| 7 | **NYSE:CIEN** | NYSE:CIEN | **54.8** | 🟢A | 33.6 | 74 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 541.92 | 485.02 | 625.38 | 1.5:1 | mom_decay |
| 8 | **NYSE:TSM** | NYSE:TSM | **53.6** | ⚪C | 44.4 | 55 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 393.79 | 364.34 | 431.87 | 1.3:1 | mom_decay |
| 9 | **NYSE:TRNO** | NYSE:TRNO | **53.6** | ⚪C | 41.6 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 65.07 | 62.89 | 67.64 | 1.2:1 | mom_decay/near_resist |
| 10 | **NASDAQ:MU** | NASDAQ:MU | **53.2** | ⚪C | 42.3 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 698.74 | 607.55 | 832.48 | 1.5:1 | low_rr |
| 11 | **NASDAQ:GOOGL** | NASDAQ:GOOGL | **52.9** | 🟢A | 36.1 | 78 | GREEN Long (Strong) | Pullback Buy (Near Support) | 381.85 | 364.4 | 410.92 | 1.7:1 | mom_decay/bear_div |
| 12 | **NASDAQ:INTC** | NASDAQ:INTC | **52** | 🟢A | 35.7 | 64 | GREEN Long (Mid) | Trend Continuation | 110.8 | 96.17 | 132.25 | 1.5:1 | mom_decay/low_rr |
| 13 | **NYSE:MS** | NYSE:MS | **51.7** | 🟢A | 37.8 | 60 | GREEN Long (Mid) | Breakout (Squeeze Release) | 190.15 | 181.73 | 200.48 | 1.2:1 | mom_decay/near_resist/bear_div/low_rr |
| 14 | **NYSE:PWR** | NYSE:PWR | **51.4** | 🔵B | 26.7 | 76 | GREEN Long (Strong) | Trend Continuation | 714.13 | 660.57 | 792.68 | 1.5:1 | mom_decay/low_rr |
| 15 | **NASDAQ:BGC** | NASDAQ:BGC | **51.2** | 🟢A | 34.3 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 11.34 | 10.7 | 12.16 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 16 | **NYSE:AROC** | NYSE:AROC | **51.1** | ⚪C | 43.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 38.04 | 35.87 | 41.22 | 1.5:1 | mom_decay/chop/low_rr |
| 17 | **NASDAQ:ERIC** | NASDAQ:ERIC | **50.9** | ⚪C | 43.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 12.78 | 12.28 | 13.51 | 1.5:1 | near_resist/chop |
| 18 | **NYSE:SPNT** | NYSE:SPNT | **50.8** | ⚪C | 43 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 23.76 | 22.33 | 25.59 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **NASDAQ:OSBC** | NASDAQ:OSBC | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 20.85 | 19.82 | 22.14 | 1.3:1 | mom_decay/near_resist/low_rr |
| 20 | **NYSE:COHR** | NYSE:COHR | **48.9** | 🔵B | 21.9 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 353.63 | 309.6 | 418.2 | 1.5:1 | mom_decay/near_resist/low_rr |
| 21 | **NASDAQ:RKLB** | NASDAQ:RKLB | **47.8** | ⚪C | 47.6 | 48 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 127.31 | 110.7 | 149.46 | 1.3:1 | overheated |
| 22 | **NASDAQ:AMD** | NASDAQ:AMD | **47.8** | 🔵B | 28.6 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 414.05 | 370.57 | 477.81 | 1.5:1 | mom_decay/low_rr |
| 23 | **NASDAQ:MTSI** | NASDAQ:MTSI | **47.5** | ⚪C | 43.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 358.98 | 326.13 | 402.78 | 1.3:1 | low_rr |
| 24 | **NYSE:WT** | NYSE:WT | **46.2** | ⚪C | 42.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 18.51 | 17.14 | 20.44 | 1.4:1 | bear_div |
| 25 | **NASDAQ:EQIX** | NASDAQ:EQIX | **45.2** | 🟢A | 31.4 | 66 | GREEN Long (Mid) | Pullback Buy (Near Support) | 1032.7 | 1004.4 | 1092.46 | 2.1:1 | mom_decay |
| 26 | **NASDAQ:VSAT** | NASDAQ:VSAT | **45.1** | ⚪C | 33.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 70.95 | 65.1 | 79.53 | 1.5:1 | mom_decay/bear_div/low_rr |
| 27 | **NASDAQ:AMAT** | NASDAQ:AMAT | **44.8** | 🔵B | 15.7 | 76 | GREEN Long (Strong) | Trend Continuation | 406.91 | 377 | 450.77 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 28 | **NYSE:ENS** | NYSE:ENS | **44.7** | ⚪C | 32.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 217.41 | 204.69 | 236.06 | 1.5:1 | mom_decay/bear_div |
| 29 | **NYSE:SM** | NYSE:SM | **42.8** | ⚪C | 25 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 34.32 | 32.21 | 37.42 | 1.5:1 | fake_break/near_resist/chop/bear_div |
| 30 | **NYSE:HG** | NYSE:HG | **42.4** | ⚪C | 35.4 | 53 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 32.02 | 30.34 | 34.26 | 1.3:1 | near_resist/chop/low_rr |
| 31 | **NASDAQ:INCY** | NASDAQ:INCY | **42.3** | ⚪C | 26.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 95.89 | 90.61 | 102.53 | 1.3:1 | mom_decay/chop/bear_div |
| 32 | **NASDAQ:WDC** | NASDAQ:WDC | **41.7** | 🔵B | 17.9 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 455.8 | 405.21 | 530 | 1.5:1 | mom_decay/bear_div/low_rr |
| 33 | **NASDAQ:NVDA** | NASDAQ:NVDA | **41.3** | ⚪C | 31.8 | 43 | NEUTRAL No Trade (Neutral) | Trend Continuation | 220.61 | 207.7 | 239.54 | 1.5:1 | low_rr |
| 34 | **NYSE:NOK** | NYSE:NOK | **41.2** | ⚪C | 21 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 13.67 | 12.26 | 15.75 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 35 | **NASDAQ:SANM** | NASDAQ:SANM | **40.5** | ⚪C | 24.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 224.7 | 203.8 | 255.35 | 1.5:1 | mom_decay/near_resist/low_rr |
| 36 | **NYSE:ETN** | NYSE:ETN | **40.2** | 🔵B | 19.7 | 71 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 371.88 | 345.66 | 406.84 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 37 | **NASDAQ:PRDO** | NASDAQ:PRDO | **38.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 33.38 | 31.65 | 36.13 | 1.6:1 | mom_decay/near_resist/chop |
| 38 | **NASDAQ:AVGO** | NASDAQ:AVGO | **37.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 412.3 | 380.73 | 453.2 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 39 | **NYSE:RIO** | NYSE:RIO | **36.6** | ⚪C | 21.7 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 99.41 | 94.26 | 107.58 | 1.6:1 | mom_decay/near_resist/low_rr |
| 40 | **NYSE:AIR** | NYSE:AIR | **34.6** | ⚪C | 21.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 99.38 | 91.81 | 109.97 | 1.4:1 | mom_decay/chop |
| 41 | **NASDAQ:GEN** | NASDAQ:GEN | **33** | ⚪C | 23.6 | 47 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 24.32 | 22.9 | 26.22 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/low_rr |
| 42 | **NASDAQ:LITE** | NASDAQ:LITE | **32.2** | ⚪C | 21.6 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 876.74 | 715.63 | 1064.55 | 1.2:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:ADI (NASDAQ:ADI)

| Field | Value |
|-------|-------|
| Combined Score | **64.3** |
| Tech Score | 46.1 (Trend Follow (HH/HL Intact)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 414.31 |
| **Entry** | **414.31** |
| **Stop** | **395.67** (ATR × 1.5) |
| **Target** | **441.65** |
| R/R | 1.5:1 |
| RSI | 60.7 |
| ATR% | 3% |
| Dist EMA20 | 2.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 2. NYSE:HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **61.8** |
| Tech Score | 48 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 32.62 |
| **Entry** | **32.62** |
| **Stop** | **30.61** (ATR × 1.5) |
| **Target** | **35.56** |
| R/R | 1.5:1 |
| RSI | 66.5 |
| ATR% | 4.1% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | low_rr |

### 3. NYSE:CIEN (NYSE:CIEN)

| Field | Value |
|-------|-------|
| Combined Score | **54.8** |
| Tech Score | 33.6 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → WARN Long (Cautious) |
| Current Price | 541.92 |
| **Entry** | **541.92** |
| **Stop** | **485.02** (ATR × 1.5) |
| **Target** | **625.38** |
| R/R | 1.5:1 |
| RSI | 54.2 |
| ATR% | 7% |
| Dist EMA20 | 1.2% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay |

### 4. NASDAQ:GOOGL (NASDAQ:GOOGL)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 36.1 (Pullback Buy (Near Support)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 387.66 |
| **Entry** | **381.85** |
| **Stop** | **364.4** (ATR × 2) |
| **Target** | **410.92** |
| R/R | 1.7:1 |
| RSI | 62.1 |
| ATR% | 3% |
| Dist EMA20 | 2.4% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay bear_div |

### 5. NASDAQ:INTC (NASDAQ:INTC)

| Field | Value |
|-------|-------|
| Combined Score | **52** |
| Tech Score | 35.7 (Trend Continuation) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 110.8 |
| **Entry** | **110.8** |
| **Stop** | **96.17** (ATR × 1.5) |
| **Target** | **132.25** |
| R/R | 1.5:1 |
| RSI | 63.3 |
| ATR% | 8.8% |
| Dist EMA20 | 8.7% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay low_rr |

### 6. NYSE:MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 37.8 (Breakout (Squeeze Release)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 189.58 |
| **Entry** | **190.15** |
| **Stop** | **181.73** (ATR × 1.8) |
| **Target** | **200.48** |
| R/R | 1.2:1 |
| RSI | 53.4 |
| ATR% | 2.3% |
| Dist EMA20 | 0% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 7. NASDAQ:BGC (NASDAQ:BGC)

| Field | Value |
|-------|-------|
| Combined Score | **51.2** |
| Tech Score | 34.3 (Breakout (Squeeze Release)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 11.31 |
| **Entry** | **11.34** |
| **Stop** | **10.7** (ATR × 1.8) |
| **Target** | **12.16** |
| R/R | 1.3:1 |
| RSI | 55.1 |
| ATR% | 3% |
| Dist EMA20 | 1% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist bear_div low_rr |

### 8. NASDAQ:EQIX (NASDAQ:EQIX)

| Field | Value |
|-------|-------|
| Combined Score | **45.2** |
| Tech Score | 31.4 (Pullback Buy (Near Support)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 1048.43 |
| **Entry** | **1032.7** |
| **Stop** | **1004.4** (ATR × 2) |
| **Target** | **1092.46** |
| R/R | 2.1:1 |
| RSI | 44.1 |
| ATR% | 2.1% |
| Dist EMA20 | -1.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NYSE:CF** | NYSE:CF | 64.2 | 48 | 76(hot) | 127.86 | **120.19** | 116.86 | 138.86 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/20 23:03:39*