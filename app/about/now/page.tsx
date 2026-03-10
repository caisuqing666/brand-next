import Link from 'next/link';

const focusAreas = [
  {
    title: '身体',
    body: [
      '现在最重要的一条主线，仍然是把身体放回生活中心。',
      '跑步对我来说，早就不只是运动。它更像一种底盘训练：让呼吸稳下来，让节奏重新回到身体里，也让很多想不清的东西，在一公里一公里里慢慢沉下去。',
      '所以这个阶段，我最想守住的，不是更激烈的突破，而是继续把这种稳定活成日常。',
    ],
  },
  {
    title: '写作与整理',
    body: [
      '很多感受如果不整理，很快又会散回情绪里。',
      '现在我还在持续做的一件事，就是把这些经历、判断和反复出现的问题，一点点整理成能留下来的文字和结构。',
      '不是为了表达更多，而是为了让那些已经被生活验证过的东西，不要再次变得模糊。',
    ],
  },
  {
    title: '工具与构建',
    body: [
      '我还在继续做工具，但现在越来越不想铺得太开。',
      '比起多，我更在意准。比起功能，我更在意它是不是在处理一个真实存在、而且值得反复处理的问题。',
      '所以这个阶段的构建重点，不是做更多产品，而是把已经重要的那几个入口做得更稳、更清楚。',
    ],
  },
  {
    title: '边界与现实',
    body: [
      '生活里还有一条很重要的练习，是把边界慢慢练出来。',
      '少答应一点，少分散一点，少让外界节奏轻易接管自己。不是为了封闭，而是为了把心力留给真正想长期守住的事。',
      '这条练习不显眼，但它也许比任何新计划都更重要。',
    ],
  },
];

export default function AboutNowPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/about" className="nav-link active">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>关于</span>
              <span className="note-eyebrow-sep">/</span>
              <span>Now</span>
            </div>
            <h1 className="note-title">此刻真正正在过的生活重心</h1>
            <p className="notes-page-subtitle">
              这不是近况播报，而是我此刻真正正在过的生活重心。
            </p>
          </header>

          <article className="note-body">
            <p>有些页面适合写原则，有些页面适合写结构。</p>
            <p>而 `Now` 这一页，对我来说更像是一个时间切面。</p>
            <p>它不负责总结全部，也不想变成流水账式的近况更新。</p>
            <p>它更想留下的是：现在这个阶段，我真正把什么活成了现实。</p>

            <hr />

            {focusAreas.map((area, index) => (
              <section key={area.title}>
                <h2>{index + 1}、{area.title}</h2>
                {area.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <hr />

            <h2>5、暂时不做什么</h2>
            <p>这个阶段，我也在练习不急着把每个想法都展开。</p>
            <p>不急着把工具铺满，不急着把表达推得更外，不急着为了看起来在进步而增加动作。</p>
            <p>有些东西现在不做，不是放弃，而是因为它们还不是当下最重要的事。</p>

            <hr />

            <p>所以 `Now` 不是一个“最近很忙”的页面。</p>
            <p>它更像是在提醒我：现在这个阶段，我到底想把什么活扎实。</p>
            <p>现在这个阶段，我不急着展开更多，只想先把真正重要的部分活扎实。</p>
          </article>

          <section className="garden-section" style={{ marginTop: '2.5rem' }}>
            <div className="garden-header">
              <span className="evidence-eyebrow">继续往下看</span>
            </div>
            <div className="garden-grid" style={{ gridTemplateColumns: '1fr' }}>
              <Link href="/about/constitution" className="garden-node">
                <h3 className="node-title">宪法</h3>
                <p className="node-question">如果这是现在真正正在过的生活重心，那它背后想守住的边界与原则，可以继续往这里看。</p>
              </Link>
            </div>
          </section>

          <Link href="/about" className="note-back">← 回到关于</Link>
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
