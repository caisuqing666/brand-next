import Link from 'next/link';

export default function OracleToolPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link active">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>工具</span>
              <span className="note-eyebrow-sep">/</span>
              <span>赛博问卜</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-03-09</span>
            </div>
            <h1 className="note-title">我为什么把「赛博问卜」留在 slowroot 的外链工具组里</h1>
          </header>

          <article className="note-body">
            <p>有一个周末，和朋友们去一个朋友家喝茶。大家随手拿起易经牌盘在玩，互相算命，玩得很开心。</p>
            <p>回来以后，我当时刚开始学着用代码做工具，顺手就做了这个。</p>
            <p>一开始完全只是好玩。</p>
            <p>但我发现自己之后真的一直在用它。不是因为它准，而是因为——问一个问题，然后看答案的那一秒，你会发现自己其实已经有感觉了。答案对不对不重要，你当下的反应才是真的。</p>
            <p>临在之锚偏哲学，很多时候进入成本有点高。赛博问卜不一样——它轻，有梗，更生活化。不用做什么准备，随时可以拿出来照一下。</p>
            <p>如果临在是正门，问卜就是侧门。走进去的地方不一样，但照的是同一面镜子。</p>
          </article>

          <a
            href="https://wenbu.cc"
            className="system-tool-ref"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '3rem' }}
          >
            <span className="tool-ref-label">赛博问卜</span>
            <span className="tool-ref-hint">借一面镜子，看清当下。</span>
            <span className="tool-ref-link">wenbu.cc →</span>
          </a>

          <Link href="/tools" className="note-back">← 回到工具</Link>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
