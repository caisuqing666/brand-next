import Link from 'next/link';

export default function WarmHeartSteadyHandsPage() {
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
              <span>2025-12-24</span>
            </div>
            <h1 className="note-title">心是热的，手是稳的</h1>
          </header>

          <article className="note-body">
            <p>这段时间，我的生活很简单。</p>
            <p>
              每天清晨，跑 6 公里。<br />
              不是为了成绩，也不是为了对抗什么。<br />
              只是把身体叫醒，让一天有一个清晰的起点。
            </p>
            <p>
              跑步对我来说，早就不只是运动。<br />
              它更像是一种秩序。<br />
              当身体在节奏里，很多杂念自然会退后一步。
            </p>

            <hr />

            <p>跑完步，我开始学习。</p>
            <p>
              做个人网站，给自己搭一个可以长期放东西的地方；<br />
              做小红书图片分割工具，只是因为觉得"每次手动切图太浪费时间"；<br />
              做公众号下载插件，是想把喜欢的文字留在自己的系统里，慢慢消化。<br />
              中途还重装了一次 Clash，把 tun 功能重新理顺。
            </p>
            <p>
              这些事情看起来零散，<br />
              也不怎么"值得分享"。
            </p>
            <p>但它们有一个共同点：都在解决真实的问题。</p>
            <p>
              我不再迷恋宏大的目标，<br />
              而是更在意——<br />
              这件事，是不是能让我明天更顺一点。
            </p>
            <p>
              学习不再是证明自己聪明，<br />
              而是让生活少一点卡顿。
            </p>

            <hr />

            <p>
              与此同时，我也在持续输出。<br />
              小红书、公众号，<br />
              没有刻意追热点，<br />
              也不急着做爆款。<br />
              只是把当下走到哪一步，如实写下来。
            </p>
            <p>我慢慢意识到，表达这件事，本身也在成长。</p>
            <p>
              以前，我会解释很多。<br />
              现在，越来越敢停。<br />
              敢把句子写短，<br />
              敢在该收的时候收，<br />
              敢让留白留在那里。
            </p>
            <p>
              不是因为没话说，<br />
              而是知道——有些东西，说到这里就够了。
            </p>

            <hr />

            <p>这一点，其实也和跑步、学习很像。</p>
            <p>
              跑步时，你会知道什么时候该加速，<br />
              也会知道什么时候该稳住呼吸。<br />
              学习也是，<br />
              不是每一步都要向前冲，<br />
              有些阶段，是在打基础。
            </p>
            <p>心理上的成长，大概也是这样。</p>
            <p>
              我依然有情绪，<br />
              依然会困惑、会犹豫。<br />
              但我开始更信任一个状态：
            </p>
            <blockquote>
              情绪存在，但不接管方向。<br />
              心是热的，但手要稳。
            </blockquote>

            <hr />

            <p>
              我依然对生活有期待，<br />
              对更好的自己有想象。<br />
              但我不再用焦虑去催促它们。
            </p>
            <p>
              能做的事，一件一件做；<br />
              能走的路，一步一步走。
            </p>
            <p>如果一定要给这段时间一个总结，那可能不是"我进步了多少"，而是——</p>
            <p>
              我开始更少地向外证明，<br />
              更多地向内确认。
            </p>
            <p>
              确认自己正在走的这条路，<br />
              虽然不快，<br />
              但没有偏。
            </p>
            <p>这就够了。</p>
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
