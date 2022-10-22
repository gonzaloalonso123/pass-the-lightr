import React, { useEffect, useState } from "react";
import "./SomeStats.css";
import Database from "../../../database/db-connection";

function SomeStats() {
  const [amountlighters, setAmountLighters] = useState("0");

  const database = new Database();
  useEffect(() => {
    getAmountOfLighters();
  });

  const getAmountOfLighters = async () => {
    setAmountLighters(await database.getAmountOfLighters());
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
        TOTAL KM<h1>11231</h1>
      </div>
      <div className="downStatsContainer">
        <div className="someStat">
          TOTAL PASSED<h1>1182</h1>
        </div>
        <div className="someStat">
          TOTAL LIGHTERS<h1>{amountlighters}</h1>
        </div>
      </div>
    </div>
  );
}

export default SomeStats;
