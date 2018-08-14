import React, { Component } from "react";
import { withRouter } from "react-router";
import RegisterForm from "components/Register";

class Register extends Component {
  render() {
    return <RegisterForm />;
  }
}

export default withRouter(Register);
