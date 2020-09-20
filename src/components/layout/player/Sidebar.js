import React from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from "../../../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src="./images/Sg.png" />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
