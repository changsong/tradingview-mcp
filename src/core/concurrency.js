/**
 * Shared concurrency utilities.
 * Used by webNews.js, browserScraper.js, and pipeline scripts.
 */

/** Simple async concurrency limiter (max concurrent in-flight tasks). */
export function createLimiter(maxConcurrent) {
  let active = 0;
  const queue = [];
  const dequeue = () => {
    if (active >= maxConcurrent || queue.length === 0) return;
    const { fn, resolve, reject } = queue.shift();
    active++;
    Promise.resolve()
      .then(fn)
      .then(resolve, reject)
      .finally(() => {
        active--;
        dequeue();
      });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push({ fn, resolve, reject });
    dequeue();
  });
}

/** Simple LRU cache. */
export class LRUCache {
  constructor(max = 200) {
    this.max = max;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return undefined;
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }
  set(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.max) this.map.delete(this.map.keys().next().value);
  }
}
