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
    <div className="log">
      <label className="tag">{log.when}</label>
      <label className="tag">{log.nickname + " got the lighter"}</label>
      <label className="tag">{"How?    " + log.how}</label>
      <label className="tag">{"Where?    " + locationName}</label>
    </div>
  );
};

export default Log;
