#!/usr/bin/env node
/**
 * Stage 4.5 · US 日内缺口分析 — entry point.
 *
 *   npm run gap:us
 */

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
process.chdir(resolve(dirname(fileURLToPath(import.meta.url)), '../..'));

import { runGap } from './gapCore.mjs';

runGap('us').then(() => process.exit(0)).catch(e => {
  console.error('\n❌ gap:us 失败:', e.message);
  process.exit(1);
});
