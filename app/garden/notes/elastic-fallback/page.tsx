import Link from 'next/link';

export default function ElasticFallbackPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link active">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
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
              <span>2026-01-17</span>
            </div>
            <h1 className="note-title">为自己建一套有弹性的保底机制</h1>
          </header>

          <article className="note-body">
            <p>
              今天这一整天，我都在做一件听起来很"技术"的事：<br />
              给一个 AI 产品加兜底机制。
            </p>
            <p>
              但越往后，我越清楚地意识到——<br />
              我真正做的，并不是在调模型，<br />
              而是在给自己的人生补一层系统设计。
            </p>
            <p>过去很长一段时间，我做事有一个隐形假设：</p>
            <blockquote>
              只要我足够认真、足够努力，就不该失败。
            </blockquote>
            <p>
              所以我习惯把所有压力、责任、兜底都压在自己身上。<br />
              系统一旦出问题，就靠硬扛；<br />
              节奏一旦乱了，就靠自律顶住。
            </p>
            <p>
              直到今天，我第一次非常明确地对自己说了一句话：<br />
              "不对，系统本身就应该允许波动。"
            </p>

            <hr />

            <h2>什么叫有弹性的保底机制</h2>
            <p>它不是摆烂，也不是降低标准。而是三件事：</p>
            <ul>
              <li>在最坏情况下，事情也不会彻底失控</li>
              <li>在判断不充分时，不强行给结论</li>
              <li>在失败发生时，有一个"可退回"的结构，而不是全盘崩塌</li>
            </ul>
            <p>今天我给 AI 做的，就是这样一层结构：</p>
            <ul>
              <li>任何异常，都能返回完整结果</li>
              <li>不确定时，宁可保守、不乱判</li>
              <li>系统永远有一个"能用但不完美"的答案</li>
            </ul>
            <p>然后我突然意识到——这正是我过去最缺的东西。</p>

            <hr />

            <h2>很多人以为的"强"，其实是没保底</h2>
            <p>
              我们常常把"硬撑"误认为成熟，<br />
              把"什么都自己扛"当成能力。
            </p>
            <p>
              但真正稳定的系统，从来不是靠单点意志支撑的，<br />
              而是结构允许出错。
            </p>
            <p>当一个人没有保底机制时：</p>
            <ul>
              <li>他会对失败异常敏感</li>
              <li>会不断透支精力，换取安全感</li>
              <li>会在"看起来很努力"的状态下，慢慢耗空自己</li>
            </ul>
            <p>
              这不是效率问题，<br />
              而是系统设计问题。
            </p>

            <hr />

            <h2>今天，我为自己做了一个决定</h2>
            <p>从今天开始，我不再要求自己：</p>
            <ul>
              <li>每一步都判断正确</li>
              <li>每一次输出都完美</li>
              <li>每个阶段都靠硬撑过去</li>
            </ul>
            <p>我开始有意识地问自己一句话：</p>
            <blockquote>
              如果这一刻失误了，我有没有退路？
            </blockquote>
            <p>
              如果没有，那不是我不够努力，<br />
              而是我该补结构了。
            </p>

            <hr />

            <p>
              建系统，是给产品留退路。<br />
              建保底，是给人生留弹性。
            </p>
            <p>
              这件事，我会慢慢来。<br />
              但我已经开始了。
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
