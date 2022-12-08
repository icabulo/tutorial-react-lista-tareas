// el componente contexto puede llamarse de cualquier manera que nos convenga en el proyecto
//este es un ejemplo de como crear un contexto padre para usar en el componente TaskCard
/* function TaskContext(props) {
  return (
    <>
      <h1>Componente context</h1>
      {props.children}
    </>
  );
}

export default TaskContext; */

import { createContext } from "react";

export const TaskContext = createContext(); //este es el nombre del contexto

//TaskContextProvider es el componente que va a englobar a todos
export function TaskContextProvider(props) {
  return <TaskContextProvider>{props.children}</TaskContextProvider>;
}

//NOTA. VER QUE NO SE EXPORTA POR DEFECTO, SE HACE EXPORT DEL CONTEXTO Y DEL PROVIDER
