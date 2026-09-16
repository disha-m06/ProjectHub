function StatCard({ icon, title, value, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>{icon}</div>
      <div><span>{title}</span><strong>{value}</strong><small>Live data</small></div>
    </div>
  );
}
export default StatCard;
