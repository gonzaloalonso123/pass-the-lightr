import React, { useEffect } from "react";
import Log from "./Log";
import "./Log.css";

function Logs({ logs }) {
  useEffect(() => {
    console.log(logs);
  });
  return (
    <div className="logs-container">
      <div className="logs">
        {logs.reverse().map((log, key) => (
          <Log log={log} />
        ))}
      </div>
    </div>
  );
}

export default Logs;
