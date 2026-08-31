# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-24　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LLY** | NYSE:LLY | **66.6** | 🟢A | 56 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1255.4 | 1187.61 | 1354.83 | 1.5:1 | near_resist |
| 2 | **DASH** | NASDAQ:DASH | **54.8** | ⚪C | 53.3 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 220.14 | 207.4 | 239.58 | 1.5:1 | bear_div |
| 3 | **MRVL** | NASDAQ:MRVL | **51.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 237.04 | 210.73 | 275.63 | 1.5:1 | chop |
| 4 | **WT** | NYSE:WT | **51.5** | ⚪C | 40.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 23.51 | 22.21 | 25.42 | 1.5:1 | fake_break/near_resist/bear_div |
| 5 | **ADAM** | NASDAQ:ADAM | **50.4** | ⚪C | 42.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.94 | 9.58 | 10.46 | 1.4:1 | low_rr |
| 6 | **GRAL** | NASDAQ:GRAL | **49.8** | ⚪C | 41.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 79.54 | 71.31 | 91.61 | 1.5:1 | chop/bear_div |
| 7 | **VRTX** | NASDAQ:VRTX | **48.9** | ⚪C | 39.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 548.05 | 520.92 | 587.84 | 1.5:1 | fake_break/near_resist/bear_div |
| 8 | **LOAR** | NYSE:LOAR | **48.7** | ⚪C | 39.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 75 | 69.94 | 82.42 | 1.5:1 | near_resist/low_rr |
| 9 | **P** | NYSE:P | **47.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 108.55 | 99.59 | 121.68 | 1.5:1 | low_rr |
| 10 | **HOOD** | NASDAQ:HOOD | **46** | ⚪C | 42 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 106.51 | 97.53 | 118.73 | 1.4:1 | near_resist/chop/low_rr |
| 11 | **LTC** | NYSE:LTC | **45.2** | ⚪C | 39.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 39.67 | 38.42 | 42.12 | 2:1 | near_resist/chop/low_rr |
| 12 | **CET** | AMEX:CET | **42.7** | ⚪C | 37.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 54.77 | 53.7 | 56.19 | 1.3:1 | mom_decay/near_resist/low_rr |
| 13 | **SBCF** | NASDAQ:SBCF | **42** | ⚪C | 36.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.1 | 33.44 | 35.8 | 2.6:1 | mom_decay/near_resist |
| 14 | **VKTX** | NASDAQ:VKTX | **40.6** | ⚪C | 34.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 33.38 | 31.25 | 36.53 | 1.5:1 | near_resist/chop |
| 15 | **SON** | NYSE:SON | **40** | ⚪C | 22.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 59.48 | 57.52 | 62.36 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **NBIS** | NASDAQ:NBIS | **38.3** | ⚪C | 22.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 219.13 | 184.29 | 270.23 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **PATH** | NYSE:PATH | **35.3** | ⚪C | 25.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 16.14 | 14.59 | 18.19 | 1.3:1 | fake_break/near_resist/low_rr |
| 18 | **OTC:ABBNY** | OTC:ABBNY | **35** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 98.68 | 96.37 | 103.99 | 2.3:1 | near_resist/chop/low_rr |
| 19 | **AGM** | NYSE:AGM | **33.6** | ⚪C | 22.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 220.84 | 211.56 | 233.21 | 1.3:1 | mom_decay/low_rr |
| 20 | **HRMY** | NASDAQ:HRMY | **33.1** | ⚪C | 21.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 37.58 | 35.33 | 40.97 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 21 | **HEI** | NYSE:HEI | **32.7** | ⚪C | 21.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 349.71 | 338 | 372.08 | 1.9:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **66.6** |
| Tech Score | 56 (Trend Follow (HH/HL Intact)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 1255.4 |
| **Entry** | **1255.4** |
| **Stop** | **1187.61** (ATR × 1.5) |
| **Target** | **1354.83** |
| R/R | 1.5:1 |
| RSI | 59.4 |
| ATR% | 3.6% |
| Dist EMA20 | 4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/24 21:00:04*