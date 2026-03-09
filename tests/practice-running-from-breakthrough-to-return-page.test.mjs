import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/running/from-breakthrough-to-return/page.tsx'), 'utf8');

const requiredCopy = [
  '从追求突破，到学会回归',
  '这一阶段，跑步真正教会我的不是更快，而是节奏',
  '一开始，我以为跑步是在不断突破',
  '后来我发现，真正重要的不是高潮，而是能不能回来',
  '身体不会听野心，它只会反馈结构',
  '这一阶段，我真正学会的不是坚持，而是回归',
  '真正的节奏，不是慢，而是能长期承受',
  'slowroot 想守住的，也正是这种“愿意回来”的力量',
  '不是一直向上冲，',
  '而是在时间里，保住那些真正愿意长期回来的人、事与结构。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected running from-breakthrough-to-return page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice\/running/, 'Expected article to link back to running');

console.log('practice running from-breakthrough-to-return page structure ok');
