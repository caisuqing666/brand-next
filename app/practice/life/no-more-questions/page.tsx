import Link from 'next/link';

export default function NoMoreQuestionsPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link active">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>实践</span>
              <span className="note-eyebrow-sep">/</span>
              <span>生活</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2025-12-31</span>
            </div>
            <h1 className="note-title">这一年，有些事我已经不再追问</h1>
          </header>

          <article className="note-body">
            <p>今天是 2025 年的最后一天。</p>
            <p>
              我没有回顾这一年做了什么，<br />
              也没有急着为它下结论。
            </p>
            <p>
              只是坐在这里，<br />
              看着事情走到它该停下来的位置。
            </p>

            <hr />

            <p>
              这一年，其实发生了很多事。<br />
              有尝试，有反复，也有不少推倒重来。
            </p>
            <p>
              有些时候，我也会忍不住问：<br />
              是不是不够快？<br />
              是不是方向错了？<br />
              是不是应该更用力一点？
            </p>
            <p>
              但走到年底，我忽然意识到——<br />
              有些问题，并不是一定要被想通。
            </p>
            <p>事情走到这里，已经够了。</p>

            <hr />

            <p>
              这一年，我慢慢学会了一种新的状态：<br />
              不急着解释，不急着证明，<br />
              也不再和每一次停顿对抗。
            </p>
            <p>
              该来的，就让它来。<br />
              会走的，也允许它走。
            </p>
            <p>
              不是放弃，<br />
              而是把不必要的消耗，一点点放下。
            </p>

            <hr />

            <p>
              把屋子打扫干净，<br />
              留出一块空处。
            </p>
            <p>
              不是为了马上装满，<br />
              而是给接下来的生活，<br />
              留一点回旋的空间。
            </p>

            <hr />

            <p>
              如果一定要给 2025 一个评价，<br />
              我会说：<br />
              它没有让我翻盘，<br />
              但让我站得更稳。
            </p>
            <p>
              我没有敷衍自己，<br />
              也没有逃离当下。
            </p>
            <blockquote>
              这已经是我能给这一年的，<br />
              最真诚的交代。
            </blockquote>

            <hr />

            <p>
              所以在这一年的最后一天，<br />
              我不再展望，也不立誓。
            </p>
            <p>只想轻声说一句：</p>
            <p>到这里，已经很好了。</p>

            <hr />

            <p>
              至于 2026，<br />
              慢一点再说吧。
            </p>
            <p>愿我们都能在不确定里，慢慢站稳。</p>
          </article>

          <Link href="/practice/life" className="note-back">← 回到生活</Link>
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
