#!/usr/bin/env node
/**
 * Stage 4.5 · CN 日内缺口分析 — entry point.
 *
 *   npm run gap:cn
 */

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

import { runGap } from './gapCore.mjs';

runGap('cn').then(() => process.exit(0)).catch(e => {
  console.error('\n❌ gap:cn 失败:', e.message);
  process.exit(1);
});
