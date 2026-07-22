import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const layoutSource = fs.readFileSync(path.join(root, 'app', 'layout.tsx'), 'utf8');

assert.match(
  layoutSource,
  /<body[^>]*suppressHydrationWarning/,
  'Expected app/layout.tsx to suppress body hydration warnings caused by client-side attribute injection',
);

console.log('layout hydration warning guard ok');
