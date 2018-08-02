import React from "react";
import { Button, Input } from "antd";
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
    this.setState((prevState, props) => ({
      [fieldName]: fieldValue
    }));
  };

  render() {
    let { userName, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
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
          <div>
            <Button type="primary" htmlType="submit" className="primary">
              Login
            </Button>
          </div>
        </div>
      </form>
    );
  }
}
