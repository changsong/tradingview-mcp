import { searchUSNews } from './src/core/usNews.js';

const result = await searchUSNews({ symbol: 'NYSE:JHG', count: 15 });
console.log(JSON.stringify(result, null, 2));
