# Combined Analysis Report · Final Entry Ranking (US)
**Date:** 2026-05-07　　**Method:** Tech 60% × News 40% - Overheat Penalty
**Formula:** Combined = TechScore × 0.6 + NewsScore × 0.4 + (trendy ? +5 : 0) - (overheated && !trendy ? 5 : 0)　　(NewsScore is 0-100 normalized, neutral=50)
**Sources:** ./watchlist/us_tech_signals.json + ./watchlist/us_news_signals.json

---

## 🏆 Final Combined Ranking (A/B/C+/C all included)

| Rank | Name | Symbol | Combined | Grade | Tech | News | News Signal | Type | Entry | Stop | Target | R/R | Risks |
|------|------|--------|----------|-------|------|------|------------|------|-------|------|--------|-----|-------|
| 1 | **NYSE:FAF** | NYSE:FAF | **46.1** | 🔵B | 21.9 | 70 | GREEN Long (Mid) | Trend Follow (HH/HL Intact) | 69.77 | 66.94 | 73.91 | 1.5:1 | near_resist/bear_div/low_rr |
| 2 | **NYSE:ENVA** | NYSE:ENVA | **45.3** | 🔵B | 25.8 | 62 | GREEN Long (Mid) | Trend Continuation | 172.28 | 162.2 | 187.06 | 1.5:1 | mom_decay/near_resist/low_rr |

---

---

## ⚠️ Notes

1. **Do NOT chase overheated names at market** — wait for a pullback even if tech is strong.
2. **Honor stops** — close on daily close below stop, no exceptions.
3. **R/R below 1.5:1** — reduce size or skip.
4. **Position sizing**: Grade A 30%, B 20%, C+ (post-pullback) 15%, max 30% per name.

*Generated: 2026/5/7 08:12:57*