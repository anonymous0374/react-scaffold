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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(() => ({
        auth: {
          ...store.getState().auth
        }
      }));
    });
  }

  render() {
    const {
      auth: { login, userName, msg }
    } = this.state;

    return (
      <Provider store={store}>
        <div className="app">
          <Routes login={login} userName={userName} msg={msg} />
        </div>
      </Provider>
    );
  }
}

ReactDom.render(<App store={store} />, document.getElementById("root"));
