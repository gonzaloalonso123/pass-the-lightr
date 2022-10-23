import React, { useEffect, useState } from "react";
import "./DidYouFindMe.css";

function How({ setDidYouFindMe , setShowMap}) {

  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setDidYouFindMe(input);
    setShowMap(true);
  };

  useEffect(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [])

  return (
    <div className="lighterPageSection">
      <textarea
        onChange={handleInput}
        type="input"
        className="input how"
        defaultValue="How?"
      />
      <button className="standar-button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}

export default How;
