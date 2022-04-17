import React, { useState, useEffect } from "react";
import PeluculaTable from "./Table";
import FormularioPelicula from "./FormularioPelicula";
import FormularioEditPelicula from "./FormularioEditPelicula";
const Anadirpelicula = () => {
  const [datos, setDatos] = useState({
    Nombre: "",
    Actor: "",
    Ano: "",
    Genero: "",
    portada: "",
  });

  const initialFormState = {
    Nombre: "",
    Actor: "",
    Ano: "",
    Genero: "",
    portada: "",
  };
  const [peliculas, setpeliculas] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  const [Editar, setEditar] = useState(true);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:4000/peliculas/");
        const jsonData = await response.json();
        setpeliculas(jsonData[0]);
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
        <FormularioPelicula
          setDatos={setDatos}
          datos={datos}
          setListUpdated={setListUpdated}
        />
      ) : (
        <FormularioEditPelicula
          setDatos={setDatos}
          datos={datos}
          setEditar={setEditar}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
          setListUpdated={setListUpdated}
        />
      )}
      <br />
      <PeluculaTable
        setDatos={setDatos}
        datos={datos}
        peliculas={peliculas}
        setEditar={setEditar}
        setCurrentTodo={setCurrentTodo}
        setListUpdated={setListUpdated}
      />
    </div>
  );
};

export default Anadirpelicula;
