import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Database from "../../../database/db-connection";
import "./TrackIt.css";

function TrackIt({ setShowDev }) {
  const [input, setInput] = useState("");
  const [wrongId, setWrongId] = useState(false);
  let navigate = useNavigate();
  let database = new Database();

  async function validateCode() {
    if (input == "wesmokedhope%") {
      setShowDev(true);
    } else {
      const lighter = await database.getOneLighter(input);
      console.log(lighter);
      if(lighter == null){
        setWrongId(true);
      }
      else{
        navigate(`lighter/${input}`);
      }
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div style={{ height: "15vh" }}>
      <div className="track-it-container">
        <input type="text" className="input" defaultValue = "Your code" onChange={handleInput} />
        <button className="standar-button" onClick={validateCode}>
          Track it!
        </button>
      </div>
      {wrongId && <h2 className="error">The provided ID does not exist.</h2>}
    </div>
  );
}

export default TrackIt;
