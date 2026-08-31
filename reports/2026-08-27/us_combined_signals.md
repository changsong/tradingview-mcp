# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-27　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **58.1** | ⚪C | 62.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.67 | 39.23 | 43.35 | 1.9:1 | OK |
| 2 | **CBOE** | CBOE:CBOE | **51** | ⚪C | 45.4 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 315.3 | 301.11 | 336.11 | 1.5:1 | chop |
| 3 | **FIVE** | NASDAQ:FIVE | **49.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 252.36 | 239.11 | 271.79 | 1.5:1 | low_rr |
| 4 | **CET** | AMEX:CET | **43.8** | ⚪C | 39.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.17 | 53.68 | 56.32 | 4.4:1 | mom_decay/near_resist/chop/low_rr |
| 5 | **LTC** | NYSE:LTC | **43.7** | ⚪C | 29.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 40.94 | 39.71 | 42.74 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 6 | **MRVL** | NASDAQ:MRVL | **42.8** | ⚪C | 38 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 240.57 | 211.99 | 276.47 | 1.3:1 | near_resist/chop |
| 7 | **OTC:SBGSY** | OTC:SBGSY | **41.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.36 | 67.05 | 71.76 | 2.6:1 | mom_decay/near_resist/chop |
| 8 | **JOE** | NYSE:JOE | **40.7** | ⚪C | 34.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 67.73 | 65.73 | 71.79 | 2:1 | near_resist/bear_div/low_rr |
| 9 | **LLY** | NYSE:LLY | **40.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1165.26 | 1104.93 | 1261.09 | 1.6:1 | mom_decay/chop |
| 10 | **OSBC** | NASDAQ:OSBC | **40.3** | ⚪C | 33.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.6 | 24.17 | 25.77 | 2.7:1 | mom_decay |
| 11 | **APD** | NYSE:APD | **39.9** | ⚪C | 33.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 300.62 | 292.99 | 317.41 | 2.2:1 | mom_decay/near_resist/chop/low_rr |
| 12 | **FCX** | NYSE:FCX | **39.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 79.2 | 75.04 | 85.3 | 1.5:1 | fake_break/bull_trap/near_resist |
| 13 | **NEXA** | NYSE:NEXA | **39** | ⚪C | 30.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 13.67 | 12.08 | 15.68 | 1.3:1 | near_resist/chop |
| 14 | **HOOD** | NASDAQ:HOOD | **37.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 108.63 | 98.59 | 121.97 | 1.3:1 | fake_break/near_resist/low_rr |
| 15 | **ADAM** | NASDAQ:ADAM | **37.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.85 | 9.54 | 10.31 | 1.5:1 | mom_decay/near_resist/low_rr |
| 16 | **DASH** | NASDAQ:DASH | **36.2** | ⚪C | 25 | 53 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 230.72 | 203.73 | 266.71 | 1.3:1 | overheated/fake_break/near_resist/low_rr |
| 17 | **FWONA** | NASDAQ:FWONA | **35.4** | ⚪C | 25.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 93.31 | 90.75 | 98.71 | 2.1:1 | mom_decay/near_resist/low_rr |
| 18 | **MNST** | NASDAQ:MNST | **32.9** | ⚪C | 20.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 46.04 | 44.4 | 49.08 | 1.9:1 | near_resist/chop/low_rr |

---

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/27 22:52:33*