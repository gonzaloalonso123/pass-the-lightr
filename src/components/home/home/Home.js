import WhoCreated from "../whoCreated/WhoCreated.js";
import Header from "../header/Header.js";
import SomeStats from "../someStats/SomeStats.js";
import TrackIt from "../trackIt/TrackIt.js";
import { useState } from "react";

function Home() {
  const [showDev, setShowDev] = useState(false);
  return (
    <div className="home-container">
      <div className="component-container">
        <Header showDev={showDev} />
        <TrackIt setShowDev={setShowDev} />
        <SomeStats />
        <WhoCreated />
      </div>
    </div>
  );
}

export default Home;
