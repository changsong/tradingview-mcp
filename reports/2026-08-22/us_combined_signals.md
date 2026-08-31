# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-22　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **72.8** | ⚪C | 88 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 40.44 | 38.92 | 43.2 | 1.8:1 | OK |
| 2 | **LLY** | NYSE:LLY | **67.3** | ⚪C | 70.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 1255.4 | 1187.61 | 1354.83 | 1.5:1 | near_resist |
| 3 | **MRVL** | NASDAQ:MRVL | **61.9** | 🟢A | 52.9 | 63 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 237.04 | 210.73 | 275.63 | 1.5:1 | chop |
| 4 | **DASH** | NASDAQ:DASH | **57.6** | ⚪C | 62.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 220.14 | 207.4 | 239.58 | 1.5:1 | bear_div |
| 5 | **LTC** | NYSE:LTC | **55.1** | ⚪C | 55.2 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 39.67 | 38.42 | 42.12 | 2:1 | near_resist/chop/low_rr |
| 6 | **ADAM** | NASDAQ:ADAM | **54.5** | ⚪C | 49.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 9.94 | 9.58 | 10.46 | 1.4:1 | low_rr |
| 7 | **MNST** | NASDAQ:MNST | **52.5** | ⚪C | 52.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 47.07 | 45.4 | 50.18 | 1.9:1 | near_resist/chop |
| 8 | **VRTX** | NASDAQ:VRTX | **51.2** | ⚪C | 43.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 548.05 | 520.92 | 587.84 | 1.5:1 | fake_break/near_resist/bear_div |
| 9 | **P** | NYSE:P | **51** | ⚪C | 43.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 108.55 | 99.59 | 121.68 | 1.5:1 | low_rr |
| 10 | **SBCF** | NASDAQ:SBCF | **49.4** | ⚪C | 49 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.1 | 33.44 | 35.8 | 2.6:1 | mom_decay/near_resist |
| 11 | **AGM** | NYSE:AGM | **49.4** | ⚪C | 49 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.1 | 33.44 | 35.8 | 2.6:1 | mom_decay/near_resist |
| 12 | **GRAL** | NASDAQ:GRAL | **48.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 79.54 | 71.31 | 91.61 | 1.5:1 | chop/bear_div |
| 13 | **RIO** | NYSE:RIO | **44.2** | ⚪C | 32 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 105.3 | 101.51 | 110.86 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 14 | **OTC:ABBNY** | OTC:ABBNY | **42.8** | ⚪C | 38 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 98.68 | 96.37 | 103.99 | 2.3:1 | near_resist/chop/low_rr |
| 15 | **CET** | AMEX:CET | **41.5** | ⚪C | 35.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 54.77 | 53.7 | 56.19 | 1.3:1 | mom_decay/near_resist/low_rr |
| 16 | **WT** | NYSE:WT | **38.1** | ⚪C | 30.1 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 23.51 | 20.69 | 27.27 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 17 | **SCCO** | NYSE:SCCO | **33.6** | ⚪C | 22.7 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 216 | 203.36 | 232.85 | 1.3:1 | overheated/near_resist/chop/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **61.9** |
| Tech Score | 52.9 (Trend Follow (HH/HL Intact)) |
| News Score | 63 → GREEN Long (Mid) |
| Current Price | 237.04 |
| **Entry** | **237.04** |
| **Stop** | **210.73** (ATR × 1.5) |
| **Target** | **275.63** |
| R/R | 1.5:1 |
| RSI | 55.8 |
| ATR% | 7.4% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/22 21:00:04*