const fs=require('fs');
const tech=JSON.parse(fs.readFileSync('./watchlist/us_tech_signals.json','utf8'));
const news=JSON.parse(fs.readFileSync('./watchlist/us_news_signals.json','utf8'));
function classifyNews(signal){
  const s=String(signal??'');const overheated=/Overheat|过热/i.test(s);
  const noTrade=/No Trade|No Data|Neutral|Watch/i.test(s);
  const longSig=/\bLong\b|\bStrong\b|GREEN/i.test(s)&&!overheated&&!noTrade;
  const shortSig=(/\bShort\b|Avoid|Bearish|RED/i.test(s))&&!longSig&&!overheated;
  return {overheated,long:longSig,short:shortSig};
}
function gradeOf(tech,cls){
  if(cls.overheated&&tech>=38)return 'C+';
  if(cls.long&&!cls.overheated&&tech>=30)return 'A';
  if(cls.long&&!cls.overheated&&tech>=15)return 'B';
  if(!cls.overheated&&!cls.short&&tech>=20)return 'C';
  return 'D';
}
function alignPct(td){if(!td.alignment)return null;const m=String(td.alignment).match(/(\d+)\/4/);return m?parseInt(m[1],10)/4:null;}
const rows=[];
for(const [sym,td] of Object.entries(tech.stocks)){
  const nd=news.stocks?.[sym]||{score:0,signal:'No data',name:td.name};
  const cls=classifyNews(nd.signal);const g=gradeOf(td.tech_score??0,cls);const ap=alignPct(td);
  rows.push({sym,grade:g,tech:+(td.tech_score??0).toFixed(1),align:td.alignment,ap,newsSig:String(nd.signal??'')});
}
rows.sort((a,b)=>b.tech-a.tech);
const gradeEmoji=g=>g==='A'?'🟢A':g==='B'?'🔵B':g==='C+'?'🟡C+':g==='C'?'⚪C':'⚫D';
const now=new Date().toISOString().replace('T',' ').slice(0,19)+' UTC';
let md='';
md+='# US Grade A Picks — 三条件精选名单\n\n';
md+='**生成时间:** '+now+'（当日 combined:us 同一批次）\n';
md+='**数据源:** ./watchlist/us_tech_signals.json ('+rows.length+' stocks, '+tech.generated_at+') + ./watchlist/us_news_signals.json ('+Object.keys(news.stocks).length+' stocks, '+news.generated_at+')\n';
md+='**筛选方法:** 复现 pipeline/4-combined 的 gradeOf + classifyNews 逻辑，对全部 '+rows.length+' 只股票做三条件交集判定。\n\n';
md+='---\n\n## 筛选条件\n\n| # | 条件 | 要求 |\n|---|------|------|\n';
md+='| 1 | 等级 Grade | 🟢A（long && !overheated && tech >= 30）|\n';
md+='| 2 | 多周期对齐 MTF Alignment | 3/4 (75%) 或 4/4 (100%) |\n';
md+='| 3 | News Signal | GREEN Long (Strong) |\n\n---\n\n';
// result
const A=rows.filter(r=>r.grade==='A');
const alignOK=rows.filter(r=>r.ap&&r.ap>=0.75);
const strong=rows.filter(r=>r.newsSig==='GREEN Long (Strong)');
const picks=rows.filter(r=>r.grade==='A'&&r.ap&&r.ap>=0.75&&r.newsSig==='GREEN Long (Strong)');
md+='## 筛选结果：'+picks.length+' 只命中\n\n';
if(picks.length===0){
  md+='当前批次 **无股票同时满足以上三个条件**，名单为空。\n\n';
}else{
  md+='| Symbol | Grade | Tech | Alignment | News Signal |\n|--------|-------|------|------------|-------------|\n';
  picks.forEach(r=>{md+='| '+r.sym+' | '+gradeEmoji(r.grade)+' | '+r.tech+' | '+r.align+' | '+r.newsSig+' |\n';});
  md+='\n';
}
md+='### 分条件命中统计\n\n';
md+='| 条件 | 命中数 / 总数 | 命中标的 |\n|------|--------------|----------|\n';
md+='| ① 等级 🟢A | '+A.length+' / '+rows.length+' | '+((A.length?A.map(r=>r.sym).join(', '):'—'))+' |\n';
md+='| ② MTF 对齐 ≥75% | '+alignOK.length+' / '+rows.length+' | '+alignOK.map(r=>r.sym).join(', ')+' |\n';
md+='| ③ News = GREEN Long (Strong) | '+strong.length+' / '+rows.length+' | '+(strong.length?strong.map(r=>r.sym).join(', '):'—')+' |\n\n';
// near miss
const greens=rows.filter(r=>/GREEN/.test(r.newsSig));
md+='### 近失候选（满足 2/3 条件）\n\n';
if(greens.length===0)md+='无。\n\n';
else{
  md+='当前唯一绿色 News 信号标的如下，但因 News 强度为 (Mid) 而非 (Strong) 或 Grade 未达 A 而落选：\n\n';
  md+='| Symbol | Grade | Tech | Alignment | News Signal | 落选原因 |\n|--------|-------|------|------------|-------------|----------|\n';
  greens.forEach(r=>{
    const reasons=[];
    if(r.grade!=='A')reasons.push('Grade='+r.grade+'（非A）');
    if(!(r.ap&&r.ap>=0.75))reasons.push('MTF='+r.align);
    if(r.newsSig!=='GREEN Long (Strong)')reasons.push('News='+r.newsSig.replace(/^GREEN Long \(/,'').replace(/\)$/,'')+'（非Strong）');
    md+='| '+r.sym+' | '+gradeEmoji(r.grade)+' | '+r.tech+' | '+r.align+' | '+r.newsSig+' | '+reasons.join('; ')+' |\n';
  });
  md+='\n';
}
// reason
md+='### 原因分析\n\n';
md+='1. **News 信号整体偏弱**：本次 28 只股票中 27 只为 NEUTRAL No Trade（No Data/Weak Bullish/Neutral），仅 1 只（NASDAQ:GEN）为 GREEN Long (Mid)，**没有任何标的是 GREEN Long (Strong)**，条件③直接导致交集为空。\n';
md+='2. **Grade A 缺失**：Grade A 要求 News 为 long 信号且 Tech≥30。当前无股票满足 long 判定，故 0 只达到 🟢A（GEN 为 GREEN 但 Tech 25.7，仅够 🔵B）。\n';
md+='3. **MTF 对齐是本批最宽松的条件**：共 7 只达到 ≥75%（RRC/NEXA/MNST/GEN/HOOD/SCCO/WPM），但叠加 Grade 与 News 后仍无交集。\n\n';
// appendix
md+='### 附录：全部 '+rows.length+' 只股票三条件矩阵（按 Tech 降序）\n\n';
md+='| # | Symbol | Grade | Tech | MTF Alignment | ≥75%? | News Signal |\n|---|--------|-------|------|---------------|-------|-------------|\n';
rows.forEach((r,i)=>{
  md+='| '+(i+1)+' | '+r.sym+' | '+gradeEmoji(r.grade)+' | '+r.tech+' | '+r.align+' | '+(r.ap&&r.ap>=0.75?'✅':'—')+' | '+r.newsSig+' |\n';
});
fs.writeFileSync('./us_grade_a_picks.md',md,'utf8');
console.log('written ok, symbol count='+rows.length);
