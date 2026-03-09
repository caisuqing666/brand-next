import Link from 'next/link';

const entries = [
  {
    title: '写作与思想来源',
    body: [
      '有些作者、博客或长期写作者，我不会每天都看，但会在某些时候重新回去。',
      '不是因为他们能给出标准答案，而是因为他们提供了一种值得对照的视角。在信息很满的时候，这种视角本身就很珍贵。',
    ],
    reason: [
      '因为有些文字不是读完就结束。它会在不同阶段，一次次给出新的提醒。',
      '留下来的，往往不是最热闹的观点，而是那些能陪人走一段路的东西。',
    ],
  },
  {
    title: '技术文档与官方资料',
    body: [
      '真正遇到问题的时候，最值得回去的，常常不是二手总结，而是一手资料和官方文档。',
      '它们不一定最好读，也不总是最友好。但当信息开始互相矛盾时，回到源头，通常比继续刷更多内容更有用。',
    ],
    reason: [
      '因为信息越多的时候，越需要一个可以校准事实的位置。',
      '它未必轻松，但通常更接近真实。而真实，比省力更重要。',
    ],
  },
  {
    title: '工具产品与工作入口',
    body: [
      '有些链接不是为了看看，而是为了使用。',
      '它们已经进入我的实际工作流，会在写作、整理、搭建、记录和发布的过程中，一次次被打开。链接到了这里，才不只是一个地址，而是行动真正开始的地方。',
    ],
    reason: [
      '因为只有进入实际使用，一个链接才会有重量。',
      '留下来的，不是看起来厉害的产品页，而是那些我真的会回去、也真的会继续使用的入口。',
    ],
  },
  {
    title: '学习与研究参考',
    body: [
      '有些页面不会高频打开。但在某个具体问题出现时，它们会变得很重要。',
      '可能是一门课程，一个项目页，一份研究资料，或者一个长期值得保存的知识入口。它们不是每天都参与生活，却能在关键时候提供更深的支撑。',
    ],
    reason: [
      '因为真正有价值的参考，不一定高频，但会在需要的时候，显出它的分量。',
      '它们让我在遇到问题时，不必总从零开始。',
    ],
  },
  {
    title: '审美与表达参考',
    body: [
      '表达不是只靠输出完成的。它也需要一些长期的参照。',
      '有些页面、作品或内容来源，会让我重新确认：什么样的东西是我愿意靠近的，什么样的气质会让我觉得舒服，什么样的表达方式，更接近我真正想做的样子。',
      '这不是为了模仿。而是为了校准。',
    ],
    reason: [
      '因为审美不是装饰，它会影响判断，也会影响选择。',
      '留下这些入口，是为了在表达开始变乱的时候，还能回到那个让我觉得对的位置。',
    ],
  },
  {
    title: '会反复回来看的地方',
    body: [
      '有些链接很难归类。它不是标准意义上的资料库，也不一定高效、热门、实用。但你知道，自己会一再回去。',
      '它可能安静，朴素，甚至有一点慢。可正因为这样，它在很多时候，反而更能让人重新站稳。',
    ],
    reason: [
      '因为真正留下来的东西，不一定最显眼。但时间会慢慢说明，它为什么一直没有被删掉。',
      '有些地方之所以值得保留，不是因为它功能很多，而是因为它总能把人带回更稳定的位置。',
    ],
  },
];

export default function LibraryLinksPage() {
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
              <span>Links</span>
              <span className="note-eyebrow-sep">/</span>
              <span>链接与入口</span>
            </div>
            <p className="note-kicker">Links · 链接与入口</p>
            <h1 className="note-title">链接与入口</h1>
            <div className="note-intro">
              <p>不是所有链接都值得保存。有些只是当时有用，有些看过一次，就不会再回去。</p>
              <p>我更在意的是：它是否值得反复打开，是否能在需要的时候，稳定地带我回到某个清楚的位置。</p>
              <p>这里留下的，不是最多、最新、最热闹的链接。而是那些经过时间之后，我依然愿意保留的外部入口。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              {entries.map((entry) => (
                <article key={entry.title} className="garden-node note-section-card">
                  <h2 className="node-title note-section-title">{entry.title}</h2>
                  <div className="note-section-copy">
                    {entry.body.map((paragraph) => (
                      <p key={paragraph} className="node-question">{paragraph}</p>
                    ))}
                  </div>
                  <p className="note-section-label">为什么它会留在这里</p>
                  <div className="note-section-copy">
                    {entry.reason.map((paragraph) => (
                      <p key={paragraph} className="node-question">{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="note-closing">
            <p>我留下这些链接，不是为了收藏更多，而是为了在需要的时候，更快回到真正有用的地方。</p>
            <p>链接本身不重要。重要的是，它把我带回哪里。</p>
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
