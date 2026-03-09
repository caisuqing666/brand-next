import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const packageJson = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
);
const vercelConfig = JSON.parse(
  fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'),
);

assert.match(
  packageJson.packageManager ?? '',
  /^npm@\d+\.\d+\.\d+$/,
  'Expected package.json to pin the npm package manager version for Vercel builds',
);

assert.match(
  packageJson.engines?.node ?? '',
  /^\d+\.x$/,
  'Expected package.json to pin a stable Node major version instead of a floating range',
);

assert.equal(
  vercelConfig.installCommand,
  'npm ci',
  'Expected Vercel to use npm ci so deployments honor package-lock.json exactly',
);

assert.match(
  packageJson.scripts?.lint ?? '',
  /\.next\*\/\*\*/,
  'Expected lint script to ignore stale Next build artifact directories as well as .next',
);

assert.equal(
  fs.existsSync(path.join(root, 'pnpm-lock.yaml')),
  false,
  'Expected repo to avoid committing pnpm-lock.yaml when Vercel installs with npm',
);

console.log('deployment config ok');
