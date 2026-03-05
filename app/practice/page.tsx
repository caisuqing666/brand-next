import Link from 'next/link';

const practices = [
  {
    title: '跑步',
    slug: 'running',
    icon: '🏃',
    description: '10,000+ 公里的底气',
    question: '如何用身体建立稳定地基？',
  },
  {
    title: '编程',
    slug: 'coding',
    icon: '💻',
    description: '46岁写下第一行代码',
    question: '学编程，学的是什么？',
  },
  {
    title: '投资',
    slug: 'investing',
    icon: '📈',
    description: '长期主义投资结构',
    question: '如何建立长期投资结构？',
  },
  {
    title: '生活实验',
    slug: 'life',
    icon: '🌱',
    description: '慢生活结构实验',
    question: '如何设计可持续的生活节奏？',
  },
];

export default function PracticePage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link active">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">实践</h1>
          <p className="hero-subtitle">
            这里是树干。所有真实实践都在这里。slowroot 不是理论网站，它是实践日志。
          </p>
        </header>

        <section className="entry-cards">
          <div className="entry-grid">
            {practices.map((practice) => (
              <Link 
                key={practice.slug}
                href={`/practice/${practice.slug}`} 
                className="entry-card"
              >
                <div className="entry-icon">{practice.icon}</div>
                <h2 className="entry-title">{practice.title}</h2>
                <p className="entry-question">{practice.question}</p>
                <span className="entry-ability">{practice.description}</span>
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
