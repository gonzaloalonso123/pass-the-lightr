import React from "react";
import "./WhoCreated.css";
import Database from "../../../database/db-connection";

export default function WhoCreated() {

  const database = new Database();
  const createLighter = () => {
    Database.getLighters();
  }

  return (
    <div className="who-created-container">
      <div className="who-created-text-container">
        <h2>Who created this page and why?</h2>
          Daan Kuiper is currently developing this app with Gonzalo Alonso
      </div>
    </div>
  );
}
