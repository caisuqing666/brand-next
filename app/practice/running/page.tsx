import Link from 'next/link';

const entries = [
  {
    slug: 'running-and-code',
    date: '2025-12-04',
    dateDisplay: '25-12-04',
    title: '在跑步与代码之间，我找到了自己的节奏',
    excerpt: '46 岁开始写代码，不是在赶时间，而是在回家。跑步和代码，都在训练我如何在混乱中建立自己的秩序。',
    tag: '与其他实践的关联文章',
  },
  {
    slug: 'first-full-marathon',
    date: '2021-10-03',
    dateDisplay: '21-10-03',
    title: '没有人是单独完成一场马拉松的',
    excerpt: '国庆节，大宁公园，第一个全马。跑友一段一段地接力陪跑，才让我撑过了第 35 公里。',
    tag: '阶段总结',
  },
  {
    slug: 'from-breakthrough-to-return',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '从追求突破，到学会回归',
    excerpt: '这一阶段，跑步真正教会我的不是更快，而是节奏。',
    tag: '阶段总结',
  },
  {
    slug: 'rhythm-structure-risk',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '节奏、结构、风险',
    excerpt: '为什么我在跑步、编程和投资里，看到的是同一件事。',
    tag: '与其他实践的关联文章',
  },
  {
    slug: 'repetition-feedback-compounding',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '重复、反馈、复利',
    excerpt: '为什么真正有用的成长，往往都不靠爆发。',
    tag: '与其他实践的关联文章',
  },
];

const nextEntries = [
  { title: '跑步日志', body: '把真实训练、情绪状态和身体反馈继续记录下来。' },
  { title: '阶段总结', body: '把一个阶段里真正留下来的东西沉淀成可回看的节点。' },
  { title: '训练反思', body: '不是只看里程和配速，而是看训练是否仍然服务于长期结构。' },
  { title: '与其他实践的关联文章', body: '继续写跑步如何反过来影响代码、判断、节奏和生活。' },
];

export default function RunningPage() {
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
              <span>Running</span>
              <span className="note-eyebrow-sep">/</span>
              <span>跑步</span>
            </div>
            <p className="note-kicker">Running · 跑步</p>
            <h1 className="note-title">跑步</h1>
            <div className="note-intro">
              <p>跑步对我来说，从来不只是运动。</p>
              <p>它更像一种长期练习：练习节奏，练习耐心，也练习在看起来没有太多变化的时候，仍然愿意继续往前。</p>
              <p>很多关于周期、恢复、积累和分寸的理解，不是一下子明白的。而是在一公里一公里里，慢慢长出来的。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">跑步是一条怎样的练习线</h2>
                <div className="note-section-copy">
                  <p className="node-question">它不是运动爱好展示，也不是一页个人成绩单。</p>
                  <p className="node-question">对我来说，跑步首先是一条长期实践线，一种结构训练，也是一种和时间相处的方式。</p>
                  <p className="node-question">很多后来长成 slowroot 的判断、节奏感和长期主义，不是先在脑子里想出来的，而是先在身体里被跑出来的。</p>
                </div>
              </article>

              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">它怎样进入现实</h2>
                <div className="note-section-copy">
                  <p className="node-question">跑步已经进入我的生活很多年，它不是一阵短期热情，而是一条反复回去、反复验证的长期线索。</p>
                  <p className="node-question">每次生活变乱、节奏失衡、心里起雾的时候，我最后还是会回到这条路上。</p>
                  <p className="node-question">真正重要的不是某一个成绩，而是它怎样影响我的判断、节奏和生活：让我知道什么时候该加一点，什么时候该停一下，什么时候只是继续重复。</p>
                </div>
                <p className="note-section-label">留下的是：节奏</p>
                <div className="note-section-copy" style={{ marginBottom: 0 }}>
                  <p className="node-question">不是一时冲得多快，而是如何在长期里不乱，如何在起伏里仍然保持自己的步频。</p>
                </div>
              </article>
            </div>
          </section>

          <section className="garden-section practice-branch-lower">
            <div className="garden-node note-section-card">
              <h2 className="node-title note-section-title">具体内容入口</h2>
              <div className="note-section-copy practice-branch-support" style={{ marginBottom: 0 }}>
                {nextEntries.map((item) => (
                  <div key={item.title}>
                    <p className="practice-branch-item-label">{item.title}</p>
                    <p className="node-question">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <nav className="notes-list practice-branch-entry-list" aria-label="跑步记录列表">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/practice/running/${entry.slug}`}
                className="notes-item"
              >
                <span className="notes-item-date">{entry.dateDisplay}</span>
                <span className="notes-item-right">
                  <span className="notes-item-title">{entry.title}</span>
                  <span className="notes-item-excerpt">{entry.excerpt}</span>
                  <span className="notes-item-excerpt practice-branch-entry-tag">
                    {entry.tag}
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="note-back-wrap">
            <Link href="/practice" className="note-back">← 回到实践</Link>
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
