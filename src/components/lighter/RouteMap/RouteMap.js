import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";

function RouteMap({ logs }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map logs={logs} />;
}

const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  fillOpacity: 0,
  scale: 3,
};

const options = {
  icons: [
    {
      icon: lineSymbol,
      offset: "0",
      repeat: "20px",
    },
  ],
  strokeOpacity: 0,
  strokeColor: "#ff477b",
};

function Map({ logs }) {
  useEffect(() => {
    makePolyLine();
  }, [logs]);
  const [polyLine, setPolyline] = useState([]);
  const [visibleMarker, setVisibleMarker] = useState(-1);

  const makePolyLine = () => {
    let coordinates = [];
    logs.map((log) => {
      console.log(log);
      coordinates.push({
        lat: parseFloat(log.where.lat),
        lng: parseFloat(log.where.lng),
      });
    });
    console.log(coordinates);
    setPolyline([...coordinates]);
  };

  return (
    <GoogleMap
      zoom={4}
      center={ logs[1] != null ? { lat: logs[1].where.lat, lng: logs[1].where.lng } : { lat : 40, lng : -3}}
      mapContainerClassName="map-container"
    >
      {polyLine.length != 0 && <Polyline path={polyLine} options={options} />}
      {logs.map((point, index) => (
        <Marker
          onClick={() => setVisibleMarker(index)}
          position={{ lat: point.where.lat, lng: point.where.lng }}
        >
          {index === visibleMarker && (
            <InfoWindow visible>
              <div>
                <span style={{color : "#ff477b"}}>{point.nickname}</span>
                <p>{point.where.name}</p>
                <span style={{color : "#ff477b"}}>{point.when}</span>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}
export default RouteMap;
