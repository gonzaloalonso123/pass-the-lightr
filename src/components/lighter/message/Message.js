import React, { Component, useRef, useState } from "react";
import databaseAccess from "../../../database/db-connection";
import "./Message.css";

export default function Message({ id, nickName }) {
  const [input, setInput] = useState("");
  const database = new databaseAccess();
  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const submit = () => {
    let user = nickName;
    if (nickName == "" || nickName == "NickName") {
      user = "Anonymous";
    }
    database.postMessage(id, input, user);
    inputRef.current.value = "";
    setShowButton(false);
  };

  return (
    <div className="lighterPageSection">
      <h1>Wanna leave a message?</h1>
      <textarea
        ref={inputRef}
        type="input"
        onChange={handleInput}
        className="input how"
      />
        <button className={showButton ? "standar-button" : "standar-button selected"} onClick={submit}>
          Submit
        </button>
    </div>
  );
}
