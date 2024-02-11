import { createContext, useState, useEffect } from "react";
import { Tasks as data } from "../Tasks";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task, desc) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        tittle: task,
        decripcion: desc,
      },
    ]);
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
