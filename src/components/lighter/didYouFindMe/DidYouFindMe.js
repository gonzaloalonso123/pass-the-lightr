import React from "react";
import "./DidYouFindMe.css";

function DidYouFindMe({setDidYouFindMeAnswer, didYouFindMeAnswer}) {
  return (
    <div className="lighterPageSection">
      <h1>Did you find me or got me?</h1>
      <div className="button-container">
        <button className={didYouFindMeAnswer === 'found' ? "standar-button selected" : "standar-button"} onClick={() => setDidYouFindMeAnswer('found')}>Found</button>
        <button className={didYouFindMeAnswer === 'got' ? "standar-button selected" : "standar-button"} onClick={() => setDidYouFindMeAnswer('got')}>Got me</button>
        <button className={didYouFindMeAnswer === 'other' ? "standar-button selected" : "standar-button"}onClick={() => setDidYouFindMeAnswer('other')}>Other</button>
      </div>
    </div>
  );
}

export default DidYouFindMe;
