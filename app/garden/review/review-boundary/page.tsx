import Link from 'next/link';

export default function ReviewBoundaryPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link active">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">边界与未完成</h1>
          <p className="hero-subtitle">
            我在解决的是：没做完就觉得失败，情绪拖到第二天。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>结构</h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>未完成 = 边界确认</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>我今天的能量/时间到这里，这是现实，不是失败</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>边界不是懒，是现实</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>能量有限是事实，接受边界才能继续前进</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>未完成只允许两种去处</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>明日池：明天继续 / 放下：不再做</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>证据</h2>
            <p style={{ color: 'var(--structure-soft)' }}>→ <Link href="/garden" style={{ color: 'var(--accent)' }}>回到花园继续看复盘记录</Link></p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>下一步（最小行动）</h3>
            <p style={{ color: 'var(--structure-soft)' }}>→ 写下"我今天的边界是……"（一句）</p>
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
