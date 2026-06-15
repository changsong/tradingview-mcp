# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-06-15　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **ASML** | NASDAQ:ASML | **62.6** | 🟢A | 38.6 | 86 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 1879.16 | 1749.5 | 2069.33 | 1.5:1 | fake_break/near_resist/bear_div |
| 2 | **HPE** | NYSE:HPE | **59.4** | 🟢A | 40 | 76 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 48.48 | 42 | 57.97 | 1.5:1 | mom_decay/low_rr |
| 3 | **JHG** | NYSE:JHG | **54.3** | ⚪C | 48.9 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 51.97 | 51.63 | 52.07 | 0.3:1 | mom_decay/near_resist/low_rr |
| 4 | **DOV** | NYSE:DOV | **52.9** | 🟢A | 42.2 | 69 | GREEN Long (Mid) | Pullback Buy (Near Support) | 218.06 | 210.31 | 232.45 | 1.9:1 | chop |
| 5 | **C** | NYSE:C | **52.1** | 🟢A | 31.1 | 71 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 141.56 | 135.61 | 150.28 | 1.5:1 | fake_break/bull_trap/near_resist |
| 6 | **ARM** | NASDAQ:ARM | **51.8** | 🟢A | 37.7 | 73 | GREEN Long (Mid) | Overextended Chase (High Risk) | 392.62 | 331.96 | 473.5 | 1.3:1 | overheated/mom_decay/low_rr |
| 7 | **CARR** | NYSE:CARR | **51.1** | ⚪C | 42.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 71.94 | 68.06 | 77.64 | 1.5:1 | chop/low_rr |
| 8 | **PLXS** | NASDAQ:PLXS | **49.5** | ⚪C | 40.8 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 294 | 275.48 | 321.17 | 1.5:1 | near_resist |
| 9 | **KRYS** | NASDAQ:KRYS | **49.4** | ⚪C | 40.6 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 322.53 | 305.6 | 347.36 | 1.5:1 | near_resist |
| 10 | **TRNO** | NYSE:TRNO | **48.5** | ⚪C | 39.2 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 67.26 | 65.14 | 70.37 | 1.5:1 | near_resist/chop/low_rr |
| 11 | **AMD** | NASDAQ:AMD | **48** | 🔵B | 23.4 | 85 | GREEN Long (Strong) | Overextended Chase (High Risk) | 548.11 | 494.67 | 619.36 | 1.3:1 | overheated/fake_break/mom_decay/near_resist |
| 12 | **DKS** | NYSE:DKS | **47.8** | ⚪C | 35.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 221.62 | 203.46 | 245.27 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 13 | **JBL** | NYSE:JBL | **47.7** | ⚪C | 35.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 386.67 | 360.57 | 424.95 | 1.5:1 | near_resist/chop |
| 14 | **PANW** | NASDAQ:PANW | **47.7** | ⚪C | 32.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 283.5 | 260.96 | 316.56 | 1.5:1 | mom_decay/low_rr |
| 15 | **INTC** | NASDAQ:INTC | **47.7** | 🔵B | 28.9 | 76 | GREEN Long (Strong) | Overextended Chase (High Risk) | 127.53 | 112.8 | 147.18 | 1.3:1 | overheated/mom_decay/low_rr |
| 16 | **KLAC** | NASDAQ:KLAC | **46.4** | ⚪C | 45.4 | 48 | NEUTRAL No Trade (Neutral) | Overextended Chase (High Risk) | 252.82 | 230.07 | 283.16 | 1.3:1 | overheated |
| 17 | **DELL** | NYSE:DELL | **46.4** | 🟢A | 33.4 | 66 | GREEN Long (Mid) | Overextended Chase (High Risk) | 411.87 | 357.5 | 484.36 | 1.3:1 | overheated/mom_decay/low_rr |
| 18 | **ORRF** | NASDAQ:ORRF | **46.3** | ⚪C | 35.5 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 39.76 | 37.97 | 42.38 | 1.5:1 | near_resist/chop/low_rr |
| 19 | **NBIS** | NASDAQ:NBIS | **45.8** | ⚪C | 34.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 249.6 | 210.66 | 306.71 | 1.5:1 | mom_decay/low_rr |
| 20 | **CRDO** | NASDAQ:CRDO | **45.6** | ⚪C | 42.7 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 253.23 | 212.97 | 306.91 | 1.3:1 | overheated |
| 21 | **ADEA** | NASDAQ:ADEA | **44.9** | ⚪C | 33.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 32.07 | 28.08 | 37.93 | 1.5:1 | bear_div/low_rr |
| 22 | **SMP** | NYSE:SMP | **44.6** | ⚪C | 41 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 39.11 | 36.93 | 42.48 | 1.5:1 | near_resist/low_rr |
| 23 | **CPRX** | NASDAQ:CPRX | **44.2** | ⚪C | 40.3 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 30.89 | 31.24 | 31.49 | -1.7:1 | bull_trap/mom_decay/near_resist |
| 24 | **MRVL** | NASDAQ:MRVL | **43.6** | ⚪C | 39.3 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 293 | 242.46 | 360.39 | 1.3:1 | overheated/low_rr |
| 25 | **MNST** | NASDAQ:MNST | **42.5** | ⚪C | 27.8 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 92.75 | 89.97 | 96.83 | 1.5:1 | fake_break/bull_trap/near_resist |
| 26 | **NPB** | NYSE:NPB | **42.2** | ⚪C | 35.7 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 18.09 | 17.37 | 19.36 | 1.8:1 | near_resist/chop/low_rr |
| 27 | **INCY** | NASDAQ:INCY | **42** | ⚪C | 32.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 102.53 | 95.76 | 112.42 | 1.5:1 | near_resist/chop |
| 28 | **IFS** | NYSE:IFS | **42** | ⚪C | 28.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 55.99 | 52.88 | 60.55 | 1.5:1 | fake_break/near_resist |
| 29 | **SXI** | NYSE:SXI | **41.9** | ⚪C | 28.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 310.62 | 294.31 | 334.53 | 1.5:1 | fake_break/bull_trap/near_resist |
| 30 | **TSM** | NYSE:TSM | **41.6** | ⚪C | 23 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 437.43 | 408.56 | 479.77 | 1.5:1 | mom_decay/near_resist/low_rr |
| 31 | **RIO** | NYSE:RIO | **41.5** | ⚪C | 27.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 106.08 | 101.62 | 112.61 | 1.5:1 | mom_decay/chop/low_rr |
| 32 | **AROC** | NYSE:AROC | **41.2** | ⚪C | 35.4 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.86 | 34.3 | 38.52 | 1.7:1 | near_resist/chop |
| 33 | **FOR** | NYSE:FOR | **40.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 29.11 | 27.89 | 30.9 | 1.5:1 | near_resist/low_rr |
| 34 | **BGC** | NASDAQ:BGC | **40.9** | ⚪C | 26.5 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 11.93 | 11.45 | 12.64 | 1.5:1 | fake_break/near_resist/bear_div |
| 35 | **JCI** | NYSE:JCI | **40.7** | ⚪C | 24.2 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 147.24 | 139.73 | 158.25 | 1.5:1 | near_resist/chop/bear_div/low_rr |
| 36 | **APH** | NYSE:APH | **40.7** | ⚪C | 20.1 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 156.35 | 146.27 | 171.14 | 1.5:1 | fake_break/near_resist/bear_div/low_rr |
| 37 | **BAP** | NYSE:BAP | **40.4** | ⚪C | 25.7 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 372.6 | 349.69 | 406.21 | 1.5:1 | fake_break/near_resist/low_rr |
| 38 | **NBN** | NASDAQ:NBN | **40** | ⚪C | 25 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 129.67 | 121.31 | 141.94 | 1.5:1 | near_resist/chop/low_rr |
| 39 | **APLD** | NASDAQ:APLD | **39.6** | 🔵B | 17 | 61 | GREEN Long (Mid) | Trend Continuation | 45.52 | 38.97 | 55.13 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 40 | **RMBS** | NASDAQ:RMBS | **38.6** | ⚪C | 31 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 141.52 | 114.65 | 172.7 | 1.2:1 | mom_decay |
| 41 | **BELFA** | NASDAQ:BELFA | **37.8** | ⚪C | 29.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 256.15 | 229.88 | 290.22 | 1.3:1 | near_resist/chop/low_rr |
| 42 | **WDC** | NASDAQ:WDC | **37.1** | 🔵B | 21.2 | 61 | GREEN Long (Mid) | Overextended Chase (High Risk) | 635.62 | 573.65 | 718.25 | 1.3:1 | overheated/fake_break/near_resist/bear_div |
| 43 | **PFS** | NYSE:PFS | **37.1** | ⚪C | 20.1 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 23.44 | 22.7 | 24.52 | 1.5:1 | near_resist/chop/low_rr |
| 44 | **MS** | NYSE:MS | **36.2** | ⚪C | 24.4 | 54 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 217.89 | 208.74 | 230.09 | 1.3:1 | fake_break/mom_decay/near_resist/low_rr |
| 45 | **PACS** | NYSE:PACS | **35.3** | ⚪C | 25.5 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 35.82 | 33.02 | 39.72 | 1.4:1 | mom_decay/near_resist/chop/low_rr |
| 46 | **TTMI** | NASDAQ:TTMI | **34.6** | ⚪C | 24.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Overextended Chase (High Risk) | 202.8 | 178.46 | 235.25 | 1.3:1 | overheated/fake_break/near_resist |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. ASML (NASDAQ:ASML)

