import Link from 'next/link';

export default function SystemPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
            <Link href="/about" className="nav-link active">关于</Link>
          </div>
        </div>
      </nav>

      <main className="system-page">
        <div className="system-shell">

          {/* 标题 */}
          <header className="system-head">
            <p className="system-eyebrow">关于 / 系统</p>
            <h1 className="system-title">
              这不是一套效率系统。<br />
              它更像一次判断之后，<br />
              慢慢长出来的骨架。
            </h1>
          </header>

          {/* 引言：判断的起点 */}
          <div className="system-lead">
            <p>
              我越来越在意"判断"，<br />
              不是因为我想做得更多。<br />
              恰恰相反，<br />
              是因为我终于明白：
            </p>
            <p>
              有些人不该再扶，<br />
              有些事不必再做，<br />
              有些结构，本来就应该放弃。
            </p>
            <p>
              对我来说，判断不是技巧。<br />
              它更像一次觉醒。
            </p>
            <p>
              从一味付出，<br />
              到开始看清什么值得继续，<br />
              什么应该离开。
            </p>
            <p>slowroot，就是从这里长出来的。</p>
          </div>

          {/* 章节一：临在 */}
          <section className="system-chapter">
            <div className="system-prose">
              <p>
                在这套系统里，<br />
                临在不是背景，也不是安慰。<br />
                它是判断的前提。
              </p>
              <p>
                所谓临在，<br />
                不是抽象地"活在当下"，<br />
                而是全然回到自己，<br />
                站在自己当下的时点、情境与感受里，<br />
                再决定去还是留。
              </p>
              <p>
                如果没有这一步，<br />
                后面的分析常常只是惯性，<br />
                不是判断。
              </p>
              <p>
                我做临在之锚，<br />
                也是因为自己思维太多、太乱的时候，<br />
                需要一种方式先清空自己，回到自己。<br />
                不是为了逃开现实，<br />
                而是为了在进入现实之前，<br />
                先不被内在噪音带走。
              </p>
            </div>
            <a
              href="https://metafield.cc"
              className="system-tool-ref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tool-ref-label">临在之锚</span>
              <span className="tool-ref-hint">在判断之前，先回到自己。</span>
              <span className="tool-ref-link">metafield.cc →</span>
            </a>
          </section>

          {/* 章节二：结构判断 + Gallup */}
          <section className="system-chapter">
            <div className="system-prose">
              <p>
                我后来越来越发现，<br />
                好的判断，往往不是情绪判断，<br />
                而是结构判断。
              </p>
              <p>
                关系里是这样。<br />
                投资里也是这样。
              </p>
              <p>
                硬要去扶"扶不起的阿斗"，属于判断失衡。
              </p>
              <p>
                一个跌了很多的资产，值不值得进入，<br />
                也不是先看价格，<br />
                而是先看它未来的结构是否健康。
              </p>
              <p>
                表面会变。价格会变。情绪也会变。<br />
                但结构，往往更接近事情真正的底色。
              </p>
              <p>
                所以我做 Gallup Tool，<br />
                不是为了多一个分析工具，<br />
                而是想给"判断"一个更清醒的语言。
              </p>
              <p>
                我越来越在意的，不是一个人"有什么优势"，<br />
                而是：<br />
                这些优势怎样进入现实判断，<br />
                又怎样不在过载中反过来压垮自己。
              </p>
              <p>
                理解自己，不是为了自我陶醉。<br />
                而是为了更清楚地判断：<br />
                什么适合，什么不适合；<br />
                什么值得，什么不值得。
              </p>
            </div>
            <a
              href="https://gallup-tool.com"
              className="system-tool-ref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tool-ref-label">Gallup Tool</span>
              <span className="tool-ref-hint">把优势语言带进判断现场。</span>
              <span className="tool-ref-link">gallup-tool.com →</span>
            </a>
          </section>

          {/* 章节三：执行落地 */}
          <section className="system-chapter">
            <div className="system-prose">
              <p>
                判断之后，<br />
                总要落进现实。
              </p>
              <p>
                对我来说，执行不是激励自己狠狠干。<br />
                它更像每天的晨跑。<br />
                不是靠情绪推动，<br />
                也不是靠意志硬撑，<br />
                而是把一些重要的动作，<br />
                慢慢编进生活。
              </p>
              <p>
                让思维落进现实。<br />
                让判断不是停在脑中，<br />
                而是真的形成一点点可见的东西。
              </p>
              <p>
                所以后来有了今日三件。<br />
                它背后的想法很简单：
              </p>
              <p>
                重要的事并不多。<br />
                重要的事，才值得认真花时间做好。
              </p>
              <p>
                它不是一个鼓励你塞满生活的工具。<br />
                恰恰相反，<br />
                它更像一种"少即是多"的练习。<br />
                把一天收束到真正成立的三件事，<br />
                人反而比较不容易乱。
              </p>
            </div>
            <a
              href="https://endofday.site"
              className="system-tool-ref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tool-ref-label">EndOfDay · 今日三件</span>
              <span className="tool-ref-hint">把一天收束到真正成立的三件事。</span>
              <span className="tool-ref-link">endofday.site →</span>
            </a>
          </section>

          <section className="system-chapter">
            <div className="system-prose">
              <p>
                但有些时刻，<br />
                人不是马上需要更多分析，<br />
                也不是马上需要下一步行动。<br />
                只是需要一面镜子，<br />
                先把自己此刻正在感受到的东西照出来。
              </p>
              <p>
                所以我把赛博问卜也放进这组外链工具里。<br />
                它不是为了神秘感，<br />
                也不是为了替人决定。<br />
                它更像一个轻一点的接口，<br />
                让那些已经浮到心口、却还没被语言抓住的东西，<br />
                有机会显形。
              </p>
              <p>
                对我来说，<br />
                它的价值不在于给出答案，<br />
                而在于帮人看清当下。<br />
                先看见，<br />
                才谈得上判断。
              </p>
            </div>
            <a
              href="https://wenbu.cc"
              className="system-tool-ref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tool-ref-label">赛博问卜</span>
              <span className="tool-ref-hint">借一面镜子，看清当下。</span>
              <span className="tool-ref-link">wenbu.cc →</span>
            </a>
          </section>

          {/* 章节四：结构与底盘 */}
          <section className="system-chapter">
            <div className="system-prose">
              <p>
                而在所有这些东西下面，<br />
                结构始终是我最在意的根据。
              </p>
              <p>
                结构不是情绪。<br />
                也不依赖意志。<br />
                它比一时的感受更慢，<br />
                也比一时的冲动更稳。
              </p>
              <p>
                很多时候，我们的问题不是不够努力，<br />
                而是根本没有看清自己正站在什么结构里。
              </p>
              <p>
                如果结构已经失衡，<br />
                继续用力，<br />
                往往只会把人带得更远。
              </p>
              <p>
                所以我越来越相信：<br />
                真正有效的判断，<br />
                不是靠多想一点，<br />
                而是靠先看清结构。
              </p>
              <p>
                跑步是我的底盘。<br />
                回到身体，是最重要的一步。
              </p>
              <p>
                写作则是另一种整理。<br />
                像跑步一样，<br />
                很多事不是坐着想就能想清楚的。<br />
                它需要经过身体，<br />
                也需要被语言慢慢沉淀下来，<br />
                才能长成可承载的结构。
              </p>
              <p>
                所以后来，<br />
                我写东西、做工具、整理系统，<br />
                都不再只是为了表达。<br />
                而是想把一种真实可用的判断方式，<br />
                慢慢留下来。
              </p>
            </div>
          </section>

          {/* 章节五：生长 */}
          <section className="system-chapter">
            <div className="system-prose">
              <p>
                而"生长"，<br />
                是整个系统里最感性、也最有希望的部分。
              </p>
              <p>
                因为判断不是为了把人变得更硬，<br />
                也不是为了把生活控制得滴水不漏。
              </p>
              <p>
                判断真正想保护的，<br />
                其实是那些值得继续生长的部分。
              </p>
              <p>
                有些东西，<br />
                在看清之后会被放下。<br />
                有些东西，<br />
                也会在看清之后，终于可以慢慢长出来。
              </p>
              <p>
                所以 slowroot 不是一个关于"更快"的系统。<br />
                它更像一个关于"长对"的系统。
              </p>
              <p>
                慢，不是拖延。<br />
                根，也不是停住。
              </p>
              <p>
                慢，是节奏。<br />
                根，是结构。<br />
                而生长，<br />
                是当一个人终于开始在适合自己的结构里，<br />
                向上，也向下。
              </p>
            </div>
          </section>

          {/* 结语 */}
          <footer className="system-closing">
            <p>
              这里不是答案。<br />
              也不是一套要别人照着走的标准流程。
            </p>
            <p>
              它只是我一路走来，<br />
              慢慢长出来的一套判断系统。
            </p>
            <p>
              有些部分已经比较清楚，<br />
              有些部分还在继续生长。
            </p>
            <p>
              但我希望来到这里的人，<br />
              看到的不是一个人做了多少事，<br />
              而是一种结构化的判断，<br />
              以及一种不同的生长方式。
            </p>
          </footer>

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
