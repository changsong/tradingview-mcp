# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-01　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **GLW** | NYSE:GLW | **59.7** | 🟢A | 45.1 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 219.67 | 189.36 | 264.13 | 1.5:1 | OK |
| 2 | **NBN** | NASDAQ:NBN | **59.1** | ⚪C | 56.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 135.95 | 128.4 | 147.02 | 1.5:1 | low_rr |
| 3 | **JCI** | NYSE:JCI | **57.9** | ⚪C | 54.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 146.67 | 129.38 | 169.63 | 1.3:1 | mom_decay/near_resist/low_rr |
| 4 | **PWR** | NYSE:PWR | **57** | 🟢A | 48.4 | 70 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 691.46 | 646.86 | 750.93 | 1.3:1 | mom_decay/chop |
| 5 | **ASML** | NASDAQ:ASML | **55.2** | 🔵B | 25 | 88 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1873.58 | 1724.63 | 2092.04 | 1.5:1 | mom_decay/bear_div/low_rr |
| 6 | **INCY** | NASDAQ:INCY | **52.3** | 🟢A | 32.8 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 113.64 | 107.33 | 122.89 | 1.5:1 | near_resist/bear_div |
| 7 | **NWBI** | NASDAQ:NWBI | **50.8** | ⚪C | 43 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.39 | 14.97 | 16 | 1.5:1 | fake_break/bull_trap/near_resist |
| 8 | **CRWD** | NASDAQ:CRWD | **49.3** | 🔵B | 25.9 | 72 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 773.21 | 725.66 | 842.95 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |
| 9 | **MNST** | NASDAQ:MNST | **49** | ⚪C | 37.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 97.55 | 94.77 | 101.63 | 1.5:1 | fake_break/bull_trap/near_resist |
| 10 | **ARM** | NASDAQ:ARM | **48.8** | 🔵B | 20.4 | 79 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 336.44 | 281.94 | 416.38 | 1.5:1 | mom_decay |
| 11 | **KLAC** | NASDAQ:KLAC | **48.5** | ⚪C | 37.2 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 272.07 | 240.24 | 318.76 | 1.5:1 | bear_div |
| 12 | **ADEA** | NASDAQ:ADEA | **46.9** | ⚪C | 36.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 32.06 | 28.45 | 36.83 | 1.3:1 | low_rr |
| 13 | **KALU** | NASDAQ:KALU | **46.8** | ⚪C | 36.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 184.77 | 168.63 | 205.87 | 1.3:1 | chop/low_rr |
| 14 | **MRVL** | NASDAQ:MRVL | **45.6** | ⚪C | 36.4 | 47 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 281.16 | 231.38 | 348.3 | 1.3:1 | mom_decay/low_rr |
| 15 | **TRNO** | NYSE:TRNO | **44.3** | ⚪C | 30.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 65.6 | 62.81 | 69 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 16 | **GNRC** | NYSE:GNRC | **41.8** | 🔵B | 20.7 | 61 | GREEN Long (Mid) | Trend Continuation | 279.02 | 256 | 312.78 | 1.5:1 | chop/low_rr |
| 17 | **AIR** | NYSE:AIR | **41.3** | ⚪C | 27.9 | 49 | NEUTRAL No Trade (Neutral) | Trend Continuation | 145.2 | 137.14 | 157.02 | 1.5:1 | fake_break/bull_trap/mom_decay/near_resist |
| 18 | **BE** | NYSE:BE | **40.1** | ⚪C | 25.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 299.49 | 250.07 | 371.97 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **NVT** | NYSE:NVT | **39.8** | ⚪C | 22 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 161.71 | 145.85 | 182.59 | 1.3:1 | mom_decay/chop/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. GLW (NYSE:GLW)

| Field | Value |
|-------|-------|
| Combined Score | **59.7** |
| Tech Score | 45.1 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 219.67 |
| **Entry** | **219.67** |
| **Stop** | **189.36** (ATR × 1.5) |
| **Target** | **264.13** |
| R/R | 1.5:1 |
| RSI | 55.4 |
| ATR% | 9.2% |
| Dist EMA20 | 6% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | None |

### 2. PWR (NYSE:PWR)

| Field | Value |
|-------|-------|
| Combined Score | **57** |
| Tech Score | 48.4 (Reversal (Bullish RSI Divergence)) |
| News Score | 70 → GREEN Long (Mid) |
| Current Price | 691.46 |
| **Entry** | **691.46** |
| **Stop** | **646.86** (ATR × 1.5) |
| **Target** | **750.93** |
| R/R | 1.3:1 |
| RSI | 46.9 |
| ATR% | 4.3% |
| Dist EMA20 | -2.3% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay chop |

### 3. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **52.3** |
| Tech Score | 32.8 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 113.64 |
| **Entry** | **113.64** |
| **Stop** | **107.33** (ATR × 1.5) |
| **Target** | **122.89** |
| R/R | 1.5:1 |
| RSI | 66.9 |
| ATR% | 3.7% |
| Dist EMA20 | 7.1% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist bear_div |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/1 22:56:07*