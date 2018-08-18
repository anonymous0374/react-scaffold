import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { add, update, removeAssets, getAssets } from "actions/assets";
import AssetsList from "components/Assets/AssetsList";

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    const {
      props: { load, auth }
    } = this;
    load(auth.name);
  }

  render() {
    return (
      <React.Fragment>
        <AssetsList />
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
