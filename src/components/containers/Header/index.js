import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FlowLogger from 'containers/Flo';
import { login, logout } from 'actions/auth';
import { log } from 'actions/cashflow';
import Header from 'presentationals/Header';

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: credentials => dispatch(login(credentials)),
  log: data => dispatch(log(data)),
});

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    const {
      props: { visible, log },
    } = this;

    return (
      <Fragment>
        <Header />
        <FlowLogger visible={visible} log={log} />
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);
