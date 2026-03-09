import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const linksSource = fs.readFileSync(path.join(root, 'app/library/links/page.tsx'), 'utf8');

const requiredCopy = [
  'Links · 链接与入口',
  '不是所有链接都值得保存。',
  '有些只是当时有用，',
  '有些看过一次，就不会再回去。',
  '它是否值得反复打开，',
  '是否能在需要的时候，',
  '稳定地带我回到某个清楚的位置。',
  '这里留下的，',
  '不是最多、最新、最热闹的链接。',
  '而是那些经过时间之后，',
  '我依然愿意保留的外部入口。',
  '写作与思想来源',
  '留下来的，',
  '往往不是最热闹的观点，',
  '而是那些能陪人走一段路的东西。',
  '技术文档与官方资料',
  '而真实，',
  '比省力更重要。',
  '工具产品与工作入口',
  '链接到了这里，',
  '才不只是一个地址，',
  '而是行动真正开始的地方。',
  '学习与研究参考',
  '不必总从零开始。',
  '审美与表达参考',
  '因为审美不是装饰，',
  '它会影响判断，',
  '也会影响选择。',
  '会反复回来看的地方',
  '不是因为它功能很多，',
  '而是因为它总能把人带回更稳定的位置。',
  '我留下这些链接，',
  '不是为了收藏更多，',
  '而是为了在需要的时候，',
  '更快回到真正有用的地方。',
  '链接本身不重要。',
  '重要的是，',
  '它把我带回哪里。',
];

for (const copy of requiredCopy) {
  assert.match(
    linksSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected library links page to include "${copy}"`,
  );
}

assert.match(
  linksSource,
  /为什么它会留在这里/,
  'Expected library links page to include the shared "为什么它会留在这里" label',
);

assert.match(linksSource, /← 回到资源/, 'Expected library links page to include a back link to library');

console.log('library links page structure ok');
