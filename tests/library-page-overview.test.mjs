import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const librarySource = fs.readFileSync(path.join(root, 'app/library/page.tsx'), 'utf8');

const requiredCopy = [
  'Library · 资源',
  '我留下这些，不是为了收藏更多。',
  '而是因为在一次次使用、阅读、返回之后，',
  '它们仍然没有被删掉。',
  '有些东西当时有用，',
  '过一阵就失效了。',
  '有些东西看起来很多，',
  '却并不会真正进入生活。',
  '我更在意的是：',
  '它是否值得留下，',
  '是否能在需要的时候，',
  '把我带回一个更清楚的位置。',
  '这里的内容，',
  '不是按数量整理的。',
  '而是按时间筛过之后，',
  '慢慢留下来的那一部分。',
  'Reading / 书与文章',
  '这里放的是我读过之后，',
  '愿意继续留下来的书与文章。',
  '它留下的是：内容。',
  '那些值得一读再读的文字与思想。',
  'Tools / 工具与方法',
  '这里放的是我实践过之后，',
  '愿意继续留下来的工具与方法。',
  '它留下的是：方法。',
  '那些真正进入日常、经得起重复使用的路径。',
  'Links / 链接与入口',
  '这里放的是我愿意长期保留的外部入口。',
  '它留下的是：入口。',
  '那些值得反复返回的外部连接点。',
  '对我来说，',
  '资源不是越多越好。',
  '真正有价值的，',
  '往往不是新增了什么，',
  '而是经过时间之后，',
  '还有什么留了下来。',
];

for (const copy of requiredCopy) {
  assert.match(
    librarySource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected library overview page to include "${copy}"`,
  );
}

assert.match(
  librarySource,
  /href=\{`\/library\/\$\{branch\.slug\}`\}/,
  'Expected library overview page to link branch cards to their /library child routes',
);
assert.match(librarySource, /slug: 'reading'/, 'Expected library overview page to include the reading branch');
assert.match(librarySource, /slug: 'tools'/, 'Expected library overview page to include the tools branch');
assert.match(librarySource, /slug: 'links'/, 'Expected library overview page to include the links branch');

console.log('library overview page structure ok');
