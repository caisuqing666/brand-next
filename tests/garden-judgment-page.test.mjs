import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const judgmentSource = fs.readFileSync(path.join(root, 'app/garden/judgment/page.tsx'), 'utf8');

const requiredCopy = [
  '先站稳，再判断',
  '为什么真正的判断，不是更快得出答案，而是不在错误的位置上作答',
  '人在还没有站稳的时候，就急着作答。',
  '很多判断出错，不是因为不会想，而是因为站的位置已经偏了',
  '人最容易在不稳的时候，误把反应当判断',
  '信息越多，越需要判断位置，而不是判断冲动',
  '真正的判断，不是急着回答，而是先校正位置',
  '判断不是为了证明我对，而是为了减少徒劳',
  '这也是为什么，临在之后，才轮到判断',
  'presence 应该先于 judgment。',
  '它更像是一种位置感。',
  '先校正位置，再决定是否回应；',
];

for (const copy of requiredCopy) {
  assert.match(
    judgmentSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected judgment page to include "${copy}"`,
  );
}

for (const href of ['/tools/gallup', '/garden/notes/barbell-and-zhongyong', '/garden/notes/system-processing']) {
  assert.match(
    judgmentSource,
    new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected judgment page to link to "${href}"`,
  );
}

assert.match(judgmentSource, /← 回到花园/, 'Expected judgment page to include a back link to garden');

console.log('garden judgment page structure ok');
