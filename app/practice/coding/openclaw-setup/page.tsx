import Link from 'next/link';

export default function OpenClawSetupPage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link active">实践</Link>
            <Link href="/tools" className="nav-link">工具</Link>
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
              <span>技术学习</span>
              <span className="note-eyebrow-sep">/</span>
              <span>2026-03-01</span>
            </div>
            <h1 className="note-title">从报错到自治：OpenClaw 系统构建实录</h1>
          </header>

          <article className="note-body">
            <p>
              2026 年 1 月，OpenClaw 在不到两周内突破 17 万 GitHub Stars，成为 GitHub 历史上增长最快的开源项目之一。
            </p>
            <p>它不是普通聊天机器人。它是一个可以 7×24 小时运行在自己服务器上的 AI Agent——</p>
            <ul>
              <li>有"眼睛"，能浏览网页</li>
              <li>有"双手"，能操作系统</li>
              <li>能写代码、管理文件、处理任务</li>
            </ul>
            <p>
              它不是问答工具。<br />
              它是执行系统。
            </p>
            <p>这篇文章记录我从踩坑到跑通的全过程，也分享背后的结构思路。</p>

            <hr />

            <h2>一、为什么要自建？</h2>
            <p>在决定折腾之前，我问了自己三个问题：</p>
            <ul>
              <li>我是否希望 AI 24 小时运行，而不是靠我手动触发？</li>
              <li>我是否希望控制权在自己，而不是完全依赖某个平台？</li>
              <li>我是否希望规则写好后，系统自动执行，而不是靠意志力？</li>
            </ul>
            <p>如果答案是"是"，那就值得折腾。</p>
            <p>
              自建的意义不是炫技。<br />
              而是——把执行权从"情绪"交给"系统"。
            </p>

            <hr />

            <h2>二、安装 OpenClaw</h2>
            <p>OpenClaw 支持 Mac / Windows / Linux。推荐 Linux 服务器部署，但本地测试也完全可行。</p>
            <p>安装只需一行命令：</p>
            <pre><code>curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>
            <p>这一行命令会自动：检测系统环境、安装 Node.js（≥22）、注册系统守护进程。</p>
            <p>安装完成后确认版本：</p>
            <pre><code>openclaw --version</code></pre>
            <p>首次运行会进入 onboarding 向导，建议这样处理：</p>
            <ul>
              <li>Gateway Port：默认 18789</li>
              <li>Gateway Bind：Loopback（飞书长连接无需公网）</li>
              <li>AI Provider：先跳过</li>
              <li>Chat Channel：先跳过</li>
              <li>Skills：先跳过</li>
            </ul>
            <p>核心原则：先跑通主流程，不要一开始追求完整功能。</p>

            <hr />

            <h2>三、配置 AI Provider</h2>
            <p>前面跳过了 provider，现在补上。这一步决定系统能否真正"开口"。</p>
            <p>我使用的是 MiniMax 2.5，国内访问稳定，响应速度不错。</p>
            <p>打开配置文件：</p>
            <pre><code>openclaw config edit</code></pre>
            <p>在 providers 中写入：</p>
            <pre><code>{`providers:
  - name: minimax
    type: minimax
    apiKey: "你的 MiniMax API Key"
    model: "abab6.5s-chat"`}</code></pre>
            <p>保存后重启：</p>
            <pre><code>openclaw gateway restart</code></pre>
            <p>API Key 在 MiniMax 开放平台申请即可。</p>

            <hr />

            <h2>四、对接飞书机器人</h2>
            <p>OpenClaw 内置飞书 channel 支持。采用 WebSocket 长连接——无需公网回调地址，无需验证 IP，配置比大多数渠道简单一个量级。</p>

            <p><strong>4.1 创建飞书应用</strong></p>
            <ul>
              <li>登录 open.feishu.cn</li>
              <li>创建「企业自建应用」</li>
              <li>添加能力 → 选择「机器人」</li>
            </ul>

            <p><strong>4.2 添加权限</strong></p>
            <p>在「权限管理」中添加：</p>
            <pre><code>{`im:message
im:message:send_as_bot
im:chat:readonly
contact:user.id:readonly`}</code></pre>

            <p><strong>4.3 事件订阅（重点）</strong></p>
            <p>进入「事件与回调」：</p>
            <ul>
              <li>订阅方式：选择"使用长连接接收回调"</li>
              <li>添加事件：<code>im.message.receive_v1</code></li>
            </ul>
            <p>一定要选择长连接模式。这是无需公网地址的关键。</p>

            <p><strong>4.4 发布应用</strong></p>
            <p>创建版本 → 提交发布。</p>

            <p><strong>4.5 写入 OpenClaw 配置</strong></p>
            <p>填入 App ID 与 App Secret，重启 gateway：</p>
            <pre><code>openclaw gateway restart</code></pre>
            <p>查看日志确认连接：</p>
            <pre><code>tail -f ~/.openclaw/logs/*.log | grep -i feishu</code></pre>
            <p>看到 <code>feishu connected</code> 即成功。</p>

            <hr />

            <h2>五、跑通的那一刻</h2>
            <p>我在飞书群里发了一条消息：</p>
            <blockquote>ping</blockquote>
            <p>屏幕上出现输入动画。几秒后，它回：</p>
            <blockquote>pang</blockquote>
            <p>
              就一个字。但那一刻我知道——<br />
              这条链路通了。<br />
              AI 收到指令、处理、回应。<br />
              不是我点按钮，是系统在运行。
            </p>
            <p>三天折腾，值了。</p>

            <hr />

            <h2>六、踩坑归类：其实只有三类问题</h2>
            <p>三天里踩了不少坑。但冷静下来，所有问题都能归类为三种：</p>

            <p><strong>① 环境冲突</strong></p>
            <p>Node 版本不匹配、代理端口变更未同步。</p>
            <p>解决：统一运行环境，用 nvm 管理版本，必要时重启系统。</p>

            <p><strong>② 进程状态残留</strong></p>
            <p>端口占用、Gateway 僵死、认证失败。</p>
            <p>解决：杀进程，重启 gateway。</p>

            <p><strong>③ 版本配置不匹配</strong></p>
            <p>OpenClaw 迭代极快，不同版本字段结构可能不同。</p>
            <pre><code>openclaw --version</code></pre>
            <p>确认版本，再查对应文档。</p>
            <p>
              当你能把错误归类，焦虑会消失。<br />
              调试不再是混乱，而是拆分。
            </p>

            <hr />

            <h2>七、从工具到系统</h2>
            <p>
              在飞书发一条指令。<br />
              几十秒后，AI 自动执行。
            </p>
            <p>那一刻我意识到：这不是聊天。这是一种新的执行方式。</p>
            <p>
              我写规则。<br />
              系统执行。<br />
              不依赖意志力。
            </p>
            <p>这和投资纪律、跑步节律是同一个逻辑：</p>
            <p>
              想明白，然后自动执行。<br />
              把决策放在清醒时。<br />
              把执行交给系统。<br />
              不让情绪插手。
            </p>
            <p>
              OpenClaw 只是工具。<br />
              真正跑通的，是"系统思维"。
            </p>

            <hr />

            <h2>八、写在最后</h2>
            <p>OpenClaw 的 logo 是一只龙虾。</p>
            <p>
              龙虾蜕壳时很痛。<br />
              但每一次蜕壳，都会长出更大的自己。
            </p>
            <p>部署 AI 也是一样。</p>
            <p>
              不要一次搞定所有。<br />
              先跑通主链路。<br />
              出错了，归类，拆解，再跑。
            </p>
            <p>
              系统会越来越稳。<br />
              你也会。
            </p>
          </article>

          <Link href="/practice/coding" className="note-back">← 回到技术学习</Link>

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
