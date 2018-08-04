import ReactDom from "react-dom";
import React from "react";
import Auth from "routes/Auth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Assets from "routes/Assets";
import { store } from "models/store";
import "./index.less";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    const that = this;
    store.subscribe(() => {
      that.setState(() => ({
        auth: {
          login: store.getState().auth.login
        }
      }));
    });
  }

  render() {
    const {
      auth: { login }
    } = this.state;
    console.info("login in render: ", login);
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/login"
              render={() =>
                login ? (
                  <Redirect to="/" />
                ) : (
                  <div className="login">
                    <Auth store={store} />
                  </div>
                )
              }
            />
            <Route
              path="/"
              exact
              render={() => {
                const element = login ? (
                  <span>welcome</span>
                ) : (
                  <Redirect to="/login" />
                );
                return element;
              }}
            />
            <Route
              path="/assets"
              render={() =>
                login ? (
                  <Assets />
                ) : (
                  <div className="login">
                    <Auth store={store} />
                  </div>
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
