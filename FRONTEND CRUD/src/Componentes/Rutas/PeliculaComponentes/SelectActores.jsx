import React, { useState, useEffect } from "react";

const SelectActores = (props) => {
  const [todos, setTodos] = useState([]);

  
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/actores/");
      const jsonData = await response.json();
      // console.log(jsonData)

      setTodos(jsonData[0]);
    } catch (error) {}
  };
const COLORS = todos.map((w) => w.NombreActores);
  //console.log(COLORS)

  useEffect(() => {
    getTodos();
  },[]);

  
 
  return (
    <div>

      <select 
      id="Nactor"
      type="text"
      placeholder="Actor"
      className="form-control form-select "
      onChange={props.handleInputChange}
      name="Actor"
      required
      
      
      >
        <option value="">Seleccionar Actor</option>
        {COLORS.map((c,index) => (
          <option name="Actor" key={index} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectActores;
