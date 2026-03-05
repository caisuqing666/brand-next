export default function ReviewAssetsPage() {
  return (
    <div className="slowroot-container">
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

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">资产化</h1>
          <p className="hero-subtitle">
            我在解决的是：我每天有经验，但很快就忘了，没沉淀成可复用的东西。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>结构</h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>资产化 = 把复盘里的"规则句"单独摘出来</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>规则句：能重复使用的判断/方法/模板，不是日记，是工具</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>每周只做 1 次资产化（防 KPI 化）</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>周五或周日，只摘 1-3 条，不求多</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>资产的形式固定</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>模板 / 清单 / 流程 / 判断门</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>证据</h2>
            <p style={{ color: 'var(--structure-soft)' }}>→ <a href="/library/tools" style={{ color: 'var(--accent)' }}>我的模板库</a></p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>下一步（最小行动）</h3>
            <p style={{ color: 'var(--structure-soft)' }}>→ 从本周复盘里摘出 1 句"规则句"，单独存档</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a href="/garden/review" style={{ color: 'var(--structure-muted)', textDecoration: 'none' }}>← 返回复盘沉淀</a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">判断优先于行动。结构优先于工具。时间优先于速度。</p>
      </footer>
    </div>
  );
}
