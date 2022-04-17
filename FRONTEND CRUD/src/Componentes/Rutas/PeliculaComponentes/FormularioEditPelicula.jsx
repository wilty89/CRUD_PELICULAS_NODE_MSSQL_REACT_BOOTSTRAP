import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import SelectActores from "./SelectActores";

const FormularioEditPelicula = ({
  datos,
  setDatos,
  setCurrentTodo,
  setListUpdated,
  currentTodo,
  setEditar,
}) => {
  useEffect(() => {
    setCurrentTodo(currentTodo);
  }, [currentTodo]);

  const [file, setFile] = useState(null);
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
    //console.log(event.target.value);
    setCurrentTodo({
      ...currentTodo,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      "enviando datos..." +
        currentTodo.Nombre +
        " " +
        currentTodo.Actor +
        " " +
        currentTodo.Ano +
        " " +
        currentTodo.Genero +
        " " +
        currentTodo.portada
    );

    let formdata = new FormData();
    formdata.append("Nombre", currentTodo.Nombre);
    formdata.append("Actor", currentTodo.Actor);
    formdata.append("Ano", currentTodo.Ano);
    formdata.append("Genero", currentTodo.Genero);
    formdata.append("Portada", file);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };
    fetch(
      `http://localhost:4000/actualizar_peliculas/${currentTodo.ID}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("Registro guardado");
    //window.location = "/Apelicula";

    setDatos({
      Nombre: "",
      Actor: "",
      Ano: "",
      Genero: "",
      Portada: null,
    });
    setListUpdated(true);
  };

  const openFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      var output = document.getElementById("output");
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
  console.log(currentTodo);
  return (
    <Fragment>
      <div className=" mt-5 container-md card">
        <h3>Agregar Pelicula</h3>
        <div className="row">
          <div className="col-md-8">
            <form className="row g-3" onSubmit={enviarDatos}>
              <div className="col-md-5">
                <label htmlFor="Npelicula" className="form-label">
                  Nombre Pelicula:
                </label>
                <input
                  id="Npelicula"
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                  onChange={handleInputChange}
                  value={currentTodo.Nombre}
                  name="Nombre"
                  required
                ></input>
              </div>
              <div className="col-md-3">
                <label htmlFor="Nactor" className="form-label">
                  Nombre Actor:
                </label>
                <SelectActores
                  name="Actor"
                  handleInputChange={handleInputChange}
                  value={currentTodo.Actor}
                ></SelectActores>
              </div>
              <div className="col-md-2">
                <label htmlFor="estreno" className="form-label">
                  Estreno:
                </label>
                <input
                  id="estreno"
                  type="text"
                  placeholder="Ano"
                  className="form-control"
                  onChange={handleInputChange}
                  value={currentTodo.Ano}
                  name="Ano"
                ></input>
              </div>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Genero:</label>

                  <select
                    className="form-select selectpicker"
                    id="Genero"
                    name="Genero"
                    required
                    onChange={handleInputChange}
                    value={currentTodo.Genero}
                  >
                    <option defaultValue>Seleccionar </option>
                    <option value="COMEDIA">COMEDIA </option>
                    <option value="DRAMA">DRAMA </option>
                    <option name="Genero" value="ACCION">
                      ACCION{" "}
                    </option>
                    <option name="Genero" value="TERROR">
                      TERROR{" "}
                    </option>
                    <option name="Genero" value="SUSPENSO">
                      SUSPENSO{" "}
                    </option>

                    <option name="Genero" value="CIENCIA FICCION">
                      CIENCIA FICCION
                    </option>

                    <option name="Genero" value="ANIMADAS">
                      ANIMADAS{" "}
                    </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="portada" className="form-label">
                      Subir Portada:
                    </label>
                    <input
                      id="portada"
                      accept="image/*"
                      type="file"
                      className="form-control"
                      aria-label="file example"
                      name="Portada"
                      onChange={selectedHandler}
                      onInput={openFile}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-block m-3">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>

                <button type="reset" className="btn btn btn-warning">
                  Limpiar
                </button>
                <button
                  type="reset"
                  className="btn btn btn-danger"
                  onClick={() => {
                    setEditar(true);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: 230 }}>
              <div className="card-header">Preview</div>
              <img
                width="150"
                height="170"
                id="output"
                src={`http://localhost:4000/public/${currentTodo.Portada}`}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img width="100" alt="" name="imagen" />
      </div>
    </Fragment>
  );
};

export default FormularioEditPelicula;
