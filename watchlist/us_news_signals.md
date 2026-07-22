---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 96e0402ca683a23de686ac6d805202d6_448b3199825d11f18a64525400826444
    ReservedCode1: Ml8Vn3ui8GnwPbTro8TkFkQnvFBXnHdFDSobK6JlsNH69nviE5MAmDSDA7vDBQic7ZIQ7wFy+FXmY0kKqm0jpueiaTyzZDGN+wNTP8AWkTd+mUDF//WZOo0zq+kL0it/ELDJD+QW/djBtaU7FV7SiS7g4F7CWYiD6HuASUJXPMyOEAj8Ae+bBB1qd7Q=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 96e0402ca683a23de686ac6d805202d6_448b3199825d11f18a64525400826444
    ReservedCode2: Ml8Vn3ui8GnwPbTro8TkFkQnvFBXnHdFDSobK6JlsNH69nviE5MAmDSDA7vDBQic7ZIQ7wFy+FXmY0kKqm0jpueiaTyzZDGN+wNTP8AWkTd+mUDF//WZOo0zq+kL0it/ELDJD+QW/djBtaU7FV7SiS7g4F7CWYiD6HuASUJXPMyOEAj8Ae+bBB1qd7Q=
---

# US Stock News Sentiment Analysis - Tradeable Signals (v2)
**Analysis Date:** 2026-07-18  |  **News Window:** 2026-07-11 ~ 2026-07-18
**Stock Pool:** us_selected.txt (2)  |  **LLM Rerate:** enabled
**Score Scale:** 0-100 normalized (neutral=50, strong long ≥75, avoid ≤39)

## Summary Overview (sorted by Normalized Score)

| # | Ticker | Score | Raw | Signal | Suitable For | Confidence | Kept/Dropped | Key Pattern |
|---|--------|-------|-----|--------|--------------|------------|--------------|-------------|
| 1 | **NASDAQ:AMD** | **50** | -0.01 | ⚪ No Trade (Weak Bullish) | Watch | Low | 12/0 | Bullish-to-Bearish Reversal (reversal) |
| 2 | **NASDAQ:NVDA** | **43** | -1.69 | ⚪ No Trade (Neutral) | Watch | Low | 11/0 | - |

---

## ⚪ Watch / Neutral (2)

### NASDAQ:AMD
- Score: 50/100 | raw: -0.01 | News: 12 kept / 0 dropped | Mildly positive, insufficient signal — watch for stronger catalyst
- Patterns: Bullish-to-Bearish Reversal (reversal)

### NASDAQ:NVDA
- Score: 43/100 | raw: -1.69 | News: 11 kept / 0 dropped | No clear directional bias — stay flat

---

## False Signal Detection Checklist

| Risk Type | Detection Criteria | Response |
|-----------|-------------------|----------|
| Pre-Priced | No hard catalyst (earnings/policy/M&A), score ≥60 inflated | Wait for real announcement |
| Overheated | All news bullish, zero bearish (5+ items) | Wait for pullback to confirm support |
| False Positive | Rumor-driven >50%, no official confirmation | Hold until press release/filing |
| Divergence | Black swan present but mostly bullish | Avoid first, wait for clarity |

---
*Generated: 2026-07-18T03:50:34.730Z | Sources: Yahoo / Finnhub / MarketWatch / NewsAPI / Seeking Alpha + deepseek-chat*
*（内容由AI生成，仅供参考）*
