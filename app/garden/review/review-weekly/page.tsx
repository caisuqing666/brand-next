export default function ReviewWeeklyPage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="/" className="nav-logo">slowroot</a>
          <div className="nav-links">
            <a href="/garden" className="nav-link active">花园</a>
            <a href="/practice" className="nav-link">实践</a>
            <a href="/tools" className="nav-link">工具</a>
            <a href="/library" className="nav-link">资源</a>
            <a href="/about" className="nav-link">关于</a>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">周复盘</h1>
          <p className="hero-subtitle">
            我在解决的是：我每天都在做，但看不见趋势，不知道自己有没有变强。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>
              结构
            </h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>周复盘只看趋势，不翻旧账</strong>
                <br />
                <span style={{ fontSize: '0.9rem' }}>不纠结细节，看整体方向</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>只回答三件事</strong>
                <br />
                <span style={{ fontSize: '0.9rem' }}>有效结构：什么在起作用？<br />最大噪音:什么在消耗能量？<br />下周一件关键调整</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>只定 1 个调整，避免过载</strong>
                <br />
                <span style={{ fontSize: '0.9rem' }}>改变太多 = 没有改变<br />一周一件事</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>
              证据
            </h2>
            <p style={{ color: 'var(--structure-soft)' }}>
              → <a href="/practice/life" style={{ color: 'var(--accent)' }}>周复盘页或周报</a>
            </p>
          </div>

          <div style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--border)', 
            borderRadius: '12px', 
            padding: '1.5rem' 
          }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--structure)' }}>
              下一步（最小行动）
            </h3>
            <p style={{ color: 'var(--structure-soft)' }}>
              → 写下"下周我只调整一件事：_____"
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/garden/review" style={{ 
              color: 'var(--structure-muted)', 
              textDecoration: 'none' 
            }}>
              ← 返回复盘沉淀
            </a>
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
