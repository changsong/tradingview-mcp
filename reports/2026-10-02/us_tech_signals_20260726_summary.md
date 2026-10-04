# US Stock Multi-Timeframe Technical Signals
**Analysis Date**: 2026-07-25 (latest available; TradingView CDP unavailable on 07-26)
**Pipeline**: `npm run tech:us` → `analyze_tech_us_mtf.mjs` v2
**Universe**: 19 stocks from `us_selected.txt` + news signals + SPY benchmark
**TF Weights**: 1W(25%) + 1D(40%) + 4H(25%) + 1H(10%)

---

## Signal Summary by Conclusion

### Long (17 stocks) — 全部不追涨 (Chase = NO)

| # | Symbol | Final | Conf | Type | Chase | Key Risks |
|---|--------|-------|------|------|-------|-----------|
| 1 | NYSE:SO | +65.6 | Low | Breakout (Squeeze Release) | NO | 压力位(近52W高) / 震荡(ADX18) / 劣R/R(0.1) |
| 2 | NYSE:CSW | +53.3 | Low | Pullback Buy (Near Support) | NO | 压力位 / 震荡(ADX17) / 劣R/R(0.9) |
| 3 | NYSE:MMM | +52.1 | Medium | Trend Follow (HH/HL Intact) | NO | 压力位 / 劣R/R(0) |
| 4 | NYSE:IRM | +49.3 | Low | Pullback Buy (Near Support) | NO | 压力位 / 震荡(ADX16) / 劣R/R(0.4) |
| 5 | NASDAQ:WWD | +44.6 | Medium | Pullback Buy (Near Support) | NO | 动能衰 / 震荡(ADX18) |
| 6 | NYSE:LTC | +43.9 | Low | Trend Follow (HH/HL Intact) | NO | 压力位 / 劣R/R(0.2) — ADX35.7★强势 |
| 7 | NASDAQ:ACGL | +41.8 | Low | Trend Continuation | NO | 压力位 / 动能衰 / 劣R/R(0) |
| 8 | NYSE:SXI | +36.7 | Low | Pullback Buy (Near Support) | NO | 动能衰 / 震荡(ADX15) — R/R 5.2最佳 |
| 9 | NYSE:ENVA | +34.3 | Low | Trend Continuation | NO | 压力位 / 动能衰 / 劣R/R(0.5) |
| 10 | NYSE:PFS | +34.2 | Low | Breakout (Squeeze Release) | NO | 压力位 / 动能衰 / 震荡 / 劣R/R(0.1) |
| 11 | NYSE:DELL | +33.1 | Low | Breakout (Squeeze Release) | NO | 压力位 / 动能衰 / 劣R/R(0) |
| 12 | NASDAQ:BGC | +30.4 | Low | Trend Continuation | NO | 压力位 / 震荡(ADX14) / 劣R/R(0.4) |
| 13 | NYSE:SN | +30.1 | Low | Pullback Buy (Near Support) | NO | 压力位 / 动能衰 / 熊背离 / 劣R/R(1.0) |
| 14 | NASDAQ:BHRB | +25.0 | Low | Pullback Buy (Near Support) | NO | 压力位 / 动能衰 / 熊背离 / 劣R/R(0) |
| 15 | OTC:SMNEY | +22.6 | Medium | Trend Follow (HH/HL Intact) | NO | 诱多(BULL-TRAP) / 假突(FAKE-BRK) / 压力位 |
| 16 | NYSE:SM | +19.3 | Medium | Trend Continuation | NO | 假突(FAKE-BRK) / 压力位 / 劣R/R(0) |
| 17 | NASDAQ:NWBI | +16.2 | Low | Pullback Buy (Near Support) | NO | 压力位 / 动能衰 / 劣R/R(0.4) |

### Watch (2 stocks) — 观望

| # | Symbol | Final | Conf | Type | Chase | Key Risks |
|---|--------|-------|------|------|-------|-----------|
| 18 | NASDAQ:TTMI | +16.3 | Medium | Reversal (Bullish RSI Divergence) | NO | RS -18.4%(弱于大盘) — 等背离确认 |
| 19 | NYSE:GLW | +5.2 | Low | Range / No Edge | NO | 压力位 / 震荡(ADX16) / 劣R/R(0.2) — 无交易边缘 |

