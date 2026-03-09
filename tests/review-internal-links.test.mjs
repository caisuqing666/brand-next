import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reviewPages = [
  'app/garden/review/review-assets/page.tsx',
  'app/garden/review/review-boundary/page.tsx',
  'app/garden/review/review-facts/page.tsx',
  'app/garden/review/review-template/page.tsx',
  'app/garden/review/review-weekly/page.tsx',
  'app/garden/review/review-why/page.tsx',
];

for (const page of reviewPages) {
  const source = fs.readFileSync(path.join(root, page), 'utf8');

  assert.match(
    source,
    /import Link from 'next\/link';/,
    `Expected ${page} to import next/link`,
  );

  assert.doesNotMatch(
    source,
    /<a href="\/[^"]*"/,
    `Expected ${page} to avoid internal anchor navigation`,
  );
}

console.log('review internal links ok');
