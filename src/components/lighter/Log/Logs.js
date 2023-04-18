import React, { useEffect, useState, useRef } from "react";
import Log from "./Log";
import databaseAccess from "../../../database/db-connection";

import "./Log.css";
import RouteMap from "../RouteMap/RouteMap";

function Logs({ logs, setMessage, submit }) {
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const database = new databaseAccess();
  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef(null);

  const handleInput = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    inputRef.current.value = "";
    setShowButton(false);
    submit();
    setSubmitEnabled(false);
  };

  return (
    <div className="home-container">
      <div className="component-container">
        {submitEnabled && (
          <div className="message-container">
            <h1>Wanna leave a message?</h1>
            <textarea
              ref={inputRef}
              type="input"
              onChange={handleInput}
              className="input how"
            />
            <button
              className={
                showButton ? "standar-button" : "standar-button selected"
              }
              onClick={sendMessage}
            >
              Submit
            </button>
          </div>
        )}
        {logs != null && (
          <>
            <h1>Log</h1>
            {logs.length != 0 ? (
              <div className="logs-container">
                <div className="logs">
                  {logs
                    .slice(0)
                    .reverse()
                    .map((log, key) => (
                      <Log log={log} />
                    ))}
                </div>
              </div>
            ) : (
              <h2>Not logs recorded yet!</h2>
            )}

            <h1>Route Map</h1>
            <RouteMap logs={logs} />
          </>
        )}
      </div>
    </div>
  );
}

export default Logs;
