import Link from 'next/link';

const branches = [
  {
    title: 'Running · 跑步',
    href: '/practice/running',
    body: [
      '跑步对我来说，从来不只是运动。',
      '它更像一种长期练习：练习节奏，练习耐心，也练习在看起来没有太多变化的时候，仍然愿意继续往前。',
      '很多关于周期、恢复、积累和分寸的理解，不是一下子明白的。而是在一公里一公里里，慢慢长出来的。',
    ],
    kept: '留下的是：节奏',
    summary: [
      '不是一时冲得多快，而是如何在长期里不乱，如何在起伏里仍然保持自己的步频。',
    ],
  },
  {
    title: 'Coding · 编程',
    href: '/practice/coding',
    body: [
      '编程对我来说，也不只是学习一种技能。',
      '它更像把想法放进现实的过程。你以为自己已经想清楚了，真正开始搭的时候，才会知道哪里还是模糊的；你以为一个判断是对的，真正跑起来，才知道它能不能成立。',
      '它会不断逼人面对具体、面对问题、面对反馈。很多东西不是靠理解完成的，而是在一次次搭建、报错、修正和重来里，慢慢变得扎实。',
    ],
    kept: '留下的是：结构',
    summary: [
      '不是知道得更多，而是能不能把一件事搭起来、理顺、跑通，让它在现实里真正站住。',
    ],
  },
  {
    title: 'Investing · 投资',
    href: '/practice/investing',
    body: [
      '投资对我来说，也不只是关于收益。',
      '它更像一种长期判断训练：你如何面对不确定，如何分配风险，如何在波动里不被情绪带走，也如何承认边界、尊重边界。',
      '市场会不断制造诱惑，也不断放大恐惧。所以真正重要的，往往不是一次判断是否漂亮，而是你有没有一套能长期承受现实的方式。',
    ],
    kept: '留下的是：边界',
    summary: [
      '不是永远押对，而是知道什么属于自己，什么不属于自己；知道什么时候该进，什么时候该停，什么时候应该把自己留在场上。',
    ],
  },
];

const supplementalSections = [
  {
    title: '交叉文章',
    body: [
      '不是把不同主题并排放在一起，而是去看：节奏、结构与边界，在不同领域里如何彼此照见。跑步会影响我理解投资，投资会影响我理解风险，编程会影响我理解现实与反馈。这些交叉，也是 Practice 的一部分。',
    ],
    items: [
      {
        href: '/practice/rhythm-structure-risk',
        title: '节奏、结构、风险',
        body: '为什么我在跑步、编程和投资里，看到的是同一件事。',
      },
      {
        href: '/practice/repetition-feedback-compounding',
        title: '重复、反馈、复利',
        body: '为什么真正有用的成长，往往都不靠爆发。',
      },
    ],
  },
  {
    title: '阶段复盘',
    body: [
      '有些东西只有拉开一段时间，才能真正看清。阶段复盘不是总结完成了什么，而是重新校准：哪些判断真的成立，哪些只是当时感觉对，哪些需要继续修正。',
    ],
    items: [
      {
        href: '/practice/from-sections-to-trunk',
        title: '从栏目到主干',
        body: 'Practice 是怎样慢慢长出来的。',
      },
    ],
  },
];

export default function PracticePage() {
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
              <span>Practice</span>
              <span className="note-eyebrow-sep">/</span>
              <span>练习与验证</span>
            </div>
            <p className="note-kicker">Practice · 练习与验证</p>
            <h1 className="note-title">练习与验证</h1>
            <div className="note-intro">
              <p>很多东西不是想明白的，而是在反复练习、反复修正里，慢慢长出来的。</p>
              <p>我更在意的，不是说过什么，也不是计划过什么，而是哪些东西在现实里真的站住了，哪些判断经过时间、反馈和波动之后，仍然成立。</p>
              <p>这里留下的，不是设想，而是那些在现实里被反复检验过、仍然成立的东西。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              {branches.map((branch) => (
                <Link key={branch.href} href={branch.href} className="garden-node note-section-card">
                  <h2 className="node-title note-section-title">{branch.title}</h2>
                  <div className="note-section-copy">
                    {branch.body.map((paragraph) => (
                      <p key={paragraph} className="node-question">{paragraph}</p>
                    ))}
                  </div>
                  <p className="note-section-label">{branch.kept}</p>
                  <div className="note-section-copy">
                    {branch.summary.map((paragraph) => (
                      <p key={paragraph} className="node-question">{paragraph}</p>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="garden-section" style={{ marginTop: '2.35rem' }}>
            <div className="note-intro" style={{ maxWidth: '36rem', marginBottom: '1.35rem' }}>
              <p>除了这三条主线，这里也会保留两类横向验证。</p>
            </div>
            <div className="garden-grid note-section-grid">
              {supplementalSections.map((section) => (
                <section key={section.title} className="garden-node note-section-card">
                  <h2 className="node-title note-section-title">{section.title}</h2>
                  <div className="note-section-copy">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="node-question">{paragraph}</p>
                    ))}
                  </div>
                  <div className="note-section-copy" style={{ marginBottom: 0 }}>
                    {section.items.map((item) => (
                      <Link key={item.href} href={item.href} className="node-question" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span style={{ display: 'block', color: 'var(--structure)', marginBottom: '0.28rem', fontWeight: 600 }}>
                          {item.title}
                        </span>
                        <span>{item.body}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <div className="note-closing">
            <p>对我来说，练习不是为了证明自己。它更像一种持续校准：</p>
            <p>把想法放进现实，把现实再带回判断。</p>
            <p>最后能留下来的，往往不是最热烈、最用力的那部分，而是那些经过时间之后，仍然成立的东西。</p>
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
