import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const aboutSource = fs.readFileSync(path.join(root, 'app/about/page.tsx'), 'utf8');

const requiredCopy = [
  '洞察、行动、学习、创作、陪伴',
  '跑步 10,000+ 公里',
  '46 岁开始学编程',
  '每一年，都在慢慢长成自己',
  '2020 年 · 跑步拯救了我',
  '2025 年 · 第一次写代码',
  '温柔又坚定的成长信念',
  '没有结构，技巧会误导你。',
];

for (const copy of requiredCopy) {
  assert.match(
    aboutSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected about page to include "${copy}"`,
  );
}

assert.match(
  aboutSource,
  /\/about\/system/,
  'Expected about page to keep linking to the system page',
);

console.log('about page migration ok');
