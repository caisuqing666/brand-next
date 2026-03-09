import Link from 'next/link';

export default function JustBeHappyPage() {
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
              <span>生活</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2021-12-03</span>
            </div>
            <h1 className="note-title">那就快乐</h1>
          </header>

          <article className="note-body">
            <p>不知不觉，距离 2022 年只剩不到一个月了。</p>
            <p>
              回头看这一年，疫情依然笼罩，马路上已然车水马龙。<br />
              广播里反复播报防疫提示，熙熙攘攘的人群行色匆匆。<br />
              日子还是在过，和往常差不多，也和往常不太一样。
            </p>

            <hr />

            <p>这一年，学会了谢谢。</p>
            <p>
              用"谢谢"开头，用"谢谢"结尾。<br />
              在一天醒来时，先谢谢自己拥有的一切：<br />
              可以自在呼吸，可以畅快喝水，可以出门走路。<br />
              这些太平常了，平常到很容易忘记。
            </p>

            <hr />

            <p>这一年，学会了行动。</p>
            <p>
              早起。晨跑。读书。投资。<br />
              有了想法，就去试一试。<br />
              不等到什么都准备好，先动起来再说。
            </p>

            <hr />

            <p>这一年，学会了等待。</p>
            <p>
              播下种子，不一定马上有收获。<br />
              保持耐心，做时间的朋友。<br />
              有些事，急不来，也不必急。
            </p>

            <hr />

            <p>日子有时快乐，有时失落。生活依旧继续。</p>
            <p>
              午后的阳光还是耀眼，银杏的叶片还是闪亮，<br />
              咖啡还是香，蛋糕还是甜。
            </p>
            <p>
              播下种子，打造自己的花园。<br />
              以平常心重复相同的日子，认真过好每一天，培育自己的种子。<br />
              终有一天，会迎来时间之花的绽放。
            </p>

            <hr />

            <p>生活没什么不好。</p>
            <p>那就快乐。</p>
          </article>

          <Link href="/practice/life" className="note-back">← 回到生活</Link>
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
