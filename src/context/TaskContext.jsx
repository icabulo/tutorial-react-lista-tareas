import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //este es el nombre del contexto

//TaskContextProvider es el componente que va a englobar a todos
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//NOTA. VER QUE NO SE EXPORTA POR DEFECTO, SE HACE EXPORT DEL CONTEXTO Y DEL PROVIDER

/* export function TaskContextProvider(props) {
  return <TaskContext.Provider>{props.children}</TaskContext.Provider>;
}
 */
