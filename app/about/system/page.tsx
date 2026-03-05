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

      {/* 第一屏：系统地图核心信息 */}
      <div style={{ 
        paddingTop: '8rem',
        paddingBottom: '3rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2rem',
          fontWeight: 600,
          color: 'var(--structure)',
          marginBottom: '1.5rem'
        }}>
          系统地图
        </h1>
        <p style={{ 
          fontSize: '1.25rem',
          color: 'var(--structure-soft)',
          lineHeight: 1.8,
          marginBottom: '0.5rem'
        }}>
          这不是一组工具。这是我的判断系统。
        </p>
        <p style={{ 
          fontSize: '1rem',
          color: 'var(--structure-muted)',
          lineHeight: 1.8,
          marginBottom: '3rem'
        }}>
          五个模块，从临在到复盘，形成完整闭环。
        </p>

        {/* 五模块串联 */}
        <div style={{ 
          display: 'grid',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {/* 1. 临在之锚 */}
          <div style={{ 
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-on-light)',
            paddingLeft: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              1. 临在之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              降噪、归位、回到当下。
            </p>
            <a href="https://metafield.cc" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              metafield.cc →
            </a>
          </div>

          {/* 2. 判断之锚 */}
          <div style={{ 
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-on-light)',
            paddingLeft: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              2. 判断之锚
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              方向判断、结构化决策。
            </p>
            <div style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
              <span style={{ color: 'var(--structure-muted)', fontSize: '0.85rem' }}>子项：</span>
              <a href="https://gallup-tool.com" target="_blank" rel="noopener noreferrer" style={{ 
                color: 'var(--accent-on-light)', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                marginLeft: '0.5rem'
              }}>
                Gallup Tool（判断引擎）→ gallup-tool.com
              </a>
            </div>
          </div>

          {/* 3. EndOfDay */}
          <div style={{ 
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-on-light)',
            paddingLeft: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              3. EndOfDay
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              最小化执行、每日复盘。
            </p>
          </div>

          {/* 4. 花园 */}
          <div style={{ 
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-on-light)',
            paddingLeft: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              4. 花园
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              复盘沉淀、结构化思考。
            </p>
            <Link href="/garden" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              /garden →
            </Link>
          </div>

          {/* 5. slowroot */}
          <div style={{ 
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-on-light)',
            paddingLeft: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--structure)', fontWeight: 600 }}>
              5. slowroot
            </h2>
            <p style={{ color: 'var(--structure-soft)', lineHeight: 1.7, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              公开样本，品牌站点。
            </p>
            <a href="https://brand-next.vercel.app" target="_blank" rel="noopener noreferrer" style={{ 
              color: 'var(--accent-on-light)', 
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              brand-next.vercel.app →
            </a>
          </div>
        </div>

        {/* 宪法 */}
        <div style={{ 
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '12px'
        }}>
          <h3 style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--structure-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>
            宪法
          </h3>
          <div style={{ color: 'var(--structure-soft)', lineHeight: 2, fontSize: '0.95rem' }}>
            <p>判断优先于行动</p>
            <p>结构优先于工具</p>
            <p>时间优先于速度</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          判断优先于行动。结构优先于工具。时间优先于速度。
        </p>
      </footer>
    </div>
  );
}
