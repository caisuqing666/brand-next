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
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <h1 className="hero-title">
          这不是一组工具。这是一个
          <br />
          从临在到生长的个人系统。
        </h1>
        <div className="hero-meta">
          <p className="hero-brand">慢，是节奏；根，是结构。</p>
          <p className="hero-note">
            我关心的不是如何做得更多，而是如何先回到自己，并在行动中，长出更稳定的结构。
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
            <p className="node-question">我现在很乱，如何回到自己？</p>
            <a href="https://metafield.cc" className="node-link" target="_blank" rel="noopener noreferrer">
              进入临在之锚 →
            </a>
            <span className="node-hint">先安静一下</span>
          </div>

          <div className="journey-node journey-node--top-right journey-node--inner-guide">
            <div className="node-number">02</div>
            <h3 className="node-title">判断 / 定向</h3>
            <p className="node-question">我怎么知道这是对的方向？</p>
            <Link href="/garden/judgment" className="node-link">
              进入判断之锚 →
            </Link>
            <span className="node-hint">先看清更重要的事</span>
          </div>

          <div className="journey-node journey-node--bottom-right journey-node--hinge">
            <div className="node-number">03</div>
            <h3 className="node-title">执行 / 收束</h3>
            <p className="node-question">方向知道了，今天先收成哪一步？</p>
            <a href="https://endofday.site" className="node-link" target="_blank" rel="noopener noreferrer">
              进入执行之锚 →
            </a>
            <span className="node-hint">先把行动收小一点</span>
          </div>

          <div className="journey-node journey-node--bottom-left journey-node--outer-ground">
            <div className="node-number">04</div>
            <h3 className="node-title">结构 / 安放</h3>
            <p className="node-question">经历过的事，如何安放成结构？</p>
            <a href="#rooted" className="node-link">看那些已经开始扎根的部分 →</a>
            <span className="node-hint">先让经验有位置落地</span>
          </div>

          <div className="journey-node journey-node--top-left journey-node--outer-grow">
            <div className="node-number">05</div>
            <h3 className="node-title">生长 / 展开</h3>
            <p className="node-question">当结构慢慢稳定以后，我会长成什么？</p>
            <a href="#change" className="node-link">看这些东西如何慢慢长回人身上 →</a>
            <span className="node-hint">这条路还在慢慢长出来</span>
          </div>
        </div>

        <div className="journey-mobile">
          <div className="mobile-node mobile-node--inner-start">
            <div className="mobile-header">
              <span className="mobile-number">01</span>
              <h3 className="mobile-title">临在 / 降噪</h3>
            </div>
            <p className="mobile-question">我现在很乱，如何回到自己？</p>
            <a href="https://metafield.cc" className="mobile-link" target="_blank" rel="noopener noreferrer">
              进入临在之锚 →
            </a>
            <span className="mobile-hint">先安静一下</span>
          </div>

          <div className="mobile-node mobile-node--inner-guide">
            <div className="mobile-header">
              <span className="mobile-number">02</span>
              <h3 className="mobile-title">判断 / 定向</h3>
            </div>
            <p className="mobile-question">我怎么知道这是对的方向？</p>
            <Link href="/garden/judgment" className="mobile-link">
              进入判断之锚 →
            </Link>
            <span className="mobile-hint">先看清更重要的事</span>
          </div>

          <div className="mobile-node mobile-node--hinge">
            <div className="mobile-header">
              <span className="mobile-number">03</span>
              <h3 className="mobile-title">执行 / 收束</h3>
            </div>
            <p className="mobile-question">方向知道了，今天先收成哪一步？</p>
            <a href="https://endofday.site" className="mobile-link" target="_blank" rel="noopener noreferrer">
              进入执行之锚 →
            </a>
            <span className="mobile-hint">先把行动收小一点</span>
          </div>

          <div className="mobile-node mobile-node--outer-ground">
            <div className="mobile-header">
              <span className="mobile-number">04</span>
              <h3 className="mobile-title">结构 / 安放</h3>
            </div>
            <p className="mobile-question">经历过的事，如何安放成结构？</p>
            <a href="#rooted" className="mobile-link">看那些已经开始扎根的部分 →</a>
            <span className="mobile-hint">先让经验有位置落地</span>
          </div>

          <div className="mobile-node mobile-node--outer-grow">
            <div className="mobile-header">
              <span className="mobile-number">05</span>
              <h3 className="mobile-title">生长 / 展开</h3>
            </div>
            <p className="mobile-question">当结构慢慢稳定以后，我会长成什么？</p>
            <a href="#change" className="mobile-link">看这些东西如何慢慢长回人身上 →</a>
            <span className="mobile-hint">这条路还在慢慢长出来</span>
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
              <p>进入日常。进入行动。进入作品。进入那些可以被看见、被使用、被验证的地方。</p>
              <p>这里不是成果陈列。这里只放那些已经开始扎根的部分。</p>
            </div>
          </header>

          <article className="anchor-panel">
            <div className="anchor-head">
              <span className="panel-eyebrow">主锚点</span>
              <span className="panel-tag">Since 2024 · still growing</span>
            </div>

            <div className="anchor-body">
              <div className="anchor-main">
                <h3 className="anchor-title">slowroot.cc</h3>
                <p className="anchor-aside">从一个念头开始，到现在还没有停止长根。</p>
              </div>
              <div className="anchor-text">
                <p>它不是名片，也不是内容合集。</p>
                <p>它更像一个持续生长中的样本：判断如何落地，结构如何被使用，慢生长如何进入现实，都先在这里发生。</p>
              </div>
            </div>

            <div className="anchor-actions">
              <Link href="/garden" className="anchor-action anchor-action--primary">
                去看看那些被留下的痕迹
              </Link>
              <Link href="/about/system" className="anchor-action">
                看看这些判断，长成了什么
              </Link>
            </div>
          </article>

          <section className="proof-group">
            <div className="group-head">
              <h3 className="group-title">判断，被做成了可使用的工具</h3>
              <p className="group-copy">
                有些东西，如果只停留在理解里，很快又会散掉。做成工具，不是为了更复杂，而是为了让判断能在现实里被反复调用。
              </p>
            </div>

            <div className="proof-grid">
              <article className="proof-card">
                <div className="proof-topline">
                  <h4 className="proof-title">Gallup Tool</h4>
                  <span className="proof-tag">Since 2025 · 持续迭代中</span>
                </div>
                <p className="proof-summary">让优势不再停留在报告里，而进入具体判断。</p>
                <p className="proof-diary">
                  看过很多优势报告以后，我越来越在意的不是“你有什么”，而是“你怎么用它来判断”。
                </p>
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
                <p className="proof-diary">
                  很多时候，人不是不会做，而是还没回到自己。所以这个工具的起点，不是行动，而是停一下。
                </p>
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
                <p className="proof-diary">
                  我曾经也试过把一天塞满。后来发现，真正让人稳下来的，不是做更多，而是只承诺那三件真正成立的事。
                </p>
                <a href="https://endofday.site" className="proof-link" target="_blank" rel="noopener noreferrer">
                  试一次更有边界的一天
                </a>
              </article>
            </div>
          </section>

          <section className="daily-proof">
            <div className="group-head">
              <h3 className="group-title">还有一些变化，不长在作品里，长在日常里</h3>
              <div className="section-copy">
                <p>开始长期跑步。开始持续写作。开始做工具。开始把混乱一点点整理成秩序。</p>
                <p>它们不一定显眼，但它们比“看起来很厉害”更真实。</p>
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

          <section className="entry-panel">
            <div className="group-head">
              <h3 className="group-title">真实入口</h3>
              <p className="group-copy">
                如果你想看 slowroot 是怎样一点点长出来的，可以从这些真实入口进去。
              </p>
            </div>

            <div className="section-copy">
              <p>如果你想先分清 slowroot 现在已经长出来的两棵主干，可以先从这里看它们各自负责什么。</p>
              <p>Garden 让人重新站稳，并长出判断；Library 留下值得保留的东西；Practice 检验什么最终在现实里站住。</p>
            </div>

            <div className="comparison-grid">
              <article className="comparison-card">
                <div className="comparison-label">Library</div>
                <p className="comparison-text">
                  <strong>Library 管留下了什么</strong>
                </p>
                <p className="comparison-text">
                  Library 收的是那些经过时间筛选之后，仍然值得留下的内容、方法与入口。
                </p>
              </article>

              <article className="comparison-card">
                <div className="comparison-label">Practice</div>
                <p className="comparison-text">
                  <strong>Practice 管什么被验证过</strong>
                </p>
                <p className="comparison-text">
                  Practice 看的是哪些判断在现实里被反复检验之后，仍然成立。
                </p>
              </article>
            </div>

            <div className="entry-actions">
              <Link href="/garden" className="entry-action entry-action--primary">
                去看看那些被留下的痕迹
              </Link>
              <Link href="/garden/judgment" className="entry-action">
                尝试一次有节奏的思考
              </Link>
              <Link href="/about/system" className="entry-action">
                如果你也想慢下来扎根
              </Link>
            </div>
          </section>
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
                慢慢不再靠“更多”安抚自己。而是开始增加深度。跑得更稳，学得更透，也更知道什么不必抓住。
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
