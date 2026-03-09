import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/about/now/page.tsx'), 'utf8');

const requiredCopy = [
  '这不是近况播报，',
  '而是我此刻真正正在过的生活重心。',
  '身体',
  '写作与整理',
  '工具与构建',
  '边界与现实',
  '暂时不做什么',
  '现在这个阶段，',
  '我不急着展开更多，',
  '只想先把真正重要的部分活扎实。',
  '← 回到关于',
];

for (const copy of requiredCopy) {
  assert.match(
    source,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected now page to include "${copy}"`,
  );
}

assert.doesNotMatch(source, /GrowingPage/, 'Expected now page to stop using the growing page placeholder');

console.log('about now page structure ok');
