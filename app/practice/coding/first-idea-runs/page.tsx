import Link from 'next/link';

export default function FirstIdeaRunsPage() {
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
              <span>编程</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2025-12-12</span>
            </div>
            <h1 className="note-title">当我第一次把想法运行起来</h1>
          </header>

          <article className="note-body">
            <p>有些变化，并不是发生得很剧烈，却会在心里留下一个清晰的标记。</p>
            <p>这篇文章，记录的正是那样一个时刻。</p>

            <hr />

            <p>
              很长一段时间里，我一直在记录。<br />
              记录跑步、学习、情绪和思考。我擅长理解世界，也擅长理解自己。
            </p>
            <p>但在某个时刻，我突然意识到一件事：理解，并不等同于改变。</p>
            <p>
              我能为很多复杂的感受找到语言，却很少真正把什么东西放到现实中去。<br />
              不是懒惰，也不是逃避，<br />
              而是一种习惯站在"理解"的位置，看世界发生。
            </p>
            <p>
              INFJ 很容易向内走。<br />
              我们习惯先确认意义，再决定行动；先想清楚，再允许自己迈出一步。<br />
              这让我在很多事情上走得很深，也让我在一些关键时刻，迟迟没有落地。
            </p>
            <p>
              慢慢地，我对"构建"这件事产生了一种安静的渴望：<br />
              我想知道，我能不能把脑海里的东西，变成现实中存在的东西。
            </p>
            <p>
              我开始学编程，并不是为了转行。<br />
              只是隐约觉得，如果人生里始终缺少"构建"的能力，<br />
              那么再多的理解，也会在原地打转。
            </p>

            <hr />

            <p>真正的变化，并没有戏剧性。</p>
            <p>
              那天，我在 Cursor 里，<br />
              把自己平时反复使用的小红书封面和内页逻辑，一行一行写进代码里。<br />
              点下运行键，一张图片生成出来。
            </p>
            <p>那一刻，我并没有很激动。但我非常清楚地知道：</p>
            <blockquote>
              有什么东西，被放到了现实这一侧。
            </blockquote>

            <hr />

            <p>
              对我来说，技术并不是冷的。<br />
              它不是效率工具，也不是竞争筹码，<br />
              而是一座桥——把我长期停留的内在世界，连接到了现实世界。
            </p>
            <p>
              那个小红书图片生成器，本身并不重要。<br />
              重要的是，我第一次站在了"构建者"的位置上。
            </p>
            <p>不是解释，也不是旁观，而是参与。</p>
            <p>这不是一个成果，而是一种确认。</p>

            <hr />

            <p>我知道自己会继续慢慢做下去。不急，也不喧哗。</p>
            <p>但有一件事，我已经不会再怀疑了：我是否只能停留在思考里。</p>
            <p>
              跑步让我学会长期与身体相处，<br />
              写作让我学会与内在世界对话，<br />
              而技术，让我第一次确认——我也可以把想法，稳稳地放到现实中。
            </p>
            <p>
              有些路，一旦走进去，就不会再回到原来的位置。<br />
              而我，已经站在那条路上。
            </p>
          </article>

          <Link href="/practice/coding" className="note-back">← 回到编程</Link>
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
