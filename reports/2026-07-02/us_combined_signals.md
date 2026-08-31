# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-02　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **TRNO** | NYSE:TRNO | **62.8** | ⚪C | 61.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.62 | 63.79 | 70.07 | 1.2:1 | near_resist/chop/low_rr |
| 2 | **JCI** | NYSE:JCI | **57.7** | 🟢A | 39.1 | 73 | GREEN Long (Mid) | Breakout (Squeeze Release) | 144.23 | 134.74 | 156.38 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 3 | **PWR** | NYSE:PWR | **57.3** | 🟢A | 42.9 | 79 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 689.61 | 648.23 | 744.78 | 1.3:1 | mom_decay/chop |
| 4 | **INCY** | NASDAQ:INCY | **51.3** | 🟢A | 31.2 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 113.8 | 108 | 122.31 | 1.5:1 | near_resist/bear_div |
| 5 | **DELL** | NYSE:DELL | **50.6** | 🟢A | 34.7 | 62 | GREEN Long (Mid) | Breakout (Squeeze Release) | 426.53 | 371.67 | 499.67 | 1.3:1 | mom_decay/low_rr |
| 6 | **NWBI** | NASDAQ:NWBI | **49.6** | ⚪C | 41 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.44 | 15.02 | 16.05 | 1.5:1 | fake_break/bull_trap/near_resist |
| 7 | **KALU** | NASDAQ:KALU | **49.1** | ⚪C | 40.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 187.27 | 172.25 | 206.78 | 1.3:1 | mom_decay/chop/low_rr |
| 8 | **GLW** | NYSE:GLW | **48.3** | ⚪C | 32.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 217.48 | 187.14 | 261.98 | 1.5:1 | OK |
| 9 | **ASML** | NASDAQ:ASML | **46.8** | 🔵B | 25 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1829.59 | 1692.37 | 2030.84 | 1.5:1 | mom_decay/bear_div/low_rr |
| 10 | **NBN** | NASDAQ:NBN | **46.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 138.07 | 130.62 | 149.01 | 1.5:1 | bull_trap/near_resist/low_rr |
| 11 | **PACS** | NYSE:PACS | **46** | 🔵B | 21.4 | 83 | GREEN Long (Strong) | Overextended Chase (High Risk) | 44.73 | 41.64 | 48.85 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 12 | **MNST** | NASDAQ:MNST | **45.4** | ⚪C | 32 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 97.84 | 95.05 | 101.93 | 1.5:1 | fake_break/bull_trap/near_resist |
| 13 | **ADEA** | NASDAQ:ADEA | **45.3** | ⚪C | 33.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 32.08 | 28.82 | 36.38 | 1.3:1 | near_resist/low_rr |
| 14 | **SANM** | NASDAQ:SANM | **44.6** | 🔵B | 25.4 | 61 | GREEN Long (Mid) | Breakout (Squeeze Release) | 245.53 | 219.24 | 280.3 | 1.3:1 | mom_decay/chop/low_rr |
| 15 | **MRVL** | NASDAQ:MRVL | **44.1** | ⚪C | 28.5 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 267.42 | 228.91 | 323.9 | 1.5:1 | mom_decay |
| 16 | **CRWD** | NASDAQ:CRWD | **44.1** | 🔵B | 19.8 | 68 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 193.21 | 182.2 | 209.36 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 17 | **ARM** | NASDAQ:ARM | **42.9** | 🔵B | 17.1 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 341.34 | 290.14 | 416.43 | 1.5:1 | OK |
| 18 | **ADI** | NASDAQ:ADI | **42.4** | 🔵B | 18.7 | 78 | GREEN Long (Strong) | Pullback Buy (Near Support) | 389.21 | 359.58 | 430.7 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **AMD** | NASDAQ:AMD | **41.9** | 🔵B | 16.8 | 67 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 536.43 | 484.93 | 611.96 | 1.5:1 | mom_decay/near_resist/low_rr |
| 20 | **AMAT** | NASDAQ:AMAT | **41.8** | ⚪C | 33.4 | 42 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 644.17 | 573.63 | 747.62 | 1.5:1 | bear_div |
| 21 | **BE** | NYSE:BE | **37.5** | ⚪C | 20.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 292.24 | 243.58 | 363.61 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 22 | **AIR** | NYSE:AIR | **35.9** | ⚪C | 20.2 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 143.27 | 136.18 | 153.67 | 1.5:1 | fake_break/bull_trap/near_resist |
| 23 | **MU** | NASDAQ:MU | **32.4** | ⚪C | 24 | 45 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 1013.83 | 829.59 | 1228.95 | 1.2:1 | mom_decay/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **57.7** |
| Tech Score | 39.1 (Breakout (Squeeze Release)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 143.8 |
| **Entry** | **144.23** |
| **Stop** | **134.74** (ATR × 1.8) |
| **Target** | **156.38** |
| R/R | 1.3:1 |
| RSI | 51.2 |
| ATR% | 3.5% |
| Dist EMA20 | 0.4% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay near_resist chop low_rr |

### 2. PWR (NYSE:PWR)

| Field | Value |
|-------|-------|
| Combined Score | **57.3** |
| Tech Score | 42.9 (Reversal (Bullish RSI Divergence)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 689.61 |
| **Entry** | **689.61** |
| **Stop** | **648.23** (ATR × 1.5) |
| **Target** | **744.78** |
| R/R | 1.3:1 |
| RSI | 46.5 |
| ATR% | 4% |
| Dist EMA20 | -2.3% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay chop |

### 3. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **51.3** |
| Tech Score | 31.2 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 113.8 |
| **Entry** | **113.8** |
| **Stop** | **108** (ATR × 1.5) |
| **Target** | **122.31** |
| R/R | 1.5:1 |
| RSI | 67.1 |
| ATR% | 3.4% |
| Dist EMA20 | 6.5% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist bear_div |

### 4. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **50.6** |
| Tech Score | 34.7 (Breakout (Squeeze Release)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 425.25 |
| **Entry** | **426.53** |
| **Stop** | **371.67** (ATR × 1.8) |
| **Target** | **499.67** |
| R/R | 1.3:1 |
| RSI | 61.7 |
| ATR% | 7% |
| Dist EMA20 | 6.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/2 21:36:13*