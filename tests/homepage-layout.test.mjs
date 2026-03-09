import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pageSource = fs.readFileSync(path.join(root, 'app/page.tsx'), 'utf8');
const cssSource = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8');

const requiredClasses = [
  'journey-node--inner-start',
  'journey-node--inner-guide',
  'journey-node--hinge',
  'journey-node--outer-ground',
  'journey-node--outer-grow',
  'rooted-section',
  'change-section',
  'anchor-panel',
  'comparison-grid',
  'entry-actions',
];

for (const className of requiredClasses) {
  assert.match(
    pageSource,
    new RegExp(className),
    `Expected ${className} in app/page.tsx`,
  );
  assert.match(
    cssSource,
    new RegExp(`\\.${className}\\b`),
    `Expected .${className} selector in app/globals.css`,
  );
}

assert.doesNotMatch(
  pageSource,
  /Gallup Tool ↗/,
  'Expected Gallup Tool link to be removed from the homepage ellipse copy',
);

const requiredCopy = [
  '这不是一组工具。这是一个',
  '从临在到生长的个人系统。',
  '扎根',
  'slowroot.cc',
  'Since 2024 · still growing',
  '判断，被做成了可使用的工具',
  '真实入口',
  'Garden 让人重新站稳，并长出判断；',
  'Library 留下值得保留的东西；',
  'Practice 检验什么最终在现实里站住。',
  'Library 管留下了什么',
  'Practice 管什么被验证过',
  'Library 收的是那些经过时间筛选之后，仍然值得留下的内容、方法与入口。',
  'Practice 看的是哪些判断在现实里被反复检验之后，仍然成立。',
  '变化',
  '身体会先知道',
  '不再那么乱了',
];

for (const copy of requiredCopy) {
  assert.match(
    pageSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected homepage copy "${copy}" in app/page.tsx`,
  );
}

assert.doesNotMatch(
  pageSource,
  /这不是一组工具。\s*<br \/>\s*这是一个从临在到生长的个人系统。/,
  'Expected homepage hero title to stop rendering as the old three-line split',
);

assert.doesNotMatch(
  pageSource,
  /<h2 className="garden-title">进入花园<\/h2>/,
  'Expected legacy garden grid section to be removed from homepage',
);

console.log('homepage journey structure ok');
