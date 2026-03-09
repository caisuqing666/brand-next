import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const toolsSource = fs.readFileSync(path.join(root, 'app/tools/page.tsx'), 'utf8');

assert.match(
  toolsSource,
  /我为自己做的一些工具，如果你也需要，可以用。/,
  'Expected tools page subtitle to keep the simpler invitation copy',
);

assert.doesNotMatch(
  toolsSource,
  /安静，不营销。/,
  'Expected tools page subtitle to remove the explicit tone statement',
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
  'title: \'临在之锚\'',
  'description: \'回到自己，重新站稳。\'',
  'title: \'盖洛普工具\'',
  'description: \'让优势进入判断。\'',
  'title: \'今日三件\'',
  'description: \'把一天收束到三件事。\'',
  'title: \'赛博问卜\'',
  'description: \'借一面镜子，看清当下。\'',
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
  /不是为了贴标签|不是做更多|它不急着替你解释世界|先帮你从混乱里退回来/,
  'Expected tools page to remove the longer helper paragraphs from the landing cards',
);

console.log('tools page order ok');
