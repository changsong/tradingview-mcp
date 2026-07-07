# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-06　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NBN** | NASDAQ:NBN | **61.6** | ⚪C | 61 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 136.3 | 128.94 | 147.09 | 1.5:1 | low_rr |
| 2 | **AAPL** | NASDAQ:AAPL | **57.9** | 🟢A | 43.8 | 79 | GREEN Long (Strong) | Pullback Buy (Near Support) | 304.16 | 291.5 | 326.08 | 1.7:1 | near_resist |
| 3 | **MNST** | NASDAQ:MNST | **56** | ⚪C | 51.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 96.99 | 94.23 | 101.04 | 1.5:1 | near_resist |
| 4 | **NBIX** | NASDAQ:NBIX | **55.9** | ⚪C | 46.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 172.25 | 165.28 | 182.49 | 1.5:1 | near_resist/bear_div |
| 5 | **NWBI** | NASDAQ:NWBI | **54.3** | ⚪C | 48.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.2 | 14.77 | 15.84 | 1.5:1 | near_resist/low_rr |
| 6 | **DUK** | NYSE:DUK | **51.2** | ⚪C | 50.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 126.33 | 124.15 | 132.35 | 2.8:1 | near_resist/chop/low_rr |
| 7 | **HRMY** | NASDAQ:HRMY | **50.2** | ⚪C | 50.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 36.29 | 34.78 | 38.9 | 1.7:1 | near_resist/low_rr |
| 8 | **INCY** | NASDAQ:INCY | **49.4** | ⚪C | 38.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 114.48 | 108.3 | 123.55 | 1.5:1 | near_resist/bear_div |
| 9 | **APH** | NYSE:APH | **48.9** | 🔵B | 29.8 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 167.36 | 156.82 | 182.82 | 1.5:1 | near_resist/low_rr |
| 10 | **NPB** | NYSE:NPB | **48.1** | ⚪C | 37.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 18.93 | 18.13 | 20.09 | 1.4:1 | near_resist/low_rr |
| 11 | **SXI** | NYSE:SXI | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 335.39 | 311.24 | 370.81 | 1.5:1 | low_rr |
| 12 | **TRNO** | NYSE:TRNO | **43.7** | ⚪C | 31.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 67.56 | 65.33 | 70.83 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 13 | **AIR** | NYSE:AIR | **41.8** | ⚪C | 31.4 | 45 | NEUTRAL No Trade (Neutral) | Trend Continuation | 142.9 | 134.97 | 154.53 | 1.5:1 | bull_trap/near_resist |
| 14 | **FOR** | NYSE:FOR | **39.9** | ⚪C | 24.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 30.97 | 29.53 | 33.08 | 1.5:1 | near_resist/low_rr |
| 15 | **SN** | NYSE:SN | **38.4** | ⚪C | 22.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 151.72 | 143.75 | 163.4 | 1.5:1 | fake_break/bull_trap/near_resist |
| 16 | **CRWD** | NASDAQ:CRWD | **35.9** | ⚪C | 27.2 | 49 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 205.12 | 192.51 | 221.94 | 1.3:1 | overheated/fake_break/bull_trap/mom_decay/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **57.9** |
| Tech Score | 43.8 (Pullback Buy (Near Support)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 308.79 |
| **Entry** | **304.16** |
| **Stop** | **291.5** (ATR × 2) |
| **Target** | **326.08** |
| R/R | 1.7:1 |
| RSI | 60.4 |
| ATR% | 2.8% |
| Dist EMA20 | 4.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/6 21:55:08*