import Link from 'next/link';

const recentNotes = [
  {
    slug: 'barbell-and-zhongyong',
    date: '02-28',
    title: '我用了十年，才明白这两句话说的是同一件事',
  },
  {
    slug: 'system-processing',
    date: '02-25',
    title: '不是情绪处理，是系统处理',
  },
  {
    slug: 'living-with-problems',
    date: '02-15',
    title: '带着问题继续走，本身就是能力',
  },
];

const gardenNodes = [
  {
    title: '临在归位',
    slug: 'presence',
    question: '如何在判断之前，先把自己放回当下？',
    hint: '先乱的，通常是心',
  },
  {
    title: '判断优先',
    slug: 'judgment',
    question: '如何在复杂中做出清晰判断？',
    hint: '先偏的，通常是方向',
  },
  {
    title: '执行边界',
    slug: 'action',
    question: '如何把判断转成可执行、可完成的动作？',
    hint: '先散的，通常是行动',
  },
  {
    title: '复盘沉淀',
    slug: 'review',
    question: '如何让经验变成可复用的资产？',
    hint: '先丢的，通常是经验',
  },
];

export default function GardenPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link active">花园</Link>
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
              <span>Garden</span>
              <span className="note-eyebrow-sep">/</span>
              <span>花园</span>
            </div>
            <p className="note-kicker">Garden · 花园</p>
            <h1 className="note-title">花园</h1>
            <div className="note-intro">
              <p>这里不是为了更快得出答案，而是为了回到一个还能继续生长的位置。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="garden-grid note-section-grid">
              {gardenNodes.map((node) => (
                <Link
                  key={node.slug}
                  href={`/garden/${node.slug}`}
                  className="garden-node note-section-card"
                >
                  <h2 className="node-title note-section-title">{node.title}</h2>
                  <p className="node-question">{node.question}</p>
                  <p className="note-section-label">{node.hint}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="garden-section" style={{ marginTop: '2.35rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
              <h2 className="section-label" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--structure-muted)', opacity: 0.75 }}>最近笔记</h2>
              <Link href="/garden/notes" style={{ fontSize: '0.82rem', color: 'var(--accent-on-light)', textDecoration: 'none' }}>全部 →</Link>
            </div>
            <div className="notes-list">
              {recentNotes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/garden/notes/${note.slug}`}
                  className="notes-item"
                >
                  <span className="notes-item-date">{note.date}</span>
                  <span className="notes-item-right">
                    <span className="notes-item-title">{note.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">slowroot</p>
      </footer>
    </div>
  );
}
