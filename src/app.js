import ReactDom from "react-dom";
import React from "react";
import Login from "components/Login";
import { createStore, combineReducers } from "redux";
import authReducer from "reducers/auth";
import "./index.css";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

const initialState = {
  login: false
};
const store = createStore(combineReducers({ authReducer }), {
  ...initialState
});
// const store = createStore(combineReducers({ authReducer }));

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Login store={store} />
      </React.Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
