import Link from 'next/link';

const notes = [
  {
    slug: 'barbell-and-zhongyong',
    date: '2026-02-28',
    dateDisplay: '02-28',
    title: '我用了十年，才明白这两句话说的是同一件事',
    excerpt: '杠铃策略与中庸之道，看起来一个走两端，一个走中间。但它们从来不是在回答同一个问题。',
  },
  {
    slug: 'system-processing',
    date: '2026-02-25',
    dateDisplay: '02-25',
    title: '不是情绪处理，是系统处理',
    excerpt: '连续报错会产生奇怪的累积效应，把"一条报错"升级成"一个关于自己的判断"。只处理当前这一条，才是系统处理。',
  },
  {
    slug: 'living-with-problems',
    date: '2026-02-15',
    dateDisplay: '02-15',
    title: '带着问题继续走，本身就是能力',
    excerpt: '没有谁是完美运行的系统。区别不在于谁没有问题，而在于谁能带着问题继续生活。',
  },
  {
    slug: 'zhi-zhi-bu-dai',
    date: '2026-02-11',
    dateDisplay: '02-11',
    title: '知止不怠：为什么最危险的人，是那些"永不放弃"的人？',
    excerpt: '真正的长期主义，不是"永不放弃"，而是"不让一次错误毁掉自己"。知止，是为了不怠。',
  },
  {
    slug: 'zhi-zhi',
    date: '2026-02-03',
    dateDisplay: '02-03',
    title: '知止而后有定',
    excerpt: '真正消耗人的，从来不是事情本身，而是你不知道问题到底出在哪里。当判断权回到手里，人自然就不乱了。',
  },
  {
    slug: 'structure-costs',
    date: '2026-01-27',
    dateDisplay: '01-27',
    title: '改变结构，从来不是免费的',
    excerpt: '世界不奖励"正确"，它在结算另一件事——你对既有秩序造成了多大的扰动。丁元英与芮小丹，是同一个问题的两种定价。',
  },
  {
    slug: 'stand-firm-freedom',
    date: '2026-01-21',
    dateDisplay: '01-21',
    title: '站住，才有真正的自由',
    excerpt: '站桩练的，从来不是身体，而是在没有外部驱动的情况下，你还能不能不逃走。这和安迪在监狱里的每一天，其实一模一样。',
  },
  {
    slug: 'dao-and-judgment',
    date: '2026-01-19',
    dateDisplay: '01-19',
    title: '反者道之动：聂卫平与真正的判断力',
    excerpt: '他一生最重要的能力，不是算力，而是判断力。弃子，不是失败，而是让生命重新回到正确位置的那一步。',
  },
  {
    slug: 'elastic-fallback',
    date: '2026-01-17',
    dateDisplay: '01-17',
    title: '为自己建一套有弹性的保底机制',
    excerpt: '系统本身就应该允许波动。不是摆烂，是结构允许出错——在失败发生时，有一个可退回的位置。',
  },
  {
    slug: 'different-systems',
    date: '2026-01-06',
    dateDisplay: '01-06',
    title: '把不同的事，交给不同的系统',
    excerpt: '我试图用同一套价值标准，处理本质完全不同的场景。当这些系统不再互相干扰，人反而会变得更稳定。',
  },
  {
    slug: 'inner-order',
    date: '2022-03-01',
    dateDisplay: '22-03-01',
    title: '不管外面怎样，先把自己的秩序建起来',
    excerpt: '喧嚣很容易制造一种"我参与了"的错觉。可错觉，并不能真正解决问题。真正需要被照顾的，从来不是我们的观点，而是在不确定里继续生活的能力。',
  },
  {
    slug: 'education-metamorphosis',
    date: '2021-11-04',
    dateDisplay: '21-11-04',
    title: '教育，是另一个自我的可能',
    excerpt: '塔拉十七岁前从未踏入教室，后来一路读到剑桥博士。最难的部分不是那条路有多陡，而是认知世界翻转之后，不知道自己是谁了。',
  },
  {
    slug: 'black-swan-lessons',
    date: '2021-10-15',
    dateDisplay: '21-10-15',
    title: '不确定性，不是需要消灭的东西',
    excerpt: '塔勒布的火鸡故事。叙述谬误、证实谬误、幸存者偏差——我们不是被黑天鹅打倒的，是被自己的认知结构打倒的。',
  },
  {
    slug: 'growing-upward',
    date: '2021-08-29',
    dateDisplay: '21-08-29',
    title: '量，才是最根本的质',
    excerpt: '我以为自己做得不够好，是因为方法不对。后来慢慢接受：大多数时候，是量还不够，不是缺少捷径，是缺少次数。',
  },
];

export default function NotesPage() {
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

      <main className="notes-page">
        <div className="notes-shell">
          <header className="notes-head">
            <p className="notes-eyebrow">花园 / 笔记</p>
            <h1 className="notes-page-title">记录与思考</h1>
            <p className="notes-page-subtitle">
              不是总结，也不是方法论。<br />
              只是一些走过之后，慢慢沉下来的东西。
            </p>
          </header>

          <nav className="notes-list" aria-label="笔记列表">
            {notes.map((note) => (
              <Link
                key={note.slug}
                href={`/garden/notes/${note.slug}`}
                className="notes-item"
              >
                <span className="notes-item-date">{note.dateDisplay}</span>
                <span className="notes-item-right">
                  <span className="notes-item-title">{note.title}</span>
                  <span className="notes-item-excerpt">{note.excerpt}</span>
                </span>
              </Link>
            ))}
          </nav>
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
