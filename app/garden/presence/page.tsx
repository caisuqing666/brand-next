import Link from 'next/link';

const presenceNodes = [
  {
    title: '节点占位：呼吸归位',
    slug: 'placeholder-breath',
    question: '当状态漂移时，如何快速回到当下？',
  },
  {
    title: '节点占位：情绪命名',
    slug: 'placeholder-emotion',
    question: '先看见情绪，再进入判断与行动。',
  },
  {
    title: '节点占位：注意力收束',
    slug: 'placeholder-focus',
    question: '在噪音里，如何把注意力收回到关键点？',
  },
];

export default function PresencePage() {
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
          <h1 className="page-title">临在归位</h1>
          <p className="hero-subtitle">
            在进入判断前，先把人放回当下，把注意力从噪音里收回来。
          </p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            {presenceNodes.map((node) => (
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
