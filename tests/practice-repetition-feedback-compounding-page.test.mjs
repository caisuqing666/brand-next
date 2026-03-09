import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/repetition-feedback-compounding/page.tsx'), 'utf8');

const requiredCopy = [
  '重复、反馈、复利',
  '为什么真正有用的成长，往往都不靠爆发',
  '很多真正有用的成长，都不靠爆发。',
  '很多人相信突破，我越来越相信重复',
  '跑步让我明白，身体只奖励真正重复过的东西',
  '身体只奖励真正重复过的东西。',
  '编程让我明白，能力不是“懂了”，而是被错误训练出来的',
  '能力不是“懂了”，而是被错误训练出来的。',
  '投资让我明白，复利不是奇迹，是克制之后留下的结果',
  '复利不是奇迹，是克制之后留下的结果。',
  '所谓复利，本质上是重复 + 反馈之后的自然结果',
  '重复 + 反馈，在时间里留下来的结果。',
  'slowroot 想守住的，也正是这种慢慢长出来的东西',
  '不是靠爆发变强，',
  '而是在重复、反馈与时间里，慢慢长出自己的秩序。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected repetition-feedback-compounding page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice/, 'Expected article to link back to practice');

console.log('practice repetition-feedback-compounding page structure ok');
