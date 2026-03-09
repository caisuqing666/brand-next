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
              <span>赛博问卜</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-03-09</span>
            </div>
            <h1 className="note-title">我为什么把「赛博问卜」留在 slowroot 的外链工具组里</h1>
          </header>

          <article className="note-body">
            <p>借一面镜子，看清当下。</p>
            <p>
              我给它留的定位，故意比"答案"更轻。<br />
              因为它不是替你决定。<br />
              它更像把你已经感觉到、却还没有说清的东西，轻轻照出来。
            </p>
            <p>
              有时候，人不是没有感觉，<br />
              而是被太多声音盖住了。<br />
              外界说法很多，自己的念头也很多，最后真正重要的那一点，反而听不见。
            </p>
            <p>
              所以我不把它当答案，更把它当镜子。<br />
              不是去神化某种判断，<br />
              而是借一个小小的外部界面，帮自己把当下照清一点。
            </p>
            <p>
              对 slowroot 来说，这类工具真正有价值的地方，从来不是"准不准"。<br />
              而是它能不能让人暂停一下，重新听见自己正在想什么、怕什么、犹豫什么。
            </p>
            <p>
              如果临在之锚是在混乱里先把自己接回来，<br />
              那赛博问卜更像是回来以后，借一面镜子看清：现在到底站在什么气氛里，心里又在动什么。
            </p>
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
