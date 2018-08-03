import React from "react";
import Login from "components/Login";
import { store } from "models/store";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Login store={store} />;
  }
}
