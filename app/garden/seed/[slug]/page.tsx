import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllNodes, getNode, STATUS_LABEL } from '@/lib/garden';

export function generateStaticParams() {
  return getAllNodes().map((node) => ({ slug: node.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const node = getNode(slug);
  if (!node) return {};
  return {
    title: `${node.title} · slowroot 花园`,
    description: node.summary,
  };
}

export default async function SeedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const node = getNode(slug);
  if (!node) notFound();

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
        <article className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>Garden</span>
              <span className="note-eyebrow-sep">/</span>
              <span>{STATUS_LABEL[node.status]}</span>
            </div>
            <p className="note-kicker">
              {node.updated} · <span className={`seed-status seed-status--${node.status}`}>
                {STATUS_LABEL[node.status]}
              </span>
            </p>
            <h1 className="note-title">{node.title}</h1>
          </header>

          <div className="note-body">
            <MDXRemote source={node.content} />
          </div>

          <div className="note-back-wrap">
            <Link href="/garden" className="note-back">
              ← 回到花园
            </Link>
          </div>
        </article>
      </main>

      <footer className="footer">
        <p className="footer-text">slowroot</p>
      </footer>
    </div>
  );
}
