import React from "react";
import "./css/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../../../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="play-body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img
          src={discover_weekly?.images[0].url}
          alt={discover_weekly?.images[0].title}
        />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icon">
          <PlayCircleFilledIcon className="body-icon-play" />
          <FavoriteIcon fontSize="large" className="body-icon-fav" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
