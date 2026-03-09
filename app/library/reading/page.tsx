import Link from 'next/link';

const entries = [
  {
    title: '《反脆弱》',
    description: '风险、冗余、长期存活',
    note: '这本书讨论的不是怎样避免波动，而是怎样在不确定、冲击和变化里，建立更能长期存活的结构。',
    reason:
      '它已经不只是一本“投资书”或“风险书”，而是进入了 slowroot 的底层判断：冗余、杠铃、长期存活、结构先于结果。很多我现在在乎的东西，包括风险、节奏、配置、不过度优化，都和它有关。',
  },
  {
    title: '《最优解人生》',
    description: '结构选择、人生配置、最优而非全要',
    note: '这本书提醒人，人生不是把每件事都做到最好，而是在有限条件下，找到更适合自己的整体结构。',
    reason:
      '它很照亮 slowroot 正在处理的问题：不是做更多，而是做更对；不是什么都要，而是知道什么值得留下。它让我更在意人生配置、长期取舍，以及“最优”常常不是最满，而是最合适。',
  },
  {
    title: '《庄子》',
    description: '位置感、松弛感、从外部标准里退出来',
    note: '这不是一本教人逃避现实的书，而是一本不断提醒人重新看待位置、尺度、快慢、得失与自由的书。',
    reason:
      '它会反复把我从外部标准里带回来。很多时候，真正让人累的不是事情本身，而是站错了位置。《庄子》留在这里，是因为它总能让我重新看见：不必什么都硬拧，很多判断要先校正位置，很多生长要先松开执念。',
  },
  {
    title: '《纳瓦尔宝典》',
    description: '长期主义、杠杆、清醒积累',
    note: '这本书谈财富、判断、杠杆、长期主义，也谈一个人怎样在复杂世界里慢慢形成更清醒的生活方式。',
    reason:
      '它不是那种“让人立刻兴奋”的书，而是会慢慢渗进判断里。关于长期积累、复利、独立思考、用更少动作做更有效的事，它都给过我很多启发。它和 Practice、Tools、slowroot 整体的长期结构很能接上。',
  },
  {
    title: '《人间值得》',
    description: '普通生活里的安稳与分寸',
    note: '这本书没有很强的理论野心，却一直在提醒人：普通人的生活，也可以有自己的安稳、边界和分寸。',
    reason:
      '它让我记得，成长不一定总是激烈的，也不一定必须宏大。slowroot 想守住的，不只是结构感，也有一种普通生活里的从容与掌控感。这本书会留在这里，是因为它让我相信：不完美的人生，也可以被安放得很好。',
  },
  {
    title: '《Essentialism》',
    description: '收束、减法、只做真正重要的事',
    note: '这本书讲的不是怎样做更多，而是怎样只做真正重要的事，把有限的时间和注意力从分散里收回来。',
    reason:
      '它和 slowroot 的行动观很接近：真正有效的行动，不是铺得更开，而是收得更准。无论是 Garden 里的“先收束，再行动”，还是 EndOfDay 的“只做三件事”，背后都有这本书照亮过的影子。',
  },
];

export default function LibraryReadingPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link active">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>Reading</span>
              <span className="note-eyebrow-sep">/</span>
              <span>书与文章</span>
            </div>
            <p className="note-kicker">Reading · 书与文章</p>
            <h1 className="note-title">书与文章</h1>
            <div className="note-intro">
              <p>这里不是书单仓库，而是那些真正留下来、会反复回看的书与文章。</p>
              <p>第一批留下来的 6 本书。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              {entries.map((entry) => (
                <article key={entry.title} className="garden-node note-section-card">
                  <h2 className="node-title note-section-title">{entry.title}</h2>
                  <div className="note-section-copy">
                    <p className="node-question">{entry.description}</p>
                    <p className="node-question">{entry.note}</p>
                  </div>
                  <p className="note-section-label">为什么它会留在这里</p>
                  <p className="node-question">{entry.reason}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="note-closing">
            <p>能放在这里的，不是我看过的，而是还会回来看的。</p>
          </div>

          <div className="note-back-wrap">
            <Link href="/library" className="note-back">← 回到资源</Link>
          </div>
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
