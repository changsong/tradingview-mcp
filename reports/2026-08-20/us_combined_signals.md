# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-20　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LOAR** | NYSE:LOAR | **63.8** | ⚪C | 71.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 75.34 | 69.61 | 83.37 | 1.4:1 | OK |
| 2 | **MRVL** | NASDAQ:MRVL | **60.2** | 🟢A | 51.4 | 61 | GREEN Long (Mid) | Trend Continuation | 237.27 | 211.29 | 275.38 | 1.5:1 | chop |
| 3 | **RRC** | NYSE:RRC | **56.8** | ⚪C | 61.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 39.72 | 38.14 | 42.5 | 1.8:1 | near_resist |
| 4 | **PATH** | NYSE:PATH | **56.5** | ⚪C | 60.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 15.54 | 14.01 | 17.55 | 1.3:1 | OK |
| 5 | **LTC** | NYSE:LTC | **54.7** | ⚪C | 51.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 40.31 | 38.8 | 42.33 | 1.3:1 | near_resist/low_rr |
| 6 | **FCX** | NYSE:FCX | **50.6** | ⚪C | 42.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 69.09 | 65.26 | 74.71 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **VRTX** | NASDAQ:VRTX | **50.4** | ⚪C | 42.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 552.06 | 525.56 | 590.93 | 1.5:1 | fake_break/bull_trap/near_resist |
| 8 | **HRMY** | NASDAQ:HRMY | **49.9** | ⚪C | 41.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.93 | 37.83 | 43 | 1.5:1 | fake_break/near_resist/low_rr |
| 9 | **JOE** | NYSE:JOE | **49.7** | ⚪C | 41.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 69.96 | 67.23 | 73.96 | 1.5:1 | bull_trap/near_resist/low_rr |
| 10 | **OTC:ABBNY** | OTC:ABBNY | **49** | ⚪C | 48.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 99.51 | 97.19 | 104.87 | 2.3:1 | near_resist/chop |
| 11 | **GRMN** | NYSE:GRMN | **48.1** | ⚪C | 38.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 295.67 | 283.7 | 313.23 | 1.5:1 | mom_decay/low_rr |
| 12 | **LLY** | NYSE:LLY | **46.1** | ⚪C | 35.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 1280.34 | 1211.2 | 1381.74 | 1.5:1 | near_resist/chop/bear_div |
| 13 | **RIO** | NYSE:RIO | **44.5** | ⚪C | 40.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 98.93 | 95.82 | 105.06 | 2:1 | near_resist/chop/bear_div/low_rr |
| 14 | **VKTX** | NASDAQ:VKTX | **42.6** | ⚪C | 37.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.44 | 33.32 | 38.64 | 1.5:1 | near_resist/low_rr |
| 15 | **AGM** | NYSE:AGM | **42.4** | ⚪C | 37.3 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 226.93 | 215.7 | 241.91 | 1.3:1 | mom_decay/low_rr |
| 16 | **HEI** | NYSE:HEI | **41** | ⚪C | 33.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 357.97 | 346.7 | 380.14 | 2:1 | mom_decay/near_resist |
| 17 | **CET** | AMEX:CET | **40.9** | ⚪C | 34.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 54.7 | 53.55 | 56.23 | 1.3:1 | mom_decay/near_resist/low_rr |
| 18 | **DASH** | NASDAQ:DASH | **40.3** | ⚪C | 33.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 216.92 | 204.8 | 235.64 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 19 | **ADAM** | NASDAQ:ADAM | **39.9** | ⚪C | 24.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 10.18 | 9.8 | 10.74 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 20 | **SBCF** | NASDAQ:SBCF | **39** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.58 | 33.78 | 36.44 | 2.3:1 | mom_decay/near_resist/low_rr |
| 21 | **SCCO** | NYSE:SCCO | **38.8** | ⚪C | 23 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 194.68 | 183.29 | 211.38 | 1.5:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 22 | **HOOD** | NASDAQ:HOOD | **38.5** | ⚪C | 30.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 94.33 | 86.58 | 104.96 | 1.4:1 | chop |
| 23 | **GRAL** | NASDAQ:GRAL | **37.1** | ⚪C | 20.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 73.96 | 59.43 | 95.28 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 24 | **SON** | NYSE:SON | **35.8** | ⚪C | 26.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 57.03 | 55.24 | 60.56 | 2:1 | mom_decay/near_resist/chop/low_rr |
| 25 | **P** | NYSE:P | **35.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 112 | 102.93 | 124.1 | 1.3:1 | overheated |
| 26 | **WT** | NYSE:WT | **33.3** | ⚪C | 20.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 22.7 | 19.91 | 26.42 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 27 | **NASDAQ:MNST** | NASDAQ:MNST | **26** | ⚪C | 43.4 | 0 | No data | Reversal (MACD Cross) | 47.43 | 45.51 | 49.99 | 1.3:1 | chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **60.2** |
| Tech Score | 51.4 (Trend Continuation) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 237.27 |
| **Entry** | **237.27** |
| **Stop** | **211.29** (ATR × 1.5) |
| **Target** | **275.38** |
| R/R | 1.5:1 |
| RSI | 57.5 |
| ATR% | 7.3% |
| Dist EMA20 | 9.7% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/20 21:59:31*