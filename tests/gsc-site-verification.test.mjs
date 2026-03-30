import assert from 'node:assert/strict';

process.env.GOOGLE_SITE_VERIFICATION_SLOWROOT = 'slowroot-token';
process.env.GOOGLE_SITE_VERIFICATION_GALLUP_TOOL = 'gallup-token';
process.env.GOOGLE_SITE_VERIFICATION_METAFIELD = 'metafield-token';
process.env.GOOGLE_SITE_VERIFICATION_WENBU = 'wenbu-token';

const { getSiteConfigByHost, normalizeHost } = await import('../lib/siteConfig.ts');

assert.equal(normalizeHost('metafield.cc:443'), 'metafield.cc');
assert.equal(normalizeHost('WWW.SLOWROOT.CC'), 'www.slowroot.cc');

const slowroot = getSiteConfigByHost('slowroot.cc');
assert.equal(slowroot.domain, 'slowroot.cc');
assert.equal(slowroot.googleSiteVerification, 'slowroot-token');

const gallup = getSiteConfigByHost('gallup-tool.com');
assert.equal(gallup.domain, 'gallup-tool.com');
assert.equal(gallup.googleSiteVerification, 'gallup-token');

const metafield = getSiteConfigByHost('metafield.cc');
assert.equal(metafield.domain, 'metafield.cc');
assert.equal(metafield.googleSiteVerification, 'metafield-token');

const wenbu = getSiteConfigByHost('wenbu.cc');
assert.equal(wenbu.domain, 'wenbu.cc');
assert.equal(wenbu.googleSiteVerification, 'wenbu-token');

const fallback = getSiteConfigByHost('unknown-domain.test');
assert.equal(fallback.domain, 'slowroot.cc');
assert.equal(fallback.googleSiteVerification, 'slowroot-token');

console.log('gsc host mapping ok');
