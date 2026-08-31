import CDP from 'chrome-remote-interface';

const targets = await CDP.List({ port: 9222 });
const tabbed = targets.filter(t => t.type === 'page' && t.title.includes('tabbed-window'));
console.log('tabbed targets:', tabbed.length);
for (const t of tabbed) {
  console.log('reload target:', t.id, t.url);
  try {
    const client = await CDP({ target: t, port: 9222 });
    await client.Page.enable();
    await client.Page.reload({ ignoreCache: true });
    client.close();
    console.log('reloaded');
  } catch (e) {
    console.log('reload error:', e.message);
  }
}
process.exit(0);
