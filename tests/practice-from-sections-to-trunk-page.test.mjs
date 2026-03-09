import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/from-sections-to-trunk/page.tsx'), 'utf8');

const requiredCopy = [
  '从栏目到主干',
  'Practice 是怎样慢慢长出来的',
  'Practice 这一层，为什么到现在，才终于开始像一个真正成立的栏目。',
  '最开始缺的不是页面，而是承重内容',
  '这轮不是平均铺开，而是先立主梁',
  '从三条主线，到两篇交叉思考',
  '这轮真正长出来的，不是内容数量，而是结构关系',
  '下一步不急着再扩，而是让时间继续进入这一层',
  '让真正成立的东西，慢慢长出来。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected from-sections-to-trunk page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice/, 'Expected article to link back to practice');

console.log('practice from-sections-to-trunk page structure ok');
