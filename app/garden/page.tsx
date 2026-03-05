import Link from 'next/link';

const gardenNodes = [
  {
    title: '临在归位',
    slug: 'presence',
    question: '如何在判断之前，先把自己放回当下？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '判断优先',
    slug: 'judgment',
    question: '如何在复杂中做出清晰判断？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '执行边界',
    slug: 'action',
    question: '如何把判断转成可执行、可完成的动作？',
    category: 'garden',
    updated: '2026-03-05'
  },
  {
    title: '复盘沉淀',
    slug: 'review',
    question: '如何让经验变成可复用的资产？',
    category: 'garden',
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
