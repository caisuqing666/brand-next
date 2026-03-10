import Link from 'next/link';

const entries = [
  {
    slug: 'openclaw-setup',
    date: '2026-03-01',
    dateDisplay: '03-01',
    title: '从报错到自治：OpenClaw 系统构建实录',
    excerpt: '三天，六类报错，一条跑通的链路。记录从安装到飞书连通的全过程，以及背后的系统思路。',
    tag: '部署实录',
  },
  {
    slug: 'first-idea-runs',
    date: '2025-12-12',
    dateDisplay: '25-12-12',
    title: '当我第一次把想法运行起来',
    excerpt: '理解，并不等同于改变。那一刻我知道：有什么东西，被放到了现实这一侧。',
    tag: '项目复盘',
  },
  {
    slug: 'from-learning-to-running',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '从“学会”到“跑通”',
    excerpt: '这一阶段，编程真正教会我的不是技术，而是结构。',
    tag: '阶段总结',
  },
  {
    slug: 'rhythm-structure-risk',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '节奏、结构、风险',
    excerpt: '跑步、编程、投资看起来分散，但底层都在训练同一种面对现实的诚实。',
    tag: '与其他实践的关联文章',
  },
  {
    slug: 'repetition-feedback-compounding',
    date: '2026-03-08',
    dateDisplay: '03-08',
    title: '重复、反馈、复利',
    excerpt: '真正留下来的能力，不是一次懂了，而是在反复报错、修正和反馈里慢慢长出来。',
    tag: '与其他实践的关联文章',
  },
];

const nextEntries = [
  { title: '学习记录', body: '记录从不会到能用的真实过程，而不是把学习写成结果陈列。' },
  { title: '部署实录', body: '保留从本地调试到上线部署的完整链路和踩坑路径。' },
  { title: '项目复盘', body: '每做完一个能运行的东西，就把真正留下来的判断写下来。' },
  { title: '工具搭建过程', body: '把工具从抽象想法变成现实系统的过程继续沉淀出来。' },
  { title: '与 running / investing / writing 的交叉思考', body: '继续记录编程如何反过来影响节奏、判断、复盘和表达。' },
];

export default function CodingPage() {
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
              <span>Coding</span>
              <span className="note-eyebrow-sep">/</span>
              <span>编程</span>
            </div>
            <p className="note-kicker">Coding · 编程</p>
            <h1 className="note-title">编程</h1>
            <div className="note-intro">
              <p>编程对我来说，也不只是学习一种技能。</p>
              <p>它更像把想法放进现实的过程。你以为自己已经想清楚了，真正开始搭的时候，才会知道哪里还是模糊的；你以为一个判断是对的，真正跑起来，才知道它能不能成立。</p>
              <p>很多东西不是靠理解完成的，而是在一次次搭建、报错、修正和重来里，慢慢变得扎实。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">编程是一条怎样的练习线</h2>
                <div className="note-section-copy">
                  <p className="node-question">它不是“我在学技术”的展示页，也不是技能清单。</p>
                  <p className="node-question">对我来说，编程首先是一条长期实践线，也是一种把结构写进现实的训练。</p>
                  <p className="node-question">很多原本只停留在脑中的想法，只有在代码里、系统里、部署里，才会真正接受现实检验。</p>
                </div>
              </article>

              <article className="garden-node note-section-card">
                <h2 className="node-title note-section-title">它怎样进入现实</h2>
                <div className="note-section-copy">
                  <p className="node-question">这条线不是从“我本来就会”开始，而是从完全不会开始，一步步走到能部署、能调试、能上线项目。</p>
                  <p className="node-question">Next.js、Vercel、Supabase、OpenClaw、Remotion，这些名字对我来说不是技术名词堆砌，而是一串串真实走过的节点。</p>
                  <p className="node-question">真正重要的不是会了多少，而是能不能把一件事真的搭起来、理顺、跑起来。</p>
                </div>
                <p className="note-section-label">留下的是：结构</p>
                <div className="note-section-copy" style={{ marginBottom: 0 }}>
                  <p className="node-question">不是知道得更多，而是能不能把一件事搭起来、理顺、跑通，让它在现实里真正站住。</p>
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

          <nav className="notes-list practice-branch-entry-list" aria-label="编程记录列表">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/practice/coding/${entry.slug}`}
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
