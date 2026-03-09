import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const runningSource = fs.readFileSync(path.join(root, 'app/practice/running/page.tsx'), 'utf8');

const requiredCopy = [
  'Running · 跑步',
  '跑步对我来说，从来不只是运动。',
  '它更像一种长期练习：',
  '练习节奏，',
  '练习耐心，',
  '仍然愿意继续往前。',
  '很多关于周期、恢复、积累和分寸的理解，',
  '不是一下子明白的。',
  '而是在一公里一公里里，',
  '慢慢长出来的。',
  '留下的是：节奏',
  '不是一时冲得多快，',
  '而是如何在长期里不乱，',
  '如何在起伏里仍然保持自己的步频。',
  '跑步日志',
  '阶段总结',
  '训练反思',
  '与其他实践的关联文章',
];

for (const copy of requiredCopy) {
  assert.match(
    runningSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected running page to include "${copy}"`,
  );
}

assert.match(runningSource, /first-full-marathon/, 'Expected running page to link to the marathon article');
assert.match(runningSource, /from-breakthrough-to-return/, 'Expected running page to link to the first running stage-review article');
assert.match(runningSource, /running-and-code/, 'Expected running page to link to the running and code article');
assert.match(runningSource, /rhythm-structure-risk/, 'Expected running page to link to the cross-practice article');
assert.match(runningSource, /repetition-feedback-compounding/, 'Expected running page to link to the second cross-practice article');

console.log('practice running page structure ok');
