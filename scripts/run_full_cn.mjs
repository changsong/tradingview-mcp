#!/usr/bin/env node
/**
 * full:cn pipeline orchestrator — news + tech in parallel, then combined + limup.
 * Replaces fragile shell `&`/`wait`/`&&` chaining that breaks on Windows cmd.exe.
 */
import { spawn } from 'child_process';

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: true });
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`exit ${code}`)));
  });
}

console.log('╔══════════════════════════════════╗');
console.log('║  full:cn — 并行 news + tech     ║');
console.log('╚══════════════════════════════════╝\n');

try {
  await Promise.all([
    run('npm', ['run', 'news:cn']),
    run('npm', ['run', 'tech:cn']),
  ]);
} catch (err) {
  console.error('news:cn 或 tech:cn 失败:', err.message);
  process.exit(1);
}

await run('npm', ['run', 'combined:cn']);
await run('npm', ['run', 'limup:cn']);
