import Link from 'next/link';

const libraries = [
  {
    title: '书与文章',
    slug: 'reading',
    icon: '📚',
    description: '长期阅读的书与文章',
  },
  {
    title: '工具与方法',
    slug: 'tools',
    icon: '🛠️',
    description: '我使用的工具与方法',
  },
  {
    title: '收藏夹',
    slug: 'links',
    icon: '🔗',
    description: '值得收藏的链接',
  },
];

export default function LibraryPage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link active">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">资源</h1>
          <p className="hero-subtitle">
            这里不是"信息仓库"，而是我长期使用的资源。
          </p>
        </header>

        <section className="entry-cards">
          <div className="entry-grid">
            {libraries.map((lib) => (
              <Link 
                key={lib.slug}
                href={`/library/${lib.slug}`} 
                className="entry-card"
              >
                <div className="entry-icon">{lib.icon}</div>
                <h2 className="entry-title">{lib.title}</h2>
                <p className="entry-question">{lib.description}</p>
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
