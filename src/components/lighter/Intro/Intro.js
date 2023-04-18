import React, { useState } from "react";
import LighterImg from "../../../images/usuario.png";
import "./Intro.css";

function Intro({
  setUserName,
}) {

  const handleInput = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="lighterPageSection">
      <img src={LighterImg} alt="" className="lighter-img" />
      <h1>Who are you?</h1>
      <div className="who-are-you-input-container">
        <input
          type="text"
          className="input"
          placeholder="Your Nickname"
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default Intro;
