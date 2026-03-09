import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const presenceSource = fs.readFileSync(path.join(root, 'app/garden/presence/page.tsx'), 'utf8');

const requiredCopy = [
  '先回来，再判断',
  '为什么临在不是慢一步，而是少走弯路',
  '很多问题并不是“不会判断”。',
  '而是——',
  '人在判断之前，已经不在自己这里了。',
  '它不是慢一步。',
  '恰恰相反，它常常是在帮人少走弯路。',
  '很多时候，问题不是不知道，而是人已经被带走了',
  '人一乱，就会特别想立刻判断',
  '临在不是放空，而是回到还能判断的位置',
  '先回来，并不是慢一步，而是少走弯路',
  '很多真正好的判断，都不是从更努力开始的',
  '这也是为什么我后来做了「临在之锚」',
  '它更像是一种判断前的清醒。',
  '不要急着往前冲。',
  '先确认，你是不是还在自己这里。',
];

for (const copy of requiredCopy) {
  assert.match(
    presenceSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected presence page to include "${copy}"`,
  );
}

for (const href of ['/tools/presence', '/garden/notes/system-processing', '/garden/notes/living-with-problems']) {
  assert.match(
    presenceSource,
    new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected presence page to link to "${href}"`,
  );
}

assert.match(presenceSource, /← 回到花园/, 'Expected presence page to include a back link to garden');

console.log('garden presence page structure ok');
