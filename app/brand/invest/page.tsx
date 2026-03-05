'use client';

import BrandNav from '../components/BrandNav';
import MetricCard from '../components/MetricCard';
import TagFilter from '../components/TagFilter';
import { Suspense, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '../../brand.css';

function InvestPageContent() {
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

  const investMetrics = [
    { title: '近 30 日收益', value: '+3.8%', hint: '最大回撤 -1.2%' },
    { title: '组合净值', value: '1.124', hint: '基准：沪深 300' },
    { title: '仓位分布', value: '股 65% / 现 20% / 其他 15%', hint: '集中度最高 18%' },
  ];

  const tradeTimeline = [
    { date: '2025-02-18 10:12', symbol: '贵州茅台', direction: '加仓', price: '1743.5', qty: '10', tags: ['消费', '核心', '方向·加仓'] },
    { date: '2025-02-17 09:45', symbol: '中证红利 ETF', direction: '定投', price: '4.23', qty: '500', tags: ['ETF', '红利', '方向·加仓'] },
    { date: '2025-02-15 14:05', symbol: '美的集团', direction: '减仓', price: '65.8', qty: '200', tags: ['家电', '风控', '方向·减仓'] },
  ];

  const investReviews = [
    { period: '2025-W07', title: '周复盘', summary: '市场震荡，红利低波表现稳健；减少高波动仓位，提升现金占比至 20%。' },
    { period: '2025-01', title: '月复盘', summary: '总收益 +2.1%，回撤控制良好；需关注科技板块估值回落，暂不追高。' },
  ];

  const filterByRange = useMemo(() => {
    const daysMap: Record<string, number> = { '7d': 7, '30d': 30, '90d': 90 };
    const days = daysMap[range];
    if (!days) return tradeTimeline;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return tradeTimeline.filter((trade) => {
      const date = new Date(trade.date.replace(' ', 'T'));
      return date >= cutoff;
    });
  }, [range, tradeTimeline]);

  const filteredTrades = useMemo(() => {
    const hasTags = activeTags.length > 0;
    const base = hasTags
      ? filterByRange.filter((trade) => activeTags.every((tag) => trade.tags.includes(tag)))
      : filterByRange;
    const sorted = [...base].sort((a, b) => {
      const da = new Date(a.date.replace(' ', 'T')).getTime();
      const db = new Date(b.date.replace(' ', 'T')).getTime();
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
      <BrandNav active="invest" />

      <main className="page-main">
        <section className="page-hero">
          <h1 className="page-title">投资日志</h1>
          <p className="page-subtitle">仅作个人记录，不构成投资建议。默认为私有视图。</p>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">收益 & 风控仪表盘</h2>
            <div className="stories-grid">
              {investMetrics.map((metric) => (
                <MetricCard
                  key={metric.title}
                  title={metric.title}
                  value={metric.value}
                  hint={metric.hint}
                />
              ))}
            </div>
            <div className="challenge-box">
              <h3>风险提示占位</h3>
              <p>后续根据仓位集中度、杠杆、波动率动态生成提醒。</p>
            </div>
          </div>
        </section>

        <section className="service-section alt-bg">
          <div className="section-container">
            <h2 className="section-title">交易时间线</h2>
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
              items={['方向·加仓', '方向·减仓', 'ETF', '消费', '科技', '红利', '风控', '家电']}
              active={activeTags}
              onChange={handleTagsChange}
            />
            <div className="notes-timeline">
              {filteredTrades.map((trade) => (
                <div className="note-item" key={trade.date + trade.symbol}>
                  <div className="note-date">{trade.date}</div>
                  <div className="note-content">
                    <h3>{trade.symbol} · {trade.direction}</h3>
                    <p>价格 {trade.price} · 数量 {trade.qty}</p>
                    <p>标签：{trade.tags.join(' / ')}</p>
                  </div>
                </div>
              ))}
              <div className="note-item">
                <div className="note-date">筛选占位</div>
                <div className="note-content">
                  <h3>时间 / 标的 / 标签</h3>
                  <p>后续提供查询、导出、权限控制（默认私有）。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="section-container">
            <h2 className="section-title">周 / 月复盘</h2>
            <div className="challenge-box">
              <div className="notes-timeline">
                {investReviews.map((review) => (
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
                    <h3>复盘模板占位</h3>
                    <p>包含：市场概况、操作摘要、风险、教训、计划，后续可从 Obsidian 同步。</p>
                  </div>
                </div>
              </div>
              <p className="story-date">提示：内容默认私有，不对外展示。</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function InvestPage() {
  return (
    <Suspense fallback={null}>
      <InvestPageContent />
    </Suspense>
  );
}
