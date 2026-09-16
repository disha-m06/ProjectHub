function Activity() {
  return (
    <section className="card activity-card">
      <div className="card-head">
        <div><h2>Team Activity</h2><p>Latest updates from team members</p></div>
        <div className="filters"><button className="filter active">All</button><button className="filter">Today</button><button className="filter">Pending</button></div>
      </div>
      <div className="empty-state">
        <div className="empty-icon">⌁</div>
        <strong>No activity yet</strong>
        <span>Team member updates will appear here.</span>
      </div>
    </section>
  );
}
export default Activity;
