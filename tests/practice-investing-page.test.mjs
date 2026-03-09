import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const investingSource = fs.readFileSync(path.join(root, 'app/practice/investing/page.tsx'), 'utf8');

const requiredCopy = [
  'Investing · 投资',
  '投资对我来说，也不只是关于收益。',
  '它更像一种长期判断训练：',
  '你如何面对不确定，',
  '如何分配风险，',
  '如何在波动里不被情绪带走，',
  '也如何承认边界、尊重边界。',
  '真正重要的，',
  '往往不是一次判断是否漂亮，',
  '而是你有没有一套能长期承受现实的方式。',
  '留下的是：边界',
  '不是永远押对，',
  '而是知道什么属于自己，',
  '什么不属于自己；',
  '什么时候该进，',
  '什么时候该停，',
  '什么时候应该把自己留在场上。',
  '判断记录',
  '阶段复盘',
  '配置演化',
  '风险笔记',
  '与 running / coding / garden 的交叉思考',
];

for (const copy of requiredCopy) {
  assert.match(
    investingSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected investing page to include "${copy}"`,
  );
}

assert.match(investingSource, /回到实践/, 'Expected investing page to keep its practice back link');
assert.match(investingSource, /from-returns-to-risk-boundaries/, 'Expected investing page to link to the first investing stage-review article');
assert.match(investingSource, /rhythm-structure-risk/, 'Expected investing page to link to the cross-practice article');
assert.match(investingSource, /repetition-feedback-compounding/, 'Expected investing page to link to the second cross-practice article');

console.log('practice investing page structure ok');
