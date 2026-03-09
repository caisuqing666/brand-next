import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articleSource = fs.readFileSync(path.join(root, 'app/practice/rhythm-structure-risk/page.tsx'), 'utf8');

const requiredCopy = [
  '节奏、结构、风险',
  '为什么我在跑步、编程和投资里，看到的是同一件事',
  '一个人怎样尊重现实，接受反馈，并在长期里建立自己的秩序',
  '跑步教我的，是节奏',
  '节奏不是慢。',
  '节奏，是一种对长期的尊重。',
  '编程教我的，是结构',
  '结构不是想出来的，',
  '结构是被验证出来的。',
  '投资教我的，是风险',
  '先问结构，再问价格。',
  '它们最后都在训练同一种诚实',
  '现实不会因为你的感觉而改变。',
  'slowroot 不是把它们放在一起，而是看见它们本来就是相通的',
  '先尊重现实，再谈结果。',
  '不是做更多，',
  '而是在不同现实里，反复练习同一种清醒。',
];

for (const copy of requiredCopy) {
  assert.match(
    articleSource,
    new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected rhythm-structure-risk page to include "${copy}"`,
  );
}

assert.match(articleSource, /\/practice/, 'Expected article to link back to practice');

console.log('practice rhythm-structure-risk page structure ok');
