function Meetings() {
  return (
    <section className="card">
      <div className="card-head">
        <div><h2>Upcoming Meetings</h2><p>Team schedule</p></div>
        <button className="ghost-btn">View all →</button>
      </div>
      <div className="empty-state">
        <div className="empty-icon">◷</div>
        <strong>No meetings scheduled</strong>
        <span>Scheduled meetings will appear here.</span>
      </div>
    </section>
  );
}
export default Meetings;
