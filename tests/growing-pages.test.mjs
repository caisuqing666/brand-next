import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

const templateSource = read('app/components/GrowingPage.tsx');
assert.match(templateSource, /这里还没长出来。/, 'Expected growing page title copy');
assert.match(templateSource, /不是遗忘，也不是放弃。/, 'Expected growing page body copy');
assert.match(templateSource, /← 回到主干/, 'Expected growing page return action');

const layoutSource = read('app/layout.tsx');
assert.match(layoutSource, /import '\.\/globals\.css';/, 'Expected root layout to import slowroot globals');

const homepageSource = read('app/page.tsx');
assert.doesNotMatch(homepageSource, /import '\.\/globals\.css';/, 'Expected homepage not to own the global stylesheet');

const registrySource = read('lib/slowroot-growing.ts');
const requiredEntries = [
  'running',
  'coding',
  'investing',
  'life',
  'endofday',
  'gallup',
  'presence',
  'oracle',
  'reading',
  'tools',
  'links',
  'now',
  'constitution',
  'Practice',
  'Judgment',
];

for (const entry of requiredEntries) {
  assert.match(
    registrySource,
    new RegExp(entry.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    `Expected growing registry to include "${entry}"`,
  );
}

const dynamicRoutes = [
  'app/practice/[slug]/page.tsx',
  'app/tools/[slug]/page.tsx',
  'app/library/[slug]/page.tsx',
  'app/about/[slug]/page.tsx',
];

for (const routeFile of dynamicRoutes) {
  const source = read(routeFile);
  assert.match(source, /notFound\(/, `Expected ${routeFile} to reject unknown slugs`);
  assert.match(source, /GrowingPage/, `Expected ${routeFile} to render the shared growing page`);
}

const gardenRoutes = [
  'app/garden/action/page.tsx',
  'app/garden/judgment/page.tsx',
  'app/garden/presence/page.tsx',
];

for (const routeFile of gardenRoutes) {
  const source = read(routeFile);
  assert.match(source, /GrowingPage/, `Expected ${routeFile} to use the shared growing page`);
}

console.log('growing pages wiring ok');
