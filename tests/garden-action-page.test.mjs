import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const actionSource = fs.readFileSync(path.join(root, 'app/garden/action/page.tsx'), 'utf8');

const requiredCopy = [
  '先收束，再行动',
  '为什么真正有效的行动，不是做得更多，而是先把自己落到能做的一步',
  '很多行动之所以失效，问题并不是“不够努力”。',
  '恰恰相反，很多时候是因为：',
  '动作太散了。',
  '很多行动失效，不是因为不努力，而是因为太散',
  '人一焦虑，就会误把“做很多”当成“在推进”',
  '真正有效的行动，往往不是展开，而是收束',
  '行动不是证明自己有多用力，而是把判断落到眼前的一步',
  '很多时候，一步比十件事更能改变局面',
  '这也是为什么，我后来越来越需要“只做这一点”的工具',
  '不是做得更多，',
  '而是先把那些真正重要的，',
  '落到自己现在能做、能承受、能完成的一步。',
];

for (const copy of requiredCopy) {
  assert.match(
    actionSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected action page to include "${copy}"`,
  );
}

for (const href of ['/tools/endofday', '/garden/review/review-why', '/garden/review/review-boundary']) {
  assert.match(
    actionSource,
    new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected action page to link to "${href}"`,
  );
}

assert.match(actionSource, /← 回到花园/, 'Expected action page to include a back link to garden');

console.log('garden action page structure ok');
