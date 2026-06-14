# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# TradingView MCP — Claude Instructions

78 tools for reading and controlling a live TradingView Desktop chart via CDP (port 9222).

## Development Commands

```bash
# Run as MCP server (stdio transport — for use with Claude Code)
npm start

# CLI access — every MCP tool is a subcommand
node src/cli/index.js --help      # or: npm run tv -- --help
node src/cli/index.js health      # example tool call
node src/cli/index.js chart get   # example with subcommand

# Tests
npm test                    # e2e + unit (requires TradingView running on port 9222)
npm run test:unit           # unit tests only — no TradingView required
npm run test:e2e            # e2e tests only — requires TradingView
npm run test:cli            # CLI tests only
node --test tests/pine_analyze.test.js   # single test file

# Launch TradingView with CDP enabled (Windows)
scripts\launch_tv_debug.bat [port]   # default port 9222
```

> E2E tests require TradingView Desktop running with `--remote-debugging-port=9222`. Unit tests (`pine_analyze.test.js`, `cli.test.js`) run without TradingView.

## Code Architecture

```
Claude Code ←→ MCP Server (stdio) ←→ CDP (localhost:9222) ←→ TradingView Desktop (Electron)
```

The codebase has a strict two-layer structure:

| Layer | Path | Role |
|-------|------|------|
| Tool registration | `src/tools/*.js` | Thin wrappers: validate input with zod, call core, format response |
| Core logic | `src/core/*.js` | All actual CDP interactions and business logic |
| CLI | `src/cli/commands/*.js` | One file per tool group; calls core directly |
| Connection | `src/connection.js` | CDP client singleton, `evaluate()` / `evaluateAsync()`, injection-safe helpers |
| Entry point | `src/server.js` | Creates McpServer, imports all tools from `src/tools/`, starts stdio transport |

**Adding a new tool:** implement in `src/core/`, register in `src/tools/` and `src/cli/commands/`, export from `src/core/index.js`.

**Injection safety:** Always use `safeString(str)` from `connection.js` when interpolating user input into JS expressions sent via CDP. Use `requireFinite(value, name)` for numeric validation. Never string-interpolate raw user input into `evaluate()` calls.

**CDP path constants:** `KNOWN_PATHS` in `connection.js` documents the discovered `window.TradingViewApi.*` access paths. If TradingView updates break a tool, this is where to update the paths.

Pine graphics path: `study._graphics._primitivesCollection.dwglines.get('lines').get(false)._primitivesDataById`

## Analysis Pipeline

The end-to-end stock-screening workflow is a fixed 5-stage pipeline. Each stage maps to **one** script — do NOT regenerate scripts.

```
1-scan  → 2-news  → 3-technical  → 4-combined  → reports/<YYYY-MM-DD>/  (auto snapshot)
                                              ↘ (next day) 5-review → 权重调整建议
```

| Stage | Script | NPM | Output |
|-------|--------|-----|--------|
| 1. Scan | `pipeline/1-scan/scan_stocks.js` | `scan:cn` / `scan:us` | `watchlist/{cn,us}_selected.txt` |
| 2. News | `pipeline/2-news/analyze_{cn,us}_news.mjs` | `news:cn` / `news:us` | `watchlist/{cn,us}_news_signals.{md,json}` |
| 3. Technical | `pipeline/3-technical/analyze_tech_{cn,us}_mtf.mjs` | `tech:cn` / `tech:us` | `watchlist/{cn,us}_tech_signals.{md,json}` |
| 4. Combined | `pipeline/4-combined/analyze_{cn,us}_combined.mjs` | `combined:cn` / `combined:us` | `watchlist/{cn,us}_combined_signals.md` + `reports/<date>/` |
| 5. Review | `pipeline/5-review/review_{cn,us}.mjs` | `review:cn` / `review:us` | `watchlist/{cn,us}_review.{md,json}` + `reports/<date>/` |

**JSON contracts** are the integration layer. Each `*.md` is human-readable; each `*.json` is the machine input for the next stage. The combined-stage script reads the two upstream JSONs and never hardcodes data — that was the historical pain point and is what these contracts solve.

- News JSON: `{ generated_at, market, stocks: { "<sym>": { name, score, signal, patterns, top_news, ... } } }`
- Tech JSON: `{ generated_at, market, weights, stocks: { "<sym>": { name, tech_score, verdict, type, chase, flags, price, atr_pct, tf: { "1H":..., "4H":..., "1D":..., "1W":... } } } }`

**Combined formula**: `Combined = TechScore × 0.6 + NewsScore × 2 × 0.4 - (overheated ? 10 : 0)`. Grades A/B/C+/C/D drive entry/stop/target levels via ATR multipliers per trade type (breakout 1.8/2.5, pullback 2.0/2.0, trend 1.5/2.2, overheat 2.2/2.0).

