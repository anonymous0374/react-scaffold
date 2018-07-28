import React from "react";
import "./style.less";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = submitHandler.bind(this);
  }

  // submitHandler(event) {
  //   console.info(event);
  // }

  // submitHandler = () => {};
  function submitHandler(event) {};

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="grid-container">
          <div className="grid-column">Col 1</div>
          <div className="grid-column">Col 2</div>
          <div className="grid-column">Col 3</div>
          <div className="grid-column">Col 4</div>
          <div className="grid-column">Col 5</div>
        </div>
      </form>
    );
  }
}
