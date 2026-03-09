import Link from 'next/link';

export default function GallupToolPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link active">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
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
              <span>Gallup Tool</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-01-20</span>
            </div>
            <h1 className="note-title">我为什么做了一个不安慰人的盖洛普工具</h1>
          </header>

          <article className="note-body">
            <p>
              很长一段时间里，我对"理解自己"这件事，是失望的。
            </p>
            <p>
              不是因为方法不对，<br />
              而是因为——理解之后，生活并没有变轻。
            </p>
            <p>
              我知道自己的优势，<br />
              知道为什么会累，<br />
              知道问题"出在哪里"。
            </p>
            <p>
              但每一次卡住，真正困扰我的从来不是情绪，<br />
              而是一个更冷静、也更残酷的问题：
            </p>
            <blockquote>
              现在，我到底该不该继续？
            </blockquote>
            <p>
              大多数性格工具，擅长解释你是谁。<br />
              但很少有工具，愿意回答：你该往哪走。
            </p>
            <p>于是我开始重做盖洛普。</p>
            <p>
              不再围绕"你是一个怎样的人"，<br />
              而是围绕这些问题反复推敲：
            </p>
            <ul>
              <li>这是优势没发挥，还是已经过载</li>
              <li>你是在坚持，还是在消耗</li>
              <li>此刻更需要加力，还是止损</li>
            </ul>
            <p>Gallup Tool 就是在这个过程中诞生的。</p>
            <p>
              它不替你做决定，<br />
              也不试图让你感觉好一点。
            </p>
            <p>
              它只是把判断摊开，让你看清楚：<br />
              你正在为哪一部分付出代价，<br />
              而这份代价，值不值得。
            </p>
            <p>
              如果你也处在一个需要判断的阶段，<br />
              这个工具，或许能帮你少走一点弯路。
            </p>
          </article>

          <a
            href="https://gallup-tool.com"
            className="system-tool-ref"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '3rem' }}
          >
            <span className="tool-ref-label">Gallup Tool</span>
            <span className="tool-ref-hint">把优势语言带进判断现场。不安慰，只摊开。</span>
            <span className="tool-ref-link">gallup-tool.com →</span>
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
