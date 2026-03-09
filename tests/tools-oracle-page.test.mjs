import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const oracleSource = fs.readFileSync(path.join(root, 'app/tools/oracle/page.tsx'), 'utf8');

const requiredCopy = [
  '我为什么把「赛博问卜」留在 slowroot 的外链工具组里',
  '借一面镜子，看清当下。',
  '它不是替你决定。',
  '它更像把你已经感觉到、却还没有说清的东西，轻轻照出来。',
  '我不把它当答案，更把它当镜子。',
  '有时候，人不是没有感觉，',
  '而是被太多声音盖住了。',
];

for (const copy of requiredCopy) {
  assert.match(
    oracleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected oracle tool page to include "${copy}"`,
  );
}

assert.match(oracleSource, /https:\/\/wenbu\.cc/, 'Expected oracle tool page to link to wenbu.cc');
assert.match(oracleSource, /回到工具/, 'Expected oracle tool page to include a back link to tools');
assert.doesNotMatch(oracleSource, /GrowingPage/, 'Expected oracle tool page to stop using the shared growing page');

console.log('tools oracle page structure ok');
