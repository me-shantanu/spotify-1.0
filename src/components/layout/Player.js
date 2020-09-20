import React from "react";
import "../css/Player.css";
import Sidebar from "./player/Sidebar";
import Body from "./player/Body";
import Footer from "./player/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        {/* sidebar  */}
        <Sidebar />
        {/* body  */}
        <Body spotify={spotify} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
