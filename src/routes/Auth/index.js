import React from "react";
import Login from "components/Login";
import { withRouter } from "react-router-dom";
import { store } from "models/store";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.info("withRouter: ", withRouter);
    const Wlogin = withRouter(Login);
    return <Wlogin store={store} />;
  }
}
