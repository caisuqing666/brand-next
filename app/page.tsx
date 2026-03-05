import Link from 'next/link';
import './globals.css';

export default function Home() {
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
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          在信息爆炸的嘈杂里，我更在意：如何判断，而不是如何做更多。
        </h1>
        <p className="hero-subtitle">
          这里是 slowroot，一个关于结构、判断与慢生长的个人实验场。
        </p>
        <span className="sample-note">这是一份公开样本。</span>
      </section>

      {/* 三入口卡片 */}
      <section className="entry-cards">
        <div className="entry-grid">
          {/* 临在 / 降噪 */}
          <Link href="/tools/presence" className="entry-card">
            <div className="entry-icon">🌿</div>
            <h2 className="entry-title">临在 / 降噪</h2>
            <p className="entry-question">"我现在很乱，如何回到自己？"</p>
            <span className="entry-ability">归位</span>
            <span className="entry-tool">→ 临在之锚</span>
          </Link>

          {/* 执行 / 最小化 */}
          <Link href="/tools/endofday" className="entry-card">
            <div className="entry-icon">⚡</div>
            <h2 className="entry-title">执行 / 最小化</h2>
            <p className="entry-question">"我知道方向了，今天怎么做？"</p>
            <span className="entry-ability">边界</span>
            <span className="entry-tool">→ EndOfDay</span>
          </Link>

          {/* 判断 / 方向 */}
          <Link href="/tools/gallup" className="entry-card">
            <div className="entry-icon">🧭</div>
            <h2 className="entry-title">判断 / 方向</h2>
            <p className="entry-question">"我怎么知道这是对的方向？"</p>
            <span className="entry-ability">判断</span>
            <span className="entry-tool">→ 判断之锚</span>
          </Link>
        </div>
      </section>

      {/* 证据组件 */}
      <section className="evidence-section">
        <div className="evidence-header">
          <span className="evidence-eyebrow">📊 周更数据</span>
        </div>
        <div className="evidence-grid">
          <div className="evidence-card">
            <div className="evidence-value">10,000+</div>
            <div className="evidence-label">月里程（公里）</div>
            <div className="evidence-note">恒：持续奔跑</div>
          </div>
          <div className="evidence-card">
            <div className="evidence-value">12</div>
            <div className="evidence-label">编程周数</div>
            <div className="evidence-note">行：46岁开始学代码</div>
          </div>
          <div className="evidence-card">
            <div className="evidence-value">8</div>
            <div className="evidence-label">可复用资产</div>
            <div className="evidence-note">沉淀：工具/Prompt/模块</div>
          </div>
        </div>
      </section>

      {/* 花园入口 */}
      <section className="garden-section">
        <div className="garden-header">
          <h2 className="garden-title">进入花园</h2>
        </div>
        <div className="garden-grid">
          {/* 复盘沉淀节点（优先露出） */}
          <Link href="/garden/review/review-template" className="garden-node">
            <h3 className="node-title">复盘卡模板</h3>
            <p className="node-question">我想复盘，但每次打开就不知道怎么写，最后放弃。</p>
            <div className="node-meta">复盘沉淀</div>
          </Link>

          <Link href="/garden/review/review-weekly" className="garden-node">
            <h3 className="node-title">周复盘</h3>
            <p className="node-question">我每天都在做，但看不见趋势，不知道自己有没有变强。</p>
            <div className="node-meta">复盘沉淀</div>
          </Link>

          {/* 核心节点 */}
          <Link href="/garden/judgment" className="garden-node">
            <h3 className="node-title">判断优先</h3>
            <p className="node-question">我在解决的是：如何在复杂中做出清晰判断？</p>
            <div className="node-meta">更新于 2026-03-05</div>
          </Link>

          <Link href="/garden/structure" className="garden-node">
            <h3 className="node-title">结构优先</h3>
            <p className="node-question">我在解决的是：如何搭建可持续的结构？</p>
            <div className="node-meta">更新于 2026-03-05</div>
          </Link>

          <Link href="/garden/slow-growth" className="garden-node">
            <h3 className="node-title">慢生长</h3>
            <p className="node-question">我在解决的是：什么值得慢慢长？</p>
            <div className="node-meta">更新于 2026-03-05</div>
          </Link>

          <Link href="/garden/review" className="garden-node">
            <h3 className="node-title">复盘沉淀</h3>
            <p className="node-question">把经历变成结构，把结构变成复利。</p>
            <div className="node-meta">花园分区</div>
          </Link>

          <Link href="/practice/running" className="garden-node">
            <h3 className="node-title">跑步哲学</h3>
            <p className="node-question">我在解决的是：如何用身体建立稳定地基？</p>
            <div className="node-meta">实践 · 跑步</div>
          </Link>

          <Link href="/practice/coding" className="garden-node">
            <h3 className="node-title">编程学习</h3>
            <p className="node-question">我在解决的是：46岁学编程，学的是什么？</p>
            <div className="node-meta">实践 · 编程</div>
          </Link>

          <Link href="/garden" className="garden-node" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '120px'
          }}>
            <span style={{ color: 'var(--structure-muted)' }}>查看全部 →</span>
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
