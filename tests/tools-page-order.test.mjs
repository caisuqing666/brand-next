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

assert.notEqual(presenceIndex, -1, 'Expected tools page to include presence tool');
assert.notEqual(gallupIndex, -1, 'Expected tools page to include gallup tool');
assert.notEqual(endofdayIndex, -1, 'Expected tools page to include endofday tool');

assert.ok(
  presenceIndex < gallupIndex && gallupIndex < endofdayIndex,
  'Expected featured tools to be ordered as presence -> gallup -> endofday',
);

console.log('tools page order ok');
