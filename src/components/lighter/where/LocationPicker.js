import React, { useEffect, useState } from "react";

import MapPicker from "react-google-map-picker";
import "./Where.css";

const DefaultLocation = { lat: 52.37, lng: 4.89 };
const DefaultZoom = 10;

const LocationPicker = ({ setWhereAnswer }) => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    setWhereAnswer({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  useEffect(() => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  }))

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <>
      <div className="map-container">
        <div className="button-container location">
          {/* <button onClick={handleResetLocation}>Reset Location</button> */}
          <label>Lat:</label>
          <button className="input" disabled>
            {location.lat.toFixed(4)}
          </button>
          <label>Lon:</label>
          <button className="input" disabled>
            {location.lng.toFixed(4)}
          </button>
          <label>Zoom:</label>
          <button className="input" disabled>
            {zoom}
          </button>
        </div>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          className="map"
          style={{
            height: "70vw",
            width: "80vw",
            maxHeight: "400px",
            maxWidth: "500px",
          }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyBT5Nnzu7hHJ4CJbsSFbJkcPd_Vd15X1EY"
        />
      </div>
    </>
  );
};

export default LocationPicker;
