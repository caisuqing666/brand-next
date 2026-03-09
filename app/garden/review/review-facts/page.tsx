import Link from 'next/link';

export default function ReviewFactsPage() {
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
          <h1 className="page-title">事实与完成</h1>
          <p className="hero-subtitle">
            我在解决的是：我做了很多，但总觉得"不够好"，所以不敢承认完成。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>结构</h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>完成 = 事实成立：做了就是做了</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>不需要完美，不需要别人认可</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>完成不需要被证明（不靠别人认可）</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>自己确认即可，不解释、不美化</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>只记录"已完成三件"，不解释、不美化</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>三件就够了，写下来就是完成</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>证据</h2>
            <p style={{ color: 'var(--structure-soft)' }}>→ <Link href="/tools" style={{ color: 'var(--accent)' }}>EndOfDay 今日三件记录</Link></p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>下一步（最小行动）</h3>
            <p style={{ color: 'var(--structure-soft)' }}>→ 把今天完成的 1 件事写成一句话事实</p>
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
