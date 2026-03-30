import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const layoutSource = fs.readFileSync(path.join(root, 'app', 'layout.tsx'), 'utf8');

assert.match(
  layoutSource,
  /@vercel\/speed-insights\/next/,
  'Expected app/layout.tsx to import @vercel/speed-insights/next',
);

assert.match(
  layoutSource,
  /<SpeedInsights\s*\/>/,
  'Expected app/layout.tsx to render <SpeedInsights />',
);

console.log('speed insights layout ok');
