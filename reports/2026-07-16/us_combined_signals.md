# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-16　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **ASML** | NASDAQ:ASML | **70.9** | 🟡C+ | 43.9 | 99 | WARN No Trade (Overheated) | Trend Follow (HH/HL Intact) | 1817.81 | 1681.47 | 2017.77 | 1.5:1 | mom_decay/chop |
| 2 | **MS** | NYSE:MS | **63.9** | 🟢A | 44.8 | 80 | GREEN Long (Strong) | Trend Follow (HH/HL Intact) | 221.63 | 211.66 | 236.26 | 1.5:1 | near_resist/low_rr |
| 3 | **CRWD** | NASDAQ:CRWD | **59.3** | 🟢A | 42.5 | 72 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 204.39 | 187.22 | 229.57 | 1.5:1 | near_resist/low_rr |
| 4 | **AMD** | NASDAQ:AMD | **58.2** | 🟢A | 35.3 | 80 | GREEN Long (Strong) | Breakout (Squeeze Release) | 507.96 | 437.16 | 602.66 | 1.3:1 | mom_decay/chop |
| 5 | **MNST** | NASDAQ:MNST | **57.3** | ⚪C | 49.1 | 57 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 99.44 | 96.46 | 103.82 | 1.5:1 | fake_break/mom_decay/near_resist |
| 6 | **PACS** | NYSE:PACS | **51.3** | ⚪C | 43.8 | 50 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 46.3 | 43.04 | 51.09 | 1.5:1 | fake_break/near_resist |
| 7 | **RELY** | NASDAQ:RELY | **51.3** | ⚪C | 42.5 | 52 | NEUTRAL No Trade (Weak Bullish) | Trend Follow (HH/HL Intact) | 25.27 | 23.87 | 27.33 | 1.5:1 | fake_break/bull_trap/near_resist |
| 8 | **IRM** | NYSE:IRM | **50.3** | ⚪C | 50.5 | 50 | NEUTRAL No Trade (Weak Bullish) | Reversal (MACD Cross) | 124.06 | 117.92 | 132.25 | 1.3:1 | chop |
| 9 | **CET** | AMEX:CET | **50.3** | ⚪C | 42.1 | 50 | NEUTRAL No Trade (No Data) | Breakout (Squeeze Release) | 53.36 | 52.05 | 54.8 | 1.1:1 | fake_break/near_resist/chop/low_rr |
| 10 | **TT** | NYSE:TT | **47.6** | ⚪C | 37.6 | 50 | NEUTRAL No Trade (Weak Bullish) | Breakout (Squeeze Release) | 477.44 | 446.88 | 516.47 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **LTC** | NYSE:LTC | **44** | ⚪C | 31.7 | 50 | NEUTRAL No Trade (No Data) | Trend Follow (HH/HL Intact) | 40.68 | 39.7 | 42.11 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. MS (NYSE:MS)

| Field | Value |
|-------|-------|
| Combined Score | **63.9** |
| Tech Score | 44.8 (Trend Follow (HH/HL Intact)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 221.63 |
| **Entry** | **221.63** |
| **Stop** | **211.66** (ATR × 1.5) |
| **Target** | **236.26** |
| R/R | 1.5:1 |
| RSI | 54.9 |
| ATR% | 3% |
| Dist EMA20 | 1% |
| Chase OK | NO |
| MTF Alignment | 1/4 (25%) |
| Risk Flags | near_resist low_rr |

### 2. CRWD (NASDAQ:CRWD)

| Field | Value |
|-------|-------|
| Combined Score | **59.3** |
| Tech Score | 42.5 (Trend Follow (HH/HL Intact)) |
| News Score | 72 → GREEN Long (Mid) |
| Current Price | 204.39 |
| **Entry** | **204.39** |
| **Stop** | **187.22** (ATR × 1.5) |
| **Target** | **229.57** |
| R/R | 1.5:1 |
| RSI | 63.9 |
| ATR% | 5.6% |
| Dist EMA20 | 7.9% |
| Chase OK | NO |
| MTF Alignment | 3/4 (75%) |
| Risk Flags | near_resist low_rr |

### 3. AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **58.2** |
| Tech Score | 35.3 (Breakout (Squeeze Release)) |
| News Score | 80 → GREEN Long (Strong) |
| Current Price | 506.44 |
| **Entry** | **507.96** |
| **Stop** | **437.16** (ATR × 1.8) |
| **Target** | **602.66** |
| R/R | 1.3:1 |
| RSI | 47.8 |
| ATR% | 7.6% |
| Dist EMA20 | -3.9% |
| Chase OK | NO |
| MTF Alignment | 0/4 (0%) |
| Risk Flags | mom_decay chop |

---

## 🟡 Grade C+ — Wait for Pullback (Strong tech but news overheated)

> Strong technical setup, but news sentiment is overheated. Wait for -5%~-8% pullback before entering.

| Stock | Symbol | Combined | Tech | News | Price | Wait Entry | Stop | Target |
|-------|--------|----------|------|------|-------|-----------|------|--------|
| **ASML** | NASDAQ:ASML | 70.9 | 43.9 | 99(hot) | 1817.81 | **1708.74** | 1636.03 | 1999.59 |

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/16 23:04:04*