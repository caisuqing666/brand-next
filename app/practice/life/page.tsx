import Link from 'next/link';

const entries = [
  {
    slug: 'steady-one-thing',
    date: '2026-01-13',
    dateDisplay: '01-13',
    title: '把一件事做稳',
    excerpt: '成熟不是"什么都做到最好"，而是清楚系统允许在哪里失败。',
  },
  {
    slug: 'no-more-questions',
    date: '2025-12-31',
    dateDisplay: '12-31',
    title: '这一年，有些事我已经不再追问',
    excerpt: '它没有让我翻盘，但让我站得更稳。到这里，已经很好了。',
  },
  {
    slug: 'warm-heart-steady-hands',
    date: '2025-12-24',
    dateDisplay: '12-24',
    title: '心是热的，手是稳的',
    excerpt: '不再迷恋宏大的目标，更在意——这件事，是不是能让我明天更顺一点。',
  },
  {
    slug: 'just-be-happy',
    date: '2021-12-03',
    dateDisplay: '21-12-03',
    title: '那就快乐',
    excerpt: '播下种子，打造自己的花园。以平常心重复相同的日子——终有一天，会迎来时间之花的绽放。',
  },
];

export default function LifePage() {
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

      <main className="notes-page">
        <div className="notes-shell">
          <header className="notes-head">
            <p className="notes-eyebrow">实践 / 生活</p>
            <h1 className="notes-page-title">生活</h1>
            <p className="notes-page-subtitle">
              还热的、刚发生的。<br />
              日常里的小触动，以及它们带出来的想法。
            </p>
          </header>

          <nav className="notes-list" aria-label="生活记录列表">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/practice/life/${entry.slug}`}
                className="notes-item"
              >
                <span className="notes-item-date">{entry.dateDisplay}</span>
                <span className="notes-item-right">
                  <span className="notes-item-title">{entry.title}</span>
                  <span className="notes-item-excerpt">{entry.excerpt}</span>
                </span>
              </Link>
            ))}
          </nav>
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
