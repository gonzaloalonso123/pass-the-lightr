import React, { useEffect, useRef, useState } from "react";
import "./Where.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

function LocationPicker({ setWhereAnswer }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map setWhereAnswer={setWhereAnswer} />;
}

function Map({ setWhereAnswer }) {
  const [selectedLng, setSelectedLng] = useState(9);
  const [selectedLat, setSelectedLat] = useState(47);
  const [searchedPlace, setSearchedPlace] = useState("");
  const [searchBox, setSearchBox] = useState(null);
  const inputRef = useRef(null);
  const onLoad = (ref) => setSearchBox(ref);
  const onPlacesChanged = () => {
    let place = searchBox.getPlaces()[0];
    setSelectedLat(place.geometry.location.lat());
    setSelectedLng(place.geometry.location.lng());
    setWhereAnswer({
      name: inputRef.current.value,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  const handleInput = (event) => {
    setSearchedPlace(event.target.value);
  };

  const mapClicked = (e) => {
    setSelectedLat(e.latLng.lat());
    setSelectedLng(e.latLng.lng());
    setWhereAnswer({
      name: "",
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <GoogleMap
      onClick={mapClicked}
      zoom={4}
      center={{ lat: selectedLat, lng: selectedLng }}
      mapContainerClassName="map-container"
    >
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
        libraries={["places"]}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Where did you get it?"
          onChange={handleInput}
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            top: "0",
            position: "absolute",
            left: "50%",
            marginLeft: "-120px",
          }}
        />
      </StandaloneSearchBox>
      <Marker position={{ lat: selectedLat, lng: selectedLng }} />
    </GoogleMap>
  );
}
export default LocationPicker;
