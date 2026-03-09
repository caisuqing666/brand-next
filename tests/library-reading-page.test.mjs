import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readingSource = fs.readFileSync(path.join(root, 'app/library/reading/page.tsx'), 'utf8');

const requiredCopy = [
  'Reading · 书与文章',
  '第一批留下来的 6 本书',
  '书与文章',
  '这里不是书单仓库，而是那些真正留下来、会反复回看的书与文章。',
  '能放在这里的，不是我看过的，而是还会回来看的。',
  '《反脆弱》',
  '风险、冗余、长期存活',
  '为什么它会留在这里',
  '冗余、杠铃、长期存活、结构先于结果',
  '《最优解人生》',
  '结构选择、人生配置、最优而非全要',
  '不是做更多，而是做更对；不是什么都要，而是知道什么值得留下',
  '《庄子》',
  '位置感、松弛感、从外部标准里退出来',
  '很多判断要先校正位置，很多生长要先松开执念',
  '《纳瓦尔宝典》',
  '长期主义、杠杆、清醒积累',
  '关于长期积累、复利、独立思考、用更少动作做更有效的事',
  '《人间值得》',
  '普通生活里的安稳与分寸',
  '不完美的人生，也可以被安放得很好',
  '《Essentialism》',
  '收束、减法、只做真正重要的事',
  '真正有效的行动，不是铺得更开，而是收得更准',
];

for (const copy of requiredCopy) {
  assert.match(
    readingSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected library reading page to include "${copy}"`,
  );
}

assert.match(readingSource, /← 回到资源/, 'Expected library reading page to include a back link to library');

console.log('library reading page structure ok');
