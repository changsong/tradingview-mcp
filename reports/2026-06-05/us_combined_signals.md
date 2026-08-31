# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-05　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NASDAQ:CRWD** | NASDAQ:CRWD | **67.5** | 🟡C+ | 42.2 | 93 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 719.09 | 661.92 | 802.94 | 1.5:1 | bear_div/low_rr |
| 2 | **NASDAQ:PANW** | NASDAQ:PANW | **65** | 🟢A | 50.7 | 74 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 279.25 | 257.05 | 311.81 | 1.5:1 | low_rr |
| 3 | **NYSE:JHG** | NYSE:JHG | **62.7** | ⚪C | 62.8 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 51.94 | 51.59 | 52.04 | 0.3:1 | mom_decay/near_resist/low_rr |
| 4 | **NASDAQ:FLEX** | NASDAQ:FLEX | **60.7** | ⚪C | 67.8 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 159.51 | 146.83 | 176.42 | 1.3:1 | overheated |
| 5 | **NYSE:JCI** | NYSE:JCI | **60.6** | 🟢A | 49 | 78 | GREEN Long (Strong) | Reversal (Bullish RSI Divergence) | 147.4 | 140.77 | 156.24 | 1.3:1 | near_resist/chop |
| 6 | **NYSE:FN** | NYSE:FN | **59** | ⚪C | 54.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 488.86 | 446.33 | 551.24 | 1.5:1 | mom_decay |
| 7 | **NYSE:AIR** | NYSE:AIR | **58.3** | 🟢A | 36.2 | 79 | GREEN Long (Strong) | Trend Continuation | 300.06 | 272.6 | 340.33 | 1.5:1 | mom_decay/low_rr |
| 8 | **NASDAQ:INCY** | NASDAQ:INCY | **56.4** | ⚪C | 52.3 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 101.54 | 96.32 | 108.07 | 1.3:1 | near_resist/chop |
| 9 | **NYSE:DY** | NYSE:DY | **55.8** | ⚪C | 45.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 488.57 | 441.67 | 557.36 | 1.5:1 | low_rr |
| 10 | **NASDAQ:ADEA** | NASDAQ:ADEA | **55.5** | ⚪C | 50.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.36 | 29.5 | 36.56 | 1.5:1 | low_rr |
| 11 | **NYSE:IONQ** | NYSE:IONQ | **53.3** | ⚪C | 44.5 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 65.66 | 57.09 | 78.23 | 1.5:1 | OK |
| 12 | **NYSE:IFS** | NYSE:IFS | **52.1** | ⚪C | 53.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 47.72 | 45.16 | 51.74 | 1.6:1 | near_resist |
| 13 | **NASDAQ:NBIX** | NASDAQ:NBIX | **52.1** | ⚪C | 53.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 47.72 | 45.16 | 51.74 | 1.6:1 | near_resist |
| 14 | **NASDAQ:MNST** | NASDAQ:MNST | **52.1** | ⚪C | 47.5 | 59 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 87.21 | 84.82 | 92.26 | 2.1:1 | mom_decay/near_resist/low_rr |
| 15 | **NASDAQ:CRDO** | NASDAQ:CRDO | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 217.5 | 184.88 | 265.35 | 1.5:1 | OK |
| 16 | **NYSE:TSM** | NYSE:TSM | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 444.92 | 421.56 | 479.18 | 1.5:1 | fake_break/near_resist |
| 17 | **NASDAQ:TTMI** | NASDAQ:TTMI | **51.6** | 🟢A | 32.4 | 68 | WARN Long (Cautious) | Trend Follow (HH/HL Intact) | 184.84 | 162.94 | 216.97 | 1.5:1 | mom_decay/low_rr |
| 18 | **NASDAQ:KALU** | NASDAQ:KALU | **51.4** | ⚪C | 44 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 186.85 | 174.8 | 204.53 | 1.5:1 | bear_div |
| 19 | **NYSE:HPE** | NYSE:HPE | **50.9** | ⚪C | 43.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 2132.33 | 2084.35 | 2202.7 | 1.5:1 | near_resist/low_rr |
| 20 | **NYSE:FCX** | NYSE:FCX | **50.9** | 🟢A | 33.1 | 65 | GREEN Long (Mid) | Trend Continuation | 69.69 | 65.3 | 76.13 | 1.5:1 | near_resist/low_rr |
| 21 | **NYSE:PFS** | NYSE:PFS | **48.3** | ⚪C | 38.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 22.41 | 21.42 | 23.62 | 1.2:1 | mom_decay/near_resist/chop/low_rr |
| 22 | **NASDAQ:EQIX** | NASDAQ:EQIX | **47.2** | ⚪C | 33.7 | 55 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 300.06 | 272.6 | 340.33 | 1.5:1 | mom_decay/low_rr |
| 23 | **NYSE:MOD** | NYSE:MOD | **46.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 301.21 | 262.81 | 357.54 | 1.5:1 | low_rr |
| 24 | **NASDAQ:NVMI** | NASDAQ:NVMI | **46.2** | ⚪C | 35.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 521.96 | 467.94 | 593.26 | 1.3:1 | near_resist/chop/low_rr |
| 25 | **NASDAQ:MTSI** | NASDAQ:MTSI | **45.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 382.74 | 347.72 | 434.1 | 1.5:1 | mom_decay/bear_div/low_rr |
| 26 | **NASDAQ:POWL** | NASDAQ:POWL | **45.3** | ⚪C | 33.9 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 300.06 | 272.6 | 340.33 | 1.5:1 | mom_decay/low_rr |
| 27 | **NASDAQ:CPRX** | NASDAQ:CPRX | **45.1** | ⚪C | 41.9 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 31.29 | 28.66 | 34.79 | 1.3:1 | overheated/mom_decay/low_rr |
| 28 | **OTC:HTHIY** | OTC:HTHIY | **44.8** | ⚪C | 41.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 32.45 | 31.03 | 34.85 | 1.7:1 | near_resist/chop/bear_div/low_rr |
| 29 | **NASDAQ:RMBS** | NASDAQ:RMBS | **44.2** | ⚪C | 40.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 169.35 | 152.58 | 191.7 | 1.3:1 | overheated/fake_break/near_resist |
| 30 | **NYSE:BE** | NYSE:BE | **44** | ⚪C | 31.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 292.24 | 247.31 | 352.56 | 1.3:1 | mom_decay/near_resist/low_rr |
| 31 | **NASDAQ:IREN** | NASDAQ:IREN | **43.4** | ⚪C | 25.4 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 61.86 | 53.97 | 73.43 | 1.5:1 | near_resist/low_rr |
| 32 | **NASDAQ:LITE** | NASDAQ:LITE | **43.4** | 🔵B | 21.3 | 64 | GREEN Long (Mid) | Breakout (Squeeze Release) | 947.92 | 790.28 | 1160.09 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 33 | **NYSE:GLW** | NYSE:GLW | **43.3** | ⚪C | 30.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 197.7 | 178.42 | 225.97 | 1.5:1 | mom_decay/near_resist/low_rr |
| 34 | **NYSE:DELL** | NYSE:DELL | **43.1** | ⚪C | 38.5 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 422.05 | 363.81 | 499.71 | 1.3:1 | overheated/mom_decay |
| 35 | **NYSE:CARR** | NYSE:CARR | **43.1** | 🔵B | 22.2 | 62 | GREEN Long (Mid) | Trend Continuation | 68.54 | 64.94 | 73.82 | 1.5:1 | near_resist/chop/low_rr |
| 36 | **NASDAQ:MU** | NASDAQ:MU | **42.9** | ⚪C | 38.2 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 996 | 892.91 | 1133.45 | 1.3:1 | overheated |
| 37 | **NASDAQ:AMAT** | NASDAQ:AMAT | **42.5** | ⚪C | 37.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 60.93 | 54.07 | 69.65 | 1.3:1 | mom_decay/near_resist/low_rr |
| 38 | **NASDAQ:VIAV** | NASDAQ:VIAV | **42.2** | ⚪C | 32 | 45 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 53.37 | 46.31 | 62.79 | 1.3:1 | mom_decay/near_resist/low_rr |
| 39 | **NYSE:DKS** | NYSE:DKS | **42.1** | ⚪C | 28.5 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 218.25 | 198.8 | 243.71 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 40 | **NASDAQ:AEHR** | NASDAQ:AEHR | **41.8** | ⚪C | 33.6 | 54 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 116.58 | 99.09 | 139.9 | 1.3:1 | overheated/bear_div |
| 41 | **NASDAQ:ERIC** | NASDAQ:ERIC | **41.3** | ⚪C | 27.2 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 13.35 | 12.75 | 14.23 | 1.5:1 | near_resist/bear_div/low_rr |
| 42 | **NASDAQ:MPWR** | NASDAQ:MPWR | **40.6** | ⚪C | 27.3 | 48 | NEUTRAL No Trade (Neutral) | Breakout (Squeeze Release) | 1657.56 | 1500.89 | 1863.31 | 1.3:1 | mom_decay/near_resist/bear_div/low_rr |
| 43 | **NYSE:C** | NYSE:C | **40.5** | ⚪C | 25.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 135.15 | 130.28 | 142.29 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 44 | **NASDAQ:CORZ** | NASDAQ:CORZ | **39.9** | ⚪C | 24.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 27.91 | 25.57 | 31.35 | 1.5:1 | bear_div |
| 45 | **NYSE:ENS** | NYSE:ENS | **39.3** | ⚪C | 23.9 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 238.35 | 221.55 | 263 | 1.5:1 | mom_decay/near_resist/bear_div/low_rr |
| 46 | **NYSE:NOK** | NYSE:NOK | **39.2** | ⚪C | 21.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 16.62 | 15.12 | 18.81 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 47 | **NYSE:SXI** | NYSE:SXI | **38** | ⚪C | 28.6 | 52 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 297.66 | 283.37 | 316.71 | 1.3:1 | fake_break/bull_trap/near_resist/chop |
| 48 | **NYSE:FOR** | NYSE:FOR | **37.7** | ⚪C | 21.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 28.48 | 27.2 | 30.36 | 1.5:1 | fake_break/near_resist/chop/low_rr |
| 49 | **NYSE:CLS** | NYSE:CLS | **37.6** | ⚪C | 22.3 | 48 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 425.36 | 382.61 | 488.06 | 1.5:1 | near_resist/chop/low_rr |
| 50 | **NASDAQ:WDC** | NASDAQ:WDC | **35.8** | ⚪C | 27.6 | 48 | NEUTRAL No Trade (Neutral) | Pullback Buy (Near Support) | 331.4 | 325.68 | 347.22 | 2.8:1 | mom_decay/near_resist/bear_div/low_rr |
| 51 | **NASDAQ:MRVL** | NASDAQ:MRVL | **35.4** | ⚪C | 25.6 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 316.43 | 281.78 | 362.63 | 1.3:1 | overheated/bull_trap/mom_decay/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. NASDAQ:PANW (NASDAQ:PANW)

