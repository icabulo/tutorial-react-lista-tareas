//este archivo aplica para el capitulo de borrar tareas (antes de definir el context)

function TaskCard({ task, deleteTask }) {
  /*  function mostrarAlerta() {
    // alert(`eliminando tarea ${task.id}`);
    alert(task.id);
  } */
  return (
    /* pilas con la definicion del key:
    key={task.id}
    esta se hace el componenete TaskList cuando se llama el componente TaskCard con el método map
     */
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      {/* el problema con definiar deleteTask(10) paara pasar el id=10 por ejemplo es que la funcion se ejecutar cada que se cree el componente TaskCard */}
      {/* <button onClick={deleteTask(10)}>Eliminar tareas</button> */}
      <button onClick={() => deleteTask(task.id)}>Eliminar tareas</button>
    </div>
  );
}

export default TaskCard;
