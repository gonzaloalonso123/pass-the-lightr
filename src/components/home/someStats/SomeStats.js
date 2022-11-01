import React, { useEffect, useState } from "react";
import "./SomeStats.css";
import Database from "../../../database/db-connection";

function SomeStats() {
  const [metadata, setMetadata] = useState(null);

  const database = new Database();
  useEffect(() => {
    getMetadata();
  });

  const getMetadata = async () => {
    setMetadata(await database.getMetadata());
  };

  const getTotalPassedFound = async () => {
    // setAmountLighters(await database.getAmountOfLighters());
  };

  const getTotalKm = async () => {
    // setAmountLighters(await database.getAmountOfLighters());
  };

  return (
    <div className="some-stats-container">
      <div className="someStat one">
        <h1>{metadata != null ? metadata.totalKm : 0}</h1>
      </div>
      <div className="downStatsContainer">
        <div className="someStat">
          <h1>{metadata != null ? metadata.totalPassed : 0}</h1>
        </div>
        <div className="someStat">
          <h1>{metadata != null ? metadata.totalLighters : 0}</h1>
        </div>
      </div>
    </div>
  );
}

export default SomeStats;
