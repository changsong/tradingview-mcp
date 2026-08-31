# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-26　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **68.7** | ⚪C | 75.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 40.38 | 39.1 | 42.88 | 2:1 | OK |
| 2 | **JOE** | NYSE:JOE | **55.7** | ⚪C | 59.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.47 | 66.31 | 72.71 | 2:1 | fake_break/near_resist/low_rr |
| 3 | **CET** | AMEX:CET | **54** | ⚪C | 56.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.46 | 53.96 | 56.62 | 4.3:1 | mom_decay/near_resist/low_rr |
| 4 | **MRVL** | NASDAQ:MRVL | **52.2** | ⚪C | 45.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 240.38 | 214.78 | 277.93 | 1.5:1 | chop |
| 5 | **OTC:SBGSY** | OTC:SBGSY | **51.1** | ⚪C | 51.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.16 | 66.71 | 71.69 | 2.4:1 | mom_decay/chop |
| 6 | **NEXA** | NYSE:NEXA | **50.9** | ⚪C | 41.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 15.82 | 14.51 | 17.73 | 1.5:1 | near_resist/chop/low_rr |
| 7 | **LLY** | NYSE:LLY | **48.8** | ⚪C | 39.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 1233.66 | 1172.59 | 1323.22 | 1.5:1 | near_resist/low_rr |
| 8 | **P** | NYSE:P | **46.9** | ⚪C | 31.9 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 102.81 | 93.4 | 116.61 | 1.5:1 | mom_decay/low_rr |
| 9 | **MNST** | NASDAQ:MNST | **43.4** | ⚪C | 29.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 48.73 | 45.29 | 53.77 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 10 | **OSBC** | NASDAQ:OSBC | **41.9** | ⚪C | 36.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.81 | 24.38 | 26 | 2.8:1 | mom_decay/near_resist/bear_div |
| 11 | **LTC** | NYSE:LTC | **41.9** | ⚪C | 26.1 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 40.69 | 39.29 | 42.75 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **FWONA** | NASDAQ:FWONA | **41.1** | ⚪C | 35.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 94.82 | 91.25 | 101.27 | 1.8:1 | near_resist/low_rr |
| 13 | **GEN** | NASDAQ:GEN | **39.8** | 🔵B | 25.7 | 61 | GREEN Long (Mid) | Pullback Buy (Near Support) | 28.87 | 27.2 | 31.42 | 1.5:1 | mom_decay/near_resist/chop/bear_div |
| 14 | **ADAM** | NASDAQ:ADAM | **39.3** | ⚪C | 23.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.84 | 9.5 | 10.34 | 1.5:1 | mom_decay/near_resist/low_rr |
| 15 | **APD** | NYSE:APD | **37.5** | ⚪C | 29.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 299.29 | 291.7 | 316 | 2.2:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **BHRB** | NASDAQ:BHRB | **35.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 70.68 | 65.16 | 78.36 | 1.4:1 | near_resist/chop |
| 17 | **HOOD** | NASDAQ:HOOD | **35.1** | ⚪C | 25.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 110.41 | 100.66 | 123.52 | 1.3:1 | overheated/near_resist/chop/low_rr |
| 18 | **FCX** | NYSE:FCX | **34.2** | ⚪C | 23.7 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 79.91 | 75.71 | 85.5 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 19 | **HRMY** | NASDAQ:HRMY | **32.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.37 | 36.69 | 41.21 | 1.7:1 | mom_decay/near_resist/bear_div/low_rr |

---

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/26 21:00:12*