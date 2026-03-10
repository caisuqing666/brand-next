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
            我关心的，不是做得更多，而是先回到自己，再把判断慢慢长进生活里。
          </p>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-header">
          <span className="journey-eyebrow">从回到自己，到长进生活里。</span>
        </div>

        <div className="journey-ellipse">
          <div className="journey-center">
            <p className="journey-center-text">
              先回到自己，
              <br />
              再慢慢长进生活里。
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
            <h3 className="node-title">临在 / 降噪</h3>
            <p className="node-question">乱的时候，怎么先回到自己？</p>
            <Link href="/tools/presence" className="node-link">
              进入临在之锚 →
            </Link>
            <span className="node-hint">先回来</span>
          </div>

          <div className="journey-node journey-node--top-right journey-node--inner-guide">
            <div className="node-number">02</div>
            <h3 className="node-title">判断 / 定向</h3>
            <p className="node-question">站稳以后，怎么判断方向？</p>
            <Link href="/garden/judgment" className="node-link">
              进入判断之锚 →
            </Link>
            <span className="node-hint">先定向</span>
          </div>

          <div className="journey-node journey-node--bottom-right journey-node--hinge">
            <div className="node-number">03</div>
            <h3 className="node-title">执行 / 收束</h3>
            <p className="node-question">知道方向后，今天先做哪一步？</p>
            <Link href="/tools/endofday" className="node-link">
              进入执行之锚 →
            </Link>
            <span className="node-hint">先收束</span>
          </div>

          <div className="journey-node journey-node--bottom-left journey-node--outer-ground">
            <div className="node-number">04</div>
            <h3 className="node-title">结构 / 安放</h3>
            <p className="node-question">经历过的事，怎么安放成结构？</p>
            <a href="#rooted" className="node-link">看那些已经开始扎根的部分 →</a>
            <span className="node-hint">先安放</span>
          </div>

          <div className="journey-node journey-node--top-left journey-node--outer-grow">
            <div className="node-number">05</div>
            <h3 className="node-title">生长 / 展开</h3>
            <p className="node-question">结构稳定以后，会长成什么？</p>
            <a href="#change" className="node-link">看这些东西如何慢慢长回人身上 →</a>
            <span className="node-hint">先长出来</span>
          </div>
        </div>

        <div className="journey-mobile">
          <div className="mobile-node mobile-node--inner-start">
            <div className="mobile-header">
              <span className="mobile-number">01</span>
              <h3 className="mobile-title">临在 / 降噪</h3>
            </div>
            <p className="mobile-question">乱的时候，怎么先回到自己？</p>
            <Link href="/tools/presence" className="mobile-link">
              进入临在之锚 →
            </Link>
            <span className="mobile-hint">先回来</span>
          </div>

          <div className="mobile-node mobile-node--inner-guide">
            <div className="mobile-header">
              <span className="mobile-number">02</span>
              <h3 className="mobile-title">判断 / 定向</h3>
            </div>
            <p className="mobile-question">站稳以后，怎么判断方向？</p>
            <Link href="/garden/judgment" className="mobile-link">
              进入判断之锚 →
            </Link>
            <span className="mobile-hint">先定向</span>
          </div>

          <div className="mobile-node mobile-node--hinge">
            <div className="mobile-header">
              <span className="mobile-number">03</span>
              <h3 className="mobile-title">执行 / 收束</h3>
            </div>
            <p className="mobile-question">知道方向后，今天先做哪一步？</p>
            <Link href="/tools/endofday" className="mobile-link">
              进入执行之锚 →
            </Link>
            <span className="mobile-hint">先收束</span>
          </div>

          <div className="mobile-node mobile-node--outer-ground">
            <div className="mobile-header">
              <span className="mobile-number">04</span>
              <h3 className="mobile-title">结构 / 安放</h3>
            </div>
            <p className="mobile-question">经历过的事，怎么安放成结构？</p>
            <a href="#rooted" className="mobile-link">看那些已经开始扎根的部分 →</a>
            <span className="mobile-hint">先安放</span>
          </div>

          <div className="mobile-node mobile-node--outer-grow">
            <div className="mobile-header">
              <span className="mobile-number">05</span>
              <h3 className="mobile-title">生长 / 展开</h3>
            </div>
            <p className="mobile-question">结构稳定以后，会长成什么？</p>
            <a href="#change" className="mobile-link">看这些东西如何慢慢长回人身上 →</a>
            <span className="mobile-hint">先长出来</span>
          </div>
        </div>
      </section>

      <section id="rooted" className="rooted-section">
        <div className="section-shell">
          <div className="section-kicker">
            <span className="section-number">04</span>
            <span className="section-name">扎根</span>
          </div>

          <header className="section-intro">
            <h2 className="section-title">扎根</h2>
            <div className="section-copy">
              <p>想清楚，不是终点。slowroot 也必须进入现实。</p>
              <p>这里不是成果陈列。这里只放那些已经开始进入现实的部分。</p>
            </div>
          </header>

          <section className="proof-group">
            <div className="group-head">
              <h3 className="group-title">已经长出来的工具样本</h3>
              <p className="group-copy">
                有些判断，如果只停留在理解里，很快又会散掉。做成工具，不是为了铺开，而是为了让它能在现实里被反复调用。
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
                <p>不是所有扎根都会先长成作品。有些更先长回身体、节奏和日常。</p>
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
            <p>有些东西先长成作品。</p>
            <p>有些东西后来长回人本身。</p>
          </div>

          <div className="entry-actions">
            <Link href="/garden" className="entry-action entry-action--primary">
              进入 Garden
            </Link>
            <Link href="/practice" className="entry-action">
              进入 Practice
            </Link>
            <Link href="/tools" className="entry-action">
              进入 Tools
            </Link>
            <Link href="/about" className="entry-action">
              进入 About
            </Link>
          </div>
        </div>
      </section>

      <section id="change" className="change-section">
        <div className="section-shell section-shell--narrow">
          <div className="section-kicker">
            <span className="section-number">05</span>
            <span className="section-name">变化</span>
          </div>

          <header className="section-intro section-intro--soft">
            <h2 className="section-title">变化</h2>
            <div className="section-copy">
              <p>不是突然想通了什么。也不是终于成为了另一个人。</p>
              <p>更多时候，变化来得很慢。慢到一开始几乎察觉不到。只是有一天回头看，才发现：一些旧的用力方式，真的在慢慢退下去。</p>
            </div>
          </header>

          <div className="comparison-grid">
            <article className="comparison-card">
              <div className="comparison-label">以前</div>
              <p className="comparison-text">
                试图通过增加宽度，来缓解焦虑。跑得更多，学得更杂，抓得更紧。
              </p>
            </article>

            <article className="comparison-card comparison-card--now">
              <div className="comparison-label">现在</div>
              <p className="comparison-text">
                慢慢不再靠"更多"安抚自己。而是开始增加深度。跑得更稳，学得更透，也更知道什么不必抓住。
              </p>
            </article>

            <article className="comparison-card">
              <div className="comparison-label">以前</div>
              <p className="comparison-text">
                一乱，就想赶快做点什么。仿佛只要继续动，混乱就会自己过去。
              </p>
            </article>

            <article className="comparison-card comparison-card--now">
              <div className="comparison-label">现在</div>
              <p className="comparison-text">
                开始知道，停一下不是退后。有些时候，先判断，比先行动更重要。
              </p>
            </article>
          </div>

          <section className="body-panel">
            <h3 className="group-title">身体会先知道</h3>
            <div className="section-copy">
              <p>有些变化，不是先发生在语言里。而是先发生在身体里。</p>
              <p>呼吸不再悬在胸腔，而是慢慢沉到了腹部。</p>
              <p>那种稳，不是说服自己之后才有的。是跑过很多公里、经历很多现实之后，身体先不慌了，心才慢慢跟上。</p>
              <p>很多路，不是想通的。是一步一步，跑进呼吸里以后，才真正明白。</p>
            </div>
          </section>

          <div className="closing-line">
            <p>原来变化，不一定是巨大的。</p>
            <p>它也可以只是 不再那么乱了。</p>
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
