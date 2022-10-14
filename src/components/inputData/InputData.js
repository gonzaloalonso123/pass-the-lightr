import React, { useState } from "react";
import Database from '../../database/db-connection';
import './InputData.css';

function InputData() {
  const [input, setInput] = useState(null);
  const database = new Database();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const createLighter = () => {
    // database.createLighter(input);
    database.createLighter(input);
  };

  return (
    <div className="input-container">
      <label>id</label>
      <input className="input" onChange={handleInput}></input>
      <button className="standar-button" onClick={createLighter}>
        enter
      </button>
      <button onClick={() => console.log(database.getLighters())}>print all</button>
    </div>
  );
}

export default InputData;
