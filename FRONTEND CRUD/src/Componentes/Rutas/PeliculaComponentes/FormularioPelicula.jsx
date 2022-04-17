import React, { Fragment, useState } from "react";
import SelectActores from "./SelectActores";

function Formulario({datos,setDatos,setListUpdated}) {
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    //console.log(event.target.name);
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  let { nombre, Actor, Ano, Genero, Portada } =  datos;
  const enviarDatos = async (event) => {
    event.preventDefault();
    console.log(
      "enviando datos..." +
      datos.nombre +
      " " +
      datos.Actor +
      " " +
      datos.Ano +
      " " +
      datos.Genero +
      " " +
      datos.portada
    );

    let formdata = new FormData();
    formdata.append("Nombre", datos.nombre);
    formdata.append("Actor", datos.Actor);
    formdata.append("Ano", datos.Ano);
    formdata.append("Genero", datos.Genero);
    formdata.append("Portada", file);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch("http://localhost:4000/anadir_peliculas", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("Registro guardado");
    setDatos({
      nombre: "",
      Actor: "",
      Ano: "",
      Genero:"",
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
                  value={nombre}
                  name="nombre"
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
                  name="Ano"
                  value={Ano}
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
                    value={Genero}
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
                src="https://huntertrack.com.do/huntertrack/portal/fotos_objeto/sin_foto.png"
                className="card-img-top"
                alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img width="100" alt="" name="imagen" />
      </div>
    </Fragment>
  );
}

export default Formulario;
