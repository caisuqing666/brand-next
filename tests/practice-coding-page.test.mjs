import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const codingSource = fs.readFileSync(path.join(root, 'app/practice/coding/page.tsx'), 'utf8');

const requiredCopy = [
  'Coding · 编程',
  '编程对我来说，也不只是学习一种技能。',
  '它更像把想法放进现实的过程。',
  '真正开始搭的时候，',
  '才会知道哪里还是模糊的；',
  '真正跑起来，',
  '才知道它能不能成立。',
  '很多东西不是靠理解完成的，',
  '而是在一次次搭建、报错、修正和重来里，',
  '慢慢变得扎实。',
  '留下的是：结构',
  '不是知道得更多，',
  '而是能不能把一件事搭起来、理顺、跑通，',
  '让它在现实里真正站住。',
  '学习记录',
  '部署实录',
  '项目复盘',
  '工具搭建过程',
  '与 running / investing / writing 的交叉思考',
];

for (const copy of requiredCopy) {
  assert.match(
    codingSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected coding page to include "${copy}"`,
  );
}

assert.match(codingSource, /openclaw-setup/, 'Expected coding page to link to the OpenClaw article');
assert.match(codingSource, /first-idea-runs/, 'Expected coding page to link to the first runnable idea article');
assert.match(codingSource, /from-learning-to-running/, 'Expected coding page to link to the first coding stage-review article');
assert.match(codingSource, /rhythm-structure-risk/, 'Expected coding page to link to the cross-practice article');
assert.match(codingSource, /repetition-feedback-compounding/, 'Expected coding page to link to the second cross-practice article');

console.log('practice coding page structure ok');
