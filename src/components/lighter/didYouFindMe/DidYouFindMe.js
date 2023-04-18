import React, { useState } from "react";
import "./DidYouFindMe.css";
import How from "./How";

function DidYouFindMe({
  setDidYouFindMeAnswer,
  didYouFindMeAnswer
}) {
  const [howEnabled, setHowEnabled] = useState(false);
  const handleClick = (code) => {
    switch (code) {
      case "1":
        setDidYouFindMeAnswer("found");
        setHowEnabled(false);
        break;
      case "2":
        setDidYouFindMeAnswer("got");
        setHowEnabled(false);
        break;
      case "3":
        setDidYouFindMeAnswer("other");
        setHowEnabled(true);
        break;
    }
  };
  return (
    <div className="lighterPageSection">
      <h1>Did you find me or got me?</h1>
      <div className="button-container">
        <button
          className={
            didYouFindMeAnswer === "found"
              ? "standar-button selected"
              : "standar-button"
          }
          onClick={() => handleClick("1")}
        >
          Found
        </button>
        <button
          className={
            didYouFindMeAnswer === "got"
              ? "standar-button selected"
              : "standar-button"
          }
          onClick={() => handleClick("2")}
        >
          Got me
        </button>
        <button
          className={
            didYouFindMeAnswer === "other"
              ? "standar-button selected"
              : "standar-button"
          }
          onClick={() => handleClick("3")}
        >
          Other
        </button>
      </div>
      {howEnabled && <How setDidYouFindMe={setDidYouFindMeAnswer}/>}
    </div>
  );
}

export default DidYouFindMe;
