'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavKey = 'archive' | 'run' | 'invest' | 'code';

interface BrandNavProps {
  active: NavKey;
  enableScrollShadow?: boolean;
}

const NAV_LINKS: Array<{ key: NavKey; href: string; label: string }> = [
  { key: 'archive', href: '/brand', label: '归档说明' },
  { key: 'run', href: '/brand/run', label: '跑步体系' },
  { key: 'code', href: '/brand/code', label: '编程日志' },
  { key: 'invest', href: '/brand/invest', label: '投资日志' },
];

export default function BrandNav({ active, enableScrollShadow = false }: BrandNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!enableScrollShadow) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollShadow]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navbarClass = enableScrollShadow
    ? `navbar ${scrolled ? 'navbar-scrolled' : ''}`.trim()
    : 'navbar navbar-scrolled';

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navbarClass}>
      <div className="nav-container">
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M30 50 L50 30 L70 50" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M30 50 Q50 70 70 50" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
            <span>slowroot</span>
            <span style={{ fontSize: '0.62em', opacity: 0.45, letterSpacing: '0.04em' }}>旧版归档区</span>
          </div>
        </Link>
        <button
          className="mobile-menu-toggle"
          aria-label="展开导航"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links">
          <Link href="/" className="nav-link" onClick={closeMenu}>
            返回主站
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`nav-link ${active === link.key ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={`mobile-menu-layer ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-link" onClick={closeMenu}>
          返回主站
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
