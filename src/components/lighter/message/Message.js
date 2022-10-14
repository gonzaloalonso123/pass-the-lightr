import React, { Component, useRef, useState } from "react";
import databaseAccess from "../../../database/db-connection";
import "./Message.css";

export default function Message({id, nickName, getLighter}) {
  const [input, setInput] = useState("");
  const database = new databaseAccess();
  const [showButton, setShowButton] = useState(true);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const submit = () => {
    let user = nickName;
    if(nickName == "" || nickName == "NickName"){
      user = "Anonymous";
    }
    database.postMessage(id, input, user);
    setTimeout(getLighter, 1000);
    // getLighter();
    setShowButton(false);
  };

  return (
    <div className="questions-container">
      <hr style={{ width: "100%" }} />
      <h1>Wanna leave a message?</h1>
      <textarea type="input" onChange={handleInput} className="input how" />
      {showButton && <button className="standar-button" onClick={submit}>
        Submit
      </button>}
    </div>
  );
}
