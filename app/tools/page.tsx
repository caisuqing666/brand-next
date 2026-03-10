import Link from 'next/link';

const tools = [
  {
    title: '临在之锚',
    slug: 'presence',
    href: 'https://metafield.cc',
    icon: '🌿',
    description: '回到自己，重新站稳。',
    cta: '进入工具',
  },
  {
    title: '盖洛普工具',
    slug: 'gallup',
    href: 'https://gallup-tool.com',
    icon: '🧭',
    description: '让优势进入判断。',
    cta: '进入工具',
  },
  {
    title: '今日三件',
    slug: 'endofday',
    href: 'https://endofday.site',
    icon: '📋',
    description: '把一天收束到三件事。',
    cta: '进入工具',
  },
  {
    title: '赛博问卜',
    slug: 'oracle',
    href: 'https://wenbu.cc',
    icon: '🔮',
    description: '借一面镜子，看清当下。',
    cta: '进入工具',
  },
];

export default function ToolsPage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
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

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">工具</h1>
          <p className="hero-subtitle">
            我为自己做的一些工具，如果你也需要，可以用。
          </p>
        </header>

        <section className="entry-cards">
          <div className="entry-grid">
            {tools.map((tool) => (
              <a
                key={tool.slug ?? tool.href}
                href={tool.href}
                className="entry-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="entry-icon">{tool.icon}</div>
                <h2 className="entry-title">{tool.title}</h2>
                <p className="entry-question">{tool.description}</p>
                <span className="entry-ability">{tool.cta}</span>
              </a>
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
