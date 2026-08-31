# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-26　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **SM** | NYSE:SM | **61.2** | ⚪C | 64.4 | 44 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 97.54 | 93.92 | 101.87 | 1.2:1 | near_resist/chop/low_rr |
| 2 | **JCI** | NYSE:JCI | **60.3** | ⚪C | 58.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 143.8 | 135.89 | 153.76 | 1.3:1 | near_resist/chop/low_rr |
| 3 | **ETN** | NYSE:ETN | **59.3** | 🟢A | 49.2 | 62 | GREEN Long (Mid) | Breakout (Squeeze Release) | 405.28 | 376.43 | 442.46 | 1.3:1 | near_resist/chop |
| 4 | **LTC** | NYSE:LTC | **59.1** | ⚪C | 50.9 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 172.62 | 165.37 | 183.25 | 1.5:1 | near_resist/low_rr |
| 5 | **ENVA** | NYSE:ENVA | **58.9** | 🟢A | 46.9 | 77 | GREEN Long (Strong) | Pullback Buy (Near Support) | 126.39 | 120.35 | 136.27 | 1.6:1 | near_resist/chop/low_rr |
| 6 | **MMM** | NYSE:MMM | **57.1** | 🟢A | 34.2 | 79 | GREEN Long (Strong) | Breakout (Squeeze Release) | 23.96 | 23.03 | 25.08 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 7 | **GLW** | NYSE:GLW | **53** | ⚪C | 47.4 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 42.18 | 40.91 | 44.04 | 1.5:1 | near_resist/low_rr |
| 8 | **AMKR** | NASDAQ:AMKR | **51.6** | 🔵B | 28.7 | 86 | GREEN Long (Strong) | Pullback Buy (Near Support) | 63.99 | 54.31 | 75.61 | 1.2:1 | mom_decay |
| 9 | **COHR** | NASDAQ:COHR | **51.1** | ⚪C | 38.8 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 8.97 | 7.62 | 10.77 | 1.3:1 | near_resist |
| 10 | **MPWR** | NASDAQ:MPWR | **50.8** | ⚪C | 38.3 | 57 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 1337.81 | 1189.76 | 1533.88 | 1.3:1 | chop |
| 11 | **CSW** | NYSE:CSW | **49.9** | ⚪C | 49.8 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 284.84 | 267.2 | 311.16 | 1.5:1 | near_resist/chop/low_rr |
| 12 | **STX** | NASDAQ:STX | **47.9** | ⚪C | 32.9 | 58 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 854.25 | 721.38 | 1032.67 | 1.3:1 | OK |
| 13 | **ON** | NASDAQ:ON | **46.4** | ⚪C | 33.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 87.07 | 77.28 | 100.05 | 1.3:1 | OK |
| 14 | **SO** | NYSE:SO | **45.6** | ⚪C | 34.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 237.27 | 223.03 | 258.15 | 1.5:1 | mom_decay/near_resist/low_rr |
| 15 | **HUN** | NYSE:HUN | **45.4** | ⚪C | 31.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 12.8 | 11.96 | 14.04 | 1.5:1 | near_resist/low_rr |
| 16 | **NWBI** | NASDAQ:NWBI | **45** | ⚪C | 33.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.4 | 15.03 | 15.94 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 17 | **IRM** | NYSE:IRM | **44.8** | ⚪C | 41.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 412.71 | 392.18 | 445.82 | 1.6:1 | mom_decay/chop |
| 18 | **ELTK** | NASDAQ:ELTK | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 8.97 | 7.62 | 10.77 | 1.3:1 | near_resist |
| 19 | **CBRS** | NASDAQ:CBRS | **43.9** | ⚪C | 39.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 199.12 | 164.77 | 244.92 | 1.3:1 | chop |
| 20 | **DELL** | NYSE:DELL | **43.1** | ⚪C | 30.2 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 438.81 | 381.59 | 515.16 | 1.3:1 | mom_decay/near_resist/low_rr |
| 21 | **ACGL** | NASDAQ:ACGL | **43** | ⚪C | 33.3 | 45 | NEUTRAL No Trade (Neutral) | Trend Continuation | 103.36 | 99.79 | 108.59 | 1.5:1 | mom_decay/near_resist/low_rr |
| 22 | **WLK** | NYSE:WLK | **42.3** | ⚪C | 37.2 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 72.71 | 69.39 | 78.25 | 1.7:1 | near_resist |
| 23 | **ASIX** | NYSE:ASIX | **41.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 20.73 | 19.41 | 22.69 | 1.5:1 | near_resist/chop |
| 24 | **OTC:SMNEY** | OTC:SMNEY | **40.2** | ⚪C | 25.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 25 | **BHRB** | NASDAQ:BHRB | **39.6** | ⚪C | 32.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 299.1 | 281.79 | 325.51 | 1.5:1 | mom_decay/chop |
| 26 | **CE** | NYSE:CE | **39.6** | ⚪C | 24.4 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 46.57 | 43 | 51.19 | 1.3:1 | near_resist/chop |
| 27 | **WWD** | NASDAQ:WWD | **38.3** | ⚪C | 28.5 | 53 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 146.37 | 138.5 | 158.7 | 1.6:1 | mom_decay/near_resist/bear_div/low_rr |
| 28 | **SXI** | NYSE:SXI | **37.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 299.1 | 281.79 | 325.51 | 1.5:1 | mom_decay/chop |
| 29 | **TTMI** | NASDAQ:TTMI | **37.4** | 🔵B | 19.7 | 64 | GREEN Long (Mid) | Reversal (Bullish RSI Divergence) | 131.41 | 115.64 | 152.44 | 1.3:1 | mom_decay |
| 30 | **EQIX** | NASDAQ:EQIX | **37** | ⚪C | 28.4 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1067.98 | 1030.03 | 1138.45 | 1.9:1 | near_resist/chop/low_rr |
| 31 | **SMCI** | NASDAQ:SMCI | **35.8** | ⚪C | 28.3 | 47 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 29.65 | 26.13 | 34.07 | 1.3:1 | near_resist |
| 32 | **NBIS** | NASDAQ:NBIS | **34.5** | ⚪C | 20.9 | 55 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 184.95 | 142.71 | 232.83 | 1.1:1 | mom_decay/chop |
| 33 | **IREN** | NASDAQ:IREN | **32.5** | ⚪C | 20.9 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 37.07 | 31.57 | 44.41 | 1.3:1 | OK |
| 34 | **VNET** | NASDAQ:VNET | **32.2** | ⚪C | 20.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 7.1 | 6.4 | 8.02 | 1.3:1 | chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. ETN (NYSE:ETN)

