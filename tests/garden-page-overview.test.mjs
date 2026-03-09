import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gardenSource = fs.readFileSync(path.join(root, 'app/garden/page.tsx'), 'utf8');

const requiredCopy = [
  'Garden · 花园',
  '这里不是为了更快得出答案，',
  '而是为了回到一个还能继续生长的位置。',
  '有些判断还没有定型，',
  '有些结构还在慢慢长出来，',
  '有些问题也不会立刻结束。',
  '但正是在这里，',
  '很多东西开始有了根。',
  '临在归位',
  '判断优先',
  '执行边界',
  '复盘沉淀',
];

for (const copy of requiredCopy) {
  assert.match(
    gardenSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected garden overview copy "${copy}" in app/garden/page.tsx`,
  );
}

assert.doesNotMatch(
  gardenSource,
  /这里是思考的土壤层。不是知识库，而是一个慢慢生长的数字花园。/,
  'Expected legacy garden overview subtitle to be removed',
);

console.log('garden overview page structure ok');
