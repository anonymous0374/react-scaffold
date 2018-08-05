import React from "react";
import AssetsList from "components/Assets/AssetsList";
import { store } from "models/store";

export default class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
    this.unsubscribe = store.subscribe(() => {
      this.state = store.getState().assets;
    });
  }

  render() {
    const list = [...this.state];

    return (
      <React.Fragment>
        <AssetsList list={list} />
      </React.Fragment>
    );
  }
}