| Field | Value |
|-------|-------|
| Combined Score | **59.3** |
| Tech Score | 49.2 (Breakout (Squeeze Release)) |
| News Score | 62 → GREEN Long (Mid) |
| Current Price | 404.07 |
| **Entry** | **405.28** |
| **Stop** | **376.43** (ATR × 1.8) |
| **Target** | **442.46** |
| R/R | 1.3:1 |
| RSI | 49.1 |
| ATR% | 3.8% |
| Dist EMA20 | -0.5% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist chop |

### 2. ENVA (NYSE:ENVA)

| Field | Value |
|-------|-------|
| Combined Score | **58.9** |
| Tech Score | 46.9 (Pullback Buy (Near Support)) |
| News Score | 77 → GREEN Long (Strong) |
| Current Price | 128.31 |
| **Entry** | **126.39** |
| **Stop** | **120.35** (ATR × 2) |
| **Target** | **136.27** |
| R/R | 1.6:1 |
| RSI | 59.2 |
| ATR% | 3.1% |
| Dist EMA20 | 3.4% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist chop low_rr |

### 3. MMM (NYSE:MMM)

| Field | Value |
|-------|-------|
| Combined Score | **57.1** |
| Tech Score | 34.2 (Breakout (Squeeze Release)) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 23.89 |
| **Entry** | **23.96** |
| **Stop** | **23.03** (ATR × 1.8) |
| **Target** | **25.08** |
| R/R | 1.2:1 |
| RSI | 55.6 |
| ATR% | 2% |
| Dist EMA20 | 0.9% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | mom_decay near_resist chop low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/26 21:00:06*