# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-08-28　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RRC** | NYSE:RRC | **61.5** | ⚪C | 69.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.02 | 39.56 | 43.72 | 1.8:1 | near_resist |
| 2 | **APD** | NYSE:APD | **57.2** | ⚪C | 53.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 306.39 | 277.98 | 343.65 | 1.3:1 | near_resist/low_rr |
| 3 | **TSM** | NYSE:TSM | **56.2** | ⚪C | 52 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 428.58 | 408.84 | 452.94 | 1.2:1 | near_resist/chop/low_rr |
| 4 | **TPC** | NYSE:TPC | **53.7** | ⚪C | 47.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 91.95 | 78.99 | 110.97 | 1.5:1 | low_rr |
| 5 | **FIVE** | NASDAQ:FIVE | **52.5** | ⚪C | 49.9 | 44 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 246.98 | 233.27 | 267.08 | 1.5:1 | near_resist/low_rr |
| 6 | **SCCO** | NYSE:SCCO | **51.7** | ⚪C | 44.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 216.28 | 203.3 | 235.31 | 1.5:1 | near_resist/low_rr |
| 7 | **DT** | NYSE:DT | **50.8** | ⚪C | 43 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 53.43 | 50.38 | 57.9 | 1.5:1 | near_resist/chop |
| 8 | **CBOE** | CBOE:CBOE | **49.4** | ⚪C | 44.7 | 44 | NEUTRAL No Trade (Neutral) | Trend Continuation | 313.95 | 299.82 | 334.67 | 1.5:1 | chop |
| 9 | **PATH** | NYSE:PATH | **49.2** | ⚪C | 40.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 91.95 | 86.57 | 99.84 | 1.5:1 | mom_decay/chop/low_rr |
| 10 | **MRVL** | NASDAQ:MRVL | **48.8** | 🟢A | 30.3 | 64 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 241.45 | 217.18 | 277.04 | 1.5:1 | chop/low_rr |
| 11 | **NVDA** | NASDAQ:NVDA | **45** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 227.98 | 218.06 | 242.53 | 1.5:1 | mom_decay/near_resist/chop/bear_div/low_rr |
| 12 | **TOST** | NYSE:TOST | **44.8** | ⚪C | 41.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.64 | 32.78 | 37.56 | 1.6:1 | mom_decay/near_resist |
| 13 | **FCX** | NYSE:FCX | **44.1** | ⚪C | 40.1 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 78.42 | 68.3 | 91.91 | 1.3:1 | overheated/fake_break/near_resist |
| 14 | **FAF** | NYSE:FAF | **43.4** | ⚪C | 30.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 74.55 | 72.31 | 77.83 | 1.5:1 | mom_decay/chop |
| 15 | **VRTX** | NASDAQ:VRTX | **42** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 547.55 | 498.27 | 613.26 | 1.3:1 | overheated/fake_break/near_resist |
| 16 | **JOE** | NYSE:JOE | **41.7** | ⚪C | 36.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 66.89 | 64.92 | 70.9 | 2:1 | mom_decay/near_resist/bear_div/low_rr |
| 17 | **OTC:SBGSY** | OTC:SBGSY | **41.1** | ⚪C | 35.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 68.27 | 66.95 | 71.67 | 2.6:1 | mom_decay/near_resist/chop |
| 18 | **HOOD** | NASDAQ:HOOD | **39.5** | ⚪C | 32.5 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 109.76 | 86.22 | 141.15 | 1.3:1 | overheated/chop/low_rr |
| 19 | **PANW** | NASDAQ:PANW | **39.5** | ⚪C | 24.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 382.85 | 356.43 | 421.59 | 1.5:1 | mom_decay/low_rr |
| 20 | **FWONA** | NASDAQ:FWONA | **39.4** | ⚪C | 32.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 92.68 | 89.95 | 98.23 | 2:1 | mom_decay/near_resist/low_rr |
| 21 | **BLK** | NYSE:BLK | **37.2** | ⚪C | 27.3 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1150.06 | 1127.87 | 1207.27 | 2.6:1 | mom_decay/near_resist/low_rr |
| 22 | **ADUS** | NASDAQ:ADUS | **36.4** | ⚪C | 27.4 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 118.01 | 107.21 | 132.41 | 1.3:1 | fake_break/near_resist/low_rr |
| 23 | **ADAM** | NASDAQ:ADAM | **35.8** | ⚪C | 26.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 176.15 | 172.75 | 184.91 | 2.6:1 | mom_decay/near_resist/bear_div |
| 24 | **DASH** | NASDAQ:DASH | **34.5** | ⚪C | 24.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1150.06 | 1127.87 | 1207.27 | 2.6:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MRVL (NASDAQ:MRVL)

| Field | Value |
|-------|-------|
| Combined Score | **48.8** |
| Tech Score | 30.3 (Trend Follow (HH/HL Intact)) |
| News Score | 64 → GREEN Long (Mid) |
| Current Price | 241.45 |
| **Entry** | **241.45** |
| **Stop** | **217.18** (ATR × 1.5) |
| **Target** | **277.04** |
| R/R | 1.5:1 |
| RSI | 56.3 |
| ATR% | 6.7% |
| Dist EMA20 | 6.2% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/8/28 21:00:45*