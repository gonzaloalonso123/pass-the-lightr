import React, { useEffect, useState } from "react";
import "./Log.css";

const Log = ({ log }) => {
  useEffect(() => console.log(log), []);
  return (
    <div className="log">
      <div className="log-info">
        <div className="date">{log.when}</div>
        <div className="username">
          <span style={{ color: "#FF477B" }}>{log.nickname}</span>&nbsp;
          <span style={{ color: "black" }}>{log.how + " the lighter at "}</span>&nbsp;
          <span style={{ color: "#FF477B" }}>{log.where.name}</span>&nbsp;
        </div>
      </div>
      <div className="log-message">{log.message}</div>
    </div>
  );
};

export default Log;
