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
assert.match(templateSource, /← \{back\.text\}/, 'Expected growing page return action');

const layoutSource = read('app/layout.tsx');
assert.match(layoutSource, /import '\.\/globals\.css';/, 'Expected root layout to import slowroot globals');

const homepageSource = read('app/page.tsx');
assert.doesNotMatch(homepageSource, /import '\.\/globals\.css';/, 'Expected homepage not to own the global stylesheet');

const removedDynamicRoutes = [
  'app/practice/[slug]/page.tsx',
  'app/tools/[slug]/page.tsx',
  'app/library/[slug]/page.tsx',
  'app/about/[slug]/page.tsx',
];

for (const routeFile of removedDynamicRoutes) {
  assert.equal(
    fs.existsSync(path.join(root, routeFile)),
    false,
    `Expected ${routeFile} to be removed so explicit child routes win`,
  );
}

const growingRoutes = [
  'app/about/now/page.tsx',
  'app/about/constitution/page.tsx',
  'app/tools/oracle/page.tsx',
  'app/tools/archive/page.tsx',
];

for (const routeFile of growingRoutes) {
  const source = read(routeFile);
  assert.match(source, /GrowingPage/, `Expected ${routeFile} to use the shared growing page`);
  assert.doesNotMatch(
    source,
    /getGrowingChildPage|getGrowingChildSlugs/,
    `Expected ${routeFile} to be explicit instead of delegating through the old slug registry`,
  );
}

console.log('growing pages wiring ok');
