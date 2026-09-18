# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-17　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **SPNT** | NYSE:SPNT | **65.6** | ⚪C | 67.6 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 24.54 | 23.46 | 25.88 | 1.2:1 | near_resist/chop |
| 2 | **LTC** | NYSE:LTC | **63.8** | ⚪C | 64.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 43.08 | 41.72 | 45.07 | 1.5:1 | near_resist |
| 3 | **BAP** | NYSE:BAP | **63** | ⚪C | 63.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 382.28 | 364.67 | 404.01 | 1.2:1 | near_resist/chop |
| 4 | **PLTR** | NASDAQ:PLTR | **53.5** | ⚪C | 51.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 171.72 | 159.7 | 188.98 | 1.4:1 | mom_decay/near_resist |
| 5 | **HPE** | NYSE:HPE | **52.4** | 🟢A | 34.3 | 67 | GREEN Long (Mid) | Trend Continuation | 56.68 | 50.9 | 65.16 | 1.5:1 | chop/low_rr |
| 6 | **HRMY** | NASDAQ:HRMY | **52.3** | ⚪C | 53.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.58 | 39.85 | 44.57 | 1.7:1 | mom_decay/near_resist/low_rr |
| 7 | **DELL** | NYSE:DELL | **52.1** | ⚪C | 45.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 563.29 | 510.06 | 641.36 | 1.5:1 | near_resist/chop |
| 8 | **HGTY** | NYSE:HGTY | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.94 | 12.87 | 15.32 | 1.3:1 | near_resist/bear_div/low_rr |
| 9 | **HG** | NYSE:HG | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 35.28 | 33.71 | 37.19 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 10 | **DT** | NYSE:DT | **51.4** | ⚪C | 41.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 55.19 | 52.46 | 59.2 | 1.5:1 | fake_break/near_resist/chop |
| 11 | **BGC** | NASDAQ:BGC | **49.1** | ⚪C | 47.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 12 | 11.47 | 12.89 | 1.7:1 | near_resist/chop/bear_div/low_rr |
| 12 | **SM** | NYSE:SM | **48.6** | ⚪C | 39.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 38.16 | 35.87 | 41.52 | 1.5:1 | near_resist/bear_div/low_rr |
| 13 | **ANET** | NYSE:ANET | **47.1** | ⚪C | 36.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 198.13 | 184.03 | 216.31 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 14 | **AMD** | NASDAQ:AMD | **46.9** | ⚪C | 44.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 504.81 | 472.53 | 552.48 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **PANW** | NASDAQ:PANW | **44.1** | 🔵B | 21.2 | 66 | GREEN Long (Mid) | Trend Continuation | 375.65 | 342.97 | 423.58 | 1.5:1 | near_resist/chop/low_rr |
| 16 | **LYB** | NYSE:LYB | **43.2** | ⚪C | 41.3 | 46 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 63.93 | 60.49 | 69.31 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 17 | **NBN** | NASDAQ:NBN | **42.8** | ⚪C | 38 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 130.55 | 125.38 | 139.7 | 1.8:1 | near_resist/chop/low_rr |
| 18 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 19 | **LITE** | NASDAQ:LITE | **41.9** | ⚪C | 26.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 919.4 | 828.38 | 1052.9 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 20 | **CRWD** | NASDAQ:CRWD | **41.7** | ⚪C | 23.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 241.36 | 218.55 | 274.81 | 1.5:1 | fake_break/near_resist/chop/bear_div |
| 21 | **PGY** | NASDAQ:PGY | **41.5** | 🔵B | 27.8 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 21.32 | 19.09 | 24.19 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 22 | **OTC:SMTGY** | OTC:SMTGY | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.72 | 6.35 | 7.27 | 1.5:1 | near_resist/chop/low_rr |
| 23 | **CET** | AMEX:CET | **36.3** | ⚪C | 27.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 54.35 | 53.64 | 56.73 | 3.4:1 | near_resist/chop/low_rr |
| 24 | **CF** | NYSE:CF | **34.8** | ⚪C | 29.4 | 43 | NEUTRAL No Trade (Neutral) | Reversal (Bullish RSI Divergence) | 131.99 | 123.28 | 143.61 | 1.3:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **52.4** |
| Tech Score | 34.3 (Trend Continuation) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 56.68 |
| **Entry** | **56.68** |
| **Stop** | **50.9** (ATR × 1.5) |
| **Target** | **65.16** |
| R/R | 1.5:1 |
| RSI | 53.9 |
| ATR% | 6.8% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/17 21:00:05*