**Snapshot**: `pipeline/lib/snapshot.mjs` copies `watchlist/<market>_*.{md,json}` to `reports/<YYYY-MM-DD>/` at the end of each combined run, giving a per-day audit trail.

**Stage 5 — 回归检核 (Regression validation)**: Run after market close (or before next session). `review:cn` / `review:us` fetches today's daily change% for every symbol in `<market>_selected.txt`, picks top-10 gainers + top-10 losers, looks each up in the **previous-day** `reports/<date>/` to extract categorical features (news patterns, tech flags, RSI/ADX/MACD buckets), then tallies common features per group and emits weight-adjustment recommendations with exact `file:line` references. **It does NOT modify any scoring source — recommendations require human review.** Outputs land in `watchlist/<market>_review.{md,json}` and are snapshotted to `reports/<today>/`. Independent of `full:cn` / `full:us` (different time semantics).

**One-shot**: `npm run full:cn` / `npm run full:us` runs news → tech → combined sequentially. (Stage 5 is intentionally not chained — needs today's close + yesterday's snapshot.)

**Archived assets**: legacy analysis scripts, time-stamped reports, and old Pine versions live under `archive/` (kept for reference; do not edit). Active Pine strategies live in `pine/`.

## Decision Tree — Which Tool When

### "What's on my chart right now?"
1. `chart_get_state` → symbol, timeframe, chart type, list of all indicators with entity IDs
2. `data_get_study_values` → current numeric values from all visible indicators (RSI, MACD, BBands, EMAs, etc.)
3. `quote_get` → real-time price, OHLC, volume for current symbol

### "What levels/lines/labels are showing?"
Custom Pine indicators draw with `line.new()`, `label.new()`, `table.new()`, `box.new()`. These are invisible to normal data tools. Use:

1. `data_get_pine_lines` → horizontal price levels drawn by indicators (deduplicated, sorted high→low)
2. `data_get_pine_labels` → text annotations with prices (e.g., "PDH 24550", "Bias Long ✓")
3. `data_get_pine_tables` → table data formatted as rows (e.g., session stats, analytics dashboards)
4. `data_get_pine_boxes` → price zones / ranges as {high, low} pairs

Use `study_filter` parameter to target a specific indicator by name substring (e.g., `study_filter: "Profiler"`).

### "Give me price data"
- `data_get_ohlcv` with `summary: true` → compact stats (high, low, range, change%, avg volume, last 5 bars)
- `data_get_ohlcv` without summary → all bars (use `count` to limit, default 100)
- `quote_get` → single latest price snapshot

### "Analyze my chart" (full report workflow)
1. `quote_get` → current price
2. `data_get_study_values` → all indicator readings
3. `data_get_pine_lines` → key price levels from custom indicators
4. `data_get_pine_labels` → labeled levels with context (e.g., "Settlement", "ASN O/U")
5. `data_get_pine_tables` → session stats, analytics tables
6. `data_get_ohlcv` with `summary: true` → price action summary
7. `capture_screenshot` → visual confirmation

### "Change the chart"
- `chart_set_symbol` → switch ticker (e.g., "AAPL", "ES1!", "NYMEX:CL1!")
- `chart_set_timeframe` → switch resolution (e.g., "1", "5", "15", "60", "D", "W")
- `chart_set_type` → switch chart style (Candles, HeikinAshi, Line, Area, Renko, etc.)
- `chart_manage_indicator` → add or remove studies (use full name: "Relative Strength Index", not "RSI")
- `indicator_set_inputs` → change indicator settings (length, source, etc.)
- `chart_scroll_to_date` → jump to a date (ISO format: "2025-01-15")
- `chart_set_visible_range` → zoom to exact date range (unix timestamps)

### "Work on Pine Script"
1. `pine_set_source` → inject code into editor
2. `pine_smart_compile` → compile with auto-detection + error check
3. `pine_get_errors` → read compilation errors
4. `pine_get_console` → read log.info() output
5. `pine_get_source` → read current code back (WARNING: can be very large for complex scripts)
6. `pine_save` → save to TradingView cloud
7. `pine_new` → create blank indicator/strategy/library
8. `pine_open` → load a saved script by name

### "Practice trading with replay"
1. `replay_start` with `date: "2025-03-01"` → enter replay mode
2. `replay_step` → advance one bar
3. `replay_autoplay` → auto-advance (set speed with `speed` param in ms)
4. `replay_trade` with `action: "buy"/"sell"/"close"` → execute trades
5. `replay_status` → check position, P&L, current date
6. `replay_stop` → return to realtime

