'use client';

import BrandNav from '../components/BrandNav';
import MetricCard from '../components/MetricCard';
import TagFilter from '../components/TagFilter';
import { Suspense, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '../../brand.css';

const codeMetrics = [
  { title: '本周写码时长', value: '12.5 h', hint: '提交 8 次 · 学习 3 主题' },
  { title: '当前项目', value: '3 个进行中', hint: 'brand-next / mood-tracker / cli-tool' },
  { title: '今日专注', value: 'AI 观察 & 前端组件', hint: '阅读 2 篇，记录 3 条笔记' },
];

const codeDiary = [
  { date: '2025-02-18', project: 'brand-next', topic: '导航组件抽象', time: '3h', blockers: '无', next: '接入假数据列表', tags: ['项目·brand-next', '主题·前端'] },
  { date: '2025-02-17', project: 'mood-tracker', topic: 'Supabase 表设计', time: '2.5h', blockers: '权限策略待确认', next: '添加 RLS 策略草案', tags: ['项目·mood-tracker', '主题·后端'] },
  { date: '2025-02-16', project: 'cli-tool', topic: '文件解析', time: '1.8h', blockers: '边缘 case 处理', next: '补充单测', tags: ['项目·cli-tool', '主题·脚本'] },
];

const codeProjects = [
  { name: 'brand-next', stack: 'Next.js + Supabase', progress: '60%', status: '进行中', note: '品牌站 + 三大日志' },
  { name: 'mood-tracker', stack: 'Next.js + Supabase', progress: '30%', status: '探索中', note: '情绪记录与可视化' },
  { name: 'cli-tool', stack: 'Node.js', progress: '45%', status: '进行中', note: 'Obsidian 同步脚本雏形' },
];

function CodePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tagsFromUrl = useMemo(() => {
    const raw = searchParams.get('tags');
    if (!raw) return [];
    return raw.split(',').filter(Boolean);
  }, [searchParams]);
  const [activeTags, setActiveTags] = useState<string[]>(tagsFromUrl);
  const [range, setRange] = useState(searchParams.get('range') ?? '30d');
  const [sort, setSort] = useState(searchParams.get('sort') ?? 'desc');

  const handleTagsChange = (tags: string[]) => {
    setActiveTags(tags);
    const params = new URLSearchParams(searchParams.toString());
    if (tags.length) {
      params.set('tags', tags.join(','));
    } else {
      params.delete('tags');
    }
    const query = params.toString();
    router.replace(query ? `?${query}` : '?', { scroll: false });
  };

  const filterByRange = useMemo(() => {
    const daysMap: Record<string, number> = { '7d': 7, '30d': 30, '90d': 90 };
    const days = daysMap[range];
    if (!days) return codeDiary;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return codeDiary.filter((entry) => new Date(entry.date) >= cutoff);
  }, [range]);

  const filteredDiary = useMemo(() => {
    const hasTags = activeTags.length > 0;
    const base = hasTags
      ? filterByRange.filter((entry) => activeTags.every((tag) => entry.tags.includes(tag)))
      : filterByRange;
    const sorted = [...base].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sort === 'asc' ? da - db : db - da;
    });
    return sorted;
  }, [filterByRange, activeTags, sort]);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    const query = params.toString();
    router.replace(query ? `?${query}` : '?', { scroll: false });
  };

  return (
    <div className="brand-container">
      <BrandNav active="code" />

      <main className="page-main">
        <section className="page-hero">
          <h1 className="page-title">编程日志</h1>
          <p className="page-subtitle">学习、项目与 AI 观察的每日记录</p>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">写码仪表盘</h2>
            <div className="stories-grid">
              {codeMetrics.map((metric) => (
                <MetricCard
                  key={metric.title}
                  title={metric.title}
                  value={metric.value}
                  hint={metric.hint}
                />
              ))}
            </div>
            <div className="challenge-box">
              <h3>AI 观察 / 工具推荐占位</h3>
              <p>保留原 AI 实验室内容，后续拆成卡片列表展示。</p>
            </div>
          </div>
        </section>

        <section className="service-section alt-bg">
          <div className="section-container">
            <h2 className="section-title">每日编程日志</h2>
            <div className="filter-row">
              <div className="filter-control">
                <label>时间范围</label>
                <select
                  value={range}
                  onChange={(e) => {
                    const next = e.target.value;
                    setRange(next);
                    updateParam('range', next);
                  }}
                  className="filter-select"
                >
                  <option value="7d">近 7 天</option>
                  <option value="30d">近 30 天</option>
                  <option value="90d">近 90 天</option>
                  <option value="all">全部</option>
                </select>
              </div>
              <div className="filter-control">
                <label>排序</label>
                <select
                  value={sort}
                  onChange={(e) => {
                    const next = e.target.value;
                    setSort(next);
                    updateParam('sort', next);
                  }}
                  className="filter-select"
                >
                  <option value="desc">时间倒序</option>
                  <option value="asc">时间正序</option>
                </select>
              </div>
            </div>
            <TagFilter
              title="筛选"
              items={['项目·brand-next', '项目·mood-tracker', '项目·cli-tool', '主题·前端', '主题·AI', '主题·后端', '主题·脚本']}
              active={activeTags}
              onChange={handleTagsChange}
            />
            <div className="notes-timeline">
              {filteredDiary.map((entry) => (
                <div className="note-item" key={entry.date + entry.project}>
                  <div className="note-date">{entry.date}</div>
                  <div className="note-content">
                    <h3>{entry.project} · {entry.topic}</h3>
                    <p>时长：{entry.time} · 阻碍：{entry.blockers}</p>
                    <p>下一步：{entry.next}</p>
                  </div>
                </div>
              ))}
              <div className="note-item">
                <div className="note-date">筛选占位</div>
                <div className="note-content">
                  <h3>项目 / 主题 / 时间</h3>
                  <p>后续提供筛选、分页与 Obsidian 同步按钮。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">项目与成果</h2>
            <div className="stories-grid">
              {codeProjects.map((project) => (
                <div className="story-card" key={project.name}>
                  <div className="story-content">
                    <h3>{project.name}</h3>
                    <p className="story-date">{project.stack}</p>
                    <p>进度：{project.progress} · 状态：{project.status}</p>
                    <p>{project.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function CodePage() {
  return (
    <Suspense fallback={null}>
      <CodePageContent />
    </Suspense>
  );
}
