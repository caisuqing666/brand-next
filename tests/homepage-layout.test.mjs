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
  'slowroot',
  '我关心的，不是做得更多，而是先回到自己，再把判断慢慢长进生活里。',
  '乱的时候，怎么先回到自己？',
  '站稳以后，怎么判断方向？',
  '知道方向后，今天先做哪一步？',
  '经历过的事，怎么安放成结构？',
  '结构稳定以后，会长成什么？',
  '先回来',
  '先定向',
  '先收束',
  '先安放',
  '先长出来',
  '扎根',
  'slowroot.cc',
  'Since 2024 · still growing',
  '已经长出来的工具样本',
  '已经长回日常的部分',
  '从哪里进入 slowroot',
  'Garden',
  '重新站稳，并长出判断',
  'Practice',
  '让判断进入现实，并接受验证',
  'Library',
  '留下值得长期保留的内容、方法与入口',
  'About',
  '理解 slowroot 的来路、边界与系统骨架',
  '进入 Garden',
  '进入 Practice',
  '进入 Library',
  '进入 About',
  '变化',
  '身体会先知道',
  '不再那么乱了',
  '赛博问卜',
  '借一面镜子，看清当下。',
];

for (const copy of requiredCopy) {
  assert.match(
    pageSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected homepage copy "${copy}" in app/page.tsx`,
  );
}

assert.match(
  pageSource,
  /https:\/\/wenbu\.cc/,
  'Expected homepage to link to wenbu.cc in the tool proofs',
);

assert.doesNotMatch(
  pageSource,
  /如果你想看 slowroot 是怎样一点点长出来的，可以从这些真实入口进去。/,
  'Expected homepage to remove the repeated slowroot overview sentence from the entry panel',
);

assert.doesNotMatch(
  pageSource,
  /我关心的不是如何做得更多，而是如何先回到自己，并在行动中，长出更稳定的结构。/,
  'Expected homepage hero note to use the tighter system phrasing',
);

assert.doesNotMatch(
  pageSource,
  /慢，是节奏；根，是结构。/,
  'Expected homepage hero brand marker to be reduced to the brand name itself',
);

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
