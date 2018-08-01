import React from "react";
import { AssetsList } from "components/Assets/AssetsList";
import { AssetsDetail } from "components/Assets/AssetsDetail";

export default class Assets extends React.Component {
  render() {
    return (
      <>
        <AssetsList list={this.props} />
      </>
    );
  }
}
