import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const practiceSource = fs.readFileSync(path.join(root, 'app/practice/page.tsx'), 'utf8');

const requiredCopy = [
  'Practice · 练习与验证',
  '很多东西不是想明白的，',
  '而是在反复练习、反复修正里，慢慢长出来的。',
  '我更在意的，',
  '不是说过什么，',
  '也不是计划过什么，',
  '而是哪些东西在现实里真的站住了，',
  '哪些判断经过时间、反馈和波动之后，',
  '仍然成立。',
  '这里留下的，',
  '不是设想，',
  '而是那些在现实里被反复检验过、仍然成立的东西。',
  'Running · 跑步',
  '它更像一种长期练习：',
  '留下的是：节奏',
  '如何在长期里不乱，',
  '如何在起伏里仍然保持自己的步频。',
  'Coding · 编程',
  '它更像把想法放进现实的过程。',
  '留下的是：结构',
  '让它在现实里真正站住。',
  'Investing · 投资',
  '它更像一种长期判断训练：',
  '留下的是：边界',
  '什么时候应该把自己留在场上。',
  '交叉文章',
  '节奏、结构与边界，',
  '在不同领域里如何彼此照见。',
  '阶段复盘',
  '哪些判断真的成立，',
  '哪些只是当时感觉对，',
  '哪些需要继续修正。',
  '练习不是为了证明自己。',
  '把想法放进现实，',
  '把现实再带回判断。',
  '最后能留下来的，',
  '往往不是最热烈、最用力的那部分，',
  '而是那些经过时间之后，',
  '仍然成立的东西。',
];

for (const copy of requiredCopy) {
  assert.match(
    practiceSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected practice page to include "${copy}"`,
  );
}

assert.match(practiceSource, /\/practice\/running/, 'Expected practice page to link to running');
assert.match(practiceSource, /\/practice\/coding/, 'Expected practice page to link to coding');
assert.match(practiceSource, /\/practice\/investing/, 'Expected practice page to link to investing');
assert.match(practiceSource, /\/practice\/rhythm-structure-risk/, 'Expected practice page to link to the first cross-practice article');
assert.match(practiceSource, /\/practice\/repetition-feedback-compounding/, 'Expected practice page to link to the second cross-practice article');
assert.match(practiceSource, /\/practice\/from-sections-to-trunk/, 'Expected practice page to link to the first stage-review article');

console.log('practice page structure ok');
