import Link from 'next/link';

const branches = [
  {
    title: 'Reading / 书与文章',
    slug: 'reading',
    intro: [
      '这里放的是我读过之后，愿意继续留下来的书与文章。',
      '不是所有读过的内容都值得保留。真正留下来的，通常不是最热闹的，而是那些会在不同阶段，反复带来提醒和支撑的东西。',
    ],
    kept: '它留下的是：内容。',
    summary: '那些值得一读再读的文字与思想。',
  },
  {
    title: 'Tools / 工具与方法',
    slug: 'tools',
    intro: [
      '这里放的是我实践过之后，愿意继续留下来的工具与方法。',
      '它们不一定最新，也不一定最复杂。但它们真的减少过混乱，帮助我做事，也帮助我把一些模糊的感受，慢慢变成可以落地的生活。',
    ],
    kept: '它留下的是：方法。',
    summary: '那些真正进入日常、经得起重复使用的路径。',
  },
  {
    title: 'Links / 链接与入口',
    slug: 'links',
    intro: [
      '这里放的是我愿意长期保留的外部入口。',
      '不是所有链接都值得保存。真正会留下来的，通常不是一时有用的地址，而是那些在需要的时候，能稳定把我带回源头、工具、参考和判断的位置。',
    ],
    kept: '它留下的是：入口。',
    summary: '那些值得反复返回的外部连接点。',
  },
];

export default function LibraryPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>Library</span>
              <span className="note-eyebrow-sep">/</span>
              <span>资源</span>
            </div>
            <p className="note-kicker">Library · 资源</p>
            <h1 className="note-title">资源</h1>
            <div className="note-intro">
              <p>我留下这些，不是为了收藏更多。而是因为在一次次使用、阅读、返回之后，它们仍然没有被删掉。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              {branches.map((branch) => (
                <Link key={branch.slug} href={`/library/${branch.slug}`} className="garden-node note-section-card">
                  <h2 className="node-title note-section-title">{branch.title}</h2>
                  <p className="node-question">{branch.intro[0]}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="note-closing">
            <p>对我来说，资源不是越多越好。</p>
            <p>真正有价值的，往往不是新增了什么，而是经过时间之后，还有什么留了下来。</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">slowroot</p>
      </footer>
    </div>
  );
}
