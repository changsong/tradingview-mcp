/**
 * 抓取雪球上SON股票的数据
 * 使用前请确保：
 * 1. Chrome已在调试模式启动 (运行 scripts\start_chrome_debug.bat)
 * 2. 在Chrome中访问 https://xueqiu.com/S/SON 并完成验证
 * 3. 保持Chrome打开
 */

import { fetchXueqiuPostsCDP } from './fetch_xueqiu_cdp.js';

console.log('================================================================================');
console.log('抓取雪球 - SON股票数据');
console.log('================================================================================');
console.log('');

const posts = await fetchXueqiuPostsCDP('SON', 20);

if (posts.length > 0) {
  console.log(`✅ 成功获取 ${posts.length} 条数据`);
  console.log('');
  console.log('📝 帖子列表:');
  console.log('');

  posts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   作者: ${post.author}`);
    console.log(`   日期: ${post.date}`);
    console.log(`   回复: ${post.replies} | 阅读: ${post.views}`);
    console.log(`   链接: ${post.url}`);
    console.log('');
  });

  // 保存到文件
  const fs = await import('fs');
  const filename = `son_xueqiu_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  fs.writeFileSync(filename, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`💾 数据已保存到: ${filename}`);

} else {
  console.log('❌ 未获取到数据');
  console.log('');
  console.log('请确保:');
  console.log('1. Chrome已启动并在调试模式 (端口9222)');
  console.log('2. 在Chrome中访问 https://xueqiu.com/S/SON');
  console.log('3. 完成滑动验证码');
  console.log('4. 如需要，登录雪球账号');
  console.log('5. 保持Chrome打开状态');
}

console.log('');
console.log('================================================================================');
