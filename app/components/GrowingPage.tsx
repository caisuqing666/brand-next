import Link from 'next/link';

type NavKey = 'garden' | 'practice' | 'tools' | 'library' | 'about';

interface GrowingPageProps {
  sectionName: string;
  hint: string;
  activeNav?: NavKey;
}

const NAV_LINKS: Array<{ href: string; label: string; key: NavKey }> = [
  { href: '/garden', label: '花园', key: 'garden' },
  { href: '/practice', label: '实践', key: 'practice' },
  { href: '/tools', label: '工具', key: 'tools' },
  { href: '/library', label: '资源', key: 'library' },
  { href: '/about', label: '关于', key: 'about' },
];

const BACK_LINKS: Record<NavKey, { text: string; href: string }> = {
  garden: { text: '回到花园', href: '/garden' },
  practice: { text: '回到实践', href: '/practice' },
  tools: { text: '回到工具', href: '/tools' },
  library: { text: '回到资源', href: '/library' },
  about: { text: '回到关于', href: '/about' },
};

export default function GrowingPage({ sectionName, hint, activeNav }: GrowingPageProps) {
  const back = activeNav ? BACK_LINKS[activeNav] : { text: '回到首页', href: '/' };

  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`nav-link ${activeNav === link.key ? 'active' : ''}`.trim()}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="growing-page">
        <div className="growing-shell">
          <div className="growing-mark" aria-hidden="true">
            <span className="growing-mark-line" />
            <span className="growing-mark-dot" />
          </div>

          <header className="growing-copy">
            <p className="growing-kicker">Growing quietly</p>
            <h1 className="growing-title">这里还没长出来。</h1>
            <div className="growing-body">
              <p>不是遗忘，也不是放弃。</p>
              <p>只是它还在地下，</p>
              <p>还没到该露出来的时候。</p>
            </div>
            <div className="growing-body">
              <p>slowroot 不抢跑。</p>
              <p>有些东西，宁可慢一点，</p>
              <p>也想等它长得更真一点。</p>
            </div>
          </header>

          <section className="growing-context" aria-label="当前位置">
            <p className="growing-context-label">你现在走到的是：</p>
            <p className="growing-context-value">{sectionName}</p>
            <p className="growing-context-hint">{hint}</p>
          </section>

          <Link href={back.href} className="growing-back">
            ← {back.text}
          </Link>
        </div>
      </main>
    </div>
  );
}
