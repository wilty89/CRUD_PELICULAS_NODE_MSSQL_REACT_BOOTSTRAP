import React, { useState } from "react";

/*
const Search = (props) => {

  const [buscarAPI, modificar] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const getBusqueda= async()=>{

  const peticion = await fetch(`http://localhost:4000/peliculas`)
  const json= peticion.json()
  modificar(json[0])
}
//console.log(buscarAPI[0])

const getInput = () => {
  let newDetails = [...buscarAPI];

  let filterData = newDetails.filter(book => {
    console.log(book.ID);
    console.log(newDetails);
    return (searchValue.toLowerCase()) !== -1 ||
      book.ID.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      book.Nombre.toString().indexOf(searchValue.toLowerCase()) !== -1 ||
      book.Actor.toString().indexOf(searchValue.toLowerCase()) !== -1 ||
      book.Ano.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      book.Genero.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1

    ;
  });

  if (filterData.length === 0) {
    console.log("no data found");
    window.confirm("No Such Data Found");
  } else {
   
  
    
  }
  console.log(`Filtered Data ---->${filterData.length}`);
}; 
getInput()
 
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }*/ 
/*
  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    
  }*/
 /*
  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="Buscar" />
      </form>
    );
}

export default Search;*/




const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;