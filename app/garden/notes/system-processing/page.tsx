import Link from 'next/link';

export default function SystemProcessingPage() {
  return (
    <div className="slowroot-container">
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

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>花园</span>
              <span className="note-eyebrow-sep">/</span>
              <span>笔记</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-02-25</span>
            </div>
            <h1 className="note-title">不是情绪处理，是系统处理</h1>
          </header>

          <article className="note-body">
            <p>你上一次面对连续报错，是什么反应？</p>
            <p>
              关掉终端？<br />
              重装系统？<br />
              还是心里悄悄冒出一句——
            </p>
            <p>"可能我真的不适合这个。"</p>
            <p>我最近都有过。</p>

            <hr />

            <p>这几天我在部署 OpenClaw。</p>
            <p>OpenClaw 是一个运行在本地的 AI 代理系统，可以接入 Telegram、跑自动化任务、管理代理链路。</p>
            <p>听起来很酷。实际部署起来：</p>
            <ul>
              <li>Node 装的是 20，OpenClaw 要 22+</li>
              <li>codex 能跑，clawdbot 认证失败</li>
              <li>Telegram 选了 channel，一直 starting provider</li>
              <li>gateway 提示端口 18789 被占用</li>
              <li>Clash 切换静态住宅 IP 后无法刷新</li>
              <li>TUN 模式开了以后，风扇狂转，电脑像要起飞</li>
            </ul>
            <p>不是一个问题。是六个，叠在一起，同时欢迎你。</p>
            <p>（如果你以为"部署 AI 代理"是点几下鼠标的事，我完全理解你当初的幻觉——我也有过。）</p>

            <hr />

            <p><strong>最难的不是报错本身。</strong></p>
            <p>是连续的报错，会产生一种奇怪的累积效应。</p>
            <p>
              第一条：好，我来查。<br />
              第二条：行，我来改。<br />
              第三条：……怎么又有。<br />
              第四条：……是不是哪里根本性地错了？<br />
              第五条：……是不是我哪里根本性地不行？
            </p>
            <p>这就是<strong>线性思维的陷阱</strong>。</p>
            <p>翻译成人话：我们会把"一条报错"升级成"一个判断"。</p>
            <p>
              "报错这么多" → "这件事很复杂"<br />
              → "我可能搞不定" → "我可能不适合"
            </p>
            <p>四步，完成了对自己的一次否定。</p>
            <p>用的不是逻辑，用的是情绪动量。</p>

            <hr />

            <p><strong>后来我学会了一件事：不扩大问题。</strong></p>
            <p>
              端口被占用？查 PID，kill 掉，重启。<br />
              gateway 已在运行？stop，再 start。<br />
              401 报错？检查 Authorization header。<br />
              npm command not found？看 .zshrc，补 PATH。
            </p>
            <p>只看眼前这一条。</p>
            <p>
              不想"整个系统是不是坏了"。<br />
              不想"为什么又是我"。<br />
              不想"这条解决了还有多少在后面等着"。
            </p>
            <p><strong>只处理当前这一条错误。</strong></p>
            <p>
              这不是情绪处理。<br />
              这是系统处理。
            </p>

            <hr />

            <p>《道德经》第63章有一句话：</p>
            <blockquote>
              天下难事，必作于易；天下大事，必作于细。
            </blockquote>
            <p>塔勒布在《反脆弱》里有个相似的逻辑：</p>
            <p>系统不是被单次冲击摧毁的。是被情绪扩大之后的反应，把伤害放大到不可逆。</p>
            <p>现实翻译：</p>
            <p>
              一个报错不会打败你。<br />
              但你对那个报错的解读——<br />
              "这说明我整个方向是错的"——才会把你打败。
            </p>
            <p>线性误区 → 非线性修正 ①：</p>
            <p>
              ✗ 报错多 = 系统有根本性问题 = 我不行<br />
              ✓ 报错多 = 每一条都是独立信息 = 一条一条处理就够了
            </p>

            <hr />

            <p>这件事在跑步里我也遇到过。</p>
            <p>跑马拉松，最难的不是身体，是30公里之后的那段。</p>
            <p>腿已经在抗议，你突然开始算："还有12公里……"</p>
            <p>那一刻，任何线性计算都是伤害。</p>
            <p>唯一有效的做法只有一个：不看全程，只跑脚下这一公里。</p>
            <p>技术系统和身体系统，运作方式出奇地像。</p>
            <p>它们都不喜欢你情绪化地对待它们。</p>
            <p>线性误区 → 非线性修正 ②：</p>
            <p>
              ✗ 遇到复杂性的本能反应：先理解全局<br />
              ✓ 正确的做法：缩小颗粒度，只处理眼前这一单元
            </p>

            <hr />

            <p>有人会说："你这不就是硬撑？撑着撑着把自己撑垮了怎么算？"</p>
            <p>这个反方值得认真回应。</p>
            <p><strong>边界条件在这里：</strong></p>
            <p>系统处理，不等于无限坚持。</p>
            <p>
              如果一条报错查了两小时毫无头绪，<br />
              正确的动作不是再查两小时——<br />
              是换策略：换关键词、换社区、找人问、或者先搁置。
            </p>
            <p>
              如果你的能量状态已经很差，<br />
              继续坐在终端前不是系统处理，是消耗。
            </p>
            <p><strong>系统处理的前提，是你自己的状态稳定。</strong></p>
            <p>
              能量耗尽时，先去睡觉，明天再战。<br />
              这不是失败，这是系统维护。
            </p>

            <hr />

            <p><strong>三条可以直接用的建议</strong></p>
            <p>如果你也经常在面对复杂任务时陷入情绪螺旋：</p>
            <p><strong>① 把所有问题写出来，物理地隔离它们</strong></p>
            <p>
              不要让五个报错同时住在脑子里。<br />
              开一个文档，把所有问题列出来。<br />
              然后只看第一条。
            </p>
            <p>视觉化的隔离，比脑子里的隔离有效10倍。</p>
            <p><strong>② 给每条问题设一个"处理时钟"</strong></p>
            <p>
              每条问题，最多处理25分钟（一个番茄钟）。<br />
              时间到，不管解没解决，记录当前状态，停下来。<br />
              不把全部精力押注在单一问题上，保持整体节奏。
            </p>
            <p><strong>③ 区分"事实"和"判断"</strong></p>
            <p>
              当你开始想"这是不是说明我……"时，<br />
              立刻把这句话写下来，然后问自己：
            </p>
            <p>这是事实，还是我的解读？</p>
            <p>
              大多数时候，你会发现：<br />
              那只是一条报错，不是一个命运。
            </p>

            <hr />

            <p>我不再把部署成功当炫耀。</p>
            <p>那只是结果。</p>
            <p>真正值得记录的，是过程里的状态：</p>
            <p>
              我没有关掉终端。<br />
              我没有重装系统。<br />
              我没有说"算了"。
            </p>
            <p>我只是坐在那里，把错误信息读完。</p>
            <p>然后处理下一条。</p>
            <p><strong>在混乱里，我没有失序。</strong></p>
            <p>这才是我想写下来的东西。</p>
            <p>一条一条拆。不是情绪处理，是系统处理。</p>
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
