import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./style.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  submitHandler = (data) => {
    
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="grid-container">
          <div className="grid-column">
            <div className="v-align-center">Col 1!!</div>
          </div>
          <div className="grid-column">
            <Button className="primary">Click Me</Button>
          </div>
          <div className="grid-column">Col 3</div>
          <div className="grid-column">Col 4</div>
          <div className="grid-column">Col 5</div>
        </div>
      </form>
    );
  }
}
