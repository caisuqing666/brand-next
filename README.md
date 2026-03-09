# slowroot

slowroot 是一个围绕结构、判断与慢生长展开的个人品牌网站与数字花园项目。  
`brand-next` 是仓库工程名，`slowroot` 是当前主站品牌名。

## 当前阶段

当前阶段已完成主站核心结构与关键内容页的持续收口，项目正从“主干内容逐步成立”继续进入“主干之间开始形成关系与时间维度”的阶段；其中 Practice 栏目已完成三条实践主线、两篇交叉文章与第一轮阶段总结的搭建，Garden 也已初步长出“临在 / 判断 / 行动 / 复盘”四条主轴。  
如果你第一次进入这个仓库，优先把它理解为一个长期演进中的主站，而不是功能完整的产品。

## 项目定位

slowroot 试图把以下几类内容放进同一体系：

- 个人品牌表达
- 数字花园与长期思考
- 跑步、编程、投资、生活实验等实践记录
- 可被使用的工具与方法样本
- 关于“判断如何进入现实”的公开沉淀

当前首页已经围绕以下五个关键词展开：

- 临在 / 降噪
- 判断 / 定向
- 执行 / 收束
- 结构 / 安放
- 生长 / 展开

## 主要结构

```text
brand-next/
├── app/
│   ├── page.tsx          # slowroot 首页
│   ├── garden/           # 数字花园
│   ├── practice/         # 跑步 / 编程 / 投资 / 生活实验
│   ├── tools/            # 工具入口
│   ├── library/          # 资源沉淀
│   ├── about/            # 关于 / 系统说明
│   ├── brand/            # 旧品牌页面，待后续收口
│   ├── components/       # 共享组件
│   └── api/              # API 路由
├── lib/                  # 路由注册、Supabase 等辅助逻辑
├── tests/                # 结构性测试
├── docs/                 # 项目文档与设计记录
└── scripts/              # 辅助脚本
```

## 主站结构

- `/`：主站首页，当前最完整的品牌入口
- `/about`：来路与人物层
- `/about/system`：系统说明层
- `/garden`：方法与思考的土壤层，当前已形成临在、判断、行动、复盘四条主轴
- `/practice`：把判断放进现实里验证的一层，目前已形成 running、coding、investing 三条实践主线，并开始长出交叉文章与阶段总结
- `/practice/running`：身体里的实践
- `/practice/coding`：构建里的实践
- `/practice/investing`：风险与判断里的实践
- `/brand`：旧版归档

当前判断：
- `About` 已开始承载“我是谁、从哪里来”
- `Garden` 已开始承载“临在、判断、行动、复盘”四条方法主轴
- `Practice` 已开始承载“判断如何进入现实验证”
- `Running`、`Coding`、`Investing` 已经形成三条实践主线
- `Practice` 已开始出现两篇交叉思考文章与三篇主线阶段总结
- `Brand` 不再是并列主入口，而是待迁移资产的归档区

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Canvas
- ESLint

## 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

访问 `http://localhost:3000` 查看站点。

构建生产版本：

```bash
npm run build
npm start
```

## 环境变量

复制模板：

```bash
cp env.example .env.local
```

如需使用 Supabase，请在 `.env.local` 中配置：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

可通过 `http://localhost:3000/api/supabase-test` 检查连接。  
详细说明见 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)。

## 测试

当前仓库主要包含结构性测试：

```bash
npm run test:homepage-layout
node tests/about-page-migration.test.mjs
node tests/brand-archive.test.mjs
node tests/practice-page-structure.test.mjs
node tests/practice-running-page.test.mjs
node tests/practice-coding-page.test.mjs
node tests/practice-investing-page.test.mjs
node tests/practice-rhythm-structure-risk-page.test.mjs
node tests/practice-repetition-feedback-compounding-page.test.mjs
node tests/practice-from-sections-to-trunk-page.test.mjs
node tests/practice-running-from-breakthrough-to-return-page.test.mjs
node tests/practice-coding-from-learning-to-running-page.test.mjs
node tests/practice-investing-from-returns-to-risk-boundaries-page.test.mjs
node tests/garden-presence-page.test.mjs
node tests/garden-judgment-page.test.mjs
node tests/garden-action-page.test.mjs
node tests/growing-pages.test.mjs
node tests/review-internal-links.test.mjs
```

说明：
- `homepage-layout` 用来保护首页结构
- `about-page-migration` 用来保护人物来路已进入新版 About
- `brand-archive` 用来保护 `/brand` 作为旧版归档区的定位
- `practice-page-structure` 用来保护 Practice 作为现实验证层的结构
- `practice-running-page` 用来保护 Running 主梁
- `practice-coding-page` 用来保护 Coding 主梁
- `practice-investing-page` 用来保护 Investing 主梁
- `practice-rhythm-structure-risk-page` 用来保护第一篇交叉思考文章
- `practice-repetition-feedback-compounding-page` 用来保护第二篇交叉思考文章
- `practice-from-sections-to-trunk-page` 用来保护 Practice 栏目阶段复盘
- `practice-running-from-breakthrough-to-return-page` 用来保护 Running 第一篇阶段总结
- `practice-coding-from-learning-to-running-page` 用来保护 Coding 第一篇阶段总结
- `practice-investing-from-returns-to-risk-boundaries-page` 用来保护 Investing 第一篇阶段总结
- `garden-presence-page` 用来保护临在主轴文章
- `garden-judgment-page` 用来保护判断主轴文章
- `garden-action-page` 用来保护行动主轴文章
- `growing-pages` 用来保护占位页路由接线
- `review-internal-links` 用来保护内部链接规范

## 相关文档

- [SLOWROOT-V4.md](./SLOWROOT-V4.md)：品牌与信息架构蓝图
- [docs/brand-next-slowroot-overview.md](./docs/brand-next-slowroot-overview.md)：项目整体梳理
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)：Supabase 配置说明

## 当前完成状态

已较成熟：

- 首页
- About
- Garden
- Practice
- Running
- Coding
- Investing
- Garden 四条主轴文章入口
- 两篇 Practice 交叉思考文章
- Practice 栏目阶段复盘
- Running / Coding / Investing 第一篇阶段总结
- Brand 归档

已有骨架：

- Tools
- Library
- 其他动态页与部分笔记页

待继续收口：

- 更多主线内判断记录、训练反思、配置演化与项目复盘
- Practice 后续交叉内容与时间线继续深化
- 占位页曝光控制
- `tests/growing-pages.test.mjs` 与当前实现的同步

## 下一步重点

当前最值得做的事：

1. 保持 README、总览文档与主站结构继续一致
2. 沿 Garden 四条主轴继续深化长文、延伸阅读与方法关系
3. 沿三条实践主线深化判断记录、阶段总结与复盘
4. 继续补 Practice 的交叉内容与时间维度
5. 修正 `tests/growing-pages.test.mjs` 与当前实现的断言差异
