# slowroot 改造方案 v4

## 一、配色规则

| 层级 | CSS变量 | 用途 | 规则 |
|------|---------|------|------|
| 底色 | --bg-cream | 背景 | 奶油雾感 |
| 结构色 | --structure | 文字/边框/网格 | 石墨/矿物色 |
| 强调色 | --accent | 仅1个（暂不启用） | 待定，禁止霓虹高饱和 |

## 二、Hero 文案

```
在信息爆炸的嘈杂里，我更在意：如何判断，而不是如何做更多。

这里是 slowroot，一个关于结构、判断与慢生长的个人实验场。

[.sample-note] 这是一份公开样本。
```

## 三、三入口卡片（方案A）

| 模块 | 痛点 | 底层能力 | 关联工具 |
|------|------|----------|----------|
| 临在 / 降噪 | "我现在很乱，如何回到自己？" | 归位 | 临在之锚 |
| 执行 / 最小化 | "我知道方向了，今天怎么做？" | 边界 | EndOfDay |
| 判断 / 方向 | "我怎么知道这是对的方向？" | 清晰 | 判断之锚 |

→ 复盘沉淀放入花园分区

## 四、证据组件

- 周更：每周固定更新一次
- 仅3项指标：
  1. 📊 月里程折线（恒）
  2. 💻 代码/发布周数（行）
  3. 📦 可复用资产数（沉淀）

## 五、Garden 节点模板

```markdown
---
title: "{{节点标题}}"
slug: "{{slug}}"
type: "garden-node"
updated: "{{YYYY-MM-DD}}"
---

# 一句话（问题态）

我在解决的是：{{用一句话说清：困扰/问题/卡点}}

## 结构（3条以内）

1. {{规则/约束/判断门}}
2. {{结构步骤：输入→处理→输出}}
3. {{边界：不做清单（可选）}}

## 证据（1条）

- {{一个链接或一个事实：文章/工具/数据/截图/跑步里程/代码提交等}}

## 下一步（最小行动）

- {{10分钟内可以启动的一步}}
```

## 六、节点规模限制

| 位置 | 节点数 |
|------|--------|
| 首页预览 | 6–9 个 |
| 花园页 | ≤24 个 |

## 七、Sitemap

```
首页 /
├── Hero
├── 我是谁 · slowroot 是什么
└── 进入花园

花园 /garden
├── 地图（总览）
├── 判断 /garden/judgment
├── 结构 /garden/structure
├── 慢生长 /garden/slow-growth
└── 随笔 /garden/notes

实践 /practice
├── 跑步 /practice/running
├── 编程 /practice/coding
├── 投资 /practice/investing
└── 生活实验 /practice/life

工具 /tools
├── EndOfDay /tools/endofday
├── Gallup 判断 /tools/gallup
├── 临在之锚 /tools/presence
└── 赛博问卜 /tools/oracle

资源 /library
├── 书与文章 /library/reading
├── 工具与方法 /library/tools
└── 收藏夹 /library/links

关于 /about
├── 我是谁
├── slowroot 宪法 /about/constitution
└── 现在在做什么 /about/now
```

## 八、目录结构

```
app/
├── page.tsx                    # 首页
├── layout.tsx
├── globals.css                 # 全局样式 + CSS变量
│
├── garden/                     # 花园
│   ├── page.tsx               # 地图（总览）
│   ├── judgment/              # 判断
│   ├── structure/             # 结构
│   ├── slow-growth/           # 慢生长
│   └── notes/                 # 随笔
│
├── practice/                   # 实践
│   ├── page.tsx               # 实践总览
│   ├── running/               # 跑步
│   ├── coding/                # 编程
│   ├── investing/             # 投资
│   └── life/                  # 生活实验
│
├── tools/                      # 工具
│   ├── page.tsx               # 工具总览
│   ├── endofday/              # EndOfDay
│   ├── gallup/                # Gallup 判断
│   ├── presence/              # 临在之锚
│   └── oracle/                # 赛博问卜
│
├── library/                    # 资源
│   ├── page.tsx               # 资源总览
│   ├── reading/               # 书与文章
│   ├── tools/                 # 工具与方法
│   └── links/                 # 收藏夹
│
├── about/                      # 关于
│   ├── page.tsx               # 我是谁
│   ├── constitution/          # slowroot 宪法
│   └── now/                   # 现在在做什么
│
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── EntryCards.tsx         # 三入口卡片
    ├── EvidenceGrid.tsx       # 证据组件
    └── GardenGrid.tsx         # 花园网格
```

## 九、首页结构

```
┌─────────────────────────────────────┐
│  Hero                                │
│  新钩子 + 公开样本（.sample-note）    │
├─────────────────────────────────────┤
│  我是谁 · slowroot 是什么             │
├─────────────────────────────────────┤
│  进入花园（6-9节点网格预览）           │
└─────────────────────────────────────┘
```
