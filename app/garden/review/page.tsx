import Link from 'next/link';

const reviewNodes = [
  {
    title: '为什么复盘',
    slug: 'review-why',
    question: '一天过完了，但心里没有"结束感"，只剩下自责或空白。',
  },
  {
    title: '事实与完成',
    slug: 'review-facts',
    question: '我做了很多，但总觉得"不够好"，所以不敢承认完成。',
  },
  {
    title: '边界与未完成',
    slug: 'review-boundary',
    question: '没做完就觉得失败，情绪拖到第二天。',
  },
  {
    title: '复盘卡模板',
    slug: 'review-template',
    question: '我想复盘，但每次打开就不知道怎么写，最后放弃。',
  },
  {
    title: '资产化沉淀',
    slug: 'review-assets',
    question: '我每天有经验，但很快就忘了，没沉淀成可复用的东西。',
  },
  {
    title: '周复盘',
    slug: 'review-weekly',
    question: '我每天都在做，但看不见趋势，不知道自己有没有变强。',
  },
];

export default function ReviewPage() {
  return (
    <div className="slowroot-container">
      {/* 导航栏 */}
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

      {/* 页面内容 */}
      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">复盘沉淀</h1>
          <p className="hero-subtitle">
            把经历变成结构，把结构变成复利。
          </p>
        </header>

        <section className="garden-section">
          <div className="garden-grid">
            {reviewNodes.map((node) => (
              <Link 
                key={node.slug}
                href={`/garden/review/${node.slug}`} 
                className="garden-node"
              >
                <h3 className="node-title">{node.title}</h3>
                <p className="node-question">{node.question}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* 页脚 */}
      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
