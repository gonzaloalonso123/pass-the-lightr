import React, { useState } from "react";
import LighterImg from "../../../images/lighter-sample.png";
import "./Intro.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Intro({
  nickname,
  setShowDidYouFindMe,
  setShowNameTheLighter,
  setUserName,
}) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    console.log(nickname);
    if (nickname === "") {
      setShowNameTheLighter(true);
    } else {
      setShowDidYouFindMe(true);
    }
    setUserName(input);
  };

  return (
    <div className="lighterPageSection">
      <img src={LighterImg} alt="" className="lighter-img" />
      <h1>Hi! Im lighter {nickname}, who are you?</h1>
      <div className="who-are-you-input-container">
        <input
          type="text"
          className="input"
          defaultValue="NickName"
          onChange={handleInput}
        />
        <button className="standar-button" onClick={handleClick}>
          Log In!
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Intro;
