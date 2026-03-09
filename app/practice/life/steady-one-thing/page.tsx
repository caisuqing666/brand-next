import Link from 'next/link';

export default function SteadyOneThingPage() {
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
              <span>2026-01-13</span>
            </div>
            <h1 className="note-title">把一件事做稳</h1>
          </header>

          <article className="note-body">
            <p>今天其实很普通。</p>
            <p>
              没有写出什么惊艳的代码，也没有"效率暴涨"。<br />
              但我很清楚：<br />
              我把一件原本会反复出问题的事情，做稳了。
            </p>

            <hr />

            <p>
              我在做一个小工具，接入大模型，生成一份"个人诊断 + 行动建议"。<br />
              过程中遇到一个很典型的问题：<br />
              页面会卡。进度条走到 100%，却迟迟不出结果。
            </p>
            <p>一开始，我的直觉反应是很多人都会有的那种：</p>
            <p>
              是不是模型不够快？<br />
              是不是参数没调好？<br />
              是不是要换更强的模型？
            </p>
            <p>但我很快意识到：这不是"慢"的问题，是"不稳"。</p>

            <hr />

            <p>后来我停下来，换了一个问法：</p>
            <p>
              如果模型失败了，会发生什么？<br />
              如果 JSON 不完整，会发生什么？<br />
              如果某一步抽风了，系统能不能兜住？
            </p>
            <p>答案其实很残酷：兜不住。</p>
            <p>于是我做了一件看起来很"反高潮"的事——</p>
            <p>
              我没有追求更聪明的 AI，<br />
              而是优先保证：不管发生什么，系统都能给出一个完整结果。
            </p>
            <p>
              哪怕内容普通，也不能空白。<br />
              哪怕模型失误，也不能卡死。
            </p>

            <hr />

            <p>
              我把这个目标交给了 Claude，只提了一件事：<br />
              不要追求完美，请保证任何情况下，结构都完整。
            </p>
            <p>那一刻，我突然意识到一件很重要的事：</p>
            <blockquote>
              成熟不是"什么都做到最好"，<br />
              而是清楚系统允许在哪里失败。
            </blockquote>

            <hr />

            <p>今天的我，没有变得更厉害。但我学会了三件事：</p>
            <ul>
              <li>稳定，比速度重要</li>
              <li>结构完整，比内容精彩重要</li>
              <li>把问题交对方式，比自己死磕重要</li>
            </ul>
            <p>这些道理，不只适用于写代码。也适用于生活、关系、工作、成长。</p>
            <p>
              很多时候，我们不是能力不够，<br />
              而是一直在用硬撑，换一种"暂时的安心"。
            </p>

            <hr />

            <p>今天就到这里。</p>
            <p>系统稳了，我也稳了。</p>
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
