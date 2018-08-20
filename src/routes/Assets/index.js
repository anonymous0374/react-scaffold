import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { add, update, removeAssets, getAssets } from "actions/assets";
import AssetsList from "components/Assets/AssetsList";
import getRestrictedComponent from "hocs/RestrictedComponent.js";

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
