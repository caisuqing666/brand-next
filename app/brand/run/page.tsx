'use client';

import BrandNav from '../components/BrandNav';
import MetricCard from '../components/MetricCard';
import TagFilter from '../components/TagFilter';
import { Suspense, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '../../brand.css';

function RunPageContent() {
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

  const runMetrics = [
    { title: '本周里程', value: '42.6 km', hint: '目标 50 km · 较上周 +12%' },
    { title: '平均配速', value: '5′28″/km', hint: '主要区间：Zone 2-3' },
    { title: '心率分布', value: 'Z2 46% · Z3 38% · Z4 16%', hint: '高强度次数：2' },
  ];

  const runLogs = [
    { date: '2025-02-18', distance: '8.2 km', duration: '45:10', pace: '5′30″', mood: '平静', surface: '公园', note: '清晨慢跑，心率稳定', tags: ['标签·恢复', '场景·公园', '情绪·平静'] },
    { date: '2025-02-17', distance: '6.0 km', duration: '34:42', pace: '5′47″', mood: '轻松', surface: '跑步机', note: '雨天室内，做了 4x800 间歇', tags: ['标签·间歇', '场景·室内', '情绪·轻松'] },
    { date: '2025-02-16', distance: '14.0 km', duration: '1:19:18', pace: '5′39″', mood: '兴奋', surface: '滨江', note: '长距离拉练，后 3 km 提速', tags: ['标签·长距离', '场景·公园', '情绪·兴奋'] },
    { date: '2025-02-15', distance: '5.5 km', duration: '31:05', pace: '5′39″', mood: '放松', surface: '社区', note: '恢复跑，注意步频', tags: ['标签·恢复', '场景·社区', '情绪·放松'] },
  ];

  const runPlans = [
    { title: '本周训练周期', detail: '3 跑 1 交叉，目标 50 km', status: '进行中' },
    { title: '下一个赛事', detail: '上海半马 · 3 月，目标 1:58:00', status: '倒计时 24 天' },
  ];

  const runReviews = [
    { period: '2025-W07', title: '周复盘', summary: '完成 42.6 km，间歇 + 长距离组合，状态 8/10' },
    { period: '2025-01', title: '月复盘', summary: '总里程 182 km，5 次力量训练，左膝无不适' },
  ];

  const filterByRange = useMemo(() => {
    const daysMap: Record<string, number> = { '7d': 7, '30d': 30, '90d': 90 };
    const days = daysMap[range];
    if (!days) return runLogs;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return runLogs.filter((log) => new Date(log.date) >= cutoff);
  }, [range, runLogs]);

  const filteredLogs = useMemo(() => {
    const hasTags = activeTags.length > 0;
    const base = hasTags
      ? filterByRange.filter((log) => activeTags.every((tag) => log.tags.includes(tag)))
      : filterByRange;
    const sorted = [...base].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sort === 'asc' ? da - db : db - da;
    });
    return sorted;
  }, [filterByRange, activeTags, sort]);

  return (
    <div className="brand-container">
      <BrandNav active="run" />

      <main className="page-main">
        <section className="page-hero">
          <h1 className="page-title">跑步体系</h1>
          <p className="page-subtitle">用数据、故事与复盘，记录 10,000+ 公里的长跑旅程</p>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">训练仪表盘</h2>
            <div className="stories-grid">
              {runMetrics.map((metric) => (
                <MetricCard
                  key={metric.title}
                  title={metric.title}
                  value={metric.value}
                  hint={metric.hint}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="service-section alt-bg">
          <div className="section-container">
            <h2 className="section-title">近 7 日趋势 / 计划 / 徽章</h2>
            <div className="methodology-content">
              <div className="methodology-item">
                <div className="method-icon">📈</div>
                <div>
                  <h3>趋势占位</h3>
                  <p>7 日里程趋势、配速区间、心率曲线的图表占位，后续接 Supabase。</p>
                </div>
              </div>
              {runPlans.map((plan) => (
                <div className="methodology-item" key={plan.title}>
                  <div className="method-icon">📅</div>
                  <div>
                    <h3>{plan.title}</h3>
                    <p>{plan.detail}</p>
                    <p className="story-date">{plan.status}</p>
                  </div>
                </div>
              ))}
              <div className="methodology-item">
                <div className="method-icon">🏅</div>
                <div>
                  <h3>里程碑占位</h3>
                  <p>后续用 run_badges 表展示赛事与 PB 徽章。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">跑步日志</h2>
            <div className="filter-row">
              <div className="filter-control">
                <label>时间范围</label>
                <select
                  value={range}
                  onChange={(e) => {
                    const next = e.target.value;
                    setRange(next);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('range', next);
                    const query = params.toString();
                    router.replace(query ? `?${query}` : '?', { scroll: false });
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
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('sort', next);
                    const query = params.toString();
                    router.replace(query ? `?${query}` : '?', { scroll: false });
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
              items={['情绪·平静', '情绪·轻松', '情绪·兴奋', '情绪·放松', '场景·公园', '场景·室内', '场景·社区', '标签·间歇', '标签·长距离', '标签·恢复']}
              active={activeTags}
              onChange={handleTagsChange}
            />
            <div className="notes-timeline">
              {filteredLogs.map((log) => (
                <div className="note-item" key={log.date + log.distance}>
                  <div className="note-date">{log.date}</div>
                  <div className="note-content">
                    <h3>{log.distance} · {log.duration} · {log.pace}</h3>
                    <p>情绪：{log.mood} · 场景：{log.surface}</p>
                    <p>{log.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="challenge-box">
              <h3>筛选与分页占位</h3>
              <p>后续接 Supabase 数据并应用筛选条件；支持分页/懒加载。</p>
            </div>
          </div>
        </section>

        <section className="service-section alt-bg">
          <div className="section-container">
            <h2 className="section-title">周 / 月复盘</h2>
            <div className="notes-timeline">
              {runReviews.map((review) => (
                <div className="note-item" key={review.period}>
                  <div className="note-date">{review.period}</div>
                  <div className="note-content">
                    <h3>{review.title}</h3>
                    <p>{review.summary}</p>
                  </div>
                </div>
              ))}
              <div className="note-item">
                <div className="note-date">模板</div>
                <div className="note-content">
                  <h3>复盘提示占位</h3>
                  <p>未来放置复盘模板、Obsidian 同步按钮或快速填写入口。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function RunPage() {
  return (
    <Suspense fallback={null}>
      <RunPageContent />
    </Suspense>
  );
}
