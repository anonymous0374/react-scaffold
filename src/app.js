import ReactDom from "react-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "models/store";
import Routes from "routes";
import { getUser } from "actions/auth";
import "./index.less";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  componentDidMount() {
    // get user information after the app mounted(and check authentication status as well)
    store.dispatch(getUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Routes />
        </div>
      </Provider>
    );
  }
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
