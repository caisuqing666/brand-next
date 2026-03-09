import Link from 'next/link';

const principles = [
  {
    title: '判断优先于行动',
    body: [
      'slowroot 不把“先做起来再说”当成默认美德。',
      '很多徒劳，不是因为做得不够多，而是因为一开始就站错了位置。',
      '所以在这里，行动当然重要，但行动之前，更重要的是先看清：这件事值不值得、是不是自己的问题、有没有必要现在就回答。',
    ],
  },
  {
    title: '结构优先于工具',
    body: [
      '工具可以放大效率，也可以放大偏差。',
      '如果结构没想清楚，再好的工具都可能只是让混乱跑得更快。',
      '所以 slowroot 做工具，但不会把工具当答案。真正想守住的，始终是背后的结构感。',
    ],
  },
  {
    title: '时间优先于速度',
    body: [
      '不是所有快都值得追。',
      '有些东西如果不能在时间里站住，短期再漂亮也只是表面成绩。',
      '我更在意那些经过反复、迟缓、甚至笨拙的验证之后，仍然能留下来的东西。',
    ],
  },
  {
    title: '临在先于解释',
    body: [
      '很多解释并不真的来自清楚，而是来自慌乱中的自我安慰。',
      '人在不在场，往往比说得对不对更重要。',
      '所以 slowroot 总想先把人接回来，再谈理解、分析和表达。',
    ],
  },
  {
    title: '边界先于讨好',
    body: [
      '不是所有关系都要维系，不是所有期待都要回应。',
      '如果没有边界，温柔很容易变成消耗，负责很容易变成过度承担。',
      'slowroot 想守住的，不是冷，而是清楚。清楚什么该靠近，什么该停下。',
    ],
  },
  {
    title: '减少徒劳，胜过增加动作',
    body: [
      '这套系统不崇拜忙碌，也不崇拜填满。',
      '比起继续堆动作，我更在意的是：有没有少走一点弯路，少做一点其实不必做的事。',
      '如果一个判断能减少徒劳，它往往比十个看起来积极的动作更有价值。',
    ],
  },
  {
    title: '慢可以，假装生长不可以',
    body: [
      'slowroot 接受缓慢，也接受阶段性的还没长出来。',
      '但它不想用“慢慢来”掩盖逃避，也不想用“长期主义”包装空转。',
      '慢不是借口。真正的慢，仍然应该在时间里一点点长出形状。',
    ],
  },
];

export default function AboutConstitutionPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link active">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>关于</span>
              <span className="note-eyebrow-sep">/</span>
              <span>宪法</span>
            </div>
            <h1 className="note-title">slowroot 想守住的秩序</h1>
            <p className="notes-page-subtitle">
              这些不是口号，更像是 slowroot 想守住的秩序。
            </p>
          </header>

          <article className="note-body">
            <p>我越来越觉得，一个系统真正重要的，不只是它长出了什么。</p>
            <p>更是它拒绝了什么，愿意慢下来等什么，又不愿意为了看起来完整而牺牲什么。</p>
            <p>所以这页叫“宪法”，不是因为它要显得庄严。</p>
            <p>而是因为有些东西，如果不先说清楚，后面很多内容都会慢慢走偏。</p>
            <p>这些原则，不是为了约束别人。</p>
            <p>它们更像是 slowroot 用来提醒自己的边界：当信息很多、动作很多、诱惑很多的时候，什么仍然不能被轻易交换。</p>

            <hr />

            {principles.map((principle, index) => (
              <section key={principle.title}>
                <h2>{index + 1}、{principle.title}</h2>
                {principle.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <hr />

            <p>所以这页不是一份漂亮的宣言。</p>
            <p>它更像一条内部准绳：什么应该继续长，什么不必勉强留下，什么即使很慢也值得守住。</p>
            <p>不是为了看起来坚定，而是为了在复杂里，仍然知道自己不想失去什么。</p>
          </article>

          <section className="garden-section" style={{ marginTop: '2.5rem' }}>
            <div className="garden-header">
              <span className="evidence-eyebrow">继续往下看</span>
            </div>
            <div className="garden-grid" style={{ gridTemplateColumns: '1fr' }}>
              <Link href="/about/system" className="garden-node">
                <h3 className="node-title">系统骨架</h3>
                <p className="node-question">如果这些是边界与原则，那 slowroot 具体是怎样长成一套系统的，可以继续往这里看。</p>
              </Link>
            </div>
          </section>

          <Link href="/about" className="note-back">← 回到关于</Link>
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
