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
  'proof-grid',
  'daily-proof',
  'transition-quote',
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
  'slowroot',
  '我后来越来越在意的，',
  '不是怎样做得更多，',
  '而是怎样先不把自己带偏。',
  '先回来，先站稳，',
  '再让真正成立的东西，慢慢长进生活里。',
  '后来我慢慢发现，',
  '很多东西不能跳着来。',
  '顺序一乱，',
  '人就很容易又回到原来的惯性里。',
  '先回来。',
  '再站稳。',
  '然后才谈判断、行动和生长。',
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
  '现实证据',
  '不是所有东西，都会先长成作品。',
  '先长出来的，也可能只是一个入口。',
  '有些判断，如果只停留在理解里，很快又会散掉。',
  '它需要在现实里有一个反复回来的入口。',
  '现实接口',
  '已经长出来的入口',
  '已经长回日常的部分',
  '不是所有真正成立的东西，都会先长成作品。',
  '有些更早长回身体、节奏和日常。',
  '有些东西先长成入口。',
  '有些东西后来长回人本身。',
  '我想留下的，不是更多内容，',
  '而是那些经过现实之后，仍然成立的判断。',
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
  /从哪里进入 slowroot/,
  'Expected homepage to remove the old entry panel heading',
);

assert.doesNotMatch(
  pageSource,
  /我关心的，不是做得更多，而是先回到自己，再把判断慢慢长进生活里。/,
  'Expected homepage hero note to be replaced by the slower-growing phrasing',
);

assert.doesNotMatch(
  pageSource,
  /从回到自己，到长进生活里。/,
  'Expected homepage journey eyebrow to use the new sequence introduction',
);

assert.doesNotMatch(
  pageSource,
  /<section id="change" className="change-section">/,
  'Expected homepage to remove the old change section',
);

assert.doesNotMatch(
  pageSource,
  /身体会先知道/,
  'Expected homepage to remove the old change-section body copy',
);

console.log('homepage journey structure ok');
