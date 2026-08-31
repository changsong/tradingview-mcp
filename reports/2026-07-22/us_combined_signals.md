# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-07-22　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **AMD** | NASDAQ:AMD | **63** | 🟢A | 35.3 | 92 | GREEN Long (Strong) | Breakout (Squeeze Release) | 507.96 | 437.16 | 602.66 | 1.3:1 | mom_decay/chop |
| 2 | **NASDAQ:MNST** | NASDAQ:MNST | **34.5** | ⚪C | 49.1 | 0 | No data | Trend Follow (HH/HL Intact) | 99.44 | 96.46 | 103.82 | 1.5:1 | fake_break/mom_decay/near_resist |
| 3 | **NYSE:MS** | NYSE:MS | **31.9** | ⚪C | 44.8 | 0 | No data | Trend Follow (HH/HL Intact) | 221.63 | 211.66 | 236.26 | 1.5:1 | near_resist/low_rr |
| 4 | **NASDAQ:ASML** | NASDAQ:ASML | **31.3** | ⚪C | 43.9 | 0 | No data | Trend Follow (HH/HL Intact) | 1817.81 | 1681.47 | 2017.77 | 1.5:1 | mom_decay/chop |
| 5 | **NYSE:PACS** | NYSE:PACS | **31.3** | ⚪C | 43.8 | 0 | No data | Trend Follow (HH/HL Intact) | 46.3 | 43.04 | 51.09 | 1.5:1 | fake_break/near_resist |
| 6 | **NASDAQ:CRWD** | NASDAQ:CRWD | **30.5** | ⚪C | 42.5 | 0 | No data | Trend Follow (HH/HL Intact) | 204.39 | 187.22 | 229.57 | 1.5:1 | near_resist/low_rr |
| 7 | **NASDAQ:RELY** | NASDAQ:RELY | **30.5** | ⚪C | 42.5 | 0 | No data | Trend Follow (HH/HL Intact) | 25.27 | 23.87 | 27.33 | 1.5:1 | fake_break/bull_trap/near_resist |
| 8 | **NYSE:IRM** | NYSE:IRM | **30.3** | ⚪C | 50.5 | 0 | No data | Reversal (MACD Cross) | 124.06 | 117.92 | 132.25 | 1.3:1 | chop |
| 9 | **AMEX:CET** | AMEX:CET | **30.3** | ⚪C | 42.1 | 0 | No data | Breakout (Squeeze Release) | 53.36 | 52.05 | 54.8 | 1.1:1 | fake_break/near_resist/chop/low_rr |
| 10 | **NYSE:TT** | NYSE:TT | **27.6** | ⚪C | 37.6 | 0 | No data | Breakout (Squeeze Release) | 477.44 | 446.88 | 516.47 | 1.3:1 | mom_decay/near_resist/chop/low_rr |
| 11 | **NYSE:LTC** | NYSE:LTC | **24** | ⚪C | 31.7 | 0 | No data | Trend Follow (HH/HL Intact) | 40.68 | 39.7 | 42.11 | 1.5:1 | fake_break/bull_trap/near_resist/low_rr |

---

## 🟢 Grade A — Ready to Enter (Tech + News confirmed, no overheat)

### 1. AMD (NASDAQ:AMD)

| Field | Value |
|-------|-------|
| Combined Score | **63** |
| Tech Score | 35.3 (Breakout (Squeeze Release)) |
| News Score | 92 → GREEN Long (Strong) |
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

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/7/22 22:46:55*