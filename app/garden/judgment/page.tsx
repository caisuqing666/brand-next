import Link from 'next/link';

const judgmentNodes = [
  {
    title: '节点占位：事实与解释',
    slug: 'placeholder-fact',
    question: '先区分事实与解释，再做方向判断。',
  },
  {
    title: '节点占位：优先级裁剪',
    slug: 'placeholder-priority',
    question: '什么要做，什么先不做？',
  },
  {
    title: '节点占位：风险预判',
    slug: 'placeholder-risk',
    question: '关键风险在哪里，如何提前设防？',
  },
];

export default function JudgmentPage() {
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
          <h1 className="page-title">判断方向</h1>
          <p className="hero-subtitle">
            先判断，再行动。用事实、边界和优先级确定当下最重要的一步。
          </p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            {judgmentNodes.map((node) => (
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
