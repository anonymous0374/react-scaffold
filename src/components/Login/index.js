import React from "react";
import { Button, Input, Form, Checkbox, Label } from "antd";
import { login, logout } from "actions/auth";
import { Redirect, Link } from "react-router-dom";
import { store } from "models/store";
import "antd/dist/antd.css";
import "./style.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      gotoAssets: false,
      showPassword: false
    };

    store.subscribe(() => {
      const { auth, assets } = store.getState();
      if (auth.login) {
        this.setState(() => ({
          gotoAssets: true
        }));
      }
    });
  }

  submitHandler = event => {
    event.preventDefault();
    store.dispatch(login(this.state));
  };

  textChangeHandler = (fieldName, fieldValue) => {
    this.setState(() => ({
      [fieldName]: fieldValue
    }));
  };

  cancelHandler = () => {
    this.setState(() => ({
      userName: "",
      password: "",
      gotoAssets: false
    }));
  };

  render() {
    const { userName, password, gotoAssets, showPassword } = this.state;
    const { msg } = this.props;
    return (
      <div className="login">
        <form onSubmit={this.submitHandler} className="login-form">
          <h1 className="form-title">
            Welcome Login to Assets Management System
          </h1>
          <div className="grid-container">
            <div className="grid-title">Username: </div>
            <div className="grid-field">
              <Input
                type="text"
                placeholder="user name"
                value={userName}
                onChange={event => {
                  this.textChangeHandler("userName", event.target.value);
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
              {msg ? <div className="error-message">{msg}</div> : null}
            </div>
          </div>
          <div className="foot-buttons">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button onClick={this.cancelHandler}>Cancel</Button>
          </div>
          <div className="register-link">
            <Link to="/register">Don't have an Account? Click to Register</Link>
          </div>
          {gotoAssets ? <Redirect to="/assets" /> : null}
        </form>
      </div>
    );
  }
}
