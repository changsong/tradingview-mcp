# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-23　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LLY** | NYSE:LLY | **68** | ⚪C | 71.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 1255.4 | 1187.61 | 1354.83 | 1.5:1 | near_resist |
| 2 | **MRVL** | NASDAQ:MRVL | **63.5** | 🟢A | 56.8 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 237.04 | 210.73 | 275.63 | 1.5:1 | chop |
| 3 | **CET** | AMEX:CET | **59.2** | ⚪C | 57 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 54.93 | 52.11 | 58.47 | 1.3:1 | near_resist/chop |
| 4 | **LTC** | NYSE:LTC | **55.7** | ⚪C | 56.8 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 39.67 | 38.42 | 42.12 | 2:1 | near_resist/chop/low_rr |
| 5 | **MNST** | NASDAQ:MNST | **55** | ⚪C | 52.3 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 47.07 | 45.4 | 50.18 | 1.9:1 | near_resist/chop |
| 6 | **JOE** | NYSE:JOE | **54.6** | ⚪C | 57.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 67.86 | 65.58 | 72.2 | 1.9:1 | near_resist/low_rr |
| 7 | **ADAM** | NASDAQ:ADAM | **53.3** | ⚪C | 47.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.94 | 9.58 | 10.46 | 1.4:1 | low_rr |
| 8 | **GRMN** | NYSE:GRMN | **52.7** | ⚪C | 46.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 294.85 | 284.24 | 310.42 | 1.5:1 | mom_decay/low_rr |
| 9 | **FCX** | NYSE:FCX | **51.9** | ⚪C | 53.2 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 76.66 | 72.29 | 82.49 | 1.3:1 | overheated/near_resist/chop |
| 10 | **SBCF** | NASDAQ:SBCF | **51.4** | ⚪C | 52.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.1 | 33.44 | 35.8 | 2.6:1 | mom_decay/near_resist |
| 11 | **VRTX** | NASDAQ:VRTX | **51.3** | ⚪C | 43.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 548.05 | 520.92 | 587.84 | 1.5:1 | fake_break/near_resist/bear_div |
| 12 | **WT** | NYSE:WT | **50.5** | ⚪C | 42.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 23.51 | 22.21 | 25.42 | 1.5:1 | fake_break/near_resist/bear_div |
| 13 | **LOAR** | NYSE:LOAR | **50.4** | ⚪C | 42.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 75 | 69.94 | 82.42 | 1.5:1 | near_resist/low_rr |
| 14 | **GRAL** | NASDAQ:GRAL | **48.5** | ⚪C | 39.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 79.54 | 71.31 | 91.61 | 1.5:1 | chop/bear_div |
| 15 | **RRC** | NYSE:RRC | **47.1** | ⚪C | 34.2 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 41.06 | 37.43 | 46.39 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **NBIS** | NASDAQ:NBIS | **44.8** | ⚪C | 33 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 219.13 | 130.71 | 348.81 | 1.5:1 | mom_decay/low_rr |
| 17 | **HOOD** | NASDAQ:HOOD | **44.1** | ⚪C | 38.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 108.13 | 84.94 | 139.06 | 1.3:1 | overheated/chop |
| 18 | **OTC:ABBNY** | OTC:ABBNY | **42.4** | ⚪C | 37.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 98.68 | 96.37 | 103.99 | 2.3:1 | near_resist/chop/low_rr |
| 19 | **PATH** | NYSE:PATH | **41.3** | ⚪C | 35.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 16.14 | 14.59 | 18.19 | 1.3:1 | fake_break/near_resist/low_rr |
| 20 | **HRMY** | NASDAQ:HRMY | **38.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.58 | 35.33 | 40.97 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 21 | **WPM** | NYSE:WPM | **34.9** | ⚪C | 24.9 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 157.78 | 148.55 | 170.09 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist/bear_div/low_rr |
| 22 | **SCCO** | NYSE:SCCO | **33.2** | ⚪C | 22 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 216 | 203.36 | 232.85 | 1.3:1 | overheated/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **63.5** |
| Tech Score | 56.8 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 237.04 |
| **Entry** | **237.04** |
| **Stop** | **210.73** (ATR × 1.5) |
| **Target** | **275.63** |
| R/R | 1.5:1 |
| RSI | 55.8 |
| ATR% | 7.4% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 2/2 (100%) |
| Risk Flags | chop |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/23 21:00:04*