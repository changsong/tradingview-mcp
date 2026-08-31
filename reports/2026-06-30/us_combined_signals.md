# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-30　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **CRWD** | NASDAQ:CRWD | **77.3** | 🟡C+ | 57.8 | 94 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 753.62 | 705.01 | 824.91 | 1.5:1 | low_rr |
| 2 | **INCY** | NASDAQ:INCY | **55.8** | 🟢A | 36.6 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 114.22 | 107.54 | 124.02 | 1.5:1 | fake_break/near_resist |
| 3 | **NBN** | NASDAQ:NBN | **53.9** | ⚪C | 48.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 131.15 | 123.08 | 142.98 | 1.5:1 | near_resist/low_rr |
| 4 | **NWBI** | NASDAQ:NWBI | **53.7** | ⚪C | 47.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.07 | 14.66 | 15.67 | 1.5:1 | near_resist/low_rr |
| 5 | **PWR** | NYSE:PWR | **51.6** | ⚪C | 52.7 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 714.22 | 668.15 | 775.64 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 6 | **GE** | NYSE:GE | **49.7** | 🔵B | 15.2 | 89 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 376.67 | 360.85 | 399.87 | 1.5:1 | fake_break/bull_trap/mom_decay/near_resist/low_rr |
| 7 | **ARM** | NASDAQ:ARM | **49.5** | 🔵B | 22.9 | 77 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 350.97 | 296.75 | 430.5 | 1.5:1 | mom_decay |
| 8 | **JCI** | NYSE:JCI | **48.1** | ⚪C | 37.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 144.08 | 134.34 | 156.58 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 9 | **KALU** | NASDAQ:KALU | **46.7** | ⚪C | 34.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 191.58 | 176.23 | 211.54 | 1.3:1 | near_resist/chop/low_rr |
| 10 | **MRVL** | NASDAQ:MRVL | **46.6** | ⚪C | 34.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 288.38 | 240.42 | 352.93 | 1.3:1 | mom_decay/low_rr |
| 11 | **AIR** | NYSE:AIR | **43.9** | ⚪C | 32.1 | 49 | NEUTRAL No Trade (Neutral) | Trend Continuation | 141.88 | 133.79 | 153.74 | 1.5:1 | fake_break/bull_trap/near_resist |
| 12 | **MNST** | NASDAQ:MNST | **43.4** | ⚪C | 28 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 97.61 | 95.12 | 101.26 | 1.5:1 | fake_break/bull_trap/mom_decay/near_resist |
| 13 | **TRNO** | NYSE:TRNO | **43.1** | ⚪C | 37.1 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 64.25 | 62.23 | 68.23 | 2:1 | mom_decay/near_resist/chop |
| 14 | **COHR** | NYSE:COHR | **43.1** | ⚪C | 24.2 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 398.34 | 333.53 | 485.52 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 15 | **INTC** | NASDAQ:INTC | **42.8** | ⚪C | 32.3 | 46 | NEUTRAL No Trade (Neutral) | Trend Continuation | 134.82 | 119.45 | 157.37 | 1.5:1 | low_rr |
| 16 | **MU** | NASDAQ:MU | **41** | 🔵B | 16.7 | 65 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1144.71 | 991.89 | 1368.84 | 1.5:1 | mom_decay/bear_div/low_rr |
| 17 | **KLAC** | NASDAQ:KLAC | **39** | 🔵B | 23 | 63 | GREEN Long (Mid) | Overextended Chase (High Risk) | 294.5 | 265.34 | 333.37 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 18 | **BE** | NYSE:BE | **38.9** | ⚪C | 23.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 291.56 | 244.33 | 360.83 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 19 | **ADEA** | NASDAQ:ADEA | **38.5** | ⚪C | 22.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 33.77 | 30.15 | 38.55 | 1.3:1 | fake_break/near_resist/bear_div/low_rr |
| 20 | **ST** | NYSE:ST | **33** | ⚪C | 21.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 46.39 | 42.86 | 51.33 | 1.4:1 | mom_decay/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **55.8** |
| Tech Score | 36.6 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 114.22 |
| **Entry** | **114.22** |
| **Stop** | **107.54** (ATR × 1.5) |
| **Target** | **124.02** |
| R/R | 1.5:1 |
| RSI | 68.5 |
| ATR% | 3.9% |
| Dist EMA20 | 8.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **CRWD** | NASDAQ:CRWD | 77.3 | 57.8 | 94(hot) | 753.62 | **708.4** | 688.81 | 818.43 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/30 21:55:25*