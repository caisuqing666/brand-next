import Link from 'next/link';

const archiveRules = [
  {
    title: '为什么要留 Archive',
    body: [
      '因为工具不只需要出生，也需要有地方体面地退场。',
      '如果一个系统只能不断往前加，却没有地方安放旧版本，它就很容易开始假装自己一直正确。',
      '而 slowroot 不想这样。它更愿意承认：有些东西曾经有用，后来不再适合继续放在前台，这很正常。',
    ],
  },
  {
    title: '这里收的，不是失败品',
    body: [
      '不是所有退下去的东西都等于失败。',
      '有些版本只是完成了它那一阶段的任务。有些想法在当时确实照亮过问题，只是后来系统长大了，它们不再适合继续占据入口。',
      '所以 Archive 不是废墟，而是 slowroot 给旧版本留下的位置。',
    ],
  },
  {
    title: '它保存的，不只是旧文件',
    body: [
      '真正值得留下来的，常常不是一个旧页面本身，而是它背后那次判断为什么会成立，又为什么后来失效。',
      '版本变化被留下来，判断变化也会被留下来。',
      '这对我来说很重要。因为一个系统如果看不见自己的演化，很容易把阶段性的选择误认成永恒的答案。',
    ],
  },
  {
    title: '什么以后会放进这里',
    body: [
      '暂时会放进这里的，不是所有旧东西，而是那些曾经真的承担过作用、后来又不再适合继续放在前台的样本。',
      '可能是旧版本工具，可能是被替换的入口，可能是已经完成历史任务的界面和命名。',
      '它们之所以会被收进来，不是因为无关紧要，而是因为它们已经完成了属于自己的阶段。',
    ],
  },
];

export default function ToolsArchivePage() {
  return (
    <div className="slowroot-container">
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">slowroot</Link>
          <div className="nav-links">
            <Link href="/garden" className="nav-link">花园</Link>
            <Link href="/practice" className="nav-link">实践</Link>
            <Link href="/tools" className="nav-link active">工具</Link>
            <Link href="/about" className="nav-link">关于</Link>
          </div>
        </div>
      </nav>

      <main className="note-page">
        <div className="note-shell">
          <header className="note-head">
            <div className="note-eyebrow">
              <span>工具</span>
              <span className="note-eyebrow-sep">/</span>
              <span>Archive</span>
            </div>
            <h1 className="note-title">给旧版本留下位置</h1>
            <p className="notes-page-subtitle">
              Archive 不是废墟，而是 slowroot 给旧版本留下的位置。
            </p>
          </header>

          <article className="note-body">
            <p>系统长大以后，我越来越觉得，“继续留下什么”很重要，“让什么退下去”也同样重要。</p>
            <p>如果所有版本都永远堆在前台，页面会越来越重，判断也会越来越不清楚。</p>
            <p>但如果旧东西一被替换就彻底消失，很多真实的演化过程也会一起被抹掉。</p>
            <p>所以我想给 Archive 留出一个位置。</p>

            <hr />

            {archiveRules.map((section, index) => (
              <section key={section.title}>
                <h2>{index + 1}、{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <hr />

            <p>现在这里还不会立刻塞进很多内容。</p>
            <p>我更想先把它的边界说清楚：它不是杂物间，也不是怀旧角落。</p>
            <p>为了让系统不要假装自己一直正确。</p>
            <p>为了把版本变化留下来，也把判断变化留下来。</p>
            <p>它是系统整理的一部分。用来承认变化，也承认有些版本该退回土里。</p>
          </article>

          <section className="garden-section" style={{ marginTop: '2.5rem' }}>
            <div className="garden-header">
              <span className="evidence-eyebrow">继续往下看</span>
            </div>
            <div className="garden-grid" style={{ gridTemplateColumns: '1fr' }}>
              <Link href="/tools" className="garden-node">
                <h3 className="node-title">回到工具组</h3>
                <p className="node-question">如果你想回到 slowroot 当前还留在前台的四个工具入口，可以从这里回去。</p>
              </Link>
            </div>
          </section>

          <Link href="/tools" className="note-back">← 回到工具</Link>
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
