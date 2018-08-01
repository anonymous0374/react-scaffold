import React from "react";
import "style.less";

export default class AssetsDetail extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="title">{name}</div>
        <div className="grid-container">
          <div className="col-1" />
          <div className="col-2" />
          <div className="col-1" />
          <div className="col-2" />
        </div>
      </>
    );
  }
}
