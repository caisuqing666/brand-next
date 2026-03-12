import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const toolsSource = fs.readFileSync(path.join(root, 'app/tools/page.tsx'), 'utf8');

assert.match(
  toolsSource,
  /不是为了做更多。/,
  'Expected tools page subtitle to introduce the structural purpose of the tools page',
);

assert.doesNotMatch(
  toolsSource,
  /我为自己做的一些工具，如果你也需要，可以用。/,
  'Expected tools page to remove the old generic invitation copy',
);

const presenceIndex = toolsSource.indexOf("slug: 'presence'");
const gallupIndex = toolsSource.indexOf("slug: 'gallup'");
const endofdayIndex = toolsSource.indexOf("slug: 'endofday'");
const oracleIndex = toolsSource.indexOf("slug: 'oracle'");

assert.notEqual(presenceIndex, -1, 'Expected tools page to include presence tool');
assert.notEqual(gallupIndex, -1, 'Expected tools page to include gallup tool');
assert.notEqual(endofdayIndex, -1, 'Expected tools page to include endofday tool');
assert.notEqual(oracleIndex, -1, 'Expected tools page to include oracle tool');

assert.ok(
  presenceIndex < gallupIndex && gallupIndex < endofdayIndex && endofdayIndex < oracleIndex,
  'Expected featured tools to be ordered as presence -> gallup -> endofday -> oracle',
);

assert.match(
  toolsSource,
  /title: '赛博问卜'/,
  'Expected tools page to label the oracle tool as 赛博问卜',
);

assert.match(
  toolsSource,
  /href: 'https:\/\/wenbu\.cc'/,
  'Expected tools page to link the oracle tool to wenbu.cc',
);

const requiredCopy = [
  '工具不是主角。',
  '它们只是入口。',
  '先回来',
  '再定向',
  '再收束',
  '先照见',
  'title: \'临在之锚\'',
  'step: \'01\'',
  'anchor: \'先回来\'',
  'description: \'乱的时候，先回到自己。\'',
  'title: \'盖洛普工具\'',
  'step: \'02\'',
  'anchor: \'再定向\'',
  'description: \'把优势语言带进真实判断。\'',
  'title: \'今日三件\'',
  'step: \'03\'',
  'anchor: \'再收束\'',
  'description: \'知道方向后，把一天收束到真正成立的三件事。\'',
  'title: \'赛博问卜\'',
  'step: \'04\'',
  'anchor: \'先照见\'',
  'description: \'有些时候，不是立刻分析，而是先把当下照出来。\'',
  '这些工具不替人决定。',
  '它们只是把判断重新接回现实。',
  '进入工具',
];

for (const copy of requiredCopy) {
  assert.match(
    toolsSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected tools page to include "${copy}"`,
  );
}

assert.doesNotMatch(
  toolsSource,
  /我为自己做的一些工具/,
  'Expected tools page to stop framing itself as a generic personal tool collection',
);

console.log('tools page order ok');
