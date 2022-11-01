import React, { useState } from "react";
import Database from '../../database/db-connection';
import './InputData.css';
// import "../lighter/where/locationPicker3";

function InputData() {
  const [input, setInput] = useState(null);
  const database = new Database();
  database.getAllFoundFighters();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const createLighter = () => {
    // database.createLighter(input);
    // const locationPicker = new  locationPicker3();
    // locationPicker.initMap();

  };

  return (
    <div className="input-container">
      <label>id</label>
      <input className="input" onChange={handleInput}></input>
      <button className="standar-button" onClick={createLighter}>
        enter
      </button>
      <button onClick={() => database.getAllFoundFighters}>print all</button>
    </div>
  );
}

export default InputData;
