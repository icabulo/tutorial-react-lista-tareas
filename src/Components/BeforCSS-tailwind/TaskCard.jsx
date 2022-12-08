// import TaskContext from "../context/TaskContext";
/* import { useContext } from "react"; //esta funcion permite usar un contexto creado
import { TaskContext } from "../context/TaskContext"; //hay que importar el contexto donde esta la variable a usar, por ejemplo let x=20 */
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  /*   const valor = useContext(TaskContext);
  console.log(valor); */
  const { deleteTask } = useContext(TaskContext);

  return (
    /*   //ejemplo de como el componente padre TaskContext agrupa los componente hijo
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar tareas</button>
      </div> 
    </TaskContext>
     */
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tareas</button>
    </div>
  );
}

export default TaskCard;
