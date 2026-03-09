import Link from 'next/link';

const keywords = [
  {
    title: 'INFJ · 洞察与行动',
    body: '用理解和共情去看见别人，也看见自己。',
  },
  {
    title: '跑步 10,000+ 公里',
    body: '完成过上海马拉松，从零开始，把坚持变成日常。',
  },
  {
    title: '46 岁开始学编程',
    body: '不是为了转行，而是为了不放弃自己，用技术做自己的产品。',
  },
  {
    title: '学习型人格',
    body: '盖洛普前五：思维 / 学习 / 分析 / 搜集 / 完美主义版「精进派」。',
  },
];

const timeline = [
  {
    year: '2020 年 · 跑步拯救了我',
    body: '口罩年，不间断训练，完成人生第一个全程马拉松。42.195 公里的每一步，都在提醒我：再普通的人，也可以通过坚持改变自己。',
  },
  {
    year: '2018～2023 · 回望内心',
    body: '系统学习心理学、MBTI 和盖洛普优势，从“理解别人为什么这么做”，到“理解自己为什么这么选”。',
  },
  {
    year: '2025 年 · 第一次写代码',
    body: '46 岁打开编辑器，写下第一个 console.log(\'Hello\')。那不是技术突破，而是认知突破。我不是为了会写代码，我是在拆掉“年龄限制”的幻觉。',
  },
];

const beliefs = [
  '没有结构，技巧会误导你。',
  '没有判断，工具会放大错误。',
  '没有节奏，速度只会让你更快迷失。',
];

export default function AboutPage() {
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

      <div className="page-container">
        <header className="page-header">
          <h1 className="page-title">关于</h1>
          <p className="hero-subtitle">让 slowroot 长出来的人，也应该被看见。</p>
        </header>

        <section className="page-content">
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--structure)' }}>
              我是谁
            </h2>
            <p className="hero-subtitle" style={{ marginBottom: '1rem' }}>
              你好，我是蔡蔡。
            </p>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8 }}>
              slowroot 是一个关于结构、判断与慢生长的个人实验场。
              记录一个人如何在 40+ 之后，重新搭建自己的结构。
            </p>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8, marginTop: '1rem' }}>
              在信息越来越多的时代，我更在意的是：怎么判断，而不是怎么做更多。
            </p>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--structure-muted)', marginBottom: '0.75rem' }}>
              关键词
            </p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--structure)' }}>
              洞察、行动、学习、创作、陪伴
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {keywords.map((item) => (
                <div key={item.title}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem', color: 'var(--structure)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--structure-soft)', lineHeight: 1.75 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--structure-muted)', marginBottom: '0.75rem' }}>
              来路
            </p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--structure)' }}>
              每一年，都在慢慢长成自己
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {timeline.map((item) => (
                <div
                  key={item.year}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--structure)' }}>
                    {item.year}
                  </h3>
                  <p style={{ color: 'var(--structure-soft)', lineHeight: 1.8 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
            }}
          >
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--structure)', fontWeight: 600 }}>
              温柔又坚定的成长信念
            </h2>
            <div style={{ color: 'var(--structure-soft)', lineHeight: 2, fontSize: '1rem' }}>
              {beliefs.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <Link
              href="/about/system"
              style={{
                display: 'inline-block',
                color: 'var(--accent)',
                textDecoration: 'none',
                marginBottom: '0.75rem',
              }}
            >
              → 去看 slowroot 的系统骨架
            </Link>
            <br />
            <Link
              href="/about/now"
              style={{
                display: 'inline-block',
                color: 'var(--structure-muted)',
                textDecoration: 'none',
              }}
            >
              → 现在在做什么
            </Link>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              slowroot 宪法
            </h2>
            <div style={{ color: 'var(--structure-soft)', lineHeight: 2, fontSize: '1rem' }}>
              <p>判断优先于行动。</p>
              <p>结构优先于工具。</p>
              <p>时间优先于速度。</p>
              <p style={{ marginTop: '1.5rem', opacity: 0.7 }}>
                在复杂中筛选。在长期中验证。
              </p>
              <p style={{ opacity: 0.7 }}>
                不追求增加。只确认方向。
              </p>
            </div>
            <Link
              href="/about/constitution"
              style={{
                display: 'inline-block',
                color: 'var(--structure-muted)',
                textDecoration: 'none',
                marginTop: '1.5rem',
                fontSize: '0.9rem',
              }}
            >
              → 完整版
            </Link>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
