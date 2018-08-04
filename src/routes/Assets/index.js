import React from "react";
import AssetsList from "components/Assets/AssetsList";
import AssetsDetail from "components/Assets/AssetsDetail";
import { store } from "models/store";

export default class Assets extends React.Component {
  render() {
    console.info(store.getState());
    const list = [...store.getState().assets];
    console.info("list: ", list);
    return (
      <React.Fragment>
        <AssetsList store={store} list={list} />
      </React.Fragment>
    );
  }
}
