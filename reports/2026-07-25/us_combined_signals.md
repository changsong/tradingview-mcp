# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-25　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **SO** | NYSE:SO | **64.4** | ⚪C | 65.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 97.54 | 93.92 | 101.87 | 1.2:1 | near_resist/chop/low_rr |
| 2 | **MMM** | NYSE:MMM | **56.3** | ⚪C | 52.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 172.62 | 165.37 | 183.25 | 1.5:1 | near_resist/low_rr |
| 3 | **CSW** | NYSE:CSW | **52** | ⚪C | 53.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 284.84 | 267.2 | 311.16 | 1.5:1 | near_resist/chop/low_rr |
| 4 | **LTC** | NYSE:LTC | **51.3** | ⚪C | 43.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 42.18 | 40.91 | 44.04 | 1.5:1 | near_resist/low_rr |
| 5 | **ACGL** | NASDAQ:ACGL | **50.1** | ⚪C | 41.8 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 103.36 | 99.79 | 108.59 | 1.5:1 | mom_decay/near_resist/low_rr |
| 6 | **IRM** | NYSE:IRM | **49.6** | ⚪C | 49.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 126.39 | 120.35 | 136.27 | 1.6:1 | near_resist/chop/low_rr |
| 7 | **WWD** | NASDAQ:WWD | **46.8** | ⚪C | 44.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 412.71 | 392.18 | 445.82 | 1.6:1 | mom_decay/chop |
| 8 | **ENVA** | NYSE:ENVA | **45.6** | ⚪C | 34.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 237.27 | 223.03 | 258.15 | 1.5:1 | mom_decay/near_resist/low_rr |
| 9 | **PFS** | NYSE:PFS | **45.5** | ⚪C | 34.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 23.96 | 23.03 | 25.08 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 10 | **DELL** | NYSE:DELL | **44.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 438.81 | 381.59 | 515.16 | 1.3:1 | mom_decay/near_resist/low_rr |
| 11 | **BGC** | NASDAQ:BGC | **43.2** | ⚪C | 30.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 11.65 | 11.16 | 12.37 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **SXI** | NYSE:SXI | **42** | ⚪C | 36.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 299.1 | 281.79 | 325.51 | 1.5:1 | mom_decay/chop |
| 13 | **OTC:SMNEY** | OTC:SMNEY | **38.6** | ⚪C | 22.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 14 | **SN** | NYSE:SN | **38.1** | ⚪C | 30.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 146.37 | 138.5 | 158.7 | 1.6:1 | mom_decay/near_resist/bear_div/low_rr |
| 15 | **TTMI** | NASDAQ:TTMI | **36.2** | 🔵B | 16.3 | 66 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 131.41 | 115.64 | 152.44 | 1.3:1 | OK |
| 16 | **BHRB** | NASDAQ:BHRB | **35** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 69.41 | 67.23 | 73.71 | 2:1 | mom_decay/near_resist/bear_div/low_rr |

---

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/26 07:27:43*