# brand-next / slowroot 项目整体梳理

## 阶段判断

当前的 `brand-next / slowroot`，已经完成了主站核心结构与关键内容页的持续收口，正在从“主干内容逐步成立”进入“主干之间开始形成关系与时间维度”的阶段；其中 Practice 栏目已完成三条实践主线、两篇交叉文章与第一轮阶段总结的搭建，Garden 也已初步长出“临在 / 判断 / 行动 / 复盘”四条主轴。  
它仍不是一个已经定型的成熟产品，但已经不再只是方向判断，而是开始形成可承重的主站结构。

从仓库现状看，这个项目最准确的定义不是传统内容站，也不是单一工具站，而是一个以 `slowroot` 为品牌核心的个人品牌官网、数字花园与工具实验场。  
因此，当前最重要的任务不是继续扩张页面数量，而是先完成一次结构收口：统一品牌命名、统一页面主干、统一对外叙事、统一工程约束。

## 一、项目概述

`brand-next` 是一个基于 Next.js 构建的个人品牌与内容型网站项目，当前品牌主线为 `slowroot`。  
其中，`slowroot` 不是单一功能产品，而是一套围绕“结构、判断、慢生长”展开的个人系统表达。项目试图把个人经验、长期实践、工具实验和方法论沉淀到一个统一的网站中。

当前项目的核心目标主要包括：

- 作为个人品牌官网，承载 `slowroot` 的品牌叙事
- 作为数字花园，沉淀判断、结构与复盘类内容
- 作为实践记录场，承载跑步、编程、投资、生活实验等长期主题
- 作为工具容器，逐步接入能被真实使用的工具或方法
- 作为公开样本，展示“想法如何变成结构，结构如何进入现实”

从代码与路由状态看，项目当前更接近“主干已搭好、内容正逐步长出”的阶段。

## 二、项目定位与核心理念

### 2.1 品牌定位

根据 [SLOWROOT-V4.md](/Users/caixiaopi/Desktop/brand-next/SLOWROOT-V4.md)，`slowroot` 的核心表达是：

- 慢，不是拖延，而是节奏
- 根，不是装饰，而是结构
- 重点不是“如何做更多”，而是“如何判断、如何安放、如何生长”

因此，这个项目追求的不是高频输出，而是低噪声、有判断门槛、有结构沉淀的长期品牌空间。

### 2.2 核心主题

当前品牌结构大致围绕以下五个关键词展开：

- 临在 / 降噪
- 判断 / 定向
- 执行 / 收束
- 结构 / 安放
- 生长 / 展开

这一结构已经被用于首页叙事，并成为网站信息架构的基础。

### 2.3 项目价值

这个项目的价值不在于单点功能，而在于把以下几类内容打通：

- 个人成长与人生经验
- 跑步、编程等长期实践
- 判断与结构方法论
- 可被复用的工具或资产
- 面向外部用户的品牌表达

换句话说，它是一个把个人方法论、实践样本和工具尝试放到同一体系中的长期项目。

## 三、项目当前状态判断

从代码、文档和测试来看，项目目前可以分为三层状态：

### 3.1 已较成熟的部分

- 首页品牌表达已经较完整
- `garden` 栏目已有明确结构
- `garden/presence`、`garden/judgment`、`garden/action` 已分别长出第一篇主轴文章
- `garden/review` 已形成相对完整的复盘子栏目
- `about` 已开始承载来路与人物层
- `practice` 已开始承载现实验证层
- `practice/running`、`practice/coding` 与 `practice/investing` 已形成第一组实践主线
- `practice` 已开始长出两篇交叉思考文章与一篇栏目阶段复盘
- `running`、`coding`、`investing` 已各自长出第一篇阶段总结
- `/brand` 已降级为旧版归档区
- 全站已有统一的品牌化样式基础
- 已建立基本测试来约束关键结构

### 3.2 已建骨架但未填实的部分

- `tools`、`library`、部分 `garden` 与其余 `practice` 子栏目
- 这些页面当前主要依赖统一的 `GrowingPage` 占位模板
- 说明信息架构和导航先行，内容与功能后续补充

### 3.3 尚未完全收口的部分

- 旧的 `brand` 体系与新的 `slowroot` 体系并存
- README 之外的部分项目说明仍待继续同步
- 测试与实现存在局部不一致
- 项目仍处于持续调整阶段，尚不是完全稳定版本

这意味着：当前最关键的问题不是“有没有更多页面”，而是“主干是否清晰、叙事是否一致、哪些页面应该真正对外曝光”。

## 四、技术栈与工程基础

根据 [package.json](/Users/caixiaopi/Desktop/brand-next/package.json)，项目主要技术栈如下：

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Canvas
- ESLint

### 4.1 前端框架

项目采用 Next.js App Router 结构，主要页面均位于 `app/` 目录下，天然适合：

- 内容型页面组织
- 多级路由
- 服务端渲染与静态生成结合
- API Route 扩展

### 4.2 样式体系

项目同时引入：

- `app/globals.css`
- `app/tailwind.css`
- `app/brand.css`

说明当前样式体系是“全局 CSS + Tailwind + 品牌样式”的混合方案。  
这种方式短期灵活，但长期需要进一步划清样式职责边界。

### 4.3 后端与服务能力

仓库中已接入 Supabase 相关配置与测试接口，例如：

- `lib/supabaseClient.ts`
- `app/api/supabase-test/route.ts`

此外还有一个与小红书图片生成相关的 API：

- [app/api/generate-xiaohongshu/route.ts](/Users/caixiaopi/Desktop/brand-next/app/api/generate-xiaohongshu/route.ts)

这说明项目不仅是纯静态内容站，也在承载一定的工具化能力。

## 五、目录结构与模块划分

项目主体结构如下：

```text
brand-next/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── brand.css
│   ├── garden/
│   ├── practice/
│   ├── tools/
│   ├── library/
│   ├── about/
│   ├── brand/
│   ├── components/
│   └── api/
├── lib/
├── tests/
├── docs/
├── public/
└── scripts/
```

### 5.1 `app/`：主应用层

这是项目核心目录，承载页面、路由和 API。

#### 首页与全局入口

- [app/layout.tsx](/Users/caixiaopi/Desktop/brand-next/app/layout.tsx)
- [app/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/page.tsx)

其中首页已经明确转向 `slowroot` 品牌表达，是当前主站入口。

#### `garden/`：数字花园

用于沉淀判断、临在、执行、复盘、笔记等内容。  
这是最接近项目核心方法论的一层。当前这一层已经不只是总览入口，而是开始长出四条可进入的主轴：

- `/garden/presence`：处理“先回来，再判断”
- `/garden/judgment`：处理“先站稳，再判断”
- `/garden/action`：处理“先收束，再行动”
- `/garden/review`：处理复盘如何沉淀为结构

#### `practice/`：实践层

承载跑步、编程、投资、生活实验等主题。  
当前已经从单纯入口层推进到“现实验证层”：

- `/practice` 负责说明这一层在 slowroot 里的职责
- `/practice/running` 负责承载身体里的实践
- `/practice/coding` 负责承载构建里的实践
- `/practice/investing` 负责承载风险与判断里的实践
- 其余子栏目仍待按同样标准逐步立住

#### `tools/`：工具层

承载 EndOfDay、Gallup、临在之锚等工具入口。  
目前结构已建，但具体内容和产品化程度仍在演进。

#### `library/`：资源层

用于整理书、文章、工具、链接等沉淀。  
适合作为外部资源与内部方法的连接层。

#### `about/`：自我说明层

用于承载“我是谁”“系统是什么”“现在在做什么”等内容。  
这是品牌可信度的重要组成部分。

#### `brand/`：旧品牌专区

该目录下保留了一套较早期的个人品牌页面体系。  
当前已经被重新定位为旧版归档区，不再作为与主站并列的主入口。

### 5.2 `app/components/`：共享组件

当前比较关键的共享组件是：

- [app/components/GrowingPage.tsx](/Users/caixiaopi/Desktop/brand-next/app/components/GrowingPage.tsx)

该组件用于渲染尚未完成的二级页，占位文案与返回逻辑统一，体现了当前项目“先搭结构，再慢慢长出内容”的策略。

### 5.3 `lib/`：业务辅助层

比较关键的是：

- [lib/slowroot-growing.ts](/Users/caixiaopi/Desktop/brand-next/lib/slowroot-growing.ts)

该文件本质上是一个二级页注册表，负责为多个栏目提供：

- slug 管理
- 页面说明
- 当前导航归属
- 动态路由静态参数生成

这是一个重要的信息架构中枢。

### 5.4 `tests/`：结构性测试

当前测试并不重，但覆盖了重要结构：

- 首页结构测试
- Growing Page 路由接线测试
- review 页面内部链接测试

这些测试更像“防止结构回退”的保护网，而不是完整的业务测试体系。

## 六、核心页面与路由结构

### 6.1 首页 `/`

首页位于 [app/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/page.tsx)。

这是当前项目最核心、完成度最高的页面，承担以下职责：

- 输出品牌核心文案
- 呈现 slowroot 的五段旅程结构
- 连接花园、工具、系统说明等关键路径
- 建立“判断优先于行动”的品牌识别

首页已经不是传统门户，而是品牌哲学入口。

### 6.2 花园 `/garden`

花园页位于 [app/garden/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/garden/page.tsx)。

其主要功能包括：

- 展示花园核心节点
- 作为数字花园总览页
- 连接临在、判断、行动、复盘四条主轴
- 连接近期笔记与具体主题页

从项目定位上看，`garden` 是 slowroot 的思想土壤层，也是最适合持续沉淀的核心栏目。

### 6.3 Garden 主轴

当前 `garden` 的关键变化在于，它已经不再只是“有四张重要卡片”，而是开始长出第一组真正可进入的主轴内容：

- [app/garden/presence/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/garden/presence/page.tsx) 已承载“先回来，再判断”的主轴文章，并接回 [app/tools/presence/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/tools/presence/page.tsx)
- [app/garden/judgment/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/garden/judgment/page.tsx) 已承载“先站稳，再判断”的主轴文章，并接回 [app/tools/gallup/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/tools/gallup/page.tsx)
- [app/garden/action/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/garden/action/page.tsx) 已承载“先收束，再行动”的主轴文章，并接回 [app/tools/endofday/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/tools/endofday/page.tsx)
- [app/garden/review/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/garden/review/page.tsx) 已作为复盘沉淀子栏目持续展开

这意味着 `garden` 与 `tools` 的关系也更清楚了：

- `garden` 负责方法主轴与理解层
- `tools` 负责这些主轴在现实中的器具入口
- 两者彼此映射，但不再互相替代

### 6.4 Practice 主干

当前主站中最关键的新变化，是 `practice` 这一层开始真正成立：

- [app/practice/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/page.tsx) 已不再只是卡片导航页，而是承担 “现实验证层” 的栏目说明
- [app/practice/running/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/running/page.tsx) 承载身体里的长期实践
- [app/practice/coding/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/coding/page.tsx) 承载构建里的长期实践
- [app/practice/investing/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/investing/page.tsx) 承载风险与判断里的长期实践
- [app/practice/rhythm-structure-risk/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/rhythm-structure-risk/page.tsx) 与 [app/practice/repetition-feedback-compounding/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/repetition-feedback-compounding/page.tsx) 开始为三条主线建立横向连接
- [app/practice/from-sections-to-trunk/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/from-sections-to-trunk/page.tsx) 开始为 Practice 栏目本身补上时间维度
- [app/practice/running/from-breakthrough-to-return/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/running/from-breakthrough-to-return/page.tsx)、[app/practice/coding/from-learning-to-running/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/coding/from-learning-to-running/page.tsx)、[app/practice/investing/from-returns-to-risk-boundaries/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/investing/from-returns-to-risk-boundaries/page.tsx) 已为三条主线补上第一篇阶段总结

