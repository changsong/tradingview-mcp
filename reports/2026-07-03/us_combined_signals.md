# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-03　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **AAPL** | NASDAQ:AAPL | **62** | 🟢A | 54 | 74 | GREEN Long (Mid) | Pullback Buy (Near Support) | 304 | 290.73 | 326.53 | 1.7:1 | near_resist |
| 2 | **TRNO** | NYSE:TRNO | **60.2** | ⚪C | 57.4 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 67.53 | 64.54 | 71.2 | 1.2:1 | near_resist/chop/low_rr |
| 3 | **AIR** | NYSE:AIR | **59.4** | ⚪C | 58.7 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 140.11 | 132.12 | 151.82 | 1.5:1 | OK |
| 4 | **DUK** | NYSE:DUK | **58** | 🟢A | 56.6 | 60 | GREEN Long (Mid) | Pullback Buy (Near Support) | 127.66 | 125.45 | 133.75 | 2.8:1 | near_resist/chop |
| 5 | **PACS** | NYSE:PACS | **57** | 🟢A | 43 | 78 | GREEN Long (Strong) | Overextended Chase (High Risk) | 44.48 | 41.28 | 48.75 | 1.3:1 | overheated/fake_break/near_resist |
| 6 | **NPB** | NYSE:NPB | **56.7** | ⚪C | 51.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 18.95 | 18.1 | 20.2 | 1.5:1 | near_resist/low_rr |
| 7 | **NBIX** | NASDAQ:NBIX | **56.2** | 🟢A | 37.4 | 72 | WARN Long (Cautious) | Trend Continuation | 174.26 | 167.2 | 184.61 | 1.5:1 | fake_break/near_resist/bear_div |
| 8 | **MNST** | NASDAQ:MNST | **55.4** | ⚪C | 48.7 | 53 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 97.6 | 94.82 | 101.68 | 1.5:1 | bull_trap/near_resist |
| 9 | **NBN** | NASDAQ:NBN | **54.5** | ⚪C | 49.1 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 134.48 | 126.61 | 146.02 | 1.5:1 | near_resist/low_rr |
| 10 | **NWBI** | NASDAQ:NWBI | **54** | ⚪C | 48.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 15.11 | 14.66 | 15.77 | 1.5:1 | near_resist/low_rr |
| 11 | **INCY** | NASDAQ:INCY | **51.7** | 🟢A | 33.8 | 66 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 116.86 | 110.55 | 126.12 | 1.5:1 | bull_trap/near_resist/bear_div |
| 12 | **SXI** | NYSE:SXI | **51.6** | ⚪C | 44.4 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 327.87 | 303.77 | 363.21 | 1.5:1 | OK |
| 13 | **FOR** | NYSE:FOR | **51.2** | ⚪C | 43.6 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 30.8 | 29.28 | 33.04 | 1.5:1 | low_rr |
| 14 | **HRMY** | NASDAQ:HRMY | **47.8** | ⚪C | 45 | 52 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 36.7 | 35.1 | 39.42 | 1.7:1 | bull_trap/near_resist |
| 15 | **SN** | NYSE:SN | **47.4** | ⚪C | 37.4 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 151.47 | 143.29 | 163.47 | 1.5:1 | bull_trap/near_resist |
| 16 | **AMAT** | NASDAQ:AMAT | **46.4** | ⚪C | 36.3 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 603.04 | 526.15 | 715.81 | 1.5:1 | bear_div |
| 17 | **ENVA** | NYSE:ENVA | **43.7** | ⚪C | 39.5 | 50 | NEUTRAL No Trade (No Data) | Overextended Chase (High Risk) | 235.19 | 222.49 | 252.12 | 1.3:1 | overheated/mom_decay |
| 18 | **FSS** | NYSE:FSS | **42.9** | ⚪C | 29.9 | 50 | NEUTRAL No Trade (No Data) | Trend Continuation | 131.09 | 124.99 | 140.03 | 1.5:1 | bull_trap/near_resist/low_rr |
| 19 | **ALAB** | NASDAQ:ALAB | **39.8** | ⚪C | 20.7 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 406.42 | 341.19 | 502.09 | 1.5:1 | mom_decay/bear_div/low_rr |
| 20 | **CRWD** | NASDAQ:CRWD | **38.4** | ⚪C | 23 | 49 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 193.98 | 182.34 | 211.05 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. AAPL (NASDAQ:AAPL)

| Field | Value |
|-------|-------|
| Combined Score | **62** |
| Tech Score | 54 (Pullback Buy (Near Support)) |
| News Score | 74 → GREEN Long (Mid) |
| Current Price | 308.63 |
| **Entry** | **304** |
| **Stop** | **290.73** (ATR × 2) |
| **Target** | **326.53** |
| R/R | 1.7:1 |
| RSI | 60.3 |
| ATR% | 2.9% |
| Dist EMA20 | 4.8% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist |

### 2. DUK (NYSE:DUK)

| Field | Value |
|-------|-------|
| Combined Score | **58** |
| Tech Score | 56.6 (Pullback Buy (Near Support)) |
| News Score | 60 → GREEN Long (Mid) |
| Current Price | 129.6 |
| **Entry** | **127.66** |
| **Stop** | **125.45** (ATR × 2) |
| **Target** | **133.75** |
| R/R | 2.8:1 |
| RSI | 62 |
| ATR% | 1.6% |
| Dist EMA20 | 3% |
| Chase OK | NO |
| MTF Alignment | 3/3 (100%) |
| Risk Flags | near_resist chop |

### 3. PACS (NYSE:PACS)

| Field | Value |
|-------|-------|
| Combined Score | **57** |
| Tech Score | 43 (Overextended Chase (High Risk)) |
| News Score | 78 → GREEN Long (Strong) |
| Current Price | 44.48 |
| **Entry** | **44.48** |
| **Stop** | **41.28** (ATR × 1.5) |
| **Target** | **48.75** |
| R/R | 1.3:1 |
| RSI | 69.7 |
| ATR% | 4.8% |
| Dist EMA20 | 13.2% |
| Chase OK | NO |
| MTF Alignment | 2/3 (67%) |
| Risk Flags | overheated fake_break near_resist |

### 4. NBIX (NASDAQ:NBIX)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 37.4 (Trend Continuation) |
| News Score | 72 → WARN Long (Cautious) |
| Current Price | 174.26 |
| **Entry** | **174.26** |
| **Stop** | **167.2** (ATR × 1.5) |
| **Target** | **184.61** |
| R/R | 1.5:1 |
| RSI | 68.2 |
| ATR% | 2.7% |
| Dist EMA20 | 6.3% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | fake_break near_resist bear_div |

### 5. INCY (NASDAQ:INCY)

| Field | Value |
|-------|-------|
| Combined Score | **51.7** |
| Tech Score | 33.8 (Trend Follow (HH/HL Intact)) |
| News Score | 66 → GREEN Long (Mid) |
| Current Price | 116.86 |
| **Entry** | **116.86** |
| **Stop** | **110.55** (ATR × 1.5) |
| **Target** | **126.12** |
| R/R | 1.5:1 |
| RSI | 70.5 |
| ATR% | 3.6% |
| Dist EMA20 | 9.1% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | bull_trap near_resist bear_div |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/3 21:03:42*