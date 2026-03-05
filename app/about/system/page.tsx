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
            <Link href="/library" className="nav-link">资源</Link>
            <Link href="/about" className="nav-link active">关于</Link>
          </div>
        </div>
      </nav>

      <main style={{ 
        paddingTop: '8rem',
        paddingBottom: '4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        maxWidth: '720px',
        margin: '0 auto'
      }}>
        {/* 第一屏：标题 + 引导句 */}
        <h1 style={{ 
          fontSize: '1.75rem',
          fontWeight: 600,
          color: 'var(--structure)',
          lineHeight: 1.5,
          marginBottom: '2rem'
        }}>
          这不是一组工具。<br />
          这是我的判断系统。
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--structure-soft)',
          lineHeight: 1.8,
          marginBottom: '3rem'
        }}>
          在信息越来越多的时代，我更在意：如何判断，而不是如何做更多。
        </p>

        {/* 五模块串联 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* 1. 临在之锚 */}
          <section>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--structure)', marginBottom: '0.5rem' }}>
              临在之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              入口：回到自己。
            </p>
            <a href="https://metafield.cc" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}>
              metafield.cc →
            </a>
          </section>

          {/* 2. 判断之锚 */}
          <section>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--structure)', marginBottom: '0.5rem' }}>
              判断之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              方向：做选择。
            </p>
            <Link href="/garden/judgment" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}>
              /garden/judgment →
            </Link>
            {/* 子项：Gallup Tool */}
            <div style={{ marginTop: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border)' }}>
              <p style={{ color: 'var(--structure-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                子项：Gallup Tool（判断引擎）
              </p>
              <a href="https://gallup-tool.com" target="_blank" rel="noopener noreferrer" style={{ 
                color: 'var(--accent-on-light)', 
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                gallup-tool.com →
              </a>
            </div>
          </section>

          {/* 3. EndOfDay */}
          <section>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--structure)', marginBottom: '0.5rem' }}>
              EndOfDay
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              行动：只做三件。
            </p>
            <Link href="/practice" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}>
              /practice →
            </Link>
          </section>

          {/* 4. 花园 */}
          <section>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--structure)', marginBottom: '0.5rem' }}>
              花园
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              复盘沉淀。
            </p>
            <Link href="/garden/review" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}>
              /garden/review →
            </Link>
          </section>

          {/* 5. slowroot */}
          <section>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--structure)', marginBottom: '0.5rem' }}>
              slowroot
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              公开样本。
            </p>
            <Link href="/" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}>
              首页 →
            </Link>
          </section>
        </div>

        {/* 宪法（末尾） */}
        <div style={{ 
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)'
        }}>
          <p style={{ color: 'var(--structure-muted)', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            宪法
          </p>
          <ul style={{ 
            color: 'var(--structure-soft)', 
            lineHeight: 2, 
            fontSize: '0.95rem',
            listStyle: 'none',
            padding: 0
          }}>
            <li>判断先于行动</li>
            <li>结构先于工具</li>
            <li>时间先于速度</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          判断先于行动。结构先于工具。时间先于速度。
        </p>
      </footer>
    </div>
  );
}
