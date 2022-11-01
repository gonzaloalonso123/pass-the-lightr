import React from "react";
import LocationPicker from "./LocationPicker";

function Where({ whereAnswer, setWhereAnswer }) {
  return (
    <div className="lighterPageSection">
      <h1>And do you remember where exactly?</h1>
      {/* <LocationPicker setWhereAnswer={setWhereAnswer} /> */}
      <LocationPicker
        setWhereAnswer={setWhereAnswer}
        whereAnswer={whereAnswer}
      />
    </div>
  );
}

export default Where;