| Field | Value |
|-------|-------|
| Combined Score | **65** |
| Tech Score | 50.7 (Trend Follow (HH/HL Intact)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 279.25 |
| **Entry** | **279.25** |
| **Stop** | **257.05** (ATR × 1.5) |
| **Target** | **311.81** |
| R/R | 1.5:1 |
| RSI | 68.8 |
| ATR% | 5.3% |
| Dist EMA20 | 10.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | low_rr |

### 2. NYSE:JCI (NYSE:JCI)

| Field | Value |
|-------|-------|
| Combined Score | **60.6** |
| Tech Score | 49 (Reversal (Bullish RSI Divergence)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 147.4 |
| **Entry** | **147.4** |
| **Stop** | **140.77** (ATR × 1.5) |
| **Target** | **156.24** |
| R/R | 1.3:1 |
| RSI | 61.6 |
| ATR% | 3% |
| Dist EMA20 | 5.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist chop |

### 3. NYSE:AIR (NYSE:AIR)

| Field | Value |
|-------|-------|
| Combined Score | **58.3** |
| Tech Score | 36.2 (Trend Continuation) |
| News Score | 79 → GREEN Long (Strong) |
| Current Price | 300.06 |
| **Entry** | **300.06** |
| **Stop** | **272.6** (ATR × 1.5) |
| **Target** | **340.33** |
| R/R | 1.5:1 |
| RSI | 60.7 |
| ATR% | 6.1% |
| Dist EMA20 | 4.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 4. NASDAQ:TTMI (NASDAQ:TTMI)

| Field | Value |
|-------|-------|
| Combined Score | **51.6** |
| Tech Score | 32.4 (Trend Follow (HH/HL Intact)) |
| News Score | 68 → WARN Long (Cautious) |
| Current Price | 184.84 |
| **Entry** | **184.84** |
| **Stop** | **162.94** (ATR × 1.5) |
| **Target** | **216.97** |
| R/R | 1.5:1 |
| RSI | 61 |
| ATR% | 7.9% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | mom_decay low_rr |

### 5. NYSE:FCX (NYSE:FCX)

| Field | Value |
|-------|-------|
| Combined Score | **50.9** |
| Tech Score | 33.1 (Trend Continuation) |
| News Score | 65 → GREEN Long (Mid) |
| Current Price | 69.69 |
| **Entry** | **69.69** |
| **Stop** | **65.3** (ATR × 1.5) |
| **Target** | **76.13** |
| R/R | 1.5:1 |
| RSI | 61.6 |
| ATR% | 4.2% |
| Dist EMA20 | 6.8% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **NASDAQ:CRWD** | NASDAQ:CRWD | 67.5 | 42.2 | 93(hot) | 719.09 | **675.94** | 642.87 | 795.31 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/5 20:25:05*