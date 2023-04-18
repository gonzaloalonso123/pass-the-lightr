import React from "react";
import Log from "../Log/Log";
import Logs from "../Log/Logs";
import RouteMap from "../RouteMap/RouteMap";

function FirstPage({ log, setPageNum }) {
  return (
    <div className="home-container">
      {log != null && (
        <>
          <h1>Log</h1>
          {log.length != 0 ? (
            <div className="logs-container">
              <div className="logs">
                {log
                  .slice(0)
                  .reverse()
                  .map((log, key) => (
                    <Log log={log} />
                  ))}
              </div>
            </div>
          ) : (
            <h2>No logs recorded yet!</h2>
          )}
          <h1>Route Map</h1>

          <RouteMap logs={log} />
        </>
      )}
      <button className="standar-button" onClick={() => setPageNum(2)}>
        Log yourself!
      </button>
      <h2 style={{ color: "white" }}>One log per person, please!</h2>
    </div>
  );
}

export default FirstPage;
