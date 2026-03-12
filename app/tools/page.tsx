import Link from 'next/link';

const tools = [
  {
    step: '01',
    anchor: '先回来',
    title: '临在之锚',
    slug: 'presence',
    href: 'https://metafield.cc',
    icon: '🌿',
    description: '乱的时候，先回到自己。',
    note: '它不负责给答案，只负责让人先不被带走。',
    cta: '进入工具',
  },
  {
    step: '02',
    anchor: '再定向',
    title: '盖洛普工具',
    slug: 'gallup',
    href: 'https://gallup-tool.com',
    icon: '🧭',
    description: '把优势语言带进真实判断。',
    note: '不是为了贴标签，而是为了看清什么适合，什么正在过载。',
    cta: '进入工具',
  },
  {
    step: '03',
    anchor: '再收束',
    title: '今日三件',
    slug: 'endofday',
    href: 'https://endofday.site',
    icon: '📋',
    description: '知道方向后，把一天收束到真正成立的三件事。',
    note: '它不是为了塞满生活，而是为了让选择重新变得清楚。',
    cta: '进入工具',
  },
  {
    step: '04',
    anchor: '先照见',
    title: '赛博问卜',
    slug: 'oracle',
    href: 'https://wenbu.cc',
    icon: '🔮',
    description: '当你已经想了很多，却还是说不清楚自己到底在怕什么时。',
    note: '它不替人决定，只借一面镜子，让还没说出的东西先显形。',
    cta: '进入工具',
  },
];

export default function ToolsPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link active">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <div className="page-container">
        <header className="page-header">
          <p className="hero-brand">TOOLS / 接口</p>
          <h1 className="page-title">工具</h1>
          <div className="hero-meta">
            <p className="hero-subtitle">
              这些工具不替人决定。它们只是把判断重新接回现实。
            </p>
          </div>
        </header>

        <section className="entry-cards">
          <div className="group-head" style={{ marginBottom: '1.75rem' }}>
            <span className="evidence-eyebrow">卡住时的入口</span>
            <h2 className="group-title">工具不是主角。它们只是入口。</h2>
            <p className="group-copy">
              乱了先用临在，想多了先定向，知道方向却做不动就先收束。
            </p>
          </div>

          <div className="entry-grid">
            {tools.map((tool) => (
              <a
                key={tool.slug}
                href={tool.href}
                className="entry-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="entry-header">
                  <div>
                    <div className="entry-number">{tool.step}</div>
                    <div className="entry-ability" style={{ marginTop: '0.45rem' }}>{tool.anchor}</div>
                  </div>
                  <div className="entry-icon">{tool.icon}</div>
                </div>
                <h2 className="entry-title">{tool.title}</h2>
                <p className="entry-question">{tool.description}</p>
                <p className="node-question" style={{ marginBottom: '1.15rem' }}>{tool.note}</p>
                <span className="entry-tool">{tool.cta} →</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">slowroot</p>
      </footer>
    </div>
  );
}
