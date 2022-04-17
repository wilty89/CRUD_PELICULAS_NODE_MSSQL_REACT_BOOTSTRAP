import React from "react";
import { Modal, Button, Card } from "react-bootstrap/";

const Movie = ({ movie }) => {
  const DEFAULT =
    "https://sites.google.com/site/capitulosmarines/_/rsrc/1458754856529/fundaciones/segunda-fundacion/desconocido.png";
  const Portadas =
    movie.Portada === null
      ? DEFAULT
      : `http://localhost:4000/public/${movie.Portada}`;
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Datos de Peliculas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{movie.Nombre}</h4>
          <p>Actor: {movie.Actor}</p>
          <p>Genero: {movie.Genero}</p>
          <p>
            <strong>Ano de estreno: ({movie.Ano})</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <div className="movie1 m-2">
        <Card style={{ width: "18rem" }}>
          <div className="imgs">
            <Card.Img
              width="200"
              height="350"
              alt={` ${movie.Nombre}`}
              src={Portadas}
              loading="lazy"
            />
          </div>
          <h4>{movie.Nombre}</h4>
          <br />
          <Button variant="outline-info" onClick={() => setModalShow(true)}>
            Informacion
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card>{" "}
      </div>
    </>
  );
};

export default Movie;