这意味着 slowroot 现在已经不是只有品牌表达和系统说明，而是开始拥有第一组可承重、彼此有关系、并开始出现时间感的内容主干。

### 6.5 各二级动态路由

例如：

- [app/practice/[slug]/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/practice/[slug]/page.tsx)
- [app/tools/[slug]/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/tools/[slug]/page.tsx)
- [app/library/[slug]/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/library/[slug]/page.tsx)
- [app/about/[slug]/page.tsx](/Users/caixiaopi/Desktop/brand-next/app/about/[slug]/page.tsx)

它们的共同特点是：

- 通过 `lib/slowroot-growing.ts` 注册
- 通过 `generateStaticParams()` 输出静态参数
- 未命中 slug 时调用 `notFound()`
- 默认渲染统一的 `GrowingPage`

这套设计的优点是结构清晰、扩展快、叙事统一；缺点是当前内容真实完成度不高，外部访问时容易看到较多“还没长出来”的页面。

## 七、文档与实现之间的关系

### 7.1 `README.md` 已同步为主站现状说明

[README.md](/Users/caixiaopi/Desktop/brand-next/README.md) 现在已同步为 `brand-next` / `slowroot` 的当前状态说明，不再停留在旧的“小宇宙”叙事。

### 7.2 `SLOWROOT-V4.md` 代表新品牌蓝图

[SLOWROOT-V4.md](/Users/caixiaopi/Desktop/brand-next/SLOWROOT-V4.md) 更接近当前项目的真实方向，包含：

- 品牌语言
- 首页 Hero 文案
- 三入口卡片
- 证据组件思路
- sitemap
- 目录结构蓝图

它不是单纯文案稿，而是项目当前品牌架构的蓝图。

### 7.3 代码实现处于“蓝图部分落地”状态

当前代码已经部分吸收 `SLOWROOT-V4.md` 的思路，尤其是首页和栏目结构；  
但还没有完全按蓝图收口，例如：

- 新旧页面体系并存
- sitemap 中部分栏目还未真正完成
- 文档、测试、实现没有完全同步

## 八、测试与当前验证情况

我对现有测试做了最小验证，结果如下：

- `npm run test:homepage-layout`：通过
- `node tests/about-page-migration.test.mjs`：通过
- `node tests/brand-archive.test.mjs`：通过
- `node tests/practice-page-structure.test.mjs`：通过
- `node tests/practice-running-page.test.mjs`：通过
- `node tests/practice-coding-page.test.mjs`：通过
- `node tests/practice-investing-page.test.mjs`：通过
- `node tests/practice-rhythm-structure-risk-page.test.mjs`：通过
- `node tests/practice-repetition-feedback-compounding-page.test.mjs`：通过
- `node tests/practice-from-sections-to-trunk-page.test.mjs`：通过
- `node tests/practice-running-from-breakthrough-to-return-page.test.mjs`：通过
- `node tests/practice-coding-from-learning-to-running-page.test.mjs`：通过
- `node tests/practice-investing-from-returns-to-risk-boundaries-page.test.mjs`：通过
- `node tests/review-internal-links.test.mjs`：通过
- `node tests/growing-pages.test.mjs`：失败

### 8.1 失败原因

失败不是核心逻辑错误，而是测试预期未同步。  
测试仍期待 `GrowingPage` 中出现 `← 回到主干`，但现在实现已经改成按栏目返回：

- 回到花园
- 回到实践
- 回到工具
- 回到资源
- 回到关于

这说明项目最近经历过信息架构调整，但测试没有及时更新。

### 8.2 当前测试体系的意义

现有测试的作用更偏向：

- 保护页面结构不被意外删改
- 保护路由接线不出错
- 保护内部链接规范

它们对当前阶段是有价值的，但还不足以覆盖内容一致性、品牌一致性和信息架构完整性。

## 九、当前存在的主要问题

### 9.1 品牌叙事未完全统一

