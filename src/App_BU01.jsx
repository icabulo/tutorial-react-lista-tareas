//copian antes de organizar todos los estados y hooks en el TaskContext
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  /* const [tasks, setTasks] = useState([]);//al principio se crea este arreglo vacio como ejemplo  y por eso luego se tiene el if con longitud de tasks =0. */
  /*  const [tasks, setTasks] = useState(tasks); // aun no se realiza la inicializacion task aun no esta disponible, por eso se necesita el useEffect. */
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  //se crea esta funcion para pasarsela como props al componente TaskForm
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length, //la funcion se crea aqui solo para poder usar el estado tasks
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    /*    console.log(tasks);
    console.log(taskId); */
    // elimina la tarea con el id que nos pasaron (taskId) desde taskCard
    // tasks.filter((task) => task.id != taskId);

    setTasks(tasks.filter((task) => task.id != taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      {/* le paso la propiedad llamada createTask cuyo valor es la funcion que creamos atras */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;

/* copia de la app original 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
 */
