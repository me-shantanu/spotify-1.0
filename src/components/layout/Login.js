import React from "react";

import "../css/Login.css";
import { loginUrl } from "./spotify";
// use BEM for naming  classname
function Login() {
  return (
    <div className="login">
      <img src="./images/Sw.png" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
