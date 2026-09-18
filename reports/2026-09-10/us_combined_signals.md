# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-10　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **RIO** | NYSE:RIO | **66.2** | 🟢A | 59.7 | 76 | GREEN Long (Strong) | Pullback Buy (Near Support) | 102.18 | 99.38 | 108.1 | 2.1:1 | mom_decay/near_resist |
| 2 | **LTC** | NYSE:LTC | **60** | ⚪C | 58.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 42.55 | 41.4 | 44.23 | 1.5:1 | near_resist/low_rr |
| 3 | **HRMY** | NASDAQ:HRMY | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 41.62 | 39.56 | 44.64 | 1.5:1 | low_rr |
| 4 | **CF** | NYSE:CF | **51.5** | ⚪C | 44.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 138.11 | 129.62 | 150.57 | 1.5:1 | near_resist/low_rr |
| 5 | **HOOD** | NASDAQ:HOOD | **51** | 🟢A | 41.6 | 65 | GREEN Long (Mid) | Pullback Buy (Near Support) | 113.55 | 100.29 | 130.27 | 1.3:1 | near_resist |
| 6 | **ASX** | NYSE:ASX | **50.6** | ⚪C | 38.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 41.2 | 39.16 | 44.19 | 1.5:1 | chop/low_rr |
| 7 | **TSM** | NYSE:TSM | **50.1** | ⚪C | 46.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 428.83 | 415.33 | 455.39 | 2:1 | near_resist/chop/low_rr |
| 8 | **WT** | NYSE:WT | **49.9** | ⚪C | 49.1 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.54 | 21.89 | 25.91 | 1.4:1 | mom_decay |
| 9 | **LITE** | NASDAQ:LITE | **49.1** | 🔵B | 29.5 | 66 | GREEN Long (Mid) | Breakout (Squeeze Release) | 991.95 | 878.61 | 1142.27 | 1.3:1 | fake_break/near_resist/chop/low_rr |
| 10 | **RRC** | NYSE:RRC | **48.7** | ⚪C | 47.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.11 | 39.74 | 43.74 | 1.9:1 | mom_decay/near_resist |
| 11 | **DELL** | NYSE:DELL | **48.5** | ⚪C | 39.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 535.25 | 492.7 | 597.66 | 1.5:1 | chop |
| 12 | **NBIS** | NASDAQ:NBIS | **48.1** | ⚪C | 38.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 240.35 | 219.8 | 270.49 | 1.5:1 | chop/low_rr |
| 13 | **AR** | NYSE:AR | **47.6** | ⚪C | 34.4 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 39.12 | 37.65 | 41.27 | 1.5:1 | near_resist/low_rr |
| 14 | **FCX** | NYSE:FCX | **47.4** | ⚪C | 33.4 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 76.23 | 71.43 | 83.27 | 1.5:1 | mom_decay/low_rr |
| 15 | **HPE** | NYSE:HPE | **47.1** | ⚪C | 36.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 58.9 | 54.48 | 65.38 | 1.5:1 | chop/low_rr |
| 16 | **MU** | NASDAQ:MU | **46.8** | ⚪C | 36.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 1030.85 | 948.22 | 1138.26 | 1.3:1 | fake_break/near_resist/chop/low_rr |
| 17 | **HGTY** | NYSE:HGTY | **46.3** | ⚪C | 35.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 13.3 | 12.4 | 14.45 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 18 | **SPNT** | NYSE:SPNT | **46.2** | ⚪C | 43.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.9 | 23.24 | 25.28 | 2.1:1 | near_resist/chop/low_rr |
| 19 | **AMD** | NASDAQ:AMD | **45.2** | ⚪C | 42 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 521.1 | 492.96 | 558.61 | 1.3:1 | near_resist/chop/low_rr |
| 20 | **SCCO** | NYSE:SCCO | **44.9** | ⚪C | 31.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 209.26 | 195.45 | 229.52 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 21 | **WPM** | NYSE:WPM | **44.1** | ⚪C | 31.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 156.76 | 147.35 | 170.55 | 1.5:1 | mom_decay/near_resist/low_rr |
| 22 | **MS** | NYSE:MS | **43.8** | ⚪C | 31.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 216 | 206.82 | 227.19 | 1.2:1 | near_resist/chop/low_rr |
| 23 | **STX** | NASDAQ:STX | **42.4** | ⚪C | 25 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 885.92 | 819.48 | 983.37 | 1.5:1 | chop/low_rr |
| 24 | **GRAL** | NASDAQ:GRAL | **41.9** | ⚪C | 36.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 76.32 | 68.03 | 86.93 | 1.3:1 | mom_decay/near_resist |
| 25 | **OTC:SMNEY** | OTC:SMNEY | **41.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 26 | **SM** | NYSE:SM | **41.2** | ⚪C | 27 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 37.98 | 35.87 | 41.07 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 27 | **JCI** | NYSE:JCI | **40.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 144.92 | 140.57 | 150.72 | 1.3:1 | near_resist/chop/low_rr |
| 28 | **NEM** | NYSE:NEM | **39.3** | ⚪C | 25.8 | 47 | NEUTRAL No Trade (Neutral) | Trend Continuation | 128.71 | 122.15 | 138.34 | 1.5:1 | mom_decay/near_resist/low_rr |
| 29 | **FIVE** | NASDAQ:FIVE | **38.4** | ⚪C | 22.3 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 247.12 | 229.7 | 272.67 | 1.5:1 | mom_decay/near_resist/low_rr |
| 30 | **C** | NYSE:C | **37.8** | ⚪C | 29.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 135.73 | 132.29 | 143.31 | 2.2:1 | near_resist/chop/low_rr |
| 31 | **ASML** | NASDAQ:ASML | **37.6** | ⚪C | 29.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1703.58 | 1639.58 | 1819.46 | 1.8:1 | mom_decay/chop |
| 32 | **NVDA** | NASDAQ:NVDA | **37.4** | ⚪C | 29 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 220.07 | 208.67 | 238.17 | 1.6:1 | near_resist/chop/bear_div/low_rr |
| 33 | **APH** | NYSE:APH | **37.2** | 🔵B | 22 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 80.12 | 76.62 | 86.06 | 1.7:1 | near_resist/chop/low_rr |
| 34 | **NEXA** | NYSE:NEXA | **36.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 14.04 | 12.63 | 15.87 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 35 | **ETN** | NYSE:ETN | **35.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 408.99 | 391.14 | 439.3 | 1.7:1 | mom_decay/near_resist/chop/low_rr |
| 36 | **AGM** | NYSE:AGM | **34** | ⚪C | 23.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 221.08 | 213.23 | 235.67 | 1.9:1 | mom_decay/near_resist/low_rr |
| 37 | **SMP** | NYSE:SMP | **32.1** | ⚪C | 20.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 38.62 | 36.86 | 41.56 | 1.7:1 | near_resist/chop/low_rr |
| 38 | **NYSE:PACS** | NYSE:PACS | **27.7** | ⚪C | 37.9 | 0 | No data | Breakout (Squeeze Release) | 44.73 | 41.79 | 48.5 | 1.3:1 | mom_decay/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. RIO (NYSE:RIO)

| Field | Value |
|-------|-------|
| Combined Score | **66.2** |
| Tech Score | 59.7 (Pullback Buy (Near Support)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 103.74 |
| **Entry** | **102.18** |
| **Stop** | **99.38** (ATR × 2) |
| **Target** | **108.1** |
| R/R | 2.1:1 |
| RSI | 58.1 |
| ATR% | 2.1% |
| Dist EMA20 | 1.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay near_resist |

### 2. HOOD (NASDAQ:HOOD)

| Field | Value |
|-------|-------|
| Combined Score | **51** |
| Tech Score | 41.6 (Pullback Buy (Near Support)) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 115.28 |
| **Entry** | **113.55** |
| **Stop** | **100.29** (ATR × 2) |
| **Target** | **130.27** |
| R/R | 1.3:1 |
| RSI | 58.6 |
| ATR% | 6.5% |
| Dist EMA20 | 6.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/10 21:25:06*