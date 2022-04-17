import React, { useState, useEffect } from "react";
import ListaActores from "./TableActores";
import FormularioActores from "./FormularioActor";
import FormularioEditActor from "./FormularioEditActor";
function Actores() {
  const [Actor, setActor] = useState({
    NombreActores: "",
    FechaNacimiento: "",
    SexoActores: "",
    FotoActores: null,
  });
  const initialFormState = {
    NombreActores: "",
    FechaNacimiento: "",
    SexoActores: "",
    FotoActores: "",
  };
  const [actores, setActores] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  const [Editar, setEditar] = useState(true);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:4000/actores/");
        const jsonData = await response.json();
        setActores(jsonData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
    setListUpdated(false);
  }, [listUpdated]);

  return (
    <div>
      <br />
      {Editar ? (
        <FormularioActores
          Actor={Actor}
          setActor={setActor}
          setListUpdated={setListUpdated}
        />
      ) : (
        <FormularioEditActor
          Actor={Actor}
          setActor={setActor}
          setEditar={setEditar}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
          setListUpdated={setListUpdated}
        />
      )}
      <br />

      <ListaActores
        setEditar={setEditar}
        Actor={Actor}
        setActor={setActor}
        actores={actores}
        setListUpdated={setListUpdated}
        setCurrentTodo={setCurrentTodo}
      />
    </div>
  );
}

export default Actores;
