import ReactDom from "react-dom";
import React from "react";
import Login from "components/Login";
import { store } from "models/store";
import authReducer from "reducers/auth";
import "./index.css";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <React.Fragment>
      <Login store={store} />
    </React.Fragment>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
