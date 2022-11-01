import React from "react";
import "./DidYouFindMe.css";

function DidYouFindMe({
  setDidYouFindMeAnswer,
  didYouFindMeAnswer,
  setShowHowInput,
  setShowMap
}) {
  const handleClick = (code) => {
    switch (code) {
      case "1":
        setDidYouFindMeAnswer("found");
        setShowMap(true);
        setShowHowInput(false);
        break;
        case "2":
          setDidYouFindMeAnswer("got");
          setShowMap(true);
          setShowHowInput(false);
        break;
      case "3":
        setDidYouFindMeAnswer("other");
        setShowHowInput(true);
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
    </div>
  );
}

export default DidYouFindMe;
