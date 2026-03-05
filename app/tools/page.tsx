import Link from 'next/link';

const tools = [
  {
    title: 'EndOfDay',
    slug: 'endofday',
    icon: '📋',
    description: '每日三件事',
    question: '如何用最小行动推进长期目标？',
    featured: true,
  },
  {
    title: 'Gallup 判断',
    slug: 'gallup',
    icon: '🧭',
    description: '优势决策模型',
    question: '如何用优势语言做判断？',
    featured: true,
  },
  {
    title: '临在之锚',
    slug: 'presence',
    icon: '🌿',
    description: '情绪降噪 / 回归中心',
    question: '如何回到自己？',
    featured: true,
  },
  {
    title: '赛博问卜',
    slug: 'oracle',
    icon: '🔮',
    description: '集体情绪感知',
    question: '现在大家在关心什么？',
    featured: false,
  },
];

export default function ToolsPage() {
  const featuredTools = tools.filter(t => t.featured);
  const otherTools = tools.filter(t => !t.featured);

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
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">工具</h1>
          <p className="hero-subtitle">
            我为自己做的一些工具，如果你也需要，可以用。安静，不营销。
          </p>
        </header>

        {/* 核心工具 */}
        <section className="entry-cards">
          <div className="entry-grid">
            {featuredTools.map((tool) => (
              <Link 
                key={tool.slug}
                href={`/tools/${tool.slug}`} 
                className="entry-card"
              >
                <div className="entry-icon">{tool.icon}</div>
                <h2 className="entry-title">{tool.title}</h2>
                <p className="entry-question">{tool.question}</p>
                <span className="entry-ability">{tool.description}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 其他工具 */}
        {otherTools.length > 0 && (
          <section className="garden-section">
            <div className="garden-header">
              <span className="evidence-eyebrow">更多工具</span>
            </div>
            <div className="garden-grid">
              {otherTools.map((tool) => (
                <Link 
                  key={tool.slug}
                  href={`/tools/${tool.slug}`} 
                  className="garden-node"
                >
                  <h3 className="node-title">{tool.icon} {tool.title}</h3>
                  <p className="node-question">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
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
