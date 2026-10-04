# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-09-30　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **WT** | NYSE:WT | **62.2** | ⚪C | 65.6 | 57 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 24.27 | 22.92 | 26.07 | 1.3:1 | OK |
| 2 | **BE** | NYSE:BE | **58.9** | 🟢A | 43.8 | 69 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 291.25 | 260.23 | 336.74 | 1.5:1 | chop/low_rr |
| 3 | **META** | NASDAQ:META | **58.1** | 🟢A | 47.8 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 738.79 | 694.46 | 803.8 | 1.5:1 | near_resist/low_rr |
| 4 | **CLS** | NYSE:CLS | **56.2** | 🟢A | 44.7 | 61 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 366.47 | 337.34 | 409.2 | 1.5:1 | near_resist/low_rr |
| 5 | **HGTY** | NYSE:HGTY | **55.5** | ⚪C | 49.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 13.59 | 12.75 | 14.67 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 6 | **MSFT** | NASDAQ:MSFT | **54.9** | ⚪C | 43.8 | 59 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 510.49 | 487.89 | 538.23 | 1.2:1 | mom_decay/near_resist/low_rr |
| 7 | **ST** | NYSE:ST | **53.9** | ⚪C | 48.2 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 42.04 | 39.87 | 44.74 | 1.2:1 | near_resist/chop |
| 8 | **GRMN** | NYSE:GRMN | **51.9** | ⚪C | 39.5 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 290.23 | 279.35 | 306.19 | 1.5:1 | chop/low_rr |
| 9 | **TSM** | NYSE:TSM | **51.6** | ⚪C | 52.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (Bullish RSI Divergence) | 456.94 | 441.18 | 477.96 | 1.3:1 | chop/low_rr |
| 10 | **ASML** | NASDAQ:ASML | **51.1** | 🔵B | 29.5 | 71 | GREEN Long (Mid) | Trend Continuation | 1834.39 | 1754.59 | 1951.42 | 1.5:1 | near_resist/chop/low_rr |
| 11 | **SN** | NYSE:SN | **50.9** | ⚪C | 48.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 179.7 | 168.21 | 196.67 | 1.5:1 | OK |
| 12 | **JOE** | NYSE:JOE | **50.9** | ⚪C | 41.9 | 52 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 66.21 | 63.04 | 70.14 | 1.2:1 | near_resist/chop/low_rr |
| 13 | **TEM** | NASDAQ:TEM | **50.5** | ⚪C | 50.9 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 81.34 | 72.51 | 92.65 | 1.3:1 | overheated |
| 14 | **ETN** | NYSE:ETN | **50.4** | ⚪C | 36.4 | 59 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 433.27 | 411.17 | 465.68 | 1.5:1 | near_resist/chop/low_rr |
| 15 | **VEEV** | NYSE:VEEV | **50.4** | 🟢A | 34.4 | 62 | WARN Long (Cautious) | Trend Continuation | 278.57 | 267.29 | 295.12 | 1.5:1 | mom_decay/low_rr |
| 16 | **APH** | NYSE:APH | **49.5** | ⚪C | 36.9 | 56 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 84.34 | 79.91 | 90.83 | 1.5:1 | near_resist/chop/low_rr |
| 17 | **OTC:IFNNY** | OTC:IFNNY | **48** | ⚪C | 46.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 66.23 | 62.13 | 72.35 | 1.5:1 | near_resist/chop |
| 18 | **MU** | NASDAQ:MU | **47.7** | 🔵B | 27.9 | 65 | GREEN Long (Mid) | Trend Continuation | 1065.08 | 999.58 | 1161.15 | 1.5:1 | near_resist/chop/low_rr |
| 19 | **WDC** | NASDAQ:WDC | **47.1** | 🔵B | 26.2 | 66 | GREEN Long (Mid) | Trend Continuation | 453.48 | 416.75 | 507.35 | 1.5:1 | chop/low_rr |
| 20 | **SANM** | NASDAQ:SANM | **46** | ⚪C | 30.4 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 222.73 | 206.36 | 246.74 | 1.5:1 | near_resist/chop/low_rr |
| 21 | **OTC:SMNEY** | OTC:SMNEY | **45.4** | ⚪C | 34 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 175.64 | 168 | 186.85 | 1.5:1 | fake_break/bull_trap/near_resist |
| 22 | **LLY** | NYSE:LLY | **45.1** | ⚪C | 39.1 | 54 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 1166.86 | 1127.77 | 1241.49 | 1.9:1 | near_resist/chop/low_rr |
| 23 | **DT** | NYSE:DT | **44.7** | ⚪C | 34.1 | 48 | NEUTRAL No Trade (Neutral) | Trend Follow (HH/HL Intact) | 57.53 | 54.85 | 61.45 | 1.5:1 | near_resist/low_rr |
| 24 | **LITE** | NASDAQ:LITE | **44.7** | ⚪C | 31.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 973.49 | 882.96 | 1106.27 | 1.5:1 | near_resist/chop/low_rr |
| 25 | **ENTG** | NASDAQ:ENTG | **44.2** | ⚪C | 29.3 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 154.77 | 145.02 | 169.07 | 1.5:1 | near_resist/chop/low_rr |
| 26 | **SPNT** | NYSE:SPNT | **43.8** | ⚪C | 39.6 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 24.47 | 23.55 | 26.13 | 1.8:1 | near_resist/chop/low_rr |
| 27 | **SNDK** | NASDAQ:SNDK | **43.4** | 🔵B | 24 | 60 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 1729.76 | 1576.68 | 1954.28 | 1.5:1 | chop/low_rr |
| 28 | **AEHR** | NASDAQ:AEHR | **43.3** | ⚪C | 29.2 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 100.78 | 88.54 | 118.74 | 1.5:1 | near_resist/chop/low_rr |
| 29 | **STX** | NASDAQ:STX | **42.1** | ⚪C | 25.9 | 54 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 913.45 | 842.2 | 1017.95 | 1.5:1 | near_resist/chop/low_rr |
| 30 | **ANET** | NYSE:ANET | **41.9** | ⚪C | 31.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 199.82 | 187.85 | 217.87 | 1.5:1 | near_resist/chop/low_rr |
| 31 | **TT** | NYSE:TT | **41.8** | ⚪C | 31 | 58 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 448.76 | 432.81 | 478.37 | 1.9:1 | fake_break/near_resist/low_rr |
| 32 | **INTC** | NASDAQ:INTC | **41.5** | ⚪C | 22.1 | 58 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 115.93 | 105.67 | 130.98 | 1.5:1 | low_rr |
| 33 | **VRTX** | NASDAQ:VRTX | **40.8** | ⚪C | 21.7 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 526.73 | 510.14 | 551.06 | 1.5:1 | mom_decay/near_resist/chop/low_rr |
| 34 | **ELF** | NYSE:ELF | **40.2** | ⚪C | 25.3 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Continuation | 101.7 | 95.45 | 110.87 | 1.5:1 | mom_decay/low_rr |
| 35 | **ARM** | NASDAQ:ARM | **39.7** | ⚪C | 32.2 | 51 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 289.26 | 251.97 | 335.37 | 1.2:1 | near_resist/low_rr |
| 36 | **KEYS** | NYSE:KEYS | **39.6** | ⚪C | 25.7 | 48 | NEUTRAL No Trade (Neutral) | Trend Continuation | 360.65 | 343.88 | 385.25 | 1.5:1 | near_resist/chop/low_rr |
| 37 | **AEIS** | NASDAQ:AEIS | **39** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 279.05 | 256.67 | 309.93 | 1.4:1 | chop |
| 38 | **HOOD** | NASDAQ:HOOD | **38.5** | 🔵B | 22.8 | 62 | GREEN Long (Mid) | Pullback Buy (Near Support) | 114.48 | 104.6 | 127.84 | 1.4:1 | mom_decay/near_resist/chop |
| 39 | **OTC:SMERY** | OTC:SMERY | **36.9** | ⚪C | 28.1 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 32.67 | 30.45 | 35.89 | 1.5:1 | near_resist/chop |
| 40 | **OTC:HTHIY** | OTC:HTHIY | **36.2** | ⚪C | 27 | 50 | NEUTRAL No Trade (No Data) | Pullback Buy (Near Support) | 34.74 | 32.94 | 37.59 | 1.6:1 | mom_decay/near_resist/chop/low_rr |
| 41 | **P** | NYSE:P | **36.1** | 🔵B | 17.5 | 64 | GREEN Long (Mid) | Overextended Chase (High Risk) | 130.05 | 119.52 | 144.1 | 1.3:1 | overheated/fake_break/bull_trap/near_resist |
| 42 | **SARO** | NYSE:SARO | **34.7** | ⚪C | 24.5 | 50 | NEUTRAL No Trade (No Data) | Reversal (Bullish RSI Divergence) | 21.75 | 20.71 | 23.14 | 1.3:1 | OK |
| 43 | **NEXA** | NYSE:NEXA | **32.7** | ⚪C | 21.1 | 50 | NEUTRAL No Trade (Weak Bullish) | Pullback Buy (Near Support) | 12.19 | 11.14 | 13.62 | 1.4:1 | mom_decay/chop |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. BE (NYSE:BE)

