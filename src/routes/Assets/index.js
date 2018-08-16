import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { add, update, removeAssets, getAssets } from "actions/assets";
import AssetsList from "components/Assets/AssetsList";

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
    /*
    this.unsubscribe = store.subscribe(() => {
      this.state = store.getState().assets;
    });
    */
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
  assets: state.assets
});

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(add(payload))
});

/*
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Assets)
);
*/

export default connect(
  mapStateToProps // ,
  // mapDispatchToProps
)(Assets);
