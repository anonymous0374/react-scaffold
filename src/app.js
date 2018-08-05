import ReactDom from "react-dom";
import React from "react";
import { store } from "models/store";
import Routes from "routes";
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
          ...store.getState().auth
        }
      }));
    });
  }

  render() {
    const {
      auth: { login }
    } = this.state;

    return (
      <div className="app">
        <Routes login={login} />
      </div>
    );
  }
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
