import WhoCreated from "../whoCreated/WhoCreated.js";
import Header from "../header/Header.js";
import SomeStats from "../someStats/SomeStats.js";
import TrackIt from "../trackIt/TrackIt.js";
import "./Home.css";
import { useState } from "react";

function Home() {

  const [showDev, setShowDev] = useState(false);
  return (
    <div className="home-container">
      <Header showDev={showDev}/>
      {/* <hr style={{width:"80%"}}/> */}
      <TrackIt setShowDev = {setShowDev}/>
      {/* <hr style={{width:"80%"}}/> */}
      <SomeStats />
      {/* <hr style={{width:"80%"}}/> */}
      <WhoCreated />
    </div>
  );
}

export default Home;
