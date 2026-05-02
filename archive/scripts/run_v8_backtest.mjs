// run_v8_backtest.mjs  – batch-test A Share SQZMOM PRO v8 across 9 symbols
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { readFileSync } from 'fs';

const SYMBOLS = [
  'SZSE:300750',
  'SZSE:002245',
  'SZSE:300408',
  'SZSE:000657',
  'SSE:605198',
  'SZSE:300037',
  'SZSE:300661',
  'SZSE:002475',
  'SSE:601126',
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callTool(client, name, args = {}) {
  // Wrap with extended timeout by re-trying on timeout
  console.log(`[CALL] ${name}`, Object.keys(args).length ? JSON.stringify(args) : '');
  try {
    const res = await client.callTool(name, args, undefined, { timeout: 120000 });
    return res;
  } catch (err) {
    console.error(`[ERR] ${name}:`, err.message);
    return { error: err.message };
  }
}

async function main() {
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['src/server.js'],
    cwd: 'D:/trade_workspace/tradingview-mcp',
    env: { ...process.env },
  });

  const client = new Client({ name: 'v8-backtest', version: '1.0' });
  await client.connect(transport);
  console.log('Connected to MCP server');

  // ── Step 2: Inject Pine Script ──────────────────────────────────────────────
  const code = readFileSync('D:/trade_workspace/tradingview-mcp/A_Share_SQZMOM_PRO_v8_Daily.pine', 'utf8');
  console.log(`\n=== STEP 2: pine_set_source (${code.length} chars) ===`);
  const setResult = await callTool(client, 'pine_set_source', { source: code });
  console.log('pine_set_source:', JSON.stringify(setResult, null, 2));

  await sleep(3000);

  // ── Step 3: Compile ─────────────────────────────────────────────────────────
  console.log('\n=== STEP 3: pine_smart_compile ===');
  const compileResult = await callTool(client, 'pine_smart_compile', {});
  console.log('pine_smart_compile:', JSON.stringify(compileResult, null, 2));

  await sleep(3000);

  // ── Step 4: Get errors ──────────────────────────────────────────────────────
  console.log('\n=== STEP 4: pine_get_errors ===');
  const errorResult = await callTool(client, 'pine_get_errors', {});
  console.log('pine_get_errors:', JSON.stringify(errorResult, null, 2));

  await sleep(5000);

  // ── Step 5: Loop over symbols ───────────────────────────────────────────────
  const results = [];
  for (const symbol of SYMBOLS) {
    console.log(`\n=== STEP 5: Testing ${symbol} ===`);

    // Switch symbol
    const symResult = await callTool(client, 'chart_set_symbol', { symbol });
    console.log('chart_set_symbol:', JSON.stringify(symResult, null, 2));

    // Wait for data to load
    await sleep(5000);

    // Capture strategy tester screenshot
    const ssResult = await callTool(client, 'capture_screenshot', { region: 'strategy_tester' });
    console.log('screenshot:', JSON.stringify(ssResult, null, 2));

    results.push({ symbol, set: symResult, screenshot: ssResult });

    await sleep(2000);
  }

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify({ compile: compileResult, errors: errorResult, results }, null, 2));

  await client.close();
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
