import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/about/constitution/page.tsx'), 'utf8');

const requiredCopy = [
  '这些不是口号，',
  '更像是 slowroot 想守住的秩序。',
  '判断优先于行动',
  '结构优先于工具',
  '时间优先于速度',
  '临在先于解释',
  '边界先于讨好',
  '减少徒劳，胜过增加动作',
  '慢可以，假装生长不可以',
  '不是为了看起来坚定，',
  '而是为了在复杂里，仍然知道自己不想失去什么。',
  '← 回到关于',
];

for (const copy of requiredCopy) {
  assert.match(
    source,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected constitution page to include "${copy}"`,
  );
}

assert.doesNotMatch(source, /GrowingPage/, 'Expected constitution page to stop using the growing page placeholder');

console.log('about constitution page structure ok');
