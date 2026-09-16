import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">
          P
        </div>

        <div>
          <strong>ProjectHub</strong>
          <span>ERP</span>
        </div>
      </div>

      <nav>

        <p className="nav-title">
          WORKSPACE
        </p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>▦</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          <span>◫</span>
          Projects
        </NavLink>

        <a href="#" className="nav-link">
          <span>♙</span>
          Teams
        </a>

        <a href="#tasks" className="nav-link">
          <span>✓</span>
          Tasks
        </a>

        <a href="#" className="nav-link">
          <span>◷</span>
          Meetings
        </a>

        <p className="nav-title">
          MANAGEMENT
        </p>

        <a href="#" className="nav-link">
          <span>⌁</span>
          Activity
        </a>

        <a href="#" className="nav-link">
          <span>▤</span>
          Reports
        </a>

        <a href="#" className="nav-link">
          <span>⚙</span>
          Settings
        </a>

      </nav>

      <div className="sidebar-bottom">

        <div className="help-box">
          <div className="help-icon">
            ?
          </div>

          <div>
            <strong>
              Need help?
            </strong>

            <small>
              Contact your administrator
            </small>
          </div>
        </div>

        <a href="#" className="nav-link logout">
          <span>↪</span>
          Logout
        </a>

      </div>

    </aside>
  );
}

export default Sidebar;