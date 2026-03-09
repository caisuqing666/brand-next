import Link from 'next/link';

export default function ReviewWhyPage() {
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
          <h1 className="page-title">为什么复盘</h1>
          <p className="hero-subtitle">
            我在解决的是：一天过完了，但心里没有"结束感"，只剩下自责或空白。
          </p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)' }}>结构</h2>
            <ol style={{ color: 'var(--structure-soft)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>复盘不是评估，是出口</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>复盘的目的是让一天有个"句号"，而不是给自己打分</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>复盘只处理"事实与边界"，不处理"自我价值"</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>记录发生了什么（事实），确认能量到哪里（边界），不评判"我够不够好"</span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>复盘的结果必须落到"下一步最小行动"</strong>
                <br /><span style={{ fontSize: '0.9rem' }}>没有行动的复盘只是情绪发泄，行动必须足够小，10分钟内能启动</span>
              </li>
            </ol>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>证据</h2>
            <p style={{ color: 'var(--structure-soft)' }}>→ <Link href="/about/system" style={{ color: 'var(--accent)' }}>关键时刻 / 宪法条款</Link></p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>下一步（最小行动）</h3>
            <p style={{ color: 'var(--structure-soft)' }}>→ 写下今天发生的 1 个事实 + 1 个边界</p>
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
