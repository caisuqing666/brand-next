import Link from 'next/link';

export default function DifferentSystemsPage() {
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
              <span>2026-01-06</span>
            </div>
            <h1 className="note-title">把不同的事，交给不同的系统</h1>
          </header>

          <article className="note-body">
            <p>
              今天在反复调整一个产品时，我终于确认了一件之前一直模糊的事：<br />
              问题不在执行，不在能力，而在边界没有被真正承认。
            </p>
            <p>我太想用一个工具，去承载所有重要的东西。</p>
            <p>
              既希望它足够清醒，帮人看清现实；<br />
              又希望它足够温暖，能在疲惫时接住人；<br />
              既希望它符合商业逻辑，<br />
              又隐隐期待它能回应生活本身。
            </p>
            <p>
              这些期待单独看都没有错，<br />
              但当它们被强行放进同一个系统里，<br />
              结果就只有一个——拧巴。
            </p>

            <hr />

            <p>后来我意识到一个更根本的问题：</p>
            <p>我试图用同一套价值标准，处理本质完全不同的场景。</p>
            <p>
              投资，需要的是反人性。<br />
              它要求你压制情绪、服从概率、接受不确定性。<br />
              清醒在这里不是美德，而是底线。
            </p>
            <p>但生活不是。</p>
            <p>
              生活更像一场长期负重的行走。<br />
              在这里，过度清醒往往不是力量，而是一种慢性消耗。<br />
              人真正需要的，很多时候不是再看清一次现实，<br />
              而是被允许继续走下去。
            </p>

            <hr />

            <p>当我终于承认这一点，事情突然就变简单了。</p>
            <p>
              商业的，交给商业逻辑；<br />
              投资的，只服务理性与纠偏；<br />
              生活的，允许善意、鼓励和阶段性的"没那么真实"。
            </p>
            <p>
              不是所有真实，都适合被赤裸地呈现。<br />
              不是所有清醒，都值得被无限放大。
            </p>
            <blockquote>
              真正成熟的判断，不是"我能看多冷的真相"，<br />
              而是知道——在什么情境下，真相需要被包裹。
            </blockquote>
            <p>
              这并不是对理想的退让，<br />
              而是对复杂性的尊重。
            </p>

            <hr />

            <p>我们本来就不是一个单一系统。</p>
            <p>
              不同的时刻，需要调用不同的心智模式。<br />
              当这些系统不再互相干扰，<br />
              人反而会变得更稳定。
            </p>
            <p>
              今天记录下这一点。<br />
              没有高光，但是一次重要的校准。
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
