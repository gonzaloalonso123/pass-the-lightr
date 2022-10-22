import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./When.css";
import "react-datepicker/dist/react-datepicker.css";

function When({ datePicked, setDatePicked }) {
  return (
    <div className="lighterPageSection">
      <h1>When did you get it?</h1>
      <div className="date-container">
        <DatePicker
          inline
          selected={datePicked}
          onChange={(date) => setDatePicked(date)}
        />
      </div>
    </div>
  );
}

export default When;
