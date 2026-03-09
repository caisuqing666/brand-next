export interface GrowingPageEntry {
  sectionName: string;
  hint: string;
  activeNav: 'garden' | 'practice' | 'tools' | 'library' | 'about';
}

const practiceGrowingPages = {
  running: {
    sectionName: '实践 / Practice / 跑步',
    hint: '这里以后会放进那些用身体把节奏、耐心与长期性慢慢练出来的部分。',
    activeNav: 'practice',
  },
  coding: {
    sectionName: '实践 / Practice / 编程',
    hint: '这里以后会放进那些从零开始学会构建、调试与落地的过程。',
    activeNav: 'practice',
  },
  investing: {
    sectionName: '实践 / Practice / 投资',
    hint: '这里以后会放进那些关于判断、风险与长期主义如何进入现实的记录。',
    activeNav: 'practice',
  },
  life: {
    sectionName: '实践 / Practice / 生活实验',
    hint: '这里以后会放进那些慢一点活、但活得更稳一点的日常实验。',
    activeNav: 'practice',
  },
} satisfies Record<string, GrowingPageEntry>;

const toolsGrowingPages = {
  endofday: {
    sectionName: '工具 / Tools / EndOfDay',
    hint: '这里以后会放进那个把一天慢慢收小、收清楚、收成三件事的地方。',
    activeNav: 'tools',
  },
  gallup: {
    sectionName: '工具 / Tools / Gallup 判断',
    hint: '这里以后会放进那些让优势语言真正进入判断现场的部分。',
    activeNav: 'tools',
  },
  presence: {
    sectionName: '工具 / Tools / 临在之锚',
    hint: '这里以后会放进那些先让人回到自己，再开始行动的东西。',
    activeNav: 'tools',
  },
  oracle: {
    sectionName: '工具 / Tools / 赛博问卜',
    hint: '这里以后会放进那些关于集体情绪、直觉感应与问题照面的实验。',
    activeNav: 'tools',
  },
  archive: {
    sectionName: '工具 / Tools / Archive',
    hint: '这里以后会放进那些暂时退回土里的旧版本、旧想法与旧样本。',
    activeNav: 'tools',
  },
} satisfies Record<string, GrowingPageEntry>;

const libraryGrowingPages = {
  reading: {
    sectionName: '资源 / Library / 阅读',
    hint: '这里以后会放进那些真正留下来、反复回看的书、文章与批注。',
    activeNav: 'library',
  },
  tools: {
    sectionName: '资源 / Library / 工具与方法',
    hint: '这里以后会放进那些已经进入日常、被反复验证过的方法与器具。',
    activeNav: 'library',
  },
  links: {
    sectionName: '资源 / Library / 收藏夹',
    hint: '这里以后会放进那些值得留下、也值得再走回去看的链接。',
    activeNav: 'library',
  },
} satisfies Record<string, GrowingPageEntry>;

const aboutGrowingPages = {
  now: {
    sectionName: '关于 / About / Now',
    hint: '这里以后会放进 slowroot 此刻正在过、正在做、也正在慢慢确认的部分。',
    activeNav: 'about',
  },
  constitution: {
    sectionName: '关于 / About / 宪法',
    hint: '这里以后会继续展开 slowroot 如何设边界、定原则，并让判断有根。',
    activeNav: 'about',
  },
} satisfies Record<string, GrowingPageEntry>;

export const gardenGrowingPages = {
  presence: {
    sectionName: '临在 / Presence',
    hint: '这里以后会继续展开 slowroot 如何先把自己放回当下，再进入判断。',
    activeNav: 'garden',
  },
  judgment: {
    sectionName: '判断 / Judgment',
    hint: '这里以后会继续展开 slowroot 如何分辨、收束与选择。',
    activeNav: 'garden',
  },
  action: {
    sectionName: '执行 / Action',
    hint: '这里以后会放进那些把方向收成今天、收成一步、收成可完成动作的部分。',
    activeNav: 'garden',
  },
} satisfies Record<string, GrowingPageEntry>;

const growingPageRegistry = {
  practice: practiceGrowingPages,
  tools: toolsGrowingPages,
  library: libraryGrowingPages,
  about: aboutGrowingPages,
} as const;

export type GrowingSection = keyof typeof growingPageRegistry;

export function getGrowingChildPage(section: GrowingSection, slug: string): GrowingPageEntry | null {
  const sectionPages = growingPageRegistry[section] as Record<string, GrowingPageEntry>;
  return sectionPages[slug] ?? null;
}

export function getGrowingChildSlugs(section: GrowingSection) {
  return Object.keys(growingPageRegistry[section]);
}
