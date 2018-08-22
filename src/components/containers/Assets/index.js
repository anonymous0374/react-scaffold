import React from "react";
import { connect } from "react-redux";
import { add, update, removeAssets, getAssets } from "actions/assets";
import AssetsList from "presentationals/Assets/AssetsList";

class Assets extends React.Component {
  componentDidMount() {
    const {
      props: { load, auth }
    } = this;
    load(auth.name);
  }

  render() {
    const {
      props: { assets }
    } = this;
    return (
      <React.Fragment>
        <AssetsList assets={assets} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  assets: state.assets
});

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(add(payload)),
  load: user => dispatch(getAssets(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assets);
