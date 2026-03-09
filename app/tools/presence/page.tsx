import Link from 'next/link';

export default function PresenceToolPage() {
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
              <span>临在之锚</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-03-08</span>
            </div>
            <h1 className="note-title">为什么做「临在之锚」</h1>
          </header>

          <article className="note-body">
            <p>很多工具，都在帮助人做更多事。</p>
            <p>提醒、规划、追踪、归类、提效。它们当然有用。</p>
            <p>人在很多时候真正缺的，不是再多一个工具。</p>
            <p>
              而是在已经很乱的时候，怎么先回来。
            </p>
            <p>
              不是回来做事。不是回来解决问题。也不是回来继续优化自己。只是先回到自己这里，回到当下，回到那个还没有被信息、情绪和惯性完全带走的位置。
            </p>
            <p>这也是我后来做「临在之锚」的原因。</p>

            <hr />

            <h2>一、我越来越觉得，很多问题不是“不会做”，而是“人不在场”</h2>
            <p>
              这几年做事越多，我越清楚地感受到：很多时候，问题并不是我们不知道该做什么，而是我们整个人已经不在当下了。
            </p>
            <p>
              身体在这里，注意力却被别的东西拉走。表面上看，人还在行动。可更深一层看，会发现：那个真正能够判断、感受、选择的自己，已经有点不在场了。
            </p>
            <p>
              这时候再去追求效率，很多时候只会更乱。因为动作还在继续，可人已经偏了。所以我后来越来越在意一件事：在做任何事之前，有没有一种方式，能先让我回来。
            </p>

            <hr />

            <h2>二、我做它，不是为了加功能，而是为了留一个“回来的入口”</h2>
            <p>
              很多产品会不断增加功能，因为功能看得见，也容易证明价值。但「临在之锚」从一开始，就不是沿着这条路想的。
            </p>
            <p>
              我做它，不是为了加功能，而是为了留一个“回来的入口”。那个入口处理的，不是任务，也不是目标，而是当一个人被情绪、噪音、失序感带走的时候，有没有一个地方，可以先让自己落下来。
            </p>
            <p>
              它不是帮你做更多。它是帮你先不要被带走。
            </p>

            <hr />

            <h2>三、「临在」不是玄，也不是慢吞吞，而是一种判断前的清醒</h2>
            <p>
              有时候，“临在”这个词容易被误解。好像它只是放松、安静、慢一点。或者只是某种很轻飘的感受。
            </p>
            <p>
              但我越来越觉得，临在不是这样。对我来说，真正的临在更像是：在情绪还没把你卷走之前，在外界声音还没替你下判断之前，你仍然能感觉到自己站在哪里。
            </p>
            <p>
              因为 slowroot 一直在意的，不是做更多，而是判断。而判断如果没有临在作底，很容易变成情绪化的判断、焦虑驱动的判断、跟着别人节奏走的判断。
            </p>
            <p>
              从这个角度看，它不是“附加功能”，而是一种入口性的工具。在你做判断之前，你有没有先回到那个还能判断的位置。
            </p>

            <hr />

            <h2>四、我做它，是因为我也需要这样的东西</h2>
            <p>
              说到底，我做「临在之锚」，并不是因为我已经很会临在。恰恰相反，是因为我也经常需要被提醒。
            </p>
            <p>
              提醒自己不要被情绪推着走。提醒自己不要在乱的时候急着下结论。提醒自己先回来，先落地，先安静一点。提醒自己：不是所有事情都要立刻回应。
            </p>
            <p>
              很多时候，人真正需要的，不是更强，而是先不要散。有时你需要一个小小的外部支点。一个你愿意信任、愿意靠近、愿意短暂停留的地方。「临在之锚」对我来说，就是这样一个支点。
            </p>

            <hr />

            <h2>结尾</h2>
            <p>所以，「临在之锚」不是一个为了让你变得更厉害的工具。它更像是一个很小、很安静、但很重要的地方。</p>
            <p>当你乱的时候，它不催你。当你空的时候，它不逼你。当你还没有答案的时候，它也不急着替你定义。</p>
            <p>它只是想做一件事：在你快要被带走的时候，先把自己接回来。</p>
            <p>
              对我来说，这已经很有价值了。因为很多真正好的判断，不是从更努力开始的，而是从“我终于回来了”开始的。
            </p>
          </article>

          <a
            href="https://metafield.cc"
            className="system-tool-ref"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '3rem' }}
          >
            <span className="tool-ref-label">临在之锚</span>
            <span className="tool-ref-hint">不是催你更快，而是在你快被带走的时候，先帮你把自己接回来。</span>
            <span className="tool-ref-link">metafield.cc →</span>
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
