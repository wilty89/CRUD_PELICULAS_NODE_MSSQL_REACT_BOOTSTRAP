import React from "react";

import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Menu() {
  return (
    <div className="m-5">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top  bg-dark">
        <Link className="navbar-brand" to="/">
          Pelicula CRUD APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <Link className="nav-link" to="/" >
                Peliculas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Apelicula">
                Añadir Peliculas
              </Link>
              
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Aactor">
                Añadir Actor
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </div>
  );
}
