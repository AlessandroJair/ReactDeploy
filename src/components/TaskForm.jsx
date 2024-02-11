import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [tasks, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(tasks, desc);
    setTask("");
    setDesc("");
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <form className="bg-slate-900 p-10 mb-4 " onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTask(e.target.value)}
          value={tasks}
          className="bg-slate-400 pw-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la informacion de la tarea"
          className="bg-slate-400 pw-3 w-full mb-2"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
