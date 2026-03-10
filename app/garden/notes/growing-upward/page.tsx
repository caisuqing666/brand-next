import Link from 'next/link';

export default function GrowingUpwardPage() {
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
              <span>2021-08-29</span>
            </div>
            <h1 className="note-title">量，才是最根本的质</h1>
          </header>

          <article className="note-body">
            <p>读九边的《向上生长》，有种大脑炸裂的感觉。</p>
            <p>不是因为内容多复杂，而是因为它把一些我一直知道、却从没认真对待的事，说得特别直白。</p>

            <hr />

            <h2>一、时间分配，先抢位</h2>

            <p>曾经有很长一段时间，我总觉得没时间读书。</p>
            <p>
              后来记录了一周的时间开销，才发现：<br />
              刷微博、刷微信用掉的时间，比我以为的多得多。
            </p>
            <p>读书是重要但不紧急的事。不主动给它分配时间，它就会一直排在队伍末尾，永远轮不到。</p>
            <p>
              于是我给自己定了个小规则：每天先读两页书，读完才能刷手机。<br />
              就这样，两个月后，读书的习惯慢慢长出来了。
            </p>
            <p>不是靠毅力，是靠顺序。</p>

            <hr />

            <h2>二、目标要小到不可能失败</h2>

            <p>《微习惯》里有个核心：目标要小到荒谬。</p>
            <p>
              每天 5 个波比跳。每天读两页。<br />
              小到你根本找不到借口说"今天做不到"。
            </p>
            <p>
              不为难自己，自己才会配合你干活。<br />
              坚持下去，偶尔给自己一点奖励——吃块巧克力，买个心仪的小东西。<br />
              把自己当成另一个人来管理，会发现你根本不了解自己有多容易被哄。
            </p>

            <hr />

            <h2>三、输出倒逼输入</h2>

            <p>书里说，最好的学习方式，是看完就写。</p>
            <p>用自己的语言总结，哪怕只是几行字。</p>
            <p>
              我以前没有这个习惯。读了大量内容，最后发现留不住，也用不上。<br />
              读完就忘，等于没读。
            </p>
            <p>
              让输出倒逼输入——这句话改变了我读东西的方式。<br />
              现在读完什么，都会试着写几行整理。哪怕写得不好，也比什么都不写强。
            </p>
            <p>不是为了写给别人看，是为了让自己真的消化掉。</p>

            <hr />

            <h2>四、数量问题被误解成了质量问题</h2>

            <p>硅谷投资人王川说过一段话，读到的时候，我愣了一下：</p>
            <blockquote>
              所有我们以为的质量问题，大多本质是数量问题，因为数量不够，差几个数量级而已。
              数量就是最重要的质量。最大的误区是，明明是数量不够的问题，却以为瓶颈在于质量，幻想用某种奇技淫巧偷工减料达到目的。
            </blockquote>
            <p>我以为自己做得不够好，是因为方法不对，或者天赋不够。</p>
            <p>
              后来才慢慢接受：大多数时候，是量还不够。<br />
              不是缺少捷径，是缺少次数。
            </p>
            <p>路途漫长。底子还得慢慢厚。</p>
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
