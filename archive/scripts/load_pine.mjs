#!/usr/bin/env node
/**
 * Load a Pine Script file into TradingView and compile it
 */
import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));

const TV = (args, stdin = null, timeout = 120000) => {
  const opts = { cwd: __dir, encoding: 'utf8', timeout };
  if (stdin) opts.input = stdin;
  const r = spawnSync('node', ['src/cli/index.js', ...args.split(' ')], opts);
  if (r.error) { console.error('Error:', r.error.message); return null; }
  try { return JSON.parse(r.stdout?.trim()); }
  catch { return { raw: r.stdout, stderr: r.stderr }; }
};

const file = process.argv[2];
if (!file) { console.error('Usage: node load_pine.mjs <file.pine>'); process.exit(1); }

const src = readFileSync(path.join(__dir, file), 'utf8');
console.log(`Loading ${file} (${src.split('\n').length} lines)...`);

const setResult = TV('pine set', src);
console.log('Set result:', JSON.stringify(setResult));

if (setResult?.success) {
  console.log('Compiling...');
  const compileResult = TV('pine compile');
  console.log('Compile result:', JSON.stringify(compileResult));
}
