import Link from 'next/link';

export default function FirstFullMarathonPage() {
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
              <span>2021-10-03</span>
            </div>
            <h1 className="note-title">没有人是单独完成一场马拉松的</h1>
          </header>

          <article className="note-body">
            <p>中签汉马两年了，疫情一直没让它开跑。</p>
            <p>
              那段时间，训练时断时续，连一个像样的半马都没跑过。<br />
              不知道自己的体能还剩多少，也不知道能撑到汉马正式开赛的那一天。
            </p>
            <p>
              国庆节前，我心一横：先给自己跑一个全马。<br />
              就算跑不完，随时弃赛。不求成绩，只求完赛。
            </p>
            <p>那个念头冒出来的瞬间，我也被自己吓到了。</p>

            <hr />

            <h2>一、开跑</h2>

            <p>5:34，大宁郁金香公园，正式出发。</p>
            <p>
              前两公里，心率直接飙到 180 以上。<br />
              只能降速慢走。我给自己一个底线：如果心率始终高于 160，今天的目标就改成 10 公里。<br />
              安全，比完赛重要。
            </p>
            <p>
              5 分钟慢走之后，心率慢慢降回了 130-140 的有氧区间。<br />
              700 配速，重新启动。
            </p>
            <p>5 公里。10 公里。节奏开始稳下来。</p>
            <p>
              7 公里的时候，碰到了跑团的团副。<br />
              听说我的目标是全马，他立刻把自己今天的计划从 10 公里调整成陪跑 15 公里。<br />
              后来，又遇到了建仓和缘。团副跟他们沟通，每个人轮流陪跑几公里。
            </p>
            <p>就这样，一段接一段，跑到了半程。</p>

            <hr />

            <h2>二、崩溃，在第 35 公里</h2>

            <p>行百里者半九十，这句话在 35 公里之后变得很真实。</p>
            <p>
              先是胃部不适，肋胁部胀痛，只能跑走结合。<br />
              节奏乱了，很难再回到原来的配速。
            </p>
            <p>37 公里，右腿小腿开始隐隐抽筋。</p>
            <p>气温爬到了 30 度。</p>
            <p>
              40 公里。41 公里。42 公里。<br />
              每一公里都变得很漫长。<br />
              最后那段路，是老公陪我慢慢走完的。
            </p>
            <p>
              终于完赛。<br />
              那一刻，内心竟然出奇地平静。
            </p>

            <hr />

            <h2>三、跑完之后留下来的</h2>

            <p>
              <strong>马拉松是水到渠成的极限之旅。</strong>
            </p>
            <p>
              侥幸和取巧，在真正的笨功夫面前相形见绌。<br />
              你跑过的每一步，你的心肺、肌肉、骨骼，都有记忆。<br />
              这种积累，不是短期内能建立的。
            </p>
            <p>我们总是太急躁，总期待今天耕耘，明天就收获。</p>
            <p>马拉松不是这样的。勉强跑完，之后可能是更严重的损伤。坚持，有时候不是美德，而是危险。</p>
            <p>
              <strong>一切都靠积累。</strong>
            </p>
            <p>
              满池的荷花，最后一天开出整个池塘的一半。<br />
              每天进步一点点，表面上看不出什么变化。<br />
              但那是整个系统在打地基——一直到有一天，一切都不一样了。
            </p>
            <p>
              <strong>成事，是一群人的奥德赛。</strong>
            </p>
            <p>
              如果没有团副、陈老师、建仓和缘，我大概率中途放弃了。<br />
              一句鼓励、一段陪伴，能激发一个人身上原本藏着的东西。<br />
              人不是孤岛，优秀的团体会把人带到更远的地方。
            </p>

            <hr />

            <p>一个没有全马记录的跑者，不是一个合格的马拉松跑者——这句话，我一直在心里放着。</p>
            <p>现在它可以放下了。</p>
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
