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
      const lighters = await database.getLighters();
      console.log(lighters);

      lighters.forEach((lighter) => {
        if(lighter.id === input){
          navigate(`lighter/${input}`);
          return;
        }
      })
        setWrongId(true);
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div style={{ height: "10vh" }}>
      <div className="track-it-container">
        <input type="text" className="input" onChange={handleInput} />
        <button className="standar-button" onClick={validateCode}>
          Track it!
        </button>
      </div>
      {wrongId && <h2 className="error">The provided ID does not exist.</h2>}
    </div>
  );
}

export default TrackIt;
