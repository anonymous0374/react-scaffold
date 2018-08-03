import React from "react";
import { Button, Input, Form } from "antd";
import { login, logout } from "actions/auth";
import "antd/dist/antd.css";
import "./style.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.store.dispatch(login(this.state));
  };

  textChangeHandler = (fieldName, fieldValue) => {
    this.setState(() => ({
      [fieldName]: fieldValue
    }));
  };

  cancelHandler = () => {
    this.setState(() => ({
      userName: "",
      password: ""
    }));
  };

  render() {
    const { userName, password } = this.state;
    return (
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
              type="text"
              placeholder="password"
              value={password}
              onChange={event => {
                this.textChangeHandler("password", event.target.value);
              }}
            />
          </div>
        </div>
        <div className="foot-buttons">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button onClick={this.cancelHandler}>Cancel</Button>
        </div>
      </form>
    );
  }
}
