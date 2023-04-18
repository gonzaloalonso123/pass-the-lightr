import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro/Intro";
import { useState } from "react";
import DidYouFindMe from "../didYouFindMe/DidYouFindMe";
import Where from "../where/Where";
import When from "../when/When";
import NameTheLighter from "../nameTheLighter/NameTheLighter";
import Database from "../../../database/db-connection";
import Logs from "../Log/Logs";

import "./LightrPage.css";
import { doc, onSnapshot } from "firebase/firestore";
import FirstPage from "../firstPage/FirstPage";

function LightrPage2() {
  const [pageNum, setPageNum] = useState(0);
  const id = useParams();
  const [didYouFindMeAnswer, setDidYouFindMeAnswer] = useState("");
  const [whereAnswer, setWhereAnswer] = useState("");
  const [datePicked, setDatePicked] = useState(new Date());
  const [lighter, setLighter] = useState(null);
  const [userName, setUserName] = useState("Anonymous");
  const [submited, setSubmited] = useState(false);
  const [lighterName, setLighterName] = useState(false);
  const [message, setMessage] = useState("");
  const [distanceTraveled, setDistanceTraveled] = useState(0);
  const database = new Database();
  const db = database.getDb();

  async function submit() {
    setSubmited(true);
    let distance = addDistanceToLighter(whereAnswer);
    database.submitLog(
      id.id,
      userName,
      didYouFindMeAnswer,
      datePicked,
      whereAnswer,
      message,
      distance
    );
    if (lighter.nickname === "" && lighterName !== "") {
      database.giveNickname(id.id, lighterName);
    }
  }

  const haversine_distance = (coordinate1, coordinate2) => {
    console.log(coordinate1, coordinate2);
    var R = 6371.071; // Radius of the Earth in km
    var rlat1 = coordinate1.lat * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = coordinate2.lat * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (coordinate2.lng - coordinate1.lng) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    console.log("distance:" + d);
    return d;
  };

  const addDistanceToLighter = (currentCoords) => {
    if (lighter.log.length > 0) {
      return distanceTraveled +
        haversine_distance(currentCoords, {
          lat: lighter.log[lighter.log.length - 1].where.lat,
          lng: lighter.log[lighter.log.length - 1].where.lng,
        });
    } else {
      return 0;
    }
  };

  const handleButtonClick = (action) => {
    switch (action) {
      case "back":
        if (pageNum === 1 && lighter.nickname === "") {
          pageNum = 0;
        }
        setPageNum(pageNum - 1);
        break;
      case "next":
        setPageNum(pageNum + 1);
        break;
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "lighters", id.id), (doc) => {
      setLighter(doc.data(), () => {
        if (lighter.distanceTraveled !== undefined) {
          setDistanceTraveled(lighter.distanceTraveled);
        } else {
          setDistanceTraveled(0);
        }
      });
    });
  }, []);

  return (
    <div className="lighter-page-container">
      {pageNum > 1 && pageNum < 6 && (
        <div className="lighter-page-header">
          <button
            className="standar-button lighter-page-back-button"
            onClick={() => handleButtonClick("back")}
          >
            Back
          </button>
        </div>
      )}

      <div className="component-container">
        {pageNum === 0 && lighter != null && (
          <NameTheLighter
            id={id.id}
            nickname={lighter.nickname}
            setLighterName={setLighterName}
          />
        )}
        {pageNum === 1 && (
          <FirstPage log={lighter.log} setPageNum={setPageNum} />
        )}
        {pageNum === 2 && <Intro setUserName={setUserName} />}
        {pageNum === 3 && (
          <DidYouFindMe
            setDidYouFindMeAnswer={setDidYouFindMeAnswer}
            didYouFindMeAnswer={didYouFindMeAnswer}
          />
        )}
        {pageNum === 4 && (
          <Where whereAnswer={whereAnswer} setWhereAnswer={setWhereAnswer} />
        )}
        {pageNum === 5 && (
          <When datePicked={datePicked} setDatePicked={setDatePicked} />
        )}
        {pageNum === 6 && (
          <Logs
            logs={lighter.log}
            setMessage={setMessage}
            submit={submit}
            submitEnabled={true}
          />
        )}
        {pageNum < 6 && pageNum != 1 && (
          <div className="lighter-page-footer">
            <button
              className="standar-button lighter-page-next-button"
              onClick={() => handleButtonClick("next")}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LightrPage2;
