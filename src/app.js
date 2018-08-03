import ReactDom from "react-dom";
import React from "react";
import Auth from "routes/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "models/store";
import "./index.less";

// to enable module hot reload(instead of page reload)
if (module.hot) {
  module.hot.accept();
}

function App() {
  return (
    <div className="app">
      <Router>
        <React.Fragment>
          <Route
            path="/login"
            render={() => {
              console.info("go to login page.");
              return (
                <div className="login">
                  <Auth store={store} />
                </div>
              );
            }}
          />
          <Route path="/" render={() => <span>The root.</span>} />
        </React.Fragment>
      </Router>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
