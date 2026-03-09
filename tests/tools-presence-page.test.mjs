import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const presenceSource = fs.readFileSync(path.join(root, 'app/tools/presence/page.tsx'), 'utf8');

const requiredCopy = [
  '为什么做「临在之锚」',
  '很多工具，都在帮助人做更多事。',
  '人在很多时候真正缺的，不是再多一个工具。',
  '而是在已经很乱的时候，怎么先回来。',
  '我越来越觉得，很多问题不是“不会做”，而是“人不在场”',
  '我做它，不是为了加功能，而是为了留一个“回来的入口”',
  '它不是帮你做更多。',
  '它是帮你先不要被带走。',
  '「临在」不是玄，也不是慢吞吞，而是一种判断前的清醒',
  '我做它，是因为我也需要这样的东西',
  '在你快要被带走的时候，先把自己接回来。',
];

for (const copy of requiredCopy) {
  assert.match(
    presenceSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected presence tool page to include "${copy}"`,
  );
}

assert.match(presenceSource, /https:\/\/metafield\.cc/, 'Expected presence tool page to link to metafield.cc');
assert.match(presenceSource, /回到工具/, 'Expected presence tool page to include a back link to tools');

console.log('tools presence page structure ok');
