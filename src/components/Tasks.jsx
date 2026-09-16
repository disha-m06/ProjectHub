import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name:"", description:"", priority:"Medium", deadline:"" });

  function addTask(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setTasks([{ id: Date.now(), ...form, status:"Pending" }, ...tasks]);
    setForm({ name:"", description:"", priority:"Medium", deadline:"" });
    setShowForm(false);
  }

  return (
    <section className="card tasks-card" id="tasks">
      <div className="card-head">
        <div><h2>Tasks</h2><p>Create and manage team tasks</p></div>
        <button className="primary-btn" onClick={() => setShowForm(true)}>+ Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✓</div>
          <strong>No tasks yet</strong>
          <span>Tasks assigned to team members will appear here.</span>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <div className="task-item" key={task.id}>
              <div><strong>{task.name}</strong><p>{task.description || "No description"}</p></div>
              <div className="task-tags"><span>{task.priority}</span><span>{task.deadline || "No deadline"}</span><span>{task.status}</span></div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="modal">
          <form className="modal-box" onSubmit={addTask}>
            <button type="button" className="close" onClick={() => setShowForm(false)}>×</button>
            <p className="eyebrow">TASK MANAGEMENT</p>
            <h2>Add Task</h2>
            <label>Task name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter task name" /></label>
            <label>Description<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Enter task description" /></label>
            <label>Priority<select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}><option>Medium</option><option>High</option><option>Low</option></select></label>
            <label>Deadline<input type="date" value={form.deadline} onChange={e=>setForm({...form,deadline:e.target.value})} /></label>
            <button className="primary-btn full" type="submit">Add Task</button>
          </form>
        </div>
      )}
    </section>
  );
}
export default Tasks;
