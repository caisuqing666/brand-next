'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './brand.css';

export default function BrandHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="brand-container">
      {/* 导航栏 */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <svg className="logo-icon" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M30 50 L50 30 L70 50" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M30 50 Q50 70 70 50" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span>蔡蔡的小宇宙</span>
          </div>
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
            <Link href="/brand" className="nav-link active">首页</Link>
            <Link href="/brand/psychology" className="nav-link">心理服务</Link>
            <Link href="/brand/growth" className="nav-link">成长之路</Link>
            <Link href="/brand/ai-lab" className="nav-link">AI实验室</Link>
            <Link href="/brand/resources" className="nav-link">资源库</Link>
          </div>
        </div>
        <div className={`mobile-menu-layer ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link href="/brand" className="mobile-link" onClick={closeMenu}>首页</Link>
          <Link href="/brand/psychology" className="mobile-link" onClick={closeMenu}>心理服务</Link>
          <Link href="/brand/growth" className="mobile-link" onClick={closeMenu}>成长之路</Link>
          <Link href="/brand/ai-lab" className="mobile-link" onClick={closeMenu}>AI实验室</Link>
          <Link href="/brand/resources" className="mobile-link" onClick={closeMenu}>资源库</Link>
        </div>
      </nav>

      {/* 首页背景动画 */}
      <div className="home-background">
        <svg className="background-svg" viewBox="0 0 1200 800">
          {/* 跑道线条 */}
          <g className="track-lines">
            <path d="M0 200 Q300 150 600 200 T1200 200" stroke="rgba(156, 133, 119, 0.2)" strokeWidth="2" fill="none"/>
            <path d="M0 300 Q300 250 600 300 T1200 300" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="2" fill="none"/>
            <path d="M0 400 Q300 350 600 400 T1200 400" stroke="rgba(156, 133, 119, 0.2)" strokeWidth="2" fill="none"/>
            <path d="M0 500 Q300 450 600 500 T1200 500" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="2" fill="none"/>
          </g>
          {/* 神经网络节点 */}
          <g className="neural-network">
            <circle cx="200" cy="200" r="4" fill="rgba(156, 133, 119, 0.25)"/>
            <circle cx="400" cy="250" r="4" fill="rgba(156, 133, 119, 0.25)"/>
            <circle cx="600" cy="200" r="4" fill="rgba(156, 133, 119, 0.25)"/>
            <circle cx="800" cy="300" r="4" fill="rgba(156, 133, 119, 0.25)"/>
            <circle cx="1000" cy="250" r="4" fill="rgba(156, 133, 119, 0.25)"/>
            <line x1="200" y1="200" x2="400" y2="250" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="1"/>
            <line x1="400" y1="250" x2="600" y2="200" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="1"/>
            <line x1="600" y1="200" x2="800" y2="300" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="1"/>
            <line x1="800" y1="300" x2="1000" y2="250" stroke="rgba(156, 133, 119, 0.15)" strokeWidth="1"/>
          </g>
        </svg>
      </div>

      {/* 主内容区 */}
      <main className="home-main">
        <section className="hero-section brand-hero">
          <h1 className="hero-title">
            你好，我是蔡蔡。
            <span className="hero-subtitle">
              一个用跑步、写作和技术，慢慢长成自己的人。
            </span>
          </h1>
          <p className="hero-lede">
            在这个小小宇宙里，我用脚步走路，用文字记录，用代码搭建房子。<br />
            不追求完美，只追求真实、温柔、长期主义。
          </p>
          <div className="hero-pill-row">
            <span className="pill">洞察与温柔的行动者</span>
            <span className="pill">跑步 10,000+ 公里</span>
            <span className="pill">46 岁写下第一行代码</span>
          </div>
        </section>

        {/* 我的关键词 */}
        <section className="section-shell keywords-section">
          <div className="section-header">
            <p className="eyebrow">🧩 我的关键词</p>
            <h2 className="section-title">洞察、行动、学习、创作、陪伴</h2>
          </div>
          <div className="keyword-grid">
            <div className="keyword-card">
              <div className="card-icon">🧠</div>
              <div>
                <h3 className="card-title">INFJ · 洞察与行动</h3>
                <p className="card-content">用理解和共情去看见别人，也看见自己。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">🏃🏻‍♀️</div>
              <div>
                <h3 className="card-title">跑步 10,000+ 公里</h3>
                <p className="card-content">完成过上海马拉松，从零开始，把坚持变成日常。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">💻</div>
              <div>
                <h3 className="card-title">46 岁开始学编程</h3>
                <p className="card-content">不是为了转行，而是为了不放弃自己，用技术做自己的产品。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">📚</div>
              <div>
                <h3 className="card-title">学习型人格</h3>
                <p className="card-content">盖洛普前五：思维 / 学习 / 分析 / 搜集 / 完美主义版「精进派」。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">💬</div>
              <div>
                <h3 className="card-title">心理学与自我探索爱好者</h3>
                <p className="card-content">关注压力、情绪、人格与人生选择，长期学习心理相关内容。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">🌙</div>
              <div>
                <h3 className="card-title">女性长期主义陪伴者</h3>
                <p className="card-content">想用自己的经验，让更多中年女性被看见、被接住。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 我的故事 · 时间线 */}
        <section className="section-shell timeline-section">
          <div className="section-header">
            <p className="eyebrow">🌾 我的故事（短版时间线）</p>
            <h2 className="section-title">每一年，都在慢慢长成自己</h2>
          </div>
          <div className="timeline-stack">
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2020 年 · 跑步拯救了我</div>
                <p className="timeline-content">
                  口罩年，不间断训练，完成人生第一个全程马拉松。42.195 公里的每一步，都在提醒我：再普通的人，也可以通过坚持改变自己。
                </p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2018～2025 · 持续奔跑</div>
                <p className="timeline-content">
                  在光阴与城市之间来回穿梭。我学会了在不确定中找到节奏，也学会了在疲惫里照顾自己。
                </p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2018～2023 · 回望内心</div>
                <p className="timeline-content">
                  系统学习心理学、MBTI 和盖洛普优势，从“理解别人为什么这么做”，到“理解自己为什么这么选”。
                </p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2025 年 · 第一次写代码</div>
                <p className="timeline-content">
                  46 岁打开编辑器，写下人生第一个 console.log('Hello')。那一刻我意识到：人生的好多“不可能”，只是我们太早放弃。
                </p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card highlight">
                <div className="timeline-year">此刻 · 搭建我的数字宇宙</div>
                <p className="timeline-content">
                  把跑步、心理探索、AI 学习、个人品牌融合起来，做成这个网站。这里既是作品集，也是实验室，更是我和很多人一起慢慢长大的地方。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 我正在做的事 */}
        <section className="section-shell focus-section">
          <div className="section-header">
            <p className="eyebrow">💫 我正在做的事</p>
            <h2 className="section-title">写作、实验、陪伴，都是温柔的力量</h2>
          </div>
          <div className="focus-grid">
            <div className="dynamic-card focus-card">
              <div className="card-icon">①</div>
              <h3 className="card-title">心理支持与情绪陪伴</h3>
              <ul className="focus-list">
                <li>关注中年女性的压力、情绪和自我价值感</li>
                <li>通过文字、工具和课程，帮你多一点自我理解、少一点自我苛责</li>
                <li>希望未来能提供更系统的心理支持服务</li>
              </ul>
            </div>
            <div className="dynamic-card focus-card">
              <div className="card-icon">②</div>
              <h3 className="card-title">跑步 × 成长记录体系</h3>
              <ul className="focus-list">
                <li>用跑步，把“坚持”这件事拆成一公里一公里</li>
                <li>把训练、情绪、生活状态记录下来，变成可回看的成长轨迹</li>
                <li>正在打造属于自己的跑步日记系统和成长工具</li>
              </ul>
            </div>
            <div className="dynamic-card focus-card">
              <div className="card-icon">③</div>
              <h3 className="card-title">AI 实验室与个人产品</h3>
              <ul className="focus-list">
                <li>学习 Python、NLP、全栈开发，把技术用在真实的问题上</li>
                <li>做情绪追踪、习惯养成、目标拆解等小工具</li>
                <li>这个网站，就是我「从 0 到 1」的第一个正式产品</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 我相信的事 */}
        <section className="section-shell belief-section">
          <div className="section-header">
            <p className="eyebrow">🌙 我相信的事</p>
            <h2 className="section-title">温柔又坚定的成长信念</h2>
          </div>
          <div className="belief-list">
            <div className="belief-item">成长不等于变得强硬，而是变得温柔又有边界。</div>
            <div className="belief-item">行动不需要完美准备，80 分的持续，比 100 分的一次性更重要。</div>
            <div className="belief-item">跑步、写作、学习技术，都是在练习同一件事：不放弃自己。</div>
            <div className="belief-item">中年不是结束，而是一个更诚实地过人生的新起点。</div>
          </div>
        </section>

        {/* 结尾 */}
        <section className="section-shell closing-section">
          <div className="closing-card">
            <p className="eyebrow">💌 想对你说的一句话</p>
            <h3>如果你也在中年的生活里感到疲惫、迷茫、却又不甘心，欢迎来这里坐坐。</h3>
            <p className="card-content">
              你不需要马上变好，只需要先被好好看见。我们可以一起走一段路，慢慢找到自己的节奏。
            </p>
            <div className="closing-actions">
              <Link href="/brand/growth" className="closing-btn primary">了解我的成长故事</Link>
              <Link href="/brand/ai-lab" className="closing-btn ghost">去看看我的 AI 实验室</Link>
            </div>
          </div>
        </section>
      </main>

      {/* 悬浮预约按钮 */}
      <Link href="/brand/psychology#consultation-form" className="floating-booking-btn">
        <span>想聊聊吗？</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}
