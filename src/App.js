import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/layout/Login";
import { getTokenFromUrl } from "./components/layout/spotify";

import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/layout/Player";

import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcWQ2M8FvjXd1").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    //code..
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
