#!/usr/bin/env node
/**
 * full:cn pipeline orchestrator — news + tech in parallel, then combined + limup.
 * Uses direct `node script` calls instead of `npm run` — avoids cmd.exe / npm.cmd
 * wrapper layers that can swallow the close event after CDP-heavy child processes exit.
 */
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function run(script, label) {
  return new Promise((resolve, reject) => {
    const p = spawn(process.execPath, [script], { stdio: 'inherit', cwd: ROOT });
    p.on('error', err => reject(new Error(`${label}: ${err.message}`)));
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`${label}: exit ${code}`)));
  });
}

const PIPELINE = resolve(ROOT, 'pipeline');

console.log('╔══════════════════════════════════╗');
console.log('║  full:cn — 并行 news + tech     ║');
console.log('╚══════════════════════════════════╝\n');

try {
  await Promise.all([
    run(`${PIPELINE}/2-news/analyze_cn_news.mjs`, 'news:cn'),
    run(`${PIPELINE}/3-technical/analyze_tech_cn_mtf.mjs`, 'tech:cn'),
  ]);
} catch (err) {
  console.error('news:cn 或 tech:cn 失败:', err.message);
  process.exit(1);
}

await run(`${PIPELINE}/4-combined/analyze_cn_combined.mjs`, 'combined:cn');
await run(`${PIPELINE}/3.5-limup/predict_cn_limup.mjs`, 'limup:cn');
await run(`${PIPELINE}/4.5-gap/analyze_cn_intraday_gap.mjs`, 'gap:cn');
