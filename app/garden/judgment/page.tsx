import Link from 'next/link';

export default function JudgmentPage() {
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
          <h1 className="page-title">判断入口</h1>
          <p className="hero-subtitle">在复杂里先看清结构，再决定下一步。</p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            <article className="garden-node">
              <h2 className="node-title">问题态</h2>
              <p className="node-question">如何在复杂中做出清晰判断？信息、意见与情绪同时涌来时，最常见的偏差是把解释当事实，把紧急当重要。</p>

              <h2 className="node-title">三条结构规则</h2>
              <ol className="node-question">
                <li>先区分事实与解释：先写可验证发生了什么，再写自己如何理解。</li>
                <li>用边界筛选优先级：按角色、时间、资源边界过滤，只保留当前承担得起且影响最大的事项。</li>
                <li>时间验证方向：给判断设置最小观察周期，用结果决定继续、调整或停止。</li>
              </ol>

              <h2 className="node-title">证据链接</h2>
              <p className="node-question">
                参见
                <Link href="/about/system"> /about/system </Link>
                获取系统地图。
              </p>

              <h2 className="node-title">最小行动</h2>
              <p className="node-question">现在选择一件今天要做的事，按这三条规则过一遍，再开始执行。</p>
            </article>
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
