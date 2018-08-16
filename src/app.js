import ReactDom from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "models/store";
import Routes from "routes";
import "./index.less";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
      </div>
    </Provider>
  );
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
