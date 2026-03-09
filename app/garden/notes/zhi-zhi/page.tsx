import Link from 'next/link';

export default function ZhiZhiPage() {
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

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>花园</span>
              <span className="note-eyebrow-sep">/</span>
              <span>笔记</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-02-03</span>
            </div>
            <h1 className="note-title">知止而后有定</h1>
          </header>

          <article className="note-body">
            <p>有一段时间，我其实很怀疑自己。</p>
            <p>
              我在用 AI。<br />
              我在做优化。<br />
              我在一遍遍跑流程、改逻辑。<br />
              可每一次结果出来，我心里只有一个感觉：<br />
              它在糊我。
            </p>
            <p>
              不是完全错。但也谈不上对。<br />
              像是一个很努力在回应，却始终没有真正回答问题的人。
            </p>
            <p>那种消耗很隐蔽。因为你会开始怀疑的不是系统，而是自己：</p>
            <p>
              是不是我不够懂？<br />
              是不是我要求太高？<br />
              是不是 AI 本来就只能这样？
            </p>
            <p>真正让我停下来的，不是技术问题，而是一个非常简单的念头：</p>
            <blockquote>
              我其实根本不知道，<br />
              现在给我回复的，<br />
              到底是 AI，还是系统悄悄换成了 Mock。
            </blockquote>

            <hr />

            <p>
              我以为自己在和模型对话。<br />
              但事实上，系统在后台替我做了太多决定：
            </p>
            <ul>
              <li>AI 失败了，就直接兜底</li>
              <li>校验不过，就换一套结果</li>
              <li>配置有问题，也继续往前走</li>
            </ul>
            <p>
              而我看到的，只是一个"看起来还行"的答案。<br />
              那一刻我突然意识到：<br />
              真正让我难受的，不是 AI 不够好，而是系统没有对我说实话。
            </p>

            <hr />

            <p>后来，我只做了三件事。都很小，但都很关键。</p>
            <p><strong>第一件事：我要求系统对我说实话。</strong></p>
            <p>
              每一次结果，必须明确标注：<br />
              是不是 AI？如果不是，原因是什么。<br />
              不是"差不多"，不是"看起来像"。
            </p>
            <p>
              当系统第一次清楚地告诉我：<br />
              "这次不是 AI，是 Mock，而且原因是 AI 没启用。"<br />
              我反而松了一口气。
            </p>
            <p>
              因为那一刻我终于确定：<br />
              不是我判断错了，而是之前一直被模糊对待。
            </p>

            <p><strong>第二件事：我不再让一次失败决定生死。</strong></p>
            <p>
              以前的逻辑是：AI 只要失败一次，就立刻放弃。<br />
              可现实不是这样的。网络会抖，模型会抽风，世界本来就不稳定。
            </p>
            <p>
              于是我只允许一件事：失败，可以再试一次。不多，就一次。<br />
              第二次还失败，我接受。<br />
              但如果第二次成功，我至少知道：问题不在"它不行"，而在"环境不稳"。
            </p>

            <p><strong>第三件事：我不追求更快，只把阻塞挪开。</strong></p>
            <p>
              我没有做任何炫技优化。<br />
              只是认真看了一眼流程，问了自己一句话：<br />
              到底是谁，挡在门口，让我什么都看不到？
            </p>
            <p>
              答案很简单。<br />
              有一步并不是必须最先完成，却被放在了最前面。<br />
              我只是把它从门口挪开。<br />
              它照样运行，照样完成，但不再挡住我看到第一步结果。
            </p>

            <hr />

            <p>做完这些之后，真正改变的不是系统，而是我自己。</p>
            <p>
              我不再靠感觉判断"是不是不对"。<br />
              系统会清楚告诉我：发生了什么，为什么会这样，是模型问题，还是结构问题。<br />
              那种长期的内耗，慢慢消失了。
            </p>
            <p>我终于确认了一件事：</p>
            <blockquote>
              真正消耗人的，从来不是事情本身，<br />
              而是你不知道问题到底出在哪里。
            </blockquote>
            <p>
              当系统肯对我说实话，判断权回到我手里，<br />
              我就重新站住了。
            </p>

            <hr />

            <p>
              这次经历，对我来说，不只是一次 AI 调整。<br />
              它更像一次提醒：
            </p>
            <p>
              在复杂系统里，不要急着追求更聪明。<br />
              先做到一件事：知止。
            </p>
            <p>
              知道哪里该停，<br />
              哪里该看清，<br />
              哪里不再被"看起来在工作"的东西牵着走。
            </p>
            <p>
              知止而后有定。<br />
              判断一旦安定，人自然就不乱了。
            </p>
          </article>

          <Link href="/garden/notes" className="note-back">← 回到笔记</Link>
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
