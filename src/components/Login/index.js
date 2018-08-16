import React from "react";
import { connect } from "react-redux";
import { Button, Input, Form, Checkbox, Label } from "antd";
import { login, logout } from "actions/auth";
import { Redirect, Link } from "react-router-dom";
import { store } from "models/store";
import "antd/dist/antd.css";
import "./style.less";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      showPassword: false
    };

    /* use connect() instead of store.subscribe directly
    store.subscribe(() => {
      const { auth, assets } = store.getState();
      if (auth.login) {
        this.setState(() => ({
          gotoAssets: true
        }));
      }
    });
    */
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
    const { msg, auth } = this.props;

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
          {auth && auth.authenticated ? <Redirect to="/assets" /> : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: credentials => {
    dispatch(login(credentials));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
