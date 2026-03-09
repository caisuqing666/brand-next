import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/tools/archive/page.tsx'), 'utf8');

const requiredCopy = [
  'Archive 不是废墟，',
  '而是 slowroot 给旧版本留下的位置。',
  '不是所有退下去的东西都等于失败。',
  '有些版本只是完成了它那一阶段的任务。',
  '工具不只需要出生，',
  '也需要有地方体面地退场。',
  '为什么要留 Archive',
  '为了让系统不要假装自己一直正确。',
  '为了把版本变化留下来，',
  '也把判断变化留下来。',
  '暂时会放进这里的，',
  '不是所有旧东西，',
  '而是那些曾经真的承担过作用、后来又不再适合继续放在前台的样本。',
  '← 回到工具',
];

for (const copy of requiredCopy) {
  assert.match(
    source,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected tools archive page to include "${copy}"`,
  );
}

assert.doesNotMatch(source, /GrowingPage/, 'Expected archive page to stop using the growing page placeholder');

console.log('tools archive page structure ok');
