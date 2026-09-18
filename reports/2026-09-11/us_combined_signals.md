# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-11　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **LTC** | NYSE:LTC | **68.6** | 🟢A | 58 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 42.5 | 41.35 | 44.18 | 1.5:1 | near_resist/low_rr |
| 2 | **BAP** | NYSE:BAP | **64.6** | ⚪C | 66 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 380.58 | 364.41 | 400.31 | 1.2:1 | near_resist/chop/low_rr |
| 3 | **RRC** | NYSE:RRC | **59** | ⚪C | 65 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 41.25 | 39.87 | 43.89 | 1.9:1 | mom_decay/near_resist |
| 4 | **SPNT** | NYSE:SPNT | **59** | ⚪C | 65 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 23.99 | 23.34 | 25.38 | 2.1:1 | near_resist/chop |
| 5 | **PACS** | NYSE:PACS | **56.1** | ⚪C | 51.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 44.98 | 42.11 | 48.66 | 1.3:1 | near_resist/low_rr |
| 6 | **NWBI** | NASDAQ:NWBI | **55.8** | ⚪C | 59.7 | 50 | NEUTRAL No Trade (No Data) | Reversal (MACD Cross) | 15.49 | 15.16 | 15.92 | 1.3:1 | near_resist/chop |
| 7 | **WT** | NYSE:WT | **53.5** | ⚪C | 55.2 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 23.9 | 22.17 | 26.35 | 1.4:1 | mom_decay |
| 8 | **LITE** | NASDAQ:LITE | **51.1** | 🟢A | 32.1 | 67 | GREEN Long (Mid) | Breakout (Squeeze Release) | 938.51 | 826.22 | 1087.75 | 1.3:1 | near_resist/chop/low_rr |
| 9 | **AAPL** | NASDAQ:AAPL | **50.2** | ⚪C | 50.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 321.67 | 311.55 | 341.59 | 2:1 | near_resist/chop/low_rr |
| 10 | **HGTY** | NYSE:HGTY | **49.9** | ⚪C | 49.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Volume Climax) | 13.49 | 12.66 | 14.6 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 11 | **AMD** | NASDAQ:AMD | **49.9** | ⚪C | 49.8 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 503.6 | 475.65 | 540.87 | 1.3:1 | near_resist/chop |
| 12 | **MU** | NASDAQ:MU | **49.8** | 🔵B | 28.7 | 69 | GREEN Long (Mid) | Breakout (Squeeze Release) | 980.34 | 896.48 | 1089.81 | 1.3:1 | near_resist/chop/low_rr |
| 13 | **CET** | AMEX:CET | **49.6** | ⚪C | 41 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 55.67 | 54.2 | 57.3 | 1.1:1 | near_resist/chop/low_rr |
| 14 | **BGC** | NASDAQ:BGC | **48.4** | ⚪C | 36.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 12.22 | 11.63 | 13.08 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 15 | **OTC:SMNEY** | OTC:SMNEY | **48.2** | ⚪C | 38.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 16 | **HRMY** | NASDAQ:HRMY | **47.3** | ⚪C | 37.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 41.1 | 39.19 | 43.9 | 1.5:1 | low_rr |
| 17 | **HOOD** | NASDAQ:HOOD | **46.8** | ⚪C | 44.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 111.63 | 98.82 | 127.84 | 1.3:1 | OK |
| 18 | **WPM** | NYSE:WPM | **46.4** | 🔵B | 25 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 150.98 | 141.69 | 164.6 | 1.5:1 | mom_decay/near_resist/low_rr |
| 19 | **AR** | NYSE:AR | **45** | ⚪C | 30.7 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 39.17 | 37.64 | 41.41 | 1.5:1 | mom_decay/near_resist/low_rr |
| 20 | **MS** | NYSE:MS | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 213.3 | 204.62 | 223.82 | 1.2:1 | near_resist/chop/low_rr |
| 21 | **PGY** | NASDAQ:PGY | **43.5** | ⚪C | 35.8 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 20 | 17.86 | 22.74 | 1.3:1 | mom_decay |
| 22 | **CF** | NYSE:CF | **42.5** | ⚪C | 29.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 135.11 | 126.8 | 147.3 | 1.5:1 | near_resist/low_rr |
| 23 | **ASX** | NYSE:ASX | **42.1** | ⚪C | 34.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 39.26 | 37.07 | 42.65 | 1.5:1 | near_resist/chop/low_rr |
| 24 | **TSM** | NYSE:TSM | **41** | ⚪C | 32.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 421.61 | 408.34 | 447.72 | 2:1 | near_resist/chop/low_rr |
| 25 | **GEN** | NASDAQ:GEN | **40.9** | ⚪C | 22.5 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 29.96 | 28.62 | 31.94 | 1.5:1 | mom_decay/chop/bear_div/low_rr |
| 26 | **SM** | NYSE:SM | **40.8** | ⚪C | 26.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 38.18 | 36.18 | 41.12 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 27 | **NBIS** | NASDAQ:NBIS | **40.7** | 🔵B | 16.1 | 65 | GREEN Long (Mid) | Trend Continuation | 228.11 | 207.58 | 258.22 | 1.5:1 | near_resist/chop/low_rr |
| 28 | **OSBC** | NASDAQ:OSBC | **39.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 25.15 | 24.76 | 26.3 | 2.9:1 | mom_decay/near_resist/chop/low_rr |
| 29 | **RIO** | NYSE:RIO | **39.3** | ⚪C | 32.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 97.9 | 95.02 | 103.76 | 2:1 | mom_decay/near_resist/low_rr |
| 30 | **C** | NYSE:C | **38.3** | ⚪C | 25.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 136.42 | 133.24 | 143.76 | 2.3:1 | near_resist/chop/low_rr |
| 31 | **DELL** | NYSE:DELL | **38.1** | ⚪C | 21.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 506.62 | 462.54 | 571.26 | 1.5:1 | near_resist/chop/low_rr |
| 32 | **GRAL** | NASDAQ:GRAL | **37.7** | ⚪C | 29.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 76.4 | 68.72 | 86.4 | 1.3:1 | mom_decay/near_resist |
| 33 | **OTC:SMTGY** | OTC:SMTGY | **37.7** | ⚪C | 21.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 6.7 | 6.32 | 7.24 | 1.4:1 | near_resist/chop/low_rr |
| 34 | **HPE** | NYSE:HPE | **37.4** | ⚪C | 20.7 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 55.22 | 50.58 | 62.02 | 1.5:1 | near_resist/chop/low_rr |
| 35 | **FIVE** | NASDAQ:FIVE | **37.3** | ⚪C | 28.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 237.66 | 217.63 | 264.93 | 1.4:1 | mom_decay/near_resist/low_rr |
| 36 | **NBN** | NASDAQ:NBN | **37.2** | ⚪C | 28.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 129.25 | 124.66 | 137.78 | 1.9:1 | near_resist/chop/low_rr |
| 37 | **NVDA** | NASDAQ:NVDA | **36.9** | ⚪C | 28.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 215.08 | 203.07 | 233.65 | 1.5:1 | mom_decay/chop/bear_div |
| 38 | **BE** | NYSE:BE | **34.8** | ⚪C | 24.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 254.61 | 225.4 | 291.58 | 1.3:1 | chop |
| 39 | **ASML** | NASDAQ:ASML | **34.2** | ⚪C | 23.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 1662.12 | 1596.31 | 1778.55 | 1.8:1 | mom_decay/chop |
| 40 | **NEXA** | NYSE:NEXA | **33.2** | ⚪C | 22 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 12.94 | 11.43 | 14.85 | 1.3:1 | mom_decay/chop |
| 41 | **NEM** | NYSE:NEM | **29.2** | ⚪C | 20.7 | 42 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 124.25 | 117.31 | 134.97 | 1.5:1 | mom_decay/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. LTC (NYSE:LTC)

| Field | Value |
|-------|-------|
| Combined Score | **68.6** |
| Tech Score | 58 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 42.5 |
| **Entry** | **42.5** |
| **Stop** | **41.35** (ATR × 1.5) |
| **Target** | **44.18** |
| R/R | 1.5:1 |
| RSI | 64.2 |
| ATR% | 1.8% |
| Dist EMA20 | 3.4% |
| Chase OK | NO |
| MTF Alignment | 1/1 (100%) |
| Risk Flags | near_resist low_rr |

### 2. LITE (NASDAQ:LITE)

| Field | Value |
|-------|-------|
| Combined Score | **51.1** |
| Tech Score | 32.1 (Breakout (Squeeze Release)) |
| News Score | 67 → GREEN Long (Mid) |
| Current Price | 935.7 |
| **Entry** | **938.51** |
| **Stop** | **826.22** (ATR × 1.8) |
| **Target** | **1087.75** |
| R/R | 1.3:1 |
| RSI | 54.7 |
| ATR% | 6.5% |
| Dist EMA20 | 4.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/11 21:00:11*