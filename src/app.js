import "./index.css";
import ReactDom from "react-dom";
import React from "react";
import Login from "./components/Login";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

ReactDom.render(<Login />, document.getElementById("root"));
