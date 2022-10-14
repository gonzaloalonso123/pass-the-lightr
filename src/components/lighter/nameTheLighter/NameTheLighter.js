import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Database from '../../../database/db-connection';

function NameTheLighter({id, setShowDidYouFindMe}) {

  const database =  new Database();
  const [input, setInput] = useState("");

  const handleInput = (event) =>  {
    setInput(event.target.value);
  }

  const handleClick  =  () => {
    setShowDidYouFindMe(true);
    console.log(id, input);
    database.giveNickname(id, input)
  }

  return (
    <div className="questions-container">
      <h1>
        Hey! Congrats, you are the first owner of this lighter. Please, give it
        a name
      </h1>
      <div className="who-are-you-input-container">
        <input className="input" onChange={handleInput}/>
        <button className="standar-button" onClick={handleClick}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default NameTheLighter;
