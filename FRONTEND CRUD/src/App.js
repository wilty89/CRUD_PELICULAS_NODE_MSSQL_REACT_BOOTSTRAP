//import logo from './logo.svg';
import "./App.css";
import React from "react";

import Menu from "./Componentes/Menu";

import Peliculas from "./Componentes/Rutas/Mostrarpelicula/peliculas";
import Anadirpelicula from "./Componentes/Rutas/PeliculaComponentes/anadirpelicula";
import Anadiractor from "./Componentes/Rutas/ActoresComponentes/anadiractor";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Route path="/" exact>
          <Peliculas />
        </Route>

        <Route path="/Atores" >
         
        </Route>

        <Route path="/Apelicula">
          <Anadirpelicula />
        </Route>

        <Route path="/Aactor">
          <Anadiractor />
        </Route>
      </Router>
    </>
  );
}

export default App;
