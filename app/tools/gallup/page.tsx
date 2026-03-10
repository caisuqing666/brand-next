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
            <p>临在之锚做好之后，我有一段时间只是停着。</p>
            <p>那段时间，我有种以前一直往前冲时没有过的感觉——内心充盈。不是做了什么，是停下来了。</p>
            <p>然后我开始意识到一件事：有些位置，不是用来往前冲的。它是节点。需要停下来，看清楚，再决定要不要走、怎么走。</p>
            <p>一味往前，不一定是更正确的选择。有时候停下来、慢一点、休整一下，从总体上看反而走得更远。</p>
            <p>而"知道什么时候该停、什么时候该走"——这就是判断。</p>
            <p>我一直用盖洛普的优势框架理解自己。但我越来越觉得，优势不应该只停留在理解层面，它应该进入判断：我现在是在用优势，还是在透支？这是坚持，还是消耗？</p>
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
