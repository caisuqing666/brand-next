import Link from 'next/link';

const gardenNodes = [
  {
    title: '判断优先',
    slug: 'judgment',
    question: '如何在复杂中做出清晰判断？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '结构优先',
    slug: 'structure',
    question: '如何搭建可持续的结构？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '慢生长',
    slug: 'slow-growth',
    question: '什么值得慢慢长？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '随笔',
    slug: 'notes',
    question: '碎片化思考与观察',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '跑步哲学',
    slug: 'running',
    question: '如何用身体建立稳定地基？',
    category: 'practice',
    path: '/practice/running',
    updated: '2026-03-05'
  },
  {
    title: '编程学习',
    slug: 'coding',
    question: '46岁学编程，学的是什么？',
    category: 'practice',
    path: '/practice/coding',
    updated: '2026-03-05'
  },
  {
    title: '投资结构',
    slug: 'investing',
    question: '如何建立长期投资结构？',
    category: 'practice',
    path: '/practice/investing',
    updated: '2026-03-05'
  },
  {
    title: '生活实验',
    slug: 'life',
    question: '如何设计可持续的生活节奏？',
    category: 'practice',
    path: '/practice/life',
    updated: '2026-03-05'
  },
  {
    title: '复盘沉淀',
    slug: 'review',
    question: '如何让经验变成可复用的资产？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '每日三件',
    slug: 'daily-three',
    question: '如何用最小行动推进长期目标？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '信息降噪',
    slug: 'noise-reduction',
    question: '如何在信息过载中保持清醒？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '盖洛普优势',
    slug: 'gallup',
    question: '如何用优势语言做判断？',
    category: 'tools',
    path: '/tools/gallup',
    updated: '2026-03-05'
  },
];

export default function GardenPage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link active">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">花园</h1>
          <p className="hero-subtitle">
            这里是思考的土壤层。不是知识库，而是一个慢慢生长的数字花园。
          </p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            {gardenNodes.map((node) => (
              <Link 
                key={node.slug}
                href={node.path || `/garden/${node.slug}`} 
                className="garden-node"
              >
                <h3 className="node-title">{node.title}</h3>
                <p className="node-question">{node.question}</p>
                <div className="node-meta">
                  {node.category !== 'garden' && <span>{node.category} · </span>}
                  {node.updated}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* 页脚 */}
      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
