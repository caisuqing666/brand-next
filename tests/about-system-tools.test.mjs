import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const systemSource = fs.readFileSync(path.join(root, 'app/about/system/page.tsx'), 'utf8');

const requiredCopy = [
  '临在之锚',
  'Gallup Tool',
  'EndOfDay · 今日三件',
  '赛博问卜',
  '借一面镜子，看清当下。',
];

for (const copy of requiredCopy) {
  assert.match(
    systemSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected system page to include "${copy}"`,
  );
}

assert.match(
  systemSource,
  /https:\/\/wenbu\.cc/,
  'Expected system page to link to wenbu.cc',
);

console.log('about system tools ok');
