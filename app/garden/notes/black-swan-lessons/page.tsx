import Link from 'next/link';

export default function BlackSwanLessonsPage() {
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
              <span>2021-10-15</span>
            </div>
            <h1 className="note-title">不确定性，不是需要消灭的东西</h1>
          </header>

          <article className="note-body">
            <p>定投课堂开始共读《黑天鹅》的时候，我以为这是一本关于金融危机的书。</p>
            <p>读完才发现，它是一本关于人类如何欺骗自己的书。</p>
            <p>
              塔勒布的写法很不友好——横跨哲学、心理学、经济学，密度极高。<br />
              但合上书的那一刻，有几个问题开始在脑子里打转，一直没散。
            </p>

            <hr />

            <h2>一、我们是如何欺骗自己的</h2>

            <p>塔勒布讲了一只火鸡——</p>
            <blockquote>
              被屠夫喂养了一千天。每一天的经历都在加强它的判断：我是被爱的，生活是安全的。直到第1001天，感恩节，它才大吃一惊。
            </blockquote>
            <p>火鸡的悲剧，不是遇到了坏屠夫。而是它把"到目前为止没出事"，当成了"以后也不会出事"的证据。</p>
            <p>这不只是火鸡的问题。</p>
            <p>
              书里说了三种让我们看不见黑天鹅的心理机制：<br />
              叙述谬误、证实谬误、幸存者偏差。
            </p>
            <p>
              <strong>叙述谬误</strong>——我们太喜欢讲故事了。<br />
              把复杂的事情简化成因果关系，让它听起来有条理，让人觉得世界是可理解的。<br />
              但信息一旦被简化，不确定性就消失了。<br />
              我们以为自己理解了，其实只是产生了理解的错觉。
            </p>
            <p>
              <strong>证实谬误</strong>——我们只收集支持自己观点的证据。<br />
              反面的例子，眼睛会自动跳过。<br />
              正面的越来越多，自信就越来越大，盲区也越来越深。
            </p>
            <p>
              <strong>幸存者偏差</strong>——历史是由活下来的人写的。<br />
              那些遭遇了反面结果的火鸡，消失了，不能再回来讲述自己的故事。<br />
              所以我们只听到了成功的声音，以为成功才是常态。
            </p>

            <hr />

            <h2>二、两个世界</h2>

            <p>塔勒布把世界分成两种：</p>
            <p>
              <strong>平均斯坦</strong>——符合钟形曲线，大多数结果集中在平均值附近，极端情况罕见且影响有限。<br />
              身高、体重，大致是这个世界的东西。
            </p>
            <p>
              <strong>极端斯坦</strong>——财富、声誉、影响力，不是这样的。<br />
              一个人可以积累整个行业绝大多数的财富；一条内容可以触达几亿人。<br />
              极端事件，在这里不是例外，而是常态。
            </p>
            <p>我们生活的这个时代，越来越是极端斯坦。</p>
            <p>李佳琦和薇娅的走红，大 V 的意外崛起，都是极端斯坦的产物。</p>
            <p>
              但它也意味着：在能力范围内，主动尝试不确定性，是合理的。<br />
              活着，就有可能等到那个拐点。
            </p>

            <hr />

            <h2>三、如何在不确定性里活着</h2>

            <p>塔勒布不教人预测黑天鹅。他说，这做不到。</p>
            <blockquote>
              假如你抛弃完全准确地预测未来的想法，你就有很多事情可以做——只要你记住预测的局限性。
            </blockquote>
            <p>不执着于预测，反而能更踏实地立足当下，并为不确定的明天准备好结构。</p>
            <p>他提了三个方向：</p>
            <p>
              <strong>足够的现金冗余</strong>——不要把系统撑得太满。<br />
              留出来的那部分，不是浪费，是抗击打能力。
            </p>
            <p>
              <strong>杠铃策略</strong>——85%～90% 资金放在极度稳健的地方（比如国债），10%～15% 放在可以全亏的高风险地方。<br />
              刻意避开中间那个看似"平衡"、实则最脆弱的区域。
            </p>
            <p>
              <strong>流血策略</strong>——小规模主动试错。<br />
              让系统在受控的损失里积累经验，而不是把第一次试错的代价押在全部身家上。
            </p>

            <hr />

            <p>读完《黑天鹅》，我有一个改变。</p>
            <p>不再把不确定性当作需要消灭的敌人了。</p>
            <p>
              它就在那里。<br />
              问题不是怎么消灭它，而是怎么让自己的结构，在它出现的时候，还能站着。
            </p>
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
