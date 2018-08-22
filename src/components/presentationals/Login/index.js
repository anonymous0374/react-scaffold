import React from "react";
import { Button, Input, Form, Checkbox, Label } from "antd";
import { login } from "actions/auth";
import "antd/dist/antd.css";
import "./style.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      showPassword: false
    };
  }

  submitHandler = event => {
    const { login } = this.props;
    event.preventDefault();
    // store.dispatch(login(this.state));
    login(this.state);
  };

  textChangeHandler = (fieldName, fieldValue) => {
    this.setState(() => ({
      [fieldName]: fieldValue
    }));
  };

  cancelHandler = () => {
    this.setState(() => ({
      name: "",
      password: "",
      authenticated: false,
      showPassword: false
    }));
  };

  render() {
    const { name, password, showPassword } = this.state;
    const {
      auth: { authenticated, msg }
    } = this.props;

    return (
      <div className="login">
        <form onSubmit={this.submitHandler} className="login-form">
          <h1 className="form-title">
            Welcome Login to Assets Management System
          </h1>
          <div className="grid-container">
            <div className="grid-title">name: </div>
            <div className="grid-field">
              <Input
                type="text"
                placeholder="user name"
                value={name}
                onChange={event => {
                  this.textChangeHandler("name", event.target.value);
                }}
              />
            </div>
            <div className="grid-title">Password: </div>
            <div className="grid-field">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={event => {
                  this.textChangeHandler("password", event.target.value);
                }}
              />
            </div>
            <div className="grid-title" />
            <div className="grid-field">
              <Checkbox
                id="show"
                type="checkbox"
                checked={showPassword}
                onChange={event =>
                  this.textChangeHandler("showPassword", event.target.checked)
                }
              />
              <label htmlFor="show">Show Password</label>
              <Checkbox
                id="remember"
                type="checkbox"
                style={{ marginLeft: "5px" }}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div />
            {msg ? <div className="error-message">{msg}</div> : null}
          </div>
          <div className="foot-buttons">
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.submitHandler}
            >
              Login
            </Button>
            <Button onClick={this.cancelHandler}>Cancel</Button>
          </div>
          <div className="register-link">
            <Link to="/register">Don't have an Account? Click to Register</Link>
          </div>
        </form>
      </div>
    );
  }
}
