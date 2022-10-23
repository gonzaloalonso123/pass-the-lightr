import React, { useState } from "react";
import { useEffect } from "react";
import "./Log.css";
import Geocode from "react-geocode";

const Log = ({ log }) => {

  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    console.log(log);
    Geocode.fromLatLng(log.where.lat, log.where.lng).then(
      (response) => {
        setLocationName(response.results[0].formatted_address);
      },
      (error) => {
        console.error(error);
        setLocationName("Unknown");
      }
    );
  }, []);

  return (
    <div className="border-bottom">
      <label className="date">{log.when}</label>
      <label className="logData">{log.nickname + " got the lighter in " + locationName + "."}</label>
      <label className="logData">{"How?    " + log.how + "." }</label>
    </div>
  );
};

export default Log;
