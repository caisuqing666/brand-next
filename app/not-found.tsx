'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const growingConfig = [
  {
    prefix: '/garden',
    label: '花园',
    hint: '这个节点在地图上有位置了，只是土壤还在准备中。',
    back: { text: '回到花园', href: '/garden' },
  },
  {
    prefix: '/practice',
    label: '实践',
    hint: '这个记录还在路上，等它有了形状，再放出来。',
    back: { text: '回到实践', href: '/practice' },
  },
  {
    prefix: '/tools',
    label: '工具',
    hint: '这个工具还在形成中，还没到可以稳定运行的时候。',
    back: { text: '回到工具', href: '/tools' },
  },
  {
    prefix: '/about',
    label: '关于',
    hint: '这部分还在想，想清楚了再放出来。',
    back: { text: '回到关于', href: '/about' },
  },
  {
    prefix: '/library',
    label: '资源',
    hint: '这部分还在整理中，等整理好了再放出来。',
    back: { text: '回到资源', href: '/library' },
  },
];

const defaultConfig = {
  label: null as string | null,
  hint: '这里还没长出来。',
  back: { text: '回到首页', href: '/' },
};

const NAV_LINKS = [
  { href: '/garden', label: '花园' },
  { href: '/practice', label: '实践' },
  { href: '/tools', label: '工具' },
  { href: '/library', label: '资源' },
  { href: '/about', label: '关于' },
];

export default function NotFound() {
  const pathname = usePathname();
  const match = growingConfig.find((c) => pathname.startsWith(c.prefix)) ?? defaultConfig;

  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
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
            {match.label && (
              <p className="growing-kicker">{match.label}</p>
            )}
            <h1 className="growing-title">还在生长中</h1>
            <div className="growing-body">
              <p>这个位置在 slowroot 的地图里已经有了。</p>
              <p>只是它还没长出来。</p>
            </div>
          </header>

          <section className="growing-context" aria-label="当前位置">
            <p className="growing-context-hint">{match.hint}</p>
          </section>

          <Link href={match.back.href} className="growing-back">
            ← {match.back.text}
          </Link>
        </div>
      </main>
    </div>
  );
}
