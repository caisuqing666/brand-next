import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/investing/from-returns-to-risk-boundaries/page.tsx'), 'utf8');

const requiredCopy = [
  '从追求收益，到先学会承受风险',
  '这一阶段，投资真正教会我的不是判断对错，而是边界',
  '一开始，我以为投资最重要的是判断对',
  '后来我发现，真正重要的不是赚得多，而是能不能承受',
  '市场不会照顾信念，它只会放大结构的问题',
  '这一阶段，我真正学会的不是更敢下注，而是先安排边界',
  '真正的判断，不只是看对，而是安排好自己面对看错',
  'slowroot 想守住的，也正是这种“先活下来”的清醒',
  '不是先去赢，',
  '而是先把自己安放在一个输得起、活得下去、还能继续长的结构里。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected investing from-returns-to-risk-boundaries page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice\/investing/, 'Expected article to link back to investing');

console.log('practice investing from-returns-to-risk-boundaries page structure ok');
