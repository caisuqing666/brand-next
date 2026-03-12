import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const aboutSource = fs.readFileSync(path.join(root, 'app/about/page.tsx'), 'utf8');

const requiredCopy = [
  '关于',
  '这页不是为了完整介绍我。',
  '它更像是在交代：为什么我会越来越在意结构与判断。',
  '我不是一开始就这样。',
  '销售行业里待了将近二十年',
  '真正让我开始变的，不是某一个道理，',
  '而是慢慢发现：很多问题不是更努力就能解决。',
  '后来留下来的几条主线',
  '跑步让我开始相信，节奏不是附属品，而是底盘。',
  '学习心理学、MBTI 和盖洛普',
  '编程让我越来越不敢停留在“差不多懂了”的位置上。',
  '所以 slowroot 对我来说，不是个人标签。',
  '它更像一个慢慢长出来的判断骨架。',
  '它不负责替人定义方向，',
  '只负责把那些经过现实之后，仍然成立的判断，慢慢留下来。',
  '继续往下看',
  '系统骨架',
  '现在在过的生活重心',
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

assert.match(
  aboutSource,
  /\/about\/now/,
  'Expected about page to keep linking to the now page',
);

console.log('about page migration ok');
