import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
      {/* ya no es necesario pasar  las funciones como propiedades porque cada componente tiene acceso directo al contexto */}
      {/*  <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
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
