import React from "react";
import { Table } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

function ListaActores({
  Actor,
  setActor,
  actores,
  setListUpdated,
  setEditar,
  setCurrentTodo,
}) {
  const deleteUser = async (ID) => {
    try {
      const deletedTodo = await fetch(
        `http://localhost:4000/eliminar_actor/${ID}`,
        {
          method: "DELETE",
        }
      );
      const jsonData = await deletedTodo.text();
      console.log(jsonData);
      //setActor(Actor.filter((todo) => todo.id !== id));
      alert("Registro Borrado");
      setListUpdated(true);
      //window.location="/"
    } catch (error) {
      console.error(error.message);
    }
  };

  function handleEditClick(todo) {
    setEditar(false);
    setCurrentTodo(todo);
  }
  return (
    <>
      <Table className="table table-hover " size="lg" striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Nacimiento</th>
            <th>Sexo</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="striped">
          {actores.length > 0 ? (
            actores.map((get) => (
              <tr key={get.IdActores}>
                <td>{get.IdActores}</td>
                <td>{get.NombreActores}</td>
                <td>{new Date(get.FechaNacimiento).toDateString()}</td>
                <td>{get.SexoActores}</td>
                <td>
                  <img
                    width="90"
                    height="80"
                    alt=""
                    src={`http://localhost:4000/public/${get.FotoActores}`}
                  />
                </td>
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
                        "Desea eliminar e act: " + get.NombreActores
                      );
                      if (confirmBox === true) {
                        deleteUser(get.IdActores);
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
    </>
  );
}

export default ListaActores;
