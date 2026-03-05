import Link from 'next/link';

const actionNodes = [
  {
    title: '节点占位：行动清单',
    slug: 'placeholder-list',
    question: '把方向拆成可执行、可完成的最小动作。',
  },
  {
    title: '节点占位：执行边界',
    slug: 'placeholder-boundary',
    question: '今天做到哪里就算完成？',
  },
  {
    title: '节点占位：节奏管理',
    slug: 'placeholder-rhythm',
    question: '如何在长期目标里保持稳定推进？',
  },
];

export default function ActionPage() {
  return (
    <div className="slowroot-container">
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

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">执行边界</h1>
          <p className="hero-subtitle">
            把清晰判断转成可执行动作，并用边界保护节奏与能量。
          </p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            {actionNodes.map((node) => (
              <div key={node.slug} className="garden-node">
                <h3 className="node-title">{node.title}</h3>
                <p className="node-question">{node.question}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
