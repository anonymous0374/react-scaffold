import React from "react";
import "antd/dist/antd.css";
import "./style.less";

export default class AssetsDetail extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <div className="title">{name}</div>
        <div className="grid-container">
          <div className="col-1" />
          <div className="col-2" />
          <div className="col-1" />
          <div className="col-2" />
        </div>
      </React.Fragment>
    );
  }
}
