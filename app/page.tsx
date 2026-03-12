import Link from 'next/link';

export default function Home() {
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

      <section className="hero">
        <h1 className="hero-title">
          慢下来的人，
          <br />
          也在生长。
        </h1>
        <div className="hero-meta">
          <p className="hero-brand">slowroot</p>
          <p className="hero-note">
            我后来越来越在意的，
            <br />
            不是怎样做得更多，
            <br />
            而是怎样先不把自己带偏。
            <br />
            先回来，先站稳，
            <br />
            再让真正成立的东西，慢慢长进生活里。
          </p>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-header">
          <span className="journey-eyebrow">判断顺序</span>
          <div className="section-copy" style={{ maxWidth: '34rem', margin: '1rem auto 0', textAlign: 'center' }}>
            <p>后来我慢慢发现，很多东西不能跳着来。</p>
            <p>顺序一乱，人就很容易又回到原来的惯性里。</p>
            <p>不是信息不够，而是人在判断之前，已经不在自己这里了。</p>
            <p>先回来。再站稳。然后才谈判断、行动和生长。</p>
          </div>
        </div>

        <div className="journey-ellipse">
          <div className="journey-center">
            <p className="journey-center-text">
              先回来，
              <br />
              先站稳，
              <br />
              再长进现实。
            </p>
          </div>

          <svg
            className="journey-orbit"
            viewBox="0 0 900 560"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <ellipse
              className="journey-orbit-base"
              cx="450"
              cy="280"
              rx="338"
              ry="176"
              fill="none"
            />
            <path
              className="journey-orbit-inner"
              d="M 438 105 C 560 110 662 160 714 246 C 728 270 733 294 726 323"
              fill="none"
            />
            <path
              className="journey-orbit-outer"
              d="M 724 325 C 688 416 565 474 392 474 C 254 474 150 420 118 332 C 93 263 118 180 196 128 C 244 98 305 86 374 90"
              fill="none"
            />
          </svg>

          <div className="journey-node journey-node--top journey-node--inner-start">
            <div className="node-number">01</div>
            <h3 className="node-title">临在</h3>
            <p className="node-question">乱的时候，怎么先回到自己？</p>
            <Link href="/tools/presence" className="node-link">
              进入临在之锚 →
            </Link>
          </div>

          <div className="journey-node journey-node--top-right journey-node--inner-guide">
            <div className="node-number">02</div>
            <h3 className="node-title">判断</h3>
            <p className="node-question">站稳以后，怎么判断方向？</p>
            <Link href="/garden/judgment" className="node-link">
              进入判断之锚 →
            </Link>
          </div>

          <div className="journey-node journey-node--bottom-right journey-node--hinge">
            <div className="node-number">03</div>
            <h3 className="node-title">执行</h3>
            <p className="node-question">知道方向后，今天先做哪一步？</p>
            <Link href="/tools/endofday" className="node-link">
              进入执行之锚 →
            </Link>
          </div>

          <div className="journey-node journey-node--bottom-left journey-node--outer-ground">
            <div className="node-number">04</div>
            <h3 className="node-title">结构</h3>
            <p className="node-question">经历过的事，怎么安放成结构？</p>
            <a href="#evidence" className="node-link">看它们怎样在现实里安放下来 →</a>
          </div>

          <div className="journey-node journey-node--top-left journey-node--outer-grow">
            <div className="node-number">05</div>
            <h3 className="node-title">生长</h3>
            <p className="node-question">结构稳定以后，会长成什么？</p>
            <a href="#evidence" className="node-link">看这些判断如何慢慢长进现实 →</a>
          </div>
        </div>

        <div className="journey-mobile">
          <div className="mobile-node mobile-node--inner-start">
            <div className="mobile-header">
              <span className="mobile-number">01</span>
              <h3 className="mobile-title">临在</h3>
            </div>
            <p className="mobile-question">乱的时候，怎么先回到自己？</p>
            <Link href="/tools/presence" className="mobile-link">
              进入临在之锚 →
            </Link>
          </div>

          <div className="mobile-node mobile-node--inner-guide">
            <div className="mobile-header">
              <span className="mobile-number">02</span>
              <h3 className="mobile-title">判断</h3>
            </div>
            <p className="mobile-question">站稳以后，怎么判断方向？</p>
            <Link href="/garden/judgment" className="mobile-link">
              进入判断之锚 →
            </Link>
          </div>

          <div className="mobile-node mobile-node--hinge">
            <div className="mobile-header">
              <span className="mobile-number">03</span>
              <h3 className="mobile-title">执行</h3>
            </div>
            <p className="mobile-question">知道方向后，今天先做哪一步？</p>
            <Link href="/tools/endofday" className="mobile-link">
              进入执行之锚 →
            </Link>
          </div>

          <div className="mobile-node mobile-node--outer-ground">
            <div className="mobile-header">
              <span className="mobile-number">04</span>
              <h3 className="mobile-title">结构</h3>
            </div>
            <p className="mobile-question">经历过的事，怎么安放成结构？</p>
            <a href="#evidence" className="mobile-link">看它们怎样在现实里安放下来 →</a>
          </div>

          <div className="mobile-node mobile-node--outer-grow">
            <div className="mobile-header">
              <span className="mobile-number">05</span>
              <h3 className="mobile-title">生长</h3>
            </div>
            <p className="mobile-question">结构稳定以后，会长成什么？</p>
            <a href="#evidence" className="mobile-link">看这些判断如何慢慢长进现实 →</a>
          </div>
        </div>
      </section>

      <section id="evidence" className="rooted-section">
        <div className="section-shell">
          <div className="section-kicker">
            <span className="section-number">03</span>
            <span className="section-name">现实证据</span>
          </div>

          <header className="section-intro">
            <h2 className="section-title">现实证据</h2>
            <div className="section-copy">
              <p>判断落地之后，它需要在现实里有一个可以反复回来的入口。</p>
              <p>不是所有东西，都会先长成作品。</p>
              <p>先长出来的，也可能只是一个入口。</p>
            </div>
          </header>

          <section className="proof-group">
            <div className="group-head">
              <span className="evidence-eyebrow">现实接口</span>
              <h3 className="group-title">已经长出来的入口</h3>
              <p className="group-copy">
                有些判断，如果只停留在理解里，很快又会散掉。
                它需要在现实里有一个反复回来的入口。
              </p>
            </div>

            <div className="proof-grid">
              <article className="proof-card">
                <div className="proof-topline">
                  <h4 className="proof-title">Gallup Tool</h4>
                  <span className="proof-tag">Since 2025 · 持续迭代中</span>
                </div>
                <p className="proof-summary">让优势不再停留在报告里，而进入具体判断。</p>
                <a href="https://gallup-tool.com" className="proof-link" target="_blank" rel="noopener noreferrer">
                  去看看它现在长成了什么
                </a>
              </article>

              <article className="proof-card">
                <div className="proof-topline">
                  <h4 className="proof-title">临在之锚</h4>
                  <span className="proof-tag">v0.6 · 从日常里长出来</span>
                </div>
                <p className="proof-summary">在混乱之前，先回到自己。</p>
                <a href="https://metafield.cc" className="proof-link" target="_blank" rel="noopener noreferrer">
                  从这里停一下
                </a>
              </article>

              <article className="proof-card">
                <div className="proof-topline">
                  <h4 className="proof-title">Endofday</h4>
                  <span className="proof-tag">Since 2026 · 第一个公开版本</span>
                </div>
                <p className="proof-summary">把行动收束到今天真正能成立的三件事。</p>
                <a href="https://endofday.site" className="proof-link" target="_blank" rel="noopener noreferrer">
                  试一次更有边界的一天
                </a>
              </article>

              <article className="proof-card">
                <div className="proof-topline">
                  <h4 className="proof-title">赛博问卜</h4>
                  <span className="proof-tag">Since 2026 · 外链工具组新成员</span>
                </div>
                <p className="proof-summary">借一面镜子，看清当下。</p>
                <a href="https://wenbu.cc" className="proof-link" target="_blank" rel="noopener noreferrer">
                  借这面镜子看一眼现在
                </a>
              </article>
            </div>
          </section>

          <section className="daily-proof">
            <div className="group-head">
              <h3 className="group-title">已经长回日常的部分</h3>
              <div className="section-copy">
                <p>不是所有真正成立的东西，都会先长成作品。</p>
                <p>有些更早长回身体、节奏和日常。</p>
              </div>
            </div>

            <article className="running-note">
              <div className="proof-topline">
                <h4 className="proof-title">跑步</h4>
                <span className="proof-tag">10,000+ km · still running</span>
              </div>
              <p className="proof-summary">不是展示自律，而是训练一种长期节奏。</p>
              <p className="proof-diary">
                很多判断，不是在书桌前想出来的，是在一公里一公里里慢慢跑明白的。
              </p>
              <Link href="/practice" className="proof-link">
                去看这些日常如何慢慢长成秩序
              </Link>
            </article>
          </section>

          <div className="transition-quote">
            <p>有些东西先长成入口。</p>
            <p>有些东西后来长回人本身。</p>
          </div>

          <div className="closing-line">
            <p>我想留下的，不是更多内容，</p>
            <p>而是那些经过现实之后，仍然成立的判断。</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
