import React, { useState } from "react";

function FormularioActores({ Actor, setActor, setListUpdated }) {
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name);
    console.log(event.target.value);
    setActor({
      ...Actor,
      [event.target.name]: event.target.value.trim(),
    });
  };
  
  let { NombreActores, FechaNacimiento, SexoActores } = Actor;
  const enviarDatos = async (event) => {
    event.preventDefault();
    console.log(
      "enviando datos..." +
        Actor.NombreActores +
        " " +
        Actor.FechaNacimiento +
        " " +
        Actor.SexoActores +
        " " +
        Actor.FotoActores
    );

    let formdata = new FormData();
    formdata.append("NombreActores", Actor.NombreActores);
    formdata.append("FechaNacimiento", Actor.FechaNacimiento);
    formdata.append("SexoActores", Actor.SexoActores);
    formdata.append("FotoActores", file);

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:4000/anadir_actor", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("Registro guardado");
    //window.location = "/Apelicula";
    setActor({
      NombreActores: "",
      FechaNacimiento: "",
      SexoActores: "",
      FotoActores: null,
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
    <>
      <div className=" mt-5 container-md card">
        <h3>Agregar Actor</h3>
        <div className="row">
          <div className="col-md-8">
            <form className="row g-3" onSubmit={enviarDatos}>
              <div className="col-md-5">
                <label htmlFor="NombreActores" className="form-label">
                  Nombre Actor:
                </label>
                <input
                  id="NombreActores"
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                  onChange={handleInputChange}
                  name="NombreActores"
                  required
                  value={NombreActores}
                ></input>
              </div>
              <div className="col-md-3">
                <label htmlFor="FechaNacimiento" className="form-label">
                  Fecha de Nacimiento:
                </label>
                <input
                  id="FechaNacimiento"
                  type="date"
                  placeholder="Actor"
                  className="form-control"
                  onChange={handleInputChange}
                  name="FechaNacimiento"
                  required
                  value={FechaNacimiento}
                ></input>
              </div>

              <div className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="SexoActores" className="form-label">
                    Sexo:
                  </label>

                  <select
                    className="form-select selectpicker"
                    id="SexoActores"
                    name="SexoActores"
                    required
                    onChange={handleInputChange}
                    value={SexoActores}
                  >
                    <option disabled >
                      Seleccionar{" "}
                    </option>
                    <option value="Maculino">Maculino </option>
                    <option value="Femenino">Femenino </option>
                    <option value="No binario">No binario</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="FotoActores" className="form-label">
                      Subir Foto:
                    </label>
                    <input
                      id="FotoActores"
                      accept="image/*"
                      type="file"
                      className="form-control"
                      aria-label="file example"
                      name="FotoActores"
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
                htmlFor=""
                width="150"
                height="170"
                id="output"
                src="https://huntertrack.com.do/huntertrack/portal/fotos_objeto/sin_foto.png"
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
    </>
  );
}

export default FormularioActores;
