# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-01　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **58.8** | ⚪C | 64.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 40.84 | 39.55 | 43.37 | 2:1 | near_resist |
| 2 | **APD** | NYSE:APD | **54.6** | ⚪C | 57.6 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 308.09 | 299.31 | 319.8 | 1.3:1 | near_resist/chop/low_rr |
| 3 | **FCX** | NYSE:FCX | **51.5** | ⚪C | 44.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 76.45 | 72.21 | 82.67 | 1.5:1 | OK |
| 4 | **JOE** | NYSE:JOE | **50.3** | ⚪C | 48.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 66.31 | 64.49 | 70.15 | 2.1:1 | mom_decay/near_resist/bear_div |
| 5 | **FIVE** | NASDAQ:FIVE | **49.3** | ⚪C | 48.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 238.26 | 223.51 | 260.27 | 1.5:1 | mom_decay/near_resist/low_rr |
| 6 | **NEM** | NYSE:NEM | **49** | ⚪C | 40 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 127.98 | 120.88 | 138.4 | 1.5:1 | near_resist/low_rr |
| 7 | **HOOD** | NASDAQ:HOOD | **48** | ⚪C | 48.7 | 47 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 102.7 | 92.17 | 116.35 | 1.3:1 | OK |
| 8 | **LLY** | NYSE:LLY | **47.9** | 🟢A | 31.9 | 72 | WARN Long (Cautious) | Pullback Buy (Near Support) | 1156.99 | 1099.43 | 1249.79 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 9 | **SBGSY** | OTC:SBGSY | **46.9** | ⚪C | 44.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.79 | 67.47 | 72.21 | 2.6:1 | mom_decay/near_resist/chop/low_rr |
| 10 | **WPM** | NYSE:WPM | **46.4** | ⚪C | 35.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 153.33 | 144.36 | 166.49 | 1.5:1 | near_resist/low_rr |
| 11 | **SCCO** | NYSE:SCCO | **45** | ⚪C | 33.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 209.8 | 196.58 | 229.19 | 1.5:1 | near_resist/low_rr |
| 12 | **VRTX** | NASDAQ:VRTX | **44.6** | ⚪C | 32.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 541.69 | 522.19 | 570.29 | 1.5:1 | near_resist/bear_div/low_rr |
| 13 | **OSBC** | NASDAQ:OSBC | **44.5** | ⚪C | 40.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.86 | 24.48 | 26 | 3:1 | mom_decay/near_resist |
| 14 | **FWONA** | NASDAQ:FWONA | **42.6** | ⚪C | 37.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 92.02 | 89.12 | 97.72 | 2:1 | mom_decay/near_resist/chop |
| 15 | **MRVL** | NASDAQ:MRVL | **41.1** | 🔵B | 28.5 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 213.37 | 183.69 | 249.55 | 1.2:1 | near_resist/chop/low_rr |
| 16 | **ADAM** | NASDAQ:ADAM | **40.2** | ⚪C | 31.4 | 41 | NEUTRAL No Trade (Neutral) | Trend Continuation | 9.8 | 9.49 | 10.25 | 1.5:1 | mom_decay/low_rr |
| 17 | **DASH** | NASDAQ:DASH | **39.4** | ⚪C | 24 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 236.74 | 225.38 | 253.41 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 18 | **CET** | AMEX:CET | **36.7** | ⚪C | 27.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 53.97 | 53.48 | 56.11 | 4.4:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **CBOE** | CBOE:CBOE | **36.5** | ⚪C | 25.1 | 41 | NEUTRAL No Trade (Neutral) | Trend Continuation | 310.45 | 296.48 | 330.94 | 1.5:1 | near_resist/chop/low_rr |
| 20 | **J** | NYSE:J | **33.4** | ⚪C | 22.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 149.7 | 145.6 | 158.36 | 2.1:1 | fake_break/near_resist/bear_div/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. LLY (NYSE:LLY)

| Field | Value |
|-------|-------|
| Combined Score | **47.9** |
| Tech Score | 31.9 (Pullback Buy (Near Support)) |
| News Score | 72 → WARN Long (Cautious) |
| Current Price | 1174.61 |
| **Entry** | **1156.99** |
| **Stop** | **1099.43** (ATR × 2) |
| **Target** | **1249.79** |
| R/R | 1.6:1 |
| RSI | 45.5 |
| ATR% | 3.2% |
| Dist EMA20 | -2.5% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/1 21:14:10*