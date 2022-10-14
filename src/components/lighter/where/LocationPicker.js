import React, { useState } from "react";

import MapPicker from "react-google-map-picker";
import "./Where.css";

const DefaultLocation = { lat: 52.37, lng: 4.89 };
const DefaultZoom = 10;

const LocationPicker = ({setWhereAnswer}) => {
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
          <input className ='input location' type="text" value={location.lat} disabled />
          <label>Lon:</label>
          <input className ='input location' ype="text" value={location.lng} disabled />
          <label>Zoom:</label>
          <input className ='input location' type="text" value={zoom} disabled />
        </div>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          className="map"
          style={{ height: "70vw" , width: "80vw" , maxHeight: "400px", maxWidth : "500px" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyBT5Nnzu7hHJ4CJbsSFbJkcPd_Vd15X1EY"
        />
      </div>
    </>
  );
};

export default LocationPicker;
