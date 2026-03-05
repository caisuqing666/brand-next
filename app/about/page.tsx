import Link from 'next/link';

export default function AboutPage() {
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
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link active">关于</Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">关于</h1>
        </header>

        <section className="page-content">
          {/* 我是谁 */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--structure)' }}>
              我是谁
            </h2>
            <p className="hero-subtitle" style={{ marginBottom: '1rem' }}>
              你好，我是蔡蔡。
            </p>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8 }}>
              slowroot 是一个关于结构、判断与慢生长的个人实验场。
              记录一个人如何在 40+ 之后，重新搭建自己的结构。
            </p>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginTop: '1rem' }}>
              在信息越来越多的时代，我更在意的是：怎么判断，而不是怎么做更多。
            </p>
          </div>

          {/* 现在在做什么 */}
          <div style={{ marginBottom: '3rem' }}>
            <Link href="/about/now" style={{ 
              display: 'inline-block',
              color: 'var(--accent)',
              textDecoration: 'none',
              marginBottom: '1rem'
            }}>
              → 现在在做什么
            </Link>
          </div>

          {/* slowroot 宪法 */}
          <div style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--border)', 
            borderRadius: '16px', 
            padding: '2rem' 
          }}>
            <h2 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1.5rem', 
              color: 'var(--structure)',
              fontWeight: 600
            }}>
              slowroot 宪法
            </h2>
            <div style={{ 
              color: 'var(--structure-soft)', 
              lineHeight: 2,
              fontSize: '1rem'
            }}>
              <p>判断优先于行动。</p>
              <p>结构优先于工具。</p>
              <p>时间优先于速度。</p>
              <p style={{ marginTop: '1.5rem', opacity: 0.7 }}>
                在复杂中筛选。在长期中验证。
              </p>
              <p style={{ opacity: 0.7 }}>
                不追求增加。只确认方向。
              </p>
            </div>
            <Link href="/about/constitution" style={{ 
              display: 'inline-block',
              color: 'var(--structure-muted)',
              textDecoration: 'none',
              marginTop: '1.5rem',
              fontSize: '0.9rem'
            }}>
              → 完整版
            </Link>
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
