const express = require("express");
const router = express.Router();

//const upload1= require("../middlewares/middleware")
const path = require("path");
const upload = require("../middlewares/middleware");

////  METODOS IMPORTADOS (CONTROLADORES)  ///
const {
  obtenerPeliculas,
  obtenerPeliculasPorId,
  anadirPelicula,
  actualizarPelicula,
  eliminarPelicula,
  obtenerPeliculasPorNombre,
} = require("../controllers/peliculas.controller");

///PRUEBA DE FUNCIONANMIENTO////
router.get("/", function (req, res, next) {
  res.send("Wilber Montero");
});

//// ENDDPOINTS (RUTAS) /////
router.get("/peliculas", obtenerPeliculas);
router.get("/peliculas/:ID", obtenerPeliculasPorId);
router.post("/anadir_peliculas", upload.single("Portada"), anadirPelicula);
router.put("/actualizar_peliculas/:ID", upload.single("Portada"), actualizarPelicula);
router.delete("/eliminar_peliculas/:ID", eliminarPelicula);
router.get("/peliculas/:Nombre", obtenerPeliculasPorNombre);
module.exports = router;
