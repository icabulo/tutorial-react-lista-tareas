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
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //esto sirve para limpir los valore en el input
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          /*  name=""
          id=""
          cols="30"
          rows="10" */
          placeholder="Escribe la descripción de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description} //esto sirve para limpir los valore en el input
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
