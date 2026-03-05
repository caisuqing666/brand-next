'use client';

import Link from 'next/link';
import BrandNav from './components/BrandNav';
import './brand.css';

export default function BrandHome() {

  return (
    <div className="brand-container">
      {/* 导航栏 */}
      <BrandNav active="home" enableScrollShadow />

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
          </h1>
          <p className="hero-subtitle">slowroot —— 慢，是节奏；根，是结构。</p>
          <p className="hero-lede">
            这里是 slowroot.cc——一个关于结构、判断与慢生长的个人实验场。记录一个人如何在 40+ 之后，重新搭建自己。
          </p>
          <p className="hero-lede">
            在信息越来越多的时代，我更在意的是——怎么判断，而不是怎么做更多。这里记录我在三个方向上的长期实践。慢，但有根。
          </p>
          <div className="hero-pill-row">
            <span className="pill">结构实践者</span>
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
                  46 岁打开编辑器，写下第一个 console.log('Hello')。那不是技术突破，而是认知突破。我不是为了会写代码，我是在拆掉“年龄限制”的幻觉。
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
            <p className="eyebrow">💫</p>
            <h2 className="section-title">我在做的三件事</h2>
            <p className="card-content">认知决定方向，能力决定路径，训练决定稳定性。</p>
          </div>
          <div className="focus-grid">
            <div className="dynamic-card focus-card">
              <div className="card-icon">①</div>
              <h3 className="card-title">认知结构</h3>
              <p className="card-content">理解世界的底层逻辑，比追逐表面信息更重要。</p>
            </div>
            <div className="dynamic-card focus-card">
              <div className="card-icon">②</div>
              <h3 className="card-title">技术能力</h3>
              <p className="card-content">把想法变成可用的东西。46 岁开始，没有太晚。</p>
            </div>
            <div className="dynamic-card focus-card">
              <div className="card-icon">③</div>
              <h3 className="card-title">自我训练</h3>
              <p className="card-content">在身体里找到稳定的地基，然后从那里出发。</p>
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
            <div className="belief-item">没有结构，技巧会误导你。</div>
            <div className="belief-item">没有判断，工具会放大错误。</div>
            <div className="belief-item">没有节奏，速度只会让你更快迷失。</div>
          </div>
        </section>

        {/* 结尾 */}
        <section className="section-shell closing-section">
          <div className="closing-card">
            <p className="eyebrow">💌 想对你说的一句话</p>
            <p className="card-content">我不确定它会长成什么。但我会持续构建。</p>
            <p className="card-content" style={{ opacity: 0.5, fontSize: '0.9em', marginTop: '1.5rem' }}>
              森林不追求速度。它在时间里，确认自己的方向。
            </p>
            <div className="closing-actions">
              <Link href="/tools" className="closing-btn primary">欢迎进来看看</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
