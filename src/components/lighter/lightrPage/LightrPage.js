import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro/Intro";
import { useState } from "react";
import DidYouFindMe from "../didYouFindMe/DidYouFindMe";
import How from "../didYouFindMe/How";
import Where from "../where/Where";
import When from "../when/When";
import Message from "../message/Message";
import Posts from "../Posts/Posts";
import NameTheLighter from "../nameTheLighter/NameTheLighter";
import Database from "../../../database/db-connection";
import ForumLogPicker from "../ForumLogPicker/ForumLogPicker";
import Log from "../Log/Log";
import "./LightrPage.css";
import { doc, onSnapshot } from "firebase/firestore";

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
  const [submited, setSubmited] = useState(false);
  const database = new Database();
  const db = database.getDb();

  async function submit() {
    setSubmited(true);
    database.submitLog();
  }

  useEffect(() => {
    if (whereAnswer == "") {
      onSnapshot(doc(db, "lighters", id.id), (doc) => {
        setLighter(doc.data());
        console.log(doc.data());
      });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [whereAnswer, datePicked, submited, LogOrForum]);

  return (
    <div className="home-container">
      <div className="component-container">
        <Intro
          setShowDidYouFindMe={setShowDidYouFindMe}
          setShowNameTheLighter={setShowNameTheLighter}
          setUserName={setUserName}
          nickname={lighter != null ? lighter.nickname : ""}
        />
        {showNameTheLighter && (
          <NameTheLighter
            setShowDidYouFindMe={setShowDidYouFindMe}
            id={id.id}
          />
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
        {datePicked !== null && (
          <>
            <button
              className={
                submited
                  ? "standar-button submit selected"
                  : "standar-button submit"
              }
              onClick={submit}
            >
              Submit
            </button>
          </>
        )}
        {submited && <ForumLogPicker setLogOrForum={setLogOrForum} />}
        {LogOrForum === "forum" && <Message id={id.id} nickName={userName} />}
        {LogOrForum === "forum" && <Posts posts={lighter.messages} />}
        {LogOrForum === "log" && <Log />}
      </div>
    </div>
  );
}

export default LightrPage;
