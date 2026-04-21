import Link from 'next/link';
import { getAllNodes, STATUS_LABEL } from '@/lib/garden';

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

export default function GardenPage() {
  const nodes = getAllNodes();

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
              <p>这里是练习场，不是展览馆。</p>
              <p>冒芽、长着、成立的，都一起放在时间里。</p>
            </div>
          </header>

          <section className="garden-section">
            <div className="seed-list">
              {nodes.length === 0 && (
                <p className="seed-empty">土还没翻。很快会有第一个冒芽。</p>
              )}
              {nodes.map((node) => (
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
                  <h2 className="seed-item-title">{node.title}</h2>
                  {node.summary && (
                    <p className="seed-item-summary">{node.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>

          <section className="garden-section" style={{ marginTop: '3rem' }}>
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
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">slowroot</p>
      </footer>
    </div>
  );
}
