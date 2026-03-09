import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/coding/from-learning-to-running/page.tsx'), 'utf8');

const requiredCopy = [
  '从“学会”到“跑通”',
  '这一阶段，编程真正教会我的不是技术，而是结构',
  '一开始，我以为学编程是在学知识',
  '后来我发现，真正难的不是知道，而是跑通',
  '报错不是障碍，它是模糊被暴露出来的方式',
  '能力不是“懂了”，而是被错误训练出来的。',
  '系统不会为情绪让路，它只会对结构给出反馈',
  '这一阶段，我真正学到的不是更像程序员，而是更少停留在抽象里',
  'slowroot 想守住的，恰恰也是这种“跑通”之后的真实',
  '不是停在想法里，',
  '而是把想法一点点跑进现实。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected coding from-learning-to-running page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice\/coding/, 'Expected article to link back to coding');

console.log('practice coding from-learning-to-running page structure ok');