| Field | Value |
|-------|-------|
| Combined Score | **58.9** |
| Tech Score | 43.8 (Trend Follow (HH/HL Intact)) |
| News Score | 69 → GREEN Long (Mid) |
| Current Price | 291.25 |
| **Entry** | **291.25** |
| **Stop** | **260.23** (ATR × 1.5) |
| **Target** | **336.74** |
| R/R | 1.5:1 |
| RSI | 60.3 |
| ATR% | 7.1% |
| Dist EMA20 | 10.7% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | chop low_rr |

### 2. META (NASDAQ:META)

| Field | Value |
|-------|-------|
| Combined Score | **58.1** |
| Tech Score | 47.8 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 738.79 |
| **Entry** | **738.79** |
| **Stop** | **694.46** (ATR × 1.5) |
| **Target** | **803.8** |
| R/R | 1.5:1 |
| RSI | 64.5 |
| ATR% | 4% |
| Dist EMA20 | 7.6% |
| Chase OK | NO |
| MTF Alignment | 2/4 (50%) |
| Risk Flags | near_resist low_rr |

### 3. CLS (NYSE:CLS)

| Field | Value |
|-------|-------|
| Combined Score | **56.2** |
| Tech Score | 44.7 (Trend Follow (HH/HL Intact)) |
| News Score | 61 → GREEN Long (Mid) |
| Current Price | 366.47 |
| **Entry** | **366.47** |
| **Stop** | **337.34** (ATR × 1.5) |
| **Target** | **409.2** |
| R/R | 1.5:1 |
| RSI | 60.6 |
| ATR% | 5.3% |
| Dist EMA20 | 7.4% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | near_resist low_rr |

### 4. VEEV (NYSE:VEEV)

| Field | Value |
|-------|-------|
| Combined Score | **50.4** |
| Tech Score | 34.4 (Trend Continuation) |
| News Score | 62 → WARN Long (Cautious) |
| Current Price | 278.57 |
| **Entry** | **278.57** |
| **Stop** | **267.29** (ATR × 1.5) |
| **Target** | **295.12** |
| R/R | 1.5:1 |
| RSI | 64.8 |
| ATR% | 2.7% |
| Dist EMA20 | 4.2% |
| Chase OK | NO |
| MTF Alignment | 4/4 (100%) |
| Risk Flags | mom_decay low_rr |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/9/30 21:00:06*