import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const files = [
  'app/library/page.tsx',
  'app/library/reading/page.tsx',
  'app/library/tools/page.tsx',
  'app/library/links/page.tsx',
];

const sharedClasses = [
  'note-kicker',
  'note-intro',
  'note-section-grid',
  'note-section-title',
  'note-section-label',
  'note-closing',
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
}

for (const file of files.slice(1)) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');

  assert.match(
    source,
    /note-back-wrap/,
    `Expected ${file} to use the shared back-link wrapper class`,
  );
}

const globalsSource = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8');

for (const className of [...sharedClasses, 'note-back-wrap', 'note-section-card', 'note-section-copy']) {
  assert.match(
    globalsSource,
    new RegExp(`\\.${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`),
    `Expected app/globals.css to define .${className}`,
  );
}

console.log('library curated page style consistency ok');
