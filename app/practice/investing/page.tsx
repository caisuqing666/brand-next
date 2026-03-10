import Link from 'next/link';

const logEntries = [
  {
    date: '2020',
    tag: '套利结构',
    text: '开始系统做港股打新。规则透明、风险有限、胜率可控。第一次体会到：结构感比运气感更稳。',
  },
  {
    date: '2021',
    tag: '港股失意',
    text: '腾讯、小米跌了很久，打新也风雨飘摇。直到被迫出金，才开始认真承认：认输、重新启程，本来就是投资的一部分。',
  },
  {
    date: '持续',
    tag: '判断放弃',
    text: '定投不是因为懒，是因为我不相信自己能预测。用系统替代情绪，是一种诚实。',
  },
  {
    date: '持续',
    tag: '杠铃小仓',
    text: 'Web3 只放能全亏的部分。不看日涨跌，只问一个问题：这个逻辑，我还信吗？',
  },
];

const nextEntries = [
  { title: '判断记录', body: '继续保留那些真正影响仓位和方向的判断时刻，而不是只记录结果。' },
  { title: '阶段复盘', body: '把每一个周期真正留下来的经验、误判和修正写清楚。' },
  { title: '配置演化', body: '记录仓位结构如何变化，以及变化背后的边界和逻辑。' },
  { title: '风险笔记', body: '把风险看成需要长期相处的现实对象，而不是偶尔想起的提醒。' },
  { title: '与 running / coding / garden 的交叉思考', body: '继续记录投资如何反过来影响节奏、判断、结构和长期主义。' },
];

const crossEntries = [
  {
    href: '/practice/rhythm-structure-risk',
    title: '节奏、结构、风险',
    body: '把 running、coding、investing 三条实践线放到同一页里，看清它们共同在训练什么。',
  },
  {
    href: '/practice/repetition-feedback-compounding',
    title: '重复、反馈、复利',
    body: '继续往下追问：真正留下来的积累，为什么更多来自重复、反馈和克制，而不是某一次爆发。',
  },
];

const stageEntries = [
  {
    href: '/practice/investing/from-returns-to-risk-boundaries',
    title: '从追求收益，到先学会承受风险',
    body: '这一阶段，投资真正教会我的不是判断对错，而是边界：先安排好自己如何承受错误，才谈得上长期留下来。',
  },
];

export default function InvestingPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link active">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>Investing</span>
              <span className="note-eyebrow-sep">/</span>
              <span>投资</span>
            </div>
            <p className="note-kicker">Investing · 投资</p>
            <h1 className="note-title">投资</h1>
            <div className="note-intro">
              <p>投资对我来说，也不只是关于收益。</p>
              <p>它更像一种长期判断训练：你如何面对不确定，如何分配风险，如何在波动里不被情绪带走，也如何承认边界、尊重边界。</p>
              <p>真正重要的，往往不是一次判断是否漂亮，而是你有没有一套能长期承受现实的方式。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">投资是一条怎样的练习线</h2>
                <div className="note-section-copy">
                  <p className="node-question">它不是预测游戏，也不是收益展示页。</p>
                  <p className="node-question">对我来说，投资首先是一条长期实践线，也是一种风险与判断的训练。</p>
                  <p className="node-question">如果 running 训练节奏，coding 训练构建，那么 investing 训练的是：在不确定里，怎样还保有结构。</p>
                </div>
              </article>

              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">它怎样进入现实</h2>
                <div className="note-section-copy">
                  <p className="node-question">2015 年的重疾险、2016 年开始自己操作基金、2018 年的加密货币熊市、2020 年开始系统做港股打新，这些都不是简历条目，而是判断慢慢成形的证据。</p>
                  <p className="node-question">这些节点的意义不在于赚了多少，而在于它们逼我一点点看清：我到底怎样面对风险、放弃、回撤和不确定。</p>
                  <p className="node-question">市场会不断制造诱惑，也不断放大恐惧，所以真正重要的不是一次判断对不对，而是自己有没有安排好面对错误的方式。</p>
                </div>
                <p className="note-section-label">留下的是：边界</p>
                <div className="note-section-copy" style={{ marginBottom: 0 }}>
                  <p className="node-question">不是永远押对，而是知道什么属于自己，什么不属于自己；什么时候该进，什么时候该停，什么时候应该把自己留在场上。</p>
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

          <div className="practice-log-head practice-branch-entry-list">
            <span className="practice-log-label">判断记录</span>
          </div>
          <div className="practice-log">
            {logEntries.map((entry, i) => (
              <div key={i} className="practice-log-item">
                <span className="practice-log-date">{entry.date}</span>
                <span className="practice-log-tag practice-branch-entry-tag">{entry.tag}</span>
                <span className="practice-log-text">{entry.text}</span>
              </div>
            ))}
          </div>

          <section className="garden-section practice-branch-lower">
            <div className="garden-grid note-section-grid">
              <section className="garden-node note-section-card">
                <h2 className="node-title note-section-title">阶段总结</h2>
                <div className="note-section-copy practice-branch-support" style={{ marginBottom: 0 }}>
                  {stageEntries.map((entry) => (
                    <Link key={entry.href} href={entry.href} className="node-question" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ display: 'block', color: 'var(--structure)', marginBottom: '0.28rem', fontWeight: 600 }}>
                        {entry.title}
                      </span>
                      <span>{entry.body}</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="garden-node note-section-card">
                <h2 className="node-title note-section-title">交叉思考</h2>
                <div className="note-section-copy practice-branch-support" style={{ marginBottom: 0 }}>
                  {crossEntries.map((entry) => (
                    <Link key={entry.href} href={entry.href} className="node-question" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ display: 'block', color: 'var(--structure)', marginBottom: '0.28rem', fontWeight: 600 }}>
                        {entry.title}
                      </span>
                      <span>{entry.body}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </section>

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
