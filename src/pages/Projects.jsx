import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Smart Attendance System",
      description: "Automated attendance management system.",
      lead: "Rahul",
      progress: 75,
      status: "In Progress",
      deadline: "30 Sept 2026",
    },
    {
      id: 2,
      name: "College ERP",
      description: "Centralized college management platform.",
      lead: "Priya",
      progress: 55,
      status: "In Progress",
      deadline: "15 Oct 2026",
    },
    {
      id: 3,
      name: "AI Chatbot",
      description: "AI-based student assistance chatbot.",
      lead: "Arun",
      progress: 30,
      status: "Delayed",
      deadline: "25 Sept 2026",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    lead: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newProject.name || !newProject.lead || !newProject.deadline) {
      alert("Please fill in the required fields.");
      return;
    }

    const project = {
      id: Date.now(),
      name: newProject.name,
      description:
        newProject.description || "No description provided.",
      lead: newProject.lead,
      progress: 0,
      status: "Not Started",
      deadline: newProject.deadline,
    };

    setProjects([...projects, project]);

    setNewProject({
      name: "",
      description: "",
      lead: "",
      deadline: "",
    });

    setShowForm(false);
  };

  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Topbar />

        <section className="content">

          {/* Header */}
          <div className="welcome">
            <div>
              <p className="eyebrow">PROJECT MANAGEMENT</p>
              <h1>Projects</h1>
              <p>
                Create, monitor and manage projects across your teams.
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(true)}
            >
              + Create Project
            </button>
          </div>

          {/* Project cards */}
          <div className="projects-grid">

            {projects.map((project) => (
              <div className="project-card" key={project.id}>

                <div className="project-card-top">
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                  </div>

                  <span
                    className={`project-status ${
                      project.status === "Delayed"
                        ? "status-delayed"
                        : project.status === "Completed"
                        ? "status-completed"
                        : project.status === "Not Started"
                        ? "status-not-started"
                        : "status-progress"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="project-info">
                  <div>
                    <span>Team Lead</span>
                    <strong>{project.lead}</strong>
                  </div>

                  <div>
                    <span>Deadline</span>
                    <strong>{project.deadline}</strong>
                  </div>
                </div>

                <div className="progress-section">
                  <div className="progress-label">
                    <span>Project Progress</span>
                    <strong>{project.progress}%</strong>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="view-project-btn">
                  View Project →
                </button>

              </div>
            ))}

          </div>

          {/* Create Project Form */}
          {showForm && (
            <div className="modal-overlay">

              <div className="project-modal">

                <div className="modal-header">
                  <div>
                    <p className="eyebrow">PROJECT MANAGEMENT</p>
                    <h2>Create New Project</h2>
                  </div>

                  <button
                    className="close-btn"
                    onClick={() => setShowForm(false)}
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit}>

                  <label>
                    Project Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter project name"
                    value={newProject.name}
                    onChange={handleChange}
                  />

                  <label>
                    Description
                  </label>

                  <textarea
                    name="description"
                    placeholder="Describe the project"
                    value={newProject.description}
                    onChange={handleChange}
                  ></textarea>

                  <label>
                    Team Lead *
                  </label>

                  <input
                    type="text"
                    name="lead"
                    placeholder="Enter team lead name"
                    value={newProject.lead}
                    onChange={handleChange}
                  />

                  <label>
                    Deadline *
                  </label>

                  <input
                    type="date"
                    name="deadline"
                    value={newProject.deadline}
                    onChange={handleChange}
                  />

                  <div className="modal-actions">

                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="primary-btn"
                    >
                      Create Project
                    </button>

                  </div>

                </form>

              </div>

            </div>
          )}

        </section>
      </main>
    </div>
  );
}

export default Projects;