import React from "react";
import Log from "./Log";
import "./Log.css";



function Logs({logs}) {
  return (
    <div className="logs-container">
      <div className="logs">
        {logs.map((log,key) => <Log /*codeligther = {log.codeligther} location = {log.location}*/ date = {log.date} username = {log.username} key ={key}/> )}
      </div>
    </div>
  );
}

export default Logs;