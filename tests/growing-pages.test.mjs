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

console.log('growing pages wiring ok');
