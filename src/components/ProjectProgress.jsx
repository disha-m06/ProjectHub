function ProjectProgress() {
  return (
    <section className="card">
      <div className="card-head">
        <div><h2>Project Progress</h2><p>Overall progress of active projects</p></div>
        <button className="ghost-btn">View all →</button>
      </div>
      <div className="empty-state">
        <div className="empty-icon">◫</div>
        <strong>No projects yet</strong>
        <span>Projects created in the system will appear here.</span>
      </div>
    </section>
  );
}
export default ProjectProgress;
