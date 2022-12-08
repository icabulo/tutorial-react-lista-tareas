import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  /*   const value = useContext(TaskContext); */ //value es un objeto que se puede destructurar para solo usar CreateTask por ejemplo

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    //limpiar los valores de title y description luego de enviar. Sin embargo, en este punto aun no se borra el valor en el input
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title} //esto sirve para limpir los valore en el input
        autoFocus
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description} //esto sirve para limpir los valore en el input
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
