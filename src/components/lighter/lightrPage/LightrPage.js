import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro/Intro";
import { useState } from "react";
import DidYouFindMe from "../didYouFindMe/DidYouFindMe";
import How from "../didYouFindMe/How";
import Where from "../where/Where";
import LocationPicker from "../where/LocationPicker";
import When from "../when/When";
import Message from "../message/Message";
import Posts from "../Posts/Posts";
import NameTheLighter from "../nameTheLighter/NameTheLighter";
import Database from "../../../database/db-connection";
import ForumLogPicker from "../ForumLogPicker/ForumLogPicker";
import Log from "../Log/Log";

function LightrPage() {
  const id = useParams();
  const [showDidYouFindMe, setShowDidYouFindMe] = useState(false);
  const [showNameTheLighter, setShowNameTheLighter] = useState(false);
  const [didYouFindMeAnswer, setDidYouFindMeAnswer] = useState("");
  const [whereAnswer, setWhereAnswer] = useState("");
  const [datePicked, setDatePicked] = useState(null);
  const [lighter, setLighter] = useState(null);
  const [userName, setUserName] = useState("");
  const [LogOrForum, setLogOrForum] = useState("");
  const database = new Database();

  async function getLighter() {
    const lighters = await database.getLighters();
    lighters.forEach((oneLighter) => {
      if (oneLighter.id === id.id) {
        setLighter(oneLighter);
      }
    });
    console.log(lighter);
  }

  useEffect(() => {
    getLighter();
  }, []);

  return (
    <div className="home-container">
      <Intro
        setShowDidYouFindMe={setShowDidYouFindMe}
        setShowNameTheLighter={setShowNameTheLighter}
        setUserName = {setUserName}
        nickname={lighter != null ? lighter.nickname : ""}
      />
      {showNameTheLighter && (
        <NameTheLighter setShowDidYouFindMe={setShowDidYouFindMe} id={id.id} />
      )}
      {showDidYouFindMe && (
        <DidYouFindMe
          didYouFindMeAnswer={didYouFindMeAnswer}
          setDidYouFindMeAnswer={setDidYouFindMeAnswer}
        />
      )}
      {didYouFindMeAnswer === "other" && <How />}
      {didYouFindMeAnswer != "" && (
        <Where whereAnswer={whereAnswer} setWhereAnswer={setWhereAnswer} />
      )}
      {whereAnswer !== "" && (
        <When datePicked={datePicked} setDatePicked={setDatePicked} />
      )}
      {datePicked !== null && <ForumLogPicker setLogOrForum={setLogOrForum}/>}
        {LogOrForum === "forum" && <Message id = {id.id} nickName={userName} getLighter = {getLighter} />}
        {LogOrForum === "forum" &&  <Posts posts={lighter.messages} />}
        {LogOrForum === "log" && <Log />}
    </div>
  );
}

export default LightrPage;
