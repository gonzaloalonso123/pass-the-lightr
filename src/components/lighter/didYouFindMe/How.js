import React, { useEffect, useState } from "react";
import "./DidYouFindMe.css";

function How({ setDidYouFindMe }) {
  const handleInput = (e) => {
    setDidYouFindMe(e.target.value);
  };

  return (
    <div className="lighterPageSection">
      <textarea
        onChange={handleInput}
        type="input"
        className="input how"
        defaultValue="How?"
      />
    </div>
  );
}

export default How;
