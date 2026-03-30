type SiteDefinition = {
  domain: string;
  hostnames: string[];
  verificationEnvVar: string;
  title: string;
  description: string;
};

export type SiteConfig = {
  domain: string;
  hostnames: string[];
  title: string;
  description: string;
  googleSiteVerification?: string;
};

const SITE_DEFINITIONS: SiteDefinition[] = [
  {
    domain: 'slowroot.cc',
    hostnames: ['slowroot.cc', 'www.slowroot.cc'],
    verificationEnvVar: 'GOOGLE_SITE_VERIFICATION_SLOWROOT',
    title: 'slowroot',
    description: 'slowroot：一个关于结构、判断与慢生长的个人实验场。',
  },
  {
    domain: 'gallup-tool.com',
    hostnames: ['gallup-tool.com', 'www.gallup-tool.com'],
    verificationEnvVar: 'GOOGLE_SITE_VERIFICATION_GALLUP_TOOL',
    title: 'Gallup Tool',
    description: 'Gallup Tool：一个帮助你整理优势识别与使用方式的工具入口。',
  },
  {
    domain: 'metafield.cc',
    hostnames: ['metafield.cc', 'www.metafield.cc'],
    verificationEnvVar: 'GOOGLE_SITE_VERIFICATION_METAFIELD',
    title: 'metafield',
    description: 'metafield：一个帮助你回到当下、整理内在状态的入口。',
  },
  {
    domain: 'wenbu.cc',
    hostnames: ['wenbu.cc', 'www.wenbu.cc'],
    verificationEnvVar: 'GOOGLE_SITE_VERIFICATION_WENBU',
    title: 'wenbu',
    description: 'wenbu：一个借由问答与映照看清当下的数字入口。',
  },
];

const DEFAULT_SITE = SITE_DEFINITIONS[0];

function getGoogleVerification(envName: string): string | undefined {
  const value = process.env[envName]?.trim();
  return value ? value : undefined;
}

export function normalizeHost(host?: string | null): string {
  if (!host) {
    return DEFAULT_SITE.domain;
  }

  return host
    .split(',')[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '');
}

export function getSiteConfigByHost(host?: string | null): SiteConfig {
  const normalizedHost = normalizeHost(host);
  const site =
    SITE_DEFINITIONS.find(({ hostnames }) => hostnames.includes(normalizedHost)) ??
    DEFAULT_SITE;

  return {
    domain: site.domain,
    hostnames: site.hostnames,
    title: site.title,
    description: site.description,
    googleSiteVerification: getGoogleVerification(site.verificationEnvVar),
  };
}

export function getSiteUrlByHost(
  host?: string | null,
  protocol?: string | null,
): string {
  const site = getSiteConfigByHost(host);
  const normalizedProtocol = protocol?.split(',')[0]?.trim().toLowerCase() === 'http'
    ? 'http'
    : 'https';

  return `${normalizedProtocol}://${site.domain}`;
}
