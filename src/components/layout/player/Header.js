import React from "react";
import "./css/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon className="header-left-icon" />
        <input
          placeholder="Search for Artists, Songs or Playlists"
          type="text"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
