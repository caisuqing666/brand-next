import Link from 'next/link';

type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type GardenThemePageProps = {
  title: string;
  subtitle: string;
  intro: string;
  position: string;
  toolLabel: string;
  tool: {
    title: string;
    description: string;
    href: string;
  };
  relatedLabel: string;
  relatedLinks: RelatedLink[];
};

export default function GardenThemePage({
  title,
  subtitle,
  intro,
  position,
  toolLabel,
  tool,
  relatedLabel,
  relatedLinks,
}: GardenThemePageProps) {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link active">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </header>

        <section className="garden-section">
          <div className="garden-grid" style={{ gridTemplateColumns: '1fr' }}>
            <article className="garden-node">
              <p className="node-question" style={{ marginBottom: '0.75rem' }}>{intro}</p>
              <p className="node-question">{position}</p>
            </article>
          </div>
        </section>

        <section className="garden-section">
          <div className="garden-header">
            <span className="evidence-eyebrow">{toolLabel}</span>
          </div>
          <div className="garden-grid" style={{ gridTemplateColumns: '1fr' }}>
            <Link href={tool.href} className="garden-node">
              <h3 className="node-title">{tool.title}</h3>
              <p className="node-question">{tool.description}</p>
            </Link>
          </div>
        </section>

        <section className="garden-section">
          <div className="garden-header">
            <span className="evidence-eyebrow">{relatedLabel}</span>
          </div>
          <div className="garden-grid">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="garden-node">
                <h3 className="node-title">{link.title}</h3>
                <p className="node-question">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
