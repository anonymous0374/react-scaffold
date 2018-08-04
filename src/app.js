import ReactDom from "react-dom";
import React from "react";
import Auth from "routes/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "models/store";
import "./index.less";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const { store } = this.props;
    this.state = store.getState();
    const that = this;
    store.subscribe(() => {
      const {
        auth: { login }
      } = store.getState();
      that.setState(() => ({
        auth: {
          login
        }
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/login"
              render={() =>
                store.getState().auth.login ? (
                  "welcome"
                ) : (
                  <div className="login">
                    <Auth store={store} />
                  </div>
                )
              }
            />
            <Route
              path="/"
              render={() => {
                const {
                  auth: { login }
                } = store.getState();
                console.info("state updated! login: ", login);
                const element = store.getState().auth.login ? (
                  <span>welcome</span>
                ) : (
                  <div className="login">
                    <Auth store={store} login={login} />
                  </div>
                );
                return element;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
