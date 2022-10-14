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
    <div className="intro-container">
      <img src={LighterImg} alt="" className="lighter-img" />
      <div className="who-are-you-container">
        <h2>Hi! Im lighter {nickname}, who are you?</h2>
        <div className="who-are-you-input-container">
          <input type="text" className="input" defaultValue="NickName" onChange={handleInput}/>
          <button className="standar-button" onClick={handleClick}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
