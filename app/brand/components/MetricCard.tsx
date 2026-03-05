interface MetricCardProps {
  title: string;
  value: string;
  hint?: string;
  tag?: string;
}

export default function MetricCard({ title, value, hint, tag }: MetricCardProps) {
  return (
    <div className="story-card metric-card">
      <div className="story-content">
        <h3>{title}</h3>
        <p className="story-date">{value}</p>
        {hint && <p>{hint}</p>}
        {tag && <span className="pill">{tag}</span>}
      </div>
    </div>
  );
}