---

## 信号类型分布

| Type | Count | Symbols |
|------|-------|---------|
| **Pullback Buy (Near Support)** | 7 | CSW, IRM, WWD, SXI, SN, BHRB, NWBI |
| **Trend Continuation** | 4 | ACGL, ENVA, BGC, SM |
| **Breakout (Squeeze Release)** | 3 | SO, PFS, DELL |
| **Trend Follow (HH/HL Intact)** | 3 | MMM, LTC, SMNEY |
| **Reversal (Bullish RSI Divergence)** | 1 | TTMI |
| **Range / No Edge** | 1 | GLW |

---

## 关键发现

### 1. 全场不追涨 (Chase = NO × 19/19)
所有19只股票均不建议追涨。SQZMOM 指标全部为 WAIT 或 UNKNOWN，意味着 squeeze 动量尚未释放，追涨风险极高。

### 2. 压力位风险主导 (RESIST × 17/19)
近90%的标的处于关键阻力位附近，突破前不宜追入。仅 TTMI（反转 setup）和 GLW（无边缘）不在此列。

### 3. 劣势 R/R 普遍 (POOR-RR × 16/19)
绝大多数标的的风险回报比 < 1.0，仅 SXI (5.2)、TTMI (25.2)、WWD (10.8) 和 SN (1.0) 有可接受的 R/R。

### 4. 动能衰减警告 (MOM-DECAY × 9/19)
近半数标的出现动能衰减信号，意味着当前上涨趋势可能正在失去动力。

### 5. 诱多/假突破风险 (BULL-TRAP / FAKE-BRK × 2)
- **OTC:SMNEY**: 同时存在 BULL-TRAP + FAKE-BRK，高度危险
- **NYSE:SM**: FAKE-BRK 风险

### 6. 熊背离 (BEAR-DIV × 2)
- **NYSE:SN** 和 **NASDAQ:BHRB** 出现 RSI 熊背离，上涨趋势可能反转

---

## Top 3 关注标的

### 🥇 NYSE:SO (Southern Company) — Final +65.6
- **结论**: Long (Low confidence) | **类型**: Breakout (Squeeze Release)
- **追涨**: NO | **SQZMOM**: WAIT
- **入场**: $97.25 | **止损**: $94.53 | **目标**: $97.40 | **R/R**: 0.1
- **风险**: 近52周高点压力 / ADX 18.1 震荡 / R/R 极差(0.1)
- **策略**: 等待 squeeze 释放确认 + 回踩 EMA20 后再考虑

### 🥈 NYSE:CSW (CSW Industrials) — Final +53.3
- **结论**: Long (Low confidence) | **类型**: Pullback Buy (Near Support)
- **追涨**: NO | **SQZMOM**: WAIT
- **R/R**: 0.9 | **ADX**: 16.7 (震荡)
- **风险**: 压力位 / 震荡市场 / R/R 不足
- **策略**: 等待支撑位确认 + 放量突破

### 🥉 NYSE:MMM (3M) — Final +52.1
- **结论**: Strong Long (Medium confidence) | **类型**: Trend Follow (HH/HL Intact)
- **追涨**: NO | **ADX**: 28.9 (趋势正常)
- **RS vs SPY**: +22% (领先大盘)
- **风险**: 压力位 / R/R = 0 (无目标空间)
- **策略**: 趋势完整但无入场点，等回踩 EMA20

---

## ⚠️ 数据时效性说明

- 本报告基于 **2026-07-25** 的技术分析数据
- 原定于 2026-07-26 16:58 执行的 `npm run tech:us` 因 TradingView Desktop 无法启动 CDP 而未能更新
- TradingView v3.0.0.7652 拒绝 `--remote-debugging-port=9222` 参数，MSIX 包注册缺失
- **建议**: 手动重启 TradingView Desktop 后重新执行 `npm run tech:us` 获取最新信号

---

*Data source: TradingView Desktop via CDP | Pipeline: tradingview-mcp v1.0.0*
*Disclaimer: 以上内容由 AI 基于公开信息整理生成，仅供参考，不构成任何投资建议或个股推荐。投资有风险，决策需谨慎。*
