'use client';

import Link from 'next/link';
import BrandNav from './components/BrandNav';
import './brand.css';

export default function BrandHome() {
  return (
    <div className="brand-container">
      <BrandNav active="archive" enableScrollShadow />

      <main className="home-main">
        <section className="hero-section brand-hero">
          <p className="eyebrow">旧版归档</p>
          <h1 className="hero-title">这里是 slowroot 旧版内容的归档入口。</h1>
          <p className="hero-subtitle">主站已经迁移到新的 slowroot 结构，这里不再作为并列主入口使用。</p>
          <p className="hero-lede">
            这部分页面保留，是为了让仍有价值的旧内容先有位置可放，后续再逐步迁入新的 about、practice、library 与 tools 体系。
          </p>
          <p className="hero-lede">
            如果你是第一次访问这个项目，建议先返回 slowroot 主站；如果你是在整理历史内容，这里可以把它当作待迁移资产区。
          </p>
          <div className="hero-pill-row">
            <span className="pill">旧版归档</span>
            <span className="pill">待迁移资产</span>
            <span className="pill">不再作为主入口</span>
          </div>
          <div className="closing-actions" style={{ marginTop: '2rem' }}>
            <Link href="/" className="closing-btn primary">返回 slowroot 主站</Link>
            <Link href="/about" className="closing-btn">去新的关于页</Link>
          </div>
        </section>

        <section className="section-shell keywords-section">
          <div className="section-header">
            <p className="eyebrow">迁移建议</p>
            <h2 className="section-title">这批旧内容，接下来怎么处理</h2>
          </div>
          <div className="keyword-grid">
            <div className="keyword-card">
              <div className="card-icon">↗</div>
              <div>
                <h3 className="card-title">回到主站</h3>
                <p className="card-content">新的 slowroot 叙事主干已经在首页、花园、实践、资源、关于中建立。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">🏃</div>
              <div>
                <h3 className="card-title">实践内容迁入 practice</h3>
                <p className="card-content">跑步、编程、投资这些旧日志页，更适合作为 practice 体系下的长期实践内容。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">👤</div>
              <div>
                <h3 className="card-title">人物内容迁入 about</h3>
                <p className="card-content">自我介绍、时间线、关键词和信念表达，更适合沉淀为 about 页的稳定内容。</p>
              </div>
            </div>
            <div className="keyword-card">
              <div className="card-icon">🗂</div>
              <div>
                <h3 className="card-title">旧页面先保留</h3>
                <p className="card-content">暂时不删除，是为了保留可迁移素材，避免在收口过程中把仍有价值的内容提前打散。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell timeline-section">
          <div className="section-header">
            <p className="eyebrow">归档入口</p>
            <h2 className="section-title">仍可访问，但不再前置推荐的旧页面</h2>
          </div>
          <div className="timeline-stack">
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">实践迁移</div>
                <p className="timeline-content">[跑步体系](/Users/caixiaopi/Desktop/brand-next/app/brand/run/page.tsx) · [编程日志](/Users/caixiaopi/Desktop/brand-next/app/brand/code/page.tsx) · [投资日志](/Users/caixiaopi/Desktop/brand-next/app/brand/invest/page.tsx)</p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">待评估归档</div>
                <p className="timeline-content">心理服务、资源库、AI 实验室属于旧产品设想的一部分，当前保留访问，但不再作为主导航重点。</p>
              </div>
            </div>
            <div className="timeline-node">
              <div className="timeline-dot" />
              <div className="timeline-card highlight">
                <div className="timeline-year">现在推荐的路径</div>
                <p className="timeline-content">优先访问 slowroot 主站，再按花园、实践、资源、关于这条主干进入内容。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
