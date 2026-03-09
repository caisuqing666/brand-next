import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const toolsSource = fs.readFileSync(path.join(root, 'app/library/tools/page.tsx'), 'utf8');

const requiredCopy = [
  'Tools · 工具与方法',
  '不是所有工具都值得留下。',
  '它是否让我更清楚，',
  '是否真的减轻混乱，',
  '是否能陪我长期做事。',
  '这里放的，',
  '不是最新、最多、最热闹的方法。',
  '而是我用过之后，',
  '愿意继续留下来的那一部分。',
  '每天只做三件事',
  '完成，比堆积更重要。',
  '聚焦，比自我感动更重要。',
  '盖洛普优势作为判断入口',
  '这件事，适不适合我。',
  '这条路，是不是我能长期走下去的路。',
  '跑步作为长期训练',
  '真正能留下来的，不是情绪，',
  '而是节奏。',
  '复盘与记录',
  '它不是重复生活，',
  '而是在整理判断。',
  '个人工具的搭建',
  '前者是想法，',
  '后者才是现实。',
  '对信息做减法',
  '判断不是堆出来的，',
  '而是筛出来的。',
  '给自己留一点空白，',
  '比不断往里加东西，',
  '更接近真正的清楚。',
  '我留下这些工具与方法，',
  '不是因为它们完美，',
  '而是因为它们真的陪我走过一段路。',
  '它们帮我减少混乱，',
  '也帮我把一些模糊的感受，',
  '慢慢变成可以落地的生活。',
];

for (const copy of requiredCopy) {
  assert.match(
    toolsSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected library tools page to include "${copy}"`,
  );
}

assert.match(
  toolsSource,
  /为什么它会留在这里/,
  'Expected library tools page to include the shared "为什么它会留在这里" label',
);

assert.match(toolsSource, /← 回到资源/, 'Expected library tools page to include a back link to library');

console.log('library tools page structure ok');
