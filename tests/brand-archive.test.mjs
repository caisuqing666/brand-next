import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

const brandHomeSource = read('app/brand/page.tsx');
assert.match(brandHomeSource, /旧版归档/, 'Expected /brand landing page to be framed as archive');
assert.match(brandHomeSource, /返回 slowroot 主站/, 'Expected /brand landing page to point users back to the main slowroot site');

const navSource = read('app/brand/components/BrandNav.tsx');
assert.match(navSource, /返回主站/, 'Expected BrandNav to include a direct link back to the main site');
assert.match(navSource, /归档说明/, 'Expected BrandNav to label /brand as archive documentation');
assert.doesNotMatch(navSource, /心理支持/, 'Expected BrandNav to stop foregrounding psychology as a primary archive nav item');
assert.doesNotMatch(navSource, /资源库/, 'Expected BrandNav to stop foregrounding resources as a primary archive nav item');

console.log('brand archive positioning ok');
