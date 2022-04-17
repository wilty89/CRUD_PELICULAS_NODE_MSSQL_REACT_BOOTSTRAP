import React, { useState, useEffect } from "react";
//import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "http://localhost:4000/peliculas/"; // you should replace this with yours


const Peliculas = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
/*
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });*/
  	};

    
    return (
     <div className="App">
      <Header text="Peliculas disponibles" />
      <Search search={search} />
      <p className="App-intro">Prueba para movie app </p>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            movie.map((movie2)=> 
            <Movie key={`${index}-${movie2.Nombre}`} movie={movie2} />)
          ))
        )}
      </div>
    </div>
  );
};


export default Peliculas;
