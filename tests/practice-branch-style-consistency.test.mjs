import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const files = [
  'app/practice/running/page.tsx',
  'app/practice/coding/page.tsx',
  'app/practice/investing/page.tsx',
];

const sharedClasses = [
  'note-kicker',
  'note-intro',
  'note-section-grid',
  'note-section-card',
  'note-section-title',
  'note-section-label',
  'practice-branch-lower',
  'practice-branch-support',
  'practice-branch-item-label',
  'practice-branch-entry-list',
  'practice-branch-entry-tag',
  'note-back-wrap',
];

for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');

  for (const className of sharedClasses) {
    assert.match(
      source,
      new RegExp(className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
      `Expected ${file} to use shared class "${className}"`,
    );
  }

  assert.match(
    source,
    /← 回到实践/,
    `Expected ${file} to include the shared practice back link`,
  );
}

const globalsSource = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8');

for (const className of [
  'practice-branch-lower',
  'practice-branch-support',
  'practice-branch-item-label',
  'practice-branch-entry-list',
  'practice-branch-entry-tag',
]) {
  assert.match(
    globalsSource,
    new RegExp(`\\.${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`),
    `Expected app/globals.css to define .${className}`,
  );
}

console.log('practice branch style consistency ok');
