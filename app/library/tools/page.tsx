import Link from 'next/link';

const entries = [
  {
    title: '每天只做三件事',
    body: [
      '事情一多，人很容易产生一种错觉：好像一直在忙，就等于一直在推进。',
      '但很多时候，忙只是不断切换。做了很多，真正完成的却很少。',
      '每天只做三件事，不是为了把生活缩小，而是为了把注意力收回来。让一天真正落到几个可以完成的动作上。',
    ],
    reason: [
      '因为它让我慢慢从“列很多事”，变成“真正做完几件事”。',
      '完成，比堆积更重要。聚焦，比自我感动更重要。',
    ],
  },
  {
    title: '盖洛普优势作为判断入口',
    body: [
      '我越来越觉得，很多消耗，并不是因为不努力，而是因为方向不合适。',
      '优势不是标签，也不是结论。它更像一个入口：帮助我看见自己做事时自然的发力点，也看见自己容易失真的地方。',
      '它不能代替判断，但能让判断更贴近自己。',
    ],
    reason: [
      '因为它帮我减少了很多不必要的模仿。不是反复问“别人怎么做”，而是慢慢回到一个更重要的问题：',
      '这件事，适不适合我。这条路，是不是我能长期走下去的路。',
    ],
  },
  {
    title: '跑步作为长期训练',
    body: [
      '跑步对我来说，从来不只是运动。',
      '它更像一种长期训练：训练节奏，训练耐心，也训练人在枯燥里继续往前的能力。',
      '很多东西，不是想明白的，而是在一天天跑的过程里，慢慢长出来的。你会知道什么叫不要着急，什么叫尊重周期，什么叫真实的积累。',
    ],
    reason: [
      '因为跑步让我一次次确认：真正能留下来的，不是情绪，而是节奏。',
      '它让我更相信长期，也更相信那些看起来慢、但一直没有停下来的东西。',
    ],
  },
  {
    title: '复盘与记录',
    body: [
      '很多感受在脑子里是散的。写下来，事情才会开始变清楚。',
      '记录不是为了留痕，也不是为了把生活包装得更完整。它更像一种整理：把做过的事、走过的弯路、当下的判断，慢慢放回到它们各自的位置上。',
      '有些问题，在想的时候会越来越乱；在写的时候，反而会一点点安静下来。',
    ],
    reason: [
      '因为模糊的东西一旦被写出来，很多问题就不再只是情绪。',
      '记录让我看见自己到底做了什么，为什么会偏，什么值得继续，什么其实可以放下。',
      '它不是重复生活，而是在整理判断。',
    ],
  },
  {
    title: '个人工具的搭建',
    body: [
      '这些年我越来越喜欢自己做工具。不是因为工具本身多厉害，而是因为它会逼着一个想法进入现实。',
      '当一件事真的开始搭建，你就会面对很多真实问题：它到底解决什么问题，谁会用，自己会不会持续用，结构是不是清楚，细节能不能落地。',
      '想法一旦进入现实，判断就开始接受检验。',
    ],
    reason: [
      '因为做工具这件事，让我从“觉得这样应该可以”，走到“它到底能不能真的跑起来”。',
      '这中间的差别很大。前者是想法，后者才是现实。',
    ],
  },
  {
    title: '对信息做减法',
    body: [
      '信息越来越多，并不自动等于更清醒。',
      '很多时候，真正让人混乱的，不是知道得太少，而是接收得太多。看了很多，存了很多，记了很多，却没有真正留下多少能进入生活的东西。',
      '所以我越来越在意减法。不是拒绝信息，而是练习筛选。把那些不会真正帮助判断的部分，慢慢放下。',
    ],
    reason: [
      '因为这些年我越来越确定：判断不是堆出来的，而是筛出来的。',
      '给自己留一点空白，比不断往里加东西，更接近真正的清楚。',
    ],
  },
];

export default function LibraryToolsPage() {
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
              <span>Tools</span>
              <span className="note-eyebrow-sep">/</span>
              <span>工具与方法</span>
            </div>
            <p className="note-kicker">Tools · 工具与方法</p>
            <h1 className="note-title">工具与方法</h1>
            <div className="note-intro">
              <p>不是所有工具都值得留下。</p>
              <p>我更在意的是：它是否让我更清楚，是否真的减轻混乱，是否能陪我长期做事。</p>
              <p>这里放的，不是最新、最多、最热闹的方法。而是我用过之后，愿意继续留下来的那一部分。</p>
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
            <p>我留下这些工具与方法，不是因为它们完美，而是因为它们真的陪我走过一段路。</p>
            <p>它们帮我减少混乱，也帮我把一些模糊的感受，慢慢变成可以落地的生活。</p>
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
