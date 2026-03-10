import Link from 'next/link';

export default function EndOfDayPage() {
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
              <span>EndOfDay</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-03-02</span>
            </div>
            <h1 className="note-title">今日 Todo：每天只做 3 件事</h1>
          </header>

          <article className="note-body">
            <p>有一次用 openclaw 抓热词，看到了一个词：jinri-todo。旁边带着一句话——不是做更多，而是做更少。</p>
            <p>我盯着这句话看了很久。那太像我自己了。</p>
            <p>
              有段时间，我每天早上打开清单，上面二十几件事。<br />
              看着它，心先沉了一截。
            </p>
            <p>不是做不了，是不知道从哪下手。</p>
            <p>
              白天就在"应该做很多"和"先做哪个"之间反复横跳。<br />
              晚上很忙，却没完成真正重要的那件。
            </p>
            <p>后来我意识到——问题也许不是我，是清单本身。</p>
            <p>
              列清单会给大脑一种错觉：<br />
              "我已经在处理了。"
            </p>
            <p>
              越长的清单，越强的假满足。<br />
              但真正的行动，并没有发生。
            </p>
            <p>
              当任务多到某个程度，它就不再是工具。<br />
              它成了焦虑本身。
            </p>

            <hr />

            <p>于是我给自己立了一个近乎荒谬的规则：</p>
            <blockquote>
              每天，只许做 3 件事。
            </blockquote>
            <p>
              第一次这么做，我反而愣住了。<br />
              以前有 30 件，我不用选择——反正都要做。<br />
              现在只有 3 件，我必须承认：
            </p>
            <p>今天，这件事比那件事更值得我的时间。</p>
            <p>这个承认，才是最难的一步。</p>

            <hr />

            <p>后来我找到一个对自己有效的比例：</p>
            <ul>
              <li>2 件"要做的"</li>
              <li>1 件"想做的"</li>
            </ul>
            <p>
              "要做的"是责任。<br />
              "想做的"是成长。
            </p>
            <p>这个结构让我既没有逃避现实，也没有把自己全部交出去。</p>
            <p>还有一条更重要的规则：</p>
            <blockquote>
              完成一件，才能补一件。清单里永远只有 3 件。
            </blockquote>
            <p>
              这不是时间管理。<br />
              这是对冲动的约束。
            </p>

            <hr />

            <p>
              每天真正能完成的高质量事情，本来就不多。<br />
              这不是能力问题，是人的现实边界。
            </p>
            <p>承认有限，反而解放。</p>
            <p>
              不再用一张满满的清单证明自己努力。<br />
              只在一天结束时确认——那 3 件事，真的推进了。
            </p>
            <p>够了。</p>
          </article>

          <a
            href="https://endofday.site"
            className="system-tool-ref"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '3rem' }}
          >
            <span className="tool-ref-label">EndOfDay · 今日三件</span>
            <span className="tool-ref-hint">每天只能填 3 件事。填完，就去做。选择，是对时间最大的尊重。</span>
            <span className="tool-ref-link">endofday.site →</span>
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