### "Screen multiple symbols"
- `batch_run` with `symbols: ["ES1!", "NQ1!", "YM1!"]` and `action: "screenshot"` or `"get_ohlcv"`

### "Draw on the chart"
- `draw_shape` → horizontal_line, trend_line, rectangle, text (pass point + optional point2)
- `draw_list` → see what's drawn
- `draw_remove_one` → remove by ID
- `draw_clear` → remove all

### "Manage alerts"
- `alert_create` → set price alert (condition: "crossing", "greater_than", "less_than")
- `alert_list` → view active alerts
- `alert_delete` → remove alerts

### "Multi-pane layouts"
- `pane_list` → list all panes and their symbols
- `pane_set_layout` → set grid layout: "s" (single), "2h", "2v", "4", "6", "8"
- `pane_focus` → focus a specific pane
- `pane_set_symbol` → set symbol on a specific pane

### "Multi-tab management"
- `tab_list` → list open chart tabs
- `tab_new` → open a new chart tab
- `tab_close` → close a tab
- `tab_switch` → switch to a tab

### "Navigate the UI"
- `ui_open_panel` → open/close pine-editor, strategy-tester, watchlist, alerts, trading
- `ui_click` → click buttons by aria-label, text, or data-name
- `layout_switch` → load a saved layout by name
- `ui_fullscreen` → toggle fullscreen
- `capture_screenshot` → take a screenshot (regions: "full", "chart", "strategy_tester")

### "TradingView isn't running"
- `tv_launch` → auto-detect and launch TradingView with CDP on Mac/Win/Linux
- `tv_health_check` → verify connection is working

## Context Management Rules

These tools can return large payloads. Follow these rules to avoid context bloat:

1. **Always use `summary: true` on `data_get_ohlcv`** unless you specifically need individual bars
2. **Always use `study_filter`** on pine tools when you know which indicator you want — don't scan all studies unnecessarily
3. **Never use `verbose: true`** on pine tools unless the user specifically asks for raw drawing data with IDs/colors
4. **Avoid calling `pine_get_source`** on complex scripts — it can return 200KB+. Only read if you need to edit the code.
5. **Avoid calling `data_get_indicator`** on protected/encrypted indicators — their inputs are encoded blobs. Use `data_get_study_values` instead for current values.
6. **Use `capture_screenshot`** for visual context instead of pulling large datasets — a screenshot is ~300KB but gives you the full visual picture
7. **Call `chart_get_state` once** at the start to get entity IDs, then reference them — don't re-call repeatedly
8. **Cap your OHLCV requests** — `count: 20` for quick analysis, `count: 100` for deeper work, `count: 500` only when specifically needed

### Output Size Estimates (compact mode)
| Tool | Typical Output |
|------|---------------|
| `quote_get` | ~200 bytes |
| `data_get_study_values` | ~500 bytes (all indicators) |
| `data_get_pine_lines` | ~1-3 KB per study (deduplicated levels) |
| `data_get_pine_labels` | ~2-5 KB per study (capped at 50) |
| `data_get_pine_tables` | ~1-4 KB per study (formatted rows) |
| `data_get_pine_boxes` | ~1-2 KB per study (deduplicated zones) |
| `data_get_ohlcv` (summary) | ~500 bytes |
| `data_get_ohlcv` (100 bars) | ~8 KB |
| `capture_screenshot` | ~300 bytes (returns file path, not image data) |

## Tool Conventions

- All tools return `{ success: true/false, ... }`
- Entity IDs (from `chart_get_state`) are session-specific — don't cache across sessions
- Pine indicators must be **visible** on chart for pine graphics tools to read their data
- `chart_manage_indicator` requires **full indicator names**: "Relative Strength Index" not "RSI", "Moving Average Exponential" not "EMA", "Bollinger Bands" not "BB"
- Screenshots save to `screenshots/` directory with timestamps
- OHLCV capped at 500 bars, trades at 20 per request
- Pine labels capped at 50 per study by default (pass `max_labels` to override)

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **tradingview-mcp** (14166 symbols, 18447 relationships, 300 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> Index stale? Run `node .gitnexus/run.cjs analyze` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? `npx gitnexus analyze` (npm 11 crash → `npm i -g gitnexus`; #1939).

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows. For regression review, compare against the default branch: `detect_changes({scope: "compare", base_ref: "main"})`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit changes without running `detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/tradingview-mcp/context` | Codebase overview, check index freshness |
| `gitnexus://repo/tradingview-mcp/clusters` | All functional areas |
| `gitnexus://repo/tradingview-mcp/processes` | All execution flows |
| `gitnexus://repo/tradingview-mcp/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
