import React from "react";
import { Table } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

function UserTable({ peliculas, setEditar, setCurrentTodo, setListUpdated }) {
  const deleteUser = async (ID) => {
    try {
      const deletedTodo = await fetch(
        `http://localhost:4000/eliminar_peliculas/${ID}`,
        {
          method: "DELETE",
        }
      );
      const jsonData = await deletedTodo.text();
      console.log(jsonData);
      alert("Registro Borrado");
      setListUpdated(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  
  function handleEditClick(todo) {
    setEditar(false);
    setCurrentTodo(todo);
  }

  return (
    <Table className="table table-hover " size="lg" striped bordered hover>
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Nombre Pelicula</th>
          <th>Actor</th>
          <th>Año de estreno</th>
          <th>Genero</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className="striped">
        {peliculas.length > 0 ? (
          peliculas.map((get) => (
            <tr key={get.ID}>
              <td>{get.ID}</td>
              <td>{get.Nombre}</td>
              <td>{get.Actor}</td>
              <td>{get.Ano}</td>
              <td>{get.Genero}</td>
              <td>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    handleEditClick(get);
                  }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Desea eliminar : " + get.Nombre
                    );
                    if (confirmBox === true) {
                      deleteUser(get.ID);
                    }
                  }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Hay Datos Para Mostrar</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
export default UserTable;
