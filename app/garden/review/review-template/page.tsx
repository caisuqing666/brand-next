import Link from 'next/link';

export default function ReviewTemplatePage() {
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
          <h1 className="page-title">复盘卡模板</h1>
          <p className="hero-subtitle">
            我在解决的是：我想复盘，但每次打开就不知道怎么写，最后放弃。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>结构</h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>复盘卡只保留 4 行</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>事实 / 边界 / 洞见 / 下一步</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>每行最多 1 句话</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>不展开、不解释</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>复盘不追求完整，只追求连续</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>3分钟写完，每天都写 &gt; 写得完美</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>证据</h2>
            <p style={{ color: 'var(--structure-soft)' }}>→ <Link href="/library/tools" style={{ color: 'var(--accent)' }}>复盘卡模板文件</Link></p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>下一步（最小行动）</h3>
            <p style={{ color: 'var(--structure-soft)' }}>→ 用 4 行写完今天的复盘卡（不超过 3 分钟）</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/garden/review" style={{ color: 'var(--structure-muted)', textDecoration: 'none' }}>← 返回复盘沉淀</Link>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">判断优先于行动。结构优先于工具。时间优先于速度。</p>
      </footer>
    </div>
  );
}