当前仓库同时存在：

- `brand-next`
- `slowroot`
- “蔡蔡的小宇宙”

这三种命名层次。  
如果不收口，长期会让用户、维护者以及未来的项目扩展都难以判断“项目真正的主名是什么”。

### 9.2 新旧页面体系并存

`app/brand/*` 与新的首页体系存在交叉。  
这不一定是错误，但如果没有明确定位，就会造成：

- 内容重复
- 导航分裂
- 品牌表达不聚焦

### 9.3 大量页面仍是占位态

占位页策略本身没有问题，但当前数量偏多。  
如果用户从导航进入后连续看到多个“还没长出来”的页面，会削弱网站完成度和可信感。

### 9.4 测试与实现存在轻度脱节

这次失败已经说明，测试没有完全跟上设计更新。  
如果继续迭代而不修整，测试会逐渐失去可信度。

## 十、建议的下一步整理方向

建议按以下顺序推进，而不是并行散改。

### 10.1 先统一主品牌命名关系

先明确三层命名关系：

- 仓库名：`brand-next`
- 品牌名：`slowroot`
- 站点身份表达：蔡蔡的个人实验场或等价副标题

这一步的目标不是改字面，而是先把“什么是工程名、什么是品牌名、什么是对外文案”分清楚。  
如果这一步不先做，后面的 README、导航、页面文案都会继续摇摆。

### 10.2 再决定 `app/brand` 的去留

建议只保留三种明确状态中的一种：

- 作为历史版本归档
- 作为独立专题区继续存在
- 逐步合并进新的 `slowroot` 主站结构

这里不要长期维持“先放着”的模糊状态。  
一旦决定去留，后续导航、链接和内容迁移都会变得简单很多。

### 10.3 再收缩主导航曝光面

不是所有已经建好的路由都应该立即出现在主导航。  
当前更合理的策略是：

- 主导航只保留 3 到 5 个已有真实内容支撑的核心入口
- 占位页较多的栏目降低曝光或改为次级入口
- 等内容长出来后再逐步打开

这一步的目标是提升真实完成度感，而不是追求栏目数量齐全。

### 10.4 再深化已立住的主轴与主梁

在 `garden` 四条主轴与 `practice` 三条主线都已经立住之后，下一步更适合继续深化这些主干内部的长文、延伸阅读、判断记录与阶段复盘，而不是盲目扩张其他占位栏目。

### 10.5 最后修正测试与占位页策略

最后同步工程细节，至少包括：

- 修正 `tests/growing-pages.test.mjs` 中过时的返回文案断言
- 明确哪些占位页允许继续公开，哪些应暂时隐藏
- 为真正核心页面补充更贴近当前结构的测试

这一步的目标是让工程约束重新可信，而不是让测试继续变成噪声。

## 十一、总结

`brand-next` 当前是一个围绕 `slowroot` 展开的个人品牌网站与数字花园项目。  
它的核心不是功能堆叠，而是把“判断、结构、慢生长”这套个人方法论做成一个可被看见、可被访问、可逐步扩展的站点系统。

从实际完成度来看：

- 首页和品牌主叙事已经成形
- `garden` 已初步形成临在、判断、行动、复盘四条主轴
- `about` 已开始承载来路与人物层
- `practice` 已开始承载现实验证层
- `running`、`coding`、`investing` 已形成第一组实践主线
- 两篇交叉思考文章已开始为三条主线建立共同母结构
- 一篇栏目阶段复盘与三篇主线阶段总结已开始为 Practice 补上时间维度
- 旧版 `brand` 已退为归档区
- 少量工具能力已开始接入
- 但整体仍处于“主干已立住、内容与工程继续收口”的阶段

因此，这个项目当前最关键的任务不是继续无差别扩张，而是先完成一次“结构收口”：

- 统一品牌叙事
- 明确页面主干
- 更新对外文档
- 修正工程约束

只有完成这一步，`slowroot` 才会从“一个很好的方向”真正变成“一个稳定、清晰、能长期生长的项目”。
