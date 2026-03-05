import Link from 'next/link';

export default function SystemPage() {
  return (
    <div className="slowroot-container">
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

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">系统地图</h1>
          <p className="hero-subtitle">
            这不是一组工具。这是我的判断系统。
          </p>
        </header>

        <section className="page-content">
          {/* 临在之锚 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--structure)', fontWeight: 600 }}>
              临在之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
              降噪、归位、回到当下。
            </p>
            <a href="https://metafield.cc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-on-light)', textDecoration: 'none' }}>
              metafield.cc →
            </a>
          </div>

          {/* 判断之锚 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--structure)', fontWeight: 600 }}>
              判断之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
              方向判断、结构化决策。
            </p>
            <ul style={{ color: 'var(--structure-soft)', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Gallup Tool（判断引擎）→ <a href="https://gallup-tool.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-on-light)', textDecoration: 'none' }}>gallup-tool.com →</a>
              </li>
            </ul>
          </div>

          {/* EndOfDay */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--structure)', fontWeight: 600 }}>
              EndOfDay
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8 }}>
              最小化执行、每日复盘。
            </p>
          </div>

          {/* 花园 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--structure)', fontWeight: 600 }}>
              花园
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
              复盘沉淀、结构化思考。
            </p>
            <Link href="/garden" style={{ color: 'var(--accent-on-light)', textDecoration: 'none' }}>
              /garden →
            </Link>
          </div>

          {/* slowroot */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--structure)', fontWeight: 600 }}>
              slowroot
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
              公开样本，品牌站点。
            </p>
            <a href="https://brand-next.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-on-light)', textDecoration: 'none' }}>
              brand-next.vercel.app →
            </a>
          </div>

          {/* 宪法 */}
          <div style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--border)', 
            borderRadius: '16px', 
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--structure)', fontWeight: 600 }}>
              宪法
            </h3>
            <div style={{ color: 'var(--structure-soft)', lineHeight: 2, fontSize: '0.95rem' }}>
              <p>判断优先于行动</p>
              <p>结构优先于工具</p>
              <p>时间优先于速度</p>
            </div>
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