| Field | Value |
|-------|-------|
| Combined Score | **62.6** |
| Tech Score | 38.6 (Trend Follow (HH/HL Intact)) |
| News Score | 86 → GREEN Long (Strong) |
| Current Price | 1879.16 |
| **Entry** | **1879.16** |
| **Stop** | **1749.5** (ATR × 1.5) |
| **Target** | **2069.33** |
| R/R | 1.5:1 |
| RSI | 66.6 |
| ATR% | 4.6% |
| Dist EMA20 | 10.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist bear_div |

### 2. HPE (NYSE:HPE)

| Field | Value |
|-------|-------|
| Combined Score | **59.4** |
| Tech Score | 40 (Trend Follow (HH/HL Intact)) |
| News Score | 76 → GREEN Long (Strong) |
| Current Price | 48.475 |
| **Entry** | **48.48** |
| **Stop** | **42** (ATR × 1.5) |
| **Target** | **57.97** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 8.9% |
| Dist EMA20 | 9.6% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | mom_decay low_rr |

### 3. DOV (NYSE:DOV)

| Field | Value |
|-------|-------|
| Combined Score | **52.9** |
| Tech Score | 42.2 (Pullback Buy (Near Support)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 221.38 |
| **Entry** | **218.06** |
| **Stop** | **210.31** (ATR × 2) |
| **Target** | **232.45** |
| R/R | 1.9:1 |
| RSI | 57.5 |
| ATR% | 2.5% |
| Dist EMA20 | 2.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | chop |

### 4. C (NYSE:C)

| Field | Value |
|-------|-------|
| Combined Score | **52.1** |
| Tech Score | 31.1 (Trend Follow (HH/HL Intact)) |
| News Score | 71 → GREEN Long (Mid) |
| Current Price | 141.56 |
| **Entry** | **141.56** |
| **Stop** | **135.61** (ATR × 1.5) |
| **Target** | **150.28** |
| R/R | 1.5:1 |
| RSI | 71.3 |
| ATR% | 2.8% |
| Dist EMA20 | 7.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break bull_trap near_resist |

### 5. ARM (NASDAQ:ARM)

| Field | Value |
|-------|-------|
| Combined Score | **51.8** |
| Tech Score | 37.7 (Overextended Chase (High Risk)) |
| News Score | 73 → GREEN Long (Mid) |
| Current Price | 392.62 |
| **Entry** | **392.62** |
| **Stop** | **331.96** (ATR × 1.5) |
| **Target** | **473.5** |
| R/R | 1.3:1 |
| RSI | 65.3 |
| ATR% | 10.3% |
| Dist EMA20 | 18.8% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

### 6. DELL (NYSE:DELL)

| Field | Value |
|-------|-------|
| Combined Score | **46.4** |
| Tech Score | 33.4 (Overextended Chase (High Risk)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 411.87 |
| **Entry** | **411.87** |
| **Stop** | **357.5** (ATR × 1.5) |
| **Target** | **484.36** |
| R/R | 1.3:1 |
| RSI | 67.1 |
| ATR% | 8.8% |
| Dist EMA20 | 14.6% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | overheated mom_decay low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/6/15 22:51:34*