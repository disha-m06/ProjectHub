import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ProjectProgress from "../components/ProjectProgress";
import Meetings from "../components/Meetings";
import Tasks from "../components/Tasks";
import Activity from "../components/Activity";

function Dashboard() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        <section className="content">
          <div className="welcome">
            <div>
              <p className="eyebrow">PROJECT MANAGEMENT SYSTEM</p>
              <h1>Welcome back! 👋</h1>
              <p>Manage projects, teams, tasks and meetings from one place.</p>
            </div>
            <button className="primary-btn" onClick={() => document.getElementById("tasks")?.scrollIntoView({behavior:"smooth"})}>
              + Assign New Task
            </button>
          </div>

          <div className="stats">
            <StatCard icon="▣" title="Total Projects" value="0" type="purple" />
            <StatCard icon="♙" title="Team Members" value="0" type="blue" />
            <StatCard icon="✓" title="Tasks Completed" value="0" type="green" />
            <StatCard icon="◷" title="Upcoming Meetings" value="0" type="orange" />
          </div>

          <div className="grid-main">
            <ProjectProgress />
            <Meetings />
          </div>

          <Tasks />
          <Activity />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
