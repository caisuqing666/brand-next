import Link from 'next/link';

export default function RunningAndCodePage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link active">实践</Link>
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
              <span>实践</span>
              <span className="note-eyebrow-sep">/</span>
              <span>跑步</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2025-12-04</span>
            </div>
            <h1 className="note-title">在跑步与代码之间，我找到了自己的节奏</h1>
          </header>

          <article className="note-body">

            <h2>01. 最近的我，一直在"跑步—写代码—生活"之间循环</h2>
            <p>过去这半个月，我的生活像被拆成了几段安静的任务：</p>
            <p>
              清晨跑步、白天学习 Next.js、晚上整理 Supabase、<br />
              又或者为页面调一块温柔的奶油色背景。
            </p>
            <p>有时候我觉得自己像在同时练两门"需要耐心的功夫"——</p>
            <p>
              一个锻炼身体，一个锻炼大脑，<br />
              但本质上，它们都在训练我：<br />
              如何在混乱中建立自己的秩序。
            </p>

            <hr />

            <h2>02. 跑步让我稳定，代码让我清醒</h2>
            <p>
              跑步对我来说，不是锻炼。<br />
              更像是给身体按下一个 reset command。
            </p>
            <p>
              这段时间，因为陪家人看病、处理日常生活，有很多心烦的瞬间。<br />
              但奇怪的是，只要我踏上跑道，气息变得均匀，脚步一点点稳下来：<br />
              我的心就跟着慢慢顺了。
            </p>
            <p>
              身体的节奏，会把心里的雾轻轻吹开。<br />
              尤其是那天，我跑完 6 公里回来，突然发现：<br />
              我的焦虑不是事情太多，而是结构太乱。
            </p>

            <hr />

            <h2>03. 学 Next.js 的这些天，我看见了自己思维的秩序</h2>
            <p>我最近在做的事情有：</p>
            <ul>
              <li>给跑步系统加"本月统计 / 今年总里程 / 心情最多 emoji"</li>
              <li>调整页面 UI，让它更像"蔡蔡的小宇宙"</li>
              <li>为跑步日记写数据结构</li>
              <li>调小组件间距、调背景色、写假数据、再修 Supabase</li>
              <li>被路由冲突卡住，被数据库连接困住，但一次次 debug</li>
              <li>学会了用组件、用 props、用状态</li>
              <li>学会把复杂的东西拆成三个小函数</li>
              <li>学会了"能跑就跑，不纠结 95 分"</li>
            </ul>
            <p>这些东西写在这里，可能有点技术，但经历的时候，它们比技术更像：</p>
            <p>我在训练自己的思维，让它不再混乱，不再失控。</p>
            <p>
              我以前总觉得自己是心里世界很大但结构杂乱的那种类型。<br />
              但写代码的过程，让我第一次真正"看见"了自己内在的秩序：<br />
              文件要放在对的位置、API 要清晰、状态要拆开、每一步都要明确。
            </p>
            <p>原来我的大脑，其实是适合沉下去、构建系统的。这是一种很新的体验。</p>

            <hr />

            <h2>04. 最意外的成长，是"跑步和写代码"开始相互帮助</h2>
            <p>
              有一天，我在 page.tsx 卡住了，找不到组件路径。<br />
              Cursor 提示我"可能是缓存问题"，但我还是看不出来。
            </p>
            <p>我当时有点想放弃，于是关掉电脑，去跑了 5 公里。</p>
            <p>
              第三公里的时候，我突然意识到：<br />
              我把这件事想复杂了。
            </p>
            <p>
              回到电脑前，我重新看了一遍文件结构，<br />
              把 components 文件夹统一放在 app 下面。<br />
              路径一下就正常了。
            </p>
            <p>那一刻我发现：</p>
            <blockquote>
              跑步给我的不是身体力量，<br />
              而是一种"极简而坚定的清晰"。<br />
              它会在我最乱的时候，把我再放回正轨。
            </blockquote>

            <hr />

            <h2>05. 46 岁开始写代码，我知道自己不是在赶时间，而是在回家</h2>
            <p>这句话我在这几周里反复对自己说。</p>
            <ul>
              <li>46 岁开始学习 Next.js</li>
              <li>重新搭建自己的网站</li>
              <li>整理自己的跑步系统</li>
              <li>建构自己的内容体系</li>
              <li>把灵魂交给文字</li>
              <li>把逻辑交给代码</li>
              <li>把力量交给跑道</li>
            </ul>
            <p>这条路，比我想象得更慢、也更稳。但我越来越确定：</p>
            <p>
              我不是在"学点技能"，<br />
              我是在建一个可以长期托住自己的系统。
            </p>
            <p>
              一个我可以依靠的系统。<br />
              一个能接住我的系统。
            </p>

            <hr />

            <h2>06. 最后的话：我想继续这样走下去</h2>
            <p>
              每天一点点，像跑步一样，不着急、不焦虑。<br />
              写不出 95 分也没关系，<br />
              能写 80 分的系统，就已经比昨天更稳了。
            </p>
            <p>
              我知道未来这 90 天，我会继续遇见很多卡点：<br />
              路由、数据库、UI、多端适配、VPS、环境变量……
            </p>
            <p>
              但只要我沿着自己的节奏跑，<br />
              心会变得越来越清晰，<br />
              系统会变得越来越属于我，<br />
              生活也会一点点长成我喜欢的样子。
            </p>
            <p>在跑步与代码之间，我正在成为那个终于可以接住自己的大人。</p>

          </article>

          <Link href="/practice/running" className="note-back">← 回到跑步</Link>
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
