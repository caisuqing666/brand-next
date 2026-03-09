import Link from 'next/link';

export default function EducationMetamorphosisPage() {
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

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>花园</span>
              <span className="note-eyebrow-sep">/</span>
              <span>笔记</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2021-11-04</span>
            </div>
            <h1 className="note-title">教育，是另一个自我的可能</h1>
          </header>

          <article className="note-body">
            <p>跑步时听完了《你当像鸟，飞往你的山》，在公园里走了很久，一直没有开口说话。</p>
            <p>有些书，合上之后需要沉默一会儿。</p>

            <hr />

            <h2>一、塔拉的故事</h2>

            <p>
              塔拉，十七岁前从未踏入教室。<br />
              七个孩子，废品收集站，父亲笃信中世纪的宗教观念，不接受现代教育，也不接受现代医学。<br />
              家里的规则是忠诚与真理，孩子们没有独立意志的位置。
            </p>
            <p>
              然后，在一个偶然的机遇里，她考上了大学。<br />
              后来是哈佛，是剑桥，是哲学硕士，是历史博士。
            </p>
            <p>但故事最难的部分，不是这条路有多陡。</p>
            <p>
              而是认知世界发生翻天覆地的变化之后，她不知道自己是谁了。<br />
              新旧思想的冲突，把她推进了深渊。
            </p>
            <p>7 岁的塔拉，感到无望，担心世界末日。</p>
            <p>30 多岁写书的塔拉，平静而理智地审视那个小女孩。</p>
            <p>一个塔拉，两种身份，分裂又重叠。</p>

            <hr />

            <h2>二、元认知：能不能看见自己在想什么</h2>

            <p>塔拉的那种能力——跳出自己，审视当年的自己——就是元认知。</p>
            <p>
              元认知强的人，能够脱离当下的情绪和固有叙事，重新看自己的思维方式。<br />
              他们不是没有偏见，而是能发现自己的偏见。
            </p>
            <p>多元视角，意味着多种选择。</p>
            <p>
              塔拉的生活，本可以只有一条路——父亲规定的那条。<br />
              是教育，让她看见了另一种可能存在的自己。
            </p>

            <hr />

            <h2>三、几件读完后，我反复想的事</h2>

            <p>
              <strong>原生家庭的边界</strong>——穷人最难突破的，往往是父母。<br />
              不是因为他们坏，是因为他们就是你最初的世界。<br />
              你看见的、相信的、认为理所当然的，都从那里来。<br />
              突破这个圈，不是背叛，是拓展视野——先找到认知边界，才能走出去。
            </p>
            <p>
              <strong>教育是贵人</strong>——我自己最重要的转变，来自 2019 年的两笔自我投资：<br />
              加入定投课堂，和得到会员。<br />
              去市场上找最好的老师，承担自己能承担的最好的教育。<br />
              这是我认为最值得的投资，没有之一。
            </p>
            <p>
              <strong>多读经典</strong>——读那些经过时间检验的书。<br />
              通过别人的人生经历，拓宽自己的认知。<br />
              塔拉在书的后记里说：
            </p>
            <blockquote>
              你可以用很多种说法来称呼这个自我：转变、蜕变、虚伪、背叛。而我称之为：教育。
            </blockquote>
            <p>
              <strong>长期主义</strong>——用时间的密度，去对冲世界的不确定性。<br />
              不是因为世界会变好，而是因为持续积累，会让你在变化里更有站住的能力。
            </p>

            <hr />

            <p>
              教育不是证书，也不只是知识。<br />
              它是一次重新认识自己的机会。
            </p>
            <p>塔拉飞向了她的山。</p>
            <p>我们也各自有自己要去的地方。</p>
          </article>

          <Link href="/garden/notes" className="note-back">← 回到笔记</Link>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
