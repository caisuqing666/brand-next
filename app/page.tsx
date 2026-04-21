import Link from 'next/link';
import { getRecentNodes, STATUS_LABEL } from '@/lib/garden';

const rootedEntries = [
  { slug: 'presence', title: '临在归位', hint: '先乱的，通常是心' },
  { slug: 'judgment', title: '判断优先', hint: '先偏的，通常是方向' },
  { slug: 'action', title: '执行边界', hint: '先散的，通常是行动' },
  { slug: 'review', title: '复盘沉淀', hint: '先丢的，通常是经验' },
];

function formatDate(iso: string): string {
  if (!iso) return '';
  const [, m, d] = iso.split('-');
  return m && d ? `${m}-${d}` : iso;
}

export default function Home() {
  const recentNodes = getRecentNodes(3);

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

      <section className="home-hero">
        <h1 className="home-hero-title">
          慢慢扎根，
          <br />
          从容生长
        </h1>
        <p className="home-hero-sub">
          普通人的练习场。
          <br />
          有缘人看到，陪一程。
        </p>
      </section>

      <main className="home-shell">
        <section className="home-section">
          <div className="home-section-head">
            <h2 className="seed-section-label">最近在长的</h2>
            <Link href="/garden" className="home-link-quiet">花园全部 →</Link>
          </div>
          <div className="seed-list">
            {recentNodes.length === 0 && (
              <p className="seed-empty">土还没翻。很快会有第一个冒芽。</p>
            )}
            {recentNodes.map((node) => (
              <Link
                key={node.slug}
                href={`/garden/seed/${node.slug}`}
                className="seed-item"
              >
                <div className="seed-item-meta">
                  <span className="seed-item-date">{formatDate(node.updated)}</span>
                  <span className={`seed-status seed-status--${node.status}`}>
                    {STATUS_LABEL[node.status]}
                  </span>
                </div>
                <h3 className="seed-item-title">{node.title}</h3>
                {node.summary && (
                  <p className="seed-item-summary">{node.summary}</p>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section">
          <h2 className="seed-section-label">已长成的几块地</h2>
          <div className="rooted-list">
            {rootedEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/garden/${entry.slug}`}
                className="rooted-item"
              >
                <span className="rooted-item-title">{entry.title}</span>
                <span className="rooted-item-hint">{entry.hint}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="home-about-wrap">
          <Link href="/about" className="home-about-link">关于我 →</Link>
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
