function Topbar() {
  return (
    <header className="topbar">
      <div className="mobile-brand">ProjectHub</div>
      <div className="search"><span>⌕</span><input type="text" placeholder="Search projects, tasks, members..." /></div>
      <div className="top-actions">
        <button className="notification">♢<i></i></button>
        <div className="profile">
          <div className="avatar">TL</div>
          <div><strong>Team Lead</strong><small>Administrator</small></div>
          <span>⌄</span>
        </div>
      </div>
    </header>
  );
}
export default Topbar;